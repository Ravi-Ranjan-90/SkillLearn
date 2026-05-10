const express = require("express");

const {
  createCourse,
  getCourses,
  getSingleCourse,
  addModule,
} = require("../controllers/courseController");

const router = express.Router();

router.post("/", createCourse);
router.get("/", getCourses);
router.get("/:id", getSingleCourse);
router.post("/:courseId/modules", addModule);

module.exports = router;