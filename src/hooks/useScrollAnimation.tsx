"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

interface UseScrollAnimationProps {
  trigger?: string;
  start?: string;
  animation: {
    from: gsap.TweenVars;
    duration?: number;
    ease?: string;
    delay?: number;
  };
  stagger?: number;
}

export const useScrollAnimation = ({
  trigger = "top 100%",
  start = "top 100%",
  animation,
  stagger = 0,
}: UseScrollAnimationProps) => {
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (elementRef.current) {
      const element = elementRef.current;
      const children = element.children;

      if (children.length > 1 && stagger > 0) {
        // Animate children with stagger
        gsap.from(children, {
          ...animation.from,
          duration: animation.duration || 0.6,
          ease: animation.ease || "power2.out",
          stagger: stagger,
          scrollTrigger: {
            trigger: element,
            start: start,
            toggleActions: "play none none none",
            once: true,
          },
        });
      } else {
        // Animate single element
        gsap.from(element, {
          ...animation.from,
          duration: animation.duration || 0.6,
          ease: animation.ease || "power2.out",
          delay: animation.delay || 0,
          scrollTrigger: {
            trigger: element,
            start: start,
            toggleActions: "play none none none",
            once: true,
          },
        });
      }
    }
  }, []);

  return elementRef;
};

// Pre-configured animation hooks
export const useFadeInUp = (delay = 0) =>
  useScrollAnimation({
    start: "top 100%",
    animation: {
      from: { y: 20, opacity: 0 },
      duration: 0.6,
      ease: "power2.out",
      delay,
    },
  });

export const useFadeInLeft = (delay = 0) =>
  useScrollAnimation({
    start: "top 100%",
    animation: {
      from: { x: -30, opacity: 0 },
      duration: 0.6,
      ease: "power2.out",
      delay,
    },
  });

export const useFadeInRight = (delay = 0) =>
  useScrollAnimation({
    start: "top 100%",
    animation: {
      from: { x: 30, opacity: 0 },
      duration: 0.6,
      ease: "power2.out",
      delay,
    },
  });

export const useStaggerAnimation = (stagger = 0.1) =>
  useScrollAnimation({
    start: "top 110%", // Start earlier for stagger
    animation: {
      from: { y: 20, opacity: 0 },
      duration: 0.5,
      ease: "power2.out",
    },
    stagger,
  });
