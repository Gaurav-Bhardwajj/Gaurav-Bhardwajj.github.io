"use client";
import ParticleNetwork from './ParticleNetwork';
import React, { useState } from 'react';

// Types for data-driven sections
interface Project {
  title: string;
  link?: string;
  tech: string;
  bullets: string[];
}
interface Experience {
  title: string;
  company: string;
  period: string;
  bullets: string[];
}

// Card component for projects/experience
const Card: React.FC<{ children: React.ReactNode; className?: string }> = ({ children, className = '' }) => (
  <div
    className={`bg-black/80 rounded-xl shadow p-6 mb-4 transition-all duration-200 border border-transparent hover:border-fuchsia-400 hover:shadow-lg group/card font-sans ${className}`}
  >
    {children}
  </div>
);

// Skill badge component
const SkillBadge: React.FC<{ skill: string }> = ({ skill }) => (
  <span className="bg-white text-black px-3 py-1 rounded-full text-sm font-semibold font-sans">{skill}</span>
);

// Data for projects
const projects: Project[] = [
  {
    title: 'Hate Speech Recognition and Classification',
    link: 'https://github.com/Gaurav-Bhardwajj/Hate-Speech-Recognition-main',
    tech: 'Python, KNIME',
    bullets: [
      'Built a machine learning system to detect and classify hate speech in 25,000 tweets into hate speech, offensive, and non-offensive categories.',
      'Achieved 88% accuracy using a Random Forest classifier; also designed an automated workflow in KNIME, yielding 87% accuracy.',
      'Aimed to support content moderation by identifying inappropriate or harmful language automatically to promote a healthier online environment.',
    ],
  },
  {
    title: 'Managing Credit Cards with PostgreSQL',
    link: 'https://github.com/Gaurav-Bhardwajj/Managing-Credit-Cards-main',
    tech: 'SQL (PL/pgSQL)',
    bullets: [
      'Developed a secure credit card management system with 8 interconnected relational tables, ensuring effective transaction tracking and data integrity.',
      'Implemented stored procedures and triggers for automatic reward calculations and signup bonuses.',
      'Ensured compliance with PCI DSS standards for secure handling of sensitive financial data.',
    ],
  },
  {
    title: 'Enhancing Social Networking Profiles for Students Using ML',
    link: 'https://github.com/Gaurav-Bhardwajj/Enhancing-Student-Social-Networking-Profile',
    tech: 'Python (Pandas, NumPy, Matplotlib, Seaborn, Scikit-learn)',
    bullets: [
      'Applied KMeans clustering to data from 1,000+ students to recommend peer groups based on shared interests.',
      'Improved interest-based matches by 20%, fostering more meaningful student interactions.',
      'Leveraged machine learning to strengthen student communities by enhancing profile recommendations and encouraging deeper social engagement.',
    ],
  },
  {
    title: 'Credit Card Fraud Detection System',
    link: 'https://github.com/Gaurav-Bhardwajj/Credit-card-frauddetection-main',
    tech: 'Python, Machine Learning',
    bullets: [
      'Cleans, analyzes, and visualizes credit card transaction data to detect fraudulent activities.',
      'Implements multiple machine learning models (KNN, Decision Trees, Random Forest) for fraud classification.',
      'Provides insights and predictions to help prevent unauthorized transactions and financial losses.',
    ],
  },
  {
    title: 'Global GDP Insights Dashboard',
    link: 'https://github.com/Gaurav-Bhardwajj/GDP-analysis-tableau',
    tech: 'Tableau, Data Visualization, Economic Analysis',
    bullets: [
      'Designed and deployed an interactive Tableau dashboard to analyze GDP trends across 30+ countries, leveraging 35+ indicators including HDI, inflation, education, trade, labor force participation, and R&D investment for in-depth economic exploration.',
      'Built impactful visualizations such as GDP waterfall charts, dual-axis correlation graphs, and sector-wise contribution breakdowns, uncovering complex patterns in economic growth, inequality, and global trade dynamics.',
      'Extracted key insights like the positive correlation between R&D spending and patent output, the economic uplift from higher female labor participation, and the fiscal impact of government spending priorities, guiding data-driven policy decisions.',
    ],
  },
];

const ongoingProjects: Project[] = [
  {
    title: 'AI-Powered CCTV Surveillance System',
    tech: 'Python, OpenCV, YOLOv8, Deep Learning, Template Matching, Ultralytics',
    bullets: [
      'Currently building a robust AI surveillance system to enhance public safety by automatically detecting threats, unusual activities, and object tampering in real-time CCTV feeds.',
      'Utilizes YOLOv8 for multi-class object detection (e.g., weapons, fire, smoke), and integrates tampering detection using template matching for critical object monitoring (like unattended baggage or stolen artifacts).',
      'Includes zone-based alerting via Region of Interest (ROI) selection, reducing false alarms and focusing surveillance attention where it matters most.',
      'Optimized for real-time performance on edge devices like MacBook M1 Air, balancing high accuracy and low compute cost.',
      'Designed with future scalability in mind, including plans to integrate theft detection, behavioral anomaly alerts, and a responsive alerting system, making it adaptable for use in museums, parking lots, or riot-prone zones.',
    ],
  },
  {
    title: 'MailMind – The Smart Email Assistant',
    tech: 'Python, LLMs, LangChain, Streamlit, OpenAI API, Pinecone',
    bullets: [
      'Context-aware AI assistant designed to boost inbox productivity.',
      'Capable of:',
      '• Summarizing email threads.',
      '• Classifying messages based on intent (e.g., action items, scheduling, follow-ups).',
      '• Generating suggested replies for quick responses.',
      'Uses natural language processing (NLP) to understand context, sentiment, and message relevance.',
      'Built on a modular pipeline for flexible expansion and integration of future features.',
      'Designed with privacy and usability in mind — aims to evolve with user behavior and needs.',
      'Currently under active development.',
    ],
  },
];

const experiences: Experience[] = [
  {
    title: 'Data Analyst Intern',
    company: 'MetalMan Auto',
    period: '(Jul 2024 – Sep 2024)',
    bullets: [
      'Optimized inventory management with predictive modeling, achieving 80%+ accuracy.',
      'Forecasted inventory demands, reducing stockouts and excess holding costs by 15%.',
      'Implemented data-driven recommendations for improved turnover rates.',
    ],
  },
];

const skills = [
  'Python', 'SQL', 'Java', 'Scikit-learn', 'KMeans', 'Random Forest', 'SVM', 'Naïve Bayes', 'Logistic Regression',
  'TensorFlow', 'Keras', 'OpenCV', 'Text preprocessing', 'Vectorization', 'Sentiment/Hate Speech Classification',
  'PostgreSQL', 'MySQL', 'KNIME', 'Tableau', 'Git/GitHub', 'Excel', 'VS Code', 'Data Analysis',
  'Predictive Modeling', 'Statistical Analysis', 'Data Visualization', 'Machine Learning', 'Deep Learning', 'AI',
];

// Sticky navigation bar component
const sections = [
  { id: 'about', label: 'About Me' },
  { id: 'projects', label: 'Projects & Ongoing Projects' },
  { id: 'experience', label: 'Experience' },
  { id: 'skills', label: 'Skills' },
];

const StickyNav: React.FC = () => (
  <nav className="sticky top-0 z-50 w-full bg-black/80 backdrop-blur border-b border-white/10 shadow flex justify-center py-2 mb-6 font-sans">
    <ul className="flex flex-wrap gap-4 sm:gap-8">
      {sections.map((section) => (
        <li key={section.id}>
          <a
            href={`#${section.id}`}
            className="relative inline-flex items-center px-4 py-2 font-semibold rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-fuchsia-400 group text-base font-sans
              bg-gradient-to-r from-cyan-900/40 via-fuchsia-900/40 to-yellow-900/40
              text-cyan-200 hover:text-fuchsia-400 hover:bg-fuchsia-900/30
              shadow-md hover:shadow-fuchsia-400/30 border border-white/10 hover:border-fuchsia-400"
            style={{ scrollBehavior: 'smooth' }}
          >
            <span className="transition-colors duration-200 group-hover:text-fuchsia-400 font-sans">
              {section.label}
            </span>
            <span className="absolute left-0 top-0 w-full h-full rounded-lg bg-fuchsia-400 opacity-0 group-hover:opacity-10 transition-opacity duration-200 pointer-events-none"></span>
          </a>
        </li>
      ))}
    </ul>
  </nav>
);

// Tabs for Projects/Ongoing Projects
const ProjectTabs: React.FC = () => {
  const [tab, setTab] = useState<'projects' | 'ongoing'>('projects');
  return (
    <div className="w-full font-sans">
      <div className="flex justify-center gap-4 mb-6">
        <button
          className={`px-4 py-2 rounded-t-lg font-bold text-2xl transition-colors border-b-2 font-sans ${tab === 'projects' ? 'text-fuchsia-400 border-fuchsia-400 bg-black/80' : 'text-cyan-200 border-transparent hover:text-fuchsia-400'}`}
          onClick={() => setTab('projects')}
          aria-selected={tab === 'projects'}
        >
          Projects
        </button>
        <button
          className={`px-4 py-2 rounded-t-lg font-bold text-2xl transition-colors border-b-2 font-sans ${tab === 'ongoing' ? 'text-fuchsia-400 border-fuchsia-400 bg-black/80' : 'text-cyan-200 border-transparent hover:text-fuchsia-400'}`}
          onClick={() => setTab('ongoing')}
          aria-selected={tab === 'ongoing'}
        >
          Ongoing Projects
        </button>
      </div>
      {tab === 'projects' ? (
        <div>
          {projects.map((proj) => (
            <Card key={proj.title}>
              {proj.link ? (
                <a href={proj.link} target="_blank" rel="noopener noreferrer" className="font-bold text-white text-2xl underline hover:text-red-400 focus:outline-none focus:ring-2 focus:ring-red-400 transition-colors font-sans">
                  {proj.title}
                </a>
              ) : (
                <span className="font-bold text-white text-2xl font-sans">{proj.title}</span>
              )}
              <p className="text-white text-base mt-1 font-medium font-sans">{proj.tech}</p>
              <ul className="list-disc ml-6 mt-2 text-cyan-100 font-sans">
                {proj.bullets.map((b, i) => (
                  <li key={i} className="text-base leading-relaxed font-sans">{b}</li>
                ))}
              </ul>
            </Card>
          ))}
        </div>
      ) : (
        <div>
          {ongoingProjects.map((proj) => (
            <Card key={proj.title}>
              <span className="font-bold text-white text-2xl font-sans">{proj.title}</span>
              <p className="text-white text-base mt-1 font-medium font-sans">{proj.tech}</p>
              <ul className="list-disc ml-6 mt-2 text-cyan-100 font-sans">
                {proj.bullets.map((b, i) => (
                  <li key={i} className="text-base leading-relaxed font-sans">{b}</li>
                ))}
              </ul>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
};

// Collapsible section component
const CollapsibleSection: React.FC<{
  id: string;
  title: string;
  children: React.ReactNode;
  defaultOpen?: boolean;
}> = ({ id, title, children, defaultOpen = false }) => {
  const [open, setOpen] = useState(defaultOpen);
  return (
    <section id={id} className="scroll-mt-24 font-sans">
      <button
        className="w-full flex items-center justify-between px-6 pt-6 pb-2 text-2xl font-bold text-white uppercase drop-shadow tracking-wide font-sans transition-colors bg-gradient-to-r from-yellow-400/10 via-fuchsia-500/10 to-cyan-400/10 rounded-t-2xl focus:outline-none focus:ring-2 focus:ring-fuchsia-400"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        aria-controls={`section-content-${id}`}
        type="button"
      >
        {title}
        <span className="ml-4 text-2xl font-sans">{open ? '−' : '+'}</span>
      </button>
      {open && (
        <div id={`section-content-${id}`} className="space-y-6 bg-black/90 rounded-b-2xl shadow p-8 font-sans">
          {children}
        </div>
      )}
    </section>
  );
};

export default function Home() {
  return (
    <div className="relative min-h-screen w-full bg-black p-0 flex flex-col items-center overflow-hidden font-sans">
      <ParticleNetwork />
      <StickyNav />
      <div className="relative z-10 w-full flex flex-col items-center px-0 sm:px-2 md:px-4 py-4 sm:py-6 font-sans">
        <header className="w-full max-w-6xl mx-auto text-center mb-6 font-sans">
          <div className="mx-auto flex justify-center">
            <div className="backdrop-blur-md bg-white/10 border border-white/20 shadow-2xl rounded-full px-8 py-6 sm:px-12 sm:py-8 flex flex-col items-center gap-2 transition-all duration-300 hover:bg-white/20 hover:shadow-fuchsia-400/30 hover:scale-105 group font-sans">
              <h1 className="text-4xl sm:text-5xl font-bold mb-2 tracking-tight bg-gradient-to-r from-[#1a73e8] via-[#34a853] to-[#ea4335] text-transparent bg-clip-text drop-shadow-lg transition-transform duration-200 group-hover:scale-105 font-sans" style={{ textTransform: 'none' }}>
                Gaurav Bhardwaj
              </h1>
              <p className="text-base text-[#1a73e8] font-semibold mb-2 font-sans">Machine Learning Enthusiast</p>
              <p className="text-base text-[#5f6368] flex flex-wrap items-center gap-x-8 gap-y-2 justify-center mt-2 font-sans">
                <span className="flex items-center gap-2 font-sans">
                  {/* Location icon (Heroicons solid) */}
                  <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20" className="w-5 h-5 text-yellow-300" style={{ display: 'inline-block', verticalAlign: 'middle' }}>
                    <path fillRule="evenodd" d="M10 2a6 6 0 00-6 6c0 4.418 5.373 9.292 5.601 9.5a1 1 0 001.398 0C10.627 17.292 16 12.418 16 8a6 6 0 00-6-6zm0 8a2 2 0 110-4 2 2 0 010 4z" clipRule="evenodd" />
                  </svg>
                  <span className="font-sans text-[#2196f3] font-semibold">Gurugram</span>
                </span>
                <span className="flex items-center gap-2 font-sans">
                  <a
                    href="mailto:gauravvbhardwaj1@gmail.com"
                    className="flex items-center gap-2 underline text-[#2196f3] hover:text-[#1565c0] focus:outline-none focus:ring-2 focus:ring-[#2196f3] rounded transition-colors font-sans font-semibold"
                    aria-label="Send Mail to Gaurav Bhardwaj"
                  >
                    {/* Mail icon (Material Design) with adjusted viewBox and alignment */}
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="2 2 20 20" fill="currentColor" className="w-5 h-5 text-fuchsia-400" style={{ display: 'inline-block', verticalAlign: 'middle' }}>
                      <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 2v.01L12 13 4 6.01V6h16zM4 20V8.99l8 7 8-7V20H4z"/>
                    </svg>
                    <span className="font-semibold font-sans">Mail</span>
                  </a>
                </span>
                <span className="flex items-center gap-2 font-sans">
                  <a
                    href="https://www.linkedin.com/in/gauravvbhardwaj1/"
                    className="flex items-center gap-2 underline text-[#2196f3] hover:text-[#1565c0] focus:outline-none focus:ring-2 focus:ring-[#2196f3] rounded transition-colors font-sans font-semibold"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Gaurav Bhardwaj on LinkedIn"
                  >
                    {/* LinkedIn icon (official SVG) with adjusted viewBox and alignment */}
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" fill="currentColor" className="w-5 h-5 text-cyan-400" style={{ display: 'inline-block', verticalAlign: 'middle' }}>
                      <path d="M100.28 448H7.4V148.9h92.88zm-46.44-340.7C24.09 107.3 0 83.2 0 53.6A53.6 53.6 0 0153.6 0c29.6 0 53.6 24.09 53.6 53.6 0 29.6-24 53.7-53.36 53.7zM447.8 448h-92.4V302.4c0-34.7-12.4-58.4-43.3-58.4-23.6 0-37.6 15.9-43.7 31.3-2.3 5.6-2.8 13.4-2.8 21.2V448h-92.4s1.2-242.1 0-267.1h92.4v37.9c12.3-19 34.3-46.1 83.5-46.1 60.9 0 106.6 39.8 106.6 125.4V448z"/>
                    </svg>
                    <span className="font-semibold font-sans">LinkedIn</span>
                  </a>
                </span>
                <span className="flex items-center gap-2 font-sans">
                  <a
                    href="https://github.com/Gaurav-Bhardwajj"
                    className="flex items-center gap-2 underline text-[#2196f3] hover:text-[#1565c0] focus:outline-none focus:ring-2 focus:ring-[#2196f3] rounded transition-colors font-sans font-semibold"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Gaurav Bhardwaj on GitHub"
                  >
                    {/* GitHub icon */}
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-white" style={{ display: 'inline-block', verticalAlign: 'middle' }}>
                      <path d="M12 2C6.477 2 2 6.484 2 12.021c0 4.428 2.865 8.184 6.839 9.504.5.092.682-.217.682-.482 0-.237-.009-.868-.014-1.703-2.782.605-3.369-1.342-3.369-1.342-.454-1.154-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.004.07 1.532 1.032 1.532 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.339-2.221-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.025A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.295 2.748-1.025 2.748-1.025.546 1.378.202 2.397.1 2.65.64.7 1.028 1.595 1.028 2.688 0 3.847-2.337 4.695-4.566 4.944.359.309.678.919.678 1.852 0 1.336-.012 2.417-.012 2.747 0 .267.18.577.688.479C19.138 20.2 22 16.448 22 12.021 22 6.484 17.523 2 12 2z"/>
                    </svg>
                    <span className="font-semibold font-sans">GitHub</span>
                  </a>
                </span>
                <span className="flex items-center gap-2 font-sans">
                  <a
                    href="https://x.com/gauravxcode"
                    className="flex items-center gap-2 underline text-[#2196f3] hover:text-[#1565c0] focus:outline-none focus:ring-2 focus:ring-[#2196f3] rounded transition-colors font-sans font-semibold"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Gaurav Bhardwaj on Twitter/X"
                  >
                    {/* Twitter/X icon */}
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 1227" fill="currentColor" className="w-5 h-5 text-blue-400" style={{ display: 'inline-block', verticalAlign: 'middle' }}>
                      <path d="M1200 21.6L728.8 623.2L1197.6 1205.6H1027.2L661.6 749.6L256 1205.6H0L496.8 579.2L54.4 21.6H230.4L563.2 441.6L944 21.6H1200ZM960 1096.8H1072L320 130.4H208L960 1096.8Z"/>
                    </svg>
                    <span className="font-semibold font-sans">Twitter/X</span>
                  </a>
                </span>
              </p>
            </div>
          </div>
        </header>
        {/* About Me Section (collapsible, single heading, matching width and spacing) */}
        <div className="w-full max-w-6xl mx-auto mb-6 scroll-mt-24 font-sans">
          <CollapsibleSection id="about" title="About Me" defaultOpen={false}>
            <p className="text-base leading-relaxed bg-black/80 text-cyan-100 rounded-b-lg shadow p-6 font-sans">
              I’m Gaurav, currently wrapping up my BTech in Computer Science with a focus on Data Science, where most of my time goes into building systems that make sense of data — from machine learning models for hate speech detection to clustering algorithms for smarter social recommendations. I’ve worked across projects involving deep learning, NLP, computer vision, and predictive analytics, using tools like TensorFlow, Keras, Scikit-learn, OpenCV, and KNIME. I enjoy working with structured and unstructured data, designing effective SQL databases, automating workflows, and building dashboards that turn raw metrics into intuitive insights. Whether it’s analyzing global economic indicators in Tableau or creating intelligent systems that learn and improve, I approach every problem with curiosity, a love for clean code, and a focus on meaningful outcomes.
            </p>
          </CollapsibleSection>
        </div>
        {/* Projects Section (non-collapsible, interactive box) */}
        <section id="projects" className="w-full max-w-6xl mx-auto mb-6 scroll-mt-24 font-sans">
          <div className="rounded-2xl bg-gradient-to-r from-yellow-400/10 via-fuchsia-500/10 to-cyan-400/10 shadow p-0 mb-6 group transition-transform duration-200 hover:scale-105 font-sans">
            <h2 className="text-2xl font-bold px-6 pt-6 pb-2 text-[#1a73e8] uppercase drop-shadow tracking-wide font-sans transition-transform duration-200 group-hover:scale-105">
              Projects
            </h2>
            <div className="space-y-6 bg-black/90 rounded-b-2xl shadow p-8 font-sans">
              <ProjectTabs />
            </div>
          </div>
        </section>
        {/* Experience Section (non-collapsible, interactive box) */}
        <section id="experience" className="w-full max-w-6xl mx-auto mb-6 scroll-mt-24 font-sans">
          <div className="rounded-2xl bg-gradient-to-r from-yellow-400/10 via-fuchsia-500/10 to-cyan-400/10 shadow p-0 mb-6 group transition-transform duration-200 hover:scale-105 font-sans">
            <h2 className="text-2xl font-bold px-6 pt-6 pb-2 text-[#34a853] uppercase drop-shadow tracking-wide font-sans transition-transform duration-200 group-hover:scale-105">
              Experience
            </h2>
            <div className="space-y-6 bg-black/90 rounded-b-2xl shadow p-8 font-sans">
              {experiences.map((exp) => (
                <Card key={exp.title + exp.company}>
                  <span className="font-bold text-2xl text-white font-sans">{exp.title}, {exp.company} <span className="text-xs text-cyan-200 font-sans">{exp.period}</span></span>
                  <ul className="list-disc ml-6 mt-2 text-cyan-100 font-sans">
                    {exp.bullets.map((b, i) => (
                      <li key={i} className="text-base leading-relaxed font-sans">{b}</li>
                    ))}
                  </ul>
                </Card>
              ))}
            </div>
          </div>
        </section>
        {/* Skills Section (non-collapsible, interactive box) */}
        <section id="skills" className="w-full max-w-6xl mx-auto mb-6 scroll-mt-24 font-sans">
          <div className="rounded-2xl bg-gradient-to-r from-yellow-400/10 via-fuchsia-500/10 to-cyan-400/10 shadow p-0 mb-6 group transition-transform duration-200 hover:scale-105 font-sans">
            <h2 className="text-2xl font-bold px-6 pt-6 pb-2 text-[#ea4335] uppercase drop-shadow tracking-wide font-sans transition-transform duration-200 group-hover:scale-105">
              Skills
            </h2>
            <div className="flex flex-wrap gap-3 justify-center bg-black/90 rounded-b-2xl shadow p-8 font-sans">
              {skills.map((skill) => (
                <SkillBadge key={skill} skill={skill} />
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
