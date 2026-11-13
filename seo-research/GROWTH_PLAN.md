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
- [x] Software house Gujrat (210)
- [x] Software house Abbottabad (170+50)
- [x] Software house Hyderabad (90+50)
- [x] De-duplicate older PK software house pages (done run 5, all now 30–38%): Sargodha 62%, Sialkot 58% and others share the template services/pricing blocks; give each a `services` override (now supported in localPageOverrides) and distinct case studies until all are under 45%
- [x] Qatar: web design company Doha ("web design company in doha" 390, "website design qatar" 390)
- [ ] Qatar: retitle Doha software page toward "software company in qatar" (260) / "it company qatar" (590) without cannibalising
- [x] Kuwait: software / IT company Kuwait ("it company kuwait" 320, "software company kuwait" 140)
- [x] Kuwait: website design Kuwait (320)
- [x] Oman: software / IT company Oman ("it company oman" 210, "software company oman" 140, "web development company oman" 210)
- [x] Oman: web design company Oman ("web design company in oman" 210, "website design oman" 140)
- [x] Add the new Gulf pages to `seo/navigation.ts` (Middle East column) and `/locations/`

### Middle East matrix (UAE research 8 Nov; Dubai area searches had zero measured volume, so areas go inside service pages, never separate pages)
- [x] Dubai software page retitled "IT & Software Development Company in Dubai" ("it company dubai" 2,400 KD 3, "it company uae" 590 KD 7)
- [x] Doha software page retitled "IT & Software Company in Qatar" ("it company qatar" 590, "software company qatar" 260)
- [x] SEO agency Dubai (/seo-agency-dubai/): "seo agency/company/services dubai" 5,400 KD 33, "seo agency uae" 480 KD 0; use Ustaad.ae case study; list Dubai areas served
- [x] Digital marketing agency Dubai (/digital-marketing-agency-dubai/): 3,600 KD 27, "digital marketing agency uae" 720 KD 0
- [x] E-commerce website development Dubai (/ecommerce-website-development-dubai/): 320 KD 28 + "ecommerce development company dubai" 170 KD 9
- [x] IT & software company Abu Dhabi (/it-company-abu-dhabi/): "it company abu dhabi" 720 KD 9, "web development company abu dhabi" 110 KD 0, "web design company abu dhabi" 170
- [x] SEO & digital marketing Abu Dhabi (run 10: /digital-marketing-agency-abu-dhabi/, 1,199 words, 20%): "digital marketing agency abu dhabi" 390 KD 12, "seo company abu dhabi" 260 KD 11
- [x] IT company & web design Sharjah (/it-company-sharjah/): "it company sharjah" 390 KD 0, "web design company sharjah" 260 KD 0
- [x] AEO / GEO service page (/aeo-geo-services/): "generative engine optimization" 110 (UAE), "answer engine optimization" 50, "aeo services" 50; check US/UK volume with remaining credits first
- [x] Kuwait, Oman, Qatar web design (see Week 1 list)
- [ ] Saudi Arabia (Riyadh, Jeddah, Dammam) and Bahrain: Arabic keyword research first (English not supported by the data source)

### US metros (from Nov research; SEO-agency city terms are left to the separate RankEmpire site)
- [x] Web design company Dallas (2,400 KD 24)
- [x] Web design company New York (1,000 KD 33)
- [x] Web design company Miami (880 KD 31)
- [x] Web design company Houston (590 KD 35) and San Francisco (590 KD 33)
- [x] Web design company Austin (480 KD 35) and Los Angeles (480 KD 37)
- [x] Each US web design page needs city-specific content and must stay under 45% similarity to the existing app/software page for the same city

### Week 2 (15–21 Nov): push page-2 terms to page 1
- [x] "Crawled - currently not indexed" (11 Nov): digital-marketing-agency-lahore and web-design-company-new-york. Strengthen with more unique, specific content (real case study detail, original guide section) and more internal links from indexed pages, then ask the owner to request indexing again (resolved: both indexed by 12 Nov after the owner requested indexing)
- [x] De-duplicate SEO, digital marketing and web development Lahore/Karachi/Pakistan (run 6: now 32–41%, all 900+ words)
- [x] De-duplicate app development Dallas/Houston/Doha/Dubai/Calgary/Melbourne (47–61%, also under 900 words) (run 7: now 22–29%, all 900+ words)
- [x] De-duplicate software-development-company pages: Dubai 65%, Riyadh 56%, Toronto 53%, Doha 52%, Sydney 50%, New York 49%, London 47%; all under 900 words. New York and London are still unknown to Google, likely related (run 8: now 28–34%, all 900+ words)
- [x] Expand web-design-company-dubai (842 words, 43%) and app-development-company-pakistan (812 words) past 900 words (run 9: 916–987 words)
- [x] Expand software-house-rawalpindi (773 words) and software-house-pakistan (859 words) past 900 words (run 9: 916–987 words)
- [ ] Owner to confirm the true project count: About page says 100+, city page stats say 300+
- [x] SEO Lahore / Karachi / Pakistan pages: strengthen for "seo expert in lahore" (1,000), "seo expert in pakistan" (1,000), "seo expert karachi" (590, KD 3)
- [x] Web development Lahore / Karachi: strengthen for "web designer in lahore" (320) and "web designer karachi" (210)
- [ ] Software house Islamabad / Rawalpindi: add Islamabad and Rawalpindi case studies, office details once the owner provides the address
- [x] UAE: Abu Dhabi and Sharjah pages (Sharjah via it-company-sharjah; Abu Dhabi marketing page run 10)
- [ ] Internal links: link each city page to its nearest cities and to the matching industry pages

### Week 3 (22–28 Nov): international demand with low difficulty
- [x] US: web design company Dallas (2,400/mo, KD 24)
- [ ] US: app development company Chicago merge check vs software page (590, KD 27)
- [ ] Canada: web development company Calgary (590, KD 28): improve existing Calgary page
- [ ] UK: app development company London (390): improve London page sections for apps
- [ ] Blog: "App development cost in Pakistan" and "Website price in Pakistan" guides linking to calculators (check volumes first)

### Week 4 (29 Nov – 5 Dec): conversions and authority support
- [x] GA4 events for WhatsApp, phone and form clicks; report leads by page (run 10: whatsapp_click, phone_click, email_click + generate_lead with page)
- [x] Prepare Clutch, GoodFirms, DesignRush and P@SHA listing texts for the owner (seo-research/LISTINGS.md)
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

- 2026-11-13 21:33 PKT (run 10): GSC 7–13 Nov: seo near me #7.4 (was #9.4), software house in saddar rawalpindi #5.6, software house in islamabad #16 (was #19.4), seo services islamabad #5.7, seo services in islamabad #9.7 (54 impr, 1 click), software house near me #6.8–9.5, multan software houses #6, software house faisalabad #8.8, software houses in multan #8.9. Page 2: software house #12.4, software house in karachi #13.5, software house in multan #17.1. New York still 'Discovered - currently not indexed'; London back to 'unknown' in the inspection API. Done: (1) new /digital-marketing-agency-abu-dhabi/ (SEO + ads, Arabic/English, ADGM, Mussafah, Yas/Saadiyat, Al Ain; 1,199 words, 20% max similarity; added to the Middle East menu); (2) site-wide GA4 contact tracking: whatsapp_click, phone_click, email_click and generate_lead with page path and link text (floating button not double-counted), tested in a browser.
- 2026-11-13 09:14 PKT (run 9): GSC 7–13 Nov (13th incomplete): 18 clicks / 4,185 impressions vs 17 / 2,053 for 31 Oct–6 Nov (impressions roughly doubled). software-development-company-new-york and -london moved from 'unknown' to 'Discovered - currently not indexed' (owner should request indexing again). Page 1: seo services islamabad #5.8, multan software houses #6, software house in saddar rawalpindi #6.7, software house near me #9.5 (Islamabad page) and #7.3 (Gujranwala page), software houses in model town lahore #8 (new), seo near me #9.4, seo services in islamabad #9.9 (43 impr, 1 click), software house karachi #10.4 (1 click). Page 2: software house #11.7, software house in karachi #13.5, software house in islamabad #19.4. Done: (1) office wording corrected site-wide to the verified Old Airport Road, Chaklala Cantt., Rawalpindi office (Rawalpindi FAQ said the office was in Islamabad; template FAQ, badges, about, locations, Gulf FAQ, city pages); (2) software-house-rawalpindi expanded with an industries section and 2 FAQs (773 to 987 words); (3) software-house-pakistan, web-design-company-dubai and app-development-company-pakistan expanded with useful FAQs (859/842/812 to 947/916/921 words).
- 2026-11-12 21:15 PKT (run 8): GSC 6–12 Nov (12th incomplete): 18 clicks / 3,690 impressions vs 15 / 2,047 for 30 Oct–5 Nov (impressions +80%). Indexed: /careers/ (within hours). Still unknown: software-development-company-new-york, -london. Page 1: seo services islamabad #5.9 (up from #6.9), seo services in islamabad #9.9 (1 click), seo near me #9.7, multan software houses #4.7, software houses in multan #8.6, software house in saddar rawalpindi #6.8, software house near me #9.5, software house faisalabad #8.7, next-seo app router #5.8. Page 2: software house #11.9, software house in karachi #13.5, software house in islamabad #18.8 (new, 14 impr). Done: software development pages for Dubai, Doha, Riyadh, Toronto, Sydney, New York and London got city-specific services, highlights, case studies, engagement tables and FAQs (similarity 47–65% to 28–34%; words 740–847 to 902–924). Same day, owner requests: Google Business Profile moved to the verified Old Airport Rd listing and filled in (description, services, 24/7, socials, first post, phone 0302); website address/geo/hours matched; site-wide price cut (static sites PKR 35k–120k etc.) with 'Have a tighter budget?' WhatsApp prompts; calculators show DEVSYNX prices capped at $4,000; /careers/ page with CV upload; team page +3 members.
- 2026-11-12 09:14 PKT (run 7): GSC 5–11 Nov: 24 clicks / 3,929 impressions vs 11 / 2,050 for 29 Oct–4 Nov (impressions +92%, clicks more than doubled); 10 Nov 1,026 impressions. Indexed since the owner's requests: software-house-peshawar, digital-marketing-agency-lahore, web-design-company-new-york, web-design-company-miami, software-house-hyderabad. Still unknown: software-development-company-new-york, -london. Page 1: seo services islamabad #6.9, software house in saddar rawalpindi #6.8, multan software houses #4.7, software houses in multan #8.9, software house faisalabad #8.7, software house near me #9.5, next-seo app router #5.8, seo services in islamabad #10.3 (32 impr, 1 click), software house karachi #10.4 (1 click). Page 2: software house #11.9, software house in karachi #13.5, software house in multan #15.3, business process automation pakistan #12.2. Done: app development Dallas, Houston, Calgary, Melbourne, Dubai and Doha got app-specific services, a highlights section, distinct case studies, app engagement tables and FAQs (similarity 47–61% to 22–29%; words 746–939 to 913–958). Found the software-development-company group at 47–65% and under 900 words; next run. Wrote seo-research/BACKLINK_PLAN.md (owner request, 11 Nov).
- 2026-11-11 21:15 PKT (run 6): GSC 5–11 Nov: impressions record 1,002 on 10 Nov; first click on "seo services in islamabad" (#10.6). Page 1: seo services islamabad #6.9, multan software houses #4.7, software house in saddar rawalpindi #6.8, software houses in multan #8.9, software house faisalabad #8.7, software house near me #9.6, next-seo app router #5.8–6.9, seo near me #10.2. Page 2: software house #11.9, software house in karachi #13.5, software house in multan #15.8, business process automation pakistan #12.2. Abbottabad indexed within hours. Still unknown (owner has not requested indexing yet): software New York, London, Peshawar, Digital Marketing Lahore, web design New York, Miami. Done: SEO, digital marketing and web development pages for Lahore and Karachi got city-specific services, pricing rows, case studies and FAQs (similarity 55–64% to 32–41%; all 900+ words; SEO Pakistan now 39%). New page software-house-hyderabad (906 words, 35%). Owner asked about getting clients; told them SEO needs 1–3 months and suggested referrals, Google Ads, Google Business Profile and listings (texts ready). Awaiting their budget for a Google Ads plan.
- 2026-11-11 09:14 PKT (run 5): GSC 4–10 Nov: 23 clicks / 3,283 impressions vs 13 / 2,038 the week before (28 Oct–3 Nov), impressions +61%. Indexed within hours: web design San Francisco, Austin, Los Angeles, software house Gujrat. Still unknown to Google (live, 200, index/follow, in sitemap, so only a crawl request is missing): software New York, London, Peshawar, Digital Marketing Lahore, web design New York, Miami. Page 1 (non-brand, 4–10 Nov): seo services islamabad #6.9, software house in saddar rawalpindi #6.8, software house near me #9.2, multan software houses #4.7, software houses in multan #8.5, software house faisalabad #8, software house karachi #10.4 (1 click). Page 2: seo near me #10.6 (24 impr), software house #11.9 (15 impr, Pakistan page), software house in karachi #13.5, software house in multan #15.8, business process automation pakistan #11.8. Done: (1) all 10 older software house city pages now have city-specific services, pricing rows and case study sets; similarity dropped from 51–64% to 30–38%; case study heading changed from 'for Pakistani Brands' to 'Projects Our Team Has Shipped' because several listed projects are for clients abroad; (2) seo-research/LISTINGS.md with Clutch, GoodFirms, DesignRush, TechBehemoths, P@SHA, Google Business Profile and LinkedIn texts; (3) new software-house-abbottabad (932 words, 30%). Found 13 more local pages over 45% (SEO, digital marketing, web development, app development groups); added to backlog. Found a project-count conflict (About 100+, city pages 300+); asked owner.
- 2026-11-10 21:17 PKT (run 4): Indexed within an hour of going live: web-design-company-dallas, web-design-company-houston. Still unknown: web design New York and Miami (live today), software New York, London, Peshawar, Digital Marketing Lahore. GSC 1–10 Nov page 1: web-development-lahore #1.5, software house in saddar rawalpindi #6.8, software house near me #9.5, software houses in multan #8.5, software house faisalabad #8, digital marketing islamabad #7, app development in pakistan #8, request a proposal software development ksa #4.3 (Riyadh page), web development company in sharjah #8, how-to-choose guide #3.4–6.6 (419 impressions). Built: web-design-company-san-francisco, -austin, -los-angeles (981–1,081 words, max similarity 39%) and software-house-gujrat (1,050 words, 39%, Gujrat-specific services, case studies and FAQs). Added `services`/`servicesTitle` to page overrides. Found that older PK city pages (Sargodha 62%, Sialkot 58%) exceed 45% similarity because of shared template blocks; added a backlog item to fix them. Next: de-duplicate PK pages, Abbottabad, Hyderabad, Abu Dhabi SEO/digital marketing.
- 2026-11-10 09:14 PKT (run 3): GSC 1–7 Nov: 20 clicks / 2,336 impressions vs 15 / 1,784 the week before (+31% impressions); 7 Nov alone 511 impressions. /ai-seo-agency/ indexed. Still unknown to Google: New York, London, Peshawar, Digital Marketing Lahore (owner asked to request indexing). Built 4 US web design pages: web-design-company-dallas, -new-york, -miami, -houston (919–1,019 words, max similarity 41% Houston vs Dallas, all well below the matching app-development city pages). Added city-specific sections (Miami seasonal peaks + site-builder migration, Houston storm season + Spanish pages). Added to the North America menu. Next: San Francisco, Austin and Los Angeles web design; software house Gujrat, Abbottabad, Hyderabad.
- 2026-11-09 21:13 PKT (run 2): Indexed since run 1: app cost calculator, digital-marketing-agency-dubai, it-company-abu-dhabi, web-design-company-doha, it-company-kuwait, ecommerce-website-development-dubai, software-house-sialkot, /locations/. Still unknown: New York, London. GSC 6–9 Nov (partial): web-development-lahore #1.5 (1 click), seo-services-islamabad #13 (was #49 in Oct), software-house-rawalpindi #7.8, software-house-pakistan #12, karachi #13, lahore #16, how-to-choose guide #7.3 (132 impr, 1 click), multan 1 click. AEO research (34 credits, myouryour key now 44): US "ai seo agency" 1,600 KD 0, "ai seo services" 1,000 KD 2, "aeo agency" 590 KD 1, "llm seo" 720 KD 8; UK "ai seo agency" 480 KD 2. Built /ai-seo-agency/ (1,429 words, 8% max similarity, added to Services menu). Retitled SEO Lahore/Karachi/Pakistan to "SEO Expert & SEO Services in …" (+ expert FAQ) and web development Lahore/Karachi to "Web Designer & Web Development in …". Local preview server blocked by session policy, so the screenshot check is done on the live page after deploy.
- 2026-11-09 09:14 PKT (run 1): GSC (31 Oct–6 Nov): 17 clicks / 2,053 impressions vs 16 / 1,787 the week before (+15% impressions), avg position ~34 → ~29. Indexed within hours: seo-agency-dubai, software-house-gujranwala, healthcare-software-development. Still unknown to Google: app cost calculator, Chicago, New York, London, Peshawar, Digital Marketing Lahore. Page 1: "how to choose a software development company" #6.6 (36 impr), "best practices in choosing…" #3.4, "software house near me" #9.6, "software house in saddar rawalpindi" #8.3, "software house karachi" #10. Built: web-design-company-doha, it-company-kuwait (IT + website design), it-company-oman (IT + web development + web design), ecommerce-website-development-dubai; 910–1,033 words, max 16% similarity. Middle East menu reorganised. Owner pending: SMTP_PASSWORD secret (form emails), Google Business Profile, hosting crawler whitelist.
- 2026-11-08 (night): Contact form fixed (it never sent anything; now emails info@devsynx.com via contact-submit.php with CSV backup), floating WhatsApp button, header dropdowns fixed (no overflow). Built SEO Agency Dubai, Digital Marketing Agency Dubai, IT Company Abu Dhabi, IT Company Sharjah (all <15% similarity, 940–1,300 words). Next: e-commerce Dubai, Qatar web design, Kuwait, Oman, AEO/GEO page.
- 2026-11-08 (late): GitHub Actions FTPS deploy confirmed working (first full upload ~25 min). UAE research (23 credits): Dubai areas have no measurable demand; "it company dubai" 2,400 KD 3. Dubai and Doha software pages retitled for IT-company searches. Credits left: inspectify 139, myouryour 78.
- 2026-11-08: Plan created. Header and footer rebuilt, /locations/ hub, 4 Pakistan city pages, deploy workflow added. IndexNow: 57 URLs submitted.
