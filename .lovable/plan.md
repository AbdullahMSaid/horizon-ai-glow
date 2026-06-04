## Problem
The "Professional AI Consulting" pill in the Hero section has two issues:
1. **Desktop**: Sits too close to the fixed navbar, needs more breathing room.
2. **Mobile**: The wide `tracking-[0.4em]` text overflows the viewport and gets clipped by the section's `overflow-hidden`, causing the pill to disappear entirely.

## Fix
Update the pill wrapper in `src/components/Hero.tsx` with responsive adjustments:
- Add top margin to push it down from the navbar on desktop (`mt-6 md:mt-10` or similar).
- Reduce letter-spacing on small screens: `tracking-[0.15em] sm:tracking-[0.4em]`.
- Reduce horizontal padding on mobile: `px-3 sm:px-5`.
- Optionally reduce font size slightly on mobile so it doesn't break layout.

## Files
- `src/components/Hero.tsx` — one targeted edit to the pill's CSS classes.