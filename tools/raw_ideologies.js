// Baza 44 ideologii politycznych w 4 językach (PL, EN, RU, FR)
const rawIdeologies = [
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
    "color": "#0284c7",
    "gradient": "linear-gradient(135deg, #0284c7, #075985)"
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
    "color": "#be123c",
    "gradient": "linear-gradient(135deg, #be123c, #9f1239)"
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
    "color": "#b91c1c",
    "gradient": "linear-gradient(135deg, #b91c1c, #881337)"
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
    "color": "#0284c7",
    "gradient": "linear-gradient(135deg, #0284c7, #0369a1)"
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

if (typeof module !== "undefined" && module.exports) {
  module.exports = { rawIdeologies };
}
