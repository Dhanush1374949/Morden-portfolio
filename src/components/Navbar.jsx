import { useState } from "react";
import { FaBars, FaTimes, FaMoon, FaSun } from "react-icons/fa";

export default function Navbar({ darkMode, setDarkMode }) {
  const [open, setOpen] = useState(false);

  const links = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Resume", href: "#resume" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full  bg-white/70 dark:bg-gray-900/70 backdrop-blur-md shadow-md">
      <div className="max-w-full md:mx-15 mx-5 flex items-center justify-between  py-3">
        <h1 className="text-2xl font-bold text-primary">Dhanush</h1>

   
        <ul className="hidden md:flex gap-6 font-bold text-lg">
          {links.map((link) => (
            <li key={link.name}>
              <a href={link.href} className="hover:text-primary transition">{link.name}</a>
            </li>
          ))}
        </ul>

     
        <button onClick={() => setDarkMode(!darkMode)} className="ml-4">
          {darkMode ? <FaSun size={20} /> : <FaMoon size={20} />}
        </button>

     
        <button className="md:hidden ml-4" onClick={() => setOpen(!open)}>
          {open ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>
      </div>

    
      {open && (
        <ul className="md:hidden bg-white dark:bg-gray-900 px-6 py-4 space-y-4">
          {links.map((link) => (
            <li key={link.name}>
              <a href={link.href} className="block hover:text-primary transition" onClick={() => setOpen(false)}>{link.name}</a>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
}
