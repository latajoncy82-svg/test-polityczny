// tools/build_files.js
const fs = require('fs');
const path = require('path');

const { rawQuestions } = require('./raw_questions');
const { rawIdeologies } = require('./raw_ideologies');
const { rawPoliticians } = require('./raw_politicians');
const { rawParties } = require('./raw_parties');
const { categories, answerOptions, uiTranslations } = require('./raw_translations');

console.log("== Starting Political Compass Build ==");

// 1. Build questions.js
const questionsFileContent = `/**
 * BAZA 100 PYTAŃ, KATEGORII ORAZ OPCJI ODPOWIEDZI
 * Test Polityczny - Wersja Globalna 2026
 * Obsługa 4 języków: PL, EN, RU, FR
 */

const categories = ${JSON.stringify(categories, null, 2)};

const answerOptions = ${JSON.stringify(answerOptions, null, 2)};

const questions = ${JSON.stringify(rawQuestions, null, 2)};

if (typeof module !== "undefined" && module.exports) {
  module.exports = { categories, answerOptions, questions };
}
`;

fs.writeFileSync(path.join(__dirname, '../questions.js'), questionsFileContent, 'utf-8');
console.log("✓ Successfully generated questions.js (100 questions, 12 categories, 5 answer options)");

// 2. Build worldData.js
const worldDataContent = `/**
 * KATALOG 32 IDEOLOGII, 24 ŚWIATOWYCH LIDERÓW I 12 MIĘDZYNARODOWYCH PARTII
 * Test Polityczny - Wersja Globalna 2026
 * Obsługa 4 języków: PL, EN, RU, FR
 */

const worldIdeologies = ${JSON.stringify(rawIdeologies, null, 2)};

const worldPoliticians = ${JSON.stringify(rawPoliticians, null, 2)};

const worldParties = ${JSON.stringify(rawParties, null, 2)};

if (typeof module !== "undefined" && module.exports) {
  module.exports = { worldIdeologies, worldPoliticians, worldParties };
}
`;

fs.writeFileSync(path.join(__dirname, '../worldData.js'), worldDataContent, 'utf-8');
console.log("✓ Successfully generated worldData.js (32 ideologies, 24 politicians, 12 world parties)");

// 3. Build translations.js
const translationsContent = `/**
 * SŁOWNIK TŁUMACZEŃ INTERFEJSU UŻYTKOWNIKA (UI)
 * Języki: Polski (pl), English (en), Русский (ru), Français (fr)
 */

const uiTranslations = ${JSON.stringify(uiTranslations, null, 2)};

if (typeof module !== "undefined" && module.exports) {
  module.exports = { uiTranslations };
}
`;

fs.writeFileSync(path.join(__dirname, '../translations.js'), translationsContent, 'utf-8');
console.log("✓ Successfully generated translations.js (67 UI keys in 4 languages)");

console.log("== Build Completed Successfully ==");
