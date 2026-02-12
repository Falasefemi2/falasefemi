"use client";

import { motion } from "motion/react";

export function About() {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary/30">
      <div className="max-w-5xl mx-auto">
        <motion.h2
          className="text-4xl sm:text-5xl font-bold text-foreground mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          About Me
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Image placeholder */}
          <motion.div
            className="bg-secondary rounded-lg h-80 flex items-center justify-center border border-border"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <div className="text-center">
              <div className="text-6xl font-bold text-accent opacity-20">
                Dev
              </div>
              <p className="text-muted-foreground mt-4">
                Professional photo here
              </p>
            </div>
          </motion.div>

          {/* Bio */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <p className="text-lg text-foreground leading-relaxed">
              I’m a software engineer focused on building reliable backend
              systems and scalable web applications. My work centers around
              designing clean APIs, structuring maintainable architectures, and
              solving real-world problems with thoughtful engineering decisions.
            </p>

            <p className="text-lg text-foreground leading-relaxed">
              I currently work with Java (Spring Boot) and Go for backend
              development, while using Next.js and TypeScript to build
              structured, production-ready interfaces. I care deeply about code
              clarity, data modeling, and building systems that are easy to
              extend and reason about.
            </p>

            <p className="text-lg text-foreground leading-relaxed">
              Beyond writing code, I spend time strengthening my understanding
              of system design, database design, and performance trade-offs. I
              aim to grow into a backend engineer who builds systems that are
              not only functional, but scalable and resilient.
            </p>

            <div className="space-y-4 pt-4">
              <h3 className="text-xl font-semibold text-foreground">
                Key Highlights
              </h3>

              <ul className="space-y-2">
                <li className="flex items-start gap-3">
                  <span className="text-blue-600 font-bold mt-1">→</span>
                  <span className="text-foreground">
                    Designing and building role-based systems with structured
                    workflows
                  </span>
                </li>

                <li className="flex items-start gap-3">
                  <span className="text-blue-600 font-bold mt-1">→</span>
                  <span className="text-foreground">
                    Strong emphasis on API design, validation, and database
                    integrity
                  </span>
                </li>

                <li className="flex items-start gap-3">
                  <span className="text-blue-600 font-bold mt-1">→</span>
                  <span className="text-foreground">
                    Actively deepening expertise in Java, Go, and backend
                    architecture
                  </span>
                </li>

                <li className="flex items-start gap-3">
                  <span className="text-blue-600 font-bold mt-1">→</span>
                  <span className="text-foreground">
                    Building full-stack applications with a backend-first
                    engineering mindset
                  </span>
                </li>
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
