/* =====================================================================
   Banque de questions QCM — Droit institutionnel de l'Union européenne
   Cours d'Alexis Husser (L2, Université de Strasbourg).

   • Les questions marquées « an:1 » reprennent (à l'identique ou sous une
     forme très proche) l'annale fournie (40 questions).
   • Les autres questions sont rédigées à partir des notes de cours,
     calquées sur la structure et la difficulté de l'annale.

   ⚠️ Comme à l'examen, CHAQUE question peut comporter UNE OU PLUSIEURS
   bonnes réponses : l'énoncé ne dit pas combien.

   Chaque entrée :
     th : chapitre (sert au filtrage)
     q  : énoncé
     o  : options (SANS lettre, ajoutée par l'interface)
     a  : index de la bonne réponse — un nombre (réponse unique)
          OU un tableau d'index (réponses multiples)
     e  : explication / justification (affichée au corrigé)
     f  : 1 -> ordre des options FIXE (sinon mélangé)
     an : 1 -> question issue de l'annale (badge « annale »)
   ===================================================================== */

window.QCM_THEMES = [
  "Création & développement",
  "Élargissements & limites",
  "Les compétences",
  "Le paysage institutionnel",
  "Les principes directeurs",
  "Les sources du droit",
  "La primauté",
  "L'effet direct",
  "La nature de l'UE",
  "Objectifs & valeurs",
  "Appartenance & citoyenneté"
];

window.QCM = [

/* ============== CRÉATION & DÉVELOPPEMENT ============== */

{th:"Création & développement", an:1, q:`Le « plan Schuman » vise à relancer la construction européenne :`,
 o:[`selon une méthode pragmatique`,`selon une méthode téléologique`,`selon une méthode réaliste`], a:0,
 e:`La méthode Schuman procède par « réalisations concrètes créant d'abord une solidarité de fait » : une intégration pragmatique, par petits pas, plutôt qu'un grand projet politique d'emblée.`},

{th:"Création & développement", an:1, q:`L'approche fonctionnaliste :`,
 o:[`est une alternative à l'impossibilité de construire une intégration politique`,`est une alternative raisonnable au fédéralisme`,`est une solution permettant une intégration globale`], a:1,
 e:`Après l'échec de l'approche fédéraliste (CED), le fonctionnalisme propose une intégration sectorielle et progressive (par l'économie) : une alternative raisonnable au fédéralisme, et non une intégration politique globale et immédiate.`},

{th:"Création & développement", an:1, q:`Le « modèle communautaire » issu de la Déclaration Schuman se caractérise par :`,
 o:[`l'objectif d'intégration politique`,`l'objectif d'intégration économique`,`l'objectif d'intégration sociale`], a:1,
 e:`Le modèle communautaire (CECA) procède par l'intégration économique — la mise en commun du charbon et de l'acier — comme moyen : la solidarité de fait doit rendre la guerre « matériellement impossible ».`},

{th:"Création & développement", an:1, q:`Le 30 août 1954, l'Assemblée nationale française refuse de ratifier le traité instituant la Communauté européenne de défense (CED) en raison de :`,
 o:[`l'hostilité de l'opinion publique à tout réarmement allemand`,`l'absence du Royaume-Uni`,`la crainte de mettre en péril la souveraineté de la France`], a:2,
 e:`Le cours retient le refus « par crainte de perdre la souveraineté militaire » (dans un contexte de guerre froide et d'instabilité française). L'échec de la CED stoppe l'intégration politique au profit de l'intégration économique (traités de Rome, 1957).`},

{th:"Création & développement", an:1, q:`Les traités de Rome, signés le 25 mars 1957, désignent :`,
 o:[`le traité instituant la CE`,`le traité instituant la CEEA`,`le traité instituant la CEE`], a:[1,2],
 e:`Les traités de Rome (1957) créent la CEE (Communauté économique européenne) et la CEEA, dite « Euratom ». La « CE » (Communauté européenne) n'apparaît qu'avec le traité de Maastricht (1992), qui rebaptise la CEE.`},

{th:"Création & développement", an:1, q:`L'Acte unique européen marque le passage vers l'Union européenne car ce traité :`,
 o:[`introduit la notion d'Union européenne dans le Préambule`,`pose la définition du marché intérieur`,`prévoit l'élection du Parlement européen au suffrage universel direct`], a:[0,1],
 e:`L'Acte unique européen (1986) annonce dans son préambule la volonté de transformer les relations en une « Union européenne » et fixe l'objectif du marché intérieur unique pour 1992. L'élection du Parlement au suffrage universel direct est antérieure (acte de 1976, première élection en 1979).`},

{th:"Création & développement", an:1, q:`Le principal apport du traité d'Amsterdam est :`,
 o:[`l'institution de la citoyenneté européenne`,`la création de l'espace de liberté, de sécurité et de justice`,`la proclamation de la Charte des droits fondamentaux de l'Union européenne`], a:1,
 e:`Amsterdam (1997) communautarise une partie des visas, de l'asile et de l'immigration : c'est l'espace de liberté, de sécurité et de justice. La citoyenneté date de Maastricht (1992) ; la Charte est proclamée à Nice (décembre 2000).`},

{th:"Création & développement", an:1, q:`Le traité établissant une Constitution pour l'Europe visait à :`,
 o:[`établir une véritable Constitution européenne`,`codifier et clarifier l'existant`,`créer un État fédéral européen`], a:1,
 e:`Le TCE (2004) cherchait surtout à simplifier et unifier les traités existants pour donner à l'Union une identité plus lisible — non à fonder un véritable ordre constitutionnel ou un État fédéral. Il échoue après les « non » français et néerlandais (2005).`},

{th:"Création & développement", an:1, q:`On considère comme un acquis du traité de Lisbonne :`,
 o:[`la reconnaissance de la personnalité juridique de l'Union européenne`,`l'intégration de la Charte des droits fondamentaux dans le traité UE`,`l'accroissement du rôle et des pouvoirs du Parlement européen`,`le passage au vote à la majorité qualifiée en matière de politique étrangère et de sécurité commune`], a:[0,2],
 e:`Lisbonne (2007) dote l'Union d'une personnalité juridique unique et renforce les pouvoirs du Parlement. La Charte n'est pas « intégrée » au traité : elle reçoit seulement la même valeur juridique (art. 6 TUE). La PESC demeure régie par l'unanimité.`},

{th:"Création & développement", q:`Le traité de Paris, signé en 1951, institue :`,
 o:[`la Communauté économique européenne (CEE)`,`la Communauté européenne du charbon et de l'acier (CECA)`,`la Communauté européenne de défense (CED)`], a:1,
 e:`Le traité de Paris (1951) fonde la CECA entre six États : première organisation supranationale, dotée d'institutions communes (Haute Autorité, Assemblée, Cour de justice).`},

{th:"Création & développement", q:`La Communauté européenne du charbon et de l'acier (CECA) repose sur la mise en commun :`,
 o:[`du charbon et de l'acier`,`de l'énergie nucléaire civile`,`des politiques agricoles`], a:0,
 e:`Déclaration Schuman du 9 mai 1950 : mettre en commun la production franco-allemande de charbon et d'acier pour rendre la guerre « matériellement impossible ». L'énergie nucléaire civile relèvera de l'Euratom (1957).`},

{th:"Création & développement", q:`Le traité de Maastricht (1992) :`,
 o:[`crée formellement l'Union européenne, organisée en trois piliers`,`lance l'Union économique et monétaire`,`instaure la citoyenneté européenne`,`supprime la structure en piliers`], a:[0,1,2],
 e:`Maastricht crée l'UE (trois piliers), lance l'Union économique et monétaire (euro, BCE) et instaure la citoyenneté européenne. La suppression des piliers est l'œuvre du traité de Lisbonne (2007).`},

{th:"Création & développement", q:`Le traité de Lisbonne (2007) :`,
 o:[`crée le président du Conseil européen et le haut représentant`,`supprime la structure en piliers (Communautés → Union)`,`donne une valeur juridique contraignante à la Charte des droits fondamentaux`,`généralise la majorité qualifiée`], a:[0,1,2,3],
 e:`Lisbonne crée la présidence stable du Conseil européen et le haut représentant, supprime les piliers, rend la Charte contraignante (art. 6 TUE) et généralise la majorité qualifiée.`},

{th:"Création & développement", q:`Le traité établissant une Constitution pour l'Europe a échoué en 2005 à la suite des référendums négatifs :`,
 o:[`en France et aux Pays-Bas`,`au Royaume-Uni et au Danemark`,`en Irlande et en Pologne`], a:0,
 e:`Les « non » français et néerlandais (2005) provoquent l'abandon du TCE, dont le contenu sera repris — sans les symboles constitutionnels — par le traité de Lisbonne.`},

{th:"Création & développement", f:1, q:`L'Acte unique européen (1986) fixe l'objectif de réaliser le marché intérieur unique :`,
 o:[`d'ici 1992`,`d'ici 2000`,`dès sa signature`], a:0,
 e:`L'Acte unique relance l'intégration en visant l'achèvement du marché intérieur pour 1992 (suppression des obstacles non tarifaires) et étend le vote à la majorité qualifiée.`},

/* ============== ÉLARGISSEMENTS & LIMITES ============== */

{th:"Élargissements & limites", an:1, q:`L'élargissement de l'Union européenne intervenu le 1er mai 2004 est qualifié d'historique :`,
 o:[`en raison du nombre d'États entrants`,`en raison de l'adhésion de Chypre`,`en raison du caractère symbolique de la réunification du continent européen`], a:2,
 e:`Le « grand élargissement » (dix États en 2004) est qualifié d'historique parce qu'il met fin à la division Est/Ouest née de la guerre froide : c'est la réunification du continent.`},

{th:"Élargissements & limites", an:1, q:`Dans les « critères de Copenhague » définis par le Conseil européen de Copenhague en juin 1993, on retrouve :`,
 o:[`un critère économique portant sur l'économie de marché`,`un critère économique portant sur le niveau du PIB`,`un critère géographique portant sur le caractère « européen » de l'État`,`un critère politique portant sur la stabilité et le caractère démocratique des institutions`,`un critère moral portant sur les valeurs de l'Union européenne`,`un critère de l'acquis communautaire`], a:[0,3,5],
 e:`Les trois critères de Copenhague (1993) : politique (institutions stables garantissant démocratie, État de droit, droits de l'homme, minorités), économique (économie de marché viable) et l'acquis communautaire (capacité d'assumer les obligations). Le caractère « européen » de l'État relève de l'article 49 TUE, non de Copenhague.`},

{th:"Élargissements & limites", an:1, q:`Le paradoxe du processus d'élargissement de l'Union européenne est :`,
 o:[`de gagner de la puissance économique au détriment de l'efficacité et de la légitimité politique`,`de gagner de l'efficacité économique au détriment de la puissance politique`,`de gagner de la puissance politique au détriment de la puissance économique`], a:0,
 e:`Plus l'Union s'élargit, plus elle gagne en poids économique, mais plus la décision se complexifie et la légitimité politique se dilue — d'où la tension permanente entre élargissement et approfondissement.`},

{th:"Élargissements & limites", q:`Le premier élargissement des Communautés (1973) concerne :`,
 o:[`le Royaume-Uni`,`l'Irlande`,`le Danemark`,`la Grèce`], a:[0,1,2],
 e:`1973 : adhésion du Royaume-Uni, de l'Irlande et du Danemark (de Six à Neuf). La Grèce n'adhère qu'en 1981 (élargissement méridional).`},

{th:"Élargissements & limites", q:`L'élargissement méridional (« l'Europe des Douze ») correspond à l'adhésion :`,
 o:[`de la Grèce (1981), de l'Espagne et du Portugal (1986)`,`de l'Autriche, de la Finlande et de la Suède`,`des pays d'Europe centrale et orientale`], a:0,
 e:`Grèce (1981), Espagne et Portugal (1986) : un élargissement à forte dimension politique (ancrage démocratique des anciennes dictatures du Sud).`},

{th:"Élargissements & limites", f:1, q:`La Croatie adhère à l'Union européenne en :`,
 o:[`2004`,`2007`,`2013`], a:2,
 e:`2013 : l'adhésion de la Croatie porte l'Union à 28 États membres.`},

{th:"Élargissements & limites", q:`Le Brexit :`,
 o:[`repose sur un référendum tenu en 2016`,`est la première mise en œuvre de l'article 50 TUE`,`a pris effet le 31 janvier 2020`,`a entraîné l'exclusion du Royaume-Uni par les autres États membres`], a:[0,1,2],
 e:`Le Brexit (référendum de 2016, sortie le 31 janvier 2020) est l'unique mise en œuvre de l'article 50 TUE : un retrait volontaire et unilatéral, non une exclusion.`},

{th:"Élargissements & limites", q:`Les conditions d'adhésion posées par l'article 49 TUE sont :`,
 o:[`la qualité d'État au sens du droit international`,`le caractère « européen » de l'État`,`le respect des valeurs de l'article 2 TUE`,`une économie de marché viable`], a:[0,1,2],
 e:`L'article 49 TUE exige la qualité d'État, le caractère européen et le respect des valeurs de l'article 2 (assorti de l'engagement de les promouvoir). L'économie de marché viable relève des critères de Copenhague, non de l'article 49.`},

{th:"Élargissements & limites", f:1, q:`L'Ukraine et la Moldavie sont officiellement candidates à l'adhésion depuis :`,
 o:[`2013`,`2022`,`2004`], a:1,
 e:`L'Ukraine et la Moldavie sont candidates depuis 2022 (la Géorgie depuis 2023), dans le contexte des tensions avec la Russie.`},

/* ============== LES COMPÉTENCES ============== */

{th:"Les compétences", q:`Le principe d'attribution des compétences (art. 5 §2 TUE) signifie :`,
 o:[`que l'Union n'agit que dans les domaines que les traités lui ont attribués`,`que tout ce qui n'est pas attribué à l'Union reste de la compétence des États`,`que l'Union dispose d'une compétence générale`], a:[0,1],
 e:`« Pas de compétence sans attribution » : l'Union n'agit que dans les domaines expressément confiés par les traités ; tout le reste demeure de la compétence des États.`},

{th:"Les compétences", q:`La clause de flexibilité (art. 352 TFUE) :`,
 o:[`est subsidiaire (elle ne joue qu'à défaut de base juridique spécifique)`,`requiert l'unanimité du Conseil et l'approbation du Parlement européen`,`permet d'étendre les compétences de l'Union à des domaines exclus par les traités`], a:[0,1],
 e:`La clause de flexibilité est subsidiaire et soumise à une procédure renforcée (proposition de la Commission, unanimité du Conseil, approbation du Parlement). Elle ne peut étendre les compétences à des domaines exclus ni contourner le principe d'attribution.`},

{th:"Les compétences", q:`Relèvent des compétences exclusives de l'Union (art. 3 TFUE) :`,
 o:[`l'union douanière`,`la politique commerciale commune`,`la politique monétaire des États de la zone euro`,`l'environnement`], a:[0,1,2],
 e:`Compétences exclusives (art. 3 TFUE) : union douanière, règles de concurrence, politique commerciale commune, politique monétaire (zone euro), conservation des ressources biologiques de la mer. L'environnement est une compétence partagée (art. 4 TFUE).`},

{th:"Les compétences", q:`Le principe de subsidiarité (art. 5 §3 TUE) :`,
 o:[`ne s'applique pas dans les domaines de compétence exclusive`,`est une condition d'opportunité de l'exercice des compétences`,`est contrôlé par les parlements nationaux (alerte précoce) et par la Cour de justice`], a:[0,1,2],
 e:`La subsidiarité conditionne l'exercice des compétences non exclusives : l'Union n'agit que si l'objectif est mieux atteint à son niveau. Double contrôle : politique (parlements nationaux) et juridictionnel (CJUE).`},

{th:"Les compétences", q:`Le principe de proportionnalité (art. 5 §4 TUE) est :`,
 o:[`une condition d'opportunité`,`une condition d'intensité de l'action de l'Union`,`un critère d'adhésion à l'Union`], a:1,
 e:`La proportionnalité est une condition d'intensité : le contenu et la forme de l'action de l'Union n'excèdent pas ce qui est nécessaire pour atteindre les objectifs des traités. La subsidiarité, elle, est une condition d'opportunité.`},

{th:"Les compétences", f:1, q:`La coopération renforcée (art. 20 TUE) doit rassembler au moins :`,
 o:[`neuf États membres`,`sept États membres`,`la moitié des États membres`], a:0,
 e:`La coopération renforcée requiert au moins neuf États membres, doit rester ouverte aux autres et respecter les traités. La PESC en est exclue depuis le traité de Nice.`},

{th:"Les compétences", q:`La théorie des compétences implicites a été consacrée par l'arrêt :`,
 o:[`AETR (CJCE, 1971)`,`Costa c/ Enel (1964)`,`Van Gend en Loos (1963)`], a:0,
 e:`CJCE, 31 mars 1971, AETR : l'Union peut se voir reconnaître les compétences accessoires (y compris externes) indispensables à l'exercice effectif d'une compétence attribuée.`},

/* ============== LE PAYSAGE INSTITUTIONNEL ============== */

{th:"Le paysage institutionnel", an:1, q:`Le droit institutionnel de l'Union européenne s'entend comme :`,
 o:[`l'ensemble des règles qui structurent et organisent le fonctionnement et l'action de l'Union européenne`,`l'ensemble des règles de fond du droit de l'Union européenne`,`l'ensemble des règles qui prescrivent, interdisent ou autorisent un certain comportement dans le but de réaliser les objectifs des traités`], a:0,
 e:`Le droit institutionnel régit l'organisation et le fonctionnement de l'Union (institutions, compétences, actes). Les options b et c décrivent le droit matériel (« de fond »), qui régit les comportements en vue des objectifs des traités.`},

{th:"Le paysage institutionnel", an:1, q:`Les principales fonctions du Conseil européen sont :`,
 o:[`son rôle d'initiative législative`,`son rôle d'impulsion et d'orientation des priorités politiques générales`,`son rôle d'instance d'appel en cas de blocage politique`,`son rôle de législateur de l'Union`,`son rôle de « chef de l'Union »`,`son intervention dans les grandes procédures de l'Union européenne`], a:[1,2,4,5],
 e:`Le cours distingue quatre fonctions : impulsion/orientation, implication dans les grandes procédures, « chef de l'Union », et évocation/instance d'appel. Le Conseil européen « n'exerce pas de fonction législative » (art. 15 §1 TUE) : ni initiative, ni rôle de législateur.`},

{th:"Le paysage institutionnel", an:1, q:`Le Conseil de l'Union européenne est composé :`,
 o:[`des chefs d'État ou de gouvernement des États membres`,`d'un représentant de chaque État membre au niveau ministériel`,`de représentants des gouvernements et des parlements nationaux de chaque État membre`], a:1,
 e:`Art. 16 TUE : le Conseil de l'UE réunit « un représentant de chaque État membre au niveau ministériel, habilité à engager le gouvernement ». Les chefs d'État ou de gouvernement composent le Conseil européen.`},

{th:"Le paysage institutionnel", an:1, q:`Sont considérés comme les « colégislateurs » de l'Union européenne :`,
 o:[`la Commission européenne et le Conseil de l'Union européenne`,`le Conseil européen et le Parlement européen`,`la Commission européenne et le Parlement européen`,`le Conseil de l'Union européenne et le Parlement européen`], a:3,
 e:`Le Conseil de l'UE et le Parlement européen exercent conjointement la fonction législative (et budgétaire) : ce sont les deux colégislateurs. La Commission, elle, propose les actes (initiative).`},

{th:"Le paysage institutionnel", an:1, q:`La présidence du Conseil de l'Union européenne est :`,
 o:[`une présidence fixe`,`une présidence tournante`,`une présidence collégiale`], a:1,
 e:`Le Conseil de l'UE repose sur une présidence tournante par État tous les 6 mois, organisée en « trio de présidence » (3 États sur 18 mois). La présidence fixe concerne le Conseil européen (président élu 2 ans et demi) et le Conseil des affaires étrangères (haut représentant).`},

{th:"Le paysage institutionnel", an:1, f:1, q:`Selon l'article 16 §4 TUE, la majorité qualifiée au Conseil de l'Union européenne est égale à :`,
 o:[`au moins 65 % des membres du Conseil représentant des États membres réunissant au moins 55 % de la population de l'Union`,`au moins 72 % des membres du Conseil représentant des États membres réunissant au moins 65 % de la population de l'Union`,`au moins 55 % des membres du Conseil représentant des États membres réunissant au moins 65 % de la population de l'Union`], a:2,
 e:`Majorité qualifiée (art. 16 §4 TUE) : au moins 55 % des membres (soit au moins 15 États) réunissant au moins 65 % de la population. Le seuil de 72 % s'applique lorsque le Conseil ne statue pas sur proposition de la Commission (art. 238 §2 TFUE).`},

{th:"Le paysage institutionnel", an:1, q:`Dans la procédure législative de l'Union européenne, l'initiative est :`,
 o:[`un monopole de la Commission européenne`,`partagée entre la Commission, le Parlement européen, le Conseil européen et les citoyens européens`,`complétée par l'initiative indirecte du Parlement européen et l'initiative citoyenne`], a:2,
 e:`La Commission détient le quasi-monopole de l'initiative législative. Ce n'est pas un monopole absolu : le Parlement (art. 225 TFUE) et le Conseil (art. 241 TFUE) peuvent l'inviter à proposer un acte, et l'initiative citoyenne (art. 11 §4 TUE) la complète.`},

{th:"Le paysage institutionnel", an:1, q:`Les membres du Parlement européen sont élus :`,
 o:[`selon une procédure commune`,`selon une procédure conforme aux principes communs à l'ensemble des États membres`,`au scrutin de type proportionnel`,`au suffrage universel indirect`], a:[1,2],
 e:`Les députés sont élus au suffrage universel direct (art. 14 §3 TUE) — donc pas « indirect » — au scrutin proportionnel, selon des principes communs aux États membres (faute de procédure électorale véritablement uniforme, art. 223 TFUE).`},

{th:"Le paysage institutionnel", an:1, q:`Le Parlement européen dispose de :`,
 o:[`pouvoirs comparables aux pouvoirs traditionnels d'un véritable parlement`,`pouvoirs limités de délibération et de contrôle politique`,`fonctions consultatives, législatives, budgétaires et de contrôle politique`], a:2,
 e:`Art. 14 §1 TUE : le Parlement exerce, avec le Conseil, les fonctions législative et budgétaire, ainsi que des fonctions de contrôle politique et consultatives. Il n'est pas un parlement « classique » (pas d'initiative législative générale).`},

{th:"Le paysage institutionnel", an:1, q:`La Commission européenne est l'institution qui représente et promeut :`,
 o:[`l'intérêt commun des États membres`,`l'intérêt général de l'Union européenne`,`l'intérêt général des citoyens de l'Union européenne`], a:1,
 e:`Art. 17 §1 TUE : la Commission « promeut l'intérêt général de l'Union ». Les commissaires sont indépendants et ne représentent pas leur État d'origine.`},

{th:"Le paysage institutionnel", an:1, q:`Le président de la Commission européenne est :`,
 o:[`nommé d'un commun accord par les gouvernements des États membres`,`nommé par le Conseil européen et le Conseil de l'Union européenne`,`élu par le Parlement européen sur proposition du Conseil européen`,`élu par le Parlement européen sur proposition du Conseil de l'Union européenne`], a:2,
 e:`Art. 17 §7 TUE : le Conseil européen, statuant à la majorité qualifiée et tenant compte des élections européennes, propose un candidat ; le Parlement européen l'élit.`},

{th:"Le paysage institutionnel", an:1, q:`La Cour de justice de l'Union européenne est :`,
 o:[`une institution de l'Union européenne`,`la juridiction suprême dans l'ordre juridique de l'Union européenne`,`composée de la Cour de justice, du Tribunal et du Tribunal de la fonction publique de l'Union européenne`], a:[0,1],
 e:`La CJUE est une institution de l'Union (art. 13 TUE) et se situe au sommet de l'ordre juridictionnel de l'Union. Elle comprend la Cour de justice et le Tribunal (art. 19 TUE) : le Tribunal de la fonction publique a été supprimé en 2016.`},

{th:"Le paysage institutionnel", an:1, q:`La récente réforme du statut de la Cour de justice de l'Union européenne, entrée en vigueur en septembre 2024, prévoit :`,
 o:[`le doublement d'effectif du Tribunal de l'Union européenne`,`la création du Tribunal de la fonction publique de l'Union européenne`,`la possibilité pour le Tribunal de l'Union européenne d'être assisté par des avocats généraux`,`le transfert partiel de la compétence préjudicielle au Tribunal de l'Union européenne`], a:3,
 e:`La modification du Statut entrée en vigueur le 1er septembre 2024 opère un transfert partiel de la compétence préjudicielle (dans des matières spécifiques) au Tribunal, pour alléger la charge de la Cour de justice.`},

{th:"Le paysage institutionnel", q:`Le Conseil européen est composé (art. 15 §2 TUE) :`,
 o:[`des chefs d'État ou de gouvernement des États membres`,`du président du Conseil européen`,`du président de la Commission européenne`,`d'un ministre par État membre`], a:[0,1,2],
 e:`Art. 15 §2 TUE : chefs d'État ou de gouvernement + président du Conseil européen + président de la Commission. Le haut représentant participe aux travaux mais n'en est pas membre. « Un ministre par État » caractérise le Conseil de l'UE.`},

{th:"Le paysage institutionnel", q:`Le président du Conseil européen :`,
 o:[`est élu par le Conseil européen à la majorité qualifiée`,`exerce un mandat de deux ans et demi renouvelable une fois`,`représente l'Union à l'extérieur pour les questions de PESC`], a:[0,1,2],
 e:`Élu à la majorité qualifiée pour 2 ans et demi (renouvelable une fois), il prépare et assure la continuité des travaux et représente l'Union pour la PESC, sans empiéter sur le haut représentant.`},

{th:"Le paysage institutionnel", q:`Les trois fonctions de la Commission consacrées à l'article 17 §1 TUE sont :`,
 o:[`l'initiative législative`,`le rôle de « gardienne des traités »`,`l'exécution`,`la fonction juridictionnelle`], a:[0,1,2],
 e:`Art. 17 §1 TUE : initiative (quasi-monopole), « gardienne des traités » (surveillance de l'application du droit de l'Union) et exécution. La fonction juridictionnelle relève de la CJUE.`},

{th:"Le paysage institutionnel", q:`La Commission européenne dispose :`,
 o:[`du monopole absolu de l'initiative législative`,`du quasi-monopole de l'initiative législative`,`d'aucun pouvoir d'initiative`], a:1,
 e:`La Commission a le quasi-monopole de l'initiative : le Parlement et le Conseil peuvent l'inviter à proposer un acte, et l'initiative citoyenne existe (art. 11 §4 TUE).`},

{th:"Le paysage institutionnel", q:`La Cour de justice de l'Union européenne comprend (art. 19 TUE) :`,
 o:[`la Cour de justice`,`le Tribunal`,`le Tribunal de la fonction publique`], a:[0,1],
 e:`Depuis la suppression du Tribunal de la fonction publique (2016), la CJUE comprend la Cour de justice et le Tribunal.`},

{th:"Le paysage institutionnel", q:`Les juges de la Cour de justice sont :`,
 o:[`au nombre d'un par État membre`,`nommés par les gouvernements après consultation d'un comité (art. 255 TFUE)`,`au nombre de deux par État membre`], a:[0,1],
 e:`La Cour de justice compte un juge par État membre (soit 27), assistés d'avocats généraux. Le Tribunal, lui, compte deux juges par État (soit 54) depuis 2017.`},

{th:"Le paysage institutionnel", f:1, q:`Le Conseil de l'Union européenne siège, selon les matières traitées, dans :`,
 o:[`dix formations`,`vingt-sept formations`,`une formation unique`], a:0,
 e:`Les ministres siègent dans l'une des dix formations du Conseil selon les matières traitées ; les travaux sont préparés par le COREPER (comité des représentants permanents).`},

/* ============== LES PRINCIPES DIRECTEURS ============== */

{th:"Les principes directeurs", an:1, q:`Le principe de coopération loyale est un principe :`,
 o:[`qui ne s'applique qu'aux relations entre les États membres et les institutions de l'Union`,`qui s'applique aux relations entre les États membres et les institutions ainsi qu'aux relations entre les institutions de l'Union européenne elles-mêmes`,`qui ne s'applique qu'aux relations entre les institutions de l'Union européenne`], a:1,
 e:`Art. 4 §3 TUE : la coopération loyale impose une obligation réciproque entre l'Union et les États membres, et vaut aussi dans les relations interinstitutionnelles (art. 13 §2 TUE ; Conseil c/ Parlement, aff. 302/87).`},

{th:"Les principes directeurs", an:1, q:`Le principe de transparence vise à renforcer :`,
 o:[`la confiance des citoyens envers les institutions de l'Union européenne`,`le caractère démocratique de l'Union européenne`,`le contrôle des États membres sur l'action des institutions de l'Union européenne`], a:[0,1],
 e:`La Déclaration n°17 (Maastricht) reconnaît au principe une double dimension : administrative (la transparence « renforce la confiance du public envers l'administration ») et politique (elle renforce « le caractère démocratique des institutions »).`},

{th:"Les principes directeurs", q:`Le principe de l'équilibre institutionnel (art. 13 §2 TUE) :`,
 o:[`implique que chaque institution exerce ses compétences dans le respect de celles des autres`,`a été dégagé dès l'arrêt Méroni (1958)`,`vise à empêcher la concentration du pouvoir institutionnel`], a:[0,1,2],
 e:`Dégagé dès Méroni (1958) et consacré à l'art. 13 §2 TUE, l'équilibre institutionnel impose à chaque institution d'exercer ses compétences dans le respect de celles des autres et prévient la concentration du pouvoir.`},

{th:"Les principes directeurs", q:`L'arrêt Méroni c/ Haute Autorité (CJCE, 1958) concerne :`,
 o:[`le principe de l'équilibre institutionnel`,`la primauté du droit de l'Union`,`l'effet direct des directives`], a:0,
 e:`CJCE, 13 juin 1958, Méroni : énoncé du principe d'« équilibre des pouvoirs, caractéristique de la structure institutionnelle de la Communauté ».`},

{th:"Les principes directeurs", q:`L'arrêt de référence consacrant le principe de coopération loyale est :`,
 o:[`Grèce c/ Conseil (CJCE, 1988)`,`Costa c/ Enel (1964)`,`Simmenthal (1978)`], a:0,
 e:`CJCE, 27 septembre 1988, Grèce c/ Conseil, aff. 204/86 : la coopération loyale (art. 4 §3 TUE) impose aux États de prendre toute mesure assurant l'exécution des obligations européennes.`},

{th:"Les principes directeurs", q:`Le principe de transparence :`,
 o:[`a une nature composite`,`présente une double dimension, administrative et politique`,`se décline notamment par le droit d'accès aux documents`], a:[0,1,2],
 e:`Principe composite (bonne administration, contrôle démocratique, participation citoyenne), à double dimension (Déclaration n°17), il se décline notamment par le droit d'accès aux documents (règlement n°1049/2001).`},

/* ============== LES SOURCES DU DROIT ============== */

{th:"Les sources du droit", an:1, q:`Selon la formule de l'arrêt Costa, le droit communautaire constitue :`,
 o:[`« un ordre juridique propre, intégré au système juridique des États membres »`,`« un ordre juridique nouveau, intégré à l'ordre juridique international »`,`« un ordre juridique singulier, distinct des systèmes juridiques des États membres »`,`« un ordre juridique particulier, distinct de l'ordre juridique international »`], a:0,
 e:`Costa c/ Enel (15 juillet 1964) : à la différence des traités internationaux ordinaires, le traité CEE a institué « un ordre juridique propre, intégré au système juridique des États membres ». La formule « nouvel ordre juridique… de droit international » est celle de Van Gend en Loos (1963).`},

{th:"Les sources du droit", an:1, q:`Complétez cet extrait tiré de l'avis 2/13 (Adhésion de l'Union à la CEDH) : « les traités fondateurs, qui constituent […] de l'Union, ont, à la différence des traités internationaux ordinaires, instauré un nouvel ordre juridique » :`,
 o:[`la charte constitutive de base`,`la charte constitutionnelle de base`,`le droit primaire`,`le droit constitutionnel`], a:1,
 e:`La Cour qualifie les traités de « charte constitutionnelle de base » de l'Union (formule issue de Les Verts, 1986, reprise par les avis 1/91 et 2/13) : formellement des traités, ils sont substantiellement la charte constitutionnelle de l'Union.`},

{th:"Les sources du droit", an:1, q:`La nomenclature officielle des actes juridiques de l'Union est prévue à :`,
 o:[`l'article 88 TFUE`,`l'article 108 TFUE`,`l'article 8 TUE`,`l'article 288 TFUE`], a:3,
 e:`L'article 288 TFUE énumère les actes de l'Union : règlement, directive, décision, recommandation et avis.`},

{th:"Les sources du droit", an:1, q:`Le règlement est un acte juridique de l'Union qui est :`,
 o:[`doté d'un effet direct horizontal`,`doté d'un effet direct vertical`,`doté d'un effet direct vertical et horizontal`,`doté d'une portée limitée`,`obligatoire dans tous ses éléments`], a:[2,4],
 e:`Art. 288 TFUE : le règlement est obligatoire dans tous ses éléments et directement applicable. Il bénéficie d'un effet direct complet — à la fois vertical et horizontal (Politi, aff. 43/71) — et a une portée générale, non limitée.`},

{th:"Les sources du droit", an:1, q:`La directive est :`,
 o:[`un instrument d'harmonisation des législations nationales`,`un instrument qui encadre la marge de liberté des États membres`,`dotée d'un effet direct vertical et horizontal`,`dotée d'un effet direct vertical et descendant`,`un instrument qui associe obligation relative de résultats et obligation absolue de moyens`], a:[0,1],
 e:`La directive harmonise les législations en liant les États quant au résultat (obligation absolue de résultat) tout en encadrant leur liberté sur la forme et les moyens. Son effet direct est seulement vertical et ascendant (jamais horizontal ni « descendant » contre le particulier). L'option e inverse les obligations.`},

{th:"Les sources du droit", an:1, q:`Les principes généraux du droit de l'Union :`,
 o:[`s'imposent exclusivement aux institutions de l'Union européenne`,`ont une autorité équivalente à celle du droit dérivé`,`s'imposent aux institutions de l'Union européenne et aux États membres lorsqu'ils mettent en œuvre le droit de l'Union`,`ont uniquement comme sources le droit international et les droits nationaux des États membres`], a:2,
 e:`Les PGD s'imposent aux institutions et aux États lors de la « mise en œuvre » du droit de l'Union (ERT, 1991 ; Booker Aquaculture, 2003). Leur autorité est supérieure au droit dérivé (assimilée au droit primaire), et leurs sources sont triples : internationale, nationale et communautaire.`},

{th:"Les sources du droit", q:`Le droit primaire de l'Union comprend :`,
 o:[`les traités (TUE et TFUE)`,`la Charte des droits fondamentaux de l'Union européenne`,`les règlements et les directives`], a:[0,1],
 e:`Le droit primaire = traités, protocoles, annexes et textes à valeur équivalente (la Charte, art. 6 TUE). Règlements et directives relèvent du droit dérivé.`},

{th:"Les sources du droit", q:`La décision (art. 288 TFUE) :`,
 o:[`est obligatoire dans tous ses éléments`,`est le seul type d'acte prévu en matière de PESC`,`peut produire un effet direct à l'égard de son destinataire`], a:[0,1,2],
 e:`La décision est obligatoire dans tous ses éléments, peut viser un destinataire déterminé, est le seul acte prévu en matière de PESC et peut produire un effet direct lorsqu'elle est claire, précise et inconditionnelle.`},

{th:"Les sources du droit", q:`Les recommandations et avis (art. 288 TFUE) :`,
 o:[`ne lient pas (droit souple)`,`peuvent devoir être pris en considération par le juge national`,`sont dépourvus de tout effet juridique`], a:[0,1],
 e:`Dépourvus de force obligatoire, ils relèvent du droit souple mais ne sont pas sans effet : le juge national peut devoir « prendre en considération » une recommandation (Grimaldi, 1989).`},

{th:"Les sources du droit", q:`L'arrêt Grimaldi (CJCE, 1989) concerne :`,
 o:[`la portée juridique des recommandations`,`l'effet direct des règlements`,`la primauté sur la Constitution`], a:0,
 e:`CJCE, 13 décembre 1989, Grimaldi, aff. 322/88 : les recommandations, bien que non contraignantes, doivent être prises en considération par le juge national lorsqu'elles éclairent l'interprétation du droit.`},

{th:"Les sources du droit", q:`Les principes généraux du droit de l'Union :`,
 o:[`sont des sources non écrites dégagées par la Cour de justice`,`ont une autorité supérieure à celle du droit dérivé`,`puisent à trois sources : internationale, nationale et communautaire`], a:[0,1,2],
 e:`Les PGD, sources non écrites comblant les lacunes des traités, ont une autorité supérieure au droit dérivé (rang « constitutionnel ») et trois origines : internationale, nationale et communautaire.`},

{th:"Les sources du droit", f:1, q:`La révision des traités est régie par l'article :`,
 o:[`48 TUE`,`50 TUE`,`49 TUE`], a:0,
 e:`Art. 48 TUE : procédure de révision (ordinaire et procédures simplifiées). À distinguer de l'art. 49 (adhésion) et de l'art. 50 (retrait).`},

/* ============== LA PRIMAUTÉ ============== */

{th:"La primauté", an:1, q:`Le principe de primauté correspond à :`,
 o:[`une règle de supériorité hiérarchique de l'ordre juridique de l'Union sur l'ordre juridique des États membres`,`un principe de priorité donné à l'application du droit de l'Union en cas de conflit avec une disposition nationale contraire`,`un principe d'équivalence entre l'ordre juridique de l'Union européenne et l'ordre juridique des États membres`,`un principe existentiel pour l'ordre juridique de l'Union européenne`,`un principe d'application immédiate du droit de l'Union dans l'ordre des États membres`], a:[1,3],
 e:`La primauté n'est pas une hiérarchie normative (la norme nationale n'est pas abrogée) mais une priorité d'application : le juge écarte la norme interne contraire. Le cours en souligne le caractère « existentiel » (la règle commune doit prévaloir sous peine de cesser d'être commune). L'application immédiate (applicabilité immédiate) est un principe distinct.`},

{th:"La primauté", an:1, q:`La portée du principe de primauté est :`,
 o:[`générale`,`absolue`,`externe`,`interne`,`relative`], a:[0,3],
 e:`Le cours caractérise la portée de la primauté comme générale (elle vise « un texte interne quel qu'il soit ») et interne (appliquée par les juges nationaux). Sa troisième caractéristique est une portée « raisonnée » (tempérée par trois exceptions) — et non strictement absolue, ni externe, ni relative.`},

{th:"La primauté", q:`Le principe de primauté est affirmé de manière constante depuis l'arrêt :`,
 o:[`Costa c/ Enel (1964)`,`Van Gend en Loos (1963)`,`Francovich (1991)`], a:0,
 e:`CJCE, 15 juillet 1964, Costa c/ Enel, aff. 6/64 : un texte interne ne peut être judiciairement opposé au droit issu du traité, sans que la base juridique de la Communauté soit mise en cause.`},

{th:"La primauté", q:`Aujourd'hui, la primauté du droit de l'Union :`,
 o:[`n'est pas inscrite dans le corps des traités`,`est rappelée par la Déclaration n°17 annexée au traité de Lisbonne`,`repose sur une jurisprudence constante de la Cour de justice`], a:[0,1,2],
 e:`Abandonnée avec le TCE (art. I-6), la primauté n'a pas été reprise dans le corps des traités : la Déclaration n°17 (Lisbonne) se borne à « rappeler » la jurisprudence constante, sans en modifier l'existence.`},

{th:"La primauté", q:`En vertu de l'arrêt Melloni (2013), la primauté s'impose même à l'égard :`,
 o:[`d'une loi nationale`,`d'une norme constitutionnelle nationale`,`d'un règlement administratif`], a:[0,1,2],
 e:`Le fait pour un État d'invoquer des dispositions de droit national, « fussent-elles d'ordre constitutionnel », ne saurait affecter l'effet du droit de l'Union (Melloni, aff. C-399/11) : la primauté est doublement générale.`},

{th:"La primauté", q:`L'arrêt Simmenthal (CJCE, 1978) impose au juge national :`,
 o:[`d'écarter lui-même la norme interne contraire au droit de l'Union`,`sans attendre son abrogation par une autorité nationale`,`de saisir préalablement sa cour constitutionnelle`], a:[0,1],
 e:`CJCE, 9 mars 1978, Simmenthal, aff. 106/77 : le juge national applique intégralement le droit de l'Union et laisse inappliquée toute disposition nationale contraire, sans attendre son abrogation ou son annulation.`},

{th:"La primauté", q:`La « portée raisonnée » de la primauté se manifeste par :`,
 o:[`l'exception des considérations impérieuses de sécurité juridique`,`la protection proportionnée de l'identité nationale (art. 4 §2 TUE)`,`les situations exceptionnelles en matière de droits fondamentaux`], a:[0,1,2],
 e:`Trois tempéraments : suspension provisoire de l'effet d'éviction pour sécurité juridique (Winner Wetten), protection de l'identité nationale sous contrôle de proportionnalité (Sayn-Wittgenstein), situations exceptionnelles relatives aux droits fondamentaux (Aranyosi).`},

/* ============== L'EFFET DIRECT ============== */

{th:"L'effet direct", an:1, q:`L'effet direct du droit de l'Union européenne signifie :`,
 o:[`qu'il prévaut sur les droits nationaux`,`que lorsqu'il est suffisamment clair et inconditionnel, il produit un effet à l'égard des particuliers`,`qu'il est invocable par les particuliers devant les juridictions nationales`,`que le juge a la capacité de lui accorder des effets`], a:[1,2],
 e:`L'effet direct (Van Gend en Loos, 1963) : une norme claire, précise et inconditionnelle crée des droits dans le chef des particuliers, qui peuvent l'invoquer devant le juge national. Le fait de « prévaloir sur les droits nationaux » caractérise la primauté, non l'effet direct.`},

{th:"L'effet direct", q:`L'effet direct du droit de l'Union a été consacré par l'arrêt :`,
 o:[`Van Gend en Loos (1963)`,`Costa c/ Enel (1964)`,`Simmenthal (1978)`], a:0,
 e:`CJCE, 5 février 1963, Van Gend en Loos, aff. 26/62 : une interdiction claire et inconditionnelle crée des droits pour les particuliers que les juges nationaux doivent protéger, indépendamment de toute mesure nationale.`},

{th:"L'effet direct", q:`Une disposition des traités produit un effet direct si elle est :`,
 o:[`claire et précise`,`inconditionnelle`,`subordonnée à une mesure nationale de transposition`], a:[0,1],
 e:`Critères de l'effet direct : disposition claire, précise et inconditionnelle, dont la mise en œuvre n'est subordonnée à aucune mesure ultérieure.`},

{th:"L'effet direct", q:`L'effet direct vertical :`,
 o:[`joue à l'encontre de l'État`,`joue au profit du particulier contre l'État`,`joue à l'encontre d'un autre particulier`], a:[0,1],
 e:`L'effet direct vertical (ascendant) permet au particulier d'invoquer la norme contre l'État, à son profit — non l'inverse. L'invocation contre un autre particulier relève de l'effet direct horizontal.`},

{th:"L'effet direct", q:`Les directives :`,
 o:[`ne produisent qu'un effet direct vertical et ascendant`,`peuvent être invoquées par un particulier contre l'État en cas de défaut de transposition`,`produisent un effet direct horizontal entre particuliers`], a:[0,1],
 e:`L'effet direct des directives est vertical et ascendant (van Duyn ; Marshall I) : invocable par le particulier contre l'État, après expiration du délai de transposition et en cas de défaut de transposition. L'effet horizontal est en principe exclu.`},

{th:"L'effet direct", q:`L'arrêt Marshall I (CJCE, 1986) établit que la directive :`,
 o:[`ne produit pas d'effet direct horizontal à l'encontre d'un particulier`,`prime sur la Constitution nationale`,`a une portée générale comme le règlement`], a:0,
 e:`CJCE, 26 février 1986, Marshall I, aff. 152/84 : une directive non transposée ne peut créer d'obligations à la charge d'un particulier ; son effet direct ne joue que contre l'État.`},

{th:"L'effet direct", q:`Les principes généraux du droit produisent un effet direct :`,
 o:[`sans qu'aucun critère (précision, inconditionnalité) ne soit exigé`,`seulement s'ils sont clairs et inconditionnels`,`jamais`], a:0,
 e:`Les PGD sont d'effet direct sans condition de précision ou d'inconditionnalité (leur généralité s'y oppose), pourvu que la situation relève du champ d'application du droit de l'Union (Dansk Industri, 2016).`},

{th:"L'effet direct", q:`L'effet direct horizontal est reconnu :`,
 o:[`à l'article 157 TFUE sur l'égalité des rémunérations (arrêt Defrenne)`,`aux articles 101 et 102 TFUE sur la concurrence`,`aux directives non transposées`], a:[0,1],
 e:`L'effet direct horizontal joue pour l'art. 157 TFUE (Defrenne c/ SABENA, 1976) et les règles de concurrence (art. 101-102 TFUE) qui s'y prêtent par nature, mais en principe pas pour les directives.`},

/* ============== LA NATURE DE L'UE ============== */

{th:"La nature de l'UE", an:1, q:`D'après la jurisprudence de la Cour de justice, on compte parmi les caractéristiques tenant à la nature du droit de l'Union :`,
 o:[`son autonomie`,`son cadre institutionnel`,`sa primauté`,`son effet direct`,`son principe d'attribution des compétences`], a:[0,2,3],
 e:`Dans l'avis 2/13, la Cour distingue les caractéristiques « tenant à la nature même du droit de l'Union » — autonomie, primauté, effet direct — des caractéristiques « relatives à la structure constitutionnelle » (le cadre institutionnel, art. 13 à 19 TUE).`},

{th:"La nature de l'UE", an:1, q:`L'Union européenne peut se définir comme :`,
 o:[`un pouvoir public commun`,`une organisation internationale ordinaire`,`un État fédéral`,`une Confédération`,`une Union d'États de type fédéral`], a:[0,4],
 e:`L'Union est un « pouvoir public commun » (Délibération 1/78) et une « Union d'États de type fédéral ». Elle n'est ni une organisation internationale ordinaire, ni un État fédéral au sens strict, ni une simple confédération : sa nature est hybride.`},

{th:"La nature de l'UE", q:`L'expression « pouvoir public commun » appliquée à l'Union est tirée :`,
 o:[`de la Délibération 1/78 (CEEA, 1978)`,`de l'arrêt Costa c/ Enel`,`de l'avis 2/13`], a:0,
 e:`La Délibération 1/78 (14 novembre 1978, CEEA) : un pouvoir « commun », indépendant des États parce qu'exercé en commun et confié à des institutions communes.`},

{th:"La nature de l'UE", q:`L'article 4 TUE, « définition opérationnelle » de l'Union, énonce :`,
 o:[`le principe de compétence d'attribution`,`le principe d'égalité des États membres`,`le respect de l'identité nationale des États`,`le principe de coopération loyale`], a:[0,1,2,3],
 e:`D'un point de vue structurel, l'art. 4 TUE pose l'attribution des compétences, l'égalité des États et le respect de l'identité nationale ; d'un point de vue fonctionnel, le respect des fonctions essentielles des États et la coopération loyale.`},

{th:"La nature de l'UE", q:`Le système juridique de l'Union se caractérise par le fait d'être :`,
 o:[`autonome et intégré`,`hiérarchisé (le droit primaire en est la norme suprême)`,`fondé sur l'équilibre institutionnel et la coopération loyale`], a:[0,1,2],
 e:`Le système juridique de l'Union est autonome et intégré (primauté, effet direct), hiérarchisé (primaire > dérivé > PGD > droit souple) et fondé sur l'équilibre institutionnel et la coopération loyale.`},

{th:"La nature de l'UE", q:`Les principes de coopération loyale et de confiance mutuelle expriment :`,
 o:[`un lien de proximité caractéristique d'une unité fédérative`,`une simple coopération intergouvernementale`,`la primauté du droit international`], a:0,
 e:`La coopération loyale (Union → États) et la confiance mutuelle (États → États) incarnent un lien spécifique de proximité, caractéristique d'une « Union d'États de type fédéral ».`},

/* ============== OBJECTIFS & VALEURS ============== */

{th:"Objectifs & valeurs", an:1, q:`La finalité suprême de l'Union européenne est :`,
 o:[`consacrée à l'article 1er TUE`,`la création du marché intérieur`,`la création d'une Union sans cesse plus étroite entre les peuples de l'Europe`,`le développement durable`,`l'intégration économique`], a:[0,2],
 e:`L'article 1er TUE vise « une union sans cesse plus étroite entre les peuples de l'Europe » : c'est l'horizon ultime du projet. Marché intérieur, développement durable et intégration économique ne sont que des objectifs ou des moyens à son service.`},

{th:"Objectifs & valeurs", an:1, q:`Les principales valeurs de l'Union européenne sont :`,
 o:[`consacrées à l'article 4 TUE`,`le respect des droits fondamentaux`,`le respect de l'égalité et de l'identité nationale des États membres`,`le respect de l'État de droit`,`la démocratie`], a:[1,3,4],
 e:`Les valeurs figurent à l'article 2 TUE (et non l'article 4) : dignité, liberté, démocratie, égalité, État de droit, droits de l'homme. Le respect de l'identité nationale relève de l'article 4 §2 TUE (structure de l'Union), non des valeurs de l'article 2.`},

{th:"Objectifs & valeurs", q:`Les valeurs de l'Union européenne sont énoncées à l'article :`,
 o:[`2 TUE`,`4 TUE`,`3 TUE`], a:0,
 e:`Art. 2 TUE : dignité humaine, liberté, démocratie, égalité, État de droit, respect des droits de l'homme. (L'art. 3 TUE énonce les objectifs ; l'art. 4, la structure de l'Union.)`},

{th:"Objectifs & valeurs", q:`Le « noyau dur » des valeurs communes de l'Union comprend :`,
 o:[`les droits de l'homme`,`la démocratie`,`l'État de droit`], a:[0,1,2],
 e:`Le cours identifie comme « noyau dur » : les droits de l'homme, la démocratie et l'État de droit — valeurs dont la violation grave peut entraîner les sanctions de l'article 7 TUE.`},

{th:"Objectifs & valeurs", q:`La violation grave et persistante des valeurs de l'Union (art. 7 TUE) :`,
 o:[`peut entraîner la suspension de certains droits de l'État`,`relève d'une procédure introduite par le traité d'Amsterdam`,`entraîne l'exclusion automatique de l'État de l'Union`], a:[0,1],
 e:`L'art. 7 TUE (introduit par Amsterdam, volet préventif ajouté par Nice) permet de suspendre certains droits de l'État. Il n'existe en revanche aucune procédure d'exclusion d'un État membre.`},

{th:"Objectifs & valeurs", q:`Les arrêts Viking et Laval (2007) illustrent :`,
 o:[`la mise en balance des libertés de circulation et des objectifs de la politique sociale`,`la primauté sur les normes constitutionnelles`,`l'effet direct des décisions`], a:0,
 e:`Viking (C-438/05) et Laval (C-341/05) : la Communauté ayant aussi une finalité sociale, les libertés de circulation doivent être mises en balance avec les objectifs de la politique sociale.`},

{th:"Objectifs & valeurs", q:`L'objectif de développement durable (art. 3 TUE) :`,
 o:[`a pour préalable la paix`,`a pour horizon le bien-être des peuples`,`se réduit à la sécurité matérielle`], a:[0,1],
 e:`Le dessein européen englobe une « sécurité morale et sociale » (V. Michel) : le développement durable a pour préalable « la paix » et pour horizon « le bien-être des peuples » (art. 3 §1 TUE).`},

{th:"Objectifs & valeurs", q:`L'Union dispose-t-elle d'un titre de compétence spécifique en matière de droits fondamentaux ?`,
 o:[`Non (Avis 2/94 ; art. 51 §2 de la Charte)`,`Oui, depuis le traité de Lisbonne`,`Oui, depuis le traité de Maastricht`], a:0,
 e:`L'Union n'a pas de compétence spécifique pour édicter des règles en matière de droits fondamentaux (Avis 2/94, 1996 ; art. 51 §2 de la Charte) ; elle doit toutefois les respecter et, depuis Lisbonne, en assurer la promotion.`},

/* ============== APPARTENANCE & CITOYENNETÉ ============== */

{th:"Appartenance & citoyenneté", f:1, q:`Le retrait volontaire d'un État de l'Union est prévu à l'article :`,
 o:[`50 TUE`,`49 TUE`,`7 TUE`], a:0,
 e:`Art. 50 TUE (innovation du traité constitutionnel reprise par Lisbonne) : retrait volontaire et unilatéral, dont le Brexit est l'unique mise en œuvre.`},

{th:"Appartenance & citoyenneté", q:`La citoyenneté européenne a été instaurée par :`,
 o:[`le traité de Maastricht`,`les traités de Rome`,`le traité de Lisbonne`], a:0,
 e:`Le traité de Maastricht (1992) instaure la citoyenneté de l'Union. Aujourd'hui : « est citoyen de l'Union toute personne ayant la nationalité d'un État membre » (art. 9 TUE, 20 TFUE).`},

{th:"Appartenance & citoyenneté", q:`La citoyenneté de l'Union (art. 9 TUE, 20 TFUE) :`,
 o:[`découle de la nationalité d'un État membre`,`s'ajoute à la citoyenneté nationale`,`remplace la citoyenneté nationale`], a:[0,1],
 e:`La citoyenneté de l'Union découle automatiquement de la nationalité d'un État membre et « s'ajoute à la citoyenneté nationale et ne la remplace pas ».`},

{th:"Appartenance & citoyenneté", q:`La perte de la nationalité d'un État membre doit respecter le droit de l'Union, notamment le principe de proportionnalité (arrêts) :`,
 o:[`Rottmann (2010)`,`Tjebbes (2019)`,`Costa c/ Enel (1964)`], a:[0,1],
 e:`Rottmann (C-135/08) et Tjebbes (C-221/17) : la compétence des États sur la nationalité s'exerce dans le respect du droit de l'Union ; un citoyen ne peut être privé de son statut de façon injustifiée et disproportionnée.`},

{th:"Appartenance & citoyenneté", q:`La suspension de certains droits (art. 7 TUE) :`,
 o:[`sanctionne une violation grave et persistante des valeurs de l'Union`,`a été introduite par le traité d'Amsterdam`,`a été complétée d'un volet préventif par le traité de Nice`], a:[0,1,2],
 e:`L'art. 7 TUE sanctionne une « violation grave et persistante » des valeurs ; introduit par Amsterdam, il est complété d'un dispositif préventif (« risque clair de violation grave ») par le traité de Nice.`},

{th:"Appartenance & citoyenneté", q:`Parmi les droits liés à la citoyenneté de l'Union figurent :`,
 o:[`le droit de circuler et de séjourner librement`,`le droit de vote et d'éligibilité aux élections municipales et européennes dans l'État de résidence`,`la protection diplomatique et consulaire dans un État tiers`,`le droit de vote aux élections nationales de l'État de résidence`], a:[0,1,2],
 e:`Droits du citoyen : libre circulation et séjour (art. 20-21 TFUE), vote aux municipales et européennes (art. 22 TFUE), protection diplomatique et consulaire (art. 23 TFUE). Le droit de vote aux élections nationales n'en fait pas partie.`},

{th:"Appartenance & citoyenneté", q:`La directive 2004/38/CE du 29 avril 2004 concerne :`,
 o:[`le droit de circuler et de séjourner librement des citoyens de l'Union`,`la protection des données à caractère personnel`,`le mandat d'arrêt européen`], a:0,
 e:`La directive 2004/38/CE met en œuvre le droit de circuler et de séjourner librement sur le territoire des États membres (art. 20-21 TFUE).`}

];
