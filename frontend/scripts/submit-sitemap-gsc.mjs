import fs from "node:fs";
import path from "node:path";
import crypto from "node:crypto";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const credsPath = path.resolve(__dirname, "../service_account.json");

if (!fs.existsSync(credsPath)) {
  console.error("No service account json found at", credsPath);
  process.exit(1);
}

const creds = JSON.parse(fs.readFileSync(credsPath, "utf-8"));

function base64Url(obj) {
  const str = typeof obj === "string" ? obj : JSON.stringify(obj);
  return Buffer.from(str)
    .toString("base64")
    .replace(/=/g, "")
    .replace(/\+/g, "-")
    .replace(/\//g, "_");
}

async function getAccessToken(scope) {
  const now = Math.floor(Date.now() / 1000);
  const header = { alg: "RS256", typ: "JWT" };
  const claimSet = {
    iss: creds.client_email,
    scope: scope,
    aud: "https://oauth2.googleapis.com/token",
    exp: now + 3600,
    iat: now,
  };

  const signInput = `${base64Url(header)}.${base64Url(claimSet)}`;
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
    throw new Error(`Auth failed HTTP ${res.status}: ${await res.text()}`);
  }
  const data = await res.json();
  return data.access_token;
}

async function main() {
  console.log("🔑 Authenticating as siteOwner on devsynx.com...");
  const token = await getAccessToken(
    "https://www.googleapis.com/auth/webmasters https://www.googleapis.com/auth/indexing"
  );
  console.log("✅ Authenticated successfully!\n");

  const siteUrl = "https://devsynx.com/";
  const sitemapUrl = "https://devsynx.com/sitemap.xml";

  // 1. Submit / refresh sitemap.xml in Google Search Console
  console.log(`📡 [1/2] Submitting sitemap ${sitemapUrl} to Google Search Console...`);
  try {
    const putRes = await fetch(
      `https://www.googleapis.com/webmasters/v3/sites/${encodeURIComponent(siteUrl)}/sitemaps/${encodeURIComponent(sitemapUrl)}`,
      {
        method: "PUT",
        headers: { Authorization: `Bearer ${token}` },
      }
    );
    if (putRes.status === 204 || putRes.ok) {
      console.log("✅ Google Search Console accepted sitemap submission! (HTTP 204/OK)");
    } else {
      console.log(`Status: ${putRes.status}`, await putRes.text());
    }
  } catch (err) {
    console.error("Failed to submit sitemap:", err.message);
  }

  // 2. Notify Google Indexing API for high-intent international and service pages
  console.log("\n🚀 [2/2] Pushing Priority URLs to Google Indexing API...");
  const priorityUrls = [
    "https://devsynx.com/services/seo-services/",
    "https://devsynx.com/services/custom-web-development/",
    "https://devsynx.com/services/ai-automation/",
    "https://devsynx.com/usa/",
    "https://devsynx.com/uk/",
    "https://devsynx.com/uae/",
    "https://devsynx.com/germany/",
    "https://devsynx.com/canada/",
    "https://devsynx.com/australia/",
  ];

  for (const url of priorityUrls) {
    try {
      const indexRes = await fetch(
        "https://indexing.googleapis.com/v3/urlNotifications:publish",
        {
          method: "POST",
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            url: url,
            type: "URL_UPDATED",
          }),
        }
      );
      if (indexRes.ok) {
        console.log(`  ✅ Published to Googlebot: ${url}`);
      } else {
        const errorData = await indexRes.json().catch(() => ({}));
        console.log(`  ⚠️ Notice for ${url}:`, errorData?.error?.message || `HTTP ${indexRes.status}`);
      }
    } catch (e) {
      console.error(`  ❌ Error publishing ${url}:`, e.message);
    }
  }

  console.log("\n🎉 GSC & Indexing API synchronization complete!");
}

main().catch(console.error);
