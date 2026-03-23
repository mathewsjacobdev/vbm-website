import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
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
    <section id="ai-assist" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4 text-center">
        <div className="max-w-xl mx-auto">
          <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6 animate-pulse-glow">
            <Sparkles className="w-8 h-8 text-primary" />
          </div>

          <h2 className="font-display text-3xl sm:text-4xl font-bold mb-2">
            AI Assist <span className="text-gradient-cyan">Design & Build</span>
          </h2>

          <span className="inline-block mt-2 px-4 py-1 rounded-full text-sm font-semibold bg-secondary/20 text-secondary border border-secondary/30">
            Coming Soon
          </span>

          <p className="text-muted-foreground mt-6 mb-8 leading-relaxed">
            VBM is developing an AI-powered assistant to streamline scope planning, material coordination,
            and maintenance decision support for faster project delivery.
          </p>

          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <Input
              type="email"
              placeholder="Enter your work email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="flex-1 bg-background border-border"
            />
            <Button variant="cyan" type="submit">Notify Me</Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default AiAssist;
