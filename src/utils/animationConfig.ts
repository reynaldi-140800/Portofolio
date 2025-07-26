"use client";
import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

// Global configuration for consistent animations
export const ANIMATION_CONFIG = {
  // Predictive triggers - start animations before elements are visible
  triggers: {
    early: "top 110%", // For elements that need early preparation
    normal: "top 100%", // For standard elements
    late: "top 90%", // For elements that should animate when mostly visible
  },

  // Animation durations
  durations: {
    fast: 0.4,
    normal: 0.6,
    slow: 0.8,
  },

  // Easing functions
  ease: {
    smooth: "power2.out",
    bounce: "back.out(1.7)",
    elastic: "elastic.out(1, 0.3)",
  },

  // Movement distances
  distance: {
    subtle: 15,
    normal: 25,
    large: 40,
  },
};

// Initialize global ScrollTrigger settings for better performance
export const initializeScrollTrigger = () => {
  if (typeof window !== "undefined") {
    ScrollTrigger.config({
      autoRefreshEvents: "visibilitychange,DOMContentLoaded,load",
    });

    // Batch ScrollTrigger updates for better performance
    ScrollTrigger.batch("[data-animate]", {
      onEnter: elements => {
        elements.forEach((element, index) => {
          const htmlElement = element as HTMLElement;
          const animationType = htmlElement.dataset.animate;
          const delay = index * 0.05; // Stagger effect

          switch (animationType) {
            case "fade-up":
              gsap.from(element, {
                y: ANIMATION_CONFIG.distance.normal,
                opacity: 0,
                duration: ANIMATION_CONFIG.durations.normal,
                ease: ANIMATION_CONFIG.ease.smooth,
                delay,
              });
              break;

            case "fade-left":
              gsap.from(element, {
                x: -ANIMATION_CONFIG.distance.normal,
                opacity: 0,
                duration: ANIMATION_CONFIG.durations.normal,
                ease: ANIMATION_CONFIG.ease.smooth,
                delay,
              });
              break;

            case "fade-right":
              gsap.from(element, {
                x: ANIMATION_CONFIG.distance.normal,
                opacity: 0,
                duration: ANIMATION_CONFIG.durations.normal,
                ease: ANIMATION_CONFIG.ease.smooth,
                delay,
              });
              break;

            case "scale":
              gsap.from(element, {
                scale: 0.8,
                opacity: 0,
                duration: ANIMATION_CONFIG.durations.normal,
                ease: ANIMATION_CONFIG.ease.smooth,
                delay,
              });
              break;
          }
        });
      },
      start: ANIMATION_CONFIG.triggers.early,
      once: true,
    });
  }
};

// Hook for components to use optimized animations
export const useOptimizedAnimation = () => {
  useEffect(() => {
    // Refresh ScrollTrigger when component mounts
    if (typeof window !== "undefined") {
      ScrollTrigger.refresh();
    }
  }, []);
};
