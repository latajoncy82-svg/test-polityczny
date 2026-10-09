// Baza 24 światowych liderów i polityków w 4 językach (PL, EN, RU, FR)
// Obejmuje Amerykę Północną, Południową, Europę, Azję, Afrykę i Oceanię.

const rawPoliticians = [
  {
    id: "javier_milei",
    name: "Javier Milei",
    flag: "🇦🇷",
    country: {
      pl: "Argentyna",
      en: "Argentina",
      ru: "Аргентина",
      fr: "Argentine"
    },
    role: {
      pl: "Prezydent Argentyny, ekonomista szkoły austriackiej",
      en: "President of Argentina, Austrian-school economist",
      ru: "Президент Аргентины, экономист австрийской школы",
      fr: "Président de l'Argentine, économiste de l'école autrichienne"
    },
    quote: {
      pl: "„¡Viva la libertad, carajo! Niech żyje wolność, do cholery!”",
      en: "“¡Viva la libertad, carajo! Long live freedom, damn it!”",
      ru: "«¡Viva la libertad, carajo! Да здравствует свобода, чёрт возьми!»",
      fr: "« ¡Viva la libertad, carajo ! Vive la liberté, bordel ! »"
    },
    whyVote: {
      pl: "Oddałbyś na niego głos za bezkompromisowe cięcie wydatków państwa, znoszenie ministerstw, walkę z deficytem budżetowym, prywatyzację i bezwzględną obronę wolności gospodarczej.",
      en: "You would vote for him for his radical public spending cuts, elimination of ministries, zero-deficit policy, privatization, and fierce defense of free market enterprise.",
      ru: "Вы бы проголосовали за него за радикальное сокращение госрасходов, ликвидацию лишних министерств, бездефицитный бюджет и яростную защиту свободного рынка.",
      fr: "Vous voteriez pour lui pour ses coupes budgétaires drastiques, la fermeture de ministères, la lutte contre les déficits et sa défense intransigeante du marché libre."
    },
    coordinates: { econ: 92, soc: 35 }
  },
  {
    id: "ron_paul",
    name: "Ron Paul",
    flag: "🇺🇸",
    country: {
      pl: "Stany Zjednoczone",
      en: "United States",
      ru: "США",
      fr: "États-Unis"
    },
    role: {
      pl: "Wieloletni kongresmen USA, lider ruchu wolnościowego",
      en: "Longtime US Congressman, champion of American libertarianism",
      ru: "Многолетний конгрессмен США, лидер движения за свободу",
      fr: "Ancien parlementaire américain, figure de proue du libertarisme"
    },
    quote: {
      pl: "„Prawdziwa wolność to nie podział na lewicę i prawicę, to poszanowanie praw suwerennej jednostki.”",
      en: "“Freedom is not defined by safety; freedom is defined by the ability to live your life as you see fit.”",
      ru: "«Истинная свобода — это не деление на левых и правых, а уважение прав суверенной личности.»",
      fr: "« La liberté ne se définit pas par la sécurité, mais par le droit de mener sa vie selon sa propre volonté. »"
    },
    whyVote: {
      pl: "Głosowałbyś na niego za wierność konstytucji, likwidację Rezerwy Federalnej (Fed), walkę o prywatność, sprzeciw wobec zagranicznych wojen i przywrócenie oparcia waluty na złocie.",
      en: "You would vote for him for constitutional purism, abolishing the Federal Reserve, defending privacy against NSA surveillance, and non-interventionist foreign policy.",
      ru: "Вы бы проголосовали за него за верность конституции, аудит и закрытие ФРС, защиту частной жизни от слежки и отказ от зарубежных военных интервенций.",
      fr: "Vous voteriez pour lui pour son strict respect de la constitution, son combat contre la banque centrale, la protection de la vie privée et son refus des guerres étrangères."
    },
    coordinates: { econ: 85, soc: 65 }
  },
  {
    id: "margaret_thatcher",
    name: "Margaret Thatcher",
    flag: "🇬🇧",
    country: {
      pl: "Wielka Brytania",
      en: "United Kingdom",
      ru: "Великобритания",
      fr: "Royaume-Uni"
    },
    role: {
      pl: "Premier Wielkiej Brytanii (1979–1990), „Żelazna Dama”",
      en: "Prime Minister of the UK (1979–1990), the 'Iron Lady'",
      ru: "Премьер-министр Великобритании (1979–1990), «Железная леди»",
      fr: "Première ministre du Royaume-Uni (1979–1990), la « Dame de fer »"
    },
    quote: {
      pl: "„Problem z socjalizmem polega na tym, że w końcu kończą ci się cudze pieniądze.”",
      en: "“The problem with socialism is that you eventually run out of other people's money.”",
      ru: "«Проблема социализма в том, что чужие деньги в конце концов заканчиваются.»",
      fr: "« Le problème avec le socialisme, c'est que vous finissez toujours par manquer de l'argent des autres. »"
    },
    whyVote: {
      pl: "Oddałbyś na nią głos za przełamanie monopolu związków zawodowych, odważną prywatyzację nierentownych molochów, twardą politykę obronną i wiarę w odpowiedzialność osobistą.",
      en: "You would vote for her for curbing trade union dominance, privatizing inefficient state monopolies, resolute national defense, and instilling personal responsibility.",
      ru: "Вы бы проголосовали за нее за обуздание диктата профсоюзов, смелую приватизацию убыточных госкомпаний, сильную армию и личную ответственность.",
      fr: "Vous voteriez pour elle pour avoir jugulé les blocages syndicaux, privatisé les monopoles publics inefficaces et défendu avec fermeté la souveraineté nationale."
    },
    coordinates: { econ: 80, soc: -50 }
  },
  {
    id: "ronald_reagan",
    name: "Ronald Reagan",
    flag: "🇺🇸",
    country: {
      pl: "Stany Zjednoczone",
      en: "United States",
      ru: "США",
      fr: "États-Unis"
    },
    role: {
      pl: "40. Prezydent USA (1981–1989)",
      en: "40th President of the United States (1981–1989)",
      ru: "40-й Президент США (1981–1989)",
      fr: "40e Président des États-Unis (1981–1989)"
    },
    quote: {
      pl: "„Rząd nie rozwiązuje naszych problemów, rząd sam jest problemem.”",
      en: "“Government is not the solution to our problem; government is the problem.”",
      ru: "«Правительство — это не решение нашей проблемы; правительство и есть сама проблема.»",
      fr: "« L'État n'est pas la solution à notre problème ; l'État est le problème. »"
    },
    whyVote: {
      pl: "Twój wybór za obniżenie podatków dochodowych (Reaganomika), deregulację, odbudowę potęgi militarnej, patriotyzm i doprowadzenie do upadku bloku komunistycznego.",
      en: "Your choice for supply-side tax cuts (Reaganomics), deregulation, military revival, traditional patriotic optimism, and winning the Cold War.",
      ru: "Ваш кандидат за радикальное снижение налогов («рейганомика»), дерегуляцию бизнеса, укрепление армии и победу над советским тоталитаризмом.",
      fr: "Votre choix pour ses baisses massives d'impôts (« reaganomics »), la déréglementation, la fierté patriotique et la victoire pacifique sur le bloc soviétique."
    },
    coordinates: { econ: 75, soc: -55 }
  },
  {
    id: "milton_friedman",
    name: "Milton Friedman",
    flag: "🌐",
    country: {
      pl: "Świat / Globalny",
      en: "Global / USA",
      ru: "Мировой / США",
      fr: "International / États-Unis"
    },
    role: {
      pl: "Laureat Nagrody Nobla w dziedzinie ekonomii, twórca monetaryzmu",
      en: "Nobel Laureate in Economics, father of monetarism",
      ru: "Лауреат Нобелевской премии по экономике, отец монетаризма",
      fr: "Prix Nobel d'économie, chef de file du monétarisme"
    },
    quote: {
      pl: "„Społeczeństwo, które stawia równość ponad wolność, nie będzie miało ani jednego, ani drugiego.”",
      en: "“A society that puts equality before freedom will get neither. A society that puts freedom before equality will get a high degree of both.”",
      ru: "«Общество, ставящее равенство выше свободы, не получит ни того, ни другого.»",
      fr: "« Une société qui place l'égalité avant la liberté n'aura ni l'une ni l'autre. »"
    },
    whyVote: {
      pl: "Poparłbyś go za koncepcję bonu oświatowego, ujemnego podatku dochodowego, likwidację ceł, zawodowych licencji państwowych i pełną swobodę wyboru konsumenta.",
      en: "You would vote for him for school choice vouchers, the negative income tax, free trade, dismantling occupational licensing, and consumer empowerment.",
      ru: "Вы бы поддержали его за внедрение образовательных ваучеров, отрицательный подоходный налог, отмену пошлин и абсолютную свободу выбора потребителя.",
      fr: "Vous le soutiendriez pour les chèques scolaires (liberté d'éducation), l'impôt négatif sur le revenu, le libre-échange total et le démantèlement des monopoles corporatifs."
    },
    coordinates: { econ: 90, soc: 50 }
  },
  {
    id: "emmanuel_macron",
    name: "Emmanuel Macron",
    flag: "🇫🇷",
    country: {
      pl: "Francja",
      en: "France",
      ru: "Франция",
      fr: "France"
    },
    role: {
      pl: "Prezydent Francji, twórca ruchu reformatorskiego En Marche",
      en: "President of France, founder of the centrist En Marche reform movement",
      ru: "Президент Франции, создатель центристского движения En Marche",
      fr: "Président de la République française, fondateur du mouvement centriste"
    },
    quote: {
      pl: "„Musimy połączyć dynamikę rynkową z europejską suwerennością strategiczną.”",
      en: "“We must reconcile bold economic modernization with shared European sovereignty.”",
      ru: "«Мы должны объединить динамику рынка с европейским стратегическим суверенитетом.»",
      fr: "« Il nous faut allier la libération des énergies économiques à une souveraineté européenne forte. »"
    },
    whyVote: {
      pl: "Twój głos za uelastycznienie prawa pracy, reformę emerytalną, inwestycje w atom i AI, proeuropejski kurs oraz znoszenie barier dla innowacyjnych start-upów.",
      en: "Your vote for labor market flexibility, pension reform, nuclear energy leadership, pro-European integration, and backing technological start-ups.",
      ru: "Ваш выбор за гибкий рынок труда, пенсионную реформу, развитие атомной энергии и ИИ, а также всемерную интеграцию Европы.",
      fr: "Votre voix pour la flexibilisation du travail, la relance du nucléaire et de l'IA, la défense de l'Union européenne et le soutien aux start-up innovantes."
    },
    coordinates: { econ: 25, soc: 30 }
  },
  {
    id: "justin_trudeau",
    name: "Justin Trudeau",
    flag: "🇨🇦",
    country: {
      pl: "Kanada",
      en: "Canada",
      ru: "Канада",
      fr: "Canada"
    },
    role: {
      pl: "Premier Kanady, lider Liberalnej Partii Kanady",
      en: "Prime Minister of Canada, leader of the Liberal Party",
      ru: "Премьер-министр Канады, лидер Либеральной партии",
      fr: "Premier ministre du Canada, chef du Parti libéral"
    },
    quote: {
      pl: "„Różnorodność i otwartość są źródłem siły nowoczesnego społeczeństwa.”",
      en: "“Diversity is not just a strength, it is our greatest collective advantage.”",
      ru: "«Многообразие и инклюзивность — это источник силы современного общества.»",
      fr: "« La diversité n'est pas seulement notre force, elle est notre plus grand atout collectif. »"
    },
    whyVote: {
      pl: "Oddałbyś na niego głos za podatek węglowy na rzecz klimatu, legalizację marihuany, parytety płci w rządzie, obronę praw mniejszości i wsparcie dla uchodźców.",
      en: "You would vote for him for carbon pricing, cannabis legalization, gender-balanced cabinet, LGBTQ+ rights defense, and welcoming refugee resettlement.",
      ru: "Вы бы отдали за него голос за углеродный налог ради планеты, легализацию каннабиса, гендерный баланс, защиту прав ЛГБТ+ и гуманный прием беженцев.",
      fr: "Vous voteriez pour lui pour la taxe carbone sur le climat, la légalisation du cannabis, la parité hommes-femmes, les droits LGBTQ+ et l'accueil des réfugiés."
    },
    coordinates: { econ: -25, soc: 70 }
  },
  {
    id: "bernie_sanders",
    name: "Bernie Sanders",
    flag: "🇺🇸",
    country: {
      pl: "Stany Zjednoczone",
      en: "United States",
      ru: "США",
      fr: "États-Unis"
    },
    role: {
      pl: "Senator USA ze stanu Vermont, lider amerykańskiego demokratycznego socjalizmu",
      en: "US Senator from Vermont, spearhead of American democratic socialism",
      ru: "Сенатор США, лидер американского демократического социализма",
      fr: "Sénateur américain du Vermont, leader du socialisme démocratique américain"
    },
    quote: {
      pl: "„Opieka zdrowotna to prawo człowieka, a nie luksusowy towar dla najbogatszych.”",
      en: "“Healthcare must be recognized as a fundamental human right, not an expensive privilege.”",
      ru: "«Здравоохранение — это неотъемлемое право человека, а не привилегия богатых.»",
      fr: "« L'accès aux soins de santé est un droit humain fondamental, pas un privilège réservé aux riches. »"
    },
    whyVote: {
      pl: "Głosowałbyś na niego za powszechną bezpłatną służbę zdrowia (Medicare for All), darmowe studia publiczne, opodatkowanie miliarderów i Zielony Nowy Ład (Green New Deal).",
      en: "You would vote for him for Medicare for All, tuition-free public universities, steep wealth taxes on billionaires, and an ambitious Green New Deal.",
      ru: "Вы бы проголосовали за него за всеобщую бесплатную медицину (Medicare for All), бесплатные вузы, налог на богатство миллиардеров и Green New Deal.",
      fr: "Vous voteriez pour lui pour la couverture santé universelle et gratuite (Medicare for All), l'université gratuite, l'impôt sur les grandes fortunes et le Green New Deal."
    },
    coordinates: { econ: -80, soc: 65 }
  },
  {
    id: "lula_da_silva",
    name: "Luiz Inácio Lula da Silva",
    flag: "🇧🇷",
    country: {
      pl: "Brazylia",
      en: "Brazil",
      ru: "Бразилия",
      fr: "Brésil"
    },
    role: {
      pl: "Prezydent Brazylii, ikona latynoamerykańskiego ruchu robotniczego",
      en: "President of Brazil, labor union icon of the Global South",
      ru: "Президент Бразилии, лидер рабочего движения Латинской Америки",
      fr: "Président du Brésil, figure historique du mouvement ouvrier d'Amérique latine"
    },
    quote: {
      pl: "„Prawdziwą wielkość narodu poznaje się po tym, jak traktuje głodnych i wykluczonych.”",
      en: "“A nation's greatness is judged by how it lifts up its impoverished and forgotten families.”",
      ru: "«Величие нации измеряется тем, как она заботится о своих беднейших и голодающих гражданах.»",
      fr: "« La grandeur d'une nation se mesure à sa capacité à extirper ses familles les plus humbles de la faim. »"
    },
    whyVote: {
      pl: "Twój kandydat za programy zwalczania głodu i biedy (Bolsa Família), ochronę Puszczy Amazońskiej, podnoszenie płacy minimalnej i solidarność krajów rozwijających się.",
      en: "Your candidate for massive anti-poverty cash transfers (Bolsa Família), Amazon rainforest conservation, minimum wage hikes, and South-South international solidarity.",
      ru: "Ваш кандидат за программы искоренения голода (Bolsa Família), спасение лесов Амазонии, рост МРОТ и защиту прав трудящихся на международной арене.",
      fr: "Votre candidat pour les programmes d'éradication de la misère (Bolsa Família), la sauvegarde de l'Amazonie, la hausse du salaire minimum et la solidarité internationale."
    },
    coordinates: { econ: -65, soc: 20 }
  },
  {
    id: "olof_palme",
    name: "Olof Palme",
    flag: "🇸🇪",
    country: {
      pl: "Szwecja",
      en: "Sweden",
      ru: "Швеция",
      fr: "Suède"
    },
    role: {
      pl: "Premier Szwecji (1969–1976, 1982–1986), architekt nordyckiego państwa dobrobytu",
      en: "Prime Minister of Sweden, master architect of the Nordic welfare model",
      ru: "Премьер-министр Швеции, создатель шведской модели государства всеобщего благосостояния",
      fr: "Premier ministre de Suède, bâtisseur du modèle social nordique"
    },
    quote: {
      pl: "„Demokracja to nie tylko prawo do głosu, to prawo do równego i godnego życia.”",
      en: "“Democracy is not merely about casting ballots; it is about dignity and equality of life.”",
      ru: "«Демократия — это не просто бюллетень в урне; это достоинство и равенство возможностей.»",
      fr: "« La démocratie ne se résume pas à voter ; elle exige la dignité humaine et l'égalité réelle des conditions. »"
    },
    whyVote: {
      pl: "Głosowałbyś na niego za stworzenie najnowocześniejszego na świecie systemu opieki społecznej, walkę z apartheidem, pacyfizm i niezależną politykę międzynarodową.",
      en: "You would vote for him for constructing the world's premier social security net, fierce anti-apartheid campaigns, peace diplomacy, and principled neutrality.",
      ru: "Вы бы проголосовали за него за построение передового социального государства, борьбу с апартеидом, разоружение и миротворческую дипломатию.",
      fr: "Vous voteriez pour lui pour l'édification de la protection sociale la plus complète du monde, son combat contre l'apartheid et son pacifisme international."
    },
    coordinates: { econ: -75, soc: 45 }
  },
  {
    id: "lee_kuan_yew",
    name: "Lee Kuan Yew",
    flag: "🇸🇬",
    country: {
      pl: "Singapur",
      en: "Singapore",
      ru: "Сингапур",
      fr: "Singapour"
    },
    role: {
      pl: "Ojciec Założyciel i pierwszy premier Singapuru (1959–1990)",
      en: "Founding Father and visionary Prime Minister of Singapore (1959–1990)",
      ru: "Отец-основатель и первый премьер-министр Сингапура (1959–1990)",
      fr: "Père fondateur et premier ministre historique de Singapour (1959–1990)"
    },
    quote: {
      pl: "„Pragmatyzm, żelazna dyscyplina i zero tolerancji dla korupcji przekształcają Trzeci Świat w Pierwszy.”",
      en: "“Without discipline, order, and honest meritocratic governance, prosperity is an impossible fantasy.”",
      ru: "«Прагматизм, железная дисциплина и нулевая толерантность к коррупции превратили Сингапур в передовую державу.»",
      fr: "« Sans discipline, sans ordre et sans gouvernance méritocratique intègre, la prospérité est une illusion. »"
    },
    whyVote: {
      pl: "Twój lider za bezwzględną walkę z korupcją, najwyższy poziom bezpieczeństwa publicznego na świecie, ultranowoczesną infrastrukturę i rządy kompetentnych technokratów.",
      en: "Your leader for eradicating corruption, peerless public safety, building top-tier infrastructure, and governing through ruthless meritocratic expertise.",
      ru: "Ваш лидер за беспощадное искоренение коррупции, образцовую безопасность на улицах, передовую инфраструктуру и власть компетентных технократов.",
      fr: "Votre dirigeant pour l'éradication sans concession de la corruption, une sécurité publique absolue, des infrastructures de classe mondiale et une gestion méritocratique."
    },
    coordinates: { econ: 45, soc: -60 }
  },
  {
    id: "nayib_bukele",
    name: "Nayib Bukele",
    flag: "🇸🇻",
    country: {
      pl: "Salwador",
      en: "El Salvador",
      ru: "Сальвадор",
      fr: "Salvador"
    },
    role: {
      pl: "Prezydent Salwadoru, reformator bezpieczeństwa i promotor Bitcoina",
      en: "President of El Salvador, anti-gang security crusader and Bitcoin pioneer",
      ru: "Президент Сальвадора, борец с бандами и инициатор внедрения Биткоина",
      fr: "Président du Salvador, réformateur de la sécurité et pionnier du Bitcoin"
    },
    quote: {
      pl: "„Prawo uczciwych obywateli do życia bez strachu stoi ponad prawami morderców z gangów.”",
      en: "“The sacred right of peaceful citizens to live in safety will always supersede the rights of criminal gangs.”",
      ru: "«Право мирных граждан ходить по улицам без страха стоит выше прав криминальных группировок.»",
      fr: "« Le droit des citoyens honnêtes à vivre sans terreur primera toujours sur celui des gangs de criminels. »"
    },
    whyVote: {
      pl: "Oddałbyś na niego głos za błyskawiczne wyeliminowanie przestępczości zorganizowanej, budowę nowoczesnych mega-więzień, odważne przyjęcie Bitcoina jako waluty i bezpośredni kontakt z ludem.",
      en: "You would vote for him for crushing murderous street cartels, building high-security facilities, embracing Bitcoin, and unapologetic law-and-order governance.",
      ru: "Вы бы проголосовали за него за разгром уличных банд, рекордное падение преступности, смелое внедрение Биткоина и твердый правопорядок.",
      fr: "Vous voteriez pour lui pour l'anéantissement des cartels mafieux, le rétablissement spectaculaire de la sécurité, l'adoption du Bitcoin et son autorité sans détour."
    },
    coordinates: { econ: 35, soc: -75 }
  },
  {
    id: "angela_merkel",
    name: "Angela Merkel",
    flag: "🇩🇪",
    country: {
      pl: "Niemcy",
      en: "Germany",
      ru: "Германия",
      fr: "Allemagne"
    },
    role: {
      pl: "Kanclerz Niemiec (2005–2021), liderka europejskiej chadecji",
      en: "Chancellor of Germany (2005–2021), leader of European Christian democracy",
      ru: "Канцлер Германии (2005–2021), лидер европейских христианских демократов",
      fr: "Chancelière d'Allemagne (2005–2021), figure centrale du centre-droit européen"
    },
    quote: {
      pl: "„Siła polityki polega na cierpliwym szukaniu kompromisu i unikaniu pochopnych rewolucji.”",
      en: "“The enduring strength of statesmanship lies in patient compromise and steady consensus.”",
      ru: "«Сила мудрой политики заключается в терпеливом поиске компромисса и предсказуемости.»",
      fr: "« La force de la démocratie réside dans la recherche patiente du compromis et la stabilité des institutions. »"
    },
    whyVote: {
      pl: "Głosowałbyś na nią za niemiecką dyscyplinę budżetową (hamulec zadłużenia), utrzymanie jedności Unii Europejskiej w kryzysach, stabilność i umiarkowane centrum polityczne.",
      en: "You would vote for her for balanced budget discipline (Schwarze Null), steering Europe through turbulent crises, and calm, unshakeable centrist stability.",
      ru: "Вы бы проголосовали за нее за финансовую дисциплину, удержание единства Европейского союза в штормовые времена и рассудительную центристскую стабильность.",
      fr: "Vous voteriez pour elle pour sa rigueur budgétaire, sa capacité à maintenir la cohésion européenne lors des crises et sa force tranquille de compromis centriste."
    },
    coordinates: { econ: 15, soc: -20 }
  },
  {
    id: "narendra_modi",
    name: "Narendra Modi",
    flag: "🇮🇳",
    country: {
      pl: "Indie",
      en: "India",
      ru: "Индия",
      fr: "Inde"
    },
    role: {
      pl: "Premier Indii, lider Partii Ludowej Bharatiya Janata (BJP)",
      en: "Prime Minister of India, transformative leader of the BJP",
      ru: "Премьер-министр Индии, лидер партии Бхаратия Джаната (БДП)",
      fr: "Premier ministre de l'Inde, leader du Bharatiya Janata Party (BJP)"
    },
    quote: {
      pl: "„Rozwój z dumą narodową — Indie nie będą naśladować nikogo, lecz kroczyć własną drogą.”",
      en: "“Development combined with national heritage: India charts its own sovereign destiny.”",
      ru: "«Развитие рука об руку с национальной гордостью: Индия идет своим суверенным путем.»",
      fr: "« Le développement économique dans la fierté de nos racines : l'Inde trace sa propre voie souveraine. »"
    },
    whyVote: {
      pl: "Twój głos za gigantyczny skok cyfrowy (Digital India), rozbudowę autostrad i kolei, patriotyzm gospodarczy (Make in India) oraz dumę z wielowiekowej tożsamości kulturowej.",
      en: "Your vote for the Digital India revolution, massive infrastructure modernization, Make in India industrial self-reliance, and civilizational cultural pride.",
      ru: "Ваш голос за цифровую революцию в Индии, масштабное строительство дорог, индустриальную программу Make in India и возрождение национального духа.",
      fr: "Votre voix pour la révolution numérique Digital India, le saut d'infrastructures moderne, le patriotisme industriel et le rayonnement de la culture nationale."
    },
    coordinates: { econ: 20, soc: -75 }
  },
  {
    id: "jacinda_ardern",
    name: "Jacinda Ardern",
    flag: "🇳🇿",
    country: {
      pl: "Nowa Zelandia",
      en: "New Zealand",
      ru: "Новая Зеландия",
      fr: "Nouvelle-Zélande"
    },
    role: {
      pl: "Premier Nowej Zelandii (2017–2023), pionierka polityki opartej na empatii",
      en: "Prime Minister of New Zealand (2017–2023), champion of empathetic leadership",
      ru: "Премьер-министр Новой Зеландии (2017–2023), пионер политики эмпатии",
      fr: "Première ministre de Nouvelle-Zélande (2017–2023), pionnière du leadership bienveillant"
    },
    quote: {
      pl: "„Polityka oparta na empatii, życzliwości i dbaniu o dobrostan obywateli to siła, a nie słabość.”",
      en: "“Kindness and empathy are not weaknesses; they are the truest foundations of courageous leadership.”",
      ru: "«Доброта и сострадание — это не слабость, а прочнейшая основа смелого государственного лидерства.»",
      fr: "« La bienveillance et l'empathie ne sont pas des faiblesses ; elles incarnent le courage politique le plus authentique. »"
    },
    whyVote: {
      pl: "Oddałbyś na nią głos za wdrożenie pierwszego na świecie 'Budżetu Dobrostanu' (Wellbeing Budget), bezkompromisową walkę z ociepleniem klimatu, prawa rdzennej ludności Maorysów i troskę o dzieci.",
      en: "You would vote for her for pioneering the world's first Wellbeing Budget, decisive climate commitments, Indigenous Maori rights, and child poverty reduction.",
      ru: "Вы бы проголосовали за нее за первый в мире 'Бюджет благополучия', решительную климатическую политику, защиту прав народа маори и заботу о детях.",
      fr: "Vous voteriez pour elle pour la création du premier 'Budget du Bien-être', son engagement écologique résolu, la défense des Maoris et la lutte contre la pauvreté infantile."
    },
    coordinates: { econ: -45, soc: 75 }
  },
  {
    id: "pepe_mujica",
    name: "José „Pepe” Mujica",
    flag: "🇺🇾",
    country: {
      pl: "Urugwaj",
      en: "Uruguay",
      ru: "Уругвай",
      fr: "Uruguay"
    },
    role: {
      pl: "Prezydent Urugwaju (2010–2015), nazywany „najbiedniejszym i najmądrzejszym prezydentem świata”",
      en: "President of Uruguay (2010–2015), globally admired as the humble philosopher-president",
      ru: "Президент Уругвая (2010–2015), всемирно известный «самый скромный президент мира»",
      fr: "Président de l'Uruguay (2010–2015), salué comme le « président le plus modeste du monde »"
    },
    quote: {
      pl: "„Biedny nie jest ten, kto ma mało, lecz ten, kto bez końca pragnie mieć więcej i więcej.”",
      en: "“Poor are not those who have little, but those who endlessly desire more and more.”",
      ru: "«Беден не тот, у кого мало, а тот, чья жажда обладать вещами ненасытна.»",
      fr: "« Les pauvres ne sont pas ceux qui possèdent peu, mais ceux dont les désirs insatiables réclament toujours plus. »"
    },
    whyVote: {
      pl: "Twój wybór za absolutną uczciwość i rezygnację z luksusów, legalizację marihuany pod kontrolą państwa, małżeństwa jednopłciowe, skromność osobistą i zrównoważony rozwój.",
      en: "Your choice for personal incorruptibility, donating his salary, state-regulated cannabis legalization, marriage equality, and profound critique of hyper-consumerism.",
      ru: "Ваш выбор за кристальную честность, отказ от президентских дворцов, легализацию каннабиса, равенство браков и отказ от безумного культа потребления.",
      fr: "Votre choix pour son désintéressement absolu, le don de son salaire présidentiel, la légalisation encadrée du cannabis, le mariage pour tous et son refus du consumérisme effréné."
    },
    coordinates: { econ: -70, soc: 80 }
  },
  {
    id: "yanis_varoufakis",
    name: "Yanis Varoufakis",
    flag: "🇬🇷",
    country: {
      pl: "Grecja / Europa",
      en: "Greece / Pan-Europe",
      ru: "Греция / Панъевропа",
      fr: "Grèce / Europe"
    },
    role: {
      pl: "Ekonomista, były minister finansów Grecji, założyciel ruchu DiEM25 i partii MeRA25",
      en: "Economist, former Finance Minister of Greece, founder of DiEM25 and MeRA25",
      ru: "Экономист, экс-министр финансов Греции, основатель панъевропейского движения DiEM25",
      fr: "Économiste, ancien ministre des Finances de Grèce, fondateur de DiEM25 et MeRA25"
    },
    quote: {
      pl: "„Kapitalizm ewoluował w technofeudalizm. Musimy odzyskać demokrację z rąk cyfrowych i bankowych oligarchów.”",
      en: "“Capitalism has mutated into techno-feudalism. We must democratize our money, our tech, and our continent.”",
      ru: "«Капитализм переродился в технофеодализм. Мы обязаны вернуть демократию из лап цифровых магнатов и банкиров.»",
      fr: "« Le capitalisme a muté en technoféodalisme. Nous devons arracher la démocratie aux mains des seigneurs de la tech et des banques. »"
    },
    whyVote: {
      pl: "Głosowałbyś na niego za bezwzględny opór wobec dyktatu bankierów i polityki zaciskania pasa (austerity), postulat Powszechnej Dywidendy Podstawowej i demokratyzację technologii.",
      en: "You would vote for him for resisting creditor austerity regimes, proposing a Universal Basic Dividend from big tech profits, and empowering grassroots pan-European democracy.",
      ru: "Вы бы проголосовали за него за стойкое сопротивление жесткой экономии МВФ, идею всеобщего базового дивиденда от прибылей бигтеха и демократизацию Европы.",
      fr: "Vous voteriez pour lui pour son refus catégorique de l'austérité budgétaire aveugle, sa proposition d'un dividende universel tiré des profits de la Tech et la démocratisation de l'Europe."
    },
    coordinates: { econ: -85, soc: 85 }
  },
  {
    id: "volodymyr_zelenskyy",
    name: "Volodymyr Zelenskyy",
    flag: "🇺🇦",
    country: {
      pl: "Ukraina",
      en: "Ukraine",
      ru: "Украина",
      fr: "Ukraine"
    },
    role: {
      pl: "Prezydent Ukrainy, lider oporu przeciwko autorytarnej agresji",
      en: "President of Ukraine, wartime leader defending democracy against authoritarian aggression",
      ru: "Президент Украины, лидер сопротивления авторитарной агрессии",
      fr: "Président de l'Ukraine, figure de la résistance démocratique contre l'agression autoritaire"
    },
    quote: {
      pl: "„Nie potrzebuję podwózki, potrzebuję amunicji. Wolność i suwerenność to wartości bezcenne.”",
      en: "“I need ammunition, not a ride. Freedom and territorial sovereignty are non-negotiable.”",
      ru: "«Мне нужны боеприпасы, а не эвакуация. Свобода и суверенитет не продаются.»",
      fr: "« J'ai besoin de munitions, pas d'un taxi. La liberté et la souveraineté ne sont pas négociables. »"
    },
    whyVote: {
      pl: "Twój głos za niezłomną obronę wolności i integralności terytorialnej przed tyranią, dążenie do integracji z Unią Europejską i NATO, cyfryzację państwa (aplikacja Diia) i mobilizację społeczną.",
      en: "Your vote for unflinching defense of free democracy and borders against imperial tyranny, rapid EU/NATO integration, state digitalization (Diia), and rallying international support.",
      ru: "Ваш выбор за стойкую защиту свободы и границ от имперской агрессии, решительный курс в ЕС и НАТО, цифровизацию госуслуг (Дия) и единение нации.",
      fr: "Votre voix pour la défense héroïque de la démocratie face à la tyrannie impériale, l'adhésion déterminée à l'UE et à l'OTAN, la numérisation des services publics et l'unité civile."
    },
    coordinates: { econ: 15, soc: 20 }
  },
  {
    id: "keir_starmer",
    name: "Keir Starmer",
    flag: "🇬🇧",
    country: {
      pl: "Wielka Brytania",
      en: "United Kingdom",
      ru: "Великобритания",
      fr: "Royaume-Uni"
    },
    role: {
      pl: "Premier Wielkiej Brytanii, lider Partii Pracy (Labour)",
      en: "Prime Minister of the United Kingdom, leader of the Labour Party",
      ru: "Премьер-министр Великобритании, лидер Лейбористской партии",
      fr: "Premier ministre du Royaume-Uni, chef du Parti travailliste"
    },
    quote: {
      pl: "„Rządy to codzienna służba narodowi, naprawa usług publicznych i przywrócenie zaufania do prawa.”",
      en: "“Country first, party second: politics is serious public service, rule of law, and patient reconstruction.”",
      ru: "«Интересы страны превыше партийных: власть — это честное служение обществу и верховенство закона.»",
      fr: "« L'intérêt du pays avant celui du parti : la politique exige le sérieux, l'état de droit et la reconstruction méthodique. »"
    },
    whyVote: {
      pl: "Oddałbyś na niego głos za odbudowę publicznej służby zdrowia (NHS), powołanie państwowej spółki zielonej energii (Great British Energy), dyscyplinę budżetową i profesjonalizm.",
      en: "You would vote for him for rebuilding the National Health Service (NHS), establishing Great British Energy for green power, stable fiscal rules, and institutional integrity.",
      ru: "Вы бы проголосовали за него за восстановление системы здравоохранения (NHS), создание национальной компании зеленой энергетики, фискальный порядок и законность.",
      fr: "Vous voteriez pour lui pour la réhabilitation du service public de santé (NHS), la création d'un pôle public d'énergie verte, la gestion budgétaire rigoureuse et l'éthique républicaine."
    },
    coordinates: { econ: -35, soc: 25 }
  },
  {
    id: "fumio_kishida",
    name: "Fumio Kishida",
    flag: "🇯🇵",
    country: {
      pl: "Japonia",
      en: "Japan",
      ru: "Япония",
      fr: "Japon"
    },
    role: {
      pl: "Premier Japonii (2021–2024), twórca doktryny „Nowego Kapitalizmu”",
      en: "Prime Minister of Japan (2021–2024), pioneer of 'New Capitalism'",
      ru: "Премьер-министр Японии (2021–2024), автор концепции «Нового капитализма»",
      fr: "Premier ministre du Japon (2021–2024), promoteur du « Nouveau capitalisme »"
    },
    quote: {
      pl: "„Wzrost gospodarczy bez sprawiedliwego podziału owoców nie ma przyszłości — potrzebujemy nowego cyklu płac i inwestycji.”",
      en: "“Economic growth without virtuous wage distribution is hollow; we need a resilient cycle of investment and human capital.”",
      ru: "«Экономический рост без справедливого распределения доходов тупиков — нам нужен цикл роста зарплат и инвестиций.»",
      fr: "« La croissance économique sans partage équitable des fruits est stérile ; nous avons besoin d'un cercle vertueux entre salaires et investissements. »"
    },
    whyVote: {
      pl: "Twój kandydat za podwojenie wydatków na japońską obronność wobec zagrożeń w Azji, presję na podwyżki płac w korporacjach, bezpieczeństwo energetyczne i stabilny ład instytucjonalny.",
      en: "Your candidate for doubling national defense capability, corporate pressure for wage increases, energy security, and Asian geopolitical stability.",
      ru: "Ваш кандидат за удвоение расходов на оборону перед лицом вызовов в Азии, стимулирование роста зарплат в корпорациях и энергетическую безопасность.",
      fr: "Votre candidat pour le doublement historique du budget de défense nippon, la hausse des salaires imposée aux grands groupes et la stabilité géopolitique en Asie."
    },
    coordinates: { econ: 10, soc: -30 }
  },
  {
    id: "thomas_sankara",
    name: "Thomas Sankara",
    flag: "🇧🇫",
    country: {
      pl: "Burkina Faso",
      en: "Burkina Faso",
      ru: "Буркина-Фасо",
      fr: "Burkina Faso"
    },
    role: {
      pl: "Prezydent Burkina Faso (1983–1987), rewolucyjny afrykański reformator",
      en: "President of Burkina Faso (1983–1987), anti-imperialist pan-African visionary",
      ru: "Президент Буркина-Фасо (1983–1987), лидер панафриканского антиколониального движения",
      fr: "Président du Burkina Faso (1983–1987), héros révolutionnaire panafricain"
    },
    quote: {
      pl: "„Ten, kto cię karmi, ten cię kontroluje. Prawdziwa suwerenność to samowystarczalność żywnościowa i godność.”",
      en: "“He who feeds you, controls you. True independence is self-sufficiency and moral refusal of foreign subjugation.”",
      ru: "«Тот, кто кормит тебя, тот контролирует тебя. Подлинная независимость — это способность прокормить себя самим.»",
      fr: "« Celui qui vous nourrit, vous contrôle. La véritable indépendance passe par l'autosuffisance alimentaire et le refus de la dette. »"
    },
    whyVote: {
      pl: "Głosowałbyś na niego za masowe zalesianie Sahelu, wielkie kampanie szczepień dzieci, walkę z korupcją władzy (jeździł małym Renault 5), emancypację kobiet i odrzucenie długów kolonialnych.",
      en: "You would vote for him for planting millions of trees to halt the desert, mass child vaccination, radical official modesty, female liberation, and repudiating predatory foreign debt.",
      ru: "Вы бы проголосовали за него за посадку 10 миллионов деревьев против опустынивания, всеобщую вакцинацию, борьбу с роскошью чиновников, права женщин и отказ от кабальных долгов.",
      fr: "Vous voteriez pour lui pour la reforestation massive contre le désert, la vaccination de millions d'enfants, l'émancipation des femmes et le refus courageux des dettes coloniales."
    },
    coordinates: { econ: -90, soc: -10 }
  },
  {
    id: "nelson_mandela",
    name: "Nelson Mandela",
    flag: "🇿🇦",
    country: {
      pl: "Republika Południowej Afryki",
      en: "South Africa",
      ru: "ЮАР",
      fr: "Afrique du Sud"
    },
    role: {
      pl: "Prezydent RPA, laureat Pokojowej Nagrody Nobla, pogromca apartheidu",
      en: "President of South Africa, Nobel Peace Prize Laureate, champion of racial reconciliation",
      ru: "Президент ЮАР, лауреат Нобелевской премии мира, победитель апартеида",
      fr: "Président d'Afrique du Sud, Prix Nobel de la Paix, vainqueur de l'apartheid"
    },
    quote: {
      pl: "„Nigdy, przenigdy ta piękna ziemia nie powinna doświadczyć ucisku jednego człowieka przez drugiego.”",
      en: "“Never, never and never again shall it be that this beautiful land will experience the oppression of one by another.”",
      ru: "«Никогда, никогда больше эта прекрасная земля не испытает угнетения одного человека другим.»",
      fr: "« Jamais, au grand jamais, ce beau pays ne connaîtra à nouveau l'oppression d'un homme par un autre. »"
    },
    whyVote: {
      pl: "Oddałbyś na niego głos za wielkoduszne pojednanie narodowe bez odwetu, walkę o prawa obywatelskie i godność każdego człowieka, budowę wielorasowej demokracji i sprawiedliwość społeczną.",
      en: "You would vote for him for steering national reconciliation without vengeance, unwavering commitment to human dignity, creating a multi-racial democracy, and social justice.",
      ru: "Вы бы проголосовали за него за мирное национальное примирение без мести, защиту прав человека и построение справедливой демократии без расизма.",
      fr: "Vous voteriez pour lui pour la réconciliation nationale pacifique sans esprit de vengeance, la conquête des droits civiques fondamentaux et l'édification d'une démocratie fraternelle."
    },
    coordinates: { econ: -45, soc: 60 }
  },
  {
    id: "murray_rothbard",
    name: "Murray Rothbard",
    flag: "🌐",
    country: {
      pl: "Świat / USA",
      en: "Global / USA",
      ru: "Мировой / США",
      fr: "International / États-Unis"
    },
    role: {
      pl: "Główny teoretyk anarchokapitalizmu i ekonomista Szkoły Austriackiej",
      en: "Founding theorist of anarcho-capitalism and Austrian School economist",
      ru: "Главный теоретик анархо-капитализма и экономист австрийской школы",
      fr: "Théoricien majeur de l'anarcho-capitalisme et économiste de l'École autrichienne"
    },
    quote: {
      pl: "„Państwo to instytucja zorganizowanego rabunku ubranego w majestat prawa.”",
      en: "“The State is a gang of thieves writ large; taxation is simply legalized extortion.”",
      ru: "«Государство — это банда грабителей в масштабах всей страны; налоги — это узаконенный рэкет.»",
      fr: "« L'État est une organisation criminelle à grande échelle ; l'impôt est une extorsion légalisée. »"
    },
    whyVote: {
      pl: "Twój radykalny wybór za całkowite zniesienie przymusu państwowego, prywatne prawo i sądownictwo arbitrażowe, absolutną nietykalność własności prywatnej i czysty voluntaryzm.",
      en: "Your radical choice for dismantling all state coercion, private competitive legal codes, absolute sanctity of property, and purely voluntary human relationships.",
      ru: "Ваш радикальный выбор за полное упразднение принуждения государства, частное право, абсолютную неприкосновенность собственности и чистый волюнтаризм.",
      fr: "Votre choix radical pour la dissolution complète de la contrainte étatique, la justice privée arbitrale, la sacralité de la propriété et le volontarisme absolu."
    },
    coordinates: { econ: 100, soc: 90 }
  },
  {
    id: "noam_chomsky",
    name: "Noam Chomsky",
    flag: "🌐",
    country: {
      pl: "Świat / USA",
      en: "Global / USA",
      ru: "Мировой / США",
      fr: "International / États-Unis"
    },
    role: {
      pl: "Filozof, lingwista, dysydent polityczny, myśliciel anarchosyndykalistyczny",
      en: "Philosopher, linguist, intellectual dissident, and libertarian socialist theorist",
      ru: "Философ, лингвист, критик империализма, теоретик либертарного социализма",
      fr: "Philosophe, linguiste, dissident politique et théoricien de l'anarcho-syndicalisme"
    },
    quote: {
      pl: "„Każda władza i hierarchia, jeśli nie potrafi dowieść swojej moralnej zasadności, musi zostać natychmiast zlikwidowana.”",
      en: "“Any structure of authority and domination carries a heavy burden of proof; if it cannot justify itself, it must be dismantled.”",
      ru: "«Любая властная иерархия обязана доказать свою легитимность; если она не может этого сделать, она должна быть упразднена.»",
      fr: "« Toute structure d'autorité ou de domination doit prouver sa légitimité ; si elle ne le peut pas, elle doit être démantelée. »"
    },
    whyVote: {
      pl: "Poparłbyś go za bezlitosną demaskację imperializmu i propagandy korporacyjnych mediów, bezkompromisową wolność słowa, oddolną demokrację pracowniczą i solidarność ludzi pracy.",
      en: "You would vote for him for exposing corporate media propaganda and imperial power, absolute defense of free speech, worker self-management, and universal human rights.",
      ru: "Вы бы поддержали его за разоблачение манипуляций корпоративных СМИ, принципиальную свободу слова, рабочее самоуправление и интернациональную солидарность.",
      fr: "Vous le soutiendriez pour sa dénonciation de la propagande médiatique et de l'impérialisme, sa défense absolue de la libre parole et l'autogestion ouvrière."
    },
    coordinates: { econ: -90, soc: 95 }
  }
];

if (typeof module !== "undefined" && module.exports) {
  module.exports = { rawPoliticians };
}
