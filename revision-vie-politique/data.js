/* =====================================================================
   Données de révision — Vie politique contemporaine
   Cours de Benjamin Lecoq-Pujade (L2, sociologie politique).

   DECK RESSERRÉ « format examen 1 h » — extrait des 11 fiches de
   corrigés (Sujets 8 à 18 : cadre de la vie politique, État & monopole,
   parlementaire→exécutif, figures du gouvernant, femmes & parité,
   partis & régime, élection, référendum, société civile, opinion publique).

   Objectif : ne garder que les références et notions à connaître
   IMPÉRATIVEMENT (≈ 60 cartes au lieu de l'inventaire complet).
   L'ancien deck exhaustif est conservé dans « data-complet.js.bak ».

   Chaque entrée :
     t  : type  -> "auteur" | "notion" | "texte" | "date"
     th : thème -> nom du chapitre (sert au filtrage)
     r  : référence (recto de la flashcard)
     m  : signification (verso de la flashcard)
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
   1. INTRO · VIE POLITIQUE & SCIENCE POLITIQUE  (Sujet 8)
   ============================================================ */
{t:"notion", th:"Intro · Vie politique & science politique", r:`La vie politique (définition)`, m:`Burdeau (déf. résiduelle) : « des hommes qui commandent, d'autres qui obéissent ». Weber : l'ensemble des activités relatives à la conquête et à l'exercice du pouvoir. Elle ne se réduit pas au cadre constitutionnel.`},
{t:"auteur", th:"Intro · Vie politique & science politique", r:`René Rémond`, m:`« Les pouvoirs régulièrement institués […] n'absorbent jamais toutes les forces d'une société. » Citation-clé : le droit constitutionnel ne saisit pas tout le réel politique.`},
{t:"notion", th:"Intro · Vie politique & science politique", r:`Le « champ » politique (Bourdieu)`, m:`Espace social autonome, régi par des règles et des usages non écrits : à la fois champ de lutte (concurrence pour le pouvoir) et champ de force.`},
{t:"notion", th:"Intro · Vie politique & science politique", r:`La science politique (1879)`, m:`Autonome depuis la fin du XIXe s. (École libre des sciences politiques = « Sciences Po »). Elle décrit empiriquement ce que le juriste formaliste ne saisit pas (Ostrogorski 1903, Siegfried).`},
{t:"notion", th:"Intro · Vie politique & science politique", r:`Le droit, « ni impuissant, ni tout-puissant »`, m:`Le cadre constitutionnel structure la vie politique (1958, 1962 SUD) sans l'épuiser. Preuve : le phénomène partisan, para-constitutionnel, n'est reconnu que par l'art. 4 (fait majoritaire, présidentialisation introuvables dans le texte).`},

/* ============================================================
   2. L'ÉTAT · WEBER : POLITIQUE, ÉTAT, MONOPOLE  (Sujets 8-9)
   ============================================================ */
{t:"notion", th:"L'État · Weber : politique, État, monopole", r:`La politique selon Weber`, m:`Définie par ses moyens, non par ses fins : « le fait de chercher à participer au pouvoir ou à influer sur sa répartition » (conférence de 1919).`},
{t:"notion", th:"L'État · Weber : politique, État, monopole", r:`L'État selon Weber`, m:`« Une communauté humaine qui, à l'intérieur d'un territoire déterminé, revendique pour elle-même le monopole de la violence physique légitime » (Économie et société, 1921). Déf. sociopolitique, vs la déf. juridique (Carré de Malberg).`},
{t:"notion", th:"L'État · Weber : politique, État, monopole", r:`Le triple processus historique de l'État`, m:`Différenciation (la politique devient une sphère autonome et impersonnelle) ; concentration (l'État s'approprie les moyens de domination) ; institutionnalisation (le pouvoir, exercé au nom de la collectivité, survit à ses dirigeants).`},
{t:"notion", th:"L'État · Weber : politique, État, monopole", r:`Le monopole de la violence légitime`, m:`L'État exproprie les individus de la faculté de se faire justice eux-mêmes. Deux moyens indissociables : la contrainte physique ET un discours de légitimation (reconnaissance de ceux sur qui elle s'exerce).`},

/* ============================================================
   3. L'ÉTAT · GOUVERNEMENT → GOUVERNANCE  (Sujet 9)
   ============================================================ */
{t:"notion", th:"L'État · Gouvernement → gouvernance", r:`Du gouvernement à la gouvernance`, m:`Gouvernement = direction monopolistique, centralisée, nationale. Gouvernance (années 1990) = régulation entre acteurs publics et privés, à plusieurs niveaux (local, national, supranational). L'État passe d'une puissance de direction à une autorité de régulation.`},
{t:"notion", th:"L'État · Gouvernement → gouvernance", r:`La souveraineté, un absolu relatif`, m:`Présentée en droit comme absolue (« compétence de la compétence »), elle est relativisée par l'internationalisation et l'intégration supranationale (UE, OTAN).`},
{t:"notion", th:"L'État · Gouvernement → gouvernance", r:`Le « prince apprivoisé » (Mansfield Jr)`, m:`L'exécutif, héritier du pouvoir royal, reste contrôlé par le Parlement et la légitimité électorale. En France, ~75 % des textes sont des projets de loi : l'exécutif garde l'impulsion sans avoir « perdu » le monopole, mais l'exerce en réseau.`},
{t:"notion", th:"L'État · Gouvernement → gouvernance", r:`Les contre-pouvoirs de la direction politique`, m:`Partis et médias structurent l'agenda (laïcité avec le foulard de Creil, 1989 ; immigration avec le FN). La puissance de l'argent (lobbying, concentration des médias, « Musk ») pèse aussi : le monopole est relativisé, non perdu.`},

/* ============================================================
   4. L'ÉTAT · PARLEMENTAIRE → EXÉCUTIF  (Sujet 10)
   ============================================================ */
{t:"notion", th:"L'État · Parlementaire → exécutif", r:`L'État parlementaire`, m:`État dont le centre d'impulsion réside au Parlement (chambres représentant la volonté du pays, pouvoir législatif et budgétaire). Logique de délibération ; cœur de la vie politique du XIXe s.`},
{t:"notion", th:"L'État · Parlementaire → exécutif", r:`Les 3 axes (vs l'État monarchique)`, m:`(1) conception impersonnelle du pouvoir (vs personnelle/héréditaire) ; (2) pouvoir public (vs occulte) ; (3) règne de la loi (vs arbitraire), art. 6 DDHC. Consécration sous la IIIe République.`},
{t:"notion", th:"L'État · Parlementaire → exécutif", r:`L'État exécutif`, m:`Système où le centre de gravité s'est déplacé vers l'exécutif : le « règne de la discussion » cède la place au « règne de l'action » (logique d'efficacité gouvernementale).`},
{t:"auteur", th:"L'État · Parlementaire → exécutif", r:`Capitant — « gouverner, c'est légiférer »`, m:`Années 30 : gouverner n'est plus agir dans le cadre des lois mais diriger la législation elle-même. L'exécutif impulse et maîtrise le législatif.`},
{t:"auteur", th:"L'État · Parlementaire → exécutif", r:`Roussellier — « La Force de gouverner » (2015)`, m:`Dans les années 20-30, « disqualification de la méthode parlementaire », jugée inadaptée — doublée d'un antiparlementarisme.`},
{t:"notion", th:"L'État · Parlementaire → exécutif", r:`La rationalisation du parlementarisme (Mirkin-Guetzévitch, 1928)`, m:`Encadrement juridique des rapports exécutif/législatif pour assurer la stabilité gouvernementale ; radicalisée sous la Ve République (fait majoritaire).`},
{t:"notion", th:"L'État · Parlementaire → exécutif", r:`Un idéal-type & le retour de la discussion`, m:`La dichotomie reste un idéal-type aux dynamiques évolutives : depuis 2022 (Assemblée sans majorité, recours au 49.3, motions de censure), la délibération resurgit. NB : la motion de censure = art. 49 al. 2 (≠ 49.3).`},

/* ============================================================
   5. L'ÉTAT · LES FIGURES DU GOUVERNANT  (Sujets 11-12)
   ============================================================ */
{t:"notion", th:"L'État · Les figures du gouvernant", r:`Les 4 figures du gouvernant`, m:`Idéaux-types se succédant du début du XIXe au XXIe s. : le notable → le tribun → l'homme/la femme d'État → le technicien.`},
{t:"notion", th:"L'État · Les figures du gouvernant", r:`Le notable`, m:`Élu sur son prestige social et sa fortune locale, sous suffrage censitaire ; pratique la politique en amateur grâce à son aisance financière.`},
{t:"notion", th:"L'État · Les figures du gouvernant", r:`Le tribun`, m:`Orateur qui, à la tribune, emporte par son éloquence la conviction de l'assemblée. Figure centrale de la IIIe République (la délibération est au cœur du régime).`},
{t:"notion", th:"L'État · Les figures du gouvernant", r:`Les 3 facteurs de l'avènement du tribun`, m:`(1) Politisation populaire (SUD 1848, campagnes, lois de 1881 sur la presse et la réunion) ; (2) mutations socio-éco (urbanisation/exode rural, liberté syndicale de 1884, lois Ferry/laïcité) ; (3) renouvellement du personnel (1879, « république des avocats » : Gambetta, Clemenceau, Waldeck-Rousseau, Briand).`},
{t:"notion", th:"L'État · Les figures du gouvernant", r:`Le technicien / la technocrate`, m:`Dernière figure : promu·e aux responsabilités à raison de sa compétence. Culte de la maîtrise des dossiers et de l'efficacité, contre le « culte de la parole ».`},
{t:"notion", th:"L'État · Les figures du gouvernant", r:`L'inversion du cursus honorum`, m:`Sous la Ve, au lieu de monter du local au national, le technicien entre au sommet par la voie royale Sciences Po/ENA (1945, auj. INSP) et la haute administration. Porté par l'art. 23 (incompatibilité ministre/parlementaire). VGE, Chirac, Hollande, Macron = énarques.`},
{t:"auteur", th:"L'État · Les figures du gouvernant", r:`La « noblesse d'État » (Bourdieu)`, m:`Élite énarque homogène (CSP+ : de 81,5 % à 67 % des députés depuis 2022), soudée par un esprit de corps. Coupée du terrain : parachutage, pantouflage.`},
{t:"date", th:"L'État · Les figures du gouvernant", r:`De Gaulle, le « funeste régime des partis » & 1958`, m:`La critique gaullienne ouvre la voie au technicien. Aux législatives de 1958, déroute des anciens partis ; le 1er gouvernement Debré est majoritairement issu de la haute fonction publique ; Pompidou sera le 1er chef de gouvernement jamais élu par le Parlement.`},

/* ============================================================
   6. L'ÉTAT · FEMMES & PARITÉ  (Sujet 13)
   ============================================================ */
{t:"notion", th:"L'État · Femmes & parité", r:`Le « gender gap »`, m:`Écart de représentation H/F, surtout marqué aux fonctions exécutives. Il persiste alors même que l'égalité de droit est acquise depuis 1944.`},
{t:"notion", th:"L'État · Femmes & parité", r:`Le refus révolutionnaire & la conquête du vote`, m:`Droit de vote refusé dès la Révolution (crainte d'un vote trop catholique/conservateur, dépendance civile de la femme) → socialisation politique tardive. Ordonnance du 21 avril 1944.`},
{t:"date", th:"L'État · Femmes & parité", r:`La chronologie des conquêtes`, m:`1936 : 3 sous-secrétaires d'État (Blum) — Brunschvicg, Lacore, Joliot-Curie ; 1944 : vote ; 1945 : 33 femmes à l'AN ; 1946 : Sénat ; 1947 : Poinso-Chapuis, 1re ministre de plein exercice ; 1991 : Cresson, 1re Première ministre.`},
{t:"notion", th:"L'État · Femmes & parité", r:`La parité (1999 + lois)`, m:`Révision constitutionnelle de 1999 (objectif d'égal accès aux mandats, art. 4) + lois sur la parité : alternance femme-homme imposée aux scrutins de liste.`},
{t:"notion", th:"L'État · Femmes & parité", r:`Pourquoi le gap persiste : le mode de scrutin`, m:`La parité ne « mord » qu'au scrutin de liste : quasi-parité aux municipales/régionales, 42 % de députées depuis 2017. Mais au scrutin uninominal et dans les fonctions exécutives (non soumises à l'alternance), l'écart demeure (13 % des exécutifs en 2012). C'est d'abord un écart de pouvoir.`},

/* ============================================================
   7. PARTIS & RÉGIMES POLITIQUES  (Sujet 14)
   ============================================================ */
{t:"auteur", th:"Partis & régimes politiques", r:`Duverger — « une vue fausse des régimes »`, m:`« Qui connaît le droit constitutionnel classique et ignore le rôle des partis n'a qu'une vue fausse des régimes politiques. » L'étude des partis est le « fil d'Ariane » du labyrinthe du pouvoir.`},
{t:"notion", th:"Partis & régimes politiques", r:`Même Constitution, régimes différents`, m:`Le système de partis commande la lecture du régime : oscillation présidentialisme/cohabitation (1962-2022), tripartition inqualifiable depuis 2022. L'essentiel n'est plus le degré de séparation des pouvoirs, mais l'existence (ou non) d'une majorité.`},
{t:"notion", th:"Partis & régimes politiques", r:`Une interaction réciproque`, m:`La Constitution façonne aussi les partis : le scrutin majoritaire à deux tours et l'élection présidentielle de 1962 ont bipolarisé la vie politique. Partis et Constitution se lisent ensemble.`},
{t:"notion", th:"Partis & régimes politiques", r:`Systèmes majoritaires vs non-majoritaires (Duverger)`, m:`Nouvelle ligne de partage : systèmes majoritaires (bipartisme, le gouvernement est protégé par sa majorité) vs systèmes non-majoritaires (multipartisme, survie négociée en coalition).`},
{t:"notion", th:"Partis & régimes politiques", r:`Les 2 effets du bipartisme`, m:`Sur la séparation des pouvoirs : convergence (un même parti tient l'exécutif et le législatif) ou rigidification (organes séparés tenus par des partis différents).`},
{t:"notion", th:"Partis & régimes politiques", r:`R-U : la fusion des pouvoirs (Bagehot)`, m:`Modèle de Westminster : le PM est le leader de la majorité, le Cabinet sa « commission exécutive » ; pas d'incompatibilité, discipline des Whips. Renversement rare : le parti remplace le PM sans élections (Thatcher, Johnson).`},
{t:"notion", th:"Partis & régimes politiques", r:`USA : convergence limitée`, m:`Séparation « étanche » modulée : « parlementarisme de couloir » quand le président a une majorité (convergence opportune). Mais les midterms peuvent imposer un gouvernement divisé (Biden/Chambre républicaine) = rigidification. Partis = outils de conquête, non de gouvernement.`},

/* ============================================================
   8. CITOYENS · LE SENS DE L'ÉLECTION  (Sujet 15)
   ============================================================ */
{t:"auteur", th:"Citoyens · Le sens de l'élection", r:`L'élection, mécanisme aristocratique (Manin)`, m:`À l'origine (XVIIIe s.), l'élection sélectionne les « meilleurs » : elle investit une oligarchie (Principes du gouvernement représentatif). Le lien élection/démocratie est postérieur.`},
{t:"date", th:"Citoyens · Le sens de l'élection", r:`La démocratisation (1848)`, m:`Le suffrage universel fait de l'élection l'expression d'une volonté souveraine. Isoloir, « marché électoral » (Schumpeter, 1942), vote de programme (Guesde, « porte-programme », 1893).`},
{t:"notion", th:"Citoyens · Le sens de l'élection", r:`Le « cens caché » (Gaxie)`, m:`Suffrage universel proclamé en droit mais entravé en fait par des barrières sociales et culturelles → maintien prolongé des élites notabiliaires.`},
{t:"notion", th:"Citoyens · Le sens de l'élection", r:`Le mandat libre`, m:`L'élu n'est pas juridiquement tenu par ses promesses : la ressemblance sociologique (représentativité) ne garantit pas la loyauté politique une fois le siège obtenu.`},
{t:"notion", th:"Citoyens · Le sens de l'élection", r:`La re-personnalisation (Burdeau)`, m:`Depuis le milieu du XXe s., retour de l'autorité incarnée (« société de l'image », besoin d'identification à un chef). L'élection demeure une « aristocratie élective ».`},

/* ============================================================
   9. CITOYENS · LE RÉFÉRENDUM  (Sujet 16)
   ============================================================ */
{t:"notion", th:"Citoyens · Le référendum", r:`Le référendum`, m:`Consultation du corps électoral pour valider un texte ou un objet (et non choisir une personne), à portée décisionnelle contraignante.`},
{t:"notion", th:"Citoyens · Le référendum", r:`Le plébiscite`, m:`Variante « césariste » : invite l'électeur à renouveler sa confiance à un chef plutôt qu'à valider un projet (dérive sous les deux Napoléon). La IIIe République le proscrit 75 ans.`},
{t:"date", th:"Citoyens · Le référendum", r:`De Gaulle & le référendum (1958)`, m:`Restauré pour légitimer l'État face aux partis ; aussi un moyen de court-circuiter le Parlement et de lier le sort du chef au texte. L'échec de 1969 entraîne son départ.`},
{t:"notion", th:"Citoyens · Le référendum", r:`La désuétude`, m:`9 usages en 67 ans, rien depuis 2005. Causes : légitimité présidentielle (SUD + quinquennat), risque du vote-sanction, traumatisme de 2005 (rejet du traité constitutionnel européen).`},
{t:"texte", th:"Citoyens · Le référendum", r:`RIP & référendum local`, m:`RIP (art. 11, initiative mixte : 1/5 des parlementaires + 1/10 du corps électoral — jamais abouti). Référendum local (art. 72-1, depuis 2003) : bien plus fréquent qu'au niveau national.`},

/* ============================================================
   10. MÉDIATION · LA SOCIÉTÉ CIVILE (TOCQUEVILLE)  (Sujet 17)
   ============================================================ */
{t:"notion", th:"Médiation · La société civile (Tocqueville)", r:`Les instances sociales de médiation`, m:`Associations, syndicats, groupes : structures intermédiaires hors du système institutionnel. Double fonction : relais (peser collectivement sur les décisions) et tampon (protéger la société de l'omnipotence de l'État).`},
{t:"notion", th:"Médiation · La société civile (Tocqueville)", r:`L'enchaînement tocquevillien`, m:`Égalisation des conditions → individualisme → atomisation des rapports sociaux → « tyrannie de la majorité » / « despotisme démocratique » (le pouvoir, au nom du plus grand nombre, devient liberticide).`},
{t:"auteur", th:"Médiation · La société civile (Tocqueville)", r:`Tocqueville — « l'art de l'association »`, m:`« L'art de l'association est la science mère des sociétés démocratiques. » Seul rempart (agissant sur les mœurs) contre le despotisme de la majorité : l'association recrée du lien collectif et rend la société capable de résistance.`},
{t:"notion", th:"Médiation · La société civile (Tocqueville)", r:`La méfiance française`, m:`Loi Le Chapelier (1791) : tout corps intermédiaire est une « société partielle » (Rousseau) corrompant la volonté générale → « individualisme étatiste » (Jaurès). Reconnaissance tardive : 1884 (syndicats), 1901 (associations).`},
{t:"notion", th:"Médiation · La société civile (Tocqueville)", r:`L'encadrement contemporain`, m:`L'État garde le dernier mot : reconnaissance d'utilité publique, dissolution administrative, contrat d'engagement républicain (loi « séparatisme », 2021).`},

/* ============================================================
   11. MÉDIATION · L'OPINION PUBLIQUE  (Sujet 18)
   ============================================================ */
{t:"auteur", th:"Médiation · L'opinion publique", r:`L'opinion publique (Stœtzel)`, m:`« Un ensemble de jugements sur des problèmes actuels auxquels adhère une grande partie des membres d'une société. » Deux éléments : le jugement (prise de position) et la communication.`},
{t:"notion", th:"Médiation · L'opinion publique", r:`Une force diffuse`, m:`Inorganisée (ni siège, ni statuts, ni porte-parole), mobile et anonyme (l'anonymat fait sa puissance : la voix du « grand nombre »). Plutôt DES opinions publiques, étudiées par leurs vecteurs (presse, sondages, réseaux).`},
{t:"notion", th:"Médiation · L'opinion publique", r:`L'opinion « médiatisée »`, m:`L'information passe par un intermédiaire qui la met en forme : du monopole d'État (ORTF) à la concentration privée (Bolloré, Arnault). Régulation (difficile) par l'ARCOM.`},
{t:"auteur", th:"Médiation · L'opinion publique", r:`Bourdieu & Habermas`, m:`Bourdieu : « l'opinion publique n'existe pas » (comme entité unifiée). Habermas : l'opinion publique naît de la délibération (échange et confrontation dans un espace public).`},
{t:"notion", th:"Médiation · L'opinion publique", r:`Le numérique`, m:`Distorsion algorithmique (une minorité active paraît majoritaire) ; « chambres d'écho » (monologue au lieu de la délibération) ; atomisation de l'opinion (consensus de plus en plus difficile).`}

];
