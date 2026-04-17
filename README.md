# ydli-ai.github.io

Personal academic homepage. Pure static HTML + CSS + JS, hosted via GitHub Pages.

Live URL (after enabling Pages on the `main` branch): <https://ydli-ai.github.io>

## Structure

```
.
├── index.html          # English (default)
├── index_zh.html       # Chinese
├── assets/
│   ├── css/style.css   # Shared styles
│   ├── js/main.js      # Nav highlight on scroll
│   └── images/
│       ├── placeholder.svg  # Reused everywhere until real images arrive
│       └── (put avatar.jpg and paper teasers here)
└── README.md
```

## How to replace placeholders

All personal content is hard-coded as placeholders — search and edit by hand.

### 1. Personal info (top of each page)

Open `index.html` and `index_zh.html`, search for and replace:

| Placeholder                            | Meaning                        |
| -------------------------------------- | ------------------------------ |
| `Your Name` / `你的名字`               | Your full name                 |
| `Your Affiliation` / `某研究机构`      | Institution / department       |
| `Your Department, Your University`     | Position + affiliation line    |
| `Your Undergrad University` / `某本科院校` | Undergrad school           |
| `Professor X` / `某教授`               | Advisor name                   |
| `your.email@domain.com`                | Contact email                  |
| `Office 000, Your Building` / `某楼 000 室` | Office address            |

Social / academic links in the `<ul class="hero-links">` block — replace `href="#"` with real URLs (LinkedIn, CV PDF, Twitter/X, etc.). Google Scholar and GitHub links are already pre-filled.

### 2. Avatar and paper teasers

Drop images into `assets/images/`:

- `avatar.jpg` — your portrait (square, ≥ 320×320). Then change the hero `<img src="assets/images/placeholder.svg">` to `avatar.jpg` in both HTML files.
- One teaser image per paper — e.g. `face-arcmargin.jpg`, `megaface-x.jpg`, etc. Update each `<article class="pub">`'s thumbnail `<img src="...">` accordingly.

Until you upload real images, `placeholder.svg` is shown everywhere (a gray card with the word "Image").

### 3. Publications

Each paper lives inside an `<article class="pub">` block. The three `<div class="pub-group">` sections correspond to **Face Recognition / Datasets / LLM Training** (人脸识别 / 数据集 / 大语言模型训练).

For each paper replace:

- `<h4 class="pub-title"><a href="#">…</a></h4>` — title + link to project page
- `<p class="pub-authors">` — author list; wrap your own name with `<span class="me">…</span>` to bold it
- `<p class="pub-venue">` — venue and year (italicized automatically)
- `<ul class="pub-links">` — each `<li><a href="#">…</a></li>` points to PDF / arXiv / Code / BibTeX

To add a new paper, copy an existing `<article class="pub">` block and edit. Make sure both `index.html` and `index_zh.html` stay in sync.

## Local preview

No build step. Any static server works:

```bash
python3 -m http.server 8000
# then open http://localhost:8000/
```

Or just double-click `index.html`.

## Deploy

GitHub Pages is enabled automatically for any repo named `<user>.github.io`. After merging to `main`, the site goes live at <https://ydli-ai.github.io> within a minute.
