import { bookingServices } from "@/content/services";

const BASE = "https://www.theartofbody.com";
// /bowen-therapy (hidden coaching page), booking calendars and the members area are excluded.
const routes = [
  "/", "/about", "/our-services", "/pilates", "/online-training", "/bowen-therapy-1",
  "/tailor-made-retreats-1", "/holiday-packages", "/pre-post-natal", "/book", "/contact-us",
  "/plans-pricing", "/privacy", "/refund-policy", "/terms",
];

export default function sitemap() {
  return [
    ...routes.map((r) => ({ url: BASE + r })),
    ...bookingServices.map((s) => ({ url: `${BASE}/service-page/${s.slug}` })),
  ];
}
