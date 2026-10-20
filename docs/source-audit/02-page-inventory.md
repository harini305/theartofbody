# 02 — Page & Route Inventory

Source: https://www.theartofbody.com/ (Wix site, "Thunderbolt" renderer, published version 323). Audited 2026-10-19.

Verbatim page text: `content/page-text/<route>.desktop.txt` and `.mobile.txt`. Screenshots: `screenshots/<route>--<viewport>.jpg` (see `screenshots/INDEX.md`). Image IDs below refer to `04-assets-manifest.csv` (`asset_id` column; first 8 characters shown).

---

## 1. Route table

| # | Route | HTTP | In sitemap | How reached | Type | Status / recommendation |
|---|---|---|---|---|---|---|
| 1 | `/` | 200 | yes | Nav "H O M E", logo | Home | **Implement** |
| 2 | `/home` | 200 | no | Not linked | Duplicate of `/` (canonical → `/`) | **Legacy** – redirect to `/` |
| 3 | `/about` | 200 | yes | Nav "ABOUT" | Main page | **Implement** |
| 4 | `/our-services` | 200 | yes | Nav "OUR SERVICES" | Main / overview | **Implement** |
| 5 | `/pilates` | 200 | yes | Nav BODY WELLNESS › PILATES | Service detail | **Implement** |
| 6 | `/online-training` | 200 | yes | Nav BODY WELLNESS › ONLINE TRAINING | Service detail | **Implement** |
| 7 | `/bowen-therapy-1` | 200 | yes | Nav HOLISTIC THERAPY › BOWEN THERAPY | Service detail | **Implement** (consider clean slug `/bowen-therapy` – see #19 conflict) |
| 8 | `/tailor-made-retreats-1` | 200 | yes | Nav RETREATS › TAILOR MADE RETREATS | Offer detail | **Implement** (or consolidate with #9/#14) |
| 9 | `/holiday-packages` | 200 | yes | Nav RETREATS › HOLIDAY PACKAGES | Offer detail | **Implement** |
| 10 | `/book` | 200 | yes | Nav "BOOK"; many CTAs | Booking list (Wix Bookings) | **Implement** – booking backend decision required |
| 11 | `/contact-us` | 200 | yes | Nav More › CONTACT US; many CTAs | Contact / enquiry | **Implement** |
| 12 | `/plans-pricing` | 200 | yes | Nav More › Plans & Pricing | Pricing plans (Wix Pricing Plans) | **Implement** (or merge into pricing on service pages) |
| 13 | `/pre-post-natal` | 200 | yes | **Not linked from anywhere** (orphan) | Service detail | **Review** – real offering? Natalie-led; confirm still offered |
| 14 | `/pilates-retreat` | 200 | yes | Only from `/pilate-studio-bali` content | SEO landing (legacy) | **Consolidate** into retreats page; 301 |
| 15 | `/pilates-bali` | 200 | yes | Only from `/pilates-seminyak` content | SEO landing (legacy) | **Consolidate** into `/pilates`; 301 |
| 16 | `/pilate-studio-bali` | 200 | yes | Only from `/pilates-retreat` content | SEO landing (legacy, misspelt slug) | **Consolidate** into `/pilates`; 301 |
| 17 | `/pilates-seminyak` | 200 | yes | Not linked from nav/content | SEO landing (legacy) | **Consolidate** into `/pilates`; 301 |
| 18 | `/bowen-therapy` | 200 | no | Only from `/online-training` "Our Holistic Services" button | **Hidden page, `noindex`** – actually "Life & Wellness Coaching with Natalie Kashani" (title "PERSONAL COACHING") | **Review** – confirm whether coaching is still offered; slug is misleading |
| 19 | `/service-page/pilates-private-class` | 200 | yes (bookings) | Not linked in UI (Wix app page) | Booking service detail | Implement as part of booking flow / or drop |
| 20 | `/service-page/pilates-semi-private-class` | 200 | yes | as above | Booking service detail | as above |
| 21 | `/service-page/bowen-technique-session` | 200 | yes | as above | Booking service detail | as above |
| 22 | `/service-page/personal-training` | 200 | yes | as above | Booking service detail | as above |
| 23 | `/booking-calendar/pilates-private-class` | 200 | no | `/book` "Request to Book" | Booking calendar (Wix) | Depends on booking decision |
| 24 | `/booking-calendar/pilates-semi-private-class` | 200 | no | as above | Booking calendar | as above |
| 25 | `/booking-calendar/bowen-technique-session` | 200 | no | as above | Booking calendar | as above |
| 26 | `/booking-calendar/personal-training` | 200 | no | as above | Booking calendar | as above |
| 27 | `/account/my-account` | 200 | no | Not linked (Wix Members Area) | Members sign-up/login | **Review** – probably drop unless members/pricing plans are kept |
| 28 | `/privacy` | 200 | yes | **Not linked from nav or footer** | Legal (iframe embed) | **Implement** + link in footer; content needs review (see 08) |
| 29 | `/refund-policy` | 200 | yes | Not linked | Legal (iframe embed) | **Implement** + link in footer; review |
| 30 | `/terms` | 200 | yes | Not linked | Legal (iframe embed) | **Implement** + link in footer; review |
| 31 | `/tailor-made-retreats` | 301 → `/tailor-made-retreats-1` | no | — | Redirect | Keep redirect |
| — | Random path (404 test) | 404 | — | — | Wix default 404 with "Go to Homepage" | Build a custom 404 |

**Probed and not found (404):** `/blog`, `/shop`, `/store`, `/members`, `/pricing-plans`, `/faq`, `/gallery`, `/services`, `/team`, `/retreats`, `/events`, `/testimonials`, `/contact`, `/index`, `/book-online`, `/booking`, `/schedule`, `/pilates-1`, `/bowen-therapy-2`. **There is no blog.**

**Host redirects (verified):** `http://www.` → `https://www.` (301); `https://theartofbody.com` → `https://www.theartofbody.com` (301).

**External destinations linked from the site:**
- `https://app.acuityscheduling.com/schedule.php?owner=19298707` (302 → `/schedule/e05b9257`) – live Acuity account "Studio Pilates Bali" (from `/online-training` "Book a Class").
- `http://www.polestudiobali.com/` – **DNS does not resolve** (from `/pilates-retreat` "ENTER POLE STUDIO BALI HERE").
- `https://www.polesoulsretreat.com/` – **DNS does not resolve** (from `/pilate-studio-bali`, `/pilates-seminyak`).
- Facebook `https://www.facebook.com/studiopilatesbali/`, Instagram `https://www.instagram.com/studiopilatesbali/`, TripAdvisor (two URL variants, see 03). Not fetched (third-party sites).

### Shared layout (all pages)
- **Header (desktop, sticky, 107 px):** logo (left) · nav: `H O M E | ABOUT | OUR SERVICES | BODY WELLNESS ▾ | HOLISTIC THERAPY ▾ | RETREATS + HOLIDAY PACKAGES ▾ | BOOK | More ▾` · social icons right (WhatsApp→`tel:`, Facebook, Instagram, TripAdvisor).
  - Dropdowns (verified by hover): BODY WELLNESS → PILATES, ONLINE TRAINING · HOLISTIC THERAPY → BOWEN THERAPY · RETREATS + HOLIDAY PACKAGES → TAILOR MADE RETREATS, HOLIDAY PACKAGES · More (Wix overflow) → CONTACT US, Plans & Pricing.
  - Parent items BODY WELLNESS / HOLISTIC THERAPY / RETREATS are not links themselves.
- **Header (mobile):** not sticky, 240 px tall: centred logo, social icons row, hamburger below (lots of white space).
- **Footer (all pages, ~450 px, deep teal `#0E393A`):** Google Map embed (left; marker "Studio Pilates Bali") · centre text block (address + travel times, see 03 §1) · right "CONTACT US" with email, "SMS / Whatsapp or Call: +62 (0) 878 3911 2400", Facebook / Instagram / TripAdvisor icons. **No legal links, no copyright line, no nav links.**

---

## 2. Page-by-page inventory

Notation: **Sections** are listed in original DOM order at 1440 px. "Mobile" notes are from the Wix mobile layout (320 px).

### 2.1 Home — `/`
- **Purpose:** brand introduction, routes to Pilates / Bowen / Online, testimonials, story.
- **SEO:** title "The Art Of Body, Bali | Pilates Bali | Jalan Mertanadi, Kerobokan Kelod, Badung Regency, Bali, Indonesia"; meta description begins "Pain-Free Movement. Stronger Core. Better Posture. Since 2009, …" and ends with the literal text "[Book Your First Session] [Learn About Our Services]"; keywords "Pilates Bali, Bowen Bali, Personal Training Bali"; canonical `/`; og:image studio interior `e4193205`; JSON-LD: `LocalBusiness`, `WebSite`, `HealthAndBeautyBusiness` (founder Faz, hours Mo–Fr 08:00–18:00, priceRange "400k-900k"). **Only `<h1>` on the page is "ONLINE TRAINING".**
- **Sections:**
  1. Hero (full-bleed background **video** `11062b_e12e…` 1080p, poster image; blush logo `b4e088f1` centred). Text: "Therapeutic Pilates & Bodywork in Seminyak, Bali / Pain-Free Movement / • Stronger Core • Better Posture • / STOTT Pilates, Bowen Therapy & Myofascial Release since 2009." CTAs: **Our Services** → `/our-services`, **Book a Class** → `/book`.
  2. "OUR PHILOSOPHY" – two paragraphs + Lao Tzu quote; image Balinese dancer `29ec017c`.
  3. "Our Services" – three alternating rows with circular images: PILATES / STUDIO PILATES (`76c7382c`, CTA View Our Classes → `/pilates`); HOLISTIC THERAPY / BOWEN TECHNIQUE (`04507d0c`, CTAs Explore Healing + Learn about Bowen Therapy → both `/bowen-therapy-1`); ONLINE TRAINING / PILATES AND BACK TO HEALTH (`a79a119d`, CTA Explore Online Training → `/online-training`).
  4. "TESTIMONIALS" – Wix slideshow, 5 slides with dot navigation + prev/next arrows; each slide has its own background photo (see 03 §5).
  5. Strip: "Learn more about our classes and treatment sessions" + CTA See our Holistic Services → `/our-services`.
  6. "Our Story" – paragraphs + "What Makes Us Different" list; succulent background `519b3eaa`.
  7. Footer.
- **Mobile:** section order differs – "Our Story" appears directly after the "Our Services / PILATES" headings and before the service rows (verified in `content/page-text/home-root.mobile.txt`). Hero video not rendered on mobile (no `<video>` element); slideshow kept.
- **Risks:** heavy hero video (10 MB); two buttons in one row point to the same URL; "Learn about Bowen Therapy" and "Explore Healing" duplicate.

### 2.2 About — `/about`
- **SEO:** title "About Faz & The Art of Body | Pilates Expert Seminyak Bali"; description "Meet Faz, founder of The Art of Body since 2009. STOTT Pilates instructor and Bowen therapy practitioner…"; keywords are broken ("The, Art, Of, Body, |, Pilates, …"). Two `<h1>`s (a quote and "About The Art Of Body").
- **Sections:** quote "The body's capacity to heal is endless, but its ability to heal is all up to us" — Faz → "About The Art Of Body" (wire-sculpture image `eee5095e`) → "Our Why" (cliff/sea image `f06b210b`) → "Our Offerings" list (Pilates, Personal Training, Holistic Healing & Therapy, Bowen Technique, Personal Integration & Coaching, Retreat Facilitation; meditation image `87e45df2`; CTAs Our Holistic Offerings → `/our-services`, Schedule a Session → `/book`) → "Our Studio" facilities list (images `7e91dafa`, `c3c07ecd`, `a8cf6d4c`) → "Trainer / Qualifications & Expertise" list (blurry spine render `337d11c9`) → strip "Learn how we integrate mind, body & soul" + Our offerings → `/our-services` → footer.
- **Notes:** trainer section does not name or show the trainer. Good factual content (facilities, qualifications).

### 2.3 Our Services — `/our-services`
- **SEO:** title "OUR SERVICES | The Art Of Body"; description "Pilates , Fitness , Holistic Health, Bowen, Re-balancing, Vagus nerve reset." (vagus nerve reset appears nowhere else).
- **Sections:** hero (stock class photo `49da4fe0`) "INSPIRED BY CREATING ENERGY WITH THE BODY / Pilates. Personal Training. Holistic Healing." CTAs Book a Class → `/book`, Contact Us → `/contact-us` → mint band "Our Wellness Style" → "Our Offerings": BODY WELLNESS / Pilates (+ "CHOOSE FROM" list), Customised Sessions (+ "MIX + MATCH EXAMPLES"), "BOOK A BODY WELLNESS CLASS" (Book a Session, Contact Us) → HOLISTIC THERAPY / Bowen (Book a Bowen Treatment → `/book`) → HOLIDAY RETREATS AND PACKAGES / Tailor-made Retreats (Inquire → `/contact-us`), Holiday Packages (Inquire → `/contact-us`) → footer.
- **Broken:** the four underlined red "Learn more about …" text links have no href (verified by click – no navigation).

### 2.4 Pilates — `/pilates`
- **SEO:** title "STOTT Pilates Classes Seminyak Bali | The Art Of Body"; good description.
- **Sections:** hero (B&W pike pose `fd285b54`) "Studio Pilates Bali at The Art of Body / STOTT Pilates Studio in Seminyak, Bali" + intro → "Studio Pilates Offerings" with prices (Initial Consultation, Private, Couples, Semi-Private incl. schedule, Group Mat) → CTAs BOOK A PILATES CLASS (Book a Class → `/book`), NEED HELP? (Contact us → `/contact-us`) → "Testimonials" ×3 cards over reformer image `99e5e17a` → "Frequently Asked Questions" (4 Q&A) → coral cross-sell box: "Interested in combining Pilates with hands-on bodywork? … Train from home?" with buttons **Our Holistic Services → `/bowen-therapy-1`** and **Online Training → `/contact-us` (wrong destination)** → footer.
- **Mobile:** testimonial cards hidden.

### 2.5 Online Training — `/online-training`
- **SEO:** title "Online Pilates Classes | Virtual Training with Bali Expert".
- **Sections:** tall hero (lunge photo `a8bac5f7`) with intro, "Why Train Online With Us" list, "What You Need" list, "Online Session Pricing / Private 1-on-1 (55 mins): USD 65", "Book Your Class Today" → "Online Training Offerings" (Private US$65, Semi-private US$15 each, Group US$10 each, Back to Health US$65) → CTAs BOOK ONLINE TRAINING SESSION (**Book a Class → Acuity Scheduling, new tab**), Contact us → "Testimonials" ×3 → FAQ (5 Q&A) → coral box "Learn about our holistic healing therapies and coaching…" with Our Holistic Services → **`/bowen-therapy` (hidden coaching page)** → footer.
- **Mobile:** testimonials hidden.

### 2.6 Bowen Therapy — `/bowen-therapy-1`
- **SEO:** title "Bowen Therapy Bali | Non-Invasive Holistic Treatment Seminyak".
- **Sections:** title "Bowen Therapy at The Art of Body" + intro → image strip (same low-res image `c1c36f8e` shown twice side by side) → "What is Bowen Technique?" (5 paragraphs on history/theory; circular image `dbdbb9c9`) + "BOWEN THERAPY (1 HOUR) Rp. 1,200.000" → CTAs BOOK BOWEN THERAPY (Book a session → `/book`), Contact us → "WHAT PEOPLE SAY" ×3 (two titles link to TripAdvisor reviews) over hot-stone image `b679f79c` → FAQ (4 Q&A) → "What To Expect In Your Bowen Session" → coral box "Learn about our fitness, wellbeing and holiday retreat services…" (Our Offerings → `/our-services`) → footer.
- **Mobile:** testimonials hidden.

### 2.7 Tailor Made Retreats — `/tailor-made-retreats-1`
- **SEO:** title "Tailor Made Pilates Retreats Bali | The Art of Body Seminyak"; keywords pilates retreat set.
- **Sections:** hero (infinity pool `63ef6db3`) with navy circle "PILATES RETREAT at The Art of Body" + 3 paragraphs (inline link "pilates in Bali" → `/`); "Contact us" (→ **`/book`**) line → deep-teal section "THE BEST PILATES RETREAT IN BALI / IMAGE WHAT YOU CAN ACHIEVE…" (3 paragraphs, circular image `f4b788a7`) → "What's Included in Your Custom Bali Wellness Package" list, "Who Is This For?" ✓ list, "Sample 7-Day Wellness Package" (circular image `21a8dd26`) → "WHAT PEOPLE SAY" ×3 → footer.
- **Notes:** H1 is "PILATES RETREAT" although nav label is "Tailor Made Retreats". Text duplicated almost verbatim on `/pilates-retreat`. Mentions "women's wellness and dance retreats" (not offered elsewhere). Mobile: testimonials hidden.

### 2.8 Holiday Packages — `/holiday-packages`
- **SEO:** title "HOLIDAY PACKAGES | The Art Of Body".
- **Sections:** hero (beach meditation `bc001baa`) navy circle "TAILOR MADE / HOLIDAY PACKAGES at The Art of Body" + 2 paragraphs; specialisms line (Back Rehabilitation … Post-Baby toning) → navy section "OUR MIND/ BODY SOUL PACKAGES / MIX AND MATCH PACKAGES FROM FIVE DIFFERENT OFFERINGS/ BODY SOUL PACKAGES" → Package 1 Pilates Immersion (Rp 2.700.000 / 5 h), Package 2 Back to Health (Rp 4.000.000 / 5 h), Package 3 Mind/Body Transformation (Rp 6.800.000 / 8 h), each with "Inquire …" → `/contact-us` → price disclaimer with WhatsApp number (**typo: +628783911200**) → "HAVE MORE QUESTIONS? CONTACT US" → large empty navy area → footer.
- **Notes:** "five different offerings" but only 3 packages; Package 1 description is copied from Group Mat Pilates. Mobile identical content.

### 2.9 Book — `/book`
- **SEO:** title "The Art Of Body | Booking"; description "Our dedicated staff will help. Just call and we will do our best for you."
- **Sections:** hero (studio photo `18311f99`, navy box) "BOOK A SESSION" + info@ / pilates@ emails + "SMS / Whatsapp or Call:+62 (0) 878 3911 2400" → **Wix Bookings service list widget** (4 cards: image, name, tagline, 55 min, price, "Request to Book" → `/booking-calendar/<slug>`) → footer.
- **Data:** see `data/wix-bookings-services.json` and 03 §3.

### 2.10 Booking calendar — `/booking-calendar/<service>` (×4)
- Wix Bookings calendar: "Schedule your service / Check out our availability and book the date and time that works for you / Select a Date and Time", time zone selector (showed "Central Indonesia Time (WITA)" on desktop; on the mobile run it showed the test machine's zone, India Standard Time), month grid, "Availability for Monday, 19 October – No availability", "Check Next Availability", Service Details, "Request to Book". **No slot was selected and no booking was submitted.**

### 2.11 Service pages — `/service-page/<service>` (×4)
- Wix Bookings service page: name, tagline, "55 min", price (e.g. "Rp 750.000"), location "Jalan Mertanadi" (semi-private shows "Jalan Mertanadi 22xx"), "Request to book", "Service Description", **"Cancellation Policy"** (24-hour notice text, WhatsApp +6287839112400), "Contact Details". Robots `index`. Not linked from site UI except via Wix.

### 2.12 Plans & Pricing — `/plans-pricing`
- **SEO:** title "Plans & Pricing | The Art Of Body"; description is **outdated**: "Group pilates classes limited to three people 350,000rp pax / Private pilates classes are one on one 680,000rp pax".
- **Sections:** "Choose your pricing plan" – Wix Pricing Plans widget, 5 plans with "Buy Now" (see 03 §3). Checkout not tested.

### 2.13 Contact Us — `/contact-us`
- **SEO:** title "The Art Of Body | Pilates Bali | speak to me :)"; description "Contact Us.+62 878 3911 2400 pilates@theartofbody.com".
- **Sections:** white card: "Contact Us" heading, intro paragraphs signed "-Faz and the The Art of Body team" (left); Wix form (right): Name * (text, required), Email * (email, required), Subject, Phone (tel), Message (textarea), **Send** → footer (map visible here).
- **Notes:** no address/phone/hours in the page body (only in footer).

### 2.14 Pre & Post Natal — `/pre-post-natal` (orphan)
- **SEO:** title "PRE + POST NATAL | The Art Of Body"; description "With well over a decade of experience , you're in good hands".
- **Sections:** hero (pregnant woman `2766a361`) "Pre + Post Natal Training at The Art of Body" + intro on Natalie Kashani → "PRENATAL FITNESS OFFERINGS (45 MINUTES)" list + disclaimer + price → "POST BABY FITNESS OFFERINGS (45 MINUTES)" + disclaimer + price → CTAs BOOK A NATAL CLASS, Contact us → "Testimonials" **(3 Wix placeholder cards "NAME, TITLE")** → "Frequently Asked Questions" (actually 8 value statements, one duplicated with corrupted text) → coral box → Our Holistic Services → `/bowen-therapy-1` → footer.

### 2.15 Life & Wellness Coaching — `/bowen-therapy` (hidden, noindex)
- **SEO:** title "PERSONAL COACHING | The Art Of Body"; `robots: noindex`.
- **Sections:** "Life & Wellness Coaching with Natalie Kashani at The Art of Body" → Rumi quote → intro (Natalie, 13+ years women's health) + "EMPOWERMENT COACHING" (Book a session → `/book`; Contact Nat → `mailto:ns@theartofbody.com`) → "HOW DO I KNOW COACHING WILL BE FOR ME?" list → "My Methodology" (MIND & SOUL / BODY lists) → "1.5 HOURS / Rp. 1.500.000 / Sessions can also be scheduled via Skype" → "INSPIRED BY CREATING ENERGY WITH THE BODY" (Book a Session, Contact Natalie) → "WHAT PEOPLE SAY" **(placeholders)** → value statements (same as pre-post-natal) → Our Offerings → footer.

### 2.16 Legacy SEO landing pages
All four use an older visual style (mint `#87E8D0` overlays, red `#ED2641` headings, Proxima Nova), contain duplicated copy, and are not in the navigation.

| Route | Title | Unique content worth keeping | Problems |
|---|---|---|---|
| `/pilates-bali` | "The Art of Body \| Pilates in Bali. Seminyak. Classes and trainings." | "SPECIAL PROMO – BEGINNER STARTER PACK … Only Rp.1.350.000"; testimonials (Danella G, Melmak 2015, Claudia – longest Claudia version) | FAQ questions with **no answers**; empty Honeycomb gallery iframe; "1 HOUR" durations; semi-private schedule differs from `/pilates` |
| `/pilate-studio-bali` | "STOTT Pilates Classes Seminyak \| Private & Group Sessions" | "50/50 CUSTOMISED TRAINING (1 HOUR)" examples; "PILATES RETREAT (3, 5 OR 7 DAYS) … All-inclusive"; Korean-language TripAdvisor testimonial; Donna, Stephanie testimonials | No prices; FAQ without answers; empty Honeycomb gallery; mentions "pole dance retreat programs" (dead external link); slug misspelt ("pilate") |
| `/pilates-seminyak` | "The Art of Body \| Pilates studio in Seminyak in Bali. Join us today." | Testimonials (Tropical Groove, Angelina, Neil D) | Private 10-pack **Rp 7.300.000** (conflicts with 6.750.000 elsewhere); placeholder testimonials; bare URL text "https://www.theartofbody.com/pilates-bali"; dead polesoulsretreat link |
| `/pilates-retreat` | "The Art of Body \| Join our Pilates Retreat in tropical Bali." | "WHAT TO EXPECT…" (Personalised fitness / Immersive experience / Dynamic + dedicated team); "BALI PILATES RETREAT – SPECIALISED FITNESS…" copy | Placeholder testimonials; "ENTER POLE STUDIO BALI HERE" dead link; duplicated intro of `/tailor-made-retreats-1`; "Contact us" → `/book` |

### 2.17 Members — `/account/my-account`
- Wix Members Area: "Sign Up / Already a member? Log In / Sign up with Google / Sign up with Facebook / or / Sign up with email". Login not tested.

### 2.18 Legal — `/privacy`, `/refund-policy`, `/terms`
- Each page is a single Wix HTML-embed iframe (980 px wide) loading a static HTML file from `www-theartofbody-com.filesusr.com`. Text saved in `content/legal/`. "Last Updated: December 10, 2024". Content covers the studio **and a digital product "MNDBDY.FIT"** (Founder's Edition, USD 200, Paddle / Xendit / Coinbase Commerce, Netlify / Railway / SendGrid hosting). On mobile the iframe is clipped after the first lines (content effectively unreadable).

### 2.19 404
- Wix default "page not found" with black pill "Go to Homepage" button (Madefor font).
