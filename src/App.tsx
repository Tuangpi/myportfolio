import heroImage from "./assets/hero1.jpg";
import projectVakul from "./assets/img1.png";
import projectSchool from "./assets/img3.png";
import projectGlampro from "./assets/img4.png";
import projectKenpetmed from "./assets/img5.png";

const skills = [
  "PHP",
  "JavaScript",
  "TypeScript",
  "Vue",
  "React",
  "Node.js",
  "Laravel",
  "Tailwind CSS",
  "MySQL",
  "API Development",
  "GitHub",
  "Remote Collaboration"
];

const projects = [
  {
    name: "Vakul Project",
    href: "https://vakul.tv",
    image: projectVakul,
    summary:
      "Streaming-focused product work with a polished public experience and production-minded delivery."
  },
  {
    name: "ThaPyayNyo",
    href: "https://sms.tpn.edu.mm",
    image: projectSchool,
    summary:
      "Private school management platform built to support structured day-to-day operations."
  },
  {
    name: "Glampro",
    href: "https://cms.browsecretsbeauty.com/",
    image: projectGlampro,
    summary:
      "Salon management system with admin workflows for service, staff, and business coordination."
  },
  {
    name: "Kenpetmed",
    href: "https://cms.kenpetmed.com",
    image: projectKenpetmed,
    summary:
      "Clinic management platform focused on practical internal tools and reliable process support."
  }
];

const contactLinks = [
  {
    label: "Email",
    value: "singkhantuang97@gmail.com",
    href: "mailto:singkhantuang97@gmail.com"
  },
  {
    label: "Phone",
    value: "+95 9265 826 622",
    href: "tel:+959265826622"
  },
  {
    label: "GitHub",
    value: "github.com/Tuangpi",
    href: "https://github.com/Tuangpi"
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/singkhantuang",
    href: "https://www.linkedin.com/in/singkhantuang/"
  },
  {
    label: "Facebook",
    value: "facebook.com/y2keo",
    href: "https://www.facebook.com/y2keo"
  }
];

function App() {
  return (
    <div className="min-h-screen bg-ink text-slate-100">
      <div className="absolute inset-x-0 top-0 -z-0 h-[42rem] bg-[radial-gradient(circle_at_top_left,_rgba(255,122,89,0.28),_transparent_30%),radial-gradient(circle_at_top_right,_rgba(46,139,135,0.24),_transparent_28%),linear-gradient(180deg,_#0f172a_0%,_#111827_55%,_#f6efe7_55%,_#f6efe7_100%)]" />
      <header className="relative z-10 mx-auto flex w-[min(1120px,92vw)] items-center justify-between py-6">
        <a href="#top" className="font-display text-lg font-bold tracking-[0.24em] text-sand">
          STK
        </a>
        <nav className="hidden gap-6 text-sm text-slate-300 md:flex">
          <a href="#about" className="transition hover:text-white">About</a>
          <a href="#work" className="transition hover:text-white">Work</a>
          <a href="#contact" className="transition hover:text-white">Contact</a>
        </nav>
      </header>

      <main id="top" className="relative z-10">
        <section className="mx-auto grid w-[min(1120px,92vw)] gap-14 pb-24 pt-8 md:grid-cols-[1.15fr_0.85fr] md:items-center md:pb-32">
          <div className="animate-rise">
            <p className="mb-5 inline-flex rounded-full border border-white/15 bg-white/10 px-4 py-2 text-xs uppercase tracking-[0.3em] text-sand/90 backdrop-blur">
              Full Stack Web Developer
            </p>
            <h1 className="max-w-3xl font-display text-5xl font-bold leading-tight text-white sm:text-6xl">
              Building thoughtful web products with clean systems and modern UX.
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-8 text-slate-300 sm:text-lg">
              I’m Sing Khan Tuang, a full stack developer with 4+ years of remote
              experience building high-quality web and SaaS applications. I work
              across PHP, JavaScript, TypeScript, Vue, Node.js, and API-driven systems.
            </p>
            <p className="mt-4 max-w-2xl text-base leading-8 text-slate-300 sm:text-lg">
              I focus on maintainable code, async collaboration, and shipping
              products that feel professional from the inside out.
            </p>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <a
                href="#contact"
                className="inline-flex items-center justify-center rounded-full bg-coral px-7 py-3 text-sm font-semibold text-white shadow-glow transition hover:-translate-y-0.5 hover:bg-[#ff6843]"
              >
                Let&apos;s work together
              </a>
              <a
                href="https://drive.google.com/file/d/14st8frIsxEiKrh1u6qgh9l765jcKZ2CN/view?usp=sharing"
                className="inline-flex items-center justify-center rounded-full border border-white/20 px-7 py-3 text-sm font-semibold text-white transition hover:border-white/40 hover:bg-white/5"
              >
                View resume
              </a>
            </div>
            <div className="mt-14 grid gap-4 sm:grid-cols-3">
              <div className="rounded-3xl border border-white/10 bg-white/5 p-5 backdrop-blur">
                <p className="font-display text-3xl font-bold text-white">4+</p>
                <p className="mt-2 text-sm text-slate-300">Years building web products remotely</p>
              </div>
              <div className="rounded-3xl border border-white/10 bg-white/5 p-5 backdrop-blur">
                <p className="font-display text-3xl font-bold text-white">Full stack</p>
                <p className="mt-2 text-sm text-slate-300">Frontend, backend, CMS, and SaaS delivery</p>
              </div>
              <div className="rounded-3xl border border-white/10 bg-white/5 p-5 backdrop-blur">
                <p className="font-display text-3xl font-bold text-white">Remote-first</p>
                <p className="mt-2 text-sm text-slate-300">Strong async communication across teams</p>
              </div>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-md animate-float">
            <div className="absolute -inset-6 rounded-[2rem] bg-gradient-to-br from-coral/40 via-white/10 to-teal/30 blur-2xl" />
            <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/10 p-4 shadow-glow backdrop-blur">
              <img
                src={heroImage}
                alt="Portrait of Sing Khan Tuang"
                className="h-[28rem] w-full rounded-[1.5rem] object-cover object-center"
              />
            </div>
          </div>
        </section>

        <section id="about" className="bg-sand py-24 text-ink">
          <div className="mx-auto grid w-[min(1120px,92vw)] gap-14 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-teal">About</p>
              <h2 className="mt-4 font-display text-4xl font-bold">A practical builder with product mindset.</h2>
            </div>
            <div className="space-y-6 text-lg leading-8 text-slate-700">
              <p>
                I build maintainable web applications for teams that care about
                reliability, clarity, and forward momentum. My background includes
                PHP, JavaScript, TypeScript, Vue, Node.js, API development, and
                production support across remote environments.
              </p>
              <p>
                I enjoy creating solid foundations, learning fast, and improving
                systems over time. Right now I’m continuing to grow in software
                architecture, scalable design, and AI integration.
              </p>
              <p>
                I’m especially interested in fully remote opportunities with
                innovative startups and product-focused companies.
              </p>
            </div>
          </div>

          <div className="mx-auto mt-16 w-[min(1120px,92vw)]">
            <div className="rounded-[2rem] bg-white p-8 shadow-[0_24px_80px_rgba(15,23,42,0.08)]">
              <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.3em] text-coral">Skills</p>
                  <h3 className="mt-3 font-display text-3xl font-bold text-ink">Technologies I work with</h3>
                </div>
                <p className="max-w-xl text-sm leading-7 text-slate-500">
                  A mix of backend, frontend, and delivery tools I’ve used to ship real projects.
                </p>
              </div>
              <div className="mt-8 flex flex-wrap gap-3">
                {skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-sm font-medium text-slate-700"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="work" className="bg-[#fffaf5] py-24 text-ink">
          <div className="mx-auto w-[min(1120px,92vw)]">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.3em] text-teal">Selected Work</p>
                <h2 className="mt-4 font-display text-4xl font-bold">Projects that reflect how I build.</h2>
              </div>
              <p className="max-w-xl text-base leading-7 text-slate-600">
                These projects span SaaS, internal operations, and industry-specific management tools.
              </p>
            </div>

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

        <section id="contact" className="bg-ink py-24 text-white">
          <div className="mx-auto grid w-[min(1120px,92vw)] gap-10 rounded-[2rem] border border-white/10 bg-white/5 p-8 backdrop-blur md:grid-cols-[0.9fr_1.1fr] md:p-12">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-sand">Contact</p>
              <h2 className="mt-4 font-display text-4xl font-bold">Let’s build something useful and polished.</h2>
              <p className="mt-6 max-w-xl text-base leading-8 text-slate-300">
                If you’re hiring for a remote role or need a dependable developer
                for a product, platform, or client project, I’d love to connect.
              </p>
            </div>
            <div className="grid gap-4">
              {contactLinks.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  target={item.href.startsWith("http") ? "_blank" : undefined}
                  rel={item.href.startsWith("http") ? "noreferrer" : undefined}
                  className="flex items-center justify-between gap-4 rounded-2xl border border-white/10 bg-white/5 px-5 py-4 transition hover:border-coral/50 hover:bg-white/10"
                >
                  <span className="text-sm uppercase tracking-[0.2em] text-slate-400">{item.label}</span>
                  <span className="text-right text-sm font-medium text-white sm:text-base">{item.value}</span>
                </a>
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
