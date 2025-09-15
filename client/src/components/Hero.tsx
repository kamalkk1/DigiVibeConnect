import { trackEvent } from "@/lib/analytics";
import { MapPin, ChartLine, Trophy } from "lucide-react";
import Prism from "./Prism";

export default function Hero() {
  const handleAuditClick = () => {
    trackEvent("click", "hero", "audit_cta");
  };

  const handleCasesClick = () => {
    trackEvent("click", "hero", "cases_cta");
  };

  return (
    <section className="relative pt-24 pb-20 overflow-hidden">
      {/* 🔹 Animated Prism Background */}
      <div className="absolute inset-0">
        <Prism
          animationType="rotate"
          timeScale={0.5}
          height={3.5}
          baseWidth={5.5}
          scale={3.6}
          hueShift={0}
          colorFrequency={1}
          noise={0}
          glow={1}
        />
      </div>

      {/* 🔹 Hero Content */}
      <div className="relative container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          {/* Location Tag */}
          <div className="inline-flex items-center px-4 py-2 bg-muted rounded-full text-muted-foreground text-sm font-medium mb-6">
            <MapPin className="w-4 h-4 text-primary mr-2" />
            <span data-testid="text-location">
              Serving Mohali • Chandigarh • Panchkula • Zirakpur
            </span>
          </div>

          {/* Headline */}
          <h1 className="font-poppins font-bold text-4xl md:text-6xl lg:text-7xl mb-6 leading-tight">
            <span className="gradient-text" data-testid="text-brand">
              DIGIVIBE
            </span>
            <br />
            <span data-testid="text-tagline-1">North India's Premier</span>
            <br />
            <span data-testid="text-tagline-2">Digital Growth Partner</span>
          </h1>

          {/* Subheadline */}
          <p
            className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed"
            data-testid="text-description"
          >
            Helping Mohali, Chandigarh & Tricity businesses grow with SEO, social
            media, and performance-driven digital strategies.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <a
              href="#contact"
              onClick={handleAuditClick}
              className="bg-primary text-primary-foreground px-8 py-4 rounded-xl font-semibold text-lg hover:opacity-90 transition-all duration-200 transform hover:scale-105"
              data-testid="button-free-audit"
            >
              <ChartLine className="inline w-5 h-5 mr-2" />
              Get Free Digital Audit
            </a>
            <a
              href="#case-studies"
              onClick={handleCasesClick}
              className="bg-card text-card-foreground px-8 py-4 rounded-xl font-semibold text-lg hover:bg-muted transition-all duration-200 transform hover:scale-105 border border-border"
              data-testid="button-success-stories"
            >
              <Trophy className="inline w-5 h-5 mr-2" />
              See Success Stories
            </a>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-2xl mx-auto">
            <div className="glass rounded-2xl px-6 py-4 text-center">
              <div
                className="font-bold text-2xl text-primary mb-1"
                data-testid="stat-businesses"
              >
                50+
              </div>
              <div
                className="text-sm text-muted-foreground"
                data-testid="stat-businesses-label"
              >
                North India Businesses
              </div>
            </div>
            <div className="glass rounded-2xl px-6 py-4 text-center">
              <div
                className="font-bold text-2xl text-secondary mb-1"
                data-testid="stat-rating"
              >
                ★ 5.0
              </div>
              <div
                className="text-sm text-muted-foreground"
                data-testid="stat-rating-label"
              >
                Google Partner Certified
              </div>
            </div>
            <div className="glass rounded-2xl px-6 py-4 text-center">
              <div
                className="font-bold text-2xl text-accent mb-1"
                data-testid="stat-roi"
              >
                300%
              </div>
              <div
                className="text-sm text-muted-foreground"
                data-testid="stat-roi-label"
              >
                Average ROI Increase
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
