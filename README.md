# Intro
Home page asset for [996 Worker's](https://www.996workers.org).

## Development

The home page (`index.html`) is styled with [Tailwind CSS](https://tailwindcss.com) v4.
Edit `src/site.css` for theme tokens, then rebuild the stylesheet:

```sh
npm install
npm run build   # writes assets/css/site.css (minified)
npm run dev     # rebuild on change
```

`assets/css/site.css` is committed, so Cloudflare Pages can serve the site as-is without a build step.
