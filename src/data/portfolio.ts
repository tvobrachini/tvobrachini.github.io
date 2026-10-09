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
    'IT auditor with 10+ years across Big Four (PwC) and three publicly listed fintechs (Nubank, MercadoLibre, StoneCo).',
  subheadlineBody:
    'Specialized in IT general and application controls (ITGC/ITAC), SOX/ICFR, SDLC governance and cloud security (AWS, GCP). I build audit data analytics and AI tooling, from SQL, Python and Scala to open-source multi-agent audit automation with human review at each stage. I map controls and plan audit scope with the Secure Controls Framework (SCF) metaframework, and use AI for data visualization and web publishing. Based in Bragança Paulista, SP, Brazil (UTC-3).',
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
      },
      {
        title: 'IT Internal Auditor',
        startDate: new Date('2023-03-01'),
        endDate: new Date('2025-09-01'),
      },
    ],
    description:
      'Plan and lead risk-based IT and cybersecurity audits of SDLC governance, security governance and cloud environments (AWS, GCP), from risk assessment and scoping to reporting; evaluate ITGCs (identity and access management, change management, program development, IT operations) and risk and control matrices (RCMs). Rate IT risks by likelihood and impact, review risk assessments and risk-acceptance requests, challenge the proposed treatment, and track exceptions and corrective action plans to closure; report audit results to technical and non-technical stakeholders, mainly engineering leads and general managers. Automate audit testing and data analytics with Databricks and Scala; drive the use of AI tools in audit documentation and control testing; report with Google and AWS tools and Power BI. Run audits and issue tracking in an in-house audit management tool built on Jira; audit third-party (vendor) risk (TPRM) and review SOC 2 Type II and ISAE reports; test against control frameworks (ISO 27001, PCI DSS, NIST CSF), mapping controls and scoping with the SCF. Audit an SEC-registered group (Form 20-F, SOX/ICFR) in a highly regulated sector (Brazilian entities regulated by the Banco Central do Brasil), with multinational scope: auditees in Brazil, Mexico, Colombia, Germany and the US. Context: Nu Mexico converted from a SOFIPO to a licensed bank in 2026; Nu Colombia is an SFC-licensed financing company; Nu US holds OCC conditional approval (2026) for a national bank charter.',
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
          'Planned and executed risk-based technical and operational SOX audits across Latin America, including ITGC testing and cloud security reviews; ran walkthroughs and interviews with process and control owners and coordinated with external auditors. Led regional IT audit projects with multinational teams. Built automated audit data analytics in Python (Pandas) and BigQuery SQL for high-volume environments. Audited an SEC-registered group (Form 10-K, SOX) whose payments arm, Mercado Pago, is a Banco Central do Brasil regulated payment institution; covered third-party risk (TPRM), SOC 2 and ISAE report review, and SAP and Oracle audit programs.',
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
          'Ran risk-based SOX IT (ITGC and ITAC) and operational audits of payment, antifraud and core financial applications, including environments in PCI DSS scope. Automated control testing and audit data analytics with ACL, Python and BigQuery; managed audits in Perinity GRC. Audited an SEC-registered group (Form 20-F, SOX) whose payment institution (acquirer and e-money issuer) is regulated by the Banco Central do Brasil; covered third-party risk (TPRM), SOC 2 and ISAE report review, and SAP and Oracle audit programs.',
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
      'Planned and executed IT and business process audits (ITGC, SOX/ICFR) for major financial institutions and other clients, applying COSO and COBIT. Coordinated and consolidated SOX 404 internal-controls testing (IT and business processes) across multinational component teams for a Brazil-headquartered global consumer-goods group with NYSE-listed securities; acted as interim engagement manager at times. Covered the Brazil component of a global client\'s SOX 404 audit, including a system implementation (controls tested before, during and after go-live, with data flow and key reports), reporting to the group engagement team. Prepared and reviewed SOC 1 and SOC 2 attestation engagements for clients. Built process flowcharts and risk and control matrices (RCMs); tested control design and operating effectiveness (TOD/TOE), including system-generated reports (IPE) and segregation of duties. Coordinated audit teams, prepared and reviewed working papers; evaluated deficiencies, documented findings and recommendations, followed up on remediation with management and drafted completion reports.',
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
      'Multi-agent audit platform across Planning, Fieldwork and Reporting, with QA agents that reject and retry, human approval between phases, automated, read-only AWS evidence collection (boto3), a SHA-256-hashed evidence vault, AWS account-ID redaction, and OSCAL export.',
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
      'SOX/J-SOX, ICFR, ITGC (access management, change management, program development/SDLC, IT operations), ITAC, COSO, COBIT, ITIL, PCAOB standards, IIA standards, third-party risk management (TPRM) audits, SOC 1 and SOC 2 attestation (preparer and reviewer), SOC 2 and ISAE assurance report review, NIST CSF, ISO 27001, PCI DSS, SCF (metaframework for control mapping and audit planning), BCP/DR',
  },
  {
    title: 'Regulation',
    skills: 'LGPD/GDPR (privacy), CMN Res. 4893 (cyber policy and cloud), Res. BCB 85 (payment institutions)',
  },
  {
    title: 'Audit tools & ERP',
    skills: 'Perinity GRC (StoneCo), in-house Jira-based audit management (Nubank), ServiceNow GRC, Jira; SAP and Oracle (audit work programs applied)',
  },
  {
    title: 'Security & cloud',
    skills: 'AWS, GCP, IAM, SDLC/DevSecOps, vulnerability management',
  },
  {
    title: 'Data & automation',
    skills:
      'SQL, Python, Scala, Databricks, BigQuery, ACL, Alteryx, Power BI, Google and AWS reporting, CrewAI, LangGraph, Docker, GitHub Actions',
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
    description: 'Brazilian higher-education undergraduate technology degree (Tecnólogo).',
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
