import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { motion } from "framer-motion";
import { Users, Clock, ShieldCheck, Headphones, BadgeDollarSign, Layers } from "lucide-react";

const features = [
  { icon: Users, title: "Experienced Team", desc: "Construction and maintenance specialists with strong local project knowledge." },
  { icon: Clock, title: "Reliable Timelines", desc: "Structured planning and site coordination to keep projects on schedule." },
  { icon: ShieldCheck, title: "Safety & Quality", desc: "Execution aligned with quality benchmarks and safe work practices." },
  { icon: Headphones, title: "Responsive Support", desc: "Quick communication and follow-up for both planned and urgent needs." },
  { icon: BadgeDollarSign, title: "Value-Focused Delivery", desc: "Cost-conscious solutions without compromising workmanship standards." },
  { icon: Layers, title: "Integrated Services", desc: "A single partner for fit-out, maintenance, MEP works, and facility support." },
];

const WhyUs = () => (
  <motion.section
    id="why-us"
    className="py-24 bg-muted/30"
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, ease: "easeOut" }}
    viewport={{ once: true }}
  >
    <div className="container mx-auto px-6 md:px-12 lg:px-20">
      <h2 className="font-display text-3xl sm:text-4xl font-bold text-center mb-12">
        Why Choose <span className="text-gradient-cyan">Us</span>
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {features.map(({ icon: Icon, title, desc }) => (
          <Card key={title} className="glass group h-full hover:-translate-y-1 hover:shadow-xl hover:shadow-primary/10 hover:border-primary/50 transition-all duration-300 text-center">
            <CardHeader className="items-center h-full">
              <motion.div whileHover={{ scale: 1.1 }} transition={{ duration: 0.2 }} className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mb-3 group-hover:bg-primary/20 transition-colors">
                <Icon className="w-7 h-7 text-primary" />
              </motion.div>
              <CardTitle className="font-display text-lg">{title}</CardTitle>
              <CardDescription className="leading-relaxed">{desc}</CardDescription>
            </CardHeader>
          </Card>
        ))}
      </div>
    </div>
  </motion.section>
);

export default WhyUs;
