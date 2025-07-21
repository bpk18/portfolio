import { Linkedin, Github, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-slate-800 text-white py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h3 className="text-2xl font-bold mb-4">BHAVISH PK </h3>
          <p className="text-gray-300 mb-6">Building the web, one line of code at a time.</p>
          <div className="flex justify-center space-x-6 mb-8">
            <a
              href="https://www.linkedin.com/in/bhavish-pk-b83590257"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-white transition-colors duration-300"
            >
              <Linkedin size={24} />
            </a>
            <a
              href="https://github.com/bpk18"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-white transition-colors duration-300"
            >
              <Github size={24} />
            </a>
            <a
              href="mailto:bhavishpk1805@gmail.com"
              className="text-gray-300 hover:text-white transition-colors duration-300"
            >
              <Mail size={24} />
            </a>
          </div>
          <div className="border-t border-gray-600 pt-8">
            <p className="text-gray-400">© 2025 Bhavish P K All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
