"use client";
import { waLink } from "@/lib/data";
import { MessageCircle } from "lucide-react";

export default function FloatingWhatsApp() {
  return (
    <a
      href={waLink("Namaste! I would like to enquire about jewellery at Gaytri Gold.")}
      target="_blank"
      rel="noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-24 right-5 z-50 hidden md:flex items-center justify-center h-14 w-14 rounded-full shadow-xl transition-transform duration-300 hover:scale-110"
      style={{
        background: "linear-gradient(135deg, #25D366, #128C7E)",
        boxShadow: "0 8px 30px -8px rgba(37,211,102,0.5)"
      }}
    >
      <MessageCircle className="h-6 w-6 text-white" />
    </a>
  );
}
