# Révisions — Droit institutionnel de l'Union européenne

Outil de révision personnel basé sur le cours d'**Alexis Husser** (L2), généré à partir de vos notes Obsidian.

## Ouvrir l'application

**Double-cliquez sur `index.html`** — l'appli s'ouvre dans votre navigateur. Aucune installation, aucun serveur, aucune connexion internet nécessaire.

## Deux modes

- **📚 Répertoire** — la liste complète des **articles, traités et arrêts** cités dans le cours, avec leur signification. Filtrez par type, par thème, ou cherchez un mot-clé.
- **🎴 Flashcards** — révisez par cartes. Choisissez les thèmes, le sens (Référence → Sens, Sens → Référence, ou Mixte), puis lancez une session.

### Répétition espacée (méthode de Leitner)

Chaque carte possède une « boîte » de 1 à 5. Quand vous répondez **✅ Je savais**, la carte monte d'une boîte ; **❌ À revoir** la renvoie en boîte 1. Les sessions présentent en priorité les cartes les moins sûres. Une carte en **boîte 5** est considérée comme maîtrisée.

La progression est **sauvegardée automatiquement** dans le navigateur (`localStorage`). Le bouton *♻️ Réinitialiser la progression* remet tout à zéro.

### Raccourcis clavier (en session)

- `Espace` / `Entrée` : révéler la réponse
- `2` ou `→` : je savais &nbsp;·&nbsp; `1` ou `←` : à revoir

## Ajouter ou corriger une entrée

Ouvrez **`data.js`** dans un éditeur de texte et ajoutez une ligne sur le modèle des autres :

```js
{t:"art", th:"Institutions", r:"Article 15 TUE", m:`Le Conseil européen…`},
```

- `t` : `"art"` (article/texte), `"tr"` (traité/étape) ou `"jur"` (jurisprudence)
- `th` : le thème (réutilisez un thème existant pour qu'il apparaisse dans les filtres)
- `r` : la référence (recto de la carte) · `m` : la signification (verso)

Enregistrez, puis rechargez `index.html`.
