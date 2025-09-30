import resume from "/src/assets/myresume.jpg";



export default function Resume() {
  return (
    <section id="resume" className=" py-16 max-w-5xl mx-auto px-4 text-center">
      <h2 className="text-3xl font-bold mb-6">Resume</h2>
<div className="flex justify-center items-center m-15">
      <img src={resume} alt="My Resume" className="resume rounded-lg shadow-lg" />
    </div>      <p className="text-lg mb-6">Download my resume to learn more about my skills.</p>
      <button
        onClick={() => window.print()}
        className="bg-primary text-white px-6 py-3 rounded-full shadow hover:opacity-90 transition"
      >
        Print / Save Resume
      </button>
    </section>
  );
}
