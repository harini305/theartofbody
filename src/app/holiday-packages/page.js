import { Button, CtaBand, PageHero } from "@/components/blocks";
import { holidayPackages, priceNote } from "@/content/services";
import { site } from "@/content/site";

export const metadata = {
  title: "Holiday packages",
  description:
    "Mix-and-match mind/body holiday packages at The Art of Body, Seminyak: Pilates Immersion, Back to Health and Mind/Body Transformation.",
  alternates: { canonical: "/holiday-packages" },
};

const specialisms = [
  "Back rehabilitation",
  "Core stabilisation",
  "Postural problems",
  "Muscular and joint instability",
  "Chronic injury rehabilitation",
  "Toning and lengthening",
  "Post-baby toning",
];

export default function HolidayPackages() {
  return (
    <>
      <PageHero
        title="Holiday packages"
        subtitle="Tailor-made at The Art of Body"
        image="beach-sunset-silhouettes"
        alt="Two silhouettes on a beach under a pink sunset"
        shape="circle"
      >
        <p>Experience the magic of a custom holiday getaway of your dreams on the magical island of Bali.</p>
        <p>
          With our expert care, we help guide you through a personalised Bali holiday with the perfect mix of fun,
          relaxation, pamper and results. We work with local vendors to craft an unforgettable experience that will leave
          you rejuvenated, supported and inspired to continue your personal and physical growth journey after returning
          home.
        </p>
      </PageHero>

      <section className="section section--tight surface-cream-deep" aria-labelledby="specialisms-title">
        <div className="container">
          <h2 id="specialisms-title" className="faq__title" style={{ fontSize: "var(--step-2)", marginBottom: "1rem" }}>
            What we can help with
          </h2>
          <ul className="tick-list" style={{ gridTemplateColumns: "repeat(auto-fill, minmax(15rem, 1fr))" }}>
            {specialisms.map((s) => (
              <li key={s}>{s}</li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section surface-teal on-dark" aria-labelledby="packages-title">
        <div className="container">
          <div className="section-head">
            <h2 id="packages-title">Our mind / body / soul packages</h2>
            <p>Classes in each package can be booked into a 2-week customised time frame.</p>
          </div>
          <ul className="package-grid">
            {holidayPackages.map((p) => (
              <li key={p.name}>
                <article className="package">
                  <h3>{p.name}</h3>
                  {p.summary && <p>{p.summary}</p>}
                  <div className="package__price">
                    <strong>{p.price}</strong>
                    <span>{p.hours}</span>
                  </div>
                  <dl aria-label="Inclusions">
                    {p.inclusions.map(([time, what]) => (
                      <div key={what}>
                        <dt>{time}</dt>
                        <dd>{what}</dd>
                      </div>
                    ))}
                  </dl>
                  <Button href={`/contact-us?subject=${encodeURIComponent(`${p.name} package`)}`} variant="secondary">
                    Enquire about this package
                  </Button>
                </article>
              </li>
            ))}
          </ul>
          <p className="fine-print">
            {priceNote}{" "}
            <a href={site.whatsappHref} target="_blank" rel="noopener noreferrer">
              WhatsApp {site.phoneDisplay}
              <span className="visually-hidden"> (opens in a new tab)</span>
            </a>
          </p>
        </div>
      </section>

      <CtaBand title="Have more questions?" text="We’re happy to help you choose or combine packages.">
        <Button href="/contact-us?subject=Holiday%20packages">Contact us</Button>
        <Button href="/tailor-made-retreats-1" variant="secondary">
          Tailor-made retreats
        </Button>
      </CtaBand>
    </>
  );
}
