
import { motion } from 'framer-motion';
import { Stethoscope, Bot, Rocket } from 'lucide-react';

export default function SolutionSection() {
  return (
    <section id="solution" className="py-20 md:py-32 bg-[#08080f] relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-[1200px]">
        
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block py-1.5 px-4 bg-emerald-500/10 border border-emerald-500/20 rounded-full text-emerald-500 text-sm font-semibold uppercase tracking-wider mb-5">
            How It Works
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white mb-4 tracking-tight">
            3 Steps. 7 Days. <span className="bg-gradient-to-r from-purple-500 via-purple-400 to-pink-500 text-transparent bg-clip-text">Live.</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            While a traditional agency writes your "strategy document," your system is already running.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16 relative">
          {/* Connector Line (Desktop) */}
          <div className="hidden md:block absolute top-[50px] left-[16%] right-[16%] h-[2px] bg-slate-800/50 z-0"></div>

          {/* Step 1 */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="bg-[#111127] border border-slate-800 rounded-[20px] p-8 text-center relative z-10 hover:border-purple-500/30 hover:-translate-y-2 transition-all duration-300 shadow-xl group"
          >
            <div className="w-14 h-14 mx-auto rounded-full bg-gradient-to-br from-purple-600 to-pink-500 flex items-center justify-center text-xl font-bold text-white mb-6 shadow-lg shadow-purple-900/40 group-hover:scale-110 transition-transform">
              <Stethoscope className="w-7 h-7" />
            </div>
            <h3 className="text-xl font-bold text-white mb-2">We Diagnose</h3>
            <span className="inline-block text-purple-400 text-sm font-semibold mb-4 bg-purple-500/10 px-3 py-1 rounded-full">15-min call</span>
            <p className="text-slate-400 leading-relaxed text-sm">
              We map your customer journey — where leads come from, where they drop off, and where 
              AI can plug the gaps. No pitch deck. No proposal that takes 2 weeks. Just answers.
            </p>
          </motion.div>

          {/* Step 2 */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-[#111127] border border-slate-800 rounded-[20px] p-8 text-center relative z-10 hover:border-purple-500/30 hover:-translate-y-2 transition-all duration-300 shadow-xl group"
          >
            <div className="w-14 h-14 mx-auto rounded-full bg-gradient-to-br from-purple-600 to-pink-500 flex items-center justify-center text-xl font-bold text-white mb-6 shadow-lg shadow-purple-900/40 group-hover:scale-110 transition-transform">
              <Bot className="w-7 h-7" />
            </div>
            <h3 className="text-xl font-bold text-white mb-2">We Build</h3>
            <span className="inline-block text-purple-400 text-sm font-semibold mb-4 bg-purple-500/10 px-3 py-1 rounded-full">3-5 days</span>
            <p className="text-slate-400 leading-relaxed text-sm">
              We deploy Voice AI agents, lead capture bots, and WhatsApp flows — custom-configured 
              for your industry, your customers, your business. Not templates. Custom.
            </p>
          </motion.div>

          {/* Step 3 */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="bg-[#111127] border border-slate-800 rounded-[20px] p-8 text-center relative z-10 hover:border-purple-500/30 hover:-translate-y-2 transition-all duration-300 shadow-xl group"
          >
             <div className="w-14 h-14 mx-auto rounded-full bg-gradient-to-br from-purple-600 to-pink-500 flex items-center justify-center text-xl font-bold text-white mb-6 shadow-lg shadow-purple-900/40 group-hover:scale-110 transition-transform">
              <Rocket className="w-7 h-7" />
            </div>
            <h3 className="text-xl font-bold text-white mb-2">You Grow</h3>
            <span className="inline-block text-purple-400 text-sm font-semibold mb-4 bg-purple-500/10 px-3 py-1 rounded-full">Day 7 onwards</span>
            <p className="text-slate-400 leading-relaxed text-sm">
              Leads flow in. Calls get answered 24/7. WhatsApp follow-ups happen automatically.
              You focus on running your business. The AI handles the rest.
            </p>
          </motion.div>
        
        </div>

        {/* Tech Simplicity Note */}
        <div className="text-center">
            <p className="text-slate-500 text-base max-w-lg mx-auto">
                <strong className="text-slate-300">Zero tech skills needed.</strong> We handle everything — the setup, the training, the deployment. 
                You'll never see a line of code. You'll just see leads.
            </p>
        </div>

      </div>
    </section>
  );
}
