# Paxvio Site Audit — Remaining Improvements

> Generated 2026-02-16 from 6 parallel audits (CRO, Visual Design, SEO, Accessibility, Web Guidelines, UI/UX).
> Low-effort items have been fixed. This document tracks medium and high-effort items that require content, design decisions, or architectural changes.

---

## Audit Scores (Post-Fix)

| Audit | Before | After (estimated) |
|-------|--------|-------------------|
| CRO | 62 | ~65 |
| Visual Design | 78 | ~82 |
| SEO | 32 | ~55 |
| Accessibility | 38 | ~60 |
| Web Guidelines | 72 | ~80 |
| UI/UX | 74 | ~78 |

Items below are what's needed to push all scores into the 85-95 range.

---

## Fixes Already Applied (2026-02-16)

- [x] `prefers-reduced-motion` media query (globals.css)
- [x] Silver color contrast fix (#8B8D94 → #9EA0A6)
- [x] `color-scheme: dark` on html
- [x] `scroll-behavior: smooth` wrapped in motion preference
- [x] Visible focus indicators (gold outline on focus-visible)
- [x] Skip navigation link
- [x] Title tag keyword-optimized
- [x] `metadataBase` added
- [x] Font preconnect for fontshare.com
- [x] Organization JSON-LD schema
- [x] `sitemap.xml` (via app/sitemap.ts)
- [x] `robots.txt`
- [x] `aria-label` on nav elements
- [x] `aria-hidden` on decorative SVGs
- [x] Low-opacity text contrast fixes (gold/25→50, gold/20→40, gold/30→50, silver/40→60)
- [x] Mobile menu: Escape key, aria-expanded, focus management, nav wrapper
- [x] Footer anchor links fixed (# → /#)
- [x] Dead privacy/terms links removed
- [x] Brand page: apparel section removed
- [x] Brand page: unique metadata via layout.tsx
- [x] Brand page: id="main-content" added
- [x] Homepage: id="main-content" added
- [x] CSS border override scoped to grid-container context

---

## HIGH IMPACT — Requires Content/Design

### 1. Add Product Visuals
**Impact:** HIGH | **Effort:** HIGH | **Audits:** CRO, Visual, UX (all 3 flagged this as #1)

The site is 100% text and 0% visual evidence. Every Fortune 500 comparison site (Stripe, Palantir, Linear, Vercel) shows the product within the first viewport.

**What's needed:**
- Screenshot or mockup of the design editor (Software division)
- Screenshot of a storefront or dashboard (Commerce division)
- Before/after of AI background removal (AI division)
- Architecture diagram showing how the 4 systems connect (Infrastructure section)

**Options:**
- A: Real screenshots from Printpire (fastest, most authentic)
- B: Stylized mockups in Figma (more polished, takes longer)
- C: Animated product demo using framer-motion (highest impact, most effort)

### 2. Replace Mailto CTAs with Contact Form or Calendly
**Impact:** HIGH | **Effort:** MEDIUM | **Audits:** CRO, UX

All 3 CTA cards use `mailto:hello@paxvio.com`. This fails silently on many devices, cannot be tracked, and signals "too small to have a contact form."

**Options:**
- A: Cal.com embed (free, instant, professional)
- B: Simple contact form posting to Supabase or a serverless function
- C: Typeform/Tally link (fastest, third-party dependency)

### 3. Add Social Proof Section
**Impact:** HIGH | **Effort:** MEDIUM | **Audits:** CRO, UX

Zero customer logos, testimonials, or metrics anywhere. This is the #1 credibility gap.

**Options:**
- A: Show internal brands ("Powering Printpire & The 8th Corner")
- B: Add order/product metrics ("X orders processed, Y products configured")
- C: Single testimonial from a real customer
- D: "Trusted by X merchants" line in the hero

### 4. Server Component Refactor (Remove "use client" from pages)
**Impact:** HIGH (SEO) | **Effort:** MEDIUM | **Audits:** SEO, Web Guidelines

Both `page.tsx` and `brand/page.tsx` are entirely `"use client"`. This means:
- All content is JavaScript-rendered (bad for Googlebot)
- All static data arrays ship in the client JS bundle
- LCP is delayed by framer-motion animation delays

**Fix approach:**
1. Make `page.tsx` a server component (remove `"use client"`)
2. Extract animated wrappers into client components (`components/AnimatedSection.tsx`)
3. Keep static content (headings, paragraphs, data arrays) server-rendered
4. Only wrap the `motion.div` elements in client boundaries

This is the single biggest SEO improvement possible. Googlebot will see the full content immediately instead of waiting for JS execution.

---

## MEDIUM IMPACT — Requires New Pages/Content

### 5. Create Privacy Policy & Terms of Service
**Impact:** MEDIUM | **Effort:** LOW-MEDIUM | **Audits:** SEO, Web Guidelines

Required for E-E-A-T (Google trust signals) and legal compliance. Dead links were removed; pages need to be created.

### 6. Add Team/About Page
**Impact:** MEDIUM | **Effort:** MEDIUM | **Audits:** UX

Investors and enterprise buyers need to see who is behind the company. No team page exists.

### 7. OG Image for Social Sharing
**Impact:** MEDIUM | **Effort:** LOW | **Audits:** SEO

No OpenGraph image exists. Social shares (LinkedIn, Twitter, Slack) show no preview image.

**Options:**
- A: Static PNG (1200x630) — V mark + tagline on navy background
- B: Dynamic `app/opengraph-image.tsx` using Next.js ImageResponse API

### 8. Blog/Content Hub
**Impact:** MEDIUM (long-term) | **Effort:** HIGH | **Audits:** SEO, CRO

No content for organic search discovery. A blog with industry insights would build authority and drive traffic.

---

## LOW IMPACT — Polish Items

### 9. Self-Host Satoshi Font
Replace fontshare.com CDN link with `next/font/local` for zero external dependency. Eliminates FOIT risk completely.

### 10. Break Section Layout Monotony
Every section follows the same pattern: gold label → heading → body → cards. The visual design audit flagged this as repetitive. Options:
- Make the Approach section full-width with a subtle background shift
- Use a vertical timeline for Infrastructure pillars instead of 2x2 grid
- Add one asymmetric layout (text left, visual right)

### 11. Animate Mobile Menu Open/Close
Currently snaps open with boolean toggle. Wrap in `<AnimatePresence>` with a slide/fade animation.

### 12. Replace "Built on" Tech Stack with Partner/Integration Logos
The "Built on: Next.js, React, Vercel, Square, Cloudflare" section lists your own tech stack, not customer integrations. Either replace with actual partner logos or remove.

### 13. Card Internal Padding
Optics cards use `py-4 px-4` (16px). For the luxury aesthetic, increase to `py-6 px-6` or override at usage level.

### 14. Add Scroll-Linked Animations
All animations currently trigger once on viewport entry (`whileInView once: true`). Adding parallax or scroll-position-driven transforms would keep the page feeling alive during scroll (like Linear/Vercel).

---

## Priority Order

```
Phase 1 (do next):
  #4 Server component refactor (biggest SEO win)
  #7 OG image (quick, high visibility)
  #2 Contact form / Calendly (conversion critical)

Phase 2 (content creation):
  #3 Social proof section
  #1 Product visuals
  #5 Privacy/Terms pages

Phase 3 (expansion):
  #6 Team page
  #8 Blog/content hub
  #10-14 Polish items
```
