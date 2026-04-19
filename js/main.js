import { personal, navLinks, heroTags, aboutParagraphs, journey, skills, certifications, projects } from './data/portfolio.js';
import { render as renderHero }           from './components/hero.js';
import { render as renderAbout }          from './components/about.js';
import { render as renderJourney }        from './components/journey.js';
import { render as renderSkills }         from './components/skills.js';
import { render as renderCertifications } from './components/certifications.js';
import { render as renderProjects }       from './components/projects.js';
import { render as renderContact }        from './components/contact.js';
import { initScrollAnimations, initNavScroll } from './utils/animations.js';
import { qs } from './utils/dom.js';

const renderNav = () => {
  qs('#nav').innerHTML = `
    <div class="nav-logo">sergio.ortiz</div>
    <ul class="nav-links">
      ${navLinks.map(({ label, href, cta }) =>
        `<li><a href="${href}"${cta ? ' class="nav-cta"' : ''}>${label}</a></li>`
      ).join('')}
    </ul>
  `;
};

const renderFooter = () => {
  qs('#footer').innerHTML = `
    <div class="footer-inner">
      <p class="footer-copy">© 2025 Sergio Ortiz · Designed &amp; Built with ❤️</p>
      <div class="footer-links">
        <a href="${personal.github}" target="_blank">GitHub</a>
        <a href="${personal.linkedin}" target="_blank">LinkedIn</a>
        <a href="mailto:${personal.email}">Email</a>
      </div>
    </div>
  `;
};

const init = () => {
  renderNav();
  renderHero(qs('#hero'),                   { personal, heroTags });
  renderAbout(qs('#about'),                 { aboutParagraphs });
  renderJourney(qs('#journey'),             { journey });
  renderSkills(qs('#skills'),               { skills });
  renderCertifications(qs('#certifications'), { certifications });
  renderProjects(qs('#projects'),           { projects });
  renderContact(qs('#contact'),             { personal });
  renderFooter();

  initScrollAnimations();
  initNavScroll();
};

init();
