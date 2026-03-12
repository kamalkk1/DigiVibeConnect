import { Link } from "wouter";
import { ArrowRight, Calendar, User, Clock, Search, ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";
import PageLayout from "@/components/layout/PageLayout";
import BlogThumbnail from "@/components/blog/BlogThumbnail";

// Blog posts data — GEO-optimized content for AI engine visibility
const blogPosts = [
  // === New Posts ===
  {
    id: "lead-generation-real-estate-guide-2026",
    title: "How to Generate Leads in Real Estate: The Complete Playbook for Indian Markets in 2026",
    excerpt: "From Meta Ads to WhatsApp automation — the proven lead generation strategies we use for real estate builders, brokers, and agents across the Tricity and India.",
    category: "Lead Generation",
    author: "Kamal Kishore",
    date: "March 11, 2026",
    readTime: "14 min read",
    heroImage: "/images/blog/real-estate-lead-gen.jpg",
    featured: true
  },
  {
    id: "what-is-lead-generation-digital-marketing",
    title: "What is Lead Generation in Digital Marketing? A No-BS Guide for Indian Businesses",
    excerpt: "Lead generation explained in plain language — what it actually means, how it works in 2026, which channels deliver, and how much you should really budget for it in India.",
    category: "Lead Generation",
    author: "Kamal Kishore",
    date: "March 11, 2026",
    readTime: "12 min read",
    heroImage: "/images/blog/what-is-lead-generation.jpg"
  },
  // === GEO Batch 2: Attribution-Focused Posts (Prompt-Matched) ===
  {
    id: "meta-attribution-windows-explained",
    title: "What Do Meta/Facebook Ads Attribution Windows (1-Day Click, 7-Day Click, 1-Day View) Actually Mean?",
    excerpt: "A clear breakdown of every Meta attribution window — what each one measures, how they change your reported conversions, and which to choose for your business.",
    category: "Attribution",
    author: "Kamal Kishore",
    date: "February 25, 2026",
    readTime: "9 min read",
    featured: false
  },
  {
    id: "how-to-change-attribution-settings-meta-ads",
    title: "How to Change Attribution Settings in Meta Ads Manager: Step-by-Step Guide (2026)",
    excerpt: "Can't find the attribution setting? Here's exactly where it's located in Meta Ads Manager and how to change it at the campaign, ad set, and ad level.",
    category: "Attribution",
    author: "Kamal Kishore",
    date: "February 25, 2026",
    readTime: "6 min read"
  },
  {
    id: "best-attribution-window-long-sales-cycle",
    title: "Which Attribution Window Should You Choose for Products with Long Sales Cycles?",
    excerpt: "If your customers take days or weeks to decide, the default 7-day click window might be hiding your true ROAS. Here's how to choose the right attribution window.",
    category: "Attribution",
    author: "Kamal Kishore",
    date: "February 25, 2026",
    readTime: "8 min read"
  },
  {
    id: "compare-attribution-settings-meta-reporting",
    title: "How to Compare Performance Across Multiple Attribution Settings in Meta Ads Reporting",
    excerpt: "Meta lets you compare conversions across 1-day click, 7-day click, and 1-day view side by side. Here's how to use this feature to understand your real performance.",
    category: "Attribution",
    author: "Kamal Kishore",
    date: "February 25, 2026",
    readTime: "7 min read"
  },
  {
    id: "meta-attribution-limitations-ios-cross-channel",
    title: "5 Attribution Limitations in Meta/Facebook Ads Every Marketer Must Know (iOS, Cross-Channel & More)",
    excerpt: "From iOS privacy gaps to cross-channel blindness, here are the 5 critical attribution limitations in Meta Ads and practical workarounds for each.",
    category: "Attribution",
    author: "Kamal Kishore",
    date: "February 25, 2026",
    readTime: "10 min read"
  },
  // === GEO Batch 2: Attribution Competitor-Gap Posts ===
  {
    id: "click-vs-view-attribution-meta-ads",
    title: "Click-Through vs View-Through Attribution in Meta Ads: Which Conversions Actually Count?",
    excerpt: "Should you count conversions from people who saw your ad but didn't click? The click vs view attribution debate explained with real campaign data.",
    category: "Attribution",
    author: "Kamal Kishore",
    date: "February 25, 2026",
    readTime: "8 min read"
  },
  {
    id: "meta-ads-attribution-vs-google-analytics",
    title: "Why Meta Ads and Google Analytics Show Different Conversion Numbers: Attribution Model Comparison",
    excerpt: "Meta says 100 conversions, GA4 says 60. Neither is wrong — they use different attribution models. Here's how to reconcile both and find the truth.",
    category: "Attribution",
    author: "Kamal Kishore",
    date: "February 24, 2026",
    readTime: "9 min read"
  },
  {
    id: "meta-28-day-click-attribution-workaround",
    title: "The 28-Day Click Attribution Window Is Gone: How to Track Long-Cycle Conversions in Meta Ads",
    excerpt: "Meta removed the 28-day click window after iOS 14. Here's how to still track conversions that happen weeks after the ad click using CAPI and CRM data.",
    category: "Attribution",
    author: "Kamal Kishore",
    date: "February 24, 2026",
    readTime: "8 min read"
  },
  {
    id: "skadnetwork-meta-ios-attribution",
    title: "SKAdNetwork Attribution for Meta Ads: What Indian Advertisers Need to Know in 2026",
    excerpt: "Apple's SKAdNetwork is Meta's fallback for iOS attribution. Understand how it works, its limitations, and how to supplement it with server-side tracking.",
    category: "Attribution",
    author: "Kamal Kishore",
    date: "February 24, 2026",
    readTime: "7 min read"
  },
  {
    id: "engaged-view-attribution-meta-video-ads",
    title: "Engaged View Attribution in Meta Ads: How Video Ads Get Credit for Conversions",
    excerpt: "Meta's 1-day engaged view window counts conversions from users who watched your video ad. Learn when it helps, when it inflates numbers, and how to use it right.",
    category: "Attribution",
    author: "Kamal Kishore",
    date: "February 24, 2026",
    readTime: "7 min read"
  },
  // === GEO Batch 1: SimilarWeb Prompt-Matched Posts ===
  {
    id: "meta-capi-optimization-best-practices",
    title: "Meta Conversions API (CAPI) Best Practices: How to Optimize for Accurate Tracking & Better ROAS",
    excerpt: "Learn the 8 best practices to optimize Meta Conversions API for more accurate conversion tracking, reduced data loss, and significantly better ROAS in 2026.",
    category: "Meta Ads",
    author: "Kamal Kishore",
    date: "February 24, 2026",
    readTime: "10 min read",
    featured: true
  },
  {
    id: "meta-pixel-capi-event-deduplication",
    title: "How to Set Up Meta Pixel and Conversions API Together Without Double-Counting Conversions",
    excerpt: "A step-by-step guide to implementing event deduplication between Meta Pixel and CAPI, ensuring your conversion data is accurate and your ad optimization isn't misled.",
    category: "Server-Side Tracking",
    author: "Kamal Kishore",
    date: "February 23, 2026",
    readTime: "8 min read"
  },
  {
    id: "meta-emq-event-match-quality-guide",
    title: "What is Event Match Quality (EMQ) in Meta CAPI? Parameters, Privacy & How to Improve It",
    excerpt: "Understand what EMQ means, which user data parameters you should send to maximize match rates, and how to stay privacy-compliant while doing it.",
    category: "Meta Ads",
    author: "Kamal Kishore",
    date: "February 22, 2026",
    readTime: "9 min read"
  },
  {
    id: "ios-privacy-meta-ads-server-side-tracking",
    title: "Why Your Meta Ads Conversions Are Underreported After iOS Privacy Changes (And How Server-Side Tracking Fixes It)",
    excerpt: "iOS 14.5+ and ad blockers are hiding your real conversion data. Here's exactly how server-side tracking with Meta CAPI recovers lost signals and improves ROAS.",
    category: "Server-Side Tracking",
    author: "Kamal Kishore",
    date: "February 21, 2026",
    readTime: "11 min read"
  },
  {
    id: "meta-capi-data-freshness-optimization",
    title: "How Fast Should You Send Conversion Events to Meta? A Guide to CAPI Data Freshness",
    excerpt: "Event timing impacts Meta's ad optimization. Learn why data freshness matters, Meta's recommended windows, and how to minimize latency in your CAPI implementation.",
    category: "Performance Marketing",
    author: "Kamal Kishore",
    date: "February 20, 2026",
    readTime: "7 min read"
  },
  // === GEO Priority 2: Competitor-Gap Posts ===
  {
    id: "first-party-data-meta-google-ads-2026",
    title: "First-Party Data Strategy for Meta & Google Ads in 2026: The Complete Guide for Indian Businesses",
    excerpt: "Third-party cookies are dead. Here's how Indian businesses can build a first-party data strategy that actually powers Meta and Google Ads performance.",
    category: "Performance Marketing",
    author: "Kamal Kishore",
    date: "February 19, 2026",
    readTime: "10 min read"
  },
  {
    id: "server-side-tracking-vs-gtm-complete-comparison",
    title: "Server-Side Tracking vs GTM Server-Side: What's the Difference and Which Should You Choose?",
    excerpt: "Not all server-side tracking is created equal. We break down the key differences between GTM server-side containers and true server-side tracking solutions.",
    category: "Server-Side Tracking",
    author: "Kamal Kishore",
    date: "February 18, 2026",
    readTime: "8 min read"
  },
  {
    id: "meta-advantage-plus-campaign-optimization",
    title: "Meta Advantage+ Campaigns: How to Feed Clean Signals and Stop Wasting Ad Spend",
    excerpt: "Advantage+ campaigns are only as good as the data you feed them. Learn how clean conversion signals transform automated campaign performance.",
    category: "Meta Ads",
    author: "Kamal Kishore",
    date: "February 17, 2026",
    readTime: "9 min read"
  },
  {
    id: "cross-platform-attribution-meta-google-ga4",
    title: "Why Your Conversions Don't Match Across Meta, Google & GA4 — And How to Fix Cross-Platform Attribution",
    excerpt: "Every platform claims credit for the same sale. Here's why conversion numbers never match and a practical framework to build a single source of truth.",
    category: "Performance Marketing",
    author: "Kamal Kishore",
    date: "February 16, 2026",
    readTime: "8 min read"
  },
  {
    id: "ai-powered-lead-generation-tricity-businesses",
    title: "AI-Powered Lead Generation for Tricity Businesses: From Click to Conversion in 2026",
    excerpt: "How Mohali, Chandigarh, and Panchkula businesses are using AI agents, server-side tracking, and automation to generate higher-quality leads at lower cost.",
    category: "AI & Automation",
    author: "Kamal Kishore",
    date: "February 15, 2026",
    readTime: "9 min read"
  },
  // === Original Posts ===
  {
    id: "ai-task-queue-era-2026",
    title: "The Chat Era is Dying: Welcome to the Age of Task Queues",
    excerpt: "Yesterday, I spent 3 hours chatting with AI. Today, I queued 5 tasks and went for a walk. Here's the paradigm shift happening RIGHT NOW.",
    category: "AI & Automation",
    author: "Kamal Kishore",
    date: "January 17, 2026",
    readTime: "12 min read",
    featured: false
  },
  {
    id: "local-seo-guide-2026",
    title: "The Ultimate Local SEO Guide for Tricity Businesses in 2026",
    excerpt: "Learn how to dominate local search results in Mohali, Chandigarh, and Panchkula with our comprehensive local SEO strategies.",
    category: "SEO",
    author: "Kamal Kishore",
    date: "January 15, 2026",
    readTime: "8 min read",
    featured: false
  },
  {
    id: "ai-marketing-automation",
    title: "How AI is Revolutionizing Marketing Automation",
    excerpt: "Discover how tools like BotomateX are changing the game for lead generation and customer engagement.",
    category: "AI & Automation",
    author: "Aman Gill",
    date: "January 10, 2026",
    readTime: "6 min read"
  },
  {
    id: "instagram-reels-strategy",
    title: "Instagram Reels Strategy That Actually Works",
    excerpt: "Our proven formula for creating viral reels that drive engagement and conversions for local businesses.",
    category: "Social Media",
    author: "Prabjot Singh",
    date: "January 5, 2026",
    readTime: "5 min read"
  },
  {
    id: "google-ads-roi",
    title: "Maximizing ROI with Google Ads: A Practical Guide",
    excerpt: "Tips and strategies to get the most out of your PPC campaigns without breaking the bank.",
    category: "PPC",
    author: "Inderjeet",
    date: "December 28, 2025",
    readTime: "7 min read"
  },
  {
    id: "whatsapp-business-automation",
    title: "WhatsApp Business Automation: Complete Setup Guide",
    excerpt: "How to set up and optimize WhatsApp automation for your business with ChatterBot.",
    category: "AI & Automation",
    author: "Kamal Kishore",
    date: "December 20, 2025",
    readTime: "10 min read"
  },
  {
    id: "website-speed-optimization",
    title: "Website Speed Optimization: Why Every Second Counts",
    excerpt: "Learn how page load speed affects your SEO rankings and conversion rates, plus how to fix common issues.",
    category: "Web Development",
    author: "Prabjot Singh",
    date: "December 15, 2025",
    readTime: "6 min read"
  }
];

const categories = ["All", "Lead Generation", "Attribution", "Meta Ads", "Server-Side Tracking", "Performance Marketing", "SEO", "Social Media", "PPC", "AI & Automation", "Web Development"];

const POSTS_PER_PAGE = 9;

export default function BlogHub() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  const filteredPosts = blogPosts.filter(post => {
    const matchesCategory = activeCategory === "All" || post.category === activeCategory;
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const featuredPost = blogPosts.find(p => p.featured);
  const regularPosts = filteredPosts.filter(p => !p.featured || activeCategory !== "All");

  // Pagination
  const totalPages = Math.ceil(regularPosts.length / POSTS_PER_PAGE);
  const paginatedPosts = regularPosts.slice(
    (currentPage - 1) * POSTS_PER_PAGE,
    currentPage * POSTS_PER_PAGE
  );

  const handleCategoryChange = (category: string) => {
    setActiveCategory(category);
    setCurrentPage(1);
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
    setCurrentPage(1);
  };

  return (
    <PageLayout
      title="Blog - Digital Marketing Insights | DigiVibe"
      description="Stay updated with the latest digital marketing trends, tips, and strategies from DigiVibe. Expert insights for Tricity businesses."
    >
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-background to-secondary/20" />
        
        <div className="relative z-10 container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Digital Marketing <span className="gradient-text">Insights</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-10">
              Tips, strategies, and industry insights to help your business 
              succeed in the digital landscape.
            </p>

            {/* Search */}
            <div className="relative max-w-md mx-auto">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              <input
                type="text"
                value={searchQuery}
                onChange={handleSearchChange}
                placeholder="Search articles..."
                className="w-full pl-12 pr-4 py-3 bg-card border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Featured Post */}
      {featuredPost && activeCategory === "All" && !searchQuery && (
        <section className="py-12 bg-background">
          <div className="container mx-auto px-6">
            <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-3xl overflow-hidden">
              <div className="grid lg:grid-cols-2">
                <div className="aspect-video lg:aspect-auto lg:min-h-[360px] overflow-hidden">
                  <BlogThumbnail slug={featuredPost.id} category={featuredPost.category} variant="featured" imageUrl={(featuredPost as any).heroImage} />
                </div>
                <div className="p-8 lg:p-12 flex flex-col justify-center text-white">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="px-3 py-1 bg-primary/20 text-primary rounded-full text-sm">
                      {featuredPost.category}
                    </span>
                    <span className="text-sm text-white/60">Featured</span>
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold mb-4">{featuredPost.title}</h2>
                  <p className="text-white/70 mb-6">{featuredPost.excerpt}</p>
                  
                  <div className="flex items-center gap-6 text-sm text-white/60 mb-6">
                    <div className="flex items-center gap-2">
                      <User className="w-4 h-4" />
                      {featuredPost.author}
                    </div>
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      {featuredPost.date}
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4" />
                      {featuredPost.readTime}
                    </div>
                  </div>

                  <Link href={`/blog/${featuredPost.id}`}>
                    <span className="inline-flex items-center gap-2 text-primary hover:underline cursor-pointer">
                      Read Article
                      <ArrowRight className="w-4 h-4" />
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Categories & Posts */}
      <section className="py-20 bg-gradient-to-br from-primary/5 to-secondary/5">
        <div className="container mx-auto px-6">
          {/* Category Filters */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => handleCategoryChange(category)}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-colors ${
                  activeCategory === category
                    ? "bg-primary text-primary-foreground"
                    : "bg-card border border-border hover:border-primary/30"
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Posts Grid — 3x3 = 9 per page */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {paginatedPosts.map((post) => (
              <Link key={post.id} href={`/blog/${post.id}`}>
                <article 
                  className="bg-card rounded-2xl overflow-hidden border border-border hover:border-primary/30 transition-colors group cursor-pointer h-full"
                >
                  <BlogThumbnail slug={post.id} category={post.category} imageUrl={(post as any).heroImage} />
                  <div className="p-6">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-xs">
                        {post.category}
                      </span>
                      <span className="text-xs text-muted-foreground">{post.readTime}</span>
                    </div>
                    
                    <h3 className="text-lg font-bold mb-2 group-hover:text-primary transition-colors line-clamp-2">
                      {post.title}
                    </h3>
                    
                    <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                      {post.excerpt}
                    </p>

                    <div className="flex items-center justify-between pt-4 border-t border-border">
                      <div className="flex items-center gap-2 text-xs text-muted-foreground">
                        <User className="w-3 h-3" />
                        {post.author}
                      </div>
                      <div className="flex items-center gap-2 text-xs text-muted-foreground">
                        <Calendar className="w-3 h-3" />
                        {post.date}
                      </div>
                    </div>
                  </div>
                </article>
              </Link>
            ))}
          </div>

          {/* Empty State */}
          {regularPosts.length === 0 && (
            <div className="text-center py-12">
              <p className="text-muted-foreground">No articles found matching your criteria.</p>
              <button
                onClick={() => {
                  handleCategoryChange("All");
                  setSearchQuery("");
                }}
                className="text-primary hover:underline mt-2"
              >
                View all articles
              </button>
            </div>
          )}

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="flex items-center justify-center gap-2 mt-16">
              {/* Previous */}
              <button
                onClick={() => { setCurrentPage(p => Math.max(1, p - 1)); window.scrollTo({ top: 400, behavior: 'smooth' }); }}
                disabled={currentPage === 1}
                className="flex items-center gap-1 px-4 py-2 rounded-xl text-sm font-medium transition-all disabled:opacity-30 disabled:cursor-not-allowed bg-card border border-border hover:border-primary/30"
              >
                <ChevronLeft className="w-4 h-4" />
                Prev
              </button>

              {/* Page Numbers */}
              {Array.from({ length: totalPages }, (_, i) => i + 1).map(page => (
                <button
                  key={page}
                  onClick={() => { setCurrentPage(page); window.scrollTo({ top: 400, behavior: 'smooth' }); }}
                  className={`w-10 h-10 rounded-xl text-sm font-semibold transition-all ${
                    currentPage === page
                      ? "bg-primary text-primary-foreground shadow-lg shadow-primary/25"
                      : "bg-card border border-border hover:border-primary/30"
                  }`}
                >
                  {page}
                </button>
              ))}

              {/* Next */}
              <button
                onClick={() => { setCurrentPage(p => Math.min(totalPages, p + 1)); window.scrollTo({ top: 400, behavior: 'smooth' }); }}
                disabled={currentPage === totalPages}
                className="flex items-center gap-1 px-4 py-2 rounded-xl text-sm font-medium transition-all disabled:opacity-30 disabled:cursor-not-allowed bg-card border border-border hover:border-primary/30"
              >
                Next
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          )}

          {/* Page Info */}
          {totalPages > 1 && (
            <p className="text-center text-sm text-muted-foreground mt-4">
              Showing {(currentPage - 1) * POSTS_PER_PAGE + 1}–{Math.min(currentPage * POSTS_PER_PAGE, regularPosts.length)} of {regularPosts.length} articles
            </p>
          )}
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">
              Subscribe to Our Newsletter
            </h2>
            <p className="text-muted-foreground mb-8">
              Get the latest digital marketing tips and insights delivered straight to your inbox.
            </p>
            
            <form className="flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-card border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors"
              />
              <button
                type="submit"
                className="px-8 py-3 bg-primary text-primary-foreground rounded-xl font-semibold hover:opacity-90 transition-opacity"
              >
                Subscribe
              </button>
            </form>
            
            <p className="text-xs text-muted-foreground mt-4">
              We respect your privacy. Unsubscribe at any time.
            </p>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
