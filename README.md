# American Car Amplifier Export Website

A static-export Next.js 14 + Tailwind CSS website for a U.S.-market car amplifier manufacturer/export brand.

## Pages

- Home
- About Us
- Products
- Contact

## Contact API

The frontend form submits to:

```txt
https://api-你的项目名.pages.dev/api/contact
```

Replace `你的项目名` with the real Cloudflare Pages project name when your Workers backend is ready.

## Static export

`next.config.js` is configured with:

```js
output: 'export',
images: { unoptimized: true }
```

Build output is generated in the `out` folder and is suitable for Cloudflare Pages static deployment.

## Development

Use Node.js `>=18.18.0`. The project is configured for modern Node 18-26 compatible environments.

```bash
npm install
npm run dev
npm run build
```

## Cloudflare Pages

Recommended build settings:

- Build command: `npm run build`
- Output directory: `out`
- Node version: `>=18.18.0`
