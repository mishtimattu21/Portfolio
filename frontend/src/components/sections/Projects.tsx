import { ExternalLink, Github } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "AI Chatbot Platform",
      description:
        "Intelligent conversational AI with natural language processing, context awareness, and multi-turn conversations.",
      tech: ["React", "TypeScript", "OpenAI", "Node.js"],
      gradient: "from-neon-cyan to-neon-purple",
      link: "#",
      github: "#",
    },
    {
      title: "E-Commerce Dashboard",
      description:
        "Full-stack e-commerce admin panel with real-time analytics, inventory management, and order tracking.",
      tech: ["Next.js", "PostgreSQL", "Stripe", "Tailwind"],
      gradient: "from-neon-purple to-neon-magenta",
      link: "#",
      github: "#",
    },
    {
      title: "Data Visualization Tool",
      description:
        "Interactive data visualization platform with custom charts, real-time updates, and export capabilities.",
      tech: ["React", "D3.js", "Python", "FastAPI"],
      gradient: "from-neon-magenta to-neon-cyan",
      link: "#",
      github: "#",
    },
    {
      title: "Portfolio CMS",
      description:
        "Headless CMS for managing portfolio content with markdown support, media library, and API endpoints.",
      tech: ["Strapi", "React", "MongoDB", "AWS"],
      gradient: "from-neon-cyan to-neon-purple",
      link: "#",
      github: "#",
    },
  ];

  return (
    <section id="projects" className="min-h-screen py-20 bg-grid relative">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-neon-cyan">
          Projects
        </h2>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {projects.map((project, idx) => (
            <div
              key={idx}
              className="group bg-card/50 backdrop-blur rounded-lg border border-border hover:border-primary/50 transition-all overflow-hidden animate-slide-up"
              style={{ animationDelay: `${idx * 0.1}s` }}
            >
              <div
                className={`h-2 bg-gradient-to-r ${project.gradient}`}
              ></div>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-3 text-foreground group-hover:text-neon-purple transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 text-xs font-semibold rounded-full bg-muted text-foreground border border-border"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4">
                  <a
                    href={project.link}
                    className="flex items-center gap-2 text-neon-cyan hover:text-neon-purple transition-colors"
                  >
                    <ExternalLink size={18} />
                    <span className="text-sm font-semibold">View Project</span>
                  </a>
                  <a
                    href={project.github}
                    className="flex items-center gap-2 text-neon-purple hover:text-neon-cyan transition-colors"
                  >
                    <Github size={18} />
                    <span className="text-sm font-semibold">Source Code</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
