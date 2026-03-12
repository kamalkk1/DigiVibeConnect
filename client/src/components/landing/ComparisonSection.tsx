
import { motion } from 'framer-motion';

export default function ComparisonSection() {
  return (
    <section id="comparison" className="py-20 md:py-32 bg-[#08080f]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-[1200px]">
        
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block py-1.5 px-4 bg-slate-800/50 border border-slate-700 rounded-full text-slate-300 text-sm font-semibold uppercase tracking-wider mb-5">
            Why Digivibe?
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white mb-4 tracking-tight">
            We're Not Another Agency. <span className="bg-gradient-to-r from-purple-500 via-purple-400 to-pink-500 text-transparent bg-clip-text">We're Different.</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            See why businesses are switching from traditional agencies and DIY tools to Digivibe.
          </p>
        </div>

        {/* Table */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="overflow-x-auto"
        >
          <table className="w-full text-left border-collapse min-w-[800px]">
            <thead>
              <tr>
                <th className="p-6 text-slate-400 font-semibold border-b border-slate-800 w-1/4">Feature</th>
                <th className="p-6 text-slate-400 font-semibold border-b border-slate-800 w-1/4">Traditional Agency</th>
                <th className="p-6 text-slate-400 font-semibold border-b border-slate-800 w-1/4">SaaS Tools (DIY)</th>
                <th className="p-6 text-purple-400 font-bold border-b border-purple-500/30 bg-purple-500/5 w-1/4">Digivibe ✦</th>
              </tr>
            </thead>
            <tbody className="text-sm md:text-base">
              <tr>
                <td className="p-6 border-b border-slate-800 font-semibold text-white">Time to Deploy</td>
                <td className="p-6 border-b border-slate-800 text-slate-400">4-8 weeks to "strategize"</td>
                <td className="p-6 border-b border-slate-800 text-slate-400">Instant access, you figure it out</td>
                <td className="p-6 border-b border-purple-500/20 bg-purple-500/5 text-white font-medium shadow-[inset_0_0_20px_rgba(124,58,237,0.05)]">
                    Live in 7 days, fully configured
                </td>
              </tr>
              <tr>
                <td className="p-6 border-b border-slate-800 font-semibold text-white">What You Get</td>
                <td className="p-6 border-b border-slate-800 text-slate-400">Social media posts</td>
                <td className="p-6 border-b border-slate-800 text-slate-400">100 features, you use 3</td>
                <td className="p-6 border-b border-purple-500/20 bg-purple-500/5 text-white font-medium shadow-[inset_0_0_20px_rgba(124,58,237,0.05)]">
                    Voice AI + Lead Capture + WhatsApp
                </td>
              </tr>
              <tr>
                <td className="p-6 border-b border-slate-800 font-semibold text-white">Reporting</td>
                <td className="p-6 border-b border-slate-800 text-slate-400">Impressions & "reach"</td>
                <td className="p-6 border-b border-slate-800 text-slate-400">Dashboards you don't understand</td>
                <td className="p-6 border-b border-purple-500/20 bg-purple-500/5 text-white font-medium shadow-[inset_0_0_20px_rgba(124,58,237,0.05)]">
                    One number: leads this week
                </td>
              </tr>
              <tr>
                <td className="p-6 border-b border-slate-800 font-semibold text-white">Cost</td>
                <td className="p-6 border-b border-slate-800 text-slate-400">₹50K-2L/month, no AI</td>
                <td className="p-6 border-b border-slate-800 text-slate-400">₹5-30K/month, no setup help</td>
                <td className="p-6 border-b border-purple-500/20 bg-purple-500/5 text-white font-medium shadow-[inset_0_0_20px_rgba(124,58,237,0.05)]">
                    AI infrastructure + execution included
                </td>
              </tr>
              <tr>
                <td className="p-6 border-b border-slate-800 font-semibold text-white">Support</td>
                <td className="p-6 border-b border-slate-800 text-slate-400">Junior account manager</td>
                <td className="p-6 border-b border-slate-800 text-slate-400">Help docs & chatbot</td>
                <td className="p-6 border-b border-purple-500/20 bg-purple-500/5 text-white font-medium shadow-[inset_0_0_20px_rgba(124,58,237,0.05)]">
                  Dedicated AI Growth Strategist
                </td>
              </tr>
              <tr>
                <td className="p-6 border-b border-slate-800 font-semibold text-white">Bottom Line</td>
                <td className="p-6 border-b border-slate-800 text-slate-400">📄 Pretty reports</td>
                <td className="p-6 border-b border-slate-800 text-slate-400">🔑 A login</td>
                <td className="p-6 border-b border-purple-500/20 bg-purple-500/5 text-white font-medium shadow-[inset_0_0_20px_rgba(124,58,237,0.05)]">
                  📱 Your phone rings
                </td>
              </tr>
            </tbody>
          </table>
        </motion.div>

      </div>
    </section>
  );
}
