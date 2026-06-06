"use client";

import { Check } from "lucide-react";
import { Reveal } from "@/components/animations/reveal";
import { Button } from "@/components/ui/button";
import { CompassDecoration } from "@/components/animations/compass-decoration";

const benefits = [
  "Early access to first expeditions",
  "Launch dates before anyone else",
  "Founding member pricing",
  "Limited expedition places",
];

export function ComingSoonSection() {
  return (
    <section className="relative min-h-[60vh] flex items-center overflow-hidden bg-navy">
      <div className="absolute inset-0 bg-gradient-to-br from-navy via-ocean/40 to-volcanic" />
      <CompassDecoration className="absolute right-0 top-1/2 -translate-y-1/2 opacity-10" size={400} />

      <div className="section-padding relative z-10 mx-auto max-w-4xl w-full text-center">
        <Reveal>
          <p className="text-sunset text-sm tracking-[0.4em] uppercase mb-6">
            Coming Soon
          </p>
          <h2 className="font-display text-4xl md:text-6xl lg:text-7xl font-bold text-off-white leading-[1.05]">
            Launching Our First
            <br />
            <span className="gradient-text">Expeditions</span>
          </h2>
        </Reveal>

        <Reveal delay={0.2}>
          <p className="mt-8 text-lg md:text-xl text-off-white/65 max-w-xl mx-auto">
            Be among the first to drift across Indonesia. Places are limited.
            Founding members get priority access.
          </p>
        </Reveal>

        <Reveal delay={0.3}>
          <ul className="mt-12 grid sm:grid-cols-2 gap-4 max-w-lg mx-auto text-left">
            {benefits.map((benefit) => (
              <li key={benefit} className="flex items-center gap-3 text-off-white/80">
                <span className="shrink-0 w-6 h-6 rounded-full bg-sunset/20 flex items-center justify-center">
                  <Check className="text-sunset" size={14} />
                </span>
                <span className="text-sm tracking-wide">{benefit}</span>
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal delay={0.4}>
          <Button asChild size="lg" className="mt-12">
            <a href="#waitlist">Join The Waitlist</a>
          </Button>
        </Reveal>
      </div>
    </section>
  );
}
