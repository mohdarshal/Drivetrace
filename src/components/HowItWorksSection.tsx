import { Camera, Search, FileText, Database } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const steps = [
  { icon: Camera, title: "Capture", desc: "Camera captures vehicle image" },
  { icon: Search, title: "Detect", desc: "AI detects license plate" },
  { icon: FileText, title: "Extract", desc: "OCR extracts plate number" },
  { icon: Database, title: "Monitor", desc: "Data is stored and monitored" },
];

const HowItWorksSection = () => {
  const ref = useScrollAnimation({ type: "fadeUp", stagger: 0.15 });

  return (
    <section ref={ref} id="product" className="section-container">
      <div className="text-center mb-16">
        <h2 className="gsap-animate font-display text-3xl md:text-5xl font-bold text-foreground mb-6">
          How DriveTrace <span className="gradient-text">Works</span>
        </h2>
        <p className="gsap-animate text-muted-foreground text-lg max-w-2xl mx-auto">
          DriveTrace processes live camera feeds and identifies vehicles in real time.
          The system locates the license plate and extracts the characters using AI-powered recognition technology.
        </p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {steps.map(({ icon: Icon, title, desc }, i) => (
          <div key={title} className="gsap-animate text-center">
            <div className="relative mx-auto w-20 h-20 rounded-2xl glass-card neon-border flex items-center justify-center mb-5">
              <Icon className="w-8 h-8 text-primary" />
              <span className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-primary text-primary-foreground text-xs font-bold flex items-center justify-center">
                {i + 1}
              </span>
            </div>
            <h3 className="font-display font-semibold text-foreground mb-2">{title}</h3>
            <p className="text-muted-foreground text-sm">{desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HowItWorksSection;
