"use client";
import { motion } from "framer-motion";
import { ArrowRight, MessageCircle, ShieldCheck, Sparkles, Star } from "lucide-react";
import { GEMSTONES, waLink } from "@/lib/data";
import SmartImage from "./SmartImage";

const easing = [0.2, 0.8, 0.2, 1] as const;

export default function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden section-dark pt-32 md:pt-36"
    >
      <div className="absolute inset-0 hero-glow pointer-events-none" />
      <div className="absolute inset-0 noise" />

      <div className="container-luxe relative z-10 grid items-center gap-14 pb-28 md:grid-cols-12 md:pb-36">
        {/* Copy column */}
        <div className="md:col-span-7">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: easing }}
            className="eyebrow mb-8"
          >
            Est. in Mewar · Trusted Since Generations
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: easing, delay: 0.08 }}
            className="heading-display text-[44px] leading-[1.02] sm:text-6xl md:text-[78px] md:leading-[1.0]"
          >
            <span className="text-ivory-50/95">The House of</span>
            <br />
            <span className="shimmer-text">Sacred Gemstones</span>
            <br />
            <span className="text-ivory-50/95 italic font-extralight">&amp; Spiritual Wisdom</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: easing, delay: 0.22 }}
            className="mt-8 max-w-xl text-[15px] leading-[1.8] text-ivory-200/70 sm:text-[16px]"
          >
            Certified natural Navratna, energised Yantras, sacred Rudraksha and Parad —
            handpicked from the world&apos;s finest origins and consecrated on auspicious
            muhurat in the heart of Bhilwara.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: easing, delay: 0.36 }}
            className="mt-10 flex flex-wrap items-center gap-4"
          >
            <a href="#gemstones" className="btn-gold group">
              Explore the Collection
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </a>
            <a
              href={waLink("Namaste, I would like a gemstone consultation.")}
              target="_blank"
              rel="noreferrer"
              className="btn-ghost-dark"
            >
              <MessageCircle className="h-4 w-4" /> Private Consultation
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, ease: easing, delay: 0.55 }}
            className="mt-14 flex flex-wrap items-center gap-x-10 gap-y-4 text-[11px] uppercase tracking-[0.28em] text-ivory-200/55"
          >
            {[
              { icon: <ShieldCheck className="h-3.5 w-3.5" />, label: "Lab Certified" },
              { icon: <Sparkles className="h-3.5 w-3.5" />, label: "Muhurat Energised" },
              { icon: <Star className="h-3.5 w-3.5" />, label: "Expert Guided" }
            ].map((t) => (
              <div key={t.label} className="flex items-center gap-2.5">
                <span className="text-champagne">{t.icon}</span>
                {t.label}
              </div>
            ))}
          </motion.div>
        </div>

        {/* Centerpiece */}
        <div className="md:col-span-5">
          <HeroCenterpiece />
        </div>
      </div>
    </section>
  );
}

function HeroCenterpiece() {
  const ruby = GEMSTONES.find((g) => g.name === "Ruby")!;
  const emerald = GEMSTONES.find((g) => g.name === "Emerald")!;
  const sapphire = GEMSTONES.find((g) => g.name === "Blue Sapphire")!;
  const pearl = GEMSTONES.find((g) => g.name === "Pearl")!;

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.94 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1.2, ease: easing, delay: 0.2 }}
      className="relative mx-auto aspect-square w-full max-w-[480px]"
    >
      {/* Ambient luxe glow */}
      <div
        className="absolute inset-0 -m-12 rounded-full opacity-80 blur-3xl"
        style={{
          background:
            "radial-gradient(50% 50% at 50% 50%, rgba(232,201,138,0.35), transparent 70%)"
        }}
      />

      {/* Outer gold ornamental ring */}
      <div className="absolute inset-6 rounded-full border border-champagne/20" />
      <div className="absolute inset-2 rounded-full border border-champagne/10" />

      {/* Centerpiece gem */}
      <div className="absolute inset-[18%] orb-ring overflow-hidden">
        <SmartImage
          src={ruby.photo}
          alt={ruby.name}
          className="h-full w-full object-cover"
          fallback={
            <div
              className="gem-orb orb-breath h-full w-full"
              style={
                {
                  ["--orb-a" as any]: ruby.orbA,
                  ["--orb-b" as any]: ruby.orbB,
                  ["--orb-glow" as any]: ruby.orbGlow,
                  width: "100%",
                  height: "100%"
                } as React.CSSProperties
              }
            />
          }
        />
      </div>

      {/* Floating satellite gems */}
      <FloatingGem gem={emerald} className="absolute left-0 top-[20%]" delay={0} />
      <FloatingGem gem={sapphire} className="absolute right-0 top-[8%]" delay={0.4} />
      <FloatingGem gem={pearl} className="absolute right-[6%] bottom-[8%]" delay={0.8} />
    </motion.div>
  );
}

function FloatingGem({
  gem,
  className,
  delay
}: {
  gem: { name: string; hindi: string; photo: string; orbA: string; orbB: string; orbGlow: string };
  className?: string;
  delay: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: easing, delay: 0.6 + delay }}
      className={`hidden md:block ${className}`}
    >
      <motion.div
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 6 + delay * 2, repeat: Infinity, ease: "easeInOut", delay }}
        className="flex flex-col items-center gap-2"
      >
        <div className="orb-ring h-[72px] w-[72px] overflow-hidden">
          <SmartImage
            src={gem.photo}
            alt={gem.name}
            className="h-full w-full object-cover"
            fallback={
              <div
                className="gem-orb h-full w-full"
                style={
                  {
                    ["--orb-a" as any]: gem.orbA,
                    ["--orb-b" as any]: gem.orbB,
                    ["--orb-glow" as any]: gem.orbGlow
                  } as React.CSSProperties
                }
              />
            }
          />
        </div>
        <div className="text-center">
          <div className="heading-display text-[13px] text-champagne-soft">
            {gem.hindi.split(" · ")[0]}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
