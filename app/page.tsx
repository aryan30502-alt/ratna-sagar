"use client";
import { useState } from "react";
import RateTicker from "@/components/RateTicker";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import CategoryChips from "@/components/CategoryChips";
import Catalogue from "@/components/Catalogue";
import WhyUs from "@/components/WhyUs";
import Gallery from "@/components/Gallery";
import Testimonials from "@/components/Testimonials";
import About from "@/components/About";
import Enquiry from "@/components/Enquiry";
import Footer from "@/components/Footer";
import MobileBar from "@/components/MobileBar";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";

export default function Page() {
  const [activeCategory, setActiveCategory] = useState("Gold Jewellery");

  return (
    <main className="relative">
      <RateTicker />
      <Navbar />
      <Hero />
      <Marquee />
      <CategoryChips activeCategory={activeCategory} setActiveCategory={setActiveCategory} />
      <Catalogue activeCategory={activeCategory} setActiveCategory={setActiveCategory} />
      <WhyUs />
      <Gallery />
      <Testimonials />
      <About />
      <Enquiry />
      <Footer />
      <MobileBar />
      <FloatingWhatsApp />
    </main>
  );
}
