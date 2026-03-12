
import { useEffect, useState } from 'react';
import { Zap } from 'lucide-react';

export default function StickyBanner() {
  const [isVisible, setIsVisible] = useState(true);

  return (
    <div 
      className={`relative w-full z-[100] bg-gradient-to-r from-purple-600 via-purple-500 to-pink-500 text-white text-center py-2 px-4 text-sm font-medium transition-all duration-300 ${isVisible ? 'translate-y-0 h-auto' : '-translate-y-full h-0 overflow-hidden'}`}
    >
      <div className="container mx-auto flex items-center justify-center gap-2">
        <Zap className="w-4 h-4 fill-yellow-300 text-yellow-300 animate-pulse" />
        <span>Free Voice AI Pilot — hear your AI answer business calls.</span>
        <a href="#offer" className="underline underline-offset-2 hover:text-white/90 font-bold">
          Claim Your Pilot →
        </a>
      </div>
    </div>
  );
}

