import { Github, Linkedin, Mail, Shield, Server, FileText } from 'lucide-react';

function getDurationPassed(startDate: Date): string {
  const now = new Date();
  const diffTime = Math.abs(now.getTime() - startDate.getTime());
  const diffMonths = Math.floor(diffTime / (1000 * 60 * 60 * 24 * 30.416));
  const years = Math.floor(diffMonths / 12);
  const months = diffMonths % 12;

  if (years > 0 && months > 0) return `${years} yr${years > 1 ? 's' : ''} ${months} mo${months > 1 ? 's' : ''}`;
  if (years > 0) return `${years} yr${years > 1 ? 's' : ''}`;
  return `${months} mo${months > 1 ? 's' : ''}`;
}

function App() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-[#ededed] font-sans selection:bg-purple-500/30">

      {/* Navigation */}
      <nav className="fixed w-full z-50 top-0 bg-[#0a0a0a]/80 backdrop-blur-md border-b border-white/5 py-4">
        <div className="max-w-5xl mx-auto px-6 flex justify-between items-center">
          <span className="text-xl font-bold tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-500">
            tvobrachini
          </span>
          <div className="flex gap-6 text-sm font-medium text-gray-400">
            <a href="#about" className="hover:text-white transition-colors">About</a>
            <a href="#experience" className="hover:text-white transition-colors">Experience</a>
            <a href="#projects" className="hover:text-white transition-colors">Projects</a>
            <a href="#skills" className="hover:text-white transition-colors">Skills</a>
          </div>
        </div>
      </nav>

      <main className="max-w-5xl mx-auto px-6 pt-32 pb-24 space-y-32">

        {/* Hero Section */}
        <section className="space-y-8 animate-fade-in-up">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-300 text-sm">
            <Shield size={14} />
            <span>Specialist IT Auditor</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold tracking-tight leading-[1.1]">
            Bridging the gap between <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-blue-400 to-indigo-400">
              technical operations
            </span><br className="hidden md:block" />
            and business risk.
          </h1>

          <p className="text-xl text-gray-400 max-w-2xl leading-relaxed">
            Hi, I'm Tiago Brachini. I am a dedicated IT Internal & External Auditor with a decade of hands-on expertise evaluating complex technical environments.
            <br /><br />
            My deep background in IT controls naturally extends into robust capabilities across <b>InfoSec GRC, Cloud Security, and IT Security Compliance</b> — helping organizations build secure, transparent, and resilient digital architectures.
          </p>

          <div className="flex gap-4 pt-4">
            <a href="https://www.linkedin.com/in/tvobrachini" target="_blank" rel="noreferrer" className="flex items-center gap-2 bg-white text-black px-6 py-3 rounded-lg font-medium hover:bg-gray-200 transition-colors">
              <Linkedin size={20} />
              <span>LinkedIn</span>
            </a>
            <a href="https://github.com/tvobrachini" target="_blank" rel="noreferrer" className="flex items-center gap-2 bg-white/5 border border-white/10 hover:bg-white/10 px-6 py-3 rounded-lg font-medium transition-all">
              <Github size={20} />
              <span>GitHub</span>
            </a>
            <a href="mailto:tvobrachini@gmail.com" className="flex items-center gap-2 bg-white/5 border border-white/10 hover:bg-white/10 px-6 py-3 rounded-lg font-medium transition-all">
              <Mail size={20} />
              <span>Contact</span>
            </a>
          </div>
        </section>

        {/* Experience Section */}
        <section id="experience" className="space-y-12">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tight">Professional Experience</h2>
            <p className="text-gray-400">Over 10+ years as an external and internal auditor across top-tier financial and tech companies.</p>
          </div>

          <div className="grid gap-6 border-l border-white/10 pl-6 ml-3">

            <div className="relative group space-y-2">
              <div className="absolute left-[-24px] -translate-x-1/2 top-1.5 w-3 h-3 bg-[#8A05BE] rounded-full ring-4 ring-[#0a0a0a] shadow-[0_0_12px_rgba(138,5,190,0.8)]"></div>
              <h3 className="text-xl font-semibold">IT Internal Audit Specialist</h3>
              <a href="https://international.nubank.com.br/about/" target="_blank" rel="noreferrer" className="inline-block text-[#8A05BE] font-medium hover:underline">Nubank</a>
              <div className="text-sm text-gray-500">Mar 2023 - Present ({getDurationPassed(new Date('2023-03-01'))})</div>
              <p className="text-gray-400 mt-2 max-w-3xl leading-relaxed">
                Lead the evaluation of complex IT general controls and risk matrices. Spearhead the deployment of AI-driven automation for audit documentation and control testing methodologies within a high-velocity fintech ecosystem, enhancing overall audit efficiency and risk posture.
              </p>
            </div>

            <div className="relative group space-y-2 pt-8">
              <div className="absolute left-[-24px] -translate-x-1/2 top-9.5 w-3 h-3 bg-gray-700 rounded-full ring-4 ring-[#0a0a0a] group-hover:bg-[#FFE600] group-hover:shadow-[0_0_12px_rgba(255,230,0,0.8)] transition-all duration-300"></div>
              <h3 className="text-xl font-semibold">IT Internal Audit</h3>
              <a href="https://investor.mercadolibre.com/" target="_blank" rel="noreferrer" className="inline-block text-[#FFE600] font-medium hover:underline">Mercado Livre</a>
              <div className="text-sm text-gray-500">Nov 2021 - Mar 2023 (1 year 5 months)</div>
              <p className="text-gray-400 mt-2 max-w-3xl leading-relaxed">
                Directed comprehensive IT General Controls (ITGC) assessments and advanced cloud security audits across LATAM's premier e-commerce infrastructure. Orchestrated cross-functional reviews aligning technical operations with regulatory compliance, significantly strengthening the enterprise security posture.
              </p>
            </div>

            <div className="relative group space-y-2 pt-8">
              <div className="absolute left-[-24px] -translate-x-1/2 top-9.5 w-3 h-3 bg-gray-700 rounded-full ring-4 ring-[#0a0a0a] group-hover:bg-[#00A868] group-hover:shadow-[0_0_12px_rgba(0,168,104,0.8)] transition-all duration-300"></div>
              <h3 className="text-xl font-semibold">IT Internal Audit</h3>
              <a href="https://www.stoneco.com.br/en/" target="_blank" rel="noreferrer" className="inline-block text-[#00A868] font-medium hover:underline">Stone</a>
              <div className="text-sm text-gray-500">Feb 2021 - Nov 2021 (10 months)</div>
              <p className="text-gray-400 mt-2 max-w-3xl leading-relaxed">
                Specialized in payment industry compliance (PCI-DSS) and enterprise risk management. Architected and executed rigorous internal audit testing over mission-critical financial applications and core infrastructure, ensuring high availability and secure transaction environments.
              </p>
            </div>

            <div className="relative group space-y-2 pt-8">
              <div className="absolute left-[-24px] -translate-x-1/2 top-9.5 w-3 h-3 bg-gray-700 rounded-full ring-4 ring-[#0a0a0a] group-hover:bg-[#D04A02] group-hover:shadow-[0_0_12px_rgba(208,74,2,0.8)] transition-all duration-300"></div>
              <h3 className="text-xl font-semibold">Risk Assurance Senior Associate (External Audit)</h3>
              <a href="https://www.pwc.com/gx/en/about.html" target="_blank" rel="noreferrer" className="inline-block text-[#D04A02] font-medium hover:underline">PwC</a>
              <div className="text-sm text-gray-500">Jul 2015 - Feb 2021 (5 years 8 months)</div>
              <p className="text-gray-400 mt-2 max-w-3xl leading-relaxed">
                Orchestrated end-to-end IT and business process audits for diverse global clients. Developed comprehensive flowcharts and risk matrices, and rigorously evaluated the design and operational effectiveness of complex internal controls over financial reporting (SOX compliance) to mitigate enterprise risks.
              </p>
            </div>

            {/* Earlier Technical Experience */}
            <div className="relative group space-y-2 pt-8 mt-4 border-t border-white/5 mx-[-24px] pl-[24px]">
              <div className="absolute left-0 -translate-x-1/2 top-14 w-3 h-3 bg-[#0a0a0a] border-2 border-gray-500 rounded-full ring-4 ring-[#0a0a0a] group-hover:border-gray-300 transition-colors duration-300"></div>
              <h3 className="text-lg font-semibold text-gray-300 pt-4">Early Technical Background</h3>
              <div className="text-gray-400 font-medium pb-2">Software Development & IT Infrastructure (2009 - 2015)</div>
              <p className="text-gray-500 text-sm max-w-3xl leading-relaxed">
                Prior to focusing on IT Audit and GRC, I built a deep hands-on foundational understanding of technology, architecture, and application security across several developer roles:
              </p>
              <ul className="list-disc list-inside text-sm text-gray-500 space-y-2 mt-2 ml-1">
                <li><strong className="text-gray-400">PHP Developer</strong> at Tmax Technology (Jul 2014 - Jul 2015)</li>
                <li><strong className="text-gray-400">Software Development Intern</strong> at OSG Sulamericana (Jul 2012 - Jul 2013): Supported J-SOX compliance upgrades and developed intranet applications using Python/Django and Progress 4GL.</li>
                <li><strong className="text-gray-400">Software Developer</strong> at 3Wise Tecnologia (Jun 2011 - May 2012): Built full-stack import/export modules for Honda Trade Division using VB6, ASP.NET, C# and MySQL/Oracle databases.</li>
              </ul>
            </div>

          </div>
        </section>

        {/* Case Studies Section */}
        <section id="projects" className="space-y-12">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tight">Case Studies & Automation Portfolios</h2>
            <p className="text-gray-400">Deep-dive technical decision stories where I apply "Audit Engineering" to solve complex GRC challenges.</p>
          </div>

          <div className="grid gap-8">
            {/* Project: GRC Audit Swarm */}
            <div className="bg-white/5 border border-white/10 p-8 rounded-2xl hover:bg-white/10 transition-all duration-300 group">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-2xl font-bold text-gray-200 mb-2">
                    <a href="https://github.com/tvobrachini/grc-audit-swarm" target="_blank" rel="noreferrer" className="hover:text-purple-400 transition-colors flex items-center gap-2">
                      GRC Audit Swarm <Github size={20} className="text-gray-400 group-hover:text-purple-400 transition-colors" />
                    </a>
                  </h3>
                  <p className="text-purple-400 text-sm font-medium">Adaptive AI Multi-Agent GRC Execution Engine</p>
                </div>
              </div>
              <p className="text-gray-400 leading-relaxed mb-6">
                A stateful, interactive AI Audit Swarm powered by <b>LangGraph</b>. It coordinates specialized agents (Orchestrator, Researcher, Specialist, Challenger) to autonomously research risks, map controls, and execute recursive audit tests to generate a Findings Command Center. <a href="https://github.com/tvobrachini/grc-audit-swarm/blob/master/CASE_STUDY.md" target="_blank" rel="noreferrer" className="text-blue-400 hover:text-blue-300 font-medium">View Case Study.</a>
              </p>
              <ul className="list-disc list-inside text-sm text-gray-400 space-y-2 mb-6 ml-1">
                <li><strong className="text-gray-300">Swarm Intelligence:</strong> Agents push back on each other's work (e.g. Challenger revisions) to ensure high-quality audit planning.</li>
                <li><strong className="text-gray-300">Findings Command Center:</strong> Real-time KPI dashboards and drill-downs for TOD/TOE results with automated evidence extraction.</li>
                <li><strong className="text-gray-300">Reliability Guardrails:</strong> 60+ unit tests enforcing agent contracts and graph state transitions.</li>
              </ul>
              <div className="flex flex-wrap gap-2">
                {['LangGraph', 'Python', 'Multi-Agent', 'DuckDuckGo Search', 'Audit Engineering'].map(tag => (
                  <span key={tag} className="text-xs font-semibold px-3 py-1 bg-purple-500/10 text-purple-300 border border-purple-500/20 rounded-full">{tag}</span>
                ))}
              </div>
            </div>

            {/* Project: SCF Auto-Crosswalker */}
            <div className="bg-white/5 border border-white/10 p-8 rounded-2xl hover:bg-white/10 transition-all duration-300 group">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-2xl font-bold text-gray-200 mb-2">
                    <a href="https://github.com/tvobrachini/scf-auto-crosswalker" target="_blank" rel="noreferrer" className="hover:text-purple-400 transition-colors flex items-center gap-2">
                      SCF Auto-Crosswalker (Core Data Hub) <Github size={20} className="text-gray-400 group-hover:text-purple-400 transition-colors" />
                    </a>
                  </h3>
                  <p className="text-purple-400 text-sm font-medium">Framework-as-Code & Master Data Hub for GRC Automation</p>
                </div>
              </div>
              <p className="text-gray-400 leading-relaxed mb-6">
                The central framework hub for my auditing ecosystem. An AI-powered tool designed to eliminate manual spreadsheet mapping for IT Auditors, serving as the <b>Source of Truth</b> for the Secure Controls Framework (SCF). <a href="https://github.com/tvobrachini/scf-auto-crosswalker/blob/main/CASE_STUDY.md" target="_blank" rel="noreferrer" className="text-blue-400 hover:text-blue-300 font-medium">View Case Study.</a>
              </p>
              <ul className="list-disc list-inside text-sm text-gray-400 space-y-2 mb-6 ml-1">
                <li><strong className="text-gray-300">Auto-Crosswalker:</strong> Maps raw IT policies and Cloud Security JSON findings to the SCF.</li>
                <li><strong className="text-gray-300">Compliance Gap Analyzer:</strong> Instantly generates missing control checklists for target regulations (SOC 2, GDPR, PCI).</li>
                <li><strong className="text-gray-300">Master Control Database:</strong> Features a high-performance parsed JSON engine utilized by the Execution Swarm.</li>
              </ul>
              <div className="flex flex-wrap gap-2">
                {['Python', 'Streamlit', 'SCF', 'Pandas', 'JSON Engine'].map(tag => (
                  <span key={tag} className="text-xs font-semibold px-3 py-1 bg-purple-500/10 text-purple-300 border border-purple-500/20 rounded-full">{tag}</span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Skills & Focus Areas Section */}
        <section id="skills" className="space-y-12">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tight">Expertise & Technologies</h2>
            <p className="text-gray-400">A blend of IT Governance, Cloud Security, and Software Development.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">

            <div className="bg-white/5 border border-white/10 p-6 rounded-2xl hover:bg-white/10 transition-all duration-300">
              <Shield className="text-purple-400 mb-4" size={32} />
              <h3 className="text-lg font-semibold mb-2">IT Audit & GRC</h3>
              <p className="text-gray-400 text-sm leading-relaxed mb-4">
                Evaluating internal controls, SOX compliance, and mapping IT risks based on well-known frameworks.
              </p>
              <div className="flex flex-wrap gap-2">
                {['ISO 27001', 'NIST', 'COBIT', 'SOX', 'PCI-DSS'].map(tag => (
                  <span key={tag} className="text-xs font-medium px-2 py-1 bg-white/10 rounded-md text-gray-300">{tag}</span>
                ))}
              </div>
            </div>

            <div className="bg-white/5 border border-white/10 p-6 rounded-2xl hover:bg-white/10 transition-all duration-300">
              <Server className="text-blue-400 mb-4" size={32} />
              <h3 className="text-lg font-semibold mb-2">Cloud Security</h3>
              <p className="text-gray-400 text-sm leading-relaxed mb-4">
                Securing digital environments and assessing cloud maturity. Cloud Audit Academy Agnostic Certified.
              </p>
              <div className="flex flex-wrap gap-2">
                {['AWS', 'GCP', 'Cloud Security', 'Data Science', 'Linux'].map(tag => (
                  <span key={tag} className="text-xs font-medium px-2 py-1 bg-white/10 rounded-md text-gray-300">{tag}</span>
                ))}
              </div>
            </div>

            <div className="bg-white/5 border border-white/10 p-6 rounded-2xl hover:bg-white/10 transition-all duration-300">
              <FileText className="text-indigo-400 mb-4" size={32} />
              <h3 className="text-lg font-semibold mb-2">Software & AI Tools</h3>
              <p className="text-gray-400 text-sm leading-relaxed mb-4">
                Past experience in full-stack web development and utilizing modern LLMs for audit automation.
              </p>
              <div className="flex flex-wrap gap-2">
                {['Python/Django', 'PHP', 'Cursor', 'Claude', 'Vertex AI'].map(tag => (
                  <span key={tag} className="text-xs font-medium px-2 py-1 bg-white/10 rounded-md text-gray-300">{tag}</span>
                ))}
              </div>
            </div>

          </div>
        </section>

        {/* Education & Achievements Section */}
        <section id="education" className="space-y-12">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tight">Education & Achievements</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white/5 border border-white/10 p-6 rounded-2xl">
              <h3 className="text-xl font-semibold mb-1 text-gray-200">
                <a href="https://www.tcd.ie/about/" target="_blank" rel="noreferrer" className="hover:text-blue-400 hover:underline transition-colors">Trinity College Dublin</a>
              </h3>
              <div className="text-blue-400 text-sm font-medium mb-3">Study Abroad Program • Dublin, Ireland</div>
              <p className="text-gray-400 text-sm leading-relaxed">
                Completed international coursework in Computer Science, Business, and Statistics (2013-2014) at Ireland's premier university. Developed a global perspective on technology and business strategy.
              </p>
            </div>

            <div className="bg-white/5 border border-white/10 p-6 rounded-2xl space-y-6">

              <div>
                <h3 className="text-xl font-semibold mb-1 text-gray-200">Certifications & Degrees</h3>
                <ul className="list-disc list-inside text-sm text-gray-400 space-y-2 mt-3">
                  <li>
                    <strong className="text-gray-300">Cloud Audit Academy (Cloud Agnostic)</strong>
                  </li>
                  <li>
                    <strong className="text-gray-300">Information Technology</strong> at <a href="https://site.cps.sp.gov.br/fatec/" target="_blank" rel="noreferrer" className="text-purple-400 hover:underline transition-colors">FATEC Bragança Paulista</a>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-1 text-gray-200">Publications</h3>
                <p className="text-sm text-gray-400 mt-2">
                  <strong className="text-gray-300">"Impact of systemic management on project development: A study in a software house"</strong>
                </p>
              </div>

            </div>
          </div>
        </section>

      </main>

      {/* Footer */}
      <footer className="border-t border-white/5 py-12 mt-20">
        <div className="max-w-5xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
          <p>© {new Date().getFullYear()} tvobrachini. All rights reserved.</p>
          <div className="flex items-center gap-2">
            <span>Built with React & Tailwind.</span>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
