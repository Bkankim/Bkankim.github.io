# 🚀 Byeonghyeon Kim - Portfolio Website

> LLM/ML Engineer & Security Specialist Portfolio

[![GitHub Pages](https://img.shields.io/badge/GitHub-Pages-blue?logo=github)](https://github.com/Bkankim)
[![License](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE)

## 📋 Overview

Professional portfolio website showcasing my journey from Information Security to AI/ML Engineering. Built with pure HTML, CSS, and JavaScript for optimal performance and easy deployment on GitHub Pages.

## ✨ Features

- **Responsive Design**: Works seamlessly on all devices
- **Smooth Animations**: Engaging scroll animations and transitions
- **Interactive Elements**: 
  - Floating background circles
  - Horizontal scrolling skills section
  - Drag-to-scroll functionality
  - Hover effects on all interactive elements
- **Modern UI/UX**: Clean, professional design with attention to detail
- **Fast Loading**: Optimized for performance with no external dependencies
- **SEO Friendly**: Proper meta tags and semantic HTML

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

- **Home**: Hero section with introduction
- **About**: Background, education, and statistics
- **Skills**: Horizontal scrolling skill categories
  - Languages
  - AI/ML
  - Frameworks & Libraries
  - Databases
  - LLM Agents
  - Soft Skills
- **Projects**: 5 featured projects with details and results
- **Contact**: Email, GitHub, and LinkedIn links

## 🌟 Key Projects Showcased

1. **부동산 실거래가 예측** - ML Regression (58% RMSE improvement)
2. **토스 광고 CTR 예측** - Click-Through Rate Prediction (In Progress)
3. **대화 요약 모델** - Korean Dialogue Summarization (In Progress)
4. **문서 이미지 분류** - Document Classification (470% F1-score improvement)
5. **영화 평점 예측 MLOps** - End-to-End CI/CD Pipeline

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
- **LinkedIn**: [Byeonghyeon Kim](https://www.linkedin.com/in/byeonghyeon-kim-7a1838389/)

## 🙏 Acknowledgments

- Inspired by modern portfolio designs
- Icons by [Font Awesome](https://fontawesome.com/)
- Hosted on [GitHub Pages](https://pages.github.com/)

---

**Built with ❤️ and ☕ by Byeonghyeon Kim**

*Last Updated: October 2025*