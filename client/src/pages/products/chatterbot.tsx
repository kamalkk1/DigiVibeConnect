import { Link } from "wouter";
import { 
  ArrowRight, 
  ExternalLink, 
  Check,
  MessageCircle,
  Clock,
  Globe,
  ShoppingCart,
  Calendar,
  Bot,
  Smartphone,
  Zap,
  Users,
  ChevronRight,
  Play
} from "lucide-react";
import PageLayout from "@/components/layout/PageLayout";
import { products } from "@/lib/siteData";

export default function ChatterBotPage() {
  const product = products.find(p => p.id === "chatterbot")!;

  const detailedFeatures = [
    {
      icon: Clock,
      title: "24/7 Automated Responses",
      description: "Never miss a customer query. ChatterBot responds instantly at any hour, keeping your customers engaged around the clock."
    },
    {
      icon: Globe,
      title: "Multi-Language Support",
      description: "Serve customers in Hindi, English, Punjabi, and 10+ other languages. Auto-detect and respond in the customer's preferred language."
    },
    {
      icon: ShoppingCart,
      title: "Order Tracking & Updates",
      description: "Let customers check order status, get shipping updates, and receive delivery notifications automatically via WhatsApp."
    },
    {
      icon: Calendar,
      title: "Appointment Scheduling",
      description: "Allow customers to book appointments directly through WhatsApp with automatic calendar sync and reminders."
    },
    {
      icon: Bot,
      title: "Lead Qualification Flows",
      description: "Smart conversation flows that qualify leads, collect information, and route to sales automatically."
    },
    {
      icon: Smartphone,
      title: "Rich Media Messages",
      description: "Send images, videos, catalogs, and interactive buttons to create engaging customer experiences."
    }
  ];

  const conversationExamples = [
    { sender: "customer", message: "Hi, I want to know about your services" },
    { sender: "bot", message: "Hello! 👋 Welcome to DigiVibe!\n\nI'd be happy to help you. What are you interested in?\n\n1️⃣ Digital Marketing\n2️⃣ Web Design\n3️⃣ Lead Generation\n4️⃣ Talk to an expert" },
    { sender: "customer", message: "1" },
    { sender: "bot", message: "Great choice! 🚀\n\nOur Digital Marketing services include:\n• SEO & Local SEO\n• Social Media Marketing\n• PPC & Google Ads\n\nWould you like a free consultation?\n\n✅ Yes, book now\n❌ Not right now" }
  ];

  return (
    <PageLayout
      title="ChatterBot - WhatsApp AI Automation"
      description="ChatterBot by BotomateX: 24/7 WhatsApp automation with multi-language support. Engage customers, qualify leads, and boost sales automatically."
    >
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-900 via-emerald-800 to-gray-900">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(16,185,129,0.3),transparent_50%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_80%,rgba(16,185,129,0.2),transparent_50%)]" />
        </div>

        <div className="relative z-10 container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-500/20 border border-emerald-400/30 rounded-full mb-6">
                <span className="text-2xl">{product.icon}</span>
                <span className="text-sm font-medium text-emerald-300">BotomateX Product</span>
              </div>

              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                {product.name}
                <span className="block text-2xl md:text-3xl font-light text-emerald-300 mt-2">
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
                    <div className="text-3xl font-bold text-emerald-400">{stat.value}</div>
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
                  className="inline-flex items-center gap-2 px-8 py-4 bg-emerald-500 text-white rounded-xl font-semibold hover:bg-emerald-600 transition-all duration-200 shadow-lg shadow-emerald-500/25"
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

            {/* Chat Demo */}
            <div className="relative">
              <div className="bg-gradient-to-br from-emerald-500/20 to-emerald-600/10 rounded-3xl p-4 border border-emerald-400/20 backdrop-blur">
                <div className="bg-gray-900 rounded-2xl overflow-hidden shadow-2xl">
                  {/* WhatsApp Header */}
                  <div className="bg-emerald-600 px-4 py-3 flex items-center gap-3">
                    <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                      <MessageCircle className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <div className="text-white font-medium">DigiVibe AI</div>
                      <div className="text-emerald-200 text-sm">Online</div>
                    </div>
                  </div>
                  
                  {/* Chat Messages */}
                  <div className="p-4 space-y-3 bg-[#0b141a] min-h-[300px]">
                    {conversationExamples.map((msg, idx) => (
                      <div
                        key={idx}
                        className={`flex ${msg.sender === "customer" ? "justify-end" : "justify-start"}`}
                      >
                        <div
                          className={`max-w-[80%] rounded-lg px-3 py-2 text-sm whitespace-pre-line ${
                            msg.sender === "customer"
                              ? "bg-emerald-600 text-white rounded-br-none"
                              : "bg-gray-800 text-white rounded-bl-none"
                          }`}
                        >
                          {msg.message}
                        </div>
                      </div>
                    ))}
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
                <div className="w-16 h-16 bg-emerald-500/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  {idx === 0 && <Clock className="w-8 h-8 text-emerald-500" />}
                  {idx === 1 && <Zap className="w-8 h-8 text-emerald-500" />}
                  {idx === 2 && <Globe className="w-8 h-8 text-emerald-500" />}
                </div>
                <h3 className="text-xl font-bold mb-2">{benefit.title}</h3>
                <p className="text-muted-foreground">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gradient-to-br from-emerald-500/5 to-transparent">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              WhatsApp Automation <span className="text-emerald-500">Made Simple</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Everything you need to automate customer conversations on WhatsApp
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {detailedFeatures.map((feature, idx) => (
              <div key={idx} className="bg-card rounded-2xl p-6 border border-border hover:border-emerald-500/30 transition-colors">
                <div className="w-12 h-12 bg-emerald-500/10 rounded-xl flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-emerald-500" />
                </div>
                <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Languages Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              Speak Your <span className="text-emerald-500">Customer's Language</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              ChatterBot supports 12+ languages with automatic detection
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-4">
            {["English", "Hindi", "Punjabi", "Tamil", "Telugu", "Marathi", "Gujarati", "Bengali", "Kannada", "Malayalam", "Odia", "Urdu"].map((lang, idx) => (
              <div
                key={idx}
                className="px-6 py-3 bg-card text-foreground rounded-full border border-border hover:bg-emerald-500/10 hover:border-emerald-400/30 transition-colors"
              >
                {lang}
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
              Built For <span className="text-emerald-400">Every Business</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {product.useCases.map((useCase, idx) => (
              <div
                key={idx}
                className="flex items-center gap-4 p-4 bg-white/5 rounded-xl border border-white/10 hover:bg-emerald-500/10 hover:border-emerald-400/30 transition-colors"
              >
                <Check className="w-5 h-5 text-emerald-400 flex-shrink-0" />
                <span className="text-white">{useCase}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-emerald-600 to-emerald-500">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            Ready to Automate Your WhatsApp?
          </h2>
          <p className="text-xl text-white/80 max-w-2xl mx-auto mb-10">
            Join businesses serving millions of customers with ChatterBot on WhatsApp.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={product.externalUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-emerald-600 rounded-xl font-semibold hover:bg-white/90 transition-all duration-200 shadow-lg"
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
