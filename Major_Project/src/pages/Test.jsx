import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import API_URL from "../config/api";

function Test() {
  const { subjectId } = useParams();
  const navigate = useNavigate();

  const [questions, setQuestions] = useState([]);
  const [answers, setAnswers] = useState({});
  const [level, setLevel] = useState(null);

  useEffect(() => {
    if (level !== null) {
      fetch(`${API_URL}/api/questions/${subjectId}/${level}`)
        .then((res) => res.json())
        // .then((data) => setQuestions(data));
        .then((data) => {
  console.log("API DATA:", data);
  setQuestions(data);
});
    }
  }, [subjectId, level]);

  const handleOptionSelect = (qid, index) => {
    setAnswers({
      ...answers,
      [qid]: index,
    });
  };

  const submitTest = async () => {
    const formattedAnswers = questions.map((q) => ({
      questionId: q._id,
      selectedAnswer: answers[q._id],
    }));

    const token = localStorage.getItem("token");

    const res = await fetch(`${API_URL}/api/test/submit`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        answers: formattedAnswers,
        subjectId,
        level,
      }),
    });

    const data = await res.json();
    navigate("/result", { state: { score: data.score } });
  };

  return (
    <div className="min-h-screen bg-gray-50 px-6 py-10">

      <div className="max-w-4xl mx-auto">

        {/* HEADER */}
        <h1 className="text-3xl font-bold text-gray-900 mb-8 text-center">
          Placement Mock Test
        </h1>

        {/* LEVEL SELECTION */}
        {level === null && (
          <div className="bg-white p-8 rounded-2xl shadow-md text-center">
            <h2 className="text-xl font-semibold mb-6">
              Select Difficulty Level
            </h2>

            <div className="flex justify-center gap-6">
              <button
                onClick={() => setLevel(0)}
                className="px-6 py-3 rounded-xl bg-green-100 text-green-700 font-semibold hover:bg-green-200 transition"
              >
                Easy
              </button>

              <button
                onClick={() => setLevel(1)}
                className="px-6 py-3 rounded-xl bg-yellow-100 text-yellow-700 font-semibold hover:bg-yellow-200 transition"
              >
                Medium
              </button>

              <button
                onClick={() => setLevel(2)}
                className="px-6 py-3 rounded-xl bg-red-100 text-red-700 font-semibold hover:bg-red-200 transition"
              >
                Hard
              </button>
            </div>
          </div>
        )}

        {/* QUESTIONS */}
        {level !== null && (
          <div className="space-y-6">
            {questions.map((q, index) => (
              <div
                key={q._id}
                className="bg-white p-6 rounded-2xl shadow-sm border border-gray-200"
              >
                <h2 className="font-semibold text-lg mb-4 text-gray-900">
                  {index + 1}. {q.question}
                </h2>

                <div className="space-y-3">
                  {q.options.map((opt, i) => (
                    <label
                      key={i}
                      className={`flex items-center gap-3 p-3 rounded-lg border cursor-pointer transition
                      ${
                        answers[q._id] === i
                          ? "bg-blue-50 border-blue-500"
                          : "border-gray-200 hover:bg-gray-100"
                      }`}
                    >
                      <input
                        type="radio"
                        name={q._id}
                        checked={answers[q._id] === i}
                        onChange={() => handleOptionSelect(q._id, i)}
                      />

                      <span className="text-gray-700">{opt}</span>
                    </label>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* SUBMIT BUTTON */}
        {level !== null && (
          <div className="sticky bottom-0 bg-gray-50 py-6 mt-10 text-center">
            <button
              onClick={submitTest}
              className="bg-blue-600 text-white px-10 py-4 rounded-xl font-semibold text-lg hover:bg-blue-700 transition shadow-md"
            >
              Submit Test 🚀
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default Test;