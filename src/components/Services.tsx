import { Compass, Cog, GraduationCap, Wrench } from "lucide-react";
import SectionTitle from "./SectionTitle";
import Reveal from "./Reveal";

const services = [
  {
    icon: Compass,
    title: "AI Strategy Consulting",
    desc: "We assess your operations and build a clear AI roadmap aligned with your business goals.",
  },
  {
    icon: Cog,
    title: "AI Workflow Automation",
    desc: "We identify bottlenecks and integrate intelligent automation to save time, reduce costs, and scale faster.",
  },
  {
    icon: GraduationCap,
    title: "AI Workshops & Training",
    desc: "Hands-on, role-specific workshops that upskill your team and build real AI fluency — not just hype.",
  },
  {
    icon: Wrench,
    title: "Custom AI Tool Development",
    desc: "We design and build bespoke AI-powered tools tailored to your exact workflows and use cases.",
  },
];

export default function Services() {
  return (
    <section id="services" className="relative py-28">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <SectionTitle eyebrow="Capabilities" title="What We Do" />
        <div className="mt-16 grid md:grid-cols-2 gap-6">
          {services.map((s, i) => (
            <Reveal key={s.title} delay={i * 80}>
              <div className="glass gold-glow rounded-2xl p-8 h-full relative overflow-hidden group">
                <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold-500/60 to-transparent" />
                <div className="flex items-start gap-5">
                  <div className="shrink-0 h-12 w-12 rounded-xl border border-gold-500/30 bg-gold-500/5 flex items-center justify-center text-gold-500 group-hover:text-gold-400 transition-colors">
                    <s.icon size={22} />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-text-primary mb-3">{s.title}</h3>
                    <p className="text-text-secondary leading-relaxed">{s.desc}</p>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
