import Link from "next/link";

export default function NotFound() {
  return (
    <section className="container-xl flex min-h-[60vh] flex-col items-center justify-center py-24 text-center">
      <p className="text-7xl font-black text-signal sm:text-9xl">404</p>
      <h1 className="mt-6 text-2xl font-black text-white sm:text-3xl">
        Page Not Found
      </h1>
      <p className="mt-3 max-w-md text-slate-400">
        The page you are looking for doesn&apos;t exist or has been moved.
      </p>
      <Link
        href="/"
        className="mt-8 rounded-full bg-signal px-7 py-3.5 text-sm font-black uppercase tracking-[0.15em] text-white transition hover:bg-white hover:text-asphalt"
      >
        Back to Home
      </Link>
    </section>
  );
}
