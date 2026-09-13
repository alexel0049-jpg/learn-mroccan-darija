/*
  lesson.js
  ---------
  Powers lesson.html. Reads "?id=..." from the URL, looks up that lesson
  in LESSONS (from lessons-data.js), and renders every section:
  intro, key points, vocabulary, phrases, conversation, and quiz.
*/

let currentLesson = null;
let quizState = { index: 0, correct: 0, answered: false };

document.addEventListener("DOMContentLoaded", () => {
  try {
    if (typeof LESSONS === "undefined") {
      throw new Error("Lesson data (lessons-data.js) did not load.");
    }
    if (typeof Progress === "undefined") {
      throw new Error("Progress helper (progress.js) did not load.");
    }

    Progress.recordVisitToday();

    // Each generated lessons/<id>.html page sets window.LESSON_ID directly;
    // the old ?id= query string is kept as a fallback for local testing.
    const lessonId = window.LESSON_ID || new URLSearchParams(window.location.search).get("id");
    currentLesson = LESSONS[lessonId];

    if (!currentLesson) {
      showLessonNotFound();
      return;
    }

    renderLessonHeader();
    renderIntroAndKeyPoints();
    renderVocab();
    renderPhrases();
    renderConversation();
    renderQuiz();
    wireUpCompleteButton();
  } catch (err) {
    // Never leave the page stuck on "Loading…", show what went wrong
    // so it's obvious this is a bug, not a slow network.
    console.error("Learn Darija: failed to render lesson page.", err);
    showLoadError(err);
  }
});

function showLoadError(err) {
  const title = document.getElementById("lesson-title");
  const subtitle = document.getElementById("lesson-subtitle");
  if (title) title.textContent = "Something went wrong loading this lesson";
  if (subtitle) {
    subtitle.textContent =
      "Open the browser console (F12 → Console) for the error details, and check that " +
      "lessons-data.js, progress.js, and lesson.js are all in the same folder as this page.";
  }
  const introBox = document.getElementById("lesson-intro-box");
  if (introBox) introBox.style.display = "none";
  const quizSection = document.getElementById("quiz-section");
  if (quizSection) quizSection.style.display = "none";
}

function showLessonNotFound() {
  document.getElementById("lesson-title").textContent = "Lesson not found";
  document.getElementById("lesson-subtitle").textContent =
    "That lesson doesn't exist yet. Head back to the course map to pick one.";
  document.getElementById("lesson-intro-box").style.display = "none";
  document.getElementById("quiz-section").style.display = "none";
}

function renderLessonHeader() {
  document.getElementById("page-title").textContent = `${currentLesson.title}, Learn Darija`;
  document.getElementById("crumb-level").textContent = `${currentLesson.level} · Lesson ${currentLesson.number}`;
  document.getElementById("lesson-title").textContent = currentLesson.title;
  document.getElementById("lesson-subtitle").textContent = currentLesson.subtitle;
}

function renderIntroAndKeyPoints() {
  document.getElementById("lesson-intro-text").innerHTML = currentLesson.intro;

  const kpBox = document.getElementById("key-points-box");
  kpBox.innerHTML = "";
  (currentLesson.keyPoints || []).forEach(kp => {
    const row = document.createElement("div");
    row.className = "key-point";
    row.innerHTML = `
      <span class="kp-symbol">${escapeHtml(kp.symbol)}</span>
      <span class="kp-sound">${escapeHtml(kp.soundName)}</span>
      <span class="kp-note">${escapeHtml(kp.note)}</span>
    `;
    kpBox.appendChild(row);
  });
}

function renderVocab() {
  const vocab = currentLesson.vocab || [];
  if (vocab.length === 0) return;

  document.getElementById("vocab-section").style.display = "block";
  const grid = document.getElementById("vocab-grid");
  grid.innerHTML = "";

  vocab.forEach(word => {
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
    if (word.example) {
      html += `
        <div class="vc-example">
          <div class="ex-latin">${escapeHtml(word.example.latin)}</div>
          <div class="ex-english">${escapeHtml(word.example.english)}</div>
        </div>`;
    }
    html += `<button class="speaker-btn" type="button" aria-label="Listen to ${escapeHtml(word.latin)}">🔊 Listen</button>`;
    card.innerHTML = html;

    const speakerBtn = card.querySelector(".speaker-btn");
    speakerBtn.addEventListener("click", () => speakWord(word, speakerBtn));

    grid.appendChild(card);
  });

  // Record which vocab words this lesson introduced (for the progress panel).
  const words = vocab.map(w => w.latin);
  Progress.markVocabLearned(currentLesson.id, words);
}

function renderPhrases() {
  const phrases = currentLesson.phrases || [];
  if (phrases.length === 0) return;

  document.getElementById("phrases-section").style.display = "block";
  const list = document.getElementById("phrases-list");
  list.innerHTML = "";

  phrases.forEach(p => {
    const item = document.createElement("div");
    item.className = "phrase-item";
    item.innerHTML = `
      <div class="ph-latin">${escapeHtml(p.latin)}</div>
      <div class="ph-english">${escapeHtml(p.english)}</div>
      ${p.note ? `<div class="ph-note">${escapeHtml(p.note)}</div>` : ""}
    `;
    list.appendChild(item);
  });
}

function renderConversation() {
  const convo = currentLesson.conversation;
  if (!convo) return;

  document.getElementById("conversation-section").style.display = "block";
  document.getElementById("conv-title").textContent = convo.title || "";

  const box = document.getElementById("conversation-box");
  box.innerHTML = "";

  convo.lines.forEach(line => {
    const row = document.createElement("div");
    row.className = "conv-line";
    row.innerHTML = `
      <div class="conv-speaker">${escapeHtml(line.speaker)}</div>
      <div class="conv-bubble">
        <div class="cb-latin">${escapeHtml(line.latin)}</div>
        <div class="cb-english">${escapeHtml(line.english)}</div>
      </div>
    `;
    box.appendChild(row);
  });
}

/* ---------------------------- Quiz logic ---------------------------- */

function renderQuiz() {
  const quiz = currentLesson.quiz || [];
  const box = document.getElementById("quiz-box");

  if (quiz.length === 0) {
    box.innerHTML = "<p>No quiz for this lesson yet.</p>";
    return;
  }

  quizState = { index: 0, correct: 0, answered: false };
  renderQuizQuestion();
}

function renderQuizQuestion() {
  const quiz = currentLesson.quiz;
  const box = document.getElementById("quiz-box");

  if (quizState.index >= quiz.length) {
    renderQuizResult();
    return;
  }

  const q = quiz[quizState.index];
  quizState.answered = false;

  box.innerHTML = `
    <div class="quiz-progress">Question ${quizState.index + 1} of ${quiz.length}</div>
    <div class="quiz-question">${escapeHtml(q.question)}</div>
    <div class="quiz-options" id="quiz-options"></div>
    <div id="quiz-feedback" aria-live="polite"></div>
    <button class="btn btn-primary btn-small" id="quiz-next-btn" style="display:none;">Next</button>
  `;

  const optionsBox = document.getElementById("quiz-options");
  q.options.forEach((opt, i) => {
    const btn = document.createElement("button");
    btn.type = "button";
    btn.className = "quiz-option";
    btn.textContent = opt;
    btn.addEventListener("click", () => handleQuizAnswer(i, btn));
    optionsBox.appendChild(btn);
  });
}

function handleQuizAnswer(selectedIndex, selectedBtn) {
  if (quizState.answered) return;
  quizState.answered = true;

  const q = currentLesson.quiz[quizState.index];
  const isCorrect = selectedIndex === q.answerIndex;
  if (isCorrect) quizState.correct++;

  const allButtons = document.querySelectorAll("#quiz-options .quiz-option");
  allButtons.forEach((btn, i) => {
    btn.disabled = true;
    if (i === q.answerIndex) btn.classList.add("correct");
    if (i === selectedIndex && !isCorrect) btn.classList.add("incorrect");
  });

  const feedback = document.getElementById("quiz-feedback");
  feedback.innerHTML = `
    <div class="quiz-feedback ${isCorrect ? "correct" : "incorrect"}">
      <strong>${isCorrect ? "Correct!" : "Not quite."}</strong> ${escapeHtml(q.explanation)}
    </div>
  `;

  const nextBtn = document.getElementById("quiz-next-btn");
  nextBtn.style.display = "inline-block";
  nextBtn.addEventListener("click", () => {
    quizState.index++;
    renderQuizQuestion();
  }, { once: true });
}

function renderQuizResult() {
  const quiz = currentLesson.quiz;
  const box = document.getElementById("quiz-box");
  Progress.saveQuizScore(currentLesson.id, quizState.correct, quiz.length);

  box.innerHTML = `
    <div class="quiz-result">
      <div class="result-score">${quizState.correct} / ${quiz.length}</div>
      <p>You got ${quizState.correct} out of ${quiz.length} correct.</p>
      <button class="btn btn-secondary btn-small" id="quiz-retry-btn">Retry Quiz</button>
    </div>
  `;

  document.getElementById("quiz-retry-btn").addEventListener("click", () => {
    quizState = { index: 0, correct: 0, answered: false };
    renderQuizQuestion();
  });
}

/* ------------------------- Mark complete ------------------------- */

// Flattens LEVELS into course order and returns the id right after
// currentId, skipping locked (unwritten) lessons. Returns null if
// currentId is the last written lesson.
function getNextLessonId(currentId) {
  const order = [];
  LEVELS.forEach(levelGroup => {
    levelGroup.lessons.forEach(ref => {
      if (!ref.startsWith("__locked:")) order.push(ref);
    });
  });
  const idx = order.indexOf(currentId);
  if (idx === -1 || idx === order.length - 1) return null;
  return order[idx + 1];
}

function wireUpCompleteButton() {
  const btn = document.getElementById("mark-complete-btn");
  const nextId = getNextLessonId(currentLesson.id);

  const updateLabel = () => {
    const isComplete = Progress.isLessonComplete(currentLesson.id);
    if (nextId) {
      btn.textContent = isComplete ? "✓ Completed, Next Lesson →" : "Mark Complete & Continue →";
    } else {
      btn.textContent = isComplete ? "✓ Lesson Completed" : "Mark Lesson Complete";
    }
  };
  updateLabel();

  btn.addEventListener("click", () => {
    Progress.markLessonComplete(currentLesson.id);
    if (nextId) {
      btn.disabled = true;
      btn.textContent = "Loading next lesson…";
      window.location.href = `${encodeURIComponent(nextId)}.html`;
    } else {
      updateLabel();
    }
  });
}

/* ------------------------------ Utils ------------------------------ */

function escapeHtml(str) {
  if (str === null || str === undefined) return "";
  const div = document.createElement("div");
  div.textContent = String(str);
  return div.innerHTML;
}