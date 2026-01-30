import { Link } from "wouter";
import { ArrowRight, ExternalLink, Sparkles, Check } from "lucide-react";
import { products, botomateXInfo } from "@/lib/siteData";

export default function BotomateXSection() {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(59,130,246,0.15),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_70%,rgba(139,92,246,0.15),transparent_50%)]" />

      <div className="relative z-10 container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-400/30 rounded-full mb-6">
            <Sparkles className="w-4 h-4 text-blue-400" />
            <span className="text-sm font-medium text-blue-300">AI-Powered Automation</span>
          </div>
          
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
            Supercharge with{" "}
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              BotomateX
            </span>
          </h2>
          
          <p className="text-lg text-white/70 max-w-2xl mx-auto">
            {botomateXInfo.description}
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {products.map((product) => (
            <Link key={product.id} href={product.href}>
              <div className="group relative bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-white/20 transition-all duration-300 cursor-pointer h-full overflow-hidden">
                {/* Hover Gradient */}
                <div 
                  className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-300"
                  style={{ background: `linear-gradient(135deg, ${product.color}, transparent)` }}
                />
                
                <div className="relative z-10">
                  <div 
                    className="w-14 h-14 rounded-xl flex items-center justify-center text-2xl mb-4"
                    style={{ backgroundColor: `${product.color}20` }}
                  >
                    {product.icon}
                  </div>
                  
                  <h3 className="text-xl font-bold text-white mb-1 group-hover:text-blue-300 transition-colors">
                    {product.name}
                  </h3>
                  <p className="text-sm font-medium mb-3" style={{ color: product.color }}>
                    {product.tagline}
                  </p>
                  <p className="text-white/60 text-sm mb-4">
                    {product.description}
                  </p>

                  {/* Quick Features */}
                  <ul className="space-y-2">
                    {product.features.slice(0, 3).map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-xs text-white/60">
                        <Check className="w-3 h-3" style={{ color: product.color }} />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  {/* Stats */}
                  <div className="grid grid-cols-3 gap-2 mt-4 pt-4 border-t border-white/10">
                    {product.stats.map((stat, idx) => (
                      <div key={idx} className="text-center">
                        <div className="text-sm font-bold" style={{ color: product.color }}>
                          {stat.value}
                        </div>
                        <div className="text-xs text-white/40 truncate">{stat.label}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/products">
            <span className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-xl font-semibold hover:opacity-90 transition-all duration-200 cursor-pointer">
              Explore All Products
              <ArrowRight className="w-5 h-5" />
            </span>
          </Link>
          <a
            href={botomateXInfo.website}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/10 text-white border border-white/20 rounded-xl font-semibold hover:bg-white/20 transition-all duration-200"
          >
            Visit BotomateX
            <ExternalLink className="w-5 h-5" />
          </a>
        </div>
      </div>
    </section>
  );
}
