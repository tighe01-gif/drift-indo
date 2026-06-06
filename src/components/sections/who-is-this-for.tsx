"use client";

import Image from "next/image";
import { Reveal } from "@/components/animations/reveal";

const audiences = [
  {
    title: "Certified Divers",
    image: "https://images.unsplash.com/photo-1682687220063-4742bd7fd538?w=400&q=80",
  },
  {
    title: "Adventure Travellers",
    image: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=400&q=80",
  },
  {
    title: "Solo Travellers",
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&q=80",
  },
  {
    title: "Couples",
    image: "https://images.unsplash.com/photo-1527631746619-b7cc4e795407?w=400&q=80",
  },
  {
    title: "Digital Nomads",
    image: "https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?w=400&q=80",
  },
  {
    title: "Backpackers",
    image: "https://images.unsplash.com/photo-1476514525535-07fa3f4b5f9f?w=400&q=80",
  },
  {
    title: "Explorers",
    image: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=400&q=80",
  },
];

export function WhoIsThisForSection() {
  return (
    <section className="section-padding bg-volcanic">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <div className="text-center mb-16">
            <p className="text-sunset text-sm tracking-[0.3em] uppercase mb-4">
              Who Is This For
            </p>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-off-white">
              Your Tribe Awaits
            </h2>
          </div>
        </Reveal>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {audiences.map((audience, i) => (
            <Reveal key={audience.title} delay={i * 0.08}>
              <div className="group relative aspect-square rounded-sm overflow-hidden cursor-default">
                <Image
                  src={audience.image}
                  alt={audience.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  sizes="(max-width: 768px) 50vw, 25vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-volcanic via-volcanic/40 to-transparent group-hover:from-navy/90 transition-all duration-500" />
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <h3 className="font-display text-lg md:text-xl font-semibold text-off-white">
                    {audience.title}
                  </h3>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
