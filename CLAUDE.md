# Steel Plant Specialities LLP — Website Project

## Project Overview
A new marketing website for Steel Plant Specialities LLP (SPS), a Mumbai-based B2B manufacturer of specialised metallurgical products (die lubricants, anti-scale coatings, refractory coatings, EP greases, oil cleaners, spray systems). 40+ years in business, global installations across India, Asia, Middle East, USA, and Europe.

The site is a flat HTML/CSS/JS structure hosted (or to be hosted) on Hostinger (PHP hosting). No framework, no build step. All pages live at the root of `sps-new-website/`.

---

## Design System

### Colours
```css
--red:      #eb3d00   /* Primary brand colour */
--red-bg:   rgba(235,61,0,.06)
--dark:     #1a1a1a
--mid:      #444
--grey:     #6b7280
--border:   #e5e7eb
--light:    #f9fafb
```

### Fonts
- **Inter** — all body/UI text
- **IBM Plex Mono** — product names, chip labels, monospace accents

### Buttons
- `.btn.btn-primary` — red background, white text
- `.btn.btn-outline-red` — red border, red text
- `.btn.btn-outline-white` — white border, white text (on dark backgrounds)
- `.btn-lg` — larger size variant
- CTA standard: **"Talk to an Expert"** linking to `contact.html` (single button, no secondary)

---

## File Structure

```
sps-new-website/
├── index.html                  # Homepage
├── products.html               # Products overview (7 categories)
├── industries.html             # Industries page (5 industries)
├── about.html                  # About page
├── contact.html                # Contact + Google Maps embed
│
├── product-[slug].html         # 27 individual product/category pages
│   e.g. product-espon-hr.html, product-die-lubricants.html
│
├── assets/
│   ├── css/main.css            # Global styles
│   └── js/components.js        # Navbar + footer injection
│
└── CLAUDE.md                   # This file
```

---

## Components (components.js)

Navbar and footer are injected via `document.body.insertAdjacentHTML('afterbegin', ...)` in `assets/js/components.js`. Each page sets its active nav item before the script runs:

```html
<script>window.ACTIVE_NAV = 'industries';</script>
<!-- valid values: home, products, industries, about, contact -->
<div id="footer-mount"></div>
<script src="assets/js/components.js"></script>
```

All paths in HTML files must be **relative to root** (e.g. `assets/css/main.css`, `contact.html`) — no subdirectory nesting — to avoid path breakage.

---

## Page-Specific Notes

### index.html (Homepage)
- Hero with two CTAs
- Product categories section: 7 cards in a 3-row structure (red header, white body, white footer). Mobile: horizontal scroll strip with scroll-snap and arrow buttons.
- Industries Served: 5 cards with real images from GitHub raw CDN
- Testimonials, Featured Article, CTA strip sections

### products.html
- 3-column card grid (`repeat(3,1fr)`, 28px gap)
- Cards: image header (220px) with gradient overlay + red strip at bottom showing icon, product count, and name
- Hero: two plain `<p>` tags — no box, no border
- Bottom CTA: single "Talk to an Expert" button

### industries.html
- Sticky nav strip (top: 72px) with "Select Industry" label + 5 tab buttons. JS function `scrollToSection(id)` handles smooth scroll — **do not rename to `scrollTo`** (conflicts with `window.scrollTo`)
- Each industry: 2×2 CSS grid (image | title+actions / products band | solutions panel). Alternate sections use `.industry-grid.reverse` to swap columns
- Mobile: grid collapses to single column in natural reading order
- Product chips: `width: 16ch`, IBM Plex Mono, brand red text, centred
- CTA strip: single "Talk to an Expert" — no Global Presence block

### contact.html
- Google Maps iframe embed (static embed, no API key) for SPS Mumbai location
- Contact form present but backend not yet implemented — deferred to Hostinger deployment

---

## Product Pages Pattern

All 27 product/category pages follow the same structure:
- Page hero with breadcrumb
- Product detail section
- Related products section
- CTA strip: **single** "Talk to an Expert" button (replaced previous two-button layout)

---

## Images

Industry section images are served from GitHub raw CDN:
```
https://raw.githubusercontent.com/varunjoshua/sps-new-website/main/temp-images/hotforging.jpg
https://raw.githubusercontent.com/varunjoshua/sps-new-website/main/temp-images/hotrolling.jpg
https://raw.githubusercontent.com/varunjoshua/sps-new-website/main/temp-images/heat-treatment.jpg
https://raw.githubusercontent.com/varunjoshua/sps-new-website/main/temp-images/die-casting.jpg
https://raw.githubusercontent.com/varunjoshua/sps-new-website/main/temp-images/titanium.jpg
```
Used in: `industries.html` (full sections) and `index.html` (industry cards).
Other images: Unsplash CDN URLs.

---

## Pending / Deferred

- **Contact form backend** — PHP mailer + hCaptcha. Implement after deploying to Hostinger.
- **WordPress CMS migration** — future phase, not started.
- **Homepage "Learn More" links** — point to category pages; may need review once all category pages are finalised.
