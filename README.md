# alangford.io — v4

Rebuilt on React 18 + Vite. Functional components, hooks, no Redux, no
Material-UI. Plain CSS with a token system in `src/index.css`.

## Run it locally

```bash
npm install
npm run dev
```

Then open the URL it prints (usually http://localhost:5173).

## Build for deploy

```bash
npm run build
```

Outputs static files to `dist/` — deploy that folder to S3 (or wherever
you're hosting) the same way the old build was.

## Structure

- `src/components/` — one component + matching `.css` file per section
- `src/data/` — experience, competencies, and certifications content,
  pulled from your resume. Edit these to update copy without touching
  the components.
- `src/assets/portrait.jpg` — your existing headshot, reused
- `public/resume.pdf` — swap this file to update the downloadable resume
- `public/favicon.ico` — reused from the old repo; note it's actually a
  PNG under the hood, not a real .ico. Works in most browsers but worth
  regenerating properly at some point (e.g. via realfavicongenerator.net)

## Things I could not verify

I built this without network access in my sandbox, so I could not run
`npm install` / `npm run build` myself. I reviewed every file by hand for
syntax and import correctness, but please run the two commands above
and let me know if anything breaks — happy to fix immediately.

## What changed from the old version

- React 16 class components + Redux + Material-UI v3 → React 18 function
  components + hooks, no state library, custom CSS
- Content rewritten around your current infrastructure/AWS background
  instead of the old junior-developer bio
- Old project links (Pong, Tetris, VR demo, Adobe/W3Schools clones, Seek
  app, On-The-Line) are back in an "Earlier projects" section — worth
  double-checking those subdomains are still live before you republish
- Twitter/Facebook links dropped; kept GitHub, LinkedIn, email, phone
- New "service history" experience section styled like a status page,
  each role expandable for detail
