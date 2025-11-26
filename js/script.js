// ===== Wait for DOM to be fully loaded =====
document.addEventListener('DOMContentLoaded', () => {

// ===== Dark Mode Toggle =====
const themeToggle = document.querySelector('#themeToggle');
const body = document.body;

// Check for saved theme preference or default to light mode
const currentTheme = localStorage.getItem('theme') || 'light';
if (currentTheme === 'dark') {
    body.classList.add('dark-mode');
}

themeToggle.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    
    // Save theme preference
    const theme = body.classList.contains('dark-mode') ? 'dark' : 'light';
    localStorage.setItem('theme', theme);
});

// ===== Language Toggle =====
const langToggle = document.querySelector('#langToggle');
const langOptions = document.querySelectorAll('.lang-option');

// Variable to track typing animation timeout
let typingTimeout = null;

// Translation data
const translations = {
    en: {
        greeting: "HELLO, I'M",
        name: "Byeonghyeon Kim",
        location: "Seoul, South Korea",
        description: "I build AI-powered solutions with a security-first mindset. I'm passionate about LLMs, Machine Learning, and turning data into impactful products. Currently seeking ML Engineering and AI Research opportunities.",
        resumeBtn: "My Resume",
        contactBtn: "Contact Info",
        aboutTitle: "About Me",
        aboutRole: "LLM/ML Engineer & Security Specialist",
        aboutDesc1: "I'm <strong>Byeonghyeon Kim</strong>, an AI practitioner with a foundation in Information Security. With experience in security monitoring and anomaly detection, I bring a data-driven problem-solving approach to machine learning challenges.",
        aboutDesc2: "Currently expanding my expertise in MLOps, Machine Learning, and Large Language Models through the FastCampus AI Bootcamp (14th cohort), where I build production-ready AI systems and master end-to-end ML pipelines.",
        educationTitle: "Education",
        educationContent: "<strong>Bachelor's Degree</strong> - Information Security",
        bootcampTitle: "Bootcamp",
        bootcampContent: "<strong>FastCampus AI Bootcamp</strong> - 14th Cohort",
        stat1Title: "ML Projects<br>Completed",
        stat2Title: "Avg Performance<br>Improvement",
        skillsTitle: "Technical Skills",
        projectsTitle: "Projects",
        contactTitle: "Get In Touch",
        contactDesc: "I'm always interested in new opportunities, innovative projects, and collaborative work in LLM/ML.",
        
        // Project Translations
        project1Title: "Toss Ad Click Rate Prediction",
        project1Subtitle: "CTR Prediction",
        project1Desc: "Built a CTR model on large-scale ad logs; improved log-loss/AP via sequence features, downsampling, and tuning.",
        project1Result: "Score 0.33185 → 0.34814 achieved (Top 10% in private competition)",

        project2Title: "Dialogue Summarization Model",
        project2Subtitle: "Dialogue Summarization",
        project2Desc: "Korean daily dialogue summarization with QLoRA fine-tuning plus augmentation/post-processing to improve quality.",
        project2Result: "Rouge score improved by 30% <br>(36.12 → 47.31)",

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

        project6Title: "Commerce Marketing AI Agent",
        project6Subtitle: "Custom Multi-Agent System",
        project6Desc: "Six-agent marketing system that automates trend, ad copy, segmentation, review, competitor analysis, and strategy reports to reduce repeated research effort.",
        project6Result: "End-to-End Multi-Agent <br>System Implementation",
        project7Title: "BluePy 2.0",
        project7Subtitle: "Infra Security Scanner",
        project7Desc: "Multi-platform (Windows/macOS/Linux) infra security scanner with auto remediation. Unified GUI/rollback/reporting that automate 170+ rules.",
        project7Result: "170+ rules scanned/fixed, 60%+ test coverage, production-ready",
        project8Title: "Science QA IR Competition",
        project8Subtitle: "RAG Retrieval & Ranking",
        project8Desc: "Scientific QA RAG with improved retrieval/ranking by Solar embeddings, rank-graph refactor, and prompt tuning.",
        project8Result: "MAP/MRR +107% <br>(0.4242 → 0.8795 / 0.8818)"
    },
    ko: {
        greeting: "안녕하세요, 저는",
        name: "김병현",
        location: "서울, 대한민국",
        description: "보안 우선 사고방식으로 AI 기반 솔루션을 개발합니다. LLM과 머신러닝에 열정을 갖고 데이터를 가치 있는 제품으로 전환하는 데 집중하고 있습니다. 현재 ML/LLM 엔지니어링 및 AI 연구 직무 기회를 찾고 있습니다.",
        resumeBtn: "이력서",
        contactBtn: "연락처",
        aboutTitle: "소개",
        aboutRole: "LLM/ML Engineer & Security Specialist",
        aboutDesc1: "저는 <strong>김병현</strong>입니다. 정보보안을 기반으로 AI 분야에서 활동하고 있습니다. 보안 모니터링과 이상 탐지 경험을 바탕으로 데이터 기반 문제 해결 역량을 머신러닝 과제에 적용하고 있습니다.",
        aboutDesc2: "현재 FastCampus AI 부트캠프(14기)를 통해 MLOps, 머신러닝, 대규모 언어모델(LLM) 분야의 전문성을 확장하고 있으며, 프로덕션 수준의 AI 시스템 구축과 엔드투엔드 ML 파이프라인 개발 역량을 습득하고 있습니다.",
        educationTitle: "학력",
        educationContent: "<strong>학사 학위</strong> - 정보보호학",
        bootcampTitle: "부트캠프",
        bootcampContent: "<strong>FastCampus AI 부트캠프</strong> - 14기",
        stat1Title: "프로젝트<br>완료",
        stat2Title: "평균 성능<br>향상률",
        skillsTitle: "기술 스택",
        projectsTitle: "프로젝트",
        contactTitle: "연락하기",
        contactDesc: "LLM/ML 및 AI 개발 분야의 새로운 기회, 혁신적인 프로젝트, 협업 제안에 대해 언제든 환영합니다.",
        
        // Project Translations
        project1Title: "토스 광고 클릭률 예측",
        project1Subtitle: "CTR Prediction",
        project1Desc: "광고 클릭 확률을 대규모 로그로 예측, 시퀀스 피처·다운샘플·튜닝으로 LogLoss·AP 개선.",
        project1Result: "Score 0.33185 → 0.34814 달성 (사설대회 상위 10%)",

        project2Title: "대화 요약 모델 개발",
        project2Subtitle: "Dialogue Summarization",
        project2Desc: "한국어 일상 대화 요약; QLoRA 파인튜닝과 증강/후처리로 품질 향상.",
        project2Result: "Rouge 점수 30% 향상 <br>(36.12 → 47.31)",

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

        project6Title: "상업 마케팅 AI 에이전트",
        project6Subtitle: "Custom Multi-Agent System",
        project6Desc: "6개 에이전트로 트렌드/카피/세그먼트/리뷰/경쟁사/전략 리포트를 자동 생성해 리서치 반복을 단축.",
        project6Result: "End-to-End 멀티 에이전트 <br>시스템 구현",
        project7Title: "BluePy 2.0",
        project7Subtitle: "Infra Security Scanner",
        project7Desc: "멀티플랫폼(Windows/macOS/Linux) 인프라 보안 자동 점검·수정 도구. GUI·롤백·보고서까지 일원화하고 170+ 규칙을 자동화해 비전문가도 운영 가능.",
        project7Result: "170+ 보안 규칙 점검/자동 수정, 테스트 커버리지 60%+, 프로덕션 배포 준비 중",
        project8Title: "과학 질의응답 IR 대회",
        project8Subtitle: "RAG Retrieval & Ranking",
        project8Desc: "과학 도메인 RAG 기반 검색·랭킹을 고도화. Solar 임베딩, 랭크 그래프 리팩토링, 프롬프트 고도화·미세튜닝 적용.",
        project8Result: "MAP/MRR 107% 향상 <br>(0.4242 → 0.8795 / 0.8818)"
    }
};

// Always start with Korean on page load (no language persistence)
const currentLang = 'ko';

// Ensure Korean is set as default
langOptions.forEach(opt => {
    opt.classList.toggle('active', opt.getAttribute('data-lang') === 'ko');
});

// Apply Korean translation immediately on page load
setTimeout(() => {
    console.log('Applying Korean translation...');
    switchLanguage('ko');
}, 300);

langOptions.forEach(option => {
    option.addEventListener('click', () => {
        const lang = option.getAttribute('data-lang');
        switchLanguage(lang);
        console.log('Language switched to:', lang);
    });
});

function switchLanguage(lang) {
    console.log('switchLanguage called with lang:', lang);
    
    // Update active state
    langOptions.forEach(opt => {
        opt.classList.toggle('active', opt.getAttribute('data-lang') === lang);
    });
    
    // Update navigation links (select directly to avoid declaration order issues)
    const navLinks = document.querySelectorAll('.nav-link');
    console.log('Found nav links:', navLinks.length);
    navLinks.forEach(link => {
        const text = link.getAttribute(`data-${lang}`);
        if (text) {
            link.textContent = text;
        }
    });
    
    // Update page content
    const t = translations[lang];
    
    document.querySelector('.hero-greeting').textContent = t.greeting;
    document.querySelector('.hero-name').textContent = t.name;
    document.querySelector('.hero-location').innerHTML = `<i class="fas fa-map-marker-alt"></i> ${t.location}`;
    
    // Apply typing effect to hero description
    const heroDescElement = document.querySelector('.hero-description');
    if (heroDescElement) {
        // Cancel any existing typing animation
        if (typingTimeout) {
            clearTimeout(typingTimeout);
            typingTimeout = null;
        }
        
        // Immediately clear the text
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
    
    const sectionTitles = document.querySelectorAll('.section-title');
    if (sectionTitles[0]) sectionTitles[0].textContent = t.aboutTitle;
    if (sectionTitles[1]) sectionTitles[1].textContent = t.skillsTitle;
    if (sectionTitles[2]) sectionTitles[2].textContent = t.projectsTitle;
    if (sectionTitles[3]) sectionTitles[3].textContent = t.contactTitle;
    
    const aboutRole = document.querySelector('.about-role');
    if (aboutRole) aboutRole.textContent = t.aboutRole;
    
    // Update About descriptions
    const aboutDescriptions = document.querySelectorAll('.about-description');
    if (aboutDescriptions[0]) aboutDescriptions[0].innerHTML = t.aboutDesc1;
    if (aboutDescriptions[1]) aboutDescriptions[1].innerHTML = t.aboutDesc2;
    
    // Update Education section
    const educationItems = document.querySelectorAll('.education-item');
    if (educationItems[0]) {
        const eduTitle = educationItems[0].querySelector('h4');
        const eduContent = educationItems[0].querySelector('p');
        if (eduTitle) eduTitle.textContent = t.educationTitle;
        if (eduContent) eduContent.innerHTML = t.educationContent;
    }
    if (educationItems[1]) {
        const bootTitle = educationItems[1].querySelector('h4');
        const bootContent = educationItems[1].querySelector('p');
        if (bootTitle) bootTitle.textContent = t.bootcampTitle;
        if (bootContent) bootContent.innerHTML = t.bootcampContent;
    }
    
    // Update Stats
    const statItems = document.querySelectorAll('.stat-item p');
    if (statItems[0]) statItems[0].innerHTML = t.stat1Title;
    if (statItems[1]) statItems[1].innerHTML = t.stat2Title;
    
    const contactDesc = document.querySelector('.contact-description');
    if (contactDesc) contactDesc.textContent = t.contactDesc;
    
    // Update Project cards
    const projectCards = document.querySelectorAll('.project-card');
    console.log('Found project cards:', projectCards.length);
    if (projectCards.length >= 5) {
        // Project 1
        const p1Title = projectCards[0].querySelector('h3');
        const p1Subtitle = projectCards[0].querySelector('.project-subtitle');
        const p1Desc = projectCards[0].querySelector('.project-description');
        const p1Result = projectCards[0].querySelector('.project-result');
        if (p1Title) p1Title.textContent = t.project1Title;
        if (p1Subtitle) p1Subtitle.textContent = t.project1Subtitle;
        if (p1Desc) p1Desc.textContent = t.project1Desc;
        if (p1Result) p1Result.innerHTML = '<i class="fas fa-chart-line"></i>\n                        <strong>Result:</strong> ' + t.project1Result;

        // Project 2
        const p2Title = projectCards[1].querySelector('h3');
        const p2Subtitle = projectCards[1].querySelector('.project-subtitle');
        const p2Desc = projectCards[1].querySelector('.project-description');
        const p2Result = projectCards[1].querySelector('.project-result');
        if (p2Title) p2Title.textContent = t.project2Title;
        if (p2Subtitle) p2Subtitle.textContent = t.project2Subtitle;
        if (p2Desc) p2Desc.textContent = t.project2Desc;
        if (p2Result) p2Result.innerHTML = '<i class="fas fa-chart-line"></i>\n                        <strong>Result:</strong> ' + t.project2Result;

        // Project 3
        const p3Title = projectCards[2].querySelector('h3');
        const p3Subtitle = projectCards[2].querySelector('.project-subtitle');
        const p3Desc = projectCards[2].querySelector('.project-description');
        const p3Result = projectCards[2].querySelector('.project-result');
        if (p3Title) p3Title.textContent = t.project3Title;
        if (p3Subtitle) p3Subtitle.textContent = t.project3Subtitle;
        if (p3Desc) p3Desc.textContent = t.project3Desc;
        if (p3Result) p3Result.innerHTML = '<i class="fas fa-check-circle"></i>\n                        <strong>Result:</strong> ' + t.project3Result;

        // Project 4
        const p4Title = projectCards[3].querySelector('h3');
        const p4Subtitle = projectCards[3].querySelector('.project-subtitle');
        const p4Desc = projectCards[3].querySelector('.project-description');
        const p4Result = projectCards[3].querySelector('.project-result');
        if (p4Title) p4Title.textContent = t.project4Title;
        if (p4Subtitle) p4Subtitle.textContent = t.project4Subtitle;
        if (p4Desc) p4Desc.textContent = t.project4Desc;
        if (p4Result) p4Result.innerHTML = '<i class="fas fa-chart-line"></i>\n                        <strong>Result:</strong> ' + t.project4Result;

        // Project 5
        const p5Title = projectCards[4].querySelector('h3');
        const p5Subtitle = projectCards[4].querySelector('.project-subtitle');
        const p5Desc = projectCards[4].querySelector('.project-description');
        const p5Result = projectCards[4].querySelector('.project-result');
        if (p5Title) p5Title.textContent = t.project5Title;
        if (p5Subtitle) p5Subtitle.textContent = t.project5Subtitle;
        if (p5Desc) p5Desc.textContent = t.project5Desc;
        if (p5Result) p5Result.innerHTML = '<i class="fas fa-chart-line"></i>\n                        <strong>Result:</strong> ' + t.project5Result;

        // Project 6
        if (projectCards.length >= 6) {
            const p6Title = projectCards[5].querySelector('h3');
            const p6Subtitle = projectCards[5].querySelector('.project-subtitle');
            const p6Desc = projectCards[5].querySelector('.project-description');
            const p6Result = projectCards[5].querySelector('.project-result');
            if (p6Title) p6Title.textContent = t.project6Title;
            if (p6Subtitle) p6Subtitle.textContent = t.project6Subtitle;
            if (p6Desc) p6Desc.textContent = t.project6Desc;
            if (p6Result) p6Result.innerHTML = '<i class="fas fa-check-circle"></i>\n                        <strong>Result:</strong> ' + t.project6Result;
        }

        // Project 7
        if (projectCards.length >= 7) {
            const p7Title = projectCards[6].querySelector('h3');
            const p7Subtitle = projectCards[6].querySelector('.project-subtitle');
            const p7Desc = projectCards[6].querySelector('.project-description');
            const p7Result = projectCards[6].querySelector('.project-result');
            if (p7Title) p7Title.textContent = t.project7Title;
            if (p7Subtitle) p7Subtitle.textContent = t.project7Subtitle;
            if (p7Desc) p7Desc.textContent = t.project7Desc;
            if (p7Result) p7Result.innerHTML = '<i class="fas fa-check-circle"></i>\n                        <strong>Result:</strong> ' + t.project7Result;
        }

        // Project 8
        if (projectCards.length >= 8) {
            const p8Title = projectCards[7].querySelector('h3');
            const p8Subtitle = projectCards[7].querySelector('.project-subtitle');
            const p8Desc = projectCards[7].querySelector('.project-description');
            const p8Result = projectCards[7].querySelector('.project-result');
            if (p8Title) p8Title.textContent = t.project8Title;
            if (p8Subtitle) p8Subtitle.textContent = t.project8Subtitle;
            if (p8Desc) p8Desc.textContent = t.project8Desc;
            if (p8Result) p8Result.innerHTML = '<i class="fas fa-chart-line"></i>\n                        <strong>Result:</strong> ' + t.project8Result;
        }
    }
    
    // Note: Language preference is NOT saved - always resets to EN on refresh
}

// ===== Mobile Menu Toggle =====
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');
const navLinks = document.querySelectorAll('.nav-link');

hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    hamburger.classList.toggle('active');
});

// Close menu when clicking on a link
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        hamburger.classList.remove('active');
    });
});

// ===== Smooth Scrolling for Navigation =====
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const offsetTop = target.offsetTop - 70;
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// ===== Navbar Scroll Effect =====
const navbar = document.querySelector('.navbar');
let lastScroll = 0;

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;

    if (currentScroll <= 0) {
        navbar.style.boxShadow = '0 2px 8px rgba(0,0,0,0.08)';
    } else {
        navbar.style.boxShadow = '0 4px 16px rgba(0,0,0,0.12)';
    }

    lastScroll = currentScroll;
});

// ===== Active Navigation Link on Scroll =====
const sections = document.querySelectorAll('section');

window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (pageYOffset >= (sectionTop - 100)) {
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

// ===== Skills Horizontal Scroll with Mouse Wheel =====
const skillsContainer = document.querySelector('.skills-scroll-container');

if (skillsContainer) {
    skillsContainer.addEventListener('wheel', (e) => {
        if (e.deltaY !== 0) {
            e.preventDefault();
            skillsContainer.scrollLeft += e.deltaY;
        }
    });

    // Drag to scroll functionality
    let isDown = false;
    let startX;
    let scrollLeft;

    skillsContainer.addEventListener('mousedown', (e) => {
        isDown = true;
        skillsContainer.style.cursor = 'grabbing';
        startX = e.pageX - skillsContainer.offsetLeft;
        scrollLeft = skillsContainer.scrollLeft;
    });

    skillsContainer.addEventListener('mouseleave', () => {
        isDown = false;
        skillsContainer.style.cursor = 'grab';
    });

    skillsContainer.addEventListener('mouseup', () => {
        isDown = false;
        skillsContainer.style.cursor = 'grab';
    });

    skillsContainer.addEventListener('mousemove', (e) => {
        if (!isDown) return;
        e.preventDefault();
        const x = e.pageX - skillsContainer.offsetLeft;
        const walk = (x - startX) * 2;
        skillsContainer.scrollLeft = scrollLeft - walk;
    });

    skillsContainer.style.cursor = 'grab';
}

// ===== Intersection Observer for Animations =====
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe all sections
document.querySelectorAll('section').forEach(section => {
    section.style.opacity = '0';
    section.style.transform = 'translateY(20px)';
    section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(section);
});

// ===== Project Cards Animation =====
const projectCards = document.querySelectorAll('.project-card');
projectCards.forEach((card, index) => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(20px)';
    card.style.transition = `opacity 0.5s ease ${index * 0.1}s, transform 0.5s ease ${index * 0.1}s`;
    
    const cardObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, { threshold: 0.1 });
    
    cardObserver.observe(card);
});

// ===== Skills Cards Animation =====
const skillCards = document.querySelectorAll('.skill-category');
skillCards.forEach((card, index) => {
    card.style.opacity = '0';
    card.style.transform = 'translateX(-20px)';
    card.style.transition = `opacity 0.5s ease ${index * 0.1}s, transform 0.5s ease ${index * 0.1}s`;
    
    const skillObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateX(0)';
            }
        });
    }, { threshold: 0.1 });
    
    skillObserver.observe(card);
});

// ===== Loading Animation =====
window.addEventListener('load', () => {
    document.body.style.opacity = '0';
    setTimeout(() => {
        document.body.style.transition = 'opacity 0.5s ease';
        document.body.style.opacity = '1';
    }, 100);
});

// ===== Contact Links Hover Effect =====
const contactCards = document.querySelectorAll('.contact-card');
contactCards.forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.querySelector('i').style.transform = 'scale(1.2) rotate(5deg)';
        this.querySelector('i').style.transition = 'transform 0.3s ease';
    });
    
    card.addEventListener('mouseleave', function() {
        this.querySelector('i').style.transform = 'scale(1) rotate(0deg)';
    });
});

// ===== Back to Top Button (Optional) =====
const backToTopButton = document.createElement('button');
backToTopButton.innerHTML = '<i class="fas fa-arrow-up"></i>';
backToTopButton.className = 'back-to-top';
backToTopButton.style.cssText = `
    position: fixed;
    bottom: 30px;
    right: 30px;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background: var(--primary-color);
    color: white;
    border: none;
    cursor: pointer;
    display: none;
    align-items: center;
    justify-content: center;
    font-size: 1.2rem;
    box-shadow: 0 4px 12px rgba(0,0,0,0.2);
    transition: all 0.3s ease;
    z-index: 999;
`;

document.body.appendChild(backToTopButton);

window.addEventListener('scroll', () => {
    if (window.pageYOffset > 300) {
        backToTopButton.style.display = 'flex';
    } else {
        backToTopButton.style.display = 'none';
    }
});

backToTopButton.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

backToTopButton.addEventListener('mouseenter', function() {
    this.style.transform = 'translateY(-5px)';
    this.style.boxShadow = '0 6px 16px rgba(0,0,0,0.3)';
});

backToTopButton.addEventListener('mouseleave', function() {
    this.style.transform = 'translateY(0)';
    this.style.boxShadow = '0 4px 12px rgba(0,0,0,0.2)';
});

console.log('Portfolio loaded successfully! 🚀');

}); // End of DOMContentLoaded
