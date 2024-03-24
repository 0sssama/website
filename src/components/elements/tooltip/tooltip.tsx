'use client';

import { forwardRef, type FC, type ElementRef, type ComponentPropsWithoutRef } from 'react';
import * as TooltipPrimitive from '@radix-ui/react-tooltip';

import { cn } from '@/base/utils/cn';

import type { TooltipProps } from './tooltip.types';

const TooltipProvider = TooltipPrimitive.Provider;

const TooltipRoot = TooltipPrimitive.Root;

const TooltipTrigger = TooltipPrimitive.Trigger;

const TooltipContent = forwardRef<
  ElementRef<typeof TooltipPrimitive.Content>,
  ComponentPropsWithoutRef<typeof TooltipPrimitive.Content>
>(({ className, sideOffset = 4, ...props }, ref) => (
  <TooltipPrimitive.Content
    ref={ref}
    sideOffset={sideOffset}
    className={cn(
      'overflow-hidden rounded-[10px] border border-border bg-zinc-900/80 px-3 py-2 text-xs leading-none text-zinc-300 shadow-md backdrop-blur-sm',
      'animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2',
      className,
    )}
    {...props}
  />
));

const Tooltip: FC<TooltipProps> = ({
  children,
  content,
  isOpen,
  offset = 5,
  delay = 400,
  side = 'top',
  align = 'center',
}) => (
  <TooltipProvider delayDuration={delay}>
    <TooltipRoot open={isOpen}>
      <TooltipTrigger asChild>{children}</TooltipTrigger>
      <TooltipContent side={side} align={align} sideOffset={offset}>
        {content}
      </TooltipContent>
    </TooltipRoot>
  </TooltipProvider>
);

TooltipContent.displayName = TooltipPrimitive.Content.displayName;

export { Tooltip, TooltipRoot, TooltipTrigger, TooltipContent, TooltipProvider };
