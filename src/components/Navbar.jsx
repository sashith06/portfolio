import { useState, useEffect } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const navItems = [
    { href: '#home', label: 'Home' },
    { href: '#about', label: 'About' },
    { href: '#projects', label: 'Projects' },
    { href: '#skills', label: 'Skills' },
    { href: '#contact', label: 'Contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToSection = (href) => {
    const element = document.querySelector(href);

    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }

    setIsOpen(false);
  };

  return (
    <nav className="fixed left-0 right-0 top-0 z-50 px-4 pt-4 sm:px-6">
      <div
        className={`mx-auto max-w-7xl rounded-2xl border transition-all duration-500 ${isScrolled
          ? 'border-white/10 bg-[#050816]/85 shadow-2xl shadow-black/20 backdrop-blur-xl'
          : 'border-white/10 bg-black/10 backdrop-blur-md'
          }`}
      >
        <div className="flex h-16 items-center justify-between px-5 sm:px-6">

          {/* =========================
              LOGO
          ========================== */}

          <button
            onClick={() => scrollToSection('#home')}
            className="group flex items-center gap-3"
          >
            {/* Logo mark */}
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-blue-500 to-cyan-400 shadow-lg shadow-blue-500/20 transition-transform duration-300 group-hover:scale-105">
              <span className="text-sm font-bold text-white">
                ST
              </span>
            </div>

            {/* Name */}
            <div className="hidden sm:block text-left">
              <p className="text-sm font-semibold tracking-wide text-white">
                Sashith Thushan
              </p>

              <p className="text-[10px] uppercase tracking-[0.18em] text-slate-500">
                Full Stack Developer
              </p>
            </div>
          </button>

          {/* =========================
              DESKTOP NAVIGATION
          ========================== */}

          <div className="hidden items-center gap-1 md:flex">
            {navItems.map((item, index) => (
              <button
                key={item.href}
                onClick={() => scrollToSection(item.href)}
                className={`group relative rounded-xl px-4 py-2 text-sm font-medium transition-all duration-300 ${item.href === '#home'
                  ? 'text-white'
                  : 'text-slate-400 hover:bg-white/[0.04] hover:text-white'
                  }`}
              >
                {item.label}

                {/* Hover / active line */}
                <span
                  className={`absolute bottom-1 left-1/2 h-0.5 -translate-x-1/2 rounded-full bg-blue-400 transition-all duration-300 ${index === 0
                    ? 'w-4'
                    : 'w-0 group-hover:w-4'
                    }`}
                />
              </button>
            ))}
          </div>

          {/* =========================
              DESKTOP CTA
          ========================== */}

          <button
            onClick={() => scrollToSection('#contact')}
            className="hidden items-center gap-2 rounded-xl bg-blue-500 px-4 py-2.5 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-blue-400 hover:shadow-lg hover:shadow-blue-500/20 md:flex"
          >
            Let's Talk

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
                d="M5 12h14M13 6l6 6-6 6"
              />
            </svg>
          </button>

          {/* =========================
              MOBILE MENU BUTTON
          ========================== */}

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/[0.03] text-slate-300 transition-all duration-300 hover:border-blue-400/30 hover:bg-blue-500/10 hover:text-white md:hidden"
            aria-label="Toggle navigation menu"
            aria-expanded={isOpen}
          >
            {isOpen ? (
              <svg
                className="h-5 w-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.8}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                className="h-5 w-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.8}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
        </div>

        {/* =========================
            MOBILE NAVIGATION
        ========================== */}

        <div
          className={`overflow-hidden transition-all duration-300 md:hidden ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
            }`}
        >
          <div className="border-t border-white/10 px-4 pb-4 pt-3">
            <div className="space-y-1">
              {navItems.map((item) => (
                <button
                  key={item.href}
                  onClick={() => scrollToSection(item.href)}
                  className="flex w-full items-center justify-between rounded-xl px-4 py-3 text-left text-sm font-medium text-slate-400 transition-all duration-200 hover:bg-white/[0.04] hover:text-white"
                >
                  <span>{item.label}</span>

                  <svg
                    className="h-4 w-4 text-slate-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.8}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </button>
              ))}
            </div>

            <button
              onClick={() => scrollToSection('#contact')}
              className="mt-3 flex w-full items-center justify-center gap-2 rounded-xl bg-blue-500 px-4 py-3 text-sm font-semibold text-white transition-all duration-300 hover:bg-blue-400"
            >
              Let's Talk

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
                  d="M5 12h14M13 6l6 6-6 6"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;