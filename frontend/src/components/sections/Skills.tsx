const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend",
      color: "neon-cyan",
      skills: [
        { name: "React", level: 95 },
        { name: "TypeScript", level: 90 },
        { name: "Tailwind CSS", level: 95 },
        { name: "Next.js", level: 85 },
      ],
    },
    {
      title: "Backend",
      color: "neon-purple",
      skills: [
        { name: "Node.js", level: 85 },
        { name: "Python", level: 80 },
        { name: "PostgreSQL", level: 75 },
        { name: "MongoDB", level: 70 },
      ],
    },
    {
      title: "Tools & Others",
      color: "neon-magenta",
      skills: [
        { name: "Git", level: 90 },
        { name: "Docker", level: 75 },
        { name: "Figma", level: 85 },
        { name: "AI/ML", level: 70 },
      ],
    },
  ];

  return (
    <section id="skills" className="min-h-screen py-20 bg-background relative">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-neon-purple">
          Skills
        </h2>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {skillCategories.map((category, idx) => (
            <div
              key={idx}
              className="bg-card/50 backdrop-blur p-6 rounded-lg border border-border hover:border-primary/50 transition-all animate-slide-up"
              style={{ animationDelay: `${idx * 0.1}s` }}
            >
              <h3
                className={`text-2xl font-bold mb-6 text-${category.color}`}
              >
                {category.title}
              </h3>
              <div className="space-y-4">
                {category.skills.map((skill, i) => (
                  <div key={i}>
                    <div className="flex justify-between mb-2">
                      <span className="text-foreground font-medium">
                        {skill.name}
                      </span>
                      <span className="text-muted-foreground">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="h-2 bg-muted rounded-full overflow-hidden">
                      <div
                        className={`h-full bg-${category.color} rounded-full transition-all duration-1000 ease-out`}
                        style={{
                          width: `${skill.level}%`,
                          boxShadow: `0 0 10px hsl(var(--${category.color}))`,
                        }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
