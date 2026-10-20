# 03 — Content Inventory (preservation reference)

Everything here was read from the live site on 2026-10-19. Text in quotation marks or code blocks is **verbatim** (including original spelling). Full verbatim text per page: `content/page-text/`. Structured files:

| File | Contents |
|---|---|
| `content/page-text/<route>.desktop.txt` / `.mobile.txt` | Visible page text per route (header/footer excluded) |
| `content/testimonials.json` | All 26 testimonials (21 on inner pages + 5 homepage slides) with page, attribution, verbatim text |
| `content/faqs.json` | 21 FAQ items (13 with answers, 8 questions without answers) |
| `content/legal/privacy.txt`, `refund.txt`, `terms.txt` | Legal documents (from iframe embeds) |
| `data/wix-bookings-services.json` | Wix Bookings service records (name, description, price, duration, image, slugs) |
| `data/acuity-appointment-types.json` | Acuity Scheduling appointment types (separate system) |
| `data/headings-by-page.json` | All `<h1>`–`<h6>` per page |

Conflicts and errors are only flagged here; they are discussed in `08-issues-gaps-questions.md`. **Nothing has been corrected.**

---

## 1. Business facts

| Fact | Value (verbatim where quoted) | Source(s) | Confidence |
|---|---|---|---|
| Brand name | "The Art Of Body" / "THE ART OF BODY" / "The Art of Body" | All pages; og:site_name "The Art Of Body" | Verified |
| Alternative names | "Studio Pilates Bali" (Wix business name, JSON-LD, Acuity, Google Maps marker); "Studio Pilates - The Art of Body" (TripAdvisor URL slug); "STUDIO PILATES BALI" (online page) | JSON-LD, Wix Bookings config, Acuity | Verified |
| Tagline (logo) | "PILATES & HOLISTIC WELLNESS" | Logo artwork | Verified |
| Address | "Jalan Mertanadi 22xx, Kerobokan, in the heart of Seminyak." (footer). Formatted: "Studio Pilates Bali \| The Art Of Body, Jalan Mertanadi, Kerobokan Kelod, Badung Regency, Bali, Indonesia", postcode 80361 | Footer; Wix Bookings location; JSON-LD | Verified (street number shown as "22xx") |
| Geo coordinates | -8.6819575, 115.1676262 (Bookings default location); -8.6819819, 115.1674379 (second location record "Jalan Mertanadi 22xx") | Wix Bookings data | Verified (data) |
| Phone / WhatsApp | "+62 (0) 878 3911 2400" – link `tel:+6287839112400`; JSON-LD "087839112400" / "+62-878-3911-2400" | Footer, header icon, /book, service pages | Verified |
| Emails | info@theartofbody.com (footer, /book; mailto subject "Hello Art of Body!"); pilates@theartofbody.com (/book, contact meta); ns@theartofbody.com (Natalie, hidden coaching page); privacy@theartofbody.com (privacy policy) | As listed | Verified (addresses seen; deliverability not tested) |
| Founded | "since 2009" (home, about, footer, many pages). Terms of Service says "established in 2007" | — | **Conflict** |
| Founders / people | "founded in 2009 by Faz and Nat" (about); "Natalie and Faz" (about); "Natalie Kashani" (pre/post natal, coaching); Faz = Wix Bookings staff member, JSON-LD founder | About, natal, coaching, data | Verified |
| Trainer qualifications | "STOTT Pilates Instructor / Bowen Therapy Practitioner / Myofascial Release Specialist / 15+ years clinical and studio experience / Specialisation in rehabilitation and chronic pain management / Trusted by clients from over 30 countries" | /about | Verified (as claimed by site) |
| Studio facilities | "Four STOTT Pilates Reformer systems / TRX training equipment / Mat Pilates space / Private shower and change rooms / Towel laundry facilities / Free parking / Air conditioned throughout" | /about | Verified (as claimed) |
| Opening hours | "Mo-Fr 08:00-18:00" – **JSON-LD only, not shown on any page** | Homepage JSON-LD | Data only; confirm |
| Class schedule | Semi-private: "8,9 and 10am from Monday to Friday … Saturday 9.30 and 10.30am" (/pilates) vs "every hour on the hour from monday to saturdays midday" (/pilates-bali, /pilate-studio-bali) | — | **Conflict** |
| Travel times (footer) | "Sunset Road (5 minutes) / Oberoi area (walking distance) / Legian (10 minutes) / Canggu (15 minutes) / Sanur (25 minutes)" | Footer | Verified |
| Service area statement | "Serving the Seminyak, Kerobokan, Canggu, Legian, and greater Bali wellness community since 2009." | Footer | Verified |
| Time zone | WITA (UTC+8) | /online-training FAQ, booking calendar | Verified |
| Social | Facebook https://www.facebook.com/studiopilatesbali/ · Instagram https://www.instagram.com/studiopilatesbali/ · TripAdvisor https://www.tripadvisor.com.au/Attraction_Review-g469404-d3263478-Reviews-Studio_Pilates_The_Art_of_Body-Seminyak_Bali.html (header/footer) and …-Seminyak_Kuta_District_Bali.html (homepage slideshow) | Header, footer | Links verified present; destinations not opened |
| JSON-LD sameAs | "https://www.facebook.com/The art of body, Bali" (invalid URL), "https://www.instagram.com/studiopilatesbali", "https://www.instagram.com/theartofbodybali" (second Instagram handle) | Homepage JSON-LD | Data; second handle unverified |

### Footer text (verbatim)
```
located at Jalan Mertanadi 22xx,
Kerobokan, in the heart of Seminyak.
We're easily accessible from:
- Sunset Road (5 minutes)
- Oberoi area (walking distance)
- Legian (10 minutes)
- Canggu (15 minutes)
- Sanur (25 minutes)
Easy to find just off the main road.
Serving the Seminyak, Kerobokan, Canggu, Legian, and greater Bali wellness community since 2009.
CONTACT US
info@theartofbody.com
SMS / Whatsapp or Call:
 +62 (0) 878 3911 2400
```

---

## 2. Navigation & CTA labels (verbatim)

- Desktop nav: `H O M E` · `ABOUT` · `OUR SERVICES` · `BODY WELLNESS` (PILATES, ONLINE TRAINING) · `HOLISTIC THERAPY` (BOWEN THERAPY) · `RETREATS + HOLIDAY PACKAGES` (TAILOR MADE RETREATS, HOLIDAY PACKAGES) · `BOOK` · `More` (CONTACT US, Plans & Pricing).
- Mobile menu: same items, with "+" expanders for BODY WELLNESS and HOLISTIC THERAPY; RETREATS + HOLIDAY PACKAGES label overflows its row.
- CTA labels in use: "Our Services", "Book a Class", "View Our Classes", "Explore Healing", "Learn about Bowen Therapy", "Explore Online Training", "See our Holistic Services", "Our Holistic Offerings", "Schedule a Session", "Our offerings", "Book a Session", "Contact Us"/"Contact us", "Book a Bowen Treatment", "Inquire about our retreats", "Inquire about our packages", "Book a session", "Inquire Pilates Holiday Package", "Inquire Back to Health Package", "Inquire Mind / Body Package", "HAVE MORE QUESTIONS? CONTACT US", "Request to Book", "Buy Now", "Send", "Check Next Availability", "Contact Nat", "Contact Natalie", "Online Training", "Our Offerings".
- CTA lead-ins: "BOOK A PILATES CLASS", "BOOK A BODY WELLNESS CLASS", "BOOK BOWEN THERAPY", "BOOK ONLINE TRAINING SESSION", "BOOK A NATAL CLASS", "NEED HELP? HAVE QUESTIONS?", "EMPOWERMENT COACHING".

---

## 3. Services, prices, durations (master table)

Currency IDR unless stated. Rp format on site uses "." as thousands separator (e.g. "Rp. 750.000"). **Bold** = conflict.

### 3.1 Studio Pilates
| Offering | Duration | Price (single / packs) | Source |
|---|---|---|---|
| Intro to Pilates | — | not priced | /our-services list only |
| Professional Initial Consultation | 55 mins (/pilates) · "1 HOUR" (legacy pages) | Rp 750.000 | /pilates, /pilates-bali, /pilates-seminyak |
| Private Pilates | 55 mins / "1 HOUR" | Rp 750.000 · 3 pack Rp 2.050.000 · 10 pack Rp 6.750.000 (**Rp 7.300.000 on /pilates-seminyak**) | /pilates, /pilates-bali, /pilates-seminyak |
| Private Pilates (Wix Bookings "Pilates Private Class") | 55 min | Rp 750.000 – "Postural analysis, basic principles of pilates, One on One consultation. Or just straight out Core stability programs..  You choose.." | /book, service page |
| Private Pilates (Acuity "Private Pilates Studio Class") | 55 min | **680,000.00**; "3 x pack" 165 min **1,890,000.00** | Acuity (external) |
| Couples Pilates | 55 mins | Rp 900.000 · 3 pack Rp 2.550.000 · 10 pack Rp 8.100.000 | /pilates, /pilates-bali, /pilates-seminyak |
| Semi-Private Pilates | 55 mins | Rp 400.000 · 3 pack Rp 1.100.000 · 10 pack Rp 3.600.000 · 20 pack Rp 7.300.000 | /pilates, /pilates-bali |
| Semi-private (Wix Bookings) | 55 min | Rp 400.000 – "Classes of no more than four, combination of matt and machine…" | /book |
| Group Mat Pilates | 55 mins | Rp 300.000 per person / minimum 4 pax; "appropriate for 4-8 people"; "can also be organised for in-villa purposes" | /pilates, /pilates-bali, /pilates-seminyak |
| 50/50 Customised Training | 1 HOUR | not priced; "eg: Pilates / Bowen · HITT training / TRX · Personal training / Bowen" | /pilate-studio-bali |
| Customised Sessions (mix & match) | — | not priced; "HITT Training + TRX / Personal Training + streatching" | /our-services |
| Beginner Starter Pack | — | "1 Initial 1 hour Consultation / 1 Private Session (1 Hour) / 1 Semi -Private Sessions ( 1 Hour) / Only Rp.1.350.000" (/pilates-bali "SPECIAL PROMO"); /pilate-studio-bali lists only consultation + private session, no price | **Conflict / possibly outdated promo** |
| Personal Training (Wix Bookings) | 55 min | Rp 800.000 – "One on One health coaching and Bespoke Fitness Program." | /book only |

Group-size statements: "maximum 3 people" (home "Our Story", /pilates FAQ), "3-person limit" (semi-private), "no more than four" (Bookings semi-private description), "3- 4 pax max" (testimonial), "3-4 PEOPLE" (online semi-private). **Conflict.**

### 3.2 Pricing plans (Wix Pricing Plans, `/plans-pricing`) – all "Valid for 3 months", button "Buy Now"
| Plan name | Description line | Price |
|---|---|---|
| 3x Semi Private package | "3x Group classes" | Rp1.100.000 |
| 10x Semi Private Pilates Classes Package | "10x Group Pilates Classes" | Rp3.600.000 |
| 3x Private Pilates Classes Package | "3x Private Pilates Classes" | Rp2.050.000 |
| 10x Private Pilates Classes Package | "10x Private Pilates Classes" | Rp6.750.000 |
| 3x Bowen Technique Sessions Package | "3x Bowen Technique sessions" | Rp3.500.000 |

Page meta description (outdated): "Group pilates classes limited to three people 350,000rp pax / Private pilates classes are one on one 680,000rp pax".

### 3.3 Bowen & therapy
| Offering | Duration | Price | Source |
|---|---|---|---|
| Bowen Therapy | "(1 HOUR)" on page; 55 min in Bookings; "approximately 55 minutes" in "What To Expect" | "Rp. 1,200.000" (page) / Rp 1.200.000 (Bookings) | /bowen-therapy-1, /book |
| 3x Bowen package | — | Rp 3.500.000 | /plans-pricing |
| Myofascial release | mentioned throughout; no standalone price | — | multiple |

### 3.4 Online training (USD) – `/online-training`
| Offering | Duration | Price |
|---|---|---|
| Private Pilates Session | 55mins | US$65.00 (also "Private 1-on-1 (55 mins): USD 65") |
| Semi-Private Pilates Session | 3-4 PEOPLE, 55mins | US$15.00 each |
| Group Pilates Sessions | 55mins, "Limit of 99 people group mat class" | US$10.00 each |
| Back to Health Session | 55mins | US$65.00 each |
| Platform | "ZOOM platform" (home) · "Zoom/Whatsapp" (online page) | — |
| Acuity types (external) | "Back To Health Session" 55 min 65.00; "Consultation" 55 min 65.00; "Private Pilates Class Online" 55 min 65.00 | Acuity |

### 3.5 Holiday packages – `/holiday-packages` (each "(Classes can be booked into 2-week customised time frame)")
| Package | Inclusions (verbatim summary) | Price / hours |
|---|---|---|
| PACKAGE 1 \| PILATES IMMERSION | 1 h Private Initial Consultation, Postural Analysis and Basic Principles of Pilates Mat work; 1 h Private Introduction to Pilates Machines (Reformer, Cadillac and Chair); 3 h Semi-private pilates Sessions | RP. 2.700.000 / 5 hours total |
| PACKAGE 2 \| BACK TO HEALTH | 1 h Private Initial consultation, Myofascial release and postural analysis, Bowen therap[y]; 3 Private Sessions (core stability, myofascial release, rehabilitation exercises, education…); 1 h Bowen therapy | RP. 4.000.000 / 5 hours total |
| PACKAGE 3 \| MIND / BODY TRANSFORMATI0N | 2 h Life / Wellness Coaching; 3 h Personal Training; 1 h Myofacial release therapy and stretching…; 1 h Private Pilates; 1 Bowen therapy session | RP. 6.800.000 / 8 hours total |
| Disclaimer | "PLEASE NOTE THAT ALL PRICES CAN CHANGE WITHOUT PRIOR NOTICE , SO PLEASE CHECK WITH US ON WHATSAPP FOR CURRENT PRICE LIST. Whatsapp+628783911200" | — |

### 3.6 Retreats – `/tailor-made-retreats-1` (and `/pilates-retreat`, `/pilate-studio-bali`)
- "What's Included in Your Custom Bali Wellness Package": Daily Pilates sessions (private or small group); Bowen therapy and myofascial release treatments; Accommodation recommendations in Seminyak; Local restaurant and cafe guidance; Cultural experiences and day trips; Airport transfer coordination; Personalised wellness program; Ongoing support throughout your stay.
- "Who Is This For?": Solo travellers…; Couples…; Small groups of friends (4-8 people); Corporate wellness retreats; Anyone recovering from injury or burnout; Past clients returning for a deeper experience.
- "Sample 7-Day Wellness Package": Day 1 Arrival, orientation, initial Pilates assessment · Day 2 Morning Pilates + afternoon Bowen therapy · Day 3 Private Pilates + Bali cultural experience · Day 4 Group mat Pilates + rest and explore · Day 5 Myofascial release session + beach day · Day 6 Private Pilates + sunset dinner recommendation · Day 7 Final session + departure wellness plan. "Contact us to design your perfect package. All packages are fully customisable."
- "PILATES RETREAT (3, 5 OR 7 DAYS) – We offer a pilates retreat in beautiful Bali. All-inclusive and full of fun." (/pilate-studio-bali). **No retreat prices anywhere.**

### 3.7 Pre & post natal – `/pre-post-natal` (orphan page)
- Prenatal Fitness Session (45 MINUTES): "Rp. 750.000 / 10 pack @ Rp. 6.750.0000" (extra zero, as on site). Session contents list, disclaimer (physician clearance; "free 15 minute consultation").
- Post-baby Fitness Session (45 MINUTES): same price text. Disclaimer: "We do not train women until they are 4-months post birth and only with the approval of a registered physician."
- Practitioner: Natalie Kashani (certified in Prenatal Fitness).

### 3.8 Life & Wellness Coaching – `/bowen-therapy` (hidden, noindex)
- "ALL SESSIONS ARE CATERED TO A CAREFULLY CRAFTED ONE-ON-ONE SESSION / 1.5 HOURS / Rp. 1.500.000 / Sessions can also be scheduled via Skype". Practitioner Natalie Kashani; contact ns@theartofbody.com.

### 3.9 Booking & cancellation policy
- Service pages: "To cancel or re-schedule please notify us 24 hours before the class time, otherwise you are liable for the cost of the class. You can reach us on the number below to confirm, cancel or re-schedule classes +6287839112400 Whatsapp".
- Wix Bookings: online booking enabled, **requires manual approval** ("Request to Book"), payment **in person only** (online payment off), staff "Faz", 5 min buffer between sessions.
- Refund policy (legal): single sessions non-refundable once provided; packages non-refundable, transferable with written approval; 24 h+ free cancellation; <24 h session fee; no-show full fee.
- Acuity has its own liability waiver "Terms & Conditions" (text in `data/acuity-appointment-types.json` source; summarised in 06).

---

## 4. Key page copy (verbatim excerpts to retain)

**Home hero:** "Therapeutic Pilates & Bodywork in Seminyak, Bali / Pain-Free Movement / • Stronger Core • Better Posture • / STOTT Pilates, Bowen Therapy & Myofascial Release since 2009."

**Home – Our Philosophy:** "THE ART OF BODY is a wellness and holistic fitness oasis focused on personalised health and wellness. All practitioners are delicately chosen to inspire you to feel your very best while on your long-term journey towards wellness. / From classical STOTT pilates classes to catered movement therapies, we are determined for you to stand taller and feel happier in your health and well being." Quote: "When you touch one thing with deep awareness, you touch everything." – Lao Tzu

**Home – service teasers:** STUDIO PILATES "Re-define the lines of your body, improve your posture and elongate to feel strong and look lean. Book your one-on-one or small-group class." · BOWEN TECHNIQUE "Bowen is a non-invasive, complementary holistic therapy that targets certain points on the body to restore overall mind-body functions. Book your session today!" · PILATES AND BACK TO HEALTH "Connect regardless of where you are, choose fromgroup class to private one on one sessions on the ZOOM platform."

**Home – Our Story:** "The Art of Body is a professional Pilates and bodywork studio in Seminyak, Bali. / Since 2009, we've specialized in therapeutic movement practices that combine STOTT Pilates training with hands-on bodywork techniques including myofascial release and Bowen therapy. / What Makes Us Different / - STOTT-trained Pilates instruction focused on rehabilitation and pain management / - Small group classes (maximum 3 people) for personalized attention / - Private one-on-one sessions tailored to your specific needs / - Therapeutic bodywork including Bowen technique and myofascial release / - 15+ years of experience helping clients achieve pain-free movement / Whether you're recovering from injury, managing chronic pain, or looking to improve your core strength and posture, our personalized approach ensures you receive the care and attention you deserve. / Located in the heart of Seminyak, Bali, we serve both local residents and wellness travelers from around the world."

**About:** quote "\"The body's capacity to heal is endless, but its ability to heal is all up to us\" — Faz"; "The Art of Body is Seminyak's leading therapeutic Pilates and bodywork studio, founded in 2009 by Faz and Nat. What began as a passion for movement and healing has grown into one of Bali's most trusted wellness studios, helping thousands of clients from around the world achieve pain-free movement, stronger bodies and lasting wellbeing." · Our Why: "With a deep love and passion for dance and martial arts, design, aesthetics, Natalie and Faz combined their talents and created a holistic and artful system for the body that has become a signature experience in Bali — The Art of Body Studio. / We believe that if you free your body, you free your mind. It takes consistency, a positive attitude and committed support throughout your wellness journey." · Our Studio: see §1 facilities, closing line "Everything you need for your wellness journey in one welcoming space."

**Our Services – Our Wellness Style:** "THE ART OF BODY is a wellness and holistic fitness hub focused on personalised health and wellness. Our tailor-made programs are carefully crafted to each individual who is determined to feel and look better. / Each class or holistic healing session is a unique Art and what you make it – but we're here to guide and support you and your Body in a beautiful, contemporary studio."

**Pilates intro:** "We are a STOTT-trained professional Pilates studio in Seminyak, Bali. Since 2009 we have helped clients achieve pain-free movement, stronger cores and better posture through expert instruction in small group and private settings."

**Bowen intro:** "Bowen Therapy is a non-invasive, complementary holistic therapy. It targets certain points on the body with gentle rolling movements to help it balance, repair and reset itself. Clients are believed to experience energy recovery, a reduction in pain and an improvement of function." Plus "What is Bowen Technique?" (5 paragraphs – history: "first brought to England in 1993 and was developed by Tom Bowen (1916-1982) who lived and worked in Geelong, Australia") and "What To Expect In Your Bowen Session" – full text in `content/page-text/bowen-therapy-1.desktop.txt`.

**Online intro / lists:** "Why Train Online With Us" (7 bullets) and "What You Need" (5 bullets) – `content/page-text/online-training.desktop.txt`.

**Contact intro:** "We'd love to be in touch to help answer any questions you may have about our services, packages and bookings, and general approach to holistic wellness. / Please fill out the contact form below and we'll be in touch as soon as possible. / Thanks so much for stopping by, we value you and your wellbeing! / -Faz and the The Art of Body team"

**Specialisms list (holiday packages & /pilates-seminyak):** "Back Rehabilitation • Core Stabilisation • Postural Problems • Muscular and Joint instability • Chronic Injury Rehabilitation • Toning and Lengthening • Post- Baby toning"

---

## 5. Testimonials (summary – full verbatim text in `content/testimonials.json`)

| # | Attribution (verbatim) | Where | Topic | Notes |
|---|---|---|---|---|
| H1 | "— Madlen, Vietnam" + "TripAdvisor November 2017" | Home slide 1 | Pilates & Bowen | Linked to TripAdvisor |
| H2 | "Andrew pF220RI" | Home slide 2 | Beginner, back pain | Attribution looks like a username |
| H3 | "— Ivana, Canada" | Home slide 3 | Core / back pain | |
| H4 | "— Lynn, Australia" | Home slide 4 "Bowen" | Bowen, menopause symptoms | Health claim |
| H5 | "— Devon, Australia" | Home slide 5 "Holiday Pack" | Holiday package | |
| 1–3 | Eva S, Singapore · Angelina, Singapore · "Jo, Australlia" | /pilates | Back to Health, back pain, classes | "Australlia" typo |
| 4–6 | Day, Russia · Hannah K ("So good!!") · Pamela, Hong Kong | /online-training | Studio experiences (not online) | |
| 7–9 | Danella G, Australia ("Happy Days to Bowen treatment") · Liz, South Africa ("Body Re-Boot") · London Scottish Girl | /bowen-therapy-1 | Bowen | Titles link to TripAdvisor reviews |
| 10–12 | Claudia, Italy · Neal, Denmark · Angelina, Singapore | /tailor-made-retreats-1 | Pilates | Neal text = "Neil D" text on /pilates-seminyak |
| 13–15 | Danella G · Melmak 2015 · Claudia | /pilates-bali | Bowen, Pilates | Longest Claudia version |
| 16–18 | Korean review (title "최고의 필라테스 스튜디오 in 발리") · Donna, Australia · Stephanie | /pilate-studio-bali | Pilates, Bowen | Korean review links to TripAdvisor |
| 19–21 | Tropical Groove · Angelina · Neil D | /pilates-seminyak | Bowen, Pilates | "Tropical Groove" text contains the same sentences as "Liz, South Africa" |

**Placeholder testimonials (Wix template text, not real):** "NAME, TITLE / Share the amazing things customers are saying about your business. Double click, or click Edit Text to make it yours." – 3× each on `/pre-post-natal`, `/pilates-retreat`, `/pilates-seminyak`, `/bowen-therapy`. **Do not migrate.**

Unique real testimonials after de-duplication: ~19 distinct people/voices. Several are the same text with different names or shortened versions (Angelina ×3, Claudia ×2, Danella ×2, Neal/Neil ×2, Liz/Tropical Groove).

---

## 6. FAQs (summary – full text in `content/faqs.json`)

- **/pilates (4):** What is STOTT Pilates? · How many people are in a group class? (max 3) · Do I need experience to join? · Where are you located?
- **/online-training (5):** How does an online Pilates class work? · Do I need Pilates equipment at home? · What time zones do you work with? · I've never done Pilates before – can I still join online? · I visited your studio in Bali – can I continue online when I return home?
- **/bowen-therapy-1 (4):** How many sessions will I need? · What conditions does Bowen Therapy help? · Do I need to undress? · Can I combine Bowen with Pilates?
- **/pilates-bali and /pilate-studio-bali (4 questions each, NO answers):** "I have never done Pilates before. What is the best way for me to get started?" · "I have recently been injured and was recommended to do rehabilitation. How do I know this is what I need to rehabilitate?" · "I have chronic aches and pains. Can Pilates help me?" · "How frequently can I do Pilates?" – **do not invent answers**; ask the client.
- **/pre-post-natal and /bowen-therapy "Frequently Asked Questions":** not questions – 8 value statements ("We work with you", "Ongoing training", "Accountability", "We practice what we preach" (×2, first copy corrupted), "We genuinely care", "Our environment.", "Our community"). Could be reused as a "how we work" block if the client confirms.

---

## 7. Content priority & duplication

| Priority | Content | Notes |
|---|---|---|
| Essential | Contact details, address/map, booking route, service list with prices & durations, cancellation policy, founding year/experience, STOTT/Bowen credentials, studio facilities | Must stay easy to find |
| High | Home hero line, Philosophy, Our Story, About (Our Why), Pilates offerings, Bowen explanation + FAQ, Online offerings + FAQ, holiday packages, retreat inclusions & sample itinerary, real testimonials | Shorten / consolidate |
| Medium | Long Bowen theory paragraphs, retreat marketing paragraphs, "Our Wellness Style", value statements | Condense |
| Low / legacy | SEO landing pages (/pilates-bali, /pilate-studio-bali, /pilates-seminyak, /pilates-retreat) – mostly duplicates; pole studio references; Honeycomb galleries; members area | Consolidate or drop after client confirms |
| Remove | Wix placeholder testimonials; dead links; empty FAQ questions (unless answers supplied); outdated meta descriptions | |

Heavily repeated copy: "Private Pilates is recommend to anyone…" (used for both Private and Couples, on 3–4 pages); "We are a STOTT trained professional Pilates Studio in Bali. Since 2009…" (5 pages); "THE ART OF BODY is a boutique wellness…" retreat intro (2 pages verbatim); Group Mat paragraph (5 places including Package 1).

---

## 8. Blog / editorial

**No blog exists.** No `/blog` route (404), no blog pages in the sitemap, no articles or posts discovered. Nothing to migrate. Per instructions, no posts should be invented; whether to add a blog is a Phase 2 decision (if added, initial presentation ≤ 10 images).
