const Question = require("../models/Question");

exports.getQuestions = async (req, res) => {
  try {
    const { subjectId, level } = req.params;

    const questions = await Question.find({
      subjectId,
      level
    });

    res.json(questions);
  } catch (error) {
    res.status(500).json(error);
  }
};

exports.addQuestion = async (req, res) => {
  try {
    const question = await Question.create(req.body);
    res.json(question);
  } catch (error) {
    res.status(500).json(error);
  }
};

// const Question = require("../models/Question");

// exports.getQuestions = async (req, res) => {
//   try {
//     const { subjectId, level } = req.params;

//     const questions = await Question.find({
//       subjectId,
//       level: Number(level), // ✅ important
//     });

//     res.json(questions);
//   } catch (error) {
//     console.error(error); // ✅ add this
//     res.status(500).json({ message: error.message });
//   }
// };