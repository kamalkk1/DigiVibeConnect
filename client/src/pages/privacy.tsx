import PageLayout from "@/components/layout/PageLayout";
import { brandInfo } from "@/lib/siteData";

export default function PrivacyPage() {
  return (
    <PageLayout
      title="Privacy Policy - DigiVibe"
      description="DigiVibe's privacy policy explains how we collect, use, and protect your personal information."
    >
      <section className="pt-32 pb-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl font-bold mb-4">Privacy Policy</h1>
            <p className="text-muted-foreground mb-12">Last updated: January 17, 2026</p>

            <div className="prose prose-lg dark:prose-invert max-w-none">
              <h2 className="text-2xl font-bold mt-8 mb-4">1. Introduction</h2>
              <p className="text-muted-foreground mb-4">
                DigiVibe Digital Marketing Agency ("we," "our," or "us") is committed to protecting 
                your privacy. This Privacy Policy explains how we collect, use, disclose, and 
                safeguard your information when you visit our website {brandInfo.website} or use 
                our services.
              </p>

              <h2 className="text-2xl font-bold mt-8 mb-4">2. Information We Collect</h2>
              <h3 className="text-xl font-semibold mt-6 mb-3">Personal Information</h3>
              <p className="text-muted-foreground mb-4">
                We may collect personal information that you voluntarily provide to us when you:
              </p>
              <ul className="list-disc pl-6 text-muted-foreground mb-4 space-y-2">
                <li>Fill out a contact form</li>
                <li>Subscribe to our newsletter</li>
                <li>Request a consultation or quote</li>
                <li>Use our services</li>
              </ul>
              <p className="text-muted-foreground mb-4">
                This information may include your name, email address, phone number, company name, 
                and any other information you choose to provide.
              </p>

              <h3 className="text-xl font-semibold mt-6 mb-3">Automatically Collected Information</h3>
              <p className="text-muted-foreground mb-4">
                When you visit our website, we automatically collect certain information including:
              </p>
              <ul className="list-disc pl-6 text-muted-foreground mb-4 space-y-2">
                <li>IP address</li>
                <li>Browser type and version</li>
                <li>Device information</li>
                <li>Pages visited and time spent</li>
                <li>Referring website</li>
              </ul>

              <h2 className="text-2xl font-bold mt-8 mb-4">3. How We Use Your Information</h2>
              <p className="text-muted-foreground mb-4">
                We use the information we collect to:
              </p>
              <ul className="list-disc pl-6 text-muted-foreground mb-4 space-y-2">
                <li>Provide, maintain, and improve our services</li>
                <li>Respond to your inquiries and provide customer support</li>
                <li>Send you marketing communications (with your consent)</li>
                <li>Analyze usage patterns to improve our website</li>
                <li>Protect against fraudulent or unauthorized activity</li>
              </ul>

              <h2 className="text-2xl font-bold mt-8 mb-4">4. Cookies and Tracking Technologies</h2>
              <p className="text-muted-foreground mb-4">
                We use cookies and similar tracking technologies to collect information about your 
                browsing activities. You can control cookies through your browser settings.
              </p>

              <h2 className="text-2xl font-bold mt-8 mb-4">5. Third-Party Services</h2>
              <p className="text-muted-foreground mb-4">
                We may use third-party services such as:
              </p>
              <ul className="list-disc pl-6 text-muted-foreground mb-4 space-y-2">
                <li>Google Analytics for website analytics</li>
                <li>Meta Pixel for advertising</li>
                <li>BotomateX for automation services</li>
              </ul>
              <p className="text-muted-foreground mb-4">
                These third parties have their own privacy policies governing the use of your information.
              </p>

              <h2 className="text-2xl font-bold mt-8 mb-4">6. Data Security</h2>
              <p className="text-muted-foreground mb-4">
                We implement appropriate technical and organizational measures to protect your 
                personal information against unauthorized access, alteration, disclosure, or destruction.
              </p>

              <h2 className="text-2xl font-bold mt-8 mb-4">7. Your Rights</h2>
              <p className="text-muted-foreground mb-4">
                You have the right to:
              </p>
              <ul className="list-disc pl-6 text-muted-foreground mb-4 space-y-2">
                <li>Access your personal information</li>
                <li>Correct inaccurate information</li>
                <li>Request deletion of your information</li>
                <li>Opt-out of marketing communications</li>
              </ul>

              <h2 className="text-2xl font-bold mt-8 mb-4">8. Contact Us</h2>
              <p className="text-muted-foreground mb-4">
                If you have questions about this Privacy Policy, please contact us at:
              </p>
              <p className="text-muted-foreground mb-4">
                <strong>Email:</strong> {brandInfo.email}<br />
                <strong>Phone:</strong> {brandInfo.phone}<br />
                <strong>Address:</strong> {brandInfo.location}
              </p>

              <h2 className="text-2xl font-bold mt-8 mb-4">9. Changes to This Policy</h2>
              <p className="text-muted-foreground mb-4">
                We may update this Privacy Policy from time to time. We will notify you of any 
                changes by posting the new Privacy Policy on this page and updating the "Last updated" date.
              </p>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
