import { Button, CtaBand, Figure, PageHero, Quote } from "@/components/blocks";
import { values } from "@/content/faqs";
import { site } from "@/content/site";

// Hidden page on the original site (noindex): Natalie Kashani's life & wellness coaching.
// It keeps its original URL but is not the Bowen therapy page (that is /bowen-therapy-1)
// and stays out of search engines and the sitemap.
export const metadata = {
  title: "Life & wellness coaching with Natalie Kashani",
  description: "One-on-one empowerment coaching with Natalie Kashani at The Art of Body, Seminyak.",
  robots: { index: false, follow: true },
};

const questions = [
  "Stuck in a soul-sucking job or relationship?",
  "Craving a change of lifestyle that creates more joy?",
  "Struggling with finding balance in your life?",
  "Feeling overwhelmed?",
  "Feeling anxious and not present in your body?",
  "Thinking too much?",
  "Having trouble sleeping or resting?",
  "Lacking clarity with your life choices?",
  "Confused about where to start?",
  "Feeling stressed about how far you are from where you think you should be?",
];
const mind = [
  "Understand how your thoughts affect your actions and find tools to encourage better outcomes",
  "Learn ways to calm your system",
  "Develop tools to keep anxiety and depression at bay",
  "Learn to breathe to get back into presence",
  "Learn to trust your path",
  "Find the motivation and inspiration to change some important aspects in your life",
  "Start feeling great about your choices past, present and future",
  "Feel confident and grateful",
];
const body = [
  "Release stress and trauma through trigger-point therapy and myofascial release",
  "Connect back to your body through mind / body mapping",
  "Release inner stress and anxiety through proper breathing and grounding techniques",
  "Learn lifestyle techniques to get your mind and body to homeostasis in daily situations",
  "Learn to trust your intuition",
  "Learn to love your body unconditionally",
  "Feel attractive and worthy unconditionally",
];

const mailto = `mailto:${site.emails.natalie}?subject=${encodeURIComponent("Hi Nat | Personal Coaching Inquiry")}`;

export default function Coaching() {
  return (
    <>
      <PageHero
        title="Life & wellness coaching"
        subtitle="With Natalie Kashani at The Art of Body"
        image="coaching-portrait"
        alt="Portrait of a smiling woman"
        shape="tall"
        position="50% 25%"
      >
        <Quote text="What you seek is seeking you." cite="Rumi" />
        <p style={{ marginTop: "2rem" }}>
          Natalie Kashani has been working in women&rsquo;s health and wellness for over 13 years, focusing on the
          mind/body/soul connection to revitalise and re-calibrate what you already know. She has helped many women see
          their light by helping them overcome obstacles such as self-confidence issues, self-doubt, trauma and anxiety.
        </p>
        <div className="actions">
          <Button href="/book">Book a session</Button>
          <Button href={mailto} variant="secondary">
            Contact Nat
          </Button>
        </div>
      </PageHero>

      <section className="section surface-cream-deep" aria-labelledby="for-me-title">
        <div className="container prose-cols">
          <div>
            <h2 id="for-me-title">How do I know coaching will be for me?</h2>
            <p style={{ marginTop: "1.25rem" }}>
              If you have answered yes to at least one of these questions, finding some clarity through coaching might be for
              you.
            </p>
          </div>
          <ul className="tick-list">
            {questions.map((q) => (
              <li key={q}>Are you {q.charAt(0).toLowerCase() + q.slice(1)}</li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section" aria-labelledby="method-title">
        <div className="container">
          <div className="section-head">
            <h2 id="method-title">My methodology</h2>
            <p>
              Giving the power back to you. &ldquo;Our skills are about knowing the right questions to ask and having the
              right tools and techniques to empower you to find those answers within yourself.&rdquo;
            </p>
          </div>
          <div className="two-lists">
            <div>
              <h3>Mind &amp; soul</h3>
              <ul className="tick-list">
                {mind.map((m) => (
                  <li key={m}>{m}</li>
                ))}
              </ul>
            </div>
            <div>
              <h3>Body</h3>
              <ul className="tick-list">
                {body.map((m) => (
                  <li key={m}>{m}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="section surface-teal on-dark" aria-labelledby="session-title">
        <div className="container split">
          <Figure name="beach-sunset-silhouettes" alt="" className="split__media" sizes="(min-width: 900px) 45vw, 92vw" />
          <div className="split__text">
            <h2 id="session-title">One-on-one sessions</h2>
            <p>All sessions are a carefully crafted one-on-one session.</p>
            <dl className="price-row__prices" style={{ maxWidth: "24rem", marginTop: "1.5rem" }}>
              <div>
                <dt style={{ color: "inherit" }}>1.5 hours</dt>
                <dd style={{ color: "inherit" }}>Rp 1.500.000</dd>
              </div>
            </dl>
            <p className="fine-print">Sessions can also be scheduled online.</p>
            <div className="actions">
              <Button href="/book">Book a session</Button>
              <Button href={mailto} variant="secondary">
                Contact Natalie
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="section" aria-labelledby="how-title">
        <div className="container">
          <div className="section-head">
            <h2 id="how-title">How we work</h2>
          </div>
          <ul className="values">
            {values.map(([t, d]) => (
              <li key={t}>
                <h3>{t}</h3>
                <p>{d}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <CtaBand title="Learn about our fitness, wellbeing and holiday retreat services">
        <Button href="/our-services">Our offerings</Button>
      </CtaBand>
    </>
  );
}
