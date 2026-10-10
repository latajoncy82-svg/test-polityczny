/**
 * BAZA 200 PYTAŃ, KATEGORII ORAZ OPCJI ODPOWIEDZI
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
      "pl": "Prywatna własność i wolny rynek powinny być podstawą gospodarki.",
      "en": "Private property and the free market should be the foundation of the economy.",
      "es": "La propiedad privada y el libre mercado deben ser la base de la economía.",
      "de": "Privateigentum und der freie Markt sollten das Fundament der Wirtschaft sein.",
      "ru": "Частная собственность и свободный рынок должны быть основой экономики.",
      "fr": "La propriété privée et le libre marché devraient être le fondement de l'économie."
    }
  },
  {
    "id": 2,
    "categoryKey": "economy",
    "axis": "econ",
    "multiplier": -1,
    "isQuick": true,
    "text": {
      "pl": "Rząd powinien ustalać maksymalne ceny prądu i gazu.",
      "en": "The government should set price caps on electricity and natural gas.",
      "es": "El gobierno debe fijar precios máximos para la electricidad y el gas.",
      "de": "Die Regierung sollte Höchstpreise für Strom und Gas festlegen.",
      "ru": "Правительство должно устанавливать предельные цены на электричество и газ.",
      "fr": "Le gouvernement devrait plafonner les prix de l'électricité et du gaz."
    }
  },
  {
    "id": 3,
    "categoryKey": "economy",
    "axis": "econ",
    "multiplier": 1,
    "isQuick": true,
    "text": {
      "pl": "Państwo nie powinno ratować bankrutujących prywatnych przedsiębiorstw.",
      "en": "The state should not bail out failing private businesses.",
      "es": "El Estado no debe rescatar a empresas privadas en quiebra.",
      "de": "Der Staat sollte insolvente Privatunternehmen nicht retten.",
      "ru": "Государство не должно спасать убыточные частные предприятия.",
      "fr": "L'État ne devrait pas renflouer les entreprises privées en faillite."
    }
  },
  {
    "id": 4,
    "categoryKey": "economy",
    "axis": "econ",
    "multiplier": -1,
    "isQuick": false,
    "text": {
      "pl": "Kopalnie i elektrownie powinny być własnością państwa.",
      "en": "Mines and power plants should be owned by the state.",
      "es": "Las minas y centrales eléctricas deben ser propiedad del Estado.",
      "de": "Bergwerke und Kraftwerke sollten in staatlichem Besitz sein.",
      "ru": "Шахты и электростанции должны принадлежать государству.",
      "fr": "Les mines et les centrales électriques devraient appartenir à l'État."
    }
  },
  {
    "id": 5,
    "categoryKey": "economy",
    "axis": "econ",
    "multiplier": 1,
    "isQuick": false,
    "text": {
      "pl": "Sklepy powinny mieć prawo handlować w każdą niedzielę.",
      "en": "Retail stores should have the right to be open every Sunday.",
      "es": "Los comercios deberían tener derecho a abrir todos los domingos.",
      "de": "Geschäfte sollten das Recht haben, an jedem Sonntag zu öffnen.",
      "ru": "Магазины должны иметь право работать каждое воскресенье.",
      "fr": "Les commerces devraient avoir le droit d'ouvrir tous les dimanches."
    }
  },
  {
    "id": 6,
    "categoryKey": "economy",
    "axis": "econ",
    "multiplier": -1,
    "isQuick": false,
    "text": {
      "pl": "Rząd powinien decydować, które gałęzie gospodarki należy rozwijać.",
      "en": "The government should direct which economic sectors receive development priority.",
      "es": "El gobierno debe decidir qué sectores económicos desarrollar prioritariamente.",
      "de": "Die Regierung sollte bestimmen, welche Wirtschaftszweige vorrangig gefördert werden.",
      "ru": "Правительство должно решать, какие отрасли экономики нужно развивать.",
      "fr": "Le gouvernement devrait décider des secteurs économiques à développer en priorité."
    }
  },
  {
    "id": 7,
    "categoryKey": "economy",
    "axis": "econ",
    "multiplier": 1,
    "isQuick": false,
    "text": {
      "pl": "Koleje pasażerskie powinny zostać sprywatyzowane.",
      "en": "Passenger railways should be privatized.",
      "es": "Los ferrocarriles de pasajeros deben ser privatizados.",
      "de": "Der Personenverkehr auf der Schiene sollte privatisiert werden.",
      "ru": "Пассажирские железные дороги должны быть приватизированы.",
      "fr": "Le transport ferroviaire de passagers devrait être privatisé."
    }
  },
  {
    "id": 8,
    "categoryKey": "economy",
    "axis": "econ",
    "multiplier": -1,
    "isQuick": false,
    "text": {
      "pl": "Zyski wielkich korporacji powinny być odgórnie ograniczane przez państwo.",
      "en": "Corporate profits should be subject to state-mandated legal caps.",
      "es": "Los beneficios de las grandes corporaciones deben tener topes fijados por ley.",
      "de": "Großkonzerngewinne sollten gesetzlich nach oben begrenzt werden.",
      "ru": "Прибыль крупных корпораций должна быть ограничена государством.",
      "fr": "Les bénéfices des grandes entreprises devraient être légalement plafonnés par l'État."
    }
  },
  {
    "id": 9,
    "categoryKey": "economy",
    "axis": "econ",
    "multiplier": 1,
    "isQuick": false,
    "text": {
      "pl": "Państwo nie powinno wypłacać żadnych dotacji prywatnym firmom.",
      "en": "The state should provide zero financial subsidies to private companies.",
      "es": "El Estado no debe otorgar ninguna subvención a empresas privadas.",
      "de": "Der Staat sollte privaten Firmen keinerlei Subventionen auszahlen.",
      "ru": "Государство не должно выплачивать субсидии частным компаниям.",
      "fr": "L'État ne devrait verser aucune subvention aux entreprises privées."
    }
  },
  {
    "id": 10,
    "categoryKey": "economy",
    "axis": "econ",
    "multiplier": -1,
    "isQuick": false,
    "text": {
      "pl": "Państwo powinno wspierać spółdzielnie zamiast prywatnych korporacji.",
      "en": "The state should prioritize worker cooperatives over private corporations.",
      "es": "El Estado debe apoyar a las cooperativas frente a las corporaciones privadas.",
      "de": "Der Staat sollte Genossenschaften gegenüber privaten Konzernen bevorzugen.",
      "ru": "Государство должно поддерживать кооперативы, а не частные корпорации.",
      "fr": "L'État devrait soutenir les coopératives plutôt que les entreprises privées."
    }
  },
  {
    "id": 11,
    "categoryKey": "economy",
    "axis": "econ",
    "multiplier": 1,
    "isQuick": false,
    "text": {
      "pl": "Zakładanie firmy nie powinno wymagać żadnych licencji ani zezwoleń.",
      "en": "Starting a business should require no government licenses or permits.",
      "es": "Crear una empresa no debería requerir licencias ni permisos gubernamentales.",
      "de": "Eine Unternehmensgründung sollte keinerlei staatliche Lizenzen erfordern.",
      "ru": "Регистрация бизнеса не должна требовать лицензий или разрешений.",
      "fr": "Créer une entreprise ne devrait nécessiter aucune licence ni autorisation préalable."
    }
  },
  {
    "id": 12,
    "categoryKey": "economy",
    "axis": "econ",
    "multiplier": -1,
    "isQuick": false,
    "text": {
      "pl": "Sieci wodociągowe muszą być wyłączną własnością publiczną.",
      "en": "Water supply systems must remain exclusively public property.",
      "es": "Las redes de agua deben ser exclusivamente de propiedad pública.",
      "de": "Wasserversorgungsnetze müssen ausnahmslos in öffentlicher Hand sein.",
      "ru": "Водопроводные сети должны быть исключительно государственной собственностью.",
      "fr": "Les réseaux d'eau doivent rester exclusivement propriété publique."
    }
  },
  {
    "id": 13,
    "categoryKey": "economy",
    "axis": "econ",
    "multiplier": 1,
    "isQuick": false,
    "text": {
      "pl": "Poczta i usługi doręczeniowe powinny być w rękach prywatnych firm.",
      "en": "Postal and parcel delivery services should be operated entirely by private firms.",
      "es": "Los servicios postales y de reparto deben estar en manos de empresas privadas.",
      "de": "Post- und Zustelldienste sollten vollständig privatwirtschaftlich betrieben werden.",
      "ru": "Почта и доставка должны принадлежать частным компаниям.",
      "fr": "Les services postaux et de livraison devraient être gérés par des entreprises privées."
    }
  },
  {
    "id": 14,
    "categoryKey": "economy",
    "axis": "econ",
    "multiplier": -1,
    "isQuick": false,
    "text": {
      "pl": "Państwo powinno mieć prawo wywłaszczać prywatną ziemię pod inwestycje publiczne.",
      "en": "The state should have the right to expropriate private land for public infrastructure.",
      "es": "El Estado debe tener derecho a expropiar terrenos privados para obras públicas.",
      "de": "Der Staat sollte das Recht haben, privates Land für öffentliche Bauten zu enteignen.",
      "ru": "Государство должно иметь право отчуждать частную землю под общественные стройки.",
      "fr": "L'État devrait pouvoir exproprier des terres privées pour des projets d'intérêt public."
    }
  },
  {
    "id": 15,
    "categoryKey": "economy",
    "axis": "econ",
    "multiplier": 1,
    "isQuick": false,
    "text": {
      "pl": "Linie lotnicze powinny być wyłącznie prywatne.",
      "en": "Commercial airlines should be entirely privately owned.",
      "es": "Las aerolíneas comerciales deben ser exclusivamente privadas.",
      "de": "Fluggesellschaften sollten ausschließlich privatwirtschaftlich sein.",
      "ru": "Авиакомпании должны быть исключительно частными.",
      "fr": "Les compagnies aériennes devraient être exclusivement privées."
    }
  },
  {
    "id": 16,
    "categoryKey": "economy",
    "axis": "econ",
    "multiplier": -1,
    "isQuick": false,
    "text": {
      "pl": "Rząd powinien zagwarantować każdemu obywatelowi państwowe miejsce pracy.",
      "en": "The government should guarantee every citizen a job in the public sector.",
      "es": "El gobierno debe garantizar un empleo público a cualquier ciudadano que lo solicite.",
      "de": "Die Regierung sollte jedem Bürger einen garantierten staatlichen Arbeitsplatz bieten.",
      "ru": "Правительство должно гарантировать каждому гражданину государственное рабочее место.",
      "fr": "Le gouvernement devrait garantir un emploi public à chaque citoyen."
    }
  },
  {
    "id": 17,
    "categoryKey": "economy",
    "axis": "econ",
    "multiplier": 1,
    "isQuick": false,
    "text": {
      "pl": "Przedsiębiorca powinien mieć prawo odmówić obsługi klienta według własnego uznania.",
      "en": "Business owners should have the right to refuse service to any customer at their discretion.",
      "es": "El dueño de un negocio debe tener derecho a rechazar clientes a su propio criterio.",
      "de": "Geschäftsinhaber sollten das Recht haben, Kunden nach eigenem Ermessen abzuweisen.",
      "ru": "Предприниматель должен иметь право отказать клиенту в обслуживании по своему усмотрению.",
      "fr": "Un commerçant devrait pouvoir refuser de servir un client à sa libre discrétion."
    }
  },
  {
    "id": 18,
    "categoryKey": "taxation",
    "axis": "econ",
    "multiplier": 1,
    "isQuick": true,
    "text": {
      "pl": "Wszyscy obywatele powinni płacić jednakowy procent podatku dochodowego (podatek liniowy).",
      "en": "All citizens should pay the exact same income tax rate (flat tax).",
      "es": "Todos los ciudadanos deben pagar el mismo porcentaje de impuesto sobre la renta (tipo único).",
      "de": "Alle Bürger sollten denselben Steuersatz auf ihr Einkommen zahlen (Flat Tax).",
      "ru": "Все граждане должны платить одинаковый процент подоходного налога (плоская шкала).",
      "fr": "Tous les citoyens devraient payer le même taux d'imposition sur le revenu (taux unique)."
    }
  },
  {
    "id": 19,
    "categoryKey": "taxation",
    "axis": "econ",
    "multiplier": -1,
    "isQuick": true,
    "text": {
      "pl": "Miliarderzy powinni płacić coroczny podatek od posiadanego majątku.",
      "en": "Billionaires should pay an annual wealth tax on their total assets.",
      "es": "Los multimillonarios deben pagar un impuesto anual sobre su patrimonio.",
      "de": "Milliardäre sollten eine jährliche Steuer auf ihr Gesamtvermögen zahlen.",
      "ru": "Миллиардеры должны платить ежегодный налог на своё состояние.",
      "fr": "Les milliardaires devraient payer un impôt annuel sur leur fortune totale."
    }
  },
  {
    "id": 20,
    "categoryKey": "taxation",
    "axis": "econ",
    "multiplier": 1,
    "isQuick": false,
    "text": {
      "pl": "Podatek od spadków i darowizn w rodzinie powinien być zlikwidowany.",
      "en": "Inheritance and gift taxes between family members should be abolished.",
      "es": "El impuesto de sucesiones y donaciones familiares debe ser eliminado.",
      "de": "Die Erbschaft- und Schenkungsteuer für Familienmitglieder sollte abgeschafft werden.",
      "ru": "Налог на наследство и дарение внутри семьи должен быть отменён.",
      "fr": "Les droits de succession et de donation entre membres d'une famille devraient être abolis."
    }
  },
  {
    "id": 21,
    "categoryKey": "taxation",
    "axis": "econ",
    "multiplier": -1,
    "isQuick": false,
    "text": {
      "pl": "Najbogatsi powinni płacić podatek dochodowy powyżej 50% swoich najwyższych zarobków.",
      "en": "Top earners should pay over 50% in income tax on their highest earnings bracket.",
      "es": "Las rentas más altas deben tributar por encima del 50% en sus ingresos superiores.",
      "de": "Spitzenverdiener sollten über 50% Einkommensteuer auf ihre höchsten Einkünfte zahlen.",
      "ru": "Самые богатые должны платить свыше 50% налога со своих сверхдоходов.",
      "fr": "Les plus hauts revenus devraient payer plus de 50% d'impôt sur la tranche supérieure."
    }
  },
  {
    "id": 22,
    "categoryKey": "taxation",
    "axis": "econ",
    "multiplier": 1,
    "isQuick": false,
    "text": {
      "pl": "Podatki od dochodów przedsiębiorstw powinny być obniżone do minimum.",
      "en": "Corporate income taxes should be reduced to a bare minimum.",
      "es": "El impuesto sobre sociedades debe reducirse al mínimo posible.",
      "de": "Die Unternehmenssteuern sollten auf ein absolutes Minimum gesenkt werden.",
      "ru": "Налоги на прибыль предприятий должны быть снижены до минимума.",
      "fr": "L'impôt sur les bénéfices des entreprises devrait être réduit au minimum."
    }
  },
  {
    "id": 23,
    "categoryKey": "taxation",
    "axis": "econ",
    "multiplier": -1,
    "isQuick": false,
    "text": {
      "pl": "Wszystkie kraje powinny wprowadzić wysoki, minimalny podatek dla międzynarodowych korporacji.",
      "en": "All countries should enforce a high global minimum tax rate on multinational corporations.",
      "es": "Todos los países deben aplicar un tipo impositivo mínimo elevado a las multinacionales.",
      "de": "Alle Staaten sollten einen hohen globalen Mindeststeuersatz für Großkonzerne beschließen.",
      "ru": "Все страны должны ввести высокий минимальный налог для международных корпораций.",
      "fr": "Tous les pays devraient instaurer un taux d'imposition minimal élevé pour les multinationales."
    }
  },
  {
    "id": 24,
    "categoryKey": "taxation",
    "axis": "econ",
    "multiplier": 1,
    "isQuick": false,
    "text": {
      "pl": "Akcyza na paliwo i prąd powinna zostać drastycznie obniżona.",
      "en": "Excise taxes on vehicle fuel and electricity should be drastically reduced.",
      "es": "Los impuestos especiales sobre los combustibles y la luz deben reducirse drásticamente.",
      "de": "Verbrauchssteuern auf Treibstoffe und Strom sollten drastisch abgesenkt werden.",
      "ru": "Акцизы на топливо и электричество должны быть резко снижены.",
      "fr": "Les taxes intérieures sur les carburants et l'électricité devraient être fortement réduites."
    }
  },
  {
    "id": 25,
    "categoryKey": "taxation",
    "axis": "econ",
    "multiplier": -1,
    "isQuick": false,
    "text": {
      "pl": "Transakcje giełdowe i handel walutami powinny być objęte podatkiem transakcyjnym.",
      "en": "Stock market trading and currency transactions should carry a financial transaction tax.",
      "es": "Las operaciones bursátiles y de divisas deben pagar un impuesto a las transacciones financieras.",
      "de": "Börsenhandel und Devisengeschäfte sollten mit einer Finanztransaktionssteuer belegt werden.",
      "ru": "Биржевые сделки и торговля валютой должны облагаться налогом на транзакции.",
      "fr": "Les transactions boursières et opérations de change devraient être soumises à une taxe financière."
    }
  },
  {
    "id": 26,
    "categoryKey": "taxation",
    "axis": "econ",
    "multiplier": 1,
    "isQuick": false,
    "text": {
      "pl": "Podatek od zysków z lokat bankowych i akcji powinien zostać zniesiony.",
      "en": "Capital gains taxes on bank savings interest and stock investments should be abolished.",
      "es": "El impuesto sobre los rendimientos del ahorro bancario y acciones debe suprimirse.",
      "de": "Die Steuer auf Erträge aus Bankguthaben und Aktien sollte gestrichen werden.",
      "ru": "Налог на доходы по банковским вкладам и акциям должен быть отменён.",
      "fr": "L'impôt sur les intérêts d'épargne et les plus-values d'actions devrait être supprimé."
    }
  },
  {
    "id": 27,
    "categoryKey": "taxation",
    "axis": "econ",
    "multiplier": -1,
    "isQuick": false,
    "text": {
      "pl": "Państwo powinno nakładać dodatkowy podatek na nadzwyczajne zyski banków.",
      "en": "The state should levy a windfall tax on extraordinary bank profits.",
      "es": "El Estado debe aplicar un impuesto extraordinario a los beneficios bancarios.",
      "de": "Der Staat sollte eine Sondersteuer auf Übergewinne von Banken erheben.",
      "ru": "Государство должно облагать налогом сверхприбыль банков.",
      "fr": "L'État devrait prélever une taxe exceptionnelle sur les superprofits bancaires."
    }
  },
  {
    "id": 28,
    "categoryKey": "taxation",
    "axis": "econ",
    "multiplier": 1,
    "isQuick": false,
    "text": {
      "pl": "Rządy powinny konkurować ze sobą o inwestorów niskimi podatkami.",
      "en": "Governments should actively compete with each other for business investment through lower taxes.",
      "es": "Los gobiernos deben competir entre sí atrayendo empresas con impuestos más bajos.",
      "de": "Regierungen sollten über niedrige Steuern im Wettbewerb um Investoren stehen.",
      "ru": "Государства должны конкурировать за инвесторов низкими налогами.",
      "fr": "Les gouvernements devraient se concurrencer pour attirer les investissements par des impôts bas."
    }
  },
  {
    "id": 29,
    "categoryKey": "taxation",
    "axis": "econ",
    "multiplier": -1,
    "isQuick": false,
    "text": {
      "pl": "Ukrywanie majątku w rajach podatkowych powinno być karane bezwzględnym więzieniem.",
      "en": "Hiding assets in offshore tax havens should carry mandatory prison sentences.",
      "es": "Ocultar patrimonio en paraísos fiscales debe castigarse con pena de cárcel efectiva.",
      "de": "Das Verstecken von Vermögen in Steueroasen sollte mit Freiheitsstrafen geahndet werden.",
      "ru": "Сокрытие активов в офшорных зонах должно караться тюремным заключением.",
      "fr": "Dissimuler des avoirs dans des paradis fiscaux devrait être puni de prison ferme."
    }
  },
  {
    "id": 30,
    "categoryKey": "taxation",
    "axis": "econ",
    "multiplier": 1,
    "isQuick": false,
    "text": {
      "pl": "Wszystkie ulgi podatkowe powinny zostać zniesione w zamian za jeden niski podatek.",
      "en": "All tax deductions and loopholes should be eliminated in exchange for a single low tax rate.",
      "es": "Todas las deducciones fiscales deben suprimirse a cambio de un tipo impositivo general bajo.",
      "de": "Sämtliche Steuervorteile sollten zugunsten eines einheitlich niedrigen Steuersatzes entfallen.",
      "ru": "Все налоговые льготы должны быть отменены в обмен на единую низкую ставку.",
      "fr": "Toutes les niches fiscales devraient être supprimées en échange d'un taux d'imposition unique et bas."
    }
  },
  {
    "id": 31,
    "categoryKey": "taxation",
    "axis": "econ",
    "multiplier": -1,
    "isQuick": false,
    "text": {
      "pl": "Właściciele więcej niż jednego mieszkania powinni płacić wyższy podatek od nieruchomości.",
      "en": "Property owners who hold more than one residential dwelling should pay higher real estate taxes.",
      "es": "Quienes posean más de una vivienda deberían pagar un impuesto sobre bienes inmuebles más alto.",
      "de": "Eigentümer von mehr als einer Wohnimmobilie sollten eine erhöhte Grundsteuer zahlen.",
      "ru": "Владельцы более чем одной квартиры должны платить повышенный налог на недвижимость.",
      "fr": "Les propriétaires de plus d'un logement devraient payer une taxe foncière majorée."
    }
  },
  {
    "id": 32,
    "categoryKey": "taxation",
    "axis": "econ",
    "multiplier": 1,
    "isQuick": false,
    "text": {
      "pl": "Podatek VAT na wszystkie towary powinien zostać obniżony.",
      "en": "Value-added tax (VAT) rates on all goods should be reduced.",
      "es": "El IVA aplicado a todos los productos debe ser rebajado.",
      "de": "Die Mehrwertsteuer auf alle Waren sollte gesenkt werden.",
      "ru": "Ставка НДС на все товары должна быть снижена.",
      "fr": "Le taux de TVA sur tous les biens devrait être diminué."
    }
  },
  {
    "id": 33,
    "categoryKey": "taxation",
    "axis": "econ",
    "multiplier": -1,
    "isQuick": false,
    "text": {
      "pl": "Napoje słodzone i fast food powinny być obciążone specjalnym podatkiem cukrowym.",
      "en": "Sugary drinks and fast food should carry a dedicated health tax.",
      "es": "Las bebidas azucaradas y la comida rápida deben pagar un impuesto especial.",
      "de": "Zuckerhaltige Getränke und Fast Food sollten mit einer Sondersteuer belegt werden.",
      "ru": "Сладкие газированные напитки и фастфуд должны облагаться специальным налогом.",
      "fr": "Les boissons sucrées et la restauration rapide devraient être soumises à une taxe spécifique."
    }
  },
  {
    "id": 34,
    "categoryKey": "taxation",
    "axis": "econ",
    "multiplier": -1,
    "isQuick": false,
    "text": {
      "pl": "Zakup luksusowych samochodów i jachtów powinien być obciążony wysokim podatkiem.",
      "en": "Purchasing luxury sports cars and private yachts should face heavy luxury taxes.",
      "es": "La compra de coches de lujo y yates privados debe gravarse con un impuesto elevado.",
      "de": "Der Kauf von Luxusautos und Yachten sollte mit einer hohen Luxussteuer belegt werden.",
      "ru": "Покупка люксовых автомобилей и яхт должна облагаться высоким налогом на роскошь.",
      "fr": "L'achat de voitures de luxe et de yachts privés devrait être soumis à une taxe élevée sur le luxe."
    }
  },
  {
    "id": 35,
    "categoryKey": "labor",
    "axis": "econ",
    "multiplier": 1,
    "isQuick": true,
    "text": {
      "pl": "Płaca minimalna powinna zostać całkowicie zlikwidowana.",
      "en": "The statutory minimum wage should be completely eliminated.",
      "es": "El salario mínimo interprofesional debe ser completamente eliminado.",
      "de": "Der gesetzliche Mindestlohn sollte vollständig abgeschafft werden.",
      "ru": "Минимальный размер оплаты труда должен быть полностью отменён.",
      "fr": "Le salaire minimum légal devrait être totalement supprimé."
    }
  },
  {
    "id": 36,
    "categoryKey": "labor",
    "axis": "econ",
    "multiplier": -1,
    "isQuick": true,
    "text": {
      "pl": "Tydzień pracy powinien zostać skrócony do 4 dni bez obniżania pensji.",
      "en": "The standard workweek should be reduced to four days with zero wage cuts.",
      "es": "La jornada laboral semanal debe reducirse a 4 días sin merma de sueldo.",
      "de": "Die Wochenarbeitszeit sollte bei vollem Lohnausgleich auf 4 Tage verkürzt werden.",
      "ru": "Рабочая неделя должна быть сокращена до 4 дней без снижения зарплаты.",
      "fr": "La semaine de travail devrait être réduite à 4 jours sans perte de salaire."
    }
  },
  {
    "id": 37,
    "categoryKey": "labor",
    "axis": "econ",
    "multiplier": 1,
    "isQuick": true,
    "text": {
      "pl": "Pracodawca powinien mieć prawo zwolnić pracownika bez podawania przyczyny.",
      "en": "Employers should be legally allowed to fire workers at will without stating a reason.",
      "es": "Un empresario debe tener derecho a despedir a un empleado sin justificar la causa.",
      "de": "Arbeitgeber sollten Mitarbeiter grundlos und fristlos kündigen dürfen.",
      "ru": "Работодатель должен иметь право уволить сотрудника без объяснения причин.",
      "fr": "Un employeur devrait pouvoir licencier un salarié sans avoir à motiver sa décision."
    }
  },
  {
    "id": 38,
    "categoryKey": "labor",
    "axis": "econ",
    "multiplier": -1,
    "isQuick": false,
    "text": {
      "pl": "Związki zawodowe powinny mieć prawo weta wobec masowych zwolnień.",
      "en": "Labor unions should hold veto power over mass corporate layoffs.",
      "es": "Los sindicatos deben tener poder de veto sobre los despidos colectivos.",
      "de": "Gewerkschaften sollten ein Vetorecht bei Massenentlassungen erhalten.",
      "ru": "Профсоюзы должны иметь право вето на массовые увольнения работников.",
      "fr": "Les syndicats devraient détenir un droit de veto sur les licenciements économiques collectifs."
    }
  },
  {
    "id": 39,
    "categoryKey": "labor",
    "axis": "econ",
    "multiplier": 1,
    "isQuick": false,
    "text": {
      "pl": "Strajki blokujące transport publiczny i szpitale powinny być zakazane.",
      "en": "Strikes that disrupt public transportation and hospitals should be prohibited.",
      "es": "Las huelgas que paralicen el transporte público o la sanidad deben estar prohibidas.",
      "de": "Streiks, die öffentlichen Nahverkehr oder Krankenhäuser lahmlegen, sollten verboten sein.",
      "ru": "Забастовки, блокирующие общественный транспорт и больницы, должны быть запрещены.",
      "fr": "Les grèves bloquant les transports publics ou les hôpitaux devraient être interdites."
    }
  },
  {
    "id": 40,
    "categoryKey": "labor",
    "axis": "econ",
    "multiplier": -1,
    "isQuick": false,
    "text": {
      "pl": "Pracownicy powinni mieć zagwarantowane miejsca w zarządach dużych firm.",
      "en": "Workers should have legally mandated seats on the boards of large companies.",
      "es": "Los trabajadores deben tener puestos reservados en la dirección de las grandes empresas.",
      "de": "Arbeitnehmer sollten feste Sitze in Vorständen und Aufsichtsräten von Konzernen haben.",
      "ru": "Работникам должны быть гарантированы места в руководстве крупных компаний.",
      "fr": "Les salariés devraient avoir des sièges garantis dans les conseils d'administration des grandes entreprises."
    }
  },
  {
    "id": 41,
    "categoryKey": "labor",
    "axis": "econ",
    "multiplier": 1,
    "isQuick": false,
    "text": {
      "pl": "Zatrudnianie nowych pracowników na miejsce strajkujących powinno być legalne.",
      "en": "Hiring replacement workers to take over for striking staff should be legal.",
      "es": "Contratar nuevo personal para sustituir a huelguistas debe ser legal.",
      "de": "Die Einstellung von Ersatzkräften während eines Streiks sollte legal sein.",
      "ru": "Приём новых сотрудников на место бастующих должен быть разрешён законом.",
      "fr": "Recruter des remplaçants pour assurer le travail de grévistes devrait être légal."
    }
  },
  {
    "id": 42,
    "categoryKey": "labor",
    "axis": "econ",
    "multiplier": -1,
    "isQuick": false,
    "text": {
      "pl": "Firmy zastępujące pracowników robotami powinny płacić podatek od automatyzacji.",
      "en": "Companies replacing human workers with robots should pay an automation tax.",
      "es": "Las empresas que sustituyan empleados por robots deben pagar un impuesto a la automatización.",
      "de": "Unternehmen, die Arbeitskräfte durch Roboter ersetzen, sollten eine Robotersteuer zahlen.",
      "ru": "Компании, заменяющие работников роботами, должны платить налог на автоматизацию.",
      "fr": "Les entreprises remplaçant des salariés par des robots devraient payer une taxe sur l'automatisation."
    }
  },
  {
    "id": 43,
    "categoryKey": "labor",
    "axis": "econ",
    "multiplier": 1,
    "isQuick": false,
    "text": {
      "pl": "Elastyczne umowy cywilnoprawne i zlecenia nie powinny być ograniczane przez państwo.",
      "en": "Freelance and flexible independent contractor agreements should not face state restrictions.",
      "es": "Los contratos mercantiles y autónomos no deben ser restringidos por la ley.",
      "de": "Freie Dienstverträge und Freelance-Tätigkeiten sollten staatlich nicht beschränkt werden.",
      "ru": "Договоры подряда и самозанятости не должны ограничиваться государством.",
      "fr": "Les contrats de prestation indépendants ne devraient pas être restreints par la loi."
    }
  },
  {
    "id": 44,
    "categoryKey": "labor",
    "axis": "econ",
    "multiplier": -1,
    "isQuick": false,
    "text": {
      "pl": "Kurierzy i kierowcy aplikacji powinni mieć obowiązkowe umowy o pracę.",
      "en": "App delivery couriers and ride-share drivers should be classified as regular employees.",
      "es": "Los repartidores y conductores de plataformas digitales deben ser asalariados fijos.",
      "de": "Plattformkuriere und Fahrdienstleister sollten als feste Angestellte eingestuft werden.",
      "ru": "Курьеры и таксисты онлайн-сервисов должны иметь обязательные трудовые договоры.",
      "fr": "Les livreurs et chauffeurs de plateformes devraient obligatoirement être salariés sous contrat."
    }
  },
  {
    "id": 45,
    "categoryKey": "labor",
    "axis": "econ",
    "multiplier": 1,
    "isQuick": false,
    "text": {
      "pl": "Należenie do związku zawodowego i płacenie składek musi być dobrowolne.",
      "en": "Union membership and union dues payments must be entirely voluntary.",
      "es": "La afiliación sindical y el abono de cuotas deben ser estrictamente voluntarios.",
      "de": "Gewerkschaftsmitgliedschaft und Beitragszahlung müssen stets freiwillig sein.",
      "ru": "Членство в профсоюзе и уплата взносов должны быть исключительно добровольными.",
      "fr": "L'adhésion syndicale et le paiement des cotisations doivent être entièrement libres."
    }
  },
  {
    "id": 46,
    "categoryKey": "labor",
    "axis": "econ",
    "multiplier": -1,
    "isQuick": false,
    "text": {
      "pl": "Praca w nadgodzinach powyżej 48 godzin tygodniowo powinna być całkowicie zakazana.",
      "en": "Working overtime beyond 48 total hours in a week should be legally prohibited.",
      "es": "Superar las 48 horas semanales sumando horas extraordinarias debe estar prohibido por ley.",
      "de": "Überstunden über insgesamt 48 Wochenstunden hinaus sollten gesetzlich untersagt sein.",
      "ru": "Переработки сверх 48 часов в неделю должны быть полностью запрещены законом.",
      "fr": "Effectuer des heures supplémentaires au-delà de 48 heures par semaine devrait être illégal."
    }
  },
  {
    "id": 47,
    "categoryKey": "labor",
    "axis": "econ",
    "multiplier": 1,
    "isQuick": false,
    "text": {
      "pl": "Stawki za pracę w niedziele i w nocy powinny zależeć wyłącznie od umowy pracownika z szefem.",
      "en": "Wage bonuses for night and Sunday shifts should be decided solely by private negotiation.",
      "es": "Las tarifas por turnos de noche y festivos deben fijarse por acuerdo entre las partes.",
      "de": "Zuschläge für Sonn- und Feiertagsarbeit sollten alleinige Verhandlungssache sein.",
      "ru": "Оплата за работу по ночам и воскресеньям должна определяться договором сторон.",
      "fr": "Les primes pour le travail dominical et de nuit devraient être négociées librement entre les parties."
    }
  },
  {
    "id": 48,
    "categoryKey": "labor",
    "axis": "econ",
    "multiplier": -1,
    "isQuick": false,
    "text": {
      "pl": "Pracownikom powinno przysługiwać minimum 30 dni płatnego urlopu w roku.",
      "en": "Employees should be legally entitled to a minimum of 30 paid vacation days annually.",
      "es": "Los trabajadores deben tener derecho a un mínimo legal de 30 días de vacaciones pagadas al año.",
      "de": "Jedem Arbeitnehmer sollten mindestens 30 Tage bezahlter Jahresurlaub zustehen.",
      "ru": "Работникам должно полагаться не менее 30 дней оплачиваемого отпуска в год.",
      "fr": "Tout salarié devrait avoir droit à un minimum de 30 jours de congés payés par an."
    }
  },
  {
    "id": 49,
    "categoryKey": "labor",
    "axis": "econ",
    "multiplier": 1,
    "isQuick": false,
    "text": {
      "pl": "Pracodawca nie powinien mieć obowiązku wypłacania odpraw zwalnianym pracownikom.",
      "en": "Employers should not be required by law to pay severance packages to laid-off staff.",
      "es": "Los empresarios no deberían estar obligados por ley a pagar indemnizaciones por despido.",
      "de": "Arbeitgeber sollten nicht per Gesetz zu Abfindungszahlungen bei Kündigungen verpflichtet sein.",
      "ru": "Работодатель не должен быть обязан выплачивать выходное пособие при увольнении.",
      "fr": "Les employeurs ne devraient pas être tenus par la loi de verser des indemnités de licenciement."
    }
  },
  {
    "id": 50,
    "categoryKey": "labor",
    "axis": "econ",
    "multiplier": -1,
    "isQuick": false,
    "text": {
      "pl": "Państwo powinno ustalać maksymalną dopuszczalną różnicę między pensją prezesa a pracownika.",
      "en": "The state should legally cap the wage ratio between a CEO and the lowest-paid worker.",
      "es": "La ley debe limitar la diferencia máxima entre el sueldo del director y el del operario base.",
      "de": "Der Staat sollte die Gehaltsschere zwischen Vorstand und Hilfskraft gesetzlich deckeln.",
      "ru": "Государство должно ограничить разницу между зарплатой директора и простого рабочего.",
      "fr": "L'État devrait limiter l'écart maximal autorisé entre le salaire d'un dirigeant et celui d'un ouvrier."
    }
  },
  {
    "id": 51,
    "categoryKey": "labor",
    "axis": "econ",
    "multiplier": 1,
    "isQuick": false,
    "text": {
      "pl": "Okres wypowiedzenia umowy o pracę nie powinien być narzucany przez ustawę.",
      "en": "Employment contract notice periods should be determined by agreement, not government statutes.",
      "es": "El periodo de preaviso para rescindir un contrato laboral no debe ser fijado por ley.",
      "de": "Kündigungsfristen sollten nicht durch gesetzliche Vorgaben vorgeschrieben werden.",
      "ru": "Сроки уведомления при увольнении не должны навязываться государственным законом.",
      "fr": "Les délais de préavis de licenciement ne devraient pas être imposés par le code du travail."
    }
  },
  {
    "id": 52,
    "categoryKey": "welfare",
    "axis": "econ",
    "multiplier": 1,
    "isQuick": true,
    "text": {
      "pl": "System emerytalny powinien opierać się na prywatnych kontach zamiast państwowego ZUS.",
      "en": "Pensions should rely on private investment accounts instead of state social security.",
      "es": "Las pensiones de jubilación deben basarse en cuentas de ahorro privadas y no en el sistema público.",
      "de": "Das Rentensystem sollte auf privaten Vorsorgekonten statt auf der staatlichen Rentenkasse beruhen.",
      "ru": "Пенсионная система должна опираться на частные накопления, а не на государственный фонд.",
      "fr": "Le système de retraite devrait reposer sur des comptes privés d'épargne plutôt que sur la sécurité sociale d'État."
    }
  },
  {
    "id": 53,
    "categoryKey": "welfare",
    "axis": "econ",
    "multiplier": -1,
    "isQuick": true,
    "text": {
      "pl": "Każdy dorosły obywatel powinien otrzymywać bezwarunkowy Dochód Podstawowy od państwa.",
      "en": "Every adult citizen should receive a regular Universal Basic Income from the government.",
      "es": "Todo ciudadano adulto debe percibir una Renta Básica Universal del Estado.",
      "de": "Jeder erwachsene Bürger sollte ein bedingungsloses Grundeinkommen vom Staat erhalten.",
      "ru": "Каждый взрослый гражданин должен получать безусловный базовый доход от государства.",
      "fr": "Chaque citoyen adulte devrait recevoir un Revenu Universel de Base versé par l'État."
    }
  },
  {
    "id": 54,
    "categoryKey": "welfare",
    "axis": "econ",
    "multiplier": 1,
    "isQuick": false,
    "text": {
      "pl": "Ceny wynajmu mieszkań powinien ustalać rynek, a nie urzędowe limity.",
      "en": "Apartment rental prices should be set by the market rather than government rent caps.",
      "es": "El precio del alquiler de viviendas debe fijarlo el mercado y no topes de precios.",
      "de": "Mietpreise sollten rein vom Wohnungsmarkt statt durch staatliche Mietpreisbremsen bestimmt werden.",
      "ru": "Цены на аренду жилья должен регулировать рынок, а не государственные лимиты.",
      "fr": "Les loyers des appartements devraient être fixés par le marché libre plutôt que par un encadrement étatique."
    }
  },
  {
    "id": 55,
    "categoryKey": "welfare",
    "axis": "econ",
    "multiplier": -1,
    "isQuick": true,
    "text": {
      "pl": "Rząd powinien masowo budować tanie państwowe mieszkania na wynajem.",
      "en": "The government should build large volumes of affordable public rental housing.",
      "es": "El gobierno debe construir masivamente viviendas públicas de alquiler asequible.",
      "de": "Die Regierung sollte in großem Stil bezahlbare staatliche Mietwohnungen bauen.",
      "ru": "Правительство должно массово строить доступное государственное арендное жильё.",
      "fr": "Le gouvernement devrait construire massivement des logements locatifs sociaux abordables."
    }
  },
  {
    "id": 56,
    "categoryKey": "welfare",
    "axis": "econ",
    "multiplier": 1,
    "isQuick": false,
    "text": {
      "pl": "Zasiłki dla bezrobotnych powinny przysługiwać tylko osobom aktywnie szukającym pracy.",
      "en": "Unemployment benefits should be strictly conditional on active job-seeking.",
      "es": "El subsidio de desempleo debe reservarse únicamente a quienes demuestren buscar empleo.",
      "de": "Arbeitslosengeld sollte nur an Personen gezahlt werden, die sich nachweislich bewerben.",
      "ru": "Пособия по безработице должны выплачиваться только активно ищущим работу.",
      "fr": "Les allocations chômage ne devraient être versées qu'aux personnes en recherche active d'emploi."
    }
  },
  {
    "id": 57,
    "categoryKey": "welfare",
    "axis": "econ",
    "multiplier": -1,
    "isQuick": false,
    "text": {
      "pl": "Leczenie szpitalne i leki ratujące życie powinny być bezpłatne dla każdego.",
      "en": "Hospital treatment and life-saving medicines should be completely free for all.",
      "es": "La atención hospitalaria y los fármacos vitales deben ser totalmente gratuitos.",
      "de": "Krankenhausaufenthalte und lebensrettende Medikamente müssen für alle kostenfrei sein.",
      "ru": "Лечение в больницах и жизненно важные лекарства должны быть бесплатными для всех.",
      "fr": "L'hospitalisation et les médicaments vitaux devraient être totalement gratuits pour chacun."
    }
  },
  {
    "id": 58,
    "categoryKey": "welfare",
    "axis": "econ",
    "multiplier": 1,
    "isQuick": false,
    "text": {
      "pl": "Ochrona zdrowia powinna opierać się na konkurujących prywatnych ubezpieczeniach.",
      "en": "Healthcare should be funded through competing private health insurance providers.",
      "es": "La asistencia sanitaria debe gestionarse a través de aseguradoras privadas en competencia.",
      "de": "Das Gesundheitswesen sollte auf im Wettbewerb stehenden privaten Kassen beruhen.",
      "ru": "Здравоохранение должно строиться на конкурирующих частных медицинских страховках.",
      "fr": "Le système de santé devrait reposer sur des assurances privées en concurrence."
    }
  },
  {
    "id": 59,
    "categoryKey": "welfare",
    "axis": "econ",
    "multiplier": -1,
    "isQuick": false,
    "text": {
      "pl": "Żłobki i przedszkola powinny być bezpłatne dla wszystkich dzieci.",
      "en": "Childcare nurseries and preschools should be free for every child.",
      "es": "Las guarderías y escuelas infantiles deben ser gratuitas para todos los niños.",
      "de": "Kitas und Vorschulplätze sollten für ausnahmslos alle Kinder kostenlos sein.",
      "ru": "Ясли и детские сады должны быть бесплатными для всех детей.",
      "fr": "Les crèches et écoles maternelles devraient être gratuites pour tous les enfants."
    }
  },
  {
    "id": 60,
    "categoryKey": "welfare",
    "axis": "econ",
    "multiplier": 1,
    "isQuick": false,
    "text": {
      "pl": "Wypłata zasiłków socjalnych powinna być ściśle ograniczona w czasie.",
      "en": "Welfare cash assistance payments should be subject to hard time limits.",
      "es": "Las ayudas económicas de inserción deben tener un límite de tiempo improrrogable.",
      "de": "Der Bezug staatlicher Sozialhilfe sollte streng zeitlich befristet sein.",
      "ru": "Выплата социальных пособий должна быть строго ограничена по времени.",
      "fr": "Le versement des allocations d'aide sociale devrait être strictement limité dans le temps."
    }
  },
  {
    "id": 61,
    "categoryKey": "welfare",
    "axis": "econ",
    "multiplier": -1,
    "isQuick": false,
    "text": {
      "pl": "Fundusze inwestycyjne powinny mieć zakaz kupowania mieszkań na wynajem.",
      "en": "Corporate investment funds should be legally barred from purchasing residential rental homes.",
      "es": "Los fondos de inversión deberían tener prohibido comprar viviendas para alquiler.",
      "de": "Großen Investmentfonds sollte der Kauf von Mietwohnungen gesetzlich untersagt werden.",
      "ru": "Инвестиционным фондам должно быть запрещено скупать квартиры под аренду.",
      "fr": "Il devrait être interdit aux fonds d'investissement d'acheter des logements résidentiels locatifs."
    }
  },
  {
    "id": 62,
    "categoryKey": "welfare",
    "axis": "econ",
    "multiplier": 1,
    "isQuick": false,
    "text": {
      "pl": "Studia wyższe powinny być płatne i finansowane pożyczkami spłacanymi po znalezieniu pracy.",
      "en": "University tuition should be paid by students via student loans repaid after graduation.",
      "es": "La enseñanza universitaria debe ser de pago mediante préstamos a devolver tras graduarse.",
      "de": "Ein Hochschulstudium sollte gebührenpflichtig sein und über Bildungskredite finanziert werden.",
      "ru": "Высшее образование должно быть платным и финансироваться возвратными кредитами.",
      "fr": "Les études supérieures devraient être payantes et financées par des prêts remboursables une fois en poste."
    }
  },
  {
    "id": 63,
    "categoryKey": "welfare",
    "axis": "econ",
    "multiplier": -1,
    "isQuick": false,
    "text": {
      "pl": "Wszystkie dzieci w szkołach powinny otrzymywać bezpłatne obiady od państwa.",
      "en": "Every pupil in school should receive free school lunches funded by the state.",
      "es": "Todos los alumnos de colegio deben recibir comedores y almuerzos gratuitos del Estado.",
      "de": "Alle Schulkinder sollten kostenfreie Mahlzeiten auf Staatskosten erhalten.",
      "ru": "Все дети в школах должны получать бесплатные школьные обеды от государства.",
      "fr": "Tous les enfants scolarisés devraient bénéficier de repas gratuits financés par l'État."
    }
  },
  {
    "id": 64,
    "categoryKey": "welfare",
    "axis": "econ",
    "multiplier": 1,
    "isQuick": false,
    "text": {
      "pl": "Wiek emerytalny powinien wynosić co najmniej 67 lat dla kobiet i mężczyzn.",
      "en": "The retirement age should be set to at least 67 years for both men and women.",
      "es": "La edad legal de jubilación debe ser de al menos 67 años para hombres y mujeres.",
      "de": "Das gesetzliche Rentenalter sollte für Männer und Frauen mindestens 67 Jahre betragen.",
      "ru": "Пенсионный возраст должен составлять не менее 67 лет для мужчин и женщин.",
      "fr": "L'âge légal de départ à la retraite devrait être d'au moins 67 ans pour les hommes et les femmes."
    }
  },
  {
    "id": 65,
    "categoryKey": "welfare",
    "axis": "econ",
    "multiplier": -1,
    "isQuick": false,
    "text": {
      "pl": "Osoby pracujące fizycznie powinny mieć prawo do wcześniejszej emerytury.",
      "en": "Workers in strenuous physical occupations should have the right to retire earlier.",
      "es": "Los trabajadores que desempeñan oficios de desgaste físico deben poder jubilarse antes.",
      "de": "Beschäftigte mit schwerer körperlicher Arbeit sollten früher in Rente gehen dürfen.",
      "ru": "Люди тяжёлого физического труда должны иметь право на ранний выход на пенсию.",
      "fr": "Les travailleurs occupant des postes pénibles devraient avoir le droit de partir plus tôt à la retraite."
    }
  },
  {
    "id": 66,
    "categoryKey": "welfare",
    "axis": "econ",
    "multiplier": 1,
    "isQuick": false,
    "text": {
      "pl": "Państwo nie powinno wypłacać zasiłków na dzieci rodzinom o wysokich dochodach.",
      "en": "Child welfare benefits should not be paid to high-income affluent families.",
      "es": "Las ayudas familiares por hijo a cargo no deben pagarse a hogares de renta alta.",
      "de": "Kindergeld sollte wohlhabenden Familien mit hohem Einkommen nicht ausgezahlt werden.",
      "ru": "Государство не должно выплачивать детские пособия семьям с высокими доходами.",
      "fr": "Les allocations familiales ne devraient pas être versées aux ménages aisés à hauts revenus."
    }
  },
  {
    "id": 67,
    "categoryKey": "welfare",
    "axis": "econ",
    "multiplier": -1,
    "isQuick": false,
    "text": {
      "pl": "Państwo powinno zagwarantować dach nad głową każdej osobie bezdomnej.",
      "en": "The government should guarantee emergency shelter and permanent housing for every homeless person.",
      "es": "El Estado debe garantizar un alojamiento a cualquier persona sin hogar.",
      "de": "Der Staat sollte jedem obdachlosen Menschen eine feste Unterkunft garantieren.",
      "ru": "Государство должно гарантировать жилье каждому бездомному человеку.",
      "fr": "L'État devrait garantir un logement décent à toute personne sans-abri."
    }
  },
  {
    "id": 68,
    "categoryKey": "welfare",
    "axis": "econ",
    "multiplier": -1,
    "isQuick": false,
    "text": {
      "pl": "Pasażerski transport publiczny powinien być bezpłatny dla wszystkich mieszkańców.",
      "en": "Local public transit should be completely fare-free for all residents.",
      "es": "El transporte público urbano debe ser totalmente gratuito para los vecinos.",
      "de": "Der öffentliche Nahverkehr sollte für alle Bürger kostenlos nutzbar sein.",
      "ru": "Общественный транспорт должен быть бесплатным для всех жителей города.",
      "fr": "Les transports publics urbains devraient être entièrement gratuits pour tous les usagers."
    }
  },
  {
    "id": 69,
    "categoryKey": "regulation",
    "axis": "econ",
    "multiplier": 1,
    "isQuick": true,
    "text": {
      "pl": "Większość państwowych licencji zawodowych powinna zostać zniesiona.",
      "en": "Most government occupational and trade licensing mandates should be abolished.",
      "es": "La mayoría de las licencias y colegiaciones oficiales obligatorias deben suprimirse.",
      "de": "Die meisten staatlichen Zulassungsvorschriften für Berufe sollten abgeschafft werden.",
      "ru": "Большинство государственных профессиональных лицензий должно быть отменено.",
      "fr": "La plupart des licences professionnelles et certificats d'exercice obligatoires devraient être abolis."
    }
  },
  {
    "id": 70,
    "categoryKey": "regulation",
    "axis": "econ",
    "multiplier": -1,
    "isQuick": true,
    "text": {
      "pl": "Maksymalne oprocentowanie pożyczek i kredytów powinno być odgórnie ograniczone przez prawo.",
      "en": "Interest rates on consumer loans and mortgages should face strict statutory caps.",
      "es": "El tipo de interés máximo en créditos al consumo e hipotecas debe estar limitado por ley.",
      "de": "Die Zinssätze für Verbraucherdarlehen sollten per Gesetz verbindlich gedeckelt werden.",
      "ru": "Процентные ставки по кредитам и займам должны быть ограничены законом.",
      "fr": "Les taux d'intérêt des crédits et prêts à la consommation devraient être strictement plafonnés par la loi."
    }
  },
  {
    "id": 71,
    "categoryKey": "regulation",
    "axis": "econ",
    "multiplier": 1,
    "isQuick": false,
    "text": {
      "pl": "Aplikacje przewozowe (np. Uber) powinny działać bez licencji korporacji taksówkarskich.",
      "en": "Ride-hailing apps like Uber should operate without traditional commercial taxi licensing requirements.",
      "es": "Las aplicaciones como Uber deben poder operar sin someterse a licencias de taxi tradicionales.",
      "de": "Fahrvermittler-Apps wie Uber sollten ohne klassische Taxikonzessionen operieren dürfen.",
      "ru": "Сервисы такси через приложения (вроде Uber) должны работать без традиционных лицензий таксопарков.",
      "fr": "Les plateformes VTC comme Uber devraient pouvoir opérer sans les licences réservées aux taxis."
    }
  },
  {
    "id": 72,
    "categoryKey": "regulation",
    "axis": "econ",
    "multiplier": -1,
    "isQuick": false,
    "text": {
      "pl": "Reklamy alkoholu i hazardu powinny być całkowicie zakazane.",
      "en": "All public advertising for alcoholic drinks and gambling should be banned.",
      "es": "La publicidad de bebidas alcohólicas y casas de apuestas debe prohibirse totalmente.",
      "de": "Jegliche Werbung für Alkohol und Glücksspiel sollte verboten werden.",
      "ru": "Реклама алкоголя и азартных игр должна быть полностью запрещена.",
      "fr": "Toute publicité pour l'alcool et les jeux d'argent devrait être totalement interdite."
    }
  },
  {
    "id": 73,
    "categoryKey": "regulation",
    "axis": "econ",
    "multiplier": 1,
    "isQuick": false,
    "text": {
      "pl": "Budowa domu jednorodzinnego powinna wymagać jedynie zgłoszenia, bez pozwolenia na budowę.",
      "en": "Constructing a single-family home should require only simple notification, not a formal permit.",
      "es": "Construir una vivienda unifamiliar debería requerir solo una comunicación previa sin licencia.",
      "de": "Der Bau eines Einfamilienhauses sollte ohne Genehmigungsverfahren per Bauanzeige möglich sein.",
      "ru": "Строительство частного дома должно требовать только уведомления, а не разрешения.",
      "fr": "Bâtir une maison individuelle ne devrait nécessiter qu'une simple déclaration sans permis formel."
    }
  },
  {
    "id": 74,
    "categoryKey": "regulation",
    "axis": "econ",
    "multiplier": -1,
    "isQuick": false,
    "text": {
      "pl": "Państwo powinno ustalać maksymalne ceny leków w aptekach.",
      "en": "The state should enforce strict legal ceilings on prescription medicine prices.",
      "es": "El Estado debe fijar precios máximos para los fármacos dispensados en farmacias.",
      "de": "Der Staat sollte Höchstpreise für Arzneimittel in Apotheken festlegen.",
      "ru": "Государство должно устанавливать предельные цены на лекарства в аптеках.",
      "fr": "L'État devrait fixer des prix plafonds pour les médicaments vendus en pharmacie."
    }
  },
  {
    "id": 75,
    "categoryKey": "regulation",
    "axis": "econ",
    "multiplier": 1,
    "isQuick": false,
    "text": {
      "pl": "Prywatne laboratoria powinny móc testować nowe leki bez wieloletnich procedur urzędowych.",
      "en": "Private biotech labs should be permitted to test experimental medicines without bureaucratic delays.",
      "es": "Los laboratorios privados deben poder ensayar nuevos fármacos sin demoras burocráticas de años.",
      "de": "Private Labore sollten neue Arzneien ohne langwierige Behördenauflagen erproben dürfen.",
      "ru": "Частные лаборатории должны иметь возможность тестировать лекарства без бюрократических задержек.",
      "fr": "Les laboratoires privés devraient pouvoir tester des médicaments sans des années d'attente administrative."
    }
  },
  {
    "id": 76,
    "categoryKey": "regulation",
    "axis": "econ",
    "multiplier": -1,
    "isQuick": false,
    "text": {
      "pl": "Lasy państwowe i parki narodowe nie powinny być sprzedawane prywatnym firmom.",
      "en": "Public state forests and national parks should never be sold to private corporations.",
      "es": "Los bosques públicos y parques nacionales nunca deben enajenarse a empresas privadas.",
      "de": "Staatliche Wälder und Nationalparks dürfen niemals an Privatunternehmen verkauft werden.",
      "ru": "Государственные леса и заповедники никогда не должны продаваться частным компаниям.",
      "fr": "Les forêts publiques et parcs nationaux ne devraient jamais être vendus à des entreprises privées."
    }
  },
  {
    "id": 77,
    "categoryKey": "regulation",
    "axis": "econ",
    "multiplier": 1,
    "isQuick": false,
    "text": {
      "pl": "Ceny biletów lotniczych i kolejowych powinny zależeć wyłącznie od popytu.",
      "en": "Fares for airline and train tickets should depend solely on free-market consumer demand.",
      "es": "Las tarifas de vuelos y trenes deben regirse únicamente por la oferta y la demanda.",
      "de": "Flug- und Bahntarife sollten ausschließlich nach Angebot und Nachfrage festgelegt werden.",
      "ru": "Цены на билеты на самолеты и поезда должны зависеть исключительно от спроса.",
      "fr": "Les prix des billets d'avion et de train devraient dépendre exclusivement de la demande du marché."
    }
  },
  {
    "id": 78,
    "categoryKey": "regulation",
    "axis": "econ",
    "multiplier": -1,
    "isQuick": false,
    "text": {
      "pl": "Reklamy skierowane do małych dzieci powinny być zakazane w telewizji i internecie.",
      "en": "Commercial advertising targeted specifically at young children should be prohibited.",
      "es": "La publicidad dirigida expresamente a menores debe estar vetada en medios y redes.",
      "de": "Werbung, die sich gezielt an Kleinkinder richtet, sollte in Medien verboten sein.",
      "ru": "Реклама, направленная на маленьких детей, должна быть запрещена на ТВ и в интернете.",
      "fr": "La publicité ciblant directement les jeunes enfants devrait être interdite à la télévision et sur internet."
    }
  },
  {
    "id": 79,
    "categoryKey": "regulation",
    "axis": "econ",
    "multiplier": 1,
    "isQuick": false,
    "text": {
      "pl": "Sprzedaż alkoholu powinna być dozwolona przez całą dobę bez ograniczeń godzinowych.",
      "en": "Alcohol sales should be allowed around the clock with zero nighttime retail curfews.",
      "es": "La venta de bebidas alcohólicas debe estar autorizada las 24 horas del día sin horarios límite.",
      "de": "Der Verkauf von Alkohol sollte rund um die Uhr ohne zeitliche Einschränkungen erlaubt sein.",
      "ru": "Продажа алкоголя должна быть разрешена круглосуточно без временных ограничений.",
      "fr": "La vente d'alcool devrait être autorisée 24 heures sur 24 sans restriction d'horaires."
    }
  },
  {
    "id": 80,
    "categoryKey": "regulation",
    "axis": "econ",
    "multiplier": -1,
    "isQuick": false,
    "text": {
      "pl": "Państwo powinno zakazać otwierania nowych hipermarketów w pobliżu lokalnych sklepów.",
      "en": "The state should bar new large supermarket chains from opening in vicinity of local shops.",
      "es": "La administración debe prohibir abrir grandes hipermercados cerca de las tiendas de barrio.",
      "de": "Großflächigen Supermärkten sollte die Ansiedlung in der Nähe von Nahversorgern untersagt werden.",
      "ru": "Государство должно запретить открытие гипермаркетов рядом с местными магазинами.",
      "fr": "L'État devrait interdire l'implantation de nouveaux hypermarchés à proximité des commerces locaux."
    }
  },
  {
    "id": 81,
    "categoryKey": "regulation",
    "axis": "econ",
    "multiplier": 1,
    "isQuick": false,
    "text": {
      "pl": "Prywatne uczelnie powinny mieć pełną swobodę ustalania własnych programów nauczania.",
      "en": "Private colleges should possess absolute autonomy to establish their academic curriculum.",
      "es": "Las universidades privadas deben tener plena autonomía para definir sus planes de estudio.",
      "de": "Private Hochschulen sollten völlige Freiheit bei der Gestaltung ihrer Studienpläne haben.",
      "ru": "Частные вузы должны иметь полную свободу в составлении учебных программ.",
      "fr": "Les universités privées devraient avoir une totale liberté pour définir leurs programmes académiques."
    }
  },
  {
    "id": 82,
    "categoryKey": "regulation",
    "axis": "econ",
    "multiplier": -1,
    "isQuick": false,
    "text": {
      "pl": "Sklepy wielkopowierzchniowe powinny mieć obowiązek oddawania niesprzedanej żywności na cele charytatywne.",
      "en": "Supermarkets should be legally required to donate unsold edible food to food banks.",
      "es": "Los supermercados deben estar obligados por ley a donar la comida no vendida a comedores sociales.",
      "de": "Supermärkte sollten gesetzlich verpflichtet werden, unverkaufte Lebensmittel zu spenden.",
      "ru": "Супермаркеты должны быть обязаны передавать непроданные продукты на благотворительность.",
      "fr": "Les supermarchés devraient avoir l'obligation légale de donner leurs invendus alimentaires consommables."
    }
  },
  {
    "id": 83,
    "categoryKey": "regulation",
    "axis": "econ",
    "multiplier": 1,
    "isQuick": false,
    "text": {
      "pl": "Samorządy nie powinny narzucać deweloperom minimalnej liczby miejsc parkingowych.",
      "en": "Municipalities should not mandate minimum parking space quotas for property builders.",
      "es": "Los ayuntamientos no deben obligar a los promotores a construir un mínimo de plazas de parking.",
      "de": "Kommunen sollten Bauträgern keine Mindeststellplatzverordnungen für Parkplätze vorschreiben.",
      "ru": "Местные власти не должны навязывать застройщикам нормы парковочных мест.",
      "fr": "Les municipalités ne devraient pas imposer de quotas minimaux de places de parking aux constructeurs."
    }
  },
  {
    "id": 84,
    "categoryKey": "regulation",
    "axis": "econ",
    "multiplier": -1,
    "isQuick": false,
    "text": {
      "pl": "Banki komercyjne powinny mieć prawny zakaz pobierania opłat za prowadzenie podstawowego konta.",
      "en": "Commercial banks should be banned by law from charging fees for basic checking accounts.",
      "es": "Los bancos deben tener prohibido cobrar comisiones por el mantenimiento de cuentas corrientes básicas.",
      "de": "Banken sollte die Erhebung von Kontoführungsgebühren für Basiskonten gesetzlich untersagt sein.",
      "ru": "Банкам должно быть запрещено взимать плату за обслуживание базовых счетов граждан.",
      "fr": "Il devrait être interdit aux banques de facturer des frais de gestion pour un compte courant de base."
    }
  },
  {
    "id": 85,
    "categoryKey": "trade",
    "axis": "econ",
    "multiplier": 1,
    "isQuick": true,
    "text": {
      "pl": "Wszystkie cła i bariery w handlu międzynarodowym powinny zostać zlikwidowane.",
      "en": "All international import tariffs and trade barriers should be entirely eliminated.",
      "es": "Todos los aranceles aduaneros y trabas al comercio internacional deben desaparecer.",
      "de": "Sämtliche Importzölle und Handelsschranken im Welthandel sollten abgeschafft werden.",
      "ru": "Все таможенные пошлины и барьеры в мировой торговле должны быть ликвидированы.",
      "fr": "Tous les droits de douane et barrières au commerce international devraient être éliminés."
    }
  },
  {
    "id": 86,
    "categoryKey": "trade",
    "axis": "econ",
    "multiplier": -1,
    "isQuick": true,
    "text": {
      "pl": "Państwo powinno chronić rodzimy przemysł za pomocą wysokich ceł importowych.",
      "en": "The state should protect domestic industries through high protective import tariffs.",
      "es": "El Estado debe proteger la industria local mediante aranceles protectores a la importación.",
      "de": "Der Staat sollte die heimische Industrie durch hohe Schutzzölle auf Importe absichern.",
      "ru": "Государство должно защищать отечественную промышленность высокими пошлинами на импорт.",
      "fr": "L'État devrait protéger l'industrie nationale au moyen de droits de douane élevés sur les importations."
    }
  },
  {
    "id": 87,
    "categoryKey": "trade",
    "axis": "econ",
    "multiplier": 1,
    "isQuick": false,
    "text": {
      "pl": "Zagraniczni inwestorzy powinni móc swobodnie kupować udziały w krajowych przedsiębiorstwach.",
      "en": "Foreign investors should be allowed to freely buy equity shares in domestic corporations.",
      "es": "Los inversores extranjeros deben poder comprar libremente acciones de empresas nacionales.",
      "de": "Ausländische Investoren sollten uneingeschränkt Anteile an inländischen Firmen erwerben dürfen.",
      "ru": "Иностранные инвесторы должны иметь право свободно покупать доли в отечественных компаниях.",
      "fr": "Les investisseurs étrangers devraient pouvoir acquérir librement des parts dans les entreprises nationales."
    }
  },
  {
    "id": 88,
    "categoryKey": "trade",
    "axis": "econ",
    "multiplier": -1,
    "isQuick": false,
    "text": {
      "pl": "Rządy powinny przymusowo podzielić monopolistyczne giganty technologiczne (np. Google).",
      "en": "Antitrust regulators should forcibly break up monopolistic tech corporations like Google.",
      "es": "Las autoridades antimonopolio deben dividir de forma obligatoria a gigantes tecnológicos como Google.",
      "de": "Wettbewerbsbehörden sollten marktbeherrschende Internetgiganten wie Google zerschlagen.",
      "ru": "Государства должны принудительно разделять технологические монополии (вроде Google).",
      "fr": "Les gouvernements devraient démanteler de force les géants technologiques monopolistiques comme Google."
    }
  },
  {
    "id": 89,
    "categoryKey": "trade",
    "axis": "econ",
    "multiplier": 1,
    "isQuick": false,
    "text": {
      "pl": "Zagraniczne firmy powinny płacić dokładnie takie same podatki jak firmy krajowe.",
      "en": "Foreign businesses should pay the exact same tax rates as domestic firms without discrimination.",
      "es": "Las multinacionales foráneas deben abonar exactamente los mismos impuestos que los negocios locales.",
      "de": "Ausländische Unternehmen sollten exakt dieselben Steuern zahlen wie einheimische Betriebe.",
      "ru": "Иностранные компании должны платить точно такие же налоги, как и отечественные предприятия.",
      "fr": "Les entreprises étrangères devraient être soumises exactement aux mêmes impôts que les nationales."
    }
  },
  {
    "id": 90,
    "categoryKey": "trade",
    "axis": "econ",
    "multiplier": -1,
    "isQuick": false,
    "text": {
      "pl": "Produkcja stali, leków i amunicji musi pozostać w granicach kraju.",
      "en": "Manufacturing of critical steel, pharmaceuticals, and military ammunition must stay domestic.",
      "es": "La fabricación de acero, fármacos y munición debe conservarse dentro de nuestras fronteras.",
      "de": "Die Produktion von Stahl, Arzneimitteln und Munition muss zwingend im eigenen Land verbleiben.",
      "ru": "Производство стали, медикаментов и боеприпасов должно обязательно оставаться внутри страны.",
      "fr": "La production d'acier, de médicaments et de munitions doit obligatoirement demeurer nationale."
    }
  },
  {
    "id": 91,
    "categoryKey": "trade",
    "axis": "econ",
    "multiplier": 1,
    "isQuick": false,
    "text": {
      "pl": "Państwo powinno znieść cła na importowaną żywność.",
      "en": "The government should eliminate import duties on foreign food products.",
      "es": "El gobierno debe suprimir los aranceles sobre los alimentos importados del exterior.",
      "de": "Der Staat sollte sämtliche Zölle auf importierte Nahrungsmittel abschaffen.",
      "ru": "Государство должно отменить ввозные пошлины на импортные продукты питания.",
      "fr": "L'État devrait supprimer les droits de douane sur les denrées alimentaires importées."
    }
  },
  {
    "id": 92,
    "categoryKey": "trade",
    "axis": "econ",
    "multiplier": -1,
    "isQuick": false,
    "text": {
      "pl": "Porty morskie i lotniska nie powinny być sprzedawane zagranicznym inwestorom.",
      "en": "Strategic seaports and international airports should never be sold to foreign entities.",
      "es": "Los puertos marítimos y aeropuertos estratégicos jamás deben ser vendidos a fondos foráneos.",
      "de": "Wichtige Seehäfen und Verkehrsflughäfen dürfen nicht an ausländische Investoren veräußert werden.",
      "ru": "Морские порты и аэропорты не должны продаваться зарубежным покупателям.",
      "fr": "Les ports maritimes et aéroports stratégiques ne devraient jamais être cédés à des capitaux étrangers."
    }
  },
  {
    "id": 93,
    "categoryKey": "trade",
    "axis": "econ",
    "multiplier": 1,
    "isQuick": false,
    "text": {
      "pl": "Otwarty handel międzynarodowy sprzyja bogaceniu się społeczeństw.",
      "en": "Open cross-border commerce inherently enriches participating nations and societies.",
      "es": "El comercio internacional abierto favorece la prosperidad económica de las sociedades.",
      "de": "Offener internationaler Handel fördert den materiellen Wohlstand aller Völker.",
      "ru": "Открытая международная торговля способствует росту благосостояния общества.",
      "fr": "L'ouverture commerciale internationale favorise l'enrichissement des populations."
    }
  },
  {
    "id": 94,
    "categoryKey": "trade",
    "axis": "econ",
    "multiplier": -1,
    "isQuick": false,
    "text": {
      "pl": "Spekulacje finansowe cenami żywności na giełdach powinny być prawnie zakazane.",
      "en": "Commodity market speculation on staple agricultural foods should be banned by law.",
      "es": "La especulación financiera bursátil con alimentos básicos debe prohibirse expresamente.",
      "de": "Börsenspekulationen mit Grundnahrungsmitteln sollten gesetzlich unterbunden werden.",
      "ru": "Финансовые спекуляции ценами на продовольствие на биржах должны быть запрещены.",
      "fr": "La spéculation boursière sur les matières premières alimentaires devrait être illégale."
    }
  },
  {
    "id": 95,
    "categoryKey": "trade",
    "axis": "econ",
    "multiplier": 1,
    "isQuick": false,
    "text": {
      "pl": "Swobodny przepływ kapitału przez granice powinien odbywać się bez kontroli państwa.",
      "en": "Capital investments should move freely across borders without government exchange controls.",
      "es": "El libre movimiento de capitales debe desarrollarse sin controles de cambio estatales.",
      "de": "Der grenzüberschreitende Kapitalverkehr sollte ohne staatliche Devisenkontrollen erfolgen.",
      "ru": "Свободное движение капитала через границы должно происходить без контроля государства.",
      "fr": "La circulation des capitaux à travers les frontières devrait s'effectuer sans contrôle de l'État."
    }
  },
  {
    "id": 96,
    "categoryKey": "trade",
    "axis": "econ",
    "multiplier": -1,
    "isQuick": false,
    "text": {
      "pl": "Państwo powinno nakładać sankcje i zakazy handlu na kraje łamiące prawa człowieka.",
      "en": "Governments should enforce trade embargoes against foreign regimes violating basic human rights.",
      "es": "Deben imponerse sanciones y embargos comerciales a los países que vulneren los derechos humanos.",
      "de": "Gegen Staaten, die elementare Menschenrechte verletzen, sollten Handelssanktionen verhängt werden.",
      "ru": "Государство должно вводить санкции и торговые эмбарго против стран, нарушающих права человека.",
      "fr": "L'État devrait infliger des sanctions et des embargos commerciaux aux pays qui bafouent les droits de l'homme."
    }
  },
  {
    "id": 97,
    "categoryKey": "trade",
    "axis": "econ",
    "multiplier": 1,
    "isQuick": false,
    "text": {
      "pl": "Swobodny handel z sąsiadami buduje pokój skuteczniej niż sojusze wojskowe.",
      "en": "Free mutual trade with neighboring nations maintains peace more effectively than military alliances.",
      "es": "El libre comercio con los países vecinos afianza la paz mejor que las alianzas militares.",
      "de": "Freier Warenaustausch mit den Nachbarn sichert Frieden verlässlicher als Militärbündnisse.",
      "ru": "Свободная торговля с соседями сохраняет мир надежнее военных союзов.",
      "fr": "Le libre-échange avec les pays voisins préserve la paix plus efficacement que les pactes militaires."
    }
  },
  {
    "id": 98,
    "categoryKey": "trade",
    "axis": "econ",
    "multiplier": -1,
    "isQuick": false,
    "text": {
      "pl": "Państwo powinno dopłacać do krajowego eksportu towarów.",
      "en": "The government should subsidize domestic goods manufactured for foreign export.",
      "es": "El Estado debe conceder subsidios a la exportación de productos nacionales.",
      "de": "Der Staat sollte heimische Exportwaren mit Subventionen unterstützen.",
      "ru": "Государство должно доплачивать за экспорт отечественных товаров за рубеж.",
      "fr": "L'État devrait subventionner les exportations de produits manufacturés nationaux."
    }
  },
  {
    "id": 99,
    "categoryKey": "trade",
    "axis": "econ",
    "multiplier": 1,
    "isQuick": false,
    "text": {
      "pl": "Państwo nie powinno ograniczać importu tanich samochodów z zagranicy.",
      "en": "The state should not restrict or tariff the importation of cheap foreign automobiles.",
      "es": "El Estado no debe poner trabas arancelarias a la importación de coches extranjeros baratos.",
      "de": "Der Staat sollte die Einfuhr preiswerter ausländischer Kraftfahrzeuge nicht beschränken.",
      "ru": "Государство не должно ограничивать ввоз доступных автомобилей из-за рубежа.",
      "fr": "L'État ne devrait pas entraver l'importation de véhicules étrangers bon marché."
    }
  },
  {
    "id": 100,
    "categoryKey": "trade",
    "axis": "econ",
    "multiplier": -1,
    "isQuick": false,
    "text": {
      "pl": "Cudzoziemcy nie powinni mieć prawa kupować ziemi rolnej w naszym kraju.",
      "en": "Foreign nationals should be legally barred from purchasing agricultural farmland in our country.",
      "es": "Los ciudadanos extranjeros no deberían tener derecho a comprar tierras agrícolas en el país.",
      "de": "Ausländischen Staatsbürgern sollte der Erwerb von Agrarflächen im Inland untersagt sein.",
      "ru": "Иностранцы не должны иметь права покупать сельскохозяйственные земли в нашей стране.",
      "fr": "Les ressortissants étrangers ne devraient pas avoir le droit d'acheter des terres agricoles dans notre pays."
    }
  },
  {
    "id": 101,
    "categoryKey": "liberties",
    "axis": "soc",
    "multiplier": 1,
    "isQuick": true,
    "text": {
      "pl": "Wolność słowa powinna chronić nawet poglądy kontrowersyjne i oburzające.",
      "en": "Freedom of speech should protect even controversial and offensive opinions.",
      "es": "La libertad de expresión debe amparar incluso opiniones controvertidas e hirientes.",
      "de": "Meinungsfreiheit muss auch provokante und anstößige Ansichten uneingeschränkt schützen.",
      "ru": "Свобода слова должна защищать даже скандальные и возмутительные высказывания.",
      "fr": "La liberté d'expression doit protéger même les opinions polémiques et choquantes."
    }
  },
  {
    "id": 102,
    "categoryKey": "liberties",
    "axis": "soc",
    "multiplier": -1,
    "isQuick": true,
    "text": {
      "pl": "Służby powinny mieć prawo podsłuchiwać podejrzanych w sieci bez zgody sądu.",
      "en": "State security agencies should be allowed to wiretap digital communications without warrants.",
      "es": "Los servicios de seguridad deben poder interceptar comunicaciones online sin orden judicial.",
      "de": "Sicherheitsbehörden sollten Online-Kommunikation von Verdächtigen ohne Richterbeschluss überwachen dürfen.",
      "ru": "Спецслужбы должны иметь право прослушивать подозреваемых в сети без решения суда.",
      "fr": "Les services de renseignement devraient pouvoir surveiller les réseaux sans mandat judiciaire."
    }
  },
  {
    "id": 103,
    "categoryKey": "liberties",
    "axis": "soc",
    "multiplier": 1,
    "isQuick": true,
    "text": {
      "pl": "Każdy pełnoletni i niekarany obywatel powinien mieć prawo do posiadania broni palnej.",
      "en": "Every law-abiding adult citizen should have the legal right to own a firearm.",
      "es": "Cualquier ciudadano mayor de edad sin antecedentes penales debe poder poseer un arma de fuego.",
      "de": "Unbescholtene volljährige Bürger sollten das Recht auf den Besitz einer Schusswaffe haben.",
      "ru": "Каждый несудимый совершеннолетний гражданин должен иметь право на владение оружием.",
      "fr": "Tout citoyen majeur sans casier judiciaire devrait avoir le droit de posséder une arme à feu."
    }
  },
  {
    "id": 104,
    "categoryKey": "liberties",
    "axis": "soc",
    "multiplier": -1,
    "isQuick": false,
    "text": {
      "pl": "Policja powinna mieć prawo zatrzymywać i przeszukiwać ludzi na ulicy bez podawania przyczyny.",
      "en": "Police officers should have the authority to stop and search pedestrians without probable cause.",
      "es": "La policía debe tener potestad para cachear e identificar transeúntes sin causa justificada.",
      "de": "Die Polizei sollte Fußgänger auf der Straße anlasslos anhalten und durchsuchen dürfen.",
      "ru": "Полиция должна иметь право останавливать и досматривать людей на улице без объяснения причин.",
      "fr": "La police devrait pouvoir contrôler et fouiller des passants dans la rue sans motif légal."
    }
  },
  {
    "id": 105,
    "categoryKey": "liberties",
    "axis": "soc",
    "multiplier": 1,
    "isQuick": false,
    "text": {
      "pl": "Nieuleczalnie chory człowiek powinien mieć prawo do eutanazji na własne życzenie.",
      "en": "Terminally ill patients should possess the legal right to voluntary assisted dying.",
      "es": "Los enfermos en fase terminal deben tener derecho a la eutanasia voluntaria asistida.",
      "de": "Unheilbar kranke Menschen sollten das Recht auf freiwillige Sterbehilfe auf eigenen Wunsch besitzen.",
      "ru": "Неизлечимо больной человек должен иметь право на добровольную эвтаназию.",
      "fr": "Toute personne atteinte d'une maladie incurable devrait avoir accès à l'aide médicale à mourir choisie."
    }
  },
  {
    "id": 106,
    "categoryKey": "liberties",
    "axis": "soc",
    "multiplier": -1,
    "isQuick": true,
    "text": {
      "pl": "Kara śmierci powinna zostać przywrócona za najokrutniejsze morderstwa.",
      "en": "Capital punishment should be reinstated for the most heinous murders.",
      "es": "La pena de muerte debe restablecerse para los homicidios más despiadados.",
      "de": "Die Todesstrafe sollte für besonders grausame Morde wieder eingeführt werden.",
      "ru": "Смертная казнь должна быть возвращена за самые жестокие убийства.",
      "fr": "La peine de mort devrait être rétablie pour les assassinats les plus barbares."
    }
  },
  {
    "id": 107,
    "categoryKey": "liberties",
    "axis": "soc",
    "multiplier": 1,
    "isQuick": false,
    "text": {
      "pl": "Posiadanie marihuany na własny użytek powinno być w pełni legalne.",
      "en": "Possession of cannabis for personal adult recreational use should be fully legal.",
      "es": "La posesión de cannabis para consumo propio debe ser plenamente legal.",
      "de": "Der Besitz von Cannabis für den Eigenbedarf sollte vollständig legalisiert sein.",
      "ru": "Хранение марихуаны для личного употребления должно быть полностью легальным.",
      "fr": "La possession de cannabis pour consommation personnelle devrait être totalement légale."
    }
  },
  {
    "id": 108,
    "categoryKey": "liberties",
    "axis": "soc",
    "multiplier": -1,
    "isQuick": false,
    "text": {
      "pl": "Kamery z automatycznym rozpoznawaniem twarzy powinny być zainstalowane we wszystkich miejscach publicznych.",
      "en": "Facial-recognition surveillance cameras should be deployed across all public squares and streets.",
      "es": "Deben instalarse cámaras con reconocimiento facial automático en todos los espacios públicos.",
      "de": "Kameras mit automatischer Gesichtserkennung sollten flächendeckend im öffentlichen Raum laufen.",
      "ru": "Камеры с распознаванием лиц должны стоять во всех общественных местах.",
      "fr": "Des caméras à reconnaissance faciale automatique devraient être installées dans tous les lieux publics."
    }
  },
  {
    "id": 109,
    "categoryKey": "liberties",
    "axis": "soc",
    "multiplier": 1,
    "isQuick": false,
    "text": {
      "pl": "Obywatele powinni mieć prawo do anonimowości w sieci bez legitymowania się dowodem.",
      "en": "Citizens should have the right to internet anonymity without showing official government IDs.",
      "es": "Los ciudadanos deben tener derecho a navegar de forma anónima sin identificarse con documento de identidad.",
      "de": "Bürger sollten das Recht auf Anonymität im Netz ohne Verifikation per Personalausweis haben.",
      "ru": "Граждане должны иметь право на анонимность в сети без входа по паспорту.",
      "fr": "Les internautes devraient avoir le droit à l'anonymat en ligne sans vérification d'identité."
    }
  },
  {
    "id": 110,
    "categoryKey": "liberties",
    "axis": "soc",
    "multiplier": -1,
    "isQuick": false,
    "text": {
      "pl": "Rząd powinien mieć prawo nakładać zakaz wychodzenia z domu podczas epidemii.",
      "en": "The government should have the authority to impose stay-at-home curfews during epidemics.",
      "es": "El gobierno debe tener facultades para decretar confinamientos domiciliarios en epidemias.",
      "de": "Die Regierung sollte das Recht haben, bei schweren Epidemien Ausgangssperren zu erlassen.",
      "ru": "Правительство должно иметь право вводить запрет на выход из дома во время эпидемий.",
      "fr": "Le gouvernement devrait avoir le pouvoir d'imposer un confinement à domicile lors d'une épidémie."
    }
  },
  {
    "id": 111,
    "categoryKey": "liberties",
    "axis": "soc",
    "multiplier": 1,
    "isQuick": false,
    "text": {
      "pl": "Każdy dorosły człowiek ma prawo samodzielnie decydować o zabiegach medycznych na własnym ciele.",
      "en": "Every adult has the sovereign right to make all medical choices regarding their own body.",
      "es": "Todo adulto tiene el derecho soberano a decidir sobre cualquier intervención médica en su cuerpo.",
      "de": "Jeder Erwachsene hat das uneingeschränkte Recht auf Selbstbestimmung bei medizinischen Behandlungen.",
      "ru": "Каждый взрослый человек имеет право самостоятельно решать любые вопросы о своём теле.",
      "fr": "Chaque adulte a le droit souverain de consentir ou de refuser tout acte médical sur son propre corps."
    }
  },
  {
    "id": 112,
    "categoryKey": "liberties",
    "axis": "soc",
    "multiplier": -1,
    "isQuick": false,
    "text": {
      "pl": "Policja powinna natychmiast siłą rozpędzać wszelkie nielegalne blokady dróg.",
      "en": "Riot police should forcefully and immediately dismantle any illegal roadway blockades.",
      "es": "La policía debe desalojar por la fuerza y sin demora cualquier corte de tráfico ilegal.",
      "de": "Die Polizei sollte ungenehmigte Straßenblockaden sofort gewaltsam räumen.",
      "ru": "Полиция должна немедленно силой разгонять любые незаконные перекрытия дорог.",
      "fr": "La police devrait immédiatement disperser par la force tout barrage routier illégal."
    }
  },
  {
    "id": 113,
    "categoryKey": "liberties",
    "axis": "soc",
    "multiplier": 1,
    "isQuick": false,
    "text": {
      "pl": "Noszenie gazu pieprzowego do samoobrony powinno być całkowicie wolne od zezwoleń.",
      "en": "Carrying pepper spray for personal self-defense should be permit-free.",
      "es": "Portar espray de pimienta para defensa propia no debe requerir ningún tipo de permiso.",
      "de": "Das Führen von Pfefferspray zur Notwehr sollte vollkommen genehmigungsfrei sein.",
      "ru": "Ношение перцового баллончика для самообороны не должно требовать никаких разрешений.",
      "fr": "Le port d'une bombe lacrymogène pour l'autodéfense devrait être libre de toute autorisation."
    }
  },
  {
    "id": 114,
    "categoryKey": "liberties",
    "axis": "soc",
    "multiplier": -1,
    "isQuick": false,
    "text": {
      "pl": "Skazani na dożywocie powinni wykonywać przymusową ciężką pracę fizyczną.",
      "en": "Convicts serving life prison sentences should be forced to perform hard physical labor.",
      "es": "Los condenados a prisión permanente deben realizar trabajos forzados obligatorios.",
      "de": "Zu lebenslanger Haft verurteilte Schwerstkriminelle sollten zu Zwangsarbeit verpflichtet werden.",
      "ru": "Осужденные на пожизненное заключение должны привлекаться к принудительному физическому труду.",
      "fr": "Les criminels condamnés à perpétuité devraient être soumis à des travaux forcés obligatoires."
    }
  },
  {
    "id": 115,
    "categoryKey": "liberties",
    "axis": "soc",
    "multiplier": 1,
    "isQuick": false,
    "text": {
      "pl": "Uprawa konopi indyjskich w domu na własny użytek powinna być dozwolona.",
      "en": "Cultivating cannabis plants at home for personal adult consumption should be permitted.",
      "es": "Cultivar plantas de marihuana en casa para consumo propio debe estar legalmente permitido.",
      "de": "Der Eigenanbau von Cannabis-Pflanzen in den eigenen vier Wänden sollte legal sein.",
      "ru": "Выращивание конопли дома для личного употребления должно быть разрешено.",
      "fr": "La culture de plants de cannabis à domicile pour usage personnel devrait être autorisée."
    }
  },
  {
    "id": 116,
    "categoryKey": "liberties",
    "axis": "soc",
    "multiplier": -1,
    "isQuick": false,
    "text": {
      "pl": "Państwo powinno prowadzić rejestr osób chorujących psychicznie.",
      "en": "The state should maintain an official central register of individuals with mental illnesses.",
      "es": "El Estado debe gestionar un registro centralizado de personas diagnosticadas con trastornos psiquiátricos.",
      "de": "Der Staat sollte ein amtliches zentrales Register psychisch erkrankter Personen führen.",
      "ru": "Государство должно вести единый реестр лиц с психическими заболеваниями.",
      "fr": "L'État devrait tenir un registre officiel recensant les personnes atteintes de troubles psychiatriques."
    }
  },
  {
    "id": 117,
    "categoryKey": "liberties",
    "axis": "soc",
    "multiplier": 1,
    "isQuick": false,
    "text": {
      "pl": "Obywatele powinni mieć prawo filmować i nagrywać każdą interwencję policji.",
      "en": "Citizens should have the unrestricted right to record and film on-duty police interactions.",
      "es": "Los ciudadanos deben tener derecho a grabar y filmar cualquier actuación policial en la vía pública.",
      "de": "Bürger sollten das uneingeschränkte Recht haben, Polizeieinsätze per Video aufzuzeichnen.",
      "ru": "Граждане должны иметь право снимать на видео любые действия полиции.",
      "fr": "Les citoyens devraient avoir le droit absolu de filmer toute intervention des forces de l'ordre."
    }
  },
  {
    "id": 118,
    "categoryKey": "tech",
    "axis": "soc",
    "multiplier": 1,
    "isQuick": true,
    "text": {
      "pl": "Kryptowaluty (np. Bitcoin) powinny rozwijać się swobodnie bez państwowego nadzoru.",
      "en": "Cryptocurrencies like Bitcoin should function freely without state or central bank control.",
      "es": "Las criptomonedas como Bitcoin deben operar sin controles de gobiernos ni bancos centrales.",
      "de": "Kryptowährungen wie Bitcoin sollten ohne staatliche Überwachung frei zirkulieren können.",
      "ru": "Криптовалюты (вроде Bitcoin) должны развиваться свободно без вмешательства государства.",
      "fr": "Les cryptomonnaies comme le Bitcoin devraient opérer librement sans contrôle de l'État."
    }
  },
  {
    "id": 119,
    "categoryKey": "tech",
    "axis": "soc",
    "multiplier": -1,
    "isQuick": true,
    "text": {
      "pl": "Rząd powinien surowo kontrolować i licencjonować zaawansowane modele sztucznej inteligencji.",
      "en": "The government should strictly license and regulate advanced artificial intelligence models.",
      "es": "El gobierno debe someter a licencias y control estricto los modelos avanzados de inteligencia artificial.",
      "de": "Die Regierung sollte fortschrittliche KI-Modelle streng regulieren und lizenzierungspflichtig machen.",
      "ru": "Правительство должно лицензировать и строго контролировать модели искусственного интеллекта.",
      "fr": "Le gouvernement devrait réguler et soumettre à licence obligatoire les modèles avancés d'intelligence artificielle."
    }
  },
  {
    "id": 120,
    "categoryKey": "tech",
    "axis": "soc",
    "multiplier": 1,
    "isQuick": false,
    "text": {
      "pl": "Komunikatory internetowe powinny mieć prawo do pełnego szyfrowania bez tylnych furtek dla służb.",
      "en": "Messaging apps should be legally entitled to full end-to-end encryption without backdoors.",
      "es": "Las aplicaciones de mensajería deben ofrecer cifrado total sin puertas traseras para la policía.",
      "de": "Messenger sollten das Recht auf lückenlose Ende-zu-Ende-Verschlüsselung ohne staatliche Hintertüren haben.",
      "ru": "Мессенджеры должны иметь право на полное сквозное шифрование без лазеек для спецслужб.",
      "fr": "Les messageries électroniques devraient avoir le droit au chiffrement total sans porte dérobée pour la police."
    }
  },
  {
    "id": 121,
    "categoryKey": "tech",
    "axis": "soc",
    "multiplier": -1,
    "isQuick": false,
    "text": {
      "pl": "Papierowa gotówka powinna zostać wycofana i zastąpiona wyłącznie cyfrowym pieniądzem banku centralnego (CBDC).",
      "en": "Physical cash should be phased out in favor of central bank digital currency (CBDC).",
      "es": "El dinero en efectivo debe sustituirse por completo por una moneda digital de banco central (CBDC).",
      "de": "Bargeld sollte abgeschafft und durch digitales Zentralbankgeld (CBDC) ersetzt werden.",
      "ru": "Наличные деньги должны быть заменены государственной цифровой валютой (CBDC).",
      "fr": "L'argent liquide devrait être aboli et remplacé par une monnaie numérique de banque centrale (MNBC)."
    }
  },
  {
    "id": 122,
    "categoryKey": "tech",
    "axis": "soc",
    "multiplier": 1,
    "isQuick": false,
    "text": {
      "pl": "Dostawcy internetu muszą traktować cały ruch sieciowy jednakowo (neutralność sieci).",
      "en": "Internet service providers must treat all web traffic equally without throttling (net neutrality).",
      "es": "Los proveedores de telecomunicaciones deben respetar la neutralidad de la red sin discriminar tráfico.",
      "de": "Internetanbieter müssen sämtlichen Datenverkehr im Netz vollkommen gleich behandeln (Netzneutralität).",
      "ru": "Провайдеры интернета обязаны пропускать весь трафик одинаково (сетевой нейтралитет).",
      "fr": "Les fournisseurs d'accès internet doivent traiter tout le trafic de façon égale (neutralité du net)."
    }
  },
  {
    "id": 123,
    "categoryKey": "tech",
    "axis": "soc",
    "multiplier": -1,
    "isQuick": false,
    "text": {
      "pl": "Państwo powinno usuwać z platform internetowych treści uznane za dezinformację.",
      "en": "The state should order the removal of online posts deemed to be disinformation.",
      "es": "El Estado debe ordenar el borrado de publicaciones en redes consideradas desinformación.",
      "de": "Der Staat sollte Online-Beiträge löschen lassen, die er als Fehlinformation einstuft.",
      "ru": "Государство должно удалять из интернета публикации, признанные дезинформацией.",
      "fr": "L'État devrait faire supprimer des réseaux sociaux les contenus qualifiés de désinformation."
    }
  },
  {
    "id": 124,
    "categoryKey": "tech",
    "axis": "soc",
    "multiplier": 1,
    "isQuick": false,
    "text": {
      "pl": "Oprogramowanie stworzone za publiczne pieniądze powinno być otwarte i darmowe (Open Source).",
      "en": "Publicly funded software and computer code should be open-source and free for everyone.",
      "es": "El código de software financiado con fondos públicos debe ser libre y de código abierto.",
      "de": "Mit Steuergeldern programmierte Software sollte als Open Source frei zugänglich sein.",
      "ru": "Программы, созданные на государственные средства, должны иметь открытый исходный код.",
      "fr": "Les logiciels créés avec de l'argent public devraient être libres et en code source ouvert."
    }
  },
  {
    "id": 125,
    "categoryKey": "tech",
    "axis": "soc",
    "multiplier": -1,
    "isQuick": false,
    "text": {
      "pl": "Modyfikacje genetyczne ludzkich zarodków powinny być całkowicie zakazane.",
      "en": "Gene editing on human embryos should be prohibited worldwide.",
      "es": "La edición genética de embriones humanos debe estar completamente prohibida.",
      "de": "Genetische Eingriffe an menschlichen Embryonen sollten ausnahmslos verboten werden.",
      "ru": "Генетическая модификация человеческих эмбрионов должна быть полностью запрещена.",
      "fr": "Toute modification génétique sur des embryons humains devrait être strictement interdite."
    }
  },
  {
    "id": 126,
    "categoryKey": "tech",
    "axis": "soc",
    "multiplier": 1,
    "isQuick": false,
    "text": {
      "pl": "Każdy programista powinien mieć prawo publikować własne modele sztucznej inteligencji bez licencji.",
      "en": "Any developer should be free to release open-source AI models without state licenses.",
      "es": "Cualquier programador debe poder publicar modelos de inteligencia artificial sin licencia estatal.",
      "de": "Jeder Programmierer sollte eigene KI-Modelle ohne amtliche Genehmigung veröffentlichen dürfen.",
      "ru": "Любой программист должен иметь право выкладывать модели ИИ без государственных лицензий.",
      "fr": "Tout développeur devrait pouvoir publier des modèles d'intelligence artificielle sans licence d'État."
    }
  },
  {
    "id": 127,
    "categoryKey": "tech",
    "axis": "soc",
    "multiplier": -1,
    "isQuick": false,
    "text": {
      "pl": "Autonomiczne drony bojowe podejmujące decyzję o ataku bez człowieka powinny być zakazane.",
      "en": "Autonomous military killer drones capable of attacking without human input should be outlawed.",
      "es": "Los drones militares autónomos capaces de disparar sin control humano deben estar vetados.",
      "de": "Autonome Kampfdrohnen, die ohne menschliche Freigabe tödliche Schläge ausführen, gehören verboten.",
      "ru": "Автономные боевые дроны, атакующие людей без команды оператора, должны быть запрещены.",
      "fr": "Les drones militaires autonomes tirant sans validation humaine devraient être bannis."
    }
  },
  {
    "id": 128,
    "categoryKey": "tech",
    "axis": "soc",
    "multiplier": 1,
    "isQuick": false,
    "text": {
      "pl": "Czas ochrony patentów technologicznych powinien zostać radykalnie skrócony.",
      "en": "The legal duration of patent protection on tech inventions should be sharply shortened.",
      "es": "El periodo de vigencia de las patentes sobre tecnología debería reducirse fuertemente.",
      "de": "Die Schutzdauer technologischer Patente sollte spürbar verkürzt werden.",
      "ru": "Сроки действия патентов на технологии должны быть существенно сокращены.",
      "fr": "La durée légale des brevets sur les innovations technologiques devrait être nettement réduite."
    }
  },
  {
    "id": 129,
    "categoryKey": "tech",
    "axis": "soc",
    "multiplier": -1,
    "isQuick": false,
    "text": {
      "pl": "Państwo powinno stworzyć centralną bazę DNA wszystkich obywateli.",
      "en": "The state should collect and maintain a mandatory biometric DNA database of all citizens.",
      "es": "El Estado debe crear un fichero centralizado con los perfiles genéticos de ADN de toda la población.",
      "de": "Der Staat sollte ein amtliches genetisches DNA-Zentralregister aller Einwohner anlegen.",
      "ru": "Государство должно создать единую базу ДНК всех граждан страны.",
      "fr": "L'État devrait constituer une base de données biométrique réunissant l'ADN de tous les citoyens."
    }
  },
  {
    "id": 130,
    "categoryKey": "tech",
    "axis": "soc",
    "multiplier": 1,
    "isQuick": false,
    "text": {
      "pl": "Prywatne firmy powinny móc swobodnie wydobywać surowce na Księżycu i planetoidach.",
      "en": "Commercial private space firms should be permitted to mine minerals on the Moon and asteroids.",
      "es": "Las empresas espaciales privadas deben poder extraer recursos minerales en la Luna y asteroides.",
      "de": "Private Weltraumunternehmen sollten Rohstoffe auf Mond und Asteroiden frei abbauen dürfen.",
      "ru": "Частные компании должны иметь право добывать полезные ископаемые на Луне и астероидах.",
      "fr": "Les entreprises privées devraient pouvoir exploiter librement les minerais sur la Lune et les astéroïdes."
    }
  },
  {
    "id": 131,
    "categoryKey": "tech",
    "axis": "soc",
    "multiplier": -1,
    "isQuick": false,
    "text": {
      "pl": "Treści tworzone przez sztuczną inteligencję powinny mieć obowiązkowy państwowy znak wodny.",
      "en": "All synthetic media generated by artificial intelligence must carry mandatory verified watermarks.",
      "es": "Cualquier texto, imagen o audio generado por IA debe incluir obligatoriamente una marca de agua.",
      "de": "Sämtliche von künstlicher Intelligenz erzeugten Inhalte sollten gesetzlich wasserzeichenpflichtig sein.",
      "ru": "Контент, созданный искусственным интеллектом, должен иметь обязательный водяной знак.",
      "fr": "Tout contenu créé par une intelligence artificielle devrait obligatoirement comporter un filigrane numérique."
    }
  },
  {
    "id": 132,
    "categoryKey": "tech",
    "axis": "soc",
    "multiplier": 1,
    "isQuick": false,
    "text": {
      "pl": "Dostęp do szybkiego internetu powinien być uznany za podstawowe prawo obywatelskie.",
      "en": "Broadband high-speed internet access should be legally recognized as a fundamental civil right.",
      "es": "El acceso a internet de alta velocidad debe ser reconocido como un derecho ciudadano fundamental.",
      "de": "Der Zugang zu schnellem Breitbandinternet sollte als verfassungsrechtliches Grundrecht gelten.",
      "ru": "Доступ к скоростному интернету должен быть признан базовым правом гражданина.",
      "fr": "L'accès à l'internet à haut débit devrait être reconnu comme un droit civil fondamental."
    }
  },
  {
    "id": 133,
    "categoryKey": "tech",
    "axis": "soc",
    "multiplier": -1,
    "isQuick": false,
    "text": {
      "pl": "Zakładanie kont w mediach społecznościowych powinno wymagać potwierdzenia tożsamości dokumentem.",
      "en": "Registering an account on social media networks should require official government ID verification.",
      "es": "Crearse un perfil en redes sociales debería exigir verificar la identidad con documento oficial.",
      "de": "Die Anmeldung in sozialen Netzwerken sollte eine amtliche Identifizierung per Ausweis verlangen.",
      "ru": "Регистрация в социальных сетях должна требовать подтверждения личности по паспорту.",
      "fr": "L'ouverture d'un compte sur les réseaux sociaux devrait exiger la présentation d'une pièce d'identité."
    }
  },
  {
    "id": 134,
    "categoryKey": "tech",
    "axis": "soc",
    "multiplier": -1,
    "isQuick": false,
    "text": {
      "pl": "Płatności gotówkowe powyżej określonej kwoty powinny być prawnie zakazane.",
      "en": "Cash payments exceeding a fixed statutory amount should be outlawed.",
      "es": "Efectuar pagos en metálico por encima de cierta cantidad debe estar prohibido por ley.",
      "de": "Barzahlungen oberhalb festgelegter Obergrenzen sollten gesetzlich verboten werden.",
      "ru": "Оплата наличными свыше установленной законом суммы должна быть запрещена.",
      "fr": "Les paiements en espèces au-delà d'un montant fixé par la loi devraient être interdits."
    }
  },
  {
    "id": 135,
    "categoryKey": "ecology",
    "axis": "soc",
    "multiplier": 1,
    "isQuick": true,
    "text": {
      "pl": "Redukcja emisji spalin powinna być priorytetem, nawet kosztem wzrostu cen energii.",
      "en": "Reducing carbon emissions should be top priority even if it increases energy prices.",
      "es": "Reducir las emisiones de gases debe ser prioritario, aunque suban los precios de la energía.",
      "de": "Die Senkung von Treibhausgasen sollte Vorrang haben, selbst wenn Energie dadurch teurer wird.",
      "ru": "Снижение выбросов должно быть приоритетом, даже если вырастут тарифы на энергию.",
      "fr": "Réduire les émissions polluantes doit être prioritaire, même si l'énergie devient plus chère."
    }
  },
  {
    "id": 136,
    "categoryKey": "ecology",
    "axis": "soc",
    "multiplier": -1,
    "isQuick": true,
    "text": {
      "pl": "Powinniśmy wydobywać węgiel i gaz tak długo, jak zapewniają tani prąd.",
      "en": "We should extract coal and natural gas as long as they provide affordable electricity.",
      "es": "Debemos seguir extrayendo carbón y gas mientras aseguren electricidad barata.",
      "de": "Wir sollten Kohle und Erdgas fördern, solange sie preiswerten Strom gewährleisten.",
      "ru": "Следует добывать уголь и газ до тех пор, пока они дают дешёвое электричество.",
      "fr": "Nous devrions exploiter le charbon et le gaz tant qu'ils fournissent une électricité abordable."
    }
  },
  {
    "id": 137,
    "categoryKey": "ecology",
    "axis": "soc",
    "multiplier": 1,
    "isQuick": false,
    "text": {
      "pl": "Krótkie loty samolotem powinny być zakazane na trasach z szybkim połączeniem kolejowym.",
      "en": "Short-distance airline flights should be banned on corridors with fast train service.",
      "es": "Los vuelos en avión de corta distancia deben prohibirse si existe línea de tren de alta velocidad.",
      "de": "Kurzstreckenflüge sollten verboten werden, wenn eine schnelle Bahnverbindung besteht.",
      "ru": "Короткие авиарейсы должны быть запрещены на маршрутах со скоростными поездами.",
      "fr": "Les vols intérieurs court-courriers devraient être interdits sur les liaisons ferroviaires rapides."
    }
  },
  {
    "id": 138,
    "categoryKey": "ecology",
    "axis": "soc",
    "multiplier": -1,
    "isQuick": false,
    "text": {
      "pl": "Zakaz sprzedaży nowych samochodów spalinowych po 2035 roku powinien zostać odrzucony.",
      "en": "The planned phase-out ban on new internal combustion engine cars by 2035 should be scrapped.",
      "es": "La prohibición de vender turismos de combustión nuevos a partir de 2035 debe revocarse.",
      "de": "Das Verbot des Verkaufs von Neuwagen mit Verbrennungsmotor ab 2035 sollte gekippt werden.",
      "ru": "Запрет на продажу новых бензиновых и дизельных автомобилей с 2035 года следует отменить.",
      "fr": "L'interdiction de vente de voitures thermiques neuves à partir de 2035 devrait être annulée."
    }
  },
  {
    "id": 139,
    "categoryKey": "ecology",
    "axis": "soc",
    "multiplier": 1,
    "isQuick": false,
    "text": {
      "pl": "Trzymanie zwierząt w klatkach na fermach przemysłowych powinno być zakazane.",
      "en": "Confining livestock in cages on industrial factory farms should be banned.",
      "es": "Enjaular animales en granjas intensivas industriales debe estar prohibido por ley.",
      "de": "Käfighaltung von Nutztieren in industriellen Großbetrieben sollte verboten werden.",
      "ru": "Содержание животных в клетках на промышленных фермах должно быть запрещено.",
      "fr": "L'élevage intensif d'animaux en cage dans les fermes industrielles devrait être interdit."
    }
  },
  {
    "id": 140,
    "categoryKey": "ecology",
    "axis": "soc",
    "multiplier": -1,
    "isQuick": false,
    "text": {
      "pl": "Przepisy ochrony środowiska nie powinny blokować budowy dróg i fabryk.",
      "en": "Environmental protection rules should not block the construction of highways and industrial plants.",
      "es": "Las normas medioambientales no deben frenar la construcción de carreteras ni plantas industriales.",
      "de": "Umweltauflagen sollten den Bau wichtiger Verkehrswege und Industriewerke nicht aufhalten.",
      "ru": "Экологические нормы не должны блокировать строительство дорог и заводов.",
      "fr": "Les réglementations environnementales ne devraient pas bloquer la construction de routes et d'usines."
    }
  },
  {
    "id": 141,
    "categoryKey": "ecology",
    "axis": "soc",
    "multiplier": 1,
    "isQuick": false,
    "text": {
      "pl": "Wjazd starych aut spalinowych do centrów miast powinien być zakazany.",
      "en": "Older polluting internal combustion vehicles should be barred from entering city centers.",
      "es": "El acceso de vehículos antiguos de combustión al centro urbano debe estar vetado.",
      "de": "Ältere abgasintensive Fahrzeuge sollten nicht mehr in die Innenstädte fahren dürfen.",
      "ru": "Въезд старых автомобилей в центры городов должен быть запрещён.",
      "fr": "L'accès des vieilles voitures thermiques aux centres-villes devrait être interdit."
    }
  },
  {
    "id": 142,
    "categoryKey": "ecology",
    "axis": "soc",
    "multiplier": -1,
    "isQuick": false,
    "text": {
      "pl": "Podatki od emisji CO2 osłabiają naszą gospodarkę wobec innych państw.",
      "en": "Carbon emission taxes hurt our domestic economy relative to foreign competitors.",
      "es": "Los impuestos sobre el CO2 perjudican a nuestra economía frente a la competencia exterior.",
      "de": "CO2-Abgaben schwächen die heimische Wirtschaft im internationalen Vergleich.",
      "ru": "Углеродные налоги ослабляют нашу экономику перед иностранными конкурентами.",
      "fr": "Les taxes sur le carbone affaiblissent notre économie face aux concurrents étrangers."
    }
  },
  {
    "id": 143,
    "categoryKey": "ecology",
    "axis": "soc",
    "multiplier": 1,
    "isQuick": false,
    "text": {
      "pl": "Dotacje do paliw kopalnych powinny zostać przeniesione na energię słoneczną i wiatrową.",
      "en": "Fossil fuel subsidies should be redirected toward solar and wind renewables.",
      "es": "Las ayudas públicas a los combustibles fósiles deben derivarse a la energía solar y eólica.",
      "de": "Subventionen für Kohle, Öl und Gas sollten in Sonnen- und Windkraft umgeleitet werden.",
      "ru": "Субсидии на ископаемое топливо должны быть перенаправлены на солнечную и ветровую энергию.",
      "fr": "Les aides aux énergies fossiles devraient être réorientées vers l'énergie solaire et éolienne."
    }
  },
  {
    "id": 144,
    "categoryKey": "ecology",
    "axis": "soc",
    "multiplier": -1,
    "isQuick": false,
    "text": {
      "pl": "Budowa elektrowni atomowych jest konieczna dla stabilnych dostaw prądu.",
      "en": "Constructing nuclear power plants is necessary for dependable electric power supply.",
      "es": "Construir centrales nucleares es indispensable para garantizar el suministro eléctrico firme.",
      "de": "Der Neubau von Kernkraftwerken ist für eine ausfallsichere Stromversorgung unverzichtbar.",
      "ru": "Строительство АЭС необходимо для стабильного энергоснабжения страны.",
      "fr": "La construction de centrales nucléaires est indispensable à la sécurité de l'approvisionnement électrique."
    }
  },
  {
    "id": 145,
    "categoryKey": "ecology",
    "axis": "soc",
    "multiplier": 1,
    "isQuick": false,
    "text": {
      "pl": "Jednorazowe plastikowe butelki i opakowania powinny być wycofane ze sprzedaży.",
      "en": "Single-use plastic bottles and packaging should be phased out from retail commerce.",
      "es": "Las botellas y envases de plástico no reutilizables deben retirarse de la venta.",
      "de": "Einwegflaschen und Plastikverpackungen sollten im Handel komplett untersagt werden.",
      "ru": "Одноразовые пластиковые бутылки и упаковка должны быть изъяты из продажи.",
      "fr": "Les bouteilles et emballages plastiques à usage unique devraient être retirés du commerce."
    }
  },
  {
    "id": 146,
    "categoryKey": "ecology",
    "axis": "soc",
    "multiplier": -1,
    "isQuick": false,
    "text": {
      "pl": "Rolnicy powinni mieć swobodę stosowania nawozów chemicznych i pestycydów.",
      "en": "Farmers should be free to use chemical fertilizers and synthetic pesticides on crops.",
      "es": "Los agricultores deben tener libertad para utilizar abonos químicos y pesticidas.",
      "de": "Landwirte sollten mineralische Düngemittel und Pflanzenschutzmittel frei verwenden dürfen.",
      "ru": "Фермеры должны иметь свободу применять удобрения и пестициды на полях.",
      "fr": "Les agriculteurs devraient avoir la liberté d'utiliser des engrais chimiques et des pesticides."
    }
  },
  {
    "id": 147,
    "categoryKey": "ecology",
    "axis": "soc",
    "multiplier": 1,
    "isQuick": false,
    "text": {
      "pl": "Hodowla zwierząt na futra powinna być całkowicie zakazana.",
      "en": "Breeding animals solely for their fur coats should be prohibited by law.",
      "es": "La cría de animales con destino a la industria peletera debe estar prohibida.",
      "de": "Die Zucht von Tieren zur Pelzgewinnung sollte gesetzlich untersagt sein.",
      "ru": "Разведение пушных зверей ради меха должно быть запрещено законом.",
      "fr": "L'élevage d'animaux pour leur fourrure devrait être formellement interdit."
    }
  },
  {
    "id": 148,
    "categoryKey": "ecology",
    "axis": "soc",
    "multiplier": -1,
    "isQuick": false,
    "text": {
      "pl": "Testowanie leków na zwierzętach laboratoryjnych powinno być dozwolone.",
      "en": "Testing pharmaceutical medicines on laboratory animals should remain lawful.",
      "es": "El ensayo de fármacos en animales de laboratorio debe continuar estando permitido.",
      "de": "Versuche an Labortieren zur Erprobung von Medikamenten sollten erlaubt bleiben.",
      "ru": "Испытание медицинских препаратов на лабораторных животных должно быть разрешено.",
      "fr": "L'expérimentation de médicaments sur des animaux de laboratoire devrait rester autorisée."
    }
  },
  {
    "id": 149,
    "categoryKey": "ecology",
    "axis": "soc",
    "multiplier": 1,
    "isQuick": false,
    "text": {
      "pl": "Wycinka drzew w lasach naturalnych powinna być całkowicie wstrzymana.",
      "en": "Commercial logging in old-growth natural forests should be entirely stopped.",
      "es": "La tala de árboles en bosques autóctonos vírgenes debe quedar totalmente suspendida.",
      "de": "Holzeinschlag in urwüchsigen Naturwäldern sollte vollständig unterbunden werden.",
      "ru": "Вырубка деревьев в реликтовых лесах должна быть полностью прекращена.",
      "fr": "L'abattage d'arbres dans les forêts primaires naturelles devrait être totalement banni."
    }
  },
  {
    "id": 150,
    "categoryKey": "ecology",
    "axis": "soc",
    "multiplier": -1,
    "isQuick": false,
    "text": {
      "pl": "Polowania na dzikie zwierzęta powinny pozostać legalnym hobby.",
      "en": "Recreational hunting of wild game should remain a lawful recreational pastime.",
      "es": "La caza recreativa de animales salvajes debe seguir siendo una actividad legal.",
      "de": "Die traditionelle Jagd auf Wildtiere sollte als legales Hobby erhalten bleiben.",
      "ru": "Охота на диких животных должна оставаться разрешённым увлечением.",
      "fr": "La chasse de loisir au gibier sauvage devrait demeurer une activité légale."
    }
  },
  {
    "id": 151,
    "categoryKey": "ecology",
    "axis": "soc",
    "multiplier": 1,
    "isQuick": false,
    "text": {
      "pl": "Restauracje i bary powinny mieć obowiązek podawania bezpłatnej wody z kranu.",
      "en": "Restaurants and bars should be legally obligated to serve free tap water to patrons.",
      "es": "Los restaurantes y locales deben estar obligados a servir agua del grifo gratis a sus clientes.",
      "de": "Gaststätten sollten gesetzlich verpflichtet sein, Gästen Leitungswasser kostenfrei zu servieren.",
      "ru": "Рестораны и бары должны быть обязаны бесплатно подавать гостям питьевую воду из-под крана.",
      "fr": "Les restaurants et bars devraient être tenus de servir gratuitement de l'eau du robinet aux clients."
    }
  },
  {
    "id": 152,
    "categoryKey": "culture",
    "axis": "soc",
    "multiplier": 1,
    "isQuick": true,
    "text": {
      "pl": "Kościół i związki wyznaniowe nie powinny otrzymywać żadnych pieniędzy z podatków.",
      "en": "Religious bodies should receive zero public money from government taxes.",
      "es": "Las iglesias y confesiones religiosas no deben recibir dinero de los impuestos públicos.",
      "de": "Kirchen und Religionsgemeinschaften sollten keinerlei Gelder aus dem Steueraufkommen erhalten.",
      "ru": "Церковь и религиозные организации не должны получать деньги из госбюджета.",
      "fr": "Les cultes religieux ne devraient recevoir aucune subvention issue des impôts publics."
    }
  },
  {
    "id": 153,
    "categoryKey": "culture",
    "axis": "soc",
    "multiplier": -1,
    "isQuick": true,
    "text": {
      "pl": "Wartości chrześcijańskie i tradycja narodowa powinny być podstawą wychowania w szkole.",
      "en": "Traditional heritage and Christian values should be the cornerstone of education in schools.",
      "es": "Las raíces cristianas y la tradición nacional deben constituir la base de la educación en las aulas.",
      "de": "Christliche Werte und heimatliche Traditionen sollten das Fundament der Schulbildung bilden.",
      "ru": "Христианские ценности и национальные традиции должны быть основой школьного воспитания.",
      "fr": "Les valeurs chrétiennes et la tradition nationale devraient fonder l'éducation scolaire."
    }
  },
  {
    "id": 154,
    "categoryKey": "culture",
    "axis": "soc",
    "multiplier": 1,
    "isQuick": false,
    "text": {
      "pl": "Małżeństwa osób tej samej płci powinny być w pełni legalne.",
      "en": "Marriage between same-sex couples should be completely legal.",
      "es": "El matrimonio entre personas del mismo sexo debe ser plenamente legal.",
      "de": "Die gleichgeschlechtliche Ehe sollte uneingeschränkt rechtlich anerkannt sein.",
      "ru": "Однополые браки должны быть полностью законными.",
      "fr": "Le mariage pour les personnes de même sexe devrait être pleinement légal."
    }
  },
  {
    "id": 155,
    "categoryKey": "culture",
    "axis": "soc",
    "multiplier": -1,
    "isQuick": false,
    "text": {
      "pl": "Tradycyjna rodzina powinna otrzymywać szczególne przywileje od państwa.",
      "en": "The traditional married mother-father family unit should receive special state privileges.",
      "es": "La familia tradicional debe gozar de privilegios y protección especial por parte del Estado.",
      "de": "Die traditionelle Familie aus Vater, Mutter und Kindern sollte staatlich besonders privilegiert werden.",
      "ru": "Традиционная семья должна пользоваться особыми льготами от государства.",
      "fr": "La famille traditionnelle devrait bénéficier d'avantages particuliers accordés par l'État."
    }
  },
  {
    "id": 156,
    "categoryKey": "culture",
    "axis": "soc",
    "multiplier": 1,
    "isQuick": false,
    "text": {
      "pl": "Kobieta powinna mieć prawo do legalnej aborcji do 12. tygodnia ciąży.",
      "en": "Women should have the legal right to voluntary abortion up to the 12th week of pregnancy.",
      "es": "La mujer debe tener derecho legal a interrumpir el embarazo hasta la semana 12.",
      "de": "Frauen sollten das Recht auf straffreien Schwangerschaftsabbruch bis zur 12. Woche haben.",
      "ru": "Женщина должна иметь право на легальный аборт до 12-й недели беременности.",
      "fr": "Les femmes devraient avoir un droit légal à l'avortement jusqu'à la 12e semaine de grossesse."
    }
  },
  {
    "id": 157,
    "categoryKey": "culture",
    "axis": "soc",
    "multiplier": -1,
    "isQuick": false,
    "text": {
      "pl": "Symbole religijne (np. krzyże) powinny wisieć w klasach szkolnych i sądach.",
      "en": "Religious symbols like crucifixes should be displayed in public classrooms and courtrooms.",
      "es": "Los símbolos religiosos como crucifijos deben estar presentes en escuelas públicas y juzgados.",
      "de": "Kreuze und religiöse Symbole sollten in Schulklassen und Gerichtssälen angebracht sein.",
      "ru": "Религиозные символы (кресты) должны висеть в классах школ и залах судов.",
      "fr": "Des symboles religieux (comme la croix) devraient être présents dans les écoles et les tribunaux."
    }
  },
  {
    "id": 158,
    "categoryKey": "culture",
    "axis": "soc",
    "multiplier": 1,
    "isQuick": false,
    "text": {
      "pl": "Osoby transpłciowe powinny móc zmienić oznaczenie płci w dokumentach na własny wniosek.",
      "en": "Transgender individuals should be able to change their gender marker on IDs upon self-declaration.",
      "es": "Las personas trans deben poder rectificar la mención de sexo en el documento por simple solicitud.",
      "de": "Transgeschlechtliche Menschen sollten ihren amtlichen Geschlechtseintrag auf Antrag ändern können.",
      "ru": "Трансгендерные люди должны иметь возможность изменить пол в паспорте по заявлению.",
      "fr": "Les personnes transgenres devraient pouvoir rectifier la mention de leur sexe à l'état civil sur simple demande."
    }
  },
  {
    "id": 159,
    "categoryKey": "culture",
    "axis": "soc",
    "multiplier": -1,
    "isQuick": false,
    "text": {
      "pl": "Państwo powinno chronić kulturę i język narodowy przed obcymi wpływami.",
      "en": "The state should actively shield national language and culture from foreign cultural trends.",
      "es": "El Estado debe defender activamente el idioma y la cultura autóctonos de las modas extranjeras.",
      "de": "Der Staat sollte die heimatliche Sprache und Kultur vor fremden Einflüssen bewahren.",
      "ru": "Государство должно защищать родной язык и культуру от иностранного влияния.",
      "fr": "L'État devrait préserver activement la langue et la culture nationales des influences étrangères."
    }
  },
  {
    "id": 160,
    "categoryKey": "culture",
    "axis": "soc",
    "multiplier": 1,
    "isQuick": false,
    "text": {
      "pl": "Edukacja seksualna o antykoncepcji powinna być obowiązkowa w szkołach.",
      "en": "Sex education covering contraception should be compulsory in all schools.",
      "es": "La educación sexual sobre anticoncepción debe ser materia obligatoria en los centros escolares.",
      "de": "Aufklärungsunterricht über Verhütung sollte an allen Schulen Pflichtfach sein.",
      "ru": "Уроки полового просвещения о контрацепции должны быть обязательными в школах.",
      "fr": "L'éducation sexuelle portant sur la contraception devrait être obligatoire dans les établissements scolaires."
    }
  },
  {
    "id": 161,
    "categoryKey": "culture",
    "axis": "soc",
    "multiplier": -1,
    "isQuick": false,
    "text": {
      "pl": "Publiczne obrażanie uczuć religijnych powinno być ścigane jako przestępstwo.",
      "en": "Publicly blaspheming or insulting religious beliefs should be prosecuted as a crime.",
      "es": "La ofensa pública a los sentimientos religiosos debe ser perseguida como delito penal.",
      "de": "Die öffentliche Herabwürdigung religiöser Bekenntnisse sollte als Straftat verfolgt werden.",
      "ru": "Публичное оскорбление чувств верующих должно наказываться как уголовное преступление.",
      "fr": "L'offense publique aux croyances religieuses devrait être poursuivie pénalement comme un délit."
    }
  },
  {
    "id": 162,
    "categoryKey": "culture",
    "axis": "soc",
    "multiplier": 1,
    "isQuick": false,
    "text": {
      "pl": "Nauczyciele w szkołach publicznych muszą zachowywać całkowitą neutralność religijną.",
      "en": "Educators in state-run public schools must remain strictly neutral regarding religion.",
      "es": "Los profesores de la escuela pública deben mantener una neutralidad religiosa estricta.",
      "de": "Lehrkräfte an staatlichen Schulen müssen sich im Dienst religiös strikt neutral verhalten.",
      "ru": "Учителя в государственных школах обязаны соблюдать нейтралитет в вопросах религии.",
      "fr": "Les enseignants de l'école publique doivent observer une stricte neutralité religieuse au travail."
    }
  },
  {
    "id": 163,
    "categoryKey": "culture",
    "axis": "soc",
    "multiplier": -1,
    "isQuick": false,
    "text": {
      "pl": "Lekcje historii w szkołach powinny budować dumę z narodowej przeszłości.",
      "en": "School history lessons should actively inspire pride in the nation's past triumphs.",
      "es": "Las clases de historia escolar deben infundir orgullo patriótico en el alumnado.",
      "de": "Der schulische Geschichtsunterricht sollte vor allem Nationalstolz auf die eigene Vergangenheit vermitteln.",
      "ru": "Уроки истории в школе должны воспитывать гордость за прошлое своего народа.",
      "fr": "Les cours d'histoire à l'école devraient susciter la fierté du passé national."
    }
  },
  {
    "id": 164,
    "categoryKey": "culture",
    "axis": "soc",
    "multiplier": 1,
    "isQuick": false,
    "text": {
      "pl": "Nauczanie religii powinno odbywać się w parafiach, a nie w publicznych szkołach.",
      "en": "Religious instruction should take place in churches, not inside public schools.",
      "es": "La catequesis religiosa debe impartirse en las iglesias y no en los colegios públicos.",
      "de": "Religionsunterricht sollte in Kirchengemeinden statt an staatlichen Schulen stattfinden.",
      "ru": "Обучение религии должно проходить в приходах, а не в государственных школах.",
      "fr": "L'enseignement confessionnel devrait être dispensé dans les lieux de culte et non dans les écoles publiques."
    }
  },
  {
    "id": 165,
    "categoryKey": "culture",
    "axis": "soc",
    "multiplier": -1,
    "isQuick": false,
    "text": {
      "pl": "Lekarze powinni mieć prawo odmówić zabiegu sprzecznego z ich sumieniem.",
      "en": "Medical doctors should retain the legal right of conscientious objection to procedures.",
      "es": "Los médicos deben tener derecho a la objeción de conciencia ante intervenciones contrarias a su ética.",
      "de": "Ärzte sollten das Recht behalten, Behandlungen aus Gewissensgründen abzulehnen.",
      "ru": "Врачи должны иметь право отказаться от процедур, противоречащих их совести.",
      "fr": "Les médecins devraient conserver le droit de refuser un acte contraire à leur conscience."
    }
  },
  {
    "id": 166,
    "categoryKey": "culture",
    "axis": "soc",
    "multiplier": -1,
    "isQuick": false,
    "text": {
      "pl": "Instytucja małżeństwa powinna być w prawie zdefiniowana wyłącznie jako związek kobiety i mężczyzny.",
      "en": "The legal institution of marriage should be defined exclusively as a union between a man and a woman.",
      "es": "La figura jurídica del matrimonio debe quedar definida solo como la unión de un hombre y una mujer.",
      "de": "Die Ehe sollte gesetzlich ausschließlich als Bund zwischen Mann und Frau definiert sein.",
      "ru": "Брак в законодательстве должен быть определён только как союз мужчины и женщины.",
      "fr": "L'institution du mariage devrait être légalement réservée à l'union d'un homme et d'une femme."
    }
  },
  {
    "id": 167,
    "categoryKey": "culture",
    "axis": "soc",
    "multiplier": 1,
    "isQuick": false,
    "text": {
      "pl": "Zapłodnienie in vitro powinno być w pełni finansowane z budżetu państwa.",
      "en": "In-vitro fertilization (IVF) treatments should be fully subsidized through the national healthcare budget.",
      "es": "Los tratamientos de fecundación in vitro deben ser costeados íntegramente por la sanidad pública.",
      "de": "Künstliche Befruchtungen (IVF) sollten vollständig über öffentliche Krankenkassen finanziert werden.",
      "ru": "Процедура ЭКО должна полностью оплачиваться из государственного бюджета.",
      "fr": "La procréation médicalement assistée (PMA) devrait être intégralement financée par la solidarité nationale."
    }
  },
  {
    "id": 168,
    "categoryKey": "culture",
    "axis": "soc",
    "multiplier": -1,
    "isQuick": false,
    "text": {
      "pl": "Niedziela powinna pozostać dniem ustawowo wolnym od pracy.",
      "en": "Sundays should remain legally protected non-working days for society.",
      "es": "El domingo debe seguir siendo por ley el día común de descanso laboral.",
      "de": "Der Sonntag sollte gesetzlich als arbeitsfreier Ruhetag geschützt bleiben.",
      "ru": "Воскресенье должно оставаться установленным законом выходным днём.",
      "fr": "Le dimanche devrait demeurer un jour de repos hebdomadaire garanti par la loi."
    }
  },
  {
    "id": 169,
    "categoryKey": "society",
    "axis": "soc",
    "multiplier": 1,
    "isQuick": true,
    "text": {
      "pl": "Parytety dla kobiet na listach wyborczych powinny być obowiązkowe.",
      "en": "Gender quotas for female candidates on political election lists should be compulsory.",
      "es": "Las listas electorales deben incluir por ley cuotas obligatorias reservadas a mujeres.",
      "de": "Verbindliche Frauenquoten auf Wahllisten von Parteien sollten vorgeschrieben sein.",
      "ru": "Квоты для женщин в избирательных списках партий должны быть обязательными.",
      "fr": "Des quotas réservés aux femmes sur les listes électorales devraient être obligatoires."
    }
  },
  {
    "id": 170,
    "categoryKey": "society",
    "axis": "soc",
    "multiplier": -1,
    "isQuick": true,
    "text": {
      "pl": "Przy zatrudnianiu powinny decydować wyłącznie kwalifikacje, bez punktów za płeć czy pochodzenie.",
      "en": "Hiring decisions should be based purely on skill, without affirmative action points for gender or race.",
      "es": "En las contrataciones solo debe contar la valía profesional, sin puntos por sexo o procedencia.",
      "de": "Bei der Personalauswahl dürfen einzig Fachkenntnisse zählen, ohne Quoten für Geschlecht oder Ethnie.",
      "ru": "При приёме на работу должны решать только квалификация, без поправок на пол или расу.",
      "fr": "Les embauches ne devraient dépendre que des compétences, sans points attribués au titre du sexe ou de l'origine."
    }
  },
  {
    "id": 171,
    "categoryKey": "society",
    "axis": "soc",
    "multiplier": 1,
    "isQuick": false,
    "text": {
      "pl": "Świadczenie usług seksualnych przez dorosłe osoby powinno być legalnym zawodem.",
      "en": "Adult consensual sex work should be a fully legal and regulated profession.",
      "es": "El trabajo sexual remunerado entre adultos debe ser una profesión legal regulada.",
      "de": "Einvernehmliche Sexarbeit unter Erwachsenen sollte ein ganz normaler legaler Beruf sein.",
      "ru": "Оказание сексуальных услуг совершеннолетними должно быть легальной профессией.",
      "fr": "Le travail du sexe consenti entre adultes devrait être une profession légale et déclarée."
    }
  },
  {
    "id": 172,
    "categoryKey": "society",
    "axis": "soc",
    "multiplier": -1,
    "isQuick": false,
    "text": {
      "pl": "Państwo powinno karać finansowo rodziców odmawiających obowiązkowych szczepień dzieci.",
      "en": "The state should fine parents who refuse mandatory preventive vaccinations for their kids.",
      "es": "El Estado debe multar a los padres que se nieguen a administrar las vacunas obligatorias a sus hijos.",
      "de": "Der Staat sollte Bußgelder verhängen, wenn Eltern vorgeschriebene Kinderimpfungen verweigern.",
      "ru": "Государство должно штрафовать родителей, отказывающихся от обязательных прививок детям.",
      "fr": "L'État devrait infliger des amendes aux parents refusant les vaccins obligatoires de leurs enfants."
    }
  },
  {
    "id": 173,
    "categoryKey": "society",
    "axis": "soc",
    "multiplier": 1,
    "isQuick": false,
    "text": {
      "pl": "Uchodźcy uciekający przed wojną powinni mieć prawo złożyć wniosek o azyl.",
      "en": "Refugees fleeing warzones should have an undisputed legal right to seek political asylum.",
      "es": "Las personas que huyen de la guerra deben tener derecho a pedir asilo sin trabas.",
      "de": "Kriegsflüchtlinge sollten das verbriefte Recht haben, ein ordentliches Asylgesuch einzureichen.",
      "ru": "Беженцы от военных действий должны иметь право подать заявление на убежище.",
      "fr": "Les personnes fuyant les zones de guerre devraient avoir le droit de déposer une demande d'asile."
    }
  },
  {
    "id": 174,
    "categoryKey": "society",
    "axis": "soc",
    "multiplier": -1,
    "isQuick": false,
    "text": {
      "pl": "Imigranci powinni mieć obowiązek zdania testu z języka i kultury kraju.",
      "en": "Immigrants should be required to pass official language and civic culture exams to stay.",
      "es": "Los inmigrantes deben estar obligados a superar exámenes cívicos y de idioma nacional.",
      "de": "Zuwanderer sollten verpflichtende Sprach- und Landeskundeprüfungen bestehen müssen.",
      "ru": "Иммигранты должны быть обязаны сдавать экзамен по языку и культуре страны.",
      "fr": "Les personnes immigrées devraient avoir l'obligation de réussir un examen de langue et de culture civique."
    }
  },
  {
    "id": 175,
    "categoryKey": "society",
    "axis": "soc",
    "multiplier": 1,
    "isQuick": false,
    "text": {
      "pl": "Pary jednopłciowe powinny mieć prawo do adopcji dzieci.",
      "en": "Same-sex couples should have the legal right to adopt children.",
      "es": "Las parejas formadas por personas del mismo sexo deben poder adoptar menores.",
      "de": "Gleichgeschlechtliche Paare sollten das volle Adoptionsrecht für Kinder erhalten.",
      "ru": "Однополые пары должны иметь законное право усыновлять детей.",
      "fr": "Les couples de même sexe devraient avoir le droit d'adopter des enfants."
    }
  },
  {
    "id": 176,
    "categoryKey": "society",
    "axis": "soc",
    "multiplier": -1,
    "isQuick": false,
    "text": {
      "pl": "Utrzymanie porządku publicznego jest ważniejsze niż prawo do ulicznych demonstracji.",
      "en": "Maintaining street peace and public order is more important than unrestricted protest rights.",
      "es": "La conservación de la paz pública es prioritaria sobre el derecho a manifestarse en la calle.",
      "de": "Öffentliche Ordnung und Sicherheit auf Straßen wiegen schwerer als das Demonstrationsrecht.",
      "ru": "Общественный порядок на улицах важнее, чем право на проведение митингов.",
      "fr": "La tranquillité et l'ordre publics priment sur le droit d'organiser des manifestations dans la rue."
    }
  },
  {
    "id": 177,
    "categoryKey": "society",
    "axis": "soc",
    "multiplier": 1,
    "isQuick": false,
    "text": {
      "pl": "Posiadanie małych ilości narkotyków powinno być leczone, a nie karane więzieniem.",
      "en": "Possession of small drug quantities should be met with medical care, not incarceration.",
      "es": "La tenencia de pequeñas cantidades de estupefacientes debe abordarse con terapia médica y no con prisión.",
      "de": "Der Besitz von Kleinstmengen an Drogen sollte ärztlich behandelt statt mit Gefängnis bestraft werden.",
      "ru": "Хранение малых доз наркотических веществ должно лечиться врачами, а не караться тюрьмой.",
      "fr": "La détention de petites quantités de drogue devrait faire l'objet de soins et non de peines de prison."
    }
  },
  {
    "id": 178,
    "categoryKey": "society",
    "axis": "soc",
    "multiplier": -1,
    "isQuick": false,
    "text": {
      "pl": "Cudzoziemcy przebywający w kraju nielegalnie powinni być natychmiast deportowani.",
      "en": "Undocumented immigrants staying in the country unlawfully should be deported immediately.",
      "es": "Los extranjeros indocumentados en situación irregular deben ser expulsados de inmediato.",
      "de": "Ausländer ohne gültiges Aufenthaltsrecht sollten unverzüglich abgeschoben werden.",
      "ru": "Иностранцы, находящиеся в стране незаконно, должны быть немедленно депортированы.",
      "fr": "Les étrangers en situation irrégulière sur le territoire devraient être expulsés immédiatement."
    }
  },
  {
    "id": 179,
    "categoryKey": "society",
    "axis": "soc",
    "multiplier": 1,
    "isQuick": false,
    "text": {
      "pl": "Więzienia powinny skupiać się na nauce zawodu i resocjalizacji, a nie na karaniu.",
      "en": "Correctional facilities should prioritize rehabilitation and trade training over punishment.",
      "es": "Las cárceles deben volcarse en la reinserción social y la capacitación laboral antes que en el castigo.",
      "de": "Gefängnisse sollten ihren Schwerpunkt auf Resozialisierung und Berufsausbildung legen.",
      "ru": "Тюрьмы должны ориентироваться на обучение профессии и исправление, а не на наказание.",
      "fr": "Les prisons devraient privilégier la formation professionnelle et la réinsertion plutôt que la punition."
    }
  },
  {
    "id": 180,
    "categoryKey": "society",
    "axis": "soc",
    "multiplier": -1,
    "isQuick": false,
    "text": {
      "pl": "Szkoła powinna uczyć szacunku do tradycyjnych ról męskich i kobiecych.",
      "en": "Schools should foster respect for traditional masculine and feminine gender roles.",
      "es": "Los centros educativos deben promover el respeto a los roles masculinos y femeninos tradicionales.",
      "de": "Schulen sollten die Achtung vor den überlieferten Rollenmustern von Mann und Frau vermitteln.",
      "ru": "Школа должна воспитывать уважение к традиционным мужским и женским ролям.",
      "fr": "L'école devrait transmettre le respect des rôles masculins et féminins traditionnels."
    }
  },
  {
    "id": 181,
    "categoryKey": "society",
    "axis": "soc",
    "multiplier": 1,
    "isQuick": false,
    "text": {
      "pl": "Osoby samotne powinny mieć pełne prawo do adopcji dzieci.",
      "en": "Single individuals should have equal legal rights to adopt children.",
      "es": "Las personas solteras deben tener pleno derecho legal a adoptar a un menor.",
      "de": "Alleinstehende Personen sollten das uneingeschränkte Recht auf Adoption von Kindern haben.",
      "ru": "Одинокие люди должны иметь равное право усыновлять детей.",
      "fr": "Les personnes célibataires devraient avoir le droit plein et entier d'adopter des enfants."
    }
  },
  {
    "id": 182,
    "categoryKey": "society",
    "axis": "soc",
    "multiplier": -1,
    "isQuick": false,
    "text": {
      "pl": "Zasiłki socjalne powinny przysługiwać wyłącznie obywatelom danego kraju.",
      "en": "Government welfare payments should be strictly reserved for citizens holding national passport.",
      "es": "Las ayudas sociales del Estado deben concederse exclusivamente a quienes posean la nacionalidad.",
      "de": "Staatliche Sozialleistungen sollten ausschließlich Inhabern der Staatsbürgerschaft zustehen.",
      "ru": "Социальные пособия должны выплачиваться только гражданам страны.",
      "fr": "Les prestations d'aide sociale devraient être réservées exclusivement aux citoyens nationaux."
    }
  },
  {
    "id": 183,
    "categoryKey": "society",
    "axis": "soc",
    "multiplier": 1,
    "isQuick": false,
    "text": {
      "pl": "Dostęp do bezpłatnej antykoncepcji powinien być gwarantowany przez państwo.",
      "en": "Access to free contraceptives should be guaranteed to all citizens by the state.",
      "es": "El acceso a métodos anticonceptivos gratuitos debe estar garantizado por la sanidad estatal.",
      "de": "Der Staat sollte kostenlosen Zugang zu Verhütungsmitteln für jeden gewährleisten.",
      "ru": "Доступ к бесплатным средствам контрацепции должен гарантироваться государством.",
      "fr": "L'accès à des contraceptifs gratuits devrait être garanti à tous par l'État."
    }
  },
  {
    "id": 184,
    "categoryKey": "society",
    "axis": "soc",
    "multiplier": -1,
    "isQuick": false,
    "text": {
      "pl": "Marsze i parady równości powinny być zakazane w pobliżu szkół i kościołów.",
      "en": "LGBT pride parades should be barred from taking place in the vicinity of schools and churches.",
      "es": "Los desfiles del orgullo LGBT deben estar prohibidos cerca de colegios e iglesias.",
      "de": "Paraden wie der Christopher Street Day sollten in der Nähe von Schulen und Gotteshäusern untersagt sein.",
      "ru": "ЛГБТ-марши и парады должны быть запрещены рядом со школами и церквями.",
      "fr": "Les défilés de la fierté LGBT devraient être interdits aux abords des écoles et des lieux de culte."
    }
  },
  {
    "id": 185,
    "categoryKey": "security",
    "axis": "soc",
    "multiplier": -1,
    "isQuick": true,
    "text": {
      "pl": "Na granicach państwa powinny stać wysokie zapory i mury.",
      "en": "National land borders should be physically fortified with fences and walls.",
      "es": "Las fronteras terrestres deben estar protegidas con vallas y muros físicos.",
      "de": "An den Außengrenzen sollten befestigte Zäune und Mauern stehen.",
      "ru": "На государственных границах должны быть установлены заборы и заграждения.",
      "fr": "Les frontières terrestres du pays devraient être fortifiées par des murs et des barrières."
    }
  },
  {
    "id": 186,
    "categoryKey": "security",
    "axis": "soc",
    "multiplier": 1,
    "isQuick": true,
    "text": {
      "pl": "Kraje Unii Europejskiej powinny połączyć się w jedno państwo ze wspólnym rządem i armią.",
      "en": "European Union nations should unite into a single federal state with a shared army.",
      "es": "Los países de la Unión Europea deben fusionarse en un solo Estado federal con un ejército común.",
      "de": "Die EU-Staaten sollten sich zu einem europäischen Bundesstaat mit gemeinsamer Armee zusammenschließen.",
      "ru": "Страны Евросоюза должны объединиться в одно государство с общим правительством и армией.",
      "fr": "Les pays de l'Union européenne devraient fusionner en un seul État fédéral doté d'une armée commune."
    }
  },
  {
    "id": 187,
    "categoryKey": "security",
    "axis": "soc",
    "multiplier": -1,
    "isQuick": true,
    "text": {
      "pl": "Obowiązkowa służba wojskowa dla młodych obywateli powinna zostać przywrócona.",
      "en": "Mandatory military service for young adult citizens should be reinstated.",
      "es": "El servicio militar obligatorio para los jóvenes debe ser restablecido.",
      "de": "Die allgemeine Wehrpflicht für junge Staatsbürger sollte wieder in Kraft gesetzt werden.",
      "ru": "Обязательная военная служба для молодых граждан должна быть возвращена.",
      "fr": "Le service militaire obligatoire pour les jeunes citoyens devrait être rétabli."
    }
  },
  {
    "id": 188,
    "categoryKey": "security",
    "axis": "soc",
    "multiplier": 1,
    "isQuick": false,
    "text": {
      "pl": "Wyroki międzynarodowych trybunałów praw człowieka muszą być ważniejsze niż ustawy krajowe.",
      "en": "Rulings of international human rights courts must take precedence over domestic legislation.",
      "es": "Las resoluciones de los tribunales internacionales de derechos humanos deben prevalecer sobre las leyes nacionales.",
      "de": "Urteile internationaler Menschenrechtsgerichte müssen über nationalen Gesetzen stehen.",
      "ru": "Решения международных судов по правам человека должны быть выше законов страны.",
      "fr": "Les arrêts des cours internationales des droits de l'homme doivent prévaloir sur les lois nationales."
    }
  },
  {
    "id": 189,
    "categoryKey": "security",
    "axis": "soc",
    "multiplier": -1,
    "isQuick": false,
    "text": {
      "pl": "Wydatki na zbrojenia powinny być priorytetem budżetowym państwa.",
      "en": "National defense and weapon procurement should be the government's top budget priority.",
      "es": "El gasto en defensa y armamento debe ser la primera prioridad del presupuesto estatal.",
      "de": "Verteidigungsausgaben und Waffenbeschaffung sollten oberste Haushaltspriorität haben.",
      "ru": "Расходы на вооружение должны быть главным приоритетом государственного бюджета.",
      "fr": "Les dépenses militaires et d'armement devraient constituer la première priorité du budget de l'État."
    }
  },
  {
    "id": 190,
    "categoryKey": "security",
    "axis": "soc",
    "multiplier": 1,
    "isQuick": false,
    "text": {
      "pl": "Docelowo granice państwowe na świecie powinny zostać otwarte dla każdego człowieka.",
      "en": "Long term, all international borders should be opened to free settlement for all humanity.",
      "es": "A largo plazo, las fronteras nacionales del mundo deben abrirse libremente para todos los seres humanos.",
      "de": "Langfristig sollten die Staatsgrenzen weltweit für jeden Menschen frei passierbar sein.",
      "ru": "В будущем границы между странами должны быть открыты для свободного перемещения каждого человека.",
      "fr": "À terme, les frontières nationales dans le monde devraient être ouvertes à tout être humain."
    }
  },
  {
    "id": 191,
    "categoryKey": "security",
    "axis": "soc",
    "multiplier": -1,
    "isQuick": false,
    "text": {
      "pl": "Interes narodowy musi zawsze stać wyżej niż międzynarodowe traktaty.",
      "en": "National sovereignty and domestic interests must always override international treaties.",
      "es": "El interés supremo de la nación debe anteponerse siempre a los tratados internacionales.",
      "de": "Nationale Interessen müssen stets über internationalen Abkommen stehen.",
      "ru": "Национальные интересы страны всегда должны стоять выше международных договоров.",
      "fr": "L'intérêt supérieur de la nation doit toujours l'emporter sur les traités internationaux."
    }
  },
  {
    "id": 192,
    "categoryKey": "security",
    "axis": "soc",
    "multiplier": 1,
    "isQuick": false,
    "text": {
      "pl": "Bogate kraje powinny bezwarunkowo umorzyć długi najbiedniejszym państwom świata.",
      "en": "Wealthy nations should unconditionally cancel foreign debts owed by developing countries.",
      "es": "Los países ricos deben perdonar incondicionalmente la deuda externa a las naciones más empobrecidas.",
      "de": "Reiche Länder sollten den ärmsten Staaten der Erde deren Schulden bedingungslos erlassen.",
      "ru": "Богатые страны должны списать внешние долги беднейшим государствам мира.",
      "fr": "Les pays riches devraient effacer sans condition les dettes des nations les plus pauvres."
    }
  },
  {
    "id": 193,
    "categoryKey": "security",
    "axis": "soc",
    "multiplier": -1,
    "isQuick": false,
    "text": {
      "pl": "Państwo ma prawo uderzyć militarnie pierwsze w obliczu bezpośredniego zagrożenia wojną.",
      "en": "A nation has the right to launch a preemptive military strike when facing imminent invasion.",
      "es": "Un país tiene derecho a lanzar un ataque militar preventivo ante una amenaza inminente de agresión.",
      "de": "Ein Staat darf bei unmittelbarer Kriegsgefahr einen militärischen Erstschlag ausführen.",
      "ru": "Государство имеет право нанести военный удар первым при прямой угрозе войны.",
      "fr": "Un État a le droit de frapper militairement en premier face à une menace imminente d'agression."
    }
  },
  {
    "id": 194,
    "categoryKey": "security",
    "axis": "soc",
    "multiplier": 1,
    "isQuick": false,
    "text": {
      "pl": "Wszystkie mocarstwa powinny zlikwidować swoje arsenały broni jądrowej.",
      "en": "All nuclear-armed world powers should dismantle and abolish their nuclear warhead stockpiles.",
      "es": "Todas las potencias mundiales deben desmantelar por completo sus arsenales nucleares.",
      "de": "Sämtliche Atommächte sollten ihre Kernwaffenarsenale restlos vernichten.",
      "ru": "Все мировые державы должны уничтожить свои запасы ядерного оружия.",
      "fr": "Toutes les puissances mondiales devraient démanteler l'ensemble de leurs arsenaux nucléaires."
    }
  },
  {
    "id": 195,
    "categoryKey": "security",
    "axis": "soc",
    "multiplier": -1,
    "isQuick": false,
    "text": {
      "pl": "Każdy dorosły obywatel powinien przejść obowiązkowe szkolenie strzeleckie.",
      "en": "Every adult citizen should undergo compulsory civilian firearm and defense training.",
      "es": "Todo ciudadano adulto debe superar una instrucción básica obligatoria de tiro y defensa.",
      "de": "Jeder volljährige Bürger sollte ein verpflichtendes Schieß- und Zivilschutztraining absolvieren.",
      "ru": "Каждый взрослый гражданин должен пройти обязательное стрелковое обучение.",
      "fr": "Chaque citoyen adulte devrait suivre une formation obligatoire au tir et à la défense civile."
    }
  },
  {
    "id": 196,
    "categoryKey": "security",
    "axis": "soc",
    "multiplier": 1,
    "isQuick": false,
    "text": {
      "pl": "Neutralność i dyplomacja dają większe bezpieczeństwo niż wstępowanie w sojusze wojskowe.",
      "en": "Diplomatic neutrality provides greater security than joining foreign military alliances.",
      "es": "La neutralidad diplomática aporta más seguridad nacional que pertenecer a bloques militares.",
      "de": "Politische Neutralität und Diplomatie schaffen mehr Sicherheit als militärische Beistandspakte.",
      "ru": "Нейтралитет и дипломатия обеспечивают большую безопасность, чем вступление в военные альянсы.",
      "fr": "La neutralité diplomatique apporte plus de sécurité que l'adhésion à des alliances militaires."
    }
  },
  {
    "id": 197,
    "categoryKey": "security",
    "axis": "soc",
    "multiplier": -1,
    "isQuick": false,
    "text": {
      "pl": "Obecność obcych baz wojskowych sojuszników na naszym terytorium jest konieczna.",
      "en": "Stationing foreign allied military bases on national soil is essential for defense.",
      "es": "Disponer de bases militares aliadas permanentes en nuestro territorio es indispensable.",
      "de": "Die Stationierung von Stützpunkten verbündeter Streitkräfte im Inland ist notwendig.",
      "ru": "Присутствие военных баз союзников на нашей территории необходимо.",
      "fr": "La présence de bases militaires alliées sur notre sol national est indispensable."
    }
  },
  {
    "id": 198,
    "categoryKey": "security",
    "axis": "soc",
    "multiplier": 1,
    "isQuick": false,
    "text": {
      "pl": "Wysyłanie wojsk na misje zagraniczne poza granice kraju powinno być zakazane.",
      "en": "Deploying national armed forces on foreign combat missions abroad should be prohibited.",
      "es": "Enviar tropas nacionales a operaciones armadas fuera del país debe estar terminantemente prohibido.",
      "de": "Militäreinsätze eigener Truppen im Ausland sollten grundsätzlich untersagt sein.",
      "ru": "Отправка войск на военные операции за рубеж должна быть запрещена.",
      "fr": "Le déploiement des forces armées nationales sur des théâtres d'opérations extérieurs devrait être interdit."
    }
  },
  {
    "id": 199,
    "categoryKey": "security",
    "axis": "soc",
    "multiplier": -1,
    "isQuick": false,
    "text": {
      "pl": "Państwo powinno posiadać własną broń jądrową w celu odstraszania wrogów.",
      "en": "The nation should possess independent nuclear weapons to deter foreign adversaries.",
      "es": "El país debe contar con armas nucleares propias para disuadir a potenciales enemigos.",
      "de": "Der Staat sollte eigene Atomwaffen zur Abschreckung möglicher Angreifer besitzen.",
      "ru": "Страна должна иметь собственное ядерное оружие для сдерживания врагов.",
      "fr": "Le pays devrait disposer de sa propre force de frappe nucléaire pour dissuader les agresseurs."
    }
  },
  {
    "id": 200,
    "categoryKey": "security",
    "axis": "soc",
    "multiplier": 1,
    "isQuick": false,
    "text": {
      "pl": "Międzynarodowy handel bronią powinien zostać całkowicie zakazany.",
      "en": "International cross-border commerce in arms and military weapons should be completely banned.",
      "es": "El comercio internacional de armas bélicas debe ser totalmente prohibido en todo el mundo.",
      "de": "Der weltweite Export und Handel mit Kriegswaffen sollte ausnahmslos verboten werden.",
      "ru": "Международная торговля оружием должна быть полностью запрещена.",
      "fr": "Le commerce international et l'exportation d'armes devraient être totalement interdits."
    }
  }
];

if (typeof module !== "undefined" && module.exports) {
  module.exports = { categories, answerOptions, questions };
}
