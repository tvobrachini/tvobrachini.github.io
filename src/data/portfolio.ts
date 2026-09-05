export interface NavLink {
  href: string;
  label: string;
}

export interface ExperienceItem {
  company: string;
  companyUrl: string;
  badge: string;
  dotColor: string;
  role: string;
  startDate: Date;
  endDate?: Date; // undefined means "Present"
  description: string;
}

export interface FoundationalRole {
  title: string;
  company: string;
  period: string;
  details?: string;
}

export interface StrategicProject {
  title: string;
  repoUrl: string;
  badge: string;
  objective: string;
  execution: string;
  outcome: string;
  tags: string[];
}

export interface CapabilityCategory {
  number: string;
  category: string;
  title: string;
  description: string;
  hoverBorderClass: string;
  skills: { name: string; level?: string }[];
}

export interface Credential {
  institution: string;
  institutionUrl: string;
  location: string;
  description: string;
}

export interface Publication {
  title: string;
  url: string;
  source: string;
}

export function formatDuration(startDate: Date, endDate: Date = new Date()): string {
  let years = endDate.getFullYear() - startDate.getFullYear();
  let months = endDate.getMonth() - startDate.getMonth();
  if (months < 0) {
    years--;
    months += 12;
  }
  const parts: string[] = [];
  if (years > 0) parts.push(`${years} YR${years > 1 ? 'S' : ''}`);
  if (months > 0) parts.push(`${months} MO${months > 1 ? 'S' : ''}`);
  return parts.join(' ') || '0 MOS';
}

export const navLinks: NavLink[] = [
  { href: '#executive-summary', label: '01. Executive Summary' },
  { href: '#professional-experience', label: '02. Professional Experience' },
  { href: '#strategic-projects', label: '03. Strategic Projects' },
  { href: '#capabilities', label: '04. Capabilities' },
  { href: '#credentials', label: '05. Credentials' },
];

export const personalInfo = {
  name: 'Tiago Vinicius de Oliveira Brachini',
  displayName: 'tvobrachini',
  tagline: 'IT Risk & Governance // Executive Summary',
  headline: 'Navigating the expansive landscape of IT risk.',
  subheadlineLead: 'Technology and AI are fundamentally shifting the ground beneath modern enterprise capabilities.',
  subheadlineBody:
    'I operate as a deeply technical Senior IT Internal Auditor. By bridging the gap between granular technical operations and broad executive business risk, I design enduring control frameworks capable of withstanding the elements of a rapidly changing technical frontier.',
  email: 'tvobrachini@gmail.com',
  linkedinUrl: 'https://www.linkedin.com/in/tvobrachini',
  githubUrl: 'https://github.com/tvobrachini',
  profileImage: '/profile.webp',
};

export const experiences: ExperienceItem[] = [
  {
    company: 'Nubank',
    companyUrl: 'https://international.nubank.com.br/about/',
    badge: 'Largest LATAM Digital Bank',
    dotColor: '#926C9C',
    role: 'IT Internal Audit Specialist',
    startDate: new Date('2023-03-01'),
    description:
      'Lead the holistic evaluation of complex IT general controls and risk matrices. Spearhead the deployment of AI-driven automation for audit documentation and control testing methodologies within a high-velocity fintech ecosystem, significantly enhancing overall audit efficiency and risk posture.',
  },
  {
    company: 'Mercado Livre',
    companyUrl: 'https://investor.mercadolibre.com/',
    badge: 'LATAM #1 E-Commerce',
    dotColor: '#C4B160',
    role: 'IT Internal Audit',
    startDate: new Date('2021-11-01'),
    endDate: new Date('2023-03-01'),
    description:
      "Directed comprehensive IT General Controls (ITGC) assessments and advanced cloud security audits across LATAM's premier e-commerce infrastructure. Orchestrated cross-functional reviews aligning technical operations with regulatory compliance, fortifying the enterprise security perimeter.",
  },
  {
    company: 'Stone',
    companyUrl: 'https://www.stoneco.com.br/en/',
    badge: 'Major Payment Processor',
    dotColor: '#5A8F70',
    role: 'IT Internal Audit',
    startDate: new Date('2021-02-01'),
    endDate: new Date('2021-11-01'),
    description:
      'Architected and executed rigorous internal audit testing over mission-critical financial applications and core infrastructure, specializing in PCI-DSS compliance and ensuring secure, high-availability transaction environments.',
  },
  {
    company: 'PwC',
    companyUrl: 'https://www.pwc.com/gx/en/about.html',
    badge: 'Big Four Accounting',
    dotColor: '#B86B49',
    role: 'Risk Assurance Senior Associate',
    startDate: new Date('2015-07-01'),
    endDate: new Date('2021-02-01'),
    description:
      'Orchestrated end-to-end IT and business process audits for diverse global clients. Developed comprehensive flowcharts and risk matrices, and rigorously evaluated the operational effectiveness of internal controls over financial reporting (SOX) to mitigate enterprise risks.',
  },
];

export const foundationalRoles: FoundationalRole[] = [
  {
    title: 'PHP Developer',
    company: 'Tmax Technology',
    period: 'Jul 2014 - Jul 2015',
  },
  {
    title: 'Software Development Intern',
    company: 'OSG Sulamericana',
    period: 'Jul 2012 - Jul 2013',
    details: 'Supported J-SOX compliance upgrades and developed intranet applications using Python/Django and Progress 4GL.',
  },
  {
    title: 'Software Developer',
    company: '3Wise Tecnologia',
    period: 'Jun 2011 - May 2012',
    details: 'Built full-stack import/export modules for Honda Trade Division using VB6, ASP.NET, C# and MySQL/Oracle databases.',
  },
];

export const strategicProjects: StrategicProject[] = [
  {
    title: 'GRC Audit Swarm',
    repoUrl: 'https://github.com/tvobrachini/grc-audit-swarm',
    badge: 'Case Study',
    objective: 'Deploy a stateful, three-phase audit automation engine powered by CrewAI and Groq.',
    execution:
      'Orchestrated specialized agent crews across Planning, Fieldwork, and Reporting—each gated by human approval to adhere to IIA Standard 2340. Integrated native evidence collection directly via AWS APIs for reliable verification of IAM, MFA, and S3 security controls.',
    outcome:
      'Established an immutable evidence vault leveraging PCAOB AS 1215 compliant SHA-256 hashing and verbatim source-quote verification, virtually eliminating AI hallucinations in automated testing.',
    tags: ['CrewAI', 'Groq', 'AWS APIs', 'SHA-256 Vault', 'IIA 2340'],
  },
  {
    title: 'SCF Auto-Crosswalker',
    repoUrl: 'https://github.com/tvobrachini/scf-auto-crosswalker',
    badge: 'Case Study',
    objective: 'Eliminate pervasive manual spreadsheet risk mapping by designing a centralized, programmatic Framework-as-Code data hub.',
    execution:
      'Developed an AI-powered Master Controls Database utilizing a high-performance parsed JSON engine. This maps raw, unstructured IT policies and granular Cloud Security findings accurately to the Secure Controls Framework (SCF).',
    outcome:
      "Enabled immediate, reliable generation of missing control checklists across critical regulations (SOC 2, GDPR, PCI). The architecture serves as the definitive 'Source of Truth' for downstream execution swarms.",
    tags: ['Docker', 'uv', 'Streamlit', 'GenAI', 'JSON Engine'],
  },
];

export const capabilities: CapabilityCategory[] = [
  {
    number: '01',
    category: 'Governance',
    title: 'IT Audit & GRC',
    description: 'Evaluating internal controls, enterprise scale SOX compliance, and mapping nuanced IT risks.',
    hoverBorderClass: 'hover:border-alpine-moss',
    skills: [
      { name: 'ISO 27001' },
      { name: 'NIST CSF' },
      { name: 'COBIT & SOX' },
      { name: 'PCI-DSS' },
      { name: 'Secure Controls Framework' },
    ],
  },
  {
    number: '02',
    category: 'Architecture',
    title: 'Cloud Security',
    description: 'Securing digital environments and comprehensively assessing cloud security maturity.',
    hoverBorderClass: 'hover:border-alpine-slate',
    skills: [
      { name: 'AWS Ecosystem' },
      { name: 'GCP Operations' },
      { name: 'IAM Policy Modeling' },
      { name: 'Linux / UNIX Admin' },
    ],
  },
  {
    number: '03',
    category: 'Automation',
    title: 'Software & GenAI',
    description: 'Architecting programmatic validations and leveraging multi-agent LLM systems for auditing.',
    hoverBorderClass: 'hover:border-[#B86B49]',
    skills: [
      { name: 'Python / TypeScript' },
      { name: 'CrewAI / LangGraph' },
      { name: 'Docker / CI/CD' },
      { name: 'Claude Code / Automations' },
    ],
  },
  {
    number: '04',
    category: 'Linguistics',
    title: 'Languages',
    description: 'Cross-border communication and technical documentation across international teams.',
    hoverBorderClass: 'hover:border-[#C4B160]',
    skills: [
      { name: 'Portuguese', level: 'Fluent / Native' },
      { name: 'English', level: 'Advanced' },
      { name: 'Spanish', level: 'Basic-Interm.' },
    ],
  },
];

export const credentials: Credential[] = [
  {
    institution: 'Trinity College Dublin',
    institutionUrl: 'https://www.tcd.ie/about/',
    location: 'Study Abroad • Dublin, Ireland',
    description:
      "Completed international coursework in Computer Science, Business, and Statistics (2013-2014) at Ireland's premier university. Developed a global perspective on technology and business strategy.",
  },
];

export const certificationsAndDegrees = [
  {
    title: 'Cloud Audit Academy',
    issuer: '(Cloud Agnostic)',
  },
  {
    title: 'Information Technology',
    institution: 'FATEC Bragança Paulista',
    institutionUrl: 'https://site.cps.sp.gov.br/fatec/',
  },
];

export const publication: Publication = {
  title: 'Impact of systemic management on project development: A study in a software house',
  url: 'https://www.researchgate.net/publication/319282476_Impacto_da_gestao_sistemica_no_desenvolvimento_de_projetos_um_estudo_em_uma_Software_House',
  source: 'ResearchGate',
};
