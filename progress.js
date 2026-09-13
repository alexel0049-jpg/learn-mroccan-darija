/*
  progress.js
  -----------
  Small helper library for tracking user progress with localStorage.
  No backend, no account, everything lives in the visitor's browser.

  Data shape saved under the key "learnDarijaProgress":
  {
    completedLessons: { "greetings": true, ... },
    quizScores: { "greetings": { correct: 3, total: 3 }, ... },
    vocabLearned: { "greetings": ["Salam", "Sbah lkhir", ...], ... },
    streak: { lastVisitDate: "2026-08-22", current: 3, longest: 5 }
  }

  Since there's no backend, all of this can be lost if the user clears
  their browser data. exportData()/importData() let a visitor save a
  JSON snapshot to a file and restore it later or on another device.
*/

const Progress = (function () {
  const STORAGE_KEY = "learnDarijaProgress";

  function _emptyData() {
    return {
      completedLessons: {},
      quizScores: {},
      vocabLearned: {},
      streak: { lastVisitDate: null, current: 0, longest: 0 }
    };
  }

  function _load() {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (!raw) return _emptyData();
      const parsed = JSON.parse(raw);
      return {
        completedLessons: parsed.completedLessons || {},
        quizScores: parsed.quizScores || {},
        vocabLearned: parsed.vocabLearned || {},
        streak: parsed.streak || { lastVisitDate: null, current: 0, longest: 0 }
      };
    } catch (e) {
      console.warn("Progress: could not read localStorage, starting fresh.", e);
      return _emptyData();
    }
  }

  function _save(data) {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
      return true;
    } catch (e) {
      console.warn("Progress: could not write to localStorage.", e);
      return false;
    }
  }

  // Local YYYY-MM-DD (not UTC), so the streak lines up with the user's
  // own calendar day rather than flipping over at UTC midnight.
  function _todayStr() {
    const d = new Date();
    const y = d.getFullYear();
    const m = String(d.getMonth() + 1).padStart(2, "0");
    const day = String(d.getDate()).padStart(2, "0");
    return `${y}-${m}-${day}`;
  }

  function _daysBetween(a, b) {
    const da = new Date(a + "T00:00:00");
    const db = new Date(b + "T00:00:00");
    return Math.round((db - da) / 86400000);
  }

  return {
    markLessonComplete(lessonId) {
      const data = _load();
      data.completedLessons[lessonId] = true;
      _save(data);
    },

    isLessonComplete(lessonId) {
      const data = _load();
      return !!data.completedLessons[lessonId];
    },

    saveQuizScore(lessonId, correct, total) {
      const data = _load();
      data.quizScores[lessonId] = { correct, total };
      _save(data);
    },

    getQuizScore(lessonId) {
      const data = _load();
      return data.quizScores[lessonId] || null;
    },

    markVocabLearned(lessonId, vocabWords) {
      const data = _load();
      data.vocabLearned[lessonId] = vocabWords;
      _save(data);
    },

    getCompletedCount(totalWrittenLessons) {
      const data = _load();
      const completed = Object.keys(data.completedLessons).length;
      return { completed, total: totalWrittenLessons };
    },

    getAllVocabCount() {
      const data = _load();
      let count = 0;
      Object.values(data.vocabLearned).forEach(list => { count += list.length; });
      return count;
    },

    getVisitedLessonIds() {
      const data = _load();
      return Object.keys(data.vocabLearned);
    },

    /*
      Builds a flat list of vocab entries for every lesson the user has
      visited, pulling the full entry (english, pronunciation, example)
      from the live LESSONS data rather than storing a duplicate copy.
      Pass the global LESSONS object in, keeps this file independent
      from lessons-data.js loading order/shape.
    */
    getReviewVocab(LESSONS) {
      const data = _load();
      const out = [];
      Object.keys(data.vocabLearned).forEach(lessonId => {
        const lesson = LESSONS && LESSONS[lessonId];
        if (!lesson || !lesson.vocab) return;
        lesson.vocab.forEach(word => {
          out.push(Object.assign({ lessonId: lesson.id, lessonTitle: lesson.title }, word));
        });
      });
      return out;
    },

    /* --------------------------- Streak --------------------------- */

    // Call once per page load. Returns the up-to-date {current, longest}.
    recordVisitToday() {
      const data = _load();
      const today = _todayStr();
      const streak = data.streak || { lastVisitDate: null, current: 0, longest: 0 };

      if (streak.lastVisitDate === today) {
        // Already recorded today, no change.
      } else if (streak.lastVisitDate && _daysBetween(streak.lastVisitDate, today) === 1) {
        streak.current += 1;
      } else {
        streak.current = 1;
      }
      streak.longest = Math.max(streak.longest || 0, streak.current);
      streak.lastVisitDate = today;

      data.streak = streak;
      _save(data);
      return { current: streak.current, longest: streak.longest };
    },

    getStreak() {
      const data = _load();
      return {
        current: (data.streak && data.streak.current) || 0,
        longest: (data.streak && data.streak.longest) || 0
      };
    },

    /* ----------------------- Export / import ----------------------- */

    exportData() {
      const data = _load();
      return {
        schema: "learn-darija-progress",
        version: 1,
        exportedAt: new Date().toISOString(),
        data
      };
    },

    // Accepts a parsed JSON object (as produced by exportData()).
    // Returns { ok: true } or { ok: false, error }.
    importData(payload) {
      try {
        if (!payload || typeof payload !== "object") {
          return { ok: false, error: "File doesn't look like a Learn Darija progress export." };
        }
        const incoming = payload.data || payload; // tolerate a raw data object too
        if (
          typeof incoming !== "object" ||
          !incoming.completedLessons ||
          !incoming.quizScores ||
          !incoming.vocabLearned
        ) {
          return { ok: false, error: "File doesn't look like a Learn Darija progress export." };
        }
        const normalized = {
          completedLessons: incoming.completedLessons || {},
          quizScores: incoming.quizScores || {},
          vocabLearned: incoming.vocabLearned || {},
          streak: incoming.streak || { lastVisitDate: null, current: 0, longest: 0 }
        };
        const saved = _save(normalized);
        return saved ? { ok: true } : { ok: false, error: "Could not write to this browser's storage." };
      } catch (e) {
        return { ok: false, error: "Could not read that file as progress data." };
      }
    },

    resetAll() {
      localStorage.removeItem(STORAGE_KEY);
    }
  };
})();