import { useState } from "react";
import SectionTitle from "./SectionTitle";
import Reveal from "./Reveal";
import { toast } from "sonner";

export default function Contact() {
  const [sent, setSent] = useState(false);

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSent(true);
    toast.success("Message received — we'll be in touch shortly.");
    (e.target as HTMLFormElement).reset();
    setTimeout(() => setSent(false), 3000);
  }

  const inputCls =
    "w-full bg-navy-900/60 border border-gold-500/15 rounded-md px-4 py-3 text-text-primary placeholder:text-text-secondary/60 focus:outline-none focus:border-gold-500 focus:ring-2 focus:ring-gold-500/30 transition-all";

  return (
    <section id="contact" className="relative py-28">
      <div className="max-w-5xl mx-auto px-6 lg:px-10">
        <SectionTitle
          eyebrow="Get in touch"
          title="Ready to Move Forward?"
          intro="Book a free 30-minute discovery call and let's explore what AI can do for your team."
          center
        />

        <Reveal>
          <form onSubmit={onSubmit} className="mt-14 glass rounded-2xl p-8 md:p-10 space-y-5">
            <div className="grid md:grid-cols-2 gap-5">
              <div>
                <label className="text-xs uppercase tracking-widest text-gold-500 mb-2 block">Name</label>
                <input required name="name" className={inputCls} placeholder="Your name" />
              </div>
              <div>
                <label className="text-xs uppercase tracking-widest text-gold-500 mb-2 block">Company</label>
                <input name="company" className={inputCls} placeholder="Company name" />
              </div>
            </div>
            <div>
              <label className="text-xs uppercase tracking-widest text-gold-500 mb-2 block">Email</label>
              <input required type="email" name="email" className={inputCls} placeholder="you@company.com" />
            </div>
            <div>
              <label className="text-xs uppercase tracking-widest text-gold-500 mb-2 block">Message</label>
              <textarea required name="message" rows={5} className={inputCls} placeholder="Tell us about your goals..." />
            </div>
            <button
              type="submit"
              disabled={sent}
              className="gold-gradient-btn w-full md:w-auto inline-flex justify-center items-center px-8 py-3.5 rounded-md font-semibold disabled:opacity-60"
            >
              {sent ? "Sent ✓" : "Send Message"}
            </button>
          </form>
        </Reveal>

        <p className="mt-8 text-center text-text-secondary">
          Prefer email?{" "}
          <a href="mailto:abdullahi_said1@outlook.com" className="text-gold-500 hover:text-gold-400 transition-colors">
            abdullahi_said1@outlook.com
          </a>
        </p>
      </div>
    </section>
  );
}
