"use client";

import {
  Truck,
  Waves,
  Shield,
  Bed,
  Tent,
  Ship,
  Mountain,
  Heart,
  Headphones,
  Camera,
} from "lucide-react";
import { Reveal } from "@/components/animations/reveal";

const included = [
  { icon: Truck, label: "Expedition Transport" },
  { icon: Waves, label: "Dive Equipment" },
  { icon: Shield, label: "Professional Guides" },
  { icon: Bed, label: "Accommodation" },
  { icon: Tent, label: "Camping" },
  { icon: Ship, label: "Ferry Transfers" },
  { icon: Mountain, label: "Adventure Activities" },
  { icon: Heart, label: "Local Experiences" },
  { icon: Headphones, label: "Support Team" },
  { icon: Camera, label: "Memories For Life" },
];

export function WhatsIncludedSection() {
  return (
    <section className="section-padding bg-navy">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <div className="text-center mb-16">
            <p className="text-sunset text-sm tracking-[0.3em] uppercase mb-4">
              What&apos;s Included
            </p>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-off-white">
              Everything You Need
            </h2>
            <p className="mt-4 text-off-white/60 max-w-xl mx-auto">
              Show up ready for adventure. We handle every detail of your expedition.
            </p>
          </div>
        </Reveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {included.map((item, i) => (
            <Reveal key={item.label} delay={i * 0.06}>
              <div className="flex items-center gap-4 p-5 rounded-sm border border-border bg-card/50 hover:border-sunset/40 hover:bg-card transition-all duration-300">
                <div className="shrink-0 w-10 h-10 rounded-sm bg-sunset/10 flex items-center justify-center">
                  <item.icon className="text-sunset" size={20} strokeWidth={1.5} />
                </div>
                <span className="text-sm font-medium text-off-white/90">
                  {item.label}
                </span>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
