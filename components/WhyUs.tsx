"use client";
import { motion } from "framer-motion";
import { WHYUS } from "@/lib/data";

const ease = [0.16, 1, 0.3, 1] as const;

export default function WhyUs() {
  return (
    <section
      id="whyus"
      className="relative overflow-hidden py-24 sm:py-32"
      style={{
        background: "linear-gradient(180deg, var(--cream-50) 0%, var(--cream-100) 100%)"
      }}
    >
      {/* Background pattern */}
      <div className="absolute inset-0 section-pattern opacity-50 pointer-events-none" />

      <div className="container-luxe relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease }}
          className="mb-16 text-center"
        >
          <div className="eyebrow mb-5">Why Choose Us</div>
          <h2
            className="heading-display"
            style={{ fontSize: "clamp(32px, 5.5vw, 56px)", letterSpacing: "-0.025em" }}
          >
            The Gaytri Gold{" "}
            <span className="shimmer-text">Promise</span>
          </h2>
          <p
            className="mt-6 mx-auto max-w-xl text-[15px] leading-[1.85]"
            style={{ fontWeight: 300, color: "var(--charcoal-500)" }}
          >
            Four decades of crafting trust, one jewel at a time. Every promise we make is built
            into every piece we create.
          </p>
        </motion.div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {WHYUS.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease, delay: i * 0.1 }}
              className="gem-card group p-7"
            >
              <div
                className="mb-5 inline-grid h-14 w-14 place-items-center rounded-2xl text-2xl"
                style={{
                  background: "linear-gradient(135deg, rgba(201,165,90,0.12), rgba(176,141,74,0.06))",
                  border: "1px solid rgba(176,141,74,0.15)"
                }}
              >
                {item.icon}
              </div>
              <h3
                className="heading-display text-[20px]"
                style={{ color: "var(--charcoal-800)" }}
              >
                {item.title}
              </h3>
              <p
                className="mt-3 text-[13.5px] leading-[1.75]"
                style={{ color: "var(--charcoal-500)", fontWeight: 300 }}
              >
                {item.desc}
              </p>
              {/* Bottom gold line on hover */}
              <div
                className="mt-5 h-px transition-all duration-700 group-hover:opacity-100 opacity-0"
                style={{
                  background: "linear-gradient(90deg, var(--gold-warm), transparent)"
                }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
