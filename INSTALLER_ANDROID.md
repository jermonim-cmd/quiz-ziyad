# 📱 Installer Quiz Ziyad sur Android

## Ce qu'on a fait
L'application est maintenant une **PWA** (Progressive Web App) — elle s'installe
comme une vraie app Android, avec une icône sur l'écran d'accueil, le mode plein écran
et le fonctionnement **hors-ligne** (pas besoin de connexion après la première ouverture).

---

## 🚀 Comment installer sur le téléphone Android de Ziyad

### Étape 1 — Héberger les fichiers (une seule fois)

Les fichiers doivent être sur un vrai serveur web (pas depuis un dossier local).
**Option la plus simple : GitHub Pages (gratuit)**

1. Créer un compte sur [github.com](https://github.com)
2. Nouveau repository → nommer `quiz-ziyad`
3. Uploader tous les fichiers du dossier `MATH SEC 1/` :
   - `index.html`
   - `decimaux.html`
   - `science.html`
   - `manifest.json`
   - `sw.js`
   - `icon.svg`
4. Aller dans **Settings → Pages → Branch: main → Save**
5. L'URL sera : `https://[votre-nom].github.io/quiz-ziyad/`

**Alternative : Netlify (encore plus simple)**
1. Aller sur [netlify.com/drop](https://app.netlify.com/drop)
2. Glisser-déposer le dossier `MATH SEC 1/`
3. Copier l'URL générée automatiquement

---

### Étape 2 — Installer sur Android

1. Ouvrir **Chrome** sur le téléphone Android
2. Aller sur l'URL de l'app (ex: `https://xxx.github.io/quiz-ziyad/`)
3. Appuyer sur ⋮ (trois points en haut à droite)
4. Choisir **"Ajouter à l'écran d'accueil"**
5. Confirmer → l'icône apparaît sur l'écran d'accueil !

> **Note :** Chrome affiche parfois une bannière automatique
> "Installer Quiz Ziyad" en bas de l'écran — appuyer dessus suffit.

---

## ✅ Ce que l'app fait une fois installée
- ✅ Icône personnalisée sur l'écran d'accueil
- ✅ S'ouvre en plein écran (sans barre de navigateur)
- ✅ Fonctionne hors-ligne après la première visite
- ✅ Les scores sont sauvegardés localement
- ✅ Nouvelle sélection de questions chaque semaine

## 📂 Structure des fichiers
```
MATH SEC 1/
├── index.html        ← Quiz de Géométrie
├── decimaux.html     ← Quiz de Décimaux
├── science.html      ← Quiz de Sciences
├── manifest.json     ← Configuration PWA Android
├── sw.js             ← Service Worker (mode hors-ligne)
└── icon.svg          ← Icône de l'app
```
