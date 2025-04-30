/* eslint-disable no-console */
import type { NextRequest } from 'next/server';

import { contactFormSchema } from '@/components/sections/contact-form/helpers/schema';
import { sendContactEmail } from '@/services/resend';

export async function POST(request: NextRequest) {
  const body = await request.json();

  try {
    const validation = contactFormSchema.safeParse(body);

    if (!validation.success)
      return new Response(validation.error.errors?.[0].message || 'Validation error', { status: 400 });

    const mail = await sendContactEmail(validation.data);

    if (mail.error) return new Response(mail.error.message, { status: 500 });

    return new Response('Success', { status: 200 });
  } catch (error) {
    console.error(error);
    return new Response('Server error', { status: 500 });
  }
}
