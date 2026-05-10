// import { useState } from "react";
// import ATSResult from "./ATSResult";
// import LoadingSpinner from "./LoadingSpinner";

// function ATSChecker() {
//   const [resume, setResume] = useState(null);
//   const [jdText, setJdText] = useState("");
//   const [result, setResult] = useState(null);
//   const [loading, setLoading] = useState(false);

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     if (!resume || !jdText) {
//       alert("Please upload resume and add job description");
//       return;
//     }

//     try {
//       setLoading(true);

//       const formData = new FormData();

//       formData.append("resume", resume);
//     //   formData.append("jdText", jdText);
//     formData.append("jobDescription", jdText);

//       const response = await fetch(
//         "http://localhost:5000/api/ats/check-ats",
//         {
//           method: "POST",
//           body: formData,
//         }
//       );
// console.log("Response Received");
//       const data = await response.json();

// console.log("Backend Data:", data);

//     if (data.result) {
//       setResult(data.result);
//     } else {
//       alert("No result returned from backend");
//     }

//   } catch (error) {
//     console.log("Frontend Error:", error);

//     alert("Something went wrong");
//   } finally {
//     setLoading(false);
//   }
// };

//   return (
//     <div className="min-h-screen bg-slate-950 text-white py-10 px-5">
//       <div className="max-w-5xl mx-auto">
//         <div className="text-center mb-12">
//           <h1 className="text-5xl font-bold mb-4">
//             AI ATS Resume Checker
//           </h1>
//           <p className="text-slate-400 text-lg">
//             Upload your resume and analyze it using AI.
//           </p>
//         </div>

//         <form
//           onSubmit={handleSubmit}
//           className="bg-slate-900 p-8 rounded-3xl shadow-2xl"
//         >
//           <div className="mb-6">
//             <label className="block mb-3 text-lg font-semibold">
//               Upload Resume
//             </label>

//             <input
//               type="file"
//               accept=".pdf,.docx"
//               onChange={(e) =>
//                 setResume(e.target.files[0])
//               }
//               className="w-full p-4 rounded-xl bg-slate-800 border border-slate-700"
//             />
//           </div>

//           <div className="mb-6">
//             <label className="block mb-3 text-lg font-semibold">
//               Paste Job Description
//             </label>

//             <textarea
//               rows="10"
//               value={jdText}
//               onChange={(e) =>
//                 setJdText(e.target.value)
//               }
//               placeholder="Paste job description here"
//               className="w-full p-4 rounded-xl bg-slate-800 border border-slate-700 outline-none"
//             ></textarea>
//           </div>

//           <button
//             type="submit"
//             className="w-full bg-blue-600 hover:bg-blue-700 transition-all duration-300 py-4 rounded-xl text-xl font-bold"
//           >
//             Analyze Resume
//           </button>
//         </form>

//         {loading && <LoadingSpinner />}

//         {result && !loading && (
//           <ATSResult result={result} />
//         )}
//       </div>
//     </div>
//   );
// }

// export default ATSChecker;

import { useState } from "react";
import ATSResult from "./ATSResult";
import LoadingSpinner from "./LoadingSpinner";

function ATSChecker() {
  const [resume, setResume] = useState(null);
  const [jdText, setJdText] = useState("");
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!resume || !jdText) {
      alert("Please upload resume and add job description");
      return;
    }

    try {
      setLoading(true);

      const formData = new FormData();

      formData.append("resume", resume);
      formData.append("jobDescription", jdText);

      const response = await fetch(
        "http://localhost:5000/api/ats/check-ats",
        {
          method: "POST",
          body: formData,
        }
      );

      console.log("Response Received");

      const data = await response.json();

      console.log("Backend Data:", data);

      if (data.result) {
        setResult(data.result);
      } else {
        alert("No result returned from backend");
      }

    } catch (error) {

      console.log("Frontend Error:", error);

      alert("Something went wrong");

    } finally {

      setLoading(false);

    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-100 via-blue-50 to-indigo-100 py-12 px-4">

      <div className="max-w-6xl mx-auto">

        {/* Hero Section */}
        <div className="text-center mb-14">

          <div className="inline-block bg-blue-100 text-blue-700 px-5 py-2 rounded-full text-sm font-semibold mb-5 shadow-sm">
            AI Powered Resume Analysis
          </div>

          <h1 className="text-5xl md:text-6xl font-extrabold text-slate-800 mb-5 leading-tight">
            ATS Resume Checker
          </h1>

          <p className="text-slate-600 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
            Upload your resume and instantly analyze your ATS score,
            matched skills, missing keywords, grammar issues,
            and improvement suggestions using AI.
          </p>

        </div>

        {/* Form Card */}
        <div className="bg-white rounded-[32px] shadow-2xl border border-slate-200 overflow-hidden">

          {/* Header */}
          <div className="bg-gradient-to-r from-blue-600 to-indigo-600 p-10 text-white">

            <h2 className="text-4xl font-bold mb-3">
              Resume Analysis
            </h2>

            <p className="text-blue-100 text-lg">
              Upload your resume and paste the job description
              to generate a professional ATS report.
            </p>

          </div>

          {/* Form */}
          <form
            onSubmit={handleSubmit}
            className="p-8 md:p-10"
          >

            <div className="grid md:grid-cols-2 gap-8">

              {/* Resume Upload */}
              <div>

                <label className="block text-lg font-bold text-slate-700 mb-4">
                  Upload Resume
                </label>

                <div className="border-2 border-dashed border-slate-300 rounded-3xl p-8 bg-slate-50 hover:border-blue-500 transition-all duration-300">

                  <input
                    type="file"
                    accept=".pdf,.docx"
                    onChange={(e) =>
                      setResume(e.target.files[0])
                    }
                    className="w-full text-slate-700"
                  />

                  <p className="text-slate-500 mt-5 text-sm">
                    Supported formats: PDF and DOCX
                  </p>

                </div>

              </div>

              {/* JD */}
              <div>

                <label className="block text-lg font-bold text-slate-700 mb-4">
                  Paste Job Description
                </label>

                <textarea
                  rows="10"
                  value={jdText}
                  onChange={(e) =>
                    setJdText(e.target.value)
                  }
                  placeholder="Paste complete job description here..."
                  className="w-full p-5 rounded-3xl border border-slate-300 bg-slate-50 outline-none focus:ring-4 focus:ring-blue-100 focus:border-blue-500 text-slate-700 resize-none"
                ></textarea>

              </div>

            </div>

            {/* Button */}
            <button
              type="submit"
              className="w-full mt-10 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white py-5 rounded-3xl text-xl font-bold transition-all duration-300 shadow-lg hover:shadow-2xl hover:scale-[1.01]"
            >
              Analyze Resume
            </button>

          </form>

        </div>

        {/* Loader */}
        {loading && <LoadingSpinner />}

        {/* Result */}
        {result && !loading && (
          <ATSResult result={result} />
        )}

      </div>

    </div>
  );
}

export default ATSChecker;