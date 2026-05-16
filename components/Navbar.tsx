"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { Menu, X, Phone } from "lucide-react";
import { useState } from "react";
import { BRAND, waLink } from "@/lib/data";

const links = [
  { href: "#gemstones", label: "Gemstones" },
  { href: "#spiritual", label: "Spiritual" },
  { href: "#finder", label: "Gem Finder" },
  { href: "#about", label: "Heritage" },
  { href: "#enquiry", label: "Enquire" }
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const { scrollY } = useScroll();
  const bg = useTransform(scrollY, [0, 80], ["rgba(7,5,10,0.55)", "rgba(10,7,16,0.92)"]);
  const border = useTransform(
    scrollY,
    [0, 80],
    ["rgba(232,201,138,0.08)", "rgba(232,201,138,0.22)"]
  );

  return (
    <motion.header
      style={{ backgroundColor: bg, borderColor: border }}
      className="fixed top-0 left-0 right-0 z-50 border-b shadow-[0_10px_30px_-20px_rgba(0,0,0,0.6)] backdrop-blur-md"
    >
      <div className="container-luxe flex h-16 items-center justify-between md:h-20">
        <a href="#top" className="flex items-center gap-3">
          <Logo />
          <div className="leading-tight">
            <div className="heading-display text-lg text-gold sm:text-xl">
              Ratna Sagar
            </div>
            <div className="hidden text-[10px] uppercase tracking-[0.32em] text-champagne/70 sm:block">
              Bhilwara · Mewar
            </div>
          </div>
        </a>
        <nav className="hidden items-center gap-9 md:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-[13.5px] tracking-wide text-ivory-200/80 transition-colors hover:text-champagne-soft"
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
            <Phone className="h-3.5 w-3.5" /> Call Expert
          </a>
          <a
            href={waLink("Namaste, I would like to consult about gemstones.")}
            target="_blank"
            rel="noreferrer"
            className="hidden md:inline-flex btn-gold !px-5 !py-2 text-xs"
          >
            WhatsApp Consult
          </a>
          <button
            aria-label="menu"
            onClick={() => setOpen(!open)}
            className="md:hidden rounded-full border border-champagne/30 bg-white/[0.04] p-2 text-ivory-100 backdrop-blur"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>
      <motion.div
        initial={false}
        animate={{ height: open ? "auto" : 0, opacity: open ? 1 : 0 }}
        transition={{ duration: 0.4, ease: [0.2, 0.8, 0.2, 1] }}
        className="overflow-hidden bg-ink-950/95 backdrop-blur-md md:hidden border-t border-champagne/15"
      >
        <div className="container-luxe flex flex-col gap-1 pb-6">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="border-b border-champagne/10 py-3 text-sm text-ivory-200/85"
            >
              {l.label}
            </a>
          ))}
          <a
            href={waLink("Namaste, I would like to consult about gemstones.")}
            target="_blank"
            rel="noreferrer"
            className="btn-gold mt-4 w-full"
          >
            WhatsApp Consultation
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
      <div className="absolute inset-[3px] rounded-full bg-ink-950" />
      <div className="absolute inset-0 grid place-items-center heading-display text-gold text-base">
        र
      </div>
    </div>
  );
}
