import AuthDemo from "@/components/AuthDemo";
import { SimpleHero } from "@/components/blocks";

export const metadata = {
  title: "Members",
  robots: { index: false, follow: false },
};

export default function MyAccount() {
  return (
    <>
      <SimpleHero title="Members area">
        <p>Sign up or log in to manage your plans.</p>
      </SimpleHero>
      <section className="section section--tight" style={{ paddingTop: 0 }}>
        <div className="container">
          <div>
            <AuthDemo />
          </div>
        </div>
      </section>
    </>
  );
}
