/*
  audio.js
  --------
  Shared audio helper used by every 🔊 Listen button (lesson.js, review.js,
  glossary.js).

  Progressive enhancement, no data file changes needed:
  1. First, it tries to play a real recorded clip from:
       audio/<slug-of-latin-word>.mp3
     One recording per unique word, in a single flat "audio" folder, if
     the same word appears in multiple lessons, you only record it once.
     Save a clip at that exact path and the site plays your real voice
     automatically; nothing else to wire up.
  2. If that file doesn't exist yet, it silently falls back to the
     browser's built-in text-to-speech reading the phonetic
     "pronunciation" guide. That's an approximation, not a substitute
     for a native speaker, but means every word is at least audible
     right away, and gradually gets replaced as you record more.

  Filename convention (must match exactly, all lowercase):
    - Lowercase the word's "latin" spelling
    - Replace anything that isn't a-z or 0-9 with a single hyphen
    - Trim leading/trailing hyphens
    e.g. "Wach 3andkom wifi?" -> "wach-3andkom-wifi"
  recording-checklist.md lists the exact expected filename for every word.
*/

function slugify(text) {
  return String(text)
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-+|-+$)/g, "");
}

// Resolves the "audio/" folder relative to THIS script's own location,
// rather than relative to whatever page includes it. That way audio.js
// works unchanged whether it's loaded from the site root (glossary.html,
// review.html) or from a page one folder deep (lessons/<id>.html), and
// regardless of whether the whole site sits at a domain root or a
// GitHub Pages project subpath.
const AUDIO_JS_SELF_URL = (document.currentScript && document.currentScript.src) || null;
function audioFolderUrl() {
  if (!AUDIO_JS_SELF_URL) return "audio/"; // fallback if currentScript isn't available
  return new URL("audio/", AUDIO_JS_SELF_URL).href;
}

function recordedAudioPath(word) {
  const slug = slugify(word.latin);
  if (!slug) return null;
  return `${audioFolderUrl()}${slug}.mp3`;
}

// Best-effort TTS fallback, reads the phonetic pronunciation guide
// (e.g. "sa-lam") rather than the Latin spelling, since a generic
// voice would mispronounce the Latin spelling badly.
function speakWithTTS(word, buttonEl) {
  if (!("speechSynthesis" in window)) {
    if (buttonEl) {
      const original = buttonEl.textContent;
      buttonEl.textContent = "Audio not supported in this browser";
      setTimeout(() => { buttonEl.textContent = original; }, 2000);
    }
    return;
  }
  const textToSpeak = (word.pronunciation || word.latin || "").replace(/-/g, " ");
  if (!textToSpeak) return;
  try {
    window.speechSynthesis.cancel();
    const utter = new SpeechSynthesisUtterance(textToSpeak);
    utter.rate = 0.8;
    utter.pitch = 1;
    window.speechSynthesis.speak(utter);
  } catch (e) {
    console.warn("Speech synthesis failed.", e);
  }
}

/*
  Main entry point. `word` needs a `.latin` (and ideally `.pronunciation`)
  field. `buttonEl` is optional, used only to show a brief inline message
  if TTS itself isn't supported.
*/
function speakWord(word, buttonEl) {
  const path = recordedAudioPath(word);
  if (!path) {
    speakWithTTS(word, buttonEl);
    return;
  }

  const audio = new Audio(path);
  let usedRecording = false;

  audio.addEventListener("playing", () => { usedRecording = true; });
  audio.addEventListener("error", () => {
    if (!usedRecording) speakWithTTS(word, buttonEl);
  });

  audio.play().catch(() => {
    // No recording at that path yet (404), or autoplay was blocked;
    // either way, fall back to TTS so the button still does something.
    speakWithTTS(word, buttonEl);
  });
}