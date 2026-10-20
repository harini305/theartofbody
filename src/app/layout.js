import { Bodoni_Moda, Jost } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Motion from "@/components/Motion";
import FooterHeight from "@/components/FooterHeight";
import "@/styles/base.css";
import "@/styles/layout.css";
import "@/styles/components.css";

// Exactly two families, self-hosted by next/font at build time (no runtime font requests).
const bodoni = Bodoni_Moda({
  subsets: ["latin"],
  style: ["normal"],
  weight: ["400"],
  variable: "--font-bodoni",
  display: "swap",
});
const jost = Jost({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-jost",
  display: "swap",
});

export const metadata = {
  metadataBase: new URL("https://www.theartofbody.com"),
  title: {
    default: "The Art of Body | Therapeutic Pilates & Bodywork in Seminyak, Bali",
    template: "%s | The Art of Body",
  },
  description:
    "STOTT Pilates, Bowen Therapy and myofascial release in Seminyak, Bali. Private and small-group sessions at Jalan Mertanadi, Kerobokan.",
  openGraph: {
    siteName: "The Art of Body",
    type: "website",
    images: [{ url: "/images/studio-interior-1400.webp", width: 1400, height: 788 }],
  },
};

export const viewport = {
  themeColor: "#fdf6eb",
};

// Enables the pre-paint hidden state for hero entrance animation only when motion is allowed.
const motionScript = `try{if(!matchMedia('(prefers-reduced-motion: reduce)').matches)document.documentElement.classList.add('motion-ok')}catch(e){}`;

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${bodoni.variable} ${jost.variable}`} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: motionScript }} />
      </head>
      <body>
        <a href="#main" className="skip-link">
          Skip to content
        </a>
        <Header />
        <main id="main" tabIndex={-1}>
          {children}
        </main>
        <Footer />
        <Motion />
        <FooterHeight />
      </body>
    </html>
  );
}
