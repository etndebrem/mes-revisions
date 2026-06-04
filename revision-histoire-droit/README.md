# Révisions — Histoire du droit des obligations

Outil de révision personnel basé sur le cours de **Céline Drand** (L2), généré à partir de vos notes Obsidian (*Introduction* / *Formation des contrats* / *Détermination du contenu* / *Effets du contrat*).

## Ouvrir l'application

Depuis la page d'accueil **`../index.html`** (Mes révisions), ou **double-cliquez sur `index.html`**. Aucune installation, aucun serveur, hors ligne.

## Deux modes

- **📚 Répertoire** — la liste des **auteurs/juristes, notions, textes (sources & articles) et adages** du cours, avec leur signification. Filtrez par **type**, par **chapitre**, ou cherchez un mot-clé.
- **🎴 Flashcards** — révisez par cartes, chapitre par chapitre, avec **répétition espacée (Leitner)**. Choisissez le sens (Référence → Sens, Sens → Référence, ou Mixte).

La progression est sauvegardée automatiquement (`localStorage`, clé `histdroit_leitner_v1` — indépendante des autres matières).

### Raccourcis clavier (en session)

- `Espace` / `Entrée` : révéler &nbsp;·&nbsp; `2` ou `→` : je savais &nbsp;·&nbsp; `1` ou `←` : à revoir

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
