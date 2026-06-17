/* =====================================================================
   Personnages — Vie politique contemporaine (B. Lecoq-Pujade, L2)
   Fiches comparatives des grands penseurs et figures politiques, axées
   sur le « différentiel » (qui pense quoi, qui a fait quoi, et à ne pas
   confondre avec qui).

   Sources : notes Obsidian du cours (L'État & les gouvernants /
   Les partis politiques / Les citoyens & l'élection /
   Société civile & opinion publique).

   Chaque personnage :
     nom      : nom usuel
     vie      : dates (repère ; siècle/période = ce qui compte)
     groupe   : catégorie (filtrage + ordre, voir AUTEUR_GROUPES)
     courant  : discipline / sensibilité / nationalité
     oeuvre   : ouvrage(s) emblématique(s) ('' si non pertinent)
     essence  : la phrase à retenir, ce qui le distingue
     pos      : apports par rubrique -> { t: rubrique, p: contenu }
     confusion: [ { avec: "Nom", note: "ce qui les sépare" } ]

   Rubriques (t) utilisées : "Concept", "Thèse", "Œuvre", "Apport",
     "Citation", "Rôle", "Figure-type", "Contexte".
   ===================================================================== */

window.AUTEUR_GROUPES = [
  "Sociologues & politistes",
  "Juristes & théoriciens de l'État",
  "Philosophes & classiques",
  "Figures politiques (gouvernants)"
];

/* Paires que l'on confond le plus souvent (mode « duel ») */
window.AUTEUR_DUELS = [
  { a: "Max Weber", b: "Émile Durkheim",
    cle: "Les deux pères de la sociologie : Durkheim explique la SPÉCIALISATION du politique par la « division du travail social » ; Weber décrit la PROFESSIONNALISATION (vivre pour / de la politique) et la bureaucratie." },
  { a: "Maurice Duverger", b: "Moïse Ostrogorski",
    cle: "Les deux théoriciens des partis : Ostrogorski (1903) est le PIONNIER qui révèle leur rôle ; Duverger (1951) en dresse la TYPOLOGIE (cadres / masses) et en fait le « fil d'Ariane » des régimes." },
  { a: "Walter Bagehot", b: "Adhémar Esmein",
    cle: "Classification des régimes : Bagehot (1867, anglais) oppose gouvernement de cabinet et gouvernement présidentiel ; Esmein (français) la reformule en séparation SOUPLE (parlementaire) / STRICTE (présidentiel)." },
  { a: "Jean-Jacques Rousseau", b: "Emmanuel-Joseph Sieyès",
    cle: "Révolution & représentation : Rousseau REFUSE les corps intermédiaires (la volonté générale est indivisible) ; Sieyès JUSTIFIE la représentation comme une « division du travail »." },
  { a: "Alexis de Tocqueville", b: "Benjamin Constant",
    cle: "Deux libéraux des corps intermédiaires : Tocqueville voit dans l'association le remède à la « tyrannie de la majorité » ; Constant sépare État et société pour préserver l'autonomie de l'individu." },
  { a: "Joseph Schumpeter", b: "Bernard Manin",
    cle: "Théorie de l'élection : Schumpeter (1942) en fait un « marché électoral » (concurrence des dirigeants) ; Manin (1995) rappelle qu'elle est d'abord un mécanisme ARISTOCRATIQUE (choix des « meilleurs »)." },
  { a: "François Guizot", b: "Woodrow Wilson",
    cle: "Deux fondements de la délibération : pour Guizot la loi est juste car RATIONNELLE (souveraineté de la raison) ; pour Wilson elle est juste car MAJORITAIRE (le « régime de la discussion »)." },
  { a: "Léon Blum", b: "André Tardieu",
    cle: "Réforme de l'État dans les années 1930 : Blum (gauche) veut un vrai chef de gouvernement (« Lettres sur la réforme gouvernementale ») ; Tardieu (droite) veut un « Premier ministre » fort avec droit de dissolution — il inspire 1958." }
];

window.AUTEURS = [

/* ============ SOCIOLOGUES & POLITISTES ============ */
{
  nom: "Max Weber", vie: "1864–1920", groupe: "Sociologues & politistes",
  courant: "Sociologue allemand",
  oeuvre: "Le Savant et le Politique (1919)",
  essence: "Théorise la PROFESSIONNALISATION de la politique et la bureaucratie.",
  pos: [
    { t: "Concept", p: "L'homme/la femme politique vit POUR la politique (vocation) et DE la politique (rétribution) : il/elle y consacre l'essentiel de son temps." },
    { t: "Concept", p: "La bureaucratie : forme rationnelle-légale d'organisation du pouvoir (règle de droit, spécialisation, recrutement par concours)." },
    { t: "Concept", p: "Définition sociologique du parti : des « sociations » fondées sur un engagement libre, visant à procurer le pouvoir à leur chef et des avantages à leurs militants." },
    { t: "Apport", p: "Le journaliste est un acteur politique à part entière (auxiliaire du personnel politique, ancêtre du communicant)." }
  ],
  confusion: [
    { avec: "Émile Durkheim", note: "Weber = professionnalisation / bureaucratie / « vivre pour et de » ; Durkheim = division du travail social. Deux pères de la socio, deux concepts différents." }
  ]
},
{
  nom: "Émile Durkheim", vie: "1858–1917", groupe: "Sociologues & politistes",
  courant: "Sociologue français",
  oeuvre: "De la division du travail social (1893)",
  essence: "Explique la spécialisation du politique par la « division du travail social ».",
  pos: [
    { t: "Concept", p: "La division du travail social : l'industrialisation accroît la différenciation des fonctions ; la cohésion devient « organique » (solidarité par complémentarité)." },
    { t: "Apport", p: "La différenciation de l'activité politique (qui rend possible un personnel spécialisé) découle de ce processus plus large." }
  ],
  confusion: [
    { avec: "Max Weber", note: "Durkheim = différenciation / solidarité organique ; Weber = professionnalisation / bureaucratie." },
    { avec: "Emmanuel-Joseph Sieyès", note: "Même intuition (division du travail), mais Sieyès (1789) l'applique le premier à la représentation politique ; Durkheim (1893) la théorise sociologiquement." }
  ]
},
{
  nom: "Maurice Duverger", vie: "1917–2014", groupe: "Sociologues & politistes",
  courant: "Juriste & politiste français",
  oeuvre: "Les partis politiques (1951)",
  essence: "Dresse la TYPOLOGIE des partis et en fait la clé de lecture des régimes.",
  pos: [
    { t: "Concept", p: "Typologie partis de CADRES (notables, droite, financement capitaliste, comités) / partis de MASSES (militants, gauche, cotisations, sections)." },
    { t: "Concept", p: "Le « parti indirect » : sa base n'est pas l'individu mais une organisation (ex. le Labour fondé par les syndicats)." },
    { t: "Thèse", p: "Les partis sont le « fil d'Ariane » du labyrinthe des régimes : « qui connaît le droit constitutionnel classique et ignore le rôle des partis n'a qu'une vue fausse des régimes »." },
    { t: "Apport", p: "Dépasse la distinction parlementaire/présidentiel par celle des systèmes MAJORITAIRES (bipartisme) / NON-MAJORITAIRES (multipartisme)." }
  ],
  confusion: [
    { avec: "Moïse Ostrogorski", note: "Ostrogorski est le pionnier (révèle le rôle des partis) ; Duverger en fait la science (typologie, fil d'Ariane). Ne pas dater Duverger avant Ostrogorski." }
  ]
},
{
  nom: "Moïse Ostrogorski", vie: "1854–1921", groupe: "Sociologues & politistes",
  courant: "Juriste & pionnier de la science politique",
  oeuvre: "La démocratie et l'organisation des partis politiques (1903)",
  essence: "Le PREMIER à étudier scientifiquement le phénomène partisan.",
  pos: [
    { t: "Thèse", p: "Les partis assurent une liaison CONTINUE entre la société et les dirigeants (la vie politique ne se réduit pas aux élections périodiques)." },
    { t: "Citation", p: "Le Parlement « n'est plus désormais que la grande scène où se dénoue l'action préparée ailleurs » (dans les organisations partisanes)." }
  ],
  confusion: [
    { avec: "Maurice Duverger", note: "Ostrogorski (1903) = le fondateur ; Duverger (1951) = la typologie. Attention à la coquille fréquente « 1803 » dans les notes : Ostrogorski écrit en 1903." }
  ]
},
{
  nom: "Joseph Schumpeter", vie: "1883–1950", groupe: "Sociologues & politistes",
  courant: "Économiste autrichien",
  oeuvre: "Capitalisme, socialisme et démocratie (1942)",
  essence: "Pense la démocratie comme un « marché électoral ».",
  pos: [
    { t: "Concept", p: "La démocratie = une méthode concurrentielle de sélection des dirigeants, calquée sur l'économie de marché : les partis y vendent une offre politique." }
  ],
  confusion: [
    { avec: "Bernard Manin", note: "Schumpeter (1942) : l'élection est une concurrence (marché) ; Manin (1995) : elle est d'abord un tri aristocratique des « meilleurs »." }
  ]
},
{
  nom: "Bernard Manin", vie: "né en 1951", groupe: "Sociologues & politistes",
  courant: "Politiste français contemporain",
  oeuvre: "Principes du gouvernement représentatif (1995)",
  essence: "Rappelle que l'élection est, à l'origine, un mécanisme ARISTOCRATIQUE.",
  pos: [
    { t: "Thèse", p: "L'élection n'a pas la charge démocratique qu'on lui prête : c'est une procédure de sélection des « meilleurs » (sens étymologique d'aristocratie), pas de ressemblance avec le peuple." }
  ],
  confusion: [
    { avec: "Joseph Schumpeter", note: "Manin = dimension aristocratique de l'élection ; Schumpeter = dimension concurrentielle (marché)." }
  ]
},
{
  nom: "Daniel Gaxie", vie: "né en 1947", groupe: "Sociologues & politistes",
  courant: "Politiste français",
  oeuvre: "Le cens caché (1978)",
  essence: "Montre que le suffrage universel reste socialement biaisé.",
  pos: [
    { t: "Concept", p: "Le « cens caché » : un suffrage universel proclamé en droit mais entravé en fait par des barrières sociales et culturelles (inégale politisation, compétence)." }
  ],
  confusion: []
},
{
  nom: "Pierre Bourdieu", vie: "1930–2002", groupe: "Sociologues & politistes",
  courant: "Sociologue français",
  oeuvre: "La noblesse d'État (1989)",
  essence: "Analyse l'entre-soi des élites dirigeantes (énarques).",
  pos: [
    { t: "Concept", p: "La « noblesse d'État » : la formation Sciences Po / ENA homogénéise socialement les dirigeants et crée un « esprit de corps » (réseaux, solidarité d'intérêts)." }
  ],
  confusion: []
},
{
  nom: "Pierre Rosanvallon", vie: "né en 1948", groupe: "Sociologues & politistes",
  courant: "Historien & politiste français",
  oeuvre: "La contre-démocratie (2006)",
  essence: "Théorise la démocratie de la DÉFIANCE et de la surveillance.",
  pos: [
    { t: "Concept", p: "La « contre-démocratie » : au-delà du vote, les citoyens exercent un pouvoir permanent de surveillance, de jugement et de contestation (démocratie de la défiance)." },
    { t: "Apport", p: "Les partis « organisent le monde politique à partir de la vie sociale » ; l'État moderne agit en « instituteur du social »." }
  ],
  confusion: []
},
{
  nom: "Jean Stœtzel", vie: "1910–1987", groupe: "Sociologues & politistes",
  courant: "Sociologue français, pionnier des sondages",
  oeuvre: "",
  essence: "Donne une définition opératoire de l'opinion publique.",
  pos: [
    { t: "Citation", p: "L'opinion publique = « un ensemble de jugements sur des problèmes actuels auxquels adhère une grande partie des membres d'une société » (jugement + communication)." }
  ],
  confusion: [
    { avec: "Jürgen Habermas", note: "Stœtzel définit/mesure l'opinion (sondages) ; Habermas en pense la formation par la délibération dans l'espace public." }
  ]
},

/* ============ JURISTES & THÉORICIENS DE L'ÉTAT ============ */
{
  nom: "Walter Bagehot", vie: "1826–1877", groupe: "Juristes & théoriciens de l'État",
  courant: "Essayiste & journaliste anglais",
  oeuvre: "The English Constitution (1867)",
  essence: "Premier classificateur des régimes (cabinet vs présidentiel).",
  pos: [
    { t: "Concept", p: "Distingue le gouvernement de CABINET (régime parlementaire : exécutif responsable devant les chambres) et le gouvernement PRÉSIDENTIEL (président irresponsable devant elles)." },
    { t: "Thèse", p: "La fonction principale d'un parlement n'est pas de gouverner mais ÉLECTIVE : désigner et contrôler le gouvernement." }
  ],
  confusion: [
    { avec: "Adhémar Esmein", note: "Bagehot (1867) pose la classification anglaise ; Esmein l'adapte à la France (séparation souple / stricte)." },
    { avec: "John Stuart Mill", note: "Même idée (le parlement contrôle, ne gouverne pas), mais Mill l'exprime côté philosophie politique, Bagehot côté analyse des régimes." }
  ]
},
{
  nom: "Adhémar Esmein", vie: "1848–1913", groupe: "Juristes & théoriciens de l'État",
  courant: "Juriste constitutionnaliste français",
  oeuvre: "Éléments de droit constitutionnel (1896)",
  essence: "Fixe la classification française parlementaire / présidentiel.",
  pos: [
    { t: "Concept", p: "Double critère : indépendance des organes + spécialisation des fonctions → régime parlementaire = séparation SOUPLE (organes interdépendants) ; régime présidentiel = séparation STRICTE." }
  ],
  confusion: [
    { avec: "Walter Bagehot", note: "Esmein adapte Bagehot avec la IIIe République ; c'est sa version (souple/strict) qui devient la classification scolaire française." }
  ]
},
{
  nom: "Carré de Malberg", vie: "1861–1935", groupe: "Juristes & théoriciens de l'État",
  courant: "Juriste constitutionnaliste français",
  oeuvre: "",
  essence: "Dénonce l'hypertrophie du Parlement sous la IIIe République.",
  pos: [
    { t: "Concept", p: "Le « parlementarisme absolu » : critique de la souveraineté sans contrepoids des chambres (Philippe Lauvaux parlera, lui, de « parlement gouvernant »)." }
  ],
  confusion: []
},
{
  nom: "Hans Kelsen", vie: "1881–1973", groupe: "Juristes & théoriciens de l'État",
  courant: "Juriste autrichien",
  oeuvre: "La démocratie, sa nature, sa valeur (1932)",
  essence: "Intègre les partis au cœur de la théorie de la démocratie.",
  pos: [
    { t: "Citation", p: "« La démocratie est nécessairement et inévitablement un État de partis » : un des rares juristes à reconnaître le fait partisan comme constitutif de la démocratie." }
  ],
  confusion: []
},
{
  nom: "Boris Mirkine-Guetzévitch", vie: "1892–1955", groupe: "Juristes & théoriciens de l'État",
  courant: "Constitutionnaliste comparatiste",
  oeuvre: "",
  essence: "Forge le concept de « rationalisation du parlementarisme ».",
  pos: [
    { t: "Concept", p: "La « rationalisation du parlementarisme » (1928) : encadrer juridiquement les rapports exécutif/législatif pour assurer la stabilité (idée reprise sous la IVe puis radicalisée sous la Ve République)." }
  ],
  confusion: []
},
{
  nom: "Harvey Mansfield Jr", vie: "né en 1932", groupe: "Juristes & théoriciens de l'État",
  courant: "Politiste américain",
  oeuvre: "Le Prince apprivoisé",
  essence: "Donne son nom à l'idée d'« État exécutif ».",
  pos: [
    { t: "Concept", p: "L'exécutif moderne comme « prince apprivoisé » : héritier du pouvoir absolutiste royal, mais limité/contrôlé — au centre de gravité de la vie politique." }
  ],
  confusion: []
},
{
  nom: "René Capitant", vie: "1901–1970", groupe: "Juristes & théoriciens de l'État",
  courant: "Juriste & homme politique gaulliste",
  oeuvre: "",
  essence: "Résume le basculement vers l'État exécutif.",
  pos: [
    { t: "Citation", p: "« Gouverner, ce n'est plus agir dans le cadre des lois existantes ; gouverner, c'est diriger la législation elle-même. Gouverner, c'est légiférer. »" }
  ],
  confusion: []
},
{
  nom: "Georges Burdeau", vie: "1905–1988", groupe: "Juristes & théoriciens de l'État",
  courant: "Juriste & politiste français",
  oeuvre: "",
  essence: "Explique le retour de l'autorité incarnée (personnalisation).",
  pos: [
    { t: "Concept", p: "La « société de l'image » : la lassitude envers la délibération parlementaire crée un besoin d'identification à une figure de chef → personnalisation du pouvoir." }
  ],
  confusion: []
},

/* ============ PHILOSOPHES & CLASSIQUES ============ */
{
  nom: "Jean-Jacques Rousseau", vie: "1712–1778", groupe: "Philosophes & classiques",
  courant: "Philosophe genevois (contractualiste)",
  oeuvre: "Du contrat social (1762)",
  essence: "Sa volonté générale fonde l'hostilité française aux corps intermédiaires.",
  pos: [
    { t: "Thèse", p: "La volonté générale est indivisible : elle ne supporte ni partis ni « sociétés partielles » qui la corromptraient (lecture qui inspire la loi Le Chapelier de 1791)." },
    { t: "Apport", p: "Pensée invoquée pour nier le phénomène partisan : entre l'individu et l'État, il ne doit rien y avoir." }
  ],
  confusion: [
    { avec: "Emmanuel-Joseph Sieyès", note: "Rousseau REFUSE les intermédiaires ; Sieyès JUSTIFIE au contraire la représentation. Les deux sont mobilisés en 1789 mais en sens opposé." }
  ]
},
{
  nom: "Emmanuel-Joseph Sieyès", vie: "1748–1836", groupe: "Philosophes & classiques",
  courant: "Théoricien de la Révolution française",
  oeuvre: "Qu'est-ce que le Tiers État ? (1789)",
  essence: "Justifie la représentation comme une division du travail.",
  pos: [
    { t: "Thèse", p: "La représentation (déléguer la gestion des affaires publiques) n'est qu'une déclinaison de la division du travail : une population laborieuse n'a pas le loisir de gouverner elle-même." }
  ],
  confusion: [
    { avec: "Émile Durkheim", note: "Sieyès (1789) applique le premier l'idée de division du travail au politique ; Durkheim (1893) la théorise comme loi sociologique." }
  ]
},
{
  nom: "Montesquieu", vie: "1689–1755", groupe: "Philosophes & classiques",
  courant: "Philosophe des Lumières",
  oeuvre: "De l'esprit des lois (1748)",
  essence: "Fait du mode de scrutin une question essentielle pour la République.",
  pos: [
    { t: "Thèse", p: "La manière de donner les suffrages (le mode de scrutin) est une loi fondamentale de la République : elle n'est pas un simple détail technique." }
  ],
  confusion: []
},
{
  nom: "John Locke", vie: "1632–1704", groupe: "Philosophes & classiques",
  courant: "Philosophe anglais (contractualiste libéral)",
  oeuvre: "Traité du gouvernement civil (1690)",
  essence: "Sépare le premier l'État de la société civile.",
  pos: [
    { t: "Thèse", p: "L'État n'est qu'un mandataire qui reçoit la confiance de la société ; si cette confiance disparaît, il perd sa légitimité — fonde la conception moderne de la société civile." }
  ],
  confusion: [
    { avec: "Jean-Jacques Rousseau", note: "Tous deux contractualistes, mais Locke SÉPARE État et société (l'État est révocable) là où la lecture française de Rousseau les FUSIONNE dans la volonté générale." }
  ]
},
{
  nom: "Alexis de Tocqueville", vie: "1805–1859", groupe: "Philosophes & classiques",
  courant: "Penseur libéral & homme politique",
  oeuvre: "De la démocratie en Amérique (1835–1840)",
  essence: "Défend les corps intermédiaires contre la « tyrannie de la majorité ».",
  pos: [
    { t: "Concept", p: "La « tyrannie de la majorité » / « despotisme démocratique » : l'égalité produit l'individualisme, qui isole l'individu face à un État tout-puissant." },
    { t: "Citation", p: "« L'art de l'association est la science mère des sociétés démocratiques » : seules les associations recréent du lien et protègent les libertés." },
    { t: "Citation", p: "Sur les partis : « Les partis sont un mal inhérent au gouvernement libre » (un mal nécessaire)." },
    { t: "Figure-type", p: "Aussi un NOTABLE : ancien aristocrate, conseiller général de la Manche puis ministre des Affaires étrangères." }
  ],
  confusion: [
    { avec: "Benjamin Constant", note: "Deux libéraux des corps intermédiaires : Tocqueville insiste sur l'ASSOCIATION (contre la tyrannie de la majorité) ; Constant sur la SÉPARATION État/société (autonomie individuelle)." }
  ]
},
{
  nom: "Benjamin Constant", vie: "1767–1830", groupe: "Philosophes & classiques",
  courant: "Penseur libéral français",
  oeuvre: "",
  essence: "Libéral de la séparation entre l'État et la société.",
  pos: [
    { t: "Citation", p: "Définit le parti comme « une réunion d'hommes qui professent la même doctrine politique » (définition jugée trop large)." },
    { t: "Thèse", p: "La séparation de l'État et de la société doit préserver l'autonomie des individus face aux pouvoirs publics." }
  ],
  confusion: [
    { avec: "Alexis de Tocqueville", note: "Constant = autonomie individuelle par la séparation ; Tocqueville = liberté collective par l'association." }
  ]
},
{
  nom: "John Stuart Mill", vie: "1806–1873", groupe: "Philosophes & classiques",
  courant: "Philosophe libéral anglais",
  oeuvre: "",
  essence: "Assigne au Parlement un rôle de contrôle, non de gouvernement.",
  pos: [
    { t: "Citation", p: "« Le rôle d'une assemblée parlementaire n'est pas de gouverner mais de contrôler le gouvernement » : critique précoce du monopole parlementaire." }
  ],
  confusion: [
    { avec: "Walter Bagehot", note: "Même thèse (le parlement contrôle), mais Mill côté philosophie libérale, Bagehot côté typologie des régimes." }
  ]
},
{
  nom: "Pierre-Joseph Proudhon", vie: "1809–1865", groupe: "Philosophes & classiques",
  courant: "Théoricien du socialisme libertaire",
  oeuvre: "",
  essence: "Veut remplacer l'État par des associations autogérées.",
  pos: [
    { t: "Concept", p: "Le « mutualisme » : substituer à l'autorité de l'État une organisation faite d'associations ouvrières autogérées (anarchisme) — branche de l'« associationnisme »." }
  ],
  confusion: []
},
{
  nom: "Jürgen Habermas", vie: "né en 1929", groupe: "Philosophes & classiques",
  courant: "Philosophe allemand",
  oeuvre: "L'espace public (1962)",
  essence: "Fonde l'opinion publique sur la délibération.",
  pos: [
    { t: "Concept", p: "L'« espace public » : l'opinion publique naît de la DÉLIBÉRATION (échange et confrontation), à rebours de la juxtaposition de monologues et des « chambres d'écho » des réseaux sociaux." }
  ],
  confusion: [
    { avec: "Jean Stœtzel", note: "Habermas pense la formation de l'opinion (délibération) ; Stœtzel la définit et la mesure (sondages)." }
  ]
},
{
  nom: "François Guizot", vie: "1787–1874", groupe: "Philosophes & classiques",
  courant: "Doctrinaire libéral-conservateur & homme politique",
  oeuvre: "",
  essence: "Fonde la « souveraineté de la raison ».",
  pos: [
    { t: "Thèse", p: "La « souveraineté de la raison » : la loi est juste parce qu'elle est RATIONNELLE ; le législateur retranscrit les préceptes d'une raison commune (la délibération sert à les découvrir)." },
    { t: "Figure-type", p: "Aussi un NOTABLE urbain : grand bourgeois, élu et ministre sous la Monarchie de Juillet grâce à son prestige intellectuel." }
  ],
  confusion: [
    { avec: "Woodrow Wilson", note: "Deux fondements de la délibération : Guizot = la loi juste car RATIONNELLE ; Wilson = la loi juste car MAJORITAIRE (le « régime de la discussion »)." }
  ]
},

/* ============ FIGURES POLITIQUES (GOUVERNANTS) ============ */
{
  nom: "Léon Gambetta", vie: "1838–1882", groupe: "Figures politiques (gouvernants)",
  courant: "Fondateur de la IIIᵉ République",
  oeuvre: "",
  essence: "Le TRIBUN par excellence, incarnation du parlementarisme absolu.",
  pos: [
    { t: "Rôle", p: "Président de la Chambre des députés (1879–1881) : par son autorité (commissions, ordre du jour, interpellation), il fait plier le gouvernement." },
    { t: "Citation", p: "Compare le scrutin d'arrondissement à « un miroir brisé où la France ne reconnaît pas sa propre image » (1881)." },
    { t: "Figure-type", p: "TRIBUN : avocat et journaliste, il l'emporte par l'éloquence (la « République des avocats »)." }
  ],
  confusion: [
    { avec: "Jean Jaurès", note: "Deux grands tribuns de la IIIe République ; Gambetta fonde le régime républicain, Jaurès incarne le socialisme réformiste." }
  ]
},
{
  nom: "Léon Blum", vie: "1872–1950", groupe: "Figures politiques (gouvernants)",
  courant: "Socialiste (SFIO), président du Conseil",
  oeuvre: "Lettres sur la réforme gouvernementale (1918)",
  essence: "L'HOMME D'ÉTAT qui veut un vrai chef de gouvernement.",
  pos: [
    { t: "Rôle", p: "Chef du Front populaire (1936) ; ancien membre du Conseil d'État, il hérite d'une culture de l'intérêt général et impose un agenda parlementaire (solidarité ministérielle)." },
    { t: "Apport", p: "Préconise de faire du président du Conseil un véritable chef de gouvernement moderne, doté de services propres (Matignon, 1934)." },
    { t: "Figure-type", p: "HOMME D'ÉTAT : nomme en 1936 les 3 premières femmes sous-secrétaires d'État (Brunschvicg, Lacore, Joliot-Curie)." }
  ],
  confusion: [
    { avec: "André Tardieu", note: "Tous deux réformateurs de l'État dans les années 1930 : Blum (gauche) côté chef de gouvernement ; Tardieu (droite) côté Premier ministre fort + dissolution, qui inspirera 1958." }
  ]
},
{
  nom: "André Tardieu", vie: "1876–1945", groupe: "Figures politiques (gouvernants)",
  courant: "Homme politique de droite, président du Conseil",
  oeuvre: "La Réforme de l'État (1934)",
  essence: "Annonce l'exécutif fort de 1958.",
  pos: [
    { t: "Apport", p: "Appelle à un changement de régime : un « Premier ministre » s'appuyant sur une majorité stable, avec droit de dissolution — il inspirera de Gaulle et Debré (Constitution de 1958)." }
  ],
  confusion: [
    { avec: "Léon Blum", note: "Même thème (réforme de l'État, années 1930), bords opposés : retenir Tardieu pour le droit de dissolution et l'inspiration de 1958." }
  ]
},
{
  nom: "Pierre Mendès-France", vie: "1907–1982", groupe: "Figures politiques (gouvernants)",
  courant: "Radical, président du Conseil (IVᵉ République)",
  oeuvre: "",
  essence: "Incarne le passage de la délibération à l'ACTION.",
  pos: [
    { t: "Citation", p: "« Gouverner, c'est choisir » : formule qui marque le changement de culture politique (de la discussion vers l'efficacité gouvernementale)." },
    { t: "Figure-type", p: "HOMME D'ÉTAT : avocat, plus jeune député, maire, plusieurs fois ministre puis président du Conseil (1954)." }
  ],
  confusion: []
},
{
  nom: "Charles de Gaulle", vie: "1890–1970", groupe: "Figures politiques (gouvernants)",
  courant: "Fondateur de la Vᵉ République",
  oeuvre: "",
  essence: "Impose l'exécutif fort et la défiance envers les partis.",
  pos: [
    { t: "Citation", p: "Dénonce le « funeste régime des partis » des IIIe et IVe Républiques ; ouvre la voie aux techniciens venus de la haute fonction publique." },
    { t: "Apport", p: "Restaure le référendum (1958) comme dialogue direct avec le peuple ; quitte le pouvoir après l'échec du référendum de 1969." },
    { t: "Contexte", p: "Reconnaît malgré tout les partis à l'article 4 de la Constitution (1958), après négociation avec les parlementaires." }
  ],
  confusion: [
    { avec: "Georges Pompidou", note: "De Gaulle incarne l'homme d'État/fondateur ; Pompidou, son Premier ministre, illustre le TECHNICIEN (jamais élu parlementaire avant Matignon)." }
  ]
},
{
  nom: "Georges Pompidou", vie: "1911–1974", groupe: "Figures politiques (gouvernants)",
  courant: "Premier ministre puis président (Vᵉ République)",
  oeuvre: "",
  essence: "Le prototype du TECHNICIEN au sommet de l'État.",
  pos: [
    { t: "Figure-type", p: "TECHNICIEN : agrégé de lettres, il est le premier chef de gouvernement (en période normale) à n'avoir jamais été élu par le Parlement avant d'accéder à Matignon." }
  ],
  confusion: [
    { avec: "Charles de Gaulle", note: "Pompidou = technicien (compétence, hors cursus parlementaire) ; de Gaulle = homme d'État/fondateur. Le duo illustre l'inversion du cursus honorum sous la Ve." }
  ]
},
{
  nom: "François Mitterrand", vie: "1916–1996", groupe: "Figures politiques (gouvernants)",
  courant: "Socialiste, président de la République (1981–1995)",
  oeuvre: "",
  essence: "Parcours type de l'HOMME D'ÉTAT ; manie le mode de scrutin.",
  pos: [
    { t: "Figure-type", p: "HOMME D'ÉTAT : avocat, maire, conseiller général, 9 fois ministre sous la IVe, puis président 14 ans." },
    { t: "Apport", p: "Instaure la représentation proportionnelle (1985–1986) pour limiter la défaite du PS : effet collatéral, première percée du FN (35 députés), système supprimé dès 1986." }
  ],
  confusion: []
},
{
  nom: "Jules Guesde", vie: "1845–1922", groupe: "Figures politiques (gouvernants)",
  courant: "Socialiste marxiste (Parti ouvrier)",
  oeuvre: "",
  essence: "Invente le candidat « porte-programme ».",
  pos: [
    { t: "Apport", p: "À Roubaix (1893), il se présente non sur son nom mais comme le « porte-programme » de son parti : naissance de la PROGRAMMATISATION des scrutins (on vote pour un projet, pas pour une personne)." },
    { t: "Contexte", p: "Chef du courant socialiste révolutionnaire (PSDF), face au réformiste Jaurès (PSF) ; les deux fusionnent dans la SFIO en 1905." }
  ],
  confusion: [
    { avec: "Jean Jaurès", note: "Guesde = aile RÉVOLUTIONNAIRE/marxiste ; Jaurès = aile RÉFORMISTE. Rivaux avant de fonder ensemble la SFIO (1905)." }
  ]
},
{
  nom: "Jean Jaurès", vie: "1859–1914", groupe: "Figures politiques (gouvernants)",
  courant: "Socialiste réformiste (SFIO)",
  oeuvre: "",
  essence: "Pacifie la manifestation et critique l'individualisme révolutionnaire.",
  pos: [
    { t: "Apport", p: "Pacifie et ritualise la manifestation (1909) pour montrer que la classe ouvrière peut « faire nombre » de manière ordonnée." },
    { t: "Concept", p: "Dénonce l'« individualisme étatiste » hérité de la Révolution (l'individu seul face à l'État, sans corps intermédiaires)." }
  ],
  confusion: [
    { avec: "Jules Guesde", note: "Jaurès = réformiste (PSF) ; Guesde = révolutionnaire (PSDF). Ne pas inverser les deux ailes du socialisme français." }
  ]
},
{
  nom: "Pierre Waldeck-Rousseau", vie: "1846–1904", groupe: "Figures politiques (gouvernants)",
  courant: "Républicain modéré, président du Conseil",
  oeuvre: "",
  essence: "Le père des grandes lois sur les libertés collectives.",
  pos: [
    { t: "Apport", p: "À l'origine de la loi de 1884 (liberté syndicale) et de la loi de 1901 (liberté d'association) : fin de l'interdiction des corps intermédiaires héritée de 1791." }
  ],
  confusion: [
    { avec: "Isaac Le Chapelier", note: "Symétrie inverse : Le Chapelier INTERDIT les groupements (1791) ; Waldeck-Rousseau les LIBÈRE (1884 et 1901)." }
  ]
},
{
  nom: "Isaac Le Chapelier", vie: "1754–1794", groupe: "Figures politiques (gouvernants)",
  courant: "Révolutionnaire (Assemblée constituante)",
  oeuvre: "",
  essence: "Interdit les corps intermédiaires au nom de la volonté générale.",
  pos: [
    { t: "Apport", p: "Décret/loi de 1791 supprimant corporations et sociétés populaires : « il n'y a plus que l'intérêt particulier de chaque individu et l'intérêt général » — fonde l'hostilité française durable aux groupements." }
  ],
  confusion: [
    { avec: "Pierre Waldeck-Rousseau", note: "Le Chapelier (1791) ferme ; Waldeck-Rousseau (1884/1901) rouvre. Les deux bornes de la liberté d'association en France." }
  ]
},
{
  nom: "Woodrow Wilson", vie: "1856–1924", groupe: "Figures politiques (gouvernants)",
  courant: "Politiste & président des États-Unis",
  oeuvre: "Congressional Government (1885)",
  essence: "Théorise l'État exécutif et le « régime de la discussion ».",
  pos: [
    { t: "Citation", p: "« Le régime de la discussion est le seul genre de gouvernement acceptable pour un peuple qui essaie de se gouverner lui-même » : la loi juste parce que MAJORITAIRE." },
    { t: "Thèse", p: "Critique le « gouvernement congressionnel » : la suprématie des chambres n'est plus adaptée à une direction politique unifiée aux mains de l'exécutif." }
  ],
  confusion: [
    { avec: "François Guizot", note: "Wilson = volonté générale juste car MAJORITAIRE ; Guizot = juste car RATIONNELLE. Deux conceptions de la délibération." }
  ]
}

];
