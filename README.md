# VoltEdge Audio — Car Amplifier Export Website

A static-export Next.js 16 + Tailwind CSS v4 website for a U.S.-market car amplifier manufacturer/export brand.

## Tech Stack

- **Next.js** 16.2.10 (App Router, static export)
- **React** 19.2.7
- **Tailwind CSS** 4.3.2
- **TypeScript** 5.9+

## Pages

- Home
- About Us
- Products
- Contact

## Static Export

`next.config.js` is configured with:

```js
output: 'export',
images: { unoptimized: true },
trailingSlash: true,
```

Run `npm run build` to generate the `out/` folder, which is ready for Cloudflare Pages static deployment.

## Contact Form

The contact form is a client-side component (`components/ContactForm.tsx`) that POSTs JSON to:

```
https://api-your-project-name.pages.dev/api/contact
```

Replace the `API_ENDPOINT` constant with your actual Cloudflare Workers URL when the backend is ready.

## Node Version

```json
"engines": {
  "node": ">=20.9.0 <27.0.0"
}
```

Compatible with Node.js 20.9.0 through 26.x.

## Development

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
# Output: out/
```

## Deployment: GitHub + Cloudflare Pages

### Method 1: Cloudflare Pages Git Integration (Recommended)

1. Push this repository to GitHub.
2. Log in to the Cloudflare dashboard → Pages → Create a project → Connect to Git.
3. Select your GitHub repository.
4. Set the following build settings:
   - **Framework preset:** Next.js (Static HTML Export)
   - **Build command:** `npm run build`
   - **Build output directory:** `out`
   - **Node version:** 20 or later (set `NODE_VERSION=22` in Environment Variables)
5. Click Save and Deploy. Cloudflare will auto-build on every push to `main`.

### Method 2: GitHub Actions (CI-based)

A workflow file is included at `.github/workflows/deploy.yml`.

1. Push this repository to GitHub.
2. In the Cloudflare dashboard, create an API token with Cloudflare Pages permissions.
3. In your GitHub repository settings → Secrets and variables → Actions, add:
   - `CLOUDFLARE_API_TOKEN` — your Cloudflare API token
   - `CLOUDFLARE_ACCOUNT_ID` — your Cloudflare account ID
4. Push to `main` to trigger the deployment workflow automatically.

### Cloudflare Pages Settings Reference

| Setting | Value |
|---------|-------|
| Build command | `npm run build` |
| Output directory | `out` |
| Node version | 20.9.0+ (recommended: 22) |
| Install command | `npm install` |
