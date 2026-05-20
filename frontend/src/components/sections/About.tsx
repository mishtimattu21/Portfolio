import { useEffect, useRef, useState } from "react";
import { Award, BookOpen, Briefcase, Calendar, Coffee, GraduationCap, Heart, Lightbulb, PenTool } from "lucide-react";

const About = () => {
  const sectionRef = useRef<HTMLElement | null>(null);
  const [journalOpen, setJournalOpen] = useState(false);

  useEffect(() => {
    const section = sectionRef.current;

    if (!section) {
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        setJournalOpen(entry.isIntersecting);
      },
      { threshold: 0.28, rootMargin: "-8% 0px -18% 0px" },
    );

    observer.observe(section);

    return () => observer.disconnect();
  }, []);

  const journalEntries = [
    {
      date: "Today",
      icon: BookOpen,
      title: "Who I Am",
      content:
        "I'm Mishti Mattu, a B.Tech CSE student at VIT Chennai with a 9.30 CGPA, focused on AI/ML research, full-stack development, and fintech products.",
      color: "neon-cyan",
      tags: ["Student", "Developer", "Researcher"],
    },
    {
      date: "Summer 2026",
      icon: Briefcase,
      title: "What I Do",
      content:
        "Summer Intern at Citi Corp and ML Research Engineer at CCPS, VIT Chennai, building fintech tools, vision systems, AI assistants, and civic-tech platforms.",
      color: "neon-purple",
      tags: ["Citi", "Research", "AI/ML"],
    },
    {
      date: "Always",
      icon: Heart,
      title: "What Drives Me",
      content:
        "Hackathons, research, and practical products. Runner-up at Intel OneAPI GENAI and Wissen CodeStorm, plus finalist runs at SIH, FedEx SMART, and Accenture.",
      color: "neon-magenta",
      tags: ["Hackathons", "Leadership", "Innovation"],
    },
  ];

  const experience = [
    {
      company: "Citi Corp",
      role: "Summer Intern",
      period: "Summer 2026",
      location: "Pune, India",
      description:
        "Contributing to cross-functional technology initiatives in Agile teams, supporting scalable internal tools across banking operations with exposure to fintech infrastructure.",
      icon: Briefcase,
    },
    {
      company: "Centre for Cyber Physical Systems, VIT Chennai",
      role: "Machine Learning Research Engineer",
      period: "Sept 2024 - Present",
      location: "Chennai, India",
      description:
        "Built a CNN-based disease detection system with 95.06% accuracy using SAM zero-shot segmentation and OpenCV preprocessing. Published in Elsevier Results in Engineering.",
      icon: PenTool,
      link: "https://doi.org/10.1016/j.rineng.2024.103784",
    },
  ];

  const education = [
    {
      institution: "Vellore Institute of Technology, Chennai",
      degree: "B.Tech in Computer Science and Engineering",
      period: "Expected 2027",
      achievement: "CGPA: 9.30",
      icon: GraduationCap,
    },
    {
      institution: "Narayana Educational Institutions, Mumbai",
      degree: "Class XII (CBSE) / Class X (CBSE)",
      period: "2023",
      achievement: "XII: 94.2% / X: 97.8%",
      icon: Award,
    },
  ];

  return (
    <section id="about" ref={sectionRef} className="min-h-screen py-20 bg-retro-pattern relative overflow-visible">
      <div className="container mx-auto px-6">
        <div className="bg-retro-window border-4 border-retro-border shadow-retro max-w-6xl mx-auto">
          <div className="flex items-center justify-between bg-retro-panel border-b-2 border-retro-border px-4 py-2">
            <div className="flex items-center gap-3">
              <BookOpen className="text-neon-purple" size={20} />
              <span className="font-pixel text-lg text-retro-ink">My Journal</span>
            </div>
            <div className="flex gap-2">
              <span className="w-3 h-3 bg-retro-border rounded-full inline-block" />
              <span className="w-3 h-3 bg-retro-border rounded-full inline-block" />
              <span className="w-3 h-3 bg-retro-border rounded-full inline-block" />
            </div>
          </div>

          <div className="p-0 relative">
            <div className="absolute top-8 right-8 text-neon-purple/20">
              <Coffee size={40} />
            </div>
            <div className="absolute bottom-8 left-8 text-neon-cyan/20">
              <Lightbulb size={35} />
            </div>

            <div className={`journal-stage relative z-10 ${journalOpen ? "journal-stage-open" : ""}`}>
              <div className="journal-book" aria-label="Animated journal that opens when this section is in view">
                <div className="journal-cover journal-back-cover" />
                <div className="journal-page-stack journal-page-stack-left" />
                <div className="journal-page-stack journal-page-stack-right" />
                <div className="journal-bookmark journal-bookmark-left" />
                <div className="journal-bookmark journal-bookmark-right" />

                <div className="journal-pages journal-right-page">
                  <div className="space-y-5">
                    <div className="flex items-center gap-3 pb-4 border-b-2 border-retro-border">
                      <Briefcase className="text-neon-cyan" size={24} />
                      <h3 className="text-xl font-pixel text-retro-ink">Experience</h3>
                    </div>

                    {experience.map((exp, idx) => {
                      const Icon = exp.icon;
                      return (
                        <div
                          key={idx}
                          className="bg-retro-window/80 border border-retro-border p-4 hover:border-neon-cyan/50 transition-all"
                        >
                          <div className="flex items-start gap-3">
                            <Icon className="text-neon-cyan mt-1 shrink-0" size={18} />
                            <div className="flex-1">
                              <h4 className="font-pixel text-sm text-retro-ink mb-1">{exp.company}</h4>
                              <p className="text-xs text-neon-purple mb-1">{exp.role}</p>
                              <div className="flex flex-wrap items-center gap-2 text-xs text-retro-ink/70 mb-2">
                                <span>{exp.period}</span>
                                <span className="text-neon-purple">/</span>
                                <span>{exp.location}</span>
                              </div>
                              <p className="text-xs text-retro-ink/90 leading-relaxed">{exp.description}</p>
                              {exp.link ? (
                                <a
                                  href={exp.link}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="inline-block mt-2 text-xs text-neon-cyan hover:text-neon-purple transition-colors"
                                >
                                  View publication
                                </a>
                              ) : null}
                            </div>
                          </div>
                        </div>
                      );
                    })}

                    <div className="pt-4 border-t-2 border-retro-border">
                      <div className="flex items-center gap-3 mb-5">
                        <GraduationCap className="text-neon-purple" size={24} />
                        <h3 className="text-xl font-pixel text-retro-ink">Education</h3>
                      </div>

                      <div className="space-y-5 relative">
                        <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-retro-border" />
                        {education.map((edu, idx) => {
                          const Icon = edu.icon;
                          return (
                            <div key={idx} className="relative pl-12 group">
                              <div className="absolute left-4 top-2 w-4 h-4 bg-retro-window border-2 border-neon-purple rounded-full group-hover:scale-125 transition-transform" />
                              <div className="bg-retro-window/80 border border-retro-border p-4 hover:border-neon-purple/50 transition-all">
                                <div className="flex items-start gap-3">
                                  <Icon className="text-neon-purple mt-1" size={18} />
                                  <div className="flex-1">
                                    <h4 className="font-pixel text-sm text-retro-ink mb-1">{edu.institution}</h4>
                                    <p className="text-xs text-retro-ink/80 mb-2">{edu.degree}</p>
                                    <div className="flex items-center gap-3 text-xs">
                                      <span className="text-retro-ink/70">{edu.period}</span>
                                      <span className="text-neon-purple">/</span>
                                      <span className="text-neon-cyan">{edu.achievement}</span>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    </div>

                  </div>
                </div>

                <div className="journal-pages journal-left-page">
                  <div className="space-y-5">
                    {journalEntries.map((entry, idx) => {
                      const Icon = entry.icon;
                      return (
                        <div
                          key={idx}
                          className="relative bg-retro-window/80 border-l-4 border-retro-border p-5 hover:border-neon-purple/70 hover:shadow-[0_0_25px_hsl(var(--neon-purple),0.2)] transition-all group"
                          style={{
                            borderLeftColor: `hsl(var(--${entry.color}))`,
                            transform: `rotate(${idx % 2 === 0 ? "-0.35deg" : "0.35deg"})`,
                          }}
                        >
                          <div className="flex items-center justify-between mb-3">
                            <div className="flex items-center gap-2">
                              <Calendar
                                className="opacity-60"
                                size={14}
                                style={{ color: `hsl(var(--${entry.color}))` }}
                              />
                              <span className="text-xs text-retro-ink/70">{entry.date}</span>
                            </div>
                            <Icon
                              className="opacity-60"
                              size={20}
                              style={{ color: `hsl(var(--${entry.color}))` }}
                            />
                          </div>

                          <h3 className="text-lg font-pixel text-retro-ink mb-3 group-hover:text-neon-purple transition-colors">
                            {entry.title}
                          </h3>

                          <p className="text-retro-ink/90 leading-relaxed text-sm mb-4">{entry.content}</p>

                          <div className="flex flex-wrap gap-2">
                            {entry.tags.map((tag, tagIdx) => (
                              <span
                                key={tagIdx}
                                className="px-2 py-1 text-xs bg-retro-panel/50 border border-retro-border text-retro-ink/80"
                              >
                                #{tag}
                              </span>
                            ))}
                          </div>
                        </div>
                      );
                    })}

                    <div className="bg-retro-panel/90 border-2 border-retro-border p-5 hover:border-neon-magenta/50 transition-all relative">
                      <div className="absolute top-2 right-2 text-neon-magenta/30">
                        <Heart size={30} />
                      </div>
                      <h3 className="text-lg font-pixel text-retro-ink mb-4">Achievements</h3>
                      <ul className="space-y-2 text-retro-ink/90 text-sm">
                        <li className="flex items-start gap-2">
                          <span className="text-neon-cyan mt-1">*</span>
                          <span>Runner-Up - Intel OneAPI GENAI Hackathon, Wissen CodeStorm at BITS Goa</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-neon-purple mt-1">*</span>
                          <span>Finalist - Accenture Innovation Challenge, FedEx SMART Hackathon, Hacknovare</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="journal-cover journal-front-cover">
                  <div className="journal-cover-frame">
                    <BookOpen className="text-neon-purple" size={42} />
                    <span className="font-pixel text-retro-ink text-xl sm:text-2xl">Mishti's Journal</span>
                    <span className="journal-cover-line" />
                    <span className="text-retro-ink/70 text-xs uppercase tracking-[0.35em]">scroll to open</span>
                  </div>
                </div>

                <div className="journal-spine" />
                <div className="journal-bottom-spine" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
