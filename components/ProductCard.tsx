export default function ProductCard({
  name,
  category,
  power,
  channels,
  classLabel,
  description,
  specs,
}: {
  name: string;
  category: string;
  power: string;
  channels: string;
  classLabel: string;
  description: string;
  specs: { label: string; value: string }[];
}) {
  return (
    <div className="group flex flex-col rounded-3xl border border-white/10 bg-graphite/50 p-6 transition hover:border-signal/30 hover:bg-graphite">
      {/* Product visual */}
      <div className="mb-5 flex aspect-[4/3] items-center justify-center rounded-2xl border border-white/5 bg-gradient-to-br from-asphalt to-graphite-light">
        <span className="text-3xl font-black tracking-tight text-white/10 transition group-hover:text-signal/30">
          {name.split("-")[0]}
        </span>
      </div>

      <p className="text-xs font-black uppercase tracking-wider text-signal">
        {category}
      </p>
      <h3 className="mt-2 text-xl font-black text-white">{name}</h3>
      <p className="mt-2 text-sm leading-6 text-slate-400">{description}</p>

      <div className="mt-5 grid grid-cols-2 gap-3">
        {specs.map((spec) => (
          <div
            key={spec.label}
            className="rounded-xl border border-white/5 bg-black/30 px-3 py-2.5"
          >
            <p className="text-[10px] font-bold uppercase tracking-wider text-slate-500">
              {spec.label}
            </p>
            <p className="mt-1 text-sm font-black text-white">{spec.value}</p>
          </div>
        ))}
      </div>

      <div className="mt-5 flex items-center gap-3 border-t border-white/5 pt-4">
        <span className="rounded-lg bg-signal/10 px-3 py-1 text-xs font-bold text-signal">
          {power}
        </span>
        <span className="text-xs text-slate-500">{channels} &middot; {classLabel}</span>
      </div>
    </div>
  );
}
