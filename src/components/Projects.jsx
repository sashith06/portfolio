import React, { useState } from 'react';
import conferenceImage from '../assets/pictures/conference1.jpg';
import lamsImage from '../assets/pictures/LAMS.jpg';


const Projects = () => {
  const [showAll, setShowAll] = useState(false);

  const projects = [
    {
      id: 1,
      title: "Land Acquisition Management System",
      description: "A web-based Land Acquisition Management System built with React and Node.js. Features include user authentication, real-time dashboards, Interest calculation for delayed compensation, and role-based access for staff and administrators.",
      image: lamsImage,
      technologies: ["React", "Node.js", "Express.js", "MySQL",],
      liveUrl: "https://land-aquisition-management-system.vercel.app/",
      githubUrl: "https://github.com/sashith06/Land_Aquisition_Management_System"
    },
    {
      id: 2,
      title: "Event-Reminder App",
      description: "A Full-Featured Event Reminder Mobile App with Smart Notifications, SQLite Database, Category Management, and Cross-Platform React Native Development",
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      technologies: ["React Native", "Expo", "SQLite", "Expo Notifications", "JavaScript", "Context API"],
      liveUrl: "https://expo.dev/accounts/sashith_thushan/projects/event-reminder-app/builds/3142751a-203f-4af9-ae5c-d1d37c8c9f64",
      githubUrl: "https://github.com/sashith06/event-reminder-app"
    },
    {
      id: 3,
      title: "Task Management App",
      description: "A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.",
      image: "https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=600",
      technologies: ["React", "Material-UI",],
      liveUrl: "#",
      githubUrl: "https://github.com/sashith06/task-manager"
    },
    {
      id: 4,
      title: "Conference Management System",
      description: "A comprehensive conference management system for organizing University conferences day, managing registrations, and facilitating communication between attendees and organizers.",
      image: conferenceImage,
      technologies: ["HTML", "CSS", "MySQL"],
      liveUrl: "#",
      githubUrl: "https://github.com/sashith06/Conference-Management-System.git"
    },
    {
      id: 5,
      title: "House Price Predictor",
      description: "A machine learning model that predicts house prices based on various features such as location, size, and amenities using Python and Scikit-learn.",
      image: "https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&w=600",
      technologies: ["Python", "Scikit-learn", "Pandas", "NumPy"],
      liveUrl: "#",
      githubUrl: "https://github.com/sashith06/house-price-prediction"

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
          {(showAll ? projects : projects.slice(0, 3)).map((project) => (
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
          <button
            className="btn-secondary"
            onClick={() => setShowAll(!showAll)}
          >
            {showAll ? 'Show Less' : 'View All Projects'}
          </button>
        </div>
      </div>
    </section>
  );
};

export default Projects;