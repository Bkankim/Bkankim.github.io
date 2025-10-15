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
        contactDesc: "I'm always interested in discussing new opportunities, innovative projects, and collaborative ventures in LLM/ML and AI development."
    },
    ko: {
        greeting: "안녕하세요, 저는",
        name: "김병현",
        location: "서울, 대한민국",
        description: "보안 우선 사고방식으로 AI 기반 솔루션을 구축합니다. LLM, 머신러닝에 열정을 가지고 있으며, 데이터를 임팩트 있는 제품으로 변환합니다. ML 엔지니어링 및 AI 연구 직무에 관심이 있습니다.",
        resumeBtn: "이력서",
        contactBtn: "연락처",
        aboutTitle: "소개",
        aboutRole: "LLM/ML Engineer & Security Specialist",
        aboutDesc1: "저는 <strong>김병현</strong>으로, 정보보호학 기반의 AI 실무자입니다. 보안관제 및 이상징후 분석 경험을 바탕으로 데이터 기반 문제 해결에 강점을 가지고 머신러닝 과제에 접근합니다.",
        aboutDesc2: "현재 FastCampus AI 부트캠프 (14기)를 통해 MLOps, 머신러닝, 대규모 언어모델(LLM) 분야의 전문성을 강화하고 있으며, 프로덕션 레벨의 AI 시스템 구축과 엔드투엔드 ML 파이프라인을 마스터하고 있습니다.",
        educationTitle: "학력",
        educationContent: "<strong>학사 학위</strong> - 정보보호학",
        bootcampTitle: "부트캠프",
        bootcampContent: "<strong>FastCampus AI 부트캠프</strong> - 14기",
        stat1Title: "ML 프로젝트<br>완료",
        stat2Title: "평균 성능<br>향상률",
        skillsTitle: "기술 스택",
        projectsTitle: "프로젝트",
        contactTitle: "연락하기",
        contactDesc: "LLM/ML 및 AI 개발 분야에서 새로운 기회, 혁신적인 프로젝트, 협업 벤처에 대해 논의하는 것에 항상 관심이 있습니다."
    }
};

// Check for saved language preference or default to English
const currentLang = localStorage.getItem('language') || 'en';

// Apply saved language after a short delay to ensure DOM is ready
setTimeout(() => {
    if (currentLang === 'ko') {
        switchLanguage('ko');
    }
}, 100);

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
    document.querySelector('.hero-description').textContent = t.description;
    
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
    
    // Save language preference
    localStorage.setItem('language', lang);
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

// ===== Type Writer Effect for Hero Section (Optional) =====
const heroDescription = document.querySelector('.hero-description');
if (heroDescription) {
    const text = heroDescription.textContent;
    heroDescription.textContent = '';
    let i = 0;
    
    function typeWriter() {
        if (i < text.length) {
            heroDescription.textContent += text.charAt(i);
            i++;
            setTimeout(typeWriter, 20);
        }
    }
    
    // Start typing effect after a short delay
    setTimeout(typeWriter, 500);
}

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