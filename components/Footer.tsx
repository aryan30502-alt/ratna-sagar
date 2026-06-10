"use client";
import { Instagram, Facebook, Youtube, MessageCircle } from "lucide-react";
import { BRAND, waLink, CATEGORY_CHIPS } from "@/lib/data";

export default function Footer() {
  return (
    <footer
      className="relative"
      style={{
        borderTop: "1px solid rgba(176,141,74,0.12)",
        background: "linear-gradient(180deg, #1a1410 0%, #141210 100%)"
      }}
    >
      <div className="container-luxe py-14">
        <div className="grid gap-10 md:grid-cols-12">
          {/* Brand */}
          <div className="md:col-span-4">
            <div className="heading-display text-3xl text-gold">Gaytri Gold</div>
            <div
              className="mt-1.5 text-[9px] uppercase"
              style={{ letterSpacing: "0.32em", color: "rgba(201,165,90,0.45)" }}
            >
              {BRAND.est} · Bhilwara, Rajasthan
            </div>
            <p
              className="mt-5 max-w-xs text-[13.5px] leading-[1.8]"
              style={{ color: "rgba(245,239,227,0.5)" }}
            >
              {BRAND.tagline}. Four decades of crafting trust with BIS Hallmarked gold and GIA
              certified diamonds.
            </p>
            <div className="mt-7 flex gap-3">
              {[Instagram, Facebook, Youtube].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  aria-label="social"
                  className="grid h-10 w-10 place-items-center rounded-full transition-all duration-500"
                  style={{
                    border: "1px solid rgba(223,198,130,0.2)",
                    color: "rgba(245,239,227,0.5)"
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = "rgba(223,198,130,0.5)";
                    e.currentTarget.style.color = "var(--gold-light)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = "rgba(223,198,130,0.2)";
                    e.currentTarget.style.color = "rgba(245,239,227,0.5)";
                  }}
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
              <a
                href={waLink("Namaste! I would like to enquire about jewellery at Gaytri Gold.")}
                target="_blank"
                rel="noreferrer"
                aria-label="WhatsApp"
                className="grid h-10 w-10 place-items-center rounded-full"
                style={{
                  background: "linear-gradient(135deg, var(--gold-warm), var(--gold-accent))",
                  color: "var(--cream-50)"
                }}
              >
                <MessageCircle className="h-4 w-4" />
              </a>
            </div>
          </div>

          <FooterCol
            title="Collections"
            links={CATEGORY_CHIPS.map((c) => ({ href: "#catalogue", label: c.label }))}
          />
          <FooterCol
            title="Quick Links"
            links={[
              { href: "#catalogue", label: "View Catalogue" },
              { href: "#gallery", label: "Gallery" },
              { href: "#about", label: "Our Story" },
              { href: "#enquiry", label: "Enquiry" },
              { href: "/admin", label: "Admin Panel" }
            ]}
          />
          <FooterCol
            title="Contact"
            links={[
              { href: `tel:${BRAND.phone.replace(/\s/g, "")}`, label: BRAND.phone },
              { href: `mailto:${BRAND.email}`, label: BRAND.email },
              { href: "#", label: BRAND.address }
            ]}
          />
        </div>

        <div className="mt-12 divider-gold" />
        <div className="mt-6 flex flex-col items-center justify-between gap-3 sm:flex-row">
          <div className="text-xs" style={{ color: "rgba(245,239,227,0.35)" }}>
            © {new Date().getFullYear()} Gaytri Gold · Bhilwara, Rajasthan. All rights reserved.
          </div>
          <div
            className="text-[11px] uppercase"
            style={{ letterSpacing: "0.28em", color: "rgba(223,198,130,0.35)" }}
          >
            BIS Hallmarked · GIA Certified · Premium Jewellery
          </div>
        </div>
      </div>
      {/* Mobile spacer for bottom bar */}
      <div className="h-20 md:hidden" />
    </footer>
  );
}

function FooterCol({ title, links }: { title: string; links: { href: string; label: string }[] }) {
  return (
    <div className="md:col-span-2">
      <div
        className="text-[10px] uppercase"
        style={{ letterSpacing: "0.34em", color: "rgba(223,198,130,0.55)" }}
      >
        {title}
      </div>
      <ul className="mt-4 space-y-2">
        {links.map((l) => (
          <li key={l.label}>
            <a
              href={l.href}
              className="text-[13px] transition-colors duration-300"
              style={{ color: "rgba(245,239,227,0.45)" }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "var(--gold-light)")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(245,239,227,0.45)")}
            >
              {l.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
