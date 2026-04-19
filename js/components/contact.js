export const render = (container, { personal }) => {
  container.innerHTML = `
    <div class="container">
      <p class="section-label fade-in">// contact</p>
      <h2 class="section-title fade-in">Let's <span>work together</span></h2>
      <p class="contact-intro fade-in">I'm open to new DevOps opportunities, freelance infrastructure projects, and interesting collaborations. Whether you have a question or just want to say hi — my inbox is always open.</p>
      <div class="contact-links fade-in">
        <a href="mailto:${personal.email}" class="contact-link">
          <div class="contact-link-icon email">📧</div>
          <div class="contact-link-text">
            <div class="contact-link-label">Email</div>
            <div class="contact-link-value">${personal.email}</div>
          </div>
          <span class="contact-link-arrow">→</span>
        </a>
        <a href="${personal.linkedin}" target="_blank" class="contact-link">
          <div class="contact-link-icon linkedin">💼</div>
          <div class="contact-link-text">
            <div class="contact-link-label">LinkedIn</div>
            <div class="contact-link-value">sergio-ortiz-mendoza17</div>
          </div>
          <span class="contact-link-arrow">→</span>
        </a>
        <a href="${personal.github}" target="_blank" class="contact-link">
          <div class="contact-link-icon github">🐙</div>
          <div class="contact-link-text">
            <div class="contact-link-label">GitHub</div>
            <div class="contact-link-value">sergioortiz17</div>
          </div>
          <span class="contact-link-arrow">→</span>
        </a>
        <a href="${personal.whatsapp}" target="_blank" class="contact-link">
          <div class="contact-link-icon whatsapp">📱</div>
          <div class="contact-link-text">
            <div class="contact-link-label">WhatsApp</div>
            <div class="contact-link-value">${personal.whatsappDisplay}</div>
          </div>
          <span class="contact-link-arrow">→</span>
        </a>
      </div>
    </div>
  `;
};
