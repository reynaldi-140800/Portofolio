"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Mandiri from "../../assets/icon/mandiri.png";
import Harts from "../../assets/icon/harts.png";
import Adhivasindo from  "../../assets/icon/adhivasindo.png";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const experiences = [
  {
    id: 1,
    company: "Hartis Imagineering",
    position: "Frontend Web Developer",
    period: "Jul 2023 - Saat ini | 2 bln",
    location: "Surabaya, Jawa Timur, Indonesia",
    description:
      "As a Front End Developer, I was responsible for developing Bhakti SuperApps, an integrated web platform for Yayasan Bhakti Wiyata, an educational institution focused on health and medical sciences. The project was adopted to be scalable, modern, and capable of supporting the institution's digital transformation across multiple educational and administrative units.\nI utilized React to build dynamic and modular user interfaces, Gatsby for high performance static site generation, and Material UI to deliver a consistent and intuitive user experience across devices.",
    technologies: ["ReactJS", "GatsbyJS", "Material UI"],
    color: "from-blue-500 to-cyan-500",
    icon: Harts,
  },
  {
    id: 2,
    company: "PT Bank Mandiri (Persero) Tbk.",
    position: "Software Engineer",
    period: "Sep 2022 - Des 2023 | 1 thn 4 bln",
    location: "Jakarta Selatan, Jakarta Raya, Indonesia",
    description:
      "1. Gained experience in Front End Development, delivering responsive and user friendly interfaces.\n2. Proficient in Angular, dynamic, modular, and scalable single-page applications.\n3. Experienced in using Tailwind CSS to craft responsive, accessible, and visually appealing user interfaces while reducing build times.\n4. Built and maintained web apps, creating lightweight, efficient client applications optimized for seamless user experience.\n5. Participated in the development of the KSM (Supply Chain Management) platform, enhancing procurement and inventory management for BUMN.\n6. Maintained and enhanced the LKM Backoffice system, ensuring optimal performance, reliability, and user-centered functionality. Additionally contributed to the migration from Angular 10 to Angular 14, improving maintainability and scalability of the application.\n7. Contributed to the development of Unit Network/Sukha, delivering modern and high quality UI/UX designs and best practices with minimal loading applications, supporting modern design standards.\n8. Supported and participated in UI/UX development, ensuring interfaces are not only functional but also engaging and user friendly.",
    technologies: [
      "Mini Program",
      "Tailwind CSS",
      "SASS",
      "HTML5",
      "Angular",
      "TypeScript",
      "JavaScript",
    ],
    color: "from-purple-500 to-pink-500",
    icon: Mandiri,
  },
  {
    id: 3,
    company: "Pengadilan Agama Surabaya",
    position: "IT Support",
    period: "Mar 2021 - Sep 2022 | 1 thn 7 bln",
    location: "Surabaya, Jawa Timur, Indonesia",
    description:
      "Managed the company's database and office intranet network as part of IT Support responsibilities, ensuring constant operations and the availability of reliable and efficient systems.",
    technologies: [],
    color: "from-green-500 to-emerald-500",
  },
  {
    id: 4,
    company: "Universitas 17 Agustus 1945 Surabaya",
    position: "Laboratory Assistant",
    period: "Feb 2021 - Feb 2022 | 1 thn 1 bln",
    location: "Surabaya, Jawa Timur, Indonesia",
    description:
      "I served as Laboratory Assistant for one year, where I was responsible for assisting students in practical sessions, preparing assessment materials, and ensuring students gained a solid understanding of practical processing concepts and their practical implementation.",
    technologies: ["Digital Image Processing"],
    color: "from-yellow-500 to-orange-500",
  },
  {
    id: 5,
    company: "PT Adhivasindo",
    position: "Deep Learning Engineer",
    period: "Nov 2020 - Jan 2021 | 3 bln",
    location: "Indonesia",
    description:
      "Developed a Face Recognition system using Deep Learning techniques, implemented with Convolutional Neural Networks (CNN) while utilizing TensorFlow and Keras frameworks.",
    technologies: [
      "Digital Image Processing",
      "Convolutional Neural Networks (CNN)",
      "Deep Learning",
    ],
    color: "from-red-500 to-pink-500",
    icon: Adhivasindo,
  },
];

export default function Experience() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const cardsRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    if (sectionRef.current && titleRef.current) {
      // Ensure content is visible first
      gsap.set([titleRef.current, ...cardsRef.current], {
        opacity: 1,
        x: 0,
        y: 0,
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

      // Cards animation
      cardsRef.current.forEach((card, index) => {
        if (card) {
          gsap.fromTo(
            card,
            {
              opacity: 0,
              x: index % 2 === 0 ? -30 : 30,
            },
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
                once: true,
              },
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

          card.addEventListener("mouseenter", onMouseEnter);
          card.addEventListener("mouseleave", onMouseLeave);
        }
      });
    }
  }, []);

  return (
    <section id="experience" ref={sectionRef} className="py-20 bg-gray-50 dark:bg-gray-800">
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
              ref={el => {
                if (el) cardsRef.current[index] = el;
              }}
              className={`relative p-8 bg-white dark:bg-gray-900 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700 ${
                index % 2 === 0 ? "md:mr-12" : "md:ml-12"
              }`}
            >
              {/* Timeline line */}
              <div
                className={`absolute top-1/2 ${index % 2 === 0 ? "-right-6" : "-left-6"} w-4 h-4 bg-gradient-to-r ${exp.color} rounded-full transform -translate-y-1/2 hidden md:block`}
              ></div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-[100px]">
                <div className="md:col-span-2">
                  <div
                    className={`inline-block px-3 py-1 text-sm font-semibold text-white bg-gradient-to-r ${exp.color} rounded-full mb-4`}
                  >
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
                <div style={{ marginTop: "20%"}}>
                  {exp.icon && (
                    <img
                      style={{ width: "600px", height: "200px",}}
                      src={exp.icon ? exp.icon.src : undefined}
                      alt={`${exp.company} logo`}
                    />
                  )}
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
