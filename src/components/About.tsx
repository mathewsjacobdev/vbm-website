import { CheckCircle } from "lucide-react";

const points = [
  "Experienced teams for fit-out, MEP, and maintenance delivery",
  "Clear communication and dependable project coordination",
  "Strict quality, safety, and compliance standards",
  "Scalable support from single-site to multi-site operations",
  "Long-term value through practical, efficient solutions",
];

const About = () => (
  <section id="about" className="py-24">
    <div className="container mx-auto px-4">
      <div className="max-w-3xl mx-auto">
        <h2 className="font-display text-3xl sm:text-4xl font-bold mb-4">
          Built on <span className="text-gradient-cyan">Trust</span>
        </h2>
        <p className="text-muted-foreground mb-8 text-lg leading-relaxed">
          Visionary Building Maintenance &amp; Fit-Out (VBM) supports clients across Lusail and Doha with
          practical, high-quality construction and maintenance services. From interior fit-outs to planned and
          reactive maintenance, we focus on safe execution, reliable timelines, and measurable project outcomes.
        </p>

        <ul className="space-y-4">
          {points.map((p) => (
            <li key={p} className="flex items-center gap-3">
              <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
              <span className="text-foreground">{p}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  </section>
);

export default About;
