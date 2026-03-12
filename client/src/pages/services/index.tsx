import { Link } from "wouter";
import { ArrowRight, Check, ChevronRight } from "lucide-react";
import PageLayout from "@/components/layout/PageLayout";
import { services, products } from "@/lib/siteData";
import { generateOrganizationSchema, generateWebPageSchema } from "@/lib/schema";

export default function ServicesHub() {
  return (
    <PageLayout
      title="Digital Marketing Services - DigiVibe Mohali"
      description="Full-suite digital marketing services in Mohali. SEO, PPC, Social Media, Web Design, Lead Generation & Analytics for Tricity businesses."
      schema={[
        generateOrganizationSchema(),
        generateWebPageSchema(
          "Digital Marketing Services - DigiVibe Mohali",
          "Full-suite digital marketing services in Mohali. SEO, PPC, Social Media, Web Design, Lead Generation & Analytics for Tricity businesses.",
          "/services"
        )
      ]}
    >
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary to-secondary">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.1),transparent_50%)]" />
        </div>
        
        <div className="relative z-10 container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Full-Suite Digital Marketing
              <br />
              <span className="text-white/90">Solutions for Tricity</span>
            </h1>
            <p className="text-xl text-white/80 max-w-2xl mx-auto mb-10">
              From local SEO domination to performance advertising, we offer comprehensive 
              digital solutions tailored for North India's competitive market.
            </p>
            <Link href="/contact">
              <span className="inline-flex items-center gap-2 px-8 py-4 bg-white text-primary rounded-xl font-semibold hover:bg-white/90 transition-all duration-200 cursor-pointer">
                Get Free Consultation
                <ArrowRight className="w-5 h-5" />
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => {
              const Icon = service.icon;
              return (
                <Link key={service.id} href={service.href}>
                  <div className="group bg-card rounded-3xl p-8 border border-border hover:border-primary/50 transition-all duration-300 cursor-pointer h-full">
                    <div className={`w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-primary-foreground transition-colors`}>
                      <Icon className="w-8 h-8" />
                    </div>
                    
                    <h3 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors">
                      {service.title}
                    </h3>
                    
                    <p className="text-muted-foreground mb-6">
                      {service.description}
                    </p>

                    {/* Features Preview */}
                    <ul className="space-y-2 mb-6">
                      {service.features.slice(0, 3).map((feature, idx) => (
                        <li key={idx} className="flex items-center gap-2 text-sm text-muted-foreground">
                          <Check className="w-4 h-4 text-primary flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {service.tags.map((tag, idx) => (
                        <span 
                          key={idx}
                          className="text-xs bg-primary/10 text-primary px-3 py-1 rounded-full"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Pricing Preview */}
                    <div className="pt-6 border-t border-border flex items-center justify-between">
                      <div>
                        <div className="text-sm text-muted-foreground">Starting from</div>
                        <div className="text-lg font-bold text-primary">{service.pricing.starting}</div>
                      </div>
                      <ChevronRight className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gradient-to-br from-primary/5 to-secondary/5">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              Our <span className="gradient-text">Process</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              A proven methodology that delivers consistent results
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: 1, title: "Discovery", description: "We learn about your business, goals, and competition through in-depth consultation." },
              { step: 2, title: "Strategy", description: "We create a customized digital marketing strategy tailored to your specific needs." },
              { step: 3, title: "Execute", description: "Our team implements the strategy with precision and attention to detail." },
              { step: 4, title: "Optimize", description: "We continuously monitor, analyze, and optimize for maximum ROI." }
            ].map((item, idx) => (
              <div key={idx} className="relative text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary text-white rounded-2xl flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                  {item.step}
                </div>
                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                <p className="text-muted-foreground text-sm">{item.description}</p>
                
                {idx < 3 && (
                  <ChevronRight className="hidden md:block absolute top-8 -right-4 w-8 h-8 text-primary/30" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BotomateX Integration */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-3xl p-8 md:p-12 overflow-hidden relative">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(139,92,246,0.2),transparent_50%)]" />
            
            <div className="relative z-10 grid lg:grid-cols-2 gap-12 items-center">
              <div className="text-white">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 rounded-full mb-6">
                  <span className="text-lg">🚀</span>
                  <span className="text-sm">Powered by BotomateX</span>
                </div>
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  Supercharge Your Services with AI
                </h2>
                <p className="text-white/70 mb-8">
                  Combine our digital marketing expertise with BotomateX's AI-powered 
                  automation for unmatched results. Capture more leads, engage customers 
                  24/7, and scale your business faster.
                </p>
                <Link href="/products">
                  <span className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors cursor-pointer">
                    Explore BotomateX Products
                    <ArrowRight className="w-4 h-4" />
                  </span>
                </Link>
              </div>

              <div className="grid grid-cols-3 gap-4">
                {products.map((product) => (
                  <Link key={product.id} href={product.href}>
                    <div className="bg-white/5 backdrop-blur rounded-xl p-4 text-center border border-white/10 hover:bg-white/10 transition-colors cursor-pointer">
                      <span className="text-3xl block mb-2">{product.icon}</span>
                      <span className="text-white text-sm font-medium">{product.name}</span>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-primary/10 to-secondary/10">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Ready to Grow Your Business?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-10">
            Let's discuss how our digital marketing services can help you achieve your goals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <span className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-primary text-primary-foreground rounded-xl font-semibold hover:opacity-90 transition-all duration-200 cursor-pointer">
                Get Free Consultation
                <ArrowRight className="w-5 h-5" />
              </span>
            </Link>
            <Link href="/case-studies">
              <span className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-card text-foreground border border-border rounded-xl font-semibold hover:bg-muted transition-all duration-200 cursor-pointer">
                View Case Studies
              </span>
            </Link>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
