// tools/raw_questions.js
// 140 Pytań do Testu Politycznego w 6 językach: PL, EN, ES, DE, RU, FR
// 70 pytań ekonomicznych (econ), 70 pytań społeczno-światopoglądowych (soc)
// 35 z multiplier = +1, 35 z multiplier = -1 dla każdej osi.
// Wersja Szybka (isQuick: true): reprezentatywne 30 pytań (15 econ, 15 soc) obejmujących wszystkie 12 dziedzin.
// Wersja Pełna: 140 pytań.
// Sformułowane w naturalnym, wyważonym i zrozumiałym języku ("po ludzku").

const rawQuestions = [
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
      "fr": "Le libre marché, débarrassé des lourdeurs bureaucratiques et réglementaires, est le meilleur moyen d'enrichir une nation.",
      "es": "Un libre mercado sin normativas innecesarias ni burocracia es la mejor manera de generar riqueza nacional.",
      "de": "Ein freier Markt ohne unnötige Regulierungen und Bürokratie ist der beste Weg, nationalen Wohlstand aufzubauen."
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
      "fr": "Quand les prix flambent, le gouvernement devrait plafonner les prix de la nourriture de base et de l'énergie.",
      "es": "Cuando los precios se disparan, el gobierno debe fijar topes estrictos a los alimentos básicos y la energía.",
      "de": "Bei stark steigenden Preisen sollte die Regierung Höchstpreise für Grundnahrungsmittel und Energie festlegen."
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
      "fr": "La faillite des entreprises non rentables est naturelle ; l'État ne devrait pas les sauver avec l'argent public.",
      "es": "La quiebra de empresas no rentables es parte de un capitalismo sano; el Estado no debe rescatarlas con dinero público.",
      "de": "Die Pleite unrentabler Unternehmen gehört zu einem gesunden Kapitalismus; der Staat sollte sie nicht mit Steuergeldern retten."
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
      "fr": "L'État devrait posséder la majorité des parts dans les industries stratégiques, l'énergie et les matières premières.",
      "es": "El Estado debe poseer participaciones mayoritarias en industrias estratégicas, minería y generación de energía.",
      "de": "Der Staat sollte Mehrheitsanteile an strategischen Industriezweigen, Bergbau und Energieversorgung halten."
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
      "fr": "Les commerçants devraient être totalement libres d'ouvrir quand ils le souhaitent, y compris le dimanche et les jours fériés.",
      "es": "Los comerciantes deben tener plena libertad para abrir cualquier día, incluidos domingos y festivos.",
      "de": "Ladenbesitzer sollten die Freiheit haben, an jedem Tag, einschließlich Sonn- und Feiertagen, zu öffnen."
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
      "fr": "Le développement économique devrait être planifié par l'État plutôt que laissé aux seules lois du marché.",
      "es": "El desarrollo económico debe ser guiado y coordinado por el Estado en lugar de dejarse exclusivamente a las fuerzas del mercado.",
      "de": "Wirtschaftliche Entwicklung sollte vom Staat gelenkt und koordiniert werden, statt rein den Marktkräften überlassen zu werden."
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
      "fr": "La privatisation des trains et des compagnies aériennes améliore le service et fait baisser les prix.",
      "es": "Privatizar ferrocarriles y aerolíneas conduce a un mejor servicio y billetes más baratos.",
      "de": "Die Privatisierung von Bahn und Luftverkehr führt zu besserem Service und günstigeren Fahrpreisen."
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
      "fr": "Les profits des grandes entreprises doivent passer après le bien-être des salariés et des citoyens locaux.",
      "es": "Los beneficios corporativos deben quedar en segundo plano cuando está en juego el bienestar de los trabajadores y comunidades locales.",
      "de": "Unternehmensgewinne sollten hintenanstehen, wenn das Wohl der Beschäftigten und lokalen Gemeinschaften auf dem Spiel steht."
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
      "fr": "Les subventions publiques accordées à certaines entreprises faussent la concurrence et gaspillent l'argent public.",
      "es": "Los subsidios estatales a empresas afines distorsionan la competencia leal y malgastan el dinero de los contribuyentes.",
      "de": "Staatliche Subventionen für ausgewählte Unternehmen verzerren den fairen Wettbewerb und verschwenden Steuergelder."
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
      "fr": "L'État devrait soutenir les coopératives autogérées par leurs salariés plutôt que les grandes entreprises hiérarchiques.",
      "es": "El Estado debe apoyar las cooperativas autogestionadas y lugares de trabajo democráticos frente a las corporaciones jerárquicas.",
      "de": "Der Staat sollte Genossenschaften und demokratisch geführte Betriebe gegenüber hierarchischen Großkonzernen fördern."
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
      "fr": "Tout le monde devrait payer le même pourcentage d'impôt (impôt à taux unique), peu importe ses revenus.",
      "es": "Un tipo impositivo único (flat tax) es más justo y fomenta el trabajo más que los impuestos progresivos.",
      "de": "Eine einheitliche Flat-Tax ist gerechter und belohnt Leistung mehr als progressiv steigende Steuersätze."
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
      "fr": "Les milliardaires et multinationales devraient payer un impôt élevé sur la fortune pour réduire les inégalités.",
      "es": "Los multimillonarios y las grandes fortunas deberían pagar tipos impositivos marginales de al menos el 50-70%.",
      "de": "Milliardäre und extrem hohe Einkommen sollten Spitzensteuersätze von mindestens 50 bis 70 Prozent zahlen."
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
      "fr": "Les droits de succession et donations transmises aux proches devraient être totalement supprimés.",
      "es": "Los impuestos a las herencias castigan injustamente a las familias que ahorraron e invirtieron con esfuerzo.",
      "de": "Erbschaftssteuern bestrafen Familien ungerecht, die sich ihr Vermögen durch harte Arbeit und Verzicht aufgebaut haben."
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
      "fr": "La spéculation boursière à court terme devrait être soumise à une taxe financière spécifique.",
      "es": "Las transacciones financieras especulativas en bolsa deben gravarse para financiar servicios públicos.",
      "de": "Spekulative Börsentransaktionen sollten mit einer Finanztransaktionssteuer belegt werden, um öffentliche Dienste zu finanzieren."
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
      "fr": "Des impôts bas sur les sociétés sont le meilleur moyen d'attirer des usines modernes et des investissements.",
      "es": "Reducir los impuestos al combustible y la energía ayuda a los ciudadanos corrientes más que los programas sociales del gobierno.",
      "de": "Eine Senkung der Steuern auf Treibstoffe und Energie hilft normalen Bürgern mehr als staatliche Subventionsprogramme."
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
      "fr": "Dissimuler ses bénéfices dans des paradis fiscaux devrait être sévèrement sanctionné comme une faute contre l'État.",
      "es": "El Estado debe redistribuir activamente la riqueza recaudando impuestos a los ricos para financiar ayudas a personas de bajos ingresos.",
      "de": "Der Staat sollte Vermögen aktiv umverteilen, indem er Reiche besteuert, um Hilfen für Geringverdiener zu finanzieren."
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
      "fr": "La concurrence fiscale entre pays est une bonne chose car elle force les gouvernements à limiter leurs dépenses.",
      "es": "Quienes ganan más ya financian la mayor parte del presupuesto; elevar más sus impuestos es castigar el éxito.",
      "de": "Spitzenverdiener finanzieren bereits den Großteil des Staatsbudgets; höhere Steuern bestrafen persönlichen Erfolg."
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
      "fr": "Tous les pays devraient instaurer un impôt minimum commun sur les sociétés pour empêcher l'évasion fiscale.",
      "es": "Se debe aplicar un impuesto extraordinario a los beneficios caídos del cielo de las empresas energéticas.",
      "de": "Auf krisenbedingte Übergewinne von Energiekonzernen sollte eine Sondersteuer erhoben werden."
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
      "fr": "L'impôt sur les plus-values (actions, cryptomonnaies) devrait être supprimé pour encourager les investissements.",
      "es": "Cualquier aumento de impuestos ralentiza la economía y reduce los incentivos para que la gente prospere.",
      "de": "Jede Steuererhöhung bremst die Wirtschaft und mindert den Leistungsanreiz der Bevölkerung."
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
      "fr": "Un barème fiscal fortement progressif, où les plus fortunés versent plus de la moitié de leurs revenus supérieurs, est juste.",
      "es": "Se deben eliminar las exenciones fiscales para multinacionales para que paguen una cuota justa donde operan.",
      "de": "Steuerschlupflöcher für multinationale Konzerne müssen geschlossen werden, damit sie dort Steuern zahlen, wo sie Gewinne erzielen."
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
      "fr": "Le salaire minimum devrait être aboli ; la rémunération doit relever du libre accord entre salarié et employeur.",
      "es": "El salario mínimo obligatorio destruye oportunidades laborales para jóvenes y trabajadores poco cualificados.",
      "de": "Gesetzliche Mindestlöhne vernichten Arbeitsplätze für Berufseinsteiger und Geringqualifizierte."
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
      "fr": "Les syndicats devraient avoir le pouvoir d'interdire les licenciements économiques massifs et les fermetures d'usines.",
      "es": "Un salario mínimo digno fijado por ley es esencial para evitar la explotación de los trabajadores.",
      "de": "Ein existenzsichernder gesetzlicher Mindestlohn ist unverzichtbar, um Ausbeutung zu verhindern."
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
      "fr": "Le travail indépendant et les contrats flexibles offrent plus de liberté et d'opportunités qu'un code du travail rigide.",
      "es": "Los empresarios deben tener flexibilidad total para contratar y despedir según sus necesidades operativas.",
      "de": "Arbeitgeber sollten volle Flexibilität bei Einstellungen und Kündigungen je nach Geschäftslage haben."
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
      "fr": "Le temps de travail devrait être réduit (à 4 jours ou 35 heures par semaine) sans aucune baisse de salaire.",
      "es": "Los sindicatos fuertes son cruciales para defender los derechos de los trabajadores y garantizar condiciones justas.",
      "de": "Starke Gewerkschaften sind entscheidend, um Arbeitnehmerrechte zu schützen und faire Arbeitsbedingungen zu garantieren."
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
      "fr": "Un employeur devrait pouvoir licencier un salarié à tout moment sans démarches excessives ni justifications.",
      "es": "La afiliación sindical debe ser estrictamente voluntaria y no un requisito para trabajar.",
      "de": "Die Gewerkschaftsmitgliedschaft muss strikt freiwillig sein und darf keine Voraussetzung für eine Anstellung sein."
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
      "fr": "Les salariés devraient disposer de sièges garantis aux conseils d'administration pour co-décider de l'avenir de l'entreprise.",
      "es": "La semana laboral estándar debería reducirse legalmente a 32-35 horas sin reducción salarial.",
      "de": "Die reguläre Wochenarbeitszeit sollte gesetzlich auf 32 bis 35 Stunden bei vollem Lohnausgleich gesenkt werden."
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
      "fr": "Les grèves qui paralysent les transports en commun ou les hôpitaux devraient être interdites par la loi.",
      "es": "Las negociaciones salariales directas entre empleado y empleador son mejores que los convenios colectivos impuestos.",
      "de": "Individuelle Lohnverhandlungen zwischen Arbeitnehmer und Arbeitgeber sind besser als starre Branchentarife."
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
      "fr": "Les entreprises remplaçant des humains par des robots ou l'IA devraient payer une taxe dédiée au soutien des salariés.",
      "es": "Los representantes de los trabajadores deben tener derecho a voto en los consejos de administración corporativos.",
      "de": "Arbeitnehmervertreter sollten ein verbindliches Mitspracherecht in den Aufsichtsräten von Großunternehmen haben."
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
      "fr": "Les employeurs devraient avoir le droit légal d'embaucher des remplaçants pour assurer l'activité en cas de grève.",
      "es": "Limitar las primas e indemnizaciones a directivos no es asunto del gobierno.",
      "de": "Die Begrenzung von Vorstandsgehältern und Bonuszahlungen ist keine Angelegenheit des Staates."
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
      "fr": "Les travailleurs des plateformes numériques (coursiers, chauffeurs VTC) devraient avoir le statut de salariés avec congés payés et maladie.",
      "es": "El Estado debe prohibir los contratos temporales precarios en puestos de trabajo permanentes.",
      "de": "Der Staat sollte sachgrundlose Befristungen und Leiharbeit für dauerhafte Stellen verbieten."
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
      "fr": "Les comptes de retraite privés et l'épargne individuelle sont bien plus efficaces que les régimes publics.",
      "es": "La sanidad privada con seguros en competencia ofrece una atención médica de mayor calidad que los monopolios estatales.",
      "de": "Private Krankenversicherungen im Wettbewerb bieten eine höhere Versorgungsqualität als staatliche Monopole."
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
      "fr": "Chaque citoyen adulte devrait recevoir un revenu universel de base garanti et inconditionnel.",
      "es": "La atención médica de calidad debe ser gratuita y accesible para todos, financiada enteramente con impuestos.",
      "de": "Hochwertige medizinische Versorgung muss für alle Bürger kostenlos und vollständig steuerfinanziert sein."
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
      "fr": "Les loyers doivent être fixés par le libre marché ; l'encadrement des loyers ne fait qu'aggraver la crise du logement.",
      "es": "La educación superior debe ser pagada por los estudiantes que se benefician de ella, no por los contribuyentes en general.",
      "de": "Hochschulbildung sollte von den Studierenden selbst bezahlt werden, die davon profitieren, nicht von der Allgemeinheit."
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
      "fr": "Le logement est un droit fondamental ; l'État et les communes doivent bâtir massivement des logements sociaux abordables.",
      "es": "El Estado debe garantizar una vivienda pública asequible para evitar que los ciudadanos queden desamparados.",
      "de": "Der Staat muss bezahlbaren Wohnraum garantieren und kommunalen Wohnungsbau massiv fördern."
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
      "fr": "Verser des aides sociales sans exiger de recherche d'emploi incite à l'inaction et crée une dépendance.",
      "es": "Las ayudas sociales prolongadas desincentivan la búsqueda activa de empleo y generan dependencia del Estado.",
      "de": "Dauerhafte Sozialleistungen mindern den Anreiz zur Arbeitssuche und schaffen ungesunde Staatsabhängigkeit."
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
      "fr": "L'hôpital, les médicaments essentiels et la prise en charge des personnes âgées devraient être gratuits pour tous.",
      "es": "Una Renta Básica Universal incondicional es una herramienta eficaz contra la pobreza y la precariedad.",
      "de": "Ein bedingungsloses Grundeinkommen ist ein wirksames Instrument gegen Armut und Zukunftsängste."
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
      "fr": "Les fonds d'investissement achetant des immeubles pour les laisser vides devraient être lourdement taxés.",
      "es": "Los sistemas de pensiones basados en cuentas privadas de capitalización son más sostenibles que los sistemas estatales de reparto.",
      "de": "Kapitalgedeckte private Rentenkonten bieten bessere Erträge und Zukunftssicherheit als staatliche Umlagesysteme."
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
      "fr": "Les prestations sociales ne devraient être versées qu'à ceux qui ont préalablement travaillé et cotisé.",
      "es": "El transporte público urbano debe ser completamente gratuito para reducir el tráfico y ayudar a las familias trabajadoras.",
      "de": "Der öffentliche Nahverkehr sollte vollständig kostenlos sein, um den Autoverkehr zu senken und Familien zu entlasten."
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
      "fr": "L'assurance maladie et les hôpitaux devraient fonctionner selon les règles du marché en laissant le choix des forfaits de soins.",
      "es": "Los vales escolares (bonos educativos) aumentan la competencia y mejoran la calidad de la enseñanza.",
      "de": "Bildungsgutscheine stärken den Wettbewerb zwischen Schulen und heben das Bildungsniveau für alle."
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
      "fr": "L'État devrait garantir des crèches, des écoles maternelles et des repas scolaires gratuits pour chaque enfant.",
      "es": "El cuidado infantil y los comedores escolares deben ser servicios públicos universales y gratuitos.",
      "de": "Kinderbetreuung und Schulessen sollten universelle, kostenlose öffentliche Dienstleistungen sein."
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
      "fr": "La production et la distribution d'électricité devraient être ouvertes à la concurrence plutôt que gérées par un monopole public.",
      "es": "Los servicios postales y las telecomunicaciones deben privatizarse para incentivar la innovación.",
      "de": "Postdienste und Telekommunikation sollten privatisiert werden, um Effizienz und Innovation zu steigern."
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
      "fr": "Les forêts, l'eau potable et les ressources naturelles doivent rester propriété publique inaliénable.",
      "es": "El suministro de agua, la red eléctrica y las infraestructuras críticas deben ser de propiedad estatal exclusiva.",
      "de": "Wasserversorgung, Stromnetze und kritische Infrastruktur gehören ausschließlich in öffentliche Hand."
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
      "fr": "La plupart des licences professionnelles et agréments ne sont que des freins bureaucratiques bloquant les jeunes actifs.",
      "es": "Reducir las licencias profesionales y trámites burocráticos facilita la creación de pequeños negocios.",
      "de": "Der Abbau von Berufszulassungen und bürokratischen Auflagen erleichtert Unternehmensgründungen."
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
      "fr": "La rémunération des dirigeants ne devrait pas dépasser par exemple vingt fois le salaire moyen des employés.",
      "es": "Las grandes entidades bancarias deben someterse a estrictas regulaciones y requisitos de reservas para evitar crisis.",
      "de": "Großbanken müssen strengen Eigenkapitalvorschriften und staatlicher Aufsicht unterliegen, um Finanzkrisen zu verhindern."
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
      "fr": "Les livreurs privés et casiers automatiques fonctionnent bien plus efficacement que les services postaux publics.",
      "es": "La desregulación del sector farmacéutico acelera la llegada al mercado de medicamentos que salvan vidas.",
      "de": "Weniger Auflagen für Pharmaunternehmen beschleunigen die Markteinführung lebensrettender Medikamente."
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
      "fr": "L'État devrait surtaxer les hypermarchés géants pour sauvegarder les petits commerces de proximité.",
      "es": "Los gigantes tecnológicos (Big Tech) deben dividirse mediante leyes antimonopolio para proteger la competencia.",
      "de": "Große Tech-Konzerne (Big Tech) sollten durch das Kartellrecht zerschlagen werden, um Wettbewerb zu sichern."
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
      "fr": "Les applications VTC comme Uber et l'ouverture des licences de taxi profitent grandement aux usagers.",
      "es": "Los precios de alquiler deben responder a la oferta y la demanda sin topes gubernamentales.",
      "de": "Mietpreise sollten sich frei nach Angebot und Nachfrage bilden, ohne staatliche Mietpreisdeckel."
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
      "fr": "Les banques font trop de profits sur les taux d'intérêt et frais ; l'État devrait plafonner leurs marges.",
      "es": "La venta de alcohol, tabaco y juegos de azar debe regularse estrictamente y gravarse para proteger la salud pública.",
      "de": "Alkohol, Tabak und Glücksspiel sollten zum Schutz der öffentlichen Gesundheit streng reguliert und hoch besteuert werden."
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
      "fr": "Les promoteurs privés devraient faire face à beaucoup moins de contraintes d'urbanisme pour construire de nouveaux logements.",
      "es": "Las aerolíneas de bandera y astilleros deficitarios no deben mantenerse artificialmente con fondos públicos.",
      "de": "Verlustbringende Staatsfluggesellschaften und Werften sollten nicht dauerhaft mit Steuergeldern subventioniert werden."
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
      "fr": "L'État devrait interdire totalement la publicité pour la malbouffe, l'alcool et les jeux de hasard auprès des jeunes.",
      "es": "El Estado debe tener derecho de veto sobre adquisiciones extranjeras de empresas tecnológicas y energéticas clave.",
      "de": "Der Staat sollte ein Vetorecht bei ausländischen Übernahmen strategischer Technologie- und Energieunternehmen haben."
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
      "fr": "La suppression des droits de douane et le libre-échange international enrichissent tous les peuples.",
      "es": "El libre comercio internacional y la eliminación de aranceles enriquecen a todas las naciones participantes.",
      "de": "Freier internationaler Handel und der Abbau von Zöllen machen alle beteiligten Nationen wohlhabender."
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
      "fr": "Des droits de douane élevés sont nécessaires pour protéger nos usines et agriculteurs contre les importations à bas coût.",
      "es": "Se deben imponer aranceles de protección a productos importados de países con salarios muy bajos y normas laborales débiles.",
      "de": "Zum Schutz heimischer Betriebe sollten Schutzzölle auf Importe aus Ländern mit Dumpinglöhnen erhoben werden."
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
      "fr": "L'argent et les investissements devraient circuler librement d'un pays à l'autre sans contrôle étatique.",
      "es": "Los tratados de libre comercio benefician a los consumidores al abaratar los productos y ampliar la oferta.",
      "de": "Freihandelsabkommen nützen den Verbrauchern durch günstigere Produkte und größere Auswahl."
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
      "fr": "Les géants de la Tech ont acquis un pouvoir monopolistique dangereux et les États devraient les démanteler.",
      "es": "La producción de alimentos y medicamentos esenciales debe permanecer dentro de las fronteras nacionales por seguridad.",
      "de": "Die Produktion von lebenswichtigen Medikamenten und Lebensmitteln muss aus Sicherheitsgründen im eigenen Land gesichert sein."
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
      "fr": "Les entreprises étrangères devraient avoir exactement les mêmes droits et impôts que les entreprises nationales.",
      "es": "Las empresas multinacionales aportan inversión y empleo valiosos a los países en desarrollo.",
      "de": "Multinationale Konzerne bringen wertvolle Investitionen und Arbeitsplätze in Entwicklungsländer."
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
      "fr": "La production de médicaments, de puces et d'armements doit rester nationale, quitte à coûter plus cher.",
      "es": "Las multinacionales deben pagar impuestos en los países donde obtienen ingresos y no desviar fondos a paraísos fiscales.",
      "de": "Internationale Großkonzerne müssen ihre Gewinne fair dort versteuern, wo ihre Kunden sind, statt in Steueroasen."
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
      "fr": "Le commerce mondial et l'ouverture des frontières ont sorti des centaines de millions d'individus de la misère.",
      "es": "Las compras públicas no deben discriminar a empresas extranjeras si ofrecen un mejor precio y calidad.",
      "de": "Öffentliche Ausschreibungen sollten ausländische Anbieter nicht benachteiligen, wenn sie das beste Preis-Leistungs-Verhältnis bieten."
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
      "fr": "La spéculation financière sur les denrées alimentaires et le pétrole devrait être totalement interdite.",
      "es": "Los gobiernos deben subsidiar y proteger industrias estratégicas emergentes frente a competidores extranjeros.",
      "de": "Regierungen sollten strategische Zukunftstechnologien durch gezielte Subventionen vor ausländischer Konkurrenz schützen."
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
      "fr": "L'importation libre de denrées et produits moins chers profite aux consommateurs en faisant baisser les prix.",
      "es": "Restringir la exportación de tecnologías avanzadas perjudica la innovación y las ventas globales.",
      "de": "Ausfuhrbeschränkungen für Hochtechnologie schaden heimischen Unternehmen und der globalen Innovation."
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
      "fr": "Les infrastructures vitales (ports, aéroports, télécoms) doivent être protégées de toute prise de contrôle par des investisseurs étrangers.",
      "es": "Se deben sancionar o bloquear comercialmente los países que violan los derechos humanos o el derecho internacional.",
      "de": "Gegen Staaten, die das Völkerrecht oder Menschenrechte brechen, müssen konsequente Handelssanktionen verhängt werden."
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
      "fr": "La liberté d'expression doit protéger y compris les propos provocateurs ou choquants sans censure étatique.",
      "es": "La libertad de expresión debe ser absoluta, incluso cuando las opiniones ofendan o incomoden a la mayoría.",
      "de": "Die Meinungsfreiheit sollte uneingeschränkt gelten, selbst wenn Aussagen andere verletzen oder empören."
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
      "fr": "Les services secrets devraient pouvoir surveiller les messageries privées sans mandat judiciaire pour des raisons de sécurité.",
      "es": "El discurso de odio y la desinformación peligrosa deben castigarse legalmente para proteger a los colectivos vulnerables.",
      "de": "Hassrede und gezielte Desinformation müssen gesetzlich verfolgt werden, um den gesellschaftlichen Frieden zu schützen."
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
      "fr": "Tout citoyen majeur et sans casier judiciaire devrait avoir le droit de posséder une arme pour protéger son foyer.",
      "es": "Los ciudadanos respetuosos de la ley deben tener derecho a poseer armas de fuego para su legítima defensa.",
      "de": "Gesetzestreue Bürger sollten das Recht haben, Schusswaffen zum Selbstschutz zu besitzen."
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
      "fr": "La police devrait pouvoir contrôler et fouiller passants et véhicules dans la rue sans soupçon préalable.",
      "es": "Las cámaras de vigilancia con reconocimiento facial en espacios públicos son necesarias para prevenir delitos graves.",
      "de": "Automatische Gesichtserkennung im öffentlichen Raum ist ein notwendiges Instrument zur Bekämpfung schwerer Kriminalität."
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
      "fr": "Installer des caméras à reconnaissance faciale dans l'espace public est un moyen efficace de lutter contre la délinquance.",
      "es": "Los adultos tienen derecho a tomar decisiones sobre su propia vida, incluido el acceso a la eutanasia voluntaria.",
      "de": "Erwachsene sollten das Recht haben, selbst über ihr Lebensende zu entscheiden, einschließlich ärztlich begleiteter Sterbehilfe."
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
      "fr": "Une personne en fin de vie ou atteinte d'une maladie incurable devrait avoir le droit à l'aide médicale à mourir (euthanasie).",
      "es": "El Estado debe vigilar el extremismo político en internet aunque implique supervisar las comunicaciones privadas.",
      "de": "Sicherheitsbehörden sollten extremistische Netzwerke im Internet überwachen dürfen, auch wenn dies private Chats betrifft."
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
      "fr": "La peine de mort devrait être rétablie pour les crimes les plus atroces.",
      "es": "El consumo de cannabis y otras drogas blandas debe legalizarse y regularse como el alcohol.",
      "de": "Der Konsum von Cannabis und weichen Drogen sollte legalisiert und wie Alkohol staatlich reguliert werden."
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
      "fr": "La détention et la consommation de cannabis pour usage personnel devraient être légalisées.",
      "es": "Las medidas excepcionales durante crisis sanitarias justifican restringir temporalmente la libertad de movimiento.",
      "de": "In schweren Gesundheitskrisen sind vorübergehende Einschränkungen der Bewegungsfreiheit gerechtfertigt."
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
      "fr": "Les citoyens majeurs devraient avoir le droit d'utiliser Internet de manière anonyme sans vérification obligatoire de carte d'identité.",
      "es": "El derecho a la protesta pacífica no debe restringirse ni someterse a autorizaciones previas de la policía.",
      "de": "Das Demonstrationsrecht sollte nicht durch strenge behördliche Auflagen und Genehmigungsverfahren eingeschränkt werden."
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
      "fr": "L'État devrait avoir le pouvoir d'imposer des confinements et des restrictions de circulation en cas d'épidémie dangereuse.",
      "es": "Las fuerzas del orden deben contar con mayores poderes para registrar a sospechosos sin órdenes judiciales previas.",
      "de": "Die Polizei sollte mehr Befugnisse erhalten, Verdächtige im öffentlichen Raum ohne richterlichen Beschluss zu kontrollieren."
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
      "fr": "L'essor de l'intelligence artificielle présente de graves risques ; les États doivent réglementer strictement ses créateurs.",
      "es": "El desarrollo de la inteligencia artificial no debe ralentizarse con normativas gubernamentales excesivas.",
      "de": "Die Weiterentwicklung künstlicher Intelligenz sollte nicht durch vorschnelle staatliche Regulierungen ausgebremst werden."
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
      "fr": "Les gouvernements ne devraient jamais contraindre les développeurs à affaiblir le chiffrement de bout en bout.",
      "es": "Los algoritmos de IA de alto impacto deben someterse a auditorías éticas obligatorias y supervisión estatal.",
      "de": "KI-Systeme mit hohem Risiko müssen verpflichtenden ethischen Prüfungen und staatlicher Aufsicht unterliegen."
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
      "fr": "L'argent liquide physique devrait être remplacé par une monnaie numérique officielle pour éliminer la fraude.",
      "es": "Las criptomonedas y las finanzas descentralizadas ofrecen una alternativa saludable al control bancario estatal.",
      "de": "Kryptowährungen und dezentrale Finanzen bieten eine gesunde Alternative zur staatlichen Kontrolle unseres Geldes."
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
      "fr": "Les cryptomonnaies et la finance décentralisée devraient pouvoir prospérer sans contrôle d'identité étatique obligatoire.",
      "es": "Los bancos centrales deben emitir monedas digitales (CBDC) para controlar mejor la política monetaria.",
      "de": "Zentralbanken sollten digitale Währungen (CBDCs) herausgeben, um die Stabilität des Geldwesens zu sichern."
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
      "fr": "L'État devrait auditer les algorithmes des réseaux sociaux pour freiner la désinformation et la haine en ligne.",
      "es": "Los usuarios deben tener derecho al cifrado inviolable de extremo a extremo sin puertas traseras gubernamentales.",
      "de": "Bürger haben ein Recht auf unknackbare Ende-zu-Ende-Verschlüsselung ohne staatliche Hintertüren."
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
      "fr": "Les fournisseurs d'accès à Internet ne doivent ni brider ni privilégier certains sites (neutralité du net).",
      "es": "Las redes sociales deben ser legalmente responsables del contenido ilegal y las noticias falsas que difunden sus usuarios.",
      "de": "Social-Media-Plattformen sollten rechtlich für illegale Inhalte und Falschmeldungen ihrer Nutzer haftbar sein."
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
      "fr": "Les manipulations génétiques visant à modifier l'ADN humain devraient être rigoureusement interdites.",
      "es": "La automatización del trabajo debe fomentarse como motor de productividad sin gravar la robótica.",
      "de": "Die Automatisierung der Arbeit sollte gefördert werden, ohne Strafsteuern auf Roboter zu erheben."
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
      "fr": "Tout logiciel développé avec des fonds publics devrait être obligatoirement publié sous licence Open Source.",
      "es": "Se debe crear un impuesto a la automatización y robots para financiar la reconversión de los trabajadores despedidos.",
      "de": "Auf Roboter und Automatisierung sollte eine Abgabe erhoben werden, um Umschulungen für Betroffene zu finanzieren."
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
      "fr": "Le chiffrement de bout en bout devrait rester un droit inviolable, même si cela complique le travail des enquêteurs.",
      "es": "El acceso a internet de alta velocidad debe considerarse un derecho humano fundamental garantizado por el Estado.",
      "de": "Ein schneller Internetzugang sollte als gesetzlich garantiertes Grundrecht für jeden Bürger gelten."
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
      "fr": "Les drones militaires autonomes et les armes dirigées par IA prenant des décisions létales doivent être totalement bannis.",
      "es": "Los gigantes de internet deben estar obligados a pagar a los medios de comunicación por enlazar sus noticias.",
      "de": "Große Suchmaschinen und Plattformen sollten Verlage für die Verlinkung redaktioneller Nachrichteninhalte bezahlen."
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
      "fr": "La lutte contre le réchauffement climatique doit être prioritaire, quitte à réduire notre niveau de consommation.",
      "es": "La transición ecológica debe ser liderada por la inversión privada y las soluciones de mercado más que por prohibiciones.",
      "de": "Die ökologische Transformation sollte vorrangig durch marktwirtschaftliche Anreize und Innovation statt Verbote gelingen."
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
      "fr": "Nous devrions exploiter notre charbon et nos énergies fossiles tant qu'ils garantissent notre souveraineté énergétique.",
      "es": "Los gobiernos deben fijar fechas límite vinculantes para prohibir la venta de vehículos de combustión y calderas de gas.",
      "de": "Der Staat sollte verbindliche Ausstiegsdaten für Verbrennungsmotoren und fossile Heizungen festlegen."
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
      "fr": "Interdire la vente des voitures thermiques neuves est une mesure punitive qui nuit au pouvoir d'achat des ménages.",
      "es": "La energía nuclear es indispensable para alcanzar la neutralidad climática y garantizar energía barata.",
      "de": "Kernenergie ist unverzichtbar, um Klimaneutralität und Versorgungssicherheit bezahlbar zu gewährleisten."
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
      "fr": "Les vols aériens intérieurs de courte distance devraient être interdits lorsqu'une liaison ferroviaire rapide existe.",
      "es": "Se debe prohibir la fracturación hidráulica (fracking) y la extracción de nuevos combustibles fósiles.",
      "de": "Fracking und die Erschließung neuer Öl- und Gasfelder sollten vollständig verboten werden."
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
      "fr": "Les normes écologiques ne devraient pas retarder la construction de routes, d'usines et de centrales majeures.",
      "es": "Los impuestos sobre el carbono aumentan injustamente el coste de vida de los trabajadores.",
      "de": "CO2-Steuern verteuern das alltägliche Leben arbeitender Menschen ungerechtfertigt."
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
      "fr": "L'élevage intensif d'animaux en cage dans les fermes industrielles devrait être totalement aboli.",
      "es": "Se debe prohibir la ganadería industrial intensiva para reducir el sufrimiento animal y las emisiones contaminantes.",
      "de": "Industrielle Massentierhaltung sollte verboten werden, um Tierleid und Treibhausgase drastisch zu reduzieren."
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
      "fr": "Les contraintes climatiques pénalisent nos économies au profit des grands pays pollueurs d'Asie.",
      "es": "La investigación y el desarrollo de organismos genéticamente modificados (OGM) debe facilitarse sin trabas.",
      "de": "Forschung und Einsatz gentechnisch veränderter Nutzpflanzen sollten ohne bürokratische Hürden ermöglicht werden."
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
      "fr": "Les zones à faibles émissions interdisant les vieux véhicules en centre-ville sont une mesure saine pour la santé.",
      "es": "Los vuelos de corta distancia que cuenten con alternativa en tren de menos de tres horas deben prohibirse.",
      "de": "Kurzstreckenflüge sollten verboten werden, wenn eine Bahnfahrt unter drei Stunden als Alternative existiert."
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
      "fr": "Les subventions aux énergies fossiles devraient être immédiatement supprimées au profit du solaire et de l'éolien.",
      "es": "La conservación de la naturaleza debe compatibilizarse siempre con los derechos de propiedad privada.",
      "de": "Naturschutzmaßnahmen sollten stets die Eigentumsrechte von Grundbesitzern und Landwirten respektieren."
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
      "fr": "Le développement d'un parc nucléaire moderne est indispensable pour assurer l'énergie du pays, malgré les contestations écologistes.",
      "es": "Los países ricos deben transferir fondos millonarios a naciones en desarrollo para la adaptación al cambio climático.",
      "de": "Industriestaaten sollten Entwicklungsländern finanzielle Hilfen für die Anpassung an den Klimawandel bereitstellen."
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
      "fr": "L'État et les religions doivent être strictement séparés, sans aucune subvention publique aux cultes.",
      "es": "Las tradiciones culturales y los valores históricos son la base de la estabilidad y cohesión de una sociedad.",
      "de": "Kulturelle Traditionen und historische Werte sind das Fundament für gesellschaftlichen Zusammenhalt und Stabilität."
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
      "fr": "Les valeurs chrétiennes et l'héritage historique doivent rester le socle de l'identité nationale et des lois.",
      "es": "Las normas culturales tradicionales a menudo perpetúan desigualdades y deben cuestionarse abiertamente.",
      "de": "Traditionelle Rollenbilder und Normen zementieren oft Ungleichheit und müssen kritisch hinterfragt werden."
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
      "fr": "Le mariage et les partenariats entre personnes du même sexe devraient bénéficier des mêmes droits que les mariages hétérosexuels.",
      "es": "El matrimonio entre personas del mismo sexo debe tener exactamente el mismo estatus legal que el tradicional.",
      "de": "Gleichgeschlechtliche Ehen sollten rechtlich und gesellschaftlich exakt dieselbe Anerkennung genießen wie traditionelle Ehen."
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
      "fr": "La famille traditionnelle formée par un homme, une femme et des enfants devrait jouir d'une protection constitutionnelle spécifique.",
      "es": "La separación estricta entre la Iglesia y el Estado es fundamental para una democracia moderna y plural.",
      "de": "Eine strikte Trennung von Kirche und Staat ist grundlegend für eine moderne, aufgeklärte Demokratie."
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
      "fr": "Toute femme devrait avoir accès à une IVG sûre et légale sur simple demande durant le premier trimestre.",
      "es": "Los símbolos religiosos deben permitirse libremente en edificios públicos, tribunales y escuelas.",
      "de": "Religiöse Symbole sollten in öffentlichen Gebäuden, Schulen und Gerichten selbstverständlich erlaubt sein."
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
      "fr": "Les symboles religieux traditionnels ont toute leur place dans les salles de classe, tribunaux et mairies.",
      "es": "El aborto debe ser un derecho legal, seguro y gratuito para cualquier mujer que lo solicite.",
      "de": "Schwangerschaftsabbrüche sollten für jede Frau legal, sicher und medizinisch kostenfrei zugänglich sein."
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
      "fr": "L'État a le devoir de préserver la culture et les coutumes nationales des influences extérieures et du conformisme mondialisé.",
      "es": "La familia tradicional formada por padre, madre e hijos es el modelo óptimo para el bienestar de los menores.",
      "de": "Die traditionelle Familie aus Vater, Mutter und Kindern bietet das beste Umfeld für das Aufwachsen von Kindern."
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
      "fr": "Les personnes transgenres devraient pouvoir modifier la mention de leur sexe à l'état civil par simple déclaration.",
      "es": "La identidad de género debe ser reconocida legalmente según la autodeterminación de la persona.",
      "de": "Die geschlechtliche Identität sollte im Personenstandsrecht auf Basis reiner Selbstbestimmung anerkannt werden."
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
      "fr": "L'éducation à la sexualité à l'école devrait être moderne et scientifique, abordant la contraception et l'égalité.",
      "es": "Las expresiones artísticas transgresoras deben respetarse sin censura de las autoridades religiosas o morales.",
      "de": "Provokante Kunst und Satire müssen ohne Zensur durch religiöse oder moralische Gruppen geschützt bleiben."
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
      "fr": "Les subventions publiques pour des œuvres offensant délibérément les sentiments religieux devraient être supprimées.",
      "es": "Las festividades nacionales patrióticas y los homenajes a héroes históricos deben promoverse activamente.",
      "de": "Patriotische Gedenktage und die Würdigung nationaler historischer Persönlichkeiten sollten aktiv gepflegt werden."
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
      "fr": "Instaurer des quotas de genre obligatoires sur les listes électorales et dans les conseils d'administration est juste.",
      "es": "Las cuotas obligatorias por género o diversidad en la política y empresas garantizan una representación justa.",
      "de": "Verbindliche Quoten für Frauen und Minderheiten in Politik und Wirtschaft sichern eine gerechte Repräsentation."
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
      "fr": "L'accès aux universités et à l'emploi devrait reposer uniquement sur les compétences réelles sans discrimination positive.",
      "es": "El mérito individual y el talento deben ser el único criterio de contratación sin cuotas de identidad.",
      "de": "Ausschließlich individuelle Leistung und Qualifikation sollten bei Einstellungen zählen, nicht Identitätsmerkmale."
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
      "fr": "Le travail du sexe consenti entre adultes devrait être une profession reconnue avec droits sociaux et retraite.",
      "es": "El trabajo sexual consentido entre adultos debe ser legalizado y regulado con derechos laborales.",
      "de": "Einvernehmliche Prostitution unter Erwachsenen sollte legalisiert und mit vollen Arbeitnehmerrechten reguliert werden."
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
      "fr": "L'éducation affective à l'école devrait valoriser la fidélité, la retenue et le mariage traditionnel.",
      "es": "Los inmigrantes deben asimilar activamente la lengua, cultura y leyes del país receptor para integrarse.",
      "de": "Zuwanderer müssen die Sprache, Gesetze und Werte des Aufnahmelandes aktiv annehmen, um sich zu integrieren."
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
      "fr": "Les personnes fuyant la guerre doivent voir leur demande d'asile examinée dignement sans refoulement brutal aux frontières.",
      "es": "Los solicitantes de asilo que huyen de guerras y persecución deben ser acogidos con plenas garantías humanitarias.",
      "de": "Kriegsflüchtlinge und politisch Verfolgte müssen unbürokratisch aufgenommen und geschützt werden."
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
      "fr": "Les prisons devraient privilégier la réinsertion, l'accompagnement et la formation plutôt que la simple punition.",
      "es": "Las leyes deben endurecer los castigos penitenciarios para criminales violentos en vez de priorizar la reinserción.",
      "de": "Strafgesetze sollten Gewalttäter härter bestrafen, statt vorrangig auf Resozialisierung zu setzen."
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
      "fr": "Les profanations d'objets de culte et les atteintes publiques aux sentiments religieux devraient être lourdement punies.",
      "es": "El sistema penal debe centrarse ante todo en la rehabilitación del preso y su reinserción en la sociedad.",
      "de": "Das Strafrecht sollte in erster Linie auf Resozialisierung und Wiedereingliederung von Tätern ausgerichtet sein."
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
      "fr": "Les autorités sanitaires devraient pouvoir imposer des obligations vaccinales assorties d'amendes financières.",
      "es": "La educación sexual integral y científica debe ser obligatoria en todas las escuelas públicas y privadas.",
      "de": "Wissenschaftlich fundierte Sexualaufklärung sollte an allen Schulen verpflichtend sein."
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
      "fr": "Les adultes devraient jouir d'une autonomie totale sur leur propre corps, y compris pour la gestation pour autrui et leurs choix de vie.",
      "es": "Los padres deben tener el derecho preferente a decidir sobre la educación moral y religiosa de sus hijos.",
      "de": "Eltern sollten das vorrangige Recht haben, über die moralische und weltanschauliche Erziehung ihrer Kinder zu bestimmen."
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
      "fr": "Le maintien de l'ordre public et de la sécurité des citoyens doit primer sur les manifestations sauvages et les blocages.",
      "es": "Las minorías históricamente marginadas merecen compensaciones o medidas de discriminación positiva.",
      "de": "Historisch benachteiligte Gruppen haben Anspruch auf staatliche Förderprogramme und Nachteilsausgleiche."
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
      "fr": "Les frontières doivent être protégées par des barrières solides et toute entrée illégale fermement repoussée.",
      "es": "Un gasto militar fuerte y la pertenencia a alianzas como la OTAN son indispensables para la disuasión geopolítica.",
      "de": "Starke Verteidigungsausgaben und das Bündnis in der NATO sind unverzichtbar für militärische Abschreckung."
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
      "fr": "Les pays européens devraient s'unir au sein d'une fédération démocratique dotée d'un gouvernement et d'une armée uniques.",
      "es": "El gasto en defensa debería reducirse a favor de la sanidad, la educación y la ayuda al desarrollo.",
      "de": "Militärausgaben sollten gesenkt werden, um Mittel für Bildung, Gesundheit und Entwicklungshilfe freizumachen."
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
      "fr": "Le service militaire obligatoire pour les jeunes devrait être rétabli afin de renforcer la résilience nationale.",
      "es": "Las fronteras nacionales deben protegerse con vallas, controles estrictos y deportaciones rápidas de irregulares.",
      "de": "Nationale Grenzen müssen durch Grenzanlagen, strikte Kontrollen und schnelle Rückführungen geschützt werden."
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
      "fr": "Les arrêts des cours internationales des droits de l'homme doivent prévaloir sur les lois votées par le parlement national.",
      "es": "La soberanía nacional debe ceder competencias a organismos internacionales para resolver retos globales.",
      "de": "Nationale Souveränität sollte an internationale Organisationen abgetreten werden, um weltweite Krisen zu lösen."
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
      "fr": "Les dépenses militaires et d'armement doivent être prioritaires, quitte à réduire d'autres budgets publics.",
      "es": "La ayuda exterior a otros países solo debe concederse si beneficia directamente los intereses del propio país.",
      "de": "Entwicklungshilfe sollte nur geleistet werden, wenn sie unmittelbar den strategischen Interessen des eigenen Landes dient."
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
      "fr": "L'humanité devrait tendre vers un monde sans frontières où chacun peut librement s'installer et travailler où il le souhaite.",
      "es": "La Unión Europea debería avanzar hacia una federación política con un ejército y política exterior comunes.",
      "de": "Die Europäische Union sollte sich zu einem demokratischen Bundesstaat mit gemeinsamer Armee entwickeln."
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
      "fr": "L'intérêt national et le bien-être de nos concitoyens doivent toujours passer avant les accords internationaux.",
      "es": "El servicio militar o civil obligatorio fortalece la disciplina, la cohesión social y el patriotismo de los jóvenes.",
      "de": "Ein verpflichtendes Dienstjahr (militärisch oder sozial) stärkt Gemeinsinn, Disziplin und Zusammenhalt der Jugend."
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
      "fr": "Les pays riches et institutions financières devraient annuler les dettes des pays les plus pauvres pour éradiquer la misère.",
      "es": "Las intervenciones militares en el extranjero suelen desestabilizar regiones y deben evitarse sin aval de la ONU.",
      "de": "Auslandseinsätze des Militärs destabilisieren oft ganze Regionen und sollten ohne UN-Mandat unterbleiben."
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
      "fr": "Face à une menace ennemie directe, l'armée devrait être autorisée à mener des frappes préventives à l'étranger.",
      "es": "La seguridad nacional justifica expulsar a residentes extranjeros que difundan propaganda extremista.",
      "de": "Ausländische Staatsangehörige, die extremistische Propaganda verbreiten, sollten konsequent ausgewiesen werden."
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
      "fr": "Toutes les puissances nucléaires devraient démanteler totalement leur arsenal atomique sous contrôle international.",
      "es": "El desarme nuclear global debe ser un objetivo prioritario incluso para las mayores potencias mundiales.",
      "de": "Die weltweite nukleare Abrüstung muss oberste Priorität haben, auch für die stärksten Atommächte."
    }
  },
  {
    "id": 121,
    "categoryKey": "economy",
    "axis": "econ",
    "multiplier": 1,
    "isQuick": false,
    "text": {
      "pl": "Inwestycje w innowacyjne startupy i wycena rynkowa nie powinny być ograniczane przez państwowe regulacje czy biurokratyczne licencje.",
      "en": "Venture capital, startup entrepreneurship, and market pricing should not be constrained by state planning or bureaucratic licensing quotas.",
      "es": "El capital de riesgo, el emprendimiento innovador y la libre fijación de precios no deben verse limitados por cuotas burocráticas o planificación estatal.",
      "de": "Risikokapital, Start-up-Unternehmertum und freie Preisbildung sollten nicht durch staatliche Planung oder bürokratische Lizenzquoten eingeschränkt werden.",
      "ru": "Венчурные инвестиции, стартапы и рыночное ценообразование не должны ограничиваться государственным планированием или бюрократическими квотами.",
      "fr": "Le capital-risque, l'entrepreneuriat et la libre fixation des prix ne doivent pas être entravés par la planification étatique ou des quotas bureaucratiques."
    }
  },
  {
    "id": 122,
    "categoryKey": "economy",
    "axis": "econ",
    "multiplier": -1,
    "isQuick": false,
    "text": {
      "pl": "Kluczowa infrastruktura komunalna, taka jak sieci wodociągowe, ciepłownicze i kolej pasażerska, powinna pozostać w rękach publicznych, a nie prywatnych monopoli.",
      "en": "Essential public utilities such as water supplies, heating grids, and passenger rail must remain publicly owned rather than run as private monopolies.",
      "es": "Los servicios públicos esenciales como el suministro de agua, las redes de calefacción y el ferrocarril de pasajeros deben permanecer en manos públicas y no de monopolios privados.",
      "de": "Grundlegende öffentliche Versorgungsnetze wie Wasserversorgung, Fernwärme und Schienenpersonenverkehr müssen in öffentlicher Hand bleiben statt als private Monopole geführt zu werden.",
      "ru": "Базовые коммунальные сети, такие как водоснабжение, отопление и пассажирские поезда, должны оставаться в государственной собственности, а не у частных монополий.",
      "fr": "Les services publics essentiels tels que les réseaux d'eau, de chauffage et le rail voyageurs doivent rester publics plutôt qu'exploités par des monopoles privés."
    }
  },
  {
    "id": 123,
    "categoryKey": "taxation",
    "axis": "econ",
    "multiplier": 1,
    "isQuick": false,
    "text": {
      "pl": "Wysokie podatki dochodowe od firm wypychają kapitał za granicę; obniżanie stawek podatkowych pobudza inwestycje i tworzy miejsca pracy.",
      "en": "High corporate tax rates drive capital abroad; lowering corporate taxation stimulates business investment and job creation.",
      "es": "Los altos impuestos de sociedades ahuyentan el capital hacia el extranjero; reducir la carga fiscal estimula la inversión y el empleo.",
      "de": "Hohe Unternehmenssteuern treiben Kapital ins Ausland; eine Senkung der Unternehmensbesteuerung stimuliert Investitionen und schafft Arbeitsplätze.",
      "ru": "Высокие налоги на прибыль корпораций вытесняют капитал за рубеж; снижение налоговых ставок стимулирует инвестиции и занятость.",
      "fr": "Des taux d'imposition élevés sur les sociétés font fuir les capitaux ; baisser la fiscalité des entreprises stimule l'investissement et crée des emplois."
    }
  },
  {
    "id": 124,
    "categoryKey": "taxation",
    "axis": "econ",
    "multiplier": -1,
    "isQuick": false,
    "text": {
      "pl": "Nadzwyczajny podatek majątkowy od wielkich fortun i dziedziczonego kapitału jest konieczny, aby powstrzymać narastające rozwarstwienie majątkowe.",
      "en": "A wealth tax on ultra-high-net-worth fortunes and multi-million inheritances is necessary to prevent extreme wealth concentration.",
      "es": "Un impuesto extraordinario al patrimonio de las grandes fortunas y herencias millonarias es necesario para frenar la desigualdad económica extrema.",
      "de": "Eine Vermögenssteuer auf Ultra-Reiche und Multimillionen-Erbschaften ist notwendig, um extremer gesellschaftlicher Vermögenskonzentration entgegenzuwirken.",
      "ru": "Специальный налог на богатство сверхбогатых людей и миллионные наследства необходим для сдерживания катастрофического имущественного неравенства.",
      "fr": "Un impôt sur la fortune ciblant les très hauts patrimoines et les successions multimillionnaires est indispensable pour contrer les inégalités extrêmes."
    }
  },
  {
    "id": 125,
    "categoryKey": "labor",
    "axis": "econ",
    "multiplier": 1,
    "isQuick": false,
    "text": {
      "pl": "Pracownicy i pracodawcy powinni mieć prawo do swobodnego ustalania warunków zatrudnienia bez narzucanych odgórnie układów zbiorowych.",
      "en": "Employees and employers should have the freedom to agree on individual employment terms without mandatory collective bargaining agreements.",
      "es": "Trabajadores y empresarios deben tener plena libertad para pactar condiciones laborales individuales sin convenios colectivos obligatorios impuestos por ley.",
      "de": "Arbeitnehmer und Arbeitgeber sollten die Freiheit haben, individuelle Arbeitsvertragsbedingungen ohne gesetzlich aufgezwungene Tarifverträge zu vereinbaren.",
      "ru": "Работники и работодатели должны иметь право свободно договариваться об индивидуальных условиях труда без принудительных отраслевых тарифных сеток.",
      "fr": "Salariés et employeurs devraient avoir la liberté de convenir de contrats de travail individuels sans conventions collectives obligatoires imposées par l'État."
    }
  },
  {
    "id": 126,
    "categoryKey": "labor",
    "axis": "econ",
    "multiplier": -1,
    "isQuick": false,
    "text": {
      "pl": "Pracownicy platform cyfrowych (np. kurierzy i kierowcy aplikacji) powinni z mocy prawa korzystać z pełnych praw pracowniczych, urlopów i zwolnień lekarskich.",
      "en": "Gig economy platform workers (e.g. delivery couriers and ride-share drivers) should legally receive full employee protections, sick pay, and benefits.",
      "es": "Los trabajadores de plataformas digitales (como repartidores y conductores) deben gozar por ley de plenos derechos laborales, bajas médicas y vacaciones pagadas.",
      "de": "Plattform- und Gig-Economy-Beschäftigte (wie Lieferkuriere und Fahrdienstleister) sollten gesetzlich vollen Arbeitnehmerstatus, Lohnfortzahlung im Krankheitsfall und Urlaubsanspruch erhalten.",
      "ru": "Работники цифровых платформ (курьеры доставки и таксисты приложений) должны по закону обладать всеми трудовыми гарантиями, больничными и отпускными.",
      "fr": "Les travailleurs des plateformes numériques (livreurs, chauffeurs VTC) devraient bénéficier légalement du statut de salarié complet, de congés payés et d'arrêts maladie."
    }
  },
  {
    "id": 127,
    "categoryKey": "welfare",
    "axis": "econ",
    "multiplier": 1,
    "isQuick": false,
    "text": {
      "pl": "Prywatne fundusze emerytalne i indywidualne konta oszczędnościowe zapewniają lepszą stopę zwrotu niż państwowy monopol emerytalny.",
      "en": "Privately managed pension accounts and individual investment funds yield better returns than state-run monopolistic social security systems.",
      "es": "Los fondos de pensiones privados y las cuentas de ahorro individuales garantizan mejores rendimientos que el monopolio estatal de la seguridad social.",
      "de": "Private Rentenfonds und individuelle Sparkonten bieten langfristig bessere Renditen und Sicherheit als ein rein staatliches Rentenmonopol.",
      "ru": "Частные пенсионные фонды и индивидуальные инвестиционные счета обеспечивают лучшую доходность, чем государственный пенсионный монополизм.",
      "fr": "Les fonds de pension privés et l'épargne individuelle offrent de meilleurs rendements et perspectives que le monopole de la retraite par répartition étatique."
    }
  },
  {
    "id": 128,
    "categoryKey": "welfare",
    "axis": "econ",
    "multiplier": -1,
    "isQuick": false,
    "text": {
      "pl": "Państwo powinno budować tanie mieszkania na wynajem i wprowadzać limity czynszów w dużych miastach, by chronić obywateli przed spekulacją.",
      "en": "The state must build public rental housing and impose rent caps in major metropolitan areas to shield residents from housing speculation.",
      "es": "El Estado debe construir viviendas públicas de alquiler accesible e imponer topes a los precios del alquiler en las grandes ciudades para frenar la especulación.",
      "de": "Der Staat muss bezahlbaren kommunalen Wohnungsbau vorantreiben und Mietpreisbremsen in Großstädten verhängen, um Bürger vor Immobilienspekulation zu schützen.",
      "ru": "Государство должно строить доступное муниципальное арендное жилье и ограничивать рост арендной платы в мегаполисах для защиты граждан от спекуляций.",
      "fr": "L'État doit construire des logements publics abordables et plafonner les loyers dans les métropoles pour protéger les citoyens de la spéculation immobilière."
    }
  },
  {
    "id": 129,
    "categoryKey": "trade",
    "axis": "econ",
    "multiplier": 1,
    "isQuick": false,
    "text": {
      "pl": "Cła i ograniczenia importowe uderzają w konsumentów; należy dążyć do całkowitego otwarcia rynków i zniesienia barier handlowych.",
      "en": "Tariffs and import quotas harm consumers and reduce innovation; countries should pursue comprehensive free trade and eliminate trade barriers.",
      "es": "Los aranceles y las cuotas de importación encarecen la vida del consumidor; los países deben promover el libre comercio integral y suprimir barreras aduaneras.",
      "de": "Zölle und Importquoten schaden Verbrauchern und behindern Wettbewerb; Staaten sollten Freihandel anstreben und alle Handelshemmnisse abbauen.",
      "ru": "Таможенные пошлины и квоты на импорт бьют по карману потребителей; необходимо развивать свободную международную торговлю без протекционистских барьеров.",
      "fr": "Les droits de douane et quotas d'importation pénalisent les consommateurs ; les nations doivent privilégier le libre-échange et démanteler les barrières commerciales."
    }
  },
  {
    "id": 130,
    "categoryKey": "trade",
    "axis": "econ",
    "multiplier": -1,
    "isQuick": false,
    "text": {
      "pl": "Rząd powinien chronić krajowe rolnictwo i strategiczną produkcję przemysłową za pomocą ceł ochronnych przed dumpingiem z zagranicy.",
      "en": "Governments should actively protect domestic farming and strategic manufacturing through defensive tariffs against cheap foreign dumping.",
      "es": "Los gobiernos deben proteger la agricultura nacional y la manufactura estratégica mediante aranceles defensivos frente al dumping extranjero.",
      "de": "Regierungen sollten heimische Landwirtschaft und strategische Industrie durch Schutzzölle vor ausländischem Preisdumping und unfairem Wettbewerb abschirmen.",
      "ru": "Правительство должно защищать отечественное сельское хозяйство и стратегическую промышленность заградительными пошлинами от иностранного демпинга.",
      "fr": "Les gouvernements doivent protéger l'agriculture nationale et l'industrie stratégique par des barrières tarifaires défensives face au dumping étranger."
    }
  },
  {
    "id": 131,
    "categoryKey": "liberties",
    "axis": "soc",
    "multiplier": 1,
    "isQuick": false,
    "text": {
      "pl": "Obywatele mają nienaruszalne prawo do szyfrowanej komunikacji (end-to-end), bez państwowych 'tylnych furtek' czy masowego skanowania wiadomości.",
      "en": "Citizens have an inviolable right to end-to-end encrypted private communication without mandatory state backdoors or mass chat surveillance.",
      "es": "Los ciudadanos tienen un derecho inalienable a la comunicación cifrada de extremo a extremo, sin puertas traseras gubernamentales ni escaneo masivo de chats.",
      "de": "Bürger haben ein unantastbares Recht auf lückenlose Ende-zu-Ende-Verschlüsselung ohne staatliche Hintertüren oder automatisierte Chat-Überwachung.",
      "ru": "Граждане имеют неотъемлемое право на сквозное шифрование переписки без обязательных бэкдоров спецслужб и массового сканирования сообщений.",
      "fr": "Les citoyens possèdent un droit fondamental au chiffrement de bout en bout sans portes dérobées imposées par l'État ni surveillance généralisée des messages."
    }
  },
  {
    "id": 132,
    "categoryKey": "liberties",
    "axis": "soc",
    "multiplier": -1,
    "isQuick": false,
    "text": {
      "pl": "W walce z przestępczością i zagrożeniami państwowymi służby porządkowe powinny móc monitorować podejrzaną korespondencję cyfrową bez długich procedur sądowych.",
      "en": "To combat crime and national threats, intelligence agencies should be empowered to intercept suspect digital communications without burdensome judicial delays.",
      "es": "Para combatir la delincuencia y las amenazas a la seguridad, las fuerzas del orden deben poder intervenir comunicaciones digitales sospechosas sin demoras judiciales.",
      "de": "Zur Bekämpfung schwerer Kriminalität und Bedrohungen sollten Sicherheitsbehörden verdächtige digitale Kommunikation ohne langwierige richterliche Verzögerungen überwachen dürfen.",
      "ru": "Для борьбы с терроризмом и криминалом спецслужбы должны иметь широкие полномочия по перехвату подозрительных цифровых данных без волокиты в судах.",
      "fr": "Pour lutter contre la criminalité et les menaces sécuritaires, les services de renseignement devraient pouvoir intercepter les communications suspectes sans délais judiciaires excessifs."
    }
  },
  {
    "id": 133,
    "categoryKey": "tech",
    "axis": "soc",
    "multiplier": 1,
    "isQuick": false,
    "text": {
      "pl": "Otwarte oprogramowanie i modele sztucznej inteligencji typu open-source powinny być swobodnie dostępne dla każdego programisty, bez państwowych licencji.",
      "en": "Open-source software and transparent artificial intelligence models must remain freely accessible to independent developers without state licensing monopolies.",
      "es": "El software de código abierto y los modelos de IA abiertos deben permanecer libres y accesibles para los desarrolladores sin licencias estatales restrictivas.",
      "de": "Open-Source-Software und offene KI-Modelle müssen für unabhängige Entwickler frei zugänglich bleiben, ohne staatliche Lizenzierungsmonopole.",
      "ru": "Открытый исходный код и открытые модели искусственного интеллекта должны быть свободно доступны разработчикам без государственных лицензионных фильтров.",
      "fr": "Les logiciels libres et les modèles d'intelligence artificielle open source doivent rester accessibles à tous sans licences d'État restrictives."
    }
  },
  {
    "id": 134,
    "categoryKey": "tech",
    "axis": "soc",
    "multiplier": -1,
    "isQuick": false,
    "text": {
      "pl": "Rozwój zaawansowanej sztucznej inteligencji niesie ryzyko egzystencjalne, dlatego wymaga ścisłej rządowej kontroli, rejestracji i państwowych audytów algorytmów.",
      "en": "Advanced frontier AI development poses severe systemic risks and must be subject to rigorous state oversight, licensing, and mandatory algorithmic audits.",
      "es": "El desarrollo de IA avanzada plantea riesgos sistémicos críticos y debe someterse a estricta supervisión gubernamental, licencias y auditorías de algoritmos.",
      "de": "Die Entwicklung fortgeschrittener Spitzen-KI birgt existenzielle systemische Risiken und erfordert strenge staatliche Aufsicht, Lizenzen und verpflichtende Audits.",
      "ru": "Развитие мощного искусственного интеллекта несет глобальные риски и требует жесткого государственного надзора, лицензирования и обязательного аудита алгоритмов.",
      "fr": "Le développement d'intelligences artificielles avancées présente des risques systémiques majeurs et doit être soumis à un contrôle étatique strict et des audits obligatoires."
    }
  },
  {
    "id": 135,
    "categoryKey": "ecology",
    "axis": "soc",
    "multiplier": 1,
    "isQuick": false,
    "text": {
      "pl": "Wszystkie dopłaty do paliw kopalnych należy natychmiast wycofać, a opłaty za emisję CO2 przeznaczyć na rozwój czystych technologii i transport publiczny.",
      "en": "All fossil fuel subsidies should be phased out immediately, with carbon tax revenues directly financing clean technology and green public transit.",
      "es": "Todos los subsidios a los combustibles fósiles deben eliminarse de inmediato, destinando la recaudación de emisiones a energías limpias y transporte público.",
      "de": "Alle Subventionen für fossile Brennstoffe sollten sofort gestrichen werden, um mit den Erlösen aus CO2-Abgaben saubere Technologien und den Nahverkehr auszubauen.",
      "ru": "Все субсидии на ископаемое топливо следует немедленно отменить, а доходы от углеродных сборов направить на чистую энергетику и общественный транспорт.",
      "fr": "Toutes les subventions aux énergies fossiles doivent être supprimées sans délai, les recettes carbone devant financer les technologies propres et les transports durables."
    }
  },
  {
    "id": 136,
    "categoryKey": "ecology",
    "axis": "soc",
    "multiplier": -1,
    "isQuick": false,
    "text": {
      "pl": "Polityka klimatyczna nie może uderzać w tradycyjny przemysł ani podnosić kosztów życia rodzin, nawet jeśli oznacza to opóźnienie celów redukcji emisji.",
      "en": "Climate regulations should not undermine heavy industrial jobs or inflate energy bills for working families, even if emission reduction targets are delayed.",
      "es": "Las regulaciones climáticas no deben destruir empleos industriales tradicionales ni encarecer la energía para las familias, aunque se retrasen las metas de emisiones.",
      "de": "Klimapolitik darf Industrie-Arbeitsplätze und bezahlbare Energie für Familien nicht gefährden, selbst wenn dadurch Klimaziele später erreicht werden.",
      "ru": "Климатическая повестка не должна разрушать промышленность и повышать коммунальные счета граждан, даже если экологические цели придется сдвинуть по срокам.",
      "fr": "Les réglementations environnementales ne doivent pas détruire l'emploi industriel traditionnel ni renchérir l'énergie pour les ménages, quitte à retarder les objectifs climatiques."
    }
  },
  {
    "id": 137,
    "categoryKey": "culture",
    "axis": "soc",
    "multiplier": 1,
    "isQuick": false,
    "text": {
      "pl": "Instytucje publiczne, urzędy i szkoły powinny zachowywać całkowitą neutralność światopoglądową i nie faworyzować żadnego wyznania religijnego.",
      "en": "Public institutions, government offices, and schools should maintain strict secular neutrality without favoring any religious faith or denomination.",
      "es": "Las instituciones públicas, administraciones y escuelas deben mantener una estricta laicidad y neutralidad sin favorecer a ninguna religión o credo.",
      "de": "Öffentliche Einrichtungen, Behörden und Schulen sollten strikte weltanschauliche Neutralität wahren und keine Religionsgemeinschaft bevorzugen.",
      "ru": "Государственные учреждения и школы должны сохранять строгий светский нейтралитет, не отдавая предпочтения никакой религиозной конфессии.",
      "fr": "Les institutions publiques et les écoles doivent respecter une neutralité laïque absolue sans favoriser aucune religion ou confession."
    }
  },
  {
    "id": 138,
    "categoryKey": "culture",
    "axis": "soc",
    "multiplier": -1,
    "isQuick": false,
    "text": {
      "pl": "Edukacja państwowa i media publiczne powinny aktywnie pielęgnować tradycyjne dziedzictwo historyczne, wartości patriotyczne i tożsamość narodową.",
      "en": "State education and public broadcasting should actively preserve historical national heritage, patriotic values, and traditional moral culture.",
      "es": "La educación pública y los medios estatales deben promover activamente el patrimonio histórico nacional, los valores patrióticos y la moral tradicional.",
      "de": "Staatliche Bildung und öffentlicher Rundfunk sollten aktiv das historische Nationalerbe, patriotische Werte und die traditionelle Kultur pflegen.",
      "ru": "Школьное образование и государственные СМИ должны активно воспитывать патриотизм, уважение к национальному историческому наследию и традиционным ценностям.",
      "fr": "L'instruction publique et les médias d'État doivent activement promouvoir le patrimoine historique national, les valeurs patriotiques et les repères traditionnels."
    }
  },
  {
    "id": 139,
    "categoryKey": "security",
    "axis": "soc",
    "multiplier": 1,
    "isQuick": false,
    "text": {
      "pl": "Dyplomacja międzynarodowa, traktaty rozbrojeniowe i współpraca wielostronna są skuteczniejszymi gwarantami pokoju niż wyścig zbrojeń i bazy wojskowe.",
      "en": "International diplomacy, disarmament treaties, and multilateral institutions are far more effective at ensuring peace than unilateral arms build-ups.",
      "es": "La diplomacia multilateral, los tratados de desarme y el derecho internacional garantizan la paz mucho mejor que las carreras armamentísticas y el militarismo.",
      "de": "Internationale Diplomatie, Abrüstungsverträge und multilaterale Zusammenarbeit sichern den Frieden weitaus verlässlicher als einseitige Aufrüstung.",
      "ru": "Международная дипломатия, договоры о разоружении и многостороннее сотрудничество надежнее гарантируют мир, чем гонка вооружений и военные базы.",
      "fr": "La diplomatie multilatérale, les traités de désarmement et le droit international garantissent la paix plus efficacement que la course aux armements."
    }
  },
  {
    "id": 140,
    "categoryKey": "security",
    "axis": "soc",
    "multiplier": -1,
    "isQuick": false,
    "text": {
      "pl": "Prawdziwe bezpieczeństwo kraju buduje się siłą oręża; wydatki na armię powinny być priorytetem, a obywatele powinni przechodzić przeszkolenie wojskowe.",
      "en": "True national security is built upon military deterrence; defense expenditure must be a top budgetary priority and military readiness expanded.",
      "es": "La auténtica seguridad nacional se basa en la disuasión militar; el gasto en defensa debe ser prioritario y la preparación militar reforzada.",
      "de": "Echte nationale Sicherheit gründet auf militärischer Abschreckung; Verteidigungsausgaben müssen oberste Priorität haben und wehrhafte Bereitschaft gestärkt werden.",
      "ru": "Настоящая безопасность государства строится на военной мощи и сдерживании; расходы на оборону и военную подготовку должны быть безусловным приоритетом.",
      "fr": "La véritable sécurité nationale repose sur la dissuasion militaire ; les dépenses de défense doivent être prioritaires et la préparation opérationnelle renforcée."
    }
  }
];

if (typeof module !== "undefined" && module.exports) {
  module.exports = { rawQuestions };
}
