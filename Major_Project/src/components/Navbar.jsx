// import { Link, useNavigate } from "react-router-dom";
// import { Home, BookOpen, Code2, BarChart3, FileText, LogIn, LogOut} from "lucide-react";

// function Navbar() {
//   const navigate = useNavigate();
//   const token = localStorage.getItem("token");

//   const handleLogout = () => {
//     localStorage.removeItem("token");
//     navigate("/login");
//   };

//   return (
//     <>



//     <nav className="w-full bg-white border-b shadow-sm">
//       <div className="max-w-7xl mx-auto h-20 px-6 flex items-center justify-between">
        
//         {/* Logo */}
//         {/* <div className="flex items-center gap-3">
//           <div className="w-14 h-14 rounded-2xl bg-gradient-to-r from-violet-600 to-blue-500 flex items-center justify-center">
//             <Code2 className="text-white" size={28} />
//           </div>

//           <h1 className="text-3xl font-bold bg-gradient-to-r from-violet-600 to-blue-500 bg-clip-text text-transparent">
//             CS Academy
//           </h1>
//         </div> */}
//         <h1 className="text-2xl font-bold text-black">
//   📚 LearnSkill
// </h1>

//         {/* Nav Links */}
//         <div className="flex items-center gap-10 text-gray-600 font-medium text-lg">
          
//           <Link
//             to="/"
//             className="flex items-center gap-2 hover:text-blue-600 transition"
//           >
//             <Home size={20} />
//             Home
//           </Link>

//           <Link
//             to="/subjects"
//             className="flex items-center gap-2 hover:text-blue-600 transition"
//           >
//             <BookOpen size={20} />
//             Quizzes
//           </Link>

//           <Link
//             to="/coding-home"
//             className="flex items-center gap-2 hover:text-blue-600 transition"
//           >
//             <Code2 size={20} />
//             Coding Sheets
//           </Link>

//           <Link
//             to="/analytics"
//             className="flex items-center gap-2 hover:text-blue-600 transition"
//           >
//             <BarChart3 size={20} />
//             Analytics
//           </Link>

//           {/* ATS Checker Link */}
//           <Link
//             to="/ats-checker"
//             className="flex items-center gap-2 hover:text-blue-600 transition"
//           >
//             <FileText size={20} />
//             ATS Checker
//           </Link>
//         </div>

//         {/* Login / Logout */}
//         <div>
//           {!token ? (
//             <Link
//               to="/login"
//               className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-2xl flex items-center gap-2 text-lg font-semibold transition"
//             >
//               <LogIn size={20} />
//               Login
//             </Link>
//           ) : (
//             <button
//               onClick={handleLogout}
//               className="bg-red-500 hover:bg-red-600 text-white px-6 py-3 rounded-2xl flex items-center gap-2 text-lg font-semibold transition"
//             >
//               <LogOut size={20} />
//               Logout
//             </button>
//           )}
//         </div>
//       </div>
//     </nav>

// </>
//   );
// }

// export default Navbar;

// import { Link, useNavigate } from "react-router-dom";
// import {
//   Home,
//   BookOpen,
//   Code2,
//   BarChart3,
//   FileText,
//   LogIn,
//   LogOut,
//   GraduationCap,
// } from "lucide-react";

// function Navbar() {
//   const navigate = useNavigate();
//   const token = localStorage.getItem("token");

//   const handleLogout = () => {
//     localStorage.removeItem("token");
//     navigate("/login");
//   };

//   return (
//     <>
//       <nav className="w-full bg-white border-b shadow-sm">
//         <div className="max-w-7xl mx-auto h-20 px-6 flex items-center justify-between">

//           {/* Logo */}
//           <h1 className="text-2xl font-bold text-black">
//             📚 LearnSkill
//           </h1>

//           {/* Nav Links */}
//           <div className="flex items-center gap-10 text-gray-600 font-medium text-lg">

//             <Link
//               to="/"
//               className="flex items-center gap-2 hover:text-blue-600 transition"
//             >
//               <Home size={20} />
//               Home
//             </Link>

//             <Link
//               to="/subjects"
//               className="flex items-center gap-2 hover:text-blue-600 transition"
//             >
//               <BookOpen size={20} />
//               Quizzes
//             </Link>

//             {/* Courses Link */}
//             <Link
//               to="/courses"
//               className="flex items-center gap-2 hover:text-blue-600 transition"
//             >
//               <GraduationCap size={20} />
//               Courses
//             </Link>

//             <Link
//               to="/coding-home"
//               className="flex items-center gap-2 hover:text-blue-600 transition"
//             >
//               <Code2 size={20} />
//               Coding Sheets
//             </Link>

//             <Link
//               to="/analytics"
//               className="flex items-center gap-2 hover:text-blue-600 transition"
//             >
//               <BarChart3 size={20} />
//               Analytics
//             </Link>

//             {/* ATS Checker Link */}
//             <Link
//               to="/ats-checker"
//               className="flex items-center gap-2 hover:text-blue-600 transition"
//             >
//               <FileText size={20} />
//               ATS Checker
//             </Link>
//           </div>

//           {/* Login / Logout */}
//           <div>
//             {!token ? (
//               <Link
//                 to="/login"
//                 className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-2xl flex items-center gap-2 text-lg font-semibold transition"
//               >
//                 <LogIn size={20} />
//                 Login
//               </Link>
//             ) : (
//               <button
//                 onClick={handleLogout}
//                 className="bg-red-500 hover:bg-red-600 text-white px-6 py-3 rounded-2xl flex items-center gap-2 text-lg font-semibold transition"
//               >
//                 <LogOut size={20} />
//                 Logout
//               </button>
//             )}
//           </div>
//         </div>
//       </nav>
//     </>
//   );
// }

// export default Navbar;

import { Link, useNavigate } from "react-router-dom";
import {
  Home,
  BookOpen,
  Code2,
  BarChart3,
  FileText,
  LogIn,
  LogOut,
  GraduationCap,
} from "lucide-react";

import logo from "../assets/logo.png";

function Navbar() {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <>
      <nav className="w-full bg-white border-b shadow-sm">
        <div className="max-w-7xl mx-auto h-20 px-6 flex items-center justify-between">

          {/* Logo Section */}
<Link to="/" className="flex items-center gap-2">
  <img
    src={logo}
    alt="LearnSkill Logo"
    className="h-14 w-auto object-contain"
  />

  {/* <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-violet-600 bg-clip-text text-transparent">
    LearnSkill
  </h1> */}
</Link>

          {/* Nav Links */}
          <div className="flex items-center gap-10 text-gray-600 font-medium text-lg">

            <Link
              to="/"
              className="flex items-center gap-2 hover:text-blue-600 transition"
            >
              <Home size={20} />
              Home
            </Link>

            <Link
              to="/subjects"
              className="flex items-center gap-2 hover:text-blue-600 transition"
            >
              <BookOpen size={20} />
              Quizzes
            </Link>

            <Link
              to="/courses"
              className="flex items-center gap-2 hover:text-blue-600 transition"
            >
              <GraduationCap size={20} />
              Courses
            </Link>

            <Link
              to="/coding-home"
              className="flex items-center gap-2 hover:text-blue-600 transition"
            >
              <Code2 size={20} />
              Coding Sheets
            </Link>

            <Link
              to="/analytics"
              className="flex items-center gap-2 hover:text-blue-600 transition"
            >
              <BarChart3 size={20} />
              Analytics
            </Link>

            <Link
              to="/ats-checker"
              className="flex items-center gap-2 hover:text-blue-600 transition"
            >
              <FileText size={20} />
              ATS Checker
            </Link>
          </div>

          {/* Login / Logout */}
          <div>
            {!token ? (
              <Link
                to="/login"
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-2xl flex items-center gap-2 text-lg font-semibold transition"
              >
                <LogIn size={20} />
                Login
              </Link>
            ) : (
              <button
                onClick={handleLogout}
                className="bg-red-500 hover:bg-red-600 text-white px-6 py-3 rounded-2xl flex items-center gap-2 text-lg font-semibold transition"
              >
                <LogOut size={20} />
                Logout
              </button>
            )}
          </div>

        </div>
      </nav>
    </>
  );
}

export default Navbar;