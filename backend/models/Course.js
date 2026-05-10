// const mongoose = require("mongoose");

// const courseSchema = new mongoose.Schema(
//   {
//     title: {
//       type: String,
//       required: true,
//     },

//     description: {
//       type: String,
//       required: true,
//     },

//     image: String,

//     instructor: String,

//     duration: String,

//     price: {
//       type: Number,
//       required: true,
//     },

//     modules: [
//       {
//         type:
//           mongoose.Schema.Types.ObjectId,

//         ref: "Module",
//       },
//     ],
//   },
//   {
//     timestamps: true,
//   }
// );

// module.exports = mongoose.model(
//   "Course",
//   courseSchema
// );

// const mongoose = require("mongoose");

// const courseSchema = new mongoose.Schema({
//   title: String,

//   description: String,

//   price: Number,

//   thumbnail: String,

//   videos: [
//     {
//       title: String,

//       videoUrl: String,
//     },
//   ],
// });

// module.exports = mongoose.model(
//   "Course",
//   courseSchema
// );
const mongoose =
  require("mongoose");

const courseSchema =
  new mongoose.Schema({

    title:String,

    description:String,

    thumbnail:String,

    price:Number,

    modules:[
      {
        type:
          mongoose.Schema.Types.ObjectId,

        ref:"Module"
      }
    ]

  });

module.exports =
  mongoose.model(
    "Course",
    courseSchema
  );