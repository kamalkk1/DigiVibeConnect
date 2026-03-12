
import { Rocket, Sparkles } from 'lucide-react';

export default function FinalCTA() {
  return (
    <section className="py-24 bg-[#0d0d1a] border-t border-slate-800">
      <div className="container mx-auto px-4 text-center max-w-4xl">
        <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-6 leading-tight">
          Every Hour You Wait,<br />
          <span className="bg-gradient-to-r from-purple-400 to-rose-400 text-transparent bg-clip-text">Leads Are Slipping Through.</span>
        </h2>
        <p className="text-slate-400 text-xl mb-10 max-w-2xl mx-auto">
          You don't need another agency. You don't need another tool. 
          You need AI infrastructure that works — now.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
           <a 
              href="https://wa.me/919780267246?text=Hi%20Digivibe!%20I%20want%20my%20Free%20AI%20Pilot." 
              target="_blank"
              className="w-full sm:w-auto inline-flex items-center justify-center py-4 px-8 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 text-white font-bold text-xl rounded-xl transition-all shadow-lg hover:shadow-xl hover:-translate-y-1 gap-2 group"
            >
              <span>Get Your Free AI Pilot</span>
              <Rocket className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <a 
              href="#solution" 
              className="w-full sm:w-auto inline-flex items-center justify-center py-4 px-8 bg-transparent border border-slate-700 hover:border-purple-500 text-white font-medium text-lg rounded-xl transition-colors gap-2 group"
            >
              <span>See How It Works</span>
              <Sparkles className="w-5 h-5 text-purple-400 group-hover:text-purple-300" />
            </a>
        </div>
        <p className="text-slate-500 text-sm mt-6">
          No payment required. Live in 7 days. No long-term contracts.
        </p>
      </div>
    </section>
  );
}

