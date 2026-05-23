import { useEffect, useState } from "react";
import Logo from "./Logo";
import { Menu, X } from "lucide-react";

const links = [
  { label: "Services", href: "#services" },
  { label: "About", href: "#about" },
  { label: "Pricing", href: "#pricing" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[rgba(9,20,39,0.85)] backdrop-blur-xl border-b border-gold-500/15"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10 h-20 flex items-center justify-between">
        <a href="#top" className="shrink-0"><Logo /></a>

        <nav className="hidden md:flex items-center gap-10">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm text-text-secondary hover:text-gold-400 transition-colors tracking-wide"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:block">
          <a
            href="#contact"
            className="inline-flex items-center px-5 py-2.5 rounded-md bg-gold-500 text-navy-950 font-semibold text-sm hover:bg-gold-400 transition-colors shadow-[0_0_20px_rgba(230,164,76,0.25)]"
          >
            Book a Call
          </a>
        </div>

        <button
          className="md:hidden text-gold-500"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {open && (
        <div className="md:hidden glass-strong border-t border-gold-500/15">
          <div className="px-6 py-6 flex flex-col gap-5">
            {links.map((l) => (
              <a key={l.href} href={l.href} onClick={() => setOpen(false)}
                 className="text-text-secondary hover:text-gold-400">
                {l.label}
              </a>
            ))}
            <a href="#contact" onClick={() => setOpen(false)}
               className="inline-flex justify-center px-5 py-2.5 rounded-md bg-gold-500 text-navy-950 font-semibold">
              Book a Call
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
