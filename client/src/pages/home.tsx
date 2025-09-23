import { useEffect } from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import CaseStudies from "@/components/CaseStudies";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import IndustriesSection from "@/components/IndustriesSection";
import TestimonialSlider from "@/components/TestimonialSlider";
export default function Home() {
  useEffect(() => {
    // Smooth scrolling for anchor links
    const handleClick = (e: Event) => {
      const target = e.target as HTMLAnchorElement;
      if (target.getAttribute('href')?.startsWith('#')) {
        e.preventDefault();
        const elementId = target.getAttribute('href')?.substring(1);
        const element = elementId ? document.getElementById(elementId) : null;
        if (element) {
          element.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }
      }
    };

    document.addEventListener('click', handleClick);
    return () => document.removeEventListener('click', handleClick);
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Header />
      <Hero />
      <About />
      <IndustriesSection/>
      <TestimonialSlider/>
      <Services />
      <CaseStudies />
      <Contact />
      <Footer />
      
      {/* Local Business Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "DIGIVIBE Digital Marketing Agency",
            "description": "Digital marketing agency in Mohali specializing in SEO, social media & lead generation for North India businesses.",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Mohali",
              "addressRegion": "Punjab",
              "addressCountry": "India"
            },
            "telephone": "+91-XXXX-XXXXXX",
            "url": "https://digivibe.in",
            "areaServed": ["Mohali", "Chandigarh", "Panchkula", "Zirakpur"]
          })
        }}
      />
    </div>
  );
}
