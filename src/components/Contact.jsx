import { useState } from 'react';
import linkedinIcon from '../assets/pictures/linkedin.png';
import githubIcon from '../assets/pictures/github.png';
import facebookIcon from '../assets/pictures/facebook.png';
import instagramIcon from '../assets/pictures/instagram.png';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Temporary submission simulation
    setTimeout(() => {
      setSubmitStatus('success');
      setIsSubmitting(false);
      setFormData({
        name: '',
        email: '',
        message: '',
      });

      setTimeout(() => {
        setSubmitStatus('');
      }, 4000);
    }, 1000);
  };

  const socialLinks = [
    {
      name: 'LinkedIn',
      icon: linkedinIcon,
      url: 'https://www.linkedin.com/in/sashith-thushan-257459306',
    },
    {
      name: 'GitHub',
      icon: githubIcon,
      url: 'https://github.com/sashith06',
    },
    {
      name: 'Facebook',
      icon: facebookIcon,
      url: '#',
    },
    {
      name: 'Instagram',
      icon: instagramIcon,
      url: '#',
    },
  ];

  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-[#050816] py-24 text-white sm:py-28 lg:py-32"
    >
      {/* =========================
          BACKGROUND EFFECTS
      ========================== */}

      <div className="pointer-events-none absolute -left-40 top-20 h-96 w-96 rounded-full bg-blue-600/10 blur-3xl" />

      <div className="pointer-events-none absolute -right-40 bottom-0 h-96 w-96 rounded-full bg-cyan-600/10 blur-3xl" />

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
              Contact
            </span>
          </div>

          <h2 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
            Let's build something
            <span className="block bg-gradient-to-r from-blue-400 via-cyan-300 to-indigo-400 bg-clip-text text-transparent">
              together.
            </span>
          </h2>

          <p className="mt-5 max-w-2xl text-base leading-7 text-slate-400 sm:text-lg">
            Have an idea, project, internship opportunity, or just want to
            connect? I'd be happy to hear from you.
          </p>
        </div>

        {/* =========================
            CONTACT CONTENT
        ========================== */}

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-5">

          {/* =========================
              LEFT SIDE
          ========================== */}

          <div className="lg:col-span-2">

            <div className="relative h-full overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] p-7 backdrop-blur-sm sm:p-8">

              {/* Glow */}
              <div className="pointer-events-none absolute -right-20 -top-20 h-48 w-48 rounded-full bg-blue-500/10 blur-3xl" />

              <div className="relative">

                <div className="mb-8">

                  <span className="mb-3 block text-xs font-semibold uppercase tracking-[0.2em] text-blue-400">
                    Get in touch
                  </span>

                  <h3 className="text-2xl font-semibold text-white">
                    Let's Connect
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-slate-400">
                    I'm currently open to software engineering internships,
                    full-stack development opportunities, and interesting
                    projects where I can learn and contribute.
                  </p>
                </div>

                {/* =========================
                    CONTACT DETAILS
                ========================== */}

                <div className="space-y-4">

                  {/* Email */}
                  <a
                    href="mailto:sashiththushan110@gmail.com"
                    className="group flex items-center gap-4 rounded-xl border border-white/5 bg-white/[0.02] p-4 transition-all duration-300 hover:border-blue-400/20 hover:bg-blue-500/[0.05]"
                  >
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-blue-500/10 text-blue-400 transition-all duration-300 group-hover:bg-blue-500/20">
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
                          d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                        />
                      </svg>
                    </div>

                    <div className="min-w-0">
                      <p className="text-xs uppercase tracking-wider text-slate-500">
                        Email
                      </p>

                      <p className="mt-1 truncate text-sm font-medium text-slate-200 transition-colors group-hover:text-blue-300">
                        sashiththushan110@gmail.com
                      </p>
                    </div>
                  </a>

                  {/* Phone */}
                  <a
                    href="tel:+94760169369"
                    className="group flex items-center gap-4 rounded-xl border border-white/5 bg-white/[0.02] p-4 transition-all duration-300 hover:border-blue-400/20 hover:bg-blue-500/[0.05]"
                  >
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-blue-500/10 text-blue-400 transition-all duration-300 group-hover:bg-blue-500/20">
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
                          d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                        />
                      </svg>
                    </div>

                    <div>
                      <p className="text-xs uppercase tracking-wider text-slate-500">
                        Phone
                      </p>

                      <p className="mt-1 text-sm font-medium text-slate-200 transition-colors group-hover:text-blue-300">
                        076 016 9369
                      </p>
                    </div>
                  </a>

                  {/* Location */}
                  <div className="flex items-center gap-4 rounded-xl border border-white/5 bg-white/[0.02] p-4">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-blue-500/10 text-blue-400">
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
                          d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                        />

                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={1.8}
                          d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                      </svg>
                    </div>

                    <div>
                      <p className="text-xs uppercase tracking-wider text-slate-500">
                        Location
                      </p>

                      <p className="mt-1 text-sm font-medium text-slate-200">
                        Homagama, Sri Lanka
                      </p>
                    </div>
                  </div>

                </div>

                {/* =========================
                    SOCIAL LINKS
                ========================== */}

                <div className="mt-8 border-t border-white/10 pt-7">

                  <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
                    Find me online
                  </p>

                  <div className="flex gap-3">

                    {socialLinks.map((social) => (
                      <a
                        key={social.name}
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/[0.03] transition-all duration-300 hover:-translate-y-1 hover:border-blue-400/30 hover:bg-blue-500/10"
                        title={social.name}
                      >
                        <img
                          src={social.icon}
                          alt={social.name}
                          className="h-5 w-5 opacity-60 grayscale transition-all duration-300 group-hover:opacity-100 group-hover:grayscale-0"
                        />
                      </a>
                    ))}

                  </div>
                </div>

                {/* Availability */}
                <div className="mt-8 flex items-center gap-3 rounded-xl border border-green-400/10 bg-green-400/[0.03] px-4 py-3">
                  <span className="h-2.5 w-2.5 animate-pulse rounded-full bg-green-400" />

                  <p className="text-xs text-slate-400">
                    Open to new opportunities
                  </p>
                </div>

              </div>
            </div>
          </div>

          {/* =========================
              RIGHT SIDE - FORM
          ========================== */}

          <div className="lg:col-span-3">

            <form
              onSubmit={handleSubmit}
              className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] p-7 backdrop-blur-sm sm:p-8"
            >

              {/* Form glow */}
              <div className="pointer-events-none absolute -bottom-32 -right-20 h-64 w-64 rounded-full bg-blue-500/10 blur-3xl" />

              <div className="relative">

                <div className="mb-7">
                  <h3 className="text-2xl font-semibold text-white">
                    Send a message
                  </h3>

                  <p className="mt-2 text-sm text-slate-500">
                    Fill out the form and I'll get back to you as soon as I can.
                  </p>
                </div>

                {/* Success Message */}
                {submitStatus === 'success' && (
                  <div className="mb-6 flex items-start gap-3 rounded-xl border border-green-400/20 bg-green-400/10 p-4 text-green-300">
                    <svg
                      className="mt-0.5 h-5 w-5 shrink-0"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>

                    <div>
                      <p className="text-sm font-semibold">
                        Message sent successfully!
                      </p>

                      <p className="mt-1 text-xs text-green-400/70">
                        Thank you for reaching out. I'll get back to you soon.
                      </p>
                    </div>
                  </div>
                )}

                <div className="space-y-5">

                  {/* Name + Email */}
                  <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">

                    {/* Name */}
                    <div>
                      <label
                        htmlFor="name"
                        className="mb-2 block text-xs font-semibold uppercase tracking-wider text-slate-400"
                      >
                        Name
                      </label>

                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        placeholder="Your name"
                        className="w-full rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3.5 text-sm text-white placeholder-slate-600 outline-none transition-all duration-300 focus:border-blue-400/50 focus:bg-blue-500/[0.03] focus:ring-1 focus:ring-blue-400/30"
                      />
                    </div>

                    {/* Email */}
                    <div>
                      <label
                        htmlFor="email"
                        className="mb-2 block text-xs font-semibold uppercase tracking-wider text-slate-400"
                      >
                        Email
                      </label>

                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        placeholder="you@example.com"
                        className="w-full rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3.5 text-sm text-white placeholder-slate-600 outline-none transition-all duration-300 focus:border-blue-400/50 focus:bg-blue-500/[0.03] focus:ring-1 focus:ring-blue-400/30"
                      />
                    </div>

                  </div>

                  {/* Message */}
                  <div>
                    <label
                      htmlFor="message"
                      className="mb-2 block text-xs font-semibold uppercase tracking-wider text-slate-400"
                    >
                      Message
                    </label>

                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={7}
                      placeholder="Tell me about your project, opportunity, or idea..."
                      className="w-full resize-none rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3.5 text-sm text-white placeholder-slate-600 outline-none transition-all duration-300 focus:border-blue-400/50 focus:bg-blue-500/[0.03] focus:ring-1 focus:ring-blue-400/30"
                    />
                  </div>

                  {/* Submit */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`group flex w-full items-center justify-center gap-3 rounded-xl px-6 py-3.5 text-sm font-semibold transition-all duration-300 ${isSubmitting
                      ? 'cursor-not-allowed bg-slate-700 text-slate-400'
                      : 'bg-blue-500 text-white hover:-translate-y-0.5 hover:bg-blue-400 hover:shadow-xl hover:shadow-blue-500/20'
                      }`}
                  >
                    {isSubmitting ? (
                      <>
                        <svg
                          className="h-4 w-4 animate-spin"
                          fill="none"
                          viewBox="0 0 24 24"
                        >
                          <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="4"
                          />

                          <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
                          />
                        </svg>

                        Sending...
                      </>
                    ) : (
                      <>
                        Send Message

                        <svg
                          className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
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
                      </>
                    )}
                  </button>

                </div>

                <p className="mt-5 text-center text-[11px] text-slate-600">
                  I usually respond within 24–48 hours.
                </p>

              </div>
            </form>
          </div>

        </div>

        {/* =========================
            BOTTOM CTA
        ========================== */}

        <div className="mt-20 text-center">

          <p className="text-sm text-slate-600">
            Have an opportunity in mind?
          </p>

          <a
            href="mailto:sashiththushan110@gmail.com"
            className="mt-2 inline-block text-lg font-medium text-blue-400 transition-colors duration-300 hover:text-blue-300"
          >
            Let's talk →
          </a>

        </div>

      </div>
    </section>
  );
};

export default Contact;