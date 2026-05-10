// import { useEffect, useState } from "react";
// import { Link } from "react-router-dom";

// function CodingQuestions() {
//   const [questions, setQuestions] = useState([]);
//   const [filtered, setFiltered] = useState([]);
//   const [solvedIds, setSolvedIds] = useState([]);
//   const [search, setSearch] = useState("");
//   const [difficulty, setDifficulty] = useState("All");

//   useEffect(() => {
//     fetch("http://localhost:5000/api/coding")
//       .then((res) => res.json())
//       .then((data) => {
//         setQuestions(data);
//         setFiltered(data);
//       });

//     fetch("http://localhost:5000/api/coding/submissions")
//       .then((res) => res.json())
//       .then((data) => {
//         const solved = data
//           .filter((s) => s.status === "Accepted")
//           .map((s) => s.questionId._id);

//         setSolvedIds(solved);
//       });
//   }, []);

//   // 🔍 FILTER LOGIC
//   useEffect(() => {
//     let temp = questions;

//     if (search) {
//       temp = temp.filter((q) =>
//         q.title.toLowerCase().includes(search.toLowerCase())
//       );
//     }

//     if (difficulty !== "All") {
//       temp = temp.filter((q) => q.difficulty === difficulty);
//     }

//     setFiltered(temp);
//   }, [search, difficulty, questions]);

//   return (
//     <div className="p-6">

//       <h1 className="text-3xl font-bold mb-6">
//         Coding Questions 💻
//       </h1>

//       {/* 🔍 SEARCH + FILTER */}
//       <div className="flex flex-col md:flex-row gap-4 mb-6">

//         <input
//           type="text"
//           placeholder="Search question..."
//           className="p-2 border rounded w-full md:w-1/2"
//           value={search}
//           onChange={(e) => setSearch(e.target.value)}
//         />

//         <select
//           className="p-2 border rounded"
//           value={difficulty}
//           onChange={(e) => setDifficulty(e.target.value)}
//         >
//           <option value="All">All</option>
//           <option value="Easy">Easy</option>
//           <option value="Medium">Medium</option>
//           <option value="Hard">Hard</option>
//         </select>
//       </div>

//       {/* 📋 QUESTIONS LIST */}
//       <div className="space-y-3">

//         {filtered.map((q) => (
//           <div
//             key={q._id}
//             className="flex justify-between items-center p-4 border rounded-xl shadow-sm hover:shadow-md transition"
//           >
//             <div>
//               <h2 className="font-semibold text-lg">{q.title}</h2>

//               <div className="flex gap-3 mt-1 text-sm">
//                 <span
//                   className={`${
//                     q.difficulty === "Easy"
//                       ? "text-green-600"
//                       : q.difficulty === "Medium"
//                       ? "text-yellow-600"
//                       : "text-red-600"
//                   }`}
//                 >
//                   {q.difficulty}
//                 </span>

//                 <span className="text-gray-500">{q.topic}</span>
//               </div>
//             </div>

//             <div className="flex items-center gap-4">

//               {/* Solved status */}
//               {solvedIds.includes(q._id) ? (
//                 <span className="text-green-600 font-semibold">
//                   ✅ Solved
//                 </span>
//               ) : (
//                 <span className="text-gray-400">
//                   ❌ Unsolved
//                 </span>
//               )}

//               {/* Solve Button */}
//               <Link
//                 to={`/coding/${q._id}`}
//                 className="bg-indigo-600 text-white px-4 py-1 rounded-lg hover:bg-indigo-700"
//               >
//                 Solve
//               </Link>
//             </div>
//           </div>
//         ))}

//       </div>

//       {/* Empty state */}
//       {filtered.length === 0 && (
//         <p className="text-gray-500 mt-4">No questions found</p>
//       )}
//     </div>
//   );
// }

// export default CodingQuestions;


import { useEffect, useState } from "react";

import { Link } from "react-router-dom";
import API_URL from "../config/api";

function CodingQuestions() {

  const [questions, setQuestions] =
    useState([]);

  const [filtered, setFiltered] =
    useState([]);

  const [solvedIds, setSolvedIds] =
    useState([]);

  const [search, setSearch] =
    useState("");

  const [difficulty, setDifficulty] =
    useState("All");

  const [loading, setLoading] =
    useState(true);

  useEffect(() => {

    fetchQuestions();

  }, []);

  const fetchQuestions = async () => {

    try {

      const questionsRes =
        await fetch(`${API_URL}/api/coding`);

      const questionsData =
        await questionsRes.json();

      setQuestions(
        questionsData
      );

      setFiltered(
        questionsData
      );

      const submissionsRes =
        await fetch(
          "http://localhost:5000/api/coding/submissions"
        );

      const submissionsData =
        await submissionsRes.json();

      const solved =
        submissionsData
          .filter(
            (s) =>
              s.status ===
              "Accepted"
          )
          .map(
            (s) =>
              s.questionId._id
          );

      setSolvedIds(solved);

    } catch (error) {

      console.log(error);

    } finally {

      setLoading(false);

    }
  };

  // FILTER LOGIC

  useEffect(() => {

    let temp = questions;

    if (search) {

      temp = temp.filter(
        (q) =>
          q.title
            .toLowerCase()
            .includes(
              search.toLowerCase()
            )
      );
    }

    if (
      difficulty !== "All"
    ) {

      temp = temp.filter(
        (q) =>
          q.difficulty ===
          difficulty
      );
    }

    setFiltered(temp);

  }, [
    search,
    difficulty,
    questions,
  ]);

  if (loading) {

    return (

      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">

        <div className="flex flex-col items-center">

          <div className="w-16 h-16 border-4 border-blue-700 border-t-transparent rounded-full animate-spin"></div>

          <p className="mt-5 text-xl font-semibold text-blue-800">
            Loading Questions...
          </p>

        </div>

      </div>

    );
  }

  return (

    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 px-6 py-10">

      <div className="max-w-7xl mx-auto">

        {/* HEADER */}

        <div className="mb-12">

          <h1 className="text-5xl font-black text-slate-900">

            Coding Questions 💻

          </h1>

          <p className="text-slate-600 text-lg mt-4 max-w-3xl leading-relaxed">

            Practice coding interview questions, improve problem-solving skills,
            and prepare for top product-based companies.

          </p>

        </div>

        {/* TOP STATS */}

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">

          <div className="bg-white rounded-3xl p-6 shadow-lg border border-slate-100">

            <h2 className="text-4xl font-black text-blue-700">
              {questions.length}
            </h2>

            <p className="text-slate-600 mt-2">
              Total Questions
            </p>

          </div>

          <div className="bg-white rounded-3xl p-6 shadow-lg border border-slate-100">

            <h2 className="text-4xl font-black text-green-600">
              {solvedIds.length}
            </h2>

            <p className="text-slate-600 mt-2">
              Solved
            </p>

          </div>

          <div className="bg-white rounded-3xl p-6 shadow-lg border border-slate-100">

            <h2 className="text-4xl font-black text-yellow-500">
              {
                questions.filter(
                  (q) =>
                    q.difficulty ===
                    "Medium"
                ).length
              }
            </h2>

            <p className="text-slate-600 mt-2">
              Medium Questions
            </p>

          </div>

          <div className="bg-white rounded-3xl p-6 shadow-lg border border-slate-100">

            <h2 className="text-4xl font-black text-red-500">
              {
                questions.filter(
                  (q) =>
                    q.difficulty ===
                    "Hard"
                ).length
              }
            </h2>

            <p className="text-slate-600 mt-2">
              Hard Questions
            </p>

          </div>

        </div>

        {/* SEARCH + FILTER */}

        <div className="bg-white rounded-3xl shadow-lg border border-slate-100 p-6 mb-10">

          <div className="flex flex-col md:flex-row gap-5">

            <div className="flex-1">

              <input
                type="text"
                placeholder="Search coding question..."
                className="w-full px-5 py-4 rounded-2xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500 text-lg"
                value={search}
                onChange={(e) =>
                  setSearch(
                    e.target.value
                  )
                }
              />

            </div>

            <select
              className="px-5 py-4 rounded-2xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500 text-lg bg-white"
              value={difficulty}
              onChange={(e) =>
                setDifficulty(
                  e.target.value
                )
              }
            >

              <option value="All">
                All Difficulties
              </option>

              <option value="Easy">
                Easy
              </option>

              <option value="Medium">
                Medium
              </option>

              <option value="Hard">
                Hard
              </option>

            </select>

          </div>

        </div>

        {/* QUESTIONS TABLE */}

        <div className="bg-white rounded-3xl shadow-xl border border-slate-100 overflow-hidden">

          {/* TABLE HEADER */}

          <div className="hidden md:grid grid-cols-12 gap-4 bg-slate-100 px-8 py-5 text-slate-700 font-bold text-lg">

            <div className="col-span-5">
              Question
            </div>

            <div className="col-span-2">
              Difficulty
            </div>

            <div className="col-span-2">
              Topic
            </div>

            <div className="col-span-2">
              Status
            </div>

            <div className="col-span-1 text-center">
              Solve
            </div>

          </div>

          {/* QUESTIONS LIST */}

          <div className="divide-y divide-slate-100">

            {filtered.map((q) => (

              <div
                key={q._id}
                className="grid grid-cols-1 md:grid-cols-12 gap-5 px-8 py-6 items-center hover:bg-blue-50 transition duration-300"
              >

                {/* TITLE */}

                <div className="md:col-span-5">

                  <h2 className="text-xl font-bold text-slate-900">

                    {q.title}

                  </h2>

                </div>

                {/* DIFFICULTY */}

                <div className="md:col-span-2">

                  <span
                    className={`px-4 py-2 rounded-full text-sm font-bold ${
                      q.difficulty ===
                      "Easy"
                        ? "bg-green-100 text-green-700"
                        : q.difficulty ===
                          "Medium"
                        ? "bg-yellow-100 text-yellow-700"
                        : "bg-red-100 text-red-700"
                    }`}
                  >

                    {q.difficulty}

                  </span>

                </div>

                {/* TOPIC */}

                <div className="md:col-span-2">

                  <span className="text-slate-600 font-medium">

                    {q.topic}

                  </span>

                </div>

                {/* STATUS */}

                <div className="md:col-span-2">

                  {solvedIds.includes(
                    q._id
                  ) ? (

                    <span className="text-green-600 font-bold">

                      ✅ Solved

                    </span>

                  ) : (

                    <span className="text-slate-400 font-semibold">

                      ❌ Unsolved

                    </span>

                  )}

                </div>

                {/* BUTTON */}

                <div className="md:col-span-1 flex md:justify-center">

                  <Link
                    to={`/coding/${q._id}`}
                    className="bg-blue-700 hover:bg-blue-800 text-white px-5 py-2 rounded-xl font-semibold shadow-md hover:shadow-xl transition duration-300"
                  >

                    Solve

                  </Link>

                </div>

              </div>

            ))}

          </div>

        </div>

        {/* EMPTY STATE */}

        {filtered.length === 0 && (

          <div className="bg-white rounded-3xl shadow-lg border border-slate-100 p-14 text-center mt-10">

            <div className="text-7xl mb-6">
              🔍
            </div>

            <h2 className="text-3xl font-black text-slate-900">

              No Questions Found

            </h2>

            <p className="text-slate-600 text-lg mt-4">

              Try changing search keywords or difficulty filters.

            </p>

          </div>

        )}

      </div>

    </div>
  );
}

export default CodingQuestions;