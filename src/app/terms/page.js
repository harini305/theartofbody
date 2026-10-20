import LegalDocument from "@/components/LegalDocument";

export const metadata = {
  title: "Terms of service",
  alternates: { canonical: "/terms" },
};

export default function Page() {
  return <LegalDocument doc="terms" />;
}
