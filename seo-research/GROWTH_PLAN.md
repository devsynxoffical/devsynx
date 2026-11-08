# DEVSYNX Organic Growth Plan (Nov 2026 – Jan 2027)

This file is the source of truth for the automated SEO work runs (every 12 hours).
Each run reads it, does the next unchecked items, ticks them off, and appends to the
run log at the bottom.

## Baseline (8 Nov 2026)

- Search Console property: `https://devsynx.com/` (not the www property).
- About 54–62 clicks per 28 days, most of them brand searches ("devsynx").
- 172 URLs in the sitemap. On 8 Nov: 26 of the 31 Nov-6 pages indexed; the 12 Nov-7 pages not yet known to Google.
- First page-1 non-brand rankings: "how to choose a software development company" (#1–6),
  "app development in pakistan" (#8), "software houses in multan" (#8), "software house near me" (#9),
  "request a proposal software development ksa" (#4).

## Targets (honest)

| Window | Clicks / 28 days | What has to be true |
|---|---|---|
| Today | ~60 | mostly brand |
| End of month 1 (8 Dec) | 120–200 | all pages indexed, city pages on page 1–2 for low-competition terms |
| End of month 2 (8 Jan) | 250–500+ | page 1 for 20+ commercial terms, Google Business Profile live, first directory links |

500+ clicks within one month is a stretch: new pages usually need 4–8 weeks to settle,
and the money keywords also need authority (reviews, links, Google Business Profile),
which only the owner can create. Rankings cannot be guaranteed.

## Quality rules for every new page (non-negotiable)

1. Verified demand: target phrase has measured search volume (OpenSEO / Search Console), or a clear strategic reason noted in the log.
2. Unique: at most 45% five-word-shingle overlap with any other indexable page (script in the run checklist).
3. Depth: 900+ words of real, specific content, a direct answer near the top, 4–5 FAQs, local or industry details.
4. Truthful: only real case studies, no invented offices, addresses, reviews, client counts or statistics.
5. Title starts with the exact search phrase, under 60 characters including " | Devsynx".
6. Never delete, rename or redirect existing URLs without checking Search Console first.
7. Build, link check and schema check must pass before pushing. Pushing deploys automatically.
8. At most 4 new pages per run and 10 per week. Improving existing pages counts as progress too.

## 12-hour run checklist

1. `git pull`; read this file.
2. Search Console (free): indexing status of unindexed pages, page-1 and page-2 queries for the last 7 days.
3. Pick up to 4 backlog items (new pages or improvements). Prefer: page-2 queries that can reach page 1, then new pages with verified demand.
4. Implement, build (`cd frontend && npx next build`), run the checks (broken links, JSON-LD, similarity), screenshot one new page.
5. Commit and push to `claude/friendly-mccarthy-n4j32s` (GitHub Actions deploys when FTP secrets are set).
6. After deploy is live: IndexNow submit for changed URLs (OpenSEO, free).
7. Update the backlog checkboxes and the run log below; post a short update to the owner with the URLs to request indexing for.

## Backlog

### Week 1 (8–14 Nov): indexing and Pakistan + Gulf expansion
- [x] Header with dropdown menus (Services, Industries, Locations, Portfolio, Resources, About); `/locations/` hub; cleaner footer
- [x] Software house pages: Gujranwala (480/mo), Bahawalpur (390+210), Sialkot (320+110), Sargodha (260+90)
- [x] Web development Islamabad retitled for "web designer in islamabad" (480/mo, KD 12)
- [ ] Software house pages: Gujrat (210), Abbottabad (170+50), Hyderabad (90+50)
- [ ] Qatar: web design company Doha ("web design company in doha" 390, "website design qatar" 390)
- [ ] Qatar: retitle Doha software page toward "software company in qatar" (260) / "it company qatar" (590) without cannibalising
- [ ] Kuwait: software / IT company Kuwait ("it company kuwait" 320, "software company kuwait" 140)
- [ ] Kuwait: website design Kuwait (320)
- [ ] Oman: software / IT company Oman ("it company oman" 210, "software company oman" 140, "web development company oman" 210)
- [ ] Oman: web design company Oman ("web design company in oman" 210, "website design oman" 140)
- [ ] Add the new Gulf pages to `seo/navigation.ts` (Middle East column) and `/locations/`

### Middle East matrix (UAE research 8 Nov; Dubai area searches had zero measured volume, so areas go inside service pages, never separate pages)
- [x] Dubai software page retitled "IT & Software Development Company in Dubai" ("it company dubai" 2,400 KD 3, "it company uae" 590 KD 7)
- [x] Doha software page retitled "IT & Software Company in Qatar" ("it company qatar" 590, "software company qatar" 260)
- [x] SEO agency Dubai (/seo-agency-dubai/): "seo agency/company/services dubai" 5,400 KD 33, "seo agency uae" 480 KD 0; use Ustaad.ae case study; list Dubai areas served
- [x] Digital marketing agency Dubai (/digital-marketing-agency-dubai/): 3,600 KD 27, "digital marketing agency uae" 720 KD 0
- [ ] E-commerce website development Dubai (/ecommerce-website-development-dubai/): 320 KD 28 + "ecommerce development company dubai" 170 KD 9
- [x] IT & software company Abu Dhabi (/it-company-abu-dhabi/): "it company abu dhabi" 720 KD 9, "web development company abu dhabi" 110 KD 0, "web design company abu dhabi" 170
- [ ] SEO & digital marketing Abu Dhabi: "digital marketing agency abu dhabi" 390 KD 12, "seo company abu dhabi" 260 KD 11
- [x] IT company & web design Sharjah (/it-company-sharjah/): "it company sharjah" 390 KD 0, "web design company sharjah" 260 KD 0
- [ ] AEO / GEO service page (/aeo-geo-services/): "generative engine optimization" 110 (UAE), "answer engine optimization" 50, "aeo services" 50; check US/UK volume with remaining credits first
- [ ] Kuwait, Oman, Qatar web design (see Week 1 list)
- [ ] Saudi Arabia (Riyadh, Jeddah, Dammam) and Bahrain: Arabic keyword research first (English not supported by the data source)

### US metros (from Nov research; SEO-agency city terms are left to the separate RankEmpire site)
- [ ] Web design company Dallas (2,400 KD 24)
- [ ] Web design company New York (1,000 KD 33)
- [ ] Web design company Miami (880 KD 31)
- [ ] Web design company Houston (590 KD 35) and San Francisco (590 KD 33)
- [ ] Web design company Austin (480 KD 35) and Los Angeles (480 KD 37)
- [ ] Each US web design page needs city-specific content and must stay under 45% similarity to the existing app/software page for the same city

### Week 2 (15–21 Nov): push page-2 terms to page 1
- [ ] SEO Lahore / Karachi / Pakistan pages: strengthen for "seo expert in lahore" (1,000), "seo expert in pakistan" (1,000), "seo expert karachi" (590, KD 3)
- [ ] Web development Lahore / Karachi: strengthen for "web designer in lahore" (320) and "web designer karachi" (210)
- [ ] Software house Islamabad / Rawalpindi: add Islamabad and Rawalpindi case studies, office details once the owner provides the address
- [ ] UAE: Abu Dhabi and Sharjah pages ("web design company sharjah" 260 KD 0, "digital marketing agency abu dhabi" 390 KD 12)
- [ ] Internal links: link each city page to its nearest cities and to the matching industry pages

### Week 3 (22–28 Nov): international demand with low difficulty
- [ ] US: web design company Dallas (2,400/mo, KD 24)
- [ ] US: app development company Chicago merge check vs software page (590, KD 27)
- [ ] Canada: web development company Calgary (590, KD 28): improve existing Calgary page
- [ ] UK: app development company London (390): improve London page sections for apps
- [ ] Blog: "App development cost in Pakistan" and "Website price in Pakistan" guides linking to calculators (check volumes first)

### Week 4 (29 Nov – 5 Dec): conversions and authority support
- [ ] GA4 events for WhatsApp, phone and form clicks; report leads by page
- [ ] Prepare Clutch, GoodFirms, DesignRush and P@SHA listing texts for the owner
- [ ] Saudi Arabia (Jeddah) and Bahrain: Arabic keyword research (needs credits) before any page

### Month 2 (Dec – early Jan)
- [ ] Weekly: improve the 5 pages with the most impressions but position 8–20
- [ ] 2 data-backed guides per week where verified demand exists
- [ ] Expand industry pages with new case studies as projects are added
- [ ] Monthly full audit: duplicates, thin pages, broken links, Core Web Vitals

## Owner actions (only the owner can do these)

- [ ] Add GitHub repository secrets FTP_SERVER, FTP_USERNAME, FTP_PASSWORD (enables automatic deploys)
- [ ] Search Console: request indexing for 10 URLs per day from the run updates
- [ ] Google Business Profile for the Islamabad office (biggest lever for "near me" searches)
- [ ] Ask the host to whitelist Googlebot, Bingbot and AI crawlers from the bot-protection challenge
- [ ] Send the office street address and the true company-size figure (clients vs projects)
- [ ] Rotate the OpenSEO and FTP passwords that were shared in chat

## OpenSEO credits

- inspectify8 key: 162 credits left (8 Nov). myouryour172 key: 78 left. Connected MCP account: ~4.
- Keyword research costs ~85 credits per batch of ~100–300 keywords. Search Console data and IndexNow are free.
- Spend credits only on research for new markets; use Search Console for monitoring.

## Run log

- 2026-11-08 (night): Contact form fixed (it never sent anything; now emails info@devsynx.com via contact-submit.php with CSV backup), floating WhatsApp button, header dropdowns fixed (no overflow). Built SEO Agency Dubai, Digital Marketing Agency Dubai, IT Company Abu Dhabi, IT Company Sharjah (all <15% similarity, 940–1,300 words). Next: e-commerce Dubai, Qatar web design, Kuwait, Oman, AEO/GEO page.
- 2026-11-08 (late): GitHub Actions FTPS deploy confirmed working (first full upload ~25 min). UAE research (23 credits): Dubai areas have no measurable demand; "it company dubai" 2,400 KD 3. Dubai and Doha software pages retitled for IT-company searches. Credits left: inspectify 139, myouryour 78.
- 2026-11-08: Plan created. Header and footer rebuilt, /locations/ hub, 4 Pakistan city pages, deploy workflow added. IndexNow: 57 URLs submitted.
