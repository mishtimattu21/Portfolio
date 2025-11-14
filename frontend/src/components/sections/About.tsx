import { BookOpen, PenTool, Heart, Calendar, GraduationCap, Award, Coffee, Lightbulb } from "lucide-react";

const About = () => {
  const journalEntries = [
    {
      date: "Today",
      icon: BookOpen,
      title: "Who I Am",
      content: "I'm Mishti Mattu, a Computer Science Engineering student at VIT Chennai with a CGPA of 9.30. I'm passionate about AI/ML research, full-stack development, and building innovative solutions that make a real impact.",
      color: "neon-cyan",
      tags: ["Student", "Developer", "Researcher"],
    },
    {
      date: "2024 - Present",
      icon: PenTool,
      title: "What I Do",
      content: "I'm a Researcher at Centre for Cyber Physical Systems, VIT Chennai, working on AI-powered tea leaf disease detection. I build multilingual AI assistants, optimize logistics systems, and create inclusive learning platforms using cutting-edge technologies.",
      color: "neon-purple",
      tags: ["Research", "AI/ML", "Full-Stack"],
    },
    {
      date: "Always",
      icon: Heart,
      title: "What Drives Me",
      content: "I'm driven by hackathons, research publications, and solving real-world problems. From winning hackathons to publishing in Elsevier journals, I thrive on challenges that push the boundaries of AI and technology.",
      color: "neon-magenta",
      tags: ["Hackathons", "Innovation", "Learning"],
    },
  ];

  const education = [
    {
      institution: "VIT Chennai",
      degree: "B.Tech Computer Science & Engineering",
      period: "2023 - 2027",
      achievement: "CGPA: 9.30",
      icon: GraduationCap,
    },
    {
      institution: "Narayana Junior College",
      degree: "Higher Secondary Education (CBSE)",
      period: "2021 - 2023",
      achievement: "Class XII: 94.2%",
      icon: Award,
    },
    {
      institution: "Narayana Olympiad School",
      degree: "Secondary Education (CBSE)",
      period: "2019 - 2021",
      achievement: "Class X: 97.8%",
      icon: Award,
    },
  ];

  return (
    <section id="about" className="min-h-screen py-20 bg-retro-pattern relative">
      <div className="container mx-auto px-6">
        <div className="bg-retro-window border-4 border-retro-border shadow-retro max-w-6xl mx-auto">
          <div className="flex items-center justify-between bg-retro-panel border-b-2 border-retro-border px-4 py-2">
            <div className="flex items-center gap-3">
              <BookOpen className="text-neon-purple" size={20} />
              <span className="font-pixel text-lg text-retro-ink">My Journal</span>
            </div>
            <div className="flex gap-2">
              <span className="w-3 h-3 bg-retro-border rounded-full inline-block"></span>
              <span className="w-3 h-3 bg-retro-border rounded-full inline-block"></span>
              <span className="w-3 h-3 bg-retro-border rounded-full inline-block"></span>
            </div>
          </div>
          <div className="p-8 md:p-12 relative">
            {/* Decorative corner elements */}
            <div className="absolute top-8 right-8 text-neon-purple/20">
              <Coffee size={40} />
            </div>
            <div className="absolute bottom-8 left-8 text-neon-cyan/20">
              <Lightbulb size={35} />
            </div>

            <div className="grid md:grid-cols-2 gap-8 relative z-10">
              {/* Left Column - Journal Entries */}
              <div className="space-y-6">
                {journalEntries.map((entry, idx) => {
                  const Icon = entry.icon;
                  return (
                    <div
                      key={idx}
                      className="relative bg-retro-window/80 border-l-4 border-retro-border p-6 hover:border-neon-purple/70 hover:shadow-[0_0_25px_hsl(var(--neon-purple),0.2)] transition-all group"
                      style={{
                        borderLeftColor: `hsl(var(--${entry.color}))`,
                        transform: `rotate(${idx % 2 === 0 ? '-0.5deg' : '0.5deg'})`,
                      }}
                    >
                      {/* Date stamp */}
                      <div className="flex items-center justify-between mb-3">
                        <div className="flex items-center gap-2">
                          <Calendar 
                            className="opacity-60" 
                            size={14}
                            style={{ color: `hsl(var(--${entry.color}))` }}
                          />
                          <span className="text-xs font-pixel text-retro-ink/70">{entry.date}</span>
                        </div>
                        <Icon 
                          className="opacity-60" 
                          size={20}
                          style={{ color: `hsl(var(--${entry.color}))` }}
                        />
                      </div>

                      {/* Title */}
                      <h3 className="text-lg font-pixel text-retro-ink mb-3 group-hover:text-neon-purple transition-colors">
                        {entry.title}
                      </h3>

                      {/* Content */}
                      <p className="text-retro-ink/90 leading-relaxed font-pixel text-xs mb-4">
                        {entry.content}
                      </p>

                      {/* Tags */}
                      <div className="flex flex-wrap gap-2">
                        {entry.tags.map((tag, tagIdx) => (
                          <span
                            key={tagIdx}
                            className="px-2 py-1 text-xs font-pixel bg-retro-panel/50 border border-retro-border text-retro-ink/80"
                          >
                            #{tag}
                          </span>
                        ))}
                      </div>

                      {/* Decorative line */}
                      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-retro-border to-transparent"></div>
                    </div>
                  );
                })}
              </div>

              {/* Right Column - Education Timeline */}
              <div className="space-y-6">
                <div className="bg-retro-panel/90 border-2 border-retro-border p-6 hover:border-neon-purple/50 transition-all">
                  <div className="flex items-center gap-3 mb-6 pb-4 border-b-2 border-retro-border">
                    <GraduationCap className="text-neon-purple" size={24} />
                    <h3 className="text-xl font-pixel text-retro-ink">Education Timeline</h3>
                  </div>
                  
                  <div className="space-y-6 relative">
                    {/* Timeline line */}
                    <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-retro-border"></div>
                    
                    {education.map((edu, idx) => {
                      const Icon = edu.icon;
                      return (
                        <div key={idx} className="relative pl-12 group">
                          {/* Timeline dot */}
                          <div className="absolute left-4 top-2 w-4 h-4 bg-retro-window border-2 border-neon-purple rounded-full group-hover:scale-125 transition-transform"></div>
                          
                          {/* Entry card */}
                          <div className="bg-retro-window/80 border border-retro-border p-4 hover:border-neon-purple/50 transition-all">
                            <div className="flex items-start gap-3 mb-2">
                              <Icon className="text-neon-purple mt-1" size={18} />
                              <div className="flex-1">
                                <h4 className="font-pixel text-sm text-retro-ink mb-1">{edu.institution}</h4>
                                <p className="text-xs text-retro-ink/80 font-pixel mb-2">{edu.degree}</p>
                                <div className="flex items-center gap-3 text-xs font-pixel">
                                  <span className="text-retro-ink/70">{edu.period}</span>
                                  <span className="text-neon-purple">•</span>
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

                {/* Fun Facts Sticky Note */}
                <div 
                  className="bg-retro-panel/90 border-2 border-retro-border p-5 hover:border-neon-magenta/50 transition-all relative"
                  style={{
                    transform: 'rotate(1deg)',
                  }}
                >
                  <div className="absolute top-2 right-2 text-neon-magenta/30">
                    <Heart size={30} />
                  </div>
                  <h3 className="text-lg font-pixel text-retro-ink mb-4">Quick Facts</h3>
                  <ul className="space-y-3 text-retro-ink/90 font-pixel text-xs">
                    <li className="flex items-start gap-2">
                      <span className="text-neon-cyan mt-1">✦</span>
                      <span>Published research in Elsevier journal</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-neon-purple mt-1">✦</span>
                      <span>Multiple hackathon wins & finalist positions</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-neon-magenta mt-1">✦</span>
                      <span>Passionate about inclusive tech solutions</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
