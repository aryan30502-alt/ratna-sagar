"use client";
import { ShieldCheck, Award, Gem, Sparkles, Flame, Crown } from "lucide-react";

const items = [
  { icon: <ShieldCheck className="h-4 w-4" />, t: "Lab Certified Gemstones" },
  { icon: <Award className="h-4 w-4" />, t: "Trusted in Mewar" },
  { icon: <Gem className="h-4 w-4" />, t: "Natural & Untreated" },
  { icon: <Sparkles className="h-4 w-4" />, t: "Energised on Muhurat" },
  { icon: <Flame className="h-4 w-4" />, t: "Authentic Rudraksha" },
  { icon: <Crown className="h-4 w-4" />, t: "Personalised Guidance" }
];

export default function Marquee() {
  const loop = [...items, ...items];
  return (
    <div className="relative overflow-hidden border-y border-champagne/10 py-5" style={{background: "linear-gradient(180deg, rgba(232,201,138,0.04), rgba(232,201,138,0.01))"}}>
      <div className="flex animate-[shimmer_22s_linear_infinite] gap-12 whitespace-nowrap"
        style={{ animationName: "marquee" }}>
        {loop.map((i, idx) => (
          <div key={idx} className="flex items-center gap-3 text-[11px] uppercase tracking-[0.36em] text-ivory-200/70">
            <span className="text-champagne">{i.icon}</span>
            {i.t}
            <span className="text-champagne/40">•</span>
          </div>
        ))}
      </div>
      <style jsx>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        div > div {
          animation: marquee 32s linear infinite;
        }
      `}</style>
    </div>
  );
}
