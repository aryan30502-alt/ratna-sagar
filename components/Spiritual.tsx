"use client";
import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";
import { SPIRITUAL, waLink } from "@/lib/data";
import { SectionHeader } from "./Gemstones";

const easing = [0.2, 0.8, 0.2, 1] as const;

// Distinct accent tints per category — keeps cards feeling varied yet cohesive
const tints = [
  { a: "rgba(232,201,138,0.18)", b: "rgba(232,201,138,0.04)" }, // sphatik – crystal gold
  { a: "rgba(76,217,164,0.18)", b: "rgba(76,217,164,0.03)" }, // marakat – emerald
  { a: "rgba(180,210,230,0.18)", b: "rgba(180,210,230,0.03)" }, // parad – silver-blue
  { a: "rgba(232,201,138,0.22)", b: "rgba(232,201,138,0.04)" }, // yantra – gold
  { a: "rgba(214,80,90,0.18)", b: "rgba(214,80,90,0.03)" }, // kavach – wine
  { a: "rgba(245,196,83,0.18)", b: "rgba(245,196,83,0.03)" }, // sampurna – saffron
  { a: "rgba(180,140,90,0.18)", b: "rgba(180,140,90,0.03)" }, // vastu – earth
  { a: "rgba(120,140,180,0.18)", b: "rgba(120,140,180,0.03)" }, // shani – indigo
  { a: "rgba(232,201,138,0.18)", b: "rgba(232,201,138,0.03)" }, // siddh – champagne
  { a: "rgba(180,80,40,0.18)", b: "rgba(180,80,40,0.03)" }, // rudraksha – terracotta
  { a: "rgba(214,80,90,0.16)", b: "rgba(214,80,90,0.03)" }, // mala – rose
  { a: "rgba(245,228,180,0.20)", b: "rgba(245,228,180,0.03)" }, // shankh – pearl
  { a: "rgba(255,150,80,0.18)", b: "rgba(255,150,80,0.03)" } // puja – flame
];

export default function Spiritual() {
  return (
    <section id="spiritual" className="relative overflow-hidden py-28 sm:py-32">
      <div className="absolute inset-0 section-pattern opacity-50" />
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(800px 500px at 80% 0%, rgba(232,201,138,0.10), transparent 65%), radial-gradient(700px 500px at 10% 100%, rgba(122,26,44,0.12), transparent 65%)"
        }}
      />
      <div className="container-luxe relative">
        <SectionHeader
          eyebrow="रत्न सागर ग्रंथालय · The Sacred Catalogue"
          title={<>Sacred <span className="text-gold">Spiritual</span> Articles</>}
          subtitle="From Sphatik idols and Parad shivlings to energised Yantras, protective Kavach and authentic Rudraksha — every piece consecrated on auspicious muhurat."
        />

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {SPIRITUAL.map((s, i) => {
            const t = tints[i % tints.length];
            return (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-70px" }}
                transition={{ duration: 0.8, ease: easing, delay: (i % 3) * 0.08 }}
                className="gem-card group p-8"
              >
                {/* Tint glow accent */}
                <div
                  className="pointer-events-none absolute inset-0 opacity-60 transition-opacity duration-700 group-hover:opacity-100"
                  style={{
                    background: `radial-gradient(120% 80% at 50% -10%, ${t.a}, ${t.b} 65%, transparent 80%)`
                  }}
                />

                <div className="relative">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] uppercase tracking-[0.32em] text-champagne/70">
                      {String(i + 1).padStart(2, "0")} · Collection
                    </span>
                    <span className="heading-display text-3xl text-champagne/40">
                      {s.symbol}
                    </span>
                  </div>

                  <div className="mt-6 heading-display text-[15px] text-champagne-soft">
                    {s.hindi}
                  </div>
                  <h3 className="mt-1 heading-display text-[26px] leading-tight text-ivory-50">
                    {s.title}
                  </h3>

                  <div className="divider-gold my-5" />

                  <p className="text-[14px] leading-[1.75] text-ivory-200/70">{s.desc}</p>

                  <ul className="mt-5 grid grid-cols-2 gap-x-3 gap-y-1.5">
                    {s.items.slice(0, 6).map((it) => (
                      <li
                        key={it}
                        className="flex items-start gap-2 text-[12.5px] leading-snug text-ivory-200/80"
                      >
                        <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-champagne" />
                        {it}
                      </li>
                    ))}
                  </ul>

                  <a
                    href={waLink(`I would like to know more about ${s.title}.`)}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-7 inline-flex items-center gap-1.5 text-[13px] font-medium text-champagne-soft transition-all hover:gap-2.5 hover:text-white"
                  >
                    Enquire <ChevronRight className="h-4 w-4" />
                  </a>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
