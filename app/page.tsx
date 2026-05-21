import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import Products from "@/components/Products";
import HowItWorks from "@/components/HowItWorks";
import Pricing from "@/components/Pricing";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import FadeIn from "@/components/FadeIn";
import GoldDivider from "@/components/GoldDivider";

export default function Home() {
  return (
    <main style={{ minHeight: "100vh" }}>
      <Nav />
      <Hero />
      <Marquee />
      <FadeIn><Products /></FadeIn>
      <GoldDivider />
      <FadeIn><HowItWorks /></FadeIn>
      <GoldDivider />
      <FadeIn><Pricing /></FadeIn>
      <GoldDivider />
      <FadeIn><Contact /></FadeIn>
      <Footer />
    </main>
  );
}
