import { motion } from "framer-motion";

const steps = [
  { num: "01", title: "Consultation", desc: "We review project goals, site requirements, and technical scope." },
  { num: "02", title: "Site Assessment", desc: "Our team surveys conditions and defines an actionable work strategy." },
  { num: "03", title: "Proposal & Planning", desc: "You receive a clear proposal with timeline, resources, and cost details." },
  { num: "04", title: "Execution", desc: "VBM delivers works with close supervision, safety control, and quality checks." },
  { num: "05", title: "Handover & Support", desc: "Final closeout, documentation, and ongoing maintenance support when required." },
];

const Process = () => (
  <motion.section
    id="process"
    className="relative py-28 md:py-32 bg-gradient-to-b from-transparent via-[#071224]/30 to-transparent border-t border-white/5"
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.7, ease: "easeOut" }}
    viewport={{ once: true }}
  >
    <div className="pointer-events-none absolute top-14 left-10 w-64 h-64 rounded-full bg-cyan-500/10 blur-3xl" />
    <div className="max-w-7xl mx-auto px-6 lg:px-12">
      <h2 className="font-display text-4xl md:text-5xl font-bold text-center mb-14 leading-tight">
        Our <span className="text-gradient-cyan">Process</span>
      </h2>

      <div className="relative max-w-4xl mx-auto space-y-10">
        <div className="pointer-events-none absolute left-6 top-2 bottom-2 w-1 bg-gradient-to-b from-cyan-400/0 via-cyan-400/60 to-cyan-400/0 blur-[1px]" />
        {steps.map(({ num, title, desc }, i) => (
          <motion.div
            key={num}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: i * 0.1, ease: "easeOut" }}
            viewport={{ once: true }}
            className="flex gap-8 items-start glass rounded-2xl p-6 sm:p-7 hover:-translate-y-2 hover:shadow-xl hover:shadow-cyan-500/20 hover:border-primary/50 transition-all duration-300"
          >
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 rounded-full bg-gradient-cyan flex items-center justify-center font-display font-bold text-primary-foreground text-sm">
                {num}
              </div>
              {i < steps.length - 1 && <div className="w-px h-12 bg-border/70 mt-2" />}
            </div>
            <div className="pt-2">
              <h3 className="font-display text-xl font-semibold text-foreground">{title}</h3>
              <p className="text-gray-400 mt-2 leading-relaxed">{desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </motion.section>
);

export default Process;
