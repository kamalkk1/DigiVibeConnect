
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Activity, X, ArrowRight, Check, AlertTriangle, ShieldCheck } from 'lucide-react';

const QUESTIONS = [
  {
    question: "How many customer calls does your business get per day?",
    options: [
      { label: "0 – 5 calls", score: 1 },
      { label: "5 – 20 calls", score: 2 },
      { label: "20 – 50 calls", score: 3 },
      { label: "50+ calls", score: 3 }
    ]
  },
  {
    question: "What happens when a customer calls after business hours?",
    options: [
      { label: "Goes to voicemail (nobody checks)", score: 0 },
      { label: "Rings out — nobody picks up", score: 0 },
      { label: "I pick up myself (always on call)", score: 1 },
      { label: "We have an automated system", score: 3 }
    ]
  },
  {
    question: "When a new lead contacts you, how fast does your team respond?",
    options: [
      { label: "Under 5 minutes", score: 3 },
      { label: "Under 1 hour", score: 2 },
      { label: "Same day", score: 1 },
      { label: "Next day or later", score: 0 }
    ]
  },
  {
    question: "How do you currently follow up with leads?",
    options: [
      { label: "We call them back manually", score: 2 },
      { label: "WhatsApp messages (manually)", score: 2 },
      { label: "Email", score: 1 },
      { label: "We don't really follow up", score: 0 }
    ]
  },
  {
    question: "How much are you spending on marketing per month?",
    options: [
      { label: "Under ₹20K", score: 1 },
      { label: "₹20K – ₹50K", score: 2 },
      { label: "₹50K – ₹1 Lakh", score: 3 },
      { label: "₹1 Lakh+", score: 3 }
    ]
  },
  {
    question: "Are you satisfied with the leads your current marketing generates?",
    options: [
      { label: "Very happy — leads are flowing", score: 0 },
      { label: "It's okay, could be better", score: 1 },
      { label: "Not great — too few real leads", score: 2 },
      { label: "What leads? Getting barely anything", score: 3 }
    ]
  },
  {
    question: "If AI could answer your calls, capture leads 24/7, and follow up automatically — would you try it?",
    options: [
      { label: "Absolutely — let's go", score: 3 },
      { label: "Maybe — I'd want to see it first", score: 2 },
      { label: "I'm skeptical but curious", score: 1 },
      { label: "Not interested right now", score: 0 }
    ]
  }
];

export default function AuditWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState<{question: string, answer: string, score: number}[]>([]);
  const [showResults, setShowResults] = useState(false);
  const [leadDetails, setLeadDetails] = useState({ name: '', phone: '', industry: '' });

  const handleOptionClick = (option: { label: string, score: number }) => {
    const newAnswers = [...answers, { 
      question: QUESTIONS[currentStep].question, 
      answer: option.label, 
      score: option.score 
    }];
    setAnswers(newAnswers);

    if (currentStep < QUESTIONS.length - 1) {
      setTimeout(() => setCurrentStep(currentStep + 1), 300);
    } else {
      setTimeout(() => setShowResults(true), 300);
    }
  };

  const calculateScore = () => {
    const totalScore = answers.reduce((sum, a) => sum + a.score, 0);
    const maxScore = QUESTIONS.length * 3;
    const percentage = (totalScore / maxScore) * 100;
    
    let level = "";
    let description = "";
    let colorClass = "";

    if (percentage <= 30) {
      level = "🚨 Critical — You're Losing Revenue Daily";
      description = "Your business has significant gaps in lead capture and follow-up. You're likely losing 40-60% of potential customers to competitors who respond faster.";
      colorClass = "text-rose-500";
    } else if (percentage <= 55) {
      level = "⚠️ At Risk — Leads Are Slipping Through";
      description = "You have some systems in place, but major gaps remain — especially in after-hours coverage and follow-up speed.";
      colorClass = "text-amber-500";
    } else if (percentage <= 80) {
      level = "👍 Good — But There's Room to Grow";
      description = "You're doing better than most, but there are still gaps where leads fall through. AI could optimize your existing processes significantly.";
      colorClass = "text-blue-400";
    } else {
      level = "🏆 Optimized — You're Ahead of the Game";
      description = "Your lead capture process is strong! AI could still add incremental value — especially for scaling without adding headcount.";
      colorClass = "text-emerald-400";
    }

    return { totalScore, level, description, colorClass, maxScore };
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if(!leadDetails.name || !leadDetails.phone || !leadDetails.industry) return;

    const result = calculateScore();
    const answerSummary = answers.map((a, i) => `Q${i + 1}: ${a.answer} (${a.score})`).join('\n');
    
    const message = `Hi Digivibe! I just took the AI Readiness Audit.\n\n` +
                    `My name is ${leadDetails.name}, I'm in ${leadDetails.industry}.\n` +
                    `My score was ${result.totalScore}/${result.maxScore}.\n\n` +
                    `Please send my detailed report!`;
    
    window.open(`https://wa.me/919780267246?text=${encodeURIComponent(message)}`, '_blank');
    setIsOpen(false); // Close modal after submit
  };

  return (
    <>
      <button 
        onClick={() => setIsOpen(true)}
        className={`fixed bottom-6 right-6 z-50 flex items-center gap-3 bg-white text-slate-900 py-3 px-5 rounded-full font-bold shadow-2xl hover:scale-105 transition-transform duration-300 ${isOpen ? 'hidden' : 'flex'}`}
      >
        <Activity className="w-6 h-6 text-rose-500" />
        <span>Free AI Readiness Audit</span>
        <span className="absolute -top-1 -right-1 w-4 h-4 bg-rose-500 rounded-full animate-ping"></span>
        <span className="absolute -top-1 -right-1 w-4 h-4 bg-rose-500 rounded-full border-2 border-white"></span>
      </button>

      <AnimatePresence>
        {isOpen && (
          <div className="fixed inset-0 z-[101] flex items-end sm:items-center justify-center p-0 sm:p-4">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            />
            
            <motion.div 
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              exit={{ y: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="relative bg-[#111127] w-full max-w-lg rounded-t-2xl sm:rounded-2xl border border-slate-700 shadow-2xl overflow-hidden max-h-[90vh] flex flex-col"
            >
              {/* Header */}
              <div className="flex items-center justify-between p-4 border-b border-slate-800 bg-[#08080f]">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-indigo-500/20 flex items-center justify-center text-indigo-400 text-xl">
                    <Activity className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-white font-bold">AI Readiness Audit</h4>
                    <span className="text-slate-400 text-xs">Takes 60 seconds • Free</span>
                  </div>
                </div>
                <button onClick={() => setIsOpen(false)} className="text-slate-500 hover:text-white p-2">
                  <X className="w-6 h-6" />
                </button>
              </div>

              {/* Progress */}
              {!showResults && (
                <div className="h-1 bg-slate-800 w-full">
                  <motion.div 
                    className="h-full bg-gradient-to-r from-indigo-500 to-purple-500"
                    initial={{ width: 0 }}
                    animate={{ width: `${((currentStep + 1) / QUESTIONS.length) * 100}%` }}
                  />
                </div>
              )}

              {/* Body */}
              <div className="p-6 overflow-y-auto">
                {!showResults ? (
                  <div key={currentStep}>
                    <div className="text-slate-500 text-sm font-medium mb-4">Question {currentStep + 1} of {QUESTIONS.length}</div>
                    <h3 className="text-xl font-bold text-white mb-6 leading-relaxed">
                      {QUESTIONS[currentStep].question}
                    </h3>
                    <div className="space-y-3">
                      {QUESTIONS[currentStep].options.map((opt, idx) => (
                        <button
                          key={idx}
                          onClick={() => handleOptionClick(opt)}
                          className="w-full text-left p-4 rounded-xl border border-slate-700 bg-slate-800/30 hover:bg-slate-800 hover:border-indigo-500/50 text-slate-200 transition-all flex items-center gap-3 group"
                        >
                          <div className="w-4 h-4 rounded-full border border-slate-500 group-hover:border-indigo-500 flex items-center justify-center">
                            <div className="w-2 h-2 rounded-full bg-indigo-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                          </div>
                          {opt.label}
                        </button>
                      ))}
                    </div>
                  </div>
                ) : (
                  <div className="text-center">
                    <div className="mb-6 relative w-32 h-32 mx-auto">
                        <svg className="w-full h-full transform -rotate-90">
                            <circle cx="64" cy="64" r="60" stroke="#1e293b" strokeWidth="8" fill="transparent" />
                            <circle cx="64" cy="64" r="60" stroke="#6366f1" strokeWidth="8" fill="transparent" strokeDasharray={377} strokeDashoffset={377 - (377 * (calculateScore().totalScore / calculateScore().maxScore))} className="transition-all duration-1000 ease-out" />
                        </svg>
                        <div className="absolute inset-0 flex flex-col items-center justify-center">
                            <span className="text-3xl font-bold text-white">{calculateScore().totalScore}</span>
                            <span className="text-xs text-slate-500">out of {calculateScore().maxScore}</span>
                        </div>
                    </div>
                    
                    <h3 className={`text-xl font-bold mb-2 ${calculateScore().colorClass}`}>
                      {calculateScore().level}
                    </h3>
                    <p className="text-slate-400 text-sm mb-6 leading-relaxed">
                      {calculateScore().description}
                    </p>

                    <form onSubmit={handleSubmit} className="space-y-3 text-left">
                      <input 
                        type="text" 
                        placeholder="Your name" 
                        required
                        className="w-full bg-[#08080f] border border-slate-700 rounded-lg p-3 text-white focus:outline-none focus:border-indigo-500"
                        onChange={e => setLeadDetails({...leadDetails, name: e.target.value})}
                      />
                      <input 
                        type="tel" 
                        placeholder="WhatsApp number (e.g. 9780267246)" 
                        required
                        className="w-full bg-[#08080f] border border-slate-700 rounded-lg p-3 text-white focus:outline-none focus:border-indigo-500"
                        onChange={e => setLeadDetails({...leadDetails, phone: e.target.value})}
                      />
                      <select 
                        required
                        className="w-full bg-[#08080f] border border-slate-700 rounded-lg p-3 text-white focus:outline-none focus:border-indigo-500 appearance-none"
                        onChange={e => setLeadDetails({...leadDetails, industry: e.target.value})}
                        defaultValue=""
                      >
                        <option value="" disabled>Select your industry</option>
                        <option value="Real Estate">Real Estate</option>
                        <option value="Healthcare">Healthcare</option>
                        <option value="Education">Education</option>
                        <option value="Retail">Retail</option>
                        <option value="Services">Services</option>
                        <option value="Other">Other</option>
                      </select>
                      
                      <button 
                        type="submit"
                        className="w-full bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-400 hover:to-teal-400 text-white font-bold py-3 rounded-lg shadow-lg hover:shadow-emerald-500/20 transition-all mt-2"
                      >
                        📩 Get My Full Report on WhatsApp
                      </button>
                      <p className="text-center text-xs text-slate-500 mt-2">
                        We'll send your personalized AI audit report on WhatsApp. No spam, ever.
                      </p>
                    </form>
                  </div>
                )}
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
