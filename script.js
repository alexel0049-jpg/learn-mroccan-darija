/*
  script.js
  ---------
  Homepage logic only: renders the progress panel (including streak and
  export/import controls) and the course map (levels + lesson cards)
  using data from lessons-data.js and progress.js.
*/

document.addEventListener("DOMContentLoaded", () => {
  try {
    if (typeof LESSONS === "undefined" || typeof LEVELS === "undefined") {
      throw new Error("Lesson data (lessons-data.js) did not load.");
    }
    if (typeof Progress === "undefined") {
      throw new Error("Progress helper (progress.js) did not load.");
    }

    Progress.recordVisitToday();

    renderProgressPanel();
    renderCourseMap();
    renderLevelJumpNav();
    wireUpExportImport();
  } catch (err) {
    console.error("Learn Darija: failed to render homepage.", err);
    const panel = document.getElementById("progress-panel");
    if (panel) {
      panel.innerHTML = `<p style="grid-column: 1 / -1; margin:0;">
        Something went wrong loading this page. Open the browser console (F12) for details,
        and check that lessons-data.js, progress.js, and script.js are all in this same folder.
      </p>`;
    }
  }
});

function countWrittenLessons() {
  return Object.keys(LESSONS).length;
}

function renderProgressPanel() {
  const panel = document.getElementById("progress-panel");
  const totalLessons = countWrittenLessons();
  const { completed } = Progress.getCompletedCount(totalLessons);
  const vocabCount = Progress.getAllVocabCount();
  const pct = totalLessons > 0 ? Math.round((completed / totalLessons) * 100) : 0;
  const streak = Progress.getStreak();

  panel.innerHTML = `
    <div class="progress-stat" style="grid-column: 1 / -1;">
      <span class="stat-label">Lessons completed</span>
      <span class="stat-number">${completed} / ${totalLessons}</span>
      <div class="progress-bar-track">
        <div class="progress-bar-fill" style="width: ${pct}%;"></div>
      </div>
    </div>
    <div class="progress-stat">
      <span class="stat-number">${vocabCount}</span>
      <span class="stat-label">Words practiced</span>
    </div>
    <div class="progress-stat">
      <span class="stat-number">${pct}%</span>
      <span class="stat-label">A1 course started</span>
    </div>
    <div class="progress-stat">
      <span class="stat-number">${streak.current} 🔥</span>
      <span class="stat-label">Day streak${streak.longest > streak.current ? ` (best: ${streak.longest})` : ""}</span>
    </div>
    <div class="progress-stat" style="grid-column: 1 / -1;">
      <div class="progress-actions">
        <a class="btn btn-secondary btn-small" href="review.html">Review your vocab</a>
        <a class="btn btn-secondary btn-small" href="glossary.html">Browse glossary</a>
        <button class="btn btn-secondary btn-small" id="export-progress-btn" type="button">Export progress</button>
        <label class="btn btn-secondary btn-small" for="import-progress-input" style="cursor:pointer;">
          Import progress
          <input type="file" id="import-progress-input" accept="application/json" style="display:none;">
        </label>
      </div>
      <p id="import-export-status" class="import-export-status" role="status" aria-live="polite"></p>
    </div>
  `;
}

function wireUpExportImport() {
  const exportBtn = document.getElementById("export-progress-btn");
  const importInput = document.getElementById("import-progress-input");
  const status = document.getElementById("import-export-status");

  if (exportBtn) {
    exportBtn.addEventListener("click", () => {
      try {
        const payload = Progress.exportData();
        const blob = new Blob([JSON.stringify(payload, null, 2)], { type: "application/json" });
        const url = URL.createObjectURL(blob);
        const a = document.createElement("a");
        const dateStr = new Date().toISOString().slice(0, 10);
        a.href = url;
        a.download = `learn-darija-progress-${dateStr}.json`;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
        if (status) status.textContent = "Progress exported. Keep the downloaded file somewhere safe.";
      } catch (e) {
        console.warn("Export failed.", e);
        if (status) status.textContent = "Sorry, export failed in this browser.";
      }
    });
  }

  if (importInput) {
    importInput.addEventListener("change", () => {
      const file = importInput.files && importInput.files[0];
      if (!file) return;
      const reader = new FileReader();
      reader.onload = () => {
        let parsed;
        try {
          parsed = JSON.parse(reader.result);
        } catch (e) {
          if (status) status.textContent = "That file isn't valid JSON.";
          return;
        }
        const result = Progress.importData(parsed);
        if (result.ok) {
          if (status) status.textContent = "Progress imported! Refreshing…";
          setTimeout(() => window.location.reload(), 800);
        } else {
          if (status) status.textContent = result.error || "Could not import that file.";
        }
      };
      reader.onerror = () => {
        if (status) status.textContent = "Could not read that file.";
      };
      reader.readAsText(file);
      importInput.value = ""; // allow re-selecting the same file later
    });
  }
}

function renderLevelJumpNav() {
  const container = document.getElementById("levels-container");
  if (!container || LEVELS.length < 2) return; // not worth a jump nav for a single level

  const nav = document.createElement("div");
  nav.className = "level-jump-nav";
  nav.setAttribute("aria-label", "Jump to level");
  LEVELS.forEach(levelGroup => {
    const link = document.createElement("a");
    link.href = `#level-${levelGroup.level}`;
    link.className = "level-jump-link";
    link.textContent = levelGroup.level;
    nav.appendChild(link);
  });
  container.parentNode.insertBefore(nav, container);
}

function renderCourseMap() {
  const container = document.getElementById("levels-container");
  container.innerHTML = "";

  LEVELS.forEach(levelGroup => {
    const block = document.createElement("div");
    block.className = "level-block";
    block.id = `level-${levelGroup.level}`;

    const title = document.createElement("div");
    title.className = "level-title";
    title.innerHTML = `<span class="level-badge">${levelGroup.level}</span><h3 style="margin:0;">${levelGroup.label}</h3>`;
    block.appendChild(title);

    const grid = document.createElement("div");
    grid.className = "lesson-grid";

    levelGroup.lessons.forEach((lessonRef, index) => {
      if (lessonRef.startsWith("__locked:")) {
        const title = lessonRef.replace("__locked:", "");
        grid.appendChild(buildLockedCard(index + 1, title));
      } else {
        const lesson = LESSONS[lessonRef];
        if (lesson) {
          grid.appendChild(buildLessonCard(lesson));
        }
      }
    });

    block.appendChild(grid);
    container.appendChild(block);
  });
}

function buildLessonCard(lesson) {
  const isComplete = Progress.isLessonComplete(lesson.id);
  const card = document.createElement("a");
  card.href = `lessons/${encodeURIComponent(lesson.id)}.html`;
  card.className = "lesson-card" + (isComplete ? " is-complete" : "");
  card.innerHTML = `
    <span class="lesson-number">Lesson ${lesson.number}</span>
    <h3>${lesson.title}</h3>
    <p style="font-size:0.9rem; color:#6b5c4d; margin:0;">${lesson.subtitle}</p>
    <span class="lesson-status ${isComplete ? "complete" : ""}">${isComplete ? "✓ Completed" : "Not started"}</span>
  `;
  return card;
}

function buildLockedCard(number, title) {
  const card = document.createElement("div");
  card.className = "lesson-card is-locked";
  card.innerHTML = `
    <span class="lesson-number">Lesson ${number}</span>
    <h3>${title}</h3>
    <span class="lesson-status">Coming soon</span>
  `;
  return card;
}