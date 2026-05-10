// const { GoogleGenerativeAI } = require("@google/generative-ai");

// const genAI = new GoogleGenerativeAI("AIzaSyC8XCXcvtWydXtyBRJqRfHI2p1JxHOfNoM");

// async function run() {
//   try {
//     const model = genAI.getGenerativeModel({
//       model: "gemini-1.5-flash-latest",
//     });

//     const result = await model.generateContent("Hello");

//     console.log(result.response.text());
//   } catch (error) {
//     console.log(error);
//   }
// }

// run();

const { CohereClient } = require("cohere-ai");

const cohere = new CohereClient({
  token: "cohere_xYRXjRC9Jw1FpxIPmhvWfNhiGqSQrO7Thw8hDbyH3sC5sc",
});

(async () => {
  try {
    const response = await cohere.chat({
      model: "command-a-03-2025",
      message: "hello world!",
    });

    console.log(response);

  } catch (error) {
    console.log(error);
  }
})();