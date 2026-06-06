"use client";

import Image from "next/image";
import { Reveal } from "@/components/animations/reveal";
import { CompassDecoration } from "@/components/animations/compass-decoration";

export function AboutSection() {
  return (
    <section id="about" className="section-padding relative overflow-hidden bg-navy">
      <CompassDecoration className="absolute -right-20 top-20" size={300} />

      <div className="mx-auto max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <Reveal direction="left">
            <div className="relative aspect-[4/5] rounded-sm overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?w=800&q=80"
                alt="Adventure van camp overlooking the ocean at sunset"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy/60 to-transparent" />
            </div>
          </Reveal>

          <Reveal direction="right" delay={0.2}>
            <div>
              <p className="text-sunset text-sm tracking-[0.3em] uppercase mb-4">
                What Is Indo Explorers
              </p>
              <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-off-white leading-tight">
                Travel Further.
                <br />
                <span className="gradient-text">Dive Deeper.</span>
              </h2>
              <div className="mt-8 space-y-6 text-off-white/70 text-lg leading-relaxed">
                <p>
                  Indo Explorers is Indonesia&apos;s first mobile scuba diving and
                  adventure expedition company.
                </p>
                <p>
                  Instead of staying in one destination, our small groups travel
                  together across multiple islands and regions combining diving,
                  adventure travel, camping, local culture and outdoor experiences
                  into one incredible journey.
                </p>
                <p className="font-display text-2xl text-off-white italic">
                  You simply arrive. We take care of the rest.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
