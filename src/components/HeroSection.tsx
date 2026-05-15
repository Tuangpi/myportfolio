import { ArrowRight, Download, Sparkles } from "lucide-react";
import { profile, stats } from "../data/portfolio";

function HeroSection() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,rgba(255,122,89,0.18),transparent_28%),radial-gradient(circle_at_bottom_right,rgba(45,212,191,0.16),transparent_30%)]" />
      <div className="absolute left-1/2 top-0 -z-10 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-coral/10 blur-[120px]" />

      <section className="mx-auto grid w-[min(1180px,92vw)] gap-16 pb-24 pt-10 md:grid-cols-[1.05fr_0.95fr] md:items-center md:pb-32">
        <div className="animate-rise">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 backdrop-blur-xl">
            <Sparkles className="h-4 w-4 text-coral" />
            <span className="text-xs uppercase tracking-[0.28em] text-sand/90">
              {profile.role}
            </span>
          </div>

          <h1 className="max-w-4xl font-display text-5xl font-bold leading-[1.05] text-white sm:text-6xl lg:text-7xl">
            {profile.headline}
          </h1>

          <p className="mt-7 max-w-2xl text-base leading-8 text-slate-500 sm:text-lg">
            {profile.intro}
          </p>

          <p className="mt-4 max-w-2xl text-base leading-8 text-slate-300 sm:text-lg">
            {profile.description}
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <a
              href="#contact"
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-coral px-7 py-3 text-sm font-semibold text-white shadow-[0_10px_35px_rgba(255,122,89,0.35)] transition-all duration-300 hover:-translate-y-1 hover:bg-[#ff6843]"
            >
              Let&apos;s work together
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </a>

            <a
              href={profile.resumeHref}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-white/15 bg-white/[0.03] px-7 py-3 text-sm font-semibold text-white backdrop-blur transition-all duration-300 hover:border-white/30 hover:bg-white/[0.06]"
            >
              <Download className="h-4 w-4" />
              View resume
            </a>
          </div>

          <div className="mt-16 grid gap-4 sm:grid-cols-3">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="group rounded-3xl border border-white/10 bg-white/[0.04] p-5 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-white/20 hover:bg-white/[0.06]"
              >
                <p className="font-display text-3xl font-bold text-white">
                  {stat.value}
                </p>

                <div className="mt-3 h-px w-full bg-gradient-to-r from-coral/40 to-transparent" />

                <p className="mt-3 text-sm leading-6 text-slate-300">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-xl animate-float">
          <div className="absolute -left-10 top-12 h-44 w-44 rounded-full bg-coral/25 blur-3xl" />
          <div className="absolute -bottom-10 right-0 h-52 w-52 rounded-full bg-teal/20 blur-3xl" />

          <div className="relative overflow-hidden rounded-[2.2rem] border border-white/10 bg-white/[0.05] p-4 shadow-[0_20px_80px_rgba(0,0,0,0.45)] backdrop-blur-2xl">
            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent" />

            <img
              src={profile.heroImage}
              alt={`Portrait of ${profile.name}`}
              className="h-[30rem] w-full rounded-[1.7rem] object-cover object-center"
            />

            <div className="absolute bottom-8 left-1/2 w-[88%] -translate-x-1/2 rounded-[1.6rem] border border-white/10 bg-[#0f172ad9] px-6 py-5 shadow-2xl backdrop-blur-xl">
              <p className="text-xs uppercase tracking-[0.25em] text-sand/70">
                Currently focused on
              </p>

              <p className="mt-3 font-display text-xl leading-relaxed text-white">
                Building scalable SaaS products, polished frontend experiences,
                and reliable backend systems.
              </p>
            </div>
          </div>

          <div className="absolute -left-6 top-10 hidden rounded-2xl border border-white/10 bg-[#0f172ad9] px-5 py-4 backdrop-blur-xl lg:block">
            <p className="text-xs uppercase tracking-[0.2em] text-slate-400">
              Experience
            </p>
            <p className="mt-2 font-display text-2xl text-white">5+ Years</p>
          </div>

          <div className="absolute -bottom-5 right-0 hidden rounded-2xl border border-white/10 bg-[#0f172ad9] px-5 py-4 backdrop-blur-xl lg:block">
            <p className="text-xs uppercase tracking-[0.2em] text-slate-400">
              Availability
            </p>
            <p className="mt-2 font-display text-2xl text-white">
              Open to work
            </p>
          </div>
        </div>
      </section>
    </section>
  );
}

export default HeroSection;
