import { Link, useRoute } from "wouter";
import { 
  ArrowRight, 
  Check, 
  ChevronRight,
  HelpCircle,
  ChevronDown
} from "lucide-react";
import { useState } from "react";
import PageLayout from "@/components/layout/PageLayout";
import { services, caseStudies } from "@/lib/siteData";
import { generateServiceSchema, generateFAQSchema } from "@/lib/schema";

export default function ServiceDetail() {
  const [, params] = useRoute("/services/:slug");
  const slug = params?.slug;
  
  const service = services.find(s => s.id === slug);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  // Hero image mapping
  const heroImages: Record<string, string> = {
    "seo": "/images/services/seo-hero.png",
    "web-design": "/images/services/web-design-hero.png",
    "social-media": "/images/services/social-media-hero.png",
    "ppc": "/images/services/ppc-hero.png",
    "lead-generation": "/images/services/lead-generation-hero.png",
    "analytics": "/images/services/analytics-hero.png",
  };

  // If service not found, show 404-like message
  if (!service) {
    return (
      <PageLayout title="Service Not Found">
        <section className="pt-32 pb-20">
          <div className="container mx-auto px-6 text-center">
            <h1 className="text-4xl font-bold mb-4">Service Not Found</h1>
            <p className="text-muted-foreground mb-8">The service you're looking for doesn't exist.</p>
            <Link href="/services">
              <span className="text-primary hover:underline cursor-pointer">View All Services</span>
            </Link>
          </div>
        </section>
      </PageLayout>
    );
  }

  const Icon = service.icon;
  const relatedCaseStudy = caseStudies.find(cs => 
    cs.services.some(s => s.toLowerCase().includes(service.shortTitle.toLowerCase()))
  );
  const heroImage = heroImages[service.id];

  return (
    <PageLayout
      title={`${service.title} Services - DigiVibe Mohali`}
      description={service.fullDescription}
      schema={[
        generateServiceSchema(
          service.title,
          service.fullDescription,
          `/services/${service.id}`
        ),
        generateFAQSchema(service.faqs)
      ].filter(Boolean)}
    >
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        {/* Background Image */}
        {heroImage && (
          <div className="absolute inset-0">
            <img 
              src={heroImage} 
              alt={`${service.title} hero`} 
              className="w-full h-full object-cover"
            />
          </div>
        )}
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/85 to-secondary/85">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.1),transparent_50%)]" />
        </div>
        
        <div className="relative z-10 container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center text-white">
            <div className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-3xl flex items-center justify-center mx-auto mb-6">
              <Icon className="w-10 h-10" />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              {service.title}
            </h1>
            <p className="text-xl text-white/80 max-w-2xl mx-auto mb-10">
              {service.fullDescription}
            </p>
            
            <div className="flex flex-wrap justify-center gap-4 mb-10">
              {service.tags.map((tag, idx) => (
                <span key={idx} className="px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-sm">
                  {tag}
                </span>
              ))}
            </div>

            <Link href="/contact">
              <span className="inline-flex items-center gap-2 px-8 py-4 bg-white text-primary rounded-xl font-semibold hover:bg-white/90 transition-all duration-200 cursor-pointer">
                Get Started
                <ArrowRight className="w-5 h-5" />
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* What's Included */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              What's <span className="gradient-text">Included</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Everything you need to succeed with {service.title.toLowerCase()}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {service.features.map((feature, idx) => (
              <div key={idx} className="bg-card rounded-2xl p-6 border border-border hover:border-primary/30 transition-colors">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                    <Check className="w-4 h-4 text-primary" />
                  </div>
                  <span className="font-medium">{feature}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 bg-gradient-to-br from-primary/5 to-secondary/5">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              Our <span className="gradient-text">Process</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              A proven step-by-step approach to deliver results
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {service.process.map((step, idx) => (
              <div key={idx} className="relative text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary text-white rounded-2xl flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                  {step.step}
                </div>
                <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                <p className="text-muted-foreground text-sm">{step.description}</p>
                
                {idx < service.process.length - 1 && (
                  <ChevronRight className="hidden md:block absolute top-8 -right-4 w-8 h-8 text-primary/30" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-3xl p-8 md:p-12 text-white">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div>
                  <h2 className="text-3xl md:text-4xl font-bold mb-4">
                    Pricing That Works For You
                  </h2>
                  <p className="text-white/70 mb-6">
                    Our {service.title.toLowerCase()} packages are designed to fit businesses 
                    of all sizes. Get enterprise-level service at competitive prices.
                  </p>
                  <Link href="/contact">
                    <span className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors cursor-pointer">
                      Get Custom Quote
                      <ArrowRight className="w-4 h-4" />
                    </span>
                  </Link>
                </div>
                
                <div className="bg-white/10 rounded-2xl p-8 text-center">
                  <div className="text-sm text-white/60 mb-2">Starting from</div>
                  <div className="text-4xl font-bold text-primary mb-2">{service.pricing.starting}</div>
                  {service.pricing.popular && (
                    <div className="text-sm text-white/60">
                      Popular plan: <span className="text-white font-semibold">{service.pricing.popular}</span>
                    </div>
                  )}
                  <Link href="/pricing">
                    <span className="inline-block mt-6 px-6 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:opacity-90 transition-opacity cursor-pointer">
                      View Full Pricing
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Case Study Preview */}
      {relatedCaseStudy && (
        <section className="py-20 bg-gradient-to-br from-primary/5 to-secondary/5">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-bold mb-4">
                <span className="gradient-text">Success Story</span>
              </h2>
            </div>

            <div className="max-w-4xl mx-auto bg-card rounded-3xl p-8 border border-border">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <div className="text-sm text-primary font-medium mb-2">{relatedCaseStudy.industry}</div>
                  <h3 className="text-2xl font-bold mb-4">{relatedCaseStudy.title}</h3>
                  <p className="text-muted-foreground mb-6">{relatedCaseStudy.solution}</p>
                  <Link href={`/case-studies/${relatedCaseStudy.id}`}>
                    <span className="inline-flex items-center gap-2 text-primary hover:underline cursor-pointer">
                      Read Full Case Study
                      <ArrowRight className="w-4 h-4" />
                    </span>
                  </Link>
                </div>
                
                <div className="grid grid-cols-3 gap-4">
                  {relatedCaseStudy.results.map((result, idx) => (
                    <div key={idx} className="text-center bg-background rounded-xl p-4">
                      <div className="text-2xl font-bold text-primary">{result.value}</div>
                      <div className="text-xs text-muted-foreground">{result.metric}</div>
                      <div className="text-xs text-green-500">{result.improvement}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* FAQ */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-bold mb-4">
                <span className="gradient-text">FAQs</span>
              </h2>
              <p className="text-muted-foreground">
                Common questions about our {service.title.toLowerCase()} services
              </p>
            </div>

            <div className="space-y-4">
              {service.faqs.map((faq, idx) => (
                <div 
                  key={idx} 
                  className="bg-card rounded-xl border border-border overflow-hidden"
                >
                  <button
                    onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                    className="w-full flex items-center justify-between p-6 text-left hover:bg-muted/50 transition-colors"
                  >
                    <div className="flex items-center gap-3">
                      <HelpCircle className="w-5 h-5 text-primary flex-shrink-0" />
                      <span className="font-medium">{faq.question}</span>
                    </div>
                    <ChevronDown className={`w-5 h-5 text-muted-foreground transition-transform ${openFaq === idx ? 'rotate-180' : ''}`} />
                  </button>
                  {openFaq === idx && (
                    <div className="px-6 pb-6 text-muted-foreground">
                      {faq.answer}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-br from-primary to-secondary">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-white/80 max-w-2xl mx-auto mb-10">
            Let's discuss how our {service.title.toLowerCase()} services can help your business grow.
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
                View All Services
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* Back to Services */}
      <section className="py-10 bg-background">
        <div className="container mx-auto px-6">
          <Link href="/services">
            <span className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors cursor-pointer">
              <ArrowRight className="w-4 h-4 rotate-180" />
              Back to All Services
            </span>
          </Link>
        </div>
      </section>
    </PageLayout>
  );
}
