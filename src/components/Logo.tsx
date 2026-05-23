import logoSvg from "@/assets/logo.svg";

type Props = { size?: "sm" | "lg"; showWordmark?: boolean };

export function LogoMark({ className = "" }: { className?: string }) {
  return (
    <img
      src={logoSvg}
      alt="Horizon AI Solutions"
      className={className}
      draggable={false}
    />
  );
}

export default function Logo({ size = "sm", showWordmark = true }: Props) {
  const iconSize = size === "lg" ? "h-16 w-auto md:h-20" : "h-9 w-auto md:h-11";
  const heading = size === "lg" ? "text-4xl md:text-5xl" : "text-base";
  const sub = size === "lg" ? "text-sm tracking-[0.55em]" : "text-[9px] tracking-[0.4em]";
  return (
    <div className="flex items-center gap-3 transition-opacity hover:opacity-80 cursor-pointer">
      <LogoMark className={iconSize} />
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
