import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
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

const FitOutSection = () => (
  <motion.section
    id="fit-out"
    className="relative py-28 bg-gradient-to-r from-[#020617] via-[#031526] to-[#020617] border-y border-cyan-500/10"
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, ease: "easeOut" }}
    viewport={{ once: true }}
  >
    <div className="container mx-auto px-6 md:px-12 lg:px-20">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
        <div className="max-w-xl">
          <p className="text-sm font-semibold tracking-widest text-cyan-400 uppercase mb-4">
            OUR EXPERTISE
          </p>
          <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold leading-tight mb-6">
            <span className="text-foreground">Interior </span>
            <span className="text-cyan-400 drop-shadow-[0_0_10px_rgba(34,211,238,0.6)]">Fit-Out</span>
            <span className="text-foreground"> Solutions</span>
          </h2>
          <p className="text-muted-foreground text-base sm:text-lg leading-relaxed">
            We deliver complete interior fit-out solutions for commercial, retail, and residential spaces. From
            concept to execution, our team ensures high-quality workmanship, cost efficiency, and compliance with
            all safety and building standards.
          </p>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }} transition={{ duration: 0.2 }}>
            <Button variant="cyan" size="lg" className="mt-8" asChild>
              <a href="#contact">Request Fit-Out Quote -&gt;</a>
            </Button>
          </motion.div>
        </div>

        <div className="relative">
          <div className="pointer-events-none absolute -top-10 -right-8 w-72 h-72 bg-cyan-500/10 blur-3xl -z-10" />
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              hidden: {},
              visible: {
                transition: {
                  staggerChildren: 0.15,
                },
              },
            }}
          >
            {features.map(({ icon: Icon, title, description }) => (
              <motion.div
                key={title}
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  visible: { opacity: 1, y: 0 },
                }}
                transition={{ duration: 0.5, ease: "easeOut" }}
              >
                <Card className="glass h-full group border border-cyan-500/20 hover:-translate-y-2 hover:shadow-2xl hover:shadow-cyan-500/10 hover:border-cyan-400/40 transition-all duration-300">
                  <CardHeader className="h-full">
                    <motion.div
                      className="w-11 h-11 rounded-lg bg-cyan-500/10 p-3 flex items-center justify-center mb-3 transition-colors group-hover:bg-cyan-500/20"
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Icon className="w-5 h-5 text-cyan-400 transition-colors group-hover:text-cyan-300" />
                    </motion.div>
                    <CardTitle className="font-display text-lg">{title}</CardTitle>
                    <CardDescription className="leading-relaxed">{description}</CardDescription>
                  </CardHeader>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  </motion.section>
);

export default FitOutSection;
