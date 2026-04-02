import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { motion } from "framer-motion";
import { Wrench, CalendarCheck, Zap, Settings, RefreshCcw, Building } from "lucide-react";

const services = [
  { icon: Building, title: "Interior Fit-Out", desc: "End-to-end interior fit-out execution for offices, retail spaces, and residential properties." },
  { icon: CalendarCheck, title: "Building Maintenance", desc: "Comprehensive planned and reactive building maintenance for safety, uptime, and asset longevity." },
  { icon: Settings, title: "MEP Works", desc: "Professional mechanical, electrical, and plumbing installation, upgrades, and support." },
  { icon: RefreshCcw, title: "Refurbishment", desc: "Targeted refurbishment works that modernize existing spaces with minimal interruption." },
];

const Services = () => (
  <motion.section
    id="services"
    className="relative py-28 bg-gradient-to-b from-black/0 via-[#06111f]/50 to-black/0 border-t border-white/5"
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.7, ease: "easeOut" }}
    viewport={{ once: true }}
  >
    <div className="pointer-events-none absolute top-16 left-8 w-64 h-64 rounded-full bg-cyan-500/10 blur-3xl" />
    <div className="max-w-7xl mx-auto px-6 lg:px-12">
      <h2 className="font-display text-4xl md:text-5xl font-bold text-center mb-6 leading-tight">
        Our <span className="text-gradient-cyan">Services</span>
      </h2>
      <p className="text-gray-400 text-center text-lg leading-relaxed max-w-3xl mx-auto mb-14">
        Comprehensive construction support and maintenance services tailored to project requirements in Qatar.
      </p>

      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{
          hidden: {},
          visible: {
            transition: {
              staggerChildren: 0.1,
            },
          },
        }}
      >
        {services.map(({ icon: Icon, title, desc }, index) => (
          <motion.div
            key={title}
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <Card
              className={`group h-full flex flex-col justify-between p-6 md:p-7 transition-all duration-300 hover:-translate-y-2 hover:shadow-lg hover:shadow-cyan-500/10 ${
                index === 0
                  ? "bg-gradient-to-br from-cyan-500/10 to-blue-500/5 border border-cyan-400/30"
                  : "glass border border-white/10"
              }`}
            >
              <CardHeader className="h-full p-0">
                {index === 0 && (
                  <span className="inline-flex w-fit items-center rounded-full bg-cyan-500/10 px-3 py-1 text-xs text-cyan-300 mb-3">
                    Core Service
                  </span>
                )}
                <motion.div whileHover={{ scale: 1.1 }} transition={{ duration: 0.2 }} className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <Icon className="w-6 h-6 text-primary" />
                </motion.div>
                <CardTitle className="mt-4 text-lg font-semibold">{title}</CardTitle>
                <CardDescription className="mt-2 text-gray-400 text-sm leading-relaxed">{desc}</CardDescription>
              </CardHeader>
            </Card>
          </motion.div>
        ))}
      </motion.div>
    </div>
  </motion.section>
);

export default Services;
