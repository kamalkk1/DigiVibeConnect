import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 w-full z-50 glass">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="font-montserrat font-bold text-2xl gradient-text">
            DiGiVIBE
          </div>
          
          <nav className="hidden md:flex space-x-8">
            <a href="#services" className="text-foreground hover:text-primary transition-colors duration-200" data-testid="nav-services">
              Services
            </a>
            <a href="#case-studies" className="text-foreground hover:text-primary transition-colors duration-200" data-testid="nav-case-studies">
              Case Studies
            </a>
            <a href="#about" className="text-foreground hover:text-primary transition-colors duration-200" data-testid="nav-about">
              About
            </a>
            <a href="#contact" className="text-foreground hover:text-primary transition-colors duration-200" data-testid="nav-contact">
              Contact
            </a>
          </nav>
          
          <button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-foreground"
            data-testid="button-mobile-menu"
          >
            {isMobileMenuOpen ? <X className="text-xl" /> : <Menu className="text-xl" />}
          </button>
          
          <a 
            href="#contact" 
            className="hidden md:inline-flex bg-primary text-primary-foreground px-6 py-2 rounded-lg font-medium hover:opacity-90 transition-opacity duration-200"
            data-testid="button-get-audit"
          >
            Get Free Audit
          </a>
        </div>
        
        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-border glass rounded-lg mt-2">
            <nav className="flex flex-col space-y-4 pt-4">
              <a href="#services" className="text-foreground hover:text-primary transition-colors duration-200" data-testid="mobile-nav-services">
                Services
              </a>
              <a href="#case-studies" className="text-foreground hover:text-primary transition-colors duration-200" data-testid="mobile-nav-case-studies">
                Case Studies
              </a>
              <a href="#about" className="text-foreground hover:text-primary transition-colors duration-200" data-testid="mobile-nav-about">
                About
              </a>
              <a href="#contact" className="text-foreground hover:text-primary transition-colors duration-200" data-testid="mobile-nav-contact">
                Contact
              </a>
              <a href="#contact" className="bg-primary text-primary-foreground px-6 py-2 rounded-lg font-medium text-center" data-testid="mobile-button-get-audit">
                Get Free Audit
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
