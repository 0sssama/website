/* eslint-disable no-console */
import type { NextRequest } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    console.log('got revalidation request');
    console.log(request);

    return new Response(JSON.stringify({ message: 'Revalidation successful.', status: 200, revalidated: true }), {
      status: 200,
    });
  } catch (error) {
    console.error(error);
    return new Response('Revalidation failed.', {
      status: 400,
    });
  }
}
