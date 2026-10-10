/**
 * TEST POLITYCZNY - GŁÓWNA LOGIKA APLIKACJI (WERSJA GLOBALNA 2026)
 * Obsługa 160 pytań, 44 ideologii, 105 światowych liderów i postaci historycznych (w tym liderów II wojny światowej), 30 partii międzynarodowych
 * 6 opcji odpowiedzi (w tym Neutralny / Umiarkowany vs. Nie mam zdania / Pomiń)
 * oraz 6 języków: EN (domyślny), PL, ES, DE, RU, FR.
 */

// Stan testu
let currentLang = localStorage.getItem("ptp_lang") || "en";
let currentTheme = localStorage.getItem("ptp_theme") || "theme-dark";
let currentTone = localStorage.getItem("ptp_tone") || "standard";
let currentAccent = localStorage.getItem("ptp_accent") || "blue";
let currentTestMode = localStorage.getItem("ptp_mode") || "quick";

function getActiveQuestions() {
  if (typeof questions === "undefined" || !Array.isArray(questions)) return [];
  if (currentTestMode === "quick") {
    return questions.filter(q => q.isQuick);
  }
  return questions;
}

let currentQuestionIndex = 0;
let userAnswers = (typeof questions !== "undefined" && Array.isArray(questions)) ? new Array(getActiveQuestions().length).fill(null) : [];
let animationFrameId = null;
let currentEconScore = 0;
let currentSocScore = 0;
let isTransitioning = false;
let transitionTimeoutId = null;

// Stan wyników i rankingów
let activePoliticianId = null;
let activePartyId = null;
let activeIdeologyId = null;
let isPoliticiansExpanded = false;
let isIdeologiesExpanded = false;
let isPartiesExpanded = false;
let activePoliticianFilter = "top";
let activeIdeologyFilter = "top";
let activePartyFilter = "top";
let currentRankedPoliticians = [];
let currentRankedParties = [];
let currentRankedIdeologies = [];

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
const startTestBtnText = document.getElementById("startTestBtnText");
const resumeTestBtn = document.getElementById("resumeTestBtn");

// Mode Selector DOM
const modeSelectLabel = document.getElementById("modeSelectLabel");
const modeQuickBtn = document.getElementById("modeQuickBtn");
const modeQuickTitle = document.getElementById("modeQuickTitle");
const modeQuickBadge = document.getElementById("modeQuickBadge");
const modeQuickDesc = document.getElementById("modeQuickDesc");
const modeFullBtn = document.getElementById("modeFullBtn");
const modeFullTitle = document.getElementById("modeFullTitle");
const modeFullBadge = document.getElementById("modeFullBadge");
const modeFullDesc = document.getElementById("modeFullDesc");
const tryOtherModeBtn = document.getElementById("tryOtherModeBtn");

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
const clickIdeologyHint = document.getElementById("clickIdeologyHint");
const toggleMoreIdeologiesBtn = document.getElementById("toggleMoreIdeologiesBtn");
const toggleMoreIdeologiesText = document.getElementById("toggleMoreIdeologiesText");
const toggleIdeologiesIcon = document.getElementById("toggleIdeologiesIcon");
const ideologyCardActiveBadge = document.getElementById("ideologyCardActiveBadge");
const ideologyActiveBanner = document.getElementById("ideologyActiveBanner");
const ideologyActiveIconWrap = document.getElementById("ideologyActiveIconWrap");
const ideologyActiveIcon = document.getElementById("ideologyActiveIcon");
const ideologyActiveName = document.getElementById("ideologyActiveName");
const ideologyActiveSub = document.getElementById("ideologyActiveSub");

// World Politician
const politicianCardTitle = document.getElementById("politicianCardTitle");
const politicianCardSubtitle = document.getElementById("politicianCardSubtitle");
const politicianMatchBadge = document.getElementById("politicianMatchBadge");
const politicianHeroRow = document.getElementById("politicianHeroRow");
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
const toggleMorePoliticiansBtn = document.getElementById("toggleMorePoliticiansBtn");
const toggleMorePoliticiansText = document.getElementById("toggleMorePoliticiansText");
const togglePoliticiansIcon = document.getElementById("togglePoliticiansIcon");

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
const toggleMorePartiesBtn = document.getElementById("toggleMorePartiesBtn");
const toggleMorePartiesText = document.getElementById("toggleMorePartiesText");
const togglePartiesIcon = document.getElementById("togglePartiesIcon");
const ideologyFilterPills = document.getElementById("ideologyFilterPills");
const politicianFilterPills = document.getElementById("politicianFilterPills");

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
// OBSŁUGA TRYBU TESTU (SZYBKA 30 vs PEŁNA 160)
// =========================================================================
function setTestMode(mode) {
  if (mode !== "quick" && mode !== "full") mode = "quick";
  currentTestMode = mode;
  localStorage.setItem("ptp_mode", mode);
  const activeQs = getActiveQuestions();
  userAnswers = new Array(activeQs.length).fill(null);
  currentQuestionIndex = 0;
  updateModeUI();
  resetProgress();
}

function updateModeUI() {
  if (modeQuickBtn) modeQuickBtn.classList.toggle("active", currentTestMode === "quick");
  if (modeFullBtn) modeFullBtn.classList.toggle("active", currentTestMode === "full");

  const t = uiTranslations[currentLang] || uiTranslations.en || uiTranslations.pl || {};
  const isQuick = currentTestMode === "quick";

  if (badgePill) {
    badgePill.innerHTML = `<span class="badge-dot"></span>${isQuick ? (t.badgePillQuick || "Global Edition 2026 • 30 Questions (Quick Version)") : (t.badgePillFull || "Global Edition 2026 • 160 Questions (Full Version)")}`;
  }
  if (featureTime) {
    featureTime.textContent = isQuick ? (t.featureTimeQuick || "⏱️ Time: approx. 3-5 minutes (30 questions)") : (t.featureTimeFull || "⏱️ Time: approx. 14-18 minutes (160 questions)");
  }
  if (startTestBtnText) {
    const rawBtn = isQuick
      ? (t.startTestBtnQuick || "Start Quick Test (30 questions) ➔")
      : (t.startTestBtnFull || "Start Full Test (160 questions) ➔");
    startTestBtnText.textContent = rawBtn.replace(/\s*➔\s*$/, "");
  }
  if (tryOtherModeBtn) {
    tryOtherModeBtn.textContent = isQuick
      ? (t.tryOtherModeFull || "🧭 Take the Full Version (160 questions)")
      : (t.tryOtherModeQuick || "⚡ Take the Quick Version (30 questions)");
  }
  updateResumeButtonText();
}

// =========================================================================
// INICJALIZACJA APLIKACJI
// =========================================================================
function initApp() {
  try { setupAppearance(); } catch (e) { console.error("setupAppearance error:", e); }
  try { updateModeUI(); } catch (e) { console.error("updateModeUI error:", e); }
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

  // Mode Selector
  if (modeSelectLabel && t.modeSelectLabel) modeSelectLabel.textContent = t.modeSelectLabel;
  if (modeQuickTitle && t.modeQuickTitle) modeQuickTitle.textContent = t.modeQuickTitle;
  if (modeQuickBadge && t.modeQuickBadge) modeQuickBadge.textContent = t.modeQuickBadge;
  if (modeQuickDesc && t.modeQuickDesc) modeQuickDesc.textContent = t.modeQuickDesc;
  if (modeFullTitle && t.modeFullTitle) modeFullTitle.textContent = t.modeFullTitle;
  if (modeFullBadge && t.modeFullBadge) modeFullBadge.textContent = t.modeFullBadge;
  if (modeFullDesc && t.modeFullDesc) modeFullDesc.textContent = t.modeFullDesc;

  const langSwitcher = document.querySelector(".header-lang-switcher");
  if (langSwitcher && t.langSelectLabel) langSwitcher.setAttribute("aria-label", t.langSelectLabel);
  if (themeToggleBtn) {
    themeToggleBtn.title = t.themeToggleTitle || "Toggle theme";
    themeToggleBtn.setAttribute("aria-label", t.themeToggleTitle || "Toggle theme");
  }
  if (openSettingsBtn) {
    openSettingsBtn.title = `${t.setupTitle || "Appearance Settings"} (${t.setupToneLabel || "Contrast"} & ${t.setupAccentLabel || "Accent"})`;
    openSettingsBtn.setAttribute("aria-label", t.setupTitle || "Appearance Settings");
  }
  if (closeSettingsBtn) {
    closeSettingsBtn.setAttribute("aria-label", t.closeBtn || "Close");
  }

  // Welcome Screen
  if (heroTitle) heroTitle.textContent = t.heroTitle;
  if (heroDesc) heroDesc.textContent = t.heroDesc;
  if (axisEconTitle) axisEconTitle.textContent = t.axisEconTitle;
  if (axisEconDesc) axisEconDesc.textContent = t.axisEconDesc;
  const hintEconLeft = document.getElementById("spectrumHintEconLeft");
  if (hintEconLeft && t.econLabelLeft) hintEconLeft.textContent = t.econLabelLeft;
  const hintEconRight = document.getElementById("spectrumHintEconRight");
  if (hintEconRight && t.econLabelRight) hintEconRight.textContent = t.econLabelRight;
  if (axisSocTitle) axisSocTitle.textContent = t.axisSocTitle;
  if (axisSocDesc) axisSocDesc.textContent = t.axisSocDesc;
  const hintSocLeft = document.getElementById("spectrumHintSocLeft");
  if (hintSocLeft && t.socLabelLeft) hintSocLeft.textContent = t.socLabelLeft;
  const hintSocRight = document.getElementById("spectrumHintSocRight");
  if (hintSocRight && t.socLabelRight) hintSocRight.textContent = t.socLabelRight;
  if (featureAnon) featureAnon.textContent = t.featureAnon;
  if (featureResults) featureResults.textContent = t.featureResults;
  updateModeUI();

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
  if (secondaryIdeologiesTitle) secondaryIdeologiesTitle.textContent = t.ideologyRankingTitle || t.secondaryIdeologiesTitle;
  if (clickIdeologyHint && t.clickIdeologyHint) clickIdeologyHint.textContent = t.clickIdeologyHint;
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
  if (typeof updatePoliticiansToggleButton === "function") updatePoliticiansToggleButton();
  if (typeof updateIdeologiesToggleButton === "function") updateIdeologiesToggleButton();
  if (typeof updatePartiesToggleButton === "function") updatePartiesToggleButton();

  // Filter Buttons translations
  const filterTopPol = document.getElementById("filterTopPoliticiansBtn");
  if (filterTopPol && t.filterTop12) filterTopPol.textContent = t.filterTop12;
  const filterAllPol = document.getElementById("filterAllPoliticiansBtn");
  if (filterAllPol && t.filterAllPoliticians) filterAllPol.textContent = t.filterAllPoliticians;
  const filterWw2Pol = document.getElementById("filterWw2PoliticiansBtn");
  if (filterWw2Pol && t.filterWw2) filterWw2Pol.textContent = t.filterWw2;
  const filterHistPol = document.getElementById("filterHistoryPoliticiansBtn");
  if (filterHistPol && t.filterHistory) filterHistPol.textContent = t.filterHistory;
  const filterActPol = document.getElementById("filterActivistsPoliticiansBtn");
  if (filterActPol && t.filterActivists) filterActPol.textContent = t.filterActivists;
  const filterContPol = document.getElementById("filterContemporaryPoliticiansBtn");
  if (filterContPol && t.filterContemporary) filterContPol.textContent = t.filterContemporary;

  const filterTopIdeo = document.getElementById("filterIdeoTopBtn");
  if (filterTopIdeo && t.filterIdeoTop12) filterTopIdeo.textContent = t.filterIdeoTop12;
  const filterAllIdeo = document.getElementById("filterIdeoAllBtn");
  if (filterAllIdeo && t.filterIdeoAll) filterAllIdeo.textContent = t.filterIdeoAll;
  const filterMktIdeo = document.getElementById("filterIdeoMarketBtn");
  if (filterMktIdeo && t.filterIdeoMarket) filterMktIdeo.textContent = t.filterIdeoMarket;
  const filterProgIdeo = document.getElementById("filterIdeoProgressiveBtn");
  if (filterProgIdeo && t.filterIdeoProgressive) filterProgIdeo.textContent = t.filterIdeoProgressive;
  const filterSocIdeo = document.getElementById("filterIdeoSocialistBtn");
  if (filterSocIdeo && t.filterIdeoSocialist) filterSocIdeo.textContent = t.filterIdeoSocialist;
  const filterConsIdeo = document.getElementById("filterIdeoConservativeBtn");
  if (filterConsIdeo && t.filterIdeoConservative) filterConsIdeo.textContent = t.filterIdeoConservative;

  const filterTopParty = document.getElementById("filterPartyTopBtn");
  if (filterTopParty && t.filterPartyTop) filterTopParty.textContent = t.filterPartyTop;
  const filterAllParty = document.getElementById("filterPartyAllBtn");
  if (filterAllParty && t.filterPartyAll) filterAllParty.textContent = t.filterPartyAll;
  const filterLeftParty = document.getElementById("filterPartyLeftBtn");
  if (filterLeftParty && t.filterPartyLeft) filterLeftParty.textContent = t.filterPartyLeft;
  const filterMktParty = document.getElementById("filterPartyMarketBtn");
  if (filterMktParty && t.filterPartyMarket) filterMktParty.textContent = t.filterPartyMarket;
  const filterLibParty = document.getElementById("filterPartyLibBtn");
  if (filterLibParty && t.filterPartyLib) filterLibParty.textContent = t.filterPartyLib;
  const filterTradParty = document.getElementById("filterPartyTradBtn");
  if (filterTradParty && t.filterPartyTrad) filterTradParty.textContent = t.filterPartyTrad;

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

  // Wybór trybu testu (Szybka / Pełna)
  if (modeQuickBtn) {
    modeQuickBtn.addEventListener("click", (e) => {
      createRippleEffect(e, modeQuickBtn);
      setTestMode("quick");
    });
  }
  if (modeFullBtn) {
    modeFullBtn.addEventListener("click", (e) => {
      createRippleEffect(e, modeFullBtn);
      setTestMode("full");
    });
  }
  if (tryOtherModeBtn) {
    tryOtherModeBtn.addEventListener("click", (e) => {
      createRippleEffect(e, tryOtherModeBtn);
      setTestMode(currentTestMode === "quick" ? "full" : "quick");
      resetProgress();
      startQuiz();
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

  if (toggleMorePoliticiansBtn) {
    toggleMorePoliticiansBtn.addEventListener("click", (e) => {
      createRippleEffect(e, toggleMorePoliticiansBtn);
      isPoliticiansExpanded = !isPoliticiansExpanded;
      renderPoliticiansRanking();
    });
  }

  if (toggleMoreIdeologiesBtn) {
    toggleMoreIdeologiesBtn.addEventListener("click", (e) => {
      createRippleEffect(e, toggleMoreIdeologiesBtn);
      isIdeologiesExpanded = !isIdeologiesExpanded;
      renderIdeologiesRanking();
    });
  }

  if (toggleMorePartiesBtn) {
    toggleMorePartiesBtn.addEventListener("click", (e) => {
      createRippleEffect(e, toggleMorePartiesBtn);
      isPartiesExpanded = !isPartiesExpanded;
      renderPartiesRanking();
    });
  }

  // Filter pills for Ideologies
  const ideoPills = document.querySelectorAll("#ideologyFilterPills .filter-pill");
  ideoPills.forEach(pill => {
    pill.addEventListener("click", (e) => {
      createRippleEffect(e, pill);
      ideoPills.forEach(p => p.classList.remove("active"));
      pill.classList.add("active");
      activeIdeologyFilter = pill.dataset.filter || "top";
      renderIdeologiesRanking();
    });
  });

  // Filter pills for Politicians
  const polPills = document.querySelectorAll("#politicianFilterPills .filter-pill");
  polPills.forEach(pill => {
    pill.addEventListener("click", (e) => {
      createRippleEffect(e, pill);
      polPills.forEach(p => p.classList.remove("active"));
      pill.classList.add("active");
      activePoliticianFilter = pill.dataset.filter || "top";
      renderPoliticiansRanking();
    });
  });

  // Filter pills for Parties
  const partyPills = document.querySelectorAll("#partyFilterPills .filter-pill");
  partyPills.forEach(pill => {
    pill.addEventListener("click", (e) => {
      createRippleEffect(e, pill);
      partyPills.forEach(p => p.classList.remove("active"));
      pill.classList.add("active");
      activePartyFilter = pill.dataset.filter || "top";
      renderPartiesRanking();
    });
  });
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
      mode: currentTestMode,
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
    const t = uiTranslations[currentLang] || uiTranslations.en || uiTranslations.pl || {};
    const savedMode = saved.mode || currentTestMode;
    const modeQs = (savedMode === "quick")
      ? (typeof questions !== "undefined" ? questions.filter(q => q.isQuick) : [])
      : (typeof questions !== "undefined" ? questions : []);
    const totalCount = modeQs.length || (saved.answers ? saved.answers.length : 30);
    const modeLabel = savedMode === "quick" ? (t.questionCounterModeQuick || "Szybka") : (t.questionCounterModeFull || "Pełna");
    const resumeTxt = (t.resumeBtn || "Kontynuuj test ({current}/{total}) ➔")
      .replace("{current}", (saved.currentIndex || 0) + 1)
      .replace("{total}", totalCount);
    const cleanResume = resumeTxt.replace(/\s*➔\s*$/, "");
    resumeTestBtn.innerHTML = `<span class="resume-btn-text">${cleanResume} (${modeLabel})</span><span class="resume-btn-arrow" aria-hidden="true">➔</span>`;
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
    if (saved.mode && saved.mode !== currentTestMode) {
      currentTestMode = saved.mode;
      localStorage.setItem("ptp_mode", currentTestMode);
      updateModeUI();
    }
    const activeQs = getActiveQuestions();
    userAnswers = saved.answers || new Array(activeQs.length).fill(null);
    currentQuestionIndex = Math.min(activeQs.length - 1, Math.max(0, saved.currentIndex || 0));
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
  const activeQs = getActiveQuestions();
  currentQuestionIndex = 0;
  userAnswers = new Array(activeQs.length).fill(null);
  switchScreen(questionScreen);
  renderQuestion();
}

function renderQuestion() {
  const activeQs = getActiveQuestions();
  if (!activeQs.length) return;
  const q = activeQs[currentQuestionIndex];
  const t = uiTranslations[currentLang] || uiTranslations.en || uiTranslations.pl || {};
  const isQuick = currentTestMode === "quick";
  const modeTag = isQuick ? (t.questionCounterModeQuick || "Wersja Szybka") : (t.questionCounterModeFull || "Wersja Pełna");

  // Numeracja i licznik
  const counterTemplate = t.questionCounter || "Pytanie {current} z {total}";
  const counterText = `${counterTemplate.replace("{current}", currentQuestionIndex + 1).replace("{total}", activeQs.length)} • ${modeTag}`;
  if (questionCounterText) questionCounterText.textContent = counterText;

  // Kategoria
  const catObj = categories[q.categoryKey];
  if (questionCategory) questionCategory.textContent = catObj ? (catObj[currentLang] || catObj.en || catObj.pl) : q.categoryKey;

  // Treść pytania
  if (questionText) questionText.textContent = q.text[currentLang] || q.text.en || q.text.pl;

  // Pasek postępu
  const progressPct = ((currentQuestionIndex) / activeQs.length) * 100;
  if (progressBar) progressBar.style.width = `${Math.max(1, progressPct)}%`;

  // Przyciski nawigacji
  if (prevBtn) prevBtn.disabled = currentQuestionIndex === 0;
  if (nextBtn) {
    nextBtn.disabled = currentQuestionIndex === activeQs.length - 1 || userAnswers[currentQuestionIndex] === null;
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

      const labelText = opt.label[currentLang] || opt.label.en || opt.label.pl;
      const hintText = opt.hint ? (opt.hint[currentLang] || opt.hint.en || opt.hint.pl) : "";
      const badgeText = opt.badge ? (opt.badge[currentLang] || opt.badge.en || opt.badge.pl) : `${idx + 1}`;

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
  const activeQs = getActiveQuestions();
  // If user answers quickly while a timeout is already ticking, immediately advance previous question
  if (transitionTimeoutId) {
    clearTimeout(transitionTimeoutId);
    transitionTimeoutId = null;
    if (currentQuestionIndex < activeQs.length - 1) {
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
    if (currentQuestionIndex < activeQs.length - 1) {
      currentQuestionIndex++;
      renderQuestion();
    } else {
      if (progressBar) progressBar.style.width = "100%";
      setTimeout(() => showResults(true), 50);
    }
  }, 50);
}

function goToNextQuestion() {
  const activeQs = getActiveQuestions();
  if (currentQuestionIndex < activeQs.length - 1 && userAnswers[currentQuestionIndex] !== null) {
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
  const activeQs = getActiveQuestions();
  let econRaw = 0;
  let econMax = 0;
  let socRaw = 0;
  let socMax = 0;

  activeQs.forEach((q, idx) => {
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
  const activeQs = getActiveQuestions();
  const sectorScores = {};

  Object.keys(categories).forEach(catKey => {
    const catQuestions = activeQs.filter(q => q.categoryKey === catKey);
    let raw = 0;
    let max = 0;
    let answeredCount = 0;

    catQuestions.forEach(q => {
      const idx = activeQs.indexOf(q);
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
const svgFlags = {
  ar: `<svg viewBox="0 0 640 480" width="100%" height="100%"><path fill="#74acdf" d="M0 0h640v480H0z"/><path fill="#fff" d="M0 160h640v160H0z"/><g transform="translate(320 240)"><circle r="36" fill="#f6b40e"/><circle r="28" fill="#e89c0b"/><circle r="20" fill="#f6b40e"/><g stroke="#f6b40e" stroke-width="4"><path d="M0-48V-36M0 36v12M-48 0h12M36 0h12M-34-34l8 8M26 26l8 8M-34 34l8-8M26-26l8-8"/></g></g></svg>`,
  us: `<svg viewBox="0 0 640 480" width="100%" height="100%"><path fill="#b22234" d="M0 0h640v480H0z"/><path fill="#fff" d="M0 36.9h640v36.9H0zm0 73.8h640v36.9H0zm0 73.8h640v36.9H0zm0 73.8h640v36.9H0zm0 73.8h640v36.9H0zm0 73.8h640v36.9H0z"/><path fill="#3c3b6e" d="M0 0h256v258.5H0z"/><g fill="#fff"><circle cx="32" cy="28" r="7"/><circle cx="96" cy="28" r="7"/><circle cx="160" cy="28" r="7"/><circle cx="224" cy="28" r="7"/><circle cx="64" cy="58" r="7"/><circle cx="128" cy="58" r="7"/><circle cx="192" cy="58" r="7"/><circle cx="32" cy="88" r="7"/><circle cx="96" cy="88" r="7"/><circle cx="160" cy="88" r="7"/><circle cx="224" cy="88" r="7"/><circle cx="64" cy="118" r="7"/><circle cx="128" cy="118" r="7"/><circle cx="192" cy="118" r="7"/><circle cx="32" cy="148" r="7"/><circle cx="96" cy="148" r="7"/><circle cx="160" cy="148" r="7"/><circle cx="224" cy="148" r="7"/><circle cx="64" cy="178" r="7"/><circle cx="128" cy="178" r="7"/><circle cx="192" cy="178" r="7"/><circle cx="32" cy="208" r="7"/><circle cx="96" cy="208" r="7"/><circle cx="160" cy="208" r="7"/><circle cx="224" cy="208" r="7"/><circle cx="64" cy="238" r="7"/><circle cx="128" cy="238" r="7"/><circle cx="192" cy="238" r="7"/></g></svg>`,
  gb: `<svg viewBox="0 0 640 480" width="100%" height="100%"><path fill="#012169" d="M0 0h640v480H0z"/><path stroke="#fff" stroke-width="64" d="m0 0 640 480m0-480L0 480"/><path stroke="#c8102e" stroke-width="40" d="m0 0 640 480m0-480L0 480"/><path stroke="#fff" stroke-width="106" d="M320 0v480M0 240h640"/><path stroke="#c8102e" stroke-width="64" d="M320 0v480M0 240h640"/></svg>`,
  fr: `<svg viewBox="0 0 640 480" width="100%" height="100%"><path fill="#002395" d="M0 0h213.3v480H0z"/><path fill="#fff" d="M213.3 0h213.4v480H213.3z"/><path fill="#ed2939" d="M426.7 0H640v480H426.7z"/></svg>`,
  de: `<svg viewBox="0 0 640 480" width="100%" height="100%"><path fill="#000" d="M0 0h640v160H0z"/><path fill="#dd0000" d="M0 160h640v160H0z"/><path fill="#ffce00" d="M0 320h640v160H0z"/></svg>`,
  it: `<svg viewBox="0 0 640 480" width="100%" height="100%"><path fill="#009246" d="M0 0h213.3v480H0z"/><path fill="#fff" d="M213.3 0h213.4v480H213.3z"/><path fill="#ce2b37" d="M426.7 0H640v480H426.7z"/></svg>`,
  pl: `<svg viewBox="0 0 640 480" width="100%" height="100%"><path fill="#fff" d="M0 0h640v240H0z"/><path fill="#dc2626" d="M0 240h640v240H0z"/></svg>`,
  ua: `<svg viewBox="0 0 640 480" width="100%" height="100%"><path fill="#0057b7" d="M0 0h640v240H0z"/><path fill="#ffd700" d="M0 240h640v240H0z"/></svg>`,
  ca: `<svg viewBox="0 0 640 480" width="100%" height="100%"><path fill="#d80621" d="M0 0h160v480H0zm480 0h160v480H480z"/><path fill="#fff" d="M160 0h320v480H160z"/><path fill="#d80621" d="m320 90 28 58 64-16-36 68 62 38-74 24 16 66-50-32-10 88h-20l-10-88-50 32 16-66-74-24 62-38-36-68 64 16z"/></svg>`,
  br: `<svg viewBox="0 0 640 480" width="100%" height="100%"><path fill="#009739" d="M0 0h640v480H0z"/><path fill="#fedd00" d="m320 54 260 186-260 186L60 240z"/><circle cx="320" cy="240" r="110" fill="#012169"/><path fill="#fff" d="M215 220c30-28 110-40 210 5-2 16-80 3-210-5z"/></svg>`,
  se: `<svg viewBox="0 0 640 480" width="100%" height="100%"><path fill="#006aa7" d="M0 0h640v480H0z"/><path fill="#fecc00" d="M180 0h80v480h-80zM0 200h640v80H0z"/></svg>`,
  sg: `<svg viewBox="0 0 640 480" width="100%" height="100%"><path fill="#ed2939" d="M0 0h640v240H0z"/><path fill="#fff" d="M0 240h640v240H0z"/><circle cx="120" cy="120" r="72" fill="#fff"/><circle cx="146" cy="120" r="66" fill="#ed2939"/><g fill="#fff"><circle cx="158" cy="80" r="12"/><circle cx="188" cy="100" r="12"/><circle cx="178" cy="136" r="12"/><circle cx="140" cy="136" r="12"/><circle cx="130" cy="100" r="12"/></g></svg>`,
  sv: `<svg viewBox="0 0 640 480" width="100%" height="100%"><path fill="#0047ab" d="M0 0h640v160H0z"/><path fill="#fff" d="M0 160h640v160H0z"/><path fill="#0047ab" d="M0 320h640v160H0z"/><circle cx="320" cy="240" r="42" fill="none" stroke="#f6b40e" stroke-width="8"/><polygon points="320,210 350,260 290,260" fill="#22c55e"/><circle cx="320" cy="235" r="10" fill="#f59e0b"/></svg>`,
  in: `<svg viewBox="0 0 640 480" width="100%" height="100%"><path fill="#ff9933" d="M0 0h640v160H0z"/><path fill="#fff" d="M0 160h640v160H0z"/><path fill="#138808" d="M0 320h640v160H0z"/><circle cx="320" cy="240" r="54" fill="none" stroke="#000080" stroke-width="7"/><circle cx="320" cy="240" r="14" fill="#000080"/><g stroke="#000080" stroke-width="3"><line x1="320" y1="186" x2="320" y2="294"/><line x1="266" y1="240" x2="374" y2="240"/><line x1="282" y1="202" x2="358" y2="278"/><line x1="282" y1="278" x2="358" y2="202"/></g></svg>`,
  nz: `<svg viewBox="0 0 640 480" width="100%" height="100%"><path fill="#00247d" d="M0 0h640v480H0z"/><g transform="scale(0.5)"><path fill="#012169" d="M0 0h640v480H0z"/><path stroke="#fff" stroke-width="64" d="m0 0 640 480m0-480L0 480"/><path stroke="#c8102e" stroke-width="40" d="m0 0 640 480m0-480L0 480"/><path stroke="#fff" stroke-width="106" d="M320 0v480M0 240h640"/><path stroke="#c8102e" stroke-width="64" d="M320 0v480M0 240h640"/></g><g fill="#cc142b" stroke="#fff" stroke-width="4"><polygon points="480,100 486,118 504,118 490,128 495,146 480,135 465,146 470,128 456,118 474,118"/><polygon points="560,180 565,195 580,195 568,203 572,218 560,209 548,218 552,203 540,195 555,195"/><polygon points="480,340 486,358 504,358 490,368 495,386 480,375 465,386 470,368 456,358 474,358"/><polygon points="410,220 415,235 430,235 418,243 422,258 410,249 398,258 402,243 390,235 405,235"/></g></svg>`,
  uy: `<svg viewBox="0 0 640 480" width="100%" height="100%"><path fill="#fff" d="M0 0h640v480H0z"/><path fill="#0038a8" d="M0 53.3h640v53.3H0zm0 106.7h640v53.3H0zm0 106.7h640v53.3H0zm0 106.7h640v53.3H0z"/><path fill="#fff" d="M0 0h240v240H0z"/><circle cx="120" cy="120" r="42" fill="#fcd116" stroke="#b45309" stroke-width="3"/><g stroke="#fcd116" stroke-width="5"><line x1="120" y1="62" x2="120" y2="48"/><line x1="120" y1="178" x2="120" y2="192"/><line x1="62" y1="120" x2="48" y2="120"/><line x1="178" y1="120" x2="192" y2="120"/><line x1="79" y1="79" x2="69" y2="69"/><line x1="161" y1="161" x2="171" y2="171"/><line x1="79" y1="161" x2="69" y2="171"/><line x1="161" y1="79" x2="171" y2="69"/></g></svg>`,
  gr: `<svg viewBox="0 0 640 480" width="100%" height="100%"><path fill="#0d5eaf" d="M0 0h640v480H0z"/><path fill="#fff" d="M0 53.3h640v53.3H0zm0 106.7h640v53.3H0zm0 106.7h640v53.3H0zm0 106.7h640v53.3H0z"/><path fill="#0d5eaf" d="M0 0h240v266.7H0z"/><path fill="#fff" d="M96 0h48v266.7H96zM0 109.3h240v48H0z"/></svg>`,
  jp: `<svg viewBox="0 0 640 480" width="100%" height="100%"><path fill="#fff" d="M0 0h640v480H0z"/><circle cx="320" cy="240" r="144" fill="#bc002d"/></svg>`,
  bf: `<svg viewBox="0 0 640 480" width="100%" height="100%"><path fill="#ef3340" d="M0 0h640v240H0z"/><path fill="#009739" d="M0 240h640v240H0z"/><polygon points="320,170 336,220 388,220 346,252 362,302 320,272 278,302 294,252 252,220 304,220" fill="#fcd116"/></svg>`,
  za: `<svg viewBox="0 0 640 480" width="100%" height="100%"><path fill="#e03c31" d="M0 0h640v240H0z"/><path fill="#001489" d="M0 240h640v240H0z"/><path fill="#fff" d="m0 0 320 240L0 480h120l320-240L120 0z"/><path fill="#007749" d="m0 30 280 210L0 450h90l320-210-320-210zM0 190h640v100H0z"/><polygon points="0,75 220,240 0,405" fill="#ffb81c"/><polygon points="0,95 190,240 0,385" fill="#000"/></svg>`,
  bo: `<svg viewBox="0 0 640 480" width="100%" height="100%"><path fill="#d52b1e" d="M0 0h640v160H0z"/><path fill="#f9e300" d="M0 160h640v160H0z"/><path fill="#007934" d="M0 320h640v160H0z"/><circle cx="320" cy="240" r="32" fill="#22c55e" stroke="#b45309" stroke-width="4"/></svg>`,
  cz: `<svg viewBox="0 0 640 480" width="100%" height="100%"><path fill="#fff" d="M0 0h640v240H0z"/><path fill="#d7141a" d="M0 240h640v240H0z"/><polygon points="0,0 320,240 0,480" fill="#11457e"/></svg>`,
  sco: `<svg viewBox="0 0 640 480" width="100%" height="100%"><path fill="#005eb8" d="M0 0h640v480H0z"/><path stroke="#fff" stroke-width="84" d="m0 0 640 480m0-480L0 480"/></svg>`,
  ussr: `<svg viewBox="0 0 640 480" width="100%" height="100%"><path fill="#cc0000" d="M0 0h640v480H0z"/><polygon points="120,40 127,62 149,62 131,75 137,97 120,84 103,97 109,75 91,62 113,62" fill="#ffd700"/><g stroke="#ffd700" stroke-width="12" fill="none" stroke-linecap="round"><path d="M100 170c0-45 35-75 75-75s45 20 45 40-20 45-45 45l-45 45"/><path d="m110 110 70 70"/></g></svg>`,
  tw: `<svg viewBox="0 0 640 480" width="100%" height="100%"><path fill="#fe0000" d="M0 0h640v480H0z"/><path fill="#000095" d="M0 0h320v240H0z"/><circle cx="160" cy="120" r="54" fill="#fff"/><circle cx="160" cy="120" r="38" fill="#000095"/><circle cx="160" cy="120" r="32" fill="#fff"/></svg>`,
  tr: `<svg viewBox="0 0 640 480" width="100%" height="100%"><path fill="#e30a17" d="M0 0h640v480H0z"/><circle cx="260" cy="240" r="120" fill="#fff"/><circle cx="290" cy="240" r="96" fill="#e30a17"/><g fill="#fff" transform="translate(370,240) rotate(-15)"><polygon points="0,-36 10.5,-11 34.2,0 10.5,11 0,36 -10.5,11 -34.2,0 -10.5,-11"/></g></svg>`,
  cn: `<svg viewBox="0 0 640 480" width="100%" height="100%"><path fill="#de2910" d="M0 0h640v480H0z"/><g fill="#ffde00"><polygon points="120,60 134,103 179,103 143,129 157,172 120,146 83,172 97,129 61,103 106,103"/><g transform="translate(240,48) scale(0.35)"><polygon points="0,-40 12,-12 40,0 12,12 0,40 -12,12 -40,0 -12,-12"/></g><g transform="translate(288,96) scale(0.35)"><polygon points="0,-40 12,-12 40,0 12,12 0,40 -12,12 -40,0 -12,-12"/></g><g transform="translate(288,168) scale(0.35)"><polygon points="0,-40 12,-12 40,0 12,12 0,40 -12,12 -40,0 -12,-12"/></g><g transform="translate(240,216) scale(0.35)"><polygon points="0,-40 12,-12 40,0 12,12 0,40 -12,12 -40,0 -12,-12"/></g></g></svg>`,
  ru: `<svg viewBox="0 0 640 480" width="100%" height="100%"><path fill="#fff" d="M0 0h640v160H0z"/><path fill="#0039a6" d="M0 160h640v160H0z"/><path fill="#d52b1e" d="M0 320h640v160H0z"/></svg>`,
  es: `<svg viewBox="0 0 640 480" width="100%" height="100%"><path fill="#aa151b" d="M0 0h640v120H0zm0 360h640v120H0z"/><path fill="#f1bf00" d="M0 120h640v240H0z"/><circle cx="180" cy="240" r="40" fill="#aa151b"/><circle cx="180" cy="240" r="28" fill="#f1bf00"/><polygon points="180,218 190,238 170,238" fill="#aa151b"/></svg>`,
  hu: `<svg viewBox="0 0 640 480" width="100%" height="100%"><path fill="#ce2939" d="M0 0h640v160H0z"/><path fill="#fff" d="M0 160h640v160H0z"/><path fill="#477050" d="M0 320h640v160H0z"/></svg>`,
  eu: `<svg viewBox="0 0 640 480" width="100%" height="100%"><path fill="#003399" d="M0 0h640v480H0z"/><g fill="#ffcc00" transform="translate(320 240)"><circle cx="0" cy="-140" r="14"/><circle cx="70" cy="-121" r="14"/><circle cx="121" cy="-70" r="14"/><circle cx="140" cy="0" r="14"/><circle cx="121" cy="70" r="14"/><circle cx="70" cy="121" r="14"/><circle cx="0" cy="140" r="14"/><circle cx="-70" cy="121" r="14"/><circle cx="-121" cy="70" r="14"/><circle cx="-140" cy="0" r="14"/><circle cx="-121" cy="-70" r="14"/><circle cx="-70" cy="-121" r="14"/></g></svg>`,
  at: `<svg viewBox="0 0 640 480" width="100%" height="100%"><path fill="#ed2939" d="M0 0h640v160H0zm0 320h640v160H0z"/><path fill="#fff" d="M0 160h640v160H0z"/></svg>`,
  yu: `<svg viewBox="0 0 640 480" width="100%" height="100%"><path fill="#003893" d="M0 0h640v160H0z"/><path fill="#fff" d="M0 160h640v160H0z"/><path fill="#de0000" d="M0 320h640v160H0z"/><polygon points="320,165 338,222 398,222 349,257 368,314 320,279 272,314 291,257 242,222 302,222" fill="#de0000" stroke="#ffda00" stroke-width="12"/></svg>`,
  il: `<svg viewBox="0 0 640 480" width="100%" height="100%"><path fill="#fff" d="M0 0h640v480H0z"/><path fill="#0038b8" d="M0 45h640v55H0zm0 335h640v55H0z"/><g stroke="#0038b8" stroke-width="14" fill="none"><polygon points="320,160 380,265 260,265"/><polygon points="320,300 380,195 260,195"/></g></svg>`,
  ve: `<svg viewBox="0 0 640 480" width="100%" height="100%"><path fill="#ffcc00" d="M0 0h640v160H0z"/><path fill="#00247d" d="M0 160h640v160H0z"/><path fill="#cf142b" d="M0 320h640v160H0z"/><g fill="#fff" transform="translate(320,240)"><circle cx="-80" cy="15" r="7"/><circle cx="-55" cy="-10" r="7"/><circle cx="-25" cy="-25" r="7"/><circle cx="0" cy="-30" r="7"/><circle cx="25" cy="-25" r="7"/><circle cx="55" cy="-10" r="7"/><circle cx="80" cy="15" r="7"/></g></svg>`,
  fi: `<svg viewBox="0 0 640 480" width="100%" height="100%"><path fill="#fff" d="M0 0h640v480H0z"/><path fill="#003580" d="M175 0h90v480h-90zM0 195h640v90H0z"/></svg>`,
  kr: `<svg viewBox="0 0 640 480" width="100%" height="100%"><path fill="#fff" d="M0 0h640v480H0z"/><g transform="translate(320,240) rotate(-34)"><path fill="#c60c30" d="M0 0a80 80 0 0 0 0-160 80 80 0 0 1 0 160z"/><path fill="#003478" d="M0 0a80 80 0 0 1 0 160 80 80 0 0 0 0-160z"/><circle cx="0" cy="-40" r="40" fill="#c60c30"/><circle cx="0" cy="40" r="40" fill="#003478"/></g></svg>`,
  by: `<svg viewBox="0 0 640 480" width="100%" height="100%"><path fill="#c8313e" d="M0 0h640v320H0z"/><path fill="#4aa564" d="M0 320h640v160H0z"/><path fill="#fff" d="M0 0h75v480H0z"/><path fill="#c8313e" d="M37 0l37 75-37 75-37-75zm0 150l37 75-37 75-37-75zm0 150l37 75-37 75-37-75z"/></svg>`,
  nl: `<svg viewBox="0 0 640 480" width="100%" height="100%"><path fill="#ae1c28" d="M0 0h640v160H0z"/><path fill="#fff" d="M0 160h640v160H0z"/><path fill="#21468b" d="M0 320h640v160H0z"/></svg>`,
  mk: `<svg viewBox="0 0 640 480" width="100%" height="100%"><path fill="#d20000" d="M0 0h640v480H0z"/><circle cx="320" cy="240" r="40" fill="#ffcc00"/><g stroke="#ffcc00" stroke-width="12"><line x1="320" y1="90" x2="320" y2="390"/><line x1="170" y1="240" x2="470" y2="240"/><line x1="214" y1="134" x2="426" y2="346"/><line x1="214" y1="346" x2="426" y2="134"/></g></svg>`,
  global: `<svg viewBox="0 0 640 480" width="100%" height="100%"><path fill="#4189dd" d="M0 0h640v480H0z"/><circle cx="320" cy="240" r="140" fill="none" stroke="#fff" stroke-width="14"/><ellipse cx="320" cy="240" rx="90" ry="140" fill="none" stroke="#fff" stroke-width="10"/><line x1="180" y1="240" x2="460" y2="240" stroke="#fff" stroke-width="12"/><line x1="205" y1="170" x2="435" y2="170" stroke="#fff" stroke-width="9"/><line x1="205" y1="310" x2="435" y2="310" stroke="#fff" stroke-width="9"/><line x1="320" y1="100" x2="320" y2="380" stroke="#fff" stroke-width="10"/></svg>`
};

const politicianFlagMap = {
  javier_milei: "ar",
  ron_paul: "us",
  margaret_thatcher: "gb",
  ronald_reagan: "us",
  milton_friedman: "global",
  emmanuel_macron: "fr",
  justin_trudeau: "ca",
  bernie_sanders: "us",
  lula_da_silva: "br",
  olof_palme: "se",
  lee_kuan_yew: "sg",
  nayib_bukele: "sv",
  angela_merkel: "de",
  narendra_modi: "in",
  jacinda_ardern: "nz",
  pepe_mujica: "uy",
  yanis_varoufakis: "gr",
  volodymyr_zelenskyy: "ua",
  keir_starmer: "gb",
  fumio_kishida: "jp",
  thomas_sankara: "bf",
  nelson_mandela: "za",
  murray_rothbard: "global",
  noam_chomsky: "global",
  juan_peron: "ar",
  sahra_wagenknecht: "de",
  clement_attlee: "gb",
  evo_morales: "bo",
  martin_luther_king: "us",
  mahatma_gandhi: "in",
  rosa_luxemburg: "de",
  vaclav_havel: "cz",
  winston_churchill: "gb",
  thomas_jefferson: "us",
  lech_walesa: "pl",
  adam_smith: "sco",
  franklin_d_roosevelt: "us",
  charles_de_gaulle: "fr",
  wladyslaw_sikorski: "pl",
  dwight_d_eisenhower: "us",
  joseph_stalin: "ussr",
  benito_mussolini: "it",
  chiang_kai_shek: "tw",
  woodrow_wilson: "us",
  david_lloyd_george: "gb",
  georges_clemenceau: "fr",
  wilhelm_ii: "de",
  vladimir_lenin: "ussr",
  mustafa_kemal_ataturk: "tr",
  adolf_hitler: "de",
  hideki_tojo: "jp",
  harry_s_truman: "us",
  nikita_khrushchev: "ussr",
  john_f_kennedy: "us",
  lyndon_b_johnson: "us",
  richard_nixon: "us",
  mao_zedong: "cn",
  mikhail_gorbachev: "ussr",
  helmut_kohl: "de",
  francois_mitterrand: "fr",
  indira_gandhi: "in",
  bill_clinton: "us",
  george_w_bush: "us",
  barack_obama: "us",
  donald_trump: "us",
  joe_biden: "us",
  vladimir_putin: "ru",
  xi_jinping: "cn",
  boris_johnson: "gb",
  jair_bolsonaro: "br",
  olaf_scholz: "de",
  giorgia_meloni: "it",
  pedro_sanchez: "es",
  viktor_orban: "hu",
  jaroslaw_kaczynski: "pl",
  mateusz_morawiecki: "pl",
  ursula_von_der_leyen: "eu",
  greta_thunberg: "se",
  elon_musk: "us",
  otto_von_bismarck: "de",
  abraham_lincoln: "us",
  theodore_roosevelt: "us",
  neville_chamberlain: "gb",
  konrad_adenauer: "de",
  deng_xiaoping: "cn",
  tony_blair: "gb",
  silvio_berlusconi: "it",
  alexandria_ocasio_cortez: "us",
  marine_le_pen: "fr",
  napoleon_bonaparte: "fr",
  otto_von_habsburg: "at",
  francisco_franco: "es",
  josip_broz_tito: "yu",
  golda_meir: "il",
  hugo_chavez: "ve",
  sanna_marin: "fi",
  recep_tayyip_erdogan: "tr",
  benjamin_netanyahu: "il",
  nicolas_maduro: "ve",
  shinzo_abe: "jp",
  park_geun_hye: "kr",
  sebastian_kurz: "at",
  alexander_lukashenko: "by",
  mark_rutte: "nl",
  alexander_the_great: "mk"
};

function getSvgFlagBadgeHtml(countryCodeOrPol, className = "flag-badge-svg") {
  const code = (typeof countryCodeOrPol === "object" && countryCodeOrPol !== null)
    ? (countryCodeOrPol.countryCode || politicianFlagMap[countryCodeOrPol.id] || "global")
    : (countryCodeOrPol || "global");
  const svg = svgFlags[code] || svgFlags.global;
  return `<span class="${className}" aria-hidden="true">${svg}</span>`;
}

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
  const t = uiTranslations[currentLang] || {};
  const displayName = getPoliticianName(pol);
  activePoliticianId = pol.id;

  const topPol = (currentRankedPoliticians && currentRankedPoliticians[0]) || pol;
  const isActuallyTop = (pol.id === topPol.id);
  const polRank = (currentRankedPoliticians && currentRankedPoliticians.findIndex(p => p.id === pol.id) + 1) || 1;

  if (politicianCardTitle) {
    politicianCardTitle.textContent = isActuallyTop
      ? (t.politicianCardTitle || "🌐 Twój Światowy Lider Polityczny")
      : `🌐 ${displayName}`;
  }
  if (politicianCardSubtitle) {
    politicianCardSubtitle.textContent = isActuallyTop
      ? (t.politicianCardSubtitle || "Światowy przywódca o najbardziej zbliżonym kompasie poglądów:")
      : `${t.spotlightLeaderTitle || "Szczegółowy profil wybranego lidera:"} (#${polRank})`;
  }
  if (politicianMatchBadge) {
    politicianMatchBadge.textContent = isActuallyTop
      ? `${t.politicianMatchLabel || 'Zgodność poglądów:'} ${pol.similarity}%`
      : `#${polRank} • ${t.politicianMatchLabel || 'Zgodność:'} ${pol.similarity}%`;
  }
  if (politicianFlag) politicianFlag.innerHTML = getSvgFlagBadgeHtml(pol, "politician-flag-svg-badge");
  if (politicianName) politicianName.textContent = displayName;
  if (politicianCountry) {
    const cName = pol.country[currentLang] || pol.country.en || pol.country.pl;
    politicianCountry.innerHTML = `${getSvgFlagBadgeHtml(pol, "flag-badge-svg")} <span>${cName}</span>`;
  }
  if (politicianRole) politicianRole.textContent = pol.role[currentLang] || pol.role.en || pol.role.pl;
  if (politicianQuote) politicianQuote.textContent = pol.quote[currentLang] || pol.quote.en || pol.quote.pl;
  if (politicianWhyVoteText) politicianWhyVoteText.textContent = pol.whyVote[currentLang] || pol.whyVote.en || pol.whyVote.pl;

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
    politicianAvatarContainer.style.boxShadow = `0 0 24px ${color}60, 0 4px 14px rgba(0, 0, 0, 0.35)`;
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

const partyColors = {
  libertarian_intl: { color: "#eab308", gradient: "linear-gradient(135deg, #eab308, #ca8a04)" },
  liberal_intl: { color: "#f59e0b", gradient: "linear-gradient(135deg, #f59e0b, #d97706)" },
  socialist_intl: { color: "#ef4444", gradient: "linear-gradient(135deg, #ef4444, #dc2626)" },
  global_greens: { color: "#10b981", gradient: "linear-gradient(135deg, #10b981, #059669)" },
  conservative_idu: { color: "#2563eb", gradient: "linear-gradient(135deg, #2563eb, #1d4ed8)" },
  christian_cdi: { color: "#0284c7", gradient: "linear-gradient(135deg, #0284c7, #0369a1)" },
  progressive_intl: { color: "#dc2626", gradient: "linear-gradient(135deg, #dc2626, #991b1b)" },
  pirate_parties: { color: "#8b5cf6", gradient: "linear-gradient(135deg, #8b5cf6, #7c3aed)" },
  volt_federalists: { color: "#7c3aed", gradient: "linear-gradient(135deg, #7c3aed, #6d28d9)" },
  sovereignist_patriots: { color: "#b45309", gradient: "linear-gradient(135deg, #b45309, #78350f)" },
  anarchist_federations: { color: "#374151", gradient: "linear-gradient(135deg, #4b5563, #1f2937)" },
  tiger_technocrats: { color: "#0f766e", gradient: "linear-gradient(135deg, #0f766e, #115e59)" },
  traditional_left_solidarists: { color: "#b91c1c", gradient: "linear-gradient(135deg, #b91c1c, #7f1d1d)" },
  state_socialist_bloc: { color: "#991b1b", gradient: "linear-gradient(135deg, #991b1b, #7f1d1d)" },
  christian_social_union_intl: { color: "#059669", gradient: "linear-gradient(135deg, #059669, #047857)" },
  communist_imcwp: { color: "#be123c", gradient: "linear-gradient(135deg, #be123c, #9f1239)" },
  ecr_alliance: { color: "#0369a1", gradient: "linear-gradient(135deg, #0369a1, #075985)" },
  anarchosyndicalist_iwa: { color: "#18181b", gradient: "linear-gradient(135deg, #27272a, #09090b)" },
  transhumanist_humanity_plus: { color: "#06b6d4", gradient: "linear-gradient(135deg, #06b6d4, #0891b2)" },
  mont_pelerin_atlas: { color: "#d97706", gradient: "linear-gradient(135deg, #d97706, #b45309)" },
  non_aligned_movement: { color: "#0d9488", gradient: "linear-gradient(135deg, #0d9488, #0f766e)" },
  cpac_national_populists: { color: "#ea580c", gradient: "linear-gradient(135deg, #ea580c, #c2410c)" },
  foro_sao_paulo_puebla: { color: "#e11d48", gradient: "linear-gradient(135deg, #e11d48, #be123c)" },
  monarchist_league: { color: "#7c2d12", gradient: "linear-gradient(135deg, #7c2d12, #581c87)" },
  degrowth_postgrowth_intl: { color: "#047857", gradient: "linear-gradient(135deg, #047857, #065f46)" },
  indigenous_abya_yala: { color: "#15803d", gradient: "linear-gradient(135deg, #15803d, #166534)" },
  pro_family_christian_right: { color: "#4338ca", gradient: "linear-gradient(135deg, #4338ca, #3730a3)" },
  via_campesina_agrarian: { color: "#ca8a04", gradient: "linear-gradient(135deg, #ca8a04, #a16207)" },
  humanist_intl: { color: "#f97316", gradient: "linear-gradient(135deg, #f97316, #ea580c)" },
  democratic_leadership_center: { color: "#0ea5e9", gradient: "linear-gradient(135deg, #0ea5e9, #0284c7)" }
};

function getIdeologySpectrumTag(ideo, lang) {
  const econ = ideo.coordinates.econ;
  const soc = ideo.coordinates.soc;
  if (lang === "pl") {
    if (econ >= 20 && soc >= 20) return "🟦 Wolny Rynek • 🟩 Progresywizm";
    if (econ >= 20 && soc < -20) return "🟦 Wolny Rynek • 🟫 Konserwatyzm";
    if (econ < -20 && soc >= 20) return "🟥 Lewica • 🟩 Progresywizm";
    if (econ < -20 && soc < -20) return "🟥 Lewica • 🟫 Solidaryzm / Tradycja";
    if (econ >= 20) return "🟦 Prawica Wolnorynkowa";
    if (econ <= -20) return "🟥 Lewica Gospodarcza";
    if (soc >= 20) return "🟩 Progresywizm Społeczny";
    if (soc <= -20) return "🟫 Konserwatyzm Społeczny";
    return "⚖️ Nurt Centrowy";
  } else if (lang === "en") {
    if (econ >= 20 && soc >= 20) return "🟦 Free Market • 🟩 Progressivism";
    if (econ >= 20 && soc < -20) return "🟦 Free Market • 🟫 Conservatism";
    if (econ < -20 && soc >= 20) return "🟥 Social Left • 🟩 Progressivism";
    if (econ < -20 && soc < -20) return "🟥 Labor Left • 🟫 Traditionalism";
    if (econ >= 20) return "🟦 Free Market Right";
    if (econ <= -20) return "🟥 Economic Left";
    if (soc >= 20) return "🟩 Social Progressivism";
    if (soc <= -20) return "🟫 Social Conservatism";
    return "⚖️ Centrist Spectrum";
  } else if (lang === "es") {
    if (econ >= 20 && soc >= 20) return "🟦 Libre Mercado • 🟩 Progresismo";
    if (econ >= 20 && soc < -20) return "🟦 Libre Mercado • 🟫 Conservadurismo";
    if (econ < -20 && soc >= 20) return "🟥 Izquierda • 🟩 Progresismo";
    if (econ < -20 && soc < -20) return "🟥 Izquierda • 🟫 Tradición / Solidarismo";
    if (econ >= 20) return "🟦 Derecha de Libre Mercado";
    if (econ <= -20) return "🟥 Izquierda Económica";
    if (soc >= 20) return "🟩 Progresismo Social";
    if (soc <= -20) return "🟫 Conservadurismo Social";
    return "⚖️ Espectro Centrista";
  } else if (lang === "de") {
    if (econ >= 20 && soc >= 20) return "🟦 Freier Markt • 🟩 Progressivismus";
    if (econ >= 20 && soc < -20) return "🟦 Freier Markt • 🟫 Konservatismus";
    if (econ < -20 && soc >= 20) return "🟥 Linke • 🟩 Progressivismus";
    if (econ < -20 && soc < -20) return "🟥 Linke • 🟫 Solidarismus / Tradition";
    if (econ >= 20) return "🟦 Marktliberale Rechte";
    if (econ <= -20) return "🟥 Wirtschaftliche Linke";
    if (soc >= 20) return "🟩 Gesellschaftlicher Progressivismus";
    if (soc <= -20) return "🟫 Gesellschaftlicher Konservatismus";
    return "⚖️ Zentristisches Spektrum";
  } else if (lang === "ru") {
    if (econ >= 20 && soc >= 20) return "🟦 Свободный рынок • 🟩 Прогрессивизм";
    if (econ >= 20 && soc < -20) return "🟦 Свободный рынок • 🟫 Консерватизм";
    if (econ < -20 && soc >= 20) return "🟥 Левые • 🟩 Прогрессивизм";
    if (econ < -20 && soc < -20) return "🟥 Левые • 🟫 Традиционализм";
    if (econ >= 20) return "🟦 Рыночные правые";
    if (econ <= -20) return "🟥 Экономические левые";
    if (soc >= 20) return "🟩 Социальный прогрессивизм";
    if (soc <= -20) return "🟫 Социальный консерватизм";
    return "⚖️ Центристское русло";
  } else {
    if (econ >= 20 && soc >= 20) return "🟦 Libre marché • 🟩 Progressisme";
    if (econ >= 20 && soc < -20) return "🟦 Libre marché • 🟫 Conservatisme";
    if (econ < -20 && soc >= 20) return "🟥 Gauche • 🟩 Progressisme";
    if (econ < -20 && soc < -20) return "🟥 Gauche • 🟫 Traditionalisme";
    if (econ >= 20) return "🟦 Droite libérale";
    if (econ <= -20) return "🟥 Gauche économique";
    if (soc >= 20) return "🟩 Progressisme sociétal";
    if (soc <= -20) return "🟫 Conservatisme sociétal";
    return "⚖️ Courant centriste";
  }
}

function updatePoliticiansToggleButton() {
  if (!toggleMorePoliticiansBtn || !toggleMorePoliticiansText) return;
  const t = uiTranslations[currentLang] || {};
  if (isPoliticiansExpanded || activePoliticianFilter === "all") {
    toggleMorePoliticiansBtn.classList.add("is-expanded");
    toggleMorePoliticiansBtn.setAttribute("aria-expanded", "true");
    toggleMorePoliticiansText.textContent = t.showFewerPoliticians || "Zwiń listę liderów";
  } else {
    toggleMorePoliticiansBtn.classList.remove("is-expanded");
    toggleMorePoliticiansBtn.setAttribute("aria-expanded", "false");
    toggleMorePoliticiansText.textContent = t.showAllPoliticians || "Pokaż wszystkich liderów (katalog 105 postaci)";
  }
}

function renderPoliticiansRanking() {
  if (!otherPoliticiansList || !currentRankedPoliticians.length) return;
  const t = uiTranslations[currentLang] || {};

  const ww2Ids = new Set([
    "winston_churchill", "franklin_d_roosevelt", "adolf_hitler", "joseph_stalin",
    "benito_mussolini", "charles_de_gaulle", "hideki_tojo", "wladyslaw_sikorski",
    "dwight_d_eisenhower", "chiang_kai_shek", "neville_chamberlain"
  ]);

  const activistIds = new Set([
    "martin_luther_king", "mahatma_gandhi", "nelson_mandela", "rosa_luxemburg",
    "milton_friedman", "adam_smith", "murray_rothbard", "noam_chomsky",
    "thomas_jefferson", "vaclav_havel", "lech_walesa", "thomas_sankara",
    "greta_thunberg", "elon_musk"
  ]);

  const historyIds = new Set([
    "woodrow_wilson", "david_lloyd_george", "georges_clemenceau", "wilhelm_ii",
    "vladimir_lenin", "mustafa_kemal_ataturk", "otto_von_bismarck", "abraham_lincoln",
    "theodore_roosevelt", "harry_s_truman", "nikita_khrushchev", "john_f_kennedy",
    "lyndon_b_johnson", "richard_nixon", "mao_zedong", "mikhail_gorbachev",
    "helmut_kohl", "francois_mitterrand", "indira_gandhi", "margaret_thatcher",
    "ronald_reagan", "konrad_adenauer", "deng_xiaoping", "olof_palme",
    "lee_kuan_yew", "clement_attlee", "juan_peron",
    "napoleon_bonaparte", "otto_von_habsburg", "francisco_franco", "josip_broz_tito",
    "golda_meir", "alexander_the_great"
  ]);

  const contemporaryIds = new Set([
    "bill_clinton", "george_w_bush", "barack_obama", "donald_trump",
    "joe_biden", "angela_merkel", "emmanuel_macron", "vladimir_putin",
    "xi_jinping", "narendra_modi", "boris_johnson", "justin_trudeau",
    "jair_bolsonaro", "lula_da_silva", "olaf_scholz", "giorgia_meloni",
    "pedro_sanchez", "viktor_orban", "jaroslaw_kaczynski", "mateusz_morawiecki",
    "ursula_von_der_leyen", "tony_blair", "silvio_berlusconi", "alexandria_ocasio_cortez",
    "marine_le_pen", "javier_milei", "ron_paul", "bernie_sanders",
    "nayib_bukele", "jacinda_ardern", "pepe_mujica", "yanis_varoufakis",
    "volodymyr_zelenskyy", "keir_starmer", "fumio_kishida", "sahra_wagenknecht",
    "evo_morales",
    "hugo_chavez", "sanna_marin", "recep_tayyip_erdogan", "benjamin_netanyahu",
    "nicolas_maduro", "shinzo_abe", "park_geun_hye", "sebastian_kurz",
    "alexander_lukashenko", "mark_rutte"
  ]);

  let filtered = currentRankedPoliticians;
  if (activePoliticianFilter === "ww2") {
    filtered = currentRankedPoliticians.filter(p => ww2Ids.has(p.id));
  } else if (activePoliticianFilter === "history") {
    filtered = currentRankedPoliticians.filter(p => historyIds.has(p.id));
  } else if (activePoliticianFilter === "activists") {
    filtered = currentRankedPoliticians.filter(p => activistIds.has(p.id));
  } else if (activePoliticianFilter === "contemporary") {
    filtered = currentRankedPoliticians.filter(p => contemporaryIds.has(p.id));
  } else if (activePoliticianFilter === "all" || isPoliticiansExpanded) {
    filtered = currentRankedPoliticians;
  } else {
    // Top 12 by default
    filtered = currentRankedPoliticians.slice(0, 12);
  }

  otherPoliticiansList.innerHTML = "";
  filtered.forEach((pol) => {
    const overallRank = currentRankedPoliticians.findIndex(p => p.id === pol.id) + 1;
    const item = document.createElement("div");
    item.className = "podium-mini-card politician-card-item";
    item.dataset.id = pol.id;
    if (pol.id === activePoliticianId) {
      item.classList.add("active-podium");
    }
    const polDisplayName = getPoliticianName(pol);
    const countryName = pol.country[currentLang] || pol.country.en || pol.country.pl;
    const roleName = pol.role[currentLang] || pol.role.en || pol.role.pl;
    const color = pol.color || "#3b82f6";
    item.style.setProperty("--mini-color", color);

    const localSrc = pol.localPhoto || `assets/politicians/${pol.id}.jpg`;
    const remoteSrc = pol.photoUrl || createSvgAvatar(polDisplayName, color);
    const flagSvg = getSvgFlagBadgeHtml(pol, "flag-badge-svg");

    item.innerHTML = `
      <span class="podium-rank-tag">#${overallRank}</span>
      <div class="podium-mini-avatar-wrap" style="border-color: ${color};">
        <img class="podium-mini-avatar-img" src="${localSrc}" alt="${polDisplayName}" loading="lazy" referrerpolicy="no-referrer" />
        <span class="podium-mini-flag-badge">${flagSvg}</span>
      </div>
      <div class="podium-mini-info">
        <strong>${polDisplayName}</strong>
        <div class="podium-mini-meta-row">
          <span>${flagSvg}</span>
          <span>${countryName} • ${roleName}</span>
        </div>
      </div>
      <div class="podium-mini-match-wrap">
        <div class="podium-mini-match" style="background: ${color}20; color: ${color}; border: 1px solid ${color}45;">${pol.similarity}%</div>
        <div class="podium-match-mini-bar">
          <div class="podium-match-mini-bar-fill" style="width: ${pol.similarity}%; background: ${color};"></div>
        </div>
      </div>
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
      const heroRow = document.getElementById("politicianHeroRow");
      if (heroRow) {
        heroRow.classList.remove("spotlight-pulse");
        void heroRow.offsetWidth;
        heroRow.classList.add("spotlight-pulse");
      }
      const cardWrapper = document.querySelector(".politician-match-card");
      if (cardWrapper) {
        const cardRect = cardWrapper.getBoundingClientRect();
        if (cardRect.top < -30) {
          cardWrapper.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }
    });

    otherPoliticiansList.appendChild(item);
  });

  updatePoliticiansToggleButton();
}

function renderIdeologyProfile(ideo, isTop = false) {
  const t = uiTranslations[currentLang] || {};
  activeIdeologyId = ideo.id;
  const ideoName = ideo.name[currentLang] || ideo.name.pl;
  const ideoSubtitle = ideo.subtitle[currentLang] || ideo.subtitle.pl;
  const ideoDesc = ideo.desc[currentLang] || ideo.desc.pl;
  const color = ideo.color || "#3b82f6";
  const gradient = ideo.gradient || `linear-gradient(135deg, ${color}, #1d4ed8)`;
  const icon = ideo.icon || "🏛️";

  const topIdeo = (currentRankedIdeologies && currentRankedIdeologies[0]) || ideo;
  const isActuallyTop = (ideo.id === topIdeo.id);
  const ideoRank = (currentRankedIdeologies && currentRankedIdeologies.findIndex(i => i.id === ideo.id) + 1) || 1;

  if (ideologyMatchBadge) {
    ideologyMatchBadge.textContent = isActuallyTop
      ? `${t.primaryIdeologyMatch || 'Zgodność:'} ${ideo.similarity}%`
      : `#${ideoRank} • ${t.primaryIdeologyMatch || 'Zgodność:'} ${ideo.similarity}%`;
    ideologyMatchBadge.style.background = gradient;
  }
  if (ideologyTitle) {
    ideologyTitle.innerHTML = `<span class="ideology-hero-icon" aria-hidden="true" style="margin-right: 6px;">${icon}</span> ${ideoName}`;
  }
  if (ideologySubtitle) ideologySubtitle.textContent = ideoSubtitle;
  if (ideologyDescription) ideologyDescription.textContent = ideoDesc;

  // Active Ideology Spotlight Banner in ideology-card
  if (ideologyCardActiveBadge) {
    ideologyCardActiveBadge.textContent = isActuallyTop
      ? `${t.ideologyMatchLabel || 'Zgodność:'} ${ideo.similarity}%`
      : `#${ideoRank} • ${t.ideologyMatchLabel || 'Zgodność:'} ${ideo.similarity}%`;
    ideologyCardActiveBadge.style.background = gradient;
  }
  if (ideologyActiveName) {
    ideologyActiveName.textContent = ideoName;
  }
  if (ideologyActiveSub) {
    ideologyActiveSub.textContent = ideoSubtitle;
  }
  if (ideologyActiveIcon) {
    ideologyActiveIcon.textContent = icon;
  }
  if (ideologyActiveBanner) {
    ideologyActiveBanner.style.setProperty("--ideology-color", color);
    ideologyActiveBanner.style.borderColor = `${color}80`;
    ideologyActiveBanner.style.boxShadow = `0 4px 18px ${color}35`;
  }
  if (ideologyActiveIconWrap) {
    ideologyActiveIconWrap.style.borderColor = color;
    ideologyActiveIconWrap.style.boxShadow = `0 0 16px ${color}50`;
  }

  const ideologyCard = document.querySelector(".ideology-card");
  if (ideologyCard) {
    ideologyCard.style.setProperty("--ideology-color", color);
    ideologyCard.style.borderColor = `${color}40`;
    ideologyCard.style.boxShadow = `0 12px 36px -8px ${color}25, 0 4px 16px rgba(0, 0, 0, 0.25)`;
  }

  if (keyFiguresList) {
    keyFiguresList.innerHTML = "";
    (ideo.keyFigures || []).forEach(fig => {
      const tag = document.createElement("span");
      tag.className = "key-figure-tag";
      tag.textContent = fig;
      keyFiguresList.appendChild(tag);
    });
  }

  document.querySelectorAll(".secondary-ideology-item").forEach(card => {
    card.classList.toggle("active-ideology-item", card.dataset.id === ideo.id);
  });
}

function updateIdeologiesToggleButton() {
  if (!toggleMoreIdeologiesBtn || !toggleMoreIdeologiesText) return;
  const t = uiTranslations[currentLang] || {};
  if (isIdeologiesExpanded || activeIdeologyFilter === "all") {
    toggleMoreIdeologiesBtn.classList.add("is-expanded");
    toggleMoreIdeologiesBtn.setAttribute("aria-expanded", "true");
    toggleMoreIdeologiesText.textContent = t.showFewerIdeologies || "Zwiń listę poglądów";
  } else {
    toggleMoreIdeologiesBtn.classList.remove("is-expanded");
    toggleMoreIdeologiesBtn.setAttribute("aria-expanded", "false");
    toggleMoreIdeologiesText.textContent = t.showAllIdeologies || "Pokaż wszystkie poglądy (katalog 44 nurtów)";
  }
}

function renderIdeologiesRanking() {
  if (!secondaryIdeologiesList || !currentRankedIdeologies.length) return;
  const t = uiTranslations[currentLang] || {};

  let filtered = currentRankedIdeologies;
  if (activeIdeologyFilter === "market") {
    filtered = currentRankedIdeologies.filter(i => i.coordinates.econ >= 20);
  } else if (activeIdeologyFilter === "progressive") {
    filtered = currentRankedIdeologies.filter(i => i.coordinates.soc >= 20);
  } else if (activeIdeologyFilter === "socialist") {
    filtered = currentRankedIdeologies.filter(i => i.coordinates.econ <= -20);
  } else if (activeIdeologyFilter === "conservative") {
    filtered = currentRankedIdeologies.filter(i => i.coordinates.soc <= -20);
  } else if (activeIdeologyFilter === "all" || isIdeologiesExpanded) {
    filtered = currentRankedIdeologies;
  } else {
    // Top 12 by default
    filtered = currentRankedIdeologies.slice(0, 12);
  }

  secondaryIdeologiesList.innerHTML = "";
  filtered.forEach((ideo) => {
    const overallRank = currentRankedIdeologies.findIndex(i => i.id === ideo.id) + 1;
    const card = document.createElement("div");
    card.className = "secondary-ideology-item";
    card.dataset.id = ideo.id;
    if (ideo.id === activeIdeologyId) {
      card.classList.add("active-ideology-item");
    }

    const ideoName = ideo.name[currentLang] || ideo.name.pl;
    const ideoSub = ideo.subtitle[currentLang] || ideo.subtitle.pl;
    const color = ideo.color || "#3b82f6";
    const gradient = ideo.gradient || `linear-gradient(135deg, ${color}, #1d4ed8)`;
    const icon = ideo.icon || "🏛️";
    const spectrumTag = getIdeologySpectrumTag(ideo, currentLang);

    card.style.setProperty("--ideo-color", color);
    card.style.setProperty("--ideo-gradient", gradient);
    card.style.borderColor = `${color}40`;

    const figuresHtml = (ideo.keyFigures || []).slice(0, 3).map(fig => 
      `<span class="secondary-figure-chip" style="border-color: ${color}35; background: ${color}10;">${fig}</span>`
    ).join("");

    card.innerHTML = `
      <div class="secondary-item-header">
        <div class="secondary-title-group">
          <span class="ideology-rank-pill">#${overallRank}</span>
          <div class="ideology-icon-circle" style="border-color: ${color}; background: ${color}22;">${icon}</div>
          <div>
            <strong>${ideoName}</strong>
            <div class="ideology-spectrum-tag" style="border-color: ${color}50; background: ${color}15; color: ${color};">${spectrumTag}</div>
          </div>
        </div>
        <span class="match-mini-badge" style="background: ${color}20; color: ${color}; border-color: ${color}60;">${ideo.similarity}%</span>
      </div>
      <div class="ideology-match-bar-track" style="background: var(--bg-hover);">
        <div class="ideology-match-bar-fill" style="width: ${ideo.similarity}%; background: ${gradient}; box-shadow: 0 0 10px ${color}70;"></div>
      </div>
      <p class="secondary-item-sub">${ideoSub}</p>
      <div class="secondary-item-figures">${figuresHtml}</div>
    `;

    card.addEventListener("click", (e) => {
      createRippleEffect(e, card);
      renderIdeologyProfile(ideo);
      const banner = document.getElementById("ideologyActiveBanner");
      if (banner) {
        banner.classList.remove("spotlight-pulse");
        void banner.offsetWidth;
        banner.classList.add("spotlight-pulse");
      }
      const ideoCard = document.querySelector(".ideology-card");
      if (ideoCard) {
        const rect = ideoCard.getBoundingClientRect();
        if (rect.top < -30) {
          ideoCard.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }
    });

    secondaryIdeologiesList.appendChild(card);
  });

  updateIdeologiesToggleButton();
}

function updatePartiesToggleButton() {
  if (!toggleMorePartiesBtn || !toggleMorePartiesText) return;
  const t = uiTranslations[currentLang] || {};
  if (isPartiesExpanded || activePartyFilter === "all") {
    toggleMorePartiesBtn.classList.add("is-expanded");
    toggleMorePartiesBtn.setAttribute("aria-expanded", "true");
    toggleMorePartiesText.textContent = t.showFewerParties || "Zwiń listę partii";
  } else {
    toggleMorePartiesBtn.classList.remove("is-expanded");
    toggleMorePartiesBtn.setAttribute("aria-expanded", "false");
    toggleMorePartiesText.textContent = t.showAllParties || "Pokaż wszystkie partie (katalog 30 rodzin)";
  }
}

function renderPartiesRanking() {
  if (!otherPartiesList || !currentRankedParties.length) return;
  const t = uiTranslations[currentLang] || {};

  let filtered = currentRankedParties;
  if (activePartyFilter === "left") {
    filtered = currentRankedParties.filter(p => p.coordinates.econ <= -20);
  } else if (activePartyFilter === "market") {
    filtered = currentRankedParties.filter(p => p.coordinates.econ >= 20);
  } else if (activePartyFilter === "libertarian") {
    filtered = currentRankedParties.filter(p => p.coordinates.soc >= 20);
  } else if (activePartyFilter === "traditional") {
    filtered = currentRankedParties.filter(p => p.coordinates.soc <= -20);
  } else if (activePartyFilter === "all" || isPartiesExpanded) {
    filtered = currentRankedParties;
  } else {
    // Top 8 by default
    filtered = currentRankedParties.slice(0, 8);
  }

  otherPartiesList.innerHTML = "";
  filtered.forEach((pty) => {
    const overallRank = currentRankedParties.findIndex(p => p.id === pty.id) + 1;
    const item = document.createElement("div");
    item.className = "podium-mini-card party-card-item";
    item.dataset.id = pty.id;
    if (pty.id === activePartyId) {
      item.classList.add("active-podium");
    }
    const color = pty.color || (partyColors[pty.id] && partyColors[pty.id].color) || "#3b82f6";
    const gradient = pty.gradient || (partyColors[pty.id] && partyColors[pty.id].gradient) || `linear-gradient(135deg, ${color}, #1d4ed8)`;
    item.style.setProperty("--mini-color", color);

    const partyTitle = pty.name[currentLang] || pty.name.pl;
    const partyType = pty.type[currentLang] || pty.type.pl;

    item.innerHTML = `
      <span class="podium-rank-tag">#${overallRank}</span>
      <div class="podium-mini-flag" style="border-color: ${color}60; background: ${color}15; color: ${color};">${pty.emblem}</div>
      <div class="podium-mini-info">
        <strong>${partyTitle}</strong>
        <div class="podium-mini-meta-row">
          <span>${partyType}</span>
        </div>
      </div>
      <div class="podium-mini-match-wrap">
        <div class="podium-mini-match" style="background: ${color}20; color: ${color}; border: 1px solid ${color}45;">${pty.similarity}%</div>
        <div class="podium-match-mini-bar">
          <div class="podium-match-mini-bar-fill" style="width: ${pty.similarity}%; background: ${color};"></div>
        </div>
      </div>
    `;

    item.addEventListener("click", (e) => {
      createRippleEffect(e, item);
      renderPartyProfile(pty);
      const cardWrapper = document.querySelector(".party-match-card");
      if (cardWrapper) {
        cardWrapper.classList.remove("spotlight-pulse");
        void cardWrapper.offsetWidth;
        cardWrapper.classList.add("spotlight-pulse");
        const cardRect = cardWrapper.getBoundingClientRect();
        if (cardRect.top < -30) {
          cardWrapper.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }
    });

    otherPartiesList.appendChild(item);
  });

  updatePartiesToggleButton();
}

function renderPartyProfile(party, isTop = false) {
  const t = uiTranslations[currentLang] || {};
  const color = party.color || (partyColors[party.id] && partyColors[party.id].color) || "#3b82f6";
  const gradient = party.gradient || (partyColors[party.id] && partyColors[party.id].gradient) || `linear-gradient(135deg, ${color}, #1d4ed8)`;
  
  const topParty = (currentRankedParties && currentRankedParties[0]) || party;
  const isActuallyTop = (party.id === topParty.id);
  const ptyRank = (currentRankedParties && currentRankedParties.findIndex(p => p.id === party.id) + 1) || 1;

  if (partyMatchBadge) {
    partyMatchBadge.textContent = isActuallyTop
      ? `${t.partyMatchLabel} ${party.similarity}%`
      : `#${ptyRank} • ${t.partyMatchLabel} ${party.similarity}%`;
    partyMatchBadge.style.background = gradient;
  }
  if (partyEmblem) {
    partyEmblem.textContent = party.emblem;
    partyEmblem.style.borderColor = color;
    partyEmblem.style.background = `${color}20`;
    partyEmblem.style.boxShadow = `0 0 16px ${color}40`;
  }
  if (partyName) partyName.textContent = party.name[currentLang] || party.name.en || party.name.pl;
  if (partyType) partyType.textContent = party.type[currentLang] || party.type.en || party.type.pl;
  if (partyManifestoText) partyManifestoText.textContent = party.manifesto[currentLang] || party.manifesto.pl;
  activePartyId = party.id;

  const cardWrapper = document.querySelector(".party-match-card");
  if (cardWrapper) {
    cardWrapper.style.setProperty("--party-card-color", color);
    cardWrapper.style.borderColor = `${color}45`;
    cardWrapper.style.boxShadow = `0 12px 36px -8px ${color}28, 0 4px 16px rgba(0, 0, 0, 0.25)`;
  }

  document.querySelectorAll(".podium-mini-card.party-card-item").forEach(card => {
    card.classList.toggle("active-podium", card.dataset.id === party.id);
  });
}

function showResults(animated = true) {
  const { econScore, socScore } = calculateScores();
  currentEconScore = econScore;
  currentSocScore = socScore;
  const t = uiTranslations[currentLang];

  // 1. Dopasowanie Ideologii (44 ideologie)
  currentRankedIdeologies = worldIdeologies.map(ideo => {
    const { dist, similarity } = calculateSimilarity(econScore, socScore, ideo.coordinates.econ, ideo.coordinates.soc);
    return { ...ideo, dist, similarity };
  }).sort((a, b) => a.dist - b.dist);

  const topIdeology = currentRankedIdeologies[0];
  const activeIdeology = currentRankedIdeologies.find(i => i.id === activeIdeologyId) || topIdeology;
  renderIdeologyProfile(activeIdeology, activeIdeology.id === topIdeology.id);
  renderIdeologiesRanking();

  // 2. Dopasowanie Światowego Lidera (katalog liderów i postaci historycznych)
  currentRankedPoliticians = worldPoliticians.map(pol => {
    const { dist, similarity } = calculateSimilarity(econScore, socScore, pol.coordinates.econ, pol.coordinates.soc);
    return { ...pol, dist, similarity };
  }).sort((a, b) => a.dist - b.dist);

  const topPolitician = currentRankedPoliticians[0];
  const activePol = currentRankedPoliticians.find(p => p.id === activePoliticianId) || topPolitician;
  renderPoliticianProfile(activePol, activePol.id === topPolitician.id);
  renderPoliticiansRanking();

  // 3. Dopasowanie Międzynarodowej Partii (15 partii)
  currentRankedParties = worldParties.map(pty => {
    const { dist, similarity } = calculateSimilarity(econScore, socScore, pty.coordinates.econ, pty.coordinates.soc);
    return { ...pty, dist, similarity };
  }).sort((a, b) => a.dist - b.dist);

  const topParty = currentRankedParties[0];
  const activeParty = currentRankedParties.find(p => p.id === activePartyId) || topParty;
  renderPartyProfile(activeParty, activeParty.id === topParty.id);
  renderPartiesRanking();

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
  if (resultBadge) {
    resultBadge.textContent = currentTestMode === "quick"
      ? (t.badgeResultQuick || "Test Result • Quick Version (30 questions)")
      : (t.badgeResultFull || "Test Result • Full Version (160 questions)");
  }
  if (tryOtherModeBtn) {
    tryOtherModeBtn.textContent = currentTestMode === "quick"
      ? (t.tryOtherModeFull || "🧭 Take the Full Version (160 questions)")
      : (t.tryOtherModeQuick || "⚡ Take the Quick Version (30 questions)");
  }

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
    const catName = catObj ? (catObj[currentLang] || catObj.en || catObj.pl) : catKey;
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
  if (!reviewList) return;
  reviewList.innerHTML = "";
  const t = uiTranslations[currentLang] || uiTranslations.en || uiTranslations.pl || {};
  const activeQs = getActiveQuestions();

  if (toggleAnswersBtn) {
    const rawRev = t.reviewBtn || "📝 Zobacz swoje odpowiedzi ({total})";
    toggleAnswersBtn.textContent = rawRev.replace("{total}", activeQs.length);
  }
  if (reviewTitle) {
    const rawTitle = t.reviewTitle || "Twoje odpowiedzi na pytania ({total})";
    reviewTitle.textContent = rawTitle.replace("{total}", activeQs.length);
  }

  activeQs.forEach((q, idx) => {
    const val = userAnswers[idx];
    const opt = answerOptions.find(o => o.value === val);
    const catObj = categories[q.categoryKey];
    const catName = catObj ? (catObj[currentLang] || catObj.en || catObj.pl) : q.categoryKey;
    const qText = q.text[currentLang] || q.text.en || q.text.pl;

    let optText = t.noAnswerLabel;
    let badgeClass = "badge-neutral";

    if (val === "skip") {
      optText = t.skipBadge || "Pominięte (bez wpływu)";
      badgeClass = "badge-skip";
    } else if (val === 0) {
      optText = t.neutralBadge || "Neutralny / Umiarkowany (0)";
      badgeClass = "badge-neutral";
    } else if (val === 2 || val === 1) {
      optText = opt ? (opt.label[currentLang] || opt.label.en || opt.label.pl) : "";
      badgeClass = "badge-agree";
    } else if (val === -1 || val === -2) {
      optText = opt ? (opt.label[currentLang] || opt.label.en || opt.label.pl) : "";
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
  const ideoName = topIdeology.name[currentLang] || topIdeology.name.en || topIdeology.name.pl;
  const ideoSub = topIdeology.subtitle[currentLang] || topIdeology.subtitle.en || topIdeology.subtitle.pl;

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

  const polCountry = pol.country[currentLang] || pol.country.en || pol.country.pl;
  const polRole = pol.role[currentLang] || pol.role.en || pol.role.pl;
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

  const partyName = party.name[currentLang] || party.name.en || party.name.pl;
  ctx.fillStyle = "#ffffff";
  ctx.font = "bold 21px 'Plus Jakarta Sans', sans-serif";
  const displayParty = partyName.length > 28 ? partyName.substring(0, 26) + '...' : partyName;
  ctx.fillText(`${party.emblem} ${displayParty}`, 585, cardY + 76);

  const partyType = party.type[currentLang] || party.type.en || party.type.pl;
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
  const activeQs = getActiveQuestions();
  const footerStatsTemplate = t.canvasFooterStats || `Globalny Kompas Poglądów 2026 • {questions} Pytań • {ideologies} Ideologii • {politicians} Liderów i Myślicieli • {parties} Rodzin Partyjnych`;
  const footerStats = footerStatsTemplate
    .replace("{questions}", activeQs.length)
    .replace("{ideologies}", worldIdeologies.length)
    .replace("{politicians}", worldPoliticians.length)
    .replace("{parties}", worldParties.length);
  const footerCta = t.canvasFooterCta || "Wykonaj test online i poznaj swoje miejsce na politycznej mapie świata!";
  ctx.fillText(footerStats, 540, 1070);
  ctx.fillText(footerCta, 540, 1100);

  const link = document.createElement("a");
  link.download = `political_compass_${currentLang}_${currentTestMode}_${Date.now()}.png`;
  link.href = exportCanvas.toDataURL("image/png");
  link.click();
}

function copyResultSummary() {
  const t = uiTranslations[currentLang] || uiTranslations.en || uiTranslations.pl || {};
  const activeQs = getActiveQuestions();
  const { econScore, socScore } = calculateScores();

  const rankedIdeologies = worldIdeologies.map(ideo => {
    const { dist, similarity } = calculateSimilarity(econScore, socScore, ideo.coordinates.econ, ideo.coordinates.soc);
    return { ...ideo, dist, similarity };
  }).sort((a, b) => a.dist - b.dist);
  const topIdeology = rankedIdeologies[0];

  const topPolitician = currentRankedPoliticians[0] || worldPoliticians[0];
  const topParty = currentRankedParties[0] || worldParties[0];

  const ideoName = topIdeology.name[currentLang] || topIdeology.name.en || topIdeology.name.pl;
  const ideoSub = topIdeology.subtitle[currentLang] || topIdeology.subtitle.en || topIdeology.subtitle.pl;
  const polName = topPolitician.name;
  const polCountry = topPolitician.country[currentLang] || topPolitician.country.pl;
  const partyTitle = topParty.name[currentLang] || topParty.name.pl;

  const econSide = econScore > 0 ? t.econLabelRight : econScore < 0 ? t.econLabelLeft : t.centerLabel;
  const socSide = socScore > 0 ? t.socLabelRight : socScore < 0 ? t.socLabelLeft : t.centerLabel;
  const modeBadgeText = currentTestMode === "quick" ? (t.modeQuickBadge || "Szybka") : (t.modeFullBadge || "Pełna");

  const textToCopy = `⚖️ ${t.appTitle} 2026 (${modeBadgeText} • ${activeQs.length} pytań)\n` +
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
