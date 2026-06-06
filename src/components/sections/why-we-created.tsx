"use client";

import { Reveal } from "@/components/animations/reveal";
import { CompassDecoration } from "@/components/animations/compass-decoration";

export function WhyWeCreatedSection() {
  return (
    <section className="relative min-h-[70vh] flex items-center overflow-hidden bg-volcanic">
      <div className="absolute inset-0 bg-gradient-to-br from-volcanic via-navy to-ocean opacity-90" />
      <CompassDecoration className="absolute left-10 bottom-10 opacity-10" size={400} />
      <CompassDecoration className="absolute right-10 top-10 opacity-10" size={250} />

      <div className="section-padding relative z-10 mx-auto max-w-4xl text-center">
        <Reveal>
          <h2 className="font-display text-4xl md:text-6xl lg:text-7xl font-bold text-off-white leading-[1.1]">
            Indonesia Deserves
            <br />
            <span className="gradient-text">More Than That.</span>
          </h2>
        </Reveal>

        <Reveal delay={0.2}>
          <div className="mt-12 space-y-6 text-lg md:text-xl text-off-white/70 leading-relaxed max-w-2xl mx-auto">
            <p>Too many trips follow the same formula.</p>
            <p className="font-display text-2xl md:text-3xl text-off-white/90 italic space-y-1">
              <span className="block">Fly in.</span>
              <span className="block">Stay in a resort.</span>
              <span className="block">Visit the same attractions.</span>
              <span className="block">Fly home.</span>
            </p>
            <p className="text-off-white font-medium text-xl md:text-2xl pt-4">
              Indonesia deserves more than that.
            </p>
            <p>
              Indo Explorers was built for people who want genuine adventure,
              meaningful experiences and the freedom to discover places most
              tourists never see.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
