// Answered FAQs only, verbatim from docs/source-audit/content/faqs.json.
// Omitted: the 8 unanswered legacy questions (/pilates-bali, /pilate-studio-bali)
// and the /pilates "How many people are in a group class?" answer, because the
// maximum group size conflicts between sources (audit 08 F6).

export const faqs = {
  pilates: [
    {
      q: "What is STOTT Pilates?",
      a: "STOTT Pilates is a contemporary approach to the original exercise method pioneered by Joseph Pilates. It incorporates modern exercise science and rehabilitation principles, focusing on core stability, proper spine alignment and functional movement.",
    },
    {
      q: "Do I need experience to join?",
      a: "No experience needed. All levels are welcome. Your first session includes a consultation to assess your posture, identify imbalances and create a personalised program just for you.",
    },
    {
      q: "Where are you located?",
      a: "We are located at Jalan Mertanadi, Kerobokan, in the heart of Seminyak, Bali. Easy access from Canggu (15 mins), Legian (10 mins) and Oberoi (walking distance).",
    },
  ],
  online: [
    {
      q: "How does an online Pilates class work?",
      a: "We connect via Zoom/Whatsapp at your scheduled time. Your instructor can see you clearly, correct your form in real time and guide you through your personalised program just as if you were in the studio.",
    },
    {
      q: "Do I need Pilates equipment at home?",
      a: "No equipment is needed for most sessions. We design programs specifically for home practice using just your body weight and a mat.",
    },
    {
      q: "What time zones do you work with?",
      a: "We work with clients globally and offer flexible scheduling. Based in Bali (WITA, UTC+8), we can accommodate most time zones with morning and evening slots.",
    },
    {
      q: "I've never done Pilates before - can I still join online?",
      a: "Absolutely. We recommend starting with a private session so we can assess your posture, explain the fundamentals and create a program tailored to you.",
    },
    {
      q: "I visited your studio in Bali - can I continue online when I return home?",
      a: "Yes! Many of our clients continue their practice online after returning home. It's a seamless transition and we already know your body and goals.",
    },
  ],
  bowen: [
    {
      q: "How many sessions will I need?",
      a: "Most clients notice significant improvement within 2-3 sessions. Unlike ongoing massage therapy, Bowen often produces lasting results in fewer sessions.",
    },
    {
      q: "What conditions does Bowen Therapy help?",
      a: "Back pain, neck and shoulder tension, sports injuries, sciatica, migraines, stress and anxiety, digestive issues, and general body stiffness.",
    },
    {
      q: "Do I need to undress?",
      a: "No. Bowen Therapy is performed through light, loose clothing making it comfortable and accessible for everyone.",
    },
    {
      q: "Can I combine Bowen with Pilates?",
      a: "Absolutely. Many clients combine both for outstanding results - Bowen releases tension and resets the body while Pilates builds strength and correct movement patterns.",
    },
  ],
};

// "How we work" value statements shown under an FAQ heading on /pre-post-natal and
// /bowen-therapy. They are not questions; the corrupted duplicate is dropped.
export const values = [
  ["We work with you", "Our practitioners work as a team with you to ensure you are onboard with everything we are doing and recommending."],
  ["Ongoing training", "Our practitioner and teachers love to study! The health industry is always changing, so we make it our priority to keep up to date with current research and studies."],
  ["Accountability", "We are very thorough with our treatment plans, and we promise to follow through on your management. If there are further letters to be written or exercise plans to be drawn up we will follow through with these outside of your session time."],
  ["We practice what we preach", "We never offer a piece of advice that we don’t 100% believe in and incorporate in to our own lives. We walk the talk and therefore get all the benefits of living a healthy life!"],
  ["We genuinely care", "Our true passion is helping as many people as we possibly can. Often the feedback we get from our patients is that we take the time to listen and understand the problem."],
  ["Our environment", "We believe your environment creates your reality, so we have created a space that invites you to move with ease and challenge your limits."],
  ["Our community", "Creating a community of like minded people who strive to create a better self is our goal. We run monthly events and workshops and support aligning businesses to build our tribe."],
];
