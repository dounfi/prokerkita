import React from "react";

export function VillageIllustration({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 1440 520"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`w-full h-auto select-none pointer-events-none ${className}`}
      preserveAspectRatio="xMidYMax slice"
    >
      <defs>
        {/* Mountain Gradients */}
        <linearGradient
          id="mtnGradMain"
          x1="720"
          y1="60"
          x2="720"
          y2="340"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0%" stopColor="#0284c7" />
          <stop offset="50%" stopColor="#0369a1" />
          <stop offset="100%" stopColor="#075985" />
        </linearGradient>
        <linearGradient
          id="mtnGradLeft"
          x1="400"
          y1="120"
          x2="400"
          y2="380"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0%" stopColor="#38bdf8" />
          <stop offset="100%" stopColor="#0284c7" />
        </linearGradient>
        <linearGradient
          id="mtnGradRight"
          x1="1040"
          y1="120"
          x2="1040"
          y2="380"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0%" stopColor="#38bdf8" />
          <stop offset="100%" stopColor="#0369a1" />
        </linearGradient>

        {/* Roof Gradient */}
        <linearGradient
          id="roofGrad"
          x1="720"
          y1="180"
          x2="720"
          y2="320"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0%" stopColor="#f56e00" />
          <stop offset="100%" stopColor="#b45309" />
        </linearGradient>

        {/* Terrace Greens */}
        <linearGradient
          id="sawah1"
          x1="720"
          y1="320"
          x2="720"
          y2="440"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0%" stopColor="#10b981" />
          <stop offset="100%" stopColor="#059669" />
        </linearGradient>
        <linearGradient
          id="sawah2"
          x1="720"
          y1="380"
          x2="720"
          y2="520"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0%" stopColor="#34d399" />
          <stop offset="100%" stopColor="#10b981" />
        </linearGradient>
      </defs>

      {/* --- BACKGROUND MOUNTAINS --- */}
      <g className="illust-mountains">
        {/* Side Mountain Left */}
        <polygon points="150,380 420,120 680,380" fill="url(#mtnGradLeft)" opacity="0.9" />
        <polygon points="420,120 480,180 420,380" fill="#0284c7" opacity="0.4" />

        {/* Side Mountain Right */}
        <polygon points="760,380 1020,120 1290,380" fill="url(#mtnGradRight)" opacity="0.9" />
        <polygon points="1020,120 1080,190 1020,380" fill="#075985" opacity="0.4" />

        {/* Center Main Mountain (Gunung Merapi peak style) */}
        <polygon points="440,360 720,50 1000,360" fill="url(#mtnGradMain)" />
        {/* Mountain Facets / Shadows for 3D origami look */}
        <polygon points="720,50 820,170 720,360" fill="#0369a1" opacity="0.6" />
        <polygon points="720,50 630,190 720,360" fill="#38bdf8" opacity="0.25" />

        {/* Mountain Snow / Cloud Cap */}
        <polygon
          points="720,50 680,100 710,110 720,105 735,115 760,95"
          fill="#f0f9ff"
          opacity="0.9"
        />
      </g>

      {/* --- CLOUDS --- */}
      <g className="illust-clouds">
        <path
          className="cloud-left"
          d="M 200,160 Q 230,130 270,140 Q 300,120 340,140 Q 370,130 390,160 Z"
          fill="#ffffff"
          opacity="0.8"
        />
        <path
          className="cloud-right"
          d="M 1050,150 Q 1080,120 1120,130 Q 1150,110 1190,130 Q 1220,120 1240,150 Z"
          fill="#ffffff"
          opacity="0.8"
        />
      </g>

      {/* --- ORIGAMI CRANES / BIRDS --- */}
      <g className="illust-cranes">
        <polygon className="crane-1" points="320,110 335,95 340,112 328,118" fill="#ffc72c" />
        <polygon className="crane-2" points="1120,100 1138,82 1145,102 1130,108" fill="#f56e00" />
      </g>

      {/* --- MIDGROUND: JAVANESE JOGLO HOUSE / HALL --- */}
      <g className="illust-joglo">
        {/* Base Foundation */}
        <rect x="540" y="300" width="360" height="70" fill="#78350f" rx="4" />
        <rect x="520" y="360" width="400" height="20" fill="#451a03" rx="2" />

        {/* Steps to Joglo */}
        <polygon points="620,380 820,380 840,360 600,360" fill="#d97706" />
        <polygon points="640,380 800,380 815,370 625,370" fill="#ffc72c" />

        {/* Pillars (Saka Guru) */}
        <rect x="570" y="270" width="14" height="90" fill="#f59e0b" />
        <rect x="630" y="270" width="14" height="90" fill="#f59e0b" />
        <rect x="690" y="270" width="14" height="90" fill="#f59e0b" />
        <rect x="740" y="270" width="14" height="90" fill="#f59e0b" />
        <rect x="790" y="270" width="14" height="90" fill="#f59e0b" />
        <rect x="850" y="270" width="14" height="90" fill="#f59e0b" />

        {/* Joglo Roof Lower Tier */}
        <polygon points="460,270 980,270 920,220 520,220" fill="url(#roofGrad)" />
        <polygon points="520,220 920,220 900,215 540,215" fill="#f59e0b" />

        {/* Joglo Roof Upper Tier (Tajug / Apex) */}
        <polygon points="540,220 900,220 800,140 640,140" fill="url(#roofGrad)" />
        {/* Roof Ridge Cresting (Mahkota Roof Ornament) */}
        <polygon points="640,140 800,140 780,128 660,128" fill="#ffc72c" />
        <polygon points="710,128 730,128 720,110" fill="#ffc72c" />

        {/* Doorway / Center Banner */}
        <rect x="660" y="300" width="120" height="60" fill="#002855" rx="4" />
        <rect
          x="668"
          y="308"
          width="104"
          height="44"
          fill="none"
          stroke="#ffc72c"
          strokeWidth="2"
          rx="2"
        />
        <text
          x="720"
          y="334"
          fill="#ffffff"
          fontSize="13"
          fontWeight="bold"
          fontFamily="sans-serif"
          textAnchor="middle"
        >
          PROKER KITA
        </text>
      </g>

      {/* --- PALM TREES (IJO-IJO) --- */}
      <g className="illust-trees">
        {/* Left Palm Tree */}
        <g className="tree-left" style={{ transformOrigin: "220px 380px" }}>
          <path
            d="M 220,380 Q 210,300 180,240"
            stroke="#78350f"
            strokeWidth="10"
            strokeLinecap="round"
          />
          <path
            d="M 180,240 Q 130,220 100,250 M 180,240 Q 150,190 120,180 M 180,240 Q 210,180 230,190 M 180,240 Q 240,210 250,240"
            stroke="#10b981"
            strokeWidth="8"
            strokeLinecap="round"
          />
        </g>

        {/* Right Palm Tree */}
        <g className="tree-right" style={{ transformOrigin: "1240px 380px" }}>
          <path
            d="M 1240,380 Q 1250,300 1280,240"
            stroke="#78350f"
            strokeWidth="10"
            strokeLinecap="round"
          />
          <path
            d="M 1280,240 Q 1330,220 1360,250 M 1280,240 Q 1310,190 1340,180 M 1280,240 Q 1250,180 1230,190 M 1280,240 Q 1220,210 1210,240"
            stroke="#10b981"
            strokeWidth="8"
            strokeLinecap="round"
          />
        </g>
      </g>

      {/* --- FOREGROUND RICE TERRACES (SAWAH HIJAU) --- */}
      <g className="illust-sawah">
        {/* Top Terrace Level */}
        <path
          className="sawah-1"
          d="M 0,380 C 300,350 600,410 900,360 C 1150,320 1320,370 1440,360 L 1440,520 L 0,520 Z"
          fill="url(#sawah1)"
        />
        {/* Wavy River / Path in Terrace */}
        <path
          className="sawah-river"
          d="M 450,520 C 500,460 520,430 550,400 C 570,380 600,390 630,410 C 670,440 680,480 720,520 Z"
          fill="#38bdf8"
          opacity="0.8"
        />

        {/* Middle Terrace Level */}
        <path
          className="sawah-2"
          d="M 0,420 C 350,390 550,460 850,410 C 1100,370 1300,430 1440,410 L 1440,520 L 0,520 Z"
          fill="url(#sawah2)"
        />

        {/* Front Terrace Level */}
        <path
          className="sawah-3"
          d="M 0,460 C 400,440 700,490 1000,450 C 1250,420 1380,470 1440,460 L 1440,520 L 0,520 Z"
          fill="#059669"
        />

        {/* Decorative Rice Stalk Accent / Grass Line */}
        <path
          d="M 0,462 C 400,442 700,492 1000,452 C 1250,422 1380,472 1440,462"
          stroke="#ffc72c"
          strokeWidth="3"
          strokeDasharray="6 6"
          fill="none"
        />
      </g>
    </svg>
  );
}
