import DesktopIcon from "./DesktopIcon";
import aboutIcon from "@/assets/icons/about-icon.png";
import skillsIcon from "@/assets/icons/skills-icon.png";
import projectsIcon from "@/assets/icons/projects-icon.png";
import contactIcon from "@/assets/icons/contact-icon.png";
import resumeIcon from "@/assets/icons/resume-icon.png";
import funIcon from "@/assets/icons/fun-icon.png";
import terminalIcon from "@/assets/icons/terminal-icon.png";

interface HeroDesktopProps {
  onTerminalOpen: () => void;
}

const HeroDesktop = ({ onTerminalOpen }: HeroDesktopProps) => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const desktopIcons = [
    { icon: aboutIcon, label: "ABOUT", action: () => scrollToSection("about") },
    { icon: skillsIcon, label: "SKILLS", action: () => scrollToSection("skills") },
    { icon: projectsIcon, label: "PROJECTS", action: () => scrollToSection("projects") },
    { icon: contactIcon, label: "CONTACT", action: () => scrollToSection("contact") },
    { icon: resumeIcon, label: "RESUME", action: () => window.open("#", "_blank") },
    { icon: funIcon, label: "FUN", action: () => scrollToSection("fun") },
    { icon: terminalIcon, label: "TERMINAL", action: onTerminalOpen },
  ];

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
      style={{
        background: "var(--gradient-hero)",
      }}
    >
      {/* Animated background glow */}
      <div
        className="absolute inset-0 opacity-30"
        style={{
          background: "var(--gradient-glow)",
        }}
      />
      
      {/* Floating particles effect */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-neon-cyan rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${5 + Math.random() * 10}s`,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-12 animate-slide-up">
          <h1 className="text-3xl md:text-5xl font-pixel text-neon-cyan mb-4 glow-cyan">
            WELCOME
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground">
            Click an icon to navigate
          </p>
        </div>

        <div className="grid grid-cols-3 md:grid-cols-4 gap-6 md:gap-8 max-w-4xl mx-auto">
          {desktopIcons.map((item, index) => (
            <DesktopIcon
              key={index}
              icon={item.icon}
              label={item.label}
              onClick={item.action}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroDesktop;
