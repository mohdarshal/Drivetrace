import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const HeroVideo = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Fade out overlay text as user scrolls past hero
    if (overlayRef.current) {
      gsap.to(overlayRef.current, {
        opacity: 0,
        y: -40,
        ease: "power2.in",
        scrollTrigger: {
          trigger: container,
          start: "10% top",
          end: "bottom top",
          scrub: true,
        },
      });
    }

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  return (
    <div ref={containerRef} className="relative h-screen w-full" id="home">
      <div className="absolute inset-0 w-full h-full overflow-hidden">
        <video
          className="w-full h-full object-cover"
          src="/videos/hero.mp4"
          muted
          playsInline
          autoPlay
          loop
          preload="auto"
        />
        {/* Overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-transparent to-background pointer-events-none" />

        {/* Title overlay */}
        <div
          ref={overlayRef}
          className="absolute bottom-16 left-0 right-0 flex flex-col items-center text-center px-6 pointer-events-none"
        >
          <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-bold text-foreground leading-tight mb-4">
            Drive<span className="gradient-text">Trace</span>
          </h1>
          <p className="text-muted-foreground text-sm md:text-base max-w-md">
            Scroll to explore AI-powered vehicle recognition
          </p>
          <div className="mt-6 w-6 h-10 rounded-full border-2 border-muted-foreground/30 flex justify-center pt-2">
            <div className="w-1 h-2 rounded-full bg-primary animate-pulse-glow" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroVideo;
