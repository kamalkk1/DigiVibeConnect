import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Briefcase, HeartPulse, Dumbbell, Utensils, Home, Users, GraduationCap, Music } from "lucide-react";
import retail1 from "../../../attached_assets/retail-1.jpg";
import retail2 from "../../../attached_assets/retail-2.jpg";
import health1 from "../../../attached_assets/healthCare-1.jpg";
import health2 from "../../../attached_assets/healthCare-2.jpg";
import fitness1 from "../../../attached_assets/fitness-1.jpg";
import fitness2 from "../../../attached_assets/fitness-2.jpg";
import food1 from "../../../attached_assets/food-delivery-1.jpg";
import food2 from "../../../attached_assets/food-delivery-3.jpg";
import real1 from "../../../attached_assets/realestate-1.jpg";
import real2 from "../../../attached_assets/realestate-2.jpg";
import social1 from "../../../attached_assets/socialnetworking-1.jpg";
import social2 from "../../../attached_assets/socialnetworking-2.jpg";
import edu1 from "../../../attached_assets/education-1.jpg";
import edu2 from "../../../attached_assets/education-2.jpg";
import ent1 from "../../../attached_assets/entertainment-2.jpg";
import ent2 from "../../../attached_assets/entertainment-3.jpg";

const industries = [
  {
    id: "retail",
    name: "Retails Industry",
    icon: <Briefcase className="w-5 h-5" />,
    title: "Retail Solutions",
    description:
      "Smart POS, inventory management, and e-commerce solutions that accelerate digital transformation in retail.",
    features: ["POS Systems", "E-commerce", "Customer Loyalty", "Analytics"],
    images: [retail1, retail2],
  },
  {
    id: "healthcare",
    name: "Health Care",
    icon: <HeartPulse className="w-5 h-5" />,
    title: "Healthcare Solutions",
    description:
      "Empowering hospitals and clinics with digital transformation for patient care and operations.",
    features: ["Telemedicine", "Patient Portals", "Admin Dashboard", "Billing"],
    images: [health1, health2],
  },
  {
    id: "fitness",
    name: "Fitness",
    icon: <Dumbbell className="w-5 h-5" />,
    title: "Fitness Apps",
    description:
      "Custom fitness and wellness solutions for gyms, trainers, and enthusiasts.",
    features: ["Workout Plans", "Nutrition Tracking", "Progress Charts"],
    images: [fitness1, fitness2],
  },
  {
    id: "food",
    name: "Food Delivery",
    icon: <Utensils className="w-5 h-5" />,
    title: "Food Delivery",
    description:
      "Smart workflows for restaurants and delivery startups to streamline operations.",
    features: ["Customer App", "Delivery Tracking", "Restaurant Dashboard"],
    images: [food1, food2],
  },
  {
    id: "realestate",
    name: "Real Estate",
    icon: <Home className="w-5 h-5" />,
    title: "Real Estate",
    description:
      "Property listing portals and CRM for real estate businesses to accelerate sales.",
    features: ["Property Listing", "Agent Dashboard", "Analytics"],
    images: [real1, real2],
  },
  {
    id: "social",
    name: "Social Networking",
    icon: <Users className="w-5 h-5" />,
    title: "Social Networking",
    description:
      "Modern social apps for community building, content sharing, and engagement.",
    features: ["Profiles", "Messaging", "Feeds"],
    images: [social1, social2],
  },
  {
    id: "education",
    name: "Education",
    icon: <GraduationCap className="w-5 h-5" />,
    title: "Education",
    description:
      "Learning management systems and e-learning apps tailored for schools and institutions.",
    features: ["Online Classes", "Assignments", "Progress Tracking"],
    images: [edu1, edu2],
  },
  {
    id: "entertainment",
    name: "Entertainment",
    icon: <Music className="w-5 h-5" />,
    title: "Entertainment",
    description:
      "Streaming and interactive apps that bring immersive entertainment experiences.",
    features: ["Streaming", "Subscriptions", "Recommendations"],
    images: [ent1, ent2],
  },
];

export default function IndustriesSection() {
  const [active, setActive] = useState("food");

  const activeIndustry = industries.find((ind) => ind.id === active)!;

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-3 gap-12">
        {/* Left Sidebar */}
        <div className="space-y-3">
          {industries.map((industry) => (
            <button
              key={industry.id}
              onClick={() => setActive(industry.id)}
              className={`w-full flex items-center justify-between px-4 py-3 rounded-xl text-left transition-all ${
                active === industry.id
                  ? "bg-primary text-white shadow-md"
                  : "bg-muted hover:bg-muted/80 text-foreground"
              }`}
            >
              <span className="flex items-center gap-2 font-medium">
                {industry.icon}
                {industry.name}
              </span>
              <span>→</span>
            </button>
          ))}
        </div>

        {/* Right Content */}
        <div className="lg:col-span-2">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndustry.id}
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -40 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
              className="space-y-6"
            >
              <h3 className="text-3xl font-bold">{activeIndustry.title}</h3>
              <p className="text-muted-foreground">
                {activeIndustry.description}
              </p>

              {/* Features */}
              <div className="flex flex-wrap gap-3">
                {activeIndustry.features.map((feat) => (
                  <span
                    key={feat}
                    className="px-4 py-2 bg-muted rounded-full text-sm"
                  >
                    {feat}
                  </span>
                ))}
              </div>

              {/* Images */}
              <div className="grid sm:grid-cols-2 gap-6">
                {activeIndustry.images.map((img, i) => (
                  <motion.img
                    key={i}
                    src={img}
                    alt={activeIndustry.title}
                    className="rounded-xl shadow-md"
                    initial={{ scale: 0.9, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: i * 0.2 }}
                  />
                ))}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
