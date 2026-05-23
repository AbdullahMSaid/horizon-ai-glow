Update the Pricing section (`src/components/Pricing.tsx`) to reflect a consultation-first model instead of dollar-based pricing.

**Data changes:**
1. Replace each tier's price display:
   - Starter: `"Quoted per session"` (single-line, no unit)
   - Growth: `"Custom scoped"` (single-line, no unit)
   - Partner: `"Retainer — let's talk"` (single-line, no unit)
2. Change all three card CTAs to `"Book a Discovery Call"`.
3. Add a line above the pricing card grid:
   > "Every engagement starts with a free 30-minute discovery call. No commitment, no pressure — just clarity on what's possible."

**UI changes:**
- Combine price + unit into a single string so the display renders cleanly as one line.
- Insert the new intro line between the `<SectionTitle>` and the card grid (`<div className="mt-16 grid ...">`).
- Keep existing card styling, "Most Popular" badge, and feature lists untouched.