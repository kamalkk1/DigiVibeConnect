import { Utensils, Laptop, Home, Rocket } from "lucide-react";

export default function CaseStudies() {
  const caseStudies = [
    {
      icon: Utensils,
      company: "Restaurant Chain",
      location: "Chandigarh",
      result: "300%",
      description: "Increase in online orders in just 3 months",
      services: ["Local SEO", "Social Media"],
      testimonial: "DIGIVIBE transformed our online presence. We're now the top-rated restaurant chain in Chandigarh!",
      color: "primary"
    },
    {
      icon: Laptop,
      company: "Tech Startup",
      location: "Mohali",
      result: "150+",
      description: "Qualified leads in first quarter",
      services: ["PPC", "Landing Pages"],
      testimonial: "The ROI from our PPC campaigns exceeded all expectations. Highly recommended for B2B companies.",
      color: "secondary"
    },
    {
      icon: Home,
      company: "Real Estate Agency",
      location: "Panchkula",
      result: "#1",
      description: "Rankings for property keywords",
      services: ["SEO", "Content Marketing"],
      testimonial: "Our website now gets 10x more property inquiries. DIGIVIBE knows the local market inside out.",
      color: "accent"
    }
  ];

  return (
    <section id="case-studies" className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-poppins font-bold text-4xl md:text-5xl mb-6">
            <span className="gradient-text" data-testid="text-case-studies-title">Success Stories</span><br/>
            <span data-testid="text-case-studies-subtitle">Across North India</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto" data-testid="text-case-studies-description">
            Real results from real businesses in the Tricity region. See how we've helped local companies achieve remarkable growth.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {caseStudies.map((study, index) => {
            const Icon = study.icon;
            return (
              <div key={index} className="bg-card rounded-3xl p-8 border border-border hover:shadow-xl transition-all duration-300" data-testid={`card-case-study-${index}`}>
                <div className="flex items-center mb-6">
                  <div className={`w-12 h-12 bg-${study.color} text-${study.color}-foreground rounded-xl flex items-center justify-center mr-4`}>
                    <Icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg" data-testid={`text-case-study-company-${index}`}>{study.company}</h3>
                    <p className="text-sm text-muted-foreground" data-testid={`text-case-study-location-${index}`}>{study.location}</p>
                  </div>
                </div>
                
                <div className={`bg-${study.color}/5 rounded-2xl p-6 mb-6`}>
                  <div className={`text-3xl font-bold text-${study.color} mb-2`} data-testid={`stat-case-study-result-${index}`}>{study.result}</div>
                  <p className="text-muted-foreground" data-testid={`text-case-study-description-${index}`}>{study.description}</p>
                </div>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {study.services.map((service, serviceIndex) => (
                    <span 
                      key={serviceIndex}
                      className={`text-xs bg-${study.color}/10 text-${study.color} px-3 py-1 rounded-full`}
                      data-testid={`tag-case-study-service-${index}-${serviceIndex}`}
                    >
                      {service}
                    </span>
                  ))}
                </div>
                
                <blockquote className="text-muted-foreground italic" data-testid={`text-case-study-testimonial-${index}`}>
                  "{study.testimonial}"
                </blockquote>
              </div>
            );
          })}
        </div>
        
        <div className="text-center mt-12">
          <a 
            href="#contact" 
            className="bg-primary text-primary-foreground px-8 py-4 rounded-xl font-semibold text-lg hover:opacity-90 transition-all duration-200 transform hover:scale-105"
            data-testid="button-start-success-story"
          >
            <Rocket className="inline w-5 h-5 mr-2" />
            Start Your Success Story
          </a>
        </div>
      </div>
    </section>
  );
}
