import { Button, CtaBand, Figure, PageHero, Testimonials } from "@/components/blocks";
import { pick } from "@/content/testimonials";

export const metadata = {
  title: "Tailor-made Pilates retreats in Bali",
  description:
    "Custom Bali wellness packages from The Art of Body in Seminyak: daily Pilates, Bowen therapy and myofascial release, with a sample 7-day plan.",
  alternates: { canonical: "/tailor-made-retreats-1" },
};

const included = [
  "Daily Pilates sessions (private or small group)",
  "Bowen therapy and myofascial release treatments",
  "Accommodation recommendations in Seminyak",
  "Local restaurant and cafe guidance",
  "Cultural experiences and day trips",
  "Airport transfer coordination",
  "Personalised wellness program",
  "Ongoing support throughout your stay",
];
const forWhom = [
  "Solo travellers wanting a structured wellness holiday",
  "Couples seeking a transformative Bali experience",
  "Small groups of friends (4–8 people)",
  "Corporate wellness retreats",
  "Anyone recovering from injury or burnout",
  "Past clients returning for a deeper experience",
];
const days = [
  "Arrival, orientation, initial Pilates assessment",
  "Morning Pilates + afternoon Bowen therapy",
  "Private Pilates + Bali cultural experience",
  "Group mat Pilates + rest and explore",
  "Myofascial release session + beach day",
  "Private Pilates + sunset dinner recommendation",
  "Final session + departure wellness plan",
];
// From the consolidated /pilates-retreat page.
const expect = [
  ["Personalised fitness", "We are intentional about the planning of our Pilates retreat programs and classes, and take your needs into close consideration. While we want to see fitness results during your time at The Art of Body, we most care about your experience and wellness."],
  ["Immersive experience", "Mind, body and spirit are always top of mind at The Art of Body. You may attend our Pilates retreat in Bali, but you will also receive relaxing treatments and soulful rejuvenation."],
  ["Dynamic and dedicated team", "A skilled team of body and mind healers who bring their whole selves to work, dedicated to sharing healthy lifestyle tips and stories to help bring your time with us to life."],
];

export default function Retreats() {
  return (
    <>
      <PageHero
        title="Pilates retreats in Bali"
        subtitle="Tailor-made at The Art of Body"
        image="infinity-pool"
        alt="Infinity pool overlooking the sea and palm trees"
        shape="circle"
      >
        <p>
          Fitness studio fun meets Pilates retreat getaway! We have a love for helping clients transform their bodies and
          minds and have developed fitness retreats in Bali just for you.
        </p>
        <p>
          Exploring Pilates in Bali is a wonderful use of holiday time. Here, we create Pilates fitness programs that
          challenge, but also align your spirit and connect to your soul.
        </p>
        <div className="actions">
          <Button href="/contact-us?subject=Retreat%20enquiry">Enquire about a retreat</Button>
          <Button href="/holiday-packages" variant="secondary">
            Holiday packages
          </Button>
        </div>
      </PageHero>

      <section className="section surface-teal on-dark" aria-labelledby="best-title">
        <div className="container split">
          <Figure name="seated-smile-portrait" alt="Smiling woman in sportswear seated on a studio mat" className="split__media split__media--tall" sizes="(min-width: 900px) 45vw, 92vw" position="60% 30%" />
          <div className="split__text">
            <h2 id="best-title">Imagine what you can achieve</h2>
            <p className="lede">
              The Art of Body is a boutique wellness and holistic fitness studio. We focus on personalised health and
              coaching sessions that go beyond the body to connect with the mind. It is through mind, body and spirit we can
              truly experience physical change and lifestyle shifts.
            </p>
            <ul className="values" style={{ gridTemplateColumns: "1fr", marginTop: "2rem" }}>
              {expect.map(([t, d]) => (
                <li key={t}>
                  <h3>{t}</h3>
                  <p>{d}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="section" aria-labelledby="package-title">
        <div className="container package-info">
          <div className="package-info__main">
            <h2 id="package-title">Your custom Bali wellness package</h2>
            <h3 className="package-info__label">What&rsquo;s included</h3>
            <ul className="package-info__included">
              {included.map((i) => (
                <li key={i}>{i}</li>
              ))}
            </ul>
          </div>
          <aside className="package-info__who" aria-labelledby="who-title">
            <h3 id="who-title">Who is this for?</h3>
            <ul className="tick-list">
              {forWhom.map((i) => (
                <li key={i}>{i}</li>
              ))}
            </ul>
          </aside>
        </div>
      </section>

      <section className="section surface-cream-deep" aria-labelledby="sample-title">
        <div className="container split split--reverse">
          <Figure name="bw-cadillac-straps" alt="Black and white photograph of a woman on a Cadillac tower with legs in straps" className="split__media split__media--tall" sizes="(min-width: 900px) 40vw, 92vw" />
          <div className="split__text">
            <h2 id="sample-title">Sample 7-day wellness package</h2>
            <ol className="day-plan">
              {days.map((d, i) => (
                <li key={d}>
                  <span>Day {i + 1}</span>
                  {d}
                </li>
              ))}
            </ol>
            <p style={{ marginTop: "1.5rem" }}>Contact us to design your perfect package. All packages are fully customisable.</p>
          </div>
        </div>
      </section>

      <Testimonials items={pick("claudia", "neal", "donna")} />

      <CtaBand title="Design your retreat with us" text="Tell us your dates, goals and group size and we’ll put a plan together.">
        <Button href="/contact-us?subject=Retreat%20enquiry">Enquire about a retreat</Button>
        <Button href="/holiday-packages" variant="secondary">
          See holiday packages
        </Button>
      </CtaBand>
    </>
  );
}
