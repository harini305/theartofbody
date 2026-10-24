import Link from "next/link";
import Img from "@/components/Img";
import TestimonialSlider from "@/components/TestimonialSlider";
import { Actions, Button, CtaBand, Figure, Quote } from "@/components/blocks";
import { pick } from "@/content/testimonials";

export const metadata = {
  title: { absolute: "The Art of Body | Therapeutic Pilates & Bodywork in Seminyak, Bali" },
  description:
    "Pain-free movement, stronger core, better posture. STOTT Pilates, Bowen Therapy and myofascial release in Seminyak, Bali since 2009.",
  alternates: { canonical: "/" },
};

const pillars = [
  {
    title: "Studio Pilates",
    image: "reformer-class",
    alt: "Women doing arm circles lying on reformers in the studio",
    text: "Re-define the lines of your body, improve your posture and elongate to feel strong and look lean. Book your one-on-one or small-group class.",
    href: "/pilates",
    cta: "View our classes",
  },
  {
    title: "Bowen Technique",
    image: "joined-hands",
    alt: "Two pairs of hands joined across bodies",
    text: "Bowen is a non-invasive, complementary holistic therapy that targets certain points on the body to restore overall mind-body functions.",
    href: "/bowen-therapy-1",
    cta: "Learn about Bowen therapy",
  },
  {
    title: "Online training",
    image: "online-reclining",
    alt: "Smiling woman in black sportswear reclining on a mat",
    position: "64% 35%",
    text: "Connect regardless of where you are: choose from group classes to private one-on-one sessions on Zoom.",
    href: "/online-training",
    cta: "Explore online training",
  },
];

export default function Home() {
  return (
    <>
      <section className="home-hero">
        <div className="home-hero__grid">
          <div className="home-hero__text">
            <h1 data-hero-item>
              <span className="h1-sub">Therapeutic Pilates &amp; bodywork in Seminyak, Bali</span>
              Pain-free movement
            </h1>
            <p className="home-hero__lines" data-hero-item>
              Stronger core. Better posture.
              <br />
              STOTT Pilates, Bowen Therapy &amp; Myofascial Release since 2009.
            </p>
            <Actions>
              <span data-hero-item>
                <Button href="/book">Book a class</Button>
              </span>
              <span data-hero-item>
                <Button href="/our-services" variant="secondary">
                  Our services
                </Button>
              </span>
            </Actions>
          </div>
          <div className="home-hero__media" data-hero-item>
            <div className="home-hero__photo">
              <div data-parallax className="home-hero__parallax">
                <Img
                  name="studio-interior"
                  alt="The Art of Body studio: wooden floor, Pilates equipment and tall windows onto tropical plants"
                  priority
                  sizes="(min-width: 900px) 50vw, 100vw"
                  position="58% 50%"
                />
              </div>
            </div>
            <img className="home-hero__seal" src="/images/logo-blush-160.webp" width="160" height="160" alt="" />
          </div>
        </div>
      </section>

      <section className="section philosophy" aria-labelledby="philosophy-title">
        <div className="container philosophy__grid">
          <Figure
            name="balinese-dancer"
            alt="Balinese dancer in a golden headdress, hands together in prayer"
            sizes="(min-width: 900px) 30vw, 80vw"
            className="philosophy__image"
          />
          <div className="philosophy__text">
            <h2 id="philosophy-title">Our philosophy</h2>
            <p className="lede">
              The Art of Body is a wellness and holistic fitness oasis focused on personalised health and wellness. All
              practitioners are delicately chosen to inspire you to feel your very best while on your long-term journey
              towards wellness.
            </p>
            <p>
              From classical STOTT Pilates classes to catered movement therapies, we are determined for you to stand taller
              and feel happier in your health and well being.
            </p>
            <Quote text="When you touch one thing with deep awareness, you touch everything." cite="Lao Tzu" />
          </div>
        </div>
      </section>

      <section className="section surface-cream-deep pillars" aria-labelledby="services-title">
        <div className="container">
          <div className="section-head">
            <h2 id="services-title">Our services</h2>
          </div>
          <ul className="pillars__list">
            {pillars.map((p) => (
              <li key={p.title} className="pillar">
                <Link prefetch={false} href={p.href} className="pillar__image" tabIndex={-1} aria-hidden="true">
                  <Img name={p.image} alt="" sizes="(min-width: 900px) 22vw, 60vw" position={p.position} />
                </Link>
                <h3>{p.title}</h3>
                <p>{p.text}</p>
                <Link prefetch={false} href={p.href} className="text-link">
                  {p.cta}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section surface-teal on-dark" aria-labelledby="home-testimonials">
        <div className="container">
          <h2 id="home-testimonials" className="visually-hidden">
            Testimonials
          </h2>
          <TestimonialSlider items={pick("madlen", "andrew", "ivana", "devon")} />
        </div>
      </section>

      <section className="section story" aria-labelledby="story-title">
        <div className="container story__grid">
          <div className="story__text">
            <h2 id="story-title">Our story</h2>
            <p className="lede">
              The Art of Body is a professional Pilates and bodywork studio in Seminyak, Bali. Since 2009, we&rsquo;ve
              specialised in therapeutic movement practices that combine STOTT Pilates training with hands-on bodywork
              techniques including myofascial release and Bowen therapy.
            </p>
            <h3>What makes us different</h3>
            <ul className="tick-list">
              <li>STOTT-trained Pilates instruction focused on rehabilitation and pain management</li>
              <li>Small group classes for personalised attention</li>
              <li>Private one-on-one sessions tailored to your specific needs</li>
              <li>Therapeutic bodywork including Bowen technique and myofascial release</li>
              <li>15+ years of experience helping clients achieve pain-free movement</li>
            </ul>
            <p>
              Whether you&rsquo;re recovering from injury, managing chronic pain, or looking to improve your core strength
              and posture, our personalised approach ensures you receive the care and attention you deserve. Located in the
              heart of Seminyak, we serve both local residents and wellness travellers from around the world.
            </p>
            <Link prefetch={false} href="/about" className="text-link">
              More about the studio
            </Link>
          </div>
          <Figure
            name="succulent"
            alt=""
            sizes="(min-width: 900px) 40vw, 92vw"
            className="story__image"
            position="80% 60%"
          />
        </div>
      </section>

      <CtaBand title="Learn more about our classes and treatment sessions">
        <Button href="/our-services">See our holistic services</Button>
        <Button href="/contact-us" variant="secondary">
          Contact us
        </Button>
      </CtaBand>
    </>
  );
}
