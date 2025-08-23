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
            Hi, I'm <span className="text-primary font-semibold">Anish Kumar Patra</span>, currently pursuing B.Tech in Computer Science at{" "}
            <span className="text-accent font-semibold">NMAM Institute of Technology</span>. I studied at{" "}
            <span className="text-primary font-semibold">Loyola School, Jamshedpur</span>, where I scored{" "}
            <span className="text-accent font-bold">88%</span> in 10th and{" "}
            <span className="text-accent font-bold">89%</span> in 12th grade.
          </p>
        </div>
      </div>
    </section>
  );
}