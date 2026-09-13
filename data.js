/**
 * SHUBHAM PANDEY — DATA-DRIVEN PORTFOLIO CONFIGURATION
 * ----------------------------------------------------
 * This file contains the complete portfolio/resume data and the
 * 10 Microsoft Fabric case studies.
 *
 * Asset convention:
 *   assets/
 *     Case Study 01 The Global Listing Intelligence Initiative/
 *     Case Study 02 Logistics Data Modernization/
 *     ...
 *
 * Image paths use the exact filenames found in the supplied assets archive.
 * Picture1 is the main/title image for every case study. Remaining PictureN
 * files are used as the project gallery in numeric order.
 */

const ASSET_ROOT = "assets";

const ASSET_FOLDERS = {
  case01: `${ASSET_ROOT}/Case Study 01 The Global Listing Intelligence Initiative`,
  case02: `${ASSET_ROOT}/Case Study 02 Logistics Data Modernization`,
  case03: `${ASSET_ROOT}/Case Study 03 Workforce Intelligence.From Azure SQL to Lakehouse(Technology Consulting)`,
  case04: `${ASSET_ROOT}/Case Study 04 Financial Data Transformation using Pyspark and Delta Lake`,
  case05: `${ASSET_ROOT}/Case Study 05 Unified Commerce Analytics (Global Freight Forwarders)`,
  case06: `${ASSET_ROOT}/Case Study 06 Market Risk Intelligence Feed`,
  case07: `${ASSET_ROOT}/Case Study 07 The Accountability Gap .Regulatory Data Governance & Historical Accountability`,
  case08: `${ASSET_ROOT}/Case Study 08 Inventory Data Migration to Microsoft Fabric Lakehouse`,
  case09: `${ASSET_ROOT}/Case Study 09 Customer Data Trust Transformation`,
  case10: `${ASSET_ROOT}/Case Study 10 Live Market Intelligence`
};

function asset(folder, filename) {
  return encodeURI(`${folder}/${filename}`);
}

/*
 * Screenshot filenames are intentionally centralized here.
 * If the actual GitHub image filename differs, update only the
 * corresponding gallery entry — the project write-up does not need
 * to be changed.
 */

const portfolioData = {

  // ================================================================
  // PERSONAL PROFILE
  // ================================================================

  personal: {
    name: "Shubham Pandey",
    role: "Data Analyst | BI Analyst | Energy Analyst | Data Engineer",
    tagline: "Turning energy and operational data into reliable analytics, governed data pipelines, and decision-ready insights.",
    location: "India | Open to Data & Analytics Opportunities",
    email: "shubhampandey11aug@gmail.com",
    phone: "+91-9794963499",
    github: "https://github.com/shubhampandey11aug",
    linkedin: "https://linkedin.com/in/shubhampandey08",
    twitter: "",
    resumePdf: "assets/Resume_Shubham Pandey(Energy Analyst).pdf",
    availability: "Open to Data Analyst, BI Analyst, Energy Analytics, Data Engineering, Freelance & Consulting opportunities",
    avatar: "assets/Photo_Shubham Pandey.jpg",

    stats: [
      { label: "Years Experience", value: "12+" },
      { label: "Fabric Case Studies", value: "10" },
      { label: "Energy Portfolio", value: "50+ GW" },
      { label: "Reporting Automation", value: "30%" }
    ]
  },

  // ================================================================
  // ABOUT
  // ================================================================

  about: {
    heading: "Energy-domain expertise meets modern data & analytics engineering",

    paragraphs: [
      "I am an energy professional with 12+ years of experience across forecasting & scheduling, Open Access, DSM settlement, power trading, renewable generation analytics and operational reporting.",
      "I am transitioning deeper into data and analytics roles, combining energy-market knowledge with Power BI, SQL, Python, Advanced Excel, Microsoft Fabric and data-engineering concepts to build reliable pipelines and decision-ready analytics.",
      "My portfolio demonstrates hands-on Microsoft Fabric case studies covering Lakehouse ingestion, Delta Lake, PySpark, T-SQL, Dataflows Gen2, warehouse-native API ingestion, real-time intelligence and Power BI-oriented analytical architectures."
    ],

    highlights: [
      "12+ years across renewable-energy operations, forecasting, scheduling, Open Access, DSM and power trading.",
      "Power BI dashboards covering generation trends, forecast accuracy, DSM impact and revenue.",
      "Automated reporting workflows using Power Query with 30% reduction in manual effort.",
      "Analyzed a 50+ GW portfolio and improved forecasting accuracy by 15%.",
      "Hands-on Microsoft Fabric learning across Lakehouse, Pipelines, Dataflows and Power BI integration.",
      "Building practical data-engineering capability with ETL/ELT, Bronze/Silver/Gold architecture, Delta Lake and PySpark."
    ]
  },

  // ================================================================
  // SKILLS
  // ================================================================

  skills: [
    {
      category: "Data Analytics & BI",
      icon: "bar-chart",
      items: [
        { name: "Power BI & Data Visualization", level: "Advanced" },
        { name: "KPI Development", level: "Advanced" },
        { name: "Business Intelligence & Reporting", level: "Advanced" },
        { name: "Data Storytelling", level: "Advanced" },
        { name: "Trend & Root Cause Analysis", level: "Advanced" },
        { name: "Forecasting & Performance Analytics", level: "Advanced" }
      ]
    },
    {
      category: "Programming & Data",
      icon: "code",
      items: [
        { name: "Python / Pandas / NumPy", level: "Intermediate" },
        { name: "SQL — Extraction & Transformation", level: "Intermediate" },
        { name: "Advanced Excel", level: "Advanced" },
        { name: "Power Query", level: "Advanced" },
        { name: "Data Cleaning & Validation", level: "Advanced" },
        { name: "Data Modelling", level: "Intermediate" }
      ]
    },
    {
      category: "Microsoft Fabric & Data Engineering",
      icon: "database",
      items: [
        { name: "Microsoft Fabric", level: "Hands-on Learning" },
        { name: "Lakehouse Architecture", level: "Hands-on" },
        { name: "Fabric Data Pipelines", level: "Hands-on" },
        { name: "Delta Lake", level: "Hands-on" },
        { name: "PySpark", level: "Hands-on" },
        { name: "Dataflows Gen2", level: "Hands-on" },
        { name: "Fabric Warehouse / T-SQL", level: "Hands-on" },
        { name: "Real-Time Intelligence / KQL", level: "Hands-on" }
      ]
    },
    {
      category: "Energy Domain Analytics",
      icon: "zap",
      items: [
        { name: "Forecasting & Scheduling", level: "Advanced" },
        { name: "DSM Settlement & Deviation Analytics", level: "Advanced" },
        { name: "Open Access", level: "Advanced" },
        { name: "Energy Banking", level: "Advanced" },
        { name: "Power Trading / IEX", level: "Advanced" },
        { name: "Captive Power Allocation", level: "Advanced" },
        { name: "Renewable Asset Analytics", level: "Advanced" },
        { name: "Regulatory & Grid Connectivity Analytics", level: "Advanced" }
      ]
    },
    {
      category: "Domain & Engineering Tools",
      icon: "settings",
      items: [
        { name: "EMS", level: "Experienced" },
        { name: "SCADA", level: "Experienced" },
        { name: "ETAP", level: "Experienced" },
        { name: "PV-Syst", level: "Experienced" },
        { name: "AutoCAD", level: "Experienced" },
        { name: "MATLAB", level: "Experienced" },
        { name: "Databricks", level: "Learning" }
      ]
    }
  ],

  // ================================================================
  // EXPERIENCE
  // ================================================================

  experience: [
    {
      role: "Assistant Manager – Analytics (Energy & Market Operations)",
      company: "Gentari India",
      period: "Sep 2025 – Present",
      location: "Gurgaon, India",
      description: "Leading data-driven energy and market-operations analytics across forecasting, scheduling, Open Access and renewable-energy assets.",
      achievements: [
        "Lead data-driven forecasting and scheduling operations for wind and solar assets using real-time datasets.",
        "Track KPIs, identify performance gaps and support asset-efficiency improvement through analytical approaches.",
        "Manage DSM analytics and deviation data to support better financial optimisation.",
        "Translate operational data into actionable business insights with technical and business stakeholders.",
        "Drive process improvement and data-standardisation initiatives.",
        "Explore Microsoft Fabric and Databricks for scalable analytics and data-engineering solutions.",
        "Coordinate captive power allocation for Open Access projects with focus on timely allocation, regulatory compliance and operational efficiency.",
        "Track and interpret regulatory updates covering Energy Banking, BESS, Forecasting & Scheduling, Open Access and Grid Connectivity."
      ],
      technologies: ["Power BI", "Excel", "Power Query", "SQL", "Microsoft Fabric", "Databricks", "Energy Analytics"]
    },

    {
      role: "Deputy Manager – Energy Analytics & Trading",
      company: "Kreate Energy",
      period: "Nov 2019 – Aug 2025",
      location: "New Delhi, India",
      description: "Managed analytics, reporting, forecasting, DSM analysis and trading-support workflows across a large renewable-energy portfolio.",
      achievements: [
        "Built and maintained Power BI dashboards tracking generation trends, forecast accuracy, DSM impact and revenue.",
        "Automated reporting workflows using Power Query, reducing manual effort by 30%.",
        "Analyzed large datasets across a 50+ GW portfolio and improved forecasting accuracy by 15%.",
        "Developed data-backed strategies for power exchange bidding on IEX.",
        "Performed data cleaning, validation and transformation across multiple systems.",
        "Delivered insights through dashboards, reports and presentations to technical and business teams.",
        "Improved workflows and operational efficiency, increasing productivity by 15%.",
        "Managed the end-to-end data lifecycle from collection and processing through analysis and reporting."
      ],
      technologies: ["Power BI", "Power Query", "Advanced Excel", "Python", "SQL", "IEX", "Energy Analytics"]
    },

    {
      role: "Project Engineer (Contract)",
      company: "NTPC / IOCL Projects (NBPPL & EIL)",
      period: "2017 – 2019",
      location: "India",
      description: "Contributed to large-scale engineering projects with exposure to operational data, reporting and project processes.",
      achievements: [
        "Contributed to large-scale projects with exposure to data, operations and reporting processes.",
        "Supported project execution and technical reporting activities."
      ],
      technologies: ["Engineering Analytics", "Reporting", "Operational Data"]
    },

    {
      role: "Assistant Engineer – Wind Operations",
      company: "Wind World India Ltd.",
      period: "Jul 2013 – May 2016",
      location: "Mumbai, India",
      description: "Worked on wind-farm operations, monitoring and performance analytics.",
      achievements: [
        "Used data analysis to improve wind-farm productivity by 25%.",
        "Created MIS reports and conducted trend analysis, benchmarking and root-cause analysis.",
        "Worked with operational systems for data monitoring and performance tracking."
      ],
      technologies: ["Wind Operations", "MIS", "Trend Analysis", "SCADA", "Performance Analytics"]
    }
  ],

  // ================================================================
  // EDUCATION
  // ================================================================

  education: [
    {
      degree: "B.Tech – Electrical & Electronics Engineering",
      institution: "Gautam Buddha Technical University",
      period: "2008 – 2012",
      location: "India",
      honors: "Engineering background supporting strong energy-domain and analytical capability.",
      coursework: [
        "Electrical & Electronics Engineering",
        "Power Systems",
        "Engineering Analysis"
      ]
    }
  ],

  // ================================================================
  // CERTIFICATIONS / UPSKILLING
  // ================================================================

  certifications: [
    {
      name: "Microsoft DP-600 – Fabric Analytics Engineer",
      issuer: "Microsoft",
      year: "In Progress",
      verifyUrl: ""
    },
    {
      name: "Microsoft DP-700 – Fabric Data Engineer Associate",
      issuer: "Microsoft",
      year: "In Progress",
      verifyUrl: ""
    },
    {
      name: "Data Analytics Certification",
      issuer: "INSAID",
      year: "Completed",
      verifyUrl: ""
    },
    {
      name: "Electrical Design",
      issuer: "AEDEI",
      year: "Completed",
      verifyUrl: ""
    }
  ],

  // ================================================================
  // PROJECTS / CASE STUDIES
  // ================================================================

  projects: [

    // --------------------------------------------------------------
    // CASE STUDY 01
    // --------------------------------------------------------------

    {
      id: "global-listing-intelligence",
      title: "The Global Listing Intelligence Initiative",
      tagline: "Automating nightly property-listing ingestion with Microsoft Fabric Lakehouse orchestration, governed Silver data and auditable file handling.",
      category: "microsoft-fabric",
      featured: true,
      role: "Lead Data Engineer",
      timeline: "Microsoft Fabric Case Study",
      image: asset(ASSET_FOLDERS.case01, "Picture1.jpg"),
      showHero: false,
      demoUrl: "",
      githubUrl: "https://github.com/shubhampandey11aug/my-portfolio/tree/main/assets/Case%20Study%2001%20The%20Global%20Listing%20Intelligence%20Initiative",
      metrics: "24–48h manual consolidation replaced by automated nightly ingestion",
      tags: ["Microsoft Fabric", "Lakehouse", "Data Pipeline", "Copy Data", "Silver", "Upsert", "Wildcard Ingestion", "Data Governance"],

      details: {
        overview: "Grandeur Properties International needed to replace manual spreadsheet-based listing consolidation with an automated, auditable Microsoft Fabric ingestion pipeline serving London, New York and Dubai.",
        keyFeatures: [
          "Wildcard-based nightly file ingestion",
          "Schema mapping into a governed Silver table",
          "property_id-based upsert integrity",
          "Ingestion timestamping and PII exclusion",
          "Archive-then-delete file handling"
        ],
        technicalChallenge: "Manual consolidation introduced 24–48 hours of latency and created duplicate, overwritten and late-file risks.",
        solution: "A three-activity Fabric pipeline ingests nightly files, archives processed files and deletes them from the landing zone only after successful archival."
      },

      writeup: {
        executiveSummary: "Grandeur Properties International is transitioning from manual, spreadsheet-based listing consolidation to an automated and auditable Microsoft Fabric Lakehouse pipeline. The solution is designed around a clean nightly snapshot, governed Silver data, property-level upsert integrity, processed-file archival and ingestion timestamps.",
        problemStatement: "The manual model failed during simultaneous negotiations: Dubai filed late, London produced duplicate rows and New York was silently overwritten. The resulting 24–48 hour latency and material-error risk made leadership decisions dependent on data that could not be reliably trusted.",
        objectives: [
          "Automate nightly ingestion of listing files from multiple offices.",
          "Use wildcard ingestion and controlled schema mapping into Silver.",
          "Upsert property records using property_id as the unique key.",
          "Exclude unnecessary PII and timestamp records at ingestion.",
          "Archive successfully processed files and remove them from the landing zone.",
          "Make the pipeline auditable and operationally repeatable."
        ],
        targetAudience: "Portfolio leadership, global real-estate operations, data engineering and analysts consuming trusted listing intelligence.",
        overview: "A Lakehouse-centric ingestion architecture that separates raw file handling from business consumption.",
        technologyUsed: ["Microsoft Fabric", "Lakehouse", "Data Pipeline", "Copy Data Activity", "Silver Table", "Wildcard File Ingestion"],
        projectScope: "Nightly listing ingestion, validation, governed Silver loading, upsert integrity, archival and landing-zone cleanup.",
        solution: "Three pipeline activities form the operating pattern: ingest and upsert, archive processed files, then delete them from the landing zone after archive success.",
        challenges: [
          "Late and duplicated office files",
          "Silent overwrites in manual consolidation",
          "24–48 hour reporting latency",
          "Duplicate property_id handling",
          "Archive failure after a successful data load"
        ]
      },

      methodology: {
        architectureOverview: "Nightly office files land in the Fabric raw/landing area. Copy Data uses a wildcard pattern and schema mapping to load governed Silver data. property_id is used for upsert integrity and an ingestion timestamp is captured. Archive and Delete activities complete the file lifecycle.",
        technicalDecisions: [
          {
            decision: "Use property_id as the upsert key",
            rationale: "The nightly snapshot represents the final authoritative state of a property for the day, so the property-level key protects Silver from duplicate rows."
          },
          {
            decision: "Archive before delete",
            rationale: "Delete is dependent on confirmed Archive success, preventing the landing file from being removed before an operational copy exists."
          },
          {
            decision: "Use wildcard ingestion",
            rationale: "The pipeline can collect all applicable office files without manual file-by-file selection."
          }
        ],
        securityAndReliability: "PII exclusion, ingestion timestamping, governed Silver mapping and dependency-controlled archival/deletion provide an auditable operating model. If Archive fails after Copy Data succeeds, the source remains in Files/raw/ and can be reprocessed without creating Silver duplicates."
      },

      steps: [
        {
          stepNumber: 1,
          phase: "Phase 1: Foundation",
          title: "Configure Wildcard Listing Ingestion",
          description: "Configure the Fabric Copy Data activity to discover the nightly office files using a wildcard pattern and map the required source fields into the governed Silver schema.",
          deliverables: ["Wildcard ingestion", "Column mapping", "PII exclusion"],
          tools: ["Microsoft Fabric", "Copy Data", "Lakehouse"]
        },
        {
          stepNumber: 2,
          phase: "Phase 2: Data Integrity",
          title: "Implement property_id Upsert Logic",
          description: "Load listing records using property_id as the unique key and capture the ingestion timestamp so the final nightly state can be identified.",
          deliverables: ["Upsert write mode", "Property-level integrity", "Ingestion timestamp"],
          tools: ["Fabric Data Pipeline", "Silver Table"]
        },
        {
          stepNumber: 3,
          phase: "Phase 3: File Lifecycle",
          title: "Archive Processed Files",
          description: "Move successfully processed files into the archive destination so the raw landing area does not become the permanent processing store.",
          deliverables: ["Archive source configuration", "Archive destination"],
          tools: ["Fabric Pipeline", "Files"]
        },
        {
          stepNumber: 4,
          phase: "Phase 4: Cleanup & Reliability",
          title: "Delete Only After Archive Success",
          description: "Configure activity dependencies so Delete executes only after Archive succeeds. If Archive fails, the file remains available for the next run.",
          deliverables: ["Dependency configuration", "Controlled cleanup", "Retry-safe processing"],
          tools: ["Fabric Pipeline"]
        }
      ],

      gallery: [
        { url: asset(ASSET_FOLDERS.case01, "Picture2.png"), caption: "Pipeline Architecture", description: "Three-activity Microsoft Fabric ingestion, archive and delete flow." },
        { url: asset(ASSET_FOLDERS.case01, "Picture3.png"), caption: "Copy Data Source", description: "Nightly office-file ingestion configuration." },
        { url: asset(ASSET_FOLDERS.case01, "Picture4.png"), caption: "Copy Data Destination", description: "Governed Silver destination configuration." },
        { url: asset(ASSET_FOLDERS.case01, "Picture5.png"), caption: "Schema Mapping", description: "Source-to-Silver field mapping." },
        { url: asset(ASSET_FOLDERS.case01, "Picture6.png"), caption: "System Constraints", description: "Architecture constraints governing the implementation." },
        { url: asset(ASSET_FOLDERS.case01, "Picture7.png"), caption: "Archive Source", description: "Processed-file archival source configuration." },
        { url: asset(ASSET_FOLDERS.case01, "Picture8.png"), caption: "Archive Destination", description: "Processed-file archive destination." },
        { url: asset(ASSET_FOLDERS.case01, "Picture9.png"), caption: "Landing Zone", description: "Landing-area file handling." }
      
      ],

      results: [
        { metric: "24–48h", label: "Manual Consolidation Latency Addressed" },
        { metric: "3", label: "Pipeline Activities" },
        { metric: "property_id", label: "Upsert Integrity Key" },
        { metric: "Nightly", label: "Automated Snapshot Pattern" }
      ]
    },

    // --------------------------------------------------------------
    // CASE STUDY 02
    // --------------------------------------------------------------

    {
      id: "logistics-data-modernization",
      title: "Logistics Data Modernization",
      tagline: "A watermark-driven Microsoft Fabric pipeline that ingests only net-new shipment JSON files into Delta Lake.",
      category: "microsoft-fabric",
      featured: true,
      role: "Lead Data Engineer",
      timeline: "Microsoft Fabric Case Study",
      image: asset(ASSET_FOLDERS.case02, "Picture1.jpg"),
      showHero: false,
      demoUrl: "",
      githubUrl: "https://github.com/shubhampandey11aug/my-portfolio/tree/main/assets/Case%20Study%2002%20Logistics%20Data%20Modernization",
      metrics: "Incremental, state-aware ingestion with auditable Delta Lake history",
      tags: ["Microsoft Fabric", "Delta Lake", "Watermark", "JSON", "Lakehouse", "Append", "Pipeline Automation"],

      details: {
        overview: "Global Freight Forwarders needed to eliminate manual inspection of hundreds of shipment-log files and reliably ingest only net-new JSON records.",
        keyFeatures: ["Watermark state tracking", "Net-new file detection", "Delta Lake destination", "Append semantics", "Retry-safe watermark progression"],
        technicalChallenge: "Manual file selection caused an 18-hour missed status update and an SLA breach.",
        solution: "A durable watermark in Delta Lake identifies the processing boundary. Only files newer than the last successful watermark are ingested and appended to ShippingLogs."
      },

      writeup: {
        executiveSummary: "Global Freight Forwarders operates a high-velocity logistics environment where shipment logs arrive as JSON files. The solution introduces state-aware ingestion using a durable Delta watermark, removing manual file hunting and creating an auditable incremental ingestion framework.",
        problemStatement: "Analysts manually inspected timestamps to identify net-new files. A missed DHL Freight status update went undetected for eighteen hours, resulting in an SLA breach and client escalation.",
        objectives: [
          "Run shipment ingestion on a scheduled basis without manual file selection.",
          "Process only net-new JSON files since the last successful run.",
          "Persist the watermark in a durable Delta table.",
          "Append shipment status events rather than collapsing history.",
          "Ensure retry behaviour does not duplicate successfully written data."
        ],
        targetAudience: "Logistics operations, supply-chain analysts, data engineers and reporting teams.",
        overview: "State-aware incremental ingestion into a governed Delta Lake Bronze layer.",
        technologyUsed: ["Microsoft Fabric", "Lakehouse", "Delta Lake", "JSON", "Data Pipeline", "Watermark"],
        projectScope: "Net-new shipment-log detection, watermark management, append loading and retry-safe pipeline execution.",
        solution: "Maintain a processing watermark, filter files beyond that state, append the resulting events to ShippingLogs and advance the watermark only after successful completion.",
        challenges: [
          "Hundreds of historical files mixed with new files",
          "Manual timestamp inspection",
          "Late status visibility",
          "Need to preserve event history",
          "Retry/idempotency requirements"
        ]
      },

      methodology: {
        architectureOverview: "A Fabric pipeline uses a durable Delta watermark as its state store. The watermark advances after successful processing, allowing subsequent runs to identify only net-new files. Shipment records are written to the ShippingLogs Delta table in Append mode.",
        technicalDecisions: [
          {
            decision: "Use a Delta watermark for state persistence",
            rationale: "The pipeline needs a durable state boundary that survives between executions and advances only after successful completion."
          },
          {
            decision: "Append shipment events",
            rationale: "A shipment may legitimately appear as In-Transit, Delayed and Delivered; each is a distinct event that must remain in the analytical history."
          },
          {
            decision: "Keep the watermark as the retry safety mechanism",
            rationale: "A failed write does not advance the watermark, so the next execution resumes from the last successful state."
          }
        ],
        securityAndReliability: "Delta Lake provides ACID writes and an immutable transaction history. The watermark is advanced only after successful processing, supporting retry-safe execution and an auditable processing trail."
      },

      steps: [
        {
          stepNumber: 1,
          phase: "Phase 1: State Foundation",
          title: "Create the Watermark Table",
          description: "Create a durable Delta table that stores the latest successfully processed state used by subsequent pipeline executions.",
          deliverables: ["Watermark table", "Initial state"],
          tools: ["Microsoft Fabric", "Delta Lake", "Notebook"]
        },
        {
          stepNumber: 2,
          phase: "Phase 2: Incremental Detection",
          title: "Identify Net-New JSON Files",
          description: "Use the persisted watermark to filter the file set and isolate only shipment logs that arrived after the last successful run.",
          deliverables: ["Incremental filter", "Net-new file set"],
          tools: ["Fabric Pipeline", "JSON"]
        },
        {
          stepNumber: 3,
          phase: "Phase 3: Delta Ingestion",
          title: "Append to ShippingLogs",
          description: "Write shipment events to the Lakehouse Delta table using Append semantics so every status event remains available for downstream analysis.",
          deliverables: ["ShippingLogs Delta table", "Append write"],
          tools: ["Delta Lake", "Lakehouse"]
        },
        {
          stepNumber: 4,
          phase: "Phase 4: State Commit",
          title: "Update Watermark After Success",
          description: "Advance the watermark only after the ingestion succeeds, leaving the previous state intact when a write fails.",
          deliverables: ["Successful-run state", "Retry-safe processing"],
          tools: ["Fabric Pipeline", "Delta Lake"]
        }
      ],

      gallery: [
        { url: asset(ASSET_FOLDERS.case02, "Picture2.png"), caption: "Incremental Pipeline", description: "State-aware Microsoft Fabric pipeline." },
        { url: asset(ASSET_FOLDERS.case02, "Picture3.png"), caption: "Watermark Table Creation", description: "Delta table used for durable pipeline state." },
        { url: asset(ASSET_FOLDERS.case02, "Picture4.png"), caption: "Watermark Value", description: "Setting the processing watermark." },
        { url: asset(ASSET_FOLDERS.case02, "Picture5.png"), caption: "Copy Data Source", description: "Shipment-log source configuration." },
        { url: asset(ASSET_FOLDERS.case02, "Picture6.png"), caption: "Update Watermark", description: "Pipeline state-update configuration." },
        { url: asset(ASSET_FOLDERS.case02, "Picture7.png"), caption: "Pipeline Run", description: "Execution of the incremental ingestion pipeline." }
      
      ],

      results: [
        { metric: "Net-New", label: "Files Processed Per Run" },
        { metric: "ACID", label: "Delta Lake Write Guarantees" },
        { metric: "Append", label: "Event Preservation Strategy" },
        { metric: "18h", label: "Missed Status Incident Addressed" }
      ]
    },

    // --------------------------------------------------------------
    // CASE STUDY 03
    // --------------------------------------------------------------

    {
      id: "workforce-intelligence-azure-sql-lakehouse",
      title: "Workforce Intelligence: From Azure SQL to Lakehouse",
      tagline: "A Bronze-to-Silver Microsoft Fabric pipeline for incremental HR data ingestion, quarantine, deduplication and trusted workforce reporting.",
      category: "microsoft-fabric",
      featured: true,
      role: "Data Engineer",
      timeline: "Microsoft Fabric Case Study",
      image: asset(ASSET_FOLDERS.case03, "Picture1.jpg"),
      showHero: false,
      demoUrl: "",
      githubUrl: "https://github.com/shubhampandey11aug/my-portfolio/tree/main/assets/Case%20Study%2003%20Workforce%20Intelligence.From%20Azure%20SQL%20to%20Lakehouse(Technology%20Consulting)",
      metrics: "Bronze 332 → Silver 307 | Quarantine 20 | Duplicates 5",
      tags: ["Microsoft Fabric", "Azure SQL", "Lakehouse", "Bronze", "Silver", "PySpark", "Data Quality", "Quarantine"],

      details: {
        overview: "Innovate Solutions needed to replace manual SQL exports and Excel cleanup with an engineered Azure SQL to Fabric Lakehouse pipeline.",
        keyFeatures: ["Incremental Azure SQL extraction", "Bronze landing", "PySpark transformation", "Quarantine of invalid records", "Duplicate removal", "Silver reconciliation"],
        technicalChallenge: "HR reporting required 48-hour manual turnaround and the source contained duplicate employee IDs and invalid salaries.",
        solution: "Copy Activity loads Azure SQL incrementally into Bronze; a Notebook cleans, validates, quarantines invalid records, deduplicates and writes the trusted result to Silver."
      },

      writeup: {
        executiveSummary: "Innovate Solutions operates across London, New York and Singapore and maintains workforce data in Azure SQL. The project introduces a two-stage Microsoft Fabric pipeline that moves employee data into Bronze and applies PySpark-based cleansing and enrichment before writing a trusted Silver workforce layer.",
        problemStatement: "HR reporting relied on manual SQL exports and Excel cleanup, creating a 48-hour turnaround. The dataset contained five duplicate employee IDs and eighteen invalid salaries, making a governed transformation layer necessary.",
        objectives: [
          "Extract employee records incrementally from Azure SQL.",
          "Land source data in a Fabric Bronze layer.",
          "Apply cleaning and enrichment through a Notebook.",
          "Quarantine invalid or null records instead of silently losing them.",
          "Remove duplicate employee records.",
          "Persist a reconciled silver_employees dataset.",
          "Account for every record entering the Lakehouse."
        ],
        targetAudience: "HR reporting teams, workforce analysts, data engineers and technology-consulting stakeholders.",
        overview: "An incremental Bronze-to-Silver workforce data pipeline with explicit data-quality accounting.",
        technologyUsed: ["Microsoft Fabric", "Azure SQL", "Lakehouse", "Copy Activity", "Notebook", "PySpark", "Bronze", "Silver"],
        projectScope: "Incremental extraction, Bronze persistence, validation, quarantine, deduplication, enrichment and Silver reconciliation.",
        solution: "Use Copy Activity for source extraction and a PySpark Notebook for deterministic cleaning, filtering, duplicate removal and Silver persistence.",
        challenges: [
          "48-hour manual reporting cycle",
          "Duplicate employee IDs",
          "Invalid salaries",
          "Need for controlled quarantine",
          "Need to reconcile Bronze and Silver counts"
        ]
      },

      methodology: {
        architectureOverview: "Azure SQL feeds a Fabric Copy Activity, which lands incremental records in Bronze. A Notebook reads Bronze and applies validation, range filtering, quarantine, deduplication and enrichment before writing silver_employees.",
        technicalDecisions: [
          {
            decision: "Separate Bronze ingestion from Silver curation",
            rationale: "The source copy remains available for traceability while transformation logic can be changed independently."
          },
          {
            decision: "Quarantine invalid records",
            rationale: "Invalid data is isolated and counted rather than silently discarded or allowed to contaminate the trusted Silver layer."
          },
          {
            decision: "Reconcile record counts",
            rationale: "Bronze 332, Silver 307, Quarantine 20 and 5 duplicates dropped provide an explicit accounting of the transformation."
          }
        ],
        securityAndReliability: "The Bronze layer preserves the source landing state, while Silver contains validated records. Quarantine provides a controlled location for invalid data and count reconciliation provides operational transparency."
      },

      steps: [
        {
          stepNumber: 1,
          phase: "Phase 1: Source Ingestion",
          title: "Extract Incremental Employee Records",
          description: "Configure Copy Activity to move employee records from Azure SQL into the Fabric Bronze layer.",
          deliverables: ["Azure SQL source", "Bronze table", "Incremental ingestion"],
          tools: ["Microsoft Fabric", "Azure SQL", "Copy Activity"]
        },
        {
          stepNumber: 2,
          phase: "Phase 2: Bronze Inspection",
          title: "Read and Profile Bronze Data",
          description: "Use a Notebook to inspect the Bronze dataset and establish the transformation and validation rules.",
          deliverables: ["Bronze DataFrame", "Validation rules"],
          tools: ["PySpark", "Fabric Notebook"]
        },
        {
          stepNumber: 3,
          phase: "Phase 3: Data Quality",
          title: "Quarantine Invalid Records",
          description: "Filter invalid or null records and preserve them in a quarantine output so the data-quality impact remains visible.",
          deliverables: ["Quarantine dataset", "Invalid-record handling"],
          tools: ["PySpark"]
        },
        {
          stepNumber: 4,
          phase: "Phase 4: Deduplication",
          title: "Remove Duplicate Employee IDs",
          description: "Deduplicate employee records so the Silver layer produces one trusted record per employee.",
          deliverables: ["Deduplicated employee dataset"],
          tools: ["PySpark"]
        },
        {
          stepNumber: 5,
          phase: "Phase 5: Silver Publishing",
          title: "Write and Reconcile silver_employees",
          description: "Persist the trusted Silver table and reconcile Bronze, Silver, Quarantine and duplicate counts.",
          deliverables: ["silver_employees", "Count reconciliation"],
          tools: ["Fabric Lakehouse", "Delta Lake"]
        }
      ],

      gallery: [
        { url: asset(ASSET_FOLDERS.case03, "Picture2.png"), caption: "Target Tables", description: "Target structure for workforce processing." },
        { url: asset(ASSET_FOLDERS.case03, "Picture3.png"), caption: "Azure SQL Source", description: "Source extraction configuration." },
        { url: asset(ASSET_FOLDERS.case03, "Picture4.png"), caption: "Pipeline Design", description: "Bronze-to-Silver pipeline orchestration." },
        { url: asset(ASSET_FOLDERS.case03, "Picture5.png"), caption: "Bronze Destination", description: "Copy Activity destination." },
        { url: asset(ASSET_FOLDERS.case03, "Picture6.png"), caption: "Bronze Table", description: "Source data persisted in Bronze." },
        { url: asset(ASSET_FOLDERS.case03, "Picture7.png"), caption: "Notebook Read", description: "Reading Bronze into PySpark." },
        { url: asset(ASSET_FOLDERS.case03, "Picture8.png"), caption: "Bronze Inspection", description: "Bronze dataset inspection." },
        { url: asset(ASSET_FOLDERS.case03, "Picture9.png"), caption: "Quarantine Logic", description: "Controlled invalid-record handling." },
        { url: asset(ASSET_FOLDERS.case03, "Picture10.png"), caption: "Invalid / Null Filtering", description: "Data-quality filtering." },
        { url: asset(ASSET_FOLDERS.case03, "Picture11.png"), caption: "Range Validation", description: "Filtering records according to required ranges." },
        { url: asset(ASSET_FOLDERS.case03, "Picture12.png"), caption: "Deduplication", description: "Duplicate employee records removed." },
        { url: asset(ASSET_FOLDERS.case03, "Picture13.png"), caption: "Transformed Records", description: "Post-transformation record view." },
        { url: asset(ASSET_FOLDERS.case03, "Picture14.png"), caption: "Write Silver Table", description: "Publishing the trusted Silver output." },
        { url: asset(ASSET_FOLDERS.case03, "Picture15.png"), caption: "Silver Quarantine", description: "Quarantined records." },
        { url: asset(ASSET_FOLDERS.case03, "Picture16.png"), caption: "Silver Table", description: "Trusted workforce output." },
        { url: asset(ASSET_FOLDERS.case03, "Picture17.png"), caption: "Silver Table Detail", description: "Additional Silver table view." }
      
      ],

      results: [
        { metric: "332", label: "Bronze Records" },
        { metric: "307", label: "Silver Records" },
        { metric: "20", label: "Quarantined Records" },
        { metric: "5", label: "Duplicates Dropped" }
      ]
    },

    // --------------------------------------------------------------
    // CASE STUDY 04
    // --------------------------------------------------------------

    {
      id: "financial-data-transformation-pyspark-delta",
      title: "Financial Data Transformation using PySpark & Delta Lake",
      tagline: "Optimising enterprise financial processing with broadcast joins, Delta schema enforcement and Time Travel recovery.",
      category: "microsoft-fabric",
      featured: true,
      role: "Data Engineer",
      timeline: "Microsoft Fabric Case Study",
      image: asset(ASSET_FOLDERS.case04, "Picture1.jpg"),
      showHero: false,
      demoUrl: "",
      githubUrl: "https://github.com/shubhampandey11aug/my-portfolio/tree/main/assets/Case%20Study%2004%20Financial%20Data%20Transformation%20using%20Pyspark%20and%20Delta%20Lake",
      metrics: "2+ hours → few-minute target processing pattern",
      tags: ["Microsoft Fabric", "PySpark", "Delta Lake", "Broadcast Join", "Schema Enforcement", "Time Travel", "SCD Type 2"],

      details: {
        overview: "Global Corp's accounts-receivable processing was slow and vulnerable to malformed data and unrecoverable dashboard errors.",
        keyFeatures: ["Broadcast join optimisation", "Physical-plan validation", "Delta schema enforcement", "Bad-data isolation", "Time Travel recovery", "SCD Type 2 concepts"],
        technicalChallenge: "Tens of millions of transactions were processed with severe performance degradation and malformed currency data.",
        solution: "Re-engineer PySpark joins, enforce Delta schemas, isolate bad records and use Delta Time Travel to inspect and restore prior versions."
      },

      writeup: {
        executiveSummary: "This Microsoft Fabric case study focuses on performance and reliability for enterprise financial processing. The solution combines PySpark broadcast joins with Delta Lake schema enforcement and Time Travel to reduce processing overhead and make data corruption recoverable.",
        problemStatement: "The critical accounts-receivable pipeline took over two hours, merged tens of millions of transactions with the customer master and suffered data corruption when alphabetical characters reached numeric currency fields. The platform also lacked a reliable rollback mechanism.",
        objectives: [
          "Optimise PySpark joins using broadcast strategies where appropriate.",
          "Inspect physical execution plans before promoting the optimisation.",
          "Enforce Delta Lake schemas at ingestion.",
          "Identify and isolate malformed financial data.",
          "Use Delta Time Travel to inspect historical table versions.",
          "Demonstrate recovery by restoring a previous valid version."
        ],
        targetAudience: "Finance data teams, data engineers, financial controllers and reporting stakeholders.",
        overview: "A performance-and-reliability focused financial transformation pipeline.",
        technologyUsed: ["Microsoft Fabric", "PySpark", "Delta Lake", "Broadcast Join", "Schema Enforcement", "Time Travel", "SCD Type 2"],
        projectScope: "Transaction/customer joins, performance optimisation, malformed-data handling and historical recovery.",
        solution: "Use broadcast joins to reduce shuffle for suitable dimension data, enforce schemas, isolate bad records and use Delta history for recovery.",
        challenges: [
          "Large transaction volumes",
          "Join performance degradation",
          "Malformed currency fields",
          "Lack of rollback capability",
          "Need to validate optimisation through execution plans"
        ]
      },

      methodology: {
        architectureOverview: "PySpark processes transaction and customer data in Microsoft Fabric. The join strategy is validated through the physical plan. Delta Lake provides schema enforcement, transactional history and Time Travel for historical inspection and recovery.",
        technicalDecisions: [
          {
            decision: "Broadcast the appropriate smaller table",
            rationale: "Broadcasting avoids unnecessary network shuffle when the dimension-side dataset is suitable for broadcast."
          },
          {
            decision: "Enforce Delta schema",
            rationale: "Malformed values should be rejected before corrupt financial data reaches trusted analytical tables."
          },
          {
            decision: "Use Time Travel for recovery",
            rationale: "Delta transaction history provides a precise mechanism to inspect and restore a prior table version."
          }
        ],
        securityAndReliability: "Schema enforcement prevents malformed data from entering trusted tables, while Delta transaction history and Time Travel make prior states auditable and recoverable."
      },

      steps: [
        {
          stepNumber: 1,
          phase: "Phase 1: Data Foundation",
          title: "Create Financial Tables and Schema",
          description: "Create the transaction structures and explicit schemas required for controlled financial processing.",
          deliverables: ["Transaction schema", "Customer data structures"],
          tools: ["Microsoft Fabric", "PySpark", "Delta Lake"]
        },
        {
          stepNumber: 2,
          phase: "Phase 2: Performance",
          title: "Inspect the Physical Plan",
          description: "Review the execution plan and identify the join strategy before applying broadcast optimisation.",
          deliverables: ["Physical plan review", "Join strategy"],
          tools: ["PySpark", "Spark Execution Plan"]
        },
        {
          stepNumber: 3,
          phase: "Phase 3: Optimisation",
          title: "Implement Broadcast Join",
          description: "Apply broadcast join logic to the suitable smaller dataset to reduce network shuffle and improve processing performance.",
          deliverables: ["Broadcast join", "Optimised transformation"],
          tools: ["PySpark"]
        },
        {
          stepNumber: 4,
          phase: "Phase 4: Data Quality",
          title: "Validate and Isolate Bad Financial Data",
          description: "Use strict Delta schema expectations and separate malformed records for inspection rather than allowing them to contaminate trusted outputs.",
          deliverables: ["Clean data", "Bad-data output"],
          tools: ["Delta Lake", "PySpark"]
        },
        {
          stepNumber: 5,
          phase: "Phase 5: Recovery",
          title: "Inspect History and Restore a Prior Version",
          description: "Use Delta Time Travel to describe table history, inspect a previous version and demonstrate restoration of the prior valid state.",
          deliverables: ["Table history", "Previous-version inspection", "Restore operation"],
          tools: ["Delta Lake", "Time Travel"]
        }
      ],

      gallery: [
        { url: asset(ASSET_FOLDERS.case04, "Picture2.png"), caption: "Schema Setup", description: "Notebook and schema preparation." },
        { url: asset(ASSET_FOLDERS.case04, "Picture3.PNG"), caption: "Transaction Table", description: "Financial transaction dataset." },
        { url: asset(ASSET_FOLDERS.case04, "Picture4.PNG"), caption: "Transaction Data", description: "Transaction-table preparation." },
        { url: asset(ASSET_FOLDERS.case04, "Picture5.PNG"), caption: "Physical Plan", description: "Execution-plan inspection before optimisation." },
        { url: asset(ASSET_FOLDERS.case04, "Picture6.PNG"), caption: "Broadcast Join", description: "Broadcast join implementation." },
        { url: asset(ASSET_FOLDERS.case04, "Picture7.PNG"), caption: "Broadcast Join Detail", description: "Optimised join execution." },
        { url: asset(ASSET_FOLDERS.case04, "Picture8.PNG"), caption: "Test Table", description: "Test dataset for reliability checks." },
        { url: asset(ASSET_FOLDERS.case04, "Picture9.PNG"), caption: "Bad Data Records", description: "Malformed data inspection." },
        { url: asset(ASSET_FOLDERS.case04, "Picture10.PNG"), caption: "Clean vs Bad Data", description: "Data-quality separation." },
        { url: asset(ASSET_FOLDERS.case04, "Picture11.PNG"), caption: "Time Travel Update", description: "Versioned Delta table update." },
        { url: asset(ASSET_FOLDERS.case04, "Picture12.PNG"), caption: "Updated Records", description: "Post-update table state." },
        { url: asset(ASSET_FOLDERS.case04, "Picture13.PNG"), caption: "Delta History", description: "Inspecting transaction history." },
        { url: asset(ASSET_FOLDERS.case04, "Picture14.PNG"), caption: "Previous Version", description: "Inspecting an earlier table version." },
        { url: asset(ASSET_FOLDERS.case04, "Picture15.PNG"), caption: "Restore Previous Version", description: "Recovering the prior valid state." }
      
      ],

      results: [
        { metric: "2+ hrs", label: "Original Processing Time" },
        { metric: "Broadcast", label: "Shuffle-Reduction Strategy" },
        { metric: "Delta", label: "Transactional Reliability Layer" },
        { metric: "Time Travel", label: "Historical Recovery" }
      ]
    },

    // --------------------------------------------------------------
    // CASE STUDY 05
    // --------------------------------------------------------------

    {
      id: "unified-commerce-analytics",
      title: "Unified Commerce Analytics",
      tagline: "A Microsoft Fabric Bronze-Silver-Gold analytics platform transforming Azure SQL data into a Power BI-ready star schema.",
      category: "microsoft-fabric",
      featured: true,
      role: "Lead Data Engineer",
      timeline: "Microsoft Fabric Case Study",
      image: asset(ASSET_FOLDERS.case05, "Picture1.jpg"),
      showHero: false,
      demoUrl: "",
      githubUrl: "https://github.com/shubhampandey11aug/my-portfolio/tree/main/assets/Case%20Study%2005%20Unified%20Commerce%20Analytics%20(Global%20Freight%20Forwarders)",
      metrics: "Bronze → Silver → Gold → Power BI",
      tags: ["Microsoft Fabric", "Azure SQL", "PySpark", "Lakehouse", "Delta Lake", "Star Schema", "Power BI", "Semantic Model"],

      details: {
        overview: "North Meridian Retail Group needs to modernise a normalised transactional reporting estate without disrupting operational transactions.",
        keyFeatures: ["Bronze ingestion", "PySpark Silver curation", "Gold dimensional modelling", "Fact_Sales", "SQL Endpoint", "Power BI semantic model"],
        technicalChallenge: "The legacy normalised reporting estate could not keep pace with growing e-commerce volume and decision-making requirements.",
        solution: "Build a three-layer Lakehouse architecture, curate Silver tables with PySpark, create a Gold star schema and connect the Gold layer to Power BI."
      },

      writeup: {
        executiveSummary: "The Unified Commerce Analytics Platform modernises reporting for a multi-channel retail environment using Microsoft Fabric. Azure SQL and RegionMapping.csv are ingested into Bronze, transformed through PySpark into Silver, modelled into a Gold star schema and exposed to Power BI through a semantic model.",
        problemStatement: "North Meridian Retail Group faces architectural obsolescence in a highly normalised transactional reporting estate while e-commerce volume grows. Reporting needs to become decoupled from operational transactions without touching the transaction flow.",
        objectives: [
          "Securely ingest Azure SQL tables and RegionMapping.csv into Bronze.",
          "Reconcile Bronze row counts against the source.",
          "Use PySpark to curate Silver tables.",
          "Build a Gold dimensional model with surrogate keys and a date dimension.",
          "Expose Fact_Sales through the SQL Endpoint.",
          "Connect Power BI to the Gold layer for executive dashboards.",
          "Maintain security, compliance and reliability standards at each layer."
        ],
        targetAudience: "Retail leadership, Sales teams, analytics teams, data engineers and Power BI consumers.",
        overview: "A three-layer Bronze-Silver-Gold architecture from Azure SQL extraction to Power BI.",
        technologyUsed: ["Microsoft Fabric", "Azure SQL", "Lakehouse", "PySpark", "Delta Lake", "SQL Endpoint", "Power BI"],
        projectScope: "Source ingestion, Bronze reconciliation, Silver curation, Gold star schema modelling and semantic-model consumption.",
        solution: "Separate ingestion, transformation and business consumption through Bronze, Silver and Gold layers.",
        challenges: [
          "Legacy normalised reporting architecture",
          "Growing e-commerce data volume",
          "Need to avoid operational-system disruption",
          "Need for row-level reconciliation",
          "Need for scalable dimensional modelling"
        ]
      },

      methodology: {
        architectureOverview: "Azure SQL and RegionMapping.csv land in Bronze. PySpark curates Bronze into Silver Delta tables. The Gold notebook creates customer/product surrogate keys, derives the date dimension and builds a pre-aggregated Fact_Sales model at Date–Customer–Product–Status grain. Power BI consumes Gold through a semantic model.",
        technicalDecisions: [
          {
            decision: "Use Bronze-Silver-Gold separation",
            rationale: "Each layer has a clear responsibility: source preservation, governed transformation and business-ready analytical modelling."
          },
          {
            decision: "Build a star schema in Gold",
            rationale: "Dimensional modelling provides a cleaner analytical contract for reporting and Power BI consumption."
          },
          {
            decision: "Keep operational transactions untouched",
            rationale: "Analytics is decoupled from the operational flow so reporting improvements do not require changes to the transactional system."
          }
        ],
        securityAndReliability: "Delivery is sequenced from foundational ingestion to domain enablement and then scale/stabilisation. Acceptance includes source-to-Bronze reconciliation and an audit query that reconciles Gold back to Bronze."
      },

      steps: [
        {
          stepNumber: 1,
          phase: "Phase 1: Foundation",
          title: "Ingest Azure SQL and Region Mapping",
          description: "Securely ingest all required Azure SQL tables and RegionMapping.csv into Bronze with row-count reconciliation against source.",
          deliverables: ["Bronze tables", "RegionMapping", "Source reconciliation"],
          tools: ["Microsoft Fabric", "Azure SQL", "Data Pipeline"]
        },
        {
          stepNumber: 2,
          phase: "Phase 2: Domain Enablement",
          title: "Transform Bronze to Silver",
          description: "Use PySpark to enrich customers with region information, round product prices and derive sales measures from joined sales, products and orders.",
          deliverables: ["Silver Delta tables", "Derived SalesAmount"],
          tools: ["PySpark", "Delta Lake"]
        },
        {
          stepNumber: 3,
          phase: "Phase 3: Gold Modelling",
          title: "Build the Dimensional Model",
          description: "Generate surrogate keys, derive the date dimension and pre-aggregate the sales fact table at Date–Customer–Product–Status grain.",
          deliverables: ["Customer dimension", "Product dimension", "Date dimension", "Fact_Sales"],
          tools: ["PySpark", "Delta Lake"]
        },
        {
          stepNumber: 4,
          phase: "Phase 4: Consumption",
          title: "Expose Gold to Sales and Power BI",
          description: "Enable the Sales team to query Fact_Sales through the SQL Endpoint and connect a Power BI semantic model to Gold.",
          deliverables: ["SQL Endpoint access", "Power BI semantic model"],
          tools: ["Microsoft Fabric", "SQL Endpoint", "Power BI"]
        },
        {
          stepNumber: 5,
          phase: "Phase 5: Operationalisation",
          title: "Schedule and Stabilise",
          description: "Operationalise the complete flow with daily triggers and final reconciliation checks.",
          deliverables: ["Daily trigger", "End-to-end validation"],
          tools: ["Fabric Pipelines", "Power BI"]
        }
      ],

      gallery: [
        { url: asset(ASSET_FOLDERS.case05, "Picture2.png"), caption: "Bronze-Silver-Gold Architecture", description: "Three-layer Lakehouse architecture." },
        { url: asset(ASSET_FOLDERS.case05, "Picture3.png"), caption: "Lookup Activity", description: "Pipeline lookup configuration." },
        { url: asset(ASSET_FOLDERS.case05, "Picture4.png"), caption: "For Loop Activity", description: "Iterative table ingestion pattern." },
        { url: asset(ASSET_FOLDERS.case05, "Picture5.png"), caption: "Pipeline Settings", description: "Pipeline orchestration configuration." },
        { url: asset(ASSET_FOLDERS.case05, "Picture6.png"), caption: "Copy Data Loop", description: "Automated source-table ingestion." },
        { url: asset(ASSET_FOLDERS.case05, "Picture7.png"), caption: "Bronze to Silver", description: "PySpark curation stage." },
        { url: asset(ASSET_FOLDERS.case05, "Picture8.png"), caption: "Save Silver Table", description: "Silver Delta persistence." },
        { url: asset(ASSET_FOLDERS.case05, "Picture9.png"), caption: "Silver View", description: "Silver-layer inspection." },
        { url: asset(ASSET_FOLDERS.case05, "Picture10.png"), caption: "Silver Table", description: "Curated analytical data." },
        { url: asset(ASSET_FOLDERS.case05, "Picture11.png"), caption: "Silver Table Detail", description: "Additional Silver view." },
        { url: asset(ASSET_FOLDERS.case05, "Picture12.png"), caption: "Silver to Gold", description: "Gold dimensional transformation." },
        { url: asset(ASSET_FOLDERS.case05, "Picture13.png"), caption: "Gold Table", description: "Gold analytical model." },
        { url: asset(ASSET_FOLDERS.case05, "Picture14.png"), caption: "Gold Table Detail", description: "Gold model view." }
      
      ],

      results: [
        { metric: "3", label: "Medallion Layers" },
        { metric: "Star", label: "Gold Data Model" },
        { metric: "Power BI", label: "Semantic Consumption" },
        { metric: "100%", label: "Bronze Source Reconciliation Target" }
      ]
    },

    // --------------------------------------------------------------
    // CASE STUDY 06
    // --------------------------------------------------------------

    {
      id: "market-risk-intelligence-feed",
      title: "Market Risk Intelligence Feed",
      tagline: "Automating daily FX market-data ingestion with Microsoft Fabric Warehouse, T-SQL JSON shredding and idempotent stored procedures.",
      category: "microsoft-fabric",
      featured: false,
      role: "Data Engineer",
      timeline: "Microsoft Fabric Case Study",
      image: asset(ASSET_FOLDERS.case06, "Picture1.jpg"),
      showHero: false,
      demoUrl: "",
      githubUrl: "https://github.com/shubhampandey11aug/my-portfolio/tree/main/assets/Case%20Study%2006%20Market%20Risk%20Intelligence%20Feed",
      metrics: "Daily FX feed with idempotent historical backfill",
      tags: ["Microsoft Fabric", "Warehouse", "T-SQL", "OPENJSON", "Stored Procedure", "API Ingestion", "ForEach"],

      details: {
        overview: "Global Credit Corp needed a defensible daily FX-rate mechanism for mark-to-market exposure, credit limits and hedging decisions.",
        keyFeatures: ["Parameterized Web Activity", "Frankfurter API", "OPENJSON shredding", "Idempotent stored procedure", "ForEach historical backfill"],
        technicalChallenge: "The Risk desk was relying on static, often month-outdated conversion factors.",
        solution: "A warehouse-native Fabric pipeline calls the FX API for a parameterised date, shreds JSON with OPENJSON and uses an idempotent stored procedure so repeated runs do not duplicate the same date."
      },

      writeup: {
        executiveSummary: "Global Credit Corp requires a reliable daily exchange-rate mechanism for international exposure reporting. The project implements a warehouse-native Microsoft Fabric ingestion pattern combining API calls, T-SQL JSON parsing, idempotent stored procedures and historical backfill.",
        problemStatement: "The absence of a reliable daily FX feed left Risk Management with a blind spot around currency volatility. Credit-limit and hedging decisions were being made using static conversion factors.",
        objectives: [
          "Call the FX API for a parameterised date.",
          "Parse nested JSON responses into relational rows using OPENJSON.",
          "Use a stored procedure to make repeated runs idempotent.",
          "Support historical backfill using a ForEach loop.",
          "Create a warehouse-native and auditable FX ingestion process."
        ],
        targetAudience: "Risk management, treasury, finance analytics, data engineering and market-data consumers.",
        overview: "Warehouse-native API ingestion for a daily FX-rate intelligence feed.",
        technologyUsed: ["Microsoft Fabric Warehouse", "T-SQL", "OPENJSON", "Stored Procedures", "Web Activity", "ForEach"],
        projectScope: "Schema creation, table design, API ingestion, JSON shredding, upsert/idempotency and historical backfill.",
        solution: "Parameterise the requested date, call the external FX service, parse the JSON response in T-SQL and upsert the resulting rates through a stored procedure.",
        challenges: [
          "No reliable daily FX mechanism",
          "Nested JSON response parsing",
          "Need for repeatable same-date execution",
          "Historical backfill requirements"
        ]
      },

      methodology: {
        architectureOverview: "A Fabric Web Activity calls the FX service for a selected date. The response is parsed with T-SQL OPENJSON into warehouse tables. A stored procedure performs the idempotent upsert, while a ForEach loop supports historical dates.",
        technicalDecisions: [
          {
            decision: "Use OPENJSON for warehouse-native parsing",
            rationale: "The nested API response can be transformed directly inside T-SQL without requiring a separate external processing layer."
          },
          {
            decision: "Use an idempotent stored procedure",
            rationale: "Running the same date more than once should result in one logical set of rates rather than duplicates."
          },
          {
            decision: "Use ForEach for historical backfill",
            rationale: "The same parameterised ingestion pattern can be reused across a sequence of historical dates."
          }
        ],
        securityAndReliability: "Idempotent stored-procedure logic provides repeatable execution, while parameterised dates and controlled warehouse tables make the feed auditable and backfillable."
      },

      steps: [
        {
          stepNumber: 1,
          phase: "Phase 1: Warehouse Foundation",
          title: "Create Schema and FX Tables",
          description: "Create the warehouse schema and target table required for storing the daily FX rates.",
          deliverables: ["Warehouse schema", "FX table"],
          tools: ["Microsoft Fabric Warehouse", "T-SQL"]
        },
        {
          stepNumber: 2,
          phase: "Phase 2: API Ingestion",
          title: "Call the FX API",
          description: "Configure a Web Activity to call Frankfurter using a parameterised date.",
          deliverables: ["Web Activity", "Date parameter"],
          tools: ["Fabric Pipeline", "Web Activity"]
        },
        {
          stepNumber: 3,
          phase: "Phase 3: JSON Transformation",
          title: "Shred the API Response",
          description: "Use OPENJSON to transform the nested response into relational records.",
          deliverables: ["JSON parsing logic", "Relational rows"],
          tools: ["T-SQL", "OPENJSON"]
        },
        {
          stepNumber: 4,
          phase: "Phase 4: Idempotency",
          title: "Implement Stored Procedure Upsert",
          description: "Use a stored procedure to ensure repeated ingestion for the same date does not create duplicate logical records.",
          deliverables: ["Stored procedure", "Idempotent write"],
          tools: ["T-SQL", "Fabric Warehouse"]
        },
        {
          stepNumber: 5,
          phase: "Phase 5: Historical Backfill",
          title: "Run Date-Based Backfill",
          description: "Use a ForEach pattern to execute the same ingestion process across historical dates.",
          deliverables: ["Historical FX data", "Backfill loop"],
          tools: ["ForEach", "Fabric Pipeline"]
        }
      ],

      gallery: [
        { url: asset(ASSET_FOLDERS.case06, "Picture2.png"), caption: "Create Schema", description: "Warehouse schema setup." },
        { url: asset(ASSET_FOLDERS.case06, "Picture3.png"), caption: "Create FX Table", description: "Target table creation." },
        { url: asset(ASSET_FOLDERS.case06, "Picture4.png"), caption: "JSON Parsing", description: "OPENJSON transformation." },
        { url: asset(ASSET_FOLDERS.case06, "Picture5.png"), caption: "Stored Procedure", description: "Idempotent ingestion logic." },
        { url: asset(ASSET_FOLDERS.case06, "Picture6.png"), caption: "Data Pipeline", description: "End-to-end API ingestion." },
        { url: asset(ASSET_FOLDERS.case06, "Picture7.png"), caption: "Pipeline + Stored Procedure", description: "Procedure-integrated pipeline." },
        { url: asset(ASSET_FOLDERS.case06, "Picture8.png"), caption: "Pipeline Settings", description: "Runtime configuration." },
        { url: asset(ASSET_FOLDERS.case06, "Picture9.png"), caption: "Pipeline Run", description: "Execution result." },
        { url: asset(ASSET_FOLDERS.case06, "Picture10.png"), caption: "Alter Table", description: "Table evolution." },
        { url: asset(ASSET_FOLDERS.case06, "Picture11.png"), caption: "Alter Table View", description: "Updated table structure." },
        { url: asset(ASSET_FOLDERS.case06, "Picture12.png"), caption: "Idempotent Procedure", description: "Final repeat-safe procedure logic." }
      
      ],

      results: [
        { metric: "Daily", label: "FX Intelligence Feed" },
        { metric: "Idempotent", label: "Same-Date Processing" },
        { metric: "OPENJSON", label: "Native JSON Shredding" },
        { metric: "ForEach", label: "Historical Backfill Pattern" }
      ]
    },

    // --------------------------------------------------------------
    // CASE STUDY 07
    // --------------------------------------------------------------

    {
      id: "accountability-gap",
      title: "The Accountability Gap",
      tagline: "Regulatory data governance with defensive T-SQL, recursive hierarchy resolution and SCD Type 2 historical accountability.",
      category: "microsoft-fabric",
      featured: true,
      role: "Data Engineer",
      timeline: "Microsoft Fabric Case Study",
      image: asset(ASSET_FOLDERS.case07, "Picture1.png"),
      showHero: false,
      demoUrl: "",
      githubUrl: "https://github.com/shubhampandey11aug/my-portfolio/tree/main/assets/Case%20Study%2007%20The%20Accountability%20Gap%20.Regulatory%20Data%20Governance%20%26%20Historical%20Accountability",
      metrics: "Five-level accountability chain + SCD Type 2 history",
      tags: ["Microsoft Fabric", "T-SQL", "Data Governance", "Recursive Hierarchy", "SCD Type 2", "TRY_CAST", "TRY_CONVERT"],

      details: {
        overview: "Veritas Global needs a regulatory attribution chain that can explain responsibility for flagged positions across a five-level Relationship Manager hierarchy.",
        keyFeatures: ["Governed Gold view", "Defensive casting", "RM performance leaderboard", "Five-level hierarchy flattener", "SCD Type 2 merge"],
        technicalChallenge: "Dirty staging data, hierarchical relationships and the need to preserve future personnel changes create different governance challenges.",
        solution: "A governed view absorbs dirty values, a recursive hierarchy query exposes the five-level chain and an SCD Type 2 structure preserves future roster states."
      },

      writeup: {
        executiveSummary: "Veritas Global manages a $42B institutional asset portfolio and requires complete accountability chains for flagged positions. The project uses Microsoft Fabric T-SQL to create a governed data layer, resolve a five-level RM hierarchy and evolve the roster into an SCD Type 2 historical model.",
        problemStatement: "The firm needs defensible regulatory attribution while operating with dirty source values, a five-level reporting hierarchy and a roster that historically overwrites personnel states.",
        objectives: [
          "Create GOLD.CLEAN_POSITIONS as a governed view over staging.",
          "Handle malformed values safely with TRY_CONVERT and TRY_CAST.",
          "Build an RM performance leaderboard with peer-based ranking.",
          "Resolve the complete five-level accountability chain in one query.",
          "Evolve the RM roster to SCD Type 2.",
          "Preserve future personnel changes without overwriting prior active records.",
          "Be explicit about the boundary: SCD Type 2 cannot reconstruct history overwritten before the solution goes live."
        ],
        targetAudience: "Regulatory reporting, compliance, asset-management operations, data governance and audit teams.",
        overview: "A defensive T-SQL architecture for regulatory attribution and historical accountability.",
        technologyUsed: ["Microsoft Fabric", "Warehouse", "T-SQL", "Governed Views", "Recursive Hierarchy", "SCD Type 2"],
        projectScope: "Governed position view, performance ranking, hierarchy resolution and historical RM roster tracking.",
        solution: "Use a governed view to absorb dirty values, a recursive query for accountability-chain resolution and an atomic SCD Type 2 sync for roster changes.",
        challenges: [
          "Malformed source values",
          "Five-level reporting hierarchy",
          "Regulatory completeness requirements",
          "Historical personnel-state tracking",
          "Pre-existing overwritten history cannot be reconstructed"
        ]
      },

      methodology: {
        architectureOverview: "The governed Gold view sits over staging positions and applies defensive casting and RM joins. A recursive query resolves Analyst-to-Managing-Partner accountability. The Relationship Manager table is evolved into SCD Type 2 and incoming roster changes close the prior active record and create a new active state.",
        technicalDecisions: [
          {
            decision: "Use TRY_CAST and TRY_CONVERT",
            rationale: "Malformed values become controlled NULL or sentinel values instead of failing the complete query or batch."
          },
          {
            decision: "Resolve hierarchy recursively",
            rationale: "The five-level chain is hierarchical and is more naturally resolved through a recursive query than repeated fixed joins."
          },
          {
            decision: "Use SCD Type 2",
            rationale: "Future roster changes must be preserved as historical states rather than overwriting the prior record."
          }
        ],
        securityAndReliability: "Governed views isolate consumers from dirty staging data, defensive conversion prevents batch failure, and SCD Type 2 preserves every roster change from implementation onward. The design explicitly does not claim to reconstruct history overwritten before deployment."
      },

      steps: [
        {
          stepNumber: 1,
          phase: "Phase 1: Defensive Data Layer",
          title: "Create the Governed Gold View",
          description: "Build GOLD.CLEAN_POSITIONS over staging, applying defensive casting, RM joins and exposure classification.",
          deliverables: ["Governed view", "Defensive conversions", "Exposure classification"],
          tools: ["Microsoft Fabric Warehouse", "T-SQL"]
        },
        {
          stepNumber: 2,
          phase: "Phase 2: Performance Governance",
          title: "Build RM Performance Leaderboard",
          description: "Rank Relationship Managers against peers at the same title and count only positions with full regulatory closure.",
          deliverables: ["Performance ranking", "Peer-based rank"],
          tools: ["T-SQL"]
        },
        {
          stepNumber: 3,
          phase: "Phase 3: Hierarchy Resolution",
          title: "Flatten the Five-Level Accountability Chain",
          description: "Resolve every RM into a complete Analyst-to-Managing-Partner chain and return the hierarchy depth and accountability chain.",
          deliverables: ["Hierarchy depth", "Accountability chain"],
          tools: ["Recursive T-SQL"]
        },
        {
          stepNumber: 4,
          phase: "Phase 4: Historical Governance",
          title: "Implement SCD Type 2",
          description: "Backfill current active states and process incoming roster changes by closing the prior record and creating a new active record.",
          deliverables: ["SCD Type 2 table", "Atomic merge/sync"],
          tools: ["T-SQL", "SCD Type 2"]
        }
      ],

      gallery: [
        { url: asset(ASSET_FOLDERS.case07, "Picture2.PNG"), caption: "Create Schema", description: "Warehouse schema setup." },
        { url: asset(ASSET_FOLDERS.case07, "Picture3.PNG"), caption: "Copy Data to Warehouse", description: "Warehouse ingestion." },
        { url: asset(ASSET_FOLDERS.case07, "Picture4.PNG"), caption: "Governed Gold View", description: "Defensive governed view." },
        { url: asset(ASSET_FOLDERS.case07, "Picture5.PNG"), caption: "RM Performance Leaderboard", description: "Relationship Manager performance ranking." },
        { url: asset(ASSET_FOLDERS.case07, "Picture6.PNG"), caption: "RM Rank", description: "Peer-based ranking output." },
        { url: asset(ASSET_FOLDERS.case07, "Picture7.PNG"), caption: "Five-Level Hierarchy", description: "Accountability-chain resolution." },
        { url: asset(ASSET_FOLDERS.case07, "Picture8.PNG"), caption: "Hierarchy Level", description: "Hierarchy-depth output." },
        { url: asset(ASSET_FOLDERS.case07, "Picture9.PNG"), caption: "SCD Type 2", description: "Historical tracking model." },
        { url: asset(ASSET_FOLDERS.case07, "Picture10.PNG"), caption: "Updated SCD Records", description: "Historical state view." },
        { url: asset(ASSET_FOLDERS.case07, "Picture11.PNG"), caption: "SCD Staging", description: "Incoming roster changes." },
        { url: asset(ASSET_FOLDERS.case07, "Picture12.PNG"), caption: "SCD Merge", description: "Historical merge logic." },
        { url: asset(ASSET_FOLDERS.case07, "Picture13.PNG"), caption: "SCD Merge Step 1", description: "Merge implementation detail." },
        { url: asset(ASSET_FOLDERS.case07, "Picture14.PNG"), caption: "SCD Merge Step 2", description: "Merge implementation detail." },
        { url: asset(ASSET_FOLDERS.case07, "Picture15.PNG"), caption: "SCD Merge Step 3", description: "Final merge implementation detail." },
        { url: asset(ASSET_FOLDERS.case07, "Picture24.png"), caption: "Picture 24", description: "Additional project screenshot." }
      
      ],

      results: [
        { metric: "5", label: "Hierarchy Levels" },
        { metric: "$42B", label: "Portfolio Context" },
        { metric: "SCD 2", label: "Historical Roster Tracking" },
        { metric: "TRY_CAST", label: "Defensive Data Handling" }
      ]
    },

    // --------------------------------------------------------------
    // CASE STUDY 08
    // --------------------------------------------------------------

    {
      id: "inventory-data-migration",
      title: "Inventory Data Migration to Microsoft Fabric Lakehouse",
      tagline: "Automating on-premises PostgreSQL inventory migration with an On-premises Data Gateway, Fabric Pipeline and Delta Lake.",
      category: "microsoft-fabric",
      featured: true,
      role: "Data Engineer",
      timeline: "Microsoft Fabric Case Study",
      image: asset(ASSET_FOLDERS.case08, "Picture1.jpg"),
      showHero: false,
      demoUrl: "",
      githubUrl: "https://github.com/shubhampandey11aug/my-portfolio/tree/main/assets/Case%20Study%2008%20Inventory%20Data%20Migration%20to%20Microsoft%20Fabric%20Lakehouse",
      metrics: "12 warehouses | up to 22,000 transactions/day",
      tags: ["Microsoft Fabric", "PostgreSQL", "On-premises Data Gateway", "Lakehouse", "Delta Lake", "Copy Data", "Audit Logging"],

      details: {
        overview: "RetailCore's inventory data remained on an on-premises PostgreSQL server while analytics was moving to Microsoft Fabric.",
        keyFeatures: ["Secure gateway connectivity", "Copy Data pipeline", "Full extract and overwrite", "Delta Lake target", "Timestamped audit logging", "Supervisor-triggered execution"],
        technicalChallenge: "Manual CSV export created 12–36 hours of latency and left no machine-generated audit trail.",
        solution: "Connect PostgreSQL through the On-premises Data Gateway, execute a Fabric Copy Data pipeline and write the inventory snapshot to a governed Lakehouse Delta table with audit logging."
      },

      writeup: {
        executiveSummary: "RetailCore Ltd operates twelve warehouses with inventory maintained in an on-premises PostgreSQL database. The project replaces the human integration layer with a secure Microsoft Fabric Pipeline using an On-premises Data Gateway and a governed Lakehouse destination.",
        problemStatement: "Manual export and upload created 12–36 hours of reporting latency. With up to 22,000 inventory transactions per day, the delay could affect replenishment and allocation decisions, while the absence of machine-generated audit logs weakened lineage and governance.",
        objectives: [
          "Securely connect on-premises PostgreSQL to Microsoft Fabric.",
          "Remove manual CSV export from the data-transfer workflow.",
          "Use a Fabric Copy Data activity for inventory ingestion.",
          "Perform a full extract and overwrite into a governed Lakehouse Delta table.",
          "Record pipeline execution details through an audit table.",
          "Allow the warehouse supervisor to trigger the pipeline once daily entries are confirmed complete."
        ],
        targetAudience: "Retail operations, warehouse supervisors, merchandising, inventory analytics and data engineering teams.",
        overview: "A secure on-premises-to-cloud data transfer pattern for inventory analytics.",
        technologyUsed: ["Microsoft Fabric", "PostgreSQL", "On-premises Data Gateway", "Data Pipeline", "Copy Data", "Lakehouse", "Delta Lake"],
        projectScope: "Gateway connectivity, source table access, full snapshot ingestion, Delta persistence and execution auditing.",
        solution: "Replace PostgreSQL → CSV → Upload → Reporting with PostgreSQL → Data Gateway → Fabric Pipeline → Lakehouse.",
        challenges: [
          "On-premises source connectivity",
          "Manual CSV exports",
          "12–36 hour reporting latency",
          "Need for secure cloud access",
          "Missing automated audit trail"
        ]
      },

      methodology: {
        architectureOverview: "The PostgreSQL source remains inside the organisation's network. The On-premises Data Gateway provides the secure bridge to Fabric. A Copy Data pipeline extracts the Inventory Snapshot table and overwrites the governed Lakehouse Delta table. A Set Variable/audit step records timestamps, transferred row counts and execution status.",
        technicalDecisions: [
          {
            decision: "Use the On-premises Data Gateway",
            rationale: "The PostgreSQL database remains private and does not need to be exposed to the public internet."
          },
          {
            decision: "Use full extract and overwrite",
            rationale: "The project is based on an inventory snapshot transfer, so the Lakehouse target is refreshed with the latest confirmed source state."
          },
          {
            decision: "Add machine-generated audit logging",
            rationale: "Pipeline execution details provide an auditable record of when and how inventory data was transferred."
          }
        ],
        securityAndReliability: "The gateway provides the secure bridge between the private PostgreSQL environment and Fabric. Controlled pipeline execution and audit records improve repeatability, lineage and operational accountability."
      },

      steps: [
        {
          stepNumber: 1,
          phase: "Phase 1: Connectivity",
          title: "Configure the On-premises Data Gateway",
          description: "Establish the secure connection between the internal PostgreSQL server and Microsoft Fabric without exposing the source database publicly.",
          deliverables: ["Gateway connection", "PostgreSQL connectivity"],
          tools: ["On-premises Data Gateway", "PostgreSQL", "Microsoft Fabric"]
        },
        {
          stepNumber: 2,
          phase: "Phase 2: Source Preparation",
          title: "Create Schema and Inventory Table",
          description: "Prepare the source-side schema/table structure and validate the inventory snapshot used by the pipeline.",
          deliverables: ["Inventory Snapshot table", "Source validation"],
          tools: ["PostgreSQL"]
        },
        {
          stepNumber: 3,
          phase: "Phase 3: Pipeline",
          title: "Build the Fabric Copy Data Pipeline",
          description: "Configure Copy Data to retrieve inventory data directly from PostgreSQL through the gateway.",
          deliverables: ["Fabric pipeline", "Source and destination mappings"],
          tools: ["Fabric Data Pipeline", "Copy Data"]
        },
        {
          stepNumber: 4,
          phase: "Phase 4: Lakehouse",
          title: "Load the Delta Inventory Snapshot",
          description: "Perform a full extract and overwrite into the governed Lakehouse Delta table.",
          deliverables: ["Inventory Delta table", "Current snapshot"],
          tools: ["Fabric Lakehouse", "Delta Lake"]
        },
        {
          stepNumber: 5,
          phase: "Phase 5: Audit",
          title: "Record Execution and Transfer Metrics",
          description: "Write a timestamped audit record containing execution details, transferred row counts and pipeline status.",
          deliverables: ["Audit table", "Run status", "Row-count audit"],
          tools: ["Fabric Pipeline", "Audit Logging"]
        }
      ],

      gallery: [
        { url: asset(ASSET_FOLDERS.case08, "Picture2.png"), caption: "On-premises Data Gateway", description: "Secure source connectivity." },
        { url: asset(ASSET_FOLDERS.case08, "Picture3.png"), caption: "Source Schema and Table", description: "Inventory source setup." },
        { url: asset(ASSET_FOLDERS.case08, "Picture4.png"), caption: "Inventory Table", description: "Source inventory snapshot." },
        { url: asset(ASSET_FOLDERS.case08, "Picture5.png"), caption: "Data Pipeline", description: "Fabric ingestion pipeline." },
        { url: asset(ASSET_FOLDERS.case08, "Picture6.png"), caption: "Copy Data Destination", description: "Lakehouse destination." },
        { url: asset(ASSET_FOLDERS.case08, "Picture7.png"), caption: "Copy Data Source", description: "PostgreSQL source configuration." },
        { url: asset(ASSET_FOLDERS.case08, "Picture8.PNG"), caption: "Data Flow", description: "End-to-end transfer flow." },
        { url: asset(ASSET_FOLDERS.case08, "Picture9.PNG"), caption: "Audit Logging Table", description: "Execution and transfer audit structure." }
      
      ],

      results: [
        { metric: "12", label: "Warehouse Locations" },
        { metric: "22,000", label: "Max Transactions / Day Context" },
        { metric: "12–36h", label: "Manual Latency Addressed" },
        { metric: "Gateway", label: "Secure On-Prem Connectivity" }
      ]
    },

    // --------------------------------------------------------------
    // CASE STUDY 09
    // --------------------------------------------------------------

    {
      id: "customer-data-trust-transformation",
      title: "Customer Data Trust Transformation",
      tagline: "Standardising customer data with Microsoft Fabric Dataflow Gen2, reference-data lookups and governed Customer_Silver output.",
      category: "microsoft-fabric",
      featured: false,
      role: "Data Analyst / Data Engineer",
      timeline: "Microsoft Fabric Case Study",
      image: asset(ASSET_FOLDERS.case09, "Picture1.jpg"),
      showHero: false,
      demoUrl: "",
      githubUrl: "https://github.com/shubhampandey11aug/my-portfolio/tree/main/assets/Case%20Study%2009%20Customer%20Data%20Trust%20Transformation",
      metrics: "Customer_Silver as the trusted analytical contract",
      tags: ["Microsoft Fabric", "Dataflow Gen2", "Data Cleaning", "Customer 360", "Reference Data", "Power Query", "Data Standardisation"],

      details: {
        overview: "TelcoPrime's Customer 360 initiative is constrained by inconsistent addresses, state values and contact information accumulated over multiple years.",
        keyFeatures: ["Dataflow Gen2", "Reference-data lookup", "Address standardisation", "State normalisation", "Phone cleansing", "Customer_Silver contract"],
        technicalChallenge: "Inconsistent customer formats reduce the trustworthiness of customer analytics and downstream outreach.",
        solution: "Use Dataflow Gen2 to promote/merge reference data, standardise address and state fields, clean phone numbers and publish Customer_Silver."
      },

      writeup: {
        executiveSummary: "TelcoPrime is rebuilding its customer foundation for a Customer 360 initiative. The project focuses on low-code Microsoft Fabric transformation using Dataflow Gen2, reference-data lookups and standardisation rules for address, state and contact information.",
        problemStatement: "Customer records accumulated without consistent enterprise validation. Addresses exist in conflicting formats, states use abbreviations and full names inconsistently, and phone fields contain punctuation and corrupted values.",
        objectives: [
          "Create a standardised Customer_Silver analytical contract.",
          "Use reference data to standardise state information.",
          "Clean and standardise address fields.",
          "Normalise phone numbers into digits-only values.",
          "Separate transformation stages so each data-quality operation is traceable.",
          "Produce a customer foundation suitable for Customer 360 consumption."
        ],
        targetAudience: "Customer 360 teams, marketing, retention analytics, data quality teams and business stakeholders.",
        overview: "A low-code customer-data standardisation workflow built with Dataflow Gen2.",
        technologyUsed: ["Microsoft Fabric", "Dataflow Gen2", "Power Query", "Reference Data", "Customer 360"],
        projectScope: "Customer Bronze preparation, reference-data merge, address/state/contact standardisation and Customer_Silver output.",
        solution: "Promote and merge reference data, split and recombine address attributes, standardise states and cleanse phone values using Power Query transformations.",
        challenges: [
          "Multiple address suffix variants",
          "Inconsistent state representations",
          "Punctuation-heavy phone numbers",
          "Corrupted contact values",
          "Need for a single trusted Customer_Silver schema"
        ]
      },

      methodology: {
        architectureOverview: "Customer Bronze data is transformed through Dataflow Gen2. Reference state data is promoted and merged with customer data. Address components are split and recombined, unnecessary columns are removed, and phone values are converted to digits-only strings with a 10-digit validation rule before publishing Customer_Silver.",
        technicalDecisions: [
          {
            decision: "Use Dataflow Gen2 for low-code cleansing",
            rationale: "The transformation is primarily standardisation and reference-data integration, making a governed visual transformation flow appropriate."
          },
          {
            decision: "Use reference data for state standardisation",
            rationale: "A governed lookup avoids maintaining state mappings independently across downstream consumers."
          },
          {
            decision: "Validate phone numbers after digit extraction",
            rationale: "Removing punctuation first creates a consistent comparison and allows only 10-digit values to pass the final rule."
          }
        ],
        securityAndReliability: "The Customer_Silver schema becomes the shared analytical contract. Standardisation steps are explicit and reusable, reducing the variation that would otherwise propagate into downstream Customer 360 analytics."
      },

      steps: [
        {
          stepNumber: 1,
          phase: "Phase 1: Bronze Preparation",
          title: "Load and Promote Customer Data",
          description: "Bring the customer Bronze table into the Dataflow Gen2 transformation flow and prepare it for reference-data integration.",
          deliverables: ["Bronze customer input", "Transformation flow"],
          tools: ["Microsoft Fabric", "Dataflow Gen2"]
        },
        {
          stepNumber: 2,
          phase: "Phase 2: Reference Data",
          title: "Merge State Reference Data",
          description: "Promote the reference table and merge it with customer records to standardise state values.",
          deliverables: ["Reference lookup", "Standardised state values"],
          tools: ["Dataflow Gen2", "Power Query"]
        },
        {
          stepNumber: 3,
          phase: "Phase 3: Address Standardisation",
          title: "Split, Clean and Recombine Address Fields",
          description: "Split address components, remove unnecessary columns and merge the cleaned values back into the customer dataset.",
          deliverables: ["Clean address structure"],
          tools: ["Power Query", "Dataflow Gen2"]
        },
        {
          stepNumber: 4,
          phase: "Phase 4: Contact Cleansing",
          title: "Normalise Phone Numbers",
          description: "Trim the phone value, keep digits only and retain the value only when it contains exactly ten digits.",
          deliverables: ["Clean phone column", "Invalid-value handling"],
          tools: ["Power Query M"]
        },
        {
          stepNumber: 5,
          phase: "Phase 5: Trusted Output",
          title: "Publish Customer_Silver",
          description: "Publish the standardised customer dataset as the trusted schema for downstream Customer 360 consumption.",
          deliverables: ["Customer_Silver", "Standardised customer foundation"],
          tools: ["Microsoft Fabric", "Dataflow Gen2"]
        }
      ],

      gallery: [
        { url: asset(ASSET_FOLDERS.case09, "Picture2.png"), caption: "Bronze Customer Table", description: "Source customer dataset." },
        { url: asset(ASSET_FOLDERS.case09, "Picture3.png"), caption: "Promote Reference Data", description: "Reference-data preparation." },
        { url: asset(ASSET_FOLDERS.case09, "Picture4.png"), caption: "Merge State and Customer", description: "Reference-data lookup integration." },
        { url: asset(ASSET_FOLDERS.case09, "Picture5.png"), caption: "Remove Columns", description: "Dataflow field cleanup." },
        { url: asset(ASSET_FOLDERS.case09, "Picture6.png"), caption: "Split Address Columns", description: "Address transformation." },
        { url: asset(ASSET_FOLDERS.case09, "Picture7.png"), caption: "Split Columns — Detail", description: "Additional address transformation." },
        { url: asset(ASSET_FOLDERS.case09, "Picture8.png"), caption: "Merge Address and Customer", description: "Recombining cleaned customer attributes." },
        { url: asset(ASSET_FOLDERS.case09, "Picture9.png"), caption: "Expand Lookup", description: "Expanding reference-data attributes." },
        { url: asset(ASSET_FOLDERS.case09, "Picture10.png"), caption: "Final Column Cleanup", description: "Removing unnecessary transformation fields." },
        { url: asset(ASSET_FOLDERS.case09, "Picture11.png"), caption: "Clean Phone Column", description: "Digits-only phone standardisation." },
        { url: asset(ASSET_FOLDERS.case09, "Picture12.png"), caption: "Clean Customer Data", description: "Final standardised customer output." }
      
      ],

      results: [
        { metric: "Customer_Silver", label: "Trusted Data Contract" },
        { metric: "10-digit", label: "Phone Validation Rule" },
        { metric: "6+", label: "Address Variants Addressed" },
        { metric: "Low-Code", label: "Transformation Approach" }
      ]
    },

    // --------------------------------------------------------------
    // CASE STUDY 10
    // --------------------------------------------------------------

    {
      id: "live-market-intelligence",
      title: "Live Market Intelligence",
      tagline: "A Microsoft Fabric Real-Time Intelligence platform for tick ingestion, KQL analytics, live dashboards and Activator alerts.",
      category: "microsoft-fabric",
      featured: true,
      role: "Data Engineer / Analytics Engineer",
      timeline: "Microsoft Fabric Real-Time Intelligence Case Study",
      image: asset(ASSET_FOLDERS.case10, "Picture1.jpg"),
      showHero: false,
      demoUrl: "",
      githubUrl: "https://github.com/shubhampandey11aug/my-portfolio/tree/main/assets/Case%20Study%2010%20Live%20Market%20Intelligence",
      metrics: "30-second dashboard refresh + automated drawdown alerting",
      tags: ["Microsoft Fabric", "Eventstream", "KQL Database", "Real-Time Intelligence", "KQL", "Activator", "Eventhouse", "Dashboard"],

      details: {
        overview: "VelocityTrade Capital needs to move from batch-refreshed prices to governed real-time market intelligence for algorithmic trading.",
        keyFeatures: ["Tick ingestion", "KQL Database", "Eight analytics queries", "30-second dashboard", "Activator alert", "Configuration audit log"],
        technicalChallenge: "Batch-refreshed market data constrains systematic strategies that depend on low-latency price information.",
        solution: "Eventstream ingests StockMarketSample tick by tick, KQL models the data, queries generate market analytics, Real-Time Intelligence visualises the results and Activator triggers automated alerts."
      },

      writeup: {
        executiveSummary: "VelocityTrade Capital operates in an environment where market-data fidelity and latency directly affect automated trading decisions. The project replaces batch-refreshed market data with a governed Microsoft Fabric Real-Time Intelligence pipeline.",
        problemStatement: "Batch-refreshed prices have become a structural liability for systematic strategies. The trading environment requires a market-data feed that can be monitored, analysed and alerted on continuously.",
        objectives: [
          "Ingest StockMarketSample tick by tick using Eventstream.",
          "Define the KQL Database and StockTicks schema before events land.",
          "Create a governed library of KQL analytics queries.",
          "Build live indicators for prices, volatility, returns, volume, drawdowns and anomalies.",
          "Configure Activator to detect drawdown conditions and suppress duplicates within the alert window.",
          "Maintain an audit log of configuration changes.",
          "Provide a Real-Time Intelligence dashboard refreshing every 30 seconds."
        ],
        targetAudience: "Algorithmic trading, market-risk, data engineering, analytics and trading-operations teams.",
        overview: "A real-time market intelligence architecture from tick ingestion to alerting.",
        technologyUsed: ["Microsoft Fabric", "Eventstream", "Eventhouse", "KQL Database", "KQL", "Real-Time Intelligence", "Activator"],
        projectScope: "Real-time ingestion, KQL modelling, analytics queries, automated alerting, governance and live dashboarding.",
        solution: "Connect Eventstream to KQL, validate analytics against live data, visualise real-time indicators and trigger governed alerts from defined market conditions.",
        challenges: [
          "Batch latency",
          "Real-time event routing",
          "Schema readiness before event arrival",
          "Continuous analytics",
          "Alert deduplication",
          "Configuration governance"
        ]
      },

      methodology: {
        architectureOverview: "StockMarketSample is ingested continuously through Fabric Eventstream and routed into a KQL Database. The StockTicks schema is defined before data lands. KQL queries calculate latest prices, volatility, returns, volume surges, drawdowns, anomalies, pipeline freshness and data integrity. Real-Time Intelligence provides the dashboard, while Activator handles the drawdown alert.",
        technicalDecisions: [
          {
            decision: "Use Eventstream for continuous ingestion",
            rationale: "Tick data is event-driven and requires a continuous routing mechanism rather than a batch pipeline."
          },
          {
            decision: "Use KQL Database for real-time analytics",
            rationale: "The case requires low-latency querying of continuously arriving market events and operational freshness signals."
          },
          {
            decision: "Use Activator for governed alerting",
            rationale: "The alert condition can be evaluated continuously and routed automatically without relying on manual dashboard monitoring."
          }
        ],
        securityAndReliability: "Direct writes to KQL tables are restricted and configuration changes are captured in an audit log. The end-to-end trace covers sample source, Eventstream, KQL data, analytics, dashboard and alert."
      },

      steps: [
        {
          stepNumber: 1,
          phase: "Phase 1: Real-Time Foundation",
          title: "Provision Workspace and Eventhouse",
          description: "Prepare the Fabric workspace and real-time environment required for continuous market-event processing.",
          deliverables: ["Workspace", "Eventhouse"],
          tools: ["Microsoft Fabric", "Eventhouse"]
        },
        {
          stepNumber: 2,
          phase: "Phase 2: KQL Data Model",
          title: "Define StockTicks Schema",
          description: "Create the KQL Database structures before live events begin arriving so the stream has a governed analytical destination.",
          deliverables: ["KQL Database", "StockTicks schema"],
          tools: ["KQL Database", "KQL"]
        },
        {
          stepNumber: 3,
          phase: "Phase 3: Streaming",
          title: "Connect Eventstream to KQL",
          description: "Configure Eventstream to continuously ingest StockMarketSample tick data and route it into the governed KQL destination.",
          deliverables: ["Eventstream connection", "Continuous ingestion"],
          tools: ["Eventstream", "KQL Database"]
        },
        {
          stepNumber: 4,
          phase: "Phase 4: Analytics",
          title: "Develop KQL Market Analytics",
          description: "Build and validate queries for latest prices, volatility, returns, volume surges, drawdowns, anomalies, pipeline freshness and data integrity.",
          deliverables: ["Governed KQL query library", "Validated analytics"],
          tools: ["KQL"]
        },
        {
          stepNumber: 5,
          phase: "Phase 5: Alerts & Visualisation",
          title: "Configure Activator and Real-Time Dashboard",
          description: "Create the drawdown alert and a live dashboard with market-price, volatility and volume indicators refreshed every 30 seconds.",
          deliverables: ["Activator alert", "Real-Time dashboard", "Audit log"],
          tools: ["Activator", "Real-Time Intelligence", "KQL"]
        }
      ],

      gallery: [
        { url: asset(ASSET_FOLDERS.case10, "Picture2.png"), caption: "Workspace & Eventhouse", description: "Real-time environment provisioning." },
        { url: asset(ASSET_FOLDERS.case10, "Picture3.png"), caption: "KQL Schema Definition", description: "Schema defined before event arrival." },
        { url: asset(ASSET_FOLDERS.case10, "Picture4.png"), caption: "Governed Eventstream", description: "Continuous event routing into KQL." },
        { url: asset(ASSET_FOLDERS.case10, "Picture5.png"), caption: "KQL Query 01", description: "Real-time market analytics." },
        { url: asset(ASSET_FOLDERS.case10, "Picture6.png"), caption: "KQL Query 02", description: "Real-time market analytics." },
        { url: asset(ASSET_FOLDERS.case10, "Picture7.png"), caption: "KQL Query 03", description: "Real-time market analytics." },
        { url: asset(ASSET_FOLDERS.case10, "Picture8.png"), caption: "KQL Query 04", description: "Real-time market analytics." },
        { url: asset(ASSET_FOLDERS.case10, "Picture9.png"), caption: "KQL Query 05", description: "Real-time market analytics." },
        { url: asset(ASSET_FOLDERS.case10, "Picture10.png"), caption: "KQL Query 06", description: "Real-time market analytics." },
        { url: asset(ASSET_FOLDERS.case10, "Picture11.png"), caption: "KQL Query 07", description: "Real-time market analytics." },
        { url: asset(ASSET_FOLDERS.case10, "Picture12.png"), caption: "Drawdown Alert", description: "Activator drawdown alert configuration." },
        { url: asset(ASSET_FOLDERS.case10, "Picture13.png"), caption: "Audit Log", description: "Configuration-change audit log." },
        { url: asset(ASSET_FOLDERS.case10, "Picture14.png"), caption: "Real-Time Dashboard", description: "Live market-price, volatility and volume indicators." },
        { url: asset(ASSET_FOLDERS.case10, "Picture15.png"), caption: "Real-Time Dashboard Detail", description: "Additional live dashboard view." }
      
      ],

      results: [
        { metric: "30 sec", label: "Dashboard Refresh" },
        { metric: "8", label: "Governed Analytics Queries" },
        { metric: "Tick-by-Tick", label: "Market Data Ingestion" },
        { metric: "Activator", label: "Automated Alerting" }
      ]
    }

  ]
};



// Portfolio filter taxonomy. A project can appear in multiple tool/domain filters.
const projectFilters = {
  "microsoft-fabric": "Microsoft Fabric",
  "databricks": "Databricks",
  "power-bi": "Power BI",
  "python-sql": "Python & SQL",
  "energy-analytics": "Energy Analytics",
  "data-engineering": "Data Engineering"
};

function deriveProjectFilters(project) {
  const t = (project.tags || []).join(" ").toLowerCase();
  const title = (project.title || "").toLowerCase();
  const result = new Set(["microsoft-fabric", "data-engineering"]);
  if (/databricks|delta lake|pyspark/.test(t + " " + title)) result.add("databricks");
  if (/power bi|powerbi/.test(t + " " + title)) result.add("power-bi");
  if (/python|sql|pyspark|kql|t-sql/.test(t + " " + title)) result.add("python-sql");
  if (/energy|market|forecast|trading|power/.test(t + " " + title)) result.add("energy-analytics");
  return [...result];
}

portfolioData.projects.forEach(p => {
  p.filters = deriveProjectFilters(p);
  // Guardrail: Picture1 is card-only. Case-study pages must use gallery entries starting at Picture2.
  p.showHero = false;
  p.gallery = (p.gallery || []).filter(g => !/Picture1\./i.test(g.url));
});
portfolioData.projectFilters = projectFilters;

// Export to global scope for index.html, app.js and project.html
if (typeof window !== "undefined") {
  window.portfolioData = portfolioData;
}
