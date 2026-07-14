import type { Metadata } from "next";
import SectionHeading from "@/components/SectionHeading";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Start your amplifier program. Contact VoltEdge Audio for OEM/ODM, private label, and wholesale inquiries.",
};

export default function ContactPage() {
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
              Get in Touch
            </p>
            <h1 className="mt-6 text-4xl font-black leading-[1.1] tracking-tight text-white sm:text-5xl md:text-6xl">
              Start Your
              <span className="block text-signal">Amplifier Program.</span>
            </h1>
            <p className="mt-8 max-w-xl text-lg leading-8 text-slate-400">
              Share your target market, channel, model mix, and volume plan. Our
              team will reply within 48 hours with product direction and quotation
              details.
            </p>
          </div>
        </div>
      </section>

      {/* Form + Info */}
      <section className="py-24">
        <div className="container-xl">
          <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <SectionHeading
                eyebrow="Sales Desk"
                title="Talk to our team."
                description="Whether you're a distributor, retailer, installer, or private label brand — we have a program that fits."
              />
              <div className="mt-10 rounded-3xl border border-white/10 bg-graphite/50 p-7">
                <div className="space-y-5">
                  <div>
                    <p className="text-xs font-black uppercase tracking-[0.24em] text-signal">
                      Email
                    </p>
                    <p className="mt-2 text-sm text-slate-300">
                      sales@voltedge-audio.com
                    </p>
                  </div>
                  <div>
                    <p className="text-xs font-black uppercase tracking-[0.24em] text-signal">
                      Markets
                    </p>
                    <p className="mt-2 text-sm text-slate-300">
                      United States, Canada, Mexico, Latin America
                    </p>
                  </div>
                  <div>
                    <p className="text-xs font-black uppercase tracking-[0.24em] text-signal">
                      Programs
                    </p>
                    <p className="mt-2 text-sm text-slate-300">
                      Wholesale, OEM / ODM, Private Label, Dealer Network
                    </p>
                  </div>
                  <div>
                    <p className="text-xs font-black uppercase tracking-[0.24em] text-signal">
                      Response Time
                    </p>
                    <p className="mt-2 text-sm text-slate-300">
                      Within 48 hours, Monday through Friday
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <ContactForm />
          </div>
        </div>
      </section>
    </>
  );
}
