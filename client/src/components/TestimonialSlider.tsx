

import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";

const testimonials = [
  {
    name: "Riya Singh",
    role: "Happy Client",
    text: "It is a pleasure to give genuine feedback for Digitalphy on their continued service. Team is always accessible & exceptional on all counts. Thank you so much for your extended support always.",
    avatar: "https://i.pravatar.cc/100?img=5",
    rating: 5,
  },
  {
    name: "Yerramreddy Vasu",
    role: "Happy Client",
    text: "We had a website with Digitalphy media for 3 years now and it has been the most effective thing we have done for our business. The whole process has been very rewarding.",
    avatar: "https://i.pravatar.cc/100?img=6",
    rating: 5,
  },
  {
    name: "ARk Advanced Clinic",
    role: "Happy Client",
    text: "It's hard to find best and genuine digital marketing agency. After meeting you guys we are so happy to associate with you. Getting more leads than expected.",
    avatar: "https://i.pravatar.cc/100?img=7",
    rating: 5,
  },
  {
    name: "Sneha Kapoor",
    role: "Happy Client",
    text: "Digitalphy has transformed our online presence with their brilliant strategies. Their support team is top-notch!",
    avatar: "https://i.pravatar.cc/100?img=8",
    rating: 5,
  },
  {
    name: "Rahul Mehta",
    role: "Happy Client",
    text: "The best decision we made was to choose Digitalphy. Our leads and conversions doubled within months.",
    avatar: "https://i.pravatar.cc/100?img=9",
    rating: 5,
  },
];

export default function TestimonialSlider() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const visibleCards = 3; // Show 3 cards at a time

  // Auto-slide
  useEffect(() => {
    if (!paused) {
      intervalRef.current = setInterval(() => {
        setIndex((prev) => (prev + 1) % testimonials.length);
      }, 4000);
    }
    return () => clearInterval(intervalRef.current!);
  }, [paused]);

  const prevSlide = () => setIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  const nextSlide = () => setIndex((prev) => (prev + 1) % testimonials.length);

  // Get visible testimonials (looping)
  const getVisibleTestimonials = () => {
    return Array.from({ length: visibleCards }, (_, i) => {
      return testimonials[(index + i) % testimonials.length];
    });
  };

  return (
    <section className="py-20 bg-background relative">
      <div className="text-center mb-12">
        <p className="text-primary font-semibold">Review/Feedback</p>
        <h2 className="text-3xl md:text-4xl font-bold">Happy Clients With Digital Transformation</h2>
      </div>

      <div
        className="relative max-w-6xl mx-auto"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
        <motion.div
          key={index}
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -50 }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {getVisibleTestimonials().map((t, i) => (
            <div
              key={i}
              className="bg-card rounded-2xl shadow-md p-6 flex flex-col items-start"
            >
              <div className="flex items-center gap-4 mb-4">
                <img
                  src={t.avatar}
                  alt={t.name}
                  className="w-14 h-14 rounded-full object-cover"
                />
                <div>
                  <h3 className="font-semibold text-lg">{t.name}</h3>
                  <p className="text-sm text-muted-foreground">{t.role}</p>
                </div>
              </div>
              <p className="text-foreground mb-4 text-sm">"{t.text}"</p>
              <div className="flex text-yellow-500 mt-auto">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-current" />
                ))}
              </div>
            </div>
          ))}
        </motion.div>

        {/* Controls */}
        <button
          onClick={prevSlide}
          className="absolute left-0 top-1/2 -translate-y-1/2 bg-white rounded-full shadow-md p-2 hover:bg-gray-100"
        >
          <ChevronLeft className="w-6 h-6 text-gray-700" />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-0 top-1/2 -translate-y-1/2 bg-white rounded-full shadow-md p-2 hover:bg-gray-100"
        >
          <ChevronRight className="w-6 h-6 text-gray-700" />
        </button>
      </div>
    </section>
  );
}
