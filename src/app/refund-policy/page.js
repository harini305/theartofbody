import LegalDocument from "@/components/LegalDocument";

export const metadata = {
  title: "Refund & cancellation policy",
  alternates: { canonical: "/refund-policy" },
};

export default function Page() {
  return <LegalDocument doc="refund" />;
}
