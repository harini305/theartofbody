import { Actions, Button, CtaBand, Figure, PageHero, Quote } from "@/components/blocks";

export const metadata = {
  title: "About Faz, Natalie & the studio",
  description:
    "The Art of Body was founded in 2009 by Faz and Nat: a therapeutic Pilates and bodywork studio at Jalan Mertanadi, Seminyak, with STOTT reformers, TRX and private change rooms.",
  alternates: { canonical: "/about" },
};

const offerings = [
  "Pilates",
  "Personal training",
  "Holistic healing & therapy",
  "Bowen Technique",
  "Personal integration & coaching",
  "Retreat facilitation",
];

const facilities = [
  "Four STOTT Pilates Reformer systems",
  "TRX training equipment",
  "Mat Pilates space",
  "Private shower and change rooms",
  "Towel laundry facilities",
  "Free parking",
  "Air conditioned throughout",
];

const qualifications = [
  "STOTT Pilates Instructor",
  "Bowen Therapy Practitioner",
  "Myofascial Release Specialist",
  "15+ years clinical and studio experience",
  "Specialisation in rehabilitation and chronic pain management",
  "Trusted by clients from over 30 countries",
];

export default function About() {
  return (
    <>
      <PageHero title="About The Art of Body" image="wire-sculpture" alt="Wire sculpture of a figure holding a hoop against a cloudy sky" position="60% 50%" shape="tall">
        <p>
          The Art of Body is Seminyak&rsquo;s leading therapeutic Pilates and bodywork studio, founded in 2009 by Faz and
          Nat. What began as a passion for movement and healing has grown into one of Bali&rsquo;s most trusted wellness
          studios, helping thousands of clients from around the world achieve pain-free movement, stronger bodies and
          lasting wellbeing.
        </p>
        <Quote text="The body’s capacity to heal is endless, but its ability to heal is all up to us." cite="Faz" />
      </PageHero>

      <section className="section surface-cream-deep" aria-labelledby="why-title">
        <div className="container split">
          <Figure name="cliff-sea" alt="Person in white sitting on a cliff facing the sea at sunset" sizes="(min-width: 900px) 45vw, 92vw" className="split__media" />
          <div className="split__text">
            <h2 id="why-title">Our why</h2>
            <p className="lede">
              With a deep love and passion for dance and martial arts, design and aesthetics, Natalie and Faz combined their
              talents and created a holistic and artful system for the body that has become a signature experience in Bali.
            </p>
            <p>
              We believe that if you free your body, you free your mind. It takes consistency, a positive attitude and
              committed support throughout your wellness journey.
            </p>
          </div>
        </div>
      </section>

      <section className="section surface-teal on-dark" aria-labelledby="offerings-title">
        <div className="container split split--reverse">
          <Figure name="meditation-mudra" alt="Close-up of a seated meditation pose with hands in a mudra" sizes="(min-width: 900px) 45vw, 92vw" className="split__media" />
          <div className="split__text">
            <h2 id="offerings-title">Our offerings</h2>
            <ul className="offerings-list">
              {offerings.map((o) => (
                <li key={o}>{o}</li>
              ))}
            </ul>
            <Actions>
              <Button href="/our-services">Our holistic offerings</Button>
              <Button href="/book" variant="secondary">
                Schedule a session
              </Button>
            </Actions>
          </div>
        </div>
      </section>

      <section className="section" aria-labelledby="studio-title">
        <div className="container studio">
          <div className="studio__intro">
            <h2 id="studio-title">Our studio</h2>
            <p className="lede">
              Located in the heart of Seminyak at Jalan Mertanadi. Everything you need for your wellness journey in one
              welcoming space.
            </p>
          </div>
          <ul className="studio__features" aria-label="Studio features">
            {facilities.map((f) => (
              <li key={f}>{f}</li>
            ))}
          </ul>
          <div className="studio__gallery">
            <Figure name="stott-chair" alt="STOTT Pilates chair on the wooden studio floor" sizes="(min-width: 900px) 46vw, 92vw" position="50% 60%" />
            <Figure name="trx-straps" alt="Woman training in TRX suspension straps" sizes="(min-width: 900px) 25vw, 46vw" position="55% 40%" />
            <Figure name="bw-equipment-torso" alt="Black and white photograph of a man stretching back over studio equipment" sizes="(min-width: 900px) 25vw, 46vw" />
          </div>
        </div>
      </section>

      <section className="section surface-sand" aria-labelledby="trainer-title">
        <div className="container prose-cols">
          <div>
            <h2 id="trainer-title">Trainer qualifications &amp; expertise</h2>
          </div>
          <ul className="tick-list">
            {qualifications.map((q) => (
              <li key={q}>{q}</li>
            ))}
          </ul>
        </div>
      </section>

      <CtaBand title="Learn how we integrate mind, body & soul">
        <Button href="/our-services">Our offerings</Button>
      </CtaBand>
    </>
  );
}
