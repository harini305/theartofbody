import { notFound } from "next/navigation";
import Link from "next/link";
import BookingCalendar from "@/components/BookingCalendar";
import { SimpleHero } from "@/components/blocks";
import { bookingServices, cancellationPolicy } from "@/content/services";

export const dynamicParams = false;

export function generateStaticParams() {
  return bookingServices.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const s = bookingServices.find((x) => x.slug === slug);
  if (!s) return {};
  return { title: `Book: ${s.name}`, robots: { index: false, follow: true } };
}

export default async function BookingCalendarPage({ params }) {
  const { slug } = await params;
  const s = bookingServices.find((x) => x.slug === slug);
  if (!s) notFound();

  return (
    <>
      <SimpleHero title="Schedule your session">
        <p>Choose the date that works for you and we&rsquo;ll confirm a time.</p>
      </SimpleHero>
      <section className="section section--tight" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="booking">
            <BookingCalendar serviceName={s.name} />
            <aside className="booking-summary" aria-labelledby="summary-title">
              <h2 id="summary-title">Service details</h2>
              <dl className="facts" style={{ marginTop: 0 }}>
                <div>
                  <dt>Service</dt>
                  <dd>{s.name}</dd>
                </div>
                <div>
                  <dt>Price</dt>
                  <dd>{s.price}</dd>
                </div>
                <div>
                  <dt>Location</dt>
                  <dd>{s.location}</dd>
                </div>
              </dl>
              <p style={{ fontSize: "0.95rem" }}>{cancellationPolicy}</p>
              <Link prefetch={false} href={`/service-page/${s.slug}`} className="text-link">
                More details
              </Link>
            </aside>
          </div>
        </div>
      </section>
    </>
  );
}
