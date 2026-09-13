(() => {
  const d = window.portfolioData;
  const root = document.querySelector('#case-root');
  const params = new URLSearchParams(location.search);
  const p = d?.projects?.find(x => x.id === params.get('id'));
  const escapeHtml = (v='') => String(v).replace(/[&<>'"]/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;',"'":'&#39;','"':'&quot;'}[c]));
  if (!p) { root.innerHTML = `<div class="section-shell case-not-found"><h1>Case study not found</h1><a class="btn btn-primary" href="index.html#projects">Back to projects</a></div>`; return; }
  document.title = `${p.title} | Shubham Pandey`;
  const num = String((d.projects.indexOf(p)+1)).padStart(2,'0');
  const gallery = (p.gallery || []).filter(g => !/Picture1\./i.test(g.url)); // HARD RULE: Picture2+ only.
  root.innerHTML = `
    <section class="case-intro section-shell">
      <a class="back-link" href="index.html#projects">← Back to all case studies</a>
      <div class="case-kicker">CASE STUDY ${num} / MICROSOFT FABRIC</div>
      <div class="case-title-row"><div><h1>${escapeHtml(p.title)}</h1><p>${escapeHtml(p.tagline||'')}</p></div><div class="case-stats"><span>${escapeHtml(p.role||'')}</span><span>${escapeHtml(p.timeline||'')}</span></div></div>
      <div class="case-tag-row">${(p.tags||[]).map(t=>`<span>${escapeHtml(t)}</span>`).join('')}</div>
      <div class="case-rule"></div>
      <div class="case-note"><span>IMAGE RULE</span><strong>Project card uses Picture1 only. This case-study page deliberately has no Picture1 hero image; visual evidence begins with Picture2.</strong></div>
    </section>

    <section class="section-shell case-section"><div class="section-label">01 / EXECUTIVE SUMMARY</div><div class="case-two-col"><div><h2>What was<br><span class="accent">being solved?</span></h2></div><div class="case-copy"><p>${escapeHtml(p.writeup?.executiveSummary || p.details?.overview || '')}</p><h3>Problem statement</h3><p>${escapeHtml(p.writeup?.problemStatement || '')}</p></div></div></section>

    <section class="section-shell case-section"><div class="section-label">02 / OBJECTIVES & SOLUTION</div><div class="case-two-col"><div><h2>From operational pain<br><span class="accent">to governed flow.</span></h2></div><div class="case-copy"><h3>Objectives</h3><ul>${(p.writeup?.objectives||[]).map(x=>`<li>${escapeHtml(x)}</li>`).join('')}</ul><h3>Solution</h3><p>${escapeHtml(p.writeup?.solution || p.details?.solution || '')}</p></div></div></section>

    <section class="section-shell case-section"><div class="section-label">03 / ARCHITECTURE & DECISIONS</div><div class="case-two-col"><div><h2>Architecture with<br><span class="accent">clear trade-offs.</span></h2></div><div class="case-copy"><p>${escapeHtml(p.methodology?.architectureOverview||'')}</p><div class="decision-table">${(p.methodology?.technicalDecisions||[]).map(x=>`<div class="decision"><div><span>DECISION</span><strong>${escapeHtml(x.decision)}</strong></div><div><span>RATIONALE</span><p>${escapeHtml(x.rationale)}</p></div></div>`).join('')}</div><p class="reliability"><strong>Reliability:</strong> ${escapeHtml(p.methodology?.securityAndReliability||'')}</p></div></div></section>

    <section class="section-shell case-section"><div class="section-label">04 / IMPLEMENTATION</div><div class="steps-grid">${(p.steps||[]).map((s,i)=>`<article class="step-card"><div class="step-number">${String(i+1).padStart(2,'0')}</div><span>${escapeHtml(s.phase||'')}</span><h3>${escapeHtml(s.title||'')}</h3><p>${escapeHtml(s.description||'')}</p><div class="deliverables"><strong>Deliverables</strong><ul>${(s.deliverables||[]).map(x=>`<li>${escapeHtml(x)}</li>`).join('')}</ul></div><div class="tag-row">${(s.tools||[]).map(x=>`<span>${escapeHtml(x)}</span>`).join('')}</div></article>`).join('')}</div></section>

    <section class="section-shell case-section"><div class="section-label">05 / VISUAL EVIDENCE</div><div class="gallery-intro"><h2>Build evidence.<br><span class="accent">Picture2 onward.</span></h2><p>Click any screenshot to enlarge it. Picture1 is intentionally excluded from this page and remains reserved for the homepage project card.</p></div><div class="gallery-grid">${gallery.map((g,i)=>`<button class="gallery-item" data-src="${g.url}" data-caption="${escapeHtml(g.caption||'')}" data-description="${escapeHtml(g.description||'')}"><img src="${g.url}" alt="${escapeHtml(g.caption||p.title)}" loading="lazy"><span class="gallery-number">${String(i+2).padStart(2,'0')}</span><span class="gallery-caption"><strong>${escapeHtml(g.caption||'')}</strong><small>${escapeHtml(g.description||'')}</small></span></button>`).join('')}</div></section>

    <section class="section-shell case-section results-section"><div class="section-label">06 / OUTCOMES</div><div class="results-grid">${(p.results||[]).map(x=>`<div class="result"><strong>${escapeHtml(x.metric)}</strong><span>${escapeHtml(x.label)}</span></div>`).join('')}</div></section>

    <section class="section-shell case-end"><a class="btn btn-primary" href="index.html#projects">← Back to case studies</a><a class="btn btn-ghost" href="index.html#contact">Discuss a similar problem ↗</a></section>`;

  const lb = document.querySelector('#lightbox'); const img = document.querySelector('#lightbox-img'); const cap = document.querySelector('#lightbox-caption');
  document.querySelectorAll('.gallery-item').forEach(btn => btn.addEventListener('click', () => { img.src=btn.dataset.src; img.alt=btn.dataset.caption; cap.innerHTML=`<strong>${btn.dataset.caption}</strong><span>${btn.dataset.description}</span>`; lb.hidden=false; document.body.classList.add('no-scroll'); }));
  function close(){lb.hidden=true; img.src=''; document.body.classList.remove('no-scroll');}
  document.querySelector('.lightbox-close').addEventListener('click',close); lb.addEventListener('click',e=>{if(e.target===lb)close()}); document.addEventListener('keydown',e=>{if(e.key==='Escape')close()});
  document.querySelector('#year').textContent = new Date().getFullYear();
})();
