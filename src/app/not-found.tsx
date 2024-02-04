import Link from 'next/link';

export default function NotFound() {
  return (
    <main className="w-full">
      <section className="container prose prose-invert flex min-h-[100vh] flex-col items-center justify-center lg:prose-xl">
        <h1>404: Page not found.</h1>
        <Link href="/" className="underline hover:opacity-80">
          &larr; Go back home
        </Link>
      </section>
    </main>
  );
}
