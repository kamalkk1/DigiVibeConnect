import { MapPinned, Clock, DollarSign, Headphones } from "lucide-react";
import FlowingMenu from "./FlowingMenu";
export default function About() {
  const demoItems = [
    {
      link: "#",
      text: "SOCIAL MEDIA MARKETING",
      image: "https://picsum.photos/600/400?random=1",
    },
    {
      link: "#",
      text: "GOOGLE & FACEBOOK ADS",
      image: "https://picsum.photos/600/400?random=2",
    },
    {
      link: "#",
      text: "SEARCH ENGINE OPTIMIZATION",
      image: "https://picsum.photos/600/400?random=3",
    },
    {
      link: "#",
      text: "WEB DESIGN & DEVELOPMENT",
      image: "https://picsum.photos/600/400?random=4",
    },
  ];
  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="bg-black py-12 pb-10" style={{ height: "600px", position: "relative" }}>
        <FlowingMenu items={demoItems} />
      </div>
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="font-poppins font-bold text-4xl md:text-5xl mb-6">
              <span data-testid="text-mohali">Mohali's Most</span>
              <br />
              <span
                className="gradient-text"
                data-testid="text-creative-agency"
              >
                Creative Digital Marketing Agency
              </span>
            </h2>

            <p
              className="text-lg text-muted-foreground mb-6 leading-relaxed"
              data-testid="text-about-content"
            >
              DIGIVIBE combines strategy, creativity, and technology to help
              North India businesses achieve measurable growth online. Our deep
              understanding of the Tricity market gives us an edge in creating
              campaigns that truly resonate.
            </p>

            <div className="bg-card p-6 rounded-2xl border border-border mb-8">
              <div className="flex items-center mb-3">
                <MapPinned className="text-primary text-xl mr-3" />
                <h3
                  className="font-semibold text-lg"
                  data-testid="text-local-expertise"
                >
                  Local Market Expertise
                </h3>
              </div>
              <p
                className="text-muted-foreground"
                data-testid="text-local-focus"
              >
                Proudly serving Mohali, Chandigarh, Panchkula, Zirakpur, and the
                entire Tricity region with customized strategies that work for
                local businesses.
              </p>
            </div>

            <div className="flex items-center space-x-8">
              <div>
                <div
                  className="font-bold text-2xl text-primary"
                  data-testid="stat-years"
                >
                  5+ Years
                </div>
                <div
                  className="text-sm text-muted-foreground"
                  data-testid="stat-years-label"
                >
                  In Tricity Market
                </div>
              </div>
              <div>
                <div
                  className="font-bold text-2xl text-secondary"
                  data-testid="stat-revenue"
                >
                  ₹2Cr+
                </div>
                <div
                  className="text-sm text-muted-foreground"
                  data-testid="stat-revenue-label"
                >
                  Revenue Generated
                </div>
              </div>
              <div>
                <div
                  className="font-bold text-2xl text-accent"
                  data-testid="stat-support"
                >
                  24/7
                </div>
                <div
                  className="text-sm text-muted-foreground"
                  data-testid="stat-support-label"
                >
                  Support Available
                </div>
              </div>
            </div>
          </div>

          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600"
              alt="Modern office building representing DIGIVIBE's presence in Mohali"
              className="rounded-3xl shadow-2xl w-full animate-float"
              data-testid="img-office"
            />

            <div className="absolute -bottom-6 -right-6 glass rounded-2xl p-6 max-w-xs">
              <div className="flex items-center mb-2">
                <div className="w-3 h-3 bg-secondary rounded-full mr-2 animate-pulse"></div>
                <span
                  className="text-sm font-medium"
                  data-testid="text-live-projects"
                >
                  Live Projects
                </span>
              </div>
              <div
                className="text-2xl font-bold text-primary mb-1"
                data-testid="stat-active-campaigns"
              >
                12
              </div>
              <div
                className="text-xs text-muted-foreground"
                data-testid="stat-active-campaigns-label"
              >
                Active campaigns running
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
