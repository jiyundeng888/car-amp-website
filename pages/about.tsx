import SectionHeading from '@/components/SectionHeading';

const values = [
  ['Installer-first design', 'Terminal layout, controls, mounting points, and protection behavior are planned around real shop workflow.'],
  ['U.S. market tone', 'Product naming, packaging hierarchy, and feature messaging are shaped for American car audio buyers.'],
  ['Export discipline', 'We align production, inspection, carton labeling, and documentation for predictable wholesale shipments.'],
];

export default function AboutPage() {
  return (
    <>
      <section className="container-xl py-24">
        <div className="grid gap-12 lg:grid-cols-[.9fr_1.1fr]">
          <SectionHeading
            eyebrow="About Us"
            title="We build amplifier platforms for brands that live in the 12V aisle."
            description="VoltEdge Audio is a mobile audio amplifier supplier focused on U.S. distributors, private-label brands, and installation-channel product programs."
          />
          <div className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-8 shadow-panel">
            <p className="text-lg leading-9 text-slate-300">
              Our team combines amplifier platform development, export manufacturing coordination, and aftermarket brand awareness. The result is a product experience that feels confident on the shelf, clear in the spec sheet, and dependable in the install bay.
            </p>
            <div className="mt-8 grid grid-cols-2 gap-4">
              <div className="rounded-2xl bg-black/40 p-6">
                <p className="text-3xl font-black text-white">Class D</p>
                <p className="mt-2 text-sm text-slate-500">efficient power platforms</p>
              </div>
              <div className="rounded-2xl bg-black/40 p-6">
                <p className="text-3xl font-black text-white">B2B</p>
                <p className="mt-2 text-sm text-slate-500">dealer-ready supply</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-white/10 bg-white/[0.03] py-20">
        <div className="container-xl">
          <SectionHeading
            eyebrow="Our Difference"
            title="Clean engineering language, aggressive power identity, and stable supply execution."
          />
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {values.map(([title, body]) => (
              <div key={title} className="rounded-[1.8rem] border border-white/10 bg-black/30 p-7">
                <h3 className="text-xl font-black tracking-[-0.03em] text-white">{title}</h3>
                <p className="mt-4 text-sm leading-7 text-slate-400">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="container-xl py-24">
        <div className="rounded-[2.5rem] border border-white/10 bg-radial-signal p-8 md:p-12">
          <p className="text-sm font-black uppercase tracking-[0.28em] text-signal">Manufacturing Mindset</p>
          <h2 className="mt-4 max-w-4xl text-3xl font-black tracking-[-0.05em] text-white md:text-5xl">
            Every model is planned to support repeat orders, consistent dealer messaging, and confident installation.
          </h2>
        </div>
      </section>
    </>
  );
}
