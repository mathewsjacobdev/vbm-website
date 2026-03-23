import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import About from "@/components/About";
import WhyUs from "@/components/WhyUs";
import Process from "@/components/Process";
import AiAssist from "@/components/AiAssist";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => (
  <div id="top" className="min-h-screen bg-background">
    <Navbar />
    <Hero />
    <Services />
    <About />
    <WhyUs />
    <Process />
    <AiAssist />
    <Contact />
    <Footer />
  </div>
);

export default Index;
