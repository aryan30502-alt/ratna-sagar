import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Gaytri Gold — Bhilwara's Premier Gold & Diamond Jewellery",
  description:
    "BIS Hallmarked gold jewellery, GIA certified diamonds, bridal sets, and traditional Rajasthani jewellery in Bhilwara, Rajasthan. 40+ years of trusted legacy.",
  keywords: [
    "Gaytri Gold",
    "gold jewellery Bhilwara",
    "diamond jewellery Rajasthan",
    "bridal jewellery",
    "22K gold",
    "BIS hallmark",
    "kundan jewellery",
    "polki jewellery",
    "Bhilwara jeweller",
    "gold rate Bhilwara"
  ],
  openGraph: {
    title: "Gaytri Gold — Premium Gold & Diamond Jewellery",
    description:
      "BIS Hallmarked gold jewellery and GIA certified diamonds from Bhilwara, Rajasthan. 40+ years of trust.",
    type: "website",
    siteName: "Gaytri Gold"
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;1,300;1,400&family=Inter:wght@300;400;500;600&display=swap"
          rel="stylesheet"
        />
        <meta name="theme-color" content="#1a1410" />
      </head>
      <body className="min-h-screen antialiased">{children}</body>
    </html>
  );
}
