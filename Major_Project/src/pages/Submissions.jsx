import { useEffect, useState } from "react";

function Submissions() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/coding/submissions")
      .then((res) => res.json())
      .then((res) => setData(res));
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-xl font-bold mb-4">Submission History</h1>

      {data.map((s) => (
        <div key={s._id} className="border p-4 mb-2 rounded">
          <h2 className="font-semibold">{s.questionId?.title}</h2>

          <p>
            Status:{" "}
            {s.status === "Accepted" ? (
              <span className="text-green-600">Accepted</span>
            ) : (
              <span className="text-red-500">Wrong Answer</span>
            )}
          </p>

          <p className="text-sm text-gray-500">
            {new Date(s.createdAt).toLocaleString()}
          </p>
        </div>
      ))}
    </div>
  );
}

export default Submissions;