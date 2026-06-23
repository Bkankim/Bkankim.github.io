/* ===== PROJECTS - Single Source of Truth ===== */
window.PROJECTS = [
    {
        id: 'ent-onprem-llm',
        category: 'infra',
        featured: true,
        status: 'completed',
        resultIcon: 'fa-server',
        tags: ['Tailscale Mesh', 'Mac Studio ×15', 'Self-Hosted LLM', 'Multi-Agent', 'Discord Bot', 'Auto-Recovery'],
        links: [],
        en: {
            title: 'On-Prem LLM Multi-Agent Infra',
            subtitle: 'Enterprise AI System (Freelance, 2026)',
            desc: 'Meshed 15 role-assigned Mac Studios over Tailscale into an isolated private network, then self-hosted LLM serving on it with no external cloud. Fronted by a messenger (Discord) agent bot; a worker agent and a reviewer agent collaborate via automatic handoff, with auto-recovery after reboot for always-on operation.',
            result: '15 Mac Studios on a Tailscale private network self-serving a private model + worker/reviewer 2-agent auto-collaboration, reboot auto-recovery (always-on)'
        },
        ko: {
            title: '온프렘 LLM 멀티에이전트 인프라',
            subtitle: '기업 AI 시스템 실무 (프리랜서, 2026)',
            desc: '역할별로 배정한 Mac Studio 15대를 Tailscale 메시로 묶어 외부에 노출되지 않는 독립 프라이빗 네트워크를 구성하고, 그 위에 외부 클라우드 없이 LLM을 자체 서빙. 메신저(디스코드) 에이전트 봇으로 연결하고, 진행·검수 에이전트가 자동 핸드오프로 협업하며 재부팅 후 자동 복구로 상시 가동.',
            result: 'Mac Studio 15대 Tailscale 독립망에 비공개 모델 온프렘 서빙 + 진행·검수 2-에이전트 자동 협업, 재부팅 자동복구 상시가동'
        },
        caseStudy: {
            en: {
                problem: 'An enterprise needed LLM capability without sending data to any external cloud, across multiple machines, with reliable unattended operation.',
                role: 'Designed and built the on-prem serving and multi-agent orchestration end to end, and set up the 15-node Mac Studio Tailscale mesh private network (freelance).',
                tech: '15-node Mac Studio Tailscale mesh private network, self-hosted LLM serving, two-agent (worker + reviewer) auto-handoff, Discord bot interface, process supervision with reboot auto-recovery.',
                impact: 'Private model served fully on-prem (zero external cloud) over an isolated Tailscale network, automatic worker/reviewer collaboration, and reboot auto-recovery for always-on availability.'
            },
            ko: {
                problem: '기업이 데이터를 외부 클라우드로 보내지 않으면서 다수 장비에 걸쳐 LLM 역량을 확보하고, 무인 상시 가동까지 필요로 했음.',
                role: '온프렘 서빙과 멀티에이전트 오케스트레이션을 직접 설계·구축하고, Mac Studio 15대 Tailscale 메시 독립 네트워크 인프라를 구성 (프리랜서).',
                tech: 'Mac Studio 15대 Tailscale 메시 프라이빗 네트워크, LLM 자체 서빙, 2-에이전트(진행+검수) 자동 핸드오프, 디스코드 봇 인터페이스, 재부팅 자동복구 프로세스 관리.',
                impact: '비공개 모델 완전 온프렘 서빙(외부 클라우드 0, Tailscale 독립망), 진행·검수 자동 협업, 재부팅 자동복구로 상시 가용.'
            }
        }
    },
    {
        id: 'p5',
        category: 'product',
        featured: true,
        status: 'in-progress',
        resultIcon: 'fa-check-circle',
        tags: ['Python', 'PySide6', 'Clean Architecture', 'AsyncSSH/PyWinRM', 'SQLite'],
        links: [{ kind: 'github', href: 'https://github.com/Bkankim/Bluepy', label: 'View Code' }],
        en: {
            title: 'BluePy 2.0',
            subtitle: 'Infra Security Scanner',
            desc: 'Multi-platform (Windows/macOS/Linux) infra security scanner with auto remediation. Unified GUI/rollback/reporting that automate 170+ rules.',
            result: '170+ rules scanned/fixed, 60%+ test coverage'
        },
        ko: {
            title: 'BluePy 2.0',
            subtitle: 'Infra Security Scanner',
            desc: '멀티플랫폼(Windows/macOS/Linux) 인프라 보안 자동 점검·수정 도구. GUI·롤백·보고서까지 일원화하고 170+ 규칙을 자동화해 비전문가도 운영 가능하게 설계.',
            result: '170+ 보안 규칙 점검/자동 수정, 테스트 커버리지 60%+'
        },
        caseStudy: {
            en: {
                problem: 'Infra security hardening was manual, inconsistent across Windows/macOS/Linux, and hard for non-experts to run safely.',
                role: 'Built the scanner end to end: rule engine, auto-remediation with rollback, unified GUI and reporting.',
                tech: 'Python, PySide6 GUI, Clean Architecture, AsyncSSH/PyWinRM remote execution, SQLite, 170+ security rules.',
                impact: '170+ rules scanned and auto-remediated across 3 platforms with rollback safety; 60%+ test coverage.'
            },
            ko: {
                problem: '인프라 보안 하드닝이 수작업·플랫폼(Win/macOS/Linux)별 비일관이라 비전문가가 안전하게 돌리기 어려웠음.',
                role: '스캐너 전체를 구축: 규칙 엔진, 롤백 포함 자동 수정, GUI·보고서 일원화.',
                tech: 'Python, PySide6 GUI, Clean Architecture, AsyncSSH/PyWinRM 원격 실행, SQLite, 170+ 보안 규칙.',
                impact: '3개 플랫폼에서 170+ 규칙 점검·자동 수정(롤백 안전), 테스트 커버리지 60%+.'
            }
        }
    },
    {
        id: 'p1',
        category: 'product',
        featured: true,
        status: 'mvp',
        resultIcon: 'fa-rocket',
        tags: ['Next.js 16', 'TypeScript', 'Neon', 'Drizzle ORM', 'BetterAuth', 'Tailwind+shadcn'],
        links: [{ kind: 'external', href: 'https://ourfolio.bkan.dev', label: 'ourfolio.bkan.dev' }],
        en: {
            title: 'Ourfolio',
            subtitle: 'Evidence-Based Portfolio Platform',
            desc: 'A SaaS platform for professionals to systematically prove their achievements and career with evidence-based portfolios.',
            result: 'Evidence-based portfolio platform MVP launched'
        },
        ko: {
            title: 'Ourfolio',
            subtitle: '근거 기반 포트폴리오 플랫폼',
            desc: '전문가가 성과와 경력을 체계적으로 증명할 수 있는 근거 기반 포트폴리오 SaaS 서비스.',
            result: '근거 기반 포트폴리오 플랫폼 MVP 런칭'
        }
    },
    {
        id: 'p2',
        category: 'product',
        featured: false,
        status: 'mvp',
        resultIcon: 'fa-rocket',
        tags: ['Next.js 15', 'Supabase', 'Google Vision API', 'OpenAI/Anthropic', 'Telegram Bot'],
        links: [{ kind: 'external', href: 'https://ashd.bkan.dev', label: 'ashd.bkan.dev' }],
        en: {
            title: 'ASHD v2',
            subtitle: 'Warranty & A/S Management Service',
            desc: 'OCR-based auto-recognition of receipts and warranty documents with expiry alerts. Google Vision API extraction, LLM structuring, email/Telegram alert automation.',
            result: 'OCR auto-extraction + expiry alert automation MVP'
        },
        ko: {
            title: 'ASHD v2',
            subtitle: '보증서·A/S 관리 서비스',
            desc: 'OCR 기반 영수증·보증서 자동 인식 및 만료 알림 서비스. Google Vision API로 문서 추출, LLM으로 구조화, 이메일·텔레그램 알림 자동화.',
            result: 'OCR 자동 추출 + 만료 알림 자동화 MVP'
        }
    },
    {
        id: 'ent-team-memory',
        category: 'infra',
        featured: true,
        status: 'completed',
        resultIcon: 'fa-brain',
        tags: ['Hindsight', 'Graphify', 'RBAC Gateway', 'Multi-Tenant', 'Knowledge Graph', 'Memory System'],
        links: [],
        en: {
            title: 'Team AI Long-term Memory',
            subtitle: 'Enterprise AI System (Freelance)',
            desc: 'Customized the open-source agent-memory Hindsight into per-employee personal and team memory banks. Recall/Reflect are permission-gated so a personal bank is readable only by its owner (privacy isolation), with automated work logging and daily reports. Wove in a Graphify knowledge graph to advance it into a queryable knowledge system.',
            result: 'Personal/team banks + permission isolation (owner-only) + automated reporting, Graphify knowledge graph'
        },
        ko: {
            title: '팀 AI 장기기억 시스템',
            subtitle: '기업 AI 시스템 실무 (프리랜서)',
            desc: '오픈소스 에이전트 메모리 Hindsight를 커스터마이즈해 직원별 personal·team 메모리 bank를 구축. Recall·Reflect에 권한을 걸어 개인 bank는 본인만 열람(개인정보 격리)하고, 업무기록·일일보고를 자동화. Graphify 지식그래프를 결합해 질의 가능한 지식 시스템으로 고도화.',
            result: 'personal·team bank + 권한 격리(개인 bank 본인 only) + 업무보고 자동화, Graphify 지식그래프 결합'
        },
        caseStudy: {
            en: {
                problem: "Each AI user's work context kept evaporating, and self-review and report-writing were manual. Personal records also needed privacy isolation.",
                role: 'Customized the open-source agent-memory Hindsight into personal/team banks with a permission gateway, and wove in a Graphify knowledge graph (freelance).',
                tech: 'Hindsight (Retain/Recall/Reflect), RBAC permission gateway (personal bank owner-only), multi-tenant isolation, Graphify knowledge graph, automated work logging and daily reports.',
                impact: 'Employees self-review and auto-generate reports from their personal bank; managers track work via team banks. Personal banks are readable only by their owner, keeping personal data isolated.'
            },
            ko: {
                problem: '조직 내 AI 사용자마다 업무 맥락이 휘발되고, 업무 복기·보고서 작성이 수작업이었음. 개인 기록의 프라이버시 격리도 필요했음.',
                role: '오픈소스 에이전트 메모리 Hindsight를 커스터마이즈해 personal·team bank 구조와 권한 게이트웨이를 설계·구현하고, Graphify 지식그래프를 결합 (프리랜서).',
                tech: 'Hindsight(Retain·Recall·Reflect), RBAC 권한 게이트웨이(개인 bank 본인 only), 멀티테넌트 격리, Graphify 지식그래프, 업무기록·일일보고 자동화.',
                impact: '직원은 personal bank로 업무 복기와 보고서 자동화, 관리자는 team bank로 업무 추적·관리. 개인 bank는 본인만 열람해 개인정보 보안을 확보.'
            }
        }
    },
    {
        id: 'ent-admin-dashboard',
        category: 'infra',
        featured: false,
        status: 'completed',
        resultIcon: 'fa-table-columns',
        tags: ['Spec-Driven (PRD/SDD/TDD)', '13 Modules', 'Accessibility', 'Responsive'],
        links: [],
        en: {
            title: 'Unified Admin Dashboard',
            subtitle: 'Enterprise AI System (Freelance)',
            desc: 'A 13-module admin derived from a single module registry. Spec-driven (PRD/SDD/TDD) with accessibility, dark mode, and responsive layout.',
            result: '13 modules from one registry, 81 tests passing (demo)'
        },
        ko: {
            title: '통합 어드민 대시보드 (데모)',
            subtitle: '기업 AI 시스템 실무 (프리랜서)',
            desc: '단일 모듈 레지스트리에서 파생한 13모듈 어드민. 스펙주도(PRD/SDD/TDD)로 접근성·다크모드·반응형까지 구현.',
            result: '레지스트리 파생 13모듈, 테스트 81건 통과 (데모)'
        }
    },
    {
        id: 'i1',
        category: 'infra',
        featured: false,
        status: 'active',
        resultIcon: 'fa-check-circle',
        tags: ['Bash', 'Node.js', 'Python', 'Claude Code', 'GitHub Actions'],
        links: [],
        en: {
            title: 'BK-HQ',
            subtitle: 'Solo AI Company Operating System',
            desc: 'Orchestration platform with 1 CEO + 15 AI agents across 4 teams (Planning, Legal, Marketing, Dev). 31 skills, 19 automation hooks, and 5 crew workflows for solo operation.',
            result: '15 agents · 31 skills · 19 hooks · 5 crews in operation'
        },
        ko: {
            title: 'BK-HQ',
            subtitle: '1인 AI 회사 운영 시스템',
            desc: 'CEO 1명 + AI 에이전트 15명으로 구성된 4개 팀(기획·법무·마케팅·개발) 오케스트레이션 플랫폼. 31개 스킬, 19개 자동화 훅, 5개 크루 워크플로우로 1인 운영 체계 구축.',
            result: '15 에이전트 · 31 스킬 · 19 훅 · 5 크루 운영 중'
        }
    },
    {
        id: 'c3',
        category: 'competition',
        featured: true,
        status: 'completed',
        resultIcon: 'fa-chart-line',
        tags: ['RAG', 'Solar Embedding', 'Rank Graph', 'Prompt Tuning', 'FastAPI'],
        links: [{ kind: 'github', href: 'https://github.com/Bkankim/informationretrieval-ir_ad_2', label: 'View Code' }],
        en: {
            title: 'Science QA IR Competition',
            subtitle: 'RAG Retrieval & Ranking',
            desc: 'Scientific QA RAG with improved retrieval/ranking by Solar embeddings, rank-graph refactor, and prompt tuning.',
            result: 'MAP/MRR +107% <br>(0.4242 → 0.8795 / 0.8818)'
        },
        ko: {
            title: '과학 질의응답 IR 대회',
            subtitle: 'RAG Retrieval & Ranking',
            desc: '과학 도메인 RAG 기반 검색·랭킹을 고도화해 MAP/MRR을 대폭 개선. Solar 임베딩, 랭크 그래프 리팩토링, 프롬프트 튜닝을 적용.',
            result: 'MAP/MRR 107% 향상 <br>(0.4242 → 0.8795 / 0.8818)'
        }
    },
    {
        id: 'c4',
        category: 'competition',
        featured: false,
        status: 'completed',
        resultIcon: 'fa-chart-line',
        tags: ['Swin Transformer', 'ConvNeXt', 'EfficientNet', 'Albumentations'],
        links: [{ kind: 'github', href: 'https://github.com/Bkankim/CV-Competition', label: 'View Code' }],
        en: {
            title: 'Image Classification Model',
            subtitle: 'Document Type Classification',
            desc: 'Automated classification system for scanned document images (17 classes). Experiments with various backbones, TTA, augmentation, and post-processing.',
            result: 'F1-score improved by 470% <br>(0.1701 → 0.9689)'
        },
        ko: {
            title: '이미지 분류 모델 개발',
            subtitle: 'Document Type Classification',
            desc: '스캔 문서 이미지의 유형 자동 분류 (17-class). 문서 OCR 전단계에서 이미지 분류 성능 향상을 위한 다양한 백본 실험 및 TTA 적용.',
            result: 'F1-score 470% 향상 <br>(0.1701 → 0.9689)'
        }
    },
    {
        id: 'c2',
        category: 'competition',
        featured: false,
        status: 'completed',
        resultIcon: 'fa-chart-line',
        tags: ['KoBART', 'Llama-3.2', 'Qwen3', 'QLoRA'],
        links: [{ kind: 'github', href: 'https://github.com/Bkankim/naturallanguageprocessingcompetition-nlp-1', label: 'View Code' }],
        en: {
            title: 'Dialogue Summarization Model',
            subtitle: 'Dialogue Summarization',
            desc: 'Korean daily dialogue summarization with QLoRA fine-tuning plus augmentation/post-processing to improve quality.',
            result: 'Rouge score improved by 30% <br>(36.12 → 47.31)'
        },
        ko: {
            title: '대화 요약 모델 개발',
            subtitle: 'Dialogue Summarization',
            desc: '한국어 일상 대화 요약 모델. QLoRA 파인튜닝과 증강/후처리로 요약 품질을 높임.',
            result: 'Rouge 점수 30% 향상 <br>(36.12 → 47.31)'
        }
    },
    {
        id: 'c1',
        category: 'competition',
        featured: false,
        status: 'completed',
        resultIcon: 'fa-chart-line',
        tags: ['LightGBM', 'DCNv3', 'FTT', 'PyTorch'],
        links: [{ kind: 'github', href: 'https://github.com/Bkankim/toss-ad-click-prediction', label: 'View Code' }],
        en: {
            title: 'Toss Ad Click Rate Prediction',
            subtitle: 'CTR Prediction',
            desc: 'Built a CTR model on large-scale ad logs; improved log-loss/AP via sequence features, downsampling, and tuning.',
            result: 'Score 0.33185 → 0.34814 achieved (Top 10% in private competition)'
        },
        ko: {
            title: '토스 광고 클릭률 예측',
            subtitle: 'CTR Prediction',
            desc: '광고 클릭 확률을 대규모 로그 데이터로 예측하는 CTR 모델. 시퀀스 피처·다운샘플·튜닝으로 LogLoss와 AP를 개선.',
            result: 'Score 0.33185 → 0.34814 달성 (사설대회 상위 10%)'
        }
    },
    {
        id: 'm2',
        category: 'aiml',
        featured: false,
        status: 'completed',
        resultIcon: 'fa-check-circle',
        tags: ['OpenAI GPT-4', 'FastAPI', 'React', 'SQLite FTS5', 'TypeScript'],
        links: [{ kind: 'github', href: 'https://github.com/Bkankim/langchainproject-new-langchainproject_2', label: 'View Code' }],
        en: {
            title: 'Commerce Marketing AI Agent',
            subtitle: 'Custom Multi-Agent System',
            desc: 'Six-agent marketing system that automates trend, ad copy, segmentation, review, competitor analysis, and strategy reports.',
            result: 'End-to-End Multi-Agent <br>System Implementation'
        },
        ko: {
            title: '상업 마케팅 AI 에이전트',
            subtitle: 'Custom Multi-Agent System',
            desc: '6개 에이전트로 트렌드/카피/세그먼트/리뷰/경쟁사/전략 리포트를 자동 생성해 리서치 반복을 단축.',
            result: 'End-to-End 멀티 에이전트 <br>시스템 구현'
        }
    },
    {
        id: 'm6',
        category: 'aiml',
        featured: false,
        status: 'completed',
        resultIcon: 'fa-check-circle',
        tags: ['Docker', 'MLflow', 'Airflow', 'GitHub Actions', 'FastAPI'],
        links: [{ kind: 'github', href: 'https://github.com/Bkankim/mlops-project-mlops-2', label: 'View Code' }],
        en: {
            title: 'Movie Rating Prediction Service',
            subtitle: 'Movie Rating Prediction MLOps',
            desc: 'Built a movie rating prediction service and MLOps pipeline using the TMDB API. Fully automated from data collection through training, deployment, and monitoring.',
            result: 'End-to-End CI/CD MLOps <br>Pipeline Implementation'
        },
        ko: {
            title: '영화 평점 예측 서비스',
            subtitle: 'Movie Rating Prediction MLOps',
            desc: 'TMDB API를 활용한 사용자 리뷰 기반 영화 평점 예측 및 MLOps 파이프라인 구축. 데이터 수집부터 학습, 배포, 모니터링까지 완전 자동화.',
            result: 'End-to-End CI/CD MLOps <br>파이프라인 구현'
        }
    },
    {
        id: 'm9',
        category: 'aiml',
        featured: false,
        status: 'completed',
        resultIcon: 'fa-book',
        tags: ['RAG', 'BM25', 'FAISS', 'Upstage Solar', 'MTEB-ko', 'Python'],
        links: [
            {
                kind: 'pdf',
                href: 'assets/RAG_educate/RAG_개요서_김병현.pdf',
                label: { en: 'Overview', ko: '개요서' }
            },
            {
                kind: 'pdf',
                href: 'assets/RAG_educate/RAG_교육자료_김병현.pdf',
                label: { en: 'Training Material', ko: '교육자료' }
            },
            {
                kind: 'colab',
                href: 'https://colab.research.google.com/github/Bkankim/Bkankim.github.io/blob/main/assets/RAG_educate/RAG_%EC%8B%A4%EC%8A%B5%EC%BD%94%EB%93%9C_%EA%B9%80%EB%B3%91%ED%98%84.ipynb',
                label: { en: 'Lab Code (Colab)', ko: '실습코드 (Colab)' }
            }
        ],
        en: {
            title: 'LLM-based RAG Educational Content',
            subtitle: 'Technical Content Creation',
            desc: 'Educational content for practitioners introducing RAG to enterprise document search. Covers BM25/Vector/Hybrid comparison, Query Expansion, and Hit@k/MRR evaluation.',
            result: 'Overview + Training PDF + Jupyter Notebook completed'
        },
        ko: {
            title: 'LLM 기반 RAG 교육 콘텐츠',
            subtitle: 'Technical Content Creation',
            desc: '기업 내 문서 검색에 RAG 도입을 원하는 실무자 대상 교육 콘텐츠. BM25/Vector/Hybrid 검색 비교와 Query Expansion, Hit@k/MRR 평가 실습 포함.',
            result: '개요서 + 교육자료 PDF + 실습 Jupyter 노트북 완성'
        }
    },
];

/* ===== Renderer ===== */
window.renderProjects = function (lang) {
    const grid = document.getElementById('projects-grid');
    if (!grid) return;

    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const statusTagClass = { mvp: 'mvp', planning: 'planning', 'in-progress': 'in-progress', active: 'completed', completed: 'completed' };
    const statusLabel   = { mvp: 'MVP', planning: 'Planning', 'in-progress': 'In Progress', active: 'Active', completed: 'Completed' };
    const linkIcon      = { github: 'fab fa-github', external: 'fas fa-external-link-alt', pdf: 'fas fa-file-pdf', colab: 'fas fa-play-circle' };

    grid.innerHTML = '';

    window.PROJECTS.forEach(function (proj, index) {
        var t = proj[lang] || proj.en;

        // ── card element ───────────────────────────────────────────
        var card = document.createElement('div');
        card.className = 'project-card';
        card.setAttribute('data-category', proj.category);
        if (!prefersReduced) {
            card.style.opacity = '0';
            card.style.transform = 'translateY(20px)';
            card.style.transition = 'opacity 0.5s ease ' + (index * 0.06) + 's, transform 0.5s ease ' + (index * 0.06) + 's';
        }

        // ── tags ───────────────────────────────────────────────────
        var tagsHtml = (proj.tags || []).map(function (tag) {
            return '<span class="tech-badge">' + tag + '</span>';
        }).join('');

        // ── links ──────────────────────────────────────────────────
        var linksHtml = '';
        if (proj.links && proj.links.length === 1) {
            var lk = proj.links[0];
            var lkLabel = (lk.label && typeof lk.label === 'object') ? (lk.label[lang] || lk.label.en) : (lk.label || 'View');
            var lkIcon  = linkIcon[lk.kind] || 'fas fa-link';
            linksHtml = '<a href="' + lk.href + '" class="project-link" target="_blank" rel="noopener noreferrer"><i class="' + lkIcon + '"></i> ' + lkLabel + '</a>';
        } else if (proj.links && proj.links.length > 1) {
            var items = proj.links.map(function (lk) {
                var lkLabel = (lk.label && typeof lk.label === 'object') ? (lk.label[lang] || lk.label.en) : (lk.label || 'View');
                var lkIcon  = linkIcon[lk.kind] || 'fas fa-link';
                return '<a href="' + lk.href + '" class="project-link project9-link" target="_blank" rel="noopener noreferrer"><i class="' + lkIcon + '"></i> <span>' + lkLabel + '</span></a>';
            });
            linksHtml = '<div class="project-links">' + items.join('') + '</div>';
        }

        // ── case study (featured only) ─────────────────────────────
        var caseStudyHtml = '';
        if (proj.featured && proj.caseStudy) {
            var cs = proj.caseStudy[lang] || proj.caseStudy.en;
            var csLabelProblem = lang === 'ko' ? '문제' : 'Problem';
            var csLabelRole    = lang === 'ko' ? '역할' : 'Role';
            var csLabelTech    = lang === 'ko' ? '기술' : 'Tech';
            var csLabelImpact  = lang === 'ko' ? '임팩트' : 'Impact';
            caseStudyHtml = '<div class="case-study">' +
                '<div class="case-study-item"><strong>' + csLabelProblem + ':</strong> ' + cs.problem + '</div>' +
                '<div class="case-study-item"><strong>' + csLabelRole    + ':</strong> ' + cs.role    + '</div>' +
                '<div class="case-study-item"><strong>' + csLabelTech    + ':</strong> ' + cs.tech    + '</div>' +
                '<div class="case-study-item"><strong>' + csLabelImpact  + ':</strong> ' + cs.impact  + '</div>' +
                '</div>';
        }

        // ── assemble ───────────────────────────────────────────────
        var tagCls = statusTagClass[proj.status] || 'completed';
        var tagLbl = statusLabel[proj.status]    || proj.status;
        var resultIcon = proj.resultIcon || 'fa-check-circle';

        card.innerHTML =
            '<div class="project-header">' +
                '<h3>' + t.title + '</h3>' +
                '<span class="project-tag ' + tagCls + '">' + tagLbl + '</span>' +
            '</div>' +
            '<p class="project-subtitle">' + t.subtitle + '</p>' +
            '<p class="project-description">' + t.desc + '</p>' +
            '<div class="project-tech">' + tagsHtml + '</div>' +
            '<div class="project-result"><i class="fas ' + resultIcon + '"></i> <strong>Result:</strong> ' + t.result + '</div>' +
            caseStudyHtml +
            linksHtml;

        grid.appendChild(card);

        // ── fade-in via IntersectionObserver ───────────────────────
        if (!prefersReduced) {
            var obs = new IntersectionObserver(function (entries) {
                entries.forEach(function (entry) {
                    if (entry.isIntersecting) {
                        entry.target.style.opacity = '1';
                        entry.target.style.transform = 'translateY(0)';
                        obs.disconnect();
                    }
                });
            }, { threshold: 0.1 });
            obs.observe(card);
        }
    });
    // Projects-built stat is a lifetime count (authored in index.html, e.g. 22+),
    // intentionally decoupled from the curated cards shown here.
};

/* ===== Initial render (ko default matches script.js init) ===== */
document.addEventListener('DOMContentLoaded', function () {
    window.renderProjects('ko');
});
