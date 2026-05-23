type Props = { size?: "sm" | "lg"; showWordmark?: boolean };

export function LogoMark({ className = "" }: { className?: string }) {
  // Three thin architectural building outlines, tallest in center
  return (
    <svg viewBox="0 0 64 64" className={className} fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <path d="M10 58 V28 L18 22 V58 Z" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" />
      <path d="M24 58 V14 L32 6 L40 14 V58 Z" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" />
      <path d="M46 58 V24 L54 30 V58 Z" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" />
      <line x1="6" y1="58" x2="58" y2="58" stroke="currentColor" strokeWidth="1.4" />
      <circle cx="32" cy="6" r="0.9" fill="currentColor" />
    </svg>
  );
}

export default function Logo({ size = "sm", showWordmark = true }: Props) {
  const iconSize = size === "lg" ? "h-16 w-16" : "h-9 w-9";
  const heading = size === "lg" ? "text-4xl md:text-5xl" : "text-base";
  const sub = size === "lg" ? "text-sm tracking-[0.55em]" : "text-[9px] tracking-[0.4em]";
  return (
    <div className="flex items-center gap-3">
      <LogoMark className={`${iconSize} text-gold-500`} />
      {showWordmark && (
        <div className="flex flex-col leading-none">
          <span className={`wordmark font-semibold text-gold-500 ${heading}`} style={{ letterSpacing: "0.32em" }}>
            HORIZON
          </span>
          <span className={`wordmark font-light text-gold-500/75 mt-1.5 ${sub}`}>AI Solutions</span>
        </div>
      )}
    </div>
  );
}
