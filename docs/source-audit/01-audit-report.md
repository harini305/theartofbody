# 01 — Audit Report: theartofbody.com

**Site:** https://www.theartofbody.com/ · **Business:** The Art Of Body (a.k.a. Studio Pilates Bali), Pilates & holistic wellness studio, Jalan Mertanadi 22xx, Kerobokan / Seminyak, Bali · **Audit date:** 2026-10-19 · **Phase:** 1 (research only)

---

## 1. Method
1. Checked the workspace (`D:\theartofbody17`): **empty**, with no existing project files, assets or earlier audit evidence.
2. Discovered routes from `robots.txt`, the sitemap index (2 child sitemaps, 23 URLs), every internal link on every page, Wix Bookings data, and probing of 30 common paths.
3. Downloaded the raw server HTML of every route.
4. Rendered every route in local Google Chrome (headless, Playwright-core installed only in a temporary scratch folder outside the project) at **1440×900**, **768×1024 (iPad UA)** and **390×844 (iPhone UA)**, scrolling to trigger lazy content. Captured full-page and above-the-fold screenshots, then extracted text, headings, images (natural vs rendered size), links, buttons, forms, iframes, videos, computed typography/colours, Wix theme variables, fixed elements, scripts and network domains.
5. Interaction tests: nav dropdown hovers, button hover states, testimonial slideshow (all 5 slides), mobile menu, contact form empty-submit validation, inline link click tests, FAQ clicks, gallery iframe inspection, booking widgets/calendar, pricing plans, members page. **No real submissions, bookings or purchases.**
6. Diffed desktop vs mobile text for every route.
7. Downloaded original-resolution media (65 files, 95 MB) and measured dimensions; sampled logo colours from pixels.
8. Parsed structured data: Wix Bookings services, Acuity appointment types, JSON-LD, legal iframe documents.

## 2. Coverage record

### 2.1 Successfully inspected (desktop full extraction + tablet + mobile)
`/`, `/home`, `/about`, `/our-services`, `/pilates`, `/online-training`, `/bowen-therapy-1`, `/bowen-therapy` (hidden), `/tailor-made-retreats-1`, `/holiday-packages`, `/pre-post-natal`, `/pilates-retreat`, `/pilates-bali`, `/pilate-studio-bali`, `/pilates-seminyak`, `/book`, `/contact-us`, `/plans-pricing`, `/service-page/pilates-private-class`, `/service-page/pilates-semi-private-class`, `/service-page/bowen-technique-session`, `/service-page/personal-training`, `/booking-calendar/pilates-private-class`, `/booking-calendar/pilates-semi-private-class`, `/booking-calendar/bowen-technique-session`, `/booking-calendar/personal-training`, `/account/my-account`, `/privacy`, `/refund-policy`, `/terms`, plus a 404 test URL. **30 live routes + 1 redirect + 404.**

### 2.2 Partially inspected
- Booking calendars: rendered; no time slot selected, no request submitted.
- Plans & Pricing: plan list captured; "Buy Now" checkout not opened.
- Members area: sign-up screen only; login not attempted.
- Acuity Scheduling (external): appointment-type data parsed; booking UI not walked through.
- Contact form: fields and client-side validation only; delivery not verified.
- Mobile menu: opened and listed; "+" submenu expanders could not be opened by automation.
- Tablet: layout captured; tap behaviour on hover dropdowns not verified.

### 2.3 Discovered but inaccessible
- `http://www.polestudiobali.com/` and `https://www.polesoulsretreat.com/`: DNS resolution fails.
- Third-party profiles (Facebook, Instagram, TripAdvisor): links recorded, content not fetched.
- Wix dashboard, form inbox, analytics, booking rules: no access.

### 2.4 Broken / unavailable routes
- No broken internal routes (all linked internal URLs return 200).
- Broken behaviours: 4 dead inline links (`/our-services`), wrong link destinations (5 cases), empty Honeycomb galleries (2 pages), unanswered FAQs (2 pages), clipped legal pages on mobile, dead external links (2 domains). See `08` §2.
- Common paths probed returned 404, including `/blog`.

### 2.5 Interactive states not verified
Auto-advance timing of the slideshow; sticky-header shadow change; dropdown keyboard access; mobile submenu expansion; form success/error messages; booking confirmation/approval emails; pricing-plan checkout; member login; any timed animations.

### 2.6 Technical limitations
Headless Chrome emulation only (no physical devices, no Safari engine). The machine's time zone affected one mobile calendar render. Wix serves fixed 980 px and 320 px canvases, so "tablet" is a scaled desktop layout. Wix-licensed fonts cannot be downloaded. Analytics IDs are injected at runtime and weren't captured.

---

## 3. Key findings (summary)

1. **Structure:** 11 nav-reachable pages (Home, About, Our Services, Pilates, Online Training, Bowen Therapy, Tailor Made Retreats, Holiday Packages, Book, Contact Us, Plans & Pricing), plus 4 legacy SEO landing pages, 2 orphan or hidden service pages (pre/post natal, coaching), 8 Wix booking app pages, members page, and 3 legal pages that aren't linked anywhere. No blog. Details: `02-page-inventory.md`.
2. **Content:** rich, factual service content with prices in IDR (studio) and USD (online). 26 testimonial entries (≈19 unique, some duplicated under different names) and 13 answered FAQs. There are many conflicts in price, group size, duration, schedule and founding year. Details: `03`, `08`.
3. **Booking:** two parallel systems, **Wix Bookings** (manual approval, pay in person) and **Acuity Scheduling** (online page), with different prices. Pricing plans are sold via Wix Pricing Plans. This is the biggest Phase 2 dependency. Details: `06`.
4. **Brand:** sage `#A2AC87`, cream `#FDF6EB`, sand `#E3D8C5`, charcoal `#404041`, deep teal `#0E393A` (logo ink `#10393A`), blush `#EEC9B2`, coral accent `#FF715E`. Typography relies on Avenir Light + Brandon Grotesque Light + Didot Italic, but about 11 families are loaded. Inner and legacy pages drift into navy/red/mint. Details: `05`.
5. **Assets:** 64 images + 1 video inventoried and downloaded at original resolution. 16 are oversized, 8 are upscaled/blurry on the live site, and 17 have unverified licences (Wix library). There's no vector logo and no font files. Details: `04-assets-manifest.csv`.
6. **Responsive:** fixed desktop/mobile canvases. On mobile the header is 240 px and non-sticky, testimonials are hidden on 9 pages, legal pages are clipped and the hero video is dropped. No horizontal overflow. Details: `07`.
7. **Quality issues:** Wix placeholder testimonials on 4 pages, broken links, typos, misleading slugs (`/bowen-therapy` = coaching), weak SEO headings, outdated meta descriptions. Details: `08`.

## 4. Verified vs estimated vs unknown
- **Verified:** routes/status codes, all visible text, headings, links, Wix theme colours/fonts, computed styles, booking service data, Acuity data, legal text, asset files/dimensions, hover states measured, mobile content differences.
- **Estimated:** some surface colours sampled from JPEG screenshots (marked "est." in 05), typography sizes on mobile, load times (indicative).
- **Unknown:** backend behaviour of forms/bookings/plans, analytics IDs, image licences, current prices/timetable (conflicting), whether hidden/orphan offerings are still active.

## 5. Compliance with Phase 1 constraints
No code for the redesign, no UI components, no pages, no project packages (Playwright-core lived in a temporary scratch directory outside the project), no config changes, no deletion/overwrite of source files or assets, no GitHub push, no Vercel deployment. Only files under `docs/source-audit/` were created.
