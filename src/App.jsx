import { Contact } from "./components/Contact";
import { Home } from "./components/Home";
import { About } from "./components/About";
import { Projects } from "./components/Projects";
import { Routes, Route } from "react-router-dom";
import { Nav } from "./components/Nav";
import { Page404 } from "./components/Page404";

function App() {
  return (
    <div className="w-11/12 sm:w-10/12 md:w-9/12 m-auto mt-12">
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="*" element={<Page404 />} />
      </Routes>
    </div>
  );
}

export default App;
