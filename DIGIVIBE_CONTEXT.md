# 🚀 DigiVibe Agency Website + BotomateX Integration

## Project Context Document

> **Purpose:** This document serves as the comprehensive implementation context for transforming DigiVibe into a complete, multi-page digital marketing agency website with BotomateX product integration.

---

## 📋 Table of Contents

1. [Brand Overview](#brand-overview)
2. [Current State Analysis](#current-state-analysis)
3. [Target Architecture](#target-architecture)
4. [BotomateX Integration](#botomatex-integration)
5. [New Pages Specification](#new-pages-specification)
6. [Design System](#design-system)
7. [Routes & Navigation](#routes--navigation)
8. [SEO Strategy](#seo-strategy)
9. [Implementation Phases](#implementation-phases)

---

## 🏢 Brand Overview

### DigiVibe Digital Marketing Agency

| Attribute | Details |
|-----------|---------|
| **Brand Name** | DigiVibe Digital Marketing Agency |
| **Tagline** | North India's Premier Digital Growth Partner |
| **Location** | Mohali, Punjab, India |
| **Service Area** | Mohali, Chandigarh, Panchkula, Zirakpur, Tricity Region |
| **Primary Domain** | digivibe.in |
| **Product Domain** | botomatex.com |

### Brand Colors (Current)
```css
--primary: Pink/Magenta gradient
--secondary: Red accent
--background: Dark theme
--foreground: Light text
```

### Brand Values
- **Local Expertise** - Deep understanding of Tricity market
- **Innovation** - AI-powered solutions through BotomateX
- **Results-Driven** - Measurable ROI focus
- **Full-Service** - Comprehensive digital solutions

---

## 📊 Current State Analysis

### Project Location
```
/Users/kamalkishore/Desktop/DigiVibeConnect/client/
```

### Tech Stack
| Technology | Purpose |
|------------|---------|
| React + TypeScript | Frontend framework |
| Vite | Build tool |
| TailwindCSS | Styling |
| Wouter | Routing |
| Lucide React | Icons |
| Tanstack Query | Data fetching |

### Current Structure
```
client/
├── src/
│   ├── App.tsx                 # Main app with routing
│   ├── pages/
│   │   ├── home.tsx            # Single-page home
│   │   └── not-found.tsx       # 404 page
│   └── components/
│       ├── Header.tsx          # Navigation header
│       ├── Hero.tsx            # Hero section
│       ├── About.tsx           # About section
│       ├── Services.tsx        # Services section
│       ├── CaseStudies.tsx     # Case studies section
│       ├── IndustriesSection.tsx # Industries served
│       ├── TestimonialSlider.tsx # Testimonials
│       ├── Contact.tsx         # Contact form
│       ├── Footer.tsx          # Site footer
│       └── ui/                 # UI component library
```

### Current Limitations
- ❌ Single-page website (no multi-page navigation)
- ❌ No product pages for BotomateX suite
- ❌ No dedicated team page
- ❌ No individual service detail pages
- ❌ No blog/resources section
- ❌ No pricing page
- ❌ Missing BotomateX branding integration

---

## 🎯 Target Architecture

### New Page Structure
```
/                           → Home (redesigned)
/about                      → About DigiVibe (expanded)
/team                       → Meet Our Team
/services                   → All Services Overview
/services/seo               → Local SEO Service
/services/web-design        → Web Design & Development
/services/social-media      → Social Media Marketing
/services/ppc               → PPC & Performance Ads
/services/lead-generation   → Lead Generation Systems
/services/analytics         → Analytics & Consulting
/case-studies               → All Case Studies
/case-studies/[slug]        → Individual Case Study
/products                   → BotomateX Suite Overview
/products/leadflow          → LeadFlow CRM
/products/chatterbot        → ChatterBot WhatsApp
/products/voiceai           → VoiceAI System
/pricing                    → Pricing Plans
/blog                       → Blog/Resources
/contact                    → Contact Page
/privacy                    → Privacy Policy
/terms                      → Terms of Service
```

---

## 🤖 BotomateX Integration

### Product Suite Overview

BotomateX is DigiVibe's flagship AI-powered business automation product suite.

| Product | Icon | Color | Description |
|---------|------|-------|-------------|
| **LeadFlow** | 🔷 | Blue (`#3B82F6`) | AI-Powered CRM that captures, nurtures, and converts leads automatically |
| **ChatterBot** | 💬 | Green (`#10B981`) | WhatsApp Automation for 24/7 intelligent customer engagement |
| **VoiceAI** | 📞 | Purple (`#8B5CF6`) | Voice Agent & IVR system for seamless call handling |

### BotomateX Key Features

#### LeadFlow CRM
- Lead capture from multiple channels
- AI-powered lead scoring
- Automated follow-up sequences
- CRM integration
- Real-time analytics dashboard

#### ChatterBot (WhatsApp AI)
- 24/7 automated responses
- Multi-language support
- Order tracking & updates
- Appointment scheduling
- Lead qualification flows

#### VoiceAI (Voice Agent)
- AI voice call handling
- Smart IVR routing
- Call transcription & analytics
- Appointment booking
- Lead capture from calls

### Integration Points

#### Header Navigation
```tsx
// Add Products dropdown
Products ▼
├── BotomateX Suite
├── LeadFlow
├── ChatterBot
└── VoiceAI
```

#### Hero Section
- Add "Powered by BotomateX" badge
- Feature AI automation capabilities

#### Services Section
- Cross-link Lead Generation to LeadFlow
- Show BotomateX as technology partner

#### Footer
- Add BotomateX product links
- Link to botomatex.com

#### CTA Buttons
```tsx
// Primary CTA options
"Start with BotomateX" → https://botomatex.com
"Try LeadFlow Free" → https://botomatex.com/leadflow
"Get Started with AI" → /products
```

---

## 📄 New Pages Specification

### 1. Products Page (`/products`)

**Purpose:** Showcase the BotomateX product suite

**Sections:**
1. **Hero** - BotomateX brand introduction
2. **Product Grid** - Three products with hover cards
3. **Comparison Table** - Feature comparison
4. **Integration Section** - "Works with your stack"
5. **CTA** - "Explore BotomateX" → botomatex.com

### 2. Individual Product Pages

#### LeadFlow (`/products/leadflow`)
- Hero with blue theme
- Feature breakdown (6-8 features)
- How it works visualization
- Pricing teaser
- CTA to botomatex.com/leadflow

#### ChatterBot (`/products/chatterbot`)
- Hero with green theme
- WhatsApp integration showcase
- Use cases (E-commerce, Real Estate, etc.)
- Demo chat interface mockup
- CTA to botomatex.com/chatterbot

#### VoiceAI (`/products/voiceai`)
- Hero with purple theme
- Voice capabilities demo
- Call flow visualization
- Industry applications
- CTA to botomatex.com/voiceai

### 3. Team Page (`/team`)

**Sections:**
1. **Hero** - "Meet the Minds Behind DigiVibe"
2. **Leadership Grid** - Founder/CEO profiles
3. **Team Grid** - Core team members
4. **Culture Section** - Office photos, values
5. **Join Us CTA** - Careers opportunity

### 4. Services Overview (`/services`)

**Purpose:** Central hub for all service offerings

**Sections:**
1. **Hero** - "Full-Suite Digital Marketing Solutions"
2. **Service Grid** - 6 services with cards
3. **Process Section** - How we work
4. **Industries Served** - Link to detailed section
5. **CTA** - Contact for consultation

### 5. Individual Service Pages

Each service page follows this template:
1. **Hero** - Service-specific headline
2. **Problem/Solution** - Pain points we solve
3. **What's Included** - Detailed deliverables
4. **Process** - Step-by-step approach
5. **Case Study Preview** - Related success story
6. **Pricing Teaser** - Starting from ₹X/month
7. **FAQ** - Service-specific questions
8. **CTA** - Get started

### 6. Case Studies Hub (`/case-studies`)

**Sections:**
1. **Hero** - "Our Success Stories"
2. **Featured Case Study** - Large highlight
3. **Filter Tabs** - By industry/service
4. **Case Study Grid** - Cards with metrics
5. **CTA** - "Let's write your success story"

### 7. Blog/Resources (`/blog`)

**Sections:**
1. **Hero** - "Digital Marketing Insights"
2. **Featured Post** - Large card
3. **Category Tabs** - SEO, Social, Ads, etc.
4. **Post Grid** - 6-9 posts per page
5. **Newsletter CTA** - Subscribe form

### 8. Pricing Page (`/pricing`)

**Sections:**
1. **Hero** - Simple pricing, powerful results
2. **Toggle** - Monthly/Annual switch
3. **Service Pricing Cards** - 3 tiers
4. **BotomateX Addon** - Product pricing
5. **Custom Quote CTA** - Enterprise option
6. **FAQ** - Pricing questions

### 9. Dedicated Contact Page (`/contact`)

**Sections:**
1. **Hero** - "Let's Talk Growth"
2. **Contact Form** - Enhanced form
3. **Contact Methods** - Phone, Email, WhatsApp
4. **Office Location** - Map embed
5. **Working Hours** - Availability
6. **FAQ** - Contact questions

---

## 🎨 Design System

### Color Palette Extended

```css
/* Primary Brand */
--digivibe-primary: #FF2D55;      /* Pink/Magenta */
--digivibe-secondary: #FF3232;     /* Red */

/* BotomateX Products */
--leadflow-primary: #3B82F6;       /* Blue */
--leadflow-secondary: #60A5FA;
--chatterbot-primary: #10B981;     /* Green */
--chatterbot-secondary: #34D399;
--voiceai-primary: #8B5CF6;        /* Purple */
--voiceai-secondary: #A78BFA;

/* Neutrals */
--bg-dark: #0F0F0F;
--bg-card: #1A1A1A;
--text-primary: #FFFFFF;
--text-secondary: #A1A1A1;
```

### Typography

```css
/* Headings */
font-family: 'Poppins', sans-serif;
font-weight: 600-800;

/* Body */
font-family: 'Inter', sans-serif;
font-weight: 300-500;

/* Brand */
font-family: 'Montserrat', sans-serif;
font-weight: 500-700;
```

### Component Patterns

#### Product Card
```tsx
<ProductCard
  product="leadflow" | "chatterbot" | "voiceai"
  icon={<Icon />}
  title="Product Name"
  description="Brief description"
  features={['Feature 1', 'Feature 2', 'Feature 3']}
  primaryColor="#3B82F6"
  ctaText="Learn More"
  ctaLink="/products/leadflow"
/>
```

#### Service Card
```tsx
<ServiceCard
  icon={<MapPin />}
  title="Local SEO"
  description="Service description"
  tags={['SEO Mohali', 'GMB']}
  link="/services/seo"
/>
```

---

## 🧭 Routes & Navigation

### Updated App.tsx Routes

```tsx
// App.tsx routing structure
<Switch>
  {/* Main Pages */}
  <Route path="/" component={Home} />
  <Route path="/about" component={About} />
  <Route path="/team" component={Team} />
  
  {/* Services */}
  <Route path="/services" component={ServicesHub} />
  <Route path="/services/:slug" component={ServiceDetail} />
  
  {/* Products (BotomateX) */}
  <Route path="/products" component={ProductsHub} />
  <Route path="/products/leadflow" component={LeadFlowPage} />
  <Route path="/products/chatterbot" component={ChatterBotPage} />
  <Route path="/products/voiceai" component={VoiceAIPage} />
  
  {/* Case Studies */}
  <Route path="/case-studies" component={CaseStudiesHub} />
  <Route path="/case-studies/:slug" component={CaseStudyDetail} />
  
  {/* Other Pages */}
  <Route path="/pricing" component={Pricing} />
  <Route path="/blog" component={Blog} />
  <Route path="/contact" component={ContactPage} />
  <Route path="/privacy" component={Privacy} />
  <Route path="/terms" component={Terms} />
  
  {/* 404 */}
  <Route component={NotFound} />
</Switch>
```

### Header Navigation Update

```tsx
const navigation = [
  { label: 'Home', href: '/' },
  { 
    label: 'Services',
    href: '/services',
    children: [
      { label: 'Local SEO', href: '/services/seo' },
      { label: 'Web Design', href: '/services/web-design' },
      { label: 'Social Media', href: '/services/social-media' },
      { label: 'PPC Ads', href: '/services/ppc' },
      { label: 'Lead Generation', href: '/services/lead-generation' },
      { label: 'Analytics', href: '/services/analytics' },
    ]
  },
  {
    label: 'Products',
    href: '/products',
    highlight: true, // BotomateX badge
    children: [
      { label: 'BotomateX Suite', href: '/products', icon: '🚀' },
      { label: 'LeadFlow', href: '/products/leadflow', icon: '🔷' },
      { label: 'ChatterBot', href: '/products/chatterbot', icon: '💬' },
      { label: 'VoiceAI', href: '/products/voiceai', icon: '📞' },
    ]
  },
  { label: 'Case Studies', href: '/case-studies' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
];
```

---

## 🔍 SEO Strategy

### Meta Tags Per Page

| Page | Title Template | Focus Keywords |
|------|---------------|----------------|
| Home | `DigiVibe - Digital Marketing Agency Mohali | AI-Powered Growth` | digital marketing mohali, seo chandigarh |
| Products | `BotomateX - AI Business Automation Suite by DigiVibe` | ai automation, lead generation software |
| LeadFlow | `LeadFlow AI CRM - Automated Lead Management | BotomateX` | ai crm, lead management software |
| Services | `Digital Marketing Services Tricity | SEO, PPC, Social Media` | digital marketing services |
| Team | `Our Team - DigiVibe Digital Marketing Agency` | digital marketing team mohali |

### Schema Markup

```json
{
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "DigiVibe Digital Marketing Agency",
  "url": "https://digivibe.in",
  "logo": "https://digivibe.in/logo.png",
  "sameAs": [
    "https://facebook.com/digivibe",
    "https://instagram.com/digi___vibe"
  ],
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+91-XXXX-XXXXXX",
    "contactType": "sales"
  },
  "makesOffer": [
    {
      "@type": "Offer",
      "itemOffered": {
        "@type": "Service",
        "name": "Digital Marketing Services"
      }
    },
    {
      "@type": "Offer",
      "itemOffered": {
        "@type": "SoftwareApplication",
        "name": "BotomateX",
        "applicationCategory": "BusinessApplication"
      }
    }
  ]
}
```

---

## 📅 Implementation Phases

### Phase 1: Foundation (Priority: High)
- [x] Create context document
- [ ] Update App.tsx with new routes
- [ ] Create reusable page layout component
- [ ] Update Header with mega menu navigation
- [ ] Update Footer with new links

### Phase 2: BotomateX Pages (Priority: High)
- [ ] Create `/products` - BotomateX Hub page
- [ ] Create `/products/leadflow` - LeadFlow detail page
- [ ] Create `/products/chatterbot` - ChatterBot detail page
- [ ] Create `/products/voiceai` - VoiceAI detail page
- [ ] Add BotomateX badges to home page

### Phase 3: Agency Pages (Priority: Medium)
- [ ] Create `/about` - Expanded about page
- [ ] Create `/team` - Team members page
- [ ] Create `/services` - Services hub
- [ ] Create individual service detail pages
- [ ] Create `/pricing` - Pricing page

### Phase 4: Content Pages (Priority: Medium)
- [ ] Create `/case-studies` - Case studies hub
- [ ] Create `/case-studies/[slug]` - Detail template
- [ ] Create `/contact` - Dedicated contact page
- [ ] Create `/blog` - Blog hub (can be placeholder)

### Phase 5: Polish & Legal (Priority: Low)
- [ ] Create `/privacy` - Privacy policy
- [ ] Create `/terms` - Terms of service
- [ ] SEO optimization pass
- [ ] Performance optimization
- [ ] Mobile responsiveness audit

---

## 🔗 External Links

| Resource | URL |
|----------|-----|
| BotomateX Live | [botomatex.com](https://botomatex.com) |
| LeadFlow | [botomatex.com/products/leadflow](https://botomatex.com/products/leadflow) |
| ChatterBot | [botomatex.com/products/chatterbot](https://botomatex.com/products/chatterbot) |
| VoiceAI | [botomatex.com/products/voiceai](https://botomatex.com/products/voiceai) |

---

## 📝 Notes

1. **BotomateX CTAs** should open in new tab (`target="_blank"`) when linking to botomatex.com
2. **Product pages on DigiVibe** are informational - actual signup/dashboard is on BotomateX
3. **Maintain SEO** continuity with existing Mohali/Tricity focus
4. **Mobile-first** approach for all new pages
5. **Consistent animations** using existing Framer Motion patterns

---

> **Document Version:** 1.0  
> **Created:** January 17, 2026  
> **Last Updated:** January 17, 2026  
> **Author:** AI Assistant for DigiVibe Team

---

*© 2026 DigiVibe Digital Marketing Agency. All Rights Reserved.*
