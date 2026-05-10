const mongoose = require("mongoose");

const progressSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User"
  },
  subjectId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Subject"
  },
  topicId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Topic"
  },
  levelCompleted: Number,
  score: Number
});

module.exports = mongoose.model("Progress", progressSchema);