import { Scan, Brain, Database } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const SolutionSection = () => {
  const ref = useScrollAnimation({ type: "fadeUp", stagger: 0.12 });

  return (
    <section ref={ref} className="section-container">
      <div className="grid md:grid-cols-2 gap-16 items-center">
        <div>
          <h2 className="gsap-animate font-display text-3xl md:text-5xl font-bold text-foreground mb-6">
            Our <span className="gradient-text">Solution</span>
          </h2>
          <p className="gsap-animate text-muted-foreground text-lg leading-relaxed mb-8">
            DriveTrace provides an AI-powered Automatic Number Plate Recognition system that
            automatically detects vehicle license plates using cameras and computer vision algorithms.
            The system extracts the plate number using OCR and converts it into digital data
            for monitoring and analysis.
          </p>
        </div>
        <div className="grid gap-4">
          {[
            { icon: Scan, label: "AI Detection", desc: "Computer vision detects license plates instantly" },
            { icon: Brain, label: "Smart OCR", desc: "Extracts characters with AI-powered recognition" },
            { icon: Database, label: "Digital Data", desc: "Converts plates to searchable digital records" },
          ].map(({ icon: Icon, label, desc }) => (
            <div key={label} className="gsap-animate glass-card neon-border p-6 rounded-xl flex items-start gap-4">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                <Icon className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h4 className="font-display font-semibold text-foreground mb-1">{label}</h4>
                <p className="text-muted-foreground text-sm">{desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;
