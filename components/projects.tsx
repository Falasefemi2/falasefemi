"use client";

import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";
import { motion } from "motion/react";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import Image from "next/image";

const projects = [
  {
    id: 1,
    title: "VendorHub",
    description:
      "A commerce platform that helps WhatsApp vendors showcase products through shareable store links. Customers can browse products, select items, and are redirected directly to the vendor’s WhatsApp DM to complete purchases. Built with a Go backend and Next.js frontend.",
    image: "/vendorhub.png",
    tags: ["Next.js", "React", "Go", "PostgreSQL"],
    links: {
      demo: "https://vendorhub-v2-frontend.vercel.app/",
      github: "https://github.com/Falasefemi2/vendorhub-v2-frontend",
    },
  },
  {
    id: 2,
    title: "CompanyFlow",
    description:
      "An organizational management system that structures companies by departments, designations, and roles. Includes employee management, leave requests, and multi-level approval workflows. Built with Go for backend services and React for the frontend.",
    image: "/companyflow.png",
    tags: ["React", "Go", "PostgreSQL", "REST API"],
    links: {
      demo: "https://v0-companyflow-ui.vercel.app/",
      github: "https://github.com/Falasefemi2/companyflow",
    },
  },
  {
    id: 3,
    title: "AI Fitness Planner",
    description:
      "An AI-powered fitness application that generates personalized workout plans based on user inputs such as gender and weight. Integrates Google AI to dynamically create exercise routines. Built with Next.js.",
    image: "/ai-fitness.png",
    tags: ["Next.js", "Google AI", "TypeScript"],
    links: {
      demo: "https://fitness-planner-v1.vercel.app/",
      github: "https://github.com/Falasefemi2/fitness-planner-v1",
    },
  },
  {
    id: 4,
    title: "Personal File Storage",
    description:
      "A secure file upload and storage application that allows users to upload and organize files and folders. Built with Next.js and Drizzle ORM for structured database interaction.",
    image: "/file-upload image.png",
    tags: ["Next.js", "Drizzle ORM", "PostgreSQL"],
    links: {
      demo: "https://file-storage-plum.vercel.app/",
      github: "https://github.com/Falasefemi2/file-storage",
    },
  },
  {
    id: 5,
    title: "GameHive",
    description:
      "A game discovery platform that fetches data from an external API, processes it, and stores selected records in a Neon PostgreSQL database for optimized querying and display.",
    image: "/game-hive.png",
    tags: ["Next.js", "External API", "Neon DB", "PostgreSQL"],
    links: {
      demo: "https://gamehive-sooty.vercel.app/",
      github: "https://github.com/Falasefemi2/gamehive",
    },
  },
];

export function Projects() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
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
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          className="text-4xl sm:text-5xl font-bold text-foreground mb-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          Featured Projects
        </motion.h2>
        <motion.p
          className="text-lg text-muted-foreground mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          Explore some of my recent work and technical achievements.
        </motion.p>

        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {projects.map((project) => (
            <motion.div key={project.id} variants={itemVariants}>
              <CardContainer className="inter-var h-full">
                <CardBody className="group relative bg-secondary rounded-lg border border-border overflow-hidden h-full w-full p-0 dark:hover:shadow-2xl dark:hover:shadow-accent/[0.1]">
                  {/* Project image */}
                  <CardItem
                    translateZ="60"
                    className="relative h-48 w-full overflow-hidden"
                  >
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition-colors duration-300" />
                  </CardItem>

                  {/* Project content */}
                  <div className="p-6 space-y-4">
                    <CardItem
                      translateZ="50"
                      className="text-xl font-bold text-foreground transition-colors"
                    >
                      {project.title}
                    </CardItem>

                    <CardItem
                      as="p"
                      translateZ="40"
                      className="text-sm text-muted-foreground leading-relaxed"
                    >
                      {project.description}
                    </CardItem>

                    {/* Tags */}
                    <CardItem translateZ="30" className="flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-3 py-1 bg-primary/20 text-xs font-medium text-accent rounded-full"
                        >
                          {tag}
                        </span>
                      ))}
                    </CardItem>

                    {/* Links */}
                    <CardItem
                      translateZ="20"
                      className="flex gap-2 pt-4 border-t border-border w-full"
                    >
                      <Button
                        variant="ghost"
                        size="sm"
                        className="flex-1 hover:bg-accent hover:text-accent-foreground"
                        asChild
                      >
                        <a
                          href={project.links.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <ExternalLink className="h-4 w-4 mr-2" />
                          Demo
                        </a>
                      </Button>
                      <Button
                        variant="ghost"
                        size="sm"
                        className="flex-1 hover:bg-accent hover:text-accent-foreground"
                        asChild
                      >
                        <a
                          href={project.links.github}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Github className="h-4 w-4 mr-2" />
                          Code
                        </a>
                      </Button>
                    </CardItem>
                  </div>
                </CardBody>
              </CardContainer>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
