"use client";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { motion } from "motion/react";
import { BackgroundBeamsWithCollision } from "@/components/ui/background-beams-with-collision";
import { TypewriterEffect } from "@/components/ui/typewriter-effect";

export function Hero() {
  const handleScroll = (id: string) => {
    const element = document.querySelector(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
      },
    },
  };

  const typewriterWords = [
    {
      text: "I",
    },
    {
      text: "specialize",
    },
    {
      text: "in",
    },
    {
      text: "JavaScript,",
    },
    {
      text: "TypeScript,",
    },
    {
      text: "React,",
    },
    {
      text: "Go,",
    },

    {
      text: "and",
    },
    {
      text: "Next.js.",
      className: "text-blue-600 dark:texblue-600",
    },
    {
      text: "Building",
    },
    {
      text: "scalable",
    },
    {
      text: "applications",
    },
    {
      text: "that",
    },
    {
      text: "users",
    },
    {
      text: "love.",
      className: "text-blue-600 dark:text-blue-600",
    },
  ];

  return (
    <BackgroundBeamsWithCollision>
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden min-h-screen flex items-center justify-center">
        <div className="max-w-4xl mx-auto relative z-10 w-full">
          {/* Hero content */}
          <motion.div
            className="space-y-8 text-center"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.div className="space-y-4" variants={itemVariants}>
              <motion.h1
                className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-black dark:text-white leading-tight tracking-tight"
                variants={itemVariants}
              >
                Full-Stack{" "}
                <div className="relative mx-auto inline-block w-max filter-[drop-shadow(0px_1px_3px_rgba(27,37,80,0.14))]">
                  <div className="absolute left-0 top-px bg-clip-text text-transparent bg-linear-to-r from-blue-800 to-blue-600 py-4">
                    <span>Developer</span>
                  </div>

                  <div className="relative bg-clip-text text-transparent bg-linear-to-r from-blue-700 to-blue-500 py-4">
                    <span>Developer</span>
                  </div>
                </div>
              </motion.h1>

              <motion.p
                className="text-lg sm:text-xl md:text-2xl text-black/70 dark:text-white/70 font-light"
                variants={itemVariants}
              >
                Crafting beautiful, performant web experiences with modern
                technologies
              </motion.p>
            </motion.div>

            {/* Typewriter Effect */}
            <motion.div variants={itemVariants}>
              <TypewriterEffect words={typewriterWords} />
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center pt-8"
              variants={itemVariants}
            >
              <Button
                size="lg"
                className="bg-gradient-to-r from-blue-700 to-blue-500 
             hover:from-blue-800 hover:to-blue-600 
             text-white shadow-lg hover:shadow-xl transition-all duration-200"
                onClick={() => handleScroll("#projects")}
              >
                See My Work
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-black/20 dark:border-white/20 hover:bg-black/5 dark:hover:bg-white/5 text-black dark:text-white"
                onClick={() => handleScroll("#contact")}
              >
                Get In Touch
              </Button>
            </motion.div>
          </motion.div>

          {/* Scroll indicator */}
          <motion.div
            className="absolute bottom-8 left-1/2 -translate-x-1/2"
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}
          >
            <svg
              className="w-6 h-6 text-black dark:text-white"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </motion.div>
        </div>
      </section>
    </BackgroundBeamsWithCollision>
  );
}
