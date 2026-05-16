import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Ratna Sagar — Mewar's Premium Gemstone & Spiritual Destination",
  description:
    "Trusted natural certified gemstones, rudraksha, yantras, vastu and astrology solutions in Bhilwara, Rajasthan. Personalized expert consultation.",
  keywords: [
    "Ratna Sagar",
    "Bhilwara gemstones",
    "natural gemstones",
    "rudraksha",
    "yantra",
    "vastu",
    "astrology",
    "blue sapphire",
    "yellow sapphire",
    "emerald",
    "ruby"
  ],
  openGraph: {
    title: "Ratna Sagar — Premium Gemstones & Spiritual Solutions",
    description:
      "Natural certified gemstones and authentic spiritual products from Bhilwara, Rajasthan.",
    type: "website"
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@300;400;500;600;700&family=Inter:wght@300;400;500;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-screen antialiased">{children}</body>
    </html>
  );
}
