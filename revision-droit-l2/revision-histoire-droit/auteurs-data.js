/* =====================================================================
   Personnages — Histoire du droit des obligations (C. Drand, L2)
   Fiches comparatives des grands juristes, axées sur le « différentiel »
   (qui pense quoi, et à ne pas confondre avec qui).

   Sources : notes Obsidian du cours (Introduction / Formation /
   Détermination du contenu / Effets du contrat).

   Chaque personnage :
     nom      : nom usuel
     vie      : dates (repère ; siècle = ce qui compte à l'examen)
     groupe   : époque (filtrage + ordre, voir AUTEUR_GROUPES)
     courant  : école / sensibilité juridique
     oeuvre   : ouvrage(s) emblématique(s) ('' si non pertinent)
     essence  : la phrase à retenir, ce qui le distingue
     pos      : positions par thème -> { t: thème, p: position }
     confusion: [ { avec: "Nom", note: "pourquoi on les confond / ce qui les sépare" } ]

   Thèmes (t) normalisés pour la comparaison en mode duel :
     "Formation"  "Prêt à intérêts"  "Lésion"  "Preuve"
     "Interprétation"  "Nullité / vices"  "Exécution"  "Apport"
   ===================================================================== */

window.AUTEUR_GROUPES = [
  "Antiquité romaine",
  "Moyen Âge",
  "XVIᵉ s. — humanistes & coutumiers",
  "Droit naturel (XVIIᵉ–XVIIIᵉ s.)",
  "Code civil (XVIIIᵉ–XIXᵉ s.)"
];

/* Paires que l'on confond le plus souvent (mode « duel ») */
window.AUTEUR_DUELS = [
  { a: "Jacques Cujas", b: "Jean Domat",
    cle: "Deux « savants » aux antipodes : Cujas (XVIᵉ, romaniste) RESTAURE le formalisme romain ; Domat (XVIIᵉ, droit naturel) le REJETTE au profit du seul consentement." },
  { a: "Charles Du Moulin", b: "Antoine Loysel",
    cle: "Même camp (coutumiers, XVIᵉ, pro-consensualisme) : Du Moulin est le THÉORICIEN qui l'argumente (coutume de Paris) ; Loysel le met en ADAGES." },
  { a: "Jean Domat", b: "Robert-Joseph Pothier",
    cle: "Même lignée (consensualisme + hostilité au prêt à intérêts) : Domat (XVIIᵉ) systématise, Pothier (XVIIIᵉ) le reprend et inspire DIRECTEMENT le Code civil de 1804." },
  { a: "Jacques Cujas", b: "Charles Du Moulin",
    cle: "Contemporains (XVIᵉ) opposés : Cujas romaniste défend le FORMALISME ; Du Moulin coutumier consacre le CONSENSUALISME et un droit national." },
  { a: "Bartole", b: "Balde",
    cle: "Maître et disciple (post-glossateurs, XIVᵉ) : Bartole ouvre la voie au consensualisme ; Balde pousse plus loin (cause + bonne foi de tous les contrats)." },
  { a: "Portalis", b: "Jourdan",
    cle: "Débat sur la lésion : Portalis (rédacteur du Code) DÉFEND la rescision pour protéger le faible ; Jourdan (XIXᵉ) la COMBAT (« caprice législatif », « qui dit contractuel dit juste »)." }
];

window.AUTEURS = [

/* ============ ANTIQUITÉ ROMAINE ============ */
{
  nom: "Gaius", vie: "IIᵉ s. ap. J.-C.", groupe: "Antiquité romaine",
  courant: "Jurisprudence romaine classique",
  oeuvre: "Institutes de Gaius",
  essence: "Le grand classificateur : ses Institutes structurent encore le droit des obligations.",
  pos: [
    { t: "Classifications", p: "Distingue d'abord seulement contrats et délits (puis une 3ᵉ catégorie « de causes diverses ») ; à l'origine de la classification des obligations selon l'objet (donner / faire / ne pas faire)." },
    { t: "Nullité / vices", p: "Développe la notion d'obligation naturelle (ex. dettes des incapables, des esclaves)." }
  ],
  confusion: [
    { avec: "Justinien", note: "Gaius (IIᵉ s.) est un juriste classique ; Justinien (VIᵉ s.) est l'empereur qui COMPILE le droit. La classification quadripartite est consacrée sous Justinien, pas par Gaius." }
  ]
},
{
  nom: "Paul", vie: "IIIᵉ s. ap. J.-C.", groupe: "Antiquité romaine",
  courant: "Jurisprudence romaine classique",
  oeuvre: "",
  essence: "Met en avant le sens ACTIF de l'obligation (le droit du créancier).",
  pos: [
    { t: "Notion d'obligation", p: "« La nature de l'obligation est d'obliger en vue de quelque chose » : conception active (côté créancier / créance)." }
  ],
  confusion: [
    { avec: "Justinien", note: "Sens ACTIF (Paul, le créancier) ≠ sens PASSIF (Institutes de Justinien : la dette, « un lien de droit par lequel nous sommes astreints »)." }
  ]
},
{
  nom: "Justinien", vie: "VIᵉ s. ap. J.-C.", groupe: "Antiquité romaine",
  courant: "Législation impériale (Empire d'Orient)",
  oeuvre: "Corpus juris civilis (Code, Digeste, Institutes, Novelles)",
  essence: "L'empereur qui COMPILE tout le droit romain — la source que le Moyen Âge redécouvrira.",
  pos: [
    { t: "Notion d'obligation", p: "Les Institutes consacrent le sens PASSIF : l'obligation comme lien astreignant le débiteur." },
    { t: "Classifications", p: "Le Digeste puis les Institutes consacrent la classification quadripartite (contrat / délit / quasi-contrat / quasi-délit)." },
    { t: "Lésion", p: "Le Code rassemble les textes généralisant la rescision pour lésion (vendeur d'immeuble, lésion énorme)." }
  ],
  confusion: [
    { avec: "Gaius", note: "Justinien ne crée pas le droit, il le COMPILE. Les Institutes de Justinien (VIᵉ s.) ≠ les Institutes de Gaius (IIᵉ s.)." }
  ]
},
{
  nom: "Aristote", vie: "IVᵉ s. av. J.-C.", groupe: "Antiquité romaine",
  courant: "Philosophie grecque",
  oeuvre: "",
  essence: "L'argument philosophique CONTRE le prêt à intérêts, invoqué pendant des siècles.",
  pos: [
    { t: "Prêt à intérêts", p: "L'argent est « infertile » (stérile) et ne peut donc pas produire d'intérêts : argument repris par l'Église pour condamner l'usure." }
  ],
  confusion: []
},

/* ============ MOYEN ÂGE ============ */
{
  nom: "Irnerius", vie: "XIIᵉ s.", groupe: "Moyen Âge",
  courant: "École des glossateurs (Bologne)",
  oeuvre: "Gloses",
  essence: "Fondateur des glossateurs : relance l'étude du droit romain redécouvert.",
  pos: [
    { t: "Formation", p: "Les glossateurs commentent les compilations de Justinien par des GLOSES (notes en marge) pour en transmettre le sens exact." }
  ],
  confusion: [
    { avec: "Bartole", note: "Irnerius = GLOSSATEUR (XIIᵉ, on annote le texte). Bartole = POST-glossateur / commentateur (XIVᵉ, on cherche des solutions pratiques)." }
  ]
},
{
  nom: "Philippe de Beaumanoir", vie: "XIIIᵉ s.", groupe: "Moyen Âge",
  courant: "Droit coutumier",
  oeuvre: "Coutumes de Beauvaisis",
  essence: "Première reconnaissance écrite du consensualisme dans une coutume.",
  pos: [
    { t: "Formation", p: "« Marché est fait sitôt comme il est créanté à tenir par l'accord des parties » : l'échange des consentements suffit (consensualisme coutumier)." },
    { t: "Nullité / vices", p: "Juge nul un contrat ayant pour objet la commission d'un vol (contrat contraire aux bonnes mœurs)." }
  ],
  confusion: [
    { avec: "Charles Du Moulin", note: "Beaumanoir (XIIIᵉ) ANNONCE le consensualisme coutumier ; Du Moulin (XVIᵉ) le CONSACRE et le systématise." }
  ]
},
{
  nom: "Bartole", vie: "XIVᵉ s.", groupe: "Moyen Âge",
  courant: "Post-glossateurs (commentateurs)",
  oeuvre: "",
  essence: "Le maître des commentateurs : fait ÉVOLUER le droit romain vers la pratique et le consensualisme.",
  pos: [
    { t: "Formation", p: "Assouplit le formalisme (notamment la stipulation) et élargit la théorie des pactes vêtus ; permet aux commerçants de s'engager par simple accord." },
    { t: "Nullité / vices", p: "Distingue les lois d'utilité PUBLIQUE (auxquelles on ne peut renoncer) et d'utilité PRIVÉE : prépare la distinction lois impératives / supplétives." }
  ],
  confusion: [
    { avec: "Balde", note: "Bartole est le MAÎTRE ; Balde son DISCIPLE qui va plus loin. La distinction lois publiques/privées est de Bartole." }
  ]
},
{
  nom: "Balde", vie: "XIVᵉ s.", groupe: "Moyen Âge",
  courant: "Post-glossateurs (commentateurs)",
  oeuvre: "",
  essence: "Le disciple de Bartole qui généralise la bonne foi et fait reculer les actions de droit strict.",
  pos: [
    { t: "Formation", p: "Un contrat est valable dès lors qu'il a une CAUSE ; tous les contrats doivent être tenus pour de BONNE FOI → déclin des actions de droit strict." }
  ],
  confusion: [
    { avec: "Bartole", note: "Disciple de Bartole : retenir « cause + bonne foi de tous les contrats » pour Balde ; « lois publiques/privées » pour Bartole." }
  ]
},

/* ============ XVIᵉ — HUMANISTES & COUTUMIERS ============ */
{
  nom: "Jacques Cujas", vie: "1522–1590 · XVIᵉ s.", groupe: "XVIᵉ s. — humanistes & coutumiers",
  courant: "Humanisme juridique — ROMANISTE",
  oeuvre: "Travaux de restitution du droit romain",
  essence: "Veut RETROUVER le vrai droit romain dans son contexte → constate et RÉAFFIRME le formalisme (rupture avec les médiévaux).",
  pos: [
    { t: "Formation", p: "FORMALISTE : restaure le droit romain dans son sens originel et réaffirme que le simple consentement ne suffit pas, en principe, à former le contrat." },
    { t: "Lésion", p: "LIBÉRAL : le prix relève de la liberté des parties (notion de « prix d'affection », prix bas accepté par considération) → plutôt DÉFAVORABLE à la rescision pour lésion." },
    { t: "Interprétation", p: "Énonce EXPLICITEMENT la théorie de l'acte clair : en cas de clarté, le juge ne peut pas interpréter. Favorable à l'interprétation contre le vendeur (« qui vend le pot dit le mot »)." }
  ],
  confusion: [
    { avec: "Jean Domat", note: "Le piège classique. Cujas (XVIᵉ, romaniste) RÉAFFIRME le formalisme ; Domat (XVIIᵉ, droit naturel) le REJETTE. Positions OPPOSÉES sur la formation." },
    { avec: "Charles Du Moulin", note: "Contemporains opposés : Cujas romaniste/formaliste ; Du Moulin coutumier/consensualiste." },
    { avec: "François Connan", note: "Même aile romaniste, mais Connan est plus RADICAL (refuse toute valeur au consentement) ; Cujas reste nuancé." }
  ]
},
{
  nom: "Charles Du Moulin", vie: "1500–1566 · XVIᵉ s.", groupe: "XVIᵉ s. — humanistes & coutumiers",
  courant: "Droit COUTUMIER (formé au droit romain)",
  oeuvre: "Commentaire de la Coutume de Paris",
  essence: "Le théoricien qui CONSACRE le consensualisme et défend un DROIT NATIONAL français.",
  pos: [
    { t: "Formation", p: "CONSENSUALISTE : le consentement suffit à former le contrat ; écarte le formalisme romain, inadapté à la pratique française ; les règles romaines ne valent qu'à titre supplétif, pour combler les lacunes." },
    { t: "Prêt à intérêts", p: "S'inspire de la distinction CALVINISTE entre intérêts LICITES et usure injuste (intérêts légitimes pour le riche / le commerce, interdits pour le pauvre dans le besoin)." },
    { t: "Lésion", p: "La rescision pour lésion peut profiter aux DEUX cocontractants (vendeur ET acheteur) lorsqu'il y a tromperie ou vice du consentement — et non au seul vendeur comme en droit romain." }
  ],
  confusion: [
    { avec: "Antoine Loysel", note: "Même camp (coutumier, consensualisme), mais Du Moulin ARGUMENTE la doctrine ; Loysel la RÉSUME en adages. Du Moulin précède et inspire Loysel." },
    { avec: "Jacques Cujas", note: "Contemporain opposé : Du Moulin consensualiste/coutumier ; Cujas formaliste/romaniste." },
    { avec: "Robert-Joseph Pothier", note: "Sur la lésion ils convergent (rescision possible pour les deux parties), mais Du Moulin est XVIᵉ/coutumier, Pothier XVIIIᵉ et inspire le Code." }
  ]
},
{
  nom: "François Connan", vie: "1508–1551 · XVIᵉ s.", groupe: "XVIᵉ s. — humanistes & coutumiers",
  courant: "Humanisme juridique — ROMANISTE (radical)",
  oeuvre: "",
  essence: "L'aile DURE des romanistes : refuse toute efficacité au simple consentement.",
  pos: [
    { t: "Formation", p: "Refuse au consentement toute efficacité juridique autonome : « on risque beaucoup si l'on est tenu par toutes les paroles ». Position extrême et minoritaire." }
  ],
  confusion: [
    { avec: "Jacques Cujas", note: "Tous deux romanistes/formalistes, mais Connan est RADICAL (rien sans forme) là où Cujas nuance. Connan = la position extrême du XVIᵉ." }
  ]
},
{
  nom: "Antoine Loysel", vie: "1536–1617 · XVIᵉ–XVIIᵉ s.", groupe: "XVIᵉ s. — humanistes & coutumiers",
  courant: "Droit COUTUMIER",
  oeuvre: "Institutes coutumières (recueil d'adages)",
  essence: "L'homme des ADAGES : il grave le consensualisme coutumier dans des formules-chocs.",
  pos: [
    { t: "Formation", p: "« On lie les bœufs par les cornes et les hommes par les paroles, et autant vaut une simple promesse que les stipulations du droit romain » : consécration du consensualisme." },
    { t: "Exécution", p: "« Toutes actions sont de bonne foi » : rupture avec les actions de droit strict romaines." },
    { t: "Interprétation", p: "« Qui vend le pot dit le mot » : interprétation du doute contre le vendeur." }
  ],
  confusion: [
    { avec: "Charles Du Moulin", note: "Retenir : Loysel = ADAGES (formules) ; Du Moulin = la DOCTRINE qui les fonde. Si la question cite une formule, c'est Loysel." }
  ]
},
{
  nom: "Charondas", vie: "XVIᵉ s.", groupe: "XVIᵉ s. — humanistes & coutumiers",
  courant: "Droit coutumier",
  oeuvre: "",
  essence: "Fonde l'interprétation selon les USAGES sur la volonté présumée des parties.",
  pos: [
    { t: "Interprétation", p: "« Il est vraisemblable que les contractants aient regardé à la coutume du pays et contracté selon celle-ci » : l'interprétation selon les usages repose sur la volonté présumée." }
  ],
  confusion: [
    { avec: "Vattel", note: "Deux auteurs qui justifient un critère OBJECTIF par la volonté présumée : Charondas (XVIᵉ) pour les USAGES ; Vattel (XVIIIᵉ) pour l'EFFICACITÉ de l'acte." }
  ]
},

/* ============ DROIT NATUREL (XVIIᵉ–XVIIIᵉ) ============ */
{
  nom: "Hugo Grotius", vie: "1583–1645 · XVIIᵉ s.", groupe: "Droit naturel (XVIIᵉ–XVIIIᵉ s.)",
  courant: "École du droit de la Nature et des Gens (fondateur)",
  oeuvre: "Le Droit de la guerre et de la paix",
  essence: "Donne au consensualisme un fondement LAÏQUE : le contrat obligerait « même si Dieu n'existait pas ».",
  pos: [
    { t: "Formation", p: "Le simple échange des consentements suffit ; l'écrit ou la parole ne sont que le signe extérieur de la volonté. Pacta sunt servanda." },
    { t: "Notion d'obligation", p: "Fonde l'obligation de tenir parole sur le DROIT NATUREL et la raison humaine, et non plus sur la religion (rupture avec les canonistes)." }
  ],
  confusion: [
    { avec: "Canonistes", note: "Même résultat (consensualisme) mais fondement différent : canonistes = religieux (manquer à sa parole est un péché) ; Grotius = laïc (nature humaine)." }
  ]
},
{
  nom: "Jean Domat", vie: "1625–1696 · XVIIᵉ s.", groupe: "Droit naturel (XVIIᵉ–XVIIIᵉ s.)",
  courant: "Droit naturel (sensibilité janséniste)",
  oeuvre: "Les lois civiles dans leur ordre naturel (1689)",
  essence: "Rationalise tout le droit civil sur le CONSENTEMENT et le droit naturel ; moraliste sévère sur le prêt.",
  pos: [
    { t: "Formation", p: "CONSENSUALISTE : le contrat naît du consentement mutuel, les parties « se font une loi » d'exécuter leurs promesses ; REJETTE le formalisme romain." },
    { t: "Prêt à intérêts", p: "CONTRE : la pratique est contraire à la loi divine, au droit naturel et à la justice. Position radicale, reprise par Pothier." },
    { t: "Interprétation", p: "Acte clair IMPLICITE : l'interprétation n'a lieu qu'en cas d'ambiguïté ; « suivre l'intention plutôt que les termes »." }
  ],
  confusion: [
    { avec: "Jacques Cujas", note: "OPPOSÉS sur la formation : Domat (droit naturel) rejette le formalisme que Cujas (romaniste) réaffirme." },
    { avec: "Robert-Joseph Pothier", note: "Même lignée : Domat (XVIIᵉ) pose le système, Pothier (XVIIIᵉ) le prolonge et inspire le Code. Tous deux CONTRE le prêt à intérêts." }
  ]
},
{
  nom: "Robert-Joseph Pothier", vie: "1699–1772 · XVIIIᵉ s.", groupe: "Droit naturel (XVIIᵉ–XVIIIᵉ s.)",
  courant: "Ancien droit français / droit naturel",
  oeuvre: "Traité des obligations (1761)",
  essence: "Le « père » du Code civil : synthétise l'ancien droit et inspire DIRECTEMENT les rédacteurs de 1804.",
  pos: [
    { t: "Formation", p: "CONSENSUALISTE : affirme le consensualisme, critique la distinction romaine contrats / simples pactes, étrangère au droit naturel français." },
    { t: "Prêt à intérêts", p: "CONTRE : reprend les positions radicales de Domat au XVIIIᵉ siècle." },
    { t: "Lésion", p: "La rescision peut profiter aux DEUX cocontractants en cas de tromperie (rejoint Du Moulin)." },
    { t: "Interprétation", p: "« Rechercher la commune intention des parties plutôt que le sens grammatical » : formule reprise presque mot pour mot à l'article 1156 du Code civil de 1804." }
  ],
  confusion: [
    { avec: "Jean Domat", note: "Domat (XVIIᵉ) précède, Pothier (XVIIIᵉ) suit et INSPIRE LE CODE. Si la question parle du « Traité des obligations » ou de l'inspiration directe de 1804 → Pothier." }
  ]
},
{
  nom: "Vattel", vie: "XVIIIᵉ s.", groupe: "Droit naturel (XVIIᵉ–XVIIIᵉ s.)",
  courant: "Droit naturel / droit des gens",
  oeuvre: "",
  essence: "Justifie la règle de l'EFFICACITÉ de l'acte par la volonté présumée des parties.",
  pos: [
    { t: "Interprétation", p: "« On ne présume point que des personnes censées aient prétendu ne rien faire » : entre deux sens, on retient celui qui donne un effet à la clause." }
  ],
  confusion: [
    { avec: "Charondas", note: "Vattel (XVIIIᵉ) = critère de l'EFFICACITÉ ; Charondas (XVIᵉ) = critère des USAGES. Tous deux fondés sur la volonté présumée." }
  ]
},

/* ============ CODE CIVIL (XVIIIᵉ–XIXᵉ) ============ */
{
  nom: "Cambacérès", vie: "1753–1824 · XVIIIᵉ–XIXᵉ s.", groupe: "Code civil (XVIIIᵉ–XIXᵉ s.)",
  courant: "Rédacteur des projets de Code civil",
  oeuvre: "Projets de Code civil",
  essence: "Auteur des premiers projets : son 2ᵉ projet SUPPRIME la rescision pour lésion.",
  pos: [
    { t: "Formation", p: "Participe à la consécration de la VOLONTÉ comme source des obligations contractuelles." },
    { t: "Lésion", p: "Dans son 2ᵉ projet, l'opposition libérale l'emporte : les dispositions sur la rescision pour lésion sont SUPPRIMÉES (avant d'être rétablies sous Napoléon)." }
  ],
  confusion: [
    { avec: "Portalis", note: "Sur la lésion ils s'opposent : le projet de Cambacérès la supprime ; Portalis (et Napoléon) la rétablissent." }
  ]
},
{
  nom: "Portalis", vie: "1746–1807 · XIXᵉ s.", groupe: "Code civil (XVIIIᵉ–XIXᵉ s.)",
  courant: "Rédacteur du Code civil de 1804",
  oeuvre: "Code civil de 1804",
  essence: "DÉFEND la rescision pour lésion : protéger le faible contre les excès de la liberté contractuelle.",
  pos: [
    { t: "Lésion", p: "FAVORABLE : rappelle son existence depuis le droit romain ; elle ne menace pas la stabilité contractuelle mais protège « le pauvre opprimé contre le riche qui abuse de l'occasion »." }
  ],
  confusion: [
    { avec: "Jourdan", note: "Portalis DÉFEND la rescision ; Jourdan la COMBAT. Camps opposés du débat du XIXᵉ siècle." },
    { avec: "Napoléon", note: "Même camp (pro-rescision) : Napoléon insiste sur le « contrat arraché au vendeur par le besoin » et la protection des immeubles." }
  ]
},
{
  nom: "Napoléon", vie: "1769–1821 · XIXᵉ s.", groupe: "Code civil (XVIIIᵉ–XIXᵉ s.)",
  courant: "Soutien politique du Code civil",
  oeuvre: "",
  essence: "Fait pencher la balance EN FAVEUR de la rescision pour lésion.",
  pos: [
    { t: "Lésion", p: "FAVORABLE : « il n'est pas juste de maintenir un contrat arraché au vendeur par le besoin » ; insiste sur la protection des IMMEUBLES (qui font partie du territoire)." }
  ],
  confusion: [
    { avec: "Portalis", note: "Même camp pro-rescision ; Portalis l'argumente juridiquement, Napoléon apporte le poids politique." }
  ]
},
{
  nom: "Jourdan", vie: "XIXᵉ s.", groupe: "Code civil (XVIIIᵉ–XIXᵉ s.)",
  courant: "Doctrine libérale du XIXᵉ siècle",
  oeuvre: "",
  essence: "Le pourfendeur de la rescision : « qui dit contractuel, dit juste ».",
  pos: [
    { t: "Lésion", p: "CONTRE : qualifie la rescision de « caprice législatif » et de « tache dans le Code » ; le juste-prix réside uniquement dans l'accord des parties." }
  ],
  confusion: [
    { avec: "Portalis", note: "L'exact opposé de Portalis. Formule à retenir pour Jourdan : « qui dit contractuel, dit juste »." }
  ]
}

];
