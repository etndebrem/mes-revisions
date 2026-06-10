/* =====================================================================
   Données de révision — Droit de l'Union européenne
   Cours d'Alexis Husser (Université de Strasbourg), L2.

   VERSION ÉPURÉE — recentrée sur ce qui ressort des SUJETS D'EXAMEN
   (corrigé rédigé : 5 sujets, questions 1 à 4 de droit de l'UE).
   On a retiré les entrées « exhaustives » qui n'apparaissent pas dans
   les corrigés, et ajouté les références + concepts qui y reviennent.
   La version complète d'origine est conservée dans « data.original.js ».

   Chaque entrée :
     t  : type
            "concept" -> notion / concept transversal (NOUVEAU)
            "art"     -> article / texte
            "tr"      -> traité / étape historique
            "jur"     -> jurisprudence
     th : thème  -> nom du chapitre (sert au filtrage)
     r  : référence ou intitulé (recto de la flashcard)
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
  "Portée · La primauté",
  "Portée · L'effet direct",
  "Identité · La nature de l'UE",
  "Identité · Les valeurs",
  "Identité · L'appartenance & citoyenneté"
];

window.REPERTOIRE = [

/* ============ INTRODUCTION ============ */
/* --- Des Communautés à l'Union --- */
{t:"tr", th:"Intro · Des Communautés à l'Union", r:"Déclaration Schuman (9 mai 1950)", m:`Robert Schuman propose de mettre en commun la production franco-allemande de charbon et d'acier pour rendre la guerre « matériellement impossible ». Matrice de la construction : l'interdépendance des États au service de la paix.`},
{t:"tr", th:"Intro · Des Communautés à l'Union", r:"Communauté européenne de défense (CED)", m:`Projet d'armée européenne signé en 1952, rejeté par l'Assemblée nationale française en 1954 ; échec emblématique de l'intégration politique, au profit de l'intégration économique.`},
{t:"tr", th:"Intro · Des Communautés à l'Union", r:"Traités de Rome (1957)", m:`Créent la Communauté économique européenne (CEE, marché commun) et l'Euratom. Point de départ chiffré de l'intégration : « l'Europe des Six ».`},
{t:"tr", th:"Intro · Des Communautés à l'Union", r:"Acte unique européen (1986)", m:`Relance l'intégration : objectif du marché intérieur unique pour 1992, extension du vote à la majorité qualifiée, renforcement du Parlement.`},
{t:"tr", th:"Intro · Des Communautés à l'Union", r:"Traité de Maastricht (1992)", m:`Crée l'Union européenne (trois piliers), lance l'Union économique et monétaire (euro, BCE) et instaure la citoyenneté européenne.`},
{t:"tr", th:"Intro · Des Communautés à l'Union", r:"Traité de Nice (2001)", m:`Réforme la composition de la Commission, la pondération des voix et la majorité qualifiée pour préparer l'élargissement ; ajoute le volet préventif de l'art. 7 TUE.`},
{t:"tr", th:"Intro · Des Communautés à l'Union", r:"Traité établissant une Constitution pour l'Europe (2004)", m:`Tente d'unifier l'architecture des traités ; échoue après les référendums négatifs en France et aux Pays-Bas (2005). Sa primauté expressément affirmée (art. I-6) ne sera pas reprise par Lisbonne.`},
{t:"tr", th:"Intro · Des Communautés à l'Union", r:"Traité de Lisbonne (2007)", m:`Entré en vigueur le 1er décembre 2009. Supprime les piliers, crée le président du Conseil européen et le haut représentant, généralise la majorité qualifiée, et donne valeur contraignante à la Charte (art. 6 §1 TUE).`},

/* --- Les élargissements --- */
{t:"concept", th:"Intro · Les élargissements", r:"Approfondissement vs élargissement", m:`Deux logiques en tension. Approfondissement = renforcer l'intégration et réviser les traités ; élargissement = admettre de nouveaux États (art. 49 TUE). Ils ont longtemps progressé de pair (Acte unique, Maastricht, Nice, Lisbonne ont adapté les institutions), mais l'élargissement nourrit aussi un risque de dilution (hétérogénéité des intérêts, lenteur décisionnelle, tensions sur l'État de droit).`},
{t:"tr", th:"Intro · Les élargissements", r:"Premier élargissement (1973)", m:`Adhésion du Royaume-Uni, de l'Irlande et du Danemark : la Communauté passe de 6 à 9 membres (élargissement essentiellement économique).`},
{t:"tr", th:"Intro · Les élargissements", r:"Élargissement méridional (1981–1986)", m:`Grèce (1981), puis Espagne et Portugal (1986). Forte dimension d'ancrage démocratique des anciennes dictatures du Sud.`},
{t:"tr", th:"Intro · Les élargissements", r:"Élargissement de 1995", m:`Adhésion de l'Autriche, de la Finlande et de la Suède : l'Europe des Quinze.`},
{t:"tr", th:"Intro · Les élargissements", r:"Grand élargissement à l'Est (2004–2007)", m:`2004 : dix pays, surtout d'Europe centrale et orientale, + Chypre et Malte (« réunification » du continent) ; 2007 : Bulgarie et Roumanie. Après le Brexit, l'Union compte 27 États membres.`},

/* ============ PARTIE 1 — SYSTÈME INSTITUTIONNEL ============ */
/* --- Compétences · Dévolution & classification --- */
{t:"concept", th:"Compétences · Dévolution & classification", r:"Principe d'attribution", m:`« Clé de voûte » du système de compétences (art. 5 §1 et §2 TUE) : l'Union n'a pas de compétence générale, elle ne détient que ce que les États « maîtres des traités » lui ont confié. « Pas de compétence sans attribution » ; toute compétence non attribuée à l'Union appartient aux États (art. 4 §1 TUE).`},
{t:"concept", th:"Compétences · Dévolution & classification", r:"Kompetenz-Kompetenz", m:`La « compétence de la compétence » : le pouvoir de déterminer l'étendue de ses propres compétences. L'Union ne la détient pas — les États restent maîtres des traités et conservent un droit de retrait (art. 50 TUE). D'où la réserve de certaines cours constitutionnelles (Karlsruhe, PSPP, 2020), qui contestent que la CJUE soit juge de sa propre compétence.`},
{t:"concept", th:"Compétences · Dévolution & classification", r:"Glissement de compétences", m:`Extension de fait de l'action de l'Union au-delà des compétences expressément attribuées, par le jeu de la clause de flexibilité (art. 352 TFUE), des compétences implicites (AETR, 1971), de l'interprétation téléologique (effet utile) et de la préemption. Le contrôle n'étant qu'a posteriori, la protection de la souveraineté reste réelle en droit mais relative en fait.`},
{t:"art", th:"Compétences · Dévolution & classification", r:"Article 5 §2 TUE", m:`Principe d'attribution : l'Union n'agit que dans les limites des compétences que les États lui ont attribuées dans les traités, pour atteindre les objectifs que ceux-ci établissent.`},
{t:"art", th:"Compétences · Dévolution & classification", r:"Article 3 TFUE", m:`Compétences exclusives de l'Union : union douanière, règles de concurrence du marché intérieur, politique monétaire (zone euro), politique commerciale commune, conservation des ressources biologiques de la mer.`},
{t:"art", th:"Compétences · Dévolution & classification", r:"Article 4 TFUE", m:`Compétences partagées : marché intérieur, environnement, transports, énergie, agriculture et pêche, espace de liberté, de sécurité et de justice (sous réserve du jeu de la préemption).`},
{t:"art", th:"Compétences · Dévolution & classification", r:"Article 6 TFUE", m:`Compétences d'appui / complémentaires : santé, culture, éducation, tourisme, industrie, protection civile (l'Union soutient et coordonne l'action des États, sans harmoniser).`},
{t:"art", th:"Compétences · Dévolution & classification", r:"Article 352 TFUE", m:`Clause de flexibilité : permet d'agir, à défaut de base juridique spécifique, pour atteindre un objectif des traités, sous une procédure renforcée (unanimité du Conseil, approbation du Parlement européen).`},
{t:"jur", th:"Compétences · Dévolution & classification", r:"CJCE, 31 mars 1971, AETR (22/70)", m:`Consacre la théorie des compétences implicites : l'Union dispose des compétences externes accessoires nécessaires à l'exercice effectif d'une compétence interne attribuée.`},

/* --- Compétences · Exercice & coopération renforcée --- */
{t:"concept", th:"Compétences · Exercice & coopération renforcée", r:"Subsidiarité & proportionnalité (garde-fous)", m:`Encadrent l'exercice des compétences non exclusives. Subsidiarité (art. 5 §3 TUE) = condition d'opportunité : l'Union n'agit que si l'objectif est mieux atteint à son niveau. Proportionnalité (art. 5 §4 TUE) = condition d'intensité : l'action ne va pas au-delà du nécessaire. Contrôlés ex ante par les parlements nationaux (protocole n° 2) et ex post par la CJUE (art. 263 TFUE), mais d'efficacité limitée en pratique (subsidiarité rarement censurée, cf. Vodafone, 2010).`},
{t:"concept", th:"Compétences · Exercice & coopération renforcée", r:"Différenciation / Europe à plusieurs vitesses", m:`Réponse à l'hétérogénéité née des élargissements : laisser un groupe d'avant-garde avancer (coopérations renforcées, art. 20 TUE). Modèle historique : l'espace Schengen, né hors des traités puis intégré à l'acquis. Réalisations : divorce (Rome III), brevet unitaire, Parquet européen. Risque : fragmentation de l'acquis et atteinte à l'égalité des États (art. 4 §2 TUE).`},
{t:"art", th:"Compétences · Exercice & coopération renforcée", r:"Article 5 §3 TUE", m:`Principe de subsidiarité : hors compétence exclusive, l'Union n'intervient que si les objectifs ne peuvent être atteints de manière suffisante par les États et peuvent l'être mieux au niveau de l'Union.`},
{t:"art", th:"Compétences · Exercice & coopération renforcée", r:"Article 5 §4 TUE", m:`Principe de proportionnalité : le contenu et la forme de l'action de l'Union n'excèdent pas ce qui est nécessaire pour atteindre les objectifs des traités.`},
{t:"art", th:"Compétences · Exercice & coopération renforcée", r:"Article 20 TUE", m:`Consacre la coopération renforcée : un groupe d'au moins neuf États membres peut approfondir l'intégration dans un domaine non exclusif, en dernier ressort, le mécanisme restant ouvert aux autres États.`},
{t:"art", th:"Compétences · Exercice & coopération renforcée", r:"Article 329 TFUE", m:`Procédure d'autorisation de la coopération renforcée : sur proposition de la Commission et après approbation du Parlement européen, c'est le Conseil (et non le Conseil européen) qui en autorise le lancement.`},
{t:"art", th:"Compétences · Exercice & coopération renforcée", r:"Protocole n° 2 (subsidiarité et proportionnalité)", m:`Institue le mécanisme d'alerte précoce : les parlements nationaux peuvent contester une proposition contraire à la subsidiarité (« cartons jaune et orange »). Toute proposition législative doit être motivée au regard de ces principes.`},
{t:"jur", th:"Compétences · Exercice & coopération renforcée", r:"CJUE, 8 juin 2010, Vodafone (C-58/08)", m:`Illustre le contrôle marginal de la subsidiarité : le grief est écarté. La CJUE n'a quasiment jamais annulé un acte sur ce seul fondement, le principe relevant surtout de l'opportunité politique.`},

/* --- Institutions · Le paysage institutionnel --- */
{t:"concept", th:"Institutions · Le paysage institutionnel", r:"Commission : une légitimité démocratique indirecte", m:`La critique du « déficit démocratique » (collège non élu, fonctionnement feutré, exposition aux lobbies) est à nuancer : prise en compte des élections européennes pour désigner le président (logique des Spitzenkandidaten), investiture du collège par le Parlement après auditions, motion de censure (art. 17 §8 TUE) et contrôle de la CJUE. Légitimité médiate, et non inexistante.`},
{t:"art", th:"Institutions · Le paysage institutionnel", r:"Article 17 §1 TUE", m:`La Commission promeut l'intérêt général de l'Union et exerce ses fonctions essentielles : initiative législative, « gardienne des traités » (veille à l'application du droit de l'Union), exécution et gestion budgétaire, représentation extérieure (hors PESC).`},
{t:"art", th:"Institutions · Le paysage institutionnel", r:"Article 17 §2 TUE", m:`Quasi-monopole de l'initiative législative : sauf exception, un acte législatif de l'Union ne peut être adopté que sur proposition de la Commission, qui maîtrise ainsi l'agenda.`},
{t:"art", th:"Institutions · Le paysage institutionnel", r:"Article 17 §3 TUE", m:`Indépendance de la Commission : le collège exerce ses responsabilités en pleine indépendance et ne sollicite ni n'accepte d'instructions d'un gouvernement ou de tout autre organisme.`},
{t:"art", th:"Institutions · Le paysage institutionnel", r:"Article 17 §8 TUE", m:`Responsabilité politique de la Commission devant le Parlement européen, qui peut la contraindre à démissionner collectivement par une motion de censure (modalités à l'art. 234 TFUE).`},
{t:"art", th:"Institutions · Le paysage institutionnel", r:"Article 258 TFUE", m:`Recours en manquement : la Commission, gardienne des traités, peut saisir la CJUE lorsqu'un État membre a manqué à une obligation découlant du droit de l'Union.`},
{t:"art", th:"Institutions · Le paysage institutionnel", r:"Article 15 TUE", m:`Le Conseil européen donne à l'Union les impulsions nécessaires et fixe ses orientations et priorités politiques générales, mais n'exerce pas de fonction législative.`},
{t:"art", th:"Institutions · Le paysage institutionnel", r:"Article 16 TUE", m:`Le Conseil (de l'Union) exerce, conjointement avec le Parlement, les fonctions législative et budgétaire ; il est composé d'un représentant de chaque État au niveau ministériel, habilité à engager son gouvernement.`},
{t:"art", th:"Institutions · Le paysage institutionnel", r:"Article 19 TUE", m:`La Cour de justice de l'Union européenne assure le respect du droit dans l'interprétation et l'application des traités ; fondement (avec l'art. 47 de la Charte) de l'exigence d'indépendance des juges nationaux (ASJP).`},
{t:"art", th:"Institutions · Le paysage institutionnel", r:"Réforme du statut de la CJUE (règl. 2024/2019)", m:`En vigueur le 1er septembre 2024, applicable depuis le 1er octobre 2024 : transfert partiel de la compétence préjudicielle de la Cour vers le Tribunal dans six matières techniques (TVA, accises, douanes, classement tarifaire, indemnisation des passagers, quotas d'émission). La Cour reste seule compétente pour les questions de droit primaire, de droit international, de PGD et de Charte ; l'admission préalable des pourvois est renforcée.`},

/* --- Institutions · Les principes directeurs --- */
{t:"concept", th:"Institutions · Les principes directeurs", r:"Équilibre institutionnel", m:`Principe dégagé par la CJUE (Meroni, 1958) à partir de l'art. 13 TUE : chaque institution agit dans les limites de ses attributions et dans le respect de celles des autres ; nulle institution ne peut empiéter sur autrui ni déléguer indûment ses pouvoirs. La CJUE en garantit le respect (Tchernobyl, 1990).`},
{t:"concept", th:"Institutions · Les principes directeurs", r:"Équilibre des légitimités (≠ séparation des pouvoirs)", m:`L'équilibre institutionnel n'est pas la séparation fonctionnelle classique de Montesquieu (législatif / exécutif / judiciaire) : les fonctions sont partagées (Parlement + Conseil légifèrent sur proposition de la Commission, art. 294 TFUE ; exécutif éclaté). L'architecture représente des intérêts distincts — les citoyens (Parlement), les États (Conseil et Conseil européen), l'intérêt général (Commission) : un « équilibre des légitimités » propre à l'Union.`},
{t:"art", th:"Institutions · Les principes directeurs", r:"Article 13 TUE", m:`Énumère les institutions de l'Union et impose à chacune d'agir « dans les limites des attributions qui lui sont conférées dans les traités ». Fondement textuel de l'équilibre institutionnel.`},
{t:"art", th:"Institutions · Les principes directeurs", r:"Article 294 TFUE", m:`Procédure législative ordinaire (codécision) : adoption conjointe d'un acte par le Parlement européen et le Conseil, sur proposition de la Commission. Traduit l'équilibre des légitimités.`},
{t:"jur", th:"Institutions · Les principes directeurs", r:"CJCE, 13 juin 1958, Meroni (9/56)", m:`Dégage le principe de l'« équilibre des pouvoirs caractéristique de la structure institutionnelle » et encadre strictement les délégations de compétences entre organes.`},
{t:"jur", th:"Institutions · Les principes directeurs", r:"CJCE, 22 mai 1990, Parlement c/ Conseil « Tchernobyl » (C-70/88)", m:`Au nom de l'équilibre institutionnel, reconnaît au Parlement européen le droit de former un recours en annulation pour défendre ses propres prérogatives.`},

/* ============ PARTIE 2 — SYSTÈME JURIDIQUE ============ */
/* --- Sources · Le droit primaire --- */
{t:"concept", th:"Sources · Le droit primaire", r:"Caractère constitutionnel du droit primaire", m:`Les traités (TUE, TFUE), la Charte et les principes généraux forment une « charte constitutionnelle de base » (Les Verts, 1986). Le droit primaire occupe le sommet de la hiérarchie : il fonde les compétences des institutions et la validité du droit dérivé, obéit à une révision rigide (art. 48 TUE) et institue un ordre juridique autonome (Van Gend en Loos ; Costa c/ ENEL).`},
{t:"art", th:"Sources · Le droit primaire", r:"Article 48 TUE", m:`Procédure de révision des traités, dominée par une logique intergouvernementale : la révision ordinaire suppose l'accord de tous les États puis la ratification par chacun selon ses règles constitutionnelles. Marque la rigidité « constitutionnelle » du droit primaire.`},

/* --- Sources · Le droit dérivé --- */
{t:"concept", th:"Sources · Le droit dérivé", r:"Règlement vs directive", m:`Règlement (art. 288 TFUE) : portée générale, obligatoire dans tous ses éléments et directement applicable ; effet direct complet. Directive : lie les États quant au résultat à atteindre, en leur laissant le choix de la forme et des moyens, et suppose une transposition dans un délai ; effet direct seulement vertical.`},
{t:"art", th:"Sources · Le droit dérivé", r:"Article 288 TFUE", m:`Nomenclature des actes de droit dérivé : règlement, directive et décision (obligatoires) ; recommandations et avis (non contraignants).`},

/* --- Portée · La primauté --- */
{t:"concept", th:"Portée · La primauté", r:"Primauté du droit de l'Union", m:`Consacrée par Costa c/ ENEL (1964) : le droit de l'Union, ordre juridique propre intégré aux systèmes nationaux, prime toute norme interne contraire, même postérieure et même constitutionnelle (Internationale Handelsgesellschaft, 1970 ; Melloni, 2013). Elle garantit l'application uniforme du droit de l'Union ; sans elle, ce droit perdrait toute effectivité (dimension quasi existentielle).`},
{t:"concept", th:"Portée · La primauté", r:"Primauté d'application (et non de validité)", m:`La primauté n'annule pas la norme nationale contraire : le juge la laisse seulement inappliquée dans le litige (Simmenthal, 1978). On est donc plus proche d'une technique de résolution des conflits de normes que d'une hiérarchie kelsénienne fondée sur la validité — argument des ordres nationaux pour en relativiser la portée.`},
{t:"concept", th:"Portée · La primauté", r:"Contre-limites / réserve d'identité constitutionnelle", m:`Les juridictions nationales contestent le caractère absolu de la primauté : le Conseil d'État (Arcelor, 2007) et le Conseil constitutionnel réservent l'identité constitutionnelle, la Cour de Karlsruhe oppose des « contre-limites » (PSPP, 2020). La primauté reposant elle-même sur des traités ratifiés selon les constitutions nationales, son effectivité tient à un « dialogue des juges ».`},
{t:"jur", th:"Portée · La primauté", r:"CJCE, 15 juillet 1964, Costa c/ ENEL (6/64)", m:`Consacre la primauté : le droit communautaire forme « un ordre juridique propre intégré au système juridique des États membres » et prévaut sur le droit national, même postérieur.`},
{t:"jur", th:"Portée · La primauté", r:"CJCE, 17 décembre 1970, Internationale Handelsgesellschaft (11/70)", m:`La primauté joue même contre les normes constitutionnelles nationales : la validité d'un acte de l'Union ne peut être appréciée au regard du droit constitutionnel interne.`},
{t:"jur", th:"Portée · La primauté", r:"CJCE, 9 mars 1978, Simmenthal (106/77)", m:`Le juge national, juge de droit commun de l'Union, doit laisser d'office inappliquée toute disposition nationale contraire, sans attendre son abrogation. Illustration de la primauté d'application.`},
{t:"jur", th:"Portée · La primauté", r:"CJCE, 19 juin 1990, Factortame (C-213/89)", m:`Le juge national doit pouvoir suspendre l'application d'une loi nationale contraire au droit de l'Union, quand bien même une règle de procédure interne le lui interdirait.`},
{t:"jur", th:"Portée · La primauté", r:"CJUE, 26 février 2013, Melloni (C-399/11)", m:`La primauté joue même face à une norme constitutionnelle nationale plus protectrice : un standard national de protection ne peut compromettre la primauté, l'unité et l'effectivité du droit de l'Union.`},
{t:"jur", th:"Portée · La primauté", r:"Conseil d'État (FR), 8 février 2007, Arcelor", m:`Le juge administratif français concilie primauté et Constitution par un « contrôle par équivalence » et réserve, en dernier ressort, l'identité constitutionnelle : illustration de la relativisation nationale de la primauté.`},
{t:"jur", th:"Portée · La primauté", r:"Cour de Karlsruhe (BVerfG), 5 mai 2020, PSPP", m:`Oppose des « contre-limites » à la primauté : la Cour constitutionnelle allemande juge ultra vires un programme de la BCE et une décision de la CJUE, ravivant le débat sur la Kompetenz-Kompetenz.`},
{t:"art", th:"Portée · La primauté", r:"Article 4 §2 TUE", m:`L'Union respecte l'égalité des États membres devant les traités ainsi que leur identité nationale, inhérente à leurs structures fondamentales politiques et constitutionnelles. Limite « raisonnée » à la primauté et garde-fou de l'égalité des États.`},

/* --- Portée · L'effet direct --- */
{t:"concept", th:"Portée · L'effet direct", r:"Effet direct (principe)", m:`Aptitude d'une norme de l'Union à être invoquée directement par les particuliers devant leur juge national. Consacré par Van Gend en Loos (1963), il fait du particulier un sujet d'un « nouvel ordre juridique » — rupture avec le droit international classique, où seuls les États sont sujets (CPJI, Dantzig, 1928).`},
{t:"concept", th:"Portée · L'effet direct", r:"Conditions de l'effet direct", m:`Une disposition est d'effet direct si elle est suffisamment claire, précise et inconditionnelle (c'est-à-dire ne nécessitant, pour produire ses effets, aucune mesure complémentaire des autorités de l'Union ou nationales).`},
{t:"concept", th:"Portée · L'effet direct", r:"Effet direct vertical / horizontal", m:`Vertical = invocable contre l'État (et ses émanations) ; horizontal = invocable entre particuliers. Les traités et les règlements ont un effet direct complet (vertical et horizontal : Defrenne, 1976). Les directives n'ont, elles, qu'un effet direct vertical.`},
{t:"concept", th:"Portée · L'effet direct", r:"Effet direct des directives", m:`Effet direct seulement vertical (contre l'État), et seulement après l'expiration du délai de transposition en cas de non-transposition (Van Duyn, 1974 ; Ratti, 1979). Pas d'effet direct horizontal entre particuliers (Marshall, 1986 ; Faccini Dori, 1994). Palliatifs : interprétation conforme (Von Colson ; Marleasing) et responsabilité de l'État (Francovich).`},
{t:"concept", th:"Portée · L'effet direct", r:"Juge national, juge de droit commun de l'Union", m:`L'effet direct et la primauté décentralisent l'application du droit de l'Union : tout juge national est chargé de garantir les droits qui en découlent et d'écarter la norme interne contraire. Couplé au renvoi préjudiciel (art. 267 TFUE), ce système d'application est sans équivalent en droit international.`},
{t:"jur", th:"Portée · L'effet direct", r:"CJCE, 5 février 1963, Van Gend en Loos (26/62)", m:`Consacre l'effet direct : l'Union est un « nouvel ordre juridique » dont les sujets sont aussi les particuliers. À propos de l'art. 12 du traité CEE (clause de standstill interdisant de nouveaux droits de douane, devenu art. 30 TFUE), jugé clair, précis et inconditionnel.`},
{t:"jur", th:"Portée · L'effet direct", r:"CPJI, 3 février 1928, Compétence des tribunaux de Dantzig", m:`Position classique du droit international : un accord international ne crée pas, par lui-même, de droits pour les particuliers, sauf intention contraire des parties. Contraste mis en lumière par Van Gend en Loos.`},
{t:"jur", th:"Portée · L'effet direct", r:"CJCE, 8 avril 1976, Defrenne c/ SABENA (43/75)", m:`Effet direct horizontal des dispositions des traités : un particulier peut invoquer l'égalité des rémunérations (art. 157 TFUE, ex-art. 119 CEE) à l'encontre d'un autre particulier.`},
{t:"jur", th:"Portée · L'effet direct", r:"CJCE, 4 décembre 1974, Van Duyn (41/74)", m:`Reconnaît l'effet direct (vertical) des directives, au nom de leur effet utile.`},
{t:"jur", th:"Portée · L'effet direct", r:"CJCE, 5 avril 1979, Ratti (148/78)", m:`L'effet direct vertical d'une directive ne joue qu'après l'expiration du délai de transposition, en cas d'inexécution : l'État ne peut opposer au particulier son propre manquement.`},
{t:"jur", th:"Portée · L'effet direct", r:"CJCE, 26 février 1986, Marshall I (152/84)", m:`L'effet direct des directives est vertical (contre l'État ou ses émanations), non horizontal : une directive non transposée ne peut être invoquée entre particuliers.`},
{t:"jur", th:"Portée · L'effet direct", r:"CJCE, 14 juillet 1994, Faccini Dori (C-91/92)", m:`Confirme l'absence d'effet direct horizontal des directives : un particulier ne peut s'en prévaloir contre un autre particulier, d'où le recours à l'interprétation conforme et à la responsabilité de l'État.`},
{t:"jur", th:"Portée · L'effet direct", r:"CJCE, 10 avril 1984, Von Colson (14/83)", m:`Obligation d'interprétation conforme : le juge national doit interpréter son droit, autant que possible, à la lumière du texte et de la finalité de la directive. Premier palliatif à l'absence d'effet direct horizontal.`},
{t:"jur", th:"Portée · L'effet direct", r:"CJCE, 13 novembre 1990, Marleasing (C-106/89)", m:`Étend l'obligation d'interprétation conforme à l'ensemble du droit national, antérieur comme postérieur à la directive, dans toute la mesure du possible.`},
{t:"jur", th:"Portée · L'effet direct", r:"CJCE, 19 novembre 1991, Francovich (C-6 et C-9/90)", m:`Consacre la responsabilité de l'État pour les dommages causés aux particuliers par le défaut de transposition d'une directive : second palliatif à l'absence d'effet direct horizontal.`},
{t:"art", th:"Portée · L'effet direct", r:"Article 267 TFUE", m:`Renvoi préjudiciel : le juge national peut (et, en dernier ressort, doit) interroger la CJUE sur l'interprétation ou la validité du droit de l'Union. Clé de voûte de l'application décentralisée et de l'interprétation uniforme.`},

/* ============ CONCLUSION — IDENTITÉ DE L'UNION ============ */
/* --- Identité · La nature de l'UE --- */
{t:"concept", th:"Identité · La nature de l'UE", r:"Autonomie de l'ordre juridique de l'Union", m:`Dès Van Gend en Loos (1963) et Costa c/ ENEL (1964), les traités instituent un ordre juridique propre, distinct du droit international et du droit interne, et intégré aux systèmes nationaux : institutions propres, personnalité juridique (art. 47 TUE), pouvoirs normatifs à effet direct, système juridictionnel complet sous le monopole de la Cour. C'est pour préserver cette autonomie que la CJUE a écarté l'adhésion à la CEDH (Avis 2/13).`},
{t:"concept", th:"Identité · La nature de l'UE", r:"L'UE est-elle un État fédéral ?", m:`Non au sens strict : pas de Kompetenz-Kompetenz, États maîtres des traités, droit de retrait (art. 50 TUE). Mais des traits fédéraux marqués, au premier rang la primauté (qui rappelle la Supremacy Clause de l'art. VI de la Constitution des États-Unis ; Internationale Handelsgesellschaft, 1970). On parle d'un fédéralisme « inachevé » ou « par les droits ».`},
{t:"art", th:"Identité · La nature de l'UE", r:"Article 47 TUE", m:`Reconnaît à l'Union la personnalité juridique : elle peut conclure des accords internationaux, ester en justice et adhérer à des organisations. Élément clé de l'autonomie de son ordre juridique.`},
{t:"jur", th:"Identité · La nature de l'UE", r:"Avis 2/13 (CJUE, 18 décembre 2014, adhésion à la CEDH)", m:`Refuse le projet d'adhésion de l'Union à la CEDH : il porterait atteinte aux « caractéristiques essentielles » du droit de l'Union — autonomie, primauté, effet direct — et au monopole d'interprétation de la Cour.`},

/* --- Identité · Les valeurs --- */
{t:"concept", th:"Identité · Les valeurs", r:"État de droit, critère d'appartenance", m:`Valeur de l'art. 2 TUE devenue critère juridique : elle conditionne l'adhésion (art. 49 TUE), le maintien des droits de membre (sanction de l'art. 7 TUE, déclenché contre la Pologne et la Hongrie) et l'accès aux fonds (conditionnalité budgétaire, règl. 2020/2092, validé le 16 février 2022). La CJUE en a tiré que l'indépendance des juges nationaux relève du droit de l'Union (ASJP, 2018 ; Repubblika, 2021).`},
{t:"art", th:"Identité · Les valeurs", r:"Article 2 TUE", m:`Valeurs fondatrices de l'Union : dignité humaine, liberté, démocratie, égalité, État de droit, respect des droits de l'homme (y compris des personnes appartenant à des minorités). Elles « définissent l'identité même de l'Union » (Pologne et Hongrie c/ Parlement et Conseil, 2022).`},
{t:"art", th:"Identité · Les valeurs", r:"Article 7 TUE", m:`Procédure de sanction d'une violation grave et persistante des valeurs de l'art. 2 TUE par un État (volet préventif ajouté par le traité de Nice) ; peut aboutir à la suspension de certains droits liés à l'appartenance.`},
{t:"art", th:"Identité · Les valeurs", r:"Règlement 2020/2092 (conditionnalité budgétaire)", m:`Subordonne le versement de fonds de l'Union au respect de l'État de droit par les États membres. Sa validité a été confirmée par la CJUE le 16 février 2022 (Pologne et Hongrie c/ Parlement et Conseil).`},
{t:"jur", th:"Identité · Les valeurs", r:"CJCE, 23 avril 1986, Les Verts (294/83)", m:`La Communauté est une « Communauté de droit » : ni les États ni les institutions n'échappent au contrôle de conformité de leurs actes à la « charte constitutionnelle de base » qu'est le traité.`},
{t:"jur", th:"Identité · Les valeurs", r:"CJUE, Ass. pl., 16 février 2022, Pologne et Hongrie c/ Parlement et Conseil (C-156/21 et C-157/21)", m:`Valide le règlement de conditionnalité budgétaire (2020/2092) : les valeurs de l'art. 2 TUE définissent l'identité de l'Union, et leur respect — notamment l'État de droit — est une obligation découlant de l'appartenance.`},
{t:"jur", th:"Identité · Les valeurs", r:"CJUE, ASJP (2018) & Repubblika (2021)", m:`L'indépendance des juges nationaux est une exigence de l'État de droit relevant du droit de l'Union (art. 19 TUE) : les États doivent garantir un contrôle juridictionnel effectif et ne peuvent régresser dans la protection de cette indépendance (clause de non-régression).`},

/* --- Identité · L'appartenance & citoyenneté --- */
{t:"art", th:"Identité · L'appartenance & citoyenneté", r:"Article 49 TUE", m:`Conditions d'adhésion à l'Union : qualité d'État au sens du droit international, caractère « européen », respect des valeurs de l'art. 2 TUE et engagement à les promouvoir (avec reprise de l'acquis). Fait des valeurs une condition juridique d'admission.`},
{t:"art", th:"Identité · L'appartenance & citoyenneté", r:"Article 50 TUE", m:`Droit de retrait volontaire et unilatéral. L'État notifie son intention au Conseil européen ; un accord de retrait est conclu par le Conseil à la majorité qualifiée, après approbation du Parlement européen. À défaut d'accord, les traités cessent de s'appliquer deux ans après la notification (sauf prorogation à l'unanimité). Base juridique du Brexit.`},
{t:"tr", th:"Identité · L'appartenance & citoyenneté", r:"Brexit (art. 50 TUE : notification 2017, sortie 2020)", m:`Première mise en œuvre de l'art. 50 TUE : le Royaume-Uni notifie son intention de se retirer le 29 mars 2017 ; le retrait prend effet le 31 janvier 2020. Illustre que l'appartenance est un « choix positif permanent ».`},
{t:"art", th:"Identité · L'appartenance & citoyenneté", r:"Article 20 TFUE", m:`Citoyenneté de l'Union : est citoyen toute personne ayant la nationalité d'un État membre (art. 9 TUE). Elle s'ajoute à la citoyenneté nationale sans la remplacer et emporte un ensemble de droits ; élément de l'identité de l'Union.`}

];
