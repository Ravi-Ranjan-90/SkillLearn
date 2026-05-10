const mongoose = require("mongoose");

const testCaseSchema = new mongoose.Schema({
  input: String,
  output: String,
});

const questionSchema = new mongoose.Schema({
  title: String,
  description: String,
  difficulty: {
    type: String,
    enum: ["Easy", "Medium", "Hard"],
  },
  topic: String,
  company: [String],

  inputFormat: String,
  outputFormat: String,
  constraints: String,

  testCases: [testCaseSchema],
});

module.exports = mongoose.model("Question", questionSchema);