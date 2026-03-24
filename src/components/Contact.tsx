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
      className="py-24"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true }}
    >
      <div className="container mx-auto px-6 md:px-12 lg:px-20">
        <h2 className="font-display text-3xl sm:text-4xl font-bold text-center mb-12">
          Get in <span className="text-gradient-cyan">Touch</span>
        </h2>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 max-w-5xl mx-auto">
          {/* Info */}
          <div className="space-y-8">
            <p className="text-muted-foreground text-lg">
              Contact VBM for building maintenance and fit-out support in Qatar. We respond quickly to discuss
              your requirements and provide a clear next step.
            </p>

            <div className="space-y-5">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-primary" />
                </div>
                <span className="text-foreground">Qatar (Lusail / Doha)</span>
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
          <form onSubmit={handleSubmit} className="glass rounded-xl p-6 sm:p-8 space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
              <Input placeholder="First Name" required className="bg-background border-border h-11 focus-visible:ring-primary focus-visible:ring-offset-0" />
              <Input placeholder="Last Name" required className="bg-background border-border h-11 focus-visible:ring-primary focus-visible:ring-offset-0" />
            </div>
            <Input type="email" placeholder="Email" required className="bg-background border-border h-11 focus-visible:ring-primary focus-visible:ring-offset-0" />
            <Input type="tel" placeholder="Phone" required className="bg-background border-border h-11 focus-visible:ring-primary focus-visible:ring-offset-0" />

            <Textarea placeholder="Message" rows={5} required className="bg-background border-border focus-visible:ring-primary focus-visible:ring-offset-0" />

            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }} transition={{ duration: 0.2 }}>
              <Button variant="gold" size="lg" type="submit" className="w-full">
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
