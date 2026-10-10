/**
 * KATALOG 44 IDEOLOGII, 89 ŚWIATOWYCH LIDERÓW I POSTACI HISTORYCZNYCH, 30 MIĘDZYNARODOWYCH PARTII
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
    },
    "icon": "💼",
    "color": "#0284c7",
    "gradient": "linear-gradient(135deg, #0284c7, #0369a1)"
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
    },
    "icon": "⚡",
    "color": "#eab308",
    "gradient": "linear-gradient(135deg, #eab308, #ca8a04)"
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
    },
    "icon": "🗽",
    "color": "#f59e0b",
    "gradient": "linear-gradient(135deg, #f59e0b, #d97706)"
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
    },
    "icon": "⚖️",
    "color": "#3b82f6",
    "gradient": "linear-gradient(135deg, #3b82f6, #1d4ed8)"
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
    },
    "icon": "🏛️",
    "color": "#1d4ed8",
    "gradient": "linear-gradient(135deg, #1d4ed8, #1e3a8a)"
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
    },
    "icon": "🦅",
    "color": "#9a3412",
    "gradient": "linear-gradient(135deg, #9a3412, #7c2d12)"
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
    },
    "icon": "🛡️",
    "color": "#b91c1c",
    "gradient": "linear-gradient(135deg, #b91c1c, #991b1b)"
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
    },
    "icon": "👑",
    "color": "#6b21a8",
    "gradient": "linear-gradient(135deg, #6b21a8, #581c87)"
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
    },
    "icon": "⚒️",
    "color": "#be123c",
    "gradient": "linear-gradient(135deg, #be123c, #9f1239)"
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
    },
    "icon": "🤝",
    "color": "#4338ca",
    "gradient": "linear-gradient(135deg, #4338ca, #3730a3)"
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
    },
    "icon": "🕊️",
    "color": "#1e40af",
    "gradient": "linear-gradient(135deg, #1e40af, #1d4ed8)"
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
    },
    "icon": "🌾",
    "color": "#b45309",
    "gradient": "linear-gradient(135deg, #b45309, #78350f)"
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
    },
    "icon": "📈",
    "color": "#0891b2",
    "gradient": "linear-gradient(135deg, #0891b2, #0e7490)"
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
    },
    "icon": "🌐",
    "color": "#2563eb",
    "gradient": "linear-gradient(135deg, #2563eb, #1e40af)"
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
    },
    "icon": "🔬",
    "color": "#06b6d4",
    "gradient": "linear-gradient(135deg, #06b6d4, #0891b2)"
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
    },
    "icon": "⚖️",
    "color": "#64748b",
    "gradient": "linear-gradient(135deg, #64748b, #475569)"
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
    },
    "icon": "🧭",
    "color": "#6366f1",
    "gradient": "linear-gradient(135deg, #6366f1, #4f46e5)"
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
    },
    "icon": "🌱",
    "color": "#10b981",
    "gradient": "linear-gradient(135deg, #10b981, #059669)"
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
    },
    "icon": "✨",
    "color": "#8b5cf6",
    "gradient": "linear-gradient(135deg, #8b5cf6, #7c3aed)"
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
    },
    "icon": "🌿",
    "color": "#16a34a",
    "gradient": "linear-gradient(135deg, #16a34a, #15803d)"
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
    },
    "icon": "🍀",
    "color": "#059669",
    "gradient": "linear-gradient(135deg, #059669, #047857)"
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
    },
    "icon": "🌹",
    "color": "#dc2626",
    "gradient": "linear-gradient(135deg, #dc2626, #b91c1c)"
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
    },
    "icon": "✊",
    "color": "#e11d48",
    "gradient": "linear-gradient(135deg, #e11d48, #be123c)"
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
    },
    "icon": "Ⓐ",
    "color": "#c026d3",
    "gradient": "linear-gradient(135deg, #c026d3, #a21caf)"
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
    },
    "icon": "🔄",
    "color": "#d97706",
    "gradient": "linear-gradient(135deg, #d97706, #b45309)"
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
    },
    "icon": "⚙️",
    "color": "#991b1b",
    "gradient": "linear-gradient(135deg, #991b1b, #7f1d1d)"
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
    },
    "icon": "🚩",
    "color": "#ef4444",
    "gradient": "linear-gradient(135deg, #ef4444, #dc2626)"
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
    },
    "icon": "🏢",
    "color": "#334155",
    "gradient": "linear-gradient(135deg, #334155, #1e293b)"
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
    },
    "icon": "🔓",
    "color": "#84cc16",
    "gradient": "linear-gradient(135deg, #84cc16, #65a30d)"
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
    },
    "icon": "🌍",
    "color": "#a855f7",
    "gradient": "linear-gradient(135deg, #a855f7, #9333ea)"
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
    },
    "icon": "🏭",
    "color": "#0d9488",
    "gradient": "linear-gradient(135deg, #0d9488, #0f766e)"
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
    },
    "icon": "🚀",
    "color": "#f43f5e",
    "gradient": "linear-gradient(135deg, #f43f5e, #e11d48)"
  },
  {
    "id": "national_socialism",
    "name": {
      "pl": "Narodowy Socjalizm (Nazizm)",
      "en": "National Socialism (Nazism)",
      "ru": "Национал-социализм (Нацизм)",
      "fr": "National-socialisme (Nazisme)"
    },
    "subtitle": {
      "pl": "Totalitarny etatyzm, skrajny rasizm biologiczny, antysemityzm i militarystyczna autarkia",
      "en": "Totalitarian statism, extreme biological racism, antisemitism, and militarized autarky",
      "ru": "Тоталитарный этатизм, крайний биологический расизм, антисемитизм и милитаристская автаркия",
      "fr": "Étatisme totalitaire, racisme biologique extrême, antisémitisme et autarcie militarisée"
    },
    "desc": {
      "pl": "Ideologia III Rzeszy oparta na bezwzględnym podporządkowaniu jednostki totalitarnemu państwu (Führerprinzip), biologicznej teorii rasowej, likwidacji wolności obywatelskich, zbrojeniach i agresywnej ekspansji wojennej (Lebensraum). Gospodarka była ściśle podporządkowana machinie wojennej pod nadzorem państwa.",
      "en": "The totalitarian ideology of Nazi Germany built on absolute subservience to the Führer, racial purity doctrines, annihilation of civil liberties, autarky, and genocidal expansionism (Lebensraum). The economy was directed toward militarized production.",
      "ru": "Тоталитарная идеология нацистской Германии, основанная на культе вождя (фюрерпринцип), расовой теории, уничтожении гражданских свобод и агрессивной военной экспансии. Экономика подчинялась военной машине.",
      "fr": "L'idéologie totalitaire du Troisième Reich fondée sur le principe du chef (Führerprinzip), le racisme biologique, la suppression des libertés et l'expansionnisme militaire génocidaire (Lebensraum)."
    },
    "keyFigures": [
      "Adolf Hitler",
      "Joseph Goebbels",
      "Alfred Rosenberg"
    ],
    "coordinates": {
      "econ": -25,
      "soc": -98
    },
    "icon": "⚡",
    "color": "#450a0a",
    "gradient": "linear-gradient(135deg, #450a0a, #1f0505)"
  },
  {
    "id": "classical_fascism",
    "name": {
      "pl": "Klasyczny Faszyzm (Włoski)",
      "en": "Classical Fascism (Italian)",
      "ru": "Классический фашизм (Итальянский)",
      "fr": "Fascisme classique (Italien)"
    },
    "subtitle": {
      "pl": "Totalitarny korporacjonizm, prymat państwa nad jednostką i zbrojny nacjonalizm",
      "en": "Totalitarian corporatism, supremacy of the state over the individual, and militarized nationalism",
      "ru": "Тоталитарный корпоративизм, примат государства над личностью и милитаристский национализм",
      "fr": "Corporatisme totalitaire, suprématie de l'État sur l'individu et nationalisme armé"
    },
    "desc": {
      "pl": "„Wszystko w państwie, nic poza państwem, nic przeciw państwu”. Faszyzm odrzucał liberalną demokrację, indywidualizm i marksizm, zastępując je dyktaturą wodza, zorganizowanym w korporacje społeczeństwem oraz kultem heroizmu i wojny.",
      "en": "“Everything in the State, nothing outside the State, nothing against the State.” Classical fascism rejected liberal democracy, individualism, and Marxism in favor of a one-party dictatorship, corporatist economic organization, and imperial conquest.",
      "ru": "«Всё в государстве, ничего вне государства, ничего против государства». Фашизм отвергает либеральную демократию, индивидуализм и марксизм в пользу культа вождя, корпоративного строя и имперской экспансии.",
      "fr": "« Tout dans l'État, rien hors de l'État, rien contre l'État ». Le fascisme classique rejetait la démocratie libérale et le marxisme au profit de la dictature du chef et de l'organisation corporatiste."
    },
    "keyFigures": [
      "Benito Mussolini",
      "Giovanni Gentile"
    ],
    "coordinates": {
      "econ": -20,
      "soc": -92
    },
    "icon": "🏛️",
    "color": "#1c1917",
    "gradient": "linear-gradient(135deg, #1c1917, #09090b)"
  },
  {
    "id": "militarism_imperialism",
    "name": {
      "pl": "Imperializm i Militaryzm",
      "en": "Imperialism & Militarism",
      "ru": "Империализм и милитаризм",
      "fr": "Impérialisme et militarisme"
    },
    "subtitle": {
      "pl": "Potęga zbrojna, ekspansja terytorialna mocarstwa i hierarchiczny porządek państwowy",
      "en": "Armed strength, territorial expansion of great powers, and hierarchical state discipline",
      "ru": "Военная мощь, территориальная экспансия великих держав и строгая государственная дисциплина",
      "fr": "Puissance armée, expansion territoriale des empires et discipline étatique hiérarchique"
    },
    "desc": {
      "pl": "Pogląd, wedle którego miarą wielkości narodu i państwa jest jego siła militarna, zdolność do prowadzenia wojen oraz podporządkowywania sobie innych terytoriów. Gospodarka i społeczeństwo są zorganizowane hierarchicznie z prymatem armii.",
      "en": "The political doctrine holding that national greatness is defined by armed power, conquest, and dominating spheres of influence. Civil society and industry are subordinated to military preparedness and imperial ambition.",
      "ru": "Доктрина, согласно которой величие нации измеряется военной мощью, завоеваниями и геополитическим доминированием. Промышленность и общество подчинены военным целям.",
      "fr": "Doctrine politique considérant que la grandeur d'une nation repose sur la puissance militaire, la conquête coloniale et la subordination de la société aux impératifs armés."
    },
    "keyFigures": [
      "Kaiser Wilhelm II",
      "Hideki Tojo",
      "Otto von Bismarck"
    ],
    "coordinates": {
      "econ": 20,
      "soc": -85
    },
    "icon": "🎖️",
    "color": "#3f3f46",
    "gradient": "linear-gradient(135deg, #3f3f46, #18181b)"
  },
  {
    "id": "bolshevism",
    "name": {
      "pl": "Bolszewizm (Marksizm-Leninizm)",
      "en": "Bolshevism (Marxism-Leninism)",
      "ru": "Большевизм (Марксизм-ленинизм)",
      "fr": "Bolchevisme (Marxisme-léninisme)"
    },
    "subtitle": {
      "pl": "Awangarda partii robotniczej, dyktatura proletariatu, likwidacja własności prywatnej i centralne planowanie",
      "en": "Vanguard party rule, dictatorship of the proletariat, abolition of private capital, and central planning",
      "ru": "Авангардная партия, диктатура пролетариата, ликвидация частной собственности и плановая экономика",
      "fr": "Parti d'avant-garde, dictature du prolétariat, abolition du capital privé et planification centrale"
    },
    "desc": {
      "pl": "Radykalny nurt rewolucyjnego komunizmu stworzony przez Włodzimierza Lenina. Zakładał obalenie kapitalizmu drogą zbrojnej rewolucji, monopol władzy partii komunistycznej, nacjonalizację całego przemysłu i bezwzględną walkę z klasami posiadającymi.",
      "en": "The revolutionary communist doctrine formulated by Vladimir Lenin. It advocated violent overthrow of bourgeois capitalism, a disciplined vanguard party monopoly, total nationalization of production, and suppressing class enemies.",
      "ru": "Революционное коммунистическое учение, созданное Лениным. Предусматривает свержение буржуазии путем вооруженной революции, монополию партии, тотальное обобществление средств производства и классовую борьбу.",
      "fr": "Doctrine communiste révolutionnaire fondée par Lénine, préconisant le renversement du capitalisme par la force, le rôle dirigeant du parti d'avant-garde et la nationalisation intégrale de l'économie."
    },
    "keyFigures": [
      "Vladimir Lenin",
      "Joseph Stalin",
      "Leon Trotsky"
    ],
    "coordinates": {
      "econ": -96,
      "soc": -85
    },
    "icon": "🚩",
    "color": "#7f1d1d",
    "gradient": "linear-gradient(135deg, #7f1d1d, #450a0a)"
  },
  {
    "id": "kemalism",
    "name": {
      "pl": "Kemalizm (Republikański Sekularyzm)",
      "en": "Kemalism (Turkish Republicanism)",
      "ru": "Кемализм (Республиканский секуляризм)",
      "fr": "Kémalisme (Sécularisme républicain)"
    },
    "subtitle": {
      "pl": "Radykalny laicyzm, modernizacja, republikanizm i reformizm narodowy",
      "en": "Radical secularism, rapid state-led modernization, republicanism, and civic reformism",
      "ru": "Радикальный секуляризм, форсированная модернизация, республиканизм и реформизм",
      "fr": "Laïcité républicaine stricte, modernisation rapide impulsée par l'État et réformisme national"
    },
    "desc": {
      "pl": "Fundament ustrojowy Republiki Turcji oparty na Sześciu Strzałach Atatürka: republikanizmie, nacjonalizmie obywatelskim, ludowizmie, etatyzmie gospodarczym, laicyzmie i rewolucyjnym reformizmie. Dążył do przekształcenia tradycyjnego społeczeństwa w nowoczesny naród europejskiego typu.",
      "en": "The founding ideology of modern Turkey based on Atatürk's Six Arrows: republicanism, civic nationalism, populism, statism, strict secularism (laicism), and reformism. It aimed to transform a feudal imperial realm into a progressive, secular nation-state.",
      "ru": "Основополагающая идеология Турции, базирующаяся на «Шести стрелах» Ататюрка: республиканизм, национализм, народность, лаицизм (светскость), этатизм и реформизм. Превратила страну в современное светское государство.",
      "fr": "L'idéologie fondatrice de la Turquie moderne reposant sur les « Six Flèches » d'Atatürk : républicanisme, nationalisme civique, populisme, étatisme, laïcité intransigeante et réformisme permanent."
    },
    "keyFigures": [
      "Mustafa Kemal Atatürk",
      "İsmet İnönü"
    ],
    "coordinates": {
      "econ": -10,
      "soc": 25
    },
    "icon": "🏹",
    "color": "#0369a1",
    "gradient": "linear-gradient(135deg, #0369a1, #0284c7)"
  },
  {
    "id": "maoism",
    "name": {
      "pl": "Maoizm (Marksizm-Leninizm-Maoizm)",
      "en": "Maoism (Marxism-Leninism-Maoism)",
      "ru": "Маоизм (Идеи Мао Цзэдуна)",
      "fr": "Maoïsme"
    },
    "subtitle": {
      "pl": "Wiejska rewolucja chłopska, wojna ludowa, nieustanna walka klasowa i rewolucja kulturalna",
      "en": "Peasant-based agrarian communism, protracted people's war, continuous cultural revolution",
      "ru": "Опора на крестьянство, народная война, непрерывная классовая борьба и культурная революция",
      "fr": "Communisme agraire paysan, guerre populaire prolongée et révolution culturelle permanente"
    },
    "desc": {
      "pl": "Wariant komunizmu rozwinięty przez Mao Zedonga w Chinach. W przeciwieństwie do marksizmu radzieckiego, główną siłą napędową rewolucji uczynił chłopstwo. Charakteryzował się masową mobilizacją społeczną, wojną partyzancką i dążeniem do wykorzenienia „burżuazyjnych naleciałości” w kulturze.",
      "en": "Chinese variant of revolutionary communism adapted by Mao Zedong. Centered on the peasantry as the primary revolutionary class rather than urban proletariat, it championed continuous class struggle, guerrilla people's war, and anti-revisionism.",
      "ru": "Китайская адаптация марксизма-ленинизма Мао Цзэдуном. Сделала ставку на крестьянские массы, народную войну, непрерывную чистку от «буржуазного перерождения» и мобилизационную экономику.",
      "fr": "Adaptation chinoise du marxisme-léninisme par Mao Zedong, plaçant la paysannerie au cœur de la révolution et préconisant la guerre populaire ainsi que la révolution culturelle."
    },
    "keyFigures": [
      "Mao Zedong",
      "Lin Biao"
    ],
    "coordinates": {
      "econ": -96,
      "soc": -75
    },
    "icon": "⭐",
    "color": "#9f1239",
    "gradient": "linear-gradient(135deg, #9f1239, #881337)"
  },
  {
    "id": "neoconservatism",
    "name": {
      "pl": "Neokonserwatyzm (Interwencjonizm Hawkish)",
      "en": "Neoconservatism (Hawkish Global Leadership)",
      "ru": "Неоконсерватизм (Геополитический интервенционизм)",
      "fr": "Néo-conservatisme (Interventionnisme libéral)"
    },
    "subtitle": {
      "pl": "Amerykańskie przywództwo moralne, wolny rynek i zbrojna promocja demokracji na świecie",
      "en": "Moral realism, free enterprise, assertive defense buildup, and promoting democracy abroad",
      "ru": "Американское лидерство, свободный рынок, мощный ВПК и продвижение демократии силой",
      "fr": "Leadership géopolitique affirmé, libre entreprise et interventionnisme militaire démocratique"
    },
    "desc": {
      "pl": "Nurt polityczny łączący wiarę w wolny rynek i tradycyjne wartości z agresywną, interwencjonistyczną polityką zagraniczną. Odrzuca izolacjonizm, uznając, że wolny świat musi aktywnie eliminować reżimy autorytarne i terroryzm za pomocą potęgi militarnej.",
      "en": "A political philosophy combining free-market economics with hawkish, interventionist foreign policy. Neoconservatives reject isolationism, arguing that democracies have a moral obligation and strategic need to project military strength against rogue regimes.",
      "ru": "Политическое направление, сочетающее рыночную экономику с жестким внешнеполитическим интервенционизмом. Сторонники выступают за превентивные военные удары против диктатур и глобальную роль США.",
      "fr": "Courant politique alliant libéralisme économique et politique étrangère interventionniste inflexible. Il soutient l'usage de la force militaire pour renverser les régimes autoritaires."
    },
    "keyFigures": [
      "George W. Bush",
      "Dick Cheney",
      "Paul Wolfowitz"
    ],
    "coordinates": {
      "econ": 55,
      "soc": -40
    },
    "icon": "🦅",
    "color": "#1e3a8a",
    "gradient": "linear-gradient(135deg, #1e3a8a, #172554)"
  },
  {
    "id": "right_wing_populism",
    "name": {
      "pl": "Prawicowy Populizm (Suwerenizm Ludowy)",
      "en": "Right-Wing Populism (National Sovereignism)",
      "ru": "Правый популизм (Национальный суверенизм)",
      "fr": "Populisme de droite (Souverainisme populaire)"
    },
    "subtitle": {
      "pl": "Sprzeciw wobec globalistycznych elit, obrona granic, tożsamości kulturowej i interesu zwykłych obywateli",
      "en": "Rejection of globalist elites, strict borders, defense of cultural identity, and working-class patriotism",
      "ru": "Борьба с глобалистскими элитами, закрытие границ, защита традиционной культуры и интересов народа",
      "fr": "Rejet des élites mondialistes, contrôle strict des frontières, identité nationale et patriotisme populaire"
    },
    "desc": {
      "pl": "Ruch polityczny przeciwstawiający „uczciwy lud” skorumpowanym elitom, instytucjom ponadnarodowym i masowej imigracji. Łączy patriotyzm gospodarczy z bezkompromisową ochroną granic narodowych i sprzeciwem wobec ideologii progresywnych.",
      "en": "A populist ideology pitting 'the virtuous people' against detached globalist establishments, multinational bureaucrats, and open-border policies. It combines national protectionism or deregulation with strict border security and cultural patriotism.",
      "ru": "Движение, противопоставляющее интересы простого народа наднациональным институтам и либеральным элитам. Требует пресечения нелегальной миграции, протекционизма и защиты национального суверенитета.",
      "fr": "Mouvement politique opposant le peuple aux oligarchies mondialistes et aux institutions supranationales. Il défend la souveraineté des frontières, la priorité nationale et l'identité culturelle."
    },
    "keyFigures": [
      "Donald Trump",
      "Marine Le Pen",
      "Jair Bolsonaro"
    ],
    "coordinates": {
      "econ": 40,
      "soc": -75
    },
    "icon": "📢",
    "color": "#c2410c",
    "gradient": "linear-gradient(135deg, #c2410c, #9a3412)"
  },
  {
    "id": "radical_green_left",
    "name": {
      "pl": "Radykalna Lewica Klimatyczna (Eko-Sprawiedliwość)",
      "en": "Radical Climate Left (Climate Justice)",
      "ru": "Радикальные левые климатисты (Эко-справедливость)",
      "fr": "Gauche radicale écologiste (Justice climatique)"
    },
    "subtitle": {
      "pl": "Konieczność zmiany systemu, odejście od wzrostu gospodarczego (degrowth), dekarbonizacja i sprawiedliwość społeczna",
      "en": "System change over climate change, post-growth economics (degrowth), rapid decarbonization, and social justice",
      "ru": "Смена системы вместо изменения климата, концепция антироста (degrowth) и немедленный запрет ископаемого топлива",
      "fr": "Changement de système, décroissance, neutralité carbone immédiate et justice écologique"
    },
    "desc": {
      "pl": "„System change, not climate change”. Uznajesz, że kryzys klimatyczny jest bezpośrednim skutkiem kapitalistycznej eksploatacji i dążenia do nieskończonego zysku. Wymagasz natychmiastowego zamknięcia energetyki kopalnej, drastycznej redystrybucji bogactwa i podporządkowania gospodarki planecie.",
      "en": "“System change, not climate change.” This philosophy asserts that global ecological breakdown is an inevitable outcome of capitalist profit motives. It demands immediate halting of fossil fuels, radical wealth redistribution, and post-growth ecological planning.",
      "ru": "Убеждение, что климатический кризис порожден капиталистической погоней за прибылью. Требует немедленного отказа от нефти и газа, введения жестких климатических налогов и экологического социализма.",
      "fr": "Ce courant affirme que le dérèglement climatique découle de la prédation capitaliste. Il exige l'arrêt immédiat des énergies fossiles, une redistribution radicale et la décroissance planifiée."
    },
    "keyFigures": [
      "Greta Thunberg",
      "Alexandria Ocasio-Cortez"
    ],
    "coordinates": {
      "econ": -78,
      "soc": 90
    },
    "icon": "🌍",
    "color": "#15803d",
    "gradient": "linear-gradient(135deg, #15803d, #166534)"
  },
  {
    "id": "illiberal_democracy",
    "name": {
      "pl": "Nieliberalna Demokracja (Konserwatywny Suwerenizm)",
      "en": "Illiberal Democracy (Conservative Sovereignism)",
      "ru": "Нелиберальная демократия (Суверенная демократия)",
      "fr": "Démocratie illibérale (Souverainisme conservateur)"
    },
    "subtitle": {
      "pl": "Rządy większości bez liberalnych dogmatów, tradycyjna rodzina, suwerenność i prorodzinny etatyzm",
      "en": "Majoritarian rule free from progressive dogmas, traditional family policy, and national constitutional supremacy",
      "ru": "Правление большинства без навязанного либерализма, традиционные ценности и примат национального права",
      "fr": "Gouvernement majoritaire souverain affranchi du libéralisme sociétal, politique familiale et primauté constitutionnelle"
    },
    "desc": {
      "pl": "Koncepcja ustrojowa odrzucająca zachodni liberalizm światopoglądowy na rzecz tożsamości narodowej i wartości chrześcijańskich. Podkreśla, że państwo ma prawo bronić swojej kultury, wspierać dzietność rodzimych obywateli i podporządkowywać instytucje woli większości wyborców.",
      "en": "A governing model arguing that democratic legitimacy does not require adopting Western social liberalism. It prioritizes Christian cultural heritage, strong pronatalist family subsidies, judicial independence from foreign courts, and state defense of national identity.",
      "ru": "Концепция, утверждающая право суверенного государства защищать национальные и религиозные традиции от давления транснациональных органов, поддерживать рождаемость и защищать границы.",
      "fr": "Modèle institutionnel affirmant que la démocratie populaire n'implique pas le libéralisme sociétal. Il met en avant les racines chrétiennes, l'aide massive aux familles et l'autorité souveraine face aux instances internationales."
    },
    "keyFigures": [
      "Viktor Orbán",
      "Jarosław Kaczyński"
    ],
    "coordinates": {
      "econ": -15,
      "soc": -85
    },
    "icon": "🏰",
    "color": "#a16207",
    "gradient": "linear-gradient(135deg, #a16207, #78350f)"
  },
  {
    "id": "gaullism",
    "name": {
      "pl": "Gaullizm (Niezależność i Wielkość Państwa)",
      "en": "Gaullism (National Grandeur & Dirigisme)",
      "ru": "Голлизм (Величие нации и дирижизм)",
      "fr": "Gaullisme (Grandeur nationale et dirigisme)"
    },
    "subtitle": {
      "pl": "Wielkość narodu, strategiczna autonomia geopolityczna, silna władza wykonawcza i państwowy planizm",
      "en": "National independence, strategic geopolitical autonomy, strong presidential executive, and economic dirigisme",
      "ru": "Национальное величие («грандёр»), независимая внешняя политика, сильный президент и государственное планирование",
      "fr": "Indépendance nationale, souveraineté stratégique, exécutif fort et dirigisme économique"
    },
    "desc": {
      "pl": "Francuska doktryna polityczna sformułowana przez Charles'a de Gaulle'a. Oparta na niezależności militarnej (własny arsenał nuklearny), odrzuceniu dominacji supermocarstw, silnej roli prezydenta w konstytucji oraz państwowym sterowaniu strategicznymi sektorami przemysłu (dirigisme).",
      "en": "The political legacy of Charles de Gaulle centered on French national sovereignty, nuclear independence, rejecting subservience to foreign powers, an assertive presidential executive, and state-directed economic planning (dirigisme).",
      "ru": "Французская доктрина, созданная Шарлем де Голлем. Базируется на ядерном сдерживании, независимости от сверхдержав, сильной президентской власти и государственном участии в стратегической индустрии (дирижизм).",
      "fr": "Héritage politique de Charles de Gaulle fondé sur la souveraineté absolue de la France, la dissuasion nucléaire indépendante, le refus des hégémonies et la planification économique stratégique."
    },
    "keyFigures": [
      "Charles de Gaulle",
      "Georges Pompidou"
    ],
    "coordinates": {
      "econ": -15,
      "soc": -55
    },
    "icon": "⚜️",
    "color": "#312e81",
    "gradient": "linear-gradient(135deg, #312e81, #1e1b4b)"
  },
  {
    "id": "dengism",
    "name": {
      "pl": "Dengizm (Socjalizm z Chińską Charakterystyką)",
      "en": "Dengism (Socialism with Chinese Characteristics)",
      "ru": "Дэнсизм (Социализм с китайской спецификой)",
      "fr": "Dengisme (Socialisme aux caractéristiques chinoises)"
    },
    "subtitle": {
      "pl": "Pragmatyczny rynek, Specjalne Strefy Ekonomiczne, cztery modernizacje i monopol partii komunistycznej",
      "en": "Pragmatic market mechanisms, Special Economic Zones, rapid industrialization under Communist Party rule",
      "ru": "Прагматичные рыночные реформы, специальные экономические зоны и сохранение монополии компартии",
      "fr": "Pragmatisme économique de marché, zones économiques spéciales et monopole politique du parti"
    },
    "desc": {
      "pl": "Architektura współczesnego rozwoju Chin stworzona przez Deng Xiaopinga. Oparta na haśle: „Nieważne, czy kot jest czarny, czy biały, byle łapał myszy”. Połączyła reformy wolnorynkowe, prywatną przedsiębiorczość i zagraniczne inwestycje z żelaznym monopolem władzy Komunistycznej Partii Chin.",
      "en": "The governing philosophy pioneered by Deng Xiaoping: 'It doesn't matter whether a cat is black or white, as long as it catches mice.' It introduced free-market incentives, foreign capital, and Special Economic Zones while preserving total political hegemony of the Communist Party.",
      "ru": "Курс реформ и открытости Дэн Сяопина. Сочетание элементов рыночного капитализма, частной инициативы и привлечения иностранных инвестиций при незыблемой политической монополии Компартии Китая.",
      "fr": "Philosophie de développement impulsée par Deng Xiaoping : « Peu importe qu'un chat soit noir ou blanc, pourvu qu'il attrape les souris ». Alliance du dynamisme capitaliste et de la poigne du Parti communiste."
    },
    "keyFigures": [
      "Deng Xiaoping",
      "Xi Jinping"
    ],
    "coordinates": {
      "econ": 35,
      "soc": -80
    },
    "icon": "🐲",
    "color": "#881337",
    "gradient": "linear-gradient(135deg, #881337, #4c0519)"
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
    },
    "color": "#f59e0b",
    "gradient": "linear-gradient(135deg, #f59e0b, #d97706)",
    "photoUrl": "https://thumb.wikimedia.org/wikipedia/commons/thumb/7/76/Javier_Milei_in_pull-aside_meeting_at_the_United_Nations_Headquarters_%283x4_cropped%29.jpg/330px-Javier_Milei_in_pull-aside_meeting_at_the_United_Nations_Headquarters_%283x4_cropped%29.jpg",
    "localPhoto": "assets/politicians/javier_milei.jpg",
    "countryCode": "ar"
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
    },
    "color": "#10b981",
    "gradient": "linear-gradient(135deg, #10b981, #059669)",
    "photoUrl": "https://thumb.wikimedia.org/wikipedia/commons/thumb/7/73/Ron_Paul_2023_%283x4_cropped%29.jpg/330px-Ron_Paul_2023_%283x4_cropped%29.jpg",
    "localPhoto": "assets/politicians/ron_paul.jpg",
    "countryCode": "us"
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
    },
    "color": "#1d4ed8",
    "gradient": "linear-gradient(135deg, #2563eb, #1e40af)",
    "photoUrl": "https://thumb.wikimedia.org/wikipedia/commons/thumb/3/3d/Margaret_Thatcher_stock_portrait_%28cropped%29.jpg/330px-Margaret_Thatcher_stock_portrait_%28cropped%29.jpg",
    "localPhoto": "assets/politicians/margaret_thatcher.jpg",
    "countryCode": "gb"
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
    },
    "color": "#dc2626",
    "gradient": "linear-gradient(135deg, #ef4444, #b91c1c)",
    "photoUrl": "https://thumb.wikimedia.org/wikipedia/commons/thumb/1/16/Official_Portrait_of_President_Reagan_1981.jpg/330px-Official_Portrait_of_President_Reagan_1981.jpg",
    "localPhoto": "assets/politicians/ronald_reagan.jpg",
    "countryCode": "us"
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
    },
    "color": "#0284c7",
    "gradient": "linear-gradient(135deg, #0ea5e9, #0369a1)",
    "photoUrl": "https://thumb.wikimedia.org/wikipedia/commons/thumb/8/82/Portrait_of_Milton_Friedman_%284x5_cropped%29.jpg/330px-Portrait_of_Milton_Friedman_%284x5_cropped%29.jpg",
    "localPhoto": "assets/politicians/milton_friedman.jpg",
    "countryCode": "global"
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
    },
    "color": "#6366f1",
    "gradient": "linear-gradient(135deg, #818cf8, #4f46e5)",
    "photoUrl": "https://thumb.wikimedia.org/wikipedia/commons/thumb/3/3c/Emmanuel_Macron_2025_%28cropped%29.jpg/330px-Emmanuel_Macron_2025_%28cropped%29.jpg",
    "localPhoto": "assets/politicians/emmanuel_macron.jpg",
    "countryCode": "fr"
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
    },
    "color": "#ef4444",
    "gradient": "linear-gradient(135deg, #f87171, #dc2626)",
    "photoUrl": "https://thumb.wikimedia.org/wikipedia/commons/thumb/3/32/Prime_Minister_Trudeau%27s_message_on_Christmas_2023_%280m29s%29_%28cropped%29.jpg/330px-Prime_Minister_Trudeau%27s_message_on_Christmas_2023_%280m29s%29_%28cropped%29.jpg",
    "localPhoto": "assets/politicians/justin_trudeau.jpg",
    "countryCode": "ca"
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
    },
    "color": "#06b6d4",
    "gradient": "linear-gradient(135deg, #22d3ee, #0891b2)",
    "photoUrl": "https://thumb.wikimedia.org/wikipedia/commons/thumb/c/c2/Bernie_Sanders_February_2026_%28cropped%29.jpg/330px-Bernie_Sanders_February_2026_%28cropped%29.jpg",
    "localPhoto": "assets/politicians/bernie_sanders.jpg",
    "countryCode": "us"
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
    },
    "color": "#e11d48",
    "gradient": "linear-gradient(135deg, #fb7185, #be123c)",
    "photoUrl": "https://thumb.wikimedia.org/wikipedia/commons/thumb/d/dd/Foto_oficial_de_Luiz_In%C3%A1cio_Lula_da_Silva_%28ombros%29_denoise_%28cropped%29.jpg/330px-Foto_oficial_de_Luiz_In%C3%A1cio_Lula_da_Silva_%28ombros%29_denoise_%28cropped%29.jpg",
    "localPhoto": "assets/politicians/lula_da_silva.jpg",
    "countryCode": "br"
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
    },
    "color": "#ea580c",
    "gradient": "linear-gradient(135deg, #f97316, #c2410c)",
    "photoUrl": "https://thumb.wikimedia.org/wikipedia/commons/thumb/6/6a/%28Olof_Palme%29_Felipe_Gonz%C3%A1lez_ofrece_una_rueda_de_prensa_junto_al_primer_ministro_de_Suecia._Pool_Moncloa._28_de_septiembre_de_1984_%28cropped%29.jpeg/330px-%28Olof_Palme%29_Felipe_Gonz%C3%A1lez_ofrece_una_rueda_de_prensa_junto_al_primer_ministro_de_Suecia._Pool_Moncloa._28_de_septiembre_de_1984_%28cropped%29.jpeg",
    "localPhoto": "assets/politicians/olof_palme.jpg",
    "countryCode": "se"
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
    },
    "color": "#475569",
    "gradient": "linear-gradient(135deg, #64748b, #334155)",
    "photoUrl": "https://thumb.wikimedia.org/wikipedia/commons/thumb/2/2f/Prime_Minister_Lee_Kuan_Yew_of_Singapore_Making_a_Toast_at_a_State_Dinner_Held_in_His_Honor%2C_1975.jpg/330px-Prime_Minister_Lee_Kuan_Yew_of_Singapore_Making_a_Toast_at_a_State_Dinner_Held_in_His_Honor%2C_1975.jpg",
    "localPhoto": "assets/politicians/lee_kuan_yew.jpg",
    "countryCode": "sg"
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
    },
    "color": "#0ea5e9",
    "gradient": "linear-gradient(135deg, #38bdf8, #0284c7)",
    "photoUrl": "https://thumb.wikimedia.org/wikipedia/commons/thumb/d/dd/Presidente_Nayib_Bukele_%28cropped%29.jpg/330px-Presidente_Nayib_Bukele_%28cropped%29.jpg",
    "localPhoto": "assets/politicians/nayib_bukele.jpg",
    "countryCode": "sv"
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
    },
    "color": "#4338ca",
    "gradient": "linear-gradient(135deg, #6366f1, #3730a3)",
    "photoUrl": "https://thumb.wikimedia.org/wikipedia/commons/thumb/0/0f/Angela_Merkel_2019_cropped.jpg/330px-Angela_Merkel_2019_cropped.jpg",
    "localPhoto": "assets/politicians/angela_merkel.jpg",
    "countryCode": "de"
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
    },
    "color": "#f97316",
    "gradient": "linear-gradient(135deg, #fb923c, #ea580c)",
    "photoUrl": "https://thumb.wikimedia.org/wikipedia/commons/thumb/5/5f/The_official_portrait_of_Shri_Narendra_Modi%2C_the_Prime_Minister_of_the_Republic_of_India.jpg/330px-The_official_portrait_of_Shri_Narendra_Modi%2C_the_Prime_Minister_of_the_Republic_of_India.jpg",
    "localPhoto": "assets/politicians/narendra_modi.jpg",
    "countryCode": "in"
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
    },
    "color": "#ec4899",
    "gradient": "linear-gradient(135deg, #f472b6, #db2777)",
    "photoUrl": "https://thumb.wikimedia.org/wikipedia/commons/thumb/b/b6/New_Zealand_Prime_Minister_Jacinda_Ardern_in_2018.jpg/330px-New_Zealand_Prime_Minister_Jacinda_Ardern_in_2018.jpg",
    "localPhoto": "assets/politicians/jacinda_ardern.jpg",
    "countryCode": "nz"
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
    },
    "color": "#84cc16",
    "gradient": "linear-gradient(135deg, #a3e635, #65a30d)",
    "photoUrl": "https://thumb.wikimedia.org/wikipedia/commons/thumb/b/bf/Mujica.jpg/330px-Mujica.jpg",
    "localPhoto": "assets/politicians/pepe_mujica.jpg",
    "countryCode": "uy"
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
    },
    "color": "#a855f7",
    "gradient": "linear-gradient(135deg, #c084fc, #9333ea)",
    "photoUrl": "https://thumb.wikimedia.org/wikipedia/commons/thumb/5/5d/2019-04-13_Yanis_Varoufakis_by_Olaf_Kosinsky-0658_%28cropped%29.jpg/330px-2019-04-13_Yanis_Varoufakis_by_Olaf_Kosinsky-0658_%28cropped%29.jpg",
    "localPhoto": "assets/politicians/yanis_varoufakis.jpg",
    "countryCode": "gr"
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
    },
    "color": "#3b82f6",
    "gradient": "linear-gradient(135deg, #60a5fa, #2563eb)",
    "photoUrl": "https://thumb.wikimedia.org/wikipedia/commons/thumb/d/d3/Volodymyr_Zelensky_2022_official_portrait_%28cropped%29.jpg/330px-Volodymyr_Zelensky_2022_official_portrait_%28cropped%29.jpg",
    "localPhoto": "assets/politicians/volodymyr_zelenskyy.jpg",
    "countryCode": "ua"
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
    },
    "color": "#be123c",
    "gradient": "linear-gradient(135deg, #e11d48, #9f1239)",
    "photoUrl": "https://thumb.wikimedia.org/wikipedia/commons/thumb/9/91/Prime_Minister_Keir_Starmer_Portrait_%28cropped%29.jpg/330px-Prime_Minister_Keir_Starmer_Portrait_%28cropped%29.jpg",
    "localPhoto": "assets/politicians/keir_starmer.jpg",
    "countryCode": "gb"
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
    },
    "color": "#059669",
    "gradient": "linear-gradient(135deg, #10b981, #047857)",
    "photoUrl": "https://thumb.wikimedia.org/wikipedia/commons/thumb/b/bb/Fumio_Kishida_20211005_%28cropped%29.jpg/330px-Fumio_Kishida_20211005_%28cropped%29.jpg",
    "localPhoto": "assets/politicians/fumio_kishida.jpg",
    "countryCode": "jp"
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
    },
    "color": "#15803d",
    "gradient": "linear-gradient(135deg, #22c55e, #166534)",
    "photoUrl": "https://thumb.wikimedia.org/wikipedia/commons/thumb/7/7b/Thomas_Sankara_in_Harlem_%281984%29.png/330px-Thomas_Sankara_in_Harlem_%281984%29.png",
    "localPhoto": "assets/politicians/thomas_sankara.jpg",
    "countryCode": "bf"
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
    },
    "color": "#d97706",
    "gradient": "linear-gradient(135deg, #f59e0b, #b45309)",
    "photoUrl": "https://thumb.wikimedia.org/wikipedia/commons/thumb/0/02/Nelson_Mandela_1994.jpg/330px-Nelson_Mandela_1994.jpg",
    "localPhoto": "assets/politicians/nelson_mandela.jpg",
    "countryCode": "za"
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
    },
    "color": "#eab308",
    "gradient": "linear-gradient(135deg, #facc15, #ca8a04)",
    "photoUrl": "https://thumb.wikimedia.org/wikipedia/commons/thumb/b/b6/Murray_Rothbard_Portrait.jpg/330px-Murray_Rothbard_Portrait.jpg",
    "localPhoto": "assets/politicians/murray_rothbard.jpg",
    "countryCode": "global"
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
    },
    "color": "#14b8a6",
    "gradient": "linear-gradient(135deg, #2dd4bf, #0f766e)",
    "photoUrl": "https://thumb.wikimedia.org/wikipedia/commons/thumb/4/46/Noam_Chomsky_portrait_2017_retouched.jpg/330px-Noam_Chomsky_portrait_2017_retouched.jpg",
    "localPhoto": "assets/politicians/noam_chomsky.jpg",
    "countryCode": "global"
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
    },
    "color": "#2563eb",
    "gradient": "linear-gradient(135deg, #3b82f6, #1d4ed8)",
    "photoUrl": "https://thumb.wikimedia.org/wikipedia/commons/thumb/7/7a/Juan_Domingo_Per%C3%B3n_%28cropped%29.jpg/330px-Juan_Domingo_Per%C3%B3n_%28cropped%29.jpg",
    "localPhoto": "assets/politicians/juan_peron.jpg",
    "countryCode": "ar"
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
    },
    "color": "#9333ea",
    "gradient": "linear-gradient(135deg, #a855f7, #7e22ce)",
    "photoUrl": "https://thumb.wikimedia.org/wikipedia/commons/thumb/3/34/2025-04-29-Sahra_Wagenknecht-Maischberger-3049_%28cropped_2%29.jpg/330px-2025-04-29-Sahra_Wagenknecht-Maischberger-3049_%28cropped_2%29.jpg",
    "localPhoto": "assets/politicians/sahra_wagenknecht.jpg",
    "countryCode": "de"
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
    },
    "color": "#b91c1c",
    "gradient": "linear-gradient(135deg, #dc2626, #991b1b)",
    "photoUrl": "https://thumb.wikimedia.org/wikipedia/commons/thumb/e/e6/Person_attlee2.jpg/330px-Person_attlee2.jpg",
    "localPhoto": "assets/politicians/clement_attlee.jpg",
    "countryCode": "gb"
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
    },
    "color": "#ca8a04",
    "gradient": "linear-gradient(135deg, #eab308, #a16207)",
    "photoUrl": "https://thumb.wikimedia.org/wikipedia/commons/thumb/5/58/Evo_Morales_Ayma_%28cropped_3%29.jpg/330px-Evo_Morales_Ayma_%28cropped_3%29.jpg",
    "localPhoto": "assets/politicians/evo_morales.jpg",
    "countryCode": "bo"
  },
  {
    "id": "martin_luther_king",
    "name": "Martin Luther King Jr.",
    "flag": "🇺🇸",
    "country": {
      "pl": "Stany Zjednoczone",
      "en": "United States",
      "ru": "США",
      "fr": "États-Unis"
    },
    "role": {
      "pl": "Lider ruchu praw obywatelskich, laureat Pokojowej Nagrody Nobla",
      "en": "Civil rights movement leader, Nobel Peace Prize laureate",
      "ru": "Лидер движения за гражданские права, лауреат Нобелевской премии мира",
      "fr": "Leader du mouvement des droits civiques, prix Nobel de la paix"
    },
    "quote": {
      "pl": "„Mam marzenie, że pewnego dnia ten naród powstanie i będzie żył w zgodzie z prawdziwym sensem swojego powołania.”",
      "en": "“I have a dream that one day this nation will rise up and live out the true meaning of its creed.”",
      "ru": "«У меня есть мечта, что однажды эта нация восстанет и воплотит истинный смысл своего кредо.»",
      "fr": "« J'ai fait un rêve qu'un jour cette nation se lèvera et vivra la vraie signification de son credo. »"
    },
    "whyVote": {
      "pl": "Głosowałbyś na niego za niestrudzoną walkę z dyskryminacją rasową, obronę praw pracowniczych i uboższych, sprzeciw wobec militaryzmu oraz wiarę w pokojowe braterstwo i godność człowieka.",
      "en": "You would vote for him for his tireless battle against racial injustice, championing worker rights and poverty alleviation, non-violent resistance, and moral leadership.",
      "ru": "Вы бы проголосовали за него за неустанную борьбу с расовой сегрегацией, защиту прав трудящихся, ненасильственный протест и веру в человеческое братство.",
      "fr": "Vous voteriez pour lui pour sa lutte acharnée contre les injustices raciales, sa défense des travailleurs et des plus démunis, et son attachement à la non-violence."
    },
    "coordinates": {
      "econ": -55,
      "soc": 80
    },
    "color": "#8b5cf6",
    "gradient": "linear-gradient(135deg, #a78bfa, #7c3aed)",
    "photoUrl": "https://thumb.wikimedia.org/wikipedia/commons/thumb/c/ce/Martin_Luther_King%2C_Jr._and_Lyndon_Johnson_%28cropped%29.jpg/330px-Martin_Luther_King%2C_Jr._and_Lyndon_Johnson_%28cropped%29.jpg",
    "localPhoto": "assets/politicians/martin_luther_king.jpg",
    "countryCode": "us"
  },
  {
    "id": "mahatma_gandhi",
    "name": "Mahatma Gandhi",
    "flag": "🇮🇳",
    "country": {
      "pl": "Indie",
      "en": "India",
      "ru": "Индия",
      "fr": "Inde"
    },
    "role": {
      "pl": "Ojciec niepodległych Indii, prekursor filozofii ahinsy (bezprzemocy)",
      "en": "Father of the Indian Nation, pioneer of Satyagraha and non-violent resistance",
      "ru": "Отец нации Индии, создатель философии сатьяграхи (ненасилия)",
      "fr": "Père de la nation indienne, apôtre de la non-violence (Satyagraha)"
    },
    "quote": {
      "pl": "„Bądź zmianą, którą pragniesz ujrzeć w świecie.”",
      "en": "“Be the change that you wish to see in the world.”",
      "ru": "«Будь тем изменением, которое ты хочешь видеть в этом мире.»",
      "fr": "« Soyez le changement que vous voulez voir dans le monde. »"
    },
    "whyVote": {
      "pl": "Oddałbyś na niego głos za obronę samowystarczalności lokalnych wspólnot, odrzucenie przemocy, tolerancję religijną, skromność osobistą i zrzucenie kolonialnego jarzma.",
      "en": "You would vote for him for village-level economic democracy, radical pacifism, anti-imperialism, religious pluralism, and ethical leadership.",
      "ru": "Вы бы проголосовали за него за развитие местного самоуправления, абсолютный пацифизм, борьбу против колониального гнёта и нравственную стойкость.",
      "fr": "Vous voteriez pour lui pour son modèle de démocratie villageoise, son pacifisme intégral, son rejet de l'impérialisme et son éthique exemplaire."
    },
    "coordinates": {
      "econ": -40,
      "soc": 85
    },
    "color": "#f57c00",
    "gradient": "linear-gradient(135deg, #f57c00, #d84315)",
    "photoUrl": "https://thumb.wikimedia.org/wikipedia/commons/thumb/7/7a/Mahatma-Gandhi%2C_studio%2C_1931.jpg/330px-Mahatma-Gandhi%2C_studio%2C_1931.jpg",
    "localPhoto": "assets/politicians/mahatma_gandhi.jpg",
    "countryCode": "in"
  },
  {
    "id": "rosa_luxemburg",
    "name": "Rosa Luxemburg",
    "flag": "🇩🇪",
    "country": {
      "pl": "Polska / Niemcy",
      "en": "Poland / Germany",
      "ru": "Польша / Германия",
      "fr": "Pologne / Allemagne"
    },
    "role": {
      "pl": "Działaczka socjalistyczna, teoretyczka marksizmu i pacyfistka",
      "en": "Marxist theorist, anti-war activist, revolutionary socialist",
      "ru": "Теоретик марксизма, антивоенная активистка, социалистка",
      "fr": "Théoricienne marxiste, militante pacifiste et socialiste révolutionnaire"
    },
    "quote": {
      "pl": "„Wolność jest zawsze wolnością dla tego, który myśli inaczej.”",
      "en": "“Freedom is always and exclusively freedom for the one who thinks differently.”",
      "ru": "«Свобода — это всегда свобода для того, кто мыслит иначе.»",
      "fr": "« La liberté, c'est toujours la liberté de celui qui pense autrement. »"
    },
    "whyVote": {
      "pl": "Oddałbyś na nią głos za bezkompromisowy sprzeciw wobec wojen imperialistycznych, wierność oddolnej demokracji rad robotniczych, krytykę autorytaryzmu i obronę wolności słowa.",
      "en": "You would vote for her for courageously opposing imperialist warfare, defending bottom-up council democracy, and warning against autocratic bureaucratic control.",
      "ru": "Вы бы проголосовали за неё за отважную борьбу против империалистической бойни, верность рабочей демократии и защиту свободы мысли.",
      "fr": "Vous voteriez pour elle pour son opposition farouche aux guerres impérialistes, sa défense de la démocratie de conseil et sa vigilance contre l'autoritarisme."
    },
    "coordinates": {
      "econ": -95,
      "soc": 30
    },
    "color": "#991b1b",
    "gradient": "linear-gradient(135deg, #991b1b, #7f1d1d)",
    "photoUrl": "https://thumb.wikimedia.org/wikipedia/commons/thumb/4/43/Rosa_Luxemburg_%28cropped%29.jpg/330px-Rosa_Luxemburg_%28cropped%29.jpg",
    "localPhoto": "assets/politicians/rosa_luxemburg.jpg",
    "countryCode": "de"
  },
  {
    "id": "vaclav_havel",
    "name": "Václav Havel",
    "flag": "🇨🇿",
    "country": {
      "pl": "Czechy",
      "en": "Czech Republic",
      "ru": "Чехия",
      "fr": "République tchèque"
    },
    "role": {
      "pl": "Pisarz, dysydent, przywódca Aksamitnej Rewolucji, Prezydent Czech",
      "en": "Playwright, dissident, Velvet Revolution leader, President of the Czech Republic",
      "ru": "Писатель, диссидент, лидер Бархатной революции, президент Чехии",
      "fr": "Écrivain, dissident, dirigeant de la Révolution de velours, président de la République tchèque"
    },
    "quote": {
      "pl": "„Prawda i miłość muszą zatriumfować nad kłamstwem i nienawiścią.”",
      "en": "“Truth and love must prevail over lies and hatred.”",
      "ru": "«Правда и любовь должны победить ложь и ненависть.»",
      "fr": "« La vérité et l'amour doivent triompher du mensonge et de la haine. »"
    },
    "whyVote": {
      "pl": "Głosowałbyś na niego za życie w prawdzie, obronę praw człowieka, pacyfistyczny demontaż totalitaryzmu, zakorzenienie w kulturze europejskiej i głęboki humanizm.",
      "en": "You would vote for him for living in truth, dismantling communist dictatorship without violence, defending civil rights, and championing European moral integration.",
      "ru": "Вы бы проголосовали за него за жизнь не по лжи, ненасильственный демонтаж тоталитаризма, европейский гуманизм и защиту фундаментальных прав личности.",
      "fr": "Vous voteriez pour lui pour son courage moral de vivre dans la vérité, le démantèlement pacifique du totalitarisme et son dévouement aux droits humains."
    },
    "coordinates": {
      "econ": 15,
      "soc": 75
    },
    "color": "#0891b2",
    "gradient": "linear-gradient(135deg, #0891b2, #0e7490)",
    "photoUrl": "https://thumb.wikimedia.org/wikipedia/commons/thumb/a/a4/Vaclav_Havel.jpg/330px-Vaclav_Havel.jpg",
    "localPhoto": "assets/politicians/vaclav_havel.jpg",
    "countryCode": "cz"
  },
  {
    "id": "winston_churchill",
    "name": "Winston Churchill",
    "flag": "🇬🇧",
    "country": {
      "pl": "Wielka Brytania",
      "en": "United Kingdom",
      "ru": "Великобритания",
      "fr": "Royaume-Uni"
    },
    "role": {
      "pl": "Premier Wielkiej Brytanii w czasie II wojny światowej, mąż stanu",
      "en": "British Prime Minister during World War II, historic statesman",
      "ru": "Премьер-министр Великобритании во Второй мировой войне, государственный деятель",
      "fr": "Premier ministre britannique pendant la Seconde Guerre mondiale, homme d'État"
    },
    "quote": {
      "pl": "„Nigdy w historii ludzkich konfliktów tak wielu nie zawdzięczało tak wiele tak nielicznym.”",
      "en": "“Never in the field of human conflict was so much owed by so many to so few.”",
      "ru": "«Никогда в истории человеческих конфликтов столь многие не были обязаны столь немногим.»",
      "fr": "« Jamais dans l'histoire des conflits tant de gens n'ont dû autant à si peu. »"
    },
    "whyVote": {
      "pl": "Oddałbyś na niego głos za niezłomność wobec tyranii faszyzmu, bezkompromisowy patriotyzm, silną obronność państwa, wiarę w zachodnią cywilizację i wolny rynek.",
      "en": "You would vote for him for heroic defiance against totalitarian aggression, resolute defense of national sovereignty, classic parliamentary conservatism, and strong defense.",
      "ru": "Вы бы проголосовали за него за несокрушимое сопротивление фашистской тирании, верность британской монархии и сильную оборонную политику.",
      "fr": "Vous voteriez pour lui pour son refus absolu de capituler devant le fascisme, son courage héroïque, son conservatisme parlementaire et sa puissance militaire."
    },
    "coordinates": {
      "econ": 60,
      "soc": -60
    },
    "color": "#334155",
    "gradient": "linear-gradient(135deg, #475569, #1e293b)",
    "photoUrl": "https://thumb.wikimedia.org/wikipedia/commons/thumb/0/02/Sir_Winston_Churchill_-_19086236948_%28restored%29.jpg/330px-Sir_Winston_Churchill_-_19086236948_%28restored%29.jpg",
    "localPhoto": "assets/politicians/winston_churchill.jpg",
    "countryCode": "gb"
  },
  {
    "id": "thomas_jefferson",
    "name": "Thomas Jefferson",
    "flag": "🇺🇸",
    "country": {
      "pl": "Stany Zjednoczone",
      "en": "United States",
      "ru": "США",
      "fr": "États-Unis"
    },
    "role": {
      "pl": "Główny autor Deklaracji Niepodległości, 3. Prezydent USA",
      "en": "Principal author of the Declaration of Independence, 3rd US President",
      "ru": "Автор Декларации независимости, 3-й президент США",
      "fr": "Rédacteur principal de la Déclaration d'indépendance, 3e président des États-Unis"
    },
    "quote": {
      "pl": "„Uważamy te prawdy za oczywiste: że wszyscy ludzie stworzeni są równymi, że zostali obdarzeni przez Stwórcę niezbywalnymi Prawami.”",
      "en": "“We hold these truths to be self-evident, that all men are created equal, that they are endowed by their Creator with certain unalienable Rights.”",
      "ru": "«Мы исходим из той самоочевидной истины, что все люди созданы равными и наделены неотчуждаемыми правами.»",
      "fr": "« Nous tenons ces vérités pour évidentes en elles-mêmes : que tous les hommes sont créés égaux et dotés de droits inaliénables. »"
    },
    "whyVote": {
      "pl": "Głosowałbyś na niego za obronę wolności słowa i prasy, rozdział kościoła od państwa, decentralizację władzy, minimalny aparat rządu i wiarę w prawa jednostki.",
      "en": "You would vote for him for enshrining individual liberty, freedom of speech, separation of church and state, strict limits on federal government power, and agrarian republicanism.",
      "ru": "Вы бы проголосовали за него за провозглашение неотчуждаемых прав человека, свободу слова, отделение церкви от государства и минимальное вмешательство властей.",
      "fr": "Vous voteriez pour lui pour la consécration des libertés individuelles, la laïcité de l'État, la décentralisation républicaine et la primauté de la liberté d'expression."
    },
    "coordinates": {
      "econ": 65,
      "soc": 60
    },
    "color": "#16a34a",
    "gradient": "linear-gradient(135deg, #16a34a, #15803d)",
    "photoUrl": "https://thumb.wikimedia.org/wikipedia/commons/thumb/0/07/Official_Presidential_portrait_of_Thomas_Jefferson_%28by_Rembrandt_Peale%2C_1800%29.jpg/330px-Official_Presidential_portrait_of_Thomas_Jefferson_%28by_Rembrandt_Peale%2C_1800%29.jpg",
    "localPhoto": "assets/politicians/thomas_jefferson.jpg",
    "countryCode": "us"
  },
  {
    "id": "lech_walesa",
    "name": "Lech Wałęsa",
    "flag": "🇵🇱",
    "country": {
      "pl": "Polska",
      "en": "Poland",
      "ru": "Польша",
      "fr": "Pologne"
    },
    "role": {
      "pl": "Przywódca NSZZ „Solidarność”, laureat Pokojowej Nagrody Nobla, Prezydent RP",
      "en": "Leader of Solidarity, Nobel Peace Prize laureate, President of Poland",
      "ru": "Лидер профсоюза «Солидарность», лауреат Нобелевской премии мира, президент Польши",
      "fr": "Leader de Solidarność, prix Nobel de la paix, président de la Pologne"
    },
    "quote": {
      "pl": "„Nie chcem, ale muszem. Zrobiliśmy to bez użycia ani jednego naboju.”",
      "en": "“We did it without firing a single shot and without violence.”",
      "ru": "«Мы сделали это мирно, не сделав ни единого выстрела.»",
      "fr": "« Nous l'avons fait pacifiquement, sans tirer un seul coup de feu. »"
    },
    "whyVote": {
      "pl": "Oddałbyś na niego głos za przełamanie żelaznej kurtyny, obronę praw robotników przeciwko komunistycznej partii, wierność wartościom chrześcijańskim i pokojowy demontaż imperium radzieckiego.",
      "en": "You would vote for him for toppling the Soviet sphere of influence through labor solidarity, courage against communist dictatorship, and peaceful democratic transition.",
      "ru": "Вы бы проголосовали за него за объединение рабочих против коммунистической номенклатуры, свержение тоталитарного режима и мирный переход к демократии.",
      "fr": "Vous voteriez pour lui pour avoir fait tomber le rideau de fer grâce à la solidarité ouvrière, son courage face à la dictature et sa transition démocratique pacifique."
    },
    "coordinates": {
      "econ": -10,
      "soc": -35
    },
    "color": "#e11d2a",
    "gradient": "linear-gradient(135deg, #e11d2a, #b91c1c)",
    "photoUrl": "https://thumb.wikimedia.org/wikipedia/commons/thumb/3/3b/03.17_%E7%B8%BD%E7%B5%B1%E6%8E%A5%E8%A6%8B%E3%80%8C%E6%B3%A2%E8%98%AD%E5%89%8D%E7%B8%BD%E7%B5%B1%E8%8F%AF%E5%8B%92%E6%B2%99%E4%B9%99%E8%A1%8C%E3%80%8D_-_55151702432_%28cropped%29.jpg/330px-03.17_%E7%B8%BD%E7%B5%B1%E6%8E%A5%E8%A6%8B%E3%80%8C%E6%B3%A2%E8%98%AD%E5%89%8D%E7%B8%BD%E7%B5%B1%E8%8F%AF%E5%8B%92%E6%B2%99%E4%B9%99%E8%A1%8C%E3%80%8D_-_55151702432_%28cropped%29.jpg",
    "localPhoto": "assets/politicians/lech_walesa.jpg",
    "countryCode": "pl"
  },
  {
    "id": "adam_smith",
    "name": "Adam Smith",
    "flag": "🏴󠁧󠁢󠁳󠁣󠁴󠁿",
    "country": {
      "pl": "Szkocja / Wielka Brytania",
      "en": "Scotland / United Kingdom",
      "ru": "Шотландия / Великобритания",
      "fr": "Écosse / Royaume-Uni"
    },
    "role": {
      "pl": "Filozof Oświecenia, ojciec nowożytnej ekonomii, autor „Bogactwa narodów”",
      "en": "Enlightenment philosopher, father of modern economics, author of 'The Wealth of Nations'",
      "ru": "Философ Просвещения, основоположник классической политэкономии",
      "fr": "Philosophe des Lumières, père de l'économie moderne, auteur de « La Richesse des nations »"
    },
    "quote": {
      "pl": "„Nie od przychylności rzeźnika, piwowara czy piekarza oczekujemy naszego obiadu, lecz od ich dbałości o własny interes.”",
      "en": "“It is not from the benevolence of the butcher, the brewer, or the baker that we expect our dinner, but from their regard to their own interest.”",
      "ru": "«Не от благожелательности мясника, пивовара или булочника ожидаем мы получить свой обед, а от соблюдения ими своих собственных интересов.»",
      "fr": "« Ce n'est pas de la bienveillance du boucher, du brasseur ou du boulanger que nous attendons notre dîner, mais de l'attention qu'ils portent à leur propre intérêt. »"
    },
    "whyVote": {
      "pl": "Oddałbyś na niego głos za stworzenie podstaw wolnego handlu, podziału pracy, walkę z merkantylistycznymi monopolami oraz wiarę w niewidzialną rękę rynku i moralną sympatię.",
      "en": "You would vote for him for establishing free trade theory, dismantling state-granted cartels, championing market competition, and articulating the division of labor.",
      "ru": "Вы бы проголосовали за него за доказательство преимуществ свободной торговли, разделения труда, борьбу с государственными монополиями и веру в рыночные стимулы.",
      "fr": "Vous voteriez pour lui pour avoir fondé la théorie du libre-échange, combattu les monopoles mercantilistes d'État et valorisé la division du travail."
    },
    "coordinates": {
      "econ": 80,
      "soc": 15
    },
    "color": "#0d9488",
    "gradient": "linear-gradient(135deg, #14b8a6, #0f766e)",
    "photoUrl": "https://thumb.wikimedia.org/wikipedia/commons/thumb/4/43/Adam_Smith_The_Muir_portrait.jpg/330px-Adam_Smith_The_Muir_portrait.jpg",
    "localPhoto": "assets/politicians/adam_smith.jpg",
    "countryCode": "sco"
  },
  {
    "id": "franklin_d_roosevelt",
    "name": "Franklin D. Roosevelt",
    "flag": "🇺🇸",
    "country": {
      "pl": "Stany Zjednoczone",
      "en": "United States",
      "ru": "США",
      "fr": "États-Unis"
    },
    "role": {
      "pl": "32. Prezydent USA (1933–1945), twórca Nowego Ładu (New Deal) i przywódca aliantów",
      "en": "32nd U.S. President (1933–1945), architect of the New Deal and Allied wartime leader",
      "ru": "32-й президент США (1933–1945), создатель «Нового курса» и лидер союзников",
      "fr": "32e président des États-Unis (1933–1945), artisan du New Deal et leader des Alliés"
    },
    "quote": {
      "pl": "„Jedyną rzeczą, której musimy się bać, jest sam strach.”",
      "en": "“The only thing we have to fear is fear itself.”",
      "ru": "«Единственное, чего нам следует бояться, — это сам страх.»",
      "fr": "« La seule chose dont nous devons avoir peur, c'est de la peur elle-même. »"
    },
    "whyVote": {
      "pl": "Oddałbyś na niego głos za stworzenie państwa opiekuńczego (New Deal), ubezpieczeń społecznych, regulację Wall Street, zdecydowaną mobilizację wojenną przeciw tyranii oraz wizję powojennego ładu i ONZ.",
      "en": "You would vote for him for pioneering the American welfare state (New Deal), Social Security, regulating financial markets, mobilizing industry against fascism, and championing the United Nations.",
      "ru": "Вы бы проголосовали за него за введение социального обеспечения («Новый курс»), регулирование Уолл-стрит, мощную мобилизацию против фашизма и создание фундамента ООН.",
      "fr": "Vous voteriez pour lui pour l'instauration de l'État-providence (New Deal), la sécurité sociale, la régulation bancaire, la victoire contre l'Axe et la fondation de l'ONU."
    },
    "coordinates": {
      "econ": -30,
      "soc": 35
    },
    "color": "#1e40af",
    "gradient": "linear-gradient(135deg, #1e40af, #3b82f6)",
    "photoUrl": "https://thumb.wikimedia.org/wikipedia/commons/thumb/f/fd/FDR-1944-Campaign-Portrait_%283x4_retouched%2C_cropped%29.jpg/330px-FDR-1944-Campaign-Portrait_%283x4_retouched%2C_cropped%29.jpg",
    "localPhoto": "assets/politicians/franklin_d_roosevelt.jpg",
    "countryCode": "us"
  },
  {
    "id": "charles_de_gaulle",
    "name": "Charles de Gaulle",
    "flag": "🇫🇷",
    "country": {
      "pl": "Francja",
      "en": "France",
      "ru": "Франция",
      "fr": "France"
    },
    "role": {
      "pl": "Przywódca Wolnej Francji w czasie II wojny światowej, prezydent V Republiki i mąż stanu",
      "en": "Leader of Free France during World War II, founder of the Fifth Republic and statesman",
      "ru": "Лидер движения «Свободная Франция», основатель Пятой республики и выдающийся государственный деятель",
      "fr": "Chef de la France libre pendant la Seconde Guerre mondiale, fondateur de la Ve République et homme d'État"
    },
    "quote": {
      "pl": "„Francja nie może być Francją bez wielkości.”",
      "en": "“France cannot be France without greatness.”",
      "ru": "«Франция не может быть Францией без величия.»",
      "fr": "« La France ne peut être la France sans la grandeur. »"
    },
    "whyVote": {
      "pl": "Głosowałbyś na niego za odmowę kapitulacji w 1940 roku, żelazną obronę suwerenności narodowej, godność państwa, planowanie strategiczne (dirigisme) i niezależność geopolityczną.",
      "en": "You would vote for him for refusing surrender in 1940, uncompromising defense of national sovereignty, state-led strategic development (dirigisme), and foreign policy independence.",
      "ru": "Вы бы проголосовали за него за отказ от капитуляции в 1940 году, бескомпромиссную защиту национального суверенитета, сильное государство (дирижизм) и независимую внешнюю политику.",
      "fr": "Vous voteriez pour lui pour son refus historique de l'armistice en 1940, sa défense intraitable de la souveraineté, la planification économique gaulliste et la grandeur nationale."
    },
    "coordinates": {
      "econ": -15,
      "soc": -55
    },
    "color": "#312e81",
    "gradient": "linear-gradient(135deg, #312e81, #4338ca)",
    "photoUrl": "https://thumb.wikimedia.org/wikipedia/commons/thumb/9/9d/De_Gaulle-OWI_%28cropped%29_%28c%29%282%29.jpg/330px-De_Gaulle-OWI_%28cropped%29_%28c%29%282%29.jpg",
    "localPhoto": "assets/politicians/charles_de_gaulle.jpg",
    "countryCode": "fr"
  },
  {
    "id": "wladyslaw_sikorski",
    "name": "Władysław Sikorski",
    "flag": "🇵🇱",
    "country": {
      "pl": "Polska",
      "en": "Poland",
      "ru": "Польша",
      "fr": "Pologne"
    },
    "role": {
      "pl": "Premier Rządu RP na Uchodźstwie i Naczelny Wódz Polskich Sił Zbrojnych (1939–1943)",
      "en": "Prime Minister of the Polish Government-in-Exile and Commander-in-Chief (1939–1943)",
      "ru": "Премьер-министр польского правительства в изгнании и Верховный главнокомандующий (1939–1943)",
      "fr": "Premier ministre du gouvernement polonais en exil et commandant en chef (1939–1943)"
    },
    "quote": {
      "pl": "„W imię honoru i wolności narodu będziemy walczyć do ostatecznego zwycięstwa.”",
      "en": "“In the name of the honour and freedom of the nation, we shall fight until total victory.”",
      "ru": "«Во имя чести и свободы нации мы будем сражаться до окончательной победы.»",
      "fr": "« Au nom de l'honneur et de la liberté de la nation, nous combattrons jusqu'à la victoire totale. »"
    },
    "whyVote": {
      "pl": "Poparłbyś go za niezłomną walkę o wolną i niepodległą Polskę, odbudowę armii na obczyźnie, demokratyczny kurs państwa oraz bezkompromisowe dążenie do prawdy o zbrodni katyńskiej.",
      "en": "You would vote for him for organizing the Polish Armed Forces in exile, unwavering fight against Nazi occupation, democratic integrity, and relentless pursuit of truth regarding Katyn.",
      "ru": "Вы бы поддержали его за организацию польской армии в изгнании, бескомпромиссную борьбу против оккупации, защиту государственного суверенитета и стремление к демократическому порядку.",
      "fr": "Vous voteriez pour lui pour la reconstruction héroïque de l'armée polonaise en exil, son engagement démocratique et sa lutte inébranlable pour la libération nationale."
    },
    "coordinates": {
      "econ": -5,
      "soc": -15
    },
    "color": "#9f1239",
    "gradient": "linear-gradient(135deg, #9f1239, #e11d48)",
    "photoUrl": "https://thumb.wikimedia.org/wikipedia/commons/thumb/8/80/Wladyslaw_Sikorski_2.jpg/330px-Wladyslaw_Sikorski_2.jpg",
    "localPhoto": "assets/politicians/wladyslaw_sikorski.jpg",
    "countryCode": "pl"
  },
  {
    "id": "dwight_d_eisenhower",
    "name": "Dwight D. Eisenhower",
    "flag": "🇺🇸",
    "country": {
      "pl": "Stany Zjednoczone",
      "en": "United States",
      "ru": "США",
      "fr": "États-Unis"
    },
    "role": {
      "pl": "Naczelny Dowódca Sił Alianckich w Europie (SHAEF), 34. Prezydent USA (1953–1961)",
      "en": "Supreme Allied Commander Europe (SHAEF), 34th U.S. President (1953–1961)",
      "ru": "Верховный главнокомандующий союзными войсками в Европе, 34-й президент США (1953–1961)",
      "fr": "Commandant suprême des forces alliées en Europe (SHAEF), 34e président des États-Unis (1953–1961)"
    },
    "quote": {
      "pl": "„W radach rządowych musimy strzec się przed nieuzasadnionym wpływem kompleksu militarno-przemysłowego.”",
      "en": "“In the councils of government, we must guard against the acquisition of unwarranted influence by the military-industrial complex.”",
      "ru": "«В органах власти мы должны остерегаться неоправданного влияния военно-промышленного комплекса.»",
      "fr": "« Dans les conseils du gouvernement, nous devons prendre garde à l'influence injustifiée du complexe militaro-industriel. »"
    },
    "whyVote": {
      "pl": "Oddałbyś na niego głos za genialne dowodzenie operacją Overlord (D-Day), pragmatyczny konserwatyzm („Modern Republicanism”), budowę autostrad międzystanowych, zrównoważony budżet i przestrogę przed militaryzmem.",
      "en": "You would vote for him for masterminding D-Day, fiscal moderation, creating the Interstate Highway System, defending NATO, and courageously warning of the military-industrial complex.",
      "ru": "Вы бы проголосовали за него за блестящее руководство высадкой в Нормандии (D-Day), взвешенный консерватизм, создание системы межштатных автомагистралей и сбалансированный бюджет.",
      "fr": "Vous voteriez pour lui pour le triomphe du débarquement de Normandie, son conservatisme pragmatique et modéré, le réseau autoroutier inter-États et sa lucidité sur le complexe militaro-industriel."
    },
    "coordinates": {
      "econ": 40,
      "soc": -25
    },
    "color": "#4d7c0f",
    "gradient": "linear-gradient(135deg, #4d7c0f, #15803d)",
    "photoUrl": "https://thumb.wikimedia.org/wikipedia/commons/thumb/8/88/General_of_the_Army_Dwight_D._Eisenhower_1947.jpg/330px-General_of_the_Army_Dwight_D._Eisenhower_1947.jpg",
    "localPhoto": "assets/politicians/dwight_d_eisenhower.jpg",
    "countryCode": "us"
  },
  {
    "id": "joseph_stalin",
    "name": "Joseph Stalin",
    "flag": "🚩",
    "country": {
      "pl": "Związek Radziecki (ZSRR)",
      "en": "Soviet Union (USSR)",
      "ru": "СССР",
      "fr": "Union soviétique (URSS)"
    },
    "role": {
      "pl": "Przywódca ZSRR (1924–1953), Generalissimus, architekt gospodarki nakazowo-rozdzielczej",
      "en": "General Secretary of the USSR (1924–1953), Generalissimo, architect of total command economy",
      "ru": "Генеральный секретарь ЦК ВКП(б) / Председатель Совмина СССР, генералиссимус",
      "fr": "Dirigeant de l'URSS (1924–1953), généralissime et bâtisseur de l'économie planifiée d'État"
    },
    "quote": {
      "pl": "„Kadry decydują o wszystkim.”",
      "en": "“Cadres decide everything.”",
      "ru": "«Кадры решают всё.»",
      "fr": "« Les cadres décident de tout. »"
    },
    "whyVote": {
      "pl": "Zwolennicy wskazywali na błyskawiczną industrializację, pokonanie hitlerowskich Niemiec pod Stalingradem i Kurskiem, status mocarstwa atomowego oraz całkowite podporządkowanie gospodarki państwu (za cenę brutalnego terroru i braku wolności).",
      "en": "Historical supporters cited rapid industrialization, decisive defeat of Nazi Germany at Stalingrad and Kursk, superpower status, and total state economic mobilization (at the cost of totalitarian repression and loss of liberties).",
      "ru": "Сторонники отмечали форсированную индустриализацию, победу в Великой Отечественной войне над нацизмом, статус ядерной сверхдержавы и тотальную мобилизационную экономику (ценой массовых репрессий и тоталитарного контроля).",
      "fr": "Ses partisans soulignaient l'industrialisation à marche forcée, la victoire militaire décisive contre le nazisme, le statut de superpuissance et l'économie étatisée (au prix de répressions massives et de terreur totalitaire)."
    },
    "coordinates": {
      "econ": -95,
      "soc": -90
    },
    "color": "#7f1d1d",
    "gradient": "linear-gradient(135deg, #7f1d1d, #991b1b)",
    "photoUrl": "https://thumb.wikimedia.org/wikipedia/commons/thumb/0/08/StalinCropped1943.jpg/330px-StalinCropped1943.jpg",
    "localPhoto": "assets/politicians/joseph_stalin.jpg",
    "countryCode": "ussr"
  },
  {
    "id": "benito_mussolini",
    "name": "Benito Mussolini",
    "flag": "🇮🇹",
    "country": {
      "pl": "Włochy",
      "en": "Italy",
      "ru": "Италия",
      "fr": "Italie"
    },
    "role": {
      "pl": "Premier Włoch (1922–1943), twórca ideologii faszyzmu i państwa korporacyjnego",
      "en": "Prime Minister of Italy (1922–1943), founder of Fascism and the totalitarian corporate state",
      "ru": "Премьер-министр Италии (1922–1943), дуче, основатель фашизма и корпоративного государства",
      "fr": "Président du Conseil d'Italie (1922–1943), duce, fondateur du fascisme et de l'État corporatiste"
    },
    "quote": {
      "pl": "„Wszystko w państwie, nic poza państwem, nic przeciwko państwu.”",
      "en": "“Everything in the State, nothing outside the State, nothing against the State.”",
      "ru": "«Всё в государстве, ничего вне государства, ничего против государства.»",
      "fr": "« Tout dans l'État, rien hors de l'État, rien contre l'État. »"
    },
    "whyVote": {
      "pl": "Zwolennicy wskazywali na skrajny nacjonalizm, kult dyscypliny i siły, korporacjonizm gospodarczy zwalczający zarówno marksizm, jak i liberalny kapitalizm, oraz wielkie roboty publiczne (za cenę likwidacji demokracji i imperialnej agresji).",
      "en": "Historic supporters pointed to militant nationalism, total social discipline, state-directed corporatism opposing both liberalism and Marxism, and major public infrastructure works (at the price of abolishing democracy and warmongering).",
      "ru": "Сторонники указывали на ультранационализм, культ дисциплины и порядка, корпоративистскую модель и масштабные общественные стройки (ценой ликвидации демократии и агрессивного милитаризма).",
      "fr": "Ses partisans mettaient en avant le nationalisme exacerbé, le culte de l'ordre, le corporatisme économique rejetant libéralisme et marxisme, et les grands travaux (au prix de la dictature totale et du bellicisme)."
    },
    "coordinates": {
      "econ": -20,
      "soc": -95
    },
    "color": "#18181b",
    "gradient": "linear-gradient(135deg, #27272a, #09090b)",
    "photoUrl": "https://thumb.wikimedia.org/wikipedia/commons/thumb/8/8a/Mussolini_mezzobusto.jpg/330px-Mussolini_mezzobusto.jpg",
    "localPhoto": "assets/politicians/benito_mussolini.jpg",
    "countryCode": "it"
  },
  {
    "id": "chiang_kai_shek",
    "name": "Chiang Kai-shek",
    "flag": "🇹🇼",
    "country": {
      "pl": "Chiny (Republika Chińska)",
      "en": "China (Republic of China)",
      "ru": "Китай (Китайская Республика)",
      "fr": "Chine (République de Chine)"
    },
    "role": {
      "pl": "Generalissimus i przywódca Republiki Chińskiej (Kuomintang), dowódca teatru chińskiego II WŚ",
      "en": "Generalissimo and leader of the Republic of China (Kuomintang), Allied theater commander",
      "ru": "Генералиссимус и лидер Китайской Республики (Гоминьдан), командующий китайским театром Второй мировой",
      "fr": "Généralissime et dirigeant de la République de Chine (Kuomintang), commandant allié du théâtre chinois"
    },
    "quote": {
      "pl": "„Dopóki naród zachowuje wolę walki, żadna siła nie jest w stanie go podbić.”",
      "en": "“As long as a nation retains its will to fight, no power on earth can conquer it.”",
      "ru": "«Пока у нации есть воля к борьбе, никакая сила в мире не сможет её покорить.»",
      "fr": "« Tant qu'une nation conserve sa volonté de lutter, aucune force ne peut la conquérir. »"
    },
    "whyVote": {
      "pl": "Oddałbyś na niego głos za wieloletnią obronę Chin przed inwazją imperialnej Japonii, wierność Trzem Zasadom Ludu (nacjonalizm, dobrobyt, suwerenność), antykomunizm i modernizację armii.",
      "en": "You would vote for him for grueling resistance against imperial Japanese aggression, devotion to Sun Yat-sen's Three Principles, resolute anti-communism, and military nation-building.",
      "ru": "Вы бы проголосовали за него за многолетнее ожесточённое сопротивление японской агрессии, верность национальным традициям, твёрдый антикоммунизм и сплочение нации.",
      "fr": "Vous voteriez pour lui pour sa résistance acharnée contre l'agression impériale japonaise, sa fidélité aux Trois Principes du Peuple, son anticommunisme et la modernisation militaire."
    },
    "coordinates": {
      "econ": 20,
      "soc": -50
    },
    "color": "#0369a1",
    "gradient": "linear-gradient(135deg, #0369a1, #0284c7)",
    "photoUrl": "https://thumb.wikimedia.org/wikipedia/commons/thumb/d/d0/Chiang_Kai-shek_%283x4_cropped%29.jpg/330px-Chiang_Kai-shek_%283x4_cropped%29.jpg",
    "localPhoto": "assets/politicians/chiang_kai_shek.jpg",
    "countryCode": "tw"
  },
  {
    "id": "woodrow_wilson",
    "name": "Woodrow Wilson",
    "flag": "🇺🇸",
    "country": {
      "pl": "Stany Zjednoczone",
      "en": "United States",
      "ru": "США",
      "fr": "États-Unis"
    },
    "role": {
      "pl": "28. Prezydent USA (1913–1921), twórca Ligi Narodów, laureat Pokojowej Nagrody Nobla",
      "en": "28th US President (1913–1921), architect of the League of Nations, Nobel Peace Laureate",
      "ru": "28-й Президент США (1913–1921), создатель Лиги Наций, лауреат Нобелевской премии мира",
      "fr": "28e Président des États-Unis (1913–1921), artisan de la Société des Nations, prix Nobel de la paix"
    },
    "quote": {
      "pl": "„Świat musi stać się bezpiecznym miejscem dla demokracji.”",
      "en": "“The world must be made safe for democracy.”",
      "ru": "«Мир должен быть безопасным для демократии.»",
      "fr": "« Le monde doit devenir un lieu sûr pour la démocratie. »"
    },
    "whyVote": {
      "pl": "Oddałbyś na niego głos za powołanie Ligi Narodów, koncepcję samostanowienia narodów (w tym odrodzenie Polski w 14 punktach), utworzenie Rezerwy Federalnej i progresywne reformy podatkowe.",
      "en": "You would vote for him for championing the League of Nations, national self-determination (including Polish independence in his 14 Points), creating the Federal Reserve, and progressive tax reforms.",
      "ru": "Вы бы проголосовали за него за создание Лиги Наций, право наций на самоопределение (включая независимость Польши в 14 пунктах), учреждение ФРС и прогрессивный подоходный налог.",
      "fr": "Vous voteriez pour lui pour la fondation de la Société des Nations, le principe d'autodétermination des peuples (les 14 points), la création de la Réserve fédérale et l'impôt progressif."
    },
    "coordinates": {
      "econ": -20,
      "soc": 15
    },
    "color": "#3b5998",
    "gradient": "linear-gradient(135deg, #3b5998, #1e3a8a)",
    "photoUrl": "https://thumb.wikimedia.org/wikipedia/commons/thumb/9/96/President_Woodrow_Wilson_Harris_%26_Ewing_%283x4_cropped_b%29.jpg/330px-President_Woodrow_Wilson_Harris_%26_Ewing_%283x4_cropped_b%29.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail",
    "localPhoto": "assets/politicians/woodrow_wilson.jpg",
    "countryCode": "us"
  },
  {
    "id": "david_lloyd_george",
    "name": "David Lloyd George",
    "flag": "🇬🇧",
    "country": {
      "pl": "Wielka Brytania",
      "en": "United Kingdom",
      "ru": "Великобритания",
      "fr": "Royaume-Uni"
    },
    "role": {
      "pl": "Premier Wielkiej Brytanii (1916–1922), twórca podwalin państwa opiekuńczego",
      "en": "Prime Minister of the UK (1916–1922), architect of the modern British welfare state",
      "ru": "Премьер-министр Великобритании (1916–1922), создатель основ государства всеобщего благосостояния",
      "fr": "Premier ministre du Royaume-Uni (1916–1922), pionnier de l'État-providence britannique"
    },
    "quote": {
      "pl": "„Nie bój się zrobić dużego kroku, jeśli jest potrzebny. Nie pokonasz przepaści dwoma małymi skokami.”",
      "en": "“Don't be afraid to take a big step if one is indicated. You can't cross a chasm in two small jumps.”",
      "ru": "«Не бойтесь сделать большой шаг, если он нужен. Пропасть нельзя перепрыгнуть в два маленьких прыжка.»",
      "fr": "« N'ayez pas peur de faire un grand pas. On ne franchit pas un gouffre en deux petits sauts. »"
    },
    "whyVote": {
      "pl": "Oddałbyś na niego głos za przełomowy „Budżet Ludowy” (People's Budget), stworzenie ubezpieczeń społecznych i emerytur, opodatkowanie wielkich majątków ziemskich oraz zdecydowane przywództwo wojenne.",
      "en": "You would vote for him for the landmark People's Budget, establishing state pensions and health insurance, taxing landed estates, and resolute wartime leadership.",
      "ru": "Вы бы проголосовали за него за «Народный бюджет», государственные пенсии и пособия по болезни, налог на сверхбогатых землевладельцев и решительное лидерство в Первую мировую войну.",
      "fr": "Vous voteriez pour lui pour le budget du peuple fondateur, la création des retraites ouvrières et de l'assurance maladie, la taxation des grands propriétaires et sa conduite de la guerre."
    },
    "coordinates": {
      "econ": -35,
      "soc": 30
    },
    "color": "#e67e22",
    "gradient": "linear-gradient(135deg, #e67e22, #d35400)",
    "photoUrl": "https://thumb.wikimedia.org/wikipedia/commons/thumb/e/e8/David_Lloyd_George.jpg/330px-David_Lloyd_George.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail",
    "localPhoto": "assets/politicians/david_lloyd_george.jpg",
    "countryCode": "gb"
  },
  {
    "id": "georges_clemenceau",
    "name": "Georges Clemenceau",
    "flag": "🇫🇷",
    "country": {
      "pl": "Francja",
      "en": "France",
      "ru": "Франция",
      "fr": "France"
    },
    "role": {
      "pl": "Premier Francji (1906–1909, 1917–1920), „Tygrys” (Le Tigre), lider obrony Republiki",
      "en": "Prime Minister of France (1906–1909, 1917–1920), 'The Tiger', defender of the Republic",
      "ru": "Премьер-министр Франции (1906–1909, 1917–1920), «Тигр», бескомпромиссный защитник Республики",
      "fr": "Président du Conseil (1906–1909, 1917–1920), « Le Tigre », père de la victoire républicaine"
    },
    "quote": {
      "pl": "„Wojna to sprawa zbyt poważna, by powierzać ją wojskowym.”",
      "en": "“War is too serious a matter to entrust to military men.”",
      "ru": "«Война — слишком серьезное дело, чтобы доверять ее военным.»",
      "fr": "« La guerre est une affaire trop grave pour être confiée à des militaires. »"
    },
    "whyVote": {
      "pl": "Oddałbyś na niego głos za niezłomne uratowanie Francji w 1917–1918 roku, twardą postawę wobec Niemiec w Wersalu, bezwzględny laicyzm państwowy i obronę wartości republikańskich.",
      "en": "You would vote for him for unbending resolve saving France in 1917–1918, unyielding defense of national reparations at Versailles, and fierce commitment to republican secularism.",
      "ru": "Вы бы проголосовали за него за спасение Франции в критические дни 1917–1918 годов, жесткую позицию в Версальском договоре, последовательный светский строй и республиканизм.",
      "fr": "Vous voteriez pour lui pour sa détermination indomptable dans la victoire de 1918, la défense intraitable des intérêts français à Versailles et la laïcité républicaine."
    },
    "coordinates": {
      "econ": -15,
      "soc": -20
    },
    "color": "#2c3e50",
    "gradient": "linear-gradient(135deg, #2c3e50, #1a252f)",
    "photoUrl": "https://thumb.wikimedia.org/wikipedia/commons/thumb/c/c7/Georges_Clemenceau_par_Nadar.jpg/330px-Georges_Clemenceau_par_Nadar.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail",
    "localPhoto": "assets/politicians/georges_clemenceau.jpg",
    "countryCode": "fr"
  },
  {
    "id": "wilhelm_ii",
    "name": "Kaiser Wilhelm II",
    "flag": "🇩🇪",
    "country": {
      "pl": "Niemcy (Cesarstwo Niemieckie)",
      "en": "Germany (German Empire)",
      "ru": "Германия (Германская империя)",
      "fr": "Allemagne (Empire allemand)"
    },
    "role": {
      "pl": "Ostatni Cesarz Niemiecki i Król Prus (1888–1918), twórca doktryny Weltpolitik",
      "en": "Last German Emperor and King of Prussia (1888–1918), architect of Weltpolitik",
      "ru": "Последний Германский император и король Пруссии (1888–1918), автор доктрины мирового величия",
      "fr": "Dernier empereur d'Allemagne et roi de Prusse (1888–1918), promoteur de la Weltpolitik"
    },
    "quote": {
      "pl": "„Żądamy naszego należnego miejsca pod słońcem!”",
      "en": "“We demand our place in the sun.”",
      "ru": "«Мы требуем нашего места под солнцем!»",
      "fr": "« Nous exigeons notre place au soleil ! »"
    },
    "whyVote": {
      "pl": "Oddałbyś na niego głos za dążenie do mocarstwowej pozycji Niemiec, budowę potężnej floty oceanicznej, szybki rozwój przemysłowy Rzeszy i wierność monarchicznej tradycji militarnej.",
      "en": "You would vote for him for asserting Germany's global superpower status (Weltpolitik), immense naval and industrial expansion, and defending aristocratic imperial tradition.",
      "ru": "Вы бы проголосовали за него за стремление к мировому статусу Германии, строительство мощного океанского флота, колоссальный промышленный подъем и монархический порядок.",
      "fr": "Vous voteriez pour lui pour l'accession de l'Allemagne au rang de grande puissance mondiale, le développement de la flotte impériale et le rayonnement industriel."
    },
    "coordinates": {
      "econ": 15,
      "soc": -85
    },
    "color": "#4a5568",
    "gradient": "linear-gradient(135deg, #4a5568, #2d3748)",
    "photoUrl": "https://thumb.wikimedia.org/wikipedia/commons/thumb/e/ee/Kaiser_Wilhelm_II_of_Germany_-_1902_%283x4_cropped%29.jpg/330px-Kaiser_Wilhelm_II_of_Germany_-_1902_%283x4_cropped%29.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail",
    "localPhoto": "assets/politicians/wilhelm_ii.jpg",
    "countryCode": "de"
  },
  {
    "id": "vladimir_lenin",
    "name": "Vladimir Lenin",
    "flag": "🚩",
    "country": {
      "pl": "ZSRR / Rosja Radziecka",
      "en": "USSR / Soviet Russia",
      "ru": "СССР / Советская Россия",
      "fr": "URSS / Russie soviétique"
    },
    "role": {
      "pl": "Przywódca rewolucji październikowej, założyciel partii bolszewickiej i ZSRR",
      "en": "Leader of the October Revolution, founder of the Bolshevik Party and Soviet Union",
      "ru": "Вождь Октябрьской революции, основатель большевистской партии и СССР",
      "fr": "Dirigeant de la Révolution d'Octobre, fondateur du Parti bolchevik et de l'URSS"
    },
    "quote": {
      "pl": "„Rewolucji nie robi się w białych rękawiczkach. Władza w ręce Rad!”",
      "en": "“Freedom is a precious thing — so precious that it must be rationed.”",
      "ru": "«Вся власть Советам! Мир — народам, земля — крестьянам, заводы — рабочим!»",
      "fr": "« Tout le pouvoir aux Soviets ! La paix aux peuples, la terre aux paysans ! »"
    },
    "whyVote": {
      "pl": "Oddałbyś na niego głos za bezkompromisowe obalenie caratu i kapitalizmu, oddanie fabryk robotnikom, nacjonalizację banków i ziemi oraz bezwzględną obronę rewolucji proletariackiej.",
      "en": "You would vote for him for the total overthrow of Tsarist autocracy and capitalism, transferring land to peasants, nationalizing banks and industry, and vanguard socialist statecraft.",
      "ru": "Вы бы проголосовали за него за свержение царизма и власти капитала, декреты о мире и земле, национализацию промышленности и построение первого социалистического государства.",
      "fr": "Vous voteriez pour lui pour le renversement de l'autocratie tsariste et du capitalisme, la redistribution des terres, la nationalisation des banques et la révolution socialiste."
    },
    "coordinates": {
      "econ": -96,
      "soc": -85
    },
    "color": "#8b0000",
    "gradient": "linear-gradient(135deg, #8b0000, #500000)",
    "photoUrl": "https://thumb.wikimedia.org/wikipedia/commons/thumb/c/c0/Lenin_in_1920_%28cropped%29.jpg/330px-Lenin_in_1920_%28cropped%29.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail",
    "localPhoto": "assets/politicians/vladimir_lenin.jpg",
    "countryCode": "ussr"
  },
  {
    "id": "mustafa_kemal_ataturk",
    "name": "Mustafa Kemal Atatürk",
    "flag": "🇹🇷",
    "country": {
      "pl": "Turcja",
      "en": "Turkey",
      "ru": "Турция",
      "fr": "Turquie"
    },
    "role": {
      "pl": "Twórca i pierwszy Prezydent Republiki Turcji (1923–1938), Ojciec Narodu",
      "en": "Founder and first President of the Republic of Turkey (1923–1938), Father of the Turks",
      "ru": "Основатель и первый Президент Турецкой Республики (1923–1938), Отец нации",
      "fr": "Fondateur et premier président de la République de Turquie (1923–1938), Père de la nation"
    },
    "quote": {
      "pl": "„Pokój w ojczyźnie, pokój na świecie.”",
      "en": "“Peace at home, peace in the world.”",
      "ru": "«Мир дома — мир во всем мире.»",
      "fr": "« Paix dans le pays, paix dans le monde. »"
    },
    "whyVote": {
      "pl": "Oddałbyś na niego głos za zbudowanie nowoczesnej, świeckiej republiki na gruzach sułtanatu, wprowadzenie praw kobiet i powszechnej edukacji, odrzucenie teokracji i reformizm kulturowy.",
      "en": "You would vote for him for forging a modern secular republic from Ottoman ruins, enacting women's suffrage, aggressive Westernization, and rigorous educational reform.",
      "ru": "Вы бы проголосовали за него за создание светского республиканского государства, отделение религии от власти, введение избирательных прав для женщин и глубокую модернизацию общества.",
      "fr": "Vous voteriez pour lui pour la fondation d'une république laïque et souveraine, l'abolition du califat, le droit de vote des femmes et la modernisation intégrale des institutions."
    },
    "coordinates": {
      "econ": -10,
      "soc": 25
    },
    "color": "#00838f",
    "gradient": "linear-gradient(135deg, #00838f, #004d40)",
    "photoUrl": "https://thumb.wikimedia.org/wikipedia/commons/thumb/a/a8/Ataturk1930s.jpg/330px-Ataturk1930s.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail",
    "localPhoto": "assets/politicians/mustafa_kemal_ataturk.jpg",
    "countryCode": "tr"
  },
  {
    "id": "adolf_hitler",
    "name": "Adolf Hitler",
    "flag": "🇩🇪",
    "country": {
      "pl": "Niemcy (III Rzesza)",
      "en": "Germany (Third Reich)",
      "ru": "Германия (Третий рейх)",
      "fr": "Allemagne (Troisième Reich)"
    },
    "role": {
      "pl": "Führer i Kanclerz III Rzeszy (1933–1945), wódz partii narodowosocjalistycznej (NSDAP)",
      "en": "Führer and Chancellor of Nazi Germany (1933–1945), leader of the NSDAP",
      "ru": "Фюрер и канцлер нацистской Германии (1933–1945), лидер NSDAP",
      "fr": "Führer et chancelier du Troisième Reich (1933–1945), dirigeant du NSDAP"
    },
    "quote": {
      "pl": "„Kto chce żyć, musi walczyć, a kto nie chce walczyć na tym świecie, gdzie walka jest prawem życia, ten nie ma prawa do życia.”",
      "en": "“He who would live must fight. He who doesn't wish to fight in this world, where permanent struggle is the law of life, has not the right to exist.”",
      "ru": "«Кто хочет жить, тот должен бороться, а кто не хочет бороться в этом мире вечной борьбы, тот не заслуживает права на жизнь.»",
      "fr": "« Qui veut vivre doit lutter, et qui refuse de combattre dans ce monde de lutte permanente n'a pas le droit d'exister. »"
    },
    "whyVote": {
      "pl": "Oddałbyś na niego głos za obalenie traktatu wersalskiego, zlikwidowanie bezrobocia poprzez etatyzm i wielkie zbrojenia, odzyskanie terytoriów i fanatyczną wiarę w jedność narodowo-rasową.",
      "en": "You would vote for him for tearing up the Versailles Treaty, ending massive unemployment through state works and militarization, and radical pan-German nationalist assertion.",
      "ru": "Вы бы проголосовали за него за слом Версальского диктата, ликвидацию массовой безработицы через военное перевооружение и фанатичный великогерманский реваншизм.",
      "fr": "Vous voteriez pour lui pour l'abrogation du traité de Versailles, la fin du chômage par le réarmement massif étatique et le nationalisme pangermaniste fanatique."
    },
    "coordinates": {
      "econ": -25,
      "soc": -98
    },
    "color": "#5c2c2c",
    "gradient": "linear-gradient(135deg, #5c2c2c, #2b1111)",
    "photoUrl": "https://thumb.wikimedia.org/wikipedia/commons/thumb/0/0c/Hitler_portrait_crop_%28cropped%29%282%29.jpg/330px-Hitler_portrait_crop_%28cropped%29%282%29.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail",
    "localPhoto": "assets/politicians/adolf_hitler.jpg",
    "countryCode": "de"
  },
  {
    "id": "hideki_tojo",
    "name": "Hideki Tojo",
    "flag": "🇯🇵",
    "country": {
      "pl": "Japonia (Cesarstwo Japonii)",
      "en": "Japan (Empire of Japan)",
      "ru": "Япония (Японская империя)",
      "fr": "Japon (Empire du Japon)"
    },
    "role": {
      "pl": "Premier Japonii (1941–1944), generał Cesarskiej Armii i minister wojny",
      "en": "Prime Minister of Japan (1941–1944), Imperial Army General and Minister of War",
      "ru": "Премьер-министр Японии (1941–1944), генерал Императорской армии и военный министр",
      "fr": "Premier ministre du Japon (1941–1944), général de l'armée impériale et ministre de la Guerre"
    },
    "quote": {
      "pl": "„Wszystko, co uczyniłem, uczyniłem dla dobra Cesarza i narodu japońskiego.”",
      "en": "“All my thoughts and actions were devoted to the service of the Emperor.”",
      "ru": "«Все мои помыслы и деяния были посвящены служению Императору.»",
      "fr": "« Toutes mes pensées et actions étaient entièrement dévouées au service de l'Empereur. »"
    },
    "whyVote": {
      "pl": "Oddałbyś na niego głos za żelazną dyscyplinę wojskową, rzucenie wyzwania zachodnim mocarstwom kolonialnym w Azji (Wielka Azjatycka Strefa Wspólnego Dobrobytu) i bezwzględne poświęcenie dla tronu.",
      "en": "You would vote for him for iron military discipline, defying Western colonial dominance across Asia, and total devotion to the imperial throne.",
      "ru": "Вы бы проголосовали за него за железную воинскую дисциплину, вызов западным державам в Азии и абсолютную преданность Императору.",
      "fr": "Vous voteriez pour lui pour sa discipline militaire sans faille, le défi lancé aux puissances coloniales occidentales en Asie et sa loyauté absolue à l'Empereur."
    },
    "coordinates": {
      "econ": 10,
      "soc": -92
    },
    "color": "#3e2723",
    "gradient": "linear-gradient(135deg, #3e2723, #1b0000)",
    "photoUrl": "https://thumb.wikimedia.org/wikipedia/commons/thumb/f/f7/Hideki_Tojo_Portrait_1941_%283x4_cropped%29%282%29.jpg/330px-Hideki_Tojo_Portrait_1941_%283x4_cropped%29%282%29.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail",
    "localPhoto": "assets/politicians/hideki_tojo.jpg",
    "countryCode": "jp"
  },
  {
    "id": "harry_s_truman",
    "name": "Harry S. Truman",
    "flag": "🇺🇸",
    "country": {
      "pl": "Stany Zjednoczone",
      "en": "United States",
      "ru": "США",
      "fr": "États-Unis"
    },
    "role": {
      "pl": "33. Prezydent USA (1945–1953), autor doktryny powstrzymywania i Planu Marshalla",
      "en": "33rd US President (1945–1953), creator of the Containment Doctrine and Marshall Plan",
      "ru": "33-й Президент США (1945–1953), автор доктрины сдерживания и плана Маршалла",
      "fr": "33e Président des États-Unis (1945–1953), auteur de la doctrine de l'endiguement et du plan Marshall"
    },
    "quote": {
      "pl": "„Odpowiedzialność spoczywa tutaj (The buck stops here).”",
      "en": "“The buck stops here.”",
      "ru": "«Вся ответственность лежит на мне.»",
      "fr": "« La responsabilité finale m'incombe. »"
    },
    "whyVote": {
      "pl": "Oddałbyś na niego głos za powstrzymanie ekspansji komunizmu (doktryna Trumana), odbudowę demokratycznej Europy w Planie Marshalla, powołanie NATO i desegregację sił zbrojnych USA.",
      "en": "You would vote for him for stopping Soviet expansionism via the Truman Doctrine, rebuilding Western Europe with the Marshall Plan, founding NATO, and integrating the US Armed Forces.",
      "ru": "Вы бы проголосовали за него за доктрину сдерживания советской экспансии, восстановление Европы планом Маршалла, создание НАТО и запрет расовой сегрегации в армии США.",
      "fr": "Vous voteriez pour lui pour l'endiguement de l'URSS, le plan Marshall de relance européenne, la création de l'OTAN et la déségrégation raciale de l'armée américaine."
    },
    "coordinates": {
      "econ": -20,
      "soc": 10
    },
    "color": "#2e7d32",
    "gradient": "linear-gradient(135deg, #2e7d32, #1b5e20)",
    "photoUrl": "https://thumb.wikimedia.org/wikipedia/commons/thumb/0/0b/TRUMAN_58-766-06_%28cropped%29.jpg/330px-TRUMAN_58-766-06_%28cropped%29.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail",
    "localPhoto": "assets/politicians/harry_s_truman.jpg",
    "countryCode": "us"
  },
  {
    "id": "nikita_khrushchev",
    "name": "Nikita Chruszczow",
    "flag": "🚩",
    "country": {
      "pl": "ZSRR",
      "en": "USSR",
      "ru": "СССР",
      "fr": "URSS"
    },
    "role": {
      "pl": "I Sekretarz KC KPZR (1953–1964), autor tajnego referatu o zbrodniach Stalina",
      "en": "First Secretary of the CPSU (1953–1964), leader of the De-Stalinization Thaw",
      "ru": "Первый секретарь ЦК КПСС (1953–1964), инициатор разоблачения культа личности Сталина",
      "fr": "Premier secrétaire du PCUS (1953–1964), artisan de la déstalinisation et du Dégel"
    },
    "quote": {
      "pl": "„Politycy wszędzie są tacy sami: obiecują zbudować most nawet tam, gdzie nie ma rzeki.”",
      "en": "“Politicians are the same all over: they promise to build a bridge even where there is no river.”",
      "ru": "«Политики везде одинаковы: обещают построить мост даже там, где нет реки.»",
      "fr": "« Les politiciens sont partout les mêmes : ils promettent de construire un pont là où il n'y a pas de rivière. »"
    },
    "whyVote": {
      "pl": "Oddałbyś na niego głos za ujawnienie kultu jednostki i zbrodni Stalina w 1956 r., uwolnienie milionów ludzi z łagrów, bezprecedensowe sukcesy w podboju kosmosu (Gagarin) i masowe budownictwo mieszkaniowe.",
      "en": "You would vote for him for courageously denouncing Stalin's crimes, freeing millions from the Gulag, achieving early supremacy in the space race (Sputnik, Gagarin), and mass public housing.",
      "ru": "Вы бы проголосовали за него за хрущёвскую оттепель, доклад на XX съезде о культе личности, освобождение заключенных из ГУЛАГа, первый полёт человека в космос и массовые «хрущёвки».",
      "fr": "Vous voteriez pour lui pour le rapport secret dénonçant les crimes staliniens, la libération des camps du Goulag, les triomphes spatiaux (Spoutnik, Gagarine) et les cités d'habitation populaires."
    },
    "coordinates": {
      "econ": -90,
      "soc": -55
    },
    "color": "#c2185b",
    "gradient": "linear-gradient(135deg, #c2185b, #880e4f)",
    "photoUrl": "https://thumb.wikimedia.org/wikipedia/commons/thumb/4/4d/1956_Press_Photo_Communist_Party_Secretary_Nikita_S._Khrushchev_in_Moscow_%28cropped%29.jpg/330px-1956_Press_Photo_Communist_Party_Secretary_Nikita_S._Khrushchev_in_Moscow_%28cropped%29.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail",
    "localPhoto": "assets/politicians/nikita_khrushchev.jpg",
    "countryCode": "ussr"
  },
  {
    "id": "john_f_kennedy",
    "name": "John F. Kennedy",
    "flag": "🇺🇸",
    "country": {
      "pl": "Stany Zjednoczone",
      "en": "United States",
      "ru": "США",
      "fr": "États-Unis"
    },
    "role": {
      "pl": "35. Prezydent USA (1961–1963), inspirator programu Apollo i Nowej Granicy",
      "en": "35th US President (1961–1963), champion of the New Frontier and Apollo Moon program",
      "ru": "35-й Президент США (1961–1963), вдохновитель программы «Аполлон» и «Новых рубежей»",
      "fr": "35e Président des États-Unis (1961–1963), visionnaire de la Nouvelle Frontière et du programme Apollo"
    },
    "quote": {
      "pl": "„Nie pytaj, co twój kraj może zrobić dla ciebie – zapytaj, co ty możesz zrobić dla swojego kraju.”",
      "en": "“Ask not what your country can do for you — ask what you can do for your country.”",
      "ru": "«Не спрашивай, что твоя страна может сделать для тебя — спроси, что ты можешь сделать для своей страны.»",
      "fr": "« Ne demandez pas ce que votre pays peut faire pour vous, demandez ce que vous pouvez faire pour votre pays. »"
    },
    "whyVote": {
      "pl": "Oddałbyś na niego głos za porywający optymizm Nowej Granicy, wygranie wyścigu na Księżyc, pokojowe zażegnanie kryzysu kubańskiego i rozpoczęcie ustawodawstwa praw obywatelskich.",
      "en": "You would vote for him for the inspiring New Frontier vision, launching the Apollo Moon landing, averting nuclear catastrophe during the Cuban Missile Crisis, and championing civil rights.",
      "ru": "Вы бы проголосовали за него за вдохновляющую программу «Новых рубежей», старт лунной программы «Аполлон», дипломатическое спасение мира в Карибский кризис и борьбу за гражданские права.",
      "fr": "Vous voteriez pour lui pour l'élan de la Nouvelle Frontière, l'exploit du programme lunaire Apollo, la résolution pacifique de la crise de Cuba et l'engagement pour les droits civiques."
    },
    "coordinates": {
      "econ": 10,
      "soc": 45
    },
    "color": "#0277bd",
    "gradient": "linear-gradient(135deg, #0277bd, #01579b)",
    "photoUrl": "https://thumb.wikimedia.org/wikipedia/commons/thumb/c/c3/John_F._Kennedy%2C_White_House_color_photo_portrait.jpg/330px-John_F._Kennedy%2C_White_House_color_photo_portrait.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail",
    "localPhoto": "assets/politicians/john_f_kennedy.jpg",
    "countryCode": "us"
  },
  {
    "id": "lyndon_b_johnson",
    "name": "Lyndon B. Johnson",
    "flag": "🇺🇸",
    "country": {
      "pl": "Stany Zjednoczone",
      "en": "United States",
      "ru": "США",
      "fr": "États-Unis"
    },
    "role": {
      "pl": "36. Prezydent USA (1963–1969), twórca programu „Wielkie Społeczeństwo” (Great Society)",
      "en": "36th US President (1963–1969), architect of the Great Society and War on Poverty",
      "ru": "36-й Президент США (1963–1969), создатель «Великого общества» и системы Medicare",
      "fr": "36e Président des États-Unis (1963–1969), créateur de la « Grande Société » et de Medicare"
    },
    "quote": {
      "pl": "„Wielkie Społeczeństwo wymaga zakończenia ubóstwa i rasowej niesprawiedliwości.”",
      "en": "“The Great Society demands an end to poverty and racial injustice.”",
      "ru": "«Великое общество требует искоренения бедности и расовой несправедливости.»",
      "fr": "« La Grande Société exige l'éradication de la pauvreté et de l'injustice raciale. »"
    },
    "whyVote": {
      "pl": "Oddałbyś na niego głos za podpisanie historycznych ustaw znoszących segregację rasową (Civil Rights Act, Voting Rights Act), stworzenie powszechnej opieki Medicare i Medicaid oraz walkę z nędzą.",
      "en": "You would vote for him for passing the Civil Rights Act and Voting Rights Act to end segregation, establishing Medicare and Medicaid, and launching the War on Poverty.",
      "ru": "Вы бы проголосовали за него за историческую отмену сегрегации (Civil Rights Act), гарантии избирательных прав меньшинств, создание программ Medicare и Medicaid и войну с бедностью.",
      "fr": "Vous voteriez pour lui pour la fin légale de la ségrégation raciale (lois sur les droits civiques et le vote), la création de la couverture maladie Medicare et la guerre contre la pauvreté."
    },
    "coordinates": {
      "econ": -45,
      "soc": 35
    },
    "color": "#00695c",
    "gradient": "linear-gradient(135deg, #00695c, #004d40)",
    "photoUrl": "https://thumb.wikimedia.org/wikipedia/commons/thumb/5/54/Lyndon_B._Johnson%2C_photo_portrait%2C_color_%283x4_cropped%29%282%29.jpg/330px-Lyndon_B._Johnson%2C_photo_portrait%2C_color_%283x4_cropped%29%282%29.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail",
    "localPhoto": "assets/politicians/lyndon_b_johnson.jpg",
    "countryCode": "us"
  },
  {
    "id": "richard_nixon",
    "name": "Richard Nixon",
    "flag": "🇺🇸",
    "country": {
      "pl": "Stany Zjednoczone",
      "en": "United States",
      "ru": "США",
      "fr": "États-Unis"
    },
    "role": {
      "pl": "37. Prezydent USA (1969–1974), mistrz Realpolitik i otwarcia dyplomatycznego na Chiny",
      "en": "37th US President (1969–1974), master of Realpolitik and historic opening to China",
      "ru": "37-й Президент США (1969–1974), мастер Realpolitik и исторического сближения с Китаем",
      "fr": "37e Président des États-Unis (1969–1974), maître de la Realpolitik et de l'ouverture vers la Chine"
    },
    "quote": {
      "pl": "„Porażka nie jest ostateczna, dopóki się nie poddasz.”",
      "en": "“A man is not finished when he is defeated. He is finished when he quits.”",
      "ru": "«Человек побежден не тогда, когда терпит поражение, а когда сдается.»",
      "fr": "« Un homme n'est pas vaincu lorsqu'il échoue, il est vaincu lorsqu'il renonce. »"
    },
    "whyVote": {
      "pl": "Oddałbyś na niego głos za genialne otwarcie relacji z Chinami Mao, odprężenie z ZSRR (układ SALT I), zakończenie udziału USA w wojnie w Wietnamie oraz powołanie agencji ochrony środowiska EPA.",
      "en": "You would vote for him for groundbreaking triangular diplomacy opening China, nuclear detente with the USSR (SALT I), ending the draft, and establishing the EPA for conservation.",
      "ru": "Вы бы проголосовали за него за прорывное сближение с КНР, ядерную разрядку с СССР (ОСВ-1), отмену призыва в армию и создание федерального агентства по охране природы (EPA).",
      "fr": "Vous voteriez pour lui pour la diplomatie triangulaire historique avec la Chine, la détente nucléaire avec l'URSS (SALT I), la fin de la conscription et la création de l'EPA."
    },
    "coordinates": {
      "econ": 15,
      "soc": -35
    },
    "color": "#37474f",
    "gradient": "linear-gradient(135deg, #37474f, #212121)",
    "photoUrl": "https://thumb.wikimedia.org/wikipedia/commons/thumb/2/2c/Richard_Nixon_presidential_portrait_%281%29.jpg/330px-Richard_Nixon_presidential_portrait_%281%29.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail",
    "localPhoto": "assets/politicians/richard_nixon.jpg",
    "countryCode": "us"
  },
  {
    "id": "mao_zedong",
    "name": "Mao Zedong",
    "flag": "🇨🇳",
    "country": {
      "pl": "Chiny (ChRL)",
      "en": "China (PRC)",
      "ru": "Китай (КНР)",
      "fr": "Chine (RPC)"
    },
    "role": {
      "pl": "Przywódca Chińskiej Republiki Ludowej (1949–1976), Przewodniczący KPCh",
      "en": "Founding Father of the People's Republic of China (1949–1976), Chairman of the CCP",
      "ru": "Основатель Китайской Народной Республики (1949–1976), Председатель КПК",
      "fr": "Fondateur de la République populaire de Chine (1949–1976), président du PCC"
    },
    "quote": {
      "pl": "„Władza polityczna wyrasta z lufy karabinu.”",
      "en": "“Political power grows out of the barrel of a gun.”",
      "ru": "«Винтовка рождает власть.»",
      "fr": "« Le pouvoir politique est au bout du fusil. »"
    },
    "whyVote": {
      "pl": "Oddałbyś na niego głos za zakończenie „stulecia upokorzeń”, wygnanie obcych mocarstw imperialnych, zjednoczenie Chin, likwidację feudalizmu i stworzenie suwerennej potęgi nuklearnej.",
      "en": "You would vote for him for ending China's Century of Humiliation, expelling colonial imperialists, unifying the country, abolishing landlordism, and building nuclear sovereign parity.",
      "ru": "Вы бы проголосовали за него за прекращение «века унижений», изгнание колонизаторов, объединение Китая, ликвидацию помещичьего феодализма и обретение статуса ядерной державы.",
      "fr": "Vous voteriez pour lui pour la fin du siècle de la honte, l'expulsion des puissances coloniales, la réunification nationale, l'abolition du féodalisme et la bombe atomique chinoise."
    },
    "coordinates": {
      "econ": -96,
      "soc": -75
    },
    "color": "#d32f2f",
    "gradient": "linear-gradient(135deg, #d32f2f, #b71c1c)",
    "photoUrl": "https://thumb.wikimedia.org/wikipedia/commons/thumb/5/5e/Mao_Zedong_1950_Portrait_%283x4_cropped%29%282%29.jpg/330px-Mao_Zedong_1950_Portrait_%283x4_cropped%29%282%29.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail",
    "localPhoto": "assets/politicians/mao_zedong.jpg",
    "countryCode": "cn"
  },
  {
    "id": "mikhail_gorbachev",
    "name": "Mikhail Gorbaczow",
    "flag": "🚩",
    "country": {
      "pl": "ZSRR",
      "en": "USSR",
      "ru": "СССР",
      "fr": "URSS"
    },
    "role": {
      "pl": "Ostatni Prezydent ZSRR (1985–1991), ojciec Pierestrojki i Głasnosti, laureat Nobla",
      "en": "Last General Secretary & President of the USSR (1985–1991), Nobel Peace Laureate",
      "ru": "Последний Генеральный секретарь и Президент СССР (1985–1991), лауреат Нобелевской премии",
      "fr": "Dernier dirigeant de l'URSS (1985–1991), père de la Perestroïka et de la Glasnost, prix Nobel"
    },
    "quote": {
      "pl": "„Proces ten poszedł już za daleko, by można było go zatrzymać. Czas na nowe myślenie.”",
      "en": "“Peace is not an absence of war, it is a virtue, a disposition for benevolence and justice.”",
      "ru": "«Процесс пошёл! Главное — гласность, демократизация и новое мышление.»",
      "fr": "« Le processus est engagé ! Il est temps d'adopter une pensée nouvelle pour la paix. »"
    },
    "whyVote": {
      "pl": "Oddałbyś na niego głos za pokojowe zakończenie Zimnej Wojny, zniesienie totalitarnej cenzury (Głasnost), redukcję arsenałów atomowych (INF) i pozwolenie narodom Europy Środkowej na wolność.",
      "en": "You would vote for him for peacefully terminating the Cold War, lifting totalitarian censorship (Glasnost), historic nuclear disarmament treaties (INF), and permitting Europe's liberation.",
      "ru": "Вы бы проголосовали за него за мирное окончание Холодной войны, отмену цензуры, свободу слова, ядерное разоружение (договор РСМД) и вывод советских войск из Афганистана.",
      "fr": "Vous voteriez pour lui pour la fin pacifique de la guerre froide, l'avènement de la liberté d'expression (Glasnost), les accords de désarmement nucléaire et la chute sans bain de sang du rideau de fer."
    },
    "coordinates": {
      "econ": -40,
      "soc": 30
    },
    "color": "#ad1457",
    "gradient": "linear-gradient(135deg, #ad1457, #880e4f)",
    "photoUrl": "https://thumb.wikimedia.org/wikipedia/commons/thumb/5/57/RIAN_archive_850809_General_Secretary_of_the_CPSU_CC_M._Gorbachev_%28crop%29.jpg/330px-RIAN_archive_850809_General_Secretary_of_the_CPSU_CC_M._Gorbachev_%28crop%29.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail",
    "localPhoto": "assets/politicians/mikhail_gorbachev.jpg",
    "countryCode": "ussr"
  },
  {
    "id": "helmut_kohl",
    "name": "Helmut Kohl",
    "flag": "🇩🇪",
    "country": {
      "pl": "Niemcy",
      "en": "Germany",
      "ru": "Германия",
      "fr": "Allemagne"
    },
    "role": {
      "pl": "Kanclerz Niemiec (1982–1998), „Kanclerz Zjednoczenia” i współtwórca waluty Euro",
      "en": "Chancellor of Germany (1982–1998), 'Chancellor of Unity' and founding father of the Euro",
      "ru": "Канцлер Германии (1982–1998), «Канцлер единства» и один из создателей валюты евро",
      "fr": "Chancelier d'Allemagne (1982–1998), « Chancelier de l'Unité » et père de l'euro"
    },
    "quote": {
      "pl": "„Duch wolności jest silniejszy niż wszelkie mury i druty kolczaste.”",
      "en": "“The spirit of freedom is stronger than any walls and barbed wire.”",
      "ru": "«Дух свободы сильнее любых стен и колючей проволоки.»",
      "fr": "« L'esprit de liberté est plus fort que les murs et les barbelés. »"
    },
    "whyVote": {
      "pl": "Oddałbyś na niego głos za doprowadzenie do pokojowego zjednoczenia Niemiec w 1990 r., obalenie Muru Berlińskiego, podpisanie Traktatu z Maastricht i budowę silnej Unii Europejskiej z walutą euro.",
      "en": "You would vote for him for orchestrating German reunification in 1990, tearing down the Berlin Wall, signing the Maastricht Treaty, and creating the European Single Currency (Euro).",
      "ru": "Вы бы проголосовали за него за историческое объединение Германии в 1990 году, демонтаж Берлинской стены, подписание Маастрихтского договора и создание валюты евро.",
      "fr": "Vous voteriez pour lui pour l'unification historique de l'Allemagne en 1990, la chute du mur de Berlin, le traité fondateur de Maastricht et la mise en place de l'euro."
    },
    "coordinates": {
      "econ": 30,
      "soc": -25
    },
    "color": "#1565c0",
    "gradient": "linear-gradient(135deg, #1565c0, #0d47a1)",
    "photoUrl": "https://thumb.wikimedia.org/wikipedia/commons/thumb/5/5c/Helmut_Kohl_%281996%29_cropped_%282%29.jpg/330px-Helmut_Kohl_%281996%29_cropped_%282%29.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail",
    "localPhoto": "assets/politicians/helmut_kohl.jpg",
    "countryCode": "de"
  },
  {
    "id": "francois_mitterrand",
    "name": "François Mitterrand",
    "flag": "🇫🇷",
    "country": {
      "pl": "Francja",
      "en": "France",
      "ru": "Франция",
      "fr": "France"
    },
    "role": {
      "pl": "Prezydent Francji (1981–1995), pierwszy lewicowy prezydent V Republiki",
      "en": "President of France (1981–1995), first Socialist President of the Fifth Republic",
      "ru": "Президент Франции (1981–1995), первый президент-социалист Пятой республики",
      "fr": "Président de la République française (1981–1995), premier président socialiste de la Ve République"
    },
    "quote": {
      "pl": "„Nacjonalizm to wojna.”",
      "en": "“Nationalism is war.”",
      "ru": "«Национализм — это война.»",
      "fr": "« Le nationalisme, c'est la guerre. »"
    },
    "whyVote": {
      "pl": "Oddałbyś na niego głos za zniesienie kary śmierci we Francji (Robert Badinter), wprowadzenie 5. tygodnia płatnego urlopu, emerytury w wieku 60 lat i budowę zjednoczonej Europy.",
      "en": "You would vote for him for abolishing the death penalty, instituting a 5th week of paid vacation, lowering retirement age to 60, and co-architecting European unification with Kohl.",
      "ru": "Вы бы проголосовали за него за отмену смертной казни во Франции, введение 5-й недели оплачиваемого отпуска, пенсионный возраст 60 лет и строительство единой Европы.",
      "fr": "Vous voteriez pour lui pour l'abolition historique de la peine de mort, la cinquième semaine de congés payés, la retraite à 60 ans et le renforcement du couple franco-allemand."
    },
    "coordinates": {
      "econ": -55,
      "soc": 35
    },
    "color": "#c62828",
    "gradient": "linear-gradient(135deg, #c62828, #8e0000)",
    "photoUrl": "https://thumb.wikimedia.org/wikipedia/commons/thumb/5/52/President_Fran%C3%A7ois_Mitterrand_in_1983_%28cropped%29.jpg/330px-President_Fran%C3%A7ois_Mitterrand_in_1983_%28cropped%29.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail",
    "localPhoto": "assets/politicians/francois_mitterrand.jpg",
    "countryCode": "fr"
  },
  {
    "id": "indira_gandhi",
    "name": "Indira Gandhi",
    "flag": "🇮🇳",
    "country": {
      "pl": "Indie",
      "en": "India",
      "ru": "Индия",
      "fr": "Inde"
    },
    "role": {
      "pl": "Premier Indii (1966–1977, 1980–1984), centralna postać Indyjskiego Kongresu Narodowego",
      "en": "Prime Minister of India (1966–1977, 1980–1984), dominant leader of the Indian National Congress",
      "ru": "Премьер-министр Индии (1966–1977, 1980–1984), выдающийся лидер Индийского национального конгресса",
      "fr": "Première ministre de l'Inde (1966–1977, 1980–1984), figure centrale du Congrès national indien"
    },
    "quote": {
      "pl": "„Nie można uścisnąć dłoni ze zaciśniętą pięścią.”",
      "en": "“You cannot shake hands with a clenched fist.”",
      "ru": "«Нельзя пожать друг другу руки со сжатыми кулаками.»",
      "fr": "« On ne peut pas se serrer la main les poings fermés. »"
    },
    "whyVote": {
      "pl": "Oddałbyś na niego głos za nacjonalizację banków dla ubogich rolników, zwycięstwo w wojnie 1971 r. i wyzwolenie Bangladeszu, Zieloną Rewolucję oraz uczynienie Indii potęgą atomową.",
      "en": "You would vote for him for nationalizing commercial banks, decisive victory in the 1971 war liberating Bangladesh, achieving agricultural self-sufficiency via the Green Revolution, and nuclear capability.",
      "ru": "Вы бы проголосовали за него за национализацию банков в пользу крестьян, победу в войне 1971 года (создание Бангладеш), Зелёную революцию и создание ядерного щита Индии.",
      "fr": "Vous voteriez pour lui pour la nationalisation des grandes banques, la victoire militaire de 1971 libérant le Bangladesh, la révolution verte et l'accession de l'Inde au rang nucléaire."
    },
    "coordinates": {
      "econ": -60,
      "soc": -45
    },
    "color": "#e65100",
    "gradient": "linear-gradient(135deg, #e65100, #bf360c)",
    "photoUrl": "https://thumb.wikimedia.org/wikipedia/commons/thumb/a/a1/Indira_Gandhi_official_portrait.png/330px-Indira_Gandhi_official_portrait.png?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail",
    "localPhoto": "assets/politicians/indira_gandhi.jpg",
    "countryCode": "in"
  },
  {
    "id": "bill_clinton",
    "name": "Bill Clinton",
    "flag": "🇺🇸",
    "country": {
      "pl": "Stany Zjednoczone",
      "en": "United States",
      "ru": "США",
      "fr": "États-Unis"
    },
    "role": {
      "pl": "42. Prezydent USA (1993–2001), pionier Trzeciej Drogi i ery dobrobytu lat 90.",
      "en": "42nd US President (1993–2001), pioneer of Third Way centrist governance and 1990s boom",
      "ru": "42-й Президент США (1993–2001), создатель центристского «Третьего пути» и эры профицита бюджета",
      "fr": "42e Président des États-Unis (1993–2001), pionnier de la Troisième Voie et du boom des années 90"
    },
    "quote": {
      "pl": "„Gospodarka, głupcze!”",
      "en": "“It's the economy, stupid!”",
      "ru": "«Это экономика, дурачок!»",
      "fr": "« C'est l'économie, idiot ! »"
    },
    "whyVote": {
      "pl": "Oddałbyś na niego głos za wypracowanie rekordowej nadwyżki budżetowej, stworzenie 22 milionów miejsc pracy, zawarcie układu NAFTA i zbalansowanie wolnego rynku z programami społecznymi.",
      "en": "You would vote for him for balancing the federal budget with historic surpluses, presiding over 22 million new jobs, signing NAFTA, and modernizing governance via Third Way pragmatism.",
      "ru": "Вы бы проголосовали за него за ликвидацию бюджетного дефицита и рекордный профицит, создание 22 миллионов рабочих мест, договор НАФТА и прагматичную рыночную политику.",
      "fr": "Vous voteriez pour lui pour les excédents budgétaires records, la création de 22 millions d'emplois, le traité de libre-échange ALENA et le pragmatisme centriste."
    },
    "coordinates": {
      "econ": 35,
      "soc": 35
    },
    "color": "#1976d2",
    "gradient": "linear-gradient(135deg, #1976d2, #0d47a1)",
    "photoUrl": "https://thumb.wikimedia.org/wikipedia/commons/thumb/d/d3/Bill_Clinton.jpg/330px-Bill_Clinton.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail",
    "localPhoto": "assets/politicians/bill_clinton.jpg",
    "countryCode": "us"
  },
  {
    "id": "george_w_bush",
    "name": "George W. Bush",
    "flag": "🇺🇸",
    "country": {
      "pl": "Stany Zjednoczone",
      "en": "United States",
      "ru": "США",
      "fr": "États-Unis"
    },
    "role": {
      "pl": "43. Prezydent USA (2001–2009), inicjator Globalnej Wojny z Terrorem",
      "en": "43rd US President (2001–2009), leader of the Global War on Terrorism and Neoconservatism",
      "ru": "43-й Президент США (2001–2009), инициатор глобальной войны с терроризмом",
      "fr": "43e Président des États-Unis (2001–2009), instigateur de la guerre mondiale contre le terrorisme"
    },
    "quote": {
      "pl": "„Albo jesteście z nami, albo jesteście z terrorystami.”",
      "en": "“Either you are with us, or you are with the terrorists.”",
      "ru": "«Либо вы с нами, либо вы с террористами.»",
      "fr": "« Soit vous êtes avec nous, soit vous êtes avec les terroristes. »"
    },
    "whyVote": {
      "pl": "Oddałbyś na niego głos za bezwzględną walkę z terroryzmem po zamachach z 11 września, obniżki podatków dochodowych i kapitałowych, ustawę No Child Left Behind i program PEPFAR.",
      "en": "You would vote for him for steadfast leadership in the Global War on Terror after 9/11, major income tax cuts, education reform, and saving millions of African lives through PEPFAR.",
      "ru": "Вы бы проголосовали за него за решительный ответ на теракты 11 сентября, снижение налогов на бизнес, реформу образования и масштабную гуманитарную программу PEPFAR.",
      "fr": "Vous voteriez pour lui pour sa conduite intraitable après les attentats du 11-Septembre, les baisses d'impôts sur le revenu et les capitaux, et le programme PEPFAR contre le sida."
    },
    "coordinates": {
      "econ": 55,
      "soc": -55
    },
    "color": "#b71c1c",
    "gradient": "linear-gradient(135deg, #b71c1c, #7f0000)",
    "photoUrl": "https://thumb.wikimedia.org/wikipedia/commons/thumb/d/d4/George-W-Bush.jpeg/330px-George-W-Bush.jpeg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail",
    "localPhoto": "assets/politicians/george_w_bush.jpg",
    "countryCode": "us"
  },
  {
    "id": "barack_obama",
    "name": "Barack Obama",
    "flag": "🇺🇸",
    "country": {
      "pl": "Stany Zjednoczone",
      "en": "United States",
      "ru": "США",
      "fr": "États-Unis"
    },
    "role": {
      "pl": "44. Prezydent USA (2009–2017), laureat Pokojowej Nagrody Nobla, twórca Obamacare",
      "en": "44th US President (2009–2017), Nobel Peace Laureate, architect of the Affordable Care Act",
      "ru": "44-й Президент США (2009–2017), лауреат Нобелевской премии мира, создатель Obamacare",
      "fr": "44e Président des États-Unis (2009–2017), prix Nobel de la paix, créateur de l'Obamacare"
    },
    "quote": {
      "pl": "„Yes, we can! Zmiana nigdy nie przychodzi z góry, zaczyna się od nas samych.”",
      "en": "“Yes, we can! Change will not come if we wait for some other person or some other time.”",
      "ru": "«Да, мы можем! Перемены начинаются с нас самих.»",
      "fr": "« Yes, we can ! Le changement ne viendra pas si nous attendons une autre personne. »"
    },
    "whyVote": {
      "pl": "Oddałbyś na niego głos za reformę zdrowotną (Obamacare) ubezpieczającą 20 mln Amerykanów, podpisanie Porozumienia Paryskiego, legalizację małżeństw jednopłciowych i opanowanie kryzysu 2008 r.",
      "en": "You would vote for him for expanding healthcare to 20M citizens via the Affordable Care Act, ratifying the Paris Climate Accord, federal marriage equality, and steady recovery after 2008.",
      "ru": "Вы бы проголосовали за него за реформу здравоохранения (Obamacare), давшую страховку 20 млн граждан, Парижское соглашение по климату, легализацию однополых браков и спасение автопрома.",
      "fr": "Vous voteriez pour lui pour l'Obamacare assurant 20 millions d'Américains, la signature de l'accord de Paris sur le climat, l'égalité du mariage et la sortie de crise de 2008."
    },
    "coordinates": {
      "econ": -15,
      "soc": 55
    },
    "color": "#0097a7",
    "gradient": "linear-gradient(135deg, #0097a7, #006064)",
    "photoUrl": "https://thumb.wikimedia.org/wikipedia/commons/thumb/8/8d/President_Barack_Obama.jpg/330px-President_Barack_Obama.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail",
    "localPhoto": "assets/politicians/barack_obama.jpg",
    "countryCode": "us"
  },
  {
    "id": "donald_trump",
    "name": "Donald Trump",
    "flag": "🇺🇸",
    "country": {
      "pl": "Stany Zjednoczone",
      "en": "United States",
      "ru": "США",
      "fr": "États-Unis"
    },
    "role": {
      "pl": "45. i 47. Prezydent USA, lider ruchu „Make America Great Again” (MAGA)",
      "en": "45th & 47th US President, leader of the Make America Great Again (MAGA) movement",
      "ru": "45-й и 47-й Президент США, лидер движения «Make America Great Again» (MAGA)",
      "fr": "45e et 47e Président des États-Unis, chef de file du mouvement MAGA"
    },
    "quote": {
      "pl": "„Make America Great Again! Będziemy stawiać Amerykę na pierwszym miejscu.”",
      "en": "“Make America Great Again! In America, we don't worship government — we worship God.”",
      "ru": "«Сделаем Америку снова великой! Мы ставим интересы своей страны на первое место.»",
      "fr": "« Rendre à l'Amérique sa grandeur ! L'Amérique d'abord, toujours et partout ! »"
    },
    "whyVote": {
      "pl": "Oddałbyś na niego głos za obniżenie podatków korporacyjnych (TCJA), taryfy celne chroniące przemysł, walkę z nielegalną imigracją i mur graniczny, sędziów konstytucyjnych i sprzeciw wobec globalizmu.",
      "en": "You would vote for him for sweeping corporate tax cuts and deregulation, protective tariffs against China, strict border wall enforcement, conservative judicial appointments, and energy independence.",
      "ru": "Вы бы проголосовали за него за масштабное снижение налогов на бизнес, торговые пошлины против Китая, жесткое пресечение нелегальной миграции, стену на границе и энергетическую независимость.",
      "fr": "Vous voteriez pour lui pour les baisses massives d'impôts sur les sociétés, les barrières douanières protégeant l'industrie, le mur anti-immigration et le refus du mondialisme."
    },
    "coordinates": {
      "econ": 45,
      "soc": -80
    },
    "color": "#d84315",
    "gradient": "linear-gradient(135deg, #d84315, #bf360c)",
    "photoUrl": "https://thumb.wikimedia.org/wikipedia/commons/thumb/1/16/Official_Presidential_Portrait_of_President_Donald_J._Trump_%282025%29.jpg/330px-Official_Presidential_Portrait_of_President_Donald_J._Trump_%282025%29.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail",
    "localPhoto": "assets/politicians/donald_trump.jpg",
    "countryCode": "us"
  },
  {
    "id": "joe_biden",
    "name": "Joe Biden",
    "flag": "🇺🇸",
    "country": {
      "pl": "Stany Zjednoczone",
      "en": "United States",
      "ru": "США",
      "fr": "États-Unis"
    },
    "role": {
      "pl": "46. Prezydent USA (2021–2025), wieloletni senator i wiceprezydent USA",
      "en": "46th US President (2021–2025), longtime US Senator and Vice President",
      "ru": "46-й Президент США (2021–2025), многолетний сенатор и вице-президент",
      "fr": "46e Président des États-Unis (2021–2025), ancien sénateur et vice-président des États-Unis"
    },
    "quote": {
      "pl": "„Demokracja nie dzieje się sama z siebie. Musimy jej bronić każdego dnia.”",
      "en": "“Democracy doesn't happen by accident. We have to defend it, fight for it, strengthen it.”",
      "ru": "«Демократия не происходит сама по себе. Мы должны защищать её каждый день.»",
      "fr": "« La démocratie n'arrive pas par hasard. Nous devons la défendre et la renouveler chaque jour. »"
    },
    "whyVote": {
      "pl": "Oddałbyś na niego głos za bezprecedensowe inwestycje w zieloną transformację (Inflation Reduction Act), odbudowę dróg i mostów (IIJA), zjednoczenie wolnego świata wokół Ukrainy i wsparcie związków.",
      "en": "You would vote for him for the historic clean energy transition (Inflation Reduction Act), bipartisan infrastructure package, reuniting NATO allies in support of Ukraine, and pro-union labor support.",
      "ru": "Вы бы проголосовали за него за рекордные инвестиции в чистую энергетику (IRA), двухпартийный закон об инфраструктуре, консолидацию НАТО в поддержке Украины и защиту прав профсоюзов.",
      "fr": "Vous voteriez pour lui pour la loi historique sur la transition écologique (IRA), la modernisation des infrastructures, le soutien indéfectible à l'Ukraine et la défense du travail syndiqué."
    },
    "coordinates": {
      "econ": -25,
      "soc": 50
    },
    "color": "#1e88e5",
    "gradient": "linear-gradient(135deg, #1e88e5, #1565c0)",
    "photoUrl": "https://thumb.wikimedia.org/wikipedia/commons/thumb/6/68/Joe_Biden_presidential_portrait.jpg/330px-Joe_Biden_presidential_portrait.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail",
    "localPhoto": "assets/politicians/joe_biden.jpg",
    "countryCode": "us"
  },
  {
    "id": "vladimir_putin",
    "name": "Vladimir Putin",
    "flag": "🇷🇺",
    "country": {
      "pl": "Rosja",
      "en": "Russia",
      "ru": "Россия",
      "fr": "Russie"
    },
    "role": {
      "pl": "Prezydent Federacji Rosyjskiej, przywódca autorytarnego państwa mocarstwowego",
      "en": "President of the Russian Federation, champion of multipolar sovereign power",
      "ru": "Президент Российской Федерации, верховный главнокомандующий",
      "fr": "Président de la Fédération de Russie, défenseur d'un monde multipolaire souverain"
    },
    "quote": {
      "pl": "„Granice Rosji nigdzie się nie kończą.”",
      "en": "“Russia's borders do not end anywhere.”",
      "ru": "«Границы России нигде не заканчиваются.»",
      "fr": "« Les frontières de la Russie ne s'arrêtent nulle part. »"
    },
    "whyVote": {
      "pl": "Oddałbyś na niego głos za odbudowę potęgi wojskowej Rosji po rozpadzie ZSRR, sprzeciw wobec hegemonii USA i Zachodu, obronę tradycyjnych wartości chrześcijańskich i państwową kontrolę nad surowcami.",
      "en": "You would vote for him for restoring Russian great-power status after 1991, challenging Western geopolitical hegemony, asserting traditional social values, and state control over strategic energy.",
      "ru": "Вы бы проголосовали за него за возрождение мощи России после хаоса 90-х, защиту суверенитета от давления Запада, отстаивание традиционных ценностей и возврат исторических земель.",
      "fr": "Vous voteriez pour lui pour le rétablissement de la puissance stratégique russe, la contestation de l'ordre unipolaire américain, la défense des valeurs traditionnelles et la souveraineté énergétique."
    },
    "coordinates": {
      "econ": 15,
      "soc": -95
    },
    "color": "#283593",
    "gradient": "linear-gradient(135deg, #283593, #1a237e)",
    "photoUrl": "https://thumb.wikimedia.org/wikipedia/commons/thumb/8/86/Vladimir_Putin_%282026_02_23%29.jpg/330px-Vladimir_Putin_%282026_02_23%29.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail",
    "localPhoto": "assets/politicians/vladimir_putin.jpg",
    "countryCode": "ru"
  },
  {
    "id": "xi_jinping",
    "name": "Xi Jinping",
    "flag": "🇨🇳",
    "country": {
      "pl": "Chiny (ChRL)",
      "en": "China (PRC)",
      "ru": "Китай (КНР)",
      "fr": "Chine (RPC)"
    },
    "role": {
      "pl": "Przewodniczący ChRL, Sekretarz Generalny KC KPCh, architekt „Chińskiego Snu”",
      "en": "President of the PRC, General Secretary of the CCP, architect of the Chinese Dream",
      "ru": "Председатель КНР, Генеральный секретарь ЦК КПК, архитектор «Китайской мечты»",
      "fr": "Président de la République populaire de Chine, secrétaire général du PCC"
    },
    "quote": {
      "pl": "„Chiński naród wkroczył w nieodwracalny bieg ku wielkiemu odrodzeniu.”",
      "en": "“The Chinese nation has achieved the tremendous transformation from standing up to becoming prosperous and strong.”",
      "ru": "«Великое возрождение китайской нации стало необратимым историческим процессом.»",
      "fr": "« La grande renaissance de la nation chinoise est entrée dans un processus historique irréversible. »"
    },
    "whyVote": {
      "pl": "Oddałbyś na niego głos za globalną ekspansję infrastrukturalną (Inicjatywa Pasa i Szlaku), całkowitą likwidację skrajnego ubóstwa, walkę z korupcją w partii i budowę technologicznego mocarstwa XXI wieku.",
      "en": "You would vote for him for the Belt and Road global infrastructure initiative, total eradication of absolute poverty, assertive anti-corruption campaigns, and technological global supremacy.",
      "ru": "Вы бы проголосовали за него за проект «Один пояс, один путь», полную ликвидацию абсолютной нищеты, жесткую антикоррупционную чистку и превращение Китая в технологического гиганта.",
      "fr": "Vous voteriez pour lui pour l'initiative planétaire des Nouvelles Routes de la Soie, l'éradication de l'extrême pauvreté, la lutte anticorruption et la souveraineté technologique de pointe."
    },
    "coordinates": {
      "econ": -10,
      "soc": -90
    },
    "color": "#b72b2b",
    "gradient": "linear-gradient(135deg, #b72b2b, #821010)",
    "photoUrl": "https://thumb.wikimedia.org/wikipedia/commons/thumb/d/dc/Prime_Minister_Keir_Starmer_visits_China_%2855066713683%29_%28cropped%2Bangle%29.jpg/330px-Prime_Minister_Keir_Starmer_visits_China_%2855066713683%29_%28cropped%2Bangle%29.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail",
    "localPhoto": "assets/politicians/xi_jinping.jpg",
    "countryCode": "cn"
  },
  {
    "id": "boris_johnson",
    "name": "Boris Johnson",
    "flag": "🇬🇧",
    "country": {
      "pl": "Wielka Brytania",
      "en": "United Kingdom",
      "ru": "Великобритания",
      "fr": "Royaume-Uni"
    },
    "role": {
      "pl": "Premier Wielkiej Brytanii (2019–2022), architekt Brexitu i wsparcia dla Ukrainy",
      "en": "Prime Minister of the UK (2019–2022), architect of Brexit and early military aid to Ukraine",
      "ru": "Премьер-министр Великобритании (2019–2022), лидер реализации Брекзита",
      "fr": "Premier ministre du Royaume-Uni (2019–2022), artisan de la sortie de l'UE (Brexit)"
    },
    "quote": {
      "pl": "„Get Brexit Done! Odzyskajmy kontrolę nad naszymi prawami i granicami.”",
      "en": "“Get Brexit Done! We will take back control of our laws, borders and money.”",
      "ru": "«Доведём Брекзит до конца! Вернём контроль над нашими законами и границами.»",
      "fr": "« Réalisons le Brexit ! Reprenons le contrôle de nos lois, de nos frontières et de notre destin. »"
    },
    "whyVote": {
      "pl": "Oddałbyś na niego głos za skuteczne doprowadzenie Brexitu do końca i odzyskanie suwerenności parlamentu, szybki program szczepień, program wyrównywania szans regionalnych oraz bezwzględną pomoc dla Ukrainy.",
      "en": "You would vote for him for delivering Brexit to restore parliamentary sovereignty, the vaccine rollout, Leveling Up regional investments, and pioneering decisive Western military defense for Ukraine.",
      "ru": "Вы бы проголосовали за него за реализацию Брекзита и выход из ЕС, успешную кампанию вакцинации, инвестиции в британские регионы и бескомпромиссную военную помощь Украине.",
      "fr": "Vous voteriez pour lui pour avoir mené à terme le Brexit restaurant la souveraineté nationale, le plan d'investissement régional et son soutien militaire résolu à l'Ukraine."
    },
    "coordinates": {
      "econ": 50,
      "soc": -45
    },
    "color": "#0288d1",
    "gradient": "linear-gradient(135deg, #0288d1, #01579b)",
    "photoUrl": "https://thumb.wikimedia.org/wikipedia/commons/thumb/7/76/Boris_Johnson_official_portrait_%28cropped%29.jpg/330px-Boris_Johnson_official_portrait_%28cropped%29.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail",
    "localPhoto": "assets/politicians/boris_johnson.jpg",
    "countryCode": "gb"
  },
  {
    "id": "jair_bolsonaro",
    "name": "Jair Bolsonaro",
    "flag": "🇧🇷",
    "country": {
      "pl": "Brazylia",
      "en": "Brazil",
      "ru": "Бразилия",
      "fr": "Brésil"
    },
    "role": {
      "pl": "Prezydent Brazylii (2019–2022), lider konserwatywnego populizmu i wolnego rynku",
      "en": "President of Brazil (2019–2022), conservative populist champion of free enterprise",
      "ru": "Президент Бразилии (2019–2022), правый популист и защитник свободного рынка",
      "fr": "Président du Brésil (2019–2022), figure du populisme conservateur et libéral"
    },
    "quote": {
      "pl": "„Brazylia ponad wszystkim, Bóg ponad wszystkimi!”",
      "en": "“Brazil above everything, God above everyone!”",
      "ru": "«Бразилия превыше всего, Бог превыше всех!»",
      "fr": "« Le Brésil avant tout, Dieu par-dessus tout ! »"
    },
    "whyVote": {
      "pl": "Oddałbyś na niego głos za rynkowe reformy gospodarcze (Paulo Guedes), reformę emerytalną, walkę z przestępczością, prawo do posiadania broni, obronę tradycyjnej rodziny i sprzeciw wobec ekologizmu.",
      "en": "You would vote for him for free-market deregulation, historic pension reform, aggressive crackdowns on violent crime, easing gun ownership, and unapologetic Christian cultural conservatism.",
      "ru": "Вы бы проголосовали за него за пенсионную реформу и дерегуляцию, жесткую борьбу с наркокартелями, упрощение владения оружием, защиту традиционной семьи и скептицизм к климатическим ограничениям.",
      "fr": "Vous voteriez pour lui pour les réformes libérales de dérégulation, la réforme des retraites, la fermeté totale contre la criminalité, le port d'armes citoyen et les valeurs chrétiennes."
    },
    "coordinates": {
      "econ": 60,
      "soc": -80
    },
    "color": "#33691e",
    "gradient": "linear-gradient(135deg, #33691e, #1b5e20)",
    "photoUrl": "https://thumb.wikimedia.org/wikipedia/commons/thumb/e/e7/Jair_Bolsonaro_em_24_de_abril_de_2019_%281%29_%283x4%29.jpg/330px-Jair_Bolsonaro_em_24_de_abril_de_2019_%281%29_%283x4%29.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail",
    "localPhoto": "assets/politicians/jair_bolsonaro.jpg",
    "countryCode": "br"
  },
  {
    "id": "olaf_scholz",
    "name": "Olaf Scholz",
    "flag": "🇩🇪",
    "country": {
      "pl": "Niemcy",
      "en": "Germany",
      "ru": "Германия",
      "fr": "Allemagne"
    },
    "role": {
      "pl": "Kanclerz Niemiec (od 2021), lider SPD, ogłosił historyczny zwrot „Zeitenwende”",
      "en": "Chancellor of Germany (since 2021), SPD leader who proclaimed the 'Zeitenwende' defense shift",
      "ru": "Канцлер Германии (с 2021), лидер СДПГ, провозгласивший исторический перелом «Zeitenwende»",
      "fr": "Chancelier d'Allemagne (depuis 2021), dirigeant du SPD, initiateur du tournant « Zeitenwende »"
    },
    "quote": {
      "pl": "„Przeżywamy epokowy punkt zwrotny (Zeitenwende) w historii naszego kontynentu.”",
      "en": "“We are living through a watershed era (Zeitenwende) in European history.”",
      "ru": "«Мы переживаем историческую смену эпох (Zeitenwende).»",
      "fr": "« Nous vivons un changement d'époque historique (Zeitenwende). »"
    },
    "whyVote": {
      "pl": "Oddałbyś na niego głos za podniesienie płacy minimalnej do 12 euro, utworzenie specjalnego funduszu 100 mld euro na modernizację Bundeswehry oraz zrównoważoną transformację zielonego przemysłu.",
      "en": "You would vote for him for raising the statutory minimum wage to €12, establishing the €100B Zeitenwende fund to re-equip the military, and pragmatic industrial green transition.",
      "ru": "Вы бы проголосовали за него за повышение минимальной оплаты труда до 12 евро, выделение 100 млрд евро на перевооружение Бундесвера и прагматичную энергетическую политику.",
      "fr": "Vous voteriez pour lui pour la revalorisation du salaire minimum à 12 € de l'heure, le fonds de 100 milliards d'euros pour la défense et la transition écologique industrielle."
    },
    "coordinates": {
      "econ": -45,
      "soc": 35
    },
    "color": "#d81b60",
    "gradient": "linear-gradient(135deg, #d81b60, #880e4f)",
    "photoUrl": "https://thumb.wikimedia.org/wikipedia/commons/thumb/2/27/Olaf_Scholz_September_2024.jpg/330px-Olaf_Scholz_September_2024.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail",
    "localPhoto": "assets/politicians/olaf_scholz.jpg",
    "countryCode": "de"
  },
  {
    "id": "giorgia_meloni",
    "name": "Giorgia Meloni",
    "flag": "🇮🇹",
    "country": {
      "pl": "Włochy",
      "en": "Italy",
      "ru": "Италия",
      "fr": "Italie"
    },
    "role": {
      "pl": "Premier Włoch (od 2022), liderka partii Fratelli d'Italia, konserwatystka atlantycka",
      "en": "Prime Minister of Italy (since 2022), leader of Fratelli d'Italia, Atlanticist conservative",
      "ru": "Премьер-министр Италии (с 2022), лидер партии «Братья Италии», консерватор",
      "fr": "Présidente du Conseil italien (depuis 2022), dirigeante de Fratelli d'Italia, conservatrice"
    },
    "quote": {
      "pl": "„Jestem Giorgia, jestem kobietą, jestem matką, jestem Włoszką, jestem chrześcijanką!”",
      "en": "“I am Giorgia, I am a woman, I am a mother, I am Italian, I am Christian!”",
      "ru": "«Я — Джорджа, я женщина, я мать, я итальянка, я христианка!»",
      "fr": "« Je suis Giorgia, je suis une femme, je suis une mère, je suis italienne, je suis chrétienne ! »"
    },
    "whyVote": {
      "pl": "Oddałbyś na niego głos za obronę tożsamości narodowej i tradycyjnej rodziny, walkę z nielegalną imigracją (Plano Mattei), obniżki podatków dochodowych i twarde wsparcie dla NATO i Ukrainy.",
      "en": "You would vote for him for defending national cultural identity and traditional families, curbing illegal migration (Mattei Plan), lowering labor taxes, and staunch pro-NATO alignment on Ukraine.",
      "ru": "Вы бы проголосовали за него за защиту традиционных семейных ценностей, пресечение нелегальной миграции через Средиземное море, налоговые послабления и четкую атлантическую позицию.",
      "fr": "Vous voteriez pour lui pour la défense des racines chrétiennes et de la famille, le contrôle renforcé de l'immigration clandestine, la baisse des charges et la solidarité atlantique."
    },
    "coordinates": {
      "econ": 30,
      "soc": -75
    },
    "color": "#4527a0",
    "gradient": "linear-gradient(135deg, #4527a0, #311b92)",
    "photoUrl": "https://thumb.wikimedia.org/wikipedia/commons/thumb/9/96/Giorgia_Meloni_Official_2024_%28cropped%29.jpg/330px-Giorgia_Meloni_Official_2024_%28cropped%29.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail",
    "localPhoto": "assets/politicians/giorgia_meloni.jpg",
    "countryCode": "it"
  },
  {
    "id": "pedro_sanchez",
    "name": "Pedro Sánchez",
    "flag": "🇪🇸",
    "country": {
      "pl": "Hiszpania",
      "en": "Spain",
      "ru": "Испания",
      "fr": "Espagne"
    },
    "role": {
      "pl": "Premier Hiszpanii (od 2018), lider PSOE, czołowy socjaldemokrata europejski",
      "en": "Prime Minister of Spain (since 2018), leader of the PSOE, prominent European Social Democrat",
      "ru": "Председатель правительства Испании (с 2018), лидер ИСРП, социал-демократ",
      "fr": "Président du gouvernement d'Espagne (depuis 2018), secrétaire général du PSOE"
    },
    "quote": {
      "pl": "„Rządy muszą służyć większości społecznej, a nie uprzywilejowanym korporacjom.”",
      "en": "“Governments must serve the social majority, not privileged corporate elites.”",
      "ru": "«Власть обязана служить большинству общества, а не привилегированным элитам.»",
      "fr": "« Les gouvernements doivent servir la majorité sociale, non les élites privilégiées. »"
    },
    "whyVote": {
      "pl": "Oddałbyś na niego głos za wprowadzenie limitu cen gazu (wyjątek iberyjski), opodatkowanie zysków banków i koncernów energetycznych, skokowe podwyżki płacy minimalnej i awangardę Zielonego Ładu.",
      "en": "You would vote for him for the Iberian energy price cap shielding consumers, taxing windfall corporate profits, major minimum wage increases, and ambitious climate transition laws.",
      "ru": "Вы бы проголосовали за него за ограничение цен на газ («иберийское исключение»), налог на сверхприбыль банков, рекордное повышение МРОТ и смелое экологическое законодательство.",
      "fr": "Vous voteriez pour lui pour le bouclier tarifaire sur l'énergie (exception ibérique), la taxe sur les superprofits bancaires, la hausse du salaire minimum et la transition verte."
    },
    "coordinates": {
      "econ": -60,
      "soc": 65
    },
    "color": "#e53935",
    "gradient": "linear-gradient(135deg, #e53935, #b71c1c)",
    "photoUrl": "https://thumb.wikimedia.org/wikipedia/commons/thumb/8/89/Pedro_S%C3%A1nchez_2026_Portrait_%283x4_cropped%29.jpg/330px-Pedro_S%C3%A1nchez_2026_Portrait_%283x4_cropped%29.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail",
    "localPhoto": "assets/politicians/pedro_sanchez.jpg",
    "countryCode": "es"
  },
  {
    "id": "viktor_orban",
    "name": "Viktor Orbán",
    "flag": "🇭🇺",
    "country": {
      "pl": "Węgry",
      "en": "Hungary",
      "ru": "Венгрия",
      "fr": "Hongrie"
    },
    "role": {
      "pl": "Premier Węgier (1998–2002, od 2010), lider Fideszu, twórca koncepcji państwa nieliberalnego",
      "en": "Prime Minister of Hungary (1998–2002, since 2010), leader of Fidesz, illiberal statecraft pioneer",
      "ru": "Премьер-министр Венгрии (1998–2002, с 2010), лидер Фидес, идеолог суверенной демократии",
      "fr": "Premier ministre de Hongrie (1998–2002, depuis 2010), dirigeant du Fidesz, théoricien de l'illibéralisme"
    },
    "quote": {
      "pl": "„Węgry nie staną się krajem imigrantów. Budujemy chrześcijańską nieliberalną demokrację.”",
      "en": "“Hungary will not become an immigrant country. We are building a Christian democracy.”",
      "ru": "«Венгрия не станет страной мигрантов. Мы строим христианскую суверенную демократию.»",
      "fr": "« La Hongrie ne sera pas un pays d'immigration. Nous défendons une démocratie chrétienne souveraine. »"
    },
    "whyVote": {
      "pl": "Oddałbyś na niego głos za bezkompromisowy sprzeciw wobec relokacji migrantów, ogrodzenie granic, potężne ulgi podatkowe i subsydia dla matek rodzących dzieci oraz obronę suwerenności przed UE.",
      "en": "You would vote for him for absolute rejection of EU migrant quotas, physical border fencing, lifetime income tax exemptions for mothers of 4+ children, and national constitutional primacy.",
      "ru": "Вы бы проголосовали за него за закрытие границ от нелегальной миграции, освобождение многодетных матерей от подоходного налога навсегда и защиту национальных интересов Венгрии.",
      "fr": "Vous voteriez pour lui pour le refus catégorique des quotas migratoires de Bruxelles, la clôture des frontières, l'exonération fiscale à vie pour les mères de famille nombreuse et la souveraineté."
    },
    "coordinates": {
      "econ": 10,
      "soc": -90
    },
    "color": "#ef6c00",
    "gradient": "linear-gradient(135deg, #ef6c00, #e65100)",
    "photoUrl": "https://thumb.wikimedia.org/wikipedia/commons/thumb/8/8a/Viktor_Orban_2025_%28cropped%29.jpg/330px-Viktor_Orban_2025_%28cropped%29.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail",
    "localPhoto": "assets/politicians/viktor_orban.jpg",
    "countryCode": "hu"
  },
  {
    "id": "jaroslaw_kaczynski",
    "name": "Jarosław Kaczyński",
    "flag": "🇵🇱",
    "country": {
      "pl": "Polska",
      "en": "Poland",
      "ru": "Польша",
      "fr": "Pologne"
    },
    "role": {
      "pl": "Prezes Prawa i Sprawiedliwości (PiS), b. premier RP, architekt polityki solidaryzmu",
      "en": "Leader of Law and Justice (PiS), former Prime Minister of Poland, architect of solidarist welfare",
      "ru": "Лидер партии «Право и справедливость» (PiS), бывший премьер-министр Польши",
      "fr": "Président de Droit et Justice (PiS), ancien Premier ministre de Pologne, artisan du solidarisme"
    },
    "quote": {
      "pl": "„Polska musi pozostać oazą wolności, wiary i tradycji w Europie.”",
      "en": "“Poland must remain an oasis of freedom, faith, and traditional values in Europe.”",
      "ru": "«Польша должна оставаться оазисом свободы, веры и традиций в Европе.»",
      "fr": "« La Pologne doit demeurer une oasis de liberté, de foi et de tradition en Europe. »"
    },
    "whyVote": {
      "pl": "Oddałbyś na niego głos za rewolucję solidarnościową i program 500+ na każde dziecko, obniżenie wieku emerytalnego, obronę tradycyjnych wartości chrześcijańskich, rozbudowę polskiej armii i mur na granicy.",
      "en": "You would vote for him for the transformative 500+ universal child benefit, lowering retirement age, defending Christian roots, launching unprecedented military expansion, and border barriers.",
      "ru": "Вы бы проголосовали за него за программу детских выплат 500+, снижение пенсионного возраста, защиту христианской идентичности, рекордное укрепление армии и защиту восточной границы.",
      "fr": "Vous voteriez pour lui pour le programme d'allocations familiales 500+, l'abaissement de l'âge de la retraite, la défense des valeurs chrétiennes et le renforcement historique de l'armée."
    },
    "coordinates": {
      "econ": -45,
      "soc": -80
    },
    "color": "#880e4f",
    "gradient": "linear-gradient(135deg, #880e4f, #4a0072)",
    "photoUrl": "https://thumb.wikimedia.org/wikipedia/commons/thumb/c/c3/Jaros%C5%82aw_Kaczy%C5%84ski%2C_wicepremier_%28cropped%29.png/330px-Jaros%C5%82aw_Kaczy%C5%84ski%2C_wicepremier_%28cropped%29.png?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail",
    "localPhoto": "assets/politicians/jaroslaw_kaczynski.jpg",
    "countryCode": "pl"
  },
  {
    "id": "mateusz_morawiecki",
    "name": "Mateusz Morawiecki",
    "flag": "🇵🇱",
    "country": {
      "pl": "Polska",
      "en": "Poland",
      "ru": "Polska",
      "fr": "Pologne"
    },
    "role": {
      "pl": "Premier RP (2017–2023), ekonomista, autor Strategii Odpowiedzialnego Rozwoju",
      "en": "Prime Minister of Poland (2017–2023), economist, architect of the Responsible Development Plan",
      "ru": "Премьер-министр Польши (2017–2023), экономист, автор Стратегии ответственного развития",
      "fr": "Premier ministre de Pologne (2017–2023), économiste, promoteur du développement stratégique"
    },
    "quote": {
      "pl": "„Silne, suwerenne państwo dba o najsłabszych i odważnie inwestuje w strategiczny kapitał przyszłości.”",
      "en": "“A strong sovereign state protects its most vulnerable while boldly investing in future strategic assets.”",
      "ru": "«Сильное суверенное государство защищает слабых и смело инвестирует в стратегическое будущее.»",
      "fr": "« Un État fort et souverain protège les plus vulnérables et investit dans les secteurs stratégiques d'avenir. »"
    },
    "whyVote": {
      "pl": "Oddałbyś na niego głos za skuteczne uszczelnienie luki w podatku VAT finansujące programy społeczne, tarcze antykryzysowe chroniące miejsca pracy, program energetyki jądrowej w Polsce i inwestycje lokalne.",
      "en": "You would vote for him for closing the corporate VAT tax gap to fund social programs, pandemic economic shields saving millions of jobs, pioneering civil nuclear power, and local infrastructure grants.",
      "ru": "Вы бы проголосовали за него за закрытие лазеек в НДС для финансирования соцпрограмм, антикризисные щиты для бизнеса, запуск первой польской АЭС и масштабные инвестиции в регионы.",
      "fr": "Vous voteriez pour lui pour la lutte victorieuse contre la fraude à la TVA finançant le social, les boucliers économiques protégeant l'emploi, le programme nucléaire civil et les infrastructures."
    },
    "coordinates": {
      "econ": -30,
      "soc": -65
    },
    "color": "#6a1b9a",
    "gradient": "linear-gradient(135deg, #6a1b9a, #4a148c)",
    "photoUrl": "https://thumb.wikimedia.org/wikipedia/commons/thumb/8/84/Mateusz_Morawiecki_official_portrait_%282023%29.jpg/330px-Mateusz_Morawiecki_official_portrait_%282023%29.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail",
    "localPhoto": "assets/politicians/mateusz_morawiecki.jpg",
    "countryCode": "pl"
  },
  {
    "id": "ursula_von_der_leyen",
    "name": "Ursula von der Leyen",
    "flag": "🇪🇺",
    "country": {
      "pl": "Unia Europejska",
      "en": "European Union",
      "ru": "Европейский Союз",
      "fr": "Union européenne"
    },
    "role": {
      "pl": "Przewodnicząca Komisji Europejskiej (od 2019), b. minister obrony Niemiec",
      "en": "President of the European Commission (since 2019), former German Minister of Defence",
      "ru": "Председатель Европейской комиссии (с 2019), бывший министр обороны Германии",
      "fr": "Présidente de la Commission européenne (depuis 2019), ancienne ministre fédérale allemande"
    },
    "quote": {
      "pl": "„Europa musi być odważna, zjednoczona i wiodąca w zielonej rewolucji technologicznej.”",
      "en": "“Europe must be bold, Europe must be green, Europe must stand united in a fractured world.”",
      "ru": "«Европа должна быть смелой, зелёной и единой перед лицом глобальных вызовов.»",
      "fr": "« L'Europe doit être audacieuse, verte et unie dans un monde fracturé. »"
    },
    "whyVote": {
      "pl": "Oddałbyś na niego głos za Europejski Zielony Ład dążący do neutralności klimatycznej, bezprecedensowy wspólny fundusz odbudowy NextGenerationEU (800 mld €) i twarde przywództwo w obronie wolności Ukrainy.",
      "en": "You would vote for him for the European Green Deal climate framework, creating the historic €800B NextGenerationEU mutual debt fund, and resolute leadership mobilizing EU support for Ukraine.",
      "ru": "Вы бы проголосовали за него за «Европейский зелёный курс» к климатической нейтральности, создание общего фонда NextGenerationEU на 800 млрд евро и решительную поддержку Украины со стороны ЕС.",
      "fr": "Vous voteriez pour lui pour le Pacte vert pour l'Europe (Green Deal), l'emprunt européen historique de 800 milliards d'euros NextGenerationEU et la fermeté face à l'agression en Ukraine."
    },
    "coordinates": {
      "econ": -10,
      "soc": 50
    },
    "color": "#0055a5",
    "gradient": "linear-gradient(135deg, #0055a5, #003366)",
    "photoUrl": "https://thumb.wikimedia.org/wikipedia/commons/thumb/e/e0/Ursula_von_der_Leyen_2024.jpg/330px-Ursula_von_der_Leyen_2024.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail",
    "localPhoto": "assets/politicians/ursula_von_der_leyen.jpg",
    "countryCode": "eu"
  },
  {
    "id": "greta_thunberg",
    "name": "Greta Thunberg",
    "flag": "🇸🇪",
    "country": {
      "pl": "Szwecja / Ruch Globalny",
      "en": "Sweden / Global Movement",
      "ru": "Швеция / Глобальное движение",
      "fr": "Suède / Mouvement mondial"
    },
    "role": {
      "pl": "Inicjatorka globalnego Młodzieżowego Strajku Klimatycznego (Fridays for Future)",
      "en": "Founder of the School Strike for Climate (Fridays for Future) global movement",
      "ru": "Основательница глобального климатического движения «Пятницы ради будущего»",
      "fr": "Initiatrice des grèves scolaires pour le climat (Fridays for Future)"
    },
    "quote": {
      "pl": "„Nasz dom płonie! Chcę, żebyście wpadli w panikę i natychmiast zaczęli działać.”",
      "en": "“Our house is on fire. I want you to panic, and then I want you to act.”",
      "ru": "«Наш дом горит. Я хочу, чтобы вы запаниковали, а затем начали действовать.»",
      "fr": "« Notre maison brûle. Je veux que vous paniquiez, et que vous agissiez. »"
    },
    "whyVote": {
      "pl": "Oddałbyś na nią głos za bezkompromisowe domaganie się natychmiastowego odejścia od węgla, ropy i gazu, oskarżenie światowych przywódców o zaniechania, aktywizm non-profit i prymat biosfery nad PKB.",
      "en": "You would vote for her for unapologetic climate emergency activism, holding world elites accountable, demanding total phase-out of fossil subsidies, and placing planetary survival above corporate growth.",
      "ru": "Вы бы проголосовали за неё за бескомпромиссную борьбу против сжигания ископаемого топлива, разоблачение лицемерия мировых элит и требование поставить выживание планеты выше прибылей корпораций.",
      "fr": "Vous voteriez pour elle pour son intransigeance face à l'urgence climatique, son interpellation des dirigeants mondiaux, le refus des compromis sur les énergies fossiles et la primauté du vivant sur le PIB."
    },
    "coordinates": {
      "econ": -80,
      "soc": 92
    },
    "color": "#1b5e20",
    "gradient": "linear-gradient(135deg, #1b5e20, #0a3d0e)",
    "photoUrl": "https://thumb.wikimedia.org/wikipedia/commons/thumb/f/f8/Greta_Thunberg_in_May_2026_%28cropped_3x4%29.jpg/330px-Greta_Thunberg_in_May_2026_%28cropped_3x4%29.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail",
    "localPhoto": "assets/politicians/greta_thunberg.jpg",
    "countryCode": "se"
  },
  {
    "id": "elon_musk",
    "name": "Elon Musk",
    "flag": "🇺🇸",
    "country": {
      "pl": "Stany Zjednoczone",
      "en": "United States",
      "ru": "США",
      "fr": "États-Unis"
    },
    "role": {
      "pl": "Przedsiębiorca technologiczny, CEO Tesla i SpaceX, lider redukcji biurokracji państwowej",
      "en": "Tech entrepreneur, CEO of Tesla & SpaceX, champion of government efficiency and free speech",
      "ru": "Технологический предприниматель, глава Tesla и SpaceX, борец с госбюрократией",
      "fr": "Entrepreneur technologique, PDG de Tesla et SpaceX, partisan de la dérégulation étatique"
    },
    "quote": {
      "pl": "„Wolność słowa jest fundamentem funkcjonującej demokracji. Regulacje duszą innowacje.”",
      "en": "“Free speech is the bedrock of a functioning democracy. Excessive regulation kills progress.”",
      "ru": "«Свобода слова — основа работающей демократии. Избыточные регуляции душат прогресс.»",
      "fr": "« La liberté d'expression est le socle d'une démocratie saine. La surrégulation étouffe l'innovation. »"
    },
    "whyVote": {
      "pl": "Oddałbyś na niego głos za bezwzględną walkę z państwową cenzurą, cięcie zbędnej biurokracji i wydatków rządowych (DOGE), komercyjny podbój kosmosu (SpaceX) i rewolucję aut elektrycznych.",
      "en": "You would vote for him for defending absolute free speech online, aggressive cuts to redundant federal bureaucracies, privatized space exploration (SpaceX), and accelerating sustainable technology.",
      "ru": "Вы бы проголосовали за него за защиту свободы слова от цензуры, радикальную оптимизацию госаппарата, частную космонавтику (SpaceX) и инновационный прорыв в электромобилях (Tesla).",
      "fr": "Vous voteriez pour lui pour la défense intransigeante de la liberté d'expression, la réduction drastique de la bureaucratie, la conquête spatiale privée (SpaceX) et la révolution technologique."
    },
    "coordinates": {
      "econ": 90,
      "soc": 35
    },
    "color": "#212121",
    "gradient": "linear-gradient(135deg, #212121, #000000)",
    "photoUrl": "https://thumb.wikimedia.org/wikipedia/commons/thumb/5/5e/Elon_Musk_-_54820081119_%28cropped%29.jpg/330px-Elon_Musk_-_54820081119_%28cropped%29.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail",
    "localPhoto": "assets/politicians/elon_musk.jpg",
    "countryCode": "us"
  },
  {
    "id": "otto_von_bismarck",
    "name": "Otto von Bismarck",
    "flag": "🇩🇪",
    "country": {
      "pl": "Niemcy (Cesarstwo Niemieckie)",
      "en": "Germany (German Empire)",
      "ru": "Германия (Германская империя)",
      "fr": "Allemagne (Empire allemand)"
    },
    "role": {
      "pl": "Pierwszy Kanclerz Rzeszy (1871–1890), „Żelazny Kanclerz”, architekt zjednoczenia Niemiec",
      "en": "First Chancellor of the German Empire (1871–1890), the 'Iron Chancellor', unifier of Germany",
      "ru": "Первый канцлер Германской империи (1871–1890), «Железный канцлер», объединитель Германии",
      "fr": "Premier chancelier impérial (1871–1890), le « Chancelier de fer », artisan de l'unité allemande"
    },
    "quote": {
      "pl": "„Wielkie kwestie epoki rozstrzyga się nie przemowami, lecz krwią i żelazem.”",
      "en": "“The great questions of the day will not be settled by speeches, but by blood and iron.”",
      "ru": "«Великие вопросы времени решаются не речами, а железом и кровью.»",
      "fr": "« Les grandes questions de notre temps ne se résoudront pas par des discours, mais par le fer et le sang. »"
    },
    "whyVote": {
      "pl": "Oddałbyś na niego głos za zjednoczenie Niemiec, stworzenie pierwszego na świecie powszechnego systemu ubezpieczeń zdrowotnych, wypadkowych i emerytur dla robotników oraz genialną dyplomację równowagi sił.",
      "en": "You would vote for him for unifying Germany, creating the world's first statutory modern social security and public healthcare safety net, and masterful balance-of-power Realpolitik.",
      "ru": "Вы бы проголосовали за него за объединение Германии «железом и кровью», введение первых в мировой истории государственных пенсий и медстрахования для рабочих и виртуозную дипломатию.",
      "fr": "Vous voteriez pour lui pour l'unification de l'Allemagne, la création pionnière du premier système de sécurité sociale et de retraite ouvrière au monde, et sa magistrale Realpolitik."
    },
    "coordinates": {
      "econ": -10,
      "soc": -75
    },
    "color": "#263238",
    "gradient": "linear-gradient(135deg, #263238, #102027)",
    "photoUrl": "https://thumb.wikimedia.org/wikipedia/commons/thumb/5/59/Otto_von_Bismarck_1885_%28cropped%29.jpg/330px-Otto_von_Bismarck_1885_%28cropped%29.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail",
    "localPhoto": "assets/politicians/otto_von_bismarck.jpg",
    "countryCode": "de"
  },
  {
    "id": "abraham_lincoln",
    "name": "Abraham Lincoln",
    "flag": "🇺🇸",
    "country": {
      "pl": "Stany Zjednoczone",
      "en": "United States",
      "ru": "США",
      "fr": "États-Unis"
    },
    "role": {
      "pl": "16. Prezydent USA (1861–1865), ocalił jedność Unii i zniósł niewolnictwo w Ameryce",
      "en": "16th US President (1861–1865), preserved the Union and abolished slavery via the 13th Amendment",
      "ru": "16-й Президент США (1861–1865), сохранил единство страны и отменил рабство",
      "fr": "16e Président des États-Unis (1861–1865), sauveur de l'Union et libérateur des esclaves"
    },
    "quote": {
      "pl": "„Rząd narodu, przez naród i dla narodu nie zniknie z powierzchni ziemi.”",
      "en": "“Government of the people, by the people, for the people, shall not perish from the earth.”",
      "ru": "«Власть народа, волей народа и для народа не исчезнет с лица земли.»",
      "fr": "« Le gouvernement du peuple, par le peuple, pour le peuple, ne disparaîtra pas de la terre. »"
    },
    "whyVote": {
      "pl": "Oddałbyś na niego głos za podpisanie Proklamacji Emancypacji, uchwalenie XIII Poprawki niszczącej niewolnictwo, uratowanie republiki przed rozpadem w wojnie secesyjnej i niezłomny humanizm.",
      "en": "You would vote for him for ending chattel slavery through the Emancipation Proclamation and 13th Amendment, defending the constitutional Union against secession, and immortal moral leadership.",
      "ru": "Вы бы проголосовали за него за Прокламацию об освобождении рабов и 13-ю поправку, победу в Гражданской войне, сохранение единства Союза и верность идеалам свободы человека.",
      "fr": "Vous voteriez pour lui pour la Proclamation d'émancipation et le 13e amendement abolissant l'esclavage, la préservation de la République dans la guerre de Sécession et sa grandeur morale."
    },
    "coordinates": {
      "econ": 15,
      "soc": 35
    },
    "color": "#424242",
    "gradient": "linear-gradient(135deg, #424242, #212121)",
    "photoUrl": "https://thumb.wikimedia.org/wikipedia/commons/thumb/a/ab/Abraham_Lincoln_O-77_matte_collodion_print.jpg/330px-Abraham_Lincoln_O-77_matte_collodion_print.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail",
    "localPhoto": "assets/politicians/abraham_lincoln.jpg",
    "countryCode": "us"
  },
  {
    "id": "theodore_roosevelt",
    "name": "Theodore Roosevelt",
    "flag": "🇺🇸",
    "country": {
      "pl": "Stany Zjednoczone",
      "en": "United States",
      "ru": "США",
      "fr": "États-Unis"
    },
    "role": {
      "pl": "26. Prezydent USA (1901–1909), twórca programu Square Deal i parków narodowych, noblista",
      "en": "26th US President (1901–1909), trust-buster, conservationist pioneer, Nobel Peace Laureate",
      "ru": "26-й Президент США (1901–1909), гроза монополий («Square Deal»), создатель национальных парков",
      "fr": "26e Président des États-Unis (1901–1909), briseur de trusts, pionnier des parcs nationaux, prix Nobel"
    },
    "quote": {
      "pl": "„Mów cicho i miej przy sobie gruby kij; zajdziesz daleko.”",
      "en": "“Speak softly and carry a big stick; you will go far.”",
      "ru": "«Говори мягко, но держи в руках большую дубинку; и ты далеко пойдешь.»",
      "fr": "« Parlez avec douceur, mais munissez-vous d'un gros bâton ; vous irez loin. »"
    },
    "whyVote": {
      "pl": "Oddałbyś na niego głos za bezwzględne rozbijanie szkodliwych monopoli korporacyjnych (trust-busting), program Square Deal, stworzenie 150 parków i rezerwatów przyrody oraz budowę Kanału Panamskiego.",
      "en": "You would vote for him for aggressively dismantling corporate monopolies (trust-busting), the Square Deal fair-play agenda, setting aside 230 million acres for federal conservation, and the Panama Canal.",
      "ru": "Вы бы проголосовали за него за разрушение монополий трестов, защиту прав потребителей (Square Deal), создание системы национальных природных заповедников и строительство Панамского канала.",
      "fr": "Vous voteriez pour lui pour son démantèlement des monopoles financiers abusifs, le programme d'équité Square Deal, la création pionnière des parcs nationaux et le canal de Panama."
    },
    "coordinates": {
      "econ": -15,
      "soc": -10
    },
    "color": "#558b2f",
    "gradient": "linear-gradient(135deg, #558b2f, #33691e)",
    "photoUrl": "https://thumb.wikimedia.org/wikipedia/commons/thumb/6/69/Theodore_Roosevelt_by_the_Pach_Bros_%284x5_cropped%29_%282%29.jpg/330px-Theodore_Roosevelt_by_the_Pach_Bros_%284x5_cropped%29_%282%29.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail",
    "localPhoto": "assets/politicians/theodore_roosevelt.jpg",
    "countryCode": "us"
  },
  {
    "id": "neville_chamberlain",
    "name": "Neville Chamberlain",
    "flag": "🇬🇧",
    "country": {
      "pl": "Wielka Brytania",
      "en": "United Kingdom",
      "ru": "Великобритания",
      "fr": "Royaume-Uni"
    },
    "role": {
      "pl": "Premier Wielkiej Brytanii (1937–1940), architekt polityki appeasementu w Monachium",
      "en": "Prime Minister of the UK (1937–1940), architect of Appeasement and crucial British rearmament",
      "ru": "Премьер-министр Великобритании (1937–1940), автор политики умиротворения агрессора",
      "fr": "Premier ministre du Royaume-Uni (1937–1940), artisan de la politique d'apaisement"
    },
    "quote": {
      "pl": "„Przywożę wam pokój dla naszych czasów (Peace for our time).”",
      "en": "“I believe it is peace for our time. Peace with honour.”",
      "ru": "«Я привёз мир нашему поколению.»",
      "fr": "« J'apporte la paix pour notre temps. Une paix dans l'honneur. »"
    },
    "whyVote": {
      "pl": "Oddałbyś na niego głos za usilną dyplomatyczną próbę uchronienia świata przed koszmarem nowej wojny światowej, połączoną z potajemnym przyspieszeniem zbrojeń lotniczych (myśliwce Spitfire i radar).",
      "en": "You would vote for him for seeking to spare humanity from a devastating second world war, while quietly using the bought time to accelerate RAF fighter command and radar rearmament.",
      "ru": "Вы бы проголосовали за него за искреннюю попытку предотвратить катастрофу новой мировой бойни и одновременное финансирование создания истребителей Spitfire и радаров ПВО.",
      "fr": "Vous voteriez pour lui pour sa volonté désespérée d'éviter le carnage d'un nouveau conflit mondial, tout en modernisant en urgence la défense aérienne (Spitfire et radars)."
    },
    "coordinates": {
      "econ": 25,
      "soc": -35
    },
    "color": "#616161",
    "gradient": "linear-gradient(135deg, #616161, #424242)",
    "photoUrl": "https://thumb.wikimedia.org/wikipedia/commons/thumb/d/de/Neville-Chamberlain.jpg/330px-Neville-Chamberlain.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail",
    "localPhoto": "assets/politicians/neville_chamberlain.jpg",
    "countryCode": "gb"
  },
  {
    "id": "konrad_adenauer",
    "name": "Konrad Adenauer",
    "flag": "🇩🇪",
    "country": {
      "pl": "Niemcy (RFN)",
      "en": "Germany (FRG)",
      "ru": "Германия (ФРГ)",
      "fr": "Allemagne (RFA)"
    },
    "role": {
      "pl": "Pierwszy Kanclerz RFN (1949–1963), współtwórca niemieckiego cudu gospodarczego",
      "en": "First Chancellor of West Germany (1949–1963), architect of the Wirtschaftswunder and Westintegration",
      "ru": "Первый канцлер ФРГ (1949–1963), архитектор «немецкого экономического чуда»",
      "fr": "Premier chancelier de la RFA (1949–1963), artisan du miracle économique allemand"
    },
    "quote": {
      "pl": "„Żadnych eksperymentów! (Keine Experimente).”",
      "en": "“No experiments! (Keine Experimente).”",
      "ru": "«Никаких экспериментов!»",
      "fr": "« Pas d'expériences ! (Keine Experimente). »"
    },
    "whyVote": {
      "pl": "Oddałbyś na niego głos za zbudowanie demokratycznej i bogatej RFN na gruzach wojny, model Społecznej Gospodarki Rynkowej (Ludwig Erhard), wejście do NATO i pojednanie z Francją.",
      "en": "You would vote for him for rebuilding democratic Germany from ashes, founding the Social Market Economy with Ludwig Erhard, anchoring West Germany in NATO, and historic reconciliation with France.",
      "ru": "Вы бы проголосовали за него за возрождение демократической Германии, модель социального рыночного хозяйства, вступление ФРГ в НАТО и историческое примирение с Францией.",
      "fr": "Vous voteriez pour lui pour la reconstruction démocratique de l'Allemagne, le modèle de l'économie sociale de marché, l'intégration à l'OTAN et la réconciliation historique franco-allemande."
    },
    "coordinates": {
      "econ": 35,
      "soc": -35
    },
    "color": "#303f9f",
    "gradient": "linear-gradient(135deg, #303f9f, #1a237e)",
    "photoUrl": "https://thumb.wikimedia.org/wikipedia/commons/thumb/8/86/Bundesarchiv_B_145_Bild-F078072-0004%2C_Konrad_Adenauer.jpg/330px-Bundesarchiv_B_145_Bild-F078072-0004%2C_Konrad_Adenauer.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail",
    "localPhoto": "assets/politicians/konrad_adenauer.jpg",
    "countryCode": "de"
  },
  {
    "id": "deng_xiaoping",
    "name": "Deng Xiaoping",
    "flag": "🇨🇳",
    "country": {
      "pl": "Chiny (ChRL)",
      "en": "China (PRC)",
      "ru": "Китай (КНР)",
      "fr": "Chine (RPC)"
    },
    "role": {
      "pl": "Przywódca ChRL (1978–1989/1992), architekt reform rynkowych i Otwarcia Chin",
      "en": "Paramount Leader of China (1978–1989/1992), architect of Market Reforms & Opening Up",
      "ru": "Фактический руководитель Китая (1978–1989/1992), архитектор политики реформ и открытости",
      "fr": "Dirigeant historique de la Chine (1978–1989/1992), architecte des réformes et de l'ouverture"
    },
    "quote": {
      "pl": "„Nieważne, czy kot jest czarny, czy biały – byle łapał myszy.”",
      "en": "“It doesn't matter whether a cat is black or white, as long as it catches mice.”",
      "ru": "«Не важно, черная кошка или белая, лишь бы она ловила мышей.»",
      "fr": "« Peu importe qu'un chat soit noir ou blanc, pourvu qu'il attrape les souris. »"
    },
    "whyVote": {
      "pl": "Oddałbyś na niego głos za odważne reformy rynkowe, które wyciągnęły 800 milionów ludzi z ubóstwa, stworzenie Specjalnych Stref Ekonomicznych (Shenzhen) i pragmatyczny rozwój gospodarczy.",
      "en": "You would vote for him for market reforms that lifted 800M people out of extreme poverty, launching Special Economic Zones (Shenzhen), attracting global capital, and rapid modernization.",
      "ru": "Вы бы проголосовали за него за внедрение рыночных стимулов, избавивших от нищеты 800 миллионов человек, создание специальных экономических зон и превращение Китая в индустриального гиганта.",
      "fr": "Vous voteriez pour lui pour les réformes de marché ayant sorti 800 millions de citoyens de l'extrême pauvreté, la création des zones franches (Shenzhen) et l'essor économique fulgurant."
    },
    "coordinates": {
      "econ": 35,
      "soc": -80
    },
    "color": "#bf360c",
    "gradient": "linear-gradient(135deg, #bf360c, #870000)",
    "photoUrl": "https://thumb.wikimedia.org/wikipedia/commons/thumb/d/dd/Deng_Xiaoping_at_the_arrival_ceremony_for_the_Vice_Premier_of_China_%28cropped%29.jpg/330px-Deng_Xiaoping_at_the_arrival_ceremony_for_the_Vice_Premier_of_China_%28cropped%29.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail",
    "localPhoto": "assets/politicians/deng_xiaoping.jpg",
    "countryCode": "cn"
  },
  {
    "id": "tony_blair",
    "name": "Tony Blair",
    "flag": "🇬🇧",
    "country": {
      "pl": "Wielka Brytania",
      "en": "United Kingdom",
      "ru": "Великобритания",
      "fr": "Royaume-Uni"
    },
    "role": {
      "pl": "Premier Wielkiej Brytanii (1997–2007), twórca New Labour i architekt Porozumienia Wielkopiątkowego",
      "en": "Prime Minister of the UK (1997–2007), leader of New Labour, architect of the Good Friday Agreement",
      "ru": "Премьер-министр Великобритании (1997–2007), создатель «Новых лейбористов» и Белфастского мира",
      "fr": "Premier ministre du Royaume-Uni (1997–2007), artisan du New Labour et des accords du Vendredi saint"
    },
    "quote": {
      "pl": "„Edukacja, edukacja, edukacja. Trzecia Droga łączy wolny rynek ze sprawiedliwością społeczną.”",
      "en": "“Education, education, education. A dynamic market economy married to a fair society.”",
      "ru": "«Образование, образование, образование. Третий путь объединяет рынок и социальную справедливость.»",
      "fr": "« L'éducation, l'éducation, l'éducation. Allier le dynamisme du marché à la justice sociale. »"
    },
    "whyVote": {
      "pl": "Oddałbyś na niego głos za historyczny pokój w Irlandii Północnej (Good Friday Agreement), wprowadzenie pierwszej w historii brytyjskiej płacy minimalnej i gigantyczne dofinansowanie NHS i szkół.",
      "en": "You would vote for him for ending decades of bloodshed in Northern Ireland with the Good Friday Agreement, introducing the UK's first National Minimum Wage, and record funding for the NHS.",
      "ru": "Вы бы проголосовали за него за прекращение многолетнего конфликта в Северной Ирландии (Соглашение Страстной пятницы), введение МРОТ в Великобритании и рекордные инвестиции в медицину.",
      "fr": "Vous voteriez pour lui pour l'accord de paix historique du Vendredi saint en Irlande du Nord, la création du salaire minimum légal et les investissements records dans le système de santé NHS."
    },
    "coordinates": {
      "econ": 20,
      "soc": 40
    },
    "color": "#7b1fa2",
    "gradient": "linear-gradient(135deg, #7b1fa2, #4a148c)",
    "photoUrl": "https://thumb.wikimedia.org/wikipedia/commons/thumb/3/39/Tony_Blair_%282010%29.jpg/330px-Tony_Blair_%282010%29.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail",
    "localPhoto": "assets/politicians/tony_blair.jpg",
    "countryCode": "gb"
  },
  {
    "id": "silvio_berlusconi",
    "name": "Silvio Berlusconi",
    "flag": "🇮🇹",
    "country": {
      "pl": "Włochy",
      "en": "Italy",
      "ru": "Италия",
      "fr": "Italie"
    },
    "role": {
      "pl": "Premier Włoch (1994–1995, 2001–2006, 2008–2011), magnat medialny, lider partii Forza Italia",
      "en": "Prime Minister of Italy (1994–1995, 2001–2006, 2008–2011), media tycoon, leader of Forza Italia",
      "ru": "Премьер-министр Италии (1994–1995, 2001–2006, 2008–2011), медиамагнат, лидер партии «Вперёд, Италия»",
      "fr": "Président du Conseil italien (1994–1995, 2001–2006, 2008–2011), magnat des médias, chef de Forza Italia"
    },
    "quote": {
      "pl": "„Zawsze wygrywałem w życiu i biznesie, bo wierzę w siłę wolności i przedsiębiorczości.”",
      "en": "“Freedom is the breath of the soul. Entrepreneurship is the motor of civilization.”",
      "ru": "«Я всегда побеждал в жизни и бизнесе, потому что верю в силу предпринимательской свободы.»",
      "fr": "« J'ai toujours triomphé dans les affaires et en politique grâce à la foi en la liberté d'entreprendre. »"
    },
    "whyVote": {
      "pl": "Oddałbyś na niego głos za obniżanie podatków dochodowych, walkę z biurokracją państwową, obronę wolności prywatnej własności i powstrzymanie dojścia do władzy postkomunistycznej lewicy.",
      "en": "You would vote for him for corporate tax cuts, cutting administrative burdens on small businesses, defending private commercial enterprise, and charismatic center-right coalition politics.",
      "ru": "Вы бы проголосовали за него за снижение налогов, дерегуляцию частного бизнеса, борьбу с неповоротливой государственной машиной и недопущение к власти левых партий.",
      "fr": "Vous voteriez pour lui pour ses allègements fiscaux sur les entreprises, la défense du secteur privé contre l'étatisme, et la constitution d'un grand pôle libéral et conservateur."
    },
    "coordinates": {
      "econ": 65,
      "soc": -40
    },
    "color": "#00897b",
    "gradient": "linear-gradient(135deg, #00897b, #004d40)",
    "photoUrl": "https://thumb.wikimedia.org/wikipedia/commons/thumb/0/01/Silvio_Berlusconi_%282010%29_cropped.jpg/330px-Silvio_Berlusconi_%282010%29_cropped.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail",
    "localPhoto": "assets/politicians/silvio_berlusconi.jpg",
    "countryCode": "it"
  },
  {
    "id": "alexandria_ocasio_cortez",
    "name": "Alexandria Ocasio-Cortez",
    "flag": "🇺🇸",
    "country": {
      "pl": "Stany Zjednoczone",
      "en": "United States",
      "ru": "США",
      "fr": "États-Unis"
    },
    "role": {
      "pl": "Kongresmenka USA z Nowego Jorku, liderka frakcji „The Squad” i Demokratycznych Socjalistów",
      "en": "US Congresswoman (NY-14), leader of 'The Squad' and the Democratic Socialists of America",
      "ru": "Член Палаты представителей США от Нью-Йорка, лидер левого прогрессивного крыла («The Squad»)",
      "fr": "Représentante des États-Unis (New York), figure de proue de la gauche socialiste démocrate"
    },
    "quote": {
      "pl": "„W zamożnym społeczeństwie nikt nie powinien być zbyt biedny, by żyć w godności i zdrowiu.”",
      "en": "“In a wealthy nation, no person should be too poor to live with dignity, healthcare, and a home.”",
      "ru": "«В богатой стране ни один человек не должен быть слишком беден, чтобы жить достойно.»",
      "fr": "« Dans une nation riche, personne ne devrait être trop pauvre pour vivre décemment et se soigner. »"
    },
    "whyVote": {
      "pl": "Oddałbyś na nią głos za sztandarowy projekt Green New Deal (zielona transformacja z gwarancją pracy), walkę o bezpłatne studia publiczne, opodatkowanie miliarderów i powszechną opiekę medyczną (Medicare for All).",
      "en": "You would vote for her for authoring the Green New Deal resolution, fighting for Medicare for All, tuition-free higher education, raising top tax rates on extreme wealth, and workers' rights.",
      "ru": "Вы бы проголосовали за неё за резолюцию «Нового зеленого курса», всеобщее здравоохранение Medicare for All, бесплатное высшее образование и налог на сверхбогатых миллиардеров.",
      "fr": "Vous voteriez pour elle pour son projet pionnier du Green New Deal créateur d'emplois verts, l'assurance santé universelle (Medicare for All) et la taxation des supermilliardaires."
    },
    "coordinates": {
      "econ": -80,
      "soc": 85
    },
    "color": "#7cb342",
    "gradient": "linear-gradient(135deg, #7cb342, #558b2f)",
    "photoUrl": "https://thumb.wikimedia.org/wikipedia/commons/thumb/4/4a/Alexandria_Ocasio-Cortez_Official_Portrait.jpg/330px-Alexandria_Ocasio-Cortez_Official_Portrait.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail",
    "localPhoto": "assets/politicians/alexandria_ocasio_cortez.jpg",
    "countryCode": "us"
  },
  {
    "id": "marine_le_pen",
    "name": "Marine Le Pen",
    "flag": "🇫🇷",
    "country": {
      "pl": "Francja",
      "en": "France",
      "ru": "Франция",
      "fr": "France"
    },
    "role": {
      "pl": "Liderka Zjednoczenia Narodowego (Rassemblement National), kandydatka prezydencka",
      "en": "Leader of the National Rally (Rassemblement National), multi-time presidential contender",
      "ru": "Лидер партии «Национальное объединение» (Rassemblement National), кандидат в президенты",
      "fr": "Dirigeante du Rassemblement National, députée et finaliste des élections présidentielles"
    },
    "quote": {
      "pl": "„Francja dla Francuzów. Naród jest jedyną prawdziwą ochroną przed dziką globalizacją.”",
      "en": "“The nation is the only protective framework for citizens against runaway globalization.”",
      "ru": "«Нация — единственная надежная защита граждан от дикой глобализации и открытых границ.»",
      "fr": "« La nation est le seul cadre protecteur du peuple face à la mondialisation sauvage. »"
    },
    "whyVote": {
      "pl": "Oddałbyś na nią głos za zasadę pierwszeństwa narodowego w pracy i zasiłkach, bezwzględne powstrzymanie masowej imigracji, obniżenie VAT na prąd i paliwa oraz odzyskanie suwerenności z rąk Brukseli.",
      "en": "You would vote for her for national priority in employment and social housing, curbing mass immigration, lowering energy VAT for households, and reasserting French sovereign independence.",
      "ru": "Вы бы проголосовали за неё за национальный приоритет для граждан Франции, жесткий запрет массовой миграции, снижение цен на энергоносители и возврат суверенитета от ЕС.",
      "fr": "Vous voteriez pour elle pour la priorité nationale pour le logement et l'emploi, le coup d'arrêt à l'immigration massive, la baisse de la TVA sur l'énergie et la souveraineté républicaine."
    },
    "coordinates": {
      "econ": -15,
      "soc": -80
    },
    "color": "#0d47a1",
    "gradient": "linear-gradient(135deg, #0d47a1, #002171)",
    "photoUrl": "https://thumb.wikimedia.org/wikipedia/commons/thumb/f/f0/Marine_Le_Pen_2025_%283x4_cropped%29.jpg/330px-Marine_Le_Pen_2025_%283x4_cropped%29.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail",
    "localPhoto": "assets/politicians/marine_le_pen.jpg",
    "countryCode": "fr"
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
    "color": "#eab308",
    "gradient": "linear-gradient(135deg, #eab308, #ca8a04)",
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
    "color": "#f59e0b",
    "gradient": "linear-gradient(135deg, #f59e0b, #d97706)",
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
    "color": "#ef4444",
    "gradient": "linear-gradient(135deg, #ef4444, #dc2626)",
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
    "color": "#10b981",
    "gradient": "linear-gradient(135deg, #10b981, #059669)",
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
    "color": "#2563eb",
    "gradient": "linear-gradient(135deg, #2563eb, #1d4ed8)",
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
    "color": "#0284c7",
    "gradient": "linear-gradient(135deg, #0284c7, #0369a1)",
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
    "color": "#dc2626",
    "gradient": "linear-gradient(135deg, #dc2626, #991b1b)",
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
    "color": "#8b5cf6",
    "gradient": "linear-gradient(135deg, #8b5cf6, #7c3aed)",
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
    "color": "#7c3aed",
    "gradient": "linear-gradient(135deg, #7c3aed, #6d28d9)",
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
    "color": "#b45309",
    "gradient": "linear-gradient(135deg, #b45309, #78350f)",
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
    "color": "#374151",
    "gradient": "linear-gradient(135deg, #4b5563, #1f2937)",
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
    "color": "#0f766e",
    "gradient": "linear-gradient(135deg, #0f766e, #115e59)",
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
    "color": "#b91c1c",
    "gradient": "linear-gradient(135deg, #b91c1c, #7f1d1d)",
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
    "color": "#991b1b",
    "gradient": "linear-gradient(135deg, #991b1b, #7f1d1d)",
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
    "color": "#059669",
    "gradient": "linear-gradient(135deg, #059669, #047857)",
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
  },
  {
    "id": "communist_imcwp",
    "name": {
      "pl": "Międzynarodowe Spotkanie Partii Komunistycznych i Robotniczych (IMCWP / Solidnet)",
      "en": "International Meeting of Communist & Workers' Parties (IMCWP / Solidnet)",
      "ru": "Международная встреча коммунистических и рабочих партий (IMCWP)",
      "fr": "Rencontre internationale des partis communistes et ouvriers (IMCWP)"
    },
    "emblem": "☭",
    "color": "#be123c",
    "gradient": "linear-gradient(135deg, #be123c, #9f1239)",
    "type": {
      "pl": "Globalna koalicja tradycyjnych partii komunistycznych i marksistowsko-leninowskich",
      "en": "Global coalition of traditional communist and Marxist-Leninist parties",
      "ru": "Всемирная коалиция традиционных коммунистических и марксистско-ленинских партий",
      "fr": "Coalition mondiale des partis communistes et marxistes-léninistes traditionnels"
    },
    "manifesto": {
      "pl": "Obalenie dominacji kapitału, rewolucyjna walka klas, nacjonalizacja przemysłu i banków, gospodarka planowa, antyimperializm oraz solidarność proletariacka na całym świecie.",
      "en": "Overcoming capitalist exploitation, revolutionary class struggle, public ownership of industry and banking, planned economy, anti-imperialism, and proletarian solidarity.",
      "ru": "Преодоление диктата капитала, классовая борьба, национализация промышленности и банков, плановая экономика, антиимпериализм и пролетарская солидарность.",
      "fr": "Dépassement du capitalisme, lutte des classes, nationalisation de l'industrie et des banques, planification économique, anti-impérialisme et solidarité prolétarienne."
    },
    "coordinates": {
      "econ": -96,
      "soc": -85
    }
  },
  {
    "id": "ecr_alliance",
    "name": {
      "pl": "Europejscy Konserwatyści i Reformatorzy (ECR / Sojusz Konserwatywny)",
      "en": "European Conservatives and Reformists (ECR / Global Alliance)",
      "ru": "Европейские консерваторы и реформисты (ECR / Альянс консерваторов)",
      "fr": "Conservateurs et réformistes européens (ECR / Alliance conservatrice)"
    },
    "emblem": "🏛️",
    "color": "#0369a1",
    "gradient": "linear-gradient(135deg, #0369a1, #075985)",
    "type": {
      "pl": "Transnarodowy sojusz partii wolnorynkowych, suwerennościowych i konserwatywnych",
      "en": "Transnational alliance of free-market, sovereignist, and conservative parties",
      "ru": "Транснациональный альянс рыночных, суверенных и консервативных партий",
      "fr": "Alliance transnationale des partis pro-marché, souverainistes et conservateurs"
    },
    "manifesto": {
      "pl": "Europa Ojczyzn przeciwko centralizmowi Brukseli, wolność gospodarcza, niskie podatki, obrona tradycyjnych wartości, silny sojusz atlantycki z USA oraz twarda ochrona granic.",
      "en": "A Europe of sovereign nations against superstate centralization, free enterprise, low taxes, defense of traditional cultural values, strong transatlantic ties, and firm borders.",
      "ru": "Европа отечеств против бюрократической сверхдержавы, свободный рынок, низкие налоги, защита традиционных ценностей, атлантический союз и контроль границ.",
      "fr": "L'Europe des nations contre le fédéralisme centralisateur, liberté d'entreprise, baisse d'impôts, valeurs traditionnelles, alliance atlantique forte et frontières sûres."
    },
    "coordinates": {
      "econ": 55,
      "soc": -70
    }
  },
  {
    "id": "anarchosyndicalist_iwa",
    "name": {
      "pl": "Międzynarodowe Stowarzyszenie Pracowników (IWA-AIT / Anarchosyndykalizm)",
      "en": "International Workers' Association (IWA-AIT / Anarcho-Syndicalism)",
      "ru": "Международная ассоциация трудящихся (МАТ-AIT / Анархо-синдикализм)",
      "fr": "Association internationale des travailleurs (AIT / Anarcho-syndicalisme)"
    },
    "emblem": "🏴",
    "color": "#18181b",
    "gradient": "linear-gradient(135deg, #27272a, #09090b)",
    "type": {
      "pl": "Światowa konfederacja wolnościowych związków zawodowych i komun robotniczych",
      "en": "Global confederation of revolutionary unionists and libertarian workers' collectives",
      "ru": "Всемирная конфедерация революционных синдикатов и рабочих коммун",
      "fr": "Confédération mondiale des syndicats révolutionnaires et collectifs autogérés"
    },
    "manifesto": {
      "pl": "Bezpośrednia akcja robotnicza, strajk generalny, likwidacja państwa i kapitalizmu, samorządność pracownicza w fabrykach i całkowite zastąpienie hierarchii federacją wolnych związków.",
      "en": "Direct worker action, general strike, abolishing state and wage labor, worker self-management of workplaces, and organizing society through federated free unions.",
      "ru": "Прямое действие, всеобщая забастовка, ликвидация государства и наемного труда, рабочее самоуправление на предприятиях и власть свободных союзов.",
      "fr": "Action directe, grève générale expropriatrice, abolition du salariat et de l'État, autogestion ouvrière et société fédérée sans hiérarchie."
    },
    "coordinates": {
      "econ": -92,
      "soc": 82
    }
  },
  {
    "id": "transhumanist_humanity_plus",
    "name": {
      "pl": "Światowy Ruch Transhumanistyczny i Techno-Progresywny (Humanity+)",
      "en": "World Transhumanist & Techno-Progressive Movement (Humanity+)",
      "ru": "Всемирное трансгуманистическое и техно-прогрессивное движение (Humanity+)",
      "fr": "Mouvement mondial transhumaniste et techno-progressiste (Humanity+)"
    },
    "emblem": "🧬",
    "color": "#06b6d4",
    "gradient": "linear-gradient(135deg, #06b6d4, #0891b2)",
    "type": {
      "pl": "Globalna sieć na rzecz postępu technologicznego, biotechnologii, AI i wolności morfologicznej",
      "en": "Global network for radical technological progress, biotechnology, AI, and morphological liberty",
      "ru": "Всемирная сеть за ускорение науки, биотехнологии, ИИ и свободу модификации человека",
      "fr": "Réseau mondial pour l'accélération technologique, les biotechnologies, l'IA et la liberté morphologique"
    },
    "manifesto": {
      "pl": "Wsparcie badań nad sztuczną inteligencją, inżynierią genetyczną i przedłużaniem ludzkiego życia, cyfryzacja społeczeństwa, racjonalizm naukowy, kolonizacja kosmosu i prawo do biologicznego samostanowienia.",
      "en": "Advancing AI, genetic therapies, and longevity science, digital democracy, scientific rationalism, space exploration, and unconditional morphological freedom for individuals.",
      "ru": "Развитие ИИ, генной инженерии и долголетия, цифровая демократия, научный рационализм, освоение космоса и свобода модификации тела.",
      "fr": "Promotion de l'IA, de la génétique et de la longévité, démocratie numérique, rationalisme scientifique, exploration spatiale et liberté morphologique."
    },
    "coordinates": {
      "econ": 45,
      "soc": 85
    }
  },
  {
    "id": "mont_pelerin_atlas",
    "name": {
      "pl": "Globalny Sojusz Wolnorynkowy (Atlas Network & Mont Pèlerin Society)",
      "en": "Global Free Market Coalition (Atlas Network & Mont Pèlerin Society)",
      "ru": "Глобальная коалиция свободного рынка (Сеть Atlas и Общество Мон Пелерин)",
      "fr": "Coalition mondiale du libre marché (Réseau Atlas & Société du Mont Pèlerin)"
    },
    "emblem": "📈",
    "color": "#d97706",
    "gradient": "linear-gradient(135deg, #d97706, #b45309)",
    "type": {
      "pl": "Międzynarodowa sieć think-tanków, partii i liderów szkoły austriackiej oraz chicagowskiej",
      "en": "Worldwide network of free-market think-tanks, classical liberal leaders, and deregulation advocates",
      "ru": "Всемирная сеть институтов свободного рынка, дерегуляции и австрийской школы",
      "fr": "Réseau mondial de think-tanks libéraux, partisans de la dérégulation et de l'école autrichienne"
    },
    "manifesto": {
      "pl": "Nieskrępowana konkurencja rynkowa, radykalne cięcia podatków i wydatków państwa, obrona stabilnego pieniądza, globalny wolny handel oraz ochrona przedsiębiorczości przed biurokracją.",
      "en": "Unchecked market competition, sweeping cuts to taxation and state expenditure, sound money, global multilateral free trade, and shielding entrepreneurship from bureaucratic overreach.",
      "ru": "Свободная конкуренция, снижение налогов и госрасходов, устойчивая валюта, открытая торговля и защита бизнеса от чиновничьего диктата.",
      "fr": "Concurrence marchande libre, coupes budgétaires massives, monnaie saine, libre-échange mondial et protection des créateurs de richesse contre la bureaucratie."
    },
    "coordinates": {
      "econ": 85,
      "soc": 20
    }
  },
  {
    "id": "non_aligned_movement",
    "name": {
      "pl": "Ruch Państw Niezaangażowanych i Suwerenności Południa (NAM)",
      "en": "Non-Aligned Movement & Global South Sovereignty (NAM)",
      "ru": "Движение неприсоединения и суверенитета Глобального Юга (NAM)",
      "fr": "Mouvement des pays non-alignés et souveraineté du Sud (MNA)"
    },
    "emblem": "🌍",
    "color": "#0d9488",
    "gradient": "linear-gradient(135deg, #0d9488, #0f766e)",
    "type": {
      "pl": "Globalna koalicja na rzecz wielobiegunowości, antykolonializmu i niezależności od mocarstw",
      "en": "Global coalition championing multipolarity, anti-colonialism, and neutrality from superpowers",
      "ru": "Глобальная коалиция за многополярность, антиколониализм и независимость от сверхдержав",
      "fr": "Coalition mondiale pour la multipolarité, l'anti-colonialisme et la neutralité face aux blocs"
    },
    "manifesto": {
      "pl": "Sprzeciw wobec hegemonii militarnych bloków, szacunek dla suwerenności narodowej, sprawiedliwy podział zasobów globu, niezaangażowanie w wojny mocarstw i samostanowienie narodów.",
      "en": "Resistance against military block hegemony, unconditional respect for national sovereignty, fair sharing of global resources, military neutrality, and genuine self-determination.",
      "ru": "Отказ от участия в военных блоках, уважение суверенитета, справедливое распределение мировых ресурсов, нейтралитет и право народов на развитие.",
      "fr": "Refus de l'alignement sur les blocs militaires, respect du droit à l'autodétermination, justice économique internationale et souveraineté populaire."
    },
    "coordinates": {
      "econ": -35,
      "soc": -10
    }
  },
  {
    "id": "cpac_national_populists",
    "name": {
      "pl": "Światowa Sieć Narodowo-Populistyczna (Global CPAC & America First)",
      "en": "Global National-Populist Network (CPAC & Patriots First)",
      "ru": "Всемирная национал-популистская сеть (CPAC и Суверенный патриотизм)",
      "fr": "Réseau national-populiste mondial (CPAC & Les Patriotes d'abord)"
    },
    "emblem": "🦁",
    "color": "#ea580c",
    "gradient": "linear-gradient(135deg, #ea580c, #c2410c)",
    "type": {
      "pl": "Międzynarodowy ruch obrony granic, tożsamości i suwerenności ludu przed elitami globalistycznymi",
      "en": "International coalition fighting globalist elites, open borders, and progressive cultural diktats",
      "ru": "Международное движение против глобалистских элит, за закрытие границ и национальный суверенитет",
      "fr": "Mouvement international luttant contre les élites mondialistes, l'immigration de masse et le déracinement"
    },
    "manifesto": {
      "pl": "Prymat narodu i obywateli nad międzynarodowymi korporacjami (WEF, WHO), twarde mury graniczne, reindustrializacja kraju, obrona tożsamości kulturowej i walka z ideologią woke.",
      "en": "Primacy of citizens over globalist institutions (WEF, WHO), fortified borders, domestic reindustrialization, cultural preservation, and resisting woke orthodoxy.",
      "ru": "Приоритет граждан над международными структурами (ВЭФ, ВОЗ), жесткие границы, реиндустриализация, сбережение традиций и борьба с навязанными догмами.",
      "fr": "Primauté du peuple sur les oligarchies mondialistes (WEF, OMS), frontières infranchissables, réindustrialisation nationale et défense de la civilisation."
    },
    "coordinates": {
      "econ": 40,
      "soc": -85
    }
  },
  {
    "id": "foro_sao_paulo_puebla",
    "name": {
      "pl": "Grupa Puebla & Forum São Paulo (Socjalizm XXI Wieku)",
      "en": "Puebla Group & São Paulo Forum (21st Century Socialism)",
      "ru": "Группа Пуэбла и Форум Сан-Паулу (Социализм XXI века)",
      "fr": "Groupe de Puebla & Forum de São Paulo (Socialisme du XXIe siècle)"
    },
    "emblem": "⭐️",
    "color": "#e11d48",
    "gradient": "linear-gradient(135deg, #e11d48, #be123c)",
    "type": {
      "pl": "Międzynarodowa koalicja lewicy antyneoliberalnej i suwerenności zasobów naturalnych",
      "en": "International coalition of anti-neoliberal leftists, indigenous leaders, and social reformers",
      "ru": "Международная коалиция латиноамериканских и мировых левых антинеолиберальных сил",
      "fr": "Coalition internationale de la gauche anti-néolibérale et des mouvements populaires"
    },
    "manifesto": {
      "pl": "Państwowa kontrola surowców naturalnych, wielkie transfery socjalne do najuboższych, integracja regionalna Globalnego Południa, walka z dominacją dolara i uniezależnienie od MFW.",
      "en": "State sovereignty over strategic natural resources, expansive welfare safety nets, Global South economic integration, dedollarization, and emancipation from IMF austerity.",
      "ru": "Госконтроль над недрами, масштабные социальные программы для бедных, интеграция Юга, дедолларизация и освобождение от диктата МВФ.",
      "fr": "Contrôle étatique des ressources stratégiques, programmes sociaux universels, intégration économique du Sud et rupture avec l'austérité du FMI."
    },
    "coordinates": {
      "econ": -75,
      "soc": 10
    }
  },
  {
    "id": "monarchist_league",
    "name": {
      "pl": "Międzynarodowa Liga Tradycjonalistyczna i Monarchistyczna (IML)",
      "en": "International Monarchist & Traditionalist League (IML)",
      "ru": "Международная монархическая и традиционалистская лига (IML)",
      "fr": "Ligue monarchiste et traditionaliste internationale (LMI)"
    },
    "emblem": "👑",
    "color": "#7c2d12",
    "gradient": "linear-gradient(135deg, #7c2d12, #581c87)",
    "type": {
      "pl": "Światowy ruch na rzecz ładu koronnego, ciągłości historycznej i tradycyjnego autorytetu",
      "en": "Worldwide movement advocating constitutional or traditional monarchy, duty, and organic social hierarchy",
      "ru": "Всемирное движение за монархический порядок, историческую преемственность и традиционный авторитет",
      "fr": "Mouvement mondial pour l'ordre monarchique, la continuité historique et l'autorité légitime"
    },
    "manifesto": {
      "pl": "Głowa państwa stojąca ponad partyjnymi kłótniami, szacunek dla wielowiekowej tradycji i wiary, ład hierarchiczny oparty na poczuciu obowiązku oraz stabilność ustrojowa.",
      "en": "A non-partisan hereditary crown above electoral turmoil, organic cultural continuity, deep spiritual heritage, civic duty, and timeless constitutional stability.",
      "ru": "Монарх превыше партийных распрей, верность вековым традициям и вере, органическая иерархия служения и нерушимая стабильность государства.",
      "fr": "Un souverain au-dessus des querelles électoralistes, respect de la transcendance et de l'histoire, devoir civique et stabilité institutionnelle durable."
    },
    "coordinates": {
      "econ": 25,
      "soc": -95
    }
  },
  {
    "id": "degrowth_postgrowth_intl",
    "name": {
      "pl": "Światowy Sojusz Post-Wzrostu i Zrównoważenia (Degrowth / Post-Growth)",
      "en": "Global Post-Growth & Degrowth Network",
      "ru": "Глобальная сеть антироста и устойчивого достатка (Degrowth)",
      "fr": "Réseau mondial de la décroissance et de la post-croissance"
    },
    "emblem": "🔄",
    "color": "#047857",
    "gradient": "linear-gradient(135deg, #047857, #065f46)",
    "type": {
      "pl": "Międzynarodowy ruch na rzecz redukcji nadkonsumpcji, lokalności i ekologicznego umiaru",
      "en": "Planetary movement advocating planned downscaling of consumption, localized care economies, and circular sustainability",
      "ru": "Международное движение за осознанное снижение сверхпотребления, локальную экономику и баланс с природой",
      "fr": "Mouvement international pour la réduction planifiée de la surconsommation, l'économie du soin et la sobriété heureuse"
    },
    "manifesto": {
      "pl": "Odejście od dogmatu wiecznego wzrostu PKB, skrócenie czasu pracy, gospodarka obiegu zamkniętego, zakaz planowanego postarzania produktów i harmonia z granicami biosfery.",
      "en": "Abandoning GDP growth fetishism, 3-day workweeks, circular zero-waste production, banning planned obsolescence, and living within planetary ecological boundaries.",
      "ru": "Отказ от культа роста ВВП, сокращение рабочей недели, экономика замкнутого цикла, запрет запланированного устаревания и сохранение биосферы.",
      "fr": "Sortie du dogme de la croissance du PIB, réduction du temps de travail, économie circulaire, interdiction de l'obsolescence programmée et respect de la Terre."
    },
    "coordinates": {
      "econ": -68,
      "soc": 85
    }
  },
  {
    "id": "indigenous_abya_yala",
    "name": {
      "pl": "Światowy Sojusz Ludów Rdzennych i Praw Ziemi (Abya Yala / First Nations)",
      "en": "Global Alliance of Indigenous Peoples & Earth Rights (First Nations)",
      "ru": "Всемирный альянс коренных народов и прав Земли (First Nations)",
      "fr": "Alliance mondiale des peuples autochtones et des droits de la Terre"
    },
    "emblem": "🪶",
    "color": "#15803d",
    "gradient": "linear-gradient(135deg, #15803d, #166534)",
    "type": {
      "pl": "Międzynarodowa federacja wspólnot tubylczych, filozofii Buen Vivir i dekolonizacji",
      "en": "Worldwide indigenous network championing Buen Vivir (Sumak Kawsay), decolonization, and legal rights for nature",
      "ru": "Международная сеть коренных общин, философии гармонии с природой и деколонизации",
      "fr": "Réseau mondial autochtone défendant le Buen Vivir, la décolonisation et la personnalité juridique de la nature"
    },
    "manifesto": {
      "pl": "Prawne uznanie praw Matki Ziemi (Pachamama), ochrona świętych terytoriów przed wyzyskiem korporacji surowcowych, komunalne zarządzanie dobrami i mądrość przodków.",
      "en": "Constitutional rights for ecosystems, safeguarding ancestral territories from extractivist exploitation, communal stewardship of commons, and indigenous self-governance.",
      "ru": "Юридические права природы, защита священных земель от хищнической добычи ресурсов, общинное самоуправление и мудрость предков.",
      "fr": "Droits juridiques de la Terre Mère, sanctuarisation des terres ancestrales face aux multinationales et gouvernance communautaire partagée."
    },
    "coordinates": {
      "econ": -72,
      "soc": 75
    }
  },
  {
    "id": "pro_family_christian_right",
    "name": {
      "pl": "Światowa Koalicja na rzecz Rodziny i Etyki Tradycyjnej (World Family Alliance)",
      "en": "World Alliance for the Family & Traditional Ethics",
      "ru": "Всемирный альянс защиты семьи и традиционной этики",
      "fr": "Alliance mondiale pour la famille et l'éthique traditionnelle"
    },
    "emblem": "✝️",
    "color": "#4338ca",
    "gradient": "linear-gradient(135deg, #4338ca, #3730a3)",
    "type": {
      "pl": "Międzynarodowy ruch obrony prawa naturalnego, tradycyjnego małżeństwa i praw rodzicielskich",
      "en": "International pro-family coalition defending natural law, parental rights, and faith-based values",
      "ru": "Международная коалиция в защиту естественного права, семьи и родительских прав",
      "fr": "Coalition internationale pour la défense de la famille naturelle, des droits des parents et de la foi"
    },
    "manifesto": {
      "pl": "Ochrona życia od poczęcia, pierwszeństwo rodziców w wychowaniu dzieci przed szkołą i państwem, obrona wolności sumienia oraz sprzeciw wobec relatywizmu moralnego.",
      "en": "Inviolable right to life from conception, parental primacy in children's education, religious conscience protections, and upholding the timeless moral foundation of society.",
      "ru": "Защита жизни с момента зачатия, безусловный приоритет родителей в воспитании детей, свобода совести и сохранение духовных устоев.",
      "fr": "Protection absolue de la vie dès la conception, primauté des parents dans l'instruction de leurs enfants et respect de la liberté religieuse."
    },
    "coordinates": {
      "econ": 15,
      "soc": -92
    }
  },
  {
    "id": "via_campesina_agrarian",
    "name": {
      "pl": "Międzynarodowy Ruch Obrony Wsi i Suwerenności Żywnościowej (La Vía Campesina)",
      "en": "International Peasant Movement & Food Sovereignty (La Vía Campesina)",
      "ru": "Международное крестьянское движение и продовольственный суверенитет (La Vía Campesina)",
      "fr": "Mouvement paysan international et souveraineté alimentaire (La Vía Campesina)"
    },
    "emblem": "🌾",
    "color": "#ca8a04",
    "gradient": "linear-gradient(135deg, #ca8a04, #a16207)",
    "type": {
      "pl": "Globalna federacja małych i średnich rolników, spółdzielców rolnych i obrońców wsi",
      "en": "Global federation of family farmers, agrarian cooperatives, and rural community defenders",
      "ru": "Всемирная федерация семейных фермеров, сельхозкооперативов и защитников деревни",
      "fr": "Fédération mondiale des paysans, coopératives agricoles et communautés rurales"
    },
    "manifesto": {
      "pl": "Suwerenność żywnościowa każdego narodu, zakaz spekulacji żywnością, ochrona rodzinnych gospodarstw przed agro-koncernami, wolność tradycyjnych nasion i sprawiedliwe ceny skupu.",
      "en": "Food sovereignty for every society, banning financial speculation on basic crops, shielding family farms from agribusiness monopolies, and seed-saving freedom.",
      "ru": "Продовольственный суверенитет народов, запрет биржевых спекуляций едой, защита фермеров от агрогигантов и свобода семеноводства.",
      "fr": "Souveraineté alimentaire des peuples, interdiction de la spéculation sur les denrées vitales, protection des fermes familiales et liberté des semences paysannes."
    },
    "coordinates": {
      "econ": -40,
      "soc": -35
    }
  },
  {
    "id": "humanist_intl",
    "name": {
      "pl": "Międzynarodówka Humanistyczna (Humanists International)",
      "en": "Humanists International (Global Secular Humanism)",
      "ru": "Гуманистический интернационал (Humanists International)",
      "fr": "Humanistes Internationaux (Humanisme laïque mondial)"
    },
    "emblem": "🕊️",
    "color": "#f97316",
    "gradient": "linear-gradient(135deg, #f97316, #ea580c)",
    "type": {
      "pl": "Światowy ruch na rzecz świeckości państwa, racjonalizmu, praw człowieka i pacyfizmu",
      "en": "Global organization for secularism, human rights, non-theistic ethics, and scientific inquiry",
      "ru": "Всемирное объединение за светское государство, права человека, научный гуманизм и мир",
      "fr": "Mouvement mondial pour la laïcité, les droits humains, la raison et l'éthique universelle"
    },
    "manifesto": {
      "pl": "Całkowity rozdział religii od państwa i prawodawstwa, obrona wolności myśli i słowa, etyka oparta na empatii i rozumie, edukacja krytyczna oraz globalna walka z fanatyzmem.",
      "en": "Strict separation of church and state, universal freedom of thought and expression, empathy-based ethics, science education, and global eradication of dogmatism.",
      "ru": "Полное отделение церкви от государства, свобода совести и слова, гуманистическая этика разума, научное образование и борьба с фундаментализмом.",
      "fr": "Séparation stricte de l'Église et de l'État, liberté de conscience et d'expression, morale laïque fondée sur la raison et lutte contre le fanatisme."
    },
    "coordinates": {
      "econ": -30,
      "soc": 72
    }
  },
  {
    "id": "democratic_leadership_center",
    "name": {
      "pl": "Koalicja Pragmatycznego Centrum i Nowoczesnych Reform (Global Center Alliance)",
      "en": "Global Center Alliance (Pragmatic Reformers & Modern Governance)",
      "ru": "Глобальный альянс прагматического центра и современных реформ",
      "fr": "Alliance mondiale du centre pragmatique et des réformes modernes"
    },
    "emblem": "🧭",
    "color": "#0ea5e9",
    "gradient": "linear-gradient(135deg, #0ea5e9, #0284c7)",
    "type": {
      "pl": "Ruch rządzenia opartego na dowodach, umiarkowaniu fiskalnym i innowacjach społecznych",
      "en": "Coalition for evidence-based policymaking, fiscal sustainability, and inclusive market modernization",
      "ru": "Коалиция взвешенной политики, бюджетной устойчивости и инклюзивных рыночных инноваций",
      "fr": "Coalition pour des politiques publiques fondées sur la preuve, l'équilibre budgétaire et l'innovation"
    },
    "manifesto": {
      "pl": "Praktyczne rozwiązania ponad ideologicznymi dogmatami, dyscyplina budżetowa połączona z inwestycjami w edukację i AI, partnerstwo publiczno-prywatne i stabilny wzrost.",
      "en": "Practical results over ideological rigidities, fiscal discipline balanced with investments in STEM education and AI, public-private partnerships, and inclusive growth.",
      "ru": "Практическая польза превыше идеологических крайностей, бюджетный баланс, инвестиции в образование и ИИ, государственно-частное партнерство.",
      "fr": "L'efficacité pragmatique contre les dogmatismes, équilibre budgétaire allié aux investissements dans l'éducation et l'IA, et partenariats public-privé."
    },
    "coordinates": {
      "econ": 20,
      "soc": 25
    }
  }
];

if (typeof module !== "undefined" && module.exports) {
  module.exports = { worldIdeologies, worldPoliticians, worldParties };
}
