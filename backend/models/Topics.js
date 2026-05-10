const mongoose = require("mongoose");

const topicSchema = new mongoose.Schema({
  subjectId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Subject"
  },
  name: String
});

module.exports = mongoose.model("Topic", topicSchema);