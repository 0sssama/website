/* eslint-disable no-console */
import { resend } from '@/base/services/resend';

import type { SendMailParams } from '../types';

export async function sendMail({ from, to, subject, html }: SendMailParams) {
  return resend.emails.send({ from, to, subject, html });
}
