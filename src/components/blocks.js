import Link from "next/link";
import Img from "@/components/Img";

export function Button({ href, children, variant = "primary", external = false }) {
  const cls = `btn btn--${variant}`;
  if (external || href.startsWith("mailto:") || href.startsWith("tel:") || href.startsWith("http")) {
    const newTab = href.startsWith("http");
    return (
      <a className={cls} href={href} {...(newTab ? { target: "_blank", rel: "noopener noreferrer" } : {})}>
        {children}
        {newTab && <span className="visually-hidden"> (opens in a new tab)</span>}
      </a>
    );
  }
  return (
    <Link prefetch={false} className={cls} href={href}>
      {children}
    </Link>
  );
}

export function Actions({ children, className = "" }) {
  return <div className={`actions ${className}`}>{children}</div>;
}

/* Page hero: text beside a tall photograph. `shape="circle"` uses the brand's circular crop. */
export function PageHero({ title, subtitle, children, image, alt, position, shape = "tall", tone = "" }) {
  return (
    <section className={`page-hero page-hero--${shape} ${tone}`}>
      <div className="container page-hero__grid">
        <div className="page-hero__text">
          <h1 data-hero-item>
            {subtitle && <span className="h1-sub">{subtitle}</span>}
            {title}
          </h1>
          <div className="page-hero__body" data-hero-item>
            {children}
          </div>
        </div>
        {image && (
          <div className="page-hero__media" data-hero-item>
            <div className="page-hero__frame">
              <Img name={image} alt={alt} priority sizes="(min-width: 900px) 45vw, 92vw" position={position} />
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

/* Title-only hero for utility pages (booking, legal, contact). */
export function SimpleHero({ title, children }) {
  return (
    <section className="simple-hero">
      <div className="container">
        <h1 data-hero-item>{title}</h1>
        {children && (
          <div className="simple-hero__body" data-hero-item>
            {children}
          </div>
        )}
      </div>
    </section>
  );
}

export function Figure({ name, alt, sizes, className = "", position, reveal = true }) {
  return (
    <div className={`figure ${className}`} data-reveal={reveal ? "image" : undefined}>
      <Img name={name} alt={alt} sizes={sizes} position={position} />
    </div>
  );
}

export function Quote({ text, cite, className = "" }) {
  return (
    <figure className={`pull-quote ${className}`}>
      <blockquote>
        <p>{text}</p>
      </blockquote>
      {cite && <figcaption>{cite}</figcaption>}
    </figure>
  );
}

export function Testimonials({ items, title = "What people say", tone = "surface-blush", intro }) {
  return (
    <section className={`section ${tone}`} aria-labelledby="testimonials-title">
      <div className="container">
        <div className="section-head">
          <h2 id="testimonials-title">{title}</h2>
          {intro && <p>{intro}</p>}
        </div>
        <ul className="testimonial-grid">
          {items.map((t) => (
            <li key={t.id} className="testimonial">
              <figure>
                {t.title && <p className="testimonial__title">{t.title}</p>}
                <blockquote>
                  <p>{t.text}</p>
                </blockquote>
                <figcaption>
                  {t.name}
                  {t.source && <span>{t.source}</span>}
                </figcaption>
              </figure>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export function Faq({ items, title = "Frequently asked questions", tone = "" }) {
  return (
    <section className={`section ${tone}`} aria-labelledby="faq-title">
      <div className="container faq">
        <h2 id="faq-title" className="faq__title">
          {title}
        </h2>
        <div className="faq__list">
          {items.map((f) => (
            <details key={f.q} className="faq__item">
              <summary>
                <span>{f.q}</span>
                <span className="faq__icon" aria-hidden="true" />
              </summary>
              <div className="faq__answer">
                <p>{f.a}</p>
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

export function CtaBand({ title, text, children, tone = "surface-sage" }) {
  return (
    <section className={`cta-band ${tone}`}>
      <div className="container cta-band__inner">
        <div>
          <h2>{title}</h2>
          {text && <p>{text}</p>}
        </div>
        <Actions>{children}</Actions>
      </div>
    </section>
  );
}

export function PriceRow({ name, meta, price, packs, priceLabel = "Single session", children }) {
  return (
    <article className="price-row">
      <div className="price-row__head">
        <h3>{name}</h3>
        {meta && <p className="price-row__meta">{meta}</p>}
      </div>
      <div className="price-row__body">{children}</div>
      <dl className="price-row__prices">
        <div>
          <dt>{priceLabel}</dt>
          <dd>{price}</dd>
        </div>
        {packs?.map(([label, value]) => (
          <div key={label}>
            <dt>{label}</dt>
            <dd>{value}</dd>
          </div>
        ))}
      </dl>
    </article>
  );
}
