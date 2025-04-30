import { cn } from '@/utils/cn';
import { Button } from '@/components/elements/button';
import { Markdown } from '@/components/molecules/markdown';

import type { HeroProps } from './hero.types';

export default function Hero({ heading, description, buttons, className }: HeroProps) {
  return (
    <section
      className={cn(
        'container flex flex-col items-center justify-center pt-28 pb-10 md:pt-40 md:pb-24 md:text-center',
        className,
      )}
    >
      <h1 className="gradient-title text-4xl md:text-6xl md:leading-[75px]!">{heading}</h1>
      <div className="mt-6 mb-8 md:max-w-[80%]">
        <Markdown className="leading-none! font-light *:text-base *:text-zinc-300!" content={description} />
      </div>
      <div className="flex w-full items-center gap-2 md:justify-center md:gap-4">
        {Array.isArray(buttons) && buttons.map((button, index) => <Button key={index} {...button} />)}
      </div>
      <div className="pointer-events-none absolute top-0 right-0 left-0 z-[-1] h-screen bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] bg-[size:2.66rem_2.66rem]" />
    </section>
  );
}
