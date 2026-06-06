"use client";

import Image from "next/image";
import { Reveal } from "@/components/animations/reveal";
import { RouteGraphic } from "@/components/animations/route-graphic";

const timeline = [
  {
    day: "DAY 1",
    title: "Arrival & Welcome",
    description: "Land in paradise. Meet your crew and fellow explorers.",
    image: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=600&q=80",
  },
  {
    day: "DAY 2-3",
    title: "Hit The Road",
    description: "Drive coastal routes, ferry crossings and hidden beaches off the beaten path.",
    image: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=600&q=80",
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
    description: "Volcanoes, waterfalls, diving, jungle trails and nights under the stars.",
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
    <section id="experience" className="section-padding bg-navy relative overflow-hidden">
      <RouteGraphic className="absolute top-10 left-0 w-full opacity-20" />

      <div className="mx-auto max-w-7xl relative z-10">
        <Reveal>
          <div className="text-center mb-20 max-w-2xl mx-auto">
            <p className="text-sunset text-sm tracking-[0.3em] uppercase mb-4">
              The Expedition Experience
            </p>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-off-white">
              Ten Days. One Epic Route.
            </h2>
          </div>
        </Reveal>

        <div className="flex gap-6 overflow-x-auto pb-6 snap-x snap-mandatory -mx-6 px-6 md:mx-0 md:px-0">
          {timeline.map((item, i) => (
            <Reveal key={item.day} delay={i * 0.1} className="snap-center shrink-0">
              <div className="group relative w-[300px] md:w-[380px] h-[500px] rounded-sm overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  sizes="380px"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-volcanic via-volcanic/40 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-8">
                  <p className="text-sunset text-xs tracking-[0.3em] uppercase mb-3">
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
