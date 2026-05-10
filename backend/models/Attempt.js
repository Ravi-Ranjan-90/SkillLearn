// const mongoose = require("mongoose");

// const attemptSchema = new mongoose.Schema({
//   userId: {
//     type: mongoose.Schema.Types.ObjectId,
//     ref: "User"
//   },
//   questionId: {
//     type: mongoose.Schema.Types.ObjectId,
//     ref: "Question"
//   },
//   selectedAnswer: Number,
//   isCorrect: Boolean
// });

// module.exports = mongoose.model("Attempt", attemptSchema);

// const mongoose = require("mongoose");

// const attemptSchema = new mongoose.Schema({

//  userId:{
//   type:mongoose.Schema.Types.ObjectId,
//   ref:"User"
//  },

//  subjectId:{
//   type:mongoose.Schema.Types.ObjectId,
//   ref:"Subject"
//  },

//  level:Number,

//  score:Number,

//  totalQuestions:Number,

//  createdAt:{
//   type:Date,
//   default:Date.now
//  }

// });

// module.exports = mongoose.model("Attempt",attemptSchema);

const mongoose = require("mongoose");

const attemptSchema = new mongoose.Schema({

 userId:{
  type:mongoose.Schema.Types.ObjectId,
  ref:"User"
 },

 subjectId:{
  type:mongoose.Schema.Types.ObjectId,
  ref:"Subject"
 },

 level:Number,

 score:Number,

 totalQuestions:Number

},{
 timestamps:true
});

module.exports = mongoose.model("Attempt",attemptSchema);