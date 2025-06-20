import React from 'react';
import conferenceImage from '../assets/pictures/conference1.jpg';


const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "Book Store Management System",
      description: "A modern book store management system built with React and Node.js. Features include user authentication, shopping cart, and admin dashboard.",
      image: "https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=600",
      technologies: ["React", "Node.js", "MongoDB", ],
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      id: 2,
      title: "Task Management App", 
      description: "A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.",
      image: "https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=600",
      technologies: ["React", "Firebase", "Material-UI", "Socket.io"],
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      id: 3,
      title: "Conference Management System",
      description: "A comprehensive conference management system for organizing University conferences day, managing registrations, and facilitating communication between attendees and organizers.",
      image: conferenceImage,
      technologies: ["HTML", "CSS", "MySQL"],
      liveUrl: "#",
      githubUrl: "https://github.com/sashith06/Conference-Management-System.git"
    }

  ];

  return (
    <section id="projects" className="section-padding bg-white">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Featured Projects
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Here are some of my recent projects that showcase my skills in frontend development 
            and problem-solving.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div 
              key={project.id} 
              className="card p-6 animate-slide-up hover:scale-105 transition-transform duration-300"
            >
              {/* Project Image */}
              <div className="mb-4 overflow-hidden rounded-lg">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover hover:scale-110 transition-transform duration-300"
                />
              </div>

              {/* Project Info */}
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                {project.title}
              </h3>
              <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                {project.description}
              </p>

              {/* Technologies */}
              <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies.map((tech) => (
                  <span 
                    key={tech}
                    className="px-3 py-1 bg-primary-100 text-primary-600 rounded-full text-xs font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Project Links */}
              <div className="flex gap-3">
                <a
                  href={project.liveUrl}
                  className="flex-1 bg-primary-600 hover:bg-primary-700 text-white text-center py-2 px-4 rounded-lg text-sm font-medium transition-colors duration-200"
                >
                  Live Demo
                </a>
                <a
                  href={project.githubUrl}
                  className="flex-1 bg-gray-200 hover:bg-gray-300 text-gray-700 text-center py-2 px-4 rounded-lg text-sm font-medium transition-colors duration-200"
                >
                  GitHub
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* View More Button */}
        <div className="text-center mt-12 animate-slide-up">
          <button className="btn-secondary">
            View All Projects
          </button>
        </div>
      </div>
    </section>
  );
};

export default Projects;