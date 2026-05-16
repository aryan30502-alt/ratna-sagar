"use client";
import { Instagram, Facebook, Youtube, MessageCircle } from "lucide-react";
import { BRAND, waLink } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="relative border-t border-champagne/15" style={{background: "linear-gradient(180deg, #0b0810 0%, #07050a 100%)"}}>
      <div className="container-luxe py-14">
        <div className="grid gap-10 md:grid-cols-12">
          <div className="md:col-span-5">
            <div className="heading-display text-3xl text-gold">Ratna Sagar</div>
            <p className="mt-4 max-w-sm text-[14px] leading-[1.8] text-ivory-200/65">
              {BRAND.tagline}. A trusted name in Bhilwara for authentic gemstones, rudraksha,
              yantras and spiritual guidance.
            </p>
            <div className="mt-6 flex gap-3">
              {[Instagram, Facebook, Youtube].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  aria-label="social"
                  className="grid h-10 w-10 place-items-center rounded-full border border-champagne/25 text-ivory-200/80 transition-all hover:border-champagne/70 hover:bg-white/[0.05] hover:text-champagne-soft"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
              <a
                href={waLink("Namaste!")}
                target="_blank"
                rel="noreferrer"
                aria-label="WhatsApp"
                className="grid h-10 w-10 place-items-center rounded-full bg-gold-gradient text-ink-950"
              >
                <MessageCircle className="h-4 w-4" />
              </a>
            </div>
          </div>

          <FooterCol
            title="Explore"
            links={[
              { href: "#gemstones", label: "Gemstones" },
              { href: "#spiritual", label: "Spiritual" },
              { href: "#finder", label: "Gem Finder" },
              { href: "#about", label: "Heritage" }
            ]}
          />
          <FooterCol
            title="Categories"
            links={[
              { href: "#gemstones", label: "Navratna" },
              { href: "#spiritual", label: "Rudraksha" },
              { href: "#spiritual", label: "Yantras & Kavach" },
              { href: "#spiritual", label: "Vastu & Parad" }
            ]}
          />
          <FooterCol
            title="Contact"
            links={[
              { href: `tel:${BRAND.phone.replace(/\s/g, "")}`, label: BRAND.phone },
              { href: `mailto:${BRAND.email}`, label: BRAND.email },
              { href: "#", label: BRAND.city }
            ]}
          />
        </div>

        <div className="mt-12 divider-gold" />
        <div className="mt-6 flex flex-col items-center justify-between gap-3 sm:flex-row">
          <div className="text-xs text-ivory-200/55">
            © {new Date().getFullYear()} Ratna Sagar · Crafted with devotion in Bhilwara.
          </div>
          <div className="text-[11px] uppercase tracking-[0.3em] text-champagne/70">
            Indicative information · Final advice on consultation
          </div>
        </div>
      </div>
      {/* mobile spacer for sticky bar */}
      <div className="h-20 md:hidden" />
    </footer>
  );
}

function FooterCol({
  title,
  links
}: {
  title: string;
  links: { href: string; label: string }[];
}) {
  return (
    <div className="md:col-span-2">
      <div className="text-[10px] uppercase tracking-[0.34em] text-champagne/80">{title}</div>
      <ul className="mt-4 space-y-2">
        {links.map((l) => (
          <li key={l.label}>
            <a href={l.href} className="text-[13.5px] text-ivory-200/70 transition-colors hover:text-champagne-soft">
              {l.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
