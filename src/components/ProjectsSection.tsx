import { ExternalLink, Github, Plus } from "lucide-react";

export function ProjectsSection() {
  const projects = [
    {
      title: "Project Coming Soon",
      description: "Exciting projects are in development. Stay tuned for amazing web applications built with modern technologies.",
      technologies: ["React", "TypeScript", "Node.js"],
      status: "planning"
    },
    {
      title: "Future Innovation",
      description: "Working on cutting-edge solutions that will showcase full-stack development skills and creative problem-solving.",
      technologies: ["Next.js", "MongoDB", "Tailwind"],
      status: "planning"
    },
    {
      title: "Upcoming Project",
      description: "Developing comprehensive applications that demonstrate mastery of modern web development practices and technologies.",
      technologies: ["React", "Express", "PostgreSQL"],
      status: "planning"
    }
  ];

  return (
    <section className="py-20 px-4 bg-gradient-to-br from-background to-muted/20">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">Projects</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="glass-card p-6 rounded-xl hover-lift tilt-card group relative overflow-hidden"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Coming soon overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 opacity-50"></div>
              
              <div className="relative z-10">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <div className="flex gap-2">
                    <div className="w-8 h-8 rounded-full bg-muted/50 flex items-center justify-center">
                      <Github className="w-4 h-4 text-muted-foreground" />
                    </div>
                    <div className="w-8 h-8 rounded-full bg-muted/50 flex items-center justify-center">
                      <ExternalLink className="w-4 h-4 text-muted-foreground" />
                    </div>
                  </div>
                </div>

                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full border border-primary/20"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-2 text-accent">
                  <Plus className="w-4 h-4" />
                  <span className="text-sm font-medium">In Development</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="glass-card p-6 rounded-xl max-w-md mx-auto">
            <h3 className="text-xl font-bold mb-2 gradient-text">More Projects Coming Soon!</h3>
            <p className="text-muted-foreground">
              I'm actively working on exciting projects that will be showcased here soon.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}