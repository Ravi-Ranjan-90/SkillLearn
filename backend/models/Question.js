const mongoose = require("mongoose");

const questionSchema = new mongoose.Schema({
  subjectId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Subject"
  },
  topicId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Topic"
  },
  question: String,
  options: [String],
  correctAnswer: Number,
  level: Number
});

module.exports = mongoose.model("Question", questionSchema);