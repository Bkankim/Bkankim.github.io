/* ===== PROJECTS - Single Source of Truth ===== */
window.PROJECTS = [
    // ── PRODUCTS ──────────────────────────────────────────────────
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
        id: 'p3',
        category: 'product',
        featured: false,
        status: 'planning',
        resultIcon: 'fa-search',
        tags: ['Market Research', 'Moat Strategy', 'Competitor Analysis'],
        links: [],
        en: {
            title: 'Subari',
            subtitle: 'Inmate Family Care Service',
            desc: 'Comprehensive care platform for families of inmates. Starting with letter delivery as MVP, building moats with facility-specific regulation DB, emotional letter archive, and anonymous community. First production-level project.',
            result: 'Market research complete, moat strategy designed, Rollapalooza 5:0'
        },
        ko: {
            title: 'Subari (수발이)',
            subtitle: '수용자 가족 케어 서비스',
            desc: '교정시설 수용자 가족을 위한 종합 케어 플랫폼. MVP는 편지 배달 서비스로 시작, 시설별 규정 DB·감정 편지 아카이브·익명 커뮤니티로 해자 구축. 첫 프로덕션 레벨 프로젝트.',
            result: '시장조사 완료, 해자 전략 설계, 롤라팔루자 5:0'
        }
    },
    {
        id: 'p4',
        category: 'product',
        featured: false,
        status: 'planning',
        resultIcon: 'fa-drafting-compass',
        tags: ['Claude Code', 'Neon MCP', 'Vercel', 'Polar API', 'Cloudflare API'],
        links: [],
        en: {
            title: 'Wukong',
            subtitle: 'AI Autonomous Micro-SaaS Factory',
            desc: 'Mitosis Engine that auto-generates, measures, and evolves micro-SaaS products. Genetic algorithm optimization of product portfolio based on 12-gene business blueprint.',
            result: 'Mitosis Engine v2 spec finalized, Phase 0 pending'
        },
        ko: {
            title: 'Wukong (제천대성)',
            subtitle: 'AI 자율 마이크로 SaaS 팩토리',
            desc: 'AI가 마이크로 SaaS를 자동 생성·측정·진화시키는 Mitosis Engine. 12-gene 비즈니스 블루프린트 기반 유전 알고리즘으로 제품 포트폴리오 자동 최적화.',
            result: 'Mitosis Engine v2 스펙 확정, Phase 0 대기'
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
                role: '스캐너를 처음부터 끝까지 구축: 규칙 엔진, 롤백 포함 자동 수정, GUI·보고서 일원화.',
                tech: 'Python, PySide6 GUI, Clean Architecture, AsyncSSH/PyWinRM 원격 실행, SQLite, 170+ 보안 규칙.',
                impact: '3개 플랫폼에서 170+ 규칙 점검·자동 수정(롤백 안전), 테스트 커버리지 60%+.'
            }
        }
    },
    // ── AI INFRA ──────────────────────────────────────────────────
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
        id: 'i2',
        category: 'infra',
        featured: false,
        status: 'active',
        resultIcon: 'fa-check-circle',
        tags: ['Claude Code Skills', 'Multi-Agent', '81 Mental Models', 'Cynefin Framework'],
        links: [],
        en: {
            title: 'Smart Skill Chain',
            subtitle: 'AI Agent Skill Chain',
            desc: 'Integrated chain of 5 skills: SmartThink (strategy) · SmartPlan (execution) · SmartSearch (intelligent search) · SmartReview (code review) · SmartBrief (brief generation). 81 mental models and Cynefin framework built-in.',
            result: 'Think·Plan·Search·Review·Brief 5-skill chain in operation'
        },
        ko: {
            title: 'Smart Skill Chain',
            subtitle: 'AI 에이전트 스킬 체인',
            desc: 'SmartThink(전략 분석) · SmartPlan(실행 계획) · SmartSearch(지능 검색) · SmartReview(코드 리뷰) · SmartBrief(브리프 생성) 5종 통합 스킬 체인. 81개 멘탈 모델과 Cynefin 프레임워크 내장.',
            result: 'Think·Plan·Search·Review·Brief 5종 통합 운영'
        }
    },
    {
        id: 'i3',
        category: 'infra',
        featured: false,
        status: 'active',
        resultIcon: 'fa-check-circle',
        tags: ['Bash Pipeline', '4-Stage Parallel', 'PII Isolation'],
        links: [],
        en: {
            title: 'SNS Automation Pipeline',
            subtitle: 'Multi-Platform Content Auto-Generation',
            desc: '4-stage parallel pipeline: topic extraction → trend selection → platform-specific content generation → format validation. Simultaneous generation for Threads, X, and LinkedIn.',
            result: 'Threads·X·LinkedIn 3-platform simultaneous generation automated'
        },
        ko: {
            title: 'SNS 자동화 파이프라인',
            subtitle: '멀티 플랫폼 콘텐츠 자동 생성',
            desc: '일일 활동 데이터에서 토픽 추출 → 트렌드 선정 → 플랫폼별 콘텐츠 생성 → 포맷 검증까지 4단계 병렬 파이프라인. Threads·X·LinkedIn 동시 생성.',
            result: 'Threads·X·LinkedIn 3개 플랫폼 동시 생성 자동화'
        }
    },
    {
        id: 'i4',
        category: 'infra',
        featured: false,
        status: 'active',
        resultIcon: 'fa-check-circle',
        tags: ['Docker', 'Node.js', 'SQLite', 'SSE', 'React'],
        links: [],
        en: {
            title: 'Agent Dashboard',
            subtitle: 'Real-time Agent Monitoring Dashboard',
            desc: 'Personal orchestration tool visualizing execution timelines, task completion rates, and error tracking for 15 AI agents in real-time. SSE streaming with 30-day event retention.',
            result: '15 agents real-time tracking, 30-day event retention'
        },
        ko: {
            title: 'Agent Dashboard',
            subtitle: '실시간 에이전트 모니터링 대시보드',
            desc: '15개 AI 에이전트의 실행 타임라인, 작업 완료율, 에러 추적을 실시간 시각화하는 개인 오케스트레이션 도구. SSE 스트리밍 기반 30일 이벤트 보존.',
            result: '15 에이전트 실시간 추적, 30일 이벤트 보존'
        }
    },
    {
        id: 'i5',
        category: 'infra',
        featured: false,
        status: 'active',
        resultIcon: 'fa-check-circle',
        tags: ['Bash', 'vault-lint', '/learn Skill', 'Markdown SSOT'],
        links: [],
        en: {
            title: 'Knowledge Compound System',
            subtitle: 'Self-Built Memory & Intelligence System',
            desc: 'Self-built memory system with 25+ reference domains, 100+ knowledge documents with auto cross-referencing, and a compound learning pipeline that accumulates, reinforces, and evolves insights across sessions.',
            result: '25+ domains, 100+ documents, auto cross-referencing in operation'
        },
        ko: {
            title: '자동 복리 지식 축적 시스템',
            subtitle: '자체 구축 메모리 & 인텔리전스 시스템',
            desc: '자체 구축 메모리 시스템. 25+ 레퍼런스 도메인, 100+ 지식 문서를 자동 교차 참조하고, 세션 간 학습을 누적·강화·진화시키는 복리 지식 파이프라인.',
            result: '25+ 도메인, 100+ 문서, 자동 교차 참조 운영 중'
        }
    },
    {
        id: 'i6',
        category: 'infra',
        featured: false,
        status: 'active',
        resultIcon: 'fa-check-circle',
        tags: ['Multi-Agent Orchestration', '5 Crew Presets', 'Auto Handoff', 'GitHub Actions'],
        links: [],
        en: {
            title: 'Agent Team Automation',
            subtitle: 'Automated Service Development Pipeline',
            desc: 'Automated service development pipeline integrating 4 teams (Planning, Legal, Marketing, Dev). Auto-handoff from planning → design → implementation → review → deployment. 5 crew presets for one-click execution of feature, bugfix, marketing experiment, policy change, and SNS content workflows.',
            result: 'Full planning-to-deploy agent automation, 5 workflow presets in operation'
        },
        ko: {
            title: '에이전트 팀 자동화',
            subtitle: '자동 서비스 개발 파이프라인',
            desc: '4개 팀(기획·법무·마케팅·개발) 에이전트를 통합한 자동 서비스 개발 파이프라인. 기획→설계→구현→검수→배포까지 에이전트 간 핸드오프로 자동 진행. 5개 크루 프리셋으로 원클릭 실행.',
            result: '기획→배포 전 과정 에이전트 자동화, 5개 워크플로우 프리셋 운영'
        }
    },
    // ── AI/ML ──────────────────────────────────────────────────────
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
    // ── COMPETITIONS ───────────────────────────────────────────────
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
        id: 'c5',
        category: 'competition',
        featured: false,
        status: 'completed',
        resultIcon: 'fa-chart-line',
        tags: ['Python', 'LightGBM', 'XGBoost', 'Scikit-learn'],
        links: [{ kind: 'github', href: 'https://github.com/Bkankim/upstageailab-ml-competition-ml-2', label: 'View Code' }],
        en: {
            title: 'Real Estate Price Prediction',
            subtitle: 'ML Regression',
            desc: 'Prediction model on historical public transaction data. Minimized errors through feature engineering (60+ features) and K-Fold validation.',
            result: 'RMSE improved by 58% <br>(48192 → 20006)'
        },
        ko: {
            title: '부동산 실거래가 예측',
            subtitle: 'ML Regression',
            desc: '공공데이터 기반 과거 거래가를 학습시켜 미래 부동산 실거래가 예측 정확도 향상 및 패턴 분석. 60여 개 특성을 활용한 Feature Engineering과 K-Fold 검증.',
            result: 'RMSE 58% 향상 <br>(48192 → 20006)'
        }
    },
    {
        id: 'm9',
        category: 'aiml',
        featured: false,
        status: 'completed',
        resultIcon: 'fa-book',
        tags: ['RAG', 'BM25', 'FAISS', 'Upstage Solar', 'Python'],
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
    // ── ENTERPRISE AI SYSTEM (Contract, 2026) ──────────────────────
    {
        id: 'ent-onprem-llm',
        category: 'infra',
        featured: true,
        status: 'completed',
        resultIcon: 'fa-server',
        tags: ['Local LLM Serving', 'Self-Hosted', 'Multi-Agent', 'Discord Bot', 'Auto-Recovery'],
        links: [],
        en: {
            title: 'On-Prem LLM Multi-Agent Infra',
            subtitle: 'Enterprise AI System (Contract, 2026)',
            desc: 'Self-hosted LLM serving on on-prem hardware with no external cloud, fronted by a messenger (Discord) agent bot. A worker agent and a reviewer agent collaborate via automatic handoff, with auto-recovery after reboot for always-on operation.',
            result: 'Private model self-served on-prem + worker/reviewer 2-agent auto-collaboration, reboot auto-recovery (always-on)'
        },
        ko: {
            title: '온프렘 LLM 멀티에이전트 인프라',
            subtitle: '기업 AI 시스템 실무 (계약, 2026)',
            desc: '외부 클라우드 없이 온프렘 장비에 LLM을 자체 서빙하고 메신저(디스코드) 에이전트 봇으로 연결. 진행 에이전트와 검수 에이전트가 자동 핸드오프로 협업하며, 재부팅 후 자동 복구되어 상시 가동.',
            result: '비공개 모델 온프렘 자체 서빙 + 진행·검수 2-에이전트 자동 협업, 재부팅 자동복구 상시가동'
        },
        caseStudy: {
            en: {
                problem: 'An enterprise needed LLM capability without sending data to any external cloud, plus reliable unattended operation.',
                role: 'Designed and built the on-prem serving and multi-agent orchestration end to end (contract).',
                tech: 'Self-hosted LLM serving, two-agent (worker + reviewer) auto-handoff, Discord bot interface, process supervision with reboot auto-recovery.',
                impact: 'Private model served fully on-prem (zero external cloud), automatic worker/reviewer collaboration, and reboot auto-recovery for always-on availability.'
            },
            ko: {
                problem: '기업이 데이터를 외부 클라우드로 보내지 않으면서 LLM 역량을 확보하고, 무인 상시 가동까지 필요로 했음.',
                role: '온프렘 서빙과 멀티에이전트 오케스트레이션을 처음부터 끝까지 설계·구축 (계약).',
                tech: 'LLM 자체 서빙, 2-에이전트(진행+검수) 자동 핸드오프, 디스코드 봇 인터페이스, 재부팅 자동복구 프로세스 관리.',
                impact: '비공개 모델 완전 온프렘 서빙(외부 클라우드 0), 진행·검수 자동 협업, 재부팅 자동복구로 상시 가용.'
            }
        }
    },
    {
        id: 'ent-data-schema',
        category: 'infra',
        featured: false,
        status: 'completed',
        resultIcon: 'fa-database',
        tags: ['PostgreSQL', 'Schema Design', 'Normalization', 'Data Modeling', 'ADR'],
        links: [],
        en: {
            title: 'Integrated Data Platform Schema',
            subtitle: 'Enterprise AI System (Contract)',
            desc: 'Designed a normalized 27-table schema integrating call and customer data. Specified natural-key, soft-delete, and change-history policies with an invariant checklist, validated by two external reviews and adversarial code review.',
            result: '23 → 27-table normalized design + invariant spec, passed adversarial review (design stage)'
        },
        ko: {
            title: '통합 데이터 플랫폼 스키마',
            subtitle: '기업 AI 시스템 실무 (계약)',
            desc: '통화·고객 데이터를 통합하는 27-table 정규화 스키마 설계. 자연키·소프트삭제·변경이력 정책과 불변식 체크리스트를 명세하고 외부 검토 2회·적대적 코드 검수로 검증.',
            result: '23 → 27 테이블 정규화 설계 + 불변식 명세, 적대적 리뷰 통과 (설계 단계)'
        }
    },
    {
        id: 'ent-knowledge-graph',
        category: 'aiml',
        featured: false,
        status: 'completed',
        resultIcon: 'fa-diagram-project',
        tags: ['Knowledge Graph', 'Community Detection', 'Graph Analysis', 'Python'],
        links: [],
        en: {
            title: 'Codebase Knowledge Graph',
            subtitle: 'Enterprise AI System (Contract)',
            desc: 'Built a pipeline turning an internal codebase into a queryable knowledge graph. Integrated five projects and fixed four graph-integrity bugs (hyperedge contamination, phantom edges, noise nodes, stale state) via adversarial re-review.',
            result: '1,158 nodes / 1,797 relationships / 73 communities integrated graph, 4 integrity bugs fixed'
        },
        ko: {
            title: '코드베이스 지식그래프',
            subtitle: '기업 AI 시스템 실무 (계약)',
            desc: '사내 코드베이스를 질의 가능한 지식그래프로 변환하는 파이프라인 구축. 5개 프로젝트를 통합하고 적대적 재검토로 그래프 정합성 버그 4건(하이퍼엣지 오염·팬텀 엣지·노이즈 노드·stale 상태)을 수정.',
            result: '1,158노드 / 1,797관계 / 73커뮤니티 통합 그래프, 정합성 버그 4건 수정'
        }
    }
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
    // Derive Projects count stat from PROJECTS array length
    var statEl = document.querySelector('[data-stat="projects"]');
    if (statEl) {
        statEl.setAttribute('data-count', window.PROJECTS.length);
        statEl.textContent = window.PROJECTS.length + '+';
    }
};

/* ===== Initial render (ko default matches script.js init) ===== */
document.addEventListener('DOMContentLoaded', function () {
    window.renderProjects('ko');
});
