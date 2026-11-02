#!/usr/bin/env node
import fs from "node:fs";
import path from "node:path";
import crypto from "node:crypto";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const ROOT_DIR = path.resolve(__dirname, "..");

const SITE_HOST = "devsynx.com";
const SITEMAP_URL = `https://${SITE_HOST}/sitemap.xml`;
const INDEXNOW_KEY = "f9c42b8e3a1d4790b561d87a2e5c9f3b";
const INDEXNOW_KEY_LOCATION = `https://${SITE_HOST}/${INDEXNOW_KEY}.txt`;

// Locate potential Google Service Account credentials
const GOOGLE_KEY_PATHS = [
  process.env.GOOGLE_APPLICATION_CREDENTIALS,
  path.join(ROOT_DIR, "service_account.json"),
  path.join(ROOT_DIR, "google-indexing.json"),
  path.join(ROOT_DIR, "..", "service_account.json"),
  path.join(ROOT_DIR, "..", "google-indexing.json"),
].filter(Boolean);

function extractUrlsFromXml(xmlText) {
  const urls = [];
  const regex = /<loc>(https?:\/\/[^<]+)<\/loc>/g;
  let match;
  while ((match = regex.exec(xmlText)) !== null) {
    urls.push(match[1].trim());
  }
  return urls;
}

async function getSitemapUrls() {
  const localSitemapPath = path.join(ROOT_DIR, "out", "sitemap.xml");

  if (fs.existsSync(localSitemapPath)) {
    console.log(`📄 Reading URLs from local export: ${localSitemapPath}`);
    const xml = fs.readFileSync(localSitemapPath, "utf-8");
    const urls = extractUrlsFromXml(xml);
    if (urls.length > 0) return urls;
  }

  console.log(`🌐 Fetching remote sitemap: ${SITEMAP_URL}`);
  try {
    const res = await fetch(SITEMAP_URL, {
      headers: { "User-Agent": "Devsynx-IndexBot/1.0" },
    });
    if (res.ok) {
      const xml = await res.text();
      const urls = extractUrlsFromXml(xml);
      if (urls.length > 0) return urls;
    }
  } catch (err) {
    console.warn(`⚠️ Could not fetch remote sitemap: ${err.message}`);
  }

  // Fallback core high-priority URLs
  console.log("ℹ️ Using fallback priority core paths.");
  return [
    `https://${SITE_HOST}/`,
    `https://${SITE_HOST}/services/`,
    `https://${SITE_HOST}/clients/`,
    `https://${SITE_HOST}/portfolio/`,
    `https://${SITE_HOST}/team/`,
    `https://${SITE_HOST}/about/`,
    `https://${SITE_HOST}/contact/`,
    `https://${SITE_HOST}/blog/`,
    `https://${SITE_HOST}/usa/`,
  ];
}

async function submitIndexNow(urls) {
  console.log(`\n🚀 [1/3] Submitting ${urls.length} URLs to IndexNow (Bing, Yandex, Seznam, Naver)...`);
  
  // IndexNow batch limit is 10,000 URLs per call
  const batch = urls.slice(0, 10000);
  const payload = {
    host: SITE_HOST,
    key: INDEXNOW_KEY,
    keyLocation: INDEXNOW_KEY_LOCATION,
    urlList: batch,
  };

  try {
    const res = await fetch("https://api.indexnow.org/indexnow", {
      method: "POST",
      headers: {
        "Content-Type": "application/json; charset=utf-8",
      },
      body: JSON.stringify(payload),
    });

    if (res.status === 200 || res.status === 202) {
      console.log(`✅ IndexNow accepted batch successfully! (HTTP ${res.status})`);
      console.log(`   Bing & partner search engines notified for instant crawling.`);
    } else {
      const body = await res.text();
      console.warn(`⚠️ IndexNow responded with HTTP ${res.status}: ${body}`);
    }
  } catch (err) {
    console.error(`❌ IndexNow submission failed:`, err.message);
  }
}

async function pingSitemaps() {
  console.log(`\n📡 [2/3] Pinging Search Engine Sitemap Endpoints...`);
  const targets = [
    { name: "Google Ping", url: `https://www.google.com/ping?sitemap=${encodeURIComponent(SITEMAP_URL)}` },
    { name: "Bing Ping", url: `https://www.bing.com/ping?sitemap=${encodeURIComponent(SITEMAP_URL)}` },
  ];

  for (const target of targets) {
    try {
      const res = await fetch(target.url, { method: "GET" });
      console.log(`   ${res.ok ? "✅" : "⚠️"} ${target.name}: HTTP ${res.status}`);
    } catch (err) {
      console.log(`   ⚠️ ${target.name} ping error: ${err.message}`);
    }
  }
}

function findGoogleCredentials() {
  for (const candidate of GOOGLE_KEY_PATHS) {
    if (fs.existsSync(candidate)) {
      try {
        const raw = fs.readFileSync(candidate, "utf-8");
        const parsed = JSON.parse(raw);
        if (parsed.client_email && parsed.private_key) {
          return { path: candidate, credentials: parsed };
        }
      } catch {}
    }
  }
  return null;
}

function base64Url(obj) {
  const str = typeof obj === "string" ? obj : JSON.stringify(obj);
  return Buffer.from(str)
    .toString("base64")
    .replace(/=/g, "")
    .replace(/\+/g, "-")
    .replace(/\//g, "_");
}

async function getGoogleAccessToken(creds) {
  const now = Math.floor(Date.now() / 1000);
  const header = { alg: "RS256", typ: "JWT" };
  const claimSet = {
    iss: creds.client_email,
    scope: "https://www.googleapis.com/auth/indexing",
    aud: "https://oauth2.googleapis.com/token",
    exp: now + 3600,
    iat: now,
  };

  const encodedHeader = base64Url(header);
  const encodedClaim = base64Url(claimSet);
  const signInput = `${encodedHeader}.${encodedClaim}`;

  const signer = crypto.createSign("RSA-SHA256");
  signer.update(signInput);
  const signature = signer.sign(creds.private_key, "base64url");
  const jwt = `${signInput}.${signature}`;

  const params = new URLSearchParams({
    grant_type: "urn:ietf:params:oauth:grant-type:jwt-bearer",
    assertion: jwt,
  });

  const res = await fetch("https://oauth2.googleapis.com/token", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: params.toString(),
  });

  if (!res.ok) {
    const errText = await res.text();
    throw new Error(`OAuth token error HTTP ${res.status}: ${errText}`);
  }

  const data = await res.json();
  return data.access_token;
}

async function submitGoogleIndexing(urls) {
  console.log(`\n🔍 [3/3] Google Indexing API Submission...`);
  const credsMatch = findGoogleCredentials();

  if (!credsMatch) {
    console.log(`ℹ️ No Google Service Account JSON detected.`);
    console.log(`   To activate automated Googlebot indexing:`);
    console.log(`   1. Enable 'Web Search Indexing API' in Google Cloud Console.`);
    console.log(`   2. Create a Service Account and download 'service_account.json'.`);
    console.log(`   3. Add service account email as 'Owner' in Google Search Console.`);
    console.log(`   4. Place 'service_account.json' into /frontend/ or set GOOGLE_APPLICATION_CREDENTIALS.`);
    return;
  }

  console.log(`🔑 Using Google Service Account from: ${credsMatch.path}`);
  try {
    const token = await getGoogleAccessToken(credsMatch.credentials);
    console.log(`🔒 Authenticated with Google Cloud. Submitting URLs...`);

    // Google Indexing API daily quota is 200 URLs/day
    const submissionLimit = Math.min(urls.length, 200);
    let successCount = 0;

    for (let i = 0; i < submissionLimit; i++) {
      const url = urls[i];
      try {
        const res = await fetch("https://indexing.googleapis.com/v3/urlNotifications:publish", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({
            url,
            type: "URL_UPDATED",
          }),
        });

        if (res.ok) {
          successCount++;
        } else if (res.status === 429) {
          console.warn(`⚠️ Google Indexing quota reached (HTTP 429).`);
          break;
        } else {
          const errBody = await res.text();
          console.warn(`⚠️ Google Indexing response (HTTP ${res.status}): ${errBody}`);
          break;
        }
      } catch (err) {
        console.warn(`   Submission error for ${url}: ${err.message}`);
      }
    }

    console.log(`✅ Google Indexing API: Submitted ${successCount} URLs directly to Googlebot.`);
  } catch (err) {
    console.error(`❌ Google Indexing API error: ${err.message}`);
  }
}

async function main() {
  console.log("==================================================");
  console.log("⚡ Devsynx Automated Search Indexing Engine");
  console.log("==================================================");

  const urls = await getSitemapUrls();
  console.log(`📊 Total discoverable URLs: ${urls.length}`);

  await submitIndexNow(urls);
  await pingSitemaps();
  await submitGoogleIndexing(urls);

  console.log("\n✨ Automated indexing cycle finished!");
  console.log("==================================================");
}

main().catch((err) => {
  console.error("Fatal error:", err);
  process.exit(1);
});
