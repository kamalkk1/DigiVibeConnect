import { Link } from "wouter";
import { ArrowRight, TrendingUp, Filter } from "lucide-react";
import { useState } from "react";
import PageLayout from "@/components/layout/PageLayout";
import { caseStudies, services } from "@/lib/siteData";

export default function CaseStudiesHub() {
  const [activeFilter, setActiveFilter] = useState<string>("all");

  const industries = ["all", ...Array.from(new Set(caseStudies.map(cs => cs.industry)))];
  
  const filteredStudies = activeFilter === "all" 
    ? caseStudies 
    : caseStudies.filter(cs => cs.industry === activeFilter);

  const featuredStudy = caseStudies.find(cs => cs.featured);

  return (
    <PageLayout
      title="Case Studies - DigiVibe Success Stories"
      description="Explore our digital marketing success stories. See how DigiVibe helps Tricity businesses achieve real results with SEO, PPC, and lead generation."
    >
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-background to-secondary/20" />
        
        <div className="relative z-10 container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Our <span className="gradient-text">Success Stories</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Real results for real businesses. See how we've helped companies 
              in Mohali, Chandigarh, and beyond achieve their digital marketing goals.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Case Study */}
      {featuredStudy && (
        <section className="py-20 bg-background">
          <div className="container mx-auto px-6">
            <div className="text-center mb-12">
              <span className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
                <TrendingUp className="w-4 h-4" />
                Featured Case Study
              </span>
            </div>

            <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-3xl p-8 md:p-12 text-white overflow-hidden relative">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(139,92,246,0.2),transparent_50%)]" />
              
              <div className="relative z-10 grid lg:grid-cols-2 gap-12 items-center">
                <div>
                  <div className="text-primary text-sm font-medium mb-2">{featuredStudy.industry}</div>
                  <h2 className="text-3xl md:text-4xl font-bold mb-4">{featuredStudy.title}</h2>
                  <p className="text-white/70 mb-6">{featuredStudy.solution}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-8">
                    {featuredStudy.services.map((service, idx) => (
                      <span key={idx} className="px-3 py-1 bg-white/10 rounded-full text-sm">
                        {service}
                      </span>
                    ))}
                  </div>

                  <Link href={`/case-studies/${featuredStudy.id}`}>
                    <span className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:opacity-90 transition-opacity cursor-pointer">
                      Read Full Story
                      <ArrowRight className="w-4 h-4" />
                    </span>
                  </Link>
                </div>

                <div className="grid grid-cols-3 gap-4">
                  {featuredStudy.results.map((result, idx) => (
                    <div key={idx} className="bg-white/10 backdrop-blur rounded-xl p-6 text-center">
                      <div className="text-3xl font-bold text-primary mb-1">{result.value}</div>
                      <div className="text-sm text-white/60 mb-2">{result.metric}</div>
                      <div className="text-xs text-green-400">{result.improvement}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Filter & Grid */}
      <section className="py-20 bg-gradient-to-br from-primary/5 to-secondary/5">
        <div className="container mx-auto px-6">
          {/* Filters */}
          <div className="flex flex-wrap items-center justify-center gap-4 mb-12">
            <div className="flex items-center gap-2 text-muted-foreground">
              <Filter className="w-4 h-4" />
              <span className="text-sm">Filter by industry:</span>
            </div>
            {industries.map((industry) => (
              <button
                key={industry}
                onClick={() => setActiveFilter(industry)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  activeFilter === industry
                    ? "bg-primary text-primary-foreground"
                    : "bg-card border border-border hover:border-primary/30"
                }`}
              >
                {industry === "all" ? "All Industries" : industry}
              </button>
            ))}
          </div>

          {/* Case Studies Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {filteredStudies.map((study) => (
              <div 
                key={study.id}
                className="bg-card rounded-2xl overflow-hidden border border-border hover:border-primary/30 transition-colors group"
              >
                {/* Image Placeholder */}
                <div className="aspect-video bg-gradient-to-br from-primary/20 to-secondary/20 relative overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-6xl opacity-50">📊</div>
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-xs px-3 py-1 bg-primary/10 text-primary rounded-full">
                      {study.industry}
                    </span>
                    <span className="text-xs text-muted-foreground">{study.client}</span>
                  </div>

                  <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                    {study.title}
                  </h3>

                  <p className="text-muted-foreground text-sm mb-6 line-clamp-2">
                    {study.challenge}
                  </p>

                  {/* Quick Results */}
                  <div className="grid grid-cols-3 gap-3 mb-6">
                    {study.results.slice(0, 3).map((result, idx) => (
                      <div key={idx} className="bg-muted rounded-lg p-3 text-center">
                        <div className="text-lg font-bold text-primary">{result.value}</div>
                        <div className="text-xs text-muted-foreground">{result.metric}</div>
                      </div>
                    ))}
                  </div>

                  <Link href={`/case-studies/${study.id}`}>
                    <span className="inline-flex items-center gap-2 text-primary hover:underline cursor-pointer text-sm font-medium">
                      Read Case Study
                      <ArrowRight className="w-4 h-4" />
                    </span>
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {/* Empty State */}
          {filteredStudies.length === 0 && (
            <div className="text-center py-12">
              <p className="text-muted-foreground">No case studies found for this industry.</p>
              <button
                onClick={() => setActiveFilter("all")}
                className="text-primary hover:underline mt-2"
              >
                View all case studies
              </button>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-primary to-secondary">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            Let's Write Your Success Story
          </h2>
          <p className="text-xl text-white/80 max-w-2xl mx-auto mb-10">
            Ready to see results like these for your business? Let's talk about 
            how DigiVibe can help you achieve your goals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <span className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-primary rounded-xl font-semibold hover:bg-white/90 transition-all duration-200 cursor-pointer">
                Get Free Consultation
                <ArrowRight className="w-5 h-5" />
              </span>
            </Link>
            <Link href="/services">
              <span className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/10 text-white border border-white/30 rounded-xl font-semibold hover:bg-white/20 transition-all duration-200 cursor-pointer">
                Explore Our Services
              </span>
            </Link>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
