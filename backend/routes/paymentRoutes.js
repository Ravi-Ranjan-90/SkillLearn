// const express = require("express");

// const {
//   createOrder,
//   verifyPayment,
// } = require("../controllers/paymentController");

// const router = express.Router();

// router.post("/create-order", createOrder);
// router.get(
//   "/check-enrollment/:userId/:courseId",
//   checkEnrollment
// );

// router.post(
//   "/verify-payment",
//   verifyPayment
// );

// module.exports = router;

const express = require("express");

const {
  createOrder,
  verifyPayment,
  checkEnrollment,
} = require(
  "../controllers/paymentController"
);

const router = express.Router();

router.post(
  "/create-order",
  createOrder
);

router.post(
  "/verify-payment",
  verifyPayment
);

router.get(
  "/check-enrollment/:userId/:courseId",
  checkEnrollment
);

module.exports = router;