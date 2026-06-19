# B-DAY Studio — site

Premium black / deep-violet, Apple-inspired liquid-glass studio site.
Next.js 16 (App Router) · React 19 · TypeScript · static export · no CSS framework.

## Develop

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # static export to ./out
npm run typecheck
```

## Where to change things

| What | Where |
| --- | --- |
| Temporary studio name | `lib/site.ts` → `siteConfig.studioName` (or `NEXT_PUBLIC_STUDIO_NAME`) |
| Support email | env `NEXT_PUBLIC_SUPPORT_EMAIL` (hidden until set — never a fake address) |
| Production domain | env `NEXT_PUBLIC_SITE_URL` (used for canonical / OG / sitemap) |
| Hero artwork | `components/HeroVisualPlaceholder.tsx` + `.hero-visual` in `app/globals.css` (one-line swap) |
| App catalog | `lib/apps.ts` (add an app = one entry + assets in `public/apps/<slug>/`) |
| Design tokens / glass / ambient bg | `app/globals.css` |

## Routes

`/` · `/apps/b-day` · `/support` · `/privacy` · `/terms`

Legal pages are honest placeholders. See `LEGAL_AUDIT_CHECKLIST.md` before
writing the final Privacy Policy / Terms.
