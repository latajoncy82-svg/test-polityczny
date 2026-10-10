/**
 * BAZA 120 PYTAŃ, KATEGORII ORAZ OPCJI ODPOWIEDZI
 * Test Polityczny - Wersja Globalna 2026
 * Obsługa 4 języków: PL, EN, RU, FR
 */

const categories = {
  "economy": {
    "pl": "Gospodarka i Wolny Rynek",
    "en": "Economy & Free Market",
    "ru": "Экономика и свободный рынок",
    "fr": "Économie et libre marché"
  },
  "taxation": {
    "pl": "Podatki i Finanse Publiczne",
    "en": "Taxation & Public Finance",
    "ru": "Налоги и государственные финансы",
    "fr": "Fiscalité et finances publiques"
  },
  "labor": {
    "pl": "Praca, Płace i Związki",
    "en": "Labor, Wages & Unions",
    "ru": "Труд, зарплаты и профсоюзы",
    "fr": "Travail, salaires et syndicats"
  },
  "welfare": {
    "pl": "Usługi Społeczne i Mieszkalnictwo",
    "en": "Social Welfare & Housing",
    "ru": "Социальные услуги и жильё",
    "fr": "Services sociaux et logement"
  },
  "regulation": {
    "pl": "Prywatyzacja i Regulacje Sektorowe",
    "en": "Privatization & Industry Regulation",
    "ru": "Приватизация и госрегулирование",
    "fr": "Privatisation et régulation sectorielle"
  },
  "trade": {
    "pl": "Handel Międzynarodowy i Korporacje",
    "en": "Global Trade & Corporations",
    "ru": "Мировая торговля и корпорации",
    "fr": "Commerce international et multinationales"
  },
  "liberties": {
    "pl": "Wolności Obywatelskie i Prywatność",
    "en": "Civil Liberties & Privacy",
    "ru": "Гражданские свободы и приватность",
    "fr": "Libertés civiles et vie privée"
  },
  "tech": {
    "pl": "Technologia, AI i Prawa Cyfrowe",
    "en": "Technology, AI & Digital Rights",
    "ru": "Технологии, ИИ и цифровые права",
    "fr": "Technologie, IA et droits numériques"
  },
  "ecology": {
    "pl": "Klimat, Ekologia i Energetyka",
    "en": "Climate, Ecology & Energy",
    "ru": "Климат, экология и энергетика",
    "fr": "Climat, écologie et énergie"
  },
  "culture": {
    "pl": "Kultura, Tradycja i Religia",
    "en": "Culture, Tradition & Religion",
    "ru": "Культура, традиции и религия",
    "fr": "Culture, tradition et religion"
  },
  "society": {
    "pl": "Prawa Człowieka i Kwestie Społeczne",
    "en": "Human Rights & Social Issues",
    "ru": "Права человека и общество",
    "fr": "Droits humains et questions sociales"
  },
  "security": {
    "pl": "Bezpieczeństwo, Granice i Geopolityka",
    "en": "Security, Borders & Geopolitics",
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
      "ru": "Полностью согласен",
      "fr": "Tout à fait d'accord"
    },
    "hint": {
      "pl": "+2 pkt (silne poparcie)",
      "en": "+2 pts (strong support)",
      "ru": "+2 балла (полное согласие)",
      "fr": "+2 pts (adhésion totale)"
    },
    "badge": {
      "pl": "+2",
      "en": "+2",
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
      "ru": "Скорее согласен",
      "fr": "Plutôt d'accord"
    },
    "hint": {
      "pl": "+1 pkt (umiarkowane poparcie)",
      "en": "+1 pt (moderate support)",
      "ru": "+1 балл (умеренное согласие)",
      "fr": "+1 pt (adhésion modérée)"
    },
    "badge": {
      "pl": "+1",
      "en": "+1",
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
      "ru": "Нейтрально / Умеренно",
      "fr": "Neutre / Modéré"
    },
    "hint": {
      "pl": "0 pkt (pozycja pośrodku – wliczana do wyniku)",
      "en": "0 pts (balanced center – included in score)",
      "ru": "0 баллов (баланс по центру – учитывается в расчете)",
      "fr": "0 pt (position centriste – prise en compte)"
    },
    "badge": {
      "pl": "0",
      "en": "0",
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
      "ru": "Скорее не согласен",
      "fr": "Plutôt pas d'accord"
    },
    "hint": {
      "pl": "-1 pkt (umiarkowany sprzeciw)",
      "en": "-1 pt (moderate disagreement)",
      "ru": "-1 балл (умеренное несогласие)",
      "fr": "-1 pt (désaccord modéré)"
    },
    "badge": {
      "pl": "-1",
      "en": "-1",
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
      "ru": "Полностью не согласен",
      "fr": "Pas du tout d'accord"
    },
    "hint": {
      "pl": "-2 pkt (silny sprzeciw)",
      "en": "-2 pts (strong disagreement)",
      "ru": "-2 балла (полное несогласие)",
      "fr": "-2 pts (désaccord total)"
    },
    "badge": {
      "pl": "-2",
      "en": "-2",
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
      "ru": "Нет мнения / Безразлично",
      "fr": "Sans avis / Peu importe"
    },
    "hint": {
      "pl": "Pomiń temat (wyłączone z kalkulacji, nie rozwadnia wyniku)",
      "en": "Skip topic (excluded from score, does not dilute result)",
      "ru": "Пропустить тему (исключено из расчёта, не искажает итог)",
      "fr": "Ignorer le sujet (exclu du calcul, n'altère pas le score)"
    },
    "badge": {
      "pl": "—",
      "en": "—",
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
      "pl": "Wolny rynek, bez zbędnych nakazów i biurokracji, najlepiej buduje bogactwo kraju.",
      "en": "A free market, free from unnecessary regulations and red tape, is the best way to build national wealth.",
      "ru": "Свободный рынок без лишних запретов и бюрократии лучше всего создает богатство страны.",
      "fr": "Le libre marché, débarrassé des lourdeurs bureaucratiques et réglementaires, est le meilleur moyen d'enrichir une nation."
    }
  },
  {
    "id": 2,
    "categoryKey": "economy",
    "axis": "econ",
    "multiplier": -1,
    "isQuick": true,
    "text": {
      "pl": "Gdy ceny gwałtownie rosną, rząd powinien odgórnie ustalać maksymalne ceny na chleb, żywność i prąd.",
      "en": "When prices soar, the government should set strict price caps on essential foods and energy.",
      "ru": "Когда цены резко растут, правительство должно устанавливать потолок цен на базовую еду и электричество.",
      "fr": "Quand les prix flambent, le gouvernement devrait plafonner les prix de la nourriture de base et de l'énergie."
    }
  },
  {
    "id": 3,
    "categoryKey": "economy",
    "axis": "econ",
    "multiplier": 1,
    "isQuick": true,
    "text": {
      "pl": "Upadek nierentownych firm to naturalna kolej rzeczy – państwo nie powinno ratować ich za pieniądze podatników.",
      "en": "The collapse of failing businesses is part of healthy capitalism; the state shouldn't bail them out with public money.",
      "ru": "Банкротство убыточных компаний естественно для рынка — государство не должно спасать их за счет налогоплательщиков.",
      "fr": "La faillite des entreprises non rentables est naturelle ; l'État ne devrait pas les sauver avec l'argent public."
    }
  },
  {
    "id": 4,
    "categoryKey": "economy",
    "axis": "econ",
    "multiplier": -1,
    "isQuick": false,
    "text": {
      "pl": "Państwo powinno posiadać większość udziałów w kluczowych gałęziach przemysłu, kopalniach i energetyce.",
      "en": "The state should own majority shares in strategic industries, mining, and power generation.",
      "ru": "Государство должно владеть контрольным пакетом акций в стратегических заводах, добыче ресурсов и энергетике.",
      "fr": "L'État devrait posséder la majorité des parts dans les industries stratégiques, l'énergie et les matières premières."
    }
  },
  {
    "id": 5,
    "categoryKey": "economy",
    "axis": "econ",
    "multiplier": 1,
    "isQuick": false,
    "text": {
      "pl": "Właściciele sklepów powinni mieć pełną swobodę otwierania lokali w dowolne dni, w tym w niedziele i święta.",
      "en": "Shop owners should have complete freedom to open on any day, including Sundays and holidays.",
      "ru": "Владельцы магазинов должны сами решать, когда работать, включая воскресенья и праздники.",
      "fr": "Les commerçants devraient être totalement libres d'ouvrir quand ils le souhaitent, y compris le dimanche et les jours fériés."
    }
  },
  {
    "id": 6,
    "categoryKey": "economy",
    "axis": "econ",
    "multiplier": -1,
    "isQuick": false,
    "text": {
      "pl": "Rozwój gospodarki powinien być planowany i koordynowany przez państwo, a nie zostawiany samemu rynkowi.",
      "en": "Economic development should be guided and coordinated by the state rather than left solely to market forces.",
      "ru": "Развитие экономики должно планироваться и направляться государством, а не отдаваться на волю рынка.",
      "fr": "Le développement économique devrait être planifié par l'État plutôt que laissé aux seules lois du marché."
    }
  },
  {
    "id": 7,
    "categoryKey": "economy",
    "axis": "econ",
    "multiplier": 1,
    "isQuick": false,
    "text": {
      "pl": "Prywatyzacja kolei i linii lotniczych prowadzi do lepszej obsługi i tańszych biletów dla pasażerów.",
      "en": "Privatizing railways and airlines leads to better customer service and cheaper tickets.",
      "ru": "Приватизация железных дорог и авиакомпаний ведет к лучшему сервису и более дешевым билетам.",
      "fr": "La privatisation des trains et des compagnies aériennes améliore le service et fait baisser les prix."
    }
  },
  {
    "id": 8,
    "categoryKey": "economy",
    "axis": "econ",
    "multiplier": -1,
    "isQuick": false,
    "text": {
      "pl": "Zyski wielkich firm powinny schodzić na dalszy plan, gdy w grę wchodzi dobro pracowników i lokalnych mieszkańców.",
      "en": "Corporate profits should take a backseat whenever the well-being of workers and local communities is at stake.",
      "ru": "Прибыли крупных корпораций должны уступать место благополучию людей и местных сообществ.",
      "fr": "Les profits des grandes entreprises doivent passer après le bien-être des salariés et des citoyens locaux."
    }
  },
  {
    "id": 9,
    "categoryKey": "economy",
    "axis": "econ",
    "multiplier": 1,
    "isQuick": false,
    "text": {
      "pl": "Rządowe dopłaty dla wybranych firm niszczą uczciwą konkurencję i marnują pieniądze podatników.",
      "en": "Government subsidies to favored businesses distort fair competition and waste taxpayers' money.",
      "ru": "Государственные субсидии избранным компаниям убивают честную конкуренцию и транжирят бюджет.",
      "fr": "Les subventions publiques accordées à certaines entreprises faussent la concurrence et gaspillent l'argent public."
    }
  },
  {
    "id": 10,
    "categoryKey": "economy",
    "axis": "econ",
    "multiplier": -1,
    "isQuick": false,
    "text": {
      "pl": "Państwo powinno wspierać firmy należące do pracowników i przez nich zarządzane, zamiast tradycyjnych korporacji.",
      "en": "The state should support worker-owned cooperatives and democratic workplaces over top-down corporations.",
      "ru": "Государство должно поддерживать кооперативы, принадлежащие работникам, а не традиционные корпорации.",
      "fr": "L'État devrait soutenir les coopératives autogérées par leurs salariés plutôt que les grandes entreprises hiérarchiques."
    }
  },
  {
    "id": 11,
    "categoryKey": "taxation",
    "axis": "econ",
    "multiplier": 1,
    "isQuick": true,
    "text": {
      "pl": "Wszyscy powinni płacić dokładnie taki sam procent podatku (podatek liniowy), bez względu na to, ile zarabiają.",
      "en": "Everyone should pay the exact same flat tax percentage, regardless of how much income they earn.",
      "ru": "Все должны платить одинаковый процент подоходного налога (плоская шкала), независимо от дохода.",
      "fr": "Tout le monde devrait payer le même pourcentage d'impôt (impôt à taux unique), peu importe ses revenus."
    }
  },
  {
    "id": 12,
    "categoryKey": "taxation",
    "axis": "econ",
    "multiplier": -1,
    "isQuick": true,
    "text": {
      "pl": "Miliarderzy i wielkie korporacje powinni płacić wysoki podatek od majątku, by zmniejszać przepaść między bogatymi a biednymi.",
      "en": "Billionaires and giant corporations should pay a steep wealth tax to reduce the gap between rich and poor.",
      "ru": "Миллиардеры и гигантские корпорации должны платить высокий налог на богатство, чтобы сократить неравенство.",
      "fr": "Les milliardaires et multinationales devraient payer un impôt élevé sur la fortune pour réduire les inégalités."
    }
  },
  {
    "id": 13,
    "categoryKey": "taxation",
    "axis": "econ",
    "multiplier": 1,
    "isQuick": false,
    "text": {
      "pl": "Podatek od spadków i darowizn dla najbliższej rodziny powinien zostać całkowicie zlikwidowany.",
      "en": "Inheritance and gift taxes passed down to immediate family should be completely abolished.",
      "ru": "Налог на наследство и дарение внутри семьи должен быть полностью отменен.",
      "fr": "Les droits de succession et donations transmises aux proches devraient être totalement supprimés."
    }
  },
  {
    "id": 14,
    "categoryKey": "taxation",
    "axis": "econ",
    "multiplier": -1,
    "isQuick": false,
    "text": {
      "pl": "Szybka spekulacja na giełdzie i rynkach finansowych powinna być obłożona specjalnym podatkiem.",
      "en": "Short-term stock speculation and high-frequency financial trades should be subject to a special tax.",
      "ru": "Спекулятивные биржевые сделки и финансовые спекуляции должны облагаться отдельным налогом.",
      "fr": "La spéculation boursière à court terme devrait être soumise à une taxe financière spécifique."
    }
  },
  {
    "id": 15,
    "categoryKey": "taxation",
    "axis": "econ",
    "multiplier": 1,
    "isQuick": true,
    "text": {
      "pl": "Niskie podatki dla przedsiębiorstw to najlepszy sposób, by przyciągnąć do kraju nowoczesne fabryki i technologie.",
      "en": "Low corporate taxes are the most effective magnet for attracting modern factories and tech investment.",
      "ru": "Низкие налоги на бизнес — лучший способ привлечь передовые фабрики и зарубежные технологии.",
      "fr": "Des impôts bas sur les sociétés sont le meilleur moyen d'attirer des usines modernes et des investissements."
    }
  },
  {
    "id": 16,
    "categoryKey": "taxation",
    "axis": "econ",
    "multiplier": -1,
    "isQuick": false,
    "text": {
      "pl": "Ukrywanie dochodów w rajach podatkowych powinno być surowo karane jak przestępstwo przeciwko państwu.",
      "en": "Hiding profits in offshore tax havens should be severely penalized as an offense against the state.",
      "ru": "Вывод денег в офшорные налоговые гавани должен строго наказываться как преступление против государства.",
      "fr": "Dissimuler ses bénéfices dans des paradis fiscaux devrait être sévèrement sanctionné comme une faute contre l'État."
    }
  },
  {
    "id": 17,
    "categoryKey": "taxation",
    "axis": "econ",
    "multiplier": 1,
    "isQuick": false,
    "text": {
      "pl": "Rywalizacja między krajami na niższe podatki jest dobra, bo powstrzymuje rządy przed rozrzutnością.",
      "en": "Tax competition between nations is beneficial because it reins in reckless government spending.",
      "ru": "Налоговая конкуренция между странами полезна, так как заставляет власти урезать расточительные траты.",
      "fr": "La concurrence fiscale entre pays est une bonne chose car elle force les gouvernements à limiter leurs dépenses."
    }
  },
  {
    "id": 18,
    "categoryKey": "taxation",
    "axis": "econ",
    "multiplier": -1,
    "isQuick": false,
    "text": {
      "pl": "Wszystkie kraje powinny ustalić wspólny minimalny podatek dla korporacji, by nie uciekały z płaceniem.",
      "en": "All countries should enforce a unified minimum corporate tax so multinationals cannot dodge taxes.",
      "ru": "Все страны должны ввести единый минимальный налог на прибыль корпораций, чтобы пресечь уход от налогов.",
      "fr": "Tous les pays devraient instaurer un impôt minimum commun sur les sociétés pour empêcher l'évasion fiscale."
    }
  },
  {
    "id": 19,
    "categoryKey": "taxation",
    "axis": "econ",
    "multiplier": 1,
    "isQuick": false,
    "text": {
      "pl": "Podatek od zysków kapitałowych (np. z giełdy i kryptowalut) powinien zostać zniesiony, by zachęcać ludzi do inwestowania.",
      "en": "Capital gains tax (e.g. from stocks and crypto) should be abolished to encourage citizens to invest.",
      "ru": "Налог на прирост капитала (например, с акций и криптовалют) должен быть отменен для поощрения инвестиций.",
      "fr": "L'impôt sur les plus-values (actions, cryptomonnaies) devrait être supprimé pour encourager les investissements."
    }
  },
  {
    "id": 20,
    "categoryKey": "taxation",
    "axis": "econ",
    "multiplier": -1,
    "isQuick": false,
    "text": {
      "pl": "Wprowadzenie progresywnej skali podatkowej, w której najbogatsi oddają ponad połowę swoich najwyższych dochodów, jest sprawiedliwe.",
      "en": "A progressive tax scale where the wealthiest pay over half of their top income bracket in taxes is fair and necessary.",
      "ru": "Прогрессивная шкала налогов, при которой сверхбогатые отдают свыше половины своих высших доходов, справедлива.",
      "fr": "Un barème fiscal fortement progressif, où les plus fortunés versent plus de la moitié de leurs revenus supérieurs, est juste."
    }
  },
  {
    "id": 21,
    "categoryKey": "labor",
    "axis": "econ",
    "multiplier": 1,
    "isQuick": false,
    "text": {
      "pl": "Płaca minimalna powinna zostać zniesiona – stawki powinny zależeć wyłącznie od swobodnej umowy pracownika z pracodawcą.",
      "en": "The statutory minimum wage should be scrapped; pay should be decided purely by voluntary worker-employer agreements.",
      "ru": "Минимальный размер оплаты труда нужно отменить — зарплата должна определяться договоренностью работника и нанимателя.",
      "fr": "Le salaire minimum devrait être aboli ; la rémunération doit relever du libre accord entre salarié et employeur."
    }
  },
  {
    "id": 22,
    "categoryKey": "labor",
    "axis": "econ",
    "multiplier": -1,
    "isQuick": false,
    "text": {
      "pl": "Związki zawodowe powinny mieć prawo zablokować masowe zwolnienia i zamykanie fabryk przez zarząd.",
      "en": "Trade unions should hold legal power to veto mass layoffs and factory shutdowns.",
      "ru": "Профсоюзы должны иметь право вето на массовые увольнения и закрытие фабрик руководством.",
      "fr": "Les syndicats devraient avoir le pouvoir d'interdire les licenciements économiques massifs et les fermetures d'usines."
    }
  },
  {
    "id": 23,
    "categoryKey": "labor",
    "axis": "econ",
    "multiplier": 1,
    "isQuick": true,
    "text": {
      "pl": "Elastyczne formy pracy (zlecenia, B2B) dają ludziom więcej swobody i korzyści niż sztywny kodeks pracy.",
      "en": "Flexible contracting and freelance gigs offer more opportunities and freedom than rigid labor codes.",
      "ru": "Гибкая занятость и контракты B2B дают людям больше свободы и дохода, чем жесткий трудовой кодекс.",
      "fr": "Le travail indépendant et les contrats flexibles offrent plus de liberté et d'opportunités qu'un code du travail rigide."
    }
  },
  {
    "id": 24,
    "categoryKey": "labor",
    "axis": "econ",
    "multiplier": -1,
    "isQuick": true,
    "text": {
      "pl": "Czas pracy powinien zostać skrócony (np. do 4 dni lub 35 godzin tygodniowo) bez obniżania pensji.",
      "en": "The standard workweek should be reduced (e.g., to 4 days or 35 hours) with no reduction in pay.",
      "ru": "Рабочую неделю следует сократить (до 4 дней или 35 часов) с сохранением полной зарплаты.",
      "fr": "Le temps de travail devrait être réduit (à 4 jours ou 35 heures par semaine) sans aucune baisse de salaire."
    }
  },
  {
    "id": 25,
    "categoryKey": "labor",
    "axis": "econ",
    "multiplier": 1,
    "isQuick": false,
    "text": {
      "pl": "Przedsiębiorca powinien móc zwolnić pracownika w dowolnym momencie bez skomplikowanych procedur i tłumaczeń.",
      "en": "Employers should be allowed to dismiss employees at will without cumbersome administrative procedures.",
      "ru": "Работодатель должен иметь право быстро уволить сотрудника без сложных бюрократических процедур.",
      "fr": "Un employeur devrait pouvoir licencier un salarié à tout moment sans démarches excessives ni justifications."
    }
  },
  {
    "id": 26,
    "categoryKey": "labor",
    "axis": "econ",
    "multiplier": -1,
    "isQuick": false,
    "text": {
      "pl": "Pracownicy powinni mieć gwarantowane miejsca we władzach dużych firm, by współdecydować o ich przyszłości.",
      "en": "Workers should have guaranteed seats on corporate boards to take part in major company decisions.",
      "ru": "Работникам должны гарантироваться места в советах директоров крупных компаний для участия в принятии решений.",
      "fr": "Les salariés devraient disposer de sièges garantis aux conseils d'administration pour co-décider de l'avenir de l'entreprise."
    }
  },
  {
    "id": 27,
    "categoryKey": "labor",
    "axis": "econ",
    "multiplier": 1,
    "isQuick": false,
    "text": {
      "pl": "Strajki paraliżujące transport publiczny czy szpitale powinny być prawnie zabronione.",
      "en": "Strikes that bring public transit or healthcare to a standstill should be banned by law.",
      "ru": "Забастовки, парализующие общественный транспорт или больницы, должны быть законодательно запрещены.",
      "fr": "Les grèves qui paralysent les transports en commun ou les hôpitaux devraient être interdites par la loi."
    }
  },
  {
    "id": 28,
    "categoryKey": "labor",
    "axis": "econ",
    "multiplier": -1,
    "isQuick": false,
    "text": {
      "pl": "Firmy zastępujące ludzi sztuczną inteligencją i robotami powinny płacić podatek na fundusz dla zwalnianych pracowników.",
      "en": "Companies replacing workers with AI and automation should pay a robot tax to fund displaced workers.",
      "ru": "Компании, заменяющие людей роботами и ИИ, должны платить налог в фонд поддержки увольняемых работников.",
      "fr": "Les entreprises remplaçant des humains par des robots ou l'IA devraient payer une taxe dédiée au soutien des salariés."
    }
  },
  {
    "id": 29,
    "categoryKey": "labor",
    "axis": "econ",
    "multiplier": 1,
    "isQuick": false,
    "text": {
      "pl": "Zastępowanie strajkujących pracowników nowymi pracownikami powinno być w pełni dozwolone prawem.",
      "en": "Employers should have the full legal right to hire permanent replacement workers during strikes.",
      "ru": "Работодатели должны иметь полное законное право нанимать временных работников во время забастовок.",
      "fr": "Les employeurs devraient avoir le droit légal d'embaucher des remplaçants pour assurer l'activité en cas de grève."
    }
  },
  {
    "id": 30,
    "categoryKey": "labor",
    "axis": "econ",
    "multiplier": -1,
    "isQuick": false,
    "text": {
      "pl": "Pracownicy platform cyfrowych (np. kurierzy i kierowcy z aplikacji) powinni mieć status pracowników z prawem do urlopu i chorobowego.",
      "en": "Gig economy workers (app couriers, ride-hailing drivers) should legally be classified as employees with paid leave and sick pay.",
      "ru": "Работники цифровых платформ (курьеры, водители такси) должны считаться штатными сотрудниками с оплачиваемым отпуском и больничным.",
      "fr": "Les travailleurs des plateformes numériques (coursiers, chauffeurs VTC) devraient avoir le statut de salariés avec congés payés et maladie."
    }
  },
  {
    "id": 31,
    "categoryKey": "welfare",
    "axis": "econ",
    "multiplier": 1,
    "isQuick": false,
    "text": {
      "pl": "Prywatne oszczędności i indywidualne konta emerytalne działają znacznie sprawniej niż państwowy system emerytalny.",
      "en": "Private retirement accounts and personal investments work much better than state pension schemes.",
      "ru": "Частные пенсионные счета и личные накопления работают куда надежнее государственной пенсионной системы.",
      "fr": "Les comptes de retraite privés et l'épargne individuelle sont bien plus efficaces que les régimes publics."
    }
  },
  {
    "id": 32,
    "categoryKey": "welfare",
    "axis": "econ",
    "multiplier": -1,
    "isQuick": false,
    "text": {
      "pl": "Każdy dorosły obywatel powinien otrzymywać od państwa stałą comiesięczną wypłatę bez żadnych warunków (Dochód Podstawowy).",
      "en": "Every adult citizen should receive an unconditional Universal Basic Income (UBI) funded by taxes.",
      "ru": "Каждый взрослый гражданин должен получать от государства базовый безусловный доход каждый месяц.",
      "fr": "Chaque citoyen adulte devrait recevoir un revenu universel de base garanti et inconditionnel."
    }
  },
  {
    "id": 33,
    "categoryKey": "welfare",
    "axis": "econ",
    "multiplier": 1,
    "isQuick": true,
    "text": {
      "pl": "Ceny najmu mieszkań powinien ustalać wolny rynek – urzędowe zamrażanie czynszów tylko pogłębia brak lokali.",
      "en": "Rental housing prices should be set purely by the free market; rent control only worsens housing shortages.",
      "ru": "Цены на аренду жилья должен регулировать рынок — ограничение стоимости аренды властями лишь создает дефицит.",
      "fr": "Les loyers doivent être fixés par le libre marché ; l'encadrement des loyers ne fait qu'aggraver la crise du logement."
    }
  },
  {
    "id": 34,
    "categoryKey": "welfare",
    "axis": "econ",
    "multiplier": -1,
    "isQuick": true,
    "text": {
      "pl": "Dach nad głową to podstawowe prawo człowieka – państwo i samorządy powinny budować dostępne mieszkania na tani wynajem.",
      "en": "Housing is a human right; governments should build affordable municipal rental housing on a large scale.",
      "ru": "Жилье — это базовое право человека: государство должно массово строить доступные квартиры для аренды.",
      "fr": "Le logement est un droit fondamental ; l'État et les communes doivent bâtir massivement des logements sociaux abordables."
    }
  },
  {
    "id": 35,
    "categoryKey": "welfare",
    "axis": "econ",
    "multiplier": 1,
    "isQuick": false,
    "text": {
      "pl": "Rozdawanie zasiłków socjalnych bez obowiązku szukania pracy rozleniwia ludzi i uzależnia ich od pomocy państwa.",
      "en": "Handing out welfare benefits without requiring recipients to seek work breeds complacency and dependency.",
      "ru": "Раздача пособий без требования искать работу отбивает желание трудиться и делает людей зависимыми от государства.",
      "fr": "Verser des aides sociales sans exiger de recherche d'emploi incite à l'inaction et crée une dépendance."
    }
  },
  {
    "id": 36,
    "categoryKey": "welfare",
    "axis": "econ",
    "multiplier": -1,
    "isQuick": true,
    "text": {
      "pl": "Leczenie szpitalne, leki ratujące życie i opieka nad seniorami powinny być w 100% darmowe dla każdego obywatela.",
      "en": "Hospital care, life-saving medicines, and elderly care should be completely free for every citizen.",
      "ru": "Лечение в больницах, жизненно важные лекарства и уход за пожилыми людьми должны быть полностью бесплатными для всех.",
      "fr": "L'hôpital, les médicaments essentiels et la prise en charge des personnes âgées devraient être gratuits pour tous."
    }
  },
  {
    "id": 37,
    "categoryKey": "welfare",
    "axis": "econ",
    "multiplier": -1,
    "isQuick": false,
    "text": {
      "pl": "Wielkie fundusze inwestycyjne wykupujące całe osiedla i trzymające puste mieszkania powinny płacić bardzo wysoki podatek karny.",
      "en": "Institutional funds hoarding residential properties and leaving them vacant should face steep penalty taxes.",
      "ru": "Инвестфонды, скупающие целые кварталы и держащие квартиры пустыми, должны платить огромный штрафной налог.",
      "fr": "Les fonds d'investissement achetant des immeubles pour les laisser vides devraient être lourdement taxés."
    }
  },
  {
    "id": 38,
    "categoryKey": "welfare",
    "axis": "econ",
    "multiplier": 1,
    "isQuick": false,
    "text": {
      "pl": "Zasiłki i pomoc socjalna powinny przysługiwać tylko tym, którzy wcześniej pracowali i płacili podatki.",
      "en": "Welfare benefits should only be granted to individuals who have actively worked and contributed taxes.",
      "ru": "Социальные пособия должны полагаться только тем, кто реально работал и платил налоги в казну.",
      "fr": "Les prestations sociales ne devraient être versées qu'à ceux qui ont préalablement travaillé et cotisé."
    }
  },
  {
    "id": 39,
    "categoryKey": "welfare",
    "axis": "econ",
    "multiplier": 1,
    "isQuick": false,
    "text": {
      "pl": "Ubezpieczenia zdrowotne i szpitale powinny działać głównie na zasadach rynkowych, dając ludziom wybór konkurujących pakietów medycznych.",
      "en": "Healthcare insurance and hospitals should operate mainly on market principles, allowing people to choose competing medical plans.",
      "ru": "Медицинское страхование и больницы должны работать в основном на рыночной основе, давая гражданам выбор страховых программ.",
      "fr": "L'assurance maladie et les hôpitaux devraient fonctionner selon les règles du marché en laissant le choix des forfaits de soins."
    }
  },
  {
    "id": 40,
    "categoryKey": "welfare",
    "axis": "econ",
    "multiplier": -1,
    "isQuick": false,
    "text": {
      "pl": "Państwo powinno gwarantować darmowe żłobki, przedszkola oraz pożywne obiady w szkołach dla każdego dziecka.",
      "en": "The state should guarantee free daycare, preschool, and nutritious school lunches for every child.",
      "ru": "Государство должно гарантировать бесплатные ясли, детские сады и горячее школьное питание для каждого ребенка.",
      "fr": "L'État devrait garantir des crèches, des écoles maternelles et des repas scolaires gratuits pour chaque enfant."
    }
  },
  {
    "id": 41,
    "categoryKey": "regulation",
    "axis": "econ",
    "multiplier": 1,
    "isQuick": true,
    "text": {
      "pl": "Dostawy prądu i sieci przesyłowe powinny być otwarte na prywatną konkurencję, zamiast państwowego monopolu.",
      "en": "Electricity supply and power grids should be opened to private market competition rather than state monopolies.",
      "ru": "Энергосети и поставки электричества должны быть открыты для частного бизнеса вместо государственной монополии.",
      "fr": "La production et la distribution d'électricité devraient être ouvertes à la concurrence plutôt que gérées par un monopole public."
    }
  },
  {
    "id": 42,
    "categoryKey": "regulation",
    "axis": "econ",
    "multiplier": -1,
    "isQuick": true,
    "text": {
      "pl": "Lasy, woda pitna i surowce naturalne muszą być wyłączną własnością państwa i nie wolno ich prywatyzować.",
      "en": "Forests, clean water, and mineral resources must remain the exclusive property of the public and never be privatized.",
      "ru": "Леса, запасы питьевой воды и недра должны оставаться исключительной госсобственностью без права приватизации.",
      "fr": "Les forêts, l'eau potable et les ressources naturelles doivent rester propriété publique inaliénable."
    }
  },
  {
    "id": 43,
    "categoryKey": "regulation",
    "axis": "econ",
    "multiplier": 1,
    "isQuick": false,
    "text": {
      "pl": "Większość licencji i pozwoleń zawodowych to zbędna biurokracja, która tylko blokuje ludziom wejście do zawodu.",
      "en": "Most professional licensing requirements are bureaucratic barriers designed to protect incumbents from fresh competition.",
      "ru": "Большинство лицензий и профессиональных разрешений — ненужная бюрократия, мешающая новичкам войти в профессию.",
      "fr": "La plupart des licences professionnelles et agréments ne sont que des freins bureaucratiques bloquant les jeunes actifs."
    }
  },
  {
    "id": 44,
    "categoryKey": "regulation",
    "axis": "econ",
    "multiplier": -1,
    "isQuick": false,
    "text": {
      "pl": "Pensje prezesów wielkich spółek nie powinny przekraczać np. dwudziestokrotności wypłaty zwykłego pracownika.",
      "en": "CEO pay in major corporations should not exceed a set ratio, such as 20 times an ordinary worker's wage.",
      "ru": "Зарплата главы корпорации не должна превышать заработок рядового сотрудника более чем в 20 раз.",
      "fr": "La rémunération des dirigeants ne devrait pas dépasser par exemple vingt fois le salaire moyen des employés."
    }
  },
  {
    "id": 45,
    "categoryKey": "regulation",
    "axis": "econ",
    "multiplier": 1,
    "isQuick": false,
    "text": {
      "pl": "Prywatne firmy kurierskie i paczkomaty działają znacznie sprawniej niż państwowa poczta.",
      "en": "Private parcel couriers and automated lockers serve customers far more efficiently than state postal operators.",
      "ru": "Частные курьерские службы и постаматы работают намного удобнее и быстрее государственной почты.",
      "fr": "Les livreurs privés et casiers automatiques fonctionnent bien plus efficacement que les services postaux publics."
    }
  },
  {
    "id": 46,
    "categoryKey": "regulation",
    "axis": "econ",
    "multiplier": -1,
    "isQuick": false,
    "text": {
      "pl": "Państwo powinno nakładać dodatkowe podatki na wielkie markety i sieci handlowe, aby chronić małe lokalne sklepy osiedlowe.",
      "en": "The state should levy extra taxes on giant retail supermarket chains to shield small local mom-and-pop stores.",
      "ru": "Государство должно облагать повышенными налогами крупные торговые сети, защищая малые магазины у дома.",
      "fr": "L'État devrait surtaxer les hypermarchés géants pour sauvegarder les petits commerces de proximité."
    }
  },
  {
    "id": 47,
    "categoryKey": "regulation",
    "axis": "econ",
    "multiplier": 1,
    "isQuick": false,
    "text": {
      "pl": "Aplikacje przewozowe typu Uber i likwidacja sztucznych licencji taksówkarskich to duża korzyść dla pasażerów.",
      "en": "Ride-hailing apps like Uber and eliminating artificial taxi license barriers bring massive benefits to riders.",
      "ru": "Сервисы такси вроде Uber и отказ от бюрократических лицензий таксистов принесли огромную пользу пассажирам.",
      "fr": "Les applications VTC comme Uber et l'ouverture des licences de taxi profitent grandement aux usagers."
    }
  },
  {
    "id": 48,
    "categoryKey": "regulation",
    "axis": "econ",
    "multiplier": -1,
    "isQuick": false,
    "text": {
      "pl": "Banki zarabiają za dużo na marżach i odsetkach kredytów – państwo powinno odgórnie ograniczyć ich zyski.",
      "en": "Commercial banks earn excessive profits on loan margins and fees; the state should impose caps on banking margins.",
      "ru": "Банки наживаются на огромных процентах по кредитам — государство должно жестко ограничить их прибыль.",
      "fr": "Les banques font trop de profits sur les taux d'intérêt et frais ; l'État devrait plafonner leurs marges."
    }
  },
  {
    "id": 49,
    "categoryKey": "regulation",
    "axis": "econ",
    "multiplier": 1,
    "isQuick": false,
    "text": {
      "pl": "Prywatne firmy budowlane i deweloperzy powinni mieć znacznie prostszą ścieżkę uzyskiwania pozwoleń na budowę mieszkań.",
      "en": "Private developers should face far fewer zoning restrictions and red tape when building new homes.",
      "ru": "Строительные компании должны получать разрешения на строительство жилья быстрее и без лишних бюрократических барьеров.",
      "fr": "Les promoteurs privés devraient faire face à beaucoup moins de contraintes d'urbanisme pour construire de nouveaux logements."
    }
  },
  {
    "id": 50,
    "categoryKey": "regulation",
    "axis": "econ",
    "multiplier": -1,
    "isQuick": false,
    "text": {
      "pl": "Reklamy niezdrowej żywności, słodyczy i alkoholu skierowane do młodzieży powinny być całkowicie zakazane przez państwo.",
      "en": "State regulators should strictly ban junk food, alcohol, and gambling advertising targeted at minors.",
      "ru": "Реклама вредной еды, алкоголя и азартных игр, нацеленная на молодежь, должна быть строго запрещена государством.",
      "fr": "L'État devrait interdire totalement la publicité pour la malbouffe, l'alcool et les jeux de hasard auprès des jeunes."
    }
  },
  {
    "id": 51,
    "categoryKey": "trade",
    "axis": "econ",
    "multiplier": 1,
    "isQuick": true,
    "text": {
      "pl": "Brak barier celnych i swobodny handel z całym światem przynosi korzyści wszystkim narodom.",
      "en": "Eliminating customs barriers and promoting open trade globally creates prosperity for all nations.",
      "ru": "Свободная торговля без таможенных барьеров и пошлин несет процветание всем народам мира.",
      "fr": "La suppression des droits de douane et le libre-échange international enrichissent tous les peuples."
    }
  },
  {
    "id": 52,
    "categoryKey": "trade",
    "axis": "econ",
    "multiplier": -1,
    "isQuick": true,
    "text": {
      "pl": "Wysokie cła na towary z zagranicy są konieczne, by chronić nasze fabryki i rolników przed tańszą konkurencją.",
      "en": "Protective import tariffs are indispensable to defend domestic manufacturers and farmers from cheap foreign competition.",
      "ru": "Высокие пошлины на импорт необходимы для защиты отечественных заводов и фермеров от дешевой конкуренции.",
      "fr": "Des droits de douane élevés sont nécessaires pour protéger nos usines et agriculteurs contre les importations à bas coût."
    }
  },
  {
    "id": 53,
    "categoryKey": "trade",
    "axis": "econ",
    "multiplier": 1,
    "isQuick": false,
    "text": {
      "pl": "Pieniądze i inwestycje powinny swobodnie przepływać przez granice, bez wtrącania się i kontroli rządów.",
      "en": "Capital and foreign investment should flow across national borders without governmental interference or currency controls.",
      "ru": "Капитал и инвестиции должны свободно перемещаться через границы без вмешательства и валютного контроля властей.",
      "fr": "L'argent et les investissements devraient circuler librement d'un pays à l'autre sans contrôle étatique."
    }
  },
  {
    "id": 54,
    "categoryKey": "trade",
    "axis": "econ",
    "multiplier": -1,
    "isQuick": false,
    "text": {
      "pl": "Cyfrowi giganci (Google, Meta, Apple) mają zbyt wielką władzę i państwa powinny ich przymusowo podzielić.",
      "en": "Big Tech giants (Google, Meta, Apple) hold dangerous monopoly power and governments should break them up.",
      "ru": "ИТ-гиганты (Google, Meta, Apple) получили слишком опасную власть, и государства обязаны принудительно их разделить.",
      "fr": "Les géants de la Tech ont acquis un pouvoir monopolistique dangereux et les États devraient les démanteler."
    }
  },
  {
    "id": 55,
    "categoryKey": "trade",
    "axis": "econ",
    "multiplier": 1,
    "isQuick": false,
    "text": {
      "pl": "Zagraniczne firmy inwestujące w kraju powinny mieć dokładnie takie same prawa i podatki jak firmy rodzime.",
      "en": "Foreign investors creating local jobs should enjoy the exact same rights and tax conditions as domestic firms.",
      "ru": "Зарубежные инвесторы должны иметь ровно те же права и налоги, что и отечественные предприятия.",
      "fr": "Les entreprises étrangères devraient avoir exactement les mêmes droits et impôts que les entreprises nationales."
    }
  },
  {
    "id": 56,
    "categoryKey": "trade",
    "axis": "econ",
    "multiplier": -1,
    "isQuick": false,
    "text": {
      "pl": "Produkcja leków, elektroniki i broni musi pozostać w kraju, nawet jeśli przez to te rzeczy będą droższe.",
      "en": "Manufacturing essential medicines, computer chips, and weapons must be brought home, even if it raises retail costs.",
      "ru": "Производство медикаментов, электроники и вооружений должно быть своим, даже если это сделает товары дороже.",
      "fr": "La production de médicaments, de puces et d'armements doit rester nationale, quitte à coûter plus cher."
    }
  },
  {
    "id": 57,
    "categoryKey": "trade",
    "axis": "econ",
    "multiplier": 1,
    "isQuick": false,
    "text": {
      "pl": "Globalny handel i otwarcie granic wyciągnęły setki milionów ludzi z nędzy i podniosły jakość życia na świecie.",
      "en": "Global supply chains and free trade have lifted hundreds of millions of people out of poverty worldwide.",
      "ru": "Глобальная торговля и разделение труда вытащили миллионы людей из нищеты и повысили уровень жизни на планете.",
      "fr": "Le commerce mondial et l'ouverture des frontières ont sorti des centaines de millions d'individus de la misère."
    }
  },
  {
    "id": 58,
    "categoryKey": "trade",
    "axis": "econ",
    "multiplier": -1,
    "isQuick": false,
    "text": {
      "pl": "Sztuczne podbijanie cen żywności i paliw przez spekulantów na giełdach powinno być surowo zabronione.",
      "en": "Financial market speculation on food staples and fossil fuel futures should be strictly outlawed.",
      "ru": "Спекулятивные игры на фьючерсах на зерно, нефть и продовольствие должны быть законодательно запрещены.",
      "fr": "La spéculation financière sur les denrées alimentaires et le pétrole devrait être totalement interdite."
    }
  },
  {
    "id": 59,
    "categoryKey": "trade",
    "axis": "econ",
    "multiplier": 1,
    "isQuick": false,
    "text": {
      "pl": "Swobodny import tańszych produktów rolnych i przemysłowych jest dobry dla konsumentów, bo obniża codzienne rachunki.",
      "en": "Freely importing cheaper foreign food and goods benefits consumers by keeping grocery bills down.",
      "ru": "Свободный импорт дешевых зарубежных продуктов и товаров выгоден потребителям, так как снижает повседневные расходы.",
      "fr": "L'importation libre de denrées et produits moins chers profite aux consommateurs en faisant baisser les prix."
    }
  },
  {
    "id": 60,
    "categoryKey": "trade",
    "axis": "econ",
    "multiplier": -1,
    "isQuick": false,
    "text": {
      "pl": "Kluczowa infrastruktura (porty, lotniska, sieci telekomunikacyjne) nie może być sprzedawana inwestorom z obcych państw.",
      "en": "Critical infrastructure (ports, airports, telecom networks) must be legally barred from foreign acquisition.",
      "ru": "Критическая инфраструктура (порты, аэропорты, сети связи) не должна продаваться зарубежным инвесторам.",
      "fr": "Les infrastructures vitales (ports, aéroports, télécoms) doivent être protégées de toute prise de contrôle par des investisseurs étrangers."
    }
  },
  {
    "id": 61,
    "categoryKey": "liberties",
    "axis": "soc",
    "multiplier": 1,
    "isQuick": true,
    "text": {
      "pl": "Wolność słowa powinna chronić nawet poglądy kontrowersyjne czy oburzające – państwo nie powinno nikogo za to ścigać.",
      "en": "Free speech must protect even deeply controversial or offensive viewpoints, free from government prosecution.",
      "ru": "Свобода слова должна защищать даже спорные или шокирующие мнения — власти не имеют права наказывать за них.",
      "fr": "La liberté d'expression doit protéger y compris les propos provocateurs ou choquants sans censure étatique."
    }
  },
  {
    "id": 62,
    "categoryKey": "liberties",
    "axis": "soc",
    "multiplier": -1,
    "isQuick": true,
    "text": {
      "pl": "Służby specjalne powinny mieć prawo podglądać prywatne rozmowy w internecie bez zgody sądu, jeśli chodzi o bezpieczeństwo.",
      "en": "Intelligence agencies should be allowed to monitor private online chats without warrants to safeguard national security.",
      "ru": "Спецслужбы должны иметь право читать переписку граждан в сети без ордера суда ради государственной безопасности.",
      "fr": "Les services secrets devraient pouvoir surveiller les messageries privées sans mandat judiciaire pour des raisons de sécurité."
    }
  },
  {
    "id": 63,
    "categoryKey": "liberties",
    "axis": "soc",
    "multiplier": 1,
    "isQuick": true,
    "text": {
      "pl": "Każdy dorosły i niekarany obywatel powinien mieć łatwy dostęp do broni palnej do obrony domu i rodziny.",
      "en": "Law-abiding adult citizens should have the right to own firearms to defend their homes and loved ones.",
      "ru": "Каждый взрослый законопослушный гражданин должен иметь право на владение огнестрельным оружием для защиты семьи.",
      "fr": "Tout citoyen majeur et sans casier judiciaire devrait avoir le droit de posséder une arme pour protéger son foyer."
    }
  },
  {
    "id": 64,
    "categoryKey": "liberties",
    "axis": "soc",
    "multiplier": -1,
    "isQuick": false,
    "text": {
      "pl": "Policja powinna móc bez podawania przyczyny zatrzymywać i przeszukiwać ludzi oraz auta na ulicy.",
      "en": "Police should have the legal right to stop and search pedestrians and vehicles on public streets without reasonable suspicion.",
      "ru": "Полиция должна иметь право останавливать и досматривать прохожих и машины на улице без конкретных подозрений.",
      "fr": "La police devrait pouvoir contrôler et fouiller passants et véhicules dans la rue sans soupçon préalable."
    }
  },
  {
    "id": 65,
    "categoryKey": "liberties",
    "axis": "soc",
    "multiplier": -1,
    "isQuick": false,
    "text": {
      "pl": "Kamery z automatycznym rozpoznawaniem twarzy na ulicach to dobry sposób na walkę z przestępczością.",
      "en": "Deploying facial recognition surveillance cameras in public places is a sound and welcome crime prevention tool.",
      "ru": "Камеры с распознаванием лиц в общественных местах — это отличный инструмент борьбы с криминалом.",
      "fr": "Installer des caméras à reconnaissance faciale dans l'espace public est un moyen efficace de lutter contre la délinquance."
    }
  },
  {
    "id": 66,
    "categoryKey": "liberties",
    "axis": "soc",
    "multiplier": 1,
    "isQuick": false,
    "text": {
      "pl": "Nieuleczalnie chory człowiek powinien mieć prawo do godnego zakończenia życia na własne życzenie (eutanazji).",
      "en": "Terminally ill individuals should have the legal right to end their lives with medical dignity (assisted dying).",
      "ru": "Неизлечимо больной человек должен иметь законное право уйти из жизни с достоинством (эвтаназия).",
      "fr": "Une personne en fin de vie ou atteinte d'une maladie incurable devrait avoir le droit à l'aide médicale à mourir (euthanasie)."
    }
  },
  {
    "id": 67,
    "categoryKey": "liberties",
    "axis": "soc",
    "multiplier": -1,
    "isQuick": false,
    "text": {
      "pl": "Kara śmierci powinna wrócić za najokrutniejsze morderstwa i zbrodnie.",
      "en": "Capital punishment should be reinstated for the most heinous and premeditated crimes.",
      "ru": "Смертная казнь должна быть возвращена за самые чудовищные убийства и терроризм.",
      "fr": "La peine de mort devrait être rétablie pour les crimes les plus atroces."
    }
  },
  {
    "id": 68,
    "categoryKey": "liberties",
    "axis": "soc",
    "multiplier": 1,
    "isQuick": false,
    "text": {
      "pl": "Posiadanie marihuany na własny użytek powinno być w pełni legalne i niekarane.",
      "en": "Adult possession and personal use of cannabis should be fully legalized and decriminalized.",
      "ru": "Употребление и хранение каннабиса для личных нужд должны быть полностью легализованы.",
      "fr": "La détention et la consommation de cannabis pour usage personnel devraient être légalisées."
    }
  },
  {
    "id": 69,
    "categoryKey": "liberties",
    "axis": "soc",
    "multiplier": 1,
    "isQuick": false,
    "text": {
      "pl": "Pełnoletni obywatele powinni mieć prawo do anonimowego korzystania z internetu bez wymogu potwierdzania tożsamości dowodem osobistym.",
      "en": "Adult citizens should have the right to use the internet anonymously without uploading official ID cards.",
      "ru": "Совершеннолетние граждане должны иметь право на анонимность в интернете без обязательной загрузки паспорта.",
      "fr": "Les citoyens majeurs devraient avoir le droit d'utiliser Internet de manière anonyme sans vérification obligatoire de carte d'identité."
    }
  },
  {
    "id": 70,
    "categoryKey": "liberties",
    "axis": "soc",
    "multiplier": -1,
    "isQuick": false,
    "text": {
      "pl": "Państwo powinno mieć prawo zarządzać przymusową kwarantannę i ograniczenia w poruszaniu się podczas epidemii niebezpiecznych chorób.",
      "en": "The state should have the authority to impose mandatory lockdowns and travel curbs during major disease outbreaks.",
      "ru": "Государство должно иметь право вводить обязательный карантин и ограничивать передвижения во время опасных эпидемий.",
      "fr": "L'État devrait avoir le pouvoir d'imposer des confinements et des restrictions de circulation en cas d'épidémie dangereuse."
    }
  },
  {
    "id": 71,
    "categoryKey": "tech",
    "axis": "soc",
    "multiplier": -1,
    "isQuick": false,
    "text": {
      "pl": "Rozwój sztucznej inteligencji (AI) niesie ogromne ryzyko – państwa powinny surowo kontrolować i licencjonować twórców AI.",
      "en": "The rapid advance of advanced AI poses huge dangers; governments must strictly regulate and license AI labs.",
      "ru": "Развитие сильного ИИ несет угрозу — государства обязаны жестко лицензировать и контролировать разработчиков.",
      "fr": "L'essor de l'intelligence artificielle présente de graves risques ; les États doivent réglementer strictement ses créateurs."
    }
  },
  {
    "id": 72,
    "categoryKey": "tech",
    "axis": "soc",
    "multiplier": 1,
    "isQuick": true,
    "text": {
      "pl": "Rządy nie powinny mieć prawa zmuszać twórców komunikatorów do tworzenia 'furtek' do podsłuchiwania obywateli.",
      "en": "Governments should never force messaging apps to compromise end-to-end encryption with surveillance backdoors.",
      "ru": "Власти не должны заставлять разработчиков внедрять 'бэкдоры' для взлома зашифрованных сообщений.",
      "fr": "Les gouvernements ne devraient jamais contraindre les développeurs à affaiblir le chiffrement de bout en bout."
    }
  },
  {
    "id": 73,
    "categoryKey": "tech",
    "axis": "soc",
    "multiplier": -1,
    "isQuick": true,
    "text": {
      "pl": "Tradycyjna gotówka powinna zostać wycofana i zastąpiona wyłącznie cyfrowym pieniądzem, by ukrócić szarą strefę.",
      "en": "Physical cash should be phased out in favor of central bank digital currencies to wipe out the shadow economy.",
      "ru": "Наличные деньги нужно постепенно упразднить в пользу цифровой валюты центробанка ради прозрачности.",
      "fr": "L'argent liquide physique devrait être remplacé par une monnaie numérique officielle pour éliminer la fraude."
    }
  },
  {
    "id": 74,
    "categoryKey": "tech",
    "axis": "soc",
    "multiplier": 1,
    "isQuick": false,
    "text": {
      "pl": "Kryptowaluty i finanse cyfrowe powinny rozwijać się swobodnie, bez wymogu legitymowania każdego użytkownika przez państwo.",
      "en": "Cryptocurrencies and decentralized finance should be allowed to flourish without mandatory government identity checks.",
      "ru": "Криптовалюты и децентрализованные финансы должны развиваться свободно, без принудительной паспортизации.",
      "fr": "Les cryptomonnaies et la finance décentralisée devraient pouvoir prospérer sans contrôle d'identité étatique obligatoire."
    }
  },
  {
    "id": 75,
    "categoryKey": "tech",
    "axis": "soc",
    "multiplier": -1,
    "isQuick": false,
    "text": {
      "pl": "Państwo powinno kontrolować algorytmy social mediów (np. TikToka czy Facebooka), by ograniczyć dezinformację i fake newsy.",
      "en": "Governments should audit social media algorithms to curb political polarization, hate speech, and fake news.",
      "ru": "Государство должно проверять алгоритмы соцсетей, чтобы противостоять манипуляциям и дезинформации.",
      "fr": "L'État devrait auditer les algorithmes des réseaux sociaux pour freiner la désinformation et la haine en ligne."
    }
  },
  {
    "id": 76,
    "categoryKey": "tech",
    "axis": "soc",
    "multiplier": 1,
    "isQuick": false,
    "text": {
      "pl": "Dostawcy internetu nie powinni mieć prawa spowalniać ani faworyzować wybranych stron (neutralność sieci).",
      "en": "Internet service providers must treat all traffic equally and never throttle or prioritize specific websites (Net Neutrality).",
      "ru": "Провайдеры интернета не должны иметь права замедлять или ускорять доступ к отдельным сайтам (сетевой нейтралитет).",
      "fr": "Les fournisseurs d'accès à Internet ne doivent ni brider ni privilégier certains sites (neutralité du net)."
    }
  },
  {
    "id": 77,
    "categoryKey": "tech",
    "axis": "soc",
    "multiplier": -1,
    "isQuick": false,
    "text": {
      "pl": "Modyfikowanie ludzkich genów i eksperymenty na ludzkim DNA powinny być bezwzględnie zakazane.",
      "en": "Genetic engineering experiments aimed at modifying human DNA should be strictly banned on ethical grounds.",
      "ru": "Опыты по генной инженерии и редактированию ДНК человека должны быть полностью запрещены по этическим соображениям.",
      "fr": "Les manipulations génétiques visant à modifier l'ADN humain devraient être rigoureusement interdites."
    }
  },
  {
    "id": 78,
    "categoryKey": "tech",
    "axis": "soc",
    "multiplier": 1,
    "isQuick": false,
    "text": {
      "pl": "Programy i systemy komputerowe stworzone za publiczne pieniądze powinny być darmowe i jawne dla każdego (Open Source).",
      "en": "Software developed with taxpayer money should be made freely available to the public under open-source licenses.",
      "ru": "Программный код, созданный на деньги налогоплательщиков, должен открыто публиковаться под свободными лицензиями.",
      "fr": "Tout logiciel développé avec des fonds publics devrait être obligatoirement publié sous licence Open Source."
    }
  },
  {
    "id": 79,
    "categoryKey": "tech",
    "axis": "soc",
    "multiplier": 1,
    "isQuick": false,
    "text": {
      "pl": "Szyfrowanie wiadomości typu end-to-end powinno pozostać nienaruszalnym prawem każdego obywatela, nawet jeśli utrudnia to pracę policji.",
      "en": "End-to-end encryption should be an inviolable citizen right, even if it creates challenges for law enforcement investigations.",
      "ru": "Сквозное шифрование переписки должно оставаться священным правом каждого, даже если это усложняет работу следствия.",
      "fr": "Le chiffrement de bout en bout devrait rester un droit inviolable, même si cela complique le travail des enquêteurs."
    }
  },
  {
    "id": 80,
    "categoryKey": "tech",
    "axis": "soc",
    "multiplier": -1,
    "isQuick": false,
    "text": {
      "pl": "Autonomiczne drony i algorytmy bojowe podejmujące decyzję o ataku na człowieka powinny być całkowicie zdelegalizowane.",
      "en": "Fully autonomous lethal drones and AI weapons making life-or-death decisions must be universally banned by treaty.",
      "ru": "Автономные боевые дроны и алгоритмы, способные уничтожать людей без команды оператора, должны быть полностью запрещены.",
      "fr": "Les drones militaires autonomes et les armes dirigées par IA prenant des décisions létales doivent être totalement bannis."
    }
  },
  {
    "id": 81,
    "categoryKey": "ecology",
    "axis": "soc",
    "multiplier": 1,
    "isQuick": true,
    "text": {
      "pl": "Ochrona klimatu i redukcja emisji spalin powinny być priorytetem, nawet jeśli oznacza to wyższe koszty życia.",
      "en": "Reaching climate neutrality should be an urgent priority, even if it requires cutbacks in consumer lifestyles.",
      "ru": "Борьба с изменением климата должна быть первостепенной задачей, даже если это приведет к росту расходов граждан.",
      "fr": "La lutte contre le réchauffement climatique doit être prioritaire, quitte à réduire notre niveau de consommation."
    }
  },
  {
    "id": 82,
    "categoryKey": "ecology",
    "axis": "soc",
    "multiplier": -1,
    "isQuick": true,
    "text": {
      "pl": "Powinniśmy wydobywać własny węgiel i gaz tak długo, jak zapewniają nam bezpieczeństwo i tani prąd.",
      "en": "Domestic coal and fossil fuel resources should be utilized as long as they ensure affordable energy independence.",
      "ru": "Собственные запасы угля и газа нужно использовать до тех пор, пока они дают стране дешевую энергию.",
      "fr": "Nous devrions exploiter notre charbon et nos énergies fossiles tant qu'ils garantissent notre souveraineté énergétique."
    }
  },
  {
    "id": 83,
    "categoryKey": "ecology",
    "axis": "soc",
    "multiplier": -1,
    "isQuick": true,
    "text": {
      "pl": "Zakaz sprzedaży nowych samochodów spalinowych po 2035 roku to błąd i uderzenie w portfele zwykłych kierowców.",
      "en": "Banning the sale of new petrol and diesel cars is an unfair blow to ordinary drivers and consumer freedom.",
      "ru": "Запрет продаж новых бензиновых автомобилей — несправедливый удар по карманам обычных водителей.",
      "fr": "Interdire la vente des voitures thermiques neuves est une mesure punitive qui nuit au pouvoir d'achat des ménages."
    }
  },
  {
    "id": 84,
    "categoryKey": "ecology",
    "axis": "soc",
    "multiplier": 1,
    "isQuick": false,
    "text": {
      "pl": "Krótkie loty samolotem powinny być zakazane na trasach, na których można wygodnie i szybko dojechać pociągiem.",
      "en": "Short-haul domestic flights should be prohibited on routes where high-speed trains provide a viable alternative.",
      "ru": "Короткие авиарейсы внутри страны должны быть отменены там, где есть скоростные поезда.",
      "fr": "Les vols aériens intérieurs de courte distance devraient être interdits lorsqu'une liaison ferroviaire rapide existe."
    }
  },
  {
    "id": 85,
    "categoryKey": "ecology",
    "axis": "soc",
    "multiplier": -1,
    "isQuick": false,
    "text": {
      "pl": "Przepisy ekologiczne nie powinny blokować ani opóźniać budowy ważnych dróg, fabryk i elektrowni.",
      "en": "Environmental regulations should not stall the construction of vital highways, factories, and power infrastructure.",
      "ru": "Экологические нормы не должны тормозить строительство важных трасс, заводов и электростанций.",
      "fr": "Les normes écologiques ne devraient pas retarder la construction de routes, d'usines et de centrales majeures."
    }
  },
  {
    "id": 86,
    "categoryKey": "ecology",
    "axis": "soc",
    "multiplier": 1,
    "isQuick": false,
    "text": {
      "pl": "Trzymanie zwierząt w ciasnych klatkach na fermach przemysłowych powinno być całkowicie zakazane.",
      "en": "Confining livestock to intensive battery cages in industrial factory farms should be banned outright.",
      "ru": "Содержание скота и птицы в тесных клетках на промышленных фермах должно быть полностью запрещено.",
      "fr": "L'élevage intensif d'animaux en cage dans les fermes industrielles devrait être totalement aboli."
    }
  },
  {
    "id": 87,
    "categoryKey": "ecology",
    "axis": "soc",
    "multiplier": -1,
    "isQuick": false,
    "text": {
      "pl": "Kary i opłaty klimatyczne osłabiają naszą gospodarkę, podczas gdy kraje takie jak Chiny czy Indie bezkarnie trują środowisko.",
      "en": "Western climate penalties harm our industries while major polluters like China and India face far fewer burdens.",
      "ru": "Климатические соглашения бьют по нашей промышленности, пока азиатские гиганты загрязняют планету без оглядки.",
      "fr": "Les contraintes climatiques pénalisent nos économies au profit des grands pays pollueurs d'Asie."
    }
  },
  {
    "id": 88,
    "categoryKey": "ecology",
    "axis": "soc",
    "multiplier": 1,
    "isQuick": false,
    "text": {
      "pl": "Zakaz wjazdu starych aut do centrów miast i płatne strefy to dobry sposób na czyste powietrze.",
      "en": "Designating low-emission zones and charging older vehicles in city centers is the right way to protect public health.",
      "ru": "Платный въезд и запрет старых машин в центрах городов — правильный шаг для очищения воздуха.",
      "fr": "Les zones à faibles émissions interdisant les vieux véhicules en centre-ville sont une mesure saine pour la santé."
    }
  },
  {
    "id": 89,
    "categoryKey": "ecology",
    "axis": "soc",
    "multiplier": 1,
    "isQuick": false,
    "text": {
      "pl": "Dotacje do paliw kopalnych powinny zostać natychmiast wycofane i przeniesione na rozwój energii słonecznej i wiatrowej.",
      "en": "Fossil fuel subsidies should be immediately terminated and redirected into solar and wind power innovation.",
      "ru": "Субсидии на ископаемое топливо должны быть немедленно отменены и направлены на развитие зеленой энергетики.",
      "fr": "Les subventions aux énergies fossiles devraient être immédiatement supprimées au profit du solaire et de l'éolien."
    }
  },
  {
    "id": 90,
    "categoryKey": "ecology",
    "axis": "soc",
    "multiplier": -1,
    "isQuick": false,
    "text": {
      "pl": "Budowa nowoczesnych elektrowni jądrowych jest niezbędna i bezpieczna, nawet jeśli część organizacji ekologicznych protestuje.",
      "en": "Expanding modern nuclear power plants is essential for energy stability, regardless of green anti-nuclear protests.",
      "ru": "Строительство современных атомных электростанций необходимо и безопасно, несмотря на протесты антиядерных экологов.",
      "fr": "Le développement d'un parc nucléaire moderne est indispensable pour assurer l'énergie du pays, malgré les contestations écologistes."
    }
  },
  {
    "id": 91,
    "categoryKey": "culture",
    "axis": "soc",
    "multiplier": 1,
    "isQuick": true,
    "text": {
      "pl": "Kościół powinien być całkowicie oddzielony od państwa i nie powinien dostawać żadnych dotacji z podatków.",
      "en": "Religious institutions must be strictly separated from state governance and receive zero taxpayer funding.",
      "ru": "Церковь должна быть полностью отделена от государства и не получать никаких субсидий из налогов.",
      "fr": "L'État et les religions doivent être strictement séparés, sans aucune subvention publique aux cultes."
    }
  },
  {
    "id": 92,
    "categoryKey": "culture",
    "axis": "soc",
    "multiplier": -1,
    "isQuick": true,
    "text": {
      "pl": "Wartości chrześcijańskie i tradycja powinny być fundamentem prawa oraz wychowania młodzieży.",
      "en": "Traditional Christian values and historical heritage must serve as the bedrock of national identity and public law.",
      "ru": "Традиционные христианские ценности и история должны лежать в основе законов и воспитания молодежи.",
      "fr": "Les valeurs chrétiennes et l'héritage historique doivent rester le socle de l'identité nationale et des lois."
    }
  },
  {
    "id": 93,
    "categoryKey": "culture",
    "axis": "soc",
    "multiplier": 1,
    "isQuick": false,
    "text": {
      "pl": "Związki partnerskie i małżeństwa osób tej samej płci powinny być w pełni legalne i mieć równe prawa.",
      "en": "Same-sex partnerships and civil marriages should be fully recognized with equal legal rights.",
      "ru": "Гражданские союзы и однополые браки должны быть полностью узаконены и уравнены в правах с обычными.",
      "fr": "Le mariage et les partenariats entre personnes du même sexe devraient bénéficier des mêmes droits que les mariages hétérosexuels."
    }
  },
  {
    "id": 94,
    "categoryKey": "culture",
    "axis": "soc",
    "multiplier": -1,
    "isQuick": false,
    "text": {
      "pl": "Tradycyjna rodzina – kobieta, mężczyzna i dzieci – powinna być szczególnie chroniona przez państwo i konstytucję.",
      "en": "The traditional family unit composed of mother, father, and children deserves special constitutional protection.",
      "ru": "Традиционная семья, состоящая из отца, матери и детей, должна иметь особый статус в конституции.",
      "fr": "La famille traditionnelle formée par un homme, une femme et des enfants devrait jouir d'une protection constitutionnelle spécifique."
    }
  },
  {
    "id": 95,
    "categoryKey": "culture",
    "axis": "soc",
    "multiplier": 1,
    "isQuick": false,
    "text": {
      "pl": "Kobieta powinna mieć prawo do bezpiecznej, legalnej aborcji do 12. tygodnia ciąży bez podawania powodów.",
      "en": "Women must have guaranteed access to safe, legal abortion upon request during the first trimester.",
      "ru": "Женщина должна иметь право на безопасное и легальное прерывание беременности в первом триместре по своему выбору.",
      "fr": "Toute femme devrait avoir accès à une IVG sûre et légale sur simple demande durant le premier trimestre."
    }
  },
  {
    "id": 96,
    "categoryKey": "culture",
    "axis": "soc",
    "multiplier": -1,
    "isQuick": false,
    "text": {
      "pl": "Krzyże i symbole religijne powinny wisieć w szkołach, urzędach i salach sądowych.",
      "en": "Religious emblems such as crosses should be openly displayed in public classrooms, courts, and civic halls.",
      "ru": "Религиозные символы (кресты и т.д.) имеют законное право находиться в школах, судах и госучреждениях.",
      "fr": "Les symboles religieux traditionnels ont toute leur place dans les salles de classe, tribunaux et mairies."
    }
  },
  {
    "id": 97,
    "categoryKey": "culture",
    "axis": "soc",
    "multiplier": -1,
    "isQuick": false,
    "text": {
      "pl": "Państwo powinno aktywnie chronić naszą kulturę i tradycje przed obcymi modami i wpływami z zewnątrz.",
      "en": "The state has a duty to safeguard indigenous cultural heritage against imported trends and mass pop culture.",
      "ru": "Государство обязано защищать родную культуру и обычаи от размывания чуждыми внешними влияниями.",
      "fr": "L'État a le devoir de préserver la culture et les coutumes nationales des influences extérieures et du conformisme mondialisé."
    }
  },
  {
    "id": 98,
    "categoryKey": "culture",
    "axis": "soc",
    "multiplier": 1,
    "isQuick": false,
    "text": {
      "pl": "Osoby transpłciowe powinny móc zmienić płeć w dokumentach prostym wnioskiem w urzędzie, bez spraw sądowych.",
      "en": "Transgender individuals should be allowed to update their legal gender marker through simple administrative self-declaration.",
      "ru": "Трансгендерные люди должны иметь возможность сменить пол в документах простым заявлением без судебных тяжб.",
      "fr": "Les personnes transgenres devraient pouvoir modifier la mention de leur sexe à l'état civil par simple déclaration."
    }
  },
  {
    "id": 99,
    "categoryKey": "culture",
    "axis": "soc",
    "multiplier": 1,
    "isQuick": false,
    "text": {
      "pl": "Edukacja seksualna w szkołach powinna być nowoczesna, rzetelna i uczyć młodzież o antykoncepcji oraz równości.",
      "en": "Comprehensive sex education in schools should be modern and scientific, covering contraception and gender equality.",
      "ru": "Половое воспитание в школах должно быть современным, научным и рассказывать о контрацепции и равенстве.",
      "fr": "L'éducation à la sexualité à l'école devrait être moderne et scientifique, abordant la contraception et l'égalité."
    }
  },
  {
    "id": 100,
    "categoryKey": "culture",
    "axis": "soc",
    "multiplier": -1,
    "isQuick": false,
    "text": {
      "pl": "Finansowanie z podatków kontrowersyjnych spektakli teatralnych czy wystaw obrażających uczucia religijne powinno być wstrzymane.",
      "en": "Taxpayer subsidies for controversial arts or plays that deliberately offend religious sensibilities should be stopped.",
      "ru": "Финансирование за счет налогов скандальных постановок, оскорбляющих чувства верующих, должно быть прекращено.",
      "fr": "Les subventions publiques pour des œuvres offensant délibérément les sentiments religieux devraient être supprimées."
    }
  },
  {
    "id": 101,
    "categoryKey": "society",
    "axis": "soc",
    "multiplier": 1,
    "isQuick": false,
    "text": {
      "pl": "Na listach wyborczych i we władzach spółek powinny być obowiązkowe miejsca dla kobiet (parytety).",
      "en": "Mandatory gender quotas on election lists and company boards are a fair tool for advancing equal opportunity.",
      "ru": "Гендерные квоты в избирательных списках и советах директоров — справедливая мера для равенства полов.",
      "fr": "Instaurer des quotas de genre obligatoires sur les listes électorales et dans les conseils d'administration est juste."
    }
  },
  {
    "id": 102,
    "categoryKey": "society",
    "axis": "soc",
    "multiplier": -1,
    "isQuick": true,
    "text": {
      "pl": "Przy zatrudnianiu i rekrutacji na studia powinny liczyć się wyłącznie wiedza i umiejętności, bez punktów za płeć czy pochodzenie.",
      "en": "University admissions and job hiring should be based purely on academic and professional merit, not identity backgrounds.",
      "ru": "Прием в вузы и на работу должен зависеть исключительно от знаний и способностей, без поправок на пол или расу.",
      "fr": "L'accès aux universités et à l'emploi devrait reposer uniquement sur les compétences réelles sans discrimination positive."
    }
  },
  {
    "id": 103,
    "categoryKey": "society",
    "axis": "soc",
    "multiplier": 1,
    "isQuick": false,
    "text": {
      "pl": "Praca seksualna dorosłych osób za obopólną zgodą powinna być legalnym zawodem z prawem do ubezpieczenia i emerytury.",
      "en": "Consensual adult sex work should be a fully legal profession with formal employment benefits and social protections.",
      "ru": "Добровольная секс-работа взрослых людей должна быть легальной профессией со всеми трудовыми правами.",
      "fr": "Le travail du sexe consenti entre adultes devrait être une profession reconnue avec droits sociaux et retraite."
    }
  },
  {
    "id": 104,
    "categoryKey": "society",
    "axis": "soc",
    "multiplier": -1,
    "isQuick": false,
    "text": {
      "pl": "Lekcje w szkole powinny uczyć młodzież wstrzemięźliwości seksualnej i szacunku dla tradycyjnego małżeństwa.",
      "en": "Sex education in schools should emphasize abstinence, moral responsibility, and lifelong marriage.",
      "ru": "Уроки полового воспитания в школах должны делать упор на целомудрие и уважение к традиционному браку.",
      "fr": "L'éducation affective à l'école devrait valoriser la fidélité, la retenue et le mariage traditionnel."
    }
  },
  {
    "id": 105,
    "categoryKey": "society",
    "axis": "soc",
    "multiplier": 1,
    "isQuick": true,
    "text": {
      "pl": "Ludzie uciekający przed wojną powinni móc złożyć wniosek o azyl, bez wyrzucania ich siłą z powrotem za granicę (pushbacków).",
      "en": "Asylum seekers fleeing war or persecution must have guaranteed access to due process without illegal border pushbacks.",
      "ru": "Беженцы от войн и тирании должны иметь право на рассмотрение прошений об убежище без силового выдворения на границе.",
      "fr": "Les personnes fuyant la guerre doivent voir leur demande d'asile examinée dignement sans refoulement brutal aux frontières."
    }
  },
  {
    "id": 106,
    "categoryKey": "society",
    "axis": "soc",
    "multiplier": 1,
    "isQuick": false,
    "text": {
      "pl": "Więzienia powinny skupiać się na resocjalizacji i nauce zawodu, a nie tylko na surowym karaniu i izolacji.",
      "en": "Correctional facilities should prioritize rehabilitation, psychological care, and job training over harsh punishment.",
      "ru": "Тюрьмы должны ориентироваться на перевоспитание, психологическую помощь и обучение, а не на жестокое наказание.",
      "fr": "Les prisons devraient privilégier la réinsertion, l'accompagnement et la formation plutôt que la simple punition."
    }
  },
  {
    "id": 107,
    "categoryKey": "society",
    "axis": "soc",
    "multiplier": -1,
    "isQuick": false,
    "text": {
      "pl": "Za publiczne obrażanie religii i profanację symboli wiary powinny grozić surowe kary więzienia.",
      "en": "Blasphemy, desecrating religious symbols, and inciting religious hatred should carry heavy criminal sentences.",
      "ru": "Публичное оскорбление чувств верующих и осквернение святынь должны строго преследоваться по закону.",
      "fr": "Les profanations d'objets de culte et les atteintes publiques aux sentiments religieux devraient être lourdement punies."
    }
  },
  {
    "id": 108,
    "categoryKey": "society",
    "axis": "soc",
    "multiplier": -1,
    "isQuick": false,
    "text": {
      "pl": "Rząd powinien mieć prawo nakładać kary finansowe na osoby, które odmawiają obowiązkowych szczepień ochronnych.",
      "en": "Public health authorities have the right to enforce mandatory vaccination programs backed by administrative fines.",
      "ru": "Власти имеют право вводить обязательную вакцинацию и наказывать штрафами тех, кто от нее отказывается.",
      "fr": "Les autorités sanitaires devraient pouvoir imposer des obligations vaccinales assorties d'amendes financières."
    }
  },
  {
    "id": 109,
    "categoryKey": "society",
    "axis": "soc",
    "multiplier": 1,
    "isQuick": false,
    "text": {
      "pl": "Osoby dorosłe powinny mieć pełną swobodę w decydowaniu o własnym ciele, w tym o modyfikacjach ciała i prawie do surogacji.",
      "en": "Adult individuals should have full autonomy over their own bodies, including surrogacy agreements and personal lifestyle choices.",
      "ru": "Совершеннолетние люди должны иметь полную автономию над своим телом, включая суррогатное материнство и личный выбор.",
      "fr": "Les adultes devraient jouir d'une autonomie totale sur leur propre corps, y compris pour la gestation pour autrui et leurs choix de vie."
    }
  },
  {
    "id": 110,
    "categoryKey": "society",
    "axis": "soc",
    "multiplier": -1,
    "isQuick": false,
    "text": {
      "pl": "Utrzymanie porządku publicznego i bezpieczeństwa na ulicach jest ważniejsze niż bezwzględna ochrona prawa do nielegalnych zgromadzeń.",
      "en": "Maintaining public safety and civic order takes precedence over unsanctioned street demonstrations and road blockades.",
      "ru": "Поддержание порядка и безопасности на улицах важнее, чем проведение несанкционированных митингов и перекрытие дорог.",
      "fr": "Le maintien de l'ordre public et de la sécurité des citoyens doit primer sur les manifestations sauvages et les blocages."
    }
  },
  {
    "id": 111,
    "categoryKey": "security",
    "axis": "soc",
    "multiplier": -1,
    "isQuick": true,
    "text": {
      "pl": "Na granicach powinny stać solidne zapory i mury, a każda nielegalna próba wejścia do kraju powinna być twardo zatrzymywana.",
      "en": "National borders should be fortified with physical barriers, and unauthorized border crossings must be decisively repelled.",
      "ru": "Границы государства должны охраняться надежными стенами, а незаконные переходы должны жестко пресекаться.",
      "fr": "Les frontières doivent être protégées par des barrières solides et toute entrée illégale fermement repoussée."
    }
  },
  {
    "id": 112,
    "categoryKey": "security",
    "axis": "soc",
    "multiplier": 1,
    "isQuick": false,
    "text": {
      "pl": "Kraje Unii Europejskiej powinny połączyć się w jedno wspólne federacyjne państwo z europejskim rządem i armią.",
      "en": "European nations should gradually integrate into a single democratic federation with a unified government and army.",
      "ru": "Страны Европы должны объединиться в единую федерацию с общим правительством и вооруженными силами.",
      "fr": "Les pays européens devraient s'unir au sein d'une fédération démocratique dotée d'un gouvernement et d'une armée uniques."
    }
  },
  {
    "id": 113,
    "categoryKey": "security",
    "axis": "soc",
    "multiplier": -1,
    "isQuick": false,
    "text": {
      "pl": "Obowiązkowa zasadnicza służba wojskowa dla młodych ludzi powinna zostać przywrócona.",
      "en": "Mandatory military conscription for young citizens should be reintroduced to build collective national defense.",
      "ru": "Обязательный воинский призыв для молодежи следует вернуть для укрепления обороноспособности страны.",
      "fr": "Le service militaire obligatoire pour les jeunes devrait être rétabli afin de renforcer la résilience nationale."
    }
  },
  {
    "id": 114,
    "categoryKey": "security",
    "axis": "soc",
    "multiplier": 1,
    "isQuick": false,
    "text": {
      "pl": "Wyroki międzynarodowych trybunałów praw człowieka powinny mieć pierwszeństwo przed ustawami uchwalanymi przez parlament krajowy.",
      "en": "Rulings from international human rights courts should supersede domestic statutes passed by national parliaments.",
      "ru": "Постановления международных судов по правам человека должны стоять выше местных законов парламента.",
      "fr": "Les arrêts des cours internationales des droits de l'homme doivent prévaloir sur les lois votées par le parlement national."
    }
  },
  {
    "id": 115,
    "categoryKey": "security",
    "axis": "soc",
    "multiplier": -1,
    "isQuick": true,
    "text": {
      "pl": "Wydatki na wojsko i zbrojenia powinny być priorytetem, nawet jeśli oznacza to cięcia w szkolnictwie czy zdrowiu.",
      "en": "Defense and armament budgets should reach at least 3-4% of GDP, even if other public spending has to be trimmed.",
      "ru": "Расходы на армию и оружие должны быть высшим приоритетом, даже в ущерб другим статьям бюджета.",
      "fr": "Les dépenses militaires et d'armement doivent être prioritaires, quitte à réduire d'autres budgets publics."
    }
  },
  {
    "id": 116,
    "categoryKey": "security",
    "axis": "soc",
    "multiplier": 1,
    "isQuick": true,
    "text": {
      "pl": "Powinniśmy dążyć do świata bez granic, w którym każdy człowiek może swobodnie mieszkać i pracować w dowolnym kraju.",
      "en": "Humanity should strive for a borderless world where anyone is free to reside and work anywhere on Earth.",
      "ru": "Человечество должно стремиться к миру открытых границ, где любой вправе жить и работать в любой точке планеты.",
      "fr": "L'humanité devrait tendre vers un monde sans frontières où chacun peut librement s'installer et travailler où il le souhaite."
    }
  },
  {
    "id": 117,
    "categoryKey": "security",
    "axis": "soc",
    "multiplier": -1,
    "isQuick": false,
    "text": {
      "pl": "Interes własnego kraju i jego obywateli musi zawsze stać na pierwszym miejscu, przed wszelkimi umowami międzynarodowymi.",
      "en": "The national interest and welfare of one's own citizens must always take precedence over international treaties.",
      "ru": "Национальные интересы и благополучие собственных граждан должны стоять выше любых международных соглашений.",
      "fr": "L'intérêt national et le bien-être de nos concitoyens doivent toujours passer avant les accords internationaux."
    }
  },
  {
    "id": 118,
    "categoryKey": "security",
    "axis": "soc",
    "multiplier": 1,
    "isQuick": false,
    "text": {
      "pl": "Bogate kraje i banki powinny umorzyć długi najbiedniejszym państwom świata, by pomóc im w walce z głodem i nędzą.",
      "en": "Wealthy nations and lenders should cancel the sovereign debts of developing countries to combat global poverty.",
      "ru": "Богатые державы и МВФ должны списать долги беднейшим странам мира для преодоления нищеты.",
      "fr": "Les pays riches et institutions financières devraient annuler les dettes des pays les plus pauvres pour éradiquer la misère."
    }
  },
  {
    "id": 119,
    "categoryKey": "security",
    "axis": "soc",
    "multiplier": -1,
    "isQuick": false,
    "text": {
      "pl": "Gdy wrogie państwo nam zagraża, nasza armia powinna mieć prawo do uderzenia wyprzedzającego za granicą.",
      "en": "When threatened by a hostile power, our military should have full authorization to conduct preemptive strikes abroad.",
      "ru": "При явной военной угрозе государство имеет полное право нанести упреждающий удар по врагу за рубежом.",
      "fr": "Face à une menace ennemie directe, l'armée devrait être autorisée à mener des frappes préventives à l'étranger."
    }
  },
  {
    "id": 120,
    "categoryKey": "security",
    "axis": "soc",
    "multiplier": 1,
    "isQuick": false,
    "text": {
      "pl": "Wszystkie mocarstwa atomowe powinny całkowicie zlikwidować swoją broń jądrową pod międzynarodową kontrolą.",
      "en": "All nuclear powers should sign a mandatory treaty to completely eliminate atomic weapons under global inspection.",
      "ru": "Все ядерные державы должны полностью ликвидировать атомное оружие под строгим международным контролем.",
      "fr": "Toutes les puissances nucléaires devraient démanteler totalement leur arsenal atomique sous contrôle international."
    }
  }
];

if (typeof module !== "undefined" && module.exports) {
  module.exports = { categories, answerOptions, questions };
}
