"use client";

import Image from "next/image";
import { Reveal } from "@/components/animations/reveal";
import { RouteGraphic } from "@/components/animations/route-graphic";

const timeline = [
  {
    day: "DAY 1",
    title: "Arrival & Welcome",
    description: "Land in paradise. Meet your expedition crew and fellow explorers.",
    image: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=600&q=80",
  },
  {
    day: "DAY 2-3",
    title: "Dive & Explore",
    description: "Discover pristine reefs and underwater worlds few have seen.",
    image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=600&q=80",
  },
  {
    day: "DAY 4-6",
    title: "Island Hopping",
    description: "Cross islands by ferry and road. Every horizon reveals something new.",
    image: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=600&q=80",
  },
  {
    day: "DAY 7-9",
    title: "Adventure Mode",
    description: "Volcanoes, waterfalls, jungle trails and campfire nights under the stars.",
    image: "https://images.unsplash.com/photo-1518495973542-4542c06a5843?w=600&q=80",
  },
  {
    day: "DAY 10",
    title: "Return & Farewell",
    description: "Depart with stories, friendships and memories that last a lifetime.",
    image: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=600&q=80",
  },
];

export function ExperienceSection() {
  return (
    <section id="experience" className="section-padding bg-volcanic relative overflow-hidden">
      <RouteGraphic className="absolute top-10 left-0 w-full opacity-30" />

      <div className="mx-auto max-w-7xl relative z-10">
        <Reveal>
          <div className="text-center mb-16">
            <p className="text-sunset text-sm tracking-[0.3em] uppercase mb-4">
              The Experience
            </p>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-off-white">
              Your Expedition Timeline
            </h2>
          </div>
        </Reveal>

        <div className="flex gap-6 overflow-x-auto pb-6 snap-x snap-mandatory scrollbar-hide -mx-6 px-6 md:mx-0 md:px-0">
          {timeline.map((item, i) => (
            <Reveal key={item.day} delay={i * 0.1} className="snap-center shrink-0">
              <div className="group relative w-[300px] md:w-[360px] h-[480px] rounded-sm overflow-hidden card-glass">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  sizes="360px"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-volcanic via-volcanic/50 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <p className="text-sunset text-xs tracking-[0.3em] uppercase mb-2">
                    {item.day}
                  </p>
                  <h3 className="font-display text-2xl font-bold text-off-white mb-2">
                    {item.title}
                  </h3>
                  <p className="text-off-white/60 text-sm leading-relaxed">
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
