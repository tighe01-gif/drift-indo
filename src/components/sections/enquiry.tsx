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
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

const expeditions = [
  "Bali → Lombok → Sumbawa",
  "Flores → Komodo Explorer",
  "Sulawesi Discovery Route",
  "Raja Ampat Explorer",
  "Not sure yet",
];

const experienceLevels = [
  "Beginner",
  "Intermediate",
  "Advanced",
  "Expert",
];

export function EnquirySection() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [certifiedDiver, setCertifiedDiver] = useState("yes");
  const [preferredExpedition, setPreferredExpedition] = useState("");
  const [experienceLevel, setExperienceLevel] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");

    const formData = new FormData(e.currentTarget);
    const data = {
      fullName: formData.get("fullName"),
      email: formData.get("email"),
      country: formData.get("country"),
      certifiedDiver,
      preferredExpedition,
      experienceLevel,
      message: formData.get("message"),
    };

    try {
      const res = await fetch("/api/enquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!res.ok) throw new Error("Submission failed");
      setStatus("success");
      (e.target as HTMLFormElement).reset();
    } catch {
      setStatus("error");
    }
  }

  return (
    <section id="enquire" className="section-padding bg-ocean/20 relative">
      <div className="mx-auto max-w-3xl">
        <Reveal>
          <div className="text-center mb-12">
            <p className="text-sunset text-sm tracking-[0.3em] uppercase mb-4">
              Join The Expedition
            </p>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-off-white">
              Ready For Your Next Adventure?
            </h2>
            <p className="mt-4 text-off-white/60">
              Register your interest and be first to know when expeditions launch.
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
                className="text-center py-16 card-glass rounded-sm"
              >
                <CheckCircle className="mx-auto text-sunset mb-4" size={48} />
                <h3 className="font-display text-2xl font-bold text-off-white mb-2">
                  Enquiry Received
                </h3>
                <p className="text-off-white/60 max-w-md mx-auto">
                  Thank you for your interest in Indo Explorers. We&apos;ll be in
                  touch soon with expedition details and early access information.
                </p>
                <Button
                  variant="outline"
                  className="mt-6"
                  onClick={() => setStatus("idle")}
                >
                  Submit Another Enquiry
                </Button>
              </motion.div>
            ) : (
              <motion.form
                key="form"
                onSubmit={handleSubmit}
                className="space-y-6 card-glass rounded-sm p-6 md:p-10"
              >
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="fullName">Full Name</Label>
                    <Input
                      id="fullName"
                      name="fullName"
                      required
                      placeholder="Your full name"
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

                <div className="space-y-3">
                  <Label>Certified Diver?</Label>
                  <RadioGroup
                    value={certifiedDiver}
                    onValueChange={setCertifiedDiver}
                    className="flex gap-6"
                  >
                    <div className="flex items-center gap-2">
                      <RadioGroupItem value="yes" id="diver-yes" />
                      <Label htmlFor="diver-yes" className="font-normal cursor-pointer">
                        Yes
                      </Label>
                    </div>
                    <div className="flex items-center gap-2">
                      <RadioGroupItem value="no" id="diver-no" />
                      <Label htmlFor="diver-no" className="font-normal cursor-pointer">
                        No
                      </Label>
                    </div>
                  </RadioGroup>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="preferredExpedition">Preferred Expedition</Label>
                    <Select
                      value={preferredExpedition}
                      onValueChange={setPreferredExpedition}
                      required
                    >
                      <SelectTrigger id="preferredExpedition">
                        <SelectValue placeholder="Select expedition" />
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
                    <Label htmlFor="experienceLevel">Experience Level</Label>
                    <Select
                      value={experienceLevel}
                      onValueChange={setExperienceLevel}
                      required
                    >
                      <SelectTrigger id="experienceLevel">
                        <SelectValue placeholder="Select level" />
                      </SelectTrigger>
                      <SelectContent>
                        {experienceLevels.map((level) => (
                          <SelectItem key={level} value={level}>
                            {level}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="Tell us about your adventure dreams..."
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
                      Sending...
                    </>
                  ) : (
                    "Send Enquiry"
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
