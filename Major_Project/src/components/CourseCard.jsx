// import { Link } from "react-router-dom";

// function CourseCard({ course }) {
//   return (
//     <div className="border rounded-xl overflow-hidden shadow-lg bg-white">
//       <img
//         src={course.image}
//         alt={course.title}
//         className="w-full h-52 object-cover"
//       />

//       <div className="p-5">
//         <h2 className="text-2xl font-bold">
//           {course.title}
//         </h2>

//         <p className="text-gray-600 mt-3 line-clamp-3">
//           {course.description}
//         </p>

//         <div className="mt-4">
//           <p className="font-semibold">
//             👨‍🏫 {course.instructor}
//           </p>

//           <p className="font-semibold mt-1">
//             🎥 {course.modules.length}
//             Videos
//           </p>

//           <p className="text-blue-600 text-2xl font-bold mt-3">
//             ₹{course.price}
//           </p>
//         </div>

//         <Link
//           to={`/courses/${course._id}`}
//           className="bg-blue-600 text-white px-5 py-2 rounded mt-5 inline-block"
//         >
//           View Course
//         </Link>
//       </div>
//     </div>
//   );
// }

// export default CourseCard;

import { Link } from "react-router-dom";

function CourseCard({ course }) {
  return (
    <div className="border rounded-xl overflow-hidden shadow-lg bg-white">
      <img
        src={course.thumbnail}
        alt={course.title}
        className="w-full h-52 object-cover"
      />

      <div className="p-5">
        <h2 className="text-2xl font-bold">
          {course.title}
        </h2>

        <p className="text-gray-600 mt-3 line-clamp-3">
          {course.description}
        </p>

        <div className="mt-4">
          <p className="font-semibold">
            👨‍🏫 {course.instructor}
          </p>

          <p className="font-semibold mt-1">
            🎥{" "}
            🎥 {course.videos?.length || 0} 
            Videos
          </p>

          <p className="text-blue-600 text-2xl font-bold mt-3">
            ₹{course.price}
          </p>
        </div>

        <Link
          to={`/courses/${course._id}`}
          className="bg-blue-600 text-white px-5 py-2 rounded mt-5 inline-block"
        >
          View Course
        </Link>
      </div>
    </div>
  );
}

export default CourseCard;