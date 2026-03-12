
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { landingFaqs } from '@/lib/siteData';

const FAQItem = ({ question, answer }: { question: string, answer: string }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-slate-800">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between py-6 text-left focus:outline-none group"
      >
        <span className="text-lg font-semibold text-slate-200 group-hover:text-purple-400 transition-colors pr-4">{question}</span>
        <span className={`transform transition-transform duration-300 ${isOpen ? 'rotate-180' : ''} text-slate-500 group-hover:text-purple-400 flex-shrink-0`}>
          <ChevronDown className="w-6 h-6" />
        </span>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden"
          >
            <div className="pb-6 text-slate-400 leading-relaxed pr-8">
              {answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default function FAQSection() {
  return (
    <section id="faq" className="py-20 bg-[#08080f]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-[800px]">
        
        <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4">
            Frequently Asked Questions
            </h2>
        </div>

        <div className="space-y-2">
            {landingFaqs.map((faq, index) => (
                <FAQItem 
                    key={index}
                    question={faq.question}
                    answer={faq.answer}
                />
            ))}
        </div>

      </div>
    </section>
  );
}

