# Mohd Quamar Tyagi — Engineering Portfolio

Personal engineering portfolio. Founding Engineer at Takkada (PaySaathi),
RLHF Trainer (contract) at Caudal AI, previously SDE-1 at Zomato.

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

| Project | Live | Source |
|---|---|---|
| DurableGo — durable workflow engine with fencing tokens | https://durablego-dashboard.vercel.app | https://github.com/Tyagiquamar/durablego |
| RelayDB — PostgreSQL CDC with at-least-once delivery | https://relaydb-dashboard.vercel.app | https://github.com/Tyagiquamar/relaydb |
| DurableMCP — durable MCP tool execution and recovery | https://durablemcp-dashboard.vercel.app | https://github.com/Tyagiquamar/durablemcp |
| LiveBoard — real-time collaborative project workspace | https://liveboard-red.vercel.app | https://github.com/Tyagiquamar/liveboard |
| ComponentForge — accessible React component system | https://componentforge-kohl.vercel.app | https://github.com/Tyagiquamar/componentforge |
| CanvasFlow — node-based workflow builder | https://canvasflow-nine.vercel.app | https://github.com/Tyagiquamar/canvasflow |

The Go-system dashboards observe a live engine by default on free-tier
infrastructure with self-generating traffic; first hit after an idle period
may wait through a short cold start. Each dashboard also ships a deterministic
demo mode one toggle away.

Also on GitHub: QuantXecute — real-time crypto futures trade-cost estimator
using live OKX Level 2 orderbook data to model slippage, fees and market
impact in C++ (https://github.com/Tyagiquamar/QuantXecute).

## Local development

```bash
pnpm install
pnpm dev      # http://localhost:3000
pnpm build    # production build
pnpm lint
```
