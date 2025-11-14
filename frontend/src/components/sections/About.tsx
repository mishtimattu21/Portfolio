import { User, Code, Sparkles } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="min-h-screen py-20 bg-grid relative">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-neon-cyan">
          About Me
        </h2>

        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <div className="space-y-6 animate-slide-up">
            <div className="bg-card/50 backdrop-blur p-6 rounded-lg border border-neon-cyan/20 hover:border-neon-cyan/50 transition-all">
              <div className="flex items-center gap-3 mb-4">
                <User className="text-neon-cyan" size={24} />
                <h3 className="text-xl font-semibold text-neon-purple">Who I Am</h3>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                I'm a passionate full-stack developer with a love for creating 
                unique digital experiences. I combine technical expertise with 
                creative design to build applications that are both beautiful 
                and functional.
              </p>
            </div>

            <div className="bg-card/50 backdrop-blur p-6 rounded-lg border border-neon-purple/20 hover:border-neon-purple/50 transition-all">
              <div className="flex items-center gap-3 mb-4">
                <Code className="text-neon-purple" size={24} />
                <h3 className="text-xl font-semibold text-neon-cyan">What I Do</h3>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                I specialize in building modern web applications using React, 
                TypeScript, and cutting-edge technologies. From responsive 
                frontends to scalable backends, I handle the full development 
                lifecycle.
              </p>
            </div>

            <div className="bg-card/50 backdrop-blur p-6 rounded-lg border border-neon-magenta/20 hover:border-neon-magenta/50 transition-all">
              <div className="flex items-center gap-3 mb-4">
                <Sparkles className="text-neon-magenta" size={24} />
                <h3 className="text-xl font-semibold text-neon-purple">What Drives Me</h3>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                I'm driven by the challenge of solving complex problems and 
                the satisfaction of bringing ideas to life. I believe in 
                continuous learning and pushing the boundaries of what's 
                possible with code.
              </p>
            </div>
          </div>

          <div className="flex items-center justify-center">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-neon-cyan via-neon-purple to-neon-magenta rounded-full blur-3xl opacity-30 animate-glow-pulse"></div>
              <div className="relative bg-card/80 backdrop-blur p-8 rounded-2xl border border-neon-cyan/30">
                <h3 className="text-2xl font-bold text-neon-purple mb-6">Quick Facts</h3>
                <ul className="space-y-4 text-muted-foreground">
                  <li className="flex items-start gap-3">
                    <span className="text-neon-cyan">▸</span>
                    <span>5+ years of development experience</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-neon-purple">▸</span>
                    <span>Specialized in React & TypeScript</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-neon-magenta">▸</span>
                    <span>Passionate about UI/UX design</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-neon-cyan">▸</span>
                    <span>Open source contributor</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-neon-purple">▸</span>
                    <span>Always learning new technologies</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
