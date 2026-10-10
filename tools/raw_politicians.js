// tools/raw_politicians.js
// Baza 105 światowych przywódców, polityków i myślicieli politycznych
// Obsługa 6 języków: PL, EN, ES, DE, RU, FR

const rawPoliticians = [
  {
    "id": "javier_milei",
    "name": "Javier Milei",
    "flag": "🇦🇷",
    "country": {
      "pl": "Argentyna",
      "en": "Argentina",
      "ru": "Аргентина",
      "fr": "Argentine",
      "es": "Argentina",
      "de": "Argentinien"
    },
    "role": {
      "pl": "Prezydent Argentyny, ekonomista szkoły austriackiej",
      "en": "President of Argentina, Austrian-school economist",
      "ru": "Президент Аргентины, экономист австрийской школы",
      "fr": "Président de l'Argentine, économiste de l'école autrichienne",
      "es": "Presidente de Argentina, economista libertario y anarcocapitalista",
      "de": "Präsident von Argentinien, libertärer Ökonom und Anarchokapitalist"
    },
    "quote": {
      "pl": "„¡Viva la libertad, carajo! Niech żyje wolność, do cholery!”",
      "en": "“¡Viva la libertad, carajo! Long live freedom, damn it!”",
      "ru": "«¡Viva la libertad, carajo! Да здравствует свобода, чёрт возьми!»",
      "fr": "« ¡Viva la libertad, carajo ! Vive la liberté, bordel ! »",
      "es": "«¡Viva la libertad, carajo!»",
      "de": "„Es lebe die Freiheit, verdammt noch mal!“"
    },
    "whyVote": {
      "pl": "Oddałbyś na niego głos za bezkompromisowe cięcie wydatków państwa, znoszenie ministerstw, walkę z deficytem budżetowym, prywatyzację i bezwzględną obronę wolności gospodarczej.",
      "en": "You would vote for him for his radical public spending cuts, elimination of ministries, zero-deficit policy, privatization, and fierce defense of free market enterprise.",
      "ru": "Вы бы проголосовали за него за радикальное сокращение госрасходов, ликвидацию лишних министерств, бездефицитный бюджет и яростную защиту свободного рынка.",
      "fr": "Vous voteriez pour lui pour ses coupes budgétaires drastiques, la fermeture de ministères, la lutte contre les déficits et sa défense intransigeante du marché libre.",
      "es": "Crees en la desregulación radical, la abolición del Banco Central, la drástica reducción del gasto público y la primacía absoluta de la propiedad privada.",
      "de": "Du glaubst an radikale Deregulierung, die Abschaffung der Zentralbank, drastische Senkung der Staatsausgaben und den Vorrang des Privateigentums."
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
      "fr": "États-Unis",
      "es": "Estados Unidos",
      "de": "Vereinigte Staaten"
    },
    "role": {
      "pl": "Wieloletni kongresmen USA, lider ruchu wolnościowego",
      "en": "Longtime US Congressman, champion of American libertarianism",
      "ru": "Многолетний конгрессмен США, лидер движения за свободу",
      "fr": "Ancien parlementaire américain, figure de proue du libertarisme",
      "es": "Excongresista de EE. UU., médico e icono libertario",
      "de": "Ehem. US-Kongressabgeordneter, Arzt und libertäre Leitfigur"
    },
    "quote": {
      "pl": "„Prawdziwa wolność to nie podział na lewicę i prawicę, to poszanowanie praw suwerennej jednostki.”",
      "en": "“Freedom is not defined by safety; freedom is defined by the ability to live your life as you see fit.”",
      "ru": "«Истинная свобода — это не деление на левых и правых, а уважение прав суверенной личности.»",
      "fr": "« La liberté ne se définit pas par la sécurité, mais par le droit de mener sa vie selon sa propre volonté. »",
      "es": "«No es tarea del gobierno hacer el bien a expensas de los demás ni vigilar el mundo.»",
      "de": "„Es ist nicht Aufgabe des Staates, auf Kosten anderer Gutes zu tun oder die Welt zu beherrschen.“"
    },
    "whyVote": {
      "pl": "Głosowałbyś na niego za wierność konstytucji, likwidację Rezerwy Federalnej (Fed), walkę o prywatność, sprzeciw wobec zagranicznych wojen i przywrócenie oparcia waluty na złocie.",
      "en": "You would vote for him for constitutional purism, abolishing the Federal Reserve, defending privacy against NSA surveillance, and non-interventionist foreign policy.",
      "ru": "Вы бы проголосовали за него за верность конституции, аудит и закрытие ФРС, защиту частной жизни от слежки и отказ от зарубежных военных интервенций.",
      "fr": "Vous voteriez pour lui pour son strict respect de la constitution, son combat contre la banque centrale, la protection de la vie privée et son refus des guerres étrangères.",
      "es": "Defiendes la Constitución original de EE. UU., el patrón oro, el no intervencionismo militar y la defensa intransigente de las libertades civiles.",
      "de": "Du stehst für die ursprüngliche US-Verfassung, den Goldstandard, militärische Nichteinmischung und den Schutz der Bürgerrechte."
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
      "fr": "Royaume-Uni",
      "es": "Reino Unido",
      "de": "Vereinigtes Königreich"
    },
    "role": {
      "pl": "Premier Wielkiej Brytanii (1979–1990), „Żelazna Dama”",
      "en": "Prime Minister of the UK (1979–1990), the 'Iron Lady'",
      "ru": "Премьер-министр Великобритании (1979–1990), «Железная леди»",
      "fr": "Première ministre du Royaume-Uni (1979–1990), la « Dame de fer »",
      "es": "Primera Ministra del Reino Unido (1979–1990), la 'Dama de Hierro'",
      "de": "Premierministerin des Vereinigten Königreichs (1979–1990), die „Eiserne Lady“"
    },
    "quote": {
      "pl": "„Problem z socjalizmem polega na tym, że w końcu kończą ci się cudze pieniądze.”",
      "en": "“The problem with socialism is that you eventually run out of other people's money.”",
      "ru": "«Проблема социализма в том, что чужие деньги в конце концов заканчиваются.»",
      "fr": "« Le problème avec le socialisme, c'est que vous finissez toujours par manquer de l'argent des autres. »",
      "es": "«El problema del socialismo es que tarde o temprano se te acaba el dinero de los demás.»",
      "de": "„Das Problem am Sozialismus ist, dass einem irgendwann das Geld anderer Leute ausgeht.“"
    },
    "whyVote": {
      "pl": "Oddałbyś na nią głos za przełamanie monopolu związków zawodowych, odważną prywatyzację nierentownych molochów, twardą politykę obronną i wiarę w odpowiedzialność osobistą.",
      "en": "You would vote for her for curbing trade union dominance, privatizing inefficient state monopolies, resolute national defense, and instilling personal responsibility.",
      "ru": "Вы бы проголосовали за нее за обуздание диктата профсоюзов, смелую приватизацию убыточных госкомпаний, сильную армию и личную ответственность.",
      "fr": "Vous voteriez pour elle pour avoir jugulé les blocages syndicaux, privatisé les monopoles publics inefficaces et défendu avec fermeté la souveraineté nationale.",
      "es": "Respaldas la privatización masiva, la contención del poder sindical, la disciplina monetaria y la firmeza en la defensa de los intereses nacionales.",
      "de": "Du befürwortest Privatisierungen, die Begrenzung von Gewerkschaftsmacht, Geldwertstabilität und nationale Entschlossenheit."
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
      "fr": "États-Unis",
      "es": "Estados Unidos",
      "de": "Vereinigte Staaten"
    },
    "role": {
      "pl": "40. Prezydent USA (1981–1989)",
      "en": "40th President of the United States (1981–1989)",
      "ru": "40-й Президент США (1981–1989)",
      "fr": "40e Président des États-Unis (1981–1989)",
      "es": "40.º Presidente de los Estados Unidos (1981–1989)",
      "de": "40. Präsident der Vereinigten Staaten (1981–1989)"
    },
    "quote": {
      "pl": "„Rząd nie rozwiązuje naszych problemów, rząd sam jest problemem.”",
      "en": "“Government is not the solution to our problem; government is the problem.”",
      "ru": "«Правительство — это не решение нашей проблемы; правительство и есть сама проблема.»",
      "fr": "« L'État n'est pas la solution à notre problème ; l'État est le problème. »",
      "es": "«El gobierno no es la solución a nuestro problema; el gobierno es el problema.»",
      "de": "„Der Staat ist nicht die Lösung für unser Problem; der Staat ist das Problem.“"
    },
    "whyVote": {
      "pl": "Twój wybór za obniżenie podatków dochodowych (Reaganomika), deregulację, odbudowę potęgi militarnej, patriotyzm i doprowadzenie do upadku bloku komunistycznego.",
      "en": "Your choice for supply-side tax cuts (Reaganomics), deregulation, military revival, traditional patriotic optimism, and winning the Cold War.",
      "ru": "Ваш кандидат за радикальное снижение налогов («рейганомика»), дерегуляцию бизнеса, укрепление армии и победу над советским тоталитаризмом.",
      "fr": "Votre choix pour ses baisses massives d'impôts (« reaganomics »), la déréglementation, la fierté patriotique et la victoire pacifique sur le bloc soviétique.",
      "es": "Apoyas la economía de la oferta (Reaganomics), el recorte de impuestos, la desregulación y la diplomacia de paz a través de la fuerza militar.",
      "de": "Du unterstützt angebotsorientierte Wirtschaftspolitik, Steuersenkungen, Deregulierung und militärische Stärke zur Friedenssicherung."
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
      "fr": "International / États-Unis",
      "es": "Estados Unidos / Global",
      "de": "Vereinigte Staaten / Global"
    },
    "role": {
      "pl": "Laureat Nagrody Nobla w dziedzinie ekonomii, twórca monetaryzmu",
      "en": "Nobel Laureate in Economics, father of monetarism",
      "ru": "Лауреат Нобелевской премии по экономике, отец монетаризма",
      "fr": "Prix Nobel d'économie, chef de file du monétarisme",
      "es": "Premio Nobel de Economía, líder de la Escuela de Chicago",
      "de": "Wirtschaftsnobelpreisträger, Vordenker der Chicagoer Schule"
    },
    "quote": {
      "pl": "„Społeczeństwo, które stawia równość ponad wolność, nie będzie miało ani jednego, ani drugiego.”",
      "en": "“A society that puts equality before freedom will get neither. A society that puts freedom before equality will get a high degree of both.”",
      "ru": "«Общество, ставящее равенство выше свободы, не получит ни того, ни другого.»",
      "fr": "« Une société qui place l'égalité avant la liberté n'aura ni l'une ni l'autre. »",
      "es": "«La sociedad que pone la igualdad por delante de la libertad terminará sin ninguna de las dos.»",
      "de": "„Eine Gesellschaft, die Gleichheit über Freiheit stellt, wird am Ende weder Gleichheit noch Freiheit haben.“"
    },
    "whyVote": {
      "pl": "Poparłbyś go za koncepcję bonu oświatowego, ujemnego podatku dochodowego, likwidację ceł, zawodowych licencji państwowych i pełną swobodę wyboru konsumenta.",
      "en": "You would vote for him for school choice vouchers, the negative income tax, free trade, dismantling occupational licensing, and consumer empowerment.",
      "ru": "Вы бы поддержали его за внедрение образовательных ваучеров, отрицательный подоходный налог, отмену пошлин и абсолютную свободу выбора потребителя.",
      "fr": "Vous le soutiendriez pour les chèques scolaires (liberté d'éducation), l'impôt négatif sur le revenu, le libre-échange total et le démantèlement des monopoles corporatifs.",
      "es": "Crees en el libre mercado sin trabas, el control de la oferta monetaria para evitar la inflación, los cheques escolares y el libre comercio internacional.",
      "de": "Du glaubst an freie Märkte, monetäre Disziplin zur Vermeidung von Inflation, Bildungsgutscheine und weltweiten Freihandel."
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
      "fr": "France",
      "es": "Francia",
      "de": "Frankreich"
    },
    "role": {
      "pl": "Prezydent Francji, twórca ruchu reformatorskiego En Marche",
      "en": "President of France, founder of the centrist En Marche reform movement",
      "ru": "Президент Франции, создатель центристского движения En Marche",
      "fr": "Président de la République française, fondateur du mouvement centriste",
      "es": "Presidente de Francia, líder centrista proeuropeo",
      "de": "Präsident von Frankreich, pro-europäischer Reformer der Mitte"
    },
    "quote": {
      "pl": "„Musimy połączyć dynamikę rynkową z europejską suwerennością strategiczną.”",
      "en": "“We must reconcile bold economic modernization with shared European sovereignty.”",
      "ru": "«Мы должны объединить динамику рынка с европейским стратегическим суверенитетом.»",
      "fr": "« Il nous faut allier la libération des énergies économiques à une souveraineté européenne forte. »",
      "es": "«Debemos construir una soberanía europea estratégica y modernizar nuestra economía.»",
      "de": "„Wir müssen strategische europäische Souveränität aufbauen und unsere Wirtschaft zukunftsfest modernisieren.“"
    },
    "whyVote": {
      "pl": "Twój głos za uelastycznienie prawa pracy, reformę emerytalną, inwestycje w atom i AI, proeuropejski kurs oraz znoszenie barier dla innowacyjnych start-upów.",
      "en": "Your vote for labor market flexibility, pension reform, nuclear energy leadership, pro-European integration, and backing technological start-ups.",
      "ru": "Ваш выбор за гибкий рынок труда, пенсионную реформу, развитие атомной энергии и ИИ, а также всемерную интеграцию Европы.",
      "fr": "Votre voix pour la flexibilisation du travail, la relance du nucléaire et de l'IA, la défense de l'Union européenne et le soutien aux start-up innovantes.",
      "es": "Prefieres el centrismo pragmático reformista, la integración europea profunda, el impulso empresarial y la autonomía estratégica continental.",
      "de": "Du bevorzugst pragmatischen Reformismus der Mitte, vertiefte europäische Einigung, unternehmerische Dynamik und strategische Autonomie."
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
      "fr": "Canada",
      "es": "Canadá",
      "de": "Kanada"
    },
    "role": {
      "pl": "Premier Kanady, lider Liberalnej Partii Kanady",
      "en": "Prime Minister of Canada, leader of the Liberal Party",
      "ru": "Премьер-министр Канады, лидер Либеральной партии",
      "fr": "Premier ministre du Canada, chef du Parti libéral",
      "es": "Primer Ministro de Canadá, líder del Partido Liberal",
      "de": "Premierminister von Kanada, Vorsitzender der Liberalen Partei"
    },
    "quote": {
      "pl": "„Różnorodność i otwartość są źródłem siły nowoczesnego społeczeństwa.”",
      "en": "“Diversity is not just a strength, it is our greatest collective advantage.”",
      "ru": "«Многообразие и инклюзивность — это источник силы современного общества.»",
      "fr": "« La diversité n'est pas seulement notre force, elle est notre plus grand atout collectif. »",
      "es": "«La diversidad es nuestra fortaleza y el motor de nuestro progreso social.»",
      "de": "„Vielfalt ist unsere Stärke und der Motor unseres gesellschaftlichen Fortschritts.“"
    },
    "whyVote": {
      "pl": "Oddałbyś na niego głos za podatek węglowy na rzecz klimatu, legalizację marihuany, parytety płci w rządzie, obronę praw mniejszości i wsparcie dla uchodźców.",
      "en": "You would vote for him for carbon pricing, cannabis legalization, gender-balanced cabinet, LGBTQ+ rights defense, and welcoming refugee resettlement.",
      "ru": "Вы бы отдали за него голос за углеродный налог ради планеты, легализацию каннабиса, гендерный баланс, защиту прав ЛГБТ+ и гуманный прием беженцев.",
      "fr": "Vous voteriez pour lui pour la taxe carbone sur le climat, la légalisation du cannabis, la parité hommes-femmes, les droits LGBTQ+ et l'accueil des réfugiés.",
      "es": "Apoyas el progresismo sociocultural, el multiculturalismo activo, la fiscalidad del carbono y la inversión en servicios sociales inclusivos.",
      "de": "Du unterstützt gesellschaftlichen Progressivismus, Multikulturalismus, CO2-Abgaben und Investitionen in soziale Inklusion."
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
      "fr": "États-Unis",
      "es": "Estados Unidos",
      "de": "Vereinigte Staaten"
    },
    "role": {
      "pl": "Senator USA ze stanu Vermont, lider amerykańskiego demokratycznego socjalizmu",
      "en": "US Senator from Vermont, spearhead of American democratic socialism",
      "ru": "Сенатор США, лидер американского демократического социализма",
      "fr": "Sénateur américain du Vermont, leader du socialisme démocratique américain",
      "es": "Senador de EE. UU., referente del socialismo democrático",
      "de": "US-Senator, Vordenker des demokratischen Sozialismus"
    },
    "quote": {
      "pl": "„Opieka zdrowotna to prawo człowieka, a nie luksusowy towar dla najbogatszych.”",
      "en": "“Healthcare must be recognized as a fundamental human right, not an expensive privilege.”",
      "ru": "«Здравоохранение — это неотъемлемое право человека, а не привилегия богатых.»",
      "fr": "« L'accès aux soins de santé est un droit humain fondamental, pas un privilège réservé aux riches. »",
      "es": "«La sanidad es un derecho humano universal, no un privilegio de quienes pueden pagarla.»",
      "de": "„Gesundheitsversorgung ist ein Menschenrecht, kein Privileg für Wohlhabende.“"
    },
    "whyVote": {
      "pl": "Głosowałbyś na niego za powszechną bezpłatną służbę zdrowia (Medicare for All), darmowe studia publiczne, opodatkowanie miliarderów i Zielony Nowy Ład (Green New Deal).",
      "en": "You would vote for him for Medicare for All, tuition-free public universities, steep wealth taxes on billionaires, and an ambitious Green New Deal.",
      "ru": "Вы бы проголосовали за него за всеобщую бесплатную медицину (Medicare for All), бесплатные вузы, налог на богатство миллиардеров и Green New Deal.",
      "fr": "Vous voteriez pour lui pour la couverture santé universelle et gratuite (Medicare for All), l'université gratuite, l'impôt sur les grandes fortunes et le Green New Deal.",
      "es": "Exiges sanidad pública universal gratuita (Medicare for All), universidad pública sin tasas, altos impuestos a los milmillonarios y un Green New Deal.",
      "de": "Du forderst universelle kostenlose Krankenversicherung (Medicare for All), gebührenfreie Hochschulbildung, Reichensteuern und einen Green New Deal."
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
      "fr": "Brésil",
      "es": "Brasil",
      "de": "Brasilien"
    },
    "role": {
      "pl": "Prezydent Brazylii, ikona latynoamerykańskiego ruchu robotniczego",
      "en": "President of Brazil, labor union icon of the Global South",
      "ru": "Президент Бразилии, лидер рабочего движения Латинской Америки",
      "fr": "Président du Brésil, figure historique du mouvement ouvrier d'Amérique latine",
      "es": "Presidente de Brasil, líder sindical y del Partido de los Trabajadores",
      "de": "Präsident von Brasilien, Gewerkschafter und Vorsitzender der Arbeiterpartei"
    },
    "quote": {
      "pl": "„Prawdziwą wielkość narodu poznaje się po tym, jak traktuje głodnych i wykluczonych.”",
      "en": "“A nation's greatness is judged by how it lifts up its impoverished and forgotten families.”",
      "ru": "«Величие нации измеряется тем, как она заботится о своих беднейших и голодающих гражданах.»",
      "fr": "« La grandeur d'une nation se mesure à sa capacité à extirper ses familles les plus humbles de la faim. »",
      "es": "«Gobernar es cuidar a los más pobres y garantizar que cada familia tenga tres comidas al día.»",
      "de": "„Regieren bedeutet, sich um die Ärmsten zu kümmern und dafür zu sorgen, dass jede Familie täglich satt wird.“"
    },
    "whyVote": {
      "pl": "Twój kandydat za programy zwalczania głodu i biedy (Bolsa Família), ochronę Puszczy Amazońskiej, podnoszenie płacy minimalnej i solidarność krajów rozwijających się.",
      "en": "Your candidate for massive anti-poverty cash transfers (Bolsa Família), Amazon rainforest conservation, minimum wage hikes, and South-South international solidarity.",
      "ru": "Ваш кандидат за программы искоренения голода (Bolsa Família), спасение лесов Амазонии, рост МРОТ и защиту прав трудящихся на международной арене.",
      "fr": "Votre candidat pour les programmes d'éradication de la misère (Bolsa Família), la sauvegarde de l'Amazonie, la hausse du salaire minimum et la solidarité internationale.",
      "es": "Priorizas los programas sociales contra el hambre, la protección de la Amazonía, el fortalecimiento de los salarios mínimos y la multipolaridad global.",
      "de": "Du setzt auf soziale Hilfen gegen Armut, den Schutz des Amazonas, Stärkung der Mindestlöhne und multilaterale Außenpolitik."
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
      "fr": "Suède",
      "es": "Suecia",
      "de": "Schweden"
    },
    "role": {
      "pl": "Premier Szwecji (1969–1976, 1982–1986), architekt nordyckiego państwa dobrobytu",
      "en": "Prime Minister of Sweden, master architect of the Nordic welfare model",
      "ru": "Премьер-министр Швеции, создатель шведской модели государства всеобщего благосостояния",
      "fr": "Premier ministre de Suède, bâtisseur du modèle social nordique",
      "es": "Primer Ministro de Suecia, arquitecto de la socialdemocracia nórdica",
      "de": "Ministerpräsident von Schweden, Architekt des nordischen Wohlfahrtsstaates"
    },
    "quote": {
      "pl": "„Demokracja to nie tylko prawo do głosu, to prawo do równego i godnego życia.”",
      "en": "“Democracy is not merely about casting ballots; it is about dignity and equality of life.”",
      "ru": "«Демократия — это не просто бюллетень в урне; это достоинство и равенство возможностей.»",
      "fr": "« La démocratie ne se résume pas à voter ; elle exige la dignité humaine et l'égalité réelle des conditions. »",
      "es": "«Nuestra meta es una sociedad solidaria donde la libertad y la igualdad se refuercen mutuamente.»",
      "de": "„Unser Ziel ist eine solidarische Gesellschaft, in der Freiheit und Gleichheit einander bedingen.“"
    },
    "whyVote": {
      "pl": "Głosowałbyś na niego za stworzenie najnowocześniejszego na świecie systemu opieki społecznej, walkę z apartheidem, pacyfizm i niezależną politykę międzynarodową.",
      "en": "You would vote for him for constructing the world's premier social security net, fierce anti-apartheid campaigns, peace diplomacy, and principled neutrality.",
      "ru": "Вы бы проголосовали за него за построение передового социального государства, борьбу с апартеидом, разоружение и миротворческую дипломатию.",
      "fr": "Vous voteriez pour lui pour l'édification de la protection sociale la plus complète du monde, son combat contre l'apartheid et son pacifisme international.",
      "es": "Valoras el modelo socialdemócrata sueco, el desarme internacional, la igualdad de género y la defensa de los derechos de los pueblos del Sur Global.",
      "de": "Du schätzt das schwedische Wohlfahrtsmodell, internationale Friedenspolitik, Gleichstellung und die Solidarität mit Entwicklungsländern."
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
      "fr": "Singapour",
      "es": "Singapur",
      "de": "Singapur"
    },
    "role": {
      "pl": "Ojciec Założyciel i pierwszy premier Singapuru (1959–1990)",
      "en": "Founding Father and visionary Prime Minister of Singapore (1959–1990)",
      "ru": "Отец-основатель и первый премьер-министр Сингапура (1959–1990)",
      "fr": "Père fondateur et premier ministre historique de Singapour (1959–1990)",
      "es": "Primer Ministro fundador y arquitecto de Singapur",
      "de": "Gründungspremierminister und Architekt von Singapur"
    },
    "quote": {
      "pl": "„Pragmatyzm, żelazna dyscyplina i zero tolerancji dla korupcji przekształcają Trzeci Świat w Pierwszy.”",
      "en": "“Without discipline, order, and honest meritocratic governance, prosperity is an impossible fantasy.”",
      "ru": "«Прагматизм, железная дисциплина и нулевая толерантность к коррупции превратили Сингапур в передовую державу.»",
      "fr": "« Sans discipline, sans ordre et sans gouvernance méritocratique intègre, la prospérité est une illusion. »",
      "es": "«Sin ley, orden y disciplina social estricta, ningún progreso económico es posible.»",
      "de": "„Ohne Recht, Ordnung und gesellschaftliche Disziplin ist kein wirtschaftlicher Aufstieg möglich.“"
    },
    "whyVote": {
      "pl": "Twój lider za bezwzględną walkę z korupcją, najwyższy poziom bezpieczeństwa publicznego na świecie, ultranowoczesną infrastrukturę i rządy kompetentnych technokratów.",
      "en": "Your leader for eradicating corruption, peerless public safety, building top-tier infrastructure, and governing through ruthless meritocratic expertise.",
      "ru": "Ваш лидер за беспощадное искоренение коррупции, образцовую безопасность на улицах, передовую инфраструктуру и власть компетентных технократов.",
      "fr": "Votre dirigeant pour l'éradication sans concession de la corruption, une sécurité publique absolue, des infrastructures de classe mondiale et une gestion méritocratique.",
      "es": "Respaldas el capitalismo tecnocrático de alta eficiencia, la estricta ley y orden, la meritocracia incorruptible y el desarrollo nacional planificado.",
      "de": "Du befürwortest hocheffizienten technokratischen Kapitalismus, kompromisslose Rechtsordnung, Null-Toleranz bei Korruption und strategischen Staatsaufbau."
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
      "fr": "Salvador",
      "es": "El Salvador",
      "de": "El Salvador"
    },
    "role": {
      "pl": "Prezydent Salwadoru, reformator bezpieczeństwa i promotor Bitcoina",
      "en": "President of El Salvador, anti-gang security crusader and Bitcoin pioneer",
      "ru": "Президент Сальвадора, борец с бандами и инициатор внедрения Биткоина",
      "fr": "Président du Salvador, réformateur de la sécurité et pionnier du Bitcoin",
      "es": "Presidente de El Salvador, pionero en seguridad y Bitcoin",
      "de": "Präsident von El Salvador, Vorreiter bei Sicherheit und Bitcoin"
    },
    "quote": {
      "pl": "„Prawo uczciwych obywateli do życia bez strachu stoi ponad prawami morderców z gangów.”",
      "en": "“The sacred right of peaceful citizens to live in safety will always supersede the rights of criminal gangs.”",
      "ru": "«Право мирных граждан ходить по улицам без страха стоит выше прав криминальных группировок.»",
      "fr": "« Le droit des citoyens honnêtes à vivre sans terreur primera toujours sur celui des gangs de criminels. »",
      "es": "«El derecho del pueblo honrado a vivir en paz está por encima de los derechos de los criminales.»",
      "de": "„Das Recht der ehrlichen Bürger auf Frieden steht über den Rechten von Gewalttätern.“"
    },
    "whyVote": {
      "pl": "Oddałbyś na niego głos za błyskawiczne wyeliminowanie przestępczości zorganizowanej, budowę nowoczesnych mega-więzień, odważne przyjęcie Bitcoina jako waluty i bezpośredni kontakt z ludem.",
      "en": "You would vote for him for crushing murderous street cartels, building high-security facilities, embracing Bitcoin, and unapologetic law-and-order governance.",
      "ru": "Вы бы проголосовали за него за разгром уличных банд, рекордное падение преступности, смелое внедрение Биткоина и твердый правопорядок.",
      "fr": "Vous voteriez pour lui pour l'anéantissement des cartels mafieux, le rétablissement spectaculaire de la sécurité, l'adoption du Bitcoin et son autorité sans détour.",
      "es": "Crees en la mano dura implacable contra las pandillas y el crimen, la adopción de tecnologías financieras innovadoras y la soberanía popular directa.",
      "de": "Du befürwortest kompromisslose Härte gegen Kriminalität, innovative Finanztechnologien und eine direkte, durchsetzungsstarke Führung."
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
      "fr": "Allemagne",
      "es": "Alemania",
      "de": "Deutschland"
    },
    "role": {
      "pl": "Kanclerz Niemiec (2005–2021), liderka europejskiej chadecji",
      "en": "Chancellor of Germany (2005–2021), leader of European Christian democracy",
      "ru": "Канцлер Германии (2005–2021), лидер европейских христианских демократов",
      "fr": "Chancelière d'Allemagne (2005–2021), figure centrale du centre-droit européen",
      "es": "Canciller de Alemania (2005–2021), líder de la CDU",
      "de": "Bundeskanzlerin von Deutschland (2005–2021), CDU-Vorsitzende"
    },
    "quote": {
      "pl": "„Siła polityki polega na cierpliwym szukaniu kompromisu i unikaniu pochopnych rewolucji.”",
      "en": "“The enduring strength of statesmanship lies in patient compromise and steady consensus.”",
      "ru": "«Сила мудрой политики заключается в терпеливом поиске компромисса и предсказуемости.»",
      "fr": "« La force de la démocratie réside dans la recherche patiente du compromis et la stabilité des institutions. »",
      "es": "«El éxito duradero se construye paso a paso con pragmatismo, estabilidad y consenso europeo.»",
      "de": "„Dauerhafter Erfolg entsteht Schritt für Schritt durch Pragmatismus, Stabilität und europäischen Konsens.“"
    },
    "whyVote": {
      "pl": "Głosowałbyś na nią za niemiecką dyscyplinę budżetową (hamulec zadłużenia), utrzymanie jedności Unii Europejskiej w kryzysach, stabilność i umiarkowane centrum polityczne.",
      "en": "You would vote for her for balanced budget discipline (Schwarze Null), steering Europe through turbulent crises, and calm, unshakeable centrist stability.",
      "ru": "Вы бы проголосовали за нее за финансовую дисциплину, удержание единства Европейского союза в штормовые времена и рассудительную центристскую стабильность.",
      "fr": "Vous voteriez pour elle pour sa rigueur budgétaire, sa capacité à maintenir la cohésion européenne lors des crises et sa force tranquille de compromis centriste.",
      "es": "Prefieres el liderazgo sosegado y predecible, la economía social de mercado, la estabilidad presupuestaria y el multilateralismo internacional.",
      "de": "Du schätzt unaufgeregte, verlässliche Führung, soziale Marktwirtschaft, fiskalische Stabilität und multilateralen Ausgleich."
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
      "fr": "Inde",
      "es": "India",
      "de": "Indien"
    },
    "role": {
      "pl": "Premier Indii, lider Partii Ludowej Bharatiya Janata (BJP)",
      "en": "Prime Minister of India, transformative leader of the BJP",
      "ru": "Премьер-министр Индии, лидер партии Бхаратия Джаната (БДП)",
      "fr": "Premier ministre de l'Inde, leader du Bharatiya Janata Party (BJP)",
      "es": "Primer Ministro de la India, líder del Bharatiya Janata Party (BJP)",
      "de": "Premierminister von Indien, Vorsitzender der Bharatiya Janata Party (BJP)"
    },
    "quote": {
      "pl": "„Rozwój z dumą narodową — Indie nie będą naśladować nikogo, lecz kroczyć własną drogą.”",
      "en": "“Development combined with national heritage: India charts its own sovereign destiny.”",
      "ru": "«Развитие рука об руку с национальной гордостью: Индия идет своим суверенным путем.»",
      "fr": "« Le développement économique dans la fierté de nos racines : l'Inde trace sa propre voie souveraine. »",
      "es": "«Una India moderna y digital, orgullosa de su herencia milenaria, avanza como potencia global.»",
      "de": "„Ein modernes, digitales Indien, stolz auf sein jahrtausendealtes Erbe, wächst zur Weltmacht heran.“"
    },
    "whyVote": {
      "pl": "Twój głos za gigantyczny skok cyfrowy (Digital India), rozbudowę autostrad i kolei, patriotyzm gospodarczy (Make in India) oraz dumę z wielowiekowej tożsamości kulturowej.",
      "en": "Your vote for the Digital India revolution, massive infrastructure modernization, Make in India industrial self-reliance, and civilizational cultural pride.",
      "ru": "Ваш голос за цифровую революцию в Индии, масштабное строительство дорог, индустриальную программу Make in India и возрождение национального духа.",
      "fr": "Votre voix pour la révolution numérique Digital India, le saut d'infrastructures moderne, le patriotisme industriel et le rayonnement de la culture nationale.",
      "es": "Respaldas la digitalización acelerada de la economía, el orgullo civilizatorio nacional, la atracción de inversiones globales y la firmeza en seguridad.",
      "de": "Du befürwortest digitale Infrastrukturreformen, nationales Selbstbewusstsein, globale Investitionsanreize und entschlossene Landesverteidigung."
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
      "fr": "Nouvelle-Zélande",
      "es": "Nueva Zelanda",
      "de": "Neuseeland"
    },
    "role": {
      "pl": "Premier Nowej Zelandii (2017–2023), pionierka polityki opartej na empatii",
      "en": "Prime Minister of New Zealand (2017–2023), champion of empathetic leadership",
      "ru": "Премьер-министр Новой Зеландии (2017–2023), пионер политики эмпатии",
      "fr": "Première ministre de Nouvelle-Zélande (2017–2023), pionnière du leadership bienveillant",
      "es": "Primera Ministra de Nueva Zelanda (2017–2023), líder laborista",
      "de": "Premierministerin von Neuseeland (2017–2023), Labour-Vorsitzende"
    },
    "quote": {
      "pl": "„Polityka oparta na empatii, życzliwości i dbaniu o dobrostan obywateli to siła, a nie słabość.”",
      "en": "“Kindness and empathy are not weaknesses; they are the truest foundations of courageous leadership.”",
      "ru": "«Доброта и сострадание — это не слабость, а прочнейшая основа смелого государственного лидерства.»",
      "fr": "« La bienveillance et l'empathie ne sont pas des faiblesses ; elles incarnent le courage politique le plus authentique. »",
      "es": "«La compasión, la empatía y la amabilidad son formas genuinas de fuerza y liderazgo.»",
      "de": "„Empathie und Fürsorge sind echte Formen von politischer Führungsstärke.“"
    },
    "whyVote": {
      "pl": "Oddałbyś na nią głos za wdrożenie pierwszego na świecie 'Budżetu Dobrostanu' (Wellbeing Budget), bezkompromisową walkę z ociepleniem klimatu, prawa rdzennej ludności Maorysów i troskę o dzieci.",
      "en": "You would vote for her for pioneering the world's first Wellbeing Budget, decisive climate commitments, Indigenous Maori rights, and child poverty reduction.",
      "ru": "Вы бы проголосовали за нее за первый в мире 'Бюджет благополучия', решительную климатическую политику, защиту прав народа маори и заботу о детях.",
      "fr": "Vous voteriez pour elle pour la création du premier 'Budget du Bien-être', son engagement écologique résolu, la défense des Maoris et la lutte contre la pauvreté infantile.",
      "es": "Defiendes el liderazgo empático, presupuestos de bienestar integral, ambiciosas metas climáticas y medidas decididas en control de armas.",
      "de": "Du stehst für empathische Politik, Wohlfahrtsbudgets, ambitionierten Klimaschutz und konsequente Waffenkontrolle."
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
      "fr": "Uruguay",
      "es": "Uruguay",
      "de": "Uruguay"
    },
    "role": {
      "pl": "Prezydent Urugwaju (2010–2015), nazywany „najbiedniejszym i najmądrzejszym prezydentem świata”",
      "en": "President of Uruguay (2010–2015), globally admired as the humble philosopher-president",
      "ru": "Президент Уругвая (2010–2015), всемирно известный «самый скромный президент мира»",
      "fr": "Président de l'Uruguay (2010–2015), salué comme le « président le plus modeste du monde »",
      "es": "Presidente de Uruguay (2010–2015), filósofo de la sobriedad y la libertad",
      "de": "Präsident von Uruguay (2010–2015), Philosoph der Bescheidenheit und Freiheit"
    },
    "quote": {
      "pl": "„Biedny nie jest ten, kto ma mało, lecz ten, kto bez końca pragnie mieć więcej i więcej.”",
      "en": "“Poor are not those who have little, but those who endlessly desire more and more.”",
      "ru": "«Беден не тот, у кого мало, а тот, чья жажда обладать вещами ненасытна.»",
      "fr": "« Les pauvres ne sont pas ceux qui possèdent peu, mais ceux dont les désirs insatiables réclament toujours plus. »",
      "es": "«Pobres son los que necesitan mucho para vivir; la verdadera libertad está en la sobriedad.»",
      "de": "„Arm ist nicht, wer wenig hat, sondern wer immer mehr braucht; wahre Freiheit liegt im Maßhalten.“"
    },
    "whyVote": {
      "pl": "Twój wybór za absolutną uczciwość i rezygnację z luksusów, legalizację marihuany pod kontrolą państwa, małżeństwa jednopłciowe, skromność osobistą i zrównoważony rozwój.",
      "en": "Your choice for personal incorruptibility, donating his salary, state-regulated cannabis legalization, marriage equality, and profound critique of hyper-consumerism.",
      "ru": "Ваш выбор за кристальную честность, отказ от президентских дворцов, легализацию каннабиса, равенство браков и отказ от безумного культа потребления.",
      "fr": "Votre choix pour son désintéressement absolu, le don de son salaire présidentiel, la légalisation encadrée du cannabis, le mariage pour tous et son refus du consumérisme effréné.",
      "es": "Admiras la austeridad personal, la legalización regulada del cannabis, el matrimonio igualitario y la lucha ética contra el consumismo desmedido.",
      "de": "Du bewunderst persönliche Bescheidenheit, progressive Gesellschaftsreformen, Umverteilung und den Einsatz gegen unreflektierten Konsumismus."
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
      "fr": "Grèce / Europe",
      "es": "Grecia / Europa",
      "de": "Griechenland / Europa"
    },
    "role": {
      "pl": "Ekonomista, były minister finansów Grecji, założyciel ruchu DiEM25 i partii MeRA25",
      "en": "Economist, former Finance Minister of Greece, founder of DiEM25 and MeRA25",
      "ru": "Экономист, экс-министр финансов Греции, основатель панъевропейского движения DiEM25",
      "fr": "Économiste, ancien ministre des Finances de Grèce, fondateur de DiEM25 et MeRA25",
      "es": "Exministro de Finanzas de Grecia, cofundador de DiEM25",
      "de": "Ehem. Finanzminister Griechenlands, Mitgründer von DiEM25"
    },
    "quote": {
      "pl": "„Kapitalizm ewoluował w technofeudalizm. Musimy odzyskać demokrację z rąk cyfrowych i bankowych oligarchów.”",
      "en": "“Capitalism has mutated into techno-feudalism. We must democratize our money, our tech, and our continent.”",
      "ru": "«Капитализм переродился в технофеодализм. Мы обязаны вернуть демократию из лап цифровых магнатов и банкиров.»",
      "fr": "« Le capitalisme a muté en technoféodalisme. Nous devons arracher la démocratie aux mains des seigneurs de la tech et des banques. »",
      "es": "«El capitalismo ha mutado en tecnofeudalismo; debemos democratizar Europa y las plataformas digitales.»",
      "de": "„Der Kapitalismus mutiert zum Technofeudalismus; wir müssen Europa und digitale Plattformen demokratisieren.“"
    },
    "whyVote": {
      "pl": "Głosowałbyś na niego za bezwzględny opór wobec dyktatu bankierów i polityki zaciskania pasa (austerity), postulat Powszechnej Dywidendy Podstawowej i demokratyzację technologii.",
      "en": "You would vote for him for resisting creditor austerity regimes, proposing a Universal Basic Dividend from big tech profits, and empowering grassroots pan-European democracy.",
      "ru": "Вы бы проголосовали за него за стойкое сопротивление жесткой экономии МВФ, идею всеобщего базового дивиденда от прибылей бигтеха и демократизацию Европы.",
      "fr": "Vous voteriez pour lui pour son refus catégorique de l'austérité budgétaire aveugle, sa proposition d'un dividende universel tiré des profits de la Tech et la démocratisation de l'Europe.",
      "es": "Respaldas la resistencia frontal contra las políticas de austeridad bancaria, la democratización radical de la UE y la renta básica garantizada.",
      "de": "Du teilst die Kritik an europäischer Austeritätspolitik, forderst radikale Demokratisierung der EU und die Überwindung des Technofeudalismus."
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
      "fr": "Ukraine",
      "es": "Ucrania",
      "de": "Ukraine"
    },
    "role": {
      "pl": "Prezydent Ukrainy, lider oporu przeciwko autorytarnej agresji",
      "en": "President of Ukraine, wartime leader defending democracy against authoritarian aggression",
      "ru": "Президент Украины, лидер сопротивления авторитарной агрессии",
      "fr": "Président de l'Ukraine, figure de la résistance démocratique contre l'agression autoritaire",
      "es": "Presidente de Ucrania, líder de la resistencia nacional contra la invasión rusa",
      "de": "Präsident der Ukraine, Anführer des nationalen Widerstands gegen die russische Invasion"
    },
    "quote": {
      "pl": "„Nie potrzebuję podwózki, potrzebuję amunicji. Wolność i suwerenność to wartości bezcenne.”",
      "en": "“I need ammunition, not a ride. Freedom and territorial sovereignty are non-negotiable.”",
      "ru": "«Мне нужны боеприпасы, а не эвакуация. Свобода и суверенитет не продаются.»",
      "fr": "« J'ai besoin de munitions, pas d'un taxi. La liberté et la souveraineté ne sont pas négociables. »",
      "es": "«No necesito un aventón; necesito municiones para defender a mi pueblo y nuestra libertad.»",
      "de": "„Ich brauche keine Mitfahrgelegenheit, ich brauche Munition zur Verteidigung unserer Freiheit.“"
    },
    "whyVote": {
      "pl": "Twój głos za niezłomną obronę wolności i integralności terytorialnej przed tyranią, dążenie do integracji z Unią Europejską i NATO, cyfryzację państwa (aplikacja Diia) i mobilizację społeczną.",
      "en": "Your vote for unflinching defense of free democracy and borders against imperial tyranny, rapid EU/NATO integration, state digitalization (Diia), and rallying international support.",
      "ru": "Ваш выбор за стойкую защиту свободы и границ от имперской агрессии, решительный курс в ЕС и НАТО, цифровизацию госуслуг (Дия) и единение нации.",
      "fr": "Votre voix pour la défense héroïque de la démocratie face à la tyrannie impériale, l'adhésion déterminée à l'UE et à l'OTAN, la numérisation des services publics et l'unité civile.",
      "es": "Valoras el heroísmo cívico en defensa de la soberanía nacional, la lucha inquebrantable por la libertad frente a la tiranía y la integración europea.",
      "de": "Du bewunderst unerschütterlichen Mut zur Verteidigung der nationalen Souveränität, den Widerstand gegen Aggression und die Westintegration."
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
      "fr": "Royaume-Uni",
      "es": "Reino Unido",
      "de": "Vereinigtes Königreich"
    },
    "role": {
      "pl": "Premier Wielkiej Brytanii, lider Partii Pracy (Labour)",
      "en": "Prime Minister of the United Kingdom, leader of the Labour Party",
      "ru": "Премьер-министр Великобритании, лидер Лейбористской партии",
      "fr": "Premier ministre du Royaume-Uni, chef du Parti travailliste",
      "es": "Primer Ministro del Reino Unido, líder del Partido Laborista",
      "de": "Premierminister des Vereinigten Königreichs, Vorsitzender der Labour-Partei"
    },
    "quote": {
      "pl": "„Rządy to codzienna służba narodowi, naprawa usług publicznych i przywrócenie zaufania do prawa.”",
      "en": "“Country first, party second: politics is serious public service, rule of law, and patient reconstruction.”",
      "ru": "«Интересы страны превыше партийных: власть — это честное служение обществу и верховенство закона.»",
      "fr": "« L'intérêt du pays avant celui du parti : la politique exige le sérieux, l'état de droit et la reconstruction méthodique. »",
      "es": "«El servicio público ante todo; reconstruiremos el país con rigor, inversión y responsabilidad.»",
      "de": "„Das Gemeinwohl steht an erster Stelle; wir erneuern unser Land mit Verlässlichkeit und gezielten Investitionen.“"
    },
    "whyVote": {
      "pl": "Oddałbyś na niego głos za odbudowę publicznej służby zdrowia (NHS), powołanie państwowej spółki zielonej energii (Great British Energy), dyscyplinę budżetową i profesjonalizm.",
      "en": "You would vote for him for rebuilding the National Health Service (NHS), establishing Great British Energy for green power, stable fiscal rules, and institutional integrity.",
      "ru": "Вы бы проголосовали за него за восстановление системы здравоохранения (NHS), создание национальной компании зеленой энергетики, фискальный порядок и законность.",
      "fr": "Vous voteriez pour lui pour la réhabilitation du service public de santé (NHS), la création d'un pôle public d'énergie verte, la gestion budgétaire rigoureuse et l'éthique républicaine.",
      "es": "Prefieres el centroizquierda pragmático y disciplinado, la reconstrucción de la sanidad pública (NHS), la inversión verde y la estabilidad institucional.",
      "de": "Du bevorzugst pragmatische, solide Mitte-Links-Politik, Sanierung öffentlicher Dienste, grüne Investitionen und institutionelle Stabilität."
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
      "fr": "Japon",
      "es": "Japón",
      "de": "Japan"
    },
    "role": {
      "pl": "Premier Japonii (2021–2024), twórca doktryny „Nowego Kapitalizmu”",
      "en": "Prime Minister of Japan (2021–2024), pioneer of 'New Capitalism'",
      "ru": "Премьер-министр Японии (2021–2024), автор концепции «Нового капитализма»",
      "fr": "Premier ministre du Japon (2021–2024), promoteur du « Nouveau capitalisme »",
      "es": "Primer Ministro de Japón (2021–2024), promotor del 'Nuevo Capitalismo'",
      "de": "Premierminister von Japan (2021–2024), Initiator des „Neuen Kapitalismus“"
    },
    "quote": {
      "pl": "„Wzrost gospodarczy bez sprawiedliwego podziału owoców nie ma przyszłości — potrzebujemy nowego cyklu płac i inwestycji.”",
      "en": "“Economic growth without virtuous wage distribution is hollow; we need a resilient cycle of investment and human capital.”",
      "ru": "«Экономический рост без справедливого распределения доходов тупиков — нам нужен цикл роста зарплат и инвестиций.»",
      "fr": "« La croissance économique sans partage équitable des fruits est stérile ; nous avons besoin d'un cercle vertueux entre salaires et investissements. »",
      "es": "«Un nuevo capitalismo debe combinar el crecimiento económico dinámico con una distribución salarial justa.»",
      "de": "„Ein neuer Kapitalismus muss wirtschaftliches Wachstum mit gerechterer Einkommensverteilung verbinden.“"
    },
    "whyVote": {
      "pl": "Twój kandydat za podwojenie wydatków na japońską obronność wobec zagrożeń w Azji, presję na podwyżki płac w korporacjach, bezpieczeństwo energetyczne i stabilny ład instytucjonalny.",
      "en": "Your candidate for doubling national defense capability, corporate pressure for wage increases, energy security, and Asian geopolitical stability.",
      "ru": "Ваш кандидат за удвоение расходов на оборону перед лицом вызовов в Азии, стимулирование роста зарплат в корпорациях и энергетическую безопасность.",
      "fr": "Votre candidat pour le doublement historique du budget de défense nippon, la hausse des salaires imposée aux grands groupes et la stabilité géopolitique en Asie.",
      "es": "Respaldas el fortalecimiento de los salarios de los trabajadores, la reindustrialización tecnológica y la disuasión militar aliada en Asia Oriental.",
      "de": "Du unterstützt Lohnsteigerungen durch Wirtschaftspartnerschaft, technologische Innovation und solide Bündnispolitik in Asien."
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
      "fr": "Burkina Faso",
      "es": "Burkina Faso",
      "de": "Burkina Faso"
    },
    "role": {
      "pl": "Prezydent Burkina Faso (1983–1987), rewolucyjny afrykański reformator",
      "en": "President of Burkina Faso (1983–1987), anti-imperialist pan-African visionary",
      "ru": "Президент Буркина-Фасо (1983–1987), лидер панафриканского антиколониального движения",
      "fr": "Président du Burkina Faso (1983–1987), héros révolutionnaire panafricain",
      "es": "Presidente revolucionario de Burkina Faso, líder panafricanista antiimperialista",
      "de": "Revolutionärer Präsident von Burkina Faso, panafrikanischer Vordenker"
    },
    "quote": {
      "pl": "„Ten, kto cię karmi, ten cię kontroluje. Prawdziwa suwerenność to samowystarczalność żywnościowa i godność.”",
      "en": "“He who feeds you, controls you. True independence is self-sufficiency and moral refusal of foreign subjugation.”",
      "ru": "«Тот, кто кормит тебя, тот контролирует тебя. Подлинная независимость — это способность прокормить себя самим.»",
      "fr": "« Celui qui vous nourrit, vous contrôle. La véritable indépendance passe par l'autosuffisance alimentaire et le refus de la dette. »",
      "es": "«Quien te alimenta, te controla. Debemos producir lo que consumimos y emanciparnos.»",
      "de": "„Wer dich füttert, beherrscht dich. Wir müssen verbrauchen, was wir selbst anbauen.“"
    },
    "whyVote": {
      "pl": "Głosowałbyś na niego za masowe zalesianie Sahelu, wielkie kampanie szczepień dzieci, walkę z korupcją władzy (jeździł małym Renault 5), emancypację kobiet i odrzucenie długów kolonialnych.",
      "en": "You would vote for him for planting millions of trees to halt the desert, mass child vaccination, radical official modesty, female liberation, and repudiating predatory foreign debt.",
      "ru": "Вы бы проголосовали за него за посадку 10 миллионов деревьев против опустынивания, всеобщую вакцинацию, борьбу с роскошью чиновников, права женщин и отказ от кабальных долгов.",
      "fr": "Vous voteriez pour lui pour la reforestation massive contre le désert, la vaccination de millions d'enfants, l'émancipation des femmes et le refus courageux des dettes coloniales.",
      "es": "Defiendes la autosuficiencia agrícola popular, la lucha implacable contra la corrupción colonial, la alfabetización masiva y los derechos de las mujeres.",
      "de": "Du stehst für Ernährungssouveränität, kompromisslosen Kampf gegen Elitenkorruption, Alphabetisierung und Frauenrechte in Afrika."
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
      "fr": "Afrique du Sud",
      "es": "Sudáfrica",
      "de": "Südafrika"
    },
    "role": {
      "pl": "Prezydent RPA, laureat Pokojowej Nagrody Nobla, pogromca apartheidu",
      "en": "President of South Africa, Nobel Peace Prize Laureate, champion of racial reconciliation",
      "ru": "Президент ЮАР, лауреат Нобелевской премии мира, победитель апартеида",
      "fr": "Président d'Afrique du Sud, Prix Nobel de la Paix, vainqueur de l'apartheid",
      "es": "Presidente de Sudáfrica, icono mundial de la reconciliación y lucha anti-apartheid",
      "de": "Präsident von Südafrika, weltweites Symbol für Versöhnung und Überwindung der Apartheid"
    },
    "quote": {
      "pl": "„Nigdy, przenigdy ta piękna ziemia nie powinna doświadczyć ucisku jednego człowieka przez drugiego.”",
      "en": "“Never, never and never again shall it be that this beautiful land will experience the oppression of one by another.”",
      "ru": "«Никогда, никогда больше эта прекрасная земля не испытает угнетения одного человека другим.»",
      "fr": "« Jamais, au grand jamais, ce beau pays ne connaîtra à nouveau l'oppression d'un homme par un autre. »",
      "es": "«La educación es el arma más poderosa que puedes usar para cambiar el mundo.»",
      "de": "„Bildung ist die mächtigste Waffe, die du verwenden kannst, um die Welt zu verändern.“"
    },
    "whyVote": {
      "pl": "Oddałbyś na niego głos za wielkoduszne pojednanie narodowe bez odwetu, walkę o prawa obywatelskie i godność każdego człowieka, budowę wielorasowej demokracji i sprawiedliwość społeczną.",
      "en": "You would vote for him for steering national reconciliation without vengeance, unwavering commitment to human dignity, creating a multi-racial democracy, and social justice.",
      "ru": "Вы бы проголосовали за него за мирное национальное примирение без мести, защиту прав человека и построение справедливой демократии без расизма.",
      "fr": "Vous voteriez pour lui pour la réconciliation nationale pacifique sans esprit de vengeance, la conquête des droits civiques fondamentaux et l'édification d'une démocratie fraternelle.",
      "es": "Crees en la reconciliación pacífica de los pueblos, la defensa incansable de los derechos humanos universales y la dignidad de cada ser humano.",
      "de": "Du glaubst an friedliche Aussöhnung, universelle Menschenrechte, Würde für jeden Einzelnen und die Überwindung rassistischer Unterdrückung."
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
      "fr": "International / États-Unis",
      "es": "Estados Unidos / Global",
      "de": "Vereinigte Staaten / Global"
    },
    "role": {
      "pl": "Główny teoretyk anarchokapitalizmu i ekonomista Szkoły Austriackiej",
      "en": "Founding theorist of anarcho-capitalism and Austrian School economist",
      "ru": "Главный теоретик анархо-капитализма и экономист австрийской школы",
      "fr": "Théoricien majeur de l'anarcho-capitalisme et économiste de l'École autrichienne",
      "es": "Economista e historiador, fundador del anarcocapitalismo moderno",
      "de": "Ökonom und Historiker, Begründer des modernen Anarchokapitalismus"
    },
    "quote": {
      "pl": "„Państwo to instytucja zorganizowanego rabunku ubranego w majestat prawa.”",
      "en": "“The State is a gang of thieves writ large; taxation is simply legalized extortion.”",
      "ru": "«Государство — это банда грабителей в масштабах всей страны; налоги — это узаконенный рэкет.»",
      "fr": "« L'État est une organisation criminelle à grande échelle ; l'impôt est une extorsion légalisée. »",
      "es": "«El Estado es una banda de ladrones institucionalizada en gran escala.»",
      "de": "„Der Staat ist eine Vereinigung von Plünderern und Räubern im großen Stil.“"
    },
    "whyVote": {
      "pl": "Twój radykalny wybór za całkowite zniesienie przymusu państwowego, prywatne prawo i sądownictwo arbitrażowe, absolutną nietykalność własności prywatnej i czysty voluntaryzm.",
      "en": "Your radical choice for dismantling all state coercion, private competitive legal codes, absolute sanctity of property, and purely voluntary human relationships.",
      "ru": "Ваш радикальный выбор за полное упразднение принуждения государства, частное право, абсолютную неприкосновенность собственности и чистый волюнтаризм.",
      "fr": "Votre choix radical pour la dissolution complète de la contrainte étatique, la justice privée arbitrale, la sacralité de la propriété et le volontarisme absolu.",
      "es": "Rechazas cualquier forma de coerción estatal o tributaria, defendiendo el Principio de No Agresión y la privatización completa de la sociedad.",
      "de": "Du lehnst staatlichen Zwang und Besteuerung grundsätzlich ab und setzt auf das Nichtaggressionsprinzip sowie reine Privatrechtsgesellschaft."
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
      "fr": "International / États-Unis",
      "es": "Estados Unidos / Global",
      "de": "Vereinigte Staaten / Global"
    },
    "role": {
      "pl": "Filozof, lingwista, dysydent polityczny, myśliciel anarchosyndykalistyczny",
      "en": "Philosopher, linguist, intellectual dissident, and libertarian socialist theorist",
      "ru": "Философ, лингвист, критик империализма, теоретик либертарного социализма",
      "fr": "Philosophe, linguiste, dissident politique et théoricien de l'anarcho-syndicalisme",
      "es": "Lingüista, filósofo y referente del anarcosindicalismo y la crítica al imperialismo",
      "de": "Sprachwissenschaftler, Philosoph und prominenter Kritiker von Konzernmacht und Imperialismus"
    },
    "quote": {
      "pl": "„Każda władza i hierarchia, jeśli nie potrafi dowieść swojej moralnej zasadności, musi zostać natychmiast zlikwidowana.”",
      "en": "“Any structure of authority and domination carries a heavy burden of proof; if it cannot justify itself, it must be dismantled.”",
      "ru": "«Любая властная иерархия обязана доказать свою легитимность; если она не может этого сделать, она должна быть упразднена.»",
      "fr": "« Toute structure d'autorité ou de domination doit prouver sa légitimité ; si elle ne le peut pas, elle doit être démantelée. »",
      "es": "«La responsabilidad de los intelectuales es decir la verdad y desenmascarar las mentiras del poder.»",
      "de": "„Die Verantwortung der Intellektuellen besteht darin, die Wahrheit zu sagen und Lügen der Mächtigen aufzudecken.“"
    },
    "whyVote": {
      "pl": "Poparłbyś go za bezlitosną demaskację imperializmu i propagandy korporacyjnych mediów, bezkompromisową wolność słowa, oddolną demokrację pracowniczą i solidarność ludzi pracy.",
      "en": "You would vote for him for exposing corporate media propaganda and imperial power, absolute defense of free speech, worker self-management, and universal human rights.",
      "ru": "Вы бы поддержали его за разоблачение манипуляций корпоративных СМИ, принципиальную свободу слова, рабочее самоуправление и интернациональную солидарность.",
      "fr": "Vous le soutiendriez pour sa dénonciation de la propagande médiatique et de l'impérialisme, sa défense absolue de la libre parole et l'autogestion ouvrière.",
      "es": "Compartes su crítica implacable a la hegemonía militar corporativa, la desinformación mediática y defiendes el socialismo libertario autogestionario.",
      "de": "Du teilst seine scharfe Analyse von Medienmanipulation und Geopolitik und unterstützt libertären Sozialismus auf Basis von Arbeiterselbstverwaltung."
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
      "fr": "Argentine",
      "es": "Argentina",
      "de": "Argentinien"
    },
    "role": {
      "pl": "Prezydent Argentyny, twórca justycjalizmu (peronizmu), reformator socjalny",
      "en": "President of Argentina, founder of Justicialism (Peronism), social reformer",
      "ru": "Президент Аргентины, создатель хустисиализма (перонизма), социальный реформатор",
      "fr": "Président de l'Argentine, fondateur du justicialisme (péronisme), réformateur social",
      "es": "Tres veces Presidente de Argentina, fundador del movimiento justicialista",
      "de": "Dreimaliger Präsident von Argentinien, Begründer des Peronismus"
    },
    "quote": {
      "pl": "„Dla sprawiedliwości społecznej i suwerenności narodu musimy organizować lud pracujący i stawiać dobro wspólne ponad interes obcego kapitału.”",
      "en": "“For social justice and national sovereignty, we must organize working people and place the common good above foreign capital.”",
      "ru": "«Ради социальной справедливости и суверенитета нации мы должны организовать людей труда и поставить общее благо выше иностранного капитала.»",
      "fr": "« Pour la justice sociale et la souveraineté, nous devons organiser le peuple travailleur et placer le bien commun au-dessus des capitaux étrangers. »",
      "es": "«Para un argentino no hay nada mejor que otro argentino. La justicia social y la soberanía política son sagradas.»",
      "de": "„Soziale Gerechtigkeit, wirtschaftliche Unabhängigkeit und politische Souveränität sind die Säulen unseres Volkes.“"
    },
    "whyVote": {
      "pl": "Poparłbyś go za głęboką obronę praw pracowniczych, nacjonalizację kolei i banków, rozbudowę opieki zdrowotnej i emerytalnej oraz połączenie sprawiedliwości społecznej z dumą narodową.",
      "en": "You would vote for him for staunch defense of labor rights, nationalization of strategic infrastructure, expansive public healthcare, and fusing social justice with patriotic solidarity.",
      "ru": "Вы бы поддержали его за защиту прав трудящихся, национализацию стратегических отраслей, доступную медицину и синтез социальной справедливости с патриотической гордостью.",
      "fr": "Vous voteriez pour lui pour sa défense vigoureuse des droits des travailleurs, la nationalisation des infrastructures stratégiques et l'alliance de la justice sociale avec la fierté nationale.",
      "es": "Apoyas el justicialismo: justicia social para los trabajadores, independencia económica nacional, alianza popular y liderazgo carismático.",
      "de": "Du befürwortest Justizialismus: Arbeitnehmerrechte, staatlich gelenkte Industrialisierung, soziale Gerechtigkeit und nationale Eigenständigkeit."
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
      "fr": "Allemagne / Europe",
      "es": "Alemania",
      "de": "Deutschland"
    },
    "role": {
      "pl": "Liderka Sojuszu BSW, ekonomistka, działaczka na rzecz lewicy tradycyjnej i pokoju",
      "en": "Leader of BSW alliance, economist, advocate for working-class left-conservatism and peace",
      "ru": "Лидер альянса BSW, экономист, поборница традиционного левого солидаризма и мира",
      "fr": "Dirigeante du parti BSW, économiste, figure du souverainisme social et de la gauche traditionnelle",
      "es": "Líder política alemana, fundadora de la Alianza Sahra Wagenknecht (BSW)",
      "de": "Deutsche Politikerin, Gründerin des Bündnisses Sahra Wagenknecht (BSW)"
    },
    "quote": {
      "pl": "„Prawdziwa lewica musi bronić zwykłych pracowników, rodzimego przemysłu i bezpieczeństwa socjalnego, a nie uciekać w moralizatorski liberalizm elit.”",
      "en": "“A genuine left must defend ordinary workers, domestic industry, and social safety nets, rather than retreating into moralizing elite liberalism.”",
      "ru": "«Подлинные левые обязаны защищать людей труда, отечественную промышленность и социальные гарантии, а не морализаторский либерализм элит.»",
      "fr": "« Une vraie gauche doit défendre les salariés ordinaires, l'industrie locale et la sécurité sociale plutôt que de céder au moralisme libéral des élites. »",
      "es": "«Necesitamos justicia social para los trabajadores y sentido común en economía y migración, sin dogmas elitistas.»",
      "de": "„Wir brauchen soziale Gerechtigkeit für Arbeitnehmer und wirtschaftliche Vernunft, frei von akademischer Elitenpolitik.“"
    },
    "whyVote": {
      "pl": "Poparłbyś ją za bezkompromisową walkę o płace i emerytury, obronę tradycyjnego przemysłu i taniej energii, sprzeciw wobec militaryzmu oraz sceptycyzm wobec niekontrolowanej imigracji.",
      "en": "You would vote for her for championing wages and pensions, protecting industrial jobs and energy security, opposing foreign militarism, and skepticism toward unregulated border policies.",
      "ru": "Вы бы поддержали её за борьбу за достойные пенсии и зарплаты, защиту рабочих мест в индустрии, мирные инициативы и трезвый подход к миграционной политике.",
      "fr": "Vous voteriez pour elle pour son engagement pour les salaires et retraites, la protection de l'outil industriel, son pacifisme et son refus du mondialisme sans frontières.",
      "es": "Combinas políticas económicas de izquierda (salarios altos, pensiones dignas, protección industrial) con moderación migratoria y soberanía diplomática.",
      "de": "Du verbindest linke Sozialpolitik (gute Löhne, sichere Renten, Industrieschutz) mit kontrollierter Zuwanderung und diplomatischer Entspannung."
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
      "fr": "Royaume-Uni",
      "es": "Reino Unido",
      "de": "Vereinigtes Königreich"
    },
    "role": {
      "pl": "Premier Wielkiej Brytanii (1945–1951), twórca NHS i powojennego państwa dobrobytu",
      "en": "Prime Minister of the UK (1945–1951), architect of the NHS and postwar welfare state",
      "ru": "Премьер-министр Великобритании (1945–1951), архитектор NHS и социального государства",
      "fr": "Premier ministre du Royaume-Uni (1945–1951), architecte du NHS et de l'État-providence",
      "es": "Primer Ministro del Reino Unido (1945–1951), creador del NHS y del Estado del bienestar británico",
      "de": "Premierminister des Vereinigten Königreichs (1945–1951), Schöpfer des britischen Wohlfahrtsstaates und des NHS"
    },
    "quote": {
      "pl": "„Państwo dobrobytu nie jest luksusem, lecz fundamentem cywilizowanego społeczeństwa, w którym nikt nie boi się choroby ani biedy.”",
      "en": "“The welfare state is not a luxury, but the foundation of a civilized society where no citizen fears illness, unemployment, or destitution.”",
      "ru": "«Социальное государство — не роскошь, а фундамент цивилизованного общества, где ни один гражданин не боится болезни или нищеты.»",
      "fr": "« L'État-providence n'est pas un luxe, mais le fondement d'une société civilisée où nul citoyen ne craint la maladie ou l'indigence. »",
      "es": "«Debemos construir una sociedad justa donde ningún ciudadano quede desprotegido en la enfermedad o la pobreza.»",
      "de": "„Wir müssen eine gerechte Gesellschaft aufbauen, in der kein Bürger in Krankheit und Armut alleingelassen wird.“"
    },
    "whyVote": {
      "pl": "Poparłbyś go za stworzenie bezpłatnej publicznej służby zdrowia (NHS), upaństwowienie kolei, węgla i hutnictwa, budowę tanich mieszkań społecznych oraz spokojny, patriotyczny porządek.",
      "en": "You would vote for him for creating the National Health Service (NHS), nationalizing critical public utilities, building massive council housing, and maintaining disciplined civic patriotism.",
      "ru": "Вы бы поддержали его за создание бесплатного здравоохранения (NHS), национализацию базовых отраслей, масштабное социальное жильё и патриотический порядок.",
      "fr": "Vous voteriez pour lui pour la création du service public de santé (NHS), la nationalisation des monopoles publics, le logement social et un républicanisme pragmatique et patriotique.",
      "es": "Valoras la creación histórica de un sistema nacional de salud gratuito y universal (NHS), la seguridad social para todos y la nacionalización de servicios básicos.",
      "de": "Du schätzt den Aufbau universeller kostenloser Gesundheitsversorgung (NHS), das soziale Sicherungsnetz und die demokratisch-sozialistische Nachkriegsordnung."
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
      "fr": "Bolivie",
      "es": "Bolivia",
      "de": "Bolivien"
    },
    "role": {
      "pl": "Prezydent Boliwii (2006–2019), przywódca ruchu rdzennych mieszkańców i obrońca suwerenności zasobów",
      "en": "President of Bolivia (2006–2019), indigenous trade union leader, champion of resource nationalization",
      "ru": "Президент Боливии (2006–2019), профсоюзный лидер коренных народов, поборник национализации недр",
      "fr": "Président de la Bolivie (2006–2019), leader syndical indigène et artisan de la nationalisation des ressources",
      "es": "Primer Presidente indígena de Bolivia (2006–2019), líder del MAS",
      "de": "Erster indigener Präsident von Bolivien (2006–2019), MAS-Vorsitzender"
    },
    "quote": {
      "pl": "„Nasze bogactwa naturalne muszą służyć ludziom pracy i rdzennym społecznościom, a nie zagranicznym korporacjom.”",
      "en": "“Our natural wealth must serve the working people and indigenous communities, never transnational corporate monopolies.”",
      "ru": "«Наши природные ресурсы должны служить людям труда и общинам, а не иностранным корпорациям.»",
      "fr": "« Nos ressources naturelles doivent servir le peuple travailleur et nos communautés, non les conglomérats étrangers. »",
      "es": "«Nuestra lucha es por la dignidad de los pueblos originarios y la defensa de la Madre Tierra frente al saqueo colonial.»",
      "de": "„Unser Kampf gilt der Würde der indigenen Völker und dem Schutz von Mutter Erde vor kolonialer Ausbeutung.“"
    },
    "whyVote": {
      "pl": "Poparłbyś go za nacjonalizację gazu i ropy naftowej, gwałtowny spadek ubóstwa, walkę z analfabetyzmem oraz dumę z rdzennych tradycji kulturowych i wspólnotowych.",
      "en": "You would vote for him for nationalizing oil and gas fields, historic poverty reduction, expanding literacy, and reviving indigenous communitarian pride.",
      "ru": "Вы бы поддержали его за национализацию нефтегазовой отрасли, колоссальное сокращение бедности, ликвидацию неграмотности и верность традициям общин.",
      "fr": "Vous voteriez pour lui pour la nationalisation des hydrocarbures, la baisse historique de la pauvreté et l'affirmation des traditions communautaires.",
      "es": "Respaldas la nacionalización del gas y litio, el reconocimiento constitucional de las naciones indígenas y las políticas de inclusión social.",
      "de": "Du unterstützt Verstaatlichung von Bodenschätzen zur Armutsbekämpfung, verfassungsmäßige Rechte für Indigene und Umweltschutz."
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
      "fr": "États-Unis",
      "es": "Estados Unidos",
      "de": "Vereinigte Staaten"
    },
    "role": {
      "pl": "Lider ruchu praw obywatelskich, laureat Pokojowej Nagrody Nobla",
      "en": "Civil rights movement leader, Nobel Peace Prize laureate",
      "ru": "Лидер движения за гражданские права, лауреат Нобелевской премии мира",
      "fr": "Leader du mouvement des droits civiques, prix Nobel de la paix",
      "es": "Líder histórico del movimiento por los derechos civiles y la justicia económica",
      "de": "Historischer Anführer der Bürgerrechtsbewegung und Verfechter sozialer Gerechtigkeit"
    },
    "quote": {
      "pl": "„Mam marzenie, że pewnego dnia ten naród powstanie i będzie żył w zgodzie z prawdziwym sensem swojego powołania.”",
      "en": "“I have a dream that one day this nation will rise up and live out the true meaning of its creed.”",
      "ru": "«У меня есть мечта, что однажды эта нация восстанет и воплотит истинный смысл своего кредо.»",
      "fr": "« J'ai fait un rêve qu'un jour cette nation se lèvera et vivra la vraie signification de son credo. »",
      "es": "«Tengo un sueño: que mis hijos sean juzgados por el contenido de su carácter y no por el color de su piel.»",
      "de": "„Ich habe einen Traum, dass meine Kinder nach dem Inhalt ihres Charakters beurteilt werden, nicht nach ihrer Hautfarbe.“"
    },
    "whyVote": {
      "pl": "Głosowałbyś na niego za niestrudzoną walkę z dyskryminacją rasową, obronę praw pracowniczych i uboższych, sprzeciw wobec militaryzmu oraz wiarę w pokojowe braterstwo i godność człowieka.",
      "en": "You would vote for him for his tireless battle against racial injustice, championing worker rights and poverty alleviation, non-violent resistance, and moral leadership.",
      "ru": "Вы бы проголосовали за него за неустанную борьбу с расовой сегрегацией, защиту прав трудящихся, ненасильственный протест и веру в человеческое братство.",
      "fr": "Vous voteriez pour lui pour sa lutte acharnée contre les injustices raciales, sa défense des travailleurs et des plus démunis, et son attachement à la non-violence.",
      "es": "Crees en la resistencia noviolenta, la igualdad racial universal, la erradicación de la pobreza mediante un salario mínimo vital y la paz.",
      "de": "Du glaubst an gewaltfreien Widerstand, universelle Bürgerrechte, ein bedingungsloses Grundeinkommen gegen Armut und internationale Abrüstung."
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
      "fr": "Inde",
      "es": "India",
      "de": "Indien"
    },
    "role": {
      "pl": "Ojciec niepodległych Indii, prekursor filozofii ahinsy (bezprzemocy)",
      "en": "Father of the Indian Nation, pioneer of Satyagraha and non-violent resistance",
      "ru": "Отец нации Индии, создатель философии сатьяграхи (ненасилия)",
      "fr": "Père de la nation indienne, apôtre de la non-violence (Satyagraha)",
      "es": "Padre de la nación india, apóstol de la noviolencia (Ahimsa) y la resistencia pacífica",
      "de": "Vater der indischen Nation, Vordenker der Gewaltlosigkeit (Ahimsa) und des zivilen Ungehorsams"
    },
    "quote": {
      "pl": "„Bądź zmianą, którą pragniesz ujrzeć w świecie.”",
      "en": "“Be the change that you wish to see in the world.”",
      "ru": "«Будь тем изменением, которое ты хочешь видеть в этом мире.»",
      "fr": "« Soyez le changement que vous voulez voir dans le monde. »",
      "es": "«Sé el cambio que quieres ver en el mundo; la noviolencia es la mayor fuerza de la humanidad.»",
      "de": "„Sei du selbst die Veränderung, die du dir wünschst für diese Welt; Gewaltlosigkeit ist die mächtigste Kraft.“"
    },
    "whyVote": {
      "pl": "Oddałbyś na niego głos za obronę samowystarczalności lokalnych wspólnot, odrzucenie przemocy, tolerancję religijną, skromność osobistą i zrzucenie kolonialnego jarzma.",
      "en": "You would vote for him for village-level economic democracy, radical pacifism, anti-imperialism, religious pluralism, and ethical leadership.",
      "ru": "Вы бы проголосовали за него за развитие местного самоуправления, абсолютный пацифизм, борьбу против колониального гнёта и нравственную стойкость.",
      "fr": "Vous voteriez pour lui pour son modèle de démocratie villageoise, son pacifisme intégral, son rejet de l'impérialisme et son éthique exemplaire.",
      "es": "Defiendes la desobediencia civil pacífica, la economía local autosuficiente basada en aldeas, la tolerancia interreligiosa y la ética moral en política.",
      "de": "Du stehst für gewaltfreien zivilen Ungehorsam, dezentrale Dorfökonomie, religiöse Toleranz und ethische Reinheit des politischen Handelns."
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
      "fr": "Pologne / Allemagne",
      "es": "Polonia / Alemania",
      "de": "Polen / Deutschland"
    },
    "role": {
      "pl": "Działaczka socjalistyczna, teoretyczka marksizmu i pacyfistka",
      "en": "Marxist theorist, anti-war activist, revolutionary socialist",
      "ru": "Теоретик марксизма, антивоенная активистка, социалистка",
      "fr": "Théoricienne marxiste, militante pacifiste et socialiste révolutionnaire",
      "es": "Teórica marxista revolucionaria, cofundadora de la Liga Espartaquista",
      "de": "Revolutionäre marxistische Theoretikerin, Mitgründerin des Spartakusbundes"
    },
    "quote": {
      "pl": "„Wolność jest zawsze wolnością dla tego, który myśli inaczej.”",
      "en": "“Freedom is always and exclusively freedom for the one who thinks differently.”",
      "ru": "«Свобода — это всегда свобода для того, кто мыслит иначе.»",
      "fr": "« La liberté, c'est toujours la liberté de celui qui pense autrement. »",
      "es": "«La libertad siempre es la libertad de quien piensa diferente; el socialismo sin democracia no es socialismo.»",
      "de": "„Freiheit ist immer die Freiheit des Andersdenkenden; Sozialismus ohne Demokratie ist kein Sozialismus.“"
    },
    "whyVote": {
      "pl": "Oddałbyś na nią głos za bezkompromisowy sprzeciw wobec wojen imperialistycznych, wierność oddolnej demokracji rad robotniczych, krytykę autorytaryzmu i obronę wolności słowa.",
      "en": "You would vote for her for courageously opposing imperialist warfare, defending bottom-up council democracy, and warning against autocratic bureaucratic control.",
      "ru": "Вы бы проголосовали за неё за отважную борьбу против империалистической бойни, верность рабочей демократии и защиту свободы мысли.",
      "fr": "Vous voteriez pour elle pour son opposition farouche aux guerres impérialistes, sa défense de la démocratie de conseil et sa vigilance contre l'autoritarisme.",
      "es": "Apoyas la revolución socialista internacional desde las bases, el antibelicismo radical, la democracia asamblearia obrera y la libertad de disentir.",
      "de": "Du befürwortest basisdemokratische Arbeiterräte, entschiedenen Antimilitarismus, den Sturz des Kapitalismus und unverbrüchliche Meinungsfreiheit."
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
      "fr": "République tchèque",
      "es": "República Checa",
      "de": "Tschechien"
    },
    "role": {
      "pl": "Pisarz, dysydent, przywódca Aksamitnej Rewolucji, Prezydent Czech",
      "en": "Playwright, dissident, Velvet Revolution leader, President of the Czech Republic",
      "ru": "Писатель, диссидент, лидер Бархатной революции, президент Чехии",
      "fr": "Écrivain, dissident, dirigeant de la Révolution de velours, président de la République tchèque",
      "es": "Dramaturgo disidente, líder de la Revolución de Terciopelo y Presidente de Chequia",
      "de": "Dissident, Dramatiker, Anführer der Samtenen Revolution und Staatspräsident"
    },
    "quote": {
      "pl": "„Prawda i miłość muszą zatriumfować nad kłamstwem i nienawiścią.”",
      "en": "“Truth and love must prevail over lies and hatred.”",
      "ru": "«Правда и любовь должны победить ложь и ненависть.»",
      "fr": "« La vérité et l'amour doivent triompher du mensonge et de la haine. »",
      "es": "«La verdad y el amor deben prevalecer sobre la mentira y el odio.»",
      "de": "„Wahrheit und Liebe müssen über Lüge und Hass triumphieren.“"
    },
    "whyVote": {
      "pl": "Głosowałbyś na niego za życie w prawdzie, obronę praw człowieka, pacyfistyczny demontaż totalitaryzmu, zakorzenienie w kulturze europejskiej i głęboki humanizm.",
      "en": "You would vote for him for living in truth, dismantling communist dictatorship without violence, defending civil rights, and championing European moral integration.",
      "ru": "Вы бы проголосовали за него за жизнь не по лжи, ненасильственный демонтаж тоталитаризма, европейский гуманизм и защиту фундаментальных прав личности.",
      "fr": "Vous voteriez pour lui pour son courage moral de vivre dans la vérité, le démantèlement pacifique du totalitarisme et son dévouement aux droits humains.",
      "es": "Crees en el poder ético de los ciudadanos 'viviendo en la verdad', la resistencia cívica noviolenta a las dictaduras y los derechos humanos universales.",
      "de": "Du glaubst an die Kraft des gewaltfreien Protests, ein Leben in Wahrheit jenseits von Ideologien, Zivilcourage und universelle Menschenrechte."
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
      "fr": "Royaume-Uni",
      "es": "Reino Unido",
      "de": "Vereinigtes Königreich"
    },
    "role": {
      "pl": "Premier Wielkiej Brytanii w czasie II wojny światowej, mąż stanu",
      "en": "British Prime Minister during World War II, historic statesman",
      "ru": "Премьер-министр Великобритании во Второй мировой войне, государственный деятель",
      "fr": "Premier ministre britannique pendant la Seconde Guerre mondiale, homme d'État",
      "es": "Primer Ministro del Reino Unido durante la Segunda Guerra Mundial",
      "de": "Premierminister des Vereinigten Königreichs während des Zweiten Weltkriegs"
    },
    "quote": {
      "pl": "„Nigdy w historii ludzkich konfliktów tak wielu nie zawdzięczało tak wiele tak nielicznym.”",
      "en": "“Never in the field of human conflict was so much owed by so many to so few.”",
      "ru": "«Никогда в истории человеческих конфликтов столь многие не были обязаны столь немногим.»",
      "fr": "« Jamais dans l'histoire des conflits tant de gens n'ont dû autant à si peu. »",
      "es": "«Lucharemos en las playas, lucharemos en las colinas; jamás nos rendiremos.»",
      "de": "„Wir werden an den Stränden kämpfen, wir werden auf den Hügeln kämpfen; wir werden uns niemals ergeben.“"
    },
    "whyVote": {
      "pl": "Oddałbyś na niego głos za niezłomność wobec tyranii faszyzmu, bezkompromisowy patriotyzm, silną obronność państwa, wiarę w zachodnią cywilizację i wolny rynek.",
      "en": "You would vote for him for heroic defiance against totalitarian aggression, resolute defense of national sovereignty, classic parliamentary conservatism, and strong defense.",
      "ru": "Вы бы проголосовали за него за несокрушимое сопротивление фашистской тирании, верность британской монархии и сильную оборонную политику.",
      "fr": "Vous voteriez pour lui pour son refus absolu de capituler devant le fascisme, son courage héroïque, son conservatisme parlementaire et sa puissance militaire.",
      "es": "Admiras el coraje inquebrantable ante la tiranía nazi, el patriotismo británico indómito, la alianza con el mundo libre y la defensa de la civilización occidental.",
      "de": "Du bewunderst unerschütterliche Standhaftigkeit gegen den Nationalsozialismus, britischen Patriotismus und die Verteidigung der westlichen Zivilisation."
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
      "fr": "États-Unis",
      "es": "Estados Unidos",
      "de": "Vereinigte Staaten"
    },
    "role": {
      "pl": "Główny autor Deklaracji Niepodległości, 3. Prezydent USA",
      "en": "Principal author of the Declaration of Independence, 3rd US President",
      "ru": "Автор Декларации независимости, 3-й президент США",
      "fr": "Rédacteur principal de la Déclaration d'indépendance, 3e président des États-Unis",
      "es": "Tercer Presidente de EE. UU., redactor principal de la Declaración de Independencia",
      "de": "Dritter US-Präsident, Hauptautor der amerikanischen Unabhängigkeitserklärung"
    },
    "quote": {
      "pl": "„Uważamy te prawdy za oczywiste: że wszyscy ludzie stworzeni są równymi, że zostali obdarzeni przez Stwórcę niezbywalnymi Prawami.”",
      "en": "“We hold these truths to be self-evident, that all men are created equal, that they are endowed by their Creator with certain unalienable Rights.”",
      "ru": "«Мы исходим из той самоочевидной истины, что все люди созданы равными и наделены неотчуждаемыми правами.»",
      "fr": "« Nous tenons ces vérités pour évidentes en elles-mêmes : que tous les hommes sont créés égaux et dotés de droits inaliénables. »",
      "es": "«El árbol de la libertad debe ser regado de vez en cuando con la sangre de patriotas y tiranos.»",
      "de": "„Der Baum der Freiheit muss von Zeit zu Zeit mit dem Blut von Patrioten und Tyrannen gegossen werden.“"
    },
    "whyVote": {
      "pl": "Głosowałbyś na niego za obronę wolności słowa i prasy, rozdział kościoła od państwa, decentralizację władzy, minimalny aparat rządu i wiarę w prawa jednostki.",
      "en": "You would vote for him for enshrining individual liberty, freedom of speech, separation of church and state, strict limits on federal government power, and agrarian republicanism.",
      "ru": "Вы бы проголосовали за него за провозглашение неотчуждаемых прав человека, свободу слова, отделение церкви от государства и минимальное вмешательство властей.",
      "fr": "Vous voteriez pour lui pour la consécration des libertés individuelles, la laïcité de l'État, la décentralisation républicaine et la primauté de la liberté d'expression.",
      "es": "Valoras el gobierno estrictamente limitado, la descentralización federal, la separación absoluta de Iglesia y Estado y los derechos naturales inalienables.",
      "de": "Du schätzt minimale Staatsmacht, Dezentralisierung, strikte Trennung von Religion und Staat sowie die verfassungsrechtlich geschützten Grundrechte."
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
      "fr": "Pologne",
      "es": "Polonia",
      "de": "Polen"
    },
    "role": {
      "pl": "Przywódca NSZZ „Solidarność”, laureat Pokojowej Nagrody Nobla, Prezydent RP",
      "en": "Leader of Solidarity, Nobel Peace Prize laureate, President of Poland",
      "ru": "Лидер профсоюза «Солидарность», лауреат Нобелевской премии мира, президент Польши",
      "fr": "Leader de Solidarność, prix Nobel de la paix, président de la Pologne",
      "es": "Líder histórico del sindicato Solidarność, Premio Nobel de la Paz y Presidente de Polonia",
      "de": "Historischer Anführer der Solidarność, Friedensnobelpreisträger und Präsident Polens"
    },
    "quote": {
      "pl": "„Nie chcem, ale muszem. Zrobiliśmy to bez użycia ani jednego naboju.”",
      "en": "“We did it without firing a single shot and without violence.”",
      "ru": "«Мы сделали это мирно, не сделав ни единого выстрела.»",
      "fr": "« Nous l'avons fait pacifiquement, sans tirer un seul coup de feu. »",
      "es": "«No hay libertad sin solidaridad; la fe y el coraje de los trabajadores derribaron el comunismo.»",
      "de": "„Es gibt keine Freiheit ohne Solidarität; Mut und Glaube der Arbeiter brachten den Kommunismus zu Fall.“"
    },
    "whyVote": {
      "pl": "Oddałbyś na niego głos za przełamanie żelaznej kurtyny, obronę praw robotników przeciwko komunistycznej partii, wierność wartościom chrześcijańskim i pokojowy demontaż imperium radzieckiego.",
      "en": "You would vote for him for toppling the Soviet sphere of influence through labor solidarity, courage against communist dictatorship, and peaceful democratic transition.",
      "ru": "Вы бы проголосовали за него за объединение рабочих против коммунистической номенклатуры, свержение тоталитарного режима и мирный переход к демократии.",
      "fr": "Vous voteriez pour lui pour avoir fait tomber le rideau de fer grâce à la solidarité ouvrière, son courage face à la dictature et sa transition démocratique pacifique.",
      "es": "Respaldas la lucha sindical pacífica contra la opresión totalitaria, los valores de la doctrina social católica y la democratización de Europa del Este.",
      "de": "Du stehst für friedlichen gewerkschaftlichen Arbeiterprotest gegen Unterdrückung, christliche Sozialethik und den Triumph der Demokratie in Osteuropa."
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
      "fr": "Écosse / Royaume-Uni",
      "es": "Escocia / Reino Unido",
      "de": "Schottland / Vereinigtes Königreich"
    },
    "role": {
      "pl": "Filozof Oświecenia, ojciec nowożytnej ekonomii, autor „Bogactwa narodów”",
      "en": "Enlightenment philosopher, father of modern economics, author of 'The Wealth of Nations'",
      "ru": "Философ Просвещения, основоположник классической политэкономии",
      "fr": "Philosophe des Lumières, père de l'économie moderne, auteur de « La Richesse des nations »",
      "es": "Filósofo moral escocés, padre de la economía política moderna",
      "de": "Schottischer Moralphilosoph, Begründer der modernen Nationalökonomie"
    },
    "quote": {
      "pl": "„Nie od przychylności rzeźnika, piwowara czy piekarza oczekujemy naszego obiadu, lecz od ich dbałości o własny interes.”",
      "en": "“It is not from the benevolence of the butcher, the brewer, or the baker that we expect our dinner, but from their regard to their own interest.”",
      "ru": "«Не от благожелательности мясника, пивовара или булочника ожидаем мы получить свой обед, а от соблюдения ими своих собственных интересов.»",
      "fr": "« Ce n'est pas de la bienveillance du boucher, du brasseur ou du boulanger que nous attendons notre dîner, mais de l'attention qu'ils portent à leur propre intérêt. »",
      "es": "«No es de la benevolencia del carnicero o el panadero de donde esperamos nuestra cena, sino de su propio interés.»",
      "de": "„Nicht vom Wohlwollen des Bäckers erwarten wir unsere Mahlzeit, sondern von seinem eigenen Vorteil.“"
    },
    "whyVote": {
      "pl": "Oddałbyś na niego głos za stworzenie podstaw wolnego handlu, podziału pracy, walkę z merkantylistycznymi monopolami oraz wiarę w niewidzialną rękę rynku i moralną sympatię.",
      "en": "You would vote for him for establishing free trade theory, dismantling state-granted cartels, championing market competition, and articulating the division of labor.",
      "ru": "Вы бы проголосовали за него за доказательство преимуществ свободной торговли, разделения труда, борьбу с государственными монополиями и веру в рыночные стимулы.",
      "fr": "Vous voteriez pour lui pour avoir fondé la théorie du libre-échange, combattu les monopoles mercantilistes d'État et valorisé la division du travail.",
      "es": "Crees en la mano invisible del mercado, la división del trabajo como fuente de riqueza nacional, el libre comercio y la crítica a los monopolios privilegiados.",
      "de": "Du glaubst an die unsichtbare Hand des Marktes, Arbeitsteilung als Wohlstandsquelle, weltweiten Freihandel und die Ablehnung von Kronmonopolen."
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
      "fr": "États-Unis",
      "es": "Estados Unidos",
      "de": "Vereinigte Staaten"
    },
    "role": {
      "pl": "32. Prezydent USA (1933–1945), twórca Nowego Ładu (New Deal) i przywódca aliantów",
      "en": "32nd U.S. President (1933–1945), architect of the New Deal and Allied wartime leader",
      "ru": "32-й президент США (1933–1945), создатель «Нового курса» и лидер союзников",
      "fr": "32e président des États-Unis (1933–1945), artisan du New Deal et leader des Alliés",
      "es": "32.º Presidente de los Estados Unidos (1933–1945), artífice del New Deal",
      "de": "32. Präsident der Vereinigten Staaten (1933–1945), Schöpfer des New Deal"
    },
    "quote": {
      "pl": "„Jedyną rzeczą, której musimy się bać, jest sam strach.”",
      "en": "“The only thing we have to fear is fear itself.”",
      "ru": "«Единственное, чего нам следует бояться, — это сам страх.»",
      "fr": "« La seule chose dont nous devons avoir peur, c'est de la peur elle-même. »",
      "es": "«A lo único que debemos temer es al miedo mismo; la verdadera libertad individual no existe sin seguridad económica.»",
      "de": "„Das Einzige, was wir zu fürchten haben, ist die Furcht selbst; wahre Freiheit setzt wirtschaftliche Sicherheit voraus.“"
    },
    "whyVote": {
      "pl": "Oddałbyś na niego głos za stworzenie państwa opiekuńczego (New Deal), ubezpieczeń społecznych, regulację Wall Street, zdecydowaną mobilizację wojenną przeciw tyranii oraz wizję powojennego ładu i ONZ.",
      "en": "You would vote for him for pioneering the American welfare state (New Deal), Social Security, regulating financial markets, mobilizing industry against fascism, and championing the United Nations.",
      "ru": "Вы бы проголосовали за него за введение социального обеспечения («Новый курс»), регулирование Уолл-стрит, мощную мобилизацию против фашизма и создание фундамента ООН.",
      "fr": "Vous voteriez pour lui pour l'instauration de l'État-providence (New Deal), la sécurité sociale, la régulation bancaire, la victoire contre l'Axe et la fondation de l'ONU.",
      "es": "Apoyas la intervención decidida del Estado para rescatar a la sociedad de las crisis (New Deal), la creación de la seguridad social y el liderazgo en la victoria contra el fascismo.",
      "de": "Du befürwortest staatliche Investitionsprogramme gegen Wirtschaftskrisen (New Deal), soziale Grundsicherung und entschlossene Führung im Weltkrieg."
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
      "fr": "France",
      "es": "Francia",
      "de": "Frankreich"
    },
    "role": {
      "pl": "Przywódca Wolnej Francji w czasie II wojny światowej, prezydent V Republiki i mąż stanu",
      "en": "Leader of Free France during World War II, founder of the Fifth Republic and statesman",
      "ru": "Лидер движения «Свободная Франция», основатель Пятой республики и выдающийся государственный деятель",
      "fr": "Chef de la France libre pendant la Seconde Guerre mondiale, fondateur de la Ve République et homme d'État",
      "es": "General, líder de la Francia Libre y fundador de la V República",
      "de": "General, Anführer des Freien Frankreichs und Gründer der Fünften Republik"
    },
    "quote": {
      "pl": "„Francja nie może być Francją bez wielkości.”",
      "en": "“France cannot be France without greatness.”",
      "ru": "«Франция не может быть Францией без величия.»",
      "fr": "« La France ne peut être la France sans la grandeur. »",
      "es": "«Francia no puede ser Francia sin la grandeza; la nación soberana debe guiar su propio destino sin tutelas.»",
      "de": "„Frankreich kann nicht Frankreich sein ohne Größe; eine souveräne Nation duldet keine fremde Vormundschaft.“"
    },
    "whyVote": {
      "pl": "Głosowałbyś na niego za odmowę kapitulacji w 1940 roku, żelazną obronę suwerenności narodowej, godność państwa, planowanie strategiczne (dirigisme) i niezależność geopolityczną.",
      "en": "You would vote for him for refusing surrender in 1940, uncompromising defense of national sovereignty, state-led strategic development (dirigisme), and foreign policy independence.",
      "ru": "Вы бы проголосовали за него за отказ от капитуляции в 1940 году, бескомпромиссную защиту национального суверенитета, сильное государство (дирижизм) и независимую внешнюю политику.",
      "fr": "Vous voteriez pour lui pour son refus historique de l'armistice en 1940, sa défense intraitable de la souveraineté, la planification économique gaulliste et la grandeur nationale.",
      "es": "Crees en la independencia geopolítica estratégica, una presidencia ejecutiva fuerte, el patriotismo republicano y el desarrollo de tecnologías nacionales punteras.",
      "de": "Du schätzt nationale strategische Unabhängigkeit, eine starke präsidiale Exekutive, patriotisches Selbstbewusstsein und strategische Schlüsselindustrien."
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
      "fr": "Pologne",
      "es": "Polonia",
      "de": "Polen"
    },
    "role": {
      "pl": "Premier Rządu RP na Uchodźstwie i Naczelny Wódz Polskich Sił Zbrojnych (1939–1943)",
      "en": "Prime Minister of the Polish Government-in-Exile and Commander-in-Chief (1939–1943)",
      "ru": "Премьер-министр польского правительства в изгнании и Верховный главнокомандующий (1939–1943)",
      "fr": "Premier ministre du gouvernement polonais en exil et commandant en chef (1939–1943)",
      "es": "General de Armas, Primer Ministro del Gobierno de Polonia en el Exilio",
      "de": "Generalleutnant, Ministerpräsident der polnischen Exilregierung im Zweiten Weltkrieg"
    },
    "quote": {
      "pl": "„W imię honoru i wolności narodu będziemy walczyć do ostatecznego zwycięstwa.”",
      "en": "“In the name of the honour and freedom of the nation, we shall fight until total victory.”",
      "ru": "«Во имя чести и свободы нации мы будем сражаться до окончательной победы.»",
      "fr": "« Au nom de l'honneur et de la liberté de la nation, nous combattrons jusqu'à la victoire totale. »",
      "es": "«Luchamos no solo por la libertad de Polonia, sino por la victoria del derecho y la justicia moral en el mundo entero.»",
      "de": "„Wir kämpfen nicht nur für Polens Freiheit, sondern für den Sieg des Rechts und der Gerechtigkeit weltweit.“"
    },
    "whyVote": {
      "pl": "Poparłbyś go za niezłomną walkę o wolną i niepodległą Polskę, odbudowę armii na obczyźnie, demokratyczny kurs państwa oraz bezkompromisowe dążenie do prawdy o zbrodni katyńskiej.",
      "en": "You would vote for him for organizing the Polish Armed Forces in exile, unwavering fight against Nazi occupation, democratic integrity, and relentless pursuit of truth regarding Katyn.",
      "ru": "Вы бы поддержали его за организацию польской армии в изгнании, бескомпромиссную борьбу против оккупации, защиту государственного суверенитета и стремление к демократическому порядку.",
      "fr": "Vous voteriez pour lui pour la reconstruction héroïque de l'armée polonaise en exil, son engagement démocratique et sa lutte inébranlable pour la libération nationale.",
      "es": "Respaldas la lealtad incondicional a la independencia de la patria, el republicanismo democrático moderado y la diplomacia firme entre grandes potencias.",
      "de": "Du stehst für unerschütterliche Loyalität zur Unabhängigkeit der Heimat, gemäßigten demokratischen Republikanismus und diplomatische Standfestigkeit."
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
      "fr": "États-Unis",
      "es": "Estados Unidos",
      "de": "Vereinigte Staaten"
    },
    "role": {
      "pl": "Naczelny Dowódca Sił Alianckich w Europie (SHAEF), 34. Prezydent USA (1953–1961)",
      "en": "Supreme Allied Commander Europe (SHAEF), 34th U.S. President (1953–1961)",
      "ru": "Верховный главнокомандующий союзными войсками в Европе, 34-й президент США (1953–1961)",
      "fr": "Commandant suprême des forces alliées en Europe (SHAEF), 34e président des États-Unis (1953–1961)",
      "es": "Comandante Supremo Aliado en Europa y 34.º Presidente de los Estados Unidos",
      "de": "Alliierter Oberbefehlshaber im Zweiten Weltkrieg und 34. US-Präsident"
    },
    "quote": {
      "pl": "„W radach rządowych musimy strzec się przed nieuzasadnionym wpływem kompleksu militarno-przemysłowego.”",
      "en": "“In the councils of government, we must guard against the acquisition of unwarranted influence by the military-industrial complex.”",
      "ru": "«В органах власти мы должны остерегаться неоправданного влияния военно-промышленного комплекса.»",
      "fr": "« Dans les conseils du gouvernement, nous devons prendre garde à l'influence injustifiée du complexe militaro-industriel. »",
      "es": "«Debemos mantener la guardia contra la adquisición de influencia ilegítima por parte del complejo militar-industrial.»",
      "de": "„Wir müssen uns vor unzulässigem Einfluss durch den militärisch-industriellen Komplex hüten.“"
    },
    "whyVote": {
      "pl": "Oddałbyś na niego głos za genialne dowodzenie operacją Overlord (D-Day), pragmatyczny konserwatyzm („Modern Republicanism”), budowę autostrad międzystanowych, zrównoważony budżet i przestrogę przed militaryzmem.",
      "en": "You would vote for him for masterminding D-Day, fiscal moderation, creating the Interstate Highway System, defending NATO, and courageously warning of the military-industrial complex.",
      "ru": "Вы бы проголосовали за него за блестящее руководство высадкой в Нормандии (D-Day), взвешенный консерватизм, создание системы межштатных автомагистралей и сбалансированный бюджет.",
      "fr": "Vous voteriez pour lui pour le triomphe du débarquement de Normandie, son conservatisme pragmatique et modéré, le réseau autoroutier inter-États et sa lucidité sur le complexe militaro-industriel.",
      "es": "Crees en el conservadurismo moderado, grandes infraestructuras públicas (autopistas interestatales), estabilidad presupuestaria y contención prudente de superpotencias.",
      "de": "Du befürwortest gemäßigten Konservatismus, zukunftsweisende Infrastrukturprojekte, Haushaltsdisziplin und kluge militärische Abschreckung."
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
      "fr": "Union soviétique (URSS)",
      "es": "Unión Soviética (URSS)",
      "de": "Sowjetunion (UdSSR)"
    },
    "role": {
      "pl": "Przywódca ZSRR (1924–1953), Generalissimus, architekt gospodarki nakazowo-rozdzielczej",
      "en": "General Secretary of the USSR (1924–1953), Generalissimo, architect of total command economy",
      "ru": "Генеральный секретарь ЦК ВКП(б) / Председатель Совмина СССР, генералиссимус",
      "fr": "Dirigeant de l'URSS (1924–1953), généralissime et bâtisseur de l'économie planifiée d'État",
      "es": "Secretario General del PCUS, líder absoluto de la URSS (1924–1953)",
      "de": "Generalsekretär der KPdSU, Diktator der Sowjetunion (1924–1953)"
    },
    "quote": {
      "pl": "„Kadry decydują o wszystkim.”",
      "en": "“Cadres decide everything.”",
      "ru": "«Кадры решают всё.»",
      "fr": "« Les cadres décident de tout. »",
      "es": "«La gratitud es una enfermedad que sufren los perros. El triunfo del socialismo exige puño de hierro.»",
      "de": "„Der Sieg des Sozialismus in einem Land erfordert eiserne Disziplin und die Beseitigung aller Klassenfeinde.“"
    },
    "whyVote": {
      "pl": "Zwolennicy wskazywali na błyskawiczną industrializację, pokonanie hitlerowskich Niemiec pod Stalingradem i Kurskiem, status mocarstwa atomowego oraz całkowite podporządkowanie gospodarki państwu (za cenę brutalnego terroru i braku wolności).",
      "en": "Historical supporters cited rapid industrialization, decisive defeat of Nazi Germany at Stalingrad and Kursk, superpower status, and total state economic mobilization (at the cost of totalitarian repression and loss of liberties).",
      "ru": "Сторонники отмечали форсированную индустриализацию, победу в Великой Отечественной войне над нацизмом, статус ядерной сверхдержавы и тотальную мобилизационную экономику (ценой массовых репрессий и тоталитарного контроля).",
      "fr": "Ses partisans soulignaient l'industrialisation à marche forcée, la victoire militaire décisive contre le nazisme, le statut de superpuissance et l'économie étatisée (au prix de répressions massives et de terreur totalitaire).",
      "es": "Favoreces la industrialización forzosa ultrarrápida, el control absoluto de la economía planificada por el Estado y una disciplina colectiva implacable.",
      "de": "Du befürwortest radikale zentral gesteuerte Planwirtschaft, rücksichtslose Industrialisierung und absolute Unterordnung unter die Staatsmacht."
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
      "fr": "Italie",
      "es": "Italia",
      "de": "Italien"
    },
    "role": {
      "pl": "Premier Włoch (1922–1943), twórca ideologii faszyzmu i państwa korporacyjnego",
      "en": "Prime Minister of Italy (1922–1943), founder of Fascism and the totalitarian corporate state",
      "ru": "Премьер-министр Италии (1922–1943), дуче, основатель фашизма и корпоративного государства",
      "fr": "Président du Conseil d'Italie (1922–1943), duce, fondateur du fascisme et de l'État corporatiste",
      "es": "Duce del Fascismo y Primer Ministro de Italia (1922–1943)",
      "de": "Duce des Faschismus und Diktator von Italien (1922–1943)"
    },
    "quote": {
      "pl": "„Wszystko w państwie, nic poza państwem, nic przeciwko państwu.”",
      "en": "“Everything in the State, nothing outside the State, nothing against the State.”",
      "ru": "«Всё в государстве, ничего вне государства, ничего против государства.»",
      "fr": "« Tout dans l'État, rien hors de l'État, rien contre l'État. »",
      "es": "«Todo en el Estado, nada contra el Estado, nada fuera del Estado.»",
      "de": "„Alles im Staate, nichts außerhalb des Staates, nichts gegen den Staat.“"
    },
    "whyVote": {
      "pl": "Zwolennicy wskazywali na skrajny nacjonalizm, kult dyscypliny i siły, korporacjonizm gospodarczy zwalczający zarówno marksizm, jak i liberalny kapitalizm, oraz wielkie roboty publiczne (za cenę likwidacji demokracji i imperialnej agresji).",
      "en": "Historic supporters pointed to militant nationalism, total social discipline, state-directed corporatism opposing both liberalism and Marxism, and major public infrastructure works (at the price of abolishing democracy and warmongering).",
      "ru": "Сторонники указывали на ультранационализм, культ дисциплины и порядка, корпоративистскую модель и масштабные общественные стройки (ценой ликвидации демократии и агрессивного милитаризма).",
      "fr": "Ses partisans mettaient en avant le nationalisme exacerbé, le culte de l'ordre, le corporatisme économique rejetant libéralisme et marxisme, et les grands travaux (au prix de la dictature totale et du bellicisme).",
      "es": "Favoreces el nacionalismo totalitario corporativo, el culto al líder incontestable, la disciplina castrense y la subordinación del individuo a la grandeza estatal.",
      "de": "Du befürwortest totalitären Staatskorporatismus, Führerkult, gesellschaftliche Militarisierung und die Unterordnung des Einzelnen unter die Nation."
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
      "fr": "Chine (République de Chine)",
      "es": "República de China (Taiwán)",
      "de": "Republik China (Taiwan)"
    },
    "role": {
      "pl": "Generalissimus i przywódca Republiki Chińskiej (Kuomintang), dowódca teatru chińskiego II WŚ",
      "en": "Generalissimo and leader of the Republic of China (Kuomintang), Allied theater commander",
      "ru": "Генералиссимус и лидер Китайской Республики (Гоминьдан), командующий китайским театром Второй мировой",
      "fr": "Généralissime et dirigeant de la République de Chine (Kuomintang), commandant allié du théâtre chinois",
      "es": "Generalísimo, líder del Kuomintang y Presidente de la República de China",
      "de": "Generalissimus, Anführer der Kuomintang und Präsident der Republik China"
    },
    "quote": {
      "pl": "„Dopóki naród zachowuje wolę walki, żadna siła nie jest w stanie go podbić.”",
      "en": "“As long as a nation retains its will to fight, no power on earth can conquer it.”",
      "ru": "«Пока у нации есть воля к борьбе, никакая сила в мире не сможет её покорить.»",
      "fr": "« Tant qu'une nation conserve sa volonté de lutter, aucune force ne peut la conquérir. »",
      "es": "«Para salvar a la nación debemos mantener la disciplina, la lealtad moral y resistir sin descanso al comunismo.»",
      "de": "„Um die Nation zu retten, bedarf es eiserner Disziplin, traditioneller Tugenden und des Widerstands gegen den Kommunismus.“"
    },
    "whyVote": {
      "pl": "Oddałbyś na niego głos za wieloletnią obronę Chin przed inwazją imperialnej Japonii, wierność Trzem Zasadom Ludu (nacjonalizm, dobrobyt, suwerenność), antykomunizm i modernizację armii.",
      "en": "You would vote for him for grueling resistance against imperial Japanese aggression, devotion to Sun Yat-sen's Three Principles, resolute anti-communism, and military nation-building.",
      "ru": "Вы бы проголосовали за него за многолетнее ожесточённое сопротивление японской агрессии, верность национальным традициям, твёрдый антикоммунизм и сплочение нации.",
      "fr": "Vous voteriez pour lui pour sa résistance acharnée contre l'agression impériale japonaise, sa fidélité aux Trois Principes du Peuple, son anticommunisme et la modernisation militaire.",
      "es": "Respaldas el nacionalismo chino republicano no comunista, el anticomunismo firme, el orden marcial y el posterior despegue económico de Taiwán.",
      "de": "Du stehst für anti-kommunistischen Nationalismus, militärische Ordnung, traditionelle Werte und die Grundlagen des taiwanesischen Wirtschaftswunders."
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
      "fr": "États-Unis",
      "es": "Estados Unidos",
      "de": "Vereinigte Staaten"
    },
    "role": {
      "pl": "28. Prezydent USA (1913–1921), twórca Ligi Narodów, laureat Pokojowej Nagrody Nobla",
      "en": "28th US President (1913–1921), architect of the League of Nations, Nobel Peace Laureate",
      "ru": "28-й Президент США (1913–1921), создатель Лиги Наций, лауреат Нобелевской премии мира",
      "fr": "28e Président des États-Unis (1913–1921), artisan de la Société des Nations, prix Nobel de la paix",
      "es": "28.º Presidente de EE. UU., promotor de los Catorce Puntos y la Sociedad de Naciones",
      "de": "28. US-Präsident, Initiator der 14 Punkte und des Völkerbundes"
    },
    "quote": {
      "pl": "„Świat musi stać się bezpiecznym miejscem dla demokracji.”",
      "en": "“The world must be made safe for democracy.”",
      "ru": "«Мир должен быть безопасным для демократии.»",
      "fr": "« Le monde doit devenir un lieu sûr pour la démocratie. »",
      "es": "«El mundo debe ser un lugar seguro para la democracia; el derecho internacional debe regir las relaciones humanas.»",
      "de": "„Die Welt muss sicher gemacht werden für die Demokratie; internationales Recht muss über Gewalt stehen.“"
    },
    "whyVote": {
      "pl": "Oddałbyś na niego głos za powołanie Ligi Narodów, koncepcję samostanowienia narodów (w tym odrodzenie Polski w 14 punktach), utworzenie Rezerwy Federalnej i progresywne reformy podatkowe.",
      "en": "You would vote for him for championing the League of Nations, national self-determination (including Polish independence in his 14 Points), creating the Federal Reserve, and progressive tax reforms.",
      "ru": "Вы бы проголосовали за него за создание Лиги Наций, право наций на самоопределение (включая независимость Польши в 14 пунктах), учреждение ФРС и прогрессивный подоходный налог.",
      "fr": "Vous voteriez pour lui pour la fondation de la Société des Nations, le principe d'autodétermination des peuples (les 14 points), la création de la Réserve fédérale et l'impôt progressif.",
      "es": "Crees en el idealismo moral en política exterior, la autodeterminación de los pueblos, las instituciones de seguridad colectiva y la regulación progresista.",
      "de": "Du glaubst an wertegeleiteten internationalen Idealismus, das Selbstbestimmungsrecht der Völker und kollektive globale Sicherheitsorganisationen."
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
      "fr": "Royaume-Uni",
      "es": "Reino Unido",
      "de": "Vereinigtes Königreich"
    },
    "role": {
      "pl": "Premier Wielkiej Brytanii (1916–1922), twórca podwalin państwa opiekuńczego",
      "en": "Prime Minister of the UK (1916–1922), architect of the modern British welfare state",
      "ru": "Премьер-министр Великобритании (1916–1922), создатель основ государства всеобщего благосостояния",
      "fr": "Premier ministre du Royaume-Uni (1916–1922), pionnier de l'État-providence britannique",
      "es": "Primer Ministro británico durante la Gran Guerra, arquitecto del Estado del bienestar liberal",
      "de": "Britischer Premierminister im Ersten Weltkrieg, Reformer des liberalen Wohlfahrtsstaates"
    },
    "quote": {
      "pl": "„Nie bój się zrobić dużego kroku, jeśli jest potrzebny. Nie pokonasz przepaści dwoma małymi skokami.”",
      "en": "“Don't be afraid to take a big step if one is indicated. You can't cross a chasm in two small jumps.”",
      "ru": "«Не бойтесь сделать большой шаг, если он нужен. Пропасть нельзя перепрыгнуть в два маленьких прыжка.»",
      "fr": "« N'ayez pas peur de faire un grand pas. On ne franchit pas un gouffre en deux petits sauts. »",
      "es": "«No puedes cruzar un abismo en dos saltos pequeños; las grandes reformas exigen audacia social.»",
      "de": "„Man kann einen Abgrund nicht mit zwei kleinen Sprüngen überqueren; große Reformen erfordern sozialen Mut.“"
    },
    "whyVote": {
      "pl": "Oddałbyś na niego głos za przełomowy „Budżet Ludowy” (People's Budget), stworzenie ubezpieczeń społecznych i emerytur, opodatkowanie wielkich majątków ziemskich oraz zdecydowane przywództwo wojenne.",
      "en": "You would vote for him for the landmark People's Budget, establishing state pensions and health insurance, taxing landed estates, and resolute wartime leadership.",
      "ru": "Вы бы проголосовали за него за «Народный бюджет», государственные пенсии и пособия по болезни, налог на сверхбогатых землевладельцев и решительное лидерство в Первую мировую войну.",
      "fr": "Vous voteriez pour lui pour le budget du peuple fondateur, la création des retraites ouvrières et de l'assurance maladie, la taxation des grands propriétaires et sa conduite de la guerre.",
      "es": "Apoyas el liberalismo social reformista: gravar a los terratenientes ricos (People's Budget) para financiar pensiones y seguros de salud para los trabajadores.",
      "de": "Du befürwortest sozialliberalen Reformismus: Besteuerung von Großgrundbesitz zur Finanzierung von Altersrenten und Krankenversicherungen."
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
      "fr": "France",
      "es": "Francia",
      "de": "Frankreich"
    },
    "role": {
      "pl": "Premier Francji (1906–1909, 1917–1920), „Tygrys” (Le Tigre), lider obrony Republiki",
      "en": "Prime Minister of France (1906–1909, 1917–1920), 'The Tiger', defender of the Republic",
      "ru": "Премьер-министр Франции (1906–1909, 1917–1920), «Тигр», бескомпромиссный защитник Республики",
      "fr": "Président du Conseil (1906–1909, 1917–1920), « Le Tigre », père de la victoire républicaine",
      "es": "Primer Ministro de Francia, 'El Tigre', artífice de la victoria en la Primera Guerra Mundial",
      "de": "Premierminister von Frankreich, „Der Tiger“, Architekt des Sieges im Ersten Weltkrieg"
    },
    "quote": {
      "pl": "„Wojna to sprawa zbyt poważna, by powierzać ją wojskowym.”",
      "en": "“War is too serious a matter to entrust to military men.”",
      "ru": "«Война — слишком серьезное дело, чтобы доверять ее военным.»",
      "fr": "« La guerre est une affaire trop grave pour être confiée à des militaires. »",
      "es": "«La guerra es un asunto demasiado serio para dejárselo a los militares. La República no claudicará jamás.»",
      "de": "„Der Krieg ist eine viel zu ernste Angelegenheit, um ihn den Militärs zu überlassen. Die Republik weicht nicht.“"
    },
    "whyVote": {
      "pl": "Oddałbyś na niego głos za niezłomne uratowanie Francji w 1917–1918 roku, twardą postawę wobec Niemiec w Wersalu, bezwzględny laicyzm państwowy i obronę wartości republikańskich.",
      "en": "You would vote for him for unbending resolve saving France in 1917–1918, unyielding defense of national reparations at Versailles, and fierce commitment to republican secularism.",
      "ru": "Вы бы проголосовали за него за спасение Франции в критические дни 1917–1918 годов, жесткую позицию в Версальском договоре, последовательный светский строй и республиканизм.",
      "fr": "Vous voteriez pour lui pour sa détermination indomptable dans la victoire de 1918, la défense intraitable des intérêts français à Versailles et la laïcité républicaine.",
      "es": "Valoras el patriotismo republicano laico intransigente, la defensa de la soberanía nacional contra agresores y la determinación política inquebrantable.",
      "de": "Du bewunderst kompromisslosen laizistischen Republikanismus, unerbittlichen Einsatz für nationale Souveränität und politische Härte in Krisen."
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
      "fr": "Allemagne (Empire allemand)",
      "es": "Imperio Alemán",
      "de": "Deutsches Kaiserreich"
    },
    "role": {
      "pl": "Ostatni Cesarz Niemiecki i Król Prus (1888–1918), twórca doktryny Weltpolitik",
      "en": "Last German Emperor and King of Prussia (1888–1918), architect of Weltpolitik",
      "ru": "Последний Германский император и король Пруссии (1888–1918), автор доктрины мирового величия",
      "fr": "Dernier empereur d'Allemagne et roi de Prusse (1888–1918), promoteur de la Weltpolitik",
      "es": "Último Emperador de Alemania y Rey de Prusia (1888–1918)",
      "de": "Letzter Deutscher Kaiser und König von Preußen (1888–1918)"
    },
    "quote": {
      "pl": "„Żądamy naszego należnego miejsca pod słońcem!”",
      "en": "“We demand our place in the sun.”",
      "ru": "«Мы требуем нашего места под солнцем!»",
      "fr": "« Nous exigeons notre place au soleil ! »",
      "es": "«Alemania exige su legítimo lugar bajo el sol; nuestra fuerza naval y militar garantizará nuestro respeto.»",
      "de": "„Wir verlangen auch unseren Platz an der Sonne; unsere Streitkräfte werden Deutschlands Geltung sichern.“"
    },
    "whyVote": {
      "pl": "Oddałbyś na niego głos za dążenie do mocarstwowej pozycji Niemiec, budowę potężnej floty oceanicznej, szybki rozwój przemysłowy Rzeszy i wierność monarchicznej tradycji militarnej.",
      "en": "You would vote for him for asserting Germany's global superpower status (Weltpolitik), immense naval and industrial expansion, and defending aristocratic imperial tradition.",
      "ru": "Вы бы проголосовали за него за стремление к мировому статусу Германии, строительство мощного океанского флота, колоссальный промышленный подъем и монархический порядок.",
      "fr": "Vous voteriez pour lui pour l'accession de l'Allemagne au rang de grande puissance mondiale, le développement de la flotte impériale et le rayonnement industriel.",
      "es": "Favoreces el conservadurismo imperial monárquico, el poderío militar e industrial puntero y una diplomacia de prestigio nacional sin concesiones.",
      "de": "Du befürwortest imperiale monarchische Führung, militärische Stärke, industrielle Spitzenleistung und nationales Geltungsbewusstsein."
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
      "fr": "URSS / Russie soviétique",
      "es": "Rusia Soviética (URSS)",
      "de": "Sowjetrussland (UdSSR)"
    },
    "role": {
      "pl": "Przywódca rewolucji październikowej, założyciel partii bolszewickiej i ZSRR",
      "en": "Leader of the October Revolution, founder of the Bolshevik Party and Soviet Union",
      "ru": "Вождь Октябрьской революции, основатель большевистской партии и СССР",
      "fr": "Dirigeant de la Révolution d'Octobre, fondateur du Parti bolchevik et de l'URSS",
      "es": "Líder de la Revolución de Octubre, fundador del Estado soviético y del bolchevismo",
      "de": "Anführer der Oktoberrevolution, Gründer des Sowjetstaates und Theoretiker des Bolschewismus"
    },
    "quote": {
      "pl": "„Rewolucji nie robi się w białych rękawiczkach. Władza w ręce Rad!”",
      "en": "“Freedom is a precious thing — so precious that it must be rationed.”",
      "ru": "«Вся власть Советам! Мир — народам, земля — крестьянам, заводы — рабочим!»",
      "fr": "« Tout le pouvoir aux Soviets ! La paix aux peuples, la terre aux paysans ! »",
      "es": "«El poder soviético más la electrificación de todo el país es el comunismo. La revolución no pide permiso.»",
      "de": "„Kommunismus ist Sowjetmacht plus Elektrifizierung des ganzen Landes. Die Revolution duldet kein Zaudern.“"
    },
    "whyVote": {
      "pl": "Oddałbyś na niego głos za bezkompromisowe obalenie caratu i kapitalizmu, oddanie fabryk robotnikom, nacjonalizację banków i ziemi oraz bezwzględną obronę rewolucji proletariackiej.",
      "en": "You would vote for him for the total overthrow of Tsarist autocracy and capitalism, transferring land to peasants, nationalizing banks and industry, and vanguard socialist statecraft.",
      "ru": "Вы бы проголосовали за него за свержение царизма и власти капитала, декреты о мире и земле, национализацию промышленности и построение первого социалистического государства.",
      "fr": "Vous voteriez pour lui pour le renversement de l'autocratie tsariste et du capitalisme, la redistribution des terres, la nationalisation des banques et la révolution socialiste.",
      "es": "Crees en la toma revolucionaria del poder por la clase obrera organizada en una vanguardia disciplinada y la destrucción del orden capitalista.",
      "de": "Du glaubst an die revolutionäre Zerschlagung des kapitalistischen Systems durch eine disziplinierte Partei der Arbeiterklasse und Vergesellschaftung."
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
      "fr": "Turquie",
      "es": "Turquía",
      "de": "Türkei"
    },
    "role": {
      "pl": "Twórca i pierwszy Prezydent Republiki Turcji (1923–1938), Ojciec Narodu",
      "en": "Founder and first President of the Republic of Turkey (1923–1938), Father of the Turks",
      "ru": "Основатель и первый Президент Турецкой Республики (1923–1938), Отец нации",
      "fr": "Fondateur et premier président de la République de Turquie (1923–1938), Père de la nation",
      "es": "Fundador y primer Presidente de la República de Turquía, padre de la Turquía moderna",
      "de": "Gründer und erster Präsident der Republik Türkei, Vater der modernen Türkei"
    },
    "quote": {
      "pl": "„Pokój w ojczyźnie, pokój na świecie.”",
      "en": "“Peace at home, peace in the world.”",
      "ru": "«Мир дома — мир во всем мире.»",
      "fr": "« Paix dans le pays, paix dans le monde. »",
      "es": "«Paz en casa, paz en el mundo; el conocimiento y la ciencia son la única guía verdadera de la civilización.»",
      "de": "„Friede in der Heimat, Friede in der Welt; die Wissenschaft ist der einzig wahre Wegweiser im Leben.“"
    },
    "whyVote": {
      "pl": "Oddałbyś na niego głos za zbudowanie nowoczesnej, świeckiej republiki na gruzach sułtanatu, wprowadzenie praw kobiet i powszechnej edukacji, odrzucenie teokracji i reformizm kulturowy.",
      "en": "You would vote for him for forging a modern secular republic from Ottoman ruins, enacting women's suffrage, aggressive Westernization, and rigorous educational reform.",
      "ru": "Вы бы проголосовали за него за создание светского республиканского государства, отделение религии от власти, введение избирательных прав для женщин и глубокую модернизацию общества.",
      "fr": "Vous voteriez pour lui pour la fondation d'une république laïque et souveraine, l'abolition du califat, le droit de vote des femmes et la modernisation intégrale des institutions.",
      "es": "Respaldas la laicidad estricta del Estado, la modernización republicana ilustrada, los derechos plenos de las mujeres y la educación científica sin dogmas.",
      "de": "Du unterstützt strikten Laizismus, pro-westliche republikanische Modernisierung, Gleichberechtigung der Frauen und säkulare Bildung."
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
      "fr": "Allemagne (Troisième Reich)",
      "es": "Alemania Nazi",
      "de": "NS-Staat"
    },
    "role": {
      "pl": "Führer i Kanclerz III Rzeszy (1933–1945), wódz partii narodowosocjalistycznej (NSDAP)",
      "en": "Führer and Chancellor of Nazi Germany (1933–1945), leader of the NSDAP",
      "ru": "Фюрер и канцлер нацистской Германии (1933–1945), лидер NSDAP",
      "fr": "Führer et chancelier du Troisième Reich (1933–1945), dirigeant du NSDAP",
      "es": "Führer y Canciller de la Alemania Nazi (1933–1945)",
      "de": "Führer und Reichskanzler des NS-Regimes (1933–1945)"
    },
    "quote": {
      "pl": "„Kto chce żyć, musi walczyć, a kto nie chce walczyć na tym świecie, gdzie walka jest prawem życia, ten nie ma prawa do życia.”",
      "en": "“He who would live must fight. He who doesn't wish to fight in this world, where permanent struggle is the law of life, has not the right to exist.”",
      "ru": "«Кто хочет жить, тот должен бороться, а кто не хочет бороться в этом мире вечной борьбы, тот не заслуживает права на жизнь.»",
      "fr": "« Qui veut vivre doit lutter, et qui refuse de combattre dans ce monde de lutte permanente n'a pas le droit d'exister. »",
      "es": "«La fuerza es la primera ley de la naturaleza; la lucha por el espacio vital y la pureza racial decide el destino humano.»",
      "de": "„Der Stärkere hat zu herrschen und darf sich nicht mit dem Schwächeren verschmelzen.“"
    },
    "whyVote": {
      "pl": "Oddałbyś na niego głos za obalenie traktatu wersalskiego, zlikwidowanie bezrobocia poprzez etatyzm i wielkie zbrojenia, odzyskanie terytoriów i fanatyczną wiarę w jedność narodowo-rasową.",
      "en": "You would vote for him for tearing up the Versailles Treaty, ending massive unemployment through state works and militarization, and radical pan-German nationalist assertion.",
      "ru": "Вы бы проголосовали за него за слом Версальского диктата, ликвидацию массовой безработицы через военное перевооружение и фанатичный великогерманский реваншизм.",
      "fr": "Vous voteriez pour lui pour l'abrogation du traité de Versailles, la fin du chômage par le réarmement massif étatique et le nationalisme pangermaniste fanatique.",
      "es": "Ideología totalitaria destructiva basada en el racismo biológico, el militarismo agresivo y la aniquilación de las libertades humanas.",
      "de": "Totalitärer Rassenfanatismus, Angriffskrieg und die vollständige Auslöschung individueller Grundrechte."
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
      "fr": "Japon (Empire du Japon)",
      "es": "Imperio de Japón",
      "de": "Kaiserreich Japan"
    },
    "role": {
      "pl": "Premier Japonii (1941–1944), generał Cesarskiej Armii i minister wojny",
      "en": "Prime Minister of Japan (1941–1944), Imperial Army General and Minister of War",
      "ru": "Премьер-министр Японии (1941–1944), генерал Императорской армии и военный министр",
      "fr": "Premier ministre du Japon (1941–1944), général de l'armée impériale et ministre de la Guerre",
      "es": "General y Primer Ministro del Imperio de Japón durante la Segunda Guerra Mundial",
      "de": "General und Premierminister des Japanischen Kaiserreichs im Zweiten Weltkrieg"
    },
    "quote": {
      "pl": "„Wszystko, co uczyniłem, uczyniłem dla dobra Cesarza i narodu japońskiego.”",
      "en": "“All my thoughts and actions were devoted to the service of the Emperor.”",
      "ru": "«Все мои помыслы и деяния были посвящены служению Императору.»",
      "fr": "« Toutes mes pensées et actions étaient entièrement dévouées au service de l'Empereur. »",
      "es": "«La lealtad al Emperador y el sacrificio por la patria son los deberes supremos de todo súbdito.»",
      "de": "„Unbedingte Loyalität zum Kaiser und Opferbereitschaft für das Vaterland sind die höchste Pflicht.“"
    },
    "whyVote": {
      "pl": "Oddałbyś na niego głos za żelazną dyscyplinę wojskową, rzucenie wyzwania zachodnim mocarstwom kolonialnym w Azji (Wielka Azjatycka Strefa Wspólnego Dobrobytu) i bezwzględne poświęcenie dla tronu.",
      "en": "You would vote for him for iron military discipline, defying Western colonial dominance across Asia, and total devotion to the imperial throne.",
      "ru": "Вы бы проголосовали за него за железную воинскую дисциплину, вызов западным державам в Азии и абсолютную преданность Императору.",
      "fr": "Vous voteriez pour lui pour sa discipline militaire sans faille, le défi lancé aux puissances coloniales occidentales en Asie et sa loyauté absolue à l'Empereur.",
      "es": "Favoreces el militarismo expansionista autoritario, la subordinación total de la sociedad civil al ejército y la disciplina patriótica imperial.",
      "de": "Du befürwortest autoritären Militärstaat, die Unterordnung der Gesellschaft unter Rüstungsziele und imperiale Expansion."
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
      "fr": "États-Unis",
      "es": "Estados Unidos",
      "de": "Vereinigte Staaten"
    },
    "role": {
      "pl": "33. Prezydent USA (1945–1953), autor doktryny powstrzymywania i Planu Marshalla",
      "en": "33rd US President (1945–1953), creator of the Containment Doctrine and Marshall Plan",
      "ru": "33-й Президент США (1945–1953), автор доктрины сдерживания и плана Маршалла",
      "fr": "33e Président des États-Unis (1945–1953), auteur de la doctrine de l'endiguement et du plan Marshall",
      "es": "33.º Presidente de los Estados Unidos (1945–1953), artífice de la Doctrina Truman y el Plan Marshall",
      "de": "33. US-Präsident (1945–1953), Urheber der Truman-Doktrin und des Marshallplans"
    },
    "quote": {
      "pl": "„Odpowiedzialność spoczywa tutaj (The buck stops here).”",
      "en": "“The buck stops here.”",
      "ru": "«Вся ответственность лежит на мне.»",
      "fr": "« La responsabilité finale m'incombe. »",
      "es": "«La responsabilidad recae sobre mi escritorio; debemos contener la expansión soviética y reconstruir las democracias.»",
      "de": "„Hier wird die Verantwortung übernommen; wir müssen die Freiheit verteidigen und Europa wiederaufbauen.“"
    },
    "whyVote": {
      "pl": "Oddałbyś na niego głos za powstrzymanie ekspansji komunizmu (doktryna Trumana), odbudowę demokratycznej Europy w Planie Marshalla, powołanie NATO i desegregację sił zbrojnych USA.",
      "en": "You would vote for him for stopping Soviet expansionism via the Truman Doctrine, rebuilding Western Europe with the Marshall Plan, founding NATO, and integrating the US Armed Forces.",
      "ru": "Вы бы проголосовали за него за доктрину сдерживания советской экспансии, восстановление Европы планом Маршалла, создание НАТО и запрет расовой сегрегации в армии США.",
      "fr": "Vous voteriez pour lui pour l'endiguement de l'URSS, le plan Marshall de relance européenne, la création de l'OTAN et la déségrégation raciale de l'armée américaine.",
      "es": "Respaldas la contención firme del comunismo en la Guerra Fría, la reconstrucción económica de Europa (Plan Marshall), la creación de la OTAN y reformas civiles.",
      "de": "Du stehst für entschiedene Eindämmung totalitärer Mächte, den Marshallplan zum Wiederaufbau, die NATO-Gründung und soziale Bürgerrechte."
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
      "fr": "URSS",
      "es": "Unión Soviética (URSS)",
      "de": "Sowjetunion (UdSSR)"
    },
    "role": {
      "pl": "I Sekretarz KC KPZR (1953–1964), autor tajnego referatu o zbrodniach Stalina",
      "en": "First Secretary of the CPSU (1953–1964), leader of the De-Stalinization Thaw",
      "ru": "Первый секретарь ЦК КПСС (1953–1964), инициатор разоблачения культа личности Сталина",
      "fr": "Premier secrétaire du PCUS (1953–1964), artisan de la déstalinisation et du Dégel",
      "es": "Primer Secretario del PCUS (1953–1964), líder de la desestalinización y carrera espacial",
      "de": "Erster Sekretär der KPdSU (1953–1964), Initiator der Entstalinisierung und des Raumfahrtprogramms"
    },
    "quote": {
      "pl": "„Politycy wszędzie są tacy sami: obiecują zbudować most nawet tam, gdzie nie ma rzeki.”",
      "en": "“Politicians are the same all over: they promise to build a bridge even where there is no river.”",
      "ru": "«Политики везде одинаковы: обещают построить мост даже там, где нет реки.»",
      "fr": "« Les politiciens sont partout les mêmes : ils promettent de construire un pont là où il n'y a pas de rivière. »",
      "es": "«Los historiadores verán que el comunismo superará al capitalismo en producción pacífica y conquistas en el espacio.»",
      "de": "„Ob Sie es wollen oder nicht, die Geschichte steht auf unserer Seite; wir werden den Kapitalismus einholen.“"
    },
    "whyVote": {
      "pl": "Oddałbyś na niego głos za ujawnienie kultu jednostki i zbrodni Stalina w 1956 r., uwolnienie milionów ludzi z łagrów, bezprecedensowe sukcesy w podboju kosmosu (Gagarin) i masowe budownictwo mieszkaniowe.",
      "en": "You would vote for him for courageously denouncing Stalin's crimes, freeing millions from the Gulag, achieving early supremacy in the space race (Sputnik, Gagarin), and mass public housing.",
      "ru": "Вы бы проголосовали за него за хрущёвскую оттепель, доклад на XX съезде о культе личности, освобождение заключенных из ГУЛАГа, первый полёт человека в космос и массовые «хрущёвки».",
      "fr": "Vous voteriez pour lui pour le rapport secret dénonçant les crimes staliniens, la libération des camps du Goulag, les triomphes spatiaux (Spoutnik, Gagarine) et les cités d'habitation populaires.",
      "es": "Valoras la denuncia de los crímenes de Stalin, la vivienda pública masiva para familias obreras, el programa espacial (Sputnik/Gagarin) y la coexistencia pacífica.",
      "de": "Du schätzt den Bruch mit dem stalinistischen Terror, massiven sozialen Wohnungsbau, Pionierleistungen in der Raumfahrt und Koexistenz."
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
      "fr": "États-Unis",
      "es": "Estados Unidos",
      "de": "Vereinigte Staaten"
    },
    "role": {
      "pl": "35. Prezydent USA (1961–1963), inspirator programu Apollo i Nowej Granicy",
      "en": "35th US President (1961–1963), champion of the New Frontier and Apollo Moon program",
      "ru": "35-й Президент США (1961–1963), вдохновитель программы «Аполлон» и «Новых рубежей»",
      "fr": "35e Président des États-Unis (1961–1963), visionnaire de la Nouvelle Frontière et du programme Apollo",
      "es": "35.º Presidente de los Estados Unidos (1961–1963), icono de la Nueva Frontera",
      "de": "35. US-Präsident (1961–1963), Symbolfigur der „New Frontier“"
    },
    "quote": {
      "pl": "„Nie pytaj, co twój kraj może zrobić dla ciebie – zapytaj, co ty możesz zrobić dla swojego kraju.”",
      "en": "“Ask not what your country can do for you — ask what you can do for your country.”",
      "ru": "«Не спрашивай, что твоя страна может сделать для тебя — спроси, что ты можешь сделать для своей страны.»",
      "fr": "« Ne demandez pas ce que votre pays peut faire pour vous, demandez ce que vous pouvez faire pour votre pays. »",
      "es": "«No preguntes qué puede hacer tu país por ti; pregunta qué puedes hacer tú por tu país.»",
      "de": "„Fragt nicht, was euer Land für euch tun kann – fragt, was ihr für euer Land tun könnt.“"
    },
    "whyVote": {
      "pl": "Oddałbyś na niego głos za porywający optymizm Nowej Granicy, wygranie wyścigu na Księżyc, pokojowe zażegnanie kryzysu kubańskiego i rozpoczęcie ustawodawstwa praw obywatelskich.",
      "en": "You would vote for him for the inspiring New Frontier vision, launching the Apollo Moon landing, averting nuclear catastrophe during the Cuban Missile Crisis, and championing civil rights.",
      "ru": "Вы бы проголосовали за него за вдохновляющую программу «Новых рубежей», старт лунной программы «Аполлон», дипломатическое спасение мира в Карибский кризис и борьбу за гражданские права.",
      "fr": "Vous voteriez pour lui pour l'élan de la Nouvelle Frontière, l'exploit du programme lunaire Apollo, la résolution pacifique de la crise de Cuba et l'engagement pour les droits civiques.",
      "es": "Inspiras tu visión en el optimismo científico y espacial (programa Apolo), los derechos civiles universales, la firmeza en la Guerra Fría y el servicio público generoso.",
      "de": "Du teilst den Optimismus für Wissenschaft und Raumfahrt (Apollo-Programm), bürgerrechtliche Gleichheit, wehrhafte Demokratie und bürgerschaftliches Engagement."
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
      "fr": "États-Unis",
      "es": "Estados Unidos",
      "de": "Vereinigte Staaten"
    },
    "role": {
      "pl": "36. Prezydent USA (1963–1969), twórca programu „Wielkie Społeczeństwo” (Great Society)",
      "en": "36th US President (1963–1969), architect of the Great Society and War on Poverty",
      "ru": "36-й Президент США (1963–1969), создатель «Великого общества» и системы Medicare",
      "fr": "36e Président des États-Unis (1963–1969), créateur de la « Grande Société » et de Medicare",
      "es": "36.º Presidente de los Estados Unidos (1963–1969), creador de la 'Gran Sociedad'",
      "de": "36. US-Präsident (1963–1969), Architekt der „Great Society“"
    },
    "quote": {
      "pl": "„Wielkie Społeczeństwo wymaga zakończenia ubóstwa i rasowej niesprawiedliwości.”",
      "en": "“The Great Society demands an end to poverty and racial injustice.”",
      "ru": "«Великое общество требует искоренения бедности и расовой несправедливости.»",
      "fr": "« La Grande Société exige l'éradication de la pauvreté et de l'injustice raciale. »",
      "es": "«Hasta que la justicia sea ciega ante el color, hasta que la educación sea universal y la pobreza erradicada, no descansaremos.»",
      "de": "„Solange Armut herrscht und Menschen wegen ihrer Hautfarbe benachteiligt werden, ist unser Werk nicht getan.“"
    },
    "whyVote": {
      "pl": "Oddałbyś na niego głos za podpisanie historycznych ustaw znoszących segregację rasową (Civil Rights Act, Voting Rights Act), stworzenie powszechnej opieki Medicare i Medicaid oraz walkę z nędzą.",
      "en": "You would vote for him for passing the Civil Rights Act and Voting Rights Act to end segregation, establishing Medicare and Medicaid, and launching the War on Poverty.",
      "ru": "Вы бы проголосовали за него за историческую отмену сегрегации (Civil Rights Act), гарантии избирательных прав меньшинств, создание программ Medicare и Medicaid и войну с бедностью.",
      "fr": "Vous voteriez pour lui pour la fin légale de la ségrégation raciale (lois sur les droits civiques et le vote), la création de la couverture maladie Medicare et la guerre contre la pauvreté.",
      "es": "Apoyas la histórica Ley de Derechos Civiles de 1964, la creación de Medicare y Medicaid, y programas públicos contundentes contra la pobreza.",
      "de": "Du befürwortest historische Bürgerrechtsgesetze (Civil Rights Act), den Aufbau von Medicare/Medicaid und entschlossene Armutsbekämpfung."
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
      "fr": "États-Unis",
      "es": "Estados Unidos",
      "de": "Vereinigte Staaten"
    },
    "role": {
      "pl": "37. Prezydent USA (1969–1974), mistrz Realpolitik i otwarcia dyplomatycznego na Chiny",
      "en": "37th US President (1969–1974), master of Realpolitik and historic opening to China",
      "ru": "37-й Президент США (1969–1974), мастер Realpolitik и исторического сближения с Китаем",
      "fr": "37e Président des États-Unis (1969–1974), maître de la Realpolitik et de l'ouverture vers la Chine",
      "es": "37.º Presidente de los Estados Unidos (1969–1974), artífice de la distensión y apertura a China",
      "de": "37. US-Präsident (1969–1974), Architekt der Entspannungspolitik und Öffnung zu China"
    },
    "quote": {
      "pl": "„Porażka nie jest ostateczna, dopóki się nie poddasz.”",
      "en": "“A man is not finished when he is defeated. He is finished when he quits.”",
      "ru": "«Человек побежден не тогда, когда терпит поражение, а когда сдается.»",
      "fr": "« Un homme n'est pas vaincu lorsqu'il échoue, il est vaincu lorsqu'il renonce. »",
      "es": "«El realismo político exige dialogar con adversarios para equilibrar el poder y preservar la paz mundial.»",
      "de": "„Realisitische Geopolitik verlangt den Dialog mit Gegnern, um das Gleichgewicht der Mächte zu sichern.“"
    },
    "whyVote": {
      "pl": "Oddałbyś na niego głos za genialne otwarcie relacji z Chinami Mao, odprężenie z ZSRR (układ SALT I), zakończenie udziału USA w wojnie w Wietnamie oraz powołanie agencji ochrony środowiska EPA.",
      "en": "You would vote for him for groundbreaking triangular diplomacy opening China, nuclear detente with the USSR (SALT I), ending the draft, and establishing the EPA for conservation.",
      "ru": "Вы бы проголосовали за него за прорывное сближение с КНР, ядерную разрядку с СССР (ОСВ-1), отмену призыва в армию и создание федерального агентства по охране природы (EPA).",
      "fr": "Vous voteriez pour lui pour la diplomatie triangulaire historique avec la Chine, la détente nucléaire avec l'URSS (SALT I), la fin de la conscription et la création de l'EPA.",
      "es": "Prefieres la diplomacia realista pragmática (apertura a China, control de armas con la URSS), la protección ambiental (creación de la EPA) y el orden público.",
      "de": "Du bevorzugst geopolitischen Realismus (Öffnung Chinas, Rüstungskontrolle), Gründung der Umweltbehörde EPA und pragmatischen Konservatismus."
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
      "fr": "Chine (RPC)",
      "es": "República Popular China",
      "de": "Volksrepublik China"
    },
    "role": {
      "pl": "Przywódca Chińskiej Republiki Ludowej (1949–1976), Przewodniczący KPCh",
      "en": "Founding Father of the People's Republic of China (1949–1976), Chairman of the CCP",
      "ru": "Основатель Китайской Народной Республики (1949–1976), Председатель КПК",
      "fr": "Fondateur de la République populaire de Chine (1949–1976), président du PCC",
      "es": "Presidente del Partido Comunista de China, fundador de la República Popular China",
      "de": "Vorsitzender der KP Chinas, Gründer der Volksrepublik China"
    },
    "quote": {
      "pl": "„Władza polityczna wyrasta z lufy karabinu.”",
      "en": "“Political power grows out of the barrel of a gun.”",
      "ru": "«Винтовка рождает власть.»",
      "fr": "« Le pouvoir politique est au bout du fusil. »",
      "es": "«El poder político nace del cañón del fusil; las masas campesinas son la fuerza motriz de la revolución.»",
      "de": "„Die politische Macht kommt aus dem Gewehrlauf; die revolutionäre Masse überwindet alle Hindernisse.“"
    },
    "whyVote": {
      "pl": "Oddałbyś na niego głos za zakończenie „stulecia upokorzeń”, wygnanie obcych mocarstw imperialnych, zjednoczenie Chin, likwidację feudalizmu i stworzenie suwerennej potęgi nuklearnej.",
      "en": "You would vote for him for ending China's Century of Humiliation, expelling colonial imperialists, unifying the country, abolishing landlordism, and building nuclear sovereign parity.",
      "ru": "Вы бы проголосовали за него за прекращение «века унижений», изгнание колонизаторов, объединение Китая, ликвидацию помещичьего феодализма и обретение статуса ядерной державы.",
      "fr": "Vous voteriez pour lui pour la fin du siècle de la honte, l'expulsion des puissances coloniales, la réunification nationale, l'abolition du féodalisme et la bombe atomique chinoise.",
      "es": "Defiendes la movilización campesina antiimperialista, la soberanía nacional china unificada y la revolución continua contra las élites burguesas.",
      "de": "Du befürwortest bäuerliche Massenmobilisierung gegen den Imperialismus, nationale Wiederaufrichtung Chinas und radikale gesellschaftliche Umwälzung."
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
      "fr": "URSS",
      "es": "Unión Soviética (URSS)",
      "de": "Sowjetunion (UdSSR)"
    },
    "role": {
      "pl": "Ostatni Prezydent ZSRR (1985–1991), ojciec Pierestrojki i Głasnosti, laureat Nobla",
      "en": "Last General Secretary & President of the USSR (1985–1991), Nobel Peace Laureate",
      "ru": "Последний Генеральный секретарь и Президент СССР (1985–1991), лауреат Нобелевской премии",
      "fr": "Dernier dirigeant de l'URSS (1985–1991), père de la Perestroïka et de la Glasnost, prix Nobel",
      "es": "Último líder de la URSS (1985–1991), arquitecto de la Glásnost y la Perestroika",
      "de": "Letzter Generalsekretär der KPdSU (1985–1991), Schöpfer von Glasnost und Perestroika"
    },
    "quote": {
      "pl": "„Proces ten poszedł już za daleko, by można było go zatrzymać. Czas na nowe myślenie.”",
      "en": "“Peace is not an absence of war, it is a virtue, a disposition for benevolence and justice.”",
      "ru": "«Процесс пошёл! Главное — гласность, демократизация и новое мышление.»",
      "fr": "« Le processus est engagé ! Il est temps d'adopter une pensée nouvelle pour la paix. »",
      "es": "«La paz requiere transparencia, desarme nuclear mutuo y la libertad de cada pueblo para elegir su camino.»",
      "de": "„Frieden braucht Transparenz, nukleare Abrüstung und das Recht jedes Volkes, seinen Weg selbst zu wählen.“"
    },
    "whyVote": {
      "pl": "Oddałbyś na niego głos za pokojowe zakończenie Zimnej Wojny, zniesienie totalitarnej cenzury (Głasnost), redukcję arsenałów atomowych (INF) i pozwolenie narodom Europy Środkowej na wolność.",
      "en": "You would vote for him for peacefully terminating the Cold War, lifting totalitarian censorship (Glasnost), historic nuclear disarmament treaties (INF), and permitting Europe's liberation.",
      "ru": "Вы бы проголосовали за него за мирное окончание Холодной войны, отмену цензуры, свободу слова, ядерное разоружение (договор РСМД) и вывод советских войск из Афганистана.",
      "fr": "Vous voteriez pour lui pour la fin pacifique de la guerre froide, l'avènement de la liberté d'expression (Glasnost), les accords de désarmement nucléaire et la chute sans bain de sang du rideau de fer.",
      "es": "Crees en el fin pacífico de la Guerra Fría, el desarme atómico negociado, la apertura informativa (Glásnost) y la democratización política.",
      "de": "Du bewunderst die friedliche Beendigung des Kalten Krieges, historische atomare Abrüstungsverträge, Meinungsfreiheit (Glasnost) und Reformbereitschaft."
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
      "fr": "Allemagne",
      "es": "Alemania",
      "de": "Deutschland"
    },
    "role": {
      "pl": "Kanclerz Niemiec (1982–1998), „Kanclerz Zjednoczenia” i współtwórca waluty Euro",
      "en": "Chancellor of Germany (1982–1998), 'Chancellor of Unity' and founding father of the Euro",
      "ru": "Канцлер Германии (1982–1998), «Канцлер единства» и один из создателей валюты евро",
      "fr": "Chancelier d'Allemagne (1982–1998), « Chancelier de l'Unité » et père de l'euro",
      "es": "Canciller de la Unidad Alemana (1982–1998) y Ciudadano de Honor de Europa",
      "de": "Kanzler der deutschen Einheit (1982–1998) und Ehrenbürger Europas"
    },
    "quote": {
      "pl": "„Duch wolności jest silniejszy niż wszelkie mury i druty kolczaste.”",
      "en": "“The spirit of freedom is stronger than any walls and barbed wire.”",
      "ru": "«Дух свободы сильнее любых стен и колючей проволоки.»",
      "fr": "« L'esprit de liberté est plus fort que les murs et les barbelés. »",
      "es": "«La unidad de Alemania y la unificación de Europa son dos caras de la misma moneda.»",
      "de": "„Die Einheit Deutschlands und die Einigung Europas sind zwei Seiten derselben Medaille.“"
    },
    "whyVote": {
      "pl": "Oddałbyś na niego głos za doprowadzenie do pokojowego zjednoczenia Niemiec w 1990 r., obalenie Muru Berlińskiego, podpisanie Traktatu z Maastricht i budowę silnej Unii Europejskiej z walutą euro.",
      "en": "You would vote for him for orchestrating German reunification in 1990, tearing down the Berlin Wall, signing the Maastricht Treaty, and creating the European Single Currency (Euro).",
      "ru": "Вы бы проголосовали за него за историческое объединение Германии в 1990 году, демонтаж Берлинской стены, подписание Маастрихтского договора и создание валюты евро.",
      "fr": "Vous voteriez pour lui pour l'unification historique de l'Allemagne en 1990, la chute du mur de Berlin, le traité fondateur de Maastricht et la mise en place de l'euro.",
      "es": "Valoras la reunificación pacífica de Alemania en la OTAN, la creación del Euro, la integración europea profunda y la estabilidad democristiana.",
      "de": "Du schätzt die friedliche deutsche Wiedervereinigung in westlicher Bindung, die Einführung des Euro und die Vertiefung der Europäischen Union."
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
      "fr": "France",
      "es": "Francia",
      "de": "Frankreich"
    },
    "role": {
      "pl": "Prezydent Francji (1981–1995), pierwszy lewicowy prezydent V Republiki",
      "en": "President of France (1981–1995), first Socialist President of the Fifth Republic",
      "ru": "Президент Франции (1981–1995), первый президент-социалист Пятой республики",
      "fr": "Président de la République française (1981–1995), premier président socialiste de la Ve République",
      "es": "Presidente de Francia (1981–1995), líder del socialismo democrático francés",
      "de": "Präsident von Frankreich (1981–1995), prägende Gestalt der französischen Sozialisten"
    },
    "quote": {
      "pl": "„Nacjonalizm to wojna.”",
      "en": "“Nationalism is war.”",
      "ru": "«Национализм — это война.»",
      "fr": "« Le nationalisme, c'est la guerre. »",
      "es": "«El nacionalismo es la guerra; la unión de los pueblos europeos es nuestro deber histórico.»",
      "de": "„Der Nationalismus ist der Krieg; die Einigung Europas ist unser historischer Auftrag.“"
    },
    "whyVote": {
      "pl": "Oddałbyś na niego głos za zniesienie kary śmierci we Francji (Robert Badinter), wprowadzenie 5. tygodnia płatnego urlopu, emerytury w wieku 60 lat i budowę zjednoczonej Europy.",
      "en": "You would vote for him for abolishing the death penalty, instituting a 5th week of paid vacation, lowering retirement age to 60, and co-architecting European unification with Kohl.",
      "ru": "Вы бы проголосовали за него за отмену смертной казни во Франции, введение 5-й недели оплачиваемого отпуска, пенсионный возраст 60 лет и строительство единой Европы.",
      "fr": "Vous voteriez pour lui pour l'abolition historique de la peine de mort, la cinquième semaine de congés payés, la retraite à 60 ans et le renforcement du couple franco-allemand.",
      "es": "Respaldas la abolición de la pena de muerte, la semana laboral de 39 horas, la quinta semana de vacaciones pagadas y el eje franco-alemán para la UE.",
      "de": "Du befürwortest die Abschaffung der Todesstrafe, Ausbau von Arbeitnehmerrechten und Urlaubsansprüchen sowie die deutsch-französische Partnerschaft."
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
      "fr": "Inde",
      "es": "India",
      "de": "Indien"
    },
    "role": {
      "pl": "Premier Indii (1966–1977, 1980–1984), centralna postać Indyjskiego Kongresu Narodowego",
      "en": "Prime Minister of India (1966–1977, 1980–1984), dominant leader of the Indian National Congress",
      "ru": "Премьер-министр Индии (1966–1977, 1980–1984), выдающийся лидер Индийского национального конгресса",
      "fr": "Première ministre de l'Inde (1966–1977, 1980–1984), figure centrale du Congrès national indien",
      "es": "Primera Ministra de la India, líder del Congreso Nacional Indio",
      "de": "Premierministerin von Indien, prägende Führungspersönlichkeit der Kongresspartei"
    },
    "quote": {
      "pl": "„Nie można uścisnąć dłoni ze zaciśniętą pięścią.”",
      "en": "“You cannot shake hands with a clenched fist.”",
      "ru": "«Нельзя пожать друг другу руки со сжатыми кулаками.»",
      "fr": "« On ne peut pas se serrer la main les poings fermés. »",
      "es": "«La erradicación de la pobreza exige un Estado fuerte, independiente y capaz de defender a su pueblo.»",
      "de": "„Armutsbekämpfung erfordert einen starken, unabhängigen Staat, der sein Volk schützen kann.“"
    },
    "whyVote": {
      "pl": "Oddałbyś na niego głos za nacjonalizację banków dla ubogich rolników, zwycięstwo w wojnie 1971 r. i wyzwolenie Bangladeszu, Zieloną Rewolucję oraz uczynienie Indii potęgą atomową.",
      "en": "You would vote for him for nationalizing commercial banks, decisive victory in the 1971 war liberating Bangladesh, achieving agricultural self-sufficiency via the Green Revolution, and nuclear capability.",
      "ru": "Вы бы проголосовали за него за национализацию банков в пользу крестьян, победу в войне 1971 года (создание Бангладеш), Зелёную революцию и создание ядерного щита Индии.",
      "fr": "Vous voteriez pour lui pour la nationalisation des grandes banques, la victoire militaire de 1971 libérant le Bangladesh, la révolution verte et l'accession de l'Inde au rang nucléaire.",
      "es": "Crees en el liderazgo nacional firme, la autosuficiencia agrícola (Revolución Verde), la energía nuclear soberana y la no sumisión ante potencias extranjeras.",
      "de": "Du unterstützt starke nationale Führung, landwirtschaftliche Selbstversorgung (Grüne Revolution), technologische Souveränität und Blockfreiheit."
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
      "fr": "États-Unis",
      "es": "Estados Unidos",
      "de": "Vereinigte Staaten"
    },
    "role": {
      "pl": "42. Prezydent USA (1993–2001), pionier Trzeciej Drogi i ery dobrobytu lat 90.",
      "en": "42nd US President (1993–2001), pioneer of Third Way centrist governance and 1990s boom",
      "ru": "42-й Президент США (1993–2001), создатель центристского «Третьего пути» и эры профицита бюджета",
      "fr": "42e Président des États-Unis (1993–2001), pionnier de la Troisième Voie et du boom des années 90",
      "es": "42.º Presidente de los Estados Unidos (1993–2001), líder de los 'Nuevos Demócratas'",
      "de": "42. US-Präsident (1993–2001), Leitfigur der „New Democrats“"
    },
    "quote": {
      "pl": "„Gospodarka, głupcze!”",
      "en": "“It's the economy, stupid!”",
      "ru": "«Это экономика, дурачок!»",
      "fr": "« C'est l'économie, idiot ! »",
      "es": "«La era del gobierno grande ha terminado, pero no podemos volver a la era de la indiferencia.»",
      "de": "„Die Ära der ausufernden Staatsbürokratie ist vorbei, aber Gleichgültigkeit ist keine Alternative.“"
    },
    "whyVote": {
      "pl": "Oddałbyś na niego głos za wypracowanie rekordowej nadwyżki budżetowej, stworzenie 22 milionów miejsc pracy, zawarcie układu NAFTA i zbalansowanie wolnego rynku z programami społecznymi.",
      "en": "You would vote for him for balancing the federal budget with historic surpluses, presiding over 22 million new jobs, signing NAFTA, and modernizing governance via Third Way pragmatism.",
      "ru": "Вы бы проголосовали за него за ликвидацию бюджетного дефицита и рекордный профицит, создание 22 миллионов рабочих мест, договор НАФТА и прагматичную рыночную политику.",
      "fr": "Vous voteriez pour lui pour les excédents budgétaires records, la création de 22 millions d'emplois, le traité de libre-échange ALENA et le pragmatisme centriste.",
      "es": "Defiendes la Tercera Vía: superávits presupuestarios récord, libre comercio (TLCAN), crecimiento impulsado por la innovación tecnológica y reformas sociales moderadas.",
      "de": "Du stehst für die Dritte Mitte: ausgeglichene Staatshaushalte, Freihandel (NAFTA), Hightech-Boom und eine pragmatische Verknüpfung von Markt und sozialem Schutz."
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
      "fr": "États-Unis",
      "es": "Estados Unidos",
      "de": "Vereinigte Staaten"
    },
    "role": {
      "pl": "43. Prezydent USA (2001–2009), inicjator Globalnej Wojny z Terrorem",
      "en": "43rd US President (2001–2009), leader of the Global War on Terrorism and Neoconservatism",
      "ru": "43-й Президент США (2001–2009), инициатор глобальной войны с терроризмом",
      "fr": "43e Président des États-Unis (2001–2009), instigateur de la guerre mondiale contre le terrorisme",
      "es": "43.º Presidente de los Estados Unidos (2001–2009), líder del conservadurismo compasivo",
      "de": "43. US-Präsident (2001–2009), Vertreter des „Compassionate Conservatism“"
    },
    "quote": {
      "pl": "„Albo jesteście z nami, albo jesteście z terrorystami.”",
      "en": "“Either you are with us, or you are with the terrorists.”",
      "ru": "«Либо вы с нами, либо вы с террористами.»",
      "fr": "« Soit vous êtes avec nous, soit vous êtes avec les terroristes. »",
      "es": "«La libertad no es el regalo de América al mundo; es el regalo de Dios a la humanidad entera.»",
      "de": "„Freiheit ist nicht das Geschenk Amerikas an die Welt, sondern das Geschenk Gottes an die Menschheit.“"
    },
    "whyVote": {
      "pl": "Oddałbyś na niego głos za bezwzględną walkę z terroryzmem po zamachach z 11 września, obniżki podatków dochodowych i kapitałowych, ustawę No Child Left Behind i program PEPFAR.",
      "en": "You would vote for him for steadfast leadership in the Global War on Terror after 9/11, major income tax cuts, education reform, and saving millions of African lives through PEPFAR.",
      "ru": "Вы бы проголосовали за него за решительный ответ на теракты 11 сентября, снижение налогов на бизнес, реформу образования и масштабную гуманитарную программу PEPFAR.",
      "fr": "Vous voteriez pour lui pour sa conduite intraitable après les attentats du 11-Septembre, les baisses d'impôts sur le revenu et les capitaux, et le programme PEPFAR contre le sida.",
      "es": "Apoyas la guerra global contra el terrorismo, recortes impositivos sustanciales, valores morales tradicionales y una diplomacia de difusión activa de la democracia.",
      "de": "Du unterstützt entschlossenen Anti-Terror-Kampf, deutliche Steuersenkungen, traditionelle Werte und den weltweiten Schutz von Demokratien."
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
      "fr": "États-Unis",
      "es": "Estados Unidos",
      "de": "Vereinigte Staaten"
    },
    "role": {
      "pl": "44. Prezydent USA (2009–2017), laureat Pokojowej Nagrody Nobla, twórca Obamacare",
      "en": "44th US President (2009–2017), Nobel Peace Laureate, architect of the Affordable Care Act",
      "ru": "44-й Президент США (2009–2017), лауреат Нобелевской премии мира, создатель Obamacare",
      "fr": "44e Président des États-Unis (2009–2017), prix Nobel de la paix, créateur de l'Obamacare",
      "es": "44.º Presidente de los Estados Unidos (2009–2017), Premio Nobel de la Paz",
      "de": "44. US-Präsident (2009–2017), Friedensnobelpreisträger"
    },
    "quote": {
      "pl": "„Yes, we can! Zmiana nigdy nie przychodzi z góry, zaczyna się od nas samych.”",
      "en": "“Yes, we can! Change will not come if we wait for some other person or some other time.”",
      "ru": "«Да, мы можем! Перемены начинаются с нас самих.»",
      "fr": "« Yes, we can ! Le changement ne viendra pas si nous attendons une autre personne. »",
      "es": "«El cambio no vendrá si esperamos a otra persona; nosotros somos el cambio que estábamos esperando.»",
      "de": "„Wandel geschieht nicht von allein; wir sind diejenigen, auf die wir gewartet haben.“"
    },
    "whyVote": {
      "pl": "Oddałbyś na niego głos za reformę zdrowotną (Obamacare) ubezpieczającą 20 mln Amerykanów, podpisanie Porozumienia Paryskiego, legalizację małżeństw jednopłciowych i opanowanie kryzysu 2008 r.",
      "en": "You would vote for him for expanding healthcare to 20M citizens via the Affordable Care Act, ratifying the Paris Climate Accord, federal marriage equality, and steady recovery after 2008.",
      "ru": "Вы бы проголосовали за него за реформу здравоохранения (Obamacare), давшую страховку 20 млн граждан, Парижское соглашение по климату, легализацию однополых браков и спасение автопрома.",
      "fr": "Vous voteriez pour lui pour l'Obamacare assurant 20 millions d'Américains, la signature de l'accord de Paris sur le climat, l'égalité du mariage et la sortie de crise de 2008.",
      "es": "Valoras la reforma sanitaria del Affordable Care Act (Obamacare), el multilateralismo diplomático, la transición a energías limpias y el avance de los derechos civiles.",
      "de": "Du befürwortest die Ausweitung der Krankenversicherung (Obamacare), multilaterale Diplomatie, Klimaschutzabkommen und liberale Bürgerrechte."
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
      "fr": "États-Unis",
      "es": "Estados Unidos",
      "de": "Vereinigte Staaten"
    },
    "role": {
      "pl": "45. i 47. Prezydent USA, lider ruchu „Make America Great Again” (MAGA)",
      "en": "45th & 47th US President, leader of the Make America Great Again (MAGA) movement",
      "ru": "45-й и 47-й Президент США, лидер движения «Make America Great Again» (MAGA)",
      "fr": "45e et 47e Président des États-Unis, chef de file du mouvement MAGA",
      "es": "45.º y 47.º Presidente de los Estados Unidos, líder del movimiento 'Make America Great Again'",
      "de": "45. und 47. US-Präsident, Anführer der „America First“-Bewegung"
    },
    "quote": {
      "pl": "„Make America Great Again! Będziemy stawiać Amerykę na pierwszym miejscu.”",
      "en": "“Make America Great Again! In America, we don't worship government — we worship God.”",
      "ru": "«Сделаем Америку снова великой! Мы ставим интересы своей страны на первое место.»",
      "fr": "« Rendre à l'Amérique sa grandeur ! L'Amérique d'abord, toujours et partout ! »",
      "es": "«Pondremos a nuestra nación en primer lugar: protegeremos nuestras fronteras, industrias y empleos.»",
      "de": "„Wir stellen unser Land an die erste Stelle: Grenzen sichern, Arbeitsplätze schützen und Wohlstand schaffen.“"
    },
    "whyVote": {
      "pl": "Oddałbyś na niego głos za obniżenie podatków korporacyjnych (TCJA), taryfy celne chroniące przemysł, walkę z nielegalną imigracją i mur graniczny, sędziów konstytucyjnych i sprzeciw wobec globalizmu.",
      "en": "You would vote for him for sweeping corporate tax cuts and deregulation, protective tariffs against China, strict border wall enforcement, conservative judicial appointments, and energy independence.",
      "ru": "Вы бы проголосовали за него за масштабное снижение налогов на бизнес, торговые пошлины против Китая, жесткое пресечение нелегальной миграции, стену на границе и энергетическую независимость.",
      "fr": "Vous voteriez pour lui pour les baisses massives d'impôts sur les sociétés, les barrières douanières protégeant l'industrie, le mur anti-immigration et le refus du mondialisme.",
      "es": "Respaldas la protección arancelaria de la industria nacional, el control riguroso de la inmigración, la desregulación masiva y el patriotismo identitario frontal.",
      "de": "Du unterstützt Schutzzölle für heimische Arbeitsplätze, strikten Grenzschutz, massive Deregulierung, Steuersenkungen und nationalen Patriotismus."
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
      "fr": "États-Unis",
      "es": "Estados Unidos",
      "de": "Vereinigte Staaten"
    },
    "role": {
      "pl": "46. Prezydent USA (2021–2025), wieloletni senator i wiceprezydent USA",
      "en": "46th US President (2021–2025), longtime US Senator and Vice President",
      "ru": "46-й Президент США (2021–2025), многолетний сенатор и вице-президент",
      "fr": "46e Président des États-Unis (2021–2025), ancien sénateur et vice-président des États-Unis",
      "es": "46.º Presidente de los Estados Unidos, defensor de la clase media y las alianzas occidentales",
      "de": "46. US-Präsident, Verfechter der arbeitenden Mitte und transatlantischer Allianzen"
    },
    "quote": {
      "pl": "„Demokracja nie dzieje się sama z siebie. Musimy jej bronić każdego dnia.”",
      "en": "“Democracy doesn't happen by accident. We have to defend it, fight for it, strengthen it.”",
      "ru": "«Демократия не происходит сама по себе. Мы должны защищать её каждый день.»",
      "fr": "« La démocratie n'arrive pas par hasard. Nous devons la défendre et la renouveler chaque jour. »",
      "es": "«La democracia es frágil, pero siempre debe prevalecer; la economía debe crecer desde el centro y la base hacia arriba.»",
      "de": "„Demokratie ist kostbar und muss verteidigt werden; Wirtschaft muss von der Mitte nach außen wachsen.“"
    },
    "whyVote": {
      "pl": "Oddałbyś na niego głos za bezprecedensowe inwestycje w zieloną transformację (Inflation Reduction Act), odbudowę dróg i mostów (IIJA), zjednoczenie wolnego świata wokół Ukrainy i wsparcie związków.",
      "en": "You would vote for him for the historic clean energy transition (Inflation Reduction Act), bipartisan infrastructure package, reuniting NATO allies in support of Ukraine, and pro-union labor support.",
      "ru": "Вы бы проголосовали за него за рекордные инвестиции в чистую энергетику (IRA), двухпартийный закон об инфраструктуре, консолидацию НАТО в поддержке Украины и защиту прав профсоюзов.",
      "fr": "Vous voteriez pour lui pour la loi historique sur la transition écologique (IRA), la modernisation des infrastructures, le soutien indéfectible à l'Ukraine et la défense du travail syndiqué.",
      "es": "Crees en inversiones públicas históricas en infraestructura y energía verde (Inflation Reduction Act), apoyo sindical y rearme moral de las democracias en la OTAN.",
      "de": "Du befürwortest massive Investitionen in Infrastruktur und saubere Industrie (IRA), Stärkung der Gewerkschaften und transatlantische Geschlossenheit."
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
      "fr": "Russie",
      "es": "Rusia",
      "de": "Russland"
    },
    "role": {
      "pl": "Prezydent Federacji Rosyjskiej, przywódca autorytarnego państwa mocarstwowego",
      "en": "President of the Russian Federation, champion of multipolar sovereign power",
      "ru": "Президент Российской Федерации, верховный главнокомандующий",
      "fr": "Président de la Fédération de Russie, défenseur d'un monde multipolaire souverain",
      "es": "Presidente de la Federación Rusa, arquitecto del Estado centralizado ruso",
      "de": "Präsident der Russischen Föderation, Architekt der russischen Machtvertikale"
    },
    "quote": {
      "pl": "„Granice Rosji nigdzie się nie kończą.”",
      "en": "“Russia's borders do not end anywhere.”",
      "ru": "«Границы России нигде не заканчиваются.»",
      "fr": "« Les frontières de la Russie ne s'arrêtent nulle part. »",
      "es": "«Rusia es un Estado-civilización con su propio camino histórico que jamás capitulará ante la hegemonía occidental.»",
      "de": "„Russland ist ein eigener Zivilisationsstaat, der sich niemals fremder Vorherrschaft beugt.“"
    },
    "whyVote": {
      "pl": "Oddałbyś na niego głos za odbudowę potęgi wojskowej Rosji po rozpadzie ZSRR, sprzeciw wobec hegemonii USA i Zachodu, obronę tradycyjnych wartości chrześcijańskich i państwową kontrolę nad surowcami.",
      "en": "You would vote for him for restoring Russian great-power status after 1991, challenging Western geopolitical hegemony, asserting traditional social values, and state control over strategic energy.",
      "ru": "Вы бы проголосовали за него за возрождение мощи России после хаоса 90-х, защиту суверенитета от давления Запада, отстаивание традиционных ценностей и возврат исторических земель.",
      "fr": "Vous voteriez pour lui pour le rétablissement de la puissance stratégique russe, la contestation de l'ordre unipolaire américain, la défense des valeurs traditionnelles et la souveraineté énergétique.",
      "es": "Favoreces el conservadurismo tradicional, un Estado fuerte con soberanía energética, la multipolaridad geopolítica y el rechazo a la hegemonía de Occidente.",
      "de": "Du befürwortest traditionelle gesellschaftliche Werte, eine starke staatliche Exekutive, strategische Rohstoffsouveränität und eine multipolare Weltordnung."
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
      "fr": "Chine (RPC)",
      "es": "República Popular China",
      "de": "Volksrepublik China"
    },
    "role": {
      "pl": "Przewodniczący ChRL, Sekretarz Generalny KC KPCh, architekt „Chińskiego Snu”",
      "en": "President of the PRC, General Secretary of the CCP, architect of the Chinese Dream",
      "ru": "Председатель КНР, Генеральный секретарь ЦК КПК, архитектор «Китайской мечты»",
      "fr": "Président de la République populaire de Chine, secrétaire général du PCC",
      "es": "Presidente de la República Popular China y Secretario General del PCCh",
      "de": "Präsident der Volksrepublik China und Generalsekretär der KPCh"
    },
    "quote": {
      "pl": "„Chiński naród wkroczył w nieodwracalny bieg ku wielkiemu odrodzeniu.”",
      "en": "“The Chinese nation has achieved the tremendous transformation from standing up to becoming prosperous and strong.”",
      "ru": "«Великое возрождение китайской нации стало необратимым историческим процессом.»",
      "fr": "« La grande renaissance de la nation chinoise est entrée dans un processus historique irréversible. »",
      "es": "«El rejuvenecimiento de la nación china y la prosperidad compartida son el objetivo ineludible de nuestra era.»",
      "de": "„Die Renaissance der chinesischen Nation und gemeinsamer Wohlstand bestimmen unsere Epoche.“"
    },
    "whyVote": {
      "pl": "Oddałbyś na niego głos za globalną ekspansję infrastrukturalną (Inicjatywa Pasa i Szlaku), całkowitą likwidację skrajnego ubóstwa, walkę z korupcją w partii i budowę technologicznego mocarstwa XXI wieku.",
      "en": "You would vote for him for the Belt and Road global infrastructure initiative, total eradication of absolute poverty, assertive anti-corruption campaigns, and technological global supremacy.",
      "ru": "Вы бы проголосовали за него за проект «Один пояс, один путь», полную ликвидацию абсолютной нищеты, жесткую антикоррупционную чистку и превращение Китая в технологического гиганта.",
      "fr": "Vous voteriez pour lui pour l'initiative planétaire des Nouvelles Routes de la Soie, l'éradication de l'extrême pauvreté, la lutte anticorruption et la souveraineté technologique de pointe.",
      "es": "Respaldas la primacía de la estabilidad social colectiva, la iniciativa global de la Franja y la Ruta, el liderazgo tecnológico nacional y el orden estatal planificado.",
      "de": "Du schätzt gesellschaftliche Stabilität, das Jahrhundertprojekt der Neuen Seidenstraße, technologische Weltspitze und strategische Staatslenkung."
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
      "fr": "Royaume-Uni",
      "es": "Reino Unido",
      "de": "Vereinigtes Königreich"
    },
    "role": {
      "pl": "Premier Wielkiej Brytanii (2019–2022), architekt Brexitu i wsparcia dla Ukrainy",
      "en": "Prime Minister of the UK (2019–2022), architect of Brexit and early military aid to Ukraine",
      "ru": "Премьер-министр Великобритании (2019–2022), лидер реализации Брекзита",
      "fr": "Premier ministre du Royaume-Uni (2019–2022), artisan de la sortie de l'UE (Brexit)",
      "es": "Primer Ministro del Reino Unido (2019–2022), líder del Brexit",
      "de": "Premierminister des Vereinigten Königreichs (2019–2022), Anführer des Brexits"
    },
    "quote": {
      "pl": "„Get Brexit Done! Odzyskajmy kontrolę nad naszymi prawami i granicami.”",
      "en": "“Get Brexit Done! We will take back control of our laws, borders and money.”",
      "ru": "«Доведём Брекзит до конца! Вернём контроль над нашими законами и границами.»",
      "fr": "« Réalisons le Brexit ! Reprenons le contrôle de nos lois, de nos frontières et de notre destin. »",
      "es": "«Hagamos realidad el Brexit y devolvamos el control a nuestro pueblo; el optimismo y la audacia mueven naciones.»",
      "de": "„Get Brexit Done – holen wir die Kontrolle zurück; Tatkraft und Optimismus bewegen Nationen.“"
    },
    "whyVote": {
      "pl": "Oddałbyś na niego głos za skuteczne doprowadzenie Brexitu do końca i odzyskanie suwerenności parlamentu, szybki program szczepień, program wyrównywania szans regionalnych oraz bezwzględną pomoc dla Ukrainy.",
      "en": "You would vote for him for delivering Brexit to restore parliamentary sovereignty, the vaccine rollout, Leveling Up regional investments, and pioneering decisive Western military defense for Ukraine.",
      "ru": "Вы бы проголосовали за него за реализацию Брекзита и выход из ЕС, успешную кампанию вакцинации, инвестиции в британские регионы и бескомпромиссную военную помощь Украине.",
      "fr": "Vous voteriez pour lui pour avoir mené à terme le Brexit restaurant la souveraineté nationale, le plan d'investissement régional et son soutien militaire résolu à l'Ukraine.",
      "es": "Apoyas la recuperación de la soberanía nacional fuera de la Unión Europea, el reequilibrio de inversiones hacia regiones olvidadas (Levelling Up) y el apoyo militar a Ucrania.",
      "de": "Du befürwortest die nationale Souveränität außerhalb der EU, Investitionen in abgehängte Regionen (Levelling Up) und entschlossene Unterstützung der Ukraine."
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
      "fr": "Brésil",
      "es": "Brasil",
      "de": "Brasilien"
    },
    "role": {
      "pl": "Prezydent Brazylii (2019–2022), lider konserwatywnego populizmu i wolnego rynku",
      "en": "President of Brazil (2019–2022), conservative populist champion of free enterprise",
      "ru": "Президент Бразилии (2019–2022), правый популист и защитник свободного рынка",
      "fr": "Président du Brésil (2019–2022), figure du populisme conservateur et libéral",
      "es": "Presidente de Brasil (2019–2022), líder del conservadurismo patriótico",
      "de": "Präsident von Brasilien (2019–2022), Leitfigur des patriotischen Konservatismus"
    },
    "quote": {
      "pl": "„Brazylia ponad wszystkim, Bóg ponad wszystkimi!”",
      "en": "“Brazil above everything, God above everyone!”",
      "ru": "«Бразилия превыше всего, Бог превыше всех!»",
      "fr": "« Le Brésil avant tout, Dieu par-dessus tout ! »",
      "es": "«Brasil por encima de todo, Dios por encima de todos; libertad económica, valores morales y orden público.»",
      "de": "„Brasilien über alles, Gott über allen; wirtschaftliche Freiheit, christliche Familie und harte Kriminalitätsbekämpfung.“"
    },
    "whyVote": {
      "pl": "Oddałbyś na niego głos za rynkowe reformy gospodarcze (Paulo Guedes), reformę emerytalną, walkę z przestępczością, prawo do posiadania broni, obronę tradycyjnej rodziny i sprzeciw wobec ekologizmu.",
      "en": "You would vote for him for free-market deregulation, historic pension reform, aggressive crackdowns on violent crime, easing gun ownership, and unapologetic Christian cultural conservatism.",
      "ru": "Вы бы проголосовали за него за пенсионную реформу и дерегуляцию, жесткую борьбу с наркокартелями, упрощение владения оружием, защиту традиционной семьи и скептицизм к климатическим ограничениям.",
      "fr": "Vous voteriez pour lui pour les réformes libérales de dérégulation, la réforme des retraites, la fermeté totale contre la criminalité, le port d'armes citoyen et les valeurs chrétiennes.",
      "es": "Defiendes los valores cristianos tradicionales de la familia, la desregulación para el agronegocio, el derecho civil a poseer armas de fuego y la lucha frontal contra la izquierda.",
      "de": "Du stehst für traditionelle Familienwerte, Deregulierung für Landwirtschaft und Wirtschaft, Waffenbesitzrecht zur Selbstverteidigung und Anti-Sozialismus."
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
      "fr": "Allemagne",
      "es": "Alemania",
      "de": "Deutschland"
    },
    "role": {
      "pl": "Kanclerz Niemiec (od 2021), lider SPD, ogłosił historyczny zwrot „Zeitenwende”",
      "en": "Chancellor of Germany (since 2021), SPD leader who proclaimed the 'Zeitenwende' defense shift",
      "ru": "Канцлер Германии (с 2021), лидер СДПГ, провозгласивший исторический перелом «Zeitenwende»",
      "fr": "Chancelier d'Allemagne (depuis 2021), dirigeant du SPD, initiateur du tournant « Zeitenwende »",
      "es": "Canciller Federal de Alemania, líder socialdemócrata del SPD",
      "de": "Bundeskanzler der Bundesrepublik Deutschland, SPD-Politiker"
    },
    "quote": {
      "pl": "„Przeżywamy epokowy punkt zwrotny (Zeitenwende) w historii naszego kontynentu.”",
      "en": "“We are living through a watershed era (Zeitenwende) in European history.”",
      "ru": "«Мы переживаем историческую смену эпох (Zeitenwende).»",
      "fr": "« Nous vivons un changement d'époque historique (Zeitenwende). »",
      "es": "«El respeto y la cohesión social son la base de la democracia; la transición energética debe asegurar empleos de calidad.»",
      "de": "„Respekt für alle Arbeitenden und Zusammenhalt sind die Basis; die Zeitenwende sichert Freiheit und Zukunft.“"
    },
    "whyVote": {
      "pl": "Oddałbyś na niego głos za podniesienie płacy minimalnej do 12 euro, utworzenie specjalnego funduszu 100 mld euro na modernizację Bundeswehry oraz zrównoważoną transformację zielonego przemysłu.",
      "en": "You would vote for him for raising the statutory minimum wage to €12, establishing the €100B Zeitenwende fund to re-equip the military, and pragmatic industrial green transition.",
      "ru": "Вы бы проголосовали за него за повышение минимальной оплаты труда до 12 евро, выделение 100 млрд евро на перевооружение Бундесвера и прагматичную энергетическую политику.",
      "fr": "Vous voteriez pour lui pour la revalorisation du salaire minimum à 12 € de l'heure, le fonds de 100 milliards d'euros pour la défense et la transition écologique industrielle.",
      "es": "Crees en la modernización industrial climática, el salario mínimo digno, la prudencia estratégica (Zeitenwende) y la fortaleza de las alianzas europeas.",
      "de": "Du schätzt industrielle Klimatransformation, faire Mindestlöhne, besonnene Sicherheitspolitik (Zeitenwende) und europäische Verlässlichkeit."
    },
    "coordinates": {
      "econ": -38,
      "soc": 30
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
      "fr": "Italie",
      "es": "Italia",
      "de": "Italien"
    },
    "role": {
      "pl": "Premier Włoch (od 2022), liderka partii Fratelli d'Italia, konserwatystka atlantycka",
      "en": "Prime Minister of Italy (since 2022), leader of Fratelli d'Italia, Atlanticist conservative",
      "ru": "Премьер-министр Италии (с 2022), лидер партии «Братья Италии», консерватор",
      "fr": "Présidente du Conseil italien (depuis 2022), dirigeante de Fratelli d'Italia, conservatrice",
      "es": "Primera Ministra de Italia, líder de Fratelli d'Italia y presidenta del ECR",
      "de": "Ministerpräsidentin von Italien, Vorsitzende von Fratelli d'Italia und der EKR"
    },
    "quote": {
      "pl": "„Jestem Giorgia, jestem kobietą, jestem matką, jestem Włoszką, jestem chrześcijanką!”",
      "en": "“I am Giorgia, I am a woman, I am a mother, I am Italian, I am Christian!”",
      "ru": "«Я — Джорджа, я женщина, я мать, я итальянка, я христианка!»",
      "fr": "« Je suis Giorgia, je suis une femme, je suis une mère, je suis italienne, je suis chrétienne ! »",
      "es": "«Soy Giorgia, soy mujer, soy madre, soy italiana, soy cristiana; nadie me arrebatará mi identidad.»",
      "de": "„Ich bin Giorgia, ich bin eine Frau, ich bin Mutter, Italienerin und Christin – meine Identität lasse ich mir nicht nehmen.“"
    },
    "whyVote": {
      "pl": "Oddałbyś na niego głos za obronę tożsamości narodowej i tradycyjnej rodziny, walkę z nielegalną imigracją (Plano Mattei), obniżki podatków dochodowych i twarde wsparcie dla NATO i Ukrainy.",
      "en": "You would vote for him for defending national cultural identity and traditional families, curbing illegal migration (Mattei Plan), lowering labor taxes, and staunch pro-NATO alignment on Ukraine.",
      "ru": "Вы бы проголосовали за него за защиту традиционных семейных ценностей, пресечение нелегальной миграции через Средиземное море, налоговые послабления и четкую атлантическую позицию.",
      "fr": "Vous voteriez pour lui pour la défense des racines chrétiennes et de la famille, le contrôle renforcé de l'immigration clandestine, la baisse des charges et la solidarité atlantique.",
      "es": "Respaldas la defensa decidida de la identidad nacional, el freno a la inmigración ilegal en el Mediterráneo, el apoyo a la natalidad y el atlantismo occidental firme.",
      "de": "Du unterstützt den Schutz nationaler Identität, strikte Grenzkontrollen im Mittelmeer, aktive Familien- und Geburtenförderung und Westbindung."
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
      "fr": "Espagne",
      "es": "España",
      "de": "Spanien"
    },
    "role": {
      "pl": "Premier Hiszpanii (od 2018), lider PSOE, czołowy socjaldemokrata europejski",
      "en": "Prime Minister of Spain (since 2018), leader of the PSOE, prominent European Social Democrat",
      "ru": "Председатель правительства Испании (с 2018), лидер ИСРП, социал-демократ",
      "fr": "Président du gouvernement d'Espagne (depuis 2018), secrétaire général du PSOE",
      "es": "Presidente del Gobierno de España, líder del PSOE y presidente de la Internacional Socialista",
      "de": "Ministerpräsident von Spanien, Generalsekretär der PSOE und Präsident der Sozialistischen Internationale"
    },
    "quote": {
      "pl": "„Rządy muszą służyć większości społecznej, a nie uprzywilejowanym korporacjom.”",
      "en": "“Governments must serve the social majority, not privileged corporate elites.”",
      "ru": "«Власть обязана служить большинству общества, а не привилегированным элитам.»",
      "fr": "« Les gouvernements doivent servir la majorité sociale, non les élites privilégiées. »",
      "es": "«Gobernamos para la mayoría social: subida de pensiones, salario mínimo récord y transición ecológica justa.»",
      "de": "„Wir regieren für die soziale Mehrheit: Rentenerhöhungen, Rekord-Mindestlohn und gerechte ökologische Transformation.“"
    },
    "whyVote": {
      "pl": "Oddałbyś na niego głos za wprowadzenie limitu cen gazu (wyjątek iberyjski), opodatkowanie zysków banków i koncernów energetycznych, skokowe podwyżki płacy minimalnej i awangardę Zielonego Ładu.",
      "en": "You would vote for him for the Iberian energy price cap shielding consumers, taxing windfall corporate profits, major minimum wage increases, and ambitious climate transition laws.",
      "ru": "Вы бы проголосовали за него за ограничение цен на газ («иберийское исключение»), налог на сверхприбыль банков, рекордное повышение МРОТ и смелое экологическое законодательство.",
      "fr": "Vous voteriez pour lui pour le bouclier tarifaire sur l'énergie (exception ibérique), la taxe sur les superprofits bancaires, la hausse du salaire minimum et la transition verte.",
      "es": "Apoyas subidas significativas del salario mínimo, la revalorización de las pensiones públicas, derechos laborales reforzados, el laicismo y el feminismo activo.",
      "de": "Du befürwortest spürbare Mindestlohnanhebungen, verlässliche Rentenanpassungen, starke Arbeitnehmerrechte, Säkularismus und Gleichstellung."
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
      "fr": "Hongrie",
      "es": "Hungría",
      "de": "Ungarn"
    },
    "role": {
      "pl": "Premier Węgier (1998–2002, od 2010), lider Fideszu, twórca koncepcji państwa nieliberalnego",
      "en": "Prime Minister of Hungary (1998–2002, since 2010), leader of Fidesz, illiberal statecraft pioneer",
      "ru": "Премьер-министр Венгрии (1998–2002, с 2010), лидер Фидес, идеолог суверенной демократии",
      "fr": "Premier ministre de Hongrie (1998–2002, depuis 2010), dirigeant du Fidesz, théoricien de l'illibéralisme",
      "es": "Primer Ministro de Hungría, líder del Fidesz y defensor de la democracia iliberal",
      "de": "Ministerpräsident von Ungarn, Fidesz-Vorsitzender und Verfechter christlicher Souveränität"
    },
    "quote": {
      "pl": "„Węgry nie staną się krajem imigrantów. Budujemy chrześcijańską nieliberalną demokrację.”",
      "en": "“Hungary will not become an immigrant country. We are building a Christian democracy.”",
      "ru": "«Венгрия не станет страной мигрантов. Мы строим христианскую суверенную демократию.»",
      "fr": "« La Hongrie ne sera pas un pays d'immigration. Nous défendons une démocratie chrétienne souveraine. »",
      "es": "«Hungría primero: defendemos la familia cristiana, nuestras fronteras y la soberanía frente a Bruselas.»",
      "de": "„Ungarn zuerst: Wir schützen die christliche Familie, unsere Grenzen und unsere Souveränität vor Bevormundung.“"
    },
    "whyVote": {
      "pl": "Oddałbyś na niego głos za bezkompromisowy sprzeciw wobec relokacji migrantów, ogrodzenie granic, potężne ulgi podatkowe i subsydia dla matek rodzących dzieci oraz obronę suwerenności przed UE.",
      "en": "You would vote for him for absolute rejection of EU migrant quotas, physical border fencing, lifetime income tax exemptions for mothers of 4+ children, and national constitutional primacy.",
      "ru": "Вы бы проголосовали за него за закрытие границ от нелегальной миграции, освобождение многодетных матерей от подоходного налога навсегда и защиту национальных интересов Венгрии.",
      "fr": "Vous voteriez pour lui pour le refus catégorique des quotas migratoires de Bruxelles, la clôture des frontières, l'exonération fiscale à vie pour les mères de famille nombreuse et la souveraineté.",
      "es": "Crees en el freno total a la inmigración ilegal, generosos incentivos fiscales a las familias numerosas, soberanía nacional frente a la UE y pragmatismo energético.",
      "de": "Du unterstützt Grenzzäune gegen illegale Migration, massive Steuerbefreiungen für kinderreiche Familien, nationale Souveränität und Realpolitik."
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
      "fr": "Pologne",
      "es": "Polonia",
      "de": "Polen"
    },
    "role": {
      "pl": "Prezes Prawa i Sprawiedliwości (PiS), b. premier RP, architekt polityki solidaryzmu",
      "en": "Leader of Law and Justice (PiS), former Prime Minister of Poland, architect of solidarist welfare",
      "ru": "Лидер партии «Право и справедливость» (PiS), бывший премьер-министр Польши",
      "fr": "Président de Droit et Justice (PiS), ancien Premier ministre de Pologne, artisan du solidarisme",
      "es": "Líder de Ley y Justicia (PiS), arquitecto de la derecha patriótica y social polaca",
      "de": "Vorsitzender von Recht und Gerechtigkeit (PiS), Vordenker des polnischen Sozialpatriotismus"
    },
    "quote": {
      "pl": "„Polska musi pozostać oazą wolności, wiary i tradycji w Europie.”",
      "en": "“Poland must remain an oasis of freedom, faith, and traditional values in Europe.”",
      "ru": "«Польша должна оставаться оазисом свободы, веры и традиций в Европе.»",
      "fr": "« La Pologne doit demeurer une oasis de liberté, de foi et de tradition en Europe. »",
      "es": "«La fuerza de Polonia reside en sus valores cristianos, la familia y la solidaridad social con la gente corriente.»",
      "de": "„Polens Stärke ruht auf christlichen Werten, der Familie und sozialer Solidarität mit normalen Bürgern.“"
    },
    "whyVote": {
      "pl": "Oddałbyś na niego głos za rewolucję solidarnościową i program 500+ na każde dziecko, obniżenie wieku emerytalnego, obronę tradycyjnych wartości chrześcijańskich, rozbudowę polskiej armii i mur na granicy.",
      "en": "You would vote for him for the transformative 500+ universal child benefit, lowering retirement age, defending Christian roots, launching unprecedented military expansion, and border barriers.",
      "ru": "Вы бы проголосовали за него за программу детских выплат 500+, снижение пенсионного возраста, защиту христианской идентичности, рекордное укрепление армии и защиту восточной границы.",
      "fr": "Vous voteriez pour lui pour le programme d'allocations familiales 500+, l'abaissement de l'âge de la retraite, la défense des valeurs chrétiennes et le renforcement historique de l'armée.",
      "es": "Valoras los programas universales de apoyo familiar (500+ / 800+), las pensiones extraordinarias, la defensa de la tradición católica y el rearme militar masivo.",
      "de": "Du schätzt universelle Familienförderung (800+), zusätzliche Rentenauszahlungen, Bewahrung christlicher Tradition und massive Rüstungsinvestitionen."
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
      "fr": "Pologne",
      "es": "Polonia",
      "de": "Polen"
    },
    "role": {
      "pl": "Premier RP (2017–2023), ekonomista, autor Strategii Odpowiedzialnego Rozwoju",
      "en": "Prime Minister of Poland (2017–2023), economist, architect of the Responsible Development Plan",
      "ru": "Премьер-министр Польши (2017–2023), экономист, автор Стратегии ответственного развития",
      "fr": "Premier ministre de Pologne (2017–2023), économiste, promoteur du développement stratégique",
      "es": "Primer Ministro de Polonia (2017–2023), economista y líder de la modernización industrial",
      "de": "Ministerpräsident von Polen (2017–2023), Ökonom und Modernisierer"
    },
    "quote": {
      "pl": "„Silne, suwerenne państwo dba o najsłabszych i odważnie inwestuje w strategiczny kapitał przyszłości.”",
      "en": "“A strong sovereign state protects its most vulnerable while boldly investing in future strategic assets.”",
      "ru": "«Сильное суверенное государство защищает слабых и смело инвестирует в стратегическое будущее.»",
      "fr": "« Un État fort et souverain protège les plus vulnérables et investit dans les secteurs stratégiques d'avenir. »",
      "es": "«Combinamos el desarrollo económico moderno y la reindustrialización con la solidaridad hacia las familias trabajadoras.»",
      "de": "„Wir verbinden moderne Reindustrialisierung und Hightech-Investitionen mit sozialer Solidarität für Familien.“"
    },
    "whyVote": {
      "pl": "Oddałbyś na niego głos za skuteczne uszczelnienie luki w podatku VAT finansujące programy społeczne, tarcze antykryzysowe chroniące miejsca pracy, program energetyki jądrowej w Polsce i inwestycje lokalne.",
      "en": "You would vote for him for closing the corporate VAT tax gap to fund social programs, pandemic economic shields saving millions of jobs, pioneering civil nuclear power, and local infrastructure grants.",
      "ru": "Вы бы проголосовали за него за закрытие лазеек в НДС для финансирования соцпрограмм, антикризисные щиты для бизнеса, запуск первой польской АЭС и масштабные инвестиции в регионы.",
      "fr": "Vous voteriez pour lui pour la lutte victorieuse contre la fraude à la TVA finançant le social, les boucliers économiques protégeant l'emploi, le programme nucléaire civil et les infrastructures.",
      "es": "Apoyas el cierre de brechas de evasión del IVA, grandes inversiones en infraestructuras (CPK), compras masivas de armamento moderno y desarrollo del tejido local.",
      "de": "Du befürwortest Schließung von Steuerschlupflöchern, Großinfrastruktur (CPK), beispiellose Modernisierung der Streitkräfte und Förderung des Mittelstands."
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
      "fr": "Union européenne",
      "es": "Unión Europea / Alemania",
      "de": "Europäische Union / Deutschland"
    },
    "role": {
      "pl": "Przewodnicząca Komisji Europejskiej (od 2019), b. minister obrony Niemiec",
      "en": "President of the European Commission (since 2019), former German Minister of Defence",
      "ru": "Председатель Европейской комиссии (с 2019), бывший министр обороны Германии",
      "fr": "Présidente de la Commission européenne (depuis 2019), ancienne ministre fédérale allemande",
      "es": "Presidenta de la Comisión Europea, líder de la integración y el Pacto Verde Europeo",
      "de": "Präsidentin der Europäischen Kommission, Initiatorin des European Green Deal"
    },
    "quote": {
      "pl": "„Europa musi być odważna, zjednoczona i wiodąca w zielonej rewolucji technologicznej.”",
      "en": "“Europe must be bold, Europe must be green, Europe must stand united in a fractured world.”",
      "ru": "«Европа должна быть смелой, зелёной и единой перед лицом глобальных вызовов.»",
      "fr": "« L'Europe doit être audacieuse, verte et unie dans un monde fracturé. »",
      "es": "«Europa debe ser audaz, climáticamente neutra y actuar como una fuerza geopolítica unida en el escenario global.»",
      "de": "„Europa muss mutig vorangehen, klimaneutral werden und geeint als geopolitische Kraft handeln.“"
    },
    "whyVote": {
      "pl": "Oddałbyś na niego głos za Europejski Zielony Ład dążący do neutralności klimatycznej, bezprecedensowy wspólny fundusz odbudowy NextGenerationEU (800 mld €) i twarde przywództwo w obronie wolności Ukrainy.",
      "en": "You would vote for him for the European Green Deal climate framework, creating the historic €800B NextGenerationEU mutual debt fund, and resolute leadership mobilizing EU support for Ukraine.",
      "ru": "Вы бы проголосовали за него за «Европейский зелёный курс» к климатической нейтральности, создание общего фонда NextGenerationEU на 800 млрд евро и решительную поддержку Украины со стороны ЕС.",
      "fr": "Vous voteriez pour lui pour le Pacte vert pour l'Europe (Green Deal), l'emprunt européen historique de 800 milliards d'euros NextGenerationEU et la fermeté face à l'agression en Ukraine.",
      "es": "Defiendes la transición ecológica con el Green Deal, la compra conjunta europea de energía y vacunas, el rearme común continental y la primacía del Estado de derecho.",
      "de": "Du unterstützt den europäischen Green Deal zur Klimaneutralität, gemeinsame Krisenpolitik, Stärkung der europäischen Verteidigung und Rechtsstaatlichkeit."
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
      "fr": "Suède / Mouvement mondial",
      "es": "Suecia / Global",
      "de": "Schweden / Global"
    },
    "role": {
      "pl": "Inicjatorka globalnego Młodzieżowego Strajku Klimatycznego (Fridays for Future)",
      "en": "Founder of the School Strike for Climate (Fridays for Future) global movement",
      "ru": "Основательница глобального климатического движения «Пятницы ради будущего»",
      "fr": "Initiatrice des grèves scolaires pour le climat (Fridays for Future)",
      "es": "Activista climática mundial, fundadora de Fridays for Future",
      "de": "Klimaaktivistin, Gründerin der weltweiten Bewegung Fridays for Future"
    },
    "quote": {
      "pl": "„Nasz dom płonie! Chcę, żebyście wpadli w panikę i natychmiast zaczęli działać.”",
      "en": "“Our house is on fire. I want you to panic, and then I want you to act.”",
      "ru": "«Наш дом горит. Я хочу, чтобы вы запаниковали, а затем начали действовать.»",
      "fr": "« Notre maison brûle. Je veux que vous paniquiez, et que vous agissiez. »",
      "es": "«Nuestra casa está en llamas; no quiero su esperanza vacía, quiero que actúen con la urgencia que la ciencia exige.»",
      "de": "„Unser Haus brennt; ich will keine leeren Worte, ich will, dass ihr endlich der Wissenschaft folgt.“"
    },
    "whyVote": {
      "pl": "Oddałbyś na nią głos za bezkompromisowe domaganie się natychmiastowego odejścia od węgla, ropy i gazu, oskarżenie światowych przywódców o zaniechania, aktywizm non-profit i prymat biosfery nad PKB.",
      "en": "You would vote for her for unapologetic climate emergency activism, holding world elites accountable, demanding total phase-out of fossil subsidies, and placing planetary survival above corporate growth.",
      "ru": "Вы бы проголосовали за неё за бескомпромиссную борьбу против сжигания ископаемого топлива, разоблачение лицемерия мировых элит и требование поставить выживание планеты выше прибылей корпораций.",
      "fr": "Vous voteriez pour elle pour son intransigeance face à l'urgence climatique, son interpellation des dirigeants mondiaux, le refus des compromis sur les énergies fossiles et la primauté du vivant sur le PIB.",
      "es": "Exiges el cese inmediato de toda inversión en combustibles fósiles, la justicia climática global para el Sur y la desobediencia civil pacífica frente a la inacción política.",
      "de": "Du forderst den sofortigen Stopp aller fossilen Projekte, globale Klimagerechtigkeit und gewaltfreien zivilen Widerstand gegen politische Untätigkeit."
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
      "fr": "États-Unis",
      "es": "Estados Unidos / Global",
      "de": "Vereinigte Staaten / Global"
    },
    "role": {
      "pl": "Przedsiębiorca technologiczny, CEO Tesla i SpaceX, lider redukcji biurokracji państwowej",
      "en": "Tech entrepreneur, CEO of Tesla & SpaceX, champion of government efficiency and free speech",
      "ru": "Технологический предприниматель, глава Tesla и SpaceX, борец с госбюрократией",
      "fr": "Entrepreneur technologique, PDG de Tesla et SpaceX, partisan de la dérégulation étatique",
      "es": "Emprendedor visionario, CEO de Tesla y SpaceX, defensor del libre mercado y la libertad de expresión",
      "de": "Technologieunternehmer, CEO von Tesla und SpaceX, Verfechter von Marktfreiheit und Meinungsfreiheit"
    },
    "quote": {
      "pl": "„Wolność słowa jest fundamentem funkcjonującej demokracji. Regulacje duszą innowacje.”",
      "en": "“Free speech is the bedrock of a functioning democracy. Excessive regulation kills progress.”",
      "ru": "«Свобода слова — основа работающей демократии. Избыточные регуляции душат прогресс.»",
      "fr": "« La liberté d'expression est le socle d'une démocratie saine. La surrégulation étouffe l'innovation. »",
      "es": "«El futuro de la humanidad depende de convertirnos en una especie multiplanetaria y defender la libertad de expresión absoluta.»",
      "de": "„Die Zukunft der Menschheit liegt darin, multiplanetar zu werden und unzensierte Meinungsfreiheit zu wahren.“"
    },
    "whyVote": {
      "pl": "Oddałbyś na niego głos za bezwzględną walkę z państwową cenzurą, cięcie zbędnej biurokracji i wydatków rządowych (DOGE), komercyjny podbój kosmosu (SpaceX) i rewolucję aut elektrycznych.",
      "en": "You would vote for him for defending absolute free speech online, aggressive cuts to redundant federal bureaucracies, privatized space exploration (SpaceX), and accelerating sustainable technology.",
      "ru": "Вы бы проголосовали за него за защиту свободы слова от цензуры, радикальную оптимизацию госаппарата, частную космонавтику (SpaceX) и инновационный прорыв в электромобилях (Tesla).",
      "fr": "Vous voteriez pour lui pour la défense intransigeante de la liberté d'expression, la réduction drastique de la bureaucratie, la conquête spatiale privée (SpaceX) et la révolution technologique.",
      "es": "Apoyas la innovación tecnológica disruptiva, la electrificación del transporte, la exploración espacial privada, la desregulación y la libertad de expresión digital sin censura.",
      "de": "Du stehst für bahnbrechende Innovationen, Elektromobilität, private Raumfahrt (SpaceX), Bürokratieabbau und kompromisslose Meinungsfreiheit im Netz."
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
      "fr": "Allemagne (Empire allemand)",
      "es": "Alemania",
      "de": "Deutschland"
    },
    "role": {
      "pl": "Pierwszy Kanclerz Rzeszy (1871–1890), „Żelazny Kanclerz”, architekt zjednoczenia Niemiec",
      "en": "First Chancellor of the German Empire (1871–1890), the 'Iron Chancellor', unifier of Germany",
      "ru": "Первый канцлер Германской империи (1871–1890), «Железный канцлер», объединитель Германии",
      "fr": "Premier chancelier impérial (1871–1890), le « Chancelier de fer », artisan de l'unité allemande",
      "es": "El 'Canciller de Hierro', unificador de Alemania y creador de los primeros seguros sociales",
      "de": "Der „Eiserne Kanzler“, Einiger Deutschlands und Begründer der modernen Sozialversicherung"
    },
    "quote": {
      "pl": "„Wielkie kwestie epoki rozstrzyga się nie przemowami, lecz krwią i żelazem.”",
      "en": "“The great questions of the day will not be settled by speeches, but by blood and iron.”",
      "ru": "«Великие вопросы времени решаются не речами, а железом и кровью.»",
      "fr": "« Les grandes questions de notre temps ne se résoudront pas par des discours, mais par le fer et le sang. »",
      "es": "«La política es el arte de lo posible; las grandes cuestiones de la época no se resuelven con discursos, sino con hierro y sangre.»",
      "de": "„Politik ist die Kunst des Möglichen; die großen Fragen der Zeit werden durch Eisen und Blut entschieden.“"
    },
    "whyVote": {
      "pl": "Oddałbyś na niego głos za zjednoczenie Niemiec, stworzenie pierwszego na świecie powszechnego systemu ubezpieczeń zdrowotnych, wypadkowych i emerytur dla robotników oraz genialną dyplomację równowagi sił.",
      "en": "You would vote for him for unifying Germany, creating the world's first statutory modern social security and public healthcare safety net, and masterful balance-of-power Realpolitik.",
      "ru": "Вы бы проголосовали за него за объединение Германии «железом и кровью», введение первых в мировой истории государственных пенсий и медстрахования для рабочих и виртуозную дипломатию.",
      "fr": "Vous voteriez pour lui pour l'unification de l'Allemagne, la création pionnière du premier système de sécurité sociale et de retraite ouvrière au monde, et sa magistrale Realpolitik.",
      "es": "Crees en el pragmatismo estatal (Realpolitik), una diplomacia de equilibrio de poder sin aventuras imprudentes y la creación pionera de seguros de pensiones y salud por el Estado.",
      "de": "Du bewunderst staatsmännische Realpolitik, die Einführung der weltweit ersten Sozialversicherungen (Rente, Kranken-, Unfallversicherung) und Friedensdiplomatie."
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
      "fr": "États-Unis",
      "es": "Estados Unidos",
      "de": "Vereinigte Staaten"
    },
    "role": {
      "pl": "16. Prezydent USA (1861–1865), ocalił jedność Unii i zniósł niewolnictwo w Ameryce",
      "en": "16th US President (1861–1865), preserved the Union and abolished slavery via the 13th Amendment",
      "ru": "16-й Президент США (1861–1865), сохранил единство страны и отменил рабство",
      "fr": "16e Président des États-Unis (1861–1865), sauveur de l'Union et libérateur des esclaves",
      "es": "16.º Presidente de los Estados Unidos, preservador de la Unión y libertador de los esclavos",
      "de": "16. US-Präsident, Retter der Union und Befreier der Sklaven"
    },
    "quote": {
      "pl": "„Rząd narodu, przez naród i dla narodu nie zniknie z powierzchni ziemi.”",
      "en": "“Government of the people, by the people, for the people, shall not perish from the earth.”",
      "ru": "«Власть народа, волей народа и для народа не исчезнет с лица земли.»",
      "fr": "« Le gouvernement du peuple, par le peuple, pour le peuple, ne disparaîtra pas de la terre. »",
      "es": "«El gobierno del pueblo, por el pueblo y para el pueblo jamás desaparecerá de la faz de la tierra.»",
      "de": "„Eine Regierung des Volkes, durch das Volk und für das Volk wird nicht von der Erde verschwinden.“"
    },
    "whyVote": {
      "pl": "Oddałbyś na niego głos za podpisanie Proklamacji Emancypacji, uchwalenie XIII Poprawki niszczącej niewolnictwo, uratowanie republiki przed rozpadem w wojnie secesyjnej i niezłomny humanizm.",
      "en": "You would vote for him for ending chattel slavery through the Emancipation Proclamation and 13th Amendment, defending the constitutional Union against secession, and immortal moral leadership.",
      "ru": "Вы бы проголосовали за него за Прокламацию об освобождении рабов и 13-ю поправку, победу в Гражданской войне, сохранение единства Союза и верность идеалам свободы человека.",
      "fr": "Vous voteriez pour lui pour la Proclamation d'émancipation et le 13e amendement abolissant l'esclavage, la préservation de la République dans la guerre de Sécession et sa grandeur morale.",
      "es": "Defiendes la abolición incondicional de la esclavitud, la defensa inquebrantable de la unidad constitucional nacional y la fe democrática en la igualdad de todos los hombres.",
      "de": "Du stehst für die Abschaffung der Sklaverei, die unerschütterliche Verteidigung der Verfassung und die Überzeugung, dass alle Menschen gleich geschaffen sind."
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
      "fr": "États-Unis",
      "es": "Estados Unidos",
      "de": "Vereinigte Staaten"
    },
    "role": {
      "pl": "26. Prezydent USA (1901–1909), twórca programu Square Deal i parków narodowych, noblista",
      "en": "26th US President (1901–1909), trust-buster, conservationist pioneer, Nobel Peace Laureate",
      "ru": "26-й Президент США (1901–1909), гроза монополий («Square Deal»), создатель национальных парков",
      "fr": "26e Président des États-Unis (1901–1909), briseur de trusts, pionnier des parcs nationaux, prix Nobel",
      "es": "26.º Presidente de los Estados Unidos, líder progresista antimonopolio y conservacionista",
      "de": "26. US-Präsident, progressiver Reformer, Trustbuster und Naturschützer"
    },
    "quote": {
      "pl": "„Mów cicho i miej przy sobie gruby kij; zajdziesz daleko.”",
      "en": "“Speak softly and carry a big stick; you will go far.”",
      "ru": "«Говори мягко, но держи в руках большую дубинку; и ты далеко пойдешь.»",
      "fr": "« Parlez avec douceur, mais munissez-vous d'un gros bâton ; vous irez loin. »",
      "es": "«Habla con suavidad y lleva un gran garrote; ningún monopolio privado puede estar por encima del pueblo soberano.»",
      "de": "„Sprich sanft und trage einen großen Knüppel; kein Großkonzern darf über dem Gesetz stehen.“"
    },
    "whyVote": {
      "pl": "Oddałbyś na niego głos za bezwzględne rozbijanie szkodliwych monopoli korporacyjnych (trust-busting), program Square Deal, stworzenie 150 parków i rezerwatów przyrody oraz budowę Kanału Panamskiego.",
      "en": "You would vote for him for aggressively dismantling corporate monopolies (trust-busting), the Square Deal fair-play agenda, setting aside 230 million acres for federal conservation, and the Panama Canal.",
      "ru": "Вы бы проголосовали за него за разрушение монополий трестов, защиту прав потребителей (Square Deal), создание системы национальных природных заповедников и строительство Панамского канала.",
      "fr": "Vous voteriez pour lui pour son démantèlement des monopoles financiers abusifs, le programme d'équité Square Deal, la création pionnière des parcs nationaux et le canal de Panama.",
      "es": "Respaldas la lucha antimonopolio (Trust-Busting) contra el abuso corporativo, la conservación masiva de parques naturales nacionales y una política exterior disuasoria enérgica.",
      "de": "Du unterstützt energische Kartellbekämpfung gegen Monopole, die Schaffung der Nationalparks und wehrhafte Außenpolitik („Big Stick“)."
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
      "fr": "Royaume-Uni",
      "es": "Reino Unido",
      "de": "Vereinigtes Königreich"
    },
    "role": {
      "pl": "Premier Wielkiej Brytanii (1937–1940), architekt polityki appeasementu w Monachium",
      "en": "Prime Minister of the UK (1937–1940), architect of Appeasement and crucial British rearmament",
      "ru": "Премьер-министр Великобритании (1937–1940), автор политики умиротворения агрессора",
      "fr": "Premier ministre du Royaume-Uni (1937–1940), artisan de la politique d'apaisement",
      "es": "Primer Ministro del Reino Unido (1937–1940), defensor de la diplomacia de apaciguamiento",
      "de": "Premierminister des Vereinigten Königreichs (1937–1940), Vertreter der Appeasement-Politik"
    },
    "quote": {
      "pl": "„Przywożę wam pokój dla naszych czasów (Peace for our time).”",
      "en": "“I believe it is peace for our time. Peace with honour.”",
      "ru": "«Я привёз мир нашему поколению.»",
      "fr": "« J'apporte la paix pour notre temps. Une paix dans l'honneur. »",
      "es": "«En la guerra, cualquiera que sea el bando que gane, no hay vencedores; todos son perdedores si podemos evitar la catástrofe.»",
      "de": "„Im Krieg gibt es keine Sieger, nur Verlierer; Frieden zu wahren ist die oberste Pflicht.“"
    },
    "whyVote": {
      "pl": "Oddałbyś na niego głos za usilną dyplomatyczną próbę uchronienia świata przed koszmarem nowej wojny światowej, połączoną z potajemnym przyspieszeniem zbrojeń lotniczych (myśliwce Spitfire i radar).",
      "en": "You would vote for him for seeking to spare humanity from a devastating second world war, while quietly using the bought time to accelerate RAF fighter command and radar rearmament.",
      "ru": "Вы бы проголосовали за него за искреннюю попытку предотвратить катастрофу новой мировой бойни и одновременное финансирование создания истребителей Spitfire и радаров ПВО.",
      "fr": "Vous voteriez pour lui pour sa volonté désespérée d'éviter le carnage d'un nouveau conflit mondial, tout en modernisant en urgence la défense aérienne (Spitfire et radars).",
      "es": "Prefieres el compromiso diplomático pragmático, evitar el estallido de guerras mundiales devastadoras a toda costa y ganar tiempo para el rearme defensivo nacional.",
      "de": "Du ziehst diplomatische Verhandlungen dem Schrecken eines Weltkriegs vor und befürwortest Versuche, durch Verträge den Frieden zu retten."
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
      "fr": "Allemagne (RFA)",
      "es": "Alemania",
      "de": "Deutschland"
    },
    "role": {
      "pl": "Pierwszy Kanclerz RFN (1949–1963), współtwórca niemieckiego cudu gospodarczego",
      "en": "First Chancellor of West Germany (1949–1963), architect of the Wirtschaftswunder and Westintegration",
      "ru": "Первый канцлер ФРГ (1949–1963), архитектор «немецкого экономического чуда»",
      "fr": "Premier chancelier de la RFA (1949–1963), artisan du miracle économique allemand",
      "es": "Primer Canciller Federal de la RFA (1949–1963), padre de la democracia alemana de posguerra",
      "de": "Erster Bundeskanzler der Bundesrepublik Deutschland (1949–1963), Gründungsvater der BRD"
    },
    "quote": {
      "pl": "„Żadnych eksperymentów! (Keine Experimente).”",
      "en": "“No experiments! (Keine Experimente).”",
      "ru": "«Никаких экспериментов!»",
      "fr": "« Pas d'expériences ! (Keine Experimente). »",
      "es": "«Ningún experimento: la libertad de Alemania exige un anclaje indiscutible en Occidente y la amistad reconciliada con Francia.»",
      "de": "„Keine Experimente: Freiheit erfordert Westbindung, europäische Einigung und christliche Werte.“"
    },
    "whyVote": {
      "pl": "Oddałbyś na niego głos za zbudowanie demokratycznej i bogatej RFN na gruzach wojny, model Społecznej Gospodarki Rynkowej (Ludwig Erhard), wejście do NATO i pojednanie z Francją.",
      "en": "You would vote for him for rebuilding democratic Germany from ashes, founding the Social Market Economy with Ludwig Erhard, anchoring West Germany in NATO, and historic reconciliation with France.",
      "ru": "Вы бы проголосовали за него за возрождение демократической Германии, модель социального рыночного хозяйства, вступление ФРГ в НАТО и историческое примирение с Францией.",
      "fr": "Vous voteriez pour lui pour la reconstruction démocratique de l'Allemagne, le modèle de l'économie sociale de marché, l'intégration à l'OTAN et la réconciliation historique franco-allemande.",
      "es": "Valoras el anclaje occidental en la OTAN, la construcción de la economía social de mercado con Ludwig Erhard, la reconciliación con Francia e Israel y la estabilidad serena.",
      "de": "Du stehst für Westbindung in der NATO, Aufbau der sozialen Marktwirtschaft, deutsch-französische Aussöhnung und verlässliche Stabilität."
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
      "fr": "Chine (RPC)",
      "es": "República Popular China",
      "de": "Volksrepublik China"
    },
    "role": {
      "pl": "Przywódca ChRL (1978–1989/1992), architekt reform rynkowych i Otwarcia Chin",
      "en": "Paramount Leader of China (1978–1989/1992), architect of Market Reforms & Opening Up",
      "ru": "Фактический руководитель Китая (1978–1989/1992), архитектор политики реформ и открытости",
      "fr": "Dirigeant historique de la Chine (1978–1989/1992), architecte des réformes et de l'ouverture",
      "es": "Líder supremo de China, artífice de la política de 'Reforma y Apertura'",
      "de": "Überragender Führer Chinas, Architekt der Reform- und Öffnungspolitik"
    },
    "quote": {
      "pl": "„Nieważne, czy kot jest czarny, czy biały – byle łapał myszy.”",
      "en": "“It doesn't matter whether a cat is black or white, as long as it catches mice.”",
      "ru": "«Не важно, черная кошка или белая, лишь бы она ловила мышей.»",
      "fr": "« Peu importe qu'un chat soit noir ou blanc, pourvu qu'il attrape les souris. »",
      "es": "«No importa si el gato es blanco o negro, mientras cace ratones es un buen gato; el desarrollo es la dura verdad.»",
      "de": "„Es ist egal, ob die Katze schwarz oder weiß ist – Hauptsache, sie fängt Mäuse.“"
    },
    "whyVote": {
      "pl": "Oddałbyś na niego głos za odważne reformy rynkowe, które wyciągnęły 800 milionów ludzi z ubóstwa, stworzenie Specjalnych Stref Ekonomicznych (Shenzhen) i pragmatyczny rozwój gospodarczy.",
      "en": "You would vote for him for market reforms that lifted 800M people out of extreme poverty, launching Special Economic Zones (Shenzhen), attracting global capital, and rapid modernization.",
      "ru": "Вы бы проголосовали за него за внедрение рыночных стимулов, избавивших от нищеты 800 миллионов человек, создание специальных экономических зон и превращение Китая в индустриального гиганта.",
      "fr": "Vous voteriez pour lui pour les réformes de marché ayant sorti 800 millions de citoyens de l'extrême pauvreté, la création des zones franches (Shenzhen) et l'essor économique fulgurant.",
      "es": "Crees en el pragmatismo económico absoluto: abrir las compuertas al mercado y la inversión privada para sacar a cientos de millones de la pobreza, preservando el orden estatal.",
      "de": "Du glaubst an wirtschaftlichen Pragmatismus: Nutzung marktwirtschaftlicher Kräfte zur Überwindung von Armut bei gleichzeitiger Wahrung politischer Stabilität."
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
      "fr": "Royaume-Uni",
      "es": "Reino Unido",
      "de": "Vereinigtes Königreich"
    },
    "role": {
      "pl": "Premier Wielkiej Brytanii (1997–2007), twórca New Labour i architekt Porozumienia Wielkopiątkowego",
      "en": "Prime Minister of the UK (1997–2007), leader of New Labour, architect of the Good Friday Agreement",
      "ru": "Премьер-министр Великобритании (1997–2007), создатель «Новых лейбористов» и Белфастского мира",
      "fr": "Premier ministre du Royaume-Uni (1997–2007), artisan du New Labour et des accords du Vendredi saint",
      "es": "Primer Ministro del Reino Unido (1997–2007), artífice del 'New Labour' y de los Acuerdos de Viernes Santo",
      "de": "Premierminister des Vereinigten Königreichs (1997–2007), Schöpfer von „New Labour“"
    },
    "quote": {
      "pl": "„Edukacja, edukacja, edukacja. Trzecia Droga łączy wolny rynek ze sprawiedliwością społeczną.”",
      "en": "“Education, education, education. A dynamic market economy married to a fair society.”",
      "ru": "«Образование, образование, образование. Третий путь объединяет рынок и социальную справедливость.»",
      "fr": "« L'éducation, l'éducation, l'éducation. Allier le dynamisme du marché à la justice sociale. »",
      "es": "«Lo que importa es lo que funciona: modernizamos los servicios públicos con innovación, inversión privada y justicia social.»",
      "de": "„Was zählt, ist, was funktioniert: Moderne öffentliche Dienste brauchen Investition und Effizienz.“"
    },
    "whyVote": {
      "pl": "Oddałbyś na niego głos za historyczny pokój w Irlandii Północnej (Good Friday Agreement), wprowadzenie pierwszej w historii brytyjskiej płacy minimalnej i gigantyczne dofinansowanie NHS i szkół.",
      "en": "You would vote for him for ending decades of bloodshed in Northern Ireland with the Good Friday Agreement, introducing the UK's first National Minimum Wage, and record funding for the NHS.",
      "ru": "Вы бы проголосовали за него за прекращение многолетнего конфликта в Северной Ирландии (Соглашение Страстной пятницы), введение МРОТ в Великобритании и рекордные инвестиции в медицину.",
      "fr": "Vous voteriez pour lui pour l'accord de paix historique du Vendredi saint en Irlande du Nord, la création du salaire minimum légal et les investissements records dans le système de santé NHS.",
      "es": "Respaldas la Tercera Vía: inversión masiva en escuelas y hospitales, modernización constitucional, el histórico acuerdo de paz en Irlanda del Norte y alianzas globales dinámicas.",
      "de": "Du unterstützt New Labour: Rekordinvestitionen in Bildung und NHS, das Karfreitagsabkommen für Frieden in Nordirland und pro-europäischen Pragmatismus."
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
      "fr": "Italie",
      "es": "Italia",
      "de": "Italien"
    },
    "role": {
      "pl": "Premier Włoch (1994–1995, 2001–2006, 2008–2011), magnat medialny, lider partii Forza Italia",
      "en": "Prime Minister of Italy (1994–1995, 2001–2006, 2008–2011), media tycoon, leader of Forza Italia",
      "ru": "Премьер-министр Италии (1994–1995, 2001–2006, 2008–2011), медиамагнат, лидер партии «Вперёд, Италия»",
      "fr": "Président du Conseil italien (1994–1995, 2001–2006, 2008–2011), magnat des médias, chef de Forza Italia",
      "es": "Cuatro veces Primer Ministro de Italia, magnate de los medios y fundador de Forza Italia",
      "de": "Viermaliger Ministerpräsident Italiens, Medienunternehmer und Gründer von Forza Italia"
    },
    "quote": {
      "pl": "„Zawsze wygrywałem w życiu i biznesie, bo wierzę w siłę wolności i przedsiębiorczości.”",
      "en": "“Freedom is the breath of the soul. Entrepreneurship is the motor of civilization.”",
      "ru": "«Я всегда побеждал в жизни и бизнесе, потому что верю в силу предпринимательской свободы.»",
      "fr": "« J'ai toujours triomphé dans les affaires et en politique grâce à la foi en la liberté d'entreprendre. »",
      "es": "«Menos impuestos para todos, libertad de empresa y optimismo frente a la burocracia de los jueces y burócratas.»",
      "de": "„Weniger Steuern für alle, unternehmerische Freiheit und Tatkraft statt bürokratischer Fesseln.“"
    },
    "whyVote": {
      "pl": "Oddałbyś na niego głos za obniżanie podatków dochodowych, walkę z biurokracją państwową, obronę wolności prywatnej własności i powstrzymanie dojścia do władzy postkomunistycznej lewicy.",
      "en": "You would vote for him for corporate tax cuts, cutting administrative burdens on small businesses, defending private commercial enterprise, and charismatic center-right coalition politics.",
      "ru": "Вы бы проголосовали за него за снижение налогов, дерегуляцию частного бизнеса, борьбу с неповоротливой государственной машиной и недопущение к власти левых партий.",
      "fr": "Vous voteriez pour lui pour ses allègements fiscaux sur les entreprises, la défense du secteur privé contre l'étatisme, et la constitution d'un grand pôle libéral et conservateur.",
      "es": "Crees en el dinamismo empresarial privado, el carisma popular, la reducción del peso del Estado sobre los contribuyentes y la política exterior comunicativa.",
      "de": "Du bevorzugst unternehmerischen Freigeist, spürbare Steuersenkungen, Populismus gegen verkrustete Parteien und mediale Schlagkraft."
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
      "fr": "États-Unis",
      "es": "Estados Unidos",
      "de": "Vereinigte Staaten"
    },
    "role": {
      "pl": "Kongresmenka USA z Nowego Jorku, liderka frakcji „The Squad” i Demokratycznych Socjalistów",
      "en": "US Congresswoman (NY-14), leader of 'The Squad' and the Democratic Socialists of America",
      "ru": "Член Палаты представителей США от Нью-Йорка, лидер левого прогрессивного крыла («The Squad»)",
      "fr": "Représentante des États-Unis (New York), figure de proue de la gauche socialiste démocrate",
      "es": "Congresista de EE. UU., líder de la izquierda progresista del Partido Demócrata",
      "de": "US-Kongressabgeordnete, Führungsfigur der progressiven Bewegung der Demokraten"
    },
    "quote": {
      "pl": "„W zamożnym społeczeństwie nikt nie powinien być zbyt biedny, by żyć w godności i zdrowiu.”",
      "en": "“In a wealthy nation, no person should be too poor to live with dignity, healthcare, and a home.”",
      "ru": "«В богатой стране ни один человек не должен быть слишком беден, чтобы жить достойно.»",
      "fr": "« Dans une nation riche, personne ne devrait être trop pauvre pour vivre décemment et se soigner. »",
      "es": "«La justicia climática, la vivienda digna y la sanidad pública para todos son imperativos éticos incuestionables.»",
      "de": "„Klimagerechtigkeit, bezahlbarer Wohnraum und Gesundheitsversorgung für alle sind moralische Pflichten.“"
    },
    "whyVote": {
      "pl": "Oddałbyś na nią głos za sztandarowy projekt Green New Deal (zielona transformacja z gwarancją pracy), walkę o bezpłatne studia publiczne, opodatkowanie miliarderów i powszechną opiekę medyczną (Medicare for All).",
      "en": "You would vote for her for authoring the Green New Deal resolution, fighting for Medicare for All, tuition-free higher education, raising top tax rates on extreme wealth, and workers' rights.",
      "ru": "Вы бы проголосовали за неё за резолюцию «Нового зеленого курса», всеобщее здравоохранение Medicare for All, бесплатное высшее образование и налог на сверхбогатых миллиардеров.",
      "fr": "Vous voteriez pour elle pour son projet pionnier du Green New Deal créateur d'emplois verts, l'assurance santé universelle (Medicare for All) et la taxation des supermilliardaires.",
      "es": "Respaldas el Green New Deal integral, impuestos marginales elevados al 70% a las megainversiones, la cancelación de deudas estudiantiles y la justicia racial y de género.",
      "de": "Du forderst einen konsequenten Green New Deal, Spitzensteuersätze bis zu 70%, Erlass von Studienkrediten und den Abbau struktureller Ungleichheit."
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
      "fr": "France",
      "es": "Francia",
      "de": "Frankreich"
    },
    "role": {
      "pl": "Liderka Zjednoczenia Narodowego (Rassemblement National), kandydatka prezydencka",
      "en": "Leader of the National Rally (Rassemblement National), multi-time presidential contender",
      "ru": "Лидер партии «Национальное объединение» (Rassemblement National), кандидат в президенты",
      "fr": "Dirigeante du Rassemblement National, députée et finaliste des élections présidentielles",
      "es": "Líder de Agrupación Nacional (Rassemblement National), referente del patriotismo popular",
      "de": "Führungsfigur des Rassemblement National, Stimme des französischen Nationalpopulismus"
    },
    "quote": {
      "pl": "„Francja dla Francuzów. Naród jest jedyną prawdziwą ochroną przed dziką globalizacją.”",
      "en": "“The nation is the only protective framework for citizens against runaway globalization.”",
      "ru": "«Нация — единственная надежная защита граждан от дикой глобализации и открытых границ.»",
      "fr": "« La nation est le seul cadre protecteur du peuple face à la mondialisation sauvage. »",
      "es": "«Francia debe pertenecer a los franceses: defendamos nuestra soberanía, nuestras fronteras y nuestra seguridad frente al globalismo.»",
      "de": "„Frankreich den Franzosen: Wir verteidigen unsere Souveränität, Grenzen und Sicherheit gegen den Globalismus.“"
    },
    "whyVote": {
      "pl": "Oddałbyś na nią głos za zasadę pierwszeństwa narodowego w pracy i zasiłkach, bezwzględne powstrzymanie masowej imigracji, obniżenie VAT na prąd i paliwa oraz odzyskanie suwerenności z rąk Brukseli.",
      "en": "You would vote for her for national priority in employment and social housing, curbing mass immigration, lowering energy VAT for households, and reasserting French sovereign independence.",
      "ru": "Вы бы проголосовали за неё за национальный приоритет для граждан Франции, жесткий запрет массовой миграции, снижение цен на энергоносители и возврат суверенитета от ЕС.",
      "fr": "Vous voteriez pour elle pour la priorité nationale pour le logement et l'emploi, le coup d'arrêt à l'immigration massive, la baisse de la TVA sur l'énergie et la souveraineté républicaine.",
      "es": "Respaldas la prioridad nacional en ayudas y empleo, el freno drástico a la inmigración masiva, la defensa del poder adquisitivo popular y el proteccionismo estratégico.",
      "de": "Du befürwortest Vorrang für Einheimische bei Sozialleistungen, strikten Zuwanderungsstopp, Stärkung der Kaufkraft der Arbeiter und nationalen Binnenmarktschutz."
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
  },
  {
    "id": "napoleon_bonaparte",
    "name": "Napoleon Bonaparte",
    "country": {
      "pl": "Francja (Cesarstwo Francuskie)",
      "en": "France (French Empire)",
      "es": "Francia (Imperio Francés)",
      "de": "Frankreich (Französisches Kaiserreich)",
      "ru": "Франция (Французская империя)",
      "fr": "France (Empire Français)"
    },
    "countryCode": "fr",
    "role": {
      "pl": "Cesarz Francuzów, reformator państwa i prawa",
      "en": "Emperor of the French, state & legal modernizer",
      "es": "Emperador de los franceses, modernizador del Estado y del derecho",
      "de": "Kaiser der Franzosen, Staats- und Rechtsreformer",
      "ru": "Император французов, реформатор государства и права",
      "fr": "Empereur des Français, modernisateur de l'État et du droit"
    },
    "quote": {
      "pl": "„Niemożliwe to słowo, które znajduje się tylko w słowniku głupców.”",
      "en": "\"Impossible is a word to be found only in the dictionary of fools.\"",
      "es": "«Imposible es una palabra que solo se encuentra en el diccionario de los necios.»",
      "de": "„Unmöglich ist ein Wort, das nur im Wörterbuch von Narren steht.“",
      "ru": "«Невозможно — это слово из словаря глупцов».",
      "fr": "« Impossible n'est pas français ; c'est un mot que l'on ne trouve que dans le dictionnaire des fous. »"
    },
    "whyVote": {
      "pl": "Cenisz silne przywództwo wykonawcze, epokową modernizację państwa, kodyfikację prawa cywilnego, meritokrację i wielką wizję imperialną ponad partyjnym chaosem.",
      "en": "You value decisive executive leadership, monumental state modernization, meritocracy, civil law codification, and grandeur over factional parliamentary chaos.",
      "es": "Valoras el liderazgo ejecutivo enérgico, la modernización monumental del Estado, la meritocracia, la codificación del derecho civil y una gran visión patriótica.",
      "de": "Du schätzt entschlossene Führung, historische Staatsmodernisierung, das Leistungsprinzip, die Kodifizierung des Zivilrechts und imperiale Größe über Parteiengezänk.",
      "ru": "Вы цените решительное государственное лидерство, масштабную модернизацию институтов, меритократию, Гражданский кодекс и великое имперское величие.",
      "fr": "Vous appréciez le leadership d'État résolu, la modernisation juridique par le Code civil, la méritocratie et une grande vision nationale unificatrice."
    },
    "coordinates": {
      "econ": 15,
      "soc": -80
    },
    "color": "#1e3a8a",
    "gradient": "linear-gradient(135deg, #1e3a8a, #172554)",
    "localPhoto": "assets/politicians/napoleon_bonaparte.jpg",
    "photoUrl": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/Jacques-Louis_David_-_The_Emperor_Napoleon_in_His_Study_at_the_Tuileries_-_Google_Art_Project.jpg/330px-Jacques-Louis_David_-_The_Emperor_Napoleon_in_His_Study_at_the_Tuileries_-_Google_Art_Project.jpg"
  },
  {
    "id": "otto_von_habsburg",
    "name": "Otto von Habsburg",
    "country": {
      "pl": "Austria / Europa Środkowa",
      "en": "Austria / Central Europe",
      "es": "Austria / Europa Central",
      "de": "Österreich / Mitteleuropa",
      "ru": "Австрия / Центральная Европа",
      "fr": "Autriche / Europe Centrale"
    },
    "countryCode": "at",
    "role": {
      "pl": "Arcyksiążę, przewodniczący Międzynarodowej Unii Paneuropejskiej",
      "en": "Archduke, President of the International Paneuropean Union",
      "es": "Archiduque, presidente de la Unión Paneuropea Internacional",
      "de": "Erzherzog, Präsident der Internationalen Paneuropa-Union",
      "ru": "Эрцгерцог, президент Международного Панъевропейского союза",
      "fr": "Archiduc, président de l'Union Paneuropéenne Internationale"
    },
    "quote": {
      "pl": "„Europa albo będzie zjednoczona i oparta na wartościach chrześcijańskich, albo wcale jej nie będzie.”",
      "en": "\"Europe will either be united and grounded in its spiritual heritage, or it will cease to exist.\"",
      "es": "«Europa o estará unida sobre sus valores espirituales y culturales, o dejará de existir.»",
      "de": "„Europa wird entweder geeint und auf seinen geistigen Werten gegründet sein, oder es wird vergehen.“",
      "ru": "«Европа либо будет единой на основе своих духовных ценностей, либо перестанет существовать».",
      "fr": "« L'Europe sera unie sur ses racines et ses libertés fondamentales, ou elle cessera d'exister. »"
    },
    "whyVote": {
      "pl": "Popierasz ideę zjednoczonej, chrześcijańsko-demokratycznej Europy narodów, tradycję monarchiczną, rządy prawa, wolny rynek i bezkompromisowy opór wobec totalitaryzmów.",
      "en": "You support a united, Christian-democratic Europe of nations, constitutional tradition, social market economics, and principled resistance against totalitarianism.",
      "es": "Apoyas una Europa unida y democrática de naciones soberanas, la tradición humanista, la economía social de mercado y el rechazo firme a los totalitarismos.",
      "de": "Du befürwortest ein geeintes, christdemokratisches Europa freier Völker, historische Verfassungstradition, soziale Marktwirtschaft und klaren Antitotalitarismus.",
      "ru": "Вы поддерживаете идею единой европейской цивилизации, конституционную традицию, социальную рыночную экономику и стойкое противостояние тираниям.",
      "fr": "Vous défendez une Europe unie des nations libres, la tradition constitutionnelle, l'économie sociale de marché et la résistance constante aux totalitarismes."
    },
    "coordinates": {
      "econ": 30,
      "soc": -20
    },
    "color": "#854d0e",
    "gradient": "linear-gradient(135deg, #854d0e, #713f12)",
    "localPhoto": "assets/politicians/otto_von_habsburg.jpg",
    "photoUrl": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b3/Otto_von_Habsburg%2C_MEP_%281912%E2%80%932011%29.jpg/330px-Otto_von_Habsburg%2C_MEP_%281912%E2%80%932011%29.jpg"
  },
  {
    "id": "francisco_franco",
    "name": "Francisco Franco",
    "country": {
      "pl": "Hiszpania",
      "en": "Spain",
      "es": "España",
      "de": "Spanien",
      "ru": "Испания",
      "fr": "Espagne"
    },
    "countryCode": "es",
    "role": {
      "pl": "Generalissimus, Caudillo Hiszpanii (1939–1975)",
      "en": "Generalissimo, Caudillo of Spain (1939–1975)",
      "es": "Generalísimo, Caudillo de España (1939–1975)",
      "de": "Generalissimus, Caudillo von Spanien (1939–1975)",
      "ru": "Генералиссимус, каудильо Испании (1939–1975)",
      "fr": "Généralissime, Caudillo d'Espagne (1939–1975)"
    },
    "quote": {
      "pl": "„Nasze rządy opierają się na porządku, wierze ojców i bezwzględnej walce z komunizmem.”",
      "en": "\"Our duty is to maintain order, defend Christian civilization, and crush subversion.\"",
      "es": "«Nuestro deber es mantener el orden, defender la fe tradicional y aplastar la subversión comunista.»",
      "de": "„Unsere Pflicht ist es, Ordnung zu wahren, die christliche Kultur zu schützen und Zersetzung abzuwehren.“",
      "ru": "«Наша миссия — железный порядок, традиционная вера и бескомпромиссная борьба с коммунизмом».",
      "fr": "« Notre devoir est de maintenir l'ordre, de défendre la foi traditionnelle et de barrer la route au communisme. »"
    },
    "whyVote": {
      "pl": "Popierasz bezkompromisowy antykomunizm, żelazny porządek publiczny, tradycjonalizm katolicki, silną władzę wykonawczą i późniejszą modernizację gospodarczą technokratów.",
      "en": "You favor hardline anti-communism, strict law and order, Catholic traditionalism, strongman authority, and technocratic economic development.",
      "es": "Favoreces el anticomunismo radical, el orden público estricto, el tradicionalismo católico, la autoridad indiscutible y el posterior despegue económico de los tecnócratas.",
      "de": "Du befürwortest strikten Antikommunismus, eiserne öffentliche Ordnung, katholischen Konservatismus, starke Autorität und technokratischen Wirtschaftsaufschwung.",
      "ru": "Вы сторонник жесткого антикоммунизма, строгой дисциплины, традиционных религиозных устоев и сильной авторитарной вертикали власти.",
      "fr": "Vous privilégiez l'anticommunisme intransigeant, l'ordre public strict, le traditionalisme catholique et une autorité gouvernementale indiscutée."
    },
    "coordinates": {
      "econ": 25,
      "soc": -92
    },
    "color": "#9a3412",
    "gradient": "linear-gradient(135deg, #9a3412, #7c2d12)",
    "localPhoto": "assets/politicians/francisco_franco.jpg",
    "photoUrl": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/Francisco_Franco_posed_portrait_photograph.jpg/330px-Francisco_Franco_posed_portrait_photograph.jpg"
  },
  {
    "id": "josip_broz_tito",
    "name": "Josip Broz Tito",
    "country": {
      "pl": "Jugosławia",
      "en": "Yugoslavia",
      "es": "Yugoslavia",
      "de": "Jugoslawien",
      "ru": "Югославия",
      "fr": "Yougoslavie"
    },
    "countryCode": "yu",
    "role": {
      "pl": "Marszałek Jugosławii, przywódca Ruchu Państw Niezaangażowanych",
      "en": "Marshal of Yugoslavia, leader of the Non-Aligned Movement",
      "es": "Mariscal de Yugoslavia, líder del Movimiento de Países No Alineados",
      "de": "Marschall von Jugoslawien, Führer der Bewegung der Blockfreien",
      "ru": "Маршал Югославии, лидер Движения неприсоединения",
      "fr": "Maréchal de Yougoslavie, dirigeant du Mouvement des non-alignés"
    },
    "quote": {
      "pl": "„Bractwo i jedność to fundamenty naszego socjalistycznego samorządu.”",
      "en": "\"Brotherhood and unity are the bedrock of our independent socialist path.\"",
      "es": "«Hermandad y unidad son los cimientos de nuestro camino socialista independiente y autogestionario.»",
      "de": "„Brüderlichkeit und Einheit sind das Fundament unseres unabhängigen sozialistischen Selbstverwaltungsweges.“",
      "ru": "«Братство и единство — основа нашего независимого пути социалистического самоуправления».",
      "fr": "« Fraternité et unité sont le fondement de notre voie socialiste autogestionnaire et indépendante. »"
    },
    "whyVote": {
      "pl": "Wybierasz socjalizm samorządowy z rynkowymi elementami, niezależność od Moskwy i Waszyngtonu, dyplomację Trzeciego Świata oraz zdolność jednoczenia wieloetnicznego państwa.",
      "en": "You favor worker self-management market socialism, strategic non-alignment between East and West, sovereign foreign policy, and multi-ethnic civic cohesion.",
      "es": "Prefieres el socialismo autogestionario con elementos de mercado, el no alineamiento geopolítico, la diplomacia soberana y la cohesión de un Estado multiétnico.",
      "de": "Du bevorzugst Arbeiterselbstverwaltung mit Marktbezug, strategische Blockfreiheit zwischen Ost und West, eigenständige Geopolitik und überethnische Einheit.",
      "ru": "Вы выбираете модель социалистического самоуправления, балансирование между Западом и Востоком и независимую внешнюю политику неприсоединения.",
      "fr": "Vous soutenez le socialisme autogestionnaire décentralisé, le non-alignement géopolitique stratégique et la cohésion d'un État multiethnique souverain."
    },
    "coordinates": {
      "econ": -65,
      "soc": -55
    },
    "color": "#047857",
    "gradient": "linear-gradient(135deg, #047857, #065f46)",
    "localPhoto": "assets/politicians/josip_broz_tito.jpg",
    "photoUrl": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/13/Josip_Broz_Tito_uniform_portrait.jpg/330px-Josip_Broz_Tito_uniform_portrait.jpg"
  },
  {
    "id": "golda_meir",
    "name": "Golda Meir",
    "country": {
      "pl": "Izrael",
      "en": "Israel",
      "es": "Israel",
      "de": "Israel",
      "ru": "Израиль",
      "fr": "Israël"
    },
    "countryCode": "il",
    "role": {
      "pl": "Premier Izraela (1969–1974), działaczka socjaldemokratyczna",
      "en": "Prime Minister of Israel (1969–1974), Labor Zionist statesman",
      "es": "Primera Ministra de Israel (1969–1974), líder laborista",
      "de": "Ministerpräsidentin von Israel (1969–1974), sozialdemokratische Staatsfrau",
      "ru": "Премьер-министр Израиля (1969–1974), лидер лейбористского сионизма",
      "fr": "Première ministre d'Israël (1969–1974), dirigeante travailliste"
    },
    "quote": {
      "pl": "„Pokój nadejdzie wtedy, gdy nasi wrogowie pokochają swoje dzieci bardziej niż nienawidzą nas.”",
      "en": "\"Peace will come when the Arabs love their children more than they hate us.\"",
      "es": "«La paz llegará cuando nuestros adversarios amen a sus hijos más de lo que nos odian a nosotros.»",
      "de": "„Frieden wird einkehren, wenn unsere Feinde ihre Kinder mehr lieben als sie uns hassen.“",
      "ru": "«Мир наступит тогда, когда наши враги будут любить своих детей сильнее, чем ненавидеть нас».",
      "fr": "« La paix viendra lorsque nos voisins aimeront leurs enfants plus qu'ils ne nous haïssent. »"
    },
    "whyVote": {
      "pl": "Łączysz socjaldemokratyczną troskę o usługi publiczne i kibuce z twardą, pragmatyczną polityką obrony narodowej i bezwzględną obroną suwerenności.",
      "en": "You combine Labor Zionism, welfare state building, and cooperative kibbutzim with resolute national defense, deterrence, and sovereign tenacity.",
      "es": "Combinas políticas de bienestar social, cooperativismo comunitario y sanidad pública con una firme determinación militar en seguridad y supervivencia nacional.",
      "de": "Du verbindest sozialdemokratischen Wohlfahrtsausbau und Genossenschaftswesen mit unerschütterlicher Entschlossenheit in der Landesverteidigung.",
      "ru": "Вы сочетаете социал-демократическое развитие, поддержку труда и общин с бескомпромиссной решимостью в вопросах национальной безопасности.",
      "fr": "Vous associez le modèle travailliste de justice sociale et de solidarité coopérative à une intransigeance absolue pour la sécurité nationale."
    },
    "coordinates": {
      "econ": -45,
      "soc": -25
    },
    "color": "#0e7490",
    "gradient": "linear-gradient(135deg, #0e7490, #155e75)",
    "localPhoto": "assets/politicians/golda_meir.jpg",
    "photoUrl": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Golda_Meir_%281964%29_cropped.jpg/330px-Golda_Meir_%281964%29_cropped.jpg"
  },
  {
    "id": "hugo_chavez",
    "name": "Hugo Chávez",
    "country": {
      "pl": "Wenezuela",
      "en": "Venezuela",
      "es": "Venezuela",
      "de": "Venezuela",
      "ru": "Венесуэла",
      "fr": "Venezuela"
    },
    "countryCode": "ve",
    "role": {
      "pl": "Prezydent Wenezueli (1999–2013), twórca Socjalizmu XXI wieku",
      "en": "President of Venezuela (1999–2013), founder of 21st Century Socialism",
      "es": "Presidente de Venezuela (1999–2013), líder de la Revolución Bolivariana",
      "de": "Präsident von Venezuela (1999–2013), Begründer des Sozialismus des 21. Jahrhunderts",
      "ru": "Президент Венесуэлы (1999–2013), основатель боливарианского социализма XXI века",
      "fr": "Président du Venezuela (1999–2013), fondateur du socialisme du XXIe siècle"
    },
    "quote": {
      "pl": "„Kapitalizm to droga do piekła. Jedynym ratunkiem dla ludzkości jest socjalizm bolowariański.”",
      "en": "\"Capitalism is the road to hell. The only way to save humanity is through socialism.\"",
      "es": "«El capitalismo es el camino al infierno; la única vía para salvar a la humanidad es el socialismo bolivariano.»",
      "de": "„Der Kapitalismus führt in die Hölle. Der einzige Weg zur Rettung der Menschheit ist der Sozialismus.“",
      "ru": "«Капитализм ведет человечество в ад; единственный путь к справедливости — боливарианский социализм».",
      "fr": "« Le capitalisme mène à l'abîme ; la seule voie de salut pour les peuples est le socialisme bolivarien. »"
    },
    "whyVote": {
      "pl": "Wybierasz radykalną redystrybucję dochodów z ropy naftowej dla ubogich, państwowy protekcjonizm, antyimperializm i charyzmatyczny lewicowy populizm.",
      "en": "You favor oil revenue redistribution to marginalized communities, state control of strategic resources, anti-imperialism, and charismatic left-wing populism.",
      "es": "Defiendes la redistribución masiva de la renta petrolera para los sectores populares, la nacionalización de sectores clave y el antiimperialismo bolivariano.",
      "de": "Du befürwortest massive Verteilung von Rohstoffgewinnen an arme Bevölkerungsschichten, Verstaatlichungen, Antiimperialismus und linken Populismus.",
      "ru": "Вы поддерживаете масштабные социальные программы за счет нефтедоходов, национализацию стратегических ресурсов и антиимпериалистический курс.",
      "fr": "Vous soutenez la redistribution massive des rentes pétrolières vers les classes populaires, le contrôle public des ressources et l'anti-impérialisme."
    },
    "coordinates": {
      "econ": -80,
      "soc": -60
    },
    "color": "#881337",
    "gradient": "linear-gradient(135deg, #881337, #4c0519)",
    "localPhoto": "assets/politicians/hugo_chavez.jpg",
    "photoUrl": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/Hugo_Chavez_Portrait_%28cropped%29.jpg/330px-Hugo_Chavez_Portrait_%28cropped%29.jpg"
  },
  {
    "id": "sanna_marin",
    "name": "Sanna Marin",
    "country": {
      "pl": "Finlandia",
      "en": "Finland",
      "es": "Finlandia",
      "de": "Finnland",
      "ru": "Финляндия",
      "fr": "Finlande"
    },
    "countryCode": "fi",
    "role": {
      "pl": "Premier Finlandii (2019–2023), liderka socjaldemokracji",
      "en": "Prime Minister of Finland (2019–2023), progressive social democrat",
      "es": "Primera Ministra de Finlandia (2019–2023), líder socialdemócrata progresista",
      "de": "Ministerpräsidentin von Finnland (2019–2023), progressive Sozialdemokratin",
      "ru": "Премьер-министр Финляндии (2019–2023), социал-демократ",
      "fr": "Première ministre de Finlande (2019–2023), dirigeante sociale-démocrate"
    },
    "quote": {
      "pl": "„Silne państwo dobrobytu, równość szans i ambitna polityka klimatyczna to fundamenty nowoczesnej wolności.”",
      "en": "\"A strong welfare state, equality of opportunity, and ambitious climate action empower every citizen.\"",
      "es": "«Un Estado de bienestar sólido, la igualdad real de género y la acción climática empoderan a cada ciudadano.»",
      "de": "„Ein starker Wohlfahrtsstaat, echte Chancengleichheit und ambitionierter Klimaschutz sichern unsere Zukunft.“",
      "ru": "«Сильное социальное государство, гендерное равенство и защита климата — основа современного свободного общества».",
      "fr": "« Un État-providence solide, l'égalité des chances et la transition écologique ambitieuse garantissent la liberté de tous. »"
    },
    "whyVote": {
      "pl": "Cenisz nordycki model państwa dobrobytu, równość płci, nowoczesny progresywizm obyczajowy, neutralność klimatyczną i zarazem zdecydowaną postawę w NATO.",
      "en": "You support the Nordic welfare state, gender equality, progressive civil rights, carbon neutrality, alongside strong pro-Western defensive deterrence.",
      "es": "Valoras el modelo nórdico de bienestar público, la igualdad de género, las libertades civiles progresistas, la transición ecológica y una defensa democrática firme.",
      "de": "Du schätzt das nordische Sozialstaatsmodell, Gleichstellung, moderne Bürgerrechte, engagierte Klimapolitik und eine verlässliche westliche Sicherheitsarchitektur.",
      "ru": "Вам близки скандинавская модель благосостояния, социальное равенство, современные прогрессивные ценности и зеленая трансформация экономики.",
      "fr": "Vous appréciez le modèle social scandinave, la parité, les libertés progressistes, la transition verte et une défense démocratique claire."
    },
    "coordinates": {
      "econ": -55,
      "soc": 70
    },
    "color": "#0f766e",
    "gradient": "linear-gradient(135deg, #0f766e, #115e59)",
    "localPhoto": "assets/politicians/sanna_marin.jpg",
    "photoUrl": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e2/SannaMarin-byPhilipRomano.jpg/330px-SannaMarin-byPhilipRomano.jpg"
  },
  {
    "id": "recep_tayyip_erdogan",
    "name": "Recep Tayyip Erdoğan",
    "country": {
      "pl": "Turcja",
      "en": "Turkey",
      "es": "Turquía",
      "de": "Türkei",
      "ru": "Турция",
      "fr": "Turquie"
    },
    "countryCode": "tr",
    "role": {
      "pl": "Prezydent Turcji, lider Partii Sprawiedliwości i Rozwoju (AKP)",
      "en": "President of Turkey, leader of the Justice and Development Party (AKP)",
      "es": "Presidente de Turquía, líder del Partido de la Justicia y el Desarrollo (AKP)",
      "de": "Präsident der Türkei, Vorsitzender der Partei für Gerechtigkeit und Aufschwung (AKP)",
      "ru": "Президент Турции, лидер Партии справедливости и развития (AKP)",
      "fr": "Président de la Turquie, dirigeant du Parti de la justice et du développement (AKP)"
    },
    "quote": {
      "pl": "„Turcja nie ugnie się przed nikim; nasza siła tkwi w wierze, narodowej jedności i potędze państwa.”",
      "en": "\"Turkey bows to no one; our strength lies in faith, sovereign national will, and state power.\"",
      "es": "«Turquía no se inclina ante nadie; nuestra fuerza radica en la fe, la soberanía popular y el poder del Estado.»",
      "de": "„Die Türkei beugt sich niemandem; unsere Stärke ruht im Glauben, dem nationalen Willen und staatlicher Macht.“",
      "ru": "«Турция ни перед кем не склонит голову; наша сила — в вере, единстве нации и мощи государства».",
      "fr": "« La Turquie ne plie devant personne ; notre force réside dans la foi, la volonté nationale et la puissance de l'État. »"
    },
    "whyVote": {
      "pl": "Wybierasz islamski konserwatyzm, silną prezydencką władzę wykonawczą, wielkie projekty infrastrukturalne i asertywną, niezależną geopolitykę mocarstwową.",
      "en": "You favor conservative religious values, strong presidential governance, developmental infrastructure megaprojects, and an assertive multi-polar foreign policy.",
      "es": "Respaldas los valores tradicionales islámicos, el liderazgo presidencial fuerte, los megaproyectos de infraestructura y una geopolítica multipolar asertiva.",
      "de": "Du unterstützt islamisch-konservative Werte, eine starke Exekutive, großangelegte Infrastrukturprogramme und eine selbstbewusste regionale Machtpolitik.",
      "ru": "Вы поддерживаете консервативные ценности, сильную президентскую вертикаль, мегапроекты развития и независимую геополитическую субъектность.",
      "fr": "Vous soutenez les valeurs traditionnelles, un exécutif présidentiel puissant, de grands projets nationaux et une diplomatie d'affirmation régionale."
    },
    "coordinates": {
      "econ": 10,
      "soc": -85
    },
    "color": "#c2410c",
    "gradient": "linear-gradient(135deg, #c2410c, #9a3412)",
    "localPhoto": "assets/politicians/recep_tayyip_erdogan.jpg",
    "photoUrl": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Turkish_President_Recep_Tayyip_Erdo%C4%9Fan_in_January_2024_%28cropped%29.jpg/330px-Turkish_President_Recep_Tayyip_Erdo%C4%9Fan_in_January_2024_%28cropped%29.jpg"
  },
  {
    "id": "benjamin_netanyahu",
    "name": "Benjamin Netanyahu",
    "country": {
      "pl": "Izrael",
      "en": "Israel",
      "es": "Israel",
      "de": "Israel",
      "ru": "Израиль",
      "fr": "Israël"
    },
    "countryCode": "il",
    "role": {
      "pl": "Premier Izraela, lider prawicowej partii Likud",
      "en": "Prime Minister of Israel, leader of the right-wing Likud party",
      "es": "Primer Ministro de Israel, líder del partido conservador Likud",
      "de": "Ministerpräsident von Israel, Vorsitzender der rechtskonservativen Likud-Partei",
      "ru": "Премьер-министр Израиля, лидер правой партии «Ликуд»",
      "fr": "Premier ministre d'Israël, dirigeant du parti de droite Likoud"
    },
    "quote": {
      "pl": "„Silni przetrwają, ze słabymi nikt się nie liczy. Prawdziwy pokój zdobywa się wyłącznie siłą.”",
      "en": "\"The weak crumble, are slaughtered and are erased from history while the strong survive. Peace is achieved through strength.\"",
      "es": "«Los débiles sucumben; la paz auténtica solo se conquista y preserva a través de una fuerza militar inquebrantable.»",
      "de": "„Die Schwachen gehen unter, die Starken überleben. Echter Frieden wird allein durch militärische Stärke gesichert.“",
      "ru": "«Слабых уничтожают, со сильными считаются. Настоящий мир достигается исключительно военной силой».",
      "fr": "« Les faibles sont balayés de l'histoire ; la paix véritable ne s'obtient que par une puissance militaire incontestable. »"
    },
    "whyVote": {
      "pl": "Stawiasz na twardą, bezkompromisową politykę bezpieczeństwa narodowego, wolnorynkowy kapitalizm technologiczny, obronę tożsamości żydowskiej i twardą dyplomację.",
      "en": "You favor hawkish defense deterrence, free-market tech deregulation, national-sovereignty settlement policies, and unyielding resistance against security threats.",
      "es": "Respaldas una política de defensa implacable, el capitalismo desregulado de alta tecnología, la preservación de la identidad nacional y la disuasión militar.",
      "de": "Du befürwortest kompromisslose Sicherheits- und Abschreckungspolitik, marktliberale Hightech-Förderung und entschiedene Durchsetzung nationaler Interessen.",
      "ru": "Вы выбираете жесткую политику национальной безопасности, рыночную технологическую экономику и решительное отстаивание суверенитета.",
      "fr": "Vous privilégiez la dissuasion sécuritaire sans concession, le capitalisme libéral de haute technologie et la défense ferme de la souveraineté nationale."
    },
    "coordinates": {
      "econ": 65,
      "soc": -75
    },
    "color": "#075985",
    "gradient": "linear-gradient(135deg, #075985, #0c4a6e)",
    "localPhoto": "assets/politicians/benjamin_netanyahu.jpg",
    "photoUrl": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/74/Benjamin_Netanyahu%2C_February_2023.jpg/330px-Benjamin_Netanyahu%2C_February_2023.jpg"
  },
  {
    "id": "nicolas_maduro",
    "name": "Nicolás Maduro",
    "country": {
      "pl": "Wenezuela",
      "en": "Venezuela",
      "es": "Venezuela",
      "de": "Venezuela",
      "ru": "Венесуэла",
      "fr": "Venezuela"
    },
    "countryCode": "ve",
    "role": {
      "pl": "Prezydent Wenezueli, kontynuator chavizmu i lider PSUV",
      "en": "President of Venezuela, Chavista leader and head of PSUV",
      "es": "Presidente de Venezuela, líder de la Revolución Bolivariana y del PSUV",
      "de": "Präsident von Venezuela, Vorsitzender der PSUV und Fortführer des Chavismus",
      "ru": "Президент Венесуэлы, лидер боливарианского движения и PSUV",
      "fr": "Président du Venezuela, continuateur du chavisme et dirigeant du PSUV"
    },
    "quote": {
      "pl": "„Imperializm nie złamie woli narodu wenezuelskiego ani naszej rewolucji socjalistycznej.”",
      "en": "\"Imperialism will never bend the sovereign will of the Venezuelan people or our revolution.\"",
      "es": "«El imperialismo jamás doblegará la dignidad y soberanía del pueblo venezolano ni nuestra revolución.»",
      "de": "„Der Imperialismus wird den souveränen Willen unseres Volkes und unserer Revolution niemals brechen.“",
      "ru": "«Империализм никогда не сломит суверенную волю венесуэльского народа и нашу революцию».",
      "fr": "« L'impérialisme ne brisera jamais la volonté souveraine du peuple vénézuélien ni notre révolution. »"
    },
    "whyVote": {
      "pl": "Wybierasz twardą lewicową władzę państwową, państwowy monopol surowcowy, nieugięty opór wobec sankcji USA i sojusze z blokiem antyzachodnim.",
      "en": "You support hardline state socialism, public control of strategic oil reserves, resistance against Western sanctions, and geopolitical alignment with multipolar powers.",
      "es": "Apoyas el socialismo de Estado, el control gubernamental de los hidrocarburos, la resistencia frontal a las sanciones occidentales y la alianza con potencias multipolares.",
      "de": "Du unterstützt strikten Staatssozialismus, staatliche Kontrolle strategischer Erdölressourcen und Widerstand gegen westliche Einflussnahme.",
      "ru": "Вы сторонник жесткого государственного социализма, контроля над нефтяными ресурсами, антисанкционной политики и союза с многополярным блоком.",
      "fr": "Vous soutenez le socialisme d'État ferme, la maîtrise publique des ressources stratégiques et la résistance affirmée aux pressions extérieures."
    },
    "coordinates": {
      "econ": -85,
      "soc": -80
    },
    "color": "#a16207",
    "gradient": "linear-gradient(135deg, #a16207, #713f12)",
    "localPhoto": "assets/politicians/nicolas_maduro.jpg",
    "photoUrl": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7f/Nicol%C3%A1s_Maduro_2023_%28cropped2%29.jpg/330px-Nicol%C3%A1s_Maduro_2023_%28cropped2%29.jpg"
  },
  {
    "id": "shinzo_abe",
    "name": "Shinzo Abe",
    "country": {
      "pl": "Japonia",
      "en": "Japan",
      "es": "Japón",
      "de": "Japan",
      "ru": "Япония",
      "fr": "Japon"
    },
    "countryCode": "jp",
    "role": {
      "pl": "Najdłużej urzędujący Premier Japonii, lider Partii Liberalno-Demokratycznej",
      "en": "Longest-serving Prime Minister of Japan, leader of the LDP",
      "es": "Primer Ministro de Japón con más tiempo en el cargo, líder del PLD",
      "de": "Längstdienender Premierminister Japans, Vorsitzender der LDP",
      "ru": "Премьер-министр Японии с самым долгим сроком правления, лидер ЛДП",
      "fr": "Premier ministre du Japon au plus long mandat, dirigeant du PLD"
    },
    "quote": {
      "pl": "„Japonia musi być krajem silnym, dumnym ze swojej historii i zdolnym do obrony własnego bezpieczeństwa.”",
      "en": "\"Japan must be a strong nation, proud of its heritage and prepared to defend its sovereignty.\"",
      "es": "«Japón debe ser una nación fuerte, orgullosa de su historia y plenamente capaz de defender su seguridad.»",
      "de": "„Japan muss ein starkes Land sein, stolz auf seine Geschichte und fähig zur eigenen Verteidigung.“",
      "ru": "«Япония должна быть сильной страной, гордящейся своей историей и готовой защищать свой суверенитет».",
      "fr": "« Le Japon doit être une nation forte, fière de son histoire et pleinement capable d'assurer sa défense. »"
    },
    "whyVote": {
      "pl": "Cenisz Abenomics (luzowanie monetarne, elastyczność fiskalną i reformy rynkowe), wzmacnianie sił samoobrony oraz dumę z narodowej tradycji Japonii.",
      "en": "You support Abenomics monetary and corporate reforms, constitutional defense modernization, strengthening security alliances in the Indo-Pacific, and cultural patriotism.",
      "es": "Valoras la política económica de las 'Abenomics', la modernización de las fuerzas de defensa, la alianza estratégica en el Indo-Pacífico y el patriotismo cívico.",
      "de": "Du befürwortest Abenomics-Wirtschaftsreformen, die Stärkung der Verteidigungskräfte, sicherheitspolitische Partnerschaften und bewusste nationale Tradition.",
      "ru": "Вам близки экономические реформы «абэномики», модернизация оборонного потенциала, тихоокеанские альянсы и уважение к национальной истории.",
      "fr": "Vous appréciez les réformes économiques des Abenomics, le renforcement des capacités de défense et l'affirmation de la souveraineté stratégique."
    },
    "coordinates": {
      "econ": 50,
      "soc": -50
    },
    "color": "#3730a3",
    "gradient": "linear-gradient(135deg, #3730a3, #312e81)",
    "localPhoto": "assets/politicians/shinzo_abe.jpg",
    "photoUrl": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0e/Shinz%C5%8D_Abe_20120501.jpg/330px-Shinz%C5%8D_Abe_20120501.jpg"
  },
  {
    "id": "park_geun_hye",
    "name": "Park Geun-hye",
    "country": {
      "pl": "Korea Południowa",
      "en": "South Korea",
      "es": "Corea del Sur",
      "de": "Südkorea",
      "ru": "Южная Корея",
      "fr": "Corée du Sud"
    },
    "countryCode": "kr",
    "role": {
      "pl": "Prezydent Korei Południowej (2013–2017), liderka konserwatystów",
      "en": "President of South Korea (2013–2017), conservative political leader",
      "es": "Presidenta de Corea del Sur (2013–2017), líder conservadora",
      "de": "Präsidentin von Südkorea (2013–2017), konservative Staatschefin",
      "ru": "Президент Южной Кореи (2013–2017), лидер консерваторов",
      "fr": "Présidente de la Corée du Sud (2013–2017), dirigeante conservatrice"
    },
    "quote": {
      "pl": "„Zaufanie i zasady to fundamenty narodu; wobec prowokacji z Północy nie może być żadnych kompromisów.”",
      "en": "\"Trust and principled deterrence are our anchors; there can be no concession to communist aggression.\"",
      "es": "«La confianza cívica y la firmeza son esenciales; no puede haber concesiones ante las amenazas del régimen del norte.»",
      "de": "„Verlässlichkeit und Prinzipientreue sind unverzichtbar; gegenüber Provokationen darf es keine Nachgiebigkeit geben.“",
      "ru": "«Доверие и принципиальность — основа нации; перед лицом северной угрозы уступки недопустимы».",
      "fr": "« La fermeté et les principes guident la nation ; il ne saurait y avoir de concession face aux provocations autoritaires. »"
    },
    "whyVote": {
      "pl": "Stawiasz na twardą politykę obronną wobec Korei Północnej, pro-biznesową gospodarkę opartą na innowacjach technologicznych i tradycyjny konserwatyzm społeczny.",
      "en": "You favor firm military deterrence against North Korea, high-tech export competitiveness, alliance with Western democracies, and social conservatism.",
      "es": "Respaldas la disuasión militar estricta frente al régimen de Pionyang, el impulso al tejido tecnológico exportador y los valores conservadores.",
      "de": "Du befürwortest harte militärische Abschreckung gegen Nordkorea, exportorientierte Hightech-Förderung und gesellschaftlichen Konservatismus.",
      "ru": "Вы сторонник решительного сдерживания внешней угрозы, поддержки технологического экспорта и традиционного корейского консерватизма.",
      "fr": "Vous privilégiez la dissuasion face aux menaces extérieures, l'économie technologique pro-entreprises et le conservatisme sociétal."
    },
    "coordinates": {
      "econ": 55,
      "soc": -60
    },
    "color": "#6d28d9",
    "gradient": "linear-gradient(135deg, #6d28d9, #5b21b6)",
    "localPhoto": "assets/politicians/park_geun_hye.jpg",
    "photoUrl": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/52/Park_Geun-hye_presidential_portrait.png/330px-Park_Geun-hye_presidential_portrait.png"
  },
  {
    "id": "sebastian_kurz",
    "name": "Sebastian Kurz",
    "country": {
      "pl": "Austria",
      "en": "Austria",
      "es": "Austria",
      "de": "Österreich",
      "ru": "Австрия",
      "fr": "Autriche"
    },
    "countryCode": "at",
    "role": {
      "pl": "Kanclerz Austrii (2017–2019, 2020–2021), lider Nowej ÖVP",
      "en": "Chancellor of Austria (2017–2019, 2020–2021), leader of the New People's Party (ÖVP)",
      "es": "Canciller de Austria (2017–2019, 2020–2021), líder del Partido Popular (ÖVP)",
      "de": "Bundeskanzler von Österreich (2017–2019, 2020–2021), Bundesparteiobmann der Neuen ÖVP",
      "ru": "Канцлер Австрии (2017–2019, 2020–2021), лидер Австрийской народной партии (ÖVP)",
      "fr": "Chancelier d'Autriche (2017–2019, 2020–2021), dirigeant du Parti populaire (ÖVP)"
    },
    "quote": {
      "pl": "„Musimy powstrzymać nielegalną migrację i chronić europejskie granice zewnętrzne, by zachować nasz styl życia.”",
      "en": "\"We must halt illegal migration, secure external borders, and promote competitiveness to protect our way of life.\"",
      "es": "«Debemos frenar la inmigración irregular y proteger las fronteras exteriores para salvaguardar nuestro modo de vida y bienestar.»",
      "de": "„Wir müssen die illegale Migration stoppen, die Außengrenzen schützen und unsere Wirtschaft wettbewerbsfähig halten.“",
      "ru": "«Мы должны остановить нелегальную миграцию и защитить внешние границы, чтобы сохранить наш уровень жизни и безопасность».",
      "fr": "« Nous devons juguler l'immigration illégale et sécuriser les frontières extérieures pour préserver notre cohésion et notre prospérité. »"
    },
    "whyVote": {
      "pl": "Wybierasz restrykcyjną politykę imigracyjną, obniżanie podatków dla klasy średniej, pro-biznesowy pragmatyzm rynkowy i nowoczesny styl konserwatywnego przywództwa.",
      "en": "You favor strict border enforcement, pragmatic tax relief for working families, free-market modernization, and youthful center-right governance.",
      "es": "Apoyas una política migratoria firme, alivios fiscales para familias trabajadoras, desregulación económica y un liderazgo moderno de centroderecha.",
      "de": "Du befürwortest konsequente Migrationskontrollen, steuerliche Entlastung für Familien und Leistungsträger sowie wirtschaftsnahen Reformpragmatismus.",
      "ru": "Вам близки строгий контроль границ, снижение налогового бремени для работающих граждан и современный правоцентристский курс.",
      "fr": "Vous soutenez la fermeté migratoire, l'allègement fiscal des classes moyennes et un pragmatisme économique résolument pro-entreprises."
    },
    "coordinates": {
      "econ": 55,
      "soc": -45
    },
    "color": "#0c4a6e",
    "gradient": "linear-gradient(135deg, #0c4a6e, #082f49)",
    "localPhoto": "assets/politicians/sebastian_kurz.jpg",
    "photoUrl": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/82/Sebastian_Kurz_%282018-02-28%29_%28cropped%29.jpg/330px-Sebastian_Kurz_%282018-02-28%29_%28cropped%29.jpg"
  },
  {
    "id": "alexander_lukashenko",
    "name": "Alexander Lukashenko",
    "country": {
      "pl": "Białoruś",
      "en": "Belarus",
      "es": "Bielorrusia",
      "de": "Belarus",
      "ru": "Беларусь",
      "fr": "Biélorussie"
    },
    "countryCode": "by",
    "role": {
      "pl": "Prezydent Białorusi (od 1994), autorytarny przywódca państwowy",
      "en": "President of Belarus (since 1994), head of state",
      "es": "Presidente de Bielorrusia (desde 1994), jefe de Estado",
      "de": "Präsident von Belarus (seit 1994), Staatsoberhaupt",
      "ru": "Президент Республики Беларусь (с 1994 года)",
      "fr": "Président de Biélorussie (depuis 1994), chef de l'État"
    },
    "quote": {
      "pl": "„Lepiej być dyktatorem niż gejem. Państwo i dyscyplina w fabrykach to gwarancja chleba i spokoju.”",
      "en": "\"State sovereignty, strict industrial discipline, and order are the true guarantees of stability and livelihood.\"",
      "es": "«La soberanía del Estado, la disciplina laboral en las fábricas y el orden firme garantizan el pan y la paz social.»",
      "de": "„Staatliche Disziplin in den Betrieben und strikte Ordnung sind das Fundament für Brot und sozialen Frieden.“",
      "ru": "«Дисциплина, сильная власть и работающие заводы — это гарантия хлеба, стабильности и спокойствия в стране».",
      "fr": "« La discipline de travail, l'autorité de l'État et l'ordre public sont les garants réels de la stabilité et du pain pour tous. »"
    },
    "whyVote": {
      "pl": "Cenisz państwową kontrolę nad kluczowymi fabrykami i rolnictwem, zachowanie opiekuńczej roli państwa w stylu postradzieckim, sojusz z Rosją i bezkompromisowy porządek.",
      "en": "You favor command-state industrial preservation, post-Soviet welfare paternalism, security union with Russia, and absolute administrative authority.",
      "es": "Favoreces el control estatal de las grandes fábricas, el paternalismo social postsoviético, la alianza estratégica con Rusia y el orden público implacable.",
      "de": "Du befürwortest staatliche Kontrolle über Schlüsselindustrien, nachsowjetischen Fürsorgeetatismus, enge Anlehnung an Russland und unbedingte Ordnung.",
      "ru": "Вы сторонник сохранения крупной госсобственности и колхозов, патерналистской социальной политики, союза с Россией и жесткого порядка.",
      "fr": "Vous privilégiez le maintien sous contrôle public des grandes industries, le paternalisme social et une fermeté d'ordre sans concession."
    },
    "coordinates": {
      "econ": -70,
      "soc": -90
    },
    "color": "#3f6212",
    "gradient": "linear-gradient(135deg, #3f6212, #1a2e05)",
    "localPhoto": "assets/politicians/alexander_lukashenko.jpg",
    "photoUrl": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8c/Alexander_Lukashenko_%2814-03-2025%29_%283x4_cropped_2%29.jpg/330px-Alexander_Lukashenko_%2814-03-2025%29_%283x4_cropped_2%29.jpg"
  },
  {
    "id": "mark_rutte",
    "name": "Mark Rutte",
    "country": {
      "pl": "Holandia",
      "en": "Netherlands",
      "es": "Países Bajos",
      "de": "Niederlande",
      "ru": "Нидерланды",
      "fr": "Pays-Bas"
    },
    "countryCode": "nl",
    "role": {
      "pl": "Wieloletni Premier Holandii (2010–2024), Sekretarz Generalny NATO",
      "en": "Prime Minister of the Netherlands (2010–2024), NATO Secretary General",
      "es": "Primer Ministro de los Países Bajos (2010–2024), Secretario General de la OTAN",
      "de": "Ministerpräsident der Niederlande (2010–2024), NATO-Generalsekretär",
      "ru": "Премьер-министр Нидерландов (2010–2024), Генеральный секретарь НАТО",
      "fr": "Premier ministre des Pays-Bas (2010–2024), Secrétaire général de l'OTAN"
    },
    "quote": {
      "pl": "„Gospodarka rozwija się najlepiej, gdy państwo trzyma dyscyplinę budżetową, a obywatele i firmy mają przestrzeń do działania.”",
      "en": "\"Pragmatic fiscal discipline, free enterprise, and unwavering collective defense ensure our lasting freedom.\"",
      "es": "«La disciplina fiscal pragmática, la libertad económica y la defensa colectiva firme aseguran nuestra prosperidad.»",
      "de": "„Solide Haushaltsdisziplin, freies Unternehmertum und entschlossene kollektive Verteidigung sichern unsere Freiheit.“",
      "ru": "«Прагматичная бюджетная дисциплина, свобода предпринимательства и коллективная оборона обеспечивают свободу».",
      "fr": "« La rigueur budgétaire pragmatique, la libre entreprise et une défense collective solide garantissent notre prospérité. »"
    },
    "whyVote": {
      "pl": "Cenisz liberalizm gospodarczy, dyscyplinę wydatków publicznych, pragmatyczny kompromis koalicyjny, proeuropejskość oraz zaangażowanie w obronność w ramach NATO.",
      "en": "You favor fiscal conservatism, market liberalism, pragmatic coalition-building, European integration, and robust transatlantic security deterrence.",
      "es": "Valoras el liberalismo económico, el rigor fiscal, el consenso pragmático, la integración europea y el compromiso inquebrantable con la OTAN.",
      "de": "Du schätzt fiskalische Zurückhaltung, Marktliberalismus, pragmatische Kompromissbereitschaft, europäische Verlässlichkeit und ein starkes NATO-Bündnis.",
      "ru": "Вы цените экономический либерализм, сбалансированный бюджет, умеренный компромисс и надежную трансатлантическую безопасность.",
      "fr": "Vous appréciez la rigueur budgétaire, le libéralisme économique pragmatique, la coopération européenne et l'engagement atlantique."
    },
    "coordinates": {
      "econ": 60,
      "soc": 25
    },
    "color": "#92400e",
    "gradient": "linear-gradient(135deg, #92400e, #78350f)",
    "localPhoto": "assets/politicians/mark_rutte.jpg",
    "photoUrl": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9b/Mark_Rutte%2C_23.03.23_%28cropped%29.jpg/330px-Mark_Rutte%2C_23.03.23_%28cropped%29.jpg"
  },
  {
    "id": "alexander_the_great",
    "name": "Alexander the Great",
    "country": {
      "pl": "Starożytna Macedonia / Imperium Macedońskie",
      "en": "Ancient Macedonia / Macedonian Empire",
      "es": "Antigua Macedonia / Imperio Macedonio",
      "de": "Antikes Makedonien / Makedonisches Weltreich",
      "ru": "Древняя Македония / Македонская империя",
      "fr": "Macédoine antique / Empire Macédonien"
    },
    "countryCode": "mk",
    "role": {
      "pl": "Król Macedonii, wódz i zdobywca starożytnego świata",
      "en": "King of Macedonia, conqueror and Hellenistic empire builder",
      "es": "Rey de Macedonia, conquistador y forjador del mundo helenístico",
      "de": "König von Makedonien, Feldherr und Schöpfer des hellenistischen Weltreichs",
      "ru": "Царь Македонии, полководец и создатель эллинистической империи",
      "fr": "Roi de Macédoine, conquérant et bâtisseur de l'Empire hellénistique"
    },
    "quote": {
      "pl": "„Dla tego, kto się odważy, nie ma nic niemożliwego.”",
      "en": "\"There is nothing impossible to him who will try.\"",
      "es": "«No hay nada imposible para aquel que se atreve a intentarlo.»",
      "de": "„Nichts ist unmöglich für den, der es wagt.“",
      "ru": "«Нет ничего невозможного для того, кто пытается».",
      "fr": "« Il n'est rien d'impossible à celui qui ose entreprendre. »"
    },
    "whyVote": {
      "pl": "Imponuje Ci niezłomna odwaga, geniusz wojenny, rozmach cywilizacyjny, unifikacja kultur Wschodu i Zachodu oraz heroiczny kult osobistego przywództwa.",
      "en": "You admire peerless military audacity, strategic brilliance, civilizational ambition, cultural synthesis between East and West, and heroic personal leadership.",
      "es": "Admiras la audacia militar sin igual, el genio estratégico, la ambición civilizatoria, la síntesis cultural entre Oriente y Occidente y el liderazgo heroico.",
      "de": "Du bewunderst militärische Genialität, unerschrockenen Wagemut, historische Reichseinigung zwischen Orient und Okzident und heroische Tatkraft.",
      "ru": "Вам импонируют военный гений, дерзкая решимость, масштаб созидания великой цивилизации и синтез культур Востока и Запада.",
      "fr": "Vous admirez l'audace militaire, le génie stratégique, la fusion culturelle de l'Orient et de l'Occident et l'autorité héroïque d'un grand souverain."
    },
    "coordinates": {
      "econ": 0,
      "soc": -92
    },
    "color": "#b45309",
    "gradient": "linear-gradient(135deg, #b45309, #78350f)",
    "localPhoto": "assets/politicians/alexander_the_great.jpg",
    "photoUrl": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/Alexander_Mosaic_detail_of_Alexander_the_Great_%283x4_cropped%29.jpg/330px-Alexander_Mosaic_detail_of_Alexander_the_Great_%283x4_cropped%29.jpg"
  }
];

if (typeof module !== "undefined" && module.exports) {
  module.exports = { rawPoliticians };
}
