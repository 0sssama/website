import type { NextRequest } from 'next/server';

import { sendMail } from '@/base/services/resend';
import { contactFormSchema } from '@/components/sections/contact-form/helpers/schema';

export async function POST(request: NextRequest) {
  const body = await request.json();

  try {
    const validation = contactFormSchema.safeParse(body);

    if (!validation.success)
      return new Response(validation.error.errors?.[0].message || 'Validation error', { status: 400 });

    const mail = await sendMail({
      to: 'labrahmioussama@gmail.com',
      from: 'contact@labrahmi.me',
      subject: 'Labrahmi.me: 🚀 New contact form submission',
      // TODO: add proper email template
      html: `<b>Name:</b> ${body.name}<br /><b>Email:</b> ${body.email}<br /><b>Subject:</b> ${body.subject}<br /><b>Message:</b> ${body.message}<br />`,
    });

    if (mail.error) return new Response(mail.error.message, { status: 500 });

    return new Response('Success', { status: 200 });
  } catch (error) {
    console.error(error);
    return new Response('Server error', { status: 500 });
  }
}
