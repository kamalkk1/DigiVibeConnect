import React from 'react';
import { gsap } from 'gsap';

interface MenuItemProps {
  link: string;
  heading: string;
  text: string;
  description: string;
  image: string;
}

interface FlowingMenuProps {
  items?: MenuItemProps[];
}

const FlowingMenu: React.FC<FlowingMenuProps> = ({ items = [] }) => {
  return (
    <div className="w-full h-full overflow-hidden">
      <nav className="flex flex-col h-full m-0 p-0 text-nowrap">
        {items.map((item, idx) => (
          <MenuItem key={idx} {...item} />
        ))}
      </nav>
    </div>
  );
};

const MenuItem: React.FC<MenuItemProps> = ({ link, text,description,heading, image }) => {
  const itemRef = React.useRef<HTMLDivElement>(null);
  const marqueeRef = React.useRef<HTMLDivElement>(null);
  const marqueeInnerRef = React.useRef<HTMLDivElement>(null);

  const animationDefaults = { duration: 0.8, ease: 'expo' };

  const findClosestEdge = (mouseX: number, mouseY: number, width: number, height: number): 'top' | 'bottom' => {
    const topEdgeDist = Math.pow(mouseX - width / 2, 2) + Math.pow(mouseY, 2);
    const bottomEdgeDist = Math.pow(mouseX - width / 2, 2) + Math.pow(mouseY - height, 2);
    return topEdgeDist < bottomEdgeDist ? 'top' : 'bottom';
  };

  const handleMouseEnter = (ev: React.MouseEvent<HTMLAnchorElement>) => {
    if (!itemRef.current || !marqueeRef.current || !marqueeInnerRef.current) return;
    const rect = itemRef.current.getBoundingClientRect();
    const edge = findClosestEdge(ev.clientX - rect.left, ev.clientY - rect.top, rect.width, rect.height);

    const tl = gsap.timeline({ defaults: animationDefaults });
    tl.set(marqueeRef.current, { y: edge === 'top' ? '-101%' : '101%' })
      .set(marqueeInnerRef.current, { y: edge === 'top' ? '101%' : '-101%' })
      .to([marqueeRef.current, marqueeInnerRef.current], { y: '0%' });
  };

  const handleMouseLeave = (ev: React.MouseEvent<HTMLAnchorElement>) => {
    if (!itemRef.current || !marqueeRef.current || !marqueeInnerRef.current) return;
    const rect = itemRef.current.getBoundingClientRect();
    const edge = findClosestEdge(ev.clientX - rect.left, ev.clientY - rect.top, rect.width, rect.height);

    const tl = gsap.timeline({ defaults: animationDefaults }) as TimelineMax;
    tl.to(marqueeRef.current, { y: edge === 'top' ? '-101%' : '101%' }).to(marqueeInnerRef.current, {
      y: edge === 'top' ? '101%' : '-101%'
    });
  };

const repeatedMarqueeContent = React.useMemo(() => {
  return Array.from({ length: 1 }).map((_, idx) => (
    <React.Fragment key={idx}>
      <div className="flex items-center justify-center gap-4 p-8 min-w-[600px]">
  {/* Content Section */}
  <div className="flex flex-col justify-center items-center space-y-4 text-center">
    <span className="text-[#060010] font-bold text-2xl font-poppins">
      {heading}
    </span>
    <span className="text-primary/80 uppercase font-medium tracking-wider text-sm">
      {text}
    </span>
   
  </div>

  {/* Image Section */}
  <div 
    className="w-[240px] h-[160px] rounded-2xl bg-cover bg-center shadow-lg transform transition-transform hover:scale-105"
    style={{ 
      backgroundImage: `url(${image})`,
      boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
    }}
  />
</div>
<div> <p className="text-muted-foreground text-base leading-tight max-w-sm line-clamp-2 text-ellipsis">
      {description}
    </p></div>
    </React.Fragment>
  ));
}, [heading, text, description, image]);

   return (
  <div className="flex-1 relative overflow-hidden text-center shadow-[0_-1px_0_0_#fff]" ref={itemRef}>
    <a
      className="flex items-center justify-center h-full relative cursor-pointer uppercase no-underline font-semibold text-white text-[2.5vh] sm:text-[4vh] hover:text-[#060010] focus:text-white focus-visible:text-[#060010]"
      href={link}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {text}
    </a>
    <div
      className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none bg-white/95 backdrop-blur-sm translate-y-[101%]"
      ref={marqueeRef}
    >
      <div 
        className="h-full w-[200%] flex items-center justify-center" 
        ref={marqueeInnerRef}
      >
        <div className="flex items-center  h-full w-full will-change-transform animate-marquee">
          {repeatedMarqueeContent}
        </div>
      </div>
    </div>
  </div>
   );
};

export default FlowingMenu;

// Note: this is also needed
// /** @type {import('tailwindcss').Config} */
// export default {
//   content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
//   theme: {
//     extend: {
//       translate: {
//         '101': '101%',
//       },
//       keyframes: {
//         marquee: {
//           'from': { transform: 'translateX(0%)' },
//           'to': { transform: 'translateX(-50%)' }
//         }
//       },
//       animation: {
//         marquee: 'marquee 15s linear infinite'
//       }
//     }
//   },
//   plugins: [],
// };
