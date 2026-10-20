import LegalDocument from "@/components/LegalDocument";

export const metadata = {
  title: "Privacy policy",
  alternates: { canonical: "/privacy" },
};

export default function Page() {
  return <LegalDocument doc="privacy" />;
}
