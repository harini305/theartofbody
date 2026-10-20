# 06 — Functionality & Technical Dependencies

Verification levels: **Observed** (seen) · **Interaction tested** (clicked/hovered, UI response checked) · **Functionality verified** (intended outcome confirmed end-to-end) · **Partially verified** · **Unverified**.

No form was submitted, no booking requested, no plan purchased and no account created during the audit. Results of the interaction scripts are in `data/interaction-tests.json`.

---

## 1. Platform

| Item | Finding | Level |
|---|---|---|
| CMS / builder | Wix (meta `generator: Wix.com Website Builder`, Thunderbolt renderer, published version 323, site id `ade870d1-1a9d-444b-95a9-a28664978920`) | Verified |
| Editor type | Wix **Classic** editor with separate desktop (980 px canvas, stretched sections) and **mobile (320 px) layouts** | Verified (CSS + rendering) |
| Hosting / CDN | Wix (static.parastorage.com, static.wixstatic.com, video.wixstatic.com, siteassets.parastorage.com) | Verified |
| Installed Wix apps (from page data) | Wix Bookings, Wix Pricing Plans, Wix Members Area (+ My Account, My Subscriptions, My Wallet, My Addresses, Profile Card), Checkout & Orders, Old Wix Forms and Payments, Instagram Feed, ShoutOut (Legacy), Wix Get Subscribers | Observed in page data; Instagram Feed / ShoutOut / Get Subscribers not seen on any page |
| Analytics | Network requests to `www.googletagmanager.com` and `www.google-analytics.com` observed; measurement/container ID **not captured** (injected by Wix Marketing Integrations) | Partially verified |
| Monitoring | `browser.sentry-cdn.com` (Wix's own error monitoring) | Observed (platform, not site-owner) |
| Search Console | `google-site-verification: gwjbPg3XQxBAKGe_lHfRa-LhEZK2Omd2gLnpQXjv-ZM` meta tag | Verified |
| Robots | `robots.txt`: allow all; disallow `*?lightbox=`; blocks PetalBot; crawl-delay for dotbot/AhrefsBot; sitemap declared | Verified (`data/robots.txt`) |
| Sitemaps | `/sitemap.xml` index → `pages-sitemap.xml` (19 URLs, lastmod 2026-08-25) + `booking-services-sitemap.xml` (4 URLs, lastmod 2026-10-02…18) | Verified (`data/`) |

---

## 2. Feature inventory

| # | Feature | Where | What was done | Level | Dependency / implementation notes |
|---|---|---|---|---|---|
| 1 | Desktop navigation + dropdowns | All pages | Hovered all 4 dropdown parents; captured items & screenshots | **Interaction tested** | Plain links; parents are not links. Rebuild as accessible menu |
| 2 | Sticky header | All pages (desktop) | `position: sticky`, 107 px | Observed | Not sticky on mobile |
| 3 | Mobile hamburger menu | All pages (mobile) | Tapped `tinymenu` button; full-screen sage overlay opens with all items; "+" expanders for BODY WELLNESS and HOLISTIC THERAPY; expanders could not be opened by the script; RETREATS item overflows | **Partially verified** | Rebuild; ensure submenu toggles and close button work |
| 4 | Internal links | All pages | Extracted all `<a href>`; checked inbound links; click-tested the 4 inline "Learn more…" links on /our-services | **Interaction tested** | 4 dead inline links; several wrong targets (see 08 §2) |
| 5 | Hero background video | Home | `<video>` autoplay/loop/muted, 1080p MP4 10 MB from video.wixstatic.com; not rendered on mobile | Observed | Wix media library video; licence outside Wix unverified |
| 6 | Testimonial slideshow | Home | Clicked all 5 dot links; captured each slide's text + background | **Interaction tested** | Wix Slideshow; auto-advance not measured |
| 7 | Contact form | /contact-us | Inspected fields; pressed **Send with all fields empty** → native validation blocked submit ("Please fill out this field." on Name and Email, `aria-invalid=true`); no custom error UI | **Partially verified** (validation only) | Wix Forms (legacy). Where submissions go (email/CRM) is **unknown**. Phase 2 needs a form backend (e.g. API route + email service) or embed |
| 8 | Booking list | /book | Rendered 4 services with prices; "Request to Book" links to calendar | **Interaction tested** | **Wix Bookings** – manual-approval appointments, pay in person, staff Faz |
| 9 | Booking calendar | /booking-calendar/* | Rendered; month grid; "No availability" for Mon 19 Oct; time zone selector (WITA desktop; auto-detected viewer zone on mobile run) | **Partially verified** | No slot selected; no request submitted. Real availability and the approval/notification flow are unverified |
| 10 | Service pages | /service-page/* | Rendered details, cancellation policy, "Request to book" | Observed | Wix Bookings |
| 11 | External online booking | /online-training "Book a Class" | Acuity URL resolves (302 → `/schedule/e05b9257`), page title "Schedule Appointment with Studio Pilates Bali"; 5 appointment types parsed | **Partially verified** | **Acuity Scheduling** (owner 19298707), second booking system with **different prices** (see 03). Includes liability waiver "Terms & Conditions" checkbox |
| 12 | Pricing plans purchase | /plans-pricing | Rendered 5 plans with "Buy Now"; not clicked through to checkout | Observed | **Wix Pricing Plans** + Wix checkout (online payments enabled for plans). Checkout/payment provider unverified |
| 13 | Members area | /account/my-account | Rendered sign-up options (Google, Facebook, email) | Observed | Wix Members. Not linked in UI; likely only used for plan purchases |
| 14 | Google Map | Footer (all pages) | Iframe renders map with marker "Studio Pilates Bali" (visible on /contact-us screenshot) | Observed | Wix GoogleMap component using maps.googleapis.com. Phase 2: Google Maps embed or static map + directions link |
| 15 | Click-to-call / WhatsApp | Header icon, footer number | Header WhatsApp **icon** links to `tel:+6287839112400` (not WhatsApp); footer number on mobile links to `tel:+62 (0) 878 3911 2400` | Verified (hrefs) | Phase 2: real `https://wa.me/6287839112400` link if WhatsApp is intended (confirm) |
| 16 | Email links | Footer, /book, coaching | `mailto:info@theartofbody.com?subject=Hello Art of Body!`, `mailto:pilates@…`, `mailto:ns@…?subject=Hi Nat | Personal Coaching Inquiry` | Verified (hrefs) | — |
| 17 | Social links | Header, footer | Facebook, Instagram, TripAdvisor (new tab) | Verified (hrefs); destinations not opened | — |
| 18 | TripAdvisor review links | Home slide 1, /bowen-therapy-1, /pilate-studio-bali | Links to individual TripAdvisor reviews | Verified (hrefs) | — |
| 19 | FAQ blocks | /pilates, /online-training, /bowen-therapy-1 | Static text (no accordion) | Observed | Could become accordions |
| 20 | "FAQ" on legacy pages | /pilates-bali, /pilate-studio-bali | Clicked a question → nothing happens; no answers in HTML | **Interaction tested** | Broken / incomplete content |
| 21 | Honeycomb gallery | /pilates-bali, /pilate-studio-bali | Legacy Wix "santa" Honeycomb iframe renders **empty** (no images inside frame) | **Interaction tested** | Dead legacy component – drop |
| 22 | Legal documents | /privacy, /refund-policy, /terms | HTML embed iframes from `filesusr.com`; readable on desktop; clipped on mobile | Observed | Rebuild as normal pages |
| 23 | Button hover states | Home | Measured before/after hover (see 05 §2.4) | **Interaction tested** | CSS transitions (Wix) |
| 24 | Nav hover | Header | Colour changes coral → sage | **Interaction tested** | — |
| 25 | Scroll animations | Various | No reveal animations were observed in screenshots or DOM (Wix "animations" not detected); hero video is fixed-position (`position: sticky` video container) creating a parallax-like effect | Partially verified | Phase 2 GSAP/ScrollTrigger is new behaviour, not a reproduction |
| 26 | Lightbox | Site-wide | robots.txt disallows `?lightbox=`; no lightbox seen | Unverified | — |
| 27 | Translation / language | — | `lang="en"`; no language switcher; one Korean testimonial | Observed | — |
| 28 | Search / filters / e-commerce cart | — | None found (Wix Stores pages listed in app config, e.g. "Cart Page", "Shop", but `/shop` and `/store` return 404) | Observed | Not needed |
| 29 | Newsletter / subscribers | — | Wix Get Subscribers installed; no visible signup form | Observed | Confirm with client |
| 30 | 404 page | Any unknown path | Wix default | Observed | Build custom 404 |

---

## 3. Booking systems – detail

### 3.1 Wix Bookings (`data/wix-bookings-services.json`)
| Service | Slug | Price | Duration | Capacity | Payment | Approval | Location |
|---|---|---|---|---|---|---|---|
| Pilates Private Class | `pilates-private-class` (old slugs: pilates-class, acupuncture) | IDR 750,000 | 55 min (+5 min buffer) | 1 | In person only | Manual approval required | Jalan Mertanadi (default) |
| Pilates Semi-private Class | `pilates-semi-private-class` (old: copy-of-pilates-private-class) | IDR 400,000 | 55 min | 1 (per booking) | In person | Manual | Jalan Mertanadi 22xx |
| Bowen Technique Session | `bowen-technique-session` (old: acu-facial) | IDR 1,200,000 | 55 min | 1 | In person | Manual | Jalan Mertanadi |
| Personal Training | `personal-training` (old: therapeutic-massage) | IDR 800,000 | 55 min | 1 | In person | Manual | Jalan Mertanadi |

Staff: "Faz" (one staff member). Business email in Bookings config: pilates@theartofbody.com. Features: appointments on; payments for bookings off; SMS reminders off; video conferencing available but off for services.

### 3.2 Acuity Scheduling (`data/acuity-appointment-types.json`)
Calendar owner 19298707, single calendar (Faz). Types: Back To Health Session (55 min, 65.00), Consultation (55 min, 65.00 – category spelt "Conultation"), Private Pilates Class Online (55 min, 65.00), Private Pilates Studio Class (55 min, **680,000.00**), Private Pilates Studio Class 3 x pack (165 min, **1,890,000.00**). Includes a liability-waiver "Terms & Conditions" agreement.

### 3.3 Implications for Phase 2
- The site runs **two booking systems with conflicting prices**. The business must decide which booking flow stays (Wix Bookings needs the Wix site to exist; Acuity works standalone and embeds or links from any site).
- A Next.js frontend **can't run Wix Bookings natively**. Options: (a) link or embed Acuity (or another scheduler), (b) keep the Wix site as a booking back-office via Wix Headless APIs (needs API keys and setup), (c) enquiry-only booking via form/WhatsApp. **This decision is the main implementation dependency.**
- Pricing plans (Wix Pricing Plans + checkout) have the same constraint.

---

## 4. Third-party requests observed (desktop crawl, all pages)

static.parastorage.com, static.wixstatic.com, siteassets.parastorage.com, video.wixstatic.com, frog.wix.com (Wix telemetry), panorama.wixapps.net (Wix monitoring), maps.googleapis.com / maps.gstatic.com (map), fonts.googleapis.com / fonts.gstatic.com (Google Fonts used by Wix widgets), www.googletagmanager.com, www.google-analytics.com, browser.sentry-cdn.com, www.google.com, www-theartofbody-com.filesusr.com (legal HTML embeds).

---

## 5. What must be retained or investigated

1. Booking flow decision (Wix Bookings vs Acuity vs enquiry), plus correct, single price list.
2. Contact form destination (which inbox; spam protection). Ask the client which email receives Wix form submissions.
3. Analytics continuity: obtain GA4/GTM IDs from the client's Wix dashboard.
4. Google Search Console verification (meta tag value above) and 301 redirects for every legacy URL (see 09).
5. WhatsApp vs phone link behaviour.
6. Whether members/pricing-plan purchases are still used (any active subscribers?).
7. MNDBDY.FIT – whether the legal pages should still reference it.
