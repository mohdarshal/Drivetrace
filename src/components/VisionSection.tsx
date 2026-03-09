import { Sparkles } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const VisionSection = () => {
  const ref = useScrollAnimation({ type: "scaleIn" });

  return (
    <section ref={ref} className="section-container">
      <div className="gsap-animate glass-card neon-border rounded-3xl p-10 md:p-16 text-center neon-glow relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 pointer-events-none" />
        <div className="relative">
          <Sparkles className="w-10 h-10 text-primary mx-auto mb-6 animate-float" />
          <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground mb-6">
            Our <span className="gradient-text">Vision</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed">
            DriveTrace aims to build intelligent vehicle identification systems that make cities smarter,
            safer, and more efficient using artificial intelligence and real time computer vision.
          </p>
        </div>
      </div>
    </section>
  );
};

export default VisionSection;
