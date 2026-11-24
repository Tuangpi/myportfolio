import { useEffect, useState } from "react";
import { profile } from "../data/portfolio";

const timeFormatter = new Intl.DateTimeFormat("en-GB", {
  timeZone: profile.timeZone,
  hour: "2-digit",
  minute: "2-digit",
  hour12: false
});

function Footer() {
  const [time, setTime] = useState(() => timeFormatter.format(new Date()));

  useEffect(() => {
    const interval = window.setInterval(() => {
      setTime(timeFormatter.format(new Date()));
    }, 30_000);

    return () => window.clearInterval(interval);
  }, []);

  return (
    <footer className="relative z-10 border-t border-line py-9">
      <div className="shell flex flex-col gap-4 font-mono text-[0.6rem] uppercase tracking-[0.18em] text-faint sm:flex-row sm:flex-wrap sm:items-center sm:justify-between sm:gap-6">
        <p>
          © {new Date().getFullYear()} {profile.name}
        </p>

        <p className="flex items-center gap-2">
          <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-accent" />
          {time} · Yangon
        </p>

        <p>React · TypeScript · Tailwind</p>

        <a href="#top" className="text-muted transition hover:text-accent">
          Back to top ↑
        </a>
      </div>
    </footer>
  );
}

export default Footer;
