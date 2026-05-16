"use client";
import { motion, AnimatePresence } from "framer-motion";
import { Quote, ChevronLeft, ChevronRight, Star } from "lucide-react";
import { useEffect, useState } from "react";
import { TESTIMONIALS } from "@/lib/data";
import { SectionHeader } from "./Gemstones";

const easing = [0.2, 0.8, 0.2, 1] as const;

export default function Testimonials() {
  const [i, setI] = useState(0);
  const next = () => setI((p) => (p + 1) % TESTIMONIALS.length);
  const prev = () => setI((p) => (p - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);

  useEffect(() => {
    const t = setInterval(next, 6000);
    return () => clearInterval(t);
  }, []);

  const t = TESTIMONIALS[i];

  return (
    <section className="relative py-24 sm:py-28">
      <div className="container-luxe">
        <SectionHeader
          eyebrow="Voices of Devotees"
          title={<>Stories of <span className="text-gold">Faith</span></>}
        />

        <div className="relative mx-auto mt-14 max-w-3xl">
          <div className="absolute -left-6 top-6 hidden sm:block">
            <Quote className="h-12 w-12 text-champagne/40" />
          </div>
          <AnimatePresence mode="wait">
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.6, ease: easing }}
              className="glass rounded-3xl px-7 py-10 sm:px-12 sm:py-14"
            >
              <div className="flex items-center gap-1 text-gold-500">
                {Array.from({ length: 5 }).map((_, k) => (
                  <Star key={k} className="h-4 w-4 fill-current" />
                ))}
              </div>
              <p className="mt-6 heading-display text-2xl leading-[1.45] text-ivory-50 sm:text-[28px]">
                “{t.text}”
              </p>
              <div className="mt-7 flex items-center gap-3">
                <div className="grid h-10 w-10 place-items-center rounded-full bg-gold-gradient text-ink-950 heading-display">
                  {t.name[0]}
                </div>
                <div>
                  <div className="text-sm font-medium text-ivory-50">{t.name}</div>
                  <div className="text-[11px] uppercase tracking-[0.28em] text-champagne/80">
                    {t.city}
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          <div className="mt-6 flex items-center justify-between">
            <div className="flex gap-2">
              {TESTIMONIALS.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setI(idx)}
                  aria-label={`Slide ${idx + 1}`}
                  className={`h-1.5 rounded-full transition-all ${
                    idx === i ? "w-8 bg-gold-gradient" : "w-3 bg-champagne/30"
                  }`}
                />
              ))}
            </div>
            <div className="flex gap-2">
              <button
                onClick={prev}
                className="grid h-9 w-9 place-items-center rounded-full border border-champagne/30 text-ivory-100 transition-all hover:bg-white/[0.06] hover:border-champagne/60"
                aria-label="Previous"
              >
                <ChevronLeft className="h-4 w-4" />
              </button>
              <button
                onClick={next}
                className="grid h-9 w-9 place-items-center rounded-full border border-champagne/30 text-ivory-100 transition-all hover:bg-white/[0.06] hover:border-champagne/60"
                aria-label="Next"
              >
                <ChevronRight className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
