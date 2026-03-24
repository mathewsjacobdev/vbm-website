import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const Hero = () => (
  <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
    {/* Background glow */}
    <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-primary/5 blur-[120px]" />

    <div className="container mx-auto px-6 md:px-12 lg:px-20 text-center relative z-10 pt-28 pb-16">
      <motion.h1
        className="font-display text-4xl sm:text-6xl lg:text-8xl font-bold leading-[1.1] tracking-tight"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <span className="text-gradient-cyan">BUILD BETTER.</span>
        <br />
        <span className="text-foreground">MAINTAIN SMARTER.</span>
      </motion.h1>

      <p className="mt-8 text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
        Professional building maintenance and fit-out services in Qatar.
      </p>

      <div className="mt-12 flex flex-col sm:flex-row gap-4 sm:gap-5 justify-center">
        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }} transition={{ duration: 0.2 }}>
          <Button variant="cyan" size="lg" asChild>
            <a href="#services">Explore Services</a>
          </Button>
        </motion.div>
        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }} transition={{ duration: 0.2 }}>
          <Button variant="gold" size="lg" asChild>
            <a href="#contact">Request a Quote</a>
          </Button>
        </motion.div>
      </div>
    </div>
  </section>
);

export default Hero;
