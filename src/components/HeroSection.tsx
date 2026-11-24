import { ArrowUpRight, Download } from "lucide-react";
import { profile, stats } from "../data/portfolio";
import Reveal from "./Reveal";

function HeroSection() {
  return (
    <section className="pt-28 sm:pt-32 lg:pt-36">
      <div className="shell">
        <Reveal>
          <p className="flex flex-wrap items-center gap-3 font-mono text-eyebrow uppercase text-muted">
            <span aria-hidden="true" className="relative flex h-1.5 w-1.5">
              <span className="absolute inline-flex h-full w-full animate-pulse-soft rounded-full bg-accent" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-accent" />
            </span>
            <span className="text-ink">{profile.role}</span>
            <span aria-hidden="true" className="hidden h-px w-6 bg-line sm:block" />
            <span className="text-faint">Available for remote work</span>
          </p>
        </Reveal>

        <Reveal delay={80}>
          <h1 className="mt-8 max-w-5xl font-display text-display-1 text-ink">
            {profile.headline}
          </h1>
        </Reveal>

        <div className="mt-12 grid gap-12 lg:mt-16 lg:grid-cols-[1fr_0.58fr] lg:items-start lg:gap-16">
          <div className="flex flex-col gap-9">
            <div>
              <Reveal delay={140}>
                <p className="max-w-2xl text-base leading-8 text-muted sm:text-lg sm:leading-9">
                  {profile.intro}
                </p>
                <p className="mt-4 max-w-2xl text-sm leading-7 text-muted sm:text-base sm:leading-8">
                  {profile.description}
                </p>
              </Reveal>
            </div>

            <Reveal delay={200}>
              <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
                <a
                  href="#contact"
                  className="group inline-flex items-center justify-center gap-2 rounded-lg bg-accent px-6 py-3.5 font-mono text-[0.68rem] uppercase tracking-[0.18em] text-white shadow-sm transition hover:bg-blue-700 hover:shadow-md"
                >
                  Let&apos;s work together
                  <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </a>

                <a
                  href={profile.resumeHref}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-lg border border-line bg-surface px-6 py-3.5 font-mono text-[0.68rem] uppercase tracking-[0.18em] text-ink shadow-sm transition hover:border-accent/50 hover:text-accent"
                >
                  <Download className="h-4 w-4" />
                  View resume
                </a>
              </div>
            </Reveal>
          </div>

          <Reveal delay={160} className="w-full">
            <div className="relative">
              <div className="group card relative p-2.5">
                <div className="overflow-hidden rounded-xl">
                  <img
                    src={profile.heroImage}
                    alt={`${profile.name} working at his desk in a bright office`}
                    width={1254}
                    height={1254}
                    loading="eager"
                    fetchPriority="high"
                    className="aspect-square w-full object-cover object-center transition duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.03]"
                  />
                </div>

                <div className="mt-2 flex items-center justify-between gap-3 px-1 pt-1 font-mono text-[0.55rem] uppercase tracking-[0.18em] text-faint">
                  <span>{profile.name}</span>
                  <span className="text-accent">Open to work</span>
                </div>
              </div>

              <span
                aria-hidden="true"
                className="absolute -left-2 -top-2 h-5 w-5 rounded-tl-lg border-l-2 border-t-2 border-accent/70"
              />
              <span
                aria-hidden="true"
                className="absolute -bottom-2 -right-2 h-5 w-5 rounded-br-lg border-b-2 border-r-2 border-accent/70"
              />
            </div>
          </Reveal>
        </div>

        <Reveal delay={120}>
          <dl className="mt-16 grid gap-3 sm:grid-cols-3">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="group flex flex-col rounded-2xl border border-line bg-surface p-5 shadow-[0_8px_24px_rgba(15,23,42,0.04)] transition duration-300 hover:-translate-y-1 hover:border-accent/35 hover:shadow-[0_12px_28px_rgba(15,23,42,0.08)] sm:p-6"
              >
                <dt className="order-2 mt-4 font-mono text-[0.62rem] uppercase leading-5 tracking-[0.16em] text-muted">
                  {stat.label}
                </dt>

                <dd className="order-1 font-display text-display-3 text-ink">{stat.value}</dd>
              </div>
            ))}
          </dl>
        </Reveal>
      </div>
    </section>
  );
}

export default HeroSection;
