"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const skillCategories = [
  {
    title: "Frontend",
    skills: [
      {
        name: "React",
        level: 40,
        color: "bg-blue-500",
      },
      {
        name: "TypeScript",
        level: 85,
        color: "bg-blue-600",
      },
      {
        name: "JavaScript",
        level: 90,
        color: "bg-yellow-500",
      },
      { name: "HTML5", level: 95, color: "bg-orange-500" }, 
      {
        name: "CSS3",
        level: 90,
        color: "bg-purple-500",
      },  
      { name: "Angular", level: 80, color: "bg-red-500" },
      {
        name: "GSAP",
        level: 30,
        color: "bg-green-500",
      },
      {
        name: "Next.js",
        level: 50,
        color: "bg-gray-800",
      },
      {
        name: "Tailwind CSS",
        level: 95,
        color: "bg-cyan-500",
      },
    ],
  },
];

export default function Skills() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const categoriesRef = useRef<HTMLDivElement[]>([]);
  const skillBarsRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    if (sectionRef.current && titleRef.current) {
      // Ensure content is visible first
      gsap.set([titleRef.current, ...categoriesRef.current], {
        opacity: 1,
        y: 0,
      });
      gsap.set(skillBarsRef.current, {
        width: "0%",
      });

      // Title animation
      gsap.fromTo(
        titleRef.current,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power2.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
            toggleActions: "play none none none",
            once: true,
          },
        }
      );

      // Categories animation
      categoriesRef.current.forEach((category, index) => {
        if (category) {
          gsap.fromTo(
            category,
            { opacity: 0, y: 30 },
            {
              opacity: 1,
              y: 0,
              duration: 0.8,
              delay: index * 0.1,
              ease: "power2.out",
              scrollTrigger: {
                trigger: category,
                start: "top 80%",
                toggleActions: "play none none none",
                once: true,
              },
            }
          );
        }
      });

      // Skill bars animation
      skillBarsRef.current.forEach((bar, index) => {
        if (bar) {
          const level = bar.dataset.level || "0";

          gsap.to(bar, {
            width: `${level}%`,
            duration: 1.2,
            delay: index * 0.05,
            ease: "power2.out",
            scrollTrigger: {
              trigger: bar,
              start: "top 80%",
              toggleActions: "play none none none",
              once: true,
            },
          });
        }
      });
    }
  }, []);

  return (
    <section id="skills" ref={sectionRef} className="py-20 bg-white dark:bg-gray-900 flex justify-center items-center">
      <div className="container mx-auto px-6">
        <h2
          ref={titleRef}
          className="text-4xl h-[100px] md:text-5xl font-bold text-center mb-8 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
        >
          Skills & Technologies
        </h2>

        <div className="flex gap-8 justify-center align-center">
          {skillCategories.map((category, categoryIndex) => (
            <div
              key={category.title}
              ref={el => {
                if (el) categoriesRef.current[categoryIndex] = el;
              }}
              className="bg-gray-100 w-full dark:bg-gray-800 p-8 rounded-2xl"
            >
              <h3 className="text-2xl font-bold text-[#010101] dark:text-[#ffffff] mb-6 text-center">
                {category.title}
              </h3>

              <div className="space-y-6">
                {category.skills.map((skill, skillIndex) => {
                  const globalIndex = categoryIndex * 5 + skillIndex;
                  return (
                    <div key={skill.name} className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="text-[#010101] dark:text-[#ffffff] font-medium">
                          {skill.name}
                        </span>
                        <span className="text-gray-500 dark:text-gray-400 text-sm">
                          {skill.level}%
                        </span>
                      </div>

                      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3 overflow-hidden">
                        <div
                          ref={el => {
                            if (el) skillBarsRef.current[globalIndex] = el;
                          }}
                          data-level={skill.level}
                          className={`h-full ${skill.color} rounded-full transition-all duration-300`}
                          style={{
                            width: `${skill.level}%`,
                          }}
                        ></div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        {/* Floating elements */}
        <div className="relative">
          <div className="absolute top-1/4 left-1/4 w-4 h-4 bg-blue-500 rounded-full opacity-30 animate-ping"></div>
          <div className="absolute top-3/4 right-1/4 w-6 h-6 bg-purple-500 rounded-full opacity-20 animate-pulse"></div>
          <div className="absolute bottom-1/4 left-3/4 w-3 h-3 bg-green-500 rounded-full opacity-40 animate-bounce"></div>
        </div>
      </div>
    </section>
  );
}
