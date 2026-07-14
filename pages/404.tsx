import ButtonLink from '@/components/ButtonLink';

export default function Custom404() {
  return (
    <section className="container-xl grid min-h-[70vh] place-items-center py-24 text-center">
      <div className="max-w-2xl">
        <p className="mb-4 text-sm font-black uppercase tracking-[0.28em] text-signal">404</p>
        <h1 className="text-5xl font-black tracking-[-0.06em] text-white md:text-7xl">Page not found</h1>
        <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-slate-400">
          The page you are looking for may have moved, but the amplifier lineup is still ready for your next build.
        </p>
        <div className="mt-10 flex justify-center">
          <ButtonLink href="/">Back Home</ButtonLink>
        </div>
      </div>
    </section>
  );
}
