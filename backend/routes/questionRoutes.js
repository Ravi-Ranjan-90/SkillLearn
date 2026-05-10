const express = require("express");
const router = express.Router();

const questionController = require("../controllers/questionController");

// Get questions by topic and level
// router.get("/:topicId/:level", questionController.getQuestions);
router.get("/:subjectId/:level", questionController.getQuestions);

// Add new question
router.post("/", questionController.addQuestion);

module.exports = router;