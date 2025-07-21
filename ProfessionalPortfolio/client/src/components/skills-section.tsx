export default function SkillsSection() {
  const skills = [
    {
      name: "Java",
      icon: "☕",
      description: "Backend Development",
      level: 100,
      color: "from-red-500 to-red-600",
      bgColor: "bg-red-500",
    },
    {
      name: "HTML5",
      icon: "🌐",
      description: "Markup & Structure",
      level: 100,
      color: "from-orange-500 to-orange-600",
      bgColor: "bg-orange-500",
    },
    {
      name: "CSS3",
      icon: "🎨",
      description: "Styling & Animation",
      level: 85,
      color: "from-blue-500 to-blue-600",
      bgColor: "bg-blue-500",
    },
    {
      name: "JavaScript",
      icon: "⚡",
      description: "Interactive Development",
      level: 80,
      color: "from-yellow-400 to-yellow-500",
      bgColor: "bg-yellow-400",
    },
  ];

  const additionalTechnologies = [
    "REST API",
    "Python",
    "MongoDB",
    "IoT",
    "MySQL",
    "Git",
  ];

  return (
    <section id="skills" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Skills & Technologies</h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Here are the core technologies and tools I work with to bring ideas to life
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {skills.map((skill) => (
            <div key={skill.name} className="text-center group">
              <div
                className={`bg-gradient-to-br ${skill.color} w-20 h-20 mx-auto rounded-2xl flex items-center justify-center mb-4 skill-icon`}
              >
                <span className="text-white text-3xl">{skill.icon}</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">{skill.name}</h3>
              <p className="text-gray-600">{skill.description}</p>
              <div className="mt-4">
                <div className="bg-gray-200 rounded-full h-2">
                  <div
                    className={`${skill.bgColor} h-2 rounded-full transition-all duration-1000`}
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
                <span className="text-sm text-gray-500 mt-1 block">
                  {skill.level === 100 ? "Expert" : "Advanced"}
                </span>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16">
          <h3 className="text-2xl font-semibold text-center mb-8">Additional Technologies</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {additionalTechnologies.map((tech) => (
              <span
                key={tech}
                className="bg-gray-100 px-4 py-2 rounded-full text-gray-700 hover:bg-primary hover:text-white transition-colors duration-300"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
