import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Wrench, CalendarCheck, Zap, Settings, RefreshCcw, Building } from "lucide-react";

const services = [
  { icon: Building, title: "Interior Fit-Out", desc: "End-to-end interior fit-out execution for offices, retail spaces, and residential properties." },
  { icon: CalendarCheck, title: "Planned Maintenance", desc: "Preventive maintenance programs that reduce downtime and protect building assets." },
  { icon: Zap, title: "Reactive Maintenance", desc: "Fast-response corrective maintenance for urgent breakdowns and operational disruptions." },
  { icon: Settings, title: "MEP Works", desc: "Professional mechanical, electrical, and plumbing installation, upgrades, and support." },
  { icon: RefreshCcw, title: "Refurbishment", desc: "Targeted refurbishment works that modernize existing spaces with minimal interruption." },
  { icon: Wrench, title: "Facility Management", desc: "Integrated facility management services to maintain safety, efficiency, and performance." },
];

const Services = () => (
  <section id="services" className="py-24">
    <div className="container mx-auto px-4">
      <h2 className="font-display text-3xl sm:text-4xl font-bold text-center mb-4">
        Our <span className="text-gradient-cyan">Services</span>
      </h2>
      <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-12">
        Comprehensive construction support and maintenance services tailored to project requirements in Qatar.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map(({ icon: Icon, title, desc }) => (
          <Card key={title} className="glass group hover:border-primary/50 transition-all duration-300">
            <CardHeader>
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-3 group-hover:bg-primary/20 transition-colors">
                <Icon className="w-6 h-6 text-primary" />
              </div>
              <CardTitle className="font-display text-lg">{title}</CardTitle>
              <CardDescription>{desc}</CardDescription>
            </CardHeader>
          </Card>
        ))}
      </div>
    </div>
  </section>
);

export default Services;
