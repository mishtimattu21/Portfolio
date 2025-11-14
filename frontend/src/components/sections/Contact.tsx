import { useState } from "react";
import { Mail, Github, Linkedin, Instagram, Send } from "lucide-react";
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
    { icon: Github, label: "GitHub", link: "https://github.com/mishtimattu21", color: "neon-cyan" },
    { icon: Linkedin, label: "LinkedIn", link: "https://www.linkedin.com/in/mishtimattu/", color: "neon-purple" },
    { icon: Instagram, label: "Instagram", link: "https://www.instagram.com/mishtiimattu/", color: "neon-magenta" },
    { icon: Mail, label: "Email", link: "mailto:mishtimattu21@gmail.com", color: "neon-cyan" },
  ];

  const contactInfo = [
    { label: "Email", value: "mishtimattu21@gmail.com", link: "mailto:mishtimattu21@gmail.com" },
    { label: "Mobile", value: "+91 9987677759", link: "tel:+919987677759" },
    { label: "Location", value: "Chennai, Tamil Nadu, India", link: null },
  ];

  return (
    <section id="contact" className="min-h-screen py-20 bg-retro-pattern relative">
      <div className="container mx-auto px-6">
        <div className="bg-retro-window border-4 border-retro-border shadow-retro max-w-5xl mx-auto">
          <div className="flex items-center justify-between bg-retro-panel border-b-2 border-retro-border px-4 py-2">
            <span className="font-pixel text-lg text-retro-ink">Get In Touch</span>
            <div className="flex gap-2">
              <span className="w-3 h-3 bg-retro-border rounded-full inline-block"></span>
              <span className="w-3 h-3 bg-retro-border rounded-full inline-block"></span>
              <span className="w-3 h-3 bg-retro-border rounded-full inline-block"></span>
            </div>
          </div>
          <div className="p-8 md:p-12">
            <div className="grid md:grid-cols-2 gap-8">
              {/* Contact Form */}
              <div className="bg-retro-panel/90 border-2 border-retro-border p-6 hover:border-neon-cyan/50 transition-all">
                <h3 className="text-xl font-pixel mb-6 pb-4 border-b-2 border-retro-border text-retro-ink">Send a Message</h3>
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <label className="block text-sm font-pixel mb-2 text-retro-ink">
                      Name
                    </label>
                    <input
                      type="text"
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      className="w-full px-4 py-3 bg-retro-window border-2 border-retro-border focus:outline-none focus:border-neon-cyan focus:shadow-[0_0_15px_rgba(0,195,255,0.3)] transition-all text-retro-ink font-pixel text-sm"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-pixel mb-2 text-retro-ink">
                      Email
                    </label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      className="w-full px-4 py-3 bg-retro-window border-2 border-retro-border focus:outline-none focus:border-neon-cyan focus:shadow-[0_0_15px_rgba(0,195,255,0.3)] transition-all text-retro-ink font-pixel text-sm"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-pixel mb-2 text-retro-ink">
                      Message
                    </label>
                    <textarea
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                      rows={5}
                      className="w-full px-4 py-3 bg-retro-window border-2 border-retro-border focus:outline-none focus:border-neon-cyan focus:shadow-[0_0_15px_rgba(0,195,255,0.3)] transition-all text-retro-ink resize-none font-pixel text-sm"
                      required
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full px-6 py-3 bg-gradient-to-r from-neon-cyan to-neon-purple text-retro-ink font-pixel hover:shadow-[0_0_25px_rgba(0,195,255,0.5)] hover:scale-105 transition-all flex items-center justify-center gap-2 border-2 border-retro-border mt-2"
                  >
                    <Send size={18} />
                    Send Message
                  </button>
                </form>
              </div>

              {/* Contact Info & Socials */}
              <div className="space-y-6">
                <div className="bg-retro-panel/90 border-2 border-retro-border p-6 hover:border-neon-purple/50 transition-all">
                  <h3 className="text-xl font-pixel mb-6 pb-4 border-b-2 border-retro-border text-retro-ink">
                    Let's Connect
                  </h3>
                  <p className="text-retro-ink/90 leading-relaxed mb-6 font-pixel text-sm">
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
                        className={`flex items-center gap-3 p-4 bg-retro-window border-2 border-retro-border hover:border-${social.color} hover:shadow-[0_0_15px_hsl(var(--${social.color}))] transition-all group`}
                      >
                        <social.icon
                          className={`text-${social.color} group-hover:scale-110 transition-transform`}
                          size={22}
                        />
                        <span className="text-retro-ink font-pixel text-sm group-hover:text-neon-cyan transition-colors">
                          {social.label}
                        </span>
                      </a>
                    ))}
                  </div>
                </div>

                <div className="bg-retro-panel/90 border-2 border-retro-border p-6 hover:border-neon-magenta/50 transition-all">
                  <h3 className="text-xl font-pixel mb-4 pb-3 border-b-2 border-retro-border text-retro-ink">
                    Contact Information
                  </h3>
                  <div className="space-y-3 text-retro-ink/90 font-pixel text-sm">
                    {contactInfo.map((info, idx) => (
                      <div key={idx} className="flex flex-col gap-1">
                        <span className="text-retro-ink/70 text-xs">{info.label}</span>
                        {info.link ? (
                          <a
                            href={info.link}
                            className="text-neon-cyan hover:text-neon-purple transition-colors"
                          >
                            {info.value}
                          </a>
                        ) : (
                          <span>{info.value}</span>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
