# Learn Moroccan Darija — full site

This is your complete site, ready to upload as-is: your original pages plus
the SEO update (static, pre-rendered lesson pages under /lessons/, per-lesson
titles and descriptions, and the fixed internal links).

## How to use this

Upload every file and folder in this zip to the ROOT of your GitHub repo —
not into a subfolder. When you open your repo's main page afterward, you
should see index.html sitting directly in the file list, not nested inside
another folder.

Then in Settings → Pages, make sure Source is set to your main branch and
the folder "/ (root)".

## When you edit lessons-data.js later

Whenever you add or change a lesson, re-run the generator so the /lessons/
folder stays in sync:

    node build.js

Needs Node.js installed (nodejs.org) — no other setup, no packages.
