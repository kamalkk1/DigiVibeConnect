
import { useEffect, useRef } from "react";

/**
 * FloatingIcons — 3D-looking brand icons (WhatsApp, Instagram, Facebook, Google)
 * and geometric AI shapes that orbit & float around the hero section.
 * Uses CSS 3D transforms + glassmorphism for a premium, AI-powered feel.
 */

/* ---------- SVG Brand Logos ---------- */
const WhatsAppIcon = () => (
  <svg viewBox="0 0 32 32" fill="none" className="w-full h-full">
    <circle cx="16" cy="16" r="14" fill="#25D366" />
    <path
      d="M23.3 18.6c-.4-.2-2.2-1.1-2.5-1.2-.3-.1-.6-.2-.8.2s-1 1.2-1.2 1.5c-.2.2-.4.3-.8.1-.4-.2-1.6-.6-3-1.8-1.1-1-1.9-2.2-2.1-2.6-.2-.4 0-.6.2-.8.2-.2.4-.4.5-.6.2-.2.2-.4.3-.6.1-.2 0-.5 0-.7 0-.2-.8-2-1.1-2.7-.3-.7-.6-.6-.8-.6h-.7c-.2 0-.6.1-1 .5s-1.3 1.3-1.3 3c0 1.8 1.3 3.5 1.5 3.7.2.2 2.6 4 6.3 5.6.9.4 1.6.6 2.1.8.9.3 1.7.2 2.4.1.7-.1 2.2-.9 2.5-1.8.3-.9.3-1.6.2-1.8-.1-.1-.3-.2-.7-.4z"
      fill="#fff"
    />
  </svg>
);

const InstagramIcon = () => (
  <svg viewBox="0 0 32 32" fill="none" className="w-full h-full">
    <defs>
      <linearGradient id="ig" x1="0" y1="32" x2="32" y2="0">
        <stop stopColor="#FFC107" offset="0%" />
        <stop stopColor="#F44336" offset="50%" />
        <stop stopColor="#9C27B0" offset="100%" />
      </linearGradient>
    </defs>
    <rect x="2" y="2" width="28" height="28" rx="8" fill="url(#ig)" />
    <circle cx="16" cy="16" r="5.5" stroke="#fff" strokeWidth="2" fill="none" />
    <circle cx="23" cy="9" r="1.5" fill="#fff" />
    <rect x="6" y="6" width="20" height="20" rx="5" stroke="#fff" strokeWidth="1.8" fill="none" />
  </svg>
);

const FacebookIcon = () => (
  <svg viewBox="0 0 32 32" fill="none" className="w-full h-full">
    <circle cx="16" cy="16" r="14" fill="#1877F2" />
    <path
      d="M21 16h-3v9h-4v-9h-2v-3h2v-2c0-2.4 1-4 4-4h3v3h-2c-1 0-1 .4-1 1v2h3l-1 3z"
      fill="#fff"
    />
  </svg>
);

const GoogleIcon = () => (
  <svg viewBox="0 0 32 32" fill="none" className="w-full h-full">
    <circle cx="16" cy="16" r="14" fill="#fff" />
    <path d="M23.8 16.2c0-.6-.1-1.2-.2-1.8H16v3.4h4.4c-.2 1.1-.8 2-1.7 2.6v2.2h2.8c1.6-1.5 2.5-3.7 2.5-6.4z" fill="#4285F4" />
    <path d="M16 24c2.3 0 4.2-.8 5.6-2.1l-2.8-2.2c-.8.5-1.7.8-2.8.8-2.2 0-4-1.5-4.7-3.5H8.5v2.3C9.9 22 12.7 24 16 24z" fill="#34A853" />
    <path d="M11.3 17c-.2-.5-.3-1-.3-1.6 0-.6.1-1.1.3-1.6V11.5H8.5C7.9 12.7 7.5 14 7.5 15.4c0 1.4.3 2.7.9 3.9l2.9-2.3z" fill="#FBBC05" />
    <path d="M16 10.9c1.2 0 2.3.4 3.2 1.2l2.4-2.4C20.2 8.3 18.3 7.5 16 7.5c-3.3 0-6.1 2-7.5 4.8l2.9 2.3c.6-2 2.4-3.5 4.7-3.5z" fill="#EA4335" />
  </svg>
);

/* ---------- AI Chip Icon ---------- */
const AiChipIcon = () => (
  <svg viewBox="0 0 32 32" fill="none" className="w-full h-full">
    <defs>
      <linearGradient id="ai-chip" x1="0" y1="0" x2="32" y2="32">
        <stop stopColor="#A855F7" offset="0%" />
        <stop stopColor="#EC4899" offset="100%" />
      </linearGradient>
    </defs>
    <rect x="6" y="6" width="20" height="20" rx="4" fill="url(#ai-chip)" />
    {/* Pins */}
    <rect x="10" y="2" width="2" height="4" rx="1" fill="#A855F7" opacity="0.8" />
    <rect x="15" y="2" width="2" height="4" rx="1" fill="#A855F7" opacity="0.8" />
    <rect x="20" y="2" width="2" height="4" rx="1" fill="#A855F7" opacity="0.8" />
    <rect x="10" y="26" width="2" height="4" rx="1" fill="#A855F7" opacity="0.8" />
    <rect x="15" y="26" width="2" height="4" rx="1" fill="#A855F7" opacity="0.8" />
    <rect x="20" y="26" width="2" height="4" rx="1" fill="#A855F7" opacity="0.8" />
    <rect x="2" y="10" width="4" height="2" rx="1" fill="#A855F7" opacity="0.8" />
    <rect x="2" y="15" width="4" height="2" rx="1" fill="#A855F7" opacity="0.8" />
    <rect x="2" y="20" width="4" height="2" rx="1" fill="#A855F7" opacity="0.8" />
    <rect x="26" y="10" width="4" height="2" rx="1" fill="#A855F7" opacity="0.8" />
    <rect x="26" y="15" width="4" height="2" rx="1" fill="#A855F7" opacity="0.8" />
    <rect x="26" y="20" width="4" height="2" rx="1" fill="#A855F7" opacity="0.8" />
    {/* AI Brain */}
    <circle cx="16" cy="14" r="3" fill="none" stroke="#fff" strokeWidth="1.2" />
    <path d="M13 14c0-1.7 1.3-3 3-3" stroke="#fff" strokeWidth="0.8" opacity="0.6" />
    <path d="M16 17v3" stroke="#fff" strokeWidth="1" />
    <path d="M14 20h4" stroke="#fff" strokeWidth="1" />
    <circle cx="16" cy="14" r="1" fill="#fff" />
  </svg>
);

/* ---------- Robot Icon ---------- */
const RobotIcon = () => (
  <svg viewBox="0 0 32 32" fill="none" className="w-full h-full">
    <defs>
      <linearGradient id="robot-g" x1="0" y1="0" x2="32" y2="32">
        <stop stopColor="#06B6D4" offset="0%" />
        <stop stopColor="#7C3AED" offset="100%" />
      </linearGradient>
    </defs>
    {/* Antenna */}
    <line x1="16" y1="3" x2="16" y2="7" stroke="#06B6D4" strokeWidth="1.5" />
    <circle cx="16" cy="3" r="2" fill="#06B6D4" />
    {/* Head */}
    <rect x="8" y="7" width="16" height="12" rx="4" fill="url(#robot-g)" />
    {/* Eyes */}
    <circle cx="12.5" cy="13" r="2" fill="#fff" />
    <circle cx="19.5" cy="13" r="2" fill="#fff" />
    <circle cx="12.5" cy="13" r="0.8" fill="#08080f" />
    <circle cx="19.5" cy="13" r="0.8" fill="#08080f" />
    {/* Mouth */}
    <rect x="13" y="16" width="6" height="1.5" rx="0.75" fill="#fff" opacity="0.8" />
    {/* Body */}
    <rect x="10" y="20" width="12" height="8" rx="3" fill="url(#robot-g)" opacity="0.8" />
    {/* Body light */}
    <circle cx="16" cy="24" r="1.5" fill="#fff" opacity="0.6" />
    {/* Arms */}
    <rect x="5" y="21" width="4" height="2" rx="1" fill="#06B6D4" opacity="0.7" />
    <rect x="23" y="21" width="4" height="2" rx="1" fill="#7C3AED" opacity="0.7" />
  </svg>
);

/* ---------- AI Geometric Shapes ---------- */
const AiShape = ({ type, className }: { type: "hex" | "ring" | "triangle" | "dot-grid"; className?: string }) => {
  if (type === "hex") {
    return (
      <svg viewBox="0 0 60 60" className={className}>
        <polygon
          points="30,2 54,16 54,44 30,58 6,44 6,16"
          fill="none"
          stroke="url(#ai-grad)"
          strokeWidth="1.5"
          opacity="0.6"
        />
        <defs>
          <linearGradient id="ai-grad" x1="0" y1="0" x2="60" y2="60">
            <stop stopColor="#A855F7" offset="0%" />
            <stop stopColor="#EC4899" offset="100%" />
          </linearGradient>
        </defs>
      </svg>
    );
  }
  if (type === "ring") {
    return (
      <svg viewBox="0 0 60 60" className={className}>
        <circle cx="30" cy="30" r="24" fill="none" stroke="#7C3AED" strokeWidth="1" opacity="0.4" />
        <circle cx="30" cy="30" r="18" fill="none" stroke="#A855F7" strokeWidth="0.8" opacity="0.3" strokeDasharray="4 6" />
        <circle cx="30" cy="6" r="3" fill="#A855F7" opacity="0.8" />
      </svg>
    );
  }
  if (type === "triangle") {
    return (
      <svg viewBox="0 0 50 50" className={className}>
        <polygon
          points="25,4 46,42 4,42"
          fill="none"
          stroke="#EC4899"
          strokeWidth="1.2"
          opacity="0.4"
        />
      </svg>
    );
  }
  // dot-grid
  return (
    <svg viewBox="0 0 60 60" className={className}>
      {[0, 1, 2, 3].map(r =>
        [0, 1, 2, 3].map(c => (
          <circle
            key={`${r}-${c}`}
            cx={10 + c * 14}
            cy={10 + r * 14}
            r="1.5"
            fill="#7C3AED"
            opacity={0.15 + Math.random() * 0.25}
          />
        ))
      )}
    </svg>
  );
};

/* ---------- Connection Lines (AI Neural feel) ---------- */
const ConnectionLines = () => (
  <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 1200 800" preserveAspectRatio="none">
    <defs>
      <linearGradient id="line-g1" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop stopColor="#7C3AED" stopOpacity="0" offset="0%" />
        <stop stopColor="#7C3AED" stopOpacity="0.15" offset="50%" />
        <stop stopColor="#7C3AED" stopOpacity="0" offset="100%" />
      </linearGradient>
      <linearGradient id="line-g2" x1="100%" y1="0%" x2="0%" y2="100%">
        <stop stopColor="#EC4899" stopOpacity="0" offset="0%" />
        <stop stopColor="#EC4899" stopOpacity="0.12" offset="50%" />
        <stop stopColor="#EC4899" stopOpacity="0" offset="100%" />
      </linearGradient>
    </defs>
    <path d="M0 300 Q300 200 600 400 T1200 300" stroke="url(#line-g1)" strokeWidth="1" fill="none" className="animate-dash" />
    <path d="M0 500 Q400 350 800 500 T1200 400" stroke="url(#line-g2)" strokeWidth="1" fill="none" className="animate-dash-reverse" />
    <path d="M200 0 Q350 300 200 600" stroke="url(#line-g1)" strokeWidth="0.8" fill="none" opacity="0.5" className="animate-dash" />
    <path d="M1000 0 Q850 250 1000 600" stroke="url(#line-g2)" strokeWidth="0.8" fill="none" opacity="0.5" className="animate-dash-reverse" />
  </svg>
);

/* ---------- Floating Icon Item ---------- */
interface FloatingItemProps {
  children: React.ReactNode;
  className?: string;
  size?: number;
  glowColor?: string;
  delay?: number;
}

const FloatingItem = ({ children, className = "", size = 52, glowColor = "rgba(124,58,237,0.35)", delay = 0 }: FloatingItemProps) => (
  <div
    className={`absolute floating-icon ${className}`}
    style={{
      width: size,
      height: size,
      animationDelay: `${delay}s`,
    }}
  >
    {/* Glow ring */}
    <div
      className="absolute -inset-2 rounded-2xl blur-xl opacity-60 animate-pulse-slow"
      style={{ background: glowColor }}
    />
    {/* Glass card */}
    <div
      className="relative w-full h-full rounded-2xl border border-white/10 flex items-center justify-center p-2.5 shadow-2xl"
      style={{
        background: "rgba(17,17,39,0.7)",
        backdropFilter: "blur(12px)",
        WebkitBackdropFilter: "blur(12px)",
        transform: "perspective(600px) rotateY(-8deg) rotateX(5deg)",
      }}
    >
      {children}
    </div>
  </div>
);

/* ---------- Main Component ---------- */
export default function FloatingIcons() {
  const containerRef = useRef<HTMLDivElement>(null);

  /* Parallax mouse-follow for desktop */
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    let rafId: number;
    const handleMouseMove = (e: MouseEvent) => {
      cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(() => {
        const { innerWidth: w, innerHeight: h } = window;
        const dx = (e.clientX - w / 2) / w; // -0.5 to 0.5
        const dy = (e.clientY - h / 2) / h;

        const icons = container.querySelectorAll<HTMLElement>(".floating-icon");
        icons.forEach((icon, i) => {
          const factor = 8 + (i % 3) * 6; // stagger parallax depth
          icon.style.transform = `translate(${dx * factor}px, ${dy * factor}px)`;
        });
      });
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <div ref={containerRef} className="absolute inset-0 pointer-events-none overflow-hidden z-0" aria-hidden="true">
      {/* Neural connection lines */}
      <ConnectionLines />

      {/* ── Brand Icons ── */}
      {/* WhatsApp — top left */}
      <FloatingItem
        className="top-[12%] left-[6%] md:left-[8%] animate-float-1"
        size={68}
        glowColor="rgba(37,211,102,0.3)"
        delay={0}
      >
        <WhatsAppIcon />
      </FloatingItem>

      {/* Instagram — top right */}
      <FloatingItem
        className="top-[8%] right-[7%] md:right-[10%] animate-float-2"
        size={64}
        glowColor="rgba(244,67,54,0.25)"
        delay={0.8}
      >
        <InstagramIcon />
      </FloatingItem>

      {/* Facebook — bottom left */}
      <FloatingItem
        className="bottom-[18%] left-[5%] md:left-[12%] animate-float-3"
        size={60}
        glowColor="rgba(24,119,242,0.3)"
        delay={1.6}
      >
        <FacebookIcon />
      </FloatingItem>

      {/* Google — bottom right */}
      <FloatingItem
        className="bottom-[22%] right-[6%] md:right-[11%] animate-float-4"
        size={62}
        glowColor="rgba(66,133,244,0.3)"
        delay={2.2}
      >
        <GoogleIcon />
      </FloatingItem>

      {/* ── AI Chip — center left ── */}
      <FloatingItem
        className="top-[35%] left-[3%] md:left-[6%] animate-float-2"
        size={72}
        glowColor="rgba(168,85,247,0.35)"
        delay={1.2}
      >
        <AiChipIcon />
      </FloatingItem>

      {/* ── Robot — center right ── */}
      <FloatingItem
        className="top-[40%] right-[3%] md:right-[6%] animate-float-3"
        size={70}
        glowColor="rgba(6,182,212,0.35)"
        delay={2.8}
      >
        <RobotIcon />
      </FloatingItem>

      {/* ── Extra brand echoes (smaller, further out) ── */}
      <FloatingItem
        className="top-[55%] left-[2%] md:left-[4%] animate-float-3 hidden md:block"
        size={44}
        glowColor="rgba(37,211,102,0.2)"
        delay={3}
      >
        <WhatsAppIcon />
      </FloatingItem>

      <FloatingItem
        className="top-[58%] right-[2%] md:right-[5%] animate-float-1 hidden md:block"
        size={46}
        glowColor="rgba(244,67,54,0.2)"
        delay={3.5}
      >
        <InstagramIcon />
      </FloatingItem>

      {/* ── AI Geometric Shapes ── */}
      {/* Hexagon — top center-left */}
      <div className="absolute top-[5%] left-[28%] w-16 h-16 animate-spin-slow opacity-60 hidden md:block">
        <AiShape type="hex" className="w-full h-full" />
      </div>

      {/* Ring — mid right */}
      <div className="absolute top-[30%] right-[15%] w-20 h-20 animate-orbit opacity-50 hidden md:block">
        <AiShape type="ring" className="w-full h-full" />
      </div>

      {/* Triangle — bottom center */}
      <div className="absolute bottom-[10%] left-[40%] w-12 h-12 animate-spin-slow-reverse opacity-40 hidden md:block" style={{ animationDelay: "2s" }}>
        <AiShape type="triangle" className="w-full h-full" />
      </div>

      {/* Dot Grid — top right area */}
      <div className="absolute top-[15%] right-[22%] w-14 h-14 opacity-30 hidden lg:block">
        <AiShape type="dot-grid" className="w-full h-full" />
      </div>

      {/* Additional scattered shapes */}
      <div className="absolute bottom-[30%] left-[22%] w-10 h-10 animate-orbit opacity-30 hidden md:block" style={{ animationDelay: "4s" }}>
        <AiShape type="ring" className="w-full h-full" />
      </div>

      <div className="absolute top-[55%] right-[25%] w-8 h-8 animate-spin-slow opacity-25 hidden lg:block">
        <AiShape type="hex" className="w-full h-full" />
      </div>

      {/* ── Floating Glow Orbs ── */}
      <div className="absolute top-[20%] left-[18%] w-3 h-3 rounded-full bg-purple-500/40 animate-float-1 blur-[2px]" />
      <div className="absolute top-[60%] right-[18%] w-2 h-2 rounded-full bg-pink-500/50 animate-float-2 blur-[1px]" />
      <div className="absolute bottom-[25%] left-[35%] w-2.5 h-2.5 rounded-full bg-cyan-400/30 animate-float-3 blur-[2px]" />
      <div className="absolute top-[45%] left-[50%] w-1.5 h-1.5 rounded-full bg-purple-400/40 animate-float-4 blur-[1px]" />
      <div className="absolute bottom-[40%] right-[30%] w-2 h-2 rounded-full bg-emerald-400/30 animate-float-1 blur-[1px]" style={{ animationDelay: "1.5s" }} />
    </div>
  );
}
