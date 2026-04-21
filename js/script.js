document.addEventListener('DOMContentLoaded', () => {

    // ===== Dark Mode Toggle =====
    const themeToggle = document.querySelector('#themeToggle');
    const body = document.body;

    const currentTheme = localStorage.getItem('theme') || 'light';
    if (currentTheme === 'dark') {
        body.classList.add('dark-mode');
    }

    themeToggle.addEventListener('click', () => {
        body.classList.toggle('dark-mode');
        const theme = body.classList.contains('dark-mode') ? 'dark' : 'light';
        localStorage.setItem('theme', theme);
    });

    // ===== Language Toggle =====
    const langToggle = document.querySelector('#langToggle');
    const langOptions = document.querySelectorAll('.lang-option');
    let typingTimeout = null;

    const translations = {
        en: {
            greeting: "HELLO, I'M",
            name: "Byeonghyeon Kim",
            heroRole: "LLM/ML Engineer & Security Specialist",
            location: "Seoul, South Korea",
            description: "I build AI-powered solutions with a security-first mindset. Passionate about LLMs, Machine Learning, and deeply interested in AI agent-powered content creation. Currently seeking ML/LLM Engineering, AI Research, and AI Content Creator opportunities.",
            resumeBtn: "My Resume",
            contactBtn: "Contact Info",
            aboutTitle: ["About ", "Me"],
            aboutSubtitle: "Building AI solutions from a security-first perspective",
            aboutRole: "LLM/ML Engineer & Security Specialist",
            aboutDesc1: "I'm <strong>Byeonghyeon Kim</strong>, an AI practitioner with a foundation in Information Security. With experience in security monitoring and anomaly detection, I bring a data-driven problem-solving approach to machine learning challenges.",
            aboutDesc2: "Currently expanding my expertise in MLOps, Machine Learning, and Large Language Models through the FastCampus AI Bootcamp (14th cohort), where I build production-ready AI systems and master end-to-end ML pipelines.",
            educationTitle: "Education",
            educationContent: "<strong>Bachelor's Degree</strong> - Information Security",
            bootcampTitle: "Bootcamp",
            bootcampContent: "<strong>FastCampus AI Bootcamp</strong> - 14th Cohort",
            stat1Title: "ML Projects<br>Completed",
            stat2Title: "Avg Performance<br>Improvement",
            skillsTitle: ["Technical ", "Skills"],
            skillsSubtitle: "Tech stack spanning AI/ML and security",
            projectsTitle: ["Featured ", "Projects"],
            projectsSubtitle: "Real-world projects in AI/ML engineering and security",
            contactTitle: ["Get In ", "Touch"],
            contactDesc: "I'm always interested in new opportunities, innovative projects, and collaborative work in LLM/ML.",

            project7Title: "BluePy 2.0",
            project7Subtitle: "Infra Security Scanner",
            project7Desc: "Multi-platform (Windows/macOS/Linux) infra security scanner with auto remediation. Unified GUI/rollback/reporting that automate 170+ rules.",
            project7Result: "170+ rules scanned/fixed, 60%+ test coverage, production-ready",

            project6Title: "Commerce Marketing AI Agent",
            project6Subtitle: "Custom Multi-Agent System",
            project6Desc: "Six-agent marketing system that automates trend, ad copy, segmentation, review, competitor analysis, and strategy reports to reduce repeated research effort.",
            project6Result: "End-to-End Multi-Agent <br>System Implementation",

            project1Title: "Toss Ad Click Rate Prediction",
            project1Subtitle: "CTR Prediction",
            project1Desc: "Built a CTR model on large-scale ad logs; improved log-loss/AP via sequence features, downsampling, and tuning.",
            project1Result: "Score 0.33185 → 0.34814 achieved (Top 10% in private competition)",

            project2Title: "Dialogue Summarization Model",
            project2Subtitle: "Dialogue Summarization",
            project2Desc: "Korean daily dialogue summarization with QLoRA fine-tuning plus augmentation/post-processing to improve quality.",
            project2Result: "Rouge score improved by 30% <br>(36.12 → 47.31)",

            project8Title: "Science QA IR Competition",
            project8Subtitle: "RAG Retrieval & Ranking",
            project8Desc: "Scientific QA RAG with improved retrieval/ranking by Solar embeddings, rank-graph refactor, and prompt tuning.",
            project8Result: "MAP/MRR +107% <br>(0.4242 → 0.8795 / 0.8818)",

            project3Title: "Movie Rating Prediction Service",
            project3Subtitle: "Movie Rating Prediction MLOps",
            project3Desc: "Built a movie rating prediction service and MLOps pipeline using the TMDB API to analyze user reviews. Fully automated the workflow from data collection through training, deployment, and monitoring.",
            project3Result: "End-to-End CI/CD MLOps <br>Pipeline Implementation",

            project4Title: "Image Classification Model",
            project4Subtitle: "Document Type Classification",
            project4Desc: "Developed an automated classification system for scanned document images (17 classes). Conducted extensive experiments with various backbones, Test-Time Augmentation (TTA), data augmentation, and post-processing methods to improve classification performance at the pre-OCR stage.",
            project4Result: "F1-score improved by 470% <br>(0.1701 → 0.9689)",

            project5Title: "Real Estate Transaction Price Prediction",
            project5Subtitle: "ML Regression",
            project5Desc: "Developed a prediction model trained on historical transaction data from public datasets to forecast real estate prices and analyze patterns. Minimized prediction errors and enhanced model performance through feature engineering (60+ features) and K-Fold validation.",
            project5Result: "RMSE improved by 58% <br>(48192 → 20006)",

            project9Title: "LLM-based RAG Educational Content",
            project9Subtitle: "Technical Content Creation",
            project9Desc: "Educational content for practitioners introducing RAG to enterprise document search. Covers BM25/Vector/Hybrid comparison, Query Expansion, and Hit@k/MRR evaluation.",
            project9Result: "Overview + Training PDF + Jupyter Notebook completed"
        },
        ko: {
            greeting: "안녕하세요, 저는",
            name: "김병현",
            heroRole: "LLM/ML 엔지니어 & 보안 전문가",
            location: "서울, 대한민국",
            description: "보안 우선 사고방식으로 AI 기반 솔루션을 개발합니다. LLM과 머신러닝에 열정을 갖고, AI 에이전트 기반 콘텐츠 제작에도 큰 관심을 두고 있습니다. ML/LLM 엔지니어링, AI 연구, AI 콘텐츠 크리에이터 직무 기회를 찾고 있습니다.",
            resumeBtn: "이력서",
            contactBtn: "연락처",
            aboutTitle: ["소개", ""],
            aboutSubtitle: "보안 전문가의 시선으로 AI 솔루션을 만듭니다",
            aboutRole: "LLM/ML Engineer & Security Specialist",
            aboutDesc1: "저는 <strong>김병현</strong>입니다. 정보보안을 기반으로 AI 분야에서 활동하고 있습니다. 보안 모니터링과 이상 탐지 경험을 바탕으로 데이터 기반 문제 해결 역량을 머신러닝 과제에 적용하고 있습니다.",
            aboutDesc2: "현재 FastCampus AI 부트캠프(14기)를 통해 MLOps, 머신러닝, 대규모 언어모델(LLM) 분야의 전문성을 확장하고 있으며, 프로덕션 수준의 AI 시스템 구축과 엔드투엔드 ML 파이프라인 개발 역량을 습득하고 있습니다.",
            educationTitle: "학력",
            educationContent: "<strong>학사 학위</strong> - 정보보호학",
            bootcampTitle: "부트캠프",
            bootcampContent: "<strong>FastCampus AI 부트캠프</strong> - 14기",
            stat1Title: "프로젝트<br>완료",
            stat2Title: "평균 성능<br>향상률",
            skillsTitle: ["기술 ", "스택"],
            skillsSubtitle: "AI/ML과 보안을 아우르는 기술 스택",
            projectsTitle: ["주요 ", "프로젝트"],
            projectsSubtitle: "AI/ML 엔지니어링과 보안 도메인의 실전 프로젝트",
            contactTitle: ["연락", "하기"],
            contactDesc: "LLM/ML 및 AI 개발 분야의 새로운 기회, 혁신적인 프로젝트, 협업 제안에 대해 언제든 환영합니다.",

            project7Title: "BluePy 2.0",
            project7Subtitle: "Infra Security Scanner",
            project7Desc: "멀티플랫폼(Windows/macOS/Linux) 인프라 보안 자동 점검·수정 도구. GUI·롤백·보고서까지 일원화하고 170+ 규칙을 자동화해 비전문가도 운영 가능.",
            project7Result: "170+ 보안 규칙 점검/자동 수정, 테스트 커버리지 60%+, 프로덕션 배포 준비 중",

            project6Title: "상업 마케팅 AI 에이전트",
            project6Subtitle: "Custom Multi-Agent System",
            project6Desc: "6개 에이전트로 트렌드/카피/세그먼트/리뷰/경쟁사/전략 리포트를 자동 생성해 리서치 반복을 단축.",
            project6Result: "End-to-End 멀티 에이전트 <br>시스템 구현",

            project1Title: "토스 광고 클릭률 예측",
            project1Subtitle: "CTR Prediction",
            project1Desc: "광고 클릭 확률을 대규모 로그로 예측, 시퀀스 피처·다운샘플·튜닝으로 LogLoss·AP 개선.",
            project1Result: "Score 0.33185 → 0.34814 달성 (사설대회 상위 10%)",

            project2Title: "대화 요약 모델 개발",
            project2Subtitle: "Dialogue Summarization",
            project2Desc: "한국어 일상 대화 요약; QLoRA 파인튜닝과 증강/후처리로 품질 향상.",
            project2Result: "Rouge 점수 30% 향상 <br>(36.12 → 47.31)",

            project8Title: "과학 질의응답 IR 대회",
            project8Subtitle: "RAG Retrieval & Ranking",
            project8Desc: "과학 도메인 RAG 기반 검색·랭킹을 고도화. Solar 임베딩, 랭크 그래프 리팩토링, 프롬프트 고도화·미세튜닝 적용.",
            project8Result: "MAP/MRR 107% 향상 <br>(0.4242 → 0.8795 / 0.8818)",

            project3Title: "영화 평점 예측 서비스",
            project3Subtitle: "Movie Rating Prediction MLOps",
            project3Desc: "TMDB API를 활용한 사용자 리뷰 기반 영화 평점 예측 및 MLOps 파이프라인 구축. 데이터 수집부터 학습, 배포, 모니터링까지 완전 자동화.",
            project3Result: "End-to-End CI/CD MLOps <br>파이프라인 구현",

            project4Title: "이미지 분류 모델 개발",
            project4Subtitle: "Document Type Classification",
            project4Desc: "스캔 문서 이미지의 유형 자동 분류 (17-class). 문서 OCR 전단계에서 이미지 분류 성능 향상을 위한 다양한 백본 실험 및 TTA 적용, 다양한 증강, 후처리 연구 및 수행.",
            project4Result: "F1-score 470% 향상 <br>(0.1701 → 0.9689)",

            project5Title: "부동산 실거래가 예측",
            project5Subtitle: "ML Regression",
            project5Desc: "공공데이터 기반 과거 거래가를 학습시켜 미래 부동산 실거래가 예측 정확도 향상 및 패턴 분석 수행. 60여 개 특성을 활용한 Feature Engineering과 K-Fold 검증으로 예측 오차 최소화 및 모델 성능 향상.",
            project5Result: "RMSE 58% 향상 <br>(48192 → 20006)",

            project9Title: "LLM 기반 RAG 교육 콘텐츠",
            project9Subtitle: "Technical Content Creation",
            project9Desc: "기업 내 문서 검색에 RAG 도입을 원하는 실무자 대상 교육 콘텐츠. BM25/Vector/Hybrid 검색 비교와 Query Expansion, Hit@k/MRR 평가 실습 포함.",
            project9Result: "개요서 + 교육자료 PDF + 실습 Jupyter 노트북 완성"
        }
    };

    // Project card order matches new HTML: [7, 6, 1, 2, 8, 3, 4, 5, 9]
    const projectKeys = [7, 6, 1, 2, 8, 3, 4, 5, 9];
    const projectResultIcons = [
        'fa-check-circle', 'fa-check-circle',
        'fa-chart-line', 'fa-chart-line', 'fa-chart-line',
        'fa-check-circle', 'fa-chart-line', 'fa-chart-line',
        'fa-book'
    ];

    langOptions.forEach(opt => {
        opt.classList.toggle('active', opt.getAttribute('data-lang') === 'ko');
    });

    setTimeout(() => { switchLanguage('ko'); }, 300);

    langOptions.forEach(option => {
        option.addEventListener('click', () => {
            switchLanguage(option.getAttribute('data-lang'));
        });
    });

    function switchLanguage(lang) {
        langOptions.forEach(opt => {
            opt.classList.toggle('active', opt.getAttribute('data-lang') === lang);
        });

        const navLinks = document.querySelectorAll('.nav-link');
        navLinks.forEach(link => {
            const text = link.getAttribute(`data-${lang}`);
            if (text) link.textContent = text;
        });

        const t = translations[lang];

        document.querySelector('.hero-greeting').textContent = t.greeting;
        document.querySelector('.hero-name').textContent = t.name;

        const heroRoleSpan = document.querySelector('.hero-role span');
        if (heroRoleSpan) heroRoleSpan.textContent = t.heroRole;

        document.querySelector('.hero-location').innerHTML = `<i class="fas fa-map-marker-alt"></i> ${t.location}`;

        const heroDescElement = document.querySelector('.hero-description');
        if (heroDescElement) {
            if (typingTimeout) {
                clearTimeout(typingTimeout);
                typingTimeout = null;
            }
            heroDescElement.textContent = '';
            let i = 0;
            const descText = t.description;
            function typeWriter() {
                if (i < descText.length) {
                    heroDescElement.textContent += descText.charAt(i);
                    i++;
                    typingTimeout = setTimeout(typeWriter, 20);
                }
            }
            typingTimeout = setTimeout(typeWriter, 200);
        }

        const heroBtns = document.querySelectorAll('.hero-buttons .btn');
        if (heroBtns[0]) heroBtns[0].childNodes[0].textContent = t.resumeBtn + ' ';
        if (heroBtns[1]) heroBtns[1].childNodes[0].textContent = t.contactBtn + ' ';

        // Section titles with gradient text
        const sectionTitles = document.querySelectorAll('.section-title');
        const titleKeys = ['aboutTitle', 'skillsTitle', 'projectsTitle', 'contactTitle'];
        titleKeys.forEach((key, idx) => {
            if (sectionTitles[idx] && t[key]) {
                const [before, after] = t[key];
                if (after) {
                    sectionTitles[idx].innerHTML = `${before}<span class="gradient-text">${after}</span>`;
                } else {
                    sectionTitles[idx].textContent = before;
                }
            }
        });

        // Section subtitles
        const subtitleKeys = ['aboutSubtitle', 'skillsSubtitle', 'projectsSubtitle'];
        const subtitles = document.querySelectorAll('.section-subtitle');
        subtitleKeys.forEach((key, idx) => {
            if (subtitles[idx] && t[key]) subtitles[idx].textContent = t[key];
        });

        const aboutRole = document.querySelector('.about-role');
        if (aboutRole) aboutRole.textContent = t.aboutRole;

        const aboutDescriptions = document.querySelectorAll('.about-description');
        if (aboutDescriptions[0]) aboutDescriptions[0].innerHTML = t.aboutDesc1;
        if (aboutDescriptions[1]) aboutDescriptions[1].innerHTML = t.aboutDesc2;

        const educationItems = document.querySelectorAll('.education-item');
        if (educationItems[0]) {
            const h4 = educationItems[0].querySelector('h4');
            const p = educationItems[0].querySelector('p');
            if (h4) h4.textContent = t.educationTitle;
            if (p) p.innerHTML = t.educationContent;
        }
        if (educationItems[1]) {
            const h4 = educationItems[1].querySelector('h4');
            const p = educationItems[1].querySelector('p');
            if (h4) h4.textContent = t.bootcampTitle;
            if (p) p.innerHTML = t.bootcampContent;
        }

        const statItems = document.querySelectorAll('.stat-item p');
        if (statItems[0]) statItems[0].innerHTML = t.stat1Title;
        if (statItems[1]) statItems[1].innerHTML = t.stat2Title;

        const contactDesc = document.querySelector('.contact-description');
        if (contactDesc) contactDesc.textContent = t.contactDesc;

        // Project cards — data-driven mapping
        const projectCards = document.querySelectorAll('.project-card');
        projectCards.forEach((card, idx) => {
            const pNum = projectKeys[idx];
            if (!pNum) return;

            const prefix = `project${pNum}`;
            const title = card.querySelector('h3');
            const subtitle = card.querySelector('.project-subtitle');
            const desc = card.querySelector('.project-description');
            const result = card.querySelector('.project-result');

            if (title && t[prefix + 'Title']) title.textContent = t[prefix + 'Title'];
            if (subtitle && t[prefix + 'Subtitle']) subtitle.textContent = t[prefix + 'Subtitle'];
            if (desc && t[prefix + 'Desc']) desc.textContent = t[prefix + 'Desc'];
            if (result && t[prefix + 'Result']) {
                const icon = projectResultIcons[idx] || 'fa-chart-line';
                result.innerHTML = `<i class="fas ${icon}"></i> <strong>Result:</strong> ${t[prefix + 'Result']}`;
            }

            // Project 9 link texts
            if (pNum === 9) {
                card.querySelectorAll('.project9-link').forEach(link => {
                    const text = link.getAttribute(`data-${lang}`);
                    const span = link.querySelector('span');
                    if (text && span) span.textContent = text;
                });
            }
        });
    }

    // ===== Mobile Menu Toggle =====
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');

    hamburger.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        hamburger.classList.toggle('active');
    });

    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
            hamburger.classList.remove('active');
        });
    });

    // ===== Smooth Scrolling =====
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                window.scrollTo({
                    top: target.offsetTop - 70,
                    behavior: 'smooth'
                });
            }
        });
    });

    // ===== Active Navigation on Scroll =====
    const sections = document.querySelectorAll('section');

    window.addEventListener('scroll', () => {
        let current = '';
        sections.forEach(section => {
            if (pageYOffset >= section.offsetTop - 100) {
                current = section.getAttribute('id');
            }
        });
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
    });

    // ===== Intersection Observer — Fade-in animations =====
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const fadeObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    document.querySelectorAll('section').forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(20px)';
        section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        fadeObserver.observe(section);
    });

    // Staggered card animations
    const animateCards = (selector, direction) => {
        document.querySelectorAll(selector).forEach((card, index) => {
            card.style.opacity = '0';
            card.style.transform = direction === 'y' ? 'translateY(20px)' : 'translateX(-20px)';
            card.style.transition = `opacity 0.5s ease ${index * 0.08}s, transform 0.5s ease ${index * 0.08}s`;

            const obs = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.style.opacity = '1';
                        entry.target.style.transform = 'translate(0)';
                    }
                });
            }, { threshold: 0.1 });
            obs.observe(card);
        });
    };

    animateCards('.project-card', 'y');
    animateCards('.skill-category', 'y');
    animateCards('.contact-card', 'y');

    // ===== Page load fade-in =====
    window.addEventListener('load', () => {
        document.body.style.opacity = '0';
        setTimeout(() => {
            document.body.style.transition = 'opacity 0.5s ease';
            document.body.style.opacity = '1';
        }, 100);
    });

    // ===== Back to Top Button =====
    const backToTopButton = document.createElement('button');
    backToTopButton.innerHTML = '<i class="fas fa-arrow-up"></i>';
    backToTopButton.setAttribute('aria-label', 'Back to top');
    backToTopButton.style.cssText = `
        position: fixed;
        bottom: 30px;
        right: 30px;
        width: 48px;
        height: 48px;
        border-radius: 50%;
        background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
        color: white;
        border: none;
        cursor: pointer;
        display: none;
        align-items: center;
        justify-content: center;
        font-size: 1.1rem;
        box-shadow: 0 4px 16px rgba(102, 126, 234, 0.3);
        transition: all 0.3s ease;
        z-index: 999;
    `;
    document.body.appendChild(backToTopButton);

    window.addEventListener('scroll', () => {
        backToTopButton.style.display = window.pageYOffset > 300 ? 'flex' : 'none';
    });

    backToTopButton.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    backToTopButton.addEventListener('mouseenter', function () {
        this.style.transform = 'translateY(-3px)';
        this.style.boxShadow = '0 8px 24px rgba(102, 126, 234, 0.45)';
    });

    backToTopButton.addEventListener('mouseleave', function () {
        this.style.transform = 'translateY(0)';
        this.style.boxShadow = '0 4px 16px rgba(102, 126, 234, 0.3)';
    });

});
