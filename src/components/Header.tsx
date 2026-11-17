import { useEffect, useState } from "react";
import { Download, Menu, X } from "lucide-react";
import { navItems, profile } from "../data/portfolio";
import { useActiveSection } from "../hooks/useInView";

const sectionIds = navItems.map((item) => item.href.replace("#", ""));

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const activeSection = useActiveSection(sectionIds);

  useEffect(() => {
    if (!isMenuOpen) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setIsMenuOpen(false);
    };

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [isMenuOpen]);

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-40 border-b border-white/10 bg-canvas/85 backdrop-blur-xl">
        <div className="shell flex h-[4.25rem] items-center justify-between gap-6">
          <a
            href="#top"
            aria-label={`${profile.name} — back to top`}
            className="group flex items-center gap-3"
          >
            <span className="flex h-9 w-9 items-center justify-center border border-accent/40 font-mono text-[0.7rem] font-medium tracking-[0.12em] text-accent transition group-hover:bg-accent group-hover:text-canvas">
              {profile.initials}
            </span>
            <span className="hidden font-mono text-[0.62rem] uppercase tracking-[0.22em] text-muted transition group-hover:text-ink sm:block">
              {profile.name}
            </span>
          </a>

          <nav aria-label="Sections" className="hidden items-center gap-8 md:flex">
            {navItems.map((item) => {
              const id = item.href.replace("#", "");
              const isActive = activeSection === id;

              return (
                <a
                  key={id}
                  href={item.href}
                  aria-current={isActive ? "true" : undefined}
                  className={`group flex items-baseline gap-2 font-mono text-[0.68rem] uppercase tracking-[0.18em] transition ${
                    isActive ? "text-ink" : "text-muted hover:text-ink"
                  }`}
                >
                  <span
                    className={
                      isActive ? "text-accent" : "text-faint transition group-hover:text-accent"
                    }
                  >
                    {item.index}
                  </span>
                  {item.label}
                </a>
              );
            })}
          </nav>

          <div className="flex items-center gap-2">
            <a
              href={profile.resumeHref}
              target="_blank"
              rel="noreferrer"
              className="hidden items-center gap-2 border border-white/15 px-4 py-2.5 font-mono text-[0.65rem] uppercase tracking-[0.18em] text-ink transition hover:border-accent/60 hover:text-accent sm:inline-flex"
            >
              <Download className="h-3.5 w-3.5" />
              Resume
            </a>

            <button
              type="button"
              aria-expanded={isMenuOpen}
              aria-controls="mobile-nav"
              aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"}
              onClick={() => setIsMenuOpen((current) => !current)}
              className="inline-flex h-10 w-10 items-center justify-center border border-white/15 text-ink transition hover:border-accent/60 hover:text-accent md:hidden"
            >
              {isMenuOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
            </button>
          </div>
        </div>
      </header>

      {isMenuOpen ? (
        <div
          id="mobile-nav"
          className="fixed inset-x-0 top-[4.25rem] bottom-0 z-30 overflow-y-auto border-t border-white/10 bg-canvas md:hidden"
        >
          <nav aria-label="Sections" className="shell flex flex-col py-4">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setIsMenuOpen(false)}
                className="flex items-baseline gap-4 border-b border-white/5 py-4"
              >
                <span className="font-mono text-[0.68rem] text-accent">{item.index}</span>
                <span className="font-display text-2xl tracking-tight text-ink">{item.label}</span>
              </a>
            ))}

            <a
              href={profile.resumeHref}
              target="_blank"
              rel="noreferrer"
              onClick={() => setIsMenuOpen(false)}
              className="mt-5 inline-flex items-center justify-center gap-2 bg-accent px-4 py-3.5 font-mono text-[0.68rem] uppercase tracking-[0.18em] text-canvas"
            >
              <Download className="h-4 w-4" />
              View resume
            </a>
          </nav>
        </div>
      ) : null}
    </>
  );
}

export default Header;
