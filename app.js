(() => {
  const d = window.portfolioData;
  if (!d) return;
  const $ = (s, root=document) => root.querySelector(s);
  const $$ = (s, root=document) => [...root.querySelectorAll(s)];
  const escapeHtml = (v='') => String(v).replace(/[&<>'"]/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;',"'":'&#39;','"':'&quot;'}[c]));

  // Profile
  $('#about-p1').textContent = d.about.paragraphs[0] || '';
  $('#about-p2').textContent = d.about.paragraphs[1] || '';
  $('#highlights').innerHTML = (d.about.highlights || []).slice(0,6).map(x => `<div class="highlight"><span>+</span>${escapeHtml(x)}</div>`).join('');
  $('#hero-metrics').innerHTML = (d.personal.stats || []).map(s => `<div><strong>${escapeHtml(s.value)}</strong><span>${escapeHtml(s.label)}</span></div>`).join('');
  $('#email-link').href = `mailto:${d.personal.email}`;
  $('#linkedin-link').href = d.personal.linkedin || '#';
  $('#github-link').href = d.personal.github || '#';
  $('#year').textContent = new Date().getFullYear();

  // Skills
  $('#skills-grid').innerHTML = d.skills.map((g,i) => `<article class="skill-card"><div class="skill-no">0${i+1}</div><h3>${escapeHtml(g.category)}</h3><div class="skill-items">${g.items.map(x => `<div class="skill-item"><span class="skill-tool">${x.logo && x.logo.startsWith('http') ? `<img src="${x.logo}" alt="${escapeHtml(x.name)}" class="skill-logo" loading="lazy" onerror="this.style.display='none'">` : `<span class="skill-emoji">${x.logo || ''}</span>`}<span class="skill-name">${escapeHtml(x.name)}</span></span></div>`).join('')}</div></article>`).join('');

  // Projects / filters
  const filterDefs = [{id:'all',label:'All Projects'}, ...Object.entries(d.projectFilters || {}).map(([id,label])=>({id,label}))];
  const filters = $('#filters');
  let active = 'all';
  filters.innerHTML = filterDefs.map(f => `<button class="filter ${f.id==='all'?'active':''}" data-filter="${f.id}">${escapeHtml(f.label)}</button>`).join('');

  function card(p, index) {
    const tags = (p.tags || []).slice(0,5);
    const cardImage = p.image; // Picture1 ONLY: card image.
    return `<article class="project-card" data-filters="${(p.filters||[]).join(' ')}">
      <a class="project-image" href="project.html?id=${encodeURIComponent(p.id)}" target="_blank" rel="noopener" aria-label="Open ${escapeHtml(p.title)} case study"><img src="${cardImage}" alt="${escapeHtml(p.title)} — project card" loading="lazy"><span class="project-index">${String(index+1).padStart(2,'0')}</span><span class="open-icon">↗</span></a>
      <div class="project-body"><div class="project-meta"><span>${escapeHtml(p.timeline || 'Case Study')}</span><span>${escapeHtml(p.role || '')}</span></div><h3>${escapeHtml(p.title)}</h3><p>${escapeHtml(p.tagline || '')}</p><div class="tag-row">${tags.map(t=>`<span>${escapeHtml(t)}</span>`).join('')}</div><a class="details-link" href="project.html?id=${encodeURIComponent(p.id)}" target="_blank" rel="noopener">View full case study <span>→</span></a></div>
    </article>`;
  }
  function renderProjects() {
    const list = d.projects.filter(p => active==='all' || (p.filters||[]).includes(active));
    $('#project-grid').innerHTML = list.map((p,i)=>card(p,i)).join('');
    if (!list.length) $('#project-grid').innerHTML = `<div class="empty-state">No projects match this filter.</div>`;
  }
  filters.addEventListener('click', e => {
    const b = e.target.closest('[data-filter]'); if (!b) return;
    active = b.dataset.filter; $$('.filter', filters).forEach(x=>x.classList.toggle('active', x===b)); renderProjects();
  });
  renderProjects();

  // Experience
  $('#experience-list').innerHTML = d.experience.map((x,i)=>`<article class="timeline-item"><div class="timeline-marker">${String(i+1).padStart(2,'0')}</div><div class="timeline-content"><div class="timeline-top"><span>${escapeHtml(x.period)}</span><span>${escapeHtml(x.location || '')}</span></div><h3>${escapeHtml(x.role)}</h3><h4>${escapeHtml(x.company)}</h4><p>${escapeHtml(x.description || '')}</p><ul>${(x.achievements||[]).slice(0,6).map(a=>`<li>${escapeHtml(a)}</li>`).join('')}</ul><div class="tag-row">${(x.technologies||[]).map(t=>`<span>${escapeHtml(t)}</span>`).join('')}</div></div></article>`).join('');

  // Education + certifications
  $('#education-list').innerHTML = `<div class="edu-block"><h3>Education</h3>${d.education.map(x=>`<div class="edu-entry"><span>${escapeHtml(x.period)}</span><div><strong>${escapeHtml(x.degree)}</strong><b>${escapeHtml(x.institution)}</b><p>${escapeHtml(x.honors||'')}</p></div></div>`).join('')}</div><div class="edu-block"><h3>Certifications & Upskilling</h3>${d.certifications.map(x=>`<div class="cert-entry"><span>${escapeHtml(x.year)}</span><div><strong>${escapeHtml(x.name)}</strong><b>${escapeHtml(x.issuer)}</b></div></div>`).join('')}</div>`;
})();
