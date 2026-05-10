import { useEffect,useState } from "react";
import Navbar from "../components/Navbar";

function Dashboard(){

 const [analytics,setAnalytics] = useState(null);

 useEffect(()=>{

 const token = localStorage.getItem("token");

 fetch("http://localhost:5000/api/analytics/user",{

 headers:{
 authorization:token
 }

 })
 .then(res=>res.json())
 .then(data=>setAnalytics(data))

 },[])

 if(!analytics) return <div>Loading...</div>

 return(

 <div>

 <Navbar/>

 <div className="p-10">

 <h1 className="text-2xl font-bold mb-6">

 Student Dashboard

 </h1>

 <div className="grid grid-cols-3 gap-6">

 <div className="p-4 border">

 <h2>Total Questions</h2>
 <p>{analytics.total}</p>

 </div>

 <div className="p-4 border">

 <h2>Correct Answers</h2>
 <p>{analytics.correct}</p>

 </div>

 <div className="p-4 border">

 <h2>Accuracy</h2>
 <p>{analytics.accuracy}%</p>

 </div>

 </div>

 </div>

 </div>

 )

}

export default Dashboard;