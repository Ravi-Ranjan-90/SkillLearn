// import { Link } from "react-router-dom";

// function CodingHome() {
//   return (
//     <div className="p-6">

//       <h1 className="text-3xl font-bold mb-6">
//         Coding Practice 🚀
//       </h1>

//       <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

//         {/* Questions */}
//         <Link to="/coding">
//           <div className="p-6 border rounded-xl shadow hover:shadow-lg transition">
//             <h2 className="text-xl font-semibold">
//               🧩 Solve Coding Questions
//             </h2>
//             <p className="text-gray-500 mt-2">
//               Practice DSA problems with test cases
//             </p>
//           </div>
//         </Link>

//         {/* Submissions */}
//         <Link to="/submissions">
//           <div className="p-6 border rounded-xl shadow hover:shadow-lg transition">
//             <h2 className="text-xl font-semibold">
//               📊 View Submissions
//             </h2>
//             <p className="text-gray-500 mt-2">
//               Track your progress and history
//             </p>
//           </div>
//         </Link>

//       </div>
//     </div>
//   );
// }

// export default CodingHome;

import { Link } from "react-router-dom";

function CodingHome() {

  return (

    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 px-6 py-12">

      <div className="max-w-7xl mx-auto">

        {/* HEADER */}

        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 mb-14">

          <div>

            <h1 className="text-5xl font-black text-slate-900">

              Coding Practice 🚀

            </h1>

            <p className="text-slate-600 text-lg mt-4 max-w-2xl leading-relaxed">

              Practice coding problems, improve problem-solving skills,
              and track your submissions with a modern coding experience.

            </p>

          </div>

          <div className="flex gap-4">

            <Link
              to="/coding"
              className="bg-blue-700 hover:bg-blue-800 text-white px-7 py-4 rounded-2xl font-bold shadow-lg hover:shadow-2xl hover:scale-105 transition duration-300"
            >
              Start Solving
            </Link>

            <Link
              to="/submissions"
              className="bg-white border border-blue-100 text-blue-700 px-7 py-4 rounded-2xl font-bold shadow-md hover:shadow-xl hover:scale-105 transition duration-300"
            >
              My Submissions
            </Link>

          </div>

        </div>

        {/* STATS */}

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">

          <div className="bg-white rounded-3xl p-8 shadow-lg border border-slate-100">

            <h2 className="text-4xl font-black text-blue-700">
              500+
            </h2>

            <p className="text-slate-600 mt-3 text-lg">
              Coding Problems
            </p>

          </div>

          <div className="bg-white rounded-3xl p-8 shadow-lg border border-slate-100">

            <h2 className="text-4xl font-black text-blue-700">
              50+
            </h2>

            <p className="text-slate-600 mt-3 text-lg">
              Topics Covered
            </p>

          </div>

          <div className="bg-white rounded-3xl p-8 shadow-lg border border-slate-100">

            <h2 className="text-4xl font-black text-blue-700">
              1K+
            </h2>

            <p className="text-slate-600 mt-3 text-lg">
              Active Learners
            </p>

          </div>

          <div className="bg-white rounded-3xl p-8 shadow-lg border border-slate-100">

            <h2 className="text-4xl font-black text-blue-700">
              98%
            </h2>

            <p className="text-slate-600 mt-3 text-lg">
              Success Rate
            </p>

          </div>

        </div>

        {/* MAIN CARDS */}

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">

          {/* QUESTIONS CARD */}

          <Link to="/coding">

            <div className="group relative bg-white rounded-[2rem] p-10 shadow-xl border border-slate-100 overflow-hidden hover:-translate-y-3 hover:shadow-2xl transition duration-500 h-full">

              <div className="absolute top-0 right-0 w-40 h-40 bg-blue-100 rounded-full blur-3xl opacity-60"></div>

              <div className="relative z-10">

                <div className="w-24 h-24 rounded-3xl bg-gradient-to-br from-blue-600 to-indigo-700 text-white flex items-center justify-center text-5xl shadow-xl group-hover:scale-110 transition duration-300">

                  🧩

                </div>

                <h2 className="text-4xl font-black text-slate-900 mt-8">

                  Solve Coding Questions

                </h2>

                <p className="text-slate-600 text-lg leading-relaxed mt-5">

                  Practice DSA, algorithms, and interview-level coding
                  problems with real-time execution and test cases.

                </p>

                <div className="mt-10 inline-flex items-center gap-3 text-blue-700 font-bold text-lg">

                  Start Practicing

                  <span className="group-hover:translate-x-2 transition duration-300">
                    →
                  </span>

                </div>

              </div>

            </div>

          </Link>

          {/* SUBMISSIONS CARD */}

          <Link to="/submissions">

            <div className="group relative bg-white rounded-[2rem] p-10 shadow-xl border border-slate-100 overflow-hidden hover:-translate-y-3 hover:shadow-2xl transition duration-500 h-full">

              <div className="absolute top-0 right-0 w-40 h-40 bg-indigo-100 rounded-full blur-3xl opacity-60"></div>

              <div className="relative z-10">

                <div className="w-24 h-24 rounded-3xl bg-gradient-to-br from-indigo-600 to-blue-700 text-white flex items-center justify-center text-5xl shadow-xl group-hover:scale-110 transition duration-300">

                  📊

                </div>

                <h2 className="text-4xl font-black text-slate-900 mt-8">

                  View Submissions

                </h2>

                <p className="text-slate-600 text-lg leading-relaxed mt-5">

                  Track solved questions, coding performance,
                  and monitor your learning journey.

                </p>

                <div className="mt-10 inline-flex items-center gap-3 text-blue-700 font-bold text-lg">

                  Check Progress

                  <span className="group-hover:translate-x-2 transition duration-300">
                    →
                  </span>

                </div>

              </div>

            </div>

          </Link>

        </div>

      </div>

    </div>

  );
}

export default CodingHome;