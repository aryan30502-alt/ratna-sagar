"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { Menu, X, Phone } from "lucide-react";
import { useState } from "react";
import { BRAND, waLink } from "@/lib/data";

const links = [
  { href: "#catalogue", label: "Collections" },
  { href: "#gallery", label: "Gallery" },
  { href: "#about", label: "Our Story" },
  { href: "#enquiry", label: "Enquire" }
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const { scrollY } = useScroll();
  // Account for 40px RateTicker height
  const bg = useTransform(scrollY, [0, 80], ["rgba(253,251,247,0.7)", "rgba(253,251,247,0.97)"]);
  const shadow = useTransform(
    scrollY,
    [0, 80],
    ["0 0 0 transparent", "0 4px 30px -10px rgba(26,22,18,0.1)"]
  );

  return (
    <motion.header
      style={{ backgroundColor: bg, boxShadow: shadow, borderColor: "rgba(176,141,74,0.12)" }}
      className="sticky top-0 left-0 right-0 z-50 border-b backdrop-blur-md"
    >
      <div className="container-luxe flex h-16 items-center justify-between md:h-20">
        <a href="#top" className="flex items-center gap-3">
          <Logo />
          <div className="leading-tight">
            <div className="heading-display text-lg text-gold sm:text-xl">
              Gaytri Gold
            </div>
            <div
              className="hidden text-[9px] uppercase sm:block"
              style={{ letterSpacing: "0.34em", color: "var(--gold-accent)", opacity: 0.6 }}
            >
              Bhilwara · Rajasthan
            </div>
          </div>
        </a>

        <nav className="hidden items-center gap-9 md:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-[13px] tracking-wide transition-colors duration-300"
              style={{ color: "var(--charcoal-600)" }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "var(--gold-accent)")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "var(--charcoal-600)")}
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href={`tel:${BRAND.phone.replace(/\s/g, "")}`}
            className="hidden md:inline-flex btn-ghost !px-4 !py-2 text-xs"
          >
            <Phone className="h-3.5 w-3.5" /> Call Us
          </a>
          <a
            href={waLink("Namaste, I would like to enquire about jewellery.")}
            target="_blank"
            rel="noreferrer"
            className="hidden md:inline-flex btn-gold !px-5 !py-2 text-xs"
          >
            WhatsApp Enquiry
          </a>
          <button
            aria-label="menu"
            onClick={() => setOpen(!open)}
            className="md:hidden rounded-full border border-gold-400/30 bg-white/60 p-2 backdrop-blur"
            style={{ color: "var(--charcoal-800)" }}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      <motion.div
        initial={false}
        animate={{ height: open ? "auto" : 0, opacity: open ? 1 : 0 }}
        transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
        className="overflow-hidden backdrop-blur-md md:hidden border-t"
        style={{
          background: "rgba(253,251,247,0.97)",
          borderColor: "rgba(176,141,74,0.12)"
        }}
      >
        <div className="container-luxe flex flex-col gap-1 pb-6">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="border-b py-3 text-sm"
              style={{ borderColor: "rgba(176,141,74,0.08)", color: "var(--charcoal-700)" }}
            >
              {l.label}
            </a>
          ))}
          <a
            href={waLink("Namaste, I would like to enquire about jewellery.")}
            target="_blank"
            rel="noreferrer"
            className="btn-gold mt-4 w-full"
          >
            WhatsApp Enquiry
          </a>
        </div>
      </motion.div>
    </motion.header>
  );
}

function Logo() {
  return (
    <div className="relative h-9 w-9">
      <div className="absolute inset-0 rounded-full bg-gold-gradient opacity-90 blur-[2px]" />
      <div className="absolute inset-[3px] rounded-full" style={{ background: "var(--cream-50)" }} />
      <div className="absolute inset-0 grid place-items-center heading-display text-gold text-base">
        G
      </div>
    </div>
  );
}
