import { Link } from "react-router-dom";

function CodingHome() {
  return (
    <div className="p-6">

      <h1 className="text-3xl font-bold mb-6">
        Coding Practice 🚀
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

        {/* Questions */}
        <Link to="/coding">
          <div className="p-6 border rounded-xl shadow hover:shadow-lg transition">
            <h2 className="text-xl font-semibold">
              🧩 Solve Coding Questions
            </h2>
            <p className="text-gray-500 mt-2">
              Practice DSA problems with test cases
            </p>
          </div>
        </Link>

        {/* Submissions */}
        <Link to="/submissions">
          <div className="p-6 border rounded-xl shadow hover:shadow-lg transition">
            <h2 className="text-xl font-semibold">
              📊 View Submissions
            </h2>
            <p className="text-gray-500 mt-2">
              Track your progress and history
            </p>
          </div>
        </Link>

      </div>
    </div>
  );
}

export default CodingHome;