import { cn } from "@/lib/utils";

interface LogoProps {
  className?: string;
  variant?: "dark" | "light";
  showTagline?: boolean;
  size?: "sm" | "md" | "lg";
}

export function Logo({
  className,
  variant = "dark",
  showTagline = false,
  size = "md",
}: LogoProps) {
  const textColor = variant === "dark" ? "#f5f0e8" : "#0a1628";
  const accentColor = "#e8742a";
  const oceanColor = variant === "dark" ? "#1a3a5c" : "#1a3a5c";

  const sizes = {
    sm: { icon: 32, text: "text-sm", tagline: "text-[10px]" },
    md: { icon: 44, text: "text-lg", tagline: "text-xs" },
    lg: { icon: 56, text: "text-2xl", tagline: "text-sm" },
  };

  const s = sizes[size];

  return (
    <div className={cn("flex items-center gap-3", className)}>
      <svg
        width={s.icon}
        height={s.icon}
        viewBox="0 0 64 64"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        {/* Compass outer ring */}
        <circle
          cx="32"
          cy="32"
          r="30"
          stroke={accentColor}
          strokeWidth="1.5"
          fill="none"
          opacity="0.6"
        />
        {/* Compass cardinal points */}
        <path
          d="M32 4 L34 12 L32 10 L30 12 Z"
          fill={accentColor}
        />
        <path
          d="M32 60 L34 52 L32 54 L30 52 Z"
          fill={textColor}
          opacity="0.5"
        />
        <path
          d="M4 32 L12 34 L10 32 L12 30 Z"
          fill={textColor}
          opacity="0.5"
        />
        <path
          d="M60 32 L52 34 L54 32 L52 30 Z"
          fill={textColor}
          opacity="0.5"
        />
        {/* Mountain */}
        <path
          d="M12 42 L22 24 L28 32 L32 22 L40 34 L48 28 L52 42 Z"
          fill={textColor}
          opacity="0.9"
        />
        <path
          d="M22 24 L28 32 L32 22 Z"
          fill={accentColor}
          opacity="0.7"
        />
        {/* Ocean wave */}
        <path
          d="M8 46 Q16 42 24 46 T40 46 T56 46 L56 52 Q48 48 40 52 T24 52 T8 52 Z"
          fill={oceanColor}
        />
        <path
          d="M10 48 Q18 44 26 48 T42 48 T54 48"
          stroke={accentColor}
          strokeWidth="1"
          fill="none"
          opacity="0.6"
        />
        {/* Compass needle center */}
        <circle cx="32" cy="36" r="3" fill={accentColor} />
        <path
          d="M32 36 L32 26"
          stroke={accentColor}
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        <path
          d="M32 36 L38 40"
          stroke={textColor}
          strokeWidth="1"
          strokeLinecap="round"
          opacity="0.6"
        />
      </svg>
      <div className="flex flex-col">
        <span
          className={cn(
            "font-display font-bold tracking-[0.2em] leading-none",
            s.text
          )}
          style={{ color: textColor }}
        >
          INDO EXPLORERS
        </span>
        {showTagline && (
          <span
            className={cn(
              "tracking-[0.25em] uppercase mt-1 opacity-70",
              s.tagline
            )}
            style={{ color: accentColor }}
          >
            Explore Further.
          </span>
        )}
      </div>
    </div>
  );
}

export function LogoMark({ className, size = 64 }: { className?: string; size?: number }) {
  return (
    <svg
      className={className}
      width={size}
      height={size}
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Indo Explorers logo"
    >
      <circle cx="32" cy="32" r="30" stroke="#e8742a" strokeWidth="1.5" fill="#0a1628" />
      <path d="M12 42 L22 24 L28 32 L32 22 L40 34 L48 28 L52 42 Z" fill="#f5f0e8" />
      <path d="M22 24 L28 32 L32 22 Z" fill="#e8742a" opacity="0.7" />
      <path d="M8 46 Q16 42 24 46 T40 46 T56 46 L56 52 Q48 48 40 52 T24 52 T8 52 Z" fill="#1a3a5c" />
      <circle cx="32" cy="36" r="3" fill="#e8742a" />
      <path d="M32 36 L32 26" stroke="#e8742a" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M32 4 L34 12 L32 10 L30 12 Z" fill="#e8742a" />
    </svg>
  );
}
