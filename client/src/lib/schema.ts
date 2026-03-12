import { brandInfo } from './siteData';

export function generateOrganizationSchema() {
    return {
        "@context": "https://schema.org",
        "@type": "Organization",
        "name": brandInfo.fullName,
        "url": brandInfo.website,
        "logo": `${brandInfo.website}/logo.png`, // Assumed logo path
        "contactPoint": {
            "@type": "ContactPoint",
            "telephone": brandInfo.phone,
            "contactType": "customer service",
            "areaServed": "IN",
            "availableLanguage": ["English", "Hindi", "Punjabi"]
        },
        "sameAs": [
            brandInfo.social.facebook,
            brandInfo.social.instagram,
            brandInfo.social.linkedin,
            brandInfo.social.twitter
        ]
    };
}

export function generateFAQSchema(faqs: { question: string, answer: string }[]) {
    if (!faqs || faqs.length === 0) return null;

    return {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": faqs.map(faq => ({
            "@type": "Question",
            "name": faq.question,
            "acceptedAnswer": {
                "@type": "Answer",
                "text": faq.answer
            }
        }))
    };
}

export function generateWebPageSchema(title: string, description: string, urlPath: string) {
    return {
        "@context": "https://schema.org",
        "@type": "WebPage",
        "name": title,
        "description": description,
        "url": `${brandInfo.website}${urlPath}`
    };
}

export function generateServiceSchema(serviceName: string, serviceDescription: string, urlPath: string) {
    return {
        "@context": "https://schema.org",
        "@type": "Service",
        "serviceType": serviceName,
        "provider": {
            "@type": "Organization",
            "name": brandInfo.name
        },
        "description": serviceDescription,
        "url": `${brandInfo.website}${urlPath}`,
        "areaServed": [
            {
                "@type": "City",
                "name": "Mohali"
            },
            {
                "@type": "City",
                "name": "Chandigarh"
            },
            {
                "@type": "City",
                "name": "Panchkula"
            }
        ]
    };
}
