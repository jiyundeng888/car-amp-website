import Link from 'next/link';

const navItems = [
  { href: '/', label: 'Home' },
  { href: '/about/', label: 'About Us' },
  { href: '/products/', label: 'Products' },
  { href: '/contact/', label: 'Contact' },
];

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-asphalt/80 backdrop-blur-xl">
      <div className="container-xl flex h-20 items-center justify-between">
        <Link href="/" className="group flex items-center gap-3">
          <span className="grid h-11 w-11 place-items-center rounded-xl bg-signal text-lg font-black tracking-tighter text-white shadow-glow">
            VE
          </span>
          <span>
            <span className="block text-sm font-black uppercase tracking-[0.36em] text-white">VoltEdge</span>
            <span className="block text-xs uppercase tracking-[0.22em] text-steel">Mobile Audio</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-300 transition hover:text-white"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <Link
          href="/contact/"
          className="rounded-full border border-white/15 bg-white px-5 py-3 text-sm font-bold uppercase tracking-[0.16em] text-asphalt transition hover:bg-signal hover:text-white"
        >
          Get Quote
        </Link>
      </div>
    </header>
  );
}
