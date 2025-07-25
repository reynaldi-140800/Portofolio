"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const experiences = [
  {
    id: 1,
    company: "TechCorp Inc.",
    position: "Senior Full-Stack Developer",
    period: "2022 - Present",
    description: "Led development of cloud-based applications using React, Node.js, and AWS. Managed a team of 5 developers and implemented CI/CD pipelines.",
    technologies: ["React", "Node.js", "TypeScript", "AWS", "PostgreSQL"],
    color: "from-blue-500 to-cyan-500"
  },
  {
    id: 2,
    company: "StartupXYZ",
    position: "Frontend Developer",
    period: "2020 - 2022",
    description: "Built responsive web applications and mobile apps using React Native. Collaborated with design team to implement pixel-perfect UI/UX.",
    technologies: ["React", "React Native", "JavaScript", "Redux", "Figma"],
    color: "from-purple-500 to-pink-500"
  },
  {
    id: 3,
    company: "WebAgency Pro",
    position: "Junior Developer",
    period: "2019 - 2020",
    description: "Developed websites for clients using modern web technologies. Gained experience in project management and client communication.",
    technologies: ["HTML", "CSS", "JavaScript", "WordPress", "PHP"],
    color: "from-green-500 to-emerald-500"
  }
];

export default function Experience() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const cardsRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    if (sectionRef.current && titleRef.current) {
      // Ensure content is visible first
      gsap.set([titleRef.current, ...cardsRef.current], { opacity: 1, x: 0, y: 0 });
      
      // Title animation
      gsap.fromTo(titleRef.current, 
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
            once: true
          }
        }
      );

      // Cards animation
      cardsRef.current.forEach((card, index) => {
        if (card) {
          gsap.fromTo(card, 
            { opacity: 0, x: index % 2 === 0 ? -30 : 30 },
            { 
              opacity: 1, 
              x: 0, 
              duration: 0.8, 
              delay: index * 0.2,
              ease: "power2.out",
              scrollTrigger: {
                trigger: card,
                start: "top 80%",
                toggleActions: "play none none none",
                once: true
              }
            }
          );

          // Hover animation
          const onMouseEnter = () => {
            gsap.to(card, {
              y: -5,
              duration: 0.3,
              ease: "power1.out",
            });
          };

          const onMouseLeave = () => {
            gsap.to(card, {
              y: 0,
              duration: 0.3,
              ease: "power1.out",
            });
          };

          card.addEventListener('mouseenter', onMouseEnter);
          card.addEventListener('mouseleave', onMouseLeave);
        }
      });
    }
  }, []);

  return (
    <section
      id="experience"
      ref={sectionRef}
      className="py-20 bg-gray-50 dark:bg-gray-800"
    >
      <div className="container mx-auto px-6">
        <h2
          ref={titleRef}
          className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
        >
          Experience
        </h2>
        
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div
              key={exp.id}
              ref={(el) => {
                if (el) cardsRef.current[index] = el;
              }}
              className={`relative p-8 bg-white dark:bg-gray-900 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700 ${
                index % 2 === 0 ? 'md:mr-12' : 'md:ml-12'
              }`}
            >
              {/* Timeline line */}
              <div className={`absolute top-1/2 ${index % 2 === 0 ? '-right-6' : '-left-6'} w-4 h-4 bg-gradient-to-r ${exp.color} rounded-full transform -translate-y-1/2 hidden md:block`}></div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="md:col-span-2">
                  <div className={`inline-block px-3 py-1 text-sm font-semibold text-white bg-gradient-to-r ${exp.color} rounded-full mb-4`}>
                    {exp.period}
                  </div>
                  
                  <h3 className="text-2xl font-bold text-[#010101] dark:text-[#ffffff] mb-2">
                    {exp.position}
                  </h3>
                  
                  <h4 className="text-lg font-semibold text-gray-600 dark:text-gray-300 mb-4">
                    {exp.company}
                  </h4>
                  
                  <p className="text-[#010101] dark:text-[#ffffff] leading-relaxed mb-6">
                    {exp.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 text-sm bg-gray-100 dark:bg-gray-800 text-[#010101] dark:text-[#ffffff] rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="flex items-center justify-center">
                  <div className={`w-24 h-24 bg-gradient-to-r ${exp.color} rounded-full flex items-center justify-center text-white text-2xl font-bold shadow-lg`}>
                    {exp.company.split(' ').map(word => word[0]).join('')}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Timeline line */}
        <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-500 via-purple-500 to-green-500 transform -translate-x-1/2 opacity-30"></div>
      </div>
    </section>
  );
}
