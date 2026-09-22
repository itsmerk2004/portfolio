import { useState } from "react";
import profileImage from "./assets/profile.jpg";
function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div className="min-h-screen bg-[#fafafa] text-neutral-900">
      {/* Navbar */}
      {/* Navbar */}
<header className="sticky top-0 z-50 border-b border-neutral-200/80 bg-[#fafafa]/90 backdrop-blur-md">
  <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6">
    <a
      href="#home"
      className="text-lg font-semibold tracking-tight"
      onClick={() => setMenuOpen(false)}
    >
      Rithu Krishna
    </a>

    {/* Desktop Navigation */}
    <div className="hidden items-center gap-8 text-sm text-neutral-600 md:flex">
      <a href="#home" className="transition hover:text-neutral-900">
        Home
      </a>

      <a href="#about" className="transition hover:text-neutral-900">
        About
      </a>

      <a href="#skills" className="transition hover:text-neutral-900">
        Skills
      </a>

      <a href="#projects" className="transition hover:text-neutral-900">
        Projects
      </a>

      <a href="#education" className="transition hover:text-neutral-900">
        Education
      </a>

      <a href="#contact" className="transition hover:text-neutral-900">
        Contact
      </a>
    </div>

    {/* Desktop Contact Button */}
    <a
      href="#contact"
      className="hidden rounded-full border border-neutral-300 px-4 py-2 text-sm font-medium transition hover:bg-neutral-900 hover:text-white sm:block"
    >
      Contact Me
    </a>

    {/* Mobile Menu Button */}
    <button
      type="button"
      onClick={() => setMenuOpen(!menuOpen)}
      className="rounded-lg border border-neutral-300 px-3 py-2 text-xl md:hidden"
      aria-label="Toggle navigation menu"
    >
      {menuOpen ? "✕" : "☰"}
    </button>
  </nav>

  {/* Mobile Navigation */}
  {menuOpen && (
    <div className="border-t border-neutral-200 bg-[#fafafa] px-4 py-4 md:hidden">
      <div className="flex flex-col gap-1 text-sm text-neutral-700">
        <a
          href="#home"
          onClick={() => setMenuOpen(false)}
          className="rounded-lg px-3 py-3 hover:bg-neutral-100"
        >
          Home
        </a>

        <a
          href="#about"
          onClick={() => setMenuOpen(false)}
          className="rounded-lg px-3 py-3 hover:bg-neutral-100"
        >
          About
        </a>

        <a
          href="#skills"
          onClick={() => setMenuOpen(false)}
          className="rounded-lg px-3 py-3 hover:bg-neutral-100"
        >
          Skills
        </a>

        <a
          href="#projects"
          onClick={() => setMenuOpen(false)}
          className="rounded-lg px-3 py-3 hover:bg-neutral-100"
        >
          Projects
        </a>

        <a
          href="#education"
          onClick={() => setMenuOpen(false)}
          className="rounded-lg px-3 py-3 hover:bg-neutral-100"
        >
          Education
        </a>

        <a
          href="#contact"
          onClick={() => setMenuOpen(false)}
          className="rounded-lg px-3 py-3 hover:bg-neutral-100"
        >
          Contact
        </a>
      </div>
    </div>
  )}
</header>

      {/* Hero Section */}
      <main>
        <section
  id="home"
  className="min-h-[calc(100vh-81px)] px-4 py-16 sm:px-8 sm:py-24"
>
          <div className="grid w-full items-center gap-11 lg:grid-cols-[1.5fr_0.5fr]">

            {/* Hero Content */}
            <div>
              <p className="mb-5 text-sm font-medium uppercase tracking-[0.25em] text-neutral-500">
                Hello, I'm
              </p>

              <h1 className="max-w-4xl text-4xl font-semibold leading-[0.98] tracking-[-0.03em] sm:text-6xl lg:text-5xl">
                Rithu Krishna
              </h1>

              <h2 className="mt-5 max-w-2xl text-xl font-medium leading-tight tracking-tight text-neutral-700 sm:text-3xl">
                Aspiring Data Analyst & Data Science Professional
              </h2>

              <p className="mt-6 max-w-2xl text-base leading-8 text-neutral-600 sm:text-lg">
                I am passionate about working with data, building practical
                solutions, and continuously learning modern technologies in
                Data Analytics and Data Science.
              </p>

              {/* Buttons */}
              <div className="mt-9 flex flex-wrap gap-4">
                <a
                  href="#projects"
                  className="rounded-full bg-neutral-900 px-6 py-3 text-sm font-medium text-white transition hover:bg-neutral-700"
                >
                  View Projects
                </a>

                <a
                  href="#contact"
                  className="rounded-full border border-neutral-300 px-6 py-3 text-sm font-medium transition hover:bg-neutral-100"
                >
                  Contact Me
                </a>
              </div>

              {/* Social Links */}
              <div className="mt-10 flex items-center gap-6 text-sm text-neutral-500">
                <a
                  href="https://linkedin.com/in/rithu-krishna-a14a"
                  target="_blank"
                  rel="noreferrer"
                  className="transition hover:text-neutral-900"
                >
                  LinkedIn ↗
                </a>

                <a
                  href="mailto:rithuk370@gmail.com"
                  className="transition hover:text-neutral-900"
                >
                  Email ↗
                </a>
              </div>
            </div>

            {/* Minimal Profile Card */}
           <div className="block w-full">
              <div className="rounded-3xl border border-neutral-200 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg">
                <img
                     src={profileImage}
                     alt="Rithu Krishna"
                      className="block h-auto w-full rounded-2xl object-cover"
                  />

                <div className="mt-6">
                  <p className="text-sm text-neutral-500">
                    Focus Areas
                  </p>

                  <p className="mt-2 text-lg font-medium">
                    Data Analytics · Python · SQL · Power BI
                  </p>
                </div>
              </div>
            </div>

          </div>
        </section>
                {/* About Section */}
        <section id="about" className="border-t border-neutral-200 px-6 py-16 sm:px-8 sm:py-24">
          <div className="mx-auto max-w-6xl">
            <div className="grid gap-12 lg:grid-cols-[0.7fr_1.3fr]">

              {/* Section Title */}
              <div>
                <p className="text-sm font-medium uppercase tracking-[0.25em] text-neutral-500">
                  About Me
                </p>

                <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
                  A curious learner focused on data and technology.
                </h2>
              </div>

              {/* About Content */}
              <div className="max-w-3xl">
                <p className="text-lg leading-8 text-neutral-600">
                  I am a BCA graduate with a strong interest in Data
                  Analytics and Data Science. I enjoy working with data,
                  solving problems, and exploring how technology can be used
                  to create practical solutions.
                </p>

                <p className="mt-6 text-lg leading-8 text-neutral-600">
                  My learning journey has given me hands-on exposure to
                  Python, SQL, Excel, Power BI, Tableau, Machine Learning,
                  Deep Learning, and NLP. I am continuously improving my
                  technical skills through projects and practical learning.
                </p>

                <p className="mt-6 text-lg leading-8 text-neutral-600">
                  I value adaptability, problem-solving, teamwork, and
                  continuous learning. My goal is to build a career where I
                  can use data and technology to solve meaningful problems.
                </p>

                {/* Quick Information */}
                <div className="mt-10 grid gap-4 sm:grid-cols-2">
                  <div className="rounded-2xl border border-neutral-200 bg-white p-5 transition duration-300 hover:-translate-y-1 hover:shadow-md">
                    <p className="text-sm text-neutral-500">Education</p>
                    <p className="mt-2 font-medium">
                      BCA — University of Calicut
                    </p>
                  </div>

                  <div className="rounded-2xl border border-neutral-200 bg-white p-5 transition duration-300 hover:-translate-y-1 hover:shadow-md">
                    <p className="text-sm text-neutral-500">Focus</p>
                    <p className="mt-2 font-medium">
                      Data Analytics & Data Science
                    </p>
                  </div>

                 <div className="rounded-2xl border border-neutral-200 bg-white p-5 transition duration-300 hover:-translate-y-1 hover:shadow-md">
                    <p className="text-sm text-neutral-500">Tools</p>
                    <p className="mt-2 font-medium">
                      Python · SQL · Power BI · Excel
                    </p>
                  </div>

                  <div className="rounded-2xl border border-neutral-200 bg-white p-5 transition duration-300 hover:-translate-y-1 hover:shadow-md">
                    <p className="text-sm text-neutral-500">Languages</p>
                    <p className="mt-2 font-medium">
                      English · Malayalam · Hindi
                    </p>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section
          id="skills"
          className="border-t border-neutral-200 px-6 py-16 sm:py-24"
        >
          <div className="mx-auto max-w-6xl">

            {/* Section Heading */}
            <div className="max-w-2xl">
              <p className="text-sm font-medium uppercase tracking-[0.25em] text-neutral-500">
                Skills
              </p>

              <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
                Tools and technologies I work with.
              </h2>

              <p className="mt-5 text-lg leading-8 text-neutral-600">
                A growing technical toolkit developed through academic
                learning, practical projects, and continuous self-learning.
              </p>
            </div>

            {/* Skills Grid */}
            <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">

              {/* Programming & Database */}
              <div className="rounded-3xl border border-neutral-200 bg-white p-7 transition hover:-translate-y-1 hover:shadow-md">
                <p className="text-sm font-medium text-neutral-500">
                  01
                </p>

                <h3 className="mt-4 text-xl font-semibold">
                  Programming & Database
                </h3>

                <div className="mt-6 flex flex-wrap gap-2">
                  {["Python", "JavaScript", "MySQL"].map((skill) => (
                    <span
                      key={skill}
                      className="rounded-full border border-neutral-200 bg-neutral-50 px-3 py-2 text-sm text-neutral-700 transition-colors hover:bg-neutral-100"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Data Science & AI */}
              <div className="rounded-3xl border border-neutral-200 bg-white p-7 transition hover:-translate-y-1 hover:shadow-md">
                <p className="text-sm font-medium text-neutral-500">
                  02
                </p>

                <h3 className="mt-4 text-xl font-semibold">
                  Data Science & AI
                </h3>

                <div className="mt-6 flex flex-wrap gap-2">
                  {["Machine Learning", "Deep Learning", "NLP"].map(
                    (skill) => (
                      <span
                        key={skill}
                        className="rounded-full border border-neutral-200 bg-neutral-50 px-3 py-2 text-sm text-neutral-700 transition-colors hover:bg-neutral-100"
                      >
                        {skill}
                      </span>
                    )
                  )}
                </div>
              </div>

              {/* Data & Visualization */}
              <div className="rounded-3xl border border-neutral-200 bg-white p-7 transition hover:-translate-y-1 hover:shadow-md">
                <p className="text-sm font-medium text-neutral-500">
                  03
                </p>

                <h3 className="mt-4 text-xl font-semibold">
                  Data & Visualization
                </h3>

                <div className="mt-6 flex flex-wrap gap-2">
                  {["Excel", "Power BI", "Tableau", "NumPy"].map(
                    (skill) => (
                      <span
                        key={skill}
                        className="rounded-full border border-neutral-200 bg-neutral-50 px-3 py-2 text-sm text-neutral-700 transition-colors hover:bg-neutral-100"
                      >
                        {skill}
                      </span>
                    )
                  )}
                </div>
              </div>

              {/* Core Strengths */}
              <div className="rounded-3xl border border-neutral-200 bg-white p-7 transition hover:-translate-y-1 hover:shadow-md">
                <p className="text-sm font-medium text-neutral-500">
                  04
                </p>

                <h3 className="mt-4 text-xl font-semibold">
                  Core Strengths
                </h3>

                <div className="mt-6 flex flex-wrap gap-2">
                  {[
                    "Problem-Solving",
                    "Adaptability",
                    "Time Management",
                    "Teamwork",
                  ].map((skill) => (
                    <span
                      key={skill}
                      className="rounded-full border border-neutral-200 bg-neutral-50 px-3 py-2 text-sm text-neutral-700 transition-colors hover:bg-neutral-100"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

            </div>
          </div>
                </section>

        {/* Projects Section */}
        <section
          id="projects"
          className="border-t border-neutral-200 px-6 py-16 sm:py-24"
        >
          <div className="mx-auto max-w-6xl">

            {/* Section Heading */}
            <div className="max-w-2xl">
              <p className="text-sm font-medium uppercase tracking-[0.25em] text-neutral-500">
                Projects
              </p>

              <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
                Practical work built through learning and exploration.
              </h2>

              <p className="mt-5 text-lg leading-8 text-neutral-600">
                A selection of projects where I applied programming, data
                analysis, visualization, and machine learning concepts.
              </p>
            </div>

            {/* Projects Grid */}
            <div className="mt-14 grid gap-6 md:grid-cols-2">

              {/* Project 1 */}
              <article className="group rounded-3xl border border-neutral-200 bg-white p-8 transition duration-300 hover:-translate-y-1 hover:shadow-lg md:col-span-2">
                <div className="flex items-start justify-between gap-4">
                  <span className="text-sm text-neutral-400">01</span>

                  <span className="rounded-full border border-neutral-200 bg-neutral-50 px-3 py-1 text-xs font-medium text-neutral-600">
                    Data Science
                  </span>
                </div>

                <h3 className="mt-8 text-2xl font-semibold tracking-tight">
                  Personal Expense Intelligence
                </h3>

                <p className="mt-4 max-w-3xl leading-7 text-neutral-600">
                  Developed an interactive expense analytics dashboard with
                  automated data validation, cleaning, filtering, KPI
                  tracking, and spending analysis.
                </p>

                <p className="mt-4 max-w-3xl leading-7 text-neutral-600">
                  Implemented budget analysis, IQR-based anomaly detection,
                  and short-term expense forecasting using Linear Regression.
                </p>

                <div className="mt-6 flex flex-wrap gap-2">
                  {[
                    "Python",
                    "SQL",
                    "Pandas",
                    "Streamlit",
                    "Scikit-learn",
                  ].map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-neutral-200 px-3 py-1.5 text-xs text-neutral-600"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </article>

              {/* Project 2 */}
              <article className="group rounded-3xl border border-neutral-200 bg-white p-8 transition duration-300 hover:-translate-y-1 hover:shadow-lg">
                <div className="flex items-start justify-between gap-4">
                  <span className="text-sm text-neutral-400">02</span>

                  <span className="rounded-full border border-neutral-200 bg-neutral-50 px-3 py-1 text-xs font-medium text-neutral-600">
                    Web Application
                  </span>
                </div>

                <h3 className="mt-8 text-2xl font-semibold tracking-tight">
                  Task Tracker
                </h3>

                <p className="mt-4 leading-7 text-neutral-600">
                  Developed a task management application with task creation,
                  editing, deletion, completion tracking, and progress
                  statistics.
                </p>

                <p className="mt-4 leading-7 text-neutral-600">
                  Added a responsive CSS-based interface with a live clock
                  and completion effects.
                </p>

                <div className="mt-6 flex flex-wrap gap-2">
                  {[
                    "Task Management",
                    "Responsive UI",
                    "Progress Tracking",
                  ].map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-neutral-200 px-3 py-1.5 text-xs text-neutral-600"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </article>

              {/* Project 3 */}
              <article className="group rounded-3xl border border-neutral-200 bg-white p-8 transition duration-300 hover:-translate-y-1 hover:shadow-lg">
                <div className="flex items-start justify-between gap-4">
                  <span className="text-sm text-neutral-400">03</span>

                  <span className="rounded-full border border-neutral-200 bg-neutral-50 px-3 py-1 text-xs font-medium text-neutral-600">
                    Power BI
                  </span>
                </div>

                <h3 className="mt-8 text-2xl font-semibold tracking-tight">
                  Amazon Prime Movies Dashboard
                </h3>

                <p className="mt-4 leading-7 text-neutral-600">
                  Built an interactive dashboard to analyze Amazon Prime
                  movies by genre, ratings, and release year.
                </p>

                <p className="mt-4 leading-7 text-neutral-600">
                  Performed data cleaning and visualization to identify
                  trends and present insights.
                </p>

                <div className="mt-6 flex flex-wrap gap-2">
                  {[
                    "Power BI",
                    "Data Cleaning",
                    "Data Visualization",
                    "Dashboard",
                  ].map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-neutral-200 px-3 py-1.5 text-xs text-neutral-600"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </article>

            </div>
          </div>
              </section>

      {/* Education & Certifications */}
      <section
        id="education"
        className="mx-auto max-w-6xl px-6 py-20 sm:px-8"
      >
        <div className="max-w-2xl">
          <p className="text-sm font-medium uppercase tracking-wider text-neutral-500">
            Education
          </p>

          <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
            Academic foundation and continuous learning.
          </h2>

          <p className="mt-4 text-base leading-7 text-neutral-600">
            A foundation in computer applications supported by focused learning
            in data science and artificial intelligence.
          </p>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {/* BCA */}
          <div className="rounded-3xl border border-neutral-200 bg-white p-8 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-md">
            <p className="text-sm font-medium text-neutral-500">
              2022 — 2025
            </p>

            <h3 className="mt-3 text-xl font-semibold">
              Bachelor of Computer Applications
            </h3>

            <p className="mt-2 text-neutral-600">
              University of Calicut
            </p>

            <p className="mt-5 text-sm leading-6 text-neutral-600">
              Built a foundation in computer applications, programming,
              databases, and software development concepts.
            </p>
          </div>

          {/* Data Science */}
          <div className="rounded-3xl border border-neutral-200 bg-white p-8 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-md">
            <p className="text-sm font-medium text-neutral-500">
              2025 — 2026
            </p>

            <h3 className="mt-3 text-xl font-semibold">
              Data Science & AI Specialization
            </h3>

            <p className="mt-2 text-neutral-600">
              Keltron
            </p>

            <p className="mt-5 text-sm leading-6 text-neutral-600">
              Focused learning in data analytics, machine learning,
              artificial intelligence, data visualization, and practical
              project development.
            </p>
          </div>
        </div>
      </section>
            {/* Contact */}
      <section
        id="contact"
        className="border-t border-neutral-200 bg-white"
      >
       <div className="mx-auto max-w-6xl px-6 py-16 sm:px-8 sm:py-24">
          <div className="max-w-2xl">
            <p className="text-sm font-medium uppercase tracking-wider text-neutral-500">
              Contact
            </p>

            <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
              Let’s connect.
            </h2>

            <p className="mt-4 text-base leading-7 text-neutral-600">
              I’m open to opportunities where I can learn, contribute, and
              grow in data analytics and data science.
            </p>
          </div>

          <div className="mt-10 grid gap-4 sm:grid-cols-2">
            {/* Email */}
            <a
              href="mailto:rithuk370@gmail.com"
              className="rounded-2xl border border-neutral-200 bg-neutral-50 p-6 transition hover:-translate-y-1 hover:shadow-md"
            >
              <p className="text-sm font-medium text-neutral-500">
                Email
              </p>

              <p className="mt-2 font-medium text-neutral-900">
                rithuk370@gmail.com
              </p>
            </a>

            {/* Phone */}
            <a
              href="tel:+919037484530"
              className="rounded-2xl border border-neutral-200 bg-neutral-50 p-6 transition hover:-translate-y-1 hover:shadow-md"
            >
              <p className="text-sm font-medium text-neutral-500">
                Phone
              </p>

              <p className="mt-2 font-medium text-neutral-900">
                +91 9037484530
              </p>
            </a>

            {/* Location */}
            <div className="rounded-2xl border border-neutral-200 bg-neutral-50 p-6 transition duration-300 hover:-translate-y-1 hover:shadow-md">
              <p className="text-sm font-medium text-neutral-500">
                Location
              </p>

              <p className="mt-2 font-medium text-neutral-900">
                Calicut, Kerala
              </p>
            </div>

            {/* LinkedIn */}
            <a
              href="https://linkedin.com/in/rithu-krishna-a14a"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-2xl border border-neutral-200 bg-neutral-50 p-6 transition hover:-translate-y-1 hover:shadow-md"
            >
              <p className="text-sm font-medium text-neutral-500">
                LinkedIn
              </p>

              <p className="mt-2 font-medium text-neutral-900">
                Connect on LinkedIn →
              </p>
            </a>
          </div>
        </div>
      </section>
            {/* Footer */}
      <footer className="border-t border-neutral-200 bg-[#fafafa]">
        <div className="mx-auto flex max-w-6xl flex-col gap-3 px-6 py-8 text-sm text-neutral-500 sm:flex-row sm:items-center sm:justify-between sm:px-8">
          <p>© 2026 Rithu Krishna. All rights reserved.</p>

          <a
            href="#home"
            className="transition hover:text-neutral-900"
          >
            Back to top ↑
          </a>
        </div>
      </footer>

    </main>
```

    </div>
  );
}

export default App;