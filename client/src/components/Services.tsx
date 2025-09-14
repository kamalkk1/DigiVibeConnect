import { MapPin, Globe, Instagram, TrendingUp, Target, BarChart3 } from "lucide-react";

export default function Services() {
  const services = [
    {
      icon: MapPin,
      title: "Local SEO",
      description: "Dominate Mohali, Chandigarh & Panchkula search rankings with GMB optimization & local citations that drive foot traffic.",
      tags: ["Local SEO Mohali", "GMB Optimization"],
      color: "primary"
    },
    {
      icon: Globe,
      title: "Web Design & Development",
      description: "Mobile-first, SEO-optimized websites that convert visitors into customers with lightning-fast performance.",
      tags: ["Web Design Mohali", "React Development"],
      color: "secondary"
    },
    {
      icon: Instagram,
      title: "Social Media Marketing",
      description: "Content creation, Instagram reels, and campaigns designed specifically for North India audiences and culture.",
      tags: ["Social Media Mohali", "Content Creation"],
      color: "accent"
    },
    {
      icon: TrendingUp,
      title: "PPC & Performance Ads",
      description: "Google Ads & Facebook campaigns focused on ROI & lead generation with advanced targeting for local markets.",
      tags: ["PPC Mohali", "Google Ads"],
      color: "primary"
    },
    {
      icon: Target,
      title: "Lead Generation Systems",
      description: "End-to-end funnels, CRM integration, and marketing automation for scalable, predictable growth.",
      tags: ["Lead Generation", "Automation"],
      color: "secondary"
    },
    {
      icon: BarChart3,
      title: "Analytics & Growth Consulting",
      description: "Data-driven insights, competitor analysis & strategic consulting for long-term sustainable impact.",
      tags: ["Growth Strategy", "Analytics"],
      color: "accent"
    }
  ];

  return (
    <section id="services" className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-poppins font-bold text-4xl md:text-5xl mb-6">
            <span data-testid="text-services-title">Full-Suite Digital Marketing</span><br/>
            <span className="gradient-text" data-testid="text-services-subtitle">Solutions for Tricity Businesses</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto" data-testid="text-services-description">
            From local SEO domination to performance advertising, we offer comprehensive digital solutions tailored for North India's competitive market.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div key={index} className="service-card glass rounded-3xl p-8 text-center hover:shadow-xl" data-testid={`card-service-${index}`}>
                <div className={`w-16 h-16 bg-${service.color} text-${service.color}-foreground rounded-2xl flex items-center justify-center mx-auto mb-6 text-2xl`}>
                  <Icon className="w-8 h-8" />
                </div>
                <h3 className="font-poppins font-semibold text-xl mb-4" data-testid={`text-service-title-${index}`}>
                  {service.title}
                </h3>
                <p className="text-muted-foreground mb-6" data-testid={`text-service-description-${index}`}>
                  {service.description}
                </p>
                <div className="flex flex-wrap gap-2 justify-center">
                  {service.tags.map((tag, tagIndex) => (
                    <span 
                      key={tagIndex}
                      className={`text-xs bg-${service.color}/10 text-${service.color} px-3 py-1 rounded-full`}
                      data-testid={`tag-service-${index}-${tagIndex}`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
