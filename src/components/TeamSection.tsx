import anonymousImg from "@/assets/anonymous.png";
import techHeadImg from "@/assets/techHead.jpeg";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const TeamSection = () => {
  const ref = useScrollAnimation({ type: "scaleIn", stagger: 0.1 });

  return (
    <section ref={ref} id="team" className="section-container">
      <h2 className="gsap-animate font-display text-3xl md:text-5xl font-bold text-foreground mb-16 text-center">
        Our <span className="gradient-text">Team</span>
      </h2>
      <div className="flex flex-col md:flex-row justify-center items-stretch gap-8 max-w-5xl mx-auto">
        <div className="gsap-animate w-full max-w-md mx-auto glass-card neon-border rounded-3xl p-10 text-center neon-glow">
          <div className="w-28 h-28 rounded-full overflow-hidden mx-auto mb-6 neon-border">
            <img src={anonymousImg} alt="Mohamed Arshal" className="w-full h-full object-cover" />
          </div>
          <h3 className="font-display text-2xl font-bold text-foreground mb-1">Mohamed Arshal</h3>
          <p className="text-primary text-sm font-medium mb-4">Founder & CEO – DriveTrace</p>
          <p className="text-muted-foreground text-sm leading-relaxed">
            AI developer focused on computer vision and intelligent traffic monitoring systems.
          </p>
        </div>

        <div className="gsap-animate w-full max-w-md mx-auto glass-card neon-border rounded-3xl p-10 text-center neon-glow">
          <div className="w-28 h-28 rounded-full overflow-hidden mx-auto mb-6 neon-border">
            <img src={techHeadImg} alt="Atchaya" className="w-full h-full object-cover" />
          </div>
          <h3 className="font-display text-2xl font-bold text-foreground mb-1">Atchaya</h3>
          <p className="text-primary text-sm font-medium mb-4">Technical Head & UI/UX Designer – DriveTrace</p>
          <p className="text-muted-foreground text-sm leading-relaxed">
            UI/UX designer and technology lead focused on creating intelligent, user-friendly AI systems and modern product experiences.
          </p>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
