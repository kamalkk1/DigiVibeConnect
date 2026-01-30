import { Link } from "wouter";
import { ArrowRight, Linkedin, Twitter, Mail } from "lucide-react";
import PageLayout from "@/components/layout/PageLayout";
import { teamMembers, brandInfo } from "@/lib/siteData";

export default function TeamPage() {
  const leadership = teamMembers.filter(m => m.isLeadership);
  const team = teamMembers.filter(m => !m.isLeadership);

  const values = [
    "We believe in work-life balance",
    "Remote-friendly environment",
    "Continuous learning opportunities",
    "Collaborative team culture"
  ];

  return (
    <PageLayout
      title="Our Team - DigiVibe Digital Marketing Agency"
      description="Meet the talented team behind DigiVibe. Our digital marketing experts in Mohali are dedicated to helping your business grow."
    >
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-background to-secondary/20" />
        
        <div className="relative z-10 container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Meet the <span className="gradient-text">Minds</span> Behind DigiVibe
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Our team of digital marketing experts, developers, and creative strategists 
              is dedicated to helping your business succeed online.
            </p>
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="gradient-text">Leadership</span> Team
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              The visionaries driving DigiVibe's mission forward
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {leadership.map((member) => (
              <div key={member.id} className="bg-card rounded-3xl overflow-hidden border border-border hover:border-primary/30 transition-colors group">
                <div className="aspect-[4/3] bg-gradient-to-br from-primary/20 to-secondary/20 relative overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-32 h-32 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center text-white text-4xl font-bold">
                      {member.name.split(' ').map(n => n[0]).join('')}
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-1">{member.name}</h3>
                  <p className="text-primary font-medium mb-3">{member.role}</p>
                  <p className="text-muted-foreground mb-4">{member.bio}</p>
                  
                  {member.social && (
                    <div className="flex gap-3">
                      {member.social.linkedin && (
                        <a 
                          href={member.social.linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-10 h-10 bg-muted rounded-lg flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
                        >
                          <Linkedin className="w-5 h-5" />
                        </a>
                      )}
                      {member.social.twitter && (
                        <a 
                          href={member.social.twitter}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-10 h-10 bg-muted rounded-lg flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
                        >
                          <Twitter className="w-5 h-5" />
                        </a>
                      )}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Members */}
      <section className="py-20 bg-gradient-to-br from-primary/5 to-secondary/5">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Our <span className="gradient-text">Experts</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              The talented individuals who make the magic happen
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((member) => (
              <div key={member.id} className="bg-card rounded-2xl overflow-hidden border border-border hover:border-primary/30 transition-all hover:-translate-y-1">
                <div className="aspect-square bg-gradient-to-br from-primary/10 to-secondary/10 relative overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-20 h-20 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center text-white text-2xl font-bold">
                      {member.name.split(' ').map(n => n[0]).join('')}
                    </div>
                  </div>
                </div>
                <div className="p-4 text-center">
                  <h3 className="font-bold mb-1">{member.name}</h3>
                  <p className="text-sm text-primary mb-2">{member.role}</p>
                  <p className="text-xs text-muted-foreground">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Culture Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-5xl font-bold mb-6">
                Our <span className="gradient-text">Culture</span>
              </h2>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                At DigiVibe, we believe that great work comes from happy, empowered people. 
                Our culture is built on trust, creativity, and a shared passion for helping 
                businesses grow. We celebrate wins together, learn from challenges, and 
                always push each other to be better.
              </p>
              
              <div className="grid grid-cols-2 gap-4">
                {values.map((value, idx) => (
                  <div key={idx} className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-primary rounded-full" />
                    <span className="text-sm">{value}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {[
                { label: "Team Size", value: "15+" },
                { label: "Countries", value: "2" },
                { label: "Avg. Tenure", value: "3+ yrs" },
                { label: "Remote Team", value: "60%" }
              ].map((stat, idx) => (
                <div key={idx} className="bg-gradient-to-br from-primary/10 to-secondary/10 rounded-2xl p-6 text-center">
                  <div className="text-3xl font-bold text-primary mb-1">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Join Us CTA */}
      <section className="py-20 bg-gradient-to-br from-primary to-secondary">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            Join Our Team
          </h2>
          <p className="text-xl text-white/80 max-w-2xl mx-auto mb-10">
            We're always looking for talented individuals who are passionate about 
            digital marketing and technology. Think you'd be a great fit?
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={`mailto:careers@${brandInfo.website.replace('https://', '')}`}
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-primary rounded-xl font-semibold hover:bg-white/90 transition-all duration-200 shadow-lg"
            >
              <Mail className="w-5 h-5" />
              Send Your Resume
            </a>
            <Link href="/contact">
              <span className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/10 text-white border border-white/30 rounded-xl font-semibold hover:bg-white/20 transition-all duration-200 cursor-pointer">
                Contact Us
              </span>
            </Link>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
