# GitHub Pages Deployment Instructions

1. Build and export your Next.js site:

   npm run build

   This will generate a static site in the `out` directory.

2. Deploy to GitHub Pages:

   npm run deploy

   This will push the contents of the `out` directory to the `gh-pages` branch.

3. In your GitHub repository settings, set GitHub Pages to serve from the `gh-pages` branch (root).

4. Your site will be available at:
   https://<your-username>.github.io/dietofits-home/

---

- Make sure your repository name matches the `basePath` and `assetPrefix` in `next.config.ts`.
- If you change the repo name, update those fields accordingly.
