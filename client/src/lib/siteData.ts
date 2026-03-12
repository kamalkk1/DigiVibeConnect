import {
    MapPin,
    Globe,
    Instagram,
    TrendingUp,
    Target,
    BarChart3,
    Users,
    Zap,
    Phone,
    MessageSquare,
    Bot,
    Workflow,
    Shield,
    Clock,
    Award,
    CheckCircle,
    type LucideIcon
} from "lucide-react";

// ============================================
// BRAND INFORMATION
// ============================================

export const brandInfo = {
    name: "DigiVibe",
    fullName: "DigiVibe Digital Marketing Agency",
    tagline: "North India's Premier Digital Growth & AI Partner",
    description: "DigiVibe is the leading digital marketing agency in Mohali, Chandigarh & Tricity. Backed by 10+ years of expertise, we've helped over 200+ clients generate upwards of ₹2Cr+ in revenue using SEO, social media, and performance-driven digital strategies.",
    location: "Mohali, Punjab, India",
    serviceArea: ["Mohali", "Chandigarh", "Panchkula", "Zirakpur", "Tricity"],
    phone: "+91-9780267246",
    email: "info@digivibe.in",
    website: "https://digivibe.in",
    founded: 2016,
    social: {
        facebook: "https://www.facebook.com/profile.php?id=61581429111500",
        instagram: "https://www.instagram.com/digi___vibe/",
        linkedin: "https://linkedin.com/company/digivibe",
        twitter: "https://twitter.com/digivibe"
    }
};

// ============================================
// BOTOMATEX PRODUCT DATA
// ============================================

export const botomateXInfo = {
    name: "BotomateX",
    tagline: "Your AI-Powered Business Automation Suite",
    description: "Revolutionize how businesses handle leads, customer communication, and voice interactions with AI-powered automation.",
    website: "https://botomatex.com",
    launchYear: 2026
};

export interface Product {
    id: string;
    name: string;
    tagline: string;
    description: string;
    icon: string;
    color: string;
    colorClass: string;
    bgClass: string;
    href: string;
    externalUrl: string;
    features: string[];
    benefits: {
        title: string;
        description: string;
    }[];
    useCases: string[];
    stats: {
        label: string;
        value: string;
    }[];
}

export const products: Product[] = [
    {
        id: "leadflow",
        name: "LeadFlow",
        tagline: "AI-Powered CRM",
        description: "Captures, nurtures, and converts leads automatically with intelligent automation and real-time analytics.",
        icon: "🔷",
        color: "#3B82F6",
        colorClass: "text-blue-500",
        bgClass: "bg-blue-500",
        href: "/products/leadflow",
        externalUrl: "https://botomatex.com/products/leadflow",
        features: [
            "Multi-channel lead capture",
            "AI-powered lead scoring",
            "Automated follow-up sequences",
            "Smart CRM integration",
            "Real-time analytics dashboard",
            "Custom workflow builder",
            "Email & SMS automation",
            "Lead qualification AI"
        ],
        benefits: [
            {
                title: "10x Faster Response",
                description: "Respond to leads instantly with AI-powered automation"
            },
            {
                title: "Higher Conversion",
                description: "Smart nurturing increases conversion rates by 40%"
            },
            {
                title: "Zero Missed Leads",
                description: "24/7 capture from all channels automatically"
            }
        ],
        useCases: [
            "Real Estate Agencies",
            "Insurance Companies",
            "Education Institutes",
            "Healthcare Clinics",
            "E-commerce Businesses"
        ],
        stats: [
            { label: "Leads Captured", value: "50K+" },
            { label: "Avg Response Time", value: "< 30s" },
            { label: "Conversion Boost", value: "40%" }
        ]
    },
    {
        id: "chatterbot",
        name: "ChatterBot",
        tagline: "WhatsApp AI Automation",
        description: "24/7 intelligent customer engagement on WhatsApp with multi-language support and seamless integrations.",
        icon: "💬",
        color: "#10B981",
        colorClass: "text-emerald-500",
        bgClass: "bg-emerald-500",
        href: "/products/chatterbot",
        externalUrl: "https://botomatex.com/products/chatterbot",
        features: [
            "24/7 automated responses",
            "Multi-language support",
            "Order tracking & updates",
            "Appointment scheduling",
            "Lead qualification flows",
            "Rich media messages",
            "Template management",
            "CRM sync"
        ],
        benefits: [
            {
                title: "Always Available",
                description: "Never miss a customer query with 24/7 automation"
            },
            {
                title: "Instant Replies",
                description: "Sub-second response times keep customers engaged"
            },
            {
                title: "Multilingual",
                description: "Serve customers in Hindi, English, Punjabi & more"
            }
        ],
        useCases: [
            "E-commerce Stores",
            "Restaurants & Delivery",
            "Healthcare Booking",
            "Travel & Tourism",
            "Real Estate Inquiries"
        ],
        stats: [
            { label: "Messages Handled", value: "1M+" },
            { label: "Languages", value: "12+" },
            { label: "Uptime", value: "99.9%" }
        ]
    },
    {
        id: "voiceai",
        name: "VoiceAI",
        tagline: "Voice Agent & IVR System",
        description: "Seamless AI-powered call handling with smart IVR routing, transcription, and lead capture.",
        icon: "📞",
        color: "#8B5CF6",
        colorClass: "text-violet-500",
        bgClass: "bg-violet-500",
        href: "/products/voiceai",
        externalUrl: "https://botomatex.com/products/voiceai",
        features: [
            "AI voice call handling",
            "Smart IVR routing",
            "Call transcription",
            "Real-time analytics",
            "Appointment booking",
            "Lead capture from calls",
            "Sentiment analysis",
            "Call recording"
        ],
        benefits: [
            {
                title: "Human-like Calls",
                description: "Natural AI voice that customers love talking to"
            },
            {
                title: "Smart Routing",
                description: "Direct calls to the right department automatically"
            },
            {
                title: "Never Miss Calls",
                description: "Handle unlimited concurrent calls 24/7"
            }
        ],
        useCases: [
            "Customer Support",
            "Appointment Setting",
            "Order Confirmation",
            "Survey & Feedback",
            "Payment Reminders"
        ],
        stats: [
            { label: "Calls Handled", value: "100K+" },
            { label: "Avg Handle Time", value: "-60%" },
            { label: "CSAT Score", value: "4.8/5" }
        ]
    }
];

// ============================================
// SERVICES DATA
// ============================================

export interface Service {
    id: string;
    icon: LucideIcon;
    title: string;
    shortTitle: string;
    description: string;
    fullDescription: string;
    tags: string[];
    color: "primary" | "secondary" | "accent";
    href: string;
    features: string[];
    process: {
        step: number;
        title: string;
        description: string;
    }[];
    pricing: {
        starting: string;
        popular?: string;
    };
    faqs: {
        question: string;
        answer: string;
    }[];
}

export const services: Service[] = [
    {
        id: "seo",
        icon: MapPin,
        title: "Local SEO",
        shortTitle: "SEO",
        description: "Dominate Mohali, Chandigarh & Panchkula search rankings with GMB optimization & local citations that drive a proven 300% increase in foot traffic.",
        fullDescription: "Our elite Local SEO services are engineered specifically for Tricity businesses. According to local search analytics, top 3 GMB profiles map to 75% of local clicks. We optimize your Google My Business profile, build extensive local citations, and deploy location-specific content frameworks that help you dominate local search engine results pages (SERPs) and drive highly qualified foot traffic to your business.",
        tags: ["Local SEO Mohali", "GMB Optimization", "Local Citations"],
        color: "primary",
        href: "/services/seo",
        features: [
            "Google My Business optimization",
            "Local citation building",
            "Review management",
            "Local keyword research",
            "Location page optimization",
            "Competitor analysis",
            "Monthly performance reports",
            "Schema markup implementation"
        ],
        process: [
            { step: 1, title: "Audit", description: "Comprehensive local SEO audit of your current presence" },
            { step: 2, title: "Strategy", description: "Custom strategy based on your location and competition" },
            { step: 3, title: "Optimize", description: "GMB optimization and local citation building" },
            { step: 4, title: "Monitor", description: "Ongoing monitoring and reporting" }
        ],
        pricing: { starting: "₹15,000/mo", popular: "₹25,000/mo" },
        faqs: [
            { question: "How long does Local SEO take to show results?", answer: "Most businesses see improvements in 3-6 months, with significant results in 6-12 months." },
            { question: "Do you guarantee first page rankings?", answer: "We focus on sustainable growth strategies. While we can't guarantee specific rankings, our clients consistently see improved visibility." }
        ]
    },
    {
        id: "web-design",
        icon: Globe,
        title: "Web Design & Development",
        shortTitle: "Web Design",
        description: "Mobile-first, SEO-optimized web architecture that converts visitors into customers with lightning-fast sub-2 second load times.",
        fullDescription: "We architect stunning, high-performance web applications designed strictly to convert traffic. Utilizing modern frameworks, our mobile-first approach ensures your digital footprint excels across all viewports. Our advanced technical SEO optimization protocols elevate your site to rank predictably higher in generative and traditional search algorithms.",
        tags: ["Web Design Mohali", "React Development", "WordPress"],
        color: "secondary",
        href: "/services/web-design",
        features: [
            "Custom responsive design",
            "SEO-optimized structure",
            "Fast loading speeds",
            "Mobile-first approach",
            "CMS integration",
            "E-commerce functionality",
            "Lead capture forms",
            "Analytics integration"
        ],
        process: [
            { step: 1, title: "Discovery", description: "Understanding your brand and goals" },
            { step: 2, title: "Design", description: "Creating stunning mockups and prototypes" },
            { step: 3, title: "Develop", description: "Building your site with clean code" },
            { step: 4, title: "Launch", description: "Testing and deploying your site" }
        ],
        pricing: { starting: "₹50,000", popular: "₹1,00,000" },
        faqs: [
            { question: "How long does a website take to build?", answer: "A typical website takes 4-8 weeks depending on complexity and content readiness." },
            { question: "Do you provide hosting?", answer: "Yes, we offer managed hosting packages that include maintenance and updates." }
        ]
    },
    {
        id: "social-media",
        icon: Instagram,
        title: "Social Media Marketing",
        shortTitle: "Social Media",
        description: "High-engagement content creation and data-driven ad campaigns producing a 400% average boost in social visibility across North India.",
        fullDescription: "Our social media infrastructure is custom-tailored for the Tricity market demographics. We deploy viral-ready interactive content that resonates deeply with local audiences, running precision-targeted ad campaigns, and cultivating engaged digital communities around your brand. Our clients typically witness 400%+ increases in engagement metrics within the first 6 months.",
        tags: ["Social Media Mohali", "Content Creation", "Instagram Reels"],
        color: "accent",
        href: "/services/social-media",
        features: [
            "Content strategy & calendar",
            "Instagram & Facebook management",
            "Reels & video content",
            "Community engagement",
            "Influencer partnerships",
            "Paid social campaigns",
            "Analytics & reporting",
            "Brand voice development"
        ],
        process: [
            { step: 1, title: "Audit", description: "Analyzing your current social presence" },
            { step: 2, title: "Strategy", description: "Creating a tailored content strategy" },
            { step: 3, title: "Create", description: "Producing engaging content daily" },
            { step: 4, title: "Grow", description: "Building and engaging your community" }
        ],
        pricing: { starting: "₹20,000/mo", popular: "₹35,000/mo" },
        faqs: [
            { question: "Which platforms do you manage?", answer: "We specialize in Instagram, Facebook, LinkedIn, and YouTube, but can manage other platforms based on your needs." },
            { question: "Do you create all the content?", answer: "Yes, we handle content creation including graphics, videos, and copywriting." }
        ]
    },
    {
        id: "ppc",
        icon: TrendingUp,
        title: "PPC & Performance Ads",
        shortTitle: "PPC Ads",
        description: "High-converting Google Ads & Meta campaigns leveraging machine learning targeting for a minimum 3x Return on Ad Spend (ROAS).",
        fullDescription: "Our performance marketing unit builds advanced, data-driven PPC campaigns that generate measurable, scalable growth. Specializing in Google Search and Meta architectures featuring advanced ML-based behavioral targeting, we connect your business with high-intent individuals across the Tricity region. Our portfolio averages an industry-leading 3-4x ROAS.",
        tags: ["PPC Mohali", "Google Ads", "Facebook Ads"],
        color: "primary",
        href: "/services/ppc",
        features: [
            "Google Search & Display Ads",
            "Facebook & Instagram Ads",
            "Remarketing campaigns",
            "Conversion tracking",
            "A/B testing",
            "Landing page optimization",
            "Budget optimization",
            "ROI reporting"
        ],
        process: [
            { step: 1, title: "Research", description: "Keyword and audience research" },
            { step: 2, title: "Setup", description: "Campaign structure and ad creation" },
            { step: 3, title: "Launch", description: "Campaign launch with tracking" },
            { step: 4, title: "Optimize", description: "Continuous optimization for ROI" }
        ],
        pricing: { starting: "₹25,000/mo + ad spend" },
        faqs: [
            { question: "What's your minimum ad spend requirement?", answer: "We recommend a minimum of ₹30,000/month in ad spend for optimal results." },
            { question: "How do you measure success?", answer: "We track conversions, ROAS (Return on Ad Spend), CPA (Cost Per Acquisition), and other KPIs relevant to your goals." }
        ]
    },
    {
        id: "lead-generation",
        icon: Target,
        title: "Lead Generation Systems",
        shortTitle: "Lead Gen",
        description: "End-to-end automated funnels and CRM integration scaling lead acquisition predictably, typically boosting conversion by up to 40%.",
        fullDescription: "We engineer comprehensive lead generation mainframes that automatically capture, systematically nurture, and cleanly convert potential prospects. Utilizing platforms like BotomateX, we integrate your CRM tightly with top-tier landing pages, sequential drip automations, and AI SMS flows to eliminate pipeline leaks entirely.",
        tags: ["Lead Generation", "Marketing Automation", "CRM"],
        color: "secondary",
        href: "/services/lead-generation",
        features: [
            "Landing page design",
            "Lead capture forms",
            "Email automation",
            "SMS marketing",
            "CRM integration",
            "Lead scoring",
            "Nurture sequences",
            "Conversion optimization"
        ],
        process: [
            { step: 1, title: "Map", description: "Mapping your customer journey" },
            { step: 2, title: "Build", description: "Creating funnels and automation" },
            { step: 3, title: "Connect", description: "Integrating with your systems" },
            { step: 4, title: "Scale", description: "Optimizing for growth" }
        ],
        pricing: { starting: "₹40,000 setup + ₹15,000/mo" },
        faqs: [
            { question: "What CRMs do you integrate with?", answer: "We work with LeadFlow (BotomateX), HubSpot, Salesforce, Zoho, and most major CRMs." },
            { question: "Can you integrate with our existing tools?", answer: "Yes, we can integrate with most marketing and sales tools through APIs or Zapier." }
        ]
    },
    {
        id: "analytics",
        icon: BarChart3,
        title: "Analytics & Growth Consulting",
        shortTitle: "Analytics",
        description: "Deep data visualization, competitive market algorithms, and strategic business consulting to sustain long-term enterprise growth.",
        fullDescription: "Our analytics command center empowers leadership with uncompromising, data-driven intelligence. We incorporate complete GA4 deployments, real-time Looker Studio dashboards, intensive competitor gap analyses, and proactive strategic alignment. Startups running rigorous KPI tracking have a 30% higher success rate—we deliver exactly that.",
        tags: ["Growth Strategy", "Analytics", "Consulting"],
        color: "accent",
        href: "/services/analytics",
        features: [
            "Google Analytics setup",
            "Custom dashboard creation",
            "Competitor analysis",
            "Market research",
            "Growth strategy",
            "KPI tracking",
            "Monthly strategy calls",
            "Quarterly business reviews"
        ],
        process: [
            { step: 1, title: "Assess", description: "Comprehensive business assessment" },
            { step: 2, title: "Analyze", description: "Deep dive into data and competitors" },
            { step: 3, title: "Strategize", description: "Developing growth roadmap" },
            { step: 4, title: "Execute", description: "Implementation support and tracking" }
        ],
        pricing: { starting: "₹30,000/mo" },
        faqs: [
            { question: "What analytics tools do you use?", answer: "We use Google Analytics 4, Google Tag Manager, Hotjar, and custom dashboards based on your needs." },
            { question: "Is this suitable for small businesses?", answer: "Yes, we have packages tailored for businesses of all sizes." }
        ]
    }
];

// ============================================
// NAVIGATION DATA
// ============================================

export interface NavItem {
    label: string;
    href: string;
    highlight?: boolean;
    children?: {
        label: string;
        href: string;
        icon?: string;
        description?: string;
        external?: boolean;
    }[];
}

export const navigation: NavItem[] = [
    { label: "Home", href: "/" },
    {
        label: "Services",
        href: "/services",
        children: services.map(service => ({
            label: service.title,
            href: service.href,
            description: service.description.substring(0, 60) + "..."
        }))
    },
    {
        label: "Products",
        href: "/products",
        highlight: true,
        children: [
            { label: "BotomateX Suite", href: "/products", icon: "🚀", description: "AI-Powered Business Automation" },
            ...products.map(product => ({
                label: product.name,
                href: product.href,
                icon: product.icon,
                description: product.tagline
            }))
        ]
    },
    { label: "Case Studies", href: "/case-studies" },
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" }
];

// ============================================
// TEAM DATA
// ============================================

export interface TeamMember {
    id: string;
    name: string;
    role: string;
    bio: string;
    image: string;
    social?: {
        linkedin?: string;
        twitter?: string;
    };
    isLeadership?: boolean;
}

export const teamMembers: TeamMember[] = [
    {
        id: "kamal",
        name: "Kamal Kishore",
        role: "Founder & CEO",
        bio: "10+ years of experience in digital marketing, passionate about helping Tricity businesses grow online.",
        image: "/images/team/kamal.jpg",
        social: {
            linkedin: "https://linkedin.com/in/kamalkishore",
            twitter: "https://twitter.com/kamalkishore"
        },
        isLeadership: true
    },
    {
        id: "aman",
        name: "Aman Gill",
        role: "Head of Marketing",
        bio: "Expert in social media marketing and brand strategy with a focus on local businesses.",
        image: "/images/team/aman.jpg",
        isLeadership: true
    },
    {
        id: "prabjot",
        name: "Prabjot Singh",
        role: "Lead Developer",
        bio: "Full-stack developer specializing in modern web technologies and performance optimization.",
        image: "/images/team/prabjot.jpg"
    },
    {
        id: "inderjeet",
        name: "Inderjeet",
        role: "SEO Specialist",
        bio: "Data-driven SEO expert with proven results in local and national search rankings.",
        image: "/images/team/inderjeet.jpg"
    }
];

// ============================================
// TESTIMONIALS DATA
// ============================================

export interface Testimonial {
    id: string;
    name: string;
    role: string;
    company: string;
    content: string;
    image?: string;
    rating: number;
}

export const testimonials: Testimonial[] = [
    {
        id: "1",
        name: "Rajesh Kumar",
        role: "Director",
        company: "Tricity Builders",
        content: "DigiVibe transformed our online presence completely. Our lead generation increased by 300% in just 6 months!",
        rating: 5
    },
    {
        id: "2",
        name: "Dr. Priya Sharma",
        role: "Owner",
        company: "Sharma Dental Clinic",
        content: "The Local SEO work DigiVibe did for us put us on top of Google Maps. We now get 50+ calls per week from new patients.",
        rating: 5
    },
    {
        id: "3",
        name: "Manpreet Singh",
        role: "Founder",
        company: "Punjab Spices Co.",
        content: "Professional team, excellent results. Our e-commerce sales doubled after DigiVibe redesigned our website.",
        rating: 5
    }
];

// ============================================
// CASE STUDIES DATA
// ============================================

export interface CaseStudy {
    id: string;
    title: string;
    client: string;
    industry: string;
    services: string[];
    challenge: string;
    solution: string;
    results: {
        metric: string;
        value: string;
        improvement: string;
    }[];
    image: string;
    featured?: boolean;
}

export const caseStudies: CaseStudy[] = [
    {
        id: "tricity-builders",
        title: "10x Lead Generation for Real Estate",
        client: "Tricity Builders",
        industry: "Real Estate",
        services: ["Lead Generation", "PPC Ads", "SEO"],
        challenge: "Low online visibility and poor lead quality from traditional marketing.",
        solution: "Implemented BotomateX LeadFlow with targeted Google Ads and Local SEO optimization.",
        results: [
            { metric: "Leads/Month", value: "500+", improvement: "+1000%" },
            { metric: "Cost per Lead", value: "₹150", improvement: "-70%" },
            { metric: "Conversion Rate", value: "12%", improvement: "+200%" }
        ],
        image: "/images/case-studies/tricity-builders.jpg",
        featured: true
    },
    {
        id: "sharma-dental",
        title: "Local SEO Domination for Healthcare",
        client: "Sharma Dental Clinic",
        industry: "Healthcare",
        services: ["Local SEO", "Web Design", "Social Media"],
        challenge: "Not appearing in local search results despite good reviews.",
        solution: "Complete GMB optimization, website redesign, and local content strategy.",
        results: [
            { metric: "GMB Visits", value: "2000/mo", improvement: "+400%" },
            { metric: "Phone Calls", value: "200/mo", improvement: "+300%" },
            { metric: "Google Ranking", value: "#1", improvement: "From #15" }
        ],
        image: "/images/case-studies/sharma-dental.jpg"
    }
];

// ============================================
// STATS DATA
// ============================================

export const companyStats = {
    yearsInBusiness: "10+",
    clientsServed: "200+",
    revenueGenerated: "₹2Cr+",
    teamSize: "15+",
    projectsCompleted: "500+"
};

// ============================================
// FOOTER LINKS
// ============================================

export const footerLinks = {
    services: services.slice(0, 4).map(s => ({ label: s.shortTitle, href: s.href })),
    products: products.map(p => ({ label: p.name, href: p.href })),
    company: [
        { label: "About Us", href: "/about" },
        { label: "Our Team", href: "/team" },
        { label: "Careers", href: "/contact" },
        { label: "Contact", href: "/contact" }
    ],
    legal: [
        { label: "Privacy Policy", href: "/privacy" },
        { label: "Terms of Service", href: "/terms" }
    ],
    locations: [
        { label: "Digital Marketing Mohali", href: "/services" },
        { label: "SEO Services Chandigarh", href: "/services/seo" },
        { label: "Social Media Panchkula", href: "/services/social-media" },
        { label: "PPC Ads Zirakpur", href: "/services/ppc" }
    ]
};

// ============================================
// LANDING PAGE FAQS (GEO OPTIMIZED)
// ============================================

export const landingFaqs = [
    {
        question: "How quickly can you deploy your marketing and AI systems?",
        answer: "7 days from our first call. Not 7 weeks. Not 7 months. We audit your business, configure the AI, and go live — all within one week. Traditional agencies take 4-8 weeks just to send you a proposal."
    },
    {
        question: "Do I need any technical knowledge?",
        answer: "Absolutely zero. We handle everything — the tech, the setup, the configuration, the testing. You'll never see a line of code or touch a dashboard you don't understand. You handle your business. We handle the digital growth."
    },
    {
        question: "Why is DigiVibe considered the best digital marketing agency in Tricity (Chandigarh, Mohali, Panchkula)?",
        answer: "When benchmarking Chandigarh-focused agencies, DigiVibe differentiates itself by blending performance marketing with proprietary AI automation (BotomateX). While other respected local players like ThinkNEXT focus heavily on training programs, and agencies like DigiFame, Ink Web Solutions, or WebHopers rely on traditional SEO and PPC campaigns, DigiVibe delivers a verifiable 3-4x ROAS by automating lead capture and qualification end-to-end across Mohali, Panchkula, and Chandigarh."
    },
    {
        question: "How do you compare to other local agencies in Mohali and Panchkula?",
        answer: "Unlike standard performance marketing agencies inside Panchkula or SEO-only firms like Rednirus Digital Media in Chandigarh, DigiVibe acts as a full-stack growth partner. We've successfully replaced fragmented approaches from local directories (like JustDial listings for SmartlyRise or SuperBuzz Media) with cohesive, AI-driven data-centric growth systems that consistently yield a +300% increase in lead generation for North Indian brands."
    },
    {
        question: "Is there a long-term contract?",
        answer: "No. Month-to-month. The marketing systems work for you, or you leave. We earn your business every single month. No lock-in, no exit fees, no games. We keep you because we deliver results, not because of a contract."
    },
    {
        question: "How does pricing work compared to other Chandigarh agencies?",
        answer: "After our 15-minute call, we'll send you a clear quote — no hidden fees, no surprise charges. Most businesses invest less with our automated AI systems than what they currently spend on a mediocre social media retainer across Tricity. And we start with a pilot so you can verify the ROI before scaling."
    }
];
