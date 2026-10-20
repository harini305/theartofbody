# 07 — Responsive Observations

## 1. Test setup (actual)
| Label | Viewport | User agent | What Wix served | Rendered document width |
|---|---|---|---|---|
| Desktop | 1440 × 900 | Chrome 126 / Windows | Desktop layout | 1440 px (980 px content canvas, stretched sections) |
| Tablet | 768 × 1024, touch, `isMobile` | iPad Safari 17 | **Desktop layout scaled down** | 980 px (viewport meta forces 980 px; everything shrinks ≈ 78 %) |
| Mobile | 390 × 844, touch, `isMobile` | iPhone Safari 17 | **Wix mobile layout** | **320 px** (fixed-width mobile canvas, scaled to device width) |

All 31 routes were captured at all three sizes (full page + above-the-fold). No horizontal overflow was detected at any size (`scrollWidth ≤ innerWidth` everywhere). No other breakpoints exist: Wix Classic has only the desktop and mobile layouts, so there is **no fluid responsive behaviour** in between.

Limitation: tests ran in headless Chrome emulation, not on physical devices. Safari-specific rendering was not tested.

## 2. Document height comparison (px)
| Route | Desktop 1440 | Tablet (980 canvas) | Mobile (320 canvas) |
|---|---|---|---|
| / | 4620 | 4620 | 7135 |
| /about | 3377 | 3377 | 4444 |
| /our-services | 3247 | 3247 | 3995 |
| /pilates | 4963 | 4963 | 4453 |
| /online-training | 4830 | 4830 | 3883 |
| /bowen-therapy-1 | 4236 | 4236 | 4257 |
| /tailor-made-retreats-1 | 3581 | 3581 | 3327 |
| /holiday-packages | 4020 | 4020 | 2597 |
| /book | 3034 | 3034 | 3449 |
| /contact-us | 1073 | 1307 | 1750 |
| /plans-pricing | 1655 | 1655 | 3230 |
| /pre-post-natal | 4415 | 4415 | 3934 |
| /pilates-bali | 5236 | 5236 | 3641 |
| /pilate-studio-bali | 5232 | 5232 | 3861 |
| /pilates-seminyak | 6226 | 6226 | 3039 |
| /pilates-retreat | 4601 | 4601 | 3992 |
| /bowen-therapy (hidden) | 5645 | 5645 | 6138 |
| /privacy · /refund-policy · /terms | ~4900 | ~4900 | **~1260–1420** (content clipped) |

Shorter mobile pages are mostly caused by content hidden on mobile (§4).

## 3. Global components
| Component | Desktop | Tablet | Mobile |
|---|---|---|---|
| Header | Sticky, 107 px, logo + 8 nav items + 4 social icons in one row | Same, scaled; nav text becomes very small (~11 px effective) | **Not sticky**, 240 px tall: centred logo (≈70 px), row of 4 black social icons, hamburger on its own row at right. About 28 % of the first screen is header |
| Navigation | Horizontal menu, hover dropdowns | Hover dropdowns on a touch device (tap behaviour not verified) | Full-screen sage (`#A2AC87`) overlay, centred uppercase items with thin dividers; "+" expanders for BODY WELLNESS, HOLISTIC THERAPY; "RETREATS + HOLIDAY PACKAGES" is wider than the divider column and touches the screen edges; close "×" overlaps the right edge of item rows |
| Footer | 3 columns: map / centred address block / contact column | Same, scaled | Stacked: address block, then icons, "CONTACT US", email, phone. **Map hidden** on mobile. Large empty teal area between address and icons (~250 px) |
| Body text | 16 px Avenir Light | ≈12.5 px effective (scaled) | ≈14–15 px on 320 px canvas (scaled up ≈1.22× on 390 px devices) |
| Buttons | 40–46 px tall outline buttons | Scaled ≈ 31–36 px – below comfortable touch size | Full-width or centred, 40 px on 320 canvas |

## 4. Content differences on mobile (verified by diffing desktop and mobile text)
| Route | Hidden on mobile |
|---|---|
| /pilates | All 3 testimonials |
| /online-training | All 3 testimonials |
| /bowen-therapy-1 | "WHAT PEOPLE SAY" + 3 testimonials |
| /tailor-made-retreats-1 | "WHAT PEOPLE SAY" + 3 testimonials |
| /pilates-bali | "WHAT PEOPLE SAY" + 3 testimonials |
| /pilate-studio-bali | "WHAT PEOPLE SAY" + 3 testimonials (incl. Korean review) |
| /pilates-seminyak | Both "WHAT PEOPLE SAY" blocks (real + placeholder) |
| /pilates-retreat | "ENTER POLE STUDIO BALI HERE" link + placeholder testimonials |
| /pre-post-natal, /bowen-therapy | Placeholder testimonials |
| Home | Hero background **video** (static image instead); "Our Story" section moved above the service rows; testimonial slideshow kept |
| Legal pages | Iframe clipped to the first few lines – policy text effectively unavailable on mobile |
| Booking calendar | Week-strip view ("Week starting Sunday, October 18", day list) instead of month grid |

No mobile-only content was found.

## 5. Page-level notes
- **Home (mobile):** hero logo disc fills the screen width; hero text in Didot Italic wraps to ~6 lines; circular service images become large single-column images.
- **Holiday packages:** desktop hero places long body text inside a navy circle, so text is tight against the circle edges. Mobile linearises it. The desktop navy section ends in ~400 px of empty navy space before the footer.
- **Bowen (desktop):** hero strip repeats one low-resolution image in two columns. It's cropped and upscaled on 1440 screens.
- **Book (mobile):** Wix Bookings service cards stack (image above text). Works.
- **Contact (mobile):** the form stacks below the intro text. The map is not shown.
- **Plans & pricing (mobile):** 5 plan cards stack vertically (page doubles in height).
- **Tablet generally:** because the desktop canvas is scaled, text and touch targets are small, but layouts don't break.

## 6. Lessons for Phase 2 (not instructions to copy)
- Build a genuinely fluid layout (mobile-first) with real breakpoints. Don't use fixed 320/980 canvases.
- Keep testimonials available on mobile (they are currently hidden), but shorter.
- Compact sticky mobile header (logo + menu button), with social icons moved into the menu/footer.
- Make sure long nav labels ("Retreats + Holiday Packages") fit, or shorten them in the IA.
- Legal pages as normal HTML, readable on every device.
