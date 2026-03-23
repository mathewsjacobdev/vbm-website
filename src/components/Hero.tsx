import { Button } from "@/components/ui/button";

const Hero = () => (
  <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
    {/* Background glow */}
    <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-primary/5 blur-[120px]" />

    <div className="container mx-auto px-4 text-center relative z-10 pt-24">
      <h1 className="font-display text-5xl sm:text-6xl lg:text-8xl font-bold leading-tight tracking-tight">
        <span className="text-gradient-cyan">BUILD BETTER.</span>
        <br />
        <span className="text-foreground">MAINTAIN SMARTER.</span>
      </h1>

      <p className="mt-6 text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
        Visionary Building Maintenance &amp; Fit-Out (VBM) delivers reliable maintenance, fit-out, and
        MEP solutions for commercial and residential projects across Lusail and Doha, Qatar.
      </p>

      <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
        <Button variant="cyan" size="lg" asChild>
          <a href="#services">Explore Services</a>
        </Button>
        <Button variant="gold" size="lg" asChild>
          <a href="#contact">Request a Quote</a>
        </Button>
      </div>
    </div>
  </section>
);

export default Hero;
