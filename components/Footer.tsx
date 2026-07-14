import Link from "next/link";

const footerLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/products", label: "Products" },
  { href: "/contact", label: "Contact" },
];

export default function Footer() {
  return (
    <footer className="border-t border-white/5 bg-asphalt">
      <div className="container-xl py-16">
        <div className="grid gap-12 md:grid-cols-[1.5fr_1fr_1fr]">
          <div>
            <span className="text-lg font-black tracking-tight text-white">
              VOLT<span className="text-signal">EDGE</span>
            </span>
            <p className="mt-4 max-w-xs text-sm leading-7 text-slate-500">
              Premium car amplifier manufacturer and exporter. OEM/ODM, private
              label, and wholesale programs for the US 12V aftermarket.
            </p>
          </div>

          <div>
            <p className="text-xs font-black uppercase tracking-[0.2em] text-signal">
              Navigate
            </p>
            <ul className="mt-5 space-y-3">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-slate-400 transition hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-xs font-black uppercase tracking-[0.2em] text-signal">
              Contact
            </p>
            <ul className="mt-5 space-y-3 text-sm text-slate-400">
              <li>sales@voltedge-audio.com</li>
              <li>Shenzhen, China</li>
              <li>Markets: US, Canada, Mexico, LATAM</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/5 pt-8 sm:flex-row">
          <p className="text-xs text-slate-600">
            &copy; {new Date().getFullYear()} VoltEdge Audio. All rights reserved.
          </p>
          <p className="text-xs text-slate-600">
            Designed for the US 12V aftermarket.
          </p>
        </div>
      </div>
    </footer>
  );
}
