import { cn } from '@/base/utils/cn';
import { Container } from '@/components/layouts/container';
import { Button } from '@/components/ui/button';
import { Markdown } from '@/components/organisms/markdown';

import type { HeroProps } from './hero.types';

export default function Hero({ heading, description, buttons, className }: HeroProps) {
  return (
    <Container className={cn('flex flex-col items-center justify-center py-28 md:py-40 md:text-center', className)}>
      <h1 className="gradient-title text-4xl md:text-6xl md:!leading-[75px]">{heading}</h1>
      <Markdown
        className="mb-8 mt-6 font-light !leading-none *:text-base *:!text-zinc-300 md:max-w-[75%]"
        content={description}
      />
      <div className="flex w-full items-center gap-2 md:justify-center md:gap-4">
        {Array.isArray(buttons) && buttons.map((button, index) => <Button key={index} {...button} />)}
      </div>
    </Container>
  );
}
