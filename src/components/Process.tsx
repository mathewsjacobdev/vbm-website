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
    className="py-24"
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, ease: "easeOut" }}
    viewport={{ once: true }}
  >
    <div className="container mx-auto px-6 md:px-12 lg:px-20">
      <h2 className="font-display text-3xl sm:text-4xl font-bold text-center mb-12">
        Our <span className="text-gradient-cyan">Process</span>
      </h2>

      <div className="max-w-3xl mx-auto space-y-8">
        {steps.map(({ num, title, desc }, i) => (
          <div key={num} className="flex gap-6 items-start">
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 rounded-full bg-gradient-cyan flex items-center justify-center font-display font-bold text-primary-foreground text-sm">
                {num}
              </div>
              {i < steps.length - 1 && <div className="w-px h-12 bg-border mt-2" />}
            </div>
            <div className="pt-2">
              <h3 className="font-display text-lg font-semibold text-foreground">{title}</h3>
              <p className="text-muted-foreground mt-1">{desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </motion.section>
);

export default Process;
