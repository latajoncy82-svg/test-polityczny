const rawParties = [
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

module.exports = { rawParties };
