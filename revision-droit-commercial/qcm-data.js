/* =====================================================================
   Banque de questions QCM — Droit commercial (T. de Ravel d'Esclapon, L2)
   Rédigée à partir des notes de cours et des SUJETS CORRIGÉS, en intégrant
   les PIÈGES TYPES (immatriculation obligation/condition, cautionnement
   par la forme, bail dérogatoire vs occupation précaire, arrêt 12 juin
   2019, garanties du vendeur, droit de préemption de la commune, etc.).

   ⚠️ Chaque question peut comporter UNE OU PLUSIEURS bonnes réponses.

   Entrée : th (chapitre) · q (énoncé) · o (options) ·
            a (index correct : nombre OU tableau) · e (corrigé) ·
            f:1 (ordre fixe, sinon mélangé) · an:1 (annale)
   ===================================================================== */

window.QCM_THEMES = [
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

window.QCM = [

/* ============== INTRO · SOURCES & HISTOIRE ============== */
{th:"Intro · Sources & histoire", q:`À propos des usages conventionnels en droit commercial :`,
 o:[`ils sont supplétifs : ils s'appliquent sauf s'ils sont expressément écartés`,
    `ils ne sont opposables qu'aux professionnels d'une même branche`,
    `ils ont la valeur obligatoire de la coutume, même ignorés des parties`,
    `leur preuve se fait par parères (attestations de CCI, syndicats)`], a:[0,1,3],
 e:`Le caractère obligatoire comme la coutume caractérise l'usage DE DROIT, pas l'usage conventionnel, qui tire sa force de l'autonomie de la volonté.`},

{th:"Intro · Sources & histoire", q:`Le Code de commerce actuel résulte :`,
 o:[`de l'ordonnance du 18 septembre 2000, à droit constant`,
    `de la loi Pinel du 18 juin 2014`,
    `directement du Code Savary de 1673`,
    `d'une recodification qui a mis fin à la décodification`], a:[0,3],
 e:`Recodification à droit constant (ord. 18 sept. 2000 pour la partie législative), mettant fin à la décodification ; partie réglementaire en 2007.`},

/* ============== T1 · L'ACTE DE COMMERCE ============== */
{th:"T1 · L'acte de commerce", q:`L'achat pour revendre (art. L. 110-1, 1°) suppose :`,
 o:[`un achat préalable et une intention spéculative concomitante à l'achat`,
    `une simple intention de revendre née après l'achat`,
    `l'absence de tout but lucratif`], a:0,
 e:`Il faut un achat préalable + une intention de revendre concomitante à l'achat + une intention spéculative.`},

{th:"T1 · L'acte de commerce", q:`Échappent à l'achat pour revendre, faute d'achat préalable :`,
 o:[`l'agriculture`,`les productions intellectuelles (auteurs, inventeurs)`,`les industries extractives`,`le marchand de biens`], a:[0,1,2],
 e:`Le marchand de biens, lui, est commercial (Cass. com., 10 janv. 2018) ; en revanche la promotion immobilière reste civile.`},

{th:"T1 · L'acte de commerce", q:`Sont des actes de commerce par la forme :`,
 o:[`la lettre de change`,`les sociétés commerciales par la forme (SNC, SARL, SA…)`,`le cautionnement de dettes commerciales`,`le fonds de commerce`], a:[0,1,2],
 e:`Le fonds de commerce est un bien, pas un acte. La 3e catégorie (cautionnement de dette commerciale) date de l'ord. du 15 sept. 2021.`},

{th:"T1 · L'acte de commerce", q:`La signature d'une lettre de change :`,
 o:[`confère la qualité de commerçant au signataire`,
    `est un acte de commerce mais ne confère pas la qualité de commerçant`,
    `est toujours un acte civil`], a:1,
 e:`Piège classique : l'acte de commerce par la forme ne confère pas la qualité de commerçant.`},

{th:"T1 · L'acte de commerce", q:`Depuis l'ordonnance du 15 septembre 2021, le cautionnement d'une dette commerciale est :`,
 o:[`un acte de commerce par la forme (selon la nature de la dette garantie)`,
    `un acte purement civil`,
    `un acte de commerce uniquement par accessoire`], a:0,
 e:`Art. L. 110-1, 11° : il a quitté la logique de l'accessoire pour devenir acte de commerce par la forme ; la commercialité dépend de la dette garantie.`},

{th:"T1 · L'acte de commerce", q:`La théorie de l'accessoire :`,
 o:[`ne joue que dans un sens (un acte civil devient commercial)`,
    `est réciproque (un acte de commerce peut aussi devenir civil)`,
    `ne concerne que les délits`], a:1,
 e:`« L'accessoire suit le sort du principal » : règle réciproque (ex. les achats d'un artisan, acte de commerce devenu civil).`},

{th:"T1 · L'acte de commerce", q:`Dans un acte mixte, s'agissant de la preuve :`,
 o:[`le commerçant prouve par tous moyens contre le non-commerçant`,
    `le non-commerçant prouve par tous moyens contre le commerçant, mais l'inverse n'est pas vrai`,
    `les deux parties sont soumises aux règles civiles`], a:1,
 e:`Cass. com., 12 juin 2019 : le commerçant doit prouver selon les règles civiles contre le non-commerçant ; l'inverse n'est pas vrai.`},

{th:"T1 · L'acte de commerce", q:`Constituent des règles uniformes (et non dualistes) de l'acte mixte :`,
 o:[`la nullité des clauses attributives de compétence territoriale`,
    `l'inopposabilité de la clause compromissoire au non-professionnel`,
    `la prescription de 5 ans`,
    `la présomption de solidarité`], a:[0,1,2],
 e:`La solidarité n'est présumée qu'entre commerçants (règle dualiste). Les trois autres sont uniformes.`},

/* ============== T1 · LA QUALITÉ DE COMMERÇANT ============== */
{th:"T1 · La qualité de commerçant", q:`Pour une personne physique, l'immatriculation au RCS :`,
 o:[`est une condition de la qualité de commerçant`,
    `fait seulement présumer la qualité de commerçant (présomption simple)`,
    `n'a aucun effet`], a:1,
 e:`Piège récurrent : l'immatriculation est une OBLIGATION, pas une condition (d'où le commerçant de fait). Pour la PP elle ne fait que présumer la qualité.`},

{th:"T1 · La qualité de commerçant", q:`La qualité de commerçant suppose :`,
 o:[`une profession habituelle d'actes de commerce`,`l'indépendance de l'exercice`,`la capacité commerciale`,`l'immatriculation, à peine de nullité de la qualité`], a:[0,1,2],
 e:`L'immatriculation est une obligation, non une condition. Les conditions : profession habituelle + indépendance + capacité/absence d'incompatibilité.`},

{th:"T1 · La qualité de commerçant", q:`Le commerçant de fait :`,
 o:[`bénéficie de la propriété commerciale`,
    `supporte les obligations du commerçant sans bénéficier de ses droits`,
    `échappe à la fiscalité et à la prescription commerciales`], a:1,
 e:`Il subit les charges (preuve libre contre lui, fiscalité/prescription commerciales) mais perd les droits, au premier rang la propriété commerciale.`},

{th:"T1 · La qualité de commerçant", q:`L'artisan :`,
 o:[`est par principe commerçant`,
    `exerce une activité civile (sauf spéculation sur la main-d'œuvre/les marchandises ou dépassement du seuil)`,
    `ne relève jamais du tribunal de commerce`], a:1,
 e:`Activité civile (< 11 salariés) ; requalification commerciale en cas de spéculation. Depuis 2022, compétence du tribunal de commerce.`},

{th:"T1 · La qualité de commerçant", q:`Ne sont PAS commerçants :`,
 o:[`le salarié d'un commerçant`,`l'agent commercial (mandataire indépendant)`,`le dirigeant d'une SARL`,`l'exploitant qui agit en son nom et à ses risques`], a:[0,1,2],
 e:`Celui qui agit pour autrui n'est pas commerçant (salarié, VRP, agent commercial, dirigeant social). Le dernier, lui, l'est.`},

/* ============== T1 · STATUT & OBLIGATIONS ============== */
{th:"T1 · Statut & obligations", q:`Pour une personne morale, l'immatriculation :`,
 o:[`fait seulement présumer la qualité de commerçant`,
    `conditionne l'acquisition de la personnalité morale`,
    `est facultative`], a:1,
 e:`Distinction clé : PP → présomption simple ; PM → l'immatriculation conditionne la personnalité morale (règle de fond).`},

{th:"T1 · Statut & obligations", q:`La liberté de la preuve (art. L. 110-3) :`,
 o:[`joue entre commerçants, pour un acte commercial`,
    `s'applique à tout litige, même civil`,
    `dispense d'écrit même lorsqu'il est exigé ad validitatem`], a:0,
 e:`Elle ne joue qu'entre commerçants/contre un commerçant pour un acte commercial ; subsiste le formalisme ad validitatem (lettre de change, sociétés, cautionnement art. 2297).`},

{th:"T1 · Statut & obligations", q:`Les statuts ouverts au conjoint du commerçant (loi du 22 mai 2019) :`,
 o:[`conjoint salarié`,`conjoint collaborateur`,`conjoint associé`,`conjoint gérant de fait`], a:[0,1,2],
 e:`Trois statuts : salarié, collaborateur (limité à 5 ans), associé. Choix obligatoire pour le conjoint qui exerce une activité régulière.`},

{th:"T1 · Statut & obligations", q:`Le conjoint associé :`,
 o:[`est nécessairement commerçant`,
    `n'est pas commerçant (sauf s'il est associé d'une SNC)`,
    `bénéficie d'une présomption de subordination`], a:1,
 e:`Être associé ne confère pas la qualité de commerçant (sauf SNC). La présomption irréfragable de subordination concerne le conjoint salarié.`},

/* ============== T2 · LE PATRIMOINE DU COMMERÇANT ============== */
{th:"T2 · Le patrimoine du commerçant", q:`Depuis la loi du 14 février 2022, l'entrepreneur individuel :`,
 o:[`doit déclarer son patrimoine professionnel devant notaire`,
    `dispose de deux patrimoines de plein droit et sans formalité`,
    `ne peut plus protéger sa résidence principale`], a:1,
 e:`Séparation de plein droit, sans formalité, du patrimoine professionnel (biens utiles) et du patrimoine personnel ; remplace l'EIRL.`},

{th:"T2 · Le patrimoine du commerçant", q:`Peuvent atteindre les DEUX patrimoines de l'entrepreneur individuel :`,
 o:[`le fisc en cas de manœuvres frauduleuses`,
    `les organismes sociaux en cas de manquement grave et répété`,
    `tout créancier professionnel ordinaire`,
    `le créancier au profit duquel l'EI a renoncé à la séparation`], a:[0,1,3],
 e:`Art. L. 526-24 (fisc/social) et renonciation L. 526-25. Un créancier professionnel ordinaire reste cantonné au patrimoine professionnel.`},

{th:"T2 · Le patrimoine du commerçant", q:`La résidence principale du commerçant est :`,
 o:[`insaisissable de plein droit à l'égard des créanciers professionnels`,
    `insaisissable seulement après déclaration notariée`,
    `toujours saisissable`], a:0,
 e:`Insaisissabilité de plein droit (loi Macron 2015, art. L. 526-1). La déclaration notariée (DNI) vise les AUTRES biens fonciers.`},

/* ============== T2 · LE FONDS DE COMMERCE ============== */
{th:"T2 · Le fonds de commerce", q:`La clientèle, dans le fonds de commerce :`,
 o:[`est un élément accessoire`,
    `est l'élément essentiel : sans clientèle, pas de fonds`,
    `peut être purement virtuelle`], a:1,
 e:`Élément essentiel ; elle doit être certaine et actuelle (pas purement virtuelle), commerciale et propre.`},

{th:"T2 · Le fonds de commerce", q:`La clientèle d'un fonds de commerce doit être :`,
 o:[`certaine et actuelle`,`commerciale`,`personnelle / propre au commerçant`,`nécessairement nationale`], a:[0,1,2],
 e:`Trois caractères. Les clientèles civiles (ex. fonds libéral) ne forment pas un fonds de commerce.`},

{th:"T2 · Le fonds de commerce", q:`Sont EXCLUS du fonds de commerce :`,
 o:[`les immeubles`,`les dettes`,`les créances`,`la clientèle`], a:[0,1,2],
 e:`Le fonds ne comprend ni immeubles, ni dettes, ni créances (pas une universalité de droit). La clientèle en est au contraire l'élément essentiel.`},

{th:"T2 · Le fonds de commerce", q:`Le nom commercial :`,
 o:[`se confond avec la dénomination sociale`,
    `est l'appellation sous laquelle le commerce est exploité (≠ dénomination sociale)`,
    `est obligatoire`], a:1,
 e:`À distinguer de la dénomination sociale, nom de la personne morale (affaire Bordas). Le nom commercial est facultatif.`},

{th:"T2 · Le fonds de commerce", q:`Le fonds de commerce est :`,
 o:[`un immeuble`,`un meuble incorporel`,`une universalité de droit comprenant les dettes`], a:1,
 e:`Bien meuble incorporel ; rejet de l'universalité de droit (ni dettes ni créances).`},

/* ============== T2 · OPÉRATIONS SUR LE FONDS ============== */
{th:"T2 · Opérations sur le fonds", q:`La location-gérance :`,
 o:[`suppose l'existence d'un fonds (donc d'une clientèle)`,
    `confère au gérant la qualité de commerçant`,
    `est d'ordre public`,
    `ouvre au gérant un droit au renouvellement`], a:[0,1,2],
 e:`Le gérant n'a PAS de droit au renouvellement. Le contrat est d'ordre public et suppose un fonds réel.`},

{th:"T2 · Opérations sur le fonds", q:`À l'égard des tiers, le loueur d'un fonds en location-gérance est solidaire des dettes d'exploitation du gérant :`,
 o:[`jusqu'à la publication du contrat`,`pendant toute la durée du contrat`,`jamais`], a:0,
 e:`Art. L. 144-7 : solidarité jusqu'à la publication ; en fin de contrat, déchéance du terme des dettes du gérant (L. 144-9).`},

{th:"T2 · Opérations sur le fonds", q:`Le vendeur impayé d'un fonds de commerce est protégé par :`,
 o:[`le privilège du vendeur (art. L. 141-5)`,
    `l'action résolutoire (art. L. 141-6)`,
    `un droit de rétention systématique sur le fonds`,
    `un nantissement automatique`], a:[0,1],
 e:`Les garanties du vendeur impayé : privilège du vendeur (inscription 30 jours, droit de préférence et de suite) + action résolutoire.`},

{th:"T2 · Opérations sur le fonds", q:`Le droit de préemption sur un fonds de commerce appartient :`,
 o:[`aux salariés de l'entreprise`,`à la commune (art. L. 214-1 C. urb.)`,`au bailleur`], a:1,
 e:`Piège : les salariés ont seulement un droit d'information et la faculté de présenter une offre (loi ESS) ; le droit de préemption est celui de la commune.`},

{th:"T2 · Opérations sur le fonds", q:`La suppression de la condition d'exploitation personnelle préalable (location-gérance) résulte :`,
 o:[`de la loi Pinel (2014)`,`de la loi du 19 juillet 2019`,`de la loi du 14 février 2022`], a:1,
 e:`Piège : c'est la loi du 19 juillet 2019 (abrogation des art. L. 144-3 à L. 144-5), pas la loi Pinel.`},

/* ============== T4 · LES BAUX COMMERCIAUX ============== */
{th:"T4 · Les baux commerciaux", q:`Le bail dérogatoire :`,
 o:[`suppose une précarité objective extérieure aux parties`,
    `repose sur une courte durée (≤ 3 ans) sans condition de précarité`,
    `ouvre droit au renouvellement`], a:1,
 e:`Piège : la précarité objective caractérise la convention d'occupation précaire. Le bail dérogatoire repose seulement sur une durée ≤ 3 ans.`},

{th:"T4 · Les baux commerciaux", q:`La convention d'occupation précaire :`,
 o:[`exige des circonstances particulières indépendantes de la volonté des parties`,
    `est limitée à 3 ans`,
    `est un bail soumis au statut`], a:0,
 e:`Elle suppose une précarité objective (ex. immeuble voué à la démolition) ; ce n'est pas un bail, valable quelle que soit sa durée.`},

{th:"T4 · Les baux commerciaux", q:`L'indemnité d'éviction :`,
 o:[`est due par le bailleur qui refuse le renouvellement`,
    `répare le préjudice (valeur du fonds + frais)`,
    `s'accompagne d'un droit au maintien dans les lieux jusqu'au paiement`,
    `prive le bailleur de tout droit de repentir`], a:[0,1,2],
 e:`Le bailleur conserve un droit de repentir (art. L. 145-58, dans les 15 jours de la décision passée en force de chose jugée).`},

{th:"T4 · Les baux commerciaux", q:`La déspécialisation simple (art. L. 145-47) :`,
 o:[`permet une activité totalement différente, avec l'accord du bailleur`,
    `permet d'ajouter une activité connexe ou complémentaire, sur simple notification`,
    `n'existe pas`], a:1,
 e:`La déspécialisation simple (ordre public) = activités connexes/complémentaires sur notification. L'activité différente relève de la plénière (L. 145-48).`},

{th:"T4 · Les baux commerciaux", q:`Le déplafonnement du loyer suppose :`,
 o:[`une modification matérielle des facteurs locaux de commercialité (> 10 % de la valeur locative)`,
    `l'accord du locataire`,
    `une clause-recette`], a:0,
 e:`Déplafonnement → fixation à la valeur locative, avec lissage à 10 %/an (loi Pinel).`},

{th:"T4 · Les baux commerciaux", q:`Le refus de renouvellement n'ouvre droit à AUCUNE indemnité d'éviction :`,
 o:[`en cas de motif grave et légitime contre le preneur`,
    `si l'immeuble est insalubre/dangereux et doit être démoli`,
    `dans tous les cas où le bailleur le souhaite`], a:[0,1],
 e:`Art. L. 145-17 : éviction justifiée (faute du preneur ; immeuble insalubre). Sinon l'indemnité est toujours due.`},

/* ============== T5 · CONCURRENCE DÉLOYALE ============== */
{th:"T5 · Concurrence déloyale", q:`L'action en concurrence déloyale est fondée sur :`,
 o:[`un droit privatif (comme la marque)`,`la responsabilité civile délictuelle (art. 1240)`,`un contrat`], a:1,
 e:`Fondement délictuel ; ni droit privatif ni faute intentionnelle requis. Le préjudice est présumé (Cass. com., 12 févr. 2020).`},

{th:"T5 · Concurrence déloyale", q:`Constituent des actes de concurrence déloyale :`,
 o:[`le dénigrement`,`le parasitisme`,`la confusion`,`la désorganisation`], a:[0,1,2,3],
 e:`Les quatre comportements classiques : dénigrement, parasitisme, confusion, désorganisation.`},

/* ============================================================
   QUESTIONS COMPLÉMENTAIRES (banque étendue)
   ============================================================ */

/* ------ Intro · Sources & histoire ------ */
{th:"Intro · Sources & histoire", q:`La liberté du commerce et de l'industrie est consacrée par :`,
 o:[`le décret d'Allarde (1791)`,`la loi Le Chapelier (1791)`,`le Code Savary (1673)`,`la loi PACTE (2019)`], a:0,
 e:`Décret d'Allarde (2-17 mars 1791). La loi Le Chapelier (14-17 juin 1791) supprime, elle, les corporations.`},

{th:"Intro · Sources & histoire", q:`Les usages de droit :`,
 o:[`sont obligatoires et s'apparentent à la coutume`,`peuvent être contra legem (ex. solidarité, anatocisme)`,`tirent leur force de l'autonomie de la volonté`,`font l'objet de renvois légaux (art. 1194 C. civ.)`], a:[0,1,3],
 e:`L'autonomie de la volonté fonde l'usage CONVENTIONNEL. L'usage de droit s'apparente à la coutume (secundum/praeter/contra legem).`},

{th:"Intro · Sources & histoire", q:`La Convention de Vienne du 11 avril 1980 :`,
 o:[`régit la vente internationale de marchandises`,`se superpose aux lois nationales`,`harmonise les effets de commerce`,`a créé le RNE`], a:[0,1],
 e:`Superposition d'une loi uniforme (vente internationale de marchandises). Les effets de commerce relèvent des Conventions de Genève (1930-1931).`},

/* ------ T1 · L'acte de commerce ------ */
{th:"T1 · L'acte de commerce", q:`Sont des actes de commerce par nature :`,
 o:[`la location de meubles`,`la location d'immeubles`,`l'achat d'un immeuble pour le revendre (marchand de biens)`,`la promotion immobilière`], a:[0,2],
 e:`La location d'immeubles et la promotion immobilière restent civiles ; la location de meubles et le marchand de biens sont commerciaux.`},

{th:"T1 · L'acte de commerce", q:`En matière d'assurance :`,
 o:[`les sociétés d'assurance à primes fixes sont commerciales`,`les mutuelles sont commerciales`,`l'assurance figure expressément dans la liste de l'art. L. 110-1`], a:0,
 e:`L'assurance n'est pas dans la liste légale ; seules les sociétés à primes fixes sont commerciales, pas les mutuelles.`},

{th:"T1 · L'acte de commerce", q:`Le commissionnaire :`,
 o:[`agit en son nom propre pour le compte d'un commettant`,`se borne à mettre en rapport des contractants`,`agit au nom et pour le compte du représenté`], a:0,
 e:`Le courtier met en rapport (sans représenter) ; l'agent commercial agit au nom du représenté ; le commissionnaire agit en son nom propre.`},

{th:"T1 · L'acte de commerce", q:`La lettre de change :`,
 o:[`est un acte abstrait`,`obéit à l'inopposabilité des exceptions`,`est un effet de commerce`,`confère la qualité de commerçant à son signataire`], a:[0,1,2],
 e:`Acte abstrait, inopposabilité des exceptions, effet de commerce — mais elle ne confère PAS la qualité de commerçant.`},

{th:"T1 · L'acte de commerce", q:`Le gage constitué pour garantir une dette commerciale :`,
 o:[`suit le régime commercial (preuve par tous moyens)`,`reste toujours civil`,`est un acte de commerce par la forme`], a:0,
 e:`Accessoire objectif : l'acte emprunte la commercialité de l'opération-support (Cass. com., 9 mai 2001).`},

{th:"T1 · L'acte de commerce", q:`La prescription des obligations commerciales est en principe de :`,
 o:[`5 ans (art. L. 110-4)`,`10 ans`,`30 ans`], a:0,
 e:`5 ans depuis la loi du 17 juin 2008 (sauf prescriptions spéciales plus courtes, ex. 2 ans pour les baux commerciaux).`},

/* ------ T1 · La qualité de commerçant ------ */
{th:"T1 · La qualité de commerçant", q:`S'agissant de la capacité commerciale :`,
 o:[`le mineur non émancipé ne peut être commerçant`,`le mineur émancipé peut l'être sur autorisation`,`le mineur de 16 ans peut créer et gérer une entreprise individuelle ou une société unipersonnelle`,`le majeur sous tutelle peut être commerçant`], a:[0,1,2],
 e:`Le majeur sous tutelle ne peut être ni devenir commerçant. La curatelle est possible avec assistance du curateur.`},

{th:"T1 · La qualité de commerçant", q:`Sont frappés d'une incompatibilité avec l'exercice du commerce :`,
 o:[`les avocats`,`les notaires`,`les fonctionnaires`,`les commerçants étrangers`], a:[0,1,2],
 e:`Le commerçant étranger relève d'un régime d'autorisation (CESEDA), ce n'est pas une incompatibilité.`},

{th:"T1 · La qualité de commerçant", q:`La personne en situation d'incompatibilité qui exerce néanmoins le commerce :`,
 o:[`a la qualité de commerçant (sanctions disciplinaires/pénales) mais sans les avantages`,`n'est jamais commerçante`,`perd sa personnalité juridique`], a:0,
 e:`Elle a la qualité de commerçant et en supporte les charges, mais ne bénéficie pas des avantages (ex. propriété commerciale).`},

{th:"T1 · La qualité de commerçant", q:`L'agriculteur :`,
 o:[`exerce une activité civile (critère du cycle biologique, art. L. 311-1 C. rural)`,`accomplit des activités civiles par accessoire dans le prolongement de la production`,`devient commerçant dès qu'il vend sa récolte`], a:[0,1],
 e:`Activité civile ; les activités de prolongement restent civiles par accessoire tant qu'elles demeurent accessoires.`},

/* ------ T1 · Statut & obligations ------ */
{th:"T1 · Statut & obligations", q:`La comptabilité du commerçant comprend :`,
 o:[`le livre-journal`,`le grand livre`,`les comptes annuels (bilan, compte de résultat, annexe)`,`le registre des bénéficiaires effectifs`], a:[0,1,2],
 e:`Livres comptables + comptes annuels (conservation 10 ans). Le registre des bénéficiaires effectifs est une autre obligation.`},

{th:"T1 · Statut & obligations", q:`Les comptes annuels doivent être :`,
 o:[`réguliers`,`sincères`,`donner une image fidèle (art. L. 123-14)`,`publiés au BODACC dans tous les cas`], a:[0,1,2],
 e:`Réguliers, sincères, image fidèle ; permanence des méthodes et prudence. La publication n'est pas systématique pour toutes les structures.`},

{th:"T1 · Statut & obligations", q:`Les registres et documents professionnels :`,
 o:[`ont, contre leur auteur, la force probante d'un écrit sous signature privée (art. 1378 C. civ.)`,`peuvent être divisés par celui qui s'en prévaut pour n'en garder que le favorable`,`(comptabilité régulière) font preuve entre commerçants pour faits de commerce (L. 123-23)`], a:[0,2],
 e:`Celui qui s'en prévaut ne peut PAS les diviser. La comptabilité régulièrement tenue fait preuve entre commerçants.`},

{th:"T1 · Statut & obligations", q:`Le conjoint collaborateur :`,
 o:[`exerce une activité régulière sans rémunération ni qualité d'associé`,`bénéficie d'un mandat présumé d'accomplir les actes d'administration`,`voit son statut limité à 5 ans`,`est présumé subordonné de façon irréfragable`], a:[0,1,2],
 e:`La subordination présumée irréfragablement concerne le conjoint SALARIÉ, pas le collaborateur.`},

{th:"T1 · Statut & obligations", q:`Le registre national des entreprises (RNE) :`,
 o:[`est entré en vigueur le 1er janvier 2023`,`est tenu par l'INPI`,`a supprimé les RCS locaux`,`est alimenté par le guichet unique électronique`], a:[0,1,3],
 e:`Les RCS locaux et le SIRENE subsistent ; le RNE se substitue notamment au répertoire des métiers et au registre de l'agriculture.`},

/* ------ T2 · Le patrimoine du commerçant ------ */
{th:"T2 · Le patrimoine du commerçant", q:`Le patrimoine professionnel de l'entrepreneur individuel comprend :`,
 o:[`les biens utiles à l'activité`,`le fonds de commerce`,`la résidence principale`,`le matériel et les marchandises`], a:[0,1,3],
 e:`La résidence principale relève du patrimoine personnel (et est insaisissable de plein droit à l'égard des créanciers pro).`},

{th:"T2 · Le patrimoine du commerçant", q:`La protection patrimoniale de l'entrepreneur individuel :`,
 o:[`ne vaut que pour les créances nées après le 15 mai 2022`,`joue de plein droit et sans formalité`,`nécessite une déclaration notariée`], a:[0,1],
 e:`Séparation de plein droit, sans formalité ; mais seulement pour les créances postérieures au 15 mai 2022.`},

{th:"T2 · Le patrimoine du commerçant", q:`La déclaration notariée d'insaisissabilité (DNI) :`,
 o:[`concerne les biens fonciers autres que la résidence principale`,`est notariée à peine de nullité`,`est publiée`,`protège contre les créanciers personnels`], a:[0,1,2],
 e:`La DNI protège contre les créanciers PROFESSIONNELS ; la résidence principale, elle, est insaisissable de plein droit (loi Macron).`},

{th:"T2 · Le patrimoine du commerçant", q:`Les deux patrimoines de l'entrepreneur individuel sont réunis :`,
 o:[`en cas de cessation d'activité`,`en cas de décès`,`en cas de simple changement d'activité`], a:[0,1],
 e:`Réunion en cas de cessation d'activité ou de décès (art. L. 526-22).`},

/* ------ T2 · Le fonds de commerce ------ */
{th:"T2 · Le fonds de commerce", q:`Le fonds de commerce :`,
 o:[`n'a pas de définition légale`,`a été consacré par la loi Cordelet de 1909`,`comprend les immeubles affectés à l'exploitation`], a:[0,1],
 e:`Les immeubles ne font jamais partie du fonds, même affectés à l'exploitation.`},

{th:"T2 · Le fonds de commerce", q:`La clientèle civile (ex. profession libérale) :`,
 o:[`peut faire l'objet d'un « fonds libéral » (Cass. 1re civ., 7 nov. 2000)`,`constitue un fonds de commerce`,`est cessible sous conditions`], a:[0,2],
 e:`La clientèle civile ne constitue pas un fonds de COMMERCE ; elle peut former un fonds libéral, cessible sous conditions.`},

{th:"T2 · Le fonds de commerce", q:`L'achalandage désigne :`,
 o:[`les clients de passage attirés par l'emplacement`,`les clients fidèles attachés à la personne`,`les dettes du fonds`], a:0,
 e:`Achalandage = clients de passage (emplacement) ; clientèle = clients attachés à la personne / au fonds.`},

{th:"T2 · Le fonds de commerce", q:`Le fonds de commerce, bien meuble incorporel :`,
 o:[`échappe à la règle « en fait de meubles, possession vaut titre » (Cass. com., 7 mars 2006)`,`peut être acquis par usucapion`,`ne comprend ni les dettes ni les créances (Cass. com., 27 janv. 1998)`], a:[0,2],
 e:`Pas d'usucapion (les règles immobilières sont inapplicables) ; l'art. 2276 est écarté.`},

{th:"T2 · Le fonds de commerce", q:`L'enseigne :`,
 o:[`est le signe visible qui individualise et localise l'établissement`,`est protégée à proportion de sa notoriété`,`est obligatoire`,`se confond avec la marque`], a:[0,1],
 e:`Élément incorporel facultatif, distinct de la marque (droit privatif) ; protégée par l'action en concurrence déloyale.`},

{th:"T2 · Le fonds de commerce", q:`Sont transmis de plein droit avec le fonds, par exception :`,
 o:[`les contrats de travail (art. L. 1224-1 C. trav.)`,`le contrat d'assurance`,`le bail commercial`,`tous les contrats en cours`], a:[0,1,2],
 e:`Les contrats ne sont pas transmis de plein droit, SAUF exceptions légales (travail, assurance, édition, bail).`},

/* ------ T2 · Opérations sur le fonds ------ */
{th:"T2 · Opérations sur le fonds", q:`Le privilège du vendeur de fonds (art. L. 141-5) :`,
 o:[`doit être inscrit dans les 30 jours`,`porte, à défaut de désignation, sur les éléments incorporels`,`confère un droit de préférence et un droit de suite`,`porte sur les immeubles`], a:[0,1,2],
 e:`Garantie du vendeur impayé sur le fonds (meuble incorporel) ; les immeubles n'en font pas partie.`},

{th:"T2 · Opérations sur le fonds", q:`L'opposition des créanciers au paiement du prix de cession :`,
 o:[`bloque le prix`,`expose l'acquéreur qui paie quand même à payer deux fois (art. L. 141-17)`,`s'exerce dans les 10 jours`,`transfère la propriété du fonds`], a:[0,1,2],
 e:`Délai d'opposition de 10 jours ; l'acquéreur qui paie pendant ce délai paie mal.`},

{th:"T2 · Opérations sur le fonds", q:`Le nantissement du fonds de commerce :`,
 o:[`est une sûreté réelle sans dépossession`,`porte sur les éléments incorporels (pas les marchandises)`,`doit être inscrit dans les 30 jours`,`confère un droit de préférence et de suite`], a:[0,1,2,3],
 e:`Le commerçant continue d'exploiter ; le créancier nanti a un droit de préférence et de suite.`},

{th:"T2 · Opérations sur le fonds", q:`À la fin de la location-gérance :`,
 o:[`les dettes du gérant sont frappées de déchéance du terme (art. L. 144-9)`,`le fonds est restitué au loueur`,`le gérant a droit au renouvellement`], a:[0,1],
 e:`Pas de droit au renouvellement pour le gérant ; restitution du fonds et déchéance du terme des dettes.`},

{th:"T2 · Opérations sur le fonds", q:`Les mentions obligatoires de l'ancien art. L. 141-1 (cession de fonds) :`,
 o:[`ont été supprimées par la loi du 19 juillet 2019`,`sont remplacées par le droit commun de l'information (art. 1112-1 C. civ.)`,`sont toujours prescrites à peine de nullité`], a:[0,1],
 e:`La loi du 19 juillet 2019 a supprimé ce formalisme ; application du droit commun de l'obligation d'information.`},

/* ------ T4 · Les baux commerciaux ------ */
{th:"T4 · Les baux commerciaux", q:`Le bail commercial :`,
 o:[`a une durée de 9 ans`,`ouvre au preneur une faculté de résiliation triennale d'ordre public`,`peut être résilié librement par le bailleur à tout moment`], a:[0,1],
 e:`Durée de 9 ans ; résiliation triennale du preneur d'ordre public ; le bailleur ne peut résilier que dans des cas limités.`},

{th:"T4 · Les baux commerciaux", q:`La clause résolutoire du bail commercial :`,
 o:[`ne produit effet qu'un mois après un commandement resté infructueux (art. L. 145-41)`,`est d'ordre public quant à ce délai`,`permet au juge d'accorder des délais et de la suspendre`], a:[0,1,2],
 e:`Délai d'un mois après commandement (ordre public, un délai plus court est nul) ; le juge peut accorder des délais (art. 1343-5).`},

{th:"T4 · Les baux commerciaux", q:`Le droit au renouvellement suppose :`,
 o:[`l'immatriculation`,`l'exploitation effective du fonds pendant 3 ans (art. L. 145-8)`,`un congé donné 6 mois à l'avance`,`l'accord systématique du bailleur`], a:[0,1,2],
 e:`Le bailleur peut toujours refuser le renouvellement, mais doit alors verser une indemnité d'éviction.`},

{th:"T4 · Les baux commerciaux", q:`La déspécialisation plénière (art. L. 145-48) :`,
 o:[`permet d'exercer une activité différente`,`requiert l'accord du bailleur (réputé acquis à défaut de réponse sous 3 mois)`,`permet au tribunal de passer outre un refus injustifié (L. 145-52)`,`peut entraîner une révision du loyer`], a:[0,1,2,3],
 e:`Activité différente ; formalisme renforcé (créanciers, colocataires) ; le juge peut passer outre un refus non justifié.`},

{th:"T4 · Les baux commerciaux", q:`Le statut des baux commerciaux :`,
 o:[`est d'ordre public`,`rend les clauses contraires réputées non écrites (art. L. 145-15)`,`peut être adopté par soumission volontaire même si les conditions ne sont pas réunies`], a:[0,1,2],
 e:`Ordre public de protection ; soumission conventionnelle possible (Ass. plén., 17 mai 2002).`},

{th:"T4 · Les baux commerciaux", q:`Le congé du bail commercial :`,
 o:[`est donné 6 mois à l'avance`,`est donné par acte extrajudiciaire`,`à défaut, entraîne une tacite prolongation`,`peut être donné à tout moment et sans forme`], a:[0,1,2],
 e:`Congé donné 6 mois à l'avance, par acte extrajudiciaire ; à défaut, tacite prolongation.`},

{th:"T4 · Les baux commerciaux", q:`Les clauses-recettes (loyer indexé sur le chiffre d'affaires) :`,
 o:[`sont incompatibles avec la révision légale`,`sont régies par la seule convention (Cass. 3e civ., 29 nov. 2018)`,`entraînent un plafonnement automatique`], a:[0,1],
 e:`Régies par la seule convention, à l'écart de la révision légale (donc pas de plafonnement légal automatique).`},

/* ------ T5 · Concurrence déloyale ------ */
{th:"T5 · Concurrence déloyale", q:`Le dénigrement :`,
 o:[`consiste à jeter le discrédit sur un concurrent, ses produits ou services`,`se distingue de la critique licite`,`suppose nécessairement une intention de nuire`], a:[0,1],
 e:`La concurrence déloyale ne suppose pas de faute intentionnelle : une faute suffit, le préjudice étant présumé.`},

{th:"T5 · Concurrence déloyale", q:`Le parasitisme consiste à :`,
 o:[`se placer dans le sillage d'autrui pour profiter, sans bourse délier, de ses investissements ou de sa notoriété`,`imiter les signes distinctifs pour créer un risque de confusion`,`débaucher massivement les salariés d'un concurrent`], a:0,
 e:`L'imitation des signes = confusion ; le débauchage massif = désorganisation.`},

{th:"T5 · Concurrence déloyale", q:`L'action en concurrence déloyale permet d'obtenir :`,
 o:[`des dommages-intérêts`,`la cessation des agissements (injonction, publication de la décision)`,`l'annulation de la marque du concurrent`], a:[0,1],
 e:`Réparation + cessation. L'annulation d'une marque relève du droit des marques (contrefaçon), pas de la concurrence déloyale.`}

];
