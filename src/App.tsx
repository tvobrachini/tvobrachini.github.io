import { useState, useEffect } from 'react';

function getDurationPassed(startDate: Date, endDate: Date = new Date()): string {
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

const navLinks = [
  { href: '#executive-summary', label: '01. Executive Summary' },
  { href: '#professional-experience', label: '02. Professional Experience' },
  { href: '#strategic-projects', label: '03. Strategic Projects' },
  { href: '#capabilities', label: '04. Capabilities' },
];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('executive-summary');
  const [showScrollTop, setShowScrollTop] = useState(false);

  // Scroll spy
  useEffect(() => {
    const sectionIds = navLinks.map(({ href }) => href.slice(1));
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setShowScrollTop(scrollY > 300);
      let current = sectionIds[0];
      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (el && el.offsetTop - 120 <= scrollY) {
          current = id;
        }
      }
      setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on Escape
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setMenuOpen(false);
    };
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <div className="min-h-screen bg-alpine-obsidian text-alpine-crepe font-sans selection:bg-alpine-moss selection:text-alpine-crepe leading-relaxed">
      
      {/* Top Border */}
      <div className="fixed top-0 left-0 w-full h-1 bg-alpine-stone z-50"></div>

      {/* Navigation */}
      <nav className="fixed w-full z-40 top-1 bg-alpine-obsidian/90 backdrop-blur-md border-b border-alpine-stone py-5">
        <div className="max-w-5xl mx-auto px-6 flex justify-between items-center">
          <a href="#executive-summary" className="text-xl font-serif font-bold text-alpine-crepe tracking-tight hover:text-alpine-moss transition-colors">
            tvobrachini
          </a>

          {/* Desktop nav */}
          <div className="hidden md:flex gap-8 text-xs font-mono uppercase tracking-widest text-alpine-cloud">
            {navLinks.map(({ href, label }) => (
              <a
                key={href}
                href={href}
                className={`transition-all pb-1 border-b-2 hover:border-alpine-moss hover:text-alpine-crepe ${
                  activeSection === href.slice(1) ? 'border-alpine-moss text-alpine-crepe font-bold' : 'border-transparent'
                }`}
              >
                {label}
              </a>
            ))}
          </div>

          {/* Mobile menu toggle */}
          <button
            className="md:hidden font-mono text-xs border border-alpine-stone px-3 py-1 uppercase text-alpine-cloud hover:bg-alpine-stone hover:text-alpine-crepe transition-colors"
            onClick={() => setMenuOpen(prev => !prev)}
          >
            {menuOpen ? 'CLOSE' : 'MENU'}
          </button>
        </div>

        {/* Mobile dropdown */}
        {menuOpen && (
          <div className="md:hidden border-t border-alpine-stone bg-alpine-basalt mt-4">
            <div className="max-w-5xl mx-auto px-6 py-6 flex flex-col gap-4 font-mono text-xs uppercase tracking-widest">
              {navLinks.map(({ href, label }) => (
                <a
                  key={href}
                  href={href}
                  className={`transition-colors py-2 border-b border-alpine-stone/50 ${
                    activeSection === href.slice(1) ? 'text-alpine-moss font-bold' : 'text-alpine-cloud'
                  }`}
                  onClick={() => setMenuOpen(false)}
                >
                  {label}
                </a>
              ))}
            </div>
          </div>
        )}
      </nav>

      <main className="max-w-4xl mx-auto px-6 pt-48 pb-32 space-y-40">

        {/* Hero Section */}
        <section id="executive-summary" className="space-y-10 relative">
          
          <div className="font-mono text-xs tracking-widest uppercase text-alpine-moss border-b border-alpine-stone pb-3 mb-8 inline-block">
            IT Risk & Governance // Executive Summary
          </div>

          <h1 className="text-5xl md:text-7xl font-serif font-black text-alpine-crepe leading-[1.1] tracking-tight">
            Navigating the expansive landscape of <span className="italic text-alpine-slate">IT risk.</span>
          </h1>

          <div className="border-l-2 border-alpine-moss pl-6 sm:pl-8 mt-10">
            <p className="text-xl text-alpine-crepe/90 max-w-2xl leading-relaxed">
              Technology and AI are fundamentally shifting the ground beneath modern enterprise capabilities. 
            </p>
            <p className="text-lg text-alpine-cloud max-w-2xl leading-relaxed mt-4">
              I operate as a deeply technical Senior IT Internal Auditor. By bridging the gap between granular technical operations and broad executive business risk, I design enduring control frameworks capable of withstanding the elements of a rapidly changing technical frontier.
            </p>
          </div>

          <div className="flex flex-wrap gap-4 pt-10 font-mono text-xs uppercase tracking-widest">
            <a href="https://www.linkedin.com/in/tvobrachini" target="_blank" rel="noreferrer" className="bg-alpine-crepe text-alpine-obsidian px-8 py-3 border border-alpine-crepe hover:bg-transparent hover:text-alpine-crepe transition-colors">
              LinkedIn Profile
            </a>
            <a href="https://github.com/tvobrachini" target="_blank" rel="noreferrer" className="bg-transparent text-alpine-cloud px-8 py-3 border border-alpine-stone hover:border-alpine-crepe hover:text-alpine-crepe transition-colors">
              GitHub Repository
            </a>
            <a href="mailto:tvobrachini@gmail.com" className="bg-transparent text-alpine-cloud px-8 py-3 border-b border-transparent hover:border-alpine-moss transition-colors content-center">
              Direct Contact
            </a>
          </div>
        </section>

        {/* Experience Section */}
        <section id="professional-experience" className="space-y-16">
          <div className="border-b border-alpine-stone pb-4 flex flex-col md:flex-row md:items-baseline md:justify-between">
            <h2 className="text-3xl font-serif font-bold text-alpine-crepe">Professional Experience</h2>
            <p className="font-mono text-xs text-alpine-cloud mt-2 md:mt-0 uppercase tracking-widest">10+ Years of Excellence</p>
          </div>

          <div className="border-l border-alpine-stone pl-6 md:pl-10 space-y-16 relative">

            {/* Nubank */}
            <div className="relative group">
              <div className="absolute left-[-28px] md:left-[-44px] top-1.5 w-3 h-3 bg-alpine-obsidian border-2 border-alpine-moss group-hover:bg-alpine-moss transition-colors"></div>
              <div className="flex flex-col md:flex-row md:justify-between md:items-baseline mb-2">
                <h3 className="text-2xl font-serif font-bold text-alpine-crepe">
                  <a href="https://international.nubank.com.br/about/" target="_blank" rel="noreferrer" className="hover:text-alpine-moss transition-colors">Nubank</a>
                </h3>
                <span className="font-mono text-xs text-alpine-moss font-bold tracking-widest uppercase mt-1 md:mt-0">Mar 2023 - Present ({getDurationPassed(new Date('2023-03-01'))})</span>
              </div>
              <div className="font-sans font-bold tracking-wide text-alpine-slate mb-4">IT Internal Audit Specialist</div>
              <p className="text-alpine-cloud leading-relaxed max-w-3xl">
                Lead the holistic evaluation of complex IT general controls and risk matrices. Spearhead the deployment of AI-driven automation for audit documentation and control testing methodologies within a high-velocity fintech ecosystem, significantly enhancing overall audit efficiency and risk posture.
              </p>
            </div>

            {/* Mercado Livre */}
            <div className="relative group">
              <div className="absolute left-[-28px] md:left-[-44px] top-1.5 w-3 h-3 bg-alpine-obsidian border-2 border-alpine-stone group-hover:bg-alpine-moss transition-colors"></div>
              <div className="flex flex-col md:flex-row md:justify-between md:items-baseline mb-2">
                <h3 className="text-2xl font-serif font-bold text-alpine-crepe">
                  <a href="https://investor.mercadolibre.com/" target="_blank" rel="noreferrer" className="hover:text-alpine-moss transition-colors">Mercado Livre</a>
                </h3>
                <span className="font-mono text-xs text-alpine-cloud font-bold tracking-widest uppercase mt-1 md:mt-0">Nov 2021 - Mar 2023 ({getDurationPassed(new Date('2021-11-01'), new Date('2023-03-01'))})</span>
              </div>
              <div className="font-sans font-bold tracking-wide text-alpine-slate mb-4">IT Internal Audit & Cloud Security</div>
              <p className="text-alpine-cloud leading-relaxed max-w-3xl">
                Directed comprehensive IT General Controls (ITGC) assessments and advanced cloud security audits across LATAM's premier e-commerce infrastructure. Orchestrated cross-functional reviews aligning technical operations with regulatory compliance, fortifying the enterprise security perimeter.
              </p>
            </div>

            {/* Stone */}
            <div className="relative group">
              <div className="absolute left-[-28px] md:left-[-44px] top-1.5 w-3 h-3 bg-alpine-obsidian border-2 border-alpine-stone group-hover:bg-alpine-moss transition-colors"></div>
              <div className="flex flex-col md:flex-row md:justify-between md:items-baseline mb-2">
                <h3 className="text-2xl font-serif font-bold text-alpine-crepe">
                  <a href="https://www.stoneco.com.br/en/" target="_blank" rel="noreferrer" className="hover:text-alpine-moss transition-colors">Stone</a>
                </h3>
                <span className="font-mono text-xs text-alpine-cloud font-bold tracking-widest uppercase mt-1 md:mt-0">Feb 2021 - Nov 2021 (10 MOS)</span>
              </div>
              <div className="font-sans font-bold tracking-wide text-alpine-slate mb-4">IT Internal Audit</div>
              <p className="text-alpine-cloud leading-relaxed max-w-3xl">
                Architected and executed rigorous internal audit testing over mission-critical financial applications and core infrastructure, specializing in PCI-DSS compliance and ensuring secure, high-availability transaction environments.
              </p>
            </div>

            {/* PwC */}
            <div className="relative group">
              <div className="absolute left-[-28px] md:left-[-44px] top-1.5 w-3 h-3 bg-alpine-obsidian border-2 border-alpine-stone group-hover:bg-alpine-moss transition-colors"></div>
              <div className="flex flex-col md:flex-row md:justify-between md:items-baseline mb-2">
                <h3 className="text-2xl font-serif font-bold text-alpine-crepe">
                  <a href="https://www.pwc.com/gx/en/about.html" target="_blank" rel="noreferrer" className="hover:text-alpine-moss transition-colors">PwC</a>
                </h3>
                <span className="font-mono text-xs text-alpine-cloud font-bold tracking-widest uppercase mt-1 md:mt-0">Jul 2015 - Feb 2021 (5 YRS 8 MOS)</span>
              </div>
              <div className="font-sans font-bold tracking-wide text-alpine-slate mb-4">Risk Assurance Senior Associate</div>
              <p className="text-alpine-cloud leading-relaxed max-w-3xl">
                Orchestrated end-to-end IT and business process audits for diverse global clients. Developed comprehensive flowcharts and risk matrices, and rigorously evaluated the operational effectiveness of internal controls over financial reporting (SOX) to mitigate enterprise risks.
              </p>
            </div>

            {/* Foundational Era */}
            <div className="relative pt-8 mt-12 border-t border-alpine-stone/50">
              <div className="absolute left-[-24px] md:[-40px] top-14 w-6 border-b border-alpine-stone/50"></div>
              <div className="pt-2">
                <h4 className="font-serif font-bold text-lg text-alpine-crepe mb-2">Foundational Engineering (2009 - 2015)</h4>
                <p className="font-mono text-xs text-alpine-cloud mb-4 tracking-widest uppercase">Software Development & Infrastructure</p>
                <div className="text-sm text-alpine-cloud/80 leading-relaxed max-w-3xl space-y-4">
                  <p>Before shifting focus to IT Audit and GRC, my foundation was forged in hands-on technical environments across several roles:</p>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <span className="text-alpine-moss font-mono mr-2">›</span>
                      <span><strong className="text-alpine-crepe font-medium">PHP Developer</strong> at Tmax Technology (Jul 2014 - Jul 2015)</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-alpine-moss font-mono mr-2">›</span>
                      <span><strong className="text-alpine-crepe font-medium">Software Development Intern</strong> at OSG Sulamericana (Jul 2012 - Jul 2013). Supported J-SOX compliance upgrades and developed intranet applications using Python/Django and Progress 4GL.</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-alpine-moss font-mono mr-2">›</span>
                      <span><strong className="text-alpine-crepe font-medium">Software Developer</strong> at 3Wise Tecnologia (Jun 2011 - May 2012). Built full-stack import/export modules for Honda Trade Division using VB6, ASP.NET, C# and MySQL/Oracle databases.</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* Deployments Section */}
        <section id="strategic-projects" className="space-y-16">
          <div className="border-b border-alpine-stone pb-4 flex flex-col md:flex-row md:items-baseline md:justify-between">
            <h2 className="text-3xl font-serif font-bold text-alpine-crepe">Strategic Projects</h2>
            <p className="font-mono text-xs text-alpine-cloud mt-2 md:mt-0 uppercase tracking-widest">Automation & Architecture</p>
          </div>

          <div className="grid gap-8">

            {/* Project: Swarm */}
            <div className="border border-alpine-stone bg-alpine-basalt p-8 md:p-10 relative group hover:border-alpine-moss transition-colors">
              <div className="mb-8 border-b border-alpine-stone pb-6">
                <h3 className="text-2xl font-serif font-bold text-alpine-crepe">
                  <a href="https://github.com/tvobrachini/grc-audit-swarm" target="_blank" rel="noreferrer" className="hover:text-alpine-moss transition-colors flex items-center gap-3">
                    GRC Audit Swarm <span className="font-mono text-xs text-alpine-cloud bg-alpine-stone px-2 py-1">Case Study</span>
                  </a>
                </h3>
              </div>

              <div className="space-y-6 text-alpine-cloud text-sm md:text-base">
                <p className="leading-relaxed">
                  <strong className="font-mono font-bold uppercase text-alpine-moss block mb-1">Objective</strong> 
                  Deploy a stateful, three-phase audit automation engine powered by CrewAI and Groq.
                </p>
                <p className="leading-relaxed">
                  <strong className="font-mono font-bold uppercase text-alpine-slate block mb-1">Execution</strong> 
                  Orchestrated specialized agent crews across Planning, Fieldwork, and Reporting—each gated by human approval to adhere to IIA Standard 2340. Integrated native evidence collection directly via AWS APIs for reliable verification of IAM, MFA, and S3 security controls.
                </p>
                <p className="leading-relaxed">
                  <strong className="font-mono font-bold uppercase text-alpine-leather block mb-1">Outcome</strong> 
                  Established an immutable evidence vault leveraging PCAOB AS 1215 compliant SHA-256 hashing and verbatim source-quote verification, virtually eliminating AI hallucinations in automated testing.
                </p>
              </div>

              <div className="mt-10 flex flex-wrap gap-3 font-mono text-xs font-medium">
                {['CrewAI', 'Groq', 'AWS APIs', 'SHA-256 Vault', 'IIA 2340'].map(tag => (
                  <span key={tag} className="border border-alpine-stone/60 text-alpine-cloud px-3 py-1 uppercase">{tag}</span>
                ))}
              </div>
            </div>

            {/* Project: Crosswalker */}
            <div className="border border-alpine-stone bg-alpine-basalt p-8 md:p-10 relative group hover:border-alpine-moss transition-colors">
              <div className="mb-8 border-b border-alpine-stone pb-6">
                <h3 className="text-2xl font-serif font-bold text-alpine-crepe">
                  <a href="https://github.com/tvobrachini/scf-auto-crosswalker" target="_blank" rel="noreferrer" className="hover:text-alpine-moss transition-colors flex items-center gap-3">
                    SCF Auto-Crosswalker <span className="font-mono text-xs text-alpine-cloud bg-alpine-stone px-2 py-1">Case Study</span>
                  </a>
                </h3>
              </div>

              <div className="space-y-6 text-alpine-cloud text-sm md:text-base">
                <p className="leading-relaxed">
                  <strong className="font-mono font-bold uppercase text-alpine-moss block mb-1">Objective</strong> 
                  Eliminate pervasive manual spreadsheet risk mapping by designing a centralized, programmatic Framework-as-Code data hub.
                </p>
                <p className="leading-relaxed">
                  <strong className="font-mono font-bold uppercase text-alpine-slate block mb-1">Execution</strong> 
                  Developed an AI-powered Master Controls Database utilizing a high-performance parsed JSON engine. This maps raw, unstructured IT policies and granular Cloud Security findings accurately to the Secure Controls Framework (SCF).
                </p>
                <p className="leading-relaxed">
                  <strong className="font-mono font-bold uppercase text-alpine-leather block mb-1">Outcome</strong> 
                  Enabled immediate, reliable generation of missing control checklists across critical regulations (SOC 2, GDPR, PCI). The architecture serves as the definitive 'Source of Truth' for downstream execution swarms.
                </p>
              </div>

              <div className="mt-10 flex flex-wrap gap-3 font-mono text-xs font-medium">
                {['Docker', 'uv', 'Streamlit', 'GenAI', 'JSON Engine'].map(tag => (
                  <span key={tag} className="border border-alpine-stone/60 text-alpine-cloud px-3 py-1 uppercase">{tag}</span>
                ))}
              </div>
            </div>

          </div>
        </section>

        {/* Skills Section */}
        <section id="capabilities" className="space-y-16">
          <div className="border-b border-alpine-stone pb-4 flex flex-col md:flex-row md:items-baseline md:justify-between">
            <h2 className="text-3xl font-serif font-bold text-alpine-crepe">Capabilities</h2>
            <p className="font-mono text-xs text-alpine-cloud mt-2 md:mt-0 uppercase tracking-widest">Frameworks & Technologies</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">

            {/* Toolbox 1 */}
            <div className="border border-alpine-stone bg-alpine-basalt p-8 hover:border-alpine-moss transition-colors">
              <div className="font-mono text-xs tracking-widest text-alpine-cloud mb-6 uppercase border-b border-alpine-stone/50 pb-2">01. Governance</div>
              <h3 className="text-xl font-serif font-bold mb-4 text-alpine-crepe">IT Audit & GRC</h3>
              <p className="text-sm text-alpine-cloud/80 mb-8 min-h-[4rem]">
                Evaluating internal controls, enterprise scale SOX compliance, and mapping nuanced IT risks.
              </p>
              <ul className="font-mono text-xs text-alpine-cloud space-y-3 uppercase tracking-widest">
                <li>• ISO 27001</li>
                <li>• NIST CSF</li>
                <li>• COBIT & SOX</li>
                <li>• PCI-DSS</li>
                <li>• Secure Controls Framework</li>
              </ul>
            </div>

            {/* Toolbox 2 */}
            <div className="border border-alpine-stone bg-alpine-basalt p-8 hover:border-alpine-slate transition-colors">
              <div className="font-mono text-xs tracking-widest text-alpine-cloud mb-6 uppercase border-b border-alpine-stone/50 pb-2">02. Architecture</div>
              <h3 className="text-xl font-serif font-bold mb-4 text-alpine-crepe">Cloud Security</h3>
              <p className="text-sm text-alpine-cloud/80 mb-8 min-h-[4rem]">
                Securing digital environments and comprehensively assessing cloud security maturity.
              </p>
              <ul className="font-mono text-xs text-alpine-cloud space-y-3 uppercase tracking-widest">
                <li>• AWS Ecosystem</li>
                <li>• GCP Operations</li>
                <li>• IAM Policy Modeling</li>
                <li>• Linux / UNIX Admin</li>
              </ul>
            </div>

            {/* Toolbox 3 */}
            <div className="border border-alpine-stone bg-alpine-basalt p-8 hover:border-alpine-leather transition-colors">
              <div className="font-mono text-xs tracking-widest text-alpine-cloud mb-6 uppercase border-b border-alpine-stone/50 pb-2">03. Automation</div>
              <h3 className="text-xl font-serif font-bold mb-4 text-alpine-crepe">Software & GenAI</h3>
              <p className="text-sm text-alpine-cloud/80 mb-8 min-h-[4rem]">
                Architecting programmatic validations and leveraging multi-agent LLM systems for auditing.
              </p>
              <ul className="font-mono text-xs text-alpine-cloud space-y-3 uppercase tracking-widest">
                <li>• Python / TypeScript</li>
                <li>• CrewAI / LangGraph</li>
                <li>• Docker / CI/CD</li>
                <li>• Claude Code / Automations</li>
              </ul>
            </div>

          </div>
        </section>

        {/* Education & Credentials Section */}
        <section id="credentials" className="space-y-16">
          <div className="border-b border-alpine-stone pb-4 flex flex-col md:flex-row md:items-baseline md:justify-between">
            <h2 className="text-3xl font-serif font-bold text-alpine-crepe">Credentials & Education</h2>
            <p className="font-mono text-xs text-alpine-cloud mt-2 md:mt-0 uppercase tracking-widest">Academic Foundations</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="border border-alpine-stone bg-alpine-basalt p-8 relative">
              <h3 className="text-xl font-serif font-bold mb-2 text-alpine-crepe">
                <a href="https://www.tcd.ie/about/" target="_blank" rel="noreferrer" className="hover:text-alpine-moss transition-colors">Trinity College Dublin</a>
              </h3>
              <div className="font-mono text-xs text-alpine-slate mb-4 uppercase tracking-widest">Study Abroad • Dublin, Ireland</div>
              <p className="text-sm text-alpine-cloud/80 leading-relaxed">
                Completed international coursework in Computer Science, Business, and Statistics (2013-2014) at Ireland's premier university. Developed a global perspective on technology and business strategy.
              </p>
            </div>

            <div className="border border-alpine-stone bg-alpine-basalt p-8 relative space-y-8">
              <div>
                <h3 className="text-xl font-serif font-bold mb-4 text-alpine-crepe">Certifications & Degrees</h3>
                <ul className="text-sm text-alpine-cloud/80 space-y-3">
                  <li className="flex items-start">
                    <span className="text-alpine-moss font-mono mr-2">›</span>
                    <strong className="text-alpine-cloud mr-1">Cloud Audit Academy</strong> (Cloud Agnostic)
                  </li>
                  <li className="flex items-start">
                    <span className="text-alpine-moss font-mono mr-2">›</span>
                    <span><strong className="text-alpine-cloud mr-1">Information Technology</strong> at <a href="https://site.cps.sp.gov.br/fatec/" target="_blank" rel="noreferrer" className="hover:text-alpine-moss transition-colors border-b border-alpine-stone hover:border-alpine-moss pb-0.5">FATEC Bragança Paulista</a></span>
                  </li>
                </ul>
              </div>

              <div className="border-t border-alpine-stone/50 pt-8">
                <h3 className="text-xl font-serif font-bold mb-4 text-alpine-crepe">Publications</h3>
                <a
                  href="https://www.researchgate.net/publication/319282476_Impacto_da_gestao_sistemica_no_desenvolvimento_de_projetos_um_estudo_em_uma_Software_House"
                  target="_blank"
                  rel="noreferrer"
                  className="group block"
                >
                  <p className="text-sm text-alpine-cloud/80 font-medium group-hover:text-alpine-moss transition-colors leading-relaxed">
                    "Impact of systemic management on project development: A study in a software house"
                  </p>
                  <span className="font-mono text-xs text-alpine-slate uppercase tracking-widest mt-2 block">ResearchGate</span>
                </a>
              </div>
            </div>
          </div>
        </section>

      </main>

      {/* Scroll-to-top button */}
      {showScrollTop && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          aria-label="Scroll to top"
          className="fixed bottom-8 right-8 z-50 px-4 py-3 bg-alpine-obsidian/80 backdrop-blur-sm border border-alpine-stone text-alpine-cloud font-mono text-xs uppercase tracking-widest hover:border-alpine-moss hover:text-alpine-crepe transition-all hover:-translate-y-1 shadow-lg shadow-black/50"
        >
          [ ↑ TOP ]
        </button>
      )}

      {/* Footer */}
      <footer className="border-t border-alpine-stone py-12 text-center md:text-left bg-alpine-basalt mt-20">
        <div className="max-w-4xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="font-mono text-xs text-alpine-cloud uppercase tracking-widest">
            © {new Date().getFullYear()} tvobrachini
          </p>
          <div className="font-serif italic text-sm text-alpine-cloud/70">
            Precision in a complex landscape.
          </div>
        </div>
      </footer>

    </div>
  );
}

export default App;
