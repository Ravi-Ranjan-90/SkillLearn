const mongoose = require("mongoose");

const submissionSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },

  questionId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Question",
  },

  code: String,
  language: String,

  status: {
    type: String,
    enum: ["Accepted", "Wrong Answer", "Error"],
  },

  output: String,

  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Submission", submissionSchema);