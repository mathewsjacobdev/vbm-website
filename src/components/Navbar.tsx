import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const links = ["Services", "About", "Why Us", "Process", "AI Assist", "Contact"];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass">
      <div className="max-w-7xl mx-auto flex items-center justify-between h-16 px-6 lg:px-12">
        <a href="#top" className="font-display text-2xl font-bold text-gradient-cyan">
          VISIONARY.
        </a>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-7">
          {links.map((l) => (
            <a
              key={l}
              href={`#${l.toLowerCase().replace(/\s/g, "-")}`}
              className="text-sm text-foreground/90 hover:text-primary transition-colors"
            >
              {l}
            </a>
          ))}
          <Button variant="gold" size="sm" asChild>
            <a href="#contact">Get a Quote</a>
          </Button>
        </div>

        {/* Mobile toggle */}
        <button className="md:hidden text-foreground" onClick={() => setOpen(!open)}>
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden glass border-t border-border px-4 pb-4 space-y-3">
          {links.map((l) => (
            <a
              key={l}
              href={`#${l.toLowerCase().replace(/\s/g, "-")}`}
              className="block text-sm text-foreground/90 hover:text-primary transition-colors py-1"
              onClick={() => setOpen(false)}
            >
              {l}
            </a>
          ))}
          <Button variant="gold" size="sm" className="w-full" asChild>
            <a href="#contact" onClick={() => setOpen(false)}>Get a Quote</a>
          </Button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
