Update the decorative `LogoMark` watermark in `src/components/Hero.tsx`:

- Reduce size from `h-[420px] w-[420px]` to `h-[250px] w-[250px]` (~60%).
- Reposition from negative offsets (`right-[-60px] bottom-[-40px]`) to safe inset values (`right-10 bottom-10`) so it's fully visible, not cropped.
- Increase opacity from `text-gold-500/[0.04]` to `text-gold-500/[0.35]` for a clear watermark feel.
- Keep `hidden lg:block` and `pointer-events-none` so it stays a desktop-only decorative element.