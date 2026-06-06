"use client";

import Image from "next/image";
import { Reveal } from "@/components/animations/reveal";

export function AboutSection() {
  return (
    <section id="about" className="section-padding relative overflow-hidden bg-navy">
      <div className="mx-auto max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          <Reveal direction="left">
            <div className="relative aspect-[4/5] rounded-sm overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?w=800&q=80"
                alt="Expedition van camp overlooking the ocean at sunset"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy/50 to-transparent" />
            </div>
          </Reveal>

          <Reveal direction="right" delay={0.2}>
            <div className="lg:py-8">
              <p className="text-sunset text-sm tracking-[0.3em] uppercase mb-6">
                What Is Drift Indo
              </p>
              <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-off-white leading-[1.05]">
                We Move.
                <br />
                <span className="gradient-text">We Explore.</span>
              </h2>
              <div className="mt-10 space-y-6 text-off-white/70 text-lg leading-relaxed max-w-lg">
                <p>
                  Drift Indo is Indonesia&apos;s first mobile adventure expedition company.
                </p>
                <p>
                  Our small groups travel together across some of the most incredible
                  destinations in Indonesia. Using expedition vehicles, local ferries and
                  carefully planned routes, we combine adventure travel, diving, camping,
                  culture and exploration into one unforgettable journey.
                </p>
                <p className="font-display text-2xl text-off-white italic pt-2">
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
