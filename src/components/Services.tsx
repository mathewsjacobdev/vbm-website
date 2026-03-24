import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { motion } from "framer-motion";
import { Wrench, CalendarCheck, Zap, Settings, RefreshCcw, Building } from "lucide-react";

const services = [
  { icon: Building, title: "Interior Fit-Out", desc: "End-to-end interior fit-out execution for offices, retail spaces, and residential properties." },
  { icon: CalendarCheck, title: "Planned Maintenance", desc: "Preventive maintenance programs that reduce downtime and protect building assets." },
  { icon: Zap, title: "Reactive Maintenance", desc: "Fast-response corrective maintenance for urgent breakdowns and operational disruptions." },
  { icon: Settings, title: "MEP Works", desc: "Professional mechanical, electrical, and plumbing installation, upgrades, and support." },
  { icon: RefreshCcw, title: "Refurbishment", desc: "Targeted refurbishment works that modernize existing spaces with minimal interruption." },
  { icon: Wrench, title: "Facility Management", desc: "Integrated facility management services to maintain safety, efficiency, and performance." },
];

const Services = () => (
  <motion.section
    id="services"
    className="py-24"
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, ease: "easeOut" }}
    viewport={{ once: true }}
  >
    <div className="container mx-auto px-6 md:px-12 lg:px-20">
      <h2 className="font-display text-3xl sm:text-4xl font-bold text-center mb-4">
        Our <span className="text-gradient-cyan">Services</span>
      </h2>
      <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-12">
        Comprehensive construction support and maintenance services tailored to project requirements in Qatar.
      </p>

      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
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
        {services.map(({ icon: Icon, title, desc }) => (
          <motion.div
            key={title}
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            <Card className="glass group h-full hover:-translate-y-1 hover:shadow-xl hover:shadow-primary/10 hover:border-primary/50 transition-all duration-300">
              <CardHeader className="h-full">
                <motion.div whileHover={{ scale: 1.1 }} transition={{ duration: 0.2 }} className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-3 group-hover:bg-primary/20 transition-colors">
                  <Icon className="w-6 h-6 text-primary" />
                </motion.div>
                <CardTitle className="font-display text-lg">{title}</CardTitle>
                <CardDescription className="leading-relaxed">{desc}</CardDescription>
              </CardHeader>
            </Card>
          </motion.div>
        ))}
      </motion.div>
    </div>
  </motion.section>
);

export default Services;
