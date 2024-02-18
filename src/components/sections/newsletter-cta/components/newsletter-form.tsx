'use client';

import { useState } from 'react';

import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

import type { NewsletterFormProps } from '../newsletter-cta.types';

export default function NewsletterForm({ inputPlaceholder, inputNote, buttonText }: NewsletterFormProps) {
  const [email, setEmail] = useState('');

  return (
    <form className="flex w-full items-center justify-center gap-6 max-md:flex-col md:gap-2">
      <div className="relative flex flex-col max-md:w-full md:min-w-[280px]">
        <Input
          type="email"
          placeholder={inputPlaceholder || 'john@doe.com'}
          variant="inverted"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        {inputNote && (
          <p className="absolute bottom-0 left-3 translate-y-full text-[10px] text-zinc-600">{inputNote}</p>
        )}
      </div>
      <Button variant="inverted" className="max-md:w-full">
        {buttonText || 'Subscribe'} &rarr;
      </Button>
    </form>
  );
}
