import { useState } from "react";
import HeroDesktop from "@/components/HeroDesktop";
import Terminal from "@/components/Terminal";
import About from "@/components/sections/About";
import Skills from "@/components/sections/Skills";
import Projects from "@/components/sections/Projects";
import Contact from "@/components/sections/Contact";
import Fun from "@/components/sections/Fun";

const Index = () => {
  const [terminalOpen, setTerminalOpen] = useState(true);

  return (
    <div className="min-h-screen bg-retro-pattern">
      <HeroDesktop onTerminalOpen={() => setTerminalOpen(true)} />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Fun />
      <Terminal isOpen={terminalOpen} onClose={() => setTerminalOpen(false)} />
    </div>
  );
};

export default Index;
