import SectionTitle from "./SectionTitle";
import Reveal from "./Reveal";

const stats = ["4 Core Services", "Enterprise-Ready", "Built for Scale"];

export default function About() {
  return (
    <section id="about" className="relative py-28">
      <div className="absolute inset-x-0 top-0 gold-divider" />
      <div className="absolute inset-0 bg-[rgba(21,36,59,0.35)]" aria-hidden="true" />
      <div className="relative max-w-7xl mx-auto px-6 lg:px-10">
        <Reveal>
          <SectionTitle eyebrow="The Studio" title="Who We Are" />
          <p className="mt-8 text-lg text-text-secondary leading-relaxed max-w-3xl">
            Horizon AI Solutions is a forward-thinking AI consultancy built at the intersection
            of strategy, technology, and execution. We don't just advise — we build, train, and
            deliver. Our team brings deep experience in AI systems, workflow design, and
            enterprise transformation to help organizations of every size move from AI curiosity
            to AI confidence.
          </p>
        </Reveal>

        <div className="mt-14 flex flex-wrap gap-4">
          {stats.map((s, i) => (
            <Reveal key={s} delay={i * 100}>
              <div className="glass rounded-full px-7 py-3 gold-glow">
                <span className="text-sm tracking-wider text-text-primary">
                  <span className="text-gold-500 mr-2">◆</span>
                  {s}
                </span>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
      <div className="absolute inset-x-0 bottom-0 gold-divider" />
    </section>
  );
}
