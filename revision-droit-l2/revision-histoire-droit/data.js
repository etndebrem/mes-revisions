/* =====================================================================
   Données de révision — Histoire du droit des obligations
   Cours de Céline Drand (L2). Extraites des notes Obsidian
   (Introduction / Formation / Détermination du contenu / Effets du contrat).

   Entrées CLASSÉES PAR CHAPITRE (champ « th »), dans l'ordre du cours
   (voir window.THEME_ORDER ci-dessous).

   Chaque entrée :
     t  : type  -> "auteur" (juriste/auteur) | "notion" (notion/mécanisme) | "texte" (source/article/ouvrage) | "adage" (adage/maxime)
     th : thème -> nom du chapitre (sert au filtrage)
     r  : référence (recto de la flashcard)
     m  : signification (verso de la flashcard)

   Pour ajouter une entrée, copiez une ligne et adaptez-la, puis rouvrez index.html.
   ===================================================================== */

window.THEME_ORDER = [
  "Intro · L'obligation & ses origines romaines",
  "Intro · Les classifications des obligations",
  "Formation · Le formalisme romain",
  "Formation · La naissance du consensualisme (Rome)",
  "Formation · Le Moyen Âge",
  "Formation · L'époque moderne & le consensualisme",
  "Contenu · Le prêt à intérêts",
  "Contenu · La lésion & le juste prix",
  "Contenu · L'interprétation du contrat",
  "Effets · La nullité & les vices du consentement",
  "Effets · Le régime des contrats (vente, louage…)",
  "Effets · L'exécution du contrat"
];

window.REPERTOIRE = [

/* ============ INTRODUCTION ============ */
/* --- L'obligation & ses origines romaines --- */
{t:"notion", th:"Intro · L'obligation & ses origines romaines", r:"L'obligation (droit privé)", m:`Lien de droit entre deux personnes par lequel le débiteur est tenu envers le créancier de donner, faire ou ne pas faire quelque chose.`},
{t:"notion", th:"Intro · L'obligation & ses origines romaines", r:"Le sens actif de l'obligation", m:`L'obligation envisagée du côté du créancier : le droit d'exiger une prestation, c'est-à-dire la créance (conception du juriste Paul).`},
{t:"notion", th:"Intro · L'obligation & ses origines romaines", r:"Le sens passif de l'obligation", m:`L'obligation envisagée du côté du débiteur : la dette, le lien de droit par lequel on est astreint à exécuter (Institutes de Justinien).`},
{t:"notion", th:"Intro · L'obligation & ses origines romaines", r:"Ancien droit romain", m:`Période la plus ancienne (fondation de Rome ~753 av. J.-C. au IIᵉ s. av. J.-C.) ; société agricole, droit des obligations rudimentaire ; source = Loi des XII Tables.`},
{t:"notion", th:"Intro · L'obligation & ses origines romaines", r:"Droit romain classique", m:`IIᵉ s. av. – IIIᵉ s. ap. J.-C. ; expansion économique et essor du commerce ; le DO se développe à partir de deux sources : l'édit du préteur et la jurisprudence.`},
{t:"notion", th:"Intro · L'obligation & ses origines romaines", r:"Droit romain post-classique", m:`Fin IIIᵉ – VIᵉ s. ; déclin des sources classiques ; le droit provient désormais de la législation impériale, aboutissant aux compilations de Justinien.`},
{t:"notion", th:"Intro · L'obligation & ses origines romaines", r:"L'édit du préteur", m:`Programme par lequel le préteur (magistrat) annonce les actions qu'il accordera ; source majeure du droit classique, fixée au IIᵉ s. sous la forme de l'édit perpétuel.`},
{t:"notion", th:"Intro · L'obligation & ses origines romaines", r:"Le droit prétorien", m:`Droit créé par le préteur grâce aux actions qu'il accorde (actiones in jus, utiles, in factum), adapté aux besoins économiques.`},
{t:"notion", th:"Intro · L'obligation & ses origines romaines", r:"La procédure formulaire", m:`Procédure introduite par le préteur, fondée sur la rédaction d'une formule, qui remplace progressivement les actions de la loi.`},
{t:"notion", th:"Intro · L'obligation & ses origines romaines", r:"Le droit des gens (jus gentium)", m:`Droit commun applicable aux citoyens romains et aux étrangers (pérégrins), distinct du droit civil réservé aux seuls citoyens.`},
{t:"notion", th:"Intro · L'obligation & ses origines romaines", r:"La jurisprudence romaine", m:`Activité doctrinale des juristes consultes commentant l'édit du préteur ; elle élabore les concepts et catégories du droit des obligations.`},
{t:"auteur", th:"Intro · L'obligation & ses origines romaines", r:"Paul (juriste romain)", m:`Juriste du IIIᵉ s. ; met en avant le sens actif de l'obligation : sa nature est « d'obliger en vue de quelque chose ».`},
{t:"auteur", th:"Intro · L'obligation & ses origines romaines", r:"Gaius", m:`Juriste romain ; auteur d'Institutes influentes ; à l'origine de classifications des obligations (selon l'objet ; bipartite contrats/délits).`},
{t:"auteur", th:"Intro · L'obligation & ses origines romaines", r:"Justinien", m:`Empereur (VIᵉ s.) à l'initiative des grandes compilations du droit romain (Code, Digeste, Institutes, Novelles).`},
{t:"texte", th:"Intro · L'obligation & ses origines romaines", r:"La Loi des XII Tables (~450 av. J.-C.)", m:`Première mise par écrit du droit romain (sur douze tables) ; principale source du droit privé sous l'ancien droit romain.`},
{t:"texte", th:"Intro · L'obligation & ses origines romaines", r:"Les compilations de Justinien (Corpus juris civilis)", m:`Première compilation officielle du droit romain (VIᵉ s.) : Code, Digeste, Institutes, Novelles ; redécouvertes au Moyen Âge.`},
{t:"texte", th:"Intro · L'obligation & ses origines romaines", r:"Le Digeste", m:`Recueil des écrits des juristes consultes (la doctrine) dans les compilations de Justinien ; source de nombreuses règles du DO.`},
{t:"texte", th:"Intro · L'obligation & ses origines romaines", r:"Les Institutes de Justinien", m:`Ouvrage des compilations (VIᵉ s.) définissant l'obligation comme « un lien de droit par lequel nous sommes astreints… à payer quelque chose ».`},
{t:"adage", th:"Intro · L'obligation & ses origines romaines", r:"« Pas de droit sans action »", m:`En droit romain, un droit n'existe que s'il est sanctionné par une action en justice : c'est l'action qui crée le droit (logique inversée à partir du XVIᵉ s.).`},

/* --- Les classifications des obligations --- */
{t:"notion", th:"Intro · Les classifications des obligations", r:"Classification selon l'objet", m:`Distinction des obligations de donner, de faire et de ne pas faire ; origine dans la jurisprudence romaine (Gaius, Paul), reprise par le CC de 1804 (art. 1101).`},
{t:"notion", th:"Intro · Les classifications des obligations", r:"L'obligation civile", m:`Obligation dont on peut demander l'exécution forcée en justice (ex. le paiement du prix dans une vente).`},
{t:"notion", th:"Intro · Les classifications des obligations", r:"L'obligation naturelle", m:`Obligation qui ne peut faire l'objet d'une action en justice (devoir de conscience) ; mais ce qui est volontairement payé ne peut être répété (ex. dette prescrite).`},
{t:"notion", th:"Intro · Les classifications des obligations", r:"La classification quadripartite (selon la source)", m:`Distinction des obligations contractuelles, délictuelles, quasi-contractuelles et quasi-délictuelles ; consacrée sous Justinien (Digeste, Institutes).`},
{t:"notion", th:"Intro · Les classifications des obligations", r:"L'obligation contractuelle", m:`Obligation née d'un contrat, acte juridique licite fondé sur l'accord de volontés en vue de créer une ou plusieurs obligations.`},
{t:"notion", th:"Intro · Les classifications des obligations", r:"L'obligation délictuelle", m:`Obligation née d'un délit : un fait illicite intentionnel causant un préjudice et obligeant son auteur à le réparer.`},
{t:"notion", th:"Intro · Les classifications des obligations", r:"L'obligation quasi-contractuelle", m:`Obligation née d'un fait juridique volontaire et licite, sans accord préalable des parties (ex. la gestion d'affaires).`},
{t:"notion", th:"Intro · Les classifications des obligations", r:"L'obligation quasi-délictuelle", m:`Obligation née d'un fait illicite non intentionnel ayant causé un dommage.`},
{t:"notion", th:"Intro · Les classifications des obligations", r:"Acte juridique / fait juridique", m:`Distinction retenue par la réforme de 2016 (en remplacement de la classification quadripartite) ; le contrat demeure le modèle de référence (art. 1101-1).`},
{t:"auteur", th:"Intro · Les classifications des obligations", r:"Loysel (Antoine)", m:`Juriste français (XVIᵉ s.) ; auteur d'adages consacrant le consensualisme et la bonne foi en droit coutumier.`},

/* ============ FORMATION DES CONTRATS ============ */
/* --- Le formalisme romain --- */
{t:"notion", th:"Formation · Le formalisme romain", r:"Le formalisme (droit romain ancien)", m:`Principe selon lequel le seul accord de volontés (« pacte ») ne crée pas d'obligation : il faut accomplir des formalités déterminées.`},
{t:"notion", th:"Formation · Le formalisme romain", r:"Le mutuum", m:`Prêt de consommation, contrat réel formé par la remise (dation) de la chose ; conclu à titre gratuit et portant sur des choses fongibles.`},
{t:"notion", th:"Formation · Le formalisme romain", r:"La stipulation (stipulatio)", m:`Contrat verbal formé par une question et une réponse en termes parfaitement correspondants ; véritable « moule à contrat ».`},
{t:"notion", th:"Formation · Le formalisme romain", r:"L'expensilatio", m:`Contrat littéral : une inscription parallèle au registre de comptes (codex) fait naître la dette ; sanctionné par le droit civil, donc réservé aux citoyens romains.`},
{t:"notion", th:"Formation · Le formalisme romain", r:"Le contrat unilatéral", m:`Contrat faisant naître des obligations à la charge d'une seule partie (mutuum, stipulatio, expensilatio).`},
{t:"notion", th:"Formation · Le formalisme romain", r:"Les actions de droit strict", m:`Actions où le juge est tenu par un formalisme rigoureux : il vérifie le respect des formes, sans examiner le consentement, le dol, la bonne foi ou l'équité.`},
{t:"notion", th:"Formation · Le formalisme romain", r:"L'acte abstrait", m:`Acte détaché de sa cause (conséquence du formalisme) : les parties peuvent se retrouver liées contre leur volonté.`},
{t:"auteur", th:"Formation · Le formalisme romain", r:"Valère Maxime", m:`Auteur romain ; rapporte l'exemple de l'expensilatio détournée (un malade au profit de sa maîtresse), illustrant les dérives du droit strict.`},
{t:"adage", th:"Formation · Le formalisme romain", r:"« Le simple pacte ne procure pas d'action »", m:`Principe fondateur du formalisme romain : un pacte nu ne fait pas naître d'action en justice au profit du créancier.`},

/* --- La naissance du consensualisme (Rome) --- */
{t:"notion", th:"Formation · La naissance du consensualisme (Rome)", r:"Le consensualisme", m:`Principe selon lequel le seul accord de volontés (consentement) suffit à former le contrat ; il émerge à l'époque classique.`},
{t:"notion", th:"Formation · La naissance du consensualisme (Rome)", r:"Les contrats consensuels nommés", m:`Quatre contrats formés par le seul consentement, relevant du droit des gens (accessibles aux pérégrins) : vente, louage, société, mandat (liste limitative).`},
{t:"notion", th:"Formation · La naissance du consensualisme (Rome)", r:"La vente (emptio venditio)", m:`Contrat consensuel formé par l'accord sur la chose et sur le prix.`},
{t:"notion", th:"Formation · La naissance du consensualisme (Rome)", r:"Le louage (locatio conductio)", m:`Contrat consensuel formé par l'accord sur la chose louée et sur le loyer.`},
{t:"notion", th:"Formation · La naissance du consensualisme (Rome)", r:"La société (societas) & le mandat (mandatum)", m:`Deux des quatre contrats consensuels nommés du droit romain, formés par le simple échange des consentements.`},
{t:"notion", th:"Formation · La naissance du consensualisme (Rome)", r:"L'action de bonne foi (ex fide bona)", m:`Action dont la formule comporte une clause de bonne foi donnant au juge un large pouvoir d'appréciation : équité, intention réelle, sanction des comportements déloyaux.`},
{t:"notion", th:"Formation · La naissance du consensualisme (Rome)", r:"Les contrats innommés", m:`Contrats hors des catégories reconnues et sans action propre ; protégés lorsqu'une partie a déjà exécuté son obligation sans contrepartie.`},
{t:"notion", th:"Formation · La naissance du consensualisme (Rome)", r:"Les pactes (adjoints, prétoriens, légitimes)", m:`Pactes dépourvus en principe de valeur, mais auxquels une force obligatoire est progressivement reconnue (par la jurisprudence, le préteur, ou les constitutions impériales).`},
{t:"texte", th:"Formation · La naissance du consensualisme (Rome)", r:"Article 1172-1 du Code civil", m:`Pose le principe, depuis la réforme, que les contrats sont par principe consensuels.`},

/* --- Le Moyen Âge --- */
{t:"notion", th:"Formation · Le Moyen Âge", r:"Le droit franc", m:`Coutumes barbares rudimentaires marquant un retour à un formalisme strict ; il ignore le consensualisme et ne connaît que deux contrats : solennels et réels.`},
{t:"notion", th:"Formation · Le Moyen Âge", r:"Les contrats solennels (fides facta/data)", m:`Contrats francs formés par des rituels matérialisant la « foi donnée » : festuca, paumée, vin du marché, denier à Dieu, serment.`},
{t:"notion", th:"Formation · Le Moyen Âge", r:"La festuca", m:`Baguette de bois utilisée dans le rituel des contrats solennels francs (jetée, remise, ou cassée et partagée), avec paroles et témoins.`},
{t:"notion", th:"Formation · Le Moyen Âge", r:"Le serment (contrats francs)", m:`Engagement religieux qui lie les parties et Dieu, conférant à l'Église une compétence sur les litiges contractuels (sanction : excommunication).`},
{t:"notion", th:"Formation · Le Moyen Âge", r:"La théorie des pactes vêtus", m:`Théorie des glossateurs : les pactes nus (« comme une femme stérile ») ne produisent rien ; les pactes « vêtus » (par des formalités ou, pour 4 contrats, par le consentement) obligent.`},
{t:"notion", th:"Formation · Le Moyen Âge", r:"La glose", m:`Note explicative ajoutée en marge des textes romains par les glossateurs, pour en transmettre le sens exact.`},
{t:"notion", th:"Formation · Le Moyen Âge", r:"L'école des glossateurs", m:`École de Bologne (fondée par Irnerius, XIIᵉ s.) commentant les compilations de Justinien au moyen de gloses.`},
{t:"notion", th:"Formation · Le Moyen Âge", r:"Les post-glossateurs (commentateurs)", m:`Juristes (Bartole, Balde) cherchant des solutions pratiques ; ils élargissent les pactes vêtus et font évoluer le droit romain vers le consensualisme.`},
{t:"notion", th:"Formation · Le Moyen Âge", r:"Le droit canonique", m:`Droit de l'Église, appliqué par ses juridictions ; les canonistes y imposent le consensualisme (manquer à sa promesse est un péché).`},
{t:"auteur", th:"Formation · Le Moyen Âge", r:"Irnerius", m:`Fondateur de l'école des glossateurs à Bologne (XIIᵉ s.), relançant l'étude du droit romain.`},
{t:"auteur", th:"Formation · Le Moyen Âge", r:"Bartole", m:`Post-glossateur italien majeur (XIVᵉ s.) ; cherche à faire évoluer le droit romain vers la pratique et le consensualisme ; distingue lois d'utilité publique et privée.`},
{t:"auteur", th:"Formation · Le Moyen Âge", r:"Balde", m:`Disciple de Bartole ; un contrat est valable dès lors qu'il a une cause, et tous les contrats doivent être tenus pour de bonne foi (déclin des actions de droit strict).`},
{t:"auteur", th:"Formation · Le Moyen Âge", r:"Philippe de Beaumanoir", m:`Auteur des Coutumes de Beauvaisis (XIIIᵉ s.) ; reconnaît que l'échange de consentement suffit à créer un contrat (consensualisme coutumier).`},
{t:"texte", th:"Formation · Le Moyen Âge", r:"Les Coutumes de Beauvaisis", m:`Ouvrage de Beaumanoir (XIIIᵉ s.) mettant par écrit les usages du Beauvaisis : « marché est fait sitôt comme il est créanté à tenir par l'accord des parties ».`},
{t:"texte", th:"Formation · Le Moyen Âge", r:"Le Corpus juris canonici", m:`Compilation du droit canonique (XIIᵉ-XIIIᵉ s.), équivalent du Corpus juris civilis, commentée par les canonistes.`},
{t:"adage", th:"Formation · Le Moyen Âge", r:"« Seul le consentement oblige »", m:`Adage canonique consacrant le consensualisme : Dieu ne distingue pas le serment formel de la simple promesse, dont le manquement est un péché.`},
{t:"adage", th:"Formation · Le Moyen Âge", r:"« Toutes convenances sont à tenir »", m:`Adage coutumier médiéval exprimant l'émergence du consensualisme contractuel.`},

/* --- L'époque moderne & le consensualisme --- */
{t:"notion", th:"Formation · L'époque moderne & le consensualisme", r:"L'humanisme juridique", m:`Mouvement du XVIᵉ s. (Renaissance) visant à restaurer le sens originel du droit romain ; il constate et réaffirme le formalisme romain (rupture avec les médiévaux).`},
{t:"notion", th:"Formation · L'époque moderne & le consensualisme", r:"L'École du droit de la Nature et des Gens", m:`École fondée par Grotius, fondant le droit sur la raison et le droit naturel ; elle justifie le consensualisme sur un fondement laïque.`},
{t:"notion", th:"Formation · L'époque moderne & le consensualisme", r:"Le droit naturel", m:`Droit universel fondé sur la raison humaine ; il fonde l'obligation de respecter la parole donnée, indépendamment de toute référence religieuse.`},
{t:"notion", th:"Formation · L'époque moderne & le consensualisme", r:"Le commencement de preuve par écrit", m:`Écrit imparfait que les parties peuvent compléter par des témoignages ; tempérament à la primauté de la preuve écrite (dès le XVIᵉ s.).`},
{t:"auteur", th:"Formation · L'époque moderne & le consensualisme", r:"Jacques Cujas", m:`Humaniste du XVIᵉ s. ; restitue le droit romain dans son sens originel et réaffirme le formalisme romain.`},
{t:"auteur", th:"Formation · L'époque moderne & le consensualisme", r:"François Connan", m:`Juriste du XVIᵉ s. ; position radicale refusant toute efficacité au consentement (« on risque beaucoup si l'on est tenu par toutes les paroles »).`},
{t:"auteur", th:"Formation · L'époque moderne & le consensualisme", r:"Charles Du Moulin", m:`Juriste du XVIᵉ s. ; consacre le consensualisme en commentant la coutume de Paris et défend l'existence d'un droit national français.`},
{t:"auteur", th:"Formation · L'époque moderne & le consensualisme", r:"Hugo Grotius", m:`Fondateur de l'École du droit de la Nature et des Gens ; fonde le consensualisme sur le droit naturel (pacta sunt servanda) : le contrat obligerait « même si Dieu n'existait pas ».`},
{t:"auteur", th:"Formation · L'époque moderne & le consensualisme", r:"Jean Domat", m:`Juriste du XVIIᵉ s. ; dans « Les lois civiles dans leur ordre naturel », fonde le contrat sur le consentement mutuel et rejette le formalisme romain.`},
{t:"auteur", th:"Formation · L'époque moderne & le consensualisme", r:"Pothier", m:`Juriste du XVIIIᵉ s. ; son « Traité des obligations » affirme le consensualisme et inspire directement les rédacteurs du Code civil de 1804.`},
{t:"auteur", th:"Formation · L'époque moderne & le consensualisme", r:"Cambacérès", m:`Auteur des projets de Code civil ; participe à la consécration de la volonté comme source des obligations contractuelles.`},
{t:"texte", th:"Formation · L'époque moderne & le consensualisme", r:"« Le Droit de la guerre et de la paix » (Grotius)", m:`Ouvrage posant les bases du droit international, contenant aussi une théorie générale du contrat fondée sur le droit naturel.`},
{t:"texte", th:"Formation · L'époque moderne & le consensualisme", r:"« Les lois civiles dans leur ordre naturel » (Domat)", m:`Définit le contrat par le consentement mutuel ; rejette le formalisme romain au profit du droit naturel.`},
{t:"texte", th:"Formation · L'époque moderne & le consensualisme", r:"« Traité des obligations » (Pothier)", m:`Affirme le consensualisme, critique la distinction romaine contrats/pactes, et inspire le Code civil de 1804.`},
{t:"texte", th:"Formation · L'époque moderne & le consensualisme", r:"La coutume de Paris", m:`Coutume commentée par Du Moulin, qui y consacre la formation du contrat par le simple échange des consentements.`},
{t:"texte", th:"Formation · L'époque moderne & le consensualisme", r:"L'ordonnance de Moulins (1566)", m:`Pose le principe de la preuve des contrats par écrit (interdit les témoignages contre un écrit) ; vise à rationaliser la justice.`},
{t:"texte", th:"Formation · L'époque moderne & le consensualisme", r:"La Grande ordonnance civile (1667)", m:`Sous Louis XIV ; confirme la primauté de la preuve par écrit posée par l'ordonnance de Moulins.`},
{t:"texte", th:"Formation · L'époque moderne & le consensualisme", r:"Le Code civil de 1804", m:`Ne retient du droit romain que le consensualisme (rejetant le formalisme) ; consacre le contrat aux articles 1101 et 1134.`},
{t:"texte", th:"Formation · L'époque moderne & le consensualisme", r:"Article 1134 du Code civil (1804)", m:`« Les conventions légalement formées tiennent lieu de loi à ceux qui les ont faites » : force obligatoire, irrévocabilité unilatérale et exécution de bonne foi.`},
{t:"texte", th:"Formation · L'époque moderne & le consensualisme", r:"Article 1103 du Code civil (2016)", m:`« Les contrats légalement formés tiennent lieu de loi à ceux qui les ont faits » : reprend presque mot pour mot l'ancien article 1134 (continuité).`},
{t:"adage", th:"Formation · L'époque moderne & le consensualisme", r:"Pacta sunt servanda", m:`« Les conventions doivent être respectées » (formulé par Grotius) : fonde le consensualisme sur le droit naturel, indépendamment de la religion.`},
{t:"adage", th:"Formation · L'époque moderne & le consensualisme", r:"« On lie les bœufs par les cornes et les hommes par les paroles »", m:`Adage de Loysel consacrant le consensualisme : « autant vaut une simple promesse que les stipulations du droit romain ».`},
{t:"adage", th:"Formation · L'époque moderne & le consensualisme", r:"« Toutes actions sont de bonne foi »", m:`Adage de Loysel : rupture avec le droit romain, tous les contrats doivent être exécutés de bonne foi (disparition des actions de droit strict).`},
{t:"adage", th:"Formation · L'époque moderne & le consensualisme", r:"« Témoin passe lettre » / « Lettre passe témoin »", m:`Deux adages successifs sur la preuve : au Moyen Âge le témoignage l'emporte sur l'écrit ; à l'époque moderne, l'écrit l'emporte sur le témoignage.`},

/* ============ CONTENU DES CONTRATS ============ */
/* --- Le prêt à intérêts --- */
{t:"notion", th:"Contenu · Le prêt à intérêts", r:"L'autonomie de la volonté", m:`Idée que les parties sont libres de déterminer le contenu du contrat ; le Code civil y apporte une réponse limitée (ordre public, bonnes mœurs).`},
{t:"notion", th:"Contenu · Le prêt à intérêts", r:"La liberté contractuelle", m:`Liberté de contracter ou non, de choisir son cocontractant et de déterminer le contenu et la forme du contrat, dans les limites fixées par la loi (art. 1102).`},
{t:"notion", th:"Contenu · Le prêt à intérêts", r:"Le prêt à intérêts", m:`Prêt par lequel le prêteur reçoit des intérêts en sus du capital ; d'abord encadré (taux), puis prohibé au Moyen Âge sous le nom d'usure.`},
{t:"notion", th:"Contenu · Le prêt à intérêts", r:"L'usure", m:`Terme médiéval désignant le prêt à intérêts, prohibé par l'Église (péché mortel pour clercs et laïcs dès le Vᵉ s.).`},
{t:"notion", th:"Contenu · Le prêt à intérêts", r:"L'anatocisme", m:`Capitalisation des intérêts échus non payés (admis en droit romain classique ; repris au CC, art. 1343-2).`},
{t:"notion", th:"Contenu · Le prêt à intérêts", r:"Le prêt de la grosse aventure", m:`Prêt maritime à risque : intérêts libres si l'opération réussit, pas de remboursement en cas de perte de la cargaison (jusqu'au Code de commerce de 1806).`},
{t:"notion", th:"Contenu · Le prêt à intérêts", r:"Les monts de Piété", m:`Institutions créées par l'Église au XVIᵉ s. pour prêter aux pauvres à faible intérêt : reconnaissance de la licéité du paiement d'intérêts.`},
{t:"auteur", th:"Contenu · Le prêt à intérêts", r:"Aristote", m:`Philosophe invoqué contre le prêt à intérêts : l'argent est « infertile » et ne peut produire d'intérêts.`},
{t:"texte", th:"Contenu · Le prêt à intérêts", r:"La loi de 1789 (prêt à intérêts)", m:`Sous la Révolution, autorise tout particulier à prêter de l'argent avec stipulation d'intérêts, dans la limite du taux fixé par la loi (fin de l'interdiction).`},
{t:"texte", th:"Contenu · Le prêt à intérêts", r:"Article 1905 du Code civil", m:`Consacre le principe de l'autorisation du prêt à intérêts.`},

/* --- La lésion & le juste prix --- */
{t:"notion", th:"Contenu · La lésion & le juste prix", r:"La rescision pour lésion", m:`Sanction annulant une vente où une partie est manifestement lésée (déséquilibre prix/valeur) ; annulation facultative (l'acheteur peut « racheter la lésion »).`},
{t:"notion", th:"Contenu · La lésion & le juste prix", r:"La lésion énorme (laesio enormis)", m:`Condition romaine de la rescision : la lésion doit atteindre au moins la moitié de la valeur ; ouverte au seul vendeur, pour les immeubles (époque post-classique).`},
{t:"notion", th:"Contenu · La lésion & le juste prix", r:"Le juste-prix", m:`Valeur intrinsèque et objective d'une chose (doctrine canonique), s'imposant aux parties ; s'en écarter pour s'enrichir au détriment d'autrui est illicite.`},
{t:"notion", th:"Contenu · La lésion & le juste prix", r:"Le bonus dolus (« bon dol »)", m:`En droit romain, les manœuvres habiles de négociation sont licites : chacun cherche légitimement son profit, sans sanction.`},
{t:"notion", th:"Contenu · La lésion & le juste prix", r:"Le prix d'affection", m:`Prix relativement bas accepté par attachement pour l'acheteur ; illustre la conception libérale du prix (Cujas).`},
{t:"notion", th:"Contenu · La lésion & le juste prix", r:"Lois impératives / lois supplétives", m:`Distinction préparée par Bartole (lois d'utilité publique, auxquelles on ne peut renoncer / d'utilité privée) ; née de l'examen des clauses de renonciation.`},
{t:"auteur", th:"Contenu · La lésion & le juste prix", r:"Portalis", m:`Rédacteur du Code civil ; défend la rescision pour lésion (protéger « le pauvre opprimé contre le riche qui abuse de l'occasion »).`},
{t:"auteur", th:"Contenu · La lésion & le juste prix", r:"Jourdan", m:`Auteur du XIXᵉ s. qualifiant la rescision de « caprice législatif » et de « tache dans le Code » : pour lui, « qui dit contractuel, dit juste ».`},
{t:"auteur", th:"Contenu · La lésion & le juste prix", r:"Napoléon", m:`Soutient la rescision pour lésion : il n'est pas juste de maintenir « un contrat arraché au vendeur par le besoin » ; insiste sur la protection des immeubles.`},
{t:"texte", th:"Contenu · La lésion & le juste prix", r:"Le décret du 14 fructidor an III (1795)", m:`Supprime la rescision pour lésion sous la Révolution (idéologie libérale + inflation des assignats) ; abolition temporaire (rétablie dès 1797).`},
{t:"texte", th:"Contenu · La lésion & le juste prix", r:"Article 1674 du Code civil", m:`Pour la vente d'immeuble, la lésion doit atteindre au moins 7/12 de la valeur estimée du bien pour ouvrir la rescision.`},
{t:"texte", th:"Contenu · La lésion & le juste prix", r:"Article 1305 du Code civil (1804)", m:`« La simple lésion donne lieu à la rescision en faveur du mineur non émancipé contre toutes sortes de conventions » (protection large des mineurs).`},
{t:"adage", th:"Contenu · La lésion & le juste prix", r:"« Qui dit contractuel, dit juste »", m:`Formule libérale (Jourdan) : le juste-prix réside uniquement dans l'accord des parties ; argument contre la rescision pour lésion.`},

/* --- L'interprétation du contrat --- */
{t:"notion", th:"Contenu · L'interprétation du contrat", r:"La théorie de l'acte clair", m:`Lorsque les termes du contrat sont clairs et précis, le juge doit retenir leur sens littéral et ne peut interpréter (sécurité juridique ; origine : Digeste).`},
{t:"notion", th:"Contenu · L'interprétation du contrat", r:"La dénaturation du contrat", m:`Interprétation abusive d'un contrat clair, censurée par la Cour de cassation depuis 1872 ; fondée sur l'article 1134 (le contrat s'impose aussi au juge).`},
{t:"notion", th:"Contenu · L'interprétation du contrat", r:"La primauté de la volonté sur la lettre", m:`En cas d'ambiguïté, le juge recherche la commune intention des parties plutôt que le sens littéral des termes (1ʳᵉ règle d'interprétation).`},
{t:"notion", th:"Contenu · L'interprétation du contrat", r:"Critères subjectifs / objectifs d'interprétation", m:`Les critères subjectifs recherchent la volonté réelle des parties ; les critères objectifs s'appuient sur le texte, l'efficacité de l'acte et les usages.`},
{t:"notion", th:"Contenu · L'interprétation du contrat", r:"La règle de l'efficacité de l'acte", m:`Entre deux sens possibles d'une clause, le juge retient celui qui lui confère un effet juridique (préserve la force obligatoire ; art. 1157 → 1191).`},
{t:"auteur", th:"Contenu · L'interprétation du contrat", r:"Vattel", m:`Auteur du XVIIIᵉ s. ; justifie la règle de l'efficacité par la volonté présumée des parties (« on ne présume pas qu'elles aient prétendu ne rien faire »).`},
{t:"auteur", th:"Contenu · L'interprétation du contrat", r:"Charondas", m:`Auteur du XVIᵉ s. ; justifie l'interprétation selon les usages par la volonté présumée des parties (« contracté selon la coutume du pays »).`},
{t:"texte", th:"Contenu · L'interprétation du contrat", r:"Article 1156 du Code civil (1804)", m:`« On doit dans les conventions rechercher quelle a été la commune intention des parties… plutôt que de s'arrêter au sens littéral des termes » (repris à l'art. 1188).`},
{t:"texte", th:"Contenu · L'interprétation du contrat", r:"Cour de cassation, 1872 (dénaturation)", m:`Première censure d'une interprétation abusive d'un contrat clair (affiche d'usine prévoyant une prime « facultative »), qualifiée de dénaturation.`},

/* ============ EFFETS DU CONTRAT ============ */
/* --- La nullité & les vices du consentement --- */
{t:"notion", th:"Effets · La nullité & les vices du consentement", r:"La nullité", m:`Sanction frappant le contrat qui ne remplit pas les conditions de validité fixées par le droit ; elle a pour effet d'anéantir le contrat.`},
{t:"notion", th:"Effets · La nullité & les vices du consentement", r:"Les vices du consentement", m:`L'erreur, le dol et la violence (art. 1130 CC) ; ignorés par le droit romain ancien formaliste, pris en compte avec le consensualisme.`},
{t:"notion", th:"Effets · La nullité & les vices du consentement", r:"L'erreur", m:`Fausse représentation de la réalité ; doit être déterminante et excusable ; l'erreur de droit est exclue. Types romains : error in negotio, in persona, in corpore, sur la substance.`},
{t:"notion", th:"Effets · La nullité & les vices du consentement", r:"Le dol", m:`Manœuvres frauduleuses destinées à tromper le cocontractant ; d'abord un délit en droit romain, le dol entraîne ensuite la nullité du contrat.`},
{t:"notion", th:"Effets · La nullité & les vices du consentement", r:"La violence", m:`Contrainte inspirant une crainte déterminante qui pousse à consentir ; vice du consentement (traité comme le dol en droit romain).`},
{t:"notion", th:"Effets · La nullité & les vices du consentement", r:"L'objet (le contenu) du contrat", m:`La prestation ; il doit être certain, possible, licite et conforme aux bonnes mœurs (exigences héritées du droit romain ; art. 1128 CC).`},
{t:"notion", th:"Effets · La nullité & les vices du consentement", r:"Les clauses de renonciation", m:`Clauses médiévales par lesquelles les parties renoncent à invoquer le droit romain (l'annulation) ; devenues quasi automatiques chez les notaires français.`},
{t:"notion", th:"Effets · La nullité & les vices du consentement", r:"Les lettres de rescision", m:`Lettres délivrées par la chancellerie royale permettant d'écarter une clause de renonciation et de demander au juge la nullité du contrat (Ancien Régime).`},
{t:"notion", th:"Effets · La nullité & les vices du consentement", r:"Nullité relative / nullité absolue", m:`Distinction héritée des lettres de rescision : nullité protégeant un intérêt privé (lettre nécessaire) / nullité pour cause publique (prononcée directement par le juge).`},
{t:"auteur", th:"Effets · La nullité & les vices du consentement", r:"Dioclétien", m:`Empereur dont un texte (repris par Justinien) affirme la nullité des conventions contraires aux bonnes mœurs.`},
{t:"texte", th:"Effets · La nullité & les vices du consentement", r:"Article 1130 du Code civil", m:`Énumère les trois vices du consentement : l'erreur, la violence et le dol.`},
{t:"texte", th:"Effets · La nullité & les vices du consentement", r:"Article 6 du Code civil", m:`« On ne peut déroger, par des conventions particulières, aux lois qui intéressent l'ordre public et les bonnes mœurs » (prépare la distinction lois impératives/supplétives).`},
{t:"adage", th:"Effets · La nullité & les vices du consentement", r:"« Les voies de nullité n'ont pas lieu en France »", m:`Adage exprimant l'hostilité médiévale française à l'annulation des contrats, par attachement à la stabilité contractuelle.`},

/* --- Le régime des contrats (vente, louage…) --- */
{t:"notion", th:"Effets · Le régime des contrats (vente, louage…)", r:"L'obligation de délivrance", m:`Obligation du vendeur de mettre l'acheteur en possession de la chose vendue (tradition) ; origine romaine.`},
{t:"notion", th:"Effets · Le régime des contrats (vente, louage…)", r:"Le transfert de propriété solo consensu", m:`En droit français, la propriété est transférée dès l'accord sur la chose et le prix (art. 1583 CC), à la différence du droit romain qui exigeait la livraison.`},
{t:"notion", th:"Effets · Le régime des contrats (vente, louage…)", r:"La garantie d'éviction", m:`Le vendeur doit garantir à l'acheteur une possession paisible et durable ; il doit l'assister en cas de procès et le réparer en cas d'éviction (art. 1626 CC).`},
{t:"notion", th:"Effets · Le régime des contrats (vente, louage…)", r:"La garantie des vices cachés", m:`L'acheteur peut agir contre le vendeur si un vice caché rend la chose impropre à son usage ou en diminue la valeur (art. 1641 CC) : résolution ou réduction du prix.`},
{t:"notion", th:"Effets · Le régime des contrats (vente, louage…)", r:"Le contrat de louage (locatio conductio)", m:`Contrat synallagmatique par lequel le bailleur (locator) remet la jouissance d'une chose au preneur (conductor) moyennant un loyer.`},
{t:"notion", th:"Effets · Le régime des contrats (vente, louage…)", r:"Louage de choses / de services / d'industrie", m:`Trois catégories de louage selon l'objet : la jouissance d'une chose ; la force de travail (salarié) ; la réalisation d'un ouvrage (entrepreneur).`},
{t:"texte", th:"Effets · Le régime des contrats (vente, louage…)", r:"Article 1583 du Code civil", m:`« La propriété est acquise de droit à l'acheteur… dès qu'on est convenu de la chose et du prix, quoique la chose n'ait pas encore été livrée ni le prix payé. »`},
{t:"texte", th:"Effets · Le régime des contrats (vente, louage…)", r:"Article 1641 du Code civil", m:`« Le vendeur est tenu de la garantie à raison des défauts cachés de la chose vendue. »`},
{t:"adage", th:"Effets · Le régime des contrats (vente, louage…)", r:"« Qui doit garantir ne peut évincer »", m:`Adage romain : tenu de la garantie d'éviction, le vendeur ne peut lui-même venir reprendre la chose vendue à l'acheteur.`},

/* --- L'exécution du contrat --- */
{t:"notion", th:"Effets · L'exécution du contrat", r:"Le paiement (solutio)", m:`Exécution de la prestation prévue (pas seulement le versement d'argent) ; « solutio » = dénouement, l'exécution mettant fin au lien contractuel.`},
{t:"notion", th:"Effets · L'exécution du contrat", r:"La dation en paiement", m:`Donner autre chose que ce qui était prévu, avec l'accord du créancier, pour se libérer ; admise dès le droit romain classique et reçue au Code civil.`},
{t:"notion", th:"Effets · L'exécution du contrat", r:"La compensation", m:`Extinction des dettes réciproques lorsque deux personnes sont créancière et débitrice l'une de l'autre ; évite de transporter des sommes d'argent.`},
{t:"notion", th:"Effets · L'exécution du contrat", r:"La manus injectio", m:`« Mainmise » du créancier sur le débiteur défaillant (Loi des XII Tables) : prison privée, puis vente comme esclave, mise au travail ou même mise à mort.`},
{t:"notion", th:"Effets · L'exécution du contrat", r:"La contrainte par corps", m:`Emprisonnement du débiteur défaillant ; rétablie par l'ordonnance de Moulins (1566), assouplie en 1667, abolie en matière civile en 1867 (maintenue pour les dettes fiscales).`},
{t:"notion", th:"Effets · L'exécution du contrat", r:"L'exécution forcée sur les biens", m:`Saisie du patrimoine du débiteur (apparue à l'époque classique, fait du préteur) ; passe d'une saisie globale (venditio bonorum) à une saisie partielle.`},
{t:"notion", th:"Effets · L'exécution du contrat", r:"L'excommunication (pour dette)", m:`Sanction spirituelle médiévale garantissant l'exécution : marginalisation sociale du débiteur (privé de sacrements et de sépulture) ; recule à partir du XIVᵉ s.`},
{t:"texte", th:"Effets · L'exécution du contrat", r:"La loi de 1867 (contrainte par corps)", m:`Abolit la contrainte par corps en matière civile et commerciale ; l'emprisonnement reste possible pour les dettes fiscales.`},
{t:"adage", th:"Effets · L'exécution du contrat", r:"« Qui n'a que des immeubles est insolvable »", m:`Adage médiéval : principe d'interdiction de la saisie des biens immeubles (réservés au lignage / concédés par le seigneur) ; seuls les meubles étaient saisissables.`}

];
