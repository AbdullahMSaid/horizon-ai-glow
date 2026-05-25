import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Cpu, Workflow, Compass, Wrench, ArrowUpRight, MapPin } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import founderBg from "@/assets/founder-bg.webp";

export const Route = createFileRoute("/founder")({
  head: () => ({
    meta: [
      { title: "Founder — Abdullah Said | Horizon AI Solutions" },
      {
        name: "description",
        content:
          "From semiconductor manufacturing at Samsung and enterprise hardware at IBM to founding Horizon AI Solutions — engineering AI systems that work in the real world.",
      },
      { property: "og:title", content: "Founder — Horizon AI Solutions" },
      {
        property: "og:description",
        content:
          "Abdullah Said's journey from IBM and Samsung to founding Horizon AI Solutions and building Flowledger AI.",
      },
    ],
  }),
  component: FounderPage,
});

const EASE = [0.22, 1, 0.36, 1] as const;

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: EASE } },
} as const;

type TimelineItem = {
  org: string;
  role: string;
  period: string;
  description: string;
  featured?: boolean;
};

const timeline: TimelineItem[] = [
  {
    org: "Horizon AI Solutions",
    role: "Founder & AI Consultant",
    period: "2025 — Present",
    featured: true,
    description:
      "Helping companies adopt AI strategically through workshops, automation systems, workflow optimization, and custom AI tooling.",
  },
  {
    org: "Mettler Toledo",
    role: "Solutions Engineer",
    period: "Aug 2025",
    description:
      "Led customer-facing technical solution development, bridging engineering systems with real-world operational business needs.",
  },
  {
    org: "Samsung Austin Semiconductor",
    role: "Process Engineer",
    period: "Nov 2022 — Aug 2025",
    description:
      "Optimized semiconductor manufacturing operations and process performance inside one of the world's most advanced chip fabrication environments.",
  },
  {
    org: "IBM",
    role: "Hardware Engineer",
    period: "Jan 2021 — Sept 2022",
    description:
      "Worked on enterprise hardware systems and large-scale infrastructure technologies. Developed a deep understanding of reliability, systems thinking, and mission-critical engineering.",
  },
];

const capabilities = [
  {
    icon: Compass,
    title: "AI Strategy",
    body: "Executive-level roadmaps that align AI investment with measurable operational outcomes.",
  },
  {
    icon: Cpu,
    title: "AI Workshops",
    body: "Hands-on enablement for leadership and technical teams — from foundations to applied systems.",
  },
  {
    icon: Workflow,
    title: "Workflow Automation",
    body: "Design and implementation of intelligent workflows that remove friction across operations.",
  },
  {
    icon: Wrench,
    title: "Custom Internal Tools",
    body: "Purpose-built AI tooling for the specific bottlenecks slowing your organization down.",
  },
];

function FounderPage() {
  return (
    <main className="relative bg-navy-950 text-text-primary overflow-x-hidden">
      <Navbar />

      {/* SECTION 1 — HERO */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center scale-105"
          style={{ backgroundImage: `url(${founderBg})` }}
          aria-hidden="true"
        />
        <div className="absolute inset-0 bg-[rgba(8,17,30,0.78)]" aria-hidden="true" />
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 55% 45% at 30% 60%, rgba(230,164,76,0.18), transparent 70%), linear-gradient(180deg, rgba(8,17,30,0.55) 0%, rgba(8,17,30,0.95) 100%)",
          }}
          aria-hidden="true"
        />

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10 w-full pt-32 pb-20">
          <motion.div
            initial="hidden"
            animate="show"
            variants={{ show: { transition: { staggerChildren: 0.12 } } }}
            className="max-w-4xl"
          >
            <motion.div variants={fadeUp} className="flex items-center gap-4 mb-8">
              <span className="h-px w-12 bg-gold-500" />
              <span className="text-[11px] tracking-[0.5em] uppercase text-gold-400 font-semibold">
                Founder
              </span>
            </motion.div>

            <motion.h1
              variants={fadeUp}
              className="text-4xl md:text-6xl lg:text-7xl font-bold leading-[1.04] tracking-tight"
            >
              Engineering AI Systems
              <br />
              <span className="gold-text-gradient">That Actually Work</span>
              <br />
              In The Real World
            </motion.h1>

            <motion.div
              variants={fadeUp}
              className="mt-10 h-px max-w-md bg-gradient-to-r from-gold-500/70 via-gold-500/30 to-transparent"
            />

            <motion.p
              variants={fadeUp}
              className="mt-8 text-lg md:text-xl text-text-secondary max-w-2xl leading-relaxed"
            >
              From semiconductor manufacturing and enterprise hardware to workflow intelligence
              and AI consulting —{" "}
              <span className="text-text-primary font-medium">Abdullah Said</span> builds
              practical AI systems designed for operational impact.
            </motion.p>

            <motion.div variants={fadeUp} className="mt-12 flex flex-wrap gap-4">
              <a
                href="#timeline"
                className="gold-gradient-btn inline-flex items-center px-7 py-3.5 rounded-md font-semibold"
              >
                View Experience
              </a>
              <a
                href="https://flowledgerai.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-md border border-gold-500/60 text-gold-400 font-semibold hover:bg-gold-500/10 hover:border-gold-500 transition-all backdrop-blur-sm"
              >
                Explore Flowledger AI
                <ArrowUpRight size={18} />
              </a>
            </motion.div>

            <motion.div
              variants={fadeUp}
              className="mt-16 flex items-center gap-2 text-xs tracking-[0.3em] uppercase text-text-secondary/70"
            >
              <MapPin size={12} className="text-gold-500" />
              Austin · Built Through Systems
            </motion.div>
          </motion.div>
        </div>

        {/* scroll cue */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-2 text-text-secondary/60">
          <span className="text-[10px] tracking-[0.4em] uppercase">Scroll</span>
          <span className="h-12 w-px bg-gradient-to-b from-gold-500/60 to-transparent" />
        </div>
      </section>

      {/* SECTION 2 — TIMELINE */}
      <section id="timeline" className="relative py-32 border-t border-gold-500/15">
        <div className="absolute inset-0 pointer-events-none opacity-[0.04]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(230,164,76,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(230,164,76,0.6) 1px, transparent 1px)",
            backgroundSize: "80px 80px",
          }}
        />
        <div className="relative max-w-6xl mx-auto px-6 lg:px-10">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.4 }}
            variants={fadeUp}
            className="max-w-2xl mb-20"
          >
            <div className="text-[11px] tracking-[0.5em] uppercase text-gold-500 mb-4">
              Built Through Systems
            </div>
            <h2 className="text-3xl md:text-5xl font-bold leading-tight">
              From Manufacturing Systems to{" "}
              <span className="gold-text-gradient">Intelligent Operations</span>
            </h2>
            <p className="mt-6 text-text-secondary text-lg leading-relaxed">
              A career routed through some of the world's most complex manufacturing and
              technology environments — with one consistent thread: solve meaningful problems
              and build systems that scale.
            </p>
          </motion.div>

          {/* Timeline */}
          <div className="relative">
            {/* vertical line */}
            <div
              className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px md:-translate-x-1/2"
              style={{
                background:
                  "linear-gradient(180deg, rgba(230,164,76,0.7) 0%, rgba(230,164,76,0.3) 50%, rgba(230,164,76,0) 100%)",
                boxShadow: "0 0 12px rgba(230,164,76,0.3)",
              }}
              aria-hidden="true"
            />

            <div className="space-y-16 md:space-y-24">
              {timeline.map((item, idx) => {
                const leftSide = idx % 2 === 0;
                return (
                  <motion.div
                    key={item.org}
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.7, ease: EASE }}
                    className={`relative grid md:grid-cols-2 gap-8 md:gap-16 items-center ${
                      leftSide ? "" : "md:[&>*:first-child]:order-2"
                    }`}
                  >
                    {/* node */}
                    <div className="absolute left-4 md:left-1/2 -translate-x-1/2 z-10">
                      <span className="relative flex h-4 w-4">
                        <span className="absolute inline-flex h-full w-full rounded-full bg-gold-500/50 opacity-75 animate-ping" />
                        <span className="relative inline-flex rounded-full h-4 w-4 bg-gold-500 shadow-[0_0_16px_rgba(230,164,76,0.8)] border-2 border-navy-950" />
                      </span>
                    </div>

                    {/* card */}
                    <div className={`pl-12 md:pl-0 ${leftSide ? "md:pr-12 md:text-right" : "md:pl-12"}`}>
                      <div
                        className={`group rounded-2xl p-7 border transition-all duration-300 ${
                          item.featured
                            ? "border-gold-500/40 bg-gradient-to-br from-gold-500/[0.08] to-transparent shadow-[0_0_40px_rgba(230,164,76,0.12)]"
                            : "border-gold-500/15 bg-navy-900/40 hover:border-gold-500/40 hover:bg-navy-900/60"
                        }`}
                        style={{ backdropFilter: "blur(12px)", WebkitBackdropFilter: "blur(12px)" }}
                      >
                        <div
                          className={`text-[10px] tracking-[0.4em] uppercase text-gold-500/80 mb-3 ${
                            leftSide ? "md:justify-end" : ""
                          } flex items-center gap-2`}
                        >
                          {item.period}
                        </div>
                        <h3 className="text-2xl font-bold text-text-primary">{item.org}</h3>
                        <div className="mt-1 text-gold-400 text-sm tracking-wide">
                          {item.role}
                        </div>
                        <p className="mt-4 text-text-secondary leading-relaxed text-[15px]">
                          {item.description}
                        </p>

                        {item.featured && (
                          <div
                            className={`mt-6 rounded-xl p-5 border border-gold-500/30 bg-navy-950/60 ${
                              leftSide ? "md:text-left" : ""
                            }`}
                          >
                            <div className="flex items-center gap-2 mb-3">
                              <span className="relative flex h-2 w-2">
                                <span className="absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75 animate-ping" />
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400" />
                              </span>
                              <span className="text-[10px] tracking-[0.3em] uppercase font-semibold text-emerald-400">
                                Live Project
                              </span>
                            </div>
                            <div className="text-lg font-bold gold-text-gradient">
                              Flowledger AI
                            </div>
                            <p className="mt-2 text-text-secondary text-sm leading-relaxed">
                              An AI workflow intelligence platform designed to map, monitor,
                              and optimize operational workflows in real time.
                            </p>
                            <div
                              className={`mt-4 flex flex-wrap gap-2 ${
                                leftSide ? "md:justify-end" : ""
                              }`}
                            >
                              {[
                                "Workflow Intelligence",
                                "AI Operations",
                                "Process Visibility",
                                "Automation Systems",
                              ].map((tag) => (
                                <span
                                  key={tag}
                                  className="px-3 py-1 rounded-full text-[10px] tracking-wider uppercase font-medium text-gold-400 bg-gold-500/10 border border-gold-500/25"
                                >
                                  {tag}
                                </span>
                              ))}
                            </div>
                          </div>
                        )}
                      </div>
                    </div>

                    {/* spacer column for desktop alternating layout */}
                    <div className="hidden md:block" />
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3 — PHILOSOPHY */}
      <section className="relative py-32 border-t border-gold-500/15 overflow-hidden">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 70% 50% at 50% 50%, rgba(230,164,76,0.10), transparent 70%)",
          }}
        />
        <div
          className="absolute inset-0 pointer-events-none opacity-[0.05]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(230,164,76,0.6) 1px, transparent 1px)",
            backgroundSize: "100% 60px",
          }}
        />
        <div className="relative max-w-5xl mx-auto px-6 lg:px-10 text-center">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.4 }}
            variants={fadeUp}
          >
            <div className="text-[11px] tracking-[0.5em] uppercase text-gold-500 mb-6">
              Philosophy
            </div>
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold leading-[1.1]">
              AI Should Improve Operations —
              <br />
              <span className="gold-text-gradient">Not Just Generate Content.</span>
            </h2>
            <div className="mt-10 mx-auto h-px w-24 bg-gradient-to-r from-transparent via-gold-500 to-transparent" />
            <p className="mt-10 text-lg md:text-xl text-text-secondary max-w-3xl mx-auto leading-relaxed">
              The future belongs to organizations that successfully integrate AI into their
              actual workflows, decision systems, and operational infrastructure. Horizon AI
              Solutions focuses on applied AI systems that create measurable impact.
            </p>
          </motion.div>
        </div>
      </section>

      {/* SECTION 4 — CAPABILITIES */}
      <section className="relative py-32 border-t border-gold-500/15">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.4 }}
            variants={fadeUp}
            className="max-w-2xl mb-16"
          >
            <div className="text-[11px] tracking-[0.5em] uppercase text-gold-500 mb-4">
              Capabilities
            </div>
            <h2 className="text-3xl md:text-5xl font-bold leading-tight">
              Built For{" "}
              <span className="gold-text-gradient">Operational Impact</span>
            </h2>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {capabilities.map((c, i) => (
              <motion.div
                key={c.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, delay: i * 0.08, ease: EASE }}
                className="group relative rounded-2xl p-7 border border-gold-500/15 bg-navy-900/40 hover:border-gold-500/50 hover:-translate-y-1 transition-all duration-300"
                style={{ backdropFilter: "blur(12px)", WebkitBackdropFilter: "blur(12px)" }}
              >
                <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold-500/0 to-transparent group-hover:via-gold-500/60 transition-all duration-500" />
                <div className="h-12 w-12 rounded-xl border border-gold-500/30 bg-gold-500/5 flex items-center justify-center mb-6 group-hover:bg-gold-500/15 group-hover:shadow-[0_0_24px_rgba(230,164,76,0.25)] transition-all">
                  <c.icon size={22} className="text-gold-400" />
                </div>
                <h3 className="text-lg font-semibold text-text-primary">{c.title}</h3>
                <p className="mt-3 text-text-secondary text-sm leading-relaxed">{c.body}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 5 — CONTACT CTA */}
      <section className="relative py-32 border-t border-gold-500/15 overflow-hidden">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 60% 70% at 50% 100%, rgba(230,164,76,0.22), transparent 70%), linear-gradient(180deg, transparent 0%, rgba(8,17,30,0.6) 100%)",
          }}
        />
        <div className="relative max-w-5xl mx-auto px-6 lg:px-10 text-center">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.4 }}
            variants={{ show: { transition: { staggerChildren: 0.1 } } }}
          >
            <motion.div
              variants={fadeUp}
              className="text-[11px] tracking-[0.5em] uppercase text-gold-500 mb-6"
            >
              Get In Touch
            </motion.div>
            <motion.h2
              variants={fadeUp}
              className="text-4xl md:text-6xl lg:text-7xl font-bold leading-[1.05]"
            >
              Let's Build{" "}
              <span className="gold-text-gradient">Smarter Systems.</span>
            </motion.h2>
            <motion.div
              variants={fadeUp}
              className="mt-8 mx-auto h-px w-24 bg-gradient-to-r from-transparent via-gold-500 to-transparent"
            />
            <motion.p
              variants={fadeUp}
              className="mt-8 text-lg md:text-xl text-text-secondary max-w-2xl mx-auto leading-relaxed"
            >
              Whether you need executive AI workshops, workflow automation, or operational AI
              strategy — Horizon AI Solutions helps organizations move from experimentation to
              implementation.
            </motion.p>
            <motion.div
              variants={fadeUp}
              className="mt-12 flex flex-wrap gap-4 justify-center"
            >
              <a
                href="/#contact"
                className="gold-gradient-btn inline-flex items-center px-8 py-4 rounded-md font-semibold shadow-[0_0_30px_rgba(230,164,76,0.35)]"
              >
                Book a Discovery Call
              </a>
              <a
                href="/#contact"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-md border border-gold-500/60 text-gold-400 font-semibold hover:bg-gold-500/10 hover:border-gold-500 transition-all backdrop-blur-sm"
              >
                Contact Me
                <ArrowUpRight size={18} />
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
