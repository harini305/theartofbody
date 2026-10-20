import { Button, CtaBand, Faq, Figure, PageHero, Testimonials } from "@/components/blocks";
import { faqs } from "@/content/faqs";
import { pick } from "@/content/testimonials";
import { priceNote } from "@/content/services";

export const metadata = {
  title: "Bowen therapy in Seminyak, Bali",
  description:
    "Bowen Therapy at The Art of Body: a non-invasive, complementary holistic therapy using gentle rolling movements. Sessions Rp 1.200.000.",
  alternates: { canonical: "/bowen-therapy-1" },
};

export default function BowenTherapy() {
  return (
    <>
      <PageHero
        title="Bowen therapy"
        subtitle="Holistic therapy at The Art of Body"
        image="hot-stones"
        alt="Smooth dark stones resting along a client's back"
        shape="tall"
      >
        <p>
          Bowen Therapy is a non-invasive, complementary holistic therapy. It targets certain points on the body with gentle
          rolling movements to help it balance, repair and reset itself. Clients are believed to experience energy recovery,
          a reduction in pain and an improvement of function.
        </p>
        <div className="actions">
          <Button href="/booking-calendar/bowen-technique-session">Book a session</Button>
          <Button href="/contact-us?subject=Bowen%20therapy" variant="secondary">
            Contact us
          </Button>
        </div>
      </PageHero>

      <section className="section surface-cream-deep" aria-labelledby="what-title">
        <div className="container split">
          <Figure name="hand-on-back" alt="A therapist's hand resting gently on a client's back" className="circle-media" sizes="372px" />
          <div className="split__text">
            <h2 id="what-title">What is Bowen technique?</h2>
            <p>
              The Bowen Therapy Technique was first brought to England in 1993 and was developed by Tom Bowen (1916–1982),
              who lived and worked in Geelong, Australia.
            </p>
            <p>
              To carry out a Bowen treatment the therapist makes a series of gentle but precise soft tissue movements. These
              are rolling moves with thumbs or fingers. Bowen moves are made on very precise junctions of muscle, ligaments
              and bone, of nerve pathways, of blood and lymph circulation facilitators and of energy flow.
            </p>
            <p>
              To make a Bowen move the muscle is, first, gently stretched, which activates the sensory nerves to pass
              information to the brain about the state of the muscle, tendon or ligament in question. If the sensory message
              received by the brain is not correct, then the body goes into action to rebalance the area.
            </p>
          </div>
        </div>
      </section>

      <section className="section" aria-labelledby="session-title">
        <div className="container prose-cols">
          <div>
            <h2 id="session-title">What to expect in your Bowen session</h2>
          </div>
          <div>
            <p className="lede">
              You remain fully clothed throughout. The therapist makes gentle rolling movements at precise points on your
              body, with short pauses between each sequence to allow your body to respond and reset. Most clients feel deeply
              relaxed immediately, with further improvements unfolding over the following 2–5 days.
            </p>
            <dl className="price-row__prices" style={{ marginTop: "2rem", maxWidth: "26rem" }}>
              <div>
                <dt>Bowen therapy session</dt>
                <dd>Rp 1.200.000</dd>
              </div>
              <div>
                <dt>3 session package</dt>
                <dd>Rp 3.500.000</dd>
              </div>
            </dl>
            <p className="fine-print">{priceNote}</p>
          </div>
        </div>
      </section>

      <Testimonials items={pick("danella", "londonScottish", "stephanie")} />

      <Faq items={faqs.bowen} />

      <CtaBand title="Learn about our fitness, wellbeing and holiday retreat services" tone="surface-sage">
        <Button href="/our-services">Our offerings</Button>
        <Button href="/pilates" variant="secondary">
          Pilates
        </Button>
      </CtaBand>
    </>
  );
}
