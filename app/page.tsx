import { About } from "@/components/sections/About";
import { Contact } from "@/components/sections/Contact";
import { Cta } from "@/components/sections/Cta";
import { Gallery } from "@/components/sections/Gallery";
import { Hero } from "@/components/sections/Hero";
import { Services } from "@/components/sections/Services";
import { WhyChoose } from "@/components/sections/WhyChoose";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Services />
        <WhyChoose />
        <About />
        <Gallery />
        <Cta />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
