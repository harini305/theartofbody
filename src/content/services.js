// Prices and offerings from docs/source-audit/03-content-inventory.md §3.
// Studio prices follow the on-site pages, which agree with the most recently
// updated Wix Bookings records (Oct 2026) and the Plans & Pricing packs.
// Conflicting values (Acuity Rp 680k, Rp 7.3M 10-pack, old Rp 350k meta) are not shown.
// Session durations (55 min vs 1 hour), semi-private group size (3 vs 4) and the
// semi-private timetable conflict between sources and are left out (audit 08 F6, F8, F9).

export const priceNote =
  "Prices can change without prior notice, so please check with us on WhatsApp for the current price list.";

export const pilatesOfferings = [
  {
    name: "Professional initial consultation",
    price: "Rp 750.000",
    text: "Your first consultation will identify your postural needs, your body's imbalances and your personal goals in your journey in pilates. You will be assessed by a STOTT certified professional so we can write a tailor-made program for you. Postural analysis, strength testings and correct form will be discussed and tested appropriately.",
  },
  {
    name: "Private Pilates",
    price: "Rp 750.000",
    packs: [["3 pack", "Rp 2.050.000"], ["10 pack", "Rp 6.750.000"]],
    text: "Private Pilates is recommended to anyone who wants to take pilates at their own pace. Privates are dedicated in teaching you the fundamentals, the modifications or the advancements of each exercise. The appropriate equipment and program will be written to suit your personal needs and fitness goals.",
  },
  {
    name: "Couples Pilates",
    price: "Rp 900.000",
    packs: [["3 pack", "Rp 2.550.000"], ["10 pack", "Rp 8.100.000"]],
    // The original reused the Private Pilates paragraph verbatim; no separate description is shown.
  },
  {
    name: "Semi-private Pilates",
    price: "Rp 400.000",
    packs: [["3 pack", "Rp 1.100.000"], ["10 pack", "Rp 3.600.000"], ["20 pack", "Rp 7.300.000"]],
    text: "Small semi-private classes allow us to pay close attention to your personal programs in a group setting. If you already have your own group, we can book you in at a semi-private rate at a later time in the day.",
    confirm: "Please contact us for current class times.",
  },
  {
    name: "Group mat Pilates",
    price: "Rp 300.000",
    packs: [["Minimum", "4 people"]],
    text: "Group mat pilates is great for larger organised groups, beginners or maintenance programs. Group mat pilates is appropriate for 4-8 people at one time. It can also be organised for in-villa purposes. Please email us for your most convenient time.",
  },
];

export const customisedTraining = {
  name: "Customised sessions",
  text: "In this personal training session, you can mix and match any of the services we have and get the customised support you need.",
  examples: ["Pilates + Bowen", "HIIT training + TRX", "Personal training + Bowen", "Personal training + stretching"],
};

export const onlineOfferings = [
  { name: "Private Pilates session", meta: "55 min", price: "US$65" },
  {
    name: "Semi-private Pilates session",
    meta: "3–4 people · 55 min",
    price: "US$15 each",
    text: "For people who live in different locations to their friends but want to share time and work out together. Mat class, with equipment possible with what you have at home.",
  },
  { name: "Group Pilates session", meta: "55 min", price: "US$10 each", text: "A group mat class to get you stretched, activated and connected." },
  {
    name: "Back to Health session",
    meta: "55 min",
    price: "US$65",
    text: "A one-on-one session to identify key factors in physical instability and causes of chronic pain to alleviate discomfort and regain confidence and full range of motion.",
  },
];

// Wix Bookings services (docs/source-audit/data/wix-bookings-services.json).
export const bookingServices = [
  {
    slug: "pilates-private-class",
    name: "Pilates Private Class",
    tagline: "One-on-one Pilates",
    price: "Rp 750.000",
    image: "chair-v-sit",
    alt: "Man balancing in a V-sit on a Pilates chair",
    description: "Postural analysis, basic principles of pilates, one on one consultation. Or just straight out core stability programs. You choose.",
    location: "Jalan Mertanadi",
    learnMore: "/pilates",
  },
  {
    slug: "pilates-semi-private-class",
    name: "Pilates Semi-private Class",
    tagline: "Small-group Pilates",
    price: "Rp 400.000",
    image: "reformer-tower-duo",
    alt: "Two women working on Pilates towers with legs in straps",
    description: "A combination of mat and machine to get the best complete core conditioning, in a small group.",
    location: "Jalan Mertanadi 22xx",
    learnMore: "/pilates",
  },
  {
    slug: "bowen-technique-session",
    name: "Bowen Technique Session",
    tagline: "Free your body with Bowen Technique",
    price: "Rp 1.200.000",
    image: "hot-stones",
    alt: "Smooth dark stones resting along a client's back",
    description:
      "Bowen Therapy is a series of specific moves which challenge the soft tissues of the body. This releases the congestion trapped within nerves and muscles, stimulates the energy flow while at the same time, relieving pain and inflammation in the body. Its powerful positive effects on nerves, muscle and connective tissue (can) provide long lasting relief from pain and misalignment in the simplest and gentlest of manners.",
    location: "Jalan Mertanadi",
    learnMore: "/bowen-therapy-1",
  },
  {
    slug: "personal-training",
    name: "Personal Training",
    tagline: "Bespoke fitness program",
    price: "Rp 800.000",
    image: "trx-straps",
    alt: "Woman training in suspension straps against a white studio wall",
    description: "One on one health coaching and a bespoke fitness program.",
    location: "Jalan Mertanadi",
    learnMore: "/our-services",
  },
];

export const cancellationPolicy =
  "To cancel or re-schedule please notify us 24 hours before the class time, otherwise you are liable for the cost of the class. You can reach us on WhatsApp to confirm, cancel or re-schedule classes.";

export const plans = [
  { name: "3x Semi-private package", includes: "3 semi-private Pilates classes", price: "Rp 1.100.000" },
  { name: "10x Semi-private package", includes: "10 semi-private Pilates classes", price: "Rp 3.600.000" },
  { name: "3x Private package", includes: "3 private Pilates classes", price: "Rp 2.050.000" },
  { name: "10x Private package", includes: "10 private Pilates classes", price: "Rp 6.750.000" },
  { name: "3x Bowen package", includes: "3 Bowen Technique sessions", price: "Rp 3.500.000" },
];

export const holidayPackages = [
  {
    name: "Pilates immersion",
    hours: "5 hours total",
    price: "Rp 2.700.000",
    inclusions: [
      ["1 hour", "Private initial consultation, postural analysis and basic principles of Pilates mat work"],
      ["1 hour", "Private introduction to Pilates machines (Reformer, Cadillac and Chair)"],
      ["3 hours", "Semi-private Pilates sessions (3 sessions, 1 hour each)"],
    ],
  },
  {
    name: "Back to health",
    hours: "5 hours total",
    price: "Rp 4.000.000",
    summary:
      "Release of back pain and tension, receive education in back health and maintenance, Bowen therapy, myofascial release therapy, and education in pain relief and prevention.",
    inclusions: [
      ["1 hour", "Private initial consultation, myofascial release and postural analysis, Bowen therapy"],
      ["3 hours", "Private sessions combining core stability work, myofascial release, rehabilitation exercises, education for future maintenance and Pilates rehabilitation (3 sessions, 1 hour each)"],
      ["1 hour", "Bowen therapy"],
    ],
  },
  {
    name: "Mind / body transformation",
    hours: "8 hours total",
    price: "Rp 6.800.000",
    summary: "Feeling ready to kick start your health and fitness? Let's do it!",
    inclusions: [
      ["2 hours", "Life / wellness coaching"],
      ["3 hours", "Personal training sessions (3 sessions, 1 hour each)"],
      ["1 hour", "Myofascial release therapy and stretching, discussion on the maintenance of a healthy lifestyle"],
      ["1 hour", "Private Pilates"],
      ["1 session", "Bowen therapy"],
    ],
  },
];
