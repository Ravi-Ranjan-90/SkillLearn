// import { useState } from "react";
// import { useNavigate } from "react-router-dom";

// function Register() {

//   const navigate = useNavigate();

//   const [name,setName] = useState("");
//   const [email,setEmail] = useState("");
//   const [password,setPassword] = useState("");

//   const handleRegister = async () => {

//     const res = await fetch("http://localhost:5000/api/auth/register",{

//       method:"POST",

//       headers:{
//         "Content-Type":"application/json"
//       },

//       body:JSON.stringify({
//         name,
//         email,
//         password
//       })

//     });

//     const data = await res.json();

//     alert("Registration Successful");

//     navigate("/login");

//   };

//   return (

//     <div className="flex flex-col items-center mt-20">

//       <h1 className="text-2xl font-bold mb-6">
//         Register
//       </h1>

//       <input
//         className="border p-2 mb-4"
//         placeholder="Name"
//         onChange={(e)=>setName(e.target.value)}
//       />

//       <input
//         className="border p-2 mb-4"
//         placeholder="Email"
//         onChange={(e)=>setEmail(e.target.value)}
//       />

//       <input
//         type="password"
//         className="border p-2 mb-4"
//         placeholder="Password"
//         onChange={(e)=>setPassword(e.target.value)}
//       />

//       <button
//         onClick={handleRegister}
//         className="bg-green-600 text-white px-6 py-2"
//       >
//         Register
//       </button>

//     </div>

//   );

// }

// export default Register;

import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Register() {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = async () => {
    try {
      const res = await fetch("http://localhost:5000/api/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, password }),
      });

      if (res.ok) {
        alert("Registration Successful");
        navigate("/login");
      } else {
        alert("Registration failed. Please try again.");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <div className="max-w-md w-full bg-white p-8 rounded-xl shadow-lg border border-gray-100">
        
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-extrabold text-gray-900">Create Account</h1>
          <p className="text-gray-500 mt-2">Join us today! It only takes a minute.</p>
        </div>

        {/* Form Fields */}
        <div className="space-y-5">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
            <input
              type="text"
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none transition-all"
              placeholder="John Doe"
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
            <input
              type="email"
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none transition-all"
              placeholder="you@example.com"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
            <input
              type="password"
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none transition-all"
              placeholder="••••••••"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          {/* Action Button */}
          <button
            onClick={handleRegister}
            className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-3 rounded-lg shadow-md hover:shadow-lg transition-all duration-200 mt-4"
          >
            Sign Up
          </button>
        </div>

        {/* Footer Link */}
        <p className="text-center text-sm text-gray-600 mt-6">
          Already have an account?{" "}
          <button 
            onClick={() => navigate("/login")}
            className="text-green-600 font-semibold hover:underline"
          >
            Log in
          </button>
        </p>
      </div>
    </div>
  );
}

export default Register;