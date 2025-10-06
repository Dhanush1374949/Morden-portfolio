export default function Footer() {
  return (
    <footer className="bg-purple-200 dark:bg-gray-950  p-1 shadow-inner">
      <div className=" text-center text-gray-700 dark:text-gray-300">
        <p >© {new Date().getFullYear()} Your Name. All rights reserved.</p>
       
      </div>
    </footer>
  );
}
