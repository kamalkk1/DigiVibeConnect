import { Link } from "wouter";
import { 
  ArrowRight, 
  Check, 
  X, 
  Star,
  Zap,
  HelpCircle,
  ChevronDown,
  ExternalLink
} from "lucide-react";
import { useState } from "react";
import PageLayout from "@/components/layout/PageLayout";
import { services, products, botomateXInfo } from "@/lib/siteData";

export default function PricingPage() {
  const [isAnnual, setIsAnnual] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const servicePlans = [
    {
      name: "Starter",
      description: "Perfect for small businesses starting their digital journey",
      monthlyPrice: 25000,
      features: {
        included: [
          "1 Service (SEO, Social, or PPC)",
          "Monthly strategy calls",
          "Basic analytics reporting",
          "Email support",
          "5 social posts/week"
        ],
        excluded: [
          "Lead generation system",
          "Custom landing pages",
          "A/B testing",
          "Dedicated account manager"
        ]
      }
    },
    {
      name: "Growth",
      description: "For businesses ready to scale their online presence",
      monthlyPrice: 50000,
      popular: true,
      features: {
        included: [
          "2 Services of your choice",
          "Bi-weekly strategy calls",
          "Advanced analytics dashboard",
          "Priority email & phone support",
          "15 social posts/week",
          "Lead generation system",
          "Custom landing pages",
          "A/B testing"
        ],
        excluded: [
          "Dedicated account manager"
        ]
      }
    },
    {
      name: "Enterprise",
      description: "Full-service digital marketing for large organizations",
      monthlyPrice: 100000,
      features: {
        included: [
          "All 6 Services included",
          "Weekly strategy calls",
          "Custom analytics & reporting",
          "24/7 priority support",
          "Unlimited social content",
          "Lead generation system",
          "Unlimited landing pages",
          "Advanced A/B testing",
          "Dedicated account manager",
          "BotomateX integration"
        ],
        excluded: []
      }
    }
  ];

  const faqs = [
    {
      question: "Can I switch plans later?",
      answer: "Yes, you can upgrade or downgrade your plan at any time. Changes will be reflected in your next billing cycle."
    },
    {
      question: "Is there a minimum commitment?",
      answer: "We recommend a 3-month minimum to see meaningful results, but we don't lock you into long-term contracts."
    },
    {
      question: "What's included in the onboarding process?",
      answer: "Our onboarding includes a comprehensive audit, strategy session, goal setting, and implementation of your first campaigns within 2 weeks."
    },
    {
      question: "Do you offer custom packages?",
      answer: "Absolutely! Contact us to discuss your specific needs and we'll create a custom package that fits your budget and goals."
    },
    {
      question: "How do I integrate BotomateX with my services?",
      answer: "BotomateX is included in the Enterprise plan. For other plans, you can add it as an addon starting at ₹15,000/month."
    }
  ];

  const formatPrice = (price: number) => {
    const adjustedPrice = isAnnual ? Math.round(price * 0.85) : price;
    return `₹${adjustedPrice.toLocaleString('en-IN')}`;
  };

  return (
    <PageLayout
      title="Pricing - DigiVibe Digital Marketing Services"
      description="Transparent pricing for digital marketing services. SEO, PPC, Social Media packages for Tricity businesses at competitive rates."
    >
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-background to-secondary/20" />
        
        <div className="relative z-10 container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Simple, <span className="gradient-text">Transparent</span> Pricing
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-10">
              No hidden fees. No surprises. Choose a plan that fits your business 
              and watch your growth accelerate.
            </p>

            {/* Annual Toggle */}
            <div className="inline-flex items-center gap-4 p-2 bg-card rounded-full border border-border">
              <button
                onClick={() => setIsAnnual(false)}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-colors ${
                  !isAnnual ? "bg-primary text-primary-foreground" : "text-muted-foreground hover:text-foreground"
                }`}
              >
                Monthly
              </button>
              <button
                onClick={() => setIsAnnual(true)}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-colors flex items-center gap-2 ${
                  isAnnual ? "bg-primary text-primary-foreground" : "text-muted-foreground hover:text-foreground"
                }`}
              >
                Annual
                <span className="text-xs bg-green-500 text-white px-2 py-0.5 rounded-full">
                  Save 15%
                </span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Service Plans */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8">
            {servicePlans.map((plan, idx) => (
              <div 
                key={idx}
                className={`relative bg-card rounded-3xl border ${
                  plan.popular ? "border-primary shadow-lg shadow-primary/10" : "border-border"
                } overflow-hidden`}
              >
                {plan.popular && (
                  <div className="absolute top-0 left-0 right-0 bg-primary text-primary-foreground text-center py-2 text-sm font-medium">
                    <Star className="w-4 h-4 inline mr-1" />
                    Most Popular
                  </div>
                )}
                
                <div className={`p-8 ${plan.popular ? "pt-16" : ""}`}>
                  <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                  <p className="text-sm text-muted-foreground mb-6">{plan.description}</p>
                  
                  <div className="mb-6">
                    <span className="text-4xl font-bold">{formatPrice(plan.monthlyPrice)}</span>
                    <span className="text-muted-foreground">/month</span>
                    {isAnnual && (
                      <div className="text-xs text-green-500 mt-1">
                        Billed annually (₹{(plan.monthlyPrice * 12 * 0.85).toLocaleString('en-IN')}/year)
                      </div>
                    )}
                  </div>

                  <Link href="/contact">
                    <span className={`block w-full py-3 rounded-xl font-semibold text-center transition-colors cursor-pointer ${
                      plan.popular 
                        ? "bg-primary text-primary-foreground hover:opacity-90" 
                        : "bg-muted hover:bg-muted/80"
                    }`}>
                      Get Started
                    </span>
                  </Link>

                  {/* Features */}
                  <div className="mt-8 space-y-3">
                    {plan.features.included.map((feature, fIdx) => (
                      <div key={fIdx} className="flex items-start gap-3">
                        <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                        <span className="text-sm">{feature}</span>
                      </div>
                    ))}
                    {plan.features.excluded.map((feature, fIdx) => (
                      <div key={fIdx} className="flex items-start gap-3 opacity-50">
                        <X className="w-5 h-5 text-muted-foreground flex-shrink-0 mt-0.5" />
                        <span className="text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BotomateX Add-ons */}
      <section className="py-20 bg-gradient-to-br from-gray-900 to-gray-800">
        <div className="container mx-auto px-6">
          <div className="text-center text-white mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 rounded-full mb-4">
              <Zap className="w-4 h-4 text-primary" />
              <span className="text-sm">Power Up with AI</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              BotomateX Add-ons
            </h2>
            <p className="text-white/70 max-w-2xl mx-auto">
              Supercharge your marketing with AI-powered automation
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {products.map((product) => (
              <div key={product.id} className="bg-white/10 backdrop-blur rounded-2xl p-6 border border-white/10">
                <span className="text-3xl mb-4 block">{product.icon}</span>
                <h3 className="text-xl font-bold text-white mb-2">{product.name}</h3>
                <p className="text-white/60 text-sm mb-4">{product.tagline}</p>
                
                <div className="mb-6">
                  <span className="text-2xl font-bold text-white">₹15,000</span>
                  <span className="text-white/60">/month</span>
                </div>

                <div className="space-y-2 mb-6">
                  {product.features.slice(0, 4).map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-sm text-white/80">
                      <Check className="w-4 h-4" style={{ color: product.color }} />
                      {feature}
                    </div>
                  ))}
                </div>

                <a
                  href={product.externalUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full py-3 rounded-xl font-semibold text-white border border-white/20 hover:bg-white/10 transition-colors"
                >
                  Learn More
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-white/60 mb-4">
              All BotomateX products are included free in the Enterprise plan
            </p>
            <a
              href={botomateXInfo.website}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-primary hover:underline"
            >
              Explore full BotomateX suite
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>

      {/* Custom Quote */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto bg-gradient-to-br from-primary/10 to-secondary/10 rounded-3xl p-8 md:p-12 border border-primary/20 text-center">
            <h2 className="text-3xl font-bold mb-4">Need a Custom Solution?</h2>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              Every business is unique. If our standard plans don't fit your needs, 
              let's create a custom package tailored specifically for you.
            </p>
            <Link href="/contact">
              <span className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground rounded-xl font-semibold hover:opacity-90 transition-all duration-200 cursor-pointer">
                Get Custom Quote
                <ArrowRight className="w-5 h-5" />
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-gradient-to-br from-primary/5 to-secondary/5">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-bold mb-4">
                <span className="gradient-text">FAQs</span>
              </h2>
              <p className="text-muted-foreground">
                Common questions about our pricing and plans
              </p>
            </div>

            <div className="space-y-4">
              {faqs.map((faq, idx) => (
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
            Start your digital growth journey today. No commitments, just results.
          </p>
          <Link href="/contact">
            <span className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-primary rounded-xl font-semibold hover:bg-white/90 transition-all duration-200 cursor-pointer">
              Schedule Free Consultation
              <ArrowRight className="w-5 h-5" />
            </span>
          </Link>
        </div>
      </section>
    </PageLayout>
  );
}
