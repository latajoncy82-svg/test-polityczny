const rawPoliticians = [
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
  }
];

if (typeof module !== "undefined" && module.exports) {
  module.exports = { rawPoliticians };
}
