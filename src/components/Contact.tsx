"use client";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ContactIcons, contactData } from "./ContactIcons";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function Contact() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const formRef = useRef<HTMLFormElement>(null);
  const infoRef = useRef<HTMLDivElement>(null);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  useEffect(() => {
    if (sectionRef.current && titleRef.current && formRef.current && infoRef.current) {
      // Ensure content is visible first
      gsap.set([titleRef.current, formRef.current, infoRef.current], {
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

      // Form animation
      gsap.fromTo(
        formRef.current,
        { opacity: 0, x: -30 },
        {
          opacity: 1,
          x: 0,
          duration: 0.8,
          delay: 0.2,
          ease: "power2.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
            toggleActions: "play none none none",
            once: true,
          },
        }
      );

      // Info animation
      gsap.fromTo(
        infoRef.current,
        { opacity: 0, x: 30 },
        {
          opacity: 1,
          x: 0,
          duration: 0.8,
          delay: 0.4,
          ease: "power2.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
            toggleActions: "play none none none",
            once: true,
          },
        }
      );
    }
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Form submitted:", formData);

    // Show success animation
    gsap.to(formRef.current, {
      scale: 0.95,
      duration: 0.1,
      yoyo: true,
      repeat: 1,
      ease: "power2.inOut",
    });

    // Reset form
    setFormData({
      name: "",
      email: "",
      message: "",
    });
  };

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="py-20 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-900 dark:to-gray-800"
    >
      <div className="container mx-auto px-6">
        <h2
          ref={titleRef}
          className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
        >
          Get In Touch
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <div className="bg-white dark:bg-gray-900 p-8 rounded-2xl shadow-xl">
            <h3 className="text-2xl font-bold text-[#010101] dark:text-[#ffffff] mb-6">
              Send Me a Message
            </h3>

            <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-[#010101] dark:text-[#ffffff] mb-2"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-800 text-[#010101] dark:text-[#ffffff] transition-all duration-300"
                  placeholder="Your Name"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-[#010101] dark:text-[#ffffff] mb-2"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-800 text-[#010101] dark:text-[#ffffff] transition-all duration-300"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-[#010101] dark:text-[#ffffff] mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-800 text-[#010101] dark:text-[#ffffff] transition-all duration-300 resize-none"
                  placeholder="Your message..."
                />
              </div>

              <button
                type="submit"
                className="w-full px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-purple-700 transform hover:scale-105 transition-all duration-300 shadow-lg"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div ref={infoRef} className="space-y-8">
            <div className="bg-white dark:bg-gray-900 p-8 rounded-2xl shadow-xl">
              <h3 className="text-2xl font-bold text-[#010101] dark:text-[#ffffff] mb-6">
                Contact Information
              </h3>

              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center text-white">
                    <ContactIcons.Email />
                  </div>
                  <div>
                    <p className="text-gray-600 dark:text-gray-400 text-sm">Email</p>
                    <p className="text-[#010101] dark:text-[#ffffff] font-medium">
                      {contactData.email}
                    </p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white">
                    <ContactIcons.Location />
                  </div>
                  <div>
                    <p className="text-gray-600 dark:text-gray-400 text-sm">Location</p>
                    <p className="text-[#010101] dark:text-[#ffffff] font-medium">
                      {contactData.location}
                    </p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center text-white">
                    <ContactIcons.Phone />
                  </div>
                  <div>
                    <p className="text-gray-600 dark:text-gray-400 text-sm">Phone</p>
                    <p className="text-[#010101] dark:text-[#ffffff] font-medium">
                      {contactData.phone}
                    </p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-blue-700 rounded-full flex items-center justify-center text-white">
                    <ContactIcons.LinkedIn />
                  </div>
                  <div>
                    <p className="text-gray-600 dark:text-gray-400 text-sm">LinkedIn</p>
                    <a
                      href={contactData.linkedin.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#010101] dark:text-[#ffffff] font-medium hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300 cursor-pointer"
                    >
                      {contactData.linkedin.display}
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="bg-white dark:bg-gray-900 p-8 rounded-2xl shadow-xl">
              <h3 className="text-2xl font-bold text-[#010101] dark:text-[#ffffff] mb-6">
                Follow Me
              </h3>

              {/* Twiiter */}
              <div className="flex space-x-4">
                <a
                  href={contactData.social.twitter}
                  className="w-12 h-12 bg-gradient-to-r 
                  from-blue-600 to-blue-700 rounded-full 
                  flex items-center justify-center text-white 
                  hover:scale-110 transition-transform duration-300"
                  title="Twitter"
                >
                  <ContactIcons.Twitter />
                </a>

                <a
                  href={contactData.social.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-gradient-to-r 
                  from-blue-700 to-blue-800 rounded-full 
                  flex items-center justify-center text-white 
                  hover:scale-110 transition-transform duration-300"
                  title="LinkedIn"
                >
                  <ContactIcons.LinkedIn />
                </a>

                <a
                  href={contactData.social.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-gradient-to-r 
                  from-gray-800 to-gray-900 rounded-full 
                  flex items-center justify-center text-white 
                  hover:scale-110 transition-transform duration-300"
                  title="GitHub"
                >
                  <ContactIcons.GitHub />
                </a>

                <a
                  href={contactData.social.instagram}
                  className="w-12 h-12 bg-gradient-to-r 
                  from-pink-500 to-purple-600 rounded-full 
                  flex items-center justify-center text-white 
                  hover:scale-110 transition-transform duration-300"
                  title="Instagram"
                >
                  <ContactIcons.Instagram />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
