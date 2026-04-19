export const render = (container, { aboutParagraphs }) => {
  container.innerHTML = `
    <div class="container">
      <div class="about-text fade-in">
        <p class="section-label">// about me</p>
        <h2 class="section-title">Engineer with a<br /><span>full-stack mindset</span></h2>
        ${aboutParagraphs.map((p) => `<p>${p}</p>`).join('')}
      </div>
    </div>
  `;
};
