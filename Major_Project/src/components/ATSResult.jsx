// import { CircularProgressbar } from "react-circular-progressbar";
// import "react-circular-progressbar/dist/styles.css";

// function ATSResult({ result }) {

//   if (!result) {
//     return null;
//   }

//   return (
//     <div className="mt-10 bg-slate-900 rounded-3xl p-8 shadow-2xl text-white">

//       <div className="w-40 mx-auto mb-8">
//         <CircularProgressbar
//           value={result.atsScore || 0}
//           text={`${result.atsScore || 0}%`}
//         />
//       </div>

//       <h2 className="text-center text-3xl font-bold mb-10">
//         ATS Resume Analysis
//       </h2>

//       <div className="grid md:grid-cols-2 gap-8">

//         <div className="bg-slate-800 p-6 rounded-2xl">
//           <h3 className="text-green-400 text-xl font-bold mb-4">
//             Matched Skills
//           </h3>

//           <ul className="space-y-2">
//             {(result.matchedSkills || []).map((skill, index) => (
//               <li key={index}>✔ {skill}</li>
//             ))}
//           </ul>
//         </div>

//         <div className="bg-slate-800 p-6 rounded-2xl">
//           <h3 className="text-red-400 text-xl font-bold mb-4">
//             Missing Skills
//           </h3>

//           <ul className="space-y-2">
//             {(result.missingSkills || []).map((skill, index) => (
//               <li key={index}>✘ {skill}</li>
//             ))}
//           </ul>
//         </div>

//       </div>

//       <div className="grid md:grid-cols-2 gap-8 mt-8">

//         <div className="bg-slate-800 p-6 rounded-2xl">
//           <h3 className="text-yellow-400 text-xl font-bold mb-4">
//             Suggestions
//           </h3>

//           <ul className="space-y-2">
//             {(result.suggestions || []).map((item, index) => (
//               <li key={index}>• {item}</li>
//             ))}
//           </ul>
//         </div>

//         <div className="bg-slate-800 p-6 rounded-2xl">
//           <h3 className="text-pink-400 text-xl font-bold mb-4">
//             Grammar Issues
//           </h3>

//           <ul className="space-y-2">
//             {(result.grammarIssues || []).map((item, index) => (
//               <li key={index}>• {item}</li>
//             ))}
//           </ul>
//         </div>

//       </div>

//       <div className="bg-blue-600 mt-8 p-6 rounded-2xl text-center">
//         <h3 className="text-2xl font-bold mb-2">
//           Final Verdict
//         </h3>

//         <p className="text-lg">
//           {result.finalVerdict || "No verdict available"}
//         </p>
//       </div>

//     </div>
//   );
// }

// export default ATSResult;

import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

function ATSResult({ result }) {

  if (!result) {
    return null;
  }

  return (
    <div className="mt-10 bg-white rounded-3xl shadow-2xl border border-slate-200 overflow-hidden">

      {/* Header */}
      <div className="bg-gradient-to-r from-blue-600 to-indigo-600 p-8 text-white text-center">
        <h2 className="text-4xl font-bold mb-3">
          ATS Resume Analysis
        </h2>

        <p className="text-blue-100 text-lg">
          Professional AI-powered resume evaluation report
        </p>
      </div>

      <div className="p-10">

        {/* Score */}
        <div className="w-44 mx-auto mb-12">
          <CircularProgressbar
            value={result.atsScore || 0}
            text={`${result.atsScore || 0}%`}
          />
        </div>

        {/* Skills Section */}
        <div className="grid md:grid-cols-2 gap-8">

          {/* Matched Skills */}
          <div className="bg-emerald-50 border border-emerald-200 p-6 rounded-3xl shadow-sm">

            <h3 className="text-2xl font-bold text-emerald-700 mb-5">
              Matched Skills
            </h3>

            <ul className="space-y-3">
              {(result.matchedSkills || []).map((skill, index) => (
                <li
                  key={index}
                  className="bg-white p-4 rounded-2xl shadow-sm text-slate-700 font-medium"
                >
                  ✔ {skill}
                </li>
              ))}
            </ul>

          </div>

          {/* Missing Skills */}
          <div className="bg-red-50 border border-red-200 p-6 rounded-3xl shadow-sm">

            <h3 className="text-2xl font-bold text-red-700 mb-5">
              Missing Skills
            </h3>

            <ul className="space-y-3">
              {(result.missingSkills || []).map((skill, index) => (
                <li
                  key={index}
                  className="bg-white p-4 rounded-2xl shadow-sm text-slate-700 font-medium"
                >
                  ✘ {skill}
                </li>
              ))}
            </ul>

          </div>

        </div>

        {/* Suggestions + Grammar */}
        <div className="grid md:grid-cols-2 gap-8 mt-8">

          {/* Suggestions */}
          <div className="bg-yellow-50 border border-yellow-200 p-6 rounded-3xl shadow-sm">

            <h3 className="text-2xl font-bold text-yellow-700 mb-5">
              Suggestions
            </h3>

            <ul className="space-y-3">
              {(result.suggestions || []).map((item, index) => (
                <li
                  key={index}
                  className="bg-white p-4 rounded-2xl shadow-sm text-slate-700"
                >
                  • {item}
                </li>
              ))}
            </ul>

          </div>

          {/* Grammar Issues */}
          <div className="bg-pink-50 border border-pink-200 p-6 rounded-3xl shadow-sm">

            <h3 className="text-2xl font-bold text-pink-700 mb-5">
              Grammar Issues
            </h3>

            <ul className="space-y-3">
              {(result.grammarIssues || []).map((item, index) => (
                <li
                  key={index}
                  className="bg-white p-4 rounded-2xl shadow-sm text-slate-700"
                >
                  • {item}
                </li>
              ))}
            </ul>

          </div>

        </div>

        {/* Final Verdict */}
        <div className="bg-gradient-to-r from-indigo-600 to-blue-600 mt-10 p-8 rounded-3xl text-center text-white shadow-lg">

          <h3 className="text-3xl font-bold mb-4">
            Final Verdict
          </h3>

          <p className="text-lg leading-relaxed max-w-3xl mx-auto">
            {result.finalVerdict || "No verdict available"}
          </p>

        </div>

      </div>

    </div>
  );
}

export default ATSResult;