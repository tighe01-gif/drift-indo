"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle, Loader2 } from "lucide-react";
import { Reveal } from "@/components/animations/reveal";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const expeditions = [
  "Bali → Lombok → Sumbawa",
  "Flores → Komodo Explorer",
  "Sulawesi Discovery Route",
  "Raja Ampat Explorer",
  "Not sure yet",
];

export function WaitlistSection() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [preferredExpedition, setPreferredExpedition] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");

    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get("name"),
      email: formData.get("email"),
      country: formData.get("country"),
      preferredExpedition,
      message: formData.get("message"),
    };

    try {
      const res = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!res.ok) throw new Error("Submission failed");
      setStatus("success");
      setPreferredExpedition("");
      (e.target as HTMLFormElement).reset();
    } catch {
      setStatus("error");
    }
  }

  return (
    <section id="waitlist" className="section-padding bg-navy relative">
      <div className="mx-auto max-w-2xl">
        <Reveal>
          <div className="text-center mb-14">
            <p className="text-sunset text-sm tracking-[0.3em] uppercase mb-4">
              Join The Waitlist
            </p>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-off-white">
              Ready To Drift?
            </h2>
            <p className="mt-6 text-off-white/60 text-lg">
              Be first to know when expeditions launch. Limited places available.
            </p>
          </div>
        </Reveal>

        <Reveal delay={0.2}>
          <AnimatePresence mode="wait">
            {status === "success" ? (
              <motion.div
                key="success"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-20 border border-border rounded-sm"
              >
                <CheckCircle className="mx-auto text-sunset mb-5" size={48} />
                <h3 className="font-display text-2xl font-bold text-off-white mb-3">
                  You&apos;re On The List
                </h3>
                <p className="text-off-white/60 max-w-md mx-auto leading-relaxed">
                  Welcome to Drift Indo. We&apos;ll be in touch with launch dates,
                  early access and founding member details.
                </p>
                <Button
                  variant="outline"
                  className="mt-8"
                  onClick={() => setStatus("idle")}
                >
                  Join Again
                </Button>
              </motion.div>
            ) : (
              <motion.form
                key="form"
                onSubmit={handleSubmit}
                className="space-y-6"
              >
                <div className="space-y-2">
                  <Label htmlFor="name">Name</Label>
                  <Input
                    id="name"
                    name="name"
                    required
                    placeholder="Your name"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    required
                    placeholder="you@example.com"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="country">Country</Label>
                  <Input
                    id="country"
                    name="country"
                    required
                    placeholder="Where are you based?"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="preferredExpedition">Preferred Expedition</Label>
                  <Select
                    value={preferredExpedition}
                    onValueChange={setPreferredExpedition}
                  >
                    <SelectTrigger id="preferredExpedition">
                      <SelectValue placeholder="Select expedition (optional)" />
                    </SelectTrigger>
                    <SelectContent>
                      {expeditions.map((exp) => (
                        <SelectItem key={exp} value={exp}>
                          {exp}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="Tell us about your adventure..."
                  />
                </div>

                {status === "error" && (
                  <p className="text-red-400 text-sm">
                    Something went wrong. Please try again.
                  </p>
                )}

                <Button
                  type="submit"
                  size="lg"
                  className="w-full"
                  disabled={status === "loading"}
                >
                  {status === "loading" ? (
                    <>
                      <Loader2 className="animate-spin" size={18} />
                      Joining...
                    </>
                  ) : (
                    "Join The Waitlist"
                  )}
                </Button>
              </motion.form>
            )}
          </AnimatePresence>
        </Reveal>
      </div>
    </section>
  );
}
