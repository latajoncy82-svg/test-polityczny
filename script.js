/**
 * POLSKI TEST POLITYCZNY - GŁÓWNA LOGIKA APLIKACJI
 */

// Stan testu
let currentQuestionIndex = 0;
let userAnswers = new Array(questions.length).fill(null);
let animationFrameId = null;
let currentEconScore = 0;
let currentSocScore = 0;

// Elementy DOM
const welcomeScreen = document.getElementById("welcomeScreen");
const questionScreen = document.getElementById("questionScreen");
const resultScreen = document.getElementById("resultScreen");

const startTestBtn = document.getElementById("startTestBtn");
const prevBtn = document.getElementById("prevBtn");
const currentQuestionNum = document.getElementById("currentQuestionNum");
const totalQuestionsNum = document.getElementById("totalQuestionsNum");
const questionCategory = document.getElementById("questionCategory");
const progressBar = document.getElementById("progressBar");
const questionText = document.getElementById("questionText");
const answersContainer = document.getElementById("answersContainer");

const ideologyTitle = document.getElementById("ideologyTitle");
const ideologySubtitle = document.getElementById("ideologySubtitle");
const ideologyDescription = document.getElementById("ideologyDescription");
const partiesAffinity = document.getElementById("partiesAffinity");
const econScoreText = document.getElementById("econScoreText");
const socScoreText = document.getElementById("socScoreText");
const econFillBar = document.getElementById("econFillBar");
const socFillBar = document.getElementById("socFillBar");

const compassCanvas = document.getElementById("compassCanvas");
const downloadResultBtn = document.getElementById("downloadResultBtn");
const copyShareBtn = document.getElementById("copyShareBtn");
const toggleAnswersBtn = document.getElementById("toggleAnswersBtn");
const restartBtn = document.getElementById("restartBtn");
const answersReviewSection = document.getElementById("answersReviewSection");
const closeReviewBtn = document.getElementById("closeReviewBtn");
const reviewList = document.getElementById("reviewList");
const themeToggleBtn = document.getElementById("themeToggleBtn");
const themeIcon = document.getElementById("themeIcon");

// Inicjalizacja
document.addEventListener("DOMContentLoaded", () => {
  totalQuestionsNum.textContent = questions.length;
  setupTheme();
  setupEventListeners();
});

// Obsługa motywu (Dark / Light)
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

  // Jeśli jesteśmy na ekranie wyników, przerysuj canvas z nową kolorystyką
  if (resultScreen.classList.contains("active")) {
    drawCompass(currentEconScore, currentSocScore);
  }
}

function updateThemeIcon(theme) {
  themeIcon.textContent = theme === "theme-dark" ? "☀️" : "🌙";
}

// Zdarzenia
function setupEventListeners() {
  themeToggleBtn.addEventListener("click", toggleTheme);
  startTestBtn.addEventListener("click", startQuiz);
  prevBtn.addEventListener("click", goToPreviousQuestion);
  restartBtn.addEventListener("click", resetQuiz);
  downloadResultBtn.addEventListener("click", downloadResultImage);
  copyShareBtn.addEventListener("click", copyResultSummary);
  toggleAnswersBtn.addEventListener("click", toggleReview);
  closeReviewBtn.addEventListener("click", () => answersReviewSection.classList.add("hidden"));
}

// Przejście do testu
function startQuiz() {
  currentQuestionIndex = 0;
  userAnswers.fill(null);
  switchScreen(questionScreen);
  renderQuestion();
}

function switchScreen(activeScreen) {
  [welcomeScreen, questionScreen, resultScreen].forEach(s => s.classList.remove("active"));
  activeScreen.classList.add("active");
  window.scrollTo({ top: 0, behavior: "smooth" });
}

// Wyświetlanie pytania
function renderQuestion() {
  const q = questions[currentQuestionIndex];
  currentQuestionNum.textContent = currentQuestionIndex + 1;
  questionCategory.textContent = q.category;
  questionText.textContent = q.text;

  // Pasek postępu
  const progressPct = ((currentQuestionIndex) / questions.length) * 100;
  progressBar.style.width = `${progressPct}%`;

  // Przycisk "Wstecz"
  prevBtn.disabled = currentQuestionIndex === 0;

  // Generowanie przycisków odpowiedzi
  answersContainer.innerHTML = "";
  answerOptions.forEach(opt => {
    const btn = document.createElement("button");
    btn.className = `answer-btn ${opt.className}`;
    btn.innerHTML = `<span>${opt.label}</span>`;
    
    // Zaznaczenie aktualnej odpowiedzi (jeśli cofnięto)
    if (userAnswers[currentQuestionIndex] === opt.value) {
      btn.style.borderColor = "var(--accent-primary)";
      btn.style.boxShadow = "0 0 0 2px var(--accent-glow)";
    }

    btn.addEventListener("click", () => handleAnswerSelect(opt.value));
    answersContainer.appendChild(btn);
  });
}

function handleAnswerSelect(val) {
  userAnswers[currentQuestionIndex] = val;

  if (currentQuestionIndex < questions.length - 1) {
    currentQuestionIndex++;
    renderQuestion();
  } else {
    // Koniec testu - oblicz wyniki
    progressBar.style.width = "100%";
    setTimeout(showResults, 250);
  }
}

function goToPreviousQuestion() {
  if (currentQuestionIndex > 0) {
    currentQuestionIndex--;
    renderQuestion();
  }
}

// Obliczanie wyników
function calculateScores() {
  let econRaw = 0;
  let econMax = 0;
  let socRaw = 0;
  let socMax = 0;

  questions.forEach((q, idx) => {
    const ans = userAnswers[idx] ?? 0;
    if (q.axis === "econ") {
      econRaw += ans * q.multiplier;
      econMax += 2; // maks. punktów za pytanie to 2
    } else if (q.axis === "soc") {
      socRaw += ans * q.multiplier;
      socMax += 2;
    }
  });

  // Skalowanie do zakresu [-100, 100]
  const econScore = Math.round((econRaw / econMax) * 100);
  const socScore = Math.round((socRaw / socMax) * 100);

  return { econScore, socScore };
}

// Baza ideologii i dopasowań
function getIdeologyProfile(econ, soc) {
  // econ: -100 (Lewica) do +100 (Prawica)
  // soc: -100 (Konserwatyzm) do +100 (Progresywizm)

  let name = "";
  let subtitle = "";
  let desc = "";
  let parties = "";

  const isCenterEcon = Math.abs(econ) <= 25;
  const isCenterSoc = Math.abs(soc) <= 25;

  if (isCenterEcon && isCenterSoc) {
    name = "Umiarkowane Centrum (Pragmatyzm)";
    subtitle = "Zrównoważone podejście bez skrajności ideologicznych";
    desc = "Cenisz stabilność, kompromis oraz umiarkowane reformy. Uważasz, że gospodarka wymaga zarówno wolności rynkowej, jak i rozsądnej osłony socjalnej, a w sprawach światopoglądowych preferujesz spokój i ewolucyjne zmiany zamiast rewolucji.";
    parties = "Trzecia Droga (Polska 2050 / PSL), centrowe skrzydło Koalicji Obywatelskiej.";
  } else if (econ < -25 && soc > 25) {
    name = "Socjalliberalizm / Demokratyczny Socjalizm";
    subtitle = "Sprawiedliwość społeczna i wolność obyczajowa";
    desc = "Łączysz postulat silnego państwa opiekuńczego, wysokiej jakości usług publicznych (szpitale, szkoły) i progresywnych podatków z pełną wolnością jednostki, prawami mniejszości, świeckością państwa oraz integracją europejską.";
    parties = "Nowa Lewica, Partia Razem, lewicowo-liberalne skrzydło Koalicji Obywatelskiej (np. Zieloni, Inicjatywa Polska).";
  } else if (econ < -25 && soc < -25) {
    name = "Narodowy Solidaryzm / Konserwatywna Lewica";
    subtitle = "Tradycja, tożsamość i silna rola państwa w gospodarce";
    desc = "Uważasz, że naród i tradycyjne wartości są fundamentem społeczeństwa, a państwo powinno aktywnie troszczyć się o najuboższych i rodziny poprzez programy socjalne oraz kontrolę strategicznych gałęzi przemysłu.";
    parties = "Prawo i Sprawiedliwość (skrzydło socjalno-solidarne), historycznie Samoobrona.";
  } else if (econ > 25 && soc < -25) {
    name = "Konserwatywny Liberalizm";
    subtitle = "Wolny rynek, niskie podatki i przywiązanie do tradycji";
    desc = "Wierzysz w siłę przedsiębiorczości, niskie podatki i ograniczoną biurokrację, ale w sferze moralnej i kulturowej opowiadasz się za tradycją, porządkiem, patriotyzmem oraz sceptycyzmem wobec zmian obyczajowych.";
    parties = "Konfederacja (zwłaszcza skrzydło Nowa Nadzieja / Ruch Narodowy), konserwatywne skrzydło dawnej Platformy Obywatelskiej / Koalicji.";
  } else if (econ > 25 && soc > 25) {
    name = "Klasyczny Liberalizm / Libertarianizm";
    subtitle = "Maksimum wolności gospodarczej i osobistej";
    desc = "Uznajesz wolność jednostki za najwyższą wartość. Sprzeciwiasz się zarówno państwowej ingerencji w portfele obywateli, jak i w ich prywatne wybory życiowe. Popierasz wolny handel, deregulację oraz tolerancję światopoglądową.";
    parties = "Wolnościowcy, liberalne skrzydło Koalicji Obywatelskiej / Nowoczesna, partie libertariańskie (Możemy!).";
  } else if (econ > 25 && isCenterSoc) {
    name = "Liberalizm Gospodarczy";
    subtitle = "Gospodarka wolnorynkowa, pragmatyzm obyczajowy";
    desc = "Twoim głównym priorytetem jest rozwój gospodarczy, uproszczenie prawa i niskie podatki. W sprawach społecznych i światopoglądowych przyjmujesz umiarkowaną, pragmatyczną postawę.";
    parties = "Koalicja Obywatelska (Nowoczesna), część Trzeciej Drogi, wolnorynkowe skrzydło Konfederacji.";
  } else if (econ < -25 && isCenterSoc) {
    name = "Socjaldemokracja Gospodarcza";
    subtitle = "Solidaryzm społeczny i wsparcie pracowników";
    desc = "Skupiasz się przede wszystkim na prawach pracowniczych, walce z nierównościami i silnych usługach publicznych, zachowując umiarkowane stanowisko w kwestiach światopoglądowych.";
    parties = "Lewica, socjalne skrzydła partii parlamentarnych.";
  } else if (isCenterEcon && soc > 25) {
    name = "Progresywizm Społeczny";
    subtitle = "Otwartość, prawa człowieka i modernizacja kulturowa";
    desc = "Najważniejsza jest dla Ciebie wolność światopoglądowa, prawa człowieka, ekologia oraz integracja europejska. W gospodarce dopuszczasz zrównoważony miks rynkowo-państwowy.";
    parties = "Koalicja Obywatelska (skrzydło liberalne), Zieloni, Polska 2050, Nowa Lewica.";
  } else {
    // isCenterEcon && soc < -25
    name = "Chrześcijańska Demokracja / Konserwatyzm Społeczny";
    subtitle = "Wartości wspólnotowe, tradycja i umiarkowana gospodarka";
    desc = "Fundamentem jest dla Ciebie rodzina, religia i stabilność społeczna. W gospodarce preferujesz społeczną gospodarkę rynkową z poszanowaniem własności i lokalnych wspólnot.";
    parties = "Polskie Stronnictwo Ludowe (PSL), umiarkowane skrzydło PiS, konserwatyści w KO.";
  }

  return { name, subtitle, desc, parties };
}

// Wyświetlenie wyników
function showResults() {
  const { econScore, socScore } = calculateScores();
  currentEconScore = econScore;
  currentSocScore = socScore;

  const profile = getIdeologyProfile(econScore, socScore);

  ideologyTitle.textContent = profile.name;
  ideologySubtitle.textContent = profile.subtitle;
  ideologyDescription.textContent = profile.desc;
  partiesAffinity.textContent = profile.parties;

  // Teksty wskaźników
  const econText = econScore > 0 ? `+${econScore}% (Wolny Rynek)` : econScore < 0 ? `${econScore}% (Lewica)` : `0% (Centrum)`;
  const socText = socScore > 0 ? `+${socScore}% (Progresywizm)` : socScore < 0 ? `${socScore}% (Konserwatyzm)` : `0% (Centrum)`;

  econScoreText.textContent = econText;
  socScoreText.textContent = socText;

  // Wypełnienie pasków (zakres 0% do 100%)
  // -100 -> 0%, 0 -> 50%, +100 -> 100%
  const econPercentPosition = ((econScore + 100) / 200) * 100;
  const socPercentPosition = ((socScore + 100) / 200) * 100;

  econFillBar.style.width = `${econPercentPosition}%`;
  socFillBar.style.width = `${socPercentPosition}%`;

  switchScreen(resultScreen);
  drawCompassAnimated(econScore, socScore);
  buildAnswersReview();
}

// Rysowanie kompasu na Canvas
function drawCompassAnimated(targetEcon, targetSoc) {
  let progress = 0;
  if (animationFrameId) cancelAnimationFrame(animationFrameId);

  const duration = 60; // klatki
  let frame = 0;

  function animate() {
    frame++;
    progress = Math.min(1, frame / duration);
    // Easing out cubic
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
  const pad = 44; // margines na etykiety osi
  const chartW = w - pad * 2;
  const chartH = h - pad * 2;
  const cx = pad + chartW / 2;
  const cy = pad + chartH / 2;

  const isDark = document.body.classList.contains("theme-dark");

  // Czyszczenie tła
  ctx.fillStyle = isDark ? "#131b2e" : "#ffffff";
  ctx.fillRect(0, 0, w, h);

  // 4 Ćwiartki kompasu
  // Góra = Progresywizm (+soc), Dół = Konserwatyzm (-soc)
  // Lewo = Lewica (-econ), Prawo = Prawica (+econ)

  // 1. Lewa Góra: Lewica Progresywna / Socjalliberalizm (Zieleń / Turkus)
  ctx.fillStyle = isDark ? "rgba(16, 185, 129, 0.18)" : "rgba(16, 185, 129, 0.12)";
  ctx.fillRect(pad, pad, chartW / 2, chartH / 2);

  // 2. Prawa Góra: Prawica Wolnościowa / Libertarianizm (Żółć / Złoto)
  ctx.fillStyle = isDark ? "rgba(245, 158, 11, 0.18)" : "rgba(245, 158, 11, 0.12)";
  ctx.fillRect(cx, pad, chartW / 2, chartH / 2);

  // 3. Lewy Dół: Lewica Tradycyjna / Solidaryzm (Czerwień)
  ctx.fillStyle = isDark ? "rgba(239, 68, 68, 0.18)" : "rgba(239, 68, 68, 0.12)";
  ctx.fillRect(pad, cy, chartW / 2, chartH / 2);

  // 4. Prawy Dół: Prawica Konserwatywna (Błękit)
  ctx.fillStyle = isDark ? "rgba(59, 130, 246, 0.18)" : "rgba(59, 130, 246, 0.12)";
  ctx.fillRect(cx, cy, chartW / 2, chartH / 2);

  // Rysowanie siatki (subtelne linie 10x10)
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

  // Obramowanie wykresu
  ctx.strokeStyle = isDark ? "#263556" : "#cbd5e1";
  ctx.lineWidth = 2;
  ctx.strokeRect(pad, pad, chartW, chartH);

  // Główne Osie (Krzyż w centrum)
  ctx.strokeStyle = isDark ? "#64748b" : "#94a3b8";
  ctx.lineWidth = 2;

  // Oś pionowa (Światopogląd)
  ctx.beginPath();
  ctx.moveTo(cx, pad);
  ctx.lineTo(cx, pad + chartH);
  ctx.stroke();

  // Oś pozioma (Gospodarka)
  ctx.beginPath();
  ctx.moveTo(pad, cy);
  ctx.lineTo(pad + chartW, cy);
  ctx.stroke();

  // Etykiety ćwiartek (wewnątrz pól)
  ctx.fillStyle = isDark ? "rgba(255, 255, 255, 0.35)" : "rgba(0, 0, 0, 0.3)";
  ctx.font = "bold 11px 'Plus Jakarta Sans', sans-serif";
  ctx.textAlign = "center";
  ctx.fillText("SOCJALLIBERALIZM", pad + chartW * 0.25, pad + 24);
  ctx.fillText("LIBERTARIANIZM", pad + chartW * 0.75, pad + 24);
  ctx.fillText("LEWICA TRADYCYJNA", pad + chartW * 0.25, pad + chartH - 12);
  ctx.fillText("KONSERWATYWNY LIBERALIZM", pad + chartW * 0.75, pad + chartH - 12);

  // Etykiety osi ze strzałkami na obrzeżach
  ctx.fillStyle = isDark ? "#94a3b8" : "#475569";
  ctx.font = "bold 12px 'Plus Jakarta Sans', sans-serif";

  // Góra: PROGRESYWIZM
  ctx.textAlign = "center";
  ctx.fillText("▲ PROGRESYWIZM SPOŁECZNY", cx, pad - 12);

  // Dół: KONSERWATYZM
  ctx.fillText("▼ KONSERWATYZM SPOŁECZNY", cx, pad + chartH + 24);

  // Lewo: LEWICA GOSPODARCZA
  ctx.save();
  ctx.translate(pad - 14, cy);
  ctx.rotate(-Math.PI / 2);
  ctx.textAlign = "center";
  ctx.fillText("◀ LEWICA GOSPODARCZA", 0, 0);
  ctx.restore();

  // Prawo: PRAWICA GOSPODARCZA
  ctx.save();
  ctx.translate(pad + chartW + 16, cy);
  ctx.rotate(Math.PI / 2);
  ctx.textAlign = "center";
  ctx.fillText("PRAWICA WOLNORYNKOWA ▶", 0, 0);
  ctx.restore();

  // Obliczenie pozycji punktu użytkownika
  // econ: -100 to +100 -> cx + (econ/100) * (chartW / 2)
  // soc: -100 to +100 -> cy - (soc/100) * (chartH / 2)  (bo góra to plus!)
  const userX = cx + (econ / 100) * (chartW / 2);
  const userY = cy - (soc / 100) * (chartH / 2);

  // Cień i efekt glow dla punktu
  ctx.shadowColor = "#ef4444";
  ctx.shadowBlur = 12;

  // Pulsacyjny okrąg wokół punktu
  ctx.beginPath();
  ctx.arc(userX, userY, 14, 0, Math.PI * 2);
  ctx.fillStyle = "rgba(239, 68, 68, 0.25)";
  ctx.fill();

  // Zewnętrzna obwódka
  ctx.beginPath();
  ctx.arc(userX, userY, 9, 0, Math.PI * 2);
  ctx.fillStyle = "#ffffff";
  ctx.fill();

  // Środek punktu (czerwony rdzeń)
  ctx.beginPath();
  ctx.arc(userX, userY, 6, 0, Math.PI * 2);
  ctx.fillStyle = "#ef4444";
  ctx.fill();

  // Reset shadow
  ctx.shadowBlur = 0;

  // Etykieta przy punkcie
  ctx.fillStyle = isDark ? "#ffffff" : "#0f172a";
  ctx.font = "bold 11px 'Plus Jakarta Sans', sans-serif";
  ctx.textAlign = userX > cx ? "right" : "left";
  const labelOffsetX = userX > cx ? -18 : 18;
  ctx.fillText(`TY (${Math.round(econ)}, ${Math.round(soc)})`, userX + labelOffsetX, userY + 4);
}

// Przygotowanie przeglądu odpowiedzi
function buildAnswersReview() {
  reviewList.innerHTML = "";
  questions.forEach((q, idx) => {
    const val = userAnswers[idx];
    const opt = answerOptions.find(o => o.value === val);
    const item = document.createElement("div");
    item.className = "review-item";
    item.innerHTML = `
      <div class="review-item-q">${idx + 1}. [${q.category}] ${q.text}</div>
      <div class="review-item-a">Twoja odpowiedź: ${opt ? opt.label : "Brak odpowiedzi"}</div>
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

// Pobieranie wykresu jako obraz PNG
function downloadResultImage() {
  const link = document.createElement("a");
  link.download = `kompas_polityczny_${Date.now()}.png`;
  link.href = compassCanvas.toDataURL("image/png");
  link.click();
}

// Kopiowanie podsumowania do schowka
function copyResultSummary() {
  const profile = getIdeologyProfile(currentEconScore, currentSocScore);
  const textToCopy = `Mój wynik w Polskim Teście Politycznym:\n` +
    `Profil: ${profile.name} (${profile.subtitle})\n` +
    `• Oś Gospodarcza: ${currentEconScore > 0 ? '+' : ''}${currentEconScore}% (${currentEconScore > 0 ? 'Wolny Rynek' : currentEconScore < 0 ? 'Lewica' : 'Centrum'})\n` +
    `• Oś Światopoglądowa: ${currentSocScore > 0 ? '+' : ''}${currentSocScore}% (${currentSocScore > 0 ? 'Progresywizm' : currentSocScore < 0 ? 'Konserwatyzm' : 'Centrum'})\n` +
    `Sprawdź swoje poglądy na Polskim Kompasie Politycznym!`;

  navigator.clipboard.writeText(textToCopy).then(() => {
    const origText = copyShareBtn.textContent;
    copyShareBtn.textContent = "✅ Skopiowano do schowka!";
    setTimeout(() => {
      copyShareBtn.textContent = origText;
    }, 2500);
  }).catch(() => {
    alert("Nie udało się skopiować automatycznie. Twój wynik:\n" + textToCopy);
  });
}

// Restart testu
function resetQuiz() {
  currentQuestionIndex = 0;
  userAnswers.fill(null);
  answersReviewSection.classList.add("hidden");
  switchScreen(welcomeScreen);
}
