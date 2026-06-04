/* =====================================================================
   Données de révision — Droit institutionnel de l'Union européenne
   Cours d'Alexis Husser (Université de Strasbourg), L2.
   Extraites des notes Obsidian (4 notes « complètes »).

   Les entrées sont CLASSÉES PAR CHAPITRE du cours (champ « th »), dans
   l'ordre du plan. Les jurisprudences faisant doublon (même point exact)
   ont été fusionnées ou réduites à l'arrêt le plus important.

   Chaque entrée :
     t  : type   -> "art" (article / texte) | "tr" (traité / étape) | "jur" (jurisprudence)
     th : thème  -> nom du chapitre (sert au filtrage)
     r  : référence (recto de la flashcard)
     m  : signification (verso de la flashcard)

   Pour ajouter une entrée : copiez une ligne et adaptez-la. Rouvrez
   ensuite index.html (aucun serveur nécessaire).
   ===================================================================== */

/* Ordre d'affichage des chapitres (suit le plan du cours) */
window.THEME_ORDER = [
  "Intro · Des Communautés à l'Union",
  "Intro · Les élargissements",
  "Compétences · Dévolution & classification",
  "Compétences · Exercice & coopération renforcée",
  "Institutions · Le paysage institutionnel",
  "Institutions · Les principes directeurs",
  "Sources · Le droit primaire",
  "Sources · Le droit dérivé",
  "Sources · Les sources non-écrites (PGD)",
  "Portée · La primauté",
  "Portée · L'effet direct",
  "Identité · La nature de l'UE",
  "Identité · Les objectifs",
  "Identité · Les valeurs",
  "Identité · L'appartenance & citoyenneté"
];

window.REPERTOIRE = [

/* ============ INTRODUCTION ============ */
/* --- Des Communautés à l'Union --- */
{t:"tr", th:"Intro · Des Communautés à l'Union", r:"Congrès de La Haye (1948)", m:`Affirme la volonté politique d'unir l'Europe ; jalon de la coopération européenne d'après-guerre.`},
{t:"tr", th:"Intro · Des Communautés à l'Union", r:"Conseil de l'Europe (1949)", m:`Première organisation paneuropéenne ; coopération politique sans transfert réel de souveraineté.`},
{t:"tr", th:"Intro · Des Communautés à l'Union", r:"Déclaration Schuman (9 mai 1950)", m:`Robert Schuman propose de mettre en commun la production franco-allemande de charbon et d'acier pour rendre la guerre « matériellement impossible ».`},
{t:"tr", th:"Intro · Des Communautés à l'Union", r:"Traité de Paris (1951)", m:`Fonde la Communauté européenne du charbon et de l'acier (CECA), première organisation supranationale, entre six États.`},
{t:"tr", th:"Intro · Des Communautés à l'Union", r:"Communauté européenne de défense (CED)", m:`Projet d'armée européenne signé en 1952, rejeté par l'Assemblée nationale française en 1954 ; échec de l'intégration politique au profit de l'économique.`},
{t:"tr", th:"Intro · Des Communautés à l'Union", r:"Traités de Rome (1957)", m:`Créent la Communauté économique européenne (CEE, marché commun) et l'Euratom (énergie nucléaire civile).`},
{t:"tr", th:"Intro · Des Communautés à l'Union", r:"Acte unique européen (1986)", m:`Relance l'intégration : objectif du marché intérieur unique pour 1992, extension du vote à la majorité qualifiée, renforcement du Parlement.`},
{t:"tr", th:"Intro · Des Communautés à l'Union", r:"Traité de Maastricht (1992)", m:`Crée l'Union européenne (trois piliers), lance l'Union économique et monétaire (euro, BCE) et instaure la citoyenneté européenne.`},
{t:"tr", th:"Intro · Des Communautés à l'Union", r:"Traité d'Amsterdam (1997)", m:`Communautarise une partie des visas/asile/immigration, développe la PESC, étend la codécision, insère le principe d'ouverture et la procédure de sanction (art. 7).`},
{t:"tr", th:"Intro · Des Communautés à l'Union", r:"Traité de Nice (2001)", m:`Réforme la composition de la Commission, la pondération des voix et la majorité qualifiée pour préparer l'élargissement à 25+ ; ajoute le volet préventif de l'art. 7.`},
{t:"tr", th:"Intro · Des Communautés à l'Union", r:"Traité établissant une Constitution pour l'Europe (2004)", m:`Tente d'unifier l'architecture des traités ; échoue après les référendums négatifs en France et aux Pays-Bas (2005).`},
{t:"tr", th:"Intro · Des Communautés à l'Union", r:"Traité de Lisbonne (2007)", m:`Supprime les piliers, crée le président du Conseil européen et le haut représentant, généralise la majorité qualifiée, donne valeur contraignante à la Charte.`},

/* --- Les élargissements --- */
{t:"tr", th:"Intro · Les élargissements", r:"Premier élargissement (1973)", m:`Adhésion du Royaume-Uni, de l'Irlande et du Danemark : la Communauté passe de 6 à 9 membres (élargissement essentiellement économique).`},
{t:"tr", th:"Intro · Les élargissements", r:"Élargissement méridional (1981–1986)", m:`Grèce (1981), puis Espagne et Portugal (1986) : l'Europe des Douze ; dimension d'ancrage démocratique des anciennes dictatures du Sud.`},
{t:"tr", th:"Intro · Les élargissements", r:"Élargissement de 1995", m:`Adhésion de l'Autriche, de la Finlande et de la Suède : l'Europe des Quinze.`},
{t:"tr", th:"Intro · Les élargissements", r:"Grand élargissement (2004)", m:`Dix pays : Pologne, Hongrie, Tchéquie, Slovaquie, Slovénie, Estonie, Lettonie, Lituanie, Chypre, Malte. « Réunification » du continent.`},
{t:"tr", th:"Intro · Les élargissements", r:"Élargissement de 2007", m:`Adhésion de la Bulgarie et de la Roumanie.`},
{t:"tr", th:"Intro · Les élargissements", r:"Élargissement de 2013", m:`Adhésion de la Croatie : l'Union passe à 28 États membres.`},

/* ============ PARTIE 1 — SYSTÈME INSTITUTIONNEL ============ */
/* --- Compétences · Dévolution & classification --- */
{t:"art", th:"Compétences · Dévolution & classification", r:"Article 5 §2 TUE", m:`Principe d'attribution des compétences : l'Union n'agit que dans les domaines que les États lui ont expressément confiés. « Pas de compétence sans attribution. »`},
{t:"art", th:"Compétences · Dévolution & classification", r:"Article 352 TFUE", m:`Clause de flexibilité : action nécessaire à un objectif des traités, à défaut de base juridique spécifique, sous une procédure renforcée (unanimité du Conseil, approbation du Parlement).`},
{t:"art", th:"Compétences · Dévolution & classification", r:"Article 3 TFUE", m:`Compétences exclusives de l'Union : union douanière, règles de concurrence, politique commerciale commune, politique monétaire (zone euro), conservation des ressources biologiques de la mer.`},
{t:"art", th:"Compétences · Dévolution & classification", r:"Article 4 TFUE", m:`Compétences partagées : marché intérieur, environnement, transports, énergie, agriculture et pêche, espace de liberté, de sécurité et de justice (principe de préemption).`},
{t:"art", th:"Compétences · Dévolution & classification", r:"Article 6 TFUE", m:`Compétences d'appui / complémentaires : culture, santé publique, éducation, tourisme, protection civile, industrie (l'UE soutient sans harmoniser).`},
{t:"jur", th:"Compétences · Dévolution & classification", r:"CJCE, 31 mars 1971, AETR", m:`Consacre la théorie des compétences implicites : l'Union peut disposer de compétences externes accessoires nécessaires à l'exercice effectif d'une compétence attribuée.`},

/* --- Compétences · Exercice & coopération renforcée --- */
{t:"art", th:"Compétences · Exercice & coopération renforcée", r:"Article 5 §3 TUE", m:`Principe de subsidiarité : condition d'opportunité (hors compétence exclusive), l'Union n'agit que si les objectifs sont mieux réalisés à son niveau.`},
{t:"art", th:"Compétences · Exercice & coopération renforcée", r:"Article 5 §4 TUE", m:`Principe de proportionnalité : condition d'intensité, l'action de l'Union n'excède pas ce qui est nécessaire pour atteindre les objectifs des traités.`},
{t:"art", th:"Compétences · Exercice & coopération renforcée", r:"Article 20 TUE", m:`Consacre la coopération renforcée (avec les art. 326 à 334 TFUE) : un groupe d'au moins 9 États peut avancer dans un domaine, le mécanisme restant ouvert aux autres.`},

/* --- Institutions · Le paysage institutionnel --- */
{t:"art", th:"Institutions · Le paysage institutionnel", r:"Article 15 TUE", m:`Le Conseil européen constitue l'instance de direction politique de l'Union : il fixe les orientations et priorités politiques générales mais ne participe pas à la fonction législative.`},
{t:"art", th:"Institutions · Le paysage institutionnel", r:"Article 15 §2 TUE", m:`Composition du Conseil européen : chefs d'État ou de gouvernement des États membres, son président et le président de la Commission (le Haut représentant participe à ses travaux).`},
{t:"art", th:"Institutions · Le paysage institutionnel", r:"Article 16 TUE", m:`Le Conseil de l'UE est composé d'un représentant de chaque État membre au niveau ministériel, habilité à engager son gouvernement et à exercer le droit de vote.`},
{t:"art", th:"Institutions · Le paysage institutionnel", r:"Article 17 §1 TUE", m:`Consacre les trois fonctions de la Commission : initiative (quasi-monopole), « gardienne des traités » et exécution.`},
{t:"art", th:"Institutions · Le paysage institutionnel", r:"Article 19 TUE", m:`La Cour de justice de l'Union européenne assure le respect du droit dans l'interprétation et l'application des traités ; consacre l'unité de l'institution.`},
{t:"art", th:"Institutions · Le paysage institutionnel", r:"Articles 253, 254 et 255 TFUE", m:`Nomination des juges de la CJUE par les gouvernements après consultation d'un Comité (art. 255) ; garanties de compétence et d'indépendance.`},
{t:"art", th:"Institutions · Le paysage institutionnel", r:"Article 256 TFUE", m:`Base juridique du Tribunal (ex-Tribunal de première instance).`},

/* --- Institutions · Les principes directeurs --- */
{t:"art", th:"Institutions · Les principes directeurs", r:"Article 13 TUE", m:`Cadre institutionnel de l'Union : « chaque institution agit dans les limites des attributions qui lui sont conférées dans les traités ». Fondement de l'équilibre institutionnel.`},
{t:"art", th:"Institutions · Les principes directeurs", r:"Article 13 §2 TUE", m:`Traduit, selon une jurisprudence constante, le principe de l'équilibre institutionnel : chaque institution exerce ses compétences dans le respect de celles des autres.`},
{t:"art", th:"Institutions · Les principes directeurs", r:"Article 4 §3 TUE", m:`Principe de coopération loyale : obligation réciproque de collaboration entre l'Union et les États (et entre institutions). Les États prennent toutes mesures utiles et s'abstiennent de compromettre les objectifs de l'Union.`},
{t:"art", th:"Institutions · Les principes directeurs", r:"Article 5 CEE (devenu art. 4 §3 TUE)", m:`Fondement historique du principe de coopération loyale, généralisé en principe général du droit.`},
{t:"art", th:"Institutions · Les principes directeurs", r:"Article 295 TFUE", m:`Consacre le mécanisme de l'accord interinstitutionnel, concrétisation de la coopération loyale entre institutions.`},
{t:"art", th:"Institutions · Les principes directeurs", r:"Article 11 §2 TUE", m:`Les institutions entretiennent un dialogue ouvert, transparent et régulier avec les associations représentatives et la société civile (ajout du traité de Lisbonne ; transparence).`},
{t:"art", th:"Institutions · Les principes directeurs", r:"Article 15 §1 TFUE", m:`Consacre le « principe d'ouverture » dans le fonctionnement des institutions.`},
{t:"art", th:"Institutions · Les principes directeurs", r:"Article 15 §2 TFUE", m:`Publicité de l'accès aux travaux du Conseil agissant en qualité de législateur.`},
{t:"art", th:"Institutions · Les principes directeurs", r:"Article 15 §3 TFUE", m:`Droit d'accès aux documents des institutions, organes et organismes de l'Union, quel que soit leur support.`},
{t:"art", th:"Institutions · Les principes directeurs", r:"Article 16 §8 TUE", m:`Publicité des travaux du Conseil lorsqu'il délibère et vote sur un acte législatif (clarification apportée par le traité de Lisbonne).`},
{t:"art", th:"Institutions · Les principes directeurs", r:"Articles 41 et 42 de la Charte des droits fondamentaux de l'UE", m:`Droit à une bonne administration (art. 41) et droit d'accès aux documents (art. 42) ; renforcent la transparence.`},
{t:"art", th:"Institutions · Les principes directeurs", r:"Article 255 TCE", m:`Consacre comme droit subjectif l'accès aux documents du Parlement, du Conseil et de la Commission.`},
{t:"art", th:"Institutions · Les principes directeurs", r:"Règlement n°1049/2001", m:`Organise l'accès du public aux documents du Parlement, du Conseil et de la Commission.`},
{t:"art", th:"Institutions · Les principes directeurs", r:"Accord interinstitutionnel du 20 mai 2021", m:`Entre le Parlement, le Conseil et la Commission : instaure un registre de transparence obligatoire (encadrement du lobbying).`},
{t:"jur", th:"Institutions · Les principes directeurs", r:"CJCE, 13 juin 1958, Méroni c/ Haute Autorité (9/56)", m:`Dégage le principe général d'« équilibre des pouvoirs, caractéristique de la structure institutionnelle » ; encadre les délégations de compétences.`},
{t:"jur", th:"Institutions · Les principes directeurs", r:"CJCE, 22 mai 1990, Parlement c/ Conseil (C-70/88)", m:`Le principe de l'équilibre institutionnel implique que chaque institution exerce ses compétences dans le respect de celles des autres.`},
{t:"jur", th:"Institutions · Les principes directeurs", r:"CJUE, 19 avril 2012, Artegodan c/ Commission (C-221/10 P)", m:`Sens fonctionnel de l'équilibre : le système de répartition des compétences a pour but d'assurer le respect de l'équilibre institutionnel prévu par les traités.`},
{t:"jur", th:"Institutions · Les principes directeurs", r:"CJCE, 29 octobre 1980, Roquette et Maïzena c/ Conseil (C-138/79 et C-139/79)", m:`Fonction démocratique de l'équilibre : la consultation du Parlement reflète un principe démocratique fondamental (participation des peuples via une assemblée représentative).`},
{t:"jur", th:"Institutions · Les principes directeurs", r:"CJCE, 27 septembre 1988, Grèce c/ Conseil (204/86)", m:`Affirmation du principe de coopération loyale, appliqué aussi bien dans les relations interinstitutionnelles que dans les domaines budgétaire et de la procédure législative.`},
{t:"jur", th:"Institutions · Les principes directeurs", r:"CJCE, 24 janvier 2008, Lianakis (C-532/06)", m:`Illustre la qualification de la transparence comme « obligation ».`},
{t:"jur", th:"Institutions · Les principes directeurs", r:"CJCE, 23 décembre 2009, Serrantoni (C-376/08)", m:`Illustre la qualification de la transparence comme « principe ».`},

/* ============ PARTIE 2 — SYSTÈME JURIDIQUE ============ */
/* --- Sources · Le droit primaire --- */
{t:"art", th:"Sources · Le droit primaire", r:"Article 48 TUE", m:`Procédure de révision des traités, unifiée et dominée par une logique intergouvernementale.`},
{t:"art", th:"Sources · Le droit primaire", r:"Article 48 §6 et §7 TUE", m:`Prévoit des procédures de révision simplifiées ou allégées des traités.`},
{t:"jur", th:"Sources · Le droit primaire", r:"CJUE, Ass. pl., 10 décembre 2018, Wightman (C-621/18)", m:`Sur la nature du droit primaire et la révocabilité unilatérale de la notification de retrait (art. 50 TUE).`},

/* --- Sources · Le droit dérivé --- */
{t:"art", th:"Sources · Le droit dérivé", r:"Article 288 TFUE", m:`Nomenclature officielle des actes de droit dérivé : règlement, directive, décision (obligatoires), recommandations et avis (non contraignants).`},
{t:"art", th:"Sources · Le droit dérivé", r:"Article 288 §4 TFUE", m:`La décision est obligatoire dans tous ses éléments ; lorsqu'elle désigne des destinataires, elle n'est obligatoire que pour ceux-ci.`},
{t:"art", th:"Sources · Le droit dérivé", r:"Article 288 al. 5 TFUE", m:`Les recommandations et les avis « ne lient pas » : ils sont dépourvus de force obligatoire (droit souple).`},
{t:"jur", th:"Sources · Le droit dérivé", r:"CJCE, 14 décembre 1962, Fédération nationale de la boucherie (19-22/62)", m:`Caractères abstrait et général du règlement (portée générale).`},
{t:"jur", th:"Sources · Le droit dérivé", r:"CJCE, 21 janvier 1999, France c/ Comafrica (C-73/97)", m:`Reconnaît au règlement une véritable « fonction législative ».`},
{t:"jur", th:"Sources · Le droit dérivé", r:"CJCE, 17 décembre 1970, Köster (25/70)", m:`Distinction entre « règlements de base » et « règlements d'exécution ».`},
{t:"jur", th:"Sources · Le droit dérivé", r:"CJCE, 7 février 1973, Commission c/ Italie (39/72)", m:`Le caractère obligatoire du règlement interdit toute application incomplète ; sont contraires au traité les modalités faisant obstacle à son effet direct.`},
{t:"jur", th:"Sources · Le droit dérivé", r:"CJCE, 30 novembre 1972, Granaria (18/72)", m:`Interdiction d'une application sélective du règlement.`},
{t:"jur", th:"Sources · Le droit dérivé", r:"CJCE, 14 décembre 1971, Politi (43/71)", m:`Effet direct du règlement, qui produit des effets immédiats en raison de sa nature et de sa fonction dans le système des sources.`},
{t:"jur", th:"Sources · Le droit dérivé", r:"CJCE, 12 décembre 1974, Walrave (36/74)", m:`L'effet direct du règlement est aussi bien vertical qu'horizontal.`},
{t:"jur", th:"Sources · Le droit dérivé", r:"CJCE, 23 novembre 1977, Enka (38/77)", m:`La directive lie les États quant au résultat à atteindre tout en leur laissant le choix de la forme et des moyens.`},
{t:"jur", th:"Sources · Le droit dérivé", r:"CJCE, 22 février 1984, Kloppenburg (70/83)", m:`La directive n'a pas, en principe, de portée générale.`},
{t:"jur", th:"Sources · Le droit dérivé", r:"CJCE, 10 avril 1984, Von Colson (14/83)", m:`Obligation de résultat de la directive et obligation d'interprétation conforme du droit national.`},
{t:"jur", th:"Sources · Le droit dérivé", r:"CJCE, 19 novembre 1991, Francovich (C-6 et C-9/90)", m:`Consacre la responsabilité de l'État pour les dommages causés aux particuliers par le défaut de transposition d'une directive.`},
{t:"jur", th:"Sources · Le droit dérivé", r:"CJCE, 18 décembre 1997, Inter-Environnement Wallonie (C-129/96)", m:`Obligation de résultat : pendant le délai de transposition, l'État doit s'abstenir de compromettre le résultat prescrit par la directive.`},
{t:"jur", th:"Sources · Le droit dérivé", r:"CJCE, 8 avril 1976, Royer (48/75)", m:`La directive accorde une liberté relative sur la forme et les moyens de transposition.`},
{t:"jur", th:"Sources · Le droit dérivé", r:"CJCE, 13 décembre 1989, Grimaldi (322/88)", m:`Les recommandations, sans être contraignantes, doivent être prises en considération par les juges nationaux lorsqu'elles éclairent l'interprétation du droit.`},
{t:"jur", th:"Sources · Le droit dérivé", r:"CJUE, 20 février 2018, Belgique c/ Commission (C-16/16)", m:`Position de l'avocat général M. Bobek, plus audacieuse que la Cour, sur la justiciabilité des recommandations.`},

/* --- Sources · Les sources non-écrites (PGD) --- */
{t:"jur", th:"Sources · Les sources non-écrites (PGD)", r:"CJCE, 13 novembre 1964, Commission c/ Luxembourg et Belgique (90 et 91/63)", m:`Source internationale des PGD, largement écartée : le principe de réciprocité du droit international est incompatible avec l'ordre juridique de l'Union.`},
{t:"jur", th:"Sources · Les sources non-écrites (PGD)", r:"CJCE, 18 juin 1991, ERT (260/88)", m:`Les PGD s'imposent pour tout acte d'exécution du droit de l'Union / pour les situations relevant de son champ d'application.`},
{t:"jur", th:"Sources · Les sources non-écrites (PGD)", r:"CJCE, 10 juillet 2003, Booker Aquaculture (C-20 et C-64/00)", m:`Les PGD s'imposent aux États lors de la « mise en œuvre » du droit de l'Union.`},
{t:"jur", th:"Sources · Les sources non-écrites (PGD)", r:"CJCE, 12 juillet 1957, Algéra (7/56)", m:`La Cour affirme son devoir de s'inspirer des règles reconnues par les législations, la doctrine et la jurisprudence des États membres (source nationale des PGD).`},
{t:"jur", th:"Sources · Les sources non-écrites (PGD)", r:"CJCE, 21 juin 1958, Hauts fourneaux et aciéries belges (8/57)", m:`Formule des « principes généraux généralement admis dans le droit des États membres ».`},
{t:"jur", th:"Sources · Les sources non-écrites (PGD)", r:"CJCE, 15 octobre 2009, Audiolux (C-101/08)", m:`Conditions pour dégager un PGD à partir du droit dérivé : disposition contraignante, substance identifiable et portée générale.`},
{t:"jur", th:"Sources · Les sources non-écrites (PGD)", r:"CJCE, 12 juillet 2001, Jippes (C-189/01)", m:`Pour être reconnu, un PGD doit entrer dans le champ des objectifs des traités.`},
{t:"jur", th:"Sources · Les sources non-écrites (PGD)", r:"CJCE, 10 mars 2005, Espagne c/ Conseil (C-342/03)", m:`Le contenu d'un PGD doit être suffisamment déterminé : une simple « considération à caractère politique » (ou un principe purement « programmatique ») ne suffit pas.`},
{t:"jur", th:"Sources · Les sources non-écrites (PGD)", r:"CJCE, 3 septembre 2008, Kadi (C-402/05 P et C-415/05 P)", m:`La Cour assimile les principes généraux au droit primaire et contrôle la légalité des actes au regard des droits fondamentaux.`},
{t:"jur", th:"Sources · Les sources non-écrites (PGD)", r:"CJUE, 19 avril 2016, Dansk Industri (C-441/14)", m:`Reconnaît l'effet direct des PGD (principe de non-discrimination en raison de l'âge).`},

/* --- Portée · La primauté --- */
{t:"art", th:"Portée · La primauté", r:"Article 4 §2 TUE", m:`L'Union respecte l'égalité des États membres devant les traités ainsi que leur identité nationale, inhérente à leurs structures fondamentales politiques et constitutionnelles. Limite « raisonnée » à la primauté.`},
{t:"art", th:"Portée · La primauté", r:"Article 18 TFUE", m:`Principe de non-discrimination en raison de la nationalité (ex-article 7 CEE) ; mobilisé par la Cour comme argument textuel de la primauté.`},
{t:"art", th:"Portée · La primauté", r:"Article 351 §2 TFUE", m:`Seule exception à la primauté : les traités conclus par les États avec des États tiers antérieurement à l'entrée en vigueur des traités européens (hypothèse vouée à disparaître).`},
{t:"art", th:"Portée · La primauté", r:"Article I-6 (traité constitutionnel, 2004)", m:`Affirmait expressément la primauté du droit de l'Union ; abandonné avec l'échec du traité constitutionnel (non repris par Lisbonne).`},
{t:"jur", th:"Portée · La primauté", r:"CJCE, 15 juillet 1964, Costa c/ Enel (6/64)", m:`Consacre la primauté : le droit communautaire constitue « un ordre juridique propre, intégré au système juridique des États membres » et prévaut sur le droit national, même postérieur.`},
{t:"jur", th:"Portée · La primauté", r:"CJCE, 10 octobre 1973, Variola (34/73)", m:`Affirme le caractère « fondamental » — voire existentiel — du principe de primauté : la règle commune doit prévaloir sous peine de cesser d'être commune.`},
{t:"jur", th:"Portée · La primauté", r:"CJCE, 9 mars 1978, Simmenthal (106/77)", m:`Le juge national doit laisser inappliquée toute disposition nationale incompatible, sans attendre son abrogation.`},
{t:"jur", th:"Portée · La primauté", r:"CJCE, 19 juin 1990, Factortame (C-213/89)", m:`Le juge national peut suspendre l'application d'une loi nationale contraire au droit de l'Union, même si le droit interne le lui interdit.`},
{t:"jur", th:"Portée · La primauté", r:"CJUE, 8 mars 2011, avis 1/09", m:`Les juridictions de tous les États membres sont érigées en « juge de droit commun » du droit de l'Union.`},
{t:"jur", th:"Portée · La primauté", r:"CJUE, 8 septembre 2010, Winner Wetten (C-409/06)", m:`Formule de synthèse de la portée interne ; seule la Cour peut, pour des considérations impérieuses de sécurité juridique, suspendre provisoirement l'effet d'éviction du droit de l'Union.`},
{t:"jur", th:"Portée · La primauté", r:"CJUE, 26 février 2012, Melloni (C-399/11)", m:`La primauté joue même contre les normes constitutionnelles ; un standard national plus protecteur ne doit pas compromettre la primauté, l'unité et l'efficacité du droit de l'Union.`},
{t:"jur", th:"Portée · La primauté", r:"CJCE, 2 juillet 1996, Commission c/ Luxembourg (C-473/93)", m:`La sauvegarde de l'identité nationale des États membres constitue un but légitime respecté par l'ordre juridique communautaire.`},
{t:"jur", th:"Portée · La primauté", r:"CJUE, 22 décembre 2010, Sayn-Wittgenstein (C-208/09)", m:`Lorsqu'un État invoque son identité constitutionnelle, la Cour applique le principe de proportionnalité.`},
{t:"jur", th:"Portée · La primauté", r:"CJUE, 5 avril 2016, Aranyosi et Căldăraru (C-404/15 et C-659/15)", m:`Dans des « situations exceptionnelles » (défaillances systémiques), il est permis de ne pas exécuter un mandat d'arrêt européen ; double contrôle in abstracto / in concreto.`},

/* --- Portée · L'effet direct --- */
{t:"art", th:"Portée · L'effet direct", r:"Article 101 TFUE", m:`Interdiction des ententes ; se prête par nature à un effet direct horizontal (entre particuliers).`},
{t:"art", th:"Portée · L'effet direct", r:"Article 102 TFUE", m:`Interdiction des abus de position dominante ; effet direct horizontal.`},
{t:"art", th:"Portée · L'effet direct", r:"Article 157 TFUE", m:`Égalité des rémunérations entre hommes et femmes ; effet direct horizontal (ex-article 119 CEE, arrêt Defrenne).`},
{t:"art", th:"Portée · L'effet direct", r:"Article 12 CEE (devenu art. 30 TFUE)", m:`Interdiction d'introduire de nouveaux droits de douane ; son effet direct est reconnu dans l'arrêt Van Gend en Loos.`},
{t:"art", th:"Portée · L'effet direct", r:"Article 52 CEE (devenu art. 49 TFUE)", m:`Liberté d'établissement / règle du traitement national ; effet direct reconnu dans l'arrêt Reyners.`},
{t:"art", th:"Portée · L'effet direct", r:"Article 51 de la Charte des droits fondamentaux de l'UE", m:`Les dispositions de la Charte s'adressent aux États membres uniquement lorsqu'ils « mettent en œuvre » le droit de l'Union.`},
{t:"art", th:"Portée · L'effet direct", r:"Article 21 §1 de la Charte des droits fondamentaux de l'UE", m:`Principe de non-discrimination ; peut être invoqué directement par un particulier (arrêt Kucukdeveci).`},
{t:"art", th:"Portée · L'effet direct", r:"Article 27 de la Charte des droits fondamentaux de l'UE", m:`Droit à l'information et à la consultation des travailleurs ; ne confère pas, à lui seul, de droit subjectif invocable (arrêt AMS).`},
{t:"jur", th:"Portée · L'effet direct", r:"CPJI, 3 février 1928, Compétence des tribunaux de Dantzig", m:`Un accord international ne crée pas, en principe, de droits pour les particuliers, sauf intention contraire des parties et stipulations self-executing.`},
{t:"jur", th:"Portée · L'effet direct", r:"CJCE, 5 février 1963, Van Gend en Loos (26/62)", m:`Consacre l'effet direct : l'Union est un nouvel ordre juridique dont les sujets ne sont pas seulement les États mais aussi les particuliers (interdiction claire et inconditionnelle de l'art. 12 CEE).`},
{t:"jur", th:"Portée · L'effet direct", r:"CJCE, 1er juin 1974, Reyners (2/74)", m:`La règle du traitement national (établissement) est susceptible d'être invoquée directement et prescrit une obligation de résultat précise.`},
{t:"jur", th:"Portée · L'effet direct", r:"CJCE, 17 septembre 2002, Baumbast (C-413/99)", m:`Le droit de séjour des citoyens de l'Union est reconnu d'effet direct (disposition claire et précise) — appréciation susceptible d'évoluer dans le temps.`},
{t:"jur", th:"Portée · L'effet direct", r:"CJCE, 8 avril 1976, Defrenne c/ SABENA (43/75)", m:`Effet direct horizontal : un particulier peut invoquer le droit à l'égalité des rémunérations (art. 157 TFUE) à l'encontre d'un autre particulier.`},
{t:"jur", th:"Portée · L'effet direct", r:"CJCE, 4 décembre 1974, Van Duyn (41/74)", m:`Reconnaît l'effet direct (vertical) des directives ; admet aussi, à titre exceptionnel, un principe de droit international public.`},
{t:"jur", th:"Portée · L'effet direct", r:"CJCE, 5 avril 1979, Ratti (148/78)", m:`À l'expiration du délai de transposition, en cas d'inexécution, le particulier peut se prévaloir de la directive inconditionnelle et précise contre l'État.`},
{t:"jur", th:"Portée · L'effet direct", r:"CJCE, 26 février 1986, Marshall I (152/84)", m:`L'effet direct des directives est vertical (contre l'État), non horizontal (pas entre particuliers).`},
{t:"jur", th:"Portée · L'effet direct", r:"CJUE, Gr. ch., 10 octobre 2017, Farrell (C-413/15)", m:`Notion large d'« État » contre lequel l'effet direct vertical d'une directive peut jouer.`},
{t:"jur", th:"Portée · L'effet direct", r:"CJCE, 11 juin 1987, Pretore di Salò (14/86)", m:`Pas d'effet direct « inverse » : l'État ne peut invoquer une directive non transposée à l'encontre d'un particulier.`},
{t:"jur", th:"Portée · L'effet direct", r:"CE, 30 octobre 2009, Perreux", m:`Le Conseil d'État français reconnaît l'effet direct des dispositions inconditionnelles et précises d'une directive non transposée dans le délai.`},
{t:"jur", th:"Portée · L'effet direct", r:"CJUE, Gr. ch., 15 janvier 2014, AMS (C-176/12)", m:`L'art. 27 de la Charte des droits fondamentaux ne confère pas, à lui seul, de droit subjectif invocable (conception restrictive de l'effet direct).`},
{t:"jur", th:"Portée · L'effet direct", r:"CJUE, Gr. ch., 19 janvier 2010, Kucukdeveci (C-555/07)", m:`Le principe de non-discrimination (art. 21 §1 de la Charte des droits fondamentaux) peut être invoqué directement par un particulier.`},
{t:"jur", th:"Portée · L'effet direct", r:"CJCE, 29 mai 1997, Kremzow (C-299/95)", m:`Une mesure nationale ne peut être contrôlée au regard des PGD si elle concerne une situation hors du champ d'application du droit de l'Union.`},
{t:"jur", th:"Portée · L'effet direct", r:"CJUE, Gr. ch., 26 février 2013, Åkerberg Fransson (C-617/10)", m:`Les droits fondamentaux (Charte) ont vocation à s'appliquer dans toutes les situations régies par le droit de l'Union, mais pas en dehors.`},
{t:"jur", th:"Portée · L'effet direct", r:"CJUE, 22 janvier 2020, Baldonedo Martin (C-177/18)", m:`La « mise en œuvre » du droit de l'Union suppose un lien de rattachement dépassant le simple voisinage des matières.`},
{t:"jur", th:"Portée · L'effet direct", r:"CJUE, 30 avril 2020, D. Z. c/ Blue Air (C-584/18)", m:`Une décision adressée à un État membre est d'effet direct lorsqu'elle lui impose une obligation inconditionnelle, suffisamment nette et précise.`},

/* ============ CONCLUSION — IDENTITÉ DE L'UNION ============ */
/* --- Identité · La nature de l'UE --- */
{t:"art", th:"Identité · La nature de l'UE", r:"Article 4 TUE", m:`« Définition opérationnelle » de l'UE : volet structurel (principe d'attribution, égalité des États, respect de l'identité nationale) et volet fonctionnel (respect des fonctions essentielles des États, coopération loyale).`},
{t:"jur", th:"Identité · La nature de l'UE", r:"Délibération 1/78 (CEEA, 14 novembre 1978)", m:`Origine de l'expression « pouvoir public commun » employée pour qualifier l'Union (pouvoir indépendant des États car exercé en commun).`},
{t:"jur", th:"Identité · La nature de l'UE", r:"Avis 1/91 (CJCE, 14 décembre 1991, accord EEE)", m:`Le traité CEE est la « charte constitutionnelle d'une communauté de droit » ; caractéristiques essentielles = primauté et effet direct.`},
{t:"jur", th:"Identité · La nature de l'UE", r:"Avis 2/13 (CJUE, 18 décembre 2014, adhésion à la CEDH)", m:`Refuse le projet d'adhésion de l'Union à la CEDH ; met en avant les « caractéristiques essentielles » du droit de l'Union — autonomie, primauté, effet direct — et la prémisse des valeurs communes partagées.`},

/* --- Identité · Les objectifs --- */
{t:"art", th:"Identité · Les objectifs", r:"Article 3 TUE", m:`Fixe les buts/objectifs de l'Union (paix, valeurs, bien-être des peuples, développement durable, marché intérieur).`},
{t:"art", th:"Identité · Les objectifs", r:"Article 3 §1 TUE", m:`L'objectif de développement durable a pour préalable « la paix » et pour horizon « le bien-être des peuples ».`},
{t:"art", th:"Identité · Les objectifs", r:"Article 36 TFUE", m:`Autorise les États à déroger à la libre circulation des marchandises au nom d'objectifs d'intérêt général (illustration de l'équilibre du développement durable).`},
{t:"art", th:"Identité · Les objectifs", r:"Article 45 TFUE", m:`Libre circulation des travailleurs ; admet des dérogations au nom d'objectifs d'intérêt général.`},
{t:"art", th:"Identité · Les objectifs", r:"Article 51 §2 de la Charte des droits fondamentaux de l'UE", m:`La Charte n'étend pas le champ d'application du droit de l'Union ni ne crée de compétence nouvelle (pas de titre de compétence en matière de droits fondamentaux).`},
{t:"jur", th:"Identité · Les objectifs", r:"CJCE, 10 février 2000, Lili Schröder (C-50/96)", m:`Prévalence des objectifs sociaux de la Communauté sur les objectifs économiques (égalité de rémunération, art. 119 CEE).`},
{t:"jur", th:"Identité · Les objectifs", r:"CJCE, 11 et 18 décembre 2007, Viking (C-438/05) et Laval (C-341/05)", m:`La Communauté a une finalité non seulement économique mais aussi sociale : les libertés de circulation doivent être mises en balance avec les objectifs de la politique sociale.`},
{t:"jur", th:"Identité · Les objectifs", r:"Avis 2/94 (CJCE, 28 mars 1996, adhésion à la CEDH)", m:`L'Union ne dispose pas d'un titre de compétence général pour adhérer à la CEDH / édicter des règles en matière de droits fondamentaux.`},

/* --- Identité · Les valeurs --- */
{t:"art", th:"Identité · Les valeurs", r:"Article 2 TUE", m:`Énonce les valeurs fondatrices de l'Union (dignité humaine, liberté, démocratie, égalité, État de droit, droits de l'homme et des minorités). 1re phrase = condition d'admission (art. 49) dont la violation peut entraîner des sanctions (art. 7) ; 2de phrase = objectifs éthiques décrivant le « modèle de société ».`},
{t:"art", th:"Identité · Les valeurs", r:"Article 49 §1 TUE", m:`Les valeurs de l'art. 2 TUE constituent une condition d'admission des nouveaux membres.`},
{t:"jur", th:"Identité · Les valeurs", r:"CJCE, 23 avril 1986, Les Verts (294/83)", m:`La CEE est une « Communauté de droit » : ni les États ni les institutions n'échappent au contrôle de conformité de leurs actes à la charte constitutionnelle qu'est le traité.`},
{t:"jur", th:"Identité · Les valeurs", r:"CJUE, Ass. pl., 16 février 2022, Pologne et Hongrie c/ Parlement et Conseil (C-156/21 et C-157/21)", m:`Les valeurs de l'art. 2 TUE « définissent l'identité même de l'Union » ; leur respect, notamment l'État de droit, est une obligation de résultat découlant directement de l'appartenance à l'Union.`},

/* --- Identité · L'appartenance & citoyenneté --- */
{t:"art", th:"Identité · L'appartenance & citoyenneté", r:"Article 49 TUE", m:`Conditions d'adhésion : qualité d'État au sens du droit international, caractère « européen » de l'État, respect des valeurs de l'art. 2 et engagement de les promouvoir.`},
{t:"tr", th:"Identité · L'appartenance & citoyenneté", r:"Critères de Copenhague (1993)", m:`Définis par le Conseil européen : critère politique (démocratie, État de droit, droits de l'homme, minorités), critère économique (économie de marché viable) et acquis communautaire.`},
{t:"tr", th:"Identité · L'appartenance & citoyenneté", r:"Conseil européen de Madrid (1995)", m:`Confirme les critères de Copenhague en ajoutant la nécessité d'une adaptation des structures administratives des pays candidats.`},
{t:"tr", th:"Identité · L'appartenance & citoyenneté", r:"Consensus renouvelé sur l'élargissement (2006)", m:`Insiste sur la capacité d'intégration de l'Union et l'articulation entre élargissement et approfondissement.`},
{t:"art", th:"Identité · L'appartenance & citoyenneté", r:"Article 50 TUE", m:`Droit de retrait volontaire et unilatéral de l'Union (innovation du traité constitutionnel, reprise par Lisbonne ; base juridique du Brexit).`},
{t:"tr", th:"Identité · L'appartenance & citoyenneté", r:"Brexit (référendum 2016 — sortie le 31 janvier 2020)", m:`Première mise en œuvre de l'art. 50 TUE ; le Royaume-Uni quitte l'Union, illustrant que l'appartenance est un « choix positif permanent ».`},
{t:"art", th:"Identité · L'appartenance & citoyenneté", r:"Article 7 TUE", m:`Procédure de suspension de certains droits liés à l'appartenance en cas de violation grave et persistante des valeurs de l'art. 2 (volet préventif ajouté par le traité de Nice).`},
{t:"jur", th:"Identité · L'appartenance & citoyenneté", r:"CJUE, 9 novembre 2023, Staatsanwaltschaft Aachen (C-819/21)", m:`Admet la suspension de l'exécution d'un mandat d'arrêt européen lorsqu'il existe des motifs sérieux de croire que l'État d'émission viole l'État de droit.`},
{t:"art", th:"Identité · L'appartenance & citoyenneté", r:"Article 9 TUE", m:`Est citoyen de l'Union toute personne ayant la nationalité d'un État membre ; la citoyenneté de l'Union s'ajoute à la citoyenneté nationale et ne la remplace pas.`},
{t:"art", th:"Identité · L'appartenance & citoyenneté", r:"Article 20 TFUE", m:`La citoyenneté de l'Union découle automatiquement de la nationalité d'un État membre et emporte un ensemble de droits.`},
{t:"art", th:"Identité · L'appartenance & citoyenneté", r:"Article 21 TFUE", m:`Droit de circuler et de séjourner librement sur le territoire des États membres.`},
{t:"art", th:"Identité · L'appartenance & citoyenneté", r:"Article 22 TFUE", m:`Droit de vote et d'éligibilité aux élections municipales et européennes dans l'État membre de résidence.`},
{t:"art", th:"Identité · L'appartenance & citoyenneté", r:"Article 23 TFUE", m:`Droit à la protection diplomatique et consulaire dans tout État tiers où l'État de nationalité n'est pas représenté.`},
{t:"art", th:"Identité · L'appartenance & citoyenneté", r:"Article 24 TFUE", m:`Recours non juridictionnels : droit de pétition devant le Parlement, droit de saisir le Médiateur, droit de correspondre dans sa langue avec les institutions.`},
{t:"art", th:"Identité · L'appartenance & citoyenneté", r:"Directive 2004/38/CE", m:`Relative au droit des citoyens de l'Union et des membres de leur famille de circuler et de séjourner librement sur le territoire des États membres.`},
{t:"jur", th:"Identité · L'appartenance & citoyenneté", r:"CJUE, 2 mars 2010, Rottmann (C-135/08)", m:`La perte de la nationalité (et donc de la citoyenneté de l'Union) doit s'apprécier au regard du principe de proportionnalité.`},
{t:"jur", th:"Identité · L'appartenance & citoyenneté", r:"CJUE, 16 janvier 2014, Onuekwere (C-378/12)", m:`Le droit de séjour permanent contribue à la cohésion sociale et renforce le sentiment de citoyenneté de l'Union.`}

];
