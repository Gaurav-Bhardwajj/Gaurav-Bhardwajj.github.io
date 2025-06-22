"use client";
import ParticleNetwork from './ParticleNetwork';

export default function Home() {
  return (
    <div className="relative min-h-screen w-full bg-black overflow-hidden">
      <ParticleNetwork />
      <div className="relative z-20 w-full flex flex-col items-center px-4 sm:px-8 lg:px-12 py-8 sm:py-12">
        <header className="w-full max-w-4xl mx-auto text-center mb-12 bg-black/70 backdrop-blur-sm rounded-2xl p-8 border border-cyan-500/30">
          <h1 className="text-6xl sm:text-7xl lg:text-8xl font-extrabold mb-4 tracking-tight bg-gradient-to-r from-cyan-400 via-fuchsia-500 to-yellow-400 text-transparent bg-clip-text drop-shadow-2xl animate-pulse">
            Gaurav Bhardwaj
          </h1>
          <p className="text-2xl sm:text-3xl font-bold mb-3 text-white bg-gradient-to-r from-fuchsia-400 to-cyan-400 text-transparent bg-clip-text drop-shadow-lg">
            B. Tech. Computer Science (Data Science) @ The Northcap University
          </p>
          <p className="text-lg sm:text-xl text-cyan-200 font-medium">
            Gurugram •{' '}
            <a
              href="mailto:gaurav26bhardwaj62@gmail.com"
              className="underline hover:text-yellow-400 transition-colors duration-300"
            >
              gauravvbhardwaj1@gmail.com
            </a>{' '}
            •{' '}
            <a
              href="https://www.linkedin.com/in/gauravvbhardwaj1/"
              className="underline hover:text-fuchsia-400 transition-colors duration-300"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
          </p>
        </header>

        <section className="w-full max-w-4xl mx-auto mb-16">
          <h2 className="text-4xl sm:text-5xl font-extrabold mb-6 text-center bg-gradient-to-r from-yellow-400 via-fuchsia-500 to-cyan-400 text-transparent bg-clip-text drop-shadow-lg">
            About Me
          </h2>
          <div className="bg-black/80 backdrop-blur-md text-cyan-100 rounded-2xl shadow-2xl p-8 border border-fuchsia-500/30">
            <p className="text-lg sm:text-xl leading-relaxed">
              Hi, I&apos;m <span className="text-fuchsia-400 font-bold text-xl">Gaurav Bhardwaj</span> — part data whisperer, part code ninja, and full-time enthusiast of all things tech.<br /><br />
              I&apos;m currently wrapping up my B.Tech in Computer Science with a specialization in Data Science at The NorthCap University. But honestly? I&apos;ve spent just as much time outside the classroom playing with data, building things that (hopefully) make life a little smarter.<br /><br />
              I&apos;ve trained machines to detect hate speech, designed a credit card system that practically runs itself, and built dashboards that make GDP stats look like a Netflix binge. Oh, and I once helped a company save money just by being friends with numbers. (Okay, I was a Data Analyst Intern, but you get the idea.)<br /><br />
              I speak fluent <span className="text-yellow-300 font-semibold text-lg">Python</span>, write heartfelt <span className="text-cyan-300 font-semibold text-lg">SQL</span> queries, and occasionally flirt with <span className="text-fuchsia-300 font-semibold text-lg">Java</span>. I love turning messy datasets into clean stories — whether it&apos;s through machine learning, visualization, or just asking the right &quot;what if?&quot;<br /><br />
              Outside the world of semicolons and scatter plots, you&apos;ll find me exploring tech trends, tweaking side projects, or chasing down that one bug that always hides when I hit &quot;Run.&quot;<br /><br />
              <span className="text-yellow-400 font-bold text-xl">Let&apos;s connect!</span>
            </p>
          </div>
        </section>

        <main className="w-full max-w-4xl mx-auto flex flex-col gap-16">
          <section>
            <h2 className="text-4xl sm:text-5xl font-extrabold mb-8 text-center bg-gradient-to-r from-cyan-400 via-fuchsia-500 to-yellow-400 text-transparent bg-clip-text drop-shadow-lg">
              Experience
            </h2>
            <div className="bg-black/80 backdrop-blur-md rounded-2xl shadow-2xl p-8 border border-cyan-500/30">
              <h3 className="font-bold text-2xl text-yellow-300 mb-2">
                Data Analyst Intern, MetalMan Auto{' '}
                <span className="text-lg text-cyan-200 font-normal">
                  (Jul 2024 – Sep 2024)
                </span>
              </h3>
              <ul className="list-disc ml-6 mt-4 text-cyan-100 text-lg space-y-2">
                <li>Optimized inventory management with predictive modeling, achieving 80%+ accuracy.</li>
                <li>Forecasted inventory demands, reducing stockouts and excess holding costs by 15%.</li>
                <li>Implemented data-driven recommendations for improved turnover rates.</li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-4xl sm:text-5xl font-extrabold mb-8 text-center bg-gradient-to-r from-yellow-400 via-fuchsia-500 to-cyan-400 text-transparent bg-clip-text drop-shadow-lg">
              Projects
            </h2>
            <div className="grid gap-6">
              <div className="bg-black/80 backdrop-blur-md rounded-2xl shadow-2xl p-8 border border-fuchsia-500/30">
                <h3 className="font-bold text-2xl text-cyan-300 mb-2">Hate Speech Recognition and Classification</h3>
                <p className="text-fuchsia-300 text-lg font-semibold mb-3">Python & KNIME</p>
                <ul className="list-disc ml-6 mt-2 text-cyan-100 text-lg space-y-2">
                  <li>Classified 25,000 tweets into hate speech, offensive, and non-offensive content.</li>
                  <li>Achieved 88% accuracy with Random Forest; automated workflow in KNIME (87% accuracy).</li>
                </ul>
              </div>
              
              <div className="bg-black/80 backdrop-blur-md rounded-2xl shadow-2xl p-8 border border-yellow-500/30">
                <h3 className="font-bold text-2xl text-yellow-300 mb-2">Managing Credit Cards with PostgreSQL</h3>
                <p className="text-cyan-300 text-lg font-semibold mb-3">SQL</p>
                <ul className="list-disc ml-6 mt-2 text-cyan-100 text-lg space-y-2">
                  <li>Designed a secure credit card management system with 8 interconnected tables.</li>
                  <li>Automated reward calculations and signup bonuses with triggers and procedures.</li>
                  <li>Ensured PCI DSS compliance for sensitive data.</li>
                </ul>
              </div>
              
              <div className="bg-black/80 backdrop-blur-md rounded-2xl shadow-2xl p-8 border border-cyan-500/30">
                <h3 className="font-bold text-2xl text-fuchsia-300 mb-2">Enhancing Social Networking Profiles for Students using ML</h3>
                <p className="text-yellow-300 text-lg font-semibold mb-3">Python</p>
                <ul className="list-disc ml-6 mt-2 text-cyan-100 text-lg space-y-2">
                  <li>Applied KMeans clustering to 1,000+ students for better recommendations.</li>
                  <li>Increased interest-based matches by 20% using Pandas, NumPy, Matplotlib, Seaborn, and Scikit-learn.</li>
                </ul>
              </div>
              
              <div className="bg-black/80 backdrop-blur-md rounded-2xl shadow-2xl p-8 border border-fuchsia-500/30">
                <h3 className="font-bold text-2xl text-cyan-400 mb-2">GDP and Economic Indicators Analysis</h3>
                <p className="text-fuchsia-300 text-lg font-semibold mb-3">Tableau</p>
                <ul className="list-disc ml-6 mt-2 text-cyan-100 text-lg space-y-2">
                  <li>Analyzed GDP and economic indicators across 18 countries with interactive Tableau dashboards.</li>
                  <li>Identified trends in GDP, HDI, R&D, and gender wage gap for policy insights.</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Technical Skills Section */}
          <section>
            <h2 className="text-4xl sm:text-5xl font-extrabold mb-8 text-center bg-gradient-to-r from-cyan-400 via-fuchsia-500 to-yellow-400 text-transparent bg-clip-text drop-shadow-lg">
              Technical Skills
            </h2>
            <div className="bg-black/80 backdrop-blur-md rounded-2xl shadow-2xl p-8 border border-cyan-500/30">
              <div className="flex flex-wrap gap-3">
                <span className="bg-white text-black px-4 py-2 rounded-full text-lg font-bold shadow-lg hover:scale-105 transition-transform duration-200">Python</span>
                <span className="bg-white text-black px-4 py-2 rounded-full text-lg font-bold shadow-lg hover:scale-105 transition-transform duration-200">Java</span>
                <span className="bg-white text-black px-4 py-2 rounded-full text-lg font-bold shadow-lg hover:scale-105 transition-transform duration-200">SQL</span>
                <span className="bg-white text-black px-4 py-2 rounded-full text-lg font-bold shadow-lg hover:scale-105 transition-transform duration-200">MySQL</span>
                <span className="bg-white text-black px-4 py-2 rounded-full text-lg font-bold shadow-lg hover:scale-105 transition-transform duration-200">PostgreSQL</span>
                <span className="bg-white text-black px-4 py-2 rounded-full text-lg font-bold shadow-lg hover:scale-105 transition-transform duration-200">Tableau</span>
                <span className="bg-white text-black px-4 py-2 rounded-full text-lg font-bold shadow-lg hover:scale-105 transition-transform duration-200">KNIME</span>
                <span className="bg-white text-black px-4 py-2 rounded-full text-lg font-bold shadow-lg hover:scale-105 transition-transform duration-200">Git/GitHub</span>
                <span className="bg-white text-black px-4 py-2 rounded-full text-lg font-bold shadow-lg hover:scale-105 transition-transform duration-200">VS Code</span>
                <span className="bg-white text-black px-4 py-2 rounded-full text-lg font-bold shadow-lg hover:scale-105 transition-transform duration-200">Excel</span>
                <span className="bg-white text-black px-4 py-2 rounded-full text-lg font-bold shadow-lg hover:scale-105 transition-transform duration-200">Data Visualization</span>
                <span className="bg-white text-black px-4 py-2 rounded-full text-lg font-bold shadow-lg hover:scale-105 transition-transform duration-200">Predictive Modeling</span>
                <span className="bg-white text-black px-4 py-2 rounded-full text-lg font-bold shadow-lg hover:scale-105 transition-transform duration-200">Statistical Analysis</span>
                <span className="bg-white text-black px-4 py-2 rounded-full text-lg font-bold shadow-lg hover:scale-105 transition-transform duration-200">Database Management</span>
                <span className="bg-white text-black px-4 py-2 rounded-full text-lg font-bold shadow-lg hover:scale-105 transition-transform duration-200">Machine Learning</span>
              </div>
            </div>
          </section>

          {/* Soft Skills Section */}
          <section>
            <h2 className="text-4xl sm:text-5xl font-extrabold mb-8 text-center bg-gradient-to-r from-yellow-400 via-fuchsia-500 to-cyan-400 text-transparent bg-clip-text drop-shadow-lg">
              Soft Skills
            </h2>
            <div className="bg-black/80 backdrop-blur-md rounded-2xl shadow-2xl p-8 border border-fuchsia-500/30 mb-16">
              <div className="flex flex-wrap gap-3">
                <span className="bg-white text-black px-4 py-2 rounded-full text-lg font-bold shadow-lg hover:scale-105 transition-transform duration-200">Problem-Solving</span>
                <span className="bg-white text-black px-4 py-2 rounded-full text-lg font-bold shadow-lg hover:scale-105 transition-transform duration-200">Team Leadership</span>
                <span className="bg-white text-black px-4 py-2 rounded-full text-lg font-bold shadow-lg hover:scale-105 transition-transform duration-200">Project Management</span>
                <span className="bg-white text-black px-4 py-2 rounded-full text-lg font-bold shadow-lg hover:scale-105 transition-transform duration-200">Adaptability</span>
                <span className="bg-white text-black px-4 py-2 rounded-full text-lg font-bold shadow-lg hover:scale-105 transition-transform duration-200">Communication</span>
                <span className="bg-white text-black px-4 py-2 rounded-full text-lg font-bold shadow-lg hover:scale-105 transition-transform duration-200">Critical Thinking</span>
                <span className="bg-white text-black px-4 py-2 rounded-full text-lg font-bold shadow-lg hover:scale-105 transition-transform duration-200">Collaboration</span>
                <span className="bg-white text-black px-4 py-2 rounded-full text-lg font-bold shadow-lg hover:scale-105 transition-transform duration-200">Time Management</span>
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}
