import mypohoto2 from '../assets/pictures/myphoto2.jpg';

const About = () => {
  return (
    <section
      id="about"
      className="relative overflow-hidden bg-[#050816] py-24 text-white sm:py-28 lg:py-32"
    >
      {/* =========================
          BACKGROUND EFFECTS
      ========================== */}

      <div className="pointer-events-none absolute -left-40 top-20 h-96 w-96 rounded-full bg-blue-600/10 blur-3xl" />

      <div className="pointer-events-none absolute -right-40 bottom-0 h-96 w-96 rounded-full bg-indigo-600/10 blur-3xl" />

      {/* Subtle grid */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.04]"
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

        <div className="mb-16 max-w-3xl">
          <div className="mb-4 flex items-center gap-3">
            <span className="h-px w-10 bg-blue-500" />

            <span className="text-sm font-semibold uppercase tracking-[0.25em] text-blue-400">
              About Me
            </span>
          </div>

          <h2 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
            Building with
            <span className="block bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
              purpose & curiosity.
            </span>
          </h2>

          <p className="mt-5 max-w-2xl text-base leading-7 text-slate-400 sm:text-lg">
            I'm a developer who enjoys turning ideas into practical,
            user-focused digital experiences.
          </p>
        </div>

        {/* =========================
            MAIN CONTENT
        ========================== */}

        <div className="grid items-center gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">

          {/* =========================
              IMAGE SIDE
          ========================== */}

          <div className="relative mx-auto w-full max-w-md animate-slide-up lg:mx-0">

            {/* Glow */}
            <div className="absolute -inset-4 rounded-[2rem] bg-blue-500/10 blur-2xl" />

            {/* Decorative ring */}
            <div className="absolute -right-5 -top-5 h-24 w-24 rounded-full border border-blue-400/20" />

            <div className="absolute -bottom-6 -left-6 h-28 w-28 rounded-full border border-dashed border-blue-400/20" />

            {/* Image container */}
            <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.03] p-2 shadow-2xl shadow-blue-950/30 backdrop-blur-sm">

              <img
                src={mypohoto2}
                alt="K. Sashith Thushan"
                className="h-[420px] w-full rounded-[1.5rem] object-cover object-center transition-transform duration-700 hover:scale-[1.03] sm:h-[500px]"
              />

              {/* Image gradient */}
              <div className="absolute inset-x-2 bottom-2 rounded-b-[1.5rem] bg-gradient-to-t from-black/80 via-black/20 to-transparent px-6 pb-6 pt-24">
                <p className="text-lg font-semibold text-white">
                  K. Sashith Thushan
                </p>

                <p className="mt-1 text-sm text-blue-200">
                  Full Stack Developer
                </p>
              </div>
            </div>

            {/* Floating experience badge */}
            <div className="absolute -bottom-5 -right-3 rounded-2xl border border-white/10 bg-[#0b1224]/95 px-5 py-4 shadow-2xl backdrop-blur-xl sm:-right-8">
              <p className="text-2xl font-bold text-white">IT</p>
              <p className="text-xs text-slate-400">
                Undergraduate
              </p>
            </div>
          </div>

          {/* =========================
              TEXT SIDE
          ========================== */}

          <div className="animate-slide-up">

            {/* Intro */}
            <div className="space-y-5 text-base leading-8 text-slate-300 sm:text-lg">

              <p>
                Hello! I'm{' '}
                <span className="font-semibold text-white">
                  K. Sashith Thushan
                </span>
                , an IT undergraduate at the Institute of Technology,
                University of Moratuwa, with a strong interest in{' '}
                <span className="text-blue-400">
                  full stack development
                </span>
                .
              </p>

              <p>
                I enjoy building complete software solutions — from
                designing intuitive user interfaces to developing robust
                backend systems and working with databases. I like
                understanding how every layer of an application connects
                together.
              </p>

              <p>
                I'm also interested in{' '}
                <span className="text-cyan-300">
                  AI-powered applications
                </span>
                , cloud technologies, and continuously exploring better
                ways to solve real-world problems through software.
              </p>
            </div>

            {/* =========================
                WHAT I DO
            ========================== */}

            <div className="mt-10 grid gap-4 sm:grid-cols-2">

              {/* Card 1 */}
              <div className="group rounded-2xl border border-white/10 bg-white/[0.03] p-5 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-blue-400/30 hover:bg-blue-500/[0.05]">

                <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-blue-500/10 text-blue-400">
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
                      d="M4 5h16v14H4zM8 9h8M8 13h5"
                    />
                  </svg>
                </div>

                <h3 className="font-semibold text-white">
                  Full Stack Development
                </h3>

                <p className="mt-2 text-sm leading-6 text-slate-400">
                  Building responsive frontends, reliable APIs and
                  database-driven applications.
                </p>
              </div>

              {/* Card 2 */}
              <div className="group rounded-2xl border border-white/10 bg-white/[0.03] p-5 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400/30 hover:bg-cyan-500/[0.05]">

                <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-cyan-500/10 text-cyan-400">
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
                </div>

                <h3 className="font-semibold text-white">
                  AI & Cloud
                </h3>

                <p className="mt-2 text-sm leading-6 text-slate-400">
                  Exploring AI integrations, cloud platforms and
                  scalable application architectures.
                </p>
              </div>
            </div>

            {/* =========================
                TECHNOLOGY STACK
            ========================== */}

            <div className="mt-10">

              <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
                Technologies I work with
              </p>

              <div className="flex flex-wrap gap-2">
                {[
                  'React',
                  'JavaScript',
                  'Node.js',
                  'Express',
                  'MongoDB',
                  'MySQL',
                  'AWS',
                  'Git',
                ].map((tech) => (
                  <span
                    key={tech}
                    className="rounded-lg border border-white/10 bg-white/[0.03] px-3 py-2 text-xs font-medium text-slate-300 transition-all duration-300 hover:border-blue-400/30 hover:bg-blue-500/10 hover:text-blue-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

          </div>
        </div>

        {/* =========================
            BOTTOM HIGHLIGHTS
        ========================== */}

        <div className="mt-24 grid gap-4 border-t border-white/10 pt-10 sm:grid-cols-3">

          <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-6 transition-all duration-300 hover:bg-white/[0.04]">
            <p className="text-3xl font-bold text-blue-400">01</p>
            <p className="mt-2 font-semibold text-white">
              Build
            </p>
            <p className="mt-1 text-sm leading-6 text-slate-500">
              Turning ideas into working software.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-6 transition-all duration-300 hover:bg-white/[0.04]">
            <p className="text-3xl font-bold text-cyan-400">02</p>
            <p className="mt-2 font-semibold text-white">
              Learn
            </p>
            <p className="mt-1 text-sm leading-6 text-slate-500">
              Continuously exploring new technologies.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-6 transition-all duration-300 hover:bg-white/[0.04]">
            <p className="text-3xl font-bold text-indigo-400">03</p>
            <p className="mt-2 font-semibold text-white">
              Improve
            </p>
            <p className="mt-1 text-sm leading-6 text-slate-500">
              Finding better ways to solve problems.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;