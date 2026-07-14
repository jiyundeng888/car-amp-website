import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black/40">
      <div className="container-xl grid gap-10 py-14 md:grid-cols-[1.4fr_.8fr_.8fr]">
        <div>
          <div className="mb-5 flex items-center gap-3">
            <span className="grid h-10 w-10 place-items-center rounded-xl bg-signal font-black text-white">VE</span>
            <span className="text-sm font-black uppercase tracking-[0.32em]">VoltEdge Audio</span>
          </div>
          <p className="max-w-xl text-sm leading-7 text-slate-400">
            Premium car amplifier systems for U.S. distributors, custom installers, and private-label mobile audio brands.
          </p>
        </div>
        <div>
          <h3 className="mb-4 text-sm font-bold uppercase tracking-[0.24em] text-white">Pages</h3>
          <div className="grid gap-3 text-sm text-slate-400">
            <Link href="/" className="hover:text-white">Home</Link>
            <Link href="/about/" className="hover:text-white">About Us</Link>
            <Link href="/products/" className="hover:text-white">Products</Link>
            <Link href="/contact/" className="hover:text-white">Contact</Link>
          </div>
        </div>
        <div>
          <h3 className="mb-4 text-sm font-bold uppercase tracking-[0.24em] text-white">Markets</h3>
          <div className="grid gap-3 text-sm text-slate-400">
            <span>12V Car Audio</span>
            <span>OEM / ODM Supply</span>
            <span>Dealer Programs</span>
          </div>
        </div>
      </div>
      <div className="border-t border-white/10 py-6 text-center text-xs uppercase tracking-[0.2em] text-slate-500">
        © 2026 VoltEdge Audio. Built for static Cloudflare Pages deployment.
      </div>
    </footer>
  );
}
