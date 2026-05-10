// import { useEffect, useState } from "react";

// import { useParams } from "react-router-dom";

// function WatchCourse() {
//   const { courseId } = useParams();

//   const [course, setCourse] =
//     useState(null);

//   const [currentVideo, setCurrentVideo] =
//     useState(null);

//   useEffect(() => {
//     fetchCourse();
//   }, []);

//   const fetchCourse = async () => {
//     try {
//       const response = await fetch(
//         `http://localhost:5000/api/courses/${courseId}`
//       );

//       const data =
//         await response.json();

//       setCourse(data);

//       if (
//         data?.videos &&
//         data.videos.length > 0
//       ) {
//         setCurrentVideo(
//           data.videos[0]
//         );
//       }
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
//     <div className="flex flex-col lg:flex-row min-h-screen">
//       <div className="lg:w-3/4 p-5">
//         {currentVideo ? (
//           <>
//             <iframe
//               width="100%"
//               height="500"
//               src={
//                 currentVideo.videoUrl
//               }
//               title={
//                 currentVideo.title
//               }
//               allowFullScreen
//               className="rounded-lg"
//             ></iframe>

//             <h1 className="text-3xl font-bold mt-5">
//               {currentVideo.title}
//             </h1>

//             <p className="mt-3 text-gray-600">
//               {
//                 currentVideo.description
//               }
//             </p>
//           </>
//         ) : (
//           <h2 className="text-2xl font-semibold">
//             No Videos Available
//           </h2>
//         )}
//       </div>

//       <div className="lg:w-1/4 border-l p-5">
//         <h2 className="text-2xl font-bold mb-5">
//           Course Videos
//         </h2>

//         <div className="space-y-4">
//           {course?.videos?.map(
//             (video, index) => (
//               <div
//                 key={index}
//                 onClick={() =>
//                   setCurrentVideo(
//                     video
//                   )
//                 }
//                 className={`border p-3 rounded-lg cursor-pointer hover:bg-gray-100 ${
//                   currentVideo?.title ===
//                   video.title
//                     ? "bg-blue-100 border-blue-500"
//                     : ""
//                 }`}
//               >
//                 <h3 className="font-semibold">
//                   {index + 1}.{" "}
//                   {video.title}
//                 </h3>
//               </div>
//             )
//           )}
//         </div>
//       </div>
//     </div>
//   );
// }

// export default WatchCourse;

// import {
//   useEffect,
//   useState
// } from "react";

// import {
//   useParams
// } from "react-router-dom";

// function WatchCourse() {

//   const { courseId } =
//   useParams();

//   const [course,setCourse] =
//     useState(null);

//   useEffect(() => {

//     fetchCourse();

//   }, []);

//   const fetchCourse =
//     async () => {

//       try {

//         const response =
//   await fetch(
//     `http://localhost:5000/api/courses/${courseId}`
//   );

//         const data =
//           await response.json();

//         console.log(data);

//         setCourse(data);

//       } catch(error){

//         console.log(error);

//       }
//     };

//   if(!course){
//     return <h1>Loading...</h1>
//   }

//   return (

//     <div className="flex">

//       {/* Sidebar */}

//       <div className="w-[300px] h-screen overflow-y-auto bg-gray-100 p-5">

//         <h2 className="text-2xl font-bold mb-5">
//           {course.title}
//         </h2>

//         {course.modules?.map(
//           (module)=>(
//             <div
//               key={module._id}
//               className="bg-white p-3 rounded mb-3 shadow"
//             >
//               {module.title}
//             </div>
//           )
//         )}

//       </div>

//       {/* Video Area */}

//       <div className="flex-1 p-10">

//         <video
//           controls
//           className="w-full rounded"
//           src={
//             course.modules?.[0]
//               ?.videoUrl
//           }
//         />

//       </div>

//     </div>
//   );
// }

// export default WatchCourse;

import {
  useEffect,
  useState
} from "react";

import {
  useParams
} from "react-router-dom";

function WatchCourse() {

  const { courseId } =
    useParams();

  const [course,setCourse] =
    useState(null);

  const [currentVideo,setCurrentVideo] =
    useState(null);

  useEffect(() => {

    fetchCourse();

  }, []);

  const fetchCourse =
    async () => {

      try {

        const response =
          await fetch(
            `http://localhost:5000/api/courses/${courseId}`
          );

        const data =
          await response.json();

        console.log(data);

        setCourse(data);

        if (
          data.videos &&
          data.videos.length > 0
        ) {
          setCurrentVideo(
            data.videos[0]
          );
        }

      } catch(error){

        console.log(error);

      }
    };

  if(!course){
    return <h1>Loading...</h1>
  }

  return (

    <div className="flex">

      {/* Sidebar */}

      <div className="w-[300px] h-screen overflow-y-auto bg-gray-100 p-5">

        <h2 className="text-2xl font-bold mb-5">
          {course.title}
        </h2>

        {course.videos?.map(
          (video,index)=>(

            <div
              key={index}
              onClick={()=>
                setCurrentVideo(video)
              }
              className="bg-white p-3 rounded mb-3 shadow cursor-pointer hover:bg-blue-100"
            >

              {video.title}

            </div>

          )
        )}

      </div>

      {/* Video Area */}

      <div className="flex-1 p-10">

        <h2 className="text-2xl font-bold mb-5">
          {currentVideo?.title}
        </h2>

        <iframe
          width="100%"
          height="500"
          src={
            currentVideo?.videoUrl
          }
          title="Course Video"
          allowFullScreen
          className="rounded"
        />

      </div>

    </div>
  );
}

export default WatchCourse;