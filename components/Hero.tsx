"use client";
import { motion } from "framer-motion";
import { ArrowRight, MessageCircle, ShieldCheck, Award, Star } from "lucide-react";
import { waLink } from "@/lib/data";

const ease = [0.16, 1, 0.3, 1] as const;

const HERO_IMAGES = [
  {
    src: "https://images.unsplash.com/photo-1601121141461-9d6647bef0a2?w=700&q=85",
    label: "Kundan Necklace"
  },
  {
    src: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=700&q=85",
    label: "Diamond Collection"
  },
  {
    src: "https://images.unsplash.com/photo-1573408301185-9519f94f3b58?w=700&q=85",
    label: "Bridal Sets"
  }
];

export default function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden pt-12 pb-0 md:pt-16 md:pb-0"
      style={{
        background:
          "linear-gradient(180deg, var(--cream-50) 0%, var(--cream-100) 70%, var(--cream-200) 100%)"
      }}
    >
      {/* Ambient glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-[5%] right-[8%] h-[700px] w-[700px] rounded-full"
          style={{
            background: "radial-gradient(circle, rgba(201,165,90,0.14) 0%, transparent 65%)",
            filter: "blur(60px)"
          }}
        />
        <div
          className="absolute bottom-[10%] -left-[8%] h-[400px] w-[400px] rounded-full"
          style={{
            background: "radial-gradient(circle, rgba(201,165,90,0.07) 0%, transparent 65%)",
            filter: "blur(40px)"
          }}
        />
      </div>

      <div className="container-luxe relative z-10">
        <div className="grid items-center gap-12 md:grid-cols-12 md:gap-8 min-h-[calc(100vh-100px)]">
          {/* Copy Column */}
          <div className="md:col-span-6 lg:col-span-5 flex flex-col justify-center">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease, delay: 0.1 }}
              className="eyebrow mb-8"
            >
              Est. 1985 · Bhilwara, Rajasthan
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 32 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.3, ease, delay: 0.15 }}
              className="heading-display"
              style={{ lineHeight: 1.02 }}
            >
              <span
                className="block text-[clamp(38px,7vw,76px)] font-extralight"
                style={{ letterSpacing: "-0.025em", color: "var(--charcoal-800)" }}
              >
                The House of
              </span>
              <span
                className="block mt-1 text-[clamp(44px,9vw,96px)] shimmer-text font-light"
                style={{ letterSpacing: "-0.03em" }}
              >
                Gaytri Gold
              </span>
              <span
                className="block mt-2 text-[clamp(22px,4vw,42px)] italic font-extralight"
                style={{ letterSpacing: "-0.01em", color: "var(--charcoal-500)" }}
              >
                &amp; Fine Jewellery
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.1, ease, delay: 0.35 }}
              className="mt-9 max-w-lg text-[15px] leading-[1.9] sm:text-[16px]"
              style={{ fontWeight: 300, color: "var(--charcoal-500)" }}
            >
              BIS Hallmarked gold jewellery, GIA certified diamonds, and heirloom-quality bridal
              sets — handcrafted by master karigars with 40+ years of artisan excellence in
              Rajasthan.
            </motion.p>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease, delay: 0.5 }}
              className="mt-10 flex flex-wrap items-center gap-5"
            >
              <a href="#catalogue" className="btn-gold group">
                Explore Collections
                <ArrowRight className="h-4 w-4 transition-transform duration-500 group-hover:translate-x-1" />
              </a>
              <a
                href={waLink("Namaste, I would like to enquire about jewellery at Gaytri Gold.")}
                target="_blank"
                rel="noreferrer"
                className="btn-ghost"
              >
                <MessageCircle className="h-4 w-4" /> WhatsApp Us
              </a>
            </motion.div>

            {/* Trust Signals */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1.2, ease, delay: 0.7 }}
              className="mt-14 flex flex-wrap items-center gap-x-10 gap-y-5"
            >
              {[
                { icon: <ShieldCheck className="h-3.5 w-3.5" />, label: "BIS Hallmarked" },
                { icon: <Award className="h-3.5 w-3.5" />, label: "GIA Certified" },
                { icon: <Star className="h-3.5 w-3.5" />, label: "40+ Year Legacy" }
              ].map((t) => (
                <div
                  key={t.label}
                  className="flex items-center gap-3 text-[10px] uppercase"
                  style={{ letterSpacing: "0.32em", color: "var(--charcoal-500)" }}
                >
                  <span style={{ color: "var(--gold-accent)" }}>{t.icon}</span>
                  {t.label}
                </div>
              ))}
            </motion.div>
          </div>

          {/* Jewellery Image Showcase */}
          <div className="md:col-span-6 lg:col-span-7">
            <JewelleryShowcase />
          </div>
        </div>

        {/* Bottom fade */}
        <div
          className="relative mt-8 h-20 md:h-28"
          style={{
            background: "linear-gradient(to bottom, transparent, var(--cream-100))"
          }}
        />
      </div>
    </section>
  );
}

function JewelleryShowcase() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.94 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1.6, ease, delay: 0.2 }}
      className="relative"
    >
      {/* Main hero image */}
      <div className="relative">
        {/* Ambient glow behind image */}
        <div
          className="absolute -inset-4 rounded-3xl opacity-40"
          style={{
            background: "radial-gradient(ellipse at center, rgba(201,165,90,0.2) 0%, transparent 70%)",
            filter: "blur(20px)"
          }}
        />

        {/* Primary large image */}
        <motion.div
          className="relative overflow-hidden rounded-3xl"
          style={{
            border: "1px solid rgba(176,141,74,0.15)",
            boxShadow: "0 40px 100px -30px rgba(26,22,18,0.18), 0 0 0 1px rgba(176,141,74,0.1)"
          }}
          whileHover={{ scale: 1.01 }}
          transition={{ duration: 0.8, ease }}
        >
          <img
            src="https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=900&q=85"
            alt="Bridal Gold Jewellery Collection — Gaytri Gold"
            crossOrigin="anonymous"
            referrerPolicy="no-referrer"
            className="w-full object-cover"
            style={{ height: "clamp(300px, 45vw, 520px)", display: "block" }}
          />
          {/* Premium overlay gradient */}
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(to top, rgba(26,20,16,0.5) 0%, transparent 50%), linear-gradient(to right, rgba(26,20,16,0.1) 0%, transparent 40%)"
            }}
          />
          {/* Image caption badge */}
          <div
            className="absolute bottom-5 left-5 rounded-full px-4 py-2"
            style={{
              background: "rgba(26,20,16,0.7)",
              backdropFilter: "blur(12px)",
              border: "1px solid rgba(176,141,74,0.3)"
            }}
          >
            <span className="text-[11px]" style={{ color: "var(--gold-light)", letterSpacing: "0.1em" }}>
              ✦ Bridal Collection 2025
            </span>
          </div>
        </motion.div>

        {/* Floating mini cards */}
        <motion.div
          initial={{ opacity: 0, x: 20, y: -10 }}
          animate={{ opacity: 1, x: 0, y: 0 }}
          transition={{ duration: 1.2, ease, delay: 0.9 }}
          className="absolute -right-4 top-8 hidden md:block"
        >
          <div
            className="overflow-hidden rounded-2xl"
            style={{
              width: 140,
              border: "1px solid rgba(176,141,74,0.2)",
              boxShadow: "0 20px 50px -15px rgba(26,22,18,0.2)"
            }}
          >
            <img
              src="https://images.unsplash.com/photo-1602173574767-37ac01994b2a?w=300&q=80"
              alt="Kundan Necklace"
              crossOrigin="anonymous"
              referrerPolicy="no-referrer"
              className="w-full object-cover"
              style={{ height: 110 }}
            />
            <div
              className="px-3 py-2.5"
              style={{ background: "rgba(253,251,247,0.95)" }}
            >
              <div className="text-[9px] uppercase" style={{ letterSpacing: "0.3em", color: "var(--gold-accent)" }}>
                Kundan
              </div>
              <div className="heading-display text-[12px] mt-0.5" style={{ color: "var(--charcoal-800)" }}>
                Necklace Set
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: -20, y: 20 }}
          animate={{ opacity: 1, x: 0, y: 0 }}
          transition={{ duration: 1.2, ease, delay: 1.1 }}
          className="absolute -left-4 -bottom-4 hidden md:block"
        >
          <div
            className="overflow-hidden rounded-2xl"
            style={{
              width: 130,
              border: "1px solid rgba(176,141,74,0.2)",
              boxShadow: "0 20px 50px -15px rgba(26,22,18,0.2)"
            }}
          >
            <img
              src="https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=300&q=80"
              alt="Diamond Collection"
              crossOrigin="anonymous"
              referrerPolicy="no-referrer"
              className="w-full object-cover"
              style={{ height: 100 }}
            />
            <div
              className="px-3 py-2.5"
              style={{ background: "rgba(253,251,247,0.95)" }}
            >
              <div className="text-[9px] uppercase" style={{ letterSpacing: "0.3em", color: "var(--gold-accent)" }}>
                Diamond
              </div>
              <div className="heading-display text-[12px] mt-0.5" style={{ color: "var(--charcoal-800)" }}>
                GIA Certified
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Decorative gold ring */}
      <div
        className="absolute -inset-6 rounded-3xl -z-10 hidden lg:block"
        style={{
          border: "1px solid rgba(176,141,74,0.08)",
          animation: "spin 60s linear infinite"
        }}
      />
    </motion.div>
  );
}
