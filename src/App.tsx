import AboutSection from "./components/AboutSection";
import ContactSection from "./components/ContactSection";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import ProjectsSection from "./components/ProjectsSection";

function App() {
  return (
    <div className="min-h-screen bg-ink text-slate-100">
      <div className="absolute inset-x-0 top-0 -z-0 h-[42rem] bg-[radial-gradient(circle_at_top_left,_rgba(255,122,89,0.28),_transparent_30%),radial-gradient(circle_at_top_right,_rgba(46,139,135,0.24),_transparent_28%),linear-gradient(180deg,_#0f172a_0%,_#111827_55%,_#f6efe7_55%,_#f6efe7_100%)]" />
      <div className="absolute left-0 top-24 -z-0 h-64 w-64 rounded-full bg-coral/10 blur-3xl" />
      <div className="absolute right-0 top-[28rem] -z-0 h-80 w-80 rounded-full bg-teal/10 blur-3xl" />
      <Header />

      <main id="top" className="relative z-10">
        <HeroSection />
        <AboutSection />
        <ProjectsSection />
        <ContactSection />
      </main>
    </div>
  );
}

export default App;
