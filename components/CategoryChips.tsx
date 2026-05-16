"use client";
import { motion } from "framer-motion";
import { CATEGORY_CHIPS } from "@/lib/data";

const easing = [0.2, 0.8, 0.2, 1] as const;

const symbols: Record<string, string> = {
  Gemstones: "◆",
  Rudraksha: "ॐ",
  Yantra: "卐",
  Kavach: "🛡",
  Parad: "☥",
  Sphatik: "✦",
  Vastu: "✺",
  Mala: "❧",
  Shankh: "➰",
  "Puja Saaman": "🪔"
};

export default function CategoryChips() {
  return (
    <section className="relative py-10 sm:py-14">
      <div className="container-luxe">
        <div className="mb-6 flex items-end justify-between gap-4">
          <div>
            <div className="eyebrow">Browse the Catalogue</div>
            <h2 className="mt-4 heading-display text-2xl text-ivory-50 sm:text-[32px]">
              Explore by <span className="text-gold">Category</span>
            </h2>
          </div>
          <div className="hidden text-[11px] uppercase tracking-[0.32em] text-champagne/70 sm:block">
            Swipe to discover →
          </div>
        </div>

        <div className="-mx-5 overflow-x-auto px-5 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          <div className="flex gap-3 pb-2">
            {CATEGORY_CHIPS.map((c, i) => (
              <motion.a
                key={c.label}
                href={c.href}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, ease: easing, delay: i * 0.04 }}
                className="group relative flex min-w-[120px] shrink-0 flex-col items-center justify-center gap-3 rounded-2xl border border-champagne/15 px-4 py-6 text-center transition-all hover:-translate-y-1 hover:border-champagne/45 hover:shadow-[0_22px_50px_-22px_rgba(232,201,138,0.45)] sm:min-w-[148px]"
                style={{background: "radial-gradient(120% 80% at 50% -10%, rgba(232,201,138,0.08), transparent 60%), linear-gradient(180deg, #15101e 0%, #0b0810 100%)"}}
              >
                <span className="grid h-12 w-12 place-items-center rounded-full bg-gold-gradient text-xl text-ink-950 shadow-[0_12px_28px_-10px_rgba(232,201,138,0.55)]">
                  {symbols[c.label] || "✶"}
                </span>
                <div className="heading-display text-[15px] text-champagne-soft">{c.hindi}</div>
                <div className="text-[12px] font-medium text-ivory-50/90">{c.label}</div>
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
