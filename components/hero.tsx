"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { motion } from "motion/react";

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

  return (
    <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-background relative overflow-hidden">
      {/* Gradient background accent */}
      <div className="absolute inset-0 bg-linear-to-b`from-accent/5 via-transparent to-transparent pointer-events-none" />

      <div className="max-w-4xl mx-auto relative z-10">
        {/* Hero content */}
        <motion.div
          className="space-y-8 text-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div className="space-y-4" variants={itemVariants}>
            <motion.h1
              className="text-5xl sm:text-7xl font-bold text-foreground leading-tight"
              variants={itemVariants}
            >
              Full-Stack <span className="text-accent">Developer</span>
            </motion.h1>
            <motion.p
              className="text-xl sm:text-2xl text-muted-foreground font-light"
              variants={itemVariants}
            >
              Crafting beautiful, performant web experiences with modern
              technologies
            </motion.p>
          </motion.div>

          <motion.p
            className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed"
            variants={itemVariants}
          >
            I specialize in JavaScript, TypeScript, React, and Next.js. Building
            scalable applications that users love.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center pt-8"
            variants={itemVariants}
          >
            <Button
              size="lg"
              className="bg-accent hover:bg-accent/90 text-accent-foreground"
              onClick={() => handleScroll("#projects")}
            >
              See My Work
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-border hover:bg-secondary bg-transparent"
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
            className="w-6 h-6 text-accent"
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
  );
}
