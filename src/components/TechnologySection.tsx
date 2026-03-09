import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const stack = [
  { name: "Python", desc: "Core programming language" },
  { name: "OpenCV", desc: "Computer vision framework" },
  { name: "Deep Learning", desc: "Neural network models" },
  { name: "OCR", desc: "Optical character recognition" },
  { name: "Computer Vision", desc: "Image processing pipeline" },
  { name: "Camera Integration", desc: "Real-time video capture" },
];

const TechnologySection = () => {
  const ref = useScrollAnimation({ type: "fadeUp", stagger: 0.08 });

  return (
    <section ref={ref} id="technology" className="section-container">
      <div className="text-center mb-16">
        <h2 className="gsap-animate font-display text-3xl md:text-5xl font-bold text-foreground mb-6">
          Technology <span className="gradient-text">Stack</span>
        </h2>
        <p className="gsap-animate text-muted-foreground text-lg max-w-2xl mx-auto">
          DriveTrace is built using modern artificial intelligence and computer vision technologies.
        </p>
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {stack.map(({ name, desc }) => (
          <div
            key={name}
            className="gsap-animate glass-card neon-border p-6 rounded-xl"
          >
            <p className="font-display font-semibold text-foreground mb-1">{name}</p>
            <p className="text-muted-foreground text-sm">{desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TechnologySection;
