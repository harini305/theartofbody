import { Button, CtaBand, Figure, PageHero } from "@/components/blocks";
import { values } from "@/content/faqs";
import { priceNote } from "@/content/services";

export const metadata = {
  title: "Pre & post natal training",
  description:
    "Prenatal and post-baby fitness sessions with Natalie Kashani at The Art of Body, Seminyak. 45-minute sessions, Rp 750.000.",
  alternates: { canonical: "/pre-post-natal" },
};

const prenatal = [
  "Educating the mother on proper form, safe exercise techniques and breathing",
  "Educating the mother on what exercises are not recommended during pregnancy",
  "Month-by-month goals and careful exercise design for the mother",
  "The inclusion of the mother’s partner to speak about the education of breathing and how the partner can be of assistance",
  "Meditation and birthing prep affirmations",
  "Stretching",
  "Goal-specific fitness goals to stay fit during pregnancy",
];
const postnatal = [
  "Designing a fitness routine that is suitable for you at home and with us",
  "Discussing the effects of sleep on the mother and how to regulate hormones after birth to feel rejuvenated and energetic",
  "Discussing what foods are appropriate for the baby (assuming you are a breast-feeding mother) and you to feel fit and healthy",
  "Mat work and kegel exercises",
  "Slow functional training",
];

function Offering({ title, intro, items, disclaimer, priceLabel, id }) {
  return (
    <article className="price-row" aria-labelledby={id}>
      <div className="price-row__head">
        <h3 id={id}>{title}</h3>
        <p className="price-row__meta">45 minutes</p>
      </div>
      <div className="price-row__body">
        {intro}
        <p>Sessions can include:</p>
        <ul className="tick-list">
          {items.map((i) => (
            <li key={i}>{i}</li>
          ))}
        </ul>
        <p className="price-row__note">
          <strong>Disclaimer:</strong> {disclaimer}
        </p>
      </div>
      <dl className="price-row__prices">
        <div>
          <dt>{priceLabel}</dt>
          <dd>Rp 750.000</dd>
        </div>
        <div>
          <dt>10 pack</dt>
          <dd>On enquiry</dd>
        </div>
      </dl>
    </article>
  );
}

export default function PrePostNatal() {
  return (
    <>
      <PageHero
        title="Pre + post natal training"
        subtitle="With Natalie Kashani at The Art of Body"
        image="prenatal-profile"
        alt="Pregnant woman in a white shirt, side profile"
        shape="tall"
        position="62% 50%"
      >
        <p>
          Exercise specifically for mamas-to-be and new mamas! We help to properly strengthen your core, improve how you feel
          physically and emotionally, boost your confidence and support your recovery postpartum.
        </p>
        <p>
          Natalie Kashani is a proud mother of two. Before becoming pregnant with her own, she became certified in Prenatal
          Fitness, training numerous mamas worldwide since. Besides your physical state of being, Natalie can help you feel
          confident in your birthing choices and support your overall wellbeing from prenatal to postpartum.
        </p>
      </PageHero>

      <section className="section section--flush-top" aria-labelledby="natal-offerings">
        <div className="container">
          <h2 id="natal-offerings" className="visually-hidden">
            Pre and post natal offerings
          </h2>
          <div className="price-list">
            <Offering
              id="prenatal"
              title="Prenatal fitness"
              items={prenatal}
              priceLabel="Prenatal session"
              disclaimer="Please be sure to get clearance with your physician to ensure you are ready for exercise during your pregnancy. If you are not sure about whether pregnancy fitness is right for you, please do not hesitate to come in for a free 15 minute consultation before starting."
            />
            <Offering
              id="postnatal"
              title="Post-baby fitness"
              priceLabel="Post-baby session"
              intro={
                <p>
                  Post-baby fitness is all about reclaiming your pelvic floor muscles and integrating fitness slowly into your
                  life as a mother. We work slowly to build your fitness up, with or without baby, in our fitness space, and
                  make it mother-friendly so that there are no excuses in getting your wellness back.
                </p>
              }
              items={postnatal}
              disclaimer="We do not train women until they are 4 months post birth and only with the approval of a registered physician."
            />
          </div>
          <p className="fine-print">{priceNote}</p>
        </div>
      </section>

      <CtaBand title="Book a natal class" text="Need help or have questions? Get in touch before your first session.">
        <Button href="/book">Book a class</Button>
        <Button href="/contact-us?subject=Pre%20%26%20post%20natal%20training" variant="secondary">
          Contact us
        </Button>
      </CtaBand>

      <section className="section" aria-labelledby="how-title">
        <div className="container">
          <div className="split" style={{ alignItems: "start" }}>
            <div className="split__text">
              <h2 id="how-title">How we work</h2>
            </div>
            <Figure name="arms-raised-sky" alt="Woman raising her arms joyfully against a bright sky" className="split__media" sizes="(min-width: 900px) 45vw, 92vw" />
          </div>
          <ul className="values" style={{ marginTop: "2rem" }}>
            {values.map(([t, d]) => (
              <li key={t}>
                <h3>{t}</h3>
                <p>{d}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <CtaBand title="Learn about our holistic healing therapies" tone="surface-blush">
        <Button href="/bowen-therapy-1">Bowen therapy</Button>
        <Button href="/our-services" variant="secondary">
          All services
        </Button>
      </CtaBand>
    </>
  );
}
