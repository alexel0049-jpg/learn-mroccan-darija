# SEO update — what changed and what to do with it

Your design, colors, fonts, and every page's look are completely untouched.
What changed is *how the lesson content gets onto the page*.

## What's different

- **New folder: `/lessons/`** — one real, finished HTML file per lesson
  (e.g. `lessons/greetings.html`), with the vocab/phrases/conversation
  already written into the HTML. Before, that content only appeared after
  `lesson.js` ran in the browser, which search engines and link-preview
  bots don't always wait for.
- **`lesson.html` is now just a safety-net redirect** — if anyone ever has
  an old `lesson.html?id=greetings` link, it quietly sends them to
  `lessons/greetings.html` instead.
- **`script.js` and `glossary.js`** now link to `lessons/<id>.html` instead
  of `lesson.html?id=<id>`.
- **`audio.js`** now finds the `audio/` folder relative to its own file
  location, so it works correctly whether it's loaded from the site root
  or from inside `/lessons/`.
- **Each lesson page has its own `<title>` and meta description**, pulled
  from that lesson's own subtitle — another small SEO win your old single
  `lesson.html` couldn't give you.
- **`build.js`** is the new script that generates everything in `/lessons/`.

## What you need to do

1. Replace these files in your repo with the updated versions in this zip:
   `audio.js`, `script.js`, `glossary.js`, `lesson.js`, `lesson.html`.
2. Add the new files: `build.js`, and the whole `/lessons/` folder (already
   generated — 37 files, ready to commit as-is).
3. Commit and push like normal. GitHub Pages needs no special setup — these
   are just plain HTML files.

## When you add or edit a lesson later

Whenever you change `lessons-data.js` (add a lesson, fix a typo, add a
word), just re-run the generator so `/lessons/` stays in sync:

```
node build.js
```

You'll need Node.js installed on your computer for that one command (no
other setup, no packages to install — the script has zero dependencies).
If you don't have Node yet, install it from nodejs.org, then run that
command from inside your project folder any time the lesson content
changes, and commit the updated `/lessons/` files.
