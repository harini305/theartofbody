# The Art of Body — website rebuild (Phase 2)

Frontend-only rebuild of theartofbody.com in Next.js (App Router, JavaScript), React, GSAP + ScrollTrigger and plain CSS. Source evidence lives in `docs/source-audit/` (Phase 1; do not edit).

## Run locally

```bash
npm install
npm run dev        # http://localhost:3000
npm run build && npm run start
```

Image derivatives are already committed in `public/images/` (59 WebP files, about 2.1 MB). The original photos and audit screenshots (about 111 MB) are not in the repository; they stay in a local copy of `docs/source-audit/`. To regenerate the derivatives from that local copy (needs Python 3 + Pillow):

```bash
npm run images     # python scripts/make-derivatives.py
```

## Key decisions

- **Images:** `images: { unoptimized: true }` in `next.config.mjs`. Pages use a plain `<img srcset>` component (`src/components/Img.js`) pointing at locally prepared WebP files, so nothing goes through `/_next/image` or Vercel Image Optimization. Originals in `docs/source-audit/assets/original/` are untouched; sizes are in `scripts/derivatives-report.csv`.
- **Hero video not used:** 10 MB, licence unverified (Wix media library) and no local re-encoder available. The homepage uses the owner's studio interior photo instead.
- **Wix-library images not used:** the 17 assets without the owner prefix (licence outside Wix unverified) are excluded. The blurry spine render and the low-resolution Bowen hero are excluded too.
- **Fonts:** Bodoni Moda (headings) and Jost (everything else), self-hosted by `next/font` at build time.
- **Link prefetch is off** (`prefetch={false}`): with prefetch on, every visible link downloaded its target page's hero image.
- **Booking, plans, login and contact form are UI only.** They validate input and say clearly that nothing has been sent, booked or paid for.

## Routes

Kept at their original paths: `/`, `/about`, `/our-services`, `/pilates`, `/online-training`, `/bowen-therapy-1` (Bowen), `/bowen-therapy` (Natalie's coaching page; noindex, not in the sitemap or navigation), `/tailor-made-retreats-1`, `/holiday-packages`, `/pre-post-natal`, `/book`, `/service-page/[4 services]`, `/booking-calendar/[4 services]`, `/contact-us`, `/plans-pricing`, `/account/my-account`, `/privacy`, `/refund-policy`, `/terms`, plus a custom 404.

Redirects (`next.config.mjs`, permanent): `/home → /`, `/tailor-made-retreats → /tailor-made-retreats-1`, `/pilates-bali`, `/pilate-studio-bali`, `/pilates-seminyak → /pilates`, `/pilates-retreat → /tailor-made-retreats-1`.

## Content decisions needing client confirmation

| Topic | What the site does now |
|---|---|
| Founding year (2009 vs 2007 in Terms) | Shows "since 2009" (every page and the legal footer say 2009). The Terms text is unchanged and still says 2007. |
| Private Pilates Rp 750k vs Rp 680k (Acuity) | Shows Rp 750.000, which matches every page on the site, Wix Bookings (updated Oct 2026) and the 3/10-pack prices. Acuity prices are not shown. |
| 10-pack Rp 6.75M vs Rp 7.3M | Shows Rp 6.750.000 (matches /pilates and Plans). |
| Group size (3 vs 4) | No number is shown. The FAQ "How many people are in a group class?" is left out. |
| Session length (55 min vs 1 hour) | No duration is shown for studio sessions or Bowen. Online (55 min), natal (45 min) and coaching (1.5 h) have no conflict and are shown. |
| Semi-private timetable | Not shown: "Please contact us for current class times." |
| Beginner Starter Pack | Left out (two conflicting versions; may be an old promotion). |
| Prenatal 10-pack ("Rp. 6.750.0000") | Shows "On enquiry". |
| Holiday Package 1 description (copy of the Group Mat text), "five offerings" | Left out; only the inclusions and price are shown. |
| WhatsApp number on /holiday-packages (missing a digit) | Not used. The verified +62 878 3911 2400 is linked as phone and WhatsApp (`wa.me`). Please confirm this number uses WhatsApp. |
| Opening hours (JSON-LD only) | Not shown. |
| Coaching "via Skype" | Changed to "can also be scheduled online". |
| Pre/post natal and coaching still offered? | Pages are kept. Natal is linked from Our services and the footer; coaching is reachable only by its URL, as before. |
| Health claims | Bowen FAQ list of conditions kept as written on the site. Left out: "speedier delivery" (natal) and the Lynn testimonial (menopause). |
| Legal pages | Original text, shown in full with a "Pending review" note about MNDBDY.FIT. Not rewritten. |
| Couples Pilates description | Left blank (the original repeated the Private Pilates paragraph). |
| Unanswered FAQs (8) | Left out. |
| Personal Training image | Uses the TRX photo instead of the joined-hands photo (audit F19). |

### Testimonials

16 genuine entries are shown, with duplicates removed. A 17th ("Melmak 2015") is kept in the data file but not shown. Left out: Wix placeholders, "Liz, South Africa" / "Tropical Groove" (the same text under two names), the Korean review (no translation), and Lynn (medical claim). Any small edits (typos, capitalisation, shortening) are recorded in the `edit` field in `src/content/testimonials.js`.
