const Skills = () => {
  const skillCategories = [
    {
      title: "Languages",
      color: "neon-cyan",
      skills: [
        { name: "Python", level: 95 },
        { name: "C/C++", level: 90 },
        { name: "Java", level: 85 },
        { name: "JavaScript", level: 90 },
        { name: "SQL", level: 85 },
        { name: "R", level: 75 },
        { name: "Bash", level: 80 },
      ],
    },
    {
      title: "AI/ML & Web",
      color: "neon-purple",
      skills: [
        { name: "PyTorch", level: 90 },
        { name: "Scikit-learn", level: 95 },
        { name: "Pandas/NumPy", level: 95 },
        { name: "React", level: 90 },
        { name: "Node.js", level: 85 },
        { name: "Flask", level: 85 },
        { name: "HTML/CSS", level: 90 },
      ],
    },
    {
      title: "Tools & Others",
      color: "neon-magenta",
      skills: [
        { name: "Git", level: 95 },
        { name: "Linux", level: 90 },
        { name: "MongoDB", level: 85 },
        { name: "VS Code", level: 95 },
        { name: "Matplotlib/Seaborn", level: 90 },
      ],
    },
  ];

  return (
    <section id="skills" className="min-h-screen py-20 bg-retro-pattern relative">
      <div className="container mx-auto px-6">
        <div className="bg-retro-window border-4 border-retro-border shadow-retro max-w-6xl mx-auto">
          <div className="flex items-center justify-between bg-retro-panel border-b-2 border-retro-border px-4 py-2">
            <span className="font-pixel text-lg text-retro-ink">Skills</span>
            <div className="flex gap-2">
              <span className="w-3 h-3 bg-retro-border rounded-full inline-block"></span>
              <span className="w-3 h-3 bg-retro-border rounded-full inline-block"></span>
              <span className="w-3 h-3 bg-retro-border rounded-full inline-block"></span>
            </div>
          </div>
          <div className="p-8 md:p-12">
            <div className="grid md:grid-cols-3 gap-6">
              {skillCategories.map((category, idx) => (
                <div
                  key={idx}
                  className="bg-retro-panel/90 border-2 border-retro-border p-6 hover:border-neon-cyan/70 hover:shadow-[0_0_20px_rgba(0,195,255,0.2)] transition-all group"
                >
                  <div className="mb-6 pb-4 border-b-2 border-retro-border">
                    <h3 className={`text-xl font-pixel text-${category.color} group-hover:scale-105 transition-transform inline-block`}>
                      {category.title}
                    </h3>
                  </div>
                  <div className="space-y-5">
                    {category.skills.map((skill, i) => (
                      <div key={i} className="group/item">
                        <div className="flex justify-between mb-2">
                          <span className="text-retro-ink font-pixel text-sm group-hover/item:text-neon-cyan transition-colors">
                            {skill.name}
                          </span>
                          <span className="text-retro-ink/80 font-pixel text-xs">
                            {skill.level}%
                          </span>
                        </div>
                        <div className="h-4 bg-retro-window border-2 border-retro-border overflow-hidden relative">
                          <div
                            className={`h-full bg-${category.color} transition-all duration-1000 ease-out relative`}
                            style={{
                              width: `${skill.level}%`,
                              boxShadow: `0 0 15px hsl(var(--${category.color})), inset 0 0 10px hsl(var(--${category.color}))`,
                            }}
                          >
                            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-shimmer"></div>
                          </div>
                        </div>
                      </div>
                    ))}
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

export default Skills;
