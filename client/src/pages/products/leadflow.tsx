import { Link } from "wouter";
import { 
  ArrowRight, 
  ExternalLink, 
  Check,
  Zap,
  Target,
  BarChart3,
  Mail,
  MessageSquare,
  Users,
  TrendingUp,
  Clock,
  Shield,
  ChevronRight,
  Play
} from "lucide-react";
import PageLayout from "@/components/layout/PageLayout";
import { products } from "@/lib/siteData";

export default function LeadFlowPage() {
  const product = products.find(p => p.id === "leadflow")!;

  const detailedFeatures = [
    {
      icon: Target,
      title: "Multi-Channel Lead Capture",
      description: "Capture leads from websites, social media, ads, and more. All leads flow into one centralized dashboard."
    },
    {
      icon: Zap,
      title: "AI-Powered Lead Scoring",
      description: "Our AI automatically scores leads based on behavior, demographics, and engagement to prioritize your hottest prospects."
    },
    {
      icon: Mail,
      title: "Automated Follow-Up Sequences",
      description: "Set up email and SMS sequences that nurture leads automatically. Never let a lead go cold again."
    },
    {
      icon: MessageSquare,
      title: "Smart CRM Integration",
      description: "Seamlessly integrates with your existing CRM or use our built-in CRM to manage all customer relationships."
    },
    {
      icon: BarChart3,
      title: "Real-Time Analytics Dashboard",
      description: "Track conversion rates, response times, and ROI with beautiful, actionable dashboards."
    },
    {
      icon: Users,
      title: "Team Collaboration",
      description: "Assign leads to team members, track performance, and collaborate effectively on deals."
    }
  ];

  const howItWorks = [
    {
      step: 1,
      title: "Connect Your Sources",
      description: "Link your website forms, Facebook Lead Ads, Google Ads, and other lead sources to LeadFlow."
    },
    {
      step: 2,
      title: "AI Qualifies Leads",
      description: "Our AI instantly scores and qualifies each lead based on your criteria and historical data."
    },
    {
      step: 3,
      title: "Automate Nurturing",
      description: "Leads automatically enter personalized email and SMS sequences based on their interests."
    },
    {
      step: 4,
      title: "Convert & Analyze",
      description: "Close more deals with insights and track your entire funnel's performance."
    }
  ];

  return (
    <PageLayout
      title="LeadFlow - AI-Powered CRM & Lead Management"
      description="LeadFlow by BotomateX: Capture, score, and convert leads automatically with AI-powered automation. 10x your conversion rates."
    >
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-blue-800 to-gray-900">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(59,130,246,0.3),transparent_50%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_80%,rgba(59,130,246,0.2),transparent_50%)]" />
        </div>

        <div className="relative z-10 container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500/20 border border-blue-400/30 rounded-full mb-6">
                <span className="text-2xl">{product.icon}</span>
                <span className="text-sm font-medium text-blue-300">BotomateX Product</span>
              </div>

              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                {product.name}
                <span className="block text-2xl md:text-3xl font-light text-blue-300 mt-2">
                  {product.tagline}
                </span>
              </h1>

              <p className="text-xl text-white/80 mb-8 leading-relaxed">
                {product.description}
              </p>

              {/* Stats */}
              <div className="flex flex-wrap gap-8 mb-10">
                {product.stats.map((stat, idx) => (
                  <div key={idx}>
                    <div className="text-3xl font-bold text-blue-400">{stat.value}</div>
                    <div className="text-sm text-white/60">{stat.label}</div>
                  </div>
                ))}
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-wrap gap-4">
                <a
                  href={product.externalUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-blue-500 text-white rounded-xl font-semibold hover:bg-blue-600 transition-all duration-200 shadow-lg shadow-blue-500/25"
                >
                  Start Free Trial
                  <ExternalLink className="w-5 h-5" />
                </a>
                <button className="inline-flex items-center gap-2 px-8 py-4 bg-white/10 text-white border border-white/20 rounded-xl font-semibold hover:bg-white/20 transition-all duration-200">
                  <Play className="w-5 h-5" />
                  Watch Demo
                </button>
              </div>
            </div>

            {/* Hero Visual */}
            <div className="relative">
              <div className="bg-gradient-to-br from-blue-500/20 to-blue-600/10 rounded-3xl p-8 border border-blue-400/20 backdrop-blur">
                <div className="bg-gray-900 rounded-2xl p-6 shadow-2xl">
                  {/* Mock Dashboard */}
                  <div className="flex items-center gap-2 mb-4">
                    <div className="w-3 h-3 bg-red-500 rounded-full" />
                    <div className="w-3 h-3 bg-yellow-500 rounded-full" />
                    <div className="w-3 h-3 bg-green-500 rounded-full" />
                  </div>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-white font-medium">Today's Leads</span>
                      <span className="text-blue-400 font-bold text-2xl">127</span>
                    </div>
                    <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
                      <div className="h-full bg-gradient-to-r from-blue-500 to-blue-400 w-3/4 rounded-full" />
                    </div>
                    <div className="grid grid-cols-2 gap-4 pt-4">
                      <div className="bg-gray-800 rounded-lg p-4">
                        <div className="text-blue-400 text-lg font-bold">85%</div>
                        <div className="text-gray-400 text-sm">Qualified</div>
                      </div>
                      <div className="bg-gray-800 rounded-lg p-4">
                        <div className="text-green-400 text-lg font-bold">12%</div>
                        <div className="text-gray-400 text-sm">Converted</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8">
            {product.benefits.map((benefit, idx) => (
              <div key={idx} className="text-center p-8 bg-card rounded-2xl border border-border">
                <div className="w-16 h-16 bg-blue-500/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  {idx === 0 && <Zap className="w-8 h-8 text-blue-500" />}
                  {idx === 1 && <TrendingUp className="w-8 h-8 text-blue-500" />}
                  {idx === 2 && <Shield className="w-8 h-8 text-blue-500" />}
                </div>
                <h3 className="text-xl font-bold mb-2">{benefit.title}</h3>
                <p className="text-muted-foreground">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gradient-to-br from-blue-500/5 to-transparent">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              Powerful Features for <span className="text-blue-500">Modern Sales Teams</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Everything you need to capture, nurture, and convert leads at scale
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {detailedFeatures.map((feature, idx) => (
              <div key={idx} className="bg-card rounded-2xl p-6 border border-border hover:border-blue-500/30 transition-colors">
                <div className="w-12 h-12 bg-blue-500/10 rounded-xl flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-blue-500" />
                </div>
                <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              How <span className="text-blue-500">LeadFlow</span> Works
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Get started in minutes and watch your conversion rates soar
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {howItWorks.map((step, idx) => (
              <div key={idx} className="relative">
                <div className="text-center">
                  <div className="w-16 h-16 bg-blue-500 text-white rounded-2xl flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                    {step.step}
                  </div>
                  <h3 className="text-lg font-bold mb-2">{step.title}</h3>
                  <p className="text-muted-foreground text-sm">{step.description}</p>
                </div>
                {idx < howItWorks.length - 1 && (
                  <ChevronRight className="hidden md:block absolute top-8 -right-4 w-8 h-8 text-blue-500/30" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-20 bg-gradient-to-br from-gray-900 to-gray-800">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
              Perfect For <span className="text-blue-400">Every Industry</span>
            </h2>
          </div>

          <div className="flex flex-wrap justify-center gap-4">
            {product.useCases.map((useCase, idx) => (
              <div
                key={idx}
                className="px-6 py-3 bg-white/10 text-white rounded-full border border-white/20 hover:bg-blue-500/20 hover:border-blue-400/30 transition-colors"
              >
                {useCase}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-500">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            Ready to 10x Your Lead Conversion?
          </h2>
          <p className="text-xl text-white/80 max-w-2xl mx-auto mb-10">
            Join thousands of businesses already using LeadFlow to automate their sales pipeline.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={product.externalUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-blue-600 rounded-xl font-semibold hover:bg-white/90 transition-all duration-200 shadow-lg"
            >
              Start Free Trial
              <ExternalLink className="w-5 h-5" />
            </a>
            <Link href="/contact">
              <span className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/10 text-white border border-white/30 rounded-xl font-semibold hover:bg-white/20 transition-all duration-200 cursor-pointer">
                Schedule Demo
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* Back to Products */}
      <section className="py-10 bg-background">
        <div className="container mx-auto px-6">
          <Link href="/products">
            <span className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors cursor-pointer">
              <ArrowRight className="w-4 h-4 rotate-180" />
              Back to All Products
            </span>
          </Link>
        </div>
      </section>
    </PageLayout>
  );
}
