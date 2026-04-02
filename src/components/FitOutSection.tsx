import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { useRef } from "react";
import { Building2, ClipboardCheck, ShieldCheck, Wrench } from "lucide-react";

const features = [
  {
    icon: ClipboardCheck,
    title: "Cost Management",
    description:
      "Careful planning and budget control to deliver projects efficiently without overspending.",
  },
  {
    icon: Building2,
    title: "Project Management",
    description:
      "End-to-end project coordination ensuring timely delivery and smooth execution.",
  },
  {
    icon: Wrench,
    title: "Design & Compliance",
    description:
      "Working with architects and regulations to ensure safe and approved designs.",
  },
  {
    icon: ShieldCheck,
    title: "Health & Safety",
    description:
      "Strict adherence to safety standards ensuring secure and risk-free project environments.",
  },
];

const FitOutSection = () => {
  const ref = useRef<HTMLElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.78", "center 0.5"],
  });

  const xLeftRaw = useTransform(scrollYProgress, [0, 1], [-110, 0]);
  const xRightRaw = useTransform(scrollYProgress, [0, 1], [110, 0]);
  const opacityLeftRaw = useTransform(scrollYProgress, [0, 0.55], [0, 1]);
  const opacityRightRaw = useTransform(scrollYProgress, [0, 0.55], [0, 1]);
  const scaleLeftRaw = useTransform(scrollYProgress, [0, 1], [0.95, 1]);
  const scaleRightRaw = useTransform(scrollYProgress, [0, 1], [0.95, 1]);

  const xLeft = useSpring(xLeftRaw, { stiffness: 90, damping: 24, mass: 0.7 });
  const xRight = useSpring(xRightRaw, { stiffness: 90, damping: 24, mass: 0.7 });
  const opacityLeft = useSpring(opacityLeftRaw, { stiffness: 70, damping: 20, mass: 0.8 });
  const opacityRight = useSpring(opacityRightRaw, { stiffness: 70, damping: 20, mass: 0.8 });
  const scaleLeft = useSpring(scaleLeftRaw, { stiffness: 100, damping: 24, mass: 0.7 });
  const scaleRight = useSpring(scaleRightRaw, { stiffness: 100, damping: 24, mass: 0.7 });

  return (
    <section
      id="fit-out"
      ref={ref}
      className="relative py-28 md:py-32 bg-gradient-to-r from-[#020617] via-[#031526] to-[#020617] border-y border-cyan-500/10 border-t border-white/5"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <motion.div className="max-w-xl" style={{ x: xLeft, opacity: opacityLeft, scale: scaleLeft }}>
          <p className="text-sm font-semibold tracking-widest text-cyan-400 uppercase mb-4">
            OUR EXPERTISE
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-bold leading-tight mb-8">
            <span className="text-foreground">Interior </span>
            <span className="text-cyan-400 drop-shadow-[0_0_10px_rgba(34,211,238,0.6)]">Fit-Out</span>
            <span className="text-foreground"> Solutions</span>
          </h2>
          <p className="text-gray-400 text-base sm:text-lg leading-relaxed">
             We deliver complete interior fit-out solutions for Commercial, Retail and Residential spaces. From
  concept to execution, Our team ensures high-quality workmanship, Cost efficiency, and Compliance with
  all safety and building standards.
          </p>
          
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }} transition={{ duration: 0.2 }}>
            <Button variant="cyan" size="lg" className="mt-8" asChild>
              <a href="#contact">Request Fit-Out Quote -&gt;</a>
            </Button>
          </motion.div>
        </motion.div>

          <motion.div className="relative" style={{ x: xRight, opacity: opacityRight, scale: scaleRight }}>
          <div className="pointer-events-none absolute -top-10 -right-8 w-72 h-72 bg-cyan-500/10 blur-3xl -z-10" />
          <div className="pointer-events-none absolute bottom-0 left-0 w-72 h-72 bg-blue-500/10 blur-3xl -z-10" />
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-12">
            {features.map(({ icon: Icon, title, description }) => (
              <div key={title}>
                <Card className="glass h-full group border border-cyan-500/20 hover:-translate-y-2 hover:shadow-xl hover:shadow-cyan-500/20 hover:border-cyan-400/40 transition-all duration-300">
                  <CardHeader className="h-full">
                    <motion.div
                      className="w-11 h-11 rounded-lg bg-cyan-500/10 p-3 flex items-center justify-center mb-3 transition-colors group-hover:bg-cyan-500/20"
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Icon className="w-5 h-5 text-cyan-400 transition-colors group-hover:text-cyan-300" />
                    </motion.div>
                    <CardTitle className="font-display text-lg">{title}</CardTitle>
                    <CardDescription className="leading-relaxed text-gray-400">{description}</CardDescription>
                  </CardHeader>
                </Card>
              </div>
            ))}
          </div>
        </motion.div>
        </div>
      </div>
    </section>
  );
};

export default FitOutSection;
