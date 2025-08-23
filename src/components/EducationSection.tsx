import { GraduationCap, Award } from "lucide-react";

export function EducationSection() {
  const educationData = [
    {
      institution: "NMAM Institute of Technology",
      degree: "B.Tech CSE",
      period: "Currently 2nd Year, 3rd Semester",
      score: "CGPA: 9.65/10",
      status: "current"
    },
    {
      institution: "Loyola School, Jamshedpur",
      degree: "Class 12",
      period: "2022",
      score: "89%",
      status: "completed"
    },
    {
      institution: "Loyola School, Jamshedpur", 
      degree: "Class 10",
      period: "2020",
      score: "88%",
      status: "completed"
    }
  ];

  return (
    <section className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">Education</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto"></div>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-primary to-accent"></div>

          {educationData.map((item, index) => (
            <div key={index} className={`relative flex items-center mb-12 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
              {/* Timeline dot */}
              <div className="absolute left-2 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 rounded-full bg-primary border-4 border-background z-10"></div>
              
              {/* Content */}
              <div className={`ml-12 md:ml-0 md:w-1/2 ${index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'}`}>
                <div className="glass-card p-6 rounded-xl hover-lift tilt-card">
                  <div className="flex items-center gap-3 mb-3">
                    {item.status === 'current' ? (
                      <GraduationCap className="w-6 h-6 text-primary" />
                    ) : (
                      <Award className="w-6 h-6 text-accent" />
                    )}
                    <h3 className="text-xl font-bold text-foreground">{item.institution}</h3>
                  </div>
                  <p className="text-lg font-semibold text-primary mb-2">{item.degree}</p>
                  <p className="text-muted-foreground mb-2">{item.period}</p>
                  <p className="text-lg font-bold text-accent">{item.score}</p>
                  {item.status === 'current' && (
                    <div className="mt-3 px-3 py-1 bg-primary/10 text-primary text-sm rounded-full inline-block">
                      Current
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}