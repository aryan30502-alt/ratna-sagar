"use client";
import { MessageCircle, Phone, Send } from "lucide-react";
import { BRAND, waLink } from "@/lib/data";

export default function MobileBar() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 md:hidden">
      <div className="mx-3 mb-3 grid grid-cols-3 overflow-hidden rounded-2xl border border-champagne/25 bg-ink-950/95 shadow-[0_20px_50px_-15px_rgba(0,0,0,0.7)] backdrop-blur-xl">
        <a
          href={waLink("Namaste, I would like a consultation.")}
          target="_blank"
          rel="noreferrer"
          className="flex flex-col items-center gap-1.5 py-3 text-[10px] uppercase tracking-[0.26em] text-ivory-100/85"
        >
          <span className="grid h-9 w-9 place-items-center rounded-full bg-gold-gradient text-ink-950">
            <MessageCircle className="h-4 w-4" />
          </span>
          WhatsApp
        </a>
        <a
          href={`tel:${BRAND.phone.replace(/\s/g, "")}`}
          className="flex flex-col items-center gap-1.5 border-x border-champagne/15 py-3 text-[10px] uppercase tracking-[0.26em] text-ivory-100/85"
        >
          <span className="grid h-9 w-9 place-items-center rounded-full border border-champagne/40 text-champagne-soft">
            <Phone className="h-4 w-4" />
          </span>
          Call
        </a>
        <a
          href="#enquiry"
          className="flex flex-col items-center gap-1.5 py-3 text-[10px] uppercase tracking-[0.26em] text-ivory-100/85"
        >
          <span className="grid h-9 w-9 place-items-center rounded-full bg-wine-600 text-ivory-50">
            <Send className="h-4 w-4" />
          </span>
          Enquiry
        </a>
      </div>
    </div>
  );
}
