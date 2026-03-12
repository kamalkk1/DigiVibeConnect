import {
  BarChart3, Shield, Globe, Zap, TrendingUp, Eye, MousePointerClick,
  Server, Database, Smartphone, Lock, RefreshCw, Target, LineChart,
  Layers, Share2, ArrowLeftRight, Timer, Gauge, Bot, Search,
  MessageSquare, Megaphone, Code, Cpu, Network, Signal, Activity,
  GitBranch, Fingerprint, SplitSquareVertical
} from "lucide-react";

// ─── Theme definitions per category ─────────────────────────────
const CATEGORY_THEMES: Record<string, {
  gradient: string;
  accentFrom: string;
  accentTo: string;
  iconColor: string;
  glowColor: string;
}> = {
  "Attribution": {
    gradient: "from-[#1a0533] via-[#1e1145] to-[#0d1b3e]",
    accentFrom: "#a855f7",
    accentTo: "#6366f1",
    iconColor: "#c084fc",
    glowColor: "rgba(168, 85, 247, 0.15)",
  },
  "Meta Ads": {
    gradient: "from-[#0a1628] via-[#0f1f3d] to-[#111827]",
    accentFrom: "#3b82f6",
    accentTo: "#06b6d4",
    iconColor: "#60a5fa",
    glowColor: "rgba(59, 130, 246, 0.15)",
  },
  "Server-Side Tracking": {
    gradient: "from-[#0a1e0a] via-[#0f2d1a] to-[#0d1f2d]",
    accentFrom: "#10b981",
    accentTo: "#06b6d4",
    iconColor: "#34d399",
    glowColor: "rgba(16, 185, 129, 0.15)",
  },
  "Performance Marketing": {
    gradient: "from-[#1a0a2e] via-[#1e1040] to-[#2d0a1e]",
    accentFrom: "#ec4899",
    accentTo: "#a855f7",
    iconColor: "#f472b6",
    glowColor: "rgba(236, 72, 153, 0.15)",
  },
  "SEO": {
    gradient: "from-[#1a1a0a] via-[#2d2106] to-[#1a0f00]",
    accentFrom: "#f59e0b",
    accentTo: "#ef4444",
    iconColor: "#fbbf24",
    glowColor: "rgba(245, 158, 11, 0.15)",
  },
  "Social Media": {
    gradient: "from-[#1e0a2e] via-[#2d0a33] to-[#1a0533]",
    accentFrom: "#e879f9",
    accentTo: "#f472b6",
    iconColor: "#e879f9",
    glowColor: "rgba(232, 121, 249, 0.15)",
  },
  "PPC": {
    gradient: "from-[#0a1528] via-[#0f2040] to-[#0a2533]",
    accentFrom: "#06b6d4",
    accentTo: "#3b82f6",
    iconColor: "#22d3ee",
    glowColor: "rgba(6, 182, 212, 0.15)",
  },
  "AI & Automation": {
    gradient: "from-[#0a0a2e] via-[#101045] to-[#1a0a33]",
    accentFrom: "#818cf8",
    accentTo: "#a78bfa",
    iconColor: "#a5b4fc",
    glowColor: "rgba(129, 140, 248, 0.15)",
  },
  "Web Development": {
    gradient: "from-[#0a2020] via-[#0f2d2d] to-[#0a1a2d]",
    accentFrom: "#14b8a6",
    accentTo: "#06b6d4",
    iconColor: "#2dd4bf",
    glowColor: "rgba(20, 184, 166, 0.15)",
  },
};

// ─── Icon sets per slug keyword for unique visuals ──────────────
const SLUG_ICON_MAP: Record<string, React.ComponentType<any>[]> = {
  "attribution": [Eye, MousePointerClick, LineChart, Layers],
  "capi": [Server, Database, Signal, RefreshCw],
  "deduplication": [GitBranch, SplitSquareVertical, RefreshCw, Database],
  "emq": [Gauge, Target, Signal, BarChart3],
  "ios": [Smartphone, Lock, Shield, Fingerprint],
  "freshness": [Timer, Zap, Activity, RefreshCw],
  "first-party": [Database, Lock, Share2, Target],
  "server-side": [Server, Globe, Network, ArrowLeftRight],
  "advantage": [Cpu, TrendingUp, Zap, Target],
  "cross-platform": [ArrowLeftRight, Globe, Layers, BarChart3],
  "lead-generation": [Bot, MessageSquare, Target, TrendingUp],
  "click-vs-view": [MousePointerClick, Eye, ArrowLeftRight, BarChart3],
  "google-analytics": [LineChart, ArrowLeftRight, Globe, BarChart3],
  "28-day": [Timer, RefreshCw, Server, Database],
  "skadnetwork": [Smartphone, Shield, Lock, Signal],
  "engaged-view": [Eye, Zap, TrendingUp, BarChart3],
  "seo": [Search, Globe, TrendingUp, BarChart3],
  "instagram": [Megaphone, Share2, TrendingUp, Eye],
  "google-ads": [Target, TrendingUp, BarChart3, Zap],
  "whatsapp": [MessageSquare, Bot, Zap, Smartphone],
  "website": [Code, Globe, Zap, Gauge],
  "ai": [Cpu, Bot, Zap, TrendingUp],
  "task-queue": [Cpu, Layers, RefreshCw, Zap],
};

function getIconsForSlug(slug: string): React.ComponentType<any>[] {
  for (const [key, icons] of Object.entries(SLUG_ICON_MAP)) {
    if (slug.includes(key)) return icons;
  }
  return [Globe, TrendingUp, BarChart3, Target];
}

// ─── Deterministic pseudo-random positions from slug ────────────
function hashCode(str: string): number {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    hash = ((hash << 5) - hash) + str.charCodeAt(i);
    hash |= 0;
  }
  return Math.abs(hash);
}

interface FloatingIconProps {
  Icon: React.ComponentType<any>;
  x: number;
  y: number;
  size: number;
  rotation: number;
  color: string;
  opacity: number;
  glowColor: string;
}

function FloatingIcon({ Icon, x, y, size, rotation, color, opacity, glowColor }: FloatingIconProps) {
  return (
    <div
      className="absolute transition-transform duration-700 group-hover:scale-110"
      style={{
        left: `${x}%`,
        top: `${y}%`,
        transform: `rotate(${rotation}deg)`,
        filter: `drop-shadow(0 0 8px ${glowColor})`,
      }}
    >
      <Icon
        style={{ width: size, height: size, color, opacity }}
        strokeWidth={1.5}
      />
    </div>
  );
}

// ─── Main component ─────────────────────────────────────────────

interface BlogThumbnailProps {
  slug: string;
  category: string;
  title?: string;
  variant?: "card" | "hero" | "featured";
  imageUrl?: string;
}

export default function BlogThumbnail({ slug, category, title, variant = "card", imageUrl }: BlogThumbnailProps) {
  const theme = CATEGORY_THEMES[category] || CATEGORY_THEMES["Meta Ads"];
  const icons = getIconsForSlug(slug);
  const h = hashCode(slug);
  const isHero = variant === "hero" || variant === "featured";
  const isFeatured = variant === "featured";

  // Generate deterministic positions for floating icons
  const positions = icons.map((_, i) => {
    const seed = h + i * 137;
    return {
      x: 15 + ((seed * 17) % 55),
      y: 12 + ((seed * 23) % 55),
      size: isHero ? 28 + (seed % 20) : 20 + (seed % 14),
      rotation: ((seed * 7) % 60) - 30,
      opacity: 0.7 + (seed % 30) / 100,
    };
  });

  // Extra decorative small icons
  const decorIcons = [Globe, BarChart3, Zap, Shield, Target, Signal];
  const decorPositions = decorIcons.map((_, i) => {
    const seed = h + i * 251 + 99;
    return {
      x: 5 + ((seed * 13) % 85),
      y: 5 + ((seed * 29) % 80),
      size: isHero ? 14 : 10,
      rotation: ((seed * 11) % 90) - 45,
      opacity: 0.15 + (seed % 10) / 100,
    };
  });

  return (
    <div className={`relative overflow-hidden bg-gradient-to-br ${theme.gradient} ${isFeatured ? "h-full w-full" : isHero ? "rounded-2xl aspect-[21/9]" : "aspect-video"}`}>
      {imageUrl ? (
        <img 
          src={imageUrl} 
          alt={title || slug} 
          className="w-full h-full object-cover mix-blend-overlay opacity-80" 
        />
      ) : (
        <>
          {/* Radial glow */}
          <div
            className="absolute inset-0"
            style={{
              background: `radial-gradient(ellipse 60% 50% at 65% 45%, ${theme.glowColor}, transparent)`,
            }}
          />

          {/* Grid pattern overlay */}
          <div
            className="absolute inset-0 opacity-[0.04]"
            style={{
              backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                                linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
              backgroundSize: isHero ? "40px 40px" : "24px 24px",
            }}
          />

          {/* Decorative circles */}
          <div
            className="absolute rounded-full"
            style={{
              width: isHero ? 200 : 120,
              height: isHero ? 200 : 120,
              right: '-10%',
              top: '-15%',
              background: `radial-gradient(circle, ${theme.accentFrom}15, transparent 70%)`,
            }}
          />
          <div
            className="absolute rounded-full"
            style={{
              width: isHero ? 160 : 100,
              height: isHero ? 160 : 100,
              left: '-5%',
              bottom: '-10%',
              background: `radial-gradient(circle, ${theme.accentTo}12, transparent 70%)`,
            }}
          />

          {/* Small decorative floating icons */}
          {decorPositions.map((pos, i) => (
            <FloatingIcon
              key={`decor-${i}`}
              Icon={decorIcons[i]}
              x={pos.x}
              y={pos.y}
              size={pos.size}
              rotation={pos.rotation}
              color={theme.iconColor}
              opacity={pos.opacity}
              glowColor={theme.glowColor}
            />
          ))}

          {/* Main featured icons */}
          {icons.map((Icon, i) => (
            <FloatingIcon
              key={`main-${i}`}
              Icon={Icon}
              x={positions[i].x}
              y={positions[i].y}
              size={positions[i].size}
              rotation={positions[i].rotation}
              color={theme.iconColor}
              opacity={positions[i].opacity}
              glowColor={theme.glowColor}
            />
          ))}

          {/* Center icon highlight */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div
              className="relative"
              style={{
                padding: isHero ? 20 : 14,
                borderRadius: "50%",
                background: `linear-gradient(135deg, ${theme.accentFrom}20, ${theme.accentTo}20)`,
                border: `1px solid ${theme.accentFrom}30`,
                boxShadow: `0 0 30px ${theme.glowColor}, inset 0 0 20px ${theme.glowColor}`,
              }}
            >
              {icons[0] && (() => {
                const CenterIcon = icons[0];
                return (
                  <CenterIcon
                    style={{
                      width: isHero ? 40 : 28,
                      height: isHero ? 40 : 28,
                      color: theme.iconColor,
                    }}
                    strokeWidth={1.5}
                  />
                );
              })()}
            </div>
          </div>
        </>
      )}

      {/* Gradient line accents */}
      <div
        className="absolute bottom-0 left-0 right-0 h-[2px]"
        style={{
          background: `linear-gradient(90deg, transparent, ${theme.accentFrom}, ${theme.accentTo}, transparent)`,
          opacity: 0.5,
        }}
      />

      {/* DigiVibe branding */}
      <div className="absolute top-3 left-3 flex items-center gap-1.5">
        <div
          className="w-5 h-5 rounded-md flex items-center justify-center text-[8px] font-bold"
          style={{
            background: `linear-gradient(135deg, ${theme.accentFrom}, ${theme.accentTo})`,
            color: "white",
          }}
        >
          DV
        </div>
        <span
          className="text-[10px] font-semibold tracking-wider uppercase"
          style={{ color: theme.iconColor, opacity: 0.8 }}
        >
          DigiVibe
        </span>
      </div>

      {/* Category badge */}
      <div className="absolute top-3 right-3">
        <span
          className="text-[9px] font-medium px-2 py-0.5 rounded-full"
          style={{
            background: `${theme.accentFrom}20`,
            color: theme.iconColor,
            border: `1px solid ${theme.accentFrom}30`,
          }}
        >
          {category}
        </span>
      </div>

      {/* Title on hero variant */}
      {isHero && title && (
        <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/60 to-transparent">
          <h2
            className="text-xl md:text-2xl font-bold text-white/90 max-w-xl line-clamp-2"
            style={{ textShadow: "0 2px 8px rgba(0,0,0,0.4)" }}
          >
            {title}
          </h2>
        </div>
      )}
    </div>
  );
}
