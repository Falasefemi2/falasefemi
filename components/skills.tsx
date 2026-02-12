"use client";

import { Code2, Database, Palette, Server } from "lucide-react";
import { motion } from "motion/react";

const skillCategories = [
  {
    category: "Languages",
    icon: Code2,
    skills: ["JavaScript", "TypeScript", "Python", "Go (learning)"],
  },
  {
    category: "Frontend",
    icon: Palette,
    skills: ["React", "Next.js", "Tailwind CSS", "Framer Motion", "Redux"],
  },
  {
    category: "Backend",
    icon: Server,
    skills: ["Node.js", "NestJS", "Express", "REST APIs", "GraphQL"],
  },
  {
    category: "Databases",
    icon: Database,
    skills: ["PostgreSQL", "MongoDB", "Redis", "Firebase", "Supabase"],
  },
];

export function Skills() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary/30">
      <div className="max-w-5xl mx-auto">
        <motion.h2
          className="text-4xl sm:text-5xl font-bold text-foreground mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          Skills & Tools
        </motion.h2>

        <motion.div
          className="grid md:grid-cols-2 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {skillCategories.map((category) => {
            const Icon = category.icon;
            return (
              <motion.div
                key={category.category}
                variants={itemVariants}
                className="bg-background rounded-lg border border-border p-6 hover:border-accent transition-colors duration-300"
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-3 bg-accent/10 rounded-lg">
                    <Icon className="h-6 w-6 text-accent" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground">
                    {category.category}
                  </h3>
                </div>

                <div className="space-y-2">
                  {category.skills.map((skill) => (
                    <div
                      key={skill}
                      className="flex items-center gap-3 p-2 rounded hover:bg-secondary transition-colors"
                    >
                      <div className="w-2 h-2 bg-accent rounded-full" />
                      <span className="text-foreground font-medium">
                        {skill}
                      </span>
                    </div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Additional skills highlight */}
        <motion.div
          className="mt-12 bg-background border border-border rounded-lg p-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <h3 className="text-xl font-bold text-foreground mb-6">
            Other Expertise
          </h3>
          <motion.div
            className="grid sm:grid-cols-2 md:grid-cols-3 gap-4"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
          >
            {[
              "API Design",
              "Testing & QA",
              "DevOps",
              "Git & CI/CD",
              "Agile/Scrum",
              "UI/UX Principles",
            ].map((skill) => (
              <motion.div
                key={skill}
                variants={itemVariants}
                className="px-4 py-3 bg-accent/10 border border-accent/30 rounded-lg text-center hover:border-accent transition-colors"
              >
                <p className="text-foreground font-medium">{skill}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
