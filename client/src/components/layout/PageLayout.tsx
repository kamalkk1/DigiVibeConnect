import { useEffect } from "react";
import { useLocation } from "wouter";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

interface PageLayoutProps {
  children: React.ReactNode;
  title?: string;
  description?: string;
  showHeader?: boolean;
  showFooter?: boolean;
  className?: string;
}

export default function PageLayout({
  children,
  title,
  description,
  showHeader = true,
  showFooter = true,
  className = ""
}: PageLayoutProps) {
  const [location] = useLocation();

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [location]);

  // Update document title
  useEffect(() => {
    if (title) {
      document.title = `${title} | DigiVibe`;
    }
  }, [title]);

  // Update meta description
  useEffect(() => {
    if (description) {
      const metaDescription = document.querySelector('meta[name="description"]');
      if (metaDescription) {
        metaDescription.setAttribute("content", description);
      }
    }
  }, [description]);

  return (
    <div className={`min-h-screen bg-background text-foreground overflow-x-hidden ${className}`}>
      {showHeader && <Header />}
      <main>{children}</main>
      {showFooter && <Footer />}
    </div>
  );
}
