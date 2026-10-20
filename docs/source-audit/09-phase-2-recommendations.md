# 09 — Phase 2 Recommendations & Mandatory Requirements

Status: **recommendations only.** Nothing here has been implemented, and no project configuration was changed. Phase 2 starts only after explicit approval.

Planned stack: Next.js (App Router), JavaScript, React, GSAP + ScrollTrigger, responsive frontend.

---

## 1. Mandatory design requirements (recorded from the brief)

### Typography
- **Exactly two font families across the entire redesigned website.** One for headings; one for body text, navigation, buttons, forms, cards, footer and all other UI.
- Both readable, professional, not overly fancy.
- Consistent heading and body sizes across equivalent components; a controlled, responsive type scale (e.g. `clamp()`-based tokens).
- No additional families for individual sections, decorative headings or the footer. Hierarchy via weight, size, line-height, letter-spacing only.
- Final pair not chosen in Phase 1. Evidence and options are in `05-brand-reference.md` §1.4. Original families (Avenir, Brandon Grotesque, Didot) are commercial and Wix-licensed, so verify licensing or pick open-licence equivalents.

### Visual design
- Professional, human-designed appearance; intentional image/text alignment.
- Consistent content widths, margins and spacing (define a container + spacing scale once).
- No unnecessary decorative numbering, eyebrow text, random symbols, floating badges or ornamental elements.
- Avoid repetitive AI-looking layouts and generic template patterns.
- Visual effects only when they serve a clear purpose.

### Content
- Concise pages focused on important information; no repeated paragraphs, unnecessary sections or excessive length.
- Preserve meaningful facts and essential information (03).
- **Do not invent claims, testimonials, FAQs, prices or blog posts.** Unresolved conflicts (08 §1) must be confirmed by the client or presented neutrally (e.g. "Prices from…" only if confirmed).

### Footer
- Compact and content-driven: only necessary, verified information (address, phone/WhatsApp, email, social links, legal links, copyright).
- No excessive padding, unnecessary columns, duplicated content or oversized layouts. The current footer has ~250 px of empty space on mobile and a long travel-times list; condense it.
- The final content section must be fully visible above the footer, with a natural transition into it.
- No overlap, clipping, excess blank space or fixed-footer interference.

### Images & performance
- Prefer original assets (`assets/original/`, mapped in `04-assets-manifest.csv`). No AI or unrelated stock replacements where originals exist.
- Local resizing and compression; no duplicate copies; modern formats (WebP/AVIF) where practical; lazy-load below-the-fold images; sensible `sizes`.
- **Avoid the Vercel Image Optimization quota:** merge `images: { unoptimized: true }` into the existing `next.config` (do not replace unrelated settings). Because `unoptimized` disables on-the-fly resizing, **pre-generate responsive sizes at build time or by script** (e.g. a `sharp` script producing 480/768/1200/1920 px WebP + JPEG fallbacks) and use `srcset`/`sizes` or multiple `<Image>` sources.
- Do not change configuration during Phase 1 (complied).

### Blog
- No blog exists on the original site. Don't fabricate posts. If Phase 2 adds a simple blog page, its initial presentation uses **≤ 10 images** unless requested otherwise. Recommended: no blog at launch.

---

## 2. Suggested information architecture (for discussion, not final)

| New route (proposal) | Built from | Notes |
|---|---|---|
| `/` | Home | Hero, short intro/philosophy, 3 service pillars, credibility (since 2009, STOTT, small groups), testimonials, studio, CTA |
| `/about` | About + Our Story (home) + qualifications/facilities | Single source for story, founders, studio facilities |
| `/pilates` | /pilates + best unique bits of /pilates-bali, /pilate-studio-bali, /pilates-seminyak | One canonical Pilates page with one confirmed price table, FAQ |
| `/bowen-therapy` | /bowen-therapy-1 | Clean slug; shortened theory; FAQ; what to expect. **Note:** `/bowen-therapy` currently hosts the hidden coaching page, so decide the mapping before launch |
| `/online-training` | /online-training | Offer table (USD), how it works, FAQ |
| `/retreats` (or keep `/tailor-made-retreats-1` path) | /tailor-made-retreats-1 + /pilates-retreat + holiday packages | Retreat inclusions, sample 7-day plan, 3 packages; enquiry CTA |
| `/pre-post-natal` | /pre-post-natal | Only if client confirms it's still offered; remove placeholders |
| `/coaching` | /bowen-therapy (hidden) | Only if confirmed |
| `/pricing` | /plans-pricing + all price tables | Optional consolidated price list (single source of truth) |
| `/book` | /book | Depends on booking decision (06 §3.3) |
| `/contact` | /contact-us | Form + direct contact + map |
| `/privacy`, `/terms`, `/refund-policy` | legal text | Real HTML pages, linked from footer; content reviewed by client |
| custom 404 | — | |

### Redirect map (301) to preserve SEO
`/home → /` · `/bowen-therapy-1 → /bowen-therapy` (if renamed) · `/tailor-made-retreats-1`, `/tailor-made-retreats`, `/pilates-retreat`, `/holiday-packages` → retreats page (or keep holiday as its own page) · `/pilates-bali`, `/pilate-studio-bali`, `/pilates-seminyak` → `/pilates` · `/our-services` → `/` or keep as services overview · `/contact-us → /contact` · `/plans-pricing → /pricing` · `/service-page/*`, `/booking-calendar/*` → `/book` (or the new booking destination) · `/account/my-account` → `/book` or remove. Implement with `redirects()` in `next.config` (merging) or platform redirects.

---

## 3. Shared components to design
Header (desktop + compact mobile, sticky) · mobile menu (accessible disclosure for sub-items) · footer (compact) · section container · page hero (image + heading + intro + CTAs) · service pillar card · offering/price table (name, duration, price, packs, notes) · testimonial (card/slider, mobile-visible) · FAQ accordion · CTA band · image + text split · retreat itinerary list · package card · contact form · map/location block · booking embed/link block · legal text layout.

---

## 4. Content guidance per page (from audit)
- **Home:** keep hero statement ("Therapeutic Pilates & Bodywork in Seminyak, Bali – Pain-Free Movement • Stronger Core • Better Posture – since 2009") and "What Makes Us Different". Drop duplicate CTAs (two buttons to the same URL).
- **Pilates:** one offerings table (Initial Consultation, Private, Couples, Semi-private, Group Mat + packs) once prices are confirmed; semi-private schedule once confirmed; FAQ (4 answered). Mention TRX/50-50 customised training if confirmed.
- **Bowen:** condense the 5 theory paragraphs to a short explanation plus "What to expect" and FAQ; keep the price.
- **Online:** USD offer list, "Why train online", "What you need", FAQ.
- **Retreats & packages:** inclusions, who it's for, sample 7-day itinerary, 3 packages with inclusions/prices (fix Package 1 description with client), price-change disclaimer with the correct WhatsApp number.
- **About:** founders (Faz & Natalie), story, studio facilities, qualifications; replace the blurry spine image with a real photo if supplied.
- **Contact:** intro, form (Name*, Email*, Subject, Phone, Message), phone/WhatsApp, emails, address, map, travel times (short).
- **Testimonials:** de-duplicate (≈19 unique), correct attributions with the client, keep the Korean review only with a translation (if provided) or omit.

---

## 5. Image plan
1. Use `04-assets-manifest.csv` for section mapping. Originals are in `docs/source-audit/assets/original/` (95 MB, 65 files incl. 10 MB video). **Don't import these directly into `public/`**; generate optimised derivatives into e.g. `public/images/` (target hero ≤ 250 KB at 1920 px WebP; cards ≤ 80 KB).
2. Exclude or replace: blurry spine render `337d11c9`, low-res Bowen hero `c1c36f8e` (or use smaller), Bowen card `ca9559a6` (311 px), hidden legacy logo `39916b31`, Wix social-icon PNGs (use an inline SVG icon set).
3. Licensing: confirm the 17 non-owner (Wix library) assets before use. Prefer owner uploads (`72d608_` prefix).
4. Logos: create an SVG trace or request vector files. Use `5a189358` (teal) on light backgrounds and `b4e088f1` (blush) on photos. Favicon from `bba408fe`.
5. Hero video: either drop it (poster image only) or re-encode to ≤ 2–3 MB (720p H.264/WebM, short loop), load only on larger screens, respect `prefers-reduced-motion`.
6. Use the studio interior photo `e4193205` as real-place imagery.

---

## 6. Motion (GSAP / ScrollTrigger)
The original has essentially no scroll animation, so any motion is new. Keep it subtle and purposeful: gentle fade/translate reveals for section content, a restrained parallax on one hero at most, no scroll-jacking. Honour `prefers-reduced-motion`. Kill ScrollTriggers on route change in App Router (`useGSAP` + cleanup).

---

## 7. SEO & accessibility checklist
- One H1 per page; logical H2/H3 structure.
- Unique titles and meta descriptions written from confirmed facts (current ones contain errors, see 08 §5).
- Per-page Open Graph images from real photos.
- JSON-LD `LocalBusiness`/`HealthAndBeautyBusiness` with corrected `sameAs`, one business name, verified hours and address.
- Meaningful `alt` text for content images; empty alt for decorative ones.
- Colour contrast (computed WCAG ratios): sage `#A2AC87` on cream 2.23:1, on white 2.39:1; **white text on sage buttons 2.39:1**; coral `#FF715E` on white 2.70:1, on cream 2.52:1. All fail AA, even the 3:1 large-text threshold. Charcoal `#404041` on cream 9.65:1 and deep teal `#0E393A` on cream 11.75:1 / white on teal 12.61:1 pass. Use sage/coral for fills, borders and accents with dark text (or darker shades of sage), and keep text charcoal or deep teal.
- Touch targets ≥ 44 px; keyboard-accessible menu and accordions; focus styles.
- XML sitemap + robots for the new routes; submit redirects in Search Console (verification token in 06 §1).

---

## 8. Decisions needed before or at the start of Phase 2
1. Booking architecture (Wix Bookings vs Acuity vs enquiry) and payment/plan purchases.
2. Confirmed price list, timetable, group size, session durations.
3. Which offerings remain (natal, coaching, pole/dance, personal training).
4. Final IA and slugs (especially `/bowen-therapy` conflict).
5. Font pair (two families) and licence approach.
6. Image licence confirmation; any new photography.
7. Legal text owner/review; MNDBDY.FIT inclusion.
8. Form backend and destination email; analytics IDs.

---

## 9. Confirmation
- The two-font rule and all mandatory design, content, footer, image/performance and blog requirements above are recorded for Phase 2.
- **Phase 1 performed no redesign, no UI components, no page implementation, no package installation in the project, no configuration changes, no GitHub push and no Vercel deployment.**
