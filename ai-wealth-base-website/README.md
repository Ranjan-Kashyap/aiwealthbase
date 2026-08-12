# AI Wealth Base Website

Next.js site for [AIWealthBase.com](https://aiwealthbase.com) — honest AI tool tests, lead magnet capture, and blog.

## Stack

- Next.js (App Router) + TypeScript + Tailwind CSS v4
- OpenNext + Cloudflare Workers (`wrangler`)
- Markdown blog pipeline (`scripts/generate-blog.mjs`)

## Local development

```bash
npm install
npm run dev
```

## Deploy (Cloudflare)

```bash
npm run deploy
```

## Environment variables (optional)

| Variable | Purpose |
|----------|---------|
| `GHL_LEAD_WEBHOOK_URL` | GoHighLevel webhook for checklist leads |
| `RESEND_API_KEY` | Email notifications via Resend |
| `LEAD_NOTIFY_EMAIL` | Inbox for new leads (default: ranjan@scalerise.io) |
| `LEAD_NOTIFY_FROM` | From address for Resend |

Without `GHL_LEAD_WEBHOOK_URL`, leads are logged server-side and the form still succeeds (for local testing).
