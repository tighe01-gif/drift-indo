"use client";

import {
  BookOpen,
  Users,
  MapPin,
  ClipboardCheck,
  Compass,
  UserCheck,
  Star,
  Globe,
} from "lucide-react";
import { Reveal } from "@/components/animations/reveal";
import { AnimatedCounter } from "@/components/animations/animated-counter";

const features = [
  {
    icon: BookOpen,
    title: "Dive Beyond The Guidebooks",
    description: "Access remote sites that don't appear on any tourist map.",
  },
  {
    icon: Users,
    title: "Small Group Adventures",
    description: "Intimate expeditions where every explorer matters.",
  },
  {
    icon: MapPin,
    title: "Authentic Indonesia",
    description: "Real villages, real culture, real connections.",
  },
  {
    icon: ClipboardCheck,
    title: "Fully Organised",
    description: "Transport, gear, guides — everything handled.",
  },
  {
    icon: Compass,
    title: "Built For Adventurers",
    description: "Designed by explorers, for explorers.",
  },
  {
    icon: UserCheck,
    title: "Maximum 8 Guests",
    description: "Exclusive groups. Personal attention guaranteed.",
  },
  {
    icon: Star,
    title: "Premium Experience",
    description: "Quality equipment, expert guides, curated routes.",
  },
  {
    icon: Globe,
    title: "Real Exploration",
    description: "Go where tourists never venture.",
  },
];

export function WhyChooseUsSection() {
  return (
    <section className="section-padding bg-ocean/30 relative">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <div className="text-center mb-16">
            <p className="text-sunset text-sm tracking-[0.3em] uppercase mb-4">
              Why Choose Us
            </p>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-off-white">
              Built Different
            </h2>
          </div>
        </Reveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {features.map((feature, i) => (
            <Reveal key={feature.title} delay={i * 0.08}>
              <div className="group p-6 rounded-sm card-glass hover:border-sunset/30 transition-all duration-500 h-full">
                <feature.icon
                  className="text-sunset mb-4 group-hover:scale-110 transition-transform duration-300"
                  size={32}
                  strokeWidth={1.5}
                />
                <h3 className="font-display text-lg font-semibold text-off-white mb-2">
                  {feature.title}
                </h3>
                <p className="text-off-white/60 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { value: 17000, suffix: "+", label: "Islands to Explore" },
              { value: 8, suffix: "", label: "Max Group Size" },
              { value: 100, suffix: "+", label: "Dive Sites" },
              { value: 10, suffix: " Days", label: "Per Expedition" },
            ].map((stat) => (
              <div key={stat.label}>
                <p className="font-display text-4xl md:text-5xl font-bold text-sunset">
                  <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                </p>
                <p className="mt-2 text-sm tracking-widest uppercase text-muted">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
