const Course = require("../models/Course");

const Module = require("../models/Module");

// const Enrollment = require(
//   "../models/Enrollment"
// );

// const jwt = require(
//   "jsonwebtoken"
// );

// exports.createCourse = async (
//   req,
//   res
// ) => {
//   try {
//     const course =
//       await Course.create(req.body);

//     res.status(201).json(course);
//   } catch (error) {
//     res.status(500).json({
//       message: error.message,
//     });
//   }
// };

// exports.getCourses = async (
//   req,
//   res
// ) => {
//   try {
//     const courses = await Course.find();

//     res.json(courses);
//   } catch (error) {
//     res.status(500).json({
//       message: error.message,
//     });
//   }
// };

// exports.getSingleCourse =
//   async (req, res) => {
//     try {
//       const course =
//         await Course.findById(
//           req.params.id
//         );

//       if (!course) {
//         return res.status(404).json({
//           message:
//             "Course not found",
//         });
//       }

//       res.json(course);
//     } catch (error) {
//       res.status(500).json({
//         message: error.message,
//       });
//     }
//   };

// exports.addModule = async (
//   req,
//   res
// ) => {
//   try {
//     const moduleData =
//       await Module.create({
//         ...req.body,

//         courseId:
//           req.params.courseId,
//       });

//     await Course.findByIdAndUpdate(
//       req.params.courseId,
//       {
//         $push: {
//           modules:
//             moduleData._id,
//         },
//       }
//     );

//     res.status(201).json(moduleData);
//   } catch (error) {
//     res.status(500).json({
//       message: error.message,
//     });
//   }
// };

// exports.getMyLearning =
//   async (req, res) => {
//     try {
//       const token =
//         req.headers.authorization;

//       if (!token) {
//         return res.status(401).json({
//           message:
//             "No token provided",
//         });
//       }

//       const decoded =
//         jwt.verify(
//           token.split(" ")[1],
//           process.env.JWT_SECRET
//         );

//       const courses =
//         await Enrollment.find({
//           userId: decoded.id,
//         }).populate("courseId");

//       res.json(courses);
//     } catch (error) {
//       res.status(500).json({
//         message: error.message,
//       });
//     }
//   };

const Enrollment = require(
  "../models/Enrollment"
);

exports.createCourse = async (
  req,
  res
) => {
  try {

    const course =
      await Course.create(req.body);

    res.status(201).json(course);

  } catch (error) {

    res.status(500).json({
      message:error.message
    });

  }
};

exports.getCourses = async (
  req,
  res
) => {
  try {

    const courses =
      await Course.find();

    res.json(courses);

  } catch (error) {

    res.status(500).json({
      message:error.message
    });

  }
};

// exports.getSingleCourse =
//   async (req,res) => {
//     try {

//       const course =
//         await Course.findById(
//           req.params.id
//         );

//       if(!course){
//         return res.status(404).json({
//           message:"Course not found"
//         });
//       }

//       res.json(course);

//     } catch(error){

//       res.status(500).json({
//         message:error.message
//       });

//     }
//   };

exports.getSingleCourse =
  async (req, res) => {
    try {

      const course =
        await Course.findById(
          req.params.id
        ).populate("modules");

      if (!course) {
        return res.status(404).json({
          message:
            "Course not found",
        });
      }

      res.json(course);

    } catch (error) {

      console.log(error);

      res.status(500).json({
        message: error.message,
      });

    }
  };

exports.addModule = async (
  req,
  res
) => {
  try {

    const moduleData =
      await Module.create({
        ...req.body,
        courseId:
          req.params.courseId,
      });

    await Course.findByIdAndUpdate(
      req.params.courseId,
      {
        $push:{
          modules:
            moduleData._id
        }
      }
    );

    res.status(201).json(
      moduleData
    );

  } catch(error){

    res.status(500).json({
      message:error.message
    });

  }
};

exports.getMyLearning =
  async (req, res) => {
    try {

      const userId =
        req.query.userId;

      if (!userId) {
        return res.status(400).json({
          message:
            "User ID required",
        });
      }

      const courses =
        await Enrollment.find({
          userId,
        }).populate("courseId");

      res.json(courses);

    } catch (error) {

      res.status(500).json({
        message: error.message,
      });

    }
  };