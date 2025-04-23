// src/components/Footer.jsx
const Footer = () => {
    return (
      <footer className="w-full bg-gray-900 text-white py-6 mt-10">
        <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-4">
          {/* Left: Copyright */}
          <p className="text-sm text-center md:text-left">
            &copy; {new Date().getFullYear()} Task Manager. All rights reserved.
          </p>
  
          {/* Center: Contact Info */}
          <div className="text-center">
            <p className="text-sm">📧 taskmanager@gmail.com</p>
            <p className="text-sm">📞 +91 9876543210</p>
          </div>
  
          {/* Right: Social Links */}
          <div className="flex gap-4 items-center">
            <a
              href="https://www.linkedin.com/in/yourlinkedinprofile"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm hover:text-blue-400 transition"
            >
              LinkedIn
            </a>
            <a href="/about" className="text-sm hover:text-gray-300 transition">
              About
            </a>
            <a href="/privacy" className="text-sm hover:text-gray-300 transition">
              Privacy
            </a>
          </div>
        </div>
      </footer>
    );
  };
  
  export default Footer;
  