"use client";
import { motion } from "framer-motion";
import { BRAND } from "@/lib/data";

const ease = [0.16, 1, 0.3, 1] as const;

export default function About() {
  return (
    <section
      id="about"
      className="relative overflow-hidden py-24 sm:py-32"
      style={{
        background: "linear-gradient(180deg, var(--cream-50) 0%, var(--cream-100) 100%)"
      }}
    >
      <div className="container-luxe">
        <div className="grid gap-16 md:grid-cols-2 items-center">
          {/* Image side */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.1, ease }}
            className="relative"
          >
            <div className="relative overflow-hidden rounded-3xl" style={{ aspectRatio: "4/5" }}>
              <img
                src="https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=800&q=85"
                alt="Gaytri Gold Master Karigar Craftsman"
                crossOrigin="anonymous"
                referrerPolicy="no-referrer"
                className="h-full w-full object-cover"
              />
              <div
                className="absolute inset-0"
                style={{
                  background:
                    "linear-gradient(to top, rgba(26,20,16,0.4) 0%, transparent 60%)"
                }}
              />
            </div>

            {/* Floating stat card */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, ease, delay: 0.4 }}
              className="absolute -right-6 -bottom-6 rounded-2xl p-5 hidden md:block"
              style={{
                background: "rgba(253,251,247,0.95)",
                backdropFilter: "blur(12px)",
                border: "1px solid rgba(176,141,74,0.15)",
                boxShadow: "0 20px 50px -15px rgba(26,22,18,0.12)"
              }}
            >
              <div className="grid grid-cols-2 gap-5">
                {[
                  { n: "40+", l: "Years of\nTrust" },
                  { n: "₹0", l: "Hidden\nCharges" }
                ].map((s) => (
                  <div key={s.n} className="text-center">
                    <div
                      className="heading-display text-3xl shimmer-text"
                      style={{ letterSpacing: "-0.03em" }}
                    >
                      {s.n}
                    </div>
                    <div
                      className="mt-1 text-[10px] uppercase whitespace-pre-line"
                      style={{ letterSpacing: "0.2em", color: "var(--charcoal-500)" }}
                    >
                      {s.l}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Decorative ring */}
            <div
              className="absolute -inset-4 rounded-3xl -z-10"
              style={{ border: "1px solid rgba(176,141,74,0.08)" }}
            />
          </motion.div>

          {/* Text side */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.1, ease, delay: 0.1 }}
          >
            <div className="eyebrow mb-7">Our Heritage</div>
            <h2
              className="heading-display"
              style={{ fontSize: "clamp(30px, 5vw, 52px)", letterSpacing: "-0.025em" }}
            >
              A Legacy Forged in{" "}
              <span className="shimmer-text">Pure Gold</span>
            </h2>

            <div
              className="mt-8 space-y-5 text-[15px] leading-[1.9]"
              style={{ fontWeight: 300, color: "var(--charcoal-500)" }}
            >
              <p>
                Founded in 1985, Gaytri Gold began as a small workshop in the heart of Bhilwara —
                a city whose weavers and craftsmen have always understood the deeper language of
                beauty. Our founder believed that true luxury lies not in price, but in integrity.
              </p>
              <p>
                Today, three generations of our family carry forward that promise. Every piece we
                create — from a delicate gold ring to a full bridal set — goes through our master
                karigars&apos; hands with the same devotion as day one.
              </p>
              <p>
                We were the first jewellers in Bhilwara to voluntarily adopt BIS Hallmarking and to
                insist on GIA certification for every diamond we sell. Our clients don&apos;t just buy
                jewellery. They inherit a story.
              </p>
            </div>

            <div className="mt-10 grid grid-cols-3 gap-6">
              {[
                { n: "5000+", l: "Families Served" },
                { n: "22K & 24K", l: "BIS Certified" },
                { n: "100%", l: "Certified Diamonds" }
              ].map((s) => (
                <div key={s.n}>
                  <div
                    className="heading-display text-2xl shimmer-text"
                    style={{ letterSpacing: "-0.025em" }}
                  >
                    {s.n}
                  </div>
                  <div
                    className="mt-1 text-[10px] uppercase"
                    style={{ letterSpacing: "0.2em", color: "var(--charcoal-500)" }}
                  >
                    {s.l}
                  </div>
                </div>
              ))}
            </div>

            <a
              href="#enquiry"
              className="btn-gold mt-10 inline-flex"
            >
              Visit Our Showroom →
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
