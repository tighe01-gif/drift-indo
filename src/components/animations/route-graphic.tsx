"use client";

import { cn } from "@/lib/utils";

interface RouteGraphicProps {
  className?: string;
}

export function RouteGraphic({ className }: RouteGraphicProps) {
  return (
    <svg
      className={cn("pointer-events-none", className)}
      viewBox="0 0 800 400"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M50 350 Q150 200 250 250 T450 150 T650 200 T780 80"
        stroke="#e8742a"
        strokeWidth="2"
        strokeDasharray="8 12"
        opacity="0.4"
        fill="none"
        style={{
          strokeDashoffset: 1000,
          animation: "route-dash 4s ease forwards",
        }}
      />
      {[
        { cx: 50, cy: 350, label: "Start" },
        { cx: 250, cy: 250, label: "" },
        { cx: 450, cy: 150, label: "" },
        { cx: 650, cy: 200, label: "" },
        { cx: 780, cy: 80, label: "End" },
      ].map((point, i) => (
        <g key={i}>
          <circle
            cx={point.cx}
            cy={point.cy}
            r="6"
            fill="#0a1628"
            stroke="#e8742a"
            strokeWidth="2"
          />
          {point.label && (
            <text
              x={point.cx}
              y={point.cy + 24}
              fill="#f5f0e8"
              fontSize="12"
              textAnchor="middle"
              opacity="0.6"
            >
              {point.label}
            </text>
          )}
        </g>
      ))}
    </svg>
  );
}
