/**
 * ====================================================================
 * PORTFOLIO DATA CONFIGURATION
 * ====================================================================
 * Easily customize your portfolio by editing the fields below.
 * You can paste your resume details directly into this file.
 * All sections (Hero, About, Skills, Experience, Education, Projects)
 * will update automatically on your website!
 */

const portfolioData = {
  // --- Personal & Contact Information ---
  personal: {
    name: "Shubham Pandey",
    role: "DATA, ANALYTICS & AI ENGINEER",
    tagline: "From raw data to intelligent insights — building scalable data platforms, analytics, and AI solutions that drive business impact.",
    location: "Gurgaon, IN",
    email: "shubhampandey11aug@gmail.com",
    github: "https://github.com/shubhampandey11aug",
    linkedin: "https://www.linkedin.com/in/shubhampandey08/",
    resumePdf: "assets/resume.pdf", // Place your resume PDF in the assets folder
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=500&auto=format&fit=crop&q=80", // Replace with your profile photo URL or local path
    stats: [
      { label: "Years Experience", value: "12+" },
      { label: "Projects Completed", value: "15+" },
     
    ]
  },

  // --- About Me & Biography ---
  about: {
    heading: "Passionate about transforming complex challenges into elegant solutions",
    paragraphs: [
      "I am a results-driven Data, Analytics & AI Engineer with hands-on experience designing and delivering modern data platforms, analytics solutions, and scalable data engineering architectures. My expertise spans Microsoft Fabric, Databricks, Power BI, PySpark, SQL, and cloud-based data ecosystems, helping organizations transform complex data into trusted insights and measurable business outcomes.",
      "My journey began with a passion for understanding how data powers business decisions, which evolved into building end-to-end data solutions—from ingestion and transformation pipelines to lakehouse architectures, semantic models, interactive dashboards, and AI-enabled analytics. I enjoy solving complex data challenges and creating scalable systems that empower organizations to make faster, smarter decisions.",
      "When I'm not developing data pipelines or optimizing analytics workloads, I explore emerging AI technologies, modern data architecture patterns, and automation opportunities that enhance productivity and decision-making. I am continuously learning, experimenting, and sharing knowledge to stay at the forefront of the rapidly evolving data and AI landscape."
    ],
    highlights: [
      "Specialized in Microsoft Fabric, Databricks, Power BI, PySpark, SQL, Azure, and modern data engineering ecosystems",
      "Experienced in building scalable data pipelines, lakehouse architectures, ETL/ELT workflows, and analytics solutions for complex business requirements.",
      "Focused on performance & reliability, optimizing data transformations, Spark workloads, SQL queries, and data pipelines for efficient processing.",
      "Strong advocate for data quality & governance, with an emphasis on reliable, trusted, and decision-ready data."
      "Hands-on with AI & GenAI, exploring intelligent automation, AI-powered analytics, and modern agentic data workflows."
      "End-to-end problem solver, connecting data engineering, business intelligence, and AI to deliver measurable business outcomes."
    ]
  },

  // --- Technical Skills Matrix ---
skills: [
  {
    category: "Data Engineering",
    icon: "database",
    items: [
      { name: "PySpark / Apache Spark", level: "Advanced" },
      { name: "SQL / T-SQL", level: "Expert" },
      { name: "ETL / ELT Pipelines", level: "Advanced" },
      { name: "Data Transformation & Optimization", level: "Advanced" },
      { name: "Data Modeling & Dimensional Design", level: "Advanced" },
      { name: "Delta Lake / Lakehouse Architecture", level: "Advanced" }
    ]
  },
  {
    category: "Microsoft Fabric",
    icon: "layers",
    items: [
      { name: "Microsoft Fabric", level: "Advanced" },
      { name: "Data Factory & Pipelines", level: "Advanced" },
      { name: "Lakehouse & OneLake", level: "Advanced" },
      { name: "Fabric Notebooks / PySpark", level: "Advanced" },
      { name: "Data Warehouse", level: "Advanced" },
      { name: "Dataflows Gen2", level: "Intermediate" }
    ]
  },
  {
    category: "Databricks & Cloud Data",
    icon: "cloud",
    items: [
      { name: "Databricks", level: "Advanced" },
      { name: "Apache Spark", level: "Advanced" },
      { name: "Delta Lake", level: "Advanced" },
      { name: "Azure Data Services", level: "Advanced" },
      { name: "Data Lake / Cloud Storage", level: "Advanced" },
      { name: "Medallion Architecture", level: "Advanced" }
    ]
  },
  {
    category: "Business Intelligence",
    icon: "bar-chart",
    items: [
      { name: "Power BI", level: "Advanced" },
      { name: "DAX", level: "Advanced" },
      { name: "Power Query / M", level: "Advanced" },
      { name: "Semantic Models", level: "Advanced" },
      { name: "Data Visualization & Storytelling", level: "Advanced" },
      { name: "KPI & Executive Dashboards", level: "Advanced" }
    ]
  },
  {
    category: "AI & GenAI",
    icon: "sparkles",
    items: [
      { name: "Generative AI", level: "Intermediate" },
      { name: "LLM Applications", level: "Intermediate" },
      { name: "AI-Powered Analytics", level: "Intermediate" },
      { name: "AI Agents & Automation", level: "Intermediate" },
      { name: "RAG & Vector Search", level: "Intermediate" },
      { name: "Prompt Engineering", level: "Advanced" }
    ]
  },
  {
    category: "Data Quality & Governance",
    icon: "shield-check",
    items: [
      { name: "Data Quality & Validation", level: "Advanced" },
      { name: "Data Governance", level: "Intermediate" },
      { name: "Data Lineage", level: "Intermediate" },
      { name: "Performance Optimization", level: "Advanced" },
      { name: "Error Handling & Monitoring", level: "Advanced" },
      { name: "CI/CD & Version Control", level: "Advanced" }
    ]
  }
],

// --- Work Experience Timeline ---
experience: [
  {
    role: "Data, Analytics & AI Engineer",
    company: "Your Current Organization",
    period: "2023 - Present",
    location: "India",
    description:
      "Designing and delivering modern data engineering and analytics solutions that transform complex business data into scalable platforms, trusted insights, and intelligent decision-making.",
    achievements: [
      "Designed and implemented scalable data pipelines using Microsoft Fabric, PySpark, SQL, and Lakehouse architecture to support enterprise analytics workloads.",
      "Built medallion-based data architectures across Bronze, Silver, and Gold layers, improving data reliability, reusability, and downstream reporting.",
      "Developed Power BI semantic models and executive dashboards, translating complex business requirements into actionable KPIs and decision-ready insights.",
      "Optimized Spark and SQL workloads through efficient transformations, partitioning, query optimization, and incremental processing to improve pipeline performance.",
      "Explored AI and GenAI use cases including intelligent analytics, workflow automation, and AI-assisted data solutions."
    ],
    technologies: [
      "Microsoft Fabric",
      "Databricks",
      "PySpark",
      "SQL",
      "Power BI",
      "Azure",
      "Delta Lake",
      "Python"
    ]
  },
  {
    role: "Data Engineer / Analytics Developer",
    company: "Previous Organization",
    period: "2021 - 2023",
    location: "India",
    description:
      "Developed data pipelines, analytical solutions, and business intelligence applications supporting operational and management reporting.",
    achievements: [
      "Developed end-to-end ETL/ELT pipelines to ingest, transform, validate, and prepare data from multiple business sources.",
      "Implemented scalable PySpark and SQL transformations for large datasets, focusing on performance, data quality, and maintainability.",
      "Created Power BI dashboards and analytical models that converted operational data into meaningful business insights and performance indicators.",
      "Designed reusable data models and transformation frameworks to standardize reporting and reduce manual data preparation.",
      "Collaborated with business stakeholders to translate complex requirements into reliable data and analytics solutions."
    ],
    technologies: [
      "Python",
      "PySpark",
      "SQL",
      "Power BI",
      "Azure",
      "Databricks",
      "ETL / ELT",
      "Data Modeling"
    ]
  },
  {
    role: "Data Analyst / BI Developer",
    company: "Early Career Experience",
    period: "2020 - 2021",
    location: "India",
    description:
      "Worked on data analysis, reporting, visualization, and business intelligence initiatives to improve visibility into operational performance.",
    achievements: [
      "Developed interactive Power BI dashboards and reports to track business performance, operational metrics, and key KPIs.",
      "Performed data extraction, cleansing, transformation, and analysis using SQL, Excel, Power Query, and Python.",
      "Built reusable Power Query transformations and analytical datasets to streamline recurring reporting processes.",
      "Collaborated with stakeholders to identify reporting requirements, define KPIs, and translate business questions into data-driven insights."
    ],
    technologies: [
      "Power BI",
      "SQL",
      "Power Query",
      "DAX",
      "Python",
      "Excel",
      "Data Analysis"
    ]
  }
],

 // --- Education & Academic Background ---
education: [
  {
    degree: "Bachelor's Degree",
    institution: "Gautam Buddh Technical University",
    period: "2008 - 2012",
    location: "India",
    honors: "Electrical & Electronics Engineering",
    ]
  }
],
  // --- Certifications ---
certifications: [
  {
    name: "Data Analytics Certification",
    issuer: "INSAID",
    year: "Completed",
   
  },
  {
    name: "Electrical Design",
    issuer: "AEDEI",
    year: "Completed",
    
  }
],

// --- Current Professional Upskilling ---
upskilling: [
  {
    name: "Microsoft Fabric Analytics Engineer — DP-600",
    issuer: "Microsoft",
    status: "In Progress",
    focus: "Fabric Analytics, Dataflows, Lakehouse & Power BI"
  },
  {
    name: "Microsoft Fabric Data Engineer — DP-700",
    issuer: "Microsoft",
    status: "In Progress",
    focus: "Data Engineering, Pipelines, Lakehouse & ETL/ELT"
  },
  {
    name: "Databricks & Data Engineering",
    issuer: "Self-Directed Learning",
    status: "In Progress",
    focus: "Spark, Data Pipelines & Lakehouse Architecture"
  },
  {
    name: "Generative AI",
    issuer: "Professional Upskilling",
    status: "In Progress",
    focus: "GenAI, AI-powered analytics & intelligent data workflows"
  }
],

 // --- Featured & Detailed Projects ---
// Users can filter by category:
// 'all', 'fabric', 'databricks', 'power-bi', 'data-engineering', 'energy'

projects: [
  {
    id: "project-1",
    title: "Global Listing Intelligence Initiative",
    tagline:
      "Automated Microsoft Fabric Lakehouse ingestion for trusted, governed real-estate intelligence.",
    category: "fabric",
    featured: true,
    image:
      "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&auto=format&fit=crop&q=80",
    demoUrl: "",
    githubUrl: "",
    metrics:
      "Replaced 24–48 hour manual CSV consolidation with trusted data available by 7:00 AM daily",
    tags: [
      "Microsoft Fabric",
      "Lakehouse",
      "OneLake",
      "Data Pipelines",
      "ETL/ELT",
      "Data Engineering"
    ],
    details: {
      overview:
        "An automated Microsoft Fabric Lakehouse ingestion solution for an ultra-luxury real estate firm operating across London, Dubai, and New York. The solution replaced manual CSV consolidation with a governed and trusted data foundation.",
      keyFeatures: [
        "Automated ingestion into a Microsoft Fabric Lakehouse.",
        "Governed and standardized data processing.",
        "Automated replacement of manual CSV consolidation workflows.",
        "Daily trusted data availability by 7:00 AM."
      ],
      technicalChallenge:
        "Replacing a time-consuming manual CSV consolidation process while establishing a reliable and governed data foundation for a multi-continent operation.",
      solution:
        "Designed an automated Microsoft Fabric Lakehouse ingestion pipeline that streamlined data ingestion and created a trusted dataset for downstream analytics."
    }
  },

  {
    id: "project-2",
    title: "Incremental Data Ingestion Pipeline",
    tagline:
      "State-aware Microsoft Fabric pipeline for scalable, auditable Delta Lake ingestion.",
    category: "fabric",
    featured: true,
    image:
      "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&auto=format&fit=crop&q=80",
    demoUrl: "",
    githubUrl: "",
    metrics:
      "Automated incremental JSON ingestion using watermark-based state management",
    tags: [
      "Microsoft Fabric",
      "Data Pipelines",
      "Delta Lake",
      "JSON",
      "Incremental Load",
      "ETL"
    ],
    details: {
      overview:
        "A watermark-based, state-aware Microsoft Fabric pipeline designed for a multi-continent logistics provider. The solution replaced manual JSON file identification with a scalable and auditable ingestion framework.",
      keyFeatures: [
        "Watermark-based incremental ingestion.",
        "State-aware pipeline processing.",
        "Automated JSON file ingestion.",
        "Auditable Delta Lake data framework."
      ],
      technicalChallenge:
        "Eliminating manual file hunting while ensuring that only required incremental data is processed reliably.",
      solution:
        "Implemented a watermark-based state management approach within Microsoft Fabric to automate incremental JSON ingestion into a Delta Lake architecture."
    }
  },

  {
    id: "project-3",
    title: "Workforce Intelligence — Azure SQL to Lakehouse",
    tagline:
      "A governed Bronze-to-Silver employee data pipeline built with Microsoft Fabric.",
    category: "fabric",
    featured: true,
    image:
      "https://images.unsplash.com/photo-1556761175-b413da4baf72?w=800&auto=format&fit=crop&q=80",
    demoUrl: "",
    githubUrl: "",
    metrics:
      "Produced a trusted HR reporting layer across London, New York and Singapore",
    tags: [
      "Microsoft Fabric",
      "Azure SQL",
      "Lakehouse",
      "PySpark",
      "Data Quality",
      "Data Engineering"
    ],
    details: {
      overview:
        "A Microsoft Fabric Bronze-to-Silver pipeline that moves employee data from Azure SQL into a governed Lakehouse and prepares a trusted HR reporting layer.",
      keyFeatures: [
        "Azure SQL to Fabric Lakehouse ingestion.",
        "Bronze-to-Silver data transformation.",
        "Invalid-record quarantine.",
        "Record deduplication.",
        "Department-context enrichment.",
        "Trusted HR reporting layer."
      ],
      technicalChallenge:
        "Transforming operational employee data into a reliable reporting foundation while handling invalid and duplicate records.",
      solution:
        "Built a governed Bronze-to-Silver pipeline that quarantines invalid records, deduplicates data, enriches employee information, and produces a trusted reporting layer."
    }
  },

  {
    id: "project-4",
    title: "Financial Data Transformation with PySpark & Delta Lake",
    tagline:
      "Optimized enterprise financial data processing using PySpark and Delta Lake.",
    category: "data-engineering",
    featured: true,
    image:
      "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&auto=format&fit=crop&q=80",
    demoUrl: "",
    githubUrl: "",
    metrics:
      "Focused on performance, data quality, recovery, and scalable financial reporting",
    tags: [
      "Microsoft Fabric",
      "PySpark",
      "Delta Lake",
      "SQL",
      "Data Quality",
      "Lakehouse"
    ],
    details: {
      overview:
        "A financial data processing solution designed in Microsoft Fabric using PySpark and Delta Lake, focused on building a scalable architecture for enterprise-scale financial reporting.",
      keyFeatures: [
        "PySpark-based financial data transformation.",
        "Delta Lake architecture.",
        "Data quality enforcement.",
        "Pipeline performance optimization.",
        "Data recovery capabilities.",
        "Scalable financial reporting foundation."
      ],
      technicalChallenge:
        "Designing a scalable financial data processing architecture while maintaining data quality, recoverability, and efficient processing.",
      solution:
        "Designed and optimized a Microsoft Fabric pipeline using PySpark and Delta Lake with dedicated approaches for data quality, recovery, and performance."
    }
  },

  {
    id: "project-5",
    title: "Global Freight Forwarders — Logistics Data Modernization",
    tagline:
      "Modernizing high-volume logistics data ingestion with incremental Microsoft Fabric pipelines.",
    category: "fabric",
    featured: true,
    image:
      "https://images.unsplash.com/photo-1586528116493-da8b0b1a3b0e?w=800&auto=format&fit=crop&q=80",
    demoUrl: "",
    githubUrl: "",
    metrics:
      "Automated high-volume JSON shipment-log ingestion and reduced reporting latency",
    tags: [
      "Microsoft Fabric",
      "Delta Lake",
      "JSON",
      "Data Pipelines",
      "Incremental Load",
      "Logistics Analytics"
    ],
    details: {
      overview:
        "A Microsoft Fabric data modernization solution for a global freight company, automating the ingestion of high-volume JSON shipment logs into a reliable Delta Lake architecture.",
      keyFeatures: [
        "Automated JSON shipment-log ingestion.",
        "Watermark-based state management.",
        "Incremental data processing.",
        "Delta Lake-based architecture.",
        "Reliable and auditable ingestion.",
        "Reduced dependency on manual file selection."
      ],
      technicalChallenge:
        "Managing high-volume shipment data while eliminating manual file selection and ensuring reliable incremental processing.",
      solution:
        "Implemented a watermark-based incremental ingestion pipeline in Microsoft Fabric to automate shipment-log processing and deliver reliable data into Delta Lake."
    }
  },

  {
    id: "project-6",
    title: "Unified Commerce Analytics Platform",
    tagline:
      "Modernizing retail analytics with a Bronze–Silver–Gold Lakehouse and Power BI.",
    category: "power-bi",
    featured: true,
    image:
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&auto=format&fit=crop&q=80",
    demoUrl: "",
    githubUrl: "",
    metrics:
      "Unified modern Lakehouse architecture with Power BI star-schema analytics",
    tags: [
      "Microsoft Fabric",
      "Lakehouse",
      "Power BI",
      "Star Schema",
      "Data Modeling",
      "Analytics"
    ],
    details: {
      overview:
        "A modern retail analytics platform designed to replace legacy analytics approaches with a structured Bronze–Silver–Gold Lakehouse architecture and Power BI analytical model.",
      keyFeatures: [
        "Bronze–Silver–Gold Lakehouse architecture.",
        "Structured data transformation layers.",
        "Power BI integration.",
        "Star-schema analytical modeling.",
        "Modernized retail analytics foundation."
      ],
      technicalChallenge:
        "Modernizing legacy retail analytics while establishing a scalable architecture for business intelligence.",
      solution:
        "Designed a layered Lakehouse architecture and Power BI star schema to provide a structured foundation for retail analytics and reporting."
    }
  },

  {
    id: "project-7",
    title: "Live Market Intelligence",
    tagline:
      "Transforming batch market data into governed real-time intelligence for algorithmic trading.",
    category: "energy",
    featured: true,
    image:
      "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&auto=format&fit=crop&q=80",
    demoUrl: "",
    githubUrl: "",
    metrics:
      "Modernized batch market-data processing toward real-time intelligence",
    tags: [
      "Real-Time Analytics",
      "Market Data",
      "Data Engineering",
      "Microsoft Fabric",
      "Trading Analytics",
      "Data Governance"
    ],
    details: {
      overview:
        "A market intelligence solution focused on transforming batch market data into a governed real-time intelligence platform supporting algorithmic trading use cases.",
      keyFeatures: [
        "Real-time market intelligence architecture.",
        "Governed market-data processing.",
        "Transformation of batch workflows.",
        "Support for algorithmic trading analytics.",
        "Structured data foundation for market insights."
      ],
      technicalChallenge:
        "Moving from batch-oriented market data processing toward a more responsive and governed intelligence platform.",
      solution:
        "Designed a modern data architecture focused on real-time market intelligence, governance, and analytics for algorithmic trading scenarios."
    }
  },

  {
    id: "project-8",
    title: "Customer Data Trust Transformation",
    tagline:
      "Building a standardized Customer 360 foundation from inconsistent enterprise data.",
    category: "data-engineering",
    featured: false,
    image:
      "https://images.unsplash.com/photo-1556740749-887f6717d7e4?w=800&auto=format&fit=crop&q=80",
    demoUrl: "",
    githubUrl: "",
    metrics:
      "Established a trusted and standardized Customer 360 data foundation",
    tags: [
      "Customer 360",
      "Data Quality",
      "Data Standardization",
      "Data Engineering",
      "Lakehouse",
      "Analytics"
    ],
    details: {
      overview:
        "A data trust transformation initiative focused on converting inconsistent customer information into a trusted and standardized Customer 360 foundation.",
      keyFeatures: [
        "Customer data standardization.",
        "Data quality improvement.",
        "Unified customer foundation.",
        "Preparation for Customer 360 analytics.",
        "Trusted data architecture."
      ],
      technicalChallenge:
        "Addressing inconsistent customer data and creating a reliable foundation for unified customer analytics.",
      solution:
        "Designed a standardized data foundation focused on improving consistency, trust, and usability of customer information."
    }
  },

  {
    id: "project-9",
    title: "Inventory Data Migration to Microsoft Fabric",
    tagline:
      "Migrating on-premise PostgreSQL inventory data into a governed Fabric Lakehouse.",
    category: "fabric",
    featured: false,
    image:
      "https://images.unsplash.com/photo-1553413077-190dd305871c?w=800&auto=format&fit=crop&q=80",
    demoUrl: "",
    githubUrl: "",
    metrics:
      "Automated on-premise PostgreSQL inventory migration into a governed Lakehouse",
    tags: [
      "Microsoft Fabric",
      "PostgreSQL",
      "Lakehouse",
      "Data Migration",
      "ETL/ELT",
      "Data Engineering"
    ],
    details: {
      overview:
        "A data migration solution focused on moving on-premise PostgreSQL inventory data into a governed Microsoft Fabric Lakehouse.",
      keyFeatures: [
        "On-premise PostgreSQL integration.",
        "Automated inventory-data migration.",
        "Fabric Lakehouse architecture.",
        "Governed data storage.",
        "Modernized inventory analytics foundation."
      ],
      technicalChallenge:
        "Modernizing an on-premise inventory data source while establishing a governed cloud-based data foundation.",
      solution:
        "Designed an automated migration approach to bring PostgreSQL inventory data into a Microsoft Fabric Lakehouse for scalable analytics."
    }
  },

  {
    id: "project-10",
    title: "Market Risk Intelligence",
    tagline:
      "Automating daily FX market-data ingestion with Microsoft Fabric Warehouse and T-SQL.",
    category: "fabric",
    featured: false,
    image:
      "https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?w=800&auto=format&fit=crop&q=80",
    demoUrl: "",
    githubUrl: "",
    metrics:
      "Automated daily FX market-data ingestion for market-risk intelligence",
    tags: [
      "Microsoft Fabric",
      "Fabric Warehouse",
      "T-SQL",
      "FX Data",
      "Market Risk",
      "Data Engineering"
    ],
    details: {
      overview:
        "A market-risk intelligence solution designed to automate daily foreign-exchange market-data ingestion using Microsoft Fabric Warehouse and T-SQL.",
      keyFeatures: [
        "Automated daily FX data ingestion.",
        "Microsoft Fabric Warehouse.",
        "T-SQL-based data processing.",
        "Structured market-risk data foundation.",
        "Repeatable analytical workflow."
      ],
      technicalChallenge:
        "Creating a repeatable and reliable process for bringing daily FX market data into an analytical environment.",
      solution:
        "Implemented a Microsoft Fabric Warehouse and T-SQL-based architecture to automate daily FX market-data ingestion and support market-risk analytics."
    }
  },

  {
    id: "project-11",
    title: "Regulatory Data Governance & Historical Accountability",
    tagline:
      "Closing the regulatory accountability gap with governed T-SQL architecture and historical tracking.",
    category: "data-engineering",
    featured: true,
    image:
      "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800&auto=format&fit=crop&q=80",
    demoUrl: "",
    githubUrl: "",
    metrics:
      "Resilient data preparation with recursive hierarchy resolution and SCD Type 2 tracking",
    tags: [
      "Microsoft Fabric",
      "T-SQL",
      "Data Governance",
      "SCD Type 2",
      "Data Quality",
      "Regulatory Analytics"
    ],
    details: {
      overview:
        "A governed Microsoft Fabric T-SQL architecture designed to address regulatory accountability through resilient data preparation, recursive hierarchy resolution, and historical tracking.",
      keyFeatures: [
        "Governed T-SQL architecture.",
        "Resilient data preparation.",
        "Recursive hierarchy resolution.",
        "Historical SCD Type 2 tracking.",
        "Regulatory accountability framework.",
        "Improved historical data traceability."
      ],
      technicalChallenge:
        "Maintaining historical accountability while resolving complex hierarchies and preparing resilient regulatory data.",
      solution:
        "Designed a governed Microsoft Fabric T-SQL architecture incorporating recursive hierarchy resolution and SCD Type 2 historical tracking."
    }
  },

  {
    id: "project-12",
    title: "Energy Generation & DSM Analytics",
    tagline:
      "Power BI analytics for generation, forecasting accuracy, DSM impact, and financial performance.",
    category: "energy",
    featured: true,
    image:
      "https://images.unsplash.com/photo-1509391366360-2e959784a276?w=800&auto=format&fit=crop&q=80",
    demoUrl: "",
    githubUrl: "",
    metrics:
      "Analytics across a 50+ GW portfolio with 15% improvement in forecasting accuracy",
    tags: [
      "Power BI",
      "Energy Analytics",
      "DSM",
      "Forecasting",
      "SQL",
      "Power Query"
    ],
    details: {
      overview:
        "An energy analytics initiative focused on generation trends, forecasting accuracy, deviation settlement mechanism (DSM), revenue, and operational performance.",
      keyFeatures: [
        "Power BI dashboards for generation monitoring.",
        "Forecast accuracy analysis.",
        "DSM impact analysis.",
        "Revenue and financial-performance tracking.",
        "KPI development and trend analysis.",
        "Data-driven operational insights."
      ],
      technicalChallenge:
        "Converting large-scale generation and deviation data into actionable insights for forecasting, trading, and operational decision-making.",
      solution:
        "Combined data analysis, Power BI dashboards, historical datasets, and analytical workflows to track KPIs, identify performance gaps, and support improved forecasting and operational decisions."
    }
  }
]

// Export to global scope for browser usage
if (typeof window !== "undefined") {
  window.portfolioData = portfolioData;
}