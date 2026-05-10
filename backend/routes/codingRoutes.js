const express = require("express");
const router = express.Router();

const {
  addCodingQuestion, 
  getAllCodingQuestions,
  getCodingQuestionById,
  runCode,
  submitCode,
  getUserSubmissions,
} = require("../controllers/codingQuestionController");

// ✅ POST routes
// POST
router.post("/add", addCodingQuestion);
router.post("/run", runCode);
router.post("/submit", submitCode);

// GET
router.get("/submissions", getUserSubmissions);
router.get("/", getAllCodingQuestions);
router.get("/:id", getCodingQuestionById);

module.exports = router;