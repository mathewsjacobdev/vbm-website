import { CheckCircle } from "lucide-react";
import { motion } from "framer-motion";

const points = [
  "Experienced teams for Fit-Out, MEP and Maintenance delivery",
  "Clear communication and dependable project coordination",
  "Strict quality, Safety and Compliance standards",
  "Scalable support from single-site to multi-site operations",
  "Long-term value through practical, Efficient solutions",
];

const About = () => (
  <motion.section
    id="about"
    className="relative py-28 md:py-32 bg-gradient-to-b from-transparent via-[#05101d]/35 to-transparent border-t border-white/5"
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.7, ease: "easeOut" }}
    viewport={{ once: true }}
  >
    <div className="pointer-events-none absolute right-0 top-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-cyan-500/10 blur-[120px]" />
    <div className="max-w-7xl mx-auto px-6 lg:px-12">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <h2 className="font-display text-4xl md:text-5xl font-bold leading-tight">
            Built on <span className="text-gradient-cyan">Trust</span>
          </h2>
          <p className="text-gray-400 leading-relaxed mt-4 text-lg">
            Visionary Building Maintenance &amp; Fit-Out (VBM) supports clients across Qatar with
            practical, High-quality construction and Maintenance services. From interior fit-outs to planned and
            reactive maintenance, we focus on safe execution, reliable timelines, and measurable project outcomes.
          </p>

          <ul className="space-y-4 mt-6">
            {points.map((p) => (
              <li key={p} className="flex items-start gap-3 mt-4">
                <CheckCircle className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-0.5" />
                <span className="text-foreground">{p}</span>
              </li>
            ))}
          </ul>
        </motion.div>

        <motion.div
          className="glass rounded-2xl p-8"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <div className="space-y-6">
            <div>
              <p className="text-3xl font-bold text-cyan-400">2+ Years Experience</p>
              <p className="text-gray-400 mt-1">Delivering reliable fit-out and maintenance projects.</p>
            </div>
            <div className="h-px bg-white/10" />
            <div>
              <p className="text-3xl font-bold text-cyan-400">300+ Clients</p>
              <p className="text-gray-400 mt-1">Supporting commercial, retail, and residential spaces.</p>
            </div>
            <div className="h-px bg-white/10" />
            <div>
              <p className="text-3xl font-bold text-cyan-400">100% Satisfaction</p>
              <p className="text-gray-400 mt-1">Focused on quality, safety, and long-term value.</p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  </motion.section>
);

export default About;
