import { Smartphone, Zap } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const PrototypeSection = () => {
  const ref = useScrollAnimation({ type: "scaleIn", stagger: 0.12 });

  return (
    <section ref={ref} className="section-container">
      <div className="gsap-animate glass-card neon-border rounded-3xl p-10 md:p-16 text-center neon-glow">
        <div className="inline-flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full mb-6">
          <Zap className="w-4 h-4 text-primary" />
          <span className="text-xs text-primary uppercase tracking-widest font-medium">Live Prototype</span>
        </div>
        <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground mb-6">
          Prototype <span className="gradient-text">Demonstration</span>
        </h2>
        <p className="text-muted-foreground text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
          A working prototype of DriveTrace has been developed. The system connects a camera to a mobile
          device where the AI model processes the video stream and automatically detects and reads
          vehicle number plates in real time.
        </p>
        <div className="flex justify-center">
          <div className="glass-card neon-border rounded-2xl p-8 flex items-center gap-6">
            <Smartphone className="w-12 h-12 text-primary" />
            <div className="text-left">
              <p className="font-display font-semibold text-foreground">Mobile Integration</p>
              <p className="text-muted-foreground text-sm">Camera → AI Model → Real-time Detection</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PrototypeSection;
