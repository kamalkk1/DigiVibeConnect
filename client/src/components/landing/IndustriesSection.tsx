
import { motion } from 'framer-motion';
import { Building2, Stethoscope, GraduationCap, Dumbbell, Scissors, Utensils } from 'lucide-react';

const IndustryCard = ({ icon: Icon, title, description, delay }: { icon: any, title: string, description: string, delay: number }) => (
  <motion.div 
    initial={{ opacity: 0, y: 15 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.4, delay: delay * 0.1 }}
    className="bg-[#111127] border border-slate-800 rounded-xl p-6 text-center hover:border-purple-500/40 hover:-translate-y-1 transition-all duration-300 group"
  >
    <div className="text-4xl mb-4 flex justify-center text-purple-400 group-hover:text-purple-300 transition-colors">
        <Icon className="w-10 h-10" strokeWidth={1.5} />
    </div>
    <h3 className="text-lg font-bold text-white mb-2">{title}</h3>
    <p className="text-slate-400 text-sm leading-relaxed">{description}</p>
  </motion.div>
);

export default function IndustriesSection() {
  return (
    <section className="py-20 bg-[#0d0d1a]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-[1200px]">
        
        {/* Header */}
        <div className="text-center mb-12">
            <span className="inline-block py-1 px-3 bg-purple-900/30 border border-purple-500/20 rounded-full text-purple-300 text-xs font-semibold uppercase tracking-wider mb-4">
            Works For Your Industry
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4 tracking-tight">
            Any Business Where Customers <span className="bg-gradient-to-r from-purple-400 to-pink-500 text-transparent bg-clip-text">Call, Inquire, or Book</span>
            </h2>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            <IndustryCard 
                icon={Building2} title="Real Estate" 
                description="Capture every site visit request, missed call, and follow up on WhatsApp automatically."
                delay={0}
            />
            <IndustryCard 
                icon={Stethoscope} title="Clinics & Hospitals" 
                description="Voice AI books appointments, sends confirmations, and handles after-hours patient calls."
                delay={1}
            />
             <IndustryCard 
                icon={GraduationCap} title="Coaching Institutes" 
                description="Capture parent inquiries from every platform and nurture until enrollment."
                delay={2}
            />
             <IndustryCard 
                icon={Dumbbell} title="Gyms & Fitness" 
                description="Capture every 'I'm interested' DM, missed call, and follow up until they sign up."
                delay={3}
            />
             <IndustryCard 
                icon={Scissors} title="Salons & Spas" 
                description="AI handles booking requests, schedules appointments, and sends reminders via WhatsApp."
                delay={4}
            />
             <IndustryCard 
                icon={Utensils} title="Restaurants" 
                description="AI takes reservations, handles event inquiries, and sends menu specials automatically."
                delay={5}
            />
        </div>

      </div>
    </section>
  );
}

