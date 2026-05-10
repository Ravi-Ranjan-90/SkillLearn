

// import { useEffect, useState } from "react";

// function Analytics(){

//  const [analytics,setAnalytics] = useState(null);

//  useEffect(()=>{

//  const token = localStorage.getItem("token");

//  fetch("http://localhost:5000/api/analytics/user",{
//    headers:{
//      authorization:`Bearer ${token}`
//    }
//  })
//  .then(res=>res.json())
//  .then(data=>setAnalytics(data))

//  },[])

//  if(!analytics) return <div>Loading...</div>

//  return(

//  <div className="p-10">

//  <h1 className="text-2xl font-bold mb-6">
//  Analytics Dashboard
//  </h1>

//  <p>Total Questions Attempted: {analytics.total}</p>

//  <p>Correct Answers: {analytics.correct}</p>

//  <p>Accuracy: {analytics.accuracy}%</p>

//  </div>

//  )

// }

// export default Analytics;

// import { useEffect, useState } from "react";
// import { LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid, BarChart, Bar, ResponsiveContainer } from "recharts";

// function Analytics(){

//  const [analytics,setAnalytics] = useState(null);

//  useEffect(()=>{

//  const token = localStorage.getItem("token");

//  fetch("http://localhost:5000/api/analytics/user",{
//    headers:{
//      Authorization:`Bearer ${token}`
//    }
//  })
//  .then(res=>res.json())
//  .then(data=>setAnalytics(data))

//  },[])

//  if(!analytics) return <div className="p-10">Loading...</div>

//  return(

//  <div className="p-10 bg-gray-100 min-h-screen">

//  <h1 className="text-3xl font-bold mb-8">
//  Analytics Dashboard
//  </h1>

//  {/* SUMMARY CARDS */}

//  <div className="grid grid-cols-3 gap-6 mb-10">

//  <div className="bg-blue-500 text-white p-6 rounded shadow">
//  <h2 className="text-lg">Total Attempts</h2>
//  <p className="text-3xl font-bold">{analytics.totalAttempts}</p>
//  </div>

//  <div className="bg-green-500 text-white p-6 rounded shadow">
//  <h2 className="text-lg">Average Score</h2>
//  <p className="text-3xl font-bold">{analytics.averageScore}%</p>
//  </div>

//  <div className="bg-purple-500 text-white p-6 rounded shadow">
//  <h2 className="text-lg">Tests Taken</h2>
//  <p className="text-3xl font-bold">{analytics.history.length}</p>
//  </div>

//  </div>

//  {/* SCORE PROGRESS CHART */}

//  <div className="bg-white p-6 rounded shadow mb-10">

//  <h2 className="text-xl font-semibold mb-4">
//  Score Progress
//  </h2>

//  <ResponsiveContainer width="100%" height={300}>

//  <LineChart data={analytics.history}>

//  <CartesianGrid strokeDasharray="3 3" />

//  <XAxis dataKey="date" />

//  <YAxis />

//  <Tooltip />

//  <Line type="monotone" dataKey="score" stroke="#3b82f6" strokeWidth={3} />

//  </LineChart>

//  </ResponsiveContainer>

//  </div>

//  {/* LEVEL PERFORMANCE */}

//  <div className="bg-white p-6 rounded shadow mb-10">

//  <h2 className="text-xl font-semibold mb-4">
//  Level Performance
//  </h2>

//  <ResponsiveContainer width="100%" height={300}>

//  <BarChart data={analytics.history}>

//  <CartesianGrid strokeDasharray="3 3" />

//  <XAxis dataKey="level" />

//  <YAxis />

//  <Tooltip />

//  <Bar dataKey="score" fill="#10b981" />

//  </BarChart>

//  </ResponsiveContainer>

//  </div>

//  {/* ATTEMPT HISTORY */}

//  <div className="bg-white p-6 rounded shadow">

//  <h2 className="text-xl font-semibold mb-4">
//  Attempt History
//  </h2>

//  <table className="w-full text-center border">

//  <thead className="bg-gray-200">

//  <tr>
//  <th className="p-2">Date</th>
//  <th className="p-2">Subject</th>
//  <th className="p-2">Level</th>
//  <th className="p-2">Score</th>
//  </tr>

//  </thead>

//  <tbody>

//  {analytics.history.map((a,i)=>(
//  <tr key={i} className="border-t">

//  <td className="p-2">{a.date}</td>
//  <td className="p-2">{a.subject}</td>
//  <td className="p-2">{a.level}</td>
//  <td className="p-2 font-semibold">{a.score}%</td>

//  </tr>
//  ))}

//  </tbody>

//  </table>

//  </div>

//  </div>

//  )

// }

// export default Analytics;

import { useEffect, useState } from "react";
import {
 LineChart,
 Line,
 XAxis,
 YAxis,
 Tooltip,
 CartesianGrid,
 BarChart,
 Bar,
 ResponsiveContainer
} from "recharts";

function Analytics(){

 const [analytics,setAnalytics] = useState(null);

 useEffect(()=>{

 const token = localStorage.getItem("token");

 fetch("http://localhost:5000/api/analytics/user",{
   headers:{
     Authorization:`Bearer ${token}`
   }
 })
 .then(res=>res.json())
 .then(data=>setAnalytics(data))

 },[])

 if(!analytics) return <div className="p-10">Loading...</div>;



 // -------- LEVEL PERFORMANCE DATA --------

 const levelPerformance = [0,1,2].map(level => {

 const attempts = analytics.history.filter(a => a.level === level);

 const avg =
 attempts.length
 ? Math.round(
 attempts.reduce((sum,a)=>sum + a.score,0)/attempts.length
 )
 : 0;

 return {
 level:`Level ${level}`,
 score:avg
 };

 });



 return(

 <div className="p-10 bg-gray-100 min-h-screen">

 <h1 className="text-3xl font-bold mb-8">
 Analytics Dashboard
 </h1>



 {/* SUMMARY CARDS */}

 <div className="grid grid-cols-3 gap-6 mb-10">

 <div className="bg-blue-500 text-white p-6 rounded shadow">
 <h2 className="text-lg">Total Attempts</h2>
 <p className="text-3xl font-bold">{analytics.totalAttempts}</p>
 </div>

 <div className="bg-green-500 text-white p-6 rounded shadow">
 <h2 className="text-lg">Average Score</h2>
 <p className="text-3xl font-bold">{analytics.averageScore}%</p>
 </div>

 <div className="bg-purple-500 text-white p-6 rounded shadow">
 <h2 className="text-lg">Tests Taken</h2>
 <p className="text-3xl font-bold">{analytics.history.length}</p>
 </div>

 </div>



 {/* SCORE PROGRESS CHART */}

 <div className="bg-white p-6 rounded shadow mb-10">

 <h2 className="text-xl font-semibold mb-4">
 Score Progress
 </h2>

 <ResponsiveContainer width="100%" height={300}>

 <LineChart data={analytics.history}>

 <CartesianGrid strokeDasharray="3 3" />

 <XAxis dataKey="date" />

 <YAxis />

 <Tooltip />

 <Line
 type="monotone"
 dataKey="score"
 stroke="#3b82f6"
 strokeWidth={3}
 />

 </LineChart>

 </ResponsiveContainer>

 </div>



 {/* LEVEL PERFORMANCE CHART */}

 <div className="bg-white p-6 rounded shadow mb-10">

 <h2 className="text-xl font-semibold mb-4">
 Level Performance
 </h2>

 <ResponsiveContainer width="100%" height={300}>

 <BarChart data={levelPerformance}>

 <CartesianGrid strokeDasharray="3 3" />

 <XAxis dataKey="level" />

 <YAxis />

 <Tooltip />

 <Bar dataKey="score" fill="#10b981" />

 </BarChart>

 </ResponsiveContainer>

 </div>



 {/* ATTEMPT HISTORY */}

 <div className="bg-white p-6 rounded shadow">

 <h2 className="text-xl font-semibold mb-4">
 Attempt History
 </h2>

 <table className="w-full text-center border">

 <thead className="bg-gray-200">

 <tr>
 <th className="p-2">Date</th>
 <th className="p-2">Subject</th>
 <th className="p-2">Level</th>
 <th className="p-2">Score</th>
 </tr>

 </thead>

 <tbody>

 {analytics.history.map((a,i)=>(
 <tr key={i} className="border-t">

 <td className="p-2">{a.date}</td>
 <td className="p-2">{a.subject}</td>
 <td className="p-2">{a.level}</td>
 <td className="p-2 font-semibold">{a.score}%</td>

 </tr>
 ))}

 </tbody>

 </table>

 </div>

 </div>

 )

}

export default Analytics;