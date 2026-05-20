import { useState } from "react";
import { Send, User, Briefcase, Code, Gamepad2, Mail } from "lucide-react";
import Navbar from "@/components/Navbar";
import avatarMemoji from "@/assets/avatar-memoji.png";

const AIPortfolio = () => {
  const [message, setMessage] = useState("");
  const [chatHistory, setChatHistory] = useState<{ role: string; content: string }[]>([
    {
      role: "assistant",
      content: "Hi! I'm Mishti's AI assistant. Ask me anything about Mishti's work, skills, or projects!",
    },
  ]);

  const quickActions = [
    { icon: User, label: "Me", query: "Tell me about Mishti" },
    { icon: Briefcase, label: "Projects", query: "What projects has Mishti worked on?" },
    { icon: Code, label: "Skills", query: "What are Mishti's technical skills?" },
    { icon: Gamepad2, label: "Fun", query: "Tell me something fun about Mishti" },
    { icon: Mail, label: "Contact", query: "How can I contact Mishti?" },
  ];

  const handleQuickAction = (query: string) => {
    handleSendMessage(query);
  };

  const handleSendMessage = (text?: string) => {
    const messageToSend = text || message;
    if (!messageToSend.trim()) return;

    setChatHistory([
      ...chatHistory,
      { role: "user", content: messageToSend },
      {
        role: "assistant",
        content: getAIResponse(messageToSend),
      },
    ]);
    setMessage("");
  };

  const getAIResponse = (query: string): string => {
    const lowerQuery = query.toLowerCase();

    if (lowerQuery.includes("project")) {
      return "Key projects: Bodhini (multilingual RAG AI assistant), Informula (AI consumer safety platform), Civixity (civic engagement with AI priority scoring), and CNN-based tea leaf disease detection research published in Elsevier. Check the Projects section for GitHub links!";
    } else if (lowerQuery.includes("skill")) {
      return "Skills span Python, Java, C/C++, JavaScript/TypeScript, PyTorch, TensorFlow, React, Node.js, Flask, PostgreSQL, MongoDB, AWS, Docker, Git, and Agile/Scrum. See the Skills section for the full breakdown.";
    } else if (lowerQuery.includes("fun")) {
      return "Mishti loves hackathons—runner-up at Intel OneAPI GENAI and Wissen CodeStorm, finalist at Accenture Innovation Challenge and FedEx SMART Hackathon. Also a Perplexity Campus Partner (2025) and published ML researcher!";
    } else if (lowerQuery.includes("contact")) {
      return "Reach Mishti on Instagram (@mishtiimattu) or call +91 9987677759. Connect on GitHub (mishtimattu21), LinkedIn (mishtimattu), or visit mishtimattu.framer.website.";
    } else if (lowerQuery.includes("about") || lowerQuery.includes("who")) {
      return "Mishti Mattu is a B.Tech CSE student at VIT Chennai (CGPA 9.30). Summer Intern at Citi Corp (2026), ML Research Engineer at CCPS VIT, and passionate about AI/ML, full-stack development, and fintech innovation.";
    } else {
      return "That's a great question! I can tell you about Mishti's projects, skills, background, or how to get in touch. What would you like to know?";
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-dark-navy to-background">
      <Navbar />

      <main className="container mx-auto px-6 pt-32 pb-20">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12 animate-slide-up">
            <div className="w-32 h-32 mx-auto mb-6 rounded-full overflow-hidden border-4 border-neon-cyan glow-cyan">
              <img
                src={avatarMemoji}
                alt="Mishti Avatar"
                className="w-full h-full object-cover"
              />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-neon-cyan via-neon-purple to-neon-magenta bg-clip-text text-transparent">
              Hey, I'm Mishti 👋
            </h1>
            <h2 className="text-2xl md:text-3xl font-bold text-neon-purple mb-4">
              AI Portfolio
            </h2>
            <p className="text-muted-foreground text-lg">
              Ask me anything about my work, skills, and projects!
            </p>
          </div>

          {/* Quick Action Buttons */}
          <div className="flex flex-wrap justify-center gap-3 mb-8">
            {quickActions.map((action, idx) => (
              <button
                key={idx}
                onClick={() => handleQuickAction(action.query)}
                className="flex items-center gap-2 px-4 py-2 bg-card/50 backdrop-blur rounded-full border border-border hover:border-neon-cyan hover:shadow-lg transition-all group"
              >
                <action.icon
                  size={18}
                  className="text-neon-cyan group-hover:scale-110 transition-transform"
                />
                <span className="text-foreground font-medium">{action.label}</span>
              </button>
            ))}
          </div>

          {/* Chat Interface */}
          <div className="bg-card/50 backdrop-blur rounded-2xl border border-neon-cyan/30 overflow-hidden shadow-2xl">
            {/* Chat Messages */}
            <div className="h-[400px] overflow-y-auto p-6 space-y-4">
              {chatHistory.map((msg, idx) => (
                <div
                  key={idx}
                  className={`flex ${
                    msg.role === "user" ? "justify-end" : "justify-start"
                  } animate-slide-up`}
                >
                  <div
                    className={`max-w-[80%] px-4 py-3 rounded-2xl ${
                      msg.role === "user"
                        ? "bg-gradient-to-r from-neon-cyan to-neon-purple text-foreground"
                        : "bg-muted text-foreground"
                    }`}
                  >
                    <p className="text-sm leading-relaxed">{msg.content}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Chat Input */}
            <div className="border-t border-border p-4">
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  handleSendMessage();
                }}
                className="flex gap-3"
              >
                <input
                  type="text"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Ask me anything..."
                  className="flex-1 px-4 py-3 bg-background border border-border rounded-full focus:outline-none focus:border-neon-cyan transition-colors text-foreground"
                />
                <button
                  type="submit"
                  className="px-6 py-3 bg-gradient-to-r from-neon-cyan to-neon-purple rounded-full text-foreground font-semibold hover:shadow-lg hover:scale-105 transition-all flex items-center gap-2"
                >
                  <Send size={18} />
                </button>
              </form>
            </div>
          </div>

          {/* Footer Info */}
          <div className="text-center mt-8 text-muted-foreground text-sm">
            <p>
              This AI assistant provides quick answers about Mishti's portfolio.
              For detailed inquiries, please use the{" "}
              <a href="/#contact" className="text-neon-cyan hover:underline">
                contact form
              </a>
              .
            </p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default AIPortfolio;
