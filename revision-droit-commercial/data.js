/* =====================================================================
   Données de révision — Droit commercial (L2, 2e semestre)
   Cours de M. Thibault de Ravel d'Esclapon (Université de Strasbourg).

   VERSION ÉPURÉE — recentrée sur les SUJETS / CORRIGÉS d'examen
   (« Pistes de correction » : annale Session 1 + 6 sujets blancs) et
   sur les notes Obsidian du cours. On privilégie les références et
   notions à fort rendement plutôt que l'exhaustivité.

   Chaque entrée :
     t  : type
            "concept" -> notion / concept transversal
            "art"     -> article / texte (Code de commerce, Code civil…)
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
  "T4 · Les baux commerciaux"
];

window.REPERTOIRE = [

  /* ===== Intro · Sources & histoire ===== */
  { t:"concept", th:"Intro · Sources & histoire", r:"Les usages (source privée)",
    m:"Pratiques qu'un emploi constant et répété transforme en règles de droit. Source privilégiée d'un droit commercial issu de la pratique." },
  { t:"concept", th:"Intro · Sources & histoire", r:"Usage conventionnel vs usage de droit",
    m:"Conventionnel : tire sa force de l'autonomie de la volonté, opposable aux seuls professionnels, écarté s'il est exclu. De droit : obligatoire, s'apparente à la coutume (secundum, praeter, voire contra legem)." },
  { t:"art", th:"Intro · Sources & histoire", r:"Art. 1194 C. civ.",
    m:"Les contrats obligent à toutes les suites que leur donnent l'équité, l'usage ou la loi → renvoi légal aux usages." },
  { t:"jur", th:"Intro · Sources & histoire", r:"Cass. com., 9 janv. 2001 (usages)",
    m:"Entre commerçants, les prix s'entendent « hors taxes » sauf convention contraire — illustration de l'usage conventionnel (preuve par parères / attestations de CCI)." },
  { t:"tr", th:"Intro · Sources & histoire", r:"Code de commerce (ord. 18 sept. 2000)",
    m:"Recodification à droit constant qui met fin à la décodification. Partie réglementaire codifiée en 2007." },
  { t:"jur", th:"Intro · Sources & histoire", r:"Cass. J. Vabre (1975) / CE Nicolo (1989)",
    m:"Primauté des traités régulièrement ratifiés sur la loi interne, même postérieure (sources internationales)." },

  /* ===== T1 · L'acte de commerce ===== */
  { t:"concept", th:"T1 · L'acte de commerce", r:"Acte de commerce par nature : critères",
    m:"Deux critères doctrinaux : la spéculation (Lyon-Caen & Renault) et la circulation des richesses (Thaller : l'acte s'intercale entre production et consommation)." },
  { t:"art", th:"T1 · L'acte de commerce", r:"Art. L. 110-1, 1° C. com.",
    m:"Est acte de commerce l'achat de biens meubles pour les revendre (en l'état ou après transformation). Le 2° vise les immeubles." },
  { t:"concept", th:"T1 · L'acte de commerce", r:"Achat pour revendre : conditions",
    m:"1) un achat préalable (exclut agriculture, productions intellectuelles, industries extractives) ; 2) une intention de revendre concomitante à l'achat ; 3) une intention spéculative." },
  { t:"jur", th:"T1 · L'acte de commerce", r:"Cass. com., 10 janv. 2018",
    m:"Le marchand de biens exerce une activité commerciale ; la promotion immobilière (achat pour édifier et vendre, loi du 9 juill. 1970) reste civile." },
  { t:"concept", th:"T1 · L'acte de commerce", r:"Actes de commerce par la forme",
    m:"Toujours commerciaux quels que soient leur objet et leur auteur (même isolés) : la lettre de change et les sociétés commerciales par la forme." },
  { t:"art", th:"T1 · L'acte de commerce", r:"Art. L. 110-1, 10° (lettre de change)",
    m:"La traite est acte de commerce entre toutes personnes. Acte abstrait, inopposabilité des exceptions. ⚠ Ne confère pas la qualité de commerçant." },
  { t:"art", th:"T1 · L'acte de commerce", r:"Art. L. 210-1 (sociétés par la forme)",
    m:"SNC, SCS, SARL, sociétés par actions : commerciales par la forme quel que soit leur objet ; tous leurs actes sont commerciaux." },
  { t:"concept", th:"T1 · L'acte de commerce", r:"Distinction société / associé",
    m:"Seuls les associés de SNC sont commerçants. Les associés de SARL/SA et les dirigeants ne le sont pas." },
  { t:"concept", th:"T1 · L'acte de commerce", r:"Acte de commerce par accessoire",
    m:"« L'accessoire suit le sort du principal » : règle réciproque (un acte civil peut devenir commercial, et inversement). Accessoire objectif ou subjectif." },
  { t:"concept", th:"T1 · L'acte de commerce", r:"Accessoire objectif vs subjectif",
    m:"Objectif : l'acte emprunte le caractère commercial de l'opération-support (ex. gage). Subjectif : acte accompli par un commerçant pour les besoins de son commerce." },
  { t:"jur", th:"T1 · L'acte de commerce", r:"Cass. com., 9 mai 2001 (gage)",
    m:"Le gage constitué pour garantir un acte de commerce suit le régime commercial : preuve par tous moyens (accessoire objectif)." },
  { t:"art", th:"T1 · L'acte de commerce", r:"Art. L. 110-1, 11° (cautionnement)",
    m:"Depuis l'ord. du 15 sept. 2021 : les cautionnements de dettes commerciales sont actes de commerce entre toutes personnes (critère = nature de la dette garantie)." },
  { t:"tr", th:"T1 · L'acte de commerce", r:"Ord. du 15 sept. 2021 (sûretés)",
    m:"Réforme du droit des sûretés : répute acte de commerce le cautionnement de dette commerciale (L. 110-1, 11°) ; crée le gage professionnel." },
  { t:"concept", th:"T1 · L'acte de commerce", r:"L'acte mixte",
    m:"Acte entre un commerçant et un non-commerçant : commercial à l'égard du premier, civil à l'égard du second → régime le plus souvent dualiste." },
  { t:"concept", th:"T1 · L'acte de commerce", r:"Acte mixte : régime dualiste",
    m:"Preuve : le non-commerçant prouve par tous moyens contre le commerçant, pas l'inverse (Cass. com., 12 juin 2019). Solidarité présumée entre commerçants seulement. Option de compétence pour le non-commerçant." },
  { t:"concept", th:"T1 · L'acte de commerce", r:"Acte mixte : règles uniformes",
    m:"Nullité des clauses attributives de compétence territoriale (art. 48 CPC) ; clause compromissoire inopposable au non-professionnel (art. 2061 C. civ.) ; prescription de 5 ans (art. L. 110-4)." },
  { t:"art", th:"T1 · L'acte de commerce", r:"Art. L. 110-4 C. com.",
    m:"Prescription commerciale de 5 ans (loi du 17 juin 2008), applicable aussi dans les actes mixtes." },

  /* ===== T1 · La qualité de commerçant ===== */
  { t:"art", th:"T1 · La qualité de commerçant", r:"Art. L. 121-1 C. com.",
    m:"Est commerçant celui qui exerce des actes de commerce et en fait sa profession habituelle (à titre professionnel)." },
  { t:"concept", th:"T1 · La qualité de commerçant", r:"Conditions de la qualité de commerçant",
    m:"Une profession habituelle (habitude + caractère professionnel) ET l'indépendance de l'exercice." },
  { t:"concept", th:"T1 · La qualité de commerçant", r:"Profession habituelle",
    m:"Répétition d'actes de commerce dans la durée (appréciation souveraine des juges) + caractère professionnel (moyens de subsistance, profession principale)." },
  { t:"concept", th:"T1 · La qualité de commerçant", r:"Indépendance de l'exercice",
    m:"Le commerçant agit en son nom, pour son propre compte, à ses risques et périls. Exclut salariés, VRP, agents commerciaux." },
  { t:"concept", th:"T1 · La qualité de commerçant", r:"Commercialité de fait",
    m:"Personne reconnue commerçante même sans immatriculation (par la pratique habituelle d'actes de commerce). Supporte les obligations sans bénéficier des droits (pas de propriété commerciale)." },
  { t:"jur", th:"T1 · La qualité de commerçant", r:"Cass. com., 17 juill. 2001",
    m:"Une personne morale civile (caisse de Crédit agricole) peut être commerçante de fait dans la pratique habituelle d'opérations de banque." },
  { t:"art", th:"T1 · La qualité de commerçant", r:"Art. L. 134-1 (agent commercial)",
    m:"Mandataire indépendant chargé de négocier/conclure des contrats au nom d'autrui. Activité civile : il n'est pas commerçant." },
  { t:"concept", th:"T1 · La qualité de commerçant", r:"Commerçant / artisan",
    m:"L'artisan exerce une activité civile (moins de 11 salariés). Au-delà du seuil, ou s'il spécule sur la main-d'œuvre / les marchandises → requalification commerciale." },
  { t:"concept", th:"T1 · La qualité de commerçant", r:"Commerçant / agriculteur",
    m:"L'agriculteur exerce une activité civile (critère du cycle biologique, art. L. 311-1 C. rural), y compris dans le prolongement de la production." },

  /* ===== T1 · Statut & obligations ===== */
  { t:"art", th:"T1 · Statut & obligations", r:"Art. L. 123-1 C. com. (RCS)",
    m:"Institue le registre du commerce et des sociétés : immatriculation des commerçants et des sociétés." },
  { t:"concept", th:"T1 · Statut & obligations", r:"Immatriculation au RCS : conditions",
    m:"Demande dans les 15 jours du début d'activité (personnes physiques). Immatriculation personnelle (une principale, secondaires possibles)." },
  { t:"concept", th:"T1 · Statut & obligations", r:"Immatriculation au RCS : effets",
    m:"Personnes physiques : présomption simple de la qualité de commerçant (combattue par les tiers de bonne foi). Personnes morales : conditionne la personnalité morale." },
  { t:"art", th:"T1 · Statut & obligations", r:"Art. L. 123-9 C. com.",
    m:"Les faits et actes sujets à mention ne sont opposables aux tiers que s'ils ont été publiés au registre (opposabilité)." },
  { t:"tr", th:"T1 · Statut & obligations", r:"RNE (1er janv. 2023)",
    m:"Registre national des entreprises (ord. 15 sept. 2021) : se substitue notamment au répertoire des métiers et au registre de l'agriculture. Les RCS locaux subsistent." },
  { t:"concept", th:"T1 · Statut & obligations", r:"Obligations comptables",
    m:"Livre-journal, grand livre, comptes annuels (bilan, compte de résultat, annexe). Comptes réguliers, sincères, donnant une image fidèle (art. L. 123-14)." },
  { t:"art", th:"T1 · Statut & obligations", r:"Art. L. 110-3 (preuve)",
    m:"À l'égard des commerçants, les actes de commerce se prouvent par tous moyens (liberté de la preuve)." },
  { t:"concept", th:"T1 · Statut & obligations", r:"Règles de preuve du commerçant",
    m:"Liberté de la preuve (L. 110-3). La comptabilité régulièrement tenue fait preuve entre commerçants (L. 123-23) ; force probante contre son auteur (art. 1378 C. civ.)." },
  { t:"concept", th:"T1 · Statut & obligations", r:"Statut du conjoint du commerçant",
    m:"Choix obligatoire d'un statut (loi du 22 mai 2019) : conjoint collaborateur, salarié ou associé. Le statut de collaborateur est limité à 5 ans." },

  /* ===== T2 · Le patrimoine du commerçant ===== */
  { t:"concept", th:"T2 · Le patrimoine du commerçant", r:"Unité du patrimoine (Aubry et Rau)",
    m:"Toute personne a un seul patrimoine ; tout l'actif répond de tout le passif (art. 2284 C. civ.). Rigueur atténuée par divers palliatifs." },
  { t:"tr", th:"T2 · Le patrimoine du commerçant", r:"Loi du 14 févr. 2022 (EI)",
    m:"Crée le statut de l'entrepreneur individuel : séparation de plein droit du patrimoine professionnel et du patrimoine personnel. Remplace l'EIRL." },
  { t:"art", th:"T2 · Le patrimoine du commerçant", r:"Art. L. 526-22 C. com.",
    m:"L'entrepreneur individuel dispose, de plein droit et sans formalité, d'un patrimoine professionnel (biens utiles) et d'un patrimoine personnel." },
  { t:"concept", th:"T2 · Le patrimoine du commerçant", r:"Séparation des patrimoines de l'EI",
    m:"Créanciers professionnels → patrimoine professionnel seul ; créanciers personnels → patrimoine personnel (subsidiairement, le bénéfice du dernier exercice)." },
  { t:"concept", th:"T2 · Le patrimoine du commerçant", r:"Exceptions à l'étanchéité (EI)",
    m:"Renonciation pour un engagement spécifique (L. 526-25) ; créanciers privilégiés (fisc / organismes sociaux) en cas de fraude (L. 526-24) ; réunion des patrimoines en cas de cessation ou décès." },
  { t:"art", th:"T2 · Le patrimoine du commerçant", r:"Art. L. 526-1 (insaisissabilité)",
    m:"La résidence principale est insaisissable de plein droit à l'égard des créanciers professionnels ; les autres biens fonciers le deviennent par déclaration notariée (DNI)." },
  { t:"concept", th:"T2 · Le patrimoine du commerçant", r:"Insaisissabilité de la résidence principale",
    m:"De plein droit, sans formalité (loi Macron 2015), pour les créances professionnelles nées après le 7 août 2015. Construction : lois Dutreil (2003), LME (2008), Macron (2015)." },
  { t:"concept", th:"T2 · Le patrimoine du commerçant", r:"Déclaration notariée d'insaisissabilité (DNI)",
    m:"Rend insaisissables les autres biens fonciers non affectés à l'usage professionnel. Notariée à peine de nullité, publiée." },
  { t:"jur", th:"T2 · Le patrimoine du commerçant", r:"Cass. com., 15 nov. 2016 (DNI)",
    m:"En procédure collective, le liquidateur peut contester l'opposabilité de la DNI pour reconstituer le gage commun des créanciers." },

  /* ===== T2 · Le fonds de commerce ===== */
  { t:"concept", th:"T2 · Le fonds de commerce", r:"Fonds de commerce (notion)",
    m:"Ensemble d'éléments mobiliers corporels et incorporels affectés par un commerçant à l'exploitation, pour attirer et retenir une clientèle (loi Cordelet, 1909). Pas de définition légale." },
  { t:"concept", th:"T2 · Le fonds de commerce", r:"La clientèle (élément essentiel)",
    m:"« Sans clientèle, pas de fonds. » Elle doit être certaine, commerciale et personnelle au commerçant." },
  { t:"concept", th:"T2 · Le fonds de commerce", r:"Clientèle vs achalandage",
    m:"Achalandage = clients de passage attirés par l'emplacement ; clientèle = clients fidèles attachés à la personne / au fonds." },
  { t:"concept", th:"T2 · Le fonds de commerce", r:"Caractères de la clientèle",
    m:"1) certaine et actuelle ; 2) commerciale ; 3) personnelle / propre, avec autonomie de gestion du commerçant." },
  { t:"jur", th:"T2 · Le fonds de commerce", r:"Cass. 1re civ., 7 nov. 2000",
    m:"Admet la cessibilité de la clientèle civile sous conditions → consécration du « fonds libéral »." },
  { t:"jur", th:"T2 · Le fonds de commerce", r:"Cass. 3e civ., 27 mars 2002",
    m:"Distingue la clientèle nationale (attachée à la marque du franchiseur) et la clientèle locale propre au franchisé (qui fait partie de son fonds)." },
  { t:"concept", th:"T2 · Le fonds de commerce", r:"Nature juridique du fonds",
    m:"Bien meuble incorporel. Rejet de l'universalité de droit ; le fonds ne comprend ni les dettes ni les créances." },
  { t:"jur", th:"T2 · Le fonds de commerce", r:"Cass. com., 27 janv. 1998",
    m:"Le fonds ne comprend pas les dettes : l'apport avec cession expresse des dettes ne décharge pas le cédant." },
  { t:"jur", th:"T2 · Le fonds de commerce", r:"Cass. com., 7 mars 2006",
    m:"« En fait de meubles, possession vaut titre » (art. 2276) est écartée pour le fonds, bien meuble incorporel." },
  { t:"concept", th:"T2 · Le fonds de commerce", r:"Éléments du fonds : inclus / exclus",
    m:"Inclus : clientèle, nom commercial, enseigne, droit au bail, matériel, marchandises, droits de PI. Exclus : immeubles, dettes, créances, contrats (sauf travail, assurance, édition, bail)." },
  { t:"art", th:"T2 · Le fonds de commerce", r:"Art. L. 141-5 (privilège du vendeur)",
    m:"À défaut de désignation précise, le privilège du vendeur de fonds porte sur les seuls éléments incorporels (enseigne, nom, bail, clientèle)." },

  /* ===== T2 · Opérations sur le fonds ===== */
  { t:"concept", th:"T2 · Opérations sur le fonds", r:"Location-gérance",
    m:"Contrat par lequel le propriétaire concède la location du fonds à un gérant qui l'exploite à ses risques et périls (art. L. 144-1 s.). Ordre public ; suppose un fonds (donc une clientèle)." },
  { t:"tr", th:"T2 · Opérations sur le fonds", r:"Loi du 19 juill. 2019 (location-gérance)",
    m:"Supprime la condition d'exploitation personnelle préalable du fonds (abrogation des art. L. 144-3 à L. 144-5)." },
  { t:"art", th:"T2 · Opérations sur le fonds", r:"Art. L. 144-7 (location-gérance)",
    m:"Solidarité légale du loueur avec le gérant pour les dettes d'exploitation, jusqu'à la publication du contrat." },
  { t:"concept", th:"T2 · Opérations sur le fonds", r:"Effets de la location-gérance",
    m:"Le gérant exploite, paie la redevance, n'a pas de droit au renouvellement. Tiers : solidarité du loueur jusqu'à publication (L. 144-7), déchéance du terme des dettes en fin de contrat (L. 144-9)." },
  { t:"concept", th:"T2 · Opérations sur le fonds", r:"Cession du fonds : formation",
    m:"Acte de commerce par l'objet, formalisme lourd. Critère : transmission de la clientèle. Prix déterminé, non dérisoire, sectionné en trois ; contre-lettre nulle." },
  { t:"art", th:"T2 · Opérations sur le fonds", r:"Art. L. 141-17 (opposition au prix)",
    m:"Les créanciers du vendeur peuvent faire opposition au paiement du prix (10 jours) → le prix est bloqué ; l'acquéreur qui paie quand même risque de payer deux fois." },
  { t:"tr", th:"T2 · Opérations sur le fonds", r:"Loi du 19 juill. 2019 (cession de fonds)",
    m:"Supprime les mentions obligatoires de l'ancien art. L. 141-1 → application du droit commun (obligation d'information, art. 1112-1 C. civ.)." },
  { t:"concept", th:"T2 · Opérations sur le fonds", r:"Information préalable des salariés (cession)",
    m:"Loi ESS (2014) : information 2 mois avant la vente pour permettre une offre de reprise. Sanction = amende civile (≤ 2 % du prix), non la nullité." },

  /* ===== T4 · Les baux commerciaux ===== */
  { t:"concept", th:"T4 · Les baux commerciaux", r:"Propriété commerciale",
    m:"Désigne, par abus de langage, le droit au renouvellement du bail commercial (le locataire n'a aucun droit réel). Statut protecteur né en 1926." },
  { t:"art", th:"T4 · Les baux commerciaux", r:"Art. L. 145-1 s. C. com.",
    m:"Statut des baux commerciaux : d'ordre public, il s'applique dès que ses conditions sont réunies (clauses contraires réputées non écrites)." },
  { t:"concept", th:"T4 · Les baux commerciaux", r:"Conditions d'application du statut",
    m:"Un bail + un immeuble / local + l'exploitation d'un fonds (clientèle propre, autonomie de gestion) + l'immatriculation au RCS." },
  { t:"concept", th:"T4 · Les baux commerciaux", r:"Convention d'occupation précaire",
    m:"Exclut le statut (loi Pinel, art. L. 145-5-1) : occupation justifiée par des circonstances particulières indépendantes de la volonté des parties. Ce n'est pas un bail." },
  { t:"jur", th:"T4 · Les baux commerciaux", r:"Cass. 3e civ., 19 nov. 2014",
    m:"La convention d'occupation précaire n'est pas un bail : elle est régie par la seule convention des parties." },
  { t:"concept", th:"T4 · Les baux commerciaux", r:"Bail dérogatoire",
    m:"Bail de courte durée (≤ 3 ans, baux successifs compris) ; pas de droit au renouvellement (art. L. 145-5)." },
  { t:"jur", th:"T4 · Les baux commerciaux", r:"Cass. 3e civ., 26 mars 2020",
    m:"Si le preneur reste et est laissé en possession au-delà du bail dérogatoire (un mois) → nouveau bail soumis au statut (9 ans + renouvellement)." },
  { t:"art", th:"T4 · Les baux commerciaux", r:"Art. L. 145-4 (durée)",
    m:"Durée du bail commercial : 9 ans ; faculté de résiliation triennale du preneur (d'ordre public)." },
  { t:"tr", th:"T4 · Les baux commerciaux", r:"Loi « Pinel » (18 juin 2014)",
    m:"Réforme des baux commerciaux : consacre la convention d'occupation précaire (L. 145-5-1), supprime les baux « fermes », instaure le lissage à 10 %/an du déplafonnement." },
  { t:"concept", th:"T4 · Les baux commerciaux", r:"Révision du loyer : plafonnement",
    m:"Révision triennale (L. 145-38) ; le loyer correspond à la valeur locative (L. 145-33), dans la limite du plafonnement (indice ILC / ILAT)." },
  { t:"concept", th:"T4 · Les baux commerciaux", r:"Déplafonnement",
    m:"Écarte le plafonnement si modification matérielle des facteurs locaux de commercialité (> 10 % de la valeur locative) → fixation à la valeur locative, avec lissage à 10 %/an (loi Pinel)." },
  { t:"concept", th:"T4 · Les baux commerciaux", r:"Déspécialisation",
    m:"Simple / partielle : activités connexes ou complémentaires, sur notification (L. 145-47, ordre public). Plénière / totale : activité différente, avec accord du bailleur (L. 145-48)." },
  { t:"art", th:"T4 · Les baux commerciaux", r:"Art. L. 145-47 / L. 145-48",
    m:"L. 145-47 : déspécialisation simple (activité connexe ou complémentaire). L. 145-48 : déspécialisation plénière (activité différente, accord du bailleur)." },
  { t:"concept", th:"T4 · Les baux commerciaux", r:"Droit au renouvellement : conditions",
    m:"Immatriculation + exploitation effective du fonds (3 ans), art. L. 145-8. Congé donné 6 mois à l'avance ; silence du bailleur (3 mois) = acceptation du renouvellement." },
  { t:"art", th:"T4 · Les baux commerciaux", r:"Art. L. 145-14 (indemnité d'éviction)",
    m:"Le bailleur peut toujours refuser le renouvellement, mais doit verser une indemnité d'éviction égale au préjudice (valeur marchande du fonds + frais)." },
  { t:"concept", th:"T4 · Les baux commerciaux", r:"Éviction justifiée (sans indemnité)",
    m:"Art. L. 145-17 : motif grave et légitime contre le preneur (inexécution, défaut d'exploitation) ; ou immeuble insalubre / dangereux devant être démoli." },
  { t:"art", th:"T4 · Les baux commerciaux", r:"Art. L. 145-41 (clause résolutoire)",
    m:"La clause résolutoire ne produit effet qu'un mois après un commandement demeuré infructueux (disposition d'ordre public)." },
  { t:"jur", th:"T4 · Les baux commerciaux", r:"Cass. 3e civ., 22 janv. 2014",
    m:"La condition d'immatriculation (droit au renouvellement) s'apprécie à la date de la demande en justice." },
  { t:"jur", th:"T4 · Les baux commerciaux", r:"Cass. 3e civ., 20 mars 2014",
    m:"Le statut peut s'appliquer à un emplacement stable et permanent, pas nécessairement clos et couvert." }

];
