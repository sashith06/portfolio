const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToSection = (id) => {
    const element = document.querySelector(id);

    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
      });
    }
  };

  const quickLinks = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Projects', href: '#projects' },
    { label: 'Skills', href: '#skills' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <footer className="relative overflow-hidden border-t border-white/10 bg-[#03050f] text-white">

      {/* =========================
          BACKGROUND GLOW
      ========================== */}

      <div className="pointer-events-none absolute -left-40 -top-40 h-80 w-80 rounded-full bg-blue-600/10 blur-3xl" />

      <div className="pointer-events-none absolute -bottom-40 -right-40 h-80 w-80 rounded-full bg-cyan-600/10 blur-3xl" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">

        {/* =========================
            MAIN FOOTER
        ========================== */}

        <div className="flex flex-col gap-10 py-12 md:flex-row md:items-center md:justify-between">

          {/* Brand */}
          <div className="max-w-sm">

            <button
              onClick={() => scrollToSection('#home')}
              className="group flex items-center gap-3"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-blue-500 to-cyan-400 shadow-lg shadow-blue-500/20 transition-transform duration-300 group-hover:scale-105">
                <span className="text-sm font-bold text-white">
                  ST
                </span>
              </div>

              <div className="text-left">
                <p className="text-sm font-semibold tracking-wide text-white">
                  Sashith Thushan
                </p>

                <p className="text-[10px] uppercase tracking-[0.18em] text-slate-600">
                  Full Stack Developer
                </p>
              </div>
            </button>

            <p className="mt-4 text-sm leading-6 text-slate-500">
              Building practical digital experiences with modern web
              technologies and a passion for continuous learning.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-slate-600">
              Quick Links
            </p>

            <div className="flex flex-wrap gap-x-6 gap-y-3">
              {quickLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => scrollToSection(link.href)}
                  className="text-sm text-slate-500 transition-colors duration-300 hover:text-blue-400"
                >
                  {link.label}
                </button>
              ))}
            </div>
          </div>

        </div>

        {/* =========================
            DIVIDER
        ========================== */}

        <div className="h-px bg-white/10" />

        {/* =========================
            BOTTOM
        ========================== */}

        <div className="flex flex-col items-center justify-between gap-5 py-6 sm:flex-row">

          <p className="text-xs text-slate-600">
            © {currentYear} Sashith Thushan. All rights reserved.
          </p>

          <div className="flex items-center gap-4">

            <span className="text-xs text-slate-700">
              Designed & built with
            </span>

            <span className="text-xs font-medium text-blue-400">
              React
            </span>

            <span className="text-slate-700">•</span>

            <span className="text-xs font-medium text-cyan-400">
              Tailwind CSS
            </span>

            {/* Back to top */}
            <button
              onClick={() =>
                window.scrollTo({
                  top: 0,
                  behavior: 'smooth',
                })
              }
              className="ml-2 flex h-9 w-9 items-center justify-center rounded-xl border border-white/10 bg-white/[0.03] text-slate-500 transition-all duration-300 hover:-translate-y-1 hover:border-blue-400/30 hover:bg-blue-500/10 hover:text-blue-400"
              title="Back to top"
              aria-label="Back to top"
            >
              <svg
                className="h-4 w-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.8}
                  d="M5 10l7-7m0 0l7 7m-7-7v18"
                />
              </svg>
            </button>

          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;