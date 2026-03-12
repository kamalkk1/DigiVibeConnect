
import { motion } from 'framer-motion';

export default function OfferSection() {
  return (
    <section id="offer" className="py-24 bg-[#0d0d1a] relative overflow-hidden">
        {/* Background Gradients */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-purple-600/10 rounded-full blur-[100px] pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-pink-600/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-[1000px] relative z-10">
        
        <div className="bg-[#111127]/80 backdrop-blur-xl border border-purple-500/30 rounded-[30px] p-8 md:p-14 shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-[4px] bg-gradient-to-r from-purple-500 via-pink-500 to-rose-500" />
            
            {/* Header */}
            <div className="text-center mb-10">
                <span className="inline-block py-1.5 px-4 bg-rose-500/10 border border-rose-500/20 rounded-full text-rose-400 text-sm font-bold uppercase tracking-wider mb-5">
                🎯 Limited Pilot Spots
                </span>
                <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-6 tracking-tight">
                Get Enterprise AI Infrastructure<br />
                <span className="bg-gradient-to-r from-purple-400 to-rose-400 text-transparent bg-clip-text">Deployed in Your Business</span>
                </h2>
                <p className="text-slate-300 text-lg leading-relaxed max-w-2xl mx-auto">
                Everything you need to capture, nurture, and convert leads on autopilot — without hiring a dev team, 
                learning new software, or waiting months.
                </p>
            </div>

            {/* Value Stack */}
            <div className="bg-[#08080f] rounded-2xl p-8 md:p-10 mb-10 border border-slate-800/50">
                <h4 className="text-white font-bold text-xl mb-6 text-center border-b border-slate-800 pb-4">Here's Everything You Get</h4>
                <div className="space-y-6">
                    {[
                        { title: "Voice AI Agent — custom-trained for your business", value: "Companies pay ₹3-5 Lakh to build this alone" },
                        { title: "AI Lead Capture Bot — deployed on your website", value: "Worth ₹1-2 Lakh in development costs" },
                        { title: "WhatsApp Automation Flows — nurture, auto-reply, booking", value: "Worth ₹1-2 Lakh to build and configure" },
                        { title: "CRM Integration — all leads in one dashboard", value: "Worth ₹50K-1 Lakh in setup" },
                        { title: "Ongoing Optimization — we monitor, tweak, improve", value: "Agencies charge ₹40-80K/month for this" },
                        { title: "Dedicated AI Growth Strategist", value: "Not a chatbot. A human who understands your business." }
                    ].map((item, idx) => (
                        <div key={idx} className="flex items-start gap-4">
                            <div className="mt-1 w-6 h-6 rounded-full bg-emerald-500/20 flex items-center justify-center text-emerald-400 text-sm font-bold shrink-0">
                                ✓
                            </div>
                            <div>
                                <div className="text-white font-semibold text-lg">{item.title}</div>
                                <div className="text-slate-500 text-sm">{item.value}</div>
                            </div>
                        </div>
                    ))}
                </div>
                
                <div className="mt-8 pt-6 border-t border-slate-800 text-center">
                    <p className="text-slate-500 mb-1">If you built this yourself: <s className="decoration-rose-500">₹8-15 Lakhs + 3-6 months</s></p>
                    <p className="text-emerald-400 font-bold text-lg">Deployed in 7 days. Fraction of the cost.</p>
                </div>
            </div>

             {/* Guarantee */}
            <div className="flex items-center justify-center gap-3 bg-blue-500/10 border border-blue-500/20 p-4 rounded-xl mb-8 text-center md:text-left">
                <span className="text-2xl">🛡️</span>
                <span className="text-blue-200 text-sm md:text-base">
                    <strong>Free Voice AI Pilot</strong> — We set it up for free. If it captures even one lead you'd 
                have missed, you'll know this is real. No payment. No contract.
                </span>
            </div>

            {/* CTA */}
            <div className="text-center">
                 <a 
                    href="https://wa.me/919780267246?text=Hi%20Digivibe!%20I'm%20interested%20in%20the%20Free%20AI%20Pilot." 
                    target="_blank"
                    className="inline-flex items-center justify-center py-4 px-8 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 text-white font-bold text-xl rounded-xl transition-all shadow-[0_4px_20px_rgba(168,85,247,0.4)] hover:shadow-[0_8px_30px_rgba(168,85,247,0.6)] hover:-translate-y-1"
                 >
                    🚀 Start My Free AI Pilot →
                 </a>
                 <p className="text-slate-500 text-sm mt-4">
                  No payment required. No credit card. Just a 15-minute call.
                 </p>
            </div>

        </div>
      </div>
    </section>
  );
}
