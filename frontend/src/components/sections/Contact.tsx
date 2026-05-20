import { useState } from "react";
import {
  Github,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Paperclip,
  Phone,
  Send,
  Globe,
} from "lucide-react";
import { toast } from "sonner";
import { supabase } from "@/lib/supabaseClient";

const addressBook = [
  {
    id: "instagram",
    label: "Instagram",
    handle: "@mishtiimattu",
    link: "https://instagram.com/mishtiimattu",
    icon: Instagram,
    featured: true,
  },
  {
    id: "github",
    label: "GitHub",
    handle: "mishtimattu21",
    link: "https://github.com/mishtimattu21",
    icon: Github,
  },
  {
    id: "linkedin",
    label: "LinkedIn",
    handle: "mishtimattu",
    link: "https://www.linkedin.com/in/mishtimattu/",
    icon: Linkedin,
  },
  {
    id: "portfolio",
    label: "Portfolio",
    handle: "framer.site",
    link: "https://mishtimattu.framer.website/",
    icon: Globe,
  },
];

const Contact = () => {
  const [formData, setFormData] = useState({
    from: "",
    replyTo: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState<"draft" | "sent">("draft");
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!supabase) {
      toast.error("Supabase is not configured. Add VITE_SUPABASE_URL and VITE_SUPABASE_ANON_KEY to .env and restart the dev server.");
      return;
    }

    const name = formData.from.trim();
    const email = formData.replyTo.trim();
    const subject = formData.subject.trim();
    const body = formData.message.trim();

    if (name.length > 200) {
      toast.error("Name must be 200 characters or less.");
      return;
    }
    if (subject.length > 200) {
      toast.error("Subject must be 200 characters or less.");
      return;
    }
    if (body.length > 5000) {
      toast.error("Message must be 5000 characters or less.");
      return;
    }

    setSubmitting(true);
    const { error } = await supabase.from("contact_messages").insert({
      name,
      email,
      subject,
      message: body,
    });
    setSubmitting(false);

    if (error) {
      console.error(error);
      toast.error(error.message || "Could not send message. Check the table name and RLS policies in Supabase.");
      return;
    }

    setStatus("sent");
    toast.success("Message sent! I'll get back to you soon.");
    setTimeout(() => {
      setFormData({ from: "", replyTo: "", subject: "", message: "" });
      setStatus("draft");
    }, 2500);
  };

  return (
    <section id="contact" className="min-h-screen py-20 bg-retro-pattern relative">
      <div className="container mx-auto px-6">
        <div className="bg-retro-window border-4 border-retro-border shadow-retro max-w-6xl mx-auto overflow-hidden">
          <div className="flex items-center justify-between bg-retro-panel border-b-2 border-retro-border px-4 py-2">
            <div className="flex items-center gap-3">
              <Mail className="text-neon-magenta shrink-0" size={20} />
              <span className="font-pixel text-lg text-retro-ink leading-tight">
                Connect with me
              </span>
            </div>
            <div className="flex gap-2">
              <span className="w-3 h-3 bg-retro-border rounded-full" />
              <span className="w-3 h-3 bg-retro-border rounded-full" />
              <span className="w-3 h-3 bg-neon-magenta rounded-full" />
            </div>
          </div>

          <div className="pixel-mail-stage flex flex-col lg:flex-row min-h-[620px]">
            {/* Address book */}
            <aside className="pixel-mail-sidebar">
              <p className="font-pixel text-[8px] text-[hsl(278_32%_22%)] mb-3">ADDRESS BOOK</p>
              <div className="space-y-2">
                {addressBook.map((entry) => {
                  const Icon = entry.icon;
                  return (
                    <a
                      key={entry.id}
                      href={entry.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`pixel-mail-contact ${entry.featured ? "pixel-mail-contact--featured" : ""}`}
                    >
                      <Icon size={16} className="shrink-0 text-neon-purple" />
                      <div className="min-w-0">
                        <span className="pixel-mail-contact-name">{entry.label}</span>
                        <span className="pixel-mail-contact-handle">{entry.handle}</span>
                      </div>
                    </a>
                  );
                })}
              </div>
              <div className="pixel-mail-sidebar-footer">
                <a href="tel:+919987677759" className="pixel-mail-meta-link">
                  <Phone size={12} /> +91 9987677759
                </a>
                <div className="pixel-mail-meta-static">
                  <MapPin size={12} /> Mumbai, IN
                </div>
              </div>
            </aside>

            {/* Compose email */}
            <div className="pixel-mail-main flex-1 flex flex-col p-4 md:p-6">
              <div className="pixel-mail-window flex-1 flex flex-col">
                <div className="pixel-mail-titlebar">
                  <div className="flex items-center gap-2">
                    <Mail size={14} />
                    <span className="font-pixel text-[9px]">compose_message.eml</span>
                  </div>
                  <div className="flex gap-1" aria-hidden>
                    <span className="projects-winbtn" />
                    <span className="projects-winbtn projects-winbtn--min" />
                    <span className="projects-winbtn projects-winbtn--close" />
                  </div>
                </div>

                <div className="pixel-mail-menubar">
                  <span>File</span>
                  <span>Edit</span>
                  <span>View</span>
                  <span className="pixel-mail-menubar-active">Message</span>
                  <span>Help</span>
                </div>

                <div className="pixel-mail-toolbar">
                  <button type="button" className="pixel-mail-tool" disabled>
                    <Paperclip size={12} />
                    Attach
                  </button>
                  <span className="pixel-mail-toolbar-divider" />
                  <span className={`pixel-mail-status pixel-mail-status--${status}`}>
                    {status === "sent" ? "✓ Message sent!" : "● Draft saved"}
                  </span>
                </div>

                <form onSubmit={handleSubmit} className="pixel-mail-form flex-1 flex flex-col">
                  <div className="pixel-mail-headers">
                    <div className="pixel-mail-row">
                      <label htmlFor="mail-to">To:</label>
                      <span className="pixel-mail-row-value pixel-mail-row-value--fixed">
                        mishti@portfolio
                      </span>
                    </div>
                    <div className="pixel-mail-row">
                      <label htmlFor="mail-from">From:</label>
                      <input
                        id="mail-from"
                        type="text"
                        value={formData.from}
                        onChange={(e) => setFormData({ ...formData, from: e.target.value })}
                        className="pixel-mail-input"
                        placeholder="Your name"
                        required
                      />
                    </div>
                    <div className="pixel-mail-row">
                      <label htmlFor="mail-reply">Reply-To:</label>
                      <input
                        id="mail-reply"
                        type="email"
                        value={formData.replyTo}
                        onChange={(e) => setFormData({ ...formData, replyTo: e.target.value })}
                        className="pixel-mail-input"
                        placeholder="you@email.com"
                        required
                      />
                    </div>
                    <div className="pixel-mail-row pixel-mail-row--subject">
                      <label htmlFor="mail-subject">Subject:</label>
                      <input
                        id="mail-subject"
                        type="text"
                        value={formData.subject}
                        onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                        className="pixel-mail-input"
                        placeholder="What's this about?"
                        required
                      />
                    </div>
                  </div>

                  <div className="pixel-mail-body-wrap flex-1 flex flex-col">
                    <label htmlFor="mail-body" className="pixel-mail-body-label">
                      Message
                    </label>
                    <textarea
                      id="mail-body"
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="pixel-mail-body flex-1"
                      placeholder="Write your message here..."
                      required
                    />
                  </div>

                  <div className="pixel-mail-actions">
                    <button type="submit" className="pixel-mail-send" disabled={submitting}>
                      <Send size={14} />
                      {submitting ? "Sending…" : "Send Mail"}
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
