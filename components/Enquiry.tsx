"use client";
import { motion } from "framer-motion";
import { MessageCircle, Phone, MapPin, Mail, Send } from "lucide-react";
import { useState } from "react";
import { BRAND, waLink } from "@/lib/data";

const ease = [0.16, 1, 0.3, 1] as const;

export default function Enquiry() {
  const [form, setForm] = useState({ name: "", phone: "", whatsapp: "", city: "", product: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    const msg =
      `Namaste, I am interested in jewellery at Gaytri Gold.\n\n` +
      `• Name: ${form.name}\n` +
      `• Phone: ${form.phone}\n` +
      `• WhatsApp: ${form.whatsapp || form.phone}\n` +
      `• City: ${form.city}\n` +
      `• Interested in: ${form.product}\n` +
      `• Message: ${form.message}`;
    window.open(waLink(msg), "_blank");
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
  };

  const update = (k: keyof typeof form) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
      setForm({ ...form, [k]: e.target.value });

  return (
    <section
      id="enquiry"
      className="relative overflow-hidden py-24 sm:py-32"
      style={{ background: "var(--cream-200)" }}
    >
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(55% 55% at 68% 30%, rgba(201,165,90,0.08), transparent 70%)"
        }}
      />

      <div className="container-luxe relative grid gap-14 md:grid-cols-12">
        {/* Info */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease }}
          className="md:col-span-5"
        >
          <div className="eyebrow">Make an Enquiry</div>
          <h2
            className="mt-7 heading-display"
            style={{
              fontSize: "clamp(30px, 5vw, 50px)",
              letterSpacing: "-0.025em",
              lineHeight: 1.05,
              color: "var(--charcoal-900)"
            }}
          >
            Your dream jewellery{" "}
            <span className="shimmer-text">awaits you.</span>
          </h2>
          <p
            className="mt-7 max-w-md text-[15px] leading-[1.85]"
            style={{ fontWeight: 300, color: "var(--charcoal-500)" }}
          >
            Share a few details about what you are looking for — whether it is a bridal set, a
            solitaire, a custom design, or a gift. Our team will reach out to you personally within
            working hours.
          </p>

          <div className="mt-10 space-y-3">
            <InfoRow
              icon={<Phone className="h-4 w-4" />}
              label="Call"
              value={BRAND.phone}
              href={`tel:${BRAND.phone.replace(/\s/g, "")}`}
            />
            <InfoRow
              icon={<MessageCircle className="h-4 w-4" />}
              label="WhatsApp"
              value={BRAND.phone}
              href={waLink("Namaste, I would like to enquire about jewellery at Gaytri Gold.")}
            />
            <InfoRow
              icon={<Mail className="h-4 w-4" />}
              label="Email"
              value={BRAND.email}
              href={`mailto:${BRAND.email}`}
            />
            <InfoRow
              icon={<MapPin className="h-4 w-4" />}
              label="Visit Us"
              value={BRAND.address}
            />
          </div>

          {/* Quick WhatsApp CTA */}
          <a
            href={waLink("Namaste! I would like to enquire about jewellery at Gaytri Gold.")}
            target="_blank"
            rel="noreferrer"
            className="btn-gold mt-9 inline-flex"
          >
            <MessageCircle className="h-4 w-4" />
            Quick WhatsApp Enquiry
          </a>
        </motion.div>

        {/* Form */}
        <motion.form
          onSubmit={submit}
          initial={{ opacity: 0, y: 24, filter: "blur(3px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease, delay: 0.12 }}
          className="md:col-span-7 rounded-3xl p-8 sm:p-10"
          style={{
            background: "rgba(255,255,255,0.7)",
            border: "1px solid rgba(176,141,74,0.12)",
            backdropFilter: "blur(12px)",
            boxShadow: "0 25px 60px -20px rgba(26,22,18,0.06)"
          }}
        >
          <h3
            className="heading-display text-[26px]"
            style={{ color: "var(--charcoal-900)" }}
          >
            Jewellery Enquiry Form
          </h3>
          <p
            className="mt-1.5 text-[10px] uppercase"
            style={{ letterSpacing: "0.32em", color: "var(--gold-accent)", opacity: 0.65 }}
          >
            Response within working hours
          </p>

          <div className="mt-8 grid gap-5 sm:grid-cols-2">
            <Field label="Full Name" value={form.name} onChange={update("name")} required />
            <Field label="Phone Number" value={form.phone} onChange={update("phone")} required type="tel" />
            <Field label="WhatsApp Number" value={form.whatsapp} onChange={update("whatsapp")} type="tel" placeholder="If different from phone" />
            <Field label="City" value={form.city} onChange={update("city")} placeholder="e.g. Jaipur, Udaipur" />
            <Field
              label="Interested In"
              value={form.product}
              onChange={update("product")}
              placeholder="e.g. Bridal Set, Diamond Ring, Gold Bangles"
              className="sm:col-span-2"
            />
            <Field
              label="Additional Message"
              value={form.message}
              onChange={update("message")}
              textarea
              className="sm:col-span-2"
              placeholder="Any specific design, occasion, budget range..."
            />
          </div>

          <button
            type="submit"
            className="btn-gold mt-8 w-full sm:w-auto"
          >
            {submitted ? "✓ Sent!" : <><Send className="h-4 w-4" /> Send via WhatsApp</>}
          </button>

          <p className="mt-4 text-[11px]" style={{ color: "var(--charcoal-500)", opacity: 0.55 }}>
            This will open a pre-filled WhatsApp message to our team. No data is stored on this
            form.
          </p>
        </motion.form>
      </div>
    </section>
  );
}

function InfoRow({
  icon,
  label,
  value,
  href
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
  href?: string;
}) {
  const inner = (
    <div
      className="group flex items-center gap-4 rounded-2xl p-3.5 transition-all duration-500 hover:bg-white/60"
      style={{ border: "1px solid rgba(176,141,74,0.1)" }}
    >
      <div
        className="grid h-9 w-9 shrink-0 place-items-center rounded-full"
        style={{
          background: "linear-gradient(135deg, var(--gold-warm), var(--gold-accent))",
          color: "var(--cream-50)"
        }}
      >
        {icon}
      </div>
      <div>
        <div
          className="text-[9px] uppercase"
          style={{ letterSpacing: "0.32em", color: "var(--gold-accent)", opacity: 0.6 }}
        >
          {label}
        </div>
        <div className="text-[13.5px]" style={{ color: "var(--charcoal-800)" }}>
          {value}
        </div>
      </div>
    </div>
  );
  return href ? (
    <a href={href} target="_blank" rel="noreferrer">
      {inner}
    </a>
  ) : (
    inner
  );
}

function Field({
  label,
  value,
  onChange,
  type = "text",
  required,
  placeholder,
  textarea,
  className = ""
}: {
  label: string;
  value: string;
  onChange: (e: any) => void;
  type?: string;
  required?: boolean;
  placeholder?: string;
  textarea?: boolean;
  className?: string;
}) {
  const base =
    "w-full rounded-xl px-4 py-3.5 text-[13.5px] outline-none transition-all duration-500";
  const fieldStyle = {
    border: "1px solid rgba(176,141,74,0.15)",
    background: "rgba(255,255,255,0.5)",
    color: "var(--charcoal-900)"
  };
  return (
    <label className={`block ${className}`}>
      <span
        className="mb-2 block text-[9px] uppercase"
        style={{ letterSpacing: "0.32em", color: "var(--gold-accent)", opacity: 0.6 }}
      >
        {label}
        {required && " *"}
      </span>
      {textarea ? (
        <textarea
          rows={4}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          className={base}
          style={fieldStyle}
        />
      ) : (
        <input
          type={type}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          required={required}
          className={base}
          style={fieldStyle}
        />
      )}
    </label>
  );
}
