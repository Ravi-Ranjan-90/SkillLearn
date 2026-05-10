// import { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";
// import Editor from "@monaco-editor/react";

// function CodingPage() {
//   const { id } = useParams();

//   const [question, setQuestion] = useState({});
//   const [code, setCode] = useState("// Write your code here");
//   const [language, setLanguage] = useState("javascript");
//   const [output, setOutput] = useState("");
//   const [status, setStatus] = useState("");
//   const [loading, setLoading] = useState(false);

//   // 🔹 Fetch Question
//   useEffect(() => {
//     fetch(`http://localhost:5000/api/coding/${id}`)
//       .then((res) => res.json())
//       .then((data) => setQuestion(data));
//   }, [id]);

//   // ▶ RUN CODE
//   const runCode = async () => {
//     setLoading(true);
//     setStatus("");

//     try {
//       const input = question?.testCases?.[0]?.input || "";

//       const res = await fetch("http://localhost:5000/api/coding/run", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({ code, language, input }),
//       });

//       const data = await res.json();
//       setOutput(data.output || data.error);
//     } catch (err) {
//       setOutput("Error running code");
//     }

//     setLoading(false);
//   };

//   // ✅ SUBMIT CODE
//   const submitCode = async () => {
//     setLoading(true);
//     setOutput("");

//     try {
//       const res = await fetch("http://localhost:5000/api/coding/submit", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({ code, language, questionId: id }),
//       });

//       const data = await res.json();
//       setStatus(data.status);
//     } catch (err) {
//       setStatus("Error");
//     }

//     setLoading(false);
//   };

//   return (
//     <div className="flex h-screen">

//       {/* LEFT PANEL */}
//       <div className="w-1/2 p-5 overflow-y-auto border-r bg-gray-50">

//         <h2 className="text-2xl font-bold mb-3">{question.title}</h2>

//         <p className="mb-4 text-gray-700">{question.description}</p>

//         <div className="mb-4">
//           <h3 className="font-semibold">Constraints:</h3>
//           <p className="text-sm text-gray-600">{question.constraints}</p>
//         </div>

//         <div className="mb-4">
//           <h3 className="font-semibold">Input Format:</h3>
//           <p className="text-sm text-gray-600">{question.inputFormat}</p>
//         </div>

//         <div className="mb-4">
//           <h3 className="font-semibold">Output Format:</h3>
//           <p className="text-sm text-gray-600">{question.outputFormat}</p>
//         </div>

//         {/* SAMPLE */}
//         <div className="bg-white p-3 rounded shadow">
//           <h3 className="font-semibold">Sample Input:</h3>
//           <pre>{question?.testCases?.[0]?.input}</pre>

//           <h3 className="font-semibold mt-3">Sample Output:</h3>
//           <pre>{question?.testCases?.[0]?.output}</pre>
//         </div>
//       </div>

//       {/* RIGHT PANEL */}
//       <div className="w-1/2 p-5 flex flex-col">

//         {/* TOP BAR */}
//         <div className="flex justify-between items-center mb-3">

//           <select
//             className="p-2 border rounded"
//             value={language}
//             onChange={(e) => setLanguage(e.target.value)}
//           >
//             <option value="javascript">JavaScript</option>
//             <option value="python">Python</option>
//             <option value="cpp">C++</option>
//             <option value="java">Java</option>
//           </select>

//           <div className="flex gap-2">
//             <button
//               onClick={runCode}
//               className="bg-blue-600 text-white px-4 py-2 rounded"
//             >
//               Run
//             </button>

//             <button
//               onClick={submitCode}
//               className="bg-green-600 text-white px-4 py-2 rounded"
//             >
//               Submit
//             </button>
//           </div>
//         </div>

//         {/* EDITOR */}
//         <Editor
//           height="300px"
//           language={language}
//           value={code}
//           onChange={(value) => setCode(value)}
//           theme="vs-dark"
//         />

//         {/* STATUS */}
//         {loading && (
//           <p className="mt-3 text-blue-500">Running...</p>
//         )}

//         {status && (
//           <div className="mt-3 font-bold">
//             Result:{" "}
//             {status === "Accepted" ? (
//               <span className="text-green-600">✅ Accepted</span>
//             ) : (
//               <span className="text-red-500">❌ Wrong Answer</span>
//             )}
//           </div>
//         )}

//         {/* OUTPUT */}
//         <div className="mt-4 bg-black text-green-400 p-3 h-40 overflow-auto rounded">
//           <pre>{output}</pre>
//         </div>

//       </div>
//     </div>
//   );
// }

// export default CodingPage;

import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Editor from "@monaco-editor/react";
import API_URL from "../config/api";

function CodingPage() {

  const { id } = useParams();

  const [question, setQuestion] = useState({});
  const [code, setCode] = useState("// Write your code here");
  const [language, setLanguage] = useState("javascript");
  const [output, setOutput] = useState("");
  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false);

  // FETCH QUESTION

  useEffect(() => {

    fetch(`${API_URL}/api/coding/${id}`)
      .then((res) => res.json())
      .then((data) => setQuestion(data));

  }, [id]);

  // RUN CODE

  const runCode = async () => {

    setLoading(true);

    setStatus("");

    try {

      const input =
        question?.testCases?.[0]?.input || "";

      const res = await fetch(
        `${API_URL}/api/coding/run`,
        {
          method: "POST",

          headers: {
            "Content-Type": "application/json",
          },

          body: JSON.stringify({
            code,
            language,
            input,
          }),
        }
      );

      const data = await res.json();

      setOutput(data.output || data.error);

    } catch (err) {

      setOutput("Error running code");

    }

    setLoading(false);
  };

  // SUBMIT CODE

  const submitCode = async () => {

    setLoading(true);

    setOutput("");

    try {

      const res = await fetch(
        `${API_URL}/api/coding/submit`,
        {
          method: "POST",

          headers: {
            "Content-Type": "application/json",
          },

          body: JSON.stringify({
            code,
            language,
            questionId: id,
          }),
        }
      );

      const data = await res.json();

      setStatus(data.status);

    } catch (err) {

      setStatus("Error");

    }

    setLoading(false);
  };

  return (

    <div className="h-screen bg-gradient-to-br from-slate-100 via-blue-50 to-indigo-100 flex overflow-hidden text-[14px]">

      {/* LEFT PANEL */}

      <div className="w-1/2 border-r border-blue-100 flex flex-col bg-[#f8fbff]">

        {/* HEADER */}

        <div className="px-5 py-4 border-b border-blue-100 bg-gradient-to-r from-blue-50 to-indigo-50">

          <div className="flex items-center gap-3 mb-2">

            <span
              className={`px-3 py-1 rounded-full text-xs font-semibold ${
                question.difficulty === "Easy"
                  ? "bg-green-100 text-green-700"
                  : question.difficulty === "Medium"
                  ? "bg-yellow-100 text-yellow-700"
                  : "bg-red-100 text-red-700"
              }`}
            >
              {question.difficulty}
            </span>

            <span className="text-slate-500 text-xs font-medium">
              {question.topic}
            </span>

          </div>

          <h1 className="text-3xl font-bold text-slate-900">
            {question.title}
          </h1>

        </div>

        {/* QUESTION CONTENT */}

        <div className="flex-1 overflow-y-auto px-5 py-5 space-y-6">

          {/* DESCRIPTION */}

          <div className="bg-white border border-blue-100 rounded-2xl p-5 shadow-sm">

            <p className="text-slate-700 leading-7 whitespace-pre-line text-[15px]">
              {question.description}
            </p>

          </div>

          {/* CONSTRAINTS */}

          <div>

            <h2 className="font-semibold text-slate-900 mb-2 text-[15px]">
              Constraints
            </h2>

            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-100 rounded-2xl p-4">

              <pre className="text-slate-700 whitespace-pre-wrap text-sm">
                {question.constraints}
              </pre>

            </div>

          </div>

          {/* INPUT FORMAT */}

          <div>

            <h2 className="font-semibold text-slate-900 mb-2 text-[15px]">
              Input Format
            </h2>

            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-100 rounded-2xl p-4">

              <pre className="text-slate-700 whitespace-pre-wrap text-sm">
                {question.inputFormat}
              </pre>

            </div>

          </div>

          {/* OUTPUT FORMAT */}

          <div>

            <h2 className="font-semibold text-slate-900 mb-2 text-[15px]">
              Output Format
            </h2>

            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-100 rounded-2xl p-4">

              <pre className="text-slate-700 whitespace-pre-wrap text-sm">
                {question.outputFormat}
              </pre>

            </div>

          </div>

          {/* SAMPLE */}

          <div>

            <h2 className="font-semibold text-slate-900 mb-3 text-[15px]">
              Example
            </h2>

            <div className="bg-white border border-blue-100 rounded-2xl p-5 space-y-5 shadow-sm">

              <div>

                <p className="font-medium text-slate-800 mb-2">
                  Input
                </p>

                <pre className="bg-gradient-to-r from-slate-50 to-blue-50 border border-blue-100 p-4 rounded-xl overflow-auto text-sm text-slate-800">
                  {question?.testCases?.[0]?.input}
                </pre>

              </div>

              <div>

                <p className="font-medium text-slate-800 mb-2">
                  Output
                </p>

                <pre className="bg-gradient-to-r from-slate-50 to-blue-50 border border-blue-100 p-4 rounded-xl overflow-auto text-sm text-slate-800">
                  {question?.testCases?.[0]?.output}
                </pre>

              </div>

            </div>

          </div>

        </div>

      </div>

      {/* RIGHT PANEL */}

      <div className="w-1/2 flex flex-col bg-[#fcfdff]">

        {/* TOP BAR */}

        <div className="flex items-center justify-between px-5 py-3 border-b border-blue-100 bg-gradient-to-r from-white to-blue-50">

          <select
            className="bg-white border border-blue-100 text-slate-800 px-4 py-2 rounded-xl outline-none text-sm shadow-sm"
            value={language}
            onChange={(e) =>
              setLanguage(e.target.value)
            }
          >

            <option value="javascript">
              JavaScript
            </option>

            <option value="python">
              Python
            </option>

            <option value="cpp">
              C++
            </option>

            <option value="java">
              Java
            </option>

          </select>

          <div className="flex items-center gap-3">

            <button
              onClick={runCode}
              disabled={loading}
              className="bg-blue-100 hover:bg-blue-200 text-blue-700 px-5 py-2 rounded-xl font-medium transition"
            >

              {loading
                ? "Running..."
                : "Run"}

            </button>

            <button
              onClick={submitCode}
              disabled={loading}
              className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:opacity-90 text-white px-5 py-2 rounded-xl font-medium transition shadow-md"
            >

              Submit

            </button>

          </div>

        </div>

        {/* EDITOR */}

        <div className="flex-1 overflow-hidden">

          <Editor
            height="100%"
            language={language}
            value={code}
            onChange={(value) =>
              setCode(value)
            }
            theme="light"
            options={{
              fontSize: 14,
              minimap: {
                enabled: false,
              },
              scrollBeyondLastLine: false,
              padding: {
                top: 16,
              },
              wordWrap: "on",
            }}
          />

        </div>

        {/* OUTPUT PANEL */}

        <div className="h-[220px] border-t border-blue-100 bg-gradient-to-r from-white to-blue-50 flex flex-col">

          {/* HEADER */}

          <div className="flex items-center justify-between px-5 py-3 border-b border-blue-100">

            <h2 className="font-semibold text-slate-800">
              Test Result
            </h2>

            {status && (

              <div className="font-semibold text-sm">

                {status === "Accepted" ? (

                  <span className="text-green-600">
                    ✅ Accepted
                  </span>

                ) : (

                  <span className="text-red-500">
                    ❌ Wrong Answer
                  </span>

                )}

              </div>

            )}

          </div>

          {/* OUTPUT */}

          <div className="flex-1 overflow-auto p-5">

            {loading ? (

              <div className="flex items-center gap-3 text-blue-600 text-sm">

                <div className="w-4 h-4 border-2 border-blue-600 border-t-transparent rounded-full animate-spin"></div>

                Running your code...

              </div>

            ) : (

              <pre className="text-sm text-slate-800 whitespace-pre-wrap font-mono">
                {output || "Run your code to see output here..."}
              </pre>

            )}

          </div>

        </div>

      </div>

    </div>
  );
}

export default CodingPage;