import { useState } from "react";
import { profile } from "../data/portfolio";

const navItems = [
  { label: "About", href: "#about" },
  { label: "Work", href: "#work" },
  { label: "Contact", href: "#contact" }
];

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleNavClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="relative z-20 mx-auto w-[min(1120px,92vw)] py-5 sm:py-6">
      <div className="flex items-center justify-between rounded-full border border-white/10 bg-white/5 px-4 py-3 backdrop-blur md:border-0 md:bg-transparent md:px-0 md:py-0 md:backdrop-blur-0">
        <a href="#top" className="font-display text-lg font-bold tracking-[0.24em] text-sand">
          {profile.initials}
        </a>

        <button
          type="button"
          aria-expanded={isMenuOpen}
          aria-label="Toggle navigation menu"
          className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-sand transition hover:bg-white/10 md:hidden"
          onClick={() => setIsMenuOpen((current) => !current)}
        >
          <span className="sr-only">Menu</span>
          <div className="flex flex-col gap-1.5">
            <span
              className={`h-0.5 w-5 rounded-full bg-current transition ${
                isMenuOpen ? "translate-y-2 rotate-45" : ""
              }`}
            />
            <span
              className={`h-0.5 w-5 rounded-full bg-current transition ${
                isMenuOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`h-0.5 w-5 rounded-full bg-current transition ${
                isMenuOpen ? "-translate-y-2 -rotate-45" : ""
              }`}
            />
          </div>
        </button>

        <nav className="hidden gap-6 text-sm text-slate-300 md:flex">
          {navItems.map((item) => (
            <a key={item.label} href={item.href} className="transition hover:text-white">
              {item.label}
            </a>
          ))}
        </nav>
      </div>

      {isMenuOpen ? (
        <nav className="mt-3 grid gap-2 rounded-[1.5rem] border border-white/10 bg-ink/95 p-3 text-sm text-white shadow-glow backdrop-blur md:hidden">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="rounded-2xl px-4 py-3 transition hover:bg-white/10"
              onClick={handleNavClick}
            >
              {item.label}
            </a>
          ))}
          <a
            href={profile.resumeHref}
            target="_blank"
            rel="noreferrer"
            className="rounded-2xl border border-coral/40 bg-coral px-4 py-3 text-center font-semibold text-white transition hover:bg-[#ff6843]"
            onClick={handleNavClick}
          >
            View resume
          </a>
        </nav>
      ) : null}
    </header>
  );
}

export default Header;
