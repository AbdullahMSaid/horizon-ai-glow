import SectionTitle from "./SectionTitle";
import Reveal from "./Reveal";
import { Check, ArrowUpRight, Play } from "lucide-react";
import flowledgerPreview from "@/assets/flowledger-preview.webp";

const FLOWLEDGER_URL = "https://flowledgerai.com";

const benefits = [
  "Visualize workflows in real time",
  "Identify bottlenecks with AI analysis",
  "Track task progress across teams",
  "Built with the same tools we implement for clients",
];

export default function Portfolio() {
  return (
    <section id="portfolio" className="relative py-24 border-y border-gold-500/20">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <SectionTitle
          eyebrow="Portfolio"
          title="We Build What We Sell"
          intro="Every tool we recommend, we've built ourselves. Flowledger AI is our flagship product — a live proof of concept for the AI workflow solutions we bring to your organization."
          center
        />

        <Reveal>
          <div
            className="mt-16 mx-auto max-w-6xl rounded-2xl overflow-hidden"
            style={{
              border: "1px solid rgba(230,164,76,0.3)",
              background: "rgba(8,17,30,0.6)",
              backdropFilter: "blur(16px)",
              WebkitBackdropFilter: "blur(16px)",
              boxShadow: "0 0 40px rgba(230,164,76,0.12)",
            }}
          >
            <div className="grid lg:grid-cols-5 gap-0">
              {/* LEFT — Info panel (40%) */}
              <div className="lg:col-span-2 p-8 lg:p-10 flex flex-col">
                {/* Live tag */}
                <div className="inline-flex items-center gap-2 self-start px-3 py-1.5 rounded-full bg-gold-500/10 border border-gold-500/30">
                  <span className="relative flex h-2 w-2">
                    <span className="absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75 animate-ping" />
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400" />
                  </span>
                  <span className="text-[10px] tracking-[0.25em] uppercase font-semibold text-gold-400">
                    Live Product
                  </span>
                </div>

                <h3 className="mt-6 text-3xl md:text-4xl font-bold gold-text-gradient">
                  Flowledger AI
                </h3>
                <p className="mt-2 text-text-secondary text-sm tracking-wide uppercase">
                  AI-Powered Workflow Intelligence
                </p>

                <p className="mt-5 text-text-secondary leading-relaxed">
                  Flowledger AI helps teams map, monitor, and optimize how work actually moves
                  through their organization. Built entirely with modern AI tooling — from
                  ideation to deployment — it's the foundation of everything we teach and
                  implement for clients.
                </p>

                <ul className="mt-6 space-y-3 flex-1">
                  {benefits.map((b) => (
                    <li key={b} className="flex items-start gap-3 text-text-secondary text-sm">
                      <Check size={16} className="text-gold-500 mt-0.5 shrink-0" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>

                <a
                  href={FLOWLEDGER_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="gold-gradient-btn mt-8 inline-flex items-center justify-center gap-2 px-6 py-3 rounded-md font-semibold self-start"
                >
                  Visit Flowledger AI
                  <ArrowUpRight size={18} />
                </a>
              </div>

              {/* RIGHT — Site preview (60%) */}
              <div className="lg:col-span-3 p-8 lg:p-10 lg:pl-0">
                <a
                  href={FLOWLEDGER_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group block rounded-xl overflow-hidden border border-gold-500/20 hover:border-gold-500/60 transition-all duration-300 hover:shadow-[0_0_40px_rgba(230,164,76,0.25)]"
                >
                  {/* Browser chrome */}
                  <div className="flex items-center gap-2 px-4 py-2.5 bg-navy-950/80 border-b border-gold-500/15">
                    <div className="flex gap-1.5">
                      <span className="h-2.5 w-2.5 rounded-full bg-red-500/70" />
                      <span className="h-2.5 w-2.5 rounded-full bg-yellow-500/70" />
                      <span className="h-2.5 w-2.5 rounded-full bg-green-500/70" />
                    </div>
                    <div className="ml-3 flex-1 text-center">
                      <span className="inline-block px-3 py-0.5 rounded text-xs text-text-secondary bg-navy-900/80 border border-gold-500/10">
                        flowledgerai.com
                      </span>
                    </div>
                  </div>

                  {/* Preview area */}
                  <div className="relative aspect-[16/10] bg-navy-950 overflow-hidden">
                    <img
                      src={flowledgerPreview}
                      alt="Flowledger AI website preview"
                      className="absolute inset-0 w-full h-full object-contain object-top bg-white transition-all duration-300 group-hover:brightness-110"
                    />

                    {/* Bottom dark gradient to blend with stat chips */}
                    <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-navy-950 via-navy-950/70 to-transparent pointer-events-none" />

                    {/* Center overlay CTA */}
                    <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                      <div className="flex flex-col items-center gap-3 transition-transform duration-300 group-hover:scale-105">
                        <div className="h-16 w-16 rounded-full bg-gold-500/20 border border-gold-500/60 backdrop-blur-md flex items-center justify-center group-hover:bg-gold-500/40 transition-all shadow-[0_0_24px_rgba(230,164,76,0.35)]">
                          <Play size={24} className="text-gold-400 ml-1" fill="currentColor" />
                        </div>
                        <span className="px-3 py-1 rounded-full bg-navy-950/80 border border-gold-500/30 text-gold-400 text-xs tracking-widest uppercase font-semibold">
                          View Live Site
                        </span>
                      </div>
                    </div>
                  </div>
                </a>

                {/* Stat chips */}
                <div className="mt-5 flex flex-wrap gap-2 justify-center">
                  {["AI-Powered", "Live & Active", "Built In-House"].map((s) => (
                    <span
                      key={s}
                      className="px-4 py-1.5 rounded-full text-xs font-medium text-gold-400 bg-navy-900/60 border border-gold-500/25 backdrop-blur-sm"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </Reveal>

        {/* Coming Soon card */}
        <Reveal delay={150}>
          <div
            className="mt-12 mx-auto max-w-6xl rounded-2xl flex flex-col items-center justify-center text-center px-6"
            style={{
              minHeight: "180px",
              border: "1px dashed rgba(230,164,76,0.2)",
              opacity: 0.4,
            }}
          >
            <span className="text-xs tracking-[0.4em] uppercase text-text-secondary">
              Next Case Study
            </span>
            <p className="mt-3 text-text-primary text-base">
              Currently in development — check back soon
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
