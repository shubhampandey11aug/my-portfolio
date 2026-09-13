/**
 * ====================================================================
 * PORTFOLIO APPLICATION ENGINE
 * Dynamic rendering, Search/Filter, Theme Switcher, Modal, & Interactivity
 * ====================================================================
 */

document.addEventListener('DOMContentLoaded', () => {
  // Ensure portfolioData is loaded
  const data = window.portfolioData;
  if (!data) {
    console.error('Portfolio data not found. Please ensure data.js is loaded.');
    return;
  }

  // --- Initialize All Components ---
  initTheme();
  initNavbar();
  initScrollEffects();
  renderHero(data.personal);
  renderAbout(data.about, data.personal);
  renderSkills(data.skills);
  renderExperience(data.experience);
  renderEducation(data.education);
  renderCertifications(data.certifications);
  initProjectsSection(data.projects);
  initContactForm(data.personal);
  renderFooter(data.personal);
});

/* ==========================================================================
   1. Theme Switcher (Dark / Light Mode)
   ========================================================================== */
function initTheme() {
  const themeToggleBtn = document.getElementById('theme-toggle');
  const storedTheme = localStorage.getItem('theme');
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

  const currentTheme = storedTheme || (prefersDark ? 'dark' : 'light');
  document.documentElement.setAttribute('data-theme', currentTheme);
  updateThemeIcon(currentTheme);

  if (themeToggleBtn) {
    themeToggleBtn.addEventListener('click', () => {
      const activeTheme = document.documentElement.getAttribute('data-theme');
      const newTheme = activeTheme === 'dark' ? 'light' : 'dark';
      document.documentElement.setAttribute('data-theme', newTheme);
      localStorage.setItem('theme', newTheme);
      updateThemeIcon(newTheme);
    });
  }
}

function updateThemeIcon(theme) {
  const themeIcon = document.getElementById('theme-icon');
  if (!themeIcon) return;

  if (theme === 'light') {
    // Show Moon icon for switching to dark
    themeIcon.innerHTML = `
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
      </svg>`;
  } else {
    // Show Sun icon for switching to light
    themeIcon.innerHTML = `
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <circle cx="12" cy="12" r="5"></circle>
        <line x1="12" y1="1" x2="12" y2="3"></line>
        <line x1="12" y1="21" x2="12" y2="23"></line>
        <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
        <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
        <line x1="1" y1="12" x2="3" y2="12"></line>
        <line x1="21" y1="12" x2="23" y2="12"></line>
        <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
        <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
      </svg>`;
  }
}

/* ==========================================================================
   2. Navbar & Mobile Menu
   ========================================================================== */
function initNavbar() {
  const mobileToggle = document.getElementById('mobile-menu-toggle');
  const mobileDrawer = document.getElementById('mobile-menu-drawer');
  const mobileLinks = document.querySelectorAll('.mobile-drawer-link');

  if (mobileToggle && mobileDrawer) {
    mobileToggle.addEventListener('click', () => {
      const isOpen = mobileDrawer.classList.toggle('open');
      mobileToggle.setAttribute('aria-expanded', isOpen);
    });

    mobileLinks.forEach(link => {
      link.addEventListener('click', () => {
        mobileDrawer.classList.remove('open');
      });
    });
  }

  // Active link highlighter on scroll
  const sections = document.querySelectorAll('section[id]');
  window.addEventListener('scroll', () => {
    const scrollY = window.pageYOffset;
    sections.forEach(current => {
      const sectionHeight = current.offsetHeight;
      const sectionTop = current.offsetTop - 120;
      const sectionId = current.getAttribute('id');
      const navLink = document.querySelector(`.nav-links a[href*="${sectionId}"]`);
      if (navLink) {
        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
          navLink.classList.add('active');
        } else {
          navLink.classList.remove('active');
        }
      }
    });
  });
}

/* ==========================================================================
   3. Scroll Effects & Back-To-Top
   ========================================================================== */
function initScrollEffects() {
  const progressBar = document.getElementById('scroll-progress');
  const backToTopBtn = document.getElementById('back-to-top');

  window.addEventListener('scroll', () => {
    const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
    const progress = (window.pageYOffset / totalHeight) * 100;
    if (progressBar) progressBar.style.width = `${progress}%`;

    if (backToTopBtn) {
      if (window.pageYOffset > 400) {
        backToTopBtn.classList.add('show');
      } else {
        backToTopBtn.classList.remove('show');
      }
    }
  });

  if (backToTopBtn) {
    backToTopBtn.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }
}

/* ==========================================================================
   4. Render Hero Section
   ========================================================================== */
function renderHero(personal) {
  document.title = `${personal.name} | ${personal.role}`;

  const logoText = document.getElementById('nav-logo-text');
  if (logoText) logoText.textContent = personal.name;

  const availabilityElem = document.getElementById('hero-availability');
  if (availabilityElem) availabilityElem.textContent = personal.availability;

  const nameElem = document.getElementById('hero-name');
  if (nameElem) nameElem.textContent = personal.name;

  const roleElem = document.getElementById('hero-role');
  if (roleElem) roleElem.textContent = personal.role;

  const descElem = document.getElementById('hero-description');
  if (descElem) descElem.textContent = personal.tagline;

  const resumeBtn = document.getElementById('hero-resume-btn');
  if (resumeBtn) resumeBtn.href = personal.resumePdf || '#';

  const avatarImg = document.getElementById('hero-avatar-img');
  if (avatarImg) {
    avatarImg.src = personal.avatar;
    avatarImg.alt = personal.name;
  }

  // Render Stats Counter
  const statsContainer = document.getElementById('hero-stats-container');
  if (statsContainer && personal.stats) {
    statsContainer.innerHTML = personal.stats.map(stat => `
      <div class="stat-item">
        <span class="stat-value gradient-text">${stat.value}</span>
        <span class="stat-label">${stat.label}</span>
      </div>
    `).join('');
  }
}

/* ==========================================================================
   5. Render About Section
   ========================================================================== */
function renderAbout(about, personal) {
  const headingElem = document.getElementById('about-heading');
  if (headingElem) headingElem.textContent = about.heading;

  const paragraphsElem = document.getElementById('about-paragraphs');
  if (paragraphsElem && about.paragraphs) {
    paragraphsElem.innerHTML = about.paragraphs.map(p => `<p>${p}</p>`).join('');
  }

  const highlightsElem = document.getElementById('about-highlights-list');
  if (highlightsElem && about.highlights) {
    highlightsElem.innerHTML = about.highlights.map(h => `
      <li>
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
          <polyline points="20 6 9 17 4 12"></polyline>
        </svg>
        <span>${h}</span>
      </li>
    `).join('');
  }

  const locationElem = document.getElementById('contact-val-location');
  if (locationElem) locationElem.textContent = personal.location;

  const emailElem = document.getElementById('contact-val-email');
  if (emailElem) {
    emailElem.textContent = personal.email;
    emailElem.href = `mailto:${personal.email}`;
  }
}

/* ==========================================================================
   6. Render Skills Section
   ========================================================================== */
function renderSkills(skills) {
  const container = document.getElementById('skills-container');
  if (!container || !skills) return;

  const iconMap = {
    code: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline></svg>`,
    server: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="2" width="20" height="8" rx="2" ry="2"></rect><rect x="2" y="14" width="20" height="8" rx="2" ry="2"></rect><line x1="6" y1="6" x2="6.01" y2="6"></line><line x1="6" y1="18" x2="6.01" y2="18"></line></svg>`,
    database: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><ellipse cx="12" cy="5" rx="9" ry="3"></ellipse><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"></path><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"></path></svg>`,
    cloud: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z"></path></svg>`
  };

  container.innerHTML = skills.map(cat => `
    <div class="skill-card">
      <div class="skill-category-header">
        <div class="skill-cat-icon">
          ${iconMap[cat.icon] || iconMap.code}
        </div>
        <h3 class="skill-category-title">${cat.category}</h3>
      </div>
      <div class="skill-items">
        ${cat.items.map(item => `
          <div class="skill-item-row">
            <span class="skill-name">${item.name}</span>
            <span class="skill-level-badge">${item.level}</span>
          </div>
        `).join('')}
      </div>
    </div>
  `).join('');
}

/* ==========================================================================
   7. Projects Showcase & Filtering Engine
   ========================================================================== */
let allProjects = [];
let activeCategory = 'all';
let searchQuery = '';

function initProjectsSection(projects) {
  allProjects = projects || [];
  const filterTabs = document.querySelectorAll('.filter-tab');
  const searchInput = document.getElementById('project-search-input');

  filterTabs.forEach(tab => {
    tab.addEventListener('click', () => {
      filterTabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      activeCategory = tab.getAttribute('data-category');
      applyProjectFilters();
    });
  });

  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      searchQuery = e.target.value.toLowerCase().trim();
      applyProjectFilters();
    });
  }

  // Setup Project Modal Listeners
  initProjectModal();

  // Initial render
  applyProjectFilters();
}

function applyProjectFilters() {
  const filtered = allProjects.filter(p => {
    const matchesCategory = activeCategory === 'all' || p.category === activeCategory;
    const matchesSearch = searchQuery === '' ||
      p.title.toLowerCase().includes(searchQuery) ||
      p.tagline.toLowerCase().includes(searchQuery) ||
      p.tags.some(tag => tag.toLowerCase().includes(searchQuery));
    return matchesCategory && matchesSearch;
  });

  renderProjectsGrid(filtered);
}

function renderProjectsGrid(projects) {
  const grid = document.getElementById('projects-grid');
  if (!grid) return;

  if (projects.length === 0) {
    grid.innerHTML = `
      <div class="empty-state">
        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
          <circle cx="11" cy="11" r="8"></circle>
          <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
        </svg>
        <h3>No projects found</h3>
        <p>Try clearing your search query or selecting another filter category.</p>
      </div>
    `;
    return;
  }

  grid.innerHTML = projects.map(p => `
    <div class="project-card" data-project-id="${p.id}">
      <div class="project-image-container">
        <img class="project-image" src="${p.image}" alt="${p.title}" loading="lazy" />
        ${p.featured ? `<span class="project-featured-badge">Featured</span>` : ''}
      </div>
      <div class="project-content">
        <h3 class="project-title">${p.title}</h3>
        <p class="project-tagline">${p.tagline}</p>
        ${p.metrics ? `<div class="project-metric-pill"><span>⚡</span> ${p.metrics}</div>` : ''}

        <div class="project-tags">
          ${p.tags.slice(0, 4).map(tag => `<span class="tag-pill">${tag}</span>`).join('')}
          ${p.tags.length > 4 ? `<span class="tag-pill">+${p.tags.length - 4}</span>` : ''}
        </div>

        <div class="project-footer">
          <div class="project-links">
            ${p.demoUrl ? `
              <a href="${p.demoUrl}" target="_blank" rel="noopener noreferrer" class="link-btn" title="Live Demo">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
                Demo
              </a>` : ''}
            ${p.githubUrl ? `
              <a href="${p.githubUrl}" target="_blank" rel="noopener noreferrer" class="link-btn" title="Source Code">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
                Code
              </a>` : ''}
          </div>
          <button class="view-details-btn" onclick="openProjectModal('${p.id}')">
            Details
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
          </button>
        </div>
      </div>
    </div>
  `).join('');
}

/* ==========================================================================
   8. Project Deep Dive Modal
   ========================================================================= */
function initProjectModal() {
  const modalBackdrop = document.getElementById('project-modal');
  const closeBtn = document.getElementById('modal-close-btn');

  if (closeBtn) {
    closeBtn.addEventListener('click', closeProjectModal);
  }

  if (modalBackdrop) {
    modalBackdrop.addEventListener('click', (e) => {
      if (e.target === modalBackdrop) {
        closeProjectModal();
      }
    });
  }

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeProjectModal();
    }
  });
}

window.openProjectModal = function(projectId) {
  const project = allProjects.find(p => p.id === projectId);
  if (!project) return;

  const modal = document.getElementById('project-modal');
  const bannerImg = document.getElementById('modal-banner-img');
  const titleElem = document.getElementById('modal-title');
  const subtitleElem = document.getElementById('modal-subtitle');
  const tagsContainer = document.getElementById('modal-tags');
  const overviewElem = document.getElementById('modal-overview');
  const featuresList = document.getElementById('modal-features');
  const challengeElem = document.getElementById('modal-challenge');
  const solutionElem = document.getElementById('modal-solution');
  const demoLink = document.getElementById('modal-demo-btn');
  const githubLink = document.getElementById('modal-github-btn');

  if (bannerImg) bannerImg.src = project.image;
  if (titleElem) titleElem.textContent = project.title;
  if (subtitleElem) subtitleElem.textContent = project.tagline;

  if (tagsContainer) {
    tagsContainer.innerHTML = project.tags.map(t => `<span class="tag-pill">${t}</span>`).join('');
  }

  if (overviewElem) {
    overviewElem.textContent = project.details?.overview || project.tagline;
  }

  if (featuresList && project.details?.keyFeatures) {
    featuresList.innerHTML = project.details.keyFeatures.map(f => `
      <li>
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
        <span>${f}</span>
      </li>
    `).join('');
  }

  if (challengeElem) {
    challengeElem.textContent = project.details?.technicalChallenge || 'N/A';
  }

  if (solutionElem) {
    solutionElem.textContent = project.details?.solution || 'N/A';
  }

  if (demoLink) {
    if (project.demoUrl) {
      demoLink.href = project.demoUrl;
      demoLink.style.display = 'inline-flex';
    } else {
      demoLink.style.display = 'none';
    }
  }

  if (githubLink) {
    if (project.githubUrl) {
      githubLink.href = project.githubUrl;
      githubLink.style.display = 'inline-flex';
    } else {
      githubLink.style.display = 'none';
    }
  }

  if (modal) {
    modal.classList.add('open');
    document.body.style.overflow = 'hidden'; // Lock scroll
  }
};

window.closeProjectModal = function() {
  const modal = document.getElementById('project-modal');
  if (modal) {
    modal.classList.remove('open');
    document.body.style.overflow = ''; // Unlock scroll
  }
};

/* ==========================================================================
   9. Render Experience Section
   ========================================================================== */
function renderExperience(experience) {
  const container = document.getElementById('experience-timeline');
  if (!container || !experience) return;

  container.innerHTML = experience.map(exp => `
    <div class="timeline-item">
      <div class="timeline-dot"></div>
      <div class="timeline-card">
        <div class="timeline-header">
          <div>
            <h3 class="timeline-role">${exp.role}</h3>
            <span class="timeline-company">${exp.company}</span>
          </div>
          <span class="timeline-period">${exp.period}</span>
        </div>
        <div class="timeline-location">${exp.location}</div>
        <p class="timeline-desc">${exp.description}</p>

        <ul class="timeline-bullets">
          ${exp.achievements.map(ach => `
            <li>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
              <span>${ach}</span>
            </li>
          `).join('')}
        </ul>

        <div class="timeline-techs">
          ${exp.technologies.map(t => `<span class="tag-pill">${t}</span>`).join('')}
        </div>
      </div>
    </div>
  `).join('');
}

/* ==========================================================================
   10. Render Education & Certifications
   ========================================================================== */
function renderEducation(education) {
  const container = document.getElementById('education-timeline');
  if (!container || !education) return;

  container.innerHTML = education.map(edu => `
    <div class="timeline-item">
      <div class="timeline-dot"></div>
      <div class="timeline-card">
        <div class="timeline-header">
          <div>
            <h3 class="timeline-role">${edu.degree}</h3>
            <span class="timeline-company">${edu.institution}</span>
          </div>
          <span class="timeline-period">${edu.period}</span>
        </div>
        <div class="timeline-location">${edu.location}</div>
        <p class="timeline-desc"><strong>${edu.honors}</strong></p>

        <div style="margin-top: 1rem;">
          <h4 style="font-size: 0.9rem; margin-bottom: 0.5rem; color: var(--text-secondary);">Relevant Coursework:</h4>
          <div class="timeline-techs">
            ${edu.coursework.map(c => `<span class="tag-pill">${c}</span>`).join('')}
          </div>
        </div>
      </div>
    </div>
  `).join('');
}

function renderCertifications(certifications) {
  const container = document.getElementById('certifications-container');
  if (!container || !certifications) return;

  container.innerHTML = certifications.map(cert => `
    <div class="cert-card">
      <div class="cert-icon">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <circle cx="12" cy="8" r="7"></circle>
          <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"></polyline>
        </svg>
      </div>
      <div>
        <h4 class="cert-title">${cert.name}</h4>
        <div class="cert-issuer">${cert.issuer} • ${cert.year}</div>
        ${cert.verifyUrl ? `
          <a href="${cert.verifyUrl}" target="_blank" rel="noopener noreferrer" class="cert-link">
            Verify Credential
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
          </a>
        ` : ''}
      </div>
    </div>
  `).join('');
}

/* ==========================================================================
   11. Contact Form & Quick Copy
   ========================================================================== */
function initContactForm(personal) {
  const form = document.getElementById('contact-form');
  const copyEmailBtn = document.getElementById('copy-email-btn');

  if (copyEmailBtn) {
    copyEmailBtn.addEventListener('click', () => {
      navigator.clipboard.writeText(personal.email).then(() => {
        showToast('Email address copied to clipboard!');
      }).catch(() => {
        showToast(`Email: ${personal.email}`);
      });
    });
  }

  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = document.getElementById('form-name').value;
      const email = document.getElementById('form-email').value;
      const message = document.getElementById('form-message').value;

      // Construct mailto link fallback for static github pages
      const mailtoUrl = `mailto:${personal.email}?subject=Portfolio Contact from ${encodeURIComponent(name)}&body=${encodeURIComponent(`From: ${name} (${email})\n\nMessage:\n${message}`)}`;
      window.location.href = mailtoUrl;

      showToast('Opening your default email client...');
      form.reset();
    });
  }
}

function showToast(msg) {
  let toast = document.getElementById('toast-notification');
  if (!toast) {
    toast = document.createElement('div');
    toast.id = 'toast-notification';
    toast.className = 'toast';
    document.body.appendChild(toast);
  }
  toast.textContent = msg;
  toast.classList.add('show');
  setTimeout(() => {
    toast.classList.remove('show');
  }, 3500);
}

/* ==========================================================================
   12. Render Footer
   ========================================================================== */
function renderFooter(personal) {
  const yearElem = document.getElementById('footer-year');
  if (yearElem) yearElem.textContent = new Date().getFullYear();

  const nameElem = document.getElementById('footer-name');
  if (nameElem) nameElem.textContent = personal.name;

  const githubLink = document.getElementById('footer-github');
  if (githubLink) githubLink.href = personal.github;

  const linkedinLink = document.getElementById('footer-linkedin');
  if (linkedinLink) linkedinLink.href = personal.linkedin;

  const twitterLink = document.getElementById('footer-twitter');
  if (twitterLink) twitterLink.href = personal.twitter;
}