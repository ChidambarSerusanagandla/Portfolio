
import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/theme/ThemeToggle";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 bg-background/80 backdrop-blur-sm z-50 border-b">
      <div className="container mx-auto px-4 md:px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Theme Toggle on the far left */}
          <ThemeToggle />

          {/* Desktop Navigation on the right */}
          <div className="flex items-center space-x-4">
            {/* Desktop Navigation Links */}
            <div className="hidden md:flex items-center space-x-6">
              <NavLinks />
            </div>

            {/* Mobile Navigation Toggle */}
            <div className="md:hidden">
              <Button variant="ghost" size="icon" onClick={toggleMenu} aria-label="Toggle menu">
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-background border-b absolute w-full py-4">
          <div className="container mx-auto px-4 flex flex-col space-y-4">
            <NavLinks onClick={() => setIsMenuOpen(false)} />
          </div>
        </div>
      )}
    </nav>
  );
};

const NavLinks = ({ onClick }: { onClick?: () => void }) => {
  return (
    <>
      <a href="#about" className="hover:text-primary transition-colors" onClick={onClick}>
        About
      </a>
      <a href="#skills" className="hover:text-primary transition-colors" onClick={onClick}>
        Skills
      </a>
      <a href="#experiences" className="hover:text-primary transition-colors" onClick={onClick}>
        Experiences
      </a>
      <a href="#contact" className="hover:text-primary transition-colors" onClick={onClick}>
        Contact
      </a>
    </>
  );
};

export default Navbar;

