import type { Metadata } from "next";
import ButtonLink from "@/components/ButtonLink";
import SectionHeading from "@/components/SectionHeading";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Two decades of car amplifier manufacturing expertise. OEM/ODM programs, quality assurance, and global distribution for the 12V aftermarket.",
};

const capabilities = [
  {
    title: "In-House SMT Lines",
    description:
      "Automated surface-mount PCB assembly with full traceability. Daily capacity of 8,000 boards across three production lines.",
  },
  {
    title: "Custom Aluminum Chassis",
    description:
      "CNC-machined heatsink and enclosure design. Brushed, anodized, and silk-screened finishes tailored to your brand identity.",
  },
  {
    title: "100% Load Testing",
    description:
      "Every unit undergoes full-power load testing, THD measurement, and thermal cycling before packaging. No sampling — 100% coverage.",
  },
  {
    title: "Firmware & DSP Engineering",
    description:
      "In-house DSP firmware development for custom EQ curves, crossover points, and protection algorithms. Fully customizable per brand.",
  },
  {
    title: "Packaging & Branding",
    description:
      "Retail-ready packaging design, custom manuals, barcoding, and drop-shipping support. Your brand, your box, your specs.",
  },
  {
    title: "Global Logistics",
    description:
      "FOB Shenzhen or direct FBA fulfillment. EXW, DDP, and DAP terms available. Container consolidation and LCL options.",
  },
];

const certifications = ["ISO 9001", "CE", "FCC", "RoHS", "CQC", "REACH"];

export default function AboutPage() {
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
              About VoltEdge Audio
            </p>
            <h1 className="mt-6 text-4xl font-black leading-[1.1] tracking-tight text-white sm:text-5xl md:text-6xl">
              Engineering Power.
              <span className="block text-signal">Building Trust.</span>
            </h1>
            <p className="mt-8 max-w-xl text-lg leading-8 text-slate-400">
              For over two decades, VoltEdge Audio has designed and manufactured
              car audio amplifiers for brands across the United States, Canada,
              and Latin America. What started as a small engineering shop in
              Shenzhen has grown into a full-scale OEM/ODM partner for 30+ aftermarket
              brands.
            </p>
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="py-24">
        <div className="container-xl">
          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <SectionHeading
                eyebrow="Our Story"
                title="From garage builds to global supply."
              />
              <div className="mt-6 space-y-4 text-base leading-8 text-slate-400">
                <p>
                  VoltEdge was founded in 2003 by a team of car audio enthusiasts
                  who cut their teeth building competition SPL systems. We knew
                  the US aftermarket demanded amplifiers that could handle abuse —
                  voltage drops, thermal stress, and the occasional clipped signal
                  from a head unit cranked to maximum.
                </p>
                <p>
                  That obsession with durability became our manufacturing
                  philosophy. Today, every amplifier that leaves our facility is
                  load-tested at full RMS power. Not sampled. Not spot-checked.
                  Every single unit.
                </p>
                <p>
                  We work with distributors, retailers, installers, and private
                  label brands — building amplifiers to spec, on schedule, and at
                  margins that make sense for the 12V channel.
                </p>
              </div>
            </div>
            <div className="rounded-3xl border border-white/10 bg-graphite/50 p-8">
              <p className="text-xs font-black uppercase tracking-[0.24em] text-signal">
                Manufacturing Facility
              </p>
              <div className="mt-6 space-y-5">
                {[
                  { label: "Facility Size", value: "25,000 m²" },
                  { label: "Production Lines", value: "3 SMT + 2 Assembly" },
                  { label: "Daily Capacity", value: "8,000 Units" },
                  { label: "Engineering Team", value: "45 Engineers" },
                  { label: "Location", value: "Shenzhen, China" },
                  { label: "Shipping Terms", value: "FOB / EXW / DDP / DAP" },
                ].map((item) => (
                  <div
                    key={item.label}
                    className="flex items-center justify-between border-b border-white/5 pb-4"
                  >
                    <span className="text-sm text-slate-400">{item.label}</span>
                    <span className="text-sm font-bold text-white">{item.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Capabilities */}
      <section className="border-t border-white/5 py-24">
        <div className="container-xl">
          <SectionHeading
            eyebrow="Capabilities"
            title="What we do in-house."
            description="Vertical integration means we control quality from PCB to retail box. No subcontractors, no surprises."
            align="center"
          />
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {capabilities.map((cap) => (
              <div
                key={cap.title}
                className="rounded-3xl border border-white/10 bg-graphite/50 p-7 transition hover:border-signal/30"
              >
                <h3 className="text-lg font-black text-white">{cap.title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-400">
                  {cap.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quality + Certifications */}
      <section className="border-t border-white/5 py-24">
        <div className="container-xl">
          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <SectionHeading
                eyebrow="Quality Assurance"
                title="100% tested. No exceptions."
              />
              <div className="mt-6 space-y-4 text-base leading-8 text-slate-400">
                <p>
                  Our QA process is non-negotiable. Every amplifier passes through
                  four stages: PCB AOI inspection, bench testing at rated power,
                  thermal cycling from -20&deg;C to 80&deg;C, and final cosmetic
                  check before packaging.
                </p>
                <p>
                  We maintain a 99.2% first-pass yield rate. The 0.8% that
                  doesn&apos;t pass never reaches a customer — they&apos;re
                  reworked or scrapped on the line.
                </p>
              </div>
            </div>
            <div className="rounded-3xl border border-white/10 bg-graphite/50 p-8">
              <p className="text-xs font-black uppercase tracking-[0.24em] text-signal">
                Certifications & Compliance
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                {certifications.map((cert) => (
                  <span
                    key={cert}
                    className="rounded-xl border border-white/10 bg-black/30 px-5 py-3 text-sm font-black text-white"
                  >
                    {cert}
                  </span>
                ))}
              </div>
              <p className="mt-6 text-sm leading-7 text-slate-400">
                All products comply with US FCC Part 15 Class B emissions
                standards. Documentation and test reports available for customs
                clearance and retailer compliance programs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-white/5 py-24">
        <div className="container-xl text-center">
          <h2 className="text-3xl font-black tracking-tight text-white sm:text-4xl">
            Want to see the factory?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-slate-400">
            We welcome partner visits and offer virtual facility tours. Reach out
            to schedule a walkthrough.
          </p>
          <div className="mt-8 flex justify-center">
            <ButtonLink href="/contact">Contact Our Team</ButtonLink>
          </div>
        </div>
      </section>
    </>
  );
}
