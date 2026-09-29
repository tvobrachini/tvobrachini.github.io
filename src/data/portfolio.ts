export interface NavLink {
  href: string;
  label: string;
}

export interface Role {
  title: string;
  startDate: Date;
  endDate?: Date; // undefined means "Present"
  description?: string;
}

// One entry per employer; roles are listed newest first.
export interface ExperienceItem {
  company: string;
  companyUrl: string;
  badge: string;
  dotColor: string;
  roles: Role[];
  // Shown after the roles when one description covers all of them (as on the CV).
  description?: string;
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
  caseStudyUrl: string;
  stack: string;
  summary: string;
  sample?: SampleOutput;
}

// Values copied from a file committed in the project repo, never written by hand.
export interface SampleOutput {
  caption: string;
  sourceUrl: string;
  rows: [label: string, value: string][];
}

export interface SkillGroup {
  title: string;
  skills: string;
}

export interface EducationItem {
  title: string;
  institution: string;
  institutionUrl: string;
  period: string;
  description: string;
}

export interface TrainingItem {
  title: string;
  issuer: string;
}

export interface Publication {
  title: string;
  url: string;
  source: string;
}

export function formatDuration(startDate: Date, endDate: Date = new Date()): string {
  let years = endDate.getUTCFullYear() - startDate.getUTCFullYear();
  let months = endDate.getUTCMonth() - startDate.getUTCMonth();
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
  { href: '#executive-summary', label: 'Summary' },
  { href: '#professional-experience', label: 'Experience' },
  { href: '#strategic-projects', label: 'Projects' },
  { href: '#capabilities', label: 'Skills' },
  { href: '#credentials', label: 'Education' },
];

export const personalInfo = {
  name: 'Tiago Vinícius de Oliveira Brachini',
  displayName: 'Tiago Brachini',
  tagline: 'Global IT Audit Specialist',
  headline: 'IT audit of cloud and SDLC governance, with data and AI tooling.',
  subheadlineLead:
    '10+ years of IT audit and technology risk experience across Big Four (PwC) and three publicly listed fintechs (Nubank, MercadoLibre, StoneCo).',
  subheadlineBody:
    'I plan and lead IT and security audits across cloud environments (AWS, GCP) and SDLC governance, evaluate IT general controls, and build data analytics and AI tooling (Databricks, Scala, Python, CrewAI) to automate control testing. Based in Bragança Paulista, SP, Brazil (UTC-3), open to remote roles worldwide.',
  email: 'tvobrachini@gmail.com',
  linkedinUrl: 'https://www.linkedin.com/in/tvobrachini',
  githubUrl: 'https://github.com/tvobrachini',
  siteUrl: 'https://tvobrachini.github.io',
  profileImage: '/profile.webp',
  cvEnUrl: '/Tiago_Brachini_CV_EN_2026.pdf',
  cvPtUrl: '/Tiago_Brachini_CV_PT_2026.pdf',
};

export const experiences: ExperienceItem[] = [
  {
    company: 'Nubank (NYSE: NU)',
    companyUrl: 'https://international.nubank.com.br/about/',
    badge: '140M+ customers | US launch Sep 2026',
    dotColor: '#a889b0',
    roles: [
      {
        title: 'Global IT Audit Specialist',
        startDate: new Date('2025-09-01'),
        description:
          'Plan and lead IT and security audits of SDLC governance and cloud environments (AWS, GCP), evaluating IT general controls and risk-and-control matrices. Drive AI-assisted audit documentation and control testing.',
      },
      {
        title: 'IT Internal Auditor',
        startDate: new Date('2023-03-01'),
        endDate: new Date('2025-09-01'),
        description:
          'Evaluated IT general controls and risk matrices across cloud (AWS, GCP) and SDLC. Automated audit testing and data analysis with Databricks and Scala.',
      },
    ],
  },
  {
    company: 'MercadoLibre (NASDAQ: MELI)',
    companyUrl: 'https://investor.mercadolibre.com/',
    badge: '18 countries | LATAM e-commerce and fintech',
    dotColor: '#C4B160',
    roles: [
      {
        title: 'IT Internal Auditor',
        startDate: new Date('2021-11-01'),
        endDate: new Date('2023-03-01'),
        description:
          'Designed and ran technical and operational SOX audits, including ITGC and cloud security reviews, across Latin America. Led regional audit projects with multinational teams. Built automated audit analytics in Python (Pandas) and BigQuery for high-volume environments.',
      },
    ],
  },
  {
    company: 'StoneCo (NASDAQ: STNE)',
    companyUrl: 'https://www.stoneco.com.br/en/',
    badge: '1.7M+ active clients (2021) | Payments fintech',
    dotColor: '#5A8F70',
    roles: [
      {
        title: 'IT Internal Auditor',
        startDate: new Date('2021-02-01'),
        endDate: new Date('2021-11-01'),
        description:
          'Ran SOX IT and operational audits of payment, antifraud and core financial applications, including environments in PCI DSS scope. Automated control testing with ACL, Python and BigQuery.',
      },
    ],
  },
  {
    company: 'PwC Brazil',
    companyUrl: 'https://www.pwc.com/gx/en/about.html',
    badge: 'Big Four accounting | Risk Assurance',
    dotColor: '#B86B49',
    roles: [
      { title: 'Senior Associate', startDate: new Date('2018-07-01'), endDate: new Date('2021-02-01') },
      { title: 'Experienced Associate', startDate: new Date('2017-07-01'), endDate: new Date('2018-07-01') },
      { title: 'Associate', startDate: new Date('2016-07-01'), endDate: new Date('2017-07-01') },
      { title: 'Trainee', startDate: new Date('2015-07-01'), endDate: new Date('2016-07-01') },
    ],
    description:
      'Planned and ran IT and business process audits (ITGC, SOX/ICFR) for major financial institutions and other clients. Built process flowcharts and risk-and-control matrices; tested control design and operating effectiveness. Coordinated audit teams; documented findings and recommendations and drafted completion reports.',
  },
];

export const foundationalRoles: FoundationalRole[] = [
  {
    title: 'PHP Developer',
    company: 'Tmax Technology',
    period: 'Jul 2014 – Jul 2015',
  },
  {
    title: 'Software Development Intern',
    company: 'OSG Sulamericana',
    period: 'Jul 2012 – Jul 2013',
  },
  {
    title: 'Research Intern',
    company: 'IFSP',
    period: 'Jun 2012 – Dec 2012',
    details: 'Research internship on the semantic web.',
  },
  {
    title: 'Software Developer',
    company: '3Wise Tecnologia',
    period: 'Jun 2011 – May 2012',
  },
];

export const strategicProjects: StrategicProject[] = [
  {
    title: 'GRC Audit Swarm',
    repoUrl: 'https://github.com/tvobrachini/grc-audit-swarm',
    caseStudyUrl: 'https://github.com/tvobrachini/grc-audit-swarm/blob/master/CASE_STUDY.md',
    stack: 'Python, CrewAI',
    summary:
      'Multi-agent audit platform across Planning, Fieldwork and Reporting, with QA agents that reject and retry, human approval between phases, read-only AWS evidence collection (boto3), a SHA-256-hashed evidence vault, AWS account-ID redaction, and OSCAL export.',
    // From docs/sample-run/oscal.json and report.md on master (demo run of 2026-09-27).
    sample: {
      caption: 'One finding from the committed sample run. Demo mode: synthetic evidence, no AWS account, no language model.',
      sourceUrl: 'https://github.com/tvobrachini/grc-audit-swarm/tree/master/docs/sample-run',
      rows: [
        ['control', 'CTRL-02 | Exception | 3 items tested, 1 exception'],
        ['quote', 'Bucket demo-analytics-exports: Verdict=PUBLIC, Reasons=ACL grants AllUsers READ'],
        ['vault', '6d4f9f6d-ac46-4fea-a2cd-9f628a3b544e | quote verified in vault'],
        ['review', 'Signed off at the Fieldwork gate by Ivan In-Charge (demo)'],
        ['trail', 'Chain intact (sha256), checked at export'],
        ['export', 'OSCAL 1.2.1 Assessment Results'],
      ],
    },
  },
  {
    title: 'SCF Auto-Crosswalker',
    repoUrl: 'https://github.com/tvobrachini/scf-auto-crosswalker',
    caseStudyUrl: 'https://github.com/tvobrachini/scf-auto-crosswalker/blob/main/CASE_STUDY.md',
    stack: 'Python, LLM',
    summary:
      'Suggests Secure Controls Framework control IDs for IT policies, AWS Security Hub findings and audit scopes, for human review, and checks a control list against frameworks such as SOC 2 per requirement (gap analysis, no language model). CSV and OSCAL export; CI with ruff and bandit.',
  },
];

export const skills: SkillGroup[] = [
  {
    title: 'Governance & risk',
    skills:
      'ITGC (access, change management, IT operations), ITAC, SOX/J-SOX, COBIT, COSO, NIST CSF, ISO 27001, PCI DSS, SCF, LGPD/GDPR, CMN Res. 4893, BCP/DR',
  },
  {
    title: 'Security & cloud',
    skills: 'AWS, GCP, IAM, SDLC/DevSecOps, vulnerability management',
  },
  {
    title: 'Data & automation',
    skills:
      'SQL, Python, Scala, Databricks, BigQuery, ACL, Alteryx, Power BI, CrewAI, LangGraph, Docker, GitHub Actions',
  },
  {
    title: 'Languages',
    skills: 'Portuguese (native), English (fluent), Spanish (basic)',
  },
];

export const education: EducationItem[] = [
  {
    title: 'Tecnólogo in IT Management',
    institution: 'FATEC Bragança Paulista',
    institutionUrl: 'https://www.cps.sp.gov.br/fatec/',
    period: '2012',
    description: 'Undergraduate technology degree (Tecnólogo).',
  },
  {
    title: 'Computer Science exchange',
    institution: 'Trinity College Dublin',
    institutionUrl: 'https://www.tcd.ie/about/',
    period: '2013–2014',
    description: 'Computer Science coursework in Dublin, Ireland, through the Science Without Borders exchange program.',
  },
];

export const training: TrainingItem[] = [
  {
    title: 'AWS Cloud Audit Academy (Cloud Agnostic)',
    issuer: 'AWS training, 2021',
  },
];

export const publication: Publication = {
  title: 'Impact of systemic management on project development: A study in a software house',
  url: 'https://www.researchgate.net/publication/319282476_Impacto_da_gestao_sistemica_no_desenvolvimento_de_projetos_um_estudo_em_uma_Software_House',
  source: 'ResearchGate',
};
