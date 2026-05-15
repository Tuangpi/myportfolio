import SectionHeading from "./SectionHeading";
import { contactLinks } from "../data/portfolio";

function ContactSection() {
  return (
    <section id="contact" className="bg-ink py-24 text-white">
      <div className="mx-auto grid w-[min(1120px,92vw)] gap-8 rounded-[2rem] border border-white/10 bg-white/5 p-6 backdrop-blur md:grid-cols-[0.9fr_1.1fr] md:gap-10 md:p-12">
        <div>
          <SectionHeading
            eyebrow="Contact"
            title="Let’s build something useful and polished."
            description="If you’re hiring for a remote role or need a dependable developer for a product, platform, or client project, I’d love to connect."
            accent="sand"
            dark
          />
        </div>
        <div className="grid gap-4">
          {contactLinks.map((item) => (
            <a
              key={item.label}
              href={item.href}
              target={item.href.startsWith("http") ? "_blank" : undefined}
              rel={item.href.startsWith("http") ? "noreferrer" : undefined}
              className="flex flex-col items-start gap-2 rounded-2xl border border-white/10 bg-white/5 px-4 py-4 transition hover:border-coral/50 hover:bg-white/10 sm:flex-row sm:items-center sm:justify-between sm:gap-4 sm:px-5"
            >
              <span className="text-sm uppercase tracking-[0.2em] text-slate-400">{item.label}</span>
              <span className="text-left text-sm font-medium text-white sm:text-right sm:text-base">
                {item.value}
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ContactSection;
