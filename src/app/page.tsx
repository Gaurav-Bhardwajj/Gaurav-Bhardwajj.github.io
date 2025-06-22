"use client";
import ParticleNetwork from './ParticleNetwork';

export default function Home() {
  return (
    <div className="relative min-h-screen w-full bg-black p-0 flex flex-col items-center overflow-hidden">
      <ParticleNetwork />
      <div className="relative z-10 w-full flex flex-col items-center p-6 sm:p-12">
        <header className="w-full max-w-3xl mx-auto text-center mb-8">
          <div className="mx-auto flex justify-center">
            <div className="backdrop-blur-md bg-white/10 border border-white/20 shadow-2xl rounded-full px-8 py-6 sm:px-12 sm:py-8 flex flex-col items-center gap-2 transition-all duration-300 hover:bg-white/20 hover:shadow-fuchsia-400/30 hover:scale-105" style={{boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.37)'}}>
              <h1 className="text-5xl sm:text-6xl font-extrabold mb-2 tracking-tight bg-gradient-to-r from-cyan-400 via-fuchsia-500 to-yellow-400 text-transparent bg-clip-text drop-shadow-lg">
                Gaurav Bhardwaj
              </h1>
              <p className="text-xl sm:text-2xl font-semibold mb-2 text-fuchsia-300 drop-shadow">
                B. Tech. Computer Science (Data Science) @ The Northcap University
              </p>
              <p className="text-md text-cyan-200 flex items-center gap-4 justify-center">
                Gurugram
                <span className="flex items-center gap-1">
                  <a
                    href="mailto:gauravvbhardwaj1@gmail.com"
                    className="flex items-center gap-1 underline hover:text-yellow-400 focus:outline-none focus:ring-2 focus:ring-yellow-400 rounded transition-colors"
                    aria-label="Send mail to Gaurav Bhardwaj"
                  >
                    {/* Mail icon (Heroicons outline) */}
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 inline-block align-text-bottom">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25H4.5a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-.659 1.591l-7.09 7.09a2.25 2.25 0 01-3.182 0l-7.09-7.09A2.25 2.25 0 012.25 6.993V6.75" />
                    </svg>
                    <span className="sr-only sm:not-sr-only">mail</span>
                  </a>
                </span>
                <span className="flex items-center gap-1">
                  <a
                    href="https://www.linkedin.com/in/gauravvbhardwaj1/"
                    className="flex items-center gap-1 underline hover:text-fuchsia-400 focus:outline-none focus:ring-2 focus:ring-fuchsia-400 rounded transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Gaurav Bhardwaj on LinkedIn"
                  >
                    {/* LinkedIn icon (SVG) */}
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 inline-block align-text-bottom">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.268c-.966 0-1.75-.784-1.75-1.75s.784-1.75 1.75-1.75 1.75.784 1.75 1.75-.784 1.75-1.75 1.75zm15.5 11.268h-3v-5.604c0-1.337-.025-3.063-1.868-3.063-1.868 0-2.154 1.459-2.154 2.967v5.7h-3v-10h2.881v1.367h.041c.401-.761 1.379-1.563 2.841-1.563 3.04 0 3.601 2.002 3.601 4.604v5.592z" />
                    </svg>
                    <span className="sr-only sm:not-sr-only">LinkedIn</span>
                  </a>
                </span>
              </p>
            </div>
          </div>
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
          {/* Projects Section */}
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

          {/* Experience Section */}
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

          {/* Technical Skills Section */}
          <section>
            <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-cyan-400 via-fuchsia-500 to-yellow-400 text-transparent bg-clip-text drop-shadow">
              Tech Skills
            </h2>
            <div className="bg-black/80 rounded-lg shadow p-6 mb-8 text-cyan-100">
              <div className="flex flex-wrap gap-2 justify-center mb-4">
                <span className="bg-white text-black px-3 py-1 rounded-full text-sm font-semibold">Python</span>
                <span className="bg-white text-black px-3 py-1 rounded-full text-sm font-semibold">SQL</span>
                <span className="bg-white text-black px-3 py-1 rounded-full text-sm font-semibold">Java</span>
                <span className="bg-white text-black px-3 py-1 rounded-full text-sm font-semibold">Scikit-learn</span>
                <span className="bg-white text-black px-3 py-1 rounded-full text-sm font-semibold">KMeans</span>
                <span className="bg-white text-black px-3 py-1 rounded-full text-sm font-semibold">Random Forest</span>
                <span className="bg-white text-black px-3 py-1 rounded-full text-sm font-semibold">SVM</span>
                <span className="bg-white text-black px-3 py-1 rounded-full text-sm font-semibold">Naïve Bayes</span>
                <span className="bg-white text-black px-3 py-1 rounded-full text-sm font-semibold">Logistic Regression</span>
                <span className="bg-white text-black px-3 py-1 rounded-full text-sm font-semibold">TensorFlow</span>
                <span className="bg-white text-black px-3 py-1 rounded-full text-sm font-semibold">Keras</span>
                <span className="bg-white text-black px-3 py-1 rounded-full text-sm font-semibold">OpenCV</span>
                <span className="bg-white text-black px-3 py-1 rounded-full text-sm font-semibold">Text preprocessing</span>
                <span className="bg-white text-black px-3 py-1 rounded-full text-sm font-semibold">Vectorization</span>
                <span className="bg-white text-black px-3 py-1 rounded-full text-sm font-semibold">Sentiment/Hate Speech Classification</span>
                <span className="bg-white text-black px-3 py-1 rounded-full text-sm font-semibold">PostgreSQL</span>
                <span className="bg-white text-black px-3 py-1 rounded-full text-sm font-semibold">MySQL</span>
                <span className="bg-white text-black px-3 py-1 rounded-full text-sm font-semibold">KNIME</span>
                <span className="bg-white text-black px-3 py-1 rounded-full text-sm font-semibold">Tableau</span>
                <span className="bg-white text-black px-3 py-1 rounded-full text-sm font-semibold">Git/GitHub</span>
                <span className="bg-white text-black px-3 py-1 rounded-full text-sm font-semibold">Excel</span>
                <span className="bg-white text-black px-3 py-1 rounded-full text-sm font-semibold">VS Code</span>
                <span className="bg-white text-black px-3 py-1 rounded-full text-sm font-semibold">Data Analysis</span>
                <span className="bg-white text-black px-3 py-1 rounded-full text-sm font-semibold">Predictive Modeling</span>
                <span className="bg-white text-black px-3 py-1 rounded-full text-sm font-semibold">Statistical Analysis</span>
                <span className="bg-white text-black px-3 py-1 rounded-full text-sm font-semibold">Data Visualization</span>
                <span className="bg-white text-black px-3 py-1 rounded-full text-sm font-semibold">Machine Learning</span>
                <span className="bg-white text-black px-3 py-1 rounded-full text-sm font-semibold">Deep Learning</span>
                <span className="bg-white text-black px-3 py-1 rounded-full text-sm font-semibold">AI</span>
              </div>
            </div>
          </section>

          {/* Soft Skills Section */}
          <section>
            <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-yellow-400 via-fuchsia-500 to-cyan-400 text-transparent bg-clip-text drop-shadow">
              Soft Skills
            </h2>
            <div className="bg-black/80 rounded-lg shadow p-6 mb-8 text-cyan-100">
              <div className="flex flex-wrap gap-2 justify-center mb-4">
                <span className="bg-white text-black px-3 py-1 rounded-full text-sm font-semibold">Problem Solving & Critical Thinking</span>
                <span className="bg-white text-black px-3 py-1 rounded-full text-sm font-semibold">Team Leadership & Collaboration</span>
                <span className="bg-white text-black px-3 py-1 rounded-full text-sm font-semibold">Project Management</span>
                <span className="bg-white text-black px-3 py-1 rounded-full text-sm font-semibold">Adaptability & Quick Learning</span>
                <span className="bg-white text-black px-3 py-1 rounded-full text-sm font-semibold">Clear Communication</span>
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}
