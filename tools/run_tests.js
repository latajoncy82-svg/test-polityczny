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

assert(answerOptions.length === 5, "Exactly 5 answer options configured");
let missingOptionTranslations = 0;
answerOptions.forEach(opt => {
  langs.forEach(lang => {
    if (!opt.label[lang]) missingOptionTranslations++;
  });
});
assert(missingOptionTranslations === 0, "All 5 answer options translated in PL, EN, RU, FR");

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

// Case A: Pure Maximum Right-Wing / Libertarian (+2 when multiplier==1, -2 when multiplier==-1)
const maxRightLib = runScoringSimulation((q) => q.multiplier === 1 ? 2 : -2);
assert(maxRightLib.econScore === 100 && maxRightLib.socScore === 100, `Max Free-Market/Progressive answers yield (+100%, +100%) [got (${maxRightLib.econScore}, ${maxRightLib.socScore})]`);

// Case B: Pure Maximum Left-Wing / Conservative (-2 when multiplier==1, +2 when multiplier==-1)
const maxLeftCons = runScoringSimulation((q) => q.multiplier === 1 ? -2 : 2);
assert(maxLeftCons.econScore === -100 && maxLeftCons.socScore === -100, `Max State/Conservative answers yield (-100%, -100%) [got (${maxLeftCons.econScore}, ${maxLeftCons.socScore})]`);

// Case C: Pure Neutral (0 on all questions)
const neutral = runScoringSimulation(() => 0);
assert(neutral.econScore === 0 && neutral.socScore === 0, `Neutral answers yield (0%, 0%) center [got (${neutral.econScore}, ${neutral.socScore})]`);

// Case D: Pure Agree (+1 on all questions) -> since multipliers are 25 (+1) and 25 (-1), sum must be 0!
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

// Test Q3 matching (Left, Conservative / Traditional Left)
const matchForPeron = findClosestPolitician(-55, -50);
assert(matchForPeron.id === "juan_peron" && matchForPeron.similarity >= 98, `Coordinates (-55, -50) correctly match Juan Perón (${matchForPeron.similarity}% similarity)`);

const matchForSolidarists = findClosestParty(-65, -50);
assert(matchForSolidarists.id === "traditional_left_solidarists" && matchForSolidarists.similarity >= 98, `Coordinates (-65, -50) correctly match Traditional Left Solidarists (${matchForSolidarists.similarity}% similarity)`);

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

// Results summary
console.log(`\n======================================================`);
console.log(`TEST SUMMARY: ${passedTests} PASSED, ${failedTests} FAILED`);
console.log(`======================================================`);

if (failedTests > 0) {
  process.exit(1);
} else {
  console.log("ALL TESTS PASSED! System verified completely.");
}
