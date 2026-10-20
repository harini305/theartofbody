import PlanList from "@/components/PlanList";
import { Button, CtaBand, SimpleHero } from "@/components/blocks";
import { plans, priceNote } from "@/content/services";

export const metadata = {
  title: "Plans & pricing",
  description:
    "Session packs at The Art of Body: 3x and 10x semi-private and private Pilates, and 3x Bowen Technique sessions, each valid for 3 months.",
  alternates: { canonical: "/plans-pricing" },
};

export default function PlansPricing() {
  return (
    <>
      <SimpleHero title="Choose your pricing plan">
        <p>Session packs for regular practice. Every plan is valid for 3 months from purchase.</p>
      </SimpleHero>
      <section className="section section--tight" style={{ paddingTop: 0 }}>
        <div className="container">
          <div>
            <PlanList plans={plans} />
          </div>
          <p className="fine-print">{priceNote}</p>
        </div>
      </section>
      <CtaBand title="Prefer a single session?" text="Single-session prices are listed with each service.">
        <Button href="/pilates">Pilates prices</Button>
        <Button href="/book" variant="secondary">
          Book a session
        </Button>
      </CtaBand>
    </>
  );
}
