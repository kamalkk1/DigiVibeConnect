import { Link } from "wouter";
import { 
  ArrowRight, 
  ExternalLink, 
  Check,
  Phone,
  Mic,
  Brain,
  FileText,
  BarChart3,
  Calendar,
  HeadphonesIcon,
  Zap,
  Clock,
  Shield,
  Play
} from "lucide-react";
import PageLayout from "@/components/layout/PageLayout";
import { products } from "@/lib/siteData";

export default function VoiceAIPage() {
  const product = products.find(p => p.id === "voiceai")!;

  const detailedFeatures = [
    {
      icon: Brain,
      title: "AI Voice Call Handling",
      description: "Natural-sounding AI voice agents that handle calls just like a human. Customers won't know the difference."
    },
    {
      icon: Phone,
      title: "Smart IVR Routing",
      description: "Intelligent call routing based on caller intent, history, and preferences. No more frustrating menu trees."
    },
    {
      icon: FileText,
      title: "Real-Time Transcription",
      description: "Every call is transcribed in real-time with speaker identification and searchable archives."
    },
    {
      icon: BarChart3,
      title: "Call Analytics",
      description: "Deep insights into call patterns, sentiment analysis, and conversation quality metrics."
    },
    {
      icon: Calendar,
      title: "Appointment Booking",
      description: "AI schedules appointments during calls with automatic calendar sync and confirmation."
    },
    {
      icon: HeadphonesIcon,
      title: "Lead Capture",
      description: "Extract and qualify leads from calls automatically. Never miss a sales opportunity."
    }
  ];

  const callFlow = [
    { label: "Customer Calls", icon: Phone },
    { label: "AI Greets & Understands", icon: Brain },
    { label: "Routes or Handles", icon: Zap },
    { label: "Captures & Logs Data", icon: FileText }
  ];

  return (
    <PageLayout
      title="VoiceAI - AI Voice Agent & IVR System"
      description="VoiceAI by BotomateX: AI-powered voice call handling with smart IVR, transcription, and lead capture. Never miss a call again."
    >
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-violet-900 via-violet-800 to-gray-900">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(139,92,246,0.3),transparent_50%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_80%,rgba(139,92,246,0.2),transparent_50%)]" />
        </div>

        <div className="relative z-10 container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-violet-500/20 border border-violet-400/30 rounded-full mb-6">
                <span className="text-2xl">{product.icon}</span>
                <span className="text-sm font-medium text-violet-300">BotomateX Product</span>
              </div>

              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                {product.name}
                <span className="block text-2xl md:text-3xl font-light text-violet-300 mt-2">
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
                    <div className="text-3xl font-bold text-violet-400">{stat.value}</div>
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
                  className="inline-flex items-center gap-2 px-8 py-4 bg-violet-500 text-white rounded-xl font-semibold hover:bg-violet-600 transition-all duration-200 shadow-lg shadow-violet-500/25"
                >
                  Start Free Trial
                  <ExternalLink className="w-5 h-5" />
                </a>
                <button className="inline-flex items-center gap-2 px-8 py-4 bg-white/10 text-white border border-white/20 rounded-xl font-semibold hover:bg-white/20 transition-all duration-200">
                  <Play className="w-5 h-5" />
                  Hear Demo Call
                </button>
              </div>
            </div>

            {/* Voice Wave Visual */}
            <div className="relative">
              <div className="bg-gradient-to-br from-violet-500/20 to-violet-600/10 rounded-3xl p-8 border border-violet-400/20 backdrop-blur">
                <div className="bg-gray-900 rounded-2xl p-8 shadow-2xl text-center">
                  {/* Animated Voice Wave */}
                  <div className="relative w-32 h-32 mx-auto mb-6">
                    <div className="absolute inset-0 bg-violet-500/20 rounded-full animate-ping" />
                    <div className="absolute inset-4 bg-violet-500/30 rounded-full animate-pulse" />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-20 h-20 bg-gradient-to-br from-violet-500 to-violet-600 rounded-full flex items-center justify-center">
                        <Mic className="w-10 h-10 text-white" />
                      </div>
                    </div>
                  </div>

                  <div className="text-white font-medium text-lg mb-2">AI Agent Speaking</div>
                  <div className="text-violet-300 text-sm">"How can I help you today?"</div>

                  {/* Waveform */}
                  <div className="flex items-center justify-center gap-1 mt-6">
                    {[...Array(20)].map((_, i) => (
                      <div
                        key={i}
                        className="w-1 bg-violet-500 rounded-full animate-pulse"
                        style={{
                          height: `${Math.random() * 30 + 10}px`,
                          animationDelay: `${i * 0.1}s`
                        }}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call Flow Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              How <span className="text-violet-500">VoiceAI</span> Works
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              From the first ring to call completion, every step is automated
            </p>
          </div>

          <div className="flex flex-wrap justify-center items-center gap-8">
            {callFlow.map((step, idx) => (
              <div key={idx} className="flex items-center gap-4">
                <div className="text-center">
                  <div className="w-16 h-16 bg-violet-500/10 rounded-2xl flex items-center justify-center mx-auto mb-2">
                    <step.icon className="w-8 h-8 text-violet-500" />
                  </div>
                  <div className="text-sm font-medium">{step.label}</div>
                </div>
                {idx < callFlow.length - 1 && (
                  <ArrowRight className="w-6 h-6 text-violet-500/30 hidden sm:block" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gradient-to-br from-violet-500/5 to-transparent">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8">
            {product.benefits.map((benefit, idx) => (
              <div key={idx} className="text-center p-8 bg-card rounded-2xl border border-border">
                <div className="w-16 h-16 bg-violet-500/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  {idx === 0 && <Brain className="w-8 h-8 text-violet-500" />}
                  {idx === 1 && <Zap className="w-8 h-8 text-violet-500" />}
                  {idx === 2 && <Clock className="w-8 h-8 text-violet-500" />}
                </div>
                <h3 className="text-xl font-bold mb-2">{benefit.title}</h3>
                <p className="text-muted-foreground">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              Enterprise-Grade <span className="text-violet-500">Voice AI</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Everything you need to automate voice communications at scale
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {detailedFeatures.map((feature, idx) => (
              <div key={idx} className="bg-card rounded-2xl p-6 border border-border hover:border-violet-500/30 transition-colors">
                <div className="w-12 h-12 bg-violet-500/10 rounded-xl flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-violet-500" />
                </div>
                <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
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
              Perfect For <span className="text-violet-400">Any Call Center</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {product.useCases.map((useCase, idx) => (
              <div
                key={idx}
                className="flex items-center gap-4 p-4 bg-white/5 rounded-xl border border-white/10 hover:bg-violet-500/10 hover:border-violet-400/30 transition-colors"
              >
                <Check className="w-5 h-5 text-violet-400 flex-shrink-0" />
                <span className="text-white">{useCase}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Security Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="bg-gradient-to-br from-violet-500/10 to-violet-600/5 rounded-3xl p-8 md:p-12 border border-violet-400/20">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <Shield className="w-16 h-16 text-violet-500 mb-6" />
                <h3 className="text-2xl md:text-3xl font-bold mb-4">
                  Enterprise-Grade Security
                </h3>
                <p className="text-muted-foreground mb-6">
                  VoiceAI meets the highest security standards with end-to-end encryption, 
                  GDPR compliance, and SOC 2 certification. Your voice data is always protected.
                </p>
                <ul className="space-y-2">
                  {["End-to-end encryption", "GDPR compliant", "SOC 2 certified", "99.9% uptime SLA"].map((item, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-sm">
                      <Check className="w-4 h-4 text-violet-500" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { label: "Calls Encrypted", value: "100%" },
                  { label: "Data Centers", value: "5+" },
                  { label: "Uptime", value: "99.9%" },
                  { label: "Support", value: "24/7" }
                ].map((stat, idx) => (
                  <div key={idx} className="bg-card rounded-xl p-4 text-center border border-border">
                    <div className="text-2xl font-bold text-violet-500">{stat.value}</div>
                    <div className="text-sm text-muted-foreground">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-violet-600 to-violet-500">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            Ready to Transform Your Voice Operations?
          </h2>
          <p className="text-xl text-white/80 max-w-2xl mx-auto mb-10">
            Join leading businesses using VoiceAI to handle millions of calls.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={product.externalUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-violet-600 rounded-xl font-semibold hover:bg-white/90 transition-all duration-200 shadow-lg"
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
