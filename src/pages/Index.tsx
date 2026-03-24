import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import FitOutSection from "@/components/FitOutSection";
import Services from "@/components/Services";
import About from "@/components/About";
import WhyUs from "@/components/WhyUs";
import Process from "@/components/Process";
import AiAssist from "@/components/AiAssist";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => (
  <div id="top" className="relative min-h-screen bg-gradient-to-b from-[#020617] via-[#020617] to-black overflow-hidden">
    <div className="pointer-events-none absolute top-0 right-0 w-[500px] h-[500px] bg-cyan-500/20 blur-[120px] rounded-full -z-0" />
    <div className="relative z-10">
      <Navbar />
      <Hero />
      <FitOutSection />
      <Services />
      <About />
      <WhyUs />
      <Process />
      <AiAssist />
      <Contact />
      <Footer />
    </div>
  </div>
);

export default Index;
