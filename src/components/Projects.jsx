import React, { useState } from 'react';
import conferenceImage from '../assets/pictures/conference1.jpg';
import lamsImage from '../assets/pictures/LAMS.jpg';

const Projects = () => {
  const [showAll, setShowAll] = useState(false);

  const projects = [
    {
      id: 1,
      title: 'Land Acquisition Management System',
      description:
        'A web-based Land Acquisition Management System built with React and Node.js. Features include user authentication, real-time dashboards, interest calculation for delayed compensation, and role-based access for staff and administrators.',
      image: lamsImage,
      technologies: ['React', 'Node.js', 'Express.js', 'MySQL'],
      liveUrl: 'https://land-aquisition-management-system.vercel.app/',
      githubUrl:
        'https://github.com/sashith06/Land_Aquisition_Management_System',
      featured: true,
    },
    {
      id: 2,
      title: 'Event Reminder App',
      description:
        'A full-featured event reminder mobile application with smart notifications, SQLite database, category management, and cross-platform React Native development.',
      image:
        'https://images.unsplash.com/photo-1611224923853-80b023f02d71?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
      technologies: [
        'React Native',
        'Expo',
        'SQLite',
        'Notifications',
        'JavaScript',
        'Context API',
      ],
      liveUrl:
        'https://expo.dev/accounts/sashith_thushan/projects/event-reminder-app/builds/3142751a-203f-4af9-ae5c-d1d37c8c9f64',
      githubUrl: 'https://github.com/sashith06/event-reminder-app',
    },
    {
      id: 3,
      title: 'Task Management App',
      description:
        'A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.',
      image:
        'https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1200',
      technologies: ['React', 'Material UI'],
      liveUrl: '#',
      githubUrl: 'https://github.com/sashith06/task-manager',
    },
    {
      id: 4,
      title: 'Conference Management System',
      description:
        'A comprehensive conference management system for organizing university conference events, managing registrations, and facilitating communication between attendees and organizers.',
      image: conferenceImage,
      technologies: ['HTML', 'CSS', 'MySQL'],
      liveUrl: '#',
      githubUrl:
        'https://github.com/sashith06/Conference-Management-System.git',
    },
    {
      id: 5,
      title: 'House Price Predictor',
      description:
        'A machine learning model that predicts house prices based on features such as location, size, and amenities using Python and Scikit-learn.',
      image:
        'https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&w=1200',
      technologies: ['Python', 'Scikit-learn', 'Pandas', 'NumPy'],
      liveUrl: '#',
      githubUrl: 'https://github.com/sashith06/house-price-prediction',
    },
  ];

  const displayedProjects = showAll ? projects : projects.slice(0, 3);

  return (
    <section
      id="projects"
      className="relative overflow-hidden bg-[#050816] py-24 text-white sm:py-28 lg:py-32"
    >
      {/* =========================
          BACKGROUND EFFECTS
      ========================== */}

      <div className="pointer-events-none absolute -left-40 top-40 h-96 w-96 rounded-full bg-blue-600/10 blur-3xl" />

      <div className="pointer-events-none absolute -right-40 bottom-20 h-96 w-96 rounded-full bg-indigo-600/10 blur-3xl" />

      {/* Subtle grid */}
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

        <div className="mb-14 flex flex-col justify-between gap-6 lg:mb-16 lg:flex-row lg:items-end">

          <div className="max-w-3xl">

            <div className="mb-4 flex items-center gap-3">
              <span className="h-px w-10 bg-blue-500" />

              <span className="text-sm font-semibold uppercase tracking-[0.25em] text-blue-400">
                My Work
              </span>
            </div>

            <h2 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
              Things I've
              <span className="block bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
                built.
              </span>
            </h2>

            <p className="mt-5 max-w-2xl text-base leading-7 text-slate-400 sm:text-lg">
              A selection of projects where I turned ideas into practical
              applications using modern technologies.
            </p>
          </div>

          {/* Project count */}
          <div className="hidden lg:block">
            <p className="text-right text-5xl font-bold text-white/10">
              0{projects.length}
            </p>
            <p className="text-right text-xs uppercase tracking-[0.2em] text-slate-600">
              Projects
            </p>
          </div>
        </div>

        {/* =========================
            PROJECTS GRID
        ========================== */}

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">

          {displayedProjects.map((project, index) => (
            <article
              key={project.id}
              className={`group relative flex flex-col overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-sm transition-all duration-500 hover:-translate-y-2 hover:border-blue-400/30 hover:bg-white/[0.05] hover:shadow-2xl hover:shadow-blue-950/30 ${project.featured && index === 0
                ? 'md:col-span-2 lg:col-span-2'
                : ''
                }`}
            >

              {/* =========================
                  IMAGE
              ========================== */}

              <div
                className={`relative overflow-hidden ${project.featured && index === 0
                  ? 'h-64 sm:h-80'
                  : 'h-56'
                  }`}
              >
                <img
                  src={project.image}
                  alt={project.title}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />

                {/* Dark image overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#050816] via-black/20 to-transparent opacity-80" />

                {/* Blue hover overlay */}
                <div className="absolute inset-0 bg-blue-500/0 transition-all duration-500 group-hover:bg-blue-500/5" />

                {/* Project number */}
                <div className="absolute left-5 top-5 flex h-10 w-10 items-center justify-center rounded-xl border border-white/15 bg-black/40 font-mono text-xs font-semibold text-white backdrop-blur-md">
                  {String(project.id).padStart(2, '0')}
                </div>

                {/* Featured badge */}
                {project.featured && index === 0 && (
                  <div className="absolute right-5 top-5 rounded-full border border-blue-400/20 bg-blue-500/20 px-3 py-1.5 text-xs font-semibold text-blue-200 backdrop-blur-md">
                    Featured Project
                  </div>
                )}

                {/* Image bottom title for featured project */}
                {project.featured && index === 0 && (
                  <div className="absolute bottom-5 left-6 right-6">
                    <p className="text-xs font-medium uppercase tracking-[0.2em] text-blue-300">
                      Full Stack Application
                    </p>
                  </div>
                )}
              </div>

              {/* =========================
                  CONTENT
              ========================== */}

              <div className="flex flex-1 flex-col p-6">

                <h3 className="text-xl font-semibold tracking-tight text-white transition-colors duration-300 group-hover:text-blue-300">
                  {project.title}
                </h3>

                <p className="mt-3 flex-1 text-sm leading-6 text-slate-400">
                  {project.description}
                </p>

                {/* =========================
                    TECHNOLOGIES
                ========================== */}

                <div className="mt-5 flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-lg border border-blue-400/10 bg-blue-500/[0.06] px-2.5 py-1.5 text-[11px] font-medium text-blue-300 transition-colors duration-300 group-hover:border-blue-400/20"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* =========================
                    LINKS
                ========================== */}

                <div className="mt-6 flex gap-3 border-t border-white/10 pt-5">

                  {/* Live Demo */}
                  {project.liveUrl !== '#' ? (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group/link inline-flex flex-1 items-center justify-center gap-2 rounded-xl bg-blue-500 px-4 py-2.5 text-sm font-semibold text-white transition-all duration-300 hover:bg-blue-400 hover:shadow-lg hover:shadow-blue-500/20"
                    >
                      Live Demo

                      <svg
                        className="h-4 w-4 transition-transform duration-300 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={1.8}
                          d="M14 5h5v5M19 5l-9 9"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={1.8}
                          d="M19 13v5a1 1 0 01-1 1H6a1 1 0 01-1-1V6a1 1 0 011-1h5"
                        />
                      </svg>
                    </a>
                  ) : (
                    <span className="inline-flex flex-1 cursor-not-allowed items-center justify-center gap-2 rounded-xl bg-white/5 px-4 py-2.5 text-sm font-semibold text-slate-600">
                      Demo Unavailable
                    </span>
                  )}

                  {/* GitHub */}
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group/link inline-flex flex-1 items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/[0.03] px-4 py-2.5 text-sm font-semibold text-slate-300 transition-all duration-300 hover:border-white/20 hover:bg-white/[0.08] hover:text-white"
                  >
                    GitHub

                    <svg
                      className="h-4 w-4 transition-transform duration-300 group-hover/link:translate-x-0.5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 2C6.48 2 2 6.58 2 12.23c0 4.52 2.87 8.35 6.84 9.71.5.1.68-.22.68-.49v-1.72c-2.78.62-3.37-1.22-3.37-1.22-.46-1.19-1.11-1.5-1.11-1.5-.91-.64.07-.63.07-.63 1 .07 1.53 1.06 1.53 1.06.9 1.58 2.36 1.12 2.94.86.09-.67.35-1.12.64-1.38-2.22-.26-4.56-1.14-4.56-5.07 0-1.12.39-2.04 1.03-2.76-.1-.26-.45-1.31.1-2.73 0 0 .84-.28 2.75 1.05A9.17 9.17 0 0112 7.98c.85 0 1.7.12 2.5.36 1.91-1.33 2.75-1.05 2.75-1.05.55 1.42.2 2.47.1 2.73.64.72 1.03 1.64 1.03 2.76 0 3.94-2.34 4.81-4.57 5.06.36.32.68.94.68 1.9v2.82c0 .27.18.59.69.49A10.25 10.25 0 0022 12.23C22 6.58 17.52 2 12 2z" />
                    </svg>
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* =========================
            VIEW ALL BUTTON
        ========================== */}

        <div className="mt-14 flex justify-center">

          <button
            onClick={() => setShowAll(!showAll)}
            className="group inline-flex items-center gap-3 rounded-xl border border-white/10 bg-white/[0.03] px-6 py-3.5 text-sm font-semibold text-slate-300 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-blue-400/30 hover:bg-blue-500/10 hover:text-white"
          >
            {showAll ? 'Show Less' : 'View All Projects'}

            <svg
              className={`h-5 w-5 transition-transform duration-300 ${showAll
                ? 'rotate-180'
                : 'group-hover:translate-y-0.5'
                }`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.8}
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </button>

        </div>

        {/* Bottom statement */}
        <div className="mt-16 text-center">
          <p className="text-sm text-slate-600">
            More projects, experiments and ideas are always in progress.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Projects;