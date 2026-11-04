# lucasbodin.com — site vitrine

Site vitrine / CV de Lucas BODIN, en **HTML / CSS / JavaScript statique**.

Le contenu (projets, expériences, formations) est intégralement présent dans le
HTML source afin d'être lisible directement par les moteurs de recherche et les
agents IA, sans exécution de JavaScript. Le CSS et le JS servent uniquement à
l'expérience humaine (animations, défilement doux, survol de la photo).

## Structure

- `index.html` — page principale
- `confidentialite/` — politique de confidentialité du site
- `confidentialite-swim-workout/` — politique de confidentialité de l'app Swim Workout
- `css/` — styles, polices et icônes
- `js/main.js` — améliorations progressives (facultatives)
- `images/` — visuels
- `CNAME` — domaine personnalisé GitHub Pages (`lucasbodin.com`)

## Développement local

```shell
python3 -m http.server 8000
# puis http://localhost:8000
```

## Hébergement

Déployé via **GitHub Pages** depuis la branche `main` (racine du dépôt),
derrière le domaine `lucasbodin.com`.
