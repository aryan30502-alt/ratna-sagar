"use client";
import { motion } from "framer-motion";
import { ShieldCheck, BadgeCheck, Compass, Users, Crown, HeartHandshake } from "lucide-react";
import { SectionHeader } from "./Gemstones";

const easing = [0.2, 0.8, 0.2, 1] as const;

const pillars = [
  {
    icon: <ShieldCheck className="h-5 w-5" />,
    title: "Lab Certified",
    text: "Every stone backed by recognised gemological certification."
  },
  {
    icon: <BadgeCheck className="h-5 w-5" />,
    title: "100% Authentic",
    text: "Natural, untreated and ethically sourced gemstones only."
  },
  {
    icon: <Compass className="h-5 w-5" />,
    title: "Spiritual Expertise",
    text: "Guidance rooted in classical Jyotish and Vedic tradition."
  },
  {
    icon: <Users className="h-5 w-5" />,
    title: "Personalised Consultation",
    text: "Recommendations tailored to your kundli & life context."
  },
  {
    icon: <Crown className="h-5 w-5" />,
    title: "Trusted in Mewar",
    text: "A name families across Rajasthan have relied on for years."
  },
  {
    icon: <HeartHandshake className="h-5 w-5" />,
    title: "Lifetime Support",
    text: "Post-purchase guidance for wearing, energising and care."
  }
];

export default function WhyUs() {
  return (
    <section className="relative py-24 sm:py-28">
      <div className="container-luxe">
        <SectionHeader
          eyebrow="Why Ratna Sagar"
          title={<>Crafted on <span className="text-gold">Trust</span></>}
          subtitle="Six pillars that have made us Mewar's most preferred destination for genuine gemstones and spiritual products."
        />

        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {pillars.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.7, ease: easing, delay: (i % 3) * 0.07 }}
              className="group glass relative overflow-hidden rounded-2xl p-7"
            >
              <div className="flex items-center gap-3">
                <div className="grid h-11 w-11 place-items-center rounded-full bg-gold-gradient text-ink-950 shadow-[0_10px_24px_-8px_rgba(232,201,138,0.5)]">
                  {p.icon}
                </div>
                <h3 className="heading-display text-xl text-ivory-50">{p.title}</h3>
              </div>
              <p className="mt-5 text-[14px] leading-[1.75] text-ivory-200/70">{p.text}</p>
              <div className="pointer-events-none absolute -bottom-14 -right-14 h-44 w-44 rounded-full bg-gold-200/40 blur-3xl opacity-0 transition-opacity duration-700 group-hover:opacity-100" />
            </motion.div>
          ))}
        </div>

        {/* Stats strip */}
        <div className="mt-16 grid gap-3 rounded-3xl border border-champagne/15 p-8 sm:grid-cols-4" style={{background: "radial-gradient(120% 60% at 50% 0%, rgba(232,201,138,0.10), transparent 60%), linear-gradient(180deg, #15101e 0%, #0b0810 100%)"}}>
          {[
            { n: "25+", l: "Years of Heritage" },
            { n: "10,000+", l: "Happy Devotees" },
            { n: "500+", l: "Gem Varieties" },
            { n: "100%", l: "Certified Authentic" }
          ].map((s) => (
            <div key={s.l} className="text-center">
              <div className="heading-display text-[44px] text-gold">{s.n}</div>
              <div className="mt-1 text-[11px] uppercase tracking-[0.3em] text-champagne/70">
                {s.l}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
