'use client';

import { useState } from 'react';

import { Input } from '@/components/elements/input';
import { Button } from '@/components/elements/button';

import type { NewsletterFormProps } from '../newsletter-cta.types';

export default function NewsletterForm({ inputPlaceholder, buttonText }: NewsletterFormProps) {
  const [email, setEmail] = useState('');

  return (
    <form className="flex w-full items-center justify-center gap-4 max-md:flex-col md:gap-2">
      <div className="relative flex flex-col max-md:w-full md:min-w-[280px]">
        <Input
          type="email"
          placeholder={inputPlaceholder || 'john@doe.com'}
          variant="inverted"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <Button variant="inverted" className="max-md:w-full">
        {buttonText || 'Subscribe'} &rarr;
      </Button>
    </form>
  );
}
