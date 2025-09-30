export default function Contact() {
  return (
    <section id="contact" className="py-16 max-w-5xl mx-auto px-4 text-center">
      <h2 className="text-3xl font-bold mb-6">Contact Me</h2>
      <form className="max-w-md mx-auto space-y-4">
        <input type="text" placeholder="Your Name" className="w-full p-3 rounded-md border dark:bg-gray-900 dark:text-white"/>
        <input type="email" placeholder="Your Email" className="w-full p-3 rounded-md border dark:bg-gray-900 dark:text-white"/>
        <textarea placeholder="Your Message" className="w-full p-3 rounded-md border dark:bg-gray-900 dark:text-white"></textarea>
        <button className="bg-primary text-white px-6 py-3 rounded-full shadow hover:opacity-90 transition">Send</button>
      </form>
    </section>
  );
}
