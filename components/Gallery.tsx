"use client";
import { motion } from "framer-motion";
import { SectionHeader } from "./Gemstones";
import { GEMSTONES } from "@/lib/data";
import SmartImage from "./SmartImage";

const easing = [0.2, 0.8, 0.2, 1] as const;

const tiles = [
  { title: "Navratna Display", caption: "Nine planetary stones", span: "md:col-span-2 md:row-span-2", gemIndex: 3 },
  { title: "Kashmiri Neelam", caption: "Royal blue · rarest origin", span: "", gemIndex: 0 },
  { title: "Burma Manik", caption: "Pigeon blood · vibrant red", span: "", gemIndex: 3 },
  { title: "Colombian Panna", caption: "Velvet emerald green", span: "md:col-span-2", gemIndex: 2 },
  { title: "Basra Moti", caption: "Lustrous natural pearl", span: "", gemIndex: 4 },
  { title: "Certified Heera", caption: "Lab-verified clarity", span: "", gemIndex: 8 }
];

export default function Gallery() {
  return (
    <section className="relative py-28 sm:py-32">
      <div className="container-luxe">
        <SectionHeader
          eyebrow="The Showcase · चयनित संग्रह"
          title={<>A Glimpse of the <span className="text-gold">Vault</span></>}
          subtitle="Hand-selected pieces from our finest origins — every gem photographed from the heart of the collection."
        />

        <div className="mt-16 grid auto-rows-[200px] grid-cols-2 gap-5 sm:auto-rows-[220px] md:grid-cols-4">
          {tiles.map((t, i) => {
            const g = GEMSTONES[t.gemIndex];
            return (
              <motion.div
                key={t.title}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.8, ease: easing, delay: (i % 4) * 0.08 }}
                className={`group relative overflow-hidden rounded-2xl border border-champagne/15 ${t.span}`}
                style={{
                  background:
                    "radial-gradient(140% 90% at 50% -10%, rgba(232,201,138,0.10), transparent 60%), linear-gradient(180deg, #15101e 0%, #0b0810 100%)"
                }}
              >
                {/* gem visual */}
                <div className="absolute inset-0 grid place-items-center">
                  <div
                    className="aspect-square w-[55%] overflow-hidden rounded-full transition-transform duration-700 group-hover:scale-110"
                    style={
                      {
                        ["--orb-a" as any]: g.orbA,
                        ["--orb-b" as any]: g.orbB,
                        ["--orb-glow" as any]: g.orbGlow
                      } as React.CSSProperties
                    }
                  >
                    <SmartImage
                      src={g.photo}
                      alt={g.name}
                      className="h-full w-full object-cover"
                      fallback={<div className="gem-orb h-full w-full" />}
                    />
                  </div>
                </div>

                {/* bottom gradient */}
                <div className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-ink-950/90 via-ink-950/40 to-transparent" />

                {/* caption */}
                <div className="absolute bottom-0 left-0 right-0 p-5">
                  <div className="text-[10px] uppercase tracking-[0.3em] text-champagne/80">
                    {t.caption}
                  </div>
                  <div className="mt-1 heading-display text-xl text-ivory-50">
                    {t.title}
                  </div>
                </div>

                {/* gold corner */}
                <div className="absolute right-4 top-4 h-6 w-6 border-r border-t border-champagne/40 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
