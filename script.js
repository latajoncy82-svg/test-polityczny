/**
 * TEST POLITYCZNY - GŁÓWNA LOGIKA APLIKACJI (WERSJA GLOBALNA 2026)
 * Obsługa 100 pytań, 32 ideologii, 43 światowych liderów i postaci historycznych (w tym liderów II wojny światowej), 15 partii międzynarodowych
 * 6 opcji odpowiedzi (w tym Neutralny / Umiarkowany vs. Nie mam zdania / Pomiń)
 * oraz 4 języków: PL, EN, RU, FR.
 */

// Stan testu
let currentLang = localStorage.getItem("ptp_lang") || "pl";
let currentTheme = localStorage.getItem("ptp_theme") || "theme-dark";
let currentTone = localStorage.getItem("ptp_tone") || "standard";
let currentAccent = localStorage.getItem("ptp_accent") || "blue";

let currentQuestionIndex = 0;
let userAnswers = (typeof questions !== "undefined" && Array.isArray(questions)) ? new Array(questions.length).fill(null) : [];
let animationFrameId = null;
let currentEconScore = 0;
let currentSocScore = 0;
let isTransitioning = false;
let transitionTimeoutId = null;

// Elementy DOM - Ekrany
const welcomeScreen = document.getElementById("welcomeScreen");
const questionScreen = document.getElementById("questionScreen");
const resultScreen = document.getElementById("resultScreen");

// Header
const headerAppTitle = document.getElementById("headerAppTitle");
const headerAppSubtitle = document.getElementById("headerAppSubtitle");
const headerEditionBadge = document.getElementById("headerEditionBadge");
const themeToggleBtn = document.getElementById("themeToggleBtn");
const themeIcon = document.getElementById("themeIcon");
const openSettingsBtn = document.getElementById("openSettingsBtn");
const closeSettingsBtn = document.getElementById("closeSettingsBtn");
const appearanceModal = document.getElementById("appearanceModal");

// Welcome Screen & Setup Panel
const setupTitle = document.getElementById("setupTitle");
const setupDesc = document.getElementById("setupDesc");
const langSelectLabel = document.getElementById("langSelectLabel");
const setupThemeLabel = document.getElementById("setupThemeLabel");
const setupToneLabel = document.getElementById("setupToneLabel");
const setupAccentLabel = document.getElementById("setupAccentLabel");

const themeDarkBtn = document.getElementById("themeDarkBtn");
const themeLightBtn = document.getElementById("themeLightBtn");
const themeDarkText = document.getElementById("themeDarkText");
const themeLightText = document.getElementById("themeLightText");

const toneStandardBtn = document.getElementById("toneStandardBtn");
const toneContrastBtn = document.getElementById("toneContrastBtn");
const toneSoftBtn = document.getElementById("toneSoftBtn");
const toneStandardText = document.getElementById("toneStandardText");
const toneContrastText = document.getElementById("toneContrastText");
const toneSoftText = document.getElementById("toneSoftText");

const accentBlueText = document.getElementById("accentBlueText");
const accentEmeraldText = document.getElementById("accentEmeraldText");
const accentPurpleText = document.getElementById("accentPurpleText");
const accentAmberText = document.getElementById("accentAmberText");
const accentCrimsonText = document.getElementById("accentCrimsonText");
const accentRoseText = document.getElementById("accentRoseText");

const badgePill = document.getElementById("badgePill");
const heroTitle = document.getElementById("heroTitle");
const heroDesc = document.getElementById("heroDesc");
const axisEconTitle = document.getElementById("axisEconTitle");
const axisEconDesc = document.getElementById("axisEconDesc");
const axisSocTitle = document.getElementById("axisSocTitle");
const axisSocDesc = document.getElementById("axisSocDesc");
const featureTime = document.getElementById("featureTime");
const featureAnon = document.getElementById("featureAnon");
const featureResults = document.getElementById("featureResults");
const startTestBtn = document.getElementById("startTestBtn");
const resumeTestBtn = document.getElementById("resumeTestBtn");

// Question Screen
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");
const questionCounterText = document.getElementById("questionCounterText");
const questionCategory = document.getElementById("questionCategory");
const progressBar = document.getElementById("progressBar");
const questionText = document.getElementById("questionText");
const answersContainer = document.getElementById("answersContainer");
const keyboardHint = document.getElementById("keyboardHint");

// Results Screen
const resultBadge = document.getElementById("resultBadge");
const ideologyMatchBadge = document.getElementById("ideologyMatchBadge");
const ideologyTitle = document.getElementById("ideologyTitle");
const ideologySubtitle = document.getElementById("ideologySubtitle");
const ideologySectionTitle = document.getElementById("ideologySectionTitle");
const ideologyDescription = document.getElementById("ideologyDescription");
const keyFiguresLabel = document.getElementById("keyFiguresLabel");
const keyFiguresList = document.getElementById("keyFiguresList");
const secondaryIdeologiesTitle = document.getElementById("secondaryIdeologiesTitle");
const secondaryIdeologiesList = document.getElementById("secondaryIdeologiesList");

// World Politician
const politicianCardTitle = document.getElementById("politicianCardTitle");
const politicianCardSubtitle = document.getElementById("politicianCardSubtitle");
const politicianMatchBadge = document.getElementById("politicianMatchBadge");
const politicianAvatarContainer = document.getElementById("politicianAvatarContainer");
const politicianPhoto = document.getElementById("politicianPhoto");
const politicianFlag = document.getElementById("politicianFlag");
const politicianName = document.getElementById("politicianName");
const politicianCountry = document.getElementById("politicianCountry");
const politicianRole = document.getElementById("politicianRole");
const politicianQuoteLabel = document.getElementById("politicianQuoteLabel");
const politicianQuote = document.getElementById("politicianQuote");
const politicianWhyVoteLabel = document.getElementById("politicianWhyVoteLabel");
const politicianWhyVoteText = document.getElementById("politicianWhyVoteText");
const otherPoliticiansTitle = document.getElementById("otherPoliticiansTitle");
const otherPoliticiansList = document.getElementById("otherPoliticiansList");
const clickLeaderHint = document.getElementById("clickLeaderHint");

// World Party
const partyCardTitle = document.getElementById("partyCardTitle");
const partyCardSubtitle = document.getElementById("partyCardSubtitle");
const partyMatchBadge = document.getElementById("partyMatchBadge");
const partyEmblem = document.getElementById("partyEmblem");
const partyName = document.getElementById("partyName");
const partyTypeLabel = document.getElementById("partyTypeLabel");
const partyType = document.getElementById("partyType");
const partyManifestoLabel = document.getElementById("partyManifestoLabel");
const partyManifestoText = document.getElementById("partyManifestoText");
const otherPartiesTitle = document.getElementById("otherPartiesTitle");
const otherPartiesList = document.getElementById("otherPartiesList");
const clickPartyHint = document.getElementById("clickPartyHint");

// Sectors Breakdown
const categoryBreakdownTitle = document.getElementById("categoryBreakdownTitle");
const sectorsGrid = document.getElementById("sectorsGrid");

// Meters & Canvas
const econMeterLeft = document.getElementById("econMeterLeft");
const econMeterRight = document.getElementById("econMeterRight");
const socMeterLeft = document.getElementById("socMeterLeft");
const socMeterRight = document.getElementById("socMeterRight");
const econScoreText = document.getElementById("econScoreText");
const socScoreText = document.getElementById("socScoreText");
const econFillBar = document.getElementById("econFillBar");
const socFillBar = document.getElementById("socFillBar");
const econPin = document.getElementById("econPin");
const socPin = document.getElementById("socPin");
const compassCanvas = document.getElementById("compassCanvas");
const legendRedText = document.getElementById("legendRedText");
const legendGreenText = document.getElementById("legendGreenText");
const legendBlueText = document.getElementById("legendBlueText");
const legendYellowText = document.getElementById("legendYellowText");

// Actions & Review
const downloadResultBtn = document.getElementById("downloadResultBtn");
const copyShareBtn = document.getElementById("copyShareBtn");
const toggleAnswersBtn = document.getElementById("toggleAnswersBtn");
const restartBtn = document.getElementById("restartBtn");
const answersReviewSection = document.getElementById("answersReviewSection");
const reviewTitle = document.getElementById("reviewTitle");
const closeReviewBtn = document.getElementById("closeReviewBtn");
const reviewList = document.getElementById("reviewList");
const footerText = document.getElementById("footerText");

// =========================================================================
// INICJALIZACJA APLIKACJI
// =========================================================================
function initApp() {
  try { setupAppearance(); } catch (e) { console.error("setupAppearance error:", e); }
  try { applyLanguage(currentLang); } catch (e) { console.error("applyLanguage error:", e); }
  try { setupEventListeners(); } catch (e) { console.error("setupEventListeners error:", e); }
  try { setupKeyboardNavigation(); } catch (e) { console.error("setupKeyboardNavigation error:", e); }
  try { updateResumeButtonText(); } catch (e) { console.error("updateResumeButtonText error:", e); }
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initApp);
} else {
  initApp();
}

// =========================================================================
// INTERAKTYWNE ANIMACJE KLIKANIA (RIPPLE EFFECT)
// =========================================================================
function createRippleEffect(e, forcedEl = null) {
  const btn = forcedEl || (e ? (e.currentTarget || (e.target && e.target.closest ? (e.target.closest("button, .setup-pill-btn, .accent-color-btn, .podium-mini-card, .btn-action, .answer-btn") || e.target) : e.target)) : null);
  if (!btn) return;

  // Clean up any lingering ripple on the same button first
  const oldRipple = btn.querySelector(".ripple-wave");
  if (oldRipple) oldRipple.remove();

  const width = btn.clientWidth || 100;
  const height = btn.clientHeight || 48;
  const diameter = Math.max(width, height) * 1.5;
  const radius = diameter / 2;

  let posX = width / 2;
  let posY = height / 2;
  if (e && typeof e.offsetX === "number" && e.offsetX > 0) {
    posX = e.offsetX;
    posY = e.offsetY;
  }

  const circle = document.createElement("span");
  circle.className = "ripple-wave";
  circle.style.width = circle.style.height = `${diameter}px`;
  circle.style.left = `${posX - radius}px`;
  circle.style.top = `${posY - radius}px`;

  btn.appendChild(circle);
  circle.addEventListener("animationend", () => circle.remove(), { once: true });
  setTimeout(() => circle.remove(), 260);
}

// =========================================================================
// KONFIGURACJA WYGLĄDU (MOTYW, KONTRAST, AKCENT)
// =========================================================================
function setupAppearance() {
  applyTheme(currentTheme, false);
  applyTone(currentTone, false);
  applyAccent(currentAccent, false);
}

function applyTheme(theme, save = true) {
  currentTheme = theme;
  document.body.classList.remove("theme-dark", "theme-light");
  document.body.classList.add(theme);

  if (save) localStorage.setItem("ptp_theme", theme);

  if (themeIcon) {
    themeIcon.textContent = theme === "theme-dark" ? "☀️" : "🌙";
  }

  if (themeDarkBtn && themeLightBtn) {
    themeDarkBtn.classList.toggle("active", theme === "theme-dark");
    themeLightBtn.classList.toggle("active", theme === "theme-light");
  }

  if (resultScreen && resultScreen.classList.contains("active")) {
    drawCompass(currentEconScore, currentSocScore);
  }
}

function toggleTheme() {
  const next = currentTheme === "theme-dark" ? "theme-light" : "theme-dark";
  applyTheme(next);
}

function applyTone(tone, save = true) {
  currentTone = tone;
  document.body.classList.remove("tone-standard", "tone-contrast", "tone-soft");
  document.body.classList.add(`tone-${tone}`);

  if (save) localStorage.setItem("ptp_tone", tone);

  document.querySelectorAll(".tone-choice-btn").forEach(btn => {
    btn.classList.toggle("active", btn.dataset.tone === tone);
  });
}

function applyAccent(accent, save = true) {
  currentAccent = accent;
  const palettes = ["blue", "emerald", "purple", "amber", "crimson", "rose"];
  palettes.forEach(p => document.body.classList.remove(`theme-${p}`));
  document.body.classList.add(`theme-${accent}`);

  if (save) localStorage.setItem("ptp_accent", accent);

  document.querySelectorAll(".accent-color-btn").forEach(btn => {
    btn.classList.toggle("active", btn.dataset.accent === accent);
  });

  if (resultScreen && resultScreen.classList.contains("active")) {
    drawCompass(currentEconScore, currentSocScore);
  }
}

// =========================================================================
// WIELOJĘZYCZNOŚĆ (I18N: PL, EN, RU, FR)
// =========================================================================
function setLanguage(lang) {
  if (!uiTranslations[lang]) return;
  currentLang = lang;
  localStorage.setItem("ptp_lang", lang);
  applyLanguage(lang);

  if (questionScreen && questionScreen.classList.contains("active")) {
    renderQuestion();
  }

  if (resultScreen && resultScreen.classList.contains("active")) {
    showResults(false);
  }
}

function applyLanguage(lang) {
  const t = uiTranslations[lang];
  if (!t) return;

  // Nagłówek
  if (headerAppTitle) headerAppTitle.textContent = t.appTitle;
  if (headerAppSubtitle) headerAppSubtitle.textContent = t.appSubtitle;
  if (headerEditionBadge && t.headerEditionBadge) headerEditionBadge.textContent = t.headerEditionBadge;
  if (themeToggleBtn) themeToggleBtn.title = t.themeToggleTitle;

  // Setup Panel na ekranie startowym
  if (setupTitle && t.setupTitle) setupTitle.textContent = t.setupTitle;
  if (setupDesc && t.setupDesc) setupDesc.textContent = t.setupDesc;
  if (langSelectLabel) langSelectLabel.textContent = t.langSelectLabel;
  if (setupThemeLabel && t.setupThemeLabel) setupThemeLabel.textContent = t.setupThemeLabel;
  if (setupToneLabel && t.setupToneLabel) setupToneLabel.textContent = t.setupToneLabel;
  if (setupAccentLabel && t.setupAccentLabel) setupAccentLabel.textContent = t.setupAccentLabel;

  if (themeDarkText && t.themeDark) themeDarkText.textContent = t.themeDark.replace("🌙 ", "");
  if (themeLightText && t.themeLight) themeLightText.textContent = t.themeLight.replace("☀️ ", "");

  if (toneStandardText && t.toneStandard) toneStandardText.textContent = t.toneStandard.replace("🔆 ", "");
  if (toneContrastText && t.toneContrast) toneContrastText.textContent = t.toneContrast.replace("⚡ ", "");
  if (toneSoftText && t.toneSoft) toneSoftText.textContent = t.toneSoft.replace("🕯️ ", "");

  if (accentBlueText && t.accentBlue) accentBlueText.textContent = t.accentBlue;
  if (accentEmeraldText && t.accentEmerald) accentEmeraldText.textContent = t.accentEmerald;
  if (accentPurpleText && t.accentPurple) accentPurpleText.textContent = t.accentPurple;
  if (accentAmberText && t.accentAmber) accentAmberText.textContent = t.accentAmber;
  if (accentCrimsonText && t.accentCrimson) accentCrimsonText.textContent = t.accentCrimson;
  if (accentRoseText && t.accentRose) accentRoseText.textContent = t.accentRose;

  // Welcome Screen
  if (badgePill) badgePill.textContent = t.badgePill;
  if (heroTitle) heroTitle.textContent = t.heroTitle;
  if (heroDesc) heroDesc.textContent = t.heroDesc;
  if (axisEconTitle) axisEconTitle.textContent = t.axisEconTitle;
  if (axisEconDesc) axisEconDesc.textContent = t.axisEconDesc;
  if (axisSocTitle) axisSocTitle.textContent = t.axisSocTitle;
  if (axisSocDesc) axisSocDesc.textContent = t.axisSocDesc;
  if (featureTime) featureTime.textContent = t.featureTime;
  if (featureAnon) featureAnon.textContent = t.featureAnon;
  if (featureResults) featureResults.textContent = t.featureResults;
  if (startTestBtn) {
    const rawStart = t.startBtn || "Rozpocznij test teraz (100 pytań)";
    const cleanStart = rawStart.replace(/\s*➔\s*$/, "");
    startTestBtn.innerHTML = `<span class="cta-btn-text">${cleanStart}</span><span class="cta-btn-arrow" aria-hidden="true">➔</span>`;
  }

  // Quiz Screen
  if (prevBtn) prevBtn.textContent = t.prevBtn;
  if (nextBtn) nextBtn.textContent = t.nextBtn || "Następne →";
  if (keyboardHint) keyboardHint.textContent = t.keyboardHint;

  // Results Screen
  if (resultBadge) resultBadge.textContent = t.resultBadge;
  if (legendRedText) legendRedText.textContent = t.legendRed;
  if (legendGreenText) legendGreenText.textContent = t.legendGreen;
  if (legendBlueText) legendBlueText.textContent = t.legendBlue;
  if (legendYellowText) legendYellowText.textContent = t.legendYellow;
  if (econMeterLeft) econMeterLeft.textContent = t.econMeterLeft;
  if (econMeterRight) econMeterRight.textContent = t.econMeterRight;
  if (socMeterLeft) socMeterLeft.textContent = t.socMeterLeft;
  if (socMeterRight) socMeterRight.textContent = t.socMeterRight;
  if (ideologySectionTitle) ideologySectionTitle.textContent = t.ideologySectionTitle;
  if (keyFiguresLabel) keyFiguresLabel.textContent = t.keyFiguresLabel;
  if (secondaryIdeologiesTitle) secondaryIdeologiesTitle.textContent = t.secondaryIdeologiesTitle;
  if (politicianCardTitle) politicianCardTitle.textContent = t.politicianCardTitle;
  if (politicianCardSubtitle) politicianCardSubtitle.textContent = t.politicianCardSubtitle;
  if (politicianWhyVoteLabel) politicianWhyVoteLabel.textContent = t.politicianWhyVoteLabel;
  if (politicianQuoteLabel) politicianQuoteLabel.textContent = t.politicianQuoteLabel;
  if (otherPoliticiansTitle) otherPoliticiansTitle.textContent = t.otherPoliticiansTitle;
  if (clickLeaderHint && t.clickLeaderHint) clickLeaderHint.textContent = t.clickLeaderHint;
  if (partyCardTitle) partyCardTitle.textContent = t.partyCardTitle;
  if (partyCardSubtitle) partyCardSubtitle.textContent = t.partyCardSubtitle;
  if (partyTypeLabel) partyTypeLabel.textContent = t.partyTypeLabel;
  if (partyManifestoLabel) partyManifestoLabel.textContent = t.partyManifestoLabel;
  if (otherPartiesTitle) otherPartiesTitle.textContent = t.otherPartiesTitle;
  if (clickPartyHint && t.clickPartyHint) clickPartyHint.textContent = t.clickPartyHint;
  if (categoryBreakdownTitle) categoryBreakdownTitle.textContent = t.categoryBreakdownTitle;
  if (downloadResultBtn) downloadResultBtn.textContent = t.downloadBtn;
  if (copyShareBtn) copyShareBtn.textContent = t.copyBtn;
  if (toggleAnswersBtn) toggleAnswersBtn.textContent = t.reviewBtn;
  if (restartBtn) restartBtn.textContent = t.restartBtn;
  if (reviewTitle) reviewTitle.textContent = t.reviewTitle;
  if (closeReviewBtn) closeReviewBtn.textContent = t.closeBtn;
  if (footerText) footerText.textContent = t.footerText;

  // Aktywne przyciski języka w panelu
  document.querySelectorAll(".lang-card-btn").forEach(btn => {
    btn.classList.toggle("active", btn.dataset.lang === lang);
  });

  updateResumeButtonText();
  if (answersContainer) answersContainer.innerHTML = "";
  if (questionScreen && questionScreen.classList.contains("active")) {
    renderQuestion();
  } else if (resultScreen && resultScreen.classList.contains("active")) {
    showResults(false);
  }
}

// =========================================================================
// ZDARZENIA I INTERAKCJA
// =========================================================================
function setupEventListeners() {
  if (themeToggleBtn) {
    themeToggleBtn.addEventListener("click", (e) => {
      createRippleEffect(e);
      toggleTheme();
    });
  }

  // Panel wyboru języka
  document.querySelectorAll(".lang-card-btn").forEach(btn => {
    btn.addEventListener("click", (e) => {
      createRippleEffect(e);
      setLanguage(e.currentTarget.dataset.lang);
    });
  });

  // Panel wyboru motywu (Ciemny / Jasny)
  document.querySelectorAll(".theme-choice-btn").forEach(btn => {
    btn.addEventListener("click", (e) => {
      createRippleEffect(e);
      applyTheme(e.currentTarget.dataset.theme);
    });
  });

  // Panel wyboru jasności i kontrastu
  document.querySelectorAll(".tone-choice-btn").forEach(btn => {
    btn.addEventListener("click", (e) => {
      createRippleEffect(e);
      applyTone(e.currentTarget.dataset.tone);
    });
  });

  // Panel wyboru koloru akcentu
  document.querySelectorAll(".accent-color-btn").forEach(btn => {
    btn.addEventListener("click", (e) => {
      createRippleEffect(e);
      applyAccent(e.currentTarget.dataset.accent);
    });
  });

  // Otwieranie i zamykanie okna personalizacji (modal)
  if (openSettingsBtn && appearanceModal) {
    openSettingsBtn.addEventListener("click", (e) => {
      createRippleEffect(e);
      appearanceModal.classList.toggle("hidden");
    });
  }

  if (closeSettingsBtn && appearanceModal) {
    closeSettingsBtn.addEventListener("click", (e) => {
      createRippleEffect(e);
      appearanceModal.classList.add("hidden");
    });
  }

  if (appearanceModal) {
    appearanceModal.addEventListener("click", (e) => {
      if (e.target === appearanceModal) {
        appearanceModal.classList.add("hidden");
      }
    });
  }

  // Przyciski akcji
  if (startTestBtn) {
    startTestBtn.addEventListener("click", (e) => {
      createRippleEffect(e);
      resetProgress();
      startQuiz();
    });
  }

  if (resumeTestBtn) {
    resumeTestBtn.addEventListener("click", (e) => {
      createRippleEffect(e);
      resumeQuiz();
    });
  }

  if (prevBtn) {
    prevBtn.addEventListener("click", (e) => {
      createRippleEffect(e);
      goToPreviousQuestion();
    });
  }

  if (nextBtn) {
    nextBtn.addEventListener("click", (e) => {
      createRippleEffect(e);
      goToNextQuestion();
    });
  }

  if (restartBtn) {
    restartBtn.addEventListener("click", (e) => {
      createRippleEffect(e);
      resetQuiz();
    });
  }

  if (downloadResultBtn) {
    downloadResultBtn.addEventListener("click", (e) => {
      createRippleEffect(e);
      downloadResultImage();
    });
  }

  if (copyShareBtn) {
    copyShareBtn.addEventListener("click", (e) => {
      createRippleEffect(e);
      copyResultSummary();
    });
  }

  if (toggleAnswersBtn) {
    toggleAnswersBtn.addEventListener("click", (e) => {
      createRippleEffect(e);
      toggleReview();
    });
  }

  if (closeReviewBtn) {
    closeReviewBtn.addEventListener("click", (e) => {
      createRippleEffect(e);
      answersReviewSection.classList.add("hidden");
    });
  }
}

function setupKeyboardNavigation() {
  window.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      if (appearanceModal && !appearanceModal.classList.contains("hidden")) {
        appearanceModal.classList.add("hidden");
        return;
      }
      if (answersReviewSection && !answersReviewSection.classList.contains("hidden")) {
        answersReviewSection.classList.add("hidden");
        return;
      }
    }
    if (!questionScreen || !questionScreen.classList.contains("active")) return;

    let targetIdx = -1;
    let targetVal = null;

    if (e.key === "1") { targetIdx = 0; targetVal = 2; }
    else if (e.key === "2") { targetIdx = 1; targetVal = 1; }
    else if (e.key === "3") { targetIdx = 2; targetVal = 0; } // Neutralny / Umiarkowany (wliczany do mianownika)
    else if (e.key === "4") { targetIdx = 3; targetVal = -1; }
    else if (e.key === "5") { targetIdx = 4; targetVal = -2; }
    else if (e.key === "6" || e.key.toLowerCase() === "s" || e.key === "0") { targetIdx = 5; targetVal = "skip"; } // Pomiń / Nie mam zdania
    else if (e.key === "ArrowLeft" || e.key === "Backspace") {
      goToPreviousQuestion();
      return;
    } else if (e.key === "ArrowRight") {
      goToNextQuestion();
      return;
    }

    if (targetIdx !== -1) {
      const btns = answersContainer.children;
      const targetBtn = btns[targetIdx];
      if (targetBtn) {
        createRippleEffect(null, targetBtn);
        handleAnswerSelect(targetVal, targetBtn);
      } else {
        handleAnswerSelect(targetVal);
      }
    }
  });
}

function switchScreen(activeScreen) {
  [welcomeScreen, questionScreen, resultScreen].forEach(s => s && s.classList.remove("active"));
  if (activeScreen) activeScreen.classList.add("active");
  window.scrollTo({ top: 0, behavior: "smooth" });
}

// =========================================================================
// ZAPIS POSTĘPÓW (LOCAL STORAGE)
// =========================================================================
function saveProgress() {
  try {
    const data = {
      answers: userAnswers,
      currentIndex: currentQuestionIndex
    };
    localStorage.setItem("ptp_progress", JSON.stringify(data));
  } catch (e) {}
}

function checkSavedProgress() {
  try {
    const raw = localStorage.getItem("ptp_progress");
    if (!raw) return null;
    const data = JSON.parse(raw);
    if (data && Array.isArray(data.answers) && data.answers.some(a => a !== null)) {
      return data;
    }
  } catch (e) {}
  return null;
}

function updateResumeButtonText() {
  if (!resumeTestBtn) return;
  const saved = checkSavedProgress();
  const resumeContainer = document.getElementById("resumePromptContainer");
  if (saved) {
    const t = uiTranslations[currentLang] || uiTranslations.pl;
    const resumeTxt = (t.resumeBtn || "Kontynuuj test ({current}/{total}) ➔")
      .replace("{current}", saved.currentIndex + 1)
      .replace("{total}", questions.length);
    const cleanResume = resumeTxt.replace(/\s*➔\s*$/, "");
    resumeTestBtn.innerHTML = `<span class="resume-btn-text">${cleanResume}</span><span class="resume-btn-arrow" aria-hidden="true">➔</span>`;
    resumeTestBtn.classList.remove("hidden");
    if (resumeContainer) resumeContainer.classList.remove("hidden");
  } else {
    resumeTestBtn.classList.add("hidden");
    if (resumeContainer) resumeContainer.classList.add("hidden");
  }
}

function resetProgress() {
  try {
    localStorage.removeItem("ptp_progress");
  } catch (e) {}
  const resumeContainer = document.getElementById("resumePromptContainer");
  if (resumeContainer) resumeContainer.classList.add("hidden");
  if (resumeTestBtn) resumeTestBtn.classList.add("hidden");
}

function resumeQuiz() {
  const saved = checkSavedProgress();
  if (saved) {
    userAnswers = saved.answers;
    currentQuestionIndex = Math.min(questions.length - 1, Math.max(0, saved.currentIndex || 0));
    switchScreen(questionScreen);
    renderQuestion();
  } else {
    startQuiz();
  }
}

// =========================================================================
// PRZEBIEG TESTU (QUIZ ENGINE)
// =========================================================================
function startQuiz() {
  currentQuestionIndex = 0;
  userAnswers.fill(null);
  switchScreen(questionScreen);
  renderQuestion();
}

function renderQuestion() {
  const q = questions[currentQuestionIndex];
  const t = uiTranslations[currentLang];

  // Numeracja i licznik
  const counterText = t.questionCounter
    .replace("{current}", currentQuestionIndex + 1)
    .replace("{total}", questions.length);
  questionCounterText.textContent = counterText;

  // Kategoria
  const catObj = categories[q.categoryKey];
  questionCategory.textContent = catObj ? (catObj[currentLang] || catObj.pl) : q.categoryKey;

  // Treść pytania
  questionText.textContent = q.text[currentLang] || q.text.pl;

  // Pasek postępu
  const progressPct = ((currentQuestionIndex) / questions.length) * 100;
  progressBar.style.width = `${Math.max(1, progressPct)}%`;

  // Przyciski nawigacji
  prevBtn.disabled = currentQuestionIndex === 0;
  if (nextBtn) {
    nextBtn.disabled = currentQuestionIndex === questions.length - 1 || userAnswers[currentQuestionIndex] === null;
  }

  // Generowanie lub błyskawiczna aktualizacja przycisków 6 odpowiedzi (zero layout thrashing)
  const existingBtns = answersContainer.children;
  if (existingBtns.length === answerOptions.length) {
    for (let idx = 0; idx < answerOptions.length; idx++) {
      existingBtns[idx].classList.toggle("selected-answer", userAnswers[currentQuestionIndex] === answerOptions[idx].value);
    }
  } else {
    answersContainer.innerHTML = "";
    answerOptions.forEach((opt, idx) => {
      const btn = document.createElement("button");
      btn.type = "button";
      btn.className = `answer-btn ${opt.className}`;

      const labelText = opt.label[currentLang] || opt.label.pl;
      const hintText = opt.hint ? (opt.hint[currentLang] || opt.hint.pl) : "";
      const badgeText = opt.badge ? (opt.badge[currentLang] || opt.badge.pl) : `${idx + 1}`;

      btn.innerHTML = `
        <div class="answer-left">
          <span class="answer-shortcut-tag">${idx + 1}</span>
          <div class="answer-text-group">
            <span class="answer-label-text">${labelText}</span>
            <span class="answer-hint-sub" style="${hintText ? '' : 'display:none;'}">${hintText}</span>
          </div>
        </div>
        <div class="answer-right">
          <span class="answer-badge-pill">${badgeText}</span>
          <span class="answer-check-icon">✓</span>
        </div>
      `;

      if (userAnswers[currentQuestionIndex] === opt.value) {
        btn.classList.add("selected-answer");
      }

      btn.addEventListener("click", (e) => {
        createRippleEffect(e, btn);
        handleAnswerSelect(opt.value, btn);
      });

      answersContainer.appendChild(btn);
    });
  }
}

function handleAnswerSelect(val, clickedBtn = null) {
  // If user answers quickly while a timeout is already ticking, immediately advance previous question
  if (transitionTimeoutId) {
    clearTimeout(transitionTimeoutId);
    transitionTimeoutId = null;
    if (currentQuestionIndex < questions.length - 1) {
      currentQuestionIndex++;
    }
  }

  userAnswers[currentQuestionIndex] = val;
  saveProgress();

  if (clickedBtn) {
    const btns = answersContainer.children;
    for (let i = 0; i < btns.length; i++) {
      btns[i].classList.remove("selected-answer");
    }
    clickedBtn.classList.add("selected-answer");
  }

  isTransitioning = true;
  transitionTimeoutId = setTimeout(() => {
    transitionTimeoutId = null;
    isTransitioning = false;
    if (currentQuestionIndex < questions.length - 1) {
      currentQuestionIndex++;
      renderQuestion();
    } else {
      progressBar.style.width = "100%";
      setTimeout(() => showResults(true), 50);
    }
  }, 50);
}

function goToNextQuestion() {
  if (currentQuestionIndex < questions.length - 1 && userAnswers[currentQuestionIndex] !== null) {
    currentQuestionIndex++;
    renderQuestion();
  }
}

function goToPreviousQuestion() {
  if (currentQuestionIndex > 0) {
    currentQuestionIndex--;
    renderQuestion();
  }
}

// =========================================================================
// KALKULACJA PUNKTÓW (DISTINCT NEUTRAL VS. INDEPENDENT SKIP)
// =========================================================================
function calculateScores() {
  let econRaw = 0;
  let econMax = 0;
  let socRaw = 0;
  let socMax = 0;

  questions.forEach((q, idx) => {
    const ans = userAnswers[idx];

    // Jeśli odpowiedź to "skip" (Nie mam zdania / Pomiń) lub brak odpowiedzi:
    // Pytanie jest całkowicie wyłączone z kalkulacji — nie rozwadnia wyniku!
    if (ans === "skip" || ans === null || ans === undefined) {
      return;
    }

    // Jeśli odpowiedź to 0 (Neutralny / Umiarkowany):
    // ans * q.multiplier wynosi 0, ale max rośnie o 2 -> wliczane do mianownika (pozycja centrowa!)
    if (q.axis === "econ") {
      econRaw += ans * q.multiplier;
      econMax += 2;
    } else if (q.axis === "soc") {
      socRaw += ans * q.multiplier;
      socMax += 2;
    }
  });

  const econScore = econMax > 0 ? Math.max(-100, Math.min(100, Math.round((econRaw / econMax) * 100))) : 0;
  const socScore = socMax > 0 ? Math.max(-100, Math.min(100, Math.round((socRaw / socMax) * 100))) : 0;

  return { econScore, socScore };
}

function calculateSimilarity(userEcon, userSoc, targetEcon, targetSoc) {
  const dist = Math.hypot(userEcon - targetEcon, userSoc - targetSoc);
  const maxDist = 282.84;
  const similarity = Math.max(0, Math.min(100, Math.round(100 - (dist / maxDist) * 100)));
  return { dist, similarity };
}

function calculateSectorBreakdown() {
  const sectorScores = {};

  Object.keys(categories).forEach(catKey => {
    const catQuestions = questions.filter(q => q.categoryKey === catKey);
    let raw = 0;
    let max = 0;
    let answeredCount = 0;

    catQuestions.forEach(q => {
      const idx = q.id - 1;
      const ans = userAnswers[idx];
      if (ans === "skip" || ans === null || ans === undefined) {
        return;
      }
      raw += ans * q.multiplier;
      max += 2;
      answeredCount++;
    });

    const scorePct = max > 0 ? Math.round((raw / max) * 100) : 0;
    const axis = catQuestions[0] ? catQuestions[0].axis : "econ";
    sectorScores[catKey] = { scorePct, axis, count: catQuestions.length, answeredCount };
  });

  return sectorScores;
}

// =========================================================================
// WYŚWIETLANIE WYNIKÓW
// =========================================================================
let activePoliticianId = null;
let activePartyId = null;
let currentRankedPoliticians = [];
let currentRankedParties = [];

function createSvgAvatar(name, color = "#3b82f6") {
  let initials = "";
  if (name.includes("Martin Luther King")) {
    initials = "MLK";
  } else {
    const parts = name.replace(/[^a-zA-ZąćęłńóśźżĄĆĘŁŃÓŚŹŻ\s]/g, "").trim().split(/\s+/).filter(p => !['jr', 'sr', 'ii', 'iii'].includes(p.toLowerCase()));
    if (parts.length >= 2) {
      initials = (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
    } else if (parts[0]) {
      initials = parts[0].substring(0, 2).toUpperCase();
    } else {
      initials = "P";
    }
  }
  const cleanInitials = initials || "P";
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="100" height="100">
    <defs>
      <linearGradient id="g_${encodeURIComponent(cleanInitials)}" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="${color}" />
        <stop offset="100%" stop-color="#0f172a" />
      </linearGradient>
    </defs>
    <rect width="100" height="100" rx="50" fill="url(#g_${encodeURIComponent(cleanInitials)})" />
    <circle cx="50" cy="50" r="46" fill="none" stroke="rgba(255,255,255,0.25)" stroke-width="2.5"/>
    <text x="50" y="58" font-family="'Plus Jakarta Sans', system-ui, sans-serif" font-size="34" font-weight="800" fill="#ffffff" text-anchor="middle" dominant-baseline="middle">${cleanInitials}</text>
  </svg>`;
  return `data:image/svg+xml;utf8,${encodeURIComponent(svg)}`;
}

function getPoliticianName(pol) {
  if (!pol) return "";
  if (typeof pol.name === "object" && pol.name !== null) {
    return pol.name[currentLang] || pol.name.en || pol.name.pl || "";
  }
  return pol.name || "";
}

function renderPoliticianProfile(pol, isTop = false) {
  const t = uiTranslations[currentLang];
  const displayName = getPoliticianName(pol);
  politicianMatchBadge.textContent = `${t.politicianMatchLabel} ${pol.similarity}%`;
  politicianFlag.textContent = pol.flag;
  politicianName.textContent = displayName;
  politicianCountry.textContent = pol.country[currentLang] || pol.country.pl;
  politicianRole.textContent = pol.role[currentLang] || pol.role.pl;
  politicianQuote.textContent = pol.quote[currentLang] || pol.quote.pl;
  politicianWhyVoteText.textContent = pol.whyVote[currentLang] || pol.whyVote.pl;
  activePoliticianId = pol.id;

  const color = pol.color || "#3b82f6";
  const gradient = pol.gradient || `linear-gradient(135deg, ${color}, #1d4ed8)`;

  if (politicianPhoto) {
    politicianPhoto.alt = displayName;
    const localSrc = pol.localPhoto || `assets/politicians/${pol.id}.jpg`;
    const remoteSrc = pol.photoUrl || createSvgAvatar(displayName, color);

    politicianPhoto.dataset.fallbackTried = "0";
    politicianPhoto.onerror = function() {
      if (this.dataset.fallbackTried === "1") {
        this.onerror = null;
        this.src = createSvgAvatar(displayName, color);
      } else {
        this.dataset.fallbackTried = "1";
        this.src = remoteSrc;
      }
    };
    politicianPhoto.src = localSrc;
  }

  if (politicianAvatarContainer) {
    politicianAvatarContainer.style.setProperty("--politician-color", color);
    politicianAvatarContainer.style.borderColor = color;
    politicianAvatarContainer.style.boxShadow = `0 0 22px ${color}55, 0 4px 14px rgba(0, 0, 0, 0.35)`;
  }

  const cardWrapper = document.querySelector(".politician-match-card");
  if (cardWrapper) {
    cardWrapper.style.setProperty("--politician-card-color", color);
    cardWrapper.style.borderColor = `${color}45`;
    cardWrapper.style.boxShadow = `0 12px 36px -8px ${color}28, 0 4px 16px rgba(0, 0, 0, 0.25)`;
  }

  if (politicianMatchBadge) {
    politicianMatchBadge.style.background = gradient;
    politicianMatchBadge.style.boxShadow = `0 4px 14px ${color}50`;
    politicianMatchBadge.style.borderColor = `${color}80`;
  }

  document.querySelectorAll(".podium-mini-card.politician-card-item").forEach(card => {
    card.classList.toggle("active-podium", card.dataset.id === pol.id);
  });
}

function renderPartyProfile(party, isTop = false) {
  const t = uiTranslations[currentLang];
  partyMatchBadge.textContent = `${t.partyMatchLabel} ${party.similarity}%`;
  partyEmblem.textContent = party.emblem;
  partyName.textContent = party.name[currentLang] || party.name.pl;
  partyType.textContent = party.type[currentLang] || party.type.pl;
  partyManifestoText.textContent = party.manifesto[currentLang] || party.manifesto.pl;
  activePartyId = party.id;

  document.querySelectorAll(".podium-mini-card.party-card-item").forEach(card => {
    card.classList.toggle("active-podium", card.dataset.id === party.id);
  });
}

function showResults(animated = true) {
  const { econScore, socScore } = calculateScores();
  currentEconScore = econScore;
  currentSocScore = socScore;
  const t = uiTranslations[currentLang];

  // 1. Dopasowanie Ideologii (32 ideologie)
  const rankedIdeologies = worldIdeologies.map(ideo => {
    const { dist, similarity } = calculateSimilarity(econScore, socScore, ideo.coordinates.econ, ideo.coordinates.soc);
    return { ...ideo, dist, similarity };
  }).sort((a, b) => a.dist - b.dist);

  const topIdeology = rankedIdeologies[0];
  const secondaryIdeologies = rankedIdeologies.slice(1, 4);

  if (ideologyMatchBadge) {
    ideologyMatchBadge.textContent = `${t.primaryIdeologyMatch || 'Zgodność:'} ${topIdeology.similarity}%`;
  }
  ideologyTitle.textContent = topIdeology.name[currentLang] || topIdeology.name.pl;
  ideologySubtitle.textContent = topIdeology.subtitle[currentLang] || topIdeology.subtitle.pl;
  ideologyDescription.textContent = topIdeology.desc[currentLang] || topIdeology.desc.pl;

  // Postacie i myśliciele
  keyFiguresList.innerHTML = "";
  topIdeology.keyFigures.forEach(fig => {
    const tag = document.createElement("span");
    tag.className = "key-figure-tag";
    tag.textContent = fig;
    keyFiguresList.appendChild(tag);
  });

  // Pokrewne ideologie
  secondaryIdeologiesList.innerHTML = "";
  secondaryIdeologies.forEach(sec => {
    const card = document.createElement("div");
    card.className = "secondary-ideology-item";
    const secName = sec.name[currentLang] || sec.name.pl;
    card.innerHTML = `
      <div class="secondary-item-header">
        <strong>${secName}</strong>
        <span class="match-mini-badge">${sec.similarity}%</span>
      </div>
      <p class="secondary-item-sub">${sec.subtitle[currentLang] || sec.subtitle.pl}</p>
    `;
    secondaryIdeologiesList.appendChild(card);
  });

  // 2. Dopasowanie Światowego Lidera (katalog liderów i postaci historycznych)
  currentRankedPoliticians = worldPoliticians.map(pol => {
    const { dist, similarity } = calculateSimilarity(econScore, socScore, pol.coordinates.econ, pol.coordinates.soc);
    return { ...pol, dist, similarity };
  }).sort((a, b) => a.dist - b.dist);

  const topPolitician = currentRankedPoliticians[0];
  const runnerUpPoliticians = currentRankedPoliticians.slice(1, 4);
  const activePol = currentRankedPoliticians.find(p => p.id === activePoliticianId) || topPolitician;
  renderPoliticianProfile(activePol, activePol.id === topPolitician.id);

  otherPoliticiansList.innerHTML = "";
  runnerUpPoliticians.forEach(pol => {
    const item = document.createElement("div");
    item.className = "podium-mini-card politician-card-item";
    item.dataset.id = pol.id;
    const polDisplayName = getPoliticianName(pol);
    const countryName = pol.country[currentLang] || pol.country.pl;
    const color = pol.color || "#3b82f6";
    item.style.setProperty("--mini-color", color);

    const localSrc = pol.localPhoto || `assets/politicians/${pol.id}.jpg`;
    const remoteSrc = pol.photoUrl || createSvgAvatar(polDisplayName, color);

    item.innerHTML = `
      <div class="podium-mini-avatar-wrap" style="border-color: ${color};">
        <img class="podium-mini-avatar-img" src="${localSrc}" alt="${polDisplayName}" loading="lazy" referrerpolicy="no-referrer" />
        <span class="podium-mini-flag-badge">${pol.flag}</span>
      </div>
      <div class="podium-mini-info">
        <strong>${polDisplayName}</strong>
        <span>${countryName}</span>
      </div>
      <div class="podium-mini-match" style="background: ${color}20; color: ${color}; border: 1px solid ${color}45;">${pol.similarity}%</div>
    `;

    const img = item.querySelector(".podium-mini-avatar-img");
    if (img) {
      img.dataset.fallbackTried = "0";
      img.onerror = function() {
        if (this.dataset.fallbackTried === "1") {
          this.onerror = null;
          this.src = createSvgAvatar(polDisplayName, color);
        } else {
          this.dataset.fallbackTried = "1";
          this.src = remoteSrc;
        }
      };
    }

    item.addEventListener("click", (e) => {
      createRippleEffect(e, item);
      renderPoliticianProfile(pol);
    });
    otherPoliticiansList.appendChild(item);
  });

  // 3. Dopasowanie Międzynarodowej Partii (15 partii)
  currentRankedParties = worldParties.map(pty => {
    const { dist, similarity } = calculateSimilarity(econScore, socScore, pty.coordinates.econ, pty.coordinates.soc);
    return { ...pty, dist, similarity };
  }).sort((a, b) => a.dist - b.dist);

  const topParty = currentRankedParties[0];
  const runnerUpParties = currentRankedParties.slice(1, 4);
  const activeParty = currentRankedParties.find(p => p.id === activePartyId) || topParty;
  renderPartyProfile(activeParty, activeParty.id === topParty.id);

  otherPartiesList.innerHTML = "";
  runnerUpParties.forEach(pty => {
    const item = document.createElement("div");
    item.className = "podium-mini-card party-card-item";
    item.dataset.id = pty.id;
    const partyTitle = pty.name[currentLang] || pty.name.pl;
    item.innerHTML = `
      <div class="podium-mini-flag">${pty.emblem}</div>
      <div class="podium-mini-info">
        <strong>${partyTitle}</strong>
        <span>${pty.type[currentLang] || pty.type.pl}</span>
      </div>
      <div class="podium-mini-match">${pty.similarity}%</div>
    `;
    item.addEventListener("click", (e) => {
      createRippleEffect(e);
      renderPartyProfile(pty);
    });
    otherPartiesList.appendChild(item);
  });

  // 4. Paski osi
  const econSide = econScore > 0 ? t.econLabelRight : econScore < 0 ? t.econLabelLeft : t.centerLabel;
  const socSide = socScore > 0 ? t.socLabelRight : socScore < 0 ? t.socLabelLeft : t.centerLabel;

  econScoreText.textContent = `${econScore > 0 ? '+' : ''}${econScore}% (${econSide})`;
  socScoreText.textContent = `${socScore > 0 ? '+' : ''}${socScore}% (${socSide})`;

  const econPercentPosition = ((econScore + 100) / 200) * 100;
  const socPercentPosition = ((socScore + 100) / 200) * 100;

  econFillBar.className = "meter-fill econ-bar";
  if (econScore < 0) {
    econFillBar.classList.add("left-fill");
    econFillBar.style.left = `${50 - Math.abs(econScore) / 2}%`;
    econFillBar.style.width = `${Math.abs(econScore) / 2}%`;
  } else if (econScore > 0) {
    econFillBar.classList.add("right-fill");
    econFillBar.style.left = "50%";
    econFillBar.style.width = `${econScore / 2}%`;
  } else {
    econFillBar.style.left = "50%";
    econFillBar.style.width = "0%";
  }
  if (econPin) econPin.style.left = `${econPercentPosition}%`;

  socFillBar.className = "meter-fill soc-bar";
  if (socScore < 0) {
    socFillBar.classList.add("left-fill");
    socFillBar.style.left = `${50 - Math.abs(socScore) / 2}%`;
    socFillBar.style.width = `${Math.abs(socScore) / 2}%`;
  } else if (socScore > 0) {
    socFillBar.classList.add("right-fill");
    socFillBar.style.left = "50%";
    socFillBar.style.width = `${socScore / 2}%`;
  } else {
    socFillBar.style.left = "50%";
    socFillBar.style.width = "0%";
  }
  if (socPin) socPin.style.left = `${socPercentPosition}%`;

  // 5. Rozbicie sektorowe
  renderSectorBreakdown();

  // 6. Przełączenie ekranu i rysowanie kompasu
  switchScreen(resultScreen);
  if (animated) {
    drawCompassAnimated(econScore, socScore);
  } else {
    drawCompass(econScore, socScore, true);
  }

  buildAnswersReview();
}

function renderSectorBreakdown() {
  const breakdown = calculateSectorBreakdown();
  const t = uiTranslations[currentLang];
  sectorsGrid.innerHTML = "";

  Object.keys(categories).forEach(catKey => {
    const data = breakdown[catKey];
    if (!data) return;

    const catObj = categories[catKey];
    const catName = catObj ? (catObj[currentLang] || catObj.pl) : catKey;
    const isEcon = data.axis === "econ";

    const leftTerm = isEcon ? t.econLabelLeft : t.socLabelLeft;
    const rightTerm = isEcon ? t.econLabelRight : t.socLabelRight;
    const scoreVal = data.scorePct;
    const dotPos = ((scoreVal + 100) / 200) * 100;

    let fillLeft = "50%";
    let fillWidth = "0%";

    if (scoreVal < 0) {
      fillLeft = `${50 - Math.abs(scoreVal) / 2}%`;
      fillWidth = `${Math.abs(scoreVal) / 2}%`;
    } else if (scoreVal > 0) {
      fillLeft = "50%";
      fillWidth = `${scoreVal / 2}%`;
    }

    const item = document.createElement("div");
    item.className = "sector-item";
    item.innerHTML = `
      <div class="sector-header">
        <span class="sector-name">${catName}</span>
        <span class="sector-pct">${scoreVal > 0 ? '+' : ''}${scoreVal}%</span>
      </div>
      <div class="sector-bar-track">
        <div class="sector-bar-fill" style="left: ${fillLeft}; width: ${fillWidth};"></div>
        <div class="sector-bar-dot" style="left: ${dotPos}%;"></div>
        <div class="sector-bar-center"></div>
      </div>
      <div class="sector-axis-hint">
        <small>${leftTerm}</small>
        <small>${rightTerm}</small>
      </div>
    `;
    sectorsGrid.appendChild(item);
  });
}

// =========================================================================
// RYSOWANIE KOMPASU POLITYCZNEGO W CANVAS
// =========================================================================
function drawCompassAnimated(targetEcon, targetSoc) {
  if (animationFrameId) cancelAnimationFrame(animationFrameId);

  const duration = 24;
  let frame = 0;

  function animate() {
    frame++;
    const progress = Math.min(1, frame / duration);
    const ease = 1 - Math.pow(1 - progress, 3);

    const currentEcon = targetEcon * ease;
    const currentSoc = targetSoc * ease;

    drawCompass(currentEcon, currentSoc, progress === 1);

    if (progress < 1) {
      animationFrameId = requestAnimationFrame(animate);
    }
  }

  animate();
}

function drawCompass(econ, soc, isFinal = true) {
  if (!compassCanvas) return;
  const ctx = compassCanvas.getContext("2d");
  const w = compassCanvas.width;
  const h = compassCanvas.height;
  const pad = 44;
  const chartW = w - pad * 2;
  const chartH = h - pad * 2;
  const cx = pad + chartW / 2;
  const cy = pad + chartH / 2;

  const isDark = document.body.classList.contains("theme-dark");
  const t = uiTranslations[currentLang];

  // Tło canvas
  ctx.fillStyle = isDark ? "#131b2e" : "#ffffff";
  ctx.fillRect(0, 0, w, h);

  // 4 Ćwiartki kompasu
  ctx.fillStyle = isDark ? "rgba(16, 185, 129, 0.18)" : "rgba(16, 185, 129, 0.12)";
  ctx.fillRect(pad, pad, chartW / 2, chartH / 2);

  ctx.fillStyle = isDark ? "rgba(245, 158, 11, 0.18)" : "rgba(245, 158, 11, 0.12)";
  ctx.fillRect(cx, pad, chartW / 2, chartH / 2);

  ctx.fillStyle = isDark ? "rgba(239, 68, 68, 0.18)" : "rgba(239, 68, 68, 0.12)";
  ctx.fillRect(pad, cy, chartW / 2, chartH / 2);

  ctx.fillStyle = isDark ? "rgba(59, 130, 246, 0.18)" : "rgba(59, 130, 246, 0.12)";
  ctx.fillRect(cx, cy, chartW / 2, chartH / 2);

  // Siatka 10x10
  ctx.strokeStyle = isDark ? "rgba(255, 255, 255, 0.06)" : "rgba(0, 0, 0, 0.06)";
  ctx.lineWidth = 1;
  const gridSteps = 10;
  for (let i = 1; i < gridSteps; i++) {
    const x = pad + (chartW / gridSteps) * i;
    const y = pad + (chartH / gridSteps) * i;

    ctx.beginPath();
    ctx.moveTo(x, pad);
    ctx.lineTo(x, pad + chartH);
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(pad, y);
    ctx.lineTo(pad + chartW, y);
    ctx.stroke();
  }

  // Ramka zewnętrzna
  ctx.strokeStyle = isDark ? "#2b3c61" : "#cbd5e1";
  ctx.lineWidth = 2;
  ctx.strokeRect(pad, pad, chartW, chartH);

  // Główne osie X i Y
  ctx.strokeStyle = isDark ? "#64748b" : "#475569";
  ctx.lineWidth = 2.5;

  ctx.beginPath();
  ctx.moveTo(cx, pad);
  ctx.lineTo(cx, pad + chartH);
  ctx.stroke();

  ctx.beginPath();
  ctx.moveTo(pad, cy);
  ctx.lineTo(pad + chartW, cy);
  ctx.stroke();

  // Etykiety osi
  ctx.fillStyle = isDark ? "#94a3b8" : "#475569";
  ctx.font = "bold 11px 'Plus Jakarta Sans', sans-serif";
  ctx.textAlign = "center";

  ctx.fillText(t.canvasTop, cx, pad - 12);
  ctx.fillText(t.canvasBottom, cx, pad + chartH + 20);

  ctx.save();
  ctx.translate(pad - 12, cy);
  ctx.rotate(-Math.PI / 2);
  ctx.fillText(t.canvasLeft, 0, 0);
  ctx.restore();

  ctx.save();
  ctx.translate(pad + chartW + 14, cy);
  ctx.rotate(Math.PI / 2);
  ctx.fillText(t.canvasRight, 0, 0);
  ctx.restore();

  // Etykiety ćwiartek
  ctx.font = "bold 13px 'Plus Jakarta Sans', sans-serif";
  ctx.fillStyle = isDark ? "rgba(16, 185, 129, 0.7)" : "rgba(5, 150, 105, 0.75)";
  ctx.fillText(t.canvasQ1, pad + chartW * 0.25, pad + chartH * 0.25);

  ctx.fillStyle = isDark ? "rgba(245, 158, 11, 0.7)" : "rgba(217, 119, 6, 0.75)";
  ctx.fillText(t.canvasQ2, pad + chartW * 0.75, pad + chartH * 0.25);

  ctx.fillStyle = isDark ? "rgba(239, 68, 68, 0.7)" : "rgba(220, 38, 38, 0.75)";
  ctx.fillText(t.canvasQ3, pad + chartW * 0.25, pad + chartH * 0.75);

  ctx.fillStyle = isDark ? "rgba(59, 130, 246, 0.7)" : "rgba(37, 99, 235, 0.75)";
  ctx.fillText(t.canvasQ4, pad + chartW * 0.75, pad + chartH * 0.75);

  // Punkt użytkownika
  const userX = cx + (econ / 100) * (chartW / 2);
  const userY = cy - (soc / 100) * (chartH / 2);

  // Poświata punktu
  ctx.beginPath();
  ctx.arc(userX, userY, 14, 0, Math.PI * 2);
  ctx.fillStyle = "rgba(239, 68, 68, 0.35)";
  ctx.fill();

  ctx.beginPath();
  ctx.arc(userX, userY, 8, 0, Math.PI * 2);
  ctx.fillStyle = "#ffffff";
  ctx.fill();

  ctx.beginPath();
  ctx.arc(userX, userY, 5.5, 0, Math.PI * 2);
  ctx.fillStyle = "#ef4444";
  ctx.fill();

  // Etykieta przy punkcie
  ctx.fillStyle = isDark ? "#ffffff" : "#0f172a";
  ctx.font = "bold 12px 'Plus Jakarta Sans', sans-serif";
  ctx.textAlign = userX > cx ? "right" : "left";
  const labelOffsetX = userX > cx ? -18 : 18;
  ctx.fillText(`${t.canvasUserLabel} (${Math.round(econ)}, ${Math.round(soc)})`, userX + labelOffsetX, userY + 4);
}

// =========================================================================
// PRZEGLĄD ODPOWIEDZI (REVIEW DRAWER)
// =========================================================================
function buildAnswersReview() {
  reviewList.innerHTML = "";
  const t = uiTranslations[currentLang];

  questions.forEach((q, idx) => {
    const val = userAnswers[idx];
    const opt = answerOptions.find(o => o.value === val);
    const catObj = categories[q.categoryKey];
    const catName = catObj ? (catObj[currentLang] || catObj.pl) : q.categoryKey;
    const qText = q.text[currentLang] || q.text.pl;

    let optText = t.noAnswerLabel;
    let badgeClass = "badge-neutral";

    if (val === "skip") {
      optText = t.skipBadge || "Pominięte (bez wpływu)";
      badgeClass = "badge-skip";
    } else if (val === 0) {
      optText = t.neutralBadge || "Neutralny / Umiarkowany (0)";
      badgeClass = "badge-neutral";
    } else if (val === 2 || val === 1) {
      optText = opt ? (opt.label[currentLang] || opt.label.pl) : "";
      badgeClass = "badge-agree";
    } else if (val === -1 || val === -2) {
      optText = opt ? (opt.label[currentLang] || opt.label.pl) : "";
      badgeClass = "badge-disagree";
    }

    const item = document.createElement("div");
    item.className = "review-item";
    item.innerHTML = `
      <div class="review-item-q">${idx + 1}. [${catName}] ${qText}</div>
      <div class="review-item-a">
        <span>${t.yourAnswerLabel}</span>
        <span class="review-badge ${badgeClass}">${optText}</span>
      </div>
    `;
    reviewList.appendChild(item);
  });
}

function toggleReview() {
  answersReviewSection.classList.toggle("hidden");
  if (!answersReviewSection.classList.contains("hidden")) {
    answersReviewSection.scrollIntoView({ behavior: "smooth" });
  }
}

// =========================================================================
// EKSPORT I UDOSTĘPNIANIE
// =========================================================================
function copyTextToClipboard(text, onSuccess, onFallback) {
  if (navigator.clipboard && window.isSecureContext) {
    navigator.clipboard.writeText(text)
      .then(onSuccess)
      .catch(() => fallbackCopy(text, onSuccess, onFallback));
  } else {
    fallbackCopy(text, onSuccess, onFallback);
  }
}

function fallbackCopy(text, onSuccess, onFallback) {
  try {
    const textArea = document.createElement("textarea");
    textArea.value = text;
    textArea.style.position = "fixed";
    textArea.style.top = "-9999px";
    textArea.style.left = "-9999px";
    document.body.appendChild(textArea);
    textArea.focus();
    textArea.select();
    const successful = document.execCommand("copy");
    document.body.removeChild(textArea);
    if (successful) {
      onSuccess();
    } else {
      onFallback(text);
    }
  } catch (err) {
    onFallback(text);
  }
}

function downloadResultImage() {
  const { econScore, socScore } = calculateScores();
  const t = uiTranslations[currentLang];

  const rankedIdeologies = worldIdeologies.map(ideo => {
    const { dist, similarity } = calculateSimilarity(econScore, socScore, ideo.coordinates.econ, ideo.coordinates.soc);
    return { ...ideo, dist, similarity };
  }).sort((a, b) => a.dist - b.dist);
  const topIdeology = rankedIdeologies[0];

  const pol = currentRankedPoliticians[0] || worldPoliticians[0];
  const party = currentRankedParties[0] || worldParties[0];

  const exportCanvas = document.createElement("canvas");
  exportCanvas.width = 1080;
  exportCanvas.height = 1280;
  const ctx = exportCanvas.getContext("2d");

  // 1. Tło
  ctx.fillStyle = "#0c1322";
  ctx.fillRect(0, 0, 1080, 1280);

  const grad = ctx.createRadialGradient(540, 200, 50, 540, 200, 600);
  grad.addColorStop(0, "rgba(59, 130, 246, 0.15)");
  grad.addColorStop(1, "rgba(12, 19, 34, 0)");
  ctx.fillStyle = grad;
  ctx.fillRect(0, 0, 1080, 1280);

  // 2. Nagłówek
  ctx.fillStyle = "#38bdf8";
  ctx.font = "bold 20px 'Plus Jakarta Sans', sans-serif";
  ctx.textAlign = "center";
  ctx.fillText(`⚖️ ${t.appTitle.toUpperCase()} 2026 • ${t.badgePill.toUpperCase()}`, 540, 55);

  // 3. Główna ideologia
  const ideoName = topIdeology.name[currentLang] || topIdeology.name.pl;
  const ideoSub = topIdeology.subtitle[currentLang] || topIdeology.subtitle.pl;

  ctx.fillStyle = "#ffffff";
  ctx.font = "800 38px 'Plus Jakarta Sans', sans-serif";
  ctx.fillText(ideoName, 540, 105);

  ctx.fillStyle = "#94a3b8";
  ctx.font = "500 19px 'Plus Jakarta Sans', sans-serif";
  ctx.fillText(ideoSub, 540, 138);

  // 4. Kompas w centrum (540x540)
  const cw = 540;
  const ch = 540;
  const cx = 270;
  const cy = 175;
  const midX = cx + cw / 2;
  const midY = cy + ch / 2;

  ctx.fillStyle = "#131b2e";
  ctx.fillRect(cx, cy, cw, ch);

  ctx.fillStyle = "rgba(16, 185, 129, 0.22)";
  ctx.fillRect(cx, cy, cw / 2, ch / 2);

  ctx.fillStyle = "rgba(245, 158, 11, 0.22)";
  ctx.fillRect(midX, cy, cw / 2, ch / 2);

  ctx.fillStyle = "rgba(239, 68, 68, 0.22)";
  ctx.fillRect(cx, midY, cw / 2, ch / 2);

  ctx.fillStyle = "rgba(59, 130, 246, 0.22)";
  ctx.fillRect(midX, midY, cw / 2, ch / 2);

  ctx.strokeStyle = "rgba(255, 255, 255, 0.08)";
  ctx.lineWidth = 1;
  for (let i = 1; i < 10; i++) {
    const gx = cx + (cw / 10) * i;
    const gy = cy + (ch / 10) * i;
    ctx.beginPath();
    ctx.moveTo(gx, cy);
    ctx.lineTo(gx, cy + ch);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(cx, gy);
    ctx.lineTo(cx + cw, gy);
    ctx.stroke();
  }

  ctx.strokeStyle = "#263556";
  ctx.lineWidth = 2;
  ctx.strokeRect(cx, cy, cw, ch);

  ctx.strokeStyle = "#64748b";
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.moveTo(midX, cy);
  ctx.lineTo(midX, cy + ch);
  ctx.stroke();
  ctx.beginPath();
  ctx.moveTo(cx, midY);
  ctx.lineTo(cx + cw, midY);
  ctx.stroke();

  ctx.fillStyle = "#94a3b8";
  ctx.font = "bold 13px 'Plus Jakarta Sans', sans-serif";
  ctx.fillText(t.canvasTop, midX, cy - 8);
  ctx.fillText(t.canvasBottom, midX, cy + ch + 20);

  ctx.save();
  ctx.translate(cx - 12, midY);
  ctx.rotate(-Math.PI / 2);
  ctx.fillText(t.canvasLeft, 0, 0);
  ctx.restore();

  ctx.save();
  ctx.translate(cx + cw + 14, midY);
  ctx.rotate(Math.PI / 2);
  ctx.fillText(t.canvasRight, 0, 0);
  ctx.restore();

  const userX = midX + (econScore / 100) * (cw / 2);
  const userY = midY - (socScore / 100) * (ch / 2);

  ctx.beginPath();
  ctx.arc(userX, userY, 18, 0, Math.PI * 2);
  ctx.fillStyle = "rgba(239, 68, 68, 0.3)";
  ctx.fill();

  ctx.beginPath();
  ctx.arc(userX, userY, 10, 0, Math.PI * 2);
  ctx.fillStyle = "#ffffff";
  ctx.fill();

  ctx.beginPath();
  ctx.arc(userX, userY, 7, 0, Math.PI * 2);
  ctx.fillStyle = "#ef4444";
  ctx.fill();

  ctx.fillStyle = "#ffffff";
  ctx.font = "bold 15px 'Plus Jakarta Sans', sans-serif";
  ctx.textAlign = userX > midX ? "right" : "left";
  const offset = userX > midX ? -22 : 22;
  ctx.fillText(`${t.canvasUserLabel} (${Math.round(econScore)}, ${Math.round(socScore)})`, userX + offset, userY + 5);

  // 5. Paski osi
  ctx.textAlign = "center";
  ctx.fillStyle = "#38bdf8";
  ctx.font = "bold 20px 'Plus Jakarta Sans', sans-serif";
  const econSide = econScore > 0 ? t.econLabelRight : econScore < 0 ? t.econLabelLeft : t.centerLabel;
  const socSide = socScore > 0 ? t.socLabelRight : socScore < 0 ? t.socLabelLeft : t.centerLabel;
  ctx.fillText(`📈 ${t.axisEconTitle}: ${econScore > 0 ? '+' : ''}${econScore}% (${econSide})   •   🏛️ ${t.axisSocTitle}: ${socScore > 0 ? '+' : ''}${socScore}% (${socSide})`, 540, 770);

  // 6. Karty Lidera i Partii
  const cardW = 460;
  const cardH = 180;
  const cardY = 820;

  const polColor = pol.color || "#3b82f6";
  ctx.fillStyle = "#131b2e";
  ctx.strokeStyle = polColor;
  ctx.lineWidth = 1.5;
  ctx.beginPath();
  ctx.roundRect(60, cardY, cardW, cardH, 16);
  ctx.fill();
  ctx.stroke();

  ctx.textAlign = "left";
  ctx.fillStyle = polColor;
  ctx.font = "bold 15px 'Plus Jakarta Sans', sans-serif";
  ctx.fillText(`🌐 ${t.politicianCardTitle}`, 85, cardY + 36);

  ctx.fillStyle = "#ffffff";
  ctx.font = "bold 24px 'Plus Jakarta Sans', sans-serif";
  const polName = getPoliticianName(pol);
  ctx.fillText(`${pol.flag} ${polName}`, 85, cardY + 76);

  const polCountry = pol.country[currentLang] || pol.country.pl;
  const polRole = pol.role[currentLang] || pol.role.pl;
  ctx.fillStyle = "#94a3b8";
  ctx.font = "500 15px 'Plus Jakarta Sans', sans-serif";
  ctx.fillText(`${polCountry} • ${polRole.substring(0, 38)}...`, 85, cardY + 106);

  ctx.fillStyle = "#10b981";
  ctx.font = "bold 17px 'Plus Jakarta Sans', sans-serif";
  ctx.fillText(`${t.politicianMatchLabel} ${pol.similarity}%`, 85, cardY + 145);

  ctx.fillStyle = "#131b2e";
  ctx.strokeStyle = "#10b981";
  ctx.lineWidth = 1.5;
  ctx.beginPath();
  ctx.roundRect(560, cardY, cardW, cardH, 16);
  ctx.fill();
  ctx.stroke();

  ctx.fillStyle = "#34d399";
  ctx.font = "bold 15px 'Plus Jakarta Sans', sans-serif";
  ctx.fillText(`🏛️ ${t.partyCardTitle}`, 585, cardY + 36);

  const partyName = party.name[currentLang] || party.name.pl;
  ctx.fillStyle = "#ffffff";
  ctx.font = "bold 21px 'Plus Jakarta Sans', sans-serif";
  const displayParty = partyName.length > 28 ? partyName.substring(0, 26) + '...' : partyName;
  ctx.fillText(`${party.emblem} ${displayParty}`, 585, cardY + 76);

  const partyType = party.type[currentLang] || party.type.pl;
  ctx.fillStyle = "#94a3b8";
  ctx.font = "500 15px 'Plus Jakarta Sans', sans-serif";
  ctx.fillText(partyType.substring(0, 42) + '...', 585, cardY + 106);

  ctx.fillStyle = "#10b981";
  ctx.font = "bold 17px 'Plus Jakarta Sans', sans-serif";
  ctx.fillText(`${t.partyMatchLabel} ${party.similarity}%`, 585, cardY + 145);

  // 7. Stopka
  ctx.textAlign = "center";
  ctx.fillStyle = "#64748b";
  ctx.font = "500 15px 'Plus Jakarta Sans', sans-serif";
  const footerStatsTemplate = t.canvasFooterStats || `Globalny Kompas Poglądów 2026 • 100 Pytań • {ideologies} Ideologii • {politicians} Liderów i Myślicieli • {parties} Rodzin Partyjnych`;
  const footerStats = footerStatsTemplate
    .replace("{ideologies}", worldIdeologies.length)
    .replace("{politicians}", worldPoliticians.length)
    .replace("{parties}", worldParties.length);
  const footerCta = t.canvasFooterCta || "Wykonaj test online i poznaj swoje miejsce na politycznej mapie świata!";
  ctx.fillText(footerStats, 540, 1070);
  ctx.fillText(footerCta, 540, 1100);

  const link = document.createElement("a");
  link.download = `political_compass_${currentLang}_${Date.now()}.png`;
  link.href = exportCanvas.toDataURL("image/png");
  link.click();
}

function copyResultSummary() {
  const t = uiTranslations[currentLang];
  const { econScore, socScore } = calculateScores();

  const rankedIdeologies = worldIdeologies.map(ideo => {
    const { dist, similarity } = calculateSimilarity(econScore, socScore, ideo.coordinates.econ, ideo.coordinates.soc);
    return { ...ideo, dist, similarity };
  }).sort((a, b) => a.dist - b.dist);
  const topIdeology = rankedIdeologies[0];

  const topPolitician = currentRankedPoliticians[0] || worldPoliticians[0];
  const topParty = currentRankedParties[0] || worldParties[0];

  const ideoName = topIdeology.name[currentLang] || topIdeology.name.pl;
  const ideoSub = topIdeology.subtitle[currentLang] || topIdeology.subtitle.pl;
  const polName = topPolitician.name;
  const polCountry = topPolitician.country[currentLang] || topPolitician.country.pl;
  const partyTitle = topParty.name[currentLang] || topParty.name.pl;

  const econSide = econScore > 0 ? t.econLabelRight : econScore < 0 ? t.econLabelLeft : t.centerLabel;
  const socSide = socScore > 0 ? t.socLabelRight : socScore < 0 ? t.socLabelLeft : t.centerLabel;

  const textToCopy = `⚖️ ${t.appTitle} 2026 (100 Questions / Global Edition)\n` +
    `🧭 ${t.resultBadge}: ${ideoName} [${topIdeology.similarity}%]\n` +
    `   ${ideoSub}\n` +
    `• ${t.axisEconTitle}: ${econScore > 0 ? '+' : ''}${econScore}% (${econSide})\n` +
    `• ${t.axisSocTitle}: ${socScore > 0 ? '+' : ''}${socScore}% (${socSide})\n` +
    `🌐 ${t.politicianCardTitle}: ${topPolitician.flag} ${polName} (${polCountry}) [${topPolitician.similarity}% match]\n` +
    `🏛️ ${t.partyCardTitle}: ${topParty.emblem} ${partyTitle} [${topParty.similarity}% match]\n` +
    `Discover your global political compass!`;

  copyTextToClipboard(
    textToCopy,
    () => {
      const origText = copyShareBtn.textContent;
      copyShareBtn.textContent = t.copySuccess;
      setTimeout(() => {
        copyShareBtn.textContent = origText;
      }, 2500);
    },
    (fallbackTxt) => {
      alert(fallbackTxt);
    }
  );
}

function resetQuiz() {
  currentQuestionIndex = 0;
  userAnswers.fill(null);
  resetProgress();
  answersReviewSection.classList.add("hidden");
  updateResumeButtonText();
  switchScreen(welcomeScreen);
}
