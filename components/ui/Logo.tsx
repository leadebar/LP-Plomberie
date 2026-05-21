import { cn } from "@/lib/cn";

/**
 * Monogramme LP Plomberie en SVG inline (net à toutes les tailles, sans requête réseau).
 * `variant` règle la couleur : "navy" (sur fond clair) ou "white" (sur fond foncé).
 */
export default function Logo({
  variant = "navy",
  withWordmark = true,
  className,
}: {
  variant?: "navy" | "white";
  withWordmark?: boolean;
  className?: string;
}) {
  const color = variant === "white" ? "#ffffff" : "#0e1746";
  return (
    <svg
      viewBox={withWordmark ? "0 0 260 280" : "0 0 220 250"}
      fill="none"
      role="img"
      aria-label="LP Plomberie"
      className={cn("h-auto", className)}
    >
      <g
        stroke={color}
        strokeWidth={8}
        strokeLinecap="square"
        fill="none"
      >
        <path d="M70 40 V196 H120" />
        <path d="M132 40 V236" />
        <path d="M132 40 H172 a46 46 0 0 1 0 92 H132" />
        <path d="M132 196 H188" />
      </g>
      {withWordmark && (
        <text
          x="130"
          y="270"
          textAnchor="middle"
          fill={color}
          fontFamily="var(--font-inter), Arial, sans-serif"
          fontSize="26"
          letterSpacing="9"
          fontWeight="500"
        >
          PLOMBERIE
        </text>
      )}
    </svg>
  );
}
