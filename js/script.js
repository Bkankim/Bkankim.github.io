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
    const langOptions = document.querySelectorAll('.lang-option');


    const translations = {
        en: {
            greeting: "HELLO, I'M",
            name: "Byeonghyeon Kim",
            heroRole: "AI & Security Engineer",
            location: "Gyeonggi-do, South Korea",
            description: "AI & Security engineer who ships. 3 years in security monitoring & CERT, then production-grade AI systems — from multi-agent orchestration to enterprise contract work.\nPrimarily seeking full-time AI/Security engineering roles. Freelance also welcome.",
            resumeBtn: "My Resume",
            contactBtn: "Contact Info",
            aboutTitle: ["About ", "Me"],
            aboutSubtitle: "Building AI solutions from a security-first perspective",
            aboutRole: "AI & Security Engineer",
            aboutDesc1: "I'm <strong>Byeonghyeon Kim</strong>, an AI & security engineer with a foundation in Information Security. With 3 years of experience in security monitoring and CERT at CMT EYES, I bring a data-driven problem-solving approach to building AI-powered systems.",
            aboutDesc2: "Completed FastCampus AI Bootcamp (14th cohort), now building production-grade AI systems.",
            aboutDesc3: "From multi-agent orchestration to enterprise AI contract work and shipped products — proof I take systems all the way to production. Primarily seeking full-time AI/Security engineering roles; open to freelance.",
            experienceTitle: "Experience",
            experienceContent: "<strong>CMT EYES</strong><br>Security Monitoring · CERT (3 yrs)",
            educationTitle: "Education",
            educationContent: "<strong>Bachelor's Degree</strong><br>Information Security",
            bootcampTitle: "Bootcamp",
            bootcampContent: "<strong>FastCampus AI Bootcamp</strong><br>14th Cohort (Completed)",
            stat1Title: "Projects<br>Built",
            stat2Title: "AI<br>Agents",
            stat3Title: "Products<br>Shipped",
            skillsTitle: ["Technical ", "Skills"],
            skillsSubtitle: "Tech stack spanning AI/ML, web, and security",
            projectsTitle: ["Featured ", "Projects"],
            projectsSubtitle: "From AI products to infrastructure and ML engineering",
            contactTitle: ["Get In ", "Touch"],
            contactDesc: "I'm always interested in new opportunities, innovative projects, and collaborative work in AI development.",
        },
        ko: {
            greeting: "안녕하세요, 저는",
            name: "김병현",
            heroRole: "AI & Security Engineer",
            location: "경기도, 대한민국",
            description: "끝까지 출시하는 AI·보안 엔지니어입니다. 보안 관제·CERT 3년 위에 프로덕션 수준 AI 시스템을 만듭니다 — 멀티 에이전트 오케스트레이션부터 기업 계약 실무까지.\n정규직 AI·보안 엔지니어 포지션을 우선으로 찾고 있습니다. 외주도 환영합니다.",
            resumeBtn: "이력서",
            contactBtn: "연락처",
            aboutTitle: ["소개", ""],
            aboutSubtitle: "보안 전문가의 시선으로 AI 솔루션을 만듭니다",
            aboutRole: "AI & Security Engineer",
            aboutDesc1: "저는 <strong>김병현</strong>입니다. 정보보안을 기반으로 AI 시스템을 만드는 AI·보안 엔지니어입니다. CMT EYES에서 3년간 보안 관제 및 CERT 활동을 수행했으며, 이를 바탕으로 데이터 기반 문제 해결 역량을 AI 제품 개발에 적용하고 있습니다.",
            aboutDesc2: "FastCampus AI 부트캠프(14기)를 수료하고, 현재 프로덕션 수준의 AI 시스템을 구축하고 있습니다.",
            aboutDesc3: "멀티 에이전트 오케스트레이션부터 기업 AI 계약 실무, 출시한 제품까지 — 시스템을 끝까지 프로덕션으로 가져가는 사람입니다. 정규직 AI·보안 엔지니어 포지션을 우선으로 찾고, 외주도 열려 있습니다.",
            experienceTitle: "경력",
            experienceContent: "<strong>CMT EYES</strong><br>보안 관제 · CERT (3년)",
            educationTitle: "학력",
            educationContent: "<strong>학사 학위</strong><br>정보보호학",
            bootcampTitle: "부트캠프",
            bootcampContent: "<strong>FastCampus AI 부트캠프</strong><br>14기 (수료)",
            stat1Title: "프로젝트<br>수행",
            stat2Title: "AI<br>에이전트",
            stat3Title: "프로덕트<br>출시",
            skillsTitle: ["기술 ", "스택"],
            skillsSubtitle: "AI/ML과 보안을 아우르는 기술 스택",
            projectsTitle: ["주요 ", "프로젝트"],
            projectsSubtitle: "AI 프로덕트부터 인프라, ML 엔지니어링까지",
            contactTitle: ["연락", "하기"],
            contactDesc: "AI 개발 분야의 새로운 기회, 혁신적인 프로젝트, 협업 제안에 대해 언제든 환영합니다.",
        }
    };



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

        // Filter buttons
        document.querySelectorAll('.filter-btn').forEach(btn => {
            const text = btn.getAttribute(`data-${lang}`);
            if (text) btn.textContent = text;
        });

        const t = translations[lang];

        document.querySelector('.hero-greeting').textContent = t.greeting;
        document.querySelector('.hero-name').textContent = t.name;

        const heroRoleSpan = document.querySelector('.hero-role span');
        if (heroRoleSpan) heroRoleSpan.textContent = t.heroRole;

        document.querySelector('.hero-location').innerHTML = `<i class="fas fa-map-marker-alt"></i> ${t.location}`;

        const heroDescElement = document.querySelector('.hero-description');
        if (heroDescElement) {
            const descText = t.description;
            heroDescElement.innerHTML = descText.replace(/\n/g, '<br>');
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
        if (aboutDescriptions[2]) aboutDescriptions[2].innerHTML = t.aboutDesc3;

        const educationItems = document.querySelectorAll('.education-item');
        if (educationItems[0]) {
            const h4 = educationItems[0].querySelector('h4');
            const p = educationItems[0].querySelector('p');
            if (h4) h4.textContent = t.experienceTitle;
            if (p) p.innerHTML = t.experienceContent;
        }
        if (educationItems[1]) {
            const h4 = educationItems[1].querySelector('h4');
            const p = educationItems[1].querySelector('p');
            if (h4) h4.textContent = t.educationTitle;
            if (p) p.innerHTML = t.educationContent;
        }
        if (educationItems[2]) {
            const h4 = educationItems[2].querySelector('h4');
            const p = educationItems[2].querySelector('p');
            if (h4) h4.textContent = t.bootcampTitle;
            if (p) p.innerHTML = t.bootcampContent;
        }

        const statItems = document.querySelectorAll('.stat-item p');
        if (statItems[0]) statItems[0].innerHTML = t.stat1Title;
        if (statItems[1]) statItems[1].innerHTML = t.stat2Title;
        if (statItems[2]) statItems[2].innerHTML = t.stat3Title;

        const contactDesc = document.querySelector('.contact-description');
        if (contactDesc) contactDesc.textContent = t.contactDesc;

        // Re-render project cards via projects.js SSOT
        if (window.renderProjects) window.renderProjects(lang);

        // Re-apply active filter after re-render
        const activeBtn = document.querySelector('.filter-btn.active');
        if (activeBtn) {
            const activeFilter = activeBtn.getAttribute('data-filter');
            if (activeFilter !== 'all') {
                document.querySelectorAll('.project-card').forEach(card => {
                    card.classList.toggle('hidden', card.getAttribute('data-category') !== activeFilter);
                });
            }
        }
    }

    // ===== Project Filter =====
    const filterBtns = document.querySelectorAll('.filter-btn');

    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            const filter = btn.getAttribute('data-filter');

        document.querySelectorAll('.project-card').forEach(card => {
            if (filter === 'all' || card.getAttribute('data-category') === filter) {
                card.classList.remove('hidden');
                card.style.opacity = '0';
                card.style.transform = 'translateY(20px)';
                requestAnimationFrame(() => {
                    card.style.opacity = '1';
                    card.style.transform = 'translate(0)';
                });
            } else {
                card.classList.add('hidden');
            }
        });
        });
    });

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

    const animateCards = (selector) => {
        document.querySelectorAll(selector).forEach((card, index) => {
            card.style.opacity = '0';
            card.style.transform = 'translateY(20px)';
            card.style.transition = `opacity 0.5s ease ${index * 0.06}s, transform 0.5s ease ${index * 0.06}s`;

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

    animateCards('.skill-category');
    animateCards('.contact-card');


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
