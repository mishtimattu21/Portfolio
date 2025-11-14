import { useState, useEffect, useRef } from "react";
import { X, Maximize2, Minimize2 } from "lucide-react";

interface TerminalProps {
  isOpen: boolean;
  onClose: () => void;
}

const Terminal = ({ isOpen, onClose }: TerminalProps) => {
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [input, setInput] = useState("");
  const [history, setHistory] = useState<{ command: string; output: string[] }[]>([
    {
      command: "",
      output: [
        "Welcome to Mishti's Terminal v1.0",
        "Type 'help' to see available commands",
        "",
      ],
    },
  ]);
  const inputRef = useRef<HTMLInputElement>(null);
  const outputRef = useRef<HTMLDivElement>(null);

  const commands: Record<string, string[]> = {
    help: [
      "Available commands:",
      "  about    - Learn about me",
      "  skills   - View my technical skills",
      "  projects - See my projects",
      "  contact  - Get my contact information",
      "  resume   - View/download my resume",
      "  clear    - Clear the terminal",
      "  exit     - Close terminal",
    ],
    about: [
      "Hey! I'm Mishti 👋",
      "",
      "I'm a creative developer passionate about building",
      "beautiful and functional web experiences.",
      "I love combining design with code to create",
      "something truly special.",
    ],
    skills: [
      "Technical Skills:",
      "  • Frontend: React, TypeScript, Tailwind CSS",
      "  • Backend: Node.js, Python, PostgreSQL",
      "  • Tools: Git, Docker, Figma",
      "  • AI/ML: TensorFlow, OpenAI API",
    ],
    projects: [
      "Featured Projects:",
      "  1. Portfolio Website - The site you're on!",
      "  2. AI Chatbot - Conversational AI assistant",
      "  3. E-commerce Platform - Full-stack shop",
      "  4. Data Visualizer - Interactive charts",
      "",
      "Visit the Projects section for more details!",
    ],
    contact: [
      "Let's connect!",
      "  Email: mishti@example.com",
      "  GitHub: github.com/mishti",
      "  LinkedIn: linkedin.com/in/mishti",
      "  Twitter: @mishti_dev",
    ],
    resume: [
      "Opening resume...",
      "Download: mishti-resume.pdf",
      "",
      "(In a real implementation, this would download the PDF)",
    ],
    clear: [],
    exit: ["Closing terminal..."],
  };

  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  useEffect(() => {
    if (outputRef.current) {
      outputRef.current.scrollTop = outputRef.current.scrollHeight;
    }
  }, [history]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const trimmedInput = input.trim().toLowerCase();

    if (!trimmedInput) {
      setInput("");
      return;
    }

    if (trimmedInput === "exit") {
      onClose();
      return;
    }

    let output: string[];
    if (trimmedInput === "clear") {
      setHistory([]);
      setInput("");
      return;
    } else if (commands[trimmedInput]) {
      output = commands[trimmedInput];
    } else {
      output = [
        `Command not found: ${trimmedInput}`,
        "Type 'help' for available commands",
      ];
    }

    setHistory([...history, { command: trimmedInput, output }]);
    setInput("");
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-background/80 backdrop-blur-sm">
      <div
        className={`${
          isFullscreen ? "w-full h-full" : "w-full max-w-3xl h-[600px]"
        } bg-card border-2 border-neon-cyan rounded-lg shadow-2xl glow-cyan flex flex-col transition-all duration-300`}
      >
        {/* Terminal Header */}
        <div className="flex items-center justify-between px-4 py-2 border-b border-neon-cyan/30 bg-dark-navy">
          <div className="flex items-center gap-2">
            <div className="flex gap-1.5">
              <div className="w-3 h-3 rounded-full bg-destructive"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
              <div className="w-3 h-3 rounded-full bg-green-500"></div>
            </div>
            <span className="text-sm font-pixel text-neon-cyan ml-4">
              mishti@terminal
            </span>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={() => setIsFullscreen(!isFullscreen)}
              className="text-foreground hover:text-neon-cyan transition-colors"
            >
              {isFullscreen ? <Minimize2 size={18} /> : <Maximize2 size={18} />}
            </button>
            <button
              onClick={onClose}
              className="text-foreground hover:text-destructive transition-colors"
            >
              <X size={18} />
            </button>
          </div>
        </div>

        {/* Terminal Body */}
        <div
          ref={outputRef}
          className="flex-1 overflow-y-auto p-4 font-mono text-sm bg-background"
        >
          {history.map((entry, i) => (
            <div key={i} className="mb-4">
              {entry.command && (
                <div className="flex items-center gap-2 text-neon-cyan">
                  <span className="text-neon-purple">mishti@terminal:~$</span>
                  <span>{entry.command}</span>
                </div>
              )}
              {entry.output.map((line, j) => (
                <div key={j} className="text-foreground pl-0 mt-1">
                  {line}
                </div>
              ))}
            </div>
          ))}
          <form onSubmit={handleSubmit} className="flex items-center gap-2">
            <span className="text-neon-purple">mishti@terminal:~$</span>
            <input
              ref={inputRef}
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              className="flex-1 bg-transparent text-neon-cyan outline-none border-none"
              autoComplete="off"
              spellCheck="false"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Terminal;
