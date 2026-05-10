const express = require("express");
const router = express.Router();

const topicController = require("../controllers/topicController");

// Get topics by subject
router.get("/:subjectId", topicController.getTopics);

module.exports = router;