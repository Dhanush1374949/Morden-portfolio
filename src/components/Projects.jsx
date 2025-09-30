import { FaExternalLinkAlt } from "react-icons/fa";

export default function Projects() {
  const projects = [
    { title: "E-commerce Platform", desc: "Built a responsive e-commerce platform for Laura Cosmetics with elegant UI, intuitive navigation, and secure checkout for beauty and skincare products.", link: "https://www.behance.net/gallery/230664095/Laura-Skin-Care-Product" },
    { title: "Fitness App", desc: "Fittuf is a modern, responsive fitness web app built entirely with React. It helps users explore workouts, track fitness goals, and stay motivated with an intuitive interface and smooth interactions.", link: "https://github.com/Dhanush1374949/FITTUFapp" },
    { title: "Portfolio Website", desc: "A modern, responsive portfolio website built with React, Vite, and Tailwind CSS. It highlights my skills in frontend development and UI/UX design with smooth animations, interactive components, and a clean, user-friendly interface across all devices.", link: "#" },
    { title: "Search App", desc: "Kita Search App is a fast, responsive web app built with Vite , React , and Tailwind CSS . Search online and view results with text, images, and links. Features real-time search , responsive design , and RapidAPI for state management", link: "https://github.com/Dhanush1374949/Kita-Search" },
  ];

  return (
    <section id="projects" className="py-16 bg-gray-50 dark:bg-gray-800">
      <h2 className="text-3xl font-bold text-center mb-10">Projects</h2>
      <div className="grid gap-8 md:grid-cols-2 max-w-5xl mx-auto px-4">
        {projects.map((p, i) => (
          <div key={i} className="p-6 bg-white dark:bg-gray-900 rounded-2xl shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-2">{p.title}</h3>
            <p className="text-gray-600 dark:text-gray-400 mb-4">{p.desc}</p>
            <a href={p.link} target="_blank" className="text-primary flex items-center gap-2">
              Visit <FaExternalLinkAlt />
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
