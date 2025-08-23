import { ThemeToggle } from "./ThemeToggle";

export function HeroSection() {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Overlay */}
      <div className="absolute inset-0 bg-background/80 backdrop-blur-sm"></div>
      
      {/* Floating shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="floating absolute top-20 left-10 w-32 h-32 rounded-full bg-primary/10 blur-xl"></div>
        <div className="floating-delayed absolute top-40 right-20 w-24 h-24 rounded-full bg-accent/10 blur-xl"></div>
        <div className="floating absolute bottom-32 left-1/3 w-40 h-40 rounded-full bg-primary-glow/5 blur-2xl"></div>
      </div>

      {/* Theme toggle */}
      <div className="absolute top-8 right-8 z-20">
        <ThemeToggle />
      </div>

      {/* Main content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <div className="animate-fade-in-up">
          <h1 className="text-6xl md:text-8xl font-bold mb-6 hero-text text-shadow">
            Anish Kumar Patra
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 font-medium">
            B.Tech CSE Student | Aspiring Software Engineer
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="glass-card px-8 py-4 rounded-full hover-lift text-primary-foreground bg-gradient-to-r from-primary to-primary-glow font-semibold">
              View My Work
            </button>
            <button className="glass-card px-8 py-4 rounded-full hover-lift border border-primary/20 font-semibold">
              Get In Touch
            </button>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
}