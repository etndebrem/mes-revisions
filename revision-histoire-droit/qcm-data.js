/* =====================================================================
   Banque de questions QCM — Histoire du droit des obligations
   Cours de Céline Drand (L2). Questions rédigées à partir des notes
   Obsidian, calquées sur la structure et la difficulté de l'annale
   de janvier 2023 (50 questions / 1 h / barème +1, -0,5, 0).

   Chaque entrée :
     th : chapitre (sert au filtrage)
     q  : énoncé de la question
     o  : options (2 ou 3) — SANS lettre, ajoutée par l'interface
     a  : index (0, 1, 2) de la bonne réponse dans o
     e  : explication / justification (affichée au corrigé)
     f  : 1 -> ordre des options FIXE (énumérations, chronologies)
     an : question posée (sous une forme proche) à une annale :
          1 ou "2023" -> janv. 2023 · "janv. 2019" · "rattr. 2018-19"
   ===================================================================== */

window.QCM_THEMES = [
  "Introduction",
  "La formation des contrats",
  "Le contenu du contrat",
  "Les effets du contrat",
  "Les personnages"
];

window.QCM = [

/* ================== INTRODUCTION ================== */

{th:"Introduction", an:1, q:`À l'époque du droit romain, la loi des XII Tables :`,
 o:[`établit un formalisme contractuel`,`reconnaît le principe du consensualisme contractuel`,`n'établit pas de disposition relative aux contrats`], a:0,
 e:`Première mise par écrit du droit romain (~450 av. J.-C.), la loi des XII Tables est la principale source du droit privé de l'ancien droit romain, période dominée par le formalisme : « le simple pacte ne procure pas d'action ».`},

{th:"Introduction", f:1, q:`La loi des XII Tables a été élaborée :`,
 o:[`au VIIIᵉ siècle avant J.-C.`,`au Vᵉ siècle avant J.-C.`,`au IIᵉ siècle après J.-C.`], a:1,
 e:`Vers 450 av. J.-C. Avant cette date, le droit romain était oral et sa connaissance réservée aux pontifes.`},

{th:"Introduction", q:`Le sens actif de l'obligation correspond :`,
 o:[`à la dette du débiteur`,`à la créance du créancier`,`à l'action en justice`], a:1,
 e:`Sens actif = l'obligation envisagée du côté du créancier (le droit d'exiger une prestation), conception mise en avant par le juriste Paul (IIIᵉ s.). Le sens passif (la dette) figure dans les Institutes de Justinien.`},

{th:"Introduction", q:`La conception passive de l'obligation est mise en avant par :`,
 o:[`le juriste Paul`,`l'édit du préteur`,`les Institutes de Justinien`], a:2,
 e:`Les Institutes (VIᵉ s.) définissent l'obligation comme « un lien de droit par lequel nous sommes astreints, de manière nécessaire, à payer quelque chose ». Paul défend au contraire le sens actif.`},

{th:"Introduction", q:`En droit romain :`,
 o:[`il n'y a pas de droit sans action`,`il n'y a pas d'action sans droit`], a:0,
 e:`Le droit romain est entièrement fondé sur la procédure : c'est l'action en justice qui crée le droit. La logique ne s'inverse (« pas d'action sans droit ») qu'à partir du XVIᵉ siècle.`},

{th:"Introduction", f:1, q:`Le droit romain classique couvre la période :`,
 o:[`de la fondation de Rome au IIᵉ siècle avant J.-C.`,`du IIᵉ siècle avant J.-C. au IIIᵉ siècle après J.-C.`,`de la fin du IIIᵉ siècle au VIᵉ siècle après J.-C.`], a:1,
 e:`Ancien droit romain : ~753 av. J.-C. – IIᵉ s. av. J.-C. ; droit classique : IIᵉ s. av. – IIIᵉ s. ap. ; droit post-classique : fin IIIᵉ – VIᵉ s.`},

{th:"Introduction", q:`À l'époque du droit romain classique, le droit des obligations se développe principalement à partir :`,
 o:[`de la loi des XII Tables`,`de l'édit du préteur et de la jurisprudence`,`de la législation impériale`], a:1,
 e:`La loi des XII Tables cesse alors d'être la source principale ; la législation impériale ne devient la source majeure qu'à l'époque post-classique.`},

{th:"Introduction", an:1, f:1, q:`La procédure formulaire a été mise en place à l'époque :`,
 o:[`du droit romain ancien`,`du droit romain classique`,`du droit romain post-classique`], a:1,
 e:`Introduite par le préteur à l'époque classique, la procédure formulaire (fondée sur la rédaction d'une formule) remplace progressivement les actions de la loi.`},

{th:"Introduction", f:1, q:`Les compilations de l'empereur Justinien ont été rédigées :`,
 o:[`au IIᵉ siècle`,`au VIᵉ siècle`,`au XIIᵉ siècle`], a:1,
 e:`Première compilation officielle du droit romain (VIᵉ s.) : Code, Digeste, Institutes, Novelles. Elles seront redécouvertes en Italie au XIIᵉ siècle.`},

{th:"Introduction", q:`Le Digeste est un recueil qui rassemble :`,
 o:[`les constitutions adoptées par les empereurs`,`les dernières lois adoptées par Justinien`,`les écrits des juristes consultes`], a:2,
 e:`Le Digeste rassemble la doctrine (écrits des juristes consultes). Le Code regroupe les constitutions impériales et les Novelles les dernières lois de Justinien.`},

{th:"Introduction", q:`La classification des obligations de donner, de faire et de ne pas faire trouve son origine :`,
 o:[`dans la jurisprudence romaine`,`dans le Code civil de 1804`,`dans la réforme de 2016`], a:0,
 e:`On la trouve chez Gaius et chez Paul. Elle est reprise par le Code civil de 1804 à l'article 1101.`},

{th:"Introduction", q:`L'obligation naturelle :`,
 o:[`peut faire l'objet d'une exécution forcée en justice`,`ne peut pas faire l'objet d'une action en justice`,`n'a jamais été reconnue par le droit romain`], a:1,
 e:`Devoir de conscience : pas d'action possible, mais ce qui est volontairement payé ne peut être répété (ex. dette prescrite). Les Romains la reconnaissent dès le Iᵉʳ siècle (obligations des incapables, notamment des esclaves).`},

{th:"Introduction", q:`La classification quadripartite des obligations (contractuelles, délictuelles, quasi-contractuelles, quasi-délictuelles) est consacrée :`,
 o:[`par la loi des XII Tables`,`sous Justinien`,`par la réforme de 2016`], a:1,
 e:`Consacrée par le Digeste puis les Institutes. Gaius ne distinguait d'abord que contrats et délits. La réforme de 2016 lui substitue la distinction acte juridique / fait juridique.`},

/* ================== LA FORMATION DES CONTRATS ================== */

{th:"La formation des contrats", an:1, q:`À l'époque du droit romain, le mutuum se forme par :`,
 o:[`la rédaction d'un écrit`,`la remise d'une chose`,`le seul consentement des parties au contrat`], a:1,
 e:`Contrat réel : c'est la dation (remise physique de la chose, mesurée en présence de témoins) qui forme juridiquement le prêt de consommation.`},

{th:"La formation des contrats", an:1, f:1, q:`À l'époque du droit romain, le mutuum permet d'établir :`,
 o:[`une obligation à la charge de l'emprunteur`,`une obligation à la charge du prêteur`,`des obligations à la charge du prêteur et de l'emprunteur`], a:0,
 e:`Contrat unilatéral : seul l'emprunteur est tenu (rendre la même quantité de choses de même qualité).`},

{th:"La formation des contrats", q:`Le mutuum est un contrat conclu :`,
 o:[`à titre onéreux`,`à titre gratuit`], a:1,
 e:`Service d'entraide entre proches : le prêteur ne touche aucun intérêt. La perception d'intérêts suppose une stipulation distincte.`},

{th:"La formation des contrats", an:1, q:`À l'époque du droit romain, l'action relative au mutuum permet au juge d'apprécier :`,
 o:[`la volonté des parties au contrat`,`le caractère équitable du contrat`,`les formalités accomplies par les parties au contrat`], a:2,
 e:`Action de droit strict : le juge vérifie uniquement le respect des formes, sans examiner le consentement, le dol, la bonne foi ou l'équité.`},

{th:"La formation des contrats", an:1, q:`À l'époque du droit romain, la stipulation est :`,
 o:[`un contrat consensuel nommé`,`un pacte légitime`,`un acte formel`], a:2,
 e:`Contrat verbal formé par une question et une réponse en termes parfaitement correspondants — un véritable « moule à contrat ».`},

{th:"La formation des contrats", an:1, q:`À l'époque du droit romain, l'action relative à la stipulation est :`,
 o:[`une action de droit strict`,`une action de bonne foi`], a:0,
 e:`Comme tous les actes formels du droit romain ancien (mutuum, stipulatio, expensilatio), la stipulation est sanctionnée par une action de droit strict.`},

{th:"La formation des contrats", an:1, f:1, q:`À l'époque du droit romain, la stipulation crée :`,
 o:[`une obligation à la charge du stipulant`,`une obligation à la charge du promettant`,`des obligations à la charge du stipulant et du promettant`], a:1,
 e:`Contrat unilatéral : celui qui promet (le promettant) est seul obligé envers le stipulant.`},

{th:"La formation des contrats", q:`À l'époque du droit romain, l'expensilatio :`,
 o:[`peut être conclue entre un citoyen romain et un pérégrin`,`est réservée aux citoyens romains`], a:1,
 e:`Contrat littéral (inscription parallèle aux registres de comptes, le codex), sanctionné par l'action de droit civil : elle est donc réservée aux seuls citoyens romains.`},

{th:"La formation des contrats", q:`Dans le cadre des actions de droit strict, le juge romain :`,
 o:[`peut rechercher l'intention réelle des parties`,`peut juger en équité`,`se borne à vérifier le respect des formes`], a:2,
 e:`Conséquence : les actes sont abstraits, détachés de leur cause — les parties peuvent se retrouver liées contre leur volonté (exemple de l'expensilatio détournée rapporté par Valère Maxime).`},

{th:"La formation des contrats", an:1, f:1, q:`À l'époque du droit romain classique, les contrats consensuels sont au nombre de :`,
 o:[`quatre`,`dix`,`trente`], a:0,
 e:`La vente, le louage, la société et le mandat — liste limitative de contrats jugés économiquement essentiels, reconnus sous l'impulsion du préteur.`},

{th:"La formation des contrats", q:`Les contrats consensuels nommés relèvent :`,
 o:[`du droit civil, réservé aux citoyens romains`,`du droit des gens, accessible aux pérégrins`], a:1,
 e:`C'est ce qui les rend utilisables dans le commerce avec les étrangers, à la différence des actes sanctionnés par le droit civil comme l'expensilatio.`},

{th:"La formation des contrats", an:1, q:`À l'époque du droit romain classique, le contrat de vente est sanctionné par :`,
 o:[`une action de droit strict`,`une action de bonne foi`], a:1,
 e:`La clause ex fide bona insérée dans la formule donne au juge un large pouvoir d'appréciation : bonne foi, équité, intention réelle, sanction des comportements déloyaux.`},

{th:"La formation des contrats", an:1, q:`À l'époque du droit romain classique, le juge, pour déterminer la validité d'un contrat de vente, apprécie :`,
 o:[`la validité des formalités accomplies par les parties`,`le consentement des parties au contrat`], a:1,
 e:`La vente est un contrat consensuel : elle naît du seul accord sur la chose et sur le prix, sans aucune formalité.`},

{th:"La formation des contrats", an:1, q:`À l'époque du droit romain, les contrats dits innommés sont :`,
 o:[`des contrats sanctionnés par une action de droit strict`,`des contrats synallagmatiques dans lesquels une partie a déjà exécuté son obligation`,`des contrats dépourvus de toute protection juridique`], a:1,
 e:`N'entrant dans aucune catégorie reconnue et sans action propre, ils sont protégés lorsqu'une partie a exécuté sans recevoir de contrepartie, sur le seul fondement de l'échange des consentements.`},

{th:"La formation des contrats", an:1, q:`À l'époque du droit romain classique, les pactes légitimes sont des pactes dont la valeur juridique est reconnue par :`,
 o:[`l'Empereur`,`le préteur`,`le juge`], a:0,
 e:`Par des constitutions impériales (ex. pacte de compromis, promesse de dot). Les pactes prétoriens sont reconnus par le préteur, les pactes adjoints par la jurisprudence.`},

{th:"La formation des contrats", an:1, q:`À l'époque du droit romain, la reconnaissance d'une valeur juridique aux pactes prétoriens marque :`,
 o:[`une avancée du consensualisme`,`une avancée du formalisme`], a:0,
 e:`L'accord de volontés tend à devenir une source autonome d'obligations, sans accomplissement de formalités.`},

{th:"La formation des contrats", an:1, q:`Au Haut Moyen Âge, la manière dont se forme le contrat de vente :`,
 o:[`est différente de celle employée à l'époque du droit romain classique`,`est similaire à celle employée à l'époque du droit romain classique`], a:0,
 e:`Le droit franc ignore totalement le consensualisme : retour à un formalisme strict (contrats solennels et contrats réels), alors que la vente romaine classique était un contrat consensuel.`},

{th:"La formation des contrats", an:1, q:`La festuca est une formalité utilisée pour conclure un contrat :`,
 o:[`à l'époque du droit romain ancien`,`à l'époque du Haut Moyen Âge`,`à l'époque du droit romain classique`], a:1,
 e:`Baguette de bois des contrats solennels francs : jetée à terre, remise au créancier, ou cassée et partagée, avec paroles spécifiques et témoins.`},

{th:"La formation des contrats", q:`Le droit franc reconnaît :`,
 o:[`les quatre contrats consensuels nommés`,`deux types de contrats : solennels et réels`,`la théorie des pactes vêtus`], a:1,
 e:`Coutumes rudimentaires privilégiant la sécurité juridique : les contrats solennels reposent sur la fides facta (foi donnée), les contrats réels sur la remise d'une chose.`},

{th:"La formation des contrats", q:`Au Haut Moyen Âge, le serment prêté lors de la conclusion d'un contrat :`,
 o:[`est dépourvu de toute conséquence juridique`,`confère à l'Église une compétence sur les litiges contractuels`], a:1,
 e:`Le serment engage les parties et Dieu ; sa violation entraîne des sanctions spirituelles pouvant aller jusqu'à l'excommunication. C'est ainsi que l'Église s'intéresse au droit des contrats.`},

{th:"La formation des contrats", q:`La théorie des pactes vêtus est l'œuvre :`,
 o:[`des canonistes`,`des humanistes`,`des glossateurs`], a:2,
 e:`Pour concilier l'ambivalence du droit romain : les pactes nus, « comme une femme stérile », ne produisent rien ; les pactes vêtus (par des formalités ou, pour les quatre contrats consensuels, par le consentement) obligent.`},

{th:"La formation des contrats", q:`L'école des glossateurs a été fondée par :`,
 o:[`Bartole`,`Irnerius`,`Balde`], a:1,
 e:`À Bologne, au XIIᵉ siècle, après la redécouverte des compilations de Justinien. Bartole et Balde sont des post-glossateurs (commentateurs), apparus au XIVᵉ siècle.`},

{th:"La formation des contrats", an:1, q:`À l'époque médiévale, le droit canonique retient comme principe de formation des contrats :`,
 o:[`le formalisme`,`le consensualisme`], a:1,
 e:`Dieu ne fait pas de différence entre un serment formel et une simple promesse : y manquer est un péché. Adage canonique : « seul le consentement oblige ».`},

{th:"La formation des contrats", q:`Au XIIIᵉ siècle, les Coutumes de Beauvaisis reconnaissent :`,
 o:[`que l'échange des consentements suffit à former le contrat`,`que seul l'accomplissement de formalités forme le contrat`], a:0,
 e:`Philippe de Beaumanoir : « marché est fait sitôt comme il est créanté à tenir par l'accord des parties ». Adage coutumier : « toutes convenances sont à tenir ».`},

{th:"La formation des contrats", q:`Balde considère qu'un contrat est valable dès lors :`,
 o:[`que les formalités romaines ont été accomplies`,`qu'il a une cause`,`qu'un écrit a été rédigé`], a:1,
 e:`Disciple de Bartole, il ajoute que tous les contrats doivent être tenus pour de bonne foi — ce qui entraîne le déclin des actions de droit strict.`},

{th:"La formation des contrats", an:1, q:`Le formalisme contractuel est retenu comme principe de formation des contrats par :`,
 o:[`Pothier`,`Du Moulin`,`Cujas`], a:2,
 e:`L'humanisme juridique du XVIᵉ siècle (Cujas) restitue le droit romain dans son sens originel et constate que le formalisme en est le principe. Du Moulin et Pothier sont au contraire des consensualistes.`},

{th:"La formation des contrats", q:`Au XVIᵉ siècle, François Connan :`,
 o:[`refuse de reconnaître au consentement toute efficacité juridique autonome`,`consacre le consensualisme en commentant la coutume de Paris`], a:0,
 e:`Position radicale : « on risque beaucoup si l'on est tenu par toutes les paroles ». C'est Du Moulin qui commente la coutume de Paris en faveur du consensualisme.`},

{th:"La formation des contrats", q:`Le consensualisme est consacré en droit coutumier au XVIᵉ siècle grâce à l'influence de :`,
 o:[`Jacques Cujas`,`Charles Du Moulin`,`François Connan`], a:1,
 e:`En commentant la coutume de Paris, Du Moulin considère le consentement suffisant pour former le contrat et défend l'existence d'un droit national français.`},

{th:"La formation des contrats", q:`L'adage « On lie les bœufs par les cornes et les hommes par les paroles » est dû à :`,
 o:[`Grotius`,`Domat`,`Loysel`], a:2,
 e:`« … et autant vaut une simple promesse que les stipulations du droit romain » : consécration du consensualisme en droit coutumier. Second adage de Loysel : « toutes actions sont de bonne foi ».`},

{th:"La formation des contrats", q:`L'École du droit de la Nature et des Gens a été fondée par :`,
 o:[`Hugo Grotius`,`Jean Domat`,`Robert-Joseph Pothier`], a:0,
 e:`Philosophe hollandais, auteur du « Droit de la guerre et de la paix », qui contient aussi une théorie générale du contrat.`},

{th:"La formation des contrats", q:`Pour Grotius, l'obligation de respecter la parole donnée repose sur :`,
 o:[`la religion`,`le droit naturel et la raison humaine`], a:1,
 e:`Pacta sunt servanda : le contrat obligerait « même si Dieu n'existait pas ». C'est le fondement laïque du consensualisme, à la différence du fondement religieux des canonistes.`},

{th:"La formation des contrats", q:`Le « Traité des obligations » est l'œuvre de :`,
 o:[`Domat`,`Pothier`,`Cujas`], a:1,
 e:`XVIIIᵉ siècle : Pothier y affirme le consensualisme, critique la distinction romaine contrats/pactes et inspire directement le Code civil de 1804. Domat est l'auteur des « Lois civiles dans leur ordre naturel ».`},

{th:"La formation des contrats", an:1, q:`Le consensualisme est retenu comme principe de formation des contrats :`,
 o:[`par le droit franc du Haut Moyen Âge`,`par le droit romain ancien`,`par le Code civil de 1804`], a:2,
 e:`Les rédacteurs du Code civil ne retiennent du droit romain que le consensualisme (articles 1101 et 1134), par l'intermédiaire de Domat et Pothier.`},

{th:"La formation des contrats", q:`Au Moyen Âge, en matière de preuve des contrats :`,
 o:[`le témoignage l'emporte sur l'écrit`,`l'écrit l'emporte sur le témoignage`], a:0,
 e:`« Témoin passe lettre » — méfiance liée à la multiplication des faux en écriture. L'inversion (« lettre passe témoin ») intervient à l'époque moderne.`},

{th:"La formation des contrats", an:1, q:`L'ordonnance de Moulins de 1566 est un texte :`,
 o:[`qui établit le principe de la preuve par écrit des contrats`,`qui établit le principe de la preuve par témoins des contrats`,`qui ne comporte pas de disposition relative à la preuve des contrats`], a:0,
 e:`Elle interdit l'admission de témoignages contre le contenu d'un écrit ; le roi cherche à rationaliser la justice et à limiter la longueur des procès.`},

{th:"La formation des contrats", an:1, q:`L'Ordonnance civile de 1667 est un texte :`,
 o:[`qui établit le principe de la preuve par témoins des contrats`,`qui confirme le principe de la preuve par écrit des contrats`,`qui ne comporte pas de disposition relative à la preuve des contrats`], a:1,
 e:`Sous Louis XIV, la Grande ordonnance civile confirme la primauté de la preuve écrite posée par l'ordonnance de Moulins de 1566.`},

{th:"La formation des contrats", an:1, q:`Le Code civil de 1804 :`,
 o:[`établit le principe de la preuve par écrit des contrats`,`établit le principe de la preuve par témoins des contrats`,`ne comporte pas de disposition relative à la preuve des contrats`], a:0,
 e:`Ancien article 1341 : interdiction de prouver par témoins contre et au-delà du contenu des actes écrits.`},

{th:"La formation des contrats", q:`Le commencement de preuve par écrit permet :`,
 o:[`d'écarter définitivement la preuve testimoniale`,`de compléter un écrit imparfait par des témoignages`], a:1,
 e:`Tempérament élaboré par les juridictions dès le XVIᵉ siècle : le juge conserve une certaine souplesse dans l'appréciation de la preuve.`},

/* ================== LE CONTENU DU CONTRAT ================== */

{th:"Le contenu du contrat", an:1, f:1, q:`À l'époque du droit romain ancien, la mise en place d'un prêt à intérêts nécessite :`,
 o:[`l'accomplissement d'un seul acte contractuel`,`l'accomplissement de deux actes contractuels`,`l'accomplissement de trois actes contractuels`], a:1,
 e:`Le mutuum (gratuit par nature) pour le capital, et une stipulation pour les intérêts.`},

{th:"Le contenu du contrat", an:1, q:`La pratique du prêt à intérêts est :`,
 o:[`interdite à l'époque du droit romain classique`,`autorisée et encadrée à l'époque du droit romain classique`], a:1,
 e:`Taux limité à 1 % par mois (inspiration grecque), anatocisme admis, régime spécial du prêt maritime : le droit classique cherche à encourager le crédit.`},

{th:"Le contenu du contrat", q:`Le prêt de la grosse aventure concerne :`,
 o:[`le commerce maritime`,`les prêts agricoles`,`les prêts aux ecclésiastiques`], a:0,
 e:`Prêt maritime à risque : intérêts libres si l'opération réussit, pas de remboursement si la cargaison périt. Il perdure jusqu'au Code de commerce de 1806.`},

{th:"Le contenu du contrat", q:`L'anatocisme désigne :`,
 o:[`l'interdiction du prêt à intérêts`,`la capitalisation des intérêts échus non payés`,`la remise de dette accordée au débiteur`], a:1,
 e:`Admis en droit romain classique et repris dans le Code civil à l'article 1343-2.`},

{th:"Le contenu du contrat", an:1, q:`À l'époque du Bas Moyen Âge, le droit canonique :`,
 o:[`interdit le contrat de prêt à intérêts`,`autorise le contrat de prêt à intérêts en limitant les taux`,`autorise le contrat de prêt à intérêts sans limite de taux`], a:0,
 e:`L'usure est un péché mortel pour les clercs comme pour les laïcs : sanctions religieuses (excommunication), civiles (annulation du contrat) et pénales (infamie). L'Église ne se limite à encadrer les taux qu'à partir du XVIᵉ siècle.`},

{th:"Le contenu du contrat", q:`Au Moyen Âge, le prêt à intérêts est désigné par le terme :`,
 o:[`anatocisme`,`usure`,`mutuum`], a:1,
 e:`Le terme « intérêt » est remplacé par celui d'usure, prohibée par l'Église et par la législation laïque (notamment sous Charlemagne).`},

{th:"Le contenu du contrat", q:`Au Moyen Âge, les Juifs peuvent pratiquer le prêt à intérêts car :`,
 o:[`ils bénéficient d'une autorisation papale`,`ils ne sont pas soumis au droit canonique`], a:1,
 e:`Exclus des confréries religieuses qui conditionnent l'accès aux professions, le prêt d'argent devient leur principale activité économique autorisée.`},

{th:"Le contenu du contrat", q:`Les Lombards contournent l'interdiction du prêt à intérêts grâce :`,
 o:[`à des opérations de change`,`au mutuum romain`,`aux monts de Piété`], a:0,
 e:`Prêt en monnaie locale, remboursement en monnaie italienne : le surplus tient lieu d'intérêts. De commerçants itinérants, ils deviennent banquiers installés, prêtant même au roi de France.`},

{th:"Le contenu du contrat", an:1, q:`À l'époque moderne, les calvinistes :`,
 o:[`condamnent toute pratique du prêt à intérêts`,`établissent une distinction entre usures injustes et intérêts licites`], a:1,
 e:`Les intérêts sont légitimes si l'emprunteur est riche ou emprunte pour son commerce ; ils restent interdits pour les emprunteurs pauvres dans le besoin.`},

{th:"Le contenu du contrat", an:1, q:`À l'époque moderne, l'opinion des calvinistes sur la question du prêt à intérêts est reprise par :`,
 o:[`Du Moulin`,`Irnerius`,`Domat`], a:0,
 e:`Du Moulin s'inspire de la distinction entre intérêts licites et usure injuste. Domat, au contraire, juge la pratique contraire à la loi divine et au droit naturel.`},

{th:"Le contenu du contrat", q:`Les monts de Piété sont créés au XVIᵉ siècle par :`,
 o:[`le roi de France`,`les banquiers lombards`,`l'Église`], a:2,
 e:`Institutions de prêt aux plus pauvres à très faible intérêt : une reconnaissance de la licéité du paiement d'intérêts par l'Église elle-même.`},

{th:"Le contenu du contrat", q:`Le prêt à intérêts est autorisé pour tous les particuliers par :`,
 o:[`l'ordonnance de Moulins de 1566`,`la loi de 1789`,`le décret du 14 fructidor an III`], a:1,
 e:`Sous la Révolution, tout particulier peut prêter avec stipulation d'intérêts dans la limite du taux légal. Principe consacré à l'article 1905 du Code civil.`},

{th:"Le contenu du contrat", q:`À l'époque du droit romain classique, un contrat de vente lésionnaire conclu entre majeurs est :`,
 o:[`nul de plein droit`,`annulable à la demande du vendeur`,`valable`], a:2,
 e:`Les juristes romains ne connaissent pas le « juste prix » : la recherche du profit est légitime (bonus dolus). Seuls les mineurs de 25 ans bénéficient d'une protection.`},

{th:"Le contenu du contrat", q:`En droit romain, le « bonus dolus » désigne :`,
 o:[`les manœuvres habiles de négociation, licites`,`les manœuvres frauduleuses sanctionnées par la nullité`], a:0,
 e:`Chaque partie cherche légitimement à maximiser ses intérêts ; ces manœuvres ne donnent pas lieu à sanction.`},

{th:"Le contenu du contrat", an:1, f:1, q:`À l'époque du droit romain post-classique, la rescision pour lésion du contrat de vente concerne :`,
 o:[`uniquement les ventes de meubles`,`uniquement les ventes d'immeubles`,`les ventes d'immeubles et de meubles`], a:1,
 e:`Et seulement en cas de lésion énorme (laesio enormis : au moins la moitié de la valeur estimée), au seul profit du vendeur — protection des humiliores contre les potentes.`},

{th:"Le contenu du contrat", f:1, q:`En droit romain post-classique, la rescision pour lésion est ouverte :`,
 o:[`au seul vendeur`,`au seul acheteur`,`au vendeur et à l'acheteur`], a:0,
 e:`Le vendeur lésé peut demander l'annulation ; l'acheteur peut l'éviter en versant un supplément de prix (« racheter la lésion »).`},

{th:"Le contenu du contrat", q:`La théorie du juste-prix est développée par :`,
 o:[`les juristes romains classiques`,`les canonistes`,`les révolutionnaires`], a:1,
 e:`Le juste-prix est la valeur intrinsèque et objective de la chose : s'en écarter pour s'enrichir au détriment d'autrui est illicite. La théorie étend la sanction à tous les contrats de vente ou de louage.`},

{th:"Le contenu du contrat", an:1, q:`La rescision pour lésion des contrats de vente :`,
 o:[`n'est pas retenue par le deuxième projet de Code civil préparé par Cambacérès`,`est combattue par Portalis`,`est définitivement supprimée en 1795`], a:0,
 e:`Le 2ᵉ projet la supprime sous l'influence libérale. Portalis et Napoléon la défendent, et elle entre dans le Code de 1804. La suppression révolutionnaire (décret du 14 fructidor an III) n'est que temporaire : rétablissement dès 1797.`},

{th:"Le contenu du contrat", q:`La suppression de la rescision pour lésion sous la Révolution s'explique notamment par :`,
 o:[`la volonté de protéger les vendeurs`,`l'influence du droit canonique`,`la dévaluation des assignats`], a:2,
 e:`Idéologie libérale + forte inflation : la valeur des assignats chute à 1,5 % du nominal en 1795. Le législateur impose leur cours forcé et supprime la rescision pour éviter la multiplication des recours.`},

{th:"Le contenu du contrat", an:1, q:`Le Code civil de 1804 :`,
 o:[`ne reconnaît pas la rescision pour lésion du contrat de vente`,`reconnaît la rescision pour lésion du contrat de vente en faveur de l'acheteur`,`reconnaît la rescision pour lésion du contrat de vente en faveur du vendeur`], a:2,
 e:`Seul le vendeur peut agir (l'acheteur n'est jamais contraint d'acheter), pour les ventes d'immeubles seulement. Napoléon : il n'est pas juste de maintenir « un contrat arraché au vendeur par le besoin ».`},

{th:"Le contenu du contrat", f:1, q:`Selon l'article 1674 du Code civil, la lésion doit atteindre :`,
 o:[`au moins la moitié de la valeur estimée du bien`,`au moins 7/12 de la valeur estimée du bien`,`au moins 9/10 de la valeur estimée du bien`], a:1,
 e:`Pour la vente d'immeuble entre majeurs. La moitié correspond au seuil romain de la laesio enormis. Pour les mineurs non émancipés, la simple lésion suffit (art. 1305).`},

{th:"Le contenu du contrat", q:`La formule « qui dit contractuel, dit juste » est due à :`,
 o:[`Portalis`,`Jourdan`,`Napoléon`], a:1,
 e:`Auteur du XIXᵉ siècle hostile à la rescision, qu'il qualifie de « caprice législatif » et de « tache dans le Code ». Portalis et Napoléon la défendaient au contraire.`},

{th:"Le contenu du contrat", an:1, q:`Le Code civil de 1804 :`,
 o:[`fait formellement référence à la théorie de l'acte clair`,`ne fait pas formellement référence à la théorie de l'acte clair`], a:1,
 e:`Il en conserve l'esprit (par l'intermédiaire de Domat et Pothier) sans la mentionner expressément. La règle vient du Digeste (livre 32, fragment 25).`},

{th:"Le contenu du contrat", q:`La théorie de l'acte clair signifie que :`,
 o:[`le juge doit retenir le sens littéral d'un contrat clair et précis`,`le juge peut toujours interpréter le contrat`,`le contrat doit obligatoirement être rédigé par écrit`], a:0,
 e:`Objectif : la sécurité juridique, en limitant le pouvoir d'appréciation du juge. L'interprétation n'est permise qu'en cas d'ambiguïté.`},

{th:"Le contenu du contrat", f:1, q:`La dénaturation du contrat est censurée par la Cour de cassation depuis :`,
 o:[`1804`,`1872`,`2016`], a:1,
 e:`Affaire de l'affiche d'usine prévoyant une prime « facultative » : première censure d'une interprétation abusive d'un contrat clair. Fondement : l'article 1134 — le contrat s'impose aussi au juge.`},

{th:"Le contenu du contrat", an:1, q:`Le principe de la primauté de la volonté sur la lettre du contrat :`,
 o:[`n'est pas mis en avant par le Digeste`,`est retenu par le Code civil de 1804`,`n'est pas retenu par la doctrine au début du XIXᵉ siècle`], a:1,
 e:`Article 1156 : « rechercher quelle a été la commune intention des parties… plutôt que de s'arrêter au sens littéral des termes ». Déjà dans le Digeste, puis chez Domat et Pothier ; repris à l'article 1188.`},

{th:"Le contenu du contrat", an:1, q:`À l'époque moderne, l'expression « Qui vend le pot dit le mot » justifie l'interprétation du contrat de vente :`,
 o:[`contre le vendeur`,`contre l'acheteur`], a:0,
 e:`Règle subsidiaire d'interprétation en faveur de l'un des contractants : le vendeur, qui « dit le mot », doit s'exprimer clairement — le doute s'interprète contre lui.`},

{th:"Le contenu du contrat", q:`La règle de l'efficacité de l'acte impose au juge :`,
 o:[`d'annuler toute clause ambiguë`,`de retenir le sens qui confère un effet juridique à la clause`,`de demander aux parties de réécrire la clause`], a:1,
 e:`Héritée du droit romain, codifiée à l'article 1157 du Code civil de 1804 (repris à l'art. 1191). Vattel la justifie par la volonté présumée : « on ne présume point que des personnes censées aient prétendu ne rien faire ».`},

{th:"Le contenu du contrat", q:`L'interprétation en faveur de l'un des contractants est :`,
 o:[`la première règle d'interprétation`,`une règle subsidiaire d'ultime recours`], a:1,
 e:`Elle ne peut être mise en œuvre qu'après épuisement de toutes les autres méthodes d'interprétation, subjectives et objectives.`},

{th:"Le contenu du contrat", q:`L'interprétation d'un contrat selon les usages est justifiée, chez Charondas, par :`,
 o:[`la volonté présumée des parties`,`l'ordre public`,`la loi royale`], a:0,
 e:`« Il est vraisemblable que les contractants aient regardé à la coutume du pays et contracté selon celle-ci » (XVIᵉ s.). Règle codifiée aux articles 1159 et 1160 du Code civil de 1804.`},

/* ================== LES EFFETS DU CONTRAT ================== */

{th:"Les effets du contrat", an:1, f:1, q:`L'erreur est prise en compte comme cause de nullité du contrat à partir de l'époque :`,
 o:[`du droit romain ancien`,`du droit romain classique`,`du Haut Moyen Âge`], a:1,
 e:`Le droit romain ancien, formaliste, ignore l'erreur. Elle apparaît avec le consensualisme classique (error in negotio, in persona, in corpore), puis disparaît à nouveau au Haut Moyen Âge avant de réapparaître au Bas Moyen Âge.`},

{th:"Les effets du contrat", an:1, q:`Selon le droit romain, l'erreur, pour être retenue comme cause de nullité du contrat, doit :`,
 o:[`porter sur le droit`,`avoir été commise par le créancier de l'obligation`,`être excusable`], a:2,
 e:`C'est-à-dire commise par une personne raisonnable. Elle ne peut porter que sur un fait : l'erreur de droit est exclue (« nul n'est censé ignorer la loi »).`},

{th:"Les effets du contrat", an:1, q:`Selon le droit romain, l'erreur, pour être retenue comme cause de nullité du contrat :`,
 o:[`doit être invoquée devant le préteur`,`peut être invoquée directement devant le juge`,`doit être invoquée devant un sénateur`], a:1,
 e:`L'erreur et les conditions liées à l'objet sont des causes de nullité « de plein droit », présentées au juge du fond. Le dol et la violence, en revanche, doivent être soulevés devant le préteur.`},

{th:"Les effets du contrat", an:1, q:`L'erreur sur la nature juridique du contrat (error in negotio) :`,
 o:[`est reconnue par le droit romain`,`n'apparaît qu'au Code civil de 1804`], a:0,
 e:`Le droit romain classique distingue l'error in negotio (nature du contrat), l'error in persona (personne) et l'error in corpore (objet). L'erreur sur la substance apparaît plus tard, dans le Digeste.`},

{th:"Les effets du contrat", q:`La condition du caractère déterminant de l'erreur est ajoutée par :`,
 o:[`les juristes romains classiques`,`les glossateurs`,`les rédacteurs du Code civil`], a:1,
 e:`Innovation médiévale : le contrat n'est annulable que si la partie n'aurait pas contracté sans cette erreur — un tournant subjectif qui place le consentement au centre du contrat.`},

{th:"Les effets du contrat", q:`En droit romain, le dol et la violence sont à l'origine considérés comme :`,
 o:[`des vices du consentement`,`des causes de nullité de plein droit`,`des délits`], a:2,
 e:`Le contrat reste juridiquement valable ; l'annulation n'est obtenue que par des moyens procéduraux (action pénale de la victime, ou exception opposée au créancier qui demande l'exécution).`},

{th:"Les effets du contrat", an:1, q:`L'erreur :`,
 o:[`n'est pas considérée comme un vice du consentement par le Code civil de 1804`,`est considérée comme un vice du consentement par le Code civil de 1804`], a:1,
 e:`L'article 1130 du Code civil énumère trois vices du consentement : l'erreur, la violence et le dol.`},

{th:"Les effets du contrat", q:`L'adage « les voies de nullité n'ont pas lieu en France » exprime :`,
 o:[`l'hostilité médiévale à l'annulation des contrats`,`la faveur du droit français pour la nullité`], a:0,
 e:`Attachement à la stabilité contractuelle : les parties insèrent des clauses de renonciation au droit romain, devenues quasi automatiques chez les notaires français.`},

{th:"Les effets du contrat", an:1, q:`À l'époque moderne, les lettres de rescision :`,
 o:[`étaient établies par le créancier`,`étaient établies par le débiteur`,`étaient des lettres royales`], a:2,
 e:`Délivrées par la chancellerie royale : le roi, source de toute justice, dispense ses sujets des clauses de renonciation et les autorise à invoquer le droit romain (droit « étranger » en France).`},

{th:"Les effets du contrat", an:1, q:`À l'époque moderne, les lettres de rescision étaient délivrées :`,
 o:[`à titre gratuit`,`contre le versement d'une certaine somme`], a:1,
 e:`Versement au trésor royal. Leur délivrance était quasi automatique : c'est ensuite le juge qui entérine les lettres (annulation) ou les rejette (exécution forcée).`},

{th:"Les effets du contrat", an:1, q:`À l'époque moderne, la suppression des lettres de rescision :`,
 o:[`a été demandée et obtenue par les États généraux`,`a été demandée mais n'a pas été obtenue par les États généraux`,`n'a pas été demandée par les États généraux`], a:1,
 e:`Demande récurrente à partir du XVIᵉ siècle, jamais accueillie par le roi : les lettres sont maintenues pendant tout l'Ancien Régime et ne sont abolies qu'à la Révolution.`},

{th:"Les effets du contrat", q:`La distinction entre nullité relative et nullité absolue trouve son origine :`,
 o:[`dans la pratique des lettres de rescision`,`dans la loi des XII Tables`,`dans la réforme de 2016`], a:0,
 e:`Les juristes distinguent les nullités nécessitant une lettre de rescision (protection d'intérêts privés) et celles prononcées directement par le juge (cause publique) — ancêtres des nullités relative et absolue.`},

{th:"Les effets du contrat", q:`La nullité des conventions contraires aux bonnes mœurs est affirmée :`,
 o:[`seulement à partir du Code civil de 1804`,`dès le droit romain`], a:1,
 e:`Texte de l'empereur Dioclétien repris par Justinien ; exigence renforcée par le droit canonique et présente en droit coutumier (Beaumanoir juge nul le contrat ayant pour objet un vol).`},

{th:"Les effets du contrat", q:`La distinction entre lois d'utilité publique et lois d'utilité privée est l'œuvre de :`,
 o:[`Gaius`,`Bartole`,`Portalis`], a:1,
 e:`Au XIVᵉ siècle, à propos des clauses de renonciation : on ne peut renoncer aux lois d'utilité publique. Elle prépare la distinction lois impératives / lois supplétives (article 6 du Code civil).`},

{th:"Les effets du contrat", an:1, f:1, q:`Selon le droit romain, le transfert du droit de propriété sur la chose vendue du vendeur à l'acheteur s'effectue grâce :`,
 o:[`à la conclusion du contrat de vente`,`à la livraison de la chose vendue`,`au paiement du prix de la chose vendue`], a:1,
 e:`Le contrat ne crée que des obligations personnelles ; c'est la tradition (livraison) qui transfère le droit réel. Elle sert de preuve tangible et permet de vendre à des non-citoyens (la propriété étant réservée aux citoyens romains).`},

{th:"Les effets du contrat", an:1, f:1, q:`Au Bas Moyen Âge, selon les commentateurs du droit romain, le transfert du droit de propriété sur la chose vendue s'effectue :`,
 o:[`à la conclusion du contrat de vente`,`par la remise de la chose vendue`], a:1,
 e:`Les juristes médiévaux reprennent la solution romaine : la remise de la chose est nécessaire au transfert de propriété. La rupture n'intervient qu'à l'époque moderne.`},

{th:"Les effets du contrat", an:1, f:1, q:`Selon le Code civil de 1804, le transfert du droit de propriété sur la chose vendue s'effectue :`,
 o:[`dès la conclusion du contrat de vente`,`à la livraison de la chose vendue`,`au paiement du prix de la chose vendue`], a:0,
 e:`Article 1583 : « la propriété est acquise de droit à l'acheteur… dès qu'on est convenu de la chose et du prix, quoique la chose n'ait pas encore été livrée ni le prix payé ». Cujas et Pothier défendaient pourtant la solution romaine.`},

{th:"Les effets du contrat", q:`L'adage « qui doit garantir ne peut évincer » se rattache :`,
 o:[`à la garantie d'éviction`,`à la garantie des vices cachés`,`à l'obligation de délivrance`], a:0,
 e:`Le vendeur, tenu d'assurer à l'acheteur une possession paisible et durable, ne peut venir lui-même reprendre la chose vendue (article 1626 du Code civil).`},

{th:"Les effets du contrat", q:`À l'époque du droit romain classique, la garantie d'éviction :`,
 o:[`doit figurer dans le contrat pour s'appliquer`,`devient un élément du régime juridique de la vente`], a:1,
 e:`D'abord conventionnelle, elle s'applique à partir de l'époque classique même sans stipulation. Redevenue conventionnelle au Haut Moyen Âge, elle réintègre le régime de la vente au Bas Moyen Âge puis dans le Code civil (art. 1626).`},

{th:"Les effets du contrat", q:`En droit romain, la charge de la preuve en matière de vices cachés est d'abord renversée au détriment :`,
 o:[`des particuliers`,`des marchands professionnels (bétail, esclaves)`,`des pérégrins`], a:1,
 e:`Les professionnels ont une obligation de s'informer sur les qualités de leurs marchandises : si un vice se révèle, c'est à eux de prouver qu'ils ont informé l'acheteur. Généralisation à toutes les ventes à l'époque post-classique.`},

{th:"Les effets du contrat", an:1, q:`Selon le droit romain, le contrat de louage de services est :`,
 o:[`un contrat conclu à titre onéreux`,`un contrat conclu à titre gratuit`], a:0,
 e:`Le locator loue sa force de travail contre une rémunération appelée merces.`},

{th:"Les effets du contrat", an:1, q:`Selon le droit romain, le contrat de louage de services :`,
 o:[`peut être conclu avec un esclave`,`ne peut pas être conclu avec un esclave`], a:1,
 e:`Il est conclu entre deux hommes libres. Le travail servile relève du louage de choses (l'esclave est considéré comme un objet) et les professions intellectuelles du mandat.`},

{th:"Les effets du contrat", an:1, q:`Selon le droit romain, le contrat de louage de services est sanctionné par :`,
 o:[`une action de droit strict`,`une action de bonne foi`], a:1,
 e:`Le louage est l'un des quatre contrats consensuels nommés, sanctionnés par une action de bonne foi.`},

{th:"Les effets du contrat", an:1, q:`À l'époque du droit romain classique, le contrat de louage de choses est :`,
 o:[`un contrat formel`,`un contrat interdit par le droit`,`un contrat consensuel nommé`], a:2,
 e:`Formé par le simple accord sur la chose louée et sur le loyer. En droit romain, il est conclu pour une durée courte de cinq années, appelée « lustre ».`},

{th:"Les effets du contrat", an:1, q:`À l'époque du droit romain classique, le contrat de louage d'industrie est :`,
 o:[`sanctionné par une action de droit strict`,`un contrat unilatéral`,`un contrat conclu à titre onéreux`], a:2,
 e:`Le client (locator) confie une chose à l'entrepreneur (conductor) et paie après vérification et approbation de l'ouvrage. Particularité : c'est celui qui apporte la chose qui paie.`},

{th:"Les effets du contrat", q:`En droit romain, le terme « solutio » désigne :`,
 o:[`le paiement`,`la nullité`,`la compensation`], a:0,
 e:`Littéralement le « dénouement » : l'exécution met fin au lien contractuel. En droit, le paiement est l'exécution de la prestation prévue, pas seulement le versement d'une somme d'argent.`},

{th:"Les effets du contrat", q:`La dation en paiement est admise :`,
 o:[`à partir du droit romain classique`,`seulement depuis le Code civil de 1804`], a:0,
 e:`Donner autre chose que ce qui était prévu, avec l'accord du créancier, pour se libérer. Elle traverse les siècles et est reçue dans le Code civil.`},

{th:"Les effets du contrat", q:`La compensation suppose :`,
 o:[`que les cocontractants soient créancier et débiteur l'un de l'autre`,`l'accord du préteur`,`un contrat conclu par écrit`], a:0,
 e:`Les dettes réciproques s'éteignent à concurrence de la plus faible : elle évite de transporter des sommes d'argent.`},

{th:"Les effets du contrat", q:`La manus injectio permettait au créancier :`,
 o:[`de saisir les immeubles du débiteur`,`de se saisir de la personne du débiteur`,`d'excommunier le débiteur`], a:1,
 e:`Loi des XII Tables : après condamnation et un délai de 30 jours, prison privée (60 jours maximum, présentation à trois marchés successifs), puis vente comme esclave, mise au travail ou mise à mort.`},

{th:"Les effets du contrat", q:`Au Moyen Âge, l'excommunication pour dette :`,
 o:[`garantit l'exécution des obligations contractuelles`,`est dépourvue d'effet sur le débiteur`], a:0,
 e:`Marginalisation sociale du débiteur : privation des sacrements et de sépulture chrétienne. Elle recule à partir du XIVᵉ siècle ; au XVIᵉ, les créanciers ne peuvent plus l'obtenir pour inexécution.`},

{th:"Les effets du contrat", q:`La contrainte par corps judiciaire est créée à l'époque moderne par :`,
 o:[`l'ordonnance de Moulins de 1566`,`l'Ordonnance civile de 1667`,`le Code civil de 1804`], a:0,
 e:`Charles IX : emprisonnement du débiteur défaillant 4 mois après sa condamnation. L'ordonnance de 1667 l'adoucit, la Révolution l'abolit (1793), le Code civil de 1804 la rétablit (art. 2059 et s.).`},

{th:"Les effets du contrat", q:`La contrainte par corps est abolie en matière civile et commerciale par :`,
 o:[`le Code civil de 1804`,`une loi de 1867`,`l'ordonnance de 1667`], a:1,
 e:`Sous le Second Empire. L'emprisonnement reste néanmoins possible pour les dettes fiscales.`},

{th:"Les effets du contrat", q:`L'exécution forcée sur les biens du débiteur apparaît :`,
 o:[`dès la loi des XII Tables`,`à l'époque du droit romain classique, du fait du préteur`,`au Moyen Âge`], a:1,
 e:`Saisie globale du patrimoine (venditio bonorum, vente aux enchères publiques), puis évolution vers la saisie partielle. La loi des XII Tables ne connaissait que l'exécution sur la personne.`},

{th:"Les effets du contrat", q:`L'adage « qui n'a que des immeubles est insolvable » s'explique par :`,
 o:[`la faible valeur des immeubles au Moyen Âge`,`l'interdiction coutumière de saisir les biens immeubles au Haut Moyen Âge`], a:1,
 e:`Les immeubles appartiennent au lignage ou sont concédés par le seigneur féodal : seuls les meubles sont saisissables. La saisie immobilière ne réapparaît qu'à la fin du XIIIᵉ siècle.`},

/* ====== Ajouts issus des annales janv. 2019 & rattrapage 2018-19 ====== */

/* --- Introduction --- */

{th:"Introduction", an:"rattr. 2018-19", f:1, q:`En droit romain, la procédure dite des actions de la loi a été mise en place :`,
 o:[`à l'époque du droit romain ancien`,`à l'époque du droit romain classique`,`à l'époque du droit romain post-classique`], a:0,
 e:`Procédure formaliste fixée par la loi (gestes et paroles à accomplir, sous peine de caducité). Elle est progressivement remplacée à l'époque classique par la procédure formulaire du préteur.`},

/* --- La formation des contrats --- */

{th:"La formation des contrats", an:"janv. 2019", q:`En droit romain, le mutuum sert à former :`,
 o:[`une vente`,`un prêt`,`une société`], a:1,
 e:`C'est le prêt de consommation : contrat réel portant sur des choses fongibles et consommables, conclu à titre gratuit.`},

{th:"La formation des contrats", an:"janv. 2019", q:`Parmi ces contrats, lequel est considéré comme un contrat consensuel nommé en droit romain ?`,
 o:[`le dépôt`,`le prêt`,`la société`], a:2,
 e:`Les quatre contrats consensuels nommés sont la vente, le louage, la société et le mandat. Le prêt (mutuum) et le dépôt sont des contrats réels, formés par la remise d'une chose.`},

{th:"La formation des contrats", an:"janv. 2019", f:1, q:`En droit romain, la valeur juridique des contrats consensuels nommés a été reconnue :`,
 o:[`à l'époque du droit romain ancien`,`à l'époque du droit romain classique`,`à l'époque du droit romain post-classique`], a:1,
 e:`Ils apparaissent à l'époque classique, sous l'impulsion du préteur, pour répondre aux besoins du commerce que le formalisme ancien ne satisfaisait plus.`},

{th:"La formation des contrats", an:"rattr. 2018-19", q:`Les contrats consensuels nommés sont des contrats dont l'efficacité juridique a été reconnue par :`,
 o:[`le préteur`,`l'Empereur`,`les jurisconsultes`], a:0,
 e:`Ils trouvent leur origine dans le droit prétorien : le préteur accorde une action en justice à ces quatre contrats conclus sans forme. L'Empereur reconnaît les pactes légitimes, la jurisprudence les pactes adjoints.`},

{th:"La formation des contrats", an:"janv. 2019", q:`En droit romain, les pactes adjoints à un contrat se voient reconnaître une force obligatoire grâce :`,
 o:[`aux constitutions impériales`,`à la jurisprudence des juristes consultes`,`à l'édit du préteur`], a:1,
 e:`Ajoutés à un contrat principal valable, ils bénéficient de sa force obligatoire — solution issue de la jurisprudence. Pactes prétoriens = préteur ; pactes légitimes = Empereur.`},

{th:"La formation des contrats", an:"janv. 2019", q:`En droit romain, la stipulation :`,
 o:[`pouvait être conclue entre citoyens romains et pérégrins`,`ne pouvait être conclue qu'entre citoyens romains`], a:0,
 e:`C'est l'expensilatio, sanctionnée par l'action de droit civil, qui est réservée aux seuls citoyens romains. La stipulation, elle, était accessible aux pérégrins.`},

{th:"La formation des contrats", an:"janv. 2019", q:`En droit romain ancien, les pactes :`,
 o:[`avaient une valeur juridique`,`n'avaient pas de valeur juridique`], a:1,
 e:`« Le simple pacte ne procure pas d'action » : le seul accord de volontés ne crée pas d'obligation, il faut accomplir des formalités. La reconnaissance de certains pactes n'intervient qu'à l'époque classique.`},

{th:"La formation des contrats", an:"janv. 2019", q:`La loi des XII Tables met en place :`,
 o:[`des actions de droit strict`,`des actions de bonne foi`], a:0,
 e:`Les actions de bonne foi n'apparaissent qu'à l'époque classique, avec la clause ex fide bona insérée par le préteur dans la formule.`},

{th:"La formation des contrats", an:"rattr. 2018-19", f:1, q:`Le préteur a commencé à reconnaître une efficacité juridique à certains pactes :`,
 o:[`à l'époque du droit romain ancien`,`à l'époque du droit romain classique`,`à l'époque du droit romain post-classique`], a:1,
 e:`Les pactes prétoriens (ex. pacte de reconnaissance de dette) reçoivent une action du préteur à l'époque classique — une étape de l'affirmation du consensualisme.`},

{th:"La formation des contrats", an:"rattr. 2018-19", q:`À l'époque du droit romain classique, le contrat de société est :`,
 o:[`un contrat formel nommé`,`un contrat innommé`,`un contrat consensuel nommé`], a:2,
 e:`La societas est l'un des quatre contrats consensuels nommés, avec la vente, le louage et le mandat.`},

{th:"La formation des contrats", an:"rattr. 2018-19", q:`Au Haut Moyen Âge, la manière dont se forme le contrat de prêt dans le droit franc :`,
 o:[`est similaire à celle employée à l'époque du droit romain ancien`,`est différente de celle employée à l'époque du droit romain ancien`], a:0,
 e:`Les contrats réels francs reposent, comme le mutuum romain, sur la remise effective d'une chose. La vraie rupture concerne la vente, devenue consensuelle à Rome dès l'époque classique mais formelle chez les Francs.`},

{th:"La formation des contrats", an:"rattr. 2018-19", q:`Au XVIᵉ siècle, le droit romain a été commenté par :`,
 o:[`Balde`,`Jacques Cujas`,`Jean Domat`], a:1,
 e:`Cujas est l'humaniste du XVIᵉ siècle. Balde est un post-glossateur du XIVᵉ siècle, Domat un auteur du XVIIᵉ siècle.`},

/* --- Le contenu du contrat --- */

{th:"Le contenu du contrat", an:"janv. 2019", q:`La loi des XII Tables :`,
 o:[`interdit la pratique du prêt à intérêts`,`limite le taux d'intérêt qui peut être pratiqué dans le cadre d'un prêt`,`autorise le prêt à intérêts sans encadrer le taux d'intérêt`], a:1,
 e:`Le droit romain ancien autorise le prêt à intérêts mais l'encadre : le taux maximal est fixé à environ 8,33 % du capital.`},

{th:"Le contenu du contrat", an:"janv. 2019", q:`La rente constituée, procédé de contournement de l'interdiction du prêt à intérêts, repose sur :`,
 o:[`l'utilisation d'un immeuble susceptible de produire des fruits`,`la vente puis le rachat immédiat d'un bien`,`la mise en gage d'un bien meuble ou immeuble`], a:0,
 e:`Le propriétaire vend la rente produite par son immeuble pour obtenir un capital, puis verse un revenu annuel au prêteur — l'équivalent d'intérêts. La double vente correspond au contrat de Mohatra, le gage à un autre procédé.`},

{th:"Le contenu du contrat", an:"rattr. 2018-19", q:`Selon Jean Domat, la pratique du prêt à intérêts :`,
 o:[`doit être autorisée`,`doit être interdite`], a:1,
 e:`Domat la juge contraire à la loi divine, au droit naturel et à la justice — position reprise par Pothier. Le droit laïc finit néanmoins par l'autoriser avec la loi de 1789.`},

{th:"Le contenu du contrat", an:"janv. 2019", f:1, q:`Avant l'époque du droit romain post-classique, la rescision pour lésion est ouverte :`,
 o:[`aux mineurs de 21 ans`,`aux mineurs de 25 ans`,`à tous les vendeurs lésés`], a:1,
 e:`Protection liée à leur inexpérience des affaires : la simple invocation de l'âge suffit. La généralisation aux majeurs (vendeurs d'immeubles, lésion énorme) n'intervient qu'à l'époque post-classique.`},

{th:"Le contenu du contrat", an:"janv. 2019", f:1, q:`En droit romain post-classique, la lésion qualifiée d'énorme correspond à au moins :`,
 o:[`le quart de la valeur estimée du bien`,`la moitié de la valeur estimée du bien`,`les trois quarts de la valeur estimée du bien`], a:1,
 e:`Laesio enormis : la lésion doit atteindre au moins la moitié de la valeur du bien. Le Code civil de 1804 retiendra le seuil de 7/12 (art. 1674).`},

{th:"Le contenu du contrat", an:"janv. 2019", q:`Au XVIᵉ siècle, Jacques Cujas :`,
 o:[`est favorable au procédé de la rescision pour lésion du contrat de vente`,`n'est pas favorable au procédé de la rescision pour lésion du contrat de vente`], a:1,
 e:`Conception libérale du prix : avec le « prix d'affection », il admet qu'un vendeur accepte un prix bas par attachement pour l'acheteur — le prix relève de la liberté des contractants.`},

{th:"Le contenu du contrat", an:"rattr. 2018-19", q:`La lésion commence à être considérée comme la conséquence d'un vice du consentement :`,
 o:[`par le préteur, à l'époque classique`,`par les commentateurs du droit romain, à l'époque médiévale`,`par les rédacteurs du Code civil de 1804`], a:1,
 e:`Ils envisagent une rescision en faveur de l'acheteur victime de manœuvres du vendeur : le consentement n'a pas été éclairé et libre. Les rédacteurs du Code civil reprendront ce rapprochement avec le dol.`},

{th:"Le contenu du contrat", an:"janv. 2019", q:`Quel auteur du XVIᵉ siècle a rédigé un célèbre recueil d'adages comprenant « qui vend le pot, dit le mot » ?`,
 o:[`Dumoulin`,`Cujas`,`Loisel`], a:2,
 e:`Loisel (Loysel) est l'auteur du recueil d'adages — dont aussi « on lie les bœufs par les cornes et les hommes par les paroles » et « toutes actions sont de bonne foi ».`},

{th:"Le contenu du contrat", an:"janv. 2019", q:`Au XVIᵉ siècle, Jacques Cujas est :`,
 o:[`favorable au principe de l'interprétation contre le vendeur`,`opposé au principe de l'interprétation contre le vendeur`], a:0,
 e:`Règle héritée du droit romain (c'est au vendeur de s'exprimer clairement), que Cujas, restituant le droit romain dans son sens originel, approuve.`},

{th:"Le contenu du contrat", an:"rattr. 2018-19", q:`La théorie de l'acte clair a été formellement énoncée par :`,
 o:[`Jacques Cujas`,`Jean Domat`,`Robert-Joseph Pothier`], a:0,
 e:`Cujas l'énonce explicitement : en cas de clarté, le juge ne peut pas interpréter. Chez Domat et Pothier, elle n'est qu'implicite (l'interprétation n'a lieu qu'en cas d'ambiguïté).`},

{th:"Le contenu du contrat", an:"rattr. 2018-19", q:`La règle de l'interprétation contre le vendeur est reconnue :`,
 o:[`à l'article 1602 du Code civil de 1804`,`à l'article 1102 du Code civil de 1804`,`par aucune disposition du Code civil de 1804`], a:0,
 e:`Art. 1602 al. 2 : « Tout pacte obscur ou ambigu s'interprète contre le vendeur. »`},

/* --- Les effets du contrat --- */

{th:"Les effets du contrat", an:"janv. 2019", q:`Les lettres de rescision ont été supprimées :`,
 o:[`par l'Ordonnance civile de 1667`,`au moment de la Révolution française`,`par le Code civil de 1804`], a:1,
 e:`Maintenues par le roi pendant tout l'Ancien Régime malgré les demandes des États généraux, elles sont abolies à la Révolution. La distinction nullité relative / absolue leur survit.`},

{th:"Les effets du contrat", an:"rattr. 2018-19", q:`À l'époque moderne, une lettre de rescision est :`,
 o:[`un acte qui prononce la nullité d'un contrat`,`un acte qui ordonne l'exécution forcée d'un contrat`,`un acte permettant de demander l'annulation d'un contrat au juge`], a:2,
 e:`La chancellerie ne prononce pas la nullité : la lettre, délivrée quasi automatiquement, permet seulement de saisir le juge, qui l'entérine (annulation) ou la rejette (exécution forcée).`},

{th:"Les effets du contrat", an:"rattr. 2018-19", q:`Au Bas Moyen Âge, les clauses de renonciation au droit romain :`,
 o:[`ne peuvent porter que sur des dispositions particulières`,`peuvent porter sur le droit romain de manière générale`,`ne sont pas employées dans les contrats`], a:1,
 e:`Elles peuvent être générales ou particulières. Les juristes les acceptent à condition qu'elles ne portent pas atteinte aux bonnes mœurs.`},

{th:"Les effets du contrat", an:"janv. 2019", q:`En droit romain, la garantie contre les vices cachés qui incombe au vendeur :`,
 o:[`devait à l'origine être prévue dans le contrat, puis fut intégrée au régime juridique de la vente`,`fut d'abord un élément du régime juridique de la vente, puis devint conventionnelle`,`n'existait pas encore`], a:0,
 e:`D'abord conventionnelle, elle est ensuite incorporée au régime général de la vente — même évolution que la garantie d'éviction. Elle passera à l'article 1641 du Code civil.`},

{th:"Les effets du contrat", an:"janv. 2019", q:`En droit romain, le bailleur d'une chose :`,
 o:[`a une obligation de garantie en cas d'éviction du locataire`,`n'a pas d'obligation de garantie en cas d'éviction du locataire`], a:0,
 e:`La garantie d'éviction du louage suit le même régime juridique que celle de la vente.`},

{th:"Les effets du contrat", an:"janv. 2019", q:`En droit romain, l'employeur (conductor) du louage de services :`,
 o:[`doit le salaire même si le travail est interrompu pour une cause indépendante de la volonté du salarié`,`ne doit le salaire que si le travail a été effectivement accompli`], a:0,
 e:`L'employeur est tenu du paiement de la merces même en cas d'interruption due à des éléments indépendants de la volonté du salarié.`},

{th:"Les effets du contrat", an:"janv. 2019", q:`Le Code civil de 1804 :`,
 o:[`ne comporte aucune disposition relative au contrat de louage de services`,`ne comporte que trois articles relatifs au contrat de louage de services`,`consacre un livre entier au contrat de louage de services`], a:1,
 e:`Les révolutionnaires ayant aboli les corporations au nom de la liberté du travail, le Code reste très discret : la législation du travail ne se développe qu'au XIXᵉ siècle.`},

{th:"Les effets du contrat", an:"janv. 2019", q:`En droit romain, la répartition des bénéfices entre les associés :`,
 o:[`est en principe librement fixée par les associés`,`est obligatoirement proportionnelle aux apports`,`peut attribuer la totalité des bénéfices à un seul associé`], a:0,
 e:`Le droit romain laisse en principe aux associés la liberté de fixer la répartition — mais la société « léonine », qui attribue tout à un seul, est prohibée.`},

{th:"Les effets du contrat", an:"janv. 2019", q:`La répartition proportionnelle des bénéfices et des pertes entre les associés :`,
 o:[`est le principe retenu par le Code civil de 1804`,`n'est pas le principe retenu par le Code civil de 1804`], a:0,
 e:`À défaut de clause contraire, la part de chaque associé est proportionnelle à son apport.`},

{th:"Les effets du contrat", an:"rattr. 2018-19", q:`En droit romain, les associés qui concluent un contrat de société :`,
 o:[`peuvent mettre en commun tous leurs biens`,`ne peuvent pas mettre en commun tous leurs biens`], a:0,
 e:`La societas omnium bonorum (société de tous biens) est admise en droit romain.`},

{th:"Les effets du contrat", an:"rattr. 2018-19", q:`En droit romain, le versement d'honoraires par le mandant au mandataire est :`,
 o:[`facultatif`,`obligatoire`], a:0,
 e:`Le mandat est par essence un service gratuit rendu entre hommes libres : des honoraires peuvent être versés, mais ils ne peuvent pas être exigés par l'action du mandat.`},

{th:"Les effets du contrat", an:"janv. 2019", q:`Dans le droit romain ancien, le paiement :`,
 o:[`est soumis à certaines formalités`,`n'est soumis à aucune formalité`], a:0,
 e:`La solutio s'accomplit selon les mêmes formes que la prestation initiale (ex. mesurer la chose rendue dans un prêt). Le formalisme s'estompe à l'époque classique, qui admet la dation en paiement.`},

/* ================== LES PERSONNAGES ================== */
/* Section dédiée aux grands juristes (qui pense quoi, à ne pas confondre). */

{th:"Les personnages", q:`L'argument selon lequel l'argent est « infertile » et ne peut produire d'intérêts est dû à :`,
 o:[`Aristote`,`Jacques Cujas`,`Jean Domat`], a:0,
 e:`Aristote : argument philosophique repris par l'Église pour condamner l'usure (le prêt à intérêts).`},
{th:"Les personnages", q:`L'empereur qui compile l'ensemble du droit romain (Code, Digeste, Institutes, Novelles) est :`,
 o:[`Justinien`,`Dioclétien`,`Gaius`], a:0,
 e:`Justinien (VIᵉ s.) compile le droit romain (Corpus juris civilis), source que le Moyen Âge redécouvrira. Gaius est un juriste classique ; Dioclétien, l'empereur d'un texte sur les bonnes mœurs.`},
{th:"Les personnages", q:`Le sens ACTIF de l'obligation (le droit du créancier) est mis en avant par :`,
 o:[`Paul`,`Justinien`,`Gaius`], a:0,
 e:`Paul (IIIᵉ s.) : « la nature de l'obligation est d'obliger en vue de quelque chose » (côté créancier). Le sens PASSIF (la dette) figure dans les Institutes de Justinien.`},
{th:"Les personnages", q:`Le fondateur de l'école des glossateurs, à Bologne, est :`,
 o:[`Irnerius`,`Bartole`,`Balde`], a:0,
 e:`Irnerius (XIIᵉ s.) relance l'étude du droit romain par des gloses. Bartole et Balde sont des post-glossateurs (XIVᵉ s.).`},
{th:"Les personnages", q:`La distinction entre lois d'utilité PUBLIQUE et lois d'utilité PRIVÉE est l'œuvre de :`,
 o:[`Bartole`,`Balde`,`Irnerius`], a:0,
 e:`Bartole (XIVᵉ s.) : elle prépare la distinction lois impératives / supplétives. Balde, son disciple, retient « cause + bonne foi de tous les contrats ».`},
{th:"Les personnages", q:`Les Coutumes de Beauvaisis (XIIIᵉ s.), qui reconnaissent le consensualisme coutumier (« marché est fait sitôt comme il est créanté »), sont l'œuvre de :`,
 o:[`Philippe de Beaumanoir`,`Antoine Loysel`,`Charondas`], a:0,
 e:`Beaumanoir annonce le consensualisme coutumier ; Du Moulin le consacrera au XVIᵉ siècle.`},
{th:"Les personnages", q:`À l'époque moderne, Jacques Cujas est favorable, pour la formation des contrats :`,
 o:[`au formalisme`,`au consensualisme`], a:0,
 e:`Cujas (humaniste romaniste, XVIᵉ s.) restaure le droit romain dans son sens originel et RÉAFFIRME le formalisme — à l'opposé de Domat (XVIIᵉ, droit naturel) qui le rejette.`},
{th:"Les personnages", q:`La théorie de l'acte clair (en cas de clarté, le juge ne peut pas interpréter) est énoncée EXPLICITEMENT par :`,
 o:[`Jacques Cujas`,`Jean Domat`,`Pothier`], a:0,
 e:`Cujas l'énonce explicitement ; chez Domat et Pothier elle n'est qu'implicite (l'interprétation n'a lieu qu'en cas d'ambiguïté).`},
{th:"Les personnages", q:`Charles Du Moulin consacre le consensualisme en commentant :`,
 o:[`la coutume de Paris`,`les Institutes de Justinien`,`le Digeste`], a:0,
 e:`Du Moulin (XVIᵉ, coutumier) consacre le consensualisme en commentant la coutume de Paris et défend un droit national français.`},
{th:"Les personnages", q:`L'adage « On lie les bœufs par les cornes et les hommes par les paroles » est dû à :`,
 o:[`Antoine Loysel`,`Charles Du Moulin`,`Pothier`], a:0,
 e:`Loysel met le consensualisme coutumier en adages ; Du Moulin est la doctrine qui les fonde. Si la question cite une formule, c'est Loysel.`},
{th:"Les personnages", q:`Le consensualisme reçoit un fondement LAÏQUE (le contrat obligerait « même si Dieu n'existait pas ») chez :`,
 o:[`Hugo Grotius`,`les canonistes`,`Jean Domat`], a:0,
 e:`Grotius (École du droit de la Nature et des Gens) fonde le consensualisme sur le droit naturel (pacta sunt servanda), rompant avec le fondement religieux des canonistes.`},
{th:"Les personnages", q:`Le « Traité des obligations » (1761), qui inspire directement le Code civil de 1804, est l'œuvre de :`,
 o:[`Robert-Joseph Pothier`,`Jean Domat`,`Hugo Grotius`], a:0,
 e:`Pothier (XVIIIᵉ s.) synthétise l'ancien droit et inspire les rédacteurs de 1804. Domat (XVIIᵉ) est l'auteur des « Lois civiles dans leur ordre naturel ».`},
{th:"Les personnages", q:`Le prêt à intérêts doit être interdit (contraire à la loi divine, au droit naturel et à la justice) selon :`,
 o:[`Jean Domat`,`Charles Du Moulin`,`Antoine Loysel`], a:0,
 e:`Domat (et Pothier après lui) y est hostile. Du Moulin, au contraire, reprend la distinction calviniste entre intérêts licites et usure injuste.`},
{th:"Les personnages", q:`La rescision pour lésion peut profiter aux DEUX cocontractants (vendeur ET acheteur) en cas de tromperie selon :`,
 o:[`Du Moulin et Pothier`,`Jacques Cujas`,`Jourdan`], a:0,
 e:`Du Moulin et Pothier l'admettent pour les deux parties ; le droit romain ne l'ouvrait qu'au vendeur. Cujas et Jourdan sont au contraire hostiles à la rescision.`},
{th:"Les personnages", q:`Le rédacteur du Code civil qui DÉFEND la rescision pour lésion (« protéger le pauvre opprimé contre le riche qui abuse de l'occasion ») est :`,
 o:[`Portalis`,`Jourdan`,`Cambacérès`], a:0,
 e:`Portalis (soutenu par Napoléon) la défend. Jourdan la combat ; le 2ᵉ projet de Cambacérès l'avait supprimée.`},
{th:"Les personnages", q:`La rescision pour lésion est qualifiée de « caprice législatif » et de « tache dans le Code » par :`,
 o:[`Jourdan`,`Portalis`,`Napoléon`], a:0,
 e:`Jourdan (doctrine libérale du XIXᵉ s.) : « qui dit contractuel, dit juste ». Portalis et Napoléon la défendaient.`},
{th:"Les personnages", q:`Qui REJETTE le formalisme romain au profit du seul consentement ?`,
 o:[`Jean Domat (XVIIᵉ s.)`,`Jacques Cujas (XVIᵉ s.)`], a:0,
 e:`Domat fonde le contrat sur le consentement mutuel et rejette le formalisme romain ; Cujas, au contraire, le réaffirme. C'est le piège classique Cujas ↔ Domat.`},
{th:"Les personnages", q:`La règle de l'efficacité de l'acte (entre deux sens, retenir celui qui produit un effet) est justifiée par la volonté présumée chez :`,
 o:[`Vattel`,`Charondas`,`Loysel`], a:0,
 e:`Vattel (XVIIIᵉ) : « on ne présume point que des personnes censées aient prétendu ne rien faire ». Charondas justifie de même l'interprétation selon les USAGES.`},

/* ================== ANNALE « SUJET RÉCENT » (50 questions) ================== */
/* Sujet photographié par l'étudiant. Réponses déterminées D'APRÈS LE COURS
   (pas d'après les croix de la copie, qui comportait des erreurs).
   Quelques-unes (Q12, 17, 33, 34, 39, 40, 48) sont à recouper avec le corrigé. */

{th:"La formation des contrats", an:"sujet récent", f:1, q:`Une valeur juridique est reconnue à certains pactes à partir de l'époque :`,
 o:[`du droit romain ancien`,`du droit romain classique`,`du droit romain post-classique`], a:1,
 e:`La reconnaissance d'une valeur juridique à certains pactes commence à l'époque classique (pactes adjoints par la jurisprudence, pactes prétoriens par le préteur) ; les pactes légitimes (Empereur) viennent ensuite.`},
{th:"La formation des contrats", an:"sujet récent", f:1, q:`Selon le droit romain, le pacte :`,
 o:[`est un contrat qui se forme par la remise d'une chose`,`est un contrat littéral`,`est un simple accord de volonté`], a:2,
 e:`Le pacte (« convention ») est un simple accord de volontés, dépourvu en principe de valeur juridique (« le simple pacte ne procure pas d'action »).`},
{th:"La formation des contrats", an:"sujet récent", f:1, q:`À l'époque du droit romain, les pactes dont la valeur juridique est reconnue par l'Empereur sont appelés :`,
 o:[`pactes légitimes`,`pactes impériaux`,`pactes officiels`], a:0,
 e:`Pactes légitimes : reconnus par des constitutions impériales (ex. pacte de compromis, promesse de dot). Pactes prétoriens = préteur ; pactes adjoints = jurisprudence.`},
{th:"La formation des contrats", an:"sujet récent", f:1, q:`À l'époque du droit romain, la valeur juridique a été attribuée à certains pactes par :`,
 o:[`le censeur`,`le préteur`,`le tribun`], a:1,
 e:`Le préteur reconnaît une efficacité juridique aux pactes prétoriens (ex. pacte de reconnaissance de dette).`},
{th:"Introduction", an:"sujet récent", f:1, q:`À l'époque du droit romain, la jurisprudence :`,
 o:[`n'établit qu'une seule classification des obligations selon leur objet`,`n'établit qu'une seule classification des obligations selon leur source`,`établit plusieurs classifications des obligations`], a:2,
 e:`La jurisprudence romaine établit plusieurs classifications (selon l'objet : donner / faire / ne pas faire ; mais aussi contrats / délits, puis quadripartite).`},
{th:"La formation des contrats", an:"sujet récent", f:1, q:`À l'époque du droit romain classique, la jurisprudence :`,
 o:[`ne reconnaît pas de valeur juridique aux pactes`,`reconnaît une valeur juridique aux pactes portant sur un bien immeuble`,`reconnaît une valeur juridique aux pactes adjoints à un contrat valable`], a:2,
 e:`Les pactes adjoints à un contrat principal valable bénéficient de sa force obligatoire (solution issue de la jurisprudence des juristes consultes).`},
{th:"Introduction", an:"sujet récent", f:1, q:`À l'époque du droit romain, la jurisprudence :`,
 o:[`propose une définition active et une définition passive de l'obligation juridique`,`ne donne pas de définition de l'obligation juridique`,`ne propose qu'une définition active de l'obligation juridique`], a:0,
 e:`Sens ACTIF (Paul, côté créancier) et sens PASSIF (la dette, Institutes de Justinien) : les deux conceptions sont d'origine romaine.`},
{th:"La formation des contrats", an:"sujet récent", f:1, q:`À l'époque du droit romain, le mutuum est :`,
 o:[`un contrat qui se forme par la rédaction d'un écrit`,`un contrat qui établit des obligations réciproques entre les parties`,`un contrat conclu à titre gratuit`], a:2,
 e:`Le mutuum (prêt de consommation) est un contrat réel, unilatéral et conclu à titre gratuit (le prêteur ne touche pas d'intérêt).`},
{th:"La formation des contrats", an:"sujet récent", f:1, q:`À l'époque du droit romain, la stipulation est :`,
 o:[`un contrat qui établit des obligations à la charge d'une seule partie`,`un contrat qui porte nécessairement sur le transfert d'un bien immeuble`,`un contrat qui porte nécessairement sur le transfert d'un bien meuble`], a:0,
 e:`Contrat verbal unilatéral : seul le promettant est obligé. Son objet n'est pas limité à un type de bien (c'est un « moule à contrat »).`},
{th:"La formation des contrats", an:"sujet récent", f:1, q:`Le mutuum et la stipulation sont utilisés à partir de l'époque :`,
 o:[`du droit romain ancien`,`du droit romain classique`,`du droit romain post-classique`], a:0,
 e:`Ce sont des actes formels du droit romain ancien (sanctionnés par des actions de droit strict).`},
{th:"La formation des contrats", an:"sujet récent", f:1, q:`À l'époque du droit romain classique, le consensualisme :`,
 o:[`est le principe de formation des contrats`,`est reconnu de manière exceptionnelle`,`est totalement ignoré`], a:1,
 e:`Le consensualisme n'est jamais consacré en principe (« le simple pacte ne procure pas d'action ») ; il n'est admis que pour les quatre contrats consensuels nommés.`},
{th:"La formation des contrats", an:"sujet récent", f:1, q:`Les contrats consensuels nommés :`,
 o:[`sont au nombre de 5`,`sont sanctionnés par une action de droit strict`,`sont utilisés à l'époque du droit romain post-classique`], a:2,
 e:`Ils sont QUATRE (vente, louage, société, mandat) et sanctionnés par une action de BONNE FOI (a et b sont faux) ; apparus à l'époque classique, ils restent utilisés à l'époque post-classique. (À recouper avec le corrigé.)`},
{th:"La formation des contrats", an:"sujet récent", f:1, q:`À l'époque du droit romain classique, le contrat de vente :`,
 o:[`est un contrat qui se forme par le seul consentement des parties`,`est un contrat qui n'engage que l'acheteur`,`est un contrat sanctionné par une action de droit strict`], a:0,
 e:`La vente est un contrat consensuel (accord sur la chose et le prix), synallagmatique, sanctionné par une action de bonne foi.`},
{th:"La formation des contrats", an:"sujet récent", f:1, q:`À l'époque du droit romain classique, le juge, pour déterminer la validité d'un contrat de société, apprécie :`,
 o:[`uniquement la volonté des parties`,`uniquement les formalités accomplies par les parties`,`la volonté des parties et les formalités qu'elles ont accomplies`], a:0,
 e:`La société est un contrat consensuel nommé : le juge, par l'action de bonne foi, apprécie la volonté des parties (aucune formalité requise).`},
{th:"La formation des contrats", an:"sujet récent", f:1, q:`L'action de droit strict :`,
 o:[`est utilisée à l'époque du droit romain ancien`,`ne permet pas de sanctionner une stipulation`,`ne permet pas de sanctionner un mutuum`], a:0,
 e:`Les actes formels du droit romain ancien (mutuum, stipulation, expensilatio) sont précisément sanctionnés par des actions de droit strict.`},
{th:"Les effets du contrat", an:"sujet récent", f:1, q:`À l'époque du Haut Moyen-Âge, le droit franc :`,
 o:[`ne reconnaît pas l'erreur comme une cause de nullité du contrat`,`établit que la conclusion du contrat suffit à le valider`,`interdit la conclusion de contrat de prêt de choses`], a:0,
 e:`Le droit franc, formaliste, ignore la volonté des parties : l'erreur n'est pas prise en compte comme cause de nullité.`},
{th:"La formation des contrats", an:"sujet récent", f:1, q:`À l'époque du Haut Moyen-Âge, le droit franc :`,
 o:[`reconnaît l'erreur comme une cause de nullité du contrat`,`établit que le contrat de vente se forme par le seul consentement des parties`,`établit que le contrat de vente se forme par la remise de la chose`], a:2,
 e:`Le droit franc ignore le consensualisme (b faux) et l'erreur (a faux) ; il connaît des contrats réels formés par la remise de la chose. (À recouper avec le corrigé.)`},
{th:"La formation des contrats", an:"sujet récent", f:1, q:`À l'époque du Haut Moyen-Âge, le droit franc :`,
 o:[`interdit la conclusion de contrat de vente`,`reconnaît le dol comme une cause de nullité du contrat`,`établit que le contrat de prêt se forme par la remise de la chose, comme à l'époque du droit romain ancien`], a:2,
 e:`Les contrats réels francs (prêt) se forment par la remise effective de la chose, comme le mutuum du droit romain ancien.`},
{th:"La formation des contrats", an:"sujet récent", f:1, q:`À l'époque du Bas Moyen-Âge :`,
 o:[`les auteurs de droit coutumier n'admettent pas que les contrats puissent être formés par le seul consentement des parties`,`les post-glossateurs admettent que les contrats puissent être formés par le seul consentement des parties`,`les commentateurs de droit romain admettent uniquement que les contrats se forment de manière formelle`], a:1,
 e:`Les post-glossateurs (Bartole, Balde) font évoluer le droit romain vers le consensualisme ; les coutumiers (Beaumanoir) l'admettent aussi.`},
{th:"La formation des contrats", an:"sujet récent", f:1, q:`À l'époque moderne, Jacques Cujas :`,
 o:[`est favorable au principe du consensualisme pour la formation des contrats`,`est favorable au principe du formalisme pour la formation des contrats`,`ne se prononce pas sur la question de la formation des contrats`], a:1,
 e:`Cujas (humaniste romaniste) restaure le droit romain dans son sens originel et réaffirme le formalisme.`},
{th:"La formation des contrats", an:"sujet récent", f:1, q:`À l'époque moderne, le consensualisme contractuel :`,
 o:[`est reconnu par les auteurs de droit coutumier`,`n'est pas reconnu par les auteurs de droit coutumier`], a:0,
 e:`Les coutumiers (Du Moulin sur la coutume de Paris, Loysel par ses adages) consacrent le consensualisme.`},
{th:"La formation des contrats", an:"sujet récent", f:1, q:`En ce qui concerne la formation des contrats, le Code civil de 1804 :`,
 o:[`met en avant le même principe que le droit romain ancien`,`met en avant le même principe que Jacques Cujas`,`met en avant le même principe que Charles Dumoulin`], a:2,
 e:`Le Code civil ne retient du droit romain que le consensualisme — le principe défendu par Du Moulin (et non le formalisme de Cujas ou du droit romain ancien).`},
{th:"La formation des contrats", an:"sujet récent", f:1, q:`L'Ordonnance civile de 1667 établit :`,
 o:[`un principe de preuve par écrit des contrats`,`un principe de preuve par témoins des contrats`,`ne comporte pas de dispositions relatives à la preuve des contrats`], a:0,
 e:`La Grande ordonnance civile de 1667 (Louis XIV) confirme la primauté de la preuve par écrit posée par l'ordonnance de Moulins (1566).`},
{th:"La formation des contrats", an:"sujet récent", f:1, q:`La preuve par témoins des contrats :`,
 o:[`est le principe de preuve des contrats selon le Code civil de 1804`,`n'est pas le principe de preuve des contrats selon le Code civil de 1804`], a:1,
 e:`Le Code civil de 1804 retient la preuve par ÉCRIT (ancien art. 1341) ; on ne peut prouver par témoins contre le contenu des actes écrits.`},
{th:"La formation des contrats", an:"sujet récent", f:1, q:`L'Ordonnance de Moulins de 1566 :`,
 o:[`établit un principe de preuve par écrit des contrats`,`établit la possibilité d'un commencement de preuve par écrit des contrats`,`ne comporte pas de dispositions relatives à la preuve des contrats`], a:0,
 e:`Elle pose le principe de la preuve par écrit (interdit les témoignages contre un écrit). Le « commencement de preuve par écrit » est une création des juridictions, pas de l'ordonnance.`},
{th:"Le contenu du contrat", an:"sujet récent", f:1, q:`Le contrat de prêt à intérêts :`,
 o:[`est un contrat qui se forme grâce à un mutuum et une stipulation à l'époque du droit romain ancien`,`est un contrat dont l'usage est autorisé par le droit canonique à l'époque du Bas Moyen-Âge`,`est un contrat dont l'usage doit être interdit selon Charles Dumoulin`], a:0,
 e:`Le mutuum (gratuit) pour le capital + une stipulation pour les intérêts. Le droit canonique INTERDIT l'usure au Bas Moyen-Âge (b faux) ; Du Moulin l'autorise sous conditions (c faux).`},
{th:"Le contenu du contrat", an:"sujet récent", f:1, q:`Le contrat de prêt à intérêts :`,
 o:[`est un contrat dont l'usage est interdit à l'époque du droit romain ancien`,`est un contrat qui se forme grâce à un mutuum à l'époque du droit romain classique`,`est un contrat dont l'usage doit être autorisé à certaines conditions selon Charles Dumoulin`], a:2,
 e:`Du Moulin reprend la distinction calviniste entre intérêts licites et usure injuste. En droit romain ancien le prêt à intérêts est autorisé mais encadré (a faux).`},
{th:"Le contenu du contrat", an:"sujet récent", f:1, q:`Le contrat de prêt à intérêts :`,
 o:[`est un contrat qui se forme grâce au seul consentement des parties à l'époque du droit romain ancien`,`est un contrat dont l'usage doit être interdit selon Jean Domat`,`est un contrat dont l'usage est interdit par le Code civil de 1804`], a:1,
 e:`Domat (repris par Pothier) juge le prêt à intérêts contraire à la loi divine et au droit naturel. Le Code civil l'autorise au contraire (art. 1905).`},
{th:"Le contenu du contrat", an:"sujet récent", f:1, q:`Le contrat de prêt à intérêts :`,
 o:[`est un contrat dont l'usage est interdit à l'époque du droit romain classique`,`est un contrat dont l'usage est interdit par le droit canonique à l'époque du Bas Moyen-Âge`,`est un contrat qui se forme grâce à une lettre délivrée par les parlements à l'époque moderne`], a:1,
 e:`Au Bas Moyen-Âge, l'usure est prohibée par le droit canonique (péché mortel). À l'époque classique le prêt à intérêts est au contraire encouragé (a faux).`},
{th:"Le contenu du contrat", an:"sujet récent", f:1, q:`Le contrat de prêt à intérêts :`,
 o:[`est un contrat dont l'usage est autorisé à l'époque du droit romain ancien`,`est un contrat dont l'usage est autorisé par le droit canonique à l'époque du Haut Moyen-Âge`,`est un contrat dont l'usage doit être autorisé sans condition selon Jean Domat`], a:0,
 e:`En droit romain ancien, le prêt à intérêts est autorisé mais encadré (taux). Le droit canonique l'interdit (b faux) ; Domat veut l'interdire (c faux).`},
{th:"Le contenu du contrat", an:"sujet récent", f:1, q:`À l'époque du droit romain ancien, la rescision pour lésion d'un contrat de vente :`,
 o:[`concerne uniquement les majeurs`,`peut être obtenue quelle que soit l'importance de la lésion`,`n'est pas mise en œuvre`], a:2,
 e:`En droit romain ancien, les contrats même déséquilibrés sont valables (pas de « juste prix »). La protection des mineurs de 25 ans et la lésion énorme apparaissent plus tard.`},
{th:"Le contenu du contrat", an:"sujet récent", f:1, q:`La rescision pour lésion :`,
 o:[`fait l'objet de clauses de renonciation à l'époque du Haut Moyen-Âge`,`fait l'objet de clauses de renonciation à l'époque du Bas Moyen-Âge`,`ne fait pas l'objet de clauses de renonciation`], a:1,
 e:`Au Bas Moyen-Âge, avec la redécouverte du droit romain, les contractants insèrent des clauses de renonciation au droit romain. Au Haut Moyen-Âge, le droit romain est ignoré (a faux).`},
{th:"Le contenu du contrat", an:"sujet récent", f:1, q:`À l'époque moderne, la rescision pour lésion :`,
 o:[`ne peut être demandée que par le vendeur selon Jacques Cujas`,`ne peut être demandée que par le vendeur selon Charles Dumoulin`,`ne peut être demandée ni par le vendeur ni par l'acheteur selon Jean Domat`], a:0,
 e:`Du Moulin (et Pothier) admettent au contraire la rescision pour les DEUX cocontractants (b faux). La restriction au seul vendeur est la position dominante. (Attribution à recouper avec le corrigé.)`},
{th:"Les effets du contrat", an:"sujet récent", f:1, q:`À l'époque du droit romain classique, le vendeur :`,
 o:[`est tenu d'une garantie contre l'éviction selon le régime juridique de la vente à l'époque du droit romain ancien`,`est tenu d'une garantie contre l'éviction selon le régime juridique de la vente à l'époque du droit romain classique`,`est celui contre lequel doit se faire l'interprétation du contrat de vente selon le Code civil de 1804`], a:1,
 e:`La garantie d'éviction, d'abord conventionnelle, devient un élément du régime juridique de la vente à l'époque classique (a faux : en droit ancien elle devait être stipulée). (À recouper avec le corrigé.)`},
{th:"Les effets du contrat", an:"sujet récent", f:1, q:`Le vendeur :`,
 o:[`est celui contre lequel doit se faire l'interprétation du contrat de vente selon Jacques Cujas`,`est tenu d'une garantie contre l'éviction uniquement si les contractants l'ont prévue dans le contrat de vente selon le Code civil de 1804`,`est celui qui transfère la propriété de la chose vendue lors de la tradition de cette chose selon le Code civil de 1804`], a:0,
 e:`Cujas est favorable à l'interprétation contre le vendeur (« qui vend le pot dit le mot »). Selon le CC : la garantie d'éviction est due de droit (art. 1626, b faux) et la propriété se transfère solo consensu (art. 1583, c faux).`},
{th:"Les effets du contrat", an:"sujet récent", f:1, q:`Le vendeur :`,
 o:[`transfère la propriété de la chose vendue lors de la conclusion du contrat de vente à l'époque du droit romain ancien`,`est tenu d'une garantie contre l'éviction selon le régime juridique de la vente à l'époque du droit romain post-classique`,`est celui contre lequel doit se faire l'interprétation du contrat de vente selon Antoine Loisel`], a:2,
 e:`Loysel : « qui vend le pot dit le mot » (interprétation contre le vendeur). En droit romain, la propriété se transfère par la TRADITION, pas par la conclusion du contrat (a faux).`},
{th:"Les effets du contrat", an:"sujet récent", f:1, q:`À l'époque du droit romain ancien, le dol :`,
 o:[`n'est pas considéré comme une cause de nullité du contrat`,`n'est considéré comme une cause de nullité du contrat que s'il est le fait du débiteur`,`n'est considéré comme une cause de nullité du contrat que s'il est le fait du créancier`], a:0,
 e:`En droit romain, le dol est d'abord un DÉLIT : le contrat reste juridiquement valable ; l'annulation ne s'obtient que par des moyens procéduraux.`},
{th:"Les effets du contrat", an:"sujet récent", f:1, q:`À l'époque du Haut Moyen-Âge, le dol :`,
 o:[`n'est pas considéré comme une cause de nullité du contrat`,`est considéré comme une cause de nullité du contrat selon Antoine Loisel`], a:0,
 e:`Le droit romain étant ignoré et le droit franc formaliste, le dol n'est pas pris en compte comme cause de nullité au Haut Moyen-Âge.`},
{th:"Les effets du contrat", an:"sujet récent", f:1, q:`À l'époque moderne, le dol :`,
 o:[`n'est pas considéré comme une cause de nullité du contrat`,`est considéré comme une cause de nullité du contrat qui nécessite l'obtention de lettres de rescision`,`est considéré comme une cause de nullité du contrat selon Bartole`], a:1,
 e:`Sous l'Ancien Régime, écarter une clause de renonciation et obtenir l'annulation suppose une lettre de rescision délivrée par la chancellerie royale (nullité relative). (À recouper avec le corrigé.)`},
{th:"Les effets du contrat", an:"sujet récent", f:1, q:`À l'époque du droit romain ancien :`,
 o:[`un simple accord de volontés peut avoir des effets juridiques`,`une obligation contractuelle sans cause est valable`,`le préteur est chargé d'annuler les contrats qui comportent des clauses contraires aux lois parfaites`], a:1,
 e:`Le formalisme produit des actes ABSTRAITS, détachés de leur cause : l'obligation peut être valable sans considération de la cause. Le simple accord ne suffit pas (a faux). (À recouper avec le corrigé.)`},
{th:"Les effets du contrat", an:"sujet récent", f:1, q:`À l'époque du droit romain classique, le contrat de louage de choses :`,
 o:[`est sanctionné par une action de droit strict`,`est un contrat qui se forme par la rédaction d'un écrit`,`est un contrat qui établit des obligations à la charge de plusieurs parties`], a:2,
 e:`Le louage est un contrat consensuel synallagmatique : il fait naître des obligations à la charge des deux parties (bailleur et preneur). Sanctionné par une action de bonne foi (a faux).`},
{th:"Les effets du contrat", an:"sujet récent", f:1, q:`À l'époque du droit romain classique, le contrat de louage de choses :`,
 o:[`n'est pas sanctionné par une action judiciaire`,`est un contrat consensuel nommé`,`est un contrat qui établit des obligations à la charge d'une seule partie`], a:1,
 e:`Le louage est l'un des quatre contrats consensuels nommés (vente, louage, société, mandat). Il est synallagmatique (c faux) et sanctionné par une action de bonne foi (a faux).`},
{th:"Les effets du contrat", an:"sujet récent", f:1, q:`À l'époque du droit romain, le contrat de louage de choses :`,
 o:[`est sanctionné par une action de bonne foi`,`est un contrat qui se forme par la remise de la chose`,`est le seul contrat de louage reconnu par le droit`], a:0,
 e:`Contrat consensuel nommé → action de bonne foi. Il existe trois louages (de choses, de services, d'industrie ; c faux) et il se forme par le seul consentement (b faux).`},
{th:"Les effets du contrat", an:"sujet récent", f:1, q:`À l'époque du droit romain ancien, le juge, pour déterminer la validité d'une stipulation, apprécie :`,
 o:[`uniquement les formalités accomplies par les parties`,`uniquement le consentement des parties`,`les formalités accomplies par les parties et leur consentement`], a:0,
 e:`La stipulation est un acte formel sanctionné par une action de droit strict : le juge vérifie uniquement le respect des formes (question/réponse correspondantes).`},
{th:"Les effets du contrat", an:"sujet récent", f:1, q:`À l'époque du droit romain classique, le régime juridique du contrat de mandat :`,
 o:[`impose au mandataire une obligation de rémunération en faveur du mandant`,`impose au mandant une obligation de rémunération en faveur du mandataire`,`n'impose pas d'obligation de rémunération aux parties`], a:2,
 e:`Le mandat est par essence un service gratuit : des honoraires peuvent être versés mais ne peuvent pas être exigés par l'action du mandat.`},
{th:"Les effets du contrat", an:"sujet récent", f:1, q:`À l'époque du droit romain classique, le contrat de mandat est :`,
 o:[`un contrat consensuel nommé`,`un contrat qui se forme par la rédaction d'un écrit`,`un contrat qui se forme par la remise d'une chose`], a:0,
 e:`Le mandat est l'un des quatre contrats consensuels nommés, formé par le seul échange des consentements.`},
{th:"Le contenu du contrat", an:"sujet récent", f:1, q:`À l'époque du droit romain classique, un contrat qui porte sur un objet incertain est considéré comme nul :`,
 o:[`vrai`,`faux`], a:0,
 e:`Vrai : l'objet du contrat doit être certain (déterminé ou déterminable). Ce qui est absolument indéterminé ne peut pas être l'objet d'une obligation (repris par Pothier).`},
{th:"Le contenu du contrat", an:"sujet récent", f:1, q:`Selon le droit romain, l'interprétation de la stipulation :`,
 o:[`doit se faire contre le stipulant`,`doit se faire contre le promettant`,`doit se faire contre le stipulateur`], a:0,
 e:`Règle romaine « contra stipulatorem » : l'ambiguïté de la stipulation s'interprète contre celui qui a posé la question (le stipulant), car c'est lui qui a choisi les termes. (À recouper avec le corrigé.)`},
{th:"La formation des contrats", an:"sujet récent", f:1, q:`Charles Dumoulin est un auteur favorable :`,
 o:[`au principe du formalisme pour la formation des contrats`,`au principe du consensualisme pour la formation des contrats`], a:1,
 e:`Du Moulin consacre le consensualisme en commentant la coutume de Paris et écarte le formalisme romain.`},
{th:"Les effets du contrat", an:"sujet récent", f:1, q:`À l'époque moderne, les États-généraux vont demander la suppression des lettres de rescision :`,
 o:[`vrai`,`faux`], a:0,
 e:`Vrai : à partir du XVIᵉ siècle, les États généraux demandent de manière récurrente la suppression de cette formalité — demande jamais accueillie par le roi avant la Révolution.`}

];
