// Baza pytań do Testu Politycznego
// Osie:
// econ: -2 (Zdecydowanie lewica) do +2 (Zdecydowanie prawica wolnorynkowa)
// soc: -2 (Zdecydowanie konserwatyzm/tradycja) do +2 (Zdecydowanie progresywizm/wolność obyczajowa)

const questions = [
  // --- OŚ GOSPODARCZA ---
  {
    id: 1,
    category: "Gospodarka",
    text: "Opieka zdrowotna i edukacja powinny być całkowicie bezpłatne i finansowane z wyższych podatków dla najbogatszych.",
    axis: "econ",
    multiplier: -1 // Zgoda = lewica gospodarcza (-)
  },
  {
    id: 2,
    category: "Gospodarka",
    text: "Wolny rynek i swoboda działalności gospodarczej bez nadmiernych regulacji są najlepszą drogą do dobrobytu państwa.",
    axis: "econ",
    multiplier: 1 // Zgoda = prawica gospodarcza (+)
  },
  {
    id: 3,
    category: "Gospodarka",
    text: "Płaca minimalna powinna być regularnie podnoszona przez rząd, aby chronić pracowników przed wyzyskiem.",
    axis: "econ",
    multiplier: -1 // Zgoda = lewica (-)
  },
  {
    id: 4,
    category: "Gospodarka",
    text: "Podatki dochodowe powinny być równe dla wszystkich (podatek liniowy) lub możliwie jak najniższe, a nie progresywne.",
    axis: "econ",
    multiplier: 1 // Zgoda = prawica (+)
  },
  {
    id: 5,
    category: "Gospodarka",
    text: "Kluczowe sektory gospodarki (energetyka, kolej, surowce) powinny pozostać pod kontrolą państwa.",
    axis: "econ",
    multiplier: -1 // Zgoda = lewica / interwencjonizm (-)
  },
  {
    id: 6,
    category: "Gospodarka",
    text: "Rozbudowane programy socjalne (np. 800+, dodatkowe zapomogi) zniechęcają do pracy i obciążają budżet państwa.",
    axis: "econ",
    multiplier: 1 // Zgoda = prawica (+)
  },
  {
    id: 7,
    category: "Gospodarka",
    text: "Państwo powinno wspierać mieszkalnictwo poprzez budowę tanich mieszkań na wynajem ze środków publicznych.",
    axis: "econ",
    multiplier: -1 // Zgoda = lewica (-)
  },
  {
    id: 8,
    category: "Gospodarka",
    text: "Związki zawodowe mają zbyt duży wpływ na gospodarkę i często blokują niezbędne reformy.",
    axis: "econ",
    multiplier: 1 // Zgoda = prawica (+)
  },
  {
    id: 9,
    category: "Gospodarka",
    text: "Ochrona klimatu i środowiska jest ważniejsza niż maksymalizacja zysków i tempo wzrostu gospodarczego.",
    axis: "econ",
    multiplier: -1 // Zgoda = regulacje/lewica (-)
  },
  {
    id: 10,
    category: "Gospodarka",
    text: "Przedsiębiorcy tworzą miejsca pracy i kapitał, dlatego powinni być objęci ulgami podatkowymi zamiast wysokich obciążeń ZUS.",
    axis: "econ",
    multiplier: 1 // Zgoda = prawica (+)
  },

  // --- OŚ ŚWIATOPOGLĄDOWA / SPOŁECZNA ---
  {
    id: 11,
    category: "Światopogląd",
    text: "Związki partnerskie oraz małżeństwa par jednopłciowych powinny być w Polsce prawnie zalegalizowane.",
    axis: "soc",
    multiplier: 1 // Zgoda = progresywizm (+)
  },
  {
    id: 12,
    category: "Światopogląd",
    text: "Tradycyjne wartości chrześcijańskie i tożsamość narodowa powinny stanowić fundament prawa i kultury w Polsce.",
    axis: "soc",
    multiplier: -1 // Zgoda = konserwatyzm (-)
  },
  {
    id: 13,
    category: "Światopogląd",
    text: "Kobieta powinna mieć prawo do legalnego przerwania ciąży na własne życzenie przynajmniej do 12. tygodnia.",
    axis: "soc",
    multiplier: 1 // Zgoda = progresywizm (+)
  },
  {
    id: 14,
    category: "Światopogląd",
    text: "Lekcje religii powinny być całkowicie wycofane ze szkół publicznych i nie powinny być finansowane z budżetu państwa.",
    axis: "soc",
    multiplier: 1 // Zgoda = progresywizm/rozdział kościoła (+)
  },
  {
    id: 15,
    category: "Światopogląd",
    text: "Kary za przestępstwa powinny być znacznie zaostrzone, a porządek publiczny jest ważniejszy niż nieograniczona swoboda jednostki.",
    axis: "soc",
    multiplier: -1 // Zgoda = konserwatyzm/autorytaryzm (-)
  },
  {
    id: 16,
    category: "Światopogląd",
    text: "Polska powinna pogłębiać integrację z Unią Europejską, nawet jeśli wiąże się to z przekazaniem części suwerenności do Brukseli.",
    axis: "soc",
    multiplier: 1 // Zgoda = euroentuzjazm/progresywizm (+)
  },
  {
    id: 17,
    category: "Światopogląd",
    text: "Państwo powinno prowadzić restrykcyjną politykę migracyjną, stawiając na pierwszym miejscu ochronę granic i spójność kulturową.",
    axis: "soc",
    multiplier: -1 // Zgoda = konserwatyzm narodowy (-)
  },
  {
    id: 18,
    category: "Światopogląd",
    text: "Posiadanie niewielkich ilości marihuany na własny użytek powinno zostać w Polsce zdekryminalizowane.",
    axis: "soc",
    multiplier: 1 // Zgoda = swobody jednostki/progresywizm (+)
  },
  {
    id: 19,
    category: "Światopogląd",
    text: "Wychowanie patriotyczne i nauka szacunku do symboli narodowych powinny być obowiązkowym elementem edukacji każdego obywatela.",
    axis: "soc",
    multiplier: -1 // Zgoda = konserwatyzm (-)
  },
  {
    id: 20,
    category: "Światopogląd",
    text: "Cenzura lub ograniczanie wypowiedzi w internecie, nawet pod hasłem walki z mową nienawiści, stanowi zagrożenie dla wolności słowa.",
    axis: "soc",
    multiplier: 1 // Zgoda = wolność słowa/indywidualizm (+)
  }
];

// Opcje odpowiedzi
const answerOptions = [
  { label: "Zdecydowanie się zgadzam", value: 2, className: "btn-strongly-agree" },
  { label: "Raczej się zgadzam", value: 1, className: "btn-agree" },
  { label: "Nie mam zdania", value: 0, className: "btn-neutral" },
  { label: "Raczej się nie zgadzam", value: -1, className: "btn-disagree" },
  { label: "Zdecydowanie się nie zgadzam", value: -2, className: "btn-strongly-disagree" }
];
