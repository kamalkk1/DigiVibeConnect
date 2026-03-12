
import { useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { PhoneOff, Clock, BarChart2, MessageSquareWarning, ZapOff } from 'lucide-react';
import DigitalMarketing from '../../../../attached_assets/Sequence.gif';
const PainCard = ({ icon: Icon, title, description, delay }: { icon: any, title: string, description: string, delay: number }) => {
  const isImageUrl = typeof Icon === 'string';

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: delay * 0.1 }}
      className="bg-[#111127] border border-slate-800 rounded-xl p-7 relative overflow-hidden group hover:border-[#7C3AED]/30 hover:-translate-y-1 transition-all duration-300"
    >
      <div className="absolute top-0 left-0 right-0 h-[3px] bg-[#F43F5E] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      <div className="text-3xl mb-4 text-rose-500/80 group-hover:text-rose-500 transition-colors">
        {isImageUrl ? (
          <img src={Icon} alt={title} className="w-8 h-8 object-contain" />
        ) : (
          <Icon className="w-8 h-8" />
        )}
      </div>
      <h3 className="text-lg font-bold mb-3 text-slate-100">{title}</h3>
      <p className="text-slate-400 text-base leading-relaxed">{description}</p>
    </motion.div>
  );
};

const StatItem = ({ number, label }: { number: string, label: string }) => {
    return (
        <div className="flex flex-col items-center gap-2">
            <span className="text-4xl font-extrabold bg-gradient-to-br from-[#F43F5E] to-[#F97316] text-transparent bg-clip-text">
                {number}
            </span>
            <span className="text-slate-400 text-sm text-center max-w-[140px] leading-tight">
                {label}
            </span>
        </div>
    )
}

export default function PainSection() {
  return (
    <section id="pain" className="py-20 md:py-32 bg-[#0d0d1a] relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-[1200px]">
        {/* Header */}
        <div className="text-center mb-14">
          <span className="inline-block py-1.5 px-4 bg-rose-500/10 border border-rose-500/20 rounded-full text-rose-500 text-sm font-semibold uppercase tracking-wider mb-5">
            Sound Familiar?
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white mb-4 tracking-tight">
            You're Losing Customers Right Now.<br />
            <span className="text-slate-200">You Just Don't Know It.</span>
          </h2>
          <p className="text-slate-400 text-lg md:text-xl max-w-2xl mx-auto">
            Every local business owner doing ₹2-10 Crore knows this feeling.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-12">
          <PainCard 
            icon={PhoneOff}
            title="Missed Calls = Missed Revenue"
            description="A potential customer calls at 8:47 PM. Nobody picks up. They call your competitor. That lead? Gone forever. And you didn't even know they called."
            delay={1}
          />
          <PainCard 
            icon={Clock}
            title="Follow-ups That Never Happen"
            description="Someone fills out a form on your website. Your team follows up 3 days later. By then, they've already signed with the competitor who responded in 5 minutes."
            delay={2}
          />
          <PainCard 
            icon={BarChart2}
            title="Paying for Likes, Not Leads"
            description="You're paying ₹40-80K/month to an agency. You get a report full of 'impressions' and 'reach.' Beautiful charts. But your phone didn't ring once."
            delay={3}
          />
          <PainCard 
            icon={MessageSquareWarning}
            title="WhatsApp Chaos"
            description="Your WhatsApp is flooded with inquiries. Half go unanswered because your team is busy with walk-in customers. Each unanswered message is money walking away."
            delay={4}
          />
          <PainCard 
             icon={ZapOff}
             title="AI Is Everywhere — Except Your Business"
             description="You've seen the headlines. You've watched the reels. But nobody has shown you how AI works for YOUR business — not a ₹500Cr corporation. Yours."
             delay={5}
           />
           <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="bg-[#111127] border border-slate-800 rounded-xl relative overflow-hidden group hover:border-[#7C3AED]/30 hover:-translate-y-1 transition-all duration-300"
            >
              <div className="absolute top-0 left-0 right-0 h-[3px] bg-[#F43F5E] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <img src={DigitalMarketing} alt="Digital Marketing AI" className="w-full h-full object-cover rounded-xl" />
            </motion.div>
        </div>

        {/* Cost of Inaction */}
        <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="bg-[#111127] border border-rose-500/15 rounded-3xl p-10 text-center relative overflow-hidden"
        >
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-rose-500/5 to-transparent pointer-events-none" />
            <h3 className="text-xl md:text-2xl font-bold text-rose-500 mb-8 relative z-10">
                While You Read This, Here's What's Happening:
            </h3>
            <div className="flex flex-wrap justify-center gap-8 md:gap-16 relative z-10">
                <StatItem number="40%" label="of your calls go unanswered after hours" />
                <StatItem number="78%" label="of leads go to whoever responds first" />
                <StatItem number="5x" label="higher response rate on WhatsApp vs email" />
                <StatItem number="₹0" label="ROI from vanity metrics your agency sends" />
            </div>
        </motion.div>
      </div>

       {/* Objection Bridge */}
       <div className="container mx-auto px-4 max-w-[800px] text-center pt-24 pb-0">
         <p className="text-slate-400 text-lg md:text-xl leading-relaxed italic">
           "I've been burned by agencies before."
         </p>
         <p className="text-slate-400 text-lg md:text-xl leading-relaxed mt-4">
            We know. You paid ₹40-80K/month for pretty posts and zero leads.
            That's exactly why we don't sell "marketing services."
            We deploy <strong className="text-white">AI infrastructure</strong> — Voice AI, lead capture, 
            WhatsApp automation — that you can <strong className="text-white">see working from day one.</strong>
         </p>
       </div>
    </section>
  );
}

