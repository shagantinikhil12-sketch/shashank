# design.md — Master Prompt
# Photo & Video Editor Portfolio (AGNO Style)

---

## 🎯 Project Overview

Build a **cinematic, editorial-style portfolio website** for a photo and video editor.
Inspired by the AGNO Creative Agency WordPress Theme — dark, high-fashion, dramatic.
The site must feel like a premium creative studio: bold typography, full-bleed imagery,
minimal UI chrome, and intentional whitespace.

---

## 🎨 Design System

### Color Palette

| Token          | Value     | Usage                        |
|----------------|-----------|------------------------------|
| `--bg-dark`    | `#0a0a0a` | Primary background           |
| `--bg-card`    | `#111111` | Cards, sections              |
| `--bg-light`   | `#f0f0f0` | Services section background  |
| `--text-white` | `#ffffff` | Primary text on dark         |
| `--text-muted` | `#888888` | Secondary / labels           |
| `--text-dark`  | `#0a0a0a` | Text on light sections       |
| `--accent`     | `#c9a84c` | Gold hover accents (optional)|

### Typography

| Role            | Font                          | Style                          |
|-----------------|-------------------------------|--------------------------------|
| Hero Display    | Neue Haas Grotesk / Helvetica | All caps, 10–14vw, weight 700  |
| Section Heading | Same grotesque or thin serif  | Large, left-aligned            |
| Labels          | Same, uppercase               | 10–11px, letter-spacing 0.2em  |
| Body            | DM Sans / Lato                | 15–17px, weight 300–400        |
| Footer Giant    | Same grotesque                | ~8vw, opacity 0.06, faded      |

### Spacing Scale

```
xs:  8px
sm:  16px
md:  32px
lg:  64px
xl:  120px
2xl: 200px
```

---

## 🗂️ Page Sections (in order)

---

### 1. NAVBAR

- **Position:** Fixed, top of page, full width
- **Left:** Logo (initials only, e.g. "AK" or "VS") — small, monospaced
- **Right:** Links — `Home` · `Works` · `Services` · `Blog` · `Contact` · `Discover more ↗`
- **Style:** Transparent background, white text, no border
- **Font size:** 12–13px, uppercase, letter-spacing: 0.1em
- **Behavior:** Stays visible on scroll (position: fixed)

---

### 2. HERO SECTION

- **Height:** 100vh, full bleed
- **Background:** Cinematic portrait photo — dramatic color grade (split red/blue tone,
  double exposure effect, or moody studio lighting). Use a high-contrast editorial image.
- **Overlay:** Subtle dark gradient at bottom (linear-gradient to top, rgba(0,0,0,0.3))
- **Main Text:**
  - Oversized white text, all caps
  - Text: `PHOTO & VIDEO EDITOR` or `VISUAL STORYTELLER`
  - Font size: ~10–14vw
  - Positioned center-left or full width
  - **MUST bleed off left AND right screen edges** (overflow: hidden on wrapper)
  - Letter-spacing: -0.02em (tight)
- **Tagline:**
  - Bottom-right corner
  - 2 lines: `"Visual storytelling fueled`
  - `by passion and craft."`
  - Font size: 13–14px, weight 300, white
- **No CTA button** — links are in navbar

---

### 3. ABOUT SECTION

- **Background:** `#0a0a0a` (dark)
- **Layout:** Two-column
  - Left (60%): Large paragraph text
  - Right (40%): Supporting smaller text + "Discover more →" link
- **Small Label (top-left):** `WHO WE ARE` — uppercase, 10px, muted color, letter-spacing: 0.25em
- **Main Text (left):**
  > "We craft visuals fueled by passion and innovation.
  > Our mission is to transform moments into timeless, stunning stories."
  - Font size: 28–36px, weight 300, white, line-height: 1.4
- **Secondary Text (right):**
  > Short paragraph about tools, experience, creative approach.
  - Font size: 14px, muted gray
- **Link:** `Discover more →` — white, underline on hover, 13px
- **Padding:** 120px top/bottom

---

### 4. PORTFOLIO / WORKS SECTION

- **Background:** `#0a0a0a`
- **Marquee Strip:**
  - Full-width horizontally scrolling text (CSS animation, infinite loop)
  - Text: `latest works · latest works · latest works ·`
  - Font size: ~6–8vw, weight 700, color: `rgba(255,255,255,0.06)` (very faint)
  - Positioned behind the grid (z-index layering)
- **Grid:**
  - Asymmetric masonry layout — 3 columns, 9 images
  - Column 1: 2 tall portrait images
  - Column 2: 1 wide landscape + 1 square + 1 portrait
  - Column 3: 2 square images + 1 tall
  - Gap: 8–12px between items
  - No borders, no captions
  - **Hover effect:** scale(1.02), brightness(1.1), transition 0.4s ease
- **Image types to include:** portraits, double-exposure, nature/flowers, landscapes,
  fashion, abstract light — all with cinematic color grades

---

### 5. SERVICES SECTION

- **Background:** `#f0f0f0` (light — high contrast from dark sections)
- **Layout:** Full-width list, each service as a row with horizontal rule divider
- **Each row:**
  - Left (40%): Service name — very large font (48–64px), weight 300, dark
  - Right (55%): 2–3 line description — 14px, gray, weight 400
  - Bottom: `<hr>` divider line, `#cccccc`, 1px
- **Services:**
  1. **Photo Editing** — Professional retouching, skin correction, color enhancement
  2. **Color Grading** — Cinematic LUT-based grading for photos and video
  3. **Video Editing** — Cut, pace, and story-driven editing for all formats
  4. **Reels & Shorts** — Fast-paced social content optimized for engagement
  5. **Motion Graphics** — Titles, transitions, animated overlays, and lower thirds
- **Padding:** 100px top/bottom, max-width: 900px, centered

---

### 6. CONTACT SECTION

- **Background:** `#ffffff` or `#f5f5f5`
- **Top label:**
  - Green dot (●) + `AVAILABLE FOR WORK` — 11px, uppercase, letter-spacing: 0.2em
  - Dot color: `#22c55e`
- **Giant Heading:**
  - Text: `get in touch`
  - Font size: ~7–9vw, weight 300 or 200 (very thin)
  - Centered, dark color
  - Letter-spacing: -0.03em
- **Social Links (below heading):**
  - `Behance` · `Dribbble` · `Instagram` · `LinkedIn`
  - Plain text links, 13px, dark, underline on hover
  - Centered, spaced with `·` separator
- **No form** — keep it minimal

---

### 7. FOOTER

- **Background:** `#0a0a0a`
- **Top row (3 columns):**
  - Left: `hello@mysite.com` + phone number
  - Center: `HOW TO FIND US` label + address (2 lines)
  - Right: `SOCIAL` label + icon row (Facebook, X, Instagram, LinkedIn, YouTube)
- **Bottom:**
  - Massive faded text: `©2025 — [NAME]`
  - Font size: ~8vw, weight 700, color: `rgba(255,255,255,0.06)`
  - Acts as decorative footer watermark, not readable — purely visual
- **Padding:** 60px top, 20px bottom

---

## ✨ Interactions & Animations

| Element              | Animation                                              |
|----------------------|--------------------------------------------------------|
| Page load            | Staggered fade-in: navbar → hero text → tagline       |
| Hero text            | Slides up from below, opacity 0→1, duration 1.2s      |
| Scroll sections      | Each section fades in on enter (IntersectionObserver) |
| Works marquee        | `translateX` infinite loop, CSS keyframes, 20s linear |
| Portfolio images     | scale(1.02) + brightness on hover, 0.4s ease          |
| Nav links            | Underline slides in from left on hover                 |
| Service rows         | Fade in staggered, left-to-right                       |
| Custom cursor        | Small dot (8px) follows mouse, white, mix-blend-mode: difference |
| "Discover more →"   | Arrow nudges right (+4px) on hover                    |

---

## 📐 Layout Rules

- **Max content width:** 1200px, centered with `margin: 0 auto`
- **Full-bleed sections:** hero, works, footer — `width: 100vw`
- **Section padding:** 120px top/bottom on desktop, 60px on mobile
- **Mobile breakpoint:** 768px — stack columns, reduce font sizes, hide marquee
- **Images:** `object-fit: cover`, lazy loading, no hard borders
- **Overflow:** `overflow: hidden` on hero wrapper (prevents text bleed scrollbar)

---

## 🔧 Tech Stack Recommendation

```
HTML5 + CSS3 + Vanilla JS     → Lightweight, fast, no dependencies
OR
Next.js + Tailwind CSS         → If React preferred
OR
Framer / Webflow               → For no-code implementation
```

**External fonts:**
```html
<link href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@300;400&display=swap" rel="stylesheet">
```
For display font, use: `font-family: 'Helvetica Neue', 'Arial', sans-serif` (system stack)
or import `Neue Haas Grotesk` / `Monument Extended` from Adobe Fonts or similar.

---

## 📋 Content Placeholders

Replace these with your friend's actual info:

| Placeholder        | Replace With                     |
|--------------------|----------------------------------|
| `[NAME]`           | Friend's full name               |
| `[INITIALS]`       | e.g. "AK", "VS", "RJ"           |
| `hello@mysite.com` | Actual email address             |
| `8 800 2345 234`   | Actual phone number              |
| `27 Division St…`  | City / location                  |
| Social URLs        | Actual profile links             |
| Portfolio images   | Friend's actual edited photos    |
| Showreel video     | YouTube / Vimeo embed link       |

---

## ✅ Quality Checklist

- [ ] Hero text bleeds off both screen edges
- [ ] Marquee scrolls infinitely without pause or jump
- [ ] All images have cinematic color treatment (no flat/unedited look)
- [ ] Services section contrast: light bg against dark sections
- [ ] Footer watermark text is barely visible (opacity ~0.06)
- [ ] Custom cursor works on desktop, hidden on mobile
- [ ] Site loads under 3s (optimize images)
- [ ] Mobile layout stacks cleanly at 768px
- [ ] No purple gradients, no Inter font, no generic AI aesthetics
- [ ] "AVAILABLE FOR WORK" green dot is visible and accurate

---

*End of design.md — Master Prompt*
