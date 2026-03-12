import { Link } from "wouter";
import { Facebook, Instagram, Linkedin, Twitter, ExternalLink, ArrowUpRight } from "lucide-react";
import { brandInfo, footerLinks, products } from "@/lib/siteData";
import LOGO from "../../../attached_assets/DV Logo White 02.png";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#08080f] text-slate-300 py-16 border-t border-slate-800">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <Link href="/">
              <div className="inline-block cursor-pointer">
                <img src={LOGO} alt="DigiVibe Logo" className="w-28 h-28" />
              </div>
            </Link>
            <p className="text-slate-400 mb-6 leading-relaxed max-w-sm">
              {brandInfo.description}
            </p>
            <div className="flex space-x-4">
              <a 
                href={brandInfo.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-primary text-primary-foreground rounded-xl flex items-center justify-center hover:opacity-80 transition-opacity duration-200"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a 
                href={brandInfo.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-primary text-primary-foreground rounded-xl flex items-center justify-center hover:opacity-80 transition-opacity duration-200"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a 
                href={brandInfo.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-primary text-primary-foreground rounded-xl flex items-center justify-center hover:opacity-80 transition-opacity duration-200"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a 
                href={brandInfo.social.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-primary text-primary-foreground rounded-xl flex items-center justify-center hover:opacity-80 transition-opacity duration-200"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>
          
          {/* Services Column */}
          <div>
            <h3 className="font-semibold text-lg mb-6 text-secondary">Services</h3>
            <ul className="space-y-3">
              {footerLinks.services.map((link, idx) => (
                <li key={idx}>
                  <Link href={link.href}>
                    <span className="text-slate-400 hover:text-primary transition-colors duration-200 cursor-pointer">
                      {link.label}
                    </span>
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/services">
                  <span className="text-primary hover:opacity-80 transition-opacity cursor-pointer flex items-center gap-1">
                    View all <ArrowUpRight className="w-3 h-3" />
                  </span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Products Column */}
          <div>
            <h3 className="font-semibold text-lg mb-6 text-secondary flex items-center gap-2">
              Products
              <span className="text-xs bg-primary/20 text-primary px-2 py-0.5 rounded-full">BotomateX</span>
            </h3>
            <ul className="space-y-3">
              {products.map((product) => (
                <li key={product.id}>
                  <Link href={product.href}>
                    <span className="text-slate-400 hover:text-primary transition-colors duration-200 cursor-pointer flex items-center gap-2">
                      <span>{product.icon}</span>
                      {product.name}
                    </span>
                  </Link>
                </li>
              ))}
              <li>
                <a 
                  href="https://botomatex.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:opacity-80 transition-opacity flex items-center gap-1"
                >
                  Visit BotomateX <ExternalLink className="w-3 h-3" />
                </a>
              </li>
            </ul>
          </div>

          {/* Company Column */}
          <div>
            <h3 className="font-semibold text-lg mb-6 text-secondary">Company</h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link, idx) => (
                <li key={idx}>
                  <Link href={link.href}>
                    <span className="text-slate-400 hover:text-secondary transition-colors duration-200 cursor-pointer">
                      {link.label}
                    </span>
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/case-studies">
                  <span className="text-slate-400 hover:text-secondary transition-colors duration-200 cursor-pointer">
                    Case Studies
                  </span>
                </Link>
              </li>
              <li>
                <Link href="/blog">
                  <span className="text-slate-400 hover:text-secondary transition-colors duration-200 cursor-pointer">
                    Blog
                  </span>
                </Link>
              </li>
              <li>
                <Link href="/pricing">
                  <span className="text-slate-400 hover:text-secondary transition-colors duration-200 cursor-pointer">
                    Pricing
                  </span>
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Location Services */}
        <div className="border-t border-background/20 pt-8 mb-8">
          <h4 className="font-semibold text-sm mb-4 text-secondary">Location Services</h4>
          <div className="flex flex-wrap gap-x-6 gap-y-2">
            {footerLinks.locations.map((link, idx) => (
              <Link key={idx} href={link.href}>
                <span className="text-sm text-slate-500 hover:text-primary transition-colors cursor-pointer">
                  {link.label}
                </span>
              </Link>
            ))}
          </div>
        </div>
        
        {/* Bottom Bar */}
        <div className="border-t border-background/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-slate-500 text-sm">
              © {currentYear} {brandInfo.fullName}. All rights reserved.
            </p>
            <div className="flex items-center space-x-6">
              <Link href="/privacy">
                <span className="text-slate-500 hover:text-background transition-colors duration-200 text-sm cursor-pointer">
                  Privacy Policy
                </span>
              </Link>
              <Link href="/terms">
                <span className="text-slate-500 hover:text-background transition-colors duration-200 text-sm cursor-pointer">
                  Terms of Service
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
