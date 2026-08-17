---
title: "feat: Portfolio rebuild — signal-dense single page"
date: 2026-08-17
type: feat
depth: Standard
target_repo: portfolio
---

# feat: Portfolio rebuild — signal-dense single page

## Summary

Rebuild the personal portfolio from a recognisable v0/shadcn template into a custom, signal-dense single-page site. The page leads with a PaySaathi case-study block (architecture, metrics, approved screenshots), presents a "Systems I've Built" experience timeline, and replaces the four tutorial-tier MERN project cards with a curated "Selected Work" section (3 best public repos + the PaySaathi case study). A parallel unit cleans up the GitHub profile (pin repos, descriptions, profile README) because recruiters land there from the portfolio. Target: a site that passes a 5-second recruiter scan and rewards a 2-minute engineering read.

---

## Problem Frame

The current portfolio reads as a v0 template: stock layout, stock metadata (`title: 'v0 App'`), hardcoded data inline in one 741-line server component, no custom fonts, no SEO/OG tags, no sitemap, and a contact form that `console.log`s submissions and discards them. The strongest work (PaySaathi at Takkada — 1,000+ commits, lakhs of LOC, double-entry accounting core, GST filing, WhatsApp automation, AI document import) is described only in prose inside an experience card, with no dedicated case-study surface and no screenshots. The four featured projects are tutorial-level clones that undercut the stated seniority. The public GitHub profile shows forks and clone repos as the "popular" surface; nothing is pinned, nothing has a description.

---

## Requirements

- R1 — Present PaySaathi as the flagship artifact with an architecture diagram, metrics (commits, LOC, modules), and at least 2 approved screenshots.
- R2 — Replace the 4 tutorial project cards with a curated "Selected Work" section: PaySaathi case study + 3 public repos (QuantXecute, order-book-sim, ai-interviewer-agent, or NexLink).
- R3 — Extract all hardcoded content (experience, projects, skills, CP profiles, socials) into a typed data module so the page is data-driven and future edits are single-file.
- R4 — Fix metadata: real title/description, OpenGraph, Twitter card, sitemap, robots, favicon wiring, JSON-LD Person schema.
- R5 — Give the site a distinct visual identity (custom typography, refined color, consistent spacing) while keeping shadcn/ui primitives under the hood.
- R6 — Make the contact form actually send email (Resend or equivalent) and mount the toast provider so success/error feedback is visible.
- R7 — Clean up the GitHub profile: pin 4 repos, add descriptions to all featured repos, update the profile README to match current positioning.
- R8 — Deploy on a custom domain with HTTPS and Vercel analytics.

---

## Key Technical Decisions

- **KTD-1: Keep Next.js 15 + shadcn/ui, change the skin, not the stack.** The stack is already modern (Next 15, React 19, Tailwind 3.4). The "template look" comes from default shadcn styling and layout, not the framework. We restyle tokens, add `next/font` (Inter + JetBrains Mono or similar), tighten the layout grid, and add motion — rather than swapping to Astro/Remix or a different component library. Rationale: lowest cost, lowest risk, keeps accessible primitives.
- **KTD-2: Single-page with a prominent in-page case-study block, plus an optional `/work/paysaathi` detail route.** The brainstorm call-out defaulted to single-page for recruiter-scan speed; the detail route is a follow-up for engineering readers who want depth. The plan builds the single-page block first; the detail route is Unit U6.
- **KTD-3: Content in a typed `data/` module, not MDX.** The site is one page. MDX/contentlayer adds build complexity for zero benefit at this scale. A single `data/content.ts` (or `data/portfolio.ts`) with `as const` typed arrays gives autocomplete, type safety, and single-file edits. If a blog is added later, MDX can be introduced then.
- **KTD-4: Resend for the contact form.** Zero-config SMTP alternative, generous free tier, official Next.js/React email support, and the user already deploys to Vercel. No database, no webhook infrastructure needed.
- **KTD-5: GitHub cleanup is a parallel unit, not a code change.** Pinning repos, writing descriptions, and updating the profile README are GitHub settings/content work. They ship independently of the Next.js rebuild and can be done in the same session via `gh`.

---

## High-Level Technical Design

### Page structure (top → bottom)

```
Nav (name + links: About, Experience, Work, Contact + theme toggle)
  └─ Hero (name, title, one-liner, 2 CTAs, social icons, profile photo)
  └─ Stats bar (4 key numbers: 1+ YOE · 1000+ commits · Codeforces 2038 · LeetCode 2400+)
  └─ About (short paragraph + CP profile cards)
  └─ Experience timeline (Takkada → Zomato → Linux Foundation → ITJOBS)
  └─ PaySaathi case study (architecture diagram + metrics + 2 screenshots + tech badges)
  └─ Selected Work (3 repo cards + 1 case-study card)
  └─ Skills (compact badge grid, grouped)
  └─ Contact (form + direct links)
  └─ Footer
```

### Data flow

All content lives in `data/portfolio.ts` as typed constants. Components import and map over arrays. No content is hardcoded in JSX. This makes future edits (add a project, change a metric) a single-file change.

---

## Implementation Units

### U1. Fix broken build + extract content to data module

**Goal:** Repair the stray `</section>` syntax error, then pull every hardcoded array (experience, projects, skills, CP profiles, socials, stats) into a typed data module so the page is data-driven.

**Requirements:** R3

**Dependencies:** none

**Files:**
- `app/page.tsx` — remove stray `</section>`, replace inline data with imports
- `data/portfolio.ts` — create: `experience[]`, `projects[]`, `skillGroups[]`, `cpProfiles[]`, `socials[]`, `stats[]`, each with an exported `as const` type
- `tsconfig.json` — no change (path alias `@/` already configured)

**Approach:** Define a `PortfolioData` type first, then move each inline array into the data file. The page component becomes a thin mapping layer. No visual changes — this is a pure refactor that unblocks every subsequent unit.

**Patterns to follow:** Existing shadcn component usage in `app/page.tsx`. The data module pattern mirrors how shadcn blocks accept typed props.

**Test scenarios:**
- Happy path: page renders identically before and after the refactor (visual regression by eye).
- Edge case: empty `projects[]` array renders without crashing (map over empty array).
- Error path: a project with a missing `image` field fails TypeScript compilation (type safety).

**Verification:** `next build` passes with zero errors; page renders all sections with identical content.

---

### U2. Visual identity — fonts, tokens, spacing, nav

**Goal:** Replace the default shadcn look with a custom visual identity: two fonts (display + mono), a refined color palette, consistent spacing rhythm, an updated nav with Experience link and theme toggle.

**Requirements:** R5

**Dependencies:** U1

**Files:**
- `app/layout.tsx` — add `next/font` (Inter or Space Grotesk for display, JetBrains Mono for code/stats), add `metadataBase`, add `<ThemeProvider>` and `<Toaster />`
- `app/globals.css` — update `:root` and `.dark` token values (background, foreground, primary, accent, border), add font-family CSS vars, add smooth-scroll offset for anchor links
- `tailwind.config.ts` — extend `fontFamily`, adjust `borderRadius`, add custom `animation`/`keyframes` if needed
- `components/nav.tsx` — extract nav to a client component, add Experience anchor, add mobile menu (Sheet), add theme toggle (next-themes)
- `components/theme-toggle.tsx` — create

**Approach:** Pick one accent color (e.g., a warm amber or electric blue) and use it sparingly against a neutral background. Stats and metrics render in the mono font for a "terminal" feel. The nav gets `scroll-margin-top` on target sections so anchor links don't hide content behind the sticky header.

**Patterns to follow:** shadcn theming docs pattern (CSS vars + tailwind config extension). `next-themes` standard integration pattern.

**Test scenarios:**
- Happy path: light and dark mode both render with correct token values; theme toggle persists across navigation.
- Edge case: system preference is dark on first visit — page renders dark without flash of light theme.
- Error path: none (pure styling).

**Verification:** Visual inspection in both modes; no layout shift on theme toggle; anchor links scroll to correct position.

---

### U3. Hero + Stats bar

**Goal:** Rebuild the hero section with the new identity and add a stats bar that surfaces the four strongest numbers.

**Requirements:** R1, R5

**Dependencies:** U2

**Files:**
- `app/page.tsx` — replace hero section JSX
- `data/portfolio.ts` — add `stats[]` entries

**Approach:** Hero: name in display font, one-line positioning statement, two CTAs (View Work, Get In Touch), social icons. Remove the floating blob animations (they read as template). Stats bar: 4-column grid below hero — "1+ YOE", "1,000+ commits @ Takkada", "Codeforces 2038 (Candidate Master)", "LeetCode 2400+ (top 0.6%)" — each in mono font, subtle top border.

**Test scenarios:**
- Happy path: all 4 stats render from data; layout is 4-col on desktop, 2-col on mobile.
- Edge case: stat value contains a long string — grid doesn't break.

**Verification:** Visual inspection; stats match resume numbers.

---

### U4. Experience timeline

**Goal:** Restyle the experience section as a vertical timeline with the Takkada card visually elevated (border accent, larger, first position).

**Requirements:** R1

**Dependencies:** U2

**Files:**
- `app/page.tsx` — replace experience section JSX
- `data/portfolio.ts` — update experience entries with final copy

**Approach:** Timeline: vertical line on the left, dots at each entry. Takkada card gets the accent border and a "Current" badge. Each entry: role, company, dates, 3-4 bullets, tech badges. The Takkada bullets lead with the metrics: "1,000+ commits / lakhs of LOC in 4 months", "double-entry accounting core in PostgreSQL", "GSTR-1/GSTR-3B GSTN JSON export", "WhatsApp Business automation", "AI document-import pipeline (Gemini/Vertex)".

**Test scenarios:**
- Happy path: 4 entries render in reverse-chronological order; Takkada is first and visually distinct.
- Edge case: an entry with only 2 bullets doesn't break the layout.

**Verification:** Visual inspection; copy matches approved resume bullets.

---

### U5. PaySaathi case-study block + Selected Work

**Goal:** Build the flagship case-study section and replace the 4 tutorial project cards with a curated Selected Work grid.

**Requirements:** R1, R2

**Dependencies:** U1, U2

**Files:**
- `app/page.tsx` — add case-study section, replace projects section
- `data/portfolio.ts` — add `caseStudy` object and update `projects[]`
- `public/images/paysaathi-architecture.svg` — create architecture diagram (hand-drawn SVG or Excalidraw export)
- `public/images/paysaathi-screenshot-1.png` — add approved screenshot
- `public/images/paysaathi-screenshot-2.png` — add approved screenshot

**Approach:**

Case-study block (in-page, between Experience and Selected Work):
- Left column: title "PaySaathi — Standalone Tally-Replacement ERP", one-paragraph description, metric chips (1,000+ commits · ~180k LOC · 4 months · Founding Engineer), tech badges (Flutter, Supabase, PostgreSQL, Next.js, TypeScript).
- Right column: architecture diagram (SVG) showing the four layers: Flutter app → Supabase Edge Functions → PostgreSQL (double-entry ledger, RLS) → External (GSTN, WhatsApp API, Gemini/Vertex).
- Below: 2-screenshot strip with captions.

Selected Work grid (replaces old Projects):
- Card 1: PaySaathi case study (links to in-page anchor or detail route)
- Card 2: QuantXecute (C++ trading engine)
- Card 3: ai-interviewer-agent (deployed, TypeScript)
- Card 4: NexLink (URL shortener, deployed)

Remove: Decentralized App, CryptoTrade, Accommodation Finder cards.

**Test scenarios:**
- Happy path: case-study block renders with diagram and screenshots; Selected Work shows 4 cards.
- Edge case: screenshot fails to load — alt text displays, layout doesn't break.
- Error path: missing image file — `next/image` shows placeholder or alt text.

**Verification:** Visual inspection; all images load; links resolve.

---

### U6. Metadata, SEO, contact form, deploy

**Goal:** Fix all metadata, wire the contact form to Resend, add sitemap/robots/OG image, deploy to custom domain.

**Requirements:** R4, R6, R8

**Dependencies:** U1 (needs stable page structure for OG), U5 (needs final content for OG description)

**Files:**
- `app/layout.tsx` — full metadata object: title, description, keywords, authors, openGraph, twitter, robots, icons, alternates/canonical, JSON-LD Person schema
- `app/sitemap.ts` — create
- `app/robots.ts` — create
- `app/opengraph-image.tsx` — create (or static `public/og-image.png`)
- `app/icon.tsx` — create (or wire existing `public/icon.svg` via metadata)
- `app/actions.ts` — replace `console.log` + fake delay with Resend `resend.emails.send()`
- `components/contact-form.tsx` — no structural change; ensure Toaster is mounted (done in U2)
- `.env.local` — add `RESEND_API_KEY`
- `next.config.mjs` — remove `ignoreBuildErrors` and `ignoreDuringBuilds` once build is clean

**Approach:** Metadata: title "Mohd Quamar Tyagi — Founding Engineer @ Takkada", description from the hero one-liner. OG image: generate with `@vercel/og` or use a static branded image. Contact form: install `resend`, create the send call in the server action, keep the existing client-side form (it already uses `FormData` and `useToast` correctly — it just needs the toast provider mounted and the action to actually send). Deploy: connect Vercel, add custom domain, enable Vercel Analytics.

**Test scenarios:**
- Happy path: contact form submits, success toast appears, email arrives at target address.
- Edge case: empty form fields — server action returns validation error, error toast appears.
- Error path: Resend API key missing or invalid — server action returns error, error toast appears (not a silent failure).
- Integration: sitemap.xml returns 200 with correct URLs; robots.txt returns 200; OG image renders at `/opengraph-image`.

**Verification:** `next build` passes with `ignoreBuildErrors` removed; form sends a real email; `curl -I` on sitemap/robots returns 200; OG image previews correctly in a social-share debugger.

---

### U7. GitHub profile cleanup (parallel, non-code)

**Goal:** Pin the right repos, add descriptions, update the profile README.

**Requirements:** R7

**Dependencies:** none (can ship independently)

**Files:** none (GitHub settings + profile README content)

**Approach:** Via `gh` CLI:
- Pin 4 repos: `QuantXecute`, `ai-interviewer-agent`, `order-book-sim`, `NexLink-URL-Shortener`
- Add descriptions to each pinned repo
- Update `Tyagiquamar/Tyagiquamar` profile README: current role, stack, CP ratings, links

**Test scenarios:**
- Happy path: profile page shows 4 pinned repos with descriptions; README renders correctly.

**Verification:** Visual inspection of github.com/Tyagiquamar.

---

## Scope Boundaries

### Deferred to Follow-Up Work
- Custom domain purchase and DNS setup (requires user action — domain registrar account)
- `/work/paysaathi` detail page (deeper case study with more screenshots, technical deep-dive)
- Blog/notes section (MDX content layer — revisit when there are 2-3 posts worth publishing)
- Vercel Analytics setup (one-line after domain is live)
- Resume PDF rebuild (separate artifact, different toolchain)

### Outside This Product's Identity
- Not a blog platform — no MDX, no content management, no RSS
- Not a portfolio generator — single-person site, no multi-user
- Not a resume builder — the resume is a separate PDF artifact

---

## Risks & Dependencies

| Risk | Mitigation |
|---|---|
| PaySaathi screenshots not yet approved by employer | Block U5's screenshot strip until approval; ship the architecture diagram + metrics first (no UI images) |
| Resend free tier limit (100 emails/day) | Acceptable for a portfolio contact form; upgrade if volume ever matters |
| `next.config.mjs` ignores TS/build errors — removing them may surface pre-existing issues | U1 fixes the known syntax error; U6 removes the ignore flags only after a clean build |
| Custom domain not yet purchased | Deploy to `*.vercel.app` first; domain is a follow-up the user handles |

---

## Sources & Research

- Repo scan: `portfolio/package.json`, `app/page.tsx`, `app/layout.tsx`, `app/globals.css`, `tailwind.config.ts`, `components/contact-form.tsx`, `app/actions.ts`, `next.config.mjs`
- GitHub profile scan: 44 public repos, no pins, no descriptions, stale profile README
- PaySaathi commit evidence: `D:\paysaathi` git logs (1,080 commits across 5 repos, ~180k LOC real code)
- Resume PDF: `D:\11\Quamar_tyagi.resume.pdf` (extracted text)
- Live portfolio: v0-competitive-programmer-portfolio.vercel.app
