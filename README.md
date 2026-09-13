# Shubham Pandey — GitHub Pages Portfolio

A complete, static, data-driven portfolio for **Shubham Pandey — Data Analyst | BI Analyst | Energy Analyst | Data Engineer**.

## Image rule — intentionally enforced
- **Homepage project cards:** use **Picture1 only**.
- **Case-study detail pages:** **do not render Picture1 at all**. The case-study visual gallery starts with **Picture2** and continues with Picture3, Picture4, etc.
- `project.js` contains a defensive filter that removes any accidental `Picture1` gallery entry.
- `data.js` contains a `showHero: false` flag for every project.

## Included
- `index.html` — technical dark portfolio landing page
- `project.html` — dedicated case-study page
- `app.js` — homepage rendering, filters and resume/experience sections
- `project.js` — case-study rendering + screenshot lightbox
- `data.js` — resume/profile + all 10 detailed case studies
- `style.css` — responsive dark technical design
- `assets/` — supplied project screenshots, profile photo and resume PDF
- `.nojekyll` — static GitHub Pages hosting

## Project filters
- All Projects
- Microsoft Fabric
- Databricks
- Power BI
- Python & SQL
- Energy Analytics
- Data Engineering

## Deploy to the existing repository
1. Extract this ZIP.
2. Replace the existing repository files with the files in this package.
3. Replace the entire `assets/` folder with the included `assets/` folder. The supplied archive uses `assest/`; this package normalizes it to `assets/`.
4. Commit/push to the `main` branch.
5. GitHub Pages should serve the static site from the repository root.

The current repository already uses the same static architecture (`index.html`, `project.html`, `style.css`, `data.js`, `app.js`, `assets/`) and `.nojekyll`. The package is therefore intended as a direct replacement rather than an add-on.

## Local test
Open `index.html` through a local static server (recommended) so relative asset paths behave exactly like GitHub Pages.

Example:
```bash
python -m http.server 8000
```
Then open `http://localhost:8000/`.
