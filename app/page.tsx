import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Products from "@/components/Products";
import HowItWorks from "@/components/HowItWorks";
import Pricing from "@/components/Pricing";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="bg-[#08080E] text-white min-h-screen">
      <Nav />
      <Hero />
      <Products />
      <HowItWorks />
      <Pricing />
      <Contact />
      <Footer />
    </main>
  );
}
