import { useEffect, useState } from "react";
import CourseCard from "../components/CourseCard";
// import { getCourses } from "../services/courseService";

function Courses() {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    fetchCourses();
  }, []);

  const fetchCourses = async () => {
    const data = await getCourses();

    setCourses(data);
  };

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">
        All Courses
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {courses.map((course) => (
          <CourseCard key={course._id} course={course} />
        ))}
      </div>
    </div>
  );
}

export default Courses;