import { Link } from "react-router-dom";

function CourseCard({ course }) {
  return (
    <div className="border rounded-lg p-4 shadow-md">
      <img
        src={course.image}
        alt={course.title}
        className="w-full h-48 object-cover rounded"
      />

      <h2 className="text-xl font-bold mt-3">
        {course.title}
      </h2>

      <p className="mt-2 text-gray-600">
        {course.description}
      </p>

      <Link
        to={`/courses/${course._id}`}
        className="bg-blue-500 text-white px-4 py-2 inline-block mt-4 rounded"
      >
        View Course
      </Link>
    </div>
  );
}

export default CourseCard;