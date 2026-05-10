// import { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
// import { BookOpen, Code, Database, Cpu, Terminal, Network, ArrowRight, Sparkles } from "lucide-react";

// const subjectIcons = {
//   default: <BookOpen className="w-6 h-6" />,
//   programming: <Code className="w-6 h-6" />,
//   database: <Database className="w-6 h-6" />,
//   algorithms: <Cpu className="w-6 h-6" />,
//   system: <Terminal className="w-6 h-6" />,
//   network: <Network className="w-6 h-6" />,
// };

// function getSubjectIcon(subjectName) {
//   const name = subjectName.toLowerCase();

//   if (name.includes("program") || name.includes("code"))
//     return subjectIcons.programming;

//   if (name.includes("data") && name.includes("base"))
//     return subjectIcons.database;

//   if (name.includes("algorithm") || name.includes("dsa"))
//     return subjectIcons.algorithms;

//   if (name.includes("system") || name.includes("os"))
//     return subjectIcons.system;

//   if (name.includes("network"))
//     return subjectIcons.network;

//   return subjectIcons.default;
// }

// function Subjects() {

//   const [subjects, setSubjects] = useState([]);
//   const [isLoading, setIsLoading] = useState(true);

//   useEffect(() => {

//     fetch("http://localhost:5000/api/subjects")
//       .then((res) => res.json())
//       .then((data) => {
//         setSubjects(data);
//         setIsLoading(false);
//       })
//       .catch(() => setIsLoading(false));

//   }, []);

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">

//       <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(59,130,246,0.1),transparent_50%)]"></div>
//       <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(139,92,246,0.1),transparent_50%)]"></div>

//       <div className="relative max-w-7xl mx-auto px-6 py-16 sm:px-8 lg:px-12">

//         <div className="text-center mb-16">

//           <div className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/20 rounded-full px-4 py-2 mb-6">
//             <Sparkles className="w-4 h-4 text-blue-400" />
//             <span className="text-sm font-medium text-blue-400">
//               Interview Preparation
//             </span>
//           </div>

//           <h1 className="text-5xl sm:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-blue-100 to-purple-200 bg-clip-text text-transparent">
//             Core Subjects for Placements
//           </h1>

//           <p className="text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed">
//             Master the fundamentals and ace your technical interviews with
//             comprehensive practice tests
//           </p>

//         </div>

//         {isLoading ? (

//           <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

//             {[1,2,3,4,5,6].map((i) => (

//               <div
//                 key={i}
//                 className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 rounded-2xl p-8 border border-slate-700/50 animate-pulse"
//               >

//                 <div className="w-14 h-14 bg-slate-700 rounded-xl mb-6"></div>
//                 <div className="h-8 bg-slate-700 rounded mb-4"></div>
//                 <div className="h-4 bg-slate-700 rounded mb-8"></div>
//                 <div className="h-10 bg-slate-700 rounded"></div>

//               </div>

//             ))}

//           </div>

//         ) : (

//           <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

//             {subjects.map((subject) => (

//               <div
//                 key={subject._id}
//                 className="group bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700/50 hover:border-blue-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/10 hover:-translate-y-1"
//               >

//                 <div className="bg-gradient-to-br from-blue-500 to-purple-600 w-14 h-14 flex items-center justify-center rounded-xl mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-blue-500/20">

//                   <div className="text-white">
//                     {getSubjectIcon(subject.name)}
//                   </div>

//                 </div>

//                 <h2 className="text-2xl font-bold mb-3 text-white group-hover:text-blue-400 transition-colors">
//                   {subject.name}
//                 </h2>

//                 <p className="text-slate-400 mb-8 leading-relaxed">
//                   Practice important interview questions and strengthen your
//                   understanding of key concepts.
//                 </p>

//                 <Link
//                   to={`/test/${subject._id}/1`}
//                   className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 group-hover:shadow-lg group-hover:shadow-blue-500/25"
//                 >

//                   Start Test
//                   <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />

//                 </Link>

//               </div>

//             ))}

//           </div>

//         )}

//         {!isLoading && subjects.length === 0 && (

//           <div className="text-center py-16">

//             <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-12 border border-slate-700/50 max-w-md mx-auto">

//               <BookOpen className="w-16 h-16 text-slate-600 mx-auto mb-4" />

//               <h3 className="text-xl font-semibold text-white mb-2">
//                 No subjects available
//               </h3>

//               <p className="text-slate-400">
//                 Please check back later for available subjects.
//               </p>

//             </div>

//           </div>

//         )}

//       </div>
//     </div>
//   );
// }

// export default Subjects;

import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { BookOpen, Code, Database, Cpu, Terminal, Network, ArrowRight, Sparkles } from "lucide-react";

const subjectIcons = {
  default: <BookOpen className="w-6 h-6" />,
  programming: <Code className="w-6 h-6" />,
  database: <Database className="w-6 h-6" />,
  algorithms: <Cpu className="w-6 h-6" />,
  system: <Terminal className="w-6 h-6" />,
  network: <Network className="w-6 h-6" />,
};

function getSubjectIcon(subjectName) {
  const name = subjectName.toLowerCase();

  if (name.includes("program") || name.includes("code"))
    return subjectIcons.programming;

  if (name.includes("data") && name.includes("base"))
    return subjectIcons.database;

  if (name.includes("algorithm") || name.includes("dsa"))
    return subjectIcons.algorithms;

  if (name.includes("system") || name.includes("os"))
    return subjectIcons.system;

  if (name.includes("network"))
    return subjectIcons.network;

  return subjectIcons.default;
}

function Subjects() {

  const [subjects, setSubjects] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch("http://localhost:5000/api/subjects")
      .then((res) => res.json())
      .then((data) => {
        setSubjects(data);
        setIsLoading(false);
      })
      .catch(() => setIsLoading(false));
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">

      {/* Soft background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(59,130,246,0.08),transparent_50%)]"></div>

      <div className="relative max-w-7xl mx-auto px-6 py-16 sm:px-8 lg:px-12">

        {/* HEADER */}
        <div className="text-center mb-16">

          <div className="inline-flex items-center gap-2 bg-blue-50 border border-blue-200 rounded-full px-4 py-2 mb-6">
            <Sparkles className="w-4 h-4 text-blue-600" />
            <span className="text-sm font-medium text-blue-600">
              Interview Preparation
            </span>
          </div>

          <h1 className="text-5xl sm:text-6xl font-bold mb-6 text-gray-900">
            Core Subjects for Placements
          </h1>

          <p className="text-xl text-gray-500 max-w-2xl mx-auto leading-relaxed">
            Master the fundamentals and ace your technical interviews with
            comprehensive practice tests
          </p>

        </div>

        {/* LOADING STATE */}
        {isLoading ? (

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

            {[1,2,3,4,5,6].map((i) => (

              <div
                key={i}
                className="bg-white rounded-2xl p-8 border border-gray-200 animate-pulse shadow-sm"
              >
                <div className="w-14 h-14 bg-gray-200 rounded-xl mb-6"></div>
                <div className="h-8 bg-gray-200 rounded mb-4"></div>
                <div className="h-4 bg-gray-200 rounded mb-8"></div>
                <div className="h-10 bg-gray-200 rounded"></div>
              </div>

            ))}

          </div>

        ) : (

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

            {subjects.map((subject) => (

              <div
                key={subject._id}
                className="group bg-white rounded-2xl p-8 border border-gray-200 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              >

                {/* ICON */}
                <div className="bg-gradient-to-br from-blue-500 to-indigo-600 w-14 h-14 flex items-center justify-center rounded-xl mb-6 group-hover:scale-110 transition-transform duration-300 shadow-md">

                  <div className="text-white">
                    {getSubjectIcon(subject.name)}
                  </div>

                </div>

                {/* TITLE */}
                <h2 className="text-2xl font-bold mb-3 text-gray-900 group-hover:text-blue-600 transition-colors">
                  {subject.name}
                </h2>

                {/* DESC */}
                <p className="text-gray-500 mb-8 leading-relaxed">
                  Practice important interview questions and strengthen your
                  understanding of key concepts.
                </p>

                {/* BUTTON */}
                <Link
                  to={`/test/${subject._id}/1`}
                  className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 shadow-sm"
                >
                  Start Test
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>

              </div>

            ))}

          </div>

        )}

        {/* EMPTY STATE */}
        {!isLoading && subjects.length === 0 && (

          <div className="text-center py-16">

            <div className="bg-white rounded-2xl p-12 border border-gray-200 shadow-sm max-w-md mx-auto">

              <BookOpen className="w-16 h-16 text-gray-400 mx-auto mb-4" />

              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                No subjects available
              </h3>

              <p className="text-gray-500">
                Please check back later for available subjects.
              </p>

            </div>

          </div>

        )}

      </div>
    </div>
  );
}

export default Subjects;