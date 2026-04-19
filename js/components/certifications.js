const certCard = ({ name, issuer, date, status, icon, type, url }) => `
  <a href="${url}" target="_blank" class="cert-card ${type} fade-in">
    <div class="cert-icon">${icon}</div>
    <h3 class="cert-name">${name}</h3>
    <p class="cert-issuer">${issuer}</p>
    <div class="cert-footer">
      <span class="cert-date">${date}</span>
      <span class="cert-status ${status}">${status === 'completed' ? 'Completed' : 'In Progress'}</span>
    </div>
  </a>
`;

export const render = (container, { certifications }) => {
  container.innerHTML = `
    <div class="container">
      <p class="section-label fade-in">// certifications</p>
      <h2 class="section-title fade-in">Professional <span>certifications</span></h2>
      <p class="section-desc fade-in">Formal credentials validating expertise in cloud, infrastructure, and DevOps tools.</p>
      <div class="certs-grid">
        ${certifications.map(certCard).join('')}
      </div>
    </div>
  `;
};
