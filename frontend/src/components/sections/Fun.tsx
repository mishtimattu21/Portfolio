import { Gamepad2, Sparkles } from "lucide-react";
import RetroSnake from "@/components/fun/RetroSnake";

const funFacts = [
  "Coffee fuels most commits.",
  "Favorite stack: Python + React.",
  "Once debugged until 3am — worth it.",
  "Mumbai → building cool things.",
];

const Fun = () => {
  return (
    <section id="fun" className="min-h-screen py-20 bg-retro-pattern relative">
      <div className="container mx-auto px-6">
        <div className="bg-retro-window border-4 border-retro-border shadow-retro max-w-6xl mx-auto overflow-hidden">
          <div className="flex items-center justify-between bg-retro-panel border-b-2 border-retro-border px-4 py-2">
            <div className="flex items-center gap-3">
              <Gamepad2 className="text-neon-magenta" size={20} />
              <div>
                <span className="font-pixel text-lg text-retro-ink leading-tight block">Fun Zone</span>
                <span className="font-pixel text-[8px] text-neon-magenta block mt-1">Take a break</span>
              </div>
            </div>
            <div className="flex gap-2">
              <span className="w-3 h-3 bg-retro-border rounded-full inline-block" />
              <span className="w-3 h-3 bg-retro-border rounded-full inline-block" />
              <span className="w-3 h-3 bg-neon-magenta rounded-full inline-block" />
            </div>
          </div>

          <div className="fun-zone-stage flex flex-col lg:flex-row min-h-[560px]">
            <div className="fun-zone-game flex-1 p-4 md:p-6 min-w-0">
              <div className="fun-zone-path mb-3">
                <span className="font-pixel text-[8px] text-neon-purple shrink-0">PATH</span>
                <span className="font-mono text-xs text-[hsl(278_32%_22%)] truncate">
                  C:\Mishti\Games\snake.exe
                </span>
              </div>

              <div className="fun-zone-window">
                <div className="fun-zone-titlebar">
                  <span className="font-pixel text-[9px]">snake.exe</span>
                  <div className="flex gap-1" aria-hidden>
                    <span className="projects-winbtn" />
                    <span className="projects-winbtn projects-winbtn--min" />
                    <span className="projects-winbtn projects-winbtn--close" />
                  </div>
                </div>
                <RetroSnake />
              </div>
            </div>

            <aside className="fun-zone-aside">
              <p className="font-pixel text-[8px] text-[hsl(278_32%_22%)] mb-3 flex items-center gap-2">
                <Sparkles size={12} className="text-neon-purple" />
                LOADING TIPS
              </p>
              <ul className="fun-zone-tips space-y-2">
                {funFacts.map((fact) => (
                  <li key={fact} className="fun-zone-tip font-mono text-xs">
                    {fact}
                  </li>
                ))}
              </ul>
              <p className="fun-zone-aside-footer font-pixel text-[6px] text-[hsl(278_28%_35%)] mt-6">
                More games coming soon…
              </p>
            </aside>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Fun;
