type Particle = {
  left: string;
  bottom: string;
  duration: string;
  delay: string;
  sizeClass: string;
  animClass: string;
};

const PARTICLES: Particle[] = [
  // --- Small dots, straight up ---
  { left: "3%",  bottom: "-6px", duration: "7s",  delay: "0s",    sizeClass: "ember ember-sm", animClass: "animate-ember-up" },
  { left: "9%",  bottom: "-6px", duration: "10s", delay: "1.2s",  sizeClass: "ember ember-md", animClass: "animate-ember-up" },
  { left: "16%", bottom: "-6px", duration: "8s",  delay: "0.4s",  sizeClass: "ember ember-sm", animClass: "animate-ember-up" },
  { left: "24%", bottom: "-6px", duration: "12s", delay: "2.5s",  sizeClass: "ember ember-md", animClass: "animate-ember-up" },
  { left: "33%", bottom: "-6px", duration: "9s",  delay: "0.8s",  sizeClass: "ember ember-sm", animClass: "animate-ember-up" },
  { left: "41%", bottom: "-6px", duration: "11s", delay: "3.1s",  sizeClass: "ember ember-md", animClass: "animate-ember-up" },
  { left: "50%", bottom: "-6px", duration: "7.5s",delay: "1.7s",  sizeClass: "ember ember-sm", animClass: "animate-ember-up" },
  { left: "58%", bottom: "-6px", duration: "13s", delay: "0.2s",  sizeClass: "ember ember-md", animClass: "animate-ember-up" },
  { left: "67%", bottom: "-6px", duration: "8.5s",delay: "2.9s",  sizeClass: "ember ember-sm", animClass: "animate-ember-up" },
  { left: "75%", bottom: "-6px", duration: "10s", delay: "1.0s",  sizeClass: "ember ember-sm", animClass: "animate-ember-up" },
  { left: "83%", bottom: "-6px", duration: "9.5s",delay: "3.8s",  sizeClass: "ember ember-md", animClass: "animate-ember-up" },
  { left: "91%", bottom: "-6px", duration: "7s",  delay: "0.6s",  sizeClass: "ember ember-sm", animClass: "animate-ember-up" },
  { left: "97%", bottom: "-6px", duration: "11s", delay: "2.1s",  sizeClass: "ember ember-sm", animClass: "animate-ember-up" },

  // --- Drifting left ---
  { left: "6%",  bottom: "-6px", duration: "9s",  delay: "0.9s",  sizeClass: "ember ember-md", animClass: "animate-ember-drift-left" },
  { left: "29%", bottom: "-6px", duration: "11s", delay: "2.2s",  sizeClass: "ember ember-sm", animClass: "animate-ember-drift-left" },
  { left: "54%", bottom: "-6px", duration: "8s",  delay: "4.0s",  sizeClass: "ember ember-md", animClass: "animate-ember-drift-left" },
  { left: "78%", bottom: "-6px", duration: "12s", delay: "1.5s",  sizeClass: "ember ember-sm", animClass: "animate-ember-drift-left" },

  // --- Drifting right ---
  { left: "14%", bottom: "-6px", duration: "10s", delay: "3.3s",  sizeClass: "ember ember-md", animClass: "animate-ember-drift-right" },
  { left: "38%", bottom: "-6px", duration: "8.5s",delay: "0.7s",  sizeClass: "ember ember-sm", animClass: "animate-ember-drift-right" },
  { left: "62%", bottom: "-6px", duration: "13s", delay: "2.6s",  sizeClass: "ember ember-md", animClass: "animate-ember-drift-right" },
  { left: "86%", bottom: "-6px", duration: "9s",  delay: "1.3s",  sizeClass: "ember ember-sm", animClass: "animate-ember-drift-right" },

  // --- Spiral ---
  { left: "20%", bottom: "-6px", duration: "14s", delay: "1.1s",  sizeClass: "ember ember-md", animClass: "animate-ember-spiral" },
  { left: "45%", bottom: "-6px", duration: "16s", delay: "3.5s",  sizeClass: "ember ember-sm", animClass: "animate-ember-spiral" },
  { left: "70%", bottom: "-6px", duration: "12s", delay: "0.3s",  sizeClass: "ember ember-md", animClass: "animate-ember-spiral" },

  // --- Large bright embers ---
  { left: "12%", bottom: "-6px", duration: "10s", delay: "4.5s",  sizeClass: "ember ember-lg", animClass: "animate-ember-up" },
  { left: "35%", bottom: "-6px", duration: "13s", delay: "2.0s",  sizeClass: "ember ember-lg", animClass: "animate-ember-drift-right" },
  { left: "60%", bottom: "-6px", duration: "11s", delay: "0.5s",  sizeClass: "ember ember-lg", animClass: "animate-ember-drift-left" },
  { left: "88%", bottom: "-6px", duration: "9s",  delay: "3.2s",  sizeClass: "ember ember-lg", animClass: "animate-ember-up" },

  // --- Streaks ---
  { left: "7%",  bottom: "-12px", duration: "6s",  delay: "1.8s",  sizeClass: "ember-streak", animClass: "animate-ember-streak" },
  { left: "27%", bottom: "-12px", duration: "8s",  delay: "3.7s",  sizeClass: "ember-streak", animClass: "animate-ember-streak" },
  { left: "48%", bottom: "-12px", duration: "7s",  delay: "0.1s",  sizeClass: "ember-streak", animClass: "animate-ember-streak" },
  { left: "68%", bottom: "-12px", duration: "9s",  delay: "2.4s",  sizeClass: "ember-streak", animClass: "animate-ember-streak" },
  { left: "89%", bottom: "-12px", duration: "6.5s",delay: "4.2s",  sizeClass: "ember-streak", animClass: "animate-ember-streak" },

  // --- Orbs (slow, dreamy) ---
  { left: "18%", bottom: "-8px", duration: "18s", delay: "5.0s",  sizeClass: "ember-orb", animClass: "animate-ember-orb" },
  { left: "44%", bottom: "-8px", duration: "22s", delay: "2.3s",  sizeClass: "ember-orb", animClass: "animate-ember-orb" },
  { left: "73%", bottom: "-8px", duration: "19s", delay: "7.5s",  sizeClass: "ember-orb", animClass: "animate-ember-orb" },
];

type Props = {
  className?: string;
};

export function ParticleField({ className = "" }: Props) {
  return (
    <div className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`} aria-hidden="true">
      {PARTICLES.map((p, i) => (
        <span
          key={i}
          className={`${p.sizeClass} ${p.animClass}`}
          style={{
            left: p.left,
            bottom: p.bottom,
            animationDuration: p.duration,
            animationDelay: p.delay,
          }}
        />
      ))}
    </div>
  );
}
