import type { Metadata } from "next";
import ButtonLink from "@/components/ButtonLink";
import SectionHeading from "@/components/SectionHeading";
import ProductCard from "@/components/ProductCard";

export const metadata: Metadata = {
  title: "Products",
  description:
    "Complete car amplifier lineup: mono block, multi-channel, DSP, and competition series amplifiers for the US 12V aftermarket.",
};

const products = [
  {
    name: "VXM-1500D",
    category: "Mono Block",
    power: "1500W RMS",
    channels: "1 Channel",
    classLabel: "Class D",
    description:
      "Competition-grade mono block with integrated DSP, subsonic filter, and remote bass control.",
    specs: [
      { label: "RMS Power", value: "1500W" },
      { label: "Impedance", value: "1 Ohm" },
      { label: "Class", value: "D" },
      { label: "SNR", value: "95 dB" },
    ],
  },
  {
    name: "VXM-800D",
    category: "Mono Block",
    power: "800W RMS",
    channels: "1 Channel",
    classLabel: "Class D",
    description:
      "Compact mono block designed for single subwoofer installations. Fits behind most rear seats.",
    specs: [
      { label: "RMS Power", value: "800W" },
      { label: "Impedance", value: "1 Ohm" },
      { label: "Class", value: "D" },
      { label: "SNR", value: "92 dB" },
    ],
  },
  {
    name: "VX4-600",
    category: "4-Channel",
    power: "600W Total",
    channels: "4 Channel",
    classLabel: "Class AB",
    description:
      "Full-range Class AB amplifier for audiophile-grade sound quality. Bridgeable to 2-channel mode.",
    specs: [
      { label: "RMS Power", value: "4x150W" },
      { label: "Impedance", value: "4 Ohm" },
      { label: "Class", value: "AB" },
      { label: "THD", value: "<0.05%" },
    ],
  },
  {
    name: "VX5-800",
    category: "5-Channel",
    power: "800W Total",
    channels: "5 Channel",
    classLabel: "Class D",
    description:
      "All-in-one system amplifier — four full-range channels plus a dedicated subwoofer channel.",
    specs: [
      { label: "RMS Power", value: "4x100W + 400W" },
      { label: "Impedance", value: "2 Ohm" },
      { label: "Class", value: "D" },
      { label: "Crossover", value: "Active" },
    ],
  },
  {
    name: "VXDSP-6.8",
    category: "DSP Amplifier",
    power: "1200W Total",
    channels: "8 Channel",
    classLabel: "Class D",
    description:
      "8-channel DSP amplifier with 31-band parametric EQ, time alignment, and app-based tuning.",
    specs: [
      { label: "RMS Power", value: "8x150W" },
      { label: "DSP", value: "31-Band" },
      { label: "Class", value: "D" },
      { label: "Inputs", value: "8 CH" },
    ],
  },
  {
    name: "VXCOMP-3000",
    category: "Competition",
    power: "3000W RMS",
    channels: "1 Channel",
    classLabel: "Class D",
    description:
      "Competition series amplifier rated at 0.5 Ohm. Built for SPL competitors and extreme builds.",
    specs: [
      { label: "RMS Power", value: "3000W" },
      { label: "Impedance", value: "0.5 Ohm" },
      { label: "Class", value: "D" },
      { label: "Fuse", value: "300A" },
    ],
  },
];

export default function ProductsPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-white/5">
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(circle at 75% 25%, rgba(240,68,35,0.15), transparent 50%)",
          }}
        />
        <div className="container-xl relative py-24 sm:py-32">
          <div className="max-w-3xl">
            <p className="text-xs font-black uppercase tracking-[0.3em] text-signal">
              Product Lineup
            </p>
            <h1 className="mt-6 text-4xl font-black leading-[1.1] tracking-tight text-white sm:text-5xl md:text-6xl">
              The Complete
              <span className="block text-signal">Amplifier Lineup.</span>
            </h1>
            <p className="mt-8 max-w-xl text-lg leading-8 text-slate-400">
              From entry-level 4-channel amps to competition-grade mono blocks,
              every model is available for OEM branding, custom cosmetics, and
              private label packaging.
            </p>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-24">
        <div className="container-xl">
          <SectionHeading
            eyebrow="Full Catalog"
            title="Six platforms. Endless configurations."
            description="Every platform can be customized — power rating, color, finish, firmware, and packaging. These are our standard reference specs."
          />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {products.map((product) => (
              <ProductCard key={product.name} {...product} />
            ))}
          </div>
        </div>
      </section>

      {/* OEM Section */}
      <section className="border-t border-white/5 py-24">
        <div className="container-xl">
          <div
            className="relative overflow-hidden rounded-[2.5rem] border border-white/10 px-8 py-16 sm:px-16"
            style={{
              background:
                "linear-gradient(135deg, rgba(240,68,35,0.12), rgba(17,23,34,0.6))",
            }}
          >
            <div className="max-w-2xl">
              <SectionHeading
                eyebrow="OEM / ODM"
                title="Need a custom configuration?"
                description="We build amplifiers to your exact spec — custom power ratings, chassis design, firmware, and retail packaging. Minimum order quantities start at 500 units."
              />
              <div className="mt-8">
                <ButtonLink href="/contact">Request OEM Pricing</ButtonLink>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
