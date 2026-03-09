import { AlertTriangle, Clock, ShieldAlert } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const problems = [
  { icon: Clock, title: "Time Consuming", desc: "Manual monitoring requires constant human attention and resources." },
  { icon: AlertTriangle, title: "Error Prone", desc: "Human monitoring leads to missed events and misidentifications." },
  { icon: ShieldAlert, title: "Security Gaps", desc: "Traditional systems can't scale to meet modern city demands." },
];

const ProblemSection = () => {
  const ref = useScrollAnimation({ type: "fadeUp", stagger: 0.12 });

  return (
    <section ref={ref} className="section-container">
      <div className="text-center mb-16">
        <h2 className="gsap-animate font-display text-3xl md:text-5xl font-bold text-foreground mb-6">
          The <span className="gradient-text">Problem</span>
        </h2>
        <p className="gsap-animate text-muted-foreground text-lg max-w-2xl mx-auto">
          Manual vehicle monitoring in parking areas, security gates, and traffic systems is inefficient
          and time consuming. Human monitoring can lead to errors and security risks. Modern cities
          require automated systems that can quickly and accurately identify vehicles.
        </p>
      </div>
      <div className="grid md:grid-cols-3 gap-6">
        {problems.map(({ icon: Icon, title, desc }) => (
          <div
            key={title}
            className="gsap-animate glass-card neon-border p-8 rounded-2xl hover:scale-[1.02] transition-transform duration-300"
          >
            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-5">
              <Icon className="w-6 h-6 text-primary" />
            </div>
            <h3 className="font-display text-xl font-semibold text-foreground mb-3">{title}</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">{desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProblemSection;
