import { Link } from "wouter";
import { 
  ArrowRight, 
  Target, 
  Users, 
  Award, 
  Clock, 
  MapPin,
  Lightbulb,
  Heart,
  Zap,
  TrendingUp,
  CheckCircle
} from "lucide-react";
import PageLayout from "@/components/layout/PageLayout";
import { brandInfo, companyStats, products } from "@/lib/siteData";

export default function AboutPage() {
  const values = [
    {
      icon: Target,
      title: "Results-Driven",
      description: "We measure success by your ROI. Every strategy is designed to deliver measurable, tangible growth for your business."
    },
    {
      icon: Lightbulb,
      title: "Innovation First",
      description: "From AI automation to cutting-edge marketing techniques, we stay ahead of the curve to give you a competitive edge."
    },
    {
      icon: Heart,
      title: "Client Partnership",
      description: "We're not just a service provider – we're your growth partner. Your success is our success."
    },
    {
      icon: MapPin,
      title: "Local Expertise",
      description: "Deep understanding of the Tricity market gives us unique insights into what works for North India businesses."
    }
  ];

  const milestones = [
    { year: "2016", title: "Founded in Mohali", description: "Started as a small digital marketing consultancy" },
    { year: "2018", title: "100+ Clients", description: "Reached our first major milestone of 100 active clients" },
    { year: "2020", title: "Team Expansion", description: "Grew to a team of 10+ digital marketing experts" },
    { year: "2023", title: "₹2Cr+ Revenue Generated", description: "Helped clients generate over ₹2 Crore in revenue" },
    { year: "2026", title: "BotomateX Launch", description: "Launched our AI-powered automation suite" }
  ];

  return (
    <PageLayout
      title="About DigiVibe - Digital Marketing Agency Mohali"
      description="Learn about DigiVibe, Mohali's premier digital marketing agency. 10+ years helping Tricity businesses grow with innovative digital solutions."
    >
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-background to-secondary/20" />
        
        <div className="relative z-10 container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="gradient-text">North India's Premier</span>
              <br />
              Digital Growth Partner
            </h1>
            <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
              For over a decade, DigiVibe has been helping businesses in Mohali, Chandigarh, 
              and the Tricity region achieve measurable growth through innovative digital strategies.
            </p>
            
            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
              {[
                { value: companyStats.yearsInBusiness, label: "Years Experience" },
                { value: companyStats.clientsServed, label: "Clients Served" },
                { value: companyStats.revenueGenerated, label: "Revenue Generated" },
                { value: companyStats.projectsCompleted, label: "Projects Completed" }
              ].map((stat, idx) => (
                <div key={idx} className="bg-card rounded-2xl p-6 border border-border">
                  <div className="text-3xl font-bold text-primary">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-5xl font-bold mb-6">
                Our <span className="gradient-text">Story</span>
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  DigiVibe was founded in 2016 with a simple mission: to help local businesses 
                  compete and thrive in the digital age. What started as a one-person consultancy 
                  in Mohali has grown into a full-service digital marketing agency serving 
                  hundreds of clients across North India.
                </p>
                <p>
                  We understood early on that businesses in the Tricity region needed more than 
                  generic marketing solutions. They needed a partner who understood the local 
                  market, spoke their language, and could deliver strategies tailored to their 
                  unique challenges.
                </p>
                <p>
                  Today, we combine deep local expertise with cutting-edge technology, including 
                  our own AI-powered automation suite, BotomateX. We're proud to have helped 
                  our clients generate over ₹2 Crore in revenue and continue to push the 
                  boundaries of what's possible in digital marketing.
                </p>
              </div>
            </div>
            
            <div className="relative">
              <div className="bg-gradient-to-br from-primary to-secondary rounded-3xl p-1">
                <div className="bg-card rounded-3xl p-8">
                  <div className="space-y-6">
                    {milestones.map((milestone, idx) => (
                      <div key={idx} className="flex gap-4">
                        <div className="flex-shrink-0 w-16 text-center">
                          <div className="text-lg font-bold text-primary">{milestone.year}</div>
                        </div>
                        <div className="flex-1 pb-6 border-b border-border last:border-0">
                          <div className="font-semibold mb-1">{milestone.title}</div>
                          <div className="text-sm text-muted-foreground">{milestone.description}</div>
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

      {/* Our Values */}
      <section className="py-20 bg-gradient-to-br from-primary/5 to-secondary/5">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              Our <span className="gradient-text">Values</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, idx) => (
              <div key={idx} className="bg-card rounded-2xl p-6 border border-border hover:border-primary/30 transition-colors">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                  <value.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2">{value.title}</h3>
                <p className="text-muted-foreground text-sm">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-5xl font-bold mb-6">
                Why Choose <span className="gradient-text">DigiVibe</span>?
              </h2>
              <div className="space-y-6">
                {[
                  {
                    title: "Local Market Expertise",
                    description: "We understand the Tricity market like no one else. Our strategies are tailored for businesses in Mohali, Chandigarh, and surrounding areas."
                  },
                  {
                    title: "AI-Powered Solutions",
                    description: "With BotomateX, we bring enterprise-level AI automation to businesses of all sizes, giving you a competitive edge."
                  },
                  {
                    title: "Transparent Reporting",
                    description: "No vanity metrics. We provide clear, actionable reports that show exactly how your investment is performing."
                  },
                  {
                    title: "Dedicated Support",
                    description: "24/7 support with dedicated account managers who are always available to help you succeed."
                  }
                ].map((item, idx) => (
                  <div key={idx} className="flex gap-4">
                    <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold mb-1">{item.title}</h3>
                      <p className="text-muted-foreground text-sm">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-3xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-6">Our Clients Grow With Us</h3>
              <div className="space-y-4">
                {[
                  { metric: "Average Lead Increase", value: "300%", icon: TrendingUp },
                  { metric: "Client Retention Rate", value: "95%", icon: Users },
                  { metric: "Avg. Response Time", value: "< 2hrs", icon: Clock },
                  { metric: "Client Satisfaction", value: "4.9/5", icon: Award }
                ].map((stat, idx) => (
                  <div key={idx} className="flex items-center justify-between p-4 bg-white/5 rounded-xl">
                    <div className="flex items-center gap-3">
                      <stat.icon className="w-5 h-5 text-primary" />
                      <span className="text-white/80">{stat.metric}</span>
                    </div>
                    <span className="text-xl font-bold text-primary">{stat.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* BotomateX Section */}
      <section className="py-20 bg-gradient-to-br from-primary to-secondary">
        <div className="container mx-auto px-6">
          <div className="text-center text-white mb-12">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              Powered by Innovation
            </h2>
            <p className="text-xl text-white/80 max-w-2xl mx-auto">
              Our proprietary AI suite, BotomateX, brings cutting-edge automation to your business
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {products.map((product) => (
              <Link key={product.id} href={product.href}>
                <div className="bg-white/10 backdrop-blur rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-colors cursor-pointer h-full">
                  <span className="text-3xl mb-4 block">{product.icon}</span>
                  <h3 className="text-xl font-bold text-white mb-2">{product.name}</h3>
                  <p className="text-white/70 mb-4">{product.tagline}</p>
                  <span className="inline-flex items-center gap-2 text-white/90 text-sm">
                    Learn more <ArrowRight className="w-4 h-4" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Ready to Grow Your Business?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-10">
            Let's discuss how DigiVibe can help you achieve your digital marketing goals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <span className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-primary text-primary-foreground rounded-xl font-semibold hover:opacity-90 transition-all duration-200 cursor-pointer">
                Get Free Consultation
                <ArrowRight className="w-5 h-5" />
              </span>
            </Link>
            <Link href="/team">
              <span className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-card text-foreground border border-border rounded-xl font-semibold hover:bg-muted transition-all duration-200 cursor-pointer">
                Meet Our Team
              </span>
            </Link>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
