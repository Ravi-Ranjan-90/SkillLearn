import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function CodingQuestions() {
  const [questions, setQuestions] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [solvedIds, setSolvedIds] = useState([]);
  const [search, setSearch] = useState("");
  const [difficulty, setDifficulty] = useState("All");

  useEffect(() => {
    fetch("http://localhost:5000/api/coding")
      .then((res) => res.json())
      .then((data) => {
        setQuestions(data);
        setFiltered(data);
      });

    fetch("http://localhost:5000/api/coding/submissions")
      .then((res) => res.json())
      .then((data) => {
        const solved = data
          .filter((s) => s.status === "Accepted")
          .map((s) => s.questionId._id);

        setSolvedIds(solved);
      });
  }, []);

  // 🔍 FILTER LOGIC
  useEffect(() => {
    let temp = questions;

    if (search) {
      temp = temp.filter((q) =>
        q.title.toLowerCase().includes(search.toLowerCase())
      );
    }

    if (difficulty !== "All") {
      temp = temp.filter((q) => q.difficulty === difficulty);
    }

    setFiltered(temp);
  }, [search, difficulty, questions]);

  return (
    <div className="p-6">

      <h1 className="text-3xl font-bold mb-6">
        Coding Questions 💻
      </h1>

      {/* 🔍 SEARCH + FILTER */}
      <div className="flex flex-col md:flex-row gap-4 mb-6">

        <input
          type="text"
          placeholder="Search question..."
          className="p-2 border rounded w-full md:w-1/2"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <select
          className="p-2 border rounded"
          value={difficulty}
          onChange={(e) => setDifficulty(e.target.value)}
        >
          <option value="All">All</option>
          <option value="Easy">Easy</option>
          <option value="Medium">Medium</option>
          <option value="Hard">Hard</option>
        </select>
      </div>

      {/* 📋 QUESTIONS LIST */}
      <div className="space-y-3">

        {filtered.map((q) => (
          <div
            key={q._id}
            className="flex justify-between items-center p-4 border rounded-xl shadow-sm hover:shadow-md transition"
          >
            <div>
              <h2 className="font-semibold text-lg">{q.title}</h2>

              <div className="flex gap-3 mt-1 text-sm">
                <span
                  className={`${
                    q.difficulty === "Easy"
                      ? "text-green-600"
                      : q.difficulty === "Medium"
                      ? "text-yellow-600"
                      : "text-red-600"
                  }`}
                >
                  {q.difficulty}
                </span>

                <span className="text-gray-500">{q.topic}</span>
              </div>
            </div>

            <div className="flex items-center gap-4">

              {/* Solved status */}
              {solvedIds.includes(q._id) ? (
                <span className="text-green-600 font-semibold">
                  ✅ Solved
                </span>
              ) : (
                <span className="text-gray-400">
                  ❌ Unsolved
                </span>
              )}

              {/* Solve Button */}
              <Link
                to={`/coding/${q._id}`}
                className="bg-indigo-600 text-white px-4 py-1 rounded-lg hover:bg-indigo-700"
              >
                Solve
              </Link>
            </div>
          </div>
        ))}

      </div>

      {/* Empty state */}
      {filtered.length === 0 && (
        <p className="text-gray-500 mt-4">No questions found</p>
      )}
    </div>
  );
}

export default CodingQuestions;