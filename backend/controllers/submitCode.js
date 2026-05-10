const Submission = require("../models/Submission");

const submitCode = async (req, res) => {
  try {
    const { code, language, questionId } = req.body;
    const userId = req.user?.id || "dummyUserId"; // later JWT

    const question = await Question.findById(questionId);

    let finalStatus = "Accepted";
    let finalOutput = "";

    for (let test of question.testCases) {
      const result = await executeCode(code, language, test.input);

      if (result.trim() !== test.output.trim()) {
        finalStatus = "Wrong Answer";
        finalOutput = result;
        break;
      }
    }

    // ✅ SAVE SUBMISSION
    await Submission.create({
      userId,
      questionId,
      code,
      language,
      status: finalStatus,
      output: finalOutput,
    });

    res.json({ status: finalStatus });

  } catch (err) {
    res.json({ error: err.toString() });
  }
};