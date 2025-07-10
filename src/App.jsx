import "./App.css";

import HeroSection from "./Components/HeroSection";
import Navbar from "./Components/Navbar";
import About from "./Components/About";
import Skills from "./Components/Skills";
import Projects from "./Components/Projects";
import CreativeAnimatedCursor from "./Components/CreativeAnimatedCursor";
import Contact from "./Components/Contact";
import Learning from "./Components/Learning";

import { Download } from "lucide-react";
function App() {
  return (
    <section className="text-white realtive">
      <a
        href="https://drive.google.com/file/d/1CjZMTsTt64MAQDlzMwOr4hLAgc1FicD1/view?usp=sharing" target="_blank"
        className="fixed bottom-10 gap-2 px-6 py-2 rounded-lg right-10 z-50 flex bg-indigo-700 text-white animate-bounce"
      >
        <Download className="w-5 h-5" />
        Resume
      </a>

      <CreativeAnimatedCursor />
      <Navbar />
      <HeroSection />
      <About />
      <Skills />
      <Learning />
      <Projects />
      <Contact />
    </section>
  );
}

export default App;
