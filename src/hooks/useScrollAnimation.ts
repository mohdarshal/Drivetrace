import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

type AnimationType = "fadeUp" | "fadeLeft" | "fadeRight" | "scaleIn";

interface UseScrollAnimationOptions {
  type?: AnimationType;
  stagger?: number;
  duration?: number;
  delay?: number;
  selector?: string;
}

const animations: Record<AnimationType, gsap.TweenVars> = {
  fadeUp: { y: 60, opacity: 0 },
  fadeLeft: { x: -60, opacity: 0 },
  fadeRight: { x: 60, opacity: 0 },
  scaleIn: { scale: 0.9, opacity: 0 },
};

export const useScrollAnimation = ({
  type = "fadeUp",
  stagger = 0.12,
  duration = 0.9,
  delay = 0,
  selector = ".gsap-animate",
}: UseScrollAnimationOptions = {}) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const elements = ref.current?.querySelectorAll(selector);
      if (!elements?.length) return;

      gsap.from(elements, {
        ...animations[type],
        duration,
        delay,
        stagger,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ref.current,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none reverse",
        },
      });
    }, ref);

    return () => ctx.revert();
  }, [type, stagger, duration, delay, selector]);

  return ref;
};
