import { useState } from "react";

function AdminAddQuestion(){

 const [question,setQuestion] = useState("");
 const [options,setOptions] = useState(["","","",""]);
 const [correctAnswer,setCorrectAnswer] = useState(0);

 const addQuestion = async()=>{

 await fetch(`${API_URL}/api/admin/question`,{

 method:"POST",

 headers:{
 "Content-Type":"application/json"
 },

 body:JSON.stringify({
 question,
 options,
 correctAnswer,
 level:1
 })

 });

 alert("Question added");

 }

 return(

 <div className="p-10">

 <h1 className="text-xl font-bold mb-6">

 Add Question

 </h1>

 <input
 className="border p-2 mb-4 w-full"
 placeholder="Question"
 onChange={(e)=>setQuestion(e.target.value)}
 />

 {options.map((opt,index)=>(
 <input
 key={index}
 className="border p-2 mb-2 w-full"
 placeholder={`Option ${index+1}`}
 onChange={(e)=>{

 const newOptions=[...options];
 newOptions[index]=e.target.value;
 setOptions(newOptions);

 }}
 />
 ))}

 <button
 onClick={addQuestion}
 className="bg-blue-600 text-white px-6 py-2"
 >

 Add Question

 </button>

 </div>

 )

}

export default AdminAddQuestion;