"use client";

import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description:
      "A full-stack e-commerce platform with real-time inventory, Stripe integration, and admin dashboard.",
    image: "bg-gradient-to-br from-blue-500/20 to-cyan-500/20",
    tags: ["Next.js", "TypeScript", "Tailwind", "Stripe"],
    links: {
      demo: "#",
      github: "#",
    },
  },
  {
    id: 2,
    title: "Task Management App",
    description:
      "Collaborative task management tool with real-time updates, team sharing, and productivity analytics.",
    image: "bg-gradient-to-br from-purple-500/20 to-pink-500/20",
    tags: ["React", "Node.js", "MongoDB", "Socket.io"],
    links: {
      demo: "#",
      github: "#",
    },
  },
  {
    id: 3,
    title: "AI Content Generator",
    description:
      "AI-powered content generation tool with multiple templates, batch processing, and export options.",
    image: "bg-gradient-to-br from-green-500/20 to-emerald-500/20",
    tags: ["Next.js", "OpenAI", "React", "Tailwind"],
    links: {
      demo: "#",
      github: "#",
    },
  },
  {
    id: 4,
    title: "Analytics Dashboard",
    description:
      "Real-time analytics dashboard with customizable widgets, data visualization, and reporting features.",
    image: "bg-gradient-to-br from-orange-500/20 to-red-500/20",
    tags: ["React", "D3.js", "Express", "PostgreSQL"],
    links: {
      demo: "#",
      github: "#",
    },
  },
  {
    id: 5,
    title: "SaaS Booking System",
    description:
      "Multi-vendor booking platform with calendar integration, payment processing, and customer reviews.",
    image: "bg-gradient-to-br from-indigo-500/20 to-blue-500/20",
    tags: ["Next.js", "Prisma", "Tailwind", "Vercel"],
    links: {
      demo: "#",
      github: "#",
    },
  },
  {
    id: 6,
    title: "Design System",
    description:
      "Comprehensive component library and design system documentation with Storybook integration.",
    image: "bg-gradient-to-br from-violet-500/20 to-purple-500/20",
    tags: ["React", "TypeScript", "Storybook", "CSS"],
    links: {
      demo: "#",
      github: "#",
    },
  },
];

export function Projects() {
  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">
          Featured Projects
        </h2>
        <p className="text-lg text-muted-foreground mb-12">
          Explore some of my recent work and technical achievements.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group relative bg-secondary rounded-lg border border-border overflow-hidden hover:border-accent transition-all duration-300 hover:shadow-lg hover:shadow-accent/20"
            >
              {/* Project image */}
              <div className={`h-48 ${project.image} relative overflow-hidden`}>
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition-colors duration-300" />
              </div>

              {/* Project content */}
              <div className="p-6 space-y-4">
                <h3 className="text-xl font-bold text-foreground group-hover:text-accent transition-colors">
                  {project.title}
                </h3>

                <p className="text-sm text-muted-foreground leading-relaxed">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-primary/20 text-xs font-medium text-accent rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex gap-2 pt-4 border-t border-border">
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
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
