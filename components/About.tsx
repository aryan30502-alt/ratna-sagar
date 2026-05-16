"use client";
import { motion } from "framer-motion";
import { MessageCircle, MapPin } from "lucide-react";
import { BRAND, GEMSTONES, waLink } from "@/lib/data";
import SmartImage from "./SmartImage";

const easing = [0.2, 0.8, 0.2, 1] as const;

export default function About() {
  const ruby = GEMSTONES.find((g) => g.name === "Ruby")!;
  return (
    <section id="about" className="relative py-24 sm:py-28">
      <div className="container-luxe grid items-center gap-12 md:grid-cols-12">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: easing }}
          className="md:col-span-5"
        >
          <div className="relative mx-auto aspect-[4/5] w-full max-w-md overflow-hidden rounded-3xl border border-champagne/25">
            <div
              className="absolute inset-0"
              style={{
                background:
                  "radial-gradient(60% 60% at 50% 30%, rgba(232,201,138,0.35), transparent 70%), radial-gradient(70% 70% at 80% 90%, rgba(122,26,44,0.45), transparent 70%), linear-gradient(180deg, #15101e 0%, #0b0810 60%, #07050a 100%)"
              }}
            />
            {/* Decorative mandala */}
            <div className="absolute inset-0 grid place-items-center">
              <div className="relative h-[78%] w-[78%]">
                <div className="absolute inset-0 animate-[spin_70s_linear_infinite] rounded-full border border-champagne/20" />
                <div className="absolute inset-6 animate-[spin_50s_linear_infinite_reverse] rounded-full border border-champagne/25" />
                <div className="absolute inset-14 animate-[spin_35s_linear_infinite] rounded-full border border-champagne/35" />
                <div className="absolute inset-[22%] overflow-hidden rounded-full">
                  <SmartImage
                    src={ruby.photo}
                    alt={ruby.name}
                    className="h-full w-full object-cover animate-float"
                    fallback={
                      <div
                        className="h-full w-full gem-orb animate-float"
                        style={
                          {
                            ["--orb-a" as any]: "#f0d48a",
                            ["--orb-b" as any]: "#5a3c10",
                            ["--orb-glow" as any]: "rgba(240,212,138,0.55)"
                          } as React.CSSProperties
                        }
                      />
                    }
                  />
                </div>
              </div>
            </div>
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-ink-950/95 via-ink-950/60 to-transparent p-6">
              <div className="flex items-center gap-2 text-champagne-soft">
                <MapPin className="h-4 w-4" />
                <span className="text-[11px] uppercase tracking-[0.32em]">{BRAND.city}</span>
              </div>
              <div className="mt-2 heading-display text-2xl text-ivory-50">
                A heritage forged in faith.
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: easing, delay: 0.1 }}
          className="md:col-span-7"
        >
          <div className="eyebrow">Our Heritage</div>
          <h2 className="mt-6 heading-display text-4xl leading-[1.05] text-ivory-50 sm:text-5xl md:text-[52px]">
            From the spiritual heart of <span className="text-gold">Mewar</span>, a name devoted to authenticity.
          </h2>
          <p className="mt-7 text-[15.5px] leading-[1.85] text-ivory-200/70">
            Ratna Sagar began as a quiet promise in Bhilwara — to bring families only the most
            genuine gemstones, sacred Rudraksha and energised spiritual products. Two
            generations later, that promise still guides every recommendation we make.
          </p>
          <p className="mt-4 text-[15.5px] leading-[1.85] text-ivory-200/70">
            We believe a gemstone is not merely a stone — it is a relationship between you,
            your stars and the universe. Our role is to ensure that relationship begins on a
            foundation of purity, authenticity and devotion.
          </p>

          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            {[
              { k: "Est.", v: "Two Generations" },
              { k: "Origin", v: "Bhilwara, Mewar" },
              { k: "Promise", v: "Authenticity First" }
            ].map((b) => (
              <div key={b.k} className="rounded-2xl border border-champagne/15 bg-white/[0.03] p-5 backdrop-blur">
                <div className="text-[10px] uppercase tracking-[0.32em] text-champagne/80">{b.k}</div>
                <div className="mt-2 heading-display text-xl text-ivory-50">{b.v}</div>
              </div>
            ))}
          </div>

          <div className="mt-8">
            <a
              href={waLink("Namaste, I would like to know more about Ratna Sagar.")}
              target="_blank"
              rel="noreferrer"
              className="btn-gold"
            >
              <MessageCircle className="h-4 w-4" /> Speak with our Expert
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
