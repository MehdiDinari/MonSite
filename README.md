# README - Portfolio Mehdi Dinari

## Description
Ce portfolio est un site web moderne développé avec React, inspiré du design de mehdicodes.com et personnalisé avec les informations du CV de Mehdi Dinari.

## Fonctionnalités
- **Design responsive** : Compatible desktop et mobile
- **Mode sombre/clair** : Basculement entre les thèmes avec persistance
- **Navigation fluide** : Scroll smooth entre les sections
- **Animations** : Transitions et micro-interactions avec Framer Motion
- **Formulaire de contact** : Interface interactive avec validation
- **Sections complètes** :
  - Hero avec présentation personnelle
  - About avec compétences techniques et formation
  - Services adaptés au profil (Full-Stack, Data Science, Mobile)
  - Experience avec timeline interactive
  - Projects avec showcase des réalisations
  - Contact avec formulaire fonctionnel

## Technologies utilisées
- **React 18** avec hooks modernes
- **Tailwind CSS** pour le styling
- **Framer Motion** pour les animations
- **Lucide React** pour les icônes
- **Vite** comme bundler
- **shadcn/ui** pour les composants UI

## Installation et utilisation

### Prérequis
- Node.js (version 18 ou supérieure)
- pnpm, npm ou yarn

### Installation
1. Extraire le fichier ZIP
2. Naviguer dans le dossier du projet :
   ```bash
   cd mehdi-portfolio
   ```
3. Installer les dépendances :
   ```bash
   pnpm install
   # ou
   npm install
   ```

### Développement
Pour lancer le serveur de développement :
```bash
pnpm run dev
# ou
npm run dev
```
Le site sera accessible sur http://localhost:5173

### Build de production
Pour créer une version optimisée pour la production :
```bash
pnpm run build
# ou
npm run build
```
Les fichiers seront générés dans le dossier `dist/`

## Structure du projet
```
mehdi-portfolio/
├── src/
│   ├── components/          # Composants React
│   │   ├── Header.jsx      # Navigation principale
│   │   ├── Hero.jsx        # Section d'accueil
│   │   ├── About.jsx       # Section à propos
│   │   ├── Services.jsx    # Section services
│   │   ├── Experience.jsx  # Section expérience
│   │   ├── Projects.jsx    # Section projets
│   │   ├── Contact.jsx     # Section contact
│   │   └── Footer.jsx      # Pied de page
│   ├── data/
│   │   └── portfolio.js    # Données du portfolio
│   ├── hooks/
│   │   └── useTheme.js     # Hook pour la gestion du thème
│   ├── App.jsx             # Composant principal
│   └── main.jsx            # Point d'entrée
├── public/                 # Fichiers statiques
├── package.json           # Dépendances et scripts
└── README.md              # Ce fichier
```

## Personnalisation
Les données du portfolio sont centralisées dans `src/data/portfolio.js`. Vous pouvez facilement :
- Modifier les informations personnelles
- Ajouter/supprimer des compétences
- Mettre à jour les projets
- Changer les informations de contact

## Déploiement
Le site peut être déployé sur n'importe quelle plateforme supportant les sites statiques :
- Vercel
- Netlify
- GitHub Pages
- Firebase Hosting

## Contact
Pour toute question concernant ce portfolio :
- Email : mehdi.dinari@usmba.ac.ma
- GitHub : https://github.com/MehdiDinari
- LinkedIn : https://www.linkedin.com/in/mehdi-dinari-b0487a2a9/

---
Développé avec ❤️ par Mehdi Dinari

