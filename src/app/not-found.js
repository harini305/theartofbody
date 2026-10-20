import Link from "next/link";
import { Actions, Button } from "@/components/blocks";

export const metadata = { title: "Page not found" };

export default function NotFound() {
  return (
    <section className="not-found">
      <div className="container container--narrow">
        <h1>This page has moved or no longer exists</h1>
        <p className="lede">Check the address, or continue from one of these pages.</p>
        <Actions>
          <Button href="/">Go to the homepage</Button>
          <Button href="/our-services" variant="secondary">
            Our services
          </Button>
        </Actions>
        <p style={{ marginTop: "2rem" }}>
          Looking to book? <Link prefetch={false} href="/book">See available sessions</Link>.
        </p>
      </div>
    </section>
  );
}
