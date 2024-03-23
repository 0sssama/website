/* eslint-disable no-console */
import { resend } from '@/base/services/resend';

import type { SendMailParams } from '../types';

export async function sendMail({ from, to, subject, html }: SendMailParams) {
  const email = await resend.emails.send({ from, to, subject, html });

  if (email.error || !email.data) {
    const errorMessage = email.error?.message || 'Unknown email error';

    console.error(errorMessage);
    throw new Error(errorMessage);
  }

  return email.data.id;
}
