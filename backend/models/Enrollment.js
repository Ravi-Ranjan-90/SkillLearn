const mongoose = require("mongoose");

const enrollmentSchema =
  new mongoose.Schema(
    {
      userId: {
        type:
          mongoose.Schema.Types
            .ObjectId,

        ref: "User",

        required: true,
      },

      courseId: {
        type:
          mongoose.Schema.Types
            .ObjectId,

        ref: "Course",

        required: true,
      },

      paymentId: {
        type: String,

        required: true,
      },

      orderId: {
        type: String,

        required: true,
      },

      status: {
        type: String,

        default: "completed",
      },
    },
    {
      timestamps: true,
    }
  );

module.exports = mongoose.model(
  "Enrollment",
  enrollmentSchema
);