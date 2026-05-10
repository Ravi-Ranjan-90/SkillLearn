import { useEffect,useState } from "react";

function AdminManageQuestions(){

 const [questions,setQuestions] = useState([]);

 useEffect(()=>{

 fetch("http://localhost:5000/api/questions")
 .then(res=>res.json())
 .then(data=>setQuestions(data))

 },[])

 const deleteQuestion = async(id)=>{

 await fetch(`http://localhost:5000/api/admin/question/${id}`,{
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