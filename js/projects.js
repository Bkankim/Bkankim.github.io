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
            desc: 'I put 15 Mac Studios on a private Tailscale network, each with an assigned role, and ran LLM serving on them with nothing going out to the cloud. A Discord bot is the front door. A worker agent and a reviewer agent pass work back and forth on their own, and the whole thing recovers itself after a reboot so it stays up. The enterprise memory and agent systems sit on top of this stack.',
            result: '15 Mac Studios on a private Tailscale network serving our own model, a worker/reviewer agent pair that collaborates automatically, and reboot auto-recovery for always-on uptime'
        },
        ko: {
            title: '온프렘 LLM 멀티에이전트 인프라',
            subtitle: '기업 AI 시스템 실무 (프리랜서, 2026)',
            desc: '역할을 나눠 배정한 Mac Studio 15대를 Tailscale로 묶어 외부에 노출되지 않는 독립망을 만들고, 그 위에서 클라우드 없이 LLM을 직접 서빙했습니다. 입구는 디스코드 봇이고, 진행 에이전트와 검수 에이전트가 알아서 일을 주고받습니다. 재부팅하면 스스로 복구돼 항상 떠 있습니다. 전사 메모리와 에이전트 시스템이 이 스택 위에서 돕니다.',
            result: 'Mac Studio 15대 Tailscale 독립망에 비공개 모델 온프렘 서빙 + 진행·검수 2-에이전트 자동 협업, 재부팅 자동복구 상시가동'
        },
        caseStudy: {
            en: {
                problem: 'A company wanted LLM capability without any data leaving for the cloud, spread across several machines, and it had to run unattended without falling over.',
                role: 'I designed and built the on-prem serving and the multi-agent orchestration myself, and stood up the 15-node Mac Studio Tailscale network (freelance).',
                tech: '15-node Mac Studio Tailscale network, self-hosted LLM serving, a worker and reviewer agent that hand off automatically, a Discord bot interface, and process supervision that recovers itself after a reboot.',
                impact: 'The model runs entirely on-prem over the isolated Tailscale network with zero external cloud, the worker and reviewer agents collaborate on their own, and it comes back up by itself after a reboot so it stays available.'
            },
            ko: {
                problem: '데이터를 외부 클라우드로 보내지 않으면서 여러 장비에 걸쳐 LLM 역량을 갖춰야 했고, 사람 없이도 끊김 없이 돌아가야 했습니다.',
                role: '온프렘 서빙과 멀티에이전트 오케스트레이션을 직접 설계하고 구축했고, Mac Studio 15대 Tailscale 독립망도 직접 세팅했습니다 (프리랜서).',
                tech: 'Mac Studio 15대 Tailscale 프라이빗 네트워크, LLM 자체 서빙, 진행·검수 2-에이전트 자동 핸드오프, 디스코드 봇 인터페이스, 재부팅 후 스스로 복구되는 프로세스 관리.',
                impact: '비공개 모델을 외부 클라우드 없이 Tailscale 독립망에서 완전 온프렘으로 서빙하고, 진행·검수 에이전트가 자동으로 협업하며, 재부팅 후 스스로 복구돼 항상 떠 있습니다.'
            }
        }
    },
    {
        id: 'p5',
        category: 'product',
        featured: true,
        status: 'in-progress',
        resultIcon: 'fa-check-circle',
        tags: ['Python 3.12', 'uv', 'AsyncSSH', 'Clean Architecture', 'pytest · GitHub Actions CI', 'Open Source (MIT)'],
        links: [{ kind: 'github', href: 'https://github.com/Bkankim/Bluepy', label: 'GitHub (MIT)' }],
        en: {
            title: 'BluePy 2.0',
            subtitle: 'Open-Source Infra Security Scanner',
            desc: 'I took a 2017 legacy KISA security scanner and rebuilt it on Python 3.12 with a clean architecture, then shipped it as an honest open-source v0.1 (alpha). By default the first release only shows checks I could actually verify cause-and-effect on (Linux file permissions, plus macOS SIP, FileVault, and auto-update). I deleted the validators that returned false PASS, and the unverified legacy rules are marked experimental and hidden. It is CLI-first with JSON and table output, verifies SSH host keys strictly by default, and is MIT-licensed.',
            result: 'v0.1.0 is out, scanning only what is verified; 536 tests passing plus a live SSH acceptance run (the GUI, Windows, and auto-remediation engine exist but are held back)'
        },
        ko: {
            title: 'BluePy 2.0',
            subtitle: '오픈소스 인프라 보안 스캐너',
            desc: '2017년 KISA 레거시 보안 스캐너를 Python 3.12 클린아키텍처로 다시 짜서 정직한 오픈소스 v0.1(alpha)로 냈습니다. 첫 릴리스는 인과까지 검증한 점검만 기본으로 보여줍니다(리눅스 파일권한, macOS SIP·FileVault·자동업데이트). 거짓 PASS를 내던 validator는 지웠고, 검증 못 한 레거시 규칙은 experimental로 숨겼습니다. CLI 우선(JSON·표 출력), SSH 호스트키는 기본으로 엄격 검증, MIT 라이선스.',
            result: 'v0.1.0 출시, 검증된 점검만 노출하는 정직한 스캔. 테스트 536건 통과 + 라이브 SSH 합격(GUI·Windows·자동수정 엔진은 만들어 뒀지만 보류)'
        },
        caseStudy: {
            en: {
                problem: 'The 2017 KISA scanner had its rule-to-validator mappings scrambled, and some checks just returned PASS no matter what. Ship that as a 133-rule scanner and you are handing people false confidence.',
                role: 'I drove the honest v0.1. I deleted the false-PASS validators, built a filter that hides rules as experimental by default so only the verified checks ship, added a JSON and table CLI, and tightened SSH host-key verification.',
                tech: 'Python 3.12, uv, Clean (hexagonal) architecture, AsyncSSH; branch-covered causal tests (PASS/FAIL/MANUAL) with anchored matchers and real command captures; GitHub Actions CI (unit, macOS causal, live Docker acceptance); MIT with LICENSE/SECURITY/CONTRIBUTING and a README that separates verified from experimental.',
                impact: 'It ships a smaller set I can stand behind instead of an inflated rule count. 536 tests pass, and a live SSH acceptance run ties the CLI output back to the in-process proof. The false-PASS checks are gone at the source.'
            },
            ko: {
                problem: '2017년 KISA 레거시 스캐너는 규칙과 validator 매핑이 뒤섞여 있었고, 일부 점검은 무조건 PASS를 돌려줬습니다. 이걸 133개 규칙 스캐너라고 내세우면 사용자에게 거짓 안심을 주는 셈이었습니다.',
                role: '정직한 v0.1을 주도했습니다. 거짓 PASS validator를 지우고, 검증된 점검만 나가도록 나머지는 experimental로 숨기는 필터를 만들고, JSON·표 CLI를 붙이고, SSH 호스트키 검증을 강화했습니다.',
                tech: 'Python 3.12, uv, Clean(헥사고날) 아키텍처, AsyncSSH; 분기 커버 인과 테스트(PASS/FAIL/MANUAL)·anchored 매처·실제 명령 캡처; GitHub Actions CI(단위/macOS 인과/라이브 Docker 합격); MIT, LICENSE/SECURITY/CONTRIBUTING + 검증·실험 구분 README.',
                impact: '규칙 수를 부풀리는 대신 믿을 수 있는 검증셋만 내보냈습니다. 테스트 536건 통과, 그리고 CLI 출력을 인프로세스 증명에 묶은 라이브 SSH 합격까지 확인했고, 거짓 PASS 점검은 소스에서 제거했습니다.'
            }
        }
    },
    {
        id: 'p1',
        category: 'product',
        featured: true,
        status: 'mvp',
        resultIcon: 'fa-rocket',
        tags: ['Next.js 16 (RSC)', 'TypeScript', 'Neon · Drizzle', 'BetterAuth (Google·GitHub)', 'Cloudflare R2', 'Vitest · Sentry'],
        links: [{ kind: 'external', href: 'https://ourfolio.bkan.dev', label: 'ourfolio.bkan.dev' }],
        en: {
            title: 'OurFolio',
            subtitle: 'Evidence-Based Portfolio Platform',
            desc: 'A SaaS where developers back up their work with evidence-based portfolios. Public profiles render on the server, you can import GitHub repos, and OG/SEO is generated on the fly. I took it from MVP to a v1 that is ready to launch.',
            result: 'v1 ready to launch: RSC public page (warm LCP ~0.26s), GitHub import, full SEO/OG, critical-path tests, and Sentry'
        },
        ko: {
            title: 'OurFolio',
            subtitle: '근거 기반 포트폴리오 플랫폼',
            desc: '개발자가 자기 작업물을 근거 기반 포트폴리오로 증명하는 SaaS입니다. 공개 프로필은 서버에서 렌더되고, GitHub 레포를 가져올 수 있으며, OG/SEO는 동적으로 만들어집니다. MVP에서 출시 가능한 v1까지 다듬었습니다.',
            result: 'v1 출시 준비 완료: RSC 공개 페이지(warm LCP ~0.26s), GitHub 임포트, SEO/OG, 핵심경로 테스트, Sentry'
        },
        caseStudy: {
            en: {
                problem: 'I had to get an MVP portfolio SaaS launch-ready on a live, shared Neon database without any downtime. The old consultant-era data model (case studies, budget ranges) needed to be reworked for developers, the public page had to come in under 2.5s mobile LCP, and there was no SEO, no observability, and no tests to fall back on.',
                role: 'I built the v1 end to end: a schema-first expand/contract migration, the persona rework, the public-page RSC refactor, GitHub import, SEO/OG, and the test and observability layer.',
                tech: 'Next.js 16 App Router RSC (server-rendered hero/projects + thin client islands off a single relational Drizzle query); zero-downtime expand/contract migration on a shared-live Neon DB; better-auth Google + GitHub OAuth with idempotent repo import and metadata-only refresh that preserves manual edits; Cloudflare R2 (images + resume PDF); dynamic OG via next/og plus sitemap/robots/canonical; cookie/Accept-Language i18n resolved server-side; Vitest critical-path tests and @sentry/nextjs with lead-PII scrubbing.',
                impact: 'The public profile renders server-side at ~0.26s warm LCP off a single DB round-trip. GitHub repos import without duplicates, and a refresh only touches stars and language so manual edits survive. SEO is complete (dynamic OG, sitemap, robots, canonical). There are 42 critical-path tests with Sentry in runtime, and the consultant-era model was retired through a zero-downtime expand/contract cutover.'
            },
            ko: {
                problem: 'MVP 포트폴리오 SaaS를 라이브 공유 Neon DB에서 무중단으로 출시 수준까지 올려야 했습니다. 컨설턴트 시절 데이터 모델(케이스 스터디·예산 범위)을 개발자용으로 다시 잡고, 공개 페이지 모바일 LCP를 2.5s 미만으로 끌어내리고, 없던 SEO·관측성·테스트 안전망을 처음부터 깔아야 했습니다.',
                role: 'v1을 직접 다 만들었습니다. 스키마 우선 expand/contract 마이그레이션, 페르소나 재정의, 공개 페이지 RSC 재구축, GitHub 임포트, SEO/OG, 테스트·관측성 레이어까지요.',
                tech: 'Next.js 16 App Router RSC(서버 렌더 hero/projects + 얇은 client island, 단일 relational Drizzle 쿼리); 라이브 공유 Neon DB에 무중단 expand/contract 마이그레이션; better-auth Google + GitHub OAuth, 멱등 레포 임포트 + 수동 편집 보존 메타데이터 전용 refresh; Cloudflare R2(이미지·이력서 PDF); next/og 동적 OG + sitemap/robots/canonical; 쿠키·Accept-Language 서버 i18n; Vitest 핵심경로 테스트 + @sentry/nextjs 리드 PII 스크럽.',
                impact: '공개 프로필은 단일 DB 왕복으로 서버 렌더되고 warm LCP는 ~0.26s입니다. GitHub 레포는 중복 없이 들어오고, refresh는 stars·language만 갱신해서 수동 편집이 그대로 남습니다. SEO는 동적 OG·sitemap·robots·canonical까지 다 갖췄고, 핵심경로 테스트 42건과 Sentry 런타임이 붙어 있습니다. 컨설턴트 모델은 무중단 expand/contract 컷오버로 걷어냈습니다.'
            }
        }
    },
    {
        id: 'ent-team-memory',
        category: 'infra',
        featured: true,
        status: 'completed',
        resultIcon: 'fa-brain',
        tags: ['Hindsight', 'Graphify', 'RBAC Gateway', 'Multi-Tenant', 'Enterprise Memory', 'Codebase Graph'],
        links: [],
        en: {
            title: 'Team & Enterprise AI Memory',
            subtitle: 'Enterprise AI System (Freelance)',
            desc: 'I customized the open-source agent-memory Hindsight into personal and team memory banks for each employee. Recall and Reflect are behind a security gate, so a personal bank is readable only by its owner while it keeps accumulating without gaps, with work logging and daily reports handled automatically. The team banks chain together into the base of a company-wide memory system, and I used Graphify to push the stored knowledge down to codebase granularity while keeping it token-efficient.',
            result: 'Personal and team banks → a company-wide memory foundation, owner-only security isolation, automated reporting, and Graphify making it codebase-granular and token-efficient'
        },
        ko: {
            title: '팀·전사 AI 메모리 시스템',
            subtitle: '기업 AI 시스템 실무 (프리랜서)',
            desc: '오픈소스 에이전트 메모리 Hindsight를 손봐서 직원별 personal·team 메모리 bank를 만들었습니다. Recall·Reflect 권한을 보안 등급으로 제어해서 개인 bank는 본인만 열람하고(개인정보 격리), 그러면서도 누락 없이 쌓이게 했고 업무기록과 일일보고는 자동으로 돌게 했습니다. 팀 메모리를 묶어 전사 메모리 시스템의 토대를 만들고, Graphify로 저장된 지식을 코드베이스 단위까지 토큰 효율적으로 끌어올렸습니다.',
            result: '개인·팀 bank → 전사 메모리 토대, 보안 등급 권한 격리(개인 bank 본인 only) + 업무보고 자동화, Graphify 코드베이스 단위·토큰 친화 고도화'
        },
        caseStudy: {
            en: {
                problem: "Every AI user's work context kept evaporating, self-review and writing reports were manual, and personal records needed to stay private. On top of that, the org wanted a memory layer it could scale across the whole company.",
                role: 'I customized the open-source Hindsight memory into personal and team banks behind a security-grade permission gateway, chained them into a company-wide memory foundation, and added a Graphify knowledge graph (freelance).',
                tech: 'Hindsight (Retain/Recall/Reflect), an RBAC permission gateway (personal banks are owner-only), multi-tenant isolation, a company-wide enterprise memory layer, Graphify pushing memory down to codebase granularity and token-efficiency, and automated work logging and daily reports.',
                impact: 'Employees review their own work and generate reports straight from their personal bank, managers follow progress through the team banks, and the team memory becomes the base of the company-wide system. Personal banks stay owner-only, so personal data stays isolated.'
            },
            ko: {
                problem: 'AI를 쓰는 사람마다 업무 맥락이 자꾸 날아갔고, 업무 복기와 보고서 작성도 전부 손으로 했습니다. 개인 기록은 프라이버시 격리가 필요했고, 동시에 전사로 확장되는 메모리 계층도 있어야 했습니다.',
                role: '오픈소스 Hindsight 메모리를 커스터마이즈해 personal·team bank 구조와 보안 등급 권한 게이트웨이를 설계하고 구현했고, 이를 묶어 전사 메모리 토대를 만든 뒤 Graphify 지식그래프를 결합했습니다 (프리랜서).',
                tech: 'Hindsight(Retain·Recall·Reflect), RBAC 권한 게이트웨이(개인 bank 본인 only), 멀티테넌트 격리, 전사 기업 메모리 계층, Graphify로 메모리 지식을 코드베이스 단위·토큰 친화 고도화, 업무기록·일일보고 자동화.',
                impact: '직원은 personal bank로 업무를 복기하고 보고서를 자동으로 만들고, 관리자는 team bank로 진행 상황을 추적합니다. 팀 메모리는 전사 메모리 시스템의 토대가 되고, 개인 bank는 본인만 열람해 개인정보를 지킵니다.'
            }
        }
    },
    {
        id: 'p2',
        category: 'product',
        featured: false,
        status: 'mvp',
        resultIcon: 'fa-rocket',
        tags: ['Next.js 15', 'Supabase', 'Cloudflare R2', 'Google Vision API', 'OpenAI/Anthropic', 'Telegram Bot'],
        links: [{ kind: 'external', href: 'https://ashd.bkan.dev', label: 'ashd.bkan.dev' }],
        en: {
            title: 'ASHD v2',
            subtitle: 'Warranty & A/S Management Service',
            desc: 'Reads receipts and warranty documents with OCR and warns you before they expire. Google Vision API pulls the text, an LLM structures it, and alerts go out over email and Telegram automatically.',
            result: 'OCR auto-extraction + expiry alert automation MVP'
        },
        ko: {
            title: 'ASHD v2',
            subtitle: '보증서·A/S 관리 서비스',
            desc: 'OCR로 영수증과 보증서를 자동 인식하고 만료 전에 알려주는 서비스입니다. Google Vision API로 문서를 읽고, LLM으로 구조화한 뒤, 이메일·텔레그램 알림을 자동으로 보냅니다.',
            result: 'OCR 자동 추출 + 만료 알림 자동화 MVP'
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
            desc: 'A 13-module admin generated from one module registry. Spec-driven (PRD/SDD/TDD), with accessibility, dark mode, and a responsive layout built in.',
            result: '13 modules from one registry, 81 tests passing (demo)'
        },
        ko: {
            title: '통합 어드민 대시보드 (데모)',
            subtitle: '기업 AI 시스템 실무 (프리랜서)',
            desc: '모듈 레지스트리 하나에서 13개 모듈을 찍어낸 어드민입니다. 스펙주도(PRD/SDD/TDD)로 접근성, 다크모드, 반응형까지 구현했습니다.',
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
            desc: 'An orchestration platform where 1 CEO runs 15 AI agents across 4 teams (Planning, Legal, Marketing, Dev). It has 31 skills, 19 automation hooks, and 5 crew workflows so one person can run the whole thing.',
            result: '15 agents · 31 skills · 19 hooks · 5 crews in operation'
        },
        ko: {
            title: 'BK-HQ',
            subtitle: '1인 AI 회사 운영 시스템',
            desc: 'CEO 한 명이 AI 에이전트 15명을 4개 팀(기획·법무·마케팅·개발)으로 굴리는 오케스트레이션 플랫폼입니다. 스킬 31개, 자동화 훅 19개, 크루 워크플로우 5개로 혼자서도 회사를 돌릴 수 있게 짰습니다.',
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
            desc: 'A RAG system for scientific QA. I improved retrieval and ranking with Solar embeddings, a rank-graph refactor, and prompt tuning.',
            result: 'MAP/MRR +107% (0.4242 → 0.8795 / 0.8818)'
        },
        ko: {
            title: '과학 질의응답 IR 대회',
            subtitle: 'RAG Retrieval & Ranking',
            desc: '과학 도메인 RAG의 검색과 랭킹을 손봐 MAP/MRR을 크게 끌어올렸습니다. Solar 임베딩, 랭크 그래프 리팩토링, 프롬프트 튜닝을 적용했습니다.',
            result: 'MAP/MRR 107% 향상 (0.4242 → 0.8795 / 0.8818)'
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
            desc: 'Automatic type classification for scanned document images across 17 classes. I tried a range of backbones along with TTA, augmentation, and post-processing.',
            result: 'F1-score improved by 470% (0.1701 → 0.9689)'
        },
        ko: {
            title: '이미지 분류 모델 개발',
            subtitle: 'Document Type Classification',
            desc: '스캔 문서 이미지의 유형을 17개 클래스로 자동 분류합니다. OCR 들어가기 전 단계라 분류 성능을 올리려고 백본을 여러 개 실험하고 TTA를 적용했습니다.',
            result: 'F1-score 470% 향상 (0.1701 → 0.9689)'
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
            desc: 'Summarizes everyday Korean conversations. I fine-tuned with QLoRA and added augmentation and post-processing to lift the quality.',
            result: 'Rouge score improved by 30% (36.12 → 47.31)'
        },
        ko: {
            title: '대화 요약 모델 개발',
            subtitle: 'Dialogue Summarization',
            desc: '한국어 일상 대화를 요약하는 모델입니다. QLoRA 파인튜닝에 증강과 후처리를 더해 요약 품질을 높였습니다.',
            result: 'Rouge 점수 30% 향상 (36.12 → 47.31)'
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
            desc: 'A CTR model trained on large-scale ad logs. I improved log-loss and AP with sequence features, downsampling, and tuning.',
            result: 'Score 0.33185 → 0.34814 achieved (Top 10% in private competition)'
        },
        ko: {
            title: '토스 광고 클릭률 예측',
            subtitle: 'CTR Prediction',
            desc: '대규모 로그 데이터로 광고 클릭 확률을 예측하는 CTR 모델입니다. 시퀀스 피처와 다운샘플링, 튜닝으로 LogLoss와 AP를 개선했습니다.',
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
            desc: 'A marketing system of six agents that handles trends, ad copy, segmentation, reviews, competitor analysis, and strategy reports on its own.',
            result: 'End-to-End Multi-Agent System Implementation'
        },
        ko: {
            title: '상업 마케팅 AI 에이전트',
            subtitle: 'Custom Multi-Agent System',
            desc: '에이전트 6개가 트렌드, 카피, 세그먼트, 리뷰, 경쟁사, 전략 리포트를 자동으로 만들어 반복되는 리서치를 줄여줍니다.',
            result: 'End-to-End 멀티 에이전트 시스템 구현'
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
            desc: 'A movie rating prediction service with an MLOps pipeline built on the TMDB API. Everything runs automatically, from data collection to training, deployment, and monitoring.',
            result: 'End-to-End CI/CD MLOps Pipeline Implementation'
        },
        ko: {
            title: '영화 평점 예측 서비스',
            subtitle: 'Movie Rating Prediction MLOps',
            desc: 'TMDB API로 사용자 리뷰 기반 영화 평점을 예측하는 서비스와 MLOps 파이프라인을 만들었습니다. 데이터 수집부터 학습, 배포, 모니터링까지 전부 자동으로 돌아갑니다.',
            result: 'End-to-End CI/CD MLOps 파이프라인 구현'
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
            desc: 'Training material for practitioners bringing RAG into enterprise document search. It walks through BM25 vs Vector vs Hybrid, Query Expansion, and evaluating with Hit@k and MRR.',
            result: 'Overview + Training PDF + Jupyter Notebook completed'
        },
        ko: {
            title: 'LLM 기반 RAG 교육 콘텐츠',
            subtitle: 'Technical Content Creation',
            desc: '사내 문서 검색에 RAG를 도입하려는 실무자를 위한 교육 콘텐츠입니다. BM25·Vector·Hybrid 검색 비교, Query Expansion, Hit@k·MRR 평가 실습을 담았습니다.',
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
