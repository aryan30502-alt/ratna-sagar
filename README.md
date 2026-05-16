# Ratna Sagar — Premium Catalogue Website

Luxury catalogue + WhatsApp-enquiry website for **Ratna Sagar, Bhilwara** — gemstones, rudraksha, yantras, vastu and spiritual products.

> Not an ecommerce store. No cart, no checkout. Every CTA converts to **WhatsApp** or the enquiry form.

## Stack
- **Next.js 14** (App Router) + **TypeScript**
- **Tailwind CSS** (custom ivory + champagne-gold + wine palette)
- **Framer Motion** (cinematic, buttery transitions)
- **Lucide** icons
- Google Fonts: *Cormorant Garamond* (display) + *Inter* (sans)

## Design System
- **Body**: warm ivory `#fdfbf6` with subtle gold/wine radial glows (Tanishq / Kalyan inspired — premium but never dull)
- **Accents**: champagne gold `#c3953f → #f0d48a`, deep wine `#841d2c`, ink `#1a120e`
- **Hero**, **Gem Finder** & **Enquiry** use cinematic dark sections for premium contrast
- Glassmorphism, mandala motifs, gemstone orbs, soft gold glows

## Sections
1. Hero — cinematic mandala + gem orbs, dual CTA
2. Marquee — trust strip
3. Gemstones — Navratna cards (planet, zodiac, benefit)
4. Spiritual Collections — Rudraksha, Yantras, Kavach, Parad, Vastu, Puja
5. Gemstone Finder — 3-step interactive recommendation → WhatsApp
6. Why Ratna Sagar — pillars + stats strip
7. Gallery — bento luxury showcase
8. Testimonials — auto-rotating glass cards
9. About / Heritage — Bhilwara story
10. Enquiry — premium form → WhatsApp deep-link
11. Footer + mobile sticky bar + floating WhatsApp

## Setup
```bash
cd ratna-sagar
npm install
npm run dev
```
Open http://localhost:3000

> The TS / CSS lints you may see in the editor before install (e.g. `Cannot find module 'next'`, `Unknown at rule @tailwind`) all clear once dependencies are installed.

## Configure brand details
Edit `lib/data.ts`:
```ts
export const BRAND = {
  name: "Ratna Sagar",
  phone: "+91 90000 00000",
  whatsapp: "919000000000",  // country code + number, digits only
  email: "care@ratnasagar.in",
  address: "Ratna Sagar, Bhilwara, Rajasthan 311001"
};
```

## Notes
- All "Enquire" / "Consult" buttons open a pre-filled WhatsApp message — no backend or storage.
- The gemstone finder is frontend-simulated logic; refine in `recommendGem()` inside `lib/data.ts`.
- Replace placeholder stats ("25+ years", "10,000+ devotees") in `components/WhyUs.tsx` with real numbers.
