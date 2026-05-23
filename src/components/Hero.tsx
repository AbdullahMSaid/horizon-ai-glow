import heroImg from "@/assets/hero-skyline.jpg";
import { LogoMark } from "./Logo";

export default function Hero() {
  return (
    <section id="top" className="relative min-h-screen flex items-center overflow-hidden pt-24">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImg})` }}
        aria-hidden="true"
      />
      <div className="absolute inset-0 bg-[rgba(8,17,30,0.78)]" aria-hidden="true" />
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at 50% 30%, rgba(230,164,76,0.10), transparent 60%), linear-gradient(180deg, rgba(11,22,48,0.4) 0%, rgba(8,17,30,1) 100%)",
        }}
        aria-hidden="true"
      />

      <LogoMark className="absolute right-[-60px] bottom-[-40px] h-[420px] w-[420px] text-gold-500/[0.04] pointer-events-none hidden lg:block" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10 py-20 w-full">
        <div className="max-w-4xl fade-in-up">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass text-xs tracking-[0.3em] uppercase text-gold-400 mb-8">
            <span className="h-1.5 w-1.5 rounded-full bg-gold-500 animate-pulse" />
            Luxury AI Consulting
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-[1.05] text-text-primary">
            Transform Your Business with{" "}
            <span className="gold-text-gradient">AI</span> —
            <br className="hidden md:block" />
            Strategically, Intelligently, at Scale
          </h1>

          <div className="mt-8 mb-8 h-px max-w-md bg-gradient-to-r from-gold-500/70 via-gold-500/30 to-transparent" />

          <p className="text-lg md:text-xl text-text-secondary max-w-2xl leading-relaxed">
            From AI strategy and workflow automation to hands-on workshops and custom tools —
            Horizon AI Solutions helps teams at every stage harness the real power of
            artificial intelligence.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="#services"
              className="inline-flex items-center px-7 py-3.5 rounded-md border border-gold-500 text-gold-500 font-semibold hover:bg-gold-500/10 hover:text-gold-400 transition-all"
            >
              Explore Services
            </a>
            <a
              href="#contact"
              className="inline-flex items-center px-7 py-3.5 rounded-md bg-gold-500 text-navy-950 font-semibold hover:bg-gold-400 transition-all shadow-[0_0_30px_rgba(230,164,76,0.3)]"
            >
              Book a Free Consultation
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
