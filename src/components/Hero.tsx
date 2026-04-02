import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const fadeInTopLeft = {
  hidden: { opacity: 0, x: -40, y: -40 },
  visible: { opacity: 1, x: 0, y: 0 },
};

const fadeInTopRight = {
  hidden: { opacity: 0, x: 40, y: -40 },
  visible: { opacity: 1, x: 0, y: 0 },
};

const fadeInBottomLeft = {
  hidden: { opacity: 0, x: -40, y: 40 },
  visible: { opacity: 1, x: 0, y: 0 },
};

const fadeInBottomRight = {
  hidden: { opacity: 0, x: 40, y: 40 },
  visible: { opacity: 1, x: 0, y: 0 },
};

const floatingTags = [
  {
    label: "Interior Fit-Out",
    positionClass: "top-12 left-2",
    initial: { opacity: 0, x: -30, y: -30 },
    delay: 0.1,
    duration: 0.7,
  },
  {
    label: "Building Maintenance",
    positionClass: "top-16 right-2",
    initial: { opacity: 0, x: 30, y: -30 },
    delay: 0.25,
    duration: 0.75,
  },
  {
    label: "MEP Works",
    positionClass: "bottom-24 left-4",
    initial: { opacity: 0, x: -30, y: 30 },
    delay: 0.4,
    duration: 0.8,
  },
  {
    label: "Refurbishment",
    positionClass: "bottom-20 right-4",
    initial: { opacity: 0, x: 30, y: 30 },
    delay: 0.55,
    duration: 0.85,
  },
];

const Hero = () => (
  <motion.section
    className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[linear-gradient(rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:40px_40px]"
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.7, ease: "easeOut" }}
    viewport={{ once: true }}
  >
    <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-cyan-500/20 blur-[140px] rounded-full pointer-events-none" />
    <div className="absolute bottom-0 left-0 w-[420px] h-[420px] bg-blue-500/10 blur-[120px] rounded-full pointer-events-none" />

    <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-12 text-center py-20">
      <motion.h1
        className="font-display text-6xl md:text-7xl lg:text-8xl font-bold leading-tight tracking-tight"
        variants={fadeInTopLeft}
        initial="hidden"
        animate="visible"
        transition={{ duration: 0.8, ease: "easeOut", delay: 0 }}
      >
        <span className="text-gradient-cyan">BUILD BETTER.</span>
        <br />
        <span className="text-foreground">MAINTAIN SMARTER.</span>
      </motion.h1>

      <motion.p
        className="mt-10 text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed"
        variants={fadeInTopRight}
        initial="hidden"
        animate="visible"
        transition={{ duration: 0.9, ease: "easeOut", delay: 0.2 }}
      >
        Professional building maintenance and fit-out services in Qatar.
      </motion.p>

      <motion.div
        className="mt-14 flex flex-col sm:flex-row gap-5 justify-center"
        variants={fadeInBottomLeft}
        initial="hidden"
        animate="visible"
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
      >
        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }} transition={{ duration: 0.2 }}>
          <Button
            size="lg"
            className="bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full px-6 py-3 shadow-lg shadow-cyan-500/30"
            asChild
          >
            <a href="#services">Explore Services</a>
          </Button>
        </motion.div>
        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }} transition={{ duration: 0.2 }}>
          <Button
            size="lg"
            className="bg-white/10 text-foreground border border-white/15 rounded-full px-6 py-3 hover:bg-white/15"
            asChild
          >
            <a href="#contact">Request a Quote</a>
          </Button>
        </motion.div>
      </motion.div>

      <motion.div
        className="mt-10 mx-auto w-fit rounded-full border border-primary/20 bg-card/60 px-4 py-2 text-xs sm:text-sm text-primary"
        variants={fadeInBottomRight}
        initial="hidden"
        animate="visible"
        transition={{ duration: 1.1, ease: "easeOut", delay: 0.6 }}
      >
        Trusted execution across Qatar
      </motion.div>

      <div className="pointer-events-none absolute inset-0 hidden md:block">
        {floatingTags.map((tag) => (
          <motion.div
            key={tag.label}
            className={`absolute ${tag.positionClass} bg-white/5 backdrop-blur-md border border-white/10 rounded-full px-4 py-2 text-sm text-gray-300 shadow-lg shadow-cyan-500/10 hover:bg-cyan-500/10 hover:text-cyan-300 hover:scale-105 transition-all duration-300`}
            initial={tag.initial}
            animate={{ opacity: 1, x: 0, y: 0 }}
            transition={{ duration: tag.duration, ease: "easeOut", delay: tag.delay }}
          >
            {tag.label}
          </motion.div>
        ))}
      </div>
    </div>
  </motion.section>
);

export default Hero;
