import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const AiAssist = () => {
  const [email, setEmail] = useState("");
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      toast({ title: "You're on the list!", description: "We'll notify you when AI Assist launches." });
      setEmail("");
    }
  };

  return (
    <motion.section
      id="ai-assist"
      className="py-24 bg-card/40 border-y border-border/60"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true }}
    >
      <div className="container mx-auto px-6 md:px-12 lg:px-20 text-center">
        <div className="max-w-xl mx-auto">
          <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6 animate-pulse-glow">
            <Sparkles className="w-8 h-8 text-primary" />
          </div>

          <h2 className="font-display text-3xl sm:text-4xl font-bold mb-2">
            AI Assist <span className="text-gradient-cyan">Design & Build</span>
          </h2>

          <span className="inline-block mt-3 px-4 py-1 rounded-full text-sm font-semibold bg-secondary/20 text-secondary border border-secondary/40">
            Coming Soon
          </span>

          <p className="text-muted-foreground mt-6 mb-8 leading-relaxed">
            VBM is developing an AI-powered assistant to streamline scope planning, material coordination,
            and maintenance decision support for faster project delivery.
          </p>

          <form onSubmit={handleSubmit} className="mt-1 flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <Input
              type="email"
              placeholder="Enter your work email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="flex-1 h-11 bg-background/90 border-border focus-visible:ring-primary focus-visible:ring-offset-0"
            />
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }} transition={{ duration: 0.2 }}>
              <Button variant="cyan" type="submit" className="h-11 px-6">Notify Me</Button>
            </motion.div>
          </form>
        </div>
      </div>
    </motion.section>
  );
};

export default AiAssist;
