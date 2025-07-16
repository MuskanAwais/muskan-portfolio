import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-base-200 px-6 py-12 text-center text-base-content border-t border-base-300">
      <div className="max-w-4xl mx-auto">
        {/* Logo / Name */}
        <h2 className="text-2xl font-bold mb-2">Muskan Awais</h2>
        <p className="text-sm">Full Stack Developer | MERN | Python | AI Enthusiast</p>

        {/* Social Icons */}
        <div className="flex justify-center gap-6 mt-4">
          <a
            href="https://www.linkedin.com/in/muskanawais02"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-outline btn-square"
          >
            <FaLinkedin className="h-6 w-6" />
          </a>
          <a
            href="https://github.com/MuskanAwais"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-outline btn-square"
          >
            <FaGithub className="h-6 w-6" />
          </a>
          <a
            href="mailto:muskanawais02@gmail.com"
            className="btn btn-outline btn-square"
          >
            <FaEnvelope className="h-6 w-6" />
          </a>
        </div>

        {/* Quick Links */}
        <ul className="flex justify-center flex-wrap gap-4 mt-6 text-sm">
          <li><a href="#about" className="hover:underline">About</a></li>
          <li><a href="#skills" className="hover:underline">Skills</a></li>
          <li><a href="#projects" className="hover:underline">Projects</a></li>
          <li><a href="#contact" className="hover:underline">Contact</a></li>
        </ul>

        {/* Resume Button */}
        <div className="mt-6">
          <a
            href="/Muskan Awais.pdf"
            download
            className="btn btn-primary btn-sm"
          >
            Download Resume
          </a>
        </div>

        {/* Personal Message */}
        <p className="mt-6 text-sm italic text-gray-500">
          Built with ☕, late-night coding, and with curiosity ✨
        </p>

        {/* Footer Note */}
        <p className="mt-2 text-xs">© {new Date().getFullYear()} Muskan Awais. All rights reserved.</p>
      </div>
    </footer>
  );
}
