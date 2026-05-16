"use client";
import { MessageCircle } from "lucide-react";
import { waLink } from "@/lib/data";

export default function FloatingWhatsApp() {
  return (
    <a
      href={waLink("Namaste, I would like a gemstone consultation.")}
      target="_blank"
      rel="noreferrer"
      aria-label="Chat on WhatsApp"
      className="group fixed bottom-24 right-4 z-40 hidden md:block"
    >
      <span className="absolute inset-0 -z-10 animate-ping rounded-full bg-emerald-500/40" />
      <span className="relative grid h-14 w-14 place-items-center rounded-full bg-gradient-to-br from-emerald-400 to-emerald-600 text-white shadow-[0_15px_40px_-10px_rgba(16,185,129,0.55)] transition-transform duration-300 group-hover:scale-105">
        <MessageCircle className="h-6 w-6" />
      </span>
    </a>
  );
}
