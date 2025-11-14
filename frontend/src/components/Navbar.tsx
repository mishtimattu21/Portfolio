import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setMobileMenuOpen(false);
    }
  };

  const isMainPage = location.pathname === "/";

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "frosted-glass border-b border-border/50" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link
            to="/"
            className="text-xl font-bold font-pixel text-neon-cyan hover:glow-cyan transition-all"
          >
            MISHTI
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            {isMainPage ? (
              <>
                <button
                  onClick={() => scrollToSection("home")}
                  className="text-foreground hover:text-neon-cyan transition-colors"
                >
                  Home
                </button>
                <button
                  onClick={() => scrollToSection("projects")}
                  className="text-foreground hover:text-neon-cyan transition-colors"
                >
                  Projects
                </button>
                <button
                  onClick={() => scrollToSection("contact")}
                  className="text-foreground hover:text-neon-cyan transition-colors"
                >
                  Contact
                </button>
              </>
            ) : (
              <Link
                to="/"
                className="text-foreground hover:text-neon-cyan transition-colors"
              >
                Main Portfolio
              </Link>
            )}
            <Link
              to="/ai-portfolio"
              className="px-4 py-2 bg-gradient-to-r from-neon-cyan to-neon-purple rounded-lg text-foreground font-semibold hover:shadow-lg hover:scale-105 transition-all"
            >
              AI Portfolio
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-foreground hover:text-neon-cyan transition-colors"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 space-y-4 frosted-glass rounded-lg p-4">
            {isMainPage ? (
              <>
                <button
                  onClick={() => scrollToSection("home")}
                  className="block w-full text-left text-foreground hover:text-neon-cyan transition-colors"
                >
                  Home
                </button>
                <button
                  onClick={() => scrollToSection("projects")}
                  className="block w-full text-left text-foreground hover:text-neon-cyan transition-colors"
                >
                  Projects
                </button>
                <button
                  onClick={() => scrollToSection("contact")}
                  className="block w-full text-left text-foreground hover:text-neon-cyan transition-colors"
                >
                  Contact
                </button>
              </>
            ) : (
              <Link
                to="/"
                className="block text-foreground hover:text-neon-cyan transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Main Portfolio
              </Link>
            )}
            <Link
              to="/ai-portfolio"
              className="block text-center px-4 py-2 bg-gradient-to-r from-neon-cyan to-neon-purple rounded-lg text-foreground font-semibold"
              onClick={() => setMobileMenuOpen(false)}
            >
              AI Portfolio
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
