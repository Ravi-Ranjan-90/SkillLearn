const Course = require("../models/Course");
const Module = require("../models/Module");

exports.createCourse = async (req, res) => {
  try {
    const course = await Course.create(req.body);

    res.status(201).json(course);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.getCourses = async (req, res) => {
  try {
    const courses = await Course.find();

    res.json(courses);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.getSingleCourse = async (req, res) => {
  try {
    const course = await Course.findById(req.params.id).populate(
      "modules"
    );

    res.json(course);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.addModule = async (req, res) => {
  try {
    const moduleData = await Module.create({
      ...req.body,
      courseId: req.params.courseId,
    });

    await Course.findByIdAndUpdate(req.params.courseId, {
      $push: {
        modules: moduleData._id,
      },
    });

    res.status(201).json(moduleData);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};