---
name: Hazem Lenin Portfolio
description: A quiet, editorial single-page portfolio for a product-minded full-stack engineer
colors:
  paper: "#faf7f2"
  paper-dark: "#14120f"
  raised: "#ffffff"
  raised-dark: "#1c1915"
  ink: "#1a1a1a"
  ink-dark: "#ede8e0"
  soft: "#6b6459"
  soft-dark: "#9c9488"
  line: "#e5dfd4"
  line-dark: "#2a261f"
  accent: "#a0764b"
  accent-dark: "#c49a6c"
  accent-text: "#8f6440"
  accent-text-dark: "#c49a6c"
typography:
  display:
    fontFamily: "Fraunces Variable, Georgia, serif"
    fontSize: "2.25rem (3rem ≥640px)"
    fontWeight: 400
    lineHeight: 1.25
    letterSpacing: "-0.025em"
  headline:
    fontFamily: "Fraunces Variable, Georgia, serif"
    fontSize: "1.5rem (1.875rem ≥640px)"
    fontWeight: 400
    lineHeight: 1.3
    letterSpacing: "-0.025em"
  title:
    fontFamily: "Fraunces Variable, Georgia, serif"
    fontSize: "1.125rem–1.25rem"
    fontWeight: 400
    letterSpacing: "-0.025em"
  body:
    fontFamily: "Inter Variable, system-ui, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.625
  label:
    fontFamily: "Inter Variable, system-ui, sans-serif"
    fontSize: "0.875rem"
    fontWeight: 500
    letterSpacing: "0.025em"
rounded:
  full: "9999px"
  none: "0px"
spacing:
  section-y: "4rem"
  container-x: "1.5rem"
  container-max: "56rem"
  content-max: "42rem"
components:
  button-primary:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.paper}"
    rounded: "{rounded.full}"
    padding: "10px 20px"
  link-underline:
    textColor: "{colors.soft}"
    typography: "{typography.body}"
---

# Design System: Hazem Lenin Portfolio

## 1. Overview

**Creative North Star: "The Reading Room"**

This is a single page meant to be read, not scanned past. Warm paper tones, a serif display face, and hairline dividers give it the quiet confidence of a well-set personal essay rather than a marketing site. Nothing here is trying to convert a visitor with urgency; it's trying to earn attention through precision — tight type, deliberate spacing, one accent color used sparingly as a signature rather than a decoration.

The system explicitly rejects the generic AI-portfolio template: no gradient text, no uppercase eyebrow labels stacked above every section, no numbered 01/02/03 scaffolding, no icon-card grids, no hero-metric stat blocks. Sections are separated by hairline rules and generous vertical rhythm, not by cards or boxed containers. Depth comes from color and line weight, never from shadow.

Motion follows the same restraint: Lenis smooth scrolling and a single once-per-section reveal (fade + 1rem rise over 0.6s ease) driven by IntersectionObserver. Both are gated behind `prefers-reduced-motion: no-preference`; the reduced-motion experience is fully static content, visible by default. Reveals enhance already-visible content — never gate it.

**Key Characteristics:**
- Warm paper background in light mode, warm near-black in dark mode — never pure white or pure black
- Fraunces serif for display moments only (name, section titles, item headings, email); Inter for everything functional
- One accent color (warm terracotta-tan) used only for labels, marks, timeline dots, and hover states — never for large surfaces
- Fully flat: no shadows, no elevation, no glass
- A single em-dash (`—`) as the section marker, replacing eyebrow labels or numbering
- One photograph: the circular hero portrait with a hairline border — the page's only imagery
- Lucide icons (`@lucide/astro`, 20px, stroke-width 1.5) as the only iconography

## 2. Colors

A warm, desaturated palette anchored in paper tones, with one terracotta-tan accent that appears only in small doses.

### Primary
- **Terracotta-Tan** (`#a0764b` light / `#c49a6c` dark): the only saturated color in the system. Used for section-heading em-dash marks, experience-timeline dots, link underline hovers, and text selection. Never used as a background or on more than a handful of small elements per screen.
- **Legible Tan** (`#8f6440` light / `#c49a6c` dark): the text-safe variant of the accent. Base accent fails WCAG AA (~3.79:1) against paper at text sizes, so any accent-colored *text* (hero role line, skill group labels) uses this darker shade instead. In dark mode the base accent already clears AA (~7.3:1), so both tokens share one value.

### Neutral
- **Paper** (`#faf7f2` light / `#14120f` dark): the page background. A warm off-white in light mode, a warm near-black in dark mode — chosen deliberately over stark white/black to keep the "reading room" warmth, but kept subtle enough not to read as a beige SaaS template.
- **Raised** (`#ffffff` light / `#1c1915` dark): reserved for any surface that needs to sit visually above paper (currently only the translucent nav backdrop and the mobile menu panel).
- **Ink** (`#1a1a1a` light / `#ede8e0` dark): primary text color and the primary-button background/foreground pairing.
- **Soft** (`#6b6459` light / `#9c9488` dark): secondary text — taglines, descriptions, nav links at rest.
- **Line** (`#e5dfd4` light / `#2a261f` dark): hairline borders, dividers, underline decoration color, the experience timeline spine.

### Named Rules
**The One Accent Rule.** Terracotta-tan appears only on labels, marks, underlines, timeline dots, and hover states — never as a fill on any element larger than an icon or a few words of text. Its scarcity is what makes it read as a signature, not a theme color.

**The Legible Accent Rule.** Accent-colored text at body/label sizes always uses `accent-text` (`#8f6440`), never raw `accent` (`#a0764b`) — the base accent fails AA contrast on paper. Non-text accent uses (marks, dots, underline decorations, selection) keep the base accent.

**The Warm-Neutral Rule.** Every neutral (paper, ink, soft, line) shares the same warm hue lean in both light and dark mode. Don't introduce a cool gray anywhere in the system; it will read as mismatched against the serif/paper aesthetic.

## 3. Typography

**Display Font:** Fraunces Variable (with Georgia, serif fallback)
**Body Font:** Inter Variable (with system-ui, sans-serif fallback)

**Character:** A classic serif/humanist-sans pairing — Fraunces carries warmth and editorial weight at display sizes, Inter stays out of the way for everything read at length. The contrast axis (serif vs. humanist sans) is the pairing; never introduce a second serif or a second geometric sans alongside them.

### Hierarchy
- **Display** (400 weight, `2.25rem` → `3rem` ≥640px, 1.25 line-height, tight tracking): the person's name in the hero. Fraunces only.
- **Headline** (400 weight, `1.5rem` → `1.875rem` ≥640px, tight tracking): section headings and the large Contact email link. Fraunces.
- **Title** (400 weight, `1.125rem`–`1.25rem`, tight tracking): item-level headings — job role + company, project names, degree. Fraunces.
- **Body** (400 weight, `1rem` at 1.625 line-height; `0.9375rem` for experience highlights, `0.875rem` for list content): taglines, descriptions, skill lists. Capped near 65ch via the `max-w-xl`/`max-w-2xl` content widths.
- **Label** (500 weight, `0.875rem`, slight tracking): the hero role line and skill group labels — always in Legible Tan (`accent-text`), plus nav links and footer copy in soft/ink.

### Named Rules
**The Serif-Only-For-Weight Rule.** Fraunces is reserved for moments that carry visual weight (name, section titles, item headings, the contact email). Never use it for body copy, labels, or navigation — Inter carries all of that.

## 4. Elevation

Fully flat. There are no shadows anywhere in the system; depth and separation are conveyed entirely through hairline borders (`line`) and background-color contrast (paper vs. raised). The sticky nav uses a translucent paper background (`bg-paper/80`) with backdrop-blur to separate from scrolled content — the closest thing to "elevation" the system permits. The mobile menu panel separates with a hairline border and opaque paper background, not a shadow.

### Named Rules
**The No-Shadow Rule.** Never add `box-shadow` to any component. If a surface needs to read as "above" another, use a hairline border or a background-color shift instead.

## 5. Components

Every component favors restraint: hairline borders over containers, underlines over buttons where possible, and exactly one filled button style reserved for the single primary action (downloading the CV).

### Buttons
- **Shape:** fully pill-rounded (`border-radius: 9999px`)
- **Primary:** ink background, paper text, `10px 20px` padding, `0.875rem` medium weight. Used once per page — the "Download CV" action. Hover reduces opacity to 80%, no color shift.
- **Secondary:** there is no secondary button. Every other action (GitHub, LinkedIn, Email, project links) is an underlined text link — see Links.

### Links
- **Style:** soft text at rest, underlined with the hairline `line` color at `underline-offset: 4px` (8px for the large Contact email), transitioning to ink text with accent-colored underline on hover/focus.
- This underline treatment is the system's default interactive affordance — reach for it before reaching for a button.

### Section Headings
- **Style:** Fraunces headline type preceded by a single accent-colored em dash (`—`) as the only section marker. No numbering, no uppercase eyebrow line. `scroll-margin-top: 6rem` so anchor jumps clear the sticky nav.

### Navigation
- **Style:** sticky top bar, `bg-paper/80` with backdrop-blur, bottom hairline border. Links are soft at rest, ink on hover, no underline in the nav itself (underline is reserved for in-content links).
- **Mobile:** collapses to a native `<details>/<summary>` hamburger (Lucide Menu/X swap) opening a right-aligned dropdown panel — opaque paper background, hairline border, hairline row dividers, explicitly `shadow-none`. Menu closes on link tap. No JS framework, no portal.

### Experience Timeline
- **Style:** the system's signature list treatment. An ordered list with a hairline left border as the spine and a 10px accent-filled dot marking each entry. Entry headings in Fraunces title type; highlights as a plain list with small accent `·` markers, never icon bullets or cards.

### Skills List
- **Style:** definition list (`dl`) with full-width hairline dividers between rows (`divide-y border-y`) instead of a card grid. Group label in Legible Tan label type, values joined with ` · ` in soft body type. This is the system's answer to "how do we NOT build a card grid" for tag-like content.

### Icons
- **Style:** Lucide (`@lucide/astro`) exclusively — 20px (`size-5`), stroke-width 1.5, always `aria-hidden` with an accessible label on the interactive parent. Current set: Menu, X, Sun, Moon, ArrowUpRight (external project links, inline 16px). Never mix icon families or add filled/duotone variants.

### Theme Toggle
- **Style:** icon-only button, Lucide Sun/Moon swap via `dark:` variants, no background or border — sits inline with nav links at the same soft/hover-ink treatment. Persists to `localStorage`, initial state from stored preference or `prefers-color-scheme`.

### Hero Portrait
- **Style:** the page's single photograph. Circular crop (`border-radius: 9999px`), hairline `line` border, 144px mobile / 192px desktop, eager-loaded. No decoration beyond the border — no ring, no glow, no offset frame.

## 6. Do's and Don'ts

### Do:
- **Do** keep every neutral warm-hued (paper, ink, soft, line) in both light and dark mode — that warmth is the brand, not an accident.
- **Do** use the accent sparingly: marks, timeline dots, underline hovers, selection color. If accent starts covering more than a small fraction of any screen, pull it back.
- **Do** use `accent-text` (`#8f6440`) for any accent-colored text at body/label sizes — raw accent fails AA on paper.
- **Do** use hairline borders (`line`) and background contrast for all separation and depth. Flat is the rule.
- **Do** reserve Fraunces serif for name, section headings, item headings, and the contact email — the highest-weight moments only.
- **Do** default to underlined text links for secondary actions; reserve the single filled pill button for the one primary action (CV download).
- **Do** gate all motion (Lenis, reveals, theme transitions) behind `prefers-reduced-motion: no-preference`, with content visible by default.

### Don't:
- **Don't** add box-shadows, glassmorphism, or any glow/elevation effect — this system is fully flat by design (the nav's backdrop-blur is the single sanctioned exception).
- **Don't** add gradient text (`background-clip: text` with a gradient) anywhere.
- **Don't** add uppercase tracked eyebrow labels above section headings, or numbered markers (01/02/03) — the single accent-colored em dash is the only section marker this system uses.
- **Don't** build icon+heading+text card grids for skills, projects, or experience — use hairline-divided lists or the timeline treatment instead. These are the "generic AI-template look" PRODUCT.md names as the anti-reference.
- **Don't** introduce a cream/sand/beige tint beyond the already-committed paper tone — don't lighten or desaturate further "for elegance."
- **Don't** pair Fraunces with any other serif, or Inter with any other geometric/humanist sans — the pairing is fixed.
- **Don't** set text in raw accent (`#a0764b`) on paper at sizes below 24px — it fails WCAG AA (~3.79:1). Use `accent-text`.
- **Don't** add a second photograph or decorative imagery — the hero portrait is the page's only image; typography and rhythm carry the rest.
