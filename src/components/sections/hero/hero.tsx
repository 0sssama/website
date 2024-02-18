import { cn } from '@/base/utils/cn';
import { Button } from '@/components/ui/button';
import { Markdown } from '@/components/organisms/markdown';

import type { HeroProps } from './hero.types';

export default function Hero({ heading, description, buttons, className }: HeroProps) {
  return (
    <div className={cn('container flex flex-col items-center justify-center py-28 md:py-40 md:text-center', className)}>
      <h1 className="gradient-title text-4xl md:text-6xl md:!leading-[75px]">{heading}</h1>
      <div className="mb-8 mt-6 md:max-w-[75%]">
        <Markdown className="font-light !leading-none *:text-base *:!text-zinc-300" content={description} />
      </div>
      <div className="flex w-full items-center gap-2 md:justify-center md:gap-4">
        {Array.isArray(buttons) && buttons.map((button, index) => <Button key={index} {...button} />)}
      </div>
      <div className="pointer-events-none absolute left-0 right-0 top-0 z-[-1] h-[150vh] bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:2.5rem_2.5rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
    </div>
  );
}
