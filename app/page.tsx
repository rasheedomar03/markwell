import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import Products from "@/components/Products";
import HowItWorks from "@/components/HowItWorks";
import Pricing from "@/components/Pricing";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import FadeIn from "@/components/FadeIn";

export default function Home() {
  return (
    <main style={{ minHeight: "100vh" }}>
      <Nav />
      <Hero />
      <Marquee />
      <FadeIn><Products /></FadeIn>
      <FadeIn><HowItWorks /></FadeIn>
      <FadeIn><Pricing /></FadeIn>
      <FadeIn><Contact /></FadeIn>
      <Footer />
    </main>
  );
}
