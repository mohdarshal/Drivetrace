import { ArrowRight, Shield } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const HeroSection = () => {
  const ref = useScrollAnimation({ type: "fadeUp", stagger: 0.15 });

  return (
    <section ref={ref} id="about" className="section-container text-center">
      <div className="gsap-animate inline-flex items-center gap-2 glass-card neon-border px-4 py-2 rounded-full mb-8">
        <Shield className="w-4 h-4 text-primary" />
        <span className="text-xs text-muted-foreground uppercase tracking-widest">AI Powered Security</span>
      </div>
      <h2 className="gsap-animate font-display text-4xl md:text-6xl lg:text-7xl font-bold text-foreground leading-tight mb-6">
        DriveTrace – AI Powered<br />
        <span className="gradient-text">Vehicle Recognition</span>
      </h2>
      <p className="gsap-animate text-muted-foreground text-lg md:text-xl max-w-3xl mx-auto mb-10 leading-relaxed">
        DriveTrace is an intelligent Automatic Number Plate Recognition system that uses computer vision
        and artificial intelligence to detect and read vehicle license plates in real time.
      </p>
      <div className="gsap-animate">
        <button
          onClick={() => document.getElementById("technology")?.scrollIntoView({ behavior: "smooth" })}
          className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-full font-medium text-sm hover:opacity-90 transition-opacity neon-glow"
        >
          View Technology <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </section>
  );
};

export default HeroSection;
