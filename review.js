/*
  review.js
  ---------
  Powers review.html. Pulls every vocab word from every lesson the user
  has visited (via Progress.getReviewVocab) and lets them study it two
  ways: flippable flashcards, or a generated multiple-choice quiz.

  Nothing here is hand-authored content, it's all derived from
  lessons-data.js + the visited-lesson list already tracked in
  progress.js, so it stays in sync automatically as lessons are added.
*/

let reviewVocab = [];
let order = [];
let cardIndex = 0;
let isFlipped = false;

let quizQuestions = [];
let quizState = { index: 0, correct: 0, answered: false };

document.addEventListener("DOMContentLoaded", () => {
  try {
    if (typeof LESSONS === "undefined" || typeof Progress === "undefined") {
      throw new Error("lessons-data.js or progress.js did not load.");
    }

    Progress.recordVisitToday();

    reviewVocab = dedupeVocab(Progress.getReviewVocab(LESSONS));

    if (reviewVocab.length === 0) {
      document.getElementById("review-empty-state").style.display = "block";
      return;
    }

    document.getElementById("review-app").style.display = "block";

    order = shuffledIndices(reviewVocab.length);
    cardIndex = 0;
    renderFlashcard();

    document.getElementById("flash-flip-btn").addEventListener("click", flipCard);
    document.getElementById("flashcard").addEventListener("click", flipCard);
    document.getElementById("flashcard").addEventListener("keydown", e => {
      if (e.key === "Enter" || e.key === " ") { e.preventDefault(); flipCard(); }
    });
    document.getElementById("flash-next-btn").addEventListener("click", () => moveCard(1));
    document.getElementById("flash-prev-btn").addEventListener("click", () => moveCard(-1));
    document.getElementById("shuffle-btn").addEventListener("click", () => {
      order = shuffledIndices(reviewVocab.length);
      cardIndex = 0;
      isFlipped = false;
      renderFlashcard();
    });

    document.getElementById("mode-flashcards-btn").addEventListener("click", () => setMode("flashcards"));
    document.getElementById("mode-quiz-btn").addEventListener("click", () => setMode("quiz"));
  } catch (err) {
    console.error("Learn Darija: failed to render review page.", err);
    const container = document.querySelector(".container");
    if (container) {
      container.insertAdjacentHTML("afterbegin",
        `<div class="lesson-intro"><p style="margin:0;">Something went wrong loading this page.
         Open the browser console (F12) for details.</p></div>`);
    }
  }
});

/* Some vocab words repeat verbatim across lessons (e.g. "Bghit").
   Keep only the first occurrence so review isn't full of duplicates. */
function dedupeVocab(list) {
  const seen = new Set();
  return list.filter(w => {
    const key = w.latin.toLowerCase();
    if (seen.has(key)) return false;
    seen.add(key);
    return true;
  });
}

function shuffledIndices(n) {
  const arr = Array.from({ length: n }, (_, i) => i);
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

/* ------------------------------ Modes ------------------------------ */

function setMode(mode) {
  const flashBtn = document.getElementById("mode-flashcards-btn");
  const quizBtn = document.getElementById("mode-quiz-btn");
  const flashSection = document.getElementById("flashcards-section");
  const quizSection = document.getElementById("quiz-review-section");

  const showFlash = mode === "flashcards";
  flashSection.style.display = showFlash ? "block" : "none";
  quizSection.style.display = showFlash ? "none" : "block";
  flashBtn.classList.toggle("is-active", showFlash);
  quizBtn.classList.toggle("is-active", !showFlash);
  flashBtn.setAttribute("aria-selected", String(showFlash));
  quizBtn.setAttribute("aria-selected", String(!showFlash));

  if (!showFlash && quizQuestions.length === 0) {
    quizQuestions = buildQuizQuestions(reviewVocab);
    quizState = { index: 0, correct: 0, answered: false };
    renderQuizQuestion();
  }
}

/* ---------------------------- Flashcards ---------------------------- */

function currentWord() {
  return reviewVocab[order[cardIndex]];
}

function renderFlashcard() {
  const word = currentWord();
  const front = document.getElementById("flashcard-front");
  const back = document.getElementById("flashcard-back");
  const countEl = document.getElementById("flashcard-count");
  const inner = document.getElementById("flashcard-inner");

  front.innerHTML = `
    <div class="fc-latin">${escapeHtml(word.latin)}</div>
    ${word.latinAlt ? `<div class="fc-alt">also spelled: ${escapeHtml(word.latinAlt)}</div>` : ""}
    <div class="fc-hint">Tap to flip</div>
  `;
  back.innerHTML = `
    <div class="fc-english">${escapeHtml(word.english)}</div>
    ${word.pronunciation ? `<div class="fc-pron">say it: ${escapeHtml(word.pronunciation)}</div>` : ""}
    <div class="fc-lesson">from “${escapeHtml(word.lessonTitle)}”</div>
    <button type="button" class="speaker-btn" id="fc-speaker-btn">🔊 Listen</button>
  `;

  isFlipped = false;
  inner.classList.remove("is-flipped");
  countEl.textContent = `Card ${cardIndex + 1} of ${reviewVocab.length}`;

  // Re-bind each render since innerHTML was replaced.
  const speakerBtn = document.getElementById("fc-speaker-btn");
  if (speakerBtn) {
    speakerBtn.addEventListener("click", (e) => {
      e.stopPropagation();
      speakWord(word, speakerBtn);
    });
  }
}

function flipCard() {
  isFlipped = !isFlipped;
  document.getElementById("flashcard-inner").classList.toggle("is-flipped", isFlipped);
}

function moveCard(direction) {
  cardIndex = (cardIndex + direction + reviewVocab.length) % reviewVocab.length;
  renderFlashcard();
}

/* ------------------------------- Quiz ------------------------------- */

function buildQuizQuestions(vocabList) {
  const pool = shuffledIndices(vocabList.length).map(i => vocabList[i]);
  return pool.map(word => {
    const distractorPool = vocabList.filter(w => w.english !== word.english);
    const distractors = pickRandomUnique(distractorPool, 3).map(w => w.english);
    const options = shuffleArray([word.english, ...distractors]);
    return {
      latin: word.latin,
      question: `What does "${word.latin}" mean?`,
      options,
      answerIndex: options.indexOf(word.english),
      explanation: `"${word.latin}" means "${word.english}" (from “${word.lessonTitle}”).`
    };
  });
}

function pickRandomUnique(list, count) {
  const shuffled = shuffleArray(list.slice());
  const seen = new Set();
  const out = [];
  for (const item of shuffled) {
    if (seen.has(item.english)) continue;
    seen.add(item.english);
    out.push(item);
    if (out.length >= count) break;
  }
  return out;
}

function shuffleArray(arr) {
  const copy = arr.slice();
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

function renderQuizQuestion() {
  const box = document.getElementById("review-quiz-box");

  if (quizQuestions.length === 0) {
    box.innerHTML = "<p>Not enough vocab yet to build a quiz, visit a couple more lessons first.</p>";
    return;
  }

  if (quizState.index >= quizQuestions.length) {
    renderQuizResult();
    return;
  }

  const q = quizQuestions[quizState.index];
  quizState.answered = false;

  box.innerHTML = `
    <div class="quiz-progress">Question ${quizState.index + 1} of ${quizQuestions.length}</div>
    <div class="quiz-question">${escapeHtml(q.question)}</div>
    <div class="quiz-options" id="review-quiz-options"></div>
    <div id="review-quiz-feedback" aria-live="polite"></div>
    <button class="btn btn-primary btn-small" id="review-quiz-next-btn" style="display:none;">Next</button>
  `;

  const optionsBox = document.getElementById("review-quiz-options");
  q.options.forEach((opt, i) => {
    const btn = document.createElement("button");
    btn.type = "button";
    btn.className = "quiz-option";
    btn.textContent = opt;
    btn.addEventListener("click", () => handleQuizAnswer(i, q));
    optionsBox.appendChild(btn);
  });
}

function handleQuizAnswer(selectedIndex, q) {
  if (quizState.answered) return;
  quizState.answered = true;

  const isCorrect = selectedIndex === q.answerIndex;
  if (isCorrect) quizState.correct++;

  const allButtons = document.querySelectorAll("#review-quiz-options .quiz-option");
  allButtons.forEach((btn, i) => {
    btn.disabled = true;
    if (i === q.answerIndex) btn.classList.add("correct");
    if (i === selectedIndex && !isCorrect) btn.classList.add("incorrect");
  });

  const feedback = document.getElementById("review-quiz-feedback");
  feedback.innerHTML = `
    <div class="quiz-feedback ${isCorrect ? "correct" : "incorrect"}">
      <strong>${isCorrect ? "Correct!" : "Not quite."}</strong> ${escapeHtml(q.explanation)}
    </div>
  `;

  const nextBtn = document.getElementById("review-quiz-next-btn");
  nextBtn.style.display = "inline-block";
  nextBtn.addEventListener("click", () => {
    quizState.index++;
    renderQuizQuestion();
  }, { once: true });
}

function renderQuizResult() {
  const box = document.getElementById("review-quiz-box");
  box.innerHTML = `
    <div class="quiz-result">
      <div class="result-score">${quizState.correct} / ${quizQuestions.length}</div>
      <p>You got ${quizState.correct} out of ${quizQuestions.length} correct.</p>
      <button class="btn btn-secondary btn-small" id="review-quiz-retry-btn">Retry Quiz</button>
    </div>
  `;
  document.getElementById("review-quiz-retry-btn").addEventListener("click", () => {
    quizQuestions = buildQuizQuestions(reviewVocab);
    quizState = { index: 0, correct: 0, answered: false };
    renderQuizQuestion();
  });
}

/* ------------------------------ Utils ------------------------------ */

function escapeHtml(str) {
  if (str === null || str === undefined) return "";
  const div = document.createElement("div");
  div.textContent = String(str);
  return div.innerHTML;
}