import SectionHeading from "./SectionHeading";
import { profile, skills } from "../data/portfolio";

function AboutSection() {
  return (
    <section id="about" className="bg-sand py-24 text-ink">
      <div className="mx-auto grid w-[min(1120px,92vw)] gap-14 lg:grid-cols-[0.9fr_1.1fr]">
        <SectionHeading eyebrow="About" title={profile.aboutTitle} accent="teal" />
        <div className="space-y-6 text-lg leading-8 text-slate-700">
          {profile.aboutBody.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      </div>

      <div className="mx-auto mt-16 w-[min(1120px,92vw)]">
        <div className="rounded-[2rem] bg-white p-8 shadow-[0_24px_80px_rgba(15,23,42,0.08)]">
          <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-coral">Skills</p>
              <h3 className="mt-3 font-display text-3xl font-bold text-ink">
                Technologies I work with
              </h3>
              <p className="mt-4 text-sm leading-7 text-slate-500">
                A balanced toolkit across frontend, backend, and product delivery.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              {skills.map((skill) => (
                <span
                  key={skill}
                  className="rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-sm font-medium text-slate-700 transition hover:-translate-y-0.5 hover:border-coral/40 hover:bg-[#fff4ef]"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
