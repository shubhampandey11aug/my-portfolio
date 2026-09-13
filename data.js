/**
 * ====================================================================
 * PORTFOLIO DATA CONFIGURATION
 * ====================================================================
 * All portfolio information, resume details, and in-depth project
 * case studies are defined here.
 */

const portfolioData = {
  // --- Personal & Contact Information ---
  personal: {
    name: "Alex Morgan",
    role: "Full-Stack Software Engineer & System Architect",
    tagline: "Building scalable, high-performance web applications and intuitive digital experiences with modern technologies.",
    location: "San Francisco, CA / Remote",
    email: "alex.morgan.dev@example.com",
    github: "https://github.com/yourusername",
    linkedin: "https://linkedin.com/in/yourprofile",
    twitter: "https://twitter.com/yourhandle",
    resumePdf: "assets/resume.pdf",
    availability: "Available for new opportunities",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=500&auto=format&fit=crop&q=80",
    stats: [
      { label: "Years Experience", value: "4+" },
      { label: "Projects Completed", value: "25+" },
      { label: "Open Source Stars", value: "1.2k" },
      { label: "Code Commits (Year)", value: "1,400+" }
    ]
  },

  // --- About Me & Biography ---
  about: {
    heading: "Passionate about transforming complex challenges into elegant solutions",
    paragraphs: [
      "I am a results-driven Full-Stack Engineer with over 4 years of hands-on experience designing and building production-grade web applications, microservices, and distributed cloud architectures.",
      "My journey started with a curiosity about how the web functions under the hood, which evolved into leading product development sprints and architecting real-time systems serving hundreds of thousands of users.",
      "When I'm not writing clean, maintainable code or tuning database queries, you can find me contributing to open-source developer tooling, exploring AI agent workflows, and writing technical deep-dives."
    ],
    highlights: [
      "Specialized in TypeScript, React, Next.js, Node.js, and Python ecosystems.",
      "Track record of improving API latency by up to 60% via caching and query optimization.",
      "Strong advocate for automated testing (Jest, Playwright) and robust CI/CD pipelines.",
      "Proven experience collaborating across cross-functional product, design, and QA teams."
    ]
  },

  // --- Technical Skills Matrix ---
  skills: [
    {
      category: "Frontend Development",
      icon: "code",
      items: [
        { name: "React / Next.js", level: "Expert" },
        { name: "TypeScript / JavaScript", level: "Expert" },
        { name: "HTML5 / CSS3 / SCSS", level: "Expert" },
        { name: "Tailwind CSS", level: "Expert" },
        { name: "Vue.js", level: "Intermediate" },
        { name: "Redux Toolkit / Zustand", level: "Advanced" }
      ]
    },
    {
      category: "Backend & APIs",
      icon: "server",
      items: [
        { name: "Node.js / Express", level: "Expert" },
        { name: "Python / FastAPI / Django", level: "Advanced" },
        { name: "RESTful & GraphQL APIs", level: "Expert" },
        { name: "WebSockets & SSE", level: "Advanced" },
        { name: "Microservices Architecture", level: "Advanced" },
        { name: "gRPC & Protocol Buffers", level: "Intermediate" }
      ]
    },
    {
      category: "Databases & Storage",
      icon: "database",
      items: [
        { name: "PostgreSQL & Prisma / TypeORM", level: "Expert" },
        { name: "MongoDB & Mongoose", level: "Advanced" },
        { name: "Redis (Caching & Queues)", level: "Advanced" },
        { name: "Vector DBs (Pinecone / Chroma)", level: "Intermediate" },
        { name: "Supabase & Firebase", level: "Advanced" }
      ]
    },
    {
      category: "DevOps, Cloud & Tools",
      icon: "cloud",
      items: [
        { name: "Docker & Containerization", level: "Advanced" },
        { name: "AWS (S3, EC2, Lambda, CloudFront)", level: "Advanced" },
        { name: "GitHub Actions & CI/CD", level: "Expert" },
        { name: "Git & Version Control", level: "Expert" },
        { name: "Jest / Vitest / Playwright", level: "Advanced" },
        { name: "Linux & Bash Scripting", level: "Advanced" }
      ]
    }
  ],

  // --- Work Experience Timeline ---
  experience: [
    {
      role: "Senior Full-Stack Engineer",
      company: "Nexus Cloud Systems",
      period: "2023 - Present",
      location: "San Francisco, CA (Hybrid)",
      description: "Leading the core platform engineering team building enterprise analytics and real-time collaboration dashboards.",
      achievements: [
        "Architected and deployed a real-time event streaming pipeline processing 2M+ daily events using Node.js, Redis Pub/Sub, and WebSockets.",
        "Refactored legacy monolith into modular Next.js micro-frontends, reducing page load times by 45% and Lighthouse performance scores to 98+.",
        "Mentored 5 junior and mid-level engineers, instituted rigorous code review standards, and created internal reusable UI component libraries."
      ],
      technologies: ["TypeScript", "Next.js", "Node.js", "PostgreSQL", "Redis", "Docker", "AWS"]
    },
    {
      role: "Full-Stack Software Developer",
      company: "Apex Digital Solutions",
      period: "2021 - 2023",
      location: "Austin, TX (Remote)",
      description: "Developed and maintained full-stack web applications for FinTech and eCommerce enterprise clients.",
      achievements: [
        "Designed and implemented high-volume payment processing workflows integrated with Stripe and PayPal APIs, handling $4M+ monthly volume.",
        "Engineered REST and GraphQL endpoints backed by PostgreSQL with query optimization that cut database response times by 35%.",
        "Set up automated CI/CD pipelines via GitHub Actions, automating testing and zero-downtime deployment to AWS ECS clusters.",
      ],
      technologies: ["React", "TypeScript", "Python/FastAPI", "PostgreSQL", "Stripe API", "AWS ECS", "Jest"]
    },
    {
      role: "Frontend Engineer Intern",
      company: "Vanguard Media Labs",
      period: "2020 - 2021",
      location: "Seattle, WA",
      description: "Contributed to responsive customer-facing web apps and internal content management systems.",
      achievements: [
        "Built 20+ responsive web components adhering to WCAG 2.1 AA accessibility guidelines.",
        "Collaborated with UX/UI designers in Figma to translate interactive wireframes into pixel-perfect CSS and React components.",
        "Improved bundle size by 30% through code-splitting and dynamic asset loading techniques."
      ],
      technologies: ["JavaScript (ES6+)", "React", "CSS3 / Sass", "Webpack", "Git"]
    }
  ],

  // --- Education & Academic Background ---
  education: [
    {
      degree: "Bachelor of Science in Computer Science",
      institution: "University of California, Berkeley",
      period: "2017 - 2021",
      location: "Berkeley, CA",
      honors: "Magna Cum Laude (GPA: 3.85 / 4.0)",
      coursework: [
        "Data Structures & Algorithms",
        "Distributed Systems & Cloud Computing",
        "Database Architecture",
        "Artificial Intelligence & Machine Learning",
        "Computer Networks & Security"
      ]
    }
  ],

  // --- Certifications & Accreditations ---
  certifications: [
    {
      name: "AWS Certified Solutions Architect - Associate",
      issuer: "Amazon Web Services (AWS)",
      year: "2023",
      verifyUrl: "https://aws.amazon.com/verification"
    },
    {
      name: "Certified Kubernetes Application Developer (CKAD)",
      issuer: "Cloud Native Computing Foundation (CNCF)",
      year: "2024",
      verifyUrl: "https://www.cncf.io/certification/ckad/"
    },
    {
      name: "Meta Front-End Developer Professional Certificate",
      issuer: "Meta / Coursera",
      year: "2022",
      verifyUrl: "https://www.coursera.org"
    }
  ],

  // --- Comprehensive Projects with In-Depth Writeups & Build Steps ---
  projects: [
    {
      id: "devpulse",
      title: "DevPulse - Realtime Cloud Monitor & Telemetry Dashboard",
      tagline: "Enterprise-grade server monitoring, alerting, and telemetry visualizer with sub-second latency.",
      category: "fullstack",
      featured: true,
      role: "Lead Full-Stack Architect",
      timeline: "3 Months (Q3 2024)",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&auto=format&fit=crop&q=80",
      demoUrl: "https://example.com/demo/devpulse",
      githubUrl: "https://github.com/yourusername/devpulse",
      metrics: "Processes 500k+ metrics/sec with < 50ms latency",
      tags: ["TypeScript", "Next.js", "FastAPI", "ClickHouse", "WebSockets", "TailwindCSS", "Docker"],

      // Detailed Writeup Sections
      writeup: {
        executiveSummary: "DevPulse is an end-to-end cloud infrastructure monitoring platform engineered to give DevOps and SRE teams live, sub-second visibility into server fleet health, memory leaks, CPU spikes, and network throughput bottlenecks.",
        problemStatement: "Traditional monitoring platforms are often bloated, expensive, and impose noticeable agent overhead on monitored hosts. Engineering teams needed a lightweight, self-hostable monitoring solution capable of ingesting high-cardinality telemetry data without UI slowdowns or multi-second latency lags.",
        objectives: [
          "Maintain an agent memory footprint under 15MB on monitored instances.",
          "Ingest and query over 500,000 metrics per second with low computational overhead.",
          "Render real-time 60fps streaming time-series graphs in client web browsers.",
          "Provide flexible webhook alerting integrations (Slack, Discord, PagerDuty, Email)."
        ],
        targetAudience: "Cloud Engineers, Site Reliability Engineers (SREs), DevOps Leads, and Full-Stack Developers managing distributed microservice clusters."
      },

      methodology: {
        architectureOverview: "The system utilizes a decoupled, event-driven streaming architecture. Edge agents push telemetry over gRPC to an ingestion gateway, which buffers records into a high-speed ClickHouse columnar database while broadcasting real-time deltas to client browser sessions over WebSockets.",
        technicalDecisions: [
          {
            decision: "ClickHouse instead of PostgreSQL for time-series storage",
            rationale: "ClickHouse provides 10x-50x superior data compression for sequential time-series data and supports lightning-fast vectorized aggregation queries over billions of metric rows."
          },
          {
            decision: "Protocol Buffers (Protobuf) over JSON for agent communication",
            rationale: "Binary encoding reduced bandwidth consumption by 68% and eliminated JSON parsing bottlenecks on constrained edge servers."
          },
          {
            decision: "WebGL Canvas Rendering for charts",
            rationale: "Standard SVG chart libraries choked on 10,000+ continuous data points; uPlot and WebGL canvas maintained buttery-smooth 60fps frame rates."
          }
        ],
        securityAndReliability: "Agent authentication is enforced via mutual TLS (mTLS) with automated token rotation. Rate limiting and circuit breakers prevent database saturation during cascading network incidents."
      },

      steps: [
        {
          stepNumber: 1,
          phase: "Phase 1: Architecture & Schema Planning",
          title: "Telemetry Data Modeling & Protocol Design",
          description: "Defined protobuf schemas for CPU, RAM, disk I/O, network bandwidth, and custom container health checks. Designed the ClickHouse schema utilizing MergeTree engines with monthly partitioning.",
          deliverables: ["Protobuf schema definitions", "ClickHouse partition strategy documentation", "System architecture diagrams"],
          tools: ["Protocol Buffers", "ClickHouse", "Figma / Eraser.io"]
        },
        {
          stepNumber: 2,
          phase: "Phase 2: Ingestion & Backend Pipeline",
          title: "High-Throughput Ingestion Engine & WebSocket Server",
          description: "Developed the core ingestion service in Python/FastAPI and Go. Integrated Redis Pub/Sub channels to broadcast live streaming metrics directly to subscribed user dashboards.",
          deliverables: ["FastAPI ingestion gateway", "Redis Pub/Sub cluster", "WebSocket connection pool manager"],
          tools: ["Python", "FastAPI", "Go", "Redis", "Docker"]
        },
        {
          stepNumber: 3,
          phase: "Phase 3: Frontend Dashboard & Visualization",
          title: "Realtime Next.js UI & WebGL Visualizer",
          description: "Built the responsive single-page dashboard in Next.js and TypeScript. Implemented customizable widget layouts, time-range scrubbing, anomaly heatmaps, and dark mode interface.",
          deliverables: ["Interactive Next.js dashboard", "WebGL chart components", "Custom alert rule builder UI"],
          tools: ["Next.js", "TypeScript", "Tailwind CSS", "uPlot", "Zustand"]
        },
        {
          stepNumber: 4,
          phase: "Phase 4: Alerting, Testing & Cloud Deployment",
          title: "Automated Incident Alerting & Production CI/CD",
          description: "Implemented threshold-based and anomaly-detection alerting triggers. Established end-to-end integration test suites and Docker Compose / Helm charts for 1-click cloud deployment.",
          deliverables: ["Multi-channel notification dispatcher", "Playwright E2E test suite", "Docker & Kubernetes Helm packages"],
          tools: ["GitHub Actions", "Docker", "Kubernetes", "Playwright", "Jest"]
        }
      ],

      gallery: [
        {
          url: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=900&auto=format&fit=crop&q=80",
          caption: "Live Telemetry Dashboard Overview",
          description: "Real-time streaming charts with CPU, RAM, and Disk I/O telemetry."
        },
        {
          url: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=900&auto=format&fit=crop&q=80",
          caption: "Alert Rule Builder & Webhook Manager",
          description: "Custom threshold triggers and multi-channel notification routing."
        },
        {
          url: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=900&auto=format&fit=crop&q=80",
          caption: "Historical Log & Trace Inspector",
          description: "Sub-second search queries over hundreds of thousands of historical logs."
        }
      ],

      results: [
        { metric: "500,000+", label: "Metrics Processed Per Second" },
        { metric: "< 50ms", label: "End-to-End Delivery Latency" },
        { metric: "12MB", label: "Average Agent RAM Footprint" },
        { metric: "99.99%", label: "Production Ingestion Uptime" }
      ]
    },

    {
      id: "omniai",
      title: "OmniAI - Context-Aware Multimodal RAG Assistant",
      tagline: "Intelligent document retrieval, semantic search, and interactive conversational AI assistant.",
      category: "ai-ml",
      featured: true,
      role: "AI / Full-Stack Engineer",
      timeline: "2 Months (Q2 2024)",
      image: "https://images.unsplash.com/photo-1677442136019-21780efad99a?w=800&auto=format&fit=crop&q=80",
      demoUrl: "https://example.com/demo/omniai",
      githubUrl: "https://github.com/yourusername/omniai-assistant",
      metrics: "94% semantic query retrieval accuracy over 100k+ docs",
      tags: ["Python", "LangChain", "OpenAI / Claude API", "FastAPI", "Pinecone", "React", "TailwindCSS"],

      writeup: {
        executiveSummary: "OmniAI is an advanced Retrieval-Augmented Generation (RAG) conversational platform that transforms raw enterprise documentation (PDFs, Notion exports, Markdown codebases) into an intelligent, citation-accurate knowledge base.",
        problemStatement: "Standard Large Language Models frequently suffer from hallucinations and lack domain-specific knowledge about private company repositories. Generic vector search often yields imprecise context chunks, leading to misleading answers.",
        objectives: [
          "Achieve > 90% accuracy on domain-specific question answering with verbatim citations.",
          "Support asynchronous parsing and chunking of complex documents containing tables and code.",
          "Keep response latency under 1.5 seconds for complete synthesized answers.",
          "Ensure enterprise data privacy through tenant isolation and customer-managed encryption."
        ],
        targetAudience: "Engineering teams, legal researchers, and enterprise knowledge managers requiring trustworthy AI-powered semantic search."
      },

      methodology: {
        architectureOverview: "OmniAI employs a hybrid search strategy pairing dense vector embeddings (OpenAI text-embedding-3-large stored in Pinecone) with sparse BM25 lexical keyword matching. A secondary Cohere Re-ranker filters top candidate chunks before feeding them to Claude/GPT-4o.",
        technicalDecisions: [
          {
            decision: "Hybrid Dense + Sparse Vector Search (BM25 + Dense)",
            rationale: "Pure vector search struggles with exact alphanumeric identifiers (e.g. error codes or SKU IDs); combining BM25 boosted precision by 24%."
          },
          {
            decision: "Recursive Character + Markdown Document Chunking",
            rationale: "Preserved hierarchical header context and code blocks intact, preventing fragmented code snippets."
          },
          {
            decision: "Streaming Server-Sent Events (SSE) for Responses",
            rationale: "Allowed users to read immediate generated tokens without waiting for the complete multi-paragraph output."
          }
        ],
        securityAndReliability: "Uploaded files are encrypted in Amazon S3 presigned storage. Vector namespaces enforce strict tenant separation."
      },

      steps: [
        {
          stepNumber: 1,
          phase: "Phase 1: Ingestion & Parsing Pipeline",
          title: "Multimodal Document Ingestion & Optical Chunking",
          description: "Engineered background Celery workers to parse PDFs, docx, and code repositories into structured ASTs, extracting tables and images with OCR.",
          deliverables: ["Document parsing worker", "OCR table extraction module", "Chunking pipeline"],
          tools: ["Python", "PyMuPDF", "LangChain", "Celery", "Redis"]
        },
        {
          stepNumber: 2,
          phase: "Phase 2: Embedding & Retrieval Engine",
          title: "Hybrid Vector Storage & Cohere Re-Ranking",
          description: "Built vector indexing workflows in Pinecone with metadata filtering. Implemented two-stage retrieval combining dense vector similarity with Cohere reranking.",
          deliverables: ["Pinecone index configuration", "Hybrid search orchestrator", "Reranker pipeline"],
          tools: ["Pinecone", "Cohere API", "OpenAI Embeddings"]
        },
        {
          stepNumber: 3,
          phase: "Phase 3: Conversational Frontend & Citations",
          title: "Interactive React Chat Interface & Citation Viewer",
          description: "Developed a sleek chat interface with real-time markdown streaming, syntax highlighting, and interactive badge popovers linking directly to original PDF page snippets.",
          deliverables: ["Streaming chat UI", "Document citation popover", "Document upload dropzone"],
          tools: ["React", "TypeScript", "Tailwind CSS", "SSE"]
        },
        {
          stepNumber: 4,
          phase: "Phase 4: Evaluation & Hallucination Guardrails",
          title: "Automated Evaluation Framework & Deployment",
          description: "Integrated RAGAS evaluation framework to benchmark context precision, faithfulness, and answer relevancy across test datasets.",
          deliverables: ["RAGAS test harness", "Guardrail verification prompts", "Docker deployment"],
          tools: ["RAGAS", "FastAPI", "Docker", "AWS S3"]
        }
      ],

      gallery: [
        {
          url: "https://images.unsplash.com/photo-1677442136019-21780efad99a?w=900&auto=format&fit=crop&q=80",
          caption: "Conversational RAG Chat Interface",
          description: "Streaming answers with inline source citations and verified quotes."
        },
        {
          url: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=900&auto=format&fit=crop&q=80",
          caption: "Document Knowledge Hub & Chunk Visualizer",
          description: "Manage uploaded PDFs, documentation collections, and vector status."
        }
      ],

      results: [
        { metric: "94%", label: "Semantic Retrieval Accuracy" },
        { metric: "1.2s", label: "Average First-Token Latency" },
        { metric: "100k+", label: "Indexed Document Corpus" },
        { metric: "0%", label: "Data Leakage Across Tenants" }
      ]
    },

    {
      id: "flowboard",
      title: "FlowBoard - Collaborative Workspace & Kanban Suite",
      tagline: "Ultra-responsive project management canvas with live multiplayer cursors and offline sync.",
      category: "frontend",
      featured: true,
      role: "Frontend Lead & UI Engineer",
      timeline: "2.5 Months (Q1 2024)",
      image: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?w=800&auto=format&fit=crop&q=80",
      demoUrl: "https://example.com/demo/flowboard",
      githubUrl: "https://github.com/yourusername/flowboard",
      metrics: "Sub-16ms smooth drag-and-drop 60fps animations",
      tags: ["React", "TypeScript", "Zustand", "Yjs (CRDTs)", "TailwindCSS", "WebRTC"],

      writeup: {
        executiveSummary: "FlowBoard is a high-performance, offline-first agile project management tool featuring real-time multiplayer collaboration, Kanban boards, Gantt charts, and custom workflow automations.",
        problemStatement: "Most cloud project management apps become sluggish with large boards and completely fail when users lose internet connectivity. Teams needed a tool with desktop-grade responsiveness and zero sync conflicts.",
        objectives: [
          "Guarantee 60fps fluid animations during complex multi-column card drags.",
          "Enable offline edits with zero-conflict automatic sync upon reconnection.",
          "Render live multiplayer cursors with under 30ms peer-to-peer latency.",
          "Support keyboard-first workflows with a Cmd+K command palette."
        ],
        targetAudience: "Agile software teams, product designers, and remote squads requiring rapid, frictionless task coordination."
      },

      methodology: {
        architectureOverview: "FlowBoard utilizes Conflict-free Replicated Data Types (CRDTs) powered by Yjs. Updates are saved locally to IndexedDB immediately and broadcast peer-to-peer via WebRTC and fallback WebSockets.",
        technicalDecisions: [
          {
            decision: "Yjs CRDTs over Central Lock Server",
            rationale: "CRDTs mathematically resolve concurrent conflicting edits locally without requiring server-side locking or rollback dialogs."
          },
          {
            decision: "Virtual scrolling for large lists",
            rationale: "Enabled boards with over 5,000 tasks to render in under 100ms with constant low memory usage."
          }
        ],
        securityAndReliability: "End-to-end encryption across WebRTC data channels ensures workspace data is never readable in transit."
      },

      steps: [
        {
          stepNumber: 1,
          phase: "Phase 1: State Architecture",
          title: "CRDT Model & Local IndexedDB Persistence",
          description: "Structured Yjs shared types for boards, columns, and cards. Configured local persistence with y-indexeddb.",
          deliverables: ["Yjs data schemas", "Local offline storage layer"],
          tools: ["Yjs", "IndexedDB", "TypeScript"]
        },
        {
          stepNumber: 2,
          phase: "Phase 2: Drag & Drop UI",
          title: "Accessible 60fps Drag-and-Drop Interaction",
          description: "Engineered high-performance physics-based drag-and-drop using `@dnd-kit` with keyboard accessibility and collision detection.",
          deliverables: ["Kanban column components", "Card reordering logic"],
          tools: ["React", "@dnd-kit", "Tailwind CSS"]
        },
        {
          stepNumber: 3,
          phase: "Phase 3: Realtime Multiplayer",
          title: "WebRTC Peer Discovery & Presence Tracking",
          description: "Implemented live multiplayer cursor positions, avatar halo presence indicators, and ephemeral typing indicators.",
          deliverables: ["WebRTC signaling server", "Multiplayer cursor visualizer"],
          tools: ["WebRTC", "WebSockets", "Zustand"]
        },
        {
          stepNumber: 4,
          phase: "Phase 4: Command Palette & Polish",
          title: "Cmd+K Command Palette & Export Utilities",
          description: "Added fuzzy-search command palette for keyboard shortcuts, task filtering, and CSV/PDF export engines.",
          deliverables: ["Cmd+K command center", "PDF/CSV exporters", "Unit tests"],
          tools: ["cmdk", "Vitest", "Playwright"]
        }
      ],

      gallery: [
        {
          url: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?w=900&auto=format&fit=crop&q=80",
          caption: "Live Kanban Board View",
          description: "Fluid card drag-and-drop with custom tags and priority flags."
        },
        {
          url: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=900&auto=format&fit=crop&q=80",
          caption: "Multiplayer Presence & Live Cursors",
          description: "Real-time collaborative editing with peer tracking."
        }
      ],

      results: [
        { metric: "60 FPS", label: "Animation Performance" },
        { metric: "100%", label: "Offline Availability" },
        { metric: "< 25ms", label: "P2P Sync Latency" },
        { metric: "0", label: "Merge Conflicts on Reconnect" }
      ]
    },

    {
      id: "hyperpay",
      title: "HyperPay - Microservice Payment Gateway Engine",
      tagline: "High-throughput, idempotent payment processing engine built for global SaaS platforms.",
      category: "fullstack",
      featured: false,
      role: "Backend Systems Engineer",
      timeline: "3 Months (Q4 2023)",
      image: "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?w=800&auto=format&fit=crop&q=80",
      demoUrl: "https://example.com/demo/hyperpay",
      githubUrl: "https://github.com/yourusername/hyperpay-engine",
      metrics: "99.999% uptime with automated circuit breaker failovers",
      tags: ["Go", "Node.js", "PostgreSQL", "Redis", "Docker", "Stripe SDK"],

      writeup: {
        executiveSummary: "HyperPay is a fault-tolerant payment gateway microservice handling multi-currency subscriptions, automated dunning, intelligent failover routing, and tax calculations.",
        problemStatement: "Duplicate payment charges and third-party gateway downtime cost e-commerce platforms millions in refunds and lost conversions. A distributed, idempotent billing service was essential.",
        objectives: [
          "Eliminate double-charging through strict idempotency locks.",
          "Provide automatic failover across multiple payment providers (Stripe, Adyen, PayPal).",
          "Process ledger transactions adhering to double-entry accounting principles."
        ],
        targetAudience: "FinTech companies, global SaaS enterprises, and high-volume marketplace platforms."
      },

      methodology: {
        architectureOverview: "Built with Go and Node.js microservices communicating via asynchronous RabbitMQ event buses. PostgreSQL transactions handle immutable ledger accounts with Redis distributed mutex locks.",
        technicalDecisions: [
          {
            decision: "PostgreSQL Two-Phase Commit with Double-Entry Ledger",
            rationale: "Guaranteed absolute financial accounting integrity where total debits always equal credits."
          },
          {
            decision: "Redis Redlock Distributed Mutex",
            rationale: "Prevented race conditions on simultaneous identical charge API requests."
          }
        ],
        securityAndReliability: "Zero-trust tokenization; PCI-DSS compliance scope minimized by using hosted token vaults."
      },

      steps: [
        {
          stepNumber: 1,
          phase: "Phase 1: Ledger & API Design",
          title: "Double-Entry Ledger & Idempotency Specifications",
          description: "Designed the financial database schema, idempotency key middleware, and webhook verification contracts.",
          deliverables: ["Ledger schema", "API contract documentation"],
          tools: ["PostgreSQL", "Go", "OpenAPI"]
        },
        {
          stepNumber: 2,
          phase: "Phase 2: Provider Integration",
          title: "Multi-Gateway Adapter & Smart Routing",
          description: "Created standardized gateway abstraction interfaces for Stripe, Adyen, and PayPal with automatic fallback on gateway 5xx errors.",
          deliverables: ["Gateway adapter interfaces", "Circuit breaker rules"],
          tools: ["Stripe API", "Go", "Resilience4j concepts"]
        },
        {
          stepNumber: 3,
          phase: "Phase 3: Webhook & Retry Engine",
          title: "Reliable Event Dispatcher & Dunning Automation",
          description: "Built exponential-backoff retry queues for webhook delivery to client applications.",
          deliverables: ["RabbitMQ worker cluster", "Dunning email triggers"],
          tools: ["RabbitMQ", "Node.js", "Redis"]
        },
        {
          stepNumber: 4,
          phase: "Phase 4: Load Testing & Security Audit",
          title: "Chaos Engineering & PCI Compliance Verification",
          description: "Conducted simulated gateway outages and high-load stress testing (10,000 req/sec) using k6.",
          deliverables: ["k6 load test scripts", "Security compliance report"],
          tools: ["k6", "Docker", "Grafana"]
        }
      ],

      gallery: [
        {
          url: "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?w=900&auto=format&fit=crop&q=80",
          caption: "Transaction Flow & Settlement Dashboard",
          description: "Real-time payment volume monitoring, dispute tracking, and gateway health."
        }
      ],

      results: [
        { metric: "99.999%", label: "Platform Uptime" },
        { metric: "$4M+", label: "Monthly Processed Volume" },
        { metric: "0", label: "Duplicate Billing Incidents" },
        { metric: "18ms", label: "Average API Response Time" }
      ]
    },

    {
      id: "cloudvault",
      title: "CloudVault - End-to-End Encrypted File Sharing",
      tagline: "Zero-knowledge cryptographic storage platform with granular expiration and revokable links.",
      category: "cloud",
      featured: false,
      role: "Security & Cloud Developer",
      timeline: "2 Months (Q4 2023)",
      image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&auto=format&fit=crop&q=80",
      demoUrl: "https://example.com/demo/cloudvault",
      githubUrl: "https://github.com/yourusername/cloudvault",
      metrics: "AES-256-GCM client-side encryption before upload",
      tags: ["TypeScript", "Web Crypto API", "AWS S3 Presigned URLs", "Next.js", "TailwindCSS"],

      writeup: {
        executiveSummary: "CloudVault enables secure, zero-knowledge sharing of sensitive files, credentials, and documents with client-side encryption and self-destructing links.",
        problemStatement: "Traditional cloud storage providers hold encryption keys, leaving sensitive corporate documents vulnerable to server breaches or rogue employees.",
        objectives: [
          "Encrypt files entirely inside the user's browser using AES-256-GCM.",
          "Ensure servers never receive plaintext data or encryption keys.",
          "Support large files up to 2GB via streaming encryption in Web Workers."
        ],
        targetAudience: "Security teams, lawyers, journalists, and companies sharing confidential deliverables."
      },

      methodology: {
        architectureOverview: "Utilizes the browser's native Web Crypto API. Encryption keys are generated locally and embedded exclusively in the URL hash fragment (which is never sent to the server). Uploads stream directly to AWS S3 using presigned URLs.",
        technicalDecisions: [
          {
            decision: "URL Hash Fragment Key Storage (#key=...)",
            rationale: "Per HTTP standards, URL hashes are processed strictly client-side and never transmitted in HTTP headers to server logs."
          },
          {
            decision: "Web Worker Stream Chunking",
            rationale: "Prevented browser freezing during heavy AES encryption of multi-gigabyte files."
          }
        ],
        securityAndReliability: "Passkey (WebAuthn) biometric authentication and automated S3 lifecycle deletion policies."
      },

      steps: [
        {
          stepNumber: 1,
          phase: "Phase 1: Cryptographic Engine",
          title: "Web Crypto API Streaming Implementation",
          description: "Implemented chunked AES-GCM-256 encryption in dedicated Web Workers.",
          deliverables: ["Encryption Web Worker", "Key generation module"],
          tools: ["Web Crypto API", "TypeScript"]
        },
        {
          stepNumber: 2,
          phase: "Phase 2: Cloud Storage Pipeline",
          title: "S3 Presigned Multi-Part Direct Uploads",
          description: "Constructed secure backend endpoints issuing temporary AWS S3 presigned upload tokens.",
          deliverables: ["Presigned URL generator", "Direct S3 uploader"],
          tools: ["AWS S3", "Next.js API Routes"]
        },
        {
          stepNumber: 3,
          phase: "Phase 3: User Interface & Decryption",
          title: "Secure Shareable Links & Decryption Player",
          description: "Designed clean download page that automatically parses hash key, streams chunks, and triggers browser downloads.",
          deliverables: ["Decryption UI", "Expiration timer countdown"],
          tools: ["Next.js", "Tailwind CSS"]
        },
        {
          stepNumber: 4,
          phase: "Phase 4: Security Audit",
          title: "Cryptographic Peer Review & Penetration Testing",
          description: "Audited network payloads to mathematically confirm zero leakage of keys or plaintext data.",
          deliverables: ["Security audit report", "Production release"],
          tools: ["Wireshark", "OWASP ZAP"]
        }
      ],

      gallery: [
        {
          url: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=900&auto=format&fit=crop&q=80",
          caption: "Secure Drag-and-Drop Encryption Portal",
          description: "Client-side AES-256 key generation with configurable expiry."
        }
      ],

      results: [
        { metric: "100%", label: "Zero-Knowledge Guarantee" },
        { metric: "2 GB", label: "Max File Size Supported" },
        { metric: "AES-256", label: "Military Grade Encryption" },
        { metric: "0", label: "Keys Stored on Server" }
      ]
    },

    {
      id: "cliforge",
      title: "CLI-Forge - Developer Terminal Productivity Tool",
      tagline: "Blazing fast Rust CLI tool for scaffolding full-stack monorepos and generating typed APIs.",
      category: "tools",
      featured: false,
      role: "Creator & Maintainer",
      timeline: "1.5 Months (Q1 2024)",
      image: "https://images.unsplash.com/photo-1629654297299-c8506221ca97?w=800&auto=format&fit=crop&q=80",
      demoUrl: "https://example.com/demo/cliforge",
      githubUrl: "https://github.com/yourusername/cliforge",
      metrics: "50k+ downloads on crates.io / npm",
      tags: ["Rust", "CLI", "Shell", "Docker", "GraphQL", "Monorepo"],

      writeup: {
        executiveSummary: "CLI-Forge is an open-source terminal utility compiled to native static binaries that scaffolds production-ready full-stack applications and auto-generates TypeScript types from SQL schemas in seconds.",
        problemStatement: "Setting up modern developer toolchains (linters, formatters, Docker compose databases, type generators) is tedious and error-prone.",
        objectives: [
          "Scaffold a complete full-stack environment in under 5 seconds.",
          "Zero runtime dependencies (compiled single binary in Rust).",
          "Cross-platform support for macOS, Linux, and Windows."
        ],
        targetAudience: "Full-stack engineers, backend developers, and software architecture leads."
      },

      methodology: {
        architectureOverview: "Written in Rust using `clap` for CLI argument parsing, `dialoguer` for interactive terminal menus, and `tera` for template rendering.",
        technicalDecisions: [
          {
            decision: "Rust over Node.js for CLI executable",
            rationale: "Instant startup (< 5ms) and no requirement for the end-user to have Node or Python pre-installed."
          }
        ],
        securityAndReliability: "Automated multi-target cross-compilation pipeline with cryptographic SHA256 checksums on all release assets."
      },

      steps: [
        {
          stepNumber: 1,
          phase: "Phase 1: CLI Core & Interactive Prompts",
          title: "Terminal UI & Template Engine Setup",
          description: "Engineered interactive fuzzy-search prompts and dynamic Jinja/Tera templating engine.",
          deliverables: ["Rust CLI core", "Interactive menu system"],
          tools: ["Rust", "clap", "dialoguer", "tera"]
        },
        {
          stepNumber: 2,
          phase: "Phase 2: Database Schema Introspection",
          title: "SQL Parser & Type Generator",
          description: "Wrote SQL schema parser that automatically generates TypeScript types and Prisma schemas.",
          deliverables: ["Type generator engine", "Docker Compose templates"],
          tools: ["Rust", "sqlparser-rs"]
        },
        {
          stepNumber: 3,
          phase: "Phase 3: CI/CD & Cross-Compilation",
          title: "Automated Cross-Platform Releases",
          description: "Set up GitHub Actions to compile native binaries for x86_64 and ARM64 architectures.",
          deliverables: ["Cross-compilation pipeline", "Homebrew tap & npm wrapper"],
          tools: ["GitHub Actions", "cross-rs", "Homebrew"]
        }
      ],

      gallery: [
        {
          url: "https://images.unsplash.com/photo-1629654297299-c8506221ca97?w=900&auto=format&fit=crop&q=80",
          caption: "Terminal Interactive Scaffold Menu",
          description: "Interactive fuzzy prompts with colorized terminal output."
        }
      ],

      results: [
        { metric: "50,000+", label: "Community Downloads" },
        { metric: "< 5ms", label: "CLI Startup Time" },
        { metric: "100%", label: "Native Rust Static Binary" },
        { metric: "4.9/5", label: "Community Rating" }
      ]
    }
  ]
};

// Export to global scope
if (typeof window !== "undefined") {
  window.portfolioData = portfolioData;
}