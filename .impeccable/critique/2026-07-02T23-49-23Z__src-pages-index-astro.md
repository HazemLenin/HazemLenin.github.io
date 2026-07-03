---
target: portfolio homepage (src/pages/index.astro)
total_score: 26
p0_count: 1
p1_count: 2
timestamp: 2026-07-02T23-49-23Z
slug: src-pages-index-astro
---
Method: dual-agent (A: general-purpose design review · B: general-purpose detector/browser)
Note: no browser-automation tool available in this environment; Assessment B's browser overlay step was skipped, CLI detector scan stands as deterministic evidence.

## Design Health Score

| # | Heuristic | Score | Key Issue |
|---|-----------|-------|-----------|
| 1 | Visibility of System Status | 3 | No active-section indicator as you scroll |
| 2 | Match System / Real World | 4 | Plain, specific engineer-to-engineer copy |
| 3 | User Control and Freedom | 2 | Mobile nav has no section links at all |
| 4 | Consistency and Standards | 1 | Projects uses a card grid; Skills/Experience use hairline lists |
| 5 | Error Prevention | 3 | n/a, static site |
| 6 | Recognition Rather Than Recall | 2 | Mobile users must remember section order |
| 7 | Flexibility and Efficiency | 3 | CV/email/socials all one click away |
| 8 | Aesthetic and Minimalist Design | 2 | Hero eyebrow + Projects cards violate the doc's own rules |
| 9 | Error Recovery | 3 | n/a |
| 10 | Help and Documentation | 3 | n/a |
| **Total** | | **26/40** | **Acceptable** |

## Anti-Patterns Verdict
LLM: Avoids worst tells (no gradient text, no shadows, no numbered scaffolding, no hero-metric cards) but Hero title is an uppercase eyebrow label and Projects is a bordered card grid — both directly violate DESIGN.md.
Deterministic: detect.mjs --json src → exit 0, zero findings.
Visual overlays: unavailable, no browser-automation tool in this environment.

## Priority Issues

[P0] Education section built but never rendered in index.astro. Fix: import and render <Education />, add nav link.
[P1] Projects section contradicts documented design system (card grid vs. hairline-list convention). Fix: rework as hairline list or asymmetric layout.
[P1] Hero title (Hero.astro:10-12) is an uppercase tracking-widest eyebrow label above the H1. Fix: drop uppercase/tracking-widest treatment.
[P2] Accent-on-paper text (#a0764b on #faf7f2, ~3.79:1) fails WCAG AA for Hero title label and Skills dt labels. Fix: darken light-mode accent for text use or increase size/weight to qualify as large text.
[P3] Mobile nav has no wayfinding — hidden sm:flex drops all section links on mobile. Fix: minimal persistent mobile affordance.

## Persona Red Flags
Jordan (recruiter/first-timer): eyebrow reads as templated; Education invisible; long Experience bullets slow skimming.
Casey (mobile): no nav links on mobile; flex-col-reverse pushes portrait above name/role.
Sam (accessibility): accent text fails AA; no focus-visible styles anywhere in global.css.

## Minor Observations
Footer copyright reads as flat afterthought after strong email CTA. Projects "note" badge is itself a small eyebrow-style label. No focus-visible styles defined.

## Questions to Consider
Why does Projects ignore the hairline-list pattern Skills already establishes? Is Education's absence from index.astro deliberate or an oversight?
