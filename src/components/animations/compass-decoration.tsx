"use client";

import { cn } from "@/lib/utils";

interface CompassDecorationProps {
  className?: string;
  size?: number;
}

export function CompassDecoration({ className, size = 200 }: CompassDecorationProps) {
  return (
    <svg
      className={cn("compass-spin-slow opacity-20 pointer-events-none", className)}
      width={size}
      height={size}
      viewBox="0 0 200 200"
      fill="none"
      aria-hidden="true"
    >
      <circle cx="100" cy="100" r="95" stroke="#e8742a" strokeWidth="0.5" />
      <circle cx="100" cy="100" r="80" stroke="#f5f0e8" strokeWidth="0.3" opacity="0.5" />
      <circle cx="100" cy="100" r="60" stroke="#e8742a" strokeWidth="0.3" opacity="0.3" />
      {[0, 45, 90, 135, 180, 225, 270, 315].map((angle) => (
        <line
          key={angle}
          x1="100"
          y1="10"
          x2="100"
          y2="25"
          stroke="#f5f0e8"
          strokeWidth="0.5"
          opacity="0.4"
          transform={`rotate(${angle} 100 100)`}
        />
      ))}
      <path
        d="M100 30 L104 90 L100 85 L96 90 Z"
        fill="#e8742a"
        opacity="0.8"
      />
      <path
        d="M100 170 L104 110 L100 115 L96 110 Z"
        fill="#f5f0e8"
        opacity="0.4"
      />
      <circle cx="100" cy="100" r="4" fill="#e8742a" />
    </svg>
  );
}
