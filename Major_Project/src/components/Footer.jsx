import {
  Mail,
  Phone,
  Send,
} from "lucide-react";

function Footer() {
  return (
    <footer className="bg-gray-950 text-gray-300 pt-12 pb-6 mt-16">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-10">

        {/* Company Info */}
        <div className="md:col-span-2">
          <h1 className="text-2xl font-bold text-white mb-4">
            CS Academy
          </h1>

          <p className="text-gray-400 leading-7 mb-6 max-w-md">
            Empowering developers with practical CS education,
            coding practice, and career-ready skills.
          </p>

          <div className="space-y-3 text-sm">
            <div className="flex items-center gap-3">
              <Mail size={16} className="text-blue-500" />
              <p>support@csacademy.com</p>
            </div>

            <div className="flex items-center gap-3">
              <Phone size={16} className="text-blue-500" />
              <p>+1 (234) 567-890</p>
            </div>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h2 className="text-lg font-semibold text-white mb-4">
            Quick Links
          </h2>

          <ul className="space-y-2 text-sm">
            <li className="hover:text-white cursor-pointer transition">
              Quizzes
            </li>

            <li className="hover:text-white cursor-pointer transition">
              Coding Sheets
            </li>

            <li className="hover:text-white cursor-pointer transition">
              ATS Checker
            </li>

            <li className="hover:text-white cursor-pointer transition">
              Analytics
            </li>
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h2 className="text-lg font-semibold text-white mb-4">
            Stay Updated
          </h2>

          <p className="text-gray-400 text-sm mb-4">
            Get latest updates and new features.
          </p>

          <div className="flex items-center bg-gray-900 border border-gray-700 rounded-xl overflow-hidden">
            <input
              type="email"
              placeholder="Enter email"
              className="bg-transparent px-4 py-3 w-full outline-none text-sm"
            />

            <button className="bg-blue-600 hover:bg-blue-700 px-4 py-3 transition">
              <Send size={16} className="text-white" />
            </button>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="border-t border-gray-800 mt-10 pt-5 text-center text-gray-500 text-sm">
        © 2026 CS Academy. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;