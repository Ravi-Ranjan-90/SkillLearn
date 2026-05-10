import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
// import { getSingleCourse } from "../services/courseService";

function CourseDetails() {
  const { id } = useParams();

  const [course, setCourse] = useState(null);

  useEffect(() => {
    fetchCourse();
  }, []);

  const fetchCourse = async () => {
    const data = await getSingleCourse(id);

    setCourse(data);
  };

  if (!course) {
    return <h1>Loading...</h1>;
  }

  return (
    <div className="p-6">
      <img
        src={course.image}
        alt={course.title}
        className="w-full h-96 object-cover rounded"
      />

      <h1 className="text-4xl font-bold mt-4">
        {course.title}
      </h1>

      <p className="mt-4 text-lg text-gray-600">
        {course.description}
      </p>

      <h2 className="text-2xl font-bold mt-8 mb-4">
        Modules
      </h2>

      <div className="space-y-4">
        {course.modules.map((module) => (
          <div
            key={module._id}
            className="border p-4 rounded"
          >
            <h3 className="text-xl font-semibold">
              {module.title}
            </h3>

            <p>{module.duration}</p>

            <a
              href={module.videoUrl}
              target="_blank"
              rel="noreferrer"
              className="text-blue-500 block mt-2"
            >
              Watch Video
            </a>

            <a
              href={module.notesUrl}
              target="_blank"
              rel="noreferrer"
              className="text-green-500 block mt-2"
            >
              Download Notes
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CourseDetails;