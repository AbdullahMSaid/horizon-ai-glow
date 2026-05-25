import { useState } from "react";
import SectionTitle from "./SectionTitle";
import Reveal from "./Reveal";

export default function Contact() {
  const [name, setName] = useState("");
  const [company, setCompany] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(false);
  const [attempted, setAttempted] = useState(false);

  const isEmpty = (v: string) => v.trim().length === 0;
  const showError = (v: string) => attempted && isEmpty(v);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setAttempted(true);
    setError(false);

    if (isEmpty(name) || isEmpty(email) || isEmpty(message)) return;

    setIsSubmitting(true);
    try {
      const response = await fetch("https://formspree.io/f/mqejyzjw", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({ name, company, email, message }),
      });
      if (response.ok) {
        setSubmitted(true);
      } else {
        setError(true);
      }
    } catch {
      setError(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  const baseInput =
    "w-full bg-navy-900/60 border rounded-md px-4 py-3 text-text-primary placeholder:text-text-secondary/60 focus:outline-none focus:ring-2 transition-all";
  const inputCls = (invalid: boolean) =>
    `${baseInput} ${
      invalid
        ? "border-red-500 focus:border-red-500 focus:ring-red-500/30"
        : "border-gold-500/40 focus:border-gold-500 focus:ring-gold-500/30"
    }`;

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
          <div className="mt-14 glass rounded-2xl p-8 md:p-10">
            {submitted ? (
              <p className="text-center text-gold-500 text-lg md:text-xl font-medium py-10">
                ✓ Message received — we'll be in touch within 24 hours.
              </p>
            ) : (
              <form onSubmit={handleSubmit} noValidate className="space-y-5">
                <div className="grid md:grid-cols-2 gap-5">
                  <div>
                    <label className="text-xs uppercase tracking-widest text-gold-500 mb-2 block">Name</label>
                    <input
                      name="name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className={inputCls(showError(name))}
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label className="text-xs uppercase tracking-widest text-gold-500 mb-2 block">Company</label>
                    <input
                      name="company"
                      value={company}
                      onChange={(e) => setCompany(e.target.value)}
                      className={inputCls(false)}
                      placeholder="Company name"
                    />
                  </div>
                </div>
                <div>
                  <label className="text-xs uppercase tracking-widest text-gold-500 mb-2 block">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className={inputCls(showError(email))}
                    placeholder="you@company.com"
                  />
                </div>
                <div>
                  <label className="text-xs uppercase tracking-widest text-gold-500 mb-2 block">Message</label>
                  <textarea
                    name="message"
                    rows={5}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className={inputCls(showError(message))}
                    placeholder="Tell us about your goals..."
                  />
                </div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="gold-gradient-btn w-full md:w-auto inline-flex justify-center items-center px-8 py-3.5 rounded-md font-semibold disabled:opacity-60"
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </button>
                {error && (
                  <p className="text-red-500 text-sm">
                    Something went wrong. Please email hello@horizonaisolutions.com directly.
                  </p>
                )}
              </form>
            )}
          </div>
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
