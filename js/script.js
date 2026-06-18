document.addEventListener('DOMContentLoaded', () => {
    const body = document.body;
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    /* ===== Theme (dark default, body.light = light) ===== */
    const themeToggle = document.querySelector('#themeToggle');
    if (localStorage.getItem('theme') === 'light') body.classList.add('light');
    themeToggle.addEventListener('click', () => {
        body.classList.toggle('light');
        localStorage.setItem('theme', body.classList.contains('light') ? 'light' : 'dark');
    });

    /* ===== Language (attribute-driven i18n) ===== */
    const langOptions = document.querySelectorAll('.lang-option');
    let currentLang = localStorage.getItem('lang') || 'ko';

    function reapplyFilter() {
        const activeBtn = document.querySelector('.filter-btn.active');
        const filter = activeBtn ? activeBtn.getAttribute('data-filter') : 'all';
        document.querySelectorAll('.project-card').forEach(card => {
            card.classList.toggle('hidden', filter !== 'all' && card.getAttribute('data-category') !== filter);
        });
    }

    function applyLang(lang) {
        currentLang = lang;
        document.documentElement.lang = lang;
        document.querySelectorAll('[data-en]').forEach(el => {
            const v = el.getAttribute('data-' + lang);
            if (v != null) el.innerHTML = v;
        });
        langOptions.forEach(o => o.classList.toggle('active', o.getAttribute('data-lang') === lang));
        if (window.renderProjects) window.renderProjects(lang);
        reapplyFilter();
        localStorage.setItem('lang', lang);
    }

    langOptions.forEach(option => {
        option.addEventListener('click', () => applyLang(option.getAttribute('data-lang')));
    });
    applyLang(currentLang);

    /* ===== Project filter ===== */
    const filterBtns = document.querySelectorAll('.filter-btn');
    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            const filter = btn.getAttribute('data-filter');
            document.querySelectorAll('.project-card').forEach(card => {
                const match = filter === 'all' || card.getAttribute('data-category') === filter;
                if (match) {
                    card.classList.remove('hidden');
                    if (!prefersReduced) {
                        card.style.opacity = '0';
                        card.style.transform = 'translateY(16px)';
                        requestAnimationFrame(() => {
                            card.style.opacity = '1';
                            card.style.transform = 'none';
                        });
                    }
                } else {
                    card.classList.add('hidden');
                }
            });
        });
    });

    /* ===== Mobile menu ===== */
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');
    hamburger.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        hamburger.classList.toggle('active');
    });
    navLinks.forEach(link => link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        hamburger.classList.remove('active');
    }));

    /* ===== Smooth scroll ===== */
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const id = this.getAttribute('href');
            if (id === '#' || id.length < 2) return;
            const target = document.querySelector(id);
            if (target) {
                e.preventDefault();
                window.scrollTo({ top: target.offsetTop - 64, behavior: 'smooth' });
            }
        });
    });

    /* ===== Navbar scrolled + active nav ===== */
    const navbar = document.querySelector('.navbar');
    const sections = document.querySelectorAll('section[id]');
    const onScroll = () => {
        navbar.classList.toggle('scrolled', window.scrollY > 10);
        let current = '';
        sections.forEach(section => {
            if (window.scrollY >= section.offsetTop - 120) current = section.getAttribute('id');
        });
        navLinks.forEach(link => {
            link.classList.toggle('active', link.getAttribute('href') === `#${current}`);
        });
        backToTop.style.display = window.scrollY > 400 ? 'flex' : 'none';
    };

    /* ===== Reveal on scroll ===== */
    const revealSelectors = [
        '.section-label', '.section-title', '.section-subtitle',
        '.about-body', '.terminal', '.stat', '.skill-category',
        '.skill-tools', '.tl-item', '.contact-email', '.contact-card', '.project-filters'
    ];
    if (!prefersReduced) {
        revealSelectors.forEach(sel => document.querySelectorAll(sel).forEach((el, i) => {
            el.classList.add('reveal');
            el.style.transitionDelay = (Math.min(i, 6) * 0.05) + 's';
        }));
        const revealObs = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) { entry.target.classList.add('in'); revealObs.unobserve(entry.target); }
            });
        }, { threshold: 0.12 });
        document.querySelectorAll('.reveal').forEach(el => revealObs.observe(el));
    }

    /* ===== Skill bar fill ===== */
    const fillBars = (root) => root.querySelectorAll('.bar i').forEach(bar => {
        bar.style.width = (bar.getAttribute('data-w') || 0) + '%';
    });
    if (prefersReduced) {
        document.querySelectorAll('.skill-category').forEach(fillBars);
    } else {
        const barObs = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) { fillBars(entry.target); barObs.unobserve(entry.target); }
            });
        }, { threshold: 0.3 });
        document.querySelectorAll('.skill-category').forEach(cat => barObs.observe(cat));
    }

    /* ===== Stat counters ===== */
    const animateCount = (el) => {
        const target = parseInt(el.getAttribute('data-count'), 10) || 0;
        const suffix = el.getAttribute('data-suffix') || '';
        if (prefersReduced) { el.textContent = target + suffix; return; }
        const dur = 1200, start = performance.now();
        const tick = (now) => {
            const p = Math.min((now - start) / dur, 1);
            const eased = 1 - Math.pow(1 - p, 3);
            el.textContent = Math.round(target * eased) + suffix;
            if (p < 1) requestAnimationFrame(tick);
        };
        requestAnimationFrame(tick);
    };
    const statsEl = document.querySelector('#stats');
    if (statsEl) {
        const statObs = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.querySelectorAll('.stat-n').forEach(animateCount);
                    statObs.unobserve(entry.target);
                }
            });
        }, { threshold: 0.4 });
        statObs.observe(statsEl);
    }

    /* ===== Back to top ===== */
    const backToTop = document.createElement('button');
    backToTop.id = 'backToTop';
    backToTop.setAttribute('aria-label', 'Back to top');
    backToTop.innerHTML = '<i class="fas fa-arrow-up"></i>';
    body.appendChild(backToTop);
    backToTop.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));

    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
});
