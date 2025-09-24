import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";
import LOGO from "../../../attached_assets/DV Logo White 02.png"

export default function Footer() {
  return (
    <footer className="bg-foreground text-background py-16">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div className="md:col-span-2">
            <div className="font-montserrat font-bold text-3xl mb-6">
                <img src={LOGO} alt="DigiVibe Logo" className="w-36 h-36" />
              {/* <span className="text-white" data-testid="text-footer-brand-digi">DiGi</span>
              <span className="text-secondary" data-testid="text-footer-brand-vibe">VIBE</span> */}
            </div>
            <p className="text-background/80 mb-6 leading-relaxed" data-testid="text-footer-description">
              North India's premier digital marketing agency helping businesses in Mohali, Chandigarh, Panchkula, and Zirakpur achieve measurable online growth.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://www.facebook.com/profile.php?id=61581429111500&ref=pl_edit_xav_ig_profile_page_web#" 
                className="w-10 h-10 bg-primary text-primary-foreground rounded-xl flex items-center justify-center hover:opacity-80 transition-opacity duration-200"
                data-testid="link-facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a 
                href="https://www.instagram.com/digi___vibe/" 
                className="w-10 h-10 bg-primary text-primary-foreground rounded-xl flex items-center justify-center hover:opacity-80 transition-opacity duration-200"
                data-testid="link-instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 bg-primary text-primary-foreground rounded-xl flex items-center justify-center hover:opacity-80 transition-opacity duration-200"
                data-testid="link-linkedin"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 bg-primary text-primary-foreground rounded-xl flex items-center justify-center hover:opacity-80 transition-opacity duration-200"
                data-testid="link-twitter"
              >
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg mb-6 text-secondary" data-testid="text-footer-location-services">Location Services</h3>
            <ul className="space-y-3">
              <li>
                <a href="/mohali-digital-marketing" className="text-background/80 hover:text-primary transition-colors duration-200" data-testid="link-mohali-digital-marketing">
                  Digital Marketing Mohali
                </a>
              </li>
              <li>
                <a href="/chandigarh-seo-services" className="text-background/80 hover:text-primary transition-colors duration-200" data-testid="link-chandigarh-seo">
                  SEO Services Chandigarh
                </a>
              </li>
              <li>
                <a href="/panchkula-social-media" className="text-background/80 hover:text-primary transition-colors duration-200" data-testid="link-panchkula-social-media">
                  Social Media Panchkula
                </a>
              </li>
              <li>
                <a href="/zirakpur-ppc-ads" className="text-background/80 hover:text-primary transition-colors duration-200" data-testid="link-zirakpur-ppc">
                  PPC Ads Zirakpur
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg mb-6 text-secondary" data-testid="text-footer-quick-links">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <a href="#about" className="text-background/80 hover:text-secondary transition-colors duration-200" data-testid="link-footer-about">
                  About Us
                </a>
              </li>
              <li>
                <a href="#services" className="text-background/80 hover:text-secondary transition-colors duration-200" data-testid="link-footer-services">
                  Our Services
                </a>
              </li>
              <li>
                <a href="#case-studies" className="text-background/80 hover:text-secondary transition-colors duration-200" data-testid="link-footer-case-studies">
                  Case Studies
                </a>
              </li>
              <li>
                <a href="#contact" className="text-background/80 hover:text-secondary transition-colors duration-200" data-testid="link-footer-contact">
                  Get Free Audit
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-background/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-background/60 mb-4 md:mb-0" data-testid="text-footer-copyright">
              © 2025 DIGIVIBE Digital Marketing Agency. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <a href="/privacy" className="text-background/60 hover:text-background transition-colors duration-200" data-testid="link-privacy">
                Privacy Policy
              </a>
              <a href="/terms" className="text-background/60 hover:text-background transition-colors duration-200" data-testid="link-terms">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
