import { ExternalLink, Github } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "Bodhini: Multilingual AI Assistant",
      description:
        "Architected a multilingual RAG chatbot leveraging SLMs, Sentence Transformers, and hybrid search. Integrated speech recognition, multilingual OCR, browser automation, dialect recognition, sentiment analysis, sign language interpretation, and Braille conversion.",
      tech: ["Python", "LangChain", "Playwright", "SLMs", "Sentence Transformers"],
      gradient: "from-neon-cyan to-neon-purple",
      link: "#",
      github: "#",
      period: "Jan 2025 - March 2025",
    },
    {
      title: "Navigo: Carbon-Conscious Logistics",
      description:
        "Designed an ML-driven logistics optimizer combining statistical route modeling, ACO heuristics, and predictive analytics. Incorporated COPERT-based carbon estimation, EV routing, and driver behavior insights for sustainable logistics.",
      tech: ["Python", "ML", "ACO", "COPERT", "Predictive Analytics"],
      gradient: "from-neon-purple to-neon-magenta",
      link: "#",
      github: "#",
      period: "Jan 2025 - Feb 2025 | FedEx",
    },
    {
      title: "Civixity: Crowdsource Aid Platform",
      description:
        "Launched a real-time civic issue tracker with AI-powered priority scoring based on severity and locality impact. Tracked authority performance via a reputation-based incentive system.",
      tech: ["React", "Node.js", "AI", "Real-time Systems"],
      gradient: "from-neon-magenta to-neon-cyan",
      link: "#",
      github: "#",
      period: "Jan 2025 - Feb 2025 | Hacknovare Finalist",
    },
    {
      title: "EdVance: AI-Powered Adaptive Learning",
      description:
        "Built an inclusive learning platform with adaptive tools for dyslexia, autism, and ADHD (TTS/STT, gamification). Deployed AI diagnostics using behavioral and speech pattern analysis for personalized insights.",
      tech: ["React", "AI", "TTS/STT", "Behavioral Analysis"],
      gradient: "from-neon-cyan to-neon-purple",
      link: "#",
      github: "#",
      period: "Jan 2025 - Present",
    },
    {
      title: "Intervue: AI-Powered Interview Platform",
      description:
        "Created an AI-driven interview simulator with live coding assessments, behavioral analysis, and automated scoring for comprehensive candidate evaluation.",
      tech: ["React", "AI", "Live Coding", "Behavioral Analysis"],
      gradient: "from-neon-purple to-neon-magenta",
      link: "#",
      github: "#",
      period: "Feb 2025 - Present",
    },
    {
      title: "Tea Leaf Disease Detection (Research)",
      description:
        "Engineered a CNN-based classification model achieving 95.06% accuracy. Implemented Segment Anything Model (SAM) for zero-shot segmentation. Published in Results in Engineering, Elsevier.",
      tech: ["PyTorch", "CNN", "SAM", "OpenCV", "Computer Vision"],
      gradient: "from-neon-magenta to-neon-cyan",
      link: "https://doi.org/10.1016/j.rineng.2024.103784",
      github: "#",
      period: "Sept 2024 - Present | VIT Chennai",
    },
  ];

  return (
    <section id="projects" className="min-h-screen py-20 bg-retro-pattern relative">
      <div className="container mx-auto px-6">
        <div className="bg-retro-window border-4 border-retro-border shadow-retro max-w-6xl mx-auto">
          <div className="flex items-center justify-between bg-retro-panel border-b-2 border-retro-border px-4 py-2">
            <span className="font-pixel text-lg text-retro-ink">Projects</span>
            <div className="flex gap-2">
              <span className="w-3 h-3 bg-retro-border rounded-full inline-block"></span>
              <span className="w-3 h-3 bg-retro-border rounded-full inline-block"></span>
              <span className="w-3 h-3 bg-retro-border rounded-full inline-block"></span>
            </div>
          </div>
          <div className="p-8 md:p-12">
            <div className="grid md:grid-cols-2 gap-6">
              {projects.map((project, idx) => (
                <div
                  key={idx}
                  className="group bg-retro-panel/90 border-2 border-retro-border hover:border-neon-cyan/70 hover:shadow-[0_0_25px_rgba(0,195,255,0.3)] transition-all overflow-hidden"
                >
                  <div
                    className={`h-3 bg-gradient-to-r ${project.gradient} opacity-90 group-hover:opacity-100 transition-opacity`}
                  ></div>
                  <div className="p-6">
                    <div className="flex items-start justify-between mb-2">
                      <h3 className="text-xl font-pixel text-retro-ink group-hover:text-neon-purple transition-colors">
                        {project.title}
                      </h3>
                    </div>
                    {project.period && (
                      <p className="text-retro-ink/70 font-pixel text-xs mb-3">{project.period}</p>
                    )}
                    <p className="text-retro-ink/90 mb-5 leading-relaxed font-pixel text-sm">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tech.map((tech, i) => (
                        <span
                          key={i}
                          className="px-3 py-1.5 text-xs font-pixel bg-retro-window text-retro-ink border border-retro-border hover:border-neon-cyan/50 transition-colors"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    <div className="flex gap-4 pt-2 border-t border-retro-border">
                      {project.link !== "#" && (
                        <a
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 text-neon-cyan hover:text-neon-purple transition-all font-pixel text-sm hover:scale-105"
                        >
                          <ExternalLink size={18} />
                          <span>View Project</span>
                        </a>
                      )}
                      {project.github !== "#" && (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 text-neon-purple hover:text-neon-cyan transition-all font-pixel text-sm hover:scale-105"
                        >
                          <Github size={18} />
                          <span>Source Code</span>
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
