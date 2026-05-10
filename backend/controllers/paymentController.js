// const razorpay = require(
//   "../config/razorpay"
// );

// const crypto = require("crypto");

// const Course = require("../models/Course");

// const Enrollment = require(
//   "../models/Enrollment"
// );

// exports.createOrder = async (
//   req,
//   res
// ) => {
//   try {
//     const { courseId } = req.body;

//     const course =
//       await Course.findById(courseId);

//     const options = {
//       amount: course.price * 100,

//       currency: "INR",

//       receipt: `receipt_${Date.now()}`,
//     };

//     const order =
//       await razorpay.orders.create(
//         options
//       );

//     res.json({
//       success: true,

//       order,

//       course,
//     });
//   } catch (error) {
//     res.status(500).json({
//       message: error.message,
//     });
//   }
// };

// exports.verifyPayment = async (
//   req,
//   res
// ) => {
//   try {
//     const {
//       razorpay_order_id,

//       razorpay_payment_id,

//       razorpay_signature,

//       courseId,

//       userId,
//     } = req.body;

//     const sign =
//       razorpay_order_id +
//       "|" +
//       razorpay_payment_id;

//     const expectedSign = crypto
//       .createHmac(
//         "sha256",
//         process.env
//           .RAZORPAY_KEY_SECRET
//       )
//       .update(sign.toString())
//       .digest("hex");

//     const isAuthenticated =
//       expectedSign ===
//       razorpay_signature;

//     if (!isAuthenticated) {
//       return res.status(400).json({
//         success: false,
//       });
//     }

//     await Enrollment.create({
//       userId,

//       courseId,

//       paymentId:
//         razorpay_payment_id,

//       orderId: razorpay_order_id,
//     });

//     res.json({
//       success: true,
//     });
//   } catch (error) {
//     res.status(500).json({
//       message: error.message,
//     });
//   }
// };

// const razorpay = require(
//   "../config/razorpay"
// );

// const crypto = require("crypto");

// const Course = require("../models/Course");

// const Enrollment = require(
//   "../models/Enrollment"
// );

// exports.createOrder = async (
//   req,
//   res
// ) => {
//   try {
//     const { courseId } = req.body;

//     const course =
//       await Course.findById(courseId);

//     if (!course) {
//       return res.status(404).json({
//         success: false,

//         message:
//           "Course not found",
//       });
//     }

//     const options = {
//       amount: course.price * 100,

//       currency: "INR",

//       receipt: `receipt_${Date.now()}`,
//     };

//     const order =
//       await razorpay.orders.create(
//         options
//       );

//     res.json({
//       success: true,

//       order,

//       course,
//     });
//   } catch (error) {
//     res.status(500).json({
//       success: false,

//       message: error.message,
//     });
//   }
// };

// exports.verifyPayment = async (
//   req,
//   res
// ) => {
//   try {
//     const {
//       razorpay_order_id,

//       razorpay_payment_id,

//       razorpay_signature,

//       courseId,

//       userId,
//     } = req.body;

//     const sign =
//       razorpay_order_id +
//       "|" +
//       razorpay_payment_id;

//     const expectedSign = crypto
//       .createHmac(
//         "sha256",
//         process.env
//           .RAZORPAY_KEY_SECRET
//       )
//       .update(sign.toString())
//       .digest("hex");

//     const isAuthenticated =
//       expectedSign ===
//       razorpay_signature;

//     if (!isAuthenticated) {
//       return res.status(400).json({
//         success: false,

//         message:
//           "Payment verification failed",
//       });
//     }

//     const alreadyEnrolled =
//       await Enrollment.findOne({
//         userId,
//         courseId,
//       });

//     if (!alreadyEnrolled) {
//       await Enrollment.create({
//         userId,

//         courseId,

//         paymentId:
//           razorpay_payment_id,

//         orderId:
//           razorpay_order_id,
//       });
//     }

//     res.json({
//       success: true,

//       message:
//         "Payment successful",
//     });
//   } catch (error) {
//     res.status(500).json({
//       success: false,

//       message: error.message,
//     });
//   }
// };

const razorpay = require(
  "../config/razorpay"
);

const crypto = require("crypto");

const Course = require("../models/Course");

const Enrollment = require(
  "../models/Enrollment"
);

exports.createOrder = async (
  req,
  res
) => {
  try {
    const { courseId } = req.body;

    const course =
      await Course.findById(courseId);

    if (!course) {
      return res.status(404).json({
        success: false,

        message:
          "Course not found",
      });
    }

    const options = {
      amount: course.price * 100,

      currency: "INR",

      receipt: `receipt_${Date.now()}`,
    };

    const order =
      await razorpay.orders.create(
        options
      );

    res.json({
      success: true,

      order,

      course,
    });
  } catch (error) {
    res.status(500).json({
      success: false,

      message: error.message,
    });
  }
};

exports.verifyPayment = async (
  req,
  res
) => {
  try {
    const {
      razorpay_order_id,

      razorpay_payment_id,

      razorpay_signature,

      courseId,

      userId,
    } = req.body;

    const sign =
      razorpay_order_id +
      "|" +
      razorpay_payment_id;

    const expectedSign = crypto
      .createHmac(
        "sha256",
        process.env
          .RAZORPAY_KEY_SECRET
      )
      .update(sign.toString())
      .digest("hex");

    const isAuthenticated =
      expectedSign ===
      razorpay_signature;

    if (!isAuthenticated) {
      return res.status(400).json({
        success: false,

        message:
          "Payment verification failed",
      });
    }

    const alreadyEnrolled =
      await Enrollment.findOne({
        userId,
        courseId,
      });

    if (!alreadyEnrolled) {
      await Enrollment.create({
        userId,

        courseId,

        paymentId:
          razorpay_payment_id,

        orderId:
          razorpay_order_id,
      });
    }

    res.json({
      success: true,

      message:
        "Payment successful",
    });
  } catch (error) {
    res.status(500).json({
      success: false,

      message: error.message,
    });
  }
};

exports.checkEnrollment =
  async (req, res) => {
    try {
      const { userId, courseId } =
        req.params;

      const enrollment =
        await Enrollment.findOne({
          userId,
          courseId,
        });

      res.json({
        enrolled: !!enrollment,
      });
    } catch (error) {
      res.status(500).json({
        success: false,

        message: error.message,
      });
    }
  };