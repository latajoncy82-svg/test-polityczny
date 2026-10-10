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

module.exports = { rawParties };
