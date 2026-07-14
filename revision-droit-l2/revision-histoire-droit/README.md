# Révisions — Histoire du droit des obligations

Outil de révision personnel basé sur le cours de **Céline Drand** (L2), généré à partir de vos notes Obsidian (*Introduction* / *Formation des contrats* / *Détermination du contenu* / *Effets du contrat*).

## Ouvrir l'application

Depuis la page d'accueil **`../index.html`** (Mes révisions), ou **double-cliquez sur `index.html`**. Aucune installation, aucun serveur, hors ligne.

## Trois modes

- **📚 Répertoire** — la liste des **auteurs/juristes, notions, textes (sources & articles) et adages** du cours, avec leur signification. Filtrez par **type**, par **chapitre**, ou cherchez un mot-clé.
- **🎴 Flashcards** — révisez par cartes, chapitre par chapitre, avec **répétition espacée (Leitner)**. Choisissez le sens (Référence → Sens, Sens → Référence, ou Mixte).
- **📝 QCM** — un QCM **type annale** (50 questions / 1 h), avec ~150 questions calquées sur trois annales : **janvier 2019**, **rattrapage 2018-19** et **janvier 2023**. Deux barèmes au choix : **2023** (+1 / −0,5 / sans réponse 0) ou **2019** (sans réponse = −0,5 aussi). Mode **Examen** (corrigé expliqué à la fin, chronomètre optionnel de 1,2 min/question) ou **Entraînement** (correction immédiate). Les questions effectivement posées à une annale portent un badge « 📜 annale … ». Vos erreurs sont mémorisées : option « uniquement les questions déjà ratées » et bouton « Retravailler les erreurs ».
- **👤 Personnages** — des **fiches comparatives** des grands juristes (de Gaius à Jourdan), pensées pour **faire le différentiel** : pour chacun, son époque, son courant (romaniste / coutumier / droit naturel…), son œuvre, et sa **position sur chaque débat** (consensualisme, **prêt à intérêts**, lésion, preuve, interprétation), plus des notes « **à ne pas confondre avec…** ». Un **mode ⚔️ duel** met deux juristes souvent confondus côte à côte dans un tableau (Cujas ↔ Domat, Du Moulin ↔ Loysel, Domat ↔ Pothier, Bartole ↔ Balde, Portalis ↔ Jourdan…). Filtre par époque et recherche plein texte.

La progression est sauvegardée automatiquement (`localStorage`, clés `histdroit_leitner_v1` et `histdroit_qcm_v1` — indépendantes des autres matières).

### Raccourcis clavier (en session)

- Flashcards : `Espace` / `Entrée` : révéler &nbsp;·&nbsp; `2` ou `→` : je savais &nbsp;·&nbsp; `1` ou `←` : à revoir
- QCM : `A`/`B`/`C` (ou `1`/`2`/`3`) : répondre &nbsp;·&nbsp; `0` ou `P` : passer &nbsp;·&nbsp; `Entrée` : question suivante

## Les 12 chapitres

Intro (l'obligation & origines romaines · classifications) · Formation (formalisme romain · consensualisme romain · Moyen Âge · époque moderne) · Contenu (prêt à intérêts · lésion & juste prix · interprétation) · Effets (nullité & vices · régime des contrats · exécution).

## Ajouter ou corriger une entrée

Ouvrez **`data.js`** et ajoutez une ligne sur le modèle des autres :

```js
{t:"auteur", th:"Formation · L'époque moderne & le consensualisme", r:"Pothier", m:`Juriste du XVIIIᵉ s. …`},
```

- `t` : `"auteur"` (juriste/auteur), `"notion"` (notion/mécanisme), `"texte"` (source/article/ouvrage) ou `"adage"` (adage/maxime)
- `th` : le chapitre (réutilisez un nom existant ; l'ordre est fixé par `window.THEME_ORDER`)
- `r` : la référence (recto) · `m` : la signification (verso)

Enregistrez, puis rechargez `index.html`.

## Ajouter ou corriger une question de QCM

Ouvrez **`qcm-data.js`** et ajoutez une entrée sur le modèle des autres :

```js
{th:"La formation des contrats", q:`À l'époque du droit romain, … :`,
 o:[`option 1`,`option 2`,`option 3`], a:0,
 e:`Explication affichée au corrigé.`},
```

- `th` : un des 4 chapitres de `window.QCM_THEMES` · `q` : l'énoncé · `o` : 2 ou 3 options · `a` : index (0/1/2) de la bonne réponse · `e` : l'explication
- `f:1` (facultatif) : fige l'ordre des options (énumérations, chronologies) · `an:1` (facultatif) : badge « annale 2023 »
