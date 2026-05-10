// const fs = require("fs");
// const OpenAI = require("openai");

// const extractText = require("../utils/extractText");

// const openai = new OpenAI({
//   apiKey: process.env.OPENAI_API_KEY,
// });

// exports.checkATS = async (req, res) => {
//   try {
//     const file = req.file;
//     const { jdText } = req.body;

//     if (!file) {
//       return res.status(400).json({
//         success: false,
//         message: "Resume is required",
//       });
//     }

//     const resumeText = await extractText(
//       file.path,
//       file.mimetype
//     );

//     const prompt = `
// Analyze this resume against the job description.

// Return ONLY valid JSON.

// Format:
// {
//   "atsScore": number,
//   "matchedSkills": [],
//   "missingSkills": [],
//   "suggestions": [],
//   "grammarIssues": [],
//   "finalVerdict": ""
// }

// Job Description:
// ${jdText}

// Resume:
// ${resumeText}
// `;

//     const response = await openai.chat.completions.create({
//       model: "gpt-4.1-mini",
//       messages: [
//         {
//           role: "user",
//           content: prompt,
//         },
//       ],
//       temperature: 0.3,
//     });

//     const aiResponse = response.choices[0].message.content;

//     fs.unlinkSync(file.path);

//     res.status(200).json({
//       success: true,
//       result: JSON.parse(aiResponse),
//     });
//   } catch (error) {
//     console.log(error);

//     res.status(500).json({
//       success: false,
//       message: error.message,
//     });
//   }
// };

// const extractText = require("../utils/extractText");
// const { CohereClientV2 } = require("cohere-ai");

// const cohere = new CohereClientV2({
//   token: process.env.COHERE_API_KEY,
// });

// exports.checkATS = async (req, res) => {
//   try {
//     if (!req.file) {
//       return res.status(400).json({
//         error: "Resume file is required",
//       });
//     }

//     const resumeText = await extractText(
//       req.file.path,
//       req.file.mimetype
//     );

//     const { jobDescription } = req.body;

//     const prompt = `
// Analyze the following resume according to the job description.

// Return ONLY valid JSON in this exact format:

// {
//   "atsScore": number,
//   "matchedSkills": [],
//   "missingSkills": [],
//   "suggestions": [],
//   "grammarIssues": [],
//   "finalVerdict": ""
// }

// Job Description:
// ${jobDescription}

// Resume:
// ${resumeText}
// `;

//     const response = await cohere.chat({
//       model: "command-a-03-2025",
//       messages: [
//         {
//           role: "user",
//           content: prompt,
//         },
//       ],
//     });

//     const rawText = response.message.content[0].text;

//     const cleanedText = rawText
//       .replace(/```json/g, "")
//       .replace(/```/g, "")
//       .trim();

//     // const parsedResult = JSON.parse(cleanedText);
//     let parsedResult;

// try {
//   parsedResult = JSON.parse(cleanedText);
// } catch (err) {
//   parsedResult = {
//     atsScore: 70,
//     matchedSkills: [],
//     missingSkills: [],
//     suggestions: [cleanedText],
//     grammarIssues: [],
//     finalVerdict: cleanedText,
//   };
// }

//     res.status(200).json({
//       result: parsedResult,
//     });

//   } catch (error) {
//     console.log(error);

//     res.status(500).json({
//       error: "Something went wrong",
//     });
//   }
// };

const extractText = require("../utils/extractText");
const { CohereClientV2 } = require("cohere-ai");

const cohere = new CohereClientV2({
  token: process.env.COHERE_API_KEY,
});

exports.checkATS = async (req, res) => {
  try {
    console.log("ATS API HIT");

    if (!req.file) {
      return res.status(400).json({
        error: "Resume file is required",
      });
    }

    console.log("File Received:", req.file.originalname);

    const resumeText = await extractText(
      req.file.path,
      req.file.mimetype
    );

    console.log("Resume Text Extracted");

    const { jobDescription } = req.body;

    console.log("Job Description:", jobDescription);

    const prompt = `
You are an ATS Resume Analyzer.

IMPORTANT:
Return ONLY valid JSON.
Do not write explanation.
Do not write markdown.
Do not use \`\`\`.

Return format:

{
  "atsScore": 85,
  "matchedSkills": ["React"],
  "missingSkills": ["Docker"],
  "suggestions": ["Improve projects"],
  "grammarIssues": ["Minor grammar issue"],
  "finalVerdict": "Good resume"
}

Job Description:
${jobDescription}

Resume:
${resumeText}
`;

    console.log("Sending Request To Cohere...");

    const response = await cohere.chat({
      model: "command-a-03-2025",
      messages: [
        {
          role: "user",
          content: prompt,
        },
      ],
    });

    console.log("Cohere Response Received");

    const rawText = response.message.content[0].text;

    // console.log("RAW TEXT:");
    // console.log(rawText);

    const cleanedText = rawText
      .replace(/```json/g, "")
      .replace(/```/g, "")
      .trim();

    let parsedResult;

    try {
      parsedResult = JSON.parse(cleanedText);

      console.log("JSON Parsed Successfully");

    } catch (err) {

      console.log("JSON Parse Failed");

      parsedResult = {
        atsScore: 70,
        matchedSkills: [],
        missingSkills: [],
        suggestions: [cleanedText],
        grammarIssues: [],
        finalVerdict: cleanedText,
      };
    }

    res.status(200).json({
      result: parsedResult,
    });

  } catch (error) {

    console.log("BACKEND ERROR:");
    console.log(error);

    res.status(500).json({
      error: "Something went wrong",
    });
  }
};