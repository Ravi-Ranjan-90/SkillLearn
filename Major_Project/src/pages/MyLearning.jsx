import { useEffect, useState } from "react";

import { Link } from "react-router-dom";
import API_URL from "../config/api";

function MyLearning() {
  const [courses, setCourses] =
    useState([]);

  useEffect(() => {
    fetchMyCourses();
  }, []);

  const fetchMyCourses =
    async () => {
      try {
const response =
  await fetch(
    `http://localhost:5000/api/courses/my-learning?userId=${localStorage.getItem("userId")}`
  );
        const data =
          await response.json();

        console.log(data);

        if (
          Array.isArray(data)
        ) {
          setCourses(data);
        } else {
          setCourses([]);
        }
      } catch (error) {
        console.log(error);

        setCourses([]);
      }
    };

  return (
    <div className="max-w-7xl mx-auto px-5 py-10">
      <h1 className="text-5xl font-bold mb-10">
        My Learning
      </h1>

      

      {courses.length === 0 ? (
        <h2 className="text-2xl text-gray-500">
          No Purchased Courses
        </h2>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {courses.map((item) => (
            <div
              key={item._id}
              className="border rounded-xl p-4 shadow-lg"
            >
              <img
                src={
                  item.courseId
                    ?.thumbnail
                }
                alt={
                  item.courseId
                    ?.title
                }
                className="w-full h-52 object-cover rounded-lg"
              />

              <h2 className="text-2xl font-bold mt-5">
                {
                  item.courseId
                    ?.title
                }
              </h2>

              <Link
                to={`/watch/${item.courseId?._id}`}
                className="bg-blue-600 text-white px-5 py-2 rounded mt-5 inline-block"
              >
                Continue Learning
              </Link>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default MyLearning;