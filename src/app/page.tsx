"use client";
import ParticleNetwork from './ParticleNetwork';

export default function Home() {
  return (
    <div className="relative min-h-screen w-full bg-black p-0 flex flex-col items-center overflow-hidden">
      <ParticleNetwork />
      <div className="relative z-10 w-full flex flex-col items-center p-6 sm:p-12">
        <header className="w-full max-w-3xl mx-auto text-center mb-8">
          <h1 className="text-5xl sm:text-6xl font-extrabold mb-2 tracking-tight bg-gradient-to-r from-cyan-400 via-fuchsia-500 to-yellow-400 text-transparent bg-clip-text drop-shadow-lg">
            Gaurav Bhardwaj
          </h1>
          <p className="text-xl sm:text-2xl font-semibold mb-2 text-fuchsia-300 drop-shadow">
            B. Tech. Computer Science (Data Science) @ The Northcap University
          </p>
          <p className="text-md text-cyan-200">
            Gurugram •{' '}
            <a
              href="mailto:gaurav26bhardwaj62@gmail.com"
              className="underline hover:text-yellow-400"
            >
              gauravvbhardwaj1@gmail.com
            </a>{' '}
            •{' '}
            <a
              href="https://www.linkedin.com/in/gauravvbhardwaj1/"
              className="underline hover:text-fuchsia-400"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
          </p>
        </header>

        <section className="w-full max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-yellow-400 via-fuchsia-500 to-cyan-400 text-transparent bg-clip-text drop-shadow">
            About Me
          </h2>
          <p className="text-lg leading-relaxed bg-black/80 text-cyan-100 rounded-lg shadow p-6">
            Hi, I’m <span className="text-fuchsia-400 font-bold">Gaurav Bhardwaj</span> — part data whisperer, part code ninja, and full-time enthusiast of all things tech.<br /><br />
            I’m currently wrapping up my B.Tech in Computer Science with a specialization in Data Science at The NorthCap University. But honestly? I’ve spent just as much time outside the classroom playing with data, building things that (hopefully) make life a little smarter.<br /><br />
            I’ve trained machines to detect hate speech, designed a credit card system that practically runs itself, and built dashboards that make GDP stats look like a Netflix binge. Oh, and I once helped a company save money just by being friends with numbers. (Okay, I was a Data Analyst Intern, but you get the idea.)<br /><br />
            I speak fluent <span className="text-yellow-300 font-semibold">Python</span>, write heartfelt <span className="text-cyan-300 font-semibold">SQL</span> queries, and occasionally flirt with <span className="text-fuchsia-300 font-semibold">Java</span>. I love turning messy datasets into clean stories — whether it’s through machine learning, visualization, or just asking the right “what if?”<br /><br />
            Outside the world of semicolons and scatter plots, you’ll find me exploring tech trends, tweaking side projects, or chasing down that one bug that always hides when I hit “Run.”<br /><br />
            <span className="text-yellow-400 font-bold">Let’s connect!</span>
          </p>
        </section>

        <main className="w-full max-w-3xl mx-auto flex flex-col gap-10">
          <section>
            <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-cyan-400 via-fuchsia-500 to-yellow-400 text-transparent bg-clip-text drop-shadow">
              Experience
            </h2>
            <div className="bg-black/80 rounded-lg shadow p-4 mb-4">
              <h3 className="font-bold text-lg text-yellow-300">
                Data Analyst Intern, MetalMan Auto{' '}
                <span className="text-xs text-cyan-200">
                  (Jul 2024 – Sep 2024)
                </span>
              </h3>
              <ul className="list-disc ml-6 mt-2 text-cyan-100">
                <li>Optimized inventory management with predictive modeling, achieving 80%+ accuracy.</li>
                <li>Forecasted inventory demands, reducing stockouts and excess holding costs by 15%.</li>
                <li>Implemented data-driven recommendations for improved turnover rates.</li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-yellow-400 via-fuchsia-500 to-cyan-400 text-transparent bg-clip-text drop-shadow">
              Projects
            </h2>
            <div className="space-y-4">
              <div className="bg-black/80 rounded-lg shadow p-4">
                <h3 className="font-bold text-cyan-300">Hate Speech Recognition and Classification</h3>
                <p className="text-fuchsia-300 text-sm">Python & KNIME</p>
                <ul className="list-disc ml-6 mt-2 text-cyan-100">
                  <li>Classified 25,000 tweets into hate speech, offensive, and non-offensive content.</li>
                  <li>Achieved 88% accuracy with Random Forest; automated workflow in KNIME (87% accuracy).</li>
                </ul>
              </div>
              <div className="bg-black/80 rounded-lg shadow p-4">
                <h3 className="font-bold text-yellow-300">Managing Credit Cards with PostgreSQL</h3>
                <p className="text-cyan-300 text-sm">SQL</p>
                <ul className="list-disc ml-6 mt-2 text-cyan-100">
                  <li>Designed a secure credit card management system with 8 interconnected tables.</li>
                  <li>Automated reward calculations and signup bonuses with triggers and procedures.</li>
                  <li>Ensured PCI DSS compliance for sensitive data.</li>
                </ul>
              </div>
              <div className="bg-black/80 rounded-lg shadow p-4">
                <h3 className="font-bold text-fuchsia-300">Enhancing Social Networking Profiles for Students using ML</h3>
                <p className="text-yellow-300 text-sm">Python</p>
                <ul className="list-disc ml-6 mt-2 text-cyan-100">
                  <li>Applied KMeans clustering to 1,000+ students for better recommendations.</li>
                  <li>Increased interest-based matches by 20% using Pandas, NumPy, Matplotlib, Seaborn, and Scikit-learn.</li>
                </ul>
              </div>
              <div className="bg-black/80 rounded-lg shadow p-4">
                <h3 className="font-bold text-cyan-400">GDP and Economic Indicators Analysis</h3>
                <p className="text-fuchsia-300 text-sm">Tableau</p>
                <ul className="list-disc ml-6 mt-2 text-cyan-100">
                  <li>Analyzed GDP and economic indicators across 18 countries with interactive Tableau dashboards.</li>
                  <li>Identified trends in GDP, HDI, R&D, and gender wage gap for policy insights.</li>
                </ul>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-cyan-400 via-fuchsia-500 to-yellow-400 text-transparent bg-clip-text drop-shadow">
              Skills
            </h2>
            <div className="flex flex-wrap gap-2">
              <span className="bg-fuchsia-700 text-yellow-200 px-3 py-1 rounded-full text-sm font-semibold">Python</span>
              <span className="bg-yellow-400 text-fuchsia-900 px-3 py-1 rounded-full text-sm font-semibold">Java</span>
              <span className="bg-cyan-400 text-black px-3 py-1 rounded-full text-sm font-semibold">SQL</span>
              <span className="bg-fuchsia-400 text-black px-3 py-1 rounded-full text-sm font-semibold">Tableau</span>
              <span className="bg-yellow-300 text-fuchsia-900 px-3 py-1 rounded-full text-sm font-semibold">MySQL</span>
              <span className="bg-cyan-700 text-yellow-200 px-3 py-1 rounded-full text-sm font-semibold">KNIME</span>
              <span className="bg-fuchsia-500 text-yellow-100 px-3 py-1 rounded-full text-sm font-semibold">Git/GitHub</span>
              <span className="bg-yellow-400 text-fuchsia-900 px-3 py-1 rounded-full text-sm font-semibold">Excel</span>
              <span className="bg-cyan-400 text-black px-3 py-1 rounded-full text-sm font-semibold">VS Code</span>
              <span className="bg-fuchsia-400 text-black px-3 py-1 rounded-full text-sm font-semibold">Data Visualization</span>
              <span className="bg-yellow-400 text-fuchsia-900 px-3 py-1 rounded-full text-sm font-semibold">Predictive Modeling</span>
              <span className="bg-cyan-400 text-black px-3 py-1 rounded-full text-sm font-semibold">Statistical Analysis</span>
              <span className="bg-fuchsia-700 text-yellow-200 px-3 py-1 rounded-full text-sm font-semibold">Database Management</span>
              <span className="bg-yellow-400 text-fuchsia-900 px-3 py-1 rounded-full text-sm font-semibold">Problem-Solving</span>
              <span className="bg-cyan-700 text-yellow-200 px-3 py-1 rounded-full text-sm font-semibold">Team Leadership</span>
              <span className="bg-fuchsia-500 text-yellow-100 px-3 py-1 rounded-full text-sm font-semibold">Project Management</span>
              <span className="bg-yellow-400 text-fuchsia-900 px-3 py-1 rounded-full text-sm font-semibold">Adaptability</span>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}
