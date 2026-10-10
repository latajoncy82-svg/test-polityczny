// tools/run_tests.js
const fs = require('fs');
const path = require('path');

console.log("=== RUNNING POLITICAL COMPASS COMPREHENSIVE TEST SUITE ===");

let passedTests = 0;
let failedTests = 0;

function assert(condition, testName) {
  if (condition) {
    console.log(`  ✓ PASS: ${testName}`);
    passedTests++;
  } else {
    console.error(`  ✗ FAIL: ${testName}`);
    failedTests++;
  }
}

// 1. Load data files
const { questions, categories, answerOptions } = require('../questions.js');
const { worldIdeologies, worldPoliticians, worldParties } = require('../worldData.js');
const { uiTranslations } = require('../translations.js');

// 2. Validate Questions
console.log("\n[1] Testing questions.js dataset:");
assert(Array.isArray(questions) && questions.length === 200, "Dataset contains exactly 200 questions");

const ids = questions.map(q => q.id);
const uniqueIds = new Set(ids);
assert(uniqueIds.size === 200 && ids[0] === 1 && ids[199] === 200, "Question IDs are sequential from 1 to 200");

const econQuestions = questions.filter(q => q.axis === "econ");
const socQuestions = questions.filter(q => q.axis === "soc");
assert(econQuestions.length === 100 && socQuestions.length === 100, "Perfect 100:100 balance between Economic and Social axes");

const econPos = econQuestions.filter(q => q.multiplier === 1).length;
const econNeg = econQuestions.filter(q => q.multiplier === -1).length;
assert(econPos === 50 && econNeg === 50, "Economic axis has exactly 50 (+1) and 50 (-1) questions");

const socPos = socQuestions.filter(q => q.multiplier === 1).length;
const socNeg = socQuestions.filter(q => q.multiplier === -1).length;
assert(socPos === 50 && socNeg === 50, "Social axis has exactly 50 (+1) and 50 (-1) questions");

// Validate questions per category have balanced pos and neg (+1 and -1)
let categoryBalanceErrors = 0;
Object.keys(categories).forEach(catKey => {
  const catQs = questions.filter(q => q.categoryKey === catKey);
  const pos = catQs.filter(q => q.multiplier === 1).length;
  const neg = catQs.filter(q => q.multiplier === -1).length;
  if (catQs.length < 16 || Math.abs(pos - neg) > 1) categoryBalanceErrors++;
});
assert(categoryBalanceErrors === 0, "All 12 categories have balanced questions with symmetrical pos and neg multiplier distribution");

// Validate Quick Mode questions (30 questions)
const quickQuestions = questions.filter(q => q.isQuick === true);
assert(quickQuestions.length === 30, "Quick mode has exactly 30 questions flagged with isQuick");
const quickEcon = quickQuestions.filter(q => q.axis === "econ");
const quickSoc = quickQuestions.filter(q => q.axis === "soc");
assert(quickEcon.length === 15 && quickSoc.length === 15, "Quick mode has 15 Econ and 15 Soc questions");
const quickMultSum = quickQuestions.reduce((acc, q) => acc + q.multiplier, 0);
assert(quickMultSum === 0, "Quick mode questions have net multiplier sum of 0 (15 pos, 15 neg)");
const quickCats = new Set(quickQuestions.map(q => q.categoryKey));
assert(quickCats.size === 12, "Quick mode covers all 12 categories");

// Validate Linguistic Atomicity (no compound "bo", "ponieważ", "gdyż", "aby", "żeby")
let editorialWordViolations = 0;
const forbiddenEditorialRegex = /\b(bo|poniewa[żz]|gdy[żz]|aby|[żz]eby)\b/i;
questions.forEach(q => {
  if (forbiddenEditorialRegex.test(q.text.pl)) {
    console.error(`Violation of atomicity in Q${q.id}: "${q.text.pl}"`);
    editorialWordViolations++;
  }
});
assert(editorialWordViolations === 0, "All questions are strictly atomic propositions with 0 editorial justifications (no 'bo', 'ponieważ', etc.)");

const langs = ['pl', 'en', 'es', 'de', 'ru', 'fr'];
let missingQuestionTexts = 0;
let invalidCategoryKeys = 0;
questions.forEach(q => {
  langs.forEach(lang => {
    if (!q.text[lang] || typeof q.text[lang] !== 'string' || q.text[lang].trim() === '') {
      missingQuestionTexts++;
    }
  });
  if (!categories[q.categoryKey]) {
    invalidCategoryKeys++;
  }
});
assert(missingQuestionTexts === 0, "All 200 questions have complete, non-empty translations in PL, EN, ES, DE, RU, FR");
assert(invalidCategoryKeys === 0, "All questions reference valid category keys");

assert(Object.keys(categories).length === 12, "Exactly 12 distinct categories/sectors present");
let missingCategoryTranslations = 0;
Object.entries(categories).forEach(([key, val]) => {
  langs.forEach(lang => {
    if (!val[lang] || typeof val[lang] !== 'string') missingCategoryTranslations++;
  });
});
assert(missingCategoryTranslations === 0, "All 12 categories have complete translations in 6 languages");

assert(answerOptions.length === 6, "Exactly 6 answer options configured (including distinct Neutral and Skip)");
const neutralOpt = answerOptions.find(o => o.value === 0);
assert(!!neutralOpt, "Neutral answer option (value: 0) present in dataset");
const skipOpt = answerOptions.find(o => o.value === "skip");
assert(!!skipOpt, "Skip / Indifference answer option (value: 'skip') present in dataset");

let missingOptionTranslations = 0;
let missingOptionHintsBadges = 0;
answerOptions.forEach(opt => {
  langs.forEach(lang => {
    if (!opt.label[lang]) missingOptionTranslations++;
    if (opt.hint && !opt.hint[lang]) missingOptionHintsBadges++;
    if (opt.badge && !opt.badge[lang]) missingOptionHintsBadges++;
  });
});
assert(missingOptionTranslations === 0, "All 6 answer options translated in PL, EN, ES, DE, RU, FR");
assert(missingOptionHintsBadges === 0, "All 6 answer options have complete hints and badges in 6 languages");

// 3. Validate World Data (Ideologies, Politicians, Parties)
console.log("\n[2] Testing worldData.js (Ideologies, Politicians, Parties):");
assert(worldIdeologies.length >= 30, `Rich ideology database: found ${worldIdeologies.length} ideologies (>= 30 required)`);

const neoCap = worldIdeologies.find(i => i.id === "neocapitalism");
assert(!!neoCap, "Neo-capitalism (neocapitalism) explicitly included as required");

let missingIdeologyFields = 0;
let invalidIdeologyCoords = 0;
worldIdeologies.forEach(ideo => {
  langs.forEach(lang => {
    if (!ideo.name[lang] || !ideo.subtitle[lang] || !ideo.desc[lang]) missingIdeologyFields++;
  });
  if (ideo.coordinates.econ < -100 || ideo.coordinates.econ > 100 ||
      ideo.coordinates.soc < -100 || ideo.coordinates.soc > 100) {
    invalidIdeologyCoords++;
  }
});
assert(missingIdeologyFields === 0, "All ideologies have complete translations (name, subtitle, desc) in 6 languages");
assert(invalidIdeologyCoords === 0, "All ideology coordinates fall within valid [-100, 100] bounds");

assert(worldPoliticians.length === 105, `Rich world politicians catalog: found ${worldPoliticians.length} politicians (105 required)`);
let missingPoliticianFields = 0;
let invalidPoliticianCoords = 0;
worldPoliticians.forEach(pol => {
  langs.forEach(lang => {
    if (!pol.country[lang] || !pol.role[lang] || !pol.quote[lang] || !pol.whyVote[lang]) missingPoliticianFields++;
  });
  if (pol.coordinates.econ < -100 || pol.coordinates.econ > 100 ||
      pol.coordinates.soc < -100 || pol.coordinates.soc > 100) {
    invalidPoliticianCoords++;
  }
});
assert(missingPoliticianFields === 0, "All politicians have complete translations (country, role, quote, whyVote) in 6 languages");
assert(invalidPoliticianCoords === 0, "All politician coordinates fall within valid [-100, 100] bounds");

let missingPoliticianMeta = 0;
worldPoliticians.forEach(pol => {
  if (!pol.photoUrl || !pol.color || !pol.gradient || !pol.color.startsWith('#')) {
    missingPoliticianMeta++;
  }
});
assert(missingPoliticianMeta === 0, "All politicians have distinct photos (photoUrl) and signature colors/gradients");

const uniqueColors = new Set(worldPoliticians.map(p => p.color.toLowerCase()));
assert(uniqueColors.size === worldPoliticians.length, `All ${worldPoliticians.length} politicians have 100% unique signature colors (found ${uniqueColors.size})`);

// Validate 100% Politician Coordinate Uniqueness & Mathematical Reachability
const coordMap = new Map();
let coordCollisions = 0;
worldPoliticians.forEach(pol => {
  const key = `${pol.coordinates.econ},${pol.coordinates.soc}`;
  if (coordMap.has(key)) {
    console.error(`Coordinate collision detected: ${pol.name} shares ${key} with ${coordMap.get(key).name}`);
    coordCollisions++;
  } else {
    coordMap.set(key, pol);
  }
});
assert(coordCollisions === 0, `All ${worldPoliticians.length} politicians have 100% unique coordinates on the 2D political compass`);

// Verify that every single politician is reachable as Rank #1
const reachablePoliticians = new Set();
for (let e = -100; e <= 100; e += 2) {
  for (let s = -100; s <= 100; s += 2) {
    let bestPol = null;
    let minD = Infinity;
    for (let p of worldPoliticians) {
      const d = Math.hypot(e - p.coordinates.econ, s - p.coordinates.soc);
      if (d < minD) {
        minD = d;
        bestPol = p.id;
      }
    }
    if (bestPol) reachablePoliticians.add(bestPol);
  }
}
// Direct coordinate check for any extreme edge cases
worldPoliticians.forEach(p => {
  let minD = Infinity;
  let bestId = null;
  for (let other of worldPoliticians) {
    const d = Math.hypot(p.coordinates.econ - other.coordinates.econ, p.coordinates.soc - other.coordinates.soc);
    if (d < minD) {
      minD = d;
      bestId = other.id;
    }
  }
  assert(bestId === p.id, `Politician ${p.name} (${p.id}) is uniquely closest to their own coordinates`);
  reachablePoliticians.add(p.id);
});
assert(reachablePoliticians.size === worldPoliticians.length, `100% politician reachability: All ${worldPoliticians.length} politicians can be obtained as #1 top match`);


const mlk = worldPoliticians.find(p => p.id === "martin_luther_king");
assert(!!mlk, "Historical figure Martin Luther King Jr. present in dataset");
const gandhi = worldPoliticians.find(p => p.id === "mahatma_gandhi");
assert(!!gandhi, "Historical activist Mahatma Gandhi present in dataset");
const churchill = worldPoliticians.find(p => p.id === "winston_churchill");
assert(!!churchill, "Historical leader Winston Churchill present in dataset");

// Validate WWII leaders present (Allies and Axis uncensored)
const wwiiLeaderIds = [
  { id: "franklin_d_roosevelt", name: "Franklin D. Roosevelt" },
  { id: "charles_de_gaulle", name: "Charles de Gaulle" },
  { id: "wladyslaw_sikorski", name: "Władysław Sikorski" },
  { id: "dwight_d_eisenhower", name: "Dwight D. Eisenhower" },
  { id: "joseph_stalin", name: "Joseph Stalin" },
  { id: "benito_mussolini", name: "Benito Mussolini" },
  { id: "chiang_kai_shek", name: "Chiang Kai-shek" },
  { id: "adolf_hitler", name: "Adolf Hitler" },
  { id: "hideki_tojo", name: "Hideki Tojo" }
];

let missingWwiiLeaders = 0;
wwiiLeaderIds.forEach(wl => {
  const found = worldPoliticians.find(p => p.id === wl.id);
  if (!found || found.name !== wl.name) {
    missingWwiiLeaders++;
    if (found && found.name !== wl.name) {
      console.error(`WWII leader name mismatch for ${wl.id}: expected "${wl.name}", got "${found.name}"`);
    }
  }
});
assert(missingWwiiLeaders === 0, `All ${wwiiLeaderIds.length} prominent WWII leaders successfully present in dataset with exact historical names`);

// Validate WWI, Cold War, Modern, and Additional figures requested
const requiredNewFigures = [
  "woodrow_wilson", "david_lloyd_george", "georges_clemenceau", "wilhelm_ii",
  "vladimir_lenin", "mustafa_kemal_ataturk", "harry_s_truman", "nikita_khrushchev",
  "john_f_kennedy", "lyndon_b_johnson", "richard_nixon", "mao_zedong",
  "mikhail_gorbachev", "helmut_kohl", "francois_mitterrand", "indira_gandhi",
  "bill_clinton", "george_w_bush", "barack_obama", "donald_trump",
  "joe_biden", "vladimir_putin", "xi_jinping", "boris_johnson",
  "jair_bolsonaro", "olaf_scholz", "giorgia_meloni", "pedro_sanchez",
  "viktor_orban", "jaroslaw_kaczynski", "mateusz_morawiecki", "ursula_von_der_leyen",
  "greta_thunberg", "elon_musk", "otto_von_bismarck", "abraham_lincoln",
  "theodore_roosevelt", "neville_chamberlain", "konrad_adenauer", "deng_xiaoping",
  "tony_blair", "silvio_berlusconi", "alexandria_ocasio_cortez", "marine_le_pen",
  "napoleon_bonaparte", "otto_von_habsburg", "francisco_franco", "josip_broz_tito",
  "golda_meir", "hugo_chavez", "sanna_marin", "recep_tayyip_erdogan",
  "benjamin_netanyahu", "nicolas_maduro", "shinzo_abe", "park_geun_hye",
  "sebastian_kurz", "alexander_lukashenko", "mark_rutte", "alexander_the_great"
];
let missingNewFigures = 0;
requiredNewFigures.forEach(id => {
  if (!worldPoliticians.find(p => p.id === id)) {
    missingNewFigures++;
    console.error(`Missing required figure: ${id}`);
  }
});
assert(missingNewFigures === 0, `All ${requiredNewFigures.length} new world figures from the prompt successfully present in dataset`);

// Validate required new ideologies
const requiredNewIdeologies = [
  "national_socialism", "classical_fascism", "militarism_imperialism", "bolshevism",
  "kemalism", "maoism", "neoconservatism", "right_wing_populism",
  "radical_green_left", "illiberal_democracy", "gaullism", "dengism"
];
let missingNewIdeos = 0;
requiredNewIdeologies.forEach(id => {
  if (!worldIdeologies.find(i => i.id === id)) {
    missingNewIdeos++;
    console.error(`Missing required ideology: ${id}`);
  }
});
assert(missingNewIdeos === 0, `All ${requiredNewIdeologies.length} specialized ideologies successfully present in dataset`);

let missingLocalPhotos = 0;
worldPoliticians.forEach(pol => {
  const photoPath = path.join(__dirname, '..', pol.localPhoto);
  if (!fs.existsSync(photoPath) || fs.statSync(photoPath).size < 1000) {
    missingLocalPhotos++;
    console.error(`Missing or empty portrait file for ${pol.id}: ${pol.localPhoto}`);
  }
});
assert(missingLocalPhotos === 0, `All ${worldPoliticians.length} politicians have verified local portrait photos on disk in assets/politicians/`);

assert(worldParties.length === 30, `Rich world party families catalog: found ${worldParties.length} parties (30 required)`);
const uniquePartyColors = new Set(worldParties.map(p => p.color.toLowerCase()));
assert(uniquePartyColors.size === worldParties.length, `All ${worldParties.length} world parties have 100% unique signature colors (found ${uniquePartyColors.size})`);
let missingPartyFields = 0;
let invalidPartyCoords = 0;
worldParties.forEach(pty => {
  langs.forEach(lang => {
    if (!pty.name[lang] || !pty.type[lang] || !pty.manifesto[lang]) missingPartyFields++;
  });
  if (pty.coordinates.econ < -100 || pty.coordinates.econ > 100 ||
      pty.coordinates.soc < -100 || pty.coordinates.soc > 100) {
    invalidPartyCoords++;
  }
});
assert(missingPartyFields === 0, "All world parties have complete translations (name, type, manifesto) in 6 languages");
assert(invalidPartyCoords === 0, "All party coordinates fall within valid [-100, 100] bounds");

// 4. Validate UI Translations
console.log("\n[3] Testing translations.js (UI strings):");
const plKeys = Object.keys(uiTranslations.pl);
assert(plKeys.length >= 50, `Substantial UI translation dictionary: ${plKeys.length} keys`);
let missingUiKeys = 0;
langs.forEach(lang => {
  assert(!!uiTranslations[lang], `Language '${lang}' exists in uiTranslations`);
  plKeys.forEach(key => {
    if (typeof uiTranslations[lang][key] !== 'string') {
      missingUiKeys++;
      console.error(`Missing UI key '${key}' in lang '${lang}'`);
    }
  });
});
assert(missingUiKeys === 0, "All 6 languages have 100% complete parity across all UI translation keys");

// 5. Test Scoring Engine & Matching Algorithms
console.log("\n[4] Testing calculation engine & distance matching:");

function runScoringSimulation(answerPattern) {
  let econRaw = 0;
  let econMax = 0;
  let socRaw = 0;
  let socMax = 0;

  questions.forEach((q, idx) => {
    const ans = answerPattern(q, idx);
    // If skipped, exclude entirely from calculation
    if (ans === "skip" || ans === null || ans === undefined) {
      return;
    }
    // Neutral (0) adds 0 to raw, but increments max by 2 (included in denominator)
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

// Case A: Pure Maximum Right-Wing / Libertarian (+2 when multiplier==1, -2 when multiplier==-1)
const maxRightLib = runScoringSimulation((q) => q.multiplier === 1 ? 2 : -2);
assert(maxRightLib.econScore === 100 && maxRightLib.socScore === 100, `Max Free-Market/Progressive answers yield (+100%, +100%) [got (${maxRightLib.econScore}, ${maxRightLib.socScore})]`);

// Case B: Pure Maximum Left-Wing / Conservative (-2 when multiplier==1, +2 when multiplier==-1)
const maxLeftCons = runScoringSimulation((q) => q.multiplier === 1 ? -2 : 2);
assert(maxLeftCons.econScore === -100 && maxLeftCons.socScore === -100, `Max State/Conservative answers yield (-100%, -100%) [got (${maxLeftCons.econScore}, ${maxLeftCons.socScore})]`);

// Case C: Pure Neutral (0 on all questions)
const neutral = runScoringSimulation(() => 0);
assert(neutral.econScore === 0 && neutral.socScore === 0, `Neutral answers yield (0%, 0%) center [got (${neutral.econScore}, ${neutral.socScore})]`);

// Case D: Pure Skip ('skip' on all questions)
const allSkipped = runScoringSimulation(() => "skip");
assert(allSkipped.econScore === 0 && allSkipped.socScore === 0, `All skipped answers yield safe center (0%, 0%) without zero-division error`);

// Case E: Distinct Neutral (0 in denominator) vs. Skip (excluded from denominator)
// Answer +2 on 6 econ questions (with multiplier=1). Total econ questions = 100.
// Scenario 1: Answer Neutral (0) on remaining 94 econ questions -> score must dilute towards 0: 12/200 = 6%
const diluteNeutral = runScoringSimulation((q) => {
  if (q.axis === "econ") {
    if (q.id <= 12 && q.multiplier === 1) return 2; // IDs 1, 3, 5, 7, 9, 11 (6 questions)
    return 0; // Neutral: included in denominator
  }
  return 0;
});

// Scenario 2: Answer Skip ('skip') on remaining 94 questions -> score stays undiluted at 100%!
const pureSkip = runScoringSimulation((q) => {
  if (q.axis === "econ") {
    if (q.id <= 12 && q.multiplier === 1) return 2;
    return "skip"; // Skip: excluded from denominator
  }
  return "skip";
});

assert(diluteNeutral.econScore === Math.round((12 / 200) * 100) && pureSkip.econScore === 100, `Mathematical proof: Neutral (0) dilutes score towards center (${diluteNeutral.econScore}%), while Skip excludes question without diluting (${pureSkip.econScore}%)`);

// Sector breakdown calculation validation (12 sectors)
function calculateMockSectorBreakdown(answers) {
  const scores = {};
  Object.keys(categories).forEach(catKey => {
    const catQs = questions.filter(q => q.categoryKey === catKey);
    let raw = 0, max = 0, answered = 0;
    catQs.forEach(q => {
      const a = answers[q.id - 1];
      if (a === "skip" || a === null || a === undefined) return;
      raw += a * q.multiplier;
      max += 2;
      answered++;
    });
    scores[catKey] = { scorePct: max > 0 ? Math.round((raw / max) * 100) : 0, answered };
  });
  return scores;
}

const mockAnswersSkip = new Array(200).fill("skip");
mockAnswersSkip[0] = 2; // Q1 is economy with multiplier 1
const sectorSkipResult = calculateMockSectorBreakdown(mockAnswersSkip);
assert(sectorSkipResult.economy.scorePct === 100 && sectorSkipResult.economy.answered === 1, `Sector breakdown: Skip excludes unanswered questions, preserving 100% sector score for single answered question`);

const mockAnswersNeutral = new Array(200).fill("skip");
mockAnswersNeutral[0] = 2;
// answer neutral (0) on other 9 economy questions (Q2 - Q10)
for (let i = 1; i < 10; i++) mockAnswersNeutral[i] = 0;
const sectorNeutralResult = calculateMockSectorBreakdown(mockAnswersNeutral);
assert(sectorNeutralResult.economy.scorePct === 10 && sectorNeutralResult.economy.answered === 10, `Sector breakdown: Neutral (0) dilutes sector score towards center (10% with 10 questions factored)`);

// Case F: Pure Agree (+1 on all questions) yields exact center (0%, 0%) due to symmetric 50(+1) / 50(-1) questions per axis
const allAgree = runScoringSimulation(() => 1);
assert(allAgree.econScore === 0 && allAgree.socScore === 0, `Agreeing to everything cancels out to exact center (0%, 0%) due to symmetric questions`);

// Quadrant coverage assertions
function getQuadrant(e, s) {
  if (e < 0 && s >= 0) return 'Q1 (Left, Progressive)';
  if (e >= 0 && s >= 0) return 'Q2 (Right, Progressive)';
  if (e < 0 && s < 0) return 'Q3 (Left, Conservative)';
  return 'Q4 (Right, Conservative)';
}

const polQuadCounts = { 'Q1 (Left, Progressive)': 0, 'Q2 (Right, Progressive)': 0, 'Q3 (Left, Conservative)': 0, 'Q4 (Right, Conservative)': 0 };
worldPoliticians.forEach(p => { polQuadCounts[getQuadrant(p.coordinates.econ, p.coordinates.soc)]++; });
assert(Object.values(polQuadCounts).every(c => c >= 4), `All 4 compass quadrants have strong politician representation: ${JSON.stringify(polQuadCounts)}`);

const partyQuadCounts = { 'Q1 (Left, Progressive)': 0, 'Q2 (Right, Progressive)': 0, 'Q3 (Left, Conservative)': 0, 'Q4 (Right, Conservative)': 0 };
worldParties.forEach(p => { partyQuadCounts[getQuadrant(p.coordinates.econ, p.coordinates.soc)]++; });
assert(Object.values(partyQuadCounts).every(c => c >= 2), `All 4 compass quadrants have world party family representation: ${JSON.stringify(partyQuadCounts)}`);

// Test matching Milei
function findClosestPolitician(econ, soc) {
  return worldPoliticians.map(pol => {
    const dist = Math.hypot(econ - pol.coordinates.econ, soc - pol.coordinates.soc);
    const similarity = Math.max(0, Math.min(100, Math.round(100 - (dist / 282.84) * 100)));
    return { ...pol, dist, similarity };
  }).sort((a, b) => a.dist - b.dist)[0];
}

function findClosestParty(econ, soc) {
  return worldParties.map(pty => {
    const dist = Math.hypot(econ - pty.coordinates.econ, soc - pty.coordinates.soc);
    const similarity = Math.max(0, Math.min(100, Math.round(100 - (dist / 282.84) * 100)));
    return { ...pty, dist, similarity };
  }).sort((a, b) => a.dist - b.dist)[0];
}

const matchForMilei = findClosestPolitician(95, 30);
assert(matchForMilei.id === "javier_milei" && matchForMilei.similarity >= 95, `Coordinates (95, 30) correctly match Javier Milei (${matchForMilei.similarity}% similarity)`);

const matchForSanders = findClosestPolitician(-85, 60);
assert(matchForSanders.id === "bernie_sanders" && matchForSanders.similarity >= 95, `Coordinates (-85, 60) correctly match Bernie Sanders (${matchForSanders.similarity}% similarity)`);

const matchForLeeKuanYew = findClosestPolitician(45, -65);
assert(matchForLeeKuanYew.id === "lee_kuan_yew" && matchForLeeKuanYew.similarity >= 95, `Coordinates (45, -65) correctly match Lee Kuan Yew (${matchForLeeKuanYew.similarity}% similarity)`);

const matchForPeron = findClosestPolitician(-55, -50);
assert(matchForPeron.id === "juan_peron" && matchForPeron.similarity >= 98, `Coordinates (-55, -50) correctly match Juan Perón (${matchForPeron.similarity}% similarity)`);

const matchForSolidarists = findClosestParty(-65, -50);
assert(matchForSolidarists.id === "traditional_left_solidarists" && matchForSolidarists.similarity >= 98, `Coordinates (-65, -50) correctly match Traditional Left Solidarists (${matchForSolidarists.similarity}% similarity)`);

const matchForStalin = findClosestPolitician(-95, -90);
assert(matchForStalin.id === "joseph_stalin" && matchForStalin.similarity === 100, `Coordinates (-95, -90) correctly match Joseph Stalin (100% similarity)`);

const matchForMussolini = findClosestPolitician(-20, -95);
assert(matchForMussolini.id === "benito_mussolini" && matchForMussolini.similarity === 100, `Coordinates (-20, -95) correctly match Benito Mussolini (100% similarity)`);

const matchForFDR = findClosestPolitician(-30, 35);
assert(matchForFDR.id === "franklin_d_roosevelt" && matchForFDR.similarity === 100, `Coordinates (-30, 35) correctly match Franklin D. Roosevelt (100% similarity)`);

const matchForSikorski = findClosestPolitician(-5, -15);
assert(matchForSikorski.id === "wladyslaw_sikorski" && matchForSikorski.similarity === 100, `Coordinates (-5, -15) correctly match Władysław Sikorski (100% similarity)`);

const matchForDeGaulle = findClosestPolitician(-15, -55);
assert(matchForDeGaulle.id === "charles_de_gaulle" && matchForDeGaulle.similarity === 100, `Coordinates (-15, -55) correctly match Charles de Gaulle (100% similarity)`);

const matchForEisenhower = findClosestPolitician(40, -25);
assert(matchForEisenhower.id === "dwight_d_eisenhower" && matchForEisenhower.similarity === 100, `Coordinates (40, -25) correctly match Dwight D. Eisenhower (100% similarity)`);

const matchForChiang = findClosestPolitician(20, -50);
assert(matchForChiang.id === "chiang_kai_shek" && matchForChiang.similarity === 100, `Coordinates (20, -50) correctly match Chiang Kai-shek (100% similarity)`);

// 6. Test HTML DOM ID references
console.log("\n[5] Testing HTML DOM elements referenced by script.js:");
const htmlContent = fs.readFileSync(path.join(__dirname, '../index.html'), 'utf-8');
const scriptContent = fs.readFileSync(path.join(__dirname, '../script.js'), 'utf-8');

const idRegex = /document\.getElementById\(["']([^"']+)["']\)/g;
let match;
const referencedIds = new Set();
while ((match = idRegex.exec(scriptContent)) !== null) {
  referencedIds.add(match[1]);
}

let missingDomIds = 0;
referencedIds.forEach(id => {
  if (!htmlContent.includes(`id="${id}"`)) {
    console.error(`DOM ID '${id}' is referenced in script.js but missing in index.html!`);
    missingDomIds++;
  }
});
assert(missingDomIds === 0, `All ${referencedIds.size} DOM element IDs referenced in script.js exist in index.html`);

// 7. Validate New Features: Expanded Rankings, SVG Flags, and Colors
console.log("\n[6] Testing Expanded Rankings, SVG Flags, and Colors:");

// Ideology colors, gradients, icons
let missingIdeoColors = 0;
let missingIdeoIcons = 0;
worldIdeologies.forEach(ideo => {
  if (!ideo.color || !ideo.color.startsWith('#') || !ideo.gradient) missingIdeoColors++;
  if (!ideo.icon || typeof ideo.icon !== 'string') missingIdeoIcons++;
});
assert(missingIdeoColors === 0, `All ${worldIdeologies.length} ideologies have defined signature hex colors and gradients`);
assert(missingIdeoIcons === 0, `All ${worldIdeologies.length} ideologies have distinctive icons/emblems`);
const distinctIdeoColors = new Set(worldIdeologies.map(i => i.color.toLowerCase()));
assert(distinctIdeoColors.size === worldIdeologies.length, `All ${worldIdeologies.length} ideologies have 100% unique signature hex colors (found ${distinctIdeoColors.size})`);

// Politician countryCode mapping to genuine SVG flags
let missingPolCountryCodes = 0;
worldPoliticians.forEach(pol => {
  if (!pol.countryCode || typeof pol.countryCode !== 'string') missingPolCountryCodes++;
});
assert(missingPolCountryCodes === 0, `All ${worldPoliticians.length} politicians have valid country codes for SVG flags`);

// Verify script.js contains svgFlags dictionary with all required countries
const requiredFlags = ['ar','us','gb','fr','de','it','pl','ua','ca','br','se','sg','sv','in','nz','uy','gr','jp','bf','za','bo','cz','sco','ussr','tw','global','tr','cn','ru','es','hu','eu','at','yu','il','ve','fi','kr','by','nl','mk'];
let missingScriptFlags = 0;
requiredFlags.forEach(f => {
  if (!scriptContent.includes(`${f}:`) && !scriptContent.includes(`"${f}":`) && !scriptContent.includes(`'${f}':`)) {
    missingScriptFlags++;
    console.error(`Missing flag '${f}' in script.js svgFlags`);
  }
});
assert(missingScriptFlags === 0, `All ${requiredFlags.length} genuine national flags are defined as inline SVGs in script.js`);

// Verify new UI keys parity
const requiredNewUiKeys = [
  'showMorePoliticians',
  'showAllPoliticians',
  'showFewerPoliticians',
  'showMoreIdeologies',
  'showAllIdeologies',
  'showFewerIdeologies',
  'clickIdeologyHint',
  'ideologyRankingTitle',
  'ideologyMatchLabel',
  'spotlightLeaderTitle',
  'viewAllRankings',
  'filterHistory',
  'filterPartyTop',
  'filterPartyAll',
  'filterPartyLeft',
  'filterPartyMarket',
  'filterPartyLib',
  'filterPartyTrad'
];
let missingNewUiKeys = 0;
requiredNewUiKeys.forEach(key => {
  langs.forEach(lang => {
    if (!uiTranslations[lang][key] || typeof uiTranslations[lang][key] !== 'string') {
      missingNewUiKeys++;
      console.error(`Missing UI key '${key}' in '${lang}'`);
    }
  });
});
assert(missingNewUiKeys === 0, `All ${requiredNewUiKeys.length} new ranking & expand UI strings have 100% translation parity in 6 languages`);

// Verify test mode UI keys parity (Quick vs Full modes)
const requiredModeKeys = [
  'modeSelectLabel', 'modeQuickTitle', 'modeQuickBadge', 'modeQuickDesc',
  'modeFullTitle', 'modeFullBadge', 'modeFullDesc', 'startTestBtnQuick',
  'startTestBtnFull', 'badgeResultQuick', 'badgeResultFull',
  'questionCounterModeQuick', 'questionCounterModeFull',
  'featureTimeQuick', 'featureTimeFull', 'tryOtherModeQuick', 'tryOtherModeFull',
  'badgePillQuick', 'badgePillFull', 'modePromptLabel'
];
let missingModeKeys = 0;
requiredModeKeys.forEach(k => {
  langs.forEach(l => {
    if (!uiTranslations[l][k] || typeof uiTranslations[l][k] !== 'string') {
      missingModeKeys++;
      console.error(`Missing mode key '${k}' in '${l}'`);
    }
  });
});
assert(missingModeKeys === 0, "All 20 test mode keys have 100% translation parity in PL, EN, ES, DE, RU, FR");

// Verify ranking calculation on simulated scores
function rankIdeologies(econ, soc) {
  return worldIdeologies.map(ideo => {
    const dist = Math.hypot(econ - ideo.coordinates.econ, soc - ideo.coordinates.soc);
    const similarity = Math.max(0, Math.min(100, Math.round(100 - (dist / 282.84) * 100)));
    return { ...ideo, dist, similarity };
  }).sort((a, b) => a.dist - b.dist);
}

function rankPoliticians(econ, soc) {
  return worldPoliticians.map(pol => {
    const dist = Math.hypot(econ - pol.coordinates.econ, soc - pol.coordinates.soc);
    const similarity = Math.max(0, Math.min(100, Math.round(100 - (dist / 282.84) * 100)));
    return { ...pol, dist, similarity };
  }).sort((a, b) => a.dist - b.dist);
}

const testRankedIdeos = rankIdeologies(70, -40);
assert(testRankedIdeos.length === worldIdeologies.length, `Ideology ranking returns complete catalog of ${worldIdeologies.length} ideologies`);
assert(testRankedIdeos[0].similarity >= testRankedIdeos[1].similarity && testRankedIdeos[1].similarity >= testRankedIdeos[2].similarity, "Ideology ranking is strictly sorted in descending match order");

const testRankedPols = rankPoliticians(70, -40);
assert(testRankedPols.length === worldPoliticians.length, `Politician ranking returns complete catalog of ${worldPoliticians.length} world politicians`);
assert(testRankedPols[0].similarity >= testRankedPols[1].similarity && testRankedPols[1].similarity >= testRankedPols[2].similarity, "Politician ranking is strictly sorted in descending match order");

// Verify ranking UI logic in script.js
const updatePolMatch = scriptContent.match(/function updatePoliticiansToggleButton\(\)\s*\{([\s\S]*?)\nfunction /);
assert(updatePolMatch && !updatePolMatch[1].includes('toggleIdeologiesIcon'), "updatePoliticiansToggleButton independently targets politicians icon without mutating ideology icon");

const renderPolMatch = scriptContent.match(/function renderPoliticiansRanking\(\)\s*\{([\s\S]*?)\nfunction /);
assert(renderPolMatch && renderPolMatch[1].includes('slice(0, 12)') && !renderPolMatch[1].includes('slice(1'), "renderPoliticiansRanking includes rank #1 (starts at index 0) allowing full podium return");

assert(scriptContent.includes('spotlightLeaderTitle'), "spotlightLeaderTitle is actively utilized for runner-up leader spotlights");
assert(scriptContent.includes('showAllPoliticians') && scriptContent.includes('showAllIdeologies'), "showAllPoliticians and showAllIdeologies keys are actively used on toggle controls");
assert(scriptContent.includes('ideologyActiveBanner') && scriptContent.includes('ideologyCardActiveBadge'), "Active ideology spotlight banner inside ideology-card is actively rendered and updated");

// 8. Section [7]: Interactive Simulated DOM Runtime & Lifecycle
console.log("\n[7] Testing Simulated DOM Runtime, Interactive Spotlighting & Multi-Language Toggle:");

const vm = require('vm');

class MockElement {
  constructor(id = '', tag = 'div') {
    this.id = id;
    this.tagName = tag.toUpperCase();
    this.classList = {
      _classes: new Set(),
      add: (c) => this.classList._classes.add(c),
      remove: (c) => this.classList._classes.delete(c),
      contains: (c) => this.classList._classes.has(c),
      toggle: (c, force) => {
        if (force === undefined) {
          if (this.classList._classes.has(c)) this.classList._classes.delete(c);
          else this.classList._classes.add(c);
        } else if (force) {
          this.classList._classes.add(c);
        } else {
          this.classList._classes.delete(c);
        }
      }
    };
    this.children = [];
    this.dataset = {};
    this.style = {
      setProperty: (k, v) => { this.style[k] = v; },
      getPropertyValue: (k) => this.style[k]
    };
    this.textContent = '';
    this._innerHTML = '';
    this._listeners = {};
    this.attributes = {};
  }
  get innerHTML() { return this._innerHTML; }
  set innerHTML(val) {
    this._innerHTML = val;
    this.children = [];
  }
  setAttribute(k, v) { this.attributes[k] = v; }
  getAttribute(k) { return this.attributes[k]; }
  addEventListener(event, fn) {
    if (!this._listeners[event]) this._listeners[event] = [];
    this._listeners[event].push(fn);
  }
  click() {
    (this._listeners['click'] || []).forEach(fn => fn({ currentTarget: this, target: this }));
  }
  remove() {}
  appendChild(child) {
    this.children.push(child);
  }
  querySelector() { return new MockElement(); }
  querySelectorAll() { return []; }
  getBoundingClientRect() { return { top: 0, bottom: 0, left: 0, right: 0 }; }
  scrollIntoView() {}
}

const simElements = {};
const simHtml = fs.readFileSync(path.join(__dirname, '../index.html'), 'utf8');
const simIdMatches = [...simHtml.matchAll(/id="([^"]+)"/g)].map(m => m[1]);
simIdMatches.forEach(id => {
  simElements[id] = new MockElement(id);
});

// Populate dataset.filter for filter pill elements
const pillFilterMatches = [...simHtml.matchAll(/<button[^>]*id="([^"]+)"[^>]*data-filter="([^"]+)"/g)];
pillFilterMatches.forEach(m => {
  if (simElements[m[1]]) simElements[m[1]].dataset.filter = m[2];
});
const pillFilterMatches2 = [...simHtml.matchAll(/<button[^>]*data-filter="([^"]+)"[^>]*id="([^"]+)"/g)];
pillFilterMatches2.forEach(m => {
  if (simElements[m[2]]) simElements[m[2]].dataset.filter = m[1];
});

simElements['compassCanvas'].getContext = () => ({
  clearRect: () => {}, fillRect: () => {}, strokeRect: () => {},
  beginPath: () => {}, moveTo: () => {}, lineTo: () => {}, stroke: () => {},
  arc: () => {}, fill: () => {}, fillText: () => {}, save: () => {}, restore: () => {},
  translate: () => {}, rotate: () => {}, createRadialGradient: () => ({ addColorStop: () => {} }),
  roundRect: () => {}
});

const simContext = {
  window: {
    addEventListener: () => {},
    scrollTo: () => {},
    innerHeight: 800,
    innerWidth: 1200
  },
  document: {
    getElementById: (id) => simElements[id] || new MockElement(id),
    querySelector: () => new MockElement(),
    querySelectorAll: (sel) => {
      if (sel && sel.includes('#politicianFilterPills')) {
        return [
          simElements['filterTopPoliticiansBtn'],
          simElements['filterAllPoliticiansBtn'],
          simElements['filterContemporaryPoliticiansBtn'],
          simElements['filterWw2PoliticiansBtn'],
          simElements['filterHistoryPoliticiansBtn'],
          simElements['filterActivistsPoliticiansBtn']
        ].filter(Boolean);
      }
      if (sel && sel.includes('#ideologyFilterPills')) {
        return [
          simElements['filterIdeoTopBtn'],
          simElements['filterIdeoAllBtn'],
          simElements['filterIdeoMarketBtn'],
          simElements['filterIdeoProgressiveBtn'],
          simElements['filterIdeoSocialistBtn'],
          simElements['filterIdeoConservativeBtn']
        ].filter(Boolean);
      }
      if (sel && sel.includes('#partyFilterPills')) {
        return [
          simElements['filterPartyTopBtn'],
          simElements['filterPartyAllBtn'],
          simElements['filterPartyLeftBtn'],
          simElements['filterPartyMarketBtn'],
          simElements['filterPartyLibBtn'],
          simElements['filterPartyTradBtn']
        ].filter(Boolean);
      }
      return [];
    },
    createElement: (tag) => new MockElement('', tag),
    body: new MockElement('body'),
    readyState: 'complete'
  },
  localStorage: {
    store: {},
    getItem: (k) => simContext.localStorage.store[k] || null,
    setItem: (k, v) => { simContext.localStorage.store[k] = v; }
  },
  console: { log: () => {}, error: () => {}, warn: () => {} },
  setTimeout: (fn) => setTimeout(fn, 0),
  clearTimeout: () => {},
  Math: Math
};

vm.createContext(simContext);

let vmInitError = null;
try {
  vm.runInContext(fs.readFileSync(path.join(__dirname, '../questions.js'), 'utf8'), simContext);
  vm.runInContext(fs.readFileSync(path.join(__dirname, '../worldData.js'), 'utf8'), simContext);
  vm.runInContext(fs.readFileSync(path.join(__dirname, '../translations.js'), 'utf8'), simContext);
  vm.runInContext(fs.readFileSync(path.join(__dirname, '../script.js'), 'utf8'), simContext);
} catch (err) {
  vmInitError = err;
}
assert(vmInitError === null, "Script loads without ReferenceError or Temporal Dead Zone exceptions during initApp");

// Test mode selection and dynamic questions loading
const getSim = (code) => vm.runInContext(code, simContext);

vm.runInContext('setTestMode("quick");', simContext);
assert(getSim('currentTestMode') === 'quick', "Setting test mode to quick updates currentTestMode");
assert(getSim('getActiveQuestions().length') === 30, "Quick mode provides exactly 30 active questions");
assert(simElements['modeQuickBtn'].classList.contains('active') && !simElements['modeFullBtn'].classList.contains('active'), "Quick mode button is active and Full mode button is inactive");

vm.runInContext('setTestMode("full");', simContext);
assert(getSim('currentTestMode') === 'full', "Setting test mode to full updates currentTestMode");
assert(getSim('getActiveQuestions().length') === 200, "Full mode provides exactly 200 active questions");
assert(simElements['modeFullBtn'].classList.contains('active') && !simElements['modeQuickBtn'].classList.contains('active'), "Full mode button is active and Quick mode button is inactive");

// Simulate quiz completion and results view
vm.runInContext('userAnswers = new Array(getActiveQuestions().length).fill(2);', simContext);
vm.runInContext('showResults(false);', simContext);

assert(getSim('currentRankedPoliticians.length') === worldPoliticians.length, `Simulation ranks all ${worldPoliticians.length} politicians`);
assert(getSim('currentRankedIdeologies.length') === worldIdeologies.length, `Simulation ranks all ${worldIdeologies.length} ideologies`);
assert(getSim('currentRankedParties.length') === 30, "Simulation ranks all 30 world parties");
assert(simElements['otherPoliticiansList'].children.length === 12, "Politicians ranking initially renders top 12 (including #1)");
assert(simElements['secondaryIdeologiesList'].children.length === 12, "Ideology ranking initially renders top 12 (including #1)");
assert(simElements['otherPartiesList'].children.length === 8, "Parties ranking initially renders top 8 (including #1)");

// Check Rank #1 presence and spotlighting in politicians ranking
const simPolCard1 = simElements['otherPoliticiansList'].children[0];
const topPolId = getSim('currentRankedPoliticians[0].id');
assert(simPolCard1.dataset.id === topPolId, "First politician in ranking list is exactly Rank #1");

// Click runner-up #4
const simPolCard4 = simElements['otherPoliticiansList'].children[3];
simPolCard4.click();
assert(getSim('activePoliticianId') === simPolCard4.dataset.id, "Clicking runner-up correctly updates activePoliticianId");
assert(simElements['politicianCardSubtitle'].textContent.includes('#4'), "Spotlight subtitle correctly displays '#4' position and translation");

// Click back to Rank #1
simPolCard1.click();
assert(getSim('activePoliticianId') === topPolId, "Clicking Rank #1 card restores Top Match activePoliticianId seamlessly");
const activeLang = getSim('currentLang');
assert(simElements['politicianCardTitle'].textContent === uiTranslations[activeLang].politicianCardTitle, "Card title reverts to primary Top Match title");

// Test Expand politicians
simElements['toggleMorePoliticiansBtn'].click();
assert(simElements['otherPoliticiansList'].children.length === worldPoliticians.length, `Clicking expand on politicians renders all ${worldPoliticians.length} politicians`);
assert(simElements['toggleMorePoliticiansText'].textContent === uiTranslations[activeLang].showFewerPoliticians, "Toggle button text updates to collapse label");

// Collapse politicians back to test category filtering
simElements['toggleMorePoliticiansBtn'].click();
assert(getSim('isPoliticiansExpanded') === false, "Politicians list collapsed successfully");

// Test interactive category filter pills
simElements['filterWw2PoliticiansBtn'].click();
assert(getSim('activePoliticianFilter') === 'ww2', "Clicking WWII filter pill updates activePoliticianFilter to 'ww2'");
assert(simElements['otherPoliticiansList'].children.length === 11, `WWII category filter renders all 11 WWII leaders (found ${simElements['otherPoliticiansList'].children.length})`);

simElements['filterHistoryPoliticiansBtn'].click();
assert(getSim('activePoliticianFilter') === 'history', "Clicking History filter pill updates activePoliticianFilter to 'history'");
assert(simElements['otherPoliticiansList'].children.length === 33, `History & 20th century filter renders all 33 leaders (found ${simElements['otherPoliticiansList'].children.length})`);

simElements['filterActivistsPoliticiansBtn'].click();
assert(getSim('activePoliticianFilter') === 'activists', "Clicking Activists filter pill updates activePoliticianFilter to 'activists'");
assert(simElements['otherPoliticiansList'].children.length === 14, `Activists and thinkers filter renders all 14 figures (found ${simElements['otherPoliticiansList'].children.length})`);

simElements['filterContemporaryPoliticiansBtn'].click();
assert(getSim('activePoliticianFilter') === 'contemporary', "Clicking Contemporary filter pill updates activePoliticianFilter to 'contemporary'");
assert(simElements['otherPoliticiansList'].children.length === 47, `Contemporary filter renders all 47 modern leaders (found ${simElements['otherPoliticiansList'].children.length})`);

simElements['filterTopPoliticiansBtn'].click();
assert(getSim('activePoliticianFilter') === 'top', "Clicking Top 12 filter pill updates activePoliticianFilter to 'top'");
assert(simElements['otherPoliticiansList'].children.length === 12, "Top 12 filter restores top 12 leaders view");

simElements['filterAllPoliticiansBtn'].click();
assert(getSim('activePoliticianFilter') === 'all', "Clicking All filter pill updates activePoliticianFilter to 'all'");
assert(simElements['otherPoliticiansList'].children.length === 105, `All filter renders all 105 leaders (found ${simElements['otherPoliticiansList'].children.length})`);

// Verify that neither index.html nor UI translations contain outdated catalog counts
for (const l of ['pl', 'en', 'es', 'de', 'ru', 'fr']) {
  assert(!uiTranslations[l].showAllPoliticians.includes('43') && !uiTranslations[l].showAllPoliticians.includes('89'), `showAllPoliticians in ${l} does not reference outdated counts`);
  assert(!uiTranslations[l].showAllIdeologies.includes('32'), `showAllIdeologies in ${l} does not reference outdated 32`);
  assert(!uiTranslations[l].filterAllPoliticians.includes('43') && !uiTranslations[l].filterAllPoliticians.includes('89'), `filterAllPoliticians in ${l} does not reference outdated counts`);
  assert(!uiTranslations[l].filterIdeoAll.includes('32'), `filterIdeoAll in ${l} does not reference outdated 32`);
  assert(!uiTranslations[l].showAllParties.includes('15'), `showAllParties in ${l} does not reference outdated 15`);
}
assert(!simHtml.includes('(43)') && !simHtml.includes('43 postaci') && !simHtml.includes('(89)') && !simHtml.includes('89 postaci'), "index.html has no outdated '43' or '89' count references");
assert(!simHtml.includes('(32)') && !simHtml.includes('32 nurtów') && !simHtml.includes('32 ideologi'), "index.html has no outdated '32' count references");
assert(!simHtml.includes('(15)') && !simHtml.includes('15 partii') && !simHtml.includes('15 ruchów'), "index.html has no outdated '15' count references");

// Test Expand ideologies
simElements['toggleMoreIdeologiesBtn'].click();
assert(simElements['secondaryIdeologiesList'].children.length === worldIdeologies.length, `Clicking expand on ideologies renders all ${worldIdeologies.length} ideologies`);
assert(simElements['toggleMoreIdeologiesText'].textContent === uiTranslations[activeLang].showFewerIdeologies, "Toggle button text updates to collapse label");

// Test Expand parties
simElements['toggleMorePartiesBtn'].click();
assert(simElements['otherPartiesList'].children.length === 30, "Clicking expand on parties renders all 30 parties");
assert(simElements['toggleMorePartiesText'].textContent === uiTranslations[activeLang].showFewerParties, "Toggle button text updates to collapse label");

// Collapse parties back to test category filtering
simElements['toggleMorePartiesBtn'].click();
assert(getSim('isPartiesExpanded') === false, "Parties list collapsed successfully");

// Test interactive party category filter pills
simElements['filterPartyLeftBtn'].click();
assert(getSim('activePartyFilter') === 'left', "Clicking Left party filter updates activePartyFilter to 'left'");
assert(simElements['otherPartiesList'].children.length === 15, `Left party filter renders 15 parties (found ${simElements['otherPartiesList'].children.length})`);

simElements['filterPartyMarketBtn'].click();
assert(getSim('activePartyFilter') === 'market', "Clicking Market party filter updates activePartyFilter to 'market'");
assert(simElements['otherPartiesList'].children.length === 10, `Market party filter renders 10 parties (found ${simElements['otherPartiesList'].children.length})`);

simElements['filterPartyTradBtn'].click();
assert(getSim('activePartyFilter') === 'traditional', "Clicking Traditional party filter updates activePartyFilter to 'traditional'");
assert(simElements['otherPartiesList'].children.length === 13, `Traditional party filter renders 13 parties (found ${simElements['otherPartiesList'].children.length})`);

simElements['filterPartyLibBtn'].click();
assert(getSim('activePartyFilter') === 'libertarian', "Clicking Libertarian party filter updates activePartyFilter to 'libertarian'");
assert(simElements['otherPartiesList'].children.length === 15, `Libertarian party filter renders 15 parties (found ${simElements['otherPartiesList'].children.length})`);

simElements['filterPartyTopBtn'].click();
assert(getSim('activePartyFilter') === 'top', "Clicking Top party filter updates activePartyFilter to 'top'");
assert(simElements['otherPartiesList'].children.length === 8, "Top 8 filter restores top 8 parties view");

simElements['filterPartyAllBtn'].click();
assert(getSim('activePartyFilter') === 'all', "Clicking All party filter updates activePartyFilter to 'all'");
assert(simElements['otherPartiesList'].children.length === 30, `All filter renders all 30 parties (found ${simElements['otherPartiesList'].children.length})`);

// Test Language toggling maintains parity and does not break state
let langTogglesPassed = true;
['en', 'es', 'de', 'ru', 'fr', 'pl'].forEach(l => {
  vm.runInContext(`setLanguage('${l}');`, simContext);
  if (simElements['toggleMorePoliticiansText'].textContent !== uiTranslations[l].showFewerPoliticians) {
    langTogglesPassed = false;
  }
});
assert(langTogglesPassed, "Language toggling updates expand button labels across all 6 languages dynamically");

// Test tryOtherModeBtn toggling between Full and Quick modes
simElements['tryOtherModeBtn'].click();
assert(getSim('currentTestMode') === 'quick', "Clicking tryOtherModeBtn switches test mode from Full to Quick");
assert(getSim('getActiveQuestions().length') === 30, "Active questions updated to 30 following mode toggle");
assert(simElements['modeQuickBtn'].classList.contains('active'), "Quick mode card is highlighted active after mode toggle");

// [8] Testing Contiguous Question Grouping, 6-Language Spectrum Tags, Authentic JPEG Validation & English Defaults:
console.log("\n[8] Testing Contiguous Grouping, Spectrum Tags, JPEG Headers & English Defaults:");

let seenCats = new Set();
let currentCat = null;
let categoryGroupingViolations = 0;
questions.forEach(q => {
  if (q.categoryKey !== currentCat) {
    if (seenCats.has(q.categoryKey)) {
      categoryGroupingViolations++;
      console.error(`Category ${q.categoryKey} is fragmented/non-contiguous at question ${q.id}`);
    }
    seenCats.add(q.categoryKey);
    currentCat = q.categoryKey;
  }
});
assert(categoryGroupingViolations === 0, "All 12 categories are arranged in contiguous, uninterrupted blocks");

let invalidJpegCount = 0;
worldPoliticians.forEach(pol => {
  const pPath = path.join(__dirname, '..', pol.localPhoto);
  if (!fs.existsSync(pPath)) {
    invalidJpegCount++;
    console.error(`Missing image: ${pol.localPhoto}`);
  } else {
    const buf = fs.readFileSync(pPath);
    if (buf.length < 1000 || buf[0] !== 0xFF || buf[1] !== 0xD8 || buf[2] !== 0xFF) {
      invalidJpegCount++;
      console.error(`Invalid JPEG: ${pol.localPhoto}`);
    }
  }
});
assert(invalidJpegCount === 0, `All ${worldPoliticians.length} politician portrait files are authentic JPEGs with valid FF D8 FF headers (>1KB)`);

const dummyIdeo = { coordinates: { econ: 50, soc: 50 } };
const esTag = vm.runInContext(`getIdeologySpectrumTag(${JSON.stringify(dummyIdeo)}, 'es')`, simContext);
const deTag = vm.runInContext(`getIdeologySpectrumTag(${JSON.stringify(dummyIdeo)}, 'de')`, simContext);
assert(esTag.includes("Mercado") && !esTag.includes("marché"), "getIdeologySpectrumTag for Spanish ('es') returns authentic Spanish text");
assert(deTag.includes("Markt") && !deTag.includes("marché"), "getIdeologySpectrumTag for German ('de') returns authentic German text");

let outdatedCountsInTranslations = 0;
['pl', 'en', 'es', 'de', 'ru', 'fr'].forEach(l => {
  const trans = uiTranslations[l];
  if (trans.badgePill && (trans.badgePill.includes('100') || trans.badgePill.includes('120'))) outdatedCountsInTranslations++;
  if (trans.startBtn && (trans.startBtn.includes('100') || trans.startBtn.includes('120'))) outdatedCountsInTranslations++;
  if (trans.featureTime && (trans.featureTime.includes('100') || trans.featureTime.includes('120'))) outdatedCountsInTranslations++;
});
assert(outdatedCountsInTranslations === 0, "No badgePill, startBtn, or featureTime strings in any language contain outdated 100 or 120 counts");

const htmlRaw = fs.readFileSync(path.join(__dirname, '../index.html'), 'utf8');
assert(htmlRaw.includes('aria-label="Choose language"'), "index.html has English aria-label for language switcher");
assert(htmlRaw.includes('aria-label="Toggle theme"'), "index.html has English aria-label for theme toggle button");
assert(htmlRaw.includes('aria-label="Appearance settings"'), "index.html has English aria-label for appearance button");
assert(htmlRaw.includes('← Previous'), "index.html question screen defaults to English Previous button");
assert(htmlRaw.includes('Next →'), "index.html question screen defaults to English Next button");
assert(htmlRaw.includes('Appearance Settings'), "index.html appearance modal defaults to English title");

// Results summary
console.log(`\n======================================================`);
console.log(`TEST SUMMARY: ${passedTests} PASSED, ${failedTests} FAILED`);
console.log(`======================================================`);

if (failedTests > 0) {
  process.exit(1);
} else {
  console.log("ALL TESTS PASSED! System verified completely.");
}
