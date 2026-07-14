import ButtonLink from '@/components/ButtonLink';
import ProductCard from '@/components/ProductCard';
import SectionHeading from '@/components/SectionHeading';

const products = [
  {
    name: 'VX-1200.1D',
    category: 'Mono Block',
    power: '1200W RMS @ 1Ω',
    channels: '1 Channel',
    description: 'A hard-hitting Class D subwoofer amplifier built for clean bass, low heat, and long demo sessions.',
    highlights: ['Stable 1-ohm topology', 'Remote bass control ready', 'Low-pass and subsonic filters'],
  },
  {
    name: 'VX-600.4AB',
    category: 'Full Range',
    power: '150W x 4 @ 2Ω',
    channels: '4 Channel',
    description: 'A flexible full-range amplifier for front-stage upgrades, component speakers, and daily-driver SQ builds.',
    highlights: ['High-current MOSFET supply', 'HPF / LPF crossover control', 'Installer-friendly terminals'],
  },
  {
    name: 'VX-5PRO',
    category: 'System Amp',
    power: '75W x 4 + 500W',
    channels: '5 Channel',
    description: 'One chassis, complete system power. Ideal for compact installs that still demand real output.',
    highlights: ['Compact Class D platform', 'Dedicated subwoofer channel', 'Signal-sensing turn-on'],
  },
];

const stats = [
  ['1Ω', 'stable mono platforms'],
  ['12V', 'mobile audio expertise'],
  ['OEM', 'branding programs'],
  ['QC', 'shipment-level testing'],
];

export default function Home() {
  return (
    <>
      <section className="relative overflow-hidden bg-radial-signal">
        <div className="absolute inset-0 grid-mask opacity-40" />
        <div className="container-xl relative grid min-h-[780px] items-center gap-12 py-20 lg:grid-cols-[1.02fr_.98fr]">
          <div>
            <p className="mb-6 inline-flex rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-black uppercase tracking-[0.28em] text-slate-300">
              U.S. Mobile Audio Amplifier Supply
            </p>
            <h1 className="text-5xl font-black leading-[0.92] tracking-[-0.07em] text-white md:text-7xl">
              Power that makes every American drive hit harder.
            </h1>
            <p className="mt-8 max-w-2xl text-lg leading-8 text-slate-300">
              VoltEdge Audio builds premium car amplifiers for distributors, installation shops, and private-label brands serving the U.S. car audio aftermarket.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <ButtonLink href="/products/">View Products</ButtonLink>
              <ButtonLink href="/contact/" variant="ghost">Request Quote</ButtonLink>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-10 rounded-full bg-signal/20 blur-3xl" />
            <div className="noise clip-angle relative overflow-hidden rounded-[2.5rem] border border-white/10 bg-graphite p-6 shadow-panel">
              <div className="rounded-[2rem] border border-white/10 bg-black/60 p-7">
                <div className="mb-10 flex items-center justify-between text-xs font-black uppercase tracking-[0.26em] text-slate-500">
                  <span>VoltEdge VX Series</span>
                  <span>Class D</span>
                </div>
                <div className="space-y-5">
                  <div className="h-16 rounded-2xl bg-gradient-to-r from-signal via-copper to-white shadow-glow" />
                  <div className="grid grid-cols-4 gap-3">
                    {[1, 2, 3, 4].map((item) => (
                      <div key={item} className="h-20 rounded-xl border border-white/10 bg-white/5" />
                    ))}
                  </div>
                  <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-6">
                    <div className="flex items-end justify-between gap-6">
                      <div>
                        <p className="text-xs font-black uppercase tracking-[0.28em] text-signal">Peak Control</p>
                        <p className="mt-2 text-4xl font-black tracking-[-0.06em]">1200W RMS</p>
                      </div>
                      <div className="text-right text-sm font-semibold leading-7 text-slate-400">
                        Low noise<br />High damping<br />Road-ready
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-white/10 bg-white/[0.03]">
        <div className="container-xl grid gap-4 py-8 md:grid-cols-4">
          {stats.map(([value, label]) => (
            <div key={value} className="rounded-3xl border border-white/10 bg-black/30 p-6">
              <p className="text-4xl font-black tracking-[-0.05em] text-white">{value}</p>
              <p className="mt-2 text-sm uppercase tracking-[0.18em] text-slate-500">{label}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="container-xl py-24">
        <SectionHeading
          eyebrow="Featured Lineup"
          title="Amplifiers tuned for dealer confidence and customer repeatability."
          description="From SPL-focused mono blocks to clean full-range power, our amplifier platforms are built around strong thermal behavior, stable output, and straightforward installation."
        />
        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {products.map((product) => (
            <ProductCard key={product.name} {...product} />
          ))}
        </div>
      </section>

      <section className="container-xl pb-24">
        <div className="rounded-[2.4rem] border border-white/10 bg-gradient-to-br from-white/[0.08] to-white/[0.02] p-8 md:p-12">
          <div className="grid items-center gap-10 lg:grid-cols-[1fr_.7fr]">
            <div>
              <p className="mb-4 text-sm font-black uppercase tracking-[0.28em] text-signal">Built for trade</p>
              <h2 className="text-3xl font-black tracking-[-0.04em] md:text-5xl">Ready for wholesale programs, custom labels, and U.S. market packaging.</h2>
            </div>
            <div className="space-y-4 text-sm leading-7 text-slate-400">
              <p>We support importers, regional distributors, and specialty car audio retailers with scalable model planning, consistent specifications, and export documentation.</p>
              <ButtonLink href="/contact/">Start a Project</ButtonLink>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
