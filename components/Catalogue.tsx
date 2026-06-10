"use client";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, Eye } from "lucide-react";
import { CATALOGUE_ITEMS, COLLECTIONS, waLink } from "@/lib/data";

const ease = [0.16, 1, 0.3, 1] as const;

const CATEGORY_MAP: Record<string, string> = {
  "Gold Jewellery": "gold",
  "Diamond": "diamond",
  "Bridal": "bridal",
  "Silver": "silver",
  "Traditional": "traditional",
  "Men's": "mens",
  "Exclusive": "exclusive"
};

interface Props {
  activeCategory: string;
  setActiveCategory: (c: string) => void;
}

export default function Catalogue({ activeCategory, setActiveCategory }: Props) {
  const categoryKey = CATEGORY_MAP[activeCategory] || "gold";
  const items = CATALOGUE_ITEMS.filter(
    (item) => item.category === categoryKey && item.status === "active"
  );

  // If no items in category, show all featured
  const displayItems = items.length > 0 ? items : CATALOGUE_ITEMS.filter((i) => i.featured);

  const collection = COLLECTIONS.find((c) => c.category === categoryKey);

  return (
    <section
      className="relative py-16 sm:py-20"
      style={{
        background: "linear-gradient(180deg, var(--cream-100) 0%, var(--cream-50) 100%)"
      }}
    >
      <div className="container-luxe">
        {/* Section Header */}
        {collection && (
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease }}
            className="mb-12 max-w-2xl"
          >
            <h2
              className="heading-display"
              style={{ fontSize: "clamp(28px, 4.5vw, 46px)", letterSpacing: "-0.022em" }}
            >
              {collection.title}
            </h2>
            <p
              className="mt-4 text-[15px] leading-[1.8]"
              style={{ color: "var(--charcoal-500)", fontWeight: 300 }}
            >
              {collection.description}
            </p>
          </motion.div>
        )}

        {/* Product Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.6, ease }}
            className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
          >
            {displayItems.map((item, i) => (
              <ProductCard key={item.id} item={item} index={i} />
            ))}

            {/* CTA Card — Enquire about custom */}
            <motion.div
              initial={{ opacity: 0, scale: 0.97 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease, delay: displayItems.length * 0.06 }}
              className="gem-card flex flex-col items-center justify-center p-8 text-center"
              style={{ minHeight: 320 }}
            >
              <div
                className="mb-4 grid h-14 w-14 place-items-center rounded-full"
                style={{
                  background: "linear-gradient(135deg, var(--gold-warm), var(--gold-accent))"
                }}
              >
                <MessageCircle className="h-6 w-6 text-white" />
              </div>
              <h3
                className="heading-display text-[20px]"
                style={{ color: "var(--charcoal-800)" }}
              >
                Don&apos;t see what you&apos;re looking for?
              </h3>
              <p
                className="mt-3 text-[13px] leading-[1.7]"
                style={{ color: "var(--charcoal-500)", fontWeight: 300 }}
              >
                Our craftsmen can create your dream jewellery from scratch. Share your design idea
                and we&apos;ll make it happen.
              </p>
              <a
                href={waLink(
                  `Namaste, I am interested in a custom ${activeCategory} piece. Can you help?`
                )}
                target="_blank"
                rel="noreferrer"
                className="btn-gold mt-6 !px-6 !py-3 text-[12px]"
              >
                Custom Order
              </a>
            </motion.div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}

function ProductCard({
  item,
  index
}: {
  item: (typeof CATALOGUE_ITEMS)[0];
  index: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7, ease, delay: index * 0.07 }}
      className="gem-card group cursor-pointer"
    >
      {/* Image */}
      <div className="relative overflow-hidden rounded-t-3xl" style={{ height: 230 }}>
        <img
          src={item.photo}
          alt={item.name}
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
          loading="lazy"
        />
        {/* Overlay on hover */}
        <div
          className="absolute inset-0 flex items-center justify-center gap-3 opacity-0 transition-all duration-500 group-hover:opacity-100"
          style={{ background: "rgba(26,20,16,0.55)" }}
        >
          <a
            href={waLink(`Hello, I am interested in the "${item.name}". Please share details.`)}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 rounded-full px-5 py-2.5 text-[12px] font-medium transition-transform duration-300 hover:scale-105"
            style={{
              background: "linear-gradient(135deg, var(--gold-warm), var(--gold-accent))",
              color: "var(--cream-50)",
              letterSpacing: "0.06em"
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <MessageCircle className="h-3.5 w-3.5" />
            Enquire
          </a>
          <a
            href="#enquiry"
            className="flex items-center gap-2 rounded-full px-4 py-2.5 text-[12px] font-medium"
            style={{
              background: "rgba(255,255,255,0.15)",
              backdropFilter: "blur(8px)",
              color: "var(--cream-100)",
              border: "1px solid rgba(255,255,255,0.25)",
              letterSpacing: "0.06em"
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <Eye className="h-3.5 w-3.5" />
            Details
          </a>
        </div>

        {/* Featured badge */}
        {item.featured && (
          <div
            className="absolute top-3 left-3 rounded-full px-3 py-1 text-[9px] uppercase"
            style={{
              background: "linear-gradient(135deg, var(--gold-warm), var(--gold-accent))",
              color: "var(--cream-50)",
              letterSpacing: "0.2em"
            }}
          >
            Featured
          </div>
        )}
      </div>

      {/* Info */}
      <div className="p-5">
        <h3
          className="heading-display text-[17px] leading-tight"
          style={{ color: "var(--charcoal-800)" }}
        >
          {item.name}
        </h3>
        {item.subcategory && (
          <div
            className="mt-1 text-[10px] uppercase"
            style={{ letterSpacing: "0.26em", color: "var(--gold-accent)", opacity: 0.7 }}
          >
            {item.subcategory}
          </div>
        )}
        <p
          className="mt-2.5 text-[12.5px] leading-[1.7] line-clamp-2"
          style={{ color: "var(--charcoal-500)", fontWeight: 300 }}
        >
          {item.description}
        </p>

        {/* Purity / weight */}
        {(item.purity || item.weight) && (
          <div className="mt-4 flex flex-wrap gap-2">
            {item.purity && (
              <span
                className="rounded-full px-3 py-1 text-[10px]"
                style={{
                  background: "rgba(176,141,74,0.08)",
                  color: "var(--gold-muted)",
                  border: "1px solid rgba(176,141,74,0.12)"
                }}
              >
                {item.purity}
              </span>
            )}
            {item.weight && (
              <span
                className="rounded-full px-3 py-1 text-[10px]"
                style={{
                  background: "rgba(26,22,18,0.04)",
                  color: "var(--charcoal-500)",
                  border: "1px solid rgba(26,22,18,0.08)"
                }}
              >
                {item.weight}
              </span>
            )}
          </div>
        )}

        {/* WhatsApp CTA */}
        <a
          href={waLink(`Hello, I am interested in the "${item.name}". Please share details and pricing.`)}
          target="_blank"
          rel="noreferrer"
          className="mt-5 flex items-center gap-2 text-[12px] font-medium transition-colors duration-300"
          style={{ color: "var(--gold-accent)" }}
          onMouseEnter={(e) => (e.currentTarget.style.color = "var(--gold-warm)")}
          onMouseLeave={(e) => (e.currentTarget.style.color = "var(--gold-accent)")}
        >
          <MessageCircle className="h-3.5 w-3.5" />
          Enquire on WhatsApp →
        </a>
      </div>
    </motion.div>
  );
}
