type Props = { size?: "sm" | "lg"; showWordmark?: boolean };

export function LogoMark({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 64 56" className={className} fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <rect x="8" y="20" width="12" height="32" stroke="currentColor" strokeWidth="2" />
      <rect x="26" y="6" width="12" height="46" stroke="currentColor" strokeWidth="2" />
      <rect x="44" y="16" width="12" height="36" stroke="currentColor" strokeWidth="2" />
      <line x1="4" y1="52" x2="60" y2="52" stroke="currentColor" strokeWidth="2" />
    </svg>
  );
}

export default function Logo({ size = "sm", showWordmark = true }: Props) {
  const iconSize = size === "lg" ? "h-16 w-16" : "h-8 w-8";
  const heading = size === "lg" ? "text-4xl md:text-5xl" : "text-base";
  const sub = size === "lg" ? "text-sm tracking-[0.5em]" : "text-[10px] tracking-[0.35em]";
  return (
    <div className="flex items-center gap-3">
      <LogoMark className={`${iconSize} text-gold-500`} />
      {showWordmark && (
        <div className="flex flex-col leading-none">
          <span className={`wordmark font-bold text-gold-500 ${heading}`}>HORIZON</span>
          <span className={`wordmark text-gold-500/80 mt-1 ${sub}`}>AI Solutions</span>
        </div>
      )}
    </div>
  );
}
