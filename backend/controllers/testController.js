// const Attempt = require("../models/Attempt");
// const Question = require("../models/Question");

// exports.submitTest = async(req,res)=>{

//  const {answers} = req.body;

//  let correct = 0;

//  for(let ans of answers){

//    const question = await Question.findById(ans.questionId);

//    const isCorrect = question.correctAnswer === ans.selectedAnswer;

//    if(isCorrect) correct++;

//    await Attempt.create({
//       userId:req.user.id,
//       questionId:ans.questionId,
//       selectedAnswer:ans.selectedAnswer,
//       isCorrect
//    })

//  }

//  const score = (correct/answers.length)*100;

//  res.json({
//    score,
//    correct
//  })

// };

const Attempt = require("../models/Attempt");
const Question = require("../models/Question");

exports.submitTest = async (req,res)=>{

 const { answers, subjectId, level } = req.body;

 let correct = 0;

 for(let ans of answers){

   const question = await Question.findById(ans.questionId);

   const isCorrect = question.correctAnswer === ans.selectedAnswer;

   if(isCorrect) correct++;

 }

 const score = Math.round((correct / answers.length) * 100);

 await Attempt.create({

  userId:req.user.id,
  subjectId,
  level,
  score,
  totalQuestions:answers.length

 });

 res.json({
   score,
   correct
 });

};