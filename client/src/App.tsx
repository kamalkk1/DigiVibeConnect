import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { useEffect } from "react";
import { initGA } from "./lib/analytics";
import { useAnalytics } from "./hooks/use-analytics";

// Pages
import Home from "@/pages/home";
import NotFound from "@/pages/not-found";
import AboutPage from "@/pages/about";
import TeamPage from "@/pages/team";
import ContactPage from "@/pages/contact";
import PricingPage from "@/pages/pricing";
import PrivacyPage from "@/pages/privacy";
import TermsPage from "@/pages/terms";

// Products (BotomateX)
import ProductsHub from "@/pages/products/index";
import LeadFlowPage from "@/pages/products/leadflow";
import ChatterBotPage from "@/pages/products/chatterbot";
import VoiceAIPage from "@/pages/products/voiceai";

// Services
import ServicesHub from "@/pages/services/index";
import ServiceDetail from "@/pages/services/ServiceDetail";

// Case Studies
import CaseStudiesHub from "@/pages/case-studies/index";

// Blog
import BlogHub from "@/pages/blog/index";
import BlogPostDetail from "@/pages/blog/BlogPostDetail";

function Router() {
  useAnalytics();
  
  return (
    <Switch>
      {/* Main Pages */}
      <Route path="/" component={Home} />
      <Route path="/about" component={AboutPage} />
      <Route path="/team" component={TeamPage} />
      <Route path="/contact" component={ContactPage} />
      <Route path="/pricing" component={PricingPage} />
      
      {/* Products (BotomateX) */}
      <Route path="/products" component={ProductsHub} />
      <Route path="/products/leadflow" component={LeadFlowPage} />
      <Route path="/products/chatterbot" component={ChatterBotPage} />
      <Route path="/products/voiceai" component={VoiceAIPage} />
      
      {/* Services */}
      <Route path="/services" component={ServicesHub} />
      <Route path="/services/:slug" component={ServiceDetail} />
      
      {/* Case Studies */}
      <Route path="/case-studies" component={CaseStudiesHub} />
      
      {/* Blog */}
      <Route path="/blog" component={BlogHub} />
      <Route path="/blog/:slug" component={BlogPostDetail} />
      
      {/* Legal */}
      <Route path="/privacy" component={PrivacyPage} />
      <Route path="/terms" component={TermsPage} />
      
      {/* Fallback to 404 */}
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  // Initialize Google Analytics when app loads
  useEffect(() => {
    // Verify required environment variable is present
    if (!import.meta.env.VITE_GA_MEASUREMENT_ID) {
      console.warn('Missing required Google Analytics key: VITE_GA_MEASUREMENT_ID');
    } else {
      initGA();
    }
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Router />
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
