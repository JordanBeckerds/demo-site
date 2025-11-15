```markdown
# Ethan Mouillet-Chaudet – Portfolio & Démo Site

Site web personnel – BTS SIO SLAM → **TSSR**  
Démo live : https://ethan-mouillet.fr (ou ton domaine actuel)

[![Portfolio Preview](Public/assets/img/preview-portfolio.jpg)](https://ethan-mouillet.fr)

## 🚀 Aperçu rapide

Portfolio ultra-moderne 100 % **HTML / CSS (Tailwind) / Vanilla JS** (aucun framework lourd)  
Design cyberpunk / glassmorphism / néon – entièrement responsive (mobile-first)  
Architecture SPA légère avec chargement de pages via `fetch()` → fluide comme un site React mais en 10× plus léger

## 📁 Structure du projet

```
Public/
├── index.html                     # Page principale (SPA)
│
├── components/                    # Composants réutilisables
│   ├── header.html
│   ├── footer.html
│   └── topBtn.html
│
├── includes/                      # Contenu des pages
│   ├── home.html                  # Accueil + grille projets
│   ├── veille.html                # Veille technologique
│   ├── resume.html                # Page CV avec zoom plein écran
│   ├── competence.html            # Compétences TSSR (3 blocs)
│   ├── internship-1.html          # Stage 1ère année (1er RPIMa)
│   ├── internship-2.html          # Stage 2ème année (TreeFrog)
│   ├── project-1.html             # Beroi Guit (parc info complet)
│   ├── project-3.html             # Site from scratch PHP/MySQL
│   └── ...
│
├── assets/
│   ├── css/                       # (vide – tout est en Tailwind CDN)
│   ├── js/
│   │   └── main.js                # Chargement SPA + smooth scroll
│   ├── img/                       # Photos, icônes, previews
│   └── cvEthan.pdf                # CV téléchargeable
│
└── README.md                      # Celui-ci
```

## ✨ Fonctionnalités

- Navigation SPA ultra-rapide (chargement instantané des pages)
- Zoom plein écran sur le CV (clic/tap → 0 JS, pure CSS)
- Bouton "retour en haut" fluide
- Design 100 % cohérent (noir #222222 + crème #fcefe3 + accents néon)
- Code ultra-propre, accessible et optimisé SEO
- Zéro dépendances externes hormis Tailwind CDN

## 🛠️ Comment lancer localement

```bash
# 1. Clone ou télécharge le dossier Public
git clone https://github.com/ethanmouillet/portfolio.git

# 2. Ouvre simplement index.html dans ton navigateur
# → Pas de serveur nécessaire (tout est statique)

# Optionnel : serveur local pour tester
npx serve          # ou
python -m http.server 8000
```

## 🔧 Technologies utilisées

- HTML5
- Tailwind CSS (via CDN)
- Vanilla JavaScript (∼80 lignes)
- Glassmorphism + gradients animés
- Mobile-first & ultra-responsive

## 📄 Licence

Code libre pour usage personnel / portfolio.  
Tu peux le réutiliser, le modifier, le montrer en entretien → c’est fait pour !

## 💬 Contact

- Email : contact@ethan-mouillet.fr
- LinkedIn : [linkedin.com/in/ethan-mouillet-chaudet](https://www.linkedin.com/in/ethan-mouillet-chaudet)
- GitHub : [github.com/ethanmouillet](https://github.com/ethanmouillet)
