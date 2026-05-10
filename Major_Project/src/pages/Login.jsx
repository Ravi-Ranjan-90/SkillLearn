
// import { useState } from "react";
// import { useNavigate } from "react-router-dom";

// function Login() {

//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");

//   const navigate = useNavigate();

//   const handleLogin = async () => {

//     const res = await fetch("http://localhost:5000/api/auth/login", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json"
//       },
//       body: JSON.stringify({
//         email,
//         password
//       })
//     });

//     const data = await res.json();

//     if(res.ok){
//       localStorage.setItem("token", data.token);
//       navigate("/");
//     } else {
//       alert(data.message || "Login failed");
//     }
//   };

//   return (

//     <div className="min-h-screen flex">

//       {/* Left Section - Illustration */}
//       <div className="hidden md:flex w-1/2 bg-gradient-to-br from-blue-600 to-indigo-700 text-white items-center justify-center p-10">

//         <div className="max-w-md text-center">
//           <h1 className="text-4xl font-bold mb-4">
//             Welcome Back 👋
//           </h1>

//           <p className="text-lg opacity-90">
//             Continue learning and track your progress with LearnSkill.
//           </p>

//           <div className="mt-10 text-7xl">
//             📚
//           </div>
//         </div>

//       </div>


//       {/* Right Section - Login Form */}
//       <div className="flex w-full md:w-1/2 items-center justify-center bg-gray-50">

//         <div className="bg-white shadow-xl rounded-xl p-10 w-[400px]">

//           <h2 className="text-3xl font-bold text-center mb-6 text-gray-800">
//             Login
//           </h2>

//           {/* Email */}
//           <div className="mb-4">
//             <label className="block text-gray-600 mb-1">
//               Email
//             </label>

//             <input
//               type="email"
//               placeholder="Enter your email"
//               className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
//               value={email}
//               onChange={(e)=>setEmail(e.target.value)}
//             />
//           </div>

//           {/* Password */}
//           <div className="mb-6">
//             <label className="block text-gray-600 mb-1">
//               Password
//             </label>

//             <input
//               type="password"
//               placeholder="Enter your password"
//               className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
//               value={password}
//               onChange={(e)=>setPassword(e.target.value)}
//             />
//           </div>

//           {/* Login Button */}
//           <button
//             onClick={handleLogin}
//             className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
//           >
//             Login
//           </button>

//           {/* Footer */}
//           <p className="text-center text-gray-500 mt-5 text-sm">
//             Don't have an account? 
//             <span className="text-blue-600 cursor-pointer ml-1">
//               Register
//             </span>
//           </p>

//         </div>

//       </div>

//     </div>

//   );
// }

// export default Login;

import { useState } from "react";

import { useNavigate } from "react-router-dom";
import API_URL from "../config/api";

function Login() {

  const [email, setEmail] =
    useState("");

  const [password, setPassword] =
    useState("");

  const navigate =
    useNavigate();

  const handleLogin =
    async () => {

      try {

        const res =
          await fetch(
            `${API_URL}/api/auth/login`,
            {
              method: "POST",

              headers: {
                "Content-Type":
                  "application/json",
              },

              body: JSON.stringify({
                email,
                password,
              }),
            }
          );

        const data =
          await res.json();
          console.log(data);

        if (res.ok) {

          localStorage.setItem(
            "token",
            data.token
          );
          console.log(
  localStorage.getItem("token")
);

          localStorage.setItem(
            "userId",
            data.user._id
          );

          navigate("/");

        } else {

          alert(
            data.message ||
            "Login failed"
          );

        }

      } catch (error) {

        console.log(error);

        alert(
          "Something went wrong"
        );

      }

    };

  return (

    <div className="min-h-screen flex">

      {/* Left Section */}
      <div className="hidden md:flex w-1/2 bg-gradient-to-br from-blue-600 to-indigo-700 text-white items-center justify-center p-10">

        <div className="max-w-md text-center">

          <h1 className="text-4xl font-bold mb-4">
            Welcome Back 👋
          </h1>

          <p className="text-lg opacity-90">
            Continue learning and track your progress with LearnSkill.
          </p>

          <div className="mt-10 text-7xl">
            📚
          </div>

        </div>

      </div>

      {/* Right Section */}
      <div className="flex w-full md:w-1/2 items-center justify-center bg-gray-50">

        <div className="bg-white shadow-xl rounded-xl p-10 w-[400px]">

          <h2 className="text-3xl font-bold text-center mb-6 text-gray-800">
            Login
          </h2>

          {/* Email */}
          <div className="mb-4">

            <label className="block text-gray-600 mb-1">
              Email
            </label>

            <input
              type="email"
              placeholder="Enter your email"
              className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={email}
              onChange={(e) =>
                setEmail(
                  e.target.value
                )
              }
            />

          </div>

          {/* Password */}
          <div className="mb-6">

            <label className="block text-gray-600 mb-1">
              Password
            </label>

            <input
              type="password"
              placeholder="Enter your password"
              className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={password}
              onChange={(e) =>
                setPassword(
                  e.target.value
                )
              }
            />

          </div>

          {/* Login Button */}
          <button
            onClick={handleLogin}
            className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
          >
            Login
          </button>

          {/* Footer */}
          <p className="text-center text-gray-500 mt-5 text-sm">
            Don't have an account?

            <span className="text-blue-600 cursor-pointer ml-1">
              Register
            </span>

          </p>

        </div>

      </div>

    </div>

  );
}

export default Login;