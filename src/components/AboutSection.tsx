import SectionHeader from "./SectionHeader";
import Reveal from "./Reveal";
import { profile, skillGroups, stats } from "../data/portfolio";

function AboutSection() {
  const facts = [
    { label: "Role", value: "Full stack developer" },
    { label: "Experience", value: `${stats[0]?.value ?? "4+"} years` },
    { label: "Availability", value: "Open to remote" },
    { label: "Time zone", value: "GMT+6:30" }
  ];

  return (
    <section id="about" className="py-20 sm:py-28">
      <div className="shell">
        <Reveal>
          <SectionHeader index="01" eyebrow="About" title={profile.aboutTitle} />
        </Reveal>

        <div className="mt-12 grid gap-10 lg:mt-14 lg:grid-cols-[0.34fr_1fr] lg:gap-16">
          <Reveal className="lg:sticky lg:top-28 lg:self-start">
            <p className="mono-label">Profile</p>

            <dl className="mt-5 space-y-2.5">
              {facts.map((fact) => (
                <div
                  key={fact.label}
                  className="flex items-baseline justify-between gap-4 border-b border-white/5 pb-2"
                >
                  <dt className="font-mono text-[0.6rem] uppercase tracking-[0.18em] text-faint">
                    {fact.label}
                  </dt>
                  <dd className="font-mono text-[0.65rem] uppercase tracking-[0.12em] text-ink">
                    {fact.value}
                  </dd>
                </div>
              ))}
            </dl>
          </Reveal>

          <div className="space-y-6 text-base leading-8 text-muted sm:text-lg sm:leading-9">
            {profile.aboutBody.map((paragraph, index) => (
              <Reveal key={paragraph} delay={index * 60}>
                <p className={index === 0 ? "text-ink" : undefined}>{paragraph}</p>
              </Reveal>
            ))}
          </div>
        </div>

        <div className="mt-16">
          <Reveal>
            <div className="flex items-center gap-4">
              <p className="mono-label">Stack</p>
              <span aria-hidden="true" className="h-px flex-1 bg-white/10" />
            </div>
          </Reveal>

          <div className="mt-6 grid gap-3 md:grid-cols-3">
            {skillGroups.map((group, index) => (
              <Reveal key={group.label} delay={index * 60} className="h-full">
                <div className="h-full border border-white/10 bg-surface/60 p-6 transition duration-300 hover:border-accent/30">
                  <p className="font-mono text-[0.6rem] uppercase tracking-[0.2em] text-accent">
                    {group.label}
                  </p>

                  <ul className="mt-5 flex flex-wrap gap-2">
                    {group.items.map((item) => (
                      <li
                        key={item}
                        className="border border-white/10 bg-white/[0.04] px-2.5 py-1.5 text-[0.8rem] font-medium leading-none text-ink transition duration-200 hover:border-accent/50 hover:bg-accent/5 hover:text-accent"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
