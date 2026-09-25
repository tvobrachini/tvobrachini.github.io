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
  tagline: 'Global IT Audit Specialist',
  headline: 'Auditing cloud architecture, SDLC governance, and applied AI.',
  subheadlineLead:
    '10+ years of IT audit and technology risk experience across Big Four (PwC) and leading fintechs (Nubank, MercadoLibre, StoneCo).',
  subheadlineBody:
    'I plan and lead IT and security audits across cloud environments (AWS, GCP) and SDLC governance, evaluate IT general controls, and build data analytics and AI tooling (Databricks, Scala, Python, CrewAI) to automate control testing. Based in São Paulo (UTC−3), open to remote roles worldwide.',
  email: 'tvobrachini@gmail.com',
  linkedinUrl: 'https://www.linkedin.com/in/tvobrachini',
  githubUrl: 'https://github.com/tvobrachini',
  profileImage: '/profile.webp',
  cvEnUrl: '/Tiago_Brachini_CV_EN_2026.pdf',
  cvPtUrl: '/Tiago_Brachini_CV_PT_2026.pdf',
  location: 'São Paulo, Brazil',
};

export const experiences: ExperienceItem[] = [
  {
    company: 'Nubank (NYSE: NU)',
    companyUrl: 'https://international.nubank.com.br/about/',
    badge: '140M+ Customers · Digital Banking Platform',
    dotColor: '#926C9C',
    role: 'Global IT Audit Specialist',
    startDate: new Date('2025-09-01'),
    description:
      'Plan and lead IT and security audits of SDLC governance and cloud environments (AWS, GCP), evaluating IT general controls and risk-and-control matrices. Drive AI-assisted audit documentation and control testing.',
  },
  {
    company: 'Nubank (NYSE: NU)',
    companyUrl: 'https://international.nubank.com.br/about/',
    badge: 'Digital Banking Platform',
    dotColor: '#926C9C',
    role: 'IT Internal Auditor',
    startDate: new Date('2023-03-01'),
    endDate: new Date('2025-09-01'),
    description:
      'Evaluated IT general controls and risk matrices across cloud (AWS, GCP) and SDLC. Automated audit testing and data analysis with Databricks and Scala.',
  },
  {
    company: 'MercadoLibre (NASDAQ: MELI)',
    companyUrl: 'https://investor.mercadolibre.com/',
    badge: '18 Countries · LATAM E-Commerce & Fintech',
    dotColor: '#C4B160',
    role: 'IT Internal Auditor',
    startDate: new Date('2021-11-01'),
    endDate: new Date('2023-03-01'),
    description:
      'Designed and ran technical and operational SOX audits, including ITGC and cloud security reviews, across Latin America. Led regional audit projects with multinational teams. Built automated audit analytics in Python (Pandas) and BigQuery for high-volume environments.',
  },
  {
    company: 'StoneCo (NASDAQ: STNE)',
    companyUrl: 'https://www.stoneco.com.br/en/',
    badge: '1.7M+ Active Clients (2021) · Payments Fintech',
    dotColor: '#5A8F70',
    role: 'IT Internal Auditor',
    startDate: new Date('2021-02-01'),
    endDate: new Date('2021-11-01'),
    description:
      'Ran SOX IT and operational audits of payment, antifraud and core financial applications, including PCI DSS-relevant environments. Automated control testing with ACL, Python and BigQuery.',
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
      'Planned and ran IT and business process audits (ITGC, SOX/ICFR) for major financial institutions and other clients. Built process flowcharts and risk-and-control matrices; tested control design and operating effectiveness. Coordinated audit teams; documented findings, recommendations and completion reports.',
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
    objective: 'Deploy a stateful, three-phase audit automation platform built with CrewAI.',
    execution:
      'Orchestrated specialized agent crews across Planning, Fieldwork, and Reporting—each gated by a human approval step modelled on engagement supervision (IIA Standard 2340), not a compliance claim. Integrated native evidence collection directly via AWS APIs (boto3) for reliable verification of IAM, MFA, and S3 security controls.',
    outcome:
      'Built a SHA-256-hashed evidence vault with verbatim source-quote verification, in the spirit of PCAOB AS 1215 documentation integrity (not a compliance claim), so every finding can be traced back to the evidence it cites.',
    tags: ['CrewAI', 'Python', 'AWS APIs', 'SHA-256 Vault'],
  },
  {
    title: 'SCF Auto-Crosswalker',
    repoUrl: 'https://github.com/tvobrachini/scf-auto-crosswalker',
    badge: 'Case Study',
    objective: 'Eliminate manual spreadsheet risk mapping by designing a programmatic framework-as-code crosswalking utility.',
    execution:
      'Developed an automated crosswalking tool that maps unstructured IT policies and AWS Security Hub findings directly to Secure Controls Framework (SCF) control identifiers, which link onward to ISO 27001, NIST, PCI DSS and SOC 2 through the SCF\'s own crosswalk.',
    outcome:
      'Identifies relevant SCF control IDs for human audit review, streamlining multi-framework mapping.',
    tags: ['Python', 'LLM', 'Security Hub', 'SCF', 'Compliance-as-Code'],
  },
];

export const capabilities: CapabilityCategory[] = [
  {
    number: '01',
    category: 'Governance',
    title: 'IT Audit & GRC',
    description: 'Evaluating internal controls, SOX IT general controls, and enterprise technology risk.',
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
    description: 'Assessing cloud security and SDLC governance in AWS and GCP environments.',
    hoverBorderClass: 'hover:border-alpine-slate',
    skills: [
      { name: 'AWS Ecosystem' },
      { name: 'GCP Operations' },
      { name: 'SDLC Governance' },
      { name: 'IAM Policy Modeling' },
      { name: 'Linux / UNIX Admin' },
    ],
  },
  {
    number: '03',
    category: 'Automation',
    title: 'Data & Audit Automation',
    description: 'Engineering programmatic testing, big data analytics, and multi-agent AI systems for audit.',
    hoverBorderClass: 'hover:border-[#B86B49]',
    skills: [
      { name: 'BigQuery' },
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
      { name: 'Spanish', level: 'Basic' },
    ],
  },
];

export const credentials: Credential[] = [
  {
    institution: 'Trinity College Dublin',
    institutionUrl: 'https://www.tcd.ie/about/',
    location: 'Study Abroad • Dublin, Ireland',
    description:
      'Computer Science coursework (2013–2014) through the Science Without Borders exchange program.',
  },
];

export const certificationsAndDegrees = [
  {
    title: 'Technology in IT Management (2012)',
    institution: 'FATEC Bragança Paulista (Tecnólogo, undergraduate technology degree)',
    institutionUrl: 'https://site.cps.sp.gov.br/fatec/',
  },
  {
    title: 'AWS Cloud Audit Academy',
    issuer: '(Cloud Agnostic, AWS training, 2021)',
  },
];

export const publication: Publication = {
  title: 'Impact of systemic management on project development: A study in a software house',
  url: 'https://www.researchgate.net/publication/319282476_Impacto_da_gestao_sistemica_no_desenvolvimento_de_projetos_um_estudo_em_uma_Software_House',
  source: 'ResearchGate',
};
