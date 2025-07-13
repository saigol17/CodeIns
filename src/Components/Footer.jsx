import { FaLinkedin } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-gray-100 py-6 mt-12">
      <div className="max-w-7xl mx-auto px-4 text-center text-gray-600 text-sm space-y-3">
        <p>&copy; {new Date().getFullYear()} <span className="font-semibold">CodeInstincts</span>. All rights reserved.</p>
        
        <p className="flex justify-center items-center gap-2">
          Follow us on
          <a
            href="https://www.linkedin.com/company/codeinstincts"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:text-blue-800 flex items-center gap-1"
          >
            <FaLinkedin className="text-lg" />
            LinkedIn
          </a>
        </p>
      </div>
    </footer>
  );
}