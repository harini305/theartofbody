import Link from "next/link";
import Img from "@/components/Img";
import { Button, CtaBand, SimpleHero } from "@/components/blocks";
import { bookingServices } from "@/content/services";
import { site } from "@/content/site";

export const metadata = {
  title: "Book a session",
  description: "Request a Pilates, Bowen technique or personal training session at The Art of Body, Seminyak. Our team will confirm your booking.",
  alternates: { canonical: "/book" },
};

export default function Book() {
  return (
    <>
      <SimpleHero title="Book a session">
        <p>Choose a session and request a time. Our team will confirm with you — or simply call, message or email us.</p>
        <div className="contact-strip">
          <a href={site.phoneHref}>{site.phoneDisplay}</a>
          <a href={site.whatsappHref} target="_blank" rel="noopener noreferrer">
            WhatsApp<span className="visually-hidden"> (opens in a new tab)</span>
          </a>
          <a href={`mailto:${site.emails.info}?subject=${encodeURIComponent("Hello Art of Body!")}`}>{site.emails.info}</a>
          <a href={`mailto:${site.emails.pilates}`}>{site.emails.pilates}</a>
        </div>
      </SimpleHero>

      <section className="section section--tight" aria-labelledby="services-title">
        <div className="container">
          <h2 id="services-title" className="visually-hidden">
            Studio sessions
          </h2>
          <ul className="service-cards">
            {bookingServices.map((s) => (
              <li key={s.slug} className="service-card">
                <div className="figure service-card__image" data-reveal="image">
                  <Img name={s.image} alt={s.alt} sizes="(min-width: 1100px) 22vw, (min-width: 640px) 45vw, 92vw" />
                </div>
                <div>
                  <h3>
                    <Link prefetch={false} href={`/service-page/${s.slug}`} style={{ textDecoration: "none" }}>
                      {s.name}
                    </Link>
                  </h3>
                  <p style={{ color: "var(--muted)", marginTop: "0.25rem" }}>{s.tagline}</p>
                </div>
                <div className="service-card__meta">
                  <span>Price</span>
                  <strong>{s.price}</strong>
                </div>
                <div className="actions">
                  <Button href={`/booking-calendar/${s.slug}`}>Request to book</Button>
                  <Button href={`/service-page/${s.slug}`} variant="secondary">
                    Details<span className="visually-hidden"> for {s.name}</span>
                  </Button>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <CtaBand
        title="Looking for packs, online sessions or retreats?"
        text="Session packs are listed on Plans & pricing. Online sessions and retreats are arranged directly with our team."
      >
        <Button href="/plans-pricing">Plans &amp; pricing</Button>
        <Button href="/online-training" variant="secondary">
          Online training
        </Button>
      </CtaBand>
    </>
  );
}
