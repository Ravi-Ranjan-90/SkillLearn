const express = require("express");
const router = express.Router();

const testController = require("../controllers/testController");

const authMiddleware = require("../middleware/authMiddleware");

router.post("/submit", authMiddleware, testController.submitTest);

module.exports = router;