import type { Metadata } from "next";
import Link from "next/link";
import ButtonLink from "@/components/ButtonLink";
import SectionHeading from "@/components/SectionHeading";
import ProductCard from "@/components/ProductCard";

export const metadata: Metadata = {
  title: "VoltEdge Audio — Premium Car Amplifiers for the US 12V Aftermarket",
  description:
    "OEM/ODM manufacturing, private label programs, and wholesale distribution of car audio amplifiers for the US 12V aftermarket.",
};

const featuredProducts = [
  {
    name: "VXM-1500D",
    category: "Mono Block",
    power: "1500W RMS",
    channels: "1 Channel",
    classLabel: "Class D",
    description: "Competition-grade mono block with integrated DSP and subwoofer control.",
    specs: [
      { label: "RMS Power", value: "1500W" },
      { label: "Impedance", value: "1 Ohm" },
      { label: "Class", value: "D" },
      { label: "SNR", value: "95 dB" },
    ],
  },
  {
    name: "VX4-600",
    category: "4-Channel",
    power: "600W Total",
    channels: "4 Channel",
    classLabel: "Class AB",
    description: "Full-range Class AB amplifier for audiophile-grade sound quality.",
    specs: [
      { label: "RMS Power", value: "4x150W" },
      { label: "Impedance", value: "4 Ohm" },
      { label: "Class", value: "AB" },
      { label: "THD", value: "<0.05%" },
    ],
  },
  {
    name: "VXDSP-6.8",
    category: "DSP Amplifier",
    power: "1200W Total",
    channels: "8 Channel",
    classLabel: "Class D",
    description: "8-channel DSP amplifier with 31-band EQ and time alignment.",
    specs: [
      { label: "RMS Power", value: "8x150W" },
      { label: "DSP", value: "31-Band" },
      { label: "Class", value: "D" },
      { label: "Inputs", value: "8 CH" },
    ],
  },
  {
    name: "VX5-800",
    category: "5-Channel",
    power: "800W Total",
    channels: "5 Channel",
    classLabel: "Class D",
    description: "All-in-one 5-channel system amplifier — full-range plus subwoofer.",
    specs: [
      { label: "RMS Power", value: "4x100W + 400W" },
      { label: "Impedance", value: "2 Ohm" },
      { label: "Class", value: "D" },
      { label: "Crossover", value: "Active" },
    ],
  },
];

const pillars = [
  {
    title: "Built for Performance",
    description:
      "Every amplifier is load-tested at full RMS power. Class D topologies deliver efficiency above 90% without compromising signal integrity.",
  },
  {
    title: "Manufactured to Spec",
    description:
      "OEM and ODM programs tailored to your brand. Custom power ratings, cosmetics, packaging, and firmware — built to your exact requirements.",
  },
  {
    title: "Distribution Ready",
    description:
      "Wholesale and dealer pricing structures designed for the US 12V aftermarket. Full marketing support, spec sheets, and product imagery included.",
  },
];

const stats = [
  { value: "20+", label: "Years in Amplifier Manufacturing" },
  { value: "500K+", label: "Units Shipped Worldwide" },
  { value: "30+", label: "Partner Brands Served" },
  { value: "99.2%", label: "QA Pass Rate" },
];

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(circle at 75% 25%, rgba(240,68,35,0.18), transparent 50%)",
          }}
        />
        <div className="container-xl relative py-24 sm:py-32 lg:py-40">
          <div className="max-w-3xl">
            <p className="text-xs font-black uppercase tracking-[0.3em] text-signal">
              Car Amplifier Manufacturer & Exporter
            </p>
            <h1 className="mt-6 text-4xl font-black leading-[1.05] tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">
              Premium Car Amplifiers.
              <span className="block text-signal">Engineered for the American Road.</span>
            </h1>
            <p className="mt-8 max-w-xl text-lg leading-8 text-slate-400">
              OEM/ODM manufacturing, private label programs, and wholesale
              distribution for the US 12V aftermarket. From mono block subwoofer
              amps to full DSP systems — built to your brand, priced for your
              channel.
            </p>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <ButtonLink href="/products">Explore Products</ButtonLink>
              <ButtonLink href="/contact" variant="secondary">
                Request a Quote
              </ButtonLink>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="border-t border-white/5 py-24">
        <div className="container-xl">
          <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
            <SectionHeading
              eyebrow="Featured Lineup"
              title="Amplifiers that move the needle."
              description="A snapshot of our most popular platforms. Every model is available for OEM branding and custom specification."
            />
            <Link
              href="/products"
              className="shrink-0 text-sm font-black uppercase tracking-wider text-signal transition hover:text-white"
            >
              View All Products &rarr;
            </Link>
          </div>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {featuredProducts.map((product) => (
              <ProductCard key={product.name} {...product} />
            ))}
          </div>
        </div>
      </section>

      {/* Pillars */}
      <section className="border-t border-white/5 py-24">
        <div className="container-xl">
          <SectionHeading
            eyebrow="Why VoltEdge"
            title="Three reasons brands choose us."
            align="center"
          />
          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {pillars.map((pillar) => (
              <div
                key={pillar.title}
                className="rounded-3xl border border-white/10 bg-graphite/50 p-8 transition hover:border-signal/30"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-signal/10">
                  <div className="h-2 w-2 rounded-full bg-signal" />
                </div>
                <h3 className="mt-6 text-xl font-black text-white">{pillar.title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-400">
                  {pillar.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="border-t border-white/5 py-24">
        <div className="container-xl">
          <div className="grid grid-cols-2 gap-8 lg:grid-cols-4">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <p className="text-4xl font-black text-signal sm:text-5xl">
                  {stat.value}
                </p>
                <p className="mt-3 text-xs font-bold uppercase tracking-wider text-slate-500">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-white/5 py-24">
        <div className="container-xl">
          <div
            className="relative overflow-hidden rounded-[2.5rem] border border-white/10 px-8 py-16 text-center sm:px-16"
            style={{
              background:
                "linear-gradient(135deg, rgba(240,68,35,0.12), rgba(17,23,34,0.6))",
            }}
          >
            <h2 className="text-3xl font-black tracking-tight text-white sm:text-4xl">
              Ready to build your amplifier program?
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-slate-400">
              Tell us about your target market, model mix, and volume. We&apos;ll
              come back with product direction and pricing within 48 hours.
            </p>
            <div className="mt-8 flex justify-center">
              <ButtonLink href="/contact">Start the Conversation</ButtonLink>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
