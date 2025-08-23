import { useEffect, useRef, useState } from "react";

export function CGPAProgress() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.5 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const cgpa = 9.65;
  const maxCgpa = 10;
  const percentage = (cgpa / maxCgpa) * 100;
  const circumference = 314; // 2 * Math.PI * 50 (radius)
  const strokeDasharray = isVisible ? `${(percentage / 100) * circumference} ${circumference}` : `0 ${circumference}`;

  return (
    <section ref={sectionRef} className="py-20 px-4 bg-gradient-to-br from-primary/5 to-accent/5">
      <div className="max-w-4xl mx-auto text-center">
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">Academic Performance</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto"></div>
        </div>

        <div className="glass-card p-8 md:p-12 rounded-2xl tilt-card max-w-md mx-auto">
          <div className="relative w-48 h-48 mx-auto mb-6">
            <svg className="w-full h-full transform -rotate-90" viewBox="0 0 120 120">
              {/* Background circle */}
              <circle
                cx="60"
                cy="60"
                r="50"
                fill="none"
                stroke="currentColor"
                strokeWidth="8"
                className="text-muted/30"
              />
              {/* Progress circle */}
              <circle
                cx="60"
                cy="60"
                r="50"
                fill="none"
                stroke="url(#gradient)"
                strokeWidth="8"
                strokeLinecap="round"
                strokeDasharray={strokeDasharray}
                strokeDashoffset="0"
                className="transition-all duration-2000 ease-out"
              />
              <defs>
                <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="hsl(var(--primary))" />
                  <stop offset="100%" stopColor="hsl(var(--accent))" />
                </linearGradient>
              </defs>
            </svg>
            
            {/* Center text */}
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <span className="text-4xl font-bold gradient-text">
                {isVisible ? cgpa : "0.00"}
              </span>
              <span className="text-lg text-muted-foreground">/ {maxCgpa}</span>
              <span className="text-sm text-muted-foreground mt-1">CGPA</span>
            </div>
          </div>
          
          <h3 className="text-2xl font-bold mb-2">Current CGPA</h3>
          <p className="text-muted-foreground">
            Maintaining excellent academic performance throughout my B.Tech journey
          </p>
        </div>
      </div>
    </section>
  );
}