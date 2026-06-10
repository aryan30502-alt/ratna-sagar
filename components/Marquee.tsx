"use client";
import { motion } from "framer-motion";

const MARQUEE_ITEMS = [
  "BIS Hallmarked Gold",
  "GIA Certified Diamonds",
  "22K & 24K Gold",
  "Custom Bridal Sets",
  "Polki Jewellery",
  "Kundan Collection",
  "Meenakari Art",
  "925 Silver",
  "40+ Year Legacy",
  "Free Lifetime Servicing",
  "Transparent Pricing",
  "Master Karigar Craftsmanship"
];

export default function Marquee() {
  return (
    <div
      className="relative overflow-hidden py-4"
      style={{
        background: "linear-gradient(135deg, var(--charcoal-900) 0%, #231c14 50%, var(--charcoal-900) 100%)",
        borderTop: "1px solid rgba(176,141,74,0.15)",
        borderBottom: "1px solid rgba(176,141,74,0.15)"
      }}
    >
      {/* Left fade */}
      <div
        className="absolute left-0 top-0 bottom-0 w-24 z-10 pointer-events-none"
        style={{
          background: "linear-gradient(to right, var(--charcoal-900), transparent)"
        }}
      />
      {/* Right fade */}
      <div
        className="absolute right-0 top-0 bottom-0 w-24 z-10 pointer-events-none"
        style={{
          background: "linear-gradient(to left, var(--charcoal-900), transparent)"
        }}
      />

      <motion.div
        animate={{ x: [0, -50 * MARQUEE_ITEMS.length] }}
        transition={{
          duration: MARQUEE_ITEMS.length * 3.5,
          repeat: Infinity,
          ease: "linear"
        }}
        className="flex items-center gap-0 whitespace-nowrap"
      >
        {[...MARQUEE_ITEMS, ...MARQUEE_ITEMS, ...MARQUEE_ITEMS].map((item, i) => (
          <div key={i} className="flex items-center">
            <span
              className="px-8 text-[11px] font-medium uppercase"
              style={{
                letterSpacing: "0.26em",
                color: "rgba(223,198,130,0.7)"
              }}
            >
              {item}
            </span>
            <span style={{ color: "rgba(176,141,74,0.4)", fontSize: "6px" }}>✦</span>
          </div>
        ))}
      </motion.div>
    </div>
  );
}
