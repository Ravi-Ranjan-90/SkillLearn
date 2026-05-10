// // const Attempt = require("../models/Attempt");

// // exports.getUserAnalytics = async(req,res)=>{

// //  const attempts = await Attempt.find({
// //    userId:req.user.id
// //  });

// //  const total = attempts.length;

// //  const correct = attempts.filter(a=>a.isCorrect).length;

// //  const accuracy = (correct/total)*100;

// //  res.json({
// //    total,
// //    correct,
// //    accuracy
// //  });

// // };

// const Attempt = require("../models/Attempt");

// exports.getUserAnalytics = async (req,res)=>{

//  try{

//  const attempts = await Attempt.find({
//    userId:req.user.id
//  });

//  const total = attempts.length;

//  const correct = attempts.filter(a=>a.isCorrect).length;

//  const accuracy = total === 0 ? 0 : (correct/total)*100;

//  res.json({
//    total,
//    correct,
//    accuracy
//  });

//  }catch(error){

//  res.status(500).json({message:"Server error"});

//  }

// };

// const Attempt = require("../models/Attempt");

// exports.getUserAnalytics = async(req,res)=>{

//  const attempts = await Attempt.find({
//   userId:req.user.id
//  }).populate("subjectId");

//  const totalAttempts = attempts.length;

//  const averageScore = attempts.reduce((a,b)=>a+b.score,0)/totalAttempts || 0;

//  const accuracy = Math.round(averageScore);

//  const history = attempts.map(a=>({

//   subject:a.subjectId.name,
//   level:a.level,
//   score:a.score,
//   date:a.createdAt.toISOString().split("T")[0]

//  }));

//  res.json({

//   totalAttempts,
//   averageScore,
//   accuracy,
//   history

//  });

// };


const Attempt = require("../models/Attempt");

exports.getUserAnalytics = async (req,res)=>{

 try{

 const attempts = await Attempt.find({
  userId:req.user.id
 }).populate("subjectId");

 const totalAttempts = attempts.length;

 let totalScore = 0;

const history = attempts.map(a => {

 return {
   subject: a.subjectId ? a.subjectId.name : "Unknown",
   level: a.level || 0,
   score: a.score || 0,
   date: a.createdAt
     ? new Date(a.createdAt).toISOString().split("T")[0]
     : "N/A"
 }

});

 const averageScore = totalAttempts ? Math.round(totalScore / totalAttempts) : 0;

 res.json({
  totalAttempts,
  averageScore,
  history
 });

 }catch(error){

 console.log(error);

 res.status(500).json({
  message:"Server error"
 });

 }

};