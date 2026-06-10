export const BRAND = {
  name: "Gaytri Gold",
  tagline: "Rajasthan's Premier Gold & Diamond Jewellery Destination",
  city: "Bhilwara, Rajasthan",
  phone: "+91 90000 00000",
  whatsapp: "919000000000",
  email: "care@gaytrigold.in",
  address: "Gaytri Gold, Bhilwara, Rajasthan 311001",
  est: "Est. 1985"
};

export const waLink = (msg: string) =>
  `https://wa.me/${BRAND.whatsapp}?text=${encodeURIComponent(msg)}`;

// ─── JEWELLERY COLLECTIONS ───
export type JewelleryItem = {
  id: string;
  name: string;
  category: string;
  subcategory?: string;
  description: string;
  purity?: string;
  weight?: string;
  photo: string;
  photos?: string[];
  featured?: boolean;
  displayOrder?: number;
  status: "active" | "inactive";
  waMessage?: string;
};

export type Collection = {
  id: string;
  title: string;
  description: string;
  category: string;
  coverImage: string;
  itemCount?: number;
  featured?: boolean;
};

export const COLLECTIONS: Collection[] = [
  {
    id: "gold-jewellery",
    title: "Gold Jewellery",
    description: "Exquisite 22K & 24K gold pieces — necklaces, bangles, earrings and rings crafted with precision.",
    category: "gold",
    coverImage: "https://images.unsplash.com/photo-1601121141461-9d6647bef0a2?w=800&q=80",
    itemCount: 120,
    featured: true
  },
  {
    id: "diamond-collection",
    title: "Diamond Collection",
    description: "Certified solitaires and diamond-studded sets in 18K & 22K gold settings.",
    category: "diamond",
    coverImage: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=800&q=80",
    itemCount: 85,
    featured: true
  },
  {
    id: "bridal-collection",
    title: "Bridal Collection",
    description: "Complete bridal sets — from naths to maang tikka, crafted for your most precious day.",
    category: "bridal",
    coverImage: "https://images.unsplash.com/photo-1573408301185-9519f94f3b58?w=800&q=80",
    itemCount: 60,
    featured: true
  },
  {
    id: "silver-jewellery",
    title: "Silver Jewellery",
    description: "Pure 925 silver payal, rings, earrings and temple jewellery for everyday elegance.",
    category: "silver",
    coverImage: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=800&q=80",
    itemCount: 95,
    featured: false
  },
  {
    id: "traditional",
    title: "Traditional Collection",
    description: "Rajasthani meenakari, kundan and polki jewellery — the art of royal heritage.",
    category: "traditional",
    coverImage: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=800&q=80",
    itemCount: 70,
    featured: true
  },
  {
    id: "mens-collection",
    title: "Men's Collection",
    description: "Bold gold chains, kadas, rings and bracelets designed for the modern man.",
    category: "mens",
    coverImage: "https://images.unsplash.com/photo-1617038220319-276d3cfab638?w=800&q=80",
    itemCount: 40,
    featured: false
  },
  {
    id: "exclusive",
    title: "Exclusive Collection",
    description: "Limited edition, one-of-a-kind masterpieces for discerning connoisseurs.",
    category: "exclusive",
    coverImage: "https://images.unsplash.com/photo-1610375461246-83df859d849d?w=800&q=80",
    itemCount: 25,
    featured: true
  }
];

export const CATALOGUE_ITEMS: JewelleryItem[] = [
  {
    id: "g001",
    name: "Royal Kundan Necklace Set",
    category: "gold",
    subcategory: "Necklace",
    description: "22K gold kundan necklace with matching earrings. Traditional Rajasthani craftsmanship with emerald and ruby accents.",
    purity: "22K BIS Hallmarked",
    weight: "45g approx.",
    photo: "https://images.unsplash.com/photo-1602173574767-37ac01994b2a?w=600&q=80",
    featured: true,
    displayOrder: 1,
    status: "active"
  },
  {
    id: "g002",
    name: "Diamond Solitaire Pendant",
    category: "diamond",
    subcategory: "Pendant",
    description: "GIA certified 0.5ct F-VS1 solitaire diamond pendant in 18K white gold setting.",
    purity: "18K White Gold",
    weight: "4.2g",
    photo: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=600&q=80",
    featured: true,
    displayOrder: 2,
    status: "active"
  },
  {
    id: "g003",
    name: "Bridal Polki Set",
    category: "bridal",
    subcategory: "Complete Set",
    description: "Complete 7-piece bridal set — necklace, earrings, maang tikka, nath, bangles, kamarband and haath phool in 22K gold with uncut polki diamonds.",
    purity: "22K BIS Hallmarked",
    weight: "120g approx.",
    photo: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=600&q=80",
    featured: true,
    displayOrder: 3,
    status: "active"
  },
  {
    id: "g004",
    name: "Gold Bangles — Set of 12",
    category: "gold",
    subcategory: "Bangles",
    description: "Traditional 22K gold bangles with intricate meenakari work. Set of 12 bangles (size 2.6).",
    purity: "22K BIS Hallmarked",
    weight: "60g approx.",
    photo: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=600&q=80",
    featured: true,
    displayOrder: 4,
    status: "active"
  },
  {
    id: "g005",
    name: "Men's Gold Chain",
    category: "mens",
    subcategory: "Chain",
    description: "Bold 22K gold Franco chain for the modern gentleman. Available in 20\", 22\", 24\" length.",
    purity: "22K BIS Hallmarked",
    weight: "20g",
    photo: "https://images.unsplash.com/photo-1617038220319-276d3cfab638?w=600&q=80",
    featured: false,
    displayOrder: 5,
    status: "active"
  },
  {
    id: "g006",
    name: "Silver Payal — Anklet Pair",
    category: "silver",
    subcategory: "Anklet",
    description: "Pure 925 silver ghungroo payal, traditionally handcrafted with intricate patterns.",
    purity: "925 Silver",
    weight: "50g pair",
    photo: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=600&q=80",
    featured: false,
    displayOrder: 6,
    status: "active"
  },
  {
    id: "g007",
    name: "Diamond Stud Earrings",
    category: "diamond",
    subcategory: "Earrings",
    description: "Matching pair of GIA certified diamond studs, 0.3ct each, F-VS2, 18K gold settings.",
    purity: "18K Yellow Gold",
    weight: "3.8g pair",
    photo: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=600&q=80",
    featured: true,
    displayOrder: 7,
    status: "active"
  },
  {
    id: "g008",
    name: "Exclusive Jadau Necklace",
    category: "exclusive",
    subcategory: "Necklace",
    description: "One-of-a-kind jadau necklace with Columbian emeralds and Burmese rubies in 24K gold jadau setting. Certificate of authenticity included.",
    purity: "24K Jadau Gold",
    weight: "85g approx.",
    photo: "https://images.unsplash.com/photo-1610375461246-83df859d849d?w=600&q=80",
    featured: true,
    displayOrder: 8,
    status: "active"
  }
];

export const CATEGORY_CHIPS = [
  { label: "Gold Jewellery", hindi: "सोने के आभूषण", href: "#catalogue" },
  { label: "Diamond", hindi: "हीरे", href: "#catalogue" },
  { label: "Bridal", hindi: "ब्राइडल", href: "#catalogue" },
  { label: "Silver", hindi: "चांदी", href: "#catalogue" },
  { label: "Traditional", hindi: "पारंपरिक", href: "#catalogue" },
  { label: "Men's", hindi: "पुरुष", href: "#catalogue" },
  { label: "Exclusive", hindi: "विशेष", href: "#catalogue" }
];

export const TRUST_SIGNALS = [
  { label: "BIS Hallmarked", desc: "All gold certified" },
  { label: "40+ Years", desc: "Of trusted legacy" },
  { label: "GIA Certified", desc: "Diamonds graded" },
  { label: "Expert Craftsmen", desc: "Master karigar" }
];

export const TESTIMONIALS = [
  {
    name: "Priya Sharma",
    city: "Jaipur",
    text: "Gaytri Gold crafted my entire bridal set. The polki work was breathtaking — every piece was exactly what I dreamed of. Our whole family was amazed."
  },
  {
    name: "Rajesh Agarwal",
    city: "Bhilwara",
    city_local: true as const,
    text: "Bought a diamond solitaire for my wife's anniversary. The certification, the transparency in pricing, and the craftsmanship — truly unmatched in Mewar."
  },
  {
    name: "Sunita Kothari",
    city: "Udaipur",
    text: "The kundan necklace I ordered was a masterpiece. Genuine stones, perfect finish, and the service felt like dealing with family. I trust only Gaytri Gold."
  },
  {
    name: "Vikram Singhvi",
    city: "Bhilwara",
    city_local: true as const,
    text: "From traditional to modern, they have it all. Their 22K gold bangles for my daughter's engagement were the most praised jewellery at the event."
  }
];

export const WHYUS = [
  {
    icon: "🏅",
    title: "BIS Hallmarked Purity",
    desc: "Every piece of gold jewellery carries BIS hallmark certification — your guarantee of purity."
  },
  {
    icon: "💎",
    title: "GIA Certified Diamonds",
    desc: "All diamonds sold with internationally recognized GIA grading certificates."
  },
  {
    icon: "🎨",
    title: "Master Karigar Craftsmanship",
    desc: "Third generation artisans with 40+ years of expertise in Rajasthani jewellery traditions."
  },
  {
    icon: "🔄",
    title: "Transparent Exchange Policy",
    desc: "Fair buyback and exchange on all gold and diamond jewellery at live market rates."
  },
  {
    icon: "📐",
    title: "Custom Design Studio",
    desc: "Bring your design or work with our in-house designers to create your dream piece."
  },
  {
    icon: "🛡️",
    title: "After-Sale Service",
    desc: "Free cleaning and servicing for life. We stand behind every jewel we sell."
  }
];

// Gold & Silver rates — fallback values (auto-updated daily via API)
export const DEFAULT_RATES = {
  gold22k: 6850,
  gold24k: 7480,
  silver: 92,
  updatedAt: "Loading..."
};
