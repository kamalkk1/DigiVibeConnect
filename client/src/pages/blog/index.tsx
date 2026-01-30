import { Link } from "wouter";
import { ArrowRight, Calendar, User, Clock, Search } from "lucide-react";
import { useState } from "react";
import PageLayout from "@/components/layout/PageLayout";

// Placeholder blog posts
const blogPosts = [
  {
    id: "ai-task-queue-era-2026",
    title: "The Chat Era is Dying: Welcome to the Age of Task Queues",
    excerpt: "Yesterday, I spent 3 hours chatting with AI. Today, I queued 5 tasks and went for a walk. Here's the paradigm shift happening RIGHT NOW.",
    category: "AI & Automation",
    author: "Kamal Kishore",
    date: "January 17, 2026",
    readTime: "12 min read",
    featured: true
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

const categories = ["All", "SEO", "Social Media", "PPC", "AI & Automation", "Web Development"];

export default function BlogHub() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredPosts = blogPosts.filter(post => {
    const matchesCategory = activeCategory === "All" || post.category === activeCategory;
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const featuredPost = blogPosts.find(p => p.featured);
  const regularPosts = filteredPosts.filter(p => !p.featured || activeCategory !== "All");

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
                onChange={(e) => setSearchQuery(e.target.value)}
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
              <div className="grid lg:grid-cols-2 gap-8">
                <div className="aspect-video lg:aspect-auto bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
                  <div className="text-8xl opacity-50">📝</div>
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
                onClick={() => setActiveCategory(category)}
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

          {/* Posts Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {regularPosts.map((post) => (
              <Link key={post.id} href={`/blog/${post.id}`}>
                <article 
                  className="bg-card rounded-2xl overflow-hidden border border-border hover:border-primary/30 transition-colors group cursor-pointer h-full"
                >
                  <div className="aspect-video bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center">
                    <div className="text-5xl opacity-30">📄</div>
                  </div>
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
                  setActiveCategory("All");
                  setSearchQuery("");
                }}
                className="text-primary hover:underline mt-2"
              >
                View all articles
              </button>
            </div>
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
