
import { motion } from 'framer-motion';
import { Mic, MessageCircle, Bot, CheckCircle2 } from 'lucide-react';

const ProductCard = ({ icon: Icon, title, description, features, delay }: { icon: any, title: string, description: string, features: string[], delay: number }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: delay * 0.1 }}
      className="bg-[#111127] border border-slate-800 rounded-[20px] p-9 relative overflow-hidden group hover:border-[#7C3AED]/50 hover:-translate-y-1 transition-all duration-300"
    >
      <div className={`absolute bottom-0 left-0 right-0 h-[3px] bg-gradient-to-r ${delay === 1 ? 'from-purple-600 to-pink-500' : delay === 2 ? 'from-cyan-500 to-emerald-500' : 'from-emerald-500 to-amber-500'} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
      
      <div className="w-14 h-14 rounded-xl bg-slate-800/50 flex items-center justify-center text-2xl mb-6 group-hover:bg-slate-700/50 transition-colors">
        <Icon className="w-8 h-8 text-white" />
      </div>
      
      <h3 className="text-xl font-bold text-white mb-3">{title}</h3>
      <p className="text-slate-400 text-sm leading-relaxed mb-6">
        {description}
      </p>
      
      <ul className="space-y-3">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start gap-3 text-sm text-slate-300">
            <CheckCircle2 className="w-4 h-4 text-emerald-500 mt-0.5 shrink-0" />
            <span className="leading-snug">{feature}</span>
          </li>
        ))}
      </ul>
    </motion.div>
  );
};

export default function ProductsSection() {
  return (
    <section id="products" className="py-20 md:py-32 bg-[#0d0d1a]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-[1200px]">
        
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block py-1.5 px-4 bg-purple-500/10 border border-purple-500/20 rounded-full text-purple-400 text-sm font-semibold uppercase tracking-wider mb-5">
            What We Deploy
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white mb-4 tracking-tight">
            AI Infrastructure That <span className="bg-gradient-to-r from-purple-500 via-purple-400 to-pink-500 text-transparent bg-clip-text">Makes Your Phone Ring</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Not social media management. Not SEO reports. Actual technology that captures, nurtures, and converts leads.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <ProductCard 
            icon={Mic}
            title="Voice AI Agent"
            description="An AI that answers your business calls 24/7. It sounds human. It qualifies leads. It books appointments. It sends details to your WhatsApp instantly."
            features={[
              "Answers calls even at midnight",
              "Qualifies leads with smart questions",
              "Books appointments automatically",
              "Sends lead details to your WhatsApp",
              "Trained on your business specifics"
            ]}
            delay={1}
          />
          <ProductCard 
            icon={Bot}
            title="AI Lead Capture"
            description="A smart bot on your website that engages visitors, asks the right questions, captures their info, and sends qualified leads to your team in real-time."
            features={[
              "Works while you sleep",
              "Qualifies leads before you see them",
              "Integrates with WhatsApp & CRM",
              "Custom-trained for your industry",
              "Captures from website, social, ads"
            ]}
            delay={2}
          />
          <ProductCard 
            icon={MessageCircle}
            title="WhatsApp Automation"
            description="Automated flows that follow up with every lead on WhatsApp — the app your customers already live on. Nurture sequences, reminders, and instant replies."
            features={[
              "No more forgotten follow-ups",
              "Nurture 100 leads simultaneously",
              "Appointment reminders & confirmations",
              "Catalog & offer broadcasting",
              "5x faster response than email"
            ]}
            delay={3}
          />
        </div>

      </div>
    </section>
  );
}

