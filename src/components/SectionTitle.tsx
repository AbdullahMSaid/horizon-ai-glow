type Props = { eyebrow?: string; title: string; intro?: string; center?: boolean };

export default function SectionTitle({ eyebrow, title, intro, center = false }: Props) {
  return (
    <div className={center ? "text-center max-w-2xl mx-auto" : "max-w-2xl"}>
      {eyebrow && (
        <div className={`text-xs tracking-[0.4em] uppercase text-gold-500 mb-4 ${center ? "" : ""}`}>
          {eyebrow}
        </div>
      )}
      <h2 className="text-3xl md:text-5xl font-bold text-text-primary leading-tight">
        {title}
      </h2>
      <div className={`mt-5 h-[2px] w-16 bg-gradient-to-r from-gold-500 to-gold-600 ${center ? "mx-auto" : ""}`} />
      {intro && <p className="mt-6 text-text-secondary text-lg leading-relaxed">{intro}</p>}
    </div>
  );
}
