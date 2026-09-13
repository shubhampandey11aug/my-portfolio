# 🚀 Modern Dynamic Portfolio & Case Studies for GitHub Pages

A modern, responsive personal portfolio website engineered specifically for 100% free hosting on **GitHub Pages**. 

Featuring:
- 🌓 **Dark / Light Mode** with automatic system preference detection & localStorage persistence.
- 🔍 **Live Search & Category Filtering** for projects.
- 📑 **Dedicated Project Case Study Pages (`project.html?id=...`)**:
  - Automatically opens in a **new tab** (`target="_blank"`) when clicking **"Show Details"** on any project card.
  - Complete **Executive Summary**, **Problem Statement**, **Core Objectives**, and **Target Audience**.
  - **Methodology & Architecture**: System architectural breakdowns and technical decision matrices (Decision vs. Rationale).
  - **Step-by-Step Implementation Guide**: Multi-phase build steps with deliverables, tools, and technical descriptions.
  - **Interactive Screenshot Gallery**: Responsive gallery cards with a click-to-enlarge **lightbox modal**.
  - **Measurable Outcomes & Key Metrics**: Highlighting performance wins, uptime, and user adoption.
- 📄 **Resume Integration**: Work experience timeline, academic background, technical skills matrix, and verified certifications.
- ⚡ **Zero Framework Dependencies**: Pure modern semantic HTML5, CSS3 (CSS Variables & Glassmorphism), and Vanilla ES6+ JavaScript. Fast load times, 100 Lighthouse performance score, zero build tools needed (`npm run build` not required).
- 🧩 **100% Data-Driven**: Update your entire portfolio (resume, projects, skills, contacts, deep-dive writeups) simply by editing `data.js`!
- 🛡️ **Jekyll-Free Deployment**: Includes `.nojekyll` to bypass Jekyll compilation and prevent GitHub Pages build errors.

---

## 📁 Project Structure

```
├── .nojekyll          # Crucial: Tells GitHub Pages to skip Jekyll build & serve static files directly
├── index.html         # Main landing page (Hero, About, Skills, Projects Grid, Timeline)
├── project.html       # Dedicated case study page (Writeup, Methodology, Steps, Gallery)
├── style.css          # Master stylesheet, CSS design tokens, dark/light themes, animations
├── data.js            # Central data configuration (Resume + Projects + Case Studies)
├── app.js             # Dynamic rendering engine, search/filtering, modal handlers
├── assets/            # Folder for your screenshots, avatar photo, and resume.pdf
└── README.md          # Setup and deployment guide
```

---

## 🚀 How to Host on GitHub Pages (Step-by-Step)

Deploying this portfolio to GitHub Pages takes less than 2 minutes:

### Option A: Via GitHub Web Interface
1. Create a new public repository on GitHub (e.g., `my-portfolio` or `username.github.io`).
2. Upload all the files (`.nojekyll`, `index.html`, `project.html`, `style.css`, `data.js`, `app.js`, and `assets` folder) directly into the repository root.
3. Go to **Settings** in your GitHub repository.
4. In the left sidebar, click on **Pages**.
5. Under **Build and deployment**:
   - **Source**: Select `Deploy from a branch`
   - **Branch**: Select `main` (or `master`) and `/ (root)` folder
   - Click **Save**.
6. Wait 30–60 seconds, then refresh the page. GitHub will give you your live URL:
   `https://<your-username>.github.io/<repository-name>/` (or `https://<your-username>.github.io/`)

### Option B: Via Git Command Line
```bash
git init
git add .
git commit -m "Initial portfolio commit"
git branch -M main
git remote add origin https://github.com/<your-username>/<your-repo-name>.git
git push -u origin main
```
Then go to **Settings > Pages** and enable GitHub Pages on the `main` branch.

---

## 🛠️ Resolving Jekyll Errors on GitHub Pages
If you ever encounter an error like `Error: Is a directory @ apply2files - /github/workspace/_site/assets` or Jekyll build failures:
- GitHub Pages runs Jekyll by default and tries to compile theme assets, which conflicts with custom static assets folders.
- The `.nojekyll` file included in this repository tells GitHub Pages to **completely bypass Jekyll** and serve your static HTML/CSS/JS files directly without any build step.

---

## ✏️ How to Customize with Your Resume & Projects

You do **not** need to edit messy HTML. Everything is controlled in `data.js`.

### 1. Update Personal & Resume Bio
Open `data.js` and edit the `personal` and `about` objects:
```javascript
personal: {
  name: "Your Name",
  role: "Your Professional Title",
  tagline: "Your summary sentence...",
  location: "City, Country / Remote",
  email: "your.email@example.com",
  github: "https://github.com/yourusername",
  linkedin: "https://linkedin.com/in/yourprofile",
  resumePdf: "assets/resume.pdf", // Link to your PDF in assets folder
  avatar: "assets/your-photo.jpg", // Or direct image URL
}
```

### 2. Add Your Projects & Detailed Case Studies
In `data.js`, add or edit objects in the `projects` array. Each project automatically gets its own case study view when clicking "Show Details":

```javascript
{
  id: "my-app",
  title: "My Awesome App",
  tagline: "One-line punchy description.",
  category: "fullstack", // Options: 'fullstack', 'frontend', 'ai-ml', 'cloud', 'tools'
  featured: true,
  role: "Lead Software Architect",
  timeline: "3 Months (2024)",
  image: "assets/projects/preview.png",
  demoUrl: "https://example.com/demo",
  githubUrl: "https://github.com/yourusername/repo",
  metrics: "500k+ events/sec",
  tags: ["TypeScript", "Next.js", "PostgreSQL"],

  // 1. In-depth Writeup
  writeup: {
    executiveSummary: "Detailed summary of the application...",
    problemStatement: "The business or engineering bottleneck you tackled...",
    objectives: [
      "Objective 1",
      "Objective 2"
    ],
    targetAudience: "Engineers, users, or clients..."
  },

  // 2. Methodology & Architecture
  methodology: {
    architectureOverview: "How data flows through the system...",
    technicalDecisions: [
      {
        decision: "Used ClickHouse for time-series aggregation",
        rationale: "Vectorized query engine reduced query response times by 80%."
      }
    ],
    securityAndReliability: "mTLS authentication and tokenized rate limiting."
  },

  // 3. Step-by-Step Implementation
  steps: [
    {
      stepNumber: 1,
      phase: "Phase 1: Architecture Planning",
      title: "Data Modeling & API Contract Design",
      description: "Defined protobuf schemas and database partition strategies.",
      deliverables: ["Protobuf schemas", "Architecture diagrams"],
      tools: ["Protocol Buffers", "Docker"]
    }
  ],

  // 4. Image Gallery & Lightbox
  gallery: [
    {
      url: "https://example.com/screenshot1.png",
      caption: "Live Telemetry Dashboard",
      description: "Sub-second chart streaming with anomaly detection."
    }
  ],

  // 5. Measurable Outcomes
  results: [
    { metric: "500k+", label: "Metrics / Sec Processed" },
    { metric: "< 50ms", label: "Latency" }
  ]
}
```

### 3. Add Skills, Experience & Education
In `data.js`, fill in:
- `skills`: Grouped by category (Frontend, Backend, Databases, Cloud/DevOps).
- `experience`: Your previous jobs, roles, bullet points, and technologies.
- `education`: University, degree, GPA/honors, and relevant coursework.
- `certifications`: AWS, Kubernetes, Meta, etc.

---

## 🎨 Customizing Theme Colors
To change the accent gradient or colors, open `style.css` and adjust the variables at the top:
```css
:root {
  --accent-primary: #6366f1;   /* Primary Indigo */
  --accent-secondary: #06b6d4; /* Secondary Cyan */
  --accent-gradient: linear-gradient(135deg, #6366f1 0%, #8b5cf6 50%, #06b6d4 100%);
}
```

---

## 📄 License
MIT License - feel free to fork, customize, and use this portfolio for your personal brand!