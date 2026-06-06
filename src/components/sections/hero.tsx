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
          src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1920&q=80"
          alt="Expedition vehicles driving through Indonesian coastal mountain roads"
          fill
          priority
          className="object-cover scale-105"
          sizes="100vw"
        />
        <div className="absolute inset-0 cinematic-overlay" />
        <div className="absolute inset-0 bg-gradient-to-r from-navy/80 via-transparent to-navy/40" />
      </div>

      <div className="relative z-10 mx-auto max-w-5xl px-6 md:px-12 text-center pt-20">
        <Reveal delay={0.2}>
          <p className="text-sunset text-sm md:text-base tracking-[0.35em] uppercase mb-6">
            Indonesia&apos;s First Mobile Scuba Diving &amp; Adventure Expedition Company
          </p>
        </Reveal>

        <Reveal delay={0.4}>
          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-[0.95] gradient-text">
            DISCOVER THE REAL INDONESIA
          </h1>
        </Reveal>

        <Reveal delay={0.6}>
          <p className="mt-6 text-xl md:text-2xl text-off-white/80 font-light tracking-wide">
            Scuba Diving. Adventure. Exploration.
          </p>
        </Reveal>

        <Reveal delay={0.8}>
          <div className="mt-8 max-w-2xl mx-auto space-y-4 text-off-white/70 text-base md:text-lg leading-relaxed">
            <p>
              Forget crowded tourist resorts. Join a small group expedition and travel
              across Indonesia discovering hidden dive sites, remote beaches, volcanoes,
              waterfalls, island villages and unforgettable adventures.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm md:text-base text-left max-w-lg mx-auto mt-6">
              {[
                "Travel by expedition vehicle.",
                "Dive incredible locations.",
                "Camp under the stars.",
                "Meet fellow explorers.",
              ].map((item) => (
                <p key={item} className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-sunset shrink-0" />
                  {item}
                </p>
              ))}
            </div>
            <p className="font-display text-xl md:text-2xl text-off-white mt-6 italic">
              This is not a holiday. This is an expedition.
            </p>
          </div>
        </Reveal>

        <Reveal delay={1.0}>
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button asChild size="lg">
              <a href="#enquire">Enquire Now</a>
            </Button>
            <Button asChild variant="outline" size="lg">
              <a href="#enquire">Join Waitlist</a>
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
