import myphoto3 from '../assets/pictures/myphoto3.jpg';

const Hero = () => {
  const scrollToSection = (id) => {
    document.querySelector(id)?.scrollIntoView({
      behavior: 'smooth',
    });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden bg-[#050816] text-white"
    >
      {/* =========================
          BACKGROUND EFFECTS
      ========================== */}

      {/* Blue glow */}
      <div className="pointer-events-none absolute -left-32 -top-32 h-96 w-96 rounded-full bg-blue-600/20 blur-3xl" />

      {/* Purple glow */}
      <div className="pointer-events-none absolute -bottom-40 -right-32 h-[500px] w-[500px] rounded-full bg-indigo-600/20 blur-3xl" />

      {/* Center glow */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-500/10 blur-3xl" />

      {/* Subtle grid */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.08]"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)',
          backgroundSize: '50px 50px',
        }}
      />

      {/* Top gradient */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-blue-600/10 to-transparent" />

      {/* =========================
          HERO CONTENT
      ========================== */}

      <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl items-center px-6 py-28 sm:px-8 lg:px-12">
        <div className="grid w-full items-center gap-16 lg:grid-cols-[1.15fr_0.85fr] lg:gap-12">

          {/* =========================
              LEFT CONTENT
          ========================== */}

          <div className="animate-fade-in">

            {/* Availability / Status */}
            <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-blue-400/20 bg-blue-500/10 px-4 py-2 text-sm text-blue-200 backdrop-blur-sm">
              <span className="relative flex h-2.5 w-2.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-60" />
                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-green-400" />
              </span>

              <span>Building modern web & AI applications</span>
            </div>

            {/* Small introduction */}
            <p className="mb-4 text-sm font-medium uppercase tracking-[0.3em] text-blue-400">
              Hello, I'm Sashith 👋
            </p>

            {/* Main heading */}
            <h1 className="max-w-4xl text-5xl font-bold leading-[1.05] tracking-tight sm:text-6xl md:text-7xl lg:text-7xl xl:text-8xl">
              Full Stack
              <span className="block bg-gradient-to-r from-blue-400 via-cyan-300 to-indigo-400 bg-clip-text text-transparent">
                Developer.
              </span>
            </h1>

            {/* Description */}
            <p className="mt-7 max-w-2xl text-base leading-8 text-slate-300 sm:text-lg">
              I build scalable, user-focused web applications from
              intuitive frontends to robust backend systems, with a growing
              focus on AI-powered solutions.
            </p>

            {/* Tech stack */}
            <div className="mt-7 flex flex-wrap gap-2">
              {[
                'React',
                'Node.js',
                'Express',
                'MongoDB',
                'MySQL',
                'AWS',
                'AI / ML',
              ].map((tech) => (
                <span
                  key={tech}
                  className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5 text-xs font-medium text-slate-300 backdrop-blur-sm transition-all duration-300 hover:border-blue-400/40 hover:bg-blue-500/10 hover:text-blue-300"
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">

              {/* Primary CTA */}
              <button
                onClick={() => scrollToSection('#projects')}
                className="group inline-flex items-center justify-center gap-2 rounded-xl bg-blue-500 px-6 py-3.5 font-semibold text-white shadow-lg shadow-blue-500/20 transition-all duration-300 hover:-translate-y-1 hover:bg-blue-400 hover:shadow-xl hover:shadow-blue-500/30"
              >
                Explore My Projects

                <svg
                  className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </button>

              {/* Secondary CTA */}
              <button
                onClick={() => scrollToSection('#contact')}
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/15 bg-white/[0.04] px-6 py-3.5 font-semibold text-white backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-blue-400/40 hover:bg-white/[0.08]"
              >
                Let's Talk
              </button>

              {/* CV */}
              <a
                href="/portfolio/Sashith_Thushan_CV.pdf"
                download="Sashith_Thushan_CV.pdf"
                className="inline-flex items-center justify-center gap-2 rounded-xl px-5 py-3.5 font-medium text-slate-300 transition-all duration-300 hover:text-white"
              >
                Download CV

                <svg
                  className="h-5 w-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 3v12m0 0l-4-4m4 4l4-4M5 21h14"
                  />
                </svg>
              </a>
            </div>

            {/* Social links */}
            <div className="mt-8 flex items-center gap-5">
              <span className="text-sm text-slate-500">
                Find me on
              </span>

              {/* GitHub */}
              <a
                href="https://github.com/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="text-slate-400 transition-all duration-300 hover:-translate-y-1 hover:text-white"
              >
                <svg
                  className="h-6 w-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2C6.48 2 2 6.58 2 12.23c0 4.52 2.87 8.35 6.84 9.71.5.1.68-.22.68-.49v-1.72c-2.78.62-3.37-1.22-3.37-1.22-.46-1.19-1.11-1.5-1.11-1.5-.91-.64.07-.63.07-.63 1 .07 1.53 1.06 1.53 1.06.9 1.58 2.36 1.12 2.94.86.09-.67.35-1.12.64-1.38-2.22-.26-4.56-1.14-4.56-5.07 0-1.12.39-2.04 1.03-2.76-.1-.26-.45-1.31.1-2.73 0 0 .84-.28 2.75 1.05A9.17 9.17 0 0112 7.98c.85 0 1.7.12 2.5.36 1.91-1.33 2.75-1.05 2.75-1.05.55 1.42.2 2.47.1 2.73.64.72 1.03 1.64 1.03 2.76 0 3.94-2.34 4.81-4.57 5.06.36.32.68.94.68 1.9v2.82c0 .27.18.59.69.49A10.25 10.25 0 0022 12.23C22 6.58 17.52 2 12 2z" />
                </svg>
              </a>

              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="text-slate-400 transition-all duration-300 hover:-translate-y-1 hover:text-blue-400"
              >
                <svg
                  className="h-6 w-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.34V8.99h3.42v1.56h.05c.48-.9 1.64-1.85 3.38-1.85 3.61 0 4.28 2.38 4.28 5.47v6.28zM5.32 7.43a2.07 2.07 0 110-4.14 2.07 2.07 0 010 4.14zM7.1 20.45H3.54V8.99H7.1v11.46zM22.23 0H1.77C.79 0 .0.79 0 1.77v20.46C0 23.21.79 24 1.77 24h20.46c.98 0 1.77-.79 1.77-1.77V1.77C24 .79 23.21 0 22.23 0z" />
                </svg>
              </a>

              {/* Email */}
              <a
                href="mailto:your-email@example.com"
                aria-label="Email"
                className="text-slate-400 transition-all duration-300 hover:-translate-y-1 hover:text-blue-400"
              >
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
                    d="M3 6.75A2.25 2.25 0 015.25 4.5h13.5A2.25 2.25 0 0121 6.75v10.5a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 17.25V6.75z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.8}
                    d="M3.5 6l8.5 6.25L20.5 6"
                  />
                </svg>
              </a>
            </div>
          </div>

          {/* =========================
              RIGHT VISUAL
          ========================== */}

          <div className="relative flex items-center justify-center">

            {/* Main glow behind image */}
            <div className="absolute h-72 w-72 rounded-full bg-blue-500/20 blur-3xl sm:h-96 sm:w-96" />

            {/* Decorative rotating ring */}
            <div className="absolute h-[310px] w-[310px] rounded-full border border-blue-400/10 sm:h-[390px] sm:w-[390px]" />

            <div className="absolute h-[350px] w-[350px] rounded-full border border-dashed border-blue-400/10 sm:h-[440px] sm:w-[440px] animate-[spin_35s_linear_infinite]" />

            {/* Photo */}
            <div className="relative z-10">

              <div className="absolute -inset-3 rounded-[2rem] bg-gradient-to-br from-blue-400/40 via-cyan-400/20 to-indigo-500/40 blur-xl" />

              <div className="relative overflow-hidden rounded-[2rem] border border-white/15 bg-white/5 p-2 shadow-2xl shadow-blue-900/30 backdrop-blur-sm">
                <img
                  src={myphoto3}
                  alt="K. Sashith Thushan"
                  className="h-[300px] w-[260px] rounded-[1.5rem] object-cover object-center sm:h-[390px] sm:w-[330px]"
                />

                {/* Image overlay */}
                <div className="absolute inset-x-2 bottom-2 rounded-b-[1.5rem] bg-gradient-to-t from-black/80 via-black/30 to-transparent px-5 pb-5 pt-14">
                  <p className="text-sm font-semibold text-white">
                    K. Sashith Thushan
                  </p>
                  <p className="mt-1 text-xs text-blue-200">
                    Full Stack Developer
                  </p>
                </div>
              </div>
            </div>

            {/* =========================
                FLOATING TECH BADGES
            ========================== */}

            <div className="absolute -left-3 top-10 z-20 rounded-xl border border-white/10 bg-[#0b1224]/90 px-4 py-2.5 shadow-xl backdrop-blur-md sm:-left-10">
              <div className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-cyan-400" />
                <span className="text-xs font-medium text-slate-200">
                  React
                </span>
              </div>
            </div>

            <div className="absolute -right-3 top-24 z-20 rounded-xl border border-white/10 bg-[#0b1224]/90 px-4 py-2.5 shadow-xl backdrop-blur-md sm:-right-12">
              <div className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-green-400" />
                <span className="text-xs font-medium text-slate-200">
                  Node.js
                </span>
              </div>
            </div>

            <div className="absolute -bottom-3 -left-2 z-20 rounded-xl border border-white/10 bg-[#0b1224]/90 px-4 py-2.5 shadow-xl backdrop-blur-md sm:-left-12">
              <div className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-yellow-400" />
                <span className="text-xs font-medium text-slate-200">
                  JavaScript
                </span>
              </div>
            </div>

            <div className="absolute -bottom-3 -right-2 z-20 rounded-xl border border-white/10 bg-[#0b1224]/90 px-4 py-2.5 shadow-xl backdrop-blur-md sm:-right-10">
              <div className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-purple-400" />
                <span className="text-xs font-medium text-slate-200">
                  AWS
                </span>
              </div>
            </div>

            {/* =========================
                TERMINAL CARD
            ========================== */}

            <div className="absolute -bottom-24 -right-2 z-30 hidden w-64 rounded-xl border border-white/10 bg-[#080d1c]/95 p-4 shadow-2xl backdrop-blur-xl md:block lg:-right-16">

              {/* Terminal header */}
              <div className="mb-3 flex items-center gap-1.5">
                <span className="h-2.5 w-2.5 rounded-full bg-red-400/80" />
                <span className="h-2.5 w-2.5 rounded-full bg-yellow-400/80" />
                <span className="h-2.5 w-2.5 rounded-full bg-green-400/80" />

                <span className="ml-2 text-[10px] text-slate-500">
                  sashith@portfolio
                </span>
              </div>

              {/* Terminal content */}
              <div className="font-mono text-xs leading-6">
                <p>
                  <span className="text-green-400">$</span>{' '}
                  <span className="text-slate-300">whoami</span>
                </p>

                <p className="text-blue-400">
                  Full Stack Developer
                </p>

                <p className="mt-1">
                  <span className="text-green-400">$</span>{' '}
                  <span className="text-slate-300">status</span>
                </p>

                <p className="text-green-400">
                  ● building...
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* =========================
          SCROLL INDICATOR
      ========================== */}

      <button
        onClick={() => scrollToSection('#about')}
        aria-label="Scroll to About section"
        className="absolute bottom-7 left-1/2 z-20 hidden -translate-x-1/2 flex-col items-center gap-2 text-slate-500 transition-colors duration-300 hover:text-blue-400 sm:flex"
      >
        <span className="text-[10px] uppercase tracking-[0.3em]">
          Scroll
        </span>

        <svg
          className="h-5 w-5 animate-bounce"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.8}
            d="M19 13l-7 7m0 0l-7-7m7 7V4"
          />
        </svg>
      </button>
    </section>
  );
};

export default Hero;