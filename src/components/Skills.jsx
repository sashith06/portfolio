const Skills = () => {
  const skillCategories = [
    {
      category: 'Frontend',
      description: 'Building responsive and interactive user interfaces.',
      icon: (
        <svg
          className="h-6 w-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.8}
            d="M4 5h16v14H4zM4 9h16M8 7h.01M11 7h.01"
          />
        </svg>
      ),
      accent: 'blue',
      skills: [
        { name: 'React', icon: '⚛' },
        { name: 'JavaScript', icon: 'JS' },
        { name: 'HTML5', icon: '◇' },
        { name: 'CSS3', icon: '#' },
        { name: 'Tailwind CSS', icon: 'TW' },
        { name: 'Bootstrap', icon: 'B' },
      ],
    },
    {
      category: 'Backend',
      description: 'Developing APIs and server-side applications.',
      icon: (
        <svg
          className="h-6 w-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.8}
            d="M5 4h14v6H5zM5 14h14v6H5zM8 7h.01M8 17h.01M12 7h4M12 17h4"
          />
        </svg>
      ),
      accent: 'cyan',
      skills: [
        { name: 'Node.js', icon: 'N' },
        { name: 'Express.js', icon: 'EX' },
        { name: 'REST APIs', icon: 'API' },
        { name: 'Authentication', icon: '🔐' },
        { name: 'File Processing', icon: '📄' },
      ],
    },
    {
      category: 'Databases',
      description: 'Working with structured and NoSQL data systems.',
      icon: (
        <svg
          className="h-6 w-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <ellipse
            cx="12"
            cy="5"
            rx="7"
            ry="3"
            strokeWidth={1.8}
          />
          <path
            strokeLinecap="round"
            strokeWidth={1.8}
            d="M5 5v7c0 1.66 3.13 3 7 3s7-1.34 7-3V5"
          />
          <path
            strokeLinecap="round"
            strokeWidth={1.8}
            d="M5 12v7c0 1.66 3.13 3 7 3s7-1.34 7-3v-7"
          />
        </svg>
      ),
      accent: 'indigo',
      skills: [
        { name: 'MongoDB', icon: 'M' },
        { name: 'MySQL', icon: 'SQL' },
        { name: 'AWS RDS', icon: 'AWS' },
        { name: 'MongoDB Compass', icon: 'DB' },
      ],
    },
    {
      category: 'AI & Machine Learning',
      description: 'Exploring intelligent and AI-powered applications.',
      icon: (
        <svg
          className="h-6 w-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.8}
            d="M9 3v2M15 3v2M9 19v2M15 19v2M3 9h2M3 15h2M19 9h2M19 15h2"
          />
          <rect
            x="6"
            y="6"
            width="12"
            height="12"
            rx="2"
            strokeWidth={1.8}
          />
          <circle cx="10" cy="10" r="1" fill="currentColor" />
          <circle cx="14" cy="10" r="1" fill="currentColor" />
          <path
            strokeLinecap="round"
            strokeWidth={1.8}
            d="M9 14h6"
          />
        </svg>
      ),
      accent: 'purple',
      skills: [
        { name: 'Python', icon: 'PY' },
        { name: 'Scikit-learn', icon: 'ML' },
        { name: 'Groq API', icon: 'AI' },
        { name: 'Ollama', icon: 'OL' },
        { name: 'AI Integration', icon: 'AI' },
      ],
    },
    {
      category: 'Cloud & DevOps',
      description: 'Deploying and managing applications in cloud environments.',
      icon: (
        <svg
          className="h-6 w-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.8}
            d="M7 18h10a4 4 0 000-8 5 5 0 00-9.58 1.25A3.5 3.5 0 007 18z"
          />
        </svg>
      ),
      accent: 'sky',
      skills: [
        { name: 'AWS EC2', icon: 'EC2' },
        { name: 'AWS RDS', icon: 'RDS' },
        { name: 'Nginx', icon: 'NG' },
        { name: 'PM2', icon: 'PM2' },
        { name: 'Linux', icon: 'LIN' },
      ],
    },
    {
      category: 'Tools & Workflow',
      description: 'Tools I use to build, test and manage projects.',
      icon: (
        <svg
          className="h-6 w-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.8}
            d="M12 3v18M3 12h18M5.6 5.6l12.8 12.8M18.4 5.6L5.6 18.4"
          />
        </svg>
      ),
      accent: 'blue',
      skills: [
        { name: 'Git', icon: 'GIT' },
        { name: 'GitHub', icon: 'GH' },
        { name: 'VS Code', icon: 'VS' },
        { name: 'Postman', icon: 'PM' },
        { name: 'Figma', icon: 'FIG' },
      ],
    },
  ];

  const accentStyles = {
    blue: {
      icon: 'bg-blue-500/10 text-blue-400 group-hover:bg-blue-500/20',
      border: 'group-hover:border-blue-400/30',
      text: 'group-hover:text-blue-300',
      glow: 'bg-blue-500/10',
    },
    cyan: {
      icon: 'bg-cyan-500/10 text-cyan-400 group-hover:bg-cyan-500/20',
      border: 'group-hover:border-cyan-400/30',
      text: 'group-hover:text-cyan-300',
      glow: 'bg-cyan-500/10',
    },
    indigo: {
      icon: 'bg-indigo-500/10 text-indigo-400 group-hover:bg-indigo-500/20',
      border: 'group-hover:border-indigo-400/30',
      text: 'group-hover:text-indigo-300',
      glow: 'bg-indigo-500/10',
    },
    purple: {
      icon: 'bg-purple-500/10 text-purple-400 group-hover:bg-purple-500/20',
      border: 'group-hover:border-purple-400/30',
      text: 'group-hover:text-purple-300',
      glow: 'bg-purple-500/10',
    },
    sky: {
      icon: 'bg-sky-500/10 text-sky-400 group-hover:bg-sky-500/20',
      border: 'group-hover:border-sky-400/30',
      text: 'group-hover:text-sky-300',
      glow: 'bg-sky-500/10',
    },
  };

  return (
    <section
      id="skills"
      className="relative overflow-hidden bg-[#050816] py-24 text-white sm:py-28 lg:py-32"
    >
      {/* =========================
          BACKGROUND EFFECTS
      ========================== */}

      <div className="pointer-events-none absolute -left-40 top-20 h-96 w-96 rounded-full bg-blue-600/10 blur-3xl" />

      <div className="pointer-events-none absolute -right-40 bottom-20 h-96 w-96 rounded-full bg-purple-600/10 blur-3xl" />

      {/* Grid */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)',
          backgroundSize: '50px 50px',
        }}
      />

      <div className="relative z-10 mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">

        {/* =========================
            SECTION HEADER
        ========================== */}

        <div className="mb-14 max-w-3xl lg:mb-16">

          <div className="mb-4 flex items-center gap-3">
            <span className="h-px w-10 bg-blue-500" />

            <span className="text-sm font-semibold uppercase tracking-[0.25em] text-blue-400">
              My Toolkit
            </span>
          </div>

          <h2 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
            Technologies I
            <span className="block bg-gradient-to-r from-blue-400 via-cyan-300 to-indigo-400 bg-clip-text text-transparent">
              work with.
            </span>
          </h2>

          <p className="mt-5 max-w-2xl text-base leading-7 text-slate-400 sm:text-lg">
            A collection of technologies and tools I use to design,
            develop, deploy and continuously improve software.
          </p>
        </div>

        {/* =========================
            CORE SKILLS
        ========================== */}

        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">

          {skillCategories.map((category) => {
            const styles = accentStyles[category.accent];

            return (
              <div
                key={category.category}
                className={`group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-sm transition-all duration-500 hover:-translate-y-1 ${styles.border} hover:bg-white/[0.05] hover:shadow-2xl`}
              >

                {/* Glow */}
                <div
                  className={`pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100 ${styles.glow}`}
                />

                {/* Category header */}
                <div className="relative flex items-start gap-4">

                  <div
                    className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl transition-all duration-300 ${styles.icon}`}
                  >
                    {category.icon}
                  </div>

                  <div>
                    <h3
                      className={`text-lg font-semibold text-white transition-colors duration-300 ${styles.text}`}
                    >
                      {category.category}
                    </h3>

                    <p className="mt-1 text-xs leading-5 text-slate-500">
                      {category.description}
                    </p>
                  </div>
                </div>

                {/* Divider */}
                <div className="my-6 h-px bg-white/10" />

                {/* Skills */}
                <div className="relative flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <div
                      key={skill.name}
                      className="group/skill flex items-center gap-2 rounded-lg border border-white/10 bg-white/[0.03] px-3 py-2 transition-all duration-300 hover:border-blue-400/30 hover:bg-blue-500/10"
                    >
                      <span className="flex h-6 min-w-6 items-center justify-center rounded-md bg-white/5 px-1 text-[9px] font-bold text-slate-400">
                        {skill.icon}
                      </span>

                      <span className="text-xs font-medium text-slate-300 transition-colors duration-300 group-hover/skill:text-white">
                        {skill.name}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* =========================
            CURRENTLY WORKING WITH
        ========================== */}

        <div className="mt-20">

          <div className="mb-7 flex items-center gap-4">
            <div className="h-px flex-1 bg-white/10" />

            <div className="flex items-center gap-2">
              <span className="h-2 w-2 animate-pulse rounded-full bg-green-400" />

              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
                Currently Working With
              </span>
            </div>

            <div className="h-px flex-1 bg-white/10" />
          </div>

          <div className="flex flex-wrap justify-center gap-3">

            {[
              'React',
              'Node.js',
              'Express.js',
              'MongoDB',
              'MySQL',
              'AWS',
              'JavaScript',
              'AI / ML',
            ].map((tech) => (
              <span
                key={tech}
                className="rounded-xl border border-blue-400/10 bg-blue-500/[0.05] px-4 py-2.5 text-sm font-medium text-slate-300 transition-all duration-300 hover:-translate-y-1 hover:border-blue-400/30 hover:bg-blue-500/10 hover:text-blue-300"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* =========================
            LEARNING STATEMENT
        ========================== */}

        <div className="mt-16 flex justify-center">

          <div className="max-w-2xl rounded-2xl border border-white/10 bg-white/[0.02] px-6 py-5 text-center backdrop-blur-sm">
            <p className="text-sm leading-6 text-slate-500">
              <span className="text-blue-400">Always learning.</span>{' '}
              Technology changes quickly, and I'm continuously exploring
              new tools and better ways to build software.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Skills;