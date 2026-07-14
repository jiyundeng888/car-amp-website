import Link from "next/link";

export default function ButtonLink({
  href,
  children,
  variant = "primary",
}: {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary";
}) {
  const base =
    "inline-flex items-center justify-center rounded-full px-7 py-3.5 text-sm font-black uppercase tracking-[0.15em] transition";
  const styles =
    variant === "primary"
      ? "bg-signal text-white shadow-glow hover:bg-white hover:text-asphalt"
      : "border border-white/15 text-white hover:bg-white/5";

  return (
    <Link href={href} className={`${base} ${styles}`}>
      {children}
    </Link>
  );
}
