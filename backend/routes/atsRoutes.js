const express = require("express");
const multer = require("multer");

const { checkATS } = require("../controllers/atsController");

const router = express.Router();

const upload = multer({
  dest: "uploads/",
});

router.post(
  "/check-ats",
  upload.single("resume"),
  checkATS
);

module.exports = router;