# 05 — Brand Reference (typography, colour, logo, visual identity)

Measured from computed styles in headless Chrome at 1440 px on 2026-10-19, from Wix theme CSS variables (`--color_*`, `--font_*`, `--wst-*`), and from pixel sampling of the original logo files. **Verified** = read from CSS or file pixels. **Estimate** = sampled from a JPEG screenshot (±3 per channel).

---

## 1. Typography (original site)

### 1.1 Font families loaded (`@font-face`, all served by Wix from `static.parastorage.com`)
| Family (Wix name) | Commercial name | Where used on the live site | Role |
|---|---|---|---|
| `avenir-lt-w01_35-light1475496` | Avenir LT 35 Light | Body copy on almost every page, buttons, footer, forms, booking widgets, "OUR PHILOSOPHY" style section labels | **Primary body font** |
| `avenir-lt-w01_85-heavy1475544` | Avenir LT 85 Heavy | Small accents (e.g. "- Lao Tzu"); theme `font_0` | Accent |
| `brandon-grot-w01-light` | Brandon Grotesque Light | Navigation (14 px), uppercase headings ("STUDIO PILATES", "WHAT PEOPLE SAY", "FAQ", "Contact Us", service-page titles), theme heading fonts `font_2`–`font_6` | **Primary heading / nav font** |
| `didot-w01-italic` | Linotype Didot Italic | Elegant italic display headings: "Our Services", "Our Story", "About The Art Of Body", "Our Why", "Studio Pilates Offerings", "Frequently Asked Questions", hero lines, quotes | **Signature display font** |
| `proxima-n-w01-reg` | Proxima Nova Regular | Legacy SEO pages and holiday packages (offer lists, headings) | Legacy |
| `helvetica-w01-bold`, `helvetica-w01-roman`, `HelveticaNeueW01-45Ligh` | Helvetica / Helvetica Neue | Testimonial names (18 px), misc. | Incidental |
| `bree-w01-thin-oblique` | Bree Thin Oblique | Testimonial bodies on some pages | Incidental |
| `"open sans"` (400/700, normal/italic) | Open Sans | "BODY WELLNESS / HOLISTIC THERAPY" labels on /our-services, coaching page | Incidental |
| `din-next-w01-light` | DIN Next Light | Theme fonts `font_1`, `font_10` (theme default, little visible use) | Template default |
| `futura-lt-w01-book` | Futura Book | Loaded; no significant visible use found | Template |
| `Madefor`, `Madefor Display` | Wix system font | Wix 404 page only | Platform |
| Arial / Helvetica | System | Wix default on link wrappers & inputs (no visible copy) | Platform default |

**Count: ~11 distinct families are loaded across the site.** The recognisable identity rests on three: **Avenir Light (body)**, **Brandon Grotesque Light (uppercase/nav)**, **Didot Italic (display headings)**.

Font files: **none are available locally**; all are commercial fonts licensed through Wix and served from Wix CDN. They cannot be legally self-hosted outside Wix without separate licences.

### 1.2 Wix theme font tokens (verified, homepage)
| Token | Value |
|---|---|
| `--font_0` | 16px/1.4em Avenir LT 85 Heavy |
| `--font_1` | 16px/1.4em DIN Next Light |
| `--font_2` (Heading 2) | 55px/1.4em Brandon Grotesque Light |
| `--font_3` (Heading 3) | 90px/1.4em Brandon Grotesque Light |
| `--font_4` | 55px/1.4em Brandon Grotesque Light |
| `--font_5` | 45px/1.4em Brandon Grotesque Light |
| `--font_6` | 19px/1.4em Brandon Grotesque Light |
| `--font_7` | 17px/1.4em Didot Italic |
| `--font_8` (Paragraph 2) | 16px/1.4em Avenir LT 35 Light |
| `--font_9` | 15px/1.4em Avenir LT 35 Light |
| `--font_10` | 12px/1.4em DIN Next Light |

### 1.3 Observed type styles (verified computed values, desktop 1440)
| Element | Family | Size / weight | Line-height | Letter-spacing | Colour | Example |
|---|---|---|---|---|---|---|
| Nav item | Brandon Light | 14px / 400, uppercase text | 74px | none (HOME written "H O M E") | `#FF715E` (default), `#A2AC87` (active/hover) | H O M E |
| Dropdown item | Brandon Light | 14px | — | — | as nav | PILATES |
| Display H1/H2 (italic) | Didot Italic | 37–44px / 400 (700 on some) | normal–61.6px | normal | `#404041` or navy `#002E5D` | "Our Services", "Pre + Post Natal Training" |
| Section label (spaced caps) | Avenir Light | 30px / 400 | normal | 4.5px | `#404041` | "OUR PHILOSOPHY", "PILATES" |
| Sub-heading caps | Brandon Light | 19px / 700 | 47.5px | 1.14px | `#404041` | "STUDIO PILATES" |
| Large caps heading | Brandon Light | 55px / 700 | normal | 11px | navy `#002E5D`, pink `#FC8B8B` or red `#A40404` | "WHAT PEOPLE SAY" |
| Page title (utility) | Brandon Light | 55px / 400 | normal | — | red `#EB1B00` | "Contact Us" |
| Booking widget titles | Brandon Light | 32–40px / 400 | 42–56px | — | sage `#A2AC87` / `#404041` | "Schedule your service" |
| Body | Avenir Light | 16px / 400 | 27.2–29.6px (≈1.7–1.85) | normal / 0.32px | `#404041` | paragraphs |
| Hero tagline | Didot Italic | 22px / 400 | normal | normal | `#000000` | home hero |
| Quote | Didot Italic | 17px | 25.5px | 0.51–1.02px | `#404041` | Lao Tzu |
| Testimonial text | Avenir Light italic | 15px | 21px | 0.75px | `#FFFFFF` | home slideshow |
| Testimonial name | Helvetica Bold | 18px | 18px | — | `#FF715E` / `#FF6161` | "Eva S, Singapore" |
| Price lines (legacy) | Proxima Nova | 14–21px | normal | — | red `#ED2641` (offer names) | "PROFESSIONAL INITIAL CONSULTATION" |
| Button label | Avenir Light | 15–16px / 400 | 21–22.4px | normal | varies (see §2.4) | "View Our Classes" |
| Footer text | Avenir Light | 16–17px | 20.8–39.1px | normal | `#FFFFFF` | address block |
| Footer label | Avenir Light | 12px | 18px | 1.2px | `#FFFFFF` | "CONTACT US" |

Mobile: Wix mobile layout uses the same families; sizes are set per element in the mobile editor (body ≈ 14–15px at 320px layout width; headings scaled down). See `07-responsive-observations.md`.

### 1.4 Typography rule for the redesign (mandatory, recorded for Phase 2)
- The redesigned website must use **exactly two font families** site-wide: one for headings, one for body/UI (nav, buttons, forms, cards, footer).
- Both must be readable, professional and not overly fancy. Hierarchy comes from weight, size, line-height and letter-spacing only. No third family for decorative headings, special sections, footer or individual components.
- **The final two fonts are NOT selected in this audit** (not authorised). Options for Phase 2 to evaluate, based on the original identity:
  - The original heading feel is a **high-contrast italic serif (Didot Italic)** plus **light geometric caps (Brandon Grotesque)**; body is **Avenir Light**. One family has to carry headings, so Phase 2 must decide whether the serif-italic character (more recognisable) or the geometric-caps character becomes the heading voice.
  - Licensing: Avenir, Brandon Grotesque and Didot are commercial; Wix's licence doesn't carry over to a Next.js site. Phase 2 should either budget licences or choose close open-licence alternatives. Possible directions (not decisions): a refined serif with good italics for headings and a humanist or geometric sans for body.

---

## 2. Colour

### 2.1 Wix theme palette (verified from CSS variables)
| Theme slot | RGB | HEX | Role on site |
|---|---|---|---|
| color_18 / `--wst-color-action` / accent-1 | 162,172,135 | **#A2AC87** | **Sage – primary brand action colour**: filled buttons, button borders, active nav, mobile menu background, booking calendar accents |
| color_16 | 207,213,191 | #CFD5BF | Sage tint |
| color_17 | 187,196,163 | #BBC4A3 | Sage tint |
| color_19 | 81,86,68 | #515644 | Sage shade |
| color_20 / accent-3 | 41,43,34 | #292B22 | Dark olive |
| color_21 / accent-2 | 253,246,235 | **#FDF6EB** | **Cream – main page background** |
| color_22 | 227,216,197 | **#E3D8C5** | Sand – booking "Request to Book" buttons, borders |
| color_23 / 24 / 25 | 173,162,142 / 166,147,121 / 51,49,47 | #ADA28E / #A69379 / #33312F | Sand shades |
| color_26 | 195,230,208 | #C3E6D0 | Mint tint ("Our Wellness Style" band ≈ #C1E7CE est.) |
| color_27–30 | 156,184,166 / 117,138,125 / 78,92,83 / 39,46,42 | #9CB8A6 / #758A7D / #4E5C53 / #272E2A | Green-grey scale |
| color_31–35 | 239,215,205 / 222,179,160 / 167,134,120 / 111,90,80 / 56,45,40 | #EFD7CD / #DEB3A0 / #A78678 / #6F5A50 / #382D28 | Blush / terracotta scale |
| color_15 / 37 / 45 | 64,64,65 | **#404041** | **Charcoal – main text colour** |
| color_13 / 39 | 160,160,159 | #A0A09F | Grey – disabled, calendar day numbers |
| color_14 / 40 | 96,94,94 | #605E5E | Dark grey |
| color_0/1/8/11 | 255,255,255 | #FFFFFF | White |
| color_2 | 0,0,0 | #000000 | Black |
| color_3 | 237,28,36 | #ED1C24 | Template red (default Wix palette slot) |
| color_4 / 5 | 0,136,203 / 255,203,5 | #0088CB / #FFCB05 | Template defaults (not brand) |

### 2.2 Colours used in content but outside the theme palette (verified computed styles unless marked)
| HEX | Use | Classification |
|---|---|---|
| **#0E393A** (14,57,58) | Footer background; deep-teal section on /tailor-made-retreats-1 (≈ #0D393A est.) | **Brand** – matches the logo ink **#10393A** (verified from logo PNG) |
| **#FF715E** (255,113,94) | Nav links, offer titles on /pilates, testimonial names, holiday package titles, button borders | **Brand accent (coral)** |
| #FFBDAD (est.) | Coral/peach cross-sell boxes at bottom of /pilates, /online-training, /bowen-therapy-1, /pre-post-natal | Accent (tint of coral) |
| rgba(255,113,94,0.88) / ≈ #E08074 (est.) | Testimonial card on homepage slideshow | Accent |
| #002E5D (0,46,93) / ≈ #032F60 (est.) | Navy: headings on /pilates, /bowen-therapy-1, /pre-post-natal; testimonial cards on /pilates & /online-training; hero circles and full section on /holiday-packages, /tailor-made-retreats-1, /book hero box | Secondary (used on many inner pages, not on home/about) |
| #DB1A00 / #C21700 / #BD1600 / #EB1B00 | Red link text, "Contact Us" title, "BOOK A BODY WELLNESS CLASS" | Accent reds – inconsistent variants |
| #ED2641 / #BD0F26 / #C11027 | Legacy SEO pages' red headings | Legacy |
| #FC8B8B / #FF6161 / #A40404 | "WHAT PEOPLE SAY" headings and names on various pages | Inconsistent accent variants |
| #87E8D0 (135,232,208) at 56–84 % opacity; ≈ #82CCAB (est.) | Mint overlays on legacy pages and Bowen testimonials | Legacy |
| #FFEF9E (255,239,158) / ≈ #FFEF9F (est.) | Thin yellow strip under /online-training hero; #F7DF8D on /holiday-packages | Incidental |
| #EAE6E3 (est.) | Homepage "Our Story" panel background | Incidental |
| #FDF7EC / rgba(252,243,230,0.7) | Cream variants (cards, overlays) | Variant of cream |
| #0000EE | Browser default link colour on Wix link wrappers (not visible text) | Not brand |
| #1878F2, #DADCE0 | Facebook / Google buttons on members sign-up | Third-party |

### 2.3 Logo colours (verified from original PNG/JPG pixels)
| Logo file (asset_id) | Ink colour | Use |
|---|---|---|
| `5a189358…` header logo | **#10393A** deep teal on transparent | Header, og:image |
| `bba408fe…` favicon | #10393A solid disc, white artwork | Favicon |
| `b4e088f1…` hero logo | **#EEC9B2** blush on transparent | Homepage hero over video |
| `51de3b02…` JSON-LD logo | #63B690 green-teal outline | Structured data only |
| `39916b31…` legacy mark | #73C267 green | Old "running figure" logo, hidden on homepage |

### 2.4 Buttons & states (verified)
| Button | Default | Hover |
|---|---|---|
| Outline sage (e.g. "View Our Classes", "Explore Healing") | transparent bg, 1px `#A2AC87` border, text `#11120D`–`#666F4D`, 0 radius, ~40px tall | bg `#A2AC87`, text `#FFFFFF` |
| Outline coral (e.g. "See our Holistic Services", "Our Holistic Offerings") | transparent, 1px `#FF715E` border, text `#DB1A00`/`#C21700` | bg `#000000`, text `#FFFFFF`, border black |
| Filled sage small ("Book a Class", "Contact us" on /pilates; "Buy Now") | bg `#A2AB87`/`#A2AC87`, text dark or white, 0 radius | (theme: primary hover fill white, text sage) |
| Hero ghost ("Our Services", "Book a Class" on home) | bg rgba(114,114,114,0.5), 1px white border, white text | not measured |
| Booking "Request to Book" | bg `#E3D8C5`, text `#404041` | — |
| Holiday "Inquire…" | bg `#FDF6EB`, text dark | — |
| Nav link | `#FF715E` | `#A2AC87` (verified on ABOUT) |
| Wix theme button tokens | primary: fill sage, text white; hover: fill white, text sage. Secondary: fill white, text sage; hover: fill sage, text white | — |

### 2.5 Recommended brand core for Phase 2 (derived from the evidence; not a final palette)
- **Sage #A2AC87** (action/brand), **deep teal #0E393A / #10393A** (logo ink, footer, dark sections), **cream #FDF6EB** (background), **sand #E3D8C5** (secondary surfaces), **charcoal #404041** (text), **blush #EEC9B2** (light logo / soft accent), **coral #FF715E** (accent, use sparingly).
- Navy `#002E5D`, the many reds, mint overlays and yellow strips are inconsistent page-level choices. Don't carry them over unless the client asks.

---

## 3. Other visual identity elements

| Element | Observation |
|---|---|
| Logo | Circular seal: wordmark "THE ART OF BODY" around the top, "PILATES & HOLISTIC WELLNESS" around the bottom, minimal line drawing of a figure in a lunge/arabesque in the centre. Header: top-left, ~101 px. Hero: large blush version centred over video. Favicon: solid teal disc. No horizontal/wordmark-only version exists. |
| Image treatment | Mix of (a) warm, sunlit Bali lifestyle photos (sunset, beach, pool), (b) high-contrast **black & white** studio/body photography, (c) bright stock fitness images, (d) botanical textures (succulents, banana leaves, palms) used as full-section backgrounds with coloured overlays. Circular crops (50 % radius) for service thumbnails on home and retreat pages. Full-bleed parallax-like hero backgrounds. |
| Shape language | Square corners almost everywhere (0 radius on ~99 % of elements); circles for image crops and hero text discs (holiday/retreat pages); 18px radius only on booking calendar day buttons; one 50px pill (Wix 404). |
| Lines | Thin horizontal rules next to italic headings on About and Our Services ("About The Art Of Body ———"). |
| Shadows | Mostly none (≈99 % of elements). `0 0 5px rgba(0,0,0,0.7)` was found on 56 elements across all pages (Wix container skins; exact elements not individually identified). The header shows a soft bottom shadow in screenshots. |
| Icons | Black glyph social icons in header (WhatsApp, Facebook, Instagram, TripAdvisor); white-circle icons in footer. Large coral "”" quote marks on testimonial cards. |
| Decorative motifs | Italic serif headings, spaced capitals, quotes from Lao Tzu / Rumi / founder, sage-green and blush tones. |
| Tone | Calm, holistic, warm, personal ("we value you and your wellbeing"), mixed with clinical credibility (STOTT, rehabilitation, chronic pain). Founder-led (Faz, Natalie). |
| Inconsistencies | Core pages (Home, About, Our Services, Book, Contact) use cream/sage/Didot. Inner service pages add navy and coral. Legacy SEO pages use mint/red/Proxima Nova. Holiday packages use a full navy page. The redesign should unify everything around the core identity. |
