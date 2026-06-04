# 📱 Installer « Mes révisions » sur iPhone

⚠️ Un **`.apk` ne marche PAS sur iPhone** (c'est un format Android). Et une vraie app App Store imposerait un Mac + Xcode + compte développeur payant.

La solution : votre programme est désormais une **PWA** (web-app installable). Sur iPhone, on l'ajoute à l'écran d'accueil depuis Safari : elle s'ouvre **en plein écran, comme une app, et fonctionne hors-ligne**.

> ✅ **C'est déjà en ligne** (déployé sur GitHub Pages) :
>
> # 👉 https://etndebrem.github.io/mes-revisions/
>
> Il ne reste qu'à l'**ajouter à l'écran d'accueil de l'iPhone** → voir **l'Étape 2** ci-dessous.
> *(L'Étape 1, la mise en ligne, est déjà faite — conservée plus bas pour référence et pour les mises à jour.)*

---

## Étape 1 — Mettre le dossier en ligne (gratuit, une seule fois)

> Il faut une adresse **https://** : iOS exige un site sécurisé pour le mode hors-ligne. (Ouvrir directement les fichiers depuis l'iPhone ne suffit pas.)

### Option A — Netlify Drop (le plus simple, glisser-déposer)

1. Sur l'ordinateur, allez sur **https://app.netlify.com/drop**
2. Créez un compte gratuit (email ou Google) si demandé.
3. **Glissez-déposez le dossier `Revisions`** (entier) dans la zone indiquée.
4. Netlify vous donne une adresse du type `https://un-nom.netlify.app` → **c'est votre lien**.

### Option B — GitHub Pages (gratuit, plus durable)

1. Créez un compte sur **github.com** et un dépôt (repository) public, ex. `revisions`.
2. **Téléversez le contenu du dossier `Revisions`** (les fichiers et sous-dossiers, pas le dossier lui-même) à la racine du dépôt.
3. Dépôt → **Settings → Pages** → Source : branche `main`, dossier `/ (root)` → Save.
4. Au bout d'1-2 min, votre lien apparaît : `https://votre-pseudo.github.io/revisions/`.

*(D'autres hébergeurs gratuits font l'affaire : Cloudflare Pages, Vercel, tiiny.host…)*

---

## Étape 2 — Ajouter à l'écran d'accueil de l'iPhone

1. Ouvrez votre lien **dans Safari** (important : Safari, pas Chrome).
2. Touchez le bouton **Partager** (carré avec une flèche ↑, en bas).
3. Choisissez **« Sur l'écran d'accueil »**.
4. Validez (le nom « Mes révisions » et l'icône s'affichent) → **Ajouter**.

✅ L'icône apparaît sur votre écran d'accueil. Lancez-la : plein écran, et **ça marche sans connexion** (après le 1er lancement avec réseau, qui met tout en cache).

---

## Notes

- **Hors-ligne :** au tout premier lancement, laissez la page se charger **avec internet** (le service worker télécharge les fiches). Ensuite, tout fonctionne hors-ligne.
- **Progression :** la progression des flashcards est stockée **par appareil**. Celle de l'iPhone est indépendante de celle de l'ordinateur (vous repartez de zéro sur le téléphone).
- **Mises à jour :** si vous modifiez les fiches (`data.js`), augmentez le numéro de version dans `sw.js` (`revisions-v1` → `revisions-v2`), re-déployez, puis rouvrez l'app (parfois 2 fois) pour récupérer la nouvelle version.
- **Android :** la même PWA s'installe aussi sur Android (Chrome → menu → « Installer l'application »).
