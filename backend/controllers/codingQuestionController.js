const mongoose = require("mongoose");
const CodingQuestion = require("../models/CodingQuestion");
const executeCode = require("../utils/executeCode");
const Submission = require("../models/Submission");

// ✅ ADD NEW QUESTION (POSTMAN)
const addCodingQuestion = async (req, res) => {
  try {
    const question = await CodingQuestion.create(req.body); // ✅ FIXED
    res.status(201).json(question);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// ✅ GET ALL QUESTIONS
const getAllCodingQuestions = async (req, res) => {
  try {
    const questions = await CodingQuestion.find(); // ✅ FIXED
    res.json(questions);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// ✅ GET SINGLE QUESTION
const getCodingQuestionById = async (req, res) => {
  try {
    const questions = await CodingQuestion.findById(req.params.id);
    res.json(questions);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// ✅ RUN CODE (sample test case)
const runCode = async (req, res) => {
  try {
    const { code, language, input } = req.body;

    const output = await executeCode(code, language, input);
    res.json({ output });

  } catch (err) {
    res.json({ error: err.toString() });
  }
};

// ✅ SUBMIT CODE (ALL TEST CASES)
const submitCode = async (req, res) => {
  try {
    const { code, language, questionId } = req.body;

    // ✅ Temporary user (Postman testing)
    const userId =
      req.user?.id ||
      new mongoose.Types.ObjectId("65f1a2b3c4d5e6f789012345");

    const question = await CodingQuestion.findById(questionId);

    if (!question) {
      return res.status(404).json({ error: "Question not found" });
    }

    let finalStatus = "Accepted";
    let finalOutput = "";

    for (let test of question.testCases) {
      const result = await executeCode(code, language, test.input);

      if (result.trim() !== test.output.trim()) {
        finalStatus = "Wrong Answer";
        finalOutput = result;
        break;
      }
    }

    // ✅ SAVE SUBMISSION
    await Submission.create({
      userId,
      questionId,
      code,
      language,
      status: finalStatus,
      output: finalOutput,
    });

    res.json({ status: finalStatus });

  } catch (err) {
    res.json({ error: err.toString() });
  }
};

// ✅ GET USER SUBMISSIONS
const getUserSubmissions = async (req, res) => {
  try {
    const userId =
      req.user?.id ||
      new mongoose.Types.ObjectId("65f1a2b3c4d5e6f789012345");

    const submissions = await Submission.find({ userId })
      .populate("questionId", "title")
      .sort({ createdAt: -1 });

    res.json(submissions);

  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

module.exports = {
  addCodingQuestion,
  getAllCodingQuestions,
  getCodingQuestionById,
  runCode,
  submitCode,
  getUserSubmissions,
};