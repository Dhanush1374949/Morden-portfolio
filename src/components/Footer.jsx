export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-purple-200 to-white dark:from-gray-900 dark:to-gray-800 p-1 shadow-inner">
      <div className=" text-center text-gray-700 dark:text-gray-300">
        <p >© {new Date().getFullYear()} Your Name. All rights reserved.</p>
       
      </div>
    </footer>
  );
}
