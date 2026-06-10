"use client";
import { motion } from "framer-motion";

const ease = [0.16, 1, 0.3, 1] as const;

const GALLERY_ITEMS = [
  {
    src: "https://images.unsplash.com/photo-1602173574767-37ac01994b2a?w=800&q=85",
    alt: "Royal Kundan Necklace Set",
    span: "col-span-2 row-span-2"
  },
  {
    src: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=600&q=85",
    alt: "Diamond Pendant Collection"
  },
  {
    src: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=600&q=85",
    alt: "Gold Bangles Set"
  },
  {
    src: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=800&q=85",
    alt: "Bridal Jewellery Complete Set",
    span: "col-span-2"
  },
  {
    src: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=600&q=85",
    alt: "Silver Jewellery"
  },
  {
    src: "https://images.unsplash.com/photo-1617038220319-276d3cfab638?w=600&q=85",
    alt: "Men's Gold Collection"
  },
  {
    src: "https://images.unsplash.com/photo-1610375461246-83df859d849d?w=600&q=85",
    alt: "Exclusive Jadau Jewellery"
  }
];

export default function Gallery() {
  return (
    <section
      id="gallery"
      className="relative overflow-hidden py-24 sm:py-32"
      style={{ background: "var(--cream-200)" }}
    >
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(50% 50% at 50% 0%, rgba(201,165,90,0.07), transparent 70%)"
        }}
      />

      <div className="container-luxe relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease }}
          className="mb-14 flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6"
        >
          <div>
            <div className="eyebrow mb-5">Gallery</div>
            <h2
              className="heading-display"
              style={{ fontSize: "clamp(30px, 5vw, 52px)", letterSpacing: "-0.025em" }}
            >
              Crafted with{" "}
              <span className="shimmer-text">Devotion</span>
            </h2>
          </div>
          <p
            className="max-w-sm text-[14px] leading-[1.8] sm:text-right"
            style={{ fontWeight: 300, color: "var(--charcoal-500)" }}
          >
            Each piece in our collection is a testament to the living tradition of Rajasthani
            jewellery artistry.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease }}
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 auto-rows-[180px]"
        >
          {GALLERY_ITEMS.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.97 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease, delay: i * 0.07 }}
              className={`group relative overflow-hidden rounded-2xl ${item.span || ""}`}
              style={{
                border: "1px solid rgba(176,141,74,0.1)",
                boxShadow: "0 10px 30px -15px rgba(26,22,18,0.12)"
              }}
            >
              <img
                src={item.src}
                alt={item.alt}
                crossOrigin="anonymous"
                referrerPolicy="no-referrer"
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div
                className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100 flex items-end p-4"
                style={{ background: "linear-gradient(to top, rgba(26,20,16,0.7) 0%, transparent 60%)" }}
              >
                <span
                  className="text-[11px] font-medium"
                  style={{ color: "var(--cream-100)", letterSpacing: "0.06em" }}
                >
                  {item.alt}
                </span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
