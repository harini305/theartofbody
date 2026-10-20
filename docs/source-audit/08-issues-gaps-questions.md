# 08 — Issues, Gaps, Risks & Open Questions

Nothing below has been corrected on the source or in the content files. Each item needs a client decision or confirmation before Phase 2 publishes the related content.

## 1. Factual conflicts (client must confirm)
| # | Topic | Conflict | Where |
|---|---|---|---|
| F1 | Founding year | "since 2009" everywhere vs "established in 2007" | Terms of Service §1 |
| F2 | Private Pilates price | Rp 750.000 (pages, Wix Bookings) vs **680,000** (Acuity; plans-pricing meta description) | /pilates, /book, Acuity, /plans-pricing meta |
| F3 | Private 3-pack | Rp 2.050.000 (pages, plans) vs **1,890,000** (Acuity) | Acuity |
| F4 | Private 10-pack | Rp 6.750.000 vs **Rp 7.300.000** | /pilates-seminyak |
| F5 | Semi-private / group price | Rp 400.000 vs "350,000rp" | /plans-pricing meta description |
| F6 | Semi-private group size | max 3 / "3-person limit" vs "no more than four" vs "3-4 PEOPLE" (online) | Home, /pilates, Wix Bookings, /online-training |
| F7 | "Group" naming | Pricing plans "3x Semi Private package" described as "3x Group classes"; "Group Mat Pilates" is a different offering (min 4 pax) | /plans-pricing |
| F8 | Session length | "55 Mins" vs "(1 HOUR)" for the same services; Bowen "(1 HOUR)" vs 55 min | /pilates vs legacy pages, /bowen-therapy-1 |
| F9 | Semi-private schedule | "8,9 and 10am Monday to Friday … Saturday 9.30 and 10.30am" vs "every hour on the hour from monday to saturdays midday" | /pilates vs /pilates-bali, /pilate-studio-bali |
| F10 | Opening hours | Only in JSON-LD (Mo–Fr 08:00–18:00); Saturday classes advertised | JSON-LD vs /pilates |
| F11 | Price range | JSON-LD "400k-900k" vs services up to Rp 1.500.000 and packages Rp 6.800.000 | JSON-LD |
| F12 | Beginner Starter Pack | Rp 1.350.000 (3 sessions) vs version with 2 sessions and no price; is the promo current? | /pilates-bali vs /pilate-studio-bali |
| F13 | WhatsApp number | "+628783911200" (missing a digit) vs +62 878 3911 2400 | /holiday-packages |
| F14 | Online platform | "ZOOM platform" vs "Zoom/Whatsapp"; coaching "via Skype" | Home, /online-training, /bowen-therapy |
| F15 | Prenatal 10-pack | "Rp. 6.750.0000" (extra zero) | /pre-post-natal |
| F16 | Holiday Package 1 copy | Description is the Group Mat Pilates paragraph (copy/paste), and "FIVE DIFFERENT OFFERINGS" but only 3 packages | /holiday-packages |
| F17 | Testimonial attribution | Same review text under different names: "Liz, South Africa" vs "Tropical Groove"; "Neal, Denmark" vs "Neil D"; Claudia/Danella/Angelina variants with "Faz" removed or added | /bowen-therapy-1, /pilates-seminyak, /tailor-made-retreats-1, /pilates-bali |
| F18 | Business name | "The Art Of Body" vs "Studio Pilates Bali" (JSON-LD, Bookings, Acuity) | — |
| F19 | Personal Training image | Booking card uses a joined-hands photo, which doesn't show personal training | /book |
| F20 | Pole studio / dance retreats | Links to polestudiobali.com and polesoulsretreat.com (both **DNS fail**); "women's wellness and dance retreats" mentioned | /pilates-retreat, /pilate-studio-bali, /pilates-seminyak, /tailor-made-retreats-1 |
| F21 | MNDBDY.FIT | Legal pages describe a digital product (USD 200 Founder's Edition, "$297/year" later) plus Paddle / Xendit / Coinbase / Netlify / Railway / SendGrid, none of which appear on this Wix site | /privacy, /refund-policy, /terms |
| F22 | Health claims | Testimonials and copy make health claims (e.g. Bowen relieving menopausal symptoms, "pain free" next day, migraines, digestive issues) | Home, /bowen-therapy-1 |

## 2. Broken / incorrect functionality
| # | Issue | Evidence |
|---|---|---|
| B1 | 4 inline "Learn more about…" links on /our-services have no href (dead) | Click test: no navigation |
| B2 | /pilates "Online Training" button → `/contact-us` instead of `/online-training` | Extracted href |
| B3 | /online-training "Our Holistic Services" → `/bowen-therapy`, which is the hidden **coaching** page (noindex) | Extracted href |
| B4 | "Contact us" links on /tailor-made-retreats-1, /pilates-retreat, /pilate-studio-bali go to `/book` | Extracted href |
| B5 | Header WhatsApp icon opens `tel:` dialler, not WhatsApp | href `tel:+6287839112400` |
| B6 | FAQ questions without answers (4 questions × 2 pages) | Raw HTML has empty lines; click test |
| B7 | Honeycomb galleries render empty | Iframe inspected, no images |
| B8 | External pole-studio links dead | `curl` DNS resolution failure |
| B9 | Legal pages unreadable on mobile (iframe clipped) | Mobile screenshots |
| B10 | Legal pages not linked from nav or footer (orphan); /pre-post-natal orphan | Inbound-link map |
| B11 | Testimonials hidden on mobile on 9 pages | Text diff desktop vs mobile |
| B12 | Mobile menu: long item overflows; submenu expanders not opened by automation (manual check advised) | Screenshot |
| B13 | Two booking systems (Wix Bookings and Acuity) with different prices | 06 §3 |
| B14 | Booking calendar showed "No availability" on audit date (could be normal; manual approval flow) | Calendar render |

## 3. Template leftovers / low-quality content
- Wix placeholder testimonials "NAME, TITLE – Share the amazing things customers are saying about your business. Double click, or click Edit Text to make it yours." on /pre-post-natal, /pilates-retreat, /pilates-seminyak, /bowen-therapy.
- "FAQ" headings over non-question value statements (/pre-post-natal, /bowen-therapy); one paragraph corrupted: "…living a healthy life!orkshops and support aligning businesses to build our tribe." and "We practice what we preach" duplicated.
- Bare URL text "https://www.theartofbody.com/pilates-bali" displayed on /pilates-seminyak.
- Blurry 150 px spine render used as "Trainer" image on /about; no trainer photo or name in that section.
- Bowen hero: one 620×338 image duplicated side by side and upscaled.
- Hidden legacy green logo positioned off-canvas on the homepage.
- Homepage meta description contains literal "[Book Your First Session] [Learn About Our Services]".
- /about meta keywords "The, Art, Of, Body, |, Pilates, Bali, Bowen, Personal, Training".
- Contact page title "The Art Of Body | Pilates Bali | speak to me :)".
- /our-services description mentions "Vagus nerve reset" (not offered anywhere else).
- Wix Bookings policy name "Kebijakan default" (Indonesian "default policy") in data.

## 4. Spelling / typos (verbatim, for reference only – do not silently fix without approval)
"Australlia" (Jo, /pilates) · "streatching" · "HITT" (HIIT) · "mix and max packages" · "TRANSFORMATI0N" (zero) · "Myofacial" · "Bowen therap" (truncated) · "craft and unforgettable experience" · "SI've had" · "definifely" · "fromgroup class" · "Private Pilates is recommend to anyone" · "complement to and active fitness regime" · "on you management" · "Natalie was able to lost" · "the The Art of Body team" · "Rp. 1,200.000" (mixed separators) · "Semi -Private Sessions ( 1 Hour)" · "pilate-studio-bali" (slug) · "Conultation" (Acuity category) · "to help being your time with us to life" · "accommodate several a fully-equipped studio" · "IMAGE WHAT YOU CAN ACHIEVE" (likely "IMAGINE") · "Re-Defying Pilates" (possibly intentional).

Spelling uses mixed British/American forms ("personalised"/"personalized", "travellers"/"travelers").

## 5. SEO observations
- Homepage has **no meaningful H1** (the only H1 is "ONLINE TRAINING"); /about has 2 H1s; /holiday-packages H1 is the specialisms bullet line; legacy pages have multiple H2 "NAME, TITLE".
- Four near-duplicate SEO landing pages (/pilates-bali, /pilate-studio-bali, /pilates-seminyak, /pilates-retreat) plus /tailor-made-retreats-1 share large blocks of identical copy, so the site is competing with itself for the same keywords.
- Most inner pages share the same og:image (header logo PNG), so social previews will look identical.
- Canonicals are self-referencing and correct; `/home` canonical points to `/`.
- `/bowen-therapy` is `noindex` but linked internally.
- JSON-LD: invalid Facebook URL in `sameAs`; `servesCuisine` misused; two different business types and names; telephone in two formats.
- No `alt` text on most hero/background images; several alts are meaningless ("pilates13.jpg", "Swimming 100", "fun").
- Sitemap includes legacy pages and booking service pages, but excludes `/bowen-therapy` and `/home` (correct).

## 6. Performance observations
- Hero background video 10 MB (1080p) on desktop homepage.
- 16 original images > 1.5 MB (largest 10.9 MB and 9.9 MB) shown at small sizes. Wix resizes these on the fly; a Next.js build with `images.unoptimized` will **not**, so Phase 2 must pre-resize (see 09).
- 8 images upscaled beyond their original resolution on the live site (blurry).
- ~11 font families loaded across the site.
- Desktop page load (load event + 2.5 s settle) measured 5.5–20.8 s in headless Chrome (includes deliberate waits; indicative only).

## 7. Asset gaps & licensing
- **No font files** available locally (Wix-licensed commercial fonts).
- **17 assets lack the owner upload prefix** (`72d608_`) and appear to be Wix media library / Wix-provided images, icons or video (hero video, our-services hero, holiday hero, several backgrounds, a testimonial slide image, social icons). Their licence for use **outside Wix is unverified**. Confirm with the client or replace with owner photos.
- No team/trainer portrait of Faz or Natalie has been identified among the assets (unconfirmed; people in photos are not named).
- No real studio exterior / location photo; the best real studio interior (`e4193205`) is only used as og:image.
- No vector (SVG) logo; only 2127 px PNGs in several colourways. No horizontal lockup.
- No downloadable brochures/PDFs found.

## 8. Coverage limitations
- Pages inspected fully: all 30 discovered 200-status routes + 404 test (desktop full extraction; tablet & mobile screenshots + layout metrics + full-text diff).
- Partially inspected: booking calendars (no slot selection), plans checkout (not opened), members area (no login), Acuity (data parsed, UI not walked through), contact form (no submission), mobile submenu expanders, tablet tap behaviour on dropdowns.
- Not accessible: Wix dashboard/backend, form submission inbox, analytics accounts, booking availability rules, Facebook/Instagram/TripAdvisor content (third-party, not fetched), polestudiobali.com and polesoulsretreat.com (DNS failure).
- Hidden pages: only discoverable ones were found (sitemap, links, common-path probing). Unlinked, unsitemapped Wix pages may still exist.
- Animations: no scroll animations were detected, but timing-based effects may have been missed in headless capture.

## 9. Questions for the client
1. Which booking system should the new site use: Wix Bookings, Acuity, or enquiry-only (WhatsApp/form)? Which price list is current?
2. Confirm founding year (2009 vs 2007) and the current timetable/opening hours.
3. Is Pre & Post Natal training still offered? Is Natalie's Life & Wellness Coaching still offered (hidden page)? Is "Personal Training" a separate offering?
4. Are pole studio / dance retreat offerings still relevant? (Linked sites are offline.)
5. Should MNDBDY.FIT remain in the legal documents? Who should review the privacy/refund/terms text?
6. Provide answers for the 4 unanswered Pilates FAQs, or approve removing them.
7. Approve which testimonials to keep and correct attributions (duplicates with different names).
8. Is the header icon meant to open WhatsApp? Preferred contact channel?
9. Which email receives contact-form submissions? GA4/GTM IDs to keep?
10. Licence status of the Wix-library images and the hero video; are there newer owner photos (team, studio, exterior)?
11. Is the Beginner Starter Pack promotion current?
12. Are Plans & Pricing purchases and member accounts in active use?
