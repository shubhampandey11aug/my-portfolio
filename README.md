# 🚀 Dynamic Modern Portfolio for GitHub Pages

A modern, responsive, and data-driven personal portfolio website designed specifically for zero-cost hosting on **GitHub Pages**. 

Featuring:
- 🌓 **Dark / Light Mode** with automatic system preference detection & localStorage persistence.
- 🔍 **Live Search & Category Filtering** for projects.
- 🖼️ **Interactive Project Case Study Modals** with screenshot previews, problem/solution breakdown, architecture highlights, and direct live demo/GitHub links.
- 📄 **Resume Integration**: Work experience timeline, academic background, technical skills matrix, and verified certifications.
- ⚡ **Zero Framework Dependencies**: Pure modern HTML5, CSS3 (CSS Variables & Glassmorphism), and Vanilla ES6+ JavaScript. Fast load times, 100 Lighthouse performance score, zero build tools needed (`npm run build` not required).
- 🧩 **100% Data-Driven**: Update your entire portfolio (resume, projects, skills, contacts) simply by editing `data.js`!

---

## 📁 Project Structure

```
├── index.html         # Main semantic HTML structure & layout
├── style.css          # Design system, CSS variables, dark/light themes, animations
├── data.js            # Central data configuration (Resume + Projects + Skills)
├── app.js             # Dynamic rendering engine, search/filtering, modal handlers
├── assets/            # Folder for your screenshots, avatar photo, and resume.pdf
└── README.md          # Setup and deployment guide
```

---

## 🚀 How to Host on GitHub Pages (Step-by-Step)

Deploying this portfolio to GitHub Pages takes less than 2 minutes:

### Option A: Via GitHub Web Interface
1. Create a new public repository on GitHub (e.g., `my-portfolio` or `username.github.io`).
2. Upload all the files (`index.html`, `style.css`, `data.js`, `app.js`, and `assets` folder) directly into the repository.
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

### 2. Add Your Projects & Screenshots
In `data.js`, add or edit objects in the `projects` array:
```javascript
{
  id: "my-awesome-app",
  title: "App Title",
  tagline: "A one-line punchy description of what the app does.",
  category: "fullstack", // Options: 'fullstack', 'frontend', 'ai-ml', 'cloud', 'tools'
  featured: true,        // Shows a 'Featured' badge
  image: "assets/projects/app-screenshot.png", // Or web URL
  demoUrl: "https://my-live-demo.com",
  githubUrl: "https://github.com/myusername/my-app",
  metrics: "50k+ active users, 99.9% uptime",
  tags: ["React", "Node.js", "PostgreSQL", "Docker"],
  details: {
    overview: "In-depth overview of what the application achieves...",
    keyFeatures: [
      "Key feature 1",
      "Key feature 2",
      "Key feature 3"
    ],
    technicalChallenge: "What engineering challenge did you overcome?",
    solution: "How did you solve it architecturally?"
  }
}
```

### 3. Add Skills, Experience & Education
In `data.js`, fill in:
- `skills`: Grouped by category (Frontend, Backend, Databases, Cloud/DevOps).
- `experience`: Your previous jobs, roles, bullet points, and technologies.
- `education`: University, degree, GPA/honors, and relevant coursework.
- `certifications`: AWS, Kubernetes, Meta, etc.

---

## 🌐 Custom Domain (Optional)
If you own a custom domain (e.g., `johnsmith.dev`):
1. In your GitHub repository, go to **Settings > Pages > Custom domain**.
2. Enter your domain name and click **Save**.
3. In your DNS provider (Cloudflare, Namecheap, GoDaddy), add a `CNAME` record pointing to `<username>.github.io`.
4. Check **Enforce HTTPS**.

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