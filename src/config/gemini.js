const apiKey = "AIzaSyCprwQcUlQ0j7H61FdzEmnnoIIxU0WwJZM";

/// To run this code you need to install the following dependencies:
// npm install @google/genai mime
// npm install -D @types/node

import { GoogleGenerativeAI } from "@google/generative-ai";

const run = async (prompt) => {
  const genAI = new GoogleGenerativeAI(apiKey);

  const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

  try {
    const result = await model.generateContent(prompt);
    const response = await result.response;

    const text = response.text();
    console.log(text);
    return text;
  } catch (error) {
    console.log(`Error generating text: ${error.message}`);
    return error;
  }
};

export default run;
