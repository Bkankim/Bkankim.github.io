# 🚀 Byeonghyeon Kim - Portfolio Website

> LLM/ML Engineer & Security Specialist Portfolio

[![GitHub Pages](https://img.shields.io/badge/GitHub-Pages-blue?logo=github)](https://github.com/Bkankim)
[![License](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE)

## 📋 Overview

Professional portfolio website showcasing my journey from Information Security to AI/ML Engineering. Built with pure HTML, CSS, and JavaScript for optimal performance and easy deployment on GitHub Pages.

## ✨ Features

- **Dark / Light Mode**: Dark-first design with a persistent light variant
- **Bilingual (EN/KO)**: Attribute-driven i18n with a language toggle
- **Responsive Design**: Works seamlessly on desktop, tablet, and mobile
- **Terminal/Code Aesthetic**: Monospace section labels and an interactive terminal block
- **Scroll Animations**: Reveal-on-scroll, animated stat counters, and skill progress bars
- **Project Filtering**: Category tabs (Products / AI Infra / AI/ML / Competitions) over a single data source
- **Experience Timeline**: Vertical timeline of work, bootcamp, and education
- **Fast Loading**: Pure HTML/CSS/JS, no build step, no framework
- **SEO Friendly**: Proper meta tags, Open Graph, and semantic HTML

## 🛠️ Tech Stack

- **Frontend**: HTML5, CSS3, JavaScript (ES6+)
- **Icons**: Font Awesome 6
- **Hosting**: GitHub Pages (Ready to deploy)
- **Design**: Custom CSS with CSS Variables for easy theming

## 📁 Project Structure

```
portfolio/
├── index.html          # Main HTML file
├── css/
│   └── style.css      # Stylesheet
├── js/
│   └── script.js      # JavaScript interactions
├── assets/
│   └── Resume.pdf     # Resume file (add your PDF here)
└── README.md          # This file
```

## 🚀 Quick Start

### Local Development

1. **Clone the repository**
   ```bash
   cd /home/sweetbkan/portfolio
   ```

2. **Open in browser**
   - Simply open `index.html` in your web browser
   - Or use a local server:
   ```bash
   # Python
   python -m http.server 8000
   
   # Node.js
   npx serve
   ```

3. **View at**: `http://localhost:8000`

### Customization

1. **Update Personal Information**
   - Edit `index.html` to change your name, description, projects, etc.
   - Replace links in the navigation and contact sections

2. **Add Your Resume**
   - Place your `Resume.pdf` in the `assets/` folder
   - Or update the path in `index.html`

3. **Modify Colors**
   - Edit CSS variables in `css/style.css`:
   ```css
   :root {
       --primary-color: #4a90e2;
       --secondary-color: #2c3e50;
       --accent-color: #e74c3c;
       /* ... */
   }
   ```

## 📦 GitHub Pages Deployment

### Option 1: Direct Repository Deployment

1. **Create a GitHub repository**
   ```bash
   # Initialize git
   cd /home/sweetbkan/portfolio
   git init
   git add .
   git commit -m "Initial commit: Portfolio website"
   ```

2. **Create repository on GitHub**
   - Go to https://github.com/new
   - Name it: `Bkankim.github.io` (for user site)
   - Or: `portfolio` (for project site)

3. **Push to GitHub**
   ```bash
   git remote add origin https://github.com/Bkankim/Bkankim.github.io.git
   git branch -M main
   git push -u origin main
   ```

4. **Enable GitHub Pages**
   - Go to repository Settings → Pages
   - Source: Deploy from branch `main`
   - Folder: `/ (root)`
   - Save

5. **Access your site**
   - User site: `https://Bkankim.github.io`
   - Project site: `https://Bkankim.github.io/portfolio`

### Option 2: Automated Deployment with GitHub Actions

Create `.github/workflows/deploy.yml`:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [ main ]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - name: Deploy to GitHub Pages
        uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./
```

## 🎨 Sections

- **Home**: Hero with availability badge, intro, and social links
- **About**: Narrative, interactive terminal block, and animated stat counters
- **Skills**: Progress-bar categories (AI/ML, Web/Infra, Security) plus a tool tag cloud
- **Projects**: Filterable cards rendered from `js/projects.js` (single source of truth)
- **Experience**: Vertical timeline (chronological) - education, security, bootcamp, independent building, contract work
- **Contact**: Email, GitHub, and Threads

## 🌟 Key Projects Showcased

1. **토스 광고 CTR 예측** - Private Top 10%, AP/Logloss 개선
2. **대화 요약 모델** - Rouge 36.12 → 47.31 (+30%), QLoRA
3. **문서 이미지 분류** - F1 0.1701 → 0.9689 (최고 0.9836)
4. **부동산 실거래가 예측** - RMSE 48,192 → 20,006 (-58%)
5. **영화 평점 예측 MLOps** - End-to-End CI/CD Pipeline
6. **상업 마케팅 AI 에이전트** - 6-에이전트, 트렌드/카피/세그먼트/경쟁분석/리포트 자동화
7. **BluePy 2.0** - 멀티플랫폼 보안 점검·자동 수정(170+ 규칙), 테스트 커버리지 60%+
8. **과학 질의응답 IR 대회** - MAP/MRR 0.4242 → 0.8795/0.8818 (+107%)

## 📱 Responsive Breakpoints

- Desktop: 1400px+
- Tablet: 968px - 1399px
- Mobile: < 968px

## 🔧 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

## 📞 Contact

- **Email**: chillbkan@gmail.com
- **GitHub**: [@Bkankim](https://github.com/Bkankim)

## 🙏 Acknowledgments

- Inspired by modern portfolio designs
- Icons by [Font Awesome](https://fontawesome.com/)
- Hosted on [GitHub Pages](https://pages.github.com/)

---

**Built with ❤️ and ☕ by Byeonghyeon Kim**

*Last Updated: June 2026 - redesigned with a dark-first, terminal/code aesthetic*
