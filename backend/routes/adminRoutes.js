const express = require("express");
const router = express.Router();

const adminController = require("../controllers/adminController");

router.post("/question", adminController.addQuestion);

router.put("/question/:id", adminController.updateQuestion);

router.delete("/question/:id", adminController.deleteQuestion);

module.exports = router;