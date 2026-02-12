"use client";

export function About() {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary/30">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-12">
          About Me
        </h2>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Image placeholder */}
          <div className="bg-secondary rounded-lg h-80 flex items-center justify-center border border-border">
            <div className="text-center">
              <div className="text-6xl font-bold text-accent opacity-20">
                Dev
              </div>
              <p className="text-muted-foreground mt-4">
                Professional photo here
              </p>
            </div>
          </div>

          {/* Bio */}
          <div className="space-y-6">
            <p className="text-lg text-foreground leading-relaxed">
              I'm a passionate full-stack developer with 5+ years of experience
              building web applications. I love solving complex problems and
              creating intuitive user interfaces that make a real impact.
            </p>

            <p className="text-lg text-foreground leading-relaxed">
              My journey in tech started with a curiosity about how things work,
              and it's evolved into a career focused on crafting accessible,
              performant, and beautiful digital experiences. I thrive in
              collaborative environments and enjoy mentoring junior developers.
            </p>

            <p className="text-lg text-foreground leading-relaxed">
              When I'm not coding, you'll find me contributing to open source
              projects, writing technical blog posts, or exploring new
              technologies and frameworks.
            </p>

            <div className="space-y-4 pt-4">
              <h3 className="text-xl font-semibold text-foreground">
                Key Highlights
              </h3>
              <ul className="space-y-2">
                <li className="flex items-start gap-3">
                  <span className="text-accent font-bold mt-1">→</span>
                  <span className="text-foreground">
                    Built and deployed 15+ production applications
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-accent font-bold mt-1">→</span>
                  <span className="text-foreground">
                    Mentored 5+ junior developers
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-accent font-bold mt-1">→</span>
                  <span className="text-foreground">
                    Active contributor to open source
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
