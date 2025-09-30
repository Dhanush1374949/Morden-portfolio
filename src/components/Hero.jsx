export default function Hero() {
  return (
    <section id="home" className=" hero min-h-screen flex flex-col items-center justify-center text-center px-4">
      <h2 className="text-4xl md:text-6xl font-bold mb-4">
        I’m Dhanush
      </h2><h2 className="  text-2xl md:text-3xl font-bold mb-4 text-primary">React Developer & UI/UX Desiger</h2>
      <p className="text-lg md:text-xl max-w-2xl text-gray-700 dark:text-gray-300">
      Crafting seamless digital experiences with code & creativity
      </p>
      <a href="#projects" className="mt-6 bg-primary text-white px-6 py-3 rounded-full shadow hover:opacity-90 transition">View My Work</a>
    </section>
  );
}
