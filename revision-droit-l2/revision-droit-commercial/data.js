/* =====================================================================
   Données de révision — Droit commercial (L2, 2e semestre)
   Cours de M. Thibault de Ravel d'Esclapon (Université de Strasbourg).

   VERSION ÉPURÉE — recentrée sur les SUJETS / CORRIGÉS d'examen
   (« Pistes de correction » : annale Session 1 + sujets blancs corrigés)
   et sur les notes Obsidian du cours.

   Révision du 2026-06-22 : les fiches « articles » (t:"art") ont été
   supprimées — les références d'articles utiles sont désormais intégrées
   directement dans les notions. Les notions (t:"concept") ont été
   restructurées et complétées à partir des sujets corrigés (régimes,
   nuances, pièges).

   Chaque entrée :
     t  : type
            "concept" -> notion / concept transversal
            "tr"      -> loi / réforme datée
            "jur"     -> jurisprudence (arrêt)
     th : thème -> chapitre (sert au filtrage ; suit le plan du cours)
     r  : référence ou intitulé (recto de la flashcard)
     m  : signification (verso de la flashcard)
   ===================================================================== */

/* Ordre d'affichage des chapitres (suit le plan du cours) */
window.THEME_ORDER = [
  "Intro · Sources & histoire",
  "T1 · L'acte de commerce",
  "T1 · La qualité de commerçant",
  "T1 · Statut & obligations",
  "T2 · Le patrimoine du commerçant",
  "T2 · Le fonds de commerce",
  "T2 · Opérations sur le fonds",
  "T4 · Les baux commerciaux",
  "T5 · Concurrence déloyale"
];

window.REPERTOIRE = [

  /* ===== Intro · Sources & histoire ===== */
  { t:"concept", th:"Intro · Sources & histoire", r:"Les usages (source privée)",
    m:"Pratiques qu'un emploi constant et répété transforme en règles de droit (source non écrite, d'origine privée). Source privilégiée d'un droit commercial issu de la pratique. Deux catégories : usages conventionnels et usages de droit. Au plan international : la lex mercatoria." },
  { t:"concept", th:"Intro · Sources & histoire", r:"Usage conventionnel vs usage de droit",
    m:"Conventionnel : tire sa force de l'autonomie de la volonté, supplétif (écarté s'il est exclu), opposable aux seuls professionnels d'une même branche ; preuve par parères (ex. prix « hors taxes » entre commerçants). De droit : obligatoire, s'apparente à la coutume (secundum, praeter, voire contra legem — ex. présomption de solidarité, anatocisme). Renvois légaux : art. 1194 C. civ., art. L. 442-1, II C. com." },
  { t:"tr", th:"Intro · Sources & histoire", r:"Code de commerce (ord. 18 sept. 2000)",
    m:"Recodification à droit constant qui met fin à la décodification. Partie réglementaire codifiée en 2007." },
  { t:"jur", th:"Intro · Sources & histoire", r:"Cass. com., 9 janv. 2001 (usages)",
    m:"Entre commerçants, les prix s'entendent « hors taxes » sauf convention contraire — illustration de l'usage conventionnel (preuve par parères / attestations de CCI)." },
  { t:"jur", th:"Intro · Sources & histoire", r:"Cass. J. Vabre (1975) / CE Nicolo (1989)",
    m:"Primauté des traités régulièrement ratifiés sur la loi interne, même postérieure (sources internationales)." },

  /* ===== T1 · L'acte de commerce ===== */
  { t:"concept", th:"T1 · L'acte de commerce", r:"Acte de commerce par nature : critères",
    m:"Acte dont l'objet emporte la commercialité. Deux critères doctrinaux : la spéculation (Lyon-Caen & Renault) et la circulation des richesses (Thaller : l'acte s'intercale entre production et consommation). Trois grands secteurs : distribution, finance, intermédiation/services." },
  { t:"concept", th:"T1 · L'acte de commerce", r:"Achat pour revendre : conditions",
    m:"Archétype de l'acte de commerce (art. L. 110-1, 1° meubles ; 2° immeubles). 1) un achat préalable (exclut agriculture, productions intellectuelles, industries extractives) ; 2) une intention de revendre concomitante à l'achat ; 3) une intention spéculative. La location d'immeubles et la promotion immobilière restent civiles." },
  { t:"concept", th:"T1 · L'acte de commerce", r:"Opérations financières (actes par nature)",
    m:"Réputées commerciales : opérations de banque (réception de fonds, crédit, gestion des moyens de paiement), change, services de paiement, émission/gestion de monnaie électronique. L'assurance à primes fixes est commerciale (mutuelles : non). Spéculation boursière du professionnel = commerciale, mais la gestion d'un portefeuille privé reste civile." },
  { t:"concept", th:"T1 · L'acte de commerce", r:"Opérations d'intermédiaire (actes par nature)",
    m:"Commerciales (art. L. 110-1, 3°) : le courtage (mise en rapport sans représentation) et la commission (le commissionnaire agit en son nom propre pour le compte d'un commettant). Aussi les « entreprises » (4°, 5°, 6°) : location de meubles, manufactures, transport, fourniture, agences/bureaux d'affaires, ventes à l'encan, spectacles publics." },
  { t:"concept", th:"T1 · L'acte de commerce", r:"Actes de commerce par la forme",
    m:"Toujours commerciaux quels que soient leur objet et leur auteur (même isolés) : (1) la lettre de change (L. 110-1, 10° ; acte abstrait, inopposabilité des exceptions ; ⚠ ne confère pas la qualité de commerçant) ; (2) les sociétés commerciales par la forme — SNC, SCS, SARL, sociétés par actions (L. 210-1) ; (3) le cautionnement de dettes commerciales (L. 110-1, 11°, depuis l'ord. 15 sept. 2021)." },
  { t:"concept", th:"T1 · L'acte de commerce", r:"Distinction société / associé",
    m:"Seuls les associés de SNC sont commerçants. Les associés de SARL/SA et les dirigeants ne le sont pas." },
  { t:"concept", th:"T1 · L'acte de commerce", r:"Acte de commerce par accessoire",
    m:"« L'accessoire suit le sort du principal » : règle réciproque (un acte civil peut devenir commercial, et inversement un acte de commerce peut devenir civil — ex. achats d'un artisan). Accessoire objectif ou subjectif." },
  { t:"concept", th:"T1 · L'acte de commerce", r:"Accessoire objectif vs subjectif",
    m:"Objectif : l'acte emprunte le caractère commercial de l'opération-support (ex. gage garantissant un acte de commerce ; actes relatifs au fonds ; cessions de contrôle de sociétés). Subjectif : acte accompli par un commerçant pour les besoins de son commerce (déteint sur contrats, quasi-contrats et délits — ex. concurrence déloyale) ; l'acte à fins privées y échappe." },
  { t:"concept", th:"T1 · L'acte de commerce", r:"Cautionnement commercial (régime)",
    m:"Sûreté personnelle (art. 2288 C. civ.). Depuis l'ord. 15 sept. 2021, le cautionnement de dette commerciale est acte de commerce par la forme (L. 110-1, 11°) : commercialité = nature de la dette garantie. Régime commercial (tribunal de commerce, preuve libre, solidarité) MAIS pas de qualité de commerçant pour la caution ; mention obligatoire maintenue (art. 2297) ; clause compromissoire inopposable à la caution non professionnelle." },
  { t:"concept", th:"T1 · L'acte de commerce", r:"L'acte mixte",
    m:"Acte entre un commerçant et un non-commerçant : commercial à l'égard du premier, civil à l'égard du second → régime le plus souvent dualiste, parfois uniforme." },
  { t:"concept", th:"T1 · L'acte de commerce", r:"Acte mixte : régime dualiste",
    m:"Preuve : le non-commerçant prouve par tous moyens contre le commerçant ; l'inverse non — le commerçant prouve selon les règles civiles (Cass. com., 12 juin 2019). Solidarité présumée entre commerçants seulement. Compétence : le commerçant assigne le non-commerçant devant la juridiction civile ; le non-commerçant a une option (civile ou commerciale)." },
  { t:"concept", th:"T1 · L'acte de commerce", r:"Acte mixte : règles uniformes",
    m:"Nullité des clauses attributives de compétence territoriale (art. 48 CPC) ; clause compromissoire inopposable au non-professionnel (art. 2061 C. civ.) ; prescription de 5 ans (art. L. 110-4)." },
  { t:"tr", th:"T1 · L'acte de commerce", r:"Ord. du 15 sept. 2021 (sûretés)",
    m:"Réforme du droit des sûretés : répute acte de commerce le cautionnement de dette commerciale (L. 110-1, 11°) ; crée le gage professionnel." },
  { t:"jur", th:"T1 · L'acte de commerce", r:"Cass. com., 10 janv. 2018",
    m:"Le marchand de biens exerce une activité commerciale ; la promotion immobilière (achat pour édifier et vendre, loi du 9 juill. 1970) reste civile." },
  { t:"jur", th:"T1 · L'acte de commerce", r:"Cass. com., 9 mai 2001 (gage)",
    m:"Le gage constitué pour garantir un acte de commerce suit le régime commercial : preuve par tous moyens (accessoire objectif)." },

  /* ===== T1 · La qualité de commerçant ===== */
  { t:"concept", th:"T1 · La qualité de commerçant", r:"Conditions de la qualité de commerçant",
    m:"Art. L. 121-1 : exercer des actes de commerce et en faire sa profession habituelle. Deux conditions cumulatives — profession habituelle (habitude + caractère professionnel) ET indépendance — complétées par des conditions tenant à la personne (capacité commerciale, absence d'incompatibilité/interdiction). ⚠ L'immatriculation est une obligation, PAS une condition." },
  { t:"concept", th:"T1 · La qualité de commerçant", r:"Profession habituelle",
    m:"Répétition d'actes de commerce (par nature) dans la durée, avec intention spéculative (appréciation souveraine des juges) + caractère professionnel (moyens de subsistance, profession principale sans être nécessairement exclusive)." },
  { t:"concept", th:"T1 · La qualité de commerçant", r:"Indépendance de l'exercice",
    m:"Le commerçant agit en son nom, pour son propre compte, à ses risques et périls. Exclut ceux qui agissent pour autrui : salariés, VRP, dirigeants sociaux, agents commerciaux (mandataires indépendants, art. L. 134-1 — activité civile)." },
  { t:"concept", th:"T1 · La qualité de commerçant", r:"Commercialité de fait (commerçant de fait)",
    m:"Personne reconnue commerçante même sans immatriculation (pratique habituelle d'actes de commerce). Supporte les obligations (comptabilité, preuve libre invocable contre lui, prescription/fiscalité commerciales) SANS bénéficier des droits — le droit perdu est la propriété commerciale. Sanctions : injonction de s'immatriculer, travail dissimulé si intentionnel." },
  { t:"concept", th:"T1 · La qualité de commerçant", r:"Commerçant / artisan",
    m:"L'artisan exerce une activité civile (moins de 11 salariés). Au-delà du seuil, ou s'il spécule sur la main-d'œuvre / les marchandises → requalification commerciale. Statuts de plus en plus rapprochés (compétence du tribunal de commerce depuis 2022)." },
  { t:"concept", th:"T1 · La qualité de commerçant", r:"Commerçant / agriculteur",
    m:"L'agriculteur exerce une activité civile (critère du cycle biologique, art. L. 311-1 C. rural), y compris dans le prolongement de la production." },
  { t:"jur", th:"T1 · La qualité de commerçant", r:"Cass. com., 17 juill. 2001",
    m:"Une personne morale civile (caisse de Crédit agricole) peut être commerçante de fait dans la pratique habituelle d'opérations de banque." },

  /* ===== T1 · Statut & obligations ===== */
  { t:"concept", th:"T1 · Statut & obligations", r:"Immatriculation : principe et formalités",
    m:"Obligation de s'immatriculer au RCS (art. L. 123-1 s.), tenu par le greffe du tribunal de commerce et centralisé à l'INPI. Personnes physiques : demande dans les 15 jours du début d'activité. Depuis le 1er janv. 2023, guichet unique alimentant le RNE (les RCS subsistent)." },
  { t:"concept", th:"T1 · Statut & obligations", r:"Immatriculation : effets (PP / PM)",
    m:"Personnes physiques : présomption SIMPLE de la qualité de commerçant (combattue par les tiers de bonne foi). Personnes morales : l'immatriculation CONDITIONNE la personnalité morale (règle de fond). Opposabilité aux tiers seulement après publication (art. L. 123-9)." },
  { t:"concept", th:"T1 · Statut & obligations", r:"Obligations comptables",
    m:"Livre-journal, grand livre, comptes annuels (bilan, compte de résultat, annexe). Comptes réguliers, sincères, donnant une image fidèle (art. L. 123-14). Conservation 10 ans." },
  { t:"concept", th:"T1 · Statut & obligations", r:"Règles de preuve du commerçant",
    m:"Liberté de la preuve : à l'égard des commerçants, les actes de commerce se prouvent par tous moyens (art. L. 110-3) — contraste avec le civil (écrit > 1 500 €, art. 1359 C. civ.). Ne joue qu'entre commerçants / contre un commerçant, pour un acte commercial. Comptabilité régulièrement tenue : preuve entre commerçants (L. 123-23) ; force probante contre son auteur (art. 1378 C. civ.). Atténuations : formalisme ad validitatem (lettre de change, sociétés, cautionnement art. 2297)." },
  { t:"concept", th:"T1 · Statut & obligations", r:"Statut du conjoint du commerçant",
    m:"Choix obligatoire d'un statut (loi du 22 mai 2019) ; présomption simple de non-commercialité du conjoint (art. L. 121-3). — Salarié : statut du salariat, subordination présumée de façon irréfragable. — Collaborateur : sans rémunération ni qualité d'associé, mandat d'administration présumé (L. 121-6), limité à 5 ans, étendu aux pacsés/concubins. — Associé : détient des parts (vote, dividendes) mais n'est pas commerçant (sauf SNC)." },

  /* ===== T2 · Le patrimoine du commerçant ===== */
  { t:"concept", th:"T2 · Le patrimoine du commerçant", r:"Unité du patrimoine (Aubry et Rau)",
    m:"Toute personne a un seul patrimoine ; tout l'actif répond de tout le passif (art. 2284 C. civ.). Rigueur atténuée par divers palliatifs (société à risque limité, insaisissabilités, statut de l'EI)." },
  { t:"concept", th:"T2 · Le patrimoine du commerçant", r:"Séparation des patrimoines de l'EI",
    m:"Loi du 14 févr. 2022 : l'entrepreneur individuel dispose, de plein droit et sans formalité, d'un patrimoine professionnel (biens « utiles » à l'activité, art. L. 526-22, R. 526-26) et d'un patrimoine personnel. Créanciers professionnels → patrimoine professionnel seul ; créanciers personnels → patrimoine personnel. Protection pour les créances nées après le 15 mai 2022." },
  { t:"concept", th:"T2 · Le patrimoine du commerçant", r:"Exceptions à l'étanchéité (EI)",
    m:"Renonciation pour un engagement spécifique, sur demande écrite d'un créancier, formalisme à peine de nullité (L. 526-25) ; créanciers privilégiés (fisc / organismes sociaux) en cas de fraude ou manquement grave (L. 526-24) ; réunion des patrimoines en cas de cessation ou de décès." },
  { t:"concept", th:"T2 · Le patrimoine du commerçant", r:"Insaisissabilité de la résidence principale",
    m:"De plein droit, sans formalité (loi Macron 2015, art. L. 526-1), à l'égard des créanciers professionnels, pour les créances nées après le 7 août 2015. Construction progressive : lois Dutreil (2003), LME (2008), Macron (2015)." },
  { t:"concept", th:"T2 · Le patrimoine du commerçant", r:"Déclaration notariée d'insaisissabilité (DNI)",
    m:"Rend insaisissables les autres biens fonciers non affectés à l'usage professionnel. Notariée à peine de nullité, publiée au fichier immobilier. En cas de cession : report sur le prix (remploi dans l'année pour la résidence principale)." },
  { t:"tr", th:"T2 · Le patrimoine du commerçant", r:"Loi du 14 févr. 2022 (EI)",
    m:"Crée le statut de l'entrepreneur individuel : séparation de plein droit du patrimoine professionnel et du patrimoine personnel. Remplace l'EIRL." },
  { t:"jur", th:"T2 · Le patrimoine du commerçant", r:"Cass. com., 15 nov. 2016 (DNI)",
    m:"En procédure collective, le liquidateur peut contester l'opposabilité de la DNI pour reconstituer le gage commun des créanciers." },

  /* ===== T2 · Le fonds de commerce ===== */
  { t:"concept", th:"T2 · Le fonds de commerce", r:"Fonds de commerce (notion)",
    m:"Ensemble d'éléments mobiliers corporels et incorporels affectés par un commerçant à l'exploitation, pour attirer et retenir une clientèle (loi Cordelet, 1909). Pas de définition légale." },
  { t:"concept", th:"T2 · Le fonds de commerce", r:"La clientèle (élément essentiel)",
    m:"« Sans clientèle, pas de fonds. » Élément central qui sert à qualifier les opérations (cession de fonds vs cession de bail ; location-gérance vs bail)." },
  { t:"concept", th:"T2 · Le fonds de commerce", r:"Clientèle vs achalandage",
    m:"Achalandage = clients de passage attirés par l'emplacement ; clientèle = clients fidèles attachés à la personne / au fonds." },
  { t:"concept", th:"T2 · Le fonds de commerce", r:"Caractères de la clientèle",
    m:"1) certaine et actuelle (pas purement virtuelle) ; 2) commerciale (les clientèles civiles, ex. fonds libéral, ne forment pas un fonds de commerce) ; 3) personnelle / propre, avec autonomie de gestion du commerçant." },
  { t:"concept", th:"T2 · Le fonds de commerce", r:"Nom commercial & enseigne",
    m:"Éléments incorporels facultatifs, cessibles avec le fonds ; propriété acquise par l'usage. Nom commercial = appellation sous laquelle le commerce est exploité et connu (≠ dénomination sociale, obligatoire — affaire Bordas). Enseigne = signe visible localisant l'établissement. Protégés non par un droit privatif mais par l'action en concurrence déloyale." },
  { t:"concept", th:"T2 · Le fonds de commerce", r:"Nature juridique du fonds",
    m:"Bien meuble incorporel. Rejet de l'universalité de droit ; le fonds ne comprend ni les dettes ni les créances." },
  { t:"concept", th:"T2 · Le fonds de commerce", r:"Éléments du fonds : inclus / exclus",
    m:"Inclus : clientèle, nom commercial, enseigne, droit au bail, matériel, marchandises, droits de PI. Exclus : immeubles, dettes, créances, contrats (sauf travail, assurance, édition, bail)." },
  { t:"jur", th:"T2 · Le fonds de commerce", r:"Cass. 1re civ., 7 nov. 2000",
    m:"Admet la cessibilité de la clientèle civile sous conditions → consécration du « fonds libéral »." },
  { t:"jur", th:"T2 · Le fonds de commerce", r:"Cass. 3e civ., 27 mars 2002",
    m:"Distingue la clientèle nationale (attachée à la marque du franchiseur) et la clientèle locale propre au franchisé (qui fait partie de son fonds)." },
  { t:"jur", th:"T2 · Le fonds de commerce", r:"Cass. com., 27 janv. 1998",
    m:"Le fonds ne comprend pas les dettes : l'apport avec cession expresse des dettes ne décharge pas le cédant." },
  { t:"jur", th:"T2 · Le fonds de commerce", r:"Cass. com., 7 mars 2006",
    m:"« En fait de meubles, possession vaut titre » (art. 2276) est écartée pour le fonds, bien meuble incorporel." },

  /* ===== T2 · Opérations sur le fonds ===== */
  { t:"concept", th:"T2 · Opérations sur le fonds", r:"Location-gérance",
    m:"Contrat par lequel le propriétaire concède la location du fonds à un gérant qui l'exploite à ses risques et périls (art. L. 144-1 s.). Qualification d'ordre public ; suppose un fonds (donc une clientèle, appréciée à la date du contrat). Le gérant a la qualité de commerçant." },
  { t:"concept", th:"T2 · Opérations sur le fonds", r:"Effets de la location-gérance",
    m:"Entre parties : le gérant exploite « en bon commerçant », paie la redevance, sans droit au renouvellement (contrat intuitu personae) ; le loueur reste propriétaire et garantit la jouissance paisible. Tiers : solidarité du loueur pour les dettes d'exploitation jusqu'à la publication (L. 144-7) ; déchéance du terme des dettes du gérant en fin de contrat (L. 144-9)." },
  { t:"concept", th:"T2 · Opérations sur le fonds", r:"Cession du fonds : formation",
    m:"Acte de commerce par l'objet, formalisme lourd. Critère : transmission de la clientèle. Prix déterminé, non dérisoire, sectionné en trois (incorporels / matériel / marchandises) ; contre-lettre dissimulant le prix nulle." },
  { t:"concept", th:"T2 · Opérations sur le fonds", r:"Information préalable des salariés (cession)",
    m:"Loi ESS (2014) : information 2 mois avant la vente pour permettre une offre de reprise. Sanction = amende civile (≤ 2 % du prix), non la nullité. ⚠ Ce n'est pas un droit de préemption — celui-ci appartient à la commune (art. L. 214-1 C. urb.)." },
  { t:"concept", th:"T2 · Opérations sur le fonds", r:"Cession du fonds : publicité & opposition",
    m:"Enregistrement puis publicité (annonces légales + BODACC) → opposabilité aux tiers. Ouvre aux créanciers du vendeur un droit d'opposition au paiement du prix (10 jours) qui bloque le prix : l'acquéreur qui paie pendant ce délai paie mal et risque de payer deux fois (art. L. 141-17)." },
  { t:"concept", th:"T2 · Opérations sur le fonds", r:"Cession du fonds : garanties du vendeur",
    m:"Vendeur impayé : privilège du vendeur (art. L. 141-5, inscription dans les 30 jours ; à défaut de désignation, porte sur les éléments incorporels ; droit de préférence et de suite) et action résolutoire (art. L. 141-6, anéantit la vente). Réciproquement, le vendeur garantit l'acquéreur : délivrance, vices, éviction (interdiction de se rétablir)." },
  { t:"concept", th:"T2 · Opérations sur le fonds", r:"Nantissement du fonds de commerce",
    m:"Sûreté réelle SANS dépossession (loi 1909, art. L. 142-1 s.) : le commerçant garantit une dette tout en continuant d'exploiter. Conventionnel ou judiciaire. Porte sur les éléments incorporels (pas les marchandises). Inscription dans les 30 jours. Confère un droit de préférence et un droit de suite." },
  { t:"tr", th:"T2 · Opérations sur le fonds", r:"Loi du 19 juill. 2019 (location-gérance)",
    m:"Supprime la condition d'exploitation personnelle préalable du fonds (abrogation des art. L. 144-3 à L. 144-5)." },
  { t:"tr", th:"T2 · Opérations sur le fonds", r:"Loi du 19 juill. 2019 (cession de fonds)",
    m:"Supprime les mentions obligatoires de l'ancien art. L. 141-1 → application du droit commun (obligation d'information, art. 1112-1 C. civ.)." },

  /* ===== T4 · Les baux commerciaux ===== */
  { t:"concept", th:"T4 · Les baux commerciaux", r:"Propriété commerciale",
    m:"Désigne, par abus de langage, le droit au renouvellement du bail commercial (le locataire n'a aucun droit réel). Statut protecteur d'ordre public né en 1926 (art. L. 145-1 s.) : il s'applique dès que ses conditions sont réunies (clauses contraires réputées non écrites)." },
  { t:"concept", th:"T4 · Les baux commerciaux", r:"Conditions d'application du statut",
    m:"Un bail + un immeuble / local + l'exploitation d'un fonds (clientèle propre, autonomie de gestion) + l'immatriculation au RCS." },
  { t:"concept", th:"T4 · Les baux commerciaux", r:"Convention d'occupation précaire",
    m:"Exclut le statut (loi Pinel, art. L. 145-5-1) : occupation justifiée par une précarité OBJECTIVE — circonstances particulières indépendantes de la volonté des parties (ex. immeuble voué à la démolition). Ce n'est pas un bail : pas de durée minimale, révocable à tout moment, modalités librement fixées." },
  { t:"concept", th:"T4 · Les baux commerciaux", r:"Bail dérogatoire",
    m:"Bail de courte durée (≤ 3 ans, baux successifs compris) par lequel les parties écartent le statut ; pas de droit au renouvellement (art. L. 145-5). ⚠ N'exige AUCUNE précarité (≠ convention d'occupation précaire). Si le preneur est laissé en possession > 1 mois après le terme → nouveau bail soumis au statut (9 ans)." },
  { t:"concept", th:"T4 · Les baux commerciaux", r:"Durée & résiliation du bail",
    m:"Durée : 9 ans (art. L. 145-4) ; faculté de résiliation triennale du preneur (d'ordre public). Clause résolutoire : ne produit effet qu'un mois après un commandement demeuré infructueux (art. L. 145-41, ordre public) ; le juge peut accorder des délais." },
  { t:"concept", th:"T4 · Les baux commerciaux", r:"Révision du loyer : plafonnement",
    m:"Révision triennale (L. 145-38) ; le loyer correspond à la valeur locative (L. 145-33), dans la limite du plafonnement (indice ILC / ILAT)." },
  { t:"concept", th:"T4 · Les baux commerciaux", r:"Déplafonnement",
    m:"Écarte le plafonnement si modification matérielle des facteurs locaux de commercialité (> 10 % de la valeur locative) → fixation à la valeur locative, avec lissage à 10 %/an (loi Pinel). En cas de baisse, la valeur locative prévaut." },
  { t:"concept", th:"T4 · Les baux commerciaux", r:"Déspécialisation",
    m:"Simple / partielle (L. 145-47, ordre public) : activités connexes ou complémentaires, sur notification ; le bailleur peut contester sous 2 mois. Plénière / totale (L. 145-48) : activité différente, accord du bailleur (réputé acquis à défaut de réponse sous 3 mois), formalisme (créanciers, colocataires) ; le tribunal peut passer outre un refus non justifié (L. 145-52) ; peut entraîner une révision du loyer." },
  { t:"concept", th:"T4 · Les baux commerciaux", r:"Droit au renouvellement : conditions",
    m:"Immatriculation + exploitation effective du fonds (3 ans), art. L. 145-8. Congé donné 6 mois à l'avance ; silence du bailleur (3 mois) = acceptation du renouvellement." },
  { t:"concept", th:"T4 · Les baux commerciaux", r:"Indemnité d'éviction",
    m:"Le bailleur peut toujours refuser le renouvellement, mais doit verser une indemnité d'éviction = préjudice (valeur du fonds + frais de réinstallation/mutation ; simple indemnité de déplacement si transfert sans perte de clientèle), art. L. 145-14. Maintien dans les lieux jusqu'au paiement. Droit de repentir (L. 145-58) : 15 jours après la décision passée en force de chose jugée, locataire encore présent ; irrévocable." },
  { t:"concept", th:"T4 · Les baux commerciaux", r:"Éviction justifiée (sans indemnité)",
    m:"Art. L. 145-17 : motif grave et légitime contre le preneur (inexécution, défaut d'exploitation) ; ou immeuble insalubre / dangereux devant être démoli (droit de priorité du locataire en cas de reconstruction)." },
  { t:"tr", th:"T4 · Les baux commerciaux", r:"Loi « Pinel » (18 juin 2014)",
    m:"Réforme des baux commerciaux : consacre la convention d'occupation précaire (L. 145-5-1), supprime les baux « fermes », instaure le lissage à 10 %/an du déplafonnement." },
  { t:"jur", th:"T4 · Les baux commerciaux", r:"Cass. 3e civ., 19 nov. 2014",
    m:"La convention d'occupation précaire n'est pas un bail : elle est régie par la seule convention des parties." },
  { t:"jur", th:"T4 · Les baux commerciaux", r:"Cass. 3e civ., 26 mars 2020",
    m:"Si le preneur reste et est laissé en possession au-delà du bail dérogatoire (un mois) → nouveau bail soumis au statut (9 ans + renouvellement)." },
  { t:"jur", th:"T4 · Les baux commerciaux", r:"Cass. 3e civ., 22 janv. 2014",
    m:"La condition d'immatriculation (droit au renouvellement) s'apprécie à la date de la demande en justice." },
  { t:"jur", th:"T4 · Les baux commerciaux", r:"Cass. 3e civ., 20 mars 2014",
    m:"Le statut peut s'appliquer à un emplacement stable et permanent, pas nécessairement clos et couvert." },

  /* ===== T5 · Concurrence déloyale ===== */
  { t:"concept", th:"T5 · Concurrence déloyale", r:"Concurrence déloyale : fondement",
    m:"Action fondée sur la responsabilité civile délictuelle (art. 1240 C. civ.), distincte de la contrefaçon. Ne suppose ni droit privatif ni faute intentionnelle : faute + préjudice + lien de causalité, le préjudice étant présumé en présence d'actes de concurrence déloyale (Cass. com., 12 févr. 2020). Sanctions : dommages-intérêts + cessation (injonction, publication)." },
  { t:"concept", th:"T5 · Concurrence déloyale", r:"Les 4 comportements déloyaux",
    m:"Dénigrement (jeter le discrédit sur un concurrent — ≠ critique licite) ; parasitisme (se placer dans le sillage d'autrui pour profiter sans bourse délier de ses investissements/notoriété) ; confusion (risque de confusion par imitation des signes distinctifs) ; désorganisation (débauchage massif, détournement de fichiers, violation d'une clause de non-concurrence)." }

];
