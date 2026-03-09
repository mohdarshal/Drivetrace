import { ParkingCircle, TrafficCone, Landmark, Home, Building2, Truck } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const apps = [
  { icon: ParkingCircle, label: "Smart parking systems" },
  { icon: TrafficCone, label: "Traffic monitoring" },
  { icon: Landmark, label: "Toll booth automation" },
  { icon: Home, label: "Residential security gates" },
  { icon: Building2, label: "Smart city infrastructure" },
  { icon: Truck, label: "Vehicle tracking systems" },
];

const ApplicationsSection = () => {
  const ref = useScrollAnimation({ type: "fadeUp", stagger: 0.1 });

  return (
    <section ref={ref} className="section-container">
      <h2 className="gsap-animate font-display text-3xl md:text-5xl font-bold text-foreground mb-16 text-center">
        <span className="gradient-text">Applications</span>
      </h2>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {apps.map(({ icon: Icon, label }) => (
          <div
            key={label}
            className="gsap-animate glass-card neon-border rounded-2xl p-8 text-center hover:scale-[1.02] transition-transform duration-300"
          >
            <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
              <Icon className="w-7 h-7 text-primary" />
            </div>
            <p className="text-foreground font-medium">{label}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ApplicationsSection;
