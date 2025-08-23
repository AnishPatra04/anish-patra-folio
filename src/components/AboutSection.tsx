export function AboutSection() {
  return (
    <section className="py-20 px-4 bg-gradient-to-br from-background to-muted/20">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">About Me</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto"></div>
        </div>
        
        <div className="glass-card p-8 md:p-12 rounded-2xl tilt-card">
          <p className="text-lg md:text-xl leading-relaxed text-center text-muted-foreground">
            Hi, I'm <span className="text-primary font-semibold">Anish Kumar Patra</span>, a Computer Science student at{" "}
            <span className="text-accent font-semibold">NMAM Institute of Technology</span> with a passion for technology, innovation, and problem-solving. I am currently focused on strengthening my skills in web development, data structures, and algorithms, while also exploring areas like software design and modern programming practices. I enjoy learning by building real-world projects, experimenting with new technologies, and continuously improving my technical foundation. My long-term goal is to grow into a versatile developer who can contribute to impactful projects and solve challenging problems in the tech industry.
          </p>
        </div>
      </div>
    </section>
  );
}