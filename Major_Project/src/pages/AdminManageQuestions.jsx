import { useEffect,useState } from "react";
import API_URL from "../config/api";

function AdminManageQuestions(){

 const [questions,setQuestions] = useState([]);

 useEffect(()=>{

 fetch(`${API_URL}/api/questions`)
 .then(res=>res.json())
 .then(data=>setQuestions(data))

 },[])

 const deleteQuestion = async(id)=>{

 await fetch(`${API_URL}/api/admin/question/${id}`,{
 method:"DELETE"
 });

 setQuestions(questions.filter(q=>q._id!==id));

 }

 return(

 <div className="p-10">

 <h1 className="text-xl font-bold mb-6">

 Manage Questions

 </h1>

 {questions.map(q=>(
 <div key={q._id} className="border p-4 mb-4">

 <p>{q.question}</p>

 <button
 onClick={()=>deleteQuestion(q._id)}
 className="bg-red-500 text-white px-4 py-1 mt-2"
 >

 Delete

 </button>

 </div>
 ))}

 </div>

 )

}

export default AdminManageQuestions;