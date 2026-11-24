import { useState } from "react";
import { ArrowUpRight } from "lucide-react";
import SectionHeader from "./SectionHeader";
import Reveal from "./Reveal";
import { projects } from "../data/portfolio";

function ProjectsSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeProject = projects[activeIndex] ?? projects[0];

  return (
    <section id="work" className="border-t border-line py-20 sm:py-28">
      <div className="shell">
        <Reveal>
          <SectionHeader
            index="02"
            eyebrow="Selected work"
            title="Projects that reflect how I build."
            description="A selection of production systems shipped for streaming, education, beauty, and healthcare clients."
            align="split"
          />
        </Reveal>

        <div className="mt-12 grid gap-12 lg:mt-16 lg:grid-cols-[1fr_0.8fr] lg:items-start lg:gap-14">
          <ul className="border-t border-line">
            {projects.map((project, index) => {
              const isActive = index === activeIndex;

              return (
                <li key={project.name} className="border-b border-line">
                  <a
                    href={project.href}
                    target="_blank"
                    rel="noreferrer"
                    onMouseEnter={() => setActiveIndex(index)}
                    onFocus={() => setActiveIndex(index)}
                    className="group block rounded-xl py-7 transition sm:py-8"
                  >
                    <div className="flex items-start justify-between gap-6">
                      <div className="flex items-baseline gap-4 sm:gap-5">
                        <span
                          className={`font-mono text-[0.68rem] transition ${
                            isActive ? "text-accent" : "text-faint"
                          }`}
                        >
                          {String(index + 1).padStart(2, "0")}
                        </span>

                        <h3
                          className={`font-display text-2xl tracking-tight transition sm:text-3xl ${
                            isActive ? "text-accent" : "text-ink"
                          }`}
                        >
                          {project.name}
                        </h3>
                      </div>

                      <ArrowUpRight
                        aria-hidden="true"
                        className={`h-5 w-5 shrink-0 transition ${
                          isActive
                            ? "-translate-y-0.5 translate-x-0.5 text-accent"
                            : "text-faint"
                        }`}
                      />
                    </div>

                    <p className="mt-3 max-w-2xl text-sm leading-7 text-muted sm:pl-[2.55rem] sm:text-base">
                      {project.summary}
                    </p>

                      <div className="mt-5 overflow-hidden rounded-xl border border-line bg-surface p-1.5 shadow-sm lg:hidden">
                      <img
                        src={project.image}
                        alt={`${project.name} interface preview`}
                        width={1366}
                        height={649}
                        loading="lazy"
                        className="aspect-[16/9] w-full object-cover object-top"
                      />
                    </div>
                  </a>
                </li>
              );
            })}
          </ul>

          <div className="hidden lg:sticky lg:top-28 lg:block">
            <div className="card p-2.5">
              <div className="relative aspect-[16/10] w-full overflow-hidden rounded-xl bg-slate-100">
                {projects.map((project, index) => (
                  <img
                    key={project.name}
                    src={project.image}
                    alt={index === activeIndex ? `${project.name} interface preview` : ""}
                    width={1366}
                    height={649}
                    loading="lazy"
                    aria-hidden={index === activeIndex ? undefined : "true"}
                    className={`absolute inset-0 h-full w-full object-cover object-top transition-opacity duration-500 ${
                      index === activeIndex ? "opacity-100" : "opacity-0"
                    }`}
                  />
                ))}
              </div>

              <div className="flex items-center justify-between gap-4 px-1.5 py-2.5 font-mono text-[0.58rem] uppercase tracking-[0.18em] text-faint">
                <span>{activeProject?.name}</span>
                <span className="text-accent">
                  {String(activeIndex + 1).padStart(2, "0")} /{" "}
                  {String(projects.length).padStart(2, "0")}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ProjectsSection;
