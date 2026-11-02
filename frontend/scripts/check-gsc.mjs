import fs from "node:fs";
import path from "node:path";
import crypto from "node:crypto";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const credsPath = path.resolve(__dirname, "../service_account.json");

if (!fs.existsSync(credsPath)) {
  console.log("No service account json found at", credsPath);
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
  console.log("🔑 Authenticating Service Account:", creds.client_email);
  const token = await getAccessToken("https://www.googleapis.com/auth/webmasters.readonly https://www.googleapis.com/auth/indexing");
  console.log("✅ OAuth Token acquired!");

  // 1. List sites in Search Console
  console.log("\n📋 Fetching verified sites in Search Console...");
  const sitesRes = await fetch("https://www.googleapis.com/webmasters/v3/sites", {
    headers: { Authorization: `Bearer ${token}` },
  });
  const sitesData = await sitesRes.json();
  console.log("Sites in GSC:", JSON.stringify(sitesData, null, 2));

  // 2. If sites exist, inspect URLs
  const siteUrl = sitesData.siteEntry && sitesData.siteEntry.length > 0 ? sitesData.siteEntry[0].siteUrl : "https://devsynx.com/";
  console.log(`\n🔍 Inspecting URLs for site: ${siteUrl}`);

  // Test inspecting a few key URLs
  const testUrls = [
    "https://devsynx.com/",
    "https://devsynx.com/usa/",
    "https://devsynx.com/software-house-islamabad/",
    "https://devsynx.com/services/custom-web-development/"
  ];

  for (const inspectionUrl of testUrls) {
    try {
      const inspectRes = await fetch("https://searchconsole.googleapis.com/v1/urlInspection/index:inspect", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          inspectionUrl: inspectionUrl,
          siteUrl: siteUrl,
        }),
      });

      const inspectData = await inspectRes.json();
      console.log(`\n--- Inspection for ${inspectionUrl} ---`);
      if (inspectData.inspectionResult) {
        const idx = inspectData.inspectionResult.indexStatusResult;
        console.log(`Verdicts: coverageState = ${idx.coverageState}`);
        console.log(`Verdicts: indexingState = ${idx.indexingState}`);
        console.log(`Verdicts: verdict = ${idx.verdict}`);
        console.log(`Last Crawl Time: ${idx.lastCrawlTime || "Not crawled yet"}`);
        console.log(`Crawled As: ${idx.crawledAs || "N/A"}`);
        console.log(`RobotsTxtState: ${idx.robotsTxtState}`);
        console.log(`PageFetchState: ${idx.pageFetchState}`);
      } else {
        console.log("Response:", JSON.stringify(inspectData));
      }
    } catch (err) {
      console.error(`Error inspecting ${inspectionUrl}:`, err.message);
    }
  }

  // 3. Sitemaps status
  console.log(`\n🗺️ Checking submitted sitemaps for ${siteUrl}...`);
  try {
    const sitemapsRes = await fetch(`https://www.googleapis.com/webmasters/v3/sites/${encodeURIComponent(siteUrl)}/sitemaps`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    const sitemapsData = await sitemapsRes.json();
    console.log("Sitemaps:", JSON.stringify(sitemapsData, null, 2));
  } catch (err) {
    console.error("Sitemaps error:", err.message);
  }
}

main().catch(console.error);
