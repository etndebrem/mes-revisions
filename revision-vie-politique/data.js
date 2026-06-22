/* =====================================================================
   Données de révision — Vie politique contemporaine
   Cours de Benjamin Lecoq-Pujade (L2, sociologie politique).

   DECK « NOTIONS-CLÉS » (v2) — refait pour l'efficacité en flashcard.
   Règle de conception : le RECTO est un simple indice (la réponse n'y
   figure JAMAIS), le VERSO contient ce qu'il faut restituer.
     • notion  ->  recto = le terme        | verso = sa définition
     • auteur  ->  recto = l'auteur (+ œuvre ou domaine) | verso = son concept / sa thèse
     • date    ->  recto = l'événement daté | verso = sa signification / portée
     • texte   ->  recto = la loi / l'article | verso = son contenu

   Sélection : uniquement les notions, auteurs, dates et textes
   réellement mobilisés dans les sujets d'examen (corrigés Sujets 8-18).
   L'inventaire complet du cours reste dans « data-complet.js.bak ».

   Champs : t (type) · th (thème) · r (recto) · m (verso).
   ===================================================================== */

window.THEME_ORDER = [
  "Intro · Vie politique & science politique",
  "L'État · Weber : politique, État, monopole",
  "L'État · Gouvernement → gouvernance",
  "L'État · Parlementaire → exécutif",
  "L'État · Les figures du gouvernant",
  "L'État · Femmes & parité",
  "Partis & régimes politiques",
  "Citoyens · Le sens de l'élection",
  "Citoyens · Le référendum",
  "Médiation · La société civile (Tocqueville)",
  "Médiation · L'opinion publique"
];

window.REPERTOIRE = [

/* ============================================================
   1. INTRO · VIE POLITIQUE & SCIENCE POLITIQUE
   ============================================================ */
{t:"notion", th:"Intro · Vie politique & science politique", r:`La vie politique`, m:`Ensemble des activités relatives à la conquête et à l'exercice du pouvoir (Weber). Elle excède le cadre constitutionnel : le droit n'en saisit que la « face officielle ».`},
{t:"auteur", th:"Intro · Vie politique & science politique", r:`Georges Burdeau — Traité de science politique`, m:`Définition « résiduelle » de la vie politique : « des hommes qui commandent, d'autres qui obéissent, tel est le squelette irréductible de la vie politique ».`},
{t:"auteur", th:"Intro · Vie politique & science politique", r:`René Rémond (sur la vie politique française)`, m:`« Les pouvoirs régulièrement institués n'absorbent jamais toutes les forces d'une société » : le réel politique déborde toujours le cadre juridique.`},
{t:"notion", th:"Intro · Vie politique & science politique", r:`Le champ politique`, m:`(Bourdieu) Espace social autonome, régi par des règles et des usages non écrits ; à la fois champ de lutte (concurrence pour le pouvoir) et champ de force.`},
{t:"notion", th:"Intro · Vie politique & science politique", r:`Un phénomène para-constitutionnel`, m:`Réalité politique structurante née hors du texte constitutionnel et reconnue tardivement par le droit. Exemple type : les partis (art. 4) et le fait majoritaire.`},
{t:"date", th:"Intro · Vie politique & science politique", r:`1879 — École libre des sciences politiques`, m:`Naissance de « Sciences Po » : la science politique s'autonomise et décrit empiriquement ce que le juriste formaliste ne perçoit pas.`},

/* ============================================================
   2. L'ÉTAT · WEBER : POLITIQUE, ÉTAT, MONOPOLE
   ============================================================ */
{t:"auteur", th:"L'État · Weber : politique, État, monopole", r:`Max Weber — Le savant et le politique (1919)`, m:`Définit la politique par ses moyens, non ses fins : « chercher à participer au pouvoir ou à influer sur sa répartition ».`},
{t:"notion", th:"L'État · Weber : politique, État, monopole", r:`Le monopole de la violence légitime`, m:`(Weber) L'État seul peut recourir légitimement à la contrainte : il exproprie la justice privée. Deux appuis indissociables : la contrainte + un discours de légitimation (reconnaissance).`},
{t:"notion", th:"L'État · Weber : politique, État, monopole", r:`La définition sociopolitique de l'État`, m:`(Weber, Économie et société, 1921) « Entreprise politique dont la direction administrative revendique le monopole de la contrainte physique légitime » — par-delà la définition juridique (Carré de Malberg).`},
{t:"notion", th:"L'État · Weber : politique, État, monopole", r:`Le triple processus (formation de l'État)`, m:`Différenciation (la politique devient une sphère autonome) → concentration (monopole des moyens de domination) → institutionnalisation (le pouvoir survit à ses dirigeants).`},

/* ============================================================
   3. L'ÉTAT · GOUVERNEMENT → GOUVERNANCE
   ============================================================ */
{t:"notion", th:"L'État · Gouvernement → gouvernance", r:`La gouvernance`, m:`(sociologie des organisations, années 1990) Pouvoir conçu comme régulation entre acteurs publics et privés, à plusieurs niveaux. L'État passe d'une puissance de direction à une autorité de régulation.`},
{t:"notion", th:"L'État · Gouvernement → gouvernance", r:`Souveraineté : absolue en droit, relative en fait`, m:`Présentée comme absolue (« compétence de la compétence »), la souveraineté est relativisée par l'internationalisation et l'intégration supranationale (UE, OTAN).`},
{t:"auteur", th:"L'État · Gouvernement → gouvernance", r:`Harvey Mansfield Jr (sur l'exécutif)`, m:`Le « prince apprivoisé » : l'exécutif, héritier du pouvoir royal, reste limité par le Parlement et la légitimité électorale (en France, ~75 % des textes sont des projets de loi).`},
{t:"date", th:"L'État · Gouvernement → gouvernance", r:`Affaire du foulard de Creil (1989)`, m:`Médias et partis imposent un thème à l'agenda : la laïcité devient clivante. Illustre que la direction politique échappe en partie à l'État (monopole relativisé, non perdu).`},

/* ============================================================
   4. L'ÉTAT · PARLEMENTAIRE → EXÉCUTIF
   ============================================================ */
{t:"notion", th:"L'État · Parlementaire → exécutif", r:`L'État parlementaire`, m:`État dont le centre d'impulsion est le Parlement (logique de délibération). Cœur de la vie politique du XIXe s., consacré sous la IIIe République.`},
{t:"notion", th:"L'État · Parlementaire → exécutif", r:`Les 3 axes (parlementaire vs monarchique)`, m:`(1) pouvoir impersonnel (vs personnel/héréditaire) ; (2) pouvoir public (vs occulte) ; (3) règne de la loi, expression de la volonté générale (vs arbitraire) — art. 6 DDHC.`},
{t:"notion", th:"L'État · Parlementaire → exécutif", r:`L'État exécutif`, m:`Système où le centre de gravité se déplace vers l'exécutif : le « règne de la discussion » cède au « règne de l'action » (logique d'efficacité gouvernementale).`},
{t:"auteur", th:"L'État · Parlementaire → exécutif", r:`René Capitant (sur l'État exécutif)`, m:`« Gouverner, c'est légiférer » : l'exécutif ne se contente plus d'appliquer la loi, il dirige la législation (années 1930).`},
{t:"auteur", th:"L'État · Parlementaire → exécutif", r:`Nicolas Roussellier — La Force de gouverner (2015)`, m:`Dans les années 1920-30, « disqualification de la méthode parlementaire », jugée trop lente — sur fond d'antiparlementarisme.`},
{t:"notion", th:"L'État · Parlementaire → exécutif", r:`La rationalisation du parlementarisme`, m:`(Mirkin-Guetzévitch, 1928) Encadrement juridique des rapports exécutif/législatif pour assurer la stabilité gouvernementale ; radicalisée sous la Ve République.`},
{t:"texte", th:"L'État · Parlementaire → exécutif", r:`La motion de censure (art. 49 al. 2)`, m:`Moyen pour l'Assemblée de renverser le gouvernement (à ne pas confondre avec le 49.3 = adoption sans vote). Difficile à réunir : le Parlement contrôle, il n'impulse plus.`},
{t:"notion", th:"L'État · Parlementaire → exécutif", r:`Le retour de la discussion (depuis 2022)`, m:`La dichotomie parlementaire/exécutif n'est qu'un idéal-type : sans majorité absolue, le recours au 49.3 et les motions de censure font resurgir la délibération et la négociation.`},

/* ============================================================
   5. L'ÉTAT · LES FIGURES DU GOUVERNANT
   ============================================================ */
{t:"notion", th:"L'État · Les figures du gouvernant", r:`Les 4 figures du gouvernant`, m:`Idéaux-types successifs (XIXe → XXIe s.) : le notable → le tribun → l'homme/la femme d'État → le technicien.`},
{t:"notion", th:"L'État · Les figures du gouvernant", r:`Le notable`, m:`Élu sur son prestige social et sa fortune locale, sous suffrage censitaire ; pratique la politique en amateur grâce à son aisance financière.`},
{t:"notion", th:"L'État · Les figures du gouvernant", r:`Le tribun`, m:`Orateur qui emporte la conviction de l'assemblée par son éloquence ; figure centrale de la IIIe République (le régime place la délibération au cœur de la décision).`},
{t:"notion", th:"L'État · Les figures du gouvernant", r:`Les 3 facteurs de l'avènement du tribun`, m:`(1) politisation populaire (SUD 1848, lois de 1881) ; (2) mutations socio-économiques (urbanisation, liberté syndicale 1884, lois Ferry) ; (3) renouvellement du personnel (1879, « république des avocats » : Gambetta, Clemenceau, Briand).`},
{t:"notion", th:"L'État · Les figures du gouvernant", r:`Le cursus honorum (classique)`, m:`Parcours d'accession au pouvoir du local au national : mandat municipal → départemental → national. Propre au notable et au tribun.`},
{t:"notion", th:"L'État · Les figures du gouvernant", r:`L'inversion du cursus honorum`, m:`Sous la Ve, le technicien entre directement au sommet par la voie Sciences Po/ENA et la haute administration, au lieu de monter du local au national (art. 23 : incompatibilité ministre/parlementaire).`},
{t:"notion", th:"L'État · Les figures du gouvernant", r:`Le technicien / la technocrate`, m:`Gouvernant promu pour sa compétence : culte de la maîtrise des dossiers et de l'efficacité, contre le « culte de la parole ». VGE, Chirac, Hollande, Macron sont énarques.`},
{t:"auteur", th:"L'État · Les figures du gouvernant", r:`Pierre Bourdieu (sur les élites dirigeantes)`, m:`La « noblesse d'État » : élite énarque socialement homogène (forte part de CSP+), soudée par un esprit de corps (réseaux, parachutage, pantouflage).`},
{t:"date", th:"L'État · Les figures du gouvernant", r:`Législatives de 1958`, m:`Déroute des anciens partis ; gouvernement Debré majoritairement issu de la haute fonction publique ; Pompidou, 1er chef de gouvernement jamais élu par le Parlement → avènement du technicien.`},

/* ============================================================
   6. L'ÉTAT · FEMMES & PARITÉ
   ============================================================ */
{t:"notion", th:"L'État · Femmes & parité", r:`Le « gender gap » (en politique)`, m:`Écart de représentation H/F, surtout marqué aux fonctions exécutives, qui persiste alors que l'égalité de droit est acquise (vote en 1944).`},
{t:"date", th:"L'État · Femmes & parité", r:`Ordonnance du 21 avril 1944`, m:`Accorde le droit de vote et d'éligibilité aux femmes, refusé depuis la Révolution (crainte d'un vote conservateur/catholique). D'où une socialisation politique tardive.`},
{t:"date", th:"L'État · Femmes & parité", r:`Les « premières » féminines`, m:`1936 : 3 sous-secrétaires d'État (gouvernement Blum) ; 1945 : 33 députées ; 1947 : Poinso-Chapuis, 1re ministre de plein exercice ; 1991 : É. Cresson, 1re Première ministre.`},
{t:"texte", th:"L'État · Femmes & parité", r:`Les lois sur la parité (1999-2000)`, m:`Révision constitutionnelle de 1999 (art. 4) + lois sur la parité : alternance femme-homme imposée aux scrutins de liste.`},
{t:"notion", th:"L'État · Femmes & parité", r:`Pourquoi le gender gap persiste`, m:`La parité ne « mord » qu'au scrutin de liste (42 % de députées depuis 2017) ; elle reste impuissante au scrutin uninominal et dans les exécutifs (13 % en 2012). C'est d'abord un écart de pouvoir.`},

/* ============================================================
   7. PARTIS & RÉGIMES POLITIQUES
   ============================================================ */
{t:"auteur", th:"Partis & régimes politiques", r:`Maurice Duverger — Les Partis politiques (1951)`, m:`« Qui ignore le rôle des partis n'a qu'une vue fausse des régimes » ; leur étude est le « fil d'Ariane » du pouvoir. Distingue systèmes majoritaires / non-majoritaires.`},
{t:"notion", th:"Partis & régimes politiques", r:`« Même Constitution, régimes différents »`, m:`Le système de partis commande le régime : présidentialisme ou cohabitation selon la majorité (1962-2022), puis tripartition inqualifiable depuis 2022.`},
{t:"notion", th:"Partis & régimes politiques", r:`Les 2 effets du bipartisme`, m:`Sur la séparation des pouvoirs : convergence (un même parti tient l'exécutif et le législatif) ou rigidification (organes séparés tenus par des partis différents).`},
{t:"notion", th:"Partis & régimes politiques", r:`Le modèle de Westminster (R-U)`, m:`Le bipartisme produit une fusion des pouvoirs (Bagehot) : le PM est le leader de la majorité, le Cabinet sa « commission exécutive », discipline des Whips. Le parti remplace le PM sans élections.`},
{t:"notion", th:"Partis & régimes politiques", r:`Le « parlementarisme de couloir » (USA)`, m:`Convergence opportune (non structurelle) quand le président a une majorité au Congrès ; les midterms peuvent imposer un gouvernement divisé (Biden/Chambre républicaine) → rigidification.`},
{t:"notion", th:"Partis & régimes politiques", r:`Le fait majoritaire`, m:`Sous la Ve, regroupement des partis en deux blocs procurant au gouvernement une majorité stable et disciplinée derrière le Président. Réalité décisive… absente du texte constitutionnel.`},

/* ============================================================
   8. CITOYENS · LE SENS DE L'ÉLECTION
   ============================================================ */
{t:"auteur", th:"Citoyens · Le sens de l'élection", r:`Bernard Manin — Principes du gouvernement représentatif`, m:`L'élection est à l'origine un mécanisme aristocratique (sélection des « meilleurs »), distinct du tirage au sort démocratique. Le lien élection/démocratie est postérieur.`},
{t:"date", th:"Citoyens · Le sens de l'élection", r:`Suffrage universel (masculin), 1848`, m:`L'élection change de sens : de la simple désignation d'un notable, elle devient l'expression d'une volonté souveraine pesant sur la politique de l'État.`},
{t:"auteur", th:"Citoyens · Le sens de l'élection", r:`Daniel Gaxie (sur l'accès au suffrage)`, m:`Le « cens caché » : le suffrage universel proclamé en droit reste entravé en fait par des barrières sociales et culturelles → maintien prolongé des notables.`},
{t:"auteur", th:"Citoyens · Le sens de l'élection", r:`Joseph Schumpeter (sur la démocratie, 1942)`, m:`Le « marché électoral » : les dirigeants se concurrencent pour les voix comme des entreprises sur un marché ; l'élection devient un affrontement de programmes.`},
{t:"date", th:"Citoyens · Le sens de l'élection", r:`Jules Guesde, le « porte-programme » (1893)`, m:`À Roubaix, se présente non sur son nom mais comme porte-parole du programme de son parti : passage du vote de personne au vote de programme.`},
{t:"notion", th:"Citoyens · Le sens de l'élection", r:`Le mandat libre (non impératif)`, m:`L'élu n'est pas juridiquement tenu par ses promesses : la représentativité (ressemblance sociologique) ne garantit pas la loyauté politique.`},
{t:"notion", th:"Citoyens · Le sens de l'élection", r:`L'« aristocratie élective »`, m:`L'élection sélectionne toujours une élite (Manin) ; la re-personnalisation contemporaine (Burdeau, « société de l'image ») accentue le besoin d'identification à un chef.`},

/* ============================================================
   9. CITOYENS · LE RÉFÉRENDUM
   ============================================================ */
{t:"notion", th:"Citoyens · Le référendum", r:`Le référendum`, m:`Consultation du corps électoral pour valider un texte ou un objet (et non choisir une personne), à portée décisionnelle contraignante.`},
{t:"notion", th:"Citoyens · Le référendum", r:`Le plébiscite`, m:`Dérive « césariste » du référendum : l'électeur renouvelle sa confiance à un chef plutôt qu'il ne tranche un projet (les deux Napoléon). La IIIe République le proscrit 75 ans.`},
{t:"date", th:"Citoyens · Le référendum", r:`Référendum de 1969`, m:`Usage caractéristique de De Gaulle : face à l'échec (régionalisation/Sénat), il quitte ses fonctions. Devient le spectre durable du vote-sanction.`},
{t:"date", th:"Citoyens · Le référendum", r:`Référendum de 2005`, m:`Rejet du traité constitutionnel européen malgré une majorité parlementaire favorable : « traumatisme » qui dissuade d'y recourir (plus aucun référendum depuis).`},
{t:"notion", th:"Citoyens · Le référendum", r:`La désuétude du référendum`, m:`9 usages en 67 ans, rien depuis 2005. Causes : légitimité présidentielle (SUD + quinquennat) et risque du vote-sanction.`},
{t:"texte", th:"Citoyens · Le référendum", r:`RIP (art. 11) & référendum local (art. 72-1)`, m:`RIP : initiative mixte (1/5 des parlementaires + 1/10 des électeurs) — jamais aboutie. Référendum local depuis 2003, bien plus fréquent qu'au niveau national.`},

/* ============================================================
   10. MÉDIATION · LA SOCIÉTÉ CIVILE (TOCQUEVILLE)
   ============================================================ */
{t:"notion", th:"Médiation · La société civile (Tocqueville)", r:`Les instances de médiation`, m:`Associations, syndicats, groupes : structures intermédiaires (hors institutions) à double fonction — relais (peser collectivement) et tampon (protéger la société de l'omnipotence de l'État).`},
{t:"auteur", th:"Médiation · La société civile (Tocqueville)", r:`Alexis de Tocqueville — De la démocratie en Amérique`, m:`« L'art de l'association est la science mère des sociétés démocratiques » : l'association est le rempart (sur les mœurs) contre le despotisme de la majorité.`},
{t:"notion", th:"Médiation · La société civile (Tocqueville)", r:`La tyrannie de la majorité`, m:`(Tocqueville) Égalisation des conditions → individualisme → atomisation : l'individu isolé ne résiste plus au pouvoir de la majorité (« despotisme démocratique »).`},
{t:"auteur", th:"Médiation · La société civile (Tocqueville)", r:`Jean Jaurès (sur la société civile)`, m:`L'« individualisme étatiste » : depuis la Révolution, on nie tout corps intermédiaire entre l'individu et l'État (héritage de Rousseau et de Le Chapelier).`},
{t:"texte", th:"Médiation · La société civile (Tocqueville)", r:`La loi Le Chapelier (1791)`, m:`Interdit les coalitions professionnelles : « il n'y a plus que l'intérêt particulier de chaque individu et l'intérêt général ». Acte fondateur de la méfiance française envers les corps intermédiaires.`},
{t:"texte", th:"Médiation · La société civile (Tocqueville)", r:`Les lois de 1884 et 1901`, m:`Reconnaissance tardive de la société civile : 1884 = liberté syndicale ; 1901 = liberté d'association (passage de l'autorisation à la déclaration).`},
{t:"notion", th:"Médiation · La société civile (Tocqueville)", r:`Le contrat d'engagement républicain (2021)`, m:`Loi « séparatisme » : conditionne les subventions au respect des principes républicains. Forme moderne du contrôle de l'État sur les associations (avec la dissolution administrative).`},

/* ============================================================
   11. MÉDIATION · L'OPINION PUBLIQUE
   ============================================================ */
{t:"auteur", th:"Médiation · L'opinion publique", r:`Jean Stœtzel (sur l'opinion publique)`, m:`« Un ensemble de jugements sur des problèmes actuels auxquels adhère une grande partie d'une société » : deux éléments, le jugement et la communication.`},
{t:"notion", th:"Médiation · L'opinion publique", r:`L'opinion publique, force « diffuse »`, m:`Inorganisée, mobile, anonyme (l'anonymat fait sa puissance : la voix du « grand nombre »). Plutôt DES opinions publiques, saisies par leurs vecteurs (presse, sondages, réseaux).`},
{t:"auteur", th:"Médiation · L'opinion publique", r:`Pierre Bourdieu (sur les sondages)`, m:`« L'opinion publique n'existe pas » comme entité unifiée : elle est un artefact des instruments (sondages) qui prétendent la mesurer.`},
{t:"auteur", th:"Médiation · L'opinion publique", r:`Jürgen Habermas (sur l'espace public)`, m:`L'opinion publique naît de la délibération : l'échange et la confrontation des arguments dans un espace public — que le numérique fragilise.`},
{t:"notion", th:"Médiation · L'opinion publique", r:`L'opinion « médiatisée »`, m:`L'information passe par un intermédiaire qui la met en forme : du monopole d'État (ORTF) à la concentration privée (Bolloré, Arnault) ; régulation (difficile) par l'ARCOM.`},
{t:"notion", th:"Médiation · L'opinion publique", r:`Les « chambres d'écho » (numérique)`, m:`Distorsion algorithmique (une minorité active paraît majoritaire), monologue au lieu de délibération, atomisation de l'opinion (consensus de plus en plus difficile).`}

];
