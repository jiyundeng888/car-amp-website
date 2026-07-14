import ContactForm from '@/components/ContactForm';
import SectionHeading from '@/components/SectionHeading';

export default function ContactPage() {
  return (
    <section className="container-xl py-24">
      <div className="grid gap-12 lg:grid-cols-[.9fr_1.1fr]">
        <div>
          <SectionHeading
            eyebrow="Contact"
            title="Tell us about your amplifier program."
            description="Share your target market, channel, model mix, and volume plan. Our team will reply with product direction and quotation details."
          />
          <div className="mt-10 rounded-[1.8rem] border border-white/10 bg-white/[0.04] p-7">
            <p className="text-sm font-black uppercase tracking-[0.24em] text-signal">Sales Desk</p>
            <div className="mt-5 space-y-3 text-sm leading-7 text-slate-400">
              <p>Email: sales@voltedge-audio.com</p>
              <p>Markets: United States, Canada, Latin America</p>
              <p>Programs: Wholesale, OEM / ODM, Private Label</p>
            </div>
          </div>
        </div>

        <ContactForm />
      </div>
    </section>
  );
}
