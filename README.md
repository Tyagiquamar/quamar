# Mohd Quamar Tyagi — Engineering Portfolio

Personal engineering portfolio. Founding Engineer at Takkada, previously
SDE-1 at Zomato.

**Live:** https://quamar.vercel.app

## Stack

- Next.js 15 (App Router) + React 19, TypeScript
- Tailwind CSS with dark/light design tokens
- Deployed on Vercel

## Structure

All page content — experience, selected work, proof links, competitive
programming profiles — lives in `data/portfolio.ts`. `app/` composes it into
semantic sections (`section` / `article` / `figure`) with responsive grids,
descriptive alt text, and `prefers-reduced-motion` support.

## Featured work

| Project | Live demo | Source |
|---|---|---|
| DurableGo — durable workflow engine with fencing tokens | https://durablego-dashboard.vercel.app | https://github.com/Tyagiquamar/durablego |
| DurableMCP — durable MCP tool execution and recovery | https://durablemcp-dashboard.vercel.app | https://github.com/Tyagiquamar/durablemcp |
| RelayDB — PostgreSQL CDC with at-least-once delivery | https://relaydb-dashboard.vercel.app | https://github.com/Tyagiquamar/relaydb |
| QuantXecute — C++ options pricing engine | — | https://github.com/Tyagiquamar/QuantXecute |

All three hosted demos run live on free-tier infrastructure with
self-generating traffic; first hit after an idle period may wait through a
short cold start while the dashboard retries.

## Local development

```bash
pnpm install
pnpm dev      # http://localhost:3000
pnpm build    # production build
pnpm lint
```
