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
    let typingTimeout = null;

    const translations = {
        en: {
            greeting: "HELLO, I'M",
            name: "Byeonghyeon Kim",
            heroRole: "AI & Security Specialist",
            location: "Gyeonggi-do, South Korea",
            description: "Solopreneur building AI-powered products with a security-first mindset.\nFrom multi-agent orchestration to autonomous SaaS factories.\nOpen to great positions and freelance projects.",
            resumeBtn: "My Resume",
            contactBtn: "Contact Info",
            aboutTitle: ["About ", "Me"],
            aboutSubtitle: "Building AI solutions from a security-first perspective",
            aboutRole: "AI & Security Specialist",
            aboutDesc1: "I'm <strong>Byeonghyeon Kim</strong>, a solopreneur and AI practitioner with a foundation in Information Security. With 3 years of experience in security monitoring and CERT at CMT EYES, I bring a data-driven problem-solving approach to building AI-powered products.",
            aboutDesc2: "Completed FastCampus AI Bootcamp (14th cohort), now building production-grade AI systems.",
            aboutDesc3: "From multi-agent orchestration platforms to autonomous SaaS factories. Open to great positions and freelance projects.",
            experienceTitle: "Experience",
            experienceContent: "<strong>CMT EYES</strong><br>Security Monitoring · CERT (3 yrs)",
            educationTitle: "Education",
            educationContent: "<strong>Bachelor's Degree</strong><br>Information Security",
            bootcampTitle: "Bootcamp",
            bootcampContent: "<strong>FastCampus AI Bootcamp</strong><br>14th Cohort (Completed)",
            stat1Title: "Projects<br>Built",
            stat2Title: "Products<br>Shipped",
            skillsTitle: ["Technical ", "Skills"],
            skillsSubtitle: "Tech stack spanning AI/ML, web, and security",
            projectsTitle: ["Featured ", "Projects"],
            projectsSubtitle: "From AI products to infrastructure and ML engineering",
            contactTitle: ["Get In ", "Touch"],
            contactDesc: "I'm always interested in new opportunities, innovative projects, and collaborative work in AI development.",

            // Products
            p1Title: "Ourfolio",
            p1Subtitle: "Evidence-Based Portfolio Platform",
            p1Desc: "A SaaS platform for professionals to systematically prove their achievements and career with evidence-based portfolios.",
            p1Result: "Evidence-based portfolio platform MVP launched",

            p2Title: "ASHD v2",
            p2Subtitle: "Warranty & A/S Management Service",
            p2Desc: "OCR-based auto-recognition of receipts and warranty documents with expiry alerts. Google Vision API extraction, LLM structuring, email/Telegram alert automation.",
            p2Result: "OCR auto-extraction + expiry alert automation MVP",

            p3Title: "Subari",
            p3Subtitle: "Inmate Family Care Service",
            p3Desc: "Comprehensive care platform for families of inmates. Starting with letter delivery as MVP, building moats with facility-specific regulation DB, emotional letter archive, and anonymous community. First production-level project.",
            p3Result: "Market research complete, moat strategy designed, Rollapalooza 5:0",

            p4Title: "Wukong",
            p4Subtitle: "AI Autonomous Micro-SaaS Factory",
            p4Desc: "Mitosis Engine that auto-generates, measures, and evolves micro-SaaS products. Genetic algorithm optimization of product portfolio based on 12-gene business blueprint.",
            p4Result: "Mitosis Engine v2 spec finalized, Phase 0 pending",

            // Infra
            i1Title: "BK-HQ",
            i1Subtitle: "Solo AI Company Operating System",
            i1Desc: "Orchestration platform with 1 CEO + 15 AI agents across 4 teams (Planning, Legal, Marketing, Dev). 31 skills, 19 automation hooks, and 5 crew workflows for solo operation.",
            i1Result: "15 agents · 31 skills · 19 hooks · 5 crews in operation",

            i2Title: "Smart Skill Chain",
            i2Subtitle: "AI Agent Skill Chain",
            i2Desc: "Integrated chain of 5 skills: SmartThink (strategy) · SmartPlan (execution) · SmartSearch (intelligent search) · SmartReview (code review) · SmartBrief (brief generation). 81 mental models and Cynefin framework built-in.",
            i2Result: "Think·Plan·Search·Review·Brief 5-skill chain in operation",

            i3Title: "SNS Automation Pipeline",
            i3Subtitle: "Multi-Platform Content Auto-Generation",
            i3Desc: "4-stage parallel pipeline: topic extraction → trend selection → platform-specific content generation → format validation. Simultaneous generation for Threads, X, and LinkedIn.",
            i3Result: "Threads·X·LinkedIn 3-platform simultaneous generation automated",

            i4Title: "Agent Dashboard",
            i4Subtitle: "Real-time Agent Monitoring Dashboard",
            i4Desc: "Personal orchestration tool visualizing execution timelines, task completion rates, and error tracking for 15 AI agents in real-time. SSE streaming with 30-day event retention.",
            i4Result: "15 agents real-time tracking, 30-day event retention",

            i5Title: "Knowledge Compound System",
            i5Subtitle: "Self-Built Memory & Intelligence System",
            i5Desc: "Self-built memory system with 25+ reference domains, 100+ knowledge documents with auto cross-referencing, and a compound learning pipeline that accumulates, reinforces, and evolves insights across sessions.",
            i5Result: "25+ domains, 100+ documents, auto cross-referencing in operation",

            i6Title: "Agent Team Automation",
            i6Subtitle: "Automated Service Development Pipeline",
            i6Desc: "Automated service development pipeline integrating 4 teams (Planning, Legal, Marketing, Dev). Auto-handoff from planning → design → implementation → review → deployment. 5 crew presets for one-click execution of feature, bugfix, marketing experiment, policy change, and SNS content workflows.",
            i6Result: "Full planning-to-deploy agent automation, 5 workflow presets in operation",

            // Products (continued)
            p5Title: "BluePy 2.0",
            p5Subtitle: "Infra Security Scanner",
            p5Desc: "Multi-platform (Windows/macOS/Linux) infra security scanner with auto remediation. Unified GUI/rollback/reporting that automate 170+ rules.",
            p5Result: "170+ rules scanned/fixed, 60%+ test coverage",

            // AI/ML
            m2Title: "Commerce Marketing AI Agent",
            m2Subtitle: "Custom Multi-Agent System",
            m2Desc: "Six-agent marketing system that automates trend, ad copy, segmentation, review, competitor analysis, and strategy reports.",
            m2Result: "End-to-End Multi-Agent <br>System Implementation",

            // Competitions
            c1Title: "Toss Ad Click Rate Prediction",
            c1Subtitle: "CTR Prediction",
            c1Desc: "Built a CTR model on large-scale ad logs; improved log-loss/AP via sequence features, downsampling, and tuning.",
            c1Result: "Score 0.33185 → 0.34814 achieved (Top 10% in private competition)",

            c2Title: "Dialogue Summarization Model",
            c2Subtitle: "Dialogue Summarization",
            c2Desc: "Korean daily dialogue summarization with QLoRA fine-tuning plus augmentation/post-processing to improve quality.",
            c2Result: "Rouge score improved by 30% <br>(36.12 → 47.31)",

            c3Title: "Science QA IR Competition",
            c3Subtitle: "RAG Retrieval & Ranking",
            c3Desc: "Scientific QA RAG with improved retrieval/ranking by Solar embeddings, rank-graph refactor, and prompt tuning.",
            c3Result: "MAP/MRR +107% <br>(0.4242 → 0.8795 / 0.8818)",

            m6Title: "Movie Rating Prediction Service",
            m6Subtitle: "Movie Rating Prediction MLOps",
            m6Desc: "Built a movie rating prediction service and MLOps pipeline using the TMDB API. Fully automated from data collection through training, deployment, and monitoring.",
            m6Result: "End-to-End CI/CD MLOps <br>Pipeline Implementation",

            c4Title: "Image Classification Model",
            c4Subtitle: "Document Type Classification",
            c4Desc: "Automated classification system for scanned document images (17 classes). Experiments with various backbones, TTA, augmentation, and post-processing.",
            c4Result: "F1-score improved by 470% <br>(0.1701 → 0.9689)",

            c5Title: "Real Estate Price Prediction",
            c5Subtitle: "ML Regression",
            c5Desc: "Prediction model on historical public transaction data. Minimized errors through feature engineering (60+ features) and K-Fold validation.",
            c5Result: "RMSE improved by 58% <br>(48192 → 20006)",

            m9Title: "LLM-based RAG Educational Content",
            m9Subtitle: "Technical Content Creation",
            m9Desc: "Educational content for practitioners introducing RAG to enterprise document search. Covers BM25/Vector/Hybrid comparison, Query Expansion, and Hit@k/MRR evaluation.",
            m9Result: "Overview + Training PDF + Jupyter Notebook completed"
        },
        ko: {
            greeting: "안녕하세요, 저는",
            name: "김병현",
            heroRole: "AI & Security Specialist",
            location: "경기도, 대한민국",
            description: "보안 우선 사고방식으로 AI 기반 프로덕트를 만드는 솔로프리너입니다.\n멀티 에이전트 오케스트레이션부터 자율 SaaS 팩토리까지.\n좋은 포지션과 외주 프로젝트, 함께할 기회를 찾고 있습니다.",
            resumeBtn: "이력서",
            contactBtn: "연락처",
            aboutTitle: ["소개", ""],
            aboutSubtitle: "보안 전문가의 시선으로 AI 솔루션을 만듭니다",
            aboutRole: "AI & Security Specialist",
            aboutDesc1: "저는 <strong>김병현</strong>입니다. 정보보안을 기반으로 AI 프로덕트를 만드는 솔로프리너입니다. CMT EYES에서 3년간 보안 관제 및 CERT 활동을 수행했으며, 이를 바탕으로 데이터 기반 문제 해결 역량을 AI 제품 개발에 적용하고 있습니다.",
            aboutDesc2: "FastCampus AI 부트캠프(14기)를 수료하고, 현재 프로덕션 수준의 AI 시스템을 구축하고 있습니다.",
            aboutDesc3: "멀티 에이전트 오케스트레이션 플랫폼부터 자율 SaaS 팩토리까지. 좋은 포지션과 외주 프로젝트, 함께할 기회를 찾고 있습니다.",
            experienceTitle: "경력",
            experienceContent: "<strong>CMT EYES</strong><br>보안 관제 · CERT (3년)",
            educationTitle: "학력",
            educationContent: "<strong>학사 학위</strong><br>정보보호학",
            bootcampTitle: "부트캠프",
            bootcampContent: "<strong>FastCampus AI 부트캠프</strong><br>14기 (수료)",
            stat1Title: "프로젝트<br>수행",
            stat2Title: "프로덕트<br>출시",
            skillsTitle: ["기술 ", "스택"],
            skillsSubtitle: "AI/ML과 보안을 아우르는 기술 스택",
            projectsTitle: ["주요 ", "프로젝트"],
            projectsSubtitle: "AI 프로덕트부터 인프라, ML 엔지니어링까지",
            contactTitle: ["연락", "하기"],
            contactDesc: "AI 개발 분야의 새로운 기회, 혁신적인 프로젝트, 협업 제안에 대해 언제든 환영합니다.",

            // Products
            p1Title: "Ourfolio",
            p1Subtitle: "근거 기반 포트폴리오 플랫폼",
            p1Desc: "전문가가 성과와 경력을 체계적으로 증명할 수 있는 근거 기반 포트폴리오 SaaS 서비스.",
            p1Result: "근거 기반 포트폴리오 플랫폼 MVP 런칭",

            p2Title: "ASHD v2",
            p2Subtitle: "보증서·A/S 관리 서비스",
            p2Desc: "OCR 기반 영수증·보증서 자동 인식 및 만료 알림 서비스. Google Vision API로 문서 추출, LLM으로 구조화, 이메일·텔레그램 알림 자동화.",
            p2Result: "OCR 자동 추출 + 만료 알림 자동화 MVP",

            p3Title: "Subari (수발이)",
            p3Subtitle: "수용자 가족 케어 서비스",
            p3Desc: "교정시설 수용자 가족을 위한 종합 케어 플랫폼. MVP는 편지 배달 서비스로 시작, 시설별 규정 DB·감정 편지 아카이브·익명 커뮤니티로 해자 구축. 첫 프로덕션 레벨 프로젝트.",
            p3Result: "시장조사 완료, 해자 전략 설계, 롤라팔루자 5:0",

            p4Title: "Wukong (제천대성)",
            p4Subtitle: "AI 자율 마이크로 SaaS 팩토리",
            p4Desc: "AI가 마이크로 SaaS를 자동 생성·측정·진화시키는 Mitosis Engine. 12-gene 비즈니스 블루프린트 기반 유전 알고리즘으로 제품 포트폴리오 자동 최적화.",
            p4Result: "Mitosis Engine v2 스펙 확정, Phase 0 대기",

            // Infra
            i1Title: "BK-HQ",
            i1Subtitle: "1인 AI 회사 운영 시스템",
            i1Desc: "CEO 1명 + AI 에이전트 15명으로 구성된 4개 팀(기획·법무·마케팅·개발) 오케스트레이션 플랫폼. 31개 스킬, 19개 자동화 훅, 5개 크루 워크플로우로 1인 운영 체계 구축.",
            i1Result: "15 에이전트 · 31 스킬 · 19 훅 · 5 크루 운영 중",

            i2Title: "Smart Skill Chain",
            i2Subtitle: "AI 에이전트 스킬 체인",
            i2Desc: "SmartThink(전략 분석) · SmartPlan(실행 계획) · SmartSearch(지능 검색) · SmartReview(코드 리뷰) · SmartBrief(브리프 생성) 5종 통합 스킬 체인. 81개 멘탈 모델과 Cynefin 프레임워크 내장.",
            i2Result: "Think·Plan·Search·Review·Brief 5종 통합 운영",

            i3Title: "SNS 자동화 파이프라인",
            i3Subtitle: "멀티 플랫폼 콘텐츠 자동 생성",
            i3Desc: "일일 활동 데이터에서 토픽 추출 → 트렌드 선정 → 플랫폼별 콘텐츠 생성 → 포맷 검증까지 4단계 병렬 파이프라인. Threads·X·LinkedIn 동시 생성.",
            i3Result: "Threads·X·LinkedIn 3개 플랫폼 동시 생성 자동화",

            i4Title: "Agent Dashboard",
            i4Subtitle: "실시간 에이전트 모니터링 대시보드",
            i4Desc: "15개 AI 에이전트의 실행 타임라인, 작업 완료율, 에러 추적을 실시간 시각화하는 개인 오케스트레이션 도구. SSE 스트리밍 기반 30일 이벤트 보존.",
            i4Result: "15 에이전트 실시간 추적, 30일 이벤트 보존",

            i5Title: "자동 복리 지식 축적 시스템",
            i5Subtitle: "자체 구축 메모리 & 인텔리전스 시스템",
            i5Desc: "자체 구축 메모리 시스템. 25+ 레퍼런스 도메인, 100+ 지식 문서를 자동 교차 참조하고, 세션 간 학습을 누적·강화·진화시키는 복리 지식 파이프라인.",
            i5Result: "25+ 도메인, 100+ 문서, 자동 교차 참조 운영 중",

            i6Title: "에이전트 팀 자동화",
            i6Subtitle: "자동 서비스 개발 파이프라인",
            i6Desc: "4개 팀(기획·법무·마케팅·개발) 에이전트를 통합한 자동 서비스 개발 파이프라인. 기획→설계→구현→검수→배포까지 에이전트 간 핸드오프로 자동 진행. 5개 크루 프리셋으로 원클릭 실행.",
            i6Result: "기획→배포 전 과정 에이전트 자동화, 5개 워크플로우 프리셋 운영",

            // Products (continued)
            p5Title: "BluePy 2.0",
            p5Subtitle: "Infra Security Scanner",
            p5Desc: "멀티플랫폼(Windows/macOS/Linux) 인프라 보안 자동 점검·수정 도구. GUI·롤백·보고서까지 일원화하고 170+ 규칙을 자동화해 비전문가도 운영 가능하게 설계.",
            p5Result: "170+ 보안 규칙 점검/자동 수정, 테스트 커버리지 60%+",

            // AI/ML
            m2Title: "상업 마케팅 AI 에이전트",
            m2Subtitle: "Custom Multi-Agent System",
            m2Desc: "6개 에이전트로 트렌드/카피/세그먼트/리뷰/경쟁사/전략 리포트를 자동 생성해 리서치 반복을 단축.",
            m2Result: "End-to-End 멀티 에이전트 <br>시스템 구현",

            // Competitions
            c1Title: "토스 광고 클릭률 예측",
            c1Subtitle: "CTR Prediction",
            c1Desc: "광고 클릭 확률을 대규모 로그로 예측, 시퀀스 피처·다운샘플·튜닝으로 LogLoss·AP 개선.",
            c1Result: "Score 0.33185 → 0.34814 달성 (사설대회 상위 10%)",

            c2Title: "대화 요약 모델 개발",
            c2Subtitle: "Dialogue Summarization",
            c2Desc: "한국어 일상 대화 요약; QLoRA 파인튜닝과 증강/후처리로 품질 향상.",
            c2Result: "Rouge 점수 30% 향상 <br>(36.12 → 47.31)",

            c3Title: "과학 질의응답 IR 대회",
            c3Subtitle: "RAG Retrieval & Ranking",
            c3Desc: "과학 도메인 RAG 기반 검색·랭킹을 고도화. Solar 임베딩, 랭크 그래프 리팩토링, 프롬프트 고도화·미세튜닝 적용.",
            c3Result: "MAP/MRR 107% 향상 <br>(0.4242 → 0.8795 / 0.8818)",

            m6Title: "영화 평점 예측 서비스",
            m6Subtitle: "Movie Rating Prediction MLOps",
            m6Desc: "TMDB API를 활용한 사용자 리뷰 기반 영화 평점 예측 및 MLOps 파이프라인 구축. 데이터 수집부터 학습, 배포, 모니터링까지 완전 자동화.",
            m6Result: "End-to-End CI/CD MLOps <br>파이프라인 구현",

            c4Title: "이미지 분류 모델 개발",
            c4Subtitle: "Document Type Classification",
            c4Desc: "스캔 문서 이미지의 유형 자동 분류 (17-class). 문서 OCR 전단계에서 이미지 분류 성능 향상을 위한 다양한 백본 실험 및 TTA 적용.",
            c4Result: "F1-score 470% 향상 <br>(0.1701 → 0.9689)",

            c5Title: "부동산 실거래가 예측",
            c5Subtitle: "ML Regression",
            c5Desc: "공공데이터 기반 과거 거래가를 학습시켜 미래 부동산 실거래가 예측 정확도 향상 및 패턴 분석. 60여 개 특성을 활용한 Feature Engineering과 K-Fold 검증.",
            c5Result: "RMSE 58% 향상 <br>(48192 → 20006)",

            m9Title: "LLM 기반 RAG 교육 콘텐츠",
            m9Subtitle: "Technical Content Creation",
            m9Desc: "기업 내 문서 검색에 RAG 도입을 원하는 실무자 대상 교육 콘텐츠. BM25/Vector/Hybrid 검색 비교와 Query Expansion, Hit@k/MRR 평가 실습 포함.",
            m9Result: "개요서 + 교육자료 PDF + 실습 Jupyter 노트북 완성"
        }
    };

    // Project card keys in HTML order: P1-P5, I1-I6, M2, C1-C3, M6, C4-C5, M9
    const projectMap = [
        { key: 'p1', icon: 'fa-rocket' },
        { key: 'p2', icon: 'fa-rocket' },
        { key: 'p3', icon: 'fa-search' },
        { key: 'p4', icon: 'fa-drafting-compass' },
        { key: 'p5', icon: 'fa-check-circle' },
        { key: 'i1', icon: 'fa-check-circle' },
        { key: 'i2', icon: 'fa-check-circle' },
        { key: 'i3', icon: 'fa-check-circle' },
        { key: 'i4', icon: 'fa-check-circle' },
        { key: 'i5', icon: 'fa-check-circle' },
        { key: 'i6', icon: 'fa-check-circle' },
        { key: 'm2', icon: 'fa-check-circle' },
        { key: 'c1', icon: 'fa-chart-line' },
        { key: 'c2', icon: 'fa-chart-line' },
        { key: 'c3', icon: 'fa-chart-line' },
        { key: 'm6', icon: 'fa-check-circle' },
        { key: 'c4', icon: 'fa-chart-line' },
        { key: 'c5', icon: 'fa-chart-line' },
        { key: 'm9', icon: 'fa-book' },
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
            if (typingTimeout) {
                clearTimeout(typingTimeout);
                typingTimeout = null;
            }
            heroDescElement.innerHTML = '';
            let i = 0;
            const descText = t.description;
            function typeWriter() {
                if (i < descText.length) {
                    const char = descText.charAt(i);
                    if (char === '\n') {
                        heroDescElement.innerHTML += '<br>';
                    } else {
                        heroDescElement.innerHTML += char;
                    }
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

        const contactDesc = document.querySelector('.contact-description');
        if (contactDesc) contactDesc.textContent = t.contactDesc;

        // Project cards — data-driven mapping
        const projectCards = document.querySelectorAll('.project-card');
        projectCards.forEach((card, idx) => {
            const entry = projectMap[idx];
            if (!entry) return;
            const { key, icon } = entry;

            const title = card.querySelector('h3');
            const subtitle = card.querySelector('.project-subtitle');
            const desc = card.querySelector('.project-description');
            const result = card.querySelector('.project-result');

            if (title && t[key + 'Title']) title.textContent = t[key + 'Title'];
            if (subtitle && t[key + 'Subtitle']) subtitle.textContent = t[key + 'Subtitle'];
            if (desc && t[key + 'Desc']) desc.textContent = t[key + 'Desc'];
            if (result && t[key + 'Result']) {
                result.innerHTML = `<i class="fas ${icon}"></i> <strong>Result:</strong> ${t[key + 'Result']}`;
            }

            if (key === 'm9') {
                card.querySelectorAll('.project9-link').forEach(link => {
                    const text = link.getAttribute(`data-${lang}`);
                    const span = link.querySelector('span');
                    if (text && span) span.textContent = text;
                });
            }
        });
    }

    // ===== Project Filter =====
    const filterBtns = document.querySelectorAll('.filter-btn');
    const projectCards = document.querySelectorAll('.project-card');

    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            const filter = btn.getAttribute('data-filter');

            projectCards.forEach(card => {
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

    animateCards('.project-card');
    animateCards('.skill-category');
    animateCards('.contact-card');

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
