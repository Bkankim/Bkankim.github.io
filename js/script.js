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

// Translation data
const translations = {
    en: {
        greeting: "HELLO, I'M",
        name: "Byeonghyeon Kim",
        location: "Seoul, South Korea",
        description: "I build AI-powered solutions with a security-first mindset. Passionate about LLMs, Machine Learning, and transforming data into impactful products. Open to ML Engineering and AI Research roles.",
        resumeBtn: "My Resume",
        contactBtn: "Contact Info",
        aboutTitle: "About Me",
        aboutRole: "LLM/ML Engineer & Security Specialist",
        aboutDesc1: "I'm <strong>Byeonghyeon Kim</strong>, an AI practitioner with a foundation in Information Security. With experience in security monitoring and anomaly detection, I bring a data-driven problem-solving approach to machine learning challenges.",
        aboutDesc2: "Currently enhancing my expertise in MLOps, Machine Learning, and Large Language Models through FastCampus AI Bootcamp (14th cohort), where I'm building production-ready AI systems and mastering end-to-end ML pipelines.",
        educationTitle: "Education",
        educationContent: "<strong>Bachelor's Degree</strong> - Information Security",
        bootcampTitle: "Bootcamp",
        bootcampContent: "<strong>FastCampus AI Bootcamp</strong> - 14th Cohort",
        stat1Title: "ML Projects<br>Completed",
        stat2Title: "Avg Performance<br>Improvement",
        skillsTitle: "Technical Skills",
        projectsTitle: "Projects",
        contactTitle: "Get In Touch",
        contactDesc: "I'm always interested in discussing new opportunities, innovative projects, and collaborative ventures in LLM/ML and AI development.",
        
        // Project Translations
        project1Title: "Toss Ad Click Rate Prediction",
        project1Desc: "Accurately predicted which users would click on which ads through statistical data analysis. Improved LogLoss and AP scores through Neural CTR model experiments based on large-scale log data.",
        project1Result: "Score 0.33185 → 0.34814 achieved (Top 10% in private competition)",
        
        project2Title: "Dialogue Summarization Model",
        project2Desc: "Developed a model to effectively generate summaries of Korean daily conversations. Preprocessed diverse Korean dialogue training data, and conducted LoRA/QLoRA-based fine-tuning with extensive augmentation and post-processing research.",
        project2Result: "Rouge score improved by 30% <br>(36.12 → 47.31)",
        
        project3Title: "Movie Rating Prediction Service",
        project3Desc: "Built a movie rating prediction service and MLOps pipeline using TMDB API based on user reviews. Fully automated from data collection through training, deployment, and monitoring.",
        project3Result: "End-to-End CI/CD MLOps <br>Pipeline Implementation",
        
        project4Title: "Image Classification Model",
        project4Desc: "Automated classification of scanned document images into 17 classes. Conducted extensive backbone experiments, TTA application, augmentation techniques, and post-processing research to improve image classification performance at the pre-OCR stage.",
        project4Result: "F1-score improved by 470% <br>(0.1701 → 0.9689)",
        
        project5Title: "Real Estate Transaction Price Prediction",
        project5Desc: "Trained on historical transaction data from public datasets to improve prediction accuracy for future real estate transaction prices and perform pattern analysis. Minimized prediction errors and enhanced model performance through Feature Engineering with 60+ features and K-Fold validation.",
        project5Result: "RMSE improved by 58% <br>(48192 → 20006)"
    },
    ko: {
        greeting: "안녕하세요, 저는",
        name: "김병현",
        location: "서울, 대한민국",
        description: "보안 우선 사고방식으로 AI 기반 솔루션을 개발합니다. LLM, 머신러닝에 열정을 가지고 있으며, 데이터를 임팩트 있는 제품으로 개발합니다. ML/LLM 엔지니어링 및 AI 연구 직무에 큰 관심이 있습니다.",
        resumeBtn: "이력서",
        contactBtn: "연락처",
        aboutTitle: "소개",
        aboutRole: "LLM/ML Engineer & Security Specialist",
        aboutDesc1: "저는 <strong>김병현</strong>이고, 정보보호 도메인의 AI 실무자입니다. 다양한 보안 분석과 네트워크 엔지니어링 경험을 바탕으로 데이터 기반 분석에 강점을 가지고 머신러닝 등 AI 전반의 과제를 해결합니다.",
        aboutDesc2: "현재 FastCampus AI 부트캠프 (14기)를 통해 MLOps, 머신러닝, 대규모 언어모델(LLM) 분야의 전문성을 강화하고 있으며, 프로덕션 레벨의 AI 시스템 구축과 엔드투엔드 ML 파이프라인을 마스터하고 있습니다.",
        educationTitle: "학력",
        educationContent: "<strong>학사 학위</strong> - 정보보호학",
        bootcampTitle: "부트캠프",
        bootcampContent: "<strong>FastCampus AI 부트캠프</strong> - 14기",
        stat1Title: "프로젝트<br>완료",
        stat2Title: "평균 성능<br>향상률",
        skillsTitle: "기술 스택",
        projectsTitle: "프로젝트",
        contactTitle: "연락하기",
        contactDesc: "LLM/ML 및 AI 개발 분야에서 새로운 기회, 혁신적인 프로젝트, 협업 벤처에 대해 논의하는 것에 항상 관심이 있습니다.",
        
        // Project Translations
        project1Title: "토스 광고 클릭률 예측",
        project1Desc: "어떤 유저가 어떤 광고를 어떤 흐름으로 클릭한 것인지 그 확률을 통계 데이터 기반 분석을 통해 정확하게 예측. 대규모 로그 데이터 기반 Neural CTR 모델 실험으로 LogLoss 및 AP 점수 개선.",
        project1Result: "Score 0.33185 → 0.34814 달성 (사설대회 상위 10%)",
        
        project2Title: "대화 요약 모델 개발",
        project2Desc: "한국어 일상 대화 요약을 효과적으로 생성하는 모델 개발. 다양한 한국어 대화 학습 데이터를 전처리하고 LoRA/QLoRA 기반 미세조정 및 다양한 증강, 후처리 연구 및 수행.",
        project2Result: "Rouge 점수 30% 향상 <br>(36.12 → 47.31)",
        
        project3Title: "영화 평점 예측 서비스",
        project3Desc: "TMDB API를 활용한 사용자 리뷰 기반 영화 평점 예측 및 MLOps 파이프라인 구축. 데이터 수집부터 학습, 배포, 모니터링까지 완전 자동화.",
        project3Result: "End-to-End CI/CD MLOps <br>파이프라인 구현",
        
        project4Title: "이미지 분류 모델 개발",
        project4Desc: "스캔 문서 이미지의 유형 자동 분류 (17-class). 문서 OCR 전단계에서 이미지 분류 성능 향상을 위한 다양한 백본 실험 및 TTA 적용, 다양한 증강, 후처리 연구 및 수행.",
        project4Result: "F1-score 470% 향상 <br>(0.1701 → 0.9689)",
        
        project5Title: "부동산 실거래가 예측",
        project5Desc: "공공데이터 기반 과거 거래가를 학습시켜 미래 부동산 실거래가 예측 정확도 향상 및 패턴 분석 수행. 60여 개 특성을 활용한 Feature Engineering과 K-Fold 검증으로 예측 오차 최소화 및 모델 성능 향상.",
        project5Result: "RMSE 58% 향상 <br>(48192 → 20006)"
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
        heroDescElement.textContent = '';
        let i = 0;
        const descText = t.description;
        
        function typeWriter() {
            if (i < descText.length) {
                heroDescElement.textContent += descText.charAt(i);
                i++;
                setTimeout(typeWriter, 20);
            }
        }
        
        setTimeout(typeWriter, 200);
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
        const p1Desc = projectCards[0].querySelector('.project-description');
        const p1Result = projectCards[0].querySelector('.project-result');
        if (p1Title) {
            p1Title.textContent = t.project1Title;
            console.log('Updated project 1 title to:', t.project1Title);
        }
        if (p1Desc) p1Desc.textContent = t.project1Desc;
        if (p1Result) p1Result.innerHTML = '<i class="fas fa-chart-line"></i>\n                        <strong>Result:</strong> ' + t.project1Result;
        
        // Project 2
        const p2Title = projectCards[1].querySelector('h3');
        const p2Desc = projectCards[1].querySelector('.project-description');
        const p2Result = projectCards[1].querySelector('.project-result');
        if (p2Title) p2Title.textContent = t.project2Title;
        if (p2Desc) p2Desc.textContent = t.project2Desc;
        if (p2Result) p2Result.innerHTML = '<i class="fas fa-chart-line"></i>\n                        <strong>Result:</strong> ' + t.project2Result;
        
        // Project 3
        const p3Title = projectCards[2].querySelector('h3');
        const p3Desc = projectCards[2].querySelector('.project-description');
        const p3Result = projectCards[2].querySelector('.project-result');
        if (p3Title) p3Title.textContent = t.project3Title;
        if (p3Desc) p3Desc.textContent = t.project3Desc;
        if (p3Result) p3Result.innerHTML = '<i class="fas fa-check-circle"></i>\n                        <strong>Result:</strong> ' + t.project3Result;
        
        // Project 4
        const p4Title = projectCards[3].querySelector('h3');
        const p4Desc = projectCards[3].querySelector('.project-description');
        const p4Result = projectCards[3].querySelector('.project-result');
        if (p4Title) p4Title.textContent = t.project4Title;
        if (p4Desc) p4Desc.textContent = t.project4Desc;
        if (p4Result) p4Result.innerHTML = '<i class="fas fa-chart-line"></i>\n                        <strong>Result:</strong> ' + t.project4Result;
        
        // Project 5
        const p5Title = projectCards[4].querySelector('h3');
        const p5Desc = projectCards[4].querySelector('.project-description');
        const p5Result = projectCards[4].querySelector('.project-result');
        if (p5Title) p5Title.textContent = t.project5Title;
        if (p5Desc) p5Desc.textContent = t.project5Desc;
        if (p5Result) p5Result.innerHTML = '<i class="fas fa-chart-line"></i>\n                        <strong>Result:</strong> ' + t.project5Result;
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