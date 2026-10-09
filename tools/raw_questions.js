// 100 Pytań do Testu Politycznego w 4 językach: PL, EN, RU, FR
// 50 pytań ekonomicznych (econ), 50 pytań społeczno-światopoglądowych (soc)
// 25 z multiplier = +1, 25 z multiplier = -1 dla każdej osi.

const rawQuestions = [
  // =========================================================================
  // KATEGORIA 1: GOSPODARKA I WOLNY RYNEK (ECON: Q1 - Q10)
  // =========================================================================
  {
    id: 1,
    categoryKey: "economy",
    axis: "econ",
    multiplier: 1,
    text: {
      pl: "Wolny rynek bez zbędnych regulacji i barier administracyjnych jest najlepszym mechanizmem tworzenia bogactwa narodowego.",
      en: "The free market without excessive regulations and bureaucratic hurdles is the best mechanism for creating national wealth.",
      ru: "Свободный рынок без избыточного регулирования и бюрократических барьеров — лучший механизм создания национального богатства.",
      fr: "Le libre marché sans réglementations excessives ni obstacles bureaucratiques est le meilleur mécanisme pour créer la richesse nationale."
    }
  },
  {
    id: 2,
    categoryKey: "economy",
    axis: "econ",
    multiplier: -1,
    text: {
      pl: "Rząd powinien ustalać maksymalne ceny na podstawowe produkty żywnościowe i energię w czasach wysokiej inflacji.",
      en: "The government should impose price ceilings on essential food staples and energy during periods of high inflation.",
      ru: "Правительство должно устанавливать потолок цен на базовые продукты питания и энергию в периоды высокой инфляции.",
      fr: "Le gouvernement devrait plafonner les prix des denrées alimentaires de base et de l'énergie en période de forte inflation."
    }
  },
  {
    id: 3,
    categoryKey: "economy",
    axis: "econ",
    multiplier: 1,
    text: {
      pl: "Bankructwo nieefektywnych przedsiębiorstw jest naturalną częścią kapitalizmu i państwo nie powinno ich dotować ani ratować.",
      en: "The bankruptcy of inefficient corporations is a natural part of capitalism, and the state should not bail them out.",
      ru: "Банкротство неэффективных предприятий — естественная часть капитализма, и государство не должно их спасать за счет бюджета.",
      fr: "La faillite des entreprises inefficaces fait partie intégrante du capitalisme, et l'État ne devrait pas les renflouer."
    }
  },
  {
    id: 4,
    categoryKey: "economy",
    axis: "econ",
    multiplier: -1,
    text: {
      pl: "Państwo powinno posiadać pakiety większościowe w strategicznych przedsiębiorstwach przemysłowych i surowcowych.",
      en: "The state should hold controlling stakes in strategic industrial and mineral resources corporations.",
      ru: "Государство должно владеть контрольными пакетами акций в стратегических промышленных и сырьевых предприятиях.",
      fr: "L'État devrait détenir des participations majoritaires dans les entreprises industrielles et de ressources stratégiques."
    }
  },
  {
    id: 5,
    categoryKey: "economy",
    axis: "econ",
    multiplier: 1,
    text: {
      pl: "Przedsiębiorcy powinni mieć pełną swobodę ustalania godzin handlu swoich sklepów, w tym w niedziele i święta.",
      en: "Business owners should have total freedom to set operating hours for their shops, including Sundays and public holidays.",
      ru: "Предприниматели должны иметь полную свободу устанавливать часы работы своих магазинов, включая воскресенья и праздники.",
      fr: "Les commerçants devraient avoir la totale liberté de fixer les horaires d'ouverture de leurs magasins, y compris les dimanches."
    }
  },
  {
    id: 6,
    categoryKey: "economy",
    axis: "econ",
    multiplier: -1,
    text: {
      pl: "Kluczowe gałęzie gospodarki powinny być poddane planowaniu strategicznemu przez państwowe agencje rozwoju.",
      en: "Key economic sectors should be subject to long-term strategic guidance by public developmental agencies.",
      ru: "Ключевые отрасли экономики должны координироваться стратегическим планированием государственных агентств развития.",
      fr: "Les secteurs clés de l'économie devraient être soumis à une planification stratégique par des agences publiques de développement."
    }
  },
  {
    id: 7,
    categoryKey: "economy",
    axis: "econ",
    multiplier: 1,
    text: {
      pl: "Prywatyzacja transportu kolejowego i linii lotniczych prowadzi do lepszej jakości usług i obniżenia kosztów dla podróżnych.",
      en: "Privatization of rail transport and airlines fosters higher service quality and lower fares for travelers.",
      ru: "Приватизация железнодорожного транспорта и авиалиний повышает качество обслуживания и снижает цены для пассажиров.",
      fr: "La privatisation des chemins de fer et des compagnies aériennes améliore la qualité du service et fait baisser les tarifs."
    }
  },
  {
    id: 8,
    categoryKey: "economy",
    axis: "econ",
    multiplier: -1,
    text: {
      pl: "Zysk korporacyjny powinien być moralnie i prawnie podporządkowany dobru wspólnemu i potrzebom lokalnych społeczności.",
      en: "Corporate profits should be legally and morally subordinated to the common good and needs of local communities.",
      ru: "Корпоративная прибыль должна быть законодательно и морально подчинена общему благу и потребностям сообществ.",
      fr: "Le profit des entreprises devrait être légalement et moralement subordonné au bien commun et aux besoins des communautés."
    }
  },
  {
    id: 9,
    categoryKey: "economy",
    axis: "econ",
    multiplier: 1,
    text: {
      pl: "Rządowe dotacje dla wybranych firm zaburzają zdrową konkurencję i marnują fundusze podatników.",
      en: "Targeted state subsidies to select firms distort fair market competition and waste taxpayers' funds.",
      ru: "Адресные государственные субсидии отдельным компаниям искажают честную конкуренцию и растрачивают налоги.",
      fr: "Les subventions étatiques ciblées accordées à certaines entreprises faussent la concurrence loyale et gaspillent l'argent public."
    }
  },
  {
    id: 10,
    categoryKey: "economy",
    axis: "econ",
    multiplier: -1,
    text: {
      pl: "Państwo powinno wspierać spółdzielczość pracowniczą i własność społeczną zamiast tradycyjnej hierarchii korporacyjnej.",
      en: "The state should foster worker-owned cooperatives and collective ownership rather than corporate oligarchies.",
      ru: "Государство должно поддерживать рабочие кооперативы и коллективную собственность вместо корпоративной иерархии.",
      fr: "L'État devrait soutenir les coopératives autogérées par les travailleurs plutôt que les hiérarchies d'entreprises privées."
    }
  },

  // =========================================================================
  // KATEGORIA 2: PODATKI I FINANSE PUBLICZNE (ECON: Q11 - Q18)
  // =========================================================================
  {
    id: 11,
    categoryKey: "taxation",
    axis: "econ",
    multiplier: 1,
    text: {
      pl: "Stawka podatku dochodowego powinna być jednolita dla wszystkich (podatek liniowy), niezależnie od zarobków.",
      en: "The income tax rate should be flat and identical for all citizens, regardless of how much they earn.",
      ru: "Ставка подоходного налога должна быть единой и одинаковой для всех граждан, независимо от уровня доходов.",
      fr: "Le taux d'impôt sur le revenu devrait être proportionnel et identique pour tous, sans progressivité selon les revenus."
    }
  },
  {
    id: 12,
    categoryKey: "taxation",
    axis: "econ",
    multiplier: -1,
    text: {
      pl: "Miliarderzy i korporacje powinni płacić wysoki progresywny podatek majątkowy w celu wyrównywania nierówności.",
      en: "Billionaires and mega-corporations should pay a steep progressive wealth tax to curb extreme inequality.",
      ru: "Миллиардеры и мегакорпорации должны платить высокий прогрессивный налог на богатство для сокращения неравенства.",
      fr: "Les milliardaires et les multinationales devraient être soumis à un impôt progressif élevé sur la fortune pour réduire les inégalités."
    }
  },
  {
    id: 13,
    categoryKey: "taxation",
    axis: "econ",
    multiplier: 1,
    text: {
      pl: "Podatek od spadków i darowizn przekazywanych najbliższej rodzinie powinien zostać całkowicie zniesiony.",
      en: "Inheritance and gift taxes on wealth transferred within families should be completely eliminated.",
      ru: "Налоги на наследство и дарение имущества близким родственникам должны быть полностью отменены.",
      fr: "Les droits de succession et les taxes sur les donations familiales devraient être entièrement supprimés."
    }
  },
  {
    id: 14,
    categoryKey: "taxation",
    axis: "econ",
    multiplier: -1,
    text: {
      pl: "Transakcje na rynkach kapitałowych i spekulacja giełdowa powinny być objęte specjalnym podatkiem (tzw. podatkiem Tobina).",
      en: "Stock market speculation and high-frequency financial transactions should be subjected to a special financial transaction tax.",
      ru: "Биржевые спекуляции и высокочастотные финансовые транзакции должны облагаться специальным налогом на финансовые операции.",
      fr: "La spéculation boursière et les transactions financières devraient être frappées d'une taxe spéciale sur les transactions financières."
    }
  },
  {
    id: 15,
    categoryKey: "taxation",
    axis: "econ",
    multiplier: 1,
    text: {
      pl: "Niskie podatki od przedsiębiorstw (CIT) są najlepszym sposobem na przyciągnięcie zagranicznego kapitału technologicznego.",
      en: "Low corporate income tax rates are the most effective way to attract international technological investment.",
      ru: "Низкий корпоративный налог на прибыль — самый действенный метод привлечения международных технологических инвестиций.",
      fr: "Un impôt réduit sur les sociétés est le meilleur moyen d'attirer les investissements et les capitaux technologiques étrangers."
    }
  },
  {
    id: 16,
    categoryKey: "taxation",
    axis: "econ",
    multiplier: -1,
    text: {
      pl: "Ukrywanie dochodów w rajach podatkowych powinno być traktowane jak przestępstwo przeciwko bezpieczeństwu państwa.",
      en: "Sheltering assets in offshore tax havens should be prosecuted as a major crime against national security.",
      ru: "Укрытие капиталов в офшорных налоговых гаванях должно караться как тяжкое преступление против государства.",
      fr: "L'évasion fiscale vers les paradis fiscaux devrait être sanctionnée comme un crime grave contre la sécurité nationale."
    }
  },
  {
    id: 17,
    categoryKey: "taxation",
    axis: "econ",
    multiplier: 1,
    text: {
      pl: "Konkurencja podatkowa między państwami jest korzystna, ponieważ zmusza rządy do ograniczania rozrzutności budżetowej.",
      en: "Tax competition between sovereign states is healthy as it prevents governments from reckless public spending.",
      ru: "Налоговая конкуренция между государствами полезна, так как сдерживает правительства от бюджетного расточительства.",
      fr: "La concurrence fiscale entre nations est saine car elle contraint les gouvernements à limiter les dépenses publiques excessives."
    }
  },
  {
    id: 18,
    categoryKey: "taxation",
    axis: "econ",
    multiplier: -1,
    text: {
      pl: "Wprowadzenie globalnego, zharmonizowanego podatku od zysków korporacyjnych jest konieczne dla sprawiedliwości społecznej.",
      en: "Implementing a mandatory global minimum corporate tax rate is essential to ensure social justice worldwide.",
      ru: "Введение обязательного глобального минимального налога на прибыль корпораций критически важно для мировой справедливости.",
      fr: "L'instauration d'un taux mondial d'imposition minimal obligatoire sur les sociétés est indispensable pour la justice fiscale."
    }
  },

  // =========================================================================
  // KATEGORIA 3: PRACA, PŁACE I ZWIĄZKI ZAWODOWE (ECON: Q19 - Q26)
  // =========================================================================
  {
    id: 19,
    categoryKey: "labor",
    axis: "econ",
    multiplier: 1,
    text: {
      pl: "Płaca minimalna powinna być zlikwidowana, a wynagrodzenie powinno zależeć wyłącznie od umowy między pracownikiem a pracodawcą.",
      en: "Statutory minimum wages should be dismantled, leaving compensation purely to voluntary employer-employee agreements.",
      ru: "Государственный МРОТ следует упразднить, оставив размер оплаты исключительно на усмотрение работника и нанимателя.",
      fr: "Le salaire minimum légal devrait être aboli, laissant la rémunération au seul accord contractuel libre entre l'employé et l'employeur."
    }
  },
  {
    id: 20,
    categoryKey: "labor",
    axis: "econ",
    multiplier: -1,
    text: {
      pl: "Związki zawodowe powinny mieć prawo weta wobec decyzji zarządów o redukcji zatrudnienia i zamykaniu zakładów.",
      en: "Labor unions should hold legal veto authority over executive decisions regarding layoffs and factory closures.",
      ru: "Профсоюзы должны обладать законным правом вето в отношении решений руководства о массовых увольнениях и закрытии заводов.",
      fr: "Les syndicats devraient disposer d'un droit de veto légal sur les décisions de licenciement économique et de fermeture d'usines."
    }
  },
  {
    id: 21,
    categoryKey: "labor",
    axis: "econ",
    multiplier: 1,
    text: {
      pl: "Elastyczne umowy cywilnoprawne i praca w modelu kontraktowym (B2B) oferują więcej korzyści niż sztywny kodeks pracy.",
      en: "Flexible freelance contracts and B2B independent contracting provide greater career value than rigid labor codes.",
      ru: "Гибкие контракты самозанятых и модель B2B дают больше пользы и карьерных возможностей, чем жесткий трудовой кодекс.",
      fr: "Les contrats de travail flexibles et le statut de travailleur indépendant offrent plus d'opportunités que les codes du travail rigides."
    }
  },
  {
    id: 22,
    categoryKey: "labor",
    axis: "econ",
    multiplier: -1,
    text: {
      pl: "Standardowy tydzień pracy powinien zostać skrócony do 32-35 godzin przy zachowaniu pełnej dotychczasowej pensji.",
      en: "The standard working week should be officially shortened to 32–35 hours without any pay deductions.",
      ru: "Официальная рабочая неделя должна быть сокращена до 32–35 часов с полным сохранением заработной платы.",
      fr: "La semaine légale de travail devrait être réduite à 32-35 heures sans aucune diminution de salaire."
    }
  },
  {
    id: 23,
    categoryKey: "labor",
    axis: "econ",
    multiplier: 1,
    text: {
      pl: "Pracodawca powinien mieć prawo zwolnić pracownika w dowolnym momencie bez konieczności długiego uzasadniania.",
      en: "An employer should have the legal liberty to terminate an employment relationship at will without burdensome red tape.",
      ru: "Работодатель должен иметь право расторгнуть контракт с сотрудником в любой момент без обременительных формальностей.",
      fr: "L'employeur devrait être libre de résilier un contrat de travail à tout moment sans démarches bureaucratiques excessives."
    }
  },
  {
    id: 24,
    categoryKey: "labor",
    axis: "econ",
    multiplier: -1,
    text: {
      pl: "Duże korporacje powinny obowiązkowo przekazywać co najmniej 30% miejsc w radach nadzorczych przedstawicielom załogi.",
      en: "Large corporations should be legally required to reserve at least 30% of boardroom seats for elected worker representatives.",
      ru: "Крупные корпорации должны быть обязаны отдавать не менее 30% мест в советах директоров выборным представителям рабочих.",
      fr: "Les grandes entreprises devraient être obligées par la loi de réserver au moins 30 % des sièges de leur conseil d'administration aux salariés."
    }
  },
  {
    id: 25,
    categoryKey: "labor",
    axis: "econ",
    multiplier: 1,
    text: {
      pl: "Strajki paraliżujące transport publiczny lub energetykę powinny być zabronione, a pracownicy powinni ponosić odpowiedzialność finansową za straty.",
      en: "Strikes that disrupt public transport or energy grids should be banned, and organizers held liable for damages.",
      ru: "Забастовки, парализующие транспорт или энергосети, должны быть запрещены, а организаторы обязаны возмещать убытки.",
      fr: "Les grèves qui paralysent les transports publics ou les réseaux d'énergie devraient être interdites, avec indemnisation des préjudices."
    }
  },
  {
    id: 26,
    categoryKey: "labor",
    axis: "econ",
    multiplier: -1,
    text: {
      pl: "Postępująca automatyzacja i AI wymagają wprowadzenia specjalnego podatku od robotów przeznaczonego na fundusze pracownicze.",
      en: "Rising automation and AI warrant a dedicated robot tax to support and reskill displaced workers.",
      ru: "Развитие автоматизации и ИИ требует введения специального налога на роботов для переобучения высвобождаемых рабочих.",
      fr: "L'automatisation croissante et l'IA justifient une taxe spéciale sur les robots pour financer la reconversion des travailleurs évincés."
    }
  },

  // =========================================================================
  // KATEGORIA 4: USŁUGI PUBLICZNE I MIESZKALNICTWO (ECON: Q27 - Q34)
  // =========================================================================
  {
    id: 27,
    categoryKey: "welfare",
    axis: "econ",
    multiplier: 1,
    text: {
      pl: "Prywatne ubezpieczenia i indywidualne konta emerytalne działają znacznie efektywniej niż państwowe systemy redystrybucyjne.",
      en: "Private insurance plans and personal pension accounts operate far more efficiently than state redistribution monopolies.",
      ru: "Частное страхование и персональные пенсионные счета работают намного эффективнее государственной распределительной системы.",
      fr: "Les assurances privées et les fonds de pension individuels sont bien plus performants que les monopoles de retraite étatiques."
    }
  },
  {
    id: 28,
    categoryKey: "welfare",
    axis: "econ",
    multiplier: -1,
    text: {
      pl: "Każdy dorosły obywatel powinien otrzymywać Bezwarunkowy Dochód Podstawowy (UBI) finansowany z podatków.",
      en: "Every adult citizen should receive an unconditional Universal Basic Income (UBI) funded via progressive taxation.",
      ru: "Каждый взрослый гражданин должен получать безусловный базовый доход (ББД), финансируемый за счет налогов.",
      fr: "Chaque citoyen adulte devrait recevoir un Revenu Universel de Base (RUB) inconditionnel financé par la fiscalité."
    }
  },
  {
    id: 29,
    categoryKey: "welfare",
    axis: "econ",
    multiplier: 1,
    text: {
      pl: "Ceny wynajmu lokali mieszkalnych powinny być ustalane przez wolny rynek, a urzędowe limity czynszów tylko pogłębiają kryzys mieszkaniowy.",
      en: "Residential rents should be determined entirely by free markets; government rent controls only exacerbate housing shortages.",
      ru: "Цены на аренду жилья должны регулироваться рынком; государственные ограничения аренды лишь усугубляют дефицит жилья.",
      fr: "Les loyers d'habitation doivent être fixés par le marché libre ; le plafonnement étatique ne fait qu'aggraver la pénurie de logements."
    }
  },
  {
    id: 30,
    categoryKey: "welfare",
    axis: "econ",
    multiplier: -1,
    text: {
      pl: "Prawo do mieszkania to podstawowe prawo człowieka, dlatego państwo musi masowo budować tanie mieszkania na tani wynajem.",
      en: "Housing is a fundamental human right, requiring governments to build vast stocks of non-profit social housing.",
      ru: "Жилье — это базовое право человека, поэтому государство обязано массово строить доступные муниципальные квартиры.",
      fr: "Le logement est un droit humain fondamental, obligeant l'État à construire massivement des logements sociaux à loyer modéré."
    }
  },
  {
    id: 31,
    categoryKey: "welfare",
    axis: "econ",
    multiplier: 1,
    text: {
      pl: "Powszechne zasiłki socjalne bez warunku podjęcia pracy demotywują obywateli i pogłębiają kulturę bierności.",
      en: "Universal social cash payouts without work requirements discourage productivity and foster dependency.",
      ru: "Социальные выплаты без требования трудиться демотивируют граждан и поощряют культуру социального иждивенчества.",
      fr: "Les allocations sociales inconditionnelles sans obligation d'activité découragent le travail et favorisent l'assistanat."
    }
  },
  {
    id: 32,
    categoryKey: "welfare",
    axis: "econ",
    multiplier: -1,
    text: {
      pl: "Całodobowa opieka zdrowotna, leki ratujące życie i opieka nad osobami starszymi powinny być bezpłatne dla każdego obywatela.",
      en: "Full healthcare, life-saving pharmaceuticals, and eldercare must be completely free at the point of use for every person.",
      ru: "Здравоохранение, жизненно важные лекарства и уход за пожилыми должны быть полностью бесплатными для каждого гражданина.",
      fr: "L'accès complet aux soins, les médicaments vitaux et la prise en charge des personnes âgées doivent être totalement gratuits pour tous."
    }
  },
  {
    id: 33,
    categoryKey: "welfare",
    axis: "econ",
    multiplier: -1,
    text: {
      pl: "Mieszkania stojące puste w rękach korporacyjnych funduszy inwestycyjnych powinny być objęte drakońskim podatkiem katastralnym.",
      en: "Vacant residential apartments held speculatively by institutional funds should face punitive vacancy taxes.",
      ru: "Пустующие квартиры, скупаемые инвестиционными фондами ради спекуляции, должны облагаться драконовским налогом.",
      fr: "Les logements laissés vacants par les fonds financiers spéculatifs devraient être soumis à une taxe punitive très lourde."
    }
  },
  {
    id: 34,
    categoryKey: "welfare",
    axis: "econ",
    multiplier: 1,
    text: {
      pl: "Świadczenia socjalne powinny przysługiwać wyłącznie osobom, które przez określony czas odprowadzały składki i podatki.",
      en: "Social safety net benefits should be strictly restricted to individuals with an established record of tax contributions.",
      ru: "Социальные пособия должны предоставляться исключительно лицам с подтвержденным стажем уплаты налогов и сборов.",
      fr: "Les prestations de l'aide sociale devraient être strictement réservées aux personnes ayant un historique avéré de cotisations fiscales."
    }
  },

  // =========================================================================
  // KATEGORIA 5: PRYWATYZACJA I REGULACJE SEKTROROWE (ECON: Q35 - Q42)
  // =========================================================================
  {
    id: 35,
    categoryKey: "regulation",
    axis: "econ",
    multiplier: 1,
    text: {
      pl: "Sektor elektroenergetyczny i sieci przesyłowe powinny być otwarte na prywatną konkurencję bez monopolu państwowego.",
      en: "Electricity generation and distribution grids should operate under private market competition without state monopolies.",
      ru: "Электроэнергетика и передающие сети должны быть открыты для частной конкуренции без государственной монополии.",
      fr: "La production d'électricité et les réseaux de distribution devraient être ouverts à la concurrence privée sans monopole d'État."
    }
  },
  {
    id: 36,
    categoryKey: "regulation",
    axis: "econ",
    multiplier: -1,
    text: {
      pl: "Woda, lasy państwowe i surowce kopalne muszą stanowić wyłączną i niezbywalną własność całego narodu pod zarządem państwa.",
      en: "Water supplies, national forests, and mineral resources must remain inalienable public property managed solely by the state.",
      ru: "Водные ресурсы, леса и полезные ископаемые обязаны оставаться неотчуждаемой общественной собственностью государства.",
      fr: "L'eau, les forêts domaniales et les ressources minières doivent rester une propriété collective inaliénable gérée par l'État."
    }
  },
  {
    id: 37,
    categoryKey: "regulation",
    axis: "econ",
    multiplier: 1,
    text: {
      pl: "Większość regulacji certyfikacyjnych i licencji zawodowych to zbędne bariery chroniące korporacje przed nową konkurencją.",
      en: "Most mandatory occupational licenses and certifications serve as protectionist cartels shielding incumbents from newcomers.",
      ru: "Большинство обязательных лицензий и отраслевых сертификатов служат барьерами, защищающими монополии от новичков.",
      fr: "La majorité des licences professionnelles et des certifications obligatoires ne servent qu'à protéger les cartels en place."
    }
  },
  {
    id: 38,
    categoryKey: "regulation",
    axis: "econ",
    multiplier: -1,
    text: {
      pl: "Maksymalne zarobki prezesów spółek giełdowych nie powinny przekraczać 20-krotności średniej pensji szeregowego pracownika.",
      en: "Maximum compensation for corporate CEOs should be legally capped at no more than 20 times the average employee salary.",
      ru: "Максимальный доход топ-менеджеров корпораций не должен превышать 20-кратного размера средней зарплаты сотрудника.",
      fr: "La rémunération des dirigeants de grandes entreprises devrait être légalement plafonnée à 20 fois le salaire moyen des employés."
    }
  },
  {
    id: 39,
    categoryKey: "regulation",
    axis: "econ",
    multiplier: 1,
    text: {
      pl: "Prywatne firmy kurierskie i logistyczne radzą sobie ze sprawnym doręczaniem przesyłek o wiele lepiej niż państwowe poczty.",
      en: "Private courier logistics and transport firms handle deliveries far more reliably than inefficient government postal services.",
      ru: "Частные службы курьерской доставки справляются с пересылкой грузов намного быстрее и надежнее госструктур.",
      fr: "Les transporteurs et coursiers privés assurent l'acheminement des colis bien plus efficacement que les postes publiques d'État."
    }
  },
  {
    id: 40,
    categoryKey: "regulation",
    axis: "econ",
    multiplier: -1,
    text: {
      pl: "Państwo powinno wprowadzać dodatkowe opłaty dla wielkopowierzchniowych hipermarketów w celu obrony małych rodzinnych sklepików.",
      en: "The state should impose special levies on hypermarket mega-chains to safeguard local independent family grocers.",
      ru: "Государство должно облагать сетевые гипермаркеты специальными сборами для защиты малых семейных магазинов.",
      fr: "L'État devrait taxer lourdement les chaînes d'hypermarchés géantes afin de préserver les commerces de proximité familiaux."
    }
  },
  {
    id: 41,
    categoryKey: "regulation",
    axis: "econ",
    multiplier: 1,
    text: {
      pl: "Rezygnacja z państwowych wymogów koncesyjnych dla taksówkarzy na rzecz aplikacji typu Uber przynosi wielkie korzyści konsumentom.",
      en: "Dismantling taxi taxi-medallion licensing regimes in favor of rideshare platforms like Uber greatly benefits consumer convenience.",
      ru: "Отказ от жесткого государственного лицензирования такси в пользу приложений попутных поездок выгоден потребителям.",
      fr: "La dérégulation des licences de taxi au profit des plateformes de VTC profite directement aux consommateurs."
    }
  },
  {
    id: 42,
    categoryKey: "regulation",
    axis: "econ",
    multiplier: -1,
    text: {
      pl: "Sektor bankowy generuje zbyt wysokie zyski na marżach odsetkowych i powinien podlegać państwowym ograniczeniom spreadów.",
      en: "Commercial banks extract excessive profits through interest spreads and must be subjected to statutory profit caps.",
      ru: "Коммерческие банки извлекают чрезмерную прибыль из процентных ставок и должны подчиняться государственным лимитам маржи.",
      fr: "Les banques privées tirent des profits excessifs des taux d'intérêt et doivent être encadrées par des plafonds légaux de marges."
    }
  },

  // =========================================================================
  // KATEGORIA 6: HANDEL MIĘDZYNARODOWY I KORPORACJE (ECON: Q43 - Q50)
  // =========================================================================
  {
    id: 43,
    categoryKey: "trade",
    axis: "econ",
    multiplier: 1,
    text: {
      pl: "Brak barier celnych i nieograniczony handel transgraniczny przynosi bogactwo wszystkim narodom uczestniczącym w wymianie.",
      en: "Tariff-free borders and unfettered global commerce foster prosperity for all nations participating in voluntary trade.",
      ru: "Беспошлинная трансграничная торговля и отсутствие барьеров приносят благосостояние всем торгующим нациям.",
      fr: "L'absence de droits de douane et le commerce mondial sans entraves apportent la prospérité à toutes les nations participantes."
    }
  },
  {
    id: 44,
    categoryKey: "trade",
    axis: "econ",
    multiplier: -1,
    text: {
      pl: "Cła zaporowe na importowaną stal, elektronikę i żywność są niezbędne, by chronić rodzimy przemysł przed upadkiem.",
      en: "Protective tariffs on imported steel, electronics, and agricultural products are vital to shield domestic production.",
      ru: "Заградительные таможенные пошлины на импортную продукцию необходимы для спасения отечественного производства.",
      fr: "Des droits de douane protecteurs sur l'acier, l'électronique et l'alimentation sont vitaux pour défendre l'industrie locale."
    }
  },
  {
    id: 45,
    categoryKey: "trade",
    axis: "econ",
    multiplier: 1,
    text: {
      pl: "Swobodny przepływ kapitału przez granice jest kluczowym warunkiem dobrobytu i rządy nie powinny go kontrolować.",
      en: "Free cross-border capital mobility is an indispensable foundation of modern wealth, and governments should not restrict it.",
      ru: "Свободное трансграничное движение капитала — ключевое условие процветания, и правительства не должны его ограничивать.",
      fr: "La libre circulation internationale des capitaux est une condition vitale du développement que les gouvernements ne doivent pas restreindre."
    }
  },
  {
    id: 46,
    categoryKey: "trade",
    axis: "econ",
    multiplier: -1,
    text: {
      pl: "Wielkie korporacje technologiczne (Big Tech) zgromadziły niebezpieczną władzę monopolistyczną i powinny zostać przymusowo podzielone.",
      en: "Giant technology platforms (Big Tech) wield dangerous monopolistic control and should be broken up by antitrust authorities.",
      ru: "Гигантские технологические корпорации (Big Tech) обладают опасной монопольной властью и должны быть принудительно разделены.",
      fr: "Les géants technologiques (Big Tech) exercent un monopole menaçant et devraient être démantelés par les lois antitrust."
    }
  },
  {
    id: 47,
    categoryKey: "trade",
    axis: "econ",
    multiplier: 1,
    text: {
      pl: "Inwestorzy zagraniczni powinni cieszyć się dokładnie takimi samymi prawami i przywilejami prawnymi jak firmy krajowe.",
      en: "Foreign capital investors should enjoy identical legal protections and parity rights as local domestic companies.",
      ru: "Иностранные инвесторы должны обладать абсолютно теми же правами и правовой защитой, что и отечественные предприятия.",
      fr: "Les investisseurs étrangers devraient jouir des mêmes protections juridiques et des mêmes droits que les entreprises nationales."
    }
  },
  {
    id: 48,
    categoryKey: "trade",
    axis: "econ",
    multiplier: -1,
    text: {
      pl: "Produkcja leków, półprzewodników i uzbrojenia musi wrócić w granice kraju, nawet jeśli towary te staną się droższe.",
      en: "Manufacturing of pharmaceuticals, microchips, and weapons must be reswored domestically even if costs increase.",
      ru: "Производство медикаментов, микрочипов и вооружения должно быть возвращено внутрь страны, даже при росте себестоимости.",
      fr: "La fabrication des médicaments, des puces et des armements doit être relocalisée dans le pays, même si cela renchérit les coûts."
    }
  },
  {
    id: 49,
    categoryKey: "trade",
    axis: "econ",
    multiplier: 1,
    text: {
      pl: "Globalizacja i międzynarodowy podział pracy wyciągnęły setki milionów ludzi z nędzy i podniosły jakość życia na świecie.",
      en: "Globalization and the worldwide division of labor have lifted hundreds of millions out of extreme poverty.",
      ru: "Глобализация и международное разделение труда вывели сотни миллионов людей из нищеты и подняли уровень жизни.",
      fr: "La mondialisation et la division internationale du travail ont sorti des centaines de millions de personnes de la misère."
    }
  },
  {
    id: 50,
    categoryKey: "trade",
    axis: "econ",
    multiplier: -1,
    text: {
      pl: "Spekulacyjny handel kontraktami terminowymi na pszenicę i ropę naftową powinien być prawnie zakazany.",
      en: "Speculative trading on commodity futures for staple grain and crude oil should be completely prohibited by law.",
      ru: "Спекулятивная фьючерсная торговля продовольственным зерном и нефтью должна быть законодательно запрещена.",
      fr: "La spéculation financière sur les contrats à terme de céréales et de pétrole devrait être formellement interdite."
    }
  },

  // =========================================================================
  // KATEGORIA 7: WOLNOŚCI OBYWATELSKIE I PRYWATNOŚĆ (SOC: Q51 - Q58)
  // =========================================================================
  {
    id: 51,
    categoryKey: "liberties",
    axis: "soc",
    multiplier: 1,
    text: {
      pl: "Wolność słowa powinna chronić nawet poglądy kontrowersyjne i bulwersujące, bez cenzury i państwowego ścigania.",
      en: "Freedom of speech must protect provocative and offensive views without bureaucratic censorship or hate-speech trials.",
      ru: "Свобода слова обязана защищать даже провокационные и оскорбительные взгляды без цензуры и уголовного преследования.",
      fr: "La liberté d'expression doit protéger les opinions controversées ou choquantes sans censure étatique."
    }
  },
  {
    id: 52,
    categoryKey: "liberties",
    axis: "soc",
    multiplier: -1,
    text: {
      pl: "Służby specjalne powinny mieć możliwość monitorowania komunikatorów internetowych obywateli bez wcześniejszego nakazu sądu.",
      en: "Intelligence agencies should possess powers to intercept private digital chat messages without prior judicial warrants.",
      ru: "Спецслужбы должны иметь полномочия перехватывать электронную переписку граждан без предварительного судебного ордера.",
      fr: "Les services de renseignement devraient pouvoir intercepter les messageries chiffrées sans mandat judiciaire préalable."
    }
  },
  {
    id: 53,
    categoryKey: "liberties",
    axis: "soc",
    multiplier: 1,
    text: {
      pl: "Prawo dorosłego, niekaranego obywatela do posiadania broni palnej w celu obrony domu i rodziny powinno być zagwarantowane.",
      en: "The right of law-abiding adult citizens to own firearms for home and family protection should be respected.",
      ru: "Право законопослушных совершеннолетних граждан владеть огнестрельным оружием для защиты семьи должно быть признано.",
      fr: "Le droit de citoyens adultes sans casier à détenir des armes pour la défense de leur domicile devrait être reconnu."
    }
  },
  {
    id: 54,
    categoryKey: "liberties",
    axis: "soc",
    multiplier: -1,
    text: {
      pl: "Policja powinna mieć prawo do rutynowego przeszukiwania obywateli i ich pojazdów na ulicach bez konkretnego podejrzenia.",
      en: "Police forces should have routine authority to stop-and-frisk individuals and vehicles on public streets without suspicion.",
      ru: "Полиция должна иметь право на выборочный досмотр граждан и их автомобилей на улицах без конкретного подозрения.",
      fr: "La police devrait avoir le pouvoir d'effectuer des fouilles aléatoires d'individus et de véhicules sans soupçon précis."
    }
  },
  {
    id: 55,
    categoryKey: "liberties",
    axis: "soc",
    multiplier: -1,
    text: {
      pl: "Instalowanie kamer z automatycznym rozpoznawaniem twarzy na ulicach to dobra metoda walki z przestępczością.",
      en: "Deploying automated facial-recognition surveillance cameras in urban areas is an effective and welcome crime prevention tool.",
      ru: "Установка камер с системой автоматического распознавания лиц на улицах — правильная мера борьбы с криминалом.",
      fr: "Le déploiement de caméras à reconnaissance faciale automatisée dans l'espace public est un outil efficace de prévention."
    }
  },
  {
    id: 56,
    categoryKey: "liberties",
    axis: "soc",
    multiplier: 1,
    text: {
      pl: "Każdy człowiek powinien mieć prawo do autonomicznej decyzji o wspomaganym zakończeniu własnego życia (eutanazji).",
      en: "Every individual should hold the bodily sovereignty to request medically assisted death (euthanasia) in cases of terminal suffering.",
      ru: "Каждый человек должен иметь суверенное право на добровольную медицинскую эвтаназию в случае неизлечимых страданий.",
      fr: "Chaque individu devrait avoir la liberté de demander une aide médicale active à mourir (euthanasie) en cas de maladie incurable."
    }
  },
  {
    id: 57,
    categoryKey: "liberties",
    axis: "soc",
    multiplier: -1,
    text: {
      pl: "Kara śmierci powinna zostać przywrócona za najcięższe zbrodnie przeciwko życiu ludzkiemu.",
      en: "Capital punishment should be reinstated for the most heinous premeditated crimes against human life.",
      ru: "Смертная казнь должна быть восстановлена для самых тяжких умышленных преступлений против человеческой жизни.",
      fr: "La peine de mort devrait être rétablie pour les crimes les plus odieux et prémédités commis contre des vies humaines."
    }
  },
  {
    id: 58,
    categoryKey: "liberties",
    axis: "soc",
    multiplier: 1,
    text: {
      pl: "Posiadanie i używanie marihuany oraz innych lekkich substancji psychoaktywnych powinno być całkowicie zdekryminalizowane.",
      en: "Possession and personal use of cannabis and non-violent recreational substances should be entirely decriminalized.",
      ru: "Хранение и личное употребление каннабиса и других легких психоактивных веществ должны быть полностью декриминализованы.",
      fr: "La détention et la consommation personnelle de cannabis et de substances récréatives devraient être totalement dépénalisées."
    }
  },

  // =========================================================================
  // KATEGORIA 8: TECHNOLOGIA, AI I PRAWA CYFROWE (SOC: Q59 - Q66)
  // =========================================================================
  {
    id: 59,
    categoryKey: "tech",
    axis: "soc",
    multiplier: -1,
    text: {
      pl: "Rozwój modeli sztucznej inteligencji (AI) stwarza zagrożenie egzystencjalne i państwa powinny wprowadzić obowiązkowe licencje na ich trenowanie.",
      en: "Frontier Artificial Intelligence (AI) poses existential risks, justifying mandatory state licensing before training new models.",
      ru: "Развитие искусственного интеллекта несет экзистенциальные риски, требующие обязательного гослицензирования моделей.",
      fr: "L'IA avancée présente des risques existentiels justifiant un régime de licences étatiques obligatoires avant tout entraînement."
    }
  },
  {
    id: 60,
    categoryKey: "tech",
    axis: "soc",
    multiplier: 1,
    text: {
      pl: "Silne szyfrowanie end-to-end to fundamentalne prawo obywateli i rządy nie mają prawa wymuszać tylnych furtek (backdoor).",
      en: "End-to-end mathematical encryption is a fundamental civil right; governments must never force built-in backdoors.",
      ru: "Сквозное шифрование — неотъемлемое право граждан; государства не вправе принуждать компании внедрять скрытые бэкдоры.",
      fr: "Le chiffrement de bout en bout est un droit civique fondamental ; l'État ne doit jamais imposer de portes dérobées."
    }
  },
  {
    id: 61,
    categoryKey: "tech",
    axis: "soc",
    multiplier: -1,
    text: {
      pl: "Gotówka papierowa powinna zostać zastąpiona cyfrową walutą banku centralnego (CBDC) w celu eliminacji szarej strefy.",
      en: "Physical paper cash should be phased out in favor of programmable Central Bank Digital Currencies (CBDCs).",
      ru: "Наличные деньги следует постепенно заменить цифровой валютой центрального банка (ЦВЦБ) для прозрачности.",
      fr: "L'argent liquide physique devrait être progressivement remplacé par des monnaies numériques de banque centrale (MNBC)."
    }
  },
  {
    id: 62,
    categoryKey: "tech",
    axis: "soc",
    multiplier: 1,
    text: {
      pl: "Kryptowaluty i finanse zdecentralizowane (DeFi) powinny rozwijać się wolne od przymusu weryfikacji tożsamości przez państwo.",
      en: "Cryptocurrencies and decentralized protocols should thrive without state-mandated surveillance or identity checks.",
      ru: "Криптовалюты и протоколы DeFi должны развиваться свободно от обязательной государственной верификации личности.",
      fr: "Les cryptomonnaies et les protocoles DeFi devraient prospérer librement sans surveillance étatique d'identité obligatoire."
    }
  },
  {
    id: 63,
    categoryKey: "tech",
    axis: "soc",
    multiplier: -1,
    text: {
      pl: "Rządy powinny weryfikować algorytmy rekomendacji w mediach społecznościowych, aby zapobiegać polaryzacji i fake newsom.",
      en: "Governments should actively inspect social network recommendation algorithms to curb societal polarization and fake news.",
      ru: "Государства должны контролировать рекомендательные алгоритмы соцсетей для борьбы с дезинформацией и поляризацией.",
      fr: "Les pouvoirs publics devraient inspecter les algorithmes des réseaux sociaux afin de freiner la désinformation."
    }
  },
  {
    id: 64,
    categoryKey: "tech",
    axis: "soc",
    multiplier: 1,
    text: {
      pl: "Zasada neutralności sieci (Net Neutrality) musi gwarantować równy dostęp do każdego serwisu bez blokad ze strony operatorów.",
      en: "Net neutrality must strictly guarantee that telecom providers cannot throttle or prioritize specific internet traffic.",
      ru: "Сетевой нейтралитет обязан гарантировать равный доступ ко всем сайтам без замедлений со стороны интернет-провайдеров.",
      fr: "La neutralité du net doit garantir un accès égal à tous les sites sans filtrage ni bridage par les fournisseurs d'accès."
    }
  },
  {
    id: 65,
    categoryKey: "tech",
    axis: "soc",
    multiplier: -1,
    text: {
      pl: "Eksperymenty nad inżynierią genetyczną i modyfikacją ludzkiego DNA powinny zostać całkowicie zakazane z powodów etycznych.",
      en: "Human germline genetic engineering and embryo DNA editing should be globally prohibited on moral grounds.",
      ru: "Генная модификация эмбрионов человека должна быть всемирно запрещена по морально-этическим соображениям.",
      fr: "La modification génétique de l'ADN d'embryons humains devrait être formellement interdite pour des raisons éthiques."
    }
  },
  {
    id: 66,
    categoryKey: "tech",
    axis: "soc",
    multiplier: 1,
    text: {
      pl: "Każdy kod źródłowy sfinansowany z pieniędzy publicznych powinien być bezwzględnie publikowany na otwartych licencjach Open Source.",
      en: "All public software code created using taxpayer money should be mandatory Open Source under permissive licensing.",
      ru: "Любой программный код, профинансированный за счет налогоплательщиков, обязан выкладываться в открытый доступ (Open Source).",
      fr: "Tout code source logiciel financé par les deniers publics devrait obligatoirement être publié sous licence Open Source."
    }
  },

  // =========================================================================
  // KATEGORIA 9: KLIMAT, EKOLOGIA I ENERGETYKA (SOC: Q67 - Q74)
  // =========================================================================
  {
    id: 67,
    categoryKey: "ecology",
    axis: "soc",
    multiplier: 1,
    text: {
      pl: "Osiągnięcie neutralności klimatycznej do 2050 roku powinno być nadrzędnym celem, nawet kosztem ograniczenia konsumpcji.",
      en: "Reaching net-zero carbon emissions by 2050 must take absolute priority, even if it requires lifestyle and consumption cutbacks.",
      ru: "Достижение нулевых выбросов углерода к 2050 году должно быть приоритетом, даже ценой сокращения потребления.",
      fr: "L'atteinte de la neutralité carbone d'ici 2050 doit être une priorité absolue, quitte à réduire la surconsommation."
    }
  },
  {
    id: 68,
    categoryKey: "ecology",
    axis: "soc",
    multiplier: -1,
    text: {
      pl: "Krajowe złoża węgla i paliw kopalnych powinny być eksploatowane tak długo, jak długo gwarantują suwerenność energetyczną.",
      en: "Domestic fossil fuel and coal reserves should be fully extracted as long as they provide sovereign energy independence.",
      ru: "Отечественные месторождения угля и ископаемого топлива должны разрабатываться, пока гарантируют энергонезависимость.",
      fr: "Les réserves locales de combustibles fossiles et de charbon doivent être exploitées tant qu'elles assurent l'indépendance énergétique."
    }
  },
  {
    id: 69,
    categoryKey: "ecology",
    axis: "soc",
    multiplier: -1,
    text: {
      pl: "Zakaz sprzedaży nowych samochodów spalinowych to nieuzasadnione uderzenie w prawa kierowców i wolność wyboru.",
      en: "Prohibiting the sale of new combustion-engine vehicles is an unjustified assault on consumer choice and mobility rights.",
      ru: "Запрет продажи новых автомобилей с двигателями внутреннего сгорания — необоснованный удар по свободе выбора водителей.",
      fr: "L'interdiction de vente des voitures thermiques neuves constitue une atteinte injustifiée à la liberté de choix des automobilistes."
    }
  },
  {
    id: 70,
    categoryKey: "ecology",
    axis: "soc",
    multiplier: 1,
    text: {
      pl: "Krótkodystansowe loty pasażerskie powinny zostać zlikwidowane na trasach, gdzie istnieje alternatywa w postaci kolei dużych prędkości.",
      en: "Short-haul domestic airline flights should be banned where high-speed passenger rail alternatives exist.",
      ru: "Короткие авиарейсы должны быть отменены на маршрутах, где курсируют скоростные пассажирские поезда.",
      fr: "Les vols aériens intérieurs sur courtes distances devraient être interdits lorsqu'une liaison ferroviaire à grande vitesse existe."
    }
  },
  {
    id: 71,
    categoryKey: "ecology",
    axis: "soc",
    multiplier: -1,
    text: {
      pl: "Rygorystyczne normy środowiskowe powinny być zawieszane, jeśli opóźniają budowę kluczowych fabryk czy dróg.",
      en: "Environmental regulatory procedures should be waived whenever they delay critical highway or industrial construction.",
      ru: "Экологические экспертизы следует временно отменять, если они задерживают строительство важных заводов и автомагистралей.",
      fr: "Les normes environnementales devraient être suspendues lorsqu'elles retardent la construction d'usines stratégiques ou d'axes routiers."
    }
  },
  {
    id: 72,
    categoryKey: "ecology",
    axis: "soc",
    multiplier: 1,
    text: {
      pl: "Przemysłowy chów klatkowy zwierząt gospodarskich powinien zostać całkowicie zdelegalizowany z powodów humanitarnych.",
      en: "Intensive industrial battery-cage factory farming of animals should be completely outlawed on ethical grounds.",
      ru: "Промышленное клеточное содержание скота на фабриках должно быть полностью запрещено из гуманных соображений.",
      fr: "L'élevage intensif en cage des animaux d'élevage devrait être définitivement interdit pour des raisons éthiques."
    }
  },
  {
    id: 73,
    categoryKey: "ecology",
    axis: "soc",
    multiplier: -1,
    text: {
      pl: "Międzynarodowe porozumienia klimatyczne osłabiają gospodarki państw zachodnich na korzyść azjatyckich emitentów CO2.",
      en: "Multilateral climate treaties unfairly handicap Western industry while allowing Asian competitors to expand carbon emissions.",
      ru: "Международные климатические соглашения подрывают западную промышленность, пока азиатские страны наращивают выбросы.",
      fr: "Les traités climatiques multilatéraux pénalisent injustement l'industrie occidentale au profit des pollueurs d'Asie."
    }
  },
  {
    id: 74,
    categoryKey: "ecology",
    axis: "soc",
    multiplier: 1,
    text: {
      pl: "Wprowadzenie stref czystego transportu i opłat za wjazd aut do centrów miast to właściwa polityka na rzecz zdrowia mieszkańców.",
      en: "Designating low-emission vehicle zones and inner-city congestion pricing is necessary public policy for urban health.",
      ru: "Создание экологических зон с платным въездом в центры городов — правильная политика в интересах здоровья горожан.",
      fr: "Créer des zones à faibles émissions et péages urbains au centre des villes est une mesure indispensable de santé publique."
    }
  },

  // =========================================================================
  // KATEGORIA 10: KULTURA, TRADYCJA I RELIGIA (SOC: Q75 - Q82)
  // =========================================================================
  {
    id: 75,
    categoryKey: "culture",
    axis: "soc",
    multiplier: 1,
    text: {
      pl: "Religia powinna być całkowicie oddzielona od instytucji państwowych, a związki wyznaniowe nie powinny otrzymywać dotacji z podatków.",
      en: "Religious bodies should be entirely separated from state institutions, receiving zero financial backing from tax revenue.",
      ru: "Церковь должна быть полностью отделена от государственных институтов и не получать бюджетных дотаций.",
      fr: "Les cultes religieux doivent être strictement séparés des institutions publiques et ne recevoir aucun subside de l'impôt."
    }
  },
  {
    id: 76,
    categoryKey: "culture",
    axis: "soc",
    multiplier: -1,
    text: {
      pl: "Tradycyjne wartości chrześcijańskie i dziedzictwo historyczne powinny stanowić fundament tożsamości narodowej i prawa.",
      en: "Traditional Christian morality and historic heritage should serve as the foundational bedrock of national identity and law.",
      ru: "Традиционные христианские ценности и историческое наследие обязаны быть основой национальной идентичности и права.",
      fr: "Les valeurs traditionnelles chrétiennes et l'héritage historique doivent être le socle de l'identité nationale et du droit."
    }
  },
  {
    id: 77,
    categoryKey: "culture",
    axis: "soc",
    multiplier: 1,
    text: {
      pl: "Związki partnerskie i małżeństwa osób tej samej płci powinny być w pełni zalegalizowane i zrównane w prawach z małżeństwami tradycyjnymi.",
      en: "Civil partnerships and same-sex marriages should be fully legalized with identical adoption and marital rights.",
      ru: "Гражданские союзы и однополые браки должны быть полностью узаконены и уравнены в правах с традиционными семьями.",
      fr: "Le mariage pour tous et l'adoption plénière pour les couples de même sexe doivent être légalisés dans la stricte égalité des droits."
    }
  },
  {
    id: 78,
    categoryKey: "culture",
    axis: "soc",
    multiplier: -1,
    text: {
      pl: "Tradycyjna rodzina złożona z kobiety, mężczyzny i dzieci powinna cieszyć się szczególnym, nadrzędnym statusem w konstytucji.",
      en: "The traditional family of mother, father, and biological children deserves a distinct and superior constitutional status.",
      ru: "Традиционная семья из мужчины, женщины и детей должна обладать особым главенствующим статусом в конституции.",
      fr: "La famille traditionnelle formée d'un père, d'une mère et d'enfants mérite un statut constitutionnel prioritaire et protégé."
    }
  },
  {
    id: 79,
    categoryKey: "culture",
    axis: "soc",
    multiplier: 1,
    text: {
      pl: "Kobieta powinna mieć zagwarantowane prawo do bezpiecznego i legalnego przerwania ciąży na własne życzenie w pierwszym trymestrze.",
      en: "Women must possess the legal guarantee to terminate a pregnancy safely upon request during the first trimester.",
      ru: "Женщина должна иметь гарантированное законом право на безопасный аборт по личному решению в первом триместре.",
      fr: "Chaque femme doit disposer du droit garanti à une interruption volontaire de grossesse sûre et légale au premier trimestre."
    }
  },
  {
    id: 80,
    categoryKey: "culture",
    axis: "soc",
    multiplier: -1,
    text: {
      pl: "Symbole religijne (np. krzyże) powinny być stale obecne w salach lekcyjnych, gmachach sądów i urzędach państwowych.",
      en: "Religious symbols such as crucifixes should have a permanent presence in public classrooms and courtrooms.",
      ru: "Религиозные символы (напр. кресты) должны постоянно присутствовать в школьных классах и залах судебных заседаний.",
      fr: "Les symboles religieux traditionnels devraient être présents de façon permanente dans les salles d'école et tribunaux publics."
    }
  },
  {
    id: 81,
    categoryKey: "culture",
    axis: "soc",
    multiplier: -1,
    text: {
      pl: "Państwo ma moralny obowiązek bronić rdzennej kultury przed obcymi wpływami obyczajowymi i zamerykanizowaną popkulturą.",
      en: "The sovereign state has a moral imperative to defend local cultural heritage against alien foreign cultural hegemony.",
      ru: "Государство обязано защищать самобытную культуру от чужеродных нравов и насаждаемой глобальной поп-культуры.",
      fr: "L'État a le devoir moral de protéger le patrimoine culturel local contre les influences étrangères et la mondialisation culturelle."
    }
  },
  {
    id: 82,
    categoryKey: "culture",
    axis: "soc",
    multiplier: 1,
    text: {
      pl: "Osoby transpłciowe powinny mieć możliwość prawnej zmiany oznaczenia płci na drodze prostego oświadczenia woli.",
      en: "Transgender individuals should be legally allowed to update their official gender marker via simple personal self-declaration.",
      ru: "Трансгендерные люди должны иметь право менять гендерный маркер в документах по простому личному заявлению.",
      fr: "Les personnes transgenres devraient pouvoir modifier la mention de leur genre à l'état civil par simple déclaration sur l'honneur."
    }
  },

  // =========================================================================
  // KATEGORIA 11: PRAWA CZŁOWIEKA I KWESTIE SPOŁECZNE (SOC: Q83 - Q90)
  // =========================================================================
  {
    id: 83,
    categoryKey: "society",
    axis: "soc",
    multiplier: 1,
    text: {
      pl: "Parytety płci na listach wyborczych i w zarządach spółek skarbu państwa są sprawiedliwym narzędziem wyrównywania szans.",
      en: "Statutory gender parity quotas on electoral slates and state enterprise boards are an essential tool for equity.",
      ru: "Гендерные квоты в избирательных списках и советах директоров госкомпаний — справедливый инструмент равенства.",
      fr: "Les quotas paritaires obligatoires sur les listes électorales et conseils d'administration sont indispensables à l'égalité."
    }
  },
  {
    id: 84,
    categoryKey: "society",
    axis: "soc",
    multiplier: -1,
    text: {
      pl: "Przyjęcia na uniwersytety i rekrutacja do pracy powinny zależeć wyłącznie od wyników testów merytorycznych, a nie od pochodzenia.",
      en: "University admissions and professional appointments should solely rely on meritocratic scores, prohibiting diversity quotas.",
      ru: "Прием в университеты и на работу должен зависеть исключительно от личных знаний и результатов, без учета расы и пола.",
      fr: "Les admissions universitaires et les embauches doivent dépendre uniquement des compétences, sans discrimination positive."
    }
  },
  {
    id: 85,
    categoryKey: "society",
    axis: "soc",
    multiplier: 1,
    text: {
      pl: "Świadczenie usług seksualnych przez dorosłe osoby za obopólną zgodą powinno być legalnym zawodem z prawami pracowniczymi.",
      en: "Consensual adult sex work should be fully legalized as a standard profession with formal labor rights and benefits.",
      ru: "Добровольное оказание секс-услуг совершеннолетними должно быть легальной профессией со всеми трудовыми правами.",
      fr: "Le travail du sexe consenti entre adultes devrait être pleinement légalisé comme toute profession salariée ou indépendante."
    }
  },
  {
    id: 86,
    categoryKey: "society",
    axis: "soc",
    multiplier: -1,
    text: {
      pl: "Edukacja seksualna w szkołach powinna koncentrować się na czystości przedmałżeńskiej i biologicznych aspektach rodzicielstwa.",
      en: "School health curriculum regarding sexuality should focus strictly on abstinence, marriage, and biological reproduction.",
      ru: "Половое воспитание в школах должно концентрироваться на целомудрии до брака и биологической роли деторождения.",
      fr: "L'éducation sexuelle à l'école devrait se concentrer principalement sur la vie maritale et la biologie de la reproduction."
    }
  },
  {
    id: 87,
    categoryKey: "society",
    axis: "soc",
    multiplier: 1,
    text: {
      pl: "Uchodźcy uciekający przed wojną i dyktaturą powinni mieć gwarancję rzetelnego rozpatrzenia wniosku o azyl bez zawracania na granicy.",
      en: "Refugees fleeing armed conflict and authoritarian terror must be shielded from pushbacks and afforded fair asylum trials.",
      ru: "Беженцы от войн и диктатур должны быть защищены от выдворения и иметь право на справедливое рассмотрение заявлений.",
      fr: "Les réfugiés fuyant les conflits et la tyrannie doivent être protégés des refoulements et bénéficier d'une procédure d'asile équitable."
    }
  },
  {
    id: 88,
    categoryKey: "society",
    axis: "soc",
    multiplier: 1,
    text: {
      pl: "Zakłady karne powinny skupiać się na resocjalizacji, psychoterapii i integracji ze społeczeństwem, a nie na surowej izolacji.",
      en: "Correctional institutions should focus on human rehabilitation, therapy, and social integration rather than retribution.",
      ru: "Исправительные учреждения должны делать упор на психологическую реабилитацию и адаптацию, а не на жестокое наказание.",
      fr: "Les prisons devraient être axées sur la réinsertion sociale, les soins psychologiques et l'apprentissage plutôt que sur la vengeance."
    }
  },
  {
    id: 89,
    categoryKey: "society",
    axis: "soc",
    multiplier: -1,
    text: {
      pl: "Przepisy o obrazie uczuć religijnych i profanacji przedmiotów kultu powinny być surowo egzekwowane przez prokuraturę.",
      en: "Blasphemy laws and penal statutes prosecuting religious insult should be rigorously enforced by public prosecutors.",
      ru: "Законы об оскорблении чувств верующих и осквернении святынь должны строго применяться правоохранительными органами.",
      fr: "Les lois réprimant l'atteinte aux convictions religieuses et la profanation des symboles de culte doivent être appliquées avec fermeté."
    }
  },
  {
    id: 90,
    categoryKey: "society",
    axis: "soc",
    multiplier: -1,
    text: {
      pl: "Władze państwowe mają prawo wprowadzać powszechne obowiązkowe szczepienia ochronne pod rygorem kar administracyjnych.",
      en: "State governments possess the legitimate power to mandate universal vaccination under threat of civil penalties in epidemics.",
      ru: "Государство имеет законное право вводить всеобщую обязательную вакцинацию под угрозой административных штрафов.",
      fr: "Les pouvoirs publics sont légitimes à rendre la vaccination universelle obligatoire sous peine de sanctions lors d'épidémies."
    }
  },

  // =========================================================================
  // KATEGORIA 12: BEZPIECZEŃSTWO, GRANICE I GEOPOLITYKA (SOC: Q91 - Q100)
  // =========================================================================
  {
    id: 91,
    categoryKey: "security",
    axis: "soc",
    multiplier: -1,
    text: {
      pl: "Granice państwa powinny być zabezpieczone wysokimi barierami inżynieryjnymi, a próby ich nielegalnego przekroczenia natychmiast udaremniane.",
      en: "National borders must be fortified with physical barriers, with illegal crossings stopped through immediate expulsion.",
      ru: "Государственные границы должны быть защищены капитальными барьерами, а нелегальные пересечения жестко пресекаться.",
      fr: "Les frontières de l'État doivent être protégées par des barrières physiques et toute entrée illégale immédiatement repoussée."
    }
  },
  {
    id: 92,
    categoryKey: "security",
    axis: "soc",
    multiplier: 1,
    text: {
      pl: "Kraje europejskie powinny stopniowo przekazywać kompetencje do wspólnej federacji ze wspólnym rządem i unijną armią.",
      en: "European states should progressively pool sovereignty into a united federal union with a joint defense and foreign ministry.",
      ru: "Европейские страны должны постепенно объединиться в единую федерацию с общим правительством и союзной армией.",
      fr: "Les pays européens devraient progressivement fédérer leur souveraineté au sein d'une fédération dotée d'une armée commune."
    }
  },
  {
    id: 93,
    categoryKey: "security",
    axis: "soc",
    multiplier: -1,
    text: {
      pl: "Obowiązkowy pobór do wojska dla młodych obywateli powinien zostać przywrócony w celu budowania odporności obronnej.",
      en: "Mandatory military conscription for young citizens should be reintroduced to forge national defense readiness.",
      ru: "Обязательная срочная служба в армии для молодежи должна быть возвращена ради укрепления обороноспособности.",
      fr: "Le service militaire obligatoire pour les jeunes citoyens devrait être rétabli afin de renforcer la préparation à la défense."
    }
  },
  {
    id: 94,
    categoryKey: "security",
    axis: "soc",
    multiplier: 1,
    text: {
      pl: "Orzeczenia międzynarodowych trybunałów praw człowieka i rezolucje ONZ powinny stać ponad ustawami uchwalanymi przez parlament narodowy.",
      en: "Rulings of international human rights tribunals and UN conventions should rank above laws enacted by domestic parliaments.",
      ru: "Решения международных судов по правам человека и конвенции ООН должны иметь верховенство над законами национальных парламентов.",
      fr: "Les arrêts des cours internationales des droits de l'homme et les traités de l'ONU doivent prévaloir sur les lois nationales."
    }
  },
  {
    id: 95,
    categoryKey: "security",
    axis: "soc",
    multiplier: -1,
    text: {
      pl: "Wydatki na zbrojenia i armię powinny wynosić przynajmniej 3-4% PKB, nawet jeśli oznacza to cięcia w innych działach budżetu.",
      en: "Defense expenditure must reach at least 3–4% of GDP even if it requires budgetary cuts to domestic public programs.",
      ru: "Расходы на армию и вооружения должны составлять не менее 3–4% ВВП, даже если это требует урезания гражданских программ.",
      fr: "Le budget de la défense doit atteindre au moins 3 à 4 % du PIB, même si cela impose des coupes dans d'autres dépenses publiques."
    }
  },
  {
    id: 96,
    categoryKey: "security",
    axis: "soc",
    multiplier: 1,
    text: {
      pl: "Ludzkość powinna dążyć do świata otwartych granic, gdzie każdy ma prawo swobodnego osiedlania się w dowolnym zakątku planety.",
      en: "Humanity should strive for an open-borders world where any person enjoys universal freedom of global movement and settlement.",
      ru: "Человечество должно стремиться к миру открытых границ, где любой гражданин свободен жить в любой точке планеты.",
      fr: "L'humanité devrait tendre vers un monde sans frontières où chacun est libre de voyager et de s'établir où il le souhaite."
    }
  },
  {
    id: 97,
    categoryKey: "security",
    axis: "soc",
    multiplier: -1,
    text: {
      pl: "Własny interes narodowy i pomyślność własnych obywateli musi zawsze bezwzględnie stać ponad międzynarodowymi zobowiązaniami.",
      en: "National self-interest and citizen welfare must unconditionally take precedence over all international commitments.",
      ru: "Собственные национальные интересы и благополучие граждан должны безусловно стоять выше международных обязательств.",
      fr: "L'intérêt national souverain et le bien-être des concitoyens doivent toujours primer sur les engagements internationaux."
    }
  },
  {
    id: 98,
    categoryKey: "security",
    axis: "soc",
    multiplier: 1,
    text: {
      pl: "Długi krajów rozwijających się wobec instytucji międzynarodowych powinny zostać umorzone na rzecz walki z globalną nędzą.",
      en: "Sovereign debts owed by developing nations to international banks should be canceled to tackle systemic global poverty.",
      ru: "Долги развивающихся государств перед международными финансовыми институтами должны быть списаны ради борьбы с нищетой.",
      fr: "La dette souveraine des pays du Sud envers les institutions financières internationales devrait être annulée pour éradiquer la pauvreté."
    }
  },
  {
    id: 99,
    categoryKey: "security",
    axis: "soc",
    multiplier: -1,
    text: {
      pl: "Państwo ma pełne prawo do uderzeń prewencyjnych i tajnych operacji militarnych za granicą, gdy zagraża mu wrogie mocarstwo.",
      en: "A sovereign nation possesses the right to launch preemptive military strikes abroad when facing credible hostile threats.",
      ru: "Суверенное государство имеет полное право наносить упреждающие военные удары за рубежом при угрозе безопасности.",
      fr: "Un État souverain est pleinement fondé à mener des frappes militaires préventives à l'étranger face à une menace sérieuse."
    }
  },
  {
    id: 100,
    categoryKey: "security",
    axis: "soc",
    multiplier: 1,
    text: {
      pl: "Wszystkie mocarstwa powinny podpisać traktat o całkowitym rozbrojeniu nuklearnym pod międzynarodową kontrolą obywatelską.",
      en: "All nuclear-armed powers should sign a binding treaty for complete nuclear disarmament under global civilian inspection.",
      ru: "Все ядерные державы обязаны заключить договор о полном ядерном разоружении под независимым контролем.",
      fr: "Toutes les puissances nucléaires devraient signer un traité de désarmement nucléaire total sous contrôle citoyen mondial."
    }
  }
];

if (typeof module !== "undefined" && module.exports) {
  module.exports = { rawQuestions };
}
