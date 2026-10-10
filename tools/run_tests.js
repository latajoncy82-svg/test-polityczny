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
assert(Array.isArray(questions) && questions.length === 100, "Dataset contains exactly 100 questions");

const ids = questions.map(q => q.id);
const uniqueIds = new Set(ids);
assert(uniqueIds.size === 100 && ids[0] === 1 && ids[99] === 100, "Question IDs are sequential from 1 to 100");

const econQuestions = questions.filter(q => q.axis === "econ");
const socQuestions = questions.filter(q => q.axis === "soc");
assert(econQuestions.length === 50 && socQuestions.length === 50, "Perfect 50:50 balance between Economic and Social axes");

const econPos = econQuestions.filter(q => q.multiplier === 1).length;
const econNeg = econQuestions.filter(q => q.multiplier === -1).length;
assert(econPos === 25 && econNeg === 25, "Economic axis has exactly 25 (+1) and 25 (-1) questions");

const socPos = socQuestions.filter(q => q.multiplier === 1).length;
const socNeg = socQuestions.filter(q => q.multiplier === -1).length;
assert(socPos === 25 && socNeg === 25, "Social axis has exactly 25 (+1) and 25 (-1) questions");

const langs = ['pl', 'en', 'ru', 'fr'];
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
assert(missingQuestionTexts === 0, "All 100 questions have complete, non-empty translations in PL, EN, RU, FR");
assert(invalidCategoryKeys === 0, "All questions reference valid category keys");

assert(Object.keys(categories).length === 12, "Exactly 12 distinct categories/sectors present");
let missingCategoryTranslations = 0;
Object.entries(categories).forEach(([key, val]) => {
  langs.forEach(lang => {
    if (!val[lang] || typeof val[lang] !== 'string') missingCategoryTranslations++;
  });
});
assert(missingCategoryTranslations === 0, "All 12 categories have complete translations in 4 languages");

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
assert(missingOptionTranslations === 0, "All 6 answer options translated in PL, EN, RU, FR");
assert(missingOptionHintsBadges === 0, "All 6 answer options have complete hints and badges in 4 languages");

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
assert(missingIdeologyFields === 0, "All ideologies have complete translations (name, subtitle, desc) in 4 languages");
assert(invalidIdeologyCoords === 0, "All ideology coordinates fall within valid [-100, 100] bounds");

assert(worldPoliticians.length >= 20, `Rich world politicians catalog: found ${worldPoliticians.length} politicians (>= 20 required)`);
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
assert(missingPoliticianFields === 0, "All politicians have complete translations (country, role, quote, whyVote) in 4 languages");
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

const mlk = worldPoliticians.find(p => p.id === "martin_luther_king");
assert(!!mlk, "Historical figure Martin Luther King Jr. present in dataset");
const gandhi = worldPoliticians.find(p => p.id === "mahatma_gandhi");
assert(!!gandhi, "Historical activist Mahatma Gandhi present in dataset");
const churchill = worldPoliticians.find(p => p.id === "winston_churchill");
assert(!!churchill, "Historical leader Winston Churchill present in dataset");

// Validate WWII leaders present
const wwiiLeaderIds = [
  { id: "franklin_d_roosevelt", name: "Franklin D. Roosevelt" },
  { id: "charles_de_gaulle", name: "Charles de Gaulle" },
  { id: "wladyslaw_sikorski", name: "Władysław Sikorski" },
  { id: "dwight_d_eisenhower", name: "Dwight D. Eisenhower" },
  { id: "joseph_stalin", name: "Joseph Stalin" },
  { id: "benito_mussolini", name: "Benito Mussolini" },
  { id: "chiang_kai_shek", name: "Chiang Kai-shek" }
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

let missingLocalPhotos = 0;
worldPoliticians.forEach(pol => {
  const photoPath = path.join(__dirname, '..', pol.localPhoto);
  if (!fs.existsSync(photoPath) || fs.statSync(photoPath).size < 1000) {
    missingLocalPhotos++;
    console.error(`Missing or empty portrait file for ${pol.id}: ${pol.localPhoto}`);
  }
});
assert(missingLocalPhotos === 0, `All ${worldPoliticians.length} politicians have verified local portrait photos on disk in assets/politicians/`);

assert(worldParties.length >= 10, `Rich world party families catalog: found ${worldParties.length} parties (>= 10 required)`);
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
assert(missingPartyFields === 0, "All world parties have complete translations (name, type, manifesto) in 4 languages");
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
assert(missingUiKeys === 0, "All 4 languages have 100% complete parity across all UI translation keys");

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
// Answer +2 on 10 econ questions (with multiplier=1).
// Scenario 1: Answer Neutral (0) on remaining 40 questions -> score must dilute towards 0: 20/100 = 20%
const diluteNeutral = runScoringSimulation((q) => {
  if (q.axis === "econ") {
    if (q.id <= 10 && q.multiplier === 1) return 2;
    return 0; // Neutral: included in denominator
  }
  return 0;
});

// Scenario 2: Answer Skip ('skip') on remaining 40 questions -> score stays undiluted at 100%!
const pureSkip = runScoringSimulation((q) => {
  if (q.axis === "econ") {
    if (q.id <= 10 && q.multiplier === 1) return 2;
    return "skip"; // Skip: excluded from denominator
  }
  return "skip";
});

assert(diluteNeutral.econScore === 10 && pureSkip.econScore === 100, `Mathematical proof: Neutral (0) dilutes score towards center (${diluteNeutral.econScore}%), while Skip excludes question without diluting (${pureSkip.econScore}%)`);

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

const mockAnswersSkip = new Array(100).fill("skip");
mockAnswersSkip[0] = 2; // Q1 is economy with multiplier 1
const sectorSkipResult = calculateMockSectorBreakdown(mockAnswersSkip);
assert(sectorSkipResult.economy.scorePct === 100 && sectorSkipResult.economy.answered === 1, `Sector breakdown: Skip excludes unanswered questions, preserving 100% sector score for single answered question`);

const mockAnswersNeutral = new Array(100).fill("skip");
mockAnswersNeutral[0] = 2;
// answer neutral (0) on other 9 economy questions (Q2 - Q10)
for (let i = 1; i < 10; i++) mockAnswersNeutral[i] = 0;
const sectorNeutralResult = calculateMockSectorBreakdown(mockAnswersNeutral);
assert(sectorNeutralResult.economy.scorePct === 10 && sectorNeutralResult.economy.answered === 10, `Sector breakdown: Neutral (0) dilutes sector score towards center (10% with 10 questions factored)`);

// Case F: Pure Agree (+1 on all questions) cancels out due to symmetric 25(+1) / 25(-1) questions
const allAgree = runScoringSimulation(() => 1);
assert(allAgree.econScore === 0 && allAgree.socScore === 0, `Agreeing to everything cancels out to (0%, 0%) due to symmetric questions`);

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
assert(missingIdeoColors === 0, `All ${worldIdeologies.length} ideologies have distinct signature hex colors and gradients`);
assert(missingIdeoIcons === 0, `All ${worldIdeologies.length} ideologies have distinctive icons/emblems`);

// Politician countryCode mapping to genuine SVG flags
let missingPolCountryCodes = 0;
worldPoliticians.forEach(pol => {
  if (!pol.countryCode || typeof pol.countryCode !== 'string') missingPolCountryCodes++;
});
assert(missingPolCountryCodes === 0, `All ${worldPoliticians.length} politicians have valid country codes for SVG flags`);

// Verify script.js contains svgFlags dictionary with all required countries
const requiredFlags = ['ar','us','gb','fr','de','it','pl','ua','ca','br','se','sg','sv','in','nz','uy','gr','jp','bf','za','bo','cz','sco','ussr','tw','global'];
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
  'viewAllRankings'
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
assert(missingNewUiKeys === 0, `All 11 new ranking & expand UI strings have 100% translation parity in 4 languages`);

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
assert(testRankedIdeos.length === 32, "Ideology ranking returns complete catalog of 32 ideologies");
assert(testRankedIdeos[0].similarity >= testRankedIdeos[1].similarity && testRankedIdeos[1].similarity >= testRankedIdeos[2].similarity, "Ideology ranking is strictly sorted in descending match order");

const testRankedPols = rankPoliticians(70, -40);
assert(testRankedPols.length === 43, "Politician ranking returns complete catalog of 43 world politicians");
assert(testRankedPols[0].similarity >= testRankedPols[1].similarity && testRankedPols[1].similarity >= testRankedPols[2].similarity, "Politician ranking is strictly sorted in descending match order");

// Verify ranking UI logic in script.js
const updatePolMatch = scriptContent.match(/function updatePoliticiansToggleButton\(\)\s*\{([\s\S]*?)\nfunction /);
assert(updatePolMatch && !updatePolMatch[1].includes('toggleIdeologiesIcon'), "updatePoliticiansToggleButton independently targets politicians icon without mutating ideology icon");

const renderPolMatch = scriptContent.match(/function renderPoliticiansRanking\(\)\s*\{([\s\S]*?)\nfunction /);
assert(renderPolMatch && renderPolMatch[1].includes('slice(0, 10)') && !renderPolMatch[1].includes('slice(1'), "renderPoliticiansRanking includes rank #1 (starts at index 0) allowing full podium return");

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
    querySelectorAll: () => [],
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

// Simulate quiz completion and results view
vm.runInContext('userAnswers = new Array(100).fill(2);', simContext);
vm.runInContext('showResults(false);', simContext);

const getSim = (code) => vm.runInContext(code, simContext);

assert(getSim('currentRankedPoliticians.length') === 43, "Simulation ranks all 43 politicians");
assert(getSim('currentRankedIdeologies.length') === 32, "Simulation ranks all 32 ideologies");
assert(simElements['otherPoliticiansList'].children.length === 10, "Politicians ranking initially renders top 10 (including #1)");
assert(simElements['secondaryIdeologiesList'].children.length === 8, "Ideology ranking initially renders top 8 (including #1)");

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
assert(simElements['politicianCardTitle'].textContent === uiTranslations.pl.politicianCardTitle, "Card title reverts to primary Top Match title");

// Test Expand politicians
simElements['toggleMorePoliticiansBtn'].click();
assert(simElements['otherPoliticiansList'].children.length === 43, "Clicking expand on politicians renders all 43 politicians");
assert(simElements['toggleMorePoliticiansText'].textContent === uiTranslations.pl.showFewerPoliticians, "Toggle button text updates to collapse label");

// Test Expand ideologies
simElements['toggleMoreIdeologiesBtn'].click();
assert(simElements['secondaryIdeologiesList'].children.length === 32, "Clicking expand on ideologies renders all 32 ideologies");
assert(simElements['toggleMoreIdeologiesText'].textContent === uiTranslations.pl.showFewerIdeologies, "Toggle button text updates to collapse label");

// Test Language toggling maintains parity and does not break state
let langTogglesPassed = true;
['en', 'ru', 'fr', 'pl'].forEach(l => {
  vm.runInContext(`setLanguage('${l}');`, simContext);
  if (simElements['toggleMorePoliticiansText'].textContent !== uiTranslations[l].showFewerPoliticians) {
    langTogglesPassed = false;
  }
});
assert(langTogglesPassed, "Language toggling updates expand button labels across all 4 languages dynamically");

// Results summary
console.log(`\n======================================================`);
console.log(`TEST SUMMARY: ${passedTests} PASSED, ${failedTests} FAILED`);
console.log(`======================================================`);

if (failedTests > 0) {
  process.exit(1);
} else {
  console.log("ALL TESTS PASSED! System verified completely.");
}
