type ProductCardProps = {
  name: string;
  category: string;
  power: string;
  channels: string;
  description: string;
  highlights: string[];
};

export default function ProductCard({ name, category, power, channels, description, highlights }: ProductCardProps) {
  return (
    <article className="group overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.04] shadow-panel transition hover:-translate-y-1 hover:border-signal/50">
      <div className="relative min-h-56 bg-metal-line p-6">
        <div className="absolute inset-0 grid-mask opacity-60" />
        <div className="relative flex h-44 flex-col justify-between rounded-2xl border border-white/10 bg-black/50 p-6">
          <div className="flex items-center justify-between text-xs font-black uppercase tracking-[0.22em] text-slate-400">
            <span>{category}</span>
            <span>{channels}</span>
          </div>
          <div>
            <div className="mb-4 h-2 w-28 rounded-full bg-signal shadow-glow" />
            <h3 className="text-2xl font-black tracking-[-0.03em] text-white">{name}</h3>
            <p className="mt-1 text-sm font-bold uppercase tracking-[0.2em] text-copper">{power}</p>
          </div>
        </div>
      </div>
      <div className="p-7">
        <p className="mb-6 text-sm leading-7 text-slate-400">{description}</p>
        <div className="grid gap-3">
          {highlights.map((item) => (
            <div key={item} className="flex items-center gap-3 text-sm text-slate-300">
              <span className="h-1.5 w-1.5 rounded-full bg-signal" />
              {item}
            </div>
          ))}
        </div>
      </div>
    </article>
  );
}
