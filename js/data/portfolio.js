export const personal = {
  name: 'Sergio Ortiz',
  role: 'DevOps Engineer',
  bio: "Building reliable infrastructure and automating everything. Former QA Automation Engineer &amp; iOS Developer — I've been on both sides of the pipeline.",
  email: 'sergioortiz170992@gmail.com',
  github: 'https://github.com/sergioortiz17',
  linkedin: 'https://linkedin.com/in/sergio-ortiz-mendoza17',
  whatsapp: 'https://wa.me/5493517860065',
  whatsappDisplay: '+54 9 351 786 0065',
};

export const navLinks = [
  { label: 'About',          href: '#about' },
  { label: 'Journey',        href: '#journey' },
  { label: 'Skills',         href: '#skills' },
  { label: 'Certifications', href: '#certifications' },
  { label: 'Projects',       href: '#projects' },
  { label: 'Contact',        href: '#contact', cta: true },
];

export const heroTags = [
  'CI/CD', 'Docker', 'Kubernetes', 'Terraform',
  'AWS', 'GitHub Actions', 'Prometheus', 'Grafana',
];

export const stats = [
  { number: '1+', label: 'Year in DevOps' },
  { number: '4+', label: 'Years in Tech' },
  { number: '3',  label: 'Roles Mastered' },
  { number: '∞',  label: 'Pipelines Automated' },
];

export const aboutParagraphs = [
  "I'm a <strong>DevOps Engineer</strong> based in Buenos Aires, Argentina (originally from Venezuela) with a passion for building reliable, automated, and observable systems. Over the past year I've been immersed in CI/CD pipelines, infrastructure as code, and cloud platforms.",
  "Before DevOps, I spent years as a <strong>QA Automation / SDET</strong> — writing test frameworks, automating regression suites, and ensuring software quality across web and mobile apps. Even earlier, I worked as an <strong>iOS Developer</strong>, building native mobile applications.",
  "That combination means I understand code quality, performance, and user experience at every layer of the stack — not just the infrastructure.",
];

export const journey = [
  {
    period: '2024 — Present',
    role: 'DevOps Engineer',
    company: 'Current Role · Buenos Aires, Argentina',
    description: 'Managing CI/CD pipelines, containerized workloads, and cloud infrastructure. Automating deployments with IaC tools, setting up monitoring & alerting, and reducing manual operational overhead across environments.',
    tech: ['Docker', 'Kubernetes', 'Terraform', 'GitHub Actions', 'AWS', 'Prometheus', 'Grafana', 'Bash', 'Ansible'],
    current: true,
  },
  {
    period: '2021 — 2024',
    role: 'QA Automation Engineer / SDET',
    company: 'Multiple Companies · Remote',
    description: 'Built end-to-end test automation frameworks for web and mobile products. Worked closely with development teams in Agile/Scrum environments, defining test strategies, automating regression suites, and integrating QA into CI pipelines.',
    tech: ['Selenium', 'Python', 'Gherkin/BDD', 'Jira', 'Postman', 'Kali Linux', 'Nessus', 'REST APIs'],
    current: false,
  },
  {
    period: '2019 — 2021',
    role: 'iOS Developer',
    company: 'Mobile Development · Venezuela / Remote',
    description: 'Designed and developed native iOS applications. Worked on UI/UX implementation, REST API integrations, and App Store deployments.',
    tech: ['Swift', 'Xcode', 'UIKit', 'REST APIs', 'Git', 'App Store'],
    current: false,
  },
];

export const skills = [
  {
    type: 'devops',
    icon: '⚙️',
    title: 'DevOps & Infrastructure',
    subtitle: 'Pipelines, containers, IaC',
    items: ['Docker', 'Kubernetes', 'Terraform', 'Ansible', 'GitHub Actions', 'GitLab CI', 'Jenkins', 'Bash', 'Nginx'],
  },
  {
    type: 'cloud',
    icon: '☁️',
    title: 'Cloud & Monitoring',
    subtitle: 'Cloud platforms, observability',
    items: ['AWS', 'EC2 / S3 / RDS', 'Prometheus', 'Grafana', 'ELK Stack', 'CloudWatch', 'Linux', 'Git'],
  },
  {
    type: 'qa',
    icon: '🧪',
    title: 'QA & Testing',
    subtitle: 'Automation, security, APIs',
    items: ['Selenium', 'Python', 'Gherkin/BDD', 'Postman', 'REST API Testing', 'Kali Linux', 'Nessus', 'Jira'],
  },
  {
    type: 'dev',
    icon: '💻',
    title: 'Development',
    subtitle: 'Languages, frameworks, mobile',
    items: ['Python', 'Swift', 'TypeScript', 'Angular', 'React', 'Node.js', 'PostgreSQL', 'Django'],
  },
];

export const certifications = [
  {
    name: 'AWS Certified Solutions Architect – Associate',
    issuer: 'Amazon Web Services',
    date: '2025',
    status: 'completed',
    icon: '☁️',
    type: 'aws',
    url: 'https://www.credly.com/badges/f62ba792-5d8e-43ae-9e41-663611f86cb0/linked_in_profile',
  },
  {
    name: 'Oracle Cloud Infrastructure 2025 Certified DevOps Professional',
    issuer: 'Oracle',
    date: 'Oct 2025',
    status: 'completed',
    icon: '⚙️',
    type: 'oracle',
    url: 'https://catalog-education.oracle.com/ords/certview/sharebadge?id=E19C64E22FB95EC777A2AFAC7D5394B5D410146749D120D1D2CCB1CF3FD6E3F1',
  },
  {
    name: 'Oracle Cloud Infrastructure 2025 Certified Architect Associate',
    issuer: 'Oracle',
    date: 'Oct 2025',
    status: 'completed',
    icon: '🏗️',
    type: 'oracle',
    url: 'https://catalog-education.oracle.com/ords/certview/sharebadge?id=458FF08D0507FCFDD8FDC0B5E49BF05D50ADE48F6503E74F776104A1D9A1618F',
  },
  {
    name: 'Oracle AI Autonomous Database 2025 Certified Professional',
    issuer: 'Oracle',
    date: 'Oct 2025',
    status: 'completed',
    icon: '🤖',
    type: 'oracle',
    url: 'https://catalog-education.oracle.com/ords/certview/sharebadge?id=FD3BB4F644B136DA77A75033B546DB0E03E39F7063F989625ABC61890B9D9F7E',
  },
];

export const projects = [
  {
    type: 'DevOps · CI/CD',
    title: 'Automated Deployment Pipeline',
    description: 'Built a full CI/CD pipeline using GitHub Actions and Docker, enabling zero-downtime deployments to cloud environments. Includes automated testing, image builds, and rollback strategies.',
    tech: ['GitHub Actions', 'Docker', 'AWS'],
  },
  {
    type: 'DevOps · IaC',
    title: 'Infrastructure as Code — Cloud Setup',
    description: 'Provisioned and managed cloud infrastructure using Terraform. Includes VPCs, EC2 instances, RDS databases, and security groups — all version-controlled and reproducible.',
    tech: ['Terraform', 'AWS', 'Linux'],
  },
  {
    type: 'QA Automation',
    title: 'Xcapit Crypto Wallet — Test Suite',
    description: 'Designed and implemented an end-to-end automation test suite for the Xcapit crypto wallet application. Built with Python and Selenium, integrated into the CI pipeline.',
    tech: ['Python', 'Selenium', 'BDD'],
  },
  {
    type: 'Monitoring & Observability',
    title: 'Metrics & Alerting Stack',
    description: 'Set up a Prometheus + Grafana observability stack for production services. Created custom dashboards and alerting rules to detect anomalies and reduce MTTR.',
    tech: ['Prometheus', 'Grafana', 'Docker'],
  },
  {
    type: 'iOS Development',
    title: 'Native iOS Applications',
    description: 'Developed multiple native iOS apps in Swift, including UI implementation with UIKit, REST API integration, local data persistence, and App Store submission.',
    tech: ['Swift', 'Xcode', 'UIKit'],
  },
  {
    type: 'Security Testing',
    title: 'Security & Vulnerability Assessment',
    description: 'Performed security assessments using Kali Linux, Nessus, and OpenVAS on web applications. Identified and documented vulnerabilities for remediation.',
    tech: ['Kali Linux', 'Nessus', 'OpenVAS'],
  },
];
