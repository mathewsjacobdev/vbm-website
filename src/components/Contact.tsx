import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { motion } from "framer-motion";
import { MapPin, Mail } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({ title: "Message sent!", description: "We'll get back to you shortly." });
    (e.target as HTMLFormElement).reset();
  };

  return (
    <motion.section
      id="contact"
      className="relative py-28 md:py-32 bg-gradient-to-b from-transparent via-[#06101f]/30 to-transparent border-t border-white/5"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      viewport={{ once: true }}
    >
      <div className="pointer-events-none absolute bottom-10 left-8 w-72 h-72 rounded-full bg-blue-500/10 blur-3xl" />
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <h2 className="font-display text-4xl md:text-5xl font-bold text-center mb-14 leading-tight">
          Get in <span className="text-gradient-cyan">Touch</span>
        </h2>

        <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Info */}
          <div className="space-y-10 glass rounded-2xl p-8 sm:p-9">
            <p className="text-gray-400 text-lg leading-relaxed">
              Contact VBM for building maintenance and fit-out support in Qatar. We respond quickly to discuss
              your requirements and provide a clear next step.
            </p>

            <div className="space-y-5">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-primary" />
                </div>
                <span className="text-foreground">Qatar</span>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Mail className="w-5 h-5 text-primary" />
                </div>
                <a href="mailto:projects@vbm.qa" className="text-primary hover:underline">projects@vbm.qa</a>
              </div>
            </div>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="glass rounded-2xl p-7 sm:p-9 space-y-7">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, ease: "easeOut" }} viewport={{ once: true }}>
                <Input placeholder="First Name" required className="bg-background border-border h-11 focus-visible:ring-primary focus-visible:ring-offset-0" />
              </motion.div>
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }} viewport={{ once: true }}>
                <Input placeholder="Last Name" required className="bg-background border-border h-11 focus-visible:ring-primary focus-visible:ring-offset-0" />
              </motion.div>
            </div>
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }} viewport={{ once: true }}>
              <Input type="email" placeholder="Email" required className="bg-background border-border h-11 focus-visible:ring-primary focus-visible:ring-offset-0" />
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }} viewport={{ once: true }}>
              <Input type="tel" placeholder="Phone" required className="bg-background border-border h-11 focus-visible:ring-primary focus-visible:ring-offset-0" />
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }} viewport={{ once: true }}>
              <Textarea placeholder="Message" rows={5} required className="bg-background border-border focus-visible:ring-primary focus-visible:ring-offset-0" />
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              transition={{ duration: 0.2 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <Button variant="gold" size="lg" type="submit" className="w-full shadow-xl shadow-cyan-500/35">
                Send Message
              </Button>
            </motion.div>
          </form>
        </div>
      </div>
    </motion.section>
  );
};

export default Contact;
