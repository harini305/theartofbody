// Verified business facts from docs/source-audit/03-content-inventory.md §1.
// Opening hours (JSON-LD only) and the WhatsApp number on /holiday-packages
// (missing a digit) are deliberately not used.

export const site = {
  name: "The Art of Body",
  tagline: "Pilates & holistic wellness",
  url: "https://www.theartofbody.com",
  address: {
    line: "Jalan Mertanadi 22xx, Kerobokan, in the heart of Seminyak.",
    short: "Jalan Mertanadi 22xx, Kerobokan, Seminyak, Bali",
    formatted: "Jalan Mertanadi, Kerobokan Kelod, Badung Regency, Bali, Indonesia",
  },
  // Coordinates from the Wix Bookings location record.
  mapUrl: "https://www.google.com/maps/search/?api=1&query=-8.6819575%2C115.1676262",
  phoneDisplay: "+62 (0) 878 3911 2400",
  phoneHref: "tel:+6287839112400",
  // Service pages state "+6287839112400 Whatsapp"; footer says "SMS / Whatsapp or Call".
  whatsappHref: "https://wa.me/6287839112400",
  emails: {
    info: "info@theartofbody.com",
    pilates: "pilates@theartofbody.com",
    natalie: "ns@theartofbody.com",
  },
  travelTimes: [
    ["Oberoi area", "walking distance"],
    ["Sunset Road", "5 minutes"],
    ["Legian", "10 minutes"],
    ["Canggu", "15 minutes"],
    ["Sanur", "25 minutes"],
  ],
  social: [
    { label: "Instagram", href: "https://www.instagram.com/studiopilatesbali/" },
    { label: "Facebook", href: "https://www.facebook.com/studiopilatesbali/" },
    {
      label: "TripAdvisor",
      href: "https://www.tripadvisor.com.au/Attraction_Review-g469404-d3263478-Reviews-Studio_Pilates_The_Art_of_Body-Seminyak_Bali.html",
    },
  ],
};

export const nav = [
  { label: "About", href: "/about" },
  {
    label: "Body wellness",
    children: [
      { label: "Pilates", href: "/pilates" },
      { label: "Online training", href: "/online-training" },
    ],
  },
  {
    label: "Holistic therapy",
    children: [{ label: "Bowen therapy", href: "/bowen-therapy-1" }],
  },
  {
    label: "Retreats & holidays",
    children: [
      { label: "Tailor-made retreats", href: "/tailor-made-retreats-1" },
      { label: "Holiday packages", href: "/holiday-packages" },
    ],
  },
  { label: "Our services", href: "/our-services" },
  {
    label: "More",
    children: [
      { label: "Contact us", href: "/contact-us" },
      { label: "Plans & pricing", href: "/plans-pricing" },
    ],
  },
];

export const footerLinks = [
  { label: "About", href: "/about" },
  { label: "Our services", href: "/our-services" },
  { label: "Pilates", href: "/pilates" },
  { label: "Online training", href: "/online-training" },
  { label: "Bowen therapy", href: "/bowen-therapy-1" },
  { label: "Pre & post natal", href: "/pre-post-natal" },
  { label: "Retreats", href: "/tailor-made-retreats-1" },
  { label: "Holiday packages", href: "/holiday-packages" },
  { label: "Plans & pricing", href: "/plans-pricing" },
  { label: "Book", href: "/book" },
  { label: "Contact", href: "/contact-us" },
];

export const legalLinks = [
  { label: "Privacy", href: "/privacy" },
  { label: "Refunds & cancellations", href: "/refund-policy" },
  { label: "Terms", href: "/terms" },
];
