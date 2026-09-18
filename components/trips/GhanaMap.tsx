/**
 * Ghana, drawn as an outline with a photograph of the country inside it and
 * the Sankofa Return stops marked.
 *
 * WHY IT IS HAND-BUILT. The site ships no map asset and no mapping library,
 * and pulling one in for a single silhouette would cost a dependency and a
 * tile request for something that never pans or zooms. This is one inline SVG
 * with no runtime.
 *
 * WHERE THE SHAPE COMES FROM. The path below is a simplified tracing of
 * Ghana's actual border in longitude/latitude, projected with the crude
 * equirectangular mapping in `project()` — x from longitude, y from latitude,
 * no reprojection. At Ghana's latitude that stretches the country a few per
 * cent wider than a proper projection would, which is invisible at this size
 * and the reason the coordinates can be read straight off a gazetteer. The
 * enclosed area comes out within half a per cent of the real 238,533 km².
 *
 * It is a simplification, not a survey: the coastline and the Volta border
 * carry far more detail in reality than the points here. It is honest about
 * the country's shape and proportions and should not be used as anything but
 * an illustration.
 *
 * THE PHOTOGRAPH is clipped to that outline — Independence Square in Accra,
 * where the Black Star Gate stands. It is cropped from the top (`xMidYMin`)
 * because the arch and the palms are in the upper half of the frame and the
 * empty road is in the lower: centring the crop would fill the country with
 * tarmac. A scrim sits over it so the border and the labels stay legible
 * against a bright sky.
 *
 * THE MARKERS are the two places the March trip actually goes, taken from the
 * trip's own `location` field. Their labels sit off the coast rather than on
 * the photograph — the only way they stay readable whatever the picture is
 * doing underneath — and below the country rather than beside it, for the
 * reason given at `STOPS`.
 */

/** Bounding box of the drawing, in degrees. */
const WEST = -3.26;
const EAST = 1.2;
const NORTH = 11.17;
const SOUTH = 4.74;

/** Degrees-to-units, chosen so the viewBox lands on comfortable round numbers. */
const SCALE = 100;

const WIDTH = Math.round((EAST - WEST) * SCALE);
const HEIGHT = Math.round((NORTH - SOUTH) * SCALE);

/*
  Room around the country for the two labels.

  It was 300 a side, which left Ghana occupying 43% of the drawing and looking
  tiny in a column sized for it. Both labels now hang below the coast rather
  than out to the sides, so the sides need only enough room for the ends of
  the words.
*/
const GUTTER = 46;
const BOTTOM = 80;

function project([lon, lat]: [number, number]): [number, number] {
  return [
    Math.round((lon - WEST) * SCALE),
    Math.round((NORTH - lat) * SCALE),
  ];
}

/**
 * The border, clockwise from the north-west corner: the northern border with
 * Burkina Faso, down the eastern border with Togo, west along the Gulf of
 * Guinea, then north up the border with Côte d'Ivoire.
 */
const BORDER: [number, number][] = [
  [-2.83, 11.0],
  [-1.2, 11.0],
  [-0.15, 11.12],
  [0.05, 11.1],
  [0.36, 10.71],
  [0.25, 10.4],
  [0.5, 9.9],
  [0.35, 9.45],
  [0.52, 8.9],
  [0.62, 8.2],
  [0.55, 7.4],
  [0.72, 6.9],
  [1.0, 6.35],
  [1.19, 6.1],
  [0.75, 5.86],
  [0.3, 5.72],
  [-0.02, 5.6],
  [-0.25, 5.5],
  [-0.63, 5.35],
  [-1.05, 5.13],
  [-1.3, 5.05],
  [-1.6, 4.92],
  [-2.09, 4.76],
  [-2.6, 4.95],
  [-3.0, 5.02],
  [-3.11, 5.13],
  [-2.96, 5.6],
  [-3.2, 6.25],
  [-2.9, 6.6],
  [-2.78, 7.1],
  [-2.62, 7.9],
  [-2.7, 8.6],
  [-2.6, 9.2],
  [-2.75, 9.7],
  [-2.83, 10.35],
];

const OUTLINE =
  BORDER.map((point, i) => {
    const [x, y] = project(point);
    return `${i === 0 ? "M" : "L"}${x} ${y}`;
  }).join(" ") + " Z";

/*
  The two stops on the March itinerary, per the trip's own location field.

  Both are ports on the Gulf of Guinea, which is why each label hangs *below*
  its marker rather than beside it: west of Cape Coast is Takoradi and east of
  Accra is the Volta, so a label running sideways from either one crosses more
  of Ghana before it clears the border. Straight down is open water within a
  few units, and the leader lines make the pairing unambiguous.
*/
const STOPS: {
  name: string;
  at: [number, number];
  /** Leader vector from the marker, and which way the text then runs. */
  lead: [number, number];
  anchor: "start" | "end";
}[] = [
  { name: "Accra", at: [-0.197, 5.556], lead: [80, 107], anchor: "start" },
  { name: "Cape Coast", at: [-1.246, 5.106], lead: [-51, 80], anchor: "end" },
];

export default function GhanaMap({
  image,
  className = "",
  /** Namespaces the SVG's internal ids, so two maps on a page cannot collide. */
  idPrefix = "ghana-map",
}: {
  image: string;
  className?: string;
  idPrefix?: string;
}) {
  const clipId = `${idPrefix}-clip`;
  const scrimId = `${idPrefix}-scrim`;

  return (
    <svg
      viewBox={`${-GUTTER} 0 ${WIDTH + GUTTER * 2} ${HEIGHT + BOTTOM}`}
      role="img"
      aria-label="Map of Ghana with a photograph of Independence Square in Accra, marking Accra and Cape Coast — the two stops on the Sankofa Return trip."
      className={`h-auto w-full ${className}`}
    >
      <defs>
        <clipPath id={clipId}>
          <path d={OUTLINE} />
        </clipPath>

        <linearGradient id={scrimId} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#000" stopOpacity="0.45" />
          <stop offset="55%" stopColor="#000" stopOpacity="0.25" />
          <stop offset="100%" stopColor="#000" stopOpacity="0.5" />
        </linearGradient>
      </defs>

      <g clipPath={`url(#${clipId})`}>
        <image
          href={image}
          x="0"
          y="0"
          width={WIDTH}
          height={HEIGHT}
          preserveAspectRatio="xMidYMin slice"
        />
        <rect x="0" y="0" width={WIDTH} height={HEIGHT} fill={`url(#${scrimId})`} />
      </g>

      {/* Drawn after the fill so the border sits on top of the photograph. */}
      <path
        d={OUTLINE}
        fill="none"
        stroke="var(--color-primary)"
        strokeWidth="5"
        strokeLinejoin="round"
        strokeLinecap="round"
      />

      {STOPS.map((stop) => {
        const [x, y] = project(stop.at);
        const [dx, dy] = stop.lead;
        const toRight = stop.anchor === "start";

        return (
          <g key={stop.name}>
            {/* A leader out to the label, so the dot and its name stay paired
                once the name is off the coast. */}
            <line
              x1={x}
              y1={y}
              x2={x + dx}
              y2={y + dy}
              stroke="var(--color-primary)"
              strokeWidth="3"
            />
            <circle cx={x} cy={y} r="17" fill="var(--color-primary)" opacity="0.35" />
            <circle
              cx={x}
              cy={y}
              r="9"
              fill="#fff"
              stroke="var(--color-primary)"
              strokeWidth="4"
            />
            <text
              x={x + dx + (toRight ? 12 : -12)}
              y={y + dy + 10}
              textAnchor={stop.anchor}
              fill="var(--color-foreground)"
              fontSize="30"
              fontWeight="700"
              letterSpacing="0.5"
            >
              {stop.name}
            </text>
          </g>
        );
      })}
    </svg>
  );
}
