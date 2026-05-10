const mongoose = require("mongoose");

const moduleSchema = new mongoose.Schema(
  {
    courseId: {
      type:
        mongoose.Schema.Types.ObjectId,

      ref: "Course",

      required: true,
    },

    title: {
      type: String,
      required: true,
    },

    description: String,

    videoUrl: {
      type: String,
      required: true,
    },

    duration: String,

    isPreview: {
      type: Boolean,
      default: false,
    },

    order: Number,
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model(
  "Module",
  moduleSchema
);