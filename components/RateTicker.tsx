"use client";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { getMetalRates, type MetalRates } from "@/lib/rates";
import { DEFAULT_RATES } from "@/lib/data";

export default function RateTicker() {
  const [rates, setRates] = useState<MetalRates>({
    gold22k: DEFAULT_RATES.gold22k,
    gold24k: DEFAULT_RATES.gold24k,
    silver: DEFAULT_RATES.silver,
    updatedAt: "Fetching...",
    source: "fallback"
  });
  const [loaded, setLoaded] = useState(false);
  const [blink, setBlink] = useState(false);

  useEffect(() => {
    getMetalRates().then((r) => {
      setRates(r);
      setLoaded(true);
      setBlink(true);
      setTimeout(() => setBlink(false), 1200);
    });
    // Refresh every 4 hours
    const interval = setInterval(() => {
      getMetalRates().then(setRates);
    }, 4 * 60 * 60 * 1000);
    return () => clearInterval(interval);
  }, []);

  const fmt = (n: number) =>
    new Intl.NumberFormat("en-IN", { maximumFractionDigits: 0 }).format(n);

  const items = [
    { label: "Gold 22K", value: `₹${fmt(rates.gold22k)}/g`, color: "var(--gold-warm)" },
    { label: "Gold 24K", value: `₹${fmt(rates.gold24k)}/g`, color: "var(--gold-light)" },
    { label: "Silver", value: `₹${fmt(rates.silver)}/g`, color: "#c0c0c0" }
  ];

  return (
    <div
      className="rate-ticker"
      style={{
        background: "linear-gradient(90deg, #1a1410 0%, #231c14 50%, #1a1410 100%)",
        borderBottom: "1px solid rgba(176,141,74,0.2)",
        position: "relative",
        zIndex: 60
      }}
    >
      {/* Subtle shimmer bar */}
      <div
        className="absolute inset-x-0 bottom-0 h-px"
        style={{
          background: "linear-gradient(90deg, transparent 0%, rgba(201,165,90,0.5) 30%, rgba(223,198,130,0.8) 50%, rgba(201,165,90,0.5) 70%, transparent 100%)",
          animation: "shimmer 6s ease-in-out infinite"
        }}
      />

      <div className="container-luxe">
        <div className="flex h-9 items-center justify-between gap-4 sm:h-10">
          {/* Left label */}
          <div
            className="hidden shrink-0 text-[9px] uppercase sm:block"
            style={{ letterSpacing: "0.38em", color: "rgba(201,165,90,0.5)" }}
          >
            Today&apos;s Rates
          </div>

          {/* Rate pills */}
          <div className="flex flex-1 items-center justify-center gap-4 sm:gap-8 md:gap-12">
            {items.map((item, i) => (
              <AnimatePresence mode="wait" key={item.label}>
                <motion.div
                  key={`${item.label}-${loaded}`}
                  initial={{ opacity: 0, y: -4 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                  className="flex items-center gap-1.5 sm:gap-2.5"
                >
                  {/* Gold dot */}
                  <span
                    className="hidden h-1 w-1 rounded-full sm:block"
                    style={{ background: item.color, opacity: 0.7 }}
                  />
                  <span
                    className="text-[10px] sm:text-[11px]"
                    style={{ color: "rgba(201,165,90,0.55)", letterSpacing: "0.06em" }}
                  >
                    {item.label}
                  </span>
                  <motion.span
                    animate={blink ? { color: ["#dfc682", "#ffe8a0", "#dfc682"] } : {}}
                    transition={{ duration: 0.8 }}
                    className="font-medium"
                    style={{
                      color: item.color,
                      fontSize: "clamp(11px, 2.2vw, 13px)",
                      fontFamily: "var(--font-sans)",
                      letterSpacing: "0.02em"
                    }}
                  >
                    {item.value}
                  </motion.span>
                </motion.div>
              </AnimatePresence>
            ))}
          </div>

          {/* Right: update time + dot */}
          <div className="hidden shrink-0 items-center gap-2 sm:flex">
            <span
              className="h-1.5 w-1.5 rounded-full"
              style={{
                background: rates.source === "live" ? "#4caf50" : "rgba(201,165,90,0.5)",
                boxShadow: rates.source === "live" ? "0 0 6px #4caf50" : "none",
                animation: rates.source === "live" ? "glowPulse 2s ease-in-out infinite" : "none"
              }}
            />
            <span
              className="text-[9px]"
              style={{ color: "rgba(201,165,90,0.35)", letterSpacing: "0.06em" }}
            >
              {rates.updatedAt}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
