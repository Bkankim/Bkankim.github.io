# bkankim.github.io

Personal portfolio site for Byeonghyeon Kim, AI & Security Engineer.
Static HTML/CSS/JS with no build step, served on GitHub Pages.

## Structure

```
index.html        Main page
resume.html       One-page resume
css/style.css     Styles (CSS variables, dark default + light variant)
js/projects.js    Project data (single source of truth) + card renderer
js/script.js      Theme, EN/KO i18n, project filtering, scroll behavior
assets/           Images, OG card, RAG education materials
```

## Run locally

Open `index.html` directly, or serve the folder:

```bash
python3 -m http.server 8000
# then visit http://localhost:8000
```

## Editing content

- Projects live in `js/projects.js` (one object per project, `en`/`ko` fields).
- Page copy uses `data-en` / `data-ko` attributes; `js/script.js` swaps them on language toggle (default KO).

## Contact

- Portfolio: https://bkankim.github.io
- GitHub: https://github.com/Bkankim
- Email: official.bkan@gmail.com
