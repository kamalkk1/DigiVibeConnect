import { trackEvent } from "@/lib/analytics";
import DigitalMArketing from "../../../attached_assets/Sequence.gif";
import { ChartLine, Trophy } from "lucide-react";
import Aurora from "./Aurora";

export default function Hero() {
  const handleAuditClick = () => {
    trackEvent("click", "hero", "audit_cta");
  };

  const handleCasesClick = () => {
    trackEvent("click", "hero", "cases_cta");
  };

  return (
      <section className="relative pt-44 pb-20 overflow-hidden bg-background">
      {/* 🌌 Aurora Background */}
      {/* <div className="absolute inset-0 z-0">
        <Aurora
          colorStops={["", "#FF94B4", "#FF3232"]}
          blend={1.5}
          amplitude={1.0}
          speed={0.5}
        />
      </div> */}

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-left max-w-2xl mx-auto lg:mx-0">
            <h1 className="font-poppins font-bold text-4xl md:text-6xl lg:text-7xl mb-6 leading-tight">
              <span className="gradient-text" data-testid="text-brand">
                North India's Premier
              </span>
              <br />
              <span data-testid="text-tagline-2" className="text-4xl">
                Digital Growth Partner
              </span>
            </h1>

            <p
              className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed"
              data-testid="text-description"
            >
              Helping Mohali, Chandigarh & Tricity businesses grow with SEO,
              social media, and performance-driven digital strategies.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <a
                href="#contact"
                onClick={handleAuditClick}
                className="bg-primary text-primary-foreground px-8 py-4 rounded-xl text-nowrap font-semibold text-lg hover:opacity-90 transition-all duration-200 transform hover:scale-105"
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
          </div>

          {/* Right Image */}
          <div className="flex justify-center lg:justify-end">
            <img
              src={DigitalMArketing}
              alt="Hero Visual"
              className="w-full max-w-md lg:max-w-lg rounded-xl shadow-xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
