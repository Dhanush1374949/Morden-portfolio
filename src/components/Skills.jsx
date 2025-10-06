export default function Skills() {
  const skills = [
    { name: "UI Design", level: 90 },
    { name: "UX Design", level: 60 },
    { name: "React.js", level: 85 },
    { name: "Node.js", level: 85 },
    { name: "Tailwind CSS", level: 80 },
    { name: "Bootstrap 5", level: 75 },
    { name: "SQL", level: 70 },
    { name: "MongoDB", level: 65 },
    { name: "Python", level: 85 },
    { name: "JS ES6", level: 90 },
    { name: "Git & GitHub", level: 80 },
    { name: "Photoshop", level: 70 },
    { name: "Illustrator", level: 65 },
    { name: "Miro", level: 80 },
    { name: "Figma", level: 90 },
    { name: "Framer", level: 75 },
  ];

  return (
    <section id="skills" className="py-16 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-10 text-gray-900 dark:text-gray-100">My Skills</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <div key={index} className="p-4 bg-white dark:bg-gray-900 rounded-xl shadow hover:shadow-lg transition">
              <h3 className="text-lg font-semibold mb-2 text-gray-800 dark:text-gray-200">{skill.name}</h3>
              <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3">
                <div
                  className="bg-purple-500 h-3 rounded-full transition-all duration-1000"
                  style={{ width: `${skill.level}%` }}
                ></div>
              </div>
              <p className="mt-2 text-right text-sm text-gray-600 dark:text-gray-400">{skill.level}%</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
