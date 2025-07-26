"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function Hero() {
  const heroRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Simple and reliable animation
    if (heroRef.current && titleRef.current && subtitleRef.current && ctaRef.current) {
      // Start with everything visible to avoid blank screen
      gsap.set([titleRef.current, subtitleRef.current, ctaRef.current], {
        opacity: 1,
        y: 0,
      });

      // Simple fade in animation
      const tl = gsap.timeline({
        delay: 0.2,
      });

      gsap.fromTo(
        titleRef.current,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power2.out",
        }
      );

      gsap.fromTo(
        subtitleRef.current,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          delay: 0.3,
          ease: "power2.out",
        }
      );

      gsap.fromTo(
        ctaRef.current,
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.5,
          delay: 0.6,
          ease: "power2.out",
        }
      );

      // Floating animation
      gsap.to(heroRef.current, {
        y: -5,
        duration: 3,
        ease: "power1.inOut",
        yoyo: true,
        repeat: -1,
      });
    }
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
      });
    }
  };

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-900 dark:to-gray-800"
    >
      <div className="container mx-auto px-6 text-center">
        <div ref={heroRef}>
          <h1
            ref={titleRef}
            className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent"
          >
            Daf Akwal Reynaldi
          </h1>

          <p
            ref={subtitleRef}
            className="text-xl md:text-2xl text-[#010101] dark:text-[#ffffff] mb-8 max-w-3xl mx-auto"
          >
            Professional Front-End Developer
            <br /> <br />
            Building responsive, user-friendly interfaces with a strong focus on professional UI/UX
            design.
          </p>

          <div ref={ctaRef} className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button
              onClick={() => scrollToSection("experience")}
              className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-full hover:from-blue-700 hover:to-purple-700 transform hover:scale-105 transition-all duration-300 shadow-lg"
            >
              View My Work
            </button>

            <button
              onClick={() => scrollToSection("contact")}
              className="px-8 py-4 border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 font-semibold rounded-full hover:border-blue-600 hover:text-blue-600 dark:hover:border-blue-400 dark:hover:text-blue-400 transform hover:scale-105 transition-all duration-300"
            >
              Get In Touch
            </button>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <svg
            className="w-6 h-6 text-gray-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </div>
      </div>
    </section>
  );
}
