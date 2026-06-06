"use client";

import {
  Truck,
  Users,
  MapPin,
  Compass,
  UserCheck,
  Globe,
} from "lucide-react";
import { Reveal } from "@/components/animations/reveal";
import { AnimatedCounter } from "@/components/animations/animated-counter";

const features = [
  {
    icon: Truck,
    title: "Mobile Expeditions",
    description: "Travel by custom expedition vehicle — the journey is part of the adventure.",
  },
  {
    icon: Users,
    title: "Small Groups",
    description: "Maximum 8 explorers. Intimate, personal, unforgettable.",
  },
  {
    icon: MapPin,
    title: "Off The Beaten Path",
    description: "Routes and destinations most travellers never reach.",
  },
  {
    icon: Compass,
    title: "Built For Adventurers",
    description: "Designed by explorers who know Indonesia inside out.",
  },
  {
    icon: UserCheck,
    title: "Fully Organised",
    description: "Transport, routes, guides — you simply arrive and explore.",
  },
  {
    icon: Globe,
    title: "Real Indonesia",
    description: "Culture, wilderness, islands and experiences beyond the guidebook.",
  },
];

export function WhyChooseUsSection() {
  return (
    <section id="why-us" className="section-padding bg-ocean/20 relative">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <div className="text-center mb-20 max-w-2xl mx-auto">
            <p className="text-sunset text-sm tracking-[0.3em] uppercase mb-4">
              Why Travel With Us
            </p>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-off-white">
              Adventure, Not Tourism
            </h2>
          </div>
        </Reveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-24">
          {features.map((feature, i) => (
            <Reveal key={feature.title} delay={i * 0.08}>
              <div className="group p-8 rounded-sm border border-border/50 hover:border-sunset/30 transition-all duration-500 h-full">
                <feature.icon
                  className="text-sunset mb-5 group-hover:scale-110 transition-transform duration-300"
                  size={28}
                  strokeWidth={1.5}
                />
                <h3 className="font-display text-xl font-semibold text-off-white mb-3">
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
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
            {[
              { value: 17000, suffix: "+", label: "Islands" },
              { value: 8, suffix: "", label: "Max Explorers" },
              { value: 100, suffix: "+", label: "Hidden Routes" },
              { value: 10, suffix: " Days", label: "Per Expedition" },
            ].map((stat) => (
              <div key={stat.label}>
                <p className="font-display text-4xl md:text-5xl font-bold text-sunset">
                  <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                </p>
                <p className="mt-3 text-xs tracking-[0.25em] uppercase text-muted">
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
