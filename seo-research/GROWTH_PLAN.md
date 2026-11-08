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

- 2026-11-08: Plan created. Header and footer rebuilt, /locations/ hub, 4 Pakistan city pages, deploy workflow added. IndexNow: 57 URLs submitted.
