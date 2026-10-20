import Link from "next/link";
import { footerLinks, legalLinks, site } from "@/content/site";

export default function Footer() {
  return (
    <footer className="site-footer on-dark">
      <div className="container site-footer__grid">
        <div className="site-footer__brand">
          <img src="/images/logo-blush-160.webp" width="160" height="160" alt="" className="site-footer__logo" loading="lazy" />
          <p>
            {site.address.line}
            <br />
            Easy to find just off the main road, a short walk from the Oberoi area.
          </p>
          <a href={site.mapUrl} target="_blank" rel="noopener noreferrer">
            Open in Google Maps<span className="visually-hidden"> (opens in a new tab)</span>
          </a>
        </div>

        <div className="site-footer__contact">
          <h2 className="site-footer__heading">Contact</h2>
          <a href={`mailto:${site.emails.info}`}>{site.emails.info}</a>
          <a href={site.phoneHref}>{site.phoneDisplay}</a>
          <a href={site.whatsappHref} target="_blank" rel="noopener noreferrer">
            WhatsApp<span className="visually-hidden"> (opens in a new tab)</span>
          </a>
          <h2 className="site-footer__heading site-footer__heading--spaced">Follow</h2>
          <ul className="site-footer__social">
            {site.social.map((s) => (
              <li key={s.label}>
                <a href={s.href} target="_blank" rel="noopener noreferrer">
                  {s.label}
                  <span className="visually-hidden"> (opens in a new tab)</span>
                </a>
              </li>
            ))}
          </ul>
        </div>

        <nav className="site-footer__nav" aria-label="Footer">
          <h2 className="site-footer__heading">Explore</h2>
          <ul>
            {footerLinks.map((l) => (
              <li key={l.href}>
                <Link prefetch={false} href={l.href}>{l.label}</Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      <div className="container">
        <div className="site-footer__base">
          <p>© {new Date().getFullYear()} The Art of Body · Studio Pilates Bali</p>
          <ul>
            {legalLinks.map((l) => (
              <li key={l.href}>
                <Link prefetch={false} href={l.href}>{l.label}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}
