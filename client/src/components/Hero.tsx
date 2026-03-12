
import { Rocket, Eye, CheckCircle2, TrendingUp } from "lucide-react";
import FloatingIcons from "./FloatingIcons";

export default function Hero() {
  return (
    <section id="hero" className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden bg-[#08080f]">
        {/* Background Effects */}
        <div className="absolute top-[-20%] left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-purple-600/10 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute top-[20%] right-[-10%] w-[400px] h-[400px] bg-pink-600/10 rounded-full blur-[100px] pointer-events-none" />

        {/* Floating 3D Brand Icons & AI Shapes */}
        <FloatingIcons />

      <div className="container mx-auto px-4 text-center relative z-10">
        
        <div className="inline-flex items-center gap-2 py-1.5 px-4 bg-slate-800/50 border border-purple-500/30 rounded-full text-purple-300 text-sm font-medium mb-8 animate-fade-in-up">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
          </span>
          For local businesses doing ₹2–10 Crore
        </div>

        <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-white leading-tight mb-8 tracking-tight">
          Your Competitors Are Using AI to Steal Your Customers.<br />
          <span className="bg-gradient-to-r from-purple-400 via-fuchsia-400 to-pink-400 text-transparent bg-clip-text">
            You're Still Doing Everything Manually.
          </span>
        </h1>

        <p className="text-slate-400 text-lg md:text-xl max-w-3xl mx-auto mb-10 leading-relaxed">
          We deploy Voice AI, lead capture bots, and WhatsApp automation into your 
          business — in days, not months. The same technology ₹500Cr companies use. 
          Now it's yours.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
           <a 
            href="#offer" 
            className="group w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 text-white font-bold text-lg rounded-xl shadow-lg hover:shadow-purple-500/25 hover:-translate-y-1 transition-all flex items-center justify-center gap-2"
           >
            <span>Get Your Free AI Pilot</span>
            <Rocket className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
           </a>
           <a 
            href="#products" 
            className="group w-full sm:w-auto px-8 py-4 bg-transparent border border-slate-700 hover:border-purple-500 text-slate-300 hover:text-white font-medium text-lg rounded-xl transition-all hover:bg-white/5 flex items-center justify-center gap-2"
           >
            <span>See What We Deploy</span>
            <Eye className="w-5 h-5 group-hover:scale-110 transition-transform" />
           </a>
        </div>

        {/* Proof Points */}
        <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-slate-500 text-sm font-medium">
            <span className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-500" /> Live in 7 days
            </span>
            <span className="flex items-center gap-2">
                <TrendingUp className="w-4 h-4 text-emerald-500" /> Already deployed for real estate businesses
            </span>
            <span className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-500" /> No long-term contracts
            </span>
        </div>

      </div>
    </section>
  );
}

