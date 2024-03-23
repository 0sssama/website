import { forwardRef } from 'react';
import { cva } from 'class-variance-authority';

import { cn } from '@/base/utils/cn';

import type { TextareaProps } from './textarea.types';

export const textareaVariants = cva(
  'flex min-h-28 w-full rounded-sm resize-none border px-4 py-3 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50',
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

const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(({ className, variant, ...props }, ref) => (
  <textarea className={cn(textareaVariants({ variant }), className)} ref={ref} {...props} />
));
Textarea.displayName = 'Textarea';

export default Textarea;
