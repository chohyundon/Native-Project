import { GoogleGenerativeAI } from "@google/generative-ai";

// @ts-ignore
const apiKey = process.env.EXPO_PUBLIC_GEMINI_API_KEY;
// @ts-ignore
const genAI = new GoogleGenerativeAI(apiKey);

export const handleClick = async (value:string) => {
  try {
    const model = genAI.getGenerativeModel({model: "gemini-1.5-flash"});

    const prompt = value

    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = response.text();
    console.log(text);
  } catch (error) {
    console.error("Error generating content:", error);
  }
};
