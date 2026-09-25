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
  tagline: 'Senior IT Auditor & Technology Risk Specialist',
  headline: 'Auditing cloud architecture, SDLC governance, and applied AI.',
  subheadlineLead:
    '10+ years of IT audit and technology risk experience across Big Four (PwC) and leading fintechs (Nubank, Mercado Libre, StoneCo).',
  subheadlineBody:
    'I plan and lead IT and security audits across cloud environments (AWS, GCP) and SDLC governance, evaluate SOX 404 IT general controls (ITGC), and engineer data analytics and AI tooling (SQL, Databricks/Scala, CrewAI) to automate control testing over full populations. Based in São Paulo (UTC−3) and available for full remote opportunities worldwide.',
  email: 'tvobrachini@gmail.com',
  linkedinUrl: 'https://www.linkedin.com/in/tvobrachini',
  githubUrl: 'https://github.com/tvobrachini',
  profileImage: '/profile.webp',
  cvEnUrl: '/Tiago_Brachini_CV_EN_2026.pdf',
  cvPtUrl: '/Tiago_Brachini_CV_PT_2026.pdf',
  location: 'São Paulo, Brazil',
  availability: 'Full Remote (UTC−3 / US Eastern hours overlap)',
};

export const experiences: ExperienceItem[] = [
  {
    company: 'Nubank (NYSE: NU)',
    companyUrl: 'https://international.nubank.com.br/about/',
    badge: '139M+ Customers · LATAM Digital Bank',
    dotColor: '#926C9C',
    role: 'Global IT Audit Specialist',
    startDate: new Date('2025-09-01'),
    description:
      'Plan and lead enterprise IT and cloud security audits (AWS, GCP) across core banking, distributed microservices, and SDLC governance; design and execute risk-and-control matrices (RACM) for SOX 404 compliance. Build AI-assisted audit workflows and automate control testing over full populations with Databricks and Scala. Evaluate compliance against BACEN regulations, TPRM, and SOC 1/2 vendor reports.',
  },
  {
    company: 'Nubank (NYSE: NU)',
    companyUrl: 'https://international.nubank.com.br/about/',
    badge: 'LATAM Digital Bank',
    dotColor: '#926C9C',
    role: 'IT Internal Auditor',
    startDate: new Date('2023-03-01'),
    endDate: new Date('2025-09-01'),
    description:
      'Evaluated IT general controls (ITGC) and risk-and-control matrices across cloud environments (AWS, GCP) and SDLC governance. Automated audit testing and data analytics using Databricks, Scala, and SQL.',
  },
  {
    company: 'Mercado Libre (NASDAQ: MELI)',
    companyUrl: 'https://investor.mercadolibre.com/',
    badge: '18 Countries · LATAM #1 E-Commerce & Fintech',
    dotColor: '#C4B160',
    role: 'IT Internal Auditor',
    startDate: new Date('2021-11-01'),
    endDate: new Date('2023-03-01'),
    description:
      'Designed and executed regional SOX 404 ITGC and cloud security audits across Latin America, covering logical access, change management, and computer operations. Built automated audit analytics in Python (Pandas) and SQL (BigQuery) for full-population testing across high-volume systems. Assessed vendor risks via SOC 1/2 reports.',
  },
  {
    company: 'StoneCo (NASDAQ: STNE)',
    companyUrl: 'https://www.stoneco.com.br/en/',
    badge: '1.7M+ Merchant Clients · Payments Fintech',
    dotColor: '#5A8F70',
    role: 'IT Internal Auditor',
    startDate: new Date('2021-02-01'),
    endDate: new Date('2021-11-01'),
    description:
      'Executed SOX 404 IT and operational audits of payment processing, antifraud systems, and core financial ledgers, including PCI DSS-scoped infrastructure. Automated control testing and user access reviews with SQL, Python, and BigQuery.',
  },
  {
    company: 'PwC Brazil',
    companyUrl: 'https://www.pwc.com/gx/en/about.html',
    badge: 'Big Four Accounting · Risk Assurance',
    dotColor: '#B86B49',
    role: 'Risk Assurance, Trainee to Senior Associate',
    startDate: new Date('2015-07-01'),
    endDate: new Date('2021-02-01'),
    description:
      'Planned and executed IT and business process audits (ITGC, SOX 404/ICFR, SOC 1/2) for tier-1 financial institutions and multinational corporations. Evaluated control design and operating effectiveness across ERPs, databases (SQL, Oracle), and operating systems; drafted executive reporting and deficiency memos.',
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
    objective: 'Deploy a stateful, three-phase audit automation platform powered by CrewAI and Groq.',
    execution:
      'Orchestrated specialized agent crews across Planning, Fieldwork, and Reporting—each gated by a human approval step modelled on engagement supervision (IIA Standard 2340). Integrated native evidence collection directly via AWS APIs (boto3) for reliable verification of IAM, MFA, and S3 security controls.',
    outcome:
      'Built an immutable SHA-256-hashed evidence vault with verbatim source-quote verification, in the spirit of PCAOB AS 1215 documentation integrity principles, preventing hallucinations and ensuring every finding traces directly to collected evidence.',
    tags: ['CrewAI', 'Python', 'AWS APIs', 'SHA-256 Vault', 'NIST OSCAL'],
  },
  {
    title: 'SCF Auto-Crosswalker',
    repoUrl: 'https://github.com/tvobrachini/scf-auto-crosswalker',
    badge: 'Case Study',
    objective: 'Eliminate manual spreadsheet risk mapping by designing a programmatic framework-as-code crosswalking utility.',
    execution:
      'Developed an automated crosswalking tool that maps unstructured IT policies and AWS Security Hub findings directly to Secure Controls Framework (SCF) control identifiers, bridging across ISO 27001, NIST, PCI DSS, and SOC 2.',
    outcome:
      'Identifies relevant SCF control IDs for human audit review, streamlining multi-framework mapping without redistributing modified SCF proprietary materials.',
    tags: ['Python', 'LLM', 'Security Hub', 'SCF', 'Compliance-as-Code'],
  },
];

export const capabilities: CapabilityCategory[] = [
  {
    number: '01',
    category: 'Governance',
    title: 'IT Audit & GRC',
    description: 'Evaluating internal controls, SOX 404 ITGCs, regulatory mandates, and enterprise technology risk.',
    hoverBorderClass: 'hover:border-alpine-moss',
    skills: [
      { name: 'SOX 404 & ITGC' },
      { name: 'SOC 1 / SOC 2 Reliance' },
      { name: 'BACEN (Res. 4893/4658)' },
      { name: 'ISO 27001 & NIST CSF' },
      { name: 'PCI-DSS & SCF' },
      { name: 'TPRM & BCP/DR' },
    ],
  },
  {
    number: '02',
    category: 'Architecture',
    title: 'Cloud Security',
    description: 'Securing cloud platforms, privileged access, and SDLC / DevSecOps engineering pipelines.',
    hoverBorderClass: 'hover:border-alpine-slate',
    skills: [
      { name: 'AWS Security (IAM, S3, Orgs)' },
      { name: 'GCP Security Posture' },
      { name: 'SDLC / DevSecOps Governance' },
      { name: 'Privileged Access Management' },
      { name: 'Vulnerability Management' },
    ],
  },
  {
    number: '03',
    category: 'Automation',
    title: 'Data & Audit Automation',
    description: 'Engineering programmatic testing, big data analytics, and multi-agent AI systems for audit.',
    hoverBorderClass: 'hover:border-[#B86B49]',
    skills: [
      { name: 'SQL & BigQuery' },
      { name: 'Python (Pandas, boto3)' },
      { name: 'Databricks & Scala' },
      { name: 'CrewAI / Multi-Agent LLMs' },
      { name: 'Docker & CI/CD' },
    ],
  },
  {
    number: '04',
    category: 'Linguistics',
    title: 'Languages',
    description: 'Cross-border communication and audit execution across international teams.',
    hoverBorderClass: 'hover:border-[#C4B160]',
    skills: [
      { name: 'Portuguese', level: 'Native' },
      { name: 'English', level: 'Fluent' },
      { name: 'Spanish', level: 'Professional working' },
    ],
  },
];

export const credentials: Credential[] = [
  {
    institution: 'Trinity College Dublin',
    institutionUrl: 'https://www.tcd.ie/about/',
    location: 'Study Abroad • Dublin, Ireland',
    description:
      "Completed international coursework in Computer Science, Business, and Statistics (2013-2014) through the Science Without Borders exchange program at Ireland's premier university.",
  },
];

export const certificationsAndDegrees = [
  {
    title: 'Technology in IT Management (2012)',
    institution: 'FATEC Bragança Paulista (Undergraduate Degree)',
    institutionUrl: 'https://site.cps.sp.gov.br/fatec/',
  },
  {
    title: 'AWS Cloud Audit Academy',
    issuer: '(Cloud Agnostic Training, AWS)',
  },
];

export const publication: Publication = {
  title: 'Impact of systemic management on project development: A study in a software house',
  url: 'https://www.researchgate.net/publication/319282476_Impacto_da_gestao_sistemica_no_desenvolvimento_de_projetos_um_estudo_em_uma_Software_House',
  source: 'ResearchGate',
};
