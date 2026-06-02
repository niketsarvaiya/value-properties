"use client";

import { useState } from "react";
import { PROPERTIES } from "@/lib/data";

// ─── Geography notes ────────────────────────────────────────────────────────
// viewBox 360 × 650  (North at top)
// Left coast  = Arabian Sea  (Worli Sea Face → Haji Ali → Breach Candy)
// Right coast = Back Bay / city side  (Dadar → CST → Fort)
// Bottom      = Nariman Point / Colaba / Cuffe Parade
// The Worli headland bumps out WEST around y≈185
// Marine Drive follows the right-eastern curve from Chowpatty down to Nariman Point
// ────────────────────────────────────────────────────────────────────────────

// Shared boundary points that adjacent polygons reuse exactly:
//   W coast: 88,28 → 76,72 → 70,118 → 68,158 → [headland 42,188] → 55,222 → 45,262 → 42,302 → 52,340 → 72,375
//   Worli/Tardeo split:  x≈172, y 28→188
//   Tardeo/LowerParel:   y≈228 shelf from (172,228)→east coast
//   Malabar-E / Prabhadevi-W boundary:  (162,192)→(158,368)
//   Prabhadevi-E / LowerParel-W:        (200,205)→(200,370)
//   Colaba/CuffeParade spine:           (172,375)→(170,498)→(158,540)→(148,575)→(148,618)

const NEIGHBOURHOODS: {
  id: string;
  label: string;
  // SVG polygon points string
  points: string;
  // Manual centroid for label placement
  lx: number;
  ly: number;
}[] = [
  {
    id: "Worli",
    label: "Worli",
    // NW coast: top → right boundary → bottom coast → west headland
    points: [
      "88,28",   // Mahim NW
      "172,28",  // top split with Tardeo
      "172,188", // split bottom
      "135,195", // inner diagonal
      "102,185", // inner diagonal
      "68,158",  // SW corner of Worli / top of headland
      "42,188",  // Worli headland tip (westernmost)
      "55,222",  // back from headland
      "68,218",  // rejoins coast — bottom of Worli area
      "70,192",  // inner shared with Malabar Hill top
      "102,185", // already listed — poly auto-closes
    ].join(" "),
    lx: 112, ly: 108,
  },
  {
    id: "Tardeo",
    label: "Tardeo",
    // NE large inland: top → east coast → south shelf → left boundary
    points: [
      "172,28",  // top split with Worli
      "308,28",  // Mahim NE
      "322,92",  // NE coast
      "318,162", // east coast
      "308,228", // east coast lower
      "278,228", // south shelf
      "235,222", // shelf
      "198,208", // shelf meets left boundary
      "172,188", // bottom of Worli/Tardeo split
    ].join(" "),
    lx: 252, ly: 128,
  },
  {
    id: "Malabar Hill",
    label: "Malabar Hill",
    // W middle: shared with Worli top, then goes south down western coast
    points: [
      "68,158",  // shared with Worli SW / headland top
      "102,185", // inner point shared with Worli
      "135,195", // inner diagonal from Worli
      "162,195", // top of Malabar-east boundary
      "158,368", // bottom of Malabar-east boundary
      "130,372", // bottom inner
      "105,360", // bottom
      "78,338",  // going up west coast
      "52,302",  // west coast
      "42,265",  // west coast
      "45,240",  // west coast — north of Haji Ali
      "52,228",  // shared with Worli headland return
      "55,222",  // headland return point
      "42,188",  // headland tip — shared
      "68,158",  // back to start
    ].join(" "),
    lx: 92, ly: 280,
  },
  {
    id: "Prabhadevi",
    label: "Prabhadevi",
    // Center-left: narrow strip between Malabar Hill and Lower Parel
    points: [
      "162,195", // top (shared with Malabar Hill east boundary)
      "198,208", // top-right (shared with Tardeo/Lower Parel)
      "200,375", // bottom-right
      "172,378", // bottom
      "130,372", // bottom-left (shared with Malabar Hill)
      "158,368", // left boundary bottom
      "162,195", // back to start
    ].join(" "),
    lx: 175, ly: 295,
  },
  {
    id: "Lower Parel",
    label: "Lower Parel",
    // Center-right: the larger eastern inland area
    points: [
      "198,208", // top-left (shared with Tardeo shelf)
      "235,222", // top shelf
      "278,228", // top shelf
      "308,228", // top shelf east
      "315,308", // east coast
      "302,382", // east coast lower
      "262,388", // south shelf
      "222,385", // south shelf
      "200,378", // south-left (shared with Prabhadevi)
      "200,208", // left boundary — matches top
    ].join(" "),
    lx: 262, ly: 308,
  },
  {
    id: "Colaba",
    label: "Colaba",
    // SW large area — the main southern tip of the peninsula
    points: [
      "42,262",  // NW (shared with Malabar Hill west coast)
      "52,302",  // west coast
      "78,338",  // west coast
      "105,360", // west coast inner
      "130,372", // inner shared
      "172,378", // bottom of Prabhadevi
      "175,428", // south — spine point
      "170,498", // south spine
      "158,540", // south spine
      "148,575", // south spine
      "148,618", // COLABA TIP
      "130,612", // east of tip
      "112,598", // east coast going north
      "90,568",  // east coast
      "72,535",  // east coast
      "52,498",  // east coast
      "40,455",  // east coast / Haji Ali area
      "35,415",  //
      "34,378",  //
      "35,342",  //
      "38,308",  //
      "42,282",  // rejoins NW
    ].join(" "),
    lx: 105, ly: 478,
  },
  {
    id: "Cuffe Parade",
    label: "Cuffe Parade",
    // SE reclaimed land — east of Colaba
    points: [
      "172,378", // NW shared with Colaba
      "200,378", // NW-right (Prabhadevi bottom)
      "222,385", // top
      "262,388", // top
      "302,382", // top-east
      "318,452", // east coast
      "305,518", // east coast
      "275,552", // east coast
      "242,562", // east coast lower
      "208,558", // east coast
      "185,538", // east coast
      "170,508", // east coast meeting spine
      "170,498", // spine shared with Colaba
      "175,428", // spine
      "172,378", // back to start
    ].join(" "),
    lx: 248, ly: 468,
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

  return (
    <div className="relative w-full select-none">
      <svg
        viewBox="0 0 360 650"
        className="w-full max-w-xs mx-auto"
        style={{ filter: "drop-shadow(0 12px 40px rgba(0,0,0,0.5))" }}
      >
        {/* ── Water background ─────────────────────────────────── */}
        <rect width="360" height="650" fill="#1B3A52" rx="6" />

        {/* Water texture – subtle grid */}
        <pattern id="wave" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
          <path d="M0,10 Q5,8 10,10 Q15,12 20,10" stroke="#2a4f68" strokeWidth="0.5" fill="none" opacity="0.5" />
        </pattern>
        <rect width="360" height="650" fill="url(#wave)" rx="6" />

        {/* ── Peninsula land fill (background shape) ───────────── */}
        {/* This gives a solid land colour beneath all the neighbourhood polys */}
        <path
          d={[
            "M 88,28",
            "L 308,28 L 322,92 L 318,162 L 308,228",
            "L 315,308 L 302,382 L 318,452 L 305,518",
            "L 275,552 L 242,562 L 208,558 L 185,538",
            "L 170,508 L 158,540 L 148,575 L 148,618",  // Colaba tip
            "L 130,612 L 112,598 L 90,568 L 72,535",
            "L 52,498 L 40,455 L 34,378 L 35,342",
            "L 38,308 L 42,265",
            // west coast up
            "L 45,240 L 52,228",
            "L 42,188",  // headland tip
            "L 55,222 L 68,218",  // back from headland
            "L 68,158",  // rejoin west coast (top of headland area)
            "L 70,118 L 76,72 L 88,28 Z",
          ].join(" ")}
          fill="#2D5068"
          opacity="0.4"
        />

        {/* ── Neighbourhood polygons ────────────────────────────── */}
        {NEIGHBOURHOODS.map((n) => {
          const count = getPropertyCount(n.id);
          const isSelected = selectedNeighbourhood === n.id;
          const isHovered = hovered === n.id;

          const fill = isSelected ? "#C9A96E" : isHovered ? "#22405C" : "#153248";
          const stroke = isSelected ? "#E8C98A" : "#C9A96E";
          const strokeW = isSelected ? 2 : isHovered ? 1.5 : 0.8;
          const strokeOpacity = isSelected ? 1 : isHovered ? 0.8 : 0.35;

          return (
            <g key={n.id}>
              <polygon
                points={n.points}
                fill={fill}
                stroke={stroke}
                strokeWidth={strokeW}
                strokeOpacity={strokeOpacity}
                strokeLinejoin="round"
                className="cursor-pointer transition-all duration-150"
                onMouseEnter={() => setHovered(n.id)}
                onMouseLeave={() => setHovered(null)}
                onClick={() => onSelect(selectedNeighbourhood === n.id ? null : n.id)}
              />

              {/* Label */}
              <text
                x={n.lx}
                y={n.ly - (count > 0 ? 9 : 0)}
                textAnchor="middle"
                dominantBaseline="middle"
                fill={isSelected ? "#0F1C2E" : "#F8F5F0"}
                fontSize={n.id === "Malabar Hill" ? "7.5" : "8"}
                fontWeight="600"
                fontFamily="Inter, sans-serif"
                letterSpacing="0.04em"
                className="pointer-events-none"
                opacity={isSelected || isHovered ? 1 : 0.9}
              >
                {n.label}
              </text>

              {/* Property count badge */}
              {count > 0 && (
                <g className="pointer-events-none">
                  <circle
                    cx={n.lx}
                    cy={n.ly + 8}
                    r="7.5"
                    fill={isSelected ? "#0F1C2E" : "#C9A96E"}
                  />
                  <text
                    x={n.lx}
                    y={n.ly + 8}
                    textAnchor="middle"
                    dominantBaseline="middle"
                    fill={isSelected ? "#C9A96E" : "#0F1C2E"}
                    fontSize="6.5"
                    fontWeight="800"
                    fontFamily="Inter, sans-serif"
                  >
                    {count}
                  </text>
                </g>
              )}
            </g>
          );
        })}

        {/* ── Marine Drive curve (decorative, east side) ───────── */}
        <path
          d="M 308,228 C 320,280 322,340 312,395"
          stroke="#C9A96E"
          strokeWidth="1.2"
          strokeDasharray="4,3"
          fill="none"
          opacity="0.4"
        />
        <text x="330" y="315" textAnchor="middle" fill="#C9A96E" fontSize="6" fontFamily="Inter" opacity="0.55" transform="rotate(85, 330, 315)">Marine Dr.</text>

        {/* ── Bandra-Worli Sea Link (north of map, decorative) ─── */}
        <line x1="88" y1="22" x2="88" y2="10" stroke="#C9A96E" strokeWidth="0.8" strokeDasharray="3,2" opacity="0.4" />
        <text x="88" y="7" textAnchor="middle" fill="#C9A96E" fontSize="5.5" fontFamily="Inter" opacity="0.5">Sea Link ↑</text>

        {/* ── Water labels ─────────────────────────────────────── */}
        <text
          x="22" y="390"
          fill="#6AAECB" fontSize="6.5" fontFamily="Inter" opacity="0.7"
          transform="rotate(-88, 22, 390)"
          letterSpacing="1"
        >
          ARABIAN SEA
        </text>
        <text
          x="340" y="420"
          fill="#6AAECB" fontSize="6.5" fontFamily="Inter" opacity="0.7"
          transform="rotate(88, 340, 420)"
          letterSpacing="1"
        >
          BACK BAY
        </text>

        {/* ── Compass rose ─────────────────────────────────────── */}
        <g transform="translate(328, 36)">
          <circle cx="0" cy="0" r="13" fill="#0F1C2E" opacity="0.85" />
          <circle cx="0" cy="0" r="13" fill="none" stroke="#C9A96E" strokeWidth="0.6" opacity="0.5" />
          <polygon points="0,-9 2.5,-3 -2.5,-3" fill="#C9A96E" />
          <polygon points="0,9 2.5,3 -2.5,3" fill="#C9A96E" opacity="0.35" />
          <text x="0" y="1" textAnchor="middle" dominantBaseline="middle" fontSize="7" fontWeight="700" fill="white" fontFamily="Inter">N</text>
        </g>

        {/* ── Colaba tip dot ─────────────────────────────────── */}
        <circle cx="148" cy="618" r="2.5" fill="#C9A96E" opacity="0.6" />
        <text x="148" y="632" textAnchor="middle" fill="#6AAECB" fontSize="5.5" fontFamily="Inter" opacity="0.55">Colaba Tip</text>
      </svg>
    </div>
  );
}
