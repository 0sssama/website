import type { ReactNode } from 'react';

export default function AnimatedGradientText({ children }: { children: ReactNode }) {
  return (
    <span className="animate-text-gradient bg-radial-(--hero-gradient-text) bg-[length:300%] bg-clip-text pr-0.5 text-transparent">
      {children}
    </span>
  );
}
