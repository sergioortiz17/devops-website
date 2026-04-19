const timelineItem = ({ period, role, company, description, tech, current }) => `
  <div class="timeline-item ${current ? 'timeline-current' : ''} fade-in">
    <div class="timeline-dot"></div>
    <p class="timeline-period">${period}</p>
    <h3 class="timeline-role">${role}</h3>
    <p class="timeline-company">${company}</p>
    <div class="timeline-card">
      <p class="timeline-desc">${description}</p>
      <div class="timeline-tech">
        ${tech.map((t) => `<span class="tech-pill">${t}</span>`).join('')}
      </div>
    </div>
  </div>
`;

export const render = (container, { journey }) => {
  container.innerHTML = `
    <div class="container">
      <p class="section-label fade-in">// career journey</p>
      <h2 class="section-title fade-in">From code to <span>infrastructure</span></h2>
      <p class="section-desc fade-in">A path through mobile development, quality engineering, and now infrastructure &amp; DevOps.</p>
      <div class="timeline">
        ${journey.map(timelineItem).join('')}
      </div>
    </div>
  `;
};
