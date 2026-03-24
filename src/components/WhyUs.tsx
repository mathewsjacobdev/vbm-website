import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { motion } from "framer-motion";
import { Users, Clock, ShieldCheck, Layers, CheckCircle2 } from "lucide-react";

const features = [
  { icon: Users, title: "Experienced Team", desc: "Construction and maintenance specialists with strong local project knowledge." },
  { icon: Clock, title: "Reliable Timelines", desc: "Structured planning and site coordination to keep projects on schedule." },
  { icon: ShieldCheck, title: "Safety & Quality", desc: "Execution aligned with quality benchmarks and safe work practices." },
  { icon: Layers, title: "Integrated Services", desc: "A single partner for fit-out, maintenance, MEP works, and facility support." },
];

const WhyUs = () => (
  <motion.section
    id="why-us"
    className="relative py-28 md:py-32 bg-gradient-to-b from-[#040814] via-[#0a1321] to-cyan-500/5 border-t border-white/5"
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.7, ease: "easeOut" }}
    viewport={{ once: true }}
  >
    <div className="pointer-events-none absolute left-0 top-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-cyan-500/10 blur-[120px]" />
    <div className="max-w-7xl mx-auto px-6 lg:px-12">
      <motion.div
        className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{
          hidden: {},
          visible: { transition: { staggerChildren: 0.1 } },
        }}
      >
        <motion.div variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } }} transition={{ duration: 0.6, ease: "easeOut" }}>
          <div className="bg-gradient-to-br from-cyan-500/10 to-blue-500/5 border border-cyan-400/30 rounded-2xl p-10">
            <h2 className="font-display text-4xl md:text-5xl font-bold leading-tight">
              Why Choose <span className="text-gradient-cyan">Us</span>
            </h2>
            <p className="text-gray-400 leading-relaxed mt-4">
              VBM combines practical execution, transparent planning, and disciplined quality control to deliver fit-out and
              maintenance outcomes that clients can trust.
            </p>
            <ul className="mt-6 space-y-4">
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-cyan-400 mt-0.5 flex-shrink-0" />
                <span className="text-gray-300">Clear communication and reliable progress updates.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-cyan-400 mt-0.5 flex-shrink-0" />
                <span className="text-gray-300">Strong safety practices and consistent workmanship standards.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-cyan-400 mt-0.5 flex-shrink-0" />
                <span className="text-gray-300">Integrated services that simplify delivery from start to handover.</span>
              </li>
            </ul>
          </div>
        </motion.div>

        <motion.div
          className="grid grid-cols-2 gap-6"
          variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
        >
          {features.map(({ icon: Icon, title, desc }) => (
            <Card key={title} className="glass rounded-xl p-6 hover:-translate-y-2 hover:border-cyan-400/30 transition-all duration-300">
              <CardHeader className="p-0">
                <div className="w-12 h-12 rounded-full bg-cyan-500/10 flex items-center justify-center mb-4">
                  <Icon className="w-6 h-6 text-cyan-400" />
                </div>
                <CardTitle className="font-display text-base">{title}</CardTitle>
                <CardDescription className="leading-relaxed text-gray-400 mt-2 text-sm">{desc}</CardDescription>
              </CardHeader>
            </Card>
          ))}
        </motion.div>
      </motion.div>
    </div>
  </motion.section>
);

export default WhyUs;
