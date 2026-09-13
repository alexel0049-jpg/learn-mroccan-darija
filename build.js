/*
  build.js
  --------
  Zero-dependency Node script. Reads lessons-data.js and writes a real,
  finished HTML file per lesson into /lessons/<id>.html — the actual
  vocab, phrases, and conversation are baked into the HTML itself,
  instead of only appearing after lesson.js runs in the browser.

  Why: search engines and link-preview crawlers don't reliably run
  JavaScript, so a page that's blank until JS fires often doesn't get
  indexed well. This fixes that, while lesson.js still runs on top of
  the generated page exactly as before (same classes, same ids) to
  power the quiz, audio buttons, and progress tracking.

  Run it with:  node build.js
  Run it again any time lessons-data.js changes — it's safe to re-run,
  it just overwrites everything in /lessons/.
*/

const fs = require("fs");
const path = require("path");
const vm = require("vm");

const ROOT = __dirname;
const LESSONS_DIR = path.join(ROOT, "lessons");

function loadLessonsData() {
  let code = fs.readFileSync(path.join(ROOT, "lessons-data.js"), "utf8");
  // Top-level `const`/`let` don't attach to the vm context object the way
  // `var` does, so swap the two top-level declarations to `var` just for
  // this read — doesn't touch the actual file on disk.
  code = code
    .replace(/^const LESSONS =/m, "var LESSONS =")
    .replace(/^const LEVELS =/m, "var LEVELS =");
  const sandbox = {};
  vm.createContext(sandbox);
  vm.runInContext(code, sandbox, { filename: "lessons-data.js" });
  if (!sandbox.LESSONS) {
    throw new Error(
      "Couldn't find LESSONS in lessons-data.js — is the file still a plain " +
      "`const LESSONS = {...}` script (not an ES module)?"
    );
  }
  return sandbox.LESSONS;
}

function escapeHtml(str) {
  if (str === null || str === undefined) return "";
  return String(str)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function renderKeyPoints(keyPoints) {
  return (keyPoints || [])
    .map(
      (kp) => `
        <div class="key-point">
          <span class="kp-symbol">${escapeHtml(kp.symbol)}</span>
          <span class="kp-sound">${escapeHtml(kp.soundName)}</span>
          <span class="kp-note">${escapeHtml(kp.note)}</span>
        </div>`
    )
    .join("");
}

function renderVocabCard(word) {
  let html = `
        <div class="vocab-card">
          <div class="vc-latin">${escapeHtml(word.latin)}</div>`;
  if (word.latinAlt) {
    html += `
          <div class="vc-alt">also spelled: ${escapeHtml(word.latinAlt)}</div>`;
  }
  html += `
          <div class="vc-english">${escapeHtml(word.english)}</div>`;
  if (word.pronunciation) {
    html += `
          <div class="vc-pron">say it: ${escapeHtml(word.pronunciation)}</div>`;
  }
  if (word.example) {
    html += `
          <div class="vc-example">
            <div class="ex-latin">${escapeHtml(word.example.latin)}</div>
            <div class="ex-english">${escapeHtml(word.example.english)}</div>
          </div>`;
  }
  html += `
          <button class="speaker-btn" type="button" aria-label="Listen to ${escapeHtml(word.latin)}">🔊 Listen</button>
        </div>`;
  return html;
}

function renderPhrase(p) {
  return `
        <div class="phrase-item">
          <div class="ph-latin">${escapeHtml(p.latin)}</div>
          <div class="ph-english">${escapeHtml(p.english)}</div>
          ${p.note ? `<div class="ph-note">${escapeHtml(p.note)}</div>` : ""}
        </div>`;
}

function renderConvoLine(line) {
  return `
        <div class="conv-line">
          <div class="conv-speaker">${escapeHtml(line.speaker)}</div>
          <div class="conv-bubble">
            <div class="cb-latin">${escapeHtml(line.latin)}</div>
            <div class="cb-english">${escapeHtml(line.english)}</div>
          </div>
        </div>`;
}

function renderJsonLd(lesson) {
  const data = {
    "@context": "https://schema.org",
    "@type": "LearningResource",
    name: lesson.title,
    description: lesson.subtitle || "",
    learningResourceType: "Lesson",
    educationalLevel: lesson.level,
    inLanguage: "ar-MA",
    isPartOf: "Learn Moroccan Darija",
  };
  return JSON.stringify(data, null, 2);
}

function renderLessonPage(lesson) {
  const vocab = lesson.vocab || [];
  const phrases = lesson.phrases || [];
  const convo = lesson.conversation;
  const metaDescription = escapeHtml(
    lesson.subtitle || `Learn "${lesson.title}" in Moroccan Darija.`
  );

  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${escapeHtml(lesson.title)} — Learn Moroccan Darija</title>
  <meta name="description" content="${metaDescription}">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link href="https://fonts.googleapis.com/css2?family=Rakkas&family=Jost:wght@400;500;600;700&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="../style.css">
  <script type="application/ld+json">
${renderJsonLd(lesson)}
  </script>
</head>
<body>

  <header class="site-header">
    <div class="container">
      <div class="brand">
        <span class="display">Learn Darija</span>
        <span class="brand-tag">Moroccan Arabic, made simple</span>
      </div>
      <nav class="site-nav">
        <a href="../index.html#courses">All Lessons</a>
        <a href="../index.html#progress">My Progress</a>
        <a href="../review.html">Review</a>
        <a href="../glossary.html">Glossary</a>
      </nav>
      <a href="https://paypal.me/YOUR-USERNAME-HERE" target="_blank" rel="noopener" class="support-btn">☕ Support</a>
    </div>
  </header>

  <section class="lesson-header">
    <div class="container">
      <p class="lesson-breadcrumb"><a href="../index.html">Home</a> / <span id="crumb-level">${escapeHtml(lesson.level)} · Lesson ${escapeHtml(String(lesson.number))}</span></p>
      <h1 id="lesson-title">${escapeHtml(lesson.title)}</h1>
      <p class="lesson-subtitle" id="lesson-subtitle">${escapeHtml(lesson.subtitle || "")}</p>
    </div>
  </section>

  <div class="container">
    <div class="lesson-intro" id="lesson-intro-box">
      <p id="lesson-intro-text">${lesson.intro || ""}</p>
      <div class="key-points" id="key-points-box">${renderKeyPoints(lesson.keyPoints)}
      </div>
    </div>
  </div>

  <section class="section" id="vocab-section" style="${vocab.length ? "" : "display:none;"}">
    <div class="container">
      <div class="section-heading"><h2>Vocabulary</h2></div>
      <div class="vocab-grid" id="vocab-grid">${vocab.map(renderVocabCard).join("")}
      </div>
    </div>
  </section>

  <section class="section" id="phrases-section" style="${phrases.length ? "" : "display:none;"}">
    <div class="container">
      <div class="section-heading"><h2>Useful Phrases</h2></div>
      <div id="phrases-list">${phrases.map(renderPhrase).join("")}
      </div>
    </div>
  </section>

  <section class="section" id="conversation-section" style="${convo ? "" : "display:none;"}">
    <div class="container">
      <div class="section-heading"><h2>Example Conversation</h2><span class="section-sub" id="conv-title">${escapeHtml((convo && convo.title) || "")}</span></div>
      <div class="conversation-box" id="conversation-box">${convo ? convo.lines.map(renderConvoLine).join("") : ""}
      </div>
    </div>
  </section>

  <section class="section" id="quiz-section">
    <div class="container">
      <div class="section-heading"><h2>Quiz</h2></div>
      <div class="quiz-box" id="quiz-box"></div>
    </div>
  </section>

  <div class="container">
    <div class="lesson-nav">
      <a class="btn btn-secondary btn-small" href="../index.html#courses">← Back to all lessons</a>
      <button class="btn btn-primary btn-small" id="mark-complete-btn">Mark Lesson Complete</button>
    </div>
  </div>

  <footer class="site-footer">
    <div class="container">
      <p>Learn Darija, a small, honest project for learning real spoken Moroccan Arabic.</p>
    </div>
  </footer>

  <script>window.LESSON_ID = ${JSON.stringify(lesson.id)};</script>
  <script src="../lessons-data.js"></script>
  <script src="../progress.js"></script>
  <script src="../audio.js"></script>
  <script src="../lesson.js"></script>
</body>
</html>
`;
}

function main() {
  const LESSONS = loadLessonsData();
  fs.mkdirSync(LESSONS_DIR, { recursive: true });

  const ids = Object.keys(LESSONS);
  ids.forEach((id) => {
    const html = renderLessonPage(LESSONS[id]);
    fs.writeFileSync(path.join(LESSONS_DIR, `${id}.html`), html, "utf8");
  });

  console.log(`Generated ${ids.length} static lesson pages in /lessons`);
}

main();
