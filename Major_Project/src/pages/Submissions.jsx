// import { useEffect, useState } from "react";

// function Submissions() {
//   const [data, setData] = useState([]);

//   useEffect(() => {
//     fetch("http://localhost:5000/api/coding/submissions")
//       .then((res) => res.json())
//       .then((res) => setData(res));
//   }, []);

//   return (
//     <div className="p-6">
//       <h1 className="text-xl font-bold mb-4">Submission History</h1>

//       {data.map((s) => (
//         <div key={s._id} className="border p-4 mb-2 rounded">
//           <h2 className="font-semibold">{s.questionId?.title}</h2>

//           <p>
//             Status:{" "}
//             {s.status === "Accepted" ? (
//               <span className="text-green-600">Accepted</span>
//             ) : (
//               <span className="text-red-500">Wrong Answer</span>
//             )}
//           </p>

//           <p className="text-sm text-gray-500">
//             {new Date(s.createdAt).toLocaleString()}
//           </p>
//         </div>
//       ))}
//     </div>
//   );
// }

// export default Submissions;

import { useEffect, useState } from "react";
import API_URL from "../config/api";

function Submissions() {

  const [data, setData] =
    useState([]);

  const [loading, setLoading] =
    useState(true);

  useEffect(() => {

    fetchSubmissions();

  }, []);

  const fetchSubmissions =
    async () => {

      try {

        const response =
          await fetch(`${API_URL}/api/coding/submissions`);

        const result =
          await response.json();

        setData(result);

      } catch (error) {

        console.log(error);

      } finally {

        setLoading(false);

      }
    };

  // LOADING UI

  if (loading) {

    return (

      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">

        <div className="flex flex-col items-center">

          <div className="w-16 h-16 border-4 border-blue-700 border-t-transparent rounded-full animate-spin"></div>

          <p className="mt-5 text-xl font-semibold text-blue-800">

            Loading Submissions...

          </p>

        </div>

      </div>

    );
  }

  // STATS

  const acceptedCount =
    data.filter(
      (s) =>
        s.status ===
        "Accepted"
    ).length;

  const wrongCount =
    data.filter(
      (s) =>
        s.status !==
        "Accepted"
    ).length;

  return (

    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 px-6 py-10">

      <div className="max-w-7xl mx-auto">

        {/* HEADER */}

        <div className="mb-12">

          <h1 className="text-5xl font-black text-slate-900">

            Submission History 📊

          </h1>

          <p className="text-slate-600 text-lg mt-4 max-w-3xl leading-relaxed">

            Track your coding attempts, analyze problem-solving progress,
            and improve your coding performance over time.

          </p>

        </div>

        {/* STATS */}

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">

          <div className="bg-white rounded-3xl p-6 shadow-lg border border-slate-100">

            <h2 className="text-4xl font-black text-blue-700">

              {data.length}

            </h2>

            <p className="text-slate-600 mt-2">

              Total Submissions

            </p>

          </div>

          <div className="bg-white rounded-3xl p-6 shadow-lg border border-slate-100">

            <h2 className="text-4xl font-black text-green-600">

              {acceptedCount}

            </h2>

            <p className="text-slate-600 mt-2">

              Accepted

            </p>

          </div>

          <div className="bg-white rounded-3xl p-6 shadow-lg border border-slate-100">

            <h2 className="text-4xl font-black text-red-500">

              {wrongCount}

            </h2>

            <p className="text-slate-600 mt-2">

              Wrong Answers

            </p>

          </div>

          <div className="bg-white rounded-3xl p-6 shadow-lg border border-slate-100">

            <h2 className="text-4xl font-black text-indigo-600">

              {Math.round(
                (acceptedCount /
                  (data.length || 1)) *
                  100
              )}
              %

            </h2>

            <p className="text-slate-600 mt-2">

              Accuracy

            </p>

          </div>

        </div>

        {/* TABLE */}

        <div className="bg-white rounded-3xl shadow-xl border border-slate-100 overflow-hidden">

          {/* TABLE HEADER */}

          <div className="hidden md:grid grid-cols-12 gap-4 bg-slate-100 px-8 py-5 text-slate-700 font-bold text-lg">

            <div className="col-span-5">
              Question
            </div>

            <div className="col-span-3">
              Status
            </div>

            <div className="col-span-4">
              Submitted At
            </div>

          </div>

          {/* SUBMISSION LIST */}

          <div className="divide-y divide-slate-100">

            {data.map((s) => (

              <div
                key={s._id}
                className="grid grid-cols-1 md:grid-cols-12 gap-5 px-8 py-6 items-center hover:bg-blue-50 transition duration-300"
              >

                {/* QUESTION */}

                <div className="md:col-span-5">

                  <h2 className="text-xl font-bold text-slate-900">

                    {s.questionId?.title}

                  </h2>

                </div>

                {/* STATUS */}

                <div className="md:col-span-3">

                  {s.status ===
                  "Accepted" ? (

                    <span className="bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-bold">

                      ✅ Accepted

                    </span>

                  ) : (

                    <span className="bg-red-100 text-red-700 px-4 py-2 rounded-full text-sm font-bold">

                      ❌ Wrong Answer

                    </span>

                  )}

                </div>

                {/* DATE */}

                <div className="md:col-span-4">

                  <span className="text-slate-600 font-medium">

                    {new Date(
                      s.createdAt
                    ).toLocaleString()}

                  </span>

                </div>

              </div>

            ))}

          </div>

        </div>

        {/* EMPTY STATE */}

        {data.length === 0 && (

          <div className="bg-white rounded-3xl shadow-lg border border-slate-100 p-14 text-center mt-10">

            <div className="text-7xl mb-6">
              📭
            </div>

            <h2 className="text-3xl font-black text-slate-900">

              No Submissions Yet

            </h2>

            <p className="text-slate-600 text-lg mt-4">

              Start solving coding questions to see your submission history.

            </p>

          </div>

        )}

      </div>

    </div>

  );
}

export default Submissions;