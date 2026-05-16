"use client";
import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";
import { GEMSTONES, waLink } from "@/lib/data";
import SmartImage from "./SmartImage";

const easing = [0.2, 0.8, 0.2, 1] as const;

export default function Gemstones() {
  return (
    <section id="gemstones" className="relative py-28 sm:py-32">
      <div className="container-luxe">
        <SectionHeader
          eyebrow="नवरत्न · The Nine Sacred Stones"
          title={<>The <span className="text-gold">Navratna</span> Collection</>}
          subtitle="Nine planetary gemstones — each natural, lab-certified and offered across the world's most revered origins. From Kashmiri Neelam to Burma Manik and Basra Moti."
        />

        <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {GEMSTONES.map((g, i) => (
            <motion.article
              key={g.name}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.8, ease: easing, delay: (i % 3) * 0.1 }}
              className="gem-card group p-7 sm:p-8"
            >
              {/* Top: gem + name */}
              <div className="relative flex flex-col items-center text-center">
                <div className="orb-ring h-28 w-28 sm:h-32 sm:w-32 overflow-hidden transition-transform duration-700 group-hover:scale-105">
                  <SmartImage
                    src={g.photo}
                    alt={g.name}
                    className="h-full w-full object-cover"
                    fallback={
                      <div
                        className="gem-orb h-full w-full"
                        style={
                          {
                            ["--orb-a" as any]: g.orbA,
                            ["--orb-b" as any]: g.orbB,
                            ["--orb-glow" as any]: g.orbGlow
                          } as React.CSSProperties
                        }
                      />
                    }
                  />
                </div>
                <div className="mt-6 text-[10px] uppercase tracking-[0.32em] text-champagne/80">
                  {g.planet}
                </div>
                <h3 className="mt-2 heading-display text-3xl text-ivory-50">
                  {g.name}
                </h3>
                <div className="heading-display text-lg text-champagne-soft">{g.hindi}</div>
              </div>

              <div className="divider-gold my-7" />

              <p className="text-[14.5px] leading-[1.75] text-ivory-200/70 text-center">
                {g.benefit}
              </p>

              <div className="mt-7">
                <div className="text-[10px] uppercase tracking-[0.3em] text-champagne/70 text-center">
                  Available Origins
                </div>
                <div className="mt-3 flex flex-wrap justify-center gap-1.5">
                  {g.origins.map((o) => (
                    <span
                      key={o}
                      className="rounded-full border border-champagne/25 bg-white/[0.03] px-2.5 py-1 text-[10.5px] tracking-wide text-ivory-200/85"
                    >
                      {o}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-3 flex flex-wrap justify-center gap-1.5">
                {g.zodiac.map((z) => (
                  <span
                    key={z}
                    className="rounded-full bg-wine-900/40 border border-wine-400/20 px-2.5 py-1 text-[10px] uppercase tracking-[0.22em] text-champagne-soft/90"
                  >
                    {z}
                  </span>
                ))}
              </div>

              <a
                href={waLink(`I would like to enquire about ${g.name} (${g.hindi}).`)}
                target="_blank"
                rel="noreferrer"
                className="mt-8 flex items-center justify-center gap-2 text-sm font-medium text-champagne-soft transition-all hover:gap-3 hover:text-white"
              >
                <MessageCircle className="h-4 w-4" /> Enquire on WhatsApp
              </a>

              {/* hover glow */}
              <div
                className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-700 group-hover:opacity-100"
                style={{ boxShadow: `inset 0 0 100px -40px ${g.orbGlow}` }}
              />
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function SectionHeader({
  eyebrow,
  title,
  subtitle,
  dark
}: {
  eyebrow: string;
  title: React.ReactNode;
  subtitle?: string;
  dark?: boolean;
}) {
  return (
    <div className="mx-auto max-w-3xl text-center">
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: easing }}
        className="eyebrow"
      >
        {eyebrow}
      </motion.div>
      <motion.h2
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.9, ease: easing, delay: 0.06 }}
        className="mt-6 heading-display text-4xl leading-[1.05] text-ivory-50 sm:text-5xl md:text-[56px]"
      >
        {title}
      </motion.h2>
      {subtitle && (
        <motion.p
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: easing, delay: 0.14 }}
          className="mx-auto mt-6 max-w-2xl text-[15.5px] leading-[1.8] text-ivory-200/65"
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  );
}
