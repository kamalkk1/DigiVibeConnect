import PageLayout from "@/components/layout/PageLayout";
import { brandInfo } from "@/lib/siteData";

export default function TermsPage() {
  return (
    <PageLayout
      title="Terms of Service - DigiVibe"
      description="DigiVibe's terms of service outline the rules and regulations for using our website and services."
    >
      <section className="pt-32 pb-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl font-bold mb-4">Terms of Service</h1>
            <p className="text-muted-foreground mb-12">Last updated: January 17, 2026</p>

            <div className="prose prose-lg dark:prose-invert max-w-none">
              <h2 className="text-2xl font-bold mt-8 mb-4">1. Agreement to Terms</h2>
              <p className="text-muted-foreground mb-4">
                By accessing or using the DigiVibe website ({brandInfo.website}) and our services, 
                you agree to be bound by these Terms of Service. If you do not agree to these terms, 
                please do not use our services.
              </p>

              <h2 className="text-2xl font-bold mt-8 mb-4">2. Our Services</h2>
              <p className="text-muted-foreground mb-4">
                DigiVibe provides digital marketing services including but not limited to:
              </p>
              <ul className="list-disc pl-6 text-muted-foreground mb-4 space-y-2">
                <li>Search Engine Optimization (SEO)</li>
                <li>Pay-Per-Click (PPC) Advertising</li>
                <li>Social Media Marketing</li>
                <li>Web Design and Development</li>
                <li>Lead Generation</li>
                <li>Analytics and Consulting</li>
                <li>BotomateX AI Automation Products</li>
              </ul>

              <h2 className="text-2xl font-bold mt-8 mb-4">3. Client Responsibilities</h2>
              <p className="text-muted-foreground mb-4">
                As a client, you agree to:
              </p>
              <ul className="list-disc pl-6 text-muted-foreground mb-4 space-y-2">
                <li>Provide accurate and complete information</li>
                <li>Respond to requests for information in a timely manner</li>
                <li>Provide necessary access to accounts and platforms</li>
                <li>Pay for services as agreed in your contract</li>
                <li>Not use our services for any illegal purposes</li>
              </ul>

              <h2 className="text-2xl font-bold mt-8 mb-4">4. Payment Terms</h2>
              <p className="text-muted-foreground mb-4">
                Payment terms are as follows:
              </p>
              <ul className="list-disc pl-6 text-muted-foreground mb-4 space-y-2">
                <li>All fees are quoted in Indian Rupees (INR)</li>
                <li>Payment is due as specified in your service agreement</li>
                <li>Late payments may incur additional fees</li>
                <li>Refunds are subject to our refund policy</li>
              </ul>

              <h2 className="text-2xl font-bold mt-8 mb-4">5. Intellectual Property</h2>
              <p className="text-muted-foreground mb-4">
                All content, designs, strategies, and materials created by DigiVibe remain our 
                intellectual property unless explicitly transferred in writing. Upon full payment, 
                clients receive a license to use deliverables for their business purposes.
              </p>

              <h2 className="text-2xl font-bold mt-8 mb-4">6. Confidentiality</h2>
              <p className="text-muted-foreground mb-4">
                We maintain strict confidentiality regarding all client information, business 
                strategies, and proprietary data. We will not disclose your information to 
                third parties without your consent, except as required by law.
              </p>

              <h2 className="text-2xl font-bold mt-8 mb-4">7. Limitation of Liability</h2>
              <p className="text-muted-foreground mb-4">
                DigiVibe shall not be liable for any indirect, incidental, special, consequential, 
                or punitive damages resulting from your use of our services. Our total liability 
                shall not exceed the amount paid for the services in question.
              </p>

              <h2 className="text-2xl font-bold mt-8 mb-4">8. No Guarantees</h2>
              <p className="text-muted-foreground mb-4">
                While we strive to deliver excellent results, we cannot guarantee specific outcomes 
                such as search engine rankings, conversion rates, or revenue increases. Digital 
                marketing results depend on many factors beyond our control.
              </p>

              <h2 className="text-2xl font-bold mt-8 mb-4">9. Termination</h2>
              <p className="text-muted-foreground mb-4">
                Either party may terminate the service agreement with written notice as specified 
                in the contract. Upon termination, you remain responsible for any outstanding payments, 
                and we will provide any completed deliverables.
              </p>

              <h2 className="text-2xl font-bold mt-8 mb-4">10. Third-Party Services</h2>
              <p className="text-muted-foreground mb-4">
                Our services may involve third-party platforms (Google, Facebook, etc.). We are 
                not responsible for changes in third-party policies, fees, or service availability.
              </p>

              <h2 className="text-2xl font-bold mt-8 mb-4">11. Governing Law</h2>
              <p className="text-muted-foreground mb-4">
                These Terms shall be governed by and construed in accordance with the laws of India. 
                Any disputes shall be subject to the exclusive jurisdiction of the courts in Mohali, Punjab.
              </p>

              <h2 className="text-2xl font-bold mt-8 mb-4">12. Changes to Terms</h2>
              <p className="text-muted-foreground mb-4">
                We reserve the right to modify these Terms at any time. Changes will be effective 
                immediately upon posting to our website. Your continued use of our services 
                constitutes acceptance of any changes.
              </p>

              <h2 className="text-2xl font-bold mt-8 mb-4">13. Contact Information</h2>
              <p className="text-muted-foreground mb-4">
                For questions about these Terms, please contact us:
              </p>
              <p className="text-muted-foreground mb-4">
                <strong>DigiVibe Digital Marketing Agency</strong><br />
                <strong>Email:</strong> {brandInfo.email}<br />
                <strong>Phone:</strong> {brandInfo.phone}<br />
                <strong>Location:</strong> {brandInfo.location}
              </p>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
