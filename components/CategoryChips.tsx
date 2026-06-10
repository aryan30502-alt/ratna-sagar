"use client";
import { motion } from "framer-motion";
import { CATEGORY_CHIPS } from "@/lib/data";

const ease = [0.16, 1, 0.3, 1] as const;

interface Props {
  activeCategory: string;
  setActiveCategory: (c: string) => void;
}

export default function CategoryChips({ activeCategory, setActiveCategory }: Props) {
  return (
    <section
      id="catalogue"
      className="relative py-14 sm:py-16"
      style={{ background: "var(--cream-100)" }}
    >
      <div className="container-luxe">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease }}
          className="mb-8 text-center"
        >
          <div className="eyebrow mb-4">Our Collections</div>
          <h2
            className="heading-display"
            style={{ fontSize: "clamp(28px, 5vw, 48px)", letterSpacing: "-0.022em" }}
          >
            Explore Fine{" "}
            <span className="shimmer-text">Jewellery</span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease, delay: 0.1 }}
          className="flex flex-wrap items-center justify-center gap-3"
        >
          {CATEGORY_CHIPS.map((chip, i) => {
            const isActive = activeCategory === chip.label;
            return (
              <motion.button
                key={chip.label}
                id={`category-${chip.label.toLowerCase().replace(/\s+/g, "-")}`}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, ease, delay: i * 0.05 }}
                onClick={() => setActiveCategory(chip.label)}
                className="relative rounded-full px-6 py-2.5 text-[12px] font-medium transition-all duration-500"
                style={{
                  letterSpacing: "0.06em",
                  background: isActive
                    ? "linear-gradient(135deg, var(--gold-warm), var(--gold-accent))"
                    : "rgba(255,255,255,0.7)",
                  color: isActive ? "var(--cream-50)" : "var(--charcoal-600)",
                  border: isActive
                    ? "1px solid transparent"
                    : "1px solid rgba(176,141,74,0.2)",
                  boxShadow: isActive
                    ? "0 8px 24px -8px rgba(176,141,74,0.4)"
                    : "0 2px 8px -4px rgba(26,22,18,0.06)"
                }}
              >
                {chip.label}
                {isActive && (
                  <motion.span
                    layoutId="activeChip"
                    className="absolute inset-0 rounded-full"
                    style={{
                      background: "rgba(255,255,255,0.1)",
                      border: "1px solid rgba(255,255,255,0.25)"
                    }}
                  />
                )}
                <span
                  className="block text-[8px] mt-0.5 opacity-70"
                  style={{ letterSpacing: "0.12em" }}
                >
                  {chip.hindi}
                </span>
              </motion.button>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
