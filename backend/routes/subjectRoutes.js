const express = require("express");
const router = express.Router();

const subjectController = require("../controllers/subjectController");

// Get all subjects
router.get("/", subjectController.getSubjects);
router.post("/", subjectController.addSubject);


module.exports = router;