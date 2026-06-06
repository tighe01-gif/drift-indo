"use client";

import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { Reveal } from "@/components/animations/reveal";
import { Button } from "@/components/ui/button";

const expeditions = [
  {
    title: "Bali → Lombok → Sumbawa",
    description: "Volcanic landscapes, world-class diving and hidden surf breaks across three legendary islands.",
    image: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=800&q=80",
    duration: "10 Days",
  },
  {
    title: "Flores → Komodo Explorer",
    description: "Dragons, pink beaches and some of the most biodiverse waters on the planet.",
    image: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800&q=80",
    duration: "12 Days",
  },
  {
    title: "Sulawesi Discovery Route",
    description: "Jungle waterfalls, highland cultures and untouched coral reefs in the heart of the archipelago.",
    image: "https://images.unsplash.com/photo-1518495973542-4542c06a5843?w=800&q=80",
    duration: "14 Days",
  },
  {
    title: "Raja Ampat Explorer",
    description: "The crown jewel of Indonesian diving. Remote islands, crystal waters, absolute wilderness.",
    image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=800&q=80",
    duration: "10 Days",
  },
];

export function ComingExpeditionsSection() {
  return (
    <section id="expeditions" className="section-padding bg-navy relative overflow-hidden">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <div className="text-center mb-16">
            <p className="text-sunset text-sm tracking-[0.3em] uppercase mb-4">
              Coming Expeditions
            </p>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-off-white">
              Choose Your Route
            </h2>
          </div>
        </Reveal>

        <div className="grid md:grid-cols-2 gap-6">
          {expeditions.map((expedition, i) => (
            <Reveal key={expedition.title} delay={i * 0.1}>
              <div className="group relative h-[400px] rounded-sm overflow-hidden card-glass">
                <Image
                  src={expedition.image}
                  alt={expedition.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/60 to-navy/20" />

                <div className="absolute top-4 left-4 flex gap-2">
                  <span className="px-3 py-1 text-xs tracking-widest uppercase bg-sunset/90 text-off-white rounded-sm">
                    Coming Soon
                  </span>
                  <span className="px-3 py-1 text-xs tracking-widest uppercase bg-off-white/10 backdrop-blur-sm text-off-white rounded-sm border border-border">
                    Early Access
                  </span>
                </div>

                <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
                  <p className="text-sunset text-xs tracking-widest uppercase mb-2">
                    {expedition.duration}
                  </p>
                  <h3 className="font-display text-2xl md:text-3xl font-bold text-off-white mb-3">
                    {expedition.title}
                  </h3>
                  <p className="text-off-white/60 text-sm leading-relaxed mb-4 max-w-md">
                    {expedition.description}
                  </p>
                  <Button variant="ghost" size="sm" asChild className="group/btn px-0">
                    <a href="#enquire">
                      Register Interest
                      <ArrowRight
                        size={16}
                        className="ml-1 transition-transform group-hover/btn:translate-x-1"
                      />
                    </a>
                  </Button>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
