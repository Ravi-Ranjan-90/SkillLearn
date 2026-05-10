// import { useEffect, useState } from "react";

// import CourseCard from "../components/CourseCard";
// import { Link } from "react-router-dom";

// import { getCourses } from "../services/courseService";

// function Courses() {
//   const [courses, setCourses] =
//     useState([]);

//   const [loading, setLoading] =
//     useState(true);

//   useEffect(() => {
//     fetchCourses();
//   }, []);

//   const fetchCourses = async () => {
//     try {
//       const data = await getCourses();

//       setCourses(data);
//     } catch (error) {
//       console.log(error);
//     } finally {
//       setLoading(false);
//     }
//   };

//   if (loading) {
//     return (
//       <h1 className="text-center mt-10 text-3xl">
//         Loading...
//       </h1>
//     );
//   }

//   return (
//     <div className="max-w-7xl mx-auto px-5 py-10">
//       <h1 className="text-5xl font-bold text-center mb-10">
//         Explore Courses
//       </h1>
// <Link
//   to="/my-learning"
//   className="text-lg font-semibold hover:text-blue-600"
// >
//   My Learning
// </Link>

//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//         {courses.map((course) => (
//           <CourseCard
//             key={course._id}
//             course={course}
//           />
//         ))}
//       </div>
//     </div>
//   );
// }

// export default Courses;


import { useEffect, useState } from "react";

import CourseCard from "../components/CourseCard";

import { Link } from "react-router-dom";

import { getCourses } from "../services/courseService";

function Courses() {

  const [courses, setCourses] =
    useState([]);

  const [loading, setLoading] =
    useState(true);

  useEffect(() => {

    fetchCourses();

  }, []);

  const fetchCourses = async () => {

    try {

      const data =
        await getCourses();

      setCourses(data);

    } catch (error) {

      console.log(error);

    } finally {

      setLoading(false);

    }
  };

  if (loading) {

    return (

      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-blue-100">

        <div className="flex flex-col items-center">

          <div className="w-16 h-16 border-4 border-blue-600 border-t-transparent rounded-full animate-spin"></div>

          <p className="mt-5 text-xl font-semibold text-blue-700">
            Loading Courses...
          </p>

        </div>

      </div>

    );
  }

  return (

    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-100">

      {/* HERO SECTION */}

      <div className="relative overflow-hidden bg-gradient-to-r from-blue-700 to-blue-900 text-white">

        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>

        <div className="max-w-7xl mx-auto px-6 py-20 relative z-10">

          <div className="flex flex-col lg:flex-row items-center justify-between gap-10">

            {/* LEFT CONTENT */}

            <div className="max-w-2xl">

              <h1 className="text-5xl md:text-6xl font-extrabold leading-tight mb-6">

                Learn Skills That Build
                <span className="block text-blue-200">
                  Your Career 🚀
                </span>

              </h1>

              <p className="text-lg md:text-xl text-blue-100 leading-relaxed">

                Explore high-quality courses designed to help you master DSA,
                Web Development, AI, MERN Stack, and more with a premium learning experience.

              </p>

              <div className="flex flex-wrap gap-4 mt-8">

                <Link
                  to="/my-learning"
                  className="bg-white text-blue-700 px-7 py-3 rounded-full font-semibold shadow-lg hover:scale-105 hover:shadow-2xl transition duration-300"
                >
                  My Learning
                </Link>

                <button
                  className="border border-white/40 px-7 py-3 rounded-full font-semibold hover:bg-white/10 transition duration-300"
                >
                  Explore Courses
                </button>

              </div>

            </div>

            {/* HERO IMAGE */}

            <div className="hidden md:block">

              <img
                src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3"
                alt="Learning"
                className="w-[500px] rounded-3xl shadow-2xl object-cover"
              />

            </div>

          </div>

        </div>

      </div>

      {/* COURSES SECTION */}

      <div className="max-w-7xl mx-auto px-6 py-16">

        {/* SECTION HEADER */}

        <div className="text-center mb-14">

          <h2 className="text-4xl md:text-5xl font-extrabold text-blue-900 mb-4">

            Explore Courses

          </h2>

          <p className="text-blue-700 text-lg max-w-2xl mx-auto">

            Discover expertly crafted courses to improve your technical skills,
            crack interviews, and accelerate your learning journey.

          </p>

        </div>

        {/* EMPTY STATE */}

        {courses.length === 0 ? (

          <div className="bg-white rounded-3xl shadow-xl p-14 text-center max-w-2xl mx-auto border border-blue-100">

            <div className="text-7xl mb-6">
              📚
            </div>

            <h2 className="text-3xl font-bold text-blue-900 mb-3">

              No Courses Available

            </h2>

            <p className="text-blue-700 text-lg">

              Courses will appear here once added by the admin.

            </p>

          </div>

        ) : (

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">

            {courses.map((course) => (

              <div
                key={course._id}
                className="transform hover:-translate-y-2 hover:scale-[1.02] transition duration-300"
              >

                <div className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl border border-blue-100 h-full">

                  <CourseCard
                    course={course}
                  />

                </div>

              </div>

            ))}

          </div>

        )}

      </div>

    </div>
  );
}

export default Courses;