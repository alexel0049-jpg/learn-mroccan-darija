/*
  glossary.js
  -----------
  Powers glossary.html. Flattens every vocab word from every WRITTEN
  lesson in lessons-data.js (regardless of whether the user has visited
  it) into one searchable list, sorted alphabetically by Darija spelling.
*/

let allWords = [];

document.addEventListener("DOMContentLoaded", () => {
  try {
    if (typeof LESSONS === "undefined") {
      throw new Error("lessons-data.js did not load.");
    }

    allWords = flattenAllVocab(LESSONS);
    renderGrid(allWords);

    const searchInput = document.getElementById("glossary-search");
    searchInput.addEventListener("input", () => {
      const term = searchInput.value.trim().toLowerCase();
      const filtered = term ? allWords.filter(w => matches(w, term)) : allWords;
      renderGrid(filtered);
    });
  } catch (err) {
    console.error("Learn Darija: failed to render glossary page.", err);
    const container = document.querySelector(".container");
    if (container) {
      container.insertAdjacentHTML("afterbegin",
        `<div class="lesson-intro"><p style="margin:0;">Something went wrong loading this page.
         Open the browser console (F12) for details.</p></div>`);
    }
  }
});

function flattenAllVocab(LESSONS_OBJ) {
  const words = [];
  Object.values(LESSONS_OBJ).forEach(lesson => {
    (lesson.vocab || []).forEach(word => {
      words.push(Object.assign({ lessonId: lesson.id, lessonTitle: lesson.title }, word));
    });
  });
  words.sort((a, b) => a.latin.localeCompare(b.latin));
  return words;
}

function matches(word, term) {
  return (
    (word.latin && word.latin.toLowerCase().includes(term)) ||
    (word.latinAlt && word.latinAlt.toLowerCase().includes(term)) ||
    (word.english && word.english.toLowerCase().includes(term))
  );
}

function renderGrid(words) {
  const grid = document.getElementById("glossary-grid");
  const countEl = document.getElementById("glossary-count");
  const emptyEl = document.getElementById("glossary-empty");

  countEl.textContent = `${words.length} word${words.length === 1 ? "" : "s"}`;
  grid.innerHTML = "";
  emptyEl.style.display = words.length === 0 ? "block" : "none";

  words.forEach(word => {
    const card = document.createElement("div");
    card.className = "vocab-card";
    let html = `<div class="vc-latin">${escapeHtml(word.latin)}</div>`;
    if (word.latinAlt) {
      html += `<div class="vc-alt">also spelled: ${escapeHtml(word.latinAlt)}</div>`;
    }
    html += `<div class="vc-english">${escapeHtml(word.english)}</div>`;
    if (word.pronunciation) {
      html += `<div class="vc-pron">say it: ${escapeHtml(word.pronunciation)}</div>`;
    }
    html += `<div class="vc-source">
      <a href="lessons/${encodeURIComponent(word.lessonId)}.html">from “${escapeHtml(word.lessonTitle)}”</a>
    </div>`;
    html += `<button class="speaker-btn" type="button" aria-label="Listen to ${escapeHtml(word.latin)}">🔊 Listen</button>`;
    card.innerHTML = html;

    const speakerBtn = card.querySelector(".speaker-btn");
    speakerBtn.addEventListener("click", () => speakWord(word, speakerBtn));

    grid.appendChild(card);
  });
}

function escapeHtml(str) {
  if (str === null || str === undefined) return "";
  const div = document.createElement("div");
  div.textContent = String(str);
  return div.innerHTML;
}