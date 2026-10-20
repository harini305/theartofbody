import Link from "next/link";
import { Button, Figure, PageHero } from "@/components/blocks";

export const metadata = {
  title: "Our services",
  description:
    "Pilates, personal training, Bowen therapy, tailor-made retreats and holiday packages at The Art of Body, Seminyak, Bali.",
  alternates: { canonical: "/our-services" },
};

export default function OurServices() {
  return (
    <>
      <PageHero
        title="Inspired by creating energy with the body"
        image="tropical-studio-mat"
        alt="Woman doing a prone swimming exercise on a mat in a tropical studio"
        shape="wide"
        position="40% 50%"
      >
        <p>Pilates. Personal training. Holistic healing.</p>
        <p>
          The Art of Body is a wellness and holistic fitness hub focused on personalised health and wellness. Our
          tailor-made programs are carefully crafted to each individual who is determined to feel and look better. Each
          class or holistic healing session is a unique art and what you make it, but we&rsquo;re here to guide and support
          you and your body in a beautiful, contemporary studio.
        </p>
        <div className="actions">
          <Button href="/book">Book a class</Button>
          <Button href="/contact-us" variant="secondary">
            Contact us
          </Button>
        </div>
      </PageHero>

      <section className="section section--flush-top" aria-labelledby="offerings-title">
        <div className="container">
          <h2 id="offerings-title" className="visually-hidden">
            Our offerings
          </h2>

          <div className="service-group">
            <Figure name="reformer-tower-duo" alt="" className="service-group__media" sizes="240px" />
            <div className="service-group__items">
              <div className="service-item">
                <p className="service-group__title">Body wellness</p>
                <h3>Pilates</h3>
                <p>
                  We are a STOTT trained professional Pilates studio in Bali. Since 2009 we have catered to small group or
                  private settings to enrich our clients&rsquo; wellbeing.
                </p>
                <ul aria-label="Choose from">
                  <li>Professional initial consultation</li>
                  <li>Private</li>
                  <li>Couples</li>
                  <li>Semi-private</li>
                  <li>Group mat</li>
                </ul>
                <Link prefetch={false} href="/pilates" className="text-link">
                  Learn more about our Pilates
                </Link>
              </div>
              <div className="service-item">
                <p className="service-group__title" aria-hidden="true">&nbsp;</p>
                <h3>Customised sessions</h3>
                <p>
                  In this personal training session, you can mix and match any of the services we have and get the
                  customised support you need — for example HIIT training with TRX, or personal training with stretching.
                </p>
                <Link prefetch={false} href="/book" className="text-link">
                  Book a session
                </Link>
                <br />
                <Link prefetch={false} href="/pre-post-natal" className="text-link">
                  Pre &amp; post natal training with Natalie Kashani
                </Link>
              </div>
            </div>
          </div>

          <div className="service-group">
            <Figure name="hand-on-back" alt="" className="service-group__media" sizes="240px" />
            <div className="service-group__items service-group__items--single">
              <div className="service-item">
                <p className="service-group__title">Holistic therapy</p>
                <h3>Bowen</h3>
                <p>
                  Bowen Therapy is the perfect complement to an active fitness regime. The technique makes a series of
                  gentle but precise soft tissue movements on very precise junctions of muscle, ligaments and bone, of nerve
                  pathways, of blood and lymph circulation facilitators to promote energy flow.
                </p>
                <div className="actions" style={{ marginTop: "1rem" }}>
                  <Button href="/booking-calendar/bowen-technique-session">Book a Bowen treatment</Button>
                  <Button href="/bowen-therapy-1" variant="secondary">
                    Learn more about Bowen therapy
                  </Button>
                </div>
              </div>
            </div>
          </div>

          <div className="service-group">
            <Figure name="infinity-pool" alt="" className="service-group__media" sizes="240px" />
            <div className="service-group__items">
              <div className="service-item">
                <p className="service-group__title">Holiday retreats and packages</p>
                <h3>Tailor-made retreats</h3>
                <p>
                  Fitness studio fun meets Pilates retreat getaway! We have a love for helping clients transform their bodies
                  and minds and have developed fitness retreats in Bali just for you.
                </p>
                <Link prefetch={false} href="/tailor-made-retreats-1" className="text-link">
                  Learn more about personalised Pilates retreats
                </Link>
              </div>
              <div className="service-item">
                <p className="service-group__title" aria-hidden="true">&nbsp;</p>
                <h3>Holiday packages</h3>
                <p>
                  Experience a custom holiday getaway on the magical island of Bali. With our expert care, we help guide you
                  through a personalised Bali holiday with the perfect mix of fun, relaxation, pamper and results.
                </p>
                <Link prefetch={false} href="/holiday-packages" className="text-link">
                  Learn more about our mix and match packages
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
