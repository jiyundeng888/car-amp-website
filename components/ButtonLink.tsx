import Link from 'next/link';
import type { ReactNode } from 'react';

type ButtonLinkProps = {
  href: string;
  children: ReactNode;
  variant?: 'primary' | 'ghost';
};

export default function ButtonLink({ href, children, variant = 'primary' }: ButtonLinkProps) {
  const className =
    variant === 'primary'
      ? 'bg-signal text-white shadow-glow hover:bg-white hover:text-asphalt'
      : 'border border-white/15 bg-white/5 text-white hover:border-white/35 hover:bg-white/10';

  return (
    <Link
      href={href}
      className={`inline-flex items-center justify-center rounded-full px-7 py-4 text-sm font-black uppercase tracking-[0.18em] transition ${className}`}
    >
      {children}
    </Link>
  );
}
