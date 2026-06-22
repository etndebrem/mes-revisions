/* =====================================================================
   Fiches de synthèse — Vie politique contemporaine
   Cours de Benjamin Lecoq-Pujade (L2). Synthèse des 4 leçons.

   Chaque fiche :
     part   : la leçon ("L'État & les gouvernants" | "Les partis politiques"
              | "Les citoyens" | "La médiation sociale")
     title  : intitulé de la fiche
     sub    : sous-titre / accroche
     blocks : [{h: titre, p: paragraphe}] ou [{h: titre, l: [puces]}]

   Un bloc dont le titre commence par « ⚠️ » est affiché en encadré rouge ;
   un bloc « Plan-type … » en encadré bleu.
   Mini-formatage dans le texte : **gras**, *italique*.
   ===================================================================== */

window.FICHE_PARTS = [
  "Sujets d'examen",
  "Introduction",
  "L'État & les gouvernants",
  "Les partis politiques",
  "Les citoyens",
  "La médiation sociale"
];

window.FICHES = [

/* =================================================================
   SUJETS D'EXAMEN — réflexion /12 + cours /8 (corrigés condensés)
   Enjeux · Éléments théoriques · Citations · Cours · Piège à éviter
   ================================================================= */
{
  part: "Sujets d'examen",
  title: "Sujet 8 — Le cadre de la vie politique",
  sub: "Réflexion : la vie politique se réduit-elle au cadre constitutionnel et institutionnel ?",
  blocks: [
    { h: "Enjeux de la question", p: "Définir *vie politique* (Burdeau, Weber) et *cadre constitutionnel* (la « face officielle »). Thèse : le droit est le **point de départ** de la vie politique mais ne l'**épuise pas**, sans être négligeable. Formule-pivot : le droit n'est *« ni impuissant, ni tout-puissant »*." },
    { h: "Éléments théoriques", l: [
      "Le cadre **structure** : la Ct de 1958 (rationalisation) et la révision de **1962** (SUD) ont stabilisé un jeu politique anarchique.",
      "Mais il **n'absorbe pas tout** : pluralisme et conflictualité. Ex. le régime présidentiel américain ne se comprend qu'avec des facteurs *extra-constitutionnels* (primaires, bipartisme, médias).",
      "Trois **décalages** : souveraineté relativisée par l'UE ; le « peuple un » = fiction juridique ; séparation des pouvoirs minée par l'argent et les réseaux.",
      "La **science politique** (1879) décrit ce que le juriste formaliste ignore ; le **champ** (Bourdieu) et le phénomène **partisan** (art. 4, fait majoritaire) le prouvent."
    ]},
    { h: "Citations à ne pas manquer", l: [
      "**Rémond** : *« les pouvoirs régulièrement institués n'absorbent jamais toutes les forces d'une société ».*",
      "**Duverger** : *« qui ignore le rôle des partis n'a qu'une vue fausse des régimes ».*",
      "**Burdeau** : *« des hommes qui commandent, d'autres qui obéissent ».*"
    ]},
    { h: "Question de cours (/8)", p: "**Comment Weber définit-il la politique et l'État ?** La politique = *« chercher à participer au pouvoir ou à influer sur sa répartition »* (1919). L'État = *« le monopole de la violence physique légitime »* : il exproprie la justice privée et s'appuie sur la contrainte **+ un discours de légitimation**." },
    { h: "⚠️ Piège à éviter", p: "Le **« champ »** (lutte / force) est de **Bourdieu**, pas de Weber. Et n'oublie pas la moitié **« politique »** de la définition wébérienne (pas seulement l'État)." }
  ]
},
{
  part: "Sujets d'examen",
  title: "Sujet 9 — L'État & le monopole de la direction politique",
  sub: "Réflexion : l'État a-t-il perdu le monopole de la direction politique ?",
  blocks: [
    { h: "Enjeux de la question", p: "Distinguer le *monopole de la violence légitime* (la contrainte) de la *direction politique* (orienter, conduire). Thèse : l'État n'a pas tant **perdu** ce monopole qu'il l'a **transformé** — d'une *puissance de direction* à une *autorité de régulation*." },
    { h: "Éléments théoriques", l: [
      "**Gouvernement → gouvernance** (sociologie des organisations, années 1990) : régulation entre acteurs publics/privés à plusieurs niveaux.",
      "Dimension **supranationale** : souveraineté relativisée par l'UE, l'OTAN, l'internationalisation — l'État n'est plus le seul échelon de décision.",
      "Contre-pouvoirs internes : partis et médias structurent l'agenda (foulard de Creil 1989, immigration/FN) ; poids de l'argent (lobbying, concentration des médias).",
      "Mais l'État **garde** le monopole de la contrainte et l'impulsion normative (~75 % de projets de loi) : il régule plutôt qu'il ne dirige."
    ]},
    { h: "Citations à ne pas manquer", l: [
      "**Mansfield Jr** : le *« prince apprivoisé »* — l'exécutif, héritier du pouvoir royal, reste contrôlé.",
      "**Rémond** : *« les pouvoirs régulièrement institués n'absorbent jamais toutes les forces d'une société ».*"
    ]},
    { h: "Question de cours (/8)", p: "**Définition sociopolitique de l'État (Weber) + triple processus.** *« Entreprise politique dont la direction administrative revendique le monopole de la contrainte physique légitime »* (Économie et société, 1921), par-delà la définition juridique (Carré de Malberg). Triple processus : **différenciation, concentration, institutionnalisation**." },
    { h: "⚠️ Piège à éviter", p: "Ne pas oublier le concept **central** : *gouvernement → gouvernance*. Et traiter la dimension **supranationale (UE)**, pas seulement les contre-pouvoirs internes." }
  ]
},
{
  part: "Sujets d'examen",
  title: "Sujet 10 — Du règne de la discussion au règne de l'action",
  sub: "Réflexion : le « règne de l'action » a-t-il définitivement supplanté le « règne de la discussion » ?",
  blocks: [
    { h: "Enjeux de la question", p: "*Discussion* = État parlementaire (délibération) ; *action* = État exécutif (efficacité). Thèse : l'action l'a **durablement** emporté, mais **non définitivement** — la discussion resurgit dès que la majorité fait défaut." },
    { h: "Éléments théoriques", l: [
      "Le basculement répond à un besoin d'**efficacité** (guerre, crises, État-providence).",
      "Sous la Ve : parlementarisme rationalisé, fait majoritaire, ~75 % de projets de loi ; le Parlement **contrôle** (motion de censure, art. 49 al. 2), il n'**impulse** plus.",
      "Mais c'est un **idéal-type** : l'exécutif reste un « prince apprivoisé » ; depuis **2022** (sans majorité absolue : 49.3, motions de censure), la **négociation** revient."
    ]},
    { h: "Citations à ne pas manquer", l: [
      "**Capitant** : *« gouverner, c'est légiférer ».*",
      "**Roussellier** (*La Force de gouverner*, 2015) : la *« disqualification de la méthode parlementaire ».*",
      "**Mirkin-Guetzévitch** (1928) : la *rationalisation du parlementarisme*.",
      "**Mansfield** : le *« prince apprivoisé ».*"
    ]},
    { h: "Question de cours (/8)", p: "**Le modèle de l'État parlementaire et ses 3 axes (vs l'État monarchique).** Définition : centre d'impulsion = le Parlement. Trois axes : pouvoir **impersonnel** (vs personnel/héréditaire) ; pouvoir **public** (vs occulte) ; **règne de la loi** (vs arbitraire), art. 6 DDHC." },
    { h: "⚠️ Piège à éviter", p: "La motion de censure = **art. 49 al. 2** (« 49-4 » n'existe pas ; le 49.3 = adoption sans vote). En cours, **définis le modèle** avant d'énoncer les 3 axes." }
  ]
},
{
  part: "Sujets d'examen",
  title: "Sujet 11 — Du notable au tribun",
  sub: "Réflexion : pourquoi le gouvernement des notables a-t-il laissé place au règne des tribuns ?",
  blocks: [
    { h: "Enjeux de la question", p: "*Notable* (prestige social, fortune locale, censitaire) vs *tribun* (orateur, professions libérales). Thèse : la démocratisation du suffrage et les mutations de la société privent le notable de ses appuis et valorisent l'orateur — mais le pouvoir reste à une élite (oligarchie renouvelée)." },
    { h: "Éléments théoriques", l: [
      "**Politisation populaire** : SUD **1848**, campagnes, lois de **1881** (presse, réunion) ; le combat passe d'une conquête de *statut* à une conquête de *conviction*.",
      "**Mutations socio-économiques** : urbanisation / exode rural ; **liberté syndicale (1884)** qui rompt la dépendance économique ; **lois Ferry** (instruction, laïcité) qui sapent l'appui clérical des notables.",
      "**Renouvellement du personnel** : dès **1879**, professions libérales (« république des avocats », ~2/3 des parlementaires) ; professionnalisation (mandat rémunéré, groupes parlementaires reconnus en 1910)."
    ]},
    { h: "Citations à ne pas manquer", l: [
      "Figures du tribun : **Gambetta, Clemenceau, Waldeck-Rousseau, Briand**.",
      "**Siegfried** : l'élection du notable = *« la ratification de l'autorité sociale évidente ».*"
    ]},
    { h: "Question de cours (/8)", p: "**La figure du tribun et les 3 facteurs (IIIe Rép.).** Le tribun = l'orateur qui emporte la conviction à la tribune (la délibération est au cœur du régime). Facteurs : politisation populaire / mutations socio-économiques / renouvellement du personnel." },
    { h: "⚠️ Piège à éviter", p: "La *« noblesse d'État »* (Bourdieu) désigne les **énarques de la Ve**, pas les notables du XIXe (anachronisme). En cours, **ne recopie pas** la réflexion : structure les **3 facteurs**." }
  ]
},
{
  part: "Sujets d'examen",
  title: "Sujet 12 — La technocratie",
  sub: "Réflexion : la technocratie est-elle l'accomplissement ou la dénaturation de la démocratie représentative ?",
  blocks: [
    { h: "Enjeux de la question", p: "Sujet **dialectique** : traiter les **deux** branches. *Technocratie* = gouvernement des techniciens (compétence) ; *démocratie représentative* = mandat délégué et libre. Thèse : la technocratie est l'**aboutissement** de la logique d'efficacité, mais au prix d'un **déficit de représentativité**." },
    { h: "Éléments théoriques", l: [
      "**Accomplissement** : différenciation / professionnalisation (Durkheim, Sieyès, Weber) ; demande d'efficacité (État exécutif, État-providence) ; de Gaulle contre le « funeste régime des partis ».",
      "**Dénaturation** : voie royale Sciences Po / ENA, homogénéité (CSP+ : 81,5 % → 67 % depuis 2022), « noblesse d'État » (Bourdieu), parachutage / pantouflage, expert vs profane, rupture (Gilets jaunes, retraites)."
    ]},
    { h: "Citations à ne pas manquer", l: [
      "**Bourdieu** : la *« noblesse d'État »* (élite énarque, esprit de corps).",
      "**Weber** : vivre *« pour »* et *« de »* la politique (professionnalisation).",
      "**De Gaulle** : le *« funeste régime des partis ».*"
    ]},
    { h: "Question de cours (/8)", p: "**La figure du technicien et l'inversion du cursus honorum.** Technicien = promu pour sa compétence (maîtrise des dossiers). Inversion : on entre au sommet par Sciences Po / ENA (créées à la Libération, **1945**) et la haute administration, au lieu de monter du local au national. Repères : **art. 23** (incompatibilité), **1958** (Debré ; Pompidou jamais élu)." },
    { h: "⚠️ Piège à éviter", p: "Le sujet est un *« accomplissement **OU** dénaturation »* : ne traite pas **qu'une seule** branche. Ici, *« noblesse d'État »* est **bien** employé (énarques)." }
  ]
},
{
  part: "Sujets d'examen",
  title: "Sujet 13 — Les femmes & la vie politique",
  sub: "Réflexion : comment expliquer la persistance du « gender gap » dans la vie politique française ?",
  blocks: [
    { h: "Enjeux de la question", p: "Le *gender gap* persiste **malgré** l'égalité de droit (vote en 1944). Trois explications : socialisation tardive, **mode de scrutin** (la parité ne « mord » qu'au scrutin de liste), résistances culturelles." },
    { h: "Éléments théoriques", l: [
      "**Socialisation tardive** : vote refusé dès la Révolution (crainte d'un vote conservateur / catholique, dépendance civile) ; ordonnance du **21 avril 1944**. Retard sur l'Allemagne.",
      "**Le ressort institutionnel (clé)** : la parité (révision de **1999** + lois) impose l'alternance F/H aux **scrutins de liste** (42 % de députées depuis 2017, quasi-parité aux locales) ; elle reste impuissante au scrutin **uninominal** et dans les **exécutifs** (13 % en 2012). C'est un écart de **pouvoir**.",
      "**Résistances culturelles** : discours dégradant (« hystérique »), mise en cause de la compétence des femmes (Viktorovitch).",
      "Chronologie : **1936** (3 sous-secrétaires, gouvernement Blum) → **1944** (vote) → **1945** (AN) → **1946** (Sénat) → **1947** (Poinso-Chapuis) → **1991** (Cresson)."
    ]},
    { h: "Citations à ne pas manquer", l: [
      "**Ordonnance du 21 avril 1944** : droit de vote des femmes (refusé depuis la Révolution).",
      "**Révision constitutionnelle de 1999** + lois sur la parité : alternance F/H aux scrutins de liste."
    ]},
    { h: "Question de cours (/8)", p: "**Les étapes, du refus révolutionnaire à la parité.** Refus dès la Révolution → 1944 (vote) → 1945/46 (AN / Sénat) → 1947 (1re ministre de plein exercice) → 1991 (1re Première ministre) → **parité** (1999 + lois) : alternance aux scrutins de liste, écart persistant dans les exécutifs." },
    { h: "⚠️ Piège à éviter", p: "Le ressort **central** est institutionnel (parité × mode de scrutin) — ne te limite pas aux résistances culturelles. Et en cours, va **jusqu'à la parité** (ne t'arrête pas à Cresson)." }
  ]
},
{
  part: "Sujets d'examen",
  title: "Sujet 14 — Partis & régime politique",
  sub: "Réflexion : pour comprendre un régime politique, le système de partis compte-t-il davantage que la Constitution ?",
  blocks: [
    { h: "Enjeux de la question", p: "Arbitrer le *« davantage »*. Thèse : ni l'un ni l'autre seul — c'est leur **interaction** ; mais sans le système de partis, la lecture constitutionnelle est *« une vue fausse »* (Duverger)." },
    { h: "Éléments théoriques", l: [
      "La Ct **ignore** largement les partis (reconnaissance tardive, art. 4) ; or ils commandent la pratique (fait majoritaire, présidentialisation).",
      "**Preuve** : même Constitution, régimes différents — présidentialisme / cohabitation (**1962-2022**), tripartition inqualifiable depuis **2022**.",
      "**Réciprocité** : la Ct façonne aussi les partis (scrutin majoritaire à 2 tours, SUD 1962 → bipolarisation)."
    ]},
    { h: "Citations à ne pas manquer", l: [
      "**Duverger** : *« qui ignore le rôle des partis n'a qu'une vue fausse des régimes »* ; l'étude des partis = *« fil d'Ariane ».*",
      "**Duverger** : systèmes **majoritaires** vs **non-majoritaires**."
    ]},
    { h: "Question de cours (/8)", p: "**Les effets du bipartisme : R-U vs USA.** Deux effets : **convergence** (un parti tient exécutif + législatif) ou **rigidification** (organes tenus par des partis différents). R-U = **fusion** des pouvoirs (Bagehot, Westminster, Whips). USA = **convergence limitée** (« parlementarisme de couloir » ; mais midterms → gouvernement divisé = rigidification)." },
    { h: "⚠️ Piège à éviter", p: "Le bipartisme structure les modèles **britannique et américain** (≠ « européen » : l'Europe continentale est multipartiste). Côté USA, ne pas oublier le **second effet** (rigidification)." }
  ]
},
{
  part: "Sujets d'examen",
  title: "Sujet 15 — Le sens de l'élection",
  sub: "Réflexion : l'élection est-elle, par nature, un mécanisme démocratique ?",
  blocks: [
    { h: "Enjeux de la question", p: "Thèse : l'élection n'est **pas** démocratique par nature — elle fut un instrument **aristocratique** de sélection des « meilleurs » — et ne l'est devenue que par le suffrage universel et le sens qu'on lui a donné." },
    { h: "Éléments théoriques", l: [
      "**Origine aristocratique** (Manin) : suffrage censitaire, vote à deux degrés ; l'élection reproduit une autorité sociale.",
      "**Démocratisation (1848)** : volonté souveraine ; isoloir, marché électoral (Schumpeter), vote de programme (Guesde).",
      "**Limites persistantes** : mandat **libre**, « cens caché » (Gaxie), re-personnalisation (Burdeau) → *« aristocratie élective ».*"
    ]},
    { h: "Citations à ne pas manquer", l: [
      "**Manin** (*Principes du gouvernement représentatif*) : l'élection, mécanisme aristocratique.",
      "**Schumpeter** (1942) : le *« marché électoral ».*",
      "**Gaxie** : le *« cens caché ».*"
    ]},
    { h: "Question de cours (/8)", p: "**L'évolution du sens politique de l'élection.** Sélection aristocratique des « meilleurs » (XVIIIe, censitaire) → **1848** : expression d'une volonté souveraine (« démocratie électorale ») → re-personnalisation contemporaine (Burdeau, « société de l'image »)." }
  ]
},
{
  part: "Sujets d'examen",
  title: "Sujet 16 — Le référendum",
  sub: "Réflexion : le référendum est-il un instrument de démocratie ou de pouvoir personnel ?",
  blocks: [
    { h: "Enjeux de la question", p: "Outil **ambivalent** : conçu pour la souveraineté populaire, il a souvent servi le **pouvoir personnel** (plébiscite), d'où sa **désuétude** actuelle." },
    { h: "Éléments théoriques", l: [
      "**Dérive plébiscitaire** : les deux Napoléon ; la IIIe Rép. le proscrit 75 ans.",
      "**Usage gaullien** : restauré en **1958** pour légitimer l'État face aux partis ; mais aussi pour court-circuiter le Parlement (échec de **1969** → départ).",
      "**Désuétude** : 9 usages en 67 ans, rien depuis **2005**. Causes : légitimité présidentielle (SUD + quinquennat), risque du vote-sanction, traumatisme de 2005."
    ]},
    { h: "Citations à ne pas manquer", l: [
      "**1969** : échec → départ de De Gaulle (le spectre du vote-sanction).",
      "**2005** : rejet du traité constitutionnel européen malgré une majorité parlementaire favorable."
    ]},
    { h: "Question de cours (/8)", p: "**L'évolution du référendum sous la Ve + sa désuétude.** Restauration gaullienne (1958) → déclin (plus rien depuis 2005). Trois facteurs : légitimité présidentielle, risque politique, traumatisme de 2005. (RIP, art. 11 ; référendum local, art. 72-1, 2003.)" }
  ]
},
{
  part: "Sujets d'examen",
  title: "Sujet 17 — La société civile (Tocqueville)",
  sub: "Réflexion : les corps intermédiaires sont-ils le seul rempart contre le despotisme démocratique ?",
  blocks: [
    { h: "Enjeux de la question", p: "Thèse : chez Tocqueville, l'association est le rempart **décisif** (sur les mœurs) contre la tyrannie de la majorité — mais **non le seul** (élection, presse, séparation des pouvoirs), et la France l'a longtemps **refoulé**." },
    { h: "Éléments théoriques", l: [
      "**Le danger** : égalisation des conditions → individualisme → atomisation → *« tyrannie de la majorité » / « despotisme démocratique ».*",
      "**Le remède** : l'association recrée du lien collectif (fonctions de **relais** et de **tampon**).",
      "**La méfiance française** : Le Chapelier (1791), « société partielle » (Rousseau), « individualisme étatiste » (Jaurès) ; reconnaissance tardive (1884, 1901) ; encadrement actuel (RUP, dissolution, contrat d'engagement républicain 2021)."
    ]},
    { h: "Citations à ne pas manquer", l: [
      "**Tocqueville** : *« l'art de l'association est la science mère des sociétés démocratiques ».*",
      "**Le Chapelier** (1791) : *« il n'y a plus que l'intérêt particulier de chaque individu et l'intérêt général ».*",
      "**Locke** : l'État, simple **mandataire** de la société."
    ]},
    { h: "Question de cours (/8)", p: "**Tocqueville : égalisation → individualisme → tyrannie de la majorité, et le rôle des instances de médiation.** L'égalité engendre l'individualisme et l'atomisation ; l'individu isolé ne résiste plus à la majorité (despotisme démocratique) ; seules les instances de médiation (relais + tampon) recréent du collectif." }
  ]
},
{
  part: "Sujets d'examen",
  title: "Sujet 18 — L'opinion publique",
  sub: "Réflexion : peut-on parler d'« une » opinion publique ?",
  blocks: [
    { h: "Enjeux de la question", p: "Thèse : il faut parler **DES** opinions publiques — une opinion unique est une **construction**, voire une illusion entretenue par ses vecteurs (médias, sondages)." },
    { h: "Éléments théoriques", l: [
      "**Une force diffuse** : inorganisée, mobile, anonyme ; elle n'existe que par la **communication** ; plurielle par nature.",
      "**Une opinion fabriquée** : *« médiatisée »* (ORTF → concentration : Bolloré, Arnault) ; le sondage produit l'image d'une majorité.",
      "**Le numérique** : distorsion algorithmique, « chambres d'écho » (monologue vs délibération), atomisation."
    ]},
    { h: "Citations à ne pas manquer", l: [
      "**Stœtzel** : *« un ensemble de jugements sur des problèmes actuels auxquels adhère une grande partie d'une société ».*",
      "**Bourdieu** : *« l'opinion publique n'existe pas ».*",
      "**Habermas** : l'opinion naît de la **délibération** dans l'espace public."
    ]},
    { h: "Question de cours (/8)", p: "**La définition de Stœtzel + les caractéristiques de force diffuse.** Stœtzel : jugement (prise de position) + communication. Force diffuse : **inorganisée**, **mobile**, **anonyme** (l'anonymat fait sa puissance) ; plutôt DES opinions, saisies par leurs vecteurs (presse, sondages, réseaux)." }
  ]
},

/* =================================================================
   0 — INTRODUCTION
   ================================================================= */
{
  part: "Introduction",
  title: "Qu'est-ce que la vie politique ?",
  sub: "Le décalage droit / réalité, et la définition de l'activité politique",
  blocks: [
    { h: "L'essentiel", p: "La vie politique **ne se réduit pas au cadre constitutionnel** : sous le « vernis » des institutions, elle est faite de rapports de force et de pluralisme (**René Rémond** : *« les pouvoirs régulièrement institués n'absorbent jamais toutes les forces d'une société »*). Pour la saisir, on recourt à la **science politique** — discipline autonome depuis la fin du XIXᵉ s. (**École libre des sciences politiques, 1879**), qui décrit *empiriquement* les phénomènes politiques." },
    { h: "À retenir", l: [
      "**« Le » politique** (la *structure* d'un groupement : institutions, valeurs, symboles) ≠ **« la » politique** (une *activité* sociale spécifique).",
      "La politique ne se définit **ni par sa finalité** (la philosophie ne s'accorde pas) **ni par son objet** (tout problème social peut *devenir* politique).",
      "**Weber (1919)** la définit par ses **moyens** : *« chercher à participer au pouvoir ou à influer sur sa répartition »*. Elle s'épanouit dans le cadre de l'**État** = *« le monopole de la violence légitime »* (violence + discours de légitimation).",
      "**Bourdieu** : la vie politique est un **« champ »** — espace autonome, à la fois *champ de lutte* (concurrence, offre politique, clivages comme l'« arc républicain ») et *champ de force*."
    ]},
    { h: "Auteurs & repères clés", l: [
      "**Georges Burdeau** (« Traité de science politique » : *« des hommes qui commandent, d'autres qui obéissent »*).",
      "**Hauriou & Duguit** : intégrer les sciences sociales au droit (fin XIXᵉ). · **Ostrogorski** (partis, **1903**) · **Siegfried** (comportements électoraux).",
      "Les 4 branches de la science politique : théorie politique · relations internationales · science administrative · **sociologie politique**."
    ]},
    { h: "Plan-type (dissertation)", p: "**I. Une réalité qui déborde le droit** — le décalage entre le discours constitutionnel et la pratique (souveraineté, peuple, séparation des pouvoirs relativisés). **II. Une activité saisie par la science politique** — la définition wébérienne (pouvoir, État, violence légitime) et le « champ » de Bourdieu. *(Nuance : le droit n'est ni impuissant ni tout-puissant.)*" }
  ]
},
{
  part: "Introduction",
  title: "L'État, le pouvoir et les forces de la vie politique",
  sub: "Définir l'État sociologiquement, cartographier les forces, situer dans le temps et l'espace",
  blocks: [
    { h: "L'essentiel", p: "Derrière la **définition juridique** de l'État (**Bodin**, Carré de Malberg : monopole de la puissance publique + souveraineté ; **Esmein** : « personnification juridique d'une nation ») se cache une **réalité sociopolitique**. L'État domine le champ politique (**catalyseur**) sans l'épuiser." },
    { h: "La consistance sociale de l'État (3 positions)", l: [
      "**Karl Marx** (*Le Capital*, 1867) la **surdétermine** : appareil de domination de classe, voué à disparaître dans la société sans classes.",
      "**Léon Duguit** (service public) la **nie** : l'État-personne est une « mystification » ; seul existe le rapport gouvernants/gouvernés.",
      "**Maurice Hauriou** (juste milieu) : l'État est une **institution** que le droit ne fait que constater.",
      "**Weber** (*Économie et société*, 1921) : « entreprise politique […] au **monopole de la contrainte physique légitime** » — résultat d'un **triple processus** : différenciation, concentration, institutionnalisation."
    ]},
    { h: "La typologie des forces politiques", l: [
      "**Forces individuelles** : personnel politique (« classe politique », *vit de* la politique) · militants occasionnels · masse des citoyens.",
      "**Forces collectives organisées** : État & pouvoirs publics · corps électoral · **partis** (« entreprises politiques ») · mouvements intermédiaires (associations, syndicats, *lobbies*).",
      "**Forces collectives spontanées** : les **mouvements sociaux** (logique *bottom-up* : Gilets jaunes, retraites).",
      "**Forces immatérielles / diffuses** (véhiculées par le langage) : l'**opinion publique** et les **idéologies** (libéralisme, socialisme, nationalisme…)."
    ]},
    { h: "Cadre temporel & spatial", l: [
      "**Temporel** : la vie politique contemporaine s'ouvre avec la **Révolution** (~235 ans) ; histoire = **sédimentation** (ex. « Nouveau Front populaire » 2024) ; passage démocratie d'opinion → électorale → de masse ; **cycles** de clivages.",
      "**Spatial** : pas de vase clos — **globalisation** et intégration à l'**UE** ; nécessité de la **comparaison** (le phénomène partisan, tardif en France ; la polarisation, commune aux démocraties)."
    ]},
    { h: "⚠️ À ne pas confondre", p: "**Gouvernement** (pouvoir de *direction* monopolistique et national) ≠ **gouvernance** (pouvoir de *régulation* entre acteurs publics/privés, à plusieurs niveaux). L'État passe d'une *puissance de direction* à une *autorité de régulation*." }
  ]
},

/* =================================================================
   I — L'ÉTAT & LES GOUVERNANTS
   ================================================================= */
{
  part: "L'État & les gouvernants",
  title: "De l'État parlementaire à l'État exécutif",
  sub: "La grande mutation du XXᵉ s. : du règne de la délibération au règne de l'action",
  blocks: [
    { h: "L'essentiel", p: "Au XIXᵉ s., l'**État parlementaire** place le Parlement au centre de l'impulsion politique : la **délibération** est le mode décisionnel et la loi est « l'expression de la volonté générale » (**art. 6 DDHC**). À partir de la Première Guerre mondiale, face à l'urgence (guerre, crises), s'impose un nouveau dogme — l'**efficacité gouvernementale**. L'**État exécutif** déplace le centre de gravité du Parlement vers l'exécutif : *« le règne de la discussion cède la place au règne de l'action »*." },
    { h: "À retenir", l: [
      "**État parlementaire** : centre d'impulsion = le Parlement ; logique de **délibération**. Consécration sous la **IIIᵉ République** (« parlementarisme républicain », synthèse de la monarchie de Juillet et du républicanisme révolutionnaire).",
      "Critiques du monopole parlementaire : **Carré de Malberg** (« parlementarisme absolu »), **Philippe Lauvaux** (« parlement gouvernant »).",
      "**État exécutif** = trois leviers : une **autonomie fonctionnelle** (pouvoir normatif propre — décrets-lois → **art. 37 & 38 de la Ct de 1958** ; aux USA, « pouvoirs inhérents »), une **autonomie organique** (administration propre : Matignon **1934**, *White House Office* **1939**) et la **rationalisation du parlementarisme** (assurer la stabilité de l'exécutif).",
      "*« Gouverner, c'est légiférer »* (**René Capitant**) : l'exécutif impulse et maîtrise la loi (≈ 75 % des textes sont des projets de loi)."
    ]},
    { h: "Auteurs & repères clés", l: [
      "**Guizot** (souveraineté de la raison) · **Condorcet** (délibération « mathématique ») · **Woodrow Wilson** (« régime de la discussion »).",
      "**J. S. Mill** & **Walter Bagehot** : le Parlement *contrôle* le gouvernement, il ne gouverne pas.",
      "**Harvey Mansfield** (« Le Prince apprivoisé ») · **N. Roussellier** (« disqualification de la méthode parlementaire », 2015) · **Mirkin-Guetzévitch** (rationalisation, 1928).",
      "**CE 1918 Heyriès** & **CE 1919 Dames Dol et Laurent** (circonstances exceptionnelles) · **Loi fondamentale allemande de 1949** (motion de défiance constructive)."
    ]},
    { h: "Plan-type (dissertation)", p: "**I. Le règne de la délibération parlementaire (XIXᵉ s.)** — la loi comme volonté générale, l'âge d'or de la IIIᵉ Rép. **II. L'avènement de l'efficacité gouvernementale (XXᵉ s.)** — autonomie de l'exécutif, rationalisation, personnalisation du pouvoir sous la Vᵉ. *(La dichotomie reste un idéal-type : la frontière est mouvante.)*" }
  ]
},
{
  part: "L'État & les gouvernants",
  title: "Les quatre figures du gouvernant",
  sub: "Le notable, le tribun, l'homme d'État, le technicien",
  blocks: [
    { h: "L'essentiel", p: "L'évolution de l'État se lit à travers ses gouvernants. Quatre **idéaux-types** se succèdent du début du XIXᵉ au XXIᵉ s. et traduisent le passage de l'État parlementaire à l'État exécutif. La politique reste l'affaire d'une **oligarchie**, fruit d'une **différenciation** de l'activité politique (Durkheim) et de sa **professionnalisation** (Weber)." },
    { h: "Les 4 figures", l: [
      "**Le notable** : élu sur son **prestige social** (aristocratie / haute bourgeoisie), politique « en amateur », système **censitaire**. Équivalent britannique : la *Gentry*.",
      "**Le tribun** : **orateur** qui emporte la conviction par l'éloquence ; figure de la IIIᵉ Rép. (« République des avocats »), porté par la politisation populaire et la campagne électorale.",
      "**L'homme / la femme d'État** : profil parlementaire **+ expérience de l'État** (Haute administration) ; culture de l'intérêt général par-delà les partis ; marque le basculement vers l'État exécutif (Blum, Mendès France, Mitterrand).",
      "**Le technicien / la technocrate** : promu pour sa **compétence technique** (culte de l'efficacité, maîtrise des dossiers) ; voie **Sciences Po / ENA**, **inversion du cursus honorum**, pantouflage & parachutage."
    ]},
    { h: "Auteurs & repères clés", l: [
      "**Durkheim** (« De la division du travail social », **1893**) · **Sieyès** (la représentation, déclinaison de la division du travail) · **Weber** (vivre *pour* et *de* la politique) · **Bourdieu** (« noblesse d'État »).",
      "Vᵉ Rép. : **élections de nov. 1958** (effondrement de la SFIO, raz-de-marée gaulliste) · **art. 23 Ct** (incompatibilité ministre/parlementaire) · **Pompidou** (1er chef de gvt jamais élu par le Parlement) · création des **IEP & de l'ENA** à la Libération.",
      "Contraste : le **spoils system** américain (« au vainqueur les dépouilles », A. Jackson) vs la neutralité et la stabilité de l'administration française (concours)."
    ]},
    { h: "⚠️ À ne pas confondre", p: "Chaque figure tire sa **légitimité** d'une source différente : le **notable** de sa position sociale, le **tribun** de son éloquence, l'**homme d'État** de son expérience de l'État, le **technicien** de son expertise. Ce sont des *idéaux-types* qui se chevauchent — pas des époques étanches." }
  ]
},
{
  part: "L'État & les gouvernants",
  title: "La « classe politique » : oligarchie, genre & origine sociale",
  sub: "La politique, affaire d'un petit nombre",
  blocks: [
    { h: "L'essentiel", p: "Malgré la démocratisation, l'activité politique reste monopolisée par un groupe relativement **homogène et hermétique** — la « **classe politique** ». Elle suppose la détention des **capitaux** social, économique et culturel, et se caractérise par une surreprésentation des **CSP+**, des **hommes** et des hauts diplômés." },
    { h: "À retenir", l: [
      "Sous la 14ᵉ législature : **81,5 %** des députés relèvent des « cadres et professions intellectuelles supérieures », **0,2 %** sont ouvriers ; en **2024**, les CSP+ représentent encore ≈ **67 %** de l'Assemblée.",
      "**Gender gap** : droit de vote des femmes en **1944** seulement (ordonnance du 21 avril) ; 1ʳᵉ femme ministre de plein exercice **Germaine Poinso-Chapuis (1947)** ; 1ʳᵉ Première ministre **Édith Cresson (1991-1992)**.",
      "La **parité** progresse surtout là où le **scrutin de liste** l'impose (municipales, régionales) ; elle reste faible dans l'accès aux fonctions exécutives."
    ]},
    { h: "Auteurs & repères clés", l: [
      "**Weber** (professionnalisation) · **Bourdieu** (reproduction des élites, « noblesse d'État »).",
      "**5 mars 1848** : suffrage universel masculin · **1936** : trois femmes sous-secrétaires d'État dans le gouvernement Blum (Brunschvicg, Lacore, Joliot-Curie)."
    ]}
  ]
},

/* =================================================================
   II — LES PARTIS POLITIQUES
   ================================================================= */
{
  part: "Les partis politiques",
  title: "Qu'est-ce qu'un parti politique ?",
  sub: "Définition, nature para-constitutionnelle & reconnaissance juridique tardive",
  blocks: [
    { h: "L'essentiel", p: "Un parti est une **organisation stable de citoyens** partageant une affinité idéologique et cherchant, par le soutien populaire, à **conquérir et exercer le pouvoir**. C'est un phénomène **para-constitutionnel** (apparu spontanément avec le suffrage universel, en marge du droit) : la France l'a longtemps **ignoré, voire combattu**, avant une reconnaissance **tardive et partielle**." },
    { h: "À retenir", l: [
      "**Définition sociologique de Weber** : les partis sont des « **sociations** », identifiables par 3 traits — leur **organisation**, leur **but** (le pouvoir), leurs **moyens** (lutte électorale + partage des postes).",
      "**Hostilité originelle** : conception individuelle du mandat ; les partis sont assimilés à des **factions** divisant la nation (décret **Le Chapelier**, 1791 ; clubs révolutionnaires comme les Jacobins).",
      "**Reconnaissance progressive** : un « **mal nécessaire** » (Tocqueville) → **art. 4 de la Ct de 1958** (« concourent à l'expression du suffrage »), enrichi en **1999** (parité) et **2008** (pluralisme & financement).",
      "**Encadrement** : loi du **10 juillet 1936** (dissolution administrative des ligues, auj. art. L. 212-1 CSI) ; loi du **11 mars 1988** (transparence financière)."
    ]},
    { h: "Auteurs & repères clés", l: [
      "**Ostrogorski** (« La Démocratie et l'organisation des partis politiques », **1903**) : les partis assurent une liaison continue société/dirigeants.",
      "**Maurice Duverger** (« Les Partis politiques », **1951**) : leur étude est le « fil d'Ariane » du labyrinthe du pouvoir.",
      "**Kelsen** (1932) : « la démocratie est nécessairement un État de partis ».",
      "Jurisprudence : **CC 11 janvier 1990** · **CEDH 7 déc. 2006 Linkov** · **CE ass. 30 oct. 1996 Fos-sur-Mer** (le parti = personne morale de droit privé)."
    ]},
    { h: "⚠️ À ne pas confondre", p: "Une **faction** n'est pas un parti : elle défend des **intérêts particuliers** contre l'intérêt général et n'admet pas le pluralisme. Par ailleurs, l'art. 4 ne reconnaît les partis que dans leur **rôle électoral** — non comme co-auteurs de la politique de l'État (≠ art. 49 italien)." }
  ]
},
{
  part: "Les partis politiques",
  title: "La typologie des partis (les 4 générations)",
  sub: "Du parti de cadres au « catch-all party »",
  blocks: [
    { h: "L'essentiel", p: "Selon l'articulation entre **organisation, électeurs et élus** (la « trinité » de **Pierre Avril**), **Duverger** distingue des types de partis correspondant à quatre générations depuis le XIXᵉ s., chacune liée à une étape du développement des sociétés démocratiques." },
    { h: "Les 4 générations", l: [
      "**1. Parti de cadres** (XIXᵉ, suffrage censitaire) : **oligarchique**, peu d'adhérents, financement capitaliste, dirigé par les notables → parti de **représentation individuelle** (droite). Naît du **groupe parlementaire** (reconnu en France en **1910**).",
      "**2. Parti de masses** (début XXᵉ, SU + cause ouvrière) : accent sur les **militants**, financement par cotisations, rôle d'**éducation politique** → parti d'**intégration sociale** (gauche). Trois voies : social-démocratie (**SPD, 1875**), travaillisme (**Labour, 1900**, « parti indirect »), socialisme (**SFIO, 1905**).",
      "**3. Parti de « peuple »** (après 1917) : prétend incarner le peuple **en totalité** → partis **communistes** (avant-garde léniniste ; **Congrès de Tours, 1920** → SFIC/PCF) et **fascistes**. Parti d'**encadrement social** (cellules, milice).",
      "**4. Parti de rassemblement / *catch-all party*** (années 50) : « parti attrape-tout », il délaisse une clientèle idéologique unique au profit de **valeurs universelles** pour séduire le plus large électorat."
    ]},
    { h: "Auteurs & repères clés", l: [
      "**Duverger** (cadres / masses) · **Norbert Elias** (passage d'une « concurrence libre et individuelle » à une concurrence « monopolistique et collective ») · **Lénine** (avant-garde militante) · **Pierre Avril** (la « trinité », 1986).",
      "**Charte d'Amiens (1906)** : la CGT proclame l'indépendance du syndicalisme vis-à-vis des partis."
    ]},
    { h: "Plan-type (dissertation)", p: "**I. Des partis de représentation (cadres) aux partis d'intégration (masses)** — sous l'effet de l'élargissement du suffrage. **II. De la radicalisation (partis « peuple ») à la dilution idéologique (catch-all)** — du militantisme de masse à la « séduction » électorale contemporaine." }
  ]
},
{
  part: "Les partis politiques",
  title: "Les fonctions des partis",
  sub: "Conquérir le pouvoir, faire médiation, socialiser",
  blocks: [
    { h: "L'essentiel", p: "Dans la démocratie représentative libérale, les partis remplissent **trois fonctions** : conquérir et exercer le pouvoir par les urnes, assurer la **médiation** entre l'État et l'opinion, et **socialiser / former** le personnel politique." },
    { h: "À retenir", l: [
      "**Conquête du pouvoir** : « machines à produire des élus ». Sélection des candidats — **primaires** (modèle américain ; PS 2006 puis 2011), **investiture** par commission (France), cooptation. Financement public partiel (seuil de **5 %** → remboursement ≈ 47,5 % des frais).",
      "**Médiation État / opinion** (Rosanvallon), à double sens : **ascendant** (relais des opinions — partis **gestionnaires** vs **protestataires** / candidatures de témoignage) et **descendant** (structuration de l'opinion : un thème lancé oblige tous les partis à se positionner — ex. l'immigration depuis les années 80, la laïcité depuis 1989).",
      "**Socialisation** : le parti **produit des leaders** (sélection, formation, construction d'une aura)."
    ]},
    { h: "Auteurs & repères clés", l: [
      "**Pierre Rosanvallon** : les partis « organisent le monde politique à partir de la vie sociale ».",
      "**Affaire du foulard de Creil (1989)** : la laïcité devient un thème clivant et structurant de l'opinion."
    ]}
  ]
},
{
  part: "Les partis politiques",
  title: "Partis & régimes politiques",
  sub: "Bipartisme, multipartisme et fait majoritaire",
  blocks: [
    { h: "L'essentiel", p: "Le phénomène partisan **détermine l'application des constitutions** : « qui connaît le droit constitutionnel classique et ignore le rôle des partis n'a qu'une vue fausse des régimes politiques » (**Duverger**). Le **système de partis** compte autant que la seule séparation des pouvoirs." },
    { h: "À retenir", l: [
      "**Bipartisme** (pays anglo-saxons) vs **multipartisme** (Europe continentale, tempéré par les coalitions).",
      "Effet de **distorsion** du bipartisme sur la séparation des pouvoirs : **convergence** (R-U, modèle de Westminster — « fusion » des pouvoirs, discipline des *whips*) ou **rigidification** (USA — « parlementarisme de couloir », cohabitation possible aux *midterms*).",
      "**Duverger** : la vraie ligne de partage oppose désormais **systèmes majoritaires** (gouvernement protégé par sa majorité) et **non-majoritaires** (survie négociée).",
      "**Fait majoritaire** sous la Vᵉ : 4 leviers — le **référendum (1962)**, le **droit de dissolution**, le **scrutin uninominal majoritaire à 2 tours**, la **présidentialisation des partis**. Dualisme PS/UMP brisé en **2017** (Macron « au centre »)."
    ]},
    { h: "Auteurs & repères clés", l: [
      "**Bagehot** (1867 : gouvernement de cabinet vs présidentiel) · **Esmein** (double critère : indépendance des organes + spécialisation des fonctions) · **Kelsen** · **Tocqueville**.",
      "Comparaison : **art. 49 Ct italienne (1947)** et **art. 21 Loi fondamentale allemande (1949)** reconnaissent davantage les partis que l'art. 4 français."
    ]},
    { h: "Plan-type (dissertation)", p: "**I. Le système de partis recompose la séparation des pouvoirs** — convergence / rigidification, dépassement de la typologie classique parlementaire/présidentiel. **II. En France, le fait majoritaire a structuré la Vᵉ République** — binarisation et présidentialisation, et leur érosion depuis 2017-2022." }
  ]
},

/* =================================================================
   III — LES CITOYENS
   ================================================================= */
{
  part: "Les citoyens",
  title: "Le sens politique de l'élection",
  sub: "Du mécanisme aristocratique à la « démocratie électorale »",
  blocks: [
    { h: "L'essentiel", p: "Le **sens politique** de l'élection a évolué alors que sa définition juridique restait stable. D'abord **mécanisme aristocratique** (sélection des « meilleurs » — **Manin**), elle devient, avec le suffrage universel (**1848**), l'expression d'une **volonté souveraine** : la « démocratie électorale »." },
    { h: "À retenir", l: [
      "Trois sens : **juridique** (procédure de sélection / investiture), **sociologique** (rituel de légitimation, réactive l'appartenance), **politique** (a évolué).",
      "**Peuple** vs **corps électoral** (≈ 48,8 millions) : le peuple n'existe qu'en vertu de la **représentation** ; ce n'est jamais « tout le peuple » qui vote.",
      "Obstacles à l'effectivité du SU : le « **cens caché** » (**Daniel Gaxie**), la **candidature officielle** (Second Empire), la **Poll Tax** (USA ségrégationniste) — puis la sanctuarisation par l'**isoloir**.",
      "**Marché électoral** (**Schumpeter**, 1942) ; **programmatisation** (Guesde, « porte-programme », 1893) ; mais aussi **personnalisation** du scrutin (Burdeau, « sociétés de l'image »)."
    ]},
    { h: "Auteurs & repères clés", l: [
      "**Bernard Manin** (« Principes du gouvernement représentatif ») · **Schumpeter** · **Daniel Gaxie** · **Georges Burdeau**.",
      "**1848** : proclamation du suffrage universel (masculin) — l'élection « appartient désormais à tous »."
    ]}
  ]
},
{
  part: "Les citoyens",
  title: "Les modes de scrutin",
  sub: "Majoritaire vs proportionnelle — représentation et représentativité",
  blocks: [
    { h: "L'essentiel", p: "Le **mode de scrutin** (la conversion des voix en sièges) n'est pas un simple outil technique : il arbitre en permanence entre l'**efficacité** (dégager une majorité) et la **représentativité** (refléter la diversité de la société), et il façonne le régime lui-même." },
    { h: "À retenir", l: [
      "4 variables : la **circonscription**, le **nombre de sièges** (uninominal / de liste), le **nombre de tours**, la **règle de conversion** (majoritaire / proportionnelle).",
      "**Scrutin majoritaire** (France : uninominal à 2 tours ; R-U : à 1 tour) : favorise le bipartisme et l'**efficacité**, mais induit le **vote utile** et une forte **distorsion voix/sièges** (UMP 2002 : 61 % des sièges pour 33 % des voix ; LREM 2017 : 54 % pour 28 %).",
      "**Représentation proportionnelle** : favorise le **pluralisme** et la **parité**, au risque de l'instabilité ; modulée par le **seuil** (5 %), la **prime majoritaire**, la taille de la circonscription.",
      "Repères : système mixte **1919-1928** · **apparentements (1951)** · « **coup** » de la proportionnelle de **1985-86** (première percée du FN) · **tripolarisation depuis 2022**."
    ]},
    { h: "Auteurs & repères clés", l: [
      "**Montesquieu** (le mode de scrutin, essentiel à la République) · **Gambetta** (« un miroir brisé », 1881) · **Aristide Briand** (« mares stagnantes », 1909) · **Duverger** (systèmes majoritaires / non-majoritaires)."
    ]},
    { h: "⚠️ À ne pas confondre", p: "**Représentation** (concept juridique : déléguer à des élus le pouvoir de vouloir *pour la Nation*) n'est pas **représentativité** (exigence sociologique de *ressemblance*, l'assemblée « miroir »). Et une meilleure représentativité ne garantit en rien la loyauté des élus : le **mandat reste libre** (non impératif)." }
  ]
},
{
  part: "Les citoyens",
  title: "La participation institutionnelle",
  sub: "Le référendum et la démocratie participative",
  blocks: [
    { h: "L'essentiel", p: "Face à la « fatigue démocratique », l'appareil institutionnel offre des outils de participation directe — le **référendum** (aujourd'hui en désuétude) et les dispositifs récents de **démocratie participative** (au bilan mitigé)." },
    { h: "À retenir", l: [
      "**Référendum** : faire valider un **objet/texte** (≠ choisir une personne). À distinguer du **plébiscite** (renouveler sa confiance à un chef — dérive « césariste » des deux Napoléon). Initiatives : gouvernementale, **RIP** (mixte, jamais abouti), **locale** (art. 72-1, révision de 2003).",
      "**Désuétude** : 9 usages en 67 ans, plus aucun depuis **2005**. Causes : légitimité présidentielle (SUD + quinquennat) et crainte du **vote-sanction** (échec de **1969** → départ de De Gaulle ; rejet du traité de **2005**).",
      "**Démocratie participative** (3 limites : participation partielle, absence de pouvoir contraignant, instrumentalisation) : **Grand Débat National** (réponse aux Gilets jaunes), **conventions citoyennes** (Climat 2020-21, le « filtre » ; Fin de vie), **CESE** revalorisé (loi org. du 15 juin 2020 ; pétitions à 150 000 signatures)."
    ]},
    { h: "Repères", l: [
      "**1969** : échec référendaire → départ de De Gaulle (« spectre intimidant »).",
      "**2005** : rejet du traité constitutionnel européen malgré une majorité parlementaire favorable.",
      "Issues du Grand Débat : Convention citoyenne pour le climat, suppression de l'**ENA** (→ INSP)."
    ]}
  ]
},
{
  part: "Les citoyens",
  title: "Les mobilisations spontanées",
  sub: "La manifestation et la « contre-démocratie »",
  blocks: [
    { h: "L'essentiel", p: "Quand les canaux institutionnels déçoivent, la société recourt aux **libertés-relais** et à la **manifestation** — historiquement « l'arme des exclus » — pour exprimer une **défiance** devenue permanente (Rosanvallon)." },
    { h: "À retenir", l: [
      "La manifestation passe d'un régime d'**autorisation** à un régime de **déclaration** (loi du **30 juin 1881**) et se **ritualise** (Jaurès, 1909).",
      "3 types : **initiatrices** (imposent un sujet : IVG, écologie), **routinières** (1er mai), de **crise politique** (mai 1968).",
      "3 rapports au pouvoir : **classique** (faire plier — retraites 1995), **complément** (relais d'une opposition parlementaire trop faible — 2023, après le 49.3), **opposition radicale** (Gilets jaunes / RIC).",
      "**« Contre-démocratie »** (Rosanvallon) : surveillance, jugement et contestation permanents, au-delà du vote ; rôle central de la **violence symbolique** (exercée aussi par l'État)."
    ]},
    { h: "Auteurs & repères clés", l: [
      "**Pierre Rosanvallon** (« La Contre-démocratie ») · le **boulangisme** (contestation précoce du parlementarisme) · « **L'Affaire du Siècle** » (l'État condamné pour préjudice écologique)."
    ]}
  ]
},

/* =================================================================
   IV — LA MÉDIATION SOCIALE
   ================================================================= */
{
  part: "La médiation sociale",
  title: "La société civile",
  sub: "Les corps intermédiaires : du long refoulement à la reconnaissance",
  blocks: [
    { h: "L'essentiel", p: "Entre l'individu et l'État, les **corps intermédiaires** (associations, syndicats) recréent du lien collectif et protègent contre la « **tyrannie de la majorité** » (**Tocqueville**). La France les a longtemps **refoulés** (héritage révolutionnaire) avant une reconnaissance tardive et toujours encadrée." },
    { h: "À retenir", l: [
      "Les **instances de médiation** ont deux fonctions : **relais** (peser collectivement) et **tampon** (protéger la société de l'omnipotence de l'État).",
      "**Long refoulement** : **décret d'Allarde** et **loi Le Chapelier** (1791) ; **art. 291 du Code pénal de 1810** (interdiction des associations de + de 20 personnes). Jaurès parle d'« individualisme étatiste ».",
      "**Reconnaissance** : **liberté syndicale (1884)** et **liberté d'association (1901)**, par Waldeck-Rousseau ; doctrine de l'« associationnisme » et **mutualisme** de **Proudhon**.",
      "Aujourd'hui : **désyndicalisation** (de 30 % à moins de 10 % de syndiqués), État « instituteur du social » (Rosanvallon) ; contrôle via la **RUP** et le **contrat d'engagement républicain** (loi « séparatisme » du 24 août 2021) ; **dissolutions administratives**."
    ]},
    { h: "Auteurs & repères clés", l: [
      "**Tocqueville** (« l'art de l'association est la science mère des sociétés démocratiques ») · **Locke** (l'État, simple mandataire de la société) · **Proudhon** (mutualisme) · **Duvergier de Hauranne**.",
      "**Accords de Matignon (1936)** & **de Grenelle (1968)** : les deux « âges d'or » du syndicalisme partenaire de l'État."
    ]},
    { h: "Plan-type (dissertation)", p: "**I. Le long refoulement des corps intermédiaires** — l'individualisme révolutionnaire et la méfiance de l'État jaloux de sa souveraineté. **II. Une reconnaissance encadrée et fragile** — les grandes lois de la IIIᵉ Rép., mais une tutelle persistante (subventions conditionnées, dissolution administrative)." }
  ]
},
{
  part: "La médiation sociale",
  title: "L'opinion publique & les médias",
  sub: "Une force diffuse, façonnée par les médias",
  blocks: [
    { h: "L'essentiel", p: "L'**opinion publique** est une force **diffuse, inorganisée et mobile** — la voix anonyme du « grand nombre ». Son histoire épouse celle des **médias**, du secret de l'Ancien Régime à l'atomisation numérique." },
    { h: "À retenir", l: [
      "Définition de **Stoetzel** : « un ensemble de jugements sur des problèmes actuels auxquels adhère une grande partie d'une société » (jugement + communication).",
      "Étapes : **ère du secret** (Ancien Régime — *Gazette* de Renaudot, 1631) → presse révolutionnaire (**art. 11 DDHC**) → « **délit de mauvais esprit** » (Restauration) → journalisme « **ascenseur politique** » (Thiers) → loi du **29 juillet 1881** (premier vrai « mass média »).",
      "Opinion « **médiatisée** » : contrôle d'État (ORTF) puis **concentration** entre grands groupes industriels (Bolloré, Arnault) ; régulation par l'**ARCOM**.",
      "Numérique : **distorsion algorithmique** (effet grossissant), **chambres d'écho** (vs délibération — **Habermas**), **atomisation** de l'opinion ; *WikiLeaks* brise le monopole des « gardiens du temple »."
    ]},
    { h: "Auteurs & repères clés", l: [
      "**Jean Stoetzel** (définition de l'opinion publique) · **Jürgen Habermas** (l'opinion naît de la délibération dans l'espace public) · **Adolphe Thiers** · **Zola** (« J'accuse… ! », 1898)."
    ]}
  ]
}

];
