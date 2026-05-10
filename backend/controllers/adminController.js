const Question = require("../models/Question");

exports.addQuestion = async (req, res) => {
  try {
    const question = await Question.create(req.body);
    res.json(question);
  } catch (error) {
    res.status(500).json(error);
  }
};

exports.updateQuestion = async (req, res) => {
  try {
    const question = await Question.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

    res.json(question);
  } catch (error) {
    res.status(500).json(error);
  }
};

exports.deleteQuestion = async (req, res) => {
  try {
    await Question.findByIdAndDelete(req.params.id);

    res.json({ message: "Question deleted successfully" });
  } catch (error) {
    res.status(500).json(error);
  }
};