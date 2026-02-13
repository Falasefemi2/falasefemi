"use client";

import React from "react";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Github, Linkedin, Mail, Twitter } from "lucide-react";

const socialLinks = [
  { icon: Github, href: "https://github.com/Falasefemi2", label: "GitHub" },
  {
    icon: Linkedin,
    href: "https://www.linkedin.com/in/falase-femi-91121b227/",
    label: "LinkedIn",
  },
  { icon: Twitter, href: "https://x.com/falase_femi", label: "Twitter" },
  { icon: Mail, href: "mailto:femifalase228@gmail.com", label: "Email" },
];

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setLoading(true);
    setError(null);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!res.ok) {
        throw new Error("Something went wrong");
      }

      setSubmitted(true);
      setFormData({ name: "", email: "", message: "" });

      setTimeout(() => setSubmitted(false), 3000);
    } catch (err) {
      setError("Failed to send message. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4 text-center">
          Get In Touch
        </h2>
        <p className="text-lg text-muted-foreground text-center mb-12">
          Have a project in mind? Let&apos;s work together to bring your ideas
          to life.
        </p>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-secondary/30 border border-border rounded-lg p-8">
            <h3 className="text-xl font-bold text-foreground mb-6">
              Send Me a Message
            </h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-foreground mb-2"
                >
                  Name
                </label>
                <Input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your name"
                  required
                  className="bg-background border-border text-foreground placeholder:text-muted-foreground"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-foreground mb-2"
                >
                  Email
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="your@email.com"
                  required
                  className="bg-background border-border text-foreground placeholder:text-muted-foreground"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-foreground mb-2"
                >
                  Message
                </label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell me about your project..."
                  rows={4}
                  required
                  className="bg-background border-border text-foreground placeholder:text-muted-foreground resize-none"
                />
              </div>

              <Button
                type="submit"
                disabled={loading}
                className="w-full bg-accent hover:bg-accent/90 text-accent-foreground font-medium"
              >
                {loading
                  ? "Sending..."
                  : submitted
                    ? "Message Sent! ✓"
                    : "Send Message"}
              </Button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-bold text-foreground mb-6">
                Let&apos;s Connect
              </h3>
              <p className="text-foreground leading-relaxed mb-6">
                I&apos;m always interested in hearing about new projects and
                opportunities. Whether you have a question or just want to say
                hi, feel free to reach out!
              </p>
            </div>

            {/* Social Links */}
            <div>
              <h4 className="text-sm font-semibold text-muted-foreground mb-4 uppercase">
                Follow Me
              </h4>
              <div className="flex gap-3 flex-wrap">
                {socialLinks.map((link) => {
                  const Icon = link.icon;
                  return (
                    <a
                      key={link.label}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 bg-secondary border border-border rounded-lg  transition-all duration-300"
                      aria-label={link.label}
                    >
                      <Icon className="h-5 w-5 text-foreground" />
                    </a>
                  );
                })}
              </div>
            </div>

            {/* Quick Info */}
            <div className="bg-secondary/30 border border-border rounded-lg p-6 space-y-4">
              <div>
                <p className="text-sm text-muted-foreground mb-1">Email</p>
                <a
                  href="mailto:femifalase228@gmail.com"
                  className="text-accent hover:underline font-medium"
                >
                  hello@example.com
                </a>
              </div>
              <div>
                <p className="text-sm text-muted-foreground mb-1">Location</p>
                <p className="text-foreground font-medium">Lagos, Nigeria</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground mb-1">
                  Availability
                </p>
                <p className="text-foreground font-medium">
                  Open to new opportunities
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
