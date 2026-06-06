"use client";

import Image from "next/image";
import { Reveal } from "@/components/animations/reveal";

const highlights = [
  {
    title: "Expedition Vans",
    description: "Travel across Indonesia in custom expedition vehicles.",
    image: "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?w=800&q=80",
  },
  {
    title: "Island Hopping",
    description: "Discover places most travellers never reach.",
    image: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800&q=80",
  },
  {
    title: "Underwater Worlds",
    description: "Explore world-class dive locations.",
    image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=800&q=80",
  },
  {
    title: "Off-Grid Experiences",
    description: "Camp under the stars.",
    image: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=800&q=80",
  },
  {
    title: "Volcanoes & Waterfalls",
    description: "See Indonesia beyond the guidebook.",
    image: "https://images.unsplash.com/photo-1518495973542-4542c06a5843?w=800&q=80",
  },
  {
    title: "Small Groups",
    description: "Maximum 8 explorers.",
    image: "https://images.unsplash.com/photo-1527631746619-b7cc4e795407?w=800&q=80",
  },
];

export function AdventureHighlightsSection() {
  return (
    <section id="highlights" className="section-padding bg-volcanic">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <div className="text-center mb-20 max-w-2xl mx-auto">
            <p className="text-sunset text-sm tracking-[0.3em] uppercase mb-4">
              Adventure Highlights
            </p>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-off-white">
              The Journey Is The Destination
            </h2>
          </div>
        </Reveal>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {highlights.map((item, i) => (
            <Reveal key={item.title} delay={i * 0.08}>
              <div className="group relative aspect-[4/5] rounded-sm overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-volcanic via-volcanic/30 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-8">
                  <h3 className="font-display text-2xl font-bold text-off-white mb-2">
                    {item.title}
                  </h3>
                  <p className="text-off-white/65 text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
