import { useState } from "react";
import Navbar from "@/components/Navbar";
import HeroDesktop from "@/components/HeroDesktop";
import Terminal from "@/components/Terminal";
import About from "@/components/sections/About";
import Skills from "@/components/sections/Skills";
import Projects from "@/components/sections/Projects";
import Contact from "@/components/sections/Contact";

const Index = () => {
  const [terminalOpen, setTerminalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroDesktop onTerminalOpen={() => setTerminalOpen(true)} />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Terminal isOpen={terminalOpen} onClose={() => setTerminalOpen(false)} />
      
      {/* Footer */}
      <footer className="py-8 text-center border-t border-border">
        <p className="text-muted-foreground">
          Built with{" "}
          <span className="text-neon-cyan">React</span> &{" "}
          <span className="text-neon-purple">Tailwind CSS</span>
        </p>
        <p className="text-sm text-muted-foreground mt-2">
          © 2024 Mishti. All rights reserved.
        </p>
      </footer>
    </div>
  );
};

export default Index;
