---
name: Hazem Lenin Portfolio
description: A quiet, editorial single-page portfolio for a mid-senior full-stack engineer
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
typography:
  display:
    fontFamily: "Fraunces Variable, Georgia, serif"
    fontSize: "clamp(1.875rem, 4vw, 3rem)"
    fontWeight: 400
    lineHeight: 1.15
    letterSpacing: "-0.01em"
  label:
    fontFamily: "Inter Variable, system-ui, sans-serif"
    fontSize: "0.875rem"
    fontWeight: 500
    letterSpacing: "0.1em"
  body:
    fontFamily: "Inter Variable, system-ui, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.6
rounded:
  full: "9999px"
  sm: "0px"
spacing:
  section-y: "4rem"
  container-x: "1.5rem"
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

**Key Characteristics:**
- Warm paper background in light mode, warm near-black in dark mode — never pure white or pure black
- Fraunces serif for display moments only (name, section titles, email); Inter for everything functional
- One accent color (warm terracotta-tan) used only for labels, dividers, and hover states — never for large surfaces
- Fully flat: no shadows, no elevation, no glass
- A single em-dash (`—`) as the section marker, replacing eyebrow labels or numbering

## 2. Colors

A warm, desaturated palette anchored in paper tones, with one terracotta-tan accent that appears only in small doses.

### Primary
- **Terracotta-Tan** (`#a0764b` light / `#c49a6c` dark): the only saturated color in the system. Used for the hero title label, section-heading marks, link underlines on hover, and text selection. Never used as a background or on more than a handful of small elements per screen.

### Neutral
- **Paper** (`#faf7f2` light / `#14120f` dark): the page background. A warm off-white in light mode, a warm near-black in dark mode — chosen deliberately over stark white/black to keep the "reading room" warmth, but kept subtle enough not to read as a beige SaaS template.
- **Raised** (`#ffffff` light / `#1c1915` dark): reserved for any surface that needs to sit visually above paper (currently unused at full opacity except the translucent nav backdrop).
- **Ink** (`#1a1a1a` light / `#ede8e0` dark): primary text color and the primary-button background/foreground pairing.
- **Soft** (`#6b6459` light / `#9c9488` dark): secondary text — taglines, descriptions, nav links at rest.
- **Line** (`#e5dfd4` light / `#2a261f` dark): hairline borders, dividers, underline decoration color.

### Named Rules
**The One Accent Rule.** Terracotta-tan appears only on labels, marks, underlines, and hover states — never as a fill on any element larger than an icon or a few words of text. Its scarcity is what makes it read as a signature, not a theme color.

**The Warm-Neutral Rule.** Every neutral (paper, ink, soft, line) shares the same warm hue lean in both light and dark mode. Don't introduce a cool gray anywhere in the system; it will read as mismatched against the serif/paper aesthetic.

## 3. Typography

**Display Font:** Fraunces Variable (with Georgia, serif fallback)
**Body Font:** Inter Variable (with system-ui, sans-serif fallback)

**Character:** A classic serif/humanist-sans pairing — Fraunces carries warmth and editorial weight at display sizes, Inter stays out of the way for everything read at length. The contrast axis (serif vs. geometric-humanist sans) is the pairing; never introduce a second serif or a second geometric sans alongside them.

### Hierarchy
- **Display** (400 weight, `clamp(1.875rem, 4vw, 3rem)`, 1.15 line-height, `-0.01em` tracking): the person's name in the hero and every section heading. Fraunces only.
- **Title** (400 weight, `1.5rem`/`text-2xl`–`1.875rem`/`text-3xl`, tight tracking): the large email link in Contact; same Fraunces treatment as section headings but standalone.
- **Body** (400 weight, `1rem`, 1.6 line-height): taglines, descriptions, skill lists. Capped near 65ch via the `max-w-xl`/`max-w-2xl` container widths already in use.
- **Label** (500 weight, `0.875rem`, `0.1em`–`0.05em` tracking, occasionally uppercase): the hero title/role line, skill group labels, nav links, footer copyright.

### Named Rules
**The Serif-Only-For-Weight Rule.** Fraunces is reserved for moments that carry the most visual weight on the page (name, section titles, the contact email). Never use it for body copy, labels, or navigation — Inter carries all of that.

## 4. Elevation

Fully flat. There are no shadows anywhere in the system; depth and separation are conveyed entirely through hairline borders (`--line`) and background-color contrast (paper vs. raised). The sticky nav uses a translucent paper background with backdrop-blur to separate from scrolled content, which is the closest thing to "elevation" the system permits.

### Named Rules
**The No-Shadow Rule.** Never add `box-shadow` to any component. If a surface needs to read as "above" another, use a hairline border or a background-color shift instead.

## 5. Components

Every component in this system favors restraint: hairline borders over containers, underlines over buttons where possible, and exactly one filled button style reserved for the single primary action (downloading the résumé).

### Buttons
- **Shape:** fully pill-rounded (`border-radius: 9999px`)
- **Primary:** ink background, paper text, `px-5 py-2.5` padding, `text-sm font-medium`. Used once per page — the "Download CV" action. Hover reduces opacity to 80%, no color shift.
- **Secondary:** there is no secondary button. Every other action (GitHub, LinkedIn, Email, Contact links) is an underlined text link, not a button — see Links below.

### Links
- **Style:** `text-soft` at rest, underlined with `decoration-line` (the hairline color) at `underline-offset-4`, transitioning to `text-ink` with `decoration-accent` on hover/focus.
- This underline treatment is the system's default interactive affordance — reach for it before reaching for a button.

### Section Headings
- **Style:** Fraunces display type preceded by a single accent-colored em dash (`—`) as the only section marker. No numbering, no uppercase eyebrow line above it.

### Navigation
- **Style:** sticky top bar, `bg-paper/80` with `backdrop-blur`, bottom hairline border. Links are `text-soft` at rest, `text-ink` on hover, no underline in the nav itself (underline is reserved for in-content links). Desktop shows the full link row; mobile collapses to the theme toggle only (no hamburger menu currently — the page is short enough for scroll navigation to suffice).

### Skills List
- **Style:** definition list (`dl`) with a full-width hairline divider between rows (`divide-y border-y`) instead of a card grid. Group label in accent-tinted label type, values in soft body type. This is the system's answer to "how do we NOT build a card grid" for tag-like content.

### Theme Toggle
- **Style:** icon-only button, sun/moon SVG swap via `dark:` variants, no background or border — sits inline with nav links at the same `text-soft`/`hover:text-ink` treatment.

## 6. Do's and Don'ts

### Do:
- **Do** keep every neutral warm-hued (paper, ink, soft, line) in both light and dark mode — that warmth is the brand, not an accident.
- **Do** use the accent color sparingly: labels, marks, underline hovers, selection color. If accent starts covering more than a small fraction of any screen, pull it back.
- **Do** use hairline borders (`--line`) and background contrast for all separation and depth. Flat is the rule.
- **Do** reserve Fraunces serif for name, section headings, and the contact email — the highest-weight moments only.
- **Do** default to underlined text links for secondary actions; reserve the single filled pill button for the one primary action (résumé download).

### Don't:
- **Don't** add box-shadows, glassmorphism, or any glow/elevation effect — this system is fully flat by design.
- **Don't** add gradient text (`background-clip: text` with a gradient) anywhere.
- **Don't** add uppercase tracked eyebrow labels above section headings, or numbered markers (01/02/03) — the single accent-colored em dash is the only section marker this system uses.
- **Don't** build icon+heading+text card grids for skills, projects, or experience — use hairline-divided lists or asymmetric layouts instead, matching the existing Skills component.
- **Don't** introduce a cream/sand/beige tint that reads as generic SaaS-template warmth beyond the already-committed paper tone — don't lighten or desaturate further "for elegance."
- **Don't** pair Fraunces with any other serif, or Inter with any other geometric/humanist sans — the pairing is fixed.
