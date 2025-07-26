"use client";
import { useEffect, useState } from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  const [mounted, setMounted] = useState(false);

  // Initialize dark mode from localStorage
  useEffect(() => {
    setMounted(true);
    if (typeof window !== "undefined") {
      const theme = localStorage.getItem("theme");
      if (
        theme === "dark" ||
        (!theme && window.matchMedia("(prefers-color-scheme: dark)").matches)
      ) {
        document.documentElement.classList.add("dark");
      } else {
        document.documentElement.classList.remove("dark");
      }
    }
  }, []);

  // Handle page refresh - scroll to top
  useEffect(() => {
    if (typeof window !== "undefined") {
      // Detect if page was refreshed
      const navigation = performance.getEntriesByType(
        "navigation"
      )[0] as PerformanceNavigationTiming;

      if (navigation.type === "reload") {
        // Page was refreshed, scroll to top immediately
        window.scrollTo(0, 0);

        // Also ensure Hero section is visible
        setTimeout(() => {
          const heroSection = document.getElementById("hero");
          if (heroSection) {
            heroSection.scrollIntoView({
              behavior: "smooth",
            });
          }
        }, 100);
      }

      // Alternative method using sessionStorage
      const wasRefreshed = sessionStorage.getItem("page-refreshed");
      if (wasRefreshed) {
        window.scrollTo(0, 0);
        sessionStorage.removeItem("page-refreshed");
      }

      // Set flag for potential refresh
      window.addEventListener("beforeunload", () => {
        sessionStorage.setItem("page-refreshed", "true");
      });

      // Clean up
      return () => {
        window.removeEventListener("beforeunload", () => {
          sessionStorage.setItem("page-refreshed", "true");
        });
      };
    }
  }, [mounted]);

  // Override browser refresh behavior
  useEffect(() => {
    if (typeof window !== "undefined") {
      const handleKeyDown = (event: KeyboardEvent) => {
        // Detect F5 or Ctrl+R
        if (event.key === "F5" || (event.ctrlKey && event.key === "r")) {
          event.preventDefault();

          // Custom refresh behavior - scroll to top first
          window.scrollTo({
            top: 0,
            behavior: "smooth",
          });

          // Then reload after a short delay
          setTimeout(() => {
            window.location.reload();
          }, 500);
        }
      };

      document.addEventListener("keydown", handleKeyDown);

      return () => {
        document.removeEventListener("keydown", handleKeyDown);
      };
    }
  }, []);

  // Toggle dark mode function
  const toggleDarkMode = () => {
    const isDark = document.documentElement.classList.toggle("dark");
    localStorage.setItem("theme", isDark ? "dark" : "light");
  };

  if (!mounted) {
    return null; // Prevent hydration mismatch
  }

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
      <Header toggleDarkMode={toggleDarkMode} />
      <main>
        <Hero />
        <About />
        <Experience />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
