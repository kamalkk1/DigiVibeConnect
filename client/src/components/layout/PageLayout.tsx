import { useEffect } from "react";
import { useLocation } from "wouter";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";

interface PageLayoutProps {
  children: React.ReactNode;
  title?: string;
  description?: string;
  canonical?: string;
  ogImage?: string;
  showHeader?: boolean;
  showFooter?: boolean;
  className?: string;
  keywords?: string;
  schema?: Record<string, any> | Record<string, any>[];
}

export default function PageLayout({
  children,
  title = "DigiVibe - Digital Marketing Agency",
  description = "DigiVibe is a premier digital marketing agency in Mohali.",
  canonical,
  ogImage,
  showHeader = true,
  showFooter = true,
  className = "",
  keywords,
  schema
}: PageLayoutProps) {
  const [location] = useLocation();

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [location]);

  return (
    <div className={`min-h-screen bg-background text-foreground overflow-x-hidden ${className}`}>
      <SEO 
        title={title}
        description={description}
        canonical={canonical || location}
        ogImage={ogImage}
        keywords={keywords}
        schema={schema}
      />
      {showHeader && <Header />}
      <main>{children}</main>
      {showFooter && <Footer />}
    </div>
  );
}
