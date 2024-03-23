import { forwardRef } from 'react';
import { cva } from 'class-variance-authority';

import { cn } from '@/base/utils/cn';

import type { InputProps } from './input.types';

const inputVariants = cva(
  'flex h-10 w-full rounded-md border px-4 py-2 text-sm file:border-0 file:bg-transparent file:text-sm file:font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50',
  {
    variants: {
      variant: {
        default:
          'bg-primary-foreground ring-offset-background border-primary/10 placeholder:text-muted-foreground focus-visible:ring-primary text-primary',
        inverted:
          'bg-primary ring-offset-background border-primary-foreground/20 placeholder:text-muted-foreground focus-visible:ring-primary text-primary-foreground',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  },
);

const Input = forwardRef<HTMLInputElement, InputProps>(({ className, type, variant, ...props }, ref) => (
  <input type={type} className={cn(inputVariants({ variant }), className)} ref={ref} {...props} />
));

Input.displayName = 'Input';

export { Input, inputVariants };
