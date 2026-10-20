import { Button, CtaBand, Faq, PageHero, PriceRow, Testimonials } from "@/components/blocks";
import { customisedTraining, pilatesOfferings, priceNote } from "@/content/services";
import { faqs } from "@/content/faqs";
import { pick } from "@/content/testimonials";

export const metadata = {
  title: "STOTT Pilates classes in Seminyak, Bali",
  description:
    "Private, couples, semi-private and group mat STOTT Pilates at The Art of Body, Jalan Mertanadi, Seminyak. Prices from Rp 300.000.",
  alternates: { canonical: "/pilates" },
};

export default function Pilates() {
  return (
    <>
      <PageHero
        title="Studio Pilates Bali"
        subtitle="STOTT Pilates studio in Seminyak"
        image="bw-pike"
        alt="Black and white photograph of a woman in a pike position"
        shape="wide"
        position="55% 50%"
      >
        <p>
          We are a STOTT-trained professional Pilates studio in Seminyak, Bali. Since 2009 we have helped clients achieve
          pain-free movement, stronger cores and better posture through expert instruction in small group and private
          settings.
        </p>
        <p>
          From core stability, spinal rehabilitation and toning the body, we create a tailor-made service to each client.
        </p>
        <div className="actions">
          <Button href="/book">Book a class</Button>
          <Button href="#offerings" variant="secondary">
            See prices
          </Button>
        </div>
      </PageHero>

      <section className="section section--flush-top" id="offerings" aria-labelledby="offerings-title">
        <div className="container">
          <div className="section-head">
            <h2 id="offerings-title">Studio Pilates offerings</h2>
            <p>All sessions are taught at our studio on Jalan Mertanadi. Packs are listed beside the single-session price.</p>
          </div>
          <div className="price-list">
            {pilatesOfferings.map((o) => (
              <PriceRow key={o.name} name={o.name} price={o.price} packs={o.packs} priceLabel={o.name.startsWith("Group") ? "Per person" : undefined}>
                {o.text && <p>{o.text}</p>}
                {o.confirm && <p className="price-row__note">{o.confirm}</p>}
              </PriceRow>
            ))}
            <article className="price-row">
              <div className="price-row__head">
                <h3>{customisedTraining.name}</h3>
              </div>
              <div className="price-row__body">
                <p>{customisedTraining.text}</p>
                <p className="price-row__note">Examples: {customisedTraining.examples.join(" · ")}</p>
              </div>
              <dl className="price-row__prices">
                <div>
                  <dt>Price</dt>
                  <dd>On enquiry</dd>
                </div>
              </dl>
            </article>
          </div>
          <p className="fine-print">{priceNote}</p>
        </div>
      </section>

      <CtaBand title="Book a Pilates class" text="Need help or have questions? We’re happy to recommend the right session for you.">
        <Button href="/book">Book a class</Button>
        <Button href="/contact-us" variant="secondary">
          Contact us
        </Button>
      </CtaBand>

      <Testimonials items={pick("eva", "angelina", "jo")} tone="" />

      <Faq items={faqs.pilates} tone="surface-cream-deep" />

      <CtaBand
        title="Interested in combining Pilates with hands-on bodywork?"
        text="Learn about our Bowen Therapy and myofascial release sessions, or train from home with our online options."
        tone="surface-blush"
      >
        <Button href="/bowen-therapy-1">Bowen therapy</Button>
        <Button href="/online-training" variant="secondary">
          Online training
        </Button>
      </CtaBand>
    </>
  );
}
