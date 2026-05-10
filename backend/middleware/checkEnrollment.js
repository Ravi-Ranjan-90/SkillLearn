const Enrollment = require(
  "../models/Enrollment"
);

const checkEnrollment = async (
  req,
  res,
  next
) => {
  try {
    const enrollment =
      await Enrollment.findOne({
        userId: req.user.id,

        courseId:
          req.params.courseId,
      });

    if (!enrollment) {
      return res.status(403).json({
        message:
          "Purchase course first",
      });
    }

    next();
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

module.exports = checkEnrollment;