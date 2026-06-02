"use client";

import { useState } from "react";
import { PROPERTIES, LOCATION_DESCRIPTIONS } from "@/lib/data";

const NEIGHBOURHOODS = [
  {
    id: "Malabar Hill",
    label: "Malabar Hill",
    // Peninsula tip — left coast hilly area
    points: "50,80 80,75 130,90 135,160 120,200 80,210 50,195 45,140",
  },
  {
    id: "Worli",
    label: "Worli",
    points: "40,210 80,210 120,200 140,220 145,310 100,330 50,320 38,270",
  },
  {
    id: "Tardeo",
    label: "Tardeo",
    points: "130,90 200,85 230,100 250,150 230,200 180,220 140,220 120,200 135,160",
  },
  {
    id: "Prabhadevi",
    label: "Prabhadevi",
    points: "120,220 180,220 230,200 245,260 230,320 190,340 145,335 100,330 140,220",
  },
  {
    id: "Lower Parel",
    label: "Lower Parel",
    points: "160,320 230,320 290,310 300,380 280,420 230,430 175,430 145,410 145,335 190,340",
  },
  {
    id: "Colaba",
    label: "Colaba",
    points: "100,330 145,335 145,410 130,440 140,500 120,550 90,560 70,530 75,460 85,400",
  },
  {
    id: "Cuffe Parade",
    label: "Cuffe Parade",
    points: "175,430 230,430 280,420 305,460 300,520 270,555 235,560 200,545 170,510 155,470 140,440 145,410",
  },
];

interface MumbaiMapProps {
  selectedNeighbourhood: string | null;
  onSelect: (neighbourhood: string | null) => void;
}

export default function MumbaiMap({ selectedNeighbourhood, onSelect }: MumbaiMapProps) {
  const [hovered, setHovered] = useState<string | null>(null);

  const getPropertyCount = (loc: string) =>
    PROPERTIES.filter((p) => p.location === loc && p.status === "active").length;

  const getCentroid = (points: string): { x: number; y: number } => {
    const pairs = points.trim().split(" ").map((p) => p.split(",").map(Number));
    const x = pairs.reduce((s, p) => s + p[0], 0) / pairs.length;
    const y = pairs.reduce((s, p) => s + p[1], 0) / pairs.length;
    return { x, y };
  };

  return (
    <div className="relative w-full">
      <svg
        viewBox="0 0 350 600"
        className="w-full max-w-sm mx-auto drop-shadow-lg"
        style={{ filter: "drop-shadow(0 8px 32px rgba(15,28,46,0.3))" }}
      >
        {/* Water / Ocean background */}
        <rect width="350" height="600" fill="#C8E6F5" rx="8" />

        {/* Peninsula outline — light effect */}
        <ellipse cx="175" cy="320" rx="165" ry="280" fill="#D9EEF9" opacity="0.4" />

        {/* Neighbourhoods */}
        {NEIGHBOURHOODS.map((n) => {
          const count = getPropertyCount(n.id);
          const isSelected = selectedNeighbourhood === n.id;
          const isHovered = hovered === n.id;
          const centroid = getCentroid(n.points);

          return (
            <g key={n.id}>
              <polygon
                points={n.points}
                fill={isSelected ? "#C9A96E" : isHovered ? "#1A2F4A" : "#0F1C2E"}
                opacity={isSelected ? 1 : isHovered ? 0.9 : 0.75}
                stroke={isSelected || isHovered ? "#C9A96E" : "#C9A96E"}
                strokeWidth={isSelected ? 2.5 : 1}
                strokeOpacity={isSelected ? 1 : 0.3}
                className="cursor-pointer transition-all duration-200"
                onMouseEnter={() => setHovered(n.id)}
                onMouseLeave={() => setHovered(null)}
                onClick={() => onSelect(selectedNeighbourhood === n.id ? null : n.id)}
              />

              {/* Neighbourhood label */}
              <text
                x={centroid.x}
                y={centroid.y - (count > 0 ? 8 : 0)}
                textAnchor="middle"
                dominantBaseline="middle"
                fill={isSelected ? "#0F1C2E" : "#F8F5F0"}
                fontSize="8.5"
                fontWeight="600"
                fontFamily="Inter, sans-serif"
                className="pointer-events-none select-none"
                style={{ letterSpacing: "0.04em" }}
              >
                {n.label}
              </text>

              {/* Property count badge */}
              {count > 0 && (
                <>
                  <circle
                    cx={centroid.x}
                    cy={centroid.y + 9}
                    r="8"
                    fill={isSelected ? "#0F1C2E" : "#C9A96E"}
                    className="pointer-events-none"
                  />
                  <text
                    x={centroid.x}
                    y={centroid.y + 9}
                    textAnchor="middle"
                    dominantBaseline="middle"
                    fill={isSelected ? "#C9A96E" : "#0F1C2E"}
                    fontSize="7"
                    fontWeight="700"
                    fontFamily="Inter, sans-serif"
                    className="pointer-events-none select-none"
                  >
                    {count}
                  </text>
                </>
              )}
            </g>
          );
        })}

        {/* Water labels */}
        <text x="18" y="400" fill="#5A9BC5" fontSize="7" fontFamily="Inter" opacity="0.8" transform="rotate(-75, 18, 400)">Arabian Sea</text>
        <text x="320" y="200" fill="#5A9BC5" fontSize="7" fontFamily="Inter" opacity="0.8" transform="rotate(75, 320, 200)">Back Bay</text>

        {/* Compass */}
        <g transform="translate(315, 40)">
          <circle cx="0" cy="0" r="14" fill="white" opacity="0.85" />
          <text x="0" y="1" textAnchor="middle" dominantBaseline="middle" fontSize="9" fontWeight="700" fill="#0F1C2E" fontFamily="Inter">N</text>
          <polygon points="0,-10 3,-4 -3,-4" fill="#C9A96E" />
        </g>

        {/* Legend */}
        <g transform="translate(12, 555)">
          <rect width="100" height="32" fill="white" opacity="0.85" rx="4" />
          <rect x="8" y="8" width="10" height="10" fill="#0F1C2E" opacity="0.75" />
          <text x="22" y="13" dominantBaseline="middle" fontSize="7" fill="#0F1C2E" fontFamily="Inter">Neighbourhood</text>
          <circle cx="13" cy="24" r="5" fill="#C9A96E" />
          <text x="22" y="24" dominantBaseline="middle" fontSize="7" fill="#0F1C2E" fontFamily="Inter">Properties</text>
        </g>
      </svg>

      {/* Info tooltip */}
      {hovered && !selectedNeighbourhood && (
        <div className="absolute -top-2 left-1/2 -translate-x-1/2 -translate-y-full bg-[#0F1C2E] text-white text-xs px-3 py-2 pointer-events-none whitespace-nowrap">
          <span className="text-[#C9A96E] font-semibold">{hovered}</span>
          <span className="ml-2 text-white/70">{getPropertyCount(hovered)} properties</span>
        </div>
      )}
    </div>
  );
}
