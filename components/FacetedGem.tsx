"use client";

/**
 * Faceted gemstone SVG — renders a real-looking cut gem (brilliant or cabochon).
 * Uses procedural facet geometry + bright highlights for vibrant scintillation.
 */

type Props = {
  colorLight: string;
  colorMain: string;
  colorDark: string;
  glow: string;
  cut?: "brilliant" | "oval" | "emerald" | "cabochon";
  className?: string;
  id?: string; // unique id to avoid SVG defs collisions
};

export default function FacetedGem({
  colorLight,
  colorMain,
  colorDark,
  glow,
  cut = "brilliant",
  className,
  id = Math.random().toString(36).slice(2, 8)
}: Props) {
  if (cut === "cabochon") {
    return (
      <Cabochon
        colorLight={colorLight}
        colorMain={colorMain}
        colorDark={colorDark}
        glow={glow}
        className={className}
        id={id}
      />
    );
  }
  if (cut === "emerald") {
    return (
      <EmeraldCut
        colorLight={colorLight}
        colorMain={colorMain}
        colorDark={colorDark}
        glow={glow}
        className={className}
        id={id}
      />
    );
  }
  if (cut === "oval") {
    return (
      <OvalCut
        colorLight={colorLight}
        colorMain={colorMain}
        colorDark={colorDark}
        glow={glow}
        className={className}
        id={id}
      />
    );
  }
  return (
    <Brilliant
      colorLight={colorLight}
      colorMain={colorMain}
      colorDark={colorDark}
      glow={glow}
      className={className}
      id={id}
    />
  );
}

/* ============== ROUND BRILLIANT CUT ============== */
function Brilliant({
  colorLight,
  colorMain,
  colorDark,
  glow,
  className,
  id
}: Required<Pick<Props, "colorLight" | "colorMain" | "colorDark" | "glow">> & {
  className?: string;
  id: string;
}) {
  const cx = 100;
  const cy = 100;
  const Rg = 92; // girdle radius
  const Rt = 38; // table radius (octagon)

  // 8 crown facets (kites between table edge and girdle edge)
  const crown = Array.from({ length: 8 }).map((_, i) => {
    const a0 = ((i * 45 - 22.5) * Math.PI) / 180;
    const a1 = ((i * 45 + 22.5) * Math.PI) / 180;
    const t0 = [cx + Rt * Math.cos(a0), cy + Rt * Math.sin(a0)];
    const t1 = [cx + Rt * Math.cos(a1), cy + Rt * Math.sin(a1)];
    const g0 = [cx + Rg * Math.cos(a0), cy + Rg * Math.sin(a0)];
    const g1 = [cx + Rg * Math.cos(a1), cy + Rg * Math.sin(a1)];
    return {
      points: `${t0[0]},${t0[1]} ${t1[0]},${t1[1]} ${g1[0]},${g1[1]} ${g0[0]},${g0[1]}`,
      // shading depends on facet angle — top-left is lit
      shade: i
    };
  });

  // 16 small break facets at the rim (between crown kites)
  const breaks = Array.from({ length: 16 }).map((_, i) => {
    const a0 = ((i * 22.5 - 11.25) * Math.PI) / 180;
    const a1 = ((i * 22.5 + 11.25) * Math.PI) / 180;
    const am = (i * 22.5 * Math.PI) / 180;
    const g0 = [cx + Rg * Math.cos(a0), cy + Rg * Math.sin(a0)];
    const g1 = [cx + Rg * Math.cos(a1), cy + Rg * Math.sin(a1)];
    const inner = [cx + (Rg - 12) * Math.cos(am), cy + (Rg - 12) * Math.sin(am)];
    return {
      points: `${g0[0]},${g0[1]} ${g1[0]},${g1[1]} ${inner[0]},${inner[1]}`,
      shade: i
    };
  });

  const tablePoints = Array.from({ length: 8 })
    .map((_, i) => {
      const a = ((i * 45 + 22.5) * Math.PI) / 180;
      return `${cx + Rt * Math.cos(a)},${cy + Rt * Math.sin(a)}`;
    })
    .join(" ");

  // shading helper — facets toward top-left get lighter, bottom-right darker
  const facetFill = (i: number, total: number) => {
    // 0 = right, 2 = bottom, 4 = left, 6 = top  (i*45deg from +X)
    // top-left facet ~ index 5
    const angle = (i * 360) / total;
    // luminance peaks around 225deg (top-left = -45 in screen)
    const light = Math.cos(((angle - 225) * Math.PI) / 180); // -1 to 1
    return light > 0.4 ? colorLight : light > -0.2 ? colorMain : colorDark;
  };

  return (
    <svg
      viewBox="0 0 200 200"
      className={className}
      style={{ overflow: "visible" }}
    >
      <defs>
        <radialGradient id={`base-${id}`} cx="38%" cy="32%" r="78%">
          <stop offset="0%" stopColor={colorLight} stopOpacity="1" />
          <stop offset="55%" stopColor={colorMain} stopOpacity="1" />
          <stop offset="100%" stopColor={colorDark} stopOpacity="1" />
        </radialGradient>
        <radialGradient id={`table-${id}`} cx="40%" cy="35%" r="70%">
          <stop offset="0%" stopColor="#ffffff" stopOpacity="0.85" />
          <stop offset="55%" stopColor={colorLight} stopOpacity="0.45" />
          <stop offset="100%" stopColor={colorMain} stopOpacity="0.35" />
        </radialGradient>
        <radialGradient id={`halo-${id}`} cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor={glow} stopOpacity="0.6" />
          <stop offset="100%" stopColor={glow} stopOpacity="0" />
        </radialGradient>
        <filter id={`blur-${id}`} x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur stdDeviation="6" />
        </filter>
      </defs>

      {/* outer halo */}
      <circle cx={cx} cy={cy} r="98" fill={`url(#halo-${id})`} />

      {/* girdle base (gives smooth color underneath facets) */}
      <circle cx={cx} cy={cy} r={Rg} fill={`url(#base-${id})`} />

      {/* 16 break facets at rim */}
      {breaks.map((b, i) => (
        <polygon
          key={`b${i}`}
          points={b.points}
          fill={facetFill(i, 16)}
          fillOpacity={0.55}
          stroke="#ffffff"
          strokeOpacity={0.12}
          strokeWidth={0.3}
        />
      ))}

      {/* 8 crown kite facets */}
      {crown.map((f, i) => (
        <polygon
          key={`c${i}`}
          points={f.points}
          fill={facetFill(i, 8)}
          fillOpacity={0.72}
          stroke="#ffffff"
          strokeOpacity={0.22}
          strokeWidth={0.45}
        />
      ))}

      {/* table (octagon) */}
      <polygon
        points={tablePoints}
        fill={`url(#table-${id})`}
        stroke="#ffffff"
        strokeOpacity={0.45}
        strokeWidth={0.7}
      />

      {/* rim outline – gold ring */}
      <circle
        cx={cx}
        cy={cy}
        r={Rg}
        fill="none"
        stroke="#f4e0a8"
        strokeOpacity={0.55}
        strokeWidth={0.9}
      />

      {/* primary highlight */}
      <ellipse
        cx={78}
        cy={62}
        rx={18}
        ry={9}
        fill="#ffffff"
        opacity={0.75}
        filter={`url(#blur-${id})`}
      />
      {/* secondary sparkle */}
      <ellipse cx={125} cy={80} rx={4} ry={2.5} fill="#ffffff" opacity={0.55} />
      <circle cx={70} cy={50} r={2} fill="#ffffff" opacity={0.95} />
    </svg>
  );
}

/* ============== OVAL BRILLIANT CUT ============== */
function OvalCut({
  colorLight,
  colorMain,
  colorDark,
  glow,
  className,
  id
}: Required<Pick<Props, "colorLight" | "colorMain" | "colorDark" | "glow">> & {
  className?: string;
  id: string;
}) {
  const cx = 100;
  const cy = 100;
  const rx = 80;
  const ry = 95;
  const rxT = 32;
  const ryT = 42;

  // 10 crown facets
  const crown = Array.from({ length: 10 }).map((_, i) => {
    const a0 = ((i * 36 - 18) * Math.PI) / 180;
    const a1 = ((i * 36 + 18) * Math.PI) / 180;
    const t0 = [cx + rxT * Math.cos(a0), cy + ryT * Math.sin(a0)];
    const t1 = [cx + rxT * Math.cos(a1), cy + ryT * Math.sin(a1)];
    const g0 = [cx + rx * Math.cos(a0), cy + ry * Math.sin(a0)];
    const g1 = [cx + rx * Math.cos(a1), cy + ry * Math.sin(a1)];
    return `${t0[0]},${t0[1]} ${t1[0]},${t1[1]} ${g1[0]},${g1[1]} ${g0[0]},${g0[1]}`;
  });

  const facetFill = (i: number) => {
    const angle = (i * 360) / 10;
    const light = Math.cos(((angle - 225) * Math.PI) / 180);
    return light > 0.4 ? colorLight : light > -0.2 ? colorMain : colorDark;
  };

  const tablePts = Array.from({ length: 10 })
    .map((_, i) => {
      const a = ((i * 36 + 18) * Math.PI) / 180;
      return `${cx + rxT * Math.cos(a)},${cy + ryT * Math.sin(a)}`;
    })
    .join(" ");

  return (
    <svg viewBox="0 0 200 200" className={className} style={{ overflow: "visible" }}>
      <defs>
        <radialGradient id={`obase-${id}`} cx="40%" cy="32%" r="78%">
          <stop offset="0%" stopColor={colorLight} />
          <stop offset="55%" stopColor={colorMain} />
          <stop offset="100%" stopColor={colorDark} />
        </radialGradient>
        <radialGradient id={`otable-${id}`} cx="42%" cy="35%" r="70%">
          <stop offset="0%" stopColor="#ffffff" stopOpacity="0.85" />
          <stop offset="55%" stopColor={colorLight} stopOpacity="0.4" />
          <stop offset="100%" stopColor={colorMain} stopOpacity="0.35" />
        </radialGradient>
        <radialGradient id={`ohalo-${id}`} cx="50%" cy="50%" r="55%">
          <stop offset="0%" stopColor={glow} stopOpacity="0.55" />
          <stop offset="100%" stopColor={glow} stopOpacity="0" />
        </radialGradient>
        <filter id={`oblur-${id}`}><feGaussianBlur stdDeviation="6" /></filter>
      </defs>

      <ellipse cx={cx} cy={cy} rx="98" ry="105" fill={`url(#ohalo-${id})`} />
      <ellipse cx={cx} cy={cy} rx={rx} ry={ry} fill={`url(#obase-${id})`} />

      {crown.map((pts, i) => (
        <polygon
          key={i}
          points={pts}
          fill={facetFill(i)}
          fillOpacity={0.7}
          stroke="#ffffff"
          strokeOpacity={0.2}
          strokeWidth={0.45}
        />
      ))}

      <polygon points={tablePts} fill={`url(#otable-${id})`} stroke="#ffffff" strokeOpacity={0.5} strokeWidth={0.7} />

      <ellipse cx={cx} cy={cy} rx={rx} ry={ry} fill="none" stroke="#f4e0a8" strokeOpacity={0.55} strokeWidth={1} />

      <ellipse cx={75} cy={60} rx={16} ry={8} fill="#ffffff" opacity={0.75} filter={`url(#oblur-${id})`} />
      <circle cx={68} cy={48} r={2} fill="#ffffff" opacity={0.95} />
    </svg>
  );
}

/* ============== EMERALD CUT (step-cut rectangle) ============== */
function EmeraldCut({
  colorLight,
  colorMain,
  colorDark,
  glow,
  className,
  id
}: Required<Pick<Props, "colorLight" | "colorMain" | "colorDark" | "glow">> & {
  className?: string;
  id: string;
}) {
  // Octagon outline with cut corners
  const W = 130;
  const H = 170;
  const cx = 100;
  const cy = 100;
  const cut = 18; // corner cut size

  const x1 = cx - W / 2;
  const x2 = cx + W / 2;
  const y1 = cy - H / 2;
  const y2 = cy + H / 2;

  const outer = `${x1 + cut},${y1} ${x2 - cut},${y1} ${x2},${y1 + cut} ${x2},${y2 - cut} ${x2 - cut},${y2} ${x1 + cut},${y2} ${x1},${y2 - cut} ${x1},${y1 + cut}`;

  // step-cut inner rings (3 levels)
  const step = (s: number) => {
    const w = W - s * 2;
    const h = H - s * 2;
    const c = Math.max(4, cut - s * 0.7);
    const a = cx - w / 2,
      b = cx + w / 2,
      d = cy - h / 2,
      e = cy + h / 2;
    return `${a + c},${d} ${b - c},${d} ${b},${d + c} ${b},${e - c} ${b - c},${e} ${a + c},${e} ${a},${e - c} ${a},${d + c}`;
  };

  return (
    <svg viewBox="0 0 200 200" className={className} style={{ overflow: "visible" }}>
      <defs>
        <linearGradient id={`ebase-${id}`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor={colorLight} />
          <stop offset="50%" stopColor={colorMain} />
          <stop offset="100%" stopColor={colorDark} />
        </linearGradient>
        <linearGradient id={`etable-${id}`} x1="0.3" y1="0" x2="0.7" y2="1">
          <stop offset="0%" stopColor="#ffffff" stopOpacity="0.7" />
          <stop offset="50%" stopColor={colorLight} stopOpacity="0.4" />
          <stop offset="100%" stopColor={colorMain} stopOpacity="0.3" />
        </linearGradient>
        <radialGradient id={`ehalo-${id}`} cx="50%" cy="50%" r="55%">
          <stop offset="0%" stopColor={glow} stopOpacity="0.55" />
          <stop offset="100%" stopColor={glow} stopOpacity="0" />
        </radialGradient>
      </defs>

      <rect x="10" y="0" width="180" height="200" fill={`url(#ehalo-${id})`} />

      <polygon points={outer} fill={`url(#ebase-${id})`} stroke="#f4e0a8" strokeOpacity={0.55} strokeWidth={1.2} />
      <polygon points={step(10)} fill="none" stroke="#ffffff" strokeOpacity={0.25} strokeWidth={0.6} />
      <polygon points={step(22)} fill="none" stroke="#ffffff" strokeOpacity={0.3} strokeWidth={0.6} />
      <polygon points={step(34)} fill={`url(#etable-${id})`} stroke="#ffffff" strokeOpacity={0.4} strokeWidth={0.8} />

      {/* highlights – sharp parallel light streaks */}
      <rect x="55" y="50" width="40" height="3" fill="#ffffff" opacity="0.55" />
      <rect x="62" y="40" width="22" height="2" fill="#ffffff" opacity="0.75" />
    </svg>
  );
}

/* ============== CABOCHON (smooth domed gem — pearl, coral, cat's eye) ============== */
function Cabochon({
  colorLight,
  colorMain,
  colorDark,
  glow,
  className,
  id
}: Required<Pick<Props, "colorLight" | "colorMain" | "colorDark" | "glow">> & {
  className?: string;
  id: string;
}) {
  return (
    <svg viewBox="0 0 200 200" className={className} style={{ overflow: "visible" }}>
      <defs>
        <radialGradient id={`cbase-${id}`} cx="38%" cy="30%" r="80%">
          <stop offset="0%" stopColor={colorLight} stopOpacity="1" />
          <stop offset="55%" stopColor={colorMain} stopOpacity="1" />
          <stop offset="100%" stopColor={colorDark} stopOpacity="1" />
        </radialGradient>
        <radialGradient id={`chalo-${id}`} cx="50%" cy="50%" r="55%">
          <stop offset="0%" stopColor={glow} stopOpacity="0.55" />
          <stop offset="100%" stopColor={glow} stopOpacity="0" />
        </radialGradient>
        <filter id={`cblur-${id}`}><feGaussianBlur stdDeviation="3" /></filter>
      </defs>

      <circle cx="100" cy="100" r="98" fill={`url(#chalo-${id})`} />
      <circle cx="100" cy="100" r="92" fill={`url(#cbase-${id})`} stroke="#f4e0a8" strokeOpacity={0.5} strokeWidth={1} />

      {/* primary glossy highlight */}
      <ellipse cx="72" cy="58" rx="22" ry="12" fill="#ffffff" opacity="0.7" filter={`url(#cblur-${id})`} />
      {/* secondary */}
      <ellipse cx="125" cy="85" rx="6" ry="4" fill="#ffffff" opacity="0.4" />
      {/* bottom inner shadow */}
      <ellipse cx="100" cy="148" rx="58" ry="20" fill={colorDark} opacity="0.35" filter={`url(#cblur-${id})`} />
    </svg>
  );
}
