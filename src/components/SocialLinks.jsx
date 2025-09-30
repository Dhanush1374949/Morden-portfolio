import { FaGithub, FaLinkedin, FaBehance } from "react-icons/fa";

export default function SocialLinks() {
  return (
    <div className="fixed left-4 top-1/3 flex flex-col gap-4 text-2xl text-primary">
      <a href="https://github.com/Dhanush1374949" target="_blank"><FaGithub /></a>
      <a href="https://www.linkedin.com/in/dhanush-m-970136325/" target="_blank"><FaLinkedin /></a>
      <a href="https://www.behance.net/dhanushmurugan2596" target="_blank"><FaBehance /></a>
    </div>
  );
}
