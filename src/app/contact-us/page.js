import { Suspense } from "react";
import ContactForm from "@/components/ContactForm";
import { SimpleHero } from "@/components/blocks";
import { site } from "@/content/site";

export const metadata = {
  title: "Contact us",
  description: "Contact The Art of Body: +62 (0) 878 3911 2400, info@theartofbody.com. Jalan Mertanadi 22xx, Kerobokan, Seminyak, Bali.",
  alternates: { canonical: "/contact-us" },
};

export default function Contact() {
  return (
    <>
      <SimpleHero title="Contact us" />
      <section className="section" style={{ paddingTop: "1rem" }}>
        <div className="container contact">
          <div>
            <p className="lede" data-hero-item>
              We&rsquo;d love to be in touch to help answer any questions you may have about our services, packages and
              bookings, and general approach to holistic wellness.
            </p>
            <p>Thanks so much for stopping by, we value you and your wellbeing!</p>
            <p style={{ fontFamily: "var(--font-serif)", fontSize: "1.25rem", color: "var(--teal)" }}>
              Faz and The Art of Body team
            </p>

            <div className="contact__direct">
              <div>
                <h2>Call, SMS or WhatsApp</h2>
                <a href={site.phoneHref}>{site.phoneDisplay}</a>
                <br />
                <a href={site.whatsappHref} target="_blank" rel="noopener noreferrer">
                  Message us on WhatsApp<span className="visually-hidden"> (opens in a new tab)</span>
                </a>
              </div>
              <div>
                <h2>Email</h2>
                <a href={`mailto:${site.emails.info}?subject=${encodeURIComponent("Hello Art of Body!")}`}>{site.emails.info}</a>
                <br />
                <a href={`mailto:${site.emails.pilates}`}>{site.emails.pilates}</a>
              </div>
              <div>
                <h2>Visit the studio</h2>
                <p>{site.address.line}</p>
                <dl className="travel">
                  {site.travelTimes.map(([place, time]) => (
                    <div key={place}>
                      <dt>{place}</dt>
                      <dd>{time}</dd>
                    </div>
                  ))}
                </dl>
                <a href={site.mapUrl} target="_blank" rel="noopener noreferrer" className="text-link">
                  Open in Google Maps<span className="visually-hidden"> (opens in a new tab)</span>
                </a>
              </div>
            </div>
          </div>
          <div>
            <h2 style={{ fontSize: "var(--step-2)", marginBottom: "1.5rem" }}>Send us a message</h2>
            <Suspense fallback={<p>Loading form…</p>}>
              <ContactForm />
            </Suspense>
          </div>
        </div>
      </section>
    </>
  );
}
