const Skills = () => {
  const skillCategories = [
    {
      category: "Frontend",
      skills: [
        { name: "React", level: 50, icon: "⚛️" },
        { name: "JavaScript", level: 50, icon: "🟨" },
        { name: "HTML/CSS", level: 60, icon: "🌐" },
        { name: "Tailwind CSS", level: 50, icon: "🎨" }
      ]
    },
    {
      category: "Backend",
      skills: [
        { name: "Node.js", level: 50, icon: "🟢" },
        { name: "Express.js", level: 50, icon: "⚡" },
        { name: "MongoDB", level: 50, icon: "🍃" },
        { name: "REST APIs", level: 40, icon: "🔗" }
      ]
    },
    {
      category: "Tools & Others",
      skills: [
        { name: "Git", level: 50, icon: "📋" },
        { name: "Webpack", level: 50, icon: "📦" },
        { name: "Figma", level: 70, icon: "🎨" },
        { name: "VS Code", level: 80, icon: "💻" }
      ]
    }
  ];

  return (
    <section id="skills" className="section-padding bg-gray-50">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Skills & Technologies
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Here are the technologies and tools I work with to bring ideas to life.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category) => (
            <div key={category.category} className="card p-6 animate-slide-up">
              <h3 className="text-xl font-semibold text-gray-800 mb-6 text-center">
                {category.category}
              </h3>
              <div className="space-y-4">
                {category.skills.map((skill) => (
                  <div key={skill.name} className="skill-item">
                    {/* Skill Name and Icon */}
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-2">
                        <span className="text-lg">{skill.icon}</span>
                        <span className="font-medium text-gray-700">{skill.name}</span>
                      </div>
                      <span className="text-sm text-gray-500">{skill.level}%</span>
                    </div>
                    
                    {/* Progress Bar */}
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div 
                        className="bg-gradient-to-r from-primary-500 to-primary-600 h-2 rounded-full transition-all duration-1000 ease-out"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Additional Skills Tags */}
        <div className="mt-16 text-center animate-slide-up">
          <h3 className="text-xl font-semibold text-gray-800 mb-6">
            Additional Technologies
          </h3>
          <div className="flex flex-wrap justify-center gap-3">
            {["jira", "TypeScript", "Next.js", "Firebase", "Python", "Bootstrap", "MySQL", "Power BI"].map((tech) => (
              <span 
                key={tech}
                className="px-4 py-2 bg-white text-gray-700 rounded-full shadow-md hover:shadow-lg transition-shadow duration-200 border border-gray-200"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;