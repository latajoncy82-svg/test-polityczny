/**
 * TEST POLITYCZNY - GŁÓWNA LOGIKA APLIKACJI (WERSJA GLOBALNA 2026)
 * Obsługa 100 pytań, 32 ideologii, 24 światowych liderów, 12 partii międzynarodowych
 * oraz 4 języków: PL, EN, RU, FR.
 */

// Stan testu
let currentLang = localStorage.getItem("ptp_lang") || "pl";
let currentQuestionIndex = 0;
let userAnswers = new Array(questions.length).fill(null);
let animationFrameId = null;
let currentEconScore = 0;
let currentSocScore = 0;

// Elementy DOM
const welcomeScreen = document.getElementById("welcomeScreen");
const questionScreen = document.getElementById("questionScreen");
const resultScreen = document.getElementById("resultScreen");

// Header
const headerAppTitle = document.getElementById("headerAppTitle");
const headerAppSubtitle = document.getElementById("headerAppSubtitle");
const themeToggleBtn = document.getElementById("themeToggleBtn");
const themeIcon = document.getElementById("themeIcon");

// Welcome Screen
const langSelectLabel = document.getElementById("langSelectLabel");
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

// Inicjalizacja aplikacji
document.addEventListener("DOMContentLoaded", () => {
  setupTheme();
  applyLanguage(currentLang);
  setupEventListeners();
  setupKeyboardNavigation();
  updateResumeButtonText();
});

// =========================================================================
// OBSŁUGA MOTYWU (DARK / LIGHT)
// =========================================================================
function setupTheme() {
  const savedTheme = localStorage.getItem("ptp_theme") || "theme-dark";
  document.body.className = savedTheme;
  updateThemeIcon(savedTheme);
}

function toggleTheme() {
  const isDark = document.body.classList.contains("theme-dark");
  const newTheme = isDark ? "theme-light" : "theme-dark";
  document.body.className = newTheme;
  localStorage.setItem("ptp_theme", newTheme);
  updateThemeIcon(newTheme);

  if (resultScreen.classList.contains("active")) {
    drawCompass(currentEconScore, currentSocScore);
  }
}

function updateThemeIcon(theme) {
  themeIcon.textContent = theme === "theme-dark" ? "☀️" : "🌙";
}

// =========================================================================
// OBSŁUGA WIELOJĘZYCZNOŚCI (I18N: PL, EN, RU, FR)
// =========================================================================
function setLanguage(lang) {
  if (!uiTranslations[lang]) return;
  currentLang = lang;
  localStorage.setItem("ptp_lang", lang);
  applyLanguage(lang);

  // Jeśli jesteśmy na ekranie pytań, przerysuj aktualne pytanie
  if (questionScreen.classList.contains("active")) {
    renderQuestion();
  }

  // Jeśli jesteśmy na ekranie wyników, przerysuj wyniki i kompas
  if (resultScreen.classList.contains("active")) {
    showResults(false);
  }
}

function applyLanguage(lang) {
  const t = uiTranslations[lang];
  if (!t) return;

  // Dynamiczny tytuł strony w karcie przeglądarki
  document.title = `${t.appTitle} – ${t.appSubtitle}`;

  // Aktywne przyciski wyboru języka
  document.querySelectorAll(".lang-card-btn, .header-lang-btn").forEach(btn => {
    btn.classList.toggle("active", btn.dataset.lang === lang);
  });

  // Header & Welcome
  headerAppTitle.textContent = t.appTitle;
  headerAppSubtitle.textContent = t.appSubtitle;
  themeToggleBtn.title = t.themeToggleTitle;
  langSelectLabel.textContent = t.langSelectLabel;
  badgePill.textContent = t.badgePill;
  heroTitle.textContent = t.heroTitle;
  heroDesc.textContent = t.heroDesc;
  axisEconTitle.textContent = t.axisEconTitle;
  axisEconDesc.textContent = t.axisEconDesc;
  axisSocTitle.textContent = t.axisSocTitle;
  axisSocDesc.textContent = t.axisSocDesc;
  featureTime.textContent = t.featureTime;
  featureAnon.textContent = t.featureAnon;
  featureResults.textContent = t.featureResults;
  startTestBtn.textContent = t.startBtn;

  // Question controls
  prevBtn.textContent = t.prevBtn;
  if (nextBtn) nextBtn.textContent = t.nextBtn;
  keyboardHint.textContent = `⌨️ ${t.keyboardHint}`;

  // Results UI
  resultBadge.textContent = t.resultBadge;
  legendRedText.textContent = t.legendRed;
  legendGreenText.textContent = t.legendGreen;
  legendBlueText.textContent = t.legendBlue;
  legendYellowText.textContent = t.legendYellow;
  econMeterLeft.textContent = t.econMeterLeft;
  econMeterRight.textContent = t.econMeterRight;
  socMeterLeft.textContent = t.socMeterLeft;
  socMeterRight.textContent = t.socMeterRight;
  ideologySectionTitle.textContent = t.ideologySectionTitle;
  keyFiguresLabel.textContent = t.keyFiguresLabel;
  secondaryIdeologiesTitle.textContent = t.secondaryIdeologiesTitle;
  politicianCardTitle.textContent = t.politicianCardTitle;
  politicianCardSubtitle.textContent = t.politicianCardSubtitle;
  politicianWhyVoteLabel.textContent = t.politicianWhyVoteLabel;
  if (politicianQuoteLabel) politicianQuoteLabel.textContent = t.politicianQuoteLabel;
  if (clickLeaderHint) clickLeaderHint.textContent = t.clickToViewDetail;
  otherPoliticiansTitle.textContent = t.otherPoliticiansTitle;
  partyCardTitle.textContent = t.partyCardTitle;
  partyCardSubtitle.textContent = t.partyCardSubtitle;
  if (partyTypeLabel) partyTypeLabel.textContent = t.partyTypeLabel;
  partyManifestoLabel.textContent = t.partyManifestoLabel;
  if (clickPartyHint) clickPartyHint.textContent = t.clickToViewParty;
  otherPartiesTitle.textContent = t.otherPartiesTitle;
  categoryBreakdownTitle.textContent = t.categoryBreakdownTitle;
  downloadResultBtn.textContent = t.downloadBtn;
  copyShareBtn.textContent = t.copyBtn;
  toggleAnswersBtn.textContent = t.reviewBtn;
  restartBtn.textContent = t.restartBtn;
  reviewTitle.textContent = t.reviewTitle;
  closeReviewBtn.textContent = t.closeBtn;
  footerText.textContent = t.footerText;

  updateResumeButtonText();
  document.documentElement.lang = lang;
}

// =========================================================================
// ZDARZENIA I INTERAKCJA
// =========================================================================
function setupEventListeners() {
  themeToggleBtn.addEventListener("click", toggleTheme);

  // Przełączniki języków
  document.querySelectorAll(".lang-card-btn, .header-lang-btn").forEach(btn => {
    btn.addEventListener("click", (e) => {
      const selectedLang = e.currentTarget.dataset.lang;
      setLanguage(selectedLang);
    });
  });

  startTestBtn.addEventListener("click", () => {
    resetProgress();
    startQuiz();
  });
  if (resumeTestBtn) {
    resumeTestBtn.addEventListener("click", resumeQuiz);
  }
  prevBtn.addEventListener("click", goToPreviousQuestion);
  if (nextBtn) {
    nextBtn.addEventListener("click", goToNextQuestion);
  }
  restartBtn.addEventListener("click", resetQuiz);
  downloadResultBtn.addEventListener("click", downloadResultImage);
  copyShareBtn.addEventListener("click", copyResultSummary);
  toggleAnswersBtn.addEventListener("click", toggleReview);
  closeReviewBtn.addEventListener("click", () => answersReviewSection.classList.add("hidden"));
}

function setupKeyboardNavigation() {
  window.addEventListener("keydown", (e) => {
    if (!questionScreen.classList.contains("active")) return;

    if (e.key === "1") handleAnswerSelect(2);
    else if (e.key === "2") handleAnswerSelect(1);
    else if (e.key === "3") handleAnswerSelect(0);
    else if (e.key === "4") handleAnswerSelect(-1);
    else if (e.key === "5") handleAnswerSelect(-2);
    else if (e.key === "ArrowLeft" || e.key === "Backspace") {
      goToPreviousQuestion();
    } else if (e.key === "ArrowRight") {
      goToNextQuestion();
    }
  });
}

function switchScreen(activeScreen) {
  [welcomeScreen, questionScreen, resultScreen].forEach(s => s.classList.remove("active"));
  activeScreen.classList.add("active");
  window.scrollTo({ top: 0, behavior: "smooth" });
}

// =========================================================================
// ZARZĄDZANIE STANEM I ZAPIS POSTĘPÓW (LOCAL STORAGE)
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
  if (saved) {
    const t = uiTranslations[currentLang];
    const resumeTxt = (t.resumeBtn || "Kontynuuj test")
      .replace("{current}", saved.currentIndex + 1)
      .replace("{total}", questions.length);
    resumeTestBtn.textContent = resumeTxt;
    resumeTestBtn.classList.remove("hidden");
  } else {
    resumeTestBtn.classList.add("hidden");
  }
}

function resetProgress() {
  try {
    localStorage.removeItem("ptp_progress");
  } catch (e) {}
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
let isTransitioning = false;

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

  // Generowanie przycisków 5 odpowiedzi
  answersContainer.innerHTML = "";
  answerOptions.forEach((opt, idx) => {
    const btn = document.createElement("button");
    btn.className = `answer-btn ${opt.className}`;

    const labelText = opt.label[currentLang] || opt.label.pl;
    btn.innerHTML = `<span class="answer-shortcut-tag">${idx + 1}</span><span>${labelText}</span>`;

    // Zaznaczenie wybranej uprzednio odpowiedzi
    if (userAnswers[currentQuestionIndex] === opt.value) {
      btn.style.borderColor = "var(--accent-primary)";
      btn.style.boxShadow = "0 0 0 2px var(--accent-glow)";
      btn.classList.add("selected-answer");
    }

    btn.addEventListener("click", () => handleAnswerSelect(opt.value, btn));
    answersContainer.appendChild(btn);
  });
}

function handleAnswerSelect(val, clickedBtn = null) {
  if (isTransitioning) return;
  isTransitioning = true;
  userAnswers[currentQuestionIndex] = val;
  saveProgress();

  if (clickedBtn) {
    document.querySelectorAll(".answer-btn").forEach(b => b.classList.remove("selected-answer"));
    clickedBtn.classList.add("selected-answer");
  }

  setTimeout(() => {
    if (currentQuestionIndex < questions.length - 1) {
      currentQuestionIndex++;
      renderQuestion();
    } else {
      progressBar.style.width = "100%";
      setTimeout(() => showResults(true), 200);
    }
    isTransitioning = false;
  }, 100);
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
// KALKULACJA PUNKTÓW I DOPASOWANIA (MATCHING ENGINE)
// =========================================================================
function calculateScores() {
  let econRaw = 0;
  let econMax = 0;
  let socRaw = 0;
  let socMax = 0;

  questions.forEach((q, idx) => {
    const ans = userAnswers[idx] ?? 0;
    if (q.axis === "econ") {
      econRaw += ans * q.multiplier;
      econMax += 2;
    } else if (q.axis === "soc") {
      socRaw += ans * q.multiplier;
      socMax += 2;
    }
  });

  const econScore = Math.max(-100, Math.min(100, Math.round((econRaw / econMax) * 100)));
  const socScore = Math.max(-100, Math.min(100, Math.round((socRaw / socMax) * 100)));

  return { econScore, socScore };
}

// Obliczenie zgodności (0% do 100%) na podstawie odległości euklidesowej
function calculateSimilarity(userEcon, userSoc, targetEcon, targetSoc) {
  const dist = Math.hypot(userEcon - targetEcon, userSoc - targetSoc);
  // Maksymalna możliwa odległość na siatce [-100..100] wynosi sqrt(200^2 + 200^2) ≈ 282.84
  const maxDist = 282.84;
  const similarity = Math.max(0, Math.min(100, Math.round(100 - (dist / maxDist) * 100)));
  return { dist, similarity };
}

// Obliczenie rozbicia w 12 kategoriach tematycznych
function calculateSectorBreakdown() {
  const sectorScores = {};

  Object.keys(categories).forEach(catKey => {
    const catQuestions = questions.filter(q => q.categoryKey === catKey);
    let raw = 0;
    let max = 0;

    catQuestions.forEach(q => {
      const idx = q.id - 1;
      const ans = userAnswers[idx] ?? 0;
      raw += ans * q.multiplier;
      max += 2;
    });

    const scorePct = max > 0 ? Math.round((raw / max) * 100) : 0;
    const axis = catQuestions[0] ? catQuestions[0].axis : "econ";
    sectorScores[catKey] = { scorePct, axis, count: catQuestions.length };
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

function renderPoliticianProfile(pol, isTop = false) {
  const t = uiTranslations[currentLang];
  politicianMatchBadge.textContent = `${t.politicianMatchLabel} ${pol.similarity}%`;
  politicianFlag.textContent = pol.flag;
  politicianName.textContent = pol.name;
  politicianCountry.textContent = pol.country[currentLang] || pol.country.pl;
  politicianRole.textContent = pol.role[currentLang] || pol.role.pl;
  politicianQuote.textContent = pol.quote[currentLang] || pol.quote.pl;
  politicianWhyVoteText.textContent = pol.whyVote[currentLang] || pol.whyVote.pl;
  activePoliticianId = pol.id;

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

  // 2. Dopasowanie Światowego Lidera Politycznego (28 liderów)
  currentRankedPoliticians = worldPoliticians.map(pol => {
    const { dist, similarity } = calculateSimilarity(econScore, socScore, pol.coordinates.econ, pol.coordinates.soc);
    return { ...pol, dist, similarity };
  }).sort((a, b) => a.dist - b.dist);

  const topPolitician = currentRankedPoliticians[0];
  const runnerUpPoliticians = currentRankedPoliticians.slice(1, 4);
  renderPoliticianProfile(topPolitician, true);

  // Kolejne dopasowania liderów z interaktywnym podglądem
  otherPoliticiansList.innerHTML = "";
  runnerUpPoliticians.forEach(pol => {
    const item = document.createElement("div");
    item.className = "podium-mini-card politician-card-item";
    item.dataset.id = pol.id;
    const countryName = pol.country[currentLang] || pol.country.pl;
    item.innerHTML = `
      <div class="podium-mini-flag">${pol.flag}</div>
      <div class="podium-mini-info">
        <strong>${pol.name}</strong>
        <span>${countryName}</span>
      </div>
      <div class="podium-mini-match">${pol.similarity}%</div>
    `;
    item.addEventListener("click", () => renderPoliticianProfile(pol));
    otherPoliticiansList.appendChild(item);
  });

  // 3. Dopasowanie Międzynarodowej Partii / Ruchu (15 partii)
  currentRankedParties = worldParties.map(pty => {
    const { dist, similarity } = calculateSimilarity(econScore, socScore, pty.coordinates.econ, pty.coordinates.soc);
    return { ...pty, dist, similarity };
  }).sort((a, b) => a.dist - b.dist);

  const topParty = currentRankedParties[0];
  const runnerUpParties = currentRankedParties.slice(1, 4);
  renderPartyProfile(topParty, true);

  // Kolejne rodziny partyjne z interaktywnym podglądem
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
    item.addEventListener("click", () => renderPartyProfile(pty));
    otherPartiesList.appendChild(item);
  });

  // 4. Teksty wskaźników osi i pozycjonowanie pinów
  const econSide = econScore > 0 ? t.econLabelRight : econScore < 0 ? t.econLabelLeft : t.centerLabel;
  const socSide = socScore > 0 ? t.socLabelRight : socScore < 0 ? t.socLabelLeft : t.centerLabel;

  econScoreText.textContent = `${econScore > 0 ? '+' : ''}${econScore}% (${econSide})`;
  socScoreText.textContent = `${socScore > 0 ? '+' : ''}${socScore}% (${socSide})`;

  const econPercentPosition = ((econScore + 100) / 200) * 100;
  const socPercentPosition = ((socScore + 100) / 200) * 100;

  // Bipolarny pasek gospodarczy:
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

  // Bipolarny pasek społeczny:
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

  // 5. Rozbicie sektorowe (12 sektorów)
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
    let biasClass = "";

    if (scoreVal < 0) {
      biasClass = "left-fill";
      fillLeft = `${50 - Math.abs(scoreVal) / 2}%`;
      fillWidth = `${Math.abs(scoreVal) / 2}%`;
    } else if (scoreVal > 0) {
      biasClass = "right-fill";
      fillLeft = "50%";
      fillWidth = `${scoreVal / 2}%`;
    }

    const item = document.createElement("div");
    item.className = "sector-item-box";
    item.innerHTML = `
      <div class="sector-labels-row">
        <span class="sector-title">${catName}</span>
        <span class="sector-score-tag">${scoreVal > 0 ? '+' : ''}${scoreVal}%</span>
      </div>
      <div class="sector-bar-track">
        <div class="sector-bar-fill ${isEcon ? 'sector-bar-econ' : 'sector-bar-soc'} ${biasClass}" style="left: ${fillLeft}; width: ${fillWidth};"></div>
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

  const duration = 50;
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
  // 1. Lewa Góra: Socjalliberalizm (Zieleń)
  ctx.fillStyle = isDark ? "rgba(16, 185, 129, 0.18)" : "rgba(16, 185, 129, 0.12)";
  ctx.fillRect(pad, pad, chartW / 2, chartH / 2);

  // 2. Prawa Góra: Libertarianizm (Żółć / Złoto)
  ctx.fillStyle = isDark ? "rgba(245, 158, 11, 0.18)" : "rgba(245, 158, 11, 0.12)";
  ctx.fillRect(cx, pad, chartW / 2, chartH / 2);

  // 3. Lewy Dół: Lewica Tradycyjna (Czerwień)
  ctx.fillStyle = isDark ? "rgba(239, 68, 68, 0.18)" : "rgba(239, 68, 68, 0.12)";
  ctx.fillRect(pad, cy, chartW / 2, chartH / 2);

  // 4. Prawy Dół: Prawica Konserwatywna (Błękit)
  ctx.fillStyle = isDark ? "rgba(59, 130, 246, 0.18)" : "rgba(59, 130, 246, 0.12)";
  ctx.fillRect(cx, cy, chartW / 2, chartH / 2);

  // Siatka 10x10
  ctx.strokeStyle = isDark ? "rgba(255, 255, 255, 0.05)" : "rgba(0, 0, 0, 0.06)";
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

  // Ramka
  ctx.strokeStyle = isDark ? "#263556" : "#cbd5e1";
  ctx.lineWidth = 2;
  ctx.strokeRect(pad, pad, chartW, chartH);

  // Główne Osie (Krzyż w centrum)
  ctx.strokeStyle = isDark ? "#64748b" : "#94a3b8";
  ctx.lineWidth = 2;

  // Oś pionowa
  ctx.beginPath();
  ctx.moveTo(cx, pad);
  ctx.lineTo(cx, pad + chartH);
  ctx.stroke();

  // Oś pozioma
  ctx.beginPath();
  ctx.moveTo(pad, cy);
  ctx.lineTo(pad + chartW, cy);
  ctx.stroke();

  // Etykiety ćwiartek
  ctx.fillStyle = isDark ? "rgba(255, 255, 255, 0.40)" : "rgba(0, 0, 0, 0.35)";
  ctx.font = "bold 11px 'Plus Jakarta Sans', sans-serif";
  ctx.textAlign = "center";
  ctx.fillText(t.canvasQ1, pad + chartW * 0.25, pad + 24);
  ctx.fillText(t.canvasQ2, pad + chartW * 0.75, pad + 24);
  ctx.fillText(t.canvasQ3, pad + chartW * 0.25, pad + chartH - 12);
  ctx.fillText(t.canvasQ4, pad + chartW * 0.75, pad + chartH - 12);

  // Etykiety osi ze strzałkami
  ctx.fillStyle = isDark ? "#94a3b8" : "#475569";
  ctx.font = "bold 12px 'Plus Jakarta Sans', sans-serif";

  // Góra
  ctx.textAlign = "center";
  ctx.fillText(t.canvasTop, cx, pad - 12);

  // Dół
  ctx.fillText(t.canvasBottom, cx, pad + chartH + 24);

  // Lewo
  ctx.save();
  ctx.translate(pad - 14, cy);
  ctx.rotate(-Math.PI / 2);
  ctx.textAlign = "center";
  ctx.fillText(t.canvasLeft, 0, 0);
  ctx.restore();

  // Prawo
  ctx.save();
  ctx.translate(pad + chartW + 16, cy);
  ctx.rotate(Math.PI / 2);
  ctx.textAlign = "center";
  ctx.fillText(t.canvasRight, 0, 0);
  ctx.restore();

  // Pozycja punktu użytkownika
  const userX = cx + (econ / 100) * (chartW / 2);
  const userY = cy - (soc / 100) * (chartH / 2);

  // Cień i efekt glow dla punktu
  ctx.shadowColor = "#ef4444";
  ctx.shadowBlur = 14;

  // Pulsacyjny okrąg
  ctx.beginPath();
  ctx.arc(userX, userY, 15, 0, Math.PI * 2);
  ctx.fillStyle = "rgba(239, 68, 68, 0.25)";
  ctx.fill();

  // Zewnętrzny pierścień
  ctx.beginPath();
  ctx.arc(userX, userY, 9, 0, Math.PI * 2);
  ctx.fillStyle = "#ffffff";
  ctx.fill();

  // Rdzeń punktu
  ctx.beginPath();
  ctx.arc(userX, userY, 6, 0, Math.PI * 2);
  ctx.fillStyle = "#ef4444";
  ctx.fill();

  ctx.shadowBlur = 0;

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
    const optText = opt ? (opt.label[currentLang] || opt.label.pl) : t.noAnswerLabel;

    const item = document.createElement("div");
    item.className = "review-item";
    item.innerHTML = `
      <div class="review-item-q">${idx + 1}. [${catName}] ${qText}</div>
      <div class="review-item-a">${t.yourAnswerLabel} <strong>${optText}</strong></div>
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

  // Renderowanie wysokiej rozdzielczości karty wynikowej do mediów społecznościowych (1080 x 1280)
  const exportCanvas = document.createElement("canvas");
  exportCanvas.width = 1080;
  exportCanvas.height = 1280;
  const ctx = exportCanvas.getContext("2d");

  // 1. Tło
  ctx.fillStyle = "#0c1322";
  ctx.fillRect(0, 0, 1080, 1280);

  // Akcent w tle
  const grad = ctx.createRadialGradient(540, 200, 50, 540, 200, 600);
  grad.addColorStop(0, "rgba(59, 130, 246, 0.12)");
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

  // Tło kompasu
  ctx.fillStyle = "#131b2e";
  ctx.fillRect(cx, cy, cw, ch);

  // Ćwiartki
  ctx.fillStyle = "rgba(16, 185, 129, 0.22)"; // Q1 Lewo-Góra (Socjal-liberalizm)
  ctx.fillRect(cx, cy, cw / 2, ch / 2);

  ctx.fillStyle = "rgba(245, 158, 11, 0.22)"; // Q2 Prawo-Góra (Libertarianizm)
  ctx.fillRect(midX, cy, cw / 2, ch / 2);

  ctx.fillStyle = "rgba(239, 68, 68, 0.22)"; // Q3 Lewo-Dół (Lewica tradycyjna)
  ctx.fillRect(cx, midY, cw / 2, ch / 2);

  ctx.fillStyle = "rgba(59, 130, 246, 0.22)"; // Q4 Prawo-Dół (Konserwatywny liberalizm)
  ctx.fillRect(midX, midY, cw / 2, ch / 2);

  // Siatka
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

  // Ramka i osie
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

  // Etykiety osi
  ctx.fillStyle = "#94a3b8";
  ctx.font = "bold 13px 'Plus Jakarta Sans', sans-serif";
  ctx.fillText(t.canvasTop, midX, cy - 8);
  ctx.fillText(t.canvasBottom, midX, cy + ch + 20);

  // Lewa i prawa etykieta
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

  // Punkt użytkownika
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

  // 5. Paski wyników osi
  ctx.textAlign = "center";
  ctx.fillStyle = "#38bdf8";
  ctx.font = "bold 20px 'Plus Jakarta Sans', sans-serif";
  const econSide = econScore > 0 ? t.econLabelRight : econScore < 0 ? t.econLabelLeft : t.centerLabel;
  const socSide = socScore > 0 ? t.socLabelRight : socScore < 0 ? t.socLabelLeft : t.centerLabel;
  ctx.fillText(`📈 ${t.axisEconTitle}: ${econScore > 0 ? '+' : ''}${econScore}% (${econSide})   •   🏛️ ${t.axisSocTitle}: ${socScore > 0 ? '+' : ''}${socScore}% (${socSide})`, 540, 770);

  // 6. Karty dopasowania Lidera i Partii
  const cardW = 460;
  const cardH = 180;
  const cardY = 820;

  // Karta Lidera (lewa)
  ctx.fillStyle = "#131b2e";
  ctx.strokeStyle = "#3b82f6";
  ctx.lineWidth = 1.5;
  ctx.beginPath();
  ctx.roundRect(60, cardY, cardW, cardH, 16);
  ctx.fill();
  ctx.stroke();

  ctx.textAlign = "left";
  ctx.fillStyle = "#38bdf8";
  ctx.font = "bold 15px 'Plus Jakarta Sans', sans-serif";
  ctx.fillText(`🌐 ${t.politicianCardTitle}`, 85, cardY + 36);

  ctx.fillStyle = "#ffffff";
  ctx.font = "bold 24px 'Plus Jakarta Sans', sans-serif";
  ctx.fillText(`${pol.flag} ${pol.name}`, 85, cardY + 76);

  const polCountry = pol.country[currentLang] || pol.country.pl;
  const polRole = pol.role[currentLang] || pol.role.pl;
  ctx.fillStyle = "#94a3b8";
  ctx.font = "500 15px 'Plus Jakarta Sans', sans-serif";
  ctx.fillText(`${polCountry} • ${polRole.substring(0, 38)}...`, 85, cardY + 106);

  ctx.fillStyle = "#10b981";
  ctx.font = "bold 17px 'Plus Jakarta Sans', sans-serif";
  ctx.fillText(`${t.politicianMatchLabel} ${pol.similarity}%`, 85, cardY + 145);

  // Karta Partii (prawa)
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

  // 7. Stopka i znak wodny
  ctx.textAlign = "center";
  ctx.fillStyle = "#64748b";
  ctx.font = "500 15px 'Plus Jakarta Sans', sans-serif";
  ctx.fillText("Globalny Kompas Poglądów 2026 • 100 Pytań • 32 Ideologie • 28 Liderów • 15 Rodzin Partyjnych", 540, 1070);
  ctx.fillText("Wykonaj test online i poznaj swoje miejsce na politycznej mapie świata!", 540, 1100);

  // Pobranie
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
