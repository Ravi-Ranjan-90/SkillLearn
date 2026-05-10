// import { useLocation } from "react-router-dom";

// function Result(){

//  const location = useLocation();

//  const { score, correct } = location.state;

//  return(

//  <div className="flex flex-col items-center mt-20">

//  <h1 className="text-3xl font-bold">

//  Test Result

//  </h1>

//  <p className="mt-6">Score: {score}%</p>

//  <p>Correct Answers: {correct}</p>

//  </div>

//  )

// }

// export default Result;

import { useLocation, useNavigate } from "react-router-dom";

function Result(){

 const location = useLocation();
 const navigate = useNavigate();

 const { score } = location.state || {};

 return(

 <div className="flex flex-col items-center mt-20">

 <h1 className="text-3xl font-bold">
 Test Completed
 </h1>

 <p className="mt-6 text-xl">
 Score: {score}%
 </p>

 <button
 onClick={()=>navigate("/")}
 className="bg-blue-500 text-white px-6 py-2 mt-6"
 >
 Go Home
 </button>

 </div>

 )

}

export default Result;