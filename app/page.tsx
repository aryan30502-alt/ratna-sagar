import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import CategoryChips from "@/components/CategoryChips";
import Gemstones from "@/components/Gemstones";
import Spiritual from "@/components/Spiritual";
import GemstoneFinder from "@/components/GemstoneFinder";
import WhyUs from "@/components/WhyUs";
import Gallery from "@/components/Gallery";
import Testimonials from "@/components/Testimonials";
import About from "@/components/About";
import Enquiry from "@/components/Enquiry";
import Footer from "@/components/Footer";
import MobileBar from "@/components/MobileBar";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";

export default function Page() {
  return (
    <main className="relative">
      <Navbar />
      <Hero />
      <Marquee />
      <CategoryChips />
      <Gemstones />
      <Spiritual />
      <GemstoneFinder />
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
