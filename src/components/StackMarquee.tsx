import { skills } from "../data/portfolio";

function StackMarquee() {
  return (
    <section
      aria-label="Technologies I work with"
      className="relative mt-16 overflow-hidden border-y border-line py-4 sm:mt-20"
    >
      <div className="flex w-max animate-marquee hover:[animation-play-state:paused]">
        {[0, 1].map((copy) => (
          <div
            key={copy}
            aria-hidden={copy === 1 ? "true" : undefined}
            className="flex shrink-0 items-center"
          >
            {skills.map((skill) => (
              <span
                key={`${copy}-${skill}`}
                className="flex items-center whitespace-nowrap px-5 font-mono text-[0.62rem] uppercase tracking-[0.24em] text-muted"
              >
                {skill}
                <span aria-hidden="true" className="pl-5 text-accent/40">
                  /
                </span>
              </span>
            ))}
          </div>
        ))}
      </div>

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-canvas to-transparent"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-canvas to-transparent"
      />
    </section>
  );
}

export default StackMarquee;
