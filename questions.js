/**
 * BAZA 160 PYTAŃ, KATEGORII ORAZ OPCJI ODPOWIEDZI
 * Test Polityczny - Wersja Globalna 2026
 * Obsługa 6 języków: EN, PL, ES, DE, RU, FR
 */

const categories = {
  "economy": {
    "pl": "Gospodarka i Wolny Rynek",
    "en": "Economy & Free Market",
    "es": "Economía y Libre Mercado",
    "de": "Wirtschaft & Freier Markt",
    "ru": "Экономика и свободный рынок",
    "fr": "Économie et libre marché"
  },
  "taxation": {
    "pl": "Podatki i Finanse Publiczne",
    "en": "Taxation & Public Finance",
    "es": "Impuestos y Finanzas Públicas",
    "de": "Steuern & Öffentliche Finanzen",
    "ru": "Налоги и государственные финансы",
    "fr": "Fiscalité et finances publiques"
  },
  "labor": {
    "pl": "Praca, Płace i Związki",
    "en": "Labor, Wages & Unions",
    "es": "Trabajo, Salarios y Sindicatos",
    "de": "Arbeit, Löhne & Gewerkschaften",
    "ru": "Труд, зарплаты и профсоюзы",
    "fr": "Travail, salaires et syndicats"
  },
  "welfare": {
    "pl": "Usługi Społeczne i Mieszkalnictwo",
    "en": "Social Welfare & Housing",
    "es": "Servicios Sociales y Vivienda",
    "de": "Sozialwesen & Wohnungsbau",
    "ru": "Социальные услуги и жильё",
    "fr": "Services sociaux et logement"
  },
  "regulation": {
    "pl": "Prywatyzacja i Regulacje Sektorowe",
    "en": "Privatization & Industry Regulation",
    "es": "Privatización y Regulación Sectorial",
    "de": "Privatisierung & Branchenregulierung",
    "ru": "Приватизация и госрегулирование",
    "fr": "Privatisation et régulation sectorielle"
  },
  "trade": {
    "pl": "Handel Międzynarodowy i Korporacje",
    "en": "Global Trade & Corporations",
    "es": "Comercio Global y Corporaciones",
    "de": "Welthandel & Großkonzerne",
    "ru": "Мировая торговля и корпорации",
    "fr": "Commerce international et multinationales"
  },
  "liberties": {
    "pl": "Wolności Obywatelskie i Prywatność",
    "en": "Civil Liberties & Privacy",
    "es": "Libertades Civiles y Privacidad",
    "de": "Bürgerrechte & Privatsphäre",
    "ru": "Гражданские свободы и приватность",
    "fr": "Libertés civiles et vie privée"
  },
  "tech": {
    "pl": "Technologia, AI i Prawa Cyfrowe",
    "en": "Technology, AI & Digital Rights",
    "es": "Tecnología, IA y Derechos Digitales",
    "de": "Technologie, KI & Digitale Rechte",
    "ru": "Технологии, ИИ и цифровые права",
    "fr": "Technologie, IA et droits numériques"
  },
  "ecology": {
    "pl": "Klimat, Ekologia i Energetyka",
    "en": "Climate, Ecology & Energy",
    "es": "Clima, Ecología y Energía",
    "de": "Klima, Ökologie & Energie",
    "ru": "Климат, экология и энергетика",
    "fr": "Climat, écologie et énergie"
  },
  "culture": {
    "pl": "Kultura, Tradycja i Religia",
    "en": "Culture, Tradition & Religion",
    "es": "Cultura, Tradición y Religión",
    "de": "Kultur, Tradition & Religion",
    "ru": "Культура, традиции и религия",
    "fr": "Culture, tradition et religion"
  },
  "society": {
    "pl": "Prawa Człowieka i Kwestie Społeczne",
    "en": "Human Rights & Social Issues",
    "es": "Derechos Humanos y Cuestiones Sociales",
    "de": "Menschenrechte & Gesellschaftliche Fragen",
    "ru": "Права человека и общество",
    "fr": "Droits humains et questions sociales"
  },
  "security": {
    "pl": "Bezpieczeństwo, Granice i Geopolityka",
    "en": "Security, Borders & Geopolitics",
    "es": "Seguridad, Fronteras y Geopolítica",
    "de": "Sicherheit, Grenzen & Geopolitik",
    "ru": "Безопасность, границы и геополитика",
    "fr": "Sécurité, frontières et géopolitique"
  }
};

const answerOptions = [
  {
    "value": 2,
    "code": "strongly-agree",
    "className": "btn-strongly-agree",
    "label": {
      "pl": "Zdecydowanie się zgadzam",
      "en": "Strongly Agree",
      "es": "Totalmente de acuerdo",
      "de": "Stimme voll zu",
      "ru": "Полностью согласен",
      "fr": "Tout à fait d'accord"
    },
    "hint": {
      "pl": "+2 pkt (silne poparcie)",
      "en": "+2 pts (strong support)",
      "es": "+2 pts (apoyo firme)",
      "de": "+2 Pkt. (starke Zustimmung)",
      "ru": "+2 балла (полное согласие)",
      "fr": "+2 pts (adhésion totale)"
    },
    "badge": {
      "pl": "+2",
      "en": "+2",
      "es": "+2",
      "de": "+2",
      "ru": "+2",
      "fr": "+2"
    }
  },
  {
    "value": 1,
    "code": "agree",
    "className": "btn-agree",
    "label": {
      "pl": "Raczej się zgadzam",
      "en": "Agree",
      "es": "De acuerdo",
      "de": "Stimme eher zu",
      "ru": "Скорее согласен",
      "fr": "Plutôt d'accord"
    },
    "hint": {
      "pl": "+1 pkt (umiarkowane poparcie)",
      "en": "+1 pt (moderate support)",
      "es": "+1 pt (apoyo moderado)",
      "de": "+1 Pkt. (moderate Zustimmung)",
      "ru": "+1 балл (умеренное согласие)",
      "fr": "+1 pt (adhésion modérée)"
    },
    "badge": {
      "pl": "+1",
      "en": "+1",
      "es": "+1",
      "de": "+1",
      "ru": "+1",
      "fr": "+1"
    }
  },
  {
    "value": 0,
    "code": "neutral",
    "className": "btn-neutral",
    "label": {
      "pl": "Neutralny / Umiarkowany",
      "en": "Neutral / Moderate",
      "es": "Neutral / Moderado",
      "de": "Neutral / Gemäßigt",
      "ru": "Нейтрально / Умеренно",
      "fr": "Neutre / Modéré"
    },
    "hint": {
      "pl": "0 pkt (pozycja pośrodku – wliczana do wyniku)",
      "en": "0 pts (balanced center – included in score)",
      "es": "0 pts (posición central – incluida en el cálculo)",
      "de": "0 Pkt. (zentrale Position – in Wertung eingerechnet)",
      "ru": "0 баллов (баланс по центру – учитывается в расчете)",
      "fr": "0 pt (position centriste – prise en compte)"
    },
    "badge": {
      "pl": "0",
      "en": "0",
      "es": "0",
      "de": "0",
      "ru": "0",
      "fr": "0"
    }
  },
  {
    "value": -1,
    "code": "disagree",
    "className": "btn-disagree",
    "label": {
      "pl": "Raczej się nie zgadzam",
      "en": "Disagree",
      "es": "En desacuerdo",
      "de": "Stimme eher nicht zu",
      "ru": "Скорее не согласен",
      "fr": "Plutôt pas d'accord"
    },
    "hint": {
      "pl": "-1 pkt (umiarkowany sprzeciw)",
      "en": "-1 pt (moderate disagreement)",
      "es": "-1 pt (oposición moderada)",
      "de": "-1 Pkt. (moderate Ablehnung)",
      "ru": "-1 балл (умеренное несогласие)",
      "fr": "-1 pt (désaccord modéré)"
    },
    "badge": {
      "pl": "-1",
      "en": "-1",
      "es": "-1",
      "de": "-1",
      "ru": "-1",
      "fr": "-1"
    }
  },
  {
    "value": -2,
    "code": "strongly-disagree",
    "className": "btn-strongly-disagree",
    "label": {
      "pl": "Zdecydowanie się nie zgadzam",
      "en": "Strongly Disagree",
      "es": "Totalmente en desacuerdo",
      "de": "Stimme überhaupt nicht zu",
      "ru": "Полностью не согласен",
      "fr": "Pas du tout d'accord"
    },
    "hint": {
      "pl": "-2 pkt (silny sprzeciw)",
      "en": "-2 pts (strong disagreement)",
      "es": "-2 pts (oposición firme)",
      "de": "-2 Pkt. (starke Ablehnung)",
      "ru": "-2 балла (полное несогласие)",
      "fr": "-2 pts (désaccord total)"
    },
    "badge": {
      "pl": "-2",
      "en": "-2",
      "es": "-2",
      "de": "-2",
      "ru": "-2",
      "fr": "-2"
    }
  },
  {
    "value": "skip",
    "code": "skip",
    "className": "btn-skip",
    "label": {
      "pl": "Nie mam zdania / Nie obchodzi mnie to",
      "en": "No opinion / Indifferent",
      "es": "Sin opinión / Indiferente",
      "de": "Keine Meinung / Gleichgültig",
      "ru": "Нет мнения / Безразлично",
      "fr": "Sans avis / Peu importe"
    },
    "hint": {
      "pl": "Pomiń temat (wyłączone z kalkulacji, nie rozwadnia wyniku)",
      "en": "Skip topic (excluded from score, does not dilute result)",
      "es": "Omitir tema (excluido del cálculo, no diluye el resultado)",
      "de": "Thema überspringen (aus Wertung ausgeschlossen, verwässert Ergebnis nicht)",
      "ru": "Пропустить тему (исключено из расчёта, не искажает итог)",
      "fr": "Ignorer le sujet (exclu du calcul, n'altère pas le score)"
    },
    "badge": {
      "pl": "—",
      "en": "—",
      "es": "—",
      "de": "—",
      "ru": "—",
      "fr": "—"
    }
  }
];

const questions = [
  {
    "id": 1,
    "categoryKey": "economy",
    "axis": "econ",
    "multiplier": 1,
    "isQuick": true,
    "text": {
      "pl": "Wolny rynek i prywatna przedsiębiorczość najlepiej tworzą bogactwo narodu.",
      "en": "A free market and private enterprise are the best way to create national wealth.",
      "es": "El libre mercado y la iniciativa privada son la mejor forma de generar riqueza nacional.",
      "de": "Ein freier Markt und privates Unternehmertum schaffen am besten nationalen Wohlstand.",
      "ru": "Свободный рынок и частное предпринимательство лучше всего создают богатство страны.",
      "fr": "Le libre marché et l'entreprise privée sont le meilleur moyen de créer la richesse nationale."
    }
  },
  {
    "id": 2,
    "categoryKey": "economy",
    "axis": "econ",
    "multiplier": -1,
    "isQuick": true,
    "text": {
      "pl": "Rząd powinien odgórnie ustalać maksymalne ceny podstawowej żywności i prądu.",
      "en": "The government should set strict price caps on basic food and electricity.",
      "es": "El gobierno debe fijar precios máximos para los alimentos básicos y la electricidad.",
      "de": "Die Regierung sollte Höchstpreise für Grundnahrungsmittel und Strom festlegen.",
      "ru": "Правительство должно устанавливать предельные цены на базовые продукты и электроэнергию.",
      "fr": "Le gouvernement devrait plafonner les prix des aliments de base et de l'électricité."
    }
  },
  {
    "id": 3,
    "categoryKey": "economy",
    "axis": "econ",
    "multiplier": 1,
    "isQuick": true,
    "text": {
      "pl": "Państwo nie powinno ratować bankrutujących firm pieniędzmi podatników.",
      "en": "The state should not bail out failing businesses with taxpayers' money.",
      "es": "El Estado no debe rescatar empresas en quiebra con dinero de los contribuyentes.",
      "de": "Der Staat sollte insolvente Unternehmen nicht mit Steuergeldern retten.",
      "ru": "Государство не должно спасать убыточные компании деньгами налогоплательщиков.",
      "fr": "L'État ne devrait pas sauver les entreprises en faillite avec l'argent public."
    }
  },
  {
    "id": 4,
    "categoryKey": "economy",
    "axis": "econ",
    "multiplier": -1,
    "isQuick": false,
    "text": {
      "pl": "Kluczowe gałęzie przemysłu, kopalnie i rafinerie powinny należeć do państwa.",
      "en": "Key strategic industries, mines, and refineries should belong to the state.",
      "es": "Las industrias estratégicas, minas y refinerías deben pertenecer al Estado.",
      "de": "Schlüsselindustrien, Minen und Raffinerien sollten dem Staat gehören.",
      "ru": "Ключевые отрасли промышленности, шахты и нефтепереработка должны принадлежать государству.",
      "fr": "Les industries stratégiques, les mines et les raffineries devraient appartenir à l'État."
    }
  },
  {
    "id": 5,
    "categoryKey": "economy",
    "axis": "econ",
    "multiplier": 1,
    "isQuick": false,
    "text": {
      "pl": "Handel w niedziele i święta powinien być w pełni dozwolony bez ograniczeń.",
      "en": "Shopping on Sundays and holidays should be fully permitted without restrictions.",
      "es": "El comercio en domingos y festivos debe estar totalmente permitido sin restricciones.",
      "de": "Der Handel an Sonn- und Feiertagen sollte uneingeschränkt erlaubt sein.",
      "ru": "Торговля по воскресеньям и праздникам должна быть полностью разрешена без ограничений.",
      "fr": "Le commerce le dimanche et les jours fériés devrait être totalement autorisé sans restriction."
    }
  },
  {
    "id": 6,
    "categoryKey": "economy",
    "axis": "econ",
    "multiplier": -1,
    "isQuick": false,
    "text": {
      "pl": "Rząd powinien centralnie planować i kierować rozwojem gospodarki narodowej.",
      "en": "The government should centrally plan and guide the national economy's development.",
      "es": "El gobierno debe planificar de forma centralizada el desarrollo económico nacional.",
      "de": "Die Regierung sollte die Entwicklung der Volkswirtschaft zentral planen und lenken.",
      "ru": "Правительство должно централизованно планировать и направлять развитие экономики.",
      "fr": "Le gouvernement devrait planifier de manière centralisée le développement économique national."
    }
  },
  {
    "id": 7,
    "categoryKey": "economy",
    "axis": "econ",
    "multiplier": 1,
    "isQuick": false,
    "text": {
      "pl": "Kolej i narodowe linie lotnicze powinny być sprywatyzowane.",
      "en": "Railways and national airlines should be privatized.",
      "es": "Los ferrocarriles y las aerolíneas nacionales deben privatizarse.",
      "de": "Eisenbahnen und nationale Fluggesellschaften sollten privatisiert werden.",
      "ru": "Железные дороги и национальные авиалинии должны быть приватизированы.",
      "fr": "Les chemins de fer et les compagnies aériennes nationales devraient être privatisés."
    }
  },
  {
    "id": 8,
    "categoryKey": "economy",
    "axis": "econ",
    "multiplier": -1,
    "isQuick": false,
    "text": {
      "pl": "Państwo powinno ustawowo ograniczać maksymalne zyski wielkich korporacji.",
      "en": "The state should legally cap maximum corporate profits.",
      "es": "El Estado debe limitar por ley los beneficios máximos de las grandes corporaciones.",
      "de": "Der Staat sollte die maximalen Gewinne von Großkonzernen gesetzlich deckeln.",
      "ru": "Государство должно законодательно ограничить максимальную прибыль крупных корпораций.",
      "fr": "L'État devrait plafonner légalement les profits maximaux des grandes entreprises."
    }
  },
  {
    "id": 9,
    "categoryKey": "economy",
    "axis": "econ",
    "multiplier": 1,
    "isQuick": false,
    "text": {
      "pl": "Państwo nie powinno dawać żadnych państwowych dotacji prywatnym przedsiębiorstwom.",
      "en": "The state should provide zero government subsidies to private businesses.",
      "es": "El Estado no debe otorgar subsidios públicos a empresas privadas.",
      "de": "Der Staat sollte privaten Unternehmen keinerlei Subventionen gewähren.",
      "ru": "Государство не должно выдавать никаких субсидий частным компаниям.",
      "fr": "L'État ne devrait accorder aucune subvention publique aux entreprises privées."
    }
  },
  {
    "id": 10,
    "categoryKey": "economy",
    "axis": "econ",
    "multiplier": -1,
    "isQuick": false,
    "text": {
      "pl": "Państwo powinno wspierać spółdzielnie pracownicze zamiast wielkich prywatnych korporacji.",
      "en": "The state should favor worker cooperatives over large private corporations.",
      "es": "El Estado debe favorecer a las cooperativas de trabajadores frente a las corporaciones privadas.",
      "de": "Der Staat sollte Arbeitergenossenschaften gegenüber Großkonzernen bevorzugen.",
      "ru": "Государство должно поддерживать рабочие кооперативы вместо крупных корпораций.",
      "fr": "L'État devrait soutenir les coopératives de travailleurs plutôt que les grandes entreprises privées."
    }
  },
  {
    "id": 11,
    "categoryKey": "economy",
    "axis": "econ",
    "multiplier": 1,
    "isQuick": false,
    "text": {
      "pl": "Przedsiębiorcy powinni móc zakładać firmy bez pozwoleń urzędowych i zbędnych koncesji.",
      "en": "Entrepreneurs should be able to start businesses without government permits or licenses.",
      "es": "Los emprendedores deberían poder abrir empresas sin licencias ni permisos burocráticos.",
      "de": "Unternehmer sollten Betriebe ohne bürokratische Genehmigungen gründen können.",
      "ru": "Предприниматели должны иметь возможность открывать бизнес без разрешений и лицензий.",
      "fr": "Les entrepreneurs devraient pouvoir créer une entreprise sans autorisations administratives ni licences."
    }
  },
  {
    "id": 12,
    "categoryKey": "economy",
    "axis": "econ",
    "multiplier": -1,
    "isQuick": false,
    "text": {
      "pl": "Sieci wodociągowe i sieci przesyłowe energii muszą być wyłączną własnością publiczną.",
      "en": "Water systems and power transmission grids must be strictly public property.",
      "es": "Las redes de agua y de transporte eléctrico deben ser estrictamente propiedad pública.",
      "de": "Wasserleitungsnetze und Stromtrassen müssen ausschließlich in öffentlicher Hand sein.",
      "ru": "Водопроводные сети и энергосети должны быть исключительно государственной собственностью.",
      "fr": "Les réseaux de distribution d'eau et d'électricité doivent être strictement propriété publique."
    }
  },
  {
    "id": 13,
    "categoryKey": "economy",
    "axis": "econ",
    "multiplier": 1,
    "isQuick": false,
    "text": {
      "pl": "Konkurencja między firmami obniża ceny skuteczniej niż państwowe kontrole cen.",
      "en": "Competition between companies lowers prices far better than government price controls.",
      "es": "La competencia empresarial baja los precios de forma más eficaz que los controles estatales.",
      "de": "Wettbewerb zwischen Firmen senkt Preise wirksamer als staatliche Preiskontrollen.",
      "ru": "Конкуренция между компаниями снижает цены эффективнее, чем государственный контроль цен.",
      "fr": "La concurrence entre entreprises fait baisser les prix plus efficacement que le contrôle de l'État."
    }
  },
  {
    "id": 14,
    "categoryKey": "economy",
    "axis": "econ",
    "multiplier": -1,
    "isQuick": false,
    "text": {
      "pl": "Państwo powinno mieć prawo przymusowo wywłaszczać prywatną ziemię pod strategiczne cele publiczne.",
      "en": "The state should have the right to expropriate private land for public infrastructure projects.",
      "es": "El Estado debe tener derecho a expropiar terrenos privados para obras de infraestructura pública.",
      "de": "Der Staat sollte das Recht haben, privates Land für öffentliche Bauprojekte zu enteignen.",
      "ru": "Государство должно иметь право отчуждать частную землю под важные общественные проекты.",
      "fr": "L'État devrait avoir le droit d'exproprier des terrains privés pour des projets publics majeurs."
    }
  },
  {
    "id": 15,
    "categoryKey": "taxation",
    "axis": "econ",
    "multiplier": 1,
    "isQuick": true,
    "text": {
      "pl": "Wszyscy obywatele powinni płacić dokładnie taki sam procent podatku dochodowego (podatek liniowy).",
      "en": "All citizens should pay the exact same percentage of income tax (a flat tax).",
      "es": "Todos los ciudadanos deberían pagar el mismo porcentaje de impuesto (tipo único / flat tax).",
      "de": "Alle Bürger sollten denselben Einkommensteuersatz zahlen (Einheitssteuersatz / Flat Tax).",
      "ru": "Все граждане должны платить одинаковый процент подоходного налога (плоская шкала).",
      "fr": "Tous les citoyens devraient payer le même pourcentage d'impôt sur le revenu (taux unique)."
    }
  },
  {
    "id": 16,
    "categoryKey": "taxation",
    "axis": "econ",
    "multiplier": -1,
    "isQuick": true,
    "text": {
      "pl": "Miliarderzy powinni płacić specjalny, coroczny wysoki podatek od całego swojego majątku.",
      "en": "Billionaires should pay a steep annual wealth tax on their total assets.",
      "es": "Los multimillonarios deben pagar un impuesto anual significativo sobre su patrimonio total.",
      "de": "Milliardäre sollten eine spürbare jährliche Vermögensteuer auf ihr Gesamtvermögen zahlen.",
      "ru": "Миллиардеры должны платить высокий ежегодный налог на всё своё состояние.",
      "fr": "Les milliardaires devraient payer un impôt annuel substantiel sur l'ensemble de leur patrimoine."
    }
  },
  {
    "id": 17,
    "categoryKey": "taxation",
    "axis": "econ",
    "multiplier": 1,
    "isQuick": false,
    "text": {
      "pl": "Podatek od spadków i darowizn w rodzinie powinien być całkowicie zlikwidowany.",
      "en": "Inheritance and gift taxes between family members should be entirely abolished.",
      "es": "El impuesto de sucesiones y donaciones familiares debe abolirse por completo.",
      "de": "Die Erbschaft- und Schenkungsteuer für Familienangehörige sollte komplett abgeschafft werden.",
      "ru": "Налог на наследство и дарение внутри семьи должен быть полностью отменён.",
      "fr": "Les droits de succession et donations intrafamiliales devraient être totalement abolis."
    }
  },
  {
    "id": 18,
    "categoryKey": "taxation",
    "axis": "econ",
    "multiplier": -1,
    "isQuick": false,
    "text": {
      "pl": "Najbogatsi zarabiający powinni oddawać państwu w podatkach ponad połowę swoich najwyższych dochodów.",
      "en": "Top earners should hand over more than half of their highest earnings in income tax.",
      "es": "Las rentas más altas deben tributar más del 50% en los tramos impositivos superiores.",
      "de": "Spitzenverdiener sollten mehr als die Hälfte ihrer Spitzeneinkünfte als Steuern abführen.",
      "ru": "Самые богатые должны отдавать государству более половины своих сверхдоходов в виде налогов.",
      "fr": "Les plus hauts revenus devraient verser plus de la moitié de leurs gains supérieurs en impôts."
    }
  },
  {
    "id": 19,
    "categoryKey": "taxation",
    "axis": "econ",
    "multiplier": 1,
    "isQuick": false,
    "text": {
      "pl": "Radykalne obniżenie podatków dla firm to najlepszy sposób na tworzenie nowych miejsc pracy.",
      "en": "Slashing corporate taxes is the single best way to create new jobs and investment.",
      "es": "Reducir drásticamente los impuestos a empresas es la mejor manera de crear empleo.",
      "de": "Eine deutliche Senkung der Unternehmenssteuern ist das beste Mittel zur Schaffung von Arbeitsplätzen.",
      "ru": "Радикальное снижение налогов на бизнес — лучший способ создания новых рабочих мест.",
      "fr": "Réduire drastiquement l'impôt sur les sociétés est le meilleur moyen de créer des emplois."
    }
  },
  {
    "id": 20,
    "categoryKey": "taxation",
    "axis": "econ",
    "multiplier": -1,
    "isQuick": false,
    "text": {
      "pl": "Wszystkie kraje powinny wprowadzić wysoki, minimalny podatek dla międzynarodowych korporacji.",
      "en": "All nations should enforce a high global minimum tax rate for multinational corporations.",
      "es": "Todos los países deben aplicar un tipo impositivo mínimo elevado a las multinacionales.",
      "de": "Alle Staaten sollten einen hohen globalen Mindeststeuersatz für Konzerne durchsetzen.",
      "ru": "Все страны должны ввести высокий минимальный налог для транснациональных корпораций.",
      "fr": "Tous les pays devraient instaurer un taux d'imposition mondial minimal élevé pour les multinationales."
    }
  },
  {
    "id": 21,
    "categoryKey": "taxation",
    "axis": "econ",
    "multiplier": 1,
    "isQuick": false,
    "text": {
      "pl": "Podatki i akcyza na paliwo oraz energię elektryczną powinny być drastycznie obniżone.",
      "en": "Taxes and duties on automotive fuel and electricity should be dramatically slashed.",
      "es": "Los impuestos sobre el combustible y la electricidad deben reducirse drásticamente.",
      "de": "Steuern und Abgaben auf Treibstoffe und Strom sollten drastisch gesenkt werden.",
      "ru": "Налоги и акцизы на топливо и электроэнергию должны быть значительно снижены.",
      "fr": "Les taxes et accises sur le carburant et l'électricité devraient être fortement diminuées."
    }
  },
  {
    "id": 22,
    "categoryKey": "taxation",
    "axis": "econ",
    "multiplier": -1,
    "isQuick": false,
    "text": {
      "pl": "Krótkoterminowe spekulacje giełdowe i handel walutami powinny być obciążone specjalnym podatkiem.",
      "en": "Short-term financial market speculation and currency trading should carry a dedicated transaction tax.",
      "es": "La especulación financiera y el comercio bursátil deben pagar un impuesto a las transacciones.",
      "de": "Kurzfristige Finanzspekulationen und Devisenhandel sollten mit einer Transaktionssteuer belegt werden.",
      "ru": "Краткосрочные биржевые спекуляции и валютные сделки должны облагаться специальным налогом.",
      "fr": "La spéculation boursière à court terme et le trading de devises devraient être taxés spécifiquement."
    }
  },
  {
    "id": 23,
    "categoryKey": "taxation",
    "axis": "econ",
    "multiplier": 1,
    "isQuick": false,
    "text": {
      "pl": "Podatek od zysków kapitałowych z oszczędności bankowych i akcji powinien zostać całkowicie zniesiony.",
      "en": "Capital gains taxes on bank savings and stock investments should be completely abolished.",
      "es": "El impuesto sobre las ganancias patrimoniales y ahorros bancarios debe ser suprimido.",
      "de": "Die Kapitalertragsteuer auf Bankeinlagen und Aktien sollte vollständig abgeschafft werden.",
      "ru": "Налог на доходы от банковских вкладов и инвестиций в акции должен быть полностью отменён.",
      "fr": "L'impôt sur les plus-values issues de l'épargne et des actions devrait être complètement aboli."
    }
  },
  {
    "id": 24,
    "categoryKey": "taxation",
    "axis": "econ",
    "multiplier": -1,
    "isQuick": false,
    "text": {
      "pl": "Państwo powinno nakładać dodatkowy podatek na nadzwyczajne zyski banków i koncernów paliwowych.",
      "en": "The state should levy a windfall tax on extraordinary profits of banks and energy giants.",
      "es": "El Estado debe gravar con un impuesto especial los beneficios extraordinarios de bancos y petroleras.",
      "de": "Der Staat sollte eine Übergewinnsteuer auf Sonderprofite von Banken und Energiekonzernen erheben.",
      "ru": "Государство должно взимать налог на сверхприбыль банков и энергетических гигантов.",
      "fr": "L'État devrait prélever une taxe sur les superprofits des banques et compagnies énergétiques."
    }
  },
  {
    "id": 25,
    "categoryKey": "taxation",
    "axis": "econ",
    "multiplier": 1,
    "isQuick": false,
    "text": {
      "pl": "Konkurencja podatkowa między państwami jest dobra, bo zmusza rządy do obniżania obciążeń obywateli.",
      "en": "Tax competition between countries is healthy because it forces governments to keep taxes low.",
      "es": "La competencia fiscal entre países es positiva porque obliga a los gobiernos a moderar impuestos.",
      "de": "Steuerwettbewerb zwischen Staaten ist gut, weil er Regierungen zwingt, Steuern niedrig zu halten.",
      "ru": "Налоговая конкуренция между странами полезна, так как заставляет государства снижать налоги.",
      "fr": "La concurrence fiscale entre pays est saine car elle oblige les gouvernements à réduire les impôts."
    }
  },
  {
    "id": 26,
    "categoryKey": "taxation",
    "axis": "econ",
    "multiplier": -1,
    "isQuick": false,
    "text": {
      "pl": "Ukrywanie dochodów w zagranicznych rajach podatkowych powinno być karane bezwzględnym więzieniem.",
      "en": "Hiding wealth in offshore tax havens should carry mandatory prison sentences.",
      "es": "Ocultar patrimonio en paraísos fiscales extranjeros debe castigarse con prisión efectiva.",
      "de": "Das Verstecken von Vermögen in Steueroasen sollte mit Gefängnisstrafen geahndet werden.",
      "ru": "Сокрытие доходов в офшорных налоговых гаванях должно караться реальным лишением свободы.",
      "fr": "La dissimulation d'avoirs dans des paradis fiscaux devrait être punie de peines de prison ferme."
    }
  },
  {
    "id": 27,
    "categoryKey": "taxation",
    "axis": "econ",
    "multiplier": 1,
    "isQuick": false,
    "text": {
      "pl": "Uproszczenie systemu i likwidacja ulg podatkowych jest lepsza niż programy socjalne.",
      "en": "Radical tax simplification without deductions is far better than costly welfare programs.",
      "es": "Simplificar los impuestos eliminando deducciones es mejor que gastar en ayudas sociales.",
      "de": "Ein radikal einfaches Steuersystem ohne Ausnahmen ist besser als teure Sozialprogramme.",
      "ru": "Упрощение налогов и ликвидация льгот лучше, чем дорогостоящие социальные программы.",
      "fr": "Simplifier la fiscalité en supprimant les niches est bien préférable à des programmes d'aide coûteux."
    }
  },
  {
    "id": 28,
    "categoryKey": "taxation",
    "axis": "econ",
    "multiplier": -1,
    "isQuick": false,
    "text": {
      "pl": "Właściciele wielu mieszkań kupowanych w celach spekulacyjnych powinni płacić progresywny podatek katastralny.",
      "en": "Owners of multiple residential properties bought for investment should pay a progressive property tax.",
      "es": "Los propietarios de múltiples viviendas de inversión deberían pagar un impuesto inmobiliario progresivo.",
      "de": "Besitzer mehrerer Immobilien als Spekulationsobjekte sollten eine progressive Immobiliensteuer zahlen.",
      "ru": "Владельцы нескольких инвестиционных квартир должны платить прогрессивный налог на недвижимость.",
      "fr": "Les propriétaires de multiples logements achetés pour spéculer devraient payer une taxe foncière progressive."
    }
  },
  {
    "id": 29,
    "categoryKey": "labor",
    "axis": "econ",
    "multiplier": 1,
    "isQuick": true,
    "text": {
      "pl": "Płaca minimalna powinna zostać zniesiona – stawki powinny zależeć wyłącznie od umowy pracownika z szefem.",
      "en": "The legal minimum wage should be abolished; pay should depend solely on mutual agreement.",
      "es": "El salario mínimo legal debería suprimirse; los sueldos deben fijarse por acuerdo entre las partes.",
      "de": "Der gesetzliche Mindestlohn sollte abgeschafft werden; Löhne sollten frei verhandelt werden.",
      "ru": "Минимальный размер оплаты труда должен быть отменён — зарплата должна определяться договором сторон.",
      "fr": "Le salaire minimum légal devrait être aboli ; la rémunération doit dépendre d'un accord mutuel."
    }
  },
  {
    "id": 30,
    "categoryKey": "labor",
    "axis": "econ",
    "multiplier": -1,
    "isQuick": true,
    "text": {
      "pl": "Ustawowy tydzień pracy powinien zostać skrócony do 4 dni bez żadnego obniżania pensji.",
      "en": "The standard working week should be reduced to four days with zero reduction in pay.",
      "es": "La semana laboral debería reducirse por ley a 4 días sin disminución de sueldo.",
      "de": "Die gesetzliche Arbeitswoche sollte ohne Lohneinbußen auf 4 Tage verkürzt werden.",
      "ru": "Рабочая неделя должна быть сокращена до 4 дней без снижения заработной платы.",
      "fr": "La semaine de travail devrait être légalement réduite à 4 jours sans diminution de salaire."
    }
  },
  {
    "id": 31,
    "categoryKey": "labor",
    "axis": "econ",
    "multiplier": 1,
    "isQuick": false,
    "text": {
      "pl": "Pracodawca powinien mieć prawo zwolnić pracownika w dowolnym momencie bez podawania przyczyn.",
      "en": "Employers should have the right to dismiss employees at will without stating a reason.",
      "es": "Los empleadores deben tener derecho a rescindir contratos sin necesidad de justificación.",
      "de": "Arbeitgeber sollten das Recht haben, Mitarbeiter jederzeit ohne Angabe von Gründen zu kündigen.",
      "ru": "Работодатель должен иметь право уволить сотрудника в любой момент без объяснения причин.",
      "fr": "Un employeur devrait pouvoir licencier un salarié à tout moment sans avoir à justifier de motif."
    }
  },
  {
    "id": 32,
    "categoryKey": "labor",
    "axis": "econ",
    "multiplier": -1,
    "isQuick": false,
    "text": {
      "pl": "Związki zawodowe powinny mieć prawo weta wobec decyzji firm o masowych zwolnieniach pracowników.",
      "en": "Labor unions should possess legal veto power over corporate mass layoffs.",
      "es": "Los sindicatos deberían tener derecho a vetar despidos colectivos en las empresas.",
      "de": "Gewerkschaften sollten ein gesetzliches Vetorecht gegen Massenentlassungen erhalten.",
      "ru": "Профсоюзы должны иметь право вето на решения компаний о массовых увольнениях.",
      "fr": "Les syndicats devraient disposer d'un droit de veto légal sur les licenciements collectifs."
    }
  },
  {
    "id": 33,
    "categoryKey": "labor",
    "axis": "econ",
    "multiplier": 1,
    "isQuick": false,
    "text": {
      "pl": "Strajki paraliżujące transport publiczny, koleje i szpitale powinny być prawnie zakazane.",
      "en": "Strikes that shut down public transit, railways, or hospitals should be legally outlawed.",
      "es": "Las huelgas que paralizan el transporte público o los hospitales deberían estar prohibidas.",
      "de": "Streiks, die den öffentlichen Nahverkehr oder Krankenhäuser lahmlegen, sollten verboten werden.",
      "ru": "Забастовки, парализующие общественный транспорт и больницы, должны быть запрещены законом.",
      "fr": "Les grèves qui paralysent les transports publics ou les hôpitaux devraient être interdites."
    }
  },
  {
    "id": 34,
    "categoryKey": "labor",
    "axis": "econ",
    "multiplier": -1,
    "isQuick": false,
    "text": {
      "pl": "Pracownicy powinni mieć zagwarantowane miejsca w zarządach i radach nadzorczych dużych korporacji.",
      "en": "Employees should have guaranteed seats on corporate management and supervisory boards.",
      "es": "Los trabajadores deberían tener representación obligatoria en los consejos de administración.",
      "de": "Arbeitnehmer sollten garantierte Sitze in den Vorständen und Aufsichtsräten von Konzernen haben.",
      "ru": "Работникам должны быть гарантированы места в советах директоров крупных корпораций.",
      "fr": "Les salariés devraient avoir des sièges garantis au sein des conseils d'administration."
    }
  },
  {
    "id": 35,
    "categoryKey": "labor",
    "axis": "econ",
    "multiplier": 1,
    "isQuick": false,
    "text": {
      "pl": "Zatrudnianie nowych pracowników w miejsce strajkujących powinno być w pełni dozwolone.",
      "en": "Hiring permanent replacement workers during a strike should be completely legal.",
      "es": "Contratar trabajadores para sustituir a huelguistas debería ser plenamente legal.",
      "de": "Die Einstellung von Ersatzarbeitskräften während eines Streiks sollte legal sein.",
      "ru": "Наём новых сотрудников взамен бастующих должен быть полностью разрешён законом.",
      "fr": "Embaucher de nouveaux salariés pour remplacer des grévistes devrait être tout à fait légal."
    }
  },
  {
    "id": 36,
    "categoryKey": "labor",
    "axis": "econ",
    "multiplier": -1,
    "isQuick": false,
    "text": {
      "pl": "Firmy zastępujące pracowników robotami lub sztuczną inteligencją powinny płacić podatek od automatyzacji.",
      "en": "Companies replacing workers with robots or AI should pay an automation tax.",
      "es": "Las empresas que reemplazan humanos por robots o IA deberían pagar un impuesto a la automatización.",
      "de": "Unternehmen, die Mitarbeiter durch Roboter oder KI ersetzen, sollten eine Automatisierungssteuer zahlen.",
      "ru": "Компании, заменяющие людей роботами и ИИ, должны платить специальный налог на автоматизацию.",
      "fr": "Les entreprises remplaçant des humains par des robots ou l'IA devraient payer une taxe sur l'automatisation."
    }
  },
  {
    "id": 37,
    "categoryKey": "labor",
    "axis": "econ",
    "multiplier": 1,
    "isQuick": false,
    "text": {
      "pl": "Elastyczne umowy zlecenia dają ludziom potrzebną swobodę i nie powinny być ograniczane.",
      "en": "Flexible freelance and gig contracts offer vital freedom and should not be restricted.",
      "es": "Los contratos flexibles y freelance ofrecen libertad y no deben limitarse por ley.",
      "de": "Flexible Honorar- und Werkverträge bieten Freiheit und sollten nicht reglementiert werden.",
      "ru": "Гибкие договоры подряда и фриланса дают свободу и не должны ограничиваться государством.",
      "fr": "Les contrats flexibles et le travail indépendant offrent une liberté précieuse et ne doivent pas être restreints."
    }
  },
  {
    "id": 38,
    "categoryKey": "labor",
    "axis": "econ",
    "multiplier": -1,
    "isQuick": false,
    "text": {
      "pl": "Kierowcy aplikacji przewozowych i kurierzy powinni mieć obowiązkowe pełne etaty z ubezpieczeniem.",
      "en": "App delivery couriers and ride-share drivers must be granted full employee status and benefits.",
      "es": "Los repartidores y conductores de plataformas deben ser contratados como empleados fijos.",
      "de": "Lieferkuriere und Plattformfahrer müssen gesetzlich als Festangestellte abgesichert werden.",
      "ru": "Курьеры и водители онлайн-сервисов должны обязательно оформляться в штат с полной страховкой.",
      "fr": "Les livreurs et chauffeurs d'applications devraient obligatoirement être salariés en CDI avec mutuelle."
    }
  },
  {
    "id": 39,
    "categoryKey": "labor",
    "axis": "econ",
    "multiplier": 1,
    "isQuick": false,
    "text": {
      "pl": "Przynależność do związków zawodowych i płacenie składek musi być całkowicie dobrowolne.",
      "en": "Trade union membership and union dues must be strictly voluntary for every worker.",
      "es": "La afiliación sindical y el pago de cuotas deben ser estrictamente voluntarios.",
      "de": "Gewerkschaftsmitgliedschaft und Beiträge müssen für jeden Beschäftigten absolut freiwillig sein.",
      "ru": "Членство в профсоюзах и уплата взносов должны быть исключительно добровольными.",
      "fr": "L'adhésion syndicale et le paiement des cotisations doivent être strictement facultatifs."
    }
  },
  {
    "id": 40,
    "categoryKey": "labor",
    "axis": "econ",
    "multiplier": -1,
    "isQuick": false,
    "text": {
      "pl": "Rząd powinien bezwzględnie zakazać pracy w nadgodzinach powyżej 48 godzin w tygodniu.",
      "en": "The government should enforce a strict ban on working more than 48 hours per week including overtime.",
      "es": "El gobierno debe prohibir tajantemente superar las 48 horas semanales sumando horas extra.",
      "de": "Die Regierung sollte Überstunden über 48 Wochenstunden hinaus ausnahmslos verbieten.",
      "ru": "Правительство должно категорически запретить переработки свыше 48 часов в неделю.",
      "fr": "Le gouvernement devrait interdire formellement toute semaine dépassant 48 heures heures sup comprises."
    }
  },
  {
    "id": 41,
    "categoryKey": "labor",
    "axis": "econ",
    "multiplier": 1,
    "isQuick": false,
    "text": {
      "pl": "Stawki wynagrodzeń za pracę w niedziele i w nocy powinny zależeć od umowy, a nie od państwowych nakazów.",
      "en": "Pay rates for working Sundays and nights should be negotiated freely, not mandated by state law.",
      "es": "La remuneración por turnos nocturnos o dominicales debe fijarse por acuerdo libre, no por ley.",
      "de": "Zuschläge für Nacht- und Sonntagsarbeit sollten frei ausgehandelt werden statt gesetzlich vorgegeben.",
      "ru": "Доплаты за работу в ночные смены и выходные должны определяться договором, а не законом.",
      "fr": "Les majorations pour le travail de nuit et le dimanche devraient relever du contrat, pas de la loi."
    }
  },
  {
    "id": 42,
    "categoryKey": "welfare",
    "axis": "econ",
    "multiplier": 1,
    "isQuick": true,
    "text": {
      "pl": "Prywatne indywidualne konta emerytalne zabezpieczają starość lepiej niż państwowy ZUS.",
      "en": "Private personal pension accounts secure old age far better than state-run retirement systems.",
      "es": "Los planes de pensiones privados garantizan la jubilación mejor que el sistema público estatal.",
      "de": "Private Altersvorsorgekonten sichern das Alter verlässlicher ab als die staatliche Rentenkasse.",
      "ru": "Частные накопительные пенсионные счета защищают старость надёжнее государственного пенсионного фонда.",
      "fr": "Les comptes de retraite privés garantissent les vieux jours bien mieux que le système public par répartition."
    }
  },
  {
    "id": 43,
    "categoryKey": "welfare",
    "axis": "econ",
    "multiplier": -1,
    "isQuick": true,
    "text": {
      "pl": "Każdy dorosły obywatel powinien otrzymywać comiesięczny bezwarunkowy Dochód Podstawowy od państwa.",
      "en": "Every adult citizen should receive a regular Universal Basic Income from the state.",
      "es": "Todo ciudadano adulto debería recibir un Ingreso Básico Universal incondicional del Estado.",
      "de": "Jeder erwachsene Bürger sollte ein bedingungsloses Grundeinkommen vom Staat erhalten.",
      "ru": "Каждый взрослый гражданин должен получать ежемесячный безусловный базовый доход от государства.",
      "fr": "Chaque citoyen adulte devrait recevoir un Revenu de Base Inconditionnel de la part de l'État."
    }
  },
  {
    "id": 44,
    "categoryKey": "welfare",
    "axis": "econ",
    "multiplier": 1,
    "isQuick": true,
    "text": {
      "pl": "Czynsze wynajmu mieszkań powinien ustalać wolny rynek, a nie urzędowe limity.",
      "en": "Apartment rental prices should be set entirely by the free market, not by government rent caps.",
      "es": "El precio de los alquileres de vivienda debe fijarlo el mercado libre, no topes estatales.",
      "de": "Mietpreise sollten rein durch Angebot und Nachfrage bestimmt werden, nicht durch Mietpreisbremsen.",
      "ru": "Цены на аренду жилья должен определять свободный рынок, а не государственные лимиты.",
      "fr": "Le prix des loyers devrait être fixé uniquement par le marché libre et non par l'encadrement des loyers."
    }
  },
  {
    "id": 45,
    "categoryKey": "welfare",
    "axis": "econ",
    "multiplier": -1,
    "isQuick": true,
    "text": {
      "pl": "Rząd i samorządy powinny masowo budować tanie mieszkania na wynajem za publiczne pieniądze.",
      "en": "Governments should build vast numbers of affordable public rental homes with taxpayer money.",
      "es": "Las administraciones públicas deben construir masivamente viviendas asequibles de alquiler.",
      "de": "Der Staat sollte in großem Stil bezahlbare Sozialwohnungen aus Steuermitteln errichten.",
      "ru": "Государство должно массово строить доступное арендное жильё за счёт бюджета.",
      "fr": "Les pouvoirs publics devraient construire massivement des logements sociaux à loyer modéré."
    }
  },
  {
    "id": 46,
    "categoryKey": "welfare",
    "axis": "econ",
    "multiplier": 1,
    "isQuick": false,
    "text": {
      "pl": "Zasiłki socjalne powinny przysługiwać wyłącznie osobom, które aktywnie szukają zatrudnienia.",
      "en": "Welfare benefits should only be paid to individuals who are actively looking for work.",
      "es": "Las ayudas de desempleo deben reservarse a quienes buscan trabajo activamente.",
      "de": "Sozialleistungen sollten nur an Personen gezahlt werden, die sich aktiv um Arbeit bemühen.",
      "ru": "Социальные пособия должны выплачиваться только тем, кто активно ищет работу.",
      "fr": "Les allocations chômage ne devraient être versées qu'aux personnes qui cherchent activement un emploi."
    }
  },
  {
    "id": 47,
    "categoryKey": "welfare",
    "axis": "econ",
    "multiplier": -1,
    "isQuick": false,
    "text": {
      "pl": "Leczenie szpitalne, operacje i leki ratujące życie powinny być całkowicie bezpłatne dla każdego.",
      "en": "Hospital care, major surgeries, and life-saving medications should be completely free for everyone.",
      "es": "La atención hospitalaria, operaciones y fármacos vitales deben ser totalmente gratuitos.",
      "de": "Krankenhausbehandlungen, Operationen und lebenswichtige Medikamente müssen für alle kostenlos sein.",
      "ru": "Лечение в больницах, операции и жизненно важные лекарства должны быть полностью бесплатными для всех.",
      "fr": "Les soins hospitaliers, opérations et médicaments vitaux devraient être entièrement gratuits pour tous."
    }
  },
  {
    "id": 48,
    "categoryKey": "welfare",
    "axis": "econ",
    "multiplier": 1,
    "isQuick": false,
    "text": {
      "pl": "Konkurencja prywatnych firm ubezpieczeniowych zapewnia lepszą ochronę zdrowia niż państwowy monopol.",
      "en": "Private insurance competition delivers better healthcare quality than a state monopoly.",
      "es": "La competencia entre seguros de salud privados da mejor servicio que un monopolio público.",
      "de": "Wettbewerb privater Krankenversicherer sorgt für bessere Medizin als ein staatliches Monopol.",
      "ru": "Конкуренция частных медицинских страховок обеспечивает лучшее качество, чем государственная монополия.",
      "fr": "La concurrence entre assurances privées assure de meilleurs soins que le monopole public de santé."
    }
  },
  {
    "id": 49,
    "categoryKey": "welfare",
    "axis": "econ",
    "multiplier": -1,
    "isQuick": false,
    "text": {
      "pl": "Państwo powinno zagwarantować bezpłatne żłobki i przedszkola dla wszystkich dzieci.",
      "en": "The state should guarantee free nursery and kindergarten places for all young children.",
      "es": "El Estado debe garantizar guarderías infantiles totalmente gratuitas para todos los niños.",
      "de": "Der Staat sollte kostenfreie Kitas und Kindergärten für ausnahmslos alle Kinder bereitstellen.",
      "ru": "Государство должно гарантировать бесплатные ясли и детские сады для всех детей.",
      "fr": "L'État devrait garantir des places gratuites en crèche et école maternelle pour tous les enfants."
    }
  },
  {
    "id": 50,
    "categoryKey": "welfare",
    "axis": "econ",
    "multiplier": 1,
    "isQuick": false,
    "text": {
      "pl": "Pobieranie zasiłków powinno być ograniczone w czasie, by nie zniechęcać ludzi do powrotu na rynek pracy.",
      "en": "Welfare benefits should have strict time limits to prevent long-term dependency on the state.",
      "es": "Las ayudas sociales deben tener un límite de tiempo estricto para evitar la dependencia.",
      "de": "Sozialhilfe sollte zeitlich begrenzt werden, um Dauerabhängigkeit vom Staat zu verhindern.",
      "ru": "Получение пособий должно быть ограничено по времени, чтобы не порождать иждивенчество.",
      "fr": "Les allocations d'aide devraient avoir une durée limitée pour éviter l'assistance permanente."
    }
  },
  {
    "id": 51,
    "categoryKey": "welfare",
    "axis": "econ",
    "multiplier": -1,
    "isQuick": false,
    "text": {
      "pl": "Fundusze inwestycyjne skupujące setki mieszkań na wynajem powinny zostać objęte zakazem takich zakupów.",
      "en": "Corporate investment funds buying up vast portfolios of rental housing should be legally banned.",
      "es": "Debería prohibirse por ley que grandes fondos de inversión compren masivamente viviendas residenciales.",
      "de": "Investmentfonds, die massenhaft Wohnungen aufkaufen, sollten gesetzlich gestoppt werden.",
      "ru": "Инвестиционным фондам должно быть законодательно запрещено скупать целые жилые кварталы.",
      "fr": "Il devrait être interdit aux fonds d'investissement d'acheter en masse des parcs entiers de logements."
    }
  },
  {
    "id": 52,
    "categoryKey": "welfare",
    "axis": "econ",
    "multiplier": 1,
    "isQuick": false,
    "text": {
      "pl": "Studia wyższe powinny być płatne i finansowane pożyczkami spłacanymi dopiero po znalezieniu pracy.",
      "en": "University tuition should be paid by students via income-contingent loans repaid after graduation.",
      "es": "La universidad debería costearse con matrículas y préstamos reembolsables al conseguir empleo.",
      "de": "Das Hochschulstudium sollte gebührenpflichtig sein und über nachgelagerte Kredite finanziert werden.",
      "ru": "Высшее образование должно быть платным, финансируемым кредитами с выплатой после трудоустройства.",
      "fr": "Les études supérieures devraient être payantes et financées par des prêts remboursés après embauche."
    }
  },
  {
    "id": 53,
    "categoryKey": "welfare",
    "axis": "econ",
    "multiplier": -1,
    "isQuick": false,
    "text": {
      "pl": "Państwo powinno zapewnić bezpłatne, ciepłe obiady wszystkim uczniom w szkołach publicznych.",
      "en": "The state should provide free, nutritious warm lunches to every student in public schools.",
      "es": "El Estado debe ofrecer comedores escolares gratuitos y comidas calientes a todos los alumnos.",
      "de": "Der Staat sollte jedem Schüler an öffentlichen Schulen ein kostenloses warmes Mittagessen bereitstellen.",
      "ru": "Государство должно обеспечивать бесплатные горячие обеды всем учащимся государственных школ.",
      "fr": "L'État devrait fournir des repas chauds et équilibrés gratuits à tous les élèves des écoles publiques."
    }
  },
  {
    "id": 54,
    "categoryKey": "welfare",
    "axis": "econ",
    "multiplier": -1,
    "isQuick": false,
    "text": {
      "pl": "Pracownicy wykonujący ciężką pracę fizyczną powinni mieć prawo do wcześniejszej emerytury państwowej.",
      "en": "Workers performing hazardous or strenuous physical labor should have the right to retire early on state pensions.",
      "es": "Quienes realizan trabajos físicos pesados o peligrosos deben poder jubilarse antes con pensión pública.",
      "de": "Arbeitnehmer mit schwerer körperlicher Arbeit sollten das Recht auf einen früheren Renteneintritt haben.",
      "ru": "Работники тяжёлого физического труда должны иметь право на досрочную государственную пенсию.",
      "fr": "Les travailleurs exerçant des métiers physiques pénibles devraient avoir droit à une retraite anticipée payée par l'État."
    }
  },
  {
    "id": 55,
    "categoryKey": "regulation",
    "axis": "econ",
    "multiplier": 1,
    "isQuick": true,
    "text": {
      "pl": "Większość państwowych licencji i zezwoleń zawodowych to zbędna biurokracja utrudniająca pracę.",
      "en": "Most government occupational licenses and permits are useless red tape stifling workers.",
      "es": "La mayoría de las licencias profesionales obligatorias son trabas burocráticas innecesarias.",
      "de": "Die meisten staatlichen Berufszulassungen und Lizenzen sind überflüssige Bürokratie.",
      "ru": "Большинство государственных лицензий и разрешений на профессии — ненужная бюрократия.",
      "fr": "La plupart des licences professionnelles et permis d'exercer ne sont que de la bureaucratie inutile."
    }
  },
  {
    "id": 56,
    "categoryKey": "regulation",
    "axis": "econ",
    "multiplier": -1,
    "isQuick": true,
    "text": {
      "pl": "Rząd powinien ustawowo ograniczyć zarobki prezesów do ustalonej wielokrotności pensji pracownika.",
      "en": "The government should cap CEO compensation to a strict multiple of their lowest-paid employee's wage.",
      "es": "El gobierno debe limitar por ley los sueldos de los directores a un múltiplo del salario base de la plantilla.",
      "de": "Managergehälter sollten gesetzlich an ein festgelegtes Vielfaches des niedrigsten Mitarbeiterlohns gekoppelt werden.",
      "ru": "Правительство должно ограничить зарплаты топ-менеджеров фиксированным коэффициентом от оклада рабочего.",
      "fr": "Le gouvernement devrait plafonner les salaires des PDG à un multiple fixé du salaire moyen de l'entreprise."
    }
  },
  {
    "id": 57,
    "categoryKey": "regulation",
    "axis": "econ",
    "multiplier": 1,
    "isQuick": false,
    "text": {
      "pl": "Prywatne firmy kurierskie i paczkomaty powinny móc w pełni zastąpić państwową pocztę.",
      "en": "Private courier firms and automated parcel lockers should be free to completely replace the state postal service.",
      "es": "Las empresas de mensajería privada y casilleros deben poder reemplazar por completo al correo estatal.",
      "de": "Private Paketdienste und Abholstationen sollten die staatliche Post komplett ablösen dürfen.",
      "ru": "Частные курьерские службы и постаматы должны иметь возможность полностью заменить государственную почту.",
      "fr": "Les services de livraison privés et casiers automatisés devraient pouvoir remplacer totalement la poste d'État."
    }
  },
  {
    "id": 58,
    "categoryKey": "regulation",
    "axis": "econ",
    "multiplier": -1,
    "isQuick": false,
    "text": {
      "pl": "Państwo powinno nałożyć specjalny podatek obrotowy na zagraniczne hipermarkety, by chronić małe sklepiki.",
      "en": "The state should impose special turnover taxes on big supermarket chains to protect mom-and-pop stores.",
      "es": "El Estado debe gravar a las grandes cadenas de supermercados para proteger el comercio de barrio.",
      "de": "Der Staat sollte Supermarktketten sonderbesteuern, um lokale Tante-Emma-Läden zu schützen.",
      "ru": "Государство должно ввести специальный налог на крупные торговые сети для защиты малого бизнеса.",
      "fr": "L'État devrait imposer une taxe spéciale sur les hypermarchés pour préserver le petit commerce de proximité."
    }
  },
  {
    "id": 59,
    "categoryKey": "regulation",
    "axis": "econ",
    "multiplier": 1,
    "isQuick": false,
    "text": {
      "pl": "Aplikacje przewozowe (np. Uber) powinny działać swobodnie bez licencji korporacji taksówkarskich.",
      "en": "Ride-hailing apps like Uber should operate freely without restrictive traditional taxi licenses.",
      "es": "Las aplicaciones de transporte como Uber deben operar sin las trabas de las licencias del taxi tradicional.",
      "de": "Fahrdienst-Apps wie Uber sollten ohne restriktive Taxilizenzen frei operieren dürfen.",
      "ru": "Сервисы такси через приложения (вроде Uber) должны работать без ограничительных лицензий классических таксопарков.",
      "fr": "Les applications VTC comme Uber devraient pouvoir opérer librement sans les licences strictes des taxis traditionnels."
    }
  },
  {
    "id": 60,
    "categoryKey": "regulation",
    "axis": "econ",
    "multiplier": -1,
    "isQuick": false,
    "text": {
      "pl": "Maksymalne marże i oprocentowanie kredytów bankowych powinny być ściśle ograniczone przez prawo.",
      "en": "Bank loan interest rates and lending profit margins should be capped by strict legal ceilings.",
      "es": "Los intereses y comisiones de los préstamos bancarios deben estar limitados por leyes estrictas.",
      "de": "Bankzinsen und Kreditgebühren sollten gesetzlich mit verbindlichen Höchstgrenzen gedeckelt werden.",
      "ru": "Процентные ставки по банковским кредитам и наценки должны быть жестко ограничены законом.",
      "fr": "Les taux d'intérêt et marges des crédits bancaires devraient être encadrés par des plafonds légaux stricts."
    }
  },
  {
    "id": 61,
    "categoryKey": "regulation",
    "axis": "econ",
    "multiplier": 1,
    "isQuick": false,
    "text": {
      "pl": "Pozwolenia na budowę domów jednorodzinnych powinny zostać zastąpione prostym zgłoszeniem bez uznaniowości urzędników.",
      "en": "Building permits for single-family houses should be replaced by a simple notification without bureaucrat discretion.",
      "es": "Las licencias de obras para viviendas unifamiliares deberían sustituirse por una simple declaración responsable.",
      "de": "Baugenehmigungen für Einfamilienhäuser sollten durch eine einfache Bauanzeige ohne Amtswillkür ersetzt werden.",
      "ru": "Разрешения на строительство частных домов должны быть заменены простым уведомлением без произвола чиновников.",
      "fr": "Les permis de construire pour maisons individuelles devraient être remplacés par une simple déclaration préalable."
    }
  },
  {
    "id": 62,
    "categoryKey": "regulation",
    "axis": "econ",
    "multiplier": -1,
    "isQuick": false,
    "text": {
      "pl": "Reklamy alkoholu, hazardu i fast foodów powinny być całkowicie zakazane w telewizji i internecie.",
      "en": "Commercial advertising of alcohol, gambling, and junk food should be completely banned.",
      "es": "La publicidad de bebidas alcohólicas, apuestas y comida basura debe prohibirse totalmente.",
      "de": "Werbung für Alkohol, Glücksspiel und ungesundes Fast Food sollte komplett verboten werden.",
      "ru": "Реклама алкоголя, азартных игр и фастфуда должна быть полностью запрещена в СМИ и интернете.",
      "fr": "La publicité pour l'alcool, les jeux d'argent et la malbouffe devrait être totalement interdite."
    }
  },
  {
    "id": 63,
    "categoryKey": "regulation",
    "axis": "econ",
    "multiplier": 1,
    "isQuick": false,
    "text": {
      "pl": "Prywatne laboratoria powinny móc testować innowacyjne leki bez wieloletnich procedur urzędowych.",
      "en": "Private biotech labs should be allowed to fast-track novel medicine testing without years of bureaucracy.",
      "es": "Los laboratorios privados deberían poder probar fármacos sin años de trámites burocráticos.",
      "de": "Biotech-Labore sollten innovative Medikamente ohne jahrelange bürokratische Hürden testen dürfen.",
      "ru": "Частные лаборатории должны иметь возможность тестировать инновационные лекарства без многолетней волокиты.",
      "fr": "Les laboratoires privés devraient pouvoir tester de nouveaux médicaments sans des années d'attente administrative."
    }
  },
  {
    "id": 64,
    "categoryKey": "regulation",
    "axis": "econ",
    "multiplier": -1,
    "isQuick": false,
    "text": {
      "pl": "Lasy państwowe i tereny przyrodnicze nie mogą być w żadnym wypadku sprzedawane prywatnym firmom.",
      "en": "Public state forests and protected natural lands must never be sold off to private commercial interests.",
      "es": "Los bosques públicos y reservas naturales jamás deben venderse a intereses comerciales privados.",
      "de": "Staatswald und Naturschutzgebiete dürfen unter keinen Umständen an private Firmen verkauft werden.",
      "ru": "Государственные леса и природные заповедники ни при каких условиях не должны продаваться частникам.",
      "fr": "Les forêts publiques et réserves naturelles ne doivent en aucun cas être vendues à des entreprises privées."
    }
  },
  {
    "id": 65,
    "categoryKey": "regulation",
    "axis": "econ",
    "multiplier": 1,
    "isQuick": false,
    "text": {
      "pl": "Ceny biletów lotniczych i kolejowych powinny zależeć wyłącznie od popytu i wolnego rynku.",
      "en": "Airline and rail ticket pricing should be determined entirely by free-market dynamic pricing.",
      "es": "Los billetes de avión y tren deben cotizarse libremente por la oferta y demanda del mercado.",
      "de": "Preise für Flug- und Bahntickets sollten ausschließlich dem freien Spiel der Marktkräfte überlassen sein.",
      "ru": "Цены на авиабилеты и поезда должны определяться исключительно рыночным спросом.",
      "fr": "Les tarifs des billets d'avion et de train devraient dépendre exclusivement de l'offre et de la demande."
    }
  },
  {
    "id": 66,
    "categoryKey": "regulation",
    "axis": "econ",
    "multiplier": -1,
    "isQuick": false,
    "text": {
      "pl": "Państwo powinno odgórnie kontrolować ceny lekarstw, by korporacje farmaceutyczne nie zawyżały marż.",
      "en": "The state should strictly regulate prescription drug prices to prevent price-gouging by Big Pharma.",
      "es": "El Estado debe regular los precios de los medicamentos para frenar abusos de las farmacéuticas.",
      "de": "Der Staat sollte Medikamentenpreise festlegen, um Wucherpreise von Pharmakonzernen zu verhindern.",
      "ru": "Государство должно жестко регулировать цены на лекарства, чтобы фармкомпании не завышали наценки.",
      "fr": "L'État devrait contrôler strictement le prix des médicaments pour empêcher les marges excessives des labos."
    }
  },
  {
    "id": 67,
    "categoryKey": "regulation",
    "axis": "econ",
    "multiplier": 1,
    "isQuick": false,
    "text": {
      "pl": "Prywatne uczelnie i szkoły niepubliczne powinny cieszyć się pełną swobodą układania programów nauczania.",
      "en": "Private universities and independent schools should enjoy full freedom to set their own curriculum.",
      "es": "Los centros educativos privados deberían tener total libertad para fijar sus planes de estudio.",
      "de": "Freie Schulen und Privatuniversitäten sollten volle Autonomie bei ihren Lehrplänen besitzen.",
      "ru": "Частные вузы и школы должны иметь полную свободу в составлении учебных программ без вмешательства государства.",
      "fr": "Les écoles et universités privées devraient être totalement libres d'établir leurs propres programmes scolaires."
    }
  },
  {
    "id": 68,
    "categoryKey": "trade",
    "axis": "econ",
    "multiplier": 1,
    "isQuick": true,
    "text": {
      "pl": "Swobodny handel międzynarodowy bez ceł i barier przynosi korzyści wszystkim narodom.",
      "en": "Free international trade without tariffs or trade barriers benefits all nations.",
      "es": "El libre comercio internacional sin aranceles ni barreras beneficia a todas las naciones.",
      "de": "Freier internationaler Handel ohne Zölle und Barrieren nützt allen beteiligten Nationen.",
      "ru": "Свободная международная торговля без пошлин и барьеров выгодна всем народам.",
      "fr": "Le libre-échange international sans droits de douane ni barrières profite à toutes les nations."
    }
  },
  {
    "id": 69,
    "categoryKey": "trade",
    "axis": "econ",
    "multiplier": -1,
    "isQuick": true,
    "text": {
      "pl": "Wysokie cła na importowane towary są konieczne, by chronić rodzimych rolników i fabryki.",
      "en": "High import tariffs are essential to shield domestic farmers and manufacturing from foreign rivals.",
      "es": "Los aranceles a la importación son indispensables para proteger a los agricultores e industrias locales.",
      "de": "Hohe Schutzzölle sind notwendig, um heimische Bauern und Industriebetriebe zu schützen.",
      "ru": "Высокие пошлины на импорт необходимы для защиты отечественных фермеров и фабрик.",
      "fr": "Des droits de douane élevés sont nécessaires pour protéger nos agriculteurs et usines de la concurrence."
    }
  },
  {
    "id": 70,
    "categoryKey": "trade",
    "axis": "econ",
    "multiplier": 1,
    "isQuick": false,
    "text": {
      "pl": "Kapitał i inwestycje zagraniczne powinny swobodnie przepływać przez granice bez kontroli rządu.",
      "en": "Foreign capital and business investments should flow across borders without government vetoes.",
      "es": "El capital y las inversiones extranjeras deben circular entre fronteras sin trabas gubernamentales.",
      "de": "Ausländisches Kapital und Investitionen sollten ungehindert ohne staatliche Kontrollen fließen dürfen.",
      "ru": "Иностранный капитал и инвестиции должны свободно перемещаться через границы без вмешательства правительства.",
      "fr": "Les capitaux et investissements étrangers devraient pouvoir traverser les frontières sans contrôle étatique."
    }
  },
  {
    "id": 71,
    "categoryKey": "trade",
    "axis": "econ",
    "multiplier": -1,
    "isQuick": false,
    "text": {
      "pl": "Rządy powinny przymusowo podzielić monopolistyczne giganty technologiczne (np. Google, Apple).",
      "en": "Antitrust regulators should forcibly break up monopolistic Big Tech giants (e.g. Google, Apple).",
      "es": "Los gobiernos deberían fragmentar forzosamente a los gigantes tecnológicos monopolísticos.",
      "de": "Kartellbehörden sollten marktbeherrschende Tech-Giganten wie Google oder Apple zerschlagen.",
      "ru": "Государства должны принудительно разделить монопольные технологические гиганты (вроде Google, Apple).",
      "fr": "Les autorités devraient démanteler de force les géants technologiques monopolistes (Google, Apple)."
    }
  },
  {
    "id": 72,
    "categoryKey": "trade",
    "axis": "econ",
    "multiplier": 1,
    "isQuick": false,
    "text": {
      "pl": "Zagraniczne firmy powinny płacić dokładnie takie same podatki jak krajowe, bez faworyzowania rodzimych.",
      "en": "Foreign companies should pay the exact same tax rates as domestic ones without local protectionism.",
      "es": "Las empresas extranjeras deben tributar al mismo tipo que las nacionales sin discriminaciones.",
      "de": "Ausländische Unternehmen sollten exakt dieselben Steuersätze zahlen wie inländische Betriebe.",
      "ru": "Иностранные компании должны облагаться налогами наравне с отечественными, без протекционизма.",
      "fr": "Les entreprises étrangères devraient être soumises aux mêmes règles fiscales que les nationales, sans favoritisme."
    }
  },
  {
    "id": 73,
    "categoryKey": "trade",
    "axis": "econ",
    "multiplier": -1,
    "isQuick": false,
    "text": {
      "pl": "Produkcja leków, stali i amunicji musi pozostać w kraju, nawet jeśli za granicą jest znacznie tańsza.",
      "en": "Manufacturing of medicines, steel, and munitions must stay domestic even if foreign imports are cheaper.",
      "es": "La producción de medicamentos, acero y munición debe ser nacional aunque importarla sea más barato.",
      "de": "Die Produktion von Arzneimitteln, Stahl und Munition muss im Land bleiben, auch wenn Importe billiger sind.",
      "ru": "Производство медикаментов, стали и боеприпасов должно быть в стране, даже если импорт дешевле.",
      "fr": "La production de médicaments, d'acier et de munitions doit rester nationale même si l'importation coûte moins cher."
    }
  },
  {
    "id": 74,
    "categoryKey": "trade",
    "axis": "econ",
    "multiplier": 1,
    "isQuick": false,
    "text": {
      "pl": "Import tańszej żywności z zagranicy jest dobry dla konsumentów, bo obniża codzienne rachunki.",
      "en": "Importing cheaper foreign food is good for citizens because it lowers their household grocery bills.",
      "es": "Importar alimentos baratos del extranjero beneficia a las familias al abaratar la cesta de la compra.",
      "de": "Der Import günstigerer Lebensmittel hilft Verbrauchern, da er die täglichen Lebenshaltungskosten senkt.",
      "ru": "Импорт доступных продуктов питания полезен, так как он снижает повседневные расходы граждан.",
      "fr": "L'importation de denrées alimentaires moins chères est une bonne chose car elle réduit le budget des ménages."
    }
  },
  {
    "id": 75,
    "categoryKey": "trade",
    "axis": "econ",
    "multiplier": -1,
    "isQuick": false,
    "text": {
      "pl": "Porty morskie, lotniska i sieci 5G nie mogą być w żadnym wypadku sprzedawane zagranicznym inwestorom.",
      "en": "Strategic seaports, airports, and 5G telecom grids must never be sold to foreign investors.",
      "es": "Los puertos marítimos, aeropuertos y redes 5G jamás deben venderse a inversores foráneos.",
      "de": "Seehäfen, Flughäfen und 5G-Netze dürfen keinesfalls an ausländische Investoren veräußert werden.",
      "ru": "Морские порты, аэропорты и сети связи 5G ни в коем случае нельзя продавать иностранным инвесторам.",
      "fr": "Les ports maritimes, aéroports et réseaux 5G ne doivent en aucun cas être cédés à des capitaux étrangers."
    }
  },
  {
    "id": 76,
    "categoryKey": "trade",
    "axis": "econ",
    "multiplier": 1,
    "isQuick": false,
    "text": {
      "pl": "Globalizacja i otwarte rynki handlowe wyciągnęły setki milionów ludzi na świecie z ubóstwa.",
      "en": "Global trade integration has lifted hundreds of millions of people worldwide out of poverty.",
      "es": "La globalización y el comercio abierto han sacado de la miseria a cientos de millones de personas.",
      "de": "Globalisierung und freie Märkte haben weltweit Hunderte Millionen Menschen aus bitterer Armut befreit.",
      "ru": "Глобализация и открытая торговля вывели сотни миллионов людей по всему миру из нищеты.",
      "fr": "La mondialisation et l'ouverture des marchés ont sorti de la pauvreté des centaines de millions d'individus."
    }
  },
  {
    "id": 77,
    "categoryKey": "trade",
    "axis": "econ",
    "multiplier": -1,
    "isQuick": false,
    "text": {
      "pl": "Finansowa spekulacja cenami pszenicy i surowców rolnych na giełdach powinna być surowo zabroniona.",
      "en": "Financial speculation on wheat, grain, and agricultural food commodities should be strictly outlawed.",
      "es": "La especulación financiera con cereales y materias primas alimentarias debe prohibirse sin excepción.",
      "de": "Finanzspekulationen auf Weizen und Agrarrohstoffe an den Börsen sollten streng untersagt werden.",
      "ru": "Финансовые спекуляции ценами на зерно и базовые продукты питания на биржах должны быть запрещены.",
      "fr": "La spéculation financière sur le blé et les matières premières agricoles devrait être formellement interdite."
    }
  },
  {
    "id": 78,
    "categoryKey": "trade",
    "axis": "econ",
    "multiplier": 1,
    "isQuick": false,
    "text": {
      "pl": "Brak barier handlowych i swobodna wymiana z sąsiadami buduje pokój skuteczniej niż sojusze wojskowe.",
      "en": "Free cross-border commerce binds nations and fosters lasting peace far better than military pacts.",
      "es": "El comercio sin barreras con los vecinos construye la paz con más eficacia que las alianzas militares.",
      "de": "Freier Handel über Grenzen hinweg sichert den Frieden verlässlicher als militärische Rüstungsbündnisse.",
      "ru": "Свободная торговля без барьеров обеспечивает мир между народами надежнее военных союзов.",
      "fr": "Le commerce sans frontières tisse la paix entre les peuples bien plus efficacement que les traités militaires."
    }
  },
  {
    "id": 79,
    "categoryKey": "trade",
    "axis": "econ",
    "multiplier": -1,
    "isQuick": false,
    "text": {
      "pl": "Państwo powinno nakładać sankcje i zakazy handlu na kraje, które dopuszczają się łamania praw człowieka.",
      "en": "Governments should impose trade embargoes and sanctions against foreign regimes violating human rights.",
      "es": "Se deben imponer sanciones y embargos comerciales a los regímenes que violan los derechos humanos.",
      "de": "Staaten sollten Handelsembargos gegen Regime verhängen, die elementare Menschenrechte mit Füßen treten.",
      "ru": "Государство должно вводить торговые эмбарго и санкции против стран, нарушающих права человека.",
      "fr": "L'État devrait imposer des embargos commerciaux aux pays qui violent gravement les droits humains."
    }
  },
  {
    "id": 80,
    "categoryKey": "trade",
    "axis": "econ",
    "multiplier": -1,
    "isQuick": false,
    "text": {
      "pl": "Państwo powinno finansowo dotować rodzimy eksport, by pomóc krajowym firmom wygrywać z konkurencją.",
      "en": "The state should provide direct export subsidies to help national manufacturers win over foreign rivals.",
      "es": "El Estado debe subvencionar las exportaciones nacionales para vencer a los competidores foráneos.",
      "de": "Der Staat sollte heimische Exporte subventionieren, um den Unternehmen Vorteile im Wettbewerb zu verschaffen.",
      "ru": "Государство должно субсидировать экспорт отечественных предприятий для победы над конкурентами.",
      "fr": "L'État devrait subventionner les exportations nationales pour aider nos entreprises face aux concurrents."
    }
  },
  {
    "id": 81,
    "categoryKey": "liberties",
    "axis": "soc",
    "multiplier": 1,
    "isQuick": true,
    "text": {
      "pl": "Wolność słowa powinna chronić nawet poglądy kontrowersyjne i oburzające dla większości społeczeństwa.",
      "en": "Freedom of speech should safeguard even offensive, controversial, or shocking opinions.",
      "es": "La libertad de expresión debe amparar incluso opiniones controvertidas u ofensivas para la mayoría.",
      "de": "Meinungsfreiheit muss auch provokante, unbequeme oder schockierende Ansichten uneingeschränkt schützen.",
      "ru": "Свобода слова должна защищать даже провокационные и возмутительные для большинства мнения.",
      "fr": "La liberté d'expression doit protéger même les opinions controversées ou choquantes pour la majorité."
    }
  },
  {
    "id": 82,
    "categoryKey": "liberties",
    "axis": "soc",
    "multiplier": -1,
    "isQuick": true,
    "text": {
      "pl": "Służby państwowe powinny mieć prawo podsłuchiwać podejrzanych w sieci bez zgody sądu w imię bezpieczeństwa.",
      "en": "Intelligence agencies should be allowed to wiretap digital communications without court warrants for security.",
      "es": "Los servicios de inteligencia deben poder intervenir comunicaciones online sin orden judicial por seguridad.",
      "de": "Nachrichtendienste sollten verdächtige Kommunikation zur Gefahrenabwehr ohne richterlichen Beschluss überwachen dürfen.",
      "ru": "Спецслужбы должны иметь право прослушивать подозреваемых в сети без решения суда ради безопасности.",
      "fr": "Les services de renseignement devraient pouvoir surveiller les réseaux sans mandat judiciaire au nom de la sécurité."
    }
  },
  {
    "id": 83,
    "categoryKey": "liberties",
    "axis": "soc",
    "multiplier": 1,
    "isQuick": true,
    "text": {
      "pl": "Każdy dorosły i niekarany obywatel powinien mieć łatwy dostęp do posiadania broni palnej do obrony domu.",
      "en": "Every law-abiding adult citizen should have the legal right to own firearms for self-defense.",
      "es": "Cualquier ciudadano adulto sin antecedentes debería poder poseer armas de fuego para defensa personal.",
      "de": "Unbescholtene erwachsene Bürger sollten das Recht haben, Schusswaffen zur Selbstverteidigung zu besitzen.",
      "ru": "Каждый дееспособный несудимый гражданин должен иметь право на владение огнестрельным оружием для самообороны.",
      "fr": "Tout citoyen adulte sans casier judiciaire devrait avoir le droit de posséder une arme à feu pour se défendre."
    }
  },
  {
    "id": 84,
    "categoryKey": "liberties",
    "axis": "soc",
    "multiplier": -1,
    "isQuick": false,
    "text": {
      "pl": "Policja powinna mieć prawo zatrzymywać i rewidować przechodniów na ulicy bez podawania przyczyny.",
      "en": "Police officers should have the power to stop and search pedestrians randomly without probable cause.",
      "es": "La policía debe tener potestad para detener y registrar a personas en la calle sin dar explicaciones.",
      "de": "Die Polizei sollte verdachtsunabhängige Personenkontrollen und Durchsuchungen im öffentlichen Raum durchführen dürfen.",
      "ru": "Полиция должна иметь право останавливать и досматривать прохожих на улице без объяснения причин.",
      "fr": "La police devrait pouvoir contrôler et fouiller des passants dans la rue sans motif préalable."
    }
  },
  {
    "id": 85,
    "categoryKey": "liberties",
    "axis": "soc",
    "multiplier": 1,
    "isQuick": false,
    "text": {
      "pl": "Nieuleczalnie chory człowiek powinien mieć prawo do eutanazji i asystowanej śmierci na własne życzenie.",
      "en": "Terminally ill patients should possess the legal right to voluntary euthanasia and assisted dying.",
      "es": "Los enfermos terminales deben tener derecho legal a la eutanasia voluntaria y al suicidio asistido.",
      "de": "Unheilbar Kranke sollten das Recht auf ärztlich begleitete Sterbehilfe auf eigenen Wunsch haben.",
      "ru": "Неизлечимо больные люди должны иметь законное право на добровольную эвтаназию по собственной воле.",
      "fr": "Les personnes atteintes de maladies incurables devraient avoir accès à l'euthanasie choisie et à l'aide à mourir."
    }
  },
  {
    "id": 86,
    "categoryKey": "liberties",
    "axis": "soc",
    "multiplier": -1,
    "isQuick": false,
    "text": {
      "pl": "Kamery z automatycznym rozpoznawaniem twarzy powinny być zainstalowane we wszystkich miejscach publicznych.",
      "en": "Automated facial-recognition surveillance cameras should be deployed across all public streets.",
      "es": "Deberían instalarse cámaras de reconocimiento facial en todos los espacios públicos para prevenir delitos.",
      "de": "Kameras mit automatischer Gesichtserkennung sollten lückenlos an allen öffentlichen Plätzen installiert werden.",
      "ru": "Камеры с распознаванием лиц должны быть установлены во всех общественных местах для борьбы с преступностью.",
      "fr": "Des caméras à reconnaissance faciale automatique devraient être installées dans tous les lieux publics."
    }
  },
  {
    "id": 87,
    "categoryKey": "liberties",
    "axis": "soc",
    "multiplier": 1,
    "isQuick": false,
    "text": {
      "pl": "Posiadanie i sprzedaż marihuany na własny użytek powinny być w pełni legalne dla dorosłych.",
      "en": "Possession and retail sale of recreational cannabis should be completely legal for adults.",
      "es": "La tenencia y venta de marihuana para uso recreativo deben ser plenamente legales para adultos.",
      "de": "Besitz und Verkauf von Cannabis für den persönlichen Konsum sollten für Erwachsene legal sein.",
      "ru": "Хранение и продажа марихуаны для личного употребления должны быть полностью легальны для совершеннолетних.",
      "fr": "La possession et la vente de cannabis pour usage personnel devraient être totalement légales pour les adultes."
    }
  },
  {
    "id": 88,
    "categoryKey": "liberties",
    "axis": "soc",
    "multiplier": -1,
    "isQuick": true,
    "text": {
      "pl": "Kara śmierci powinna zostać przywrócona za najokrutniejsze zbrodnie i morderstwa.",
      "en": "Capital punishment should be reinstated for the most heinous, premeditated murders.",
      "es": "La pena de muerte debería restaurarse para los crímenes y asesinatos más sanguinarios.",
      "de": "Die Todesstrafe sollte für besonders grausame Morde wieder eingeführt werden.",
      "ru": "Смертная казнь должна быть возвращена за самые жестокие и бесчеловечные убийства.",
      "fr": "La peine de mort devrait être rétablie pour les crimes et assassinats les plus odieux."
    }
  },
  {
    "id": 89,
    "categoryKey": "liberties",
    "axis": "soc",
    "multiplier": 1,
    "isQuick": false,
    "text": {
      "pl": "Obywatele powinni mieć prawo do pełnej anonimowości w sieci bez wymogu rejestracji dowodem osobistym.",
      "en": "Citizens should have an absolute right to digital anonymity without national ID verification.",
      "es": "Los ciudadanos deben tener derecho al anonimato en internet sin registrarse con documento de identidad.",
      "de": "Bürger sollten das Recht haben, das Internet anonym ohne Ausweispflicht zu nutzen.",
      "ru": "Граждане должны иметь право на полную анонимность в интернете без входа по паспорту.",
      "fr": "Les citoyens devraient pouvoir naviguer sur internet de manière anonyme sans vérification d'identité."
    }
  },
  {
    "id": 90,
    "categoryKey": "liberties",
    "axis": "soc",
    "multiplier": -1,
    "isQuick": false,
    "text": {
      "pl": "Rząd powinien mieć prawo nakładać zakaz wychodzenia z domu i kwarantannę podczas pandemii.",
      "en": "Governments should possess the legal authority to impose stay-at-home curfews during epidemics.",
      "es": "El gobierno debe tener facultades para decretar confinamientos domiciliarios obligatorios en epidemias.",
      "de": "Die Regierung sollte das Recht haben, bei Pandemien verbindliche Ausgangssperren zu verhängen.",
      "ru": "Правительство должно иметь право вводить комендантский час и карантин во время эпидемий.",
      "fr": "Le gouvernement devrait pouvoir imposer des confinements à domicile stricts lors d'épidémies."
    }
  },
  {
    "id": 91,
    "categoryKey": "liberties",
    "axis": "soc",
    "multiplier": 1,
    "isQuick": false,
    "text": {
      "pl": "Każdy dorosły człowiek ma prawo decydować o własnym ciele, w tym o modyfikacjach i zabiegach medycznych.",
      "en": "Every adult has an unquestioned right of bodily autonomy regarding medical procedures and personal choices.",
      "es": "Todo adulto tiene derecho inalienable sobre su propio cuerpo y sus decisiones médicas.",
      "de": "Jeder Erwachsene besitzt ein unantastbares Recht auf körperliche Selbstbestimmung.",
      "ru": "Каждый взрослый человек имеет право сам распоряжаться своим телом и медицинскими вмешательствами.",
      "fr": "Chaque adulte dispose d'un droit absolu à disposer de son corps et de ses choix médicaux."
    }
  },
  {
    "id": 92,
    "categoryKey": "liberties",
    "axis": "soc",
    "multiplier": -1,
    "isQuick": false,
    "text": {
      "pl": "Policja powinna natychmiast siłą rozpędzać wszelkie nielegalne blokady dróg i uliczne demonstracje.",
      "en": "Riot police should forcefully disperse unsanctioned road blockades and illegal street marches immediately.",
      "es": "La policía debe disolver por la fuerza y al instante cualquier corte de tráfico o protesta ilegal.",
      "de": "Die Polizei sollte ungenehmigte Straßenblockaden und unangemeldete Demos sofort auflösen.",
      "ru": "Полиция должна немедленно силой разгонять любые незаконные перекрытия дорог и протесты.",
      "fr": "La police devrait disperser immédiatement par la force tout blocage routier ou cortège non autorisé."
    }
  },
  {
    "id": 93,
    "categoryKey": "liberties",
    "axis": "soc",
    "multiplier": 1,
    "isQuick": false,
    "text": {
      "pl": "Prawo do noszenia gazu pieprzowego i paralizatorów do samoobrony powinno być całkowicie wolne od zezwoleń.",
      "en": "The right to carry pepper spray and stun guns for personal defense should require zero permits.",
      "es": "Llevar espray de pimienta o táser para defensa personal no debería exigir ninguna licencia.",
      "de": "Das Mitführen von Pfefferspray und Elektroschockern zur Selbstverteidigung sollte erlaubnisfrei sein.",
      "ru": "Ношение перцовых баллончиков и электрошокеров для самообороны не должно требовать никаких разрешений.",
      "fr": "Le port de bombes lacrymogènes et de tasers pour l'autodéfense devrait être libre de toute autorisation."
    }
  },
  {
    "id": 94,
    "categoryKey": "liberties",
    "axis": "soc",
    "multiplier": -1,
    "isQuick": false,
    "text": {
      "pl": "Więźniowie skazani za ciężkie przestępstwa powinni wykonywać przymusową pracę fizyczną na rzecz państwa.",
      "en": "Inmates convicted of serious violent crimes should be compelled to do hard physical labor for the state.",
      "es": "Los presos por delitos graves deberían realizar trabajos forzados obligatorios para el Estado.",
      "de": "Straftäter bei schweren Verbrechen sollten zu gemeinnütziger Zwangsarbeit verpflichtet werden.",
      "ru": "Заключенные за тяжкие преступления должны привлекаться к обязательному физическому труду на пользу государства.",
      "fr": "Les criminels condamnés pour des faits graves devraient être astreints au travail forcé au profit de la collectivité."
    }
  },
  {
    "id": 95,
    "categoryKey": "tech",
    "axis": "soc",
    "multiplier": -1,
    "isQuick": true,
    "text": {
      "pl": "Rząd powinien surowo kontrolować i licencjonować wszystkie zaawansowane modele sztucznej inteligencji.",
      "en": "Governments should strictly regulate and license all advanced artificial intelligence models.",
      "es": "Los gobiernos deben regular y someter a licencias estrictas los modelos avanzados de inteligencia artificial.",
      "de": "Der Staat sollte alle hochentwickelten KI-Modelle streng überwachen und genehmigungspflichtig machen.",
      "ru": "Правительство должно строго контролировать и лицензировать все продвинутые модели искусственного интеллекта.",
      "fr": "Les gouvernements devraient contrôler et soumettre à licence obligatoire tous les modèles avancés d'IA."
    }
  },
  {
    "id": 96,
    "categoryKey": "tech",
    "axis": "soc",
    "multiplier": 1,
    "isQuick": true,
    "text": {
      "pl": "Kryptowaluty (np. Bitcoin) powinny rozwijać się swobodnie bez państwowego nadzoru i rejestracji.",
      "en": "Cryptocurrencies like Bitcoin should operate freely without central bank or government interference.",
      "es": "Las criptomonedas como Bitcoin deben operar libres de interferencias de gobiernos o bancos centrales.",
      "de": "Kryptowährungen wie Bitcoin sollten sich frei ohne staatliche Regulierung oder Meldepflichten entwickeln.",
      "ru": "Криптовалюты (такие как Биткоин) должны развиваться свободно без государственного надзора.",
      "fr": "Les cryptomonnaies (comme le Bitcoin) devraient prospérer librement sans surveillance étatique."
    }
  },
  {
    "id": 97,
    "categoryKey": "tech",
    "axis": "soc",
    "multiplier": -1,
    "isQuick": false,
    "text": {
      "pl": "Gotówka papierowa powinna zostać wycofana i zastąpiona wyłącznie państwowym cyfrowym pieniądzem (CBDC).",
      "en": "Physical cash should be phased out and replaced entirely by official central bank digital currency (CBDC).",
      "es": "El dinero en efectivo debe suprimirse y sustituirse únicamente por moneda digital estatal (CBDC).",
      "de": "Bargeld sollte abgeschafft und komplett durch digitales Zentralbankgeld (CBDC) ersetzt werden.",
      "ru": "Наличные деньги должны быть упразднены и заменены государственной цифровой валютой (CBDC).",
      "fr": "L'argent liquide physique devrait être aboli et remplacé exclusivement par une monnaie numérique d'État (MNBC)."
    }
  },
  {
    "id": 98,
    "categoryKey": "tech",
    "axis": "soc",
    "multiplier": 1,
    "isQuick": false,
    "text": {
      "pl": "Komunikatory internetowe powinny mieć prawo do pełnego szyfrowania bez tylnych furtek dla policji.",
      "en": "Messaging apps should be legally protected to use end-to-end encryption without police backdoors.",
      "es": "Las aplicaciones de mensajería deben usar cifrado de extremo a extremo sin puertas traseras policiales.",
      "de": "Messenger-Dienste müssen das Recht auf lückenlose Ende-zu-Ende-Verschlüsselung ohne Hintertüren haben.",
      "ru": "Мессенджеры должны иметь право на полное шифрование переписки без лазеек для спецслужб.",
      "fr": "Les messageries devraient garantir un chiffrement de bout en bout sans aucune porte dérobée pour la police."
    }
  },
  {
    "id": 99,
    "categoryKey": "tech",
    "axis": "soc",
    "multiplier": -1,
    "isQuick": false,
    "text": {
      "pl": "Państwo powinno nadzorować platformy internetowe i usuwać treści uznane przez urzędników za dezinformację.",
      "en": "The state should oversee social platforms and take down content deemed by officials to be misinformation.",
      "es": "El Estado debe supervisar las redes sociales y eliminar contenidos calificados de desinformación.",
      "de": "Der Staat sollte Internetplattformen überwachen und als Fehlinformation eingestufte Inhalte löschen lassen.",
      "ru": "Государство должно контролировать интернет-платформы и удалять информацию, признанную фейком.",
      "fr": "L'État devrait surveiller les réseaux sociaux et supprimer les contenus jugés trompeurs par les autorités."
    }
  },
  {
    "id": 100,
    "categoryKey": "tech",
    "axis": "soc",
    "multiplier": 1,
    "isQuick": false,
    "text": {
      "pl": "Dostawcy internetu muszą traktować cały ruch sieciowy jednakowo bez faworyzowania (zasada neutralności sieci).",
      "en": "Internet service providers must treat all online traffic equally without throttling (net neutrality).",
      "es": "Los proveedores de internet deben dar el mismo trato a todo el tráfico sin discriminación (neutralidad de red).",
      "de": "Internetanbieter müssen sämtlichen Datenverkehr ohne Drosselung gleich behandeln (Netzneutralität).",
      "ru": "Провайдеры должны пропускать весь интернет-трафик одинаково без замедлений (сетевой нейтралитет).",
      "fr": "Les fournisseurs d'accès doivent traiter tout le trafic web de manière égale sans restriction (neutralité du net)."
    }
  },
  {
    "id": 101,
    "categoryKey": "tech",
    "axis": "soc",
    "multiplier": -1,
    "isQuick": false,
    "text": {
      "pl": "Eksperymenty nad modyfikacją ludzkiego DNA i klonowaniem ludzi powinny być całkowicie zakazane.",
      "en": "Genetic modification of human embryos and human reproductive cloning should be globally banned.",
      "es": "La edición genética de embriones humanos y la clonación reproductiva deben prohibirse tajantemente.",
      "de": "Genmanipulation an menschlichen Embryonen und Klonen von Menschen sollten weltweit verboten sein.",
      "ru": "Опыты по изменению ДНК эмбрионов и клонированию человека должны быть категорически запрещены.",
      "fr": "Les modifications génétiques d'embryons et le clonage humain devraient être strictement interdits."
    }
  },
  {
    "id": 102,
    "categoryKey": "tech",
    "axis": "soc",
    "multiplier": 1,
    "isQuick": false,
    "text": {
      "pl": "Oprogramowanie i algorytmy AI stworzone za publiczne pieniądze powinny być bezpłatne i otwarte (Open Source).",
      "en": "Software and AI algorithms financed by public taxpayers should be open source and free to all.",
      "es": "El software y los algoritmos creados con fondos públicos deben ser de código abierto para todos.",
      "de": "Mit Steuergeldern entwickelte Software und KI-Modelle müssen als Open Source öffentlich verfügbar sein.",
      "ru": "Программы и алгоритмы ИИ, созданные на государственные деньги, должны быть открытыми и бесплатными.",
      "fr": "Les logiciels et algorithmes d'IA financés par des fonds publics devraient être libres et en Open Source."
    }
  },
  {
    "id": 103,
    "categoryKey": "tech",
    "axis": "soc",
    "multiplier": -1,
    "isQuick": false,
    "text": {
      "pl": "Autonomiczne drony bojowe podejmujące decyzję o ataku na człowieka bez operatora powinny być zakazane.",
      "en": "Autonomous killer combat drones making lethal strike decisions without human sign-off should be outlawed.",
      "es": "Los drones de combate autónomos capaces de atacar sin confirmación humana deben estar prohibidos.",
      "de": "Autonome Kampfdrohnen, die ohne menschliche Freigabe töten, sollten völkerrechtlich geächtet werden.",
      "ru": "Боевые дроны, способные принимать решение об уничтожении людей без человека, должны быть запрещены.",
      "fr": "Les drones de combat autonomes capables de tuer sans intervention humaine devraient être interdits."
    }
  },
  {
    "id": 104,
    "categoryKey": "tech",
    "axis": "soc",
    "multiplier": 1,
    "isQuick": false,
    "text": {
      "pl": "Każdy programista powinien mieć prawo swobodnie tworzyć i publikować modele sztucznej inteligencji.",
      "en": "Any developer should have the unrestrained freedom to train and publish open AI models.",
      "es": "Cualquier programador debe ser libre de desarrollar y publicar modelos de inteligencia artificial.",
      "de": "Jeder Entwickler sollte das Recht haben, eigene KI-Modelle ohne Hürden zu erstellen und zu veröffentlichen.",
      "ru": "Любой программист должен иметь право свободно создавать и выкладывать модели ИИ.",
      "fr": "Tout développeur devrait avoir le droit de concevoir et publier librement des modèles d'intelligence artificielle."
    }
  },
  {
    "id": 105,
    "categoryKey": "tech",
    "axis": "soc",
    "multiplier": -1,
    "isQuick": false,
    "text": {
      "pl": "Państwo powinno stworzyć centralną bazę danych z kodami DNA i biometrią wszystkich obywateli.",
      "en": "The state should maintain a centralized biometric database containing DNA and fingerprints of all citizens.",
      "es": "El Estado debería crear una base de datos con el ADN y huellas biométricas de todos los ciudadanos.",
      "de": "Der Staat sollte ein zentrales Register mit DNA-Profilen und biometrischen Daten aller Bürger anlegen.",
      "ru": "Государство должно создать единую базу данных с ДНК и отпечатками пальцев всех граждан.",
      "fr": "L'État devrait constituer un fichier biométrique centralisé réunissant l'ADN et les empreintes de tous les citoyens."
    }
  },
  {
    "id": 106,
    "categoryKey": "tech",
    "axis": "soc",
    "multiplier": 1,
    "isQuick": false,
    "text": {
      "pl": "Okres ochrony praw autorskich i patentów technologicznych powinien zostać radykalnie skrócony.",
      "en": "The duration of technological patents and copyright monopolies should be sharply reduced.",
      "es": "La duración de las patentes tecnológicas y los derechos de autor debería reducirse drásticamente.",
      "de": "Die Laufzeit von Softwarepatenten und Urheberrechten sollte drastisch verkürzt werden.",
      "ru": "Срок действия технологических патентов и авторских прав должен быть радикально сокращён.",
      "fr": "La durée de protection des brevets technologiques et droits d'auteur devrait être nettement réduite."
    }
  },
  {
    "id": 107,
    "categoryKey": "tech",
    "axis": "soc",
    "multiplier": 1,
    "isQuick": false,
    "text": {
      "pl": "Prywatne firmy kosmiczne powinny móc swobodnie eksplorować i wydobywać surowce na Księżycu i planetoidach.",
      "en": "Commercial space companies should be permitted to freely prospect and mine minerals on the Moon and asteroids.",
      "es": "Las empresas espaciales privadas deberían poder explotar libremente recursos en la Luna y asteroides.",
      "de": "Private Raumfahrtfirmen sollten Rohstoffe auf dem Mond und Asteroiden frei abbauen dürfen.",
      "ru": "Частные космические компании должны иметь право свободно добывать ресурсы на Луне и астероидах.",
      "fr": "Les entreprises spatiales privées devraient pouvoir exploiter librement les ressources sur la Lune et les astéroïdes."
    }
  },
  {
    "id": 108,
    "categoryKey": "tech",
    "axis": "soc",
    "multiplier": -1,
    "isQuick": false,
    "text": {
      "pl": "Wszelkie treści generowane przez sztuczną inteligencję (obrazy, teksty, audio) muszą mieć obowiązkowy państwowy znak wodny.",
      "en": "All AI-generated content (images, audio, text) must carry mandatory, verified digital watermarks by law.",
      "es": "Todo contenido generado por inteligencia artificial debería llevar una marca de agua obligatoria por ley.",
      "de": "Sämtliche KI-generierten Medieninhalte sollten gesetzlich mit einem fälschungssicheren Wasserzeichen versehen werden.",
      "ru": "Любой контент, созданный ИИ (тексты, фото, видео), должен иметь обязательную маркировку по закону.",
      "fr": "Tout contenu généré par IA (image, texte, voix) devrait porter un filigrane numérique obligatoire par la loi."
    }
  },
  {
    "id": 109,
    "categoryKey": "ecology",
    "axis": "soc",
    "multiplier": 1,
    "isQuick": true,
    "text": {
      "pl": "Ochrona klimatu i redukcja spalin powinny być priorytetem, nawet jeśli podnosi to codzienne koszty życia.",
      "en": "Combating climate change and emissions must take priority even if it raises everyday living costs.",
      "es": "Frenar el cambio climático debe ser prioritario, incluso si encarece el coste de la vida cotidiana.",
      "de": "Klimaschutz und Emissionssenkung müssen Priorität haben, selbst wenn das die Lebenshaltungskosten erhöht.",
      "ru": "Защита климата и сокращение выбросов должны быть главным приоритетом, даже если растут расходы людей.",
      "fr": "La lutte contre le réchauffement climatique doit être prioritaire, même si elle renchérit le coût de la vie."
    }
  },
  {
    "id": 110,
    "categoryKey": "ecology",
    "axis": "soc",
    "multiplier": -1,
    "isQuick": true,
    "text": {
      "pl": "Powinniśmy wydobywać węgiel i gaz tak długo, jak zapewniają nam tani prąd i niezależność.",
      "en": "We should extract coal and natural gas as long as they deliver cheap electricity and energy security.",
      "es": "Debemos seguir usando carbón y gas mientras ofrezcan energía barata e independencia energética.",
      "de": "Wir sollten Kohle und Gas nutzen, solange sie bezahlbaren Strom und Versorgungssicherheit garantieren.",
      "ru": "Мы должны добывать уголь и газ до тех пор, пока они дают дешёвое электричество и энергонезависимость.",
      "fr": "Nous devrions exploiter le charbon et le gaz tant qu'ils garantissent une énergie bon marché et souveraine."
    }
  },
  {
    "id": 111,
    "categoryKey": "ecology",
    "axis": "soc",
    "multiplier": -1,
    "isQuick": false,
    "text": {
      "pl": "Ustawowy zakaz sprzedaży nowych samochodów spalinowych od 2035 roku to szkodliwy błąd uderzający w kierowców.",
      "en": "Banning the sale of new internal combustion engine cars by 2035 is an unreasonable policy harming drivers.",
      "es": "Prohibir la venta de coches nuevos de gasolina o diésel a partir de 2035 es un grave error para los ciudadanos.",
      "de": "Das Verbot von neuen Verbrennungsmotoren ab 2035 ist ein schädlicher Fehler zulasten der Bürger.",
      "ru": "Запрет на продажу новых бензиновых и дизельных машин с 2035 года — это вредная ошибка, бьющая по водителям.",
      "fr": "L'interdiction de vente des voitures thermiques neuves à partir de 2035 est une grave erreur qui pénalise les automobilistes."
    }
  },
  {
    "id": 112,
    "categoryKey": "ecology",
    "axis": "soc",
    "multiplier": 1,
    "isQuick": false,
    "text": {
      "pl": "Krótkie loty samolotem powinny być zakazane na trasach, gdzie pociąg jedzie poniżej 3 godzin.",
      "en": "Short-haul airline flights should be banned on domestic routes served by trains under three hours.",
      "es": "Los vuelos de corto radio deberían prohibirse cuando exista alternativa en tren de menos de tres horas.",
      "de": "Kurzstreckenflüge sollten verboten werden, wenn eine Zugverbindung unter drei Stunden existiert.",
      "ru": "Короткие авиарейсы должны быть запрещены там, где поезд идет менее 3 часов.",
      "fr": "Les vols en avion court-courrier devraient être interdits sur les trajets où le train met moins de 3 heures."
    }
  },
  {
    "id": 113,
    "categoryKey": "ecology",
    "axis": "soc",
    "multiplier": -1,
    "isQuick": false,
    "text": {
      "pl": "Przepisy ochrony środowiska nie powinny blokować budowy strategicznych dróg, tam i fabryk.",
      "en": "Environmental regulations must never hold up the construction of vital highways, dams, or factories.",
      "es": "Las normativas medioambientales no deben paralizar infraestructuras clave como carreteras o fábricas.",
      "de": "Umweltschutzauflagen sollten den Bau wichtiger Autobahnen, Staudämme und Fabriken nicht ausbremsen.",
      "ru": "Экологические нормы не должны блокировать строительство важных дорог, дамб и промышленных предприятий.",
      "fr": "Les règles environnementales ne devraient pas bloquer la construction d'autoroutes, barrages ou usines stratégiques."
    }
  },
  {
    "id": 114,
    "categoryKey": "ecology",
    "axis": "soc",
    "multiplier": 1,
    "isQuick": false,
    "text": {
      "pl": "Trzymanie zwierząt w ciasnych klatkach na fermach przemysłowych powinno być całkowicie zakazane.",
      "en": "Confining livestock and poultry in battery cages on factory farms should be completely banned.",
      "es": "El confinamiento de animales en jaulas estrechas en granjas industriales debe prohibirse.",
      "de": "Käfighaltung von Nutztieren in industriellen Zuchtbetrieben sollte ausnahmslos verboten werden.",
      "ru": "Содержание животных в тесных клетках на промышленных фермах должно быть полностью запрещено.",
      "fr": "L'élevage intensif d'animaux en cages de batterie devrait être totalement interdit."
    }
  },
  {
    "id": 115,
    "categoryKey": "ecology",
    "axis": "soc",
    "multiplier": -1,
    "isQuick": false,
    "text": {
      "pl": "Podatki od emisji CO2 osłabiają nasz przemysł, podczas gdy Chiny i Indie bezkarnie zanieczyszczają świat.",
      "en": "Carbon taxes penalize our domestic industries while nations like China and India pollute with impunity.",
      "es": "Los impuestos al carbono lastran nuestra economía mientras potencias como China e India siguen contaminando.",
      "de": "CO2-Steuern schwächen unsere Wirtschaft, während Länder wie China und Indien ungebremst emittieren.",
      "ru": "Углеродные налоги душат нашу промышленность, пока Китай и Индия безнаказанно загрязняют планету.",
      "fr": "La taxe carbone pénalise notre industrie alors que la Chine et l'Inde polluent impunément."
    }
  },
  {
    "id": 116,
    "categoryKey": "ecology",
    "axis": "soc",
    "multiplier": 1,
    "isQuick": false,
    "text": {
      "pl": "Wjazd starych aut spalinowych do centrów dużych miast powinien być zakazany (Strefy Czystego Transportu).",
      "en": "Older polluting vehicles should be barred from central city zones through low-emission corridors.",
      "es": "Los vehículos antiguos contaminantes no deberían poder entrar al centro de las grandes urbes.",
      "de": "Ältere abgasintensive Fahrzeuge sollten aus den Innenstädten durch Umweltzonen verbannt werden.",
      "ru": "Въезд старых автомобилей с ДВС в центры городов должен быть запрещён через экологические зоны.",
      "fr": "L'accès des véhicules thermiques anciens au centre des grandes villes devrait être interdit (ZFE)."
    }
  },
  {
    "id": 117,
    "categoryKey": "ecology",
    "axis": "soc",
    "multiplier": 1,
    "isQuick": false,
    "text": {
      "pl": "Wszystkie dopłaty do paliw kopalnych powinny zostać natychmiast przeniesione na wiatraki i fotowoltaikę.",
      "en": "All public subsidies for fossil fuels should be immediately redirected to solar and wind energy.",
      "es": "Todas las ayudas a combustibles fósiles deben transferirse de inmediato a las energías renovables.",
      "de": "Sämtliche Subventionen für fossile Energien sollten sofort in Wind- und Solarkraft umgeleitet werden.",
      "ru": "Все субсидии на ископаемое топливо должны быть немедленно перенаправлены на ветровую и солнечную энергетику.",
      "fr": "Toutes les subventions aux énergies fossiles devraient être immédiatement réallouées au solaire et à l'éolien."
    }
  },
  {
    "id": 118,
    "categoryKey": "ecology",
    "axis": "soc",
    "multiplier": -1,
    "isQuick": false,
    "text": {
      "pl": "Budowa nowoczesnych elektrowni atomowych jest konieczna, by zapewnić stabilny i bezpieczny prąd.",
      "en": "Building modern nuclear power plants is essential to ensure stable baseload energy security.",
      "es": "Construir centrales nucleares modernas es imprescindible para garantizar energía firme y limpia.",
      "de": "Der Bau moderner Kernkraftwerke ist unerlässlich für eine zuverlässige und sichere Stromversorgung.",
      "ru": "Строительство современных атомных электростанций необходимо для стабильного энергоснабжения страны.",
      "fr": "La construction de centrales nucléaires modernes est indispensable pour garantir une électricité stable et décarbonée."
    }
  },
  {
    "id": 119,
    "categoryKey": "ecology",
    "axis": "soc",
    "multiplier": 1,
    "isQuick": false,
    "text": {
      "pl": "Jednorazowe plastikowe opakowania i butelki powinny zostać całkowicie wycofane ze sprzedaży.",
      "en": "Single-use plastic food packaging and plastic bottles should be completely banned from retail stores.",
      "es": "Los envases y botellas de plástico de un solo uso deberían retirarse totalmente del mercado.",
      "de": "Einweg-Plastikverpackungen und Plastikflaschen sollten im Handel ausnahmslos verboten werden.",
      "ru": "Одноразовая пластиковая упаковка и бутылки должны быть полностью изъяты из продажи.",
      "fr": "Les emballages et bouteilles en plastique à usage unique devraient être totalement interdits à la vente."
    }
  },
  {
    "id": 120,
    "categoryKey": "ecology",
    "axis": "soc",
    "multiplier": -1,
    "isQuick": false,
    "text": {
      "pl": "Rolnicy powinni mieć swobodę stosowania nawozów chemicznych i pestycydów, by chronić wysokie plony żywności.",
      "en": "Farmers must have the liberty to apply chemical fertilizers and pesticides to safeguard harvest yields.",
      "es": "Los agricultores deben tener libertad para usar fertilizantes y fitosanitarios que protejan las cosechas.",
      "de": "Landwirte sollten Dünger und Pflanzenschutzmittel frei einsetzen dürfen, um Ernten zu sichern.",
      "ru": "Фермеры должны иметь свободу использовать удобрения и пестициды для сохранения высоких урожаев.",
      "fr": "Les agriculteurs devraient être libres d'utiliser engrais et pesticides pour préserver les rendements alimentaires."
    }
  },
  {
    "id": 121,
    "categoryKey": "ecology",
    "axis": "soc",
    "multiplier": 1,
    "isQuick": false,
    "text": {
      "pl": "Hodowla zwierząt na futra i sprzedaż naturalnych futer powinny być całkowicie zakazane w prawie.",
      "en": "Fur farming and the commercial sale of real animal fur garments should be banned by law.",
      "es": "La cría de animales para peletería y la venta de pieles naturales deben prohibirse por completo.",
      "de": "Pelztierfarmen und der Verkauf von echtem Tierpelz sollten gesetzlich verboten werden.",
      "ru": "Разведение животных на мех и торговля натуральным мехом должны быть полностью запрещены законом.",
      "fr": "L'élevage d'animaux pour leur fourrure et le commerce de la fourrure devraient être totalement interdits."
    }
  },
  {
    "id": 122,
    "categoryKey": "culture",
    "axis": "soc",
    "multiplier": 1,
    "isQuick": true,
    "text": {
      "pl": "Kościół powinien być całkowicie oddzielony od państwa i nie otrzymywać żadnych pieniędzy z podatków.",
      "en": "Church and state should be entirely separated, with zero religious subsidies paid from public taxes.",
      "es": "La Iglesia y el Estado deben estar totalmente separados sin recibir fondos de los contribuyentes.",
      "de": "Kirche und Staat sollten strikt getrennt sein und keinerlei Steuergelder erhalten.",
      "ru": "Церковь должна быть полностью отделена от государства и не получать никаких денег из налогов.",
      "fr": "L'Église et l'État doivent être totalement séparés et ne recevoir aucun financement public."
    }
  },
  {
    "id": 123,
    "categoryKey": "culture",
    "axis": "soc",
    "multiplier": -1,
    "isQuick": true,
    "text": {
      "pl": "Wartości chrześcijańskie i tradycja narodowa powinny być podstawą wychowania dzieci w szkole.",
      "en": "Christian moral heritage and national traditions should form the bedrock of school education.",
      "es": "Los valores tradicionales y las raíces cristianas deben ser la base de la educación escolar.",
      "de": "Christliche Werte und heimatliche Traditionen sollten das Fundament der Schulbildung bilden.",
      "ru": "Христианские ценности и национальные традиции должны быть основой воспитания в школах.",
      "fr": "Les valeurs traditionnelles et l'héritage chrétien devraient être le socle de l'éducation scolaire."
    }
  },
  {
    "id": 124,
    "categoryKey": "culture",
    "axis": "soc",
    "multiplier": 1,
    "isQuick": false,
    "text": {
      "pl": "Małżeństwa osób tej samej płci powinny być w pełni legalne i mieć dokładnie takie same prawa.",
      "en": "Same-sex marriages should be fully recognized by law with the exact same rights as heterosexual ones.",
      "es": "El matrimonio entre personas del mismo sexo debe ser plenamente legal con los mismos derechos.",
      "de": "Gleichgeschlechtliche Ehen sollten vollkommen legal sein und identische Rechte besitzen.",
      "ru": "Однополые браки должны быть полностью легализованы с теми же правами, что и разнополые.",
      "fr": "Le mariage pour les couples de même sexe devrait être pleinement légal avec des droits identiques."
    }
  },
  {
    "id": 125,
    "categoryKey": "culture",
    "axis": "soc",
    "multiplier": -1,
    "isQuick": false,
    "text": {
      "pl": "Tradycyjna rodzina (kobieta, mężczyzna i dzieci) powinna być szczególnie uprzywilejowana przez państwo.",
      "en": "The traditional family unit (man, woman, and children) should receive special state privileges.",
      "es": "La familia tradicional (hombre, mujer e hijos) debe gozar de especial protección y privilegios del Estado.",
      "de": "Die traditionelle Familie (Vater, Mutter, Kinder) sollte vom Staat besonders privilegiert werden.",
      "ru": "Традиционная семья (мужчина, женщина и дети) должна пользоваться особыми льготами от государства.",
      "fr": "La famille traditionnelle (un homme, une femme et des enfants) devrait être privilégiée par l'État."
    }
  },
  {
    "id": 126,
    "categoryKey": "culture",
    "axis": "soc",
    "multiplier": 1,
    "isQuick": false,
    "text": {
      "pl": "Kobieta powinna mieć prawo do legalnej aborcji na życzenie w pierwszych miesiącach ciąży.",
      "en": "Women should have an unrestricted legal right to voluntary abortion during the first trimester.",
      "es": "La mujer debe tener derecho a la interrupción voluntaria del embarazo en las primeras semanas.",
      "de": "Frauen sollten in den ersten Monaten der Schwangerschaft ein Recht auf straffreien Schwangerschaftsabbruch haben.",
      "ru": "Женщина должна иметь законное право на аборт по собственному желанию в первые месяцы беременности.",
      "fr": "Toute femme devrait avoir accès à l'avortement légal sur simple demande durant les premières semaines de grossesse."
    }
  },
  {
    "id": 127,
    "categoryKey": "culture",
    "axis": "soc",
    "multiplier": -1,
    "isQuick": false,
    "text": {
      "pl": "Symbole religijne (np. krzyże) powinny wisieć w klasach szkolnych i salach sądowych.",
      "en": "Traditional religious symbols like crucifixes should hang in public school classrooms and courts.",
      "es": "Los símbolos religiosos tradicionales (como crucifijos) deben presidir las aulas escolares y juzgados.",
      "de": "Traditionelle religiöse Symbole wie Kreuze sollten in Klassenzimmern und Gerichtssälen hängen.",
      "ru": "Религиозные символы (например, кресты) должны присутствовать в школьных классах и залах судов.",
      "fr": "Des symboles religieux traditionnels (tels que des croix) devraient être présents dans les écoles et tribunaux."
    }
  },
  {
    "id": 128,
    "categoryKey": "culture",
    "axis": "soc",
    "multiplier": 1,
    "isQuick": false,
    "text": {
      "pl": "Osoby transpłciowe powinny móc zmienić oznaczenie płci w dowodzie prostą deklaracją w urzędzie.",
      "en": "Transgender individuals should be able to update their legal gender marker through simple administrative self-declaration.",
      "es": "Las personas trans deberían poder rectificar su mención de sexo registral por simple declaración.",
      "de": "Transgeschlechtliche Menschen sollten ihren amtlichen Geschlechtseintrag durch einfache Erklärung ändern können.",
      "ru": "Трансгендерные люди должны иметь возможность сменить пол в документах простым заявлением в ЗАГСе.",
      "fr": "Les personnes transgenres devraient pouvoir changer la mention de leur sexe à l'état civil par simple déclaration."
    }
  },
  {
    "id": 129,
    "categoryKey": "culture",
    "axis": "soc",
    "multiplier": -1,
    "isQuick": false,
    "text": {
      "pl": "Państwo powinno aktywnie chronić kulturę i język narodowy przed obcymi wpływami i modami.",
      "en": "The state should proactively defend national language and culture from foreign trends.",
      "es": "El Estado debe proteger activamente la lengua y cultura nacionales frente a modas extranjeras.",
      "de": "Der Staat sollte die heimische Sprache und Kultur aktiv vor fremden Einflüssen bewahren.",
      "ru": "Государство должно активно защищать национальную культуру и язык от чужеродного влияния.",
      "fr": "L'État devrait protéger activement la langue et la culture nationales contre les influences étrangères."
    }
  },
  {
    "id": 130,
    "categoryKey": "culture",
    "axis": "soc",
    "multiplier": 1,
    "isQuick": false,
    "text": {
      "pl": "Rzetelna edukacja seksualna o antykoncepcji, zgodzie i relacjach powinna być obowiązkowa w szkołach.",
      "en": "Comprehensive sexual education regarding contraception and consent should be mandatory in schools.",
      "es": "Una educación sexual integral sobre anticoncepción y relaciones sanas debe ser obligatoria en los colegios.",
      "de": "Umfassender Sexualkundeunterricht über Verhütung und Partnerschaft sollte an Schulen verpflichtend sein.",
      "ru": "Сексуальное просвещение о контрацепции и отношениях должно быть обязательным предметом в школах.",
      "fr": "Une éducation à la sexualité complète portant sur la contraception et le consentement devrait être obligatoire à l'école."
    }
  },
  {
    "id": 131,
    "categoryKey": "culture",
    "axis": "soc",
    "multiplier": -1,
    "isQuick": false,
    "text": {
      "pl": "Publiczne znieważanie świętości i obrażanie uczuć religijnych powinno być ścigane jako przestępstwo.",
      "en": "Public desecration of religious sacraments or insulting religious faith should be prosecuted as a crime.",
      "es": "La ofensa pública a los sentimientos religiosos y profanación de templos debe castigarse como delito.",
      "de": "Öffentliche Herabwürdigung religiöser Bekenntnisse und Schändung von Sakralbauten sollten strafbar sein.",
      "ru": "Публичное оскорбление чувств верующих и осквернение святынь должно караться по закону.",
      "fr": "L'offense publique aux sentiments religieux et la profanation de lieux de culte devraient être poursuivies pénalement."
    }
  },
  {
    "id": 132,
    "categoryKey": "culture",
    "axis": "soc",
    "multiplier": 1,
    "isQuick": false,
    "text": {
      "pl": "Urzędy państwowe i nauczyciele w szkołach publicznych muszą zachowywać całkowitą neutralność światopoglądową.",
      "en": "Public servants and state schoolteachers must maintain strict secular neutrality while at work.",
      "es": "Los funcionarios y docentes públicos deben mantener estricta neutralidad religiosa en su puesto.",
      "de": "Beamte und Lehrer an staatlichen Schulen müssen im Dienst strikte religiöse Neutralität wahren.",
      "ru": "Госслужащие и учителя в государственных школах обязаны соблюдать нейтралитет без демонстрации религии.",
      "fr": "Les fonctionnaires et enseignants de l'école publique doivent respecter une neutralité laïque absolue au travail."
    }
  },
  {
    "id": 133,
    "categoryKey": "culture",
    "axis": "soc",
    "multiplier": -1,
    "isQuick": false,
    "text": {
      "pl": "Programy nauczania historii powinny budować dumę z narodowych zwycięstw zamiast skupiać się na dawnych winach.",
      "en": "School history curricula should cultivate pride in national heritage rather than guilt over past misdeeds.",
      "es": "El temario de historia escolar debe inculcar orgullo patriótico en lugar de centrarse en culpas históricas.",
      "de": "Der Geschichtsunterricht sollte Nationalstolz vermitteln anstatt vorrangig historische Schuld zu betonen.",
      "ru": "Учебники истории должны воспитывать гордость за победы предков, а не внушать вину за прошлое.",
      "fr": "Les cours d'histoire devraient transmettre la fierté de nos héros nationaux plutôt que de nourrir le repentir."
    }
  },
  {
    "id": 134,
    "categoryKey": "culture",
    "axis": "soc",
    "multiplier": -1,
    "isQuick": false,
    "text": {
      "pl": "Lekarze i aptekarze powinni mieć prawo odmówić wykonania zabiegu lub sprzedaży leku niezgodnego z ich sumieniem.",
      "en": "Doctors and pharmacists should have the legal right of conscience to refuse procedures violating their moral beliefs.",
      "es": "Los médicos y farmacéuticos deben poder acogerse a la objeción de conciencia ante prácticas contrarias a su moral.",
      "de": "Ärzte und Apotheker sollten aus Gewissensgründen Behandlungen verweigern dürfen, die ihrer Moral widersprechen.",
      "ru": "Врачи и фармацевты должны иметь право отказываться от процедур, противоречащих их совести.",
      "fr": "Les médecins et pharmaciens devraient bénéficier d'une clause de conscience pour refuser des actes contraires à leurs convictions."
    }
  },
  {
    "id": 135,
    "categoryKey": "society",
    "axis": "soc",
    "multiplier": 1,
    "isQuick": true,
    "text": {
      "pl": "Parytety dla kobiet na listach wyborczych i we władzach spółek powinny być obowiązkowe.",
      "en": "Mandatory gender quotas should be enforced for political party lists and corporate boards.",
      "es": "Las cuotas de género obligatorias deben aplicarse en listas electorales y consejos de administración.",
      "de": "Verbindliche Frauenquoten sollten auf Wahllisten und in Unternehmensvorständen gesetzlich vorgeschrieben sein.",
      "ru": "Квоты для женщин в избирательных списках и руководстве компаний должны быть обязательными.",
      "fr": "Des quotas de parité obligatoires devraient être imposés sur les listes électorales et dans les conseils d'administration."
    }
  },
  {
    "id": 136,
    "categoryKey": "society",
    "axis": "soc",
    "multiplier": -1,
    "isQuick": true,
    "text": {
      "pl": "Przy zatrudnianiu i na studiach powinny decydować wyłącznie kwalifikacje, bez punktów za płeć czy pochodzenie.",
      "en": "Admissions and hiring decisions should rely purely on merit, with zero affirmative-action points for identity.",
      "es": "En oposiciones y contrataciones solo debe primar el mérito, sin ventajas por género o etnia.",
      "de": "Bei Einstellungen und Studienzulassungen sollten ausschließlich fachliche Qualifikationen zählen.",
      "ru": "При приёме на работу и учебу должны решать только знания и опыт, без льгот по полу или происхождению.",
      "fr": "Les embauches et admissions universitaires ne devraient dépendre que des compétences, sans discrimination positive."
    }
  },
  {
    "id": 137,
    "categoryKey": "society",
    "axis": "soc",
    "multiplier": 1,
    "isQuick": false,
    "text": {
      "pl": "Dobrowolna praca seksualna dorosłych osób powinna być w pełni zalegalizowanym, opodatkowanym zawodem.",
      "en": "Consensual adult sex work should be fully decriminalized, legalized, and treated as an ordinary profession.",
      "es": "El trabajo sexual consentido entre adultos debería ser una profesión plenamente legalizada y regulada.",
      "de": "Einvernehmliche Sexarbeit unter Erwachsenen sollte ein vollkommen legaler und regulierter Beruf sein.",
      "ru": "Добровольная секс-работа взрослых людей должна быть законной профессией с налогами и правами.",
      "fr": "Le travail du sexe consenti entre adultes devrait être une activité pleinement légale et encadrée."
    }
  },
  {
    "id": 138,
    "categoryKey": "society",
    "axis": "soc",
    "multiplier": -1,
    "isQuick": false,
    "text": {
      "pl": "Rząd powinien nakładać kary finansowe na rodziców odmawiających obowiązkowych szczepień ochronnych dzieci.",
      "en": "Governments should levy financial fines on parents who refuse mandatory vaccinations for their children.",
      "es": "El gobierno debe multar a los progenitores que rechacen las vacunas obligatorias para sus hijos.",
      "de": "Die Regierung sollte Bußgelder gegen Eltern verhängen, die vorgeschriebene Pflichtimpfungen verweigern.",
      "ru": "Государство должно штрафовать родителей, отказывающихся от обязательной вакцинации детей.",
      "fr": "L'État devrait infliger des sanctions financières aux parents refusant les vaccins obligatoires de leurs enfants."
    }
  },
  {
    "id": 139,
    "categoryKey": "society",
    "axis": "soc",
    "multiplier": 1,
    "isQuick": false,
    "text": {
      "pl": "Uchodźcy uciekający przed wojną powinni mieć prawo złożyć wniosek o azyl bez bezprawnego wypychania za granicę.",
      "en": "Refugees fleeing war should have an undisputed legal right to seek asylum without summary pushbacks.",
      "es": "Los refugiados que huyen de la guerra deben poder solicitar asilo sin sufrir devoluciones en caliente.",
      "de": "Kriegsflüchtlinge sollten das Recht haben, Asylanträge zu stellen, ohne illegal an Grenzen abgewiesen zu werden.",
      "ru": "Беженцы от войны должны иметь право подавать прошение об убежище без силового выдворения на границе.",
      "fr": "Les réfugiés fuyant les conflits armés devraient pouvoir demander l'asile sans subir de refoulement immédiat."
    }
  },
  {
    "id": 140,
    "categoryKey": "society",
    "axis": "soc",
    "multiplier": -1,
    "isQuick": false,
    "text": {
      "pl": "Imigranci powinni mieć bezwzględny obowiązek pełnej asymilacji i zdania testu z języka oraz tradycji kraju.",
      "en": "Immigrants should be legally mandated to assimilate culturally and pass language and civics exams.",
      "es": "Los inmigrantes deben tener la obligación de integrarse culturalmente y aprobar exámenes cívicos y de idioma.",
      "de": "Zuwanderer sollten gesetzlich verpflichtet werden, Sprache und Bräuche des Landes nachweisbar zu erlernen.",
      "ru": "Иммигранты должны быть обязаны полностью ассимилироваться и сдавать строгий экзамен по языку и культуре.",
      "fr": "Les immigrés devraient avoir l'obligation de s'assimiler et de réussir un examen de langue et de valeurs civiques."
    }
  },
  {
    "id": 141,
    "categoryKey": "society",
    "axis": "soc",
    "multiplier": 1,
    "isQuick": false,
    "text": {
      "pl": "Pary jednopłciowe powinny mieć pełne prawo do legalnej adopcji dzieci na równi z parami różnopłciowymi.",
      "en": "Same-sex couples should possess the exact same legal rights to adopt children as opposite-sex couples.",
      "es": "Las parejas homosexuales deben tener el mismo derecho a adoptar niños que las heterosexuales.",
      "de": "Gleichgeschlechtliche Paare sollten das uneingeschränkte Recht haben, Kinder zu adoptieren.",
      "ru": "Однополые пары должны иметь точно такое же право на усыновление детей, как и разнополые пары.",
      "fr": "Les couples de même sexe devraient avoir exactement les mêmes droits d'adopter des enfants que les couples hétérosexuels."
    }
  },
  {
    "id": 142,
    "categoryKey": "society",
    "axis": "soc",
    "multiplier": -1,
    "isQuick": false,
    "text": {
      "pl": "Utrzymanie spokoju i porządku publicznego jest ważniejsze niż bezwzględne prawo do ulicznych demonstracji.",
      "en": "Maintaining civil peace and public order takes priority over unrestricted rights to street protests.",
      "es": "Mantener el orden público y la tranquilidad ciudadana es más importante que permitir protestas callejeras.",
      "de": "Die Aufrechterhaltung von Ruhe und Ordnung ist wichtiger als ein grenzenloses Recht auf Straßendemonstrationen.",
      "ru": "Общественный порядок и спокойствие на улицах важнее, чем безусловное право на шумные митинги.",
      "fr": "Le maintien de l'ordre public et la tranquillité civile priment sur le droit absolu de manifester dans la rue."
    }
  },
  {
    "id": 143,
    "categoryKey": "society",
    "axis": "soc",
    "multiplier": 1,
    "isQuick": false,
    "text": {
      "pl": "Drobne posiadanie substancji psychoaktywnych powinno być traktowane jak problem zdrowotny, a nie przestępstwo.",
      "en": "Minor drug possession should be handled as a public health issue rather than a criminal felony.",
      "es": "El consumo propio de sustancias debería abordarse como un tema de salud pública y no con penas de cárcel.",
      "de": "Der Besitz kleiner Mengen Rauschmittel sollte als Gesundheitsthema statt als Straftat behandelt werden.",
      "ru": "Хранение небольших количеств психоактивных веществ должно лечиться врачами, а не наказываться тюрьмой.",
      "fr": "La possession de petites quantités de drogues devrait être traitée comme un enjeu médical et non pénal."
    }
  },
  {
    "id": 144,
    "categoryKey": "society",
    "axis": "soc",
    "multiplier": -1,
    "isQuick": false,
    "text": {
      "pl": "Nauczyciele w szkołach powinni uczyć dzieci szacunku do tradycyjnych ról męskich i kobiecych.",
      "en": "School educators should teach children to respect traditional masculine and feminine roles.",
      "es": "La escuela debe inculcar el respeto por los roles familiares tradicionales masculinos y femeninos.",
      "de": "Lehrkräfte sollten Schülern Respekt vor traditionellen Rollenbildern von Mann und Frau vermitteln.",
      "ru": "В школах детей должны воспитывать в уважении к традиционным мужским и женским ролям.",
      "fr": "L'école devrait enseigner le respect des rôles masculins et féminins traditionnels."
    }
  },
  {
    "id": 145,
    "categoryKey": "society",
    "axis": "soc",
    "multiplier": 1,
    "isQuick": false,
    "text": {
      "pl": "Państwo powinno zagwarantować dach nad głową każdemu człowiekowi w kryzysie bezdomności.",
      "en": "The state should guarantee immediate shelter and housing for every unhoused person as a human right.",
      "es": "El Estado debe asegurar un techo digno a toda persona sin hogar como un derecho humano fundamental.",
      "de": "Der Staat sollte jedem obdachlosen Menschen bedingungslos eine feste Unterkunft garantieren.",
      "ru": "Государство должно гарантировать жилье каждому человеку, оказавшемуся на улице.",
      "fr": "L'État devrait garantir un toit digne à chaque personne sans-abri au titre des droits fondamentaux."
    }
  },
  {
    "id": 146,
    "categoryKey": "society",
    "axis": "soc",
    "multiplier": -1,
    "isQuick": false,
    "text": {
      "pl": "Cudzoziemcy przebywający w kraju nielegalnie powinni być natychmiast zatrzymywani i deportowani.",
      "en": "Foreign nationals residing in the country illegally should be swiftly detained and deported.",
      "es": "Los extranjeros en situación irregular en el país deben ser detenidos y expulsados de forma inmediata.",
      "de": "Ausländer ohne gültigen Aufenthaltstitel sollten unverzüglich festgesetzt und abgeschoben werden.",
      "ru": "Иностранцы, находящиеся в стране нелегально, должны немедленно задерживаться и депортироваться.",
      "fr": "Les étrangers en situation irrégulière devraient être immédiatement placés en rétention et expulsés."
    }
  },
  {
    "id": 147,
    "categoryKey": "society",
    "axis": "soc",
    "multiplier": 1,
    "isQuick": false,
    "text": {
      "pl": "Więzienia powinny skupiać się na resocjalizacji i nauce zawodu, a nie na dotkliwym karaniu skazanych.",
      "en": "Prisons should prioritize rehabilitation and vocational training over punitive retribution.",
      "es": "Las prisiones deben centrarse en la reinserción social y laboral de los reclusos antes que en el castigo.",
      "de": "Strafvollzugsanstalten sollten auf Resozialisierung und Berufsausbildung statt auf bloße Vergeltung setzen.",
      "ru": "Тюрьмы должны заниматься обучением профессии и исправлением людей, а не жестоким наказанием.",
      "fr": "Les prisons devraient privilégier la réinsertion et la formation professionnelle plutôt que la punition pure."
    }
  },
  {
    "id": 148,
    "categoryKey": "security",
    "axis": "soc",
    "multiplier": -1,
    "isQuick": true,
    "text": {
      "pl": "Na granicach państwa powinny stać wysokie zapory i mury, a nielegalny wjazd musi być zablokowany.",
      "en": "National borders should be fortified with security barriers and walls to stop illegal crossings.",
      "es": "Las fronteras nacionales deben contar con vallas y muros para frenar la entrada ilegal por la fuerza.",
      "de": "An den Landesgrenzen sollten feste Grenzzäune stehen, um irreguläre Grenzübertritte zu stoppen.",
      "ru": "На государственных границах должны стоять укрепленные заборы для пресечения незаконного въезда.",
      "fr": "Les frontières nationales devraient être protégées par des murs et barrières pour stopper l'immigration illégale."
    }
  },
  {
    "id": 149,
    "categoryKey": "security",
    "axis": "soc",
    "multiplier": 1,
    "isQuick": true,
    "text": {
      "pl": "Kraje Unii Europejskiej powinny zjednoczyć się w jedno wspólne państwo z jednym rządem i armią.",
      "en": "European Union nations should integrate into a unified federal state with one government and army.",
      "es": "Los países de la Unión Europea deberían federarse en un solo Estado con un gobierno y ejército comunes.",
      "de": "Die Mitgliedsstaaten der Europäischen Union sollten sich zu einem föderalen Bundesstaat mit gemeinsamer Armee vereinen.",
      "ru": "Страны Евросоюза должны объединиться в единое федеративное государство с общим правительством и армией.",
      "fr": "Les pays de l'Union européenne devraient s'unir en un État fédéral unique avec un gouvernement et une armée communs."
    }
  },
  {
    "id": 150,
    "categoryKey": "security",
    "axis": "soc",
    "multiplier": -1,
    "isQuick": true,
    "text": {
      "pl": "Obowiązkowa zasadnicza służba wojskowa dla młodych obywateli powinna zostać przywrócona.",
      "en": "Mandatory military conscription for young citizens should be reinstated.",
      "es": "El servicio militar obligatorio para los jóvenes debería restablecerse.",
      "de": "Die allgemeine Wehrpflicht für junge Staatsbürger sollte wieder eingeführt werden.",
      "ru": "Обязательный призыв на военную службу для молодежи должен быть сохранен или возвращен.",
      "fr": "Le service militaire obligatoire pour les jeunes citoyens devrait être rétabli."
    }
  },
  {
    "id": 151,
    "categoryKey": "security",
    "axis": "soc",
    "multiplier": 1,
    "isQuick": false,
    "text": {
      "pl": "Wyroki międzynarodowych trybunałów praw człowieka powinny być ważniejsze niż ustawy krajowego parlamentu.",
      "en": "Rulings of international human rights courts should strictly override national domestic laws.",
      "es": "Las sentencias de tribunales internacionales de derechos humanos deben prevalecer sobre las leyes nacionales.",
      "de": "Urteile internationaler Menschenrechtsgerichte müssen über nationalen Gesetzen stehen.",
      "ru": "Решения международных судов по правам человека должны иметь приоритет над законами национального парламента.",
      "fr": "Les décisions des tribunaux internationaux des droits de l'homme devraient primer sur les lois nationales."
    }
  },
  {
    "id": 152,
    "categoryKey": "security",
    "axis": "soc",
    "multiplier": -1,
    "isQuick": false,
    "text": {
      "pl": "Wydatki na zbrojenia i armię powinny być priorytetem budżetowym, nawet kosztem innych dziedzin.",
      "en": "Defense and military spending should take top budget priority, even at the cost of social spending.",
      "es": "El gasto militar y de defensa debe ser la prioridad del presupuesto, aun a costa de otras partidas.",
      "de": "Rüstungsausgaben und Streitkräfte sollten oberste Haushaltspriorität genießen, auch zulasten anderer Bereiche.",
      "ru": "Расходы на армию и вооружение должны быть главным приоритетом бюджета, даже в ущерб другим сферам.",
      "fr": "Les dépenses militaires et de défense devraient être la priorité budgétaire absolue, même aux dépens d'autres postes."
    }
  },
  {
    "id": 153,
    "categoryKey": "security",
    "axis": "soc",
    "multiplier": 1,
    "isQuick": false,
    "text": {
      "pl": "Powinniśmy dążyć do świata otwartych granic, w którym każdy człowiek może swobodnie mieszkać gdzie chce.",
      "en": "Humanity should strive toward a borderless world where anyone is free to live anywhere on Earth.",
      "es": "Debemos avanzar hacia un mundo sin fronteras donde cualquier ser humano pueda vivir donde desee.",
      "de": "Wir sollten eine Welt offener Grenzen anstreben, in der jeder Mensch frei wählen kann, wo er lebt.",
      "ru": "Человечество должно стремиться к миру открытых границ, где любой человек может жить там, где захочет.",
      "fr": "L'humanité devrait tendre vers un monde sans frontières où chacun est libre de s'établir où il le souhaite."
    }
  },
  {
    "id": 154,
    "categoryKey": "security",
    "axis": "soc",
    "multiplier": -1,
    "isQuick": false,
    "text": {
      "pl": "Interes narodowy własnego kraju musi zawsze stać wyżej niż międzynarodowe traktaty i zobowiązania.",
      "en": "National sovereignty and domestic interests must always supersede international treaties.",
      "es": "El interés nacional del propio país debe prevalecer siempre sobre tratados y organismos internacionales.",
      "de": "Nationale Interessen des eigenen Landes müssen stets über völkerrechtlichen Verträgen stehen.",
      "ru": "Национальные интересы собственной страны должны всегда стоять выше международных договоров.",
      "fr": "L'intérêt national souverain doit toujours prévaloir sur les traités et engagements internationaux."
    }
  },
  {
    "id": 155,
    "categoryKey": "security",
    "axis": "soc",
    "multiplier": 1,
    "isQuick": false,
    "text": {
      "pl": "Bogate kraje powinny bezwarunkowo umorzyć długi najuboższym państwom świata, by zwalczyć nędzę.",
      "en": "Wealthy nations should unconditionally cancel the national debts of developing countries to alleviate poverty.",
      "es": "Las naciones ricas deberían condonar incondicionalmente la deuda a los países más desfavorecidos.",
      "de": "Wohlhabende Staaten sollten die Staatsschulden der ärmsten Entwicklungsländer bedingungslos erlassen.",
      "ru": "Богатые державы должны списать долги беднейшим странам мира для преодоления глобальной нищеты.",
      "fr": "Les nations riches devraient annuler sans condition la dette des pays les plus pauvres pour lutter contre la misère."
    }
  },
  {
    "id": 156,
    "categoryKey": "security",
    "axis": "soc",
    "multiplier": -1,
    "isQuick": false,
    "text": {
      "pl": "Gdy wrogi reżim otwarcie nam zagraża, nasza armia powinna mieć prawo do wyprzedzającego uderzenia militarnego.",
      "en": "When a hostile regime actively threatens us, our armed forces should have the right to launch a preemptive strike.",
      "es": "Ante la amenaza inminente de un régimen hostil, nuestro ejército debe poder lanzar un ataque preventivo.",
      "de": "Bei akuter Bedrohung durch feindliche Regime sollte das Militär präventive Schläge führen dürfen.",
      "ru": "Если враждебный режим создает прямую угрозу, наша армия вправе нанести упреждающий военный удар.",
      "fr": "Lorsqu'un régime hostile nous menace directement, notre armée devrait pouvoir mener une frappe préventive."
    }
  },
  {
    "id": 157,
    "categoryKey": "security",
    "axis": "soc",
    "multiplier": 1,
    "isQuick": false,
    "text": {
      "pl": "Wszystkie mocarstwa powinny całkowicie i bezwarunkowo zlikwidować swoje arsenały broni jądrowej.",
      "en": "All global powers should unconditionally dismantle and abolish all nuclear weapons.",
      "es": "Todas las potencias deberían desmantelar y destruir sin condiciones sus arsenales nucleares.",
      "de": "Sämtliche Großmächte sollten ihre Atomwaffenbestände ausnahmslos und bedingungslos verschrotten.",
      "ru": "Все ядерные державы должны безоговорочно и полностью ликвидировать своё ядерное оружие.",
      "fr": "Toutes les puissances mondiales devraient démanteler totalement et sans condition leurs armes nucléaires."
    }
  },
  {
    "id": 158,
    "categoryKey": "security",
    "axis": "soc",
    "multiplier": -1,
    "isQuick": false,
    "text": {
      "pl": "Każdy dorosły obywatel powinien przejść obowiązkowe państwowe przeszkolenie strzeleckie na wypadek wojny.",
      "en": "Every adult citizen should undergo mandatory marksmanship and civil defense training in case of war.",
      "es": "Todo ciudadano adulto debería recibir entrenamiento obligatorio de tiro y defensa ante posibles guerras.",
      "de": "Jeder erwachsene Staatsbürger sollte ein verpflichtendes Schieß- und Zivilschutztraining für den Ernstfall absolvieren.",
      "ru": "Каждый взрослый гражданин должен пройти обязательную стрелковую подготовку на случай военной угрозы.",
      "fr": "Chaque citoyen adulte devrait suivre une formation obligatoire au tir et à la défense civile en cas de conflit."
    }
  },
  {
    "id": 159,
    "categoryKey": "security",
    "axis": "soc",
    "multiplier": 1,
    "isQuick": false,
    "text": {
      "pl": "Neutralność, traktaty pokojowe i dyplomacja dają trwalsze bezpieczeństwo niż wstępowanie w sojusze militarne.",
      "en": "Neutrality, peace treaties, and diplomacy build more lasting security than joining foreign military alliances.",
      "es": "La neutralidad y la diplomacia garantizan la paz de forma más duradera que los pactos militares.",
      "de": "Neutralität und friedliche Diplomatie schaffen nachhaltigere Sicherheit als der Beitritt zu Militärblöcken.",
      "ru": "Нейтралитет и мирная дипломатия обеспечивают безопасность надежнее, чем вступление в военные союзы.",
      "fr": "La neutralité et les voies diplomatiques offrent une sécurité plus durable que l'adhésion à des alliances militaires."
    }
  },
  {
    "id": 160,
    "categoryKey": "security",
    "axis": "soc",
    "multiplier": -1,
    "isQuick": false,
    "text": {
      "pl": "Obecność stałych baz wojskowych sojuszników na naszym terytorium jest kluczowa dla odstraszenia agresorów.",
      "en": "Stationing permanent allied foreign military bases on our soil is indispensable to deter hostile powers.",
      "es": "Tener bases militares aliadas permanentes en nuestro suelo es fundamental para disuadir a potencias agresoras.",
      "de": "Die dauerhafte Stationierung verbündeter Militärstützpunkte im Inland ist zur Abschreckung unerlässlich.",
      "ru": "Постоянное присутствие военных баз союзников на нашей земле необходимо для сдерживания любых агрессоров.",
      "fr": "La présence de bases militaires alliées permanentes sur notre sol est indispensable pour dissuader toute agression."
    }
  }
];

if (typeof module !== "undefined" && module.exports) {
  module.exports = { categories, answerOptions, questions };
}
