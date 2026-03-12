import { useState, useRef, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X, ChevronDown, ExternalLink, Sparkles } from "lucide-react";
import { navigation, products } from "@/lib/siteData";
import LOGO from "../../../attached_assets/DV Logo White.png";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [location] = useLocation();
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setActiveDropdown(null);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
    setActiveDropdown(null);
  }, [location]);

  const isActive = (href: string) => {
    if (href === "/") return location === "/";
    return location.startsWith(href);
  };

  const handleDropdownEnter = (label: string) => {
    setActiveDropdown(label);
  };

  const handleDropdownLeave = () => {
    setActiveDropdown(null);
  };

  const handleMobileDropdownToggle = (label: string, e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setActiveDropdown(activeDropdown === label ? null : label);
  };

  const handleMobileLinkClick = () => {
    setIsMobileMenuOpen(false);
    setActiveDropdown(null);
  };

  return (
    <header className="relative w-full z-[60] bg-[#08080f]/80 backdrop-blur-xl border-b border-white/5 shadow-sm transition-all duration-300">
      <div className="container mx-auto px-6 py-2">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/">
            <div className="font-montserrat font-bold text-2xl text-black flex items-center cursor-pointer hover:opacity-90 transition-opacity">
              <img src={LOGO} alt="DigiVibe Logo" className="w-20 h-16" />
              <div className="flex">
                <span className="text-white">DiGi</span><span className="text-white">VIBE</span>
              </div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1" ref={dropdownRef}>
            {navigation.map((item) => (
              <div
                key={item.label}
                className="relative"
                onMouseEnter={() => item.children && handleDropdownEnter(item.label)}
                onMouseLeave={handleDropdownLeave}
              >
                <Link href={item.href}>
                  <span
                    className={`flex items-center px-4 py-2 rounded-lg text-white hover:bg-white/10 transition-all duration-200 cursor-pointer ${
                      isActive(item.href) ? "bg-white/15" : ""
                    } ${item.highlight ? "relative" : ""}`}
                  >
                    {item.label}
                    {item.children && <ChevronDown className="ml-1 w-4 h-4" />}
                    {item.highlight && (
                      <span className="absolute -top-1 -right-1 flex items-center justify-center w-4 h-4 bg-yellow-400 rounded-full">
                        <Sparkles className="w-3 h-3 text-gray-900" />
                      </span>
                    )}
                  </span>
                </Link>

                {/* Dropdown Menu */}
                {item.children && activeDropdown === item.label && (
                  <div className="absolute top-full left-0 mt-2 w-72 bg-card rounded-xl shadow-2xl border border-border overflow-hidden animate-in fade-in slide-in-from-top-2 duration-200">
                    <div className="p-2">
                      {item.children.map((child, idx) => (
                        <Link key={idx} href={child.href}>
                          <div
                            className={`flex items-start gap-3 p-3 rounded-lg hover:bg-muted transition-colors cursor-pointer ${
                              child.external ? "group" : ""
                            }`}
                          >
                            {child.icon && (
                              <span className="text-2xl flex-shrink-0">{child.icon}</span>
                            )}
                            <div className="flex-1">
                              <div className="flex items-center gap-2">
                                <span className="font-medium text-foreground">{child.label}</span>
                                {child.external && (
                                  <ExternalLink className="w-3 h-3 text-muted-foreground group-hover:text-primary" />
                                )}
                              </div>
                              {child.description && (
                                <p className="text-sm text-muted-foreground mt-0.5">
                                  {child.description}
                                </p>
                              )}
                            </div>
                          </div>
                        </Link>
                      ))}
                    </div>
                    
                    {/* BotomateX CTA for Products dropdown */}
                    {item.label === "Products" && (
                      <div className="border-t border-border p-3 bg-gradient-to-r from-primary/10 to-secondary/10">
                        <a
                          href="https://botomatex.com"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center justify-center gap-2 w-full py-2 px-4 bg-primary text-primary-foreground rounded-lg font-medium hover:opacity-90 transition-opacity"
                        >
                          Explore BotomateX
                          <ExternalLink className="w-4 h-4" />
                        </a>
                      </div>
                    )}
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* CTA Button - Desktop */}
          <Link href="/contact">
            <span className="hidden lg:inline-flex bg-white text-primary px-6 py-2.5 rounded-lg font-semibold hover:bg-white/90 transition-all duration-200 cursor-pointer shadow-lg">
              Get Free Audit
            </span>
          </Link>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden text-white p-2"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden pb-6 border-t border-white/20 mt-4 pt-4 animate-in slide-in-from-top-2 duration-200">
            <nav className="flex flex-col space-y-1">
              {navigation.map((item) => (
                <div key={item.label}>
                  {item.children ? (
                    <div>
                      {/* Parent item with dropdown - header row */}
                      <div className="flex items-center">
                        {/* Link to main page */}
                        <Link href={item.href}>
                          <span 
                            onClick={handleMobileLinkClick}
                            className={`flex-1 px-4 py-3 text-white hover:bg-white/10 rounded-l-lg transition-colors cursor-pointer ${
                              isActive(item.href) ? "bg-white/15" : ""
                            }`}
                          >
                            <span className="flex items-center gap-2">
                              {item.label}
                              {item.highlight && (
                                <span className="flex items-center justify-center w-5 h-5 bg-yellow-400 rounded-full">
                                  <Sparkles className="w-3 h-3 text-gray-900" />
                                </span>
                              )}
                            </span>
                          </span>
                        </Link>
                        {/* Dropdown toggle button */}
                        <button
                          onClick={(e) => handleMobileDropdownToggle(item.label, e)}
                          className="px-4 py-3 text-white hover:bg-white/10 rounded-r-lg transition-colors"
                          aria-label={`Toggle ${item.label} submenu`}
                        >
                          <ChevronDown
                            className={`w-5 h-5 transition-transform ${
                              activeDropdown === item.label ? "rotate-180" : ""
                            }`}
                          />
                        </button>
                      </div>
                      
                      {/* Dropdown children */}
                      {activeDropdown === item.label && (
                        <div className="ml-4 mt-2 space-y-1 border-l-2 border-white/20 pl-4 animate-in slide-in-from-top-2 duration-150">
                          {item.children.map((child, idx) => (
                            <Link key={idx} href={child.href}>
                              <span 
                                onClick={handleMobileLinkClick}
                                className="flex items-center gap-3 px-4 py-3 text-white/80 hover:text-white hover:bg-white/10 rounded-lg transition-colors cursor-pointer"
                              >
                                {child.icon && <span className="text-xl">{child.icon}</span>}
                                <div className="flex-1">
                                  <span className="font-medium">{child.label}</span>
                                  {child.description && (
                                    <p className="text-xs text-white/60 mt-0.5">{child.description}</p>
                                  )}
                                </div>
                              </span>
                            </Link>
                          ))}
                          
                          {/* BotomateX external link for Products */}
                          {item.label === "Products" && (
                            <a
                              href="https://botomatex.com"
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex items-center gap-3 px-4 py-3 text-yellow-400 hover:text-yellow-300 hover:bg-white/10 rounded-lg transition-colors"
                            >
                              <span className="text-xl">🌐</span>
                              <span className="font-medium">Visit BotomateX.com</span>
                              <ExternalLink className="w-4 h-4 ml-auto" />
                            </a>
                          )}
                        </div>
                      )}
                    </div>
                  ) : (
                    <Link href={item.href}>
                      <span
                        onClick={handleMobileLinkClick}
                        className={`block px-4 py-3 text-white hover:bg-white/10 rounded-lg transition-colors cursor-pointer ${
                          isActive(item.href) ? "bg-white/15" : ""
                        }`}
                      >
                        {item.label}
                      </span>
                    </Link>
                  )}
                </div>
              ))}
              
              {/* Mobile CTA */}
              <Link href="/contact">
                <span 
                  onClick={handleMobileLinkClick}
                  className="block mt-4 mx-4 py-3 bg-white text-primary text-center rounded-lg font-semibold cursor-pointer"
                >
                  Get Free Audit
                </span>
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
