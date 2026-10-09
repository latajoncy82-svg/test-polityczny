/**
 * KATALOG 32 IDEOLOGII, 24 ŚWIATOWYCH LIDERÓW I 12 MIĘDZYNARODOWYCH PARTII
 * Test Polityczny - Wersja Globalna 2026
 * Obsługa 4 języków: PL, EN, RU, FR
 */

const worldIdeologies = [
  {
    "id": "neocapitalism",
    "name": {
      "pl": "Neokapitalizm / Nowoczesny Wolny Rynek",
      "en": "Neo-Capitalism / Modern Free Market",
      "ru": "Неокапитализм / Современный свободный рынок",
      "fr": "Néo-capitalisme / Marché libre moderne"
    },
    "subtitle": {
      "pl": "Maksymalizacja wolności gospodarczej, innowacje technologiczne i redukcja aparatu państwowego",
      "en": "Economic deregulation, technological innovation, and aggressive state retrenchment",
      "ru": "Экономическая дерегуляция, технологические инновации и минимизация госаппарата",
      "fr": "Dérégulation économique, innovation technologique et réduction drastique de l'État"
    },
    "desc": {
      "pl": "Uważasz, że dynamiczny kapitalizm rynkowy, przedsiębiorczość oraz globalny przepływ kapitału są jedynymi motorami postępu ludzkości. Odrzucasz etatyzm, podatki progresywne i regulacje krępujące biznes, promując jednocześnie pragmatyczny modernizm.",
      "en": "You believe dynamic market capitalism, corporate innovation, and global capital flow are the sole drivers of human prosperity. You reject state intervention, progressive taxation, and stifling regulations in favor of economic liberty.",
      "ru": "Вы убеждены, что динамичный рыночный капитализм, инновации и свободный переток капитала — главные двигатели прогресса. Вы отвергаете этатизм, прогрессивные налоги и бюрократические барьеры.",
      "fr": "Vous estimez que le capitalisme de marché, l'innovation d'entreprise et les flux de capitaux sont les moteurs du progrès humain. Vous rejetez l'étatisme et la fiscalité confiscatoire au profit de la liberté d'entreprendre."
    },
    "keyFigures": [
      "Milton Friedman",
      "Ludwig von Mises",
      "Peter Thiel"
    ],
    "coordinates": {
      "econ": 85,
      "soc": 20
    }
  },
  {
    "id": "anarchocapitalism",
    "name": {
      "pl": "Anarchokapitalizm (Akup / Voluntaryzm)",
      "en": "Anarcho-Capitalism (Voluntaryism)",
      "ru": "Анархо-капитализм (Волюнтаризм)",
      "fr": "Anarcho-capitalisme (Volontarisme)"
    },
    "subtitle": {
      "pl": "Całkowita likwidacja państwa na rzecz prywatnej własności, wolnego rynku i prawa kontraktów",
      "en": "Total abolition of the state in favor of pure private property and voluntary contracts",
      "ru": "Полное упразднение государства в пользу частной собственности и свободных договоров",
      "fr": "Abolition totale de l'État au profit de la propriété privée pure et des contrats volontaires"
    },
    "desc": {
      "pl": "Uznajesz państwo za zinstytucjonalizowaną przemoc, a podatki za kradzież. Wszystkie funkcje społeczne — od sądownictwa, przez bezpieczeństwo, po infrastrukturę — powinny być świadczone przez konkurujące prywatne agencje w oparciu o Aksjomat Nieagresji (NAP).",
      "en": "You view the state as institutionalized extortion and taxation as theft. All social functions — from law enforcement and courts to roads and defense — must be provided by private competing agencies governed by the Non-Aggression Principle.",
      "ru": "Вы считаете государство узаконенным насилием, а налоги — грабежом. Все сферы жизни — от судов и охраны до дорог — должны обеспечиваться частными конкурирующими компаниями на основе принципа ненападения (NAP).",
      "fr": "Vous considérez l'État comme une coercition illégitime et l'impôt comme un vol. Toutes les fonctions régaliennes (justice, sécurité, routes) doivent être assurées par des entreprises privées concurrentes selon le principe de non-agression."
    },
    "keyFigures": [
      "Murray Rothbard",
      "David Friedman",
      "Javier Milei"
    ],
    "coordinates": {
      "econ": 98,
      "soc": 92
    }
  },
  {
    "id": "minarchism",
    "name": {
      "pl": "Minarchizm (Państwo Minimum / Prawicowy Libertarianizm)",
      "en": "Minarchism (Night-Watchman State / Libertarianism)",
      "ru": "Минархизм (Государство-ночной сторож / Либертарианство)",
      "fr": "Minarchisme (État veilleur de nuit / Libertarisme)"
    },
    "subtitle": {
      "pl": "Rola państwa zredukowana wyłącznie do armii, policji i sądów chroniących własność",
      "en": "State power strictly confined to national defense, police protection, and contract courts",
      "ru": "Полномочия государства строго ограничены армией, полицией и судами для защиты прав",
      "fr": "Pouvoir de l'État strictement limité à l'armée, la police et la justice protectrice des droits"
    },
    "desc": {
      "pl": "Wierzysz w państwo jako 'nocnego stróża'. Rząd ma tylko jedno moralne zadanie: chronić obywateli przed przemocą, kradzieżą i oszustwem. Jakakolwiek ingerencja w gospodarkę, edukację, zdrowie czy obyczaje jest niedopuszczalnym nadużyciem władzy.",
      "en": "You advocate for the night-watchman state. The government exists solely to defend individuals against violence, theft, and contract fraud. Any government intervention in healthcare, commerce, or morals constitutes an illegitimate infringement.",
      "ru": "Вы выступаете за концепцию государства — ночного сторожа. Единственная задача власти — защита граждан от внешнего нападения, насилия и мошенничества. Любое вмешательство в экономику или культуру недопустимо.",
      "fr": "Vous défendez le modèle de l'État veilleur de nuit. La puissance publique n'a pour mission que de protéger les libertés contre la violence et la fraude. Toute ingérence dans l'économie ou les mœurs est proscrite."
    },
    "keyFigures": [
      "Robert Nozick",
      "Ayn Rand",
      "Ron Paul"
    ],
    "coordinates": {
      "econ": 85,
      "soc": 75
    }
  },
  {
    "id": "classical_liberalism",
    "name": {
      "pl": "Klasyczny Liberalizm",
      "en": "Classical Liberalism",
      "ru": "Классический либерализм",
      "fr": "Libéralisme classique"
    },
    "subtitle": {
      "pl": "Rządy prawa, prawa naturalne jednostki, wolny handel i umiarkowany rząd konstytucyjny",
      "en": "Rule of law, natural individual rights, free commerce, and limited constitutional governance",
      "ru": "Верховенство права, неотъемлемые права личности, свободная торговля и конституционализм",
      "fr": "État de droit, droits naturels de l'individu, libre-échange et gouvernement constitutionnel limité"
    },
    "desc": {
      "pl": "Czerpiesz z myśli Oświecenia: wolność słowa, nietykalność własności prywatnej, trójpodział władzy i wolny handel to filary cywilizacji. Państwo powinno być ograniczone konstytucyjnie i zapewniać ramy prawne dla harmonijnego rozwoju społeczeństwa.",
      "en": "Rooted in Enlightenment philosophy, you cherish freedom of speech, inviolable property rights, separation of powers, and free markets. The state must be governed by strict constitutional limits to foster human flourishing.",
      "ru": "Опираясь на идеалы Просвещения, вы цените свободу слова, неприкосновенность собственности, разделение властей и открытые рынки. Государство должно служить лишь правовым гарантом гармоничного развития общества.",
      "fr": "Héritier des Lumières, vous valorisez la liberté d'expression, la propriété privée inviolable, la séparation des pouvoirs et le libre marché. L'État doit être strictement encadré par la constitution."
    },
    "keyFigures": [
      "John Locke",
      "Adam Smith",
      "Friedrich Hayek"
    ],
    "coordinates": {
      "econ": 65,
      "soc": 45
    }
  },
  {
    "id": "conservative_liberalism",
    "name": {
      "pl": "Konserwatywny Liberalizm",
      "en": "Conservative Liberalism",
      "ru": "Консервативный либерализм",
      "fr": "Libéralisme conservateur"
    },
    "subtitle": {
      "pl": "Wolnorynkowa przedsiębiorczość połączona z poszanowaniem tradycji, porządku i tożsamości",
      "en": "Free-market economics married to cultural tradition, social order, and national cohesion",
      "ru": "Свободная рыночная экономика в сочетании с уважением к традициям, порядку и нации",
      "fr": "Économie de libre marché associée aux traditions culturelles, à l'ordre social et à la nation"
    },
    "desc": {
      "pl": "Łączysz wiarę w prywatną przedsiębiorczość, niskie podatki i deregulację z przywiązaniem do tradycyjnych wartości etycznych, patriotyzmu i stabilności instytucjonalnej. Niechętnie patrzysz na radykalne rewolucje obyczajowe i rozrost biurokracji.",
      "en": "You blend pro-business free enterprise, low taxes, and deregulation with reverence for cultural continuity, patriotism, and social stability. You reject moral relativism and top-down social engineering.",
      "ru": "Вы объединяете приверженность низким налогам и рыночной инициативе с верностью традиционным ценностям, патриотизму и общественному порядку, отвергая резкие моральные перевороты.",
      "fr": "Vous alliez l'esprit d'entreprise, la baisse des impôts et la dérégulation à l'attachement aux valeurs traditionnelles, au patriotisme et à la stabilité morale, sans céder aux bouleversements radicaux."
    },
    "keyFigures": [
      "Margaret Thatcher",
      "Ronald Reagan",
      "Edmund Burke"
    ],
    "coordinates": {
      "econ": 70,
      "soc": -45
    }
  },
  {
    "id": "paleoconservatism",
    "name": {
      "pl": "Paleokonserwatyzm",
      "en": "Paleoconservatism",
      "ru": "Палеоконсерватизм",
      "fr": "Paléo-conservatisme"
    },
    "subtitle": {
      "pl": "Obrona tradycyjnej kultury, sceptycyzm wobec globalizmu, silne granice i decentralizacja",
      "en": "Defense of historic culture, deep skepticism of globalism, secure borders, and decentralism",
      "ru": "Защита традиционной культуры, скептицизм к глобализму, крепкие границы и изоляционизм",
      "fr": "Défense de la culture historique, rejet du mondialisme, frontières hermétiques et décentralisation"
    },
    "desc": {
      "pl": "Opierasz się na wierze chrześcijańskiej, lokalnej wspólnocie i nierozerwalnej tradycji narodowej. Sprzeciwiasz się globalizmowi, niekontrolowanej imigracji i zagranicznym interwencjom wojskowym, stawiając na suwerenność i odrodzenie rodziny.",
      "en": "Anchored in Christian heritage, regional communities, and national roots, you strongly oppose globalist institutions, open migration, and foreign military adventures, prioritizing cultural survival and the traditional household.",
      "ru": "Основываясь на христианской вере, крепкой семье и национальных традициях, вы решительно выступаете против глобализма, миграции и заграничных военных кампаний, защищая самобытность своего народа.",
      "fr": "Ancré dans l'héritage chrétien, la cellule familiale et la communauté locale, vous vous opposez résolument au mondialisme, à l'immigration de masse et à l'interventionnisme extérieur."
    },
    "keyFigures": [
      "Pat Buchanan",
      "Thomas Fleming",
      "Russell Kirk"
    ],
    "coordinates": {
      "econ": 35,
      "soc": -85
    }
  },
  {
    "id": "national_conservatism",
    "name": {
      "pl": "Narodowy Konserwatyzm",
      "en": "National Conservatism",
      "ru": "Национальный консерватизм",
      "fr": "Conservatisme national"
    },
    "subtitle": {
      "pl": "Nadrzędność suwerenności państwa narodowego, obrona tożsamości kulturowej i bezpieczeństwo granic",
      "en": "Primacy of nation-state sovereignty, defense of indigenous identity, and border integrity",
      "ru": "Приоритет национального суверенитета, защита идентичности и надежные рубежи",
      "fr": "Primauté absolue de la souveraineté nationale, défense de l'identité et contrôle des frontières"
    },
    "desc": {
      "pl": "Dla Ciebie państwo narodowe jest jedynym prawdziwym gwarantem wolności i demokracji. Odrzucasz dyktat struktur ponadnarodowych. Opowiadasz się za suwerenną polityką demograficzną, ochroną granic i wzmacnianiem więzi patriotycznych.",
      "en": "You view the sovereign nation-state as the irreplaceable guardian of democracy. You reject the overreach of supranational bodies, advocating for decisive border security, cultural patriotism, and strong communal cohesion.",
      "ru": "Вы рассматриваете национальное государство как единственный надежный оплот порядка и демократии. Вы отвергаете диктат наднациональных органов, требуя строгого визового контроля и укрепления патриотизма.",
      "fr": "Vous voyez dans l'État-nation le rempart indispensable de la démocratie. Rejetant les diktats supranationaux, vous prônez la maîtrise stricte des frontières, le patriotisme civique et la cohésion culturelle."
    },
    "keyFigures": [
      "Yoram Hazony",
      "Viktor Orbán",
      "Narendra Modi"
    ],
    "coordinates": {
      "econ": 5,
      "soc": -85
    }
  },
  {
    "id": "authoritarian_conservatism",
    "name": {
      "pl": "Tradycjonalizm / Autorytaryzm Konserwatywny",
      "en": "Traditionalist Authoritarianism",
      "ru": "Традиционализм / Консервативный авторитаризм",
      "fr": "Traditionalisme autoritaire"
    },
    "subtitle": {
      "pl": "Silna władza państwowa, hierarchia społeczna, dyscyplina moralna i prymat porządku publicznego",
      "en": "Strong state hierarchy, moral discipline, traditional authority, and strict social order",
      "ru": "Сильная централизованная власть, социальная иерархия, моральная дисциплина и строгий порядок",
      "fr": "Autorité étatique ferme, hiérarchie sociale, rigueur morale et primauté de l'ordre public"
    },
    "desc": {
      "pl": "Uznajesz, że człowiek potrzebuje silnego przewodnictwa, dyscypliny i jasnych norm moralnych. Porządek publiczny, szacunek dla władzy i religijna ortodoksja są ważniejsze niż nieokiełznana swoboda jednostki.",
      "en": "You believe society requires robust moral leadership, established hierarchy, and unwavering public order. The stability of the state, reverence for institutions, and moral clarity take precedence over permissive individualism.",
      "ru": "Вы убеждены, что общество нуждается в сильной руке, авторитете и твердых духовных скрепах. Общественный порядок, законность и традиции стоят выше распущенности и индивидуалистического хаоса.",
      "fr": "Vous estimez que la société exige un pouvoir ferme, des repères moraux solides et le respect de la hiérarchie. La concorde civile et l'ordre public priment sur l'individualisme permissif."
    },
    "keyFigures": [
      "Joseph de Maistre",
      "Carl Schmitt",
      "Nayib Bukele"
    ],
    "coordinates": {
      "econ": 20,
      "soc": -95
    }
  },
  {
    "id": "national_solidarism",
    "name": {
      "pl": "Narodowy Solidaryzm",
      "en": "National Solidarism",
      "ru": "Национальный солидаризм",
      "fr": "Solidarisme national"
    },
    "subtitle": {
      "pl": "Solidaryzm społeczny, wsparcie dla rodzin i państwowa opieka w ramach tradycyjnej wspólnoty",
      "en": "Social welfare, family support, and state intervention anchored in national identity",
      "ru": "Социальная поддержка семей, патернализм государства и национальная сплоченность",
      "fr": "Solidarité sociale, soutien aux familles et interventionnisme au sein de la communauté nationale"
    },
    "desc": {
      "pl": "Łączysz silny patriotyzm i konserwatywne wartości z państwem opiekuńczym. Uważasz, że państwo ma obowiązek wspierać rodziny, dbać o emerytów i robotników oraz kontrolować strategiczny przemysł przed zagranicznym kapitałem.",
      "en": "You integrate deep national loyalty with generous social safety nets. The state must actively shield domestic workers, provide child benefits, and manage strategic resources to maintain communal harmony.",
      "ru": "Вы совмещаете патриотизм и традиционную мораль с сильным социальным государством, требуя выплат на детей, защиты рабочих и контроля над стратегическими ресурсами ради блага нации.",
      "fr": "Vous alliez le patriotisme culturel à un modèle social protecteur. L'État a le devoir d'aider les familles, de protéger les travailleurs modestes et de préserver les leviers économiques des intérêts étrangers."
    },
    "keyFigures": [
      "Stanisław Grabski",
      "Juan Perón",
      "Roman Dmowski (skrzydło społeczne)"
    ],
    "coordinates": {
      "econ": -65,
      "soc": -75
    }
  },
  {
    "id": "paternalistic_conservatism",
    "name": {
      "pl": "Paternalistyczny Konserwatyzm (One-Nation)",
      "en": "Paternalistic / One-Nation Conservatism",
      "ru": "Патерналистский консерватизм (Единая нация)",
      "fr": "Conservatisme paternaliste (One-Nation)"
    },
    "subtitle": {
      "pl": "Odpowiedzialność elit za najuboższych, harmonia klasowa i organiczny rozwój instytucji",
      "en": "Social obligation of the privileged, organic society, and moderate welfare pragmatism",
      "ru": "Ответственность элит перед народом, классовый мир и органическое развитие институтов",
      "fr": "Devoir social des élites, harmonie entre les classes et réformes organiques prudentes"
    },
    "desc": {
      "pl": "Społeczeństwo to żywy organizm, w którym uprzywilejowani mają moralny obowiązek (noblesse oblige) troski o słabszych. Odrzucasz bezwzględny darwinizm społeczny na rzecz umiarkowanej polityki socjalnej przy zachowaniu tradycyjnego ładu.",
      "en": "Viewing society as an interconnected organism, you believe the privileged owe a duty of care to the vulnerable. You reject cutthroat market extremes in favor of cohesive social reforms that preserve stability.",
      "ru": "Рассматривая общество как целостный организм, вы выступаете за ответственность элиты перед народом и умеренные социальные реформы, избегая как дикого рынка, так и социалистических потрясений.",
      "fr": "Concevant la société comme un corps organique, vous affirmez le devoir moral d'entraide envers les démunis. Vous refusez le capitalisme sauvage tout en préservant l'héritage institutionnel."
    },
    "keyFigures": [
      "Benjamin Disraeli",
      "Harold Macmillan",
      "Otto von Bismarck"
    ],
    "coordinates": {
      "econ": -25,
      "soc": -55
    }
  },
  {
    "id": "christian_democracy",
    "name": {
      "pl": "Chrześcijańska Demokracja (Centroprawica)",
      "en": "Christian Democracy",
      "ru": "Христианская демократия",
      "fr": "Démocratie chrétienne"
    },
    "subtitle": {
      "pl": "Godność osoby ludzkiej, pomocniczość państwa, etyka chrześcijańska i społeczna gospodarka rynkowa",
      "en": "Human dignity, subsidiarity, Christian ethics, and a balanced social market economy",
      "ru": "Человеческое достоинство, субсидиарность, христианская этика и социальное рыночное хозяйство",
      "fr": "Dignité humaine, subsidiarité, éthique chrétienne et économie sociale de marché"
    },
    "desc": {
      "pl": "Twoje poglądy opierają się na katolickiej nauce społecznej: godności człowieka, solidarności oraz zasadzie pomocniczości (państwo działa tylko tam, gdzie rodzina i samorząd nie dają rady). Popierasz zrównoważoną gospodarkę rynkową z ludzką twarzą.",
      "en": "Grounded in Christian social teaching, you champion human dignity, subsidiarity, and social solidarity. Decisions should be made at the most local level possible, within an ethical, compassionate market framework.",
      "ru": "Опираясь на христианские принципы солидарности и субсидиарности, вы выступаете за социальную рыночную экономику с человеческим лицом, где государство помогает семье и местному самоуправлению.",
      "fr": "Fondée sur la doctrine sociale chrétienne, votre vision défend la dignité de la personne, la subsidiarité et la solidarité. L'économie de marché doit être régulée par des impératifs éthiques."
    },
    "keyFigures": [
      "Konrad Adenauer",
      "Robert Schuman",
      "Alcide De Gasperi",
      "Angela Merkel"
    ],
    "coordinates": {
      "econ": 10,
      "soc": -35
    }
  },
  {
    "id": "distributism",
    "name": {
      "pl": "Dystrybutyzm",
      "en": "Distributism",
      "ru": "Дистрибутизм",
      "fr": "Distributisme"
    },
    "subtitle": {
      "pl": "Upowszechnienie drobnej własności prywatnej, spółdzielczość i sprzeciw wobec monopoli i etatyzmu",
      "en": "Widespread private property ownership, guild cooperatives, and opposition to both big monopolies and state monopolies",
      "ru": "Широкое рассредоточение частной собственности, кооперация и неприятие как монополий, так и госплана",
      "fr": "Diffusion maximale de la propriété privée, coopératives familiales et rejet simultané des monopoles et du collectivisme"
    },
    "desc": {
      "pl": "Własność prywatna jest tak cenna, że każdy powinien ją posiadać. Ani wszechwładny kapitalizm monopoli, ani wszechobecny socjalizm państwowy nie są rozwiązaniem. Przyszłość leży w drobnych gospodarstwach, cechach i rodzinnych warsztatach.",
      "en": "Property is so essential that everyone should own some. You reject both corporate gigantism and state collectivization, advocating for small family businesses, guilds, and decentralized localized production.",
      "ru": "Частная собственность так важна, что она должна принадлежать миллионам семей, а не кучке магнатов или чиновников. Вы выступаете за ремесленные гильдии, фермерство и кооперативы.",
      "fr": "La propriété est un bien si précieux qu'elle doit être partagée par le plus grand nombre. Rejetant le gigantisme financier et l'étatisme soviétique, vous prônez la petite entreprise familiale et l'artisanat."
    },
    "keyFigures": [
      "G.K. Chesterton",
      "Hilaire Belloc",
      "E.F. Schumacher"
    ],
    "coordinates": {
      "econ": -35,
      "soc": -50
    }
  },
  {
    "id": "ordoliberalism",
    "name": {
      "pl": "Ordoliberalizm / Społeczna Gospodarka Rynkowa",
      "en": "Ordoliberalism / Social Market Economy",
      "ru": "Ордолиберализм / Социально-рыночная экономика",
      "fr": "Ordolibéralisme / Économie sociale de marché"
    },
    "subtitle": {
      "pl": "Silne państwo jako strażnik reguł wolnej konkurencji i stabilności walutowej, z buforem socjalnym",
      "en": "Strong legal framework to safeguard free competition, monetary stability, and baseline social security",
      "ru": "Правовое государство как строгий арбитр свободной конкуренции, стабильной валюты и социальной защиты",
      "fr": "Cadre étatique solide garantissant la libre concurrence loyale, la stabilité monétaire et un socle social"
    },
    "desc": {
      "pl": "Rynek potrzebuje jasnego ładu prawnego (Ordo). Państwo nie powinno samo prowadzić biznesu, lecz bezwzględnie zwalczać monopole i kartele oraz dbać o stabilność waluty. Efektem jest niemiecki powojenny 'cud gospodarczy'.",
      "en": "Markets require an ironclad legal framework (Ordo). The state must not direct commerce but rigorously police monopolies and preserve monetary integrity, delivering sustainable prosperity with a social safety net.",
      "ru": "Рынку необходим твердый правовой порядок (Ordo). Власть не должна управлять заводами, но обязана жестко пресекать сговоры монополий и обеспечивать твердую валюту, создавая прочный фундамент достатка.",
      "fr": "Le marché a besoin d'un ordre juridique strict (Ordo). L'État ne gère pas les entreprises mais neutralise sans pitié les cartels et garantit la stabilité monétaire pour une prospérité partagée."
    },
    "keyFigures": [
      "Walter Eucken",
      "Ludwig Erhard",
      "Wilhelm Röpke"
    ],
    "coordinates": {
      "econ": 40,
      "soc": 10
    }
  },
  {
    "id": "neoliberalism",
    "name": {
      "pl": "Neoliberalizm",
      "en": "Neoliberalism",
      "ru": "Неолиберализм",
      "fr": "Néolibéralisme"
    },
    "subtitle": {
      "pl": "Globalna prywatyzacja, dyscyplina budżetowa, otwarcie rynków i zaufanie do mechanizmów cenowych",
      "en": "Global privatization, fiscal rectitude, open trade, and reliance on price mechanisms",
      "ru": "Глобальная приватизация, бюджетная дисциплина, открытая торговля и приоритет ценовых механизмов",
      "fr": "Privatisation généralisée, rigueur budgétaire, ouverture des échanges et primauté des signaux de prix"
    },
    "desc": {
      "pl": "Uważasz, że rynki alokują zasoby efektywniej niż jakikolwiek urzędnik. Popierasz prywatyzację, znoszenie barier handlowych, reformy podatkowe sprzyjające inwestycjom oraz dyscyplinę monetarną banków centralnych.",
      "en": "You believe competitive price signals allocate resources far better than central planning. You favor deregulation, international capital flow, privatization of state assets, and sound monetary governance.",
      "ru": "Вы убеждены, что рыночная конкуренция распределяет ресурсы куда эффективнее любого чиновника. Вы поддерживаете приватизацию, свободу инвестиций и независимость центральных банков.",
      "fr": "Vous estimez que les marchés et le mécanisme des prix allouent les ressources bien plus efficacement que l'État. Vous soutenez la déréglementation, la libre concurrence et la mondialisation des échanges."
    },
    "keyFigures": [
      "Gary Becker",
      "Paul Volcker",
      "Larry Summers"
    ],
    "coordinates": {
      "econ": 70,
      "soc": 25
    }
  },
  {
    "id": "technocracy",
    "name": {
      "pl": "Technokracja / Rządy Ekspertów",
      "en": "Technocracy / Scientific Governance",
      "ru": "Технократия / Власть экспертов",
      "fr": "Technocratie / Gouvernance des experts"
    },
    "subtitle": {
      "pl": "Decyzje oparte na danych, nauce i efektywności inżynieryjnej ponad politycznymi sporami partyjnymi",
      "en": "Data-driven policy, scientific management, and technical competence over partisan rhetoric",
      "ru": "Управление на основе данных, науки и инженерной эффективности вместо партийных споров",
      "fr": "Décisions fondées sur la science, la gestion rationnelle des données et la compétence technique"
    },
    "desc": {
      "pl": "Polityka powinna być sztuką optymalizacji, a nie walką ideologiczną. Kluczowe decyzje gospodarcze, klimatyczne i infrastrukturalne powinni podejmować wykwalifikowani specjaliści, inżynierowie i naukowcy w oparciu o twarde dane.",
      "en": "Governance should be about evidence-based optimization rather than ideological theater. Policy in economics, tech, and public health must be steered by certified experts, scientists, and engineers.",
      "ru": "Управление государством должно быть решением инженерных задач, а не популизмом. Ключевые решения в науке, экономике и медицине должны принимать признанные специалисты на основе фактов.",
      "fr": "La politique doit être une science de l'optimisation rationnelle et non une querelle idéologique. Les grandes orientations doivent être confiées à des experts et scientifiques qualifiés."
    },
    "keyFigures": [
      "Lee Kuan Yew",
      "Thorstein Veblen",
      "Mario Draghi"
    ],
    "coordinates": {
      "econ": 15,
      "soc": 35
    }
  },
  {
    "id": "centrism",
    "name": {
      "pl": "Pragmatyczne Centrum",
      "en": "Pragmatic Centrism",
      "ru": "Прагматический центризм",
      "fr": "Centrisme pragmatique"
    },
    "subtitle": {
      "pl": "Zdroworozsądkowy kompromis, stabilność, ewolucyjne reformy i unikanie ideologicznych skrajności",
      "en": "Common-sense compromise, steady institutional evolution, and rejection of polar extremes",
      "ru": "Здравый компромисс, эволюционные реформы и отказ от идеологических крайностей",
      "fr": "Compromis équilibré, évolution prudente des institutions et refus des radicalités"
    },
    "desc": {
      "pl": "Stawiasz na złoty środek. Doceniasz zalety wolnego rynku, ale dostrzegasz potrzebę rozsądnej osłony socjalnej i dobrych usług publicznych. W sprawach społecznych preferujesz dialog, stopniowe zmiany i szacunek dla instytucji.",
      "en": "You champion the golden mean. You value market innovation alongside a sensible social safety net. In culture, you favor gradual consensus-building, constitutional balance, and evidence over dogma.",
      "ru": "Вы придерживаетесь золотой середины, признавая пользу рынка, но требуя качественной медицины и образования. В культуре цените диалог, взаимное уважение и взвешенные компромиссы.",
      "fr": "Vous privilégiez la voie médiane. Vous appréciez le dynamisme économique tout en garantissant des services publics de qualité. Sur le plan sociétal, vous recherchez le consensus et la stabilité."
    },
    "keyFigures": [
      "Dwight Eisenhower",
      "Władysław Kosiniak-Kamysz",
      "Michael Bloomberg"
    ],
    "coordinates": {
      "econ": 0,
      "soc": 0
    }
  },
  {
    "id": "third_way",
    "name": {
      "pl": "Trzecia Droga / Radykalne Centrum",
      "en": "Third Way / Radical Centrism",
      "ru": "Третий путь / Радикальный центризм",
      "fr": "Troisième voie / Centrisme radical"
    },
    "subtitle": {
      "pl": "Synteza dynamiki rynkowej, globalizacji i nowoczesnej modernizacji społecznej",
      "en": "Synthesis of dynamic market economics, globalization, and progressive social investment",
      "ru": "Синтез рыночной гибкости, глобализации и прогрессивных социальных инвестиций",
      "fr": "Synthèse de l'économie de marché mondialisée et d'investissements sociaux progressistes"
    },
    "desc": {
      "pl": "Odrzucasz staroświecki podział na tradycyjną lewicę i prawicę. Łączysz proinwestycyjną politykę gospodarczą, elastyczność rynku pracy i integrację międzynarodową z inwestycjami w edukację, kapitał ludzki i równe szanse.",
      "en": "Transcending outdated dogmas, you merge fiscal responsibility, market flexibility, and global openness with robust public investments in human capital, lifelong education, and meritocratic opportunity.",
      "ru": "Вы преодолеваете старое деление на левых и правых. Гибкость рынка труда и открытость миру сочетаются у вас с инвестициями в образование, технологии и равные стартовые возможности.",
      "fr": "Dépassant les clivages archaïques, vous combinez flexibilité entrepreneuriale, ouverture internationale et investissements massifs dans l'éducation, la formation et l'égalité des chances."
    },
    "keyFigures": [
      "Tony Blair",
      "Bill Clinton",
      "Emmanuel Macron",
      "Anthony Giddens"
    ],
    "coordinates": {
      "econ": 25,
      "soc": 35
    }
  },
  {
    "id": "social_liberalism",
    "name": {
      "pl": "Socjalliberalizm",
      "en": "Social Liberalism",
      "ru": "Социал-либерализм",
      "fr": "Social-libéralisme"
    },
    "subtitle": {
      "pl": "Maksymalna wolność osobista, prawa człowieka, tolerancja i państwo gwarantujące równe szanse",
      "en": "Comprehensive civil liberties, human rights, progressive pluralism, and an enabling welfare state",
      "ru": "Широкие гражданские свободы, права человека, инклюзивность и поддерживающее социальное государство",
      "fr": "Libertés individuelles totales, droits humains, tolérance et État garant de l'égalité des chances"
    },
    "desc": {
      "pl": "Wolność to nie tylko brak zakazów, ale też realna możliwość samorealizacji (wolność pozytywna). Popierasz prawa mniejszości, świeckie państwo, ekologię oraz edukację i opiekę zdrowotną, które wyrównują start życiowy.",
      "en": "Real freedom requires not just the absence of restraint, but positive capability. You champion secular governance, civil rights for minorities, environmental stewardship, and public funding for equal opportunity.",
      "ru": "Истинная свобода — это не просто отсутствие запретов, но и возможность развивать потенциал. Вы защищаете права меньшинств, светскость, экологию и качественное всеобщее образование.",
      "fr": "La liberté véritable suppose l'autonomie réelle de la personne. Vous défendez ardemment les droits civiques, la laïcité, l'écologie et des services publics qui corrigent les inégalités de départ."
    },
    "keyFigures": [
      "John Stuart Mill",
      "John Rawls",
      "Justin Trudeau",
      "Barack Obama"
    ],
    "coordinates": {
      "econ": -30,
      "soc": 65
    }
  },
  {
    "id": "civic_progressivism",
    "name": {
      "pl": "Progresywizm Obywatelski",
      "en": "Civic Progressivism",
      "ru": "Гражданский прогрессивизм",
      "fr": "Progressisme civique"
    },
    "subtitle": {
      "pl": "Modernizacja kulturowa, walka z dyskryminacją, prawa mniejszości i inkluzywne społeczeństwo",
      "en": "Cultural modernization, systemic anti-discrimination, minority empowerment, and inclusive democracy",
      "ru": "Культурная модернизация, искоренение дискриминации, права меньшинств и инклюзивность",
      "fr": "Modernisation des mœurs, lutte contre les discriminations, droits des minorités et société inclusive"
    },
    "desc": {
      "pl": "Twoim celem jest demontaż barier kulturowych i dyskryminacji. Dążysz do pełnego równouprawnienia osób LGBT+, sprawiedliwości reprodukcyjnej, dekarbonizacji oraz reformy wymiaru sprawiedliwości na rzecz resocjalizacji.",
      "en": "You focus on dismantling historical discrimination and expanding inclusion. You passionately advocate for LGBTQ+ equality, reproductive rights, climate action, and humane criminal justice reform.",
      "ru": "Ваша цель — преодоление любых предрассудков и барьеров. Вы решительно выступаете за равноправие ЛГБТ+, репродуктивные права женщин, зеленую повестку и гуманное правосудие.",
      "fr": "Votre priorité est d'abattre les préjugés et les discriminations structurelles. Vous portez avec force les droits LGBTQ+, la justice reproductive, la transition écologique et l'humanisation des peines."
    },
    "keyFigures": [
      "Jacinda Ardern",
      "Alexandria Ocasio-Cortez",
      "Sylvia Rivera"
    ],
    "coordinates": {
      "econ": -20,
      "soc": 80
    }
  },
  {
    "id": "green_politics",
    "name": {
      "pl": "Zielona Polityka / Ekologizm",
      "en": "Green Politics / Ecologism",
      "ru": "Зеленая политика / Экологизм",
      "fr": "Écologie politique / Les Verts"
    },
    "subtitle": {
      "pl": "Priorytet ochrony biosfery, neutralność węglowa, pacyfizm i demokracja uczestnicząca",
      "en": "Planetary boundary preservation, renewable energy revolution, non-violence, and grassroots democracy",
      "ru": "Спасение биосферы, возобновляемая энергетика, ненасилие и прямая демократия",
      "fr": "Préservation de la biosphère, transition énergétique verte, non-violence et démocratie participative"
    },
    "desc": {
      "pl": "Kryzys klimatyczny i bioróżnorodność to najważniejsze wyzwania XXI wieku. Gospodarka musi funkcjonować w granicach możliwości planety. Popierasz odnawialne źródła energii, prawa zwierząt, zrównoważony transport i pacyfizm.",
      "en": "Ecological balance and planetary survival are the supreme emergencies of our age. The economy must operate within Earth's ecological boundaries. You champion renewable energy, animal rights, and peaceful grassroots democracy.",
      "ru": "Климатический кризис — главный вызов эпохи. Экономика должна подчиняться законам природы. Вы поддерживаете переход на солнце и ветер, защиту животных, экологичный транспорт и отказ от войн.",
      "fr": "L'urgence climatique et la biodiversité conditionnent l'avenir de l'humanité. L'économie doit respecter les limites planétaires. Vous défendez les énergies renouvelables, la cause animale et la démocratie citoyenne."
    },
    "keyFigures": [
      "Petra Kelly",
      "Rachel Carson",
      "Daniel Cohn-Bendit"
    ],
    "coordinates": {
      "econ": -50,
      "soc": 75
    }
  },
  {
    "id": "eco_socialism",
    "name": {
      "pl": "Eko-Socjalizm / Czerwono-Zieloni",
      "en": "Eco-Socialism / Red-Green Alliance",
      "ru": "Эко-социализм / Красно-зелёные",
      "fr": "Éco-socialisme"
    },
    "subtitle": {
      "pl": "Kryzys ekologiczny to skutek kapitalizmu — rozwiązaniem jest demokratyczna kontrola nad zasobami",
      "en": "Ecological breakdown is an inherent outcome of capitalist growth — democratic planning is the cure",
      "ru": "Экологический кризис порожден погоней за прибылью — спасение в общественной собственности",
      "fr": "La crise écologique découle de la logique du profit — la solution réside dans la planification démocratique"
    },
    "desc": {
      "pl": "Nieskończony wzrost gospodarczy na skończonej planecie to iluzja. Uważasz, że motyw zysku korporacji niszczy biosferę. Tylko uspołecznienie energetyki, planowanie ekologiczne i sprawiedliwy podział dóbr mogą ocalić klimat.",
      "en": "Infinite compounding growth on a finite planet is suicidal. You see environmental collapse as the logical fruit of corporate greed. Only replacing capitalism with collective democratic planning can heal our world.",
      "ru": "Бесконечный рост на ограниченной планете невозможен. Корпоративная жажда наживы разрушает природу. Единственный выход — перевод ключевых отраслей под контроль общества и экологическое планирование.",
      "fr": "La croissance infinie dans un monde fini est une impasse. La course au profit détruit le vivant. Seule une rupture avec le capitalisme par la planification collective peut assurer la justice climatique."
    },
    "keyFigures": [
      "Chico Mendes",
      "John Bellamy Foster",
      "Naomi Klein"
    ],
    "coordinates": {
      "econ": -80,
      "soc": 80
    }
  },
  {
    "id": "social_democracy",
    "name": {
      "pl": "Socjaldemokracja (Model Nordycki)",
      "en": "Social Democracy (Nordic Model)",
      "ru": "Социал-демократия (Скандинавская модель)",
      "fr": "Social-démocratie (Modèle nordique)"
    },
    "subtitle": {
      "pl": "Silne państwo opiekuńcze, progresywne podatki, prawa pracownicze w ramach gospodarki rynkowej",
      "en": "Robust welfare state, high progressive taxes, strong unions, and universal public services within a market frame",
      "ru": "Развитое социальное государство, прогрессивные налоги, права профсоюзов и качественные госуслуги",
      "fr": "État-providence protecteur, fiscalité progressive, syndicalisme fort et services publics universels"
    },
    "desc": {
      "pl": "Inspirujesz się Skandynawią: rynek tworzy bogactwo, ale państwo musi je sprawiedliwie dzielić. Popierasz bezpłatną opiekę zdrowotną, edukację, silne związki zawodowe i wysokie podatki dla najbogatszych, by zredukować ubóstwo do zera.",
      "en": "Inspired by the Scandinavian model, you believe markets generate wealth while the state must guarantee fair redistribution. You support universal healthcare, tuition-free universities, union rights, and high taxes on the wealthy.",
      "ru": "Вдохновляясь Швецией и Норвегией, вы считаете, что рынок создает богатство, а государство должно гарантировать справедливость: бесплатную медицину, образование, сильные профсоюзы и налоги на богатых.",
      "fr": "Inspiré par le modèle scandinave, vous voulez combiner marché efficace et redistribution rigoureuse : santé et enseignement gratuits, syndicats puissants et forte imposition des hauts revenus pour abolir la pauvreté."
    },
    "keyFigures": [
      "Olof Palme",
      "Willy Brandt",
      "Clement Attlee",
      "Keir Starmer"
    ],
    "coordinates": {
      "econ": -60,
      "soc": 45
    }
  },
  {
    "id": "democratic_socialism",
    "name": {
      "pl": "Demokratyczny Socjalizm",
      "en": "Democratic Socialism",
      "ru": "Демократический социализм",
      "fr": "Socialisme démocratique"
    },
    "subtitle": {
      "pl": "Demokratyzacja gospodarki, własność publiczna kluczowych sektorów i prymat ludzi nad zyskiem",
      "en": "Economic democracy, public ownership of strategic sectors, and putting human needs before corporate profit",
      "ru": "Экономическая демократия, общественная собственность на стратегические отрасли и благо людей выше прибыли",
      "fr": "Démocratie économique, propriété collective des secteurs stratégiques et priorité à l'humain sur le profit"
    },
    "desc": {
      "pl": "Uważasz, że sama demokracja polityczna nie wystarczy — potrzebujemy demokracji w miejscu pracy i gospodarce. Wspierasz publiczną własność banków, energetyki i mieszkalnictwa oraz radykalne ograniczenie potęgi oligarchów kapitałowych.",
      "en": "Political voting is incomplete without democracy in the economy. You demand public ownership of commanding economic heights (utilities, banking, healthcare) and empowering workers over financial oligarchs.",
      "ru": "Политической демократии недостаточно — необходима демократия на рабочих местах. Вы выступаете за обобществление энергетики, медицины и банков, чтобы поставить ресурсы на службу всему народу.",
      "fr": "Le vote politique ne suffit pas sans démocratie dans l'entreprise. Vous revendiquez la propriété publique des secteurs clés (banques, énergie, logement) pour briser l'emprise des oligarques financiers."
    },
    "keyFigures": [
      "Bernie Sanders",
      "George Orwell",
      "Salvador Allende",
      "Jean Jaurès"
    ],
    "coordinates": {
      "econ": -80,
      "soc": 50
    }
  },
  {
    "id": "libertarian_socialism",
    "name": {
      "pl": "Wolnościowy Socjalizm / Anarchizm Społeczny",
      "en": "Libertarian Socialism / Social Anarchism",
      "ru": "Либертарный социализм / Социальный анархизм",
      "fr": "Socialisme libertaire / Anarchisme social"
    },
    "subtitle": {
      "pl": "Samorządność pracownicza, zniesienie hierarchii i państwa na rzecz dobrowolnych komun i federacji",
      "en": "Worker self-management, abolition of hierarchical coercion and the state for bottom-up federations",
      "ru": "Рабочее самоуправление, упразднение государственной иерархии в пользу свободных коммун и федераций",
      "fr": "Autogestion ouvrière, abolition des hiérarchies et de l'État au profit de communes libres et fédérées"
    },
    "desc": {
      "pl": "Odrzucasz zarówno dyktat wielkiego kapitału, jak i tyranię państwowego aparatu biurokratycznego. Wierzysz w oddolne zrzeszanie się wolnych ludzi w komunach i spółdzielniach, opartych na pomocy wzajemnej i bezpośredniej demokracji.",
      "en": "You reject both corporate monopoly power and authoritarian state bureaucracy. You dream of a cooperative society constructed from the bottom up through mutual aid, workplace councils, and non-hierarchical federations.",
      "ru": "Вы одинаково отвергаете власть корпораций и диктат государственного аппарата, веря в самоорганизацию людей в свободных общинах на принципах взаимопомощи и прямой демократии.",
      "fr": "Vous refusez tout autant le règne du grand capital que l'oppression bureaucratique de l'État. Vous croyez à l'organisation spontanée en coopératives et communes libres, fondées sur l'entraide mutuelle."
    },
    "keyFigures": [
      "Michaił Bakunin",
      "Piotr Kropotkin",
      "Noam Chomsky",
      "Yanis Varoufakis"
    ],
    "coordinates": {
      "econ": -85,
      "soc": 85
    }
  },
  {
    "id": "mutualism",
    "name": {
      "pl": "Mutualizm / Wzajemizm",
      "en": "Mutualism / Free-Market Socialism",
      "ru": "Мутуализм / Рыночный социализм",
      "fr": "Mutualisme"
    },
    "subtitle": {
      "pl": "Rynek bez kapitalistycznego wyzysku: wolna wymiana, banki darmowego kredytu i własność użytkowa",
      "en": "Markets without capitalist wage-slavery: free exchange, mutual credit banking, and usufruct possession",
      "ru": "Рынок без эксплуатации: свободный обмен результатами труда, кассы взаимного кредита и трудовая собственность",
      "fr": "Marché sans exploitation capitaliste : échange réciproque, banques de crédit mutuel et possession par l'usage"
    },
    "desc": {
      "pl": "Dostrzegasz wartość w rynkowej wymianie towarów, ale odrzucasz pobieranie zysku z cudzej pracy, lichwę i rentę kapitałową. Opowiadasz się za bankami wzajemnymi udzielającymi nieoprocentowanych pożyczek oraz własnością opartą na użytkowaniu.",
      "en": "You appreciate the efficiency of market trade but reject unearned absentee rent, usury, and wage exploitation. You favor mutual-credit banks offering zero-interest capital and property based on direct occupancy and use.",
      "ru": "Вы цените рыночный обмен, но категорически против ростовщичества и присвоения чужого труда. Вы предлагаете систему касс взаимопомощи с беспроцентными займами и владение землей только по факту работы на ней.",
      "fr": "Vous admettez l'échange sur le marché mais refusez la rente spéculative, l'usure et le salariat aliénant. Vous proposez le crédit mutuel sans intérêt et la propriété fondée sur l'usage effectif."
    },
    "keyFigures": [
      "Pierre-Joseph Proudhon",
      "Benjamin Tucker",
      "Kevin Carson"
    ],
    "coordinates": {
      "econ": -50,
      "soc": 85
    }
  },
  {
    "id": "syndicalism",
    "name": {
      "pl": "Syndykalizm Robotniczy",
      "en": "Syndicalism / Revolutionary Trade Unionism",
      "ru": "Синдикализм / Революционный профсоюзный социализм",
      "fr": "Syndicalisme révolutionnaire"
    },
    "subtitle": {
      "pl": "Przejęcie fabryk i gospodarki bezpośrednio przez zrzeszone związki zawodowe w drodze strajku generalnego",
      "en": "Direct collective takeover of the economy and industries by organized labor unions via the general strike",
      "ru": "Прямой переход фабрик и заводов в руки профсоюзов через всеобщую стачку без политических партий",
      "fr": "Prise en main directe des moyens de production par les syndicats ouvriers par la grève générale"
    },
    "desc": {
      "pl": "Uważasz, że partie polityczne i parlamentaryzm są nieskuteczne. Prawdziwa władza należy do pracujących ludzi. Związki zawodowe powinny przejąć bezpośrednie zarządzanie fabrykami, kopalniami i transportem, likwidując wyzysk.",
      "en": "You believe political parties and electoral parliaments are corrupt dead ends. Real power belongs at the point of production. Organized labor unions must coordinate factories and logistics directly through a general strike.",
      "ru": "Вы считаете выборы и парламенты бесполезной говорильней. Настоящая сила — в руках рабочего класса. Профсоюзы должны взять на себя управление промышленностью и распределением благ.",
      "fr": "Vous tenez les partis et le parlementarisme pour des impasses. La vraie force réside dans la production. Les syndicats de travailleurs doivent gérer directement les ateliers et services par la grève générale."
    },
    "keyFigures": [
      "Georges Sorel",
      "Rudolf Rocker",
      "Fernand Pelloutier"
    ],
    "coordinates": {
      "econ": -90,
      "soc": 40
    }
  },
  {
    "id": "state_socialism",
    "name": {
      "pl": "Państwowy Socjalizm / Gospodarka Nakazowa",
      "en": "State Socialism / Planned Economy",
      "ru": "Государственный социализм / Плановая экономика",
      "fr": "Socialisme d'État / Économie planifiée"
    },
    "subtitle": {
      "pl": "Pełna nacjonalizacja przemysłu, centralne planowanie gospodarcze i likwidacja prywatnego kapitału",
      "en": "Full nationalization of industry, centralized economic planning, and abolition of private capital",
      "ru": "Полная национализация промышленности, централизованное госпланирование и ликвидация частного капитала",
      "fr": "Nationalisation intégrale de l'industrie, planification centralisée et suppression du capital privé"
    },
    "desc": {
      "pl": "Uważasz, że anarchia wolnego rynku rodzi kryzysy i nierówności. Wszystkie środki produkcji powinny należeć do państwa, które centralnie planuje produkcję, gwarantuje każdemu zatrudnienie, dach nad głową i równy podział dóbr.",
      "en": "Market chaos breeds recurring crisis and structural misery. You argue all major means of production must belong to the socialist state, which centrally allocates resources, guarantees full employment, and eliminates class division.",
      "ru": "Хаос рыночной стихии порождает кризисы и нищету. Все фабрики и ресурсы должны принадлежать государству, которое централизованно планирует производство и гарантирует каждому работу и жилье.",
      "fr": "L'anarchie du marché engendre crises et exploitation. Tous les moyens de production doivent appartenir à l'État, qui planifie la production, garantit le plein emploi et éradique les privilèges de classe."
    },
    "keyFigures": [
      "Włodzimierz Lenin",
      "Thomas Sankara",
      "Fidel Castro"
    ],
    "coordinates": {
      "econ": -95,
      "soc": -35
    }
  },
  {
    "id": "state_capitalism",
    "name": {
      "pl": "Autorytarny Kapitalizm / Państwowy Merkantylizm",
      "en": "Authoritarian State Capitalism",
      "ru": "Авторитарный капитализм / Государственный меркантилизм",
      "fr": "Capitalisme d'État autoritaire"
    },
    "subtitle": {
      "pl": "Potęga rynkowa i korporacyjna podporządkowana celom geopolitycznym i dyscyplinie silnego państwa",
      "en": "Commercial corporate muscle subordinated to geopolitical dominance and strong state discipline",
      "ru": "Рыночная и корпоративная мощь, подчиненная геополитическим целям и железной дисциплине власти",
      "fr": "Puissance commerciale de marché asservie aux ambitions géopolitiques et à l'autorité d'État"
    },
    "desc": {
      "pl": "Popierasz rynkową dynamikę i generowanie zysków, ale pod warunkiem, że służą one potędze państwa i armii. Sprzeciwiasz się liberalnym swobodom obyczajowym, stawiając na dyscyplinę, strategiczne czebole i twardą rękę rządu.",
      "en": "You support market productivity and industrial power, but insist they must obey the strategic imperatives of a strong regime. You distrust civil unrest and cultural permissiveness, exalting discipline and national might.",
      "ru": "Вы цените рыночную эффективность и технологии, но требуете, чтобы бизнес беспрекословно служил величию державы. Вы отвергаете либеральные свободы, делая ставку на дисциплину и контроль.",
      "fr": "Vous encouragez le dynamisme économique et l'industrie privée, à condition qu'ils servent la puissance de la nation et de l'État. Vous rejetez le laxisme sociétal au profit de la rigueur et de l'autorité."
    },
    "keyFigures": [
      "Deng Xiaoping",
      "Park Chung-hee",
      "Lee Kuan Yew (wczesny etap)"
    ],
    "coordinates": {
      "econ": 55,
      "soc": -75
    }
  },
  {
    "id": "agorism",
    "name": {
      "pl": "Agoryzm / Lewicowy Rynkowy Anarchizm",
      "en": "Agorism / Left-Wing Market Anarchism",
      "ru": "Агоризм / Левый рыночный анархизм",
      "fr": "Agorisme / Anarchisme de marché"
    },
    "subtitle": {
      "pl": "Kontrekonomia: pokonanie państwa poprzez nieopodatkowany czarny rynek, krypto i wolną agorę",
      "en": "Counter-economics: subverting state power through illicit untaxed markets, crypto, and direct trade",
      "ru": "Контрэкономика: мирное разрушение государства через безналоговый черный рынок, крипту и агору",
      "fr": "Contre-économie : contourner l'État par le marché noir libre, les cryptomonnaies et le troc sans impôt"
    },
    "desc": {
      "pl": "Nie wierzysz w wybory polityczne ani zbrojną rewolucję. Państwo należy po prostu zignorować i uczynić przestarzałym poprzez kontrekonomię: nieopodatkowaną pracę, kryptowaluty, handel na szarym rynku i wolną współpracę jednostek.",
      "en": "You reject political voting and armed rebellion alike. The state must be made obsolete through counter-economics: untaxed black/grey markets, peer-to-peer crypto protocols, and peaceful voluntary commerce.",
      "ru": "Вы не верите в выборы и политиков. Государство нужно мирно вытеснить с помощью контрэкономики: серых рынков, криптографии, торговли без налогов и прямого сотрудничества свободных людей.",
      "fr": "Vous refusez la politique politicienne comme la violence armée. L'État doit être rendu obsolète par la contre-économie : transactions de gré à gré non taxées, cryptomonnaies et désobéissance fiscale pacifique."
    },
    "keyFigures": [
      "Samuel Edward Konkin III",
      "Roderick Long",
      "Ross Ulbricht"
    ],
    "coordinates": {
      "econ": 75,
      "soc": 95
    }
  },
  {
    "id": "cosmopolitanism",
    "name": {
      "pl": "Kosmopolityzm / Globalizm Demokratyczny",
      "en": "Democratic Cosmopolitanism / World Federalism",
      "ru": "Космополитизм / Демократический глобализм",
      "fr": "Cosmopolitisme / Fédéralisme mondial"
    },
    "subtitle": {
      "pl": "Obywatel świata: znoszenie granic narodowych, powszechne prawa człowieka i federacja planetarna",
      "en": "Citizen of the world: dissolving national borders, universal human rights, and planetary federal governance",
      "ru": "Гражданин мира: стирание государственных границ, права человека и планетарная демократическая федерация",
      "fr": "Citoyen du monde : effacement des frontières, droits humains universels et fédération planétaire"
    },
    "desc": {
      "pl": "Uważasz granice państwowe za sztuczne i anachroniczne podziały. Każdy człowiek rodzi się obywatelem Ziemi. Dążysz do otwarcia granic, wzmocnienia trybunałów międzynarodowych i globalnej współpracy w obliczu kryzysów planetarnych.",
      "en": "You view national borders as arbitrary historical accidents. Every human is a citizen of planet Earth. You advocate for free migration, universal human rights courts, and democratic global governance for global challenges.",
      "ru": "Вы считаете государственные границы пережитком прошлого. Каждый человек — гражданин планеты Земля. Вы выступаете за свободное передвижение, верховенство мирового права и глобальное единство.",
      "fr": "Vous considérez les frontières nationales comme des constructions archaïques. Tout être humain est citoyen de la Terre. Vous défendez la libre circulation, la justice internationale et une gouvernance planétaire solidaire."
    },
    "keyFigures": [
      "Immanuel Kant",
      "Albert Einstein",
      "Garry Davis",
      "Jürgen Habermas"
    ],
    "coordinates": {
      "econ": -15,
      "soc": 90
    }
  },
  {
    "id": "social_corporatism",
    "name": {
      "pl": "Korporacjonizm Społeczny / Dialog Trójstronny",
      "en": "Social Corporatism / Tripartite Consensus",
      "ru": "Социальный корпоративизм / Трёхсторонний диалог",
      "fr": "Corporatisme social / Concertation tripartite"
    },
    "subtitle": {
      "pl": "Zinstytucjonalizowane negocjacje rządu, związków zawodowych i pracodawców dla pokoju społecznego",
      "en": "Institutionalized partnership between organized labor, employer federations, and the state",
      "ru": "Институциональный союз профсоюзов, бизнеса и государства ради классового мира и стабильности",
      "fr": "Partenariat institutionnel entre syndicats, patronat et État pour garantir la concorde sociale"
    },
    "desc": {
      "pl": "Wierzysz w pokój społeczny i unikanie wstrząsów. Płace, warunki pracy i reformy powinny być stale uzgadniane przy jednym stole przez zrzeszenia pracodawców, centrale związkowe i rząd, eliminując konieczność brutalnych strajków.",
      "en": "You champion industrial peace and systemic consensus. Wages, labor standards, and economic reforms should be negotiated centrally between trade union federations, employer associations, and government mediators.",
      "ru": "Вы верите в социальный мир без забастовок и потрясений. Зарплаты и условия труда должны согласовываться за круглым столом представителями профсоюзов, союзами промышленников и государством.",
      "fr": "Vous prônez la paix sociale par la négociation collective permanente. Salaires et réformes doivent être arrêtés conjointement par le patronat, les centrales syndicales et l'État pour éviter les conflits violents."
    },
    "keyFigures": [
      "Gøsta Esping-Andersen",
      "Philippe Schmitter",
      "Gerd Bucerius"
    ],
    "coordinates": {
      "econ": -40,
      "soc": -20
    }
  },
  {
    "id": "turbo_capitalism",
    "name": {
      "pl": "Turbokapitalizm / Finansowy Globalizm",
      "en": "Turbo-Capitalism / Hyper-Financialism",
      "ru": "Турбокапитализм / Гиперфинансовый глобализм",
      "fr": "Turbo-capitalisme"
    },
    "subtitle": {
      "pl": "Radykalny rynkowy darwinizm, prymat rynków finansowych i brak jakichkolwiek barier dla zysku",
      "en": "Uninhibited financial markets, aggressive corporate agility, and borderless capital acceleration",
      "ru": "Тотальный рыночный дарвинизм, абсолютная власть финансовых рынков и снятие всех барьеров",
      "fr": "Marchés financiers tout-puissants, agilité darwinienne des entreprises et profit sans frontières"
    },
    "desc": {
      "pl": "Uważasz, że rynki finansowe i globalne korporacje muszą działać z maksymalną prędkością bez krępujących regulacji, podatków czy sentymentów narodowych. Kto nie nadąża za innowacją i tempem zmian, sam ponosi tego konsekwencje.",
      "en": "You believe financial markets and multinational capital must operate at maximum velocity, unburdened by national barriers, social sentiment, or heavy taxation. Economic efficiency is the supreme measure of success.",
      "ru": "Вы убеждены, что финансовые рынки и транснациональные корпорации должны развиваться с максимальной скоростью без оглядки на национальные границы и сантименты. Выживает быстрейший и самый гибкий.",
      "fr": "Vous estimez que la haute finance et les multinationales doivent pouvoir investir et arbitrer instantanément, libres de tout carcan fiscal ou national. L'efficacité économique prime sur toute autre considération."
    },
    "keyFigures": [
      "Edward Luttwak (krytyk/definiujący)",
      "George Soros (jako inwestor)",
      "Carl Icahn"
    ],
    "coordinates": {
      "econ": 95,
      "soc": 35
    }
  }
];

const worldPoliticians = [
  {
    "id": "javier_milei",
    "name": "Javier Milei",
    "flag": "🇦🇷",
    "country": {
      "pl": "Argentyna",
      "en": "Argentina",
      "ru": "Аргентина",
      "fr": "Argentine"
    },
    "role": {
      "pl": "Prezydent Argentyny, ekonomista szkoły austriackiej",
      "en": "President of Argentina, Austrian-school economist",
      "ru": "Президент Аргентины, экономист австрийской школы",
      "fr": "Président de l'Argentine, économiste de l'école autrichienne"
    },
    "quote": {
      "pl": "„¡Viva la libertad, carajo! Niech żyje wolność, do cholery!”",
      "en": "“¡Viva la libertad, carajo! Long live freedom, damn it!”",
      "ru": "«¡Viva la libertad, carajo! Да здравствует свобода, чёрт возьми!»",
      "fr": "« ¡Viva la libertad, carajo ! Vive la liberté, bordel ! »"
    },
    "whyVote": {
      "pl": "Oddałbyś na niego głos za bezkompromisowe cięcie wydatków państwa, znoszenie ministerstw, walkę z deficytem budżetowym, prywatyzację i bezwzględną obronę wolności gospodarczej.",
      "en": "You would vote for him for his radical public spending cuts, elimination of ministries, zero-deficit policy, privatization, and fierce defense of free market enterprise.",
      "ru": "Вы бы проголосовали за него за радикальное сокращение госрасходов, ликвидацию лишних министерств, бездефицитный бюджет и яростную защиту свободного рынка.",
      "fr": "Vous voteriez pour lui pour ses coupes budgétaires drastiques, la fermeture de ministères, la lutte contre les déficits et sa défense intransigeante du marché libre."
    },
    "coordinates": {
      "econ": 92,
      "soc": 35
    }
  },
  {
    "id": "ron_paul",
    "name": "Ron Paul",
    "flag": "🇺🇸",
    "country": {
      "pl": "Stany Zjednoczone",
      "en": "United States",
      "ru": "США",
      "fr": "États-Unis"
    },
    "role": {
      "pl": "Wieloletni kongresmen USA, lider ruchu wolnościowego",
      "en": "Longtime US Congressman, champion of American libertarianism",
      "ru": "Многолетний конгрессмен США, лидер движения за свободу",
      "fr": "Ancien parlementaire américain, figure de proue du libertarisme"
    },
    "quote": {
      "pl": "„Prawdziwa wolność to nie podział na lewicę i prawicę, to poszanowanie praw suwerennej jednostki.”",
      "en": "“Freedom is not defined by safety; freedom is defined by the ability to live your life as you see fit.”",
      "ru": "«Истинная свобода — это не деление на левых и правых, а уважение прав суверенной личности.»",
      "fr": "« La liberté ne se définit pas par la sécurité, mais par le droit de mener sa vie selon sa propre volonté. »"
    },
    "whyVote": {
      "pl": "Głosowałbyś na niego za wierność konstytucji, likwidację Rezerwy Federalnej (Fed), walkę o prywatność, sprzeciw wobec zagranicznych wojen i przywrócenie oparcia waluty na złocie.",
      "en": "You would vote for him for constitutional purism, abolishing the Federal Reserve, defending privacy against NSA surveillance, and non-interventionist foreign policy.",
      "ru": "Вы бы проголосовали за него за верность конституции, аудит и закрытие ФРС, защиту частной жизни от слежки и отказ от зарубежных военных интервенций.",
      "fr": "Vous voteriez pour lui pour son strict respect de la constitution, son combat contre la banque centrale, la protection de la vie privée et son refus des guerres étrangères."
    },
    "coordinates": {
      "econ": 85,
      "soc": 65
    }
  },
  {
    "id": "margaret_thatcher",
    "name": "Margaret Thatcher",
    "flag": "🇬🇧",
    "country": {
      "pl": "Wielka Brytania",
      "en": "United Kingdom",
      "ru": "Великобритания",
      "fr": "Royaume-Uni"
    },
    "role": {
      "pl": "Premier Wielkiej Brytanii (1979–1990), „Żelazna Dama”",
      "en": "Prime Minister of the UK (1979–1990), the 'Iron Lady'",
      "ru": "Премьер-министр Великобритании (1979–1990), «Железная леди»",
      "fr": "Première ministre du Royaume-Uni (1979–1990), la « Dame de fer »"
    },
    "quote": {
      "pl": "„Problem z socjalizmem polega na tym, że w końcu kończą ci się cudze pieniądze.”",
      "en": "“The problem with socialism is that you eventually run out of other people's money.”",
      "ru": "«Проблема социализма в том, что чужие деньги в конце концов заканчиваются.»",
      "fr": "« Le problème avec le socialisme, c'est que vous finissez toujours par manquer de l'argent des autres. »"
    },
    "whyVote": {
      "pl": "Oddałbyś na nią głos za przełamanie monopolu związków zawodowych, odważną prywatyzację nierentownych molochów, twardą politykę obronną i wiarę w odpowiedzialność osobistą.",
      "en": "You would vote for her for curbing trade union dominance, privatizing inefficient state monopolies, resolute national defense, and instilling personal responsibility.",
      "ru": "Вы бы проголосовали за нее за обуздание диктата профсоюзов, смелую приватизацию убыточных госкомпаний, сильную армию и личную ответственность.",
      "fr": "Vous voteriez pour elle pour avoir jugulé les blocages syndicaux, privatisé les monopoles publics inefficaces et défendu avec fermeté la souveraineté nationale."
    },
    "coordinates": {
      "econ": 80,
      "soc": -50
    }
  },
  {
    "id": "ronald_reagan",
    "name": "Ronald Reagan",
    "flag": "🇺🇸",
    "country": {
      "pl": "Stany Zjednoczone",
      "en": "United States",
      "ru": "США",
      "fr": "États-Unis"
    },
    "role": {
      "pl": "40. Prezydent USA (1981–1989)",
      "en": "40th President of the United States (1981–1989)",
      "ru": "40-й Президент США (1981–1989)",
      "fr": "40e Président des États-Unis (1981–1989)"
    },
    "quote": {
      "pl": "„Rząd nie rozwiązuje naszych problemów, rząd sam jest problemem.”",
      "en": "“Government is not the solution to our problem; government is the problem.”",
      "ru": "«Правительство — это не решение нашей проблемы; правительство и есть сама проблема.»",
      "fr": "« L'État n'est pas la solution à notre problème ; l'État est le problème. »"
    },
    "whyVote": {
      "pl": "Twój wybór za obniżenie podatków dochodowych (Reaganomika), deregulację, odbudowę potęgi militarnej, patriotyzm i doprowadzenie do upadku bloku komunistycznego.",
      "en": "Your choice for supply-side tax cuts (Reaganomics), deregulation, military revival, traditional patriotic optimism, and winning the Cold War.",
      "ru": "Ваш кандидат за радикальное снижение налогов («рейганомика»), дерегуляцию бизнеса, укрепление армии и победу над советским тоталитаризмом.",
      "fr": "Votre choix pour ses baisses massives d'impôts (« reaganomics »), la déréglementation, la fierté patriotique et la victoire pacifique sur le bloc soviétique."
    },
    "coordinates": {
      "econ": 75,
      "soc": -55
    }
  },
  {
    "id": "milton_friedman",
    "name": "Milton Friedman",
    "flag": "🌐",
    "country": {
      "pl": "Świat / Globalny",
      "en": "Global / USA",
      "ru": "Мировой / США",
      "fr": "International / États-Unis"
    },
    "role": {
      "pl": "Laureat Nagrody Nobla w dziedzinie ekonomii, twórca monetaryzmu",
      "en": "Nobel Laureate in Economics, father of monetarism",
      "ru": "Лауреат Нобелевской премии по экономике, отец монетаризма",
      "fr": "Prix Nobel d'économie, chef de file du monétarisme"
    },
    "quote": {
      "pl": "„Społeczeństwo, które stawia równość ponad wolność, nie będzie miało ani jednego, ani drugiego.”",
      "en": "“A society that puts equality before freedom will get neither. A society that puts freedom before equality will get a high degree of both.”",
      "ru": "«Общество, ставящее равенство выше свободы, не получит ни того, ни другого.»",
      "fr": "« Une société qui place l'égalité avant la liberté n'aura ni l'une ni l'autre. »"
    },
    "whyVote": {
      "pl": "Poparłbyś go za koncepcję bonu oświatowego, ujemnego podatku dochodowego, likwidację ceł, zawodowych licencji państwowych i pełną swobodę wyboru konsumenta.",
      "en": "You would vote for him for school choice vouchers, the negative income tax, free trade, dismantling occupational licensing, and consumer empowerment.",
      "ru": "Вы бы поддержали его за внедрение образовательных ваучеров, отрицательный подоходный налог, отмену пошлин и абсолютную свободу выбора потребителя.",
      "fr": "Vous le soutiendriez pour les chèques scolaires (liberté d'éducation), l'impôt négatif sur le revenu, le libre-échange total et le démantèlement des monopoles corporatifs."
    },
    "coordinates": {
      "econ": 90,
      "soc": 50
    }
  },
  {
    "id": "emmanuel_macron",
    "name": "Emmanuel Macron",
    "flag": "🇫🇷",
    "country": {
      "pl": "Francja",
      "en": "France",
      "ru": "Франция",
      "fr": "France"
    },
    "role": {
      "pl": "Prezydent Francji, twórca ruchu reformatorskiego En Marche",
      "en": "President of France, founder of the centrist En Marche reform movement",
      "ru": "Президент Франции, создатель центристского движения En Marche",
      "fr": "Président de la République française, fondateur du mouvement centriste"
    },
    "quote": {
      "pl": "„Musimy połączyć dynamikę rynkową z europejską suwerennością strategiczną.”",
      "en": "“We must reconcile bold economic modernization with shared European sovereignty.”",
      "ru": "«Мы должны объединить динамику рынка с европейским стратегическим суверенитетом.»",
      "fr": "« Il nous faut allier la libération des énergies économiques à une souveraineté européenne forte. »"
    },
    "whyVote": {
      "pl": "Twój głos za uelastycznienie prawa pracy, reformę emerytalną, inwestycje w atom i AI, proeuropejski kurs oraz znoszenie barier dla innowacyjnych start-upów.",
      "en": "Your vote for labor market flexibility, pension reform, nuclear energy leadership, pro-European integration, and backing technological start-ups.",
      "ru": "Ваш выбор за гибкий рынок труда, пенсионную реформу, развитие атомной энергии и ИИ, а также всемерную интеграцию Европы.",
      "fr": "Votre voix pour la flexibilisation du travail, la relance du nucléaire et de l'IA, la défense de l'Union européenne et le soutien aux start-up innovantes."
    },
    "coordinates": {
      "econ": 25,
      "soc": 30
    }
  },
  {
    "id": "justin_trudeau",
    "name": "Justin Trudeau",
    "flag": "🇨🇦",
    "country": {
      "pl": "Kanada",
      "en": "Canada",
      "ru": "Канада",
      "fr": "Canada"
    },
    "role": {
      "pl": "Premier Kanady, lider Liberalnej Partii Kanady",
      "en": "Prime Minister of Canada, leader of the Liberal Party",
      "ru": "Премьер-министр Канады, лидер Либеральной партии",
      "fr": "Premier ministre du Canada, chef du Parti libéral"
    },
    "quote": {
      "pl": "„Różnorodność i otwartość są źródłem siły nowoczesnego społeczeństwa.”",
      "en": "“Diversity is not just a strength, it is our greatest collective advantage.”",
      "ru": "«Многообразие и инклюзивность — это источник силы современного общества.»",
      "fr": "« La diversité n'est pas seulement notre force, elle est notre plus grand atout collectif. »"
    },
    "whyVote": {
      "pl": "Oddałbyś na niego głos za podatek węglowy na rzecz klimatu, legalizację marihuany, parytety płci w rządzie, obronę praw mniejszości i wsparcie dla uchodźców.",
      "en": "You would vote for him for carbon pricing, cannabis legalization, gender-balanced cabinet, LGBTQ+ rights defense, and welcoming refugee resettlement.",
      "ru": "Вы бы отдали за него голос за углеродный налог ради планеты, легализацию каннабиса, гендерный баланс, защиту прав ЛГБТ+ и гуманный прием беженцев.",
      "fr": "Vous voteriez pour lui pour la taxe carbone sur le climat, la légalisation du cannabis, la parité hommes-femmes, les droits LGBTQ+ et l'accueil des réfugiés."
    },
    "coordinates": {
      "econ": -25,
      "soc": 70
    }
  },
  {
    "id": "bernie_sanders",
    "name": "Bernie Sanders",
    "flag": "🇺🇸",
    "country": {
      "pl": "Stany Zjednoczone",
      "en": "United States",
      "ru": "США",
      "fr": "États-Unis"
    },
    "role": {
      "pl": "Senator USA ze stanu Vermont, lider amerykańskiego demokratycznego socjalizmu",
      "en": "US Senator from Vermont, spearhead of American democratic socialism",
      "ru": "Сенатор США, лидер американского демократического социализма",
      "fr": "Sénateur américain du Vermont, leader du socialisme démocratique américain"
    },
    "quote": {
      "pl": "„Opieka zdrowotna to prawo człowieka, a nie luksusowy towar dla najbogatszych.”",
      "en": "“Healthcare must be recognized as a fundamental human right, not an expensive privilege.”",
      "ru": "«Здравоохранение — это неотъемлемое право человека, а не привилегия богатых.»",
      "fr": "« L'accès aux soins de santé est un droit humain fondamental, pas un privilège réservé aux riches. »"
    },
    "whyVote": {
      "pl": "Głosowałbyś na niego za powszechną bezpłatną służbę zdrowia (Medicare for All), darmowe studia publiczne, opodatkowanie miliarderów i Zielony Nowy Ład (Green New Deal).",
      "en": "You would vote for him for Medicare for All, tuition-free public universities, steep wealth taxes on billionaires, and an ambitious Green New Deal.",
      "ru": "Вы бы проголосовали за него за всеобщую бесплатную медицину (Medicare for All), бесплатные вузы, налог на богатство миллиардеров и Green New Deal.",
      "fr": "Vous voteriez pour lui pour la couverture santé universelle et gratuite (Medicare for All), l'université gratuite, l'impôt sur les grandes fortunes et le Green New Deal."
    },
    "coordinates": {
      "econ": -80,
      "soc": 65
    }
  },
  {
    "id": "lula_da_silva",
    "name": "Luiz Inácio Lula da Silva",
    "flag": "🇧🇷",
    "country": {
      "pl": "Brazylia",
      "en": "Brazil",
      "ru": "Бразилия",
      "fr": "Brésil"
    },
    "role": {
      "pl": "Prezydent Brazylii, ikona latynoamerykańskiego ruchu robotniczego",
      "en": "President of Brazil, labor union icon of the Global South",
      "ru": "Президент Бразилии, лидер рабочего движения Латинской Америки",
      "fr": "Président du Brésil, figure historique du mouvement ouvrier d'Amérique latine"
    },
    "quote": {
      "pl": "„Prawdziwą wielkość narodu poznaje się po tym, jak traktuje głodnych i wykluczonych.”",
      "en": "“A nation's greatness is judged by how it lifts up its impoverished and forgotten families.”",
      "ru": "«Величие нации измеряется тем, как она заботится о своих беднейших и голодающих гражданах.»",
      "fr": "« La grandeur d'une nation se mesure à sa capacité à extirper ses familles les plus humbles de la faim. »"
    },
    "whyVote": {
      "pl": "Twój kandydat za programy zwalczania głodu i biedy (Bolsa Família), ochronę Puszczy Amazońskiej, podnoszenie płacy minimalnej i solidarność krajów rozwijających się.",
      "en": "Your candidate for massive anti-poverty cash transfers (Bolsa Família), Amazon rainforest conservation, minimum wage hikes, and South-South international solidarity.",
      "ru": "Ваш кандидат за программы искоренения голода (Bolsa Família), спасение лесов Амазонии, рост МРОТ и защиту прав трудящихся на международной арене.",
      "fr": "Votre candidat pour les programmes d'éradication de la misère (Bolsa Família), la sauvegarde de l'Amazonie, la hausse du salaire minimum et la solidarité internationale."
    },
    "coordinates": {
      "econ": -65,
      "soc": 20
    }
  },
  {
    "id": "olof_palme",
    "name": "Olof Palme",
    "flag": "🇸🇪",
    "country": {
      "pl": "Szwecja",
      "en": "Sweden",
      "ru": "Швеция",
      "fr": "Suède"
    },
    "role": {
      "pl": "Premier Szwecji (1969–1976, 1982–1986), architekt nordyckiego państwa dobrobytu",
      "en": "Prime Minister of Sweden, master architect of the Nordic welfare model",
      "ru": "Премьер-министр Швеции, создатель шведской модели государства всеобщего благосостояния",
      "fr": "Premier ministre de Suède, bâtisseur du modèle social nordique"
    },
    "quote": {
      "pl": "„Demokracja to nie tylko prawo do głosu, to prawo do równego i godnego życia.”",
      "en": "“Democracy is not merely about casting ballots; it is about dignity and equality of life.”",
      "ru": "«Демократия — это не просто бюллетень в урне; это достоинство и равенство возможностей.»",
      "fr": "« La démocratie ne se résume pas à voter ; elle exige la dignité humaine et l'égalité réelle des conditions. »"
    },
    "whyVote": {
      "pl": "Głosowałbyś na niego za stworzenie najnowocześniejszego na świecie systemu opieki społecznej, walkę z apartheidem, pacyfizm i niezależną politykę międzynarodową.",
      "en": "You would vote for him for constructing the world's premier social security net, fierce anti-apartheid campaigns, peace diplomacy, and principled neutrality.",
      "ru": "Вы бы проголосовали за него за построение передового социального государства, борьбу с апартеидом, разоружение и миротворческую дипломатию.",
      "fr": "Vous voteriez pour lui pour l'édification de la protection sociale la plus complète du monde, son combat contre l'apartheid et son pacifisme international."
    },
    "coordinates": {
      "econ": -75,
      "soc": 45
    }
  },
  {
    "id": "lee_kuan_yew",
    "name": "Lee Kuan Yew",
    "flag": "🇸🇬",
    "country": {
      "pl": "Singapur",
      "en": "Singapore",
      "ru": "Сингапур",
      "fr": "Singapour"
    },
    "role": {
      "pl": "Ojciec Założyciel i pierwszy premier Singapuru (1959–1990)",
      "en": "Founding Father and visionary Prime Minister of Singapore (1959–1990)",
      "ru": "Отец-основатель и первый премьер-министр Сингапура (1959–1990)",
      "fr": "Père fondateur et premier ministre historique de Singapour (1959–1990)"
    },
    "quote": {
      "pl": "„Pragmatyzm, żelazna dyscyplina i zero tolerancji dla korupcji przekształcają Trzeci Świat w Pierwszy.”",
      "en": "“Without discipline, order, and honest meritocratic governance, prosperity is an impossible fantasy.”",
      "ru": "«Прагматизм, железная дисциплина и нулевая толерантность к коррупции превратили Сингапур в передовую державу.»",
      "fr": "« Sans discipline, sans ordre et sans gouvernance méritocratique intègre, la prospérité est une illusion. »"
    },
    "whyVote": {
      "pl": "Twój lider za bezwzględną walkę z korupcją, najwyższy poziom bezpieczeństwa publicznego na świecie, ultranowoczesną infrastrukturę i rządy kompetentnych technokratów.",
      "en": "Your leader for eradicating corruption, peerless public safety, building top-tier infrastructure, and governing through ruthless meritocratic expertise.",
      "ru": "Ваш лидер за беспощадное искоренение коррупции, образцовую безопасность на улицах, передовую инфраструктуру и власть компетентных технократов.",
      "fr": "Votre dirigeant pour l'éradication sans concession de la corruption, une sécurité publique absolue, des infrastructures de classe mondiale et une gestion méritocratique."
    },
    "coordinates": {
      "econ": 45,
      "soc": -60
    }
  },
  {
    "id": "nayib_bukele",
    "name": "Nayib Bukele",
    "flag": "🇸🇻",
    "country": {
      "pl": "Salwador",
      "en": "El Salvador",
      "ru": "Сальвадор",
      "fr": "Salvador"
    },
    "role": {
      "pl": "Prezydent Salwadoru, reformator bezpieczeństwa i promotor Bitcoina",
      "en": "President of El Salvador, anti-gang security crusader and Bitcoin pioneer",
      "ru": "Президент Сальвадора, борец с бандами и инициатор внедрения Биткоина",
      "fr": "Président du Salvador, réformateur de la sécurité et pionnier du Bitcoin"
    },
    "quote": {
      "pl": "„Prawo uczciwych obywateli do życia bez strachu stoi ponad prawami morderców z gangów.”",
      "en": "“The sacred right of peaceful citizens to live in safety will always supersede the rights of criminal gangs.”",
      "ru": "«Право мирных граждан ходить по улицам без страха стоит выше прав криминальных группировок.»",
      "fr": "« Le droit des citoyens honnêtes à vivre sans terreur primera toujours sur celui des gangs de criminels. »"
    },
    "whyVote": {
      "pl": "Oddałbyś na niego głos za błyskawiczne wyeliminowanie przestępczości zorganizowanej, budowę nowoczesnych mega-więzień, odważne przyjęcie Bitcoina jako waluty i bezpośredni kontakt z ludem.",
      "en": "You would vote for him for crushing murderous street cartels, building high-security facilities, embracing Bitcoin, and unapologetic law-and-order governance.",
      "ru": "Вы бы проголосовали за него за разгром уличных банд, рекордное падение преступности, смелое внедрение Биткоина и твердый правопорядок.",
      "fr": "Vous voteriez pour lui pour l'anéantissement des cartels mafieux, le rétablissement spectaculaire de la sécurité, l'adoption du Bitcoin et son autorité sans détour."
    },
    "coordinates": {
      "econ": 35,
      "soc": -75
    }
  },
  {
    "id": "angela_merkel",
    "name": "Angela Merkel",
    "flag": "🇩🇪",
    "country": {
      "pl": "Niemcy",
      "en": "Germany",
      "ru": "Германия",
      "fr": "Allemagne"
    },
    "role": {
      "pl": "Kanclerz Niemiec (2005–2021), liderka europejskiej chadecji",
      "en": "Chancellor of Germany (2005–2021), leader of European Christian democracy",
      "ru": "Канцлер Германии (2005–2021), лидер европейских христианских демократов",
      "fr": "Chancelière d'Allemagne (2005–2021), figure centrale du centre-droit européen"
    },
    "quote": {
      "pl": "„Siła polityki polega na cierpliwym szukaniu kompromisu i unikaniu pochopnych rewolucji.”",
      "en": "“The enduring strength of statesmanship lies in patient compromise and steady consensus.”",
      "ru": "«Сила мудрой политики заключается в терпеливом поиске компромисса и предсказуемости.»",
      "fr": "« La force de la démocratie réside dans la recherche patiente du compromis et la stabilité des institutions. »"
    },
    "whyVote": {
      "pl": "Głosowałbyś na nią za niemiecką dyscyplinę budżetową (hamulec zadłużenia), utrzymanie jedności Unii Europejskiej w kryzysach, stabilność i umiarkowane centrum polityczne.",
      "en": "You would vote for her for balanced budget discipline (Schwarze Null), steering Europe through turbulent crises, and calm, unshakeable centrist stability.",
      "ru": "Вы бы проголосовали за нее за финансовую дисциплину, удержание единства Европейского союза в штормовые времена и рассудительную центристскую стабильность.",
      "fr": "Vous voteriez pour elle pour sa rigueur budgétaire, sa capacité à maintenir la cohésion européenne lors des crises et sa force tranquille de compromis centriste."
    },
    "coordinates": {
      "econ": 15,
      "soc": -20
    }
  },
  {
    "id": "narendra_modi",
    "name": "Narendra Modi",
    "flag": "🇮🇳",
    "country": {
      "pl": "Indie",
      "en": "India",
      "ru": "Индия",
      "fr": "Inde"
    },
    "role": {
      "pl": "Premier Indii, lider Partii Ludowej Bharatiya Janata (BJP)",
      "en": "Prime Minister of India, transformative leader of the BJP",
      "ru": "Премьер-министр Индии, лидер партии Бхаратия Джаната (БДП)",
      "fr": "Premier ministre de l'Inde, leader du Bharatiya Janata Party (BJP)"
    },
    "quote": {
      "pl": "„Rozwój z dumą narodową — Indie nie będą naśladować nikogo, lecz kroczyć własną drogą.”",
      "en": "“Development combined with national heritage: India charts its own sovereign destiny.”",
      "ru": "«Развитие рука об руку с национальной гордостью: Индия идет своим суверенным путем.»",
      "fr": "« Le développement économique dans la fierté de nos racines : l'Inde trace sa propre voie souveraine. »"
    },
    "whyVote": {
      "pl": "Twój głos za gigantyczny skok cyfrowy (Digital India), rozbudowę autostrad i kolei, patriotyzm gospodarczy (Make in India) oraz dumę z wielowiekowej tożsamości kulturowej.",
      "en": "Your vote for the Digital India revolution, massive infrastructure modernization, Make in India industrial self-reliance, and civilizational cultural pride.",
      "ru": "Ваш голос за цифровую революцию в Индии, масштабное строительство дорог, индустриальную программу Make in India и возрождение национального духа.",
      "fr": "Votre voix pour la révolution numérique Digital India, le saut d'infrastructures moderne, le patriotisme industriel et le rayonnement de la culture nationale."
    },
    "coordinates": {
      "econ": 20,
      "soc": -75
    }
  },
  {
    "id": "jacinda_ardern",
    "name": "Jacinda Ardern",
    "flag": "🇳🇿",
    "country": {
      "pl": "Nowa Zelandia",
      "en": "New Zealand",
      "ru": "Новая Зеландия",
      "fr": "Nouvelle-Zélande"
    },
    "role": {
      "pl": "Premier Nowej Zelandii (2017–2023), pionierka polityki opartej na empatii",
      "en": "Prime Minister of New Zealand (2017–2023), champion of empathetic leadership",
      "ru": "Премьер-министр Новой Зеландии (2017–2023), пионер политики эмпатии",
      "fr": "Première ministre de Nouvelle-Zélande (2017–2023), pionnière du leadership bienveillant"
    },
    "quote": {
      "pl": "„Polityka oparta na empatii, życzliwości i dbaniu o dobrostan obywateli to siła, a nie słabość.”",
      "en": "“Kindness and empathy are not weaknesses; they are the truest foundations of courageous leadership.”",
      "ru": "«Доброта и сострадание — это не слабость, а прочнейшая основа смелого государственного лидерства.»",
      "fr": "« La bienveillance et l'empathie ne sont pas des faiblesses ; elles incarnent le courage politique le plus authentique. »"
    },
    "whyVote": {
      "pl": "Oddałbyś na nią głos za wdrożenie pierwszego na świecie 'Budżetu Dobrostanu' (Wellbeing Budget), bezkompromisową walkę z ociepleniem klimatu, prawa rdzennej ludności Maorysów i troskę o dzieci.",
      "en": "You would vote for her for pioneering the world's first Wellbeing Budget, decisive climate commitments, Indigenous Maori rights, and child poverty reduction.",
      "ru": "Вы бы проголосовали за нее за первый в мире 'Бюджет благополучия', решительную климатическую политику, защиту прав народа маори и заботу о детях.",
      "fr": "Vous voteriez pour elle pour la création du premier 'Budget du Bien-être', son engagement écologique résolu, la défense des Maoris et la lutte contre la pauvreté infantile."
    },
    "coordinates": {
      "econ": -45,
      "soc": 75
    }
  },
  {
    "id": "pepe_mujica",
    "name": "José „Pepe” Mujica",
    "flag": "🇺🇾",
    "country": {
      "pl": "Urugwaj",
      "en": "Uruguay",
      "ru": "Уругвай",
      "fr": "Uruguay"
    },
    "role": {
      "pl": "Prezydent Urugwaju (2010–2015), nazywany „najbiedniejszym i najmądrzejszym prezydentem świata”",
      "en": "President of Uruguay (2010–2015), globally admired as the humble philosopher-president",
      "ru": "Президент Уругвая (2010–2015), всемирно известный «самый скромный президент мира»",
      "fr": "Président de l'Uruguay (2010–2015), salué comme le « président le plus modeste du monde »"
    },
    "quote": {
      "pl": "„Biedny nie jest ten, kto ma mało, lecz ten, kto bez końca pragnie mieć więcej i więcej.”",
      "en": "“Poor are not those who have little, but those who endlessly desire more and more.”",
      "ru": "«Беден не тот, у кого мало, а тот, чья жажда обладать вещами ненасытна.»",
      "fr": "« Les pauvres ne sont pas ceux qui possèdent peu, mais ceux dont les désirs insatiables réclament toujours plus. »"
    },
    "whyVote": {
      "pl": "Twój wybór za absolutną uczciwość i rezygnację z luksusów, legalizację marihuany pod kontrolą państwa, małżeństwa jednopłciowe, skromność osobistą i zrównoważony rozwój.",
      "en": "Your choice for personal incorruptibility, donating his salary, state-regulated cannabis legalization, marriage equality, and profound critique of hyper-consumerism.",
      "ru": "Ваш выбор за кристальную честность, отказ от президентских дворцов, легализацию каннабиса, равенство браков и отказ от безумного культа потребления.",
      "fr": "Votre choix pour son désintéressement absolu, le don de son salaire présidentiel, la légalisation encadrée du cannabis, le mariage pour tous et son refus du consumérisme effréné."
    },
    "coordinates": {
      "econ": -70,
      "soc": 80
    }
  },
  {
    "id": "yanis_varoufakis",
    "name": "Yanis Varoufakis",
    "flag": "🇬🇷",
    "country": {
      "pl": "Grecja / Europa",
      "en": "Greece / Pan-Europe",
      "ru": "Греция / Панъевропа",
      "fr": "Grèce / Europe"
    },
    "role": {
      "pl": "Ekonomista, były minister finansów Grecji, założyciel ruchu DiEM25 i partii MeRA25",
      "en": "Economist, former Finance Minister of Greece, founder of DiEM25 and MeRA25",
      "ru": "Экономист, экс-министр финансов Греции, основатель панъевропейского движения DiEM25",
      "fr": "Économiste, ancien ministre des Finances de Grèce, fondateur de DiEM25 et MeRA25"
    },
    "quote": {
      "pl": "„Kapitalizm ewoluował w technofeudalizm. Musimy odzyskać demokrację z rąk cyfrowych i bankowych oligarchów.”",
      "en": "“Capitalism has mutated into techno-feudalism. We must democratize our money, our tech, and our continent.”",
      "ru": "«Капитализм переродился в технофеодализм. Мы обязаны вернуть демократию из лап цифровых магнатов и банкиров.»",
      "fr": "« Le capitalisme a muté en technoféodalisme. Nous devons arracher la démocratie aux mains des seigneurs de la tech et des banques. »"
    },
    "whyVote": {
      "pl": "Głosowałbyś na niego za bezwzględny opór wobec dyktatu bankierów i polityki zaciskania pasa (austerity), postulat Powszechnej Dywidendy Podstawowej i demokratyzację technologii.",
      "en": "You would vote for him for resisting creditor austerity regimes, proposing a Universal Basic Dividend from big tech profits, and empowering grassroots pan-European democracy.",
      "ru": "Вы бы проголосовали за него за стойкое сопротивление жесткой экономии МВФ, идею всеобщего базового дивиденда от прибылей бигтеха и демократизацию Европы.",
      "fr": "Vous voteriez pour lui pour son refus catégorique de l'austérité budgétaire aveugle, sa proposition d'un dividende universel tiré des profits de la Tech et la démocratisation de l'Europe."
    },
    "coordinates": {
      "econ": -85,
      "soc": 85
    }
  },
  {
    "id": "volodymyr_zelenskyy",
    "name": "Volodymyr Zelenskyy",
    "flag": "🇺🇦",
    "country": {
      "pl": "Ukraina",
      "en": "Ukraine",
      "ru": "Украина",
      "fr": "Ukraine"
    },
    "role": {
      "pl": "Prezydent Ukrainy, lider oporu przeciwko autorytarnej agresji",
      "en": "President of Ukraine, wartime leader defending democracy against authoritarian aggression",
      "ru": "Президент Украины, лидер сопротивления авторитарной агрессии",
      "fr": "Président de l'Ukraine, figure de la résistance démocratique contre l'agression autoritaire"
    },
    "quote": {
      "pl": "„Nie potrzebuję podwózki, potrzebuję amunicji. Wolność i suwerenność to wartości bezcenne.”",
      "en": "“I need ammunition, not a ride. Freedom and territorial sovereignty are non-negotiable.”",
      "ru": "«Мне нужны боеприпасы, а не эвакуация. Свобода и суверенитет не продаются.»",
      "fr": "« J'ai besoin de munitions, pas d'un taxi. La liberté et la souveraineté ne sont pas négociables. »"
    },
    "whyVote": {
      "pl": "Twój głos za niezłomną obronę wolności i integralności terytorialnej przed tyranią, dążenie do integracji z Unią Europejską i NATO, cyfryzację państwa (aplikacja Diia) i mobilizację społeczną.",
      "en": "Your vote for unflinching defense of free democracy and borders against imperial tyranny, rapid EU/NATO integration, state digitalization (Diia), and rallying international support.",
      "ru": "Ваш выбор за стойкую защиту свободы и границ от имперской агрессии, решительный курс в ЕС и НАТО, цифровизацию госуслуг (Дия) и единение нации.",
      "fr": "Votre voix pour la défense héroïque de la démocratie face à la tyrannie impériale, l'adhésion déterminée à l'UE et à l'OTAN, la numérisation des services publics et l'unité civile."
    },
    "coordinates": {
      "econ": 15,
      "soc": 20
    }
  },
  {
    "id": "keir_starmer",
    "name": "Keir Starmer",
    "flag": "🇬🇧",
    "country": {
      "pl": "Wielka Brytania",
      "en": "United Kingdom",
      "ru": "Великобритания",
      "fr": "Royaume-Uni"
    },
    "role": {
      "pl": "Premier Wielkiej Brytanii, lider Partii Pracy (Labour)",
      "en": "Prime Minister of the United Kingdom, leader of the Labour Party",
      "ru": "Премьер-министр Великобритании, лидер Лейбористской партии",
      "fr": "Premier ministre du Royaume-Uni, chef du Parti travailliste"
    },
    "quote": {
      "pl": "„Rządy to codzienna służba narodowi, naprawa usług publicznych i przywrócenie zaufania do prawa.”",
      "en": "“Country first, party second: politics is serious public service, rule of law, and patient reconstruction.”",
      "ru": "«Интересы страны превыше партийных: власть — это честное служение обществу и верховенство закона.»",
      "fr": "« L'intérêt du pays avant celui du parti : la politique exige le sérieux, l'état de droit et la reconstruction méthodique. »"
    },
    "whyVote": {
      "pl": "Oddałbyś na niego głos za odbudowę publicznej służby zdrowia (NHS), powołanie państwowej spółki zielonej energii (Great British Energy), dyscyplinę budżetową i profesjonalizm.",
      "en": "You would vote for him for rebuilding the National Health Service (NHS), establishing Great British Energy for green power, stable fiscal rules, and institutional integrity.",
      "ru": "Вы бы проголосовали за него за восстановление системы здравоохранения (NHS), создание национальной компании зеленой энергетики, фискальный порядок и законность.",
      "fr": "Vous voteriez pour lui pour la réhabilitation du service public de santé (NHS), la création d'un pôle public d'énergie verte, la gestion budgétaire rigoureuse et l'éthique républicaine."
    },
    "coordinates": {
      "econ": -35,
      "soc": 25
    }
  },
  {
    "id": "fumio_kishida",
    "name": "Fumio Kishida",
    "flag": "🇯🇵",
    "country": {
      "pl": "Japonia",
      "en": "Japan",
      "ru": "Япония",
      "fr": "Japon"
    },
    "role": {
      "pl": "Premier Japonii (2021–2024), twórca doktryny „Nowego Kapitalizmu”",
      "en": "Prime Minister of Japan (2021–2024), pioneer of 'New Capitalism'",
      "ru": "Премьер-министр Японии (2021–2024), автор концепции «Нового капитализма»",
      "fr": "Premier ministre du Japon (2021–2024), promoteur du « Nouveau capitalisme »"
    },
    "quote": {
      "pl": "„Wzrost gospodarczy bez sprawiedliwego podziału owoców nie ma przyszłości — potrzebujemy nowego cyklu płac i inwestycji.”",
      "en": "“Economic growth without virtuous wage distribution is hollow; we need a resilient cycle of investment and human capital.”",
      "ru": "«Экономический рост без справедливого распределения доходов тупиков — нам нужен цикл роста зарплат и инвестиций.»",
      "fr": "« La croissance économique sans partage équitable des fruits est stérile ; nous avons besoin d'un cercle vertueux entre salaires et investissements. »"
    },
    "whyVote": {
      "pl": "Twój kandydat za podwojenie wydatków na japońską obronność wobec zagrożeń w Azji, presję na podwyżki płac w korporacjach, bezpieczeństwo energetyczne i stabilny ład instytucjonalny.",
      "en": "Your candidate for doubling national defense capability, corporate pressure for wage increases, energy security, and Asian geopolitical stability.",
      "ru": "Ваш кандидат за удвоение расходов на оборону перед лицом вызовов в Азии, стимулирование роста зарплат в корпорациях и энергетическую безопасность.",
      "fr": "Votre candidat pour le doublement historique du budget de défense nippon, la hausse des salaires imposée aux grands groupes et la stabilité géopolitique en Asie."
    },
    "coordinates": {
      "econ": 10,
      "soc": -30
    }
  },
  {
    "id": "thomas_sankara",
    "name": "Thomas Sankara",
    "flag": "🇧🇫",
    "country": {
      "pl": "Burkina Faso",
      "en": "Burkina Faso",
      "ru": "Буркина-Фасо",
      "fr": "Burkina Faso"
    },
    "role": {
      "pl": "Prezydent Burkina Faso (1983–1987), rewolucyjny afrykański reformator",
      "en": "President of Burkina Faso (1983–1987), anti-imperialist pan-African visionary",
      "ru": "Президент Буркина-Фасо (1983–1987), лидер панафриканского антиколониального движения",
      "fr": "Président du Burkina Faso (1983–1987), héros révolutionnaire panafricain"
    },
    "quote": {
      "pl": "„Ten, kto cię karmi, ten cię kontroluje. Prawdziwa suwerenność to samowystarczalność żywnościowa i godność.”",
      "en": "“He who feeds you, controls you. True independence is self-sufficiency and moral refusal of foreign subjugation.”",
      "ru": "«Тот, кто кормит тебя, тот контролирует тебя. Подлинная независимость — это способность прокормить себя самим.»",
      "fr": "« Celui qui vous nourrit, vous contrôle. La véritable indépendance passe par l'autosuffisance alimentaire et le refus de la dette. »"
    },
    "whyVote": {
      "pl": "Głosowałbyś na niego za masowe zalesianie Sahelu, wielkie kampanie szczepień dzieci, walkę z korupcją władzy (jeździł małym Renault 5), emancypację kobiet i odrzucenie długów kolonialnych.",
      "en": "You would vote for him for planting millions of trees to halt the desert, mass child vaccination, radical official modesty, female liberation, and repudiating predatory foreign debt.",
      "ru": "Вы бы проголосовали за него за посадку 10 миллионов деревьев против опустынивания, всеобщую вакцинацию, борьбу с роскошью чиновников, права женщин и отказ от кабальных долгов.",
      "fr": "Vous voteriez pour lui pour la reforestation massive contre le désert, la vaccination de millions d'enfants, l'émancipation des femmes et le refus courageux des dettes coloniales."
    },
    "coordinates": {
      "econ": -90,
      "soc": -10
    }
  },
  {
    "id": "nelson_mandela",
    "name": "Nelson Mandela",
    "flag": "🇿🇦",
    "country": {
      "pl": "Republika Południowej Afryki",
      "en": "South Africa",
      "ru": "ЮАР",
      "fr": "Afrique du Sud"
    },
    "role": {
      "pl": "Prezydent RPA, laureat Pokojowej Nagrody Nobla, pogromca apartheidu",
      "en": "President of South Africa, Nobel Peace Prize Laureate, champion of racial reconciliation",
      "ru": "Президент ЮАР, лауреат Нобелевской премии мира, победитель апартеида",
      "fr": "Président d'Afrique du Sud, Prix Nobel de la Paix, vainqueur de l'apartheid"
    },
    "quote": {
      "pl": "„Nigdy, przenigdy ta piękna ziemia nie powinna doświadczyć ucisku jednego człowieka przez drugiego.”",
      "en": "“Never, never and never again shall it be that this beautiful land will experience the oppression of one by another.”",
      "ru": "«Никогда, никогда больше эта прекрасная земля не испытает угнетения одного человека другим.»",
      "fr": "« Jamais, au grand jamais, ce beau pays ne connaîtra à nouveau l'oppression d'un homme par un autre. »"
    },
    "whyVote": {
      "pl": "Oddałbyś na niego głos za wielkoduszne pojednanie narodowe bez odwetu, walkę o prawa obywatelskie i godność każdego człowieka, budowę wielorasowej demokracji i sprawiedliwość społeczną.",
      "en": "You would vote for him for steering national reconciliation without vengeance, unwavering commitment to human dignity, creating a multi-racial democracy, and social justice.",
      "ru": "Вы бы проголосовали за него за мирное национальное примирение без мести, защиту прав человека и построение справедливой демократии без расизма.",
      "fr": "Vous voteriez pour lui pour la réconciliation nationale pacifique sans esprit de vengeance, la conquête des droits civiques fondamentaux et l'édification d'une démocratie fraternelle."
    },
    "coordinates": {
      "econ": -45,
      "soc": 60
    }
  },
  {
    "id": "murray_rothbard",
    "name": "Murray Rothbard",
    "flag": "🌐",
    "country": {
      "pl": "Świat / USA",
      "en": "Global / USA",
      "ru": "Мировой / США",
      "fr": "International / États-Unis"
    },
    "role": {
      "pl": "Główny teoretyk anarchokapitalizmu i ekonomista Szkoły Austriackiej",
      "en": "Founding theorist of anarcho-capitalism and Austrian School economist",
      "ru": "Главный теоретик анархо-капитализма и экономист австрийской школы",
      "fr": "Théoricien majeur de l'anarcho-capitalisme et économiste de l'École autrichienne"
    },
    "quote": {
      "pl": "„Państwo to instytucja zorganizowanego rabunku ubranego w majestat prawa.”",
      "en": "“The State is a gang of thieves writ large; taxation is simply legalized extortion.”",
      "ru": "«Государство — это банда грабителей в масштабах всей страны; налоги — это узаконенный рэкет.»",
      "fr": "« L'État est une organisation criminelle à grande échelle ; l'impôt est une extorsion légalisée. »"
    },
    "whyVote": {
      "pl": "Twój radykalny wybór za całkowite zniesienie przymusu państwowego, prywatne prawo i sądownictwo arbitrażowe, absolutną nietykalność własności prywatnej i czysty voluntaryzm.",
      "en": "Your radical choice for dismantling all state coercion, private competitive legal codes, absolute sanctity of property, and purely voluntary human relationships.",
      "ru": "Ваш радикальный выбор за полное упразднение принуждения государства, частное право, абсолютную неприкосновенность собственности и чистый волюнтаризм.",
      "fr": "Votre choix radical pour la dissolution complète de la contrainte étatique, la justice privée arbitrale, la sacralité de la propriété et le volontarisme absolu."
    },
    "coordinates": {
      "econ": 100,
      "soc": 90
    }
  },
  {
    "id": "noam_chomsky",
    "name": "Noam Chomsky",
    "flag": "🌐",
    "country": {
      "pl": "Świat / USA",
      "en": "Global / USA",
      "ru": "Мировой / США",
      "fr": "International / États-Unis"
    },
    "role": {
      "pl": "Filozof, lingwista, dysydent polityczny, myśliciel anarchosyndykalistyczny",
      "en": "Philosopher, linguist, intellectual dissident, and libertarian socialist theorist",
      "ru": "Философ, лингвист, критик империализма, теоретик либертарного социализма",
      "fr": "Philosophe, linguiste, dissident politique et théoricien de l'anarcho-syndicalisme"
    },
    "quote": {
      "pl": "„Każda władza i hierarchia, jeśli nie potrafi dowieść swojej moralnej zasadności, musi zostać natychmiast zlikwidowana.”",
      "en": "“Any structure of authority and domination carries a heavy burden of proof; if it cannot justify itself, it must be dismantled.”",
      "ru": "«Любая властная иерархия обязана доказать свою легитимность; если она не может этого сделать, она должна быть упразднена.»",
      "fr": "« Toute structure d'autorité ou de domination doit prouver sa légitimité ; si elle ne le peut pas, elle doit être démantelée. »"
    },
    "whyVote": {
      "pl": "Poparłbyś go za bezlitosną demaskację imperializmu i propagandy korporacyjnych mediów, bezkompromisową wolność słowa, oddolną demokrację pracowniczą i solidarność ludzi pracy.",
      "en": "You would vote for him for exposing corporate media propaganda and imperial power, absolute defense of free speech, worker self-management, and universal human rights.",
      "ru": "Вы бы поддержали его за разоблачение манипуляций корпоративных СМИ, принципиальную свободу слова, рабочее самоуправление и интернациональную солидарность.",
      "fr": "Vous le soutiendriez pour sa dénonciation de la propagande médiatique et de l'impérialisme, sa défense absolue de la libre parole et l'autogestion ouvrière."
    },
    "coordinates": {
      "econ": -90,
      "soc": 95
    }
  },
  {
    "id": "juan_peron",
    "name": "Juan Domingo Perón",
    "flag": "🇦🇷",
    "country": {
      "pl": "Argentyna",
      "en": "Argentina",
      "ru": "Аргентина",
      "fr": "Argentine"
    },
    "role": {
      "pl": "Prezydent Argentyny, twórca justycjalizmu (peronizmu), reformator socjalny",
      "en": "President of Argentina, founder of Justicialism (Peronism), social reformer",
      "ru": "Президент Аргентины, создатель хустисиализма (перонизма), социальный реформатор",
      "fr": "Président de l'Argentine, fondateur du justicialisme (péronisme), réformateur social"
    },
    "quote": {
      "pl": "„Dla sprawiedliwości społecznej i suwerenności narodu musimy organizować lud pracujący i stawiać dobro wspólne ponad interes obcego kapitału.”",
      "en": "“For social justice and national sovereignty, we must organize working people and place the common good above foreign capital.”",
      "ru": "«Ради социальной справедливости и суверенитета нации мы должны организовать людей труда и поставить общее благо выше иностранного капитала.»",
      "fr": "« Pour la justice sociale et la souveraineté, nous devons organiser le peuple travailleur et placer le bien commun au-dessus des capitaux étrangers. »"
    },
    "whyVote": {
      "pl": "Poparłbyś go za głęboką obronę praw pracowniczych, nacjonalizację kolei i banków, rozbudowę opieki zdrowotnej i emerytalnej oraz połączenie sprawiedliwości społecznej z dumą narodową.",
      "en": "You would vote for him for staunch defense of labor rights, nationalization of strategic infrastructure, expansive public healthcare, and fusing social justice with patriotic solidarity.",
      "ru": "Вы бы поддержали его за защиту прав трудящихся, национализацию стратегических отраслей, доступную медицину и синтез социальной справедливости с патриотической гордостью.",
      "fr": "Vous voteriez pour lui pour sa défense vigoureuse des droits des travailleurs, la nationalisation des infrastructures stratégiques et l'alliance de la justice sociale avec la fierté nationale."
    },
    "coordinates": {
      "econ": -55,
      "soc": -50
    }
  },
  {
    "id": "sahra_wagenknecht",
    "name": "Sahra Wagenknecht",
    "flag": "🇩🇪",
    "country": {
      "pl": "Niemcy / Europa",
      "en": "Germany / Europe",
      "ru": "Германия / Европа",
      "fr": "Allemagne / Europe"
    },
    "role": {
      "pl": "Liderka Sojuszu BSW, ekonomistka, działaczka na rzecz lewicy tradycyjnej i pokoju",
      "en": "Leader of BSW alliance, economist, advocate for working-class left-conservatism and peace",
      "ru": "Лидер альянса BSW, экономист, поборница традиционного левого солидаризма и мира",
      "fr": "Dirigeante du parti BSW, économiste, figure du souverainisme social et de la gauche traditionnelle"
    },
    "quote": {
      "pl": "„Prawdziwa lewica musi bronić zwykłych pracowników, rodzimego przemysłu i bezpieczeństwa socjalnego, a nie uciekać w moralizatorski liberalizm elit.”",
      "en": "“A genuine left must defend ordinary workers, domestic industry, and social safety nets, rather than retreating into moralizing elite liberalism.”",
      "ru": "«Подлинные левые обязаны защищать людей труда, отечественную промышленность и социальные гарантии, а не морализаторский либерализм элит.»",
      "fr": "« Une vraie gauche doit défendre les salariés ordinaires, l'industrie locale et la sécurité sociale plutôt que de céder au moralisme libéral des élites. »"
    },
    "whyVote": {
      "pl": "Poparłbyś ją za bezkompromisową walkę o płace i emerytury, obronę tradycyjnego przemysłu i taniej energii, sprzeciw wobec militaryzmu oraz sceptycyzm wobec niekontrolowanej imigracji.",
      "en": "You would vote for her for championing wages and pensions, protecting industrial jobs and energy security, opposing foreign militarism, and skepticism toward unregulated border policies.",
      "ru": "Вы бы поддержали её за борьбу за достойные пенсии и зарплаты, защиту рабочих мест в индустрии, мирные инициативы и трезвый подход к миграционной политике.",
      "fr": "Vous voteriez pour elle pour son engagement pour les salaires et retraites, la protection de l'outil industriel, son pacifisme et son refus du mondialisme sans frontières."
    },
    "coordinates": {
      "econ": -70,
      "soc": -45
    }
  },
  {
    "id": "clement_attlee",
    "name": "Clement Attlee",
    "flag": "🇬🇧",
    "country": {
      "pl": "Wielka Brytania",
      "en": "United Kingdom",
      "ru": "Великобритания",
      "fr": "Royaume-Uni"
    },
    "role": {
      "pl": "Premier Wielkiej Brytanii (1945–1951), twórca NHS i powojennego państwa dobrobytu",
      "en": "Prime Minister of the UK (1945–1951), architect of the NHS and postwar welfare state",
      "ru": "Премьер-министр Великобритании (1945–1951), архитектор NHS и социального государства",
      "fr": "Premier ministre du Royaume-Uni (1945–1951), architecte du NHS et de l'État-providence"
    },
    "quote": {
      "pl": "„Państwo dobrobytu nie jest luksusem, lecz fundamentem cywilizowanego społeczeństwa, w którym nikt nie boi się choroby ani biedy.”",
      "en": "“The welfare state is not a luxury, but the foundation of a civilized society where no citizen fears illness, unemployment, or destitution.”",
      "ru": "«Социальное государство — не роскошь, а фундамент цивилизованного общества, где ни один гражданин не боится болезни или нищеты.»",
      "fr": "« L'État-providence n'est pas un luxe, mais le fondement d'une société civilisée où nul citoyen ne craint la maladie ou l'indigence. »"
    },
    "whyVote": {
      "pl": "Poparłbyś go za stworzenie bezpłatnej publicznej służby zdrowia (NHS), upaństwowienie kolei, węgla i hutnictwa, budowę tanich mieszkań społecznych oraz spokojny, patriotyczny porządek.",
      "en": "You would vote for him for creating the National Health Service (NHS), nationalizing critical public utilities, building massive council housing, and maintaining disciplined civic patriotism.",
      "ru": "Вы бы поддержали его за создание бесплатного здравоохранения (NHS), национализацию базовых отраслей, масштабное социальное жильё и патриотический порядок.",
      "fr": "Vous voteriez pour lui pour la création du service public de santé (NHS), la nationalisation des monopoles publics, le logement social et un républicanisme pragmatique et patriotique."
    },
    "coordinates": {
      "econ": -65,
      "soc": -35
    }
  },
  {
    "id": "evo_morales",
    "name": "Evo Morales",
    "flag": "🇧🇴",
    "country": {
      "pl": "Boliwia",
      "en": "Bolivia",
      "ru": "Боливия",
      "fr": "Bolivie"
    },
    "role": {
      "pl": "Prezydent Boliwii (2006–2019), przywódca ruchu rdzennych mieszkańców i obrońca suwerenności zasobów",
      "en": "President of Bolivia (2006–2019), indigenous trade union leader, champion of resource nationalization",
      "ru": "Президент Боливии (2006–2019), профсоюзный лидер коренных народов, поборник национализации недр",
      "fr": "Président de la Bolivie (2006–2019), leader syndical indigène et artisan de la nationalisation des ressources"
    },
    "quote": {
      "pl": "„Nasze bogactwa naturalne muszą służyć ludziom pracy i rdzennym społecznościom, a nie zagranicznym korporacjom.”",
      "en": "“Our natural wealth must serve the working people and indigenous communities, never transnational corporate monopolies.”",
      "ru": "«Наши природные ресурсы должны служить людям труда и общинам, а не иностранным корпорациям.»",
      "fr": "« Nos ressources naturelles doivent servir le peuple travailleur et nos communautés, non les conglomérats étrangers. »"
    },
    "whyVote": {
      "pl": "Poparłbyś go za nacjonalizację gazu i ropy naftowej, gwałtowny spadek ubóstwa, walkę z analfabetyzmem oraz dumę z rdzennych tradycji kulturowych i wspólnotowych.",
      "en": "You would vote for him for nationalizing oil and gas fields, historic poverty reduction, expanding literacy, and reviving indigenous communitarian pride.",
      "ru": "Вы бы поддержали его за национализацию нефтегазовой отрасли, колоссальное сокращение бедности, ликвидацию неграмотности и верность традициям общин.",
      "fr": "Vous voteriez pour lui pour la nationalisation des hydrocarbures, la baisse historique de la pauvreté et l'affirmation des traditions communautaires."
    },
    "coordinates": {
      "econ": -75,
      "soc": -35
    }
  }
];

const worldParties = [
  {
    "id": "libertarian_intl",
    "name": {
      "pl": "Międzynarodowy Sojusz Partii Libertariańskich (IALP)",
      "en": "International Alliance of Libertarian Parties (IALP)",
      "ru": "Международный альянс либертарианских партий (IALP)",
      "fr": "Alliance internationale des partis libertariens (IALP)"
    },
    "emblem": "🗽",
    "type": {
      "pl": "Globalny ruch wolnościowy i antyetatystyczny",
      "en": "Global libertarian and anti-statist network",
      "ru": "Всемирное либертарианское и антиэтатистское движение",
      "fr": "Réseau mondial libertarien et anti-étatiste"
    },
    "manifesto": {
      "pl": "Maksymalna wolność osobista i gospodarcza, radykalne cięcia podatków, prywatyzacja, likwidacja monopoli państwowych, obrona kryptowalut i nienaruszalność prawa własności.",
      "en": "Total individual and economic liberty, sweeping tax cuts, aggressive privatization, abolishing fiat banking monopolies, cryptocurrency freedom, and inviolable property rights.",
      "ru": "Абсолютная личная и экономическая свобода, масштабное снижение налогов, приватизация, ликвидация госмонополий, свобода криптовалют и священность частной собственности.",
      "fr": "Liberté individuelle et économique totale, baisse drastique des impôts, privatisation intégrale, suppression des monopoles d'État, liberté des cryptos et propriété inviolable."
    },
    "coordinates": {
      "econ": 90,
      "soc": 80
    }
  },
  {
    "id": "liberal_intl",
    "name": {
      "pl": "Międzynarodówka Liberalna (Liberal International / Renew)",
      "en": "Liberal International / Renew Global Alliance",
      "ru": "Либеральный интернационал / Глобальный альянс Renew",
      "fr": "Internationale libérale / Alliance mondiale Renew"
    },
    "emblem": "🌐",
    "type": {
      "pl": "Globalna federacja partii liberalnych i demokratycznych",
      "en": "Worldwide federation of liberal and reformist democratic parties",
      "ru": "Всемирная федерация либеральных и реформистских партий",
      "fr": "Fédération mondiale des partis libéraux et démocrates réformateurs"
    },
    "manifesto": {
      "pl": "Rządy prawa, wolny handel międzynarodowy, otwartość społeczna, integracja europejska i transatlantycka, wsparcie przedsiębiorczości i cyfryzacja gospodarki.",
      "en": "Rule of law, multilateral free trade, social pluralism, international democratic cooperation, entrepreneurial dynamism, and digital innovation.",
      "ru": "Верховенство закона, свободная международная торговля, социальный плюрализм, поддержка бизнеса, интеграция и инновации.",
      "fr": "État de droit, libre-échange multilatéral, ouverture sociétale, coopération internationale démocratique, esprit d'entreprise et innovation numérique."
    },
    "coordinates": {
      "econ": 40,
      "soc": 50
    }
  },
  {
    "id": "socialist_intl",
    "name": {
      "pl": "Sojusz Postępowy / Międzynarodówka Socjaldemokratyczna",
      "en": "Progressive Alliance / Social Democratic International",
      "ru": "Прогрессивный альянс / Социал-демократический интернационал",
      "fr": "Alliance progressiste / Internationale sociale-démocrate"
    },
    "emblem": "🌹",
    "type": {
      "pl": "Światowa sieć partii socjaldemokratycznych i laburzystowskich",
      "en": "Global network of social democratic and democratic labour parties",
      "ru": "Всемирная сеть социал-демократических и лейбористских партий",
      "fr": "Réseau mondial des partis sociaux-démocrates et travaillistes"
    },
    "manifesto": {
      "pl": "Sprawiedliwość społeczna, silne publiczne szpitale i szkoły, wysokie podatki dla najbogatszych, obrona praw pracowniczych i sprawiedliwa transformacja energetyczna.",
      "en": "Social justice, world-class public healthcare and education, progressive taxation on wealth, strong collective bargaining, and a worker-first green transition.",
      "ru": "Социальная справедливость, качественное бесплатное здравоохранение и образование, налоги на сверхбогатых, защита профсоюзов и честный зеленый переход.",
      "fr": "Justice sociale, hôpitaux et écoles publics gratuits de premier rang, fiscalité redistributive sur les grandes fortunes, droits syndicaux et transition écologique solidaire."
    },
    "coordinates": {
      "econ": -65,
      "soc": 50
    }
  },
  {
    "id": "global_greens",
    "name": {
      "pl": "Światowi Zieloni (Global Greens)",
      "en": "Global Greens / Planetary Ecological Movement",
      "ru": "Глобальные Зелёные (Global Greens)",
      "fr": "Les Verts mondiaux (Global Greens)"
    },
    "emblem": "🌿",
    "type": {
      "pl": "Międzynarodowa federacja partii ekologicznych i zielonych",
      "en": "Worldwide network of ecological, pacifist, and green parties",
      "ru": "Международная сеть экологических и природоохранных партий",
      "fr": "Réseau mondial des partis écologistes et de justice climatique"
    },
    "manifesto": {
      "pl": "Natychmiastowe odejście od paliw kopalnych, 100% odnawialnych źródeł energii, prawa zwierząt, zrównoważone rolnictwo ekologiczne, pacyfizm i demokracja bezpośrednia.",
      "en": "Immediate phase-out of fossil fuels, 100% renewable energy grids, animal liberation, organic sustainable agriculture, non-violence, and participatory grassroots democracy.",
      "ru": "Немедленный отказ от ископаемого топлива, 100% зеленая энергетика, защита животных, органическое сельское хозяйство, пацифизм и низовая демократия.",
      "fr": "Sortie immédiate des énergies fossiles, 100 % renouvelables, bien-être animal, agriculture biologique paysanne, non-violence et démocratie participative citoyenne."
    },
    "coordinates": {
      "econ": -60,
      "soc": 80
    }
  },
  {
    "id": "conservative_idu",
    "name": {
      "pl": "Międzynarodowa Unia Demokratyczna (IDU / Globalna Centroprawica)",
      "en": "International Democrat Union (IDU / Global Center-Right)",
      "ru": "Международный демократический союз (IDU / Правоцентристы)",
      "fr": "Union démocrate internationale (IDU / Centre-droit mondial)"
    },
    "emblem": "🛡️",
    "type": {
      "pl": "Światowy sojusz partii konserwatywnych i chadeckich",
      "en": "Worldwide association of conservative and Christian-democratic parties",
      "ru": "Всемирный союз консервативных и народных партий",
      "fr": "Alliance mondiale des partis conservateurs et chrétiens-démocrates"
    },
    "manifesto": {
      "pl": "Wolna przedsiębiorczość, dyscyplina fiskalna, silna obronność narodowa (NATO), poszanowanie tradycyjnych instytucji, bezpieczeństwo granic i rządy prawa.",
      "en": "Free enterprise, fiscal prudence, strong collective defense alliances (NATO), respect for enduring cultural institutions, border security, and firm law enforcement.",
      "ru": "Свободное предпринимательство, бюджетная дисциплина, крепкая оборона (НАТО), уважение к традиционным институтам, безопасность границ и твердый правопорядок.",
      "fr": "Libre entreprise, rigueur budgétaire, défense collective forte (OTAN), préservation des institutions traditionnelles, frontières sûres et sécurité publique."
    },
    "coordinates": {
      "econ": 60,
      "soc": -50
    }
  },
  {
    "id": "christian_cdi",
    "name": {
      "pl": "Centrowa Międzynarodówka Demokratyczna (CDI / Chadecja)",
      "en": "Centrist Democrat International (CDI / Christian Democracy)",
      "ru": "Центристский демократический интернационал (CDI / Христианские демократы)",
      "fr": "Internationale démocrate centriste (IDC / Démocratie chrétienne)"
    },
    "emblem": "🤝",
    "type": {
      "pl": "Światowa wspólnota partii chrześcijańsko-społecznych i ludowych",
      "en": "Global coalition of Christian social and popular democratic parties",
      "ru": "Глобальная коалиция христианско-социальных и народных партий",
      "fr": "Coalition mondiale des partis démocrates-chrétiens et humanistes"
    },
    "manifesto": {
      "pl": "Godność osoby ludzkiej, pomocniczość i solidaryzm społeczny, etyczna gospodarka rynkowa, wsparcie dla rodziny i współpraca międzynarodowa.",
      "en": "Human personal dignity, subsidiarity, communal solidarity, social market economy ethics, robust family support, and peace-building multilateralism.",
      "ru": "Человеческое достоинство, субсидиарность, солидарность, социальное рыночное хозяйство, помощь институту семьи и мирный диалог наций.",
      "fr": "Dignité inaliénable de la personne, subsidiarité, solidarité sociale, économie sociale de marché éthique et protection de la famille."
    },
    "coordinates": {
      "econ": 10,
      "soc": -35
    }
  },
  {
    "id": "progressive_intl",
    "name": {
      "pl": "Międzynarodówka Postępowa (Progressive International)",
      "en": "Progressive International (PI / Democratic Socialists)",
      "ru": "Прогрессивный интернационал (Progressive International)",
      "fr": "Internationale progressiste (PI / Socialisme démocratique)"
    },
    "emblem": "✊",
    "type": {
      "pl": "Globalny ruch lewicy antykapitalistycznej i związkowej",
      "en": "Worldwide movement uniting socialist, anti-imperialist, and labor movements",
      "ru": "Всемирное движение антикапиталистических, профсоюзных и левых сил",
      "fr": "Mouvement mondial unissant les forces socialistes, syndicales et anti-impérialistes"
    },
    "manifesto": {
      "pl": "Demokratyzacja globalnych finansów (MFW, Bank Światowy), umorzenie długów Globalnego Południa, publiczna własność energetyki i walka z oligarchią cyfrową.",
      "en": "Democratizing global finance institutions, debt cancellation for the Global South, public ownership of energy and pharmaceuticals, and breaking corporate monopoly power.",
      "ru": "Демократизация институтов МВФ и Всемирного банка, списание долгов развивающимся странам, общественный контроль над энергетикой и обуздание олигархии.",
      "fr": "Démocratisation des institutions financières mondiales, annulation des dettes du Sud, propriété publique de l'énergie et démantèlement des oligopoles transnationaux."
    },
    "coordinates": {
      "econ": -85,
      "soc": 65
    }
  },
  {
    "id": "pirate_parties",
    "name": {
      "pl": "Międzynarodowa Partia Piratów (Pirate Parties International)",
      "en": "Pirate Parties International (PPI)",
      "ru": "Интернационал пиратских партий (PPI)",
      "fr": "Parti Pirate International (PPI)"
    },
    "emblem": "⚓",
    "type": {
      "pl": "Światowy ruch na rzecz wolności cyfrowej, praw autorskich i jawności",
      "en": "Global political movement for digital rights, open source, and transparent government",
      "ru": "Мировое движение за цифровую свободу, права человека в сети и прозрачность власти",
      "fr": "Mouvement politique mondial pour les droits numériques, l'Open Source et la transparence publique"
    },
    "manifesto": {
      "pl": "Ścisła ochrona prywatności, prawo do silnego szyfrowania, reforma patentów i praw autorskich, wolne oprogramowanie Open Source w administracji i pełna przejrzystość państwa.",
      "en": "Uncompromising digital privacy, inviolable encryption, sweeping patent and copyright reform, mandatory public Open Source software, and open-data government transparency.",
      "ru": "Бескомпромиссная защита приватности, право на шифрование, реформа копирайта и патентов, открытый софт (Open Source) для госсектора и прозрачность бюджета.",
      "fr": "Protection absolue de la vie privée, droit inaliénable au chiffrement, réforme radicale du copyright, logiciels libres dans l'administration et transparence totale de l'État."
    },
    "coordinates": {
      "econ": -15,
      "soc": 85
    }
  },
  {
    "id": "volt_federalists",
    "name": {
      "pl": "Ruch Federalistów Europejskich i Światowych (Volt / WFM)",
      "en": "World & European Federalist Movement (Volt / WFM)",
      "ru": "Движение европейских и мировых федералистов (Volt / WFM)",
      "fr": "Mouvement fédéraliste mondial et européen (Volt / WFM)"
    },
    "emblem": "⚡",
    "type": {
      "pl": "Pannarodowy ruch na rzecz integracji federalnej i nowoczesnej demokracji",
      "en": "Pan-national movement for democratic federalism, smart governance, and borderless citizenship",
      "ru": "Паннациональное движение за федерализм, умное управление и гражданство без границ",
      "fr": "Mouvement paneuropéen et mondial pour le fédéralisme démocratique et la citoyenneté universelle"
    },
    "manifesto": {
      "pl": "Głęboka integracja federalna, wspólny rząd europejski, gospodarka oparta na nauce i innowacjach, zielona transformacja i likwidacja barier między narodami.",
      "en": "Deep democratic federal integration, united continental governance, high-tech science-based economy, green infrastructure, and overcoming nationalist borders.",
      "ru": "Глубокая федеративная интеграция, единое демократическое правительство, экономика знаний и науки, зеленый переход и преодоление национального эгоизма.",
      "fr": "Intégration fédérale démocratique approfondie, gouvernement continental unifié, économie fondée sur la science, transition verte et dépassement des frontières nationales."
    },
    "coordinates": {
      "econ": 15,
      "soc": 70
    }
  },
  {
    "id": "sovereignist_patriots",
    "name": {
      "pl": "Światowy Sojusz Patriotów i Suwerenistów (Patriots Network)",
      "en": "Global Network of Patriots & Sovereignists",
      "ru": "Глобальная сеть патриотов и суверенистов (Патриоты за суверенитет)",
      "fr": "Réseau mondial des patriotes et souverainistes"
    },
    "emblem": "🦅",
    "type": {
      "pl": "Międzynarodowa współpraca partii narodowych, tożsamościowych i suwerennościowych",
      "en": "International alliance of sovereignist, national-conservative, and patriotic parties",
      "ru": "Международный союз национально-консервативных и патриотических партий",
      "fr": "Alliance internationale des partis souverainistes, patriotes et identitaires"
    },
    "manifesto": {
      "pl": "Przywrócenie pełnej suwerenności państwom narodowym, twarda kontrola granic przeciwko nielegalnej imigracji, obrona rdzennej kultury i sceptycyzm wobec instytucji globalistycznych.",
      "en": "Restoring unconditional nation-state sovereignty, fortified border security against illegal migration, preservation of native cultural roots, and resisting globalist diktats.",
      "ru": "Возвращение суверенитета национальным государствам, жесткая охрана границ от нелегальной миграции, защита традиций и сопротивление наднациональным бюрократиям.",
      "fr": "Restauration pleine et entière de la souveraineté nationale, contrôle impitoyable des frontières, préservation de l'identité culturelle et rejet du mondialisme."
    },
    "coordinates": {
      "econ": 15,
      "soc": -80
    }
  },
  {
    "id": "anarchist_federations",
    "name": {
      "pl": "Międzynarodówka Federacji Anarchistycznych (IAF / IFA)",
      "en": "International of Anarchist Federations (IAF / IFA)",
      "ru": "Интернационал анархистских федераций (IAF / IFA)",
      "fr": "Internationale des fédérations anarchistes (IFA)"
    },
    "emblem": "Ⓐ",
    "type": {
      "pl": "Globalna federacja zrzeszeń anarchistycznych, antyautorytarnych i wolnościowych",
      "en": "Global federation of anti-authoritarian, direct-democratic, and anarchist collectives",
      "ru": "Всемирная федерация антиавторитарных и анархических коммун",
      "fr": "Fédération mondiale des collectifs libertaires, anti-autoritaires et autogestionnaires"
    },
    "manifesto": {
      "pl": "Całkowite zniesienie państwa, granic, kapitalizmu i hierarchii na rzecz wolnych komun opartych na samorządności, pomocy wzajemnej i bezpośredniej demokracji.",
      "en": "Complete abolition of the coercive state, capitalist exploitation, and artificial borders, replacing them with free federations founded on mutual aid and direct democracy.",
      "ru": "Полное упразднение государства, капиталистического гнета и границ ради свободных общин, основанных на взаимопомощи и прямой демократии.",
      "fr": "Abolition intégrale de l'État coercitif, de l'exploitation capitaliste et des frontières au profit de communes libres fondées sur l'entraide et l'autogestion directe."
    },
    "coordinates": {
      "econ": -95,
      "soc": 95
    }
  },
  {
    "id": "tiger_technocrats",
    "name": {
      "pl": "Koalicja Rozwojowo-Technokratyczna (East Asian Tiger Model)",
      "en": "Developmental Technocrat Coalition (East Asian Tiger Model)",
      "ru": "Технократическая коалиция развития (Модель восточноазиатских тигров)",
      "fr": "Coalition technocratique de développement (Modèle des tigres asiatiques)"
    },
    "emblem": "🚀",
    "type": {
      "pl": "Ruch na rzecz merytokracji, planowania infrastrukturalnego i ładu społecznego",
      "en": "Coalition for meritocratic leadership, strategic industrial modernization, and societal harmony",
      "ru": "Коалиция меритократии, стратегического индустриального планирования и стабильности",
      "fr": "Coalition pour le leadership méritocratique, la planification industrielle stratégique et l'ordre civique"
    },
    "manifesto": {
      "pl": "Merytokracja na wszystkich szczeblach władzy, bezwzględna czystość urzędnicza, strategiczne wsparcie przemysłu wysokich technologii, dyscyplina społeczna i stabilność.",
      "en": "Meritocracy throughout public administration, total zero tolerance for corruption, state-guided high-tech industrial policy, civic discipline, and social cohesion.",
      "ru": "Меритократия в органах власти, нулевая терпимость к коррупции, господдержка высоких технологий, общественная дисциплина и гармония.",
      "fr": "Méritocratie rigoureuse dans l'administration, tolérance zéro pour la corruption, politique industrielle ciblée sur les hautes technologies et discipline civique."
    },
    "coordinates": {
      "econ": 45,
      "soc": -50
    }
  },
  {
    "id": "traditional_left_solidarists",
    "name": {
      "pl": "Międzynarodowa Koalicja Lewicy Patriotycznej i Solidaryzmu Pracy",
      "en": "International Coalition of Patriotic Labor & Left Solidarism",
      "ru": "Международная коалиция патриотического труда и левого солидаризма",
      "fr": "Coalition Internationale du Travail Patriotique et du Solidarisme"
    },
    "emblem": "🛠️",
    "type": {
      "pl": "Tradycyjny ruch robotniczo-społeczny i obrony suwerenności gospodarczej",
      "en": "Traditional working-class movement for economic sovereignty and welfare",
      "ru": "Традиционное рабочее движение за экономический суверенитет и соцзащиту",
      "fr": "Mouvement ouvrier traditionnel pour la souveraineté économique et sociale"
    },
    "manifesto": {
      "pl": "Połączenie silnego państwa socjalnego, wysokich płac, obrony rodzimego przemysłu i ochrony miejsc pracy z szacunkiem dla suwerenności narodowej i kultury.",
      "en": "Combining an expansive welfare state, industrial protectionism, and strong worker rights with respect for national sovereignty and cultural heritage.",
      "ru": "Синтез мощного социального государства, защиты отечественной индустрии и прав рабочих с уважением к национальному суверенитету и культуре.",
      "fr": "Alliance d'un État social protecteur, de la réindustrialisation et des droits des travailleurs avec la souveraineté nationale et l'enracinement culturel."
    },
    "coordinates": {
      "econ": -65,
      "soc": -50
    }
  },
  {
    "id": "state_socialist_bloc",
    "name": {
      "pl": "Światowa Liga Socjalizmu Państwowego i Planowania Gospodarczego",
      "en": "Global League of State Socialists & Public Economic Planning",
      "ru": "Всемирная лига государственного социализма и госпланирования",
      "fr": "Ligue Mondiale du Socialisme d'État et de la Planification"
    },
    "emblem": "🚩",
    "type": {
      "pl": "Ruch socjalizmu państwowego, upaństwowienia przemysłu i dyscypliny społecznej",
      "en": "State socialist movement advocating nationalization and social discipline",
      "ru": "Движение государственного социализма, национализации и общественной дисциплины",
      "fr": "Mouvement de socialisme d'État, de nationalisation et de discipline collective"
    },
    "manifesto": {
      "pl": "Nacjonalizacja kluczowych sektorów gospodarki, centralne planowanie strategiczne, likwidacja oligarchii i prymatu zysku oraz społeczna dyscyplina obywatelska.",
      "en": "Nationalization of commanding economic heights, strategic state planning, abolition of capitalist oligarchy, and collective civic discipline.",
      "ru": "Национализация стратегических отраслей, государственное планирование, ликвидация власти олигархии и коллективная гражданская дисциплина.",
      "fr": "Nationalisation des secteurs stratégiques, planification économique, éradication de l'oligarchie financière et discipline collective."
    },
    "coordinates": {
      "econ": -85,
      "soc": -45
    }
  },
  {
    "id": "christian_social_union_intl",
    "name": {
      "pl": "Międzynarodowe Przymierze Socjalizmu Chrześcijańskiego i Dystrybucjonizmu",
      "en": "International Alliance of Christian Socialists & Distributists",
      "ru": "Международный альянс христианского социализма и дистрибутизма",
      "fr": "Alliance Internationale du Socialisme Chrétien et Distributisme"
    },
    "emblem": "🕊️",
    "type": {
      "pl": "Ruch solidaryzmu chrześcijańsko-społecznego, spółdzielczości i etyki wspólnotowej",
      "en": "Christian communitarian & distributist movement based on cooperative ownership",
      "ru": "Христианско-социальное движение кооперативной собственности и общинной этики",
      "fr": "Mouvement solidariste chrétien et distributiste fondé sur l'économie coopérative"
    },
    "manifesto": {
      "pl": "Gospodarka oparta na godności ludzkiej, spółdzielniach, szerokim rozproszeniu własności i opiece nad najsłabszymi, w zgodzie z etyką chrześcijańską i rodziną.",
      "en": "An economy rooted in human dignity, cooperative ownership, widespread property distribution, and care for the vulnerable, guided by communitarian ethics.",
      "ru": "Экономика человеческого достоинства, кооперативов, широкого распределения собственности и заботы о слабых в русле общинной этики и семьи.",
      "fr": "Une économie fondée sur la dignité humaine, la propriété partagée, le modèle coopératif et la protection des plus vulnérables au sein de la communauté."
    },
    "coordinates": {
      "econ": -45,
      "soc": -60
    }
  }
];

if (typeof module !== "undefined" && module.exports) {
  module.exports = { worldIdeologies, worldPoliticians, worldParties };
}
