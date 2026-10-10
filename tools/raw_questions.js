// tools/raw_questions.js
// 150 Pytań do Testu Politycznego w 6 językach: PL, EN, ES, DE, RU, FR
// 75 pytań ekonomicznych (econ: 38 pos, 37 neg), 75 pytań społeczno-światopoglądowych (soc: 37 pos, 38 neg)
// Całkowita suma mnożników w całym teście: 0.
// Wersja Szybka (isQuick: true): 30 pytań (15 econ, 15 soc, suma = 0) obejmujących wszystkie 12 dziedzin.
// Wersja Pełna: 150 pytań pogrupowanych blokowo w 12 dziedzinach, sformułowanych w sposób prosty,
// jednoznaczny i bezpośredni ("jednostronnie zrozumiałe").

const rawQuestions = [
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
      "pl": "Kluczowe gałęzie przemysłu i kopalnie powinny należeć do państwa.",
      "en": "Key strategic industries and mines should be owned by the state.",
      "es": "Las industrias estratégicas y las minas deben ser propiedad del Estado.",
      "de": "Strategische Industriezweige und Bergbau sollten dem Staat gehören.",
      "ru": "Ключевые отрасли промышленности и шахты должны принадлежать государству.",
      "fr": "Les industries stratégiques et les mines devraient appartenir à l'État."
    }
  },
  {
    "id": 5,
    "categoryKey": "economy",
    "axis": "econ",
    "multiplier": 1,
    "isQuick": false,
    "text": {
      "pl": "Handel w niedziele i święta powinien być w pełni dozwolony.",
      "en": "Retail stores should be fully allowed to open on Sundays and holidays.",
      "es": "El comercio los domingos y días festivos debe estar totalmente permitido.",
      "de": "Der Handel an Sonn- und Feiertagen sollte uneingeschränkt erlaubt sein.",
      "ru": "Торговля по воскресеньям и праздничным дням должна быть полностью разрешена.",
      "fr": "Le commerce le dimanche et les jours fériés devrait être totalement autorisé."
    }
  },
  {
    "id": 6,
    "categoryKey": "economy",
    "axis": "econ",
    "multiplier": -1,
    "isQuick": false,
    "text": {
      "pl": "Rząd powinien centralnie planować i kierować rozwojem gospodarki.",
      "en": "The government should centrally plan and guide national economic development.",
      "es": "El gobierno debe planificar y dirigir de forma centralizada el desarrollo económico.",
      "de": "Die Regierung sollte die wirtschaftliche Entwicklung zentral planen und lenken.",
      "ru": "Правительство должно централизованно планировать и направлять развитие экономики.",
      "fr": "Le gouvernement devrait planifier et diriger le développement économique national."
    }
  },
  {
    "id": 7,
    "categoryKey": "economy",
    "axis": "econ",
    "multiplier": 1,
    "isQuick": false,
    "text": {
      "pl": "Kolej i linie lotnicze powinny być sprywatyzowane.",
      "en": "Railways and national airlines should be privatized.",
      "es": "Los ferrocarriles y las aerolíneas nacionales deben ser privatizados.",
      "de": "Eisenbahnen und Fluggesellschaften sollten privatisiert werden.",
      "ru": "Железные дороги и авиалинии должны быть приватизированы.",
      "fr": "Les chemins de fer et les compagnies aériennes devraient être privatisés."
    }
  },
  {
    "id": 8,
    "categoryKey": "economy",
    "axis": "econ",
    "multiplier": -1,
    "isQuick": false,
    "text": {
      "pl": "Państwo powinno nakładać limity na zyski wielkich korporacji.",
      "en": "The state should put legal caps on corporate profits.",
      "es": "El Estado debe poner límites legales a las ganancias de las grandes empresas.",
      "de": "Der Staat sollte gesetzliche Obergrenzen für Unternehmensgewinne festlegen.",
      "ru": "Государство должно законодательно ограничивать прибыли крупных корпораций.",
      "fr": "L'État devrait plafonner légalement les profits des grandes entreprises."
    }
  },
  {
    "id": 9,
    "categoryKey": "economy",
    "axis": "econ",
    "multiplier": 1,
    "isQuick": false,
    "text": {
      "pl": "Państwo nie powinno dawać żadnych dotacji wybranym prywatnym firmom.",
      "en": "The state should not give any subsidies to favored private businesses.",
      "es": "El Estado no debe conceder subsidios a empresas privadas seleccionadas.",
      "de": "Der Staat sollte keinerlei Subventionen an ausgewählte Privatunternehmen vergeben.",
      "ru": "Государство не должно выдавать никаких субсидий частным компаниям.",
      "fr": "L'État ne devrait accorder aucune subvention aux entreprises privées."
    }
  },
  {
    "id": 10,
    "categoryKey": "economy",
    "axis": "econ",
    "multiplier": -1,
    "isQuick": false,
    "text": {
      "pl": "Państwo powinno wspierać spółdzielnie pracownicze zamiast prywatnych korporacji.",
      "en": "The state should support worker cooperatives over private corporations.",
      "es": "El Estado debe apoyar las cooperativas de trabajadores frente a las empresas privadas.",
      "de": "Der Staat sollte Arbeitergenossenschaften gegenüber Privatkonzernen fördern.",
      "ru": "Государство должно поддерживать рабочие кооперативы вместо частных корпораций.",
      "fr": "L'État devrait soutenir les coopératives de travailleurs plutôt que les entreprises privées."
    }
  },
  {
    "id": 11,
    "categoryKey": "economy",
    "axis": "econ",
    "multiplier": 1,
    "isQuick": false,
    "text": {
      "pl": "Przedsiębiorcy powinni zakładać firmy bez żadnych pozwoleń urzędowych i licencji.",
      "en": "Entrepreneurs should be able to start businesses without government permits or licenses.",
      "es": "Los emprendedores deben poder crear empresas sin permisos gubernamentales ni licencias.",
      "de": "Unternehmer sollten Firmen ohne staatliche Genehmigungen oder Lizenzen gründen können.",
      "ru": "Предприниматели должны открывать бизнес без государственных разрешений и лицензий.",
      "fr": "Les entrepreneurs devraient pouvoir créer une entreprise sans autorisations ni licences de l'État."
    }
  },
  {
    "id": 12,
    "categoryKey": "economy",
    "axis": "econ",
    "multiplier": -1,
    "isQuick": false,
    "text": {
      "pl": "Sieci wodociągowe i energetyczne muszą być wyłączną własnością publiczną.",
      "en": "Water and power distribution grids must remain strictly public property.",
      "es": "Las redes de agua y electricidad deben ser estrictamente propiedad pública.",
      "de": "Wasser- und Stromnetze müssen ausschließlich in öffentlicher Hand bleiben.",
      "ru": "Водопроводные и электрические сети должны быть строго общественной собственностью.",
      "fr": "Les réseaux d'eau et d'électricité doivent rester strictement propriété publique."
    }
  },
  {
    "id": 13,
    "categoryKey": "economy",
    "axis": "econ",
    "multiplier": 1,
    "isQuick": false,
    "text": {
      "pl": "Konkurencja między firmami lepiej obniża ceny niż państwowe kontrole.",
      "en": "Market competition among businesses lowers prices better than state controls.",
      "es": "La competencia libre entre empresas reduce los precios mejor que los controles estatales.",
      "de": "Der freie Wettbewerb zwischen Unternehmen senkt Preise wirksamer als staatliche Kontrollen.",
      "ru": "Конкуренция между компаниями снижает цены лучше, чем государственный контроль.",
      "fr": "La concurrence entre entreprises fait baisser les prix plus efficacement que le contrôle de l'État."
    }
  },
  {
    "id": 14,
    "categoryKey": "taxation",
    "axis": "econ",
    "multiplier": 1,
    "isQuick": true,
    "text": {
      "pl": "Wszyscy obywatele powinni płacić dokładnie taki sam procent podatku dochodowego (podatek liniowy).",
      "en": "All citizens should pay the exact same income tax percentage (a flat tax).",
      "es": "Todos los ciudadanos deben pagar exactamente el mismo porcentaje de impuestos (tipo único).",
      "de": "Alle Bürger sollten genau denselben Steuersatz zahlen (Einheitssteuer / Flat-Tax).",
      "ru": "Все граждане должны платить одинаковый процент подоходного налога (плоская шкала).",
      "fr": "Tous les citoyens devraient payer le même pourcentage d'impôt sur le revenu (taux unique)."
    }
  },
  {
    "id": 15,
    "categoryKey": "taxation",
    "axis": "econ",
    "multiplier": -1,
    "isQuick": true,
    "text": {
      "pl": "Miliarderzy powinni płacić specjalny, wysoki podatek od całego swojego majątku.",
      "en": "Billionaires should pay a steep, specialized wealth tax on their net worth.",
      "es": "Los multimillonarios deben pagar un impuesto elevado sobre su patrimonio total.",
      "de": "Milliardäre sollten eine hohe Sondervermögenssteuer auf ihr gesamtes Vermögen zahlen.",
      "ru": "Миллиардеры должны платить высокий специальный налог на все свое состояние.",
      "fr": "Les milliardaires devraient payer un impôt spécial et élevé sur l'ensemble de leur patrimoine."
    }
  },
  {
    "id": 16,
    "categoryKey": "taxation",
    "axis": "econ",
    "multiplier": 1,
    "isQuick": false,
    "text": {
      "pl": "Podatek od spadków i darowizn w rodzinie powinien być całkowicie zlikwidowany.",
      "en": "Inheritance and family gift taxes should be completely abolished.",
      "es": "El impuesto de sucesiones y donaciones familiares debe ser abolido por completo.",
      "de": "Die Erbschafts- und Schenkungssteuer innerhalb der Familie sollte vollständig abgeschafft werden.",
      "ru": "Налог на наследство и дарение внутри семьи должен быть полностью отменен.",
      "fr": "Les droits de succession et les donations familiales devraient être totalement abolis."
    }
  },
  {
    "id": 17,
    "categoryKey": "taxation",
    "axis": "econ",
    "multiplier": -1,
    "isQuick": false,
    "text": {
      "pl": "Najbogatsi powinni oddawać w podatkach ponad połowę swoich najwyższych zarobków.",
      "en": "The highest earners should pay more than half of their top income in taxes.",
      "es": "Los más ricos deben pagar más de la mitad de sus ingresos más altos en impuestos.",
      "de": "Spitzenverdiener sollten mehr als die Hälfte ihrer höchsten Einkommensteile abgeben.",
      "ru": "Самые богатые должны отдавать более половины своих сверхдоходов в виде налогов.",
      "fr": "Les plus riches devraient payer plus de la moitié de leurs plus hauts revenus en impôts."
    }
  },
  {
    "id": 18,
    "categoryKey": "taxation",
    "axis": "econ",
    "multiplier": 1,
    "isQuick": true,
    "text": {
      "pl": "Obniżenie podatków dla firm to najlepszy sposób na przyciągnięcie inwestycji i miejsc pracy.",
      "en": "Lowering corporate taxes is the best way to attract investments and create jobs.",
      "es": "Reducir los impuestos corporativos es la mejor forma de atraer inversiones y crear empleo.",
      "de": "Niedrigere Unternehmenssteuern sind der beste Weg, Investitionen anzulocken und Jobs zu schaffen.",
      "ru": "Снижение налогов на бизнес — лучший способ привлечь инвестиции и создать рабочие места.",
      "fr": "Baisser les impôts sur les entreprises est le meilleur moyen d'attirer des investissements."
    }
  },
  {
    "id": 19,
    "categoryKey": "taxation",
    "axis": "econ",
    "multiplier": -1,
    "isQuick": false,
    "text": {
      "pl": "Wszystkie kraje powinny wprowadzić wysoki, minimalny podatek dla międzynarodowych korporacji.",
      "en": "All nations should enforce a high minimum corporate tax on multinational companies.",
      "es": "Todos los países deben aplicar un impuesto mínimo elevado a las corporaciones multinacionales.",
      "de": "Alle Staaten sollten eine hohe Mindeststeuer für multinationale Konzerne durchsetzen.",
      "ru": "Все страны должны ввести высокий минимальный налог на доходы транснациональных корпораций.",
      "fr": "Tous les pays devraient imposer une fiscalité minimale élevée aux multinationales."
    }
  },
  {
    "id": 20,
    "categoryKey": "taxation",
    "axis": "econ",
    "multiplier": 1,
    "isQuick": false,
    "text": {
      "pl": "Podatki od paliw i prądu powinny być radykalnie obniżone.",
      "en": "Taxes and duties on fuel and electricity should be drastically reduced.",
      "es": "Los impuestos sobre el combustible y la electricidad deben reducirse drásticamente.",
      "de": "Steuern auf Kraftstoffe und Strom sollten drastisch gesenkt werden.",
      "ru": "Налоги и акцизы на топливо и электроэнергию должны быть радикально снижены.",
      "fr": "Les taxes sur les carburants et l'électricité devraient être drastiquement réduites."
    }
  },
  {
    "id": 21,
    "categoryKey": "taxation",
    "axis": "econ",
    "multiplier": -1,
    "isQuick": false,
    "text": {
      "pl": "Spekulacje giełdowe i szybki handel akcjami powinny być objęte dodatkowym podatkiem.",
      "en": "Financial market speculation and high-frequency trading should carry a special tax.",
      "es": "La especulación bursátil y las transacciones financieras rápidas deben tener un impuesto especial.",
      "de": "Börsenspekulationen und Hochfrequenzhandel sollten mit einer Sondersteuer belegt werden.",
      "ru": "Биржевые спекуляции и быстрые финансовые сделки должны облагаться отдельным налогом.",
      "fr": "La spéculation boursière et le trading haute fréquence devraient être lourdement taxés."
    }
  },
  {
    "id": 22,
    "categoryKey": "taxation",
    "axis": "econ",
    "multiplier": 1,
    "isQuick": false,
    "text": {
      "pl": "Podatek od zysków giełdowych i oszczędności bankowych powinien zostać zniesiony.",
      "en": "Capital gains tax on stock investments and bank savings should be eliminated.",
      "es": "El impuesto sobre las ganancias de capital y los ahorros bancarios debe eliminarse.",
      "de": "Die Kapitalertragsteuer auf Aktien und Bankguthaben sollte abgeschafft werden.",
      "ru": "Налог на доходы от акций и банковских вкладов должен быть отменен.",
      "fr": "L'impôt sur les plus-values boursières et l'épargne bancaire devrait être supprimé."
    }
  },
  {
    "id": 23,
    "categoryKey": "taxation",
    "axis": "econ",
    "multiplier": -1,
    "isQuick": false,
    "text": {
      "pl": "Państwo powinno nakładać podatek od nadmiarowych zysków banków i koncernów paliwowych.",
      "en": "The state should impose a windfall profit tax on banks and energy giants.",
      "es": "El Estado debe aplicar un impuesto a los beneficios extraordinarios de bancos y petroleras.",
      "de": "Der Staat sollte eine Übergewinnsteuer auf Banken und Energiekonzerne erheben.",
      "ru": "Государство должно вводить налог на сверхприбыль банков и топливных гигантов.",
      "fr": "L'État devrait taxer les superprofits des banques et des géants pétroliers."
    }
  },
  {
    "id": 24,
    "categoryKey": "taxation",
    "axis": "econ",
    "multiplier": 1,
    "isQuick": false,
    "text": {
      "pl": "Konkurencja podatkowa między państwami jest dobra, bo powstrzymuje rządy przed podnoszeniem podatków.",
      "en": "Tax competition between countries is healthy because it prevents governments from raising taxes.",
      "es": "La competencia fiscal entre países es buena porque frena la subida de impuestos.",
      "de": "Steuerwettbewerb zwischen Staaten ist gut, weil er Regierungen an Steuererhöhungen hindert.",
      "ru": "Налоговая конкуренция между странами полезна, так как мешает властям повышать налоги.",
      "fr": "La concurrence fiscale entre pays est saine car elle empêche les gouvernements d'augmenter les impôts."
    }
  },
  {
    "id": 25,
    "categoryKey": "taxation",
    "axis": "econ",
    "multiplier": -1,
    "isQuick": false,
    "text": {
      "pl": "Ukrywanie pieniędzy w rajach podatkowych powinno być karane bezwzględnym więzieniem.",
      "en": "Hiding money in offshore tax havens should be punished with mandatory prison sentences.",
      "es": "Ocultar dinero en paraísos fiscales debe castigarse con penas de prisión obligatorias.",
      "de": "Das Verstecken von Geld in Steueroasen sollte mit Gefängnisstrafen geahndet werden.",
      "ru": "Укрывательство денег в офшорных налоговых гаванях должно караться тюрьмой.",
      "fr": "La dissimulation d'argent dans les paradis fiscaux devrait être punie de prison ferme."
    }
  },
  {
    "id": 26,
    "categoryKey": "taxation",
    "axis": "econ",
    "multiplier": 1,
    "isQuick": false,
    "text": {
      "pl": "Uproszczenie systemu i likwidacja ulg podatkowych jest ważniejsza niż rozdawnictwo socjalne.",
      "en": "Simplifying tax codes and eliminating deductions is more important than state welfare handouts.",
      "es": "Simplificar los impuestos eliminando deducciones es más importante que el gasto asistencial.",
      "de": "Steuervereinfachung durch Abbau von Ausnahmen ist wichtiger als staatliche Sozialgeschenke.",
      "ru": "Упрощение налогов важнее, чем распределение государственных социальных пособий.",
      "fr": "La simplification fiscale et la suppression des niches priment sur les aides d'État."
    }
  },
  {
    "id": 27,
    "categoryKey": "labor",
    "axis": "econ",
    "multiplier": 1,
    "isQuick": true,
    "text": {
      "pl": "Płaca minimalna powinna zostać zniesiona – stawki powinny zależeć wyłącznie od umowy stron.",
      "en": "The minimum wage should be scrapped; pay should depend solely on mutual agreement.",
      "es": "El salario mínimo debe abolirse; los sueldos deben acordarse libremente entre las partes.",
      "de": "Der Mindestlohn sollte abgeschafft werden; Löhne sollten rein frei vereinbart werden.",
      "ru": "Минимальный размер оплаты труда нужно отменить — зарплата должна быть договором сторон.",
      "fr": "Le salaire minimum devrait être aboli ; le salaire doit résulter du libre accord des parties."
    }
  },
  {
    "id": 28,
    "categoryKey": "labor",
    "axis": "econ",
    "multiplier": -1,
    "isQuick": true,
    "text": {
      "pl": "Ustawowy czas pracy powinien zostać skrócony do 4 dni w tygodniu bez obniżki pensji.",
      "en": "The legal workweek should be shortened to 4 days without any reduction in salary.",
      "es": "La jornada laboral legal debe reducirse a 4 días a la semana sin reducción de sueldo.",
      "de": "Die gesetzliche Arbeitszeit sollte auf 4 Tage pro Woche verkürzt werden, bei vollem Lohnausgleich.",
      "ru": "Рабочую неделю нужно сократить до 4 дней без снижения заработной платы.",
      "fr": "La semaine légale de travail devrait être réduite à 4 jours sans baisse de salaire."
    }
  },
  {
    "id": 29,
    "categoryKey": "labor",
    "axis": "econ",
    "multiplier": 1,
    "isQuick": false,
    "text": {
      "pl": "Pracodawca powinien mieć prawo zwolnić pracownika w dowolnym momencie bez podawania przyczyn.",
      "en": "Employers should have the right to fire employees at any time without stating a reason.",
      "es": "El empleador debe tener derecho a despedir a un trabajador en cualquier momento sin dar motivos.",
      "de": "Arbeitgeber sollten das Recht haben, Mitarbeiter jederzeit ohne Angabe von Gründen zu kündigen.",
      "ru": "Работодатель должен иметь право уволить сотрудника в любой момент без объяснения причин.",
      "fr": "L'employeur devrait pouvoir licencier un salarié à tout moment sans motif à fournir."
    }
  },
  {
    "id": 30,
    "categoryKey": "labor",
    "axis": "econ",
    "multiplier": -1,
    "isQuick": true,
    "text": {
      "pl": "Związki zawodowe powinny mieć prawo weta wobec masowych zwolnień pracowników.",
      "en": "Trade unions should have legal veto power over mass employee layoffs.",
      "es": "Los sindicatos deben tener poder de veto legal frente a los despidos colectivos.",
      "de": "Gewerkschaften sollten ein gesetzliches Vetorecht gegen Massenentlassungen haben.",
      "ru": "Профсоюзы должны иметь право вето на массовые увольнения работников.",
      "fr": "Les syndicats devraient avoir un droit de veto légal sur les licenciements collectifs."
    }
  },
  {
    "id": 31,
    "categoryKey": "labor",
    "axis": "econ",
    "multiplier": 1,
    "isQuick": false,
    "text": {
      "pl": "Strajki blokujące transport publiczny i szpitale powinny być całkowicie zakazane.",
      "en": "Strikes that shut down public transit or hospitals should be strictly outlawed.",
      "es": "Las huelgas que paralizan el transporte público o los hospitales deben prohibirse.",
      "de": "Streiks im öffentlichen Verkehr oder in Krankenhäusern sollten verboten sein.",
      "ru": "Забастовки, парализующие общественный транспорт и больницы, должны быть запрещены.",
      "fr": "Les grèves bloquant les transports publics ou les hôpitaux devraient être interdites."
    }
  },
  {
    "id": 32,
    "categoryKey": "labor",
    "axis": "econ",
    "multiplier": -1,
    "isQuick": false,
    "text": {
      "pl": "Pracownicy powinni mieć gwarantowane miejsca w zarządach dużych korporacji.",
      "en": "Workers should have mandatory seats on the boards of directors of large companies.",
      "es": "Los trabajadores deben tener puestos obligatorios en los consejos de administración de grandes empresas.",
      "de": "Arbeitnehmer sollten gesetzliche Sitze in den Aufsichtsräten von Großunternehmen haben.",
      "ru": "Работники должны иметь обязательные места в советах директоров крупных компаний.",
      "fr": "Les salariés devraient obligatoirement siéger aux conseils d'administration des grandes entreprises."
    }
  },
  {
    "id": 33,
    "categoryKey": "labor",
    "axis": "econ",
    "multiplier": 1,
    "isQuick": false,
    "text": {
      "pl": "Zastępowanie strajkujących pracowników nowymi pracownikami powinno być legalne.",
      "en": "Hiring permanent replacement workers during a strike should be completely legal.",
      "es": "Contratar trabajadores de reemplazo durante una huelga debe ser completamente legal.",
      "de": "Die Einstellung von Ersatzarbeitskräften während eines Streiks sollte legal sein.",
      "ru": "Наем новых сотрудников на замену бастующим должен быть полностью легален.",
      "fr": "L'embauche de remplaçants pendant une grève devrait être pleinement légale."
    }
  },
  {
    "id": 34,
    "categoryKey": "labor",
    "axis": "econ",
    "multiplier": -1,
    "isQuick": false,
    "text": {
      "pl": "Firmy zastępujące ludzi robotami i sztuczną inteligencją powinny płacić specjalny podatek.",
      "en": "Companies replacing human workers with robots and AI should pay a dedicated tax.",
      "es": "Las empresas que reemplazan humanos con robots e IA deben pagar un impuesto especial.",
      "de": "Unternehmen, die Arbeitsplätze durch Roboter und KI ersetzen, sollten eine Robotersteuer zahlen.",
      "ru": "Компании, заменяющие людей роботами и ИИ, должны платить специальный налог.",
      "fr": "Les entreprises remplaçant les travailleurs par des robots ou l'IA devraient payer une taxe."
    }
  },
  {
    "id": 35,
    "categoryKey": "labor",
    "axis": "econ",
    "multiplier": 1,
    "isQuick": false,
    "text": {
      "pl": "Umowy śmieciowe i zlecenia dają ludziom potrzebną elastyczność i nie powinny być ograniczane.",
      "en": "Freelance contracts and gig work provide valuable flexibility and should not be restricted.",
      "es": "Los contratos flexibles y por cuenta propia brindan libertad útil y no deben limitarse.",
      "de": "Freie Honorarverträge und Gig-Arbeit bieten nötige Flexibilität und sollten nicht eingeschränkt werden.",
      "ru": "Гибкие трудовые контракты дают свободу и не должны ограничиваться государством.",
      "fr": "Les contrats de prestation flexibles offrent une liberté précieuse et ne doivent pas être restreints."
    }
  },
  {
    "id": 36,
    "categoryKey": "labor",
    "axis": "econ",
    "multiplier": -1,
    "isQuick": false,
    "text": {
      "pl": "Kurierzy i kierowcy aplikacji (np. Uber) powinni obowiązkowo otrzymać pełne umowy o pracę.",
      "en": "Gig couriers and app drivers (e.g. Uber) must legally be classified as full employees.",
      "es": "Los repartidores y conductores de plataformas deben ser contratados como empleados fijos obligatoriamente.",
      "de": "Plattform-Kuriere und Fahrer müssen gesetzlich als reguläre Angestellte eingestuft werden.",
      "ru": "Курьеры и водители приложений должны быть официально оформлены в постоянный штат.",
      "fr": "Les livreurs et chauffeurs d'applications doivent obligatoirement obtenir un CDI."
    }
  },
  {
    "id": 37,
    "categoryKey": "labor",
    "axis": "econ",
    "multiplier": 1,
    "isQuick": false,
    "text": {
      "pl": "Przynależność do związków zawodowych i składki powinny być całkowicie dobrowolne.",
      "en": "Union membership and dues payment must be strictly voluntary for every worker.",
      "es": "La afiliación sindical y el pago de cuotas deben ser estrictamente voluntarios.",
      "de": "Gewerkschaftsmitgliedschaft und Beitragszahlungen müssen absolut freiwillig sein.",
      "ru": "Членство в профсоюзе и уплата взносов должны быть исключительно добровольными.",
      "fr": "L'adhésion syndicale et le paiement des cotisations doivent rester strictement volontaires."
    }
  },
  {
    "id": 38,
    "categoryKey": "labor",
    "axis": "econ",
    "multiplier": -1,
    "isQuick": false,
    "text": {
      "pl": "Rząd powinien zakazać pracy w nadgodzinach powyżej 48 godzin tygodniowo.",
      "en": "The government should legally ban working overtime beyond 48 hours per week.",
      "es": "El gobierno debe prohibir por ley realizar horas extras por encima de 48 horas semanales.",
      "de": "Die Regierung sollte Überstunden über 48 Wochenstunden hinaus gesetzlich verbieten.",
      "ru": "Государство должно законодательно запретить сверхурочную работу сверх 48 часов в неделю.",
      "fr": "Le gouvernement devrait interdire par la loi les heures supplémentaires au-delà de 48 heures."
    }
  },
  {
    "id": 39,
    "categoryKey": "labor",
    "axis": "econ",
    "multiplier": -1,
    "isQuick": false,
    "text": {
      "pl": "Państwo powinno zagwarantować każdemu pracownikowi minimum 30 dni płatnego urlopu w roku.",
      "en": "The state should legally guarantee every employee at least 30 days of paid vacation per year.",
      "es": "El Estado debe garantizar por ley a todo trabajador al menos 30 días de vacaciones pagadas.",
      "de": "Der Staat sollte jedem Beschäftigten mindestens 30 Tage bezahlten Jahresurlaub garantieren.",
      "ru": "Государство должно гарантировать каждому работнику минимум 30 дней оплачиваемого отпуска в год.",
      "fr": "L'État devrait garantir à chaque salarié au moins 30 jours de congés payés par an."
    }
  },
  {
    "id": 40,
    "categoryKey": "welfare",
    "axis": "econ",
    "multiplier": 1,
    "isQuick": true,
    "text": {
      "pl": "Prywatne konta emerytalne działają lepiej niż państwowy system emerytalny.",
      "en": "Private retirement accounts perform far better than state-run pension systems.",
      "es": "Las cuentas de jubilación privadas funcionan mucho mejor que el sistema público de pensiones.",
      "de": "Private Rentenkonten funktionieren weitaus besser als staatliche Rentensysteme.",
      "ru": "Частные пенсионные счета работают лучше, чем государственная пенсионная система.",
      "fr": "Les comptes de retraite privés fonctionnent bien mieux que les régimes publics de retraite."
    }
  },
  {
    "id": 41,
    "categoryKey": "welfare",
    "axis": "econ",
    "multiplier": -1,
    "isQuick": true,
    "text": {
      "pl": "Każdy dorosły obywatel powinien otrzymywać comiesięczny bezwarunkowy Dochód Podstawowy od państwa.",
      "en": "Every adult citizen should receive an unconditional monthly Universal Basic Income from the state.",
      "es": "Todo ciudadano adulto debe recibir del Estado una Renta Básica Universal incondicional mensual.",
      "de": "Jeder erwachsene Bürger sollte ein bedingungsloses monatliches Grundeinkommen vom Staat erhalten.",
      "ru": "Каждый взрослый гражданин должен получать безусловный базовый доход от государства каждый месяц.",
      "fr": "Chaque citoyen adulte devrait recevoir un Revenu de Base Inconditionnel mensuel de l'État."
    }
  },
  {
    "id": 42,
    "categoryKey": "welfare",
    "axis": "econ",
    "multiplier": 1,
    "isQuick": false,
    "text": {
      "pl": "Wysokość czynszów za mieszkania powinien ustalać wolny rynek, a nie urzędowe limity.",
      "en": "Rental housing prices should be set purely by the free market, not government rent caps.",
      "es": "El precio de los alquileres de vivienda debe fijarlo el mercado, no los límites del gobierno.",
      "de": "Mietpreise für Wohnungen sollten frei vom Markt bestimmt werden, nicht durch Mietpreisbremsen.",
      "ru": "Цены на аренду жилья должен определять свободный рынок, а не государственные лимиты.",
      "fr": "Les loyers des logements devraient être fixés par le marché, sans plafonnement par l'État."
    }
  },
  {
    "id": 43,
    "categoryKey": "welfare",
    "axis": "econ",
    "multiplier": -1,
    "isQuick": false,
    "text": {
      "pl": "Rząd i samorządy powinny budować tanie mieszkania komunalne na masową skalę.",
      "en": "The government should build public social housing on a massive scale.",
      "es": "El gobierno debe construir viviendas públicas de alquiler asequible a escala masiva.",
      "de": "Die Regierung sollte bezahlbaren kommunalen Wohnraum in großem Maßstab bauen.",
      "ru": "Государство и муниципалитеты должны массово строить доступное социальное жилье.",
      "fr": "L'État et les communes devraient construire massivement des logements sociaux abordables."
    }
  },
  {
    "id": 44,
    "categoryKey": "welfare",
    "axis": "econ",
    "multiplier": 1,
    "isQuick": false,
    "text": {
      "pl": "Zasiłki powinny przysługiwać wyłącznie osobom, które aktywnie szukają pracy.",
      "en": "Welfare benefits should only be given to people actively looking for employment.",
      "es": "Las ayudas sociales solo deben concederse a quienes busquen trabajo de forma activa.",
      "de": "Sozialleistungen sollten nur an Personen gezahlt werden, die aktiv nach Arbeit suchen.",
      "ru": "Пособия по безработице должны выплачиваться только тем, кто активно ищет работу.",
      "fr": "Les allocations chômage ne devraient être versées qu'aux personnes cherchant activement un emploi."
    }
  },
  {
    "id": 45,
    "categoryKey": "welfare",
    "axis": "econ",
    "multiplier": -1,
    "isQuick": false,
    "text": {
      "pl": "Leczenie szpitalne i leki ratujące życie powinny być całkowicie bezpłatne dla każdego.",
      "en": "Hospital care and life-saving medications should be completely free for everyone.",
      "es": "La atención hospitalaria y los medicamentos vitales deben ser totalmente gratuitos para todos.",
      "de": "Krankenhausbehandlungen und lebensrettende Medikamente sollten für jeden völlig kostenlos sein.",
      "ru": "Лечение в больницах и жизненно важные лекарства должны быть абсолютно бесплатными для всех.",
      "fr": "Les soins hospitaliers et les médicaments vitaux devraient être totalement gratuits pour tous."
    }
  },
  {
    "id": 46,
    "categoryKey": "welfare",
    "axis": "econ",
    "multiplier": 1,
    "isQuick": false,
    "text": {
      "pl": "Konkurencja prywatnych kas chorych zapewnia lepszą opiekę zdrowotną niż państwowa służba zdrowia.",
      "en": "Competing private health insurance funds deliver better care than a single state healthcare monopoly.",
      "es": "La competencia entre seguros de salud privados brinda mejor atención que un monopolio estatal.",
      "de": "Wettbewerb privater Krankenkassen sorgt für bessere Versorgung als ein staatliches Monopol.",
      "ru": "Конкуренция частных медицинских страховок обеспечивает лучшее лечение, чем монополия государства.",
      "fr": "La concurrence des assurances santé privées offre de meilleurs soins qu'un monopole d'État."
    }
  },
  {
    "id": 47,
    "categoryKey": "welfare",
    "axis": "econ",
    "multiplier": -1,
    "isQuick": false,
    "text": {
      "pl": "Państwo powinno zapewniać bezpłatne żłobki i przedszkola dla wszystkich dzieci.",
      "en": "The state should provide free public nurseries and preschools for all children.",
      "es": "El Estado debe garantizar guarderías y educación infantil gratuitas para todos los niños.",
      "de": "Der Staat sollte kostenlose Krippen und Kitas für alle Kinder bereitstellen.",
      "ru": "Государство должно обеспечивать бесплатные ясли и детские сады для всех детей.",
      "fr": "L'État devrait garantir des crèches et des écoles maternelles gratuites pour tous les enfants."
    }
  },
  {
    "id": 48,
    "categoryKey": "welfare",
    "axis": "econ",
    "multiplier": 1,
    "isQuick": false,
    "text": {
      "pl": "Wypłata zasiłków powinna być ograniczona w czasie, by nie uzależniać ludzi od pomocy społecznej.",
      "en": "Welfare payouts should have strict time limits to prevent long-term dependency.",
      "es": "El cobro de subsidios debe tener un límite de tiempo estricto para evitar dependencia.",
      "de": "Sozialhilfezahlungen sollten zeitlich streng befristet sein, um Abhängigkeit zu verhindern.",
      "ru": "Выплата социальных пособий должна быть ограничена по времени, чтобы люди не привыкали жить на пособия.",
      "fr": "Les aides sociales devraient être strictement limitées dans le temps pour éviter l'assistanat."
    }
  },
  {
    "id": 49,
    "categoryKey": "welfare",
    "axis": "econ",
    "multiplier": -1,
    "isQuick": false,
    "text": {
      "pl": "Fundusze inwestycyjne skupujące setki mieszkań na wynajem powinny płacić zaporowy podatek.",
      "en": "Corporate investment funds buying up vast residential housing should face punitive taxes.",
      "es": "Los fondos de inversión que compran miles de viviendas deben pagar impuestos punitivos.",
      "de": "Investmentfonds, die massenhaft Wohnungen aufkaufen, sollten mit hohen Strafsteuern belegt werden.",
      "ru": "Инвестиционные фонды, скупающие жилые дома ради спекуляций, должны платить заградительный налог.",
      "fr": "Les fonds spéculatifs qui rachètent des milliers de logements devraient payer une surtaxe punitive."
    }
  },
  {
    "id": 50,
    "categoryKey": "welfare",
    "axis": "econ",
    "multiplier": 1,
    "isQuick": false,
    "text": {
      "pl": "Edukacja uniwersytecka powinna być płatna, finansowana kredytami spłacanymi po znalezieniu pracy.",
      "en": "University tuition should be paid by students via income-contingent loans rather than taxes.",
      "es": "La matrícula universitaria debe ser de pago, financiada mediante préstamos estudiantiles.",
      "de": "Universitätsstudien sollten gebührenpflichtig sein und über spätere Rückzahlungen finanziert werden.",
      "ru": "Высшее образование должно быть платным, финансируемым через образовательные кредиты.",
      "fr": "Les études supérieures devraient être payantes, financées par des prêts remboursables une fois en poste."
    }
  },
  {
    "id": 51,
    "categoryKey": "welfare",
    "axis": "econ",
    "multiplier": -1,
    "isQuick": false,
    "text": {
      "pl": "Państwo powinno zapewnić bezpłatne, ciepłe posiłki wszystkim uczniom w szkołach.",
      "en": "The state should fund free nutritious lunches for every school student.",
      "es": "El Estado debe financiar comedores escolares gratuitos para todos los alumnos.",
      "de": "Der Staat sollte allen Schulkindern ein kostenloses warmes Mittagessen bereitstellen.",
      "ru": "Государство должно обеспечивать бесплатные горячие обеды всем школьникам.",
      "fr": "L'État devrait financer des repas chauds gratuits pour tous les élèves dans les écoles."
    }
  },
  {
    "id": 52,
    "categoryKey": "regulation",
    "axis": "econ",
    "multiplier": 1,
    "isQuick": true,
    "text": {
      "pl": "Większość licencji i pozwoleń zawodowych to zbędna bariera utrudniająca wejście do zawodu.",
      "en": "Most occupational licenses and permits are unnecessary barriers to entering a trade.",
      "es": "La mayoría de las licencias ocupacionales son barreras innecesarias para trabajar.",
      "de": "Die meisten Berufslizenzen und Zulassungen sind unnötige bürokratische Hürden.",
      "ru": "Большинство профессиональных лицензий — это лишняя бюрократия, мешающая людям работать.",
      "fr": "La plupart des licences professionnelles et permis sont des barrières inutiles à l'emploi."
    }
  },
  {
    "id": 53,
    "categoryKey": "regulation",
    "axis": "econ",
    "multiplier": -1,
    "isQuick": true,
    "text": {
      "pl": "Rząd powinien ustawowo ograniczyć zarobki prezesów do ustalonej wielokrotności pensji pracownika.",
      "en": "The government should legally cap CEO compensation to a set multiple of average worker pay.",
      "es": "El gobierno debe limitar por ley los sueldos de los directores generales frente al salario del empleado.",
      "de": "Die Regierung sollte Vorstandsgehälter gesetzlich auf ein Vielfaches des Durchschnittslohns deckeln.",
      "ru": "Государство должно законодательно ограничить доходы топ-менеджеров относительно зарплат рабочих.",
      "fr": "Le gouvernement devrait plafonner par la loi les rémunérations des PDG par rapport aux salariés."
    }
  },
  {
    "id": 54,
    "categoryKey": "regulation",
    "axis": "econ",
    "multiplier": 1,
    "isQuick": false,
    "text": {
      "pl": "Prywatne firmy kurierskie i paczkomaty działają znacznie lepiej niż państwowa poczta.",
      "en": "Private courier firms and parcel lockers perform much better than state post offices.",
      "es": "Las empresas privadas de mensajería funcionan mucho mejor que el servicio postal estatal.",
      "de": "Private Paketdienste und Abholstationen arbeiten deutlich effizienter als die Staatspost.",
      "ru": "Частные курьерские службы и постаматы работают гораздо лучше государственной почты.",
      "fr": "Les transporteurs privés et casiers automatiques fonctionnent bien mieux que la poste publique."
    }
  },
  {
    "id": 55,
    "categoryKey": "regulation",
    "axis": "econ",
    "multiplier": -1,
    "isQuick": false,
    "text": {
      "pl": "Państwo powinno nałożyć specjalny podatek na zagraniczne markety, by chronić małe sklepiki.",
      "en": "The state should tax multinational supermarkets to protect local family-owned shops.",
      "es": "El Estado debe gravar a los grandes hipermercados para proteger a los pequeños comercios locales.",
      "de": "Der Staat sollte ausländische Supermarktketten besteuern, um kleine Tante-Emma-Läden zu schützen.",
      "ru": "Государство должно облагать спецналогом крупные супермаркеты для защиты местных мелких лавок.",
      "fr": "L'État devrait surtaxer les hypermarchés pour protéger les petits commerces de quartier."
    }
  },
  {
    "id": 56,
    "categoryKey": "regulation",
    "axis": "econ",
    "multiplier": 1,
    "isQuick": false,
    "text": {
      "pl": "Aplikacje przewozowe typu Uber powinny działać swobodnie bez ograniczeń i licencji taksówkarskich.",
      "en": "Ride-hailing apps like Uber should operate freely without traditional taxi medallion quotas.",
      "es": "Las aplicaciones de transporte como Uber deben operar libremente sin licencias de taxi tradicionales.",
      "de": "Fahrdienst-Apps wie Uber sollten frei ohne traditionelle Taxilizenzen verkehren dürfen.",
      "ru": "Сервисы такси вроде Uber должны работать свободно, без квот и дорогих лицензий.",
      "fr": "Les applications de VTC comme Uber devraient opérer librement sans licences de taxi contraignantes."
    }
  },
  {
    "id": 57,
    "categoryKey": "regulation",
    "axis": "econ",
    "multiplier": -1,
    "isQuick": false,
    "text": {
      "pl": "Marże i odsetki pobierane przez banki komercyjne powinny być odgórnie ograniczane przez prawo.",
      "en": "Profit margins and loan interest rates charged by private banks should be capped by law.",
      "es": "Los márgenes y tasas de interés de los bancos comerciales deben limitarse por ley.",
      "de": "Zinsspannen und Gebühren privater Banken sollten gesetzlich begrenzt werden.",
      "ru": "Банковские процентные ставки и скрытые комиссии должны быть ограничены законом.",
      "fr": "Les marges et taux d'intérêt prélevés par les banques commerciales devraient être plafonnés par la loi."
    }
  },
  {
    "id": 58,
    "categoryKey": "regulation",
    "axis": "econ",
    "multiplier": 1,
    "isQuick": false,
    "text": {
      "pl": "Procedury uzyskiwania pozwoleń na budowę domów i osiedli powinny być maksymalnie uproszczone.",
      "en": "Building permits for housing developments should be drastically simplified and expedited.",
      "es": "Los permisos de construcción de viviendas deben simplificarse drásticamente.",
      "de": "Baugenehmigungen für Wohngebäude sollten drastisch vereinfacht und beschleunigt werden.",
      "ru": "Процедура получения разрешений на строительство жилья должна быть максимально упрощена.",
      "fr": "Les permis de construire pour les logements devraient être considérablement simplifiés."
    }
  },
  {
    "id": 59,
    "categoryKey": "regulation",
    "axis": "econ",
    "multiplier": -1,
    "isQuick": false,
    "text": {
      "pl": "Reklamy słodyczy, alkoholu i fast foodów powinny być całkowicie zakazane w telewizji i internecie.",
      "en": "Advertising for junk food, alcohol, and sugary snacks should be strictly banned in media.",
      "es": "La publicidad de comida basura, alcohol y dulces debe prohibirse totalmente en televisión e internet.",
      "de": "Werbung für ungesunde Lebensmittel, Alkohol und Fast Food sollte in Medien komplett verboten werden.",
      "ru": "Реклама фастфуда, алкоголя и сладостей должна быть полностью запрещена на ТВ и в интернете.",
      "fr": "La publicité pour la malbouffe, l'alcool et les confiseries devrait être totalement bannie des médias."
    }
  },
  {
    "id": 60,
    "categoryKey": "regulation",
    "axis": "econ",
    "multiplier": 1,
    "isQuick": false,
    "text": {
      "pl": "Prywatne laboratoria powinny móc testować nowe leki bez wieloletnich procedur urzędowych.",
      "en": "Private labs should be allowed to bring safe new medicines to market without multi-year red tape.",
      "es": "Los laboratorios privados deben poder comercializar nuevos fármacos sin demoras burocráticas de años.",
      "de": "Pharmaunternehmen sollten neue Medikamente ohne jahrelange bürokratische Auflagen zulassen können.",
      "ru": "Фармацевтические лаборатории должны иметь право быстрее выводить лекарства на рынок без бюрократии.",
      "fr": "Les laboratoires privés devraient pouvoir commercialiser les nouveaux médicaments sans délais d'années."
    }
  },
  {
    "id": 61,
    "categoryKey": "regulation",
    "axis": "econ",
    "multiplier": -1,
    "isQuick": false,
    "text": {
      "pl": "Lasy państwowe i tereny przyrodnicze nie mogą być w żadnym wypadku sprzedawane prywatnym firmom.",
      "en": "Public forests and natural parklands must never under any circumstances be sold to private firms.",
      "es": "Los bosques públicos y espacios naturales nunca deben venderse a empresas privadas.",
      "de": "Staatliche Wälder und Naturschutzgebiete dürfen unter keinen Umständen privatisiert werden.",
      "ru": "Государственные леса и заповедники ни при каких условиях нельзя продавать в частные руки.",
      "fr": "Les forêts publiques et réserves naturelles ne doivent en aucun cas être vendues à des entreprises privées."
    }
  },
  {
    "id": 62,
    "categoryKey": "regulation",
    "axis": "econ",
    "multiplier": 1,
    "isQuick": false,
    "text": {
      "pl": "Ceny biletów lotniczych i przejazdów powinny zależeć wyłącznie od popytu, bez regulacji państwa.",
      "en": "Ticket fares for flights and long-distance travel should be determined solely by demand without state rules.",
      "es": "Los precios de vuelos y billetes de viaje deben fijarse exclusivamente según la demanda del mercado.",
      "de": "Fahrpreise für Flüge und Fernreisen sollten sich rein nach Angebot und Nachfrage richten.",
      "ru": "Цены на авиабилеты и междугородние поездки должны определяться исключительно рыночным спросом.",
      "fr": "Les tarifs des billets d'avion et de transport devraient dépendre uniquement de l'offre et de la demande."
    }
  },
  {
    "id": 63,
    "categoryKey": "regulation",
    "axis": "econ",
    "multiplier": -1,
    "isQuick": false,
    "text": {
      "pl": "Państwo powinno kontrolować ceny lekarstw w aptekach, by firmy farmaceutyczne nie zawyżały marż.",
      "en": "The state should strictly regulate prescription drug prices to stop excessive pharmaceutical markups.",
      "es": "El Estado debe regular los precios de los medicamentos para frenar los márgenes abusivos farmacéuticos.",
      "de": "Der Staat sollte Medikamentenpreise regulieren, um Wuchermargen der Pharmaindustrie zu verhindern.",
      "ru": "Государство должно жестко контролировать цены на лекарства в аптеках.",
      "fr": "L'État devrait contrôler strictement les prix des médicaments pour empêcher les marges abusives."
    }
  },
  {
    "id": 64,
    "categoryKey": "trade",
    "axis": "econ",
    "multiplier": 1,
    "isQuick": true,
    "text": {
      "pl": "Swobodny handel międzynarodowy bez ceł i barier przynosi korzyści wszystkim narodom.",
      "en": "Free international trade without customs duties or barriers benefits all participating nations.",
      "es": "El libre comercio internacional sin aranceles ni barreras beneficia a todas las naciones.",
      "de": "Freier internationaler Handel ohne Zölle und Handelshemmnisse nützt allen Nationen.",
      "ru": "Свободная международная торговля без пошлин и барьеров выгодна всем странам.",
      "fr": "Le libre-échange international sans droits de douane ni barrières profite à toutes les nations."
    }
  },
  {
    "id": 65,
    "categoryKey": "trade",
    "axis": "econ",
    "multiplier": -1,
    "isQuick": true,
    "text": {
      "pl": "Wysokie cła na importowane towary są konieczne, by chronić rodzimych rolników i fabryki.",
      "en": "High import tariffs are necessary to protect domestic farmers and manufacturing jobs.",
      "es": "Los aranceles altos a las importaciones son necesarios para proteger a los agricultores e industrias locales.",
      "de": "Hohe Importzölle sind notwendig, um einheimische Landwirte und Industriejobs zu schützen.",
      "ru": "Высокие таможенные пошлины необходимы для защиты отечественных фермеров и фабрик.",
      "fr": "Des droits de douane élevés sur les importations sont nécessaires pour protéger l'industrie locale."
    }
  },
  {
    "id": 66,
    "categoryKey": "trade",
    "axis": "econ",
    "multiplier": 1,
    "isQuick": false,
    "text": {
      "pl": "Pieniądze i inwestycje zagraniczne powinny swobodnie przepływać przez granice bez kontroli rządu.",
      "en": "Capital and foreign investments should cross borders freely without government restrictions.",
      "es": "El capital y las inversiones extranjeras deben fluir libremente a través de las fronteras sin trabas.",
      "de": "Kapital und Auslandsinvestitionen sollten sich ohne staatliche Kontrollen frei über Grenzen bewegen.",
      "ru": "Деньги и иностранные инвестиции должны свободно перемещаться через границы без контроля властей.",
      "fr": "Les capitaux et investissements étrangers devraient circuler librement sans contrôle étatique."
    }
  },
  {
    "id": 67,
    "categoryKey": "trade",
    "axis": "econ",
    "multiplier": -1,
    "isQuick": false,
    "text": {
      "pl": "Rządy powinny przymusowo podzielić monopolistyczne giganty technologiczne (np. Google, Apple).",
      "en": "Governments should forcefully break up monopolistic Big Tech giants (e.g. Google, Apple).",
      "es": "Los gobiernos deben dividir por la fuerza a los gigantes tecnológicos monopolísticos (como Google, Apple).",
      "de": "Regierungen sollten marktbeherrschende Tech-Giganten (wie Google, Apple) zerschlagen.",
      "ru": "Правительства должны принудительно разделять монопольные IT-гиганты (Google, Apple).",
      "fr": "Les gouvernements devraient démanteler les géants technologiques monopolistiques (Google, Apple)."
    }
  },
  {
    "id": 68,
    "categoryKey": "trade",
    "axis": "econ",
    "multiplier": 1,
    "isQuick": false,
    "text": {
      "pl": "Zagraniczne firmy powinny płacić dokładnie takie same podatki jak krajowe, bez faworyzowania rodzimych.",
      "en": "Foreign firms should be taxed exactly the same as domestic businesses without national favoritism.",
      "es": "Las empresas extranjeras deben pagar exactamente los mismos impuestos que las locales sin favoritismos.",
      "de": "Ausländische Unternehmen sollten steuerlich genauso behandelt werden wie einheimische Betriebe.",
      "ru": "Иностранные компании должны облагаться налогами наравне с местными, без льгот для своих.",
      "fr": "Les entreprises étrangères devraient être taxées exactement de la même manière que les locales."
    }
  },
  {
    "id": 69,
    "categoryKey": "trade",
    "axis": "econ",
    "multiplier": -1,
    "isQuick": false,
    "text": {
      "pl": "Produkcja leków, stali i amunicji musi pozostać w kraju, nawet jeśli jest znacznie droższa.",
      "en": "Manufacturing of medicines, steel, and defense hardware must stay domestic even at higher costs.",
      "es": "La producción de medicinas, acero y material militar debe ser nacional aunque resulte más costosa.",
      "de": "Die Produktion von Medikamenten, Stahl und Rüstungsgütern muss im Inland bleiben, selbst wenn sie teurer ist.",
      "ru": "Производство лекарств, стали и оружия должно быть внутри страны, даже если это дороже.",
      "fr": "La production de médicaments, d'acier et d'armement doit rester nationale même si elle coûte plus cher."
    }
  },
  {
    "id": 70,
    "categoryKey": "trade",
    "axis": "econ",
    "multiplier": 1,
    "isQuick": false,
    "text": {
      "pl": "Import tańszej żywności z zagranicy jest dobry dla konsumentów, bo obniża codzienne rachunki.",
      "en": "Importing cheaper food from abroad benefits consumers by lowering everyday grocery bills.",
      "es": "Importar alimentos baratos del extranjero beneficia al consumidor al abaratar la cesta de la compra.",
      "de": "Der Import billigerer Lebensmittel nützt Verbrauchern, da er die täglichen Lebenshaltungskosten senkt.",
      "ru": "Импорт более дешевой еды из-за рубежа выгоден покупателям, так как снижает цены в магазинах.",
      "fr": "L'importation de nourriture étrangère moins chère profite aux consommateurs en réduisant leurs dépenses."
    }
  },
  {
    "id": 71,
    "categoryKey": "trade",
    "axis": "econ",
    "multiplier": -1,
    "isQuick": false,
    "text": {
      "pl": "Porty morskie, lotniska i sieci 5G nie mogą być sprzedawane zagranicznym inwestorom.",
      "en": "Seaports, airports, and national 5G networks must never be sold to foreign investors.",
      "es": "Los puertos marítimos, aeropuertos y redes 5G nunca deben venderse a inversores extranjeros.",
      "de": "Seehäfen, Flughäfen und 5G-Netze dürfen keinesfalls an ausländische Investoren verkauft werden.",
      "ru": "Морские порты, аэропорты и сети связи 5G нельзя продавать иностранным инвесторам.",
      "fr": "Les ports maritimes, aéroports et réseaux 5G ne doivent jamais être cédés à des investisseurs étrangers."
    }
  },
  {
    "id": 72,
    "categoryKey": "trade",
    "axis": "econ",
    "multiplier": 1,
    "isQuick": false,
    "text": {
      "pl": "Globalizacja i otwarte granice handlowe wyciągnęły setki milionów ludzi na świecie z ubóstwa.",
      "en": "Globalization and open trade borders have lifted hundreds of millions of people out of poverty.",
      "es": "La globalización y la apertura comercial han sacado de la pobreza a cientos de millones de personas.",
      "de": "Globalisierung und offene Handelsgrenzen haben Hunderte Millionen Menschen aus der Armut befreit.",
      "ru": "Глобализация и открытая торговля спасли сотни миллионов людей по всему миру от нищеты.",
      "fr": "La mondialisation et le commerce ouvert ont sorti des centaines de millions de personnes de la pauvreté."
    }
  },
  {
    "id": 73,
    "categoryKey": "trade",
    "axis": "econ",
    "multiplier": -1,
    "isQuick": false,
    "text": {
      "pl": "Finansowa spekulacja cenami pszenicy i surowców na giełdach powinna być surowo zabroniona.",
      "en": "Financial commodity speculation on food grain and fuel prices should be strictly prohibited.",
      "es": "La especulación financiera sobre los precios del trigo y materias primas debe prohibirse con dureza.",
      "de": "Finanzspekulationen auf Weizen- und Rohstoffpreise sollten gesetzlich streng verboten werden.",
      "ru": "Финансовые спекуляции на ценах зерна и сырья должны быть строго запрещены.",
      "fr": "La spéculation financière sur les prix du blé et des matières premières devrait être bannie."
    }
  },
  {
    "id": 74,
    "categoryKey": "trade",
    "axis": "econ",
    "multiplier": 1,
    "isQuick": false,
    "text": {
      "pl": "Brak barier handlowych z sąsiadami buduje trwały pokój skuteczniej niż zbrojenia.",
      "en": "Free economic trade with neighboring nations builds lasting peace more effectively than military build-up.",
      "es": "El comercio libre con los países vecinos construye la paz de forma más sólida que el gasto militar.",
      "de": "Freihandel mit Nachbarländern sichert den Frieden wirksamer als militärische Aufrüstung.",
      "ru": "Свободная торговля с соседями укрепляет мир лучше, чем гонка вооружений.",
      "fr": "Le libre-échange avec les voisins garantit la paix plus efficacement que le surarmement."
    }
  },
  {
    "id": 75,
    "categoryKey": "trade",
    "axis": "econ",
    "multiplier": -1,
    "isQuick": false,
    "text": {
      "pl": "Państwo powinno nakładać sankcje i zakazy handlu na kraje naruszające prawa człowieka.",
      "en": "The state should impose strict trade embargoes and sanctions on regimes violating human rights.",
      "es": "El Estado debe imponer embargos comerciales a los países que vulneren los derechos humanos.",
      "de": "Der Staat sollte strenge Handelssanktionen gegen Regime verhängen, die Menschenrechte verletzen.",
      "ru": "Государство должно вводить торговые санкции против стран, нарушающих права человека.",
      "fr": "L'État devrait imposer des embargos commerciaux aux pays violant les droits humains."
    }
  },
  {
    "id": 76,
    "categoryKey": "liberties",
    "axis": "soc",
    "multiplier": 1,
    "isQuick": true,
    "text": {
      "pl": "Wolność słowa powinna chronić nawet poglądy kontrowersyjne i oburzające dla większości.",
      "en": "Free speech should legally protect even views that are offensive or shocking to the majority.",
      "es": "La libertad de expresión debe proteger incluso las opiniones más polémicas y ofensivas para la mayoría.",
      "de": "Die Meinungsfreiheit sollte auch Ansichten schützen, die für die Mehrheit anstößig oder empörend sind.",
      "ru": "Свобода слова должна защищать даже самые спорные и возмутительные для большинства взгляды.",
      "fr": "La liberté d'expression devrait protéger même les opinions offensantes ou choquantes pour la majorité."
    }
  },
  {
    "id": 77,
    "categoryKey": "liberties",
    "axis": "soc",
    "multiplier": -1,
    "isQuick": true,
    "text": {
      "pl": "Służby specjalne powinny mieć prawo podsłuchiwać rozmowy w internecie bez zgody sądu w imię bezpieczeństwa.",
      "en": "Intelligence agencies should have the right to monitor internet chats without warrants for national security.",
      "es": "Los servicios secretos deben poder interceptar comunicaciones en internet sin orden judicial por seguridad.",
      "de": "Geheimdienste sollten das Recht haben, Internetnachrichten ohne richterlichen Beschluss zu überwachen.",
      "ru": "Спецслужбы должны иметь право прослушивать интернет без решения суда ради безопасности.",
      "fr": "Les services de renseignement devraient pouvoir surveiller les échanges en ligne sans mandat par sécurité."
    }
  },
  {
    "id": 78,
    "categoryKey": "liberties",
    "axis": "soc",
    "multiplier": 1,
    "isQuick": true,
    "text": {
      "pl": "Każdy dorosły i niekarany obywatel powinien mieć prawo do posiadania broni palnej do obrony domu.",
      "en": "Every law-abiding adult citizen should have the legal right to own firearms for home defense.",
      "es": "Todo ciudadano adulto sin antecedentes debe tener derecho a poseer armas de fuego para defensa en el hogar.",
      "de": "Jeder unbescholtene erwachsene Bürger sollte das Recht haben, Schusswaffen zum Schutz seines Heims zu besitzen.",
      "ru": "Каждый взрослый несудимый гражданин должен иметь право на огнестрельное оружие для самообороны дома.",
      "fr": "Tout citoyen majeur et sans casier devrait avoir le droit de posséder une arme à feu pour défendre son foyer."
    }
  },
  {
    "id": 79,
    "categoryKey": "liberties",
    "axis": "soc",
    "multiplier": -1,
    "isQuick": false,
    "text": {
      "pl": "Policja powinna mieć prawo zatrzymywać i rewidować przechodniów na ulicy bez podawania przyczyny.",
      "en": "Police should have the legal power to stop and search pedestrians on streets without suspicion.",
      "es": "La policía debe tener el poder de detener y registrar a personas en la calle sin sospecha previa.",
      "de": "Die Polizei sollte Passanten auf der Straße verdachtsunabhängig anhalten und durchsuchen dürfen.",
      "ru": "Полиция должна иметь право останавливать и обыскивать людей на улице без объяснения причин.",
      "fr": "La police devrait pouvoir contrôler et fouiller les passants dans la rue sans soupçon préalable."
    }
  },
  {
    "id": 80,
    "categoryKey": "liberties",
    "axis": "soc",
    "multiplier": 1,
    "isQuick": false,
    "text": {
      "pl": "Nieuleczalnie chory człowiek powinien mieć prawo do eutanazji na własne życzenie.",
      "en": "A terminally ill person should have the legal right to voluntary assisted dying (euthanasia).",
      "es": "Una persona con una enfermedad terminal debe tener derecho a la eutanasia a petición propia.",
      "de": "Ein unheilbar kranker Mensch sollte das Recht auf freiwillige Sterbehilfe (Euthanasie) haben.",
      "ru": "Неизлечимо больной человек должен иметь законное право на добровольную эвтаназию.",
      "fr": "Une personne atteinte d'une maladie incurable devrait avoir le droit à l'euthanasie sur demande."
    }
  },
  {
    "id": 81,
    "categoryKey": "liberties",
    "axis": "soc",
    "multiplier": -1,
    "isQuick": false,
    "text": {
      "pl": "Kamery z automatycznym rozpoznawaniem twarzy powinny być zainstalowane we wszystkich miejscach publicznych.",
      "en": "Facial recognition surveillance cameras should be widely deployed in all public urban spaces.",
      "es": "Las cámaras con reconocimiento facial automático deben instalarse en todos los espacios públicos.",
      "de": "Überwachungskameras mit automatischer Gesichtserkennung sollten flächendeckend im öffentlichen Raum stehen.",
      "ru": "Камеры с распознаванием лиц должны быть установлены во всех общественных местах городов.",
      "fr": "Des caméras à reconnaissance faciale automatisée devraient être installées dans tous les lieux publics."
    }
  },
  {
    "id": 82,
    "categoryKey": "liberties",
    "axis": "soc",
    "multiplier": 1,
    "isQuick": false,
    "text": {
      "pl": "Posiadanie marihuany na własny użytek powinno być w pełni legalne dla dorosłych.",
      "en": "Possession of recreational cannabis for personal adult use should be completely legal.",
      "es": "La posesión de cannabis para uso personal de adultos debe ser completamente legal.",
      "de": "Der Besitz von Cannabis zum Eigenbedarf für Erwachsene sollte vollständig legal sein.",
      "ru": "Хранение марихуаны для личного употребления взрослыми должно быть полностью легальным.",
      "fr": "La possession de cannabis pour un usage récréatif adulte devrait être totalement légalisée."
    }
  },
  {
    "id": 83,
    "categoryKey": "liberties",
    "axis": "soc",
    "multiplier": -1,
    "isQuick": false,
    "text": {
      "pl": "Kara śmierci powinna zostać przywrócona za najokrutniejsze morderstwa.",
      "en": "The death penalty should be reinstated for the most heinous premeditated murders.",
      "es": "La pena de muerte debe restablecerse para los asesinatos y crímenes más atroces.",
      "de": "Die Todesstrafe sollte für besonders schwere Gewaltverbrechen wieder eingeführt werden.",
      "ru": "Смертная казнь должна быть возвращена за самые жестокие убийства.",
      "fr": "La peine de mort devrait être rétablie pour les crimes et assassinats les plus odieux."
    }
  },
  {
    "id": 84,
    "categoryKey": "liberties",
    "axis": "soc",
    "multiplier": 1,
    "isQuick": false,
    "text": {
      "pl": "Obywatele powinni mieć prawo do anonimowości w sieci bez wymogu logowania dowodem tożsamości.",
      "en": "Citizens should have the right to browse the internet anonymously without uploading national IDs.",
      "es": "Los ciudadanos deben tener derecho al anonimato en internet sin registrar su documento de identidad.",
      "de": "Bürger sollten das Recht auf anonyme Internetnutzung ohne Vorlage eines Personalausweises haben.",
      "ru": "Граждане должны иметь право на анонимность в интернете без регистрации по паспорту.",
      "fr": "Les citoyens devraient avoir le droit à l'anonymat en ligne sans présenter de pièce d'identité."
    }
  },
  {
    "id": 85,
    "categoryKey": "liberties",
    "axis": "soc",
    "multiplier": -1,
    "isQuick": false,
    "text": {
      "pl": "Rząd powinien mieć prawo nakładać zakaz wychodzenia z domu i kwarantannę podczas pandemii.",
      "en": "The government should have the power to impose lockdowns and stay-at-home orders during epidemics.",
      "es": "El gobierno debe poder decretar toques de queda y confinamientos obligatorios en epidemias.",
      "de": "Die Regierung sollte das Recht haben, bei Epidemien Ausgangssperren und Lockdowns zu verhängen.",
      "ru": "Правительство должно иметь право вводить комендантский час и локдауны во время эпидемий.",
      "fr": "Le gouvernement devrait pouvoir imposer des confinements et couvre-feux en cas de pandémie."
    }
  },
  {
    "id": 86,
    "categoryKey": "liberties",
    "axis": "soc",
    "multiplier": 1,
    "isQuick": false,
    "text": {
      "pl": "Każdy dorosły człowiek ma prawo decydować o własnym ciele, w tym o tatuażach i zabiegach medycznych.",
      "en": "Every adult has an absolute right to bodily autonomy, including tattoos and elective procedures.",
      "es": "Toda persona adulta tiene derecho absoluto sobre su cuerpo, incluidos tatuajes y procedimientos electivos.",
      "de": "Jeder Erwachsene hat das uneingeschränkte Recht auf körperliche Selbstbestimmung.",
      "ru": "Каждый взрослый человек имеет право сам решать судьбу своего тела и медицинских процедур.",
      "fr": "Tout adulte a le droit absolu de disposer de son corps, y compris pour les actes médicaux."
    }
  },
  {
    "id": 87,
    "categoryKey": "liberties",
    "axis": "soc",
    "multiplier": -1,
    "isQuick": false,
    "text": {
      "pl": "Policja powinna natychmiast siłą rozpędzać wszelkie nielegalne zgromadzenia i blokady dróg.",
      "en": "Police should immediately break up unauthorized street protests and road blockades by force.",
      "es": "La policía debe disolver por la fuerza de inmediato cualquier protesta o bloqueo no autorizado.",
      "de": "Die Polizei sollte ungenehmigte Straßenblockaden und Proteste unverzüglich mit Zwang auflösen.",
      "ru": "Полиция должна немедленно силой разгонять любые несогласованные митинги и перекрытия дорог.",
      "fr": "La police devrait disperser immédiatement par la force toute manifestation ou blocage non autorisé."
    }
  },
  {
    "id": 88,
    "categoryKey": "liberties",
    "axis": "soc",
    "multiplier": -1,
    "isQuick": false,
    "text": {
      "pl": "Więzienia powinny skupiać się na surowej karze i izolacji przestępców, a nie na ich wygodzie.",
      "en": "Prisons should focus primarily on harsh punishment and isolation rather than prisoner comfort.",
      "es": "Las prisiones deben centrarse en el castigo estricto y el aislamiento más que en comodidades.",
      "de": "Gefängnisse sollten sich auf harte Bestrafung und Abschreckung konzentrieren, nicht auf Komfort.",
      "ru": "Тюрьмы должны фокусироваться на строгом наказании и изоляции, а не на удобствах заключенных.",
      "fr": "Les prisons devraient se concentrer sur la punition stricte et l'isolement plutôt que sur le confort."
    }
  },
  {
    "id": 89,
    "categoryKey": "tech",
    "axis": "soc",
    "multiplier": -1,
    "isQuick": true,
    "text": {
      "pl": "Rząd powinien surowo kontrolować i licencjonować wszystkie zaawansowane modele sztucznej inteligencji.",
      "en": "The government should strictly regulate and license all advanced artificial intelligence models.",
      "es": "El gobierno debe regular y licenciar estrictamente todos los modelos avanzados de inteligencia artificial.",
      "de": "Die Regierung sollte alle fortgeschrittenen Modelle künstlicher Intelligenz streng lizenzieren.",
      "ru": "Правительство должно жестко контролировать и лицензировать разработку искусственного интеллекта.",
      "fr": "Le gouvernement devrait contrôler et certifier strictement les modèles d'intelligence artificielle."
    }
  },
  {
    "id": 90,
    "categoryKey": "tech",
    "axis": "soc",
    "multiplier": 1,
    "isQuick": true,
    "text": {
      "pl": "Kryptowaluty (np. Bitcoin) powinny rozwijać się swobodnie bez państwowego nadzoru i rejestracji.",
      "en": "Cryptocurrencies (e.g. Bitcoin) should operate freely without state registration or financial surveillance.",
      "es": "Las criptomonedas (como Bitcoin) deben operar libremente sin registro estatal ni vigilancia financiera.",
      "de": "Kryptowährungen (wie Bitcoin) sollten sich frei ohne staatliche Überwachung entwickeln können.",
      "ru": "Криптовалюты (как Bitcoin) должны развиваться свободно, без государственного надзора и слежки.",
      "fr": "Les cryptomonnaies (comme Bitcoin) devraient fonctionner librement sans surveillance étatique."
    }
  },
  {
    "id": 91,
    "categoryKey": "tech",
    "axis": "soc",
    "multiplier": -1,
    "isQuick": true,
    "text": {
      "pl": "Gotówka papierowa powinna zostać wycofana i zastąpiona wyłącznie państwowym cyfrowym pieniądzem.",
      "en": "Physical cash should be phased out and replaced entirely by official central bank digital currency.",
      "es": "El dinero en efectivo debe eliminarse y ser sustituido por una moneda digital oficial del banco central.",
      "de": "Bargeld sollte abgeschafft und komplett durch digitales Zentralbankgeld ersetzt werden.",
      "ru": "Наличные деньги нужно полностью отменить и заменить государственной цифровой валютой.",
      "fr": "L'argent liquide devrait être éliminé et remplacé par une monnaie numérique de banque centrale."
    }
  },
  {
    "id": 92,
    "categoryKey": "tech",
    "axis": "soc",
    "multiplier": 1,
    "isQuick": false,
    "text": {
      "pl": "Komunikatory powinny mieć prawo do pełnego szyfrowania wiadomości bez tylnych furtek dla policji.",
      "en": "Messaging apps must have the right to end-to-end encryption with zero backdoors for police.",
      "es": "Las aplicaciones de mensajería deben tener derecho al cifrado total sin puertas traseras para la policía.",
      "de": "Messaging-Apps sollten das Recht auf Ende-zu-Ende-Verschlüsselung ohne Hintertüren für Behörden haben.",
      "ru": "Мессенджеры должны иметь право на полное шифрование без лазеек и закладок для спецслужб.",
      "fr": "Les messageries devraient avoir le droit au chiffrement complet sans portes dérobées pour la police."
    }
  },
  {
    "id": 93,
    "categoryKey": "tech",
    "axis": "soc",
    "multiplier": -1,
    "isQuick": false,
    "text": {
      "pl": "Państwo powinno kontrolować algorytmy portali społecznościowych, aby usuwać fałszywe informacje.",
      "en": "The state should audit and control social media algorithms to combat online disinformation.",
      "es": "El Estado debe controlar los algoritmos de las redes sociales para frenar la desinformación.",
      "de": "Der Staat sollte Social-Media-Algorithmen kontrollieren, um Falschinformationen einzudämmen.",
      "ru": "Государство должно контролировать алгоритмы соцсетей для борьбы с фейками и дезинформацией.",
      "fr": "L'État devrait contrôler les algorithmes des réseaux sociaux pour lutter contre la désinformation."
    }
  },
  {
    "id": 94,
    "categoryKey": "tech",
    "axis": "soc",
    "multiplier": 1,
    "isQuick": false,
    "text": {
      "pl": "Dostawcy internetu muszą traktować cały ruch sieciowy jednakowo (zasada neutralności sieci).",
      "en": "Internet service providers must treat all web traffic equally (the principle of net neutrality).",
      "es": "Los proveedores de internet deben tratar todo el tráfico por igual (neutralidad de la red).",
      "de": "Internetanbieter müssen den gesamten Datenverkehr gleich behandeln (Netzneutralität).",
      "ru": "Интернет-провайдеры обязаны пропускать весь трафик одинаково (принцип сетевого нейтралитета).",
      "fr": "Les fournisseurs d'accès à internet doivent traiter tout le trafic de façon égale (neutralité du net)."
    }
  },
  {
    "id": 95,
    "categoryKey": "tech",
    "axis": "soc",
    "multiplier": -1,
    "isQuick": false,
    "text": {
      "pl": "Eksperymenty nad modyfikacją ludzkiego DNA i klonowaniem powinny być całkowicie zakazane.",
      "en": "Scientific experiments on human genetic modification and cloning should be banned by law.",
      "es": "Los experimentos de modificación genética en embriones humanos y clonación deben prohibirse.",
      "de": "Genetische Veränderungen am Menschen und Klonexperimente sollten gesetzlich streng verboten sein.",
      "ru": "Эксперименты по генетической модификации человека и клонированию должны быть запрещены.",
      "fr": "Les modifications génétiques humaines et le clonage devraient être formellement interdits."
    }
  },
  {
    "id": 96,
    "categoryKey": "tech",
    "axis": "soc",
    "multiplier": 1,
    "isQuick": false,
    "text": {
      "pl": "Oprogramowanie i algorytmy AI stworzone za publiczne pieniądze powinny być darmowe dla każdego (Open Source).",
      "en": "Software and AI models funded by public money must be made free and open-source for everyone.",
      "es": "El software y los algoritmos financiados con dinero público deben ser código abierto y gratuitos.",
      "de": "Öffentlich finanzierte Software und KI-Modelle sollten für jedermann frei als Open Source zugänglich sein.",
      "ru": "Программы и модели ИИ, созданные за бюджетные деньги, должны быть открыты для всех (Open Source).",
      "fr": "Les logiciels et modèles d'IA financés par des fonds publics devraient être libres et en open source."
    }
  },
  {
    "id": 97,
    "categoryKey": "tech",
    "axis": "soc",
    "multiplier": -1,
    "isQuick": false,
    "text": {
      "pl": "Autonomiczne drony bojowe podejmujące decyzję o ataku na człowieka powinny być zakazane na świecie.",
      "en": "Autonomous military killer drones that make strike decisions without human input must be banned globally.",
      "es": "Los drones militares autónomos capaces de atacar sin intervención humana deben prohibirse en el mundo.",
      "de": "Autonome bewaffnete Drohnen, die selbstständig über Angriffe entscheiden, sollten weltweit verboten werden.",
      "ru": "Боевые беспилотники, способные без человека принимать решение об атаке, должны быть запрещены.",
      "fr": "Les drones armés autonomes décidant de frappes sans contrôle humain devraient être interdits."
    }
  },
  {
    "id": 98,
    "categoryKey": "tech",
    "axis": "soc",
    "multiplier": 1,
    "isQuick": false,
    "text": {
      "pl": "Każdy programista powinien mieć prawo swobodnie tworzyć i publikować modele sztucznej inteligencji.",
      "en": "Any developer should have the unrestricted right to build and release open-weight AI software.",
      "es": "Cualquier desarrollador debe tener derecho a crear y publicar modelos de inteligencia artificial abiertos.",
      "de": "Jeder Entwickler sollte das Recht haben, freie KI-Modelle ohne staatliche Hürden zu veröffentlichen.",
      "ru": "Любой разработчик должен иметь право свободно создавать и выкладывать открытые модели ИИ.",
      "fr": "Tout développeur devrait pouvoir créer et publier librement des modèles d'IA en open source."
    }
  },
  {
    "id": 99,
    "categoryKey": "tech",
    "axis": "soc",
    "multiplier": -1,
    "isQuick": false,
    "text": {
      "pl": "Państwo powinno stworzyć centralną bazę danych z kodami DNA i odciskami palców wszystkich obywateli.",
      "en": "The state should maintain a centralized biometric database of DNA and fingerprints for all citizens.",
      "es": "El Estado debe crear una base de datos biométrica centralizada con ADN y huellas de todos los ciudadanos.",
      "de": "Der Staat sollte eine zentrale biometrische Datenbank mit DNA und Fingerabdrücken aller Bürger führen.",
      "ru": "Государство должно создать единую базу ДНК и отпечатков пальцев всех граждан страны.",
      "fr": "L'État devrait gérer une base de données biométrique centralisée de l'ADN et des empreintes de tous."
    }
  },
  {
    "id": 100,
    "categoryKey": "tech",
    "axis": "soc",
    "multiplier": 1,
    "isQuick": false,
    "text": {
      "pl": "Okres ochrony praw autorskich i patentów technologicznych powinien zostać radykalnie skrócony.",
      "en": "Copyright and tech patent protection terms should be drastically shortened to foster innovation.",
      "es": "La duración de los derechos de autor y patentes debe reducirse drásticamente para agilizar la innovación.",
      "de": "Urheberrechte und Technologiepatente sollten zeitlich drastisch verkürzt werden, um Innovation zu fördern.",
      "ru": "Срок действия патентов и авторских прав должен быть существенно сокращен.",
      "fr": "La durée des droits d'auteur et brevets technologiques devrait être considérablement réduite."
    }
  },
  {
    "id": 101,
    "categoryKey": "tech",
    "axis": "soc",
    "multiplier": 1,
    "isQuick": false,
    "text": {
      "pl": "Prywatne firmy kosmiczne powinny móc swobodnie eksplorować i wydobywać surowce na Księżycu i planetoidach.",
      "en": "Private space enterprises should be free to explore and extract asteroid resources without UN quotas.",
      "es": "Las empresas espaciales privadas deben poder explorar y explotar recursos lunares y asteroides libremente.",
      "de": "Private Raumfahrtunternehmen sollten Rohstoffe auf dem Mond und Asteroiden frei abbauen dürfen.",
      "ru": "Частные космические компании должны иметь право свободно добывать ресурсы на Луне и астероидах.",
      "fr": "Les entreprises spatiales privées devraient pouvoir exploiter librement les ressources des astéroïdes."
    }
  },
  {
    "id": 102,
    "categoryKey": "ecology",
    "axis": "soc",
    "multiplier": 1,
    "isQuick": true,
    "text": {
      "pl": "Ochrona klimatu i redukcja spalin powinny być priorytetem, nawet jeśli podnosi to koszty życia.",
      "en": "Climate action and cutting greenhouse emissions should be top priority even if living costs rise.",
      "es": "La acción climática y reducir emisiones debe ser prioridad absoluta aunque encarezca el coste de vida.",
      "de": "Klimaschutz und Emissionssenkung sollten oberste Priorität haben, auch wenn dies das Leben verteuert.",
      "ru": "Борьба с изменением климата должна быть главным приоритетом, даже если вырастут расходы людей.",
      "fr": "La protection du climat devrait être la priorité absolue même si cela augmente le coût de la vie."
    }
  },
  {
    "id": 103,
    "categoryKey": "ecology",
    "axis": "soc",
    "multiplier": -1,
    "isQuick": true,
    "text": {
      "pl": "Powinniśmy wydobywać węgiel i gaz tak długo, jak zapewniają nam tani prąd i niezależność.",
      "en": "We should burn domestic coal and gas as long as they provide cheap energy and independence.",
      "es": "Debemos seguir usando carbón y gas nacional mientras aporten energía barata e independencia.",
      "de": "Wir sollten heimische Kohle und Gas nutzen, solange sie billigen Strom und Unabhängigkeit sichern.",
      "ru": "Мы должны добывать уголь и газ до тех пор, пока они дают нам дешевое электричество.",
      "fr": "Nous devrions exploiter notre charbon et gaz tant qu'ils garantissent une énergie bon marché."
    }
  },
  {
    "id": 104,
    "categoryKey": "ecology",
    "axis": "soc",
    "multiplier": -1,
    "isQuick": true,
    "text": {
      "pl": "Zakaz sprzedaży nowych samochodów spalinowych od 2035 roku to błąd uderzający w kierowców.",
      "en": "Banning the sale of new petrol and diesel cars by 2035 is an unfair burden on regular drivers.",
      "es": "Prohibir la venta de coches de combustión a partir de 2035 es un error que perjudica al ciudadano.",
      "de": "Das Verbot von Neuwagen mit Verbrennungsmotor ab 2035 ist ein Fehler, der Autofahrer überfordert.",
      "ru": "Запрет продажи новых бензиновых автомобилей с 2035 года — это ошибка, бьющая по карману водителей.",
      "fr": "Interdire la vente des voitures thermiques neuves dès 2035 est une erreur pénalisant les automobilistes."
    }
  },
  {
    "id": 105,
    "categoryKey": "ecology",
    "axis": "soc",
    "multiplier": 1,
    "isQuick": false,
    "text": {
      "pl": "Krótkie loty samolotem powinny być zakazane na trasach, gdzie pociąg jedzie poniżej 3 godzin.",
      "en": "Short-haul airline flights should be banned on routes reachable by train in under 3 hours.",
      "es": "Los vuelos comerciales cortos deben prohibirse en rutas con alternativas en tren de menos de 3 horas.",
      "de": "Kurzstreckenflüge sollten auf Strecken mit Zugverbindungen unter 3 Stunden verboten werden.",
      "ru": "Короткие авиарейсы нужно запретить на маршрутах, где на поезде можно доехать быстрее 3 часов.",
      "fr": "Les vols intérieurs courts devraient être interdits sur les lignes reliées en train en moins de 3 heures."
    }
  },
  {
    "id": 106,
    "categoryKey": "ecology",
    "axis": "soc",
    "multiplier": -1,
    "isQuick": false,
    "text": {
      "pl": "Przepisy ochrony środowiska nie powinny blokować budowy ważnych dróg i fabryk.",
      "en": "Environmental rules should not delay or block the construction of highways, factories, and power plants.",
      "es": "Las normas ecológicas no deben frenar la construcción de autopistas, fábricas y centrales eléctricas.",
      "de": "Umweltauflagen sollten den Bau wichtiger Autobahnen, Fabriken und Kraftwerke nicht blockieren.",
      "ru": "Экологические нормы не должны задерживать строительство важных дорог, заводов и электростанций.",
      "fr": "Les règles écologiques ne devraient pas bloquer la construction d'autoroutes, d'usines et de centrales."
    }
  },
  {
    "id": 107,
    "categoryKey": "ecology",
    "axis": "soc",
    "multiplier": 1,
    "isQuick": false,
    "text": {
      "pl": "Trzymanie zwierząt w ciasnych klatkach na fermach przemysłowych powinno być zakazane.",
      "en": "Caging farm animals in tight battery cages in industrial farms should be completely outlawed.",
      "es": "El confinamiento de animales de granja en jaulas en la ganadería intensiva debe prohibirse.",
      "de": "Käfighaltung von Nutztieren in industriellen Zuchtbetrieben sollte ausnahmslos verboten werden.",
      "ru": "Клеточное содержание животных на птицефабриках и фермах должно быть полностью запрещено.",
      "fr": "L'élevage en cage des animaux dans les fermes industrielles devrait être totalement interdit."
    }
  },
  {
    "id": 108,
    "categoryKey": "ecology",
    "axis": "soc",
    "multiplier": -1,
    "isQuick": false,
    "text": {
      "pl": "Podatki od emisji CO2 osłabiają nasz przemysł, podczas gdy Chiny i Indie bezkarnie zanieczyszczają świat.",
      "en": "Carbon taxes weaken our industry while emerging economies like China and India pollute freely.",
      "es": "Los impuestos a las emisiones debilitan a nuestras industrias mientras gigantes como China contaminan sin freno.",
      "de": "CO2-Steuern schwächen unsere Industrie, während Schwellenländer ungehindert weiter Emissionen ausstoßen.",
      "ru": "Углеродные налоги душат нашу промышленность, пока Китай и Индия продолжают загрязнять атмосферу.",
      "fr": "Les taxes carbone affaiblissent notre industrie alors que des pays comme la Chine polluent impunément."
    }
  },
  {
    "id": 109,
    "categoryKey": "ecology",
    "axis": "soc",
    "multiplier": 1,
    "isQuick": false,
    "text": {
      "pl": "Wjazd starych aut spalinowych do centrów dużych miast powinien być zakazany.",
      "en": "Older polluting vehicles should be barred from entering major urban city centers.",
      "es": "El acceso de vehículos diésel y gasolina antiguos a los centros urbanos debe restringirse por ley.",
      "de": "Älteren Dieseln und Benzinern sollte die Einfahrt in Innenstädte untersagt werden.",
      "ru": "Въезд старых автомобилей с выхлопами в центры крупных городов должен быть закрыт.",
      "fr": "L'accès des véhicules polluants aux centres des grandes villes devrait être totalement banni."
    }
  },
  {
    "id": 110,
    "categoryKey": "ecology",
    "axis": "soc",
    "multiplier": 1,
    "isQuick": false,
    "text": {
      "pl": "Wszystkie dopłaty do paliw kopalnych powinny zostać natychmiast przeniesione na wiatraki i fotowoltaikę.",
      "en": "All government subsidies for fossil fuels should immediately shift to solar and wind energy.",
      "es": "Todos los subsidios a los combustibles fósiles deben trasladarse de inmediato a renovables.",
      "de": "Sämtliche Subventionen für fossile Brennstoffe sollten sofort in Solar- und Windkraft fließen.",
      "ru": "Все субсидии на нефть и уголь должны быть немедленно переведены на развитие солнечной и ветровой энергии.",
      "fr": "Toutes les subventions aux énergies fossiles devraient être redirigées vers le solaire et l'éolien."
    }
  },
  {
    "id": 111,
    "categoryKey": "ecology",
    "axis": "soc",
    "multiplier": -1,
    "isQuick": false,
    "text": {
      "pl": "Budowa nowoczesnych elektrowni atomowych jest konieczna, by zapewnić stabilny i bezpieczny prąd.",
      "en": "Building modern nuclear power plants is essential to secure reliable base-load electricity.",
      "es": "Construir centrales nucleares modernas es imprescindible para garantizar energía limpia y constante.",
      "de": "Der Bau moderner Kernkraftwerke ist unerlässlich, um sicheren und grundlastfähigen Strom zu sichern.",
      "ru": "Строительство современных атомных станций необходимо для надежного электроснабжения.",
      "fr": "La construction de centrales nucléaires modernes est indispensable pour une électricité stable."
    }
  },
  {
    "id": 112,
    "categoryKey": "ecology",
    "axis": "soc",
    "multiplier": 1,
    "isQuick": false,
    "text": {
      "pl": "Jednorazowe plastikowe opakowania i butelki powinny zostać całkowicie wycofane ze sprzedaży.",
      "en": "Single-use plastic food packaging and beverage bottles should be completely banned from retail.",
      "es": "Los envases y botellas de plástico de un solo uso deben prohibirse por completo en las tiendas.",
      "de": "Einweg-Plastikverpackungen und Einwegflaschen sollten im Handel ausnahmslos verboten werden.",
      "ru": "Одноразовая пластиковая упаковка и бутылки должны быть полностью выведены из оборота.",
      "fr": "Les emballages et bouteilles en plastique à usage unique devraient être interdits à la vente."
    }
  },
  {
    "id": 113,
    "categoryKey": "ecology",
    "axis": "soc",
    "multiplier": -1,
    "isQuick": false,
    "text": {
      "pl": "Rolnicy powinni mieć swobodę stosowania nawozów i pestycydów, by utrzymać wysokie plony żywności.",
      "en": "Farmers should be free to use fertilizers and pesticides to ensure high domestic crop yields.",
      "es": "Los agricultores deben tener libertad para usar fertilizantes y fitosanitarios para mantener cosechas altas.",
      "de": "Landwirte sollten Düngemittel und Pflanzenschutzmittel nutzen dürfen, um hohe Ernten zu sichern.",
      "ru": "Фермеры должны иметь право применять удобрения для обеспечения высоких урожаев.",
      "fr": "Les agriculteurs devraient être libres d'utiliser les engrais pour préserver les rendements alimentaires."
    }
  },
  {
    "id": 114,
    "categoryKey": "ecology",
    "axis": "soc",
    "multiplier": -1,
    "isQuick": false,
    "text": {
      "pl": "Testowanie leków na zwierzętach laboratoryjnych jest konieczne dla ratowania ludzkiego życia.",
      "en": "Medical research testing on animals remains necessary to develop life-saving treatments for humans.",
      "es": "La experimentación médica en animales sigue siendo necesaria para salvar vidas humanas.",
      "de": "Medizinische Tierversuche sind weiterhin notwendig, um lebensrettende Behandlungen zu entwickeln.",
      "ru": "Тестирование новых лекарств на животных необходимо для спасения человеческих жизней.",
      "fr": "Les tests médicaux sur les animaux restent nécessaires pour sauver des vies humaines."
    }
  },
  {
    "id": 115,
    "categoryKey": "culture",
    "axis": "soc",
    "multiplier": 1,
    "isQuick": true,
    "text": {
      "pl": "Kościół powinien być całkowicie oddzielony od państwa i nie otrzymywać żadnych pieniędzy z podatków.",
      "en": "Religious institutions should be strictly separated from government and receive zero taxpayer funding.",
      "es": "Las iglesias deben estar totalmente separadas del Estado y no recibir financiación pública.",
      "de": "Die Kirche sollte strikt vom Staat getrennt sein und keinerlei Steuergelder erhalten.",
      "ru": "Церковь должна быть полностью отделена от государства и не получать никаких денег из бюджета.",
      "fr": "Les cultes devraient être strictement séparés de l'État et ne recevoir aucun financement public."
    }
  },
  {
    "id": 116,
    "categoryKey": "culture",
    "axis": "soc",
    "multiplier": -1,
    "isQuick": true,
    "text": {
      "pl": "Wartości chrześcijańskie i tradycja narodowa powinny być podstawą wychowania dzieci w szkole.",
      "en": "Traditional and Christian values should form the bedrock of youth education in schools.",
      "es": "Los valores tradicionales y cristianos deben ser el pilar de la educación en las escuelas.",
      "de": "Traditionelle und christliche Werte sollten das Fundament der Bildung in Schulen bilden.",
      "ru": "Традиционные и христианские ценности должны быть основой воспитания детей в школах.",
      "fr": "Les valeurs traditionnelles et chrétiennes devraient être le socle de l'éducation scolaire."
    }
  },
  {
    "id": 117,
    "categoryKey": "culture",
    "axis": "soc",
    "multiplier": 1,
    "isQuick": false,
    "text": {
      "pl": "Małżeństwa osób tej samej płci powinny być w pełni legalne i mieć dokładnie takie same prawa.",
      "en": "Same-sex marriage should be fully legalized with identical adoption and marital rights.",
      "es": "El matrimonio entre personas del mismo sexo debe ser plenamente legal con los mismos derechos.",
      "de": "Die gleichgeschlechtliche Ehe sollte vollständig legalisiert sein und exakt dieselben Rechte haben.",
      "ru": "Однополые браки должны быть полностью легальны и иметь точно такие же права.",
      "fr": "Le mariage entre personnes de même sexe devrait être pleinement légalisé avec les mêmes droits."
    }
  },
  {
    "id": 118,
    "categoryKey": "culture",
    "axis": "soc",
    "multiplier": -1,
    "isQuick": false,
    "text": {
      "pl": "Tradycyjna rodzina (kobieta, mężczyzna i dzieci) powinna być szczególnie uprzywilejowana przez państwo.",
      "en": "The traditional nuclear family (father, mother, and children) should receive special constitutional favor.",
      "es": "La familia tradicional (padre, madre e hijos) debe tener una protección constitucional privilegiada.",
      "de": "Die traditionelle Familie (Vater, Mutter, Kinder) sollte vom Staat besonders privilegiert gefördert werden.",
      "ru": "Традиционная семья (мужчина, женщина и дети) должна пользоваться особыми льготами от государства.",
      "fr": "La famille traditionnelle (homme, femme et enfants) devrait être particulièrement privilégiée par l'État."
    }
  },
  {
    "id": 119,
    "categoryKey": "culture",
    "axis": "soc",
    "multiplier": 1,
    "isQuick": false,
    "text": {
      "pl": "Kobieta powinna mieć prawo do legalnej aborcji na życzenie w pierwszych miesiącach ciąży.",
      "en": "Women should have the legal right to voluntary abortion on request in the early stages of pregnancy.",
      "es": "La mujer debe tener derecho al aborto legal y seguro a petición propia en las primeras semanas.",
      "de": "Frauen sollten das Recht auf einen legalen Schwangerschaftsabbruch auf eigenen Wunsch haben.",
      "ru": "Женщина должна иметь право на законный аборт по собственному желанию на ранних сроках.",
      "fr": "Les femmes devraient avoir le droit à l'avortement légal sur demande au début de la grossesse."
    }
  },
  {
    "id": 120,
    "categoryKey": "culture",
    "axis": "soc",
    "multiplier": -1,
    "isQuick": false,
    "text": {
      "pl": "Symbole religijne (np. krzyże) powinny wisieć w klasach szkolnych i salach sądowych.",
      "en": "Religious symbols (such as crucifixes) should be displayed in school classrooms and courtrooms.",
      "es": "Los símbolos religiosos (como crucifijos) deben estar presentes en escuelas y juzgados públicos.",
      "de": "Religiöse Symbole (wie Kreuze) sollten in Klassenzimmern und Gerichtssälen präsent sein.",
      "ru": "Религиозные символы (например, кресты) должны висеть в школьных классах и судах.",
      "fr": "Les symboles religieux (comme les croix) devraient être présents dans les salles de classe et tribunaux."
    }
  },
  {
    "id": 121,
    "categoryKey": "culture",
    "axis": "soc",
    "multiplier": 1,
    "isQuick": false,
    "text": {
      "pl": "Osoby transpłciowe powinny móc zmienić oznaczenie płci w dowodzie prostą deklaracją w urzędzie.",
      "en": "Transgender citizens should be able to update their legal gender marker by simple civil declaration.",
      "es": "Las personas trans deben poder cambiar su género legal en el registro mediante simple declaración.",
      "de": "Transgeschlechtliche Personen sollten ihren Geschlechtseintrag auf einfache Erklärung ändern können.",
      "ru": "Трансгендерные люди должны иметь право менять запись о поле в паспорте по простому заявлению.",
      "fr": "Les personnes transgenres devraient pouvoir modifier leur état civil par simple déclaration."
    }
  },
  {
    "id": 122,
    "categoryKey": "culture",
    "axis": "soc",
    "multiplier": -1,
    "isQuick": false,
    "text": {
      "pl": "Państwo powinno aktywnie chronić kulturę narodową przed obcymi wpływami i modami.",
      "en": "The state should actively protect domestic national culture from foreign influences and fads.",
      "es": "El Estado debe proteger activamente la identidad cultural nacional frente a influencias extranjeras.",
      "de": "Der Staat sollte die einheimische Kultur aktiv vor ausländischen Einflüssen und Moden schützen.",
      "ru": "Государство должно активно защищать национальную культуру от чужих зарубежных влияний.",
      "fr": "L'État devrait protéger activement l'identité culturelle nationale contre les influences extérieures."
    }
  },
  {
    "id": 123,
    "categoryKey": "culture",
    "axis": "soc",
    "multiplier": 1,
    "isQuick": false,
    "text": {
      "pl": "Rzetelna edukacja seksualna o antykoncepcji i relacjach powinna być obowiązkowa w szkołach.",
      "en": "Objective sex education covering contraception and consent should be mandatory in all schools.",
      "es": "La educación sexual integral sobre métodos anticonceptivos y consentimiento debe ser obligatoria.",
      "de": "Aufklärender Sexualunterricht über Verhütung und Partnerschaft sollte in Schulen Pflicht sein.",
      "ru": "Полноценное половое просвещение о контрацепции должно быть обязательным предметом в школах.",
      "fr": "Une éducation sexuelle complète sur la contraception et le consentement devrait être obligatoire à l'école."
    }
  },
  {
    "id": 124,
    "categoryKey": "culture",
    "axis": "soc",
    "multiplier": -1,
    "isQuick": false,
    "text": {
      "pl": "Publiczne media i teatry nie powinny wystawiać dzieł obrażających uczucia religijne.",
      "en": "Public broadcasters and state theaters should not stage plays that mock religious beliefs.",
      "es": "Los medios públicos y teatros estatales no deben emitir obras que ofendan las creencias religiosas.",
      "de": "Öffentliche Medien und Theater sollten keine Stücke fördern, die religiöse Gefühle verletzen.",
      "ru": "Государственные театры и телеканалы не должны ставить спектакли, оскорбляющие чувства верующих.",
      "fr": "Les médias publics et théâtres ne devraient pas financer d'œuvres bafouant les croyances religieuses."
    }
  },
  {
    "id": 125,
    "categoryKey": "culture",
    "axis": "soc",
    "multiplier": 1,
    "isQuick": false,
    "text": {
      "pl": "Urzędy państwowe i szkoły muszą zachowywać całkowitą neutralność światopoglądową.",
      "en": "Public state institutions, courts, and civil service must maintain complete secular neutrality.",
      "es": "Las instituciones públicas, juzgados y escuelas deben mantener una neutralidad laica absoluta.",
      "de": "Staatliche Behörden, Gerichte und Schulen müssen weltanschaulich absolut neutral bleiben.",
      "ru": "Государственные учреждения и школы обязаны сохранять полный религиозный нейтралитет.",
      "fr": "Les institutions publiques et écoles doivent respecter une neutralité laïque absolue."
    }
  },
  {
    "id": 126,
    "categoryKey": "culture",
    "axis": "soc",
    "multiplier": -1,
    "isQuick": false,
    "text": {
      "pl": "Państwowe media i programy nauczania powinny budować dumę z narodowej historii i tradycji.",
      "en": "Public television and school history curricula should actively foster pride in national heritage.",
      "es": "La televisión pública y el currículo escolar deben promover con orgullo el patriotismo y la historia.",
      "de": "Öffentliche Medien und Geschichtsunterricht sollten Stolz auf das nationale Erbe fördern.",
      "ru": "Государственные каналы и учебники истории должны воспитывать гордость за свою страну.",
      "fr": "L'audiovisuel public et les programmes scolaires devraient cultiver la fierté de l'histoire nationale."
    }
  },
  {
    "id": 127,
    "categoryKey": "society",
    "axis": "soc",
    "multiplier": 1,
    "isQuick": true,
    "text": {
      "pl": "Parytety dla kobiet na listach wyborczych i we władzach spółek powinny być obowiązkowe.",
      "en": "Gender quotas for women on election ballots and corporate boards should be legally mandatory.",
      "es": "Las cuotas de género obligatorias para mujeres en listas electorales y empresas deben ser ley.",
      "de": "Geschlechterquoten für Frauen auf Wahllisten und in Unternehmensvorständen sollten Pflicht sein.",
      "ru": "Квоты для женщин в избирательных списках и советах директоров компаний должны быть обязательными.",
      "fr": "Des quotas de femmes sur les listes électorales et dans les conseils d'administration devraient être obligatoires."
    }
  },
  {
    "id": 128,
    "categoryKey": "society",
    "axis": "soc",
    "multiplier": -1,
    "isQuick": true,
    "text": {
      "pl": "Przy zatrudnianiu i na studiach powinny decydować wyłącznie kwalifikacje, bez punktów za płeć czy pochodzenie.",
      "en": "Hiring and college admissions should be based solely on merit, without race or gender diversity bonus points.",
      "es": "En las contrataciones y admisiones universitarias solo debe primar el mérito personal, sin cuotas.",
      "de": "Bei Einstellungen und Studienplätzen sollten rein Leistung und Eignung zählen, ohne Quoten.",
      "ru": "При приеме на работу и в университеты должны решать только знания, без баллов за пол или происхождение.",
      "fr": "Les embauches et admissions universitaires devraient reposer uniquement sur le mérite individuel."
    }
  },
  {
    "id": 129,
    "categoryKey": "society",
    "axis": "soc",
    "multiplier": 1,
    "isQuick": false,
    "text": {
      "pl": "Praca seksualna dorosłych osób za obopólną zgodą powinna być w pełni zalegalizowanym zawodem.",
      "en": "Consensual adult sex work should be a fully legalized, regulated, and taxed occupation.",
      "es": "El trabajo sexual voluntario entre adultos debe ser una profesión legal con derechos laborales.",
      "de": "Einvernehmliche Sexarbeit unter Erwachsenen sollte ein vollständig legaler, regulierter Beruf sein.",
      "ru": "Секс-работа совершеннолетних по добровольному согласию должна быть полностью легальной профессией.",
      "fr": "Le travail du sexe consenti entre adultes devrait être une profession légalisée et réglementée."
    }
  },
  {
    "id": 130,
    "categoryKey": "society",
    "axis": "soc",
    "multiplier": -1,
    "isQuick": false,
    "text": {
      "pl": "Publiczne obrażanie symboli religijnych i profanacja świątyń powinny być karane więzieniem.",
      "en": "Public desecration of religious symbols and vandalizing places of worship must carry prison terms.",
      "es": "La profanación pública de símbolos religiosos y templos debe castigarse con penas de prisión.",
      "de": "Öffentliche Beschimpfung religiöser Symbole und Kirchenschändung sollten mit Gefängnis bestraft werden.",
      "ru": "Оскорбление религиозных святынь и осквернение храмов должно наказываться тюремным заключением.",
      "fr": "La profanation publique de symboles religieux et de lieux de culte devrait être punie de prison."
    }
  },
  {
    "id": 131,
    "categoryKey": "society",
    "axis": "soc",
    "multiplier": 1,
    "isQuick": false,
    "text": {
      "pl": "Uchodźcy uciekający przed wojną powinni mieć prawo złożyć wniosek o azyl bez zawracania ich na granicy.",
      "en": "Refugees fleeing war must have the legal right to claim asylum without border pushbacks.",
      "es": "Los refugiados que huyen de la guerra deben poder solicitar asilo sin ser expulsados en caliente.",
      "de": "Kriegsflüchtlinge müssen das Recht haben, Asyl zu beantragen, ohne an der Grenze abgewiesen zu werden.",
      "ru": "Беженцы от войн должны иметь право подать заявление на убежище без силового выдворения на границе.",
      "fr": "Les réfugiés fuyant la guerre doivent pouvoir demander l'asile sans être refoulés aux frontières."
    }
  },
  {
    "id": 132,
    "categoryKey": "society",
    "axis": "soc",
    "multiplier": -1,
    "isQuick": false,
    "text": {
      "pl": "Rząd powinien karać finansowo osoby odmawiające obowiązkowych szczepień ochronnych.",
      "en": "The government should fine individuals who refuse mandatory public health vaccinations.",
      "es": "El gobierno debe multar a las personas que rechacen las vacunas obligatorias de salud pública.",
      "de": "Die Regierung sollte Bußgelder gegen Personen verhängen, die gesetzliche Pflichtimpfungen verweigern.",
      "ru": "Государство должно штрафовать граждан, отказывающихся от обязательных защитных прививок.",
      "fr": "Le gouvernement devrait sanctionner financièrement les personnes refusant les vaccins obligatoires."
    }
  },
  {
    "id": 133,
    "categoryKey": "society",
    "axis": "soc",
    "multiplier": 1,
    "isQuick": false,
    "text": {
      "pl": "Resocjalizacja i nauka zawodu w więzieniach przynoszą lepsze skutki niż długie wyroki.",
      "en": "Prisoner rehabilitation and vocational training reduce crime far better than long punitive sentences.",
      "es": "La reinserción social y la formación laboral en prisión reducen el delito mejor que penas más largas.",
      "de": "Resozialisierung und Berufsbildung im Strafvollzug senken Rückfallquoten besser als bloße Härte.",
      "ru": "Реабилитация и обучение профессии в тюрьмах снижают преступность лучше, чем долгие сроки.",
      "fr": "La réinsertion et la formation professionnelle en prison réduisent la récidive mieux que les peines lourdes."
    }
  },
  {
    "id": 134,
    "categoryKey": "society",
    "axis": "soc",
    "multiplier": -1,
    "isQuick": false,
    "text": {
      "pl": "Imigranci powinni mieć obowiązek pełnej asymilacji kulturowej i zdania testu z języka oraz tradycji.",
      "en": "Immigrants should be legally required to fully assimilate, learn the national language, and adopt local culture.",
      "es": "Los inmigrantes deben tener la obligación legal de asimilarse y superar exámenes de idioma y cultura.",
      "de": "Zuwanderer sollten gesetzlich verpflichtet sein, sich anzupassen und Sprachtests zu bestehen.",
      "ru": "Иммигранты обязаны полностью ассимилироваться, выучить язык и сдать экзамен по культуре страны.",
      "fr": "Les immigrés devraient avoir l'obligation légale de s'assimiler, d'apprendre la langue et la culture."
    }
  },
  {
    "id": 135,
    "categoryKey": "society",
    "axis": "soc",
    "multiplier": 1,
    "isQuick": false,
    "text": {
      "pl": "Osoby samotne i pary jednopłciowe powinny mieć pełne prawo do adopcji dzieci.",
      "en": "Single adults and same-sex couples should have full legal rights to adopt children.",
      "es": "Las personas solteras y las parejas del mismo sexo deben tener pleno derecho a adoptar niños.",
      "de": "Alleinstehende und gleichgeschlechtliche Paare sollten das volle Recht haben, Kinder zu adoptieren.",
      "ru": "Одинокие люди и однополые пары должны иметь полное право усыновлять детей.",
      "fr": "Les personnes célibataires et couples de même sexe devraient avoir le plein droit d'adopter des enfants."
    }
  },
  {
    "id": 136,
    "categoryKey": "society",
    "axis": "soc",
    "multiplier": -1,
    "isQuick": false,
    "text": {
      "pl": "Utrzymanie porządku publicznego jest ważniejsze niż bezwzględne prawo do ulicznych demonstracji.",
      "en": "Maintaining public order on city streets is more important than an absolute right to protest.",
      "es": "Mantener el orden público en las calles es más importante que el derecho absoluto a manifestarse.",
      "de": "Die Aufrechterhaltung der öffentlichen Ordnung ist wichtiger als das uneingeschränkte Demonstrationsrecht.",
      "ru": "Поддержание порядка на улицах важнее, чем абсолютное право на проведение уличных митингов.",
      "fr": "Le maintien de l'ordre public dans les rues est plus important que le droit absolu de manifester."
    }
  },
  {
    "id": 137,
    "categoryKey": "society",
    "axis": "soc",
    "multiplier": 1,
    "isQuick": false,
    "text": {
      "pl": "Kary za drobne przestępstwa narkotykowe powinny być zastąpione terapią i pomocą medyczną.",
      "en": "Penalties for minor drug offenses should be replaced with medical treatment and addiction therapy.",
      "es": "Las sanciones por delitos menores de drogas deben sustituirse por terapia médica y apoyo social.",
      "de": "Strafen für leichten Drogenbesitz sollten durch medizinische Hilfs- und Therapieangebote ersetzt werden.",
      "ru": "Наказания за мелкие наркопреступления нужно заменить лечением и медицинской помощью.",
      "fr": "Les sanctions pour petite détention de drogue devraient être remplacées par un suivi médical."
    }
  },
  {
    "id": 138,
    "categoryKey": "society",
    "axis": "soc",
    "multiplier": -1,
    "isQuick": false,
    "text": {
      "pl": "Nauczyciele w szkołach powinni uczyć szacunku do tradycyjnych ról męskich i kobiecych.",
      "en": "School teachers should instruct students to respect traditional male and female roles in society.",
      "es": "Los colegios deben inculcar a los alumnos el respeto a los roles masculinos y femeninos tradicionales.",
      "de": "Lehrer sollten Schülern Respekt vor den traditionellen Rollen von Mann und Frau vermitteln.",
      "ru": "Учителя в школах должны воспитывать уважение к традиционным мужским и женским ролям.",
      "fr": "Les enseignants devraient transmettre le respect des rôles masculins et féminins traditionnels."
    }
  },
  {
    "id": 139,
    "categoryKey": "security",
    "axis": "soc",
    "multiplier": -1,
    "isQuick": true,
    "text": {
      "pl": "Na granicach państwa powinny stać wysokie zapory i mury, a nielegalny wjazd musi być zablokowany.",
      "en": "Strong border walls should be built, and every illegal crossing attempt must be firmly stopped.",
      "es": "Deben construirse muros fronterizos sólidos y detener con firmeza cualquier entrada ilegal.",
      "de": "An den Staatsgrenzen sollten befestigte Grenzzäune stehen, um illegale Grenzübertritte zu stoppen.",
      "ru": "На государственных границах должны стоять прочные заборы, а незаконный въезд должен пресекаться.",
      "fr": "Des barrières frontalières solides devraient être érigées et tout franchissement illégal bloqué."
    }
  },
  {
    "id": 140,
    "categoryKey": "security",
    "axis": "soc",
    "multiplier": 1,
    "isQuick": true,
    "text": {
      "pl": "Kraje Unii Europejskiej powinny zjednoczyć się w jedno wspólne państwo z jednym rządem i armią.",
      "en": "European Union members should unite into a single federal superstate with one military and government.",
      "es": "Los países de la Unión Europea deben unirse en un solo Estado federal con un gobierno y ejército común.",
      "de": "Die Staaten der Europäischen Union sollten sich zu einem föderalen Bundesstaat mit einer Armee vereinen.",
      "ru": "Страны Евросоюза должны объединиться в единое союзное государство с общей армией и правительством.",
      "fr": "Les pays de l'Union européenne devraient s'unir en un seul État fédéral avec une armée commune."
    }
  },
  {
    "id": 141,
    "categoryKey": "security",
    "axis": "soc",
    "multiplier": -1,
    "isQuick": false,
    "text": {
      "pl": "Obowiązkowa zasadnicza służba wojskowa dla młodych obywateli powinna zostać przywrócona.",
      "en": "Mandatory military conscription for young citizens should be reinstated.",
      "es": "El servicio militar obligatorio para los jóvenes ciudadanos debe ser restablecido.",
      "de": "Die allgemeine Wehrpflicht für junge Bürger sollte wieder eingeführt werden.",
      "ru": "Обязательная срочная служба в армии для молодежи должна быть возвращена.",
      "fr": "Le service militaire obligatoire pour les jeunes citoyens devrait être rétabli."
    }
  },
  {
    "id": 142,
    "categoryKey": "security",
    "axis": "soc",
    "multiplier": 1,
    "isQuick": false,
    "text": {
      "pl": "Wyroki międzynarodowych trybunałów praw człowieka powinny być ważniejsze niż ustawy krajowego parlamentu.",
      "en": "Rulings of international human rights courts should legally overrule domestic national laws.",
      "es": "Las sentencias de tribunales internacionales de derechos humanos deben primar sobre leyes nacionales.",
      "de": "Urteile internationaler Menschenrechtsgerichte sollten über nationalen Gesetzen stehen.",
      "ru": "Решения международных судов по правам человека должны стоять выше законов национального парламента.",
      "fr": "Les arrêts des tribunaux internationaux des droits de l'homme devraient primer sur les lois nationales."
    }
  },
  {
    "id": 143,
    "categoryKey": "security",
    "axis": "soc",
    "multiplier": -1,
    "isQuick": false,
    "text": {
      "pl": "Wydatki na zbrojenia i armię powinny być priorytetem budżetowym, nawet kosztem innych dziedzin.",
      "en": "Military defense spending should take budget priority, even at the cost of cuts in other sectors.",
      "es": "El gasto militar debe ser la prioridad presupuestaria absoluta, aun a costa de otros sectores.",
      "de": "Verteidigungsausgaben sollten oberste Priorität haben, selbst auf Kosten anderer Bereiche.",
      "ru": "Расходы на армию и оружие должны быть главным приоритетом бюджета, даже в ущерб другим сферам.",
      "fr": "Les dépenses de défense militaire devraient être prioritaires dans le budget, même au détriment d'autres secteurs."
    }
  },
  {
    "id": 144,
    "categoryKey": "security",
    "axis": "soc",
    "multiplier": 1,
    "isQuick": false,
    "text": {
      "pl": "Powinniśmy dążyć do świata otwartych granic, w którym każdy człowiek może swobodnie mieszkać gdzie chce.",
      "en": "We should strive toward a world of open borders where every human can live and work anywhere.",
      "es": "Debemos aspirar a un mundo sin fronteras donde cualquier persona pueda residir donde desee.",
      "de": "Wir sollten eine Welt offener Grenzen anstreben, in der jeder Mensch überall leben und arbeiten kann.",
      "ru": "Мы должны стремиться к миру без границ, где каждый человек может свободно жить в любой стране.",
      "fr": "Nous devrions aspirer à un monde de frontières ouvertes où chacun peut vivre et travailler où il veut."
    }
  },
  {
    "id": 145,
    "categoryKey": "security",
    "axis": "soc",
    "multiplier": -1,
    "isQuick": false,
    "text": {
      "pl": "Interes narodowy własnego kraju musi zawsze stać wyżej niż międzynarodowe traktaty i zobowiązania.",
      "en": "National security interests of our own country must always come before international agreements.",
      "es": "El interés nacional del propio país debe prevalecer siempre sobre los tratados internacionales.",
      "de": "Nationale Sicherheitsinteressen des eigenen Landes müssen stets vor internationalen Verträgen stehen.",
      "ru": "Национальные интересы собственной страны должны всегда стоять выше международных договоров.",
      "fr": "L'intérêt national de notre propre pays doit toujours prévaloir sur les traités internationaux."
    }
  },
  {
    "id": 146,
    "categoryKey": "security",
    "axis": "soc",
    "multiplier": 1,
    "isQuick": false,
    "text": {
      "pl": "Bogate kraje powinny umorzyć długi najuboższym państwom świata, by zwalczyć głód i nędzę.",
      "en": "Wealthy nations should cancel sovereign debts owed by impoverished nations to combat poverty.",
      "es": "Las naciones ricas deben condonar la deuda a los países más pobres para erradicar el hambre.",
      "de": "Wohlhabende Staaten sollten die Staatsschulden ärmster Länder erlassen, um Armut zu bekämpfen.",
      "ru": "Богатые страны должны списать долги беднейшим государствам мира для борьбы с голодом и нищетой.",
      "fr": "Les pays riches devraient annuler la dette des pays les plus pauvres pour combattre la misère."
    }
  },
  {
    "id": 147,
    "categoryKey": "security",
    "axis": "soc",
    "multiplier": -1,
    "isQuick": false,
    "text": {
      "pl": "Gdy obcy reżim nam zagraża, nasza armia powinna mieć prawo do wyprzedzającego uderzenia militarnego.",
      "en": "If a hostile regime threatens our country, our armed forces should have the right to strike first.",
      "es": "Si un régimen hostil amenaza al país, nuestras fuerzas armadas deben tener derecho a un ataque preventivo.",
      "de": "Wenn ein feindliches Regime unser Land bedroht, sollte unsere Armee präventiv zuschlagen dürfen.",
      "ru": "Если враждебный режим угрожает нам, наша армия должна иметь право на упреждающий военный удар.",
      "fr": "Si un régime hostile nous menace, nos forces armées devraient avoir le droit à une frappe préventive."
    }
  },
  {
    "id": 148,
    "categoryKey": "security",
    "axis": "soc",
    "multiplier": 1,
    "isQuick": false,
    "text": {
      "pl": "Wszystkie mocarstwa powinny całkowicie i bezwarunkowo zlikwidować swoje arsenały broni jądrowej.",
      "en": "All nuclear world powers must completely and unconditionally abolish their nuclear arsenals.",
      "es": "Todas las potencias nucleares deben eliminar por completo y sin condiciones sus arsenals atómicos.",
      "de": "Alle Atommächte sollten ihre Kernwaffenarsenale vollständig und bedingungslos abrüsten.",
      "ru": "Все мировые державы должны полностью и безоговорочно уничтожить свои ядерные арсеналы.",
      "fr": "Toutes les puissances nucléaires devraient démanteler totalement et sans condition leurs arsenaux atomiques."
    }
  },
  {
    "id": 149,
    "categoryKey": "security",
    "axis": "soc",
    "multiplier": -1,
    "isQuick": false,
    "text": {
      "pl": "Każdy obywatel powinien przejść obowiązkowe przeszkolenie strzeleckie i obronne na wypadek wojny.",
      "en": "Every citizen should undergo mandatory basic firearms and civil defense training for wartime.",
      "es": "Todo ciudadano debe recibir adiestramiento básico obligatorio en armas y defensa para caso de guerra.",
      "de": "Jeder Bürger sollte ein verpflichtendes Schieß- und Zivilschutztraining für den Ernstfall absolvieren.",
      "ru": "Каждый гражданин должен пройти обязательную начальную военную подготовку на случай войны.",
      "fr": "Chaque citoyen devrait suivre une formation obligatoire au tir et à la défense civile en cas de guerre."
    }
  },
  {
    "id": 150,
    "categoryKey": "security",
    "axis": "soc",
    "multiplier": 1,
    "isQuick": false,
    "text": {
      "pl": "Traktaty pokojowe i współpraca dyplomatyczna są lepszym zabezpieczeniem kraju niż bazy wojskowe.",
      "en": "Diplomatic peace treaties and multilateral diplomacy protect nations better than military bases.",
      "es": "Los tratados diplomáticos multilaterales garantizan la paz mucho mejor que las bases militares.",
      "de": "Diplomatische Verträge und internationale Kooperation schützen Staaten besser als Militärstützpunkte.",
      "ru": "Дипломатические договоры о мире защищают страну надежнее, чем строительство военных баз.",
      "fr": "Les traités diplomatiques et la coopération internationale protègent mieux la paix que les bases militaires."
    }
  }
];

module.exports = { rawQuestions };
