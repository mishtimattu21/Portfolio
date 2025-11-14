import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import aboutIcon from "@/assets/icons/about-icon.png";
import skillsIcon from "@/assets/icons/skills-icon.png";
import projectsIcon from "@/assets/icons/projects-icon.png";
import contactIcon from "@/assets/icons/contact-icon.png";
import resumeIcon from "@/assets/icons/resume-icon.png";
import funIcon from "@/assets/icons/fun-icon.png";
import terminalIcon from "@/assets/icons/terminal-icon.png";
import aiIcon from "@/assets/icons/ai-icon.svg";
import profileAvatar from "@/assets/profile-avatar.png";
import avatarMemoji from "@/assets/avatar-memoji.png";

interface HeroDesktopProps {
  onTerminalOpen: () => void;
}

const formatTime = (date: Date) =>
  date.toLocaleTimeString("en-US", {
    hour: "numeric",
    minute: "2-digit",
    second: "2-digit",
    hour12: true,
  });

const HeroDesktop = ({ onTerminalOpen }: HeroDesktopProps) => {
  const navigate = useNavigate();
  const [currentTime, setCurrentTime] = useState(formatTime(new Date()));

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(formatTime(new Date()));
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const appIcons = [
    { icon: aboutIcon, label: "Bio", description: "Read more about me", action: () => scrollToSection("about") },
    { icon: skillsIcon, label: "Skills", description: "Tech stack & tools", action: () => scrollToSection("skills") },
    { icon: projectsIcon, label: "Projects", description: "Featured builds", action: () => scrollToSection("projects") },
    { icon: contactIcon, label: "Contact", description: "Ping me anytime", action: () => scrollToSection("contact") },
    { icon: resumeIcon, label: "Resume", description: "Download CV", action: () => window.open("https://drive.google.com/file/d/1zVcKG0xSXQi2MfB9slEddZSah33-H6L-/view?usp=sharing", "_blank") },
    { icon: aiIcon, label: "AI Portfolio", description: "Chat with AI Mishti", action: () => navigate("/ai-portfolio") },
    { icon: funIcon, label: "Fun Zone", description: "Easter eggs & doodles", action: () => scrollToSection("fun") },
    { icon: terminalIcon, label: "Terminal", description: "Open CLI", action: onTerminalOpen },
  ];

  return (
    <section
      id="home"
      className="min-h-screen relative overflow-hidden flex flex-col bg-retro-pattern text-foreground"
    >
      {/* Subtle gradient overlay */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "var(--gradient-glow)",
        }}
      />
      {/* Top Status Bar */}
      <header className="sticky top-0 z-50 w-full bg-retro-bar text-retro-ink flex items-center justify-between px-6 py-3 border-b-4 border-retro-border font-pixel tracking-wide" style={{ fontFamily: "'Press Start 2P', cursive" }}>
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-full bg-retro-border flex items-center justify-center text-retro-bar">☺</div>
          <span className="text-lg">Mishti's Desktop</span>
        </div>
        <div className="hidden md:flex items-center gap-6 text-sm">
          <span className="opacity-70">...let's talk about creative code</span>
          <div className="flex items-center gap-2">
            <span>🕒</span>
            <span>{currentTime}</span>
          </div>
        </div>
      </header>

      {/* Desktop Workspace */}
      <div className="flex-1 w-full px-4 md:px-8 py-8 bg-retro-pattern">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 max-w-6xl mx-auto">
          {/* Desktop Icons floating on background */}
          <section className="lg:col-span-8 relative min-h-[420px]">
                <div className="inline-flex items-center gap-3 bg-retro-panel/90 border border-retro-border px-4 py-2 font-pixel text-sm text-retro-ink rounded-b-lg shadow-retro-icon" style={{ fontFamily: "'Press Start 2P', cursive" }}>
                  Desktop
                </div>
                <div className="absolute top-4 right-0 bg-retro-panel/70 border border-retro-border px-3 py-2 font-pixel text-xs text-retro-ink rounded-l-lg" style={{ fontFamily: "'Press Start 2P', cursive" }}>
                  Double-click an app to launch it
                </div>
            <div className="pt-16 grid grid-cols-2 sm:grid-cols-3 xl:grid-cols-4 gap-8">
              {appIcons.map((app) => (
                <button
                  key={app.label}
                  onClick={app.action}
                  className="flex flex-col items-center gap-3 text-center group"
                >
                  <div className="flex items-center justify-center group-hover:-translate-y-1 transition-transform">
                    <img
                      src={app.icon}
                      alt={app.label}
                      className="w-14 h-14 md:w-16 md:h-16 object-contain"
                    />
                  </div>
                      <span className="font-pixel text-xs text-retro-ink group-hover:text-neon-cyan transition-colors" style={{ fontFamily: "'Press Start 2P', cursive" }}>
                        {app.label}
                      </span>
                </button>
              ))}
            </div>
          </section>

          {/* Right Window - Featured Image */}
          <aside className="lg:col-span-4 bg-retro-window border-4 border-retro-border shadow-retro flex flex-col">
                <div className="flex items-center justify-between bg-retro-panel border-b-2 border-retro-border px-4 py-2">
                  <span className="font-pixel text-sm text-retro-ink" style={{ fontFamily: "'Press Start 2P', cursive" }}>StudioCam</span>
                  <span className="text-xs text-muted-foreground uppercase">Live</span>
                </div>
            <div className="flex-1 p-4 flex flex-col gap-4">
              <div className=" bg-card/60 border border-retro-border p-3 flex items-center gap-3 rounded">
                <img
                  src={profileAvatar}
                  alt="Mishti avatar"
                  className="w-16 h-16 object-cover rounded border border-retro-border"
                />
                <div>
                  <p className="font-semibold text-foreground">Mishti Mattu</p>
                  <p className="text-xs text-muted-foreground">Full-stack developer</p>
                </div>
              </div>
              <div className="flex-1 border border-retro-border bg-card/40 overflow-hidden">
                <img
                  src={avatarMemoji}
                  alt="Creative Work"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex items-center justify-between text-xs text-muted-foreground font-pixel">
                <span>100 likes</span>
                <span>#PixelArt</span>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
};

export default HeroDesktop;
