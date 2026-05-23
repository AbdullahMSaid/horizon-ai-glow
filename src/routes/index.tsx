import { createFileRoute } from "@tanstack/react-router";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import About from "@/components/About";
import Portfolio from "@/components/Portfolio";
import Pricing from "@/components/Pricing";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { Toaster } from "@/components/ui/sonner";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Horizon AI Solutions — Intelligent Systems. Real Results." },
      {
        name: "description",
        content:
          "Luxury AI consultancy delivering strategy, automation, training, and custom AI tools for forward-thinking teams.",
      },
      { property: "og:title", content: "Horizon AI Solutions" },
      {
        property: "og:description",
        content: "AI strategy, workflow automation, workshops, and custom tools — built for scale.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main className="relative">
      <Navbar />
      <Hero />
      <Services />
      <About />
      <Portfolio />
      <Pricing />
      <Contact />
      <Footer />
      <Toaster />
    </main>
  );
}
