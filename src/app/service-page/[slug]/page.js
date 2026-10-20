import { notFound } from "next/navigation";
import Link from "next/link";
import Img from "@/components/Img";
import { Button } from "@/components/blocks";
import { bookingServices, cancellationPolicy } from "@/content/services";
import { site } from "@/content/site";

export const dynamicParams = false;

export function generateStaticParams() {
  return bookingServices.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const s = bookingServices.find((x) => x.slug === slug);
  if (!s) return {};
  return {
    title: s.name,
    description: `${s.name} at The Art of Body, Jalan Mertanadi, Seminyak. ${s.price}.`,
    alternates: { canonical: `/service-page/${s.slug}` },
  };
}

export default async function ServicePage({ params }) {
  const { slug } = await params;
  const s = bookingServices.find((x) => x.slug === slug);
  if (!s) notFound();

  return (
    <section className="section" style={{ paddingTop: "clamp(2rem, 5vw, 4rem)" }}>
      <div className="container service-detail">
        <div className="figure service-detail__image" data-hero-item>
          <Img name={s.image} alt={s.alt} priority sizes="(min-width: 900px) 35vw, 92vw" />
        </div>
        <div>
          <p>
            <Link prefetch={false} href="/book" className="text-link">
              All sessions
            </Link>
          </p>
          <h1 data-hero-item>{s.name}</h1>
          <p className="lede" data-hero-item style={{ marginTop: "0.75rem" }}>
            {s.tagline}
          </p>
          <dl className="facts">
            <div>
              <dt>Price</dt>
              <dd>{s.price}</dd>
            </div>
            <div>
              <dt>Location</dt>
              <dd>{s.location}, Kerobokan, Seminyak</dd>
            </div>
            <div>
              <dt>Payment</dt>
              <dd>Paid in person at the studio</dd>
            </div>
          </dl>
          <div className="actions" style={{ marginTop: "1rem" }}>
            <Button href={`/booking-calendar/${s.slug}`}>Request to book</Button>
            <Button href={s.learnMore} variant="secondary">
              About this service
            </Button>
          </div>

          <h2>Service description</h2>
          <p>{s.description}</p>

          <h2>Cancellation policy</h2>
          <p>{cancellationPolicy}</p>
          <p>
            <a href={site.whatsappHref} target="_blank" rel="noopener noreferrer">
              WhatsApp {site.phoneDisplay}
              <span className="visually-hidden"> (opens in a new tab)</span>
            </a>
          </p>

          <h2>Contact details</h2>
          <p>
            Studio Pilates Bali | The Art of Body
            <br />
            {site.address.formatted}
          </p>
        </div>
      </div>
    </section>
  );
}
