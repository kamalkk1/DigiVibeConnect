import { PopupButton } from "react-calendly";
import { Phone, MessageCircle, MapPin } from "lucide-react";
import { trackEvent } from "@/lib/analytics";
import { useEffect, useState } from "react";

export default function Contact() {
  const [rootEl, setRootEl] = useState<HTMLElement | null>(null);

  useEffect(() => {
    // Next.js and Vite React apps usually mount into "__next" or "root"
    const el = document.getElementById("__next") || document.getElementById("root");
    setRootEl(el);
  }, []);

  const handleCalendlyEvent = () => {
    trackEvent("calendly_open", "contact", "attempt");
  };

  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-poppins font-bold text-4xl md:text-5xl mb-6">
              <span data-testid="text-contact-title">Ready to Grow Your Business</span>
              <br />
              <span className="gradient-text" data-testid="text-contact-subtitle">
                in Mohali & Tricity?
              </span>
            </h2>
            <p
              className="text-xl text-muted-foreground"
              data-testid="text-contact-description"
            >
              Schedule your free strategy consultation. Includes competitive analysis
              tailored to your region.
            </p>
          </div>

          <div className="bg-card rounded-3xl p-8 md:p-12 border border-border shadow-2xl text-center">
            {rootEl && (
              <div
  onClick={() => {
    trackEvent("calendly_open", "contact", "attempt");
  }}
>
  <PopupButton
    url="https://calendly.com/kamalk2620/30min"
    rootElement={rootEl}
    text="Schedule Your Free Strategy Session"
    className="w-full bg-gradient-to-r from-primary to-secondary text-white py-4 px-8 rounded-xl font-semibold text-lg hover:opacity-90 transition-all duration-200 transform hover:scale-105"
    prefill={{
      customAnswers: { a1: "From Website Contact" },
    }}
    pageSettings={{
      backgroundColor: "ffffff",
      hideEventTypeDetails: false,
      hideLandingPageDetails: false,
      primaryColor: "00a2ff",
      textColor: "4d5055",
    }}
  />
</div>
            )}

            <p
              className="text-center text-sm text-muted-foreground mt-4"
              data-testid="text-response-time"
            >
              Select a convenient time for your personalized strategy session
            </p>
          </div>

          {/* Contact Information Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            <div className="glass rounded-2xl p-6 text-center">
              <div className="w-12 h-12 bg-primary text-primary-foreground rounded-xl flex items-center justify-center mx-auto mb-4">
                <Phone className="w-6 h-6" />
              </div>
              <h3 className="font-semibold mb-2" data-testid="text-contact-call">
                Call Us
              </h3>
              <p className="text-muted-foreground" data-testid="text-contact-phone">
                +91-9780267246
              </p>
            </div>

            <div className="glass rounded-2xl p-6 text-center">
              <div className="w-12 h-12 bg-secondary text-secondary-foreground rounded-xl flex items-center justify-center mx-auto mb-4">
                <MessageCircle className="w-6 h-6" />
              </div>
              <h3 className="font-semibold mb-2" data-testid="text-contact-whatsapp">
                WhatsApp
              </h3>
              <p
                className="text-muted-foreground"
                data-testid="text-contact-whatsapp-desc"
              >
                Quick Response Guaranteed
              </p>
            </div>

            <div className="glass rounded-2xl p-6 text-center">
              <div className="w-12 h-12 bg-accent text-accent-foreground rounded-xl flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-6 h-6" />
              </div>
              <h3 className="font-semibold mb-2" data-testid="text-contact-visit">
                Visit Us
              </h3>
              <p
                className="text-muted-foreground"
                data-testid="text-contact-address"
              >
                Mohali, Punjab
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
