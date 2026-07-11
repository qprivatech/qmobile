# Design Brief

## Direction

Qmobile — Swiss-centered privacy phone reseller selling security-focused custom operating system-powered Pixel devices with Q-PWA messaging. Dark-first with light mode support.

## Tone

Confident precision: clean Swiss engineering meets cybersecurity gravitas, with bold multi-color accent borders signaling privacy as a spectrum of control.

## Differentiation

Four distinct accent border colors (blue, green, black, purple) on cards and info balloons — each color signals a different privacy dimension, creating a memorable visual system unlike generic tech stores.

## Color Palette

| Token         | OKLCH (Light)    | OKLCH (Dark)     | Role                        |
|---------------|------------------|------------------|-----------------------------|
| background    | 0.99 0.005 260   | 0.14 0.015 260   | page canvas                 |
| foreground    | 0.15 0.01 260    | 0.92 0.01 260    | primary text                |
| card          | 1.0 0.004 260    | 0.18 0.018 260   | card surfaces               |
| primary       | 0.45 0.18 240    | 0.65 0.2 240     | CTAs, links, focus          |
| accent        | 0.58 0.2 170     | 0.62 0.22 170    | security badges             |
| muted         | 0.94 0.01 260    | 0.22 0.02 260    | secondary surfaces          |
| success       | 0.6 0.16 150     | 0.6 0.16 150     | verified, shipped           |
| warning       | 0.72 0.15 85     | 0.72 0.15 85     | alerts                      |
| destructive   | 0.55 0.22 25     | 0.55 0.22 25     | errors                      |
| border        | 0.9 0.008 260    | 0.28 0.02 260    | dividers, inputs            |
| accent-blue   | 0.45 0.18 240    | 0.65 0.2 240     | system/trust borders        |
| accent-green  | 0.58 0.2 170     | 0.62 0.22 170    | Security-focused OS borders |
| accent-black  | 0.15 0.01 260    | 0.92 0.01 260    | privacy/stealth borders     |
| accent-purple | 0.55 0.2 300     | 0.65 0.2 300     | Q-PWA/messaging borders     |

## Typography

- Display: Space Grotesk — headings, hero, brand voice
- Body: DM Sans — paragraphs, UI labels, forms
- Mono: JetBrains Mono — code snippets, specs, hashes
- Scale: hero `text-5xl md:text-7xl font-bold tracking-tight`, h2 `text-3xl md:text-5xl font-bold tracking-tight`, label `text-sm font-semibold tracking-widest uppercase`, body `text-base`

## Elevation & Depth

Subtle layered shadows: `shadow-subtle` for cards, `shadow-elevated` for modals/hero cards. No heavy drop shadows. Depth via background tiering, 1px borders, and colored accent borders on cards/balloons.

## Structural Zones

| Zone    | Background (Light) | Background (Dark) | Border        | Notes                          |
|---------|-------------------|-------------------|---------------|--------------------------------|
| Header  | card              | card              | border-b      | sticky, lang + theme toggles   |
| Hero    | background        | background        | —             | gradient-primary CTA button    |
| Content | background        | background        | —             | alternate muted/30 sections    |
| Cards   | card              | card              | accent-* 2px  | rounded-xl, shadow-subtle      |
| Balloons| muted/30          | muted/30          | accent-* 2px  | rounded-2xl, used on Why page  |
| Footer  | muted/40          | muted/40          | border-t      | Swiss flag accent, links       |

## Spacing & Rhythm

Section gaps: `py-20 md:py-28`. Content max-width: `max-w-7xl mx-auto px-6`. Card internal: `p-6 md:p-8`. Micro-spacing: `gap-4` for groups, `gap-8` for sections.

## Component Patterns

- Buttons: `rounded-lg`, primary `bg-primary text-primary-foreground`, hover `opacity-90`, focus `ring-2 ring-ring`
- Cards: `rounded-xl bg-card border-2 shadow-subtle`, hover `shadow-elevated transition-smooth`. Border color cycles through accent-blue, accent-green, accent-black, accent-purple
- Balloons: `rounded-2xl bg-muted/30 border-2 p-6`, border color cycles through the four accent colors. Used for Why page summary items
- Badges: `rounded-full px-3 py-1 text-xs font-semibold`, success `bg-success/10 text-success`, accent `bg-accent/10 text-accent`
- Product Labels: `rounded-md px-2 py-0.5 text-xs font-semibold`, Security-focused OS `bg-accent-green/10 text-accent-green`, Qprivat `bg-accent-purple/10 text-accent-purple`
- Inputs: `rounded-md border bg-background px-4 py-2`, focus `ring-2 ring-ring border-primary`

## Motion

- Entrance: staggered `fade-in` 0.6s ease-out for cards and sections
- Hover: `transition-smooth` on all interactive elements, scale `105` on product cards
- Decorative: `pulse-soft` on live/security indicators only

## Constraints

- No raw hex or rgb in components — tokens only
- No purple gradients or generic AI aesthetic
- No blog, live chat, or customer review sections
- Green accent used for security-focused OS labels and borders; purple for Q-PWA messaging
- Black accent used for privacy/stealth themed borders
- Blue accent used for system/trust themed borders
- 3 languages: TR | DE | EN
- No image text overlays anywhere on the site
- No warranty-related text or stock urgency badges

## Signature Detail

Four-color accent border system on cards and info balloons — each color maps to a privacy dimension (blue=system trust, green=security-focused OS, black=stealth privacy, purple=Q-PWA messaging), creating an instantly recognizable visual language for Qmobile.
