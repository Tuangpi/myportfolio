import AboutSection from "./components/AboutSection";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import ProjectsSection from "./components/ProjectsSection";
import ScrollProgress from "./components/ScrollProgress";
import StackMarquee from "./components/StackMarquee";

const columns = [0, 1, 2, 3];

function App() {
  return (
    <div id="top" className="relative min-h-screen overflow-x-clip bg-canvas">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:bg-accent focus:px-4 focus:py-2.5 focus:font-mono focus:text-[0.68rem] focus:uppercase focus:tracking-[0.18em] focus:text-canvas"
      >
        Skip to content
      </a>

      <div aria-hidden="true" className="pointer-events-none fixed inset-0 z-0 hidden lg:block">
        <div className="shell grid h-full grid-cols-4">
          {columns.map((column) => (
            <div key={column} className="border-l border-white/[0.04] last:border-r" />
          ))}
        </div>
      </div>

      <ScrollProgress />
      <Header />

      <main id="main" tabIndex={-1} className="relative z-10 outline-none">
        <HeroSection />
        <StackMarquee />
        <AboutSection />
        <ProjectsSection />
        <ContactSection />
      </main>

      <Footer />
    </div>
  );
}

export default App;
