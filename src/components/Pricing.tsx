import SectionTitle from "./SectionTitle";
import Reveal from "./Reveal";
import { Check } from "lucide-react";

const tiers = [
  {
    name: "Starter",
    desc: "Workshops & one-time consulting sessions",
    price: "Quoted per session",
    cta: "Book a Discovery Call",
    features: ["Single workshop or session", "Tailored agenda", "Recorded recap"],
    popular: false,
  },
  {
    name: "Growth",
    desc: "Workflow audits, automation builds & multi-session training",
    price: "Custom scoped",
    cta: "Book a Discovery Call",
    features: ["Workflow audit", "Automation builds", "Multi-session training", "Implementation support"],
    popular: true,
  },
  {
    name: "Partner",
    desc: "Ongoing AI strategy, tooling & dedicated support",
    price: "Retainer — let's talk",
    cta: "Book a Discovery Call",
    features: ["Dedicated AI strategist", "Custom tooling", "Priority support", "Quarterly reviews"],
    popular: false,
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="relative py-28">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <SectionTitle
          eyebrow="Engagements"
          title="Flexible Pricing for Every Stage"
          intro="Our pricing is tailored to the scope and complexity of each engagement. Whether you need a single workshop or an ongoing AI partner, we have a structure that fits."
        />

        <p className="mt-8 max-w-3xl mx-auto text-center text-text-secondary leading-relaxed">
          Every engagement starts with a free 30-minute discovery call. No commitment, no pressure — just clarity on what's possible.
        </p>

        <div className="mt-16 grid md:grid-cols-3 gap-6">
          {tiers.map((t, i) => (
            <Reveal key={t.name} delay={i * 100}>
              <div
                className={`relative rounded-2xl p-8 h-full flex flex-col gold-glow ${
                  t.popular
                    ? "glass-strong border-2 border-gold-500/70 md:-translate-y-3 shadow-[0_0_32px_rgba(230,164,76,0.25)]"
                    : "glass"
                }`}
              >
                {t.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-gold-500 text-navy-950 text-xs font-bold tracking-widest uppercase">
                    Most Popular
                  </div>
                )}
                <h3 className="text-2xl font-bold text-text-primary">{t.name}</h3>
                <p className="mt-3 text-text-secondary text-sm leading-relaxed min-h-[3rem]">{t.desc}</p>

                <div className="mt-6">
                  <span className="text-2xl font-bold gold-text-gradient">{t.price}</span>
                </div>

                <div className="my-6 h-px bg-gold-500/15" />

                <ul className="space-y-3 mb-8 flex-1">
                  {t.features.map((f) => (
                    <li key={f} className="flex items-start gap-3 text-text-secondary text-sm">
                      <Check size={16} className="text-gold-500 mt-0.5 shrink-0" />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>

                <a
                  href="#contact"
                  className={`block text-center px-5 py-3 rounded-md font-semibold transition-all ${
                    t.popular
                      ? "gold-gradient-btn"
                      : "border border-gold-500/60 text-gold-400 hover:bg-gold-500/10 hover:border-gold-500"
                  }`}
                >
                  {t.cta}
                </a>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
