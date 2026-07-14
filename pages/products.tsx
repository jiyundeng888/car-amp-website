import ProductCard from '@/components/ProductCard';
import SectionHeading from '@/components/SectionHeading';

const products = [
  {
    name: 'VX-1200.1D',
    category: 'Mono Block',
    power: '1200W RMS @ 1Ω',
    channels: '1 Channel',
    description: 'Designed for subwoofer authority in daily systems and demo builds where control matters as much as output.',
    highlights: ['1-ohm stable Class D circuit', 'Variable low-pass filter', 'Wired bass remote input'],
  },
  {
    name: 'VX-2000.1D',
    category: 'Mono Block',
    power: '2000W RMS @ 1Ω',
    channels: '1 Channel',
    description: 'High-output bass power for aggressive SPL-oriented retailers and premium private-label lines.',
    highlights: ['Oversized heat management', 'Subsonic tuning control', 'Heavy-gauge power terminals'],
  },
  {
    name: 'VX-600.4AB',
    category: 'Full Range',
    power: '150W x 4 @ 2Ω',
    channels: '4 Channel',
    description: 'A strong front-stage amplifier for component speaker upgrades, door builds, and sound-quality systems.',
    highlights: ['Full-range crossover flexibility', 'Low-noise input stage', 'Bridgeable channel pairs'],
  },
  {
    name: 'VX-800.4D',
    category: 'Compact Power',
    power: '200W x 4 @ 2Ω',
    channels: '4 Channel',
    description: 'Compact Class D output for modern vehicles where space is tight and thermal behavior is critical.',
    highlights: ['Small footprint chassis', 'Signal-sensing turn-on', 'High-efficiency topology'],
  },
  {
    name: 'VX-5PRO',
    category: 'System Amp',
    power: '75W x 4 + 500W',
    channels: '5 Channel',
    description: 'A complete-system amplifier that simplifies inventory and installation without sacrificing system impact.',
    highlights: ['Dedicated sub channel', 'Front/rear/sub control', 'Single-chassis install'],
  },
  {
    name: 'VX-OEM DSP',
    category: 'Integration',
    power: 'OEM Upgrade Ready',
    channels: 'Multi Input',
    description: 'Integration-focused platform planning for OEM upgrade kits, DSP bundles, and dealer package systems.',
    highlights: ['High-level input support', 'Accessory-ready platform', 'Private-label friendly'],
  },
];

export default function ProductsPage() {
  return (
    <>
      <section className="container-xl py-24">
        <SectionHeading
          eyebrow="Products"
          title="Car amplifier platforms for every dealer shelf and install bay."
          description="Choose from mono subwoofer amplifiers, full-range four-channel power, compact Class D models, and system amplifiers ready for U.S. mobile audio programs."
          align="center"
        />
        <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {products.map((product) => (
            <ProductCard key={product.name} {...product} />
          ))}
        </div>
      </section>

      <section className="container-xl pb-24">
        <div className="grid gap-6 lg:grid-cols-3">
          {['Private-label branding', 'Dealer sample support', 'Specification planning'].map((item) => (
            <div key={item} className="rounded-[1.8rem] border border-white/10 bg-white/[0.04] p-7">
              <h3 className="text-xl font-black tracking-[-0.03em]">{item}</h3>
              <p className="mt-4 text-sm leading-7 text-slate-400">
                Build a focused product line with the right power ratings, feature stack, packaging language, and export-ready production flow.
              </p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
