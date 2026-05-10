// const express = require("express");

// const {
//   createCourse,
//   getCourses,
//   getSingleCourse,
//   addModule,
//   getMyLearning,
// } = require("../controllers/courseController");

// const authMiddleware = require(
//   "../middleware/authMiddleware"
// );

// const router = express.Router();

// router.post("/", createCourse);

// router.get("/", getCourses);

// router.get(
//   "/my-learning",
//   authMiddleware,
//   getMyLearning
// );

// router.get("/:id", getSingleCourse);

// router.post(
//   "/:courseId/modules",
//   addModule
// );

// module.exports = router;

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