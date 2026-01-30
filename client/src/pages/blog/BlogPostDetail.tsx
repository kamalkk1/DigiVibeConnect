import { useRoute, Link } from "wouter";
import { ArrowLeft, Calendar, User, Clock, Share2, Linkedin, Twitter, Facebook, ExternalLink, ChevronRight } from "lucide-react";
import PageLayout from "@/components/layout/PageLayout";

// Full blog posts data with complete content
export const fullBlogPosts: Record<string, {
  id: string;
  title: string;
  excerpt: string;
  category: string;
  author: string;
  authorRole: string;
  date: string;
  readTime: string;
  heroImage: string;
  content: string;
  tags: string[];
  relatedPosts: string[];
}> = {
  "ai-task-queue-era-2026": {
    id: "ai-task-queue-era-2026",
    title: "The Chat Era is Dying: Welcome to the Age of Task Queues",
    excerpt: "Yesterday, I spent 3 hours chatting with AI. Today, I queued 5 tasks and went for a walk. Here's the paradigm shift that's happening RIGHT NOW in AI.",
    category: "AI & Automation",
    author: "Kamal Kishore",
    authorRole: "Founder & CEO, DigiVibe",
    date: "January 17, 2026",
    readTime: "12 min read",
    heroImage: "/images/blog/ai-task-queue-hero.png",
    tags: ["AI Agents", "Claude Co-work", "Meta Manus", "Task Queues", "Marketing 2026", "Autonomous AI"],
    relatedPosts: ["ai-marketing-automation", "whatsapp-business-automation"],
    content: `
## The Paradigm Shift Is Here

Yesterday, I spent 3 hours chatting with AI. Today, I queued 5 tasks and went for a walk.

**What changed?**

Claude Co-work just taught me the future of work: **I'm no longer the respondent. I'm the manager.**

This isn't a prediction anymore—it's happening RIGHT NOW. And if you're a business owner in Mohali, Chandigarh, or anywhere in India, understanding this shift could be the difference between thriving and being left behind.

---

## The Evolution: From Chat to Task Queues

![AI Evolution Timeline](/images/blog/ai-evolution-timeline.png)

### 2023-2025: The Chat Era
- **Synchronous**: "What do I prompt next?"
- **Single-threaded**: One task at a time
- **AI as Advisor**: Endless conversations, manual implementation

The old workflow looked like this:
1. Prompt AI → 2. Get text blob → 3. Copy-paste → 4. Edit forever

### 2026+: The Task Queue Era
- **Asynchronous**: "What outcome do I need?"
- **Multi-threaded**: Multiple tasks running in parallel
- **AI as Employee**: Define goal, approve plan, AI executes

The new workflow:
1. Define goal → 2. Approve plan → 3. AI executes → 4. Get working file

> **The key insight**: Reviewing a plan is higher-leverage work than editing bad prose.

---

## Claude Co-work: Built in 10 Days by AI

Here's the craziest part that should make every tech leader pay attention:

**Anthropic built Claude Co-work in just 10 DAYS. Using their own AI (Claude Code) to build it.**

Let that sink in. AI building AI tools. The acceleration is exponential.

### What Claude Co-work Actually Does

Unlike traditional chat interfaces, Claude Co-work:
- **Manages files** directly on your machine
- **Drafts documents** without copy-paste
- **Automates tasks** with persistent context
- **Delivers real files**: Excel with formulas, actual PPT decks, working code

This is the "Anti-Slop" Revolution:
- ❌ No more text blobs
- ❌ No more hallucinations (AI grounded in YOUR file system)
- ❌ No more copy-paste
- ✅ Real deliverables land in your Downloads folder

---

## Meta Just Acquired Manus for $2+ Billion

If you don't know Manus, they're the team behind one of the most advanced AI agent frameworks in the market. Meta's acquisition in December 2025 wasn't about chatbots—it's about **autonomous agents that can actually DO things**.

### The AI Agent Race Has Shifted

| Phase | Period | Focus |
|-------|--------|-------|
| Phase 1 | 2022-2023 | Who has the best LLM? |
| Phase 2 | 2024 | Who has the best multimodal model? |
| Phase 3 | 2025+ | **Who has the best AI agents?** |

The major players are all in:
- **OpenAI** has Operator
- **Google** has Project Mariner
- **Meta** now has Manus
- **Anthropic** has Claude Agents

### What These Agents Can Do

Modern AI agents aren't just answering questions. They're:
- 🌐 Browsing the web autonomously
- ⚙️ Executing multi-step workflows
- 🤝 Interacting with other agents
- 🧠 Making decisions with minimal human input

**The next battleground isn't intelligence. It's autonomy.**

---

## The Uncomfortable Truth About Marketing in 2026

Here's a reality check from Rajiv Talreja that every Tricity business owner needs to hear:

> "In 1996: If your work is good, people will automatically come to you. In 2026: That philosophy is dead and buried."

### The Brutal Shift

| 1996 Marketing | 2026 Marketing |
|----------------|----------------|
| Word of mouth was king 👑 | Attention is the new currency 📱 |
| Quality spoke for itself | Visibility before credibility |
| Build first, promote later | Promote first, then prove |
| Customers found you | You find customers (or die) |

### The Harsh Prediction

> "Any business without a content creation department by 2030 will cease to exist." — Rajiv Talreja

Not *might*. **WILL**.

### The Framework: Where Attention Goes, Money Flows

- ❌ Poor Marketing + Great Delivery = Nobody knows, nobody cares
- ❌ Great Marketing + Poor Delivery = Short-term money, long-term disaster
- ✅ **Great Marketing + Great Delivery = THE GOLD MINE** 💎

---

## What This Means for Indian Businesses

### The Spend Threat Reality

Your customer isn't thinking: "Should I buy this?"

They're thinking: "Can I afford to NOT pay rent to buy this?"

Your product competes with:
- Rent and EMIs
- Salaries
- Children's school fees
- Basic survival needs

**If you're not in their consideration set, you don't exist.**

### Your Action Plan for 2026

**1. Pick Your Avatar**

Choose one and master it:
- **EDUCATOR** → Build credibility by teaching
- **ENTERTAINER** → Capture attention through engagement
- **STORYTELLER** → Build connections through your journey

**2. Prepare for AI Agents**

Ask yourself: What workflows in your business are ready to be handed to an AI agent?

The companies that figure this out first will operate at a speed others can't match.

**3. Embrace Task Queue Thinking**

Stop thinking: "What prompt should I use?"
Start thinking: "What outcome do I need?"

---

## The Bottom Line

The chat era served us well. It taught us how to communicate with AI, how to prompt effectively, how to iterate on ideas.

But the future belongs to those who can:
1. **Define clear outcomes** (not prompts)
2. **Manage AI workers** (not chat with AI advisors)
3. **Build content engines** (not just create content)
4. **Embrace autonomous agents** (not fear them)

### My Prediction for 2026

Chat will remain for quick queries. But **real work will move to Task Queues**.

The question is: **Are you ready to manage your AI workforce?**

---

## How DigiVibe Can Help

At DigiVibe, we're already integrating AI agents into our service delivery through BotomateX—our suite of AI-powered automation tools:

- **[LeadFlow](/products/leadflow)**: AI-powered CRM that captures and nurtures leads automatically
- **[ChatterBot](/products/chatterbot)**: 24/7 WhatsApp automation for customer engagement
- **[VoiceAI](/products/voiceai)**: Intelligent voice agent for seamless call handling

We're not just talking about the AI revolution—we're building it for North Indian businesses.

**[Contact us](/contact)** to discuss how AI agents can transform your business operations.
    `
  },
  "local-seo-guide-2026": {
    id: "local-seo-guide-2026",
    title: "The Ultimate Local SEO Guide for Tricity Businesses in 2026",
    excerpt: "Learn how to dominate local search results in Mohali, Chandigarh, and Panchkula with our comprehensive local SEO strategies.",
    category: "SEO",
    author: "Kamal Kishore",
    authorRole: "Founder & CEO, DigiVibe",
    date: "January 15, 2026",
    readTime: "8 min read",
    heroImage: "/images/blog/local-seo-guide.jpg",
    tags: ["Local SEO", "Google My Business", "Tricity", "Mohali", "Chandigarh"],
    relatedPosts: ["google-ads-roi", "website-speed-optimization"],
    content: `
## Introduction to Local SEO in 2026

Local SEO has evolved dramatically, and for businesses in Mohali, Chandigarh, and Panchkula, mastering these strategies is essential for growth.

### Key Strategies Covered

1. Google Business Profile Optimization
2. Local Citations and NAP Consistency
3. Review Management
4. Local Content Strategy
5. Mobile-First Indexing

*Full content coming soon...*
    `
  }
};

export default function BlogPostDetail() {
  const [, params] = useRoute("/blog/:slug");
  const slug = params?.slug;
  
  const post = slug ? fullBlogPosts[slug] : null;
  
  if (!post) {
    return (
      <PageLayout
        title="Post Not Found | DigiVibe Blog"
        description="The blog post you're looking for doesn't exist."
      >
        <section className="py-32">
          <div className="container mx-auto px-6 text-center">
            <h1 className="text-4xl font-bold mb-4">Post Not Found</h1>
            <p className="text-muted-foreground mb-8">
              The blog post you're looking for doesn't exist or has been moved.
            </p>
            <Link href="/blog">
              <span className="inline-flex items-center gap-2 text-primary hover:underline cursor-pointer">
                <ArrowLeft className="w-4 h-4" />
                Back to Blog
              </span>
            </Link>
          </div>
        </section>
      </PageLayout>
    );
  }

  const shareUrl = typeof window !== 'undefined' ? window.location.href : '';
  const shareText = encodeURIComponent(post.title);

  return (
    <PageLayout
      title={`${post.title} | DigiVibe Blog`}
      description={post.excerpt}
    >
      {/* Hero Section */}
      <section className="relative pt-24 pb-12 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-background to-secondary/20" />
        
        <div className="relative z-10 container mx-auto px-6">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-sm text-muted-foreground mb-8">
            <Link href="/">
              <span className="hover:text-primary cursor-pointer">Home</span>
            </Link>
            <ChevronRight className="w-4 h-4" />
            <Link href="/blog">
              <span className="hover:text-primary cursor-pointer">Blog</span>
            </Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-foreground">{post.category}</span>
          </nav>

          <div className="max-w-4xl">
            {/* Category Badge */}
            <span className="inline-block px-4 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
              {post.category}
            </span>
            
            {/* Title */}
            <h1 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
              {post.title}
            </h1>
            
            {/* Excerpt */}
            <p className="text-xl text-muted-foreground mb-8">
              {post.excerpt}
            </p>
            
            {/* Meta Info */}
            <div className="flex flex-wrap items-center gap-6 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white font-bold">
                  {post.author.split(' ').map(n => n[0]).join('')}
                </div>
                <div>
                  <p className="font-medium text-foreground">{post.author}</p>
                  <p className="text-xs">{post.authorRole}</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                {post.date}
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                {post.readTime}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Hero Image */}
      {post.heroImage && (
        <section className="pb-12">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <img
                src={post.heroImage}
                alt={post.title}
                className="w-full rounded-2xl shadow-2xl"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.style.display = 'none';
                }}
              />
            </div>
          </div>
        </section>
      )}

      {/* Content */}
      <article className="py-12">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="flex gap-8">
              {/* Social Share Sidebar (Desktop) */}
              <aside className="hidden lg:flex flex-col gap-4 sticky top-24 h-fit">
                <span className="text-xs text-muted-foreground uppercase tracking-wide">Share</span>
                <a
                  href={`https://twitter.com/intent/tweet?text=${shareText}&url=${shareUrl}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-card border border-border rounded-xl hover:border-primary/30 transition-colors"
                >
                  <Twitter className="w-5 h-5" />
                </a>
                <a
                  href={`https://www.linkedin.com/sharing/share-offsite/?url=${shareUrl}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-card border border-border rounded-xl hover:border-primary/30 transition-colors"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
                <a
                  href={`https://www.facebook.com/sharer/sharer.php?u=${shareUrl}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-card border border-border rounded-xl hover:border-primary/30 transition-colors"
                >
                  <Facebook className="w-5 h-5" />
                </a>
              </aside>

              {/* Main Content */}
              <div className="flex-1 prose prose-lg prose-invert max-w-none
                prose-headings:font-bold prose-headings:text-foreground
                prose-h2:text-2xl prose-h2:mt-12 prose-h2:mb-6 prose-h2:border-b prose-h2:border-border prose-h2:pb-4
                prose-h3:text-xl prose-h3:mt-8 prose-h3:mb-4
                prose-p:text-muted-foreground prose-p:leading-relaxed prose-p:mb-6
                prose-a:text-primary prose-a:no-underline hover:prose-a:underline
                prose-strong:text-foreground prose-strong:font-semibold
                prose-blockquote:border-l-4 prose-blockquote:border-primary prose-blockquote:bg-primary/5 prose-blockquote:py-4 prose-blockquote:px-6 prose-blockquote:rounded-r-xl prose-blockquote:not-italic
                prose-ul:text-muted-foreground prose-ol:text-muted-foreground
                prose-li:marker:text-primary
                prose-code:text-primary prose-code:bg-primary/10 prose-code:px-2 prose-code:py-1 prose-code:rounded
                prose-pre:bg-gray-900 prose-pre:border prose-pre:border-border
                prose-img:rounded-xl prose-img:shadow-lg
                prose-table:border-collapse
                prose-th:bg-primary/10 prose-th:p-3 prose-th:text-left prose-th:border prose-th:border-border
                prose-td:p-3 prose-td:border prose-td:border-border
                prose-hr:border-border prose-hr:my-12
              ">
                <div dangerouslySetInnerHTML={{ __html: formatMarkdown(post.content) }} />
              </div>
            </div>

            {/* Tags */}
            <div className="mt-12 pt-8 border-t border-border">
              <div className="flex flex-wrap items-center gap-3">
                <span className="text-sm text-muted-foreground">Tags:</span>
                {post.tags.map((tag, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 bg-card border border-border rounded-full text-sm hover:border-primary/30 transition-colors"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Mobile Share */}
            <div className="lg:hidden mt-8 pt-8 border-t border-border">
              <p className="text-sm text-muted-foreground mb-4">Share this article:</p>
              <div className="flex gap-4">
                <a
                  href={`https://twitter.com/intent/tweet?text=${shareText}&url=${shareUrl}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-card border border-border rounded-xl hover:border-primary/30 transition-colors"
                >
                  <Twitter className="w-5 h-5" />
                </a>
                <a
                  href={`https://www.linkedin.com/sharing/share-offsite/?url=${shareUrl}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-card border border-border rounded-xl hover:border-primary/30 transition-colors"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
                <a
                  href={`https://www.facebook.com/sharer/sharer.php?u=${shareUrl}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-card border border-border rounded-xl hover:border-primary/30 transition-colors"
                >
                  <Facebook className="w-5 h-5" />
                </a>
              </div>
            </div>

            {/* Back to Blog */}
            <div className="mt-12">
              <Link href="/blog">
                <span className="inline-flex items-center gap-2 text-primary hover:underline cursor-pointer">
                  <ArrowLeft className="w-4 h-4" />
                  Back to all articles
                </span>
              </Link>
            </div>
          </div>
        </div>
      </article>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-primary/10 to-secondary/10">
        <div className="container mx-auto px-6">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">
              Ready to Transform Your Business with AI?
            </h2>
            <p className="text-muted-foreground mb-8">
              Let's discuss how autonomous AI agents can streamline your operations and boost your growth.
            </p>
            <Link href="/contact">
              <span className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground rounded-xl font-semibold hover:opacity-90 transition-opacity cursor-pointer">
                Get in Touch
                <ExternalLink className="w-4 h-4" />
              </span>
            </Link>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}

// Simple markdown to HTML converter for blog content
function formatMarkdown(content: string): string {
  return content
    // Headers
    .replace(/^### (.*$)/gim, '<h3>$1</h3>')
    .replace(/^## (.*$)/gim, '<h2>$1</h2>')
    .replace(/^# (.*$)/gim, '<h1>$1</h1>')
    // Bold
    .replace(/\*\*(.*?)\*\*/gim, '<strong>$1</strong>')
    // Italic
    .replace(/\*(.*?)\*/gim, '<em>$1</em>')
    // Images
    .replace(/!\[(.*?)\]\((.*?)\)/gim, '<img src="$2" alt="$1" />')
    // Links with internal check
    .replace(/\[(.*?)\]\((\/.*?)\)/gim, '<a href="$2">$1</a>')
    .replace(/\[(.*?)\]\((https?:\/\/.*?)\)/gim, '<a href="$2" target="_blank" rel="noopener noreferrer">$1</a>')
    // Blockquotes
    .replace(/^> (.*$)/gim, '<blockquote><p>$1</p></blockquote>')
    // Unordered lists
    .replace(/^- (.*$)/gim, '<li>$1</li>')
    // Ordered lists
    .replace(/^\d+\. (.*$)/gim, '<li>$1</li>')
    // Code blocks
    .replace(/`(.*?)`/gim, '<code>$1</code>')
    // Tables (basic support)
    .replace(/\|(.+)\|/gim, (match) => {
      const cells = match.split('|').filter(cell => cell.trim());
      if (cells.every(cell => /^-+$/.test(cell.trim()))) {
        return ''; // Skip separator rows
      }
      const isHeader = cells.some(cell => cell.includes('---'));
      const tag = isHeader ? 'th' : 'td';
      const row = cells.map(cell => `<${tag}>${cell.trim()}</${tag}>`).join('');
      return `<tr>${row}</tr>`;
    })
    // Horizontal rules
    .replace(/^---$/gim, '<hr />')
    // Line breaks and paragraphs
    .replace(/\n\n/gim, '</p><p>')
    .replace(/\n/gim, '<br />')
    // Wrap in paragraphs
    .replace(/^(.+)$/gim, '<p>$1</p>')
    // Clean up empty paragraphs
    .replace(/<p><\/p>/gim, '')
    .replace(/<p><br \/><\/p>/gim, '')
    // Clean up list items
    .replace(/(<li>.*<\/li>)/gim, '<ul>$1</ul>')
    .replace(/<\/ul><ul>/gim, '');
}
