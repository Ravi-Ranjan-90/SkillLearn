import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Editor from "@monaco-editor/react";

function CodingPage() {
  const { id } = useParams();

  const [question, setQuestion] = useState({});
  const [code, setCode] = useState("// Write your code here");
  const [language, setLanguage] = useState("javascript");
  const [output, setOutput] = useState("");
  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false);

  // 🔹 Fetch Question
  useEffect(() => {
    fetch(`http://localhost:5000/api/coding/${id}`)
      .then((res) => res.json())
      .then((data) => setQuestion(data));
  }, [id]);

  // ▶ RUN CODE
  const runCode = async () => {
    setLoading(true);
    setStatus("");

    try {
      const input = question?.testCases?.[0]?.input || "";

      const res = await fetch("http://localhost:5000/api/coding/run", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ code, language, input }),
      });

      const data = await res.json();
      setOutput(data.output || data.error);
    } catch (err) {
      setOutput("Error running code");
    }

    setLoading(false);
  };

  // ✅ SUBMIT CODE
  const submitCode = async () => {
    setLoading(true);
    setOutput("");

    try {
      const res = await fetch("http://localhost:5000/api/coding/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ code, language, questionId: id }),
      });

      const data = await res.json();
      setStatus(data.status);
    } catch (err) {
      setStatus("Error");
    }

    setLoading(false);
  };

  return (
    <div className="flex h-screen">

      {/* LEFT PANEL */}
      <div className="w-1/2 p-5 overflow-y-auto border-r bg-gray-50">

        <h2 className="text-2xl font-bold mb-3">{question.title}</h2>

        <p className="mb-4 text-gray-700">{question.description}</p>

        <div className="mb-4">
          <h3 className="font-semibold">Constraints:</h3>
          <p className="text-sm text-gray-600">{question.constraints}</p>
        </div>

        <div className="mb-4">
          <h3 className="font-semibold">Input Format:</h3>
          <p className="text-sm text-gray-600">{question.inputFormat}</p>
        </div>

        <div className="mb-4">
          <h3 className="font-semibold">Output Format:</h3>
          <p className="text-sm text-gray-600">{question.outputFormat}</p>
        </div>

        {/* SAMPLE */}
        <div className="bg-white p-3 rounded shadow">
          <h3 className="font-semibold">Sample Input:</h3>
          <pre>{question?.testCases?.[0]?.input}</pre>

          <h3 className="font-semibold mt-3">Sample Output:</h3>
          <pre>{question?.testCases?.[0]?.output}</pre>
        </div>
      </div>

      {/* RIGHT PANEL */}
      <div className="w-1/2 p-5 flex flex-col">

        {/* TOP BAR */}
        <div className="flex justify-between items-center mb-3">

          <select
            className="p-2 border rounded"
            value={language}
            onChange={(e) => setLanguage(e.target.value)}
          >
            <option value="javascript">JavaScript</option>
            <option value="python">Python</option>
            <option value="cpp">C++</option>
            <option value="java">Java</option>
          </select>

          <div className="flex gap-2">
            <button
              onClick={runCode}
              className="bg-blue-600 text-white px-4 py-2 rounded"
            >
              Run
            </button>

            <button
              onClick={submitCode}
              className="bg-green-600 text-white px-4 py-2 rounded"
            >
              Submit
            </button>
          </div>
        </div>

        {/* EDITOR */}
        <Editor
          height="300px"
          language={language}
          value={code}
          onChange={(value) => setCode(value)}
          theme="vs-dark"
        />

        {/* STATUS */}
        {loading && (
          <p className="mt-3 text-blue-500">Running...</p>
        )}

        {status && (
          <div className="mt-3 font-bold">
            Result:{" "}
            {status === "Accepted" ? (
              <span className="text-green-600">✅ Accepted</span>
            ) : (
              <span className="text-red-500">❌ Wrong Answer</span>
            )}
          </div>
        )}

        {/* OUTPUT */}
        <div className="mt-4 bg-black text-green-400 p-3 h-40 overflow-auto rounded">
          <pre>{output}</pre>
        </div>

      </div>
    </div>
  );
}

export default CodingPage;