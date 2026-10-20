import { Button, CtaBand, Faq, PageHero, PriceRow, Testimonials } from "@/components/blocks";
import { onlineOfferings } from "@/content/services";
import { faqs } from "@/content/faqs";
import { pick } from "@/content/testimonials";

export const metadata = {
  title: "Online Pilates classes with a Bali STOTT instructor",
  description:
    "Live one-on-one, semi-private and group Pilates sessions over Zoom or WhatsApp with The Art of Body. Private sessions US$65.",
  alternates: { canonical: "/online-training" },
};

const why = [
  "Same expert STOTT Pilates instruction as in-studio",
  "Live interactive sessions, not pre-recorded videos",
  "Private one-on-one or small group options",
  "Flexible scheduling across all time zones",
  "Personalised program designed for your goals",
  "Perfect for past clients who have returned home",
  "Ideal for anyone who can't travel to Bali",
];
const need = [
  "A laptop, tablet or phone with camera",
  "A yoga mat",
  "Small space to move freely",
  "Stable internet connection",
  "That's it, no equipment needed!",
];

export default function OnlineTraining() {
  return (
    <>
      <PageHero
        title="Online Pilates training"
        subtitle="Studio Pilates Bali, wherever you are"
        image="online-lunge"
        alt="Woman in dark sportswear holding a low lunge against a mint wall"
        shape="tall"
        position="45% 50%"
      >
        <p>
          Connect with our STOTT Pilates instructor from anywhere in the world. Our live Zoom/WhatsApp sessions deliver the
          same expert instruction and personal attention as our in-studio classes.
        </p>
        <div className="actions">
          <Button href="/contact-us?subject=Online%20training">Book online training</Button>
          <Button href="#online-offerings" variant="secondary">
            See prices
          </Button>
        </div>
      </PageHero>

      <section className="section surface-cream-deep" aria-label="Why train online and what you need">
        <div className="container two-lists">
          <div>
            <h2>Why train online with us</h2>
            <ul className="tick-list">
              {why.map((w) => (
                <li key={w}>{w}</li>
              ))}
            </ul>
          </div>
          <div>
            <h2>What you need</h2>
            <ul className="tick-list">
              {need.map((w) => (
                <li key={w}>{w}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="section" id="online-offerings" aria-labelledby="online-offerings-title">
        <div className="container">
          <div className="section-head">
            <h2 id="online-offerings-title">Online training offerings</h2>
            <p>Prices in US dollars.</p>
          </div>
          <div className="price-list">
            {onlineOfferings.map((o) => (
              <PriceRow key={o.name} name={o.name} meta={o.meta} price={o.price} priceLabel="Per session">
                {o.text && <p>{o.text}</p>}
              </PriceRow>
            ))}
          </div>
        </div>
      </section>

      <CtaBand
        title="Book an online training session"
        text="Tell us your time zone and the session you’d like, and we’ll arrange a time with you."
      >
        <Button href="/contact-us?subject=Online%20training">Request a session</Button>
        <Button href="/plans-pricing" variant="secondary">
          Plans &amp; pricing
        </Button>
      </CtaBand>

      <Testimonials items={pick("day", "hannah", "pamela")} tone="" intro="From clients who trained with us at the studio in Bali." />

      <Faq items={faqs.online} tone="surface-cream-deep" />

      <CtaBand title="Learn about our holistic healing therapies" tone="surface-blush">
        <Button href="/bowen-therapy-1">Bowen therapy</Button>
        <Button href="/our-services" variant="secondary">
          All services
        </Button>
      </CtaBand>
    </>
  );
}
