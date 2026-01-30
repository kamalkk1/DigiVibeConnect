import { Link } from "wouter";
import { 
  ArrowRight, 
  ExternalLink, 
  Sparkles, 
  Check, 
  Zap,
  Shield,
  Clock,
  Users,
  ChevronRight
} from "lucide-react";
import PageLayout from "@/components/layout/PageLayout";
import { products, botomateXInfo } from "@/lib/siteData";

export default function ProductsHub() {
  return (
    <PageLayout
      title="BotomateX - AI Business Automation Suite"
      description="Discover BotomateX: AI-powered automation for leads, WhatsApp, and voice. LeadFlow, ChatterBot, and VoiceAI - all in one suite."
    >
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        {/* Background Gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(59,130,246,0.15),transparent_50%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(139,92,246,0.15),transparent_50%)]" />
        </div>

        <div className="relative z-10 container mx-auto px-6">
          <div className="text-center max-w-4xl mx-auto">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-primary/20 to-secondary/20 border border-primary/30 rounded-full mb-6">
              <Sparkles className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-primary">Powered by DigiVibe</span>
            </div>

            {/* Logo & Title */}
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                BotomateX
              </span>
            </h1>

            <p className="text-2xl md:text-3xl text-white/90 mb-4 font-light">
              {botomateXInfo.tagline}
            </p>

            <p className="text-lg text-white/60 max-w-2xl mx-auto mb-10">
              {botomateXInfo.description}
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={botomateXInfo.website}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-xl font-semibold hover:opacity-90 transition-all duration-200 shadow-lg shadow-purple-500/25"
              >
                Explore BotomateX
                <ExternalLink className="w-5 h-5" />
              </a>
              <Link href="/contact">
                <span className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/10 text-white border border-white/20 rounded-xl font-semibold hover:bg-white/20 transition-all duration-200 cursor-pointer">
                  Book a Demo
                  <ArrowRight className="w-5 h-5" />
                </span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              <span className="gradient-text">Three Powerful Products</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Each product is designed to automate a crucial part of your business operations
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {products.map((product) => (
              <Link key={product.id} href={product.href}>
                <div className="group relative bg-card border border-border rounded-3xl p-8 hover:border-primary/50 transition-all duration-300 cursor-pointer h-full overflow-hidden">
                  {/* Hover Gradient */}
                  <div 
                    className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-300 rounded-3xl"
                    style={{ background: `linear-gradient(135deg, ${product.color}, transparent)` }}
                  />

                  <div className="relative z-10">
                    {/* Icon */}
                    <div 
                      className="w-16 h-16 rounded-2xl flex items-center justify-center text-3xl mb-6"
                      style={{ backgroundColor: `${product.color}20` }}
                    >
                      {product.icon}
                    </div>

                    {/* Content */}
                    <h3 className="text-2xl font-bold mb-2 group-hover:text-primary transition-colors">
                      {product.name}
                    </h3>
                    <p className="text-sm font-medium mb-4" style={{ color: product.color }}>
                      {product.tagline}
                    </p>
                    <p className="text-muted-foreground mb-6">
                      {product.description}
                    </p>

                    {/* Features Preview */}
                    <ul className="space-y-2 mb-6">
                      {product.features.slice(0, 4).map((feature, idx) => (
                        <li key={idx} className="flex items-center gap-2 text-sm text-muted-foreground">
                          <Check className="w-4 h-4" style={{ color: product.color }} />
                          {feature}
                        </li>
                      ))}
                    </ul>

                    {/* Stats */}
                    <div className="grid grid-cols-3 gap-4 pt-6 border-t border-border">
                      {product.stats.map((stat, idx) => (
                        <div key={idx} className="text-center">
                          <div className="text-lg font-bold" style={{ color: product.color }}>
                            {stat.value}
                          </div>
                          <div className="text-xs text-muted-foreground">{stat.label}</div>
                        </div>
                      ))}
                    </div>

                    {/* Arrow */}
                    <div className="absolute bottom-8 right-8 opacity-0 group-hover:opacity-100 transition-opacity">
                      <ChevronRight className="w-6 h-6 text-primary" />
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Why BotomateX */}
      <section className="py-20 bg-gradient-to-br from-primary/5 to-secondary/5">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              Why Choose <span className="gradient-text">BotomateX</span>?
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Zap,
                title: "10x Faster",
                description: "Instant AI-powered responses to customer inquiries"
              },
              {
                icon: Users,
                title: "Higher Conversion",
                description: "Smart lead nurturing that converts prospects to customers"
              },
              {
                icon: Clock,
                title: "24/7 Automation",
                description: "Never miss a lead, even while you sleep"
              },
              {
                icon: Shield,
                title: "Enterprise Security",
                description: "Bank-grade security for all your business data"
              }
            ].map((feature, idx) => (
              <div key={idx} className="text-center p-6">
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <feature.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              <span className="gradient-text">Feature Comparison</span>
            </h2>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full bg-card rounded-2xl border border-border overflow-hidden">
              <thead>
                <tr className="bg-muted">
                  <th className="text-left p-4 font-semibold">Feature</th>
                  {products.map((product) => (
                    <th key={product.id} className="p-4 text-center">
                      <div className="flex flex-col items-center gap-2">
                        <span className="text-2xl">{product.icon}</span>
                        <span style={{ color: product.color }}>{product.name}</span>
                      </div>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {[
                  { feature: "AI-Powered Automation", leadflow: true, chatterbot: true, voiceai: true },
                  { feature: "24/7 Availability", leadflow: true, chatterbot: true, voiceai: true },
                  { feature: "Lead Capture", leadflow: true, chatterbot: true, voiceai: true },
                  { feature: "CRM Integration", leadflow: true, chatterbot: true, voiceai: true },
                  { feature: "Analytics Dashboard", leadflow: true, chatterbot: true, voiceai: true },
                  { feature: "WhatsApp Integration", leadflow: false, chatterbot: true, voiceai: false },
                  { feature: "Voice Calls", leadflow: false, chatterbot: false, voiceai: true },
                  { feature: "Email Automation", leadflow: true, chatterbot: false, voiceai: false },
                  { feature: "Lead Scoring", leadflow: true, chatterbot: false, voiceai: false },
                  { feature: "Call Transcription", leadflow: false, chatterbot: false, voiceai: true }
                ].map((row, idx) => (
                  <tr key={idx} className="border-t border-border">
                    <td className="p-4 font-medium">{row.feature}</td>
                    {products.map((product) => (
                      <td key={product.id} className="p-4 text-center">
                        {row[product.id as keyof typeof row] ? (
                          <Check className="w-5 h-5 mx-auto" style={{ color: product.color }} />
                        ) : (
                          <span className="text-muted-foreground">—</span>
                        )}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-primary to-secondary">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            Ready to Automate Your Business?
          </h2>
          <p className="text-xl text-white/80 max-w-2xl mx-auto mb-10">
            Join hundreds of businesses already using BotomateX to grow faster with AI automation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={botomateXInfo.website}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-primary rounded-xl font-semibold hover:bg-white/90 transition-all duration-200 shadow-lg"
            >
              Get Started with BotomateX
              <ExternalLink className="w-5 h-5" />
            </a>
            <Link href="/contact">
              <span className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/10 text-white border border-white/30 rounded-xl font-semibold hover:bg-white/20 transition-all duration-200 cursor-pointer">
                Talk to Sales
              </span>
            </Link>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
