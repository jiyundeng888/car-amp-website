type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description?: string;
  align?: 'left' | 'center';
};

export default function SectionHeading({ eyebrow, title, description, align = 'left' }: SectionHeadingProps) {
  return (
    <div className={align === 'center' ? 'mx-auto max-w-3xl text-center' : 'max-w-3xl'}>
      <p className="mb-4 text-sm font-black uppercase tracking-[0.28em] text-signal">{eyebrow}</p>
      <h2 className="text-3xl font-black tracking-[-0.04em] text-white md:text-5xl">{title}</h2>
      {description ? <p className="mt-5 text-base leading-8 text-slate-400 md:text-lg">{description}</p> : null}
    </div>
  );
}
