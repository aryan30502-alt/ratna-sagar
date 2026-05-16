"use client";
import { motion } from "framer-motion";
import { MessageCircle, Phone, MapPin, Mail, Send } from "lucide-react";
import { useState } from "react";
import { BRAND, waLink } from "@/lib/data";

const easing = [0.2, 0.8, 0.2, 1] as const;

export default function Enquiry() {
  const [form, setForm] = useState({ name: "", phone: "", product: "", message: "" });

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    const msg = `Namaste, I have an enquiry.\n• Name: ${form.name}\n• Phone: ${form.phone}\n• Interest: ${form.product}\n• Message: ${form.message}`;
    window.open(waLink(msg), "_blank");
  };

  const update = (k: keyof typeof form) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
      setForm({ ...form, [k]: e.target.value });

  return (
    <section id="enquiry" className="relative overflow-hidden section-dark py-24 sm:py-28">
      <div className="absolute inset-0 hero-glow opacity-70" />
      <div className="container-luxe relative grid gap-10 md:grid-cols-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: easing }}
          className="md:col-span-5"
        >
          <div className="eyebrow-dark">Begin the Conversation</div>
          <h2 className="mt-5 heading-display text-4xl leading-tight text-ivory-50 sm:text-5xl">
            A <span className="shimmer-text">personalised consultation</span> awaits you.
          </h2>
          <p className="mt-5 max-w-md text-ivory-200/80">
            Share a few details and our experts will guide you to the right gemstone, ritual or
            spiritual remedy — with patience and precision.
          </p>

          <div className="mt-8 space-y-4">
            <Info icon={<Phone className="h-4 w-4" />} label="Call" value={BRAND.phone}
              href={`tel:${BRAND.phone.replace(/\s/g, "")}`} />
            <Info icon={<MessageCircle className="h-4 w-4" />} label="WhatsApp" value={BRAND.phone}
              href={waLink("Namaste, I would like a consultation.")} />
            <Info icon={<Mail className="h-4 w-4" />} label="Email" value={BRAND.email}
              href={`mailto:${BRAND.email}`} />
            <Info icon={<MapPin className="h-4 w-4" />} label="Visit" value={BRAND.address} />
          </div>
        </motion.div>

        <motion.form
          onSubmit={submit}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: easing, delay: 0.1 }}
          className="md:col-span-7 rounded-3xl glass-dark p-7 sm:p-10"
        >
          <h3 className="heading-display text-2xl text-ivory-50">Enquiry Form</h3>
          <p className="mt-1 text-xs uppercase tracking-[0.28em] text-gold-200/70">
            Replies within working hours
          </p>

          <div className="mt-7 grid gap-5 sm:grid-cols-2">
            <Field label="Full Name" value={form.name} onChange={update("name")} required />
            <Field label="Phone / WhatsApp" value={form.phone} onChange={update("phone")} required type="tel" />
            <Field
              label="Interested Product"
              value={form.product}
              onChange={update("product")}
              placeholder="e.g. Yellow Sapphire, Rudraksha"
              className="sm:col-span-2"
            />
            <Field
              label="Message"
              value={form.message}
              onChange={update("message")}
              textarea
              className="sm:col-span-2"
            />
          </div>

          <button type="submit" className="btn-gold mt-7 w-full sm:w-auto">
            <Send className="h-4 w-4" /> Send via WhatsApp
          </button>

          <p className="mt-4 text-[11px] text-ivory-200/60">
            Your enquiry will open a pre-filled WhatsApp message — no data is stored.
          </p>
        </motion.form>
      </div>
    </section>
  );
}

function Info({ icon, label, value, href }: { icon: React.ReactNode; label: string; value: string; href?: string }) {
  const inner = (
    <div className="group flex items-center gap-4 rounded-2xl border border-gold-300/20 bg-white/[0.03] p-4 transition-all hover:border-gold-300/55 hover:bg-white/[0.06]">
      <div className="grid h-10 w-10 place-items-center rounded-full bg-gold-gradient text-ink-900">
        {icon}
      </div>
      <div>
        <div className="text-[10px] uppercase tracking-[0.28em] text-gold-200/70">{label}</div>
        <div className="text-sm text-ivory-100">{value}</div>
      </div>
    </div>
  );
  return href ? <a href={href} target="_blank" rel="noreferrer">{inner}</a> : inner;
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
  const cls =
    "w-full rounded-xl border border-gold-300/25 bg-white/[0.04] px-4 py-3 text-sm text-ivory-50 placeholder:text-ivory-200/40 outline-none transition-all focus:border-gold-300/70 focus:bg-white/[0.07]";
  return (
    <label className={`block ${className}`}>
      <span className="mb-2 block text-[10px] uppercase tracking-[0.28em] text-gold-200/70">
        {label}
        {required && " *"}
      </span>
      {textarea ? (
        <textarea
          rows={4}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          required={required}
          className={cls}
        />
      ) : (
        <input
          type={type}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          required={required}
          className={cls}
        />
      )}
    </label>
  );
}
