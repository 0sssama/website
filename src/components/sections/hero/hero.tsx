import { cn } from '@/utils/cn';
import { Button } from '@/components/elements/button';
import { Markdown } from '@/components/molecules/markdown';

import type { HeroProps } from './hero.types';
import { AuroraBackground } from './components/aurora-background';
import ParsedTitle from './components/parsed-title';

export default function Hero({ heading, description, buttons, className }: HeroProps) {
  return (
    <AuroraBackground>
      <section
        className={cn(
          'container flex flex-col items-center justify-center pt-28 pb-10 md:pt-40 md:pb-24 md:text-center',
          className,
        )}
      >
        <h1 className="text-5xl leading-none text-balance sm:text-6xl md:text-7xl">
          <ParsedTitle>{heading}</ParsedTitle>
        </h1>
        <div className="mt-6 mb-8 md:max-w-xl">
          <Markdown className="leading-none! *:text-base [&_*]:text-zinc-700!" content={description} />
        </div>
        <div className="flex w-full items-center gap-2 md:justify-center md:gap-4">
          {Array.isArray(buttons) && buttons.map((button, index) => <Button key={index} {...button} />)}
        </div>
      </section>
    </AuroraBackground>
  );
}
