# Revision — The UK Legal System (Legal English)

Outil de révision personnel basé sur le cours d'anglais juridique de **Florence Thépot** (L2), généré à partir de vos notes Obsidian (*Sources of law* / *The Courts* / *People in courts*).

## Ouvrir l'application

**Double-cliquez sur `index.html`** — l'appli s'ouvre dans votre navigateur. Aucune installation, aucun serveur, aucune connexion internet nécessaire.

## Deux modes

- **📚 Répertoire** — la liste complète des **cases, statutes (Acts), concepts et institutions** cités dans le cours, avec leur signification (en anglais). Filtrez par **type** (Case / Statute / Concept / Institution), par **chapitre**, ou cherchez un mot-clé.
- **🎴 Flashcards** — révisez par cartes, chapitre par chapitre. Choisissez le sens (Référence → Sens, Sens → Référence, ou Mixte) puis lancez une session.

### Répétition espacée (méthode de Leitner)

Chaque carte possède une « boîte » de 1 à 5. **✅ Je savais** la fait monter ; **❌ À revoir** la renvoie en boîte 1. Les sessions présentent en priorité les cartes les moins sûres. La progression est sauvegardée automatiquement dans le navigateur (`localStorage`, clé `uklaw_leitner_v1` — indépendante de l'app de droit de l'UE).

### Raccourcis clavier (en session)

- `Espace` / `Entrée` : révéler la réponse
- `2` ou `→` : je savais &nbsp;·&nbsp; `1` ou `←` : à revoir

## Les 12 chapitres

Sources (Case law & precedent · Legislation & interpretation · International (ECHR & EU) · Custom & soft law · Equity) · Courts (Structure · Criminal justice · Civil justice · Appeals) · People (The jury · The judiciary · Lawyers).

## Ajouter ou corriger une entrée

Ouvrez **`data.js`** et ajoutez une ligne sur le modèle des autres :

```js
{t:"case", th:"Sources · Case law & precedent", r:"Donoghue v Stevenson [1932] AC 567", m:`HL; the neighbour principle…`},
```

- `t` : `"case"` (jurisprudence), `"stat"` (loi/Act), `"concept"` (notion/doctrine) ou `"inst"` (institution/acteur)
- `th` : le chapitre (réutilisez un nom existant pour qu'il apparaisse dans les filtres ; l'ordre est fixé par `window.THEME_ORDER`)
- `r` : la référence (recto) · `m` : la signification (verso)

Enregistrez, puis rechargez `index.html`.
