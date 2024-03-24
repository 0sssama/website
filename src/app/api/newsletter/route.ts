/* eslint-disable no-console */
import type { NextRequest } from 'next/server';

import { sendContactEmail } from '@/base/services/resend';
import { newsletterFormSchema } from '@/components/sections/newsletter-cta/helpers/schema';

export async function POST(request: NextRequest) {
  const body = await request.json();

  try {
    const validation = newsletterFormSchema.safeParse(body);

    if (!validation.success)
      return new Response(validation.error.errors?.[0].message || 'Validation error', { status: 400 });

    // i should use the `addNewsletterSubscriber` function here
    // but that requires paid plan in resend and im broke :)
    const mail = await sendContactEmail({
      ...validation.data,
      name: 'Newsletter Subscriber :)',
      subject: 'Newsletter Subscription',
      message: `This email subscribes to the newsletter.`,
    });

    if (mail.error) return new Response(mail.error.message, { status: 500 });

    return new Response('Success', { status: 200 });
  } catch (error) {
    console.error(error);
    return new Response('Server error', { status: 500 });
  }
}
