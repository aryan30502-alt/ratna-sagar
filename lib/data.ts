export const BRAND = {
  name: "Ratna Sagar",
  tagline: "Mewar's Premium Ratna & Spiritual Destination",
  city: "Bhilwara, Rajasthan",
  phone: "+91 90000 00000",
  whatsapp: "919000000000",
  email: "care@ratnasagar.in",
  address: "Ratna Sagar, Bhilwara, Rajasthan 311001"
};

export const waLink = (msg: string) =>
  `https://wa.me/${BRAND.whatsapp}?text=${encodeURIComponent(msg)}`;

export type Gem = {
  name: string;
  hindi: string;
  planet: string;
  zodiac: string[];
  benefit: string;
  origins: string[];
  photo: string;
  orbA: string;
  orbB: string;
  orbGlow: string;
  /** Cut shape — drives faceted SVG rendering */
  cut: "brilliant" | "oval" | "emerald" | "cabochon";
  /** Bright color (top highlight) */
  colorLight: string;
  /** Main saturated body color */
  colorMain: string;
  /** Deep shadow color */
  colorDark: string;
  /** Outer ambient glow color (rgba) */
  glow: string;
};

export const GEMSTONES: Gem[] = [
  {
    name: "Blue Sapphire",
    hindi: "नीलम · Neelam",
    planet: "Saturn (Shani)",
    zodiac: ["Capricorn", "Aquarius"],
    benefit: "Discipline, focus, financial growth and protection from negativity.",
    origins: ["Ceylon", "Kashmiri", "Kashmiri Putra", "Sehri", "Kachuri"],
    photo: "https://upload.wikimedia.org/wikipedia/commons/f/f9/Sapphire_Gem.jpg",
    orbA: "#3b6cff",
    orbB: "#0a1a4a",
    orbGlow: "rgba(79,124,255,0.45)",
    cut: "oval",
    colorLight: "#7aa5ff",
    colorMain: "#1d3fb0",
    colorDark: "#06143f",
    glow: "rgba(79,124,255,0.55)"
  },
  {
    name: "Yellow Sapphire",
    hindi: "पुखराज · Pukhraj",
    planet: "Jupiter (Brihaspati)",
    zodiac: ["Sagittarius", "Pisces"],
    benefit: "Wisdom, prosperity, marital harmony and spiritual elevation.",
    origins: ["Ceylon", "Bangkok", "Brazilian", "Wartman"],
    photo: "https://upload.wikimedia.org/wikipedia/commons/9/90/Yellow_sapphire_oval_gemstone.JPG",
    orbA: "#f5c453",
    orbB: "#5a3a06",
    orbGlow: "rgba(245,196,83,0.55)",
    cut: "oval",
    colorLight: "#ffe080",
    colorMain: "#e0a82a",
    colorDark: "#5a3a08",
    glow: "rgba(245,196,83,0.6)"
  },
  {
    name: "Emerald",
    hindi: "पन्ना · Panna",
    planet: "Mercury (Budh)",
    zodiac: ["Gemini", "Virgo"],
    benefit: "Sharpens intellect, communication and creative expression.",
    origins: ["Colombian", "Zambian", "Russian", "Brazilian", "Pakistani"],
    photo: "https://upload.wikimedia.org/wikipedia/commons/7/71/Mim_emerald.jpg",
    orbA: "#3ad28a",
    orbB: "#08321f",
    orbGlow: "rgba(58,210,138,0.55)",
    cut: "emerald",
    colorLight: "#6df0b4",
    colorMain: "#0fa066",
    colorDark: "#062a1a",
    glow: "rgba(58,210,138,0.6)"
  },
  {
    name: "Ruby",
    hindi: "माणिक · Manik",
    planet: "Sun (Surya)",
    zodiac: ["Leo"],
    benefit: "Confidence, leadership, vitality and royal presence.",
    origins: ["Burma", "African", "Tanzania", "Surat"],
    photo: "https://upload.wikimedia.org/wikipedia/commons/f/f0/Ruby_gem.JPG",
    orbA: "#ff4d6d",
    orbB: "#3a0712",
    orbGlow: "rgba(255,77,109,0.55)",
    cut: "oval",
    colorLight: "#ff7a92",
    colorMain: "#d61b3a",
    colorDark: "#3a0612",
    glow: "rgba(255,77,109,0.6)"
  },
  {
    name: "Pearl",
    hindi: "मोती · Moti",
    planet: "Moon (Chandra)",
    zodiac: ["Cancer"],
    benefit: "Calms the mind, soothes emotions and enhances intuition.",
    origins: ["Basra", "Hyderabadi", "South Sea", "Chinese", "Cultured"],
    photo: "https://upload.wikimedia.org/wikipedia/commons/f/fe/Pearl.JPG",
    orbA: "#fff7e8",
    orbB: "#a89c80",
    orbGlow: "rgba(255,247,232,0.55)",
    cut: "cabochon",
    colorLight: "#ffffff",
    colorMain: "#f3e7d0",
    colorDark: "#9a8a70",
    glow: "rgba(255,247,232,0.6)"
  },
  {
    name: "Red Coral",
    hindi: "मूँगा · Moonga",
    planet: "Mars (Mangal)",
    zodiac: ["Aries", "Scorpio"],
    benefit: "Courage, energy, vitality and protection from enemies.",
    origins: ["Italian", "Mauritius", "Surat", "Bharti", "Khatri"],
    photo: "https://upload.wikimedia.org/wikipedia/commons/1/17/Red_coral_gemstone.jpg",
    orbA: "#ff6a3d",
    orbB: "#3b0a02",
    orbGlow: "rgba(255,106,61,0.55)",
    cut: "cabochon",
    colorLight: "#ff9468",
    colorMain: "#d23a14",
    colorDark: "#48100a",
    glow: "rgba(255,106,61,0.6)"
  },
  {
    name: "Hessonite",
    hindi: "गोमेद · Gomed",
    planet: "Rahu",
    zodiac: ["On consultation"],
    benefit: "Removes confusion, hidden enemies and karmic obstacles.",
    origins: ["Ceylon", "African"],
    photo: "https://upload.wikimedia.org/wikipedia/commons/2/21/Hessonit_-_Tafelschliff_-_Ceylon.jpg",
    orbA: "#c97b3a",
    orbB: "#2a0f04",
    orbGlow: "rgba(201,123,58,0.55)",
    cut: "brilliant",
    colorLight: "#ffb877",
    colorMain: "#c97b3a",
    colorDark: "#3a1808",
    glow: "rgba(201,123,58,0.6)"
  },
  {
    name: "Cat's Eye",
    hindi: "लहसुनिया · Lehsunia",
    planet: "Ketu",
    zodiac: ["On consultation"],
    benefit: "Spiritual protection, intuition and freedom from sudden losses.",
    origins: ["Ceylon", "Indian"],
    photo: "https://upload.wikimedia.org/wikipedia/commons/2/2b/Chrysoberyl.jpeg",
    orbA: "#a9b07a",
    orbB: "#1d2207",
    orbGlow: "rgba(169,176,122,0.55)",
    cut: "cabochon",
    colorLight: "#e6dba0",
    colorMain: "#9a9050",
    colorDark: "#2a2607",
    glow: "rgba(169,176,122,0.6)"
  },
  {
    name: "Diamond",
    hindi: "हीरा · Heera",
    planet: "Venus (Shukra)",
    zodiac: ["Taurus", "Libra"],
    benefit: "Luxury, love, charisma and lifelong material abundance.",
    origins: ["All Sizes", "All Qualities", "CK · KK · LB", "GVS · S1 · FG"],
    photo: "https://upload.wikimedia.org/wikipedia/commons/2/20/Round_Brilliant_Cut_Diamond.jpg",
    orbA: "#e8f4ff",
    orbB: "#7a8aa6",
    orbGlow: "rgba(232,244,255,0.7)",
    cut: "brilliant",
    colorLight: "#ffffff",
    colorMain: "#d8e8ff",
    colorDark: "#5f7393",
    glow: "rgba(232,244,255,0.75)"
  }
];

export type Spiritual = {
  title: string;
  hindi: string;
  desc: string;
  items: string[];
  symbol: string;
  photo: string;
};

export const SPIRITUAL: Spiritual[] = [
  {
    title: "Sphatik Articles",
    hindi: "स्फटिक आर्टिकल्स",
    desc: "Pure crystal idols and sacred symbols — Shree Yantra, Ganesh, Shivling, Laxmi, Hanuman, Nandi, Surya, Shankh, Kachhua and more, in all sizes.",
    items: ["Shree Yantra", "Crystal Ganesh", "Crystal Shivling", "Laxmi · Hanuman", "Kachhua · Shankh", "Laughing Buddha", "Crystal Ball", "Vastu Pyramid"],
    symbol: "✦",
    photo: ""
  },
  {
    title: "Marakat Ganesh",
    hindi: "मरकत गणेश",
    desc: "Naqshi (carved) and sade (plain) Marakat Ganesh idols — auspicious and rare, available in all sizes and weights.",
    items: ["Naqshi Ganesh", "Sade (Plain) Ganesh", "All Sizes", "All Weights"],
    symbol: "ॐ",
    photo: ""
  },
  {
    title: "Parad Articles",
    hindi: "पारद आर्टिकल्स",
    desc: "Solidified mercury (Ashtagandha) idols — Parad Shivling, Ganesh, Parvati, Shree Yantra, Naag Shivling and Parad Goli — sacred and highly auspicious.",
    items: ["Parad Shivling", "Parad Ganesh", "Parad Parvati", "Parad Shree Yantra", "Shiv Parivar", "Naag Shivling", "Parad Goli"],
    symbol: "☥",
    photo: ""
  },
  {
    title: "Yantra",
    hindi: "यंत्र",
    desc: "Energised yantras on Sona, Chandi, Tamba, Ashtadhatu and Gold Plated bases — for wealth, protection and prosperity.",
    items: [
      "Shree Yantra",
      "Kuber · Mahalaxmi",
      "Navgrah Yantra",
      "Kaalsarp Nivaran",
      "Kanakdhara Yantra",
      "Maha Mrityunjay",
      "Bagalamukhi · Bhairav",
      "Vyapar Vridhi · Vashikaran"
    ],
    symbol: "卐",
    photo: ""
  },
  {
    title: "Kavach",
    hindi: "कवच",
    desc: "Protective shields prepared on auspicious muhurat — Lakshmi, Hanuman, Bagalamukhi, Saraswati, Durga, Najar Raksha, Maha Mrityunjay and more.",
    items: [
      "Lakshmi Kavach",
      "Hanuman Kavach",
      "Bagalamukhi Kavach",
      "Saraswati · Durga",
      "Najar Raksha",
      "Shani Dosh Nivaran",
      "Vahan Raksha · Sai",
      "Gangajal-yukt Tabeej"
    ],
    symbol: "🛡",
    photo: ""
  },
  {
    title: "Sampurna Kavach Package",
    hindi: "सम्पूर्ण कवच पैकेज",
    desc: "Complete energised packages — Kuber Kunji, Dhanprapti Sampatti Yantra Package, Najar Suraksha and Rudraksh + Hanuman Kavach combos.",
    items: ["Kuber Kunji Package", "Dhanprapti Yantra Pack", "Najar Suraksha Package", "Rudraksh + Hanuman Pack"],
    symbol: "❂",
    photo: ""
  },
  {
    title: "Vastu Articles",
    hindi: "वास्तु आर्टिकल्स",
    desc: "Authentic Vastu remedies — Navrattan Tree, Gomti Chakra, Pyramids, Kachua Shree Yantra, Lucky Coin, Mangal Kalash, Iccha Purti Kachhua and more.",
    items: [
      "Navrattan Tree",
      "Gomti Chakra",
      "Vastu Pyramid",
      "Kachua Shree Yantra",
      "Swastik Pyramid",
      "Lucky Coin · Naut",
      "Laughing Buddha",
      "Mangal Kalash"
    ],
    symbol: "✺",
    photo: ""
  },
  {
    title: "Shani Shanti Upay",
    hindi: "शनि शांति उपाय",
    desc: "Remedies for Shani dosha — Shani Kripa Yantra, Ghoda Naal, Navdyeshwar Shivling, Ashtadhatu Shivling, Charan Paduka, Mool Shanti Samagri and Safed Aankada Ganpati.",
    items: ["Shani Kripa Yantra", "Ghoda Naal", "Navdyeshwar Shivling", "Ashtadhatu Shivling", "Charan Paduka", "Mool Shanti Samagri", "Safed Aankada Ganpati"],
    symbol: "♄",
    photo: ""
  },
  {
    title: "Siddh Muhurat",
    hindi: "सिद्ध मुहूर्त",
    desc: "Energised on auspicious muhurat — Naag Naagin Joda, Kachhua, Pyramid and Vastu Yantra prepared with vedic precision.",
    items: ["Naag Naagin Joda", "Siddh Kachhua", "Siddh Pyramid", "Vastu Yantra"],
    symbol: "✧",
    photo: ""
  },
  {
    title: "Rudraksha",
    hindi: "रुद्राक्ष",
    desc: "Authentic Nepali, Indonesian & Bhadraksha rudraksha — 1 Mukhi to 21 Mukhi, Gauri Shankar, Ganesh Rudraksha and rare collector beads.",
    items: ["1 to 14 Mukhi", "Indonesian Mala", "Bhadraksha", "Gauri Shankar", "Ganesh Rudraksha", "Trijuti · Sawar"],
    symbol: "ॐ",
    photo: ""
  },
  {
    title: "Mala",
    hindi: "माला",
    desc: "Sacred malas in Sphatik, Munga, Tulsi, Panna, Gomed, Hakik, Vaijanti, Nag Mani, Sangmun and more — for daily japa and protection.",
    items: ["Sphatik Mala", "Munga · Panna", "Tulsi · Vaijanti", "Hakik · Gomed", "Karagol · Thopa", "Nag Mani · Sangmun"],
    symbol: "❧",
    photo: ""
  },
  {
    title: "Shankh",
    hindi: "शंख",
    desc: "Sacred shankhs — Dakshinavarti, Garbharaksha, Vishnu Shankh, Moti Shankh, Kauri Shankh and Suraj Shankh — in all sizes.",
    items: ["Dakshinavarti Shankh", "Garbharaksha Shankh", "Vishnu Shankh", "Moti Shankh", "Kauri Shankh", "Suraj Shankh"],
    symbol: "➰",
    photo: ""
  },
  {
    title: "Puja Saaman",
    hindi: "पूजा सामान",
    desc: "Pure Chandi (silver) puja articles in all sizes — Chandi diya, kalash, paat and traditional samagri for daily worship.",
    items: ["Chandi Articles", "Diya & Kalash", "Havan Samagri", "Sacred Threads", "Kumkum · Chandan"],
    symbol: "🪔",
    photo: ""
  }
];

// Categories shown as scrollable chips on the home page (gemmines-style)
export const CATEGORY_CHIPS = [
  { label: "Gemstones", hindi: "रत्न", href: "#gemstones" },
  { label: "Rudraksha", hindi: "रुद्राक्ष", href: "#spiritual" },
  { label: "Yantra", hindi: "यंत्र", href: "#spiritual" },
  { label: "Kavach", hindi: "कवच", href: "#spiritual" },
  { label: "Parad", hindi: "पारद", href: "#spiritual" },
  { label: "Sphatik", hindi: "स्फटिक", href: "#spiritual" },
  { label: "Vastu", hindi: "वास्तु", href: "#spiritual" },
  { label: "Mala", hindi: "माला", href: "#spiritual" },
  { label: "Shankh", hindi: "शंख", href: "#spiritual" },
  { label: "Puja Saaman", hindi: "पूजा सामान", href: "#spiritual" }
];

export const TESTIMONIALS = [
  {
    name: "Anjali Mehta",
    city: "Udaipur",
    text:
      "Ratna Sagar guided me to the right Pukhraj — within months I felt clarity in decisions. Genuine people, genuine stones."
  },
  {
    name: "Rohit Singhvi",
    city: "Jaipur",
    text:
      "I have purchased Neelam and Moonga from them. Both certified, beautifully cut and the consultation felt like a blessing."
  },
  {
    name: "Dr. Pooja Soni",
    city: "Ahmedabad",
    text:
      "From Rudraksha to Shree Yantra, every product was prepared with care and authenticity. Their spiritual depth is rare."
  },
  {
    name: "Vikram Joshi",
    city: "Bhilwara",
    city_local: true as const,
    text:
      "A trusted name in Mewar for years. Their honesty and expertise stand far above any other gemstone seller I have visited."
  }
];

export const ZODIACS = [
  "Aries", "Taurus", "Gemini", "Cancer", "Leo", "Virgo",
  "Libra", "Scorpio", "Sagittarius", "Capricorn", "Aquarius", "Pisces"
];

export const PROBLEMS = [
  "Career & Growth",
  "Wealth & Prosperity",
  "Marriage & Relationships",
  "Health & Vitality",
  "Education & Focus",
  "Spiritual Protection"
];

export const BENEFITS = [
  "Confidence & Leadership",
  "Peace & Clarity",
  "Financial Stability",
  "Family Harmony",
  "Energy & Courage",
  "Spiritual Awakening"
];

// Frontend simulated recommendation logic
export function recommendGem(input: {
  problem: string;
  zodiac: string;
  benefit: string;
}): Gem[] {
  const map: Record<string, string[]> = {
    "Career & Growth": ["Yellow Sapphire", "Emerald", "Blue Sapphire"],
    "Wealth & Prosperity": ["Yellow Sapphire", "Diamond", "Emerald"],
    "Marriage & Relationships": ["Diamond", "Pearl", "Yellow Sapphire"],
    "Health & Vitality": ["Ruby", "Red Coral", "Pearl"],
    "Education & Focus": ["Emerald", "Pearl", "Yellow Sapphire"],
    "Spiritual Protection": ["Cat's Eye", "Hessonite", "Blue Sapphire"]
  };
  const byZodiac: Record<string, string> = {
    Aries: "Red Coral",
    Taurus: "Diamond",
    Gemini: "Emerald",
    Cancer: "Pearl",
    Leo: "Ruby",
    Virgo: "Emerald",
    Libra: "Diamond",
    Scorpio: "Red Coral",
    Sagittarius: "Yellow Sapphire",
    Capricorn: "Blue Sapphire",
    Aquarius: "Blue Sapphire",
    Pisces: "Yellow Sapphire"
  };
  const picks = new Set<string>();
  (map[input.problem] || []).forEach((g) => picks.add(g));
  if (byZodiac[input.zodiac]) picks.add(byZodiac[input.zodiac]);
  const result = GEMSTONES.filter((g) => picks.has(g.name));
  return result.length ? result.slice(0, 3) : GEMSTONES.slice(0, 3);
}
