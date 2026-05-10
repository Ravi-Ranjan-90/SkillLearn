

// import { useEffect, useState } from "react";

// import { useParams } from "react-router-dom";

// import { getSingleCourse } from "../services/courseService";

// function CourseDetails() {
//   const { id } = useParams();

//   const [course, setCourse] =
//     useState(null);

//   useEffect(() => {
//     fetchCourse();
//   }, []);

//   const fetchCourse = async () => {
//     try {
//       const data =
//         await getSingleCourse(id);

//       setCourse(data);
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   const handlePayment = async () => {
//     try {
//       const response = await fetch(
//         "http://localhost:5000/api/payments/create-order",
//         {
//           method: "POST",

//           headers: {
//             "Content-Type":
//               "application/json",
//           },

//           body: JSON.stringify({
//             courseId: course._id,
//           }),
//         }
//       );

//       const data =
//         await response.json();

//       const options = {
//         key:
//           import.meta.env
//             .VITE_RAZORPAY_KEY,

//         amount: data.order.amount,

//         currency: "INR",

//         name: "SkillLearn",

//         description: course.title,

//         order_id: data.order.id,

//         handler: async function (
//           response
//         ) {
//           const verifyRes =
//             await fetch(
//               "http://localhost:5000/api/payments/verify-payment",
//               {
//                 method: "POST",

//                 headers: {
//                   "Content-Type":
//                     "application/json",
//                 },

//                 body: JSON.stringify({
//                   ...response,

//                   courseId:
//                     course._id,

//                   userId:
//                     localStorage.getItem(
//                       "userId"
//                     ),
//                 }),
//               }
//             );

//           const verifyData =
//             await verifyRes.json();

//           if (verifyData.success) {
//             window.location.href = `/watch/${course._id}`;
//           }
//         },
//       };

//       const razorpay =
//         new window.Razorpay(options);

//       razorpay.open();
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   if (!course) {
//     return (
//       <h1 className="text-center mt-10 text-3xl">
//         Loading...
//       </h1>
//     );
//   }

//   return (
//     <div className="max-w-6xl mx-auto px-5 py-10">
//       <img
//         src={course.thumbnail}
//         alt={course.title}
//         className="w-full h-96 object-cover rounded-xl"
//       />

//       <h1 className="text-5xl font-bold mt-6">
//         {course.title}
//       </h1>

//       <p className="mt-5 text-lg text-gray-600">
//         {course.description}
//       </p>

//       <div className="mt-8 border rounded-xl p-6 shadow-md">
//         <h2 className="text-3xl font-bold mb-5">
//           Course Includes
//         </h2>

//         <div className="space-y-3 text-lg">
//           <p>
//             🎥 Videos:{" "}
//             {course?.videos?.length || 0}
//           </p>

//           <p>
//             ⏳ Duration:{" "}
//             {course.duration ||
//               "Not Added"}
//           </p>

//           <p>
//             👨‍🏫 Instructor:{" "}
//             {course.instructor ||
//               "SkillLearn Team"}
//           </p>

//           <p>
//             📱 Mobile + Desktop
//             Access
//           </p>

//           <p>
//             ♾️ Lifetime Access
//           </p>
//         </div>
//       </div>

//       {course?.videos?.length > 0 && (
//         <div className="mt-10">
//           <h2 className="text-3xl font-bold mb-6">
//             Course Videos
//           </h2>

//           <div className="space-y-8">
//             {course.videos.map(
//               (video, index) => (
//                 <div
//                   key={index}
//                   className="border rounded-xl p-5 shadow-md"
//                 >
//                   <h3 className="text-2xl font-semibold mb-4">
//                     {video.title}
//                   </h3>

//                   <iframe
//                     width="100%"
//                     height="450"
//                     src={
//                       video.videoUrl
//                     }
//                     title={
//                       video.title
//                     }
//                     allowFullScreen
//                     className="rounded-xl"
//                   ></iframe>
//                 </div>
//               )
//             )}
//           </div>
//         </div>
//       )}

//       <div className="mt-10">
//         <h2 className="text-4xl font-bold text-blue-600">
//           ₹{course.price}
//         </h2>

//         <button
//           onClick={handlePayment}
//           className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-lg mt-5 text-lg"
//         >
//           Buy Now
//         </button>
//       </div>
//     </div>
//   );
// }

// export default CourseDetails;

import { useEffect, useState } from "react";

import { useParams } from "react-router-dom";

import { getSingleCourse } from "../services/courseService";
import API_URL from "../config/api";

function CourseDetails() {

  const { id } =
    useParams();

  const [course, setCourse] =
    useState(null);

  const [loading, setLoading] =
    useState(true);

  useEffect(() => {

    fetchCourse();

  }, []);

  const fetchCourse = async () => {

    try {

      const data =
        await getSingleCourse(id);

      setCourse(data);

    } catch (error) {

      console.log(error);

    } finally {

      setLoading(false);

    }
  };

  const handlePayment = async () => {

    try {

      const response =
        await fetch(
          `${API_URL}/api/payments/create-order`,
          {
            method: "POST",

            headers: {
              "Content-Type":
                "application/json",
            },

            body: JSON.stringify({
              courseId:
                course._id,
            }),
          }
        );

      const data =
        await response.json();

      const options = {

        key:
          import.meta.env
            .VITE_RAZORPAY_KEY,

        amount:
          data.order.amount,

        currency:
          "INR",

        name:
          "SkillLearn",

        description:
          course.title,

        order_id:
          data.order.id,

        handler:
          async function (
            response
          ) {

            const verifyRes =
              await fetch(
                `${API_URL}/api/payments/verify-payment`,
                {
                  method:
                    "POST",

                  headers: {
                    "Content-Type":
                      "application/json",
                  },

                  body:
                    JSON.stringify({
                      ...response,

                      courseId:
                        course._id,

                      userId:
                        localStorage.getItem(
                          "userId"
                        ),
                    }),
                }
              );

            const verifyData =
              await verifyRes.json();

            if (
              verifyData.success
            ) {

              window.location.href =
                `/watch/${course._id}`;

            }
          },
      };

      const razorpay =
        new window.Razorpay(
          options
        );

      razorpay.open();

    } catch (error) {

      console.log(error);

    }
  };

  if (loading) {

    return (

      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-blue-100">

        <div className="flex flex-col items-center">

          <div className="w-16 h-16 border-4 border-blue-600 border-t-transparent rounded-full animate-spin"></div>

          <p className="mt-5 text-xl font-semibold text-blue-700">
            Loading Course...
          </p>

        </div>

      </div>

    );
  }

  return (

    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-100 pb-20">

      {/* HERO SECTION */}

      <div className="relative bg-gradient-to-r from-blue-700 to-blue-900 text-white overflow-hidden">

        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>

        <div className="max-w-7xl mx-auto px-6 py-16 relative z-10">

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">

            {/* LEFT CONTENT */}

            <div>

              <span className="bg-white/20 px-4 py-2 rounded-full text-sm font-medium backdrop-blur-md">

                Premium Course

              </span>

              <h1 className="text-5xl md:text-6xl font-extrabold leading-tight mt-6">

                {course.title}

              </h1>

              <p className="mt-6 text-lg text-blue-100 leading-relaxed">

                {course.description}

              </p>

              <div className="flex flex-wrap gap-4 mt-8">

                <div className="bg-white/10 px-5 py-3 rounded-2xl backdrop-blur-md">
                  🎥 {course?.videos?.length || 0} Videos
                </div>

                <div className="bg-white/10 px-5 py-3 rounded-2xl backdrop-blur-md">
                  ⏳ {course.duration || "Self Paced"}
                </div>

                <div className="bg-white/10 px-5 py-3 rounded-2xl backdrop-blur-md">
                  👨‍🏫 {course.instructor || "SkillLearn Team"}
                </div>

              </div>

              <div className="mt-10 flex items-center gap-6">

                <h2 className="text-5xl font-bold">
                  ₹{course.price}
                </h2>

                <button
                  onClick={handlePayment}
                  className="bg-white text-blue-700 px-8 py-4 rounded-2xl font-bold text-lg shadow-lg hover:scale-105 hover:shadow-2xl transition duration-300"
                >
                  Buy Now
                </button>

              </div>

            </div>

            {/* RIGHT IMAGE */}

            <div>

              <img
                src={course.thumbnail}
                alt={course.title}
                className="w-full h-[450px] object-cover rounded-3xl shadow-2xl border border-white/20"
              />

            </div>

          </div>

        </div>

      </div>

      {/* COURSE CONTENT */}

      <div className="max-w-7xl mx-auto px-6 mt-16">

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">

          {/* LEFT SECTION */}

          <div className="lg:col-span-2">

            {/* VIDEOS */}

            {course?.videos?.length > 0 && (

              <div className="bg-white rounded-3xl shadow-xl p-8 border border-blue-100">

                <h2 className="text-3xl font-bold text-blue-900 mb-8">

                  Course Content

                </h2>

                <div className="space-y-8">

                  {course.videos.map(
                    (video, index) => (

                      <div
                        key={index}
                        className="border border-blue-100 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition duration-300"
                      >

                        <div className="p-5 bg-blue-50 border-b border-blue-100">

                          <h3 className="text-2xl font-bold text-blue-900">

                            {index + 1}. {video.title}

                          </h3>

                        </div>

                        <iframe
                          width="100%"
                          height="450"
                          src={video.videoUrl}
                          title={video.title}
                          allowFullScreen
                        ></iframe>

                      </div>

                    )
                  )}

                </div>

              </div>

            )}

          </div>

          {/* RIGHT SIDEBAR */}

          <div>

            <div className="bg-white rounded-3xl shadow-xl p-8 border border-blue-100 sticky top-10">

              <h2 className="text-3xl font-bold text-blue-900 mb-8">

                Course Includes

              </h2>

              <div className="space-y-5 text-lg text-blue-800">

                <div className="flex items-center gap-3">
                  🎥
                  <span>
                    {course?.videos?.length || 0} Video Lectures
                  </span>
                </div>

                <div className="flex items-center gap-3">
                  📱
                  <span>
                    Mobile + Desktop Access
                  </span>
                </div>

                <div className="flex items-center gap-3">
                  ♾️
                  <span>
                    Lifetime Access
                  </span>
                </div>

                <div className="flex items-center gap-3">
                  🏆
                  <span>
                    Certificate of Completion
                  </span>
                </div>

                <div className="flex items-center gap-3">
                  👨‍💻
                  <span>
                    Hands-on Learning
                  </span>
                </div>

              </div>

              <button
                onClick={handlePayment}
                className="w-full bg-blue-700 hover:bg-blue-800 text-white py-4 rounded-2xl mt-10 text-lg font-bold shadow-lg hover:shadow-2xl transition duration-300"
              >
                Enroll Now
              </button>

            </div>

          </div>

        </div>

      </div>

    </div>
  );
}

export default CourseDetails;