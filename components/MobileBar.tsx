"use client";
import { MessageCircle, Phone, Grid } from "lucide-react";
import { BRAND, waLink } from "@/lib/data";

export default function MobileBar() {
  return (
    <div
      className="fixed bottom-0 left-0 right-0 z-50 flex md:hidden"
      style={{
        background: "rgba(253,251,247,0.97)",
        backdropFilter: "blur(16px)",
        borderTop: "1px solid rgba(176,141,74,0.15)",
        boxShadow: "0 -8px 30px -10px rgba(26,22,18,0.12)"
      }}
    >
      <a
        href={`tel:${BRAND.phone.replace(/\s/g, "")}`}
        className="flex flex-1 flex-col items-center justify-center gap-1 py-3.5 transition-opacity duration-200 active:opacity-70"
        style={{ color: "var(--charcoal-600)" }}
      >
        <Phone className="h-5 w-5" />
        <span className="text-[9px] uppercase" style={{ letterSpacing: "0.2em" }}>
          Call
        </span>
      </a>

      <a
        href="#catalogue"
        className="flex flex-1 flex-col items-center justify-center gap-1 py-3.5"
        style={{ color: "var(--charcoal-600)" }}
      >
        <Grid className="h-5 w-5" />
        <span className="text-[9px] uppercase" style={{ letterSpacing: "0.2em" }}>
          Catalogue
        </span>
      </a>

      <a
        href={waLink("Namaste! I would like to enquire about jewellery at Gaytri Gold.")}
        target="_blank"
        rel="noreferrer"
        className="flex flex-1 flex-col items-center justify-center gap-1 py-3.5 rounded-none"
        style={{
          background: "linear-gradient(135deg, var(--gold-warm), var(--gold-accent))",
          color: "var(--cream-50)"
        }}
      >
        <MessageCircle className="h-5 w-5" />
        <span className="text-[9px] uppercase font-medium" style={{ letterSpacing: "0.2em" }}>
          WhatsApp
        </span>
      </a>
    </div>
  );
}
