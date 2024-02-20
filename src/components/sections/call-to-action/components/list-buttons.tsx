import { Button } from '@/components/ui/button';

import type { ListButtonsProps } from '../call-to-action.types';

export default function ListButtons({ buttons }: ListButtonsProps) {
  return (
    <div className="flex w-full items-center gap-2 md:justify-center md:gap-4">
      {Array.isArray(buttons) && buttons.map((button, index) => <Button key={index} {...button} />)}
    </div>
  );
}
