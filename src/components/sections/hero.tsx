"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/animations/reveal";

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=1920&q=80"
          alt="Expedition vehicle on a coastal mountain road in Indonesia"
          fill
          priority
          className="object-cover scale-105"
          sizes="100vw"
        />
        <div className="absolute inset-0 cinematic-overlay" />
        <div className="absolute inset-0 bg-gradient-to-r from-navy/85 via-navy/30 to-navy/50" />
      </div>

      <div className="relative z-10 mx-auto max-w-4xl px-6 md:px-12 text-center pt-24 pb-32">
        <Reveal delay={0.2}>
          <p className="text-sunset text-xs md:text-sm tracking-[0.35em] uppercase mb-8">
            Adventure On The Move
          </p>
        </Reveal>

        <Reveal delay={0.4}>
          <h1 className="font-display text-5xl md:text-7xl lg:text-[5.5rem] font-bold tracking-tight leading-[0.95] gradient-text">
            DISCOVER THE REAL INDONESIA
          </h1>
        </Reveal>

        <Reveal delay={0.6}>
          <p className="mt-8 text-xl md:text-2xl text-off-white/85 font-light tracking-wide">
            Adventure. Exploration. Freedom.
          </p>
        </Reveal>

        <Reveal delay={0.8}>
          <div className="mt-10 max-w-xl mx-auto space-y-6 text-off-white/70 text-base md:text-lg leading-relaxed">
            <p>
              Travel across Indonesia by expedition vehicle. Discover hidden islands,
              remote beaches, volcanoes, waterfalls, world-class diving and unforgettable
              experiences.
            </p>
            <p className="text-off-white/90 tracking-wide">
              Small groups. Epic routes. Real adventure.
            </p>
            <p className="font-display text-xl md:text-2xl text-off-white italic pt-2">
              This is not a holiday. This is an expedition.
            </p>
          </div>
        </Reveal>

        <Reveal delay={1.0}>
          <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button asChild size="lg">
              <a href="#waitlist">Join The Waitlist</a>
            </Button>
            <Button asChild variant="outline" size="lg">
              <a href="#waitlist">Enquire Now</a>
            </Button>
          </div>
        </Reveal>
      </div>

      <motion.a
        href="#about"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-off-white/50 hover:text-sunset transition-colors"
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
        aria-label="Scroll to about section"
      >
        <ChevronDown size={32} />
      </motion.a>
    </section>
  );
}
