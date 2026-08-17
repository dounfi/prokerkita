export function PinIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" aria-hidden="true">
      <path
        d="M12 22s7-6.1 7-12a7 7 0 1 0-14 0c0 5.9 7 12 7 12Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <circle cx="12" cy="10" r="2.6" fill="currentColor" />
    </svg>
  );
}

export function MapNetwork({ className = "" }: { className?: string }) {
  const nodes: Array<[number, number]> = [
    [18, 30],
    [52, 18],
    [86, 40],
    [34, 66],
    [70, 78],
    [110, 62],
  ];
  const edges: Array<[number, number]> = [
    [0, 1],

    [1, 2],
    [0, 3],
    [3, 4],
    [4, 2],
    [2, 5],
    [4, 5],
  ];
  return (
    <svg viewBox="0 0 130 100" className={className} aria-hidden="true">
      {edges.map(([a, b], i) => (
        <line
          key={i}
          x1={nodes[a]![0]}
          y1={nodes[a]![1]}
          x2={nodes[b]![0]}
          y2={nodes[b]![1]}
          stroke="currentColor"
          strokeWidth="1.2"
          strokeDasharray="4 3"
          opacity="0.6"
        />
      ))}
      {nodes.map(([x, y], i) => (
        <circle key={i} cx={x} cy={y} r={i % 3 === 0 ? 4.5 : 3} fill="currentColor" />
      ))}
    </svg>
  );
}

export function ContourLines({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 400 200" className={className} fill="none" aria-hidden="true">
      {[0, 1, 2, 3, 4, 5].map((i) => (
        <path
          key={i}
          d={`M-20 ${40 + i * 26} C 80 ${10 + i * 26}, 160 ${90 + i * 20}, 250 ${50 + i * 24} S 380 ${20 + i * 26}, 420 ${60 + i * 22}`}
          stroke="currentColor"
          strokeWidth="1.5"
          opacity={0.35}
        />
      ))}
    </svg>
  );
}

export function Tag({
  children,
  tone = "ink",
}: {
  children: React.ReactNode;
  tone?: "ink" | "leaf" | "sun" | "clay" | "sky";
}) {
  const tones: Record<string, string> = {
    ink: "bg-ink text-cream",
    leaf: "bg-leaf text-leaf-foreground",
    sun: "bg-sun text-sun-foreground",
    clay: "bg-clay text-clay-foreground",
    sky: "bg-sky text-sky-foreground",
  };
  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full border border-ink/10 px-3 py-1 text-xs font-semibold tracking-wide uppercase ${tones[tone]}`}
    >
      {children}
    </span>
  );
}

export function SectionLabel({
  children,
  showLine = true,
  className = "",
}: {
  children: React.ReactNode;
  showLine?: boolean;
  className?: string;
}) {
  return (
    <div className={`mb-4 flex items-center gap-3 ${className}`} data-reveal="left">
      <span className="h-3 w-3 rotate-45 bg-clay shrink-0" />
      <span className="font-display text-xs font-bold tracking-[0.25em] uppercase">{children}</span>
      {showLine && <span className="h-px flex-1 bg-ink/25" />}
    </div>
  );
}
