import { cn } from "@/lib/utils";
import Image from "next/image";

interface LogoProps {
  className?: string;
  variant?: "dark" | "light";
  showTagline?: boolean;
  size?: "sm" | "md" | "lg";
}

function LogoMarkSvg({
  size,
  variant,
}: {
  size: number;
  variant: "dark" | "light";
}) {
  const textColor = variant === "dark" ? "#f5f0e8" : "#0a1628";
  const accentColor = "#e8742a";
  const oceanColor = "#1a3a5c";

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <circle cx="32" cy="32" r="28" stroke={accentColor} strokeWidth="1.2" fill="none" opacity="0.65" />
      <path d="M32 5 L33.5 12 L32 10.5 L30.5 12 Z" fill={accentColor} />
      <path d="M32 59 L33.5 52 L32 53.5 L30.5 52 Z" fill={textColor} opacity="0.4" />
      <path d="M5 32 L12 33.5 L10.5 32 L12 30.5 Z" fill={textColor} opacity="0.4" />
      <path d="M59 32 L52 33.5 L53.5 32 L52 30.5 Z" fill={textColor} opacity="0.4" />
      <path d="M12 40 L20 24 L26 31 L32 21 L38 33 L44 27 L52 40 Z" fill={textColor} opacity="0.95" />
      <path d="M20 24 L26 31 L32 21 Z" fill={accentColor} opacity="0.75" />
      <path d="M8 44 Q16 40 24 44 T40 44 T56 44 L56 50 Q48 46 40 50 T24 50 T8 50 Z" fill={oceanColor} />
      <path d="M10 46 Q18 42 26 46 T42 46 T54 46" stroke={accentColor} strokeWidth="0.8" fill="none" opacity="0.55" />
      <circle cx="32" cy="36" r="2.5" fill={accentColor} />
      <path d="M32 36 L32 27" stroke={accentColor} strokeWidth="1.2" strokeLinecap="round" />
    </svg>
  );
}

export function Logo({
  className,
  variant = "dark",
  showTagline = false,
  size = "md",
}: LogoProps) {
  const textColor = variant === "dark" ? "text-off-white" : "text-navy";

  const sizes = {
    sm: { icon: 36, drift: "text-[11px]", indo: "text-[11px]", tagline: "text-[8px]", gap: "gap-2.5" },
    md: { icon: 44, drift: "text-sm", indo: "text-sm", tagline: "text-[10px]", gap: "gap-3" },
    lg: { icon: 56, drift: "text-xl", indo: "text-xl", tagline: "text-xs", gap: "gap-4" },
  };

  const s = sizes[size];

  return (
    <div className={cn("flex items-center", s.gap, className)}>
      <LogoMarkSvg size={s.icon} variant={variant} />
      <div className="flex flex-col leading-none">
        <span className={cn("font-display font-bold tracking-[0.35em]", s.drift, textColor)}>
          DRIFT
        </span>
        <span className={cn("font-display font-bold tracking-[0.35em] mt-0.5", s.indo, textColor)}>
          INDO
        </span>
        {showTagline && (
          <span className={cn("tracking-[0.25em] uppercase mt-1.5 text-sunset opacity-80", s.tagline)}>
            Explore Further.
          </span>
        )}
      </div>
    </div>
  );
}

export function LogoMark({ className, size = 64 }: { className?: string; size?: number }) {
  return (
    <Image
      src="/icon.svg"
      alt="Drift Indo"
      width={size}
      height={size}
      className={className}
    />
  );
}

export function LogoHorizontal({
  className,
  variant = "dark",
}: {
  className?: string;
  variant?: "dark" | "light";
}) {
  const src = variant === "dark" ? "/logo-dark.svg" : "/logo-light.svg";
  return (
    <Image
      src={src}
      alt="Drift Indo — Explore Further."
      width={220}
      height={64}
      className={cn("h-auto w-auto", className)}
      priority
    />
  );
}
