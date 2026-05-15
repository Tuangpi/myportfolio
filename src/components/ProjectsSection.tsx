import SectionHeading from "./SectionHeading";
import { projects } from "../data/portfolio";

function ProjectsSection() {
  return (
    <section id="work" className="bg-[#fffaf5] py-24 text-ink">
      <div className="mx-auto w-[min(1120px,92vw)]">
        <SectionHeading
          eyebrow="Selected Work"
          title="Projects that reflect how I build."
          description="These projects span SaaS, internal operations, and industry-specific management tools."
          align="split"
          accent="teal"
        />

        <div className="mt-12 grid gap-8 md:grid-cols-2">
          {projects.map((project, index) => (
            <a
              key={project.name}
              href={project.href}
              target="_blank"
              rel="noreferrer"
              className="group overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-[0_20px_60px_rgba(15,23,42,0.08)] transition hover:-translate-y-1 hover:shadow-[0_24px_80px_rgba(15,23,42,0.14)]"
            >
              <div className="overflow-hidden">
                <img
                  src={project.image}
                  alt={project.name}
                  className="h-64 w-full object-cover object-top transition duration-500 group-hover:scale-[1.03]"
                />
              </div>
              <div className="p-7">
                <div className="flex items-center justify-between gap-4">
                  <h3 className="font-display text-2xl font-bold">{project.name}</h3>
                  <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
                    0{index + 1}
                  </span>
                </div>
                <p className="mt-4 leading-7 text-slate-600">{project.summary}</p>
                <p className="mt-6 text-sm font-semibold uppercase tracking-[0.2em] text-coral">
                  Visit project
                </p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ProjectsSection;
