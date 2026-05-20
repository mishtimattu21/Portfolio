import { useEffect, useRef, useState } from "react";
import { AppWindow, Cpu, FolderOpen, Terminal } from "lucide-react";

type Project = {
  id: string;
  exe: string;
  label: string;
  module: string;
  path: string;
  type: string;
  status: string;
  version: string;
  memory: string;
  description: string;
  tech: string[];
  logs: string[];
  github?: string;
  link?: string;
  linkLabel?: string;
  period?: string;
};

const projects: Project[] = [
  {
    id: "bodhini",
    exe: "Bodhini.exe",
    label: "Bodhini",
    module: "AI Assistant Module",
    path: "C:\\Mishti\\Programs\\Bodhini.exe",
    type: "AI_SYSTEM",
    status: "RUNNING",
    version: "v2.3.1",
    memory: "248MB",
    description:
      "Enterprise-grade multilingual RAG chatbot with speech recognition, OCR integration, web automation, and a WCAG-compliant UI.",
    tech: ["Node.js", "React", "Python", "LangChain"],
    logs: [
      "> run bodhini.exe",
      "Loading multilingual engine...",
      "Connecting OCR service...",
      "Voice recognition initialized...",
      "[LOG] SYSTEM READY",
    ],
    github: "https://github.com/mishtimattu21/Bodhini-prev.git",
  },
  {
    id: "informula",
    exe: "Informula.ai",
    label: "Informula",
    module: "Consumer Safety Platform",
    path: "C:\\Mishti\\Programs\\Informula.ai",
    type: "SAFETY_ENGINE",
    status: "STABLE",
    version: "v1.8.0",
    memory: "186MB",
    description:
      "AI-powered safety analysis with FDA, PubChem, and EPA APIs. Recommendation engine delivers tailored reports at 90% accuracy.",
    tech: ["React.js", "FastAPI", "PostgreSQL", "Supabase"],
    logs: [
      "> run informula.ai",
      "Fetching regulatory datasets...",
      "PubChem API connected...",
      "[LOG] Report engine online",
      "[LOG] DEPLOYMENT SUCCESSFUL",
    ],
    github: "https://github.com/mishtimattu21/Informula-2.git",
  },
  {
    id: "civixity",
    exe: "Civixity.sys",
    label: "Civixity",
    module: "Civic Analytics Suite",
    path: "C:\\Mishti\\Programs\\Civixity.sys",
    type: "CIVIC_PLATFORM",
    status: "ACTIVE",
    version: "v3.0.2",
    memory: "312MB",
    description:
      "Civic issue reporting with geolocation, AI priority scoring, and real-time analytics dashboards for authorities.",
    tech: ["React.js", "FastAPI", "Supabase", "AI Integration"],
    logs: [
      "> run civixity.sys",
      "Geolocation module loaded...",
      "Priority scoring model active...",
      "[LOG] Analytics pipeline synced",
      "[LOG] API LATENCY OPTIMIZED",
    ],
    github: "https://github.com/mishtimattu21/Civixity-platform.git",
  },
  {
    id: "teadetect",
    exe: "TeaDetect.ml",
    label: "TeaVision",
    module: "CNN Disease Detection",
    path: "C:\\Mishti\\Programs\\TeaDetect.ml",
    type: "VISION_MODEL",
    status: "PUBLISHED",
    version: "v4.1.0",
    memory: "420MB",
    description:
      "CNN-based tea leaf disease detection at 95.06% accuracy using SAM zero-shot segmentation and OpenCV preprocessing. Published in Elsevier.",
    tech: ["PyTorch", "CNN", "SAM", "OpenCV"],
    logs: [
      "> run teadetect.ml",
      "Loading SAM weights...",
      "GPU acceleration enabled...",
      "[LOG] Model accuracy: 95.06%",
      "[LOG] PUBLICATION LINK READY",
    ],
    link: "https://doi.org/10.1016/j.rineng.2024.103784",
    linkLabel: "View Publication",
    period: "Sept 2024 - Present | VIT Chennai",
  },
];

const toDll = (tech: string) => {
  const base = tech.replace(/\s+/g, "").replace(/\./g, "");
  if (tech.toLowerCase().includes("python")) return "PythonRuntime.dll";
  if (tech.toLowerCase().includes("react")) return "React.dll";
  return `${base}.sys`;
};

const Projects = () => {
  const sectionRef = useRef<HTMLElement | null>(null);
  const [inView, setInView] = useState(false);
  const [activeId, setActiveId] = useState(projects[0].id);
  const [visibleLogs, setVisibleLogs] = useState(0);

  const active = projects.find((p) => p.id === activeId) ?? projects[0];

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const observer = new IntersectionObserver(
      ([entry]) => setInView(entry.isIntersecting),
      { threshold: 0.18, rootMargin: "-5% 0px -10% 0px" },
    );

    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    setVisibleLogs(0);
    const timers = active.logs.map((_, i) =>
      window.setTimeout(() => setVisibleLogs(i + 1), 180 + i * 220),
    );
    return () => timers.forEach(clearTimeout);
  }, [activeId, active.logs]);

  return (
    <section id="projects" ref={sectionRef} className="min-h-screen py-20 bg-retro-pattern relative">
      <div className="container mx-auto px-6">
        <div className="bg-retro-window border-4 border-retro-border shadow-retro max-w-6xl mx-auto overflow-hidden">
          <div className="flex items-center justify-between bg-retro-panel border-b-2 border-retro-border px-4 py-2">
            <div className="flex items-center gap-3">
              <Terminal className="text-neon-purple projects-os-title-pulse" size={20} />
              <span className="font-pixel text-lg text-retro-ink">Program Registry</span>
            </div>
            <div className="flex gap-2">
              <span className="w-3 h-3 bg-retro-border rounded-full inline-block" />
              <span className="w-3 h-3 bg-retro-border rounded-full inline-block" />
              <span className="w-3 h-3 bg-retro-border rounded-full inline-block" />
            </div>
          </div>

          <div
            className={`skills-stage skills-os-canvas flex flex-col lg:flex-row ${
              inView ? "skills-os-canvas--live" : ""
            }`}
          >
            <span className="skills-os-orb skills-os-orb--1" aria-hidden />
            <span className="skills-os-orb skills-os-orb--2" aria-hidden />

            <aside className="skills-os-sidebar lg:w-64 shrink-0 p-5 lg:p-6 relative z-[1]">
              <p className="font-pixel text-[9px] text-white/70 mb-2 tracking-wider">APPLICATIONS</p>
              <p className="text-[10px] text-white/45 mb-4 font-mono">C:\Mishti\Programs\</p>
              <div className="flex lg:flex-col gap-2.5 overflow-x-auto lg:overflow-visible pb-1 lg:pb-0">
                {projects.map((project) => {
                  const isActive = project.id === activeId;
                  return (
                    <button
                      key={project.id}
                      type="button"
                      onClick={() => setActiveId(project.id)}
                      className={`skills-os-folder flex items-start gap-2.5 lg:w-full min-w-[10rem] lg:min-w-0 shrink-0 px-3 py-3 text-left ${
                        isActive ? "skills-os-folder--active" : ""
                      }`}
                    >
                      {isActive ? (
                        <FolderOpen size={18} className="shrink-0 text-neon-purple mt-0.5" />
                      ) : (
                        <AppWindow size={18} className="shrink-0 text-neon-purple/75 mt-0.5" />
                      )}
                      <span className="font-mono text-[10px] leading-relaxed min-w-0 break-all text-left">
                        {project.exe}
                      </span>
                    </button>
                  );
                })}
              </div>
            </aside>

            <div className="flex-1 min-w-0 flex flex-col p-5 lg:p-6 lg:pl-0 relative z-[1]">
              <div
                key={active.path}
                className="skills-os-pathbar skills-os-path-enter flex items-center gap-3 px-4 py-2.5 mb-4"
              >
                <span className="font-pixel text-[8px] text-neon-purple shrink-0">PATH</span>
                <code className="text-xs text-[hsl(270_45%_28%)] truncate font-mono font-medium">
                  {active.path}
                </code>
              </div>

              <div key={activeId} className="projects-app-window projects-app-enter flex-1 flex flex-col">
                <div className="projects-app-titlebar">
                  <div className="min-w-0">
                    <span className="font-pixel text-[10px] text-[hsl(278_32%_18%)] block truncate">
                      {active.exe}
                    </span>
                    <span className="text-[9px] text-[hsl(278_28%_35%)] font-mono">{active.module}</span>
                  </div>
                  <div className="flex gap-1 shrink-0" aria-hidden>
                    <span className="projects-winbtn" />
                    <span className="projects-winbtn projects-winbtn--min" />
                    <span className="projects-winbtn projects-winbtn--close" />
                  </div>
                </div>

                <div className="projects-app-body flex-1 flex flex-col">
                  <dl className="projects-meta-grid">
                    <div>
                      <dt>STATUS</dt>
                      <dd className="projects-meta-running">{active.status}</dd>
                    </div>
                    <div>
                      <dt>VERSION</dt>
                      <dd>{active.version}</dd>
                    </div>
                    <div>
                      <dt>TYPE</dt>
                      <dd>{active.type}</dd>
                    </div>
                    <div>
                      <dt>MEMORY</dt>
                      <dd>{active.memory}</dd>
                    </div>
                  </dl>

                  {active.period ? (
                    <p className="projects-app-period">{active.period}</p>
                  ) : null}

                  <p className="projects-app-description">{active.description}</p>

                  <div className="mb-4">
                    <p className="font-pixel text-[8px] text-neon-purple mb-2">DEPENDENCIES</p>
                    <ul className="projects-deps-list">
                      {active.tech.map((t) => (
                        <li key={t}>{toDll(t)}</li>
                      ))}
                    </ul>
                  </div>

                  <div className="projects-terminal flex-1 min-h-[120px]">
                    {active.logs.slice(0, visibleLogs).map((line, i) => (
                      <p
                        key={`${activeId}-${i}`}
                        className={`projects-terminal-line ${
                          line.startsWith("[LOG]") ? "projects-terminal-line--log" : ""
                        }`}
                      >
                        {line}
                      </p>
                    ))}
                    {visibleLogs < active.logs.length ? (
                      <span className="projects-terminal-cursor" aria-hidden />
                    ) : null}
                  </div>

                  <div className="projects-actions">
                    {active.github ? (
                      <a
                        href={active.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="projects-action-btn"
                      >
                        [ Source Code ]
                      </a>
                    ) : null}
                    {active.link ? (
                      <a
                        href={active.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="projects-action-btn projects-action-btn--alt"
                      >
                        [ {active.linkLabel ?? "Open Link"} ]
                      </a>
                    ) : null}
                  </div>
                </div>
              </div>

              <div className="skills-os-statusbar flex items-center justify-between gap-3 mt-4 px-4 py-2">
                <span className="flex items-center gap-2">
                  <Cpu size={14} className="text-neon-purple" />
                  {projects.length} programs registered
                </span>
                <span className="text-neon-purple font-semibold flex items-center gap-1.5">
                  <span className="skills-os-ready-dot" aria-hidden />
                  {active.label} loaded
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
