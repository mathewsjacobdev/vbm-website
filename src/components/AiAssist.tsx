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
      className="relative py-24 bg-gradient-to-r from-[#051226] via-[#071a31] to-[#051226] border-y border-border/60 border-t border-white/5"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      viewport={{ once: true }}
    >
      <div className="pointer-events-none absolute w-[600px] h-[600px] bg-cyan-500/10 blur-[140px] rounded-full top-[-100px] left-1/2 -translate-x-1/2" />
      <div className="max-w-4xl mx-auto px-6 lg:px-12 text-center">
        <div className="rounded-2xl p-10 bg-white/[0.03] backdrop-blur-xl border border-white/10 hover:border-cyan-400/20 transition-all duration-300">
          <div className="w-14 h-14 rounded-full bg-cyan-500/10 flex items-center justify-center mx-auto mb-8 shadow-lg shadow-cyan-500/20">
            <Sparkles className="w-8 h-8 text-primary" />
          </div>

          <h2 className="font-display text-4xl md:text-5xl font-bold mb-4 leading-tight">
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 text-transparent bg-clip-text">AI Assist Design &amp; Build</span>
          </h2>

          <span className="inline-block mt-3 text-xs px-4 py-1 rounded-full bg-yellow-500/10 text-yellow-400 border border-yellow-500/20 font-semibold">
            Coming Soon
          </span>

          <p className="text-gray-400 mt-8 mb-10 text-lg leading-relaxed">
            VBM is developing an AI-powered assistant to streamline scope planning, material coordination,
            and maintenance decision support for faster project delivery.
          </p>

          <form onSubmit={handleSubmit} className="flex items-center gap-3 mt-6 max-w-lg mx-auto flex-col sm:flex-row">
            <Input
              type="email"
              placeholder="Enter your work email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="flex-1 rounded-full px-5 py-3 h-12 bg-black/40 border border-white/10 focus-visible:ring-primary focus-visible:ring-offset-0 focus:border-cyan-400/40"
            />
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }} transition={{ duration: 0.2 }}>
              <Button variant="cyan" type="submit" className="h-12 px-6 hover:shadow-cyan-500/30">Notify Me</Button>
            </motion.div>
          </form>
        </div>
      </div>
    </motion.section>
  );
};

export default AiAssist;
