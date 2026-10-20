# Source Audit — theartofbody.com (Phase 1)

Research-only audit of https://www.theartofbody.com/ (Wix), carried out 2026-10-19, to prepare a Next.js redesign. **No implementation has been done.** Phase 2 waits for approval.

## Start here
| File | What it answers |
|---|---|
| [01-audit-report.md](01-audit-report.md) | Method, coverage (inspected / partial / inaccessible), key findings, limitations |
| [02-page-inventory.md](02-page-inventory.md) | Every route with status and recommendation; section-by-section breakdown of each page; shared header/footer |
| [03-content-inventory.md](03-content-inventory.md) | Business facts, prices/durations master table, key verbatim copy, testimonial & FAQ summaries, content priority |
| [04-assets-manifest.csv](04-assets-manifest.csv) | 65 original media files → page/section, size, dimensions, ownership, concerns |
| [05-brand-reference.md](05-brand-reference.md) | Fonts, type styles, theme palette, verified HEX values, logo variants, buttons/states, visual language |
| [06-functionality-and-dependencies.md](06-functionality-and-dependencies.md) | Features with verification level; Wix Bookings vs Acuity; forms, maps, analytics, apps |
| [07-responsive-observations.md](07-responsive-observations.md) | Desktop/tablet/mobile behaviour, content hidden on mobile |
| [08-issues-gaps-questions.md](08-issues-gaps-questions.md) | Conflicting facts, broken items, typos, SEO/performance issues, licensing gaps, client questions |
| [09-phase-2-recommendations.md](09-phase-2-recommendations.md) | **Mandatory Phase 2 rules** (two-font rule, footer, images, `images.unoptimized`), proposed IA, redirects, image plan |

## Evidence folders
| Path | Contents |
|---|---|
| `screenshots/` | 198 JPEGs: every route at desktop 1440, tablet 768 and mobile 390 (full page + fold), plus interaction captures. Index: [screenshots/INDEX.md](screenshots/INDEX.md) |
| `assets/original/` | 64 images + 1 hero video at original resolution (95 MB). Filenames keep the Wix media ID (`~` replaced by `-`). **Source files – don't edit; generate optimised copies elsewhere.** |
| `content/page-text/` | Verbatim visible text of each route, desktop and mobile (`<route>.desktop.txt` / `.mobile.txt`; `home-root` = `/`, `home-alias` = `/home`) |
| `content/legal/` | Privacy, refund and terms text (from iframe embeds) |
| `content/testimonials.json`, `content/faqs.json` | Structured testimonials (26) and FAQs (21) |
| `data/` | Sitemaps, robots.txt, headings per page, Wix Bookings services, Acuity appointment types, interaction-test results |

## Headline facts
- 30 live routes: 11 in navigation, 4 legacy SEO duplicates, 2 orphan/hidden offering pages, 8 Wix booking pages, 1 members page, 3 unlinked legal pages, plus `/home`. **No blog.**
- Brand core colours: sage `#A2AC87`, cream `#FDF6EB`, sand `#E3D8C5`, charcoal `#404041`, deep teal `#0E393A`, blush `#EEC9B2`, coral accent `#FF715E`.
- Original type: Avenir Light (body), Brandon Grotesque Light (nav/caps), Didot Italic (display), with ~11 families loaded overall. **Redesign must use exactly two families** (not yet chosen).
- Main dependency: two booking systems (Wix Bookings + Acuity) with conflicting prices. A client decision is required.
