import { Share2, Globe, Mail } from "lucide-react";
import { Logo } from "@/components/logo";

export function Footer() {
  return (
    <footer className="bg-volcanic border-t border-border">
      <div className="section-padding mx-auto max-w-7xl">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <Logo showTagline size="md" />

          <div className="flex items-center gap-6">
            {[
              { icon: Share2, label: "Social", href: "#" },
              { icon: Globe, label: "Website", href: "#" },
              { icon: Mail, label: "Email", href: "mailto:hello@indoexplorers.com" },
            ].map(({ icon: Icon, label, href }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                className="text-muted hover:text-sunset transition-colors duration-300"
              >
                <Icon size={20} />
              </a>
            ))}
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border text-center">
          <p className="text-sm tracking-[0.3em] uppercase text-muted">
            Launching Soon. Indonesia. Adventure Awaits.
          </p>
          <p className="mt-4 text-xs text-muted/60">
            &copy; {new Date().getFullYear()} Indo Explorers. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
