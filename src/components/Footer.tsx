import Logo from "./Logo";

export default function Footer() {
  return (
    <footer className="relative pt-12 pb-10">
      <div className="gold-divider mb-12" />
      <div className="max-w-7xl mx-auto px-6 lg:px-10 flex flex-col md:flex-row md:items-center md:justify-between gap-8">
        <div>
          <Logo />
          <p className="mt-4 text-sm text-text-secondary max-w-sm">
            Horizon AI Solutions — Intelligent Systems. Real Results.
          </p>
        </div>
        <nav className="flex flex-wrap gap-8 text-sm">
          {["Services", "About", "Pricing", "Contact"].map((l) => (
            <a key={l} href={`#${l.toLowerCase()}`} className="text-text-secondary hover:text-gold-400 transition-colors">
              {l}
            </a>
          ))}
        </nav>
      </div>
      <div className="max-w-7xl mx-auto px-6 lg:px-10 mt-10 text-xs text-text-secondary/70">
        © 2026 Horizon AI Solutions. All rights reserved.
      </div>
    </footer>
  );
}
