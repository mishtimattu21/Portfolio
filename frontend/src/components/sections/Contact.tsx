import { useState } from "react";
import { Mail, Github, Linkedin, Twitter, Send } from "lucide-react";
import { toast } from "sonner";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Message sent! I'll get back to you soon.");
    setFormData({ name: "", email: "", message: "" });
  };

  const socials = [
    { icon: Github, label: "GitHub", link: "https://github.com", color: "neon-cyan" },
    { icon: Linkedin, label: "LinkedIn", link: "https://linkedin.com", color: "neon-purple" },
    { icon: Twitter, label: "Twitter", link: "https://twitter.com", color: "neon-magenta" },
    { icon: Mail, label: "Email", link: "mailto:mishti@example.com", color: "neon-cyan" },
  ];

  return (
    <section id="contact" className="min-h-screen py-20 bg-background relative">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-neon-purple">
          Get In Touch
        </h2>

        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Contact Form */}
          <div className="bg-card/50 backdrop-blur p-8 rounded-lg border border-neon-cyan/20 animate-slide-up">
            <h3 className="text-2xl font-bold mb-6 text-neon-cyan">Send a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-2 text-foreground">
                  Name
                </label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  className="w-full px-4 py-2 bg-background border border-border rounded-lg focus:outline-none focus:border-neon-cyan transition-colors text-foreground"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2 text-foreground">
                  Email
                </label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  className="w-full px-4 py-2 bg-background border border-border rounded-lg focus:outline-none focus:border-neon-cyan transition-colors text-foreground"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2 text-foreground">
                  Message
                </label>
                <textarea
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  rows={5}
                  className="w-full px-4 py-2 bg-background border border-border rounded-lg focus:outline-none focus:border-neon-cyan transition-colors text-foreground resize-none"
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full px-6 py-3 bg-gradient-to-r from-neon-cyan to-neon-purple rounded-lg text-foreground font-semibold hover:shadow-lg hover:scale-105 transition-all flex items-center justify-center gap-2"
              >
                <Send size={18} />
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Info & Socials */}
          <div className="space-y-8">
            <div className="bg-card/50 backdrop-blur p-8 rounded-lg border border-neon-purple/20 animate-slide-up">
              <h3 className="text-2xl font-bold mb-6 text-neon-purple">
                Let's Connect
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                I'm always open to discussing new projects, creative ideas, or
                opportunities to be part of your vision. Feel free to reach out
                through any of these platforms!
              </p>
              <div className="grid grid-cols-2 gap-4">
                {socials.map((social, idx) => (
                  <a
                    key={idx}
                    href={social.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center gap-3 p-4 bg-background/50 rounded-lg border border-border hover:border-${social.color} transition-all group`}
                  >
                    <social.icon
                      className={`text-${social.color} group-hover:scale-110 transition-transform`}
                      size={24}
                    />
                    <span className="text-foreground font-medium">
                      {social.label}
                    </span>
                  </a>
                ))}
              </div>
            </div>

            <div className="bg-card/50 backdrop-blur p-8 rounded-lg border border-neon-magenta/20">
              <h3 className="text-2xl font-bold mb-4 text-neon-magenta">
                Response Time
              </h3>
              <p className="text-muted-foreground">
                I typically respond within <span className="text-neon-cyan font-bold">24-48 hours</span>.
                For urgent matters, feel free to reach out on LinkedIn!
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
