const express = require("express");

const {
  createCourse,
  getCourses,
  getSingleCourse,
  addModule,
  getMyLearning,
} = require("../controllers/courseController");

console.log({
  createCourse,
  getCourses,
  getSingleCourse,
  addModule,
  getMyLearning,
});

const router = express.Router();

router.post("/", createCourse);
router.get("/", getCourses);
router.get(
  "/my-learning",
  getMyLearning
);
router.get("/:id", getSingleCourse);
router.post("/:courseId/modules", addModule);

module.exports = router;