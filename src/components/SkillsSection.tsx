import { Code, Database, Globe, Smartphone, Server, Cpu } from "lucide-react";

export function SkillsSection() {
  const skills = [
    {
      icon: Code,
      title: "Frontend Development",
      skills: ["React", "TypeScript", "Tailwind CSS", "Next.js"],
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: Server,
      title: "Backend Development", 
      skills: ["Node.js", "Python", "Java", "Express.js"],
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: Database,
      title: "Database Management",
      skills: ["MySQL", "MongoDB", "PostgreSQL", "Firebase"],
      color: "from-purple-500 to-violet-500"
    },
    {
      icon: Smartphone,
      title: "Mobile Development",
      skills: ["React Native", "Flutter", "Android Studio"],
      color: "from-pink-500 to-rose-500"
    },
    {
      icon: Globe,
      title: "Web Technologies",
      skills: ["HTML5", "CSS3", "JavaScript", "REST APIs"],
      color: "from-orange-500 to-yellow-500"
    },
    {
      icon: Cpu,
      title: "Programming Languages",
      skills: ["C++", "Python", "Java", "JavaScript"],
      color: "from-indigo-500 to-blue-500"
    }
  ];

  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">Skills & Expertise</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill, index) => {
            const Icon = skill.icon;
            return (
              <div
                key={index}
                className="glass-card p-6 rounded-xl hover-lift tilt-card group cursor-pointer"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${skill.color} p-3 mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <Icon className="w-full h-full text-white" />
                </div>
                
                <h3 className="text-xl font-bold mb-3 text-foreground group-hover:text-primary transition-colors">
                  {skill.title}
                </h3>
                
                <div className="flex flex-wrap gap-2">
                  {skill.skills.map((item, skillIndex) => (
                    <span
                      key={skillIndex}
                      className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full border border-primary/20 hover:bg-primary/20 transition-colors"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}