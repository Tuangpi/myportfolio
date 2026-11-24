import AboutSection from "./components/AboutSection";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import ProjectsSection from "./components/ProjectsSection";
import ScrollProgress from "./components/ScrollProgress";
import StackMarquee from "./components/StackMarquee";

function App() {
  return (
    <div id="top" className="relative min-h-screen overflow-x-clip bg-canvas">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-lg focus:bg-accent focus:px-4 focus:py-2.5 focus:font-mono focus:text-[0.68rem] focus:uppercase focus:tracking-[0.18em] focus:text-white"
      >
        Skip to content
      </a>

      <div aria-hidden="true" className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
        <div className="absolute -left-32 top-16 h-80 w-80 rounded-full bg-blue-100/60 blur-3xl" />
        <div className="absolute -right-24 top-[32rem] h-96 w-96 rounded-full bg-sky-100/50 blur-3xl" />
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
