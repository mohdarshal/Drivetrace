import { Zap, Brain, FileText, Camera, Gauge, Building2 } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const features = [
  { icon: Zap, label: "Real-time number plate recognition" },
  { icon: Brain, label: "AI powered computer vision" },
  { icon: FileText, label: "Automatic license plate OCR" },
  { icon: Camera, label: "Works with standard cameras" },
  { icon: Gauge, label: "Fast detection and recognition" },
  { icon: Building2, label: "Scalable for smart city systems" },
];

const FeaturesSection = () => {
  const ref = useScrollAnimation({ type: "fadeUp", stagger: 0.08 });

  return (
    <section ref={ref} className="section-container">
      <h2 className="gsap-animate font-display text-3xl md:text-5xl font-bold text-foreground mb-16 text-center">
        Key <span className="gradient-text">Features</span>
      </h2>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {features.map(({ icon: Icon, label }) => (
          <div
            key={label}
            className="gsap-animate glass-card neon-border p-6 rounded-xl flex items-center gap-4 hover:scale-[1.02] transition-transform duration-300"
          >
            <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
              <Icon className="w-5 h-5 text-primary" />
            </div>
            <span className="text-foreground font-medium text-sm">{label}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturesSection;
