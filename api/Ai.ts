import { GoogleGenerativeAI } from "@google/generative-ai";

const apiKey = process.env.EXPO_PUBLIC_GEMINI_API_KEY;
const genAI = new GoogleGenerativeAI(apiKey);

const handleClick = async () => {
  try {
    const model = genAI.getGenerativeModel({model: "gemini-1.5-flash"});

    const prompt = "리액트가 뭐야?."

    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = response.text();
    console.log(text);
  } catch (error) {
    console.error("Error generating content:", error);
  }
};

return handleClick;