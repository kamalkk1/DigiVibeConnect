
import { useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { generateOrganizationSchema, generateWebPageSchema, generateFAQSchema } from "@/lib/schema";
import { landingFaqs } from "@/lib/siteData";

// Landing Page Components
import StickyBanner from "@/components/landing/StickyBanner";
import Hero from "@/components/Hero";
import PainSection from "@/components/landing/PainSection";
import SolutionSection from "@/components/landing/SolutionSection";
import ProductsSection from "@/components/landing/ProductsSection";
import ComparisonSection from "@/components/landing/ComparisonSection";
import IndustriesSection from "@/components/landing/IndustriesSection";
import OfferSection from "@/components/landing/OfferSection";
import FAQSection from "@/components/landing/FAQSection";
import FinalCTA from "@/components/landing/FinalCTA";
import AuditWidget from "@/components/landing/AuditWidget";

export default function Home() {
  useEffect(() => {
    // Smooth scrolling for anchor links
    const handleClick = (e: Event) => {
      const target = e.target as HTMLAnchorElement;
      const href = target.getAttribute('href');
      
      if (href?.startsWith('#')) {
        e.preventDefault();
        const elementId = href.substring(1);
        const element = elementId ? document.getElementById(elementId) : null;
        if (element) {
            // Account for sticky header/banner offset
            const offset = 100; 
            const elementPosition = element.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - offset;
        
            window.scrollTo({
                top: offsetPosition,
                behavior: "smooth"
            });
        }
      }
    };

    // Attach to all anchor links with hash
    const links = document.querySelectorAll('a[href^="#"]');
    links.forEach(link => {
        link.addEventListener('click', handleClick as any);
    });

    return () => {
        links.forEach(link => {
            link.removeEventListener('click', handleClick as any);
        });
    };
  }, []);

  return (
    <div className="min-h-screen bg-[#08080f] text-slate-200 font-sans overflow-x-hidden selection:bg-purple-500/30">
      <SEO 
        title="DigiVibe - Premier Digital Marketing Agency in Mohali & Tricity"
        description="DigiVibe is a top-rated digital marketing agency in Mohali offering expert SEO, social media marketing, PPC, and web design services to grow your business."
        canonical="/"
        schema={[
          generateOrganizationSchema(),
          generateWebPageSchema(
            "DigiVibe - Premier Digital Marketing Agency in Mohali & Tricity",
            "DigiVibe is a top-rated digital marketing agency in Mohali offering expert SEO, social media marketing, PPC, and web design services to grow your business.",
            "/"
          ),
          generateFAQSchema(landingFaqs)
        ]}
      />
      <div className="fixed top-0 left-0 right-0 z-50 flex flex-col">
        <StickyBanner />
        <Header />
      </div>
      
      <main>
        <Hero />
        <PainSection />
        <SolutionSection />
        <ProductsSection />
        <ComparisonSection />
        <IndustriesSection />
        <OfferSection />
        <FAQSection />
        <FinalCTA />
      </main>

      <Footer />
      <AuditWidget />
      
      {/* Local Business Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "Digivibe — Enterprise AI for Local Businesses",
            "description": "We deploy Voice AI, lead capture bots, and WhatsApp automation into your business. Enterprise-grade AI growth for local businesses doing ₹2-10 Crore.",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Mohali",
              "addressRegion": "Punjab",
              "addressCountry": "India"
            },
            "url": "https://digivibe.in",
            "areaServed": ["Mohali", "Chandigarh", "Panchkula", "Zirakpur", "pan-India"],
            "priceRange": "₹₹"
          })
        }}
      />
    </div>
  );
}
