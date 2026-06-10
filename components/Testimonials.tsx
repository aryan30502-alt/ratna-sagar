"use client";
import { motion } from "framer-motion";
import { TESTIMONIALS } from "@/lib/data";
import { Star } from "lucide-react";

const ease = [0.16, 1, 0.3, 1] as const;

export default function Testimonials() {
  return (
    <section
      id="testimonials"
      className="relative overflow-hidden py-24 sm:py-32"
      style={{
        background: "linear-gradient(180deg, #1a1410 0%, #1e1810 100%)"
      }}
    >
      {/* Ambient glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(50% 60% at 50% 50%, rgba(201,165,90,0.07), transparent 70%)"
        }}
      />

      <div className="container-luxe relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease }}
          className="mb-16 text-center"
        >
          <div className="eyebrow-dark mb-5">Testimonials</div>
          <h2
            className="heading-display"
            style={{
              fontSize: "clamp(30px, 5vw, 52px)",
              letterSpacing: "-0.025em",
              color: "var(--cream-100)"
            }}
          >
            Words from{" "}
            <span className="shimmer-text">Treasured Clients</span>
          </h2>
        </motion.div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {TESTIMONIALS.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease, delay: i * 0.1 }}
              className="gem-card-dark rounded-3xl p-7"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-5">
                {[...Array(5)].map((_, s) => (
                  <Star
                    key={s}
                    className="h-3.5 w-3.5 fill-current"
                    style={{ color: "var(--gold-warm)" }}
                  />
                ))}
              </div>

              <p
                className="text-[14px] leading-[1.85] italic"
                style={{ color: "rgba(245,239,227,0.75)", fontFamily: "var(--font-display)", fontWeight: 300 }}
              >
                &ldquo;{t.text}&rdquo;
              </p>

              <div className="mt-6 flex items-center gap-3">
                <div
                  className="h-9 w-9 rounded-full grid place-items-center text-sm font-medium"
                  style={{
                    background: "linear-gradient(135deg, var(--gold-warm), var(--gold-deep))",
                    color: "var(--cream-50)"
                  }}
                >
                  {t.name[0]}
                </div>
                <div>
                  <div
                    className="text-[13px] font-medium"
                    style={{ color: "var(--cream-200)" }}
                  >
                    {t.name}
                  </div>
                  <div
                    className="text-[11px]"
                    style={{ color: "rgba(201,165,90,0.55)" }}
                  >
                    {t.city}
                    {(t as any).city_local && " · Local"}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
