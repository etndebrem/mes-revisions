/* =====================================================================
   Fiches de synthèse — Droit commercial (L2, 2e semestre)
   Cours de M. Thibault de Ravel d'Esclapon (Université de Strasbourg).

   Couvre TOUS les sujets déjà traités (annale Session 1 + 6 sujets
   blancs = 21 questions de cours, Titres 1/2/4) ET les thèmes du cours
   non encore abordés en sujet (badge « non traité ») : histoire &
   sources publiques/internationales, comptabilité & preuve, juridictions
   commerciales, statut du conjoint, éléments du fonds, garanties du
   vendeur, obligations & fin du bail, cession/sous-location, et tout le
   Titre 5 (concurrence déloyale, pratiques commerciales).

   Chaque fiche :
     part   : "Introduction" | "Titre 1 — Le commerçant"
              | "Titre 2 — Le patrimoine du commerçant"
              | "Titre 4 — Les baux commerciaux"
              | "Titre 5 — L'encadrement de l'activité"
              | "📜 Articles-clés — …" (fiches centrées article : objet/conditions/effets)
     title  : intitulé de la fiche
     sub    : sous-titre / accroche
     exam   : true  -> déjà tombé en sujet (badge 📌 + refs)
              false -> thème du cours non encore abordé (badge 🆕)
     refs   : (exam=true) le(s) sujet(s)/question(s) concernés
     blocks : [{h: titre, p: paragraphe}] ou [{h: titre, l: [puces]}]

   Mini-formatage dans le texte : **gras**, *italique* (arrêts).
   ===================================================================== */

window.FICHE_PARTS = [
  "Introduction",
  "Titre 1 — Le commerçant",
  "Titre 2 — Le patrimoine du commerçant",
  "Titre 4 — Les baux commerciaux",
  "Titre 5 — L'encadrement de l'activité",
  "📜 Articles-clés — Acte de commerce & commerçant",
  "📜 Articles-clés — Patrimoine & fonds de commerce",
  "📜 Articles-clés — Baux commerciaux"
];

window.FICHES = [

/* =================================================================
   INTRODUCTION
   ================================================================= */

{
  part: "Introduction",
  title: "Les usages commerciaux (source d'origine privée)",
  sub: "Le particularisme d'un droit né de la pratique",
  exam: true,
  refs: "Sujet blanc n°4 · Q1",
  blocks: [
    { h: "L'essentiel", p: "Le droit commercial, issu de la pratique, accorde une place privilégiée aux **usages** — *pratiques qu'un emploi constant et répété transforme en règles de droit*. Ils manifestent son particularisme et sa continuité historique." },
    { h: "Les deux types d'usages", l: [
      "**Usages conventionnels** — tirent leur force de l'**autonomie de la volonté** ; s'appliquent **sauf s'ils sont expressément écartés** ; opposables aux seuls **professionnels** d'une même place/branche (pas aux consommateurs) ; **preuve** à la charge de celui qui les invoque (*parères*, attestations de CCI). Ex. : entre commerçants, les prix s'entendent « hors taxes » sauf convention contraire (*Cass. com., 9 janv. 2001*).",
      "**Usages de droit** — **obligatoires**, ils s'apparentent à la **coutume** (*secundum*, *praeter*, voire *contra legem*). La loi y renvoie (**art. 1194 C. civ.** ; **art. L. 442-1, II C. com.**)."
    ]},
    { h: "Plan-type", p: "**I. Les usages conventionnels** (fondement volontariste, caractère supplétif, preuve). **II. Les usages de droit** (force obligatoire, renvois légaux, parenté avec la coutume)." },
    { h: "⚠️ Piège à éviter", p: "Distinguer l'usage **conventionnel** (supplétif, à prouver, opposable aux seuls professionnels) de l'usage **de droit** (obligatoire, force coutumière) — c'est l'axe naturel du plan." }
  ]
},

{
  part: "Introduction",
  title: "Histoire & sources publiques et internationales",
  sub: "Une construction de l'histoire aux sources multiples",
  exam: false,
  blocks: [
    { h: "L'essentiel", p: "Le droit commercial est une **construction de l'histoire**, née de la pratique marchande, dotée de sources **multiples** : écrites et coutumières, d'origine **publique** ou **privée**, internes et internationales." },
    { h: "Repères historiques", l: [
      "**Moyen Âge** : essor du *droit des marchands* (foires de Champagne, **juridictions consulaires** — édit de Charles IX, 1563).",
      "**Ordonnances de Colbert** : « **Code Savary** » (1673, commerce de terre) et 1681 (maritime) → le droit commercial devient **autonome** (perte de son caractère international).",
      "**Révolution** : **liberté du commerce et de l'industrie** (décret d'Allarde + loi Le Chapelier, 1791).",
      "**Code de commerce 1807** : codification ratée (reproduit l'ordonnance de 1673, déjà obsolète face au capitalisme — Ripert). **Recodification à droit constant** par l'**ord. du 18 sept. 2000**."
    ]},
    { h: "Sources étatiques & internationales", l: [
      "**Étatiques** : Constitution, **Code de commerce** + droit commun des obligations, **inflation des ordonnances** (réforme des sûretés 2021, loi PACTE 2019) ; **jurisprudence** au fort pouvoir créateur (juges consulaires, approche économique → pragmatisme et souplesse).",
      "**Internationales** : **traités** (primauté sur la loi — *J. Vabre*, 1975 ; *Nicolo*, 1989) ; uniformisation par **superposition** (Convention de Vienne, 1980, vente internationale) ou **substitution** (Conventions de Genève, 1930-31, effets de commerce) ; **droit de l'UE** (concurrence, propriété industrielle, CJUE)."
    ]},
    { h: "⚠️ À savoir", p: "Tendance lourde : le recul de la distinction **commerçant / non-commerçant** au profit de **professionnel / non-professionnel** (poussée du droit de la consommation, loi Hamon 2014)." }
  ]
},

/* =================================================================
   TITRE 1 — LE COMMERÇANT
   ================================================================= */

{
  part: "Titre 1 — Le commerçant",
  title: "Les actes de commerce par nature — l'achat pour revendre",
  sub: "L'archétype de l'acte de commerce (art. L. 110-1, 1° et 2°)",
  exam: true,
  refs: "Annale officielle · Q1",
  blocks: [
    { h: "L'essentiel", p: "Archétype de l'**acte de commerce par nature**, l'achat pour revendre illustre les deux critères doctrinaux de commercialité : la **spéculation** (Lyon-Caen et Renault) et la **circulation des richesses** (Thaller — l'acte s'intercale entre production et consommation)." },
    { h: "Les conditions", l: [
      "Un **achat préalable** → exclut les productions sans achat : **agriculture**, productions **intellectuelles** (auteurs, inventeurs), **industries extractives** (sauf mines, par volonté du législateur) ;",
      "Une **intention de revendre concomitante** à l'achat (peu importe que la revente ait effectivement lieu) ;",
      "Une **intention spéculative** (recherche d'un profit) → à défaut, vente **civile**."
    ]},
    { h: "Le domaine", l: [
      "Vise les **meubles** (al. 1°) **et les immeubles** (al. 2°) ; mais l'achat d'immeuble pour **édifier et vendre** reste **civil** (promotion immobilière, loi du 9 juill. 1970) — le **marchand de biens** est commercial (*Cass. com., 10 janv. 2018*) ;",
      "Peu importe la revente **en l'état ou après transformation** ; recouvre toute la **distribution** ;",
      "La **location d'immeubles** (civile) n'est pas visée par l'art. L. 110-1."
    ]},
    { h: "Plan-type", p: "**I. Les conditions de l'achat pour revendre.** **II. Le domaine et les précisions.**" },
    { h: "⚠️ Piège à éviter", p: "La **promotion immobilière** (achat pour construire et vendre) reste **civile** ; la **location d'immeubles** n'est pas un acte de commerce. C'est l'**intention spéculative** qui commande." }
  ]
},

{
  part: "Titre 1 — Le commerçant",
  title: "Les actes de commerce par la forme",
  sub: "Commerciaux quels que soient leur objet et leur auteur",
  exam: true,
  refs: "Sujet blanc n°1 · Q1",
  blocks: [
    { h: "L'essentiel", p: "Ces actes sont **toujours commerciaux**, peu importe leur objet ou leur auteur, même accomplis isolément par un non-commerçant. Deux : la **lettre de change** et les **sociétés commerciales par la forme**." },
    { h: "La lettre de change (art. L. 110-1, 10°)", p: "**Effet de commerce** ; **acte de commerce entre toutes personnes** (quiconque la signe en accomplit un) ; régime **rigoureux** (formalisme L. 511-1 s., **acte abstrait**, **inopposabilité des exceptions**). ⚠️ Elle **ne confère pas** la qualité de commerçant. À distinguer du **chèque** (civil ou commercial selon l'obligation sous-jacente)." },
    { h: "Les sociétés commerciales par la forme (art. L. 210-1)", p: "**SNC, SCS, SARL, sociétés par actions** : commerciales **quel que soit leur objet** ; tous leurs actes sont commerciaux. ⚠️ Distinction **société / associé** : seuls les associés de **SNC** sont commerçants (pas SARL/SA). Cas des **SEL** (forme commerciale, objet civil)." },
    { h: "Plan-type", p: "**I. La lettre de change.** **II. Les sociétés commerciales par la forme.**" },
    { h: "⚠️ Piège à éviter", p: "La lettre de change est commerciale **mais ne donne pas** la qualité de commerçant ; et la société est commerciale **sans que ses associés** le soient (sauf SNC)." }
  ]
},

{
  part: "Titre 1 — Le commerçant",
  title: "Les actes de commerce par accessoire",
  sub: "« L'accessoire suit le sort du principal »",
  exam: true,
  refs: "Sujet blanc n°3 · Q1",
  blocks: [
    { h: "L'essentiel", p: "Règle **réciproque** : un acte civil peut devenir **commercial** (s'il se rattache à une opération commerciale), et un acte de commerce peut devenir **civil** (accessoire d'une activité civile)." },
    { h: "L'accessoire objectif", p: "L'acte emprunte le caractère commercial de l'**opération-support**. Ex. : le **gage** garantissant un acte de commerce (preuve par tous moyens — *Cass. com., 9 mai 2001*) ; actes rattachés au fonds ; **cessions de contrôle** de sociétés." },
    { h: "L'accessoire subjectif (et le cautionnement)", p: "Est commercial l'acte accompli **par un commerçant pour les besoins de son commerce** (l'acte à fins **privées** échappe au droit commercial). **Cautionnement commercial** : depuis l'**ord. du 15 sept. 2021** (art. L. 110-1, 11°), les cautionnements de **dettes commerciales** sont actes de commerce **entre toutes personnes** — le critère devient la **nature de la dette garantie**." },
    { h: "Plan-type", p: "**I. L'accessoire objectif.** **II. L'accessoire subjectif (et le cautionnement).**" },
    { h: "⚠️ Piège à éviter", p: "La règle joue **dans les deux sens** (commercialisation *et* « décommercialisation »). Penser à la **réforme 2021** sur le cautionnement de dette commerciale." }
  ]
},

{
  part: "Titre 1 — Le commerçant",
  title: "L'acte mixte",
  sub: "Commercial pour l'un, civil pour l'autre",
  exam: true,
  refs: "Sujet blanc n°6 · Q1",
  blocks: [
    { h: "L'essentiel", p: "Acte passé entre un **commerçant** et un **non-commerçant** : **commercial** à l'égard du premier, **civil** à l'égard du second → régime le plus souvent **dualiste**, parfois uniforme." },
    { h: "La dualité de principe", l: [
      "**Preuve** : le non-commerçant prouve **par tous moyens** contre le commerçant ; l'inverse n'est pas vrai (*Cass. com., 12 juin 2019*) ;",
      "**Solidarité** : présumée entre **commerçants** seulement ;",
      "**Compétence** : le non-commerçant dispose d'une **option** (juridiction civile ou commerciale) ; le commerçant doit assigner devant la juridiction **civile**."
    ]},
    { h: "Les règles uniformes", l: [
      "**Nullité** des clauses attributives de compétence territoriale (**art. 48 CPC**) ;",
      "Clause **compromissoire** inopposable à la partie **non professionnelle** (art. 2061 C. civ.) ;",
      "**Prescription** uniforme de **5 ans** (art. L. 110-4) ; influence croissante du **droit de la consommation**."
    ]},
    { h: "Plan-type", p: "**I. La dualité de principe** (preuve, solidarité, compétence). **II. Les règles uniformes.**" },
    { h: "⚠️ Piège à éviter", p: "L'acte mixte est **à double face** (≠ acte commercial pur) : la dualité joue surtout pour la **preuve** et la **compétence**." }
  ]
},

{
  part: "Titre 1 — Le commerçant",
  title: "Les conditions de la qualité de commerçant",
  sub: "Art. L. 121-1 : actes de commerce + profession habituelle",
  exam: true,
  refs: "Sujet blanc n°2 · Q1",
  blocks: [
    { h: "L'essentiel", p: "Aux termes de l'**art. L. 121-1**, est commerçant celui qui **exerce des actes de commerce et en fait sa profession habituelle**. C'est l'exercice d'actes de commerce **à titre professionnel** qui emporte la qualité — un acte isolé ne suffit pas." },
    { h: "Une profession habituelle", l: [
      "**Habitude** : répétition d'actes de commerce dans la durée (appréciation souveraine des juges du fond) + élément **intentionnel** (intention spéculative) ;",
      "**Caractère professionnel** : la personne en tire ses **moyens de subsistance** (profession principale) ; indices : **immatriculation au RCS**, régime fiscal des **BIC** (non décisifs en soi)."
    ]},
    { h: "L'indépendance de l'exercice", p: "Le commerçant agit **en son nom, pour son propre compte, à ses risques et périls**. Sont **exclus** : salariés, VRP, **agents commerciaux** (mandataires **civils**, art. L. 134-1) ; statuts hybrides (gérants succursalistes, gérants-mandataires)." },
    { h: "Ouverture — conditions tenant à la personne", p: "Principe de **liberté du commerce** (décret d'Allarde). Limites : **incapacités** (le mineur émancipé peut être commerçant sur autorisation), **incompatibilités** (fonctionnaires, avocats, notaires — la personne *a* la qualité mais non les avantages), **interdictions/déchéances** (faillite personnelle, fichier des interdits de gérer)." },
    { h: "Plan-type", p: "**I. Une profession habituelle.** **II. L'indépendance de l'exercice.** (Ouverture : conditions tenant à la personne.)" },
    { h: "⚠️ Piège à éviter", p: "L'**agent commercial** est un mandataire **civil** (≠ commerçant). Habitude et indépendance sont **cumulatives**." }
  ]
},

{
  part: "Titre 1 — Le commerçant",
  title: "La commercialité de fait",
  sub: "Commerçant même sans immatriculation",
  exam: true,
  refs: "Sujet blanc n°5 · Q1",
  blocks: [
    { h: "L'essentiel", p: "Est commerçant celui qui exerce des actes de commerce à titre habituel ; cette qualité peut être reconnue **même sans immatriculation** → la **commercialité de fait**." },
    { h: "La notion", p: "Une personne (physique, **association**, **GIE**, personne morale civile, voire **publique**) peut être tenue pour commerçante dès lors qu'elle pratique de façon **habituelle** des actes de commerce (*Cass. com., 17 juill. 2001* ; *22 janv. 2013*), indépendamment de toute immatriculation." },
    { h: "Les conséquences", p: "Le commerçant de fait supporte les **obligations** sans bénéficier des **droits** : **preuve libre contre lui**, **prescription** commerciale, **fiscalité** commerciale, soumission aux **procédures collectives** ; **mais** pas de **propriété commerciale**, pas de protection des baux commerciaux." },
    { h: "Plan-type", p: "**I. La notion.** **II. Les conséquences** (les obligations sans les droits)." },
    { h: "⚠️ Piège à éviter", p: "L'immatriculation n'est qu'une **présomption** : son défaut ne permet pas d'échapper aux obligations (art. L. 123-8) mais prive des droits." }
  ]
},

{
  part: "Titre 1 — Le commerçant",
  title: "L'immatriculation au RCS",
  sub: "Le principal instrument de la publicité légale",
  exam: true,
  refs: "Sujet blanc n°5 · Q2",
  blocks: [
    { h: "L'essentiel", p: "Le **registre du commerce et des sociétés** (art. L. 123-1 s.) est le principal instrument de la **publicité légale** ; il assure l'information des tiers malgré le secret des affaires." },
    { h: "Les conditions", p: "Demande dans les **15 jours** du début d'activité (personnes physiques) ; immatriculation **personnelle** (une seule principale, secondaires possibles) ; **contrôle du greffier** ; mention au **BODACC**. Depuis le **1er janv. 2023**, le **RNE** (tenu par l'INPI) se substitue à plusieurs registres ; les RCS locaux subsistent." },
    { h: "Les effets", l: [
      "Personnes **physiques** → **présomption simple** de la qualité de commerçant (combattue par les tiers de bonne foi) ;",
      "Personnes **morales** → l'immatriculation **conditionne la personnalité morale** (règle de fond, non une présomption) ;",
      "**Opposabilité aux tiers** des faits sujets à mention (art. L. 123-9). Défaut d'immatriculation → commerçant de fait."
    ]},
    { h: "Plan-type", p: "**I. Les conditions.** **II. Les effets** (présomption / personnalité morale / opposabilité)." },
    { h: "⚠️ Piège à éviter", p: "Pour les personnes **physiques** = simple **présomption** ; pour les personnes **morales** = condition de la **personnalité juridique** (effet bien plus fort)." }
  ]
},

{
  part: "Titre 1 — Le commerçant",
  title: "Les obligations comptables & la preuve commerciale",
  sub: "Comptabilité (art. L. 123-12 s.) et liberté de la preuve (L. 110-3)",
  exam: false,
  blocks: [
    { h: "L'essentiel", p: "Le commerçant est soumis à des **obligations comptables** et à un régime probatoire propre : la **liberté de la preuve**." },
    { h: "Les obligations comptables", p: "**Art. L. 123-12 s.** : **livre-journal** + **grand livre** ; **comptes annuels** (bilan, compte de résultat, annexe). Grands principes : comptes **réguliers, sincères**, donnant une **image fidèle** (L. 123-14), **permanence** des méthodes, **prudence** ; conservation **10 ans** ; simplifications pour micro-entrepreneurs. Sanctions : **banqueroute**, faux, faillite personnelle." },
    { h: "La preuve commerciale", p: "**Art. L. 110-3** : à l'égard des commerçants, les actes de commerce se prouvent **par tous moyens** (l'écrit de l'art. 1359 C. civ. est écarté). La liberté ne vaut qu'**entre/contre commerçants** et pour un acte **commercial** ; résurgence du formalisme *ad validitatem* (lettre de change, sociétés, cautionnement). La comptabilité **régulièrement tenue** peut faire preuve entre commerçants (art. L. 123-23)." },
    { h: "⚠️ À savoir", p: "La liberté de la preuve est un **avantage** mais ne joue **pas** contre un non-commerçant ; certains actes commerciaux exigent malgré tout un **écrit** (*ad validitatem*)." }
  ]
},

{
  part: "Titre 1 — Le commerçant",
  title: "Les juridictions commerciales & le régime de l'obligation",
  sub: "Tribunal de commerce, solidarité, prescription",
  exam: false,
  blocks: [
    { h: "L'essentiel", p: "Le contentieux commercial relève d'une **juridiction d'exception** (le tribunal de commerce) et l'**obligation commerciale** obéit à des règles propres, plus souples." },
    { h: "Le tribunal de commerce", p: "Juridiction d'exception à **juges élus** (consulaires) ; compétence aux **art. L. 721-3 s.** (litiges entre commerçants, sociétés commerciales, actes de commerce entre toutes personnes). Expérimentation des **tribunaux des activités économiques (TAE)** (loi du 20 nov. 2023). Clauses attributives de compétence territoriale **nulles** sauf entre commerçants (art. 48 CPC). **MARC** : arbitrage (clause compromissoire), conciliation, médiation." },
    { h: "Le régime de l'obligation commerciale", p: "**Présomption de solidarité** passive entre commerçants (*Cass. req., 20 oct. 1920*) — à l'inverse du droit civil ; **réfaction** et **faculté de remplacement** ; **anatocisme** ; **prescription** ramenée à **5 ans** (art. L. 110-4, loi du 17 juin 2008) ; le **silence** peut valoir acceptation dans une relation d'affaires établie (*Cass. com., 20 mai 2008*)." },
    { h: "⚠️ À savoir", p: "La **solidarité est présumée** entre commerçants (contraire au principe civil) ; **prescription quinquennale** uniforme depuis 2008." }
  ]
},

{
  part: "Titre 1 — Le commerçant",
  title: "Le statut du conjoint du commerçant",
  sub: "Égalité des époux & choix obligatoire d'un statut",
  exam: false,
  blocks: [
    { h: "L'essentiel", p: "L'**égalité des époux** (loi du 23 déc. 1985) gouverne l'exercice du commerce ; le conjoint qui travaille dans l'entreprise doit **choisir un statut**." },
    { h: "L'exercice du commerce", p: "Chacun exerce **librement** sa profession (art. 223 C. civ.) ; l'époux exerçant une **profession séparée** accomplit seul les actes d'administration et de disposition nécessaires (art. 1421, al. 2), sauf **cogestion** des actes graves (art. 1422 s.). Au **divorce**, le juge peut faire supporter les dettes professionnelles au seul époux conservant l'entreprise (**art. 1387-1 C. civ.**)." },
    { h: "Le conjoint travaillant dans l'entreprise (art. L. 121-4)", p: "Depuis la **loi du 22 mai 2019**, le **choix d'un statut est obligatoire** : **conjoint salarié** (subordination présumée irréfragablement), **conjoint collaborateur** (sans rémunération ni qualité d'associé, mandat présumé d'administration, **limité à 5 ans** — loi du 23 déc. 2021, étendu aux pacsés/concubins), **conjoint associé**." },
    { h: "⚠️ À savoir", p: "Le conjoint **co-exploitant** est présumé **non-commerçant** (art. L. 121-3, présomption simple) ; le choix d'un statut est désormais **obligatoire**." }
  ]
},

/* =================================================================
   TITRE 2 — LE PATRIMOINE DU COMMERÇANT
   ================================================================= */

{
  part: "Titre 2 — Le patrimoine du commerçant",
  title: "La séparation des patrimoines de l'entrepreneur individuel",
  sub: "Loi du 14 févr. 2022 — la dualité de plein droit (art. L. 526-22)",
  exam: true,
  refs: "Sujet blanc n°6 · Q2",
  blocks: [
    { h: "L'essentiel", p: "Pour atténuer la **théorie de l'unité du patrimoine** (Aubry et Rau), la **loi du 14 févr. 2022** crée le statut de l'**entrepreneur individuel (EI)**, qui remplace l'EIRL." },
    { h: "Le principe (art. L. 526-22)", p: "L'EI dispose **de plein droit, sans formalité**, d'un **patrimoine professionnel** (biens **utiles** à l'activité — art. R. 526-26) et d'un **patrimoine personnel**. Les créanciers **professionnels** n'ont pour gage que le patrimoine professionnel ; les créanciers **personnels**, le patrimoine personnel. Protection pour les créances nées **après le 15 mai 2022**." },
    { h: "Les exceptions à l'étanchéité", l: [
      "**Renonciation** à la séparation pour un engagement spécifique (art. L. 526-25 : formalisme + délai de réflexion) ;",
      "**Créanciers privilégiés** (fisc, organismes sociaux) en cas de **fraude** ou de manquements graves (art. L. 526-24) ;",
      "**Réunion** des patrimoines en cas de **cessation d'activité** ou de **décès**."
    ]},
    { h: "Plan-type", p: "**I. La dualité de patrimoines de plein droit.** **II. Les exceptions à l'étanchéité.**" },
    { h: "⚠️ Piège à éviter", p: "La séparation est **de plein droit et sans formalité** (≠ EIRL, qui supposait une déclaration d'affectation). Le critère est l'**utilité** du bien (art. R. 526-26)." }
  ]
},

{
  part: "Titre 2 — Le patrimoine du commerçant",
  title: "L'insaisissabilité de la résidence principale",
  sub: "Protéger le logement contre les créanciers professionnels",
  exam: true,
  refs: "Sujet blanc n°3 · Q2",
  blocks: [
    { h: "L'essentiel", p: "Palliatif à la rigueur de l'**unité du patrimoine** ; protège le logement de l'entrepreneur contre ses **créanciers professionnels**. Construction en trois lois : **Dutreil** (2003), **LME** (2008), **Macron** (2015)." },
    { h: "Le mécanisme (art. L. 526-1)", l: [
      "**Résidence principale** : insaisissable **de plein droit**, sans formalité, à l'égard des **créanciers professionnels** (créances nées après le 7 août 2015) ;",
      "**Autres biens fonciers** non professionnels : insaisissables sur **déclaration notariée d'insaisissabilité (DNI)**, à peine de nullité, publiée."
    ]},
    { h: "Les effets et limites", p: "Report sur le **prix** en cas de cession (remploi dans l'année) ; **renonciation** possible (acte authentique) ; jurisprudence sévère en **procédure collective** — le liquidateur peut contester l'opposabilité de la DNI pour reconstituer le gage commun (*Cass. com., 15 nov. 2016*)." },
    { h: "Plan-type", p: "**I. Le mécanisme** (plein droit / DNI). **II. Les effets et limites.**" },
    { h: "⚠️ Piège à éviter", p: "La **résidence principale** est insaisissable de **plein droit** ; les **autres biens fonciers** nécessitent une **DNI notariée**." }
  ]
},

{
  part: "Titre 2 — Le patrimoine du commerçant",
  title: "La clientèle",
  sub: "L'élément essentiel : « sans clientèle, pas de fonds »",
  exam: true,
  refs: "Annale officielle · Q2",
  blocks: [
    { h: "L'essentiel", p: "Élément **essentiel** du fonds — *sans clientèle, pas de fonds*. On distingue la **clientèle** (clients fidèles, attachés à la personne) de l'**achalandage** (clients de passage liés à l'emplacement)." },
    { h: "Les caractères exigés", l: [
      "**Certaine et actuelle** (une clientèle purement **virtuelle** ne suffit pas ; exception : peut préexister, ex. stations-service en location-gérance) ;",
      "**Commerciale** (les clientèles **civiles** — fonds libéral, *Cass. 1re civ., 7 nov. 2000* — ne constituent pas un fonds de commerce) ;",
      "**Personnelle/propre** au commerçant, qui doit jouir d'une **autonomie de gestion** (jurisprudence des centres commerciaux ; franchise — *Cass. 3e civ., 27 mars 2002*)."
    ]},
    { h: "Le rôle de la clientèle", p: "**Critère de qualification** des opérations (cession de fonds *vs* cession isolée de bail ; location-gérance *vs* bail) ; condition d'**existence** et de **titularité** du fonds ; **pas de droit privatif** sur la clientèle (seule protection : l'**action en concurrence déloyale**)." },
    { h: "Plan-type", p: "**I. Les caractères exigés de la clientèle.** **II. Le rôle de la clientèle.**" },
    { h: "⚠️ Piège à éviter", p: "Il n'existe **pas de droit privatif** sur la clientèle ; une clientèle **civile** (libérale) ne forme pas un fonds de commerce." }
  ]
},

{
  part: "Titre 2 — Le patrimoine du commerçant",
  title: "La nature juridique du fonds de commerce",
  sub: "Un bien meuble incorporel, distinct de ses éléments",
  exam: true,
  refs: "Sujet blanc n°1 · Q2",
  blocks: [
    { h: "L'essentiel", p: "Le fonds est un **bien distinct** de ses éléments (« plus que leur simple réunion »), sans définition légale ; plusieurs qualifications doctrinales ont été proposées." },
    { h: "Le fonds, universalité ?", l: [
      "**Universalité de droit : rejetée** (théorie de l'unité du patrimoine d'Aubry et Rau — pas de patrimoine d'affectation ; le fonds ne comprend ni dettes ni créances ; sa cession ne les transmet pas — *Cass. com., 27 janv. 1998*) ;",
      "**Universalité de fait** (Escarra-Rault) : discutée ; permettrait à un commerçant d'avoir **plusieurs fonds** (objection de Ripert)."
    ]},
    { h: "Le fonds, meuble incorporel", p: "Qualification retenue : la règle « *en fait de meubles, possession vaut titre* » (art. 2276) est **écartée** (*Cass. com., 7 mars 2006*) ; règles immobilières inapplicables (pas d'usucapion) ; mais pour la **vente**, on applique des règles de capacité/pouvoirs proches des immeubles → qualification « décevante »." },
    { h: "Plan-type", p: "**I. Le fonds, universalité ?** **II. Le fonds, meuble incorporel.**" },
    { h: "⚠️ Piège à éviter", p: "Le fonds **n'inclut ni dettes ni créances** (≠ patrimoine autonome) ; c'est un **meuble incorporel**, mais au régime proche des immeubles pour la vente." }
  ]
},

{
  part: "Titre 2 — Le patrimoine du commerçant",
  title: "La location-gérance",
  sub: "Concéder l'exploitation du fonds à un gérant (art. L. 144-1 s.)",
  exam: true,
  refs: "Sujet blanc n°2 · Q2",
  blocks: [
    { h: "L'essentiel", p: "Contrat par lequel le propriétaire d'un fonds en **concède la location** à un **gérant** qui l'exploite **à ses risques et périls** ; qualification d'**ordre public** (art. L. 144-1 s.)." },
    { h: "Les conditions", p: "Existence d'un **fonds** (donc d'une **clientèle**, appréciée à la date du contrat, preuve à la charge du loueur ; à défaut nullité/requalification) ; le **gérant** est **commerçant** ; **publicité** sous 15 jours + information précontractuelle (art. L. 330-3). ⚠️ Depuis la **loi du 19 juill. 2019**, la condition d'**exploitation personnelle préalable** est **supprimée**." },
    { h: "Les effets", l: [
      "**Entre les parties** : le loueur garantit la jouissance et reste **propriétaire** ; le gérant exploite « en bon commerçant », paie la **redevance**, restitue le fonds (**pas de droit au renouvellement**) ;",
      "**À l'égard des tiers** : **solidarité légale** du loueur **jusqu'à la publication** (art. L. 144-7) ; **déchéance du terme** des dettes en fin de contrat (art. L. 144-9)."
    ]},
    { h: "Plan-type", p: "**I. Les conditions.** **II. Les effets** (entre parties / à l'égard des tiers)." },
    { h: "⚠️ Piège à éviter", p: "Le gérant n'a **aucun droit au renouvellement** ; la solidarité du loueur ne joue que **jusqu'à la publication** ; la condition d'exploitation préalable a été **supprimée en 2019**." }
  ]
},

{
  part: "Titre 2 — Le patrimoine du commerçant",
  title: "La cession du fonds — formation & publicité",
  sub: "Un formalisme lourd à triple protection",
  exam: true,
  refs: "Sujet blanc n°4 · Q2",
  blocks: [
    { h: "L'essentiel", p: "La cession de fonds (**acte de commerce par l'objet**) est soumise à un **formalisme lourd**, justifié par une triple protection (créanciers du vendeur, vendeur, acquéreur)." },
    { h: "La formation", p: "Conditions de droit commun + **capacité/pouvoirs renforcés** ; l'opération doit porter sur un **fonds** (critère : **transmission de la clientèle**) ; **prix** déterminé, non dérisoire, **sectionné en trois** ; contre-lettre nulle ; **information préalable des salariés** (loi ESS 2014 → amende civile). Les **mentions obligatoires** de l'ancien art. L. 141-1 ont été **supprimées** (loi du 19 juill. 2019) → droit commun (art. 1112-1 C. civ.)." },
    { h: "La publicité", p: "**Enregistrement** + publicité (annonces légales + **BODACC**) → **opposabilité aux tiers** ; ouvre aux **créanciers du vendeur** un **droit d'opposition au paiement du prix** (10 jours) qui **bloque le prix** (sinon l'acquéreur paie deux fois — art. L. 141-17)." },
    { h: "Plan-type", p: "**I. La formation.** **II. La publicité.**" },
    { h: "⚠️ Piège à éviter", p: "Les **mentions obligatoires** (ancien L. 141-1) ont été **supprimées** en 2019 ; le **droit d'opposition** bloque le prix — l'acquéreur qui paie pendant le délai **paie mal**." }
  ]
},

{
  part: "Titre 2 — Le patrimoine du commerçant",
  title: "Les éléments du fonds de commerce",
  sub: "Ce qui en fait partie… et ce qui en est exclu",
  exam: false,
  blocks: [
    { h: "L'essentiel", p: "Le fonds est un ensemble d'**éléments mobiliers, corporels et incorporels**, affectés par le commerçant à l'exploitation pour retenir une **clientèle** (loi « Cordelet », 17 mars 1909). La **clientèle** en est l'élément essentiel (fiche dédiée)." },
    { h: "Les éléments exclus", l: [
      "Les **immeubles** (jamais dans le fonds, même affectés à l'exploitation) ;",
      "Les **dettes et créances** (le fonds n'est pas un patrimoine autonome — *Cass. com., 27 janv. 1998*) ;",
      "Les **contrats** (non transmis de plein droit, **sauf exceptions** : contrats de **travail** — art. L. 1224-1 C. trav. ; **assurance** ; **édition** ; **bail commercial**)."
    ]},
    { h: "Les éléments inclus", l: [
      "**Incorporels** : **nom commercial** (cessible, protégé par la concurrence déloyale ; distinct de la **dénomination sociale** — *Bordas*, Cass. com., 12 mars 1985) et **enseigne** ; **propriété industrielle** (brevets — 20 ans ; dessins/modèles ; marques) ; **secret des affaires** (loi du 30 juill. 2018) ;",
      "**Corporels** : **matériel/outillage** et **marchandises** (réserve de la clause de réserve de propriété)."
    ]},
    { h: "⚠️ À savoir", p: "Immeubles, dettes/créances et (en principe) contrats **ne font pas partie** du fonds ; le **bail commercial** est l'un des rares contrats transmis avec lui." }
  ]
},

{
  part: "Titre 2 — Le patrimoine du commerçant",
  title: "Les effets de la cession & les garanties du vendeur",
  sub: "Obligations des parties, privilège, nantissement",
  exam: false,
  blocks: [
    { h: "L'essentiel", p: "Une fois formée et publiée, la cession produit des obligations réciproques, garanties par des **sûretés propres au fonds**." },
    { h: "Les obligations du vendeur", p: "**Délivrance** (transmettre la clientèle et les éléments, y compris nom/enseigne sauf clause contraire) ; **garantie des vices cachés** (le vice doit entraîner une **perte de clientèle**) ; **garantie d'éviction** (du fait des tiers et **du fait personnel** → interdiction de **se rétablir** ; clauses de non-concurrence)." },
    { h: "Les garanties de paiement", p: "**Privilège du vendeur** (art. L. 141-5 : inscrit dans les 30 jours, porte à défaut sur les **éléments incorporels**, **droit de préférence + droit de suite**) ; **action résolutoire** (art. L. 141-6, liée au privilège). Garanties sur le fonds : **nantissement** (loi 1909, art. L. 142-1 s., inscription à 30 jours) et **gage professionnel**." },
    { h: "⚠️ À savoir", p: "La garantie d'**éviction du fait personnel** interdit au vendeur de **se rétablir** à proximité ; le défaut d'inscription du privilège est désormais sanctionné par l'**inopposabilité** (et non la nullité) depuis 2023." }
  ]
},

/* =================================================================
   TITRE 4 — LES BAUX COMMERCIAUX
   ================================================================= */

{
  part: "Titre 4 — Les baux commerciaux",
  title: "Les conditions d'application du statut des baux commerciaux",
  sub: "Un statut protecteur d'ordre public (art. L. 145-1 s.)",
  exam: true,
  refs: "Sujet blanc n°6 · Q3",
  blocks: [
    { h: "L'essentiel", p: "Statut **protecteur d'ordre public** (art. L. 145-1 s.) qui s'applique dès que ses conditions sont réunies (clauses contraires **réputées non écrites**) ; **soumission conventionnelle** possible." },
    { h: "Les conditions positives", l: [
      "Un **bail** portant sur un **immeuble/local** (espace stable et permanent — *Cass. 3e civ., 20 mars 2014*) ;",
      "L'**exploitation d'un fonds** par un commerçant ayant une **clientèle propre** et une **autonomie de gestion** ;",
      "L'**immatriculation** au RCS — **condition du renouvellement**, appréciée à la **date de la demande en justice** (*Cass. 3e civ., 22 janv. 2014*)."
    ]},
    { h: "Les exclusions (champ négatif)", p: "En raison de la **durée** (bail emphytéotique, **bail dérogatoire** ≤ 3 ans, locations saisonnières) ou de la **nature** (**convention d'occupation précaire**, crédit-bail immobilier, concession sur le domaine public)." },
    { h: "Plan-type", p: "**I. Les conditions positives.** **II. Les exclusions (champ négatif).**" },
    { h: "⚠️ Piège à éviter", p: "L'**immatriculation** est la condition du **renouvellement** (appréciée à la date de la demande en justice). Statut **d'ordre public** : les clauses contraires sont réputées non écrites." }
  ]
},

{
  part: "Titre 4 — Les baux commerciaux",
  title: "La convention d'occupation précaire",
  sub: "Exclusion du statut par une cause objective de précarité",
  exam: true,
  refs: "Annale officielle · Q3",
  blocks: [
    { h: "L'essentiel", p: "Technique d'**exclusion** du statut des baux commerciaux ; exclusion d'origine jurisprudentielle, **consacrée par la loi Pinel** (art. **L. 145-5-1**). Convention conférant la jouissance d'un immeuble, caractérisée par sa **précarité**." },
    { h: "Les conditions", l: [
      "L'occupation n'est autorisée qu'à raison de **circonstances particulières indépendantes de la seule volonté des parties** (cause **objective**) ;",
      "Ce **n'est pas un bail** (*Cass. 3e civ., 19 nov. 2014*) → régie uniquement par la convention des parties ;",
      "À défaut de cause objective → **requalification** en bail dérogatoire (susceptible de devenir bail commercial)."
    ]},
    { h: "Les effets", p: "**Exclusion du statut** : pas de droit au renouvellement, pas de durée minimale, **révocable à tout moment** ; validité **quelle que soit sa durée** (à la différence du bail dérogatoire plafonné à 3 ans)." },
    { h: "Plan-type", p: "**I. Les conditions.** **II. Les effets.**" },
    { h: "⚠️ Piège à éviter", p: "Ne pas confondre avec le **bail dérogatoire** : ici la précarité tient à une **cause objective**, et la **durée est indifférente**." }
  ]
},

{
  part: "Titre 4 — Les baux commerciaux",
  title: "Le bail dérogatoire",
  sub: "Bail de courte durée exclu du statut (art. L. 145-5)",
  exam: true,
  refs: "Sujet blanc n°1 · Q3",
  blocks: [
    { h: "L'essentiel", p: "Bail de **courte durée**, exclu du statut **en raison de sa durée** (art. L. 145-5) ; le preneur connaît dès l'origine la précarité de sa situation → **pas de droit au renouvellement**." },
    { h: "Les conditions", p: "Durée totale **≤ 3 ans** (baux successifs compris, à compter de la prise d'effet du premier) ; impossible de conclure un nouveau bail dérogatoire pour le **même fonds dans les mêmes locaux** au-delà." },
    { h: "Les effets / la requalification", p: "Si, à l'expiration, le preneur **reste et est laissé en possession** (au-delà d'**un mois**), il s'opère **un nouveau bail soumis au statut** (durée portée à **9 ans** + droit au renouvellement) — art. L. 145-5, al. 2 ; *Cass. 3e civ., 26 mars 2020*. Renonciation au statut possible mais **claire et non équivoque**." },
    { h: "Plan-type", p: "**I. Les conditions (≤ 3 ans).** **II. La requalification en bail statutaire.**" },
    { h: "⚠️ Piège à éviter", p: "Au-delà d'**un mois** de maintien en possession → bascule **automatique** dans le statut (9 ans) ; le plafond de **3 ans** vaut tous baux successifs confondus." }
  ]
},

{
  part: "Titre 4 — Les baux commerciaux",
  title: "La révision du loyer (plafonnement / déplafonnement)",
  sub: "Encadrer les hausses du loyer en cours de bail",
  exam: true,
  refs: "Sujet blanc n°2 · Q3",
  blocks: [
    { h: "L'essentiel", p: "Le **loyer initial est libre**, mais sa **révision** est strictement encadrée pour éviter les hausses brutales." },
    { h: "Le principe : la révision triennale plafonnée (art. L. 145-38)", p: "Révision demandée tous les **3 ans** ; le loyer doit correspondre à la **valeur locative** (critères L. 145-33), dans la limite du **plafonnement** (variation de l'**ILC/ILAT**)." },
    { h: "Les correctifs", l: [
      "**Déplafonnement** : si **modification matérielle des facteurs locaux de commercialité** entraînant une variation > 10 % → fixation à la **valeur locative**, mais **lissage à 10 %/an** (loi Pinel) ;",
      "**Révisions conventionnelles** : clause d'**échelle mobile** (révision si variation > 1/4) ; **clause-recette** (loyer indexé sur le CA, échappe à la révision légale — *Cass. 3e civ., 29 nov. 2018*) ;",
      "En cas de **baisse**, c'est la **valeur locative** qui prévaut."
    ]},
    { h: "Plan-type", p: "**I. La révision triennale plafonnée.** **II. Les correctifs (déplafonnement, clauses).**" },
    { h: "⚠️ Piège à éviter", p: "Le **déplafonnement** est **lissé à 10 %/an** (loi Pinel) ; la **clause-recette** échappe au régime légal de révision." }
  ]
},

{
  part: "Titre 4 — Les baux commerciaux",
  title: "La déspécialisation",
  sub: "Adapter l'activité malgré la clause de destination",
  exam: true,
  refs: "Sujet blanc n°5 · Q3",
  blocks: [
    { h: "L'essentiel", p: "Tempérament à l'obligation de respecter la **destination** des lieux ; permet au commerçant d'**adapter son activité** (art. L. 145-47 s.)." },
    { h: "La déspécialisation simple (partielle)", p: "**Art. L. 145-47** (ordre public) : adjoindre des activités **connexes ou complémentaires** ; simple **notification** au bailleur (qui a **2 mois** pour contester le caractère connexe) ; toute clause l'interdisant est nulle." },
    { h: "La déspécialisation plénière (totale)", p: "**Art. L. 145-48** : exercer une activité **différente**, eu égard à la conjoncture économique ; nécessite l'**accord du bailleur** (réputé acquis à défaut de réponse dans les **3 mois**) + **formalisme** (information des créanciers inscrits, des locataires protégés) ; le tribunal peut passer outre un refus non justifié (L. 145-52) ; possible **indemnité** au bailleur." },
    { h: "Plan-type", p: "**I. La déspécialisation simple.** **II. La déspécialisation plénière.**" },
    { h: "⚠️ Piège à éviter", p: "Simple = **notification** (activités connexes) ; plénière = **accord du bailleur** (activité différente). Ne pas intervertir les deux régimes." }
  ]
},

{
  part: "Titre 4 — Les baux commerciaux",
  title: "Le droit au renouvellement (« propriété commerciale »)",
  sub: "Le cœur du statut protecteur né en 1926",
  exam: true,
  refs: "Sujet blanc n°3 · Q3",
  blocks: [
    { h: "L'essentiel", p: "La « **propriété commerciale** » désigne, par abus de langage, le **droit au renouvellement** du bail (le locataire n'a aucun **droit réel**) ; c'est le cœur du statut protecteur né en **1926**." },
    { h: "Le droit au renouvellement et ses conditions (art. L. 145-8 s.)", p: "**Immatriculation** + **exploitation effective** du fonds dans les lieux (3 ans) ; procédure formaliste (congé du bailleur **6 mois** à l'avance, ou demande de renouvellement du preneur ; silence du bailleur **3 mois** = acceptation présumée). **Bail renouvelé** : **9 ans**, identique sauf le **loyer** (plafonné, sauf déplafonnement)." },
    { h: "Le refus de renouvellement", p: "Le bailleur peut **toujours** refuser, mais doit verser une **indemnité d'éviction** (art. L. 145-14), sauf **éviction justifiée** (motif grave et légitime, ou immeuble insalubre — art. L. 145-17). **Droit de repentir** du bailleur (L. 145-58)." },
    { h: "Plan-type", p: "**I. Le droit au renouvellement et ses conditions.** **II. Le refus de renouvellement (indemnité d'éviction).**" },
    { h: "⚠️ Piège à éviter", p: "La « propriété commerciale » n'est **pas** un droit réel ; le bailleur peut toujours refuser, mais **en payant** l'indemnité d'éviction." }
  ]
},

{
  part: "Titre 4 — Les baux commerciaux",
  title: "L'indemnité d'éviction",
  sub: "La contrepartie du refus de renouvellement (art. L. 145-14)",
  exam: true,
  refs: "Sujet blanc n°4 · Q3",
  blocks: [
    { h: "L'essentiel", p: "Contrepartie du refus de renouvellement ; expression de la **propriété commerciale** (le bailleur peut reprendre, mais en **indemnisant le préjudice**)." },
    { h: "Le principe (art. L. 145-14)", p: "Indemnité **égale au préjudice** causé : **valeur marchande du fonds** + frais de déménagement/réinstallation + droits de mutation. Réduite à une **indemnité de transfert** si l'activité est déplaçable sans perte de clientèle. **Droit de repentir** (L. 145-58) ; **maintien dans les lieux** jusqu'au paiement (contre indemnité d'occupation)." },
    { h: "Les exceptions (éviction justifiée, sans indemnité) — art. L. 145-17", l: [
      "**Motif grave et légitime** contre le preneur (inexécution, défaut d'exploitation, après mise en demeure) ;",
      "**Immeuble insalubre/dangereux** à démolir (avec droit de priorité du locataire en cas de reconstruction)."
    ]},
    { h: "Plan-type", p: "**I. Le principe (indemnité = préjudice).** **II. Les exceptions (éviction justifiée).**" },
    { h: "⚠️ Piège à éviter", p: "L'indemnité couvre soit la **valeur du fonds** (éviction = perte du fonds), soit un simple **transfert** ; **pas d'indemnité** en cas de motif grave et légitime." }
  ]
},

{
  part: "Titre 4 — Les baux commerciaux",
  title: "Les obligations des parties & la fin du bail",
  sub: "Délivrance, entretien, loyer ; résiliation & congé",
  exam: false,
  blocks: [
    { h: "L'essentiel", p: "Le bail commercial fait peser des **obligations** sur chaque partie et peut prendre fin par **résiliation anticipée** ou à l'**arrivée du terme**." },
    { h: "Les obligations", l: [
      "**Bailleur** : **délivrer** un local conforme, l'**entretenir** (*Cass. 3e civ., 19 déc. 2012*), **garantir** la jouissance paisible ;",
      "**Preneur** : **payer le loyer** et le dépôt de garantie, **respecter la destination** des lieux."
    ]},
    { h: "La résiliation anticipée", l: [
      "**Résiliation triennale** : le preneur peut donner congé à chaque échéance (faculté d'**ordre public** ; la loi Pinel a supprimé les baux « fermes », sauf 4 exceptions) ;",
      "**Clause résolutoire** : ne produit effet qu'**un mois après un commandement** demeuré infructueux (art. **L. 145-41**, ordre public) ; le juge peut accorder des **délais**."
    ]},
    { h: "L'arrivée du terme", p: "**Congé** donné **6 mois à l'avance** (acte extrajudiciaire) ; à défaut → **tacite prolongation**. Le congé du bailleur précise ses **motifs**." },
    { h: "⚠️ À savoir", p: "La **clause résolutoire** ne joue qu'**un mois après** un commandement resté infructueux (art. L. 145-41) ; la **résiliation triennale** du preneur est d'ordre public." }
  ]
},

{
  part: "Titre 4 — Les baux commerciaux",
  title: "La cession du bail & la sous-location",
  sub: "Transmettre ou sous-louer le local (art. L. 145-16 / L. 145-31)",
  exam: false,
  blocks: [
    { h: "L'essentiel", p: "Le bail commercial peut être **transmis** (cession) ou faire l'objet d'une **sous-location**, sous des régimes distincts." },
    { h: "La cession du bail", p: "Les clauses interdisant la **cession du bail avec le fonds** sont **réputées non écrites** (art. L. 145-16) ; le bailleur peut exiger un **agrément** et des **garanties**. La **cession isolée** du droit au bail nécessite l'**accord du bailleur**. Critère de qualification : **transmission ou non de la clientèle** (cession de fonds *vs* cession isolée) ; garantie du cédant **limitée à 3 ans** (loi Pinel — art. L. 145-16-1)." },
    { h: "La sous-location", p: "**Interdite sauf stipulation contraire ou accord du bailleur** (art. L. 145-31), qui doit être **appelé à concourir** à l'acte ; la **location-gérance** n'est **pas** une sous-location prohibée ; le sous-locataire peut demander le renouvellement au locataire principal (art. L. 145-32)." },
    { h: "⚠️ À savoir", p: "La cession du bail **avec le fonds** ne peut être interdite (clause réputée non écrite) ; la cession **isolée** suppose l'accord du bailleur ; la **sous-location** est en principe **prohibée**." }
  ]
},

/* =================================================================
   TITRE 5 — L'ENCADREMENT DE L'ACTIVITÉ COMMERCIALE
   ================================================================= */

{
  part: "Titre 5 — L'encadrement de l'activité",
  title: "La concurrence déloyale",
  sub: "Sanctionner la faute concurrentielle (art. 1240 C. civ.)",
  exam: false,
  blocks: [
    { h: "L'essentiel", p: "Fondée sur la **responsabilité civile délictuelle** (**art. 1240 C. civ.**), l'action en concurrence déloyale sanctionne un comportement **fautif** dans l'exercice de la concurrence, distinct de la **contrefaçon**. Elle ne suppose **ni droit privatif, ni faute intentionnelle** : faute + préjudice + lien de causalité (préjudice **présumé** — *Cass. com., 12 févr. 2020*)." },
    { h: "Les comportements caractérisant la déloyauté", l: [
      "**Dénigrement** : jeter le **discrédit** sur un concurrent, ses produits/services (à distinguer de la critique licite) ;",
      "**Parasitisme** : se placer dans le **sillage** d'autrui pour profiter, sans bourse délier, de ses investissements/notoriété ;",
      "**Confusion** : créer un **risque de confusion** dans l'esprit de la clientèle (imitation des signes distinctifs) ;",
      "**Désorganisation** : de l'entreprise concurrente ou du marché (débauchage massif, détournement de fichiers, violation d'une clause de non-concurrence)."
    ]},
    { h: "L'action et ses sanctions", p: "Action **délictuelle** ouverte au concurrent victime ; **dommages-intérêts** (y compris perte de clientèle/trouble commercial) + **cessation** des agissements (injonction, publication de la décision)." },
    { h: "⚠️ À savoir", p: "La concurrence déloyale n'exige **ni droit privatif ni intention** (simple **faute**) ; elle protège une clientèle sur laquelle il n'existe **pas de droit privatif**." }
  ]
},

{
  part: "Titre 5 — L'encadrement de l'activité",
  title: "Les pratiques commerciales déloyales",
  sub: "La protection du consommateur (Code de la consommation)",
  exam: false,
  blocks: [
    { h: "L'essentiel", p: "Relevant pour l'essentiel du **Code de la consommation** (couple **professionnel/consommateur**). Notion générale (**art. L. 121-1 C. conso.**) : pratique **contraire à la diligence professionnelle** altérant substantiellement le comportement économique du consommateur. Deux grandes catégories : **trompeuses** et **agressives**." },
    { h: "Les pratiques trompeuses (art. L. 121-2 s.)", p: "Reposent sur des **allégations fausses ou de nature à induire en erreur** (sur le produit, le prix, l'identité du professionnel…) ; liste de pratiques **réputées trompeuses en toutes circonstances** (L. 121-4). **Sanctions pénales et administratives.**" },
    { h: "Les pratiques agressives (art. L. 121-6 s.)", p: "Recourent à des **sollicitations répétées et insistantes** ou à une **contrainte** altérant la liberté de choix ; liste de pratiques **réputées agressives** (L. 121-7) ; **sanctions pénales + nullité** du contrat. Encadrement du **démarchage** / vente hors établissement (**droit de rétractation de 14 jours**)." },
    { h: "⚠️ À savoir", p: "Distinguer la **concurrence déloyale** (protège le **commerçant** contre ses concurrents, C. civ.) des **pratiques commerciales déloyales** (protègent le **consommateur**, C. conso.)." }
  ]
},

/* =================================================================
   📜 ARTICLES-CLÉS À CONNAÎTRE — regroupés par article (objet · conditions · effets)
   ================================================================= */

/* ---- Acte de commerce & commerçant ---- */

{
  part: "📜 Articles-clés — Acte de commerce & commerçant",
  title: "Art. L. 110-1 et s. C. com. — Actes de commerce, preuve & prescription",
  sub: "L'acte de commerce et son régime",
  exam: true,
  refs: "Annale · Q1 ; Sujets blancs n°1 & 3 · Q1",
  blocks: [
    { h: "L. 110-1 — l'énumération des actes de commerce", p: "Liste les **actes de commerce** : **1°/2°** achat pour revendre (meubles/immeubles) ; **3°, 7°, 8°** intermédiaire, banque, change, paiement ; **4°, 5°, 6°** **entreprises** (manufacture, transport, fourniture, agences, spectacles…) ; **10°** la **lettre de change** (par la forme, entre toutes personnes) ; **11°** (ord. 2021) les **cautionnements de dettes commerciales**." },
    { h: "Effets du caractère commercial", l: [
      "soumission au **droit commercial** : preuve libre, **solidarité présumée**, prescription de 5 ans, compétence du **tribunal de commerce** ;",
      "⚠ un acte **par la forme** (lettre de change) est commercial même isolé, mais **ne confère pas** la qualité de commerçant."
    ]},
    { h: "L. 110-3 — la liberté de la preuve", p: "À l'égard des **commerçants**, les actes de commerce se prouvent **par tous moyens** (dispense de l'écrit civil). ⚠ Dans l'**acte mixte**, seul le **non-commerçant** en profite *contre* le commerçant — pas l'inverse (*Cass. com., 12 juin 2019*)." },
    { h: "L. 110-4 — la prescription quinquennale", p: "Les obligations nées à l'occasion du commerce (entre commerçants, ou commerçant/non-commerçant) se prescrivent par **5 ans** (loi du 17 juin 2008), sauf prescriptions spéciales plus courtes." },
    { h: "⚠️ À retenir", p: "Critères doctrinaux de commercialité : **spéculation** (Lyon-Caen/Renault) + **circulation des richesses** (Thaller). L'art. **L. 110-2** vise le commerce **maritime**." }
  ]
},

{
  part: "📜 Articles-clés — Acte de commerce & commerçant",
  title: "Art. L. 121-1 C. com. — La qualité de commerçant",
  sub: "« Ceux qui exercent des actes de commerce et en font leur profession habituelle »",
  exam: true,
  refs: "Sujet blanc n°2 · Q1",
  blocks: [
    { h: "Objet de l'article", p: "Définit le **commerçant** : c'est l'**exercice d'actes de commerce à titre professionnel** qui emporte la qualité — un acte isolé ne suffit pas." },
    { h: "Conditions", l: [
      "une **profession habituelle** = **habitude** (répétition dans la durée, appréciation souveraine des juges) + **caractère professionnel** (moyens de subsistance, profession principale) ;",
      "l'**indépendance** : agir **en son nom, pour son propre compte, à ses risques et périls** (exclut salariés, VRP, **agents commerciaux** — art. L. 134-1)."
    ]},
    { h: "Effets", l: [
      "application du **statut** de commerçant (obligations : immatriculation, comptabilité ; droits : propriété commerciale, baux commerciaux) ;",
      "à distinguer de l'**artisan** (civil, < 11 salariés) et de l'**agriculteur** (civil, cycle biologique, art. L. 311-1 C. rural)."
    ]},
    { h: "⚠️ À retenir", p: "**Commercialité de fait** : la qualité peut être reconnue **sans immatriculation** → toutes les **obligations**, mais pas les **droits**." }
  ]
},

{
  part: "📜 Articles-clés — Acte de commerce & commerçant",
  title: "Art. L. 123-1 et s. C. com. — RCS, comptabilité & preuve",
  sub: "Les obligations de publicité et de comptabilité du commerçant",
  exam: true,
  refs: "Sujet blanc n°5 · Q2",
  blocks: [
    { h: "L. 123-1 s. — le RCS : objet", p: "Le **registre du commerce et des sociétés**, tenu par le greffe (centralisé à l'INPI puis au **RNE**), assure l'**information des tiers** sur les commerçants et les sociétés." },
    { h: "Conditions d'immatriculation", l: [
      "**qui** : personnes physiques **commerçantes**, sociétés et GIE (personnalité morale)… ;",
      "**délai** : **15 jours** du début d'activité (personnes physiques) ; immatriculation **personnelle** (une principale, secondaires possibles) ; contrôle du greffier, mention au **BODACC**."
    ]},
    { h: "Effets de l'immatriculation", l: [
      "**personnes physiques** → **présomption simple** de commercialité (combattue par les tiers de **bonne foi**) ;",
      "**personnes morales** → **acquisition de la personnalité morale** (règle de fond) ;",
      "**opposabilité aux tiers** (**L. 123-9**) : les faits sujets à mention ne sont opposables que s'ils sont **publiés** ;",
      "défaut d'immatriculation → **commerçant de fait** (les obligations, pas les droits)."
    ]},
    { h: "L. 123-12 s. — les obligations comptables", l: [
      "**livre-journal** + **grand livre** ; **comptes annuels** (bilan, compte de résultat, annexe) ; comptes **réguliers, sincères, image fidèle** (**L. 123-14**) ; conservation **10 ans** ;",
      "**preuve** : la comptabilité régulière fait foi **entre commerçants** (**L. 123-23**) ; les registres font preuve **contre leur auteur** (art. 1378 C. civ.)."
    ]},
    { h: "⚠️ À jour (2023)", p: "Depuis le **1ᵉʳ janvier 2023**, le **RNE** (ord. 15 sept. 2021) se substitue à plusieurs registres (répertoire des métiers, registre de l'agriculture…). **Les RCS locaux subsistent.**" }
  ]
},

{
  part: "📜 Articles-clés — Acte de commerce & commerçant",
  title: "Art. L. 134-1 C. com. — L'agent commercial",
  sub: "Un mandataire indépendant… mais non-commerçant",
  exam: false,
  blocks: [
    { h: "Objet", p: "L'agent commercial est un **mandataire** qui, à titre de **profession indépendante**, est chargé **de façon permanente** de négocier et, éventuellement, de conclure des contrats **au nom et pour le compte** d'autrui." },
    { h: "Conditions / régime", l: [
      "activité **civile** : il n'est **pas commerçant** (preuve par tous moyens *interdite* contre lui ; clauses attributives de compétence sans effet) ;",
      "la **négociation** est essentielle à la qualification (*Cass. com., 15 janv. 2008*) ; statut protecteur : **indemnité de rupture** (art. L. 134-12)."
    ]},
    { h: "⚠️ À distinguer", p: "À ne pas confondre avec le **VRP** (salarié) ni le **commissionnaire** (commerçant, agit en son nom propre). Contentieux fréquent de **requalification**." }
  ]
},

{
  part: "📜 Articles-clés — Acte de commerce & commerçant",
  title: "Art. L. 210-1 C. com. — Les sociétés commerciales par la forme",
  sub: "Commerciales par leur forme, quel que soit leur objet",
  exam: true,
  refs: "Sujet blanc n°1 · Q1",
  blocks: [
    { h: "Objet", p: "Sont commerciales **à raison de leur forme et quel que soit leur objet** : **SNC, SCS, SARL** et **sociétés par actions** (SA, SCA, SAS, SE)." },
    { h: "Effets", l: [
      "tous les actes de leur cadre (création, fonctionnement, dissolution, titres) sont **commerciaux** → **tribunal de commerce** ;",
      "la commercialité s'attache à la **personne morale**, même si l'objet est civil."
    ]},
    { h: "⚠️ Distinction société / associé", p: "Seuls les **associés de SNC** sont commerçants. Les associés de **SARL/SA** et les **dirigeants** ne le sont **pas**. Cas particulier : les **SEL** (forme commerciale, **objet civil**)." }
  ]
},

/* ---- Patrimoine & fonds de commerce ---- */

{
  part: "📜 Articles-clés — Patrimoine & fonds de commerce",
  title: "Art. 2284 C. civ. — Le droit de gage général",
  sub: "Le fondement de l'unité du patrimoine (Aubry et Rau)",
  exam: false,
  blocks: [
    { h: "Objet", p: "« Quiconque s'est obligé personnellement est tenu de remplir son engagement **sur tous ses biens**, mobiliers et immobiliers, présents et à venir. » → **unité du patrimoine** : tout l'actif répond de tout le passif." },
    { h: "Conséquence pour le commerçant", p: "Ses biens **personnels et professionnels** sont confondus et répondent indistinctement de toutes ses dettes → risque d'absorption du patrimoine privé." },
    { h: "Les palliatifs", l: [
      "société à risque limité (EURL, SASU) ; loi **Madelin** (1994) ;",
      "**insaisissabilité** de la résidence principale (L. 526-1) ; statut de l'**entrepreneur individuel** (L. 526-22) ; **fiducie**."
    ]}
  ]
},

{
  part: "📜 Articles-clés — Patrimoine & fonds de commerce",
  title: "Art. L. 526-1 et s. C. com. — Insaisissabilité & entrepreneur individuel",
  sub: "Protéger le patrimoine personnel du chef d'entreprise",
  exam: true,
  refs: "Sujets blancs n°3 (Q2) & n°6 (Q2)",
  blocks: [
    { h: "L. 526-1 — l'insaisissabilité de la résidence principale", p: "La **résidence principale** est insaisissable **de plein droit, sans formalité** (loi Macron 2015), à l'égard des **créanciers professionnels** (créances nées après le 7 août 2015). Construction : lois **Dutreil** (2003), **LME** (2008), **Macron** (2015). Les **autres biens fonciers** non professionnels : par **déclaration notariée d'insaisissabilité (DNI)**, à peine de nullité, publiée." },
    { h: "Effets / limites (insaisissabilité)", l: [
      "**report** sur le prix en cas de cession (remploi dans l'année) ; **renonciation** possible (acte authentique) ;",
      "**procédure collective** : le liquidateur peut **contester l'opposabilité** de la DNI (*Cass. com., 15 nov. 2016*)."
    ]},
    { h: "L. 526-22 s. — le statut de l'entrepreneur individuel", p: "Depuis le **15 mai 2022** (loi du 14 févr. 2022, remplace l'EIRL), l'EI dispose **de plein droit, sans formalité**, d'un **patrimoine professionnel** (biens *utiles*, art. R. 526-26) et d'un **patrimoine personnel**." },
    { h: "Étanchéité & exceptions (EI)", l: [
      "**créanciers professionnels** → patrimoine professionnel ; **créanciers personnels** → patrimoine personnel ;",
      "**renonciation** pour un engagement spécifique (**L. 526-25**) ; **créanciers privilégiés** (fisc/social) en cas de **fraude** (**L. 526-24**) ; **réunion** des patrimoines en cas de cessation/décès."
    ]}
  ]
},

{
  part: "📜 Articles-clés — Patrimoine & fonds de commerce",
  title: "Art. L. 141-5 et s. C. com. — Cession du fonds : privilège, publicité & opposition",
  sub: "Garanties du vendeur et protection des créanciers",
  exam: true,
  refs: "Sujet blanc n°4 · Q2",
  blocks: [
    { h: "L. 141-5 / L. 141-6 — le privilège du vendeur", l: [
      "garantit le prix non payé comptant ; suppose un **prix sectionné en trois** (incorporels / matériel / marchandises) ;",
      "**inscription** dans les **30 jours** (à peine d'**inopposabilité** depuis 2023) ; à défaut de désignation, porte sur les seuls **éléments incorporels** ;",
      "**droit de préférence** + **droit de suite** ; **action résolutoire** (L. 141-6, à réserver dans l'inscription) : anéantit la vente."
    ]},
    { h: "L. 141-12 s. — la publicité de la cession", p: "**Enregistrement** dans le mois + publicité (annonces légales + **BODACC**) → rend la cession **opposable aux tiers**. **Information préalable des salariés** (loi ESS 2014, 2 mois avant) — sanction = **amende civile** (≤ 2 %)." },
    { h: "L. 141-17 — l'opposition au prix", p: "Tout créancier du vendeur peut, dans les **10 jours**, faire **opposition au paiement du prix** → le prix est **bloqué**. ⚠ L'acquéreur qui paie malgré l'opposition (ou en l'absence de publicité) risque de **payer deux fois**." }
  ]
},

{
  part: "📜 Articles-clés — Patrimoine & fonds de commerce",
  title: "Art. L. 142-1 et s. C. com. — Le nantissement du fonds de commerce",
  sub: "Affecter le fonds en garantie, sans dépossession",
  exam: false,
  blocks: [
    { h: "Objet", p: "Sûreté permettant d'**affecter le fonds en garantie** d'une dette **sans dépossession** (le commerçant continue d'exploiter). Conventionnel ou judiciaire (loi du 17 mars 1909)." },
    { h: "Conditions / assiette", l: [
      "ne peut porter que sur le **fonds** (jamais sur les **marchandises** ni les **immeubles**) ; à défaut de désignation, sur les seuls **éléments incorporels** ;",
      "acte écrit enregistré ; **inscription** dans les 30 jours (à peine d'inopposabilité depuis 2023)."
    ]},
    { h: "Effets", l: [
      "**droit de préférence** + **droit de suite** ; mais **pas** de droit de rétention ni d'attribution du fonds (*Cass. com., 13 oct. 1998*) ;",
      "le créancier peut faire **vendre** le fonds à défaut de paiement."
    ]}
  ]
},

{
  part: "📜 Articles-clés — Patrimoine & fonds de commerce",
  title: "Art. L. 144-1 et s. C. com. — La location-gérance",
  sub: "Concéder l'exploitation du fonds à un gérant",
  exam: true,
  refs: "Sujet blanc n°2 · Q2",
  blocks: [
    { h: "Objet", p: "Contrat par lequel le propriétaire d'un fonds en **concède la location** à un **gérant** qui l'exploite **à ses risques et périls**. Qualification d'**ordre public**." },
    { h: "Conditions", l: [
      "existence d'un **fonds** (donc d'une **clientèle**, appréciée à la date du contrat ; preuve à la charge du loueur — sinon nullité/requalification) ;",
      "le **gérant** est commerçant (immatriculation) ; **publicité** sous 15 jours ;",
      "⚠ depuis la **loi du 19 juill. 2019**, la condition d'**exploitation personnelle préalable (2 ans)** est **supprimée**."
    ]},
    { h: "Effets", l: [
      "le gérant exploite « en bon commerçant », paie la **redevance**, restitue le fonds → **pas de renouvellement** ;",
      "tiers : **solidarité légale** du loueur jusqu'à la **publication** (**L. 144-7**) ; **déchéance du terme** des dettes en fin de contrat (**L. 144-9**)."
    ]}
  ]
},

/* ---- Baux commerciaux ---- */

{
  part: "📜 Articles-clés — Baux commerciaux",
  title: "Art. L. 145-1 et s. C. com. — Le statut des baux commerciaux",
  sub: "« Propriété commerciale » : conditions, exécution & fin du bail",
  exam: true,
  refs: "Annale · Q3 ; Sujets blancs n°1 à 6",
  blocks: [
    { h: "L. 145-1 s. — champ d'application (ordre public)", l: [
      "un **bail** + un **immeuble/local** (espace **stable et permanent** — *Cass. 3e civ., 20 mars 2014*) + l'exploitation d'un **fonds** (clientèle propre, autonomie de gestion) + l'**immatriculation** (appréciée à la **date de la demande en justice** — *Cass. 3e civ., 22 janv. 2014*) ;",
      "statut d'**ordre public** : clauses contraires **réputées non écrites** (L. 145-15) ; **soumission conventionnelle** possible."
    ]},
    { h: "L. 145-5 & L. 145-5-1 — les baux exclus", l: [
      "**bail dérogatoire** : ≤ **3 ans** ; ⚠ si maintien en possession au-delà → **bail soumis au statut** (*Cass. 3e civ., 26 mars 2020*) ;",
      "**convention d'occupation précaire** : cause objective de précarité, **pas un bail** (*Cass. 3e civ., 19 nov. 2014*)."
    ]},
    { h: "L. 145-4 — durée & résiliation triennale", p: "Durée minimale **9 ans** ; **résiliation triennale** du preneur (d'**ordre public**). Plus de baux « **fermes** » (loi Pinel) — sauf baux > 9 ans, locaux monovalents, bureaux, locaux de stockage." },
    { h: "L. 145-33 / 34 / 38 — le loyer", l: [
      "loyer = **valeur locative** (L. 145-33), dans la limite du **plafonnement** (indice ILC/ILAT, révision triennale L. 145-38) ;",
      "**déplafonnement** si modification des **facteurs locaux de commercialité** (> 10 %) → valeur locative, **lissage 10 %/an** (Pinel) ; **clause-recette** hors révision légale (*Cass. 3e civ., 29 nov. 2018*)."
    ]},
    { h: "L. 145-47 & L. 145-48 — la déspécialisation", l: [
      "**simple** : activités **connexes/complémentaires**, sur **notification** (L. 145-47, ordre public) ;",
      "**plénière** : activité **différente**, avec **accord du bailleur** (L. 145-48 ; tribunal si refus non justifié)."
    ]},
    { h: "L. 145-41 — la clause résolutoire", p: "Ne produit effet qu'**un mois après un commandement** demeuré infructueux (disposition d'**ordre public**) ; le juge peut accorder des **délais** (art. 1343-5 C. civ.) et suspendre ses effets." },
    { h: "L. 145-8 s. — le droit au renouvellement", l: [
      "**immatriculation** + **exploitation effective** du fonds (3 ans) ; **congé** 6 mois à l'avance ; silence du bailleur (3 mois) = acceptation ;",
      "**bail renouvelé** : 9 ans, identique **sauf le loyer**."
    ]},
    { h: "L. 145-14 & L. 145-17 — l'indemnité d'éviction", l: [
      "refus de renouvellement = **indemnité d'éviction** = préjudice (**valeur du fonds** + frais), **droit de repentir** (L. 145-58) ;",
      "**éviction justifiée sans indemnité** (L. 145-17) : motif grave et légitime, ou immeuble insalubre à démolir."
    ]},
    { h: "L. 145-16 & L. 145-31 — cession & sous-location", l: [
      "**cession du bail avec le fonds** : clauses d'interdiction **réputées non écrites** (agrément/garanties possibles) ;",
      "**sous-location** **interdite** sauf accord du bailleur (appelé à concourir) ; la **location-gérance** n'est pas une sous-location prohibée."
    ]}
  ]
}

];
