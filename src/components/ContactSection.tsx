import { ArrowUpRight } from "lucide-react";
import SectionHeader from "./SectionHeader";
import Reveal from "./Reveal";
import { contactLinks } from "../data/portfolio";

function ContactSection() {
  const emailLink = contactLinks.find((item) => item.label === "Email");
  const otherLinks = contactLinks.filter((item) => item.label !== "Email");

  return (
    <section id="contact" className="border-t border-white/10 py-20 sm:py-28">
      <div className="shell">
        <Reveal>
          <SectionHeader
            index="03"
            eyebrow="Contact"
            title="Let’s build something useful and polished."
            description="If you’re hiring for a remote role or need a dependable developer for a product, platform, or client project, I’d love to connect."
            align="split"
          />
        </Reveal>

        {emailLink ? (
          <Reveal delay={100}>
            <a
              href={emailLink.href}
              className="group mt-12 inline-flex items-center gap-x-4 border-b border-accent/30 pb-2.5 text-ink transition hover:border-accent hover:text-accent sm:mt-14"
            >
              <span className="whitespace-nowrap font-display text-[clamp(1.15rem,5.2vw,2.25rem)] leading-tight tracking-[-0.02em]">
                {emailLink.value}
              </span>
              <ArrowUpRight
                aria-hidden="true"
                className="h-6 w-6 shrink-0 text-accent transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 sm:h-7 sm:w-7"
              />
            </a>
          </Reveal>
        ) : null}

        <Reveal delay={140}>
          <div className="mt-14 grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
            {otherLinks.map((item) => {
              const isExternal = item.href.startsWith("http");

              return (
                <a
                  key={item.label}
                  href={item.href}
                  target={isExternal ? "_blank" : undefined}
                  rel={isExternal ? "noreferrer" : undefined}
                  aria-label={`${item.label}: ${item.value}`}
                  className="group flex flex-col border border-white/10 bg-surface/60 p-5 transition duration-300 hover:border-accent/40 hover:bg-surface"
                >
                  <span className="flex items-center gap-3">
                    <span className="flex-1 truncate font-mono text-[0.58rem] uppercase tracking-[0.2em] text-faint transition group-hover:text-accent">
                      {item.label}
                    </span>

                    <ArrowUpRight
                      aria-hidden="true"
                      className="h-4 w-4 shrink-0 text-faint transition duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent"
                    />
                  </span>

                  <span className="mt-3 block truncate text-[0.9rem] text-ink" title={item.value}>
                    {item.value}
                  </span>
                </a>
              );
            })}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export default ContactSection;
